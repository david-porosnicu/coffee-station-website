"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function EnvCheck() {
  const [envStatus, setEnvStatus] = useState<{
    apiKey: boolean
    botId: boolean
    loading: boolean
  }>({
    apiKey: false,
    botId: false,
    loading: true,
  })

  useEffect(() => {
    const checkEnv = () => {
      const apiKey = !!process.env.NEXT_PUBLIC_VAPI_API_KEY
      const botId = !!process.env.NEXT_PUBLIC_VAPI_BOT_ID

      setEnvStatus({
        apiKey,
        botId,
        loading: false,
      })
    }

    checkEnv()
  }, [])

  if (envStatus.loading) {
    return null
  }

  const allConfigured = envStatus.apiKey && envStatus.botId

  if (allConfigured) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
        <CheckCircle className="h-5 w-5" />
        <span className="text-sm font-medium">VAPI configured ✓</span>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex items-start space-x-2">
        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium">VAPI Configuration Missing:</p>
          <ul className="text-xs mt-1 space-y-1">
            {!envStatus.apiKey && <li>• NEXT_PUBLIC_VAPI_API_KEY</li>}
            {!envStatus.botId && <li>• NEXT_PUBLIC_VAPI_BOT_ID</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
