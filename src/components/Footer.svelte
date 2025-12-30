<footer class="py-4 px-8 bg bg flex justify-between items-center">
    <p class="text-center text-sm">
        © 2025 Vlad Fedorenko. All rights reserved.
    </p>
    <div class="flex gap-4">
        <a
            class="text-slate-500 hover:text-slate-800 transition-colors"
            href="https://www.linkedin.com/in/vladislav-fedorenko-670455123/"
            >LinkedIn</a
        >
        <a
            class="text-slate-500 hover:text-slate-800 transition-colors"
            href="https://www.instagram.com/needhlep/">Instagram</a
        >
        <a
            class="text-slate-500 hover:text-slate-800 transition-colors"
            href="https://t.me/dazheneznayu">Telegram</a
        >
    </div>
</footer>

<style>
    .bg {
        background-color: var(--color-base-100);
        color: var(--color-base-content-muted);
    }

    .bg a {
        color: var(--color-base-content-muted);
        transition: color 0.3s ease;
    }

    .bg a:hover {
        color: var(--color-base-content);
    }

    @media (max-width: 900px) {
        footer {
            flex-direction: column;
            gap: 2rem;
        }
    }
</style>
