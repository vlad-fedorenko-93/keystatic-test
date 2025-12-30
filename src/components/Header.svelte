<nav
    class="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg flex justify-between items-center"
>
    <a class="logo text-xl text-[var(--color-base-content)]" href="/"
        >V. Fedorenko</a
    >

    <div class="flex items-center gap-2">
        <a class="link px-3 py-1 rounded" href="/posts">Blog</a>
        <a class="link px-3 py-1 rounded" href="/portfolio">Portfolio</a>
        <a class="link px-3 py-1 rounded" href="/#contact">Contact</a>
    </div>
</nav>

<style>
    .bg {
        backdrop-filter: blur(9px);
    }

    .logo {
        font-weight: 500;
    }

    .link {
        font-weight: 500;
        color: var(--color-base-content);
        transition: all 0.2s ease-in-out;
    }

    .link:hover {
        background: oklch(from var(--color-base-300) l c h / 0.5);
    }

    .link:active {
        background: oklch(from var(--color-base-300) l c h / 0.7);
    }
</style>
