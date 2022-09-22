import { render } from '@redwoodjs/testing/web'

import WikipediaVideoTemplatePage from './WikipediaVideoTemplatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WikipediaVideoTemplatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WikipediaVideoTemplatePage />)
    }).not.toThrow()
  })
})
