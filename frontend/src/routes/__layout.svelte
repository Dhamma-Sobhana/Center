<script context="module">
    import { host } from '$lib/api'
    export async function load({url}) {
        host.set(url.host);
        return {}
    }
</script>
<script>
    import Nav from "$lib/nav.svelte";
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

        try {
            $userStore = await get('auth/me')
            fetchStays()
        } catch (err) {
            console.log('Error fetching current user')
        }
        loading = false
        
    })
</script>

<Nav />

{#if !loading}
<slot></slot>
{/if}
