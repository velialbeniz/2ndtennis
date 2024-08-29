import { Hero } from "../components";
import supabase from "../supabaseClient";
import { FeaturedProducts } from "../components";

export const loader = async () => {
	const { data } = await supabase.from("products").select().eq("featured", true);
	return { products: data };
};

const Landing = () => {
	

	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};
export default Landing;
