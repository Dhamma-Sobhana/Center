<script>
    import { page } from '$app/stores';
    import { pages } from '$lib/stores';
</script>

<nav>
    <a class:active={$page.path === '/'} href="/">Home</a> | 

    {#each pages as _page}
        <a class:active={$page.path === _page.path} href="{_page.path}">{_page.text}</a> | 
    {/each}
</nav>

<style>
    .active {
        font-weight: bold;
    }
</style>