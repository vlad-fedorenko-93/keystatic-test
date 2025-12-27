<script>
    let { title, slug, description, children } = $props();
</script>

<a class="card flex flex-col bg-white" href={slug}>
    <div class="thumbnail mb-4">
        {@render children()}
    </div>
    <div class="title-section mb-12">
        <h4 class="text-3xl font-bold">{title}</h4>
        <p>{description}</p>
    </div>
</a>

<style>
    .card {
        transition: all 0.3s ease-in-out;
    }

    .card:hover {
        transform: scale(1.08);
        z-index: 1;
        border-radius: 20px;
        box-shadow:
            0 4px 8px 0 rgba(0, 0, 0, 0.12),
            0 12px 28px 0 rgba(0, 0, 0, 0.1);
    }

    .card .thumbnail {
        overflow: hidden;
        border-radius: 8px;
        scale: 1;
        transition: all 0.3s ease-in-out;
    }

    .card:hover .thumbnail {
        border-radius: 12px;
        scale: .95;
    }

    .card .title-section {
        transition: all 0.3s ease-in-out;
    }

    .card:hover .title-section {
        transform: translateX(12px);
    }
</style>
