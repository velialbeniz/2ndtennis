import { Form, Link, useLoaderData } from "react-router-dom";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
	const { products } = useLoaderData();
	const allCategories = new Set(products.map((product) => product.category));
    const allBrands = new Set(products.map((product) => product.brand));

	return (
		<Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
			<FormInput
				label="Ürün ara"
				name="search"
				type="search"
				size="input-sm"
			/>
			<FormSelect
				label="kategori seç"
				name="category"
				list={Array.from(allCategories)}
				size="select-sm"
			/>
			<FormSelect
				label="marka seç"
				name="brand"
				list={Array.from(allBrands)}
				size="select-sm"
			/>
			<FormSelect
				label="sırala"
				name="order"
				list={["a-z", "z-a", "high", "low"]}
				size="select-sm"
			/>
            <FormRange label="fiyat" name="price" size="range-sm" />
            <FormCheckbox label="Kargo yapılabilir" name="shipping" size="checkbox-sm" />
			<button
				type="submit"
				className="btn btn-primary btn-sm">
				Ara
			</button>
			<Link
				className="btn btn-accent btn-sm"
				to="/products">
				Sıfırla
			</Link>
		</Form>
	);
};
export default Filters;
