import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
	const error = useRouteError();
	if (error.status === 404) {
		return <div>Aradığınız sayfa bulunamadı</div>;
	}
	return <div className="text-4xl font-bold">Hata oluştu. Lütfen tekrar deneyin.</div>;
};
export default ErrorElement;
