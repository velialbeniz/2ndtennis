import { useLoaderData, Link } from "react-router-dom";

const ProductList = () => {
	const { products } = useLoaderData();
	return (
		<div className="mt-12 grid gap-y-8">
			{products.map((product) => {
				const { id, title, brand, price, image_url } = product;
				return (
					<Link
						key={product.id}
						to={`/products/${id}`}
						className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
						<img
							src={image_url}
							alt={title}
							className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
						/>
						<div className="ml-0 sm:ml-16">
							<h3 className="capitalize font-medium text-lg">{title}</h3>
							<h4 className="capitalize text-md text-neutral-400">{brand}</h4>
						</div>

						<p className="font-medium ml-0 sm:ml-auto text-lg">{price}&#8378;</p>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductList;
