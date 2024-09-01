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
						<h2 className="card-title">Giriş yap</h2>
						<Form
							method="post"
							className="flex flex-col gap-4">
							<FormInput
								type="email"
								name="email"
								label="e-posta"
								defaultValue="test@test.com"
                                size="input-md"
							/>
							<FormInput
								type="password"
								name="password"
								label="şifre"
								defaultValue="secret"
                                size="input-md"
							/>

                            <SubmitBtn text="Giriş yap" />

							<button
								type="button"
								className="btn btn-secondary btn-block capitalize">
								misafir kullanıcı
							</button>

							<p className="text-center">
								Hesabın yok mu?
								<Link
									className="ml-2 link link-hover link-primary capitalize"
									to="/register">
									Kayıt ol
								</Link>
							</p>
							<p className="text-center">
								<Link
									className="ml-2 link link-hover link-primary capitalize"
									to="/">
									Anasayfa
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
