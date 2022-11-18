import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid: 'inline-flex items-center justify-center py-2 px-4 text-sm',
    outline:'inline-flex items-center justify-center py-2 px-4 text-sm bg-red',
}

export default function Button({ variant = 'solid', className, href, ...props }) {

    className = clsx(
        baseStyles[variant],
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