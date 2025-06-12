"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Send, Bot, User, Mic, Volume2 } from "lucide-react"
import Link from "next/link"
import { AccessibilityPanel } from "@/components/accessibility-panel"
import { useChat } from "ai/react"

export default function AIChatPage() {
  const [isListening, setIsListening] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content:
          "Hello! I'm DigiBuddy, your friendly AI assistant for digital literacy. I'm here to help you learn digital tools like WhatsApp, Paytm, Google Maps, and more. What would you like to learn today?",
      },
    ],
  })

  const quickQuestions = [
    "How do I send a WhatsApp message?",
    "Is online banking safe?",
    "How to make video calls?",
    "How to use Google Maps?",
    "What is digital payment?",
    "How to create email account?",
  ]

  const handleQuickQuestion = (question: string) => {
    handleInputChange({ target: { value: question } } as any)
  }

  const speakMessage = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        handleInputChange({ target: { value: transcript } } as any)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
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
              <Link href="/tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Tutorials
              </Link>
              <Link href="/ai-chat" className="text-blue-600 font-medium">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="h-6 w-6 mr-2 text-blue-600" />
                  DigiBuddy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Your friendly AI assistant for digital literacy. Ask me anything about:
                </p>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• WhatsApp & Messaging</li>
                  <li>• Digital Payments</li>
                  <li>• Navigation Apps</li>
                  <li>• Email & Communication</li>
                  <li>• Online Safety</li>
                  <li>• Social Media</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-blue-600" />
                    Chat with DigiBuddy
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={startListening}
                      disabled={isListening}
                      className="flex items-center"
                    >
                      <Mic className={`h-4 w-4 mr-1 ${isListening ? "text-red-500" : ""}`} />
                      {isListening ? "Listening..." : "Voice"}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.role === "assistant" && <Bot className="h-5 w-5 mt-0.5 text-blue-600" />}
                        {message.role === "user" && <User className="h-5 w-5 mt-0.5 text-white" />}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          {message.role === "assistant" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 p-1 h-auto text-xs hover:bg-gray-200"
                              onClick={() => speakMessage(message.content)}
                            >
                              <Volume2 className="h-3 w-3 mr-1" />
                              Read Aloud
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-5 w-5 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything about digital tools..."
                    className="flex-1 text-base py-3"
                    disabled={isLoading}
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()} size="lg">
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  Tip: You can use voice input by clicking the Voice button or ask quick questions from the sidebar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
