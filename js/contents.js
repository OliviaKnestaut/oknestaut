document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const contentsNav = document.querySelector(".contents-flex");
    const links = document.querySelectorAll(".contents-link");

    // Update CSS variables for sticky positioning and anchor offsets
    function updateStickyOffsets() {
        const navbarHeight = navbar.offsetHeight - 1;
        const contentsHeight = contentsNav.offsetHeight;

        document.documentElement.style.setProperty(
            "--navbar-height",
            `${navbarHeight}px`
        );

        document.documentElement.style.setProperty(
            "--sticky-offset",
            `${navbarHeight + contentsHeight}px`
        );
    }

    // Watch for either navbar changing size
    const resizeObserver = new ResizeObserver(updateStickyOffsets);

    resizeObserver.observe(navbar);
    resizeObserver.observe(contentsNav);

    updateStickyOffsets();

    // Get sections corresponding to nav links
    const sections = [...links]
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    // Highlight current section
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const activeLink = document.querySelector(
                    `.contents-link[href="#${entry.target.id}"]`
                );

                if (!activeLink) return;

                links.forEach(link => link.classList.remove("active"));
                activeLink.classList.add("active");

                activeLink.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                });
            });
        },
        {
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0
        }
    );

    sections.forEach(section => sectionObserver.observe(section));
});