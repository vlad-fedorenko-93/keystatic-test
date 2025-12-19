<script>
    let { title, slug } = $props()
</script>

<a href={slug}>
    <h4>{title}</h4>
</a>


<style>
    a {
        border: 1px solid #ccc;
        padding: .5rem;
        color: #000000;
        text-decoration: none;
    }     

    a:hover{
        background-color: #f0f0f0;
    }

    a:active {
        background-color: #ccc;
    }
</style>