<script>
	import { goto } from '$app/navigation';
	import { post } from '$lib/api';
	import userStore from '$lib/user';

	let email;
	let password;
    let error;

	async function login(event) {
        let form = event.srcElement
        form.classList.add('was-validated')
        if (!form.checkValidity())
            return

		try {
			let data = await post('auth/local', { identifier: email, password })
			localStorage.setItem('token', data.jwt);
			if (data?.user) {
				$userStore = data.user;
				goto('/');
			}
		} catch (err) {
			if (err?.message?.[0]?.messages?.[0]?.message) {
                error = err.message[0].messages[0].message
			} else {
				error = "An unhandled error occurred"
			}
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<slot/>

<div class="container">
	<form on:submit|preventDefault={login} class="row g-3 needs-validation col-sm-6" novalidate>
		<div class="col-12">
            <h1 class="display-2 mb-2">Login</h1>
        </div>
		<div class="col-12">
			<label for="email" class="form-label">Email</label>
			<input type="email" id="email" bind:value={email} required class="form-control" />
            <div class="invalid-feedback">
                A valid Email is required
            </div>
		</div>
		<div class="col-12">
			<label for="password" class="form-label">Password</label>
			<input type="password" bind:value={password} required class="form-control" />
            <div class="invalid-feedback">
                Password is required
            </div>
		</div>

        {#if error}
        <div class="col-12 text-danger">
            Failed to login: { error }
        </div>
        {/if}

        <div class="col-12 d-grid gap-2">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
	</form>
</div>
