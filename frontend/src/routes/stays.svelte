<script>
    import {stays} from "$lib/stores"
    let title = 'Stays'
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

A liste of people staying

{#each $stays as stay}
    <div class="stay">
        <div class="id">{stay.id}</div>
        <div class="name">{stay.person.name}</div>
        <div class="dates">{stay.from}</div>
    </div>
{:else}
None
{/each}