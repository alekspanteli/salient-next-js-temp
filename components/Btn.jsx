import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid:
        'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    outline:
        'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
    solid: {
        blue: 'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    },
    outline: {
        slate:
            'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    },
}

export default function Button({ variant = 'solid', color = 'blue', className, href, ...props }) {

    className = clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
    )
    return href
        ? (
            <Link href={href} className={className} {...props} />
        )
        :
        (
            <button className={className} {...props} />
        )
}