import { Elysia } from 'elysia'
import { Bot, webhookCallback } from 'grammy'

import { serve } from 'inngest/bun'
import { inngest } from '@/inngest/client'

import { env } from '@/env'
import { logger } from '@/logger'

export const bot = new Bot(env.BOT_TOKEN)

bot.command('start', async (ctx) => {
    await inngest.send({ name: "app/user.start", data: { chatId: ctx.chatId } })

    await ctx.reply("i will send you master after 15m")
})

export default new Elysia()
    .all('/inngest', async ({ request }) => serve({ client: inngest, functions: [] })(request))
    .post('/webhook', webhookCallback(bot, "elysia", { secretToken: env.WEBHOOK_SECRET }))
    .get('/', () => "OK")
    .listen(3000, ({ url }) => {
        logger.info(`🤖 Bot server started on ${url}`)
    })