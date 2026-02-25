import * as React from "react"
import { cn } from "@/lib/utils"

export function CalculatorContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                "container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl",
                "flex flex-col lg:flex-row gap-8 lg:gap-10",
                className
            )}
        >
            {children}
        </div>
    )
}
