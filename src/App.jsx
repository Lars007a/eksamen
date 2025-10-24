import { useRoutes } from "react-router-dom"
import Frontpage from "./pages/frontpage"
import Navbar from "./comps/nav/nav"
import Footer from "./comps/footer/footer"
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import Pricing from "./pages/pricing.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import EmployeesPage from "./pages/EmployeesPage.jsx"
import NotFound from "./pages/404.jsx";
import Login from "./pages/login.jsx";
import Backoffice from "./pages/backoffice.jsx";
import { ToastContainer } from "react-toastify";

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
    {
      element: <Blog/>,
      path: "/blog/:id"
    },
    {
      element: <Pricing/>,
      path: "/pricing",
    },
    {
      element: <ServicesPage/>,
      path: "/services",
    },
    {
      element: <EmployeesPage/>,
      path: "/employees",
    },
    {
      element: <NotFound/>,
      path: "*",
    },
    {
      element: <Login/>,
      path: "/login",
    },
    {
      element: <Backoffice/>,
      path: "/backoffice",
    }
  ])

  return (
    <>
      <Navbar/>
      <main>
      {routes}
      </main>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default App
