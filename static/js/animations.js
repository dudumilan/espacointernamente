document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".animate-hero-title");
    const heroText = document.querySelector(".animate-hero-text");

    if (heroTitle) {
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(50px)";
        heroTitle.style.transition = "opacity 1s ease, transform 1s ease";

        setTimeout(() => {
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 200);
    }

    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(40px)";
        heroText.style.transition = "opacity 1s ease, transform 1s ease";

        setTimeout(() => {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 600);
    }

    const elements = document.querySelectorAll(
        ".animate-section:not(#inicio), .animate-card"
    );

    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(60px)";
        element.style.transition = "opacity 0.9s ease, transform 0.9s ease";
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -80px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

    const cards = document.querySelectorAll(".animate-card");

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 4) * 0.15}s`;
    });
});