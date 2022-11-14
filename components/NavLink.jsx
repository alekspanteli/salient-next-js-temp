import Link from 'next/link'
import clsx from 'clsx'

export default function NavLink({ className, children, ...props }) {
    return (
        <Link {...props} className={clsx('inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900', className)}>
            {children}
        </Link>
    )
}