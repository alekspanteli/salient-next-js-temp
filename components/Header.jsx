import Link from 'next/link'
import Logo from '@/components/Logo'
import NavLink from '@/components/NavLink'

import Container from '@/components/Container'
import Button from '@/components/Btn'

export default function Header() {
    return (
        <>
            <header className="py-10">
                <Container>
                    <nav className='relative z-50 flex justify-between'>
                        <div className='flex items-center md:gap-x-12'>
                            <Link href="#" aria-label="Home">
                                <Logo className="h-10 w-auto" />
                            </Link>
                            <div className="hidden md:flex md:gap-x-6">
                                {[
                                    {
                                        href: '#features',
                                        text: 'Features'
                                    },
                                    {
                                        href: '#testimonials',
                                        text: 'Testimonials'
                                    },
                                    {
                                        href: '#pricing',
                                        text: 'Pricing'
                                    },
                                ].map((links, index) => (
                                    <NavLink key={index} href={links.href}>{links.text}</NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5 md:gap-x-8">
                            <div className="hidden md:block">
                                <NavLink href="/login">Sign in</NavLink>
                            </div>
                            <Button href="/register" color="blue">
                                <span>
                                    Get started <span className="hidden lg:inline">today</span>
                                </span>
                            </Button>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}