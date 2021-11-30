<script>
	// text binding
	const message = "Hello, how are you today?"
	// HTML binding
	const htmlBoldText = "<b>This is some bold text, displayed as a string!</b>"
	// HTML binding
	const anotherBoldText = "<b>This is another bold text, but displyed correctly!</b>"
	// attributes binding
	const headingId = "heading"

</script>

<main>
	<h1>{message}</h1>
	<p>{htmlBoldText}</p>
	<p>{@html anotherBoldText}</p>
	<h2 id={headingId}>This is just a heading with an attribute binding!</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>