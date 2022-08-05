import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Logo = () => (
  <div className="flex">
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
    <p className="pl-2">Vuilder</p>
  </div>
)

const LoginControls = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return isAuthenticated ? (
    <div>
      <span>Logged in as {currentUser.email}</span>{' '}
      <button className="hover:text-blue-900" type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  ) : (
    <Link to={routes.login()}>Login</Link>
  )
}

const NavMenu = () => (
  <nav className="grid-cols-auto grid gap-4">
    <Link className="hover:text-blue-900" to={routes.home()}>
      Home
    </Link>
  </nav>
)

const Header = () => {
  return (
    <header className="flex h-12 w-full items-center bg-blue-500 px-4 text-white">
      <div className="mr-8">
        <Logo />
      </div>
      <div className="grow">
        <NavMenu />
      </div>
      <LoginControls />
    </header>
  )
}

export default Header
