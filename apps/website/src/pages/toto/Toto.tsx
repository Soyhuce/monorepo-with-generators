import React from 'react'

export interface TotoProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const Toto = ({ children, ...rest }: TotoProps) => {
  return (
    <div {...rest}>
      <h1>Toto Component</h1>
      {children}
    </div>
  )
}
