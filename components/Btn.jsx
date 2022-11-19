import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid:
        `inline-flex
         items-center 
         justify-center 
         py-2 px-4 
         text-sm 
         rounded-full
         font-semibold 
         focus:outline-none 
         focus-visible:outline-2 
         focus-visible:outline-offset-2`,
    outline:
        `inline-flex
         items-center 
         justify-center 
         py-2 
         px-4 
         text-sm 
         rounded-full
         ring-1`,
}

const variantStyles = {
    solid: {
        slate:
            `bg-slate-900 
             text-white 
             hover:bg-slate-700 
             hover:text-slate-100 
             active:bg-slate-800 
             active:text-slate-300 
             focus-visible:outline-slate-900`,
        blue: `bg-blue-600 
               text-white 
               hover:text-slate-100 
               hover:bg-blue-500 
               active:bg-blue-800 
               active:text-blue-100 
               focus-visible:outline-blue-600
               `,
        white:
            `bg-white 
            text-slate-900 
            hover:bg-blue-50 
            active:bg-blue-200 
            active:text-slate-600 
            focus-visible:outline-white`,
    },
    outline: {
        slate:
            `ring-slate-200 
            text-slate-700 
            hover:text-slate-900 
            hover:ring-slate-300 
            active:bg-slate-100 
            active:text-slate-600 
            focus-visible:outline-blue-600 
            focus-visible:ring-slate-300`,
        white:
            `ring-slate-700 
            text-white 
            hover:ring-slate-500 
            active:ring-slate-700 
            active:text-slate-400 
            focus-visible:outline-white`,
    },
}

export default function Button({ variant = 'outline', color = 'slate', className, href, ...props }) {

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