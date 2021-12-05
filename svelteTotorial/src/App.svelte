<script>
	import {setContext} from "svelte"
	// we import the component from its file
	import Example from "./Components/Example.svelte"
	import Example4 from "./Components/Example4.svelte"

	// multiple props grouped into an object
	const example4Props = {name: "Diana", message: "You have a message", city: "New York"}

	// props we want to pass to children components using the context API
	const details = {name: "Diana", city: "Moscow"}
	// we set the context 
	setContext("details-context", details)

	
	
</script>

<main>
	<!-- we write the components as HTML tags; we can also pass props to them, directly, trough prop drilling or using the Context API -->
	<Example /> 
	<Example4 {...example4Props}/>

	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}
</style>