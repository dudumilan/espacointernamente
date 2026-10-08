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
        (entries, observer) => {
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

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const accept = document.getElementById("cookie-accept");
    const reject = document.getElementById("cookie-reject");

    if (!banner || !accept || !reject) {
        return;
    }

    const savedConsent = localStorage.getItem("cookieConsent");

    if (savedConsent === "accepted") {
        gtag("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted"
        });

        banner.style.display = "none";
        return;
    }

    if (savedConsent === "rejected") {
        gtag("consent", "update", {
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
        });

        banner.style.display = "none";
        return;
    }

    accept.addEventListener("click", () => {
        gtag("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted"
        });

        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });

    reject.addEventListener("click", () => {
        gtag("consent", "update", {
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
        });

        localStorage.setItem("cookieConsent", "rejected");
        banner.style.display = "none";
    });
}); 