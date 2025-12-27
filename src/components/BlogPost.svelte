<script>
    let { title, slug, description, date, children } = $props()
</script>

<a class="min-h-40 flex items-center p-8 hover:bg-slate-50 active:bg-slate-100" href={slug}>
    <div class="p-6 w-full">
        <p class="mb-4">{date.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>
        <h4 class="text-4xl font-bold mb-4">{title}</h4>
        <p class="text-lg">{description}</p>
    </div>
    {@render children()}
</a>