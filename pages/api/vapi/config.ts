import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    // Return VAPI configuration for the frontend
    const config = {
      apiKey: process.env.VAPI_API_KEY ? "configured" : "missing",
      botId: process.env.VAPI_BOT_ID ? "configured" : "missing",
      webhookUrl: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/vapi/webhook`,
    }

    res.status(200).json(config)
  } catch (error) {
    console.error("Config error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
