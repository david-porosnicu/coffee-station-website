"use client";

import CallPage from "../pages/call";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Coffee, Phone, Star, Clock, MapPin, Mic } from "lucide-react";
import EnvCheck from "@/components/EnvCheck";
import { useEffect, useState } from "react";

export default function Home() {
  // Fix hydration mismatch: generate random heights only on client
  const [waveHeights, setWaveHeights] = useState<number[]>([]);
  useEffect(() => {
    setWaveHeights(Array.from({ length: 5 }, () => Math.random() * 40 + 20));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-50 to-coffee-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-coffee-900 mb-6">
                Premium Coffee
                <span className="block text-coffee-600">Experience</span>
              </h1>
              <p className="text-xl text-coffee-700 mb-8 max-w-lg mx-auto lg:mx-0">
                Discover the perfect blend of traditional craftsmanship and
                cutting-edge AI technology. Order with your voice, enjoy with
                your heart.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/call"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us Now</span>
                </Link>
                <Link
                  href="/menu"
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg"
                >
                  <Coffee className="h-5 w-5" />
                  <span>View Menu</span>
                </Link>
              </div>

              {/* Voice AI Badge */}
              <div className="mt-8 inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-coffee-200">
                <Mic className="h-4 w-4 text-coffee-600" />
                <span className="text-sm font-medium text-coffee-800">
                  Powered by AI Voice Assistant
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-coffee-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Premium coffee cup with steam"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-coffee-900">4.9/5</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-coffee-600 text-white rounded-lg p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-coffee-900 mb-4">
              Why Choose Brew & Bean?
            </h2>
            <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
              Experience the future of coffee ordering with our innovative voice
              AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-coffee-50 hover:bg-coffee-100 transition-colors">
              <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                Voice Ordering
              </h3>
              <p className="text-coffee-600">
                Simply speak your order naturally. Our AI assistant understands
                your preferences and helps you find the perfect drink.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-coffee-50 hover:bg-coffee-100 transition-colors">
              <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-coffee-600">
                Sourced from the finest coffee farms worldwide. Every cup is
                crafted with precision and passion by our expert baristas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-coffee-50 hover:bg-coffee-100 transition-colors">
              <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                Quick Service
              </h3>
              <p className="text-coffee-600">
                Fast, efficient service without compromising quality. Order
                ahead with voice commands and skip the wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice AI Demo Section */}
      <section className="py-20 bg-gradient-to-r from-coffee-600 to-coffee-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Try Our AI Voice Assistant
              </h2>
              <p className="text-xl text-coffee-100 mb-8">
                Experience the future of coffee ordering. Our AI assistant can
                help you:
              </p>
              <ul className="space-y-3 text-coffee-100 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coffee-300 rounded-full"></div>
                  <span>Browse our complete menu with descriptions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coffee-300 rounded-full"></div>
                  <span>Get personalized drink recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coffee-300 rounded-full"></div>
                  <span>Place orders with custom modifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-coffee-300 rounded-full"></div>
                  <span>Check store hours and location</span>
                </li>
              </ul>
              <Link
                href="/call"
                className="inline-flex items-center space-x-2 bg-white text-coffee-800 font-semibold py-3 px-6 rounded-lg hover:bg-coffee-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Start Voice Chat</span>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Voice Assistant Ready
                  </h3>
                  <p className="text-coffee-100">
                    Click to start talking with our AI
                  </p>
                </div>

                {/* Simulated Voice Waves - fixed for hydration */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {waveHeights.length === 5
                    ? waveHeights.map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white/60 rounded-full animate-pulse"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      ))
                    : null}
                </div>

                <div className="text-center">
                  <p className="text-sm text-coffee-200 italic">
                    "Hi! I'd like a large caramel macchiato with oat milk,
                    please."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-coffee-600" />
                <h3 className="text-2xl font-bold text-coffee-900">Visit Us</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-coffee-800">Address</h4>
                  <p className="text-coffee-600">
                    123 Bean Blvd, Bucharest, Romania
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Phone</h4>
                  <p className="text-coffee-600">(555) 123-BREW</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800">Email</h4>
                  <p className="text-coffee-600">coffee.station@email.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-coffee-600" />
                <h3 className="text-2xl font-bold text-coffee-900">Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-coffee-800">Mon-Thu</span>
                  <span className="text-coffee-600">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-800">Friday</span>
                  <span className="text-coffee-600">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-800">Saturday</span>
                  <span className="text-coffee-600">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-800">Sunday</span>
                  <span className="text-coffee-600">8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnvCheck />
    </div>
  );
}
