import { render } from '@redwoodjs/testing/web'

import VideoBuilderHomePage from './VideoBuilderHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VideoBuilderHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoBuilderHomePage />)
    }).not.toThrow()
  })
})
