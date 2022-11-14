import Link from 'next/link'
import Logo from '@/components/Logo'

import Container from '@/components/Container'

export default function Header() {
    return (
        <>
            <header className="py-10">
                <Container>
                    <nav>
                        <Link href="#" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                    </nav>
                </Container>
            </header>
        </>
    )
}