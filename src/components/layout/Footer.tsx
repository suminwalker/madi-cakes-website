import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[var(--color-brand-sand)] pt-20 pb-10 px-6 md:px-12 border-t border-[var(--color-brand-sage)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand & Description */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <h2 className="text-3xl font-serif text-[var(--color-brand-charcoal)]">Madi Cake</h2>
                    <p className="text-[var(--color-brand-charcoal)]/80 max-w-md font-sans font-light leading-relaxed">
                        Sweet That's Style. Manhattan's premier lifestyle cake brand blending
                        editorial elegance with unforgettable flavor.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-ink)]">
                        Explore
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/cakes" className="text-[var(--color-brand-charcoal)]/80 hover:text-[var(--color-brand-ink)] transition-colors inline-block hover-underline-animation text-sm">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/custom-orders" className="text-[var(--color-brand-charcoal)]/80 hover:text-[var(--color-brand-ink)] transition-colors inline-block hover-underline-animation text-sm">
                                Custom Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-[var(--color-brand-charcoal)]/80 hover:text-[var(--color-brand-ink)] transition-colors inline-block hover-underline-animation text-sm">
                                Our Story
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="space-y-6">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-ink)]">
                        Connect
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3 text-[var(--color-brand-charcoal)]/80">
                            <Instagram size={18} />
                            <a href="#" className="hover:text-[var(--color-brand-ink)] hover-underline-animation transition-colors text-sm">
                                @madicake
                            </a>
                        </li>
                        <li className="flex items-center space-x-3 text-[var(--color-brand-charcoal)]/80">
                            <Mail size={18} />
                            <a href="mailto:hello@madicake.com" className="hover:text-[var(--color-brand-ink)] hover-underline-animation transition-colors text-sm">
                                hello@madicake.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-3 text-[var(--color-brand-charcoal)]/80">
                            <MapPin size={18} />
                            <span className="text-sm">Manhattan, NY</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--color-brand-sage)] flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-brand-charcoal)]/60">
                <p>&copy; {new Date().getFullYear()} Madi Cake. All rights reserved.</p>
                <div className="space-x-4 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-[var(--color-brand-charcoal)]">Privacy Policy</Link>
                    <Link to="#" className="hover:text-[var(--color-brand-charcoal)]">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
