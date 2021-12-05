<script>
    // we import the function that creates event dispatchers
    import {createEventDispatcher} from "svelte"
    const text = "I am a popup!"
    // we can use this dispatch constant to dispatch as many events as we want in this component
    const dispatch = createEventDispatcher()
</script>

<div class="popUp">
    <p>{text}</p>
<!--   on click, an evenr called "banana" is dispatched (we listen for it in the App component); we are also sending some data to the parent -->
    <button on:click={() => dispatch("banana", "DATA TO SEND TO THE PARENT")} >CLOSE POPUP</button>
</div>

<style>

    .popUp {
        margin: 0 auto;
        width: 300px;
        background-color: bisque;
        text-align: center;
        min-height: 100px;
        border: 2px solid black;
    }
    
</style>