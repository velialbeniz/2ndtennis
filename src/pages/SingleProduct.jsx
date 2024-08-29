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
            <img src={product?.image_url} alt="" />
		</section>
	);
};
export default SingleProduct;
