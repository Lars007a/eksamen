import { useRoutes } from "react-router-dom"
import Frontpage from "./pages/frontpage"

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
      {routes}
    </>
  )
}

export default App
