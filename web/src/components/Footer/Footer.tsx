import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 pr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Vuilder
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Create video in seconds! Submit data, download the video.
        </p>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>

          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>

          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <Link
              to={routes.contactUs()}
              className="mr-4 hover:underline md:mr-6"
            >
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022{' '}
          <a href="/#" className="hover:underline">
            Vuilder™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
