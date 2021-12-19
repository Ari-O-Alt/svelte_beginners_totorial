<script>
    import { onDestroy } from "svelte";
    import {writibleCountStore} from "../Store.js" // we import the count store
    let counter;
    const subscribeToTheStore = writibleCountStore.subscribe((storeValue) => { // we subscribe to the store and asign the value we subscribed to to a local variable we created
    counter = storeValue
  })
    onDestroy(subscribeToTheStore) // we unsuscribe to the store when the component is being unmounted to avoid memory leaks
</script>


<p>The counter's value is: {counter}</p> <!-- the couter variable will update every time it will be updated in the store and this component will re-render -->
<!-- 
Alternative syntax for writing this block of code: 

``
let counter;
const subscribeToTheStore = countStore.subscribe((storeValue) => 
counter = storeValue
})
onDestroy(subscribeToTheStore) 
``

<p>The counter's value is: {$counter}</p>

- This will subscribe to the store
- Unsubscribe when the component is unmounted
- Svelte will automatically manage the subscription
 -->
