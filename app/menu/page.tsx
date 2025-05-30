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
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-coffee-900">
        Coffee Station Menu
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-coffee-800">
          Coffee Blends
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coffeeBlends.map((blend) => (
            <div
              key={blend.name}
              className="bg-white rounded-lg shadow p-5 border border-coffee-100"
            >
              <h3 className="text-xl font-bold text-coffee-700 mb-1">
                {blend.name}
              </h3>
              <p className="text-coffee-600 mb-1">
                Origin: <span className="font-medium">{blend.origin}</span>
              </p>
              <p className="text-coffee-600 mb-1">
                Roast: <span className="font-medium">{blend.roast_level}</span>
              </p>
              <p className="text-coffee-600">
                Notes:{" "}
                <span className="font-medium">{blend.notes.join(", ")}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-coffee-800">
          Milk Options
        </h2>
        <ul className="list-disc list-inside text-coffee-700">
          {milkOptions.map((milk) => (
            <li key={milk}>{milk}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-coffee-800">
          Business Hours
        </h2>
        <ul className="text-coffee-700">
          {businessHours.map((item) => (
            <li
              key={item.day}
              className="flex justify-between border-b border-coffee-100 py-1"
            >
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-coffee-800">
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
    </div>
  );
}
