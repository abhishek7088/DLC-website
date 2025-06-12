"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageCircle, Users, Star, Volume2, Globe, Type, Menu, X } from "lucide-react"
import Link from "next/link"
import { AccessibilityPanel } from "@/components/accessibility-panel"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: BookOpen,
      title: "Easy Tutorials",
      description: "Step-by-step guides for WhatsApp, Paytm, Google Maps and more",
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "DigiBuddy is here to answer all your questions 24/7",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with other learners and share experiences",
    },
    {
      icon: Star,
      title: "Beginner Friendly",
      description: "Designed specifically for parents and elderly users",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 58,
      text: "Finally learned to use WhatsApp to talk to my grandchildren!",
      rating: 5,
    },
    {
      name: "Sunita Devi",
      age: 62,
      text: "The tutorials are so easy to follow. Thank you for making technology simple!",
      rating: 5,
    },
    {
      name: "Mohan Singh",
      age: 55,
      text: "DigiBuddy helped me set up online banking safely.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Digital Literacy Course</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link href="/" className="block px-3 py-2 text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/tutorials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Tutorials
                </Link>
                <Link href="/ai-chat" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  AI Chat
                </Link>
                <Link href="/feedback" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Feedback
                </Link>
                <div className="px-3 py-2">
                  <AccessibilityPanel />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 text-lg px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🌟 Empowering Digital Literacy! 🌟
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Digital Tools
            <span className="text-blue-600 block">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Designed specifically for parents and elderly users. Master WhatsApp, Paytm, Google Maps, and more with our
            easy-to-follow tutorials and AI assistant support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/tutorials">Start Learning Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link href="/ai-chat">Chat with DigiBuddy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Digital Literacy Course?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tutorials Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-16 w-16 text-green-600" />
                </div>
                <CardTitle>WhatsApp Basics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Learn to send messages, make calls, and share photos with family
                </CardDescription>
                <Badge className="bg-green-100 text-green-800">Beginner</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">💳</span>
                </div>
                <CardTitle>Paytm & Digital Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Safe and secure online payments, bill payments, and money transfers
                </CardDescription>
                <Badge className="bg-blue-100 text-blue-800">Intermediate</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">🗺️</span>
                </div>
                <CardTitle>Google Maps Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Find directions, locate places, and navigate with confidence
                </CardDescription>
                <Badge className="bg-red-100 text-red-800">Beginner</Badge>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/tutorials">View All Tutorials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>Age: {testimonial.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of parents and elderly users who have successfully learned digital tools with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/tutorials">Start Learning Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/ai-chat">Ask DigiBuddy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">DLC</span>
              </div>
              <p className="text-gray-400">Empowering digital literacy for everyone, one tutorial at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chat" className="text-gray-400 hover:text-white">
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-gray-400 hover:text-white">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
              <div className="flex space-x-2 mb-4">
                <Button variant="outline" size="sm" className="text-white border-gray-600">
                  <Volume2 className="h-4 w-4 mr-1" />
                  Voice
                </Button>
                <Button variant="outline" size="sm" className="text-white border-gray-600">
                  <Type className="h-4 w-4 mr-1" />
                  Font
                </Button>
                <Button variant="outline" size="sm" className="text-white border-gray-600">
                  <Globe className="h-4 w-4 mr-1" />
                  Lang
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Digital Literacy Course. Made with ❤️ for parents and elderly users.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
