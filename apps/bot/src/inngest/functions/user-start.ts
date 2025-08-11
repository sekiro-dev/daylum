import { inngest } from '@/inngest/client'
import { bot } from '@/main'

export const welcomeMessage = inngest.createFunction(
    { id: "send-welcome-message" },
    { event: "app/user.start" },
    async ({ event, step }) => {
        await step.sleep("wait-for-first-message", "15 mins")

        await step.run("send-message", async () => {
            await bot.api.sendMessage(event.data.chatId, "Hi")
        })
    }
)