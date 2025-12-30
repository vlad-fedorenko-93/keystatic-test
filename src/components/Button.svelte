<script>
    let { label, slug } = $props()
</script>

<a class="rounded px-4 py-2 font-[500]" href={slug}>{label}</a>

<style>
    a {
        color: var(--color-accent-content);
        background: var(--color-accent);
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        background: oklch(from var(--color-accent) calc(l - .07) c h);
    }

    a:active {
        background: oklch(from var(--color-accent) calc(l - .15) c h);
    }
</style>
