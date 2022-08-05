import { render } from '@redwoodjs/testing/web'

import VideoBase from './VideoBase'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoBase', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoBase />)
    }).not.toThrow()
  })
})
