<script>
import Inner from "./Inner.svelte";
</script>

<!-- shorthand version for on:greet-user={newHandleGreetFunction} -->
<!-- instead of importing createEventDispatcher again and dispatching a new event to be listened to in the App component, we just omit the event handler
and Svelte knows we want to pass (forward) the event one level up -->
<Inner on:greet-user/>

<style></style>