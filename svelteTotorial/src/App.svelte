<script>
	// condition
	const condition = 41
	// text binding
	const message = "Hello, how are you today?"
	// HTML binding
	const htmlBoldText = "<b>This is some bold text, displayed as a string!</b>"
	// HTML binding
	const anotherBoldText = "<b>This is another bold text, but displyed correctly!</b>"
	// attributes binding - id
	const headingId = "heading"
	// booleans binding 
	const isButtonDisabled = true
	// class binding
	const underlineClass = "underline"
	const success = "success"
	const danger = "danger"

</script>

<main>
	<h1>{message}</h1>
	<p>{htmlBoldText}</p>
	<p>{@html anotherBoldText}</p>
	<h2 id={headingId}>This is just a heading with an attribute binding!</h2>
	<button disabled={isButtonDisabled}>SAVE</button>
	<p class={underlineClass}>This text will be undelined!</p>
	<p class={condition %2 ? success : danger}>This text will have different colors based on conditions!</p>
	<p class:success={condition %2}>This is just another way of applying classes conditionally - check the markup!</p>
	 

	
</main>

<style>

	.underline {
		text-decoration: underline;
	}

	.success {
		color: green;
		font-weight: 700;
	}

	.danger {
		color: red;
		font-weight: 500;
	}
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