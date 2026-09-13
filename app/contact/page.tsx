"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        details: ""
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to submit inquiry");
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again or WhatsApp us directly.");
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent(
            `Hello Kichen Kumfurt,\nI would like to inquire about your modular solutions.\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nDetails: ${formData.details || 'General Inquiry'}`
        );
        window.open(`https://wa.me/918888030786?text=${text}`, "_blank");
    };
    return (
        <main className="pt-32 md:pt-48 pb-0 bg-primary-black min-h-screen flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-red/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px] flex-grow relative z-10">
                
                <FadeIn className="mb-16 md:mb-24">
                    <h1 className="font-display font-bold text-4xl md:text-7xl lg:text-[7rem] text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 mt-4 md:mt-0 text-balance">Start a Conversation</h1>
                    <p className="text-gray-muted/80 font-light text-lg md:text-xl max-w-3xl leading-relaxed text-balance">
                        Schedule a private consultation at our design studio. Let's discuss your vision and how Kichen Kumfurt can bring it to life.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 md:mb-32">
                    
                    {/* Contact Form */}
                    <FadeIn delay={0.2} className="lg:col-span-7">
                        <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 md:p-14 shadow-2xl">
                            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide mb-3">Inquiry Form</h2>
                            <p className="text-gray-muted text-sm mb-8">Fill in your details or message us directly on WhatsApp (+91 8888030786).</p>
                            
                            {submitted ? (
                                <div className="bg-primary-red/10 border border-primary-red/30 rounded-xl p-8 text-center space-y-4">
                                    <CheckCircle2 className="w-12 h-12 text-primary-red mx-auto" />
                                    <h3 className="font-display font-bold text-2xl text-white uppercase">Thank You!</h3>
                                    <p className="text-gray-muted text-sm max-w-md mx-auto">
                                        Your inquiry has been received. Our team will get in touch with you shortly at <span className="text-white font-medium">{formData.phone}</span>.
                                    </p>
                                    <button 
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ firstName: "", lastName: "", email: "", phone: "", details: "" });
                                        }}
                                        className="text-xs uppercase tracking-widest text-primary-red hover:underline pt-4 block mx-auto"
                                    >
                                        Send another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {error && (
                                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">
                                                First Name <span className="text-primary-red">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                placeholder="e.g. Rahul"
                                                className="w-full bg-dark-gray border border-white/5 focus:border-primary-red px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-md placeholder:text-gray-muted/40" 
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">
                                                Last Name
                                            </label>
                                            <input 
                                                type="text" 
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                placeholder="e.g. Sharma"
                                                className="w-full bg-dark-gray border border-white/5 focus:border-primary-red px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-md placeholder:text-gray-muted/40" 
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="e.g. rahul@example.com"
                                            className="w-full bg-dark-gray border border-white/5 focus:border-primary-red px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-md placeholder:text-gray-muted/40" 
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">
                                            Phone Number <span className="text-primary-red">*</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="e.g. 9876543210"
                                            className="w-full bg-dark-gray border border-white/5 focus:border-primary-red px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-md placeholder:text-gray-muted/40" 
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">
                                            Project Details / Requirements
                                        </label>
                                        <textarea 
                                            rows={4} 
                                            value={formData.details}
                                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                            placeholder="Tell us about your kitchen, wardrobe, or interior requirements..."
                                            className="w-full bg-dark-gray border border-white/5 focus:border-primary-red px-4 py-3 text-white text-sm focus:outline-none transition-colors rounded-md resize-none placeholder:text-gray-muted/40" 
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Button 
                                            type="submit" 
                                            disabled={loading}
                                            variant="primary" 
                                            className="w-full sm:w-auto h-14 justify-center"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                                                </span>
                                            ) : (
                                                "Submit Inquiry"
                                            )}
                                        </Button>

                                        <button
                                            type="button"
                                            onClick={handleWhatsApp}
                                            className="flex items-center justify-center gap-2 border border-white/20 hover:border-green-500 hover:text-green-400 text-gray-muted px-6 h-14 rounded-md text-xs uppercase tracking-widest transition-all duration-300 font-sans"
                                        >
                                            Direct WhatsApp Inquiry
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    {/* Contact Details */}
                    <FadeIn delay={0.4} direction="left" className="lg:col-span-5 space-y-16 mt-12 lg:mt-0 lg:pl-12">
                        <div>
                            <h3 className="font-display text-xl md:text-2xl text-white uppercase tracking-wide mb-8">The Studio</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-5 text-gray-muted/80">
                                    <MapPin className="w-5 h-5 text-primary-red shrink-0 mt-1" />
                                    <span className="leading-relaxed text-base font-light">
                                        2nd Floor, Sanman Prestige,<br />
                                        Railway Station Road,<br />
                                        Nanded - 431601
                                    </span>
                                </li>
                                <li className="flex items-center gap-5 text-gray-muted/80">
                                    <Phone className="w-5 h-5 text-primary-red shrink-0" />
                                    <span className="text-base font-light">+91 8888030786</span>
                                </li>
                                <li className="flex items-center gap-5 text-gray-muted/80">
                                    <Mail className="w-5 h-5 text-primary-red shrink-0" />
                                    <span className="text-base font-light">kichenkumfurt@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-display text-lg md:text-xl text-white uppercase tracking-wide mb-6">Hours</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-gray-muted">
                                    <Clock className="w-5 h-5 text-primary-red shrink-0" />
                                    <div className="text-sm">
                                        <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                                        <p className="mt-1">Sunday: Closed (By Appointment Only)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-display text-xl md:text-2xl text-white uppercase tracking-wide mb-8">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-muted hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-500 ease-[0.16,1,0.3,1] shadow-lg hover:scale-105 hover:-translate-y-1">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-muted hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-500 ease-[0.16,1,0.3,1] shadow-lg hover:scale-105 hover:-translate-y-1">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 md:h-96 bg-primary-black relative mt-auto border-t border-dark-gray/50 overflow-hidden">
                <iframe 
                    src="https://maps.google.com/maps?q=Kichen%20Kumfurt,%20Sanman%20Prestige,%20Nanded&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kichen Kumfurt Studio Location"
                ></iframe>
            </div>
        </main>
    );
}
