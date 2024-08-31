const FormCheckbox = ({ label, name, defaultValue, size }) => {
	return (
		<div className="form-control">
            <label className="label cursor-pointer">{label}</label>
			<input
				type="checkbox"
                name={name}
                defaultChecked={defaultValue}
                className={`checkbox checkbox-primary ${size}`}
			/>
		</div>
	);
};
export default FormCheckbox;
