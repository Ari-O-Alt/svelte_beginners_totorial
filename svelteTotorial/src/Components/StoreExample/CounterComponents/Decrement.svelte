<script>
    import {countStore} from "../Store.js" // we import the count store

    const handleDecrement = () => { 
        countStore.update((storeValue) => { // we use the update method on the store to update the value in the store
            return storeValue - 1
        })
    }
</script>


<button on:click={handleDecrement}>Decrement</button> <!-- on click we trigger an event handler which will update the store  -->