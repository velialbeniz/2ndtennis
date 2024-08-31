import { Filters, PaginationContainer, ProductsContainer } from "../components"
import  supabase  from "../supabaseClient";

export const loader = async () => {
    const { data } = await supabase.from("products").select();
    return { products: data };
};

const Products = () => {
  return (
    <>
        <Filters />
        <ProductsContainer />
        <PaginationContainer />
    </>
  )
}
export default Products