import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const HomeLayout = () => {
  return (
    <>
        <nav>
            {/* nav goes here */}
            <Navbar />
        </nav>
        <section className="wrapper py-20">
            {/* content goes here */}
            <Outlet />
        </section>
    </>
  )
}
export default HomeLayout