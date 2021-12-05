<script>
 import {getContext} from "svelte"
 const details = getContext("details-context")
</script>

<h2>This is component "Example 3"!</h2>
<p>Hello {details.name} from {details.city}</p>

<style>	
</style>