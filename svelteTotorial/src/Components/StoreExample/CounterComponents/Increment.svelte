<script>
    import {writibleCountStore} from "../Store.js" // we import the count store

    const handleIncrement = () => { 
        writibleCountStore.update((storeValue) => { // we use the update method on the store to update the value in the store
            return storeValue + 1
        })
    }
</script>


<button on:click={handleIncrement}>Increment</button> <!-- on click we trigger an event handler which will update the store  -->