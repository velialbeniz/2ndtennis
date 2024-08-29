import { Link } from "react-router-dom";

const Header = () => {
	return (
        <header className="bg-neutral py-2 text-neutral-content">
			<div className="wrapper gap-x-2 flex justify-center sm:justify-end">
				<Link
					to="/login"
					className="link link-hover text-xs sm:text-sm">
					Login
				</Link>
				<Link
					to="/register"
					className="link link-hover text-xs sm:text-sm">
					Register
				</Link>
			</div>
			{/* <Link to="/" className="btn btn-ghost normal-case text-xl">2ndRacquets</Link> */}
		</header>
	);
};
export default Header;
