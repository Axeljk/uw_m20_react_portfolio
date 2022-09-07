import * as React from "react";

import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function App() {
	const [page, setPage] = React.useState("/");

	return (
		<>
			<Header page={page} setPage={setPage} />
			{page === "/" &&
				<About />}
			{page === "/portfolio" &&
				<Portfolio />}
			{page === "/contact" &&
				<Contact />}
			<Footer />
		</>
	);
}

export default App;
