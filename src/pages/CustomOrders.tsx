import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function CustomOrders() {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--color-brand-cream)] pt-16 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-brand-ink)] mb-4 block">
                        Bespoke Creations
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-8">
                        Tell Us Your Vision
                    </h1>
                    <p className="text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed max-w-2xl mx-auto">
                        From intimate gatherings to grand celebrations, we collaborate with you to create a culinary masterpiece that embodies your aesthetic. Share your inspiration, and let us bring it to life in sugar and sponge.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Grid for Name and Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-4 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                placeholder="Name"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                            >
                                Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-4 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                                required
                            />
                            <label
                                htmlFor="date"
                                className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest"
                            >
                                Event Date
                            </label>
                        </div>
                    </div>

                    {/* Vibe input */}
                    <div className="relative">
                        <input
                            type="text"
                            id="vibe"
                            name="vibe"
                            className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-4 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors"
                            placeholder="Describe the vibe... (e.g., moody, minimalist, romantic)"
                            required
                        />
                        <label
                            htmlFor="vibe"
                            className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                        >
                            The Vibe
                        </label>
                    </div>

                    {/* Details input */}
                    <div className="relative">
                        <textarea
                            id="details"
                            name="details"
                            rows={4}
                            className="w-full bg-transparent border-b border-[var(--color-brand-charcoal)]/30 py-4 px-0 text-[var(--color-brand-charcoal)] placeholder-transparent focus:outline-none focus:border-[var(--color-brand-ink)] peer transition-colors resize-none"
                            placeholder="Tell us everything..."
                            required
                        ></textarea>
                        <label
                            htmlFor="details"
                            className="absolute left-0 -top-3.5 text-xs text-[var(--color-brand-charcoal)]/60 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest"
                        >
                            Details & Needs
                        </label>
                    </div>

                    {/* File Upload */}
                    <div className="border border-dashed border-[var(--color-brand-charcoal)]/30 rounded-none p-8 text-center hover:bg-[var(--color-brand-sand)]/50 transition-colors relative cursor-pointer">
                        <input
                            type="file"
                            id="inspiration"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        <div className="flex flex-col items-center justify-center space-y-4 pointer-events-none">
                            <Upload className="text-[var(--color-brand-charcoal)]/50" />
                            <div className="text-sm font-light text-[var(--color-brand-charcoal)]/80">
                                {fileName ? (
                                    <span className="text-[var(--color-brand-ink)] font-medium">{fileName}</span>
                                ) : (
                                    <>
                                        <span className="font-medium underline decoration-[var(--color-brand-charcoal)]/30 underline-offset-4">Click to upload</span> or drag and drop<br />
                                        moodboards, sketches, or inspiration
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 text-center">
                        <Button size="lg" type="submit" className="w-full md:w-auto px-16">
                            Submit Inquiry
                        </Button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}
