"use client";

import Link from "next/link";
import { Coffee, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-coffee-600" />
            <span className="text-xl font-bold text-coffee-800">
              Brew & Bean
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-coffee-700 hover:text-coffee-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-coffee-700 hover:text-coffee-900 font-medium"
            >
              About
            </Link>
            <Link
              href="/menu"
              className="text-coffee-700 hover:text-coffee-900 font-medium"
            >
              Menu
            </Link>
            <Link
              href="/call"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-coffee-700" />
            ) : (
              <Menu className="h-6 w-6 text-coffee-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-coffee-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-coffee-700 hover:text-coffee-900 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-coffee-700 hover:text-coffee-900 font-medium"
              >
                About
              </Link>
              <Link
                href="/menu"
                className="text-coffee-700 hover:text-coffee-900 font-medium"
              >
                Menu
              </Link>
              <Link
                href="/call"
                className="btn-primary flex items-center justify-center space-x-2 w-full"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
