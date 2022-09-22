import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VideoBuilderHomePage = () => {
  return (
    <>
      <MetaTags title="VideoBuilderHome" description="VideoBuilderHome page" />
      <div className="container mx-auto">
        <div className="mt-16 flex flex-col items-center justify-center">
          <p className="text-2xl">What do you want to build today?</p>
        </div>
        <div className="mt-8 mb-8 grid gap-8 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
          <TemplateCards
            title="Profile Video Builder (LinkedIn)"
            description="Build a profile video for your LinkedIn profile."
            url="/"
          />
          <TemplateCards
            title="Information video (WikiPedia)"
            description="Automatically get a video of a Wikipedia article summary."
            url={routes.wikipediaVideoTemplate()}
          />
          <TemplateCards
            title="News video (Reddit)"
            description="Create a video of a Reddit post."
            url="/"
          />
          <TemplateCards
            title="Whatsapp conversation video (Whatsapp)"
            description="Create a video of a Whatsapp conversation."
            url="/"
          />
          <TemplateCards
            title="Audiogram Video from subtitles"
            description="Create a video of a subtitle file."
            url={routes.audiogramVideoTemplate()}
          />
        </div>
      </div>
    </>
  )
}

const TemplateCards = ({ title, description, url }) => {
  return (
    <figure className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-white p-8 text-center ">
      <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="my-4 font-light">{description}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <div className="space-y-0.5 text-left font-medium dark:text-white">
          <Link
            to={url}
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start building
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}

export default VideoBuilderHomePage
