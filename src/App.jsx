import { useRoutes } from "react-router-dom"
import Frontpage from "./pages/frontpage"
import Navbar from "./comps/nav/nav"
import Footer from "./comps/footer/footer"

function App() {

  const routes = useRoutes([
    {
      element: <Frontpage/>,
      path: "/",
    },
    {
      element: <Frontpage/>,
      path: "/home",
    },
  ])

  return (
    <>
      <Navbar/>
      <div style={{height: "200vh"}}></div>
      <main>
      {routes}
      </main>
      <Footer/>
    </>
  )
}

export default App
