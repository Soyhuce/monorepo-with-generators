import React from 'react'

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  )
}
