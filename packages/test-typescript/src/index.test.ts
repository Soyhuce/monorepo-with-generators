import { helloWorld } from '.'

describe('helloWorld', () => {
  it('should return string', () => {
    expect(helloWorld).toBe('Hello from @/test-typescript')
  })
})
