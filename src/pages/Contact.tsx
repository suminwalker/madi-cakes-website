import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[var(--color-brand-cream)] pt-16 pb-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3 space-y-12"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)] mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed">
                            Whether it's an inquiry about our signature collection, a press request, or simply to say hello.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-ink)] mb-3">
                                General Inquiries
                            </h3>
                            <a href="mailto:hello@madicake.com" className="hover-underline-animation text-[var(--color-brand-charcoal)]">
                                hello@madicake.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-ink)] mb-3">
                                Press & Partnerships
                            </h3>
                            <a href="mailto:pr@madicake.com" className="hover-underline-animation text-[var(--color-brand-charcoal)]">
                                pr@madicake.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-ink)] mb-3">
                                Studio
                            </h3>
                            <p className="text-[var(--color-brand-charcoal)]/80">
                                Manhattan, NY<br />
                                <span className="text-xs italic">(By appointment only)</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-2/3 max-w-2xl"
                >
                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-3 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                    placeholder="First Name"
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                                >
                                    First Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-3 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                    placeholder="Last Name"
                                    required
                                />
                                <label
                                    htmlFor="lastName"
                                    className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                                >
                                    Last Name
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-3 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                placeholder="Email Address"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                            >
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-3 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                placeholder="Subject"
                                required
                            />
                            <label
                                htmlFor="subject"
                                className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                            >
                                Subject
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-3 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors resize-none"
                                placeholder="Message"
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                            >
                                Message
                            </label>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
