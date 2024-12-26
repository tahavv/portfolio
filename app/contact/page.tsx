'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="mr-2" />
            <span>taha.ayari@iteam-univ.tn</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2" />
            <a href="https://www.linkedin.com/in/taha-ayari-090a0b199/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ayaritaha
            </a>
          </div>
          <div className="flex items-center">
            <Github className="mr-2" />
            <a href="https://github.com/tahavv" target="_blank" rel="noopener noreferrer">
              github.com/tahavv
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>Tunis, Tunisia</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" />
            <span>+216 92 201 282</span>
          </div>
        </div>
      </div>
    </section>
  )
}

