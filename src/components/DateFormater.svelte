<script>
    let { date, className } = $props();
</script>

<p class={className}>{date.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>