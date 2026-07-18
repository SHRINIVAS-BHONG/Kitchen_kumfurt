"use client";

import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-24 md:pt-32 pb-0 bg-primary-black min-h-screen flex flex-col">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl flex-grow">
                
                <FadeIn className="mb-12 md:mb-16">
                    <h1 className="font-display font-bold text-3xl md:text-6xl text-white uppercase tracking-wider mb-4 md:mb-6 mt-4 md:mt-0">Start a Conversation</h1>
                    <p className="text-gray-muted text-base md:text-lg max-w-2xl">
                        Schedule a private consultation at our design studio. Let's discuss your vision and how Kichen Kumfurt can bring it to life.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 md:mb-32">
                    
                    {/* Contact Form */}
                    <FadeIn delay={0.2} className="lg:col-span-7">
                        <div className="bg-[#111] p-6 md:p-12 border border-dark-gray">
                            <h2 className="font-display text-xl md:text-2xl text-white uppercase tracking-wide mb-6 md:mb-8">Inquiry Form</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-2 gap-4 md:gap-8">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">First Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-dark-gray py-2 text-white focus:outline-none focus:border-primary-red transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">Last Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-dark-gray py-2 text-white focus:outline-none focus:border-primary-red transition-colors" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">Email Address</label>
                                    <input type="email" className="w-full bg-transparent border-b border-dark-gray py-2 text-white focus:outline-none focus:border-primary-red transition-colors" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">Phone Number</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-dark-gray py-2 text-white focus:outline-none focus:border-primary-red transition-colors" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-muted/70 font-bold mb-1">Project Details</label>
                                    <textarea 
                                        rows={1} 
                                        onInput={(e) => {
                                            const target = e.currentTarget;
                                            target.style.height = 'auto';
                                            target.style.height = `${target.scrollHeight}px`;
                                        }}
                                        className="w-full bg-transparent border-b border-dark-gray py-2 text-white focus:outline-none focus:border-primary-red transition-colors resize-none overflow-hidden" 
                                    />
                                </div>
                                <Button variant="primary" className="mt-8 w-full md:w-auto h-12">
                                    Submit Inquiry
                                </Button>
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Details */}
                    <FadeIn delay={0.4} direction="left" className="lg:col-span-5 space-y-12 mt-8 lg:mt-0">
                        <div>
                            <h3 className="font-display text-lg md:text-xl text-white uppercase tracking-wide mb-6">The Studio</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-gray-muted">
                                    <MapPin className="w-5 h-5 text-primary-red shrink-0 mt-1" />
                                    <span className="leading-relaxed text-sm">
                                        2nd Floor, Sanman Prestige,<br />
                                        Railway Station Road,<br />
                                        Nanded - 431601
                                    </span>
                                </li>
                                <li className="flex items-center gap-4 text-gray-muted">
                                    <Phone className="w-5 h-5 text-primary-red shrink-0" />
                                    <span className="text-sm">+91 7020171895</span>
                                </li>
                                <li className="flex items-center gap-4 text-gray-muted">
                                    <Mail className="w-5 h-5 text-primary-red shrink-0" />
                                    <span className="text-sm">kichenkumfurt@gmail.com</span>
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
                            <h3 className="font-display text-lg md:text-xl text-white uppercase tracking-wide mb-6">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-dark-gray flex items-center justify-center text-gray-muted hover:bg-primary-red hover:text-white hover:border-primary-red transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-dark-gray flex items-center justify-center text-gray-muted hover:bg-primary-red hover:text-white hover:border-primary-red transition-colors">
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
