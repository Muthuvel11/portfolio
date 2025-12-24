"use client";

import * as React from "react";
import { Mail, Phone, Linkedin, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import * as gtag from "@/lib/gtag";
import { personalInfo } from "@/data/personal";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactClient() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  // Track analytics event
  gtag.event({
    action: "form_submission",
    category: "contact",
    label: "Contact Form",
  });

  try {
    const url = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
    if (!url) {
      throw new Error("Contact form URL is not configured");
    }

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    if (result.result === "success") {
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      throw new Error(result.error || "Submission failed");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again later."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <button 
              onClick={() => {
                gtag.event({ action: "click", category: "contact", label: "Email Link" });
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="w-full flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group text-left cursor-pointer"
            >
              <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p>{personalInfo.email}</p>
              </div>
            </button>

            <button 
              onClick={() => {
                gtag.event({ action: "click", category: "contact", label: "Phone Link" });
                window.location.href = `tel:${personalInfo.phone}`;
              }}
              className="w-full flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group text-left cursor-pointer"
            >
              <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p>{personalInfo.phone}</p>
              </div>
            </button>

            <button 
              onClick={() => {
                gtag.event({ action: "click", category: "contact", label: "LinkedIn Link" });
                window.open(`https://${personalInfo.linkedin}`, "_blank");
              }}
              className="w-full flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group text-left cursor-pointer"
            >
              <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p>muthuvel-m</p>
              </div>
            </button>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="p-3 rounded-full bg-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/50 rounded-3xl p-8 border border-border relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 text-primary font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:ring-2 outline-none transition-all`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:ring-2 outline-none transition-all`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:ring-2 outline-none transition-all resize-none`}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </p>
              )}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
