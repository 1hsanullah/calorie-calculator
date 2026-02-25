import Link from 'next/link'
import { Flame, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary transition-colors">
                            <Flame className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="font-bold tracking-tight text-lg hidden sm:inline-block">
                            CalorieTest
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/calorie-calculator" className="text-muted-foreground hover:text-foreground transition-colors">
                        Calorie Calculator
                    </Link>
                    <Link href="/bmr-calculator" className="text-muted-foreground hover:text-foreground transition-colors">
                        BMR
                    </Link>
                    <Link href="/bmi-calculator" className="text-muted-foreground hover:text-foreground transition-colors">
                        BMI
                    </Link>
                    <Link href="/body-fat-percentage-calculator" className="text-muted-foreground hover:text-foreground transition-colors">
                        Body Fat
                    </Link>
                    <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                        Articles
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm" asChild className="hidden md:inline-flex rounded-full">
                        <Link href="/calorie-calculator">Calculate Now</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link href="/" className="text-lg font-semibold border-b border-border/40 pb-2">
                                    Home
                                </Link>
                                <Link href="/calorie-calculator" className="text-lg text-muted-foreground hover:text-foreground">
                                    Calorie Calculator
                                </Link>
                                <Link href="/bmr-calculator" className="text-lg text-muted-foreground hover:text-foreground">
                                    BMR Calculator
                                </Link>
                                <Link href="/bmi-calculator" className="text-lg text-muted-foreground hover:text-foreground">
                                    BMI Calculator
                                </Link>
                                <Link href="/body-fat-percentage-calculator" className="text-lg text-muted-foreground hover:text-foreground">
                                    Body Fat Calculator
                                </Link>
                                <Link href="/articles" className="text-lg text-muted-foreground hover:text-foreground mt-4">
                                    Articles & Guides
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
