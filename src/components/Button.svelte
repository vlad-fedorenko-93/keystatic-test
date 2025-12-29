<script>
    let { label, slug } = $props()
</script>

<a class="bg-slate-100 hover:bg-slate-200 active:bg-slate-100 rounded px-4 py-2 font-[500]" href={slug}>{label}</a>
