<script>
import { onMount } from "svelte";

// we create a ref to the element we want to focus
    let inputRef;
// on mount, we call the focus function 
    onMount(() => {
        inputRef.focus()
    })
</script>


<label for="someInput">Some input</label>
<input type="text" id="someInput" bind:this={inputRef}/> <!-- we bind the ref to this input element -->

<style>

</style>