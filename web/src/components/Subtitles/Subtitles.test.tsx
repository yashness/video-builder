import { render } from '@redwoodjs/testing/web'

import Subtitles from './Subtitles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Subtitles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Subtitles />)
    }).not.toThrow()
  })
})
