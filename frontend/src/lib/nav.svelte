<script>
	import { page } from '$app/stores';
	import { pages } from '$lib/config';
	import user from '$lib/user'
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
	<div class="container-fluid">
		<a class="navbar-brand" data-toggle="collapse" data-target=".navbar-collapse" href="/">
			<i class="bi bi-house"></i>
			Sobhana
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav me-auto">
				{#if $user}
				{#each pages as _page}
					<li class="nav-item">
						<a
							class="nav-link"
							class:active={$page.path === _page.path}
							data-toggle="collapse" data-target=".navbar-collapse"
							aria-current="page"
							href={_page.path}>{_page.title}</a
						>
					</li>
				{/each}
				{:else}
				<a
					class="nav-link"
					data-toggle="collapse" data-target=".navbar-collapse"
					aria-current="page"
					href='/login'><i class="bi bi-key"></i> Please login</a>
				{/if}
			</ul>
			<span class="user nav-text d-inline-flex align-items-center">
				{#if $user}
				<span class="name">
				{$user.username} 
				</span>
				<a
					data-toggle="collapse" data-target=".navbar-collapse"
					aria-current="page"
					href='/logout'><i class="bi bi-door-open"></i></a
				>
				{/if}
			</span>
		</div>
	</div>
</nav>

<style>
	.user {
		font-size: 1.2em;
	}
	.user a {
		text-decoration: none;
		padding: 0 0.5em;
	}
</style>