<section id="contact" class="py-40 bg">
    <div class="content w-3/4 m-auto grid grid-cols-2 gap-8">
        <div class="title">
            <h1 class="text-5xl mb-4">Contact</h1>
            <p class="text-xl w-3/5">
                Feel free to reach out. I'm always open to new opportunities and
                collaborations.
            </p>
        </div>
        <div class="flex flex-col gap-2">
            <a href="mailto:gnatrusyy@gmail.com">gnatrusyy@gmail.com</a>
            <hr />
            <a href="https://www.linkedin.com/in/vladislav-fedorenko-670455123/"
                >LinkedIn</a
            >
            <hr />
            <a href="https://www.instagram.com/needhlep/">Instagram</a>
            <hr />
            <a href="https://t.me/dazheneznayu">Telegram</a>
        </div>
    </div>
</section>

<style>
    .bg {
        background-color: var(--color-base-100);
    }

    h1 {
        color: var(--color-base-content);
    }

    p {
        color: var(--color-base-content-muted);
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 2rem;
        color: var(--color-base-content-muted);
        transition: color 0.3s ease;
    }
    a:hover {
        color: var(--color-base-content);
    }
    hr {
        height: 1px;
        border-color: var(--color-border);
        margin: 1rem 0;
    }

    @media (max-width: 900px) {

        #contact {
            padding: 4rem 0 6rem 0;
        }
        .content {
            grid-template-rows: fit-content fit-content;
            grid-template-columns: 1fr;
        }

        .content .title {
            margin-bottom: 4rem;
        }

        .content div h1 {
            font-size: 2.5rem;
            width: 100%;
        }

        .content div p {
            width: 100%;
        }
    }
</style>
