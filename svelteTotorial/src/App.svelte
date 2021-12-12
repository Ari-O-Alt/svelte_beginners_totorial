<script>
	/* import {createEventDispatcher} from "svelte" */
	import {setContext} from "svelte"
	// we import the component from its file
	import Example from "./Components/Example.svelte"
	import Example4 from "./Components/Example4.svelte"
	import FakePopup from "./Components/FakePopup.svelte";
	import Outer from "./Components/Outer.svelte";
	import SimpleCard from "./Components/SimpleCard.svelte"
	import ComplexCard from "./Components/ComplexCard.svelte";

	// multiple props grouped into an object
	const example4Props = {name: "Diana", message: "You have a message", city: "New York"}

	// props we want to pass to children components using the context API
	const details = {name: "Diana", city: "Moscow"}
	// we set the context 
	setContext("details-context", details)

	// we define a variable thay will be printed to the screen when the popover gets closed
	let dataFromThePopover;

	// set the initial state of the popup
	let isPopUpVisible = false
	// function to open the popup
	const openPopup = () => {
		isPopUpVisible = true
		dataFromThePopover = null
	}
	// function to close the popup
	const onClosePopoup = (event) => {
		isPopUpVisible = false
		dataFromThePopover = (event.detail) // we get the data from the child using event.detail
	}	
	//
	const handleGreet = (event) => {
		console.log(event.detail)
	}
</script>

<main>
	<!-- we write the components as HTML tags; we can also pass props to them, directly, trough prop drilling or using the Context API -->
	<Example /> 
	<Example4 {...example4Props}/>
	<button on:click={openPopup}>OPEN POPUP</button>
	{#if isPopUpVisible}
	<FakePopup on:banana={onClosePopoup}/>
	{/if}
	{#if dataFromThePopover}
	<p>This is the data from the popover: {dataFromThePopover}</p>
	{/if}
	<!-- we listen to the event in the App component insetad of the Outer component -->
	<Outer on:greet-user={handleGreet}/>
	<!-- the SimpleCard code that uses basic slots -->
	<SimpleCard>{"There I pass just a string to the card."}</SimpleCard>
	<SimpleCard><h4>Here I pass a heading to the card.</h4></SimpleCard>
	<SimpleCard>
		<h4>Here I pass a heading to the card.</h4>
		<p>And I can pass multiple HTML tags if I want.</p>
	</SimpleCard>
	<SimpleCard/>
	<!-- the ComplexCard that uses named(multiple) slots -->
	<ComplexCard></ComplexCard>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}
</style>