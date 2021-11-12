<script>
    import Nav from "$lib/nav.svelte";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-icons/font/bootstrap-icons.css";
    typeof window !== `undefined` && import("bootstrap/js/src/collapse")

    import userStore from '$lib/user'
    import { fetchStays}  from '$lib/stores'
    import { onMount } from 'svelte'

    let loading = true

    onMount(async() => {
        if (!localStorage.getItem('token')) {
            loading = false
            return {props: {user:null}}
        }

        const res = await fetch('http://localhost:1337/auth/me', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        const user = await res.json()
        loading = false
        if (res.ok) {
            $userStore = user
        }
        fetchStays()
    })
</script>

<Nav />

{#if !loading}
<slot></slot>
{/if}
