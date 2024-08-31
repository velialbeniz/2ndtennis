import { HomeLayout, Landing, About, Products, SingleProduct, Cart, Orders, Register, Login, Checkout, Error } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
// import { loader as singleProductLoader } from "./pages/SingleProduct";
import {ErrorElement} from "./components/";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
                errorElement : <ErrorElement />,
                loader: landingLoader,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "products",
				element: <Products />,
                loader: productsLoader,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
		],
	},
	{
		path: "login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "register",
		element: <Register />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
