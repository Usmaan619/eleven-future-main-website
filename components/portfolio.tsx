"use client"

import { useState } from "react"
import Image from "next/image"

export function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    // Web Projects (10 total)
    { id: 1, title: "E-Commerce Dashboard", category: "web", image: "/projects/ecommerce-01.jpg" },
    { id: 2, title: "Fashion Retail Platform", category: "web", image: "/projects/ecommerce-02.jpg" },
    { id: 3, title: "Electronics Store", category: "web", image: "/projects/ecommerce-03.jpg" },
    { id: 4, title: "SaaS Analytics Dashboard", category: "web", image: "/projects/saas-01.jpg" },
    { id: 5, title: "Project Management System", category: "web", image: "/projects/saas-02.jpg" },
    // { id: 6, title: "Corporate Website", category: "web", image: "/projects/corporate-01.jpg" },
    // { id: 7, title: "Consulting Firm Portal", category: "web", image: "/projects/corporate-02.jpg" },
    // { id: 8, title: "Learning Management System", category: "web", image: "/projects/education-01.jpg" },
    // { id: 9, title: "Healthcare Portal", category: "web", image: "/projects/health-01.jpg" },
    // { id: 10, title: "Real Estate Platform", category: "web", image: "/projects/corporate-03.jpg" },

    // Mobile Apps (5 total)
    { id: 11, title: "Fitness Tracker App", category: "mobile", image: "/projects/app-fitness.jpg" },
    { id: 12, title: "Task Manager Mobile", category: "mobile", image: "/projects/app-task.jpg" },
    { id: 13, title: "Food Delivery App", category: "mobile", image: "/projects/app-food.jpg" },
    { id: 14, title: "Social Network App", category: "mobile", image: "/projects/app-social.jpg" },
    { id: 15, title: "Travel Booking App", category: "mobile", image: "/projects/app-travel.jpg" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
        <p className="text-gray-400 text-lg mb-8">
          50+ successful projects completed. Here's a selection of our recent work across web and mobile platforms.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg transition ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "border border-blue-400/50 text-gray-300 hover:text-blue-400"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-6 py-2 rounded-lg transition ${
              filter === "web"
                ? "bg-blue-500 text-white"
                : "border border-blue-400/50 text-gray-300 hover:text-blue-400"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-6 py-2 rounded-lg transition ${
              filter === "mobile"
                ? "bg-purple-500 text-white"
                : "border border-blue-400/50 text-gray-300 hover:text-blue-400"
            }`}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border border-blue-500/20 hover:border-blue-400/50 transition duration-300 h-64"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-blue-400 text-sm capitalize">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">Want to see more? Let's discuss your project!</p>
        <a
          href="https://wa.me/7000015122?text=Hi%20Eleven%20Future%20Technologies!%20I'm%20interested%20in%20discussing%20a%20project.%20Can%20you%20help%20me%20with%20a%20custom%20website/app?"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition"
        >
          Start Your Project
        </a>
      </div>
    </section>
  )
}
