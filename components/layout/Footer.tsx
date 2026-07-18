import React from 'react';
import { MapPin, Phone, Mail, Globe, Heart } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer = () => {
    return (
        <footer className="bg-primary-black border-t border-dark-gray pt-16 pb-8 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16 relative z-10">
                    
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-gray-muted text-sm leading-relaxed max-w-sm">
                            Exclusive modular kitchens and wardrobes. Uncompromising luxury and precision engineering.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="font-display font-bold text-lg text-white uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-muted hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-primary-red shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">
                                    2nd Floor, Sanman Prestige,<br />
                                    Railway Station Road,<br />
                                    Nanded - 431601
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-muted hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-primary-red shrink-0" />
                                <span className="text-sm font-medium">+91 7020171895 / 8788953940</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-muted hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-primary-red shrink-0" />
                                <span className="text-sm">kichenkumfurt@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-muted hover:text-white transition-colors">
                                <Globe className="w-5 h-5 text-primary-red shrink-0" />
                                <span className="text-sm">www.kichenkumfurt.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Founder */}
                    <div className="space-y-6">
                        <h4 className="font-display font-bold text-lg text-white uppercase tracking-widest mb-6">Founder</h4>
                        <div className="bg-dark-gray p-6 rounded-sm border-l-2 border-primary-red">
                            <p className="font-display text-xl text-white font-bold tracking-wider mb-2">AASHISH JAJOO</p>
                            <p className="text-sm text-gray-muted">Principal Designer</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                    <p className="text-gray-muted/60 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Kichen Kumfurt. All rights reserved.
                    </p>
                    <p className="text-gray-muted/60 text-xs flex items-center gap-1">
                        Inspiring Kitchens <Heart className="w-3 h-3 text-primary-red fill-primary-red" /> by Aashish
                    </p>
                </div>
            </div>
        </footer>
    );
};
