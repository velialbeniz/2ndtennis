import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductList from "./ProductList";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
	const { products } = useLoaderData();
	const totalProducts = products.length;
	const [layout, setLayout] = useState("grid");

	const activeStyles = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${pattern === layout ? "btn-primary" : "btn-ghost"}`;
	};
	return (
		<>
			<div className="flex justify-between items-center mt-8 border-b border-base-200 pb-4">
				<h4 className="font-medium text-md">
					{totalProducts} {totalProducts > 1 ? "products" : "product"}
				</h4>
				<div className="flex gap-x-2">
					<button
						onClick={() => setLayout("grid")}
						className={activeStyles("grid")}>
						<BsFillGridFill size={20} />
					</button>
					<button
						onClick={() => setLayout("list")}
						className={activeStyles("list")}>
						<BsList size={20} />
					</button>
				</div>
			</div>
			<div>{totalProducts < 1 ? <h4>Hiç ürün bulunamadı</h4> : layout === "grid" ? <ProductsGrid /> : <ProductList />}</div>
		</>
	);
};
export default ProductsContainer;
