import { render } from '@redwoodjs/testing/web'

import AudiogramVideoTemplatePage from './AudiogramVideoTemplatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AudiogramVideoTemplatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AudiogramVideoTemplatePage />)
    }).not.toThrow()
  })
})
