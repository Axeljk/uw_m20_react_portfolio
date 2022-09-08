import Project from "../Project";
import "./style.css";

export default function Portfolio() {
	return (
		<main id="portfolio">
			<h2>Portfolio</h2>
			<section className="portfolio">
				<Project title="Peas by Spring" repo="https://github.com/Axeljk/garden-app-frontend" deploy="https://peas-by-spring.herokuapp.com" />
				<Project title="Chew on It" repo="https://github.com/pem2k/Chew-on-it" deploy="https://chew-on-it.herokuapp.com" />
				<Project title="Congressional Stock Stalking" repo="https://github.com/Axeljk/congress-stock-stalking" deploy="https://axeljk.github.io/congress-stock-stalking" />
				<Project title="Password Generator" repo="https://github.com/Axeljk/uw_m03_password" deploy="https://axeljk.github.io/uw_m03_password" />
				<Project title="MySQL Employee CMS" repo="https://github.com/Axeljk/uw_m12_employee" deploy="https://watch.screencastify.com/v/4v21pWV5S4tteTATNEAp" />
				<Project title="GADD" repo="https://github.com/Axeljk/gadd" deploy="https://axeljk.github.io/gadd/gadd.html" />
			</section>
		</main>
	);
};