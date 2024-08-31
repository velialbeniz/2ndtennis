const FormSelect = ({ label, name, list, defaultValue, size }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text capitalize">{label}</span>
			</label>
			<select
				name={name}
				className={`select select-bordered ${size}`}
				defaultValue={defaultValue}>
				{list.map((item) => (
					<option
						key={item}
						value={item}>
                        {item?.charAt(0).toUpperCase() + item?.slice(1)}
					</option>
				))}
			</select>
		</div>
	);
};
export default FormSelect;
