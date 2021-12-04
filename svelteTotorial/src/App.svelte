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

	// event handlers
	let counter = 0
	const increaseCounter = (event, stepSize) => {
		console.log(event)
		counter = counter + stepSize
	}

	// object that will keep track of the form fields
	const formValues = {firstName: "", lastName: "", about: "", country: "", jobLocations: [], remoteWork: false, skills: []}
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
	{#each names as name, index (`${index}_${name}`)}
	<p>{index} - {name}</p>
	{/each}
<!-- each blocks -->
	{#each people as person, index (`${index}_${person.firstName}`)}
	<p>{index}. My first name is: {person.firstName}, my last name is {person.lastName} and I live in {person.city}!</p>
	{/each}
	<button on:click={(event) => increaseCounter(event, 5)}>{counter}</button>

<!-- simple form -->
	<form>
		<div>
			<label for="firstName">First Name</label>
			<input type="text" id="firstName" bind:value={formValues.firstName}/>
		</div>
		<div>
			<label for="lastName">Last Name</label>
			<input type="text" id="lastName" bind:value={formValues.lastName}/>
		</div>
		<div>
			<label for="about">About me</label>
			<textarea type="text" id="about" bind:value={formValues.about}/>
		</div>
<!-- single selection element -->
		<div>
			<label for="country">Country</label>
				<select id="country" bind:value={formValues.country}>
					<option value="">Select a country</option>
					<option value="Germany">Germany</option>
					<option value="France">France</option>
					<option value="Spain">Spain</option>
					<option value="Romania">Romania</option>
				</select>
		</div>
<!-- multiselection element -->
		<div>
			<label for="jobLocation">Job location</label>
				<select id="jobLocation" bind:value={formValues.jobLocations} multiple>
					<option value="">Select a country</option>
					<option value="Germany">Germany</option>
					<option value="France">France</option>
					<option value="Spain">Spain</option>
					<option value="Romania">Romania</option>
				</select>
		</div>

<!-- 		single checkbox -->
		<div>
			<label for="remoteWork">Open to remote work?</label>
			<input type="checkbox" id="remoteWork" bind:checked={formValues.remoteWork}/>
		</div>
<!-- 		multiple checkboxes -->
		<div>
			<label>Skills:</label>
			<label for="html">HTML</label>
			<input type="checkbox" id="html" value="HTML" bind:group={formValues.skills}/>
			<label for="css">CSS</label>
			<input type="checkbox" id="css" value="CSS" bind:group={formValues.skills}/>
			<label for="javascript">Javascript</label>
			<input type="checkbox" id="javascript" value="Javascript" bind:group={formValues.skills}/>
			<label for="react">React</label>
			<input type="checkbox" id="react" value="React" bind:group={formValues.skills}/>
		</div>

	</form>
<!-- here we print the form content to the screen -->
	<p>This is my first name: {formValues.firstName}</p>
	<p>This is my last name: {formValues.lastName}</p>
	<p>A little about myself: {formValues.about}</p>
	<p>I come from: {formValues.country}</p>
	<p>I am willing to relocate in the following countries:</p>
	{#each formValues.jobLocations as jobLocation, index (`${index}_${jobLocation}`)}
	<p>{jobLocation}</p>
	{/each}
	<p>Open to remote work: {formValues.remoteWork ? "Yes" : " "}</p>
	<p>I have the following skills:</p>
	{#each formValues.skills as skill, index (`${index}_${skill}`)}
	<p>{skill}</p>
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