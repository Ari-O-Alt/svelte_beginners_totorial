<script>

</script>

<div class="card">
     <!-- the slot tag is used instead of props so we can pass anything we want down from the parent, not just strings -->
     <!-- it can also accept default content in case the parent doesn't pass anything down to the component -->
    <slot>This is some default content. It can be whatever we want.</slot> 
</div>

<style>
    .card {
        margin: 0 auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0,0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
        width: 200px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0,0, 0.2);
    }
</style>