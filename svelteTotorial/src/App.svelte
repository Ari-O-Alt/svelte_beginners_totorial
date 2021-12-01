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

	// condition for the if, else if, else statatements
	const num = NaN
	// array of items for the each cases
	const names = ["Rob", "John", "Katy", "Ilana"]
	// array of objects for the each cases
	const people = [{firstName: "Anna", lastName:"Bomberg", city:"Berlin"}, {firstName: "Judy", lastName:"Foster", city:"Paris"}]

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
	 
<!-- 	if, else if, else blocks -->
	{#if num === 0}
	<h2>This will show up if the number is equal to zero!</h2> 
	{:else if num < 0}
	<h2>This will show up if the number is smaller than zero!</h2> 
	{:else if Number.isNaN(num)}
	<h2>This will show up if the number is not a number!</h2> 
	{:else}
	<h2>This will show if the number is not zero!</h2>
	{/if}
<!-- each blocks -->
	{#each names as name, index}
	<p>{index} - {name}</p>
	{/each}
<!-- each blocks -->
	{#each people as person, index}
	<p>{index}. My first name is: {person.firstName}, my last name is {person.lastName} and I live in {person.city}!</p>
	{/each}
	
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