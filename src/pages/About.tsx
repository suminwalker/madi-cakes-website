import { motion } from 'framer-motion';

const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
    return (
        <div className="min-h-screen bg-[var(--color-brand-cream)]">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-[var(--color-brand-charcoal)] mb-8"
                    >
                        The Story of Madi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl font-light text-[var(--color-brand-charcoal)]/80 leading-relaxed max-w-2xl mx-auto"
                    >
                        A lifestyle brand born from the desire to make the ordinary extraordinary. We believe cake should taste as breathtaking as it looks.
                    </motion.p>
                </div>
            </section>

            {/* Narrative Section 1 */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-[var(--color-brand-sand)]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_IN_VARIANTS}
                        className="w-full md:w-5/12 aspect-[3/4] overflow-hidden order-2 md:order-1"
                    >
                        <img
                            src="/images/madi-portrait.jpg"
                            alt="Madi Portrait"
                            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_IN_VARIANTS}
                        className="w-full md:w-7/12 order-1 md:order-2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">
                            Meet the<br />Founder.
                        </h2>
                        <div className="space-y-4 text-[var(--color-brand-charcoal)]/80 font-light leading-relaxed max-w-lg">
                            <p>
                                [Insert Bio]
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
