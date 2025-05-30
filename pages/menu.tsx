import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const coffeeBlends = [
  {
    name: "Morning Light",
    origin: "Colombia",
    roast_level: "Medium",
    notes: ["Chocolate", "Citrus"],
  },
  {
    name: "Dark Knight",
    origin: "Ethiopia",
    roast_level: "Dark",
    notes: ["Berry", "Spice"],
  },
];

const milkOptions = ["Regular (whole milk)", "Skim", "Soy", "Oat", "Almond"];

const businessHours = [
  { day: "Monday", hours: "7:00 AM–7:00 PM" },
  { day: "Tuesday", hours: "7:00 AM–7:00 PM" },
  { day: "Wednesday", hours: "7:00 AM–7:00 PM" },
  { day: "Thursday", hours: "7:00 AM–7:00 PM" },
  { day: "Friday", hours: "7:00 AM–9:00 PM" },
  { day: "Saturday", hours: "8:00 AM–9:00 PM" },
  { day: "Sunday", hours: "8:00 AM–5:00 PM" },
];

const location = {
  address: "123 Bean Blvd, Bucharest, Romania",
  map_link: "https://goo.gl/maps/Example",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-50 to-coffee-100 py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-coffee-900 mb-4">
            Coffee Station Menu
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Explore our signature blends, milk options, and everything you need
            to enjoy the perfect cup at Coffee Station.
          </p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-coffee-800">
            Coffee Blends
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coffeeBlends.map((blend) => (
              <div
                key={blend.name}
                className="bg-white rounded-xl shadow p-6 border border-coffee-100"
              >
                <h3 className="text-xl font-bold text-coffee-700 mb-2">
                  {blend.name}
                </h3>
                <p className="text-coffee-600 mb-1">
                  Origin: <span className="font-medium">{blend.origin}</span>
                </p>
                <p className="text-coffee-600 mb-1">
                  Roast:{" "}
                  <span className="font-medium">{blend.roast_level}</span>
                </p>
                <p className="text-coffee-600">
                  Notes:{" "}
                  <span className="font-medium">{blend.notes.join(", ")}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-coffee-800">
            Milk Options
          </h2>
          <ul className="list-disc list-inside text-coffee-700 space-y-2">
            {milkOptions.map((milk) => (
              <li key={milk}>{milk}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-coffee-800">
            Business Hours
          </h2>
          <ul className="text-coffee-700 divide-y divide-coffee-100">
            {businessHours.map((item) => (
              <li key={item.day} className="flex justify-between py-2">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-coffee-800">
            Location
          </h2>
          <p className="text-coffee-700 mb-2">{location.address}</p>
          <a
            href={location.map_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Google Maps
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
