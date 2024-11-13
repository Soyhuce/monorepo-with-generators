import { render } from '@testing-library/react'

import { Toto } from './'

describe('Pages / Toto', () => {
  it('should match snapshot for the Toto component', () => {
    const component = render(<Toto />)
    expect(component).toMatchSnapshot()
  })
})
