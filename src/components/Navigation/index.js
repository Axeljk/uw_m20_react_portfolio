import "./style.css";

export default function Nav(props) {
	function title(name, address) {
		if (props.page == address)
			return (<a onClick={() => props.setPage(address)}>
				<h3 className="highlighted">{name}</h3>
			</a>);
		else
			return (<a onClick={() => props.setPage(address)}>
				<h3>{name}</h3>
			</a>);
	}

	return (
		<nav>
			<ul>
				<li>
					{title("About", "/")}
				</li>
				<li>
					{title("Portfolio", "/portfolio")}
				</li>
				<li>
					{title("Contact", "/contact")}
				</li>
				<li>
					<a href="/resume_axel_kern.pdf" download>
						<h3>Resume</h3>
					</a>
				</li>
			</ul>
		</nav>
	);
};