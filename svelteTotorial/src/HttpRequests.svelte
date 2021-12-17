<script>
import {onMount} from "svelte"
import AutoFocus from "./Components/AutoFocus.svelte"
// we create an array to hold the posts
    let posts = []
// end point for the call
    const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"

    onMount(async() => {
        const response = await fetch(apiEndpoint)
        posts = await response.json()
        console.log(posts)

    })
</script>

<main>
   <!--  {#each posts as post, index (`${index}_${post}`)}
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <h5>{post.userId}</h5>
        <hr>
    {:else}
    <p>Loading... </p>
    {/each} -->
<AutoFocus/>
</main>

<style>
        main {
            text-align: center;
            padding: 1em;
            max-width: 340px;
            margin: 0 auto;
        }
       
    </style>