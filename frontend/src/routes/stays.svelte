<script>
    import {stays} from "$lib/stores"
    let title = 'Check in/out'
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-2">{title}</h1>
            <p>A liste of people staying</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table">
            {#each $stays as stay}
            <tr>
                <td>{stay.id}</td>
                <td>{stay.person.name}</td>
                <td>{stay.from}</td>
            </tr>
            {:else}
            <tr>
                <td>No one is coming or going</td>
            </tr>
            {/each}
            </table>
        </div>
    </div>
</div>

