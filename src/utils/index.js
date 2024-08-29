import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export const formatPrice = (price) => {
	const dollarsAmount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format((price / 100).toFixed(2));
	return dollarsAmount;
};
