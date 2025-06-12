"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Search, Play, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import { AccessibilityPanel } from "@/components/accessibility-panel"

export default function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const tutorials = [
    {
      id: 1,
      title: "WhatsApp Basics",
      description: "Learn to send messages, make calls, and share photos with family and friends",
      category: "communication",
      difficulty: "Beginner",
      duration: "15 min",
      rating: 4.8,
      students: 1250,
      icon: "💬",
      color: "green",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Paytm & Digital Payments",
      description: "Safe and secure online payments, bill payments, and money transfers",
      category: "finance",
      difficulty: "Intermediate",
      duration: "20 min",
      rating: 4.7,
      students: 980,
      icon: "💳",
      color: "blue",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Google Maps Navigation",
      description: "Find directions, locate places, and navigate with confidence",
      category: "navigation",
      difficulty: "Beginner",
      duration: "12 min",
      rating: 4.9,
      students: 1450,
      icon: "🗺️",
      color: "red",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Gmail Email Basics",
      description: "Send, receive, and organize emails like a pro",
      category: "communication",
      difficulty: "Beginner",
      duration: "18 min",
      rating: 4.6,
      students: 890,
      icon: "📧",
      color: "red",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "YouTube for Beginners",
      description: "Watch videos, subscribe to channels, and create playlists",
      category: "entertainment",
      difficulty: "Beginner",
      duration: "14 min",
      rating: 4.8,
      students: 1120,
      icon: "📺",
      color: "red",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Online Banking Safety",
      description: "Secure online banking practices and fraud prevention",
      category: "finance",
      difficulty: "Intermediate",
      duration: "25 min",
      rating: 4.9,
      students: 750,
      icon: "🏦",
      color: "blue",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Facebook Basics",
      description: "Connect with friends and family on Facebook safely",
      category: "social",
      difficulty: "Beginner",
      duration: "16 min",
      rating: 4.5,
      students: 1050,
      icon: "👥",
      color: "blue",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Video Calling with Family",
      description: "Master video calls on WhatsApp, Zoom, and Google Meet",
      category: "communication",
      difficulty: "Intermediate",
      duration: "22 min",
      rating: 4.7,
      students: 920,
      icon: "📹",
      color: "green",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      title: "Online Shopping Safely",
      description: "Shop online with confidence on Amazon, Flipkart, and more",
      category: "shopping",
      difficulty: "Intermediate",
      duration: "28 min",
      rating: 4.6,
      students: 680,
      icon: "🛒",
      color: "orange",
      videoUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { id: "all", name: "All Tutorials", count: tutorials.length },
    {
      id: "communication",
      name: "Communication",
      count: tutorials.filter((t) => t.category === "communication").length,
    },
    { id: "finance", name: "Finance & Banking", count: tutorials.filter((t) => t.category === "finance").length },
    { id: "navigation", name: "Navigation", count: tutorials.filter((t) => t.category === "navigation").length },
    {
      id: "entertainment",
      name: "Entertainment",
      count: tutorials.filter((t) => t.category === "entertainment").length,
    },
    { id: "social", name: "Social Media", count: tutorials.filter((t) => t.category === "social").length },
    { id: "shopping", name: "Online Shopping", count: tutorials.filter((t) => t.category === "shopping").length },
  ]

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
              <Link href="/" className="text-xl font-bold text-gray-900">
                Digital Literacy Course
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/tutorials" className="text-blue-600 font-medium">
                Tutorials
              </Link>
              <Link href="/ai-chat" className="text-gray-700 hover:text-blue-600 transition-colors">
                AI Chat
              </Link>
              <Link href="/feedback" className="text-gray-700 hover:text-blue-600 transition-colors">
                Feedback
              </Link>
              <AccessibilityPanel />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Tutorials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step video tutorials designed specifically for parents and elderly users. Learn at your own pace
              with clear, easy-to-follow instructions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-lg py-3"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tutorials found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <Card key={tutorial.id} className="hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={tutorial.videoUrl || "/placeholder.svg"}
                        alt={tutorial.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                          <Play className="h-6 w-6 mr-2" />
                          Watch Tutorial
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="text-3xl bg-white rounded-full p-2 shadow-lg">{tutorial.icon}</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getDifficultyColor(tutorial.difficulty)}>{tutorial.difficulty}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {tutorial.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-4 line-clamp-2">{tutorial.description}</CardDescription>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tutorial.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                        {tutorial.rating}
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <Play className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our AI assistant DigiBuddy is here to help you choose the right tutorial and answer any questions.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link href="/ai-chat">
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat with DigiBuddy
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
