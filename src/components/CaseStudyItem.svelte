<script>
    let { title, slug, description, date, children } = $props();
    import DateFormater from "./DateFormater.svelte";
</script>

<a class="card flex flex-col" href={slug}>
    <div class="thumbnail mb-4">
        {@render children()}
    </div>
    <div class="title-section mb-6">
        {#if date}
            <DateFormater
                className="mb-0 text-[var(--color-base-content-muted)]"
                {date}
            />
        {/if}
        <h4 class="text-3xl font-bold">{title}</h4>
        <p class="w-4/5">{description}</p>
    </div>
</a>

<style>
    .card {
        transition: all 0.3s ease-in-out;
    }

    h4 {
        color: var(--color-base-content);
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    p {
        color: var(--color-base-content-muted);
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
    }

    .card:hover {
        background-color: oklch(from var(--color-base-100) calc(l - 0.05) c h);
        transform: scale(1.08);
        z-index: 1;
        border-radius: 20px;
    }

    .card .thumbnail {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        scale: 1;
        transition: all 0.3s ease-in-out;
    }

    .card:hover .thumbnail {
        border-radius: 12px;
        scale: 0.95;
        transform: translateY(3px);
    }

    .card .title-section {
        transition: all 0.3s ease-in-out;
    }

    .card:hover .title-section {
        transform: translateX(12px);
    }
</style>
