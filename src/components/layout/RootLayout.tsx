import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[var(--color-brand-charcoal)] bg-[var(--color-brand-cream)]">
            <Navbar />
            <main className="flex-grow pt-[104px]">
                {/* pt-[104px] roughly accounts for the fixed navbar height so content isn't hidden under it initially */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
