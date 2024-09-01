import { Link, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
	return (
		<section className="grid min-h-screen place-content-center bg-slate-100">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">Kayıt ol</h2>
					<Form
						method="post"
						className="flex flex-col gap-4">
						<FormInput
							type="text"
							name="username"
							label="kullanıcı adı"
							defaultValue="test"
                            size="input-md"
						/>
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
                        <SubmitBtn text={"Register"} />
                        <p>Zaten hesabın var mı? <Link className="ml-2 link-hover link-primary" to="/login">Giriş</Link></p>
                        <p><Link className="link-hover link-primary" to="/">Anasayfa</Link>'ya geri dön</p>
					</Form>
				</div>
			</div>
		</section>
	);
};
export default Register;
