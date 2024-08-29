const links = [
	{ id: 1, url: "/", text: "anasayfa" },
	{ id: 2, url: "about", text: "hakkımızda" },
    { id: 3, url: "products", text: "eşyalar" },
	{ id: 4, url: "cart", text: "sepet" },
	{ id: 5, url: "checkout", text: "checkout" },
	{ id: 6, url: "orders", text: "siparişler" },
];

import { NavLink } from "react-router-dom";

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				return (
					<li key={link.id}>
						<NavLink
							to={link.url}
							className="btn btn-ghost capitalize">
							{link.text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};
export default NavLinks;
