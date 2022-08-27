import profile from "./profile.jpg";
import "./style.css";

export default function About() {
	return (
		<main id="about">
			<h2>About Me</h2>
			<section id="bio">
				<img id="profileImage" src={profile} alt="Axel enjoying life." />
				<p>
					I am Axel. Coding has been a staple in my life since my teens. I enjoy the puzzle of dissecting a concept into the website of your dreams. An added touch of flair is the most exciting part, and the drive for it sets me apart.
				</p>
				<p>
					While I am new to web development as a career, I have designed my own website, and a web dev bootcamp has further enriched my portfolio. My career at Crayola made my creativity shine.
				</p>
				<p>
					This leads to my pincer approach of both technical and creative detail. Neither can stand on their own in a professional environment. Pretend mockups and "programmer art" are not sufficient for any professional environment. Even in specialized roles, your teammates are also your customers. Working with -- and understanding -- them is crucial.
				</p>
			</section>
		</main>
	);
};