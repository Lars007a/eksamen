import { useRoutes } from "react-router-dom"
import Frontpage from "./pages/frontpage"
import Navbar from "./comps/nav/nav"
import Footer from "./comps/footer/footer"
import About from "./pages/about.jsx";

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
    {
      element: <About/>,
      path: "/about",
    },
  ])

  return (
    <>
      <Navbar/>
      <main>
      {routes}
      </main>
      <Footer/>
    </>
  )
}

export default App
