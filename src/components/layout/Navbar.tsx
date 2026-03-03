import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/cakes' },
    { name: 'Custom Orders', path: '/custom-orders' },
    { name: 'Contact', path: '/contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [prevPath, setPrevPath] = useState(location.pathname);
    if (location.pathname !== prevPath) {
        setPrevPath(location.pathname);
        setIsMobileMenuOpen(false);
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-[var(--color-brand-cream)]/90 backdrop-blur-md border-b border-[var(--color-brand-sage)]/50 py-2 shadow-sm'
                    : 'bg-gradient-to-b from-[var(--color-brand-cream)]/80 via-[var(--color-brand-cream)]/30 to-transparent py-3'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex-shrink-0 -ml-8 md:-ml-20 flex items-center"
                >
                    <img src="/images/logo.png" alt="Madi Cakes" className="h-[3.5rem] md:h-[4.5rem] w-auto object-contain object-left drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 lg:gap-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'text-sm uppercase tracking-widest hover-underline-animation transition-all font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,1)]',
                                location.pathname === link.path
                                    ? 'text-[var(--color-brand-ink)] font-bold'
                                    : 'text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-ink)]'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--color-brand-charcoal)] focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-[var(--color-brand-cream)] border-b border-[var(--color-brand-sage)]/50 py-6 px-6 flex flex-col space-y-4 md:hidden shadow-lg"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                'text-lg uppercase tracking-wider',
                                location.pathname === link.path
                                    ? 'text-[var(--color-brand-ink)] font-medium'
                                    : 'text-[var(--color-brand-charcoal)]'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
