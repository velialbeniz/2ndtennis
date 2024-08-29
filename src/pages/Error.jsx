import { useRouteError, Link } from "react-router-dom";

const Error = () => {
	const error = useRouteError();

	if (error.status === 404) {
		return (
			<main className="grid min-h-screen place-content-center bg-slate-100">
				<div className="text-center">
					<h1 className="text-9xl font-bold text-red-500">404</h1>
					<p className="text-2xl font-bold">Page Not Found</p>
					<p className="text-2xl font-bold">Please check your URL</p>
                    <div className="mt-4">
                        <Link className="btn btn-secondary" to="/">Click for Home page</Link>
                    </div>
				</div>
			</main>
		);
	}

    return (
        <main className="grid min-h-screen place-content-center bg-slate-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500">500</h1>
                <p className="text-2xl font-bold">There was an Error</p>
                <div className="mt-4">
                    <Link className="btn btn-secondary" to="/">Click for Home page</Link>
                </div>
            </div>
        </main>
    );
};
export default Error;
