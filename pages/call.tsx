"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallWidget from "@/components/CallWidget";
import { ArrowLeft, Coffee } from "lucide-react";
import Link from "next/link";

export default function CallPage() {
  const [callStarted, setCallStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-coffee-600 hover:text-coffee-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="h-12 w-12 text-coffee-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-coffee-900 mb-4">
              Talk to Our AI Assistant
            </h1>
            <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
              Experience our revolutionary voice-powered ordering system. Ask
              about our menu, place orders, or get information about our coffee
              shop.
            </p>
          </div>

          {/* Call Widget */}
          <div className="mb-12">
            <CallWidget
              onCallStart={() => setCallStarted(true)}
              onCallEnd={() => setCallStarted(false)}
            />
          </div>

          {/* Instructions */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-coffee-900 mb-4">
                How to Use Our Voice Assistant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-coffee-800 mb-2">
                    What You Can Ask:
                  </h3>
                  <ul className="text-coffee-600 space-y-1 text-sm">
                    <li>• "What's on your menu?"</li>
                    <li>• "I'd like to order a large latte"</li>
                    <li>• "What are your store hours?"</li>
                    <li>• "Do you have any dairy-free options?"</li>
                    <li>• "What's your most popular drink?"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-coffee-800 mb-2">
                    Tips for Best Experience:
                  </h3>
                  <ul className="text-coffee-600 space-y-1 text-sm">
                    <li>• Speak clearly and naturally</li>
                    <li>• Wait for the assistant to finish speaking</li>
                    <li>• Use specific drink names when ordering</li>
                    <li>• Ask follow-up questions if needed</li>
                    <li>• End the call when you're done</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
