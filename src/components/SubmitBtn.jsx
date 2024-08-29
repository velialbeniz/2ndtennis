import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
	const { state } = useNavigation();

	return (
		<button
			type="submit"
			className="btn btn-primary"
			disabled={state === "submitting"}>
			{state === "submitting" ? <span className="loading loading-spinner"></span> : <span>{text || "Submit"}</span>}
		</button>
	);
};
export default SubmitBtn;
