<script lang="ts">
	import { getContext } from 'svelte';

	export let src: string;
	export let alt: string;
	export let link: string;
	export let color: string = getContext<{ color: string }>('color')?.color || 'blue';

	let cardElement: HTMLElement;
	let rotateX = 0;
	let rotateY = 0;
	let scale = 1;

	function handleMouseMove(event: MouseEvent) {
		if (!cardElement) return;

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
</script>

<a href={link} target="_blank" class="text-decoration-none col d-flex justify-content-center">
	<div
		class="sponsor-container"
		bind:this={cardElement}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
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
</a>

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
        transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275),
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
</style>
