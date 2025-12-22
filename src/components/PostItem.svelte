<script>
    let { title, slug } = $props()
</script>

<a class="min-h-40 hover:bg-gray-50 active:bg-gray-100 flex border border-gray-200 rounded" href={slug}>
    <div class="w-64 bg-slate-100"></div>
    <div class="p-6">
        <h4 class="text-3xl font-bold">{title}</h4>
    </div>
</a>