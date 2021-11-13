<script>
    import { goto } from '$app/navigation';

    import { pages } from '$lib/stores';
    import user from '$lib/user'

    if ($user === undefined)
        goto('/login')  
</script>

<svelte:head>
    <title>Sobhana Center</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-2 mb-4">Sobhana Center</h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {#if $user}
        {#each pages as page}
        <div class="col">
            <div class="card h-100 text-dark bg-light border-light">
                <div class="card-header"><i class="bi bi-{page.icon}"></i> {page.title}</div>
                <div class="card-body">
                    <a href="{page.path}" class="stretched-link">{page.description}</a>
                </div>
            </div>
        </div>
        {/each}
        {:else}
        <div class="col">
            <div class="card h-100 text-dark bg-light border-light">
                <div class="card-header"><i class="bi bi-key"></i> Login required</div>
                <div class="card-body">
                    <a href="/login" class="stretched-link">You have to be logged in to show content.</a>
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

<style>
    .card a {
        text-decoration: none;
        color: black;
    }
</style>