import "./style.css";

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<a href="www.example.com">
						<h3>About&nbsp;Me</h3>
					</a>
				</li>
				<li>
					<a>
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