import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-[104px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/home/hero-bg.jpg"
                        alt="Madi Cakes Decadent Spread"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-cream)]/20 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[var(--color-brand-cream)] text-sm tracking-[0.2em] uppercase mb-6 font-medium"
                    >
                        Introducing
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-brand-cream)] mb-8 tracking-wide drop-shadow-sm"
                    >
                        Madi Cakes &mdash;<br />Sweet That's Style
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link to="/cakes">
                            <Button size="lg" className="bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-sand)]">
                                Shop Signature
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Signature Cakes */}
            <section className="py-24 px-6 md:px-12 bg-[var(--color-brand-cream)]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_IN_VARIANTS}
                        className="flex flex-col md:flex-row justify-between items-baseline mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)] mb-4 md:mb-0">
                            The Signature Collection
                        </h2>
                        <Link to="/cakes" className="text-sm tracking-widest uppercase hover-underline-animation text-[var(--color-brand-ink)] font-medium">
                            View All
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={STAGGER_CONTAINER}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        {[
                            { id: 1, name: 'Vintage Rose', price: '$110', img: '/images/cakes/pink-floral.jpg' },
                            { id: 2, name: 'The Classic Cherry', price: '$85', img: '/images/cakes/white-cherry.jpg' },
                            { id: 3, name: 'Raspberry Tower', price: '$160', img: '/images/cakes/raspberry-tower.jpg' },
                        ].map((cake) => (
                            <motion.div key={cake.id} variants={FADE_IN_VARIANTS} className="group cursor-pointer">
                                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-brand-sand)] mb-6">
                                    <img
                                        src={cake.img}
                                        alt={cake.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-serif text-xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-ink)] transition-colors">
                                        {cake.name}
                                    </h3>
                                    <p className="font-sans text-sm tracking-widest text-[var(--color-brand-charcoal)]/70">
                                        {cake.price}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How It Works / Moments Section */}
            <section className="py-24 px-6 md:px-12 bg-[var(--color-brand-cream)] text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_VARIANTS}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--color-brand-charcoal)]">Designed For Your Moments</h2>
                    <p className="mb-10 text-[var(--color-brand-charcoal)]/80 text-lg font-light leading-relaxed">From intimate Manhattan dinner parties to grand celebrations, find the perfect centerpiece to elevate every occasion.</p>
                    <Link to="/custom-orders">
                        <Button variant="outline" size="lg">Request Custom Order</Button>
                    </Link>
                </motion.div>

                {/* Moments Image Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={STAGGER_CONTAINER}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto"
                >
                    {[
                        { id: 1, img: '/images/home/moment-1.jpg' },
                        { id: 2, img: '/images/home/moment-2.jpg' },
                        { id: 3, img: '/images/home/moment-3.jpg' },
                        { id: 4, img: '/images/home/moment-4.jpg' },
                        { id: 5, img: '/images/home/moment-5.jpg' }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.id}
                            variants={FADE_IN_VARIANTS}
                            className={`relative aspect-[3/4] overflow-hidden bg-[var(--color-brand-sand)] ${idx === 2 ? 'md:-translate-y-8' : idx === 1 || idx === 3 ? 'md:-translate-y-4' : ''
                                } ${idx === 4 ? 'col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[3/4]' : ''}`}
                        >
                            <img
                                src={item.img}
                                alt={`Madi Cake Moment ${item.id}`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
