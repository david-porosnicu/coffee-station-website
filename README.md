# Brew & Bean Coffee Shop

A modern Next.js application for a coffee shop with AI-powered voice ordering using VAPI.ai integration.

## 🚀 Features

- **Voice AI Integration**: Natural voice conversations powered by VAPI.ai (via CDN script)
- **Real-time Transcription**: Live conversation transcripts during calls
- **Mobile Responsive**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, coffee-themed design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **API Security**: Secured API routes with proper error handling

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **AI Integration**: VAPI.ai (CDN script)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/david-porosnicu/coffee-station-website.git
   cd coffee-station-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your VAPI.ai credentials to `.env.local`:

   ```
   NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key_here
   NEXT_PUBLIC_VAPI_BOT_ID=your_vapi_bot_id_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ VAPI.ai Setup

1. Create an account at [vapi.ai](https://vapi.ai)
2. Create a new assistant in your VAPI dashboard
3. Configure your assistant with coffee shop knowledge
4. Copy your API key and Assistant ID
5. Add them to your `.env.local` file as shown above

## 🔗 Voicebot Integration (CDN Script)

- The voicebot is integrated using the VAPI.ai CDN script, loaded dynamically in the app.
- No npm package is required for the VAPI SDK.
- The relevant environment variables **must** be prefixed with `NEXT_PUBLIC_` to be available in the browser.
- The widget is initialized in the `CallWidget` component using these variables.

## 🌐 Deployment

### Deploy to Vercel

1. **Build the application**
   ```bash
   npm run build
   ```
2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```
3. **Add environment variables**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add your `NEXT_PUBLIC_VAPI_API_KEY` and `NEXT_PUBLIC_VAPI_BOT_ID`

## 📱 Mobile Responsive Design

The application is fully optimized for mobile devices with:

- Touch-friendly call controls
- Responsive navigation menu
- Optimized transcript display
- Adaptive grid layouts
- Mobile-first CSS approach

## 🎯 Key Components

- **CallWidget**: Main voice interaction component (loads VAPI via CDN)
- **Header**: Navigation with mobile menu
- **Footer**: Contact information and hours
- **Landing Page**: Hero section with call-to-action
- **About Page**: Technical documentation

## 🔧 API Routes

- `/api/vapi/webhook`: Handles VAPI.ai webhooks
- `/api/vapi/config`: Returns configuration status
- `/api/vapi/assistant`: Assistant configuration management

## 🛠️ Troubleshooting

- **Voicebot not working?**
  - Ensure your `.env.local` contains `NEXT_PUBLIC_VAPI_API_KEY` and `NEXT_PUBLIC_VAPI_BOT_ID`.
  - Restart your dev server after editing `.env.local`.
  - Check the browser console for errors and ensure the CDN script loads successfully.
  - Make sure your API key and Bot ID are correct and active in your VAPI dashboard.
  - Only `NEXT_PUBLIC_` variables are available in the browser; do not use server-only env variable names.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@brewandbean.com or visit our contact page.
