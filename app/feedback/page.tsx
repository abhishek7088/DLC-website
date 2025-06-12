"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, MessageSquare, Star, Send, CheckCircle, Heart } from "lucide-react"
import Link from "next/link"
import { AccessibilityPanel } from "@/components/accessibility-panel"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    rating: "",
    experience: "",
    suggestions: "",
    tutorials: [] as string[],
    recommend: "",
    improvements: [] as string[],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const tutorialOptions = [
    "WhatsApp Basics",
    "Paytm & Digital Payments",
    "Google Maps Navigation",
    "Gmail Email Basics",
    "YouTube for Beginners",
    "Online Banking Safety",
    "Facebook Basics",
    "Video Calling",
    "Online Shopping",
  ]

  const improvementOptions = [
    "More video tutorials",
    "Larger text and buttons",
    "Voice instructions",
    "Multi-language support",
    "Offline tutorials",
    "Live support chat",
    "Mobile app",
    "Community forum",
  ]

  const handleTutorialChange = (tutorial: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        tutorials: [...prev.tutorials, tutorial],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        tutorials: prev.tutorials.filter((t) => t !== tutorial),
      }))
    }
  }

  const handleImprovementChange = (improvement: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        improvements: [...prev.improvements, improvement],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        improvements: prev.improvements.filter((i) => i !== improvement),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Feedback submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
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
                <Link href="/tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Tutorials
                </Link>
                <Link href="/ai-chat" className="text-gray-700 hover:text-blue-600 transition-colors">
                  AI Chat
                </Link>
                <Link href="/feedback" className="text-blue-600 font-medium">
                  Feedback
                </Link>
                <AccessibilityPanel />
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <CardTitle className="text-3xl text-green-600">Thank You!</CardTitle>
              <CardDescription className="text-lg">Your feedback has been submitted successfully.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We truly appreciate you taking the time to share your thoughts with us. Your feedback helps us improve
                the Digital Literacy Course for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/tutorials">Continue Learning</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
              <Link href="/tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Tutorials
              </Link>
              <Link href="/ai-chat" className="text-gray-700 hover:text-blue-600 transition-colors">
                AI Chat
              </Link>
              <Link href="/feedback" className="text-blue-600 font-medium">
                Feedback
              </Link>
              <AccessibilityPanel />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">We Value Your Feedback</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve the Digital Literacy Course by sharing your experience. Your suggestions make our platform
            better for everyone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
                About You
              </CardTitle>
              <CardDescription>Tell us a bit about yourself (optional but helpful)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="text-base py-3"
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-base">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                    placeholder="Your age"
                    className="text-base py-3"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-base">
                  Email (optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  className="text-base py-3"
                />
              </div>
            </CardContent>
          </Card>

          {/* Rating */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-6 w-6 mr-2 text-blue-600" />
                Overall Rating
              </CardTitle>
              <CardDescription>
                How would you rate your overall experience with our Digital Literacy Course?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.rating}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, rating: value }))}
                className="flex flex-col space-y-3"
              >
                {[
                  { value: "5", label: "Excellent - Exceeded my expectations", emoji: "⭐⭐⭐⭐⭐" },
                  { value: "4", label: "Very Good - Met my expectations", emoji: "⭐⭐⭐⭐" },
                  { value: "3", label: "Good - Mostly satisfied", emoji: "⭐⭐⭐" },
                  { value: "2", label: "Fair - Some improvements needed", emoji: "⭐⭐" },
                  { value: "1", label: "Poor - Needs significant improvement", emoji: "⭐" },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={`rating-${option.value}`} />
                    <Label htmlFor={`rating-${option.value}`} className="flex-1 text-base cursor-pointer">
                      <span className="mr-2">{option.emoji}</span>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Tutorials Used */}
          <Card>
            <CardHeader>
              <CardTitle>Which tutorials have you tried?</CardTitle>
              <CardDescription>
                Select all the tutorials you've used (helps us understand what's popular)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tutorialOptions.map((tutorial) => (
                  <div key={tutorial} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id={`tutorial-${tutorial}`}
                      checked={formData.tutorials.includes(tutorial)}
                      onCheckedChange={(checked) => handleTutorialChange(tutorial, checked as boolean)}
                    />
                    <Label htmlFor={`tutorial-${tutorial}`} className="text-base cursor-pointer">
                      {tutorial}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                What did you like most? What was challenging? We'd love to hear your story.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.experience}
                onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                placeholder="Tell us about your learning journey with our digital literacy course..."
                className="min-h-[120px] text-base"
              />
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Would you recommend us?</CardTitle>
              <CardDescription>
                Would you recommend our Digital Literacy Course to other parents or elderly users?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.recommend}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, recommend: value }))}
                className="flex flex-col space-y-3"
              >
                {[
                  { value: "definitely", label: "Definitely! I'll tell everyone about it", emoji: "💯" },
                  { value: "probably", label: "Probably, it's quite helpful", emoji: "👍" },
                  { value: "maybe", label: "Maybe, with some improvements", emoji: "🤔" },
                  { value: "probably-not", label: "Probably not, needs work", emoji: "👎" },
                  { value: "definitely-not", label: "Definitely not", emoji: "❌" },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={`recommend-${option.value}`} />
                    <Label htmlFor={`recommend-${option.value}`} className="flex-1 text-base cursor-pointer">
                      <span className="mr-2">{option.emoji}</span>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card>
            <CardHeader>
              <CardTitle>What improvements would you like to see?</CardTitle>
              <CardDescription>
                Select all that apply - your suggestions help us prioritize new features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {improvementOptions.map((improvement) => (
                  <div key={improvement} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id={`improvement-${improvement}`}
                      checked={formData.improvements.includes(improvement)}
                      onCheckedChange={(checked) => handleImprovementChange(improvement, checked as boolean)}
                    />
                    <Label htmlFor={`improvement-${improvement}`} className="text-base cursor-pointer">
                      {improvement}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Suggestions</CardTitle>
              <CardDescription>Any other ideas, requests, or feedback you'd like to share with us?</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.suggestions}
                onChange={(e) => setFormData((prev) => ({ ...prev, suggestions: e.target.value }))}
                placeholder="Share any additional thoughts, suggestions, or ideas..."
                className="min-h-[100px] text-base"
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="text-lg px-12 py-4">
              <Send className="h-5 w-5 mr-2" />
              Submit Feedback
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              <Heart className="h-4 w-4 inline mr-1 text-red-500" />
              Thank you for helping us improve!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
