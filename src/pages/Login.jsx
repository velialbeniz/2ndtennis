import login from "../assets/login.jpg";
import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
	return (
		<section className="grid min-h-screen place-content-center bg-slate-100">
			<div className="md:flex gap-x-4 items-center justify-center">
				<img
					className="w-1/2 hidden md:block"
					src={login}
				/>
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Login</h2>
						<Form
							method="post"
							className="flex flex-col gap-4">
							<FormInput
								type="email"
								name="email"
								label="Email"
								defaultValue="test@test.com"
							/>
							<FormInput
								type="password"
								name="password"
								label="Password"
								defaultValue="secret"
							/>

							<SubmitBtn text="Login" />

							<button
								type="button"
								className="btn btn-secondary btn-block">
								guest user
							</button>

							<p className="text-center">
								Don't have an account?
								<Link
									className="ml-2 link link-hover link-primary capitalize"
									to="/register">
									Register
								</Link>
							</p>
						</Form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Login;
