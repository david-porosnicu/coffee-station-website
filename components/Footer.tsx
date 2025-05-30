import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-300" />
              <span className="text-xl font-bold">Coffee Station</span>
            </div>
            <p className="text-coffee-200 mb-4">
              Premium coffee experience with AI-powered customer service.
              Serving the finest blends in Bucharest.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-coffee-300" />
                <span className="text-coffee-200">
                  123 Bean Blvd, Bucharest, Romania
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-coffee-300" />
                <span className="text-coffee-200">(555) 123-BREW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-coffee-300" />
                <span className="text-coffee-200">
                  coffee.station@email.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-coffee-300" />
                <div className="text-coffee-200">
                  <div>Mon-Thu: 7AM-7PM</div>
                  <div>Fri: 7AM-9PM</div>
                  <div>Sat: 8AM-9PM</div>
                  <div>Sun: 8AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-8 pt-8 text-center">
          <p className="text-coffee-300">
            © 2024 Coffee Station. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
