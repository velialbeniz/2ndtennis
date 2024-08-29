import { useLoaderData, Link } from "react-router-dom";

const ProductsGrid = () => {
	const { products } = useLoaderData();

	return (
		<div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => {
				const { title, description, price, image_url } = product;
				return (
					<Link
                    className='card w-full  shadow-md hover:shadow-2xl transition duration-300 '
						key={product.id}
						to={`/products/${product.id}`}>
						<figure className="px-4 pt-4">
							<img
								src={image_url}
								alt={title}
                                className="w-full rounded object-contain md:object-scale-down h-64 md:h-48"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title capitalize tracking-wider">{title}</h2>
							<p className="text-secondary">{price}&#8378;</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsGrid;
