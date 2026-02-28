import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../components/ui/Button';

const cakes = [
    { id: 1, name: 'Disco Heart', price: '$130', type: 'Custom', description: 'Heart-shaped vintage piped cake adorned with elegant detailing and mini disco balls.', img: '/images/cakes/disco-heart.jpg' },
    { id: 2, name: 'Vintage Rose', price: '$110', type: 'Signature', description: 'Classic round design featuring intricate vintage floral piping and rich vanilla buttercream.', img: '/images/cakes/pink-floral.jpg' },
    { id: 3, name: 'Cheeky Cherry Heart', price: '$125', type: 'Custom', description: 'Playful heart-shaped cake featuring custom text, vintage piping, and glitter cherries.', img: '/images/cakes/cherry-heart-1.jpg' },
    { id: 4, name: 'Twenty Five', price: '$135', type: 'Custom', description: 'Two-tone pink heart cake celebrating twenty-five with elegant cursive and glitter cherries.', img: '/images/cakes/cherry-heart-2.jpg' },
    { id: 5, name: 'The Classic Cherry', price: '$85', type: 'Signature', description: 'Minimalist white cake featuring delicate draping piping and a single perfect cherry.', img: '/images/cakes/white-cherry.jpg' },
    { id: 6, name: 'Birthday Mood', price: '$135', type: 'Custom', description: 'Vibrant red and white heart cake with vintage piping and bold custom text.', img: '/images/cakes/red-white-heart.jpg' },
    { id: 7, name: 'Raspberry Tower', price: '$160', type: 'Signature', description: 'An elegant dome cake meticulously covered in fresh, vibrant raspberries.', img: '/images/cakes/raspberry-tower.jpg' },
    { id: 8, name: 'Party Favors', price: '$45 ea', type: 'Custom', description: 'Miniature heart cakes individually boxed with ribbon, perfect for gifting.', img: '/images/cakes/boxed-hearts.jpg' },
    { id: 9, name: 'Midnight Wish', price: '$135', type: 'Custom', description: 'Pink heart cake glowing softly under candlelight, adding a moody touch to celebrations.', img: '/images/cakes/candlelit-heart.jpg' },
    { id: 10, name: "She's a Therapist", price: '$120', type: 'Custom', description: 'Elegant white layer cake detailed with delicate purple and white floral piping.', img: '/images/cakes/shes-a-therapist.jpg' }
];

export default function Cakes() {
    const [selectedCake, setSelectedCake] = useState<typeof cakes[0] | null>(null);

    return (
        <div className="min-h-screen bg-[var(--color-brand-cream)] pt-16 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-2xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-6">The Collection</h1>
                    <p className="text-[var(--color-brand-charcoal)]/70 font-light leading-relaxed">
                        Discover our signature and limited edition creations. Each cake is meticulously designed to be as stunning visually as it is on the palate.
                    </p>
                </motion.div>

                {Array.from(new Set(cakes.map(cake => cake.type))).map((category) => (
                    <div key={category} className="mb-24 last:mb-0">
                        <h2 className="text-3xl font-serif text-[var(--color-brand-charcoal)] mb-12 border-b border-[var(--color-brand-sage)] pb-4">{category} Collection</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {cakes.filter(cake => cake.type === category).map((cake, idx) => (
                                <motion.div
                                    key={cake.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="group cursor-pointer flex flex-col"
                                    onClick={() => setSelectedCake(cake)}
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-brand-sand)] mb-6">
                                        <img
                                            src={cake.img}
                                            alt={cake.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                            <span className="text-[var(--color-brand-cream)] uppercase tracking-[0.2em] text-sm font-medium">View Details</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-2xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-ink)] transition-colors">
                                            {cake.name}
                                        </h3>
                                        <span className="font-sans text-sm tracking-widest text-[var(--color-brand-charcoal)]/80">
                                            {cake.price}
                                        </span>
                                    </div>

                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal / Quick View */}
            <AnimatePresence>
                {selectedCake && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[var(--color-brand-cream)]/95 backdrop-blur-sm"
                        onClick={() => setSelectedCake(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[var(--color-brand-cream)] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCake(null)}
                                className="absolute top-4 right-4 z-10 text-[var(--color-brand-charcoal)] hover:text-black focus:outline-none"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:h-auto object-cover bg-[var(--color-brand-sand)]">
                                <img src={selectedCake.img} alt={selectedCake.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                                <h2 className="text-4xl font-serif text-[var(--color-brand-charcoal)] mb-4">
                                    {selectedCake.name}
                                </h2>
                                <p className="text-xl font-light text-[var(--color-brand-charcoal)]/80 mb-6">
                                    {selectedCake.price}
                                </p>
                                <p className="text-base text-[var(--color-brand-charcoal)]/70 leading-relaxed mb-10 border-t border-[var(--color-brand-sage)] pt-6">
                                    {selectedCake.description}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <Button className="w-full">Pre-order for Pickup</Button>
                                    <Button variant="outline" className="w-full">Request Custom Alteration</Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
