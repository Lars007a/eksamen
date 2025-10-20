import { useRoutes } from "react-router-dom"
import Frontpage from "./pages/frontpage"
import Navbar from "./comps/nav/nav"

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
      {routes}
    </>
  )
}

export default App
