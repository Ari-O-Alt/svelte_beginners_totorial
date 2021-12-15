<script>
    const names = [
    {firstName: "Ana", lastName: "Bane"},
    {firstName: "John", lastName: "Doe"},
    {firstName: "Mary", lastName: "Jane"},
    {firstName: "Miki", lastName: "Rurk"},
    {firstName: "Arnold", lastName: "Scwarz"}
    ]
</script>

{#each names as name, index (`${index}_${name}`)} <!-- don't forget the key element -->
    <slot name="details" firstName={name.firstName} lastName={name.lastName}/> <!-- we specify props on the slot and send data up to the parent trough it; the parent will then intercept the data and use it  -->
{/each}


<style></style>