"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Type, Volume2, Globe, Eye, Moon, Sun } from "lucide-react"

export function AccessibilityPanel() {
  const [fontSize, setFontSize] = useState([16])
  const [highContrast, setHighContrast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Apply font size changes
    document.documentElement.style.fontSize = `${fontSize[0]}px`
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "bn", name: "বাংলা (Bengali)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "mr", name: "मराठी (Marathi)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "gu", name: "ગુજરાતી (Gujarati)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  ]

  const speakText = (text: string) => {
    if (voiceEnabled && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center">
          <Settings className="h-4 w-4 mr-1" />
          Accessibility
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <Eye className="h-5 w-5 mr-2 text-blue-600" />
              Accessibility Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Font Size */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center text-sm font-medium">
                  <Type className="h-4 w-4 mr-2" />
                  Font Size
                </Label>
                <span className="text-sm text-gray-500">{fontSize[0]}px</span>
              </div>
              <Slider value={fontSize} onValueChange={setFontSize} max={24} min={12} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <Label className="flex items-center text-sm font-medium">
                <Eye className="h-4 w-4 mr-2" />
                High Contrast
              </Label>
              <Switch checked={highContrast} onCheckedChange={setHighContrast} />
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <Label className="flex items-center text-sm font-medium">
                {darkMode ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                Dark Mode
              </Label>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            {/* Voice Assistance */}
            <div className="flex items-center justify-between">
              <Label className="flex items-center text-sm font-medium">
                <Volume2 className="h-4 w-4 mr-2" />
                Voice Assistance
              </Label>
              <Switch checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
            </div>

            {/* Language Selection */}
            <div className="space-y-3">
              <Label className="flex items-center text-sm font-medium">
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Test Voice */}
            {voiceEnabled && (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() =>
                  speakText("Voice assistance is now enabled. This is a test of the text-to-speech feature.")
                }
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Test Voice
              </Button>
            )}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
