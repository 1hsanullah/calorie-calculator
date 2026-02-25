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
            className={cn(
                "w-full pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-4",
                className
            )}
        >
            <div className="max-w-3xl mx-auto space-y-6">
                {trustLine && (
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 text-muted-foreground w-fit mx-auto mb-4 tracking-tight shadow-sm">
                        {trustLine}
                    </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                    {h1}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    )
}
