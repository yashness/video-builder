import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import Main from 'src/components/Main/Main'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  )
}

export default BaseLayout
