import 'dotenv/config'
import { z } from 'zod'

export const envSchema = z.object({
    BOT_TOKEN: z.string().min(1, "BOT_TOKEN is required"),
    
    WEBHOOK_SECRET: z.string().min(1, "WEBHOOK_SECRET is required"),

    LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).optional().default('info'),
})

export const env = envSchema.parse(process.env)