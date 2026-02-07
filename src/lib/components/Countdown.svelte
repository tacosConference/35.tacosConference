<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	export let color: string = getContext<{ color: string }>('color').color;
	export let targetDate: Date = new Date('2026-05-15T09:00:00');

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	let prevDays = 0;
	let prevHours = 0;
	let prevMinutes = 0;
	let prevSeconds = 0;

	let interval: ReturnType<typeof setInterval>;

	function updateCountdown() {
		const now = new Date().getTime();
		const distance = targetDate.getTime() - now;

		if (distance < 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
			return;
		}

		prevDays = days;
		prevHours = hours;
		prevMinutes = minutes;
		prevSeconds = seconds;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
	}

	onMount(() => {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	function padNumber(num: number): string {
		return String(num).padStart(2, '0');
	}
</script>

<div class="countdown-container">
	<div class="countdown-title" style="color: var(--tacos-{color}-darkest);">
		Countdown zur TaCoS 2026
	</div>

	<div class="countdown-wrapper">
		<!-- Tage -->
		<div class="time-unit">
			<div class="digit-container">
				<div
					class="digit-box"
					style="background-color: var(--tacos-{color}-lighter); border-color: var(--tacos-{color}-light);"
				>
					{#key days}
						<div
							class="digit"
							style="color: var(--tacos-{color}-main);"
							in:fly={{ y: -100, duration: 600, delay: 0 }}
							out:fly={{ y: 100, duration: 600, delay: 0 }}
						>
							{days}
						</div>
					{/key}
				</div>
			</div>
			<div class="label" style="color: var(--tacos-{color}-dark);">Tage</div>
		</div>

		<div class="separator" style="color: var(--tacos-{color}-main);">:</div>

		<!-- Stunden -->
		<div class="time-unit">
			<div class="digit-container">
				<div
					class="digit-box"
					style="background-color: var(--tacos-{color}-lighter); border-color: var(--tacos-{color}-light);"
				>
					{#key hours}
						<div
							class="digit"
							style="color: var(--tacos-{color}-main);"
							in:fly={{ y: -100, duration: 600, delay: 0 }}
							out:fly={{ y: 100, duration: 600, delay: 0 }}
						>
							{padNumber(hours)}
						</div>
					{/key}
				</div>
			</div>
			<div class="label" style="color: var(--tacos-{color}-dark);">Stunden</div>
		</div>

		<div class="separator" style="color: var(--tacos-{color}-main);">:</div>

		<!-- Minuten -->
		<div class="time-unit">
			<div class="digit-container">
				<div
					class="digit-box"
					style="background-color: var(--tacos-{color}-lighter); border-color: var(--tacos-{color}-light);"
				>
					{#key minutes}
						<div
							class="digit"
							style="color: var(--tacos-{color}-main);"
							in:fly={{ y: -100, duration: 600, delay: 0 }}
							out:fly={{ y: 100, duration: 600, delay: 0 }}
						>
							{padNumber(minutes)}
						</div>
					{/key}
				</div>
			</div>
			<div class="label" style="color: var(--tacos-{color}-dark);">Minuten</div>
		</div>

		<div class="separator" style="color: var(--tacos-{color}-main);">:</div>

		<!-- Sekunden -->
		<div class="time-unit">
			<div class="digit-container">
				<div
					class="digit-box"
					style="background-color: var(--tacos-{color}-lighter); border-color: var(--tacos-{color}-light);"
				>
					{#key seconds}
						<div
							class="digit"
							style="color: var(--tacos-{color}-main);"
							in:fly={{ y: -100, duration: 600, delay: 0 }}
							out:fly={{ y: 100, duration: 600, delay: 0 }}
						>
							{padNumber(seconds)}
						</div>
					{/key}
				</div>
			</div>
			<div class="label" style="color: var(--tacos-{color}-dark);">Sekunden</div>
		</div>
	</div>
</div>

<style lang="scss">
  .countdown-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
    padding: 2rem;
    text-align: center;
    @media (max-width: 1200px) {
      padding: 1.25rem;
      margin: 2rem 0;
    }
    @media (max-width: 768px) {
      padding: 1rem;
      margin: 1.5rem 0;
    }
  }

  .countdown-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .countdown-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
      width: 115%;
      gap: 0.5vw;
    }
    @media (max-width: 768px) {
      width: 120%;
      gap: 0.5vw;
    }
  }

  .time-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .digit-container {
    position: relative;
    perspective: 1000px;
  }

  .digit-box {
    position: relative;
    width: 100px;
    height: 120px;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
    border: 2px solid;
    transition: all 0.3s ease;
  }

  .digit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Courier New', monospace;
    @media (max-width: 1200px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      //font-size: 1.75rem;
    }
  }

  .label {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .separator {
    font-size: 3rem;
    font-weight: 800;
    margin: 0 0.25rem;
    animation: pulse 2s ease-in-out infinite;
    align-self: flex-start;
    margin-top: 2rem;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(0.95);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .countdown-title {
      font-size: 1.35rem;
    }

    .digit-box {
      width: 70px;
      height: 90px;
    }

    .separator {
      font-size: 2rem;
      margin-top: 1.5rem;
    }

    .label {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {

    .digit-box {
      width: 60px;
      height: 75px;
    }

    .separator {
      font-size: 1.5rem;
      margin: 1rem 0.1rem 0;
    }

    .label {
      font-size: 0.65rem;
    }
  }

  /* Retro-Touch mit leichtem Scanline-Effekt */
  .digit-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.03) 0px,
                    rgba(255, 255, 255, 0.03) 1px,
                    transparent 1px,
                    transparent 2px
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Süßer Glow-Effekt */
  .digit-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  }
</style>
