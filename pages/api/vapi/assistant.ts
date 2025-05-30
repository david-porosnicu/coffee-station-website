import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { VAPI_API_KEY } = process.env

  if (!VAPI_API_KEY) {
    return res.status(500).json({ message: "VAPI API key not configured" })
  }

  try {
    // Create or update assistant configuration
    const assistantConfig = {
      model: {
        provider: "openai",
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a friendly coffee shop assistant for Brew & Bean Coffee Shop. 
            Help customers with orders, menu questions, store hours, and general inquiries. 
            Be warm, helpful, and knowledgeable about coffee. Keep responses concise and conversational.
            
            Menu highlights:
            - Espresso drinks: Americano ($3.50), Latte ($4.50), Cappuccino ($4.00), Macchiato ($4.75)
            - Specialty drinks: Caramel Macchiato ($5.25), Vanilla Latte ($4.75), Mocha ($5.00)
            - Cold brew and iced coffees ($3.00-$4.50)
            - Pastries: Croissants ($2.50), Muffins ($3.00), Cookies ($2.00)
            - Hours: Monday-Friday 6AM-8PM, Saturday-Sunday 7AM-9PM
            - Location: 123 Coffee St, Bean City
            - Phone: (555) 123-BREW
            
            When taking orders, confirm the drink size, any modifications, and ask if they want anything else.
            For pickup orders, ask for their name and give them an estimated pickup time (usually 5-10 minutes).`,
          },
        ],
      },
      voice: {
        provider: "elevenlabs",
        voiceId: "sarah",
      },
      functions: [
        {
          name: "place_order",
          description: "Place a coffee order for the customer",
          parameters: {
            type: "object",
            properties: {
              items: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    size: { type: "string" },
                    modifications: { type: "array", items: { type: "string" } },
                    price: { type: "number" },
                  },
                },
              },
              customerName: { type: "string" },
              total: { type: "number" },
            },
          },
        },
      ],
    }

    // In a real implementation, you would make an API call to VAPI here
    // const response = await fetch('https://api.vapi.ai/assistant', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${VAPI_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(assistantConfig)
    // })

    res.status(200).json({
      message: "Assistant configuration ready",
      config: assistantConfig,
    })
  } catch (error) {
    console.error("Assistant config error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
