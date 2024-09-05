import { useLoaderData, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
	const { products, pagination } = useLoaderData();
	const { currentPage, totalPages } = pagination;
	const navigate = useNavigate();

	const handlePageChange = (page) => {
		navigate(`/products?page=${page}`);
	};

	return (
		<div className="mt-16 flex justify-end">
			<div className="join gap-x-2">
				{/* {currentPage > 1 && (
				)} */}
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="btn btn-xs btn-primary sm:btn-md join-item">
					Önceki
				</button>
				{/* {currentPage < totalPages && (
				)} */}
				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
					className="btn btn-xs btn-primary sm:btn-md join-item">
					Sonraki
				</button>
				{/* <button className="btn btn-xs btn-primary sm:btn-md join-item">Sonraki</button> */}
			</div>
		</div>
	);
};
export default PaginationContainer;
