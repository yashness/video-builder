import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Logo = () => (
  <Link to={routes.home()} className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
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
    <span className="self-center whitespace-nowrap pl-2 text-xl font-semibold dark:text-white">
      Vuilder
    </span>
  </Link>
)

const LoginControls = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return isAuthenticated ? (
    <div>
      <span className="text-gray-300">Logged in as {currentUser.email} | </span>{' '}
      <button className="hover:text-blue-900" type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  ) : (
    <>
      <Link
        to={routes.login()}
        className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
      >
        Login
      </Link>
      <Link
        to={routes.videoBuilder()}
        className="mr-2 rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:px-5 lg:py-2.5"
      >
        Open Vuilder
      </Link>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  )
}

const NavMenu = () => (
  <div
    className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
    id="mobile-menu-2"
  >
    <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
      <li>
        <Link
          to={routes.home()}
          className="block rounded bg-primary-700 py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0 lg:text-primary-700"
          aria-current="page"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to={routes.contactUs()}
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
)

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Logo />
          <div className="flex items-center lg:order-2">
            <LoginControls />
          </div>
          <NavMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
