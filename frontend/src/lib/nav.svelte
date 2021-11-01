<script>
	import { page } from '$app/stores';
	import { pages } from '$lib/stores';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
	<div class="container-fluid">
		
		<a class="navbar-brand" href="/">
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
			<ul class="navbar-nav">
				{#each pages as _page}
					<li class="nav-item">
						<a
							class="nav-link"
							class:active={$page.path === _page.path}
							aria-current="page"
							href={_page.path}>{_page.text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>