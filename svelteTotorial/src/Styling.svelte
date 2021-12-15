<script>
    import ChildStyles from "./Components/ChildStyles.svelte";
</script>

<main>
    <h2>App component, global styles.</h2>
    <h4>
        App component text.
    </h4>
    <ChildStyles/>
</main>


<!-- local styles, specific to this component -->
<style>
/* this style will apply to all h2 tags; it can be placed in any file, not only in the main one */
/* if multiple global styles are applied and they can overwrite eachother, the files will take precedence in alphabetical order */
    :global(h2){
        color:royalblue;
    }
    h4 {
        color: tomato;
    }
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>