"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Flame, Menu, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '/calorie-calculator', label: 'Calories' },
    { href: '/weight-loss-calculator', label: 'Weight Loss' },
    { href: '/calorie-deficit-calculator', label: 'Deficit' },
    { href: '/bmr-calculator', label: 'BMR' },
    { href: '/bmi-calculator', label: 'BMI' },
    { href: '/body-fat-percentage-calculator', label: 'Body Fat' },
    { href: '/articles', label: 'Articles' },
]

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => { setMounted(true) }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="cursor-pointer" aria-label="Toggle theme" disabled>
                <Sun className="h-4 w-4" aria-hidden="true" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
        </Button>
    )
}

export function SiteHeader() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="CalorieTest home">
                    <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary transition-colors duration-200">
                        <Flame className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <span className="font-bold tracking-tight text-lg hidden sm:inline-block">
                        CalorieTest
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    'transition-colors duration-200 hover:text-foreground',
                                    isActive
                                        ? 'text-primary font-semibold'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <Button variant="default" size="sm" asChild className="hidden md:inline-flex rounded-full">
                        <Link href="/calorie-calculator">Calculate Now</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden cursor-pointer" aria-label="Open navigation menu">
                                <Menu className="h-5 w-5" aria-hidden="true" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-8">
                                <Link
                                    href="/"
                                    aria-current={pathname === '/' ? 'page' : undefined}
                                    className={cn(
                                        'text-lg font-semibold border-b border-border/40 pb-3 mb-2 transition-colors',
                                        pathname === '/' ? 'text-primary' : 'hover:text-primary'
                                    )}
                                >
                                    Home
                                </Link>
                                {[
                                    { href: '/calorie-calculator', label: 'Calorie Calculator' },
                                    { href: '/bmr-calculator', label: 'BMR Calculator' },
                                    { href: '/bmi-calculator', label: 'BMI Calculator' },
                                    { href: '/body-fat-percentage-calculator', label: 'Body Fat Calculator' },
                                    { href: '/weight-loss-calculator', label: 'Weight Loss Calculator' },
                                    { href: '/calorie-deficit-calculator', label: 'Calorie Deficit Calculator' },
                                    { href: '/maintenance-calorie-calculator', label: 'Maintenance Calorie Calculator' },
                                    { href: '/tdee-calculator', label: 'TDEE Calculator' },
                                    { href: '/protein-intake-calculator', label: 'Protein Calculator' },
                                    { href: '/macro-calculator', label: 'Macro Calculator' },
                                    { href: '/water-intake-calculator', label: 'Water Intake Calculator' },
                                    { href: '/ideal-body-weight-calculator', label: 'Ideal Body Weight Calculator' },
                                    { href: '/articles', label: 'Articles & Guides', separator: true },
                                ].map(({ href, label, separator }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        aria-current={pathname === href ? 'page' : undefined}
                                        className={cn(
                                            'py-2 px-1 rounded transition-colors duration-200',
                                            separator && 'mt-3 border-t border-border/40 pt-3',
                                            pathname === href
                                                ? 'text-primary font-semibold'
                                                : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
