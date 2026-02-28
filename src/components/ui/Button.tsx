import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-cream)] hover:bg-[var(--color-brand-ink)]',
            secondary: 'bg-[var(--color-brand-sand)] text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-sage)]/50',
            outline: 'border border-[var(--color-brand-charcoal)] bg-transparent text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-cream)]',
            ghost: 'bg-transparent text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-sand)]',
        };

        const sizes = {
            sm: 'px-4 py-2 text-xs',
            md: 'px-6 py-3 text-sm',
            lg: 'px-8 py-4 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-sans tracking-widest uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
