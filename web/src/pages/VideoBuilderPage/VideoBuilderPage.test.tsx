import { render } from '@redwoodjs/testing/web'

import VideoBuilderPage from './VideoBuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VideoBuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoBuilderPage />)
    }).not.toThrow()
  })
})
