<script>
  import {countStore} from "../Store.js" // we import the count store

  let counter;

  countStore.subscribe((storeValue) => { // we subscribe to the store and asign the value we subscribed to to a local variable we created
    counter = storeValue
  })
</script>


<p>The counter's value is: {counter}</p>
