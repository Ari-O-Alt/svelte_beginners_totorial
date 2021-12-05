<script>
	// we import the component from its file
	import AppSyntax from "./AppSyntax.svelte"
import Example from "./Components/Example.svelte"
	const name = "Alana"
	const city = "Madrid"
	const details = {name: "Diana", city: "Moscow"}
	
</script>

<main>
	<!-- we write it as an HTML tag; we also pass props to it -->
	<Example name="Ana" city="Berlin"/>
	<Example name="Ben" city="Paris"/>
	<Example name="Claire" city="Budapest"/>
	<Example name={name} city={city}/> <!-- or <Example {name} {city}/> -->
	<Example {...details} />
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>