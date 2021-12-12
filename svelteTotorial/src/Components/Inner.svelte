<script>
    // we import createEventDispatcher
    import {createEventDispatcher} from "svelte"
    // we create a dispatch object
    const dispatch = createEventDispatcher()
    // on click, we fire a function that dipatches an event
    const greetUser = () => {
        dispatch("greet-user", "Hello there, user!")
    }
</script>

<div>
    <button on:click={greetUser}>GREET USER</button>
</div>

<style></style>