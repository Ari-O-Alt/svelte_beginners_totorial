<script>
import {onMount} from "svelte"
import AutoFocus from "./Components/AutoFocus.svelte"
import Display from "./Components/StoreExample/CounterComponents/Display.svelte";
import TabA from "./Components/TabA.svelte";
import TabB from "./Components/TabB.svelte";
import TabC from "./Components/TabC.svelte";
// we create an array to hold the posts
    let posts = []
// end point for the call
    const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"

    onMount(async() => {
        const response = await fetch(apiEndpoint)
        posts = await response.json()
    })
// we create a virable holding the currently active tab; by default it will be TabA
    let activeTab = TabA
</script>

<main>
<Display/>

<!-- on click, the currently active tab will change -->
    <!-- <button on:click={() => (activeTab = TabA)}>TAB A</button>
    <button on:click={() => (activeTab = TabB)}>TAB B</button>
    <button on:click={() => (activeTab = TabC)}>TAB C</button> -->
<!-- special Svelte component that lets us bind to a specific component and render it -->
    <!-- <svelte:component this={activeTab} ></svelte:component> -->
   
    <!-- <AutoFocus/>
    {#each posts as post, index (`${index}_${post}`)}
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <h5>{post.userId}</h5>
        <hr>
    {:else}
        <p>Loading... </p>
    {/each} -->
</main>

<style>
        main {
            text-align: center;
            padding: 1em;
            max-width: 340px;
            margin: 0 auto;
        }
       
    </style>