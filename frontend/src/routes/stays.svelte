<script>
    import {stays, arriving, leaving} from "$lib/stores"

    // Create a formatter using the "sv-SE" locale
    const dateFormatter = Intl.DateTimeFormat('sv-SE');
    let date = dateFormatter.format(new Date())

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
            <p class="lead">Help management by checking in and out, confirming that you have read the rules and completed check lists.</p>
            <span>Todays date: <strong>{date}</strong></span>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-12 col-md-6">
            <h2>Arriving</h2>
            <table class="table">
            {#each $arriving as stay}
            <tr>
                <td>{stay.person.name}</td>
                <td>{stay.from}</td>
                <td><i class="bi bi-box-arrow-in-right"></i></td>
            </tr>
            {:else}
            <tr>
                <td>No one is scheduled to arrive.</td>
            </tr>
            {/each}
            </table>
        </div>
        <div class="col-12 col-md-6">
            <h2>Leaving</h2>
            <table class="table">
            {#each $leaving as stay}
            <tr>
                <td>{stay.person.name}</td>
                <td>{stay.to}</td>
                <td><i class="bi bi-box-arrow-right"></i></td>
            </tr>
            {:else}
            <tr>
                <td>No one is scheduled to leave.</td>
            </tr>
            {/each}
            </table>
        </div>
    </div>
</div>

