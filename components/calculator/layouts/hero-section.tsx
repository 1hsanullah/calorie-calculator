import * as React from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
    h1: string
    description: string
    trustLine?: string
    className?: string
}

export function HeroSection({
    h1,
    description,
    trustLine,
    className,
}: HeroSectionProps) {
    return (
        <section
            aria-labelledby="page-heading"
            className={cn(
                "w-full pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-4 relative overflow-hidden",
                className
            )}
        >
            {/* Subtle radial gradient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]"
            />

            <div className="max-w-3xl mx-auto space-y-5">
                {trustLine && (
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-3.5 py-1 text-xs font-semibold bg-primary/5 text-primary w-fit mx-auto tracking-wide uppercase">
                        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        {trustLine}
                    </div>
                )}
                <h1
                    id="page-heading"
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
                >
                    {h1}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    )
}
