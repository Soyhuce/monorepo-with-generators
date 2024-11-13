import React from 'react'

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button  {...rest}>
      {children}
    </button>
  )
}
