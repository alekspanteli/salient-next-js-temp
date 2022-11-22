import Link from 'next/link'
import Logo from '@/components/Logo'
import NavLink from '@/components/NavLink'

import Container from '@/components/Container'
import Button from '@/components/Btn'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

function MobileNavLink({ href, children }) {
    return (
      <Popover.Button as={Link} href={href} className="block w-full p-2">
        {children}
      </Popover.Button>
    )
  }

function MobileNavIcon({ open }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0'
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0'
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Popover>
    )
}

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
                            <Button href="/register" color="blue" variant="solid">
                                <span>
                                    Get started <span className="hidden lg:inline">today</span>
                                </span>
                            </Button>
                            <div className="-mr-1 md:hidden">
                                <MobileNavigation />
                            </div>
                        </div>
                    </nav>
                    test
                </Container>
            </header>
        </>
    )
}