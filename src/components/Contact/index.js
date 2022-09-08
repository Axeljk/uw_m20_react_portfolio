import "./style.css";

export default function Contact() {
	return (
		<main id="Contact">
			<h2>Contact</h2>
			<section>
				<form>
					<label for="name">Name:</label><br />
					<input type="text" id="name" name="name" required /><br />
					<label for="email">Email:</label><br />
					<input type="text" id="email" name="email" required /><br />
					<label for="message">Message:</label><br />
					<textarea id="message" name="message" required /><br />
				</form>
			</section>
		</main>
	);
};