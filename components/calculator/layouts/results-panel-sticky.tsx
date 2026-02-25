import * as React from "react"
import { cn } from "@/lib/utils"

export function LiveResultsPanelWrapper({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                "w-full lg:w-[450px] xl:w-[500px] shrink-0",
                className
            )}
        >
            <div className="lg:sticky lg:top-8 space-y-6">
                {children}
            </div>
        </div>
    )
}
