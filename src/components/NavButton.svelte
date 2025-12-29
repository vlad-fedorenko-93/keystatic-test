<script>
    let { title, label, slug } = $props()
</script>

<a class="hover:bg-slate-50 active:bg-slate-100 rounded border border-slate-200 p-4" href={slug}>
    <p>{label}</p>
    <h4 class="text-xl font-bold">{title}</h4>
</a>