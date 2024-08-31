import { useEffect, useState } from "react";
import { useLoaderData, Link, useParams } from "react-router-dom";
import supabase from "../supabaseClient";

// export const loader = async () => {
// 	const { data } = await supabase.from("products").select().eq("id", "71d6639d-7cfa-40ea-a9eb-3f368fc1788c");
// 	return { product: data };
// };

const SingleProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	const singleProduct = async () => {
		const { data } = await supabase.from("products").select().eq("id", id);
		setProduct(data[0]);
	};

	useEffect(() => {
		singleProduct();
	}, [id]);

	return (
		<section>
			<div className="text-md breadcrumbs">
				<ul>
					<li>
						<Link to="/">Anasayfa</Link>
					</li>
					<li>
						<Link to="/products">Eşyalar</Link>
					</li>
				</ul>
			</div>
			<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
				<img
					src={product?.image_url}
					className="lg:w-full h-96 w-96 object-cover rounded-lg"
					alt={product?.title}
				/>
				<div>
					<h1 className="text-3xl font-bold">{product?.title}</h1>
					<h4 className="text-xl font-semibold mt-4">{product?.brand}</h4>
					<p className="text-lg mt-4">
						Fiyat:<span className="font-bold ml-2">{product?.price}&#8378;</span>
					</p>
					<p className="text-lg leading-8 mt-8">{product?.description}</p>
					<div className="mt-10 ">
						<button
							className="btn btn-secondary btn-md"
							onClick={() => console.log("add to bag")}>
							Add to bag
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;
