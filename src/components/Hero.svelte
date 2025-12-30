<script lang="ts">
    import { onMount } from "svelte";
    import "../styles/animation.css";

    let interBubble: HTMLDivElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    onMount(() => {
        let animationFrame: number;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            animationFrame = requestAnimationFrame(move);
        }

        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationFrame = requestAnimationFrame(move);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<div class="relative text-container flex flex-col justify-center items-center">
    <h3 class="mb-8">Hi! I'm Vladyslav Fedorenko</h3>
    <h1 class="mb-8 font-black">Creative Developer</h1>
    <h3>Based in Ukraine</h3>
    <a
        class="absolute bottom-4 right-4 opacity-30 hover:opacity-100 transition-all text-xs text-white"
        href="https://codepen.io/glitchworker">Animation by GlitchWorker</a
    >
</div>
<div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="goo">
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
    </svg>
    <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div class="interactive" bind:this={interBubble}></div>
    </div>
</div>

<style>
    h1 {
        font-weight: 900;
        font-size: 12vw;
        line-height: 0.9;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        font-size: 1.5vw;
        letter-spacing: 0.1em;
        line-height: 0.9;
        text-align: center;
        text-transform: uppercase;
    }
</style>
