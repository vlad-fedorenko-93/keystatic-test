<script>
    let { title, slug, description, date } = $props()
</script>

<a class="min-h-40 flex p-8 hover:bg-slate-50 active:bg-slate-100" href={slug}>
    <div class="p-6 w-full">
        <p class="mb-4">{date.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>
        <h4 class="text-4xl font-bold mb-4">{title}</h4>
        <p class="text-lg">{description}</p>
    </div>
    <div class="w-80 rounded bg-slate-200"></div>
</a>