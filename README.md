# Daylum - Your Personal Telegram Assistant

A feature-rich Telegram bot designed to help you manage your daily life with calendar integration, smart notifications, weather updates, and task management.

## 🌟 Features

### 📅 Calendar & Day Management
- View your daily schedule and upcoming events
- Get reminders for important dates and appointments
- Calendar integration with popular calendar services
- Daily overview of your day's activities

### 🔔 Smart Notifications
- Customizable reminder system
- Location-based notifications
- Time-sensitive alerts
- Recurring reminder support

### 🌤️ Weather Information
- Real-time weather updates for your location
- Weather forecasts for planning ahead
- Weather alerts and notifications
- Multiple location support

### ✅ Todo Task Management
- Create, edit, and delete tasks
- Set task priorities and due dates
- Mark tasks as complete
- Task categorization and organization
- Daily task summaries

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun package manager
- PostgreSQL database
- Telegram Bot Token

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd daylum
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Telegram Bot Configuration
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/daylum
   
   # Weather API (OpenWeatherMap)
   WEATHER_API_KEY=your_openweathermap_api_key
   
   # Calendar API (Google Calendar)
   GOOGLE_CALENDAR_CLIENT_ID=your_google_client_id
   GOOGLE_CALENDAR_CLIENT_SECRET=your_google_client_secret
   ```

4. **Set up the database**
   ```bash
   cd packages/db
   bun run prisma generate
   bun run prisma db push
   ```

5. **Start the bot**
   ```bash
   bun run dev
   ```

## 📁 Project Structure

```
daylum/
├── apps/
│   └── bot/                 # Telegram bot application
│       ├── src/
│       │   └── index.ts     # Bot entry point
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   └── db/                  # Database package
│       ├── prisma/          # Database schema and migrations
│       ├── index.ts         # Database client
│       └── package.json
├── package.json             # Root package.json
├── turbo.json              # Turborepo configuration
└── README.md
```

## 🛠️ Technology Stack

- **Runtime**: Node.js with TypeScript
- **Package Manager**: Bun
- **Database**: PostgreSQL with Prisma ORM
- **Bot Framework**: Telegram Bot API
- **Monorepo**: Turborepo
- **Weather API**: OpenWeatherMap
- **Calendar API**: Google Calendar

## 📱 Bot Commands

- `/start` - Initialize the bot and get welcome message
- `/calendar` - View your calendar and upcoming events
- `/weather` - Get current weather information
- `/todo` - Manage your todo tasks
- `/reminder` - Set up notifications and reminders
- `/help` - Show available commands and features

## 🔧 Development

### Running in Development Mode
```bash
bun run dev
```

### Building for Production
```bash
bun run build
```

### Database Migrations
```bash
cd packages/db
bun run prisma migrate dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/daylum/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Roadmap

- [ ] Voice command support
- [ ] Integration with more calendar services
- [ ] Advanced weather forecasting
- [ ] Task templates and recurring tasks
- [ ] Multi-language support
- [ ] Group chat features
- [ ] Analytics and insights
- [ ] Mobile app companion

---

**Daylum** - Making your daily life easier, one notification at a time! 🌟