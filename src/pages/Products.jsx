import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { apiClient } from "../utils";
import supabase from "../supabaseClient";


export const loader = async ({ request }) => {
	const url = new URL(request.url);
	const search = url.searchParams.get("search") || "";
	const category = url.searchParams.get("category") || "";
	const brand = url.searchParams.get("brand") || "";
	const order = url.searchParams.get("order") || "";
	const price = url.searchParams.get("price") || "";
	const shipping = url.searchParams.get("shipping") || "";
	const page = parseInt(url.searchParams.get("page") || "1");
	const limit = parseInt(url.searchParams.get("limit") || "10");

	// sayfa numarasına bağlı offset oluşturma

	const offset = (page - 1) * limit;

	let query = supabase.from("products").select();

	if (search) {
		query = query.ilike("title", `%${search}%`);
	}
	if (category && category !== "kategori seç") {
		query = query.eq("category", category);
	}
	if (brand && brand !== "marka seç") {
		query = query.eq("brand", brand);
	}

	if (shipping === "on") {
		query = query.eq("shipping", true);
	}

	// if (price) {
	// 	const [minPrice, maxPrice] = price.split("-").map((val) => {
	// 		const parsed = Number(val);
	// 		return isNaN(parsed) ? undefined : parsed; // Geçersiz değerler için undefined döndür
	// 	});

	// 	if (minPrice !== undefined && maxPrice !== undefined) {
	// 		query = query.gte("price", minPrice).lte("price", maxPrice);
	// 	} else if (minPrice !== undefined) {
	// 		query = query.gte("price", minPrice);
	// 	} else if (maxPrice !== undefined) {
	// 		query = query.lte("price", maxPrice);
	// 	}
	// }

	if (price && price !== "0") {
		const maxPrice = Number(price);
		if (!isNaN(maxPrice)) {
			query = query.gte("price", 0).lte("price", maxPrice);
		}
	}

	if (order && order !== "sırala") {
		if (order === "a-z") {
			query = query.order("title", { ascending: true });
		} else if (order === "z-a") {
			query = query.order("title", { ascending: false });
		} else if (order === "high") {
			query = query.order("price", { ascending: false });
		} else if (order === "low") {
			query = query.order("price", { ascending: true });
		}
	}

	// pagination
	query = query.range(offset, offset + limit - 1);

	const { data, error } = await query;

	if (error) {
		console.error(error);
		return { products: [] };
	}

	const { count: totalCount } = await supabase.from("products").select("*", { count: "exact" })

	return {
		products: data,
		pagination: {
			currentPage: page,
			totalPages: Math.ceil(totalCount / limit),
			totalItems: totalCount,
		},
	};
};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};
export default Products;
