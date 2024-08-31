import { useState } from "react";

const FormRange = ({ label, name, defaultValue, size }) => {
	const [range, setRange] = useState(0);
	const step = 100;
	const maxRange = 100000;
	return (
		<div className="form-control">
			<label
				htmlFor={name}
				className="label cursor-pointer">
				<span className="label-text capitalize">{label}</span>
				<span className="label-text-alt">{range} &#8378;</span>
			</label>
			<input
				type="range"
				name={name}
				min="0"
				max={maxRange}
				value={range}
				step={step}
				onChange={(e) => setRange(e.target.value)}
				className={`range range-primary ${size}`}
			/>
			<div className="w-full flex justify-between text-xs px-2 text-gray-500">
				<span className="font-bold text-md">0</span>
				<span className="font-bold text-md">Max : {maxRange} &#8378;</span>
			</div>
		</div>
	);
};
export default FormRange;
