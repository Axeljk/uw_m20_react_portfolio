import Navigation from "../Navigation";
import "./style.css";

export default function Header(props) {
	return (
		<header>
			<h1>Axel&nbsp;Kern</h1>
			<Navigation page={props.page} setPage={props.setPage} />
		</header>
	);
};