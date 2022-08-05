import { render } from '@redwoodjs/testing/web'

import Main from './Main'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Main', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Main />)
    }).not.toThrow()
  })
})
