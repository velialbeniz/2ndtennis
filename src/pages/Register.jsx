import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
	return (
		<section className="grid min-h-screen place-content-center bg-slate-100">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">Register</h2>
					<Form
						method="post"
						className="flex flex-col gap-4">
						<FormInput
							type="text"
							name="username"
							label="Username"
							defaultValue="test"
						/>
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
                        <SubmitBtn text={"Register"} />
                        <p>Already have an account? <Link className="ml-2 link-hover link-primary" to="/login">Login</Link></p>
					</Form>
				</div>
			</div>
		</section>
	);
};
export default Register;
