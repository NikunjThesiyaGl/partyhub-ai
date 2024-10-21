import cn from '@/utils'
import React from 'react'

const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        'text-theme-purple-900 py-3 lg:py-4 px-9 lg:px-10 rounded-lg font-semibold transition-all hover:scale-95',
        type === "filled-light" ? "hover:bg-theme-yellow-500 bg-theme-yellow-400" : type === "outlined" ? "bg-transparent hover:bg-theme-yellow-400 border border-theme-yellow-400 text-theme-yellow-400 hover:text-theme-purple-900" : "bg-theme-yellow-500 hover:bg-theme-yellow-400",
        className
      )}>
      {children}
    </button>
  )
}

export default Button