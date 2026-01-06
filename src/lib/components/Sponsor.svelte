<script lang="ts">
	import { getContext } from 'svelte';
	import { fade, scale as svelteScale } from 'svelte/transition';
	import { elasticInOut, bounceInOut, cubicIn } from 'svelte/easing';

	export let src: string;
	export let alt: string;
	export let description: string = '';
	export let color: string = getContext<{ color: string }>('color')?.color || 'blue';

	let cardElement: HTMLElement;
	let rotateX = 0;
	let rotateY = 0;
	let scale = 1;
	let showPopup = false;

	function handleMouseMove(event: MouseEvent) {
		if (!cardElement || showPopup) return;

		const rect = cardElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const deltaX = (x - centerX) / centerX;
		const deltaY = (y - centerY) / centerY;

		rotateY = deltaX * 20; // Max 20 degrees rotation
		rotateX = -deltaY * 20;
		scale = 1.1;
	}

	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
		scale = 1;
	}

	function togglePopup() {
		if (description) {
			showPopup = !showPopup;
		}
	}

	function teleport(node: HTMLElement) {
		document.body.appendChild(node);
		return {
			destroy() {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}
		};
	}
</script>

<div
	class="sponsor-container"
	bind:this={cardElement}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	on:click={togglePopup}
	on:keydown={(e) => e.key === 'Enter' && togglePopup()}
	style="--rotateX: {rotateX}deg; --rotateY: {rotateY}deg; --scale: {scale}; --borderColor: var(--tacos-{color}-main); --bgColor: var(--tacos-{color}-lighter);"
	role="button"
	tabindex="0"
>
	<div class="sponsor-card shadow-sm">
		<div class="logo-wrapper">
			<img {src} {alt} class="sponsor-logo" />
		</div>
		<div class="sponsor-name text-center mt-2">
			{alt}
		</div>
	</div>
</div>

{#if showPopup}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="popup-backdrop" on:click={togglePopup} use:teleport transition:fade={{ duration: 200 }}>
		<div
			class="popup-content shadow-lg"
			on:click|stopPropagation
			transition:svelteScale={{ duration: 300, start: 0.8, easing: elasticInOut }}
		>
			<div class="popup-header">
				<img {src} {alt} class="popup-logo" />
				<h3 class="mt-3 text-center" style="color: var(--borderColor)">{alt}</h3>
			</div>
			<div class="popup-body mt-4">
				<p>{description}</p>
			</div>
			<button class="btn tacos-btn-{color} mt-4 w-100" on:click={togglePopup}>
				Close
			</button>
		</div>
	</div>
{/if}

<style>
	.sponsor-container {
		perspective: 1000px;
		display: inline-block;
		width: 100%;
		max-width: 250px;
		cursor: pointer;
		outline: none;
	}

	.sponsor-card {
		background-color: var(--bgColor);
		border: 2px solid var(--borderColor);
		border-radius: 12px;
		padding: 1.5rem;
		transition:
			transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			box-shadow 0.15s ease-out;
		transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(var(--scale));
		transform-style: preserve-3d;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.sponsor-container:hover .sponsor-card {
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	}

	.logo-wrapper {
		width: 100%;
		height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateZ(20px); /* Gives some 3D depth to the logo */
	}

	.sponsor-logo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.sponsor-name {
		font-weight: bold;
		color: var(--borderColor);
		transform: translateZ(10px);
	}

	/* Popup styles */
	.popup-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(8px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 20px;
	}

	.popup-content {
		background-color: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(16px) saturate(180%);
		border: 6px solid var(--borderColor);
		border-radius: 20px;
		padding: 2.5rem;
		max-width: 500px;
		width: 90%;
		position: relative;
	}


	.popup-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.popup-logo {
		max-width: 200px;
		max-height: 100px;
		object-fit: contain;
	}

	.popup-body {
		color: #333;
		font-size: 1.1rem;
		line-height: 1.6;
		text-align: justify;
	}
</style>
