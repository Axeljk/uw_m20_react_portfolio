import "./style.css";

export default function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<a onClick={() => props.setPage("/")}>
						<h3>About&nbsp;Me</h3>
					</a>
				</li>
				<li>
					<a onClick={() => props.setPage("/portfolio")}>
						<h3>Portfolio</h3>
					</a>
				</li>
				<li>
					<a>
						<h3>Contact</h3>
					</a>
				</li>
				<li>
					<a>
						<h3>Resume</h3>
					</a>
				</li>
			</ul>
		</nav>
	);
};