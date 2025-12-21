<script>
    let { title, slug } = $props()
</script>

<a class="hover:bg-gray-50 active:bg-gray-100 border border-gray-200 rounded" href={slug}>
    <div class="h-40 bg-slate-100"></div>
    <div class="p-4">
        <h4 class="text-xl font-bold">{title}</h4>
    </div>
</a>

