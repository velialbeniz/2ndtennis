const FormInput = ({ label, type, name, defaultValue }) => {
	return (
		<label className="form-control">
			<div className="label">
				<span className="label-text">{label}</span>
			</div>
			<input
				name={name}
				type={type}
				className="input input-bordered"
				defaultValue={defaultValue}
			/>
		</label>
	);
};
export default FormInput;
