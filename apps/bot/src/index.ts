import "dotenv/config"
import { Bot } from 'grammy'

const bot = new Bot(process.env.BOT_TOKEN!)

bot.start({
    onStart: (ctx) => {
        console.log(`Bot started as ${ctx.username}`)
    }
})