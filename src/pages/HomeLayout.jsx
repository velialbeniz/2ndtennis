import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";
import Loading from "../components/Loading";

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === "loading";
	return (
		<>
			<nav>
				{/* nav goes here */}
				<Navbar />
			</nav>
			{isPageLoading ? (
				<Loading />
			) : (
				<section className="wrapper py-20">
					{/* content goes here */}
					<Outlet />
				</section>
			)}
		</>
	);
};
export default HomeLayout;
