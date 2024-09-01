import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		apikey: import.meta.env.VITE_API_KEY,
		Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
		"Content-Type": "application/json",
	},
});

export const formatPrice = (price) => {
	const dollarsAmount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format((price / 100).toFixed(2));
	return dollarsAmount;
};
