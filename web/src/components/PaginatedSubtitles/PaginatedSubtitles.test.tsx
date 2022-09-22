import { render } from '@redwoodjs/testing/web'

import PaginatedSubtitles from './PaginatedSubtitles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PaginatedSubtitles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PaginatedSubtitles />)
    }).not.toThrow()
  })
})
