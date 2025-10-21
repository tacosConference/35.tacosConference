<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Logo from './Logo.svelte';
	export let color: string;
	let colorBgClass = `tacos-bg-${color}`;
</script>

<!-- Header Navigation Bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm z-1 sticky-top {colorBgClass}">
	<div class="container">
		<Logo color={color} />

		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav flex-column flex-lg-row me-auto">
				<li class="nav-item mx-1">
					<a class="nav-link" class:active={page.url.pathname === '/'} href={resolve('/')}
						>{m.home()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a
						class="nav-link"
						class:active={page.url.pathname === '/what-is'}
						href={resolve('/what-is')}>{m.what_is()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a class="nav-link" class:active={page.url.pathname === '/about'} href={resolve('/about')}
						>{m.about()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a class="nav-link" class:active={page.url.pathname === '/team'} href={resolve('/team')}
						>{m.team()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a
						class="nav-link"
						class:active={page.url.pathname === '/sponsors'}
						href={resolve('/sponsors')}>{m.sponsors()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a
						class="nav-link"
						class:active={page.url.pathname === '/timetable'}
						href={resolve('/timetable')}>{m.timetable()}</a
					>
				</li>
				<li class="nav-item mx-1">
					<a
						class="nav-link"
						class:active={page.url.pathname == '/archive'}
						href={resolve('/archive')}>{m.archive()}</a
					>
				</li>
			</ul>

			<LanguageSwitcher />
		</div>
	</div>
</nav>
