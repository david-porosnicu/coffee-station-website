import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { type, call, message } = req.body

    console.log("VAPI Webhook received:", { type, call: call?.id, message })

    switch (type) {
      case "call-start":
        console.log("Call started:", call?.id)
        // Handle call start logic here
        break

      case "call-end":
        console.log("Call ended:", call?.id)
        // Handle call end logic here
        // You could save call data to a database here
        break

      case "transcript":
        console.log("Transcript received:", message)
        // Handle transcript updates here
        break

      case "function-call":
        console.log("Function call received:", message)
        // Handle function calls here (e.g., placing orders)
        break

      default:
        console.log("Unknown webhook type:", type)
    }

    res.status(200).json({ message: "Webhook processed successfully" })
  } catch (error) {
    console.error("Webhook error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
