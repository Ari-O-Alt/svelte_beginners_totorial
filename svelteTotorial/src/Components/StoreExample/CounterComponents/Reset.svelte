<script>
    import {writibleCountStore} from "../Store.js" // we import the count store

    const handleReset = () => { 
        writibleCountStore.set(0)  // we use the update method on the store to update the value in the store
    }
</script>


<button on:click={handleReset}>Reset</button> <!-- on click we trigger an event handler which will update the store  -->