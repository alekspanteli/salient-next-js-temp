import Link from 'next/link'
import Logo from '@/components/Logo'
import NavLink from '@/components/NavLink'

import Container from '@/components/Container'

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
                                <NavLink className="test" href="#features">Features</NavLink>
                                <NavLink href="#testimonials">Testimonials</NavLink>
                                <NavLink href="#pricing">Pricing</NavLink>
                            </div>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}