import "./style.css";

export default function Project(props) {
	return (
		<div className="card">
			<div className="card-header">
				<h3>{props.title}</h3>
			</div>
			<div className="card-body">
				<a href={props.repo} rel="noreferrer" target="_blank">GitHub Repo</a>
				<a href={props.deploy} rel="noreferrer" target="_blank">Deployed</a>
			</div>
		</div>
	);
};