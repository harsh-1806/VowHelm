'use client'
import React, { useState } from 'react'
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from 'motion/react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string
        link: string
        icon?: JSX.Element
    }[]
    className?: string
}) => {
    const { scrollYProgress } = useScroll()
    const [isFloating, setIsFloating] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const { theme, setTheme } = useTheme()

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === 'number') {
            // Determine scroll direction
            let direction = current - (scrollYProgress.getPrevious() || 0)

            // Set floating state based on scroll position with a small threshold
            if (scrollYProgress.get() > 0.03) {
                setIsFloating(true)
            } else {
                setIsFloating(false)
                setIsVisible(true) // Always visible at the top
                return
            }

            // Handle visibility based on scroll direction with a larger threshold
            if (scrollYProgress.get() < 0.03) {
                setIsVisible(true)
            } else {
                if (direction < -0.01) {
                    // Scrolling up - show nav
                    setIsVisible(true)
                } else if (direction > 0.02) {
                    // Larger threshold to prevent triggering on tiny scroll movements
                    // Scrolling down - hide nav
                    setIsVisible(false)
                }
            }
        }
    })

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    width: '100%',
                    borderRadius: '0px',
                    y: 0,
                }}
                animate={{
                    width: isFloating ? 'max-content' : '100%',
                    borderRadius: isFloating ? '9999px' : '0px',
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.32, 0.72, 0, 1], // Custom easing curve for smoother transitions
                    opacity: {
                        duration: 0.3,
                        ease: [0.32, 0.72, 0, 1],
                    },
                    y: {
                        duration: 0.4,
                        ease: [0.32, 0.72, 0, 1],
                    },
                    width: {
                        duration: 0.4,
                        ease: [0.32, 0.72, 0, 1],
                    },
                    borderRadius: {
                        duration: 0.4,
                        ease: [0.32, 0.72, 0, 1],
                    },
                }}
                className={cn(
                    'flex fixed top-0 mx-auto border-b border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 items-center',
                    isFloating
                        ? 'inset-x-0 max-w-fit border rounded-full pr-2 pl-8 justify-center space-x-4'
                        : 'w-full px-8 justify-between',
                    className
                )}
            >
                <div
                    className={cn(
                        'flex items-center',
                        isFloating ? 'space-x-4' : 'space-x-8'
                    )}
                >
                    {/* Logo/Brand could go here */}
                    <motion.div
                        className="font-bold text-lg"
                        animate={{
                            opacity: isFloating ? 0 : 1,
                            width: isFloating ? 0 : 'auto',
                            marginRight: isFloating ? 0 : 16,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1],
                        }}
                    >
                        {!isFloating && 'Your Brand'}
                    </motion.div>

                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
                                'transition-colors duration-300'
                            )}
                        >
                            <span className="block sm:hidden">
                                {navItem.icon}
                            </span>
                            <span className="hidden sm:block text-sm">
                                {navItem.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-5 w-5 text-neutral-100" />
                        ) : (
                            <Moon className="h-5 w-5 text-neutral-600" />
                        )}
                    </button>
                    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                        <span>Login</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
