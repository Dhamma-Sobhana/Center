<script context="module">
    import { host } from '$lib/api'
    export async function load({url}) {
        host.set(url.host);
        return {}
    }
</script>
<script>
    import Nav from "$lib/nav.svelte";
    import { goto } from '$app/navigation';
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-icons/font/bootstrap-icons.css";
    typeof window !== `undefined` && import("bootstrap/js/src/collapse")

    import userStore from '$lib/user'
    import { get } from '$lib/api'
    import { fetchStays }  from '$lib/stays'
    import { onMount } from 'svelte'

    let loading = true
    
    onMount(async() => {
        if (!localStorage.getItem('token')) {
            loading = false
            return {props: {user:null}}
        }

        try  {
            $userStore = await get('users/me')
            fetchStays()
        } catch (error) {
            goto('/login')
        } finally {
            loading = false
        }
    })
</script>

<Nav />

{#if !loading}
<slot></slot>
{/if}
