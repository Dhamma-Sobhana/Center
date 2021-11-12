<script>
	import { page } from '$app/stores';
	import { pages } from '$lib/stores';
	import user from '$lib/user'
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
	<div class="container-fluid">
		<a class="navbar-brand" data-toggle="collapse" data-target=".navbar-collapse" href="/">
			<i class="bi bi-house"></i>
			Home
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
							href={_page.path}>{_page.text}</a
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
			<span class="nav-text">
				{#if $user}
				{$user.username}
				
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