import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WikipediaVideoTemplatePage = () => {
  return (
    <>
      <MetaTags title="WikipediaVideoTemplate" description="WikipediaVideoTemplate page" />

      <h1>WikipediaVideoTemplatePage</h1>
      <p>
        Find me in <code>./web/src/pages/WikipediaVideoTemplatePage/WikipediaVideoTemplatePage.tsx</code>
      </p>
      <p>
        My default route is named <code>wikipediaVideoTemplate</code>, link to me with `
        <Link to={routes.wikipediaVideoTemplate()}>WikipediaVideoTemplate</Link>`
      </p>
    </>
  )
}

export default WikipediaVideoTemplatePage
