import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Coffee, Code, Zap } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="h-12 w-12 text-coffee-600" />
            </div>
            <h1 className="text-4xl font-bold text-coffee-900 mb-4">Brew & Bean Coffee Shop</h1>
            <p className="text-xl text-coffee-600">A Next.js application with VAPI.ai voice bot integration</p>
          </div>

          {/* README Style Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4 flex items-center">
                <Code className="h-6 w-6 mr-2" />
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">Frontend</h3>
                  <ul className="text-coffee-600 space-y-1">
                    <li>• Next.js 14 (Pages Router)</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Lucide React Icons</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">AI Integration</h3>
                  <ul className="text-coffee-600 space-y-1">
                    <li>• VAPI.ai SDK</li>
                    <li>• Real-time voice processing</li>
                    <li>• Live transcription</li>
                    <li>• Custom AI assistant</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 mr-2" />
                Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">Voice AI Integration</h3>
                  <p className="text-coffee-600 text-sm mb-3">
                    Powered by VAPI.ai for natural voice conversations with customers.
                  </p>
                  <ul className="text-coffee-600 space-y-1 text-sm">
                    <li>• Real-time voice recognition</li>
                    <li>• Natural language processing</li>
                    <li>• Live conversation transcripts</li>
                    <li>• Call duration tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">Responsive Design</h3>
                  <p className="text-coffee-600 text-sm mb-3">Fully responsive design optimized for all devices.</p>
                  <ul className="text-coffee-600 space-y-1 text-sm">
                    <li>• Mobile-first approach</li>
                    <li>• Touch-friendly interface</li>
                    <li>• Adaptive layouts</li>
                    <li>• Cross-browser compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4">🚀 Installation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">1. Clone the repository</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    git clone https://github.com/yourusername/coffee-shop-vapi.git
                    <br />
                    cd coffee-shop-vapi
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">2. Install dependencies</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">npm install</div>
                </div>

                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">3. Set up environment variables</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    cp .env.local.example .env.local
                  </div>
                  <p className="text-coffee-600 text-sm mt-2">
                    Add your VAPI.ai API key and Bot ID to the .env.local file
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">4. Run the development server</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">npm run dev</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4">🌐 Deployment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">Deploy to Vercel</h3>
                  <p className="text-coffee-600 text-sm mb-3">
                    The easiest way to deploy your Next.js app is to use the Vercel Platform.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-3">
                    npm run build
                    <br />
                    vercel --prod
                  </div>
                  <p className="text-coffee-600 text-sm">
                    Don't forget to add your environment variables in the Vercel dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4">⚙️ Configuration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">VAPI.ai Setup</h3>
                  <ol className="text-coffee-600 space-y-2 text-sm list-decimal list-inside">
                    <li>
                      Create an account at{" "}
                      <a href="https://vapi.ai" className="text-blue-600 hover:underline">
                        vapi.ai
                      </a>
                    </li>
                    <li>Create a new assistant in your VAPI dashboard</li>
                    <li>Copy your API key and Assistant ID</li>
                    <li>Add them to your .env.local file</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-coffee-800 mb-2">Environment Variables</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    VAPI_API_KEY=your_vapi_api_key_here
                    <br />
                    VAPI_BOT_ID=your_vapi_bot_id_here
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-coffee-900 mb-4">📱 Mobile Responsive</h2>
              <p className="text-coffee-600 mb-4">This application is fully optimized for mobile devices with:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-coffee-600 space-y-1 text-sm">
                  <li>• Touch-friendly call controls</li>
                  <li>• Responsive navigation menu</li>
                  <li>• Optimized transcript display</li>
                </ul>
                <ul className="text-coffee-600 space-y-1 text-sm">
                  <li>• Adaptive grid layouts</li>
                  <li>• Mobile-first CSS approach</li>
                  <li>• Cross-device compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
