<script>
    import { pages } from '$lib/stores';
</script>

<svelte:head>
    <title>Sobhana Center</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-1 mb-4">Sobhana Center</h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {#each pages as page}
        <div class="col">
            <div class="card h-100 text-dark bg-light border-light">
                <div class="card-header"><i class="bi bi-{page.icon}"></i></div>
                <div class="card-body">
                    <h2 class="card-title"><a href="{page.path}" class="stretched-link">{page.text}</a></h2>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
    .card a {
        text-decoration: none;
        color: black;
    }
</style>