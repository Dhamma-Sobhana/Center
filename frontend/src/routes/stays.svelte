<script>
    import {stays} from "$lib/stores"

    const fetchStays = async () => {
        const url = 'http://localhost:1337/stays'
        const token = localStorage.getItem('token')
        const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`}})
        stays.set(await res.json())
    }
    fetchStays()
</script>

<svelte:head>
    <title>Check in/out</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="display-2">Check in/out</h1>
            <p>A liste of people staying</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table">
            {#each $stays as stay}
            <tr>
                <td>{stay.person.name}</td>
                <td>{stay.from}</td>
                <td>{stay.to}</td>
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

