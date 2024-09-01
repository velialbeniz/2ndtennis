const FormInput = ({ label, type, name, defaultValue, size }) => {
	return (
		<label className="form-control">
			<div className="label">
				<span className="label-text capitalize">{label}</span>
			</div>
			<input
				name={name}
				type={type}
                className={`{input bg-neutral text-neutral-content input-bordered border ${size}`}
				defaultValue={defaultValue}
			/>
		</label>
	);
};
export default FormInput;
