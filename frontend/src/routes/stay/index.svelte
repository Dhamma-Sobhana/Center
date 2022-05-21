<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import {arriving, fetchStays, leaving} from "$lib/stays"

    // Create a formatter using the "sv-SE" locale
    const dateFormatter = Intl.DateTimeFormat('sv-SE');
    let date = dateFormatter.format(new Date())

    onMount(async () => {
        try {
            await fetchStays()
        } catch (err) {
            console.log('Failed to load stays')
            goto('/')
        }
    })
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
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Arrival</th>
                        <th class="text-center">Check&nbsp;in</th>
                    </tr>
                </thead>
                <tbody>
                {#each $arriving as stay}
                <tr>
                    <td>{stay.person.name}</td>
                    <td>{stay.from}</td>
                    <td class="text-center"><a href="stay/{stay.id}/checkin"><i class="bi bi-box-arrow-in-right"></i></a></td>
                </tr>
                {:else}
                <tr>
                    <td colspan="3">No one is scheduled to arrive.</td>
                </tr>
                {/each}
                </tbody>
            </table>
        </div>
        <div class="col-12 col-md-6">
            <h2>Leaving</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Departure</th>
                        <th class="text-center">Check&nbsp;out</th>
                    </tr>
                </thead>
                <tbody>
                {#each $leaving as stay}
                <tr>
                    <td>{stay.person.name}</td>
                    <td>{stay.to}</td>
                    <td class="text-center"><a href="/stay/{stay.id}/checkout"><i class="bi bi-box-arrow-right"></i></a></td>
                </tr>
                {:else}
                <tr>
                    <td colspan="3">No one is scheduled to leave.</td>
                </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

