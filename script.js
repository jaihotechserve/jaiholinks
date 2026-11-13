
/* =========================================================
   JAIHO LINKS
   Developed by Jaiho TechServe
   Static directory — No database, no backend, no JSON.
========================================================= */

"use strict";

/* ---------------------------------------------------------
   1. DIRECTORY DATA

   Add new companies and products here.
   Every entry must have a corresponding HTML page.
--------------------------------------------------------- */

const JAIHO_DIRECTORY = [

    // -----------------------------------------------------
    // COMPANIES
    // -----------------------------------------------------

    {
        id: "jaiho-digital",
        name: "Jaiho Digital",
        type: "company",
        category: "Parent Company",
        description: "Tech for Earth, Tech for All.",
        page: "jlc/jaihodigital.html",
        icon: "globe",
        featured: true
    },

    {
        id: "jaiho-labs",
        name: "Jaiho Labs",
        type: "company",
        category: "Research & Development",
        description: "Exploring ideas and building intelligent technology through research and innovation.",
        page: "jlc/jaiholabs.html",
        icon: "flask-conical"
    },

    {
        id: "jaiho-techserve",
        name: "Jaiho TechServe",
        type: "company",
        category: "Technology Services",
        description: "Building practical digital solutions, software and technology experiences.",
        page: "jlc/jaihotechserve.html",
        icon: "code-2"
    },

    {
        id: "jaiho-ai-media",
        name: "Jaiho AI Media",
        type: "company",
        category: "Creative Media",
        description: "Where artificial intelligence meets imagination, storytelling and creativity.",
        page: "jlc/jaihoaimedia.html",
        icon: "clapperboard",
        featured: true
    },

    {
        id: "jaiho-edge",
        name: "Jaiho Edge",
        type: "company",
        category: "Edge Technology",
        description: "Exploring intelligent, connected and edge-powered technology.",
        page: "jlc/jaihoedge.html",
        icon: "cpu"
    },

    {
        id: "jaiho-kernel",
        name: "Jaiho Kernel",
        type: "company",
        category: "Systems & Infrastructure",
        description: "Working at the core of computing, systems and software infrastructure.",
        page: "jlc/jaihokernel.html",
        icon: "terminal"
    },


    // -----------------------------------------------------
    // PRODUCTS
    // -----------------------------------------------------

    {
        id: "ai-micro-stories",
        name: "AI Micro Stories",
        type: "product",
        category: "AI Storytelling",
        description: "Micro Stories, Macro Imagination.",
        page: "jlp/aimicrostories.html",
        icon: "film"
    },

    {
        id: "true-positive",
        name: "True Positive",
        type: "product",
        category: "Investigative Storytelling",
        description: "Stories that investigate, question and uncover.",
        page: "jlp/truepostive.html",
        icon: "search"
    },

    {
        id: "visio-ai",
        name: "Visio AI",
        type: "product",
        category: "AI & Data Science",
        description: "An intelligent workspace for data exploration and machine learning.",
        page: "jlp/visioai.html",
        icon: "brain-circuit"
    }

];


/* ---------------------------------------------------------
   2. CONFIGURATION
--------------------------------------------------------- */

const CONFIG = {
    gridSelector: "#directory-grid",
    searchSelector: "#directory-search",
    filterSelector: "[data-filter]",
    emptyMessage: "No connections found. Try another search."
};


/* ---------------------------------------------------------
   3. HELPERS
--------------------------------------------------------- */

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}


function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }
}


function getDirectoryItem(id) {
    return JAIHO_DIRECTORY.find(item => item.id === id) || null;
}


/* ---------------------------------------------------------
   4. DIRECTORY CARD
--------------------------------------------------------- */

function createDirectoryCard(item) {

    const name = escapeHTML(item.name);
    const description = escapeHTML(item.description);
    const category = escapeHTML(item.category);
    const page = escapeHTML(item.page);
    const icon = escapeHTML(item.icon || "arrow-up-right");

    const typeLabel = item.type === "company" ? "Company" : "Product";

    return `
        <a
            class="directory-card"
            href="${page}"
            data-directory-card
            data-name="${name.toLowerCase()}"
            data-type="${escapeHTML(item.type)}"
            aria-label="Explore ${name}"
        >

            <div class="directory-card-top">

                <div class="directory-card-icon">
                    <i data-lucide="${icon}"></i>
                </div>

                <span class="directory-card-type">
                    ${typeLabel}
                </span>

            </div>

            <div class="directory-card-content">

                <span class="directory-card-category">
                    ${category}
                </span>

                <h3>${name}</h3>

                <p>${description}</p>

            </div>

            <div class="directory-card-bottom">
                <span>Explore</span>
                <i data-lucide="arrow-up-right"></i>
            </div>

        </a>
    `;
}


/* ---------------------------------------------------------
   5. RENDER DIRECTORY
--------------------------------------------------------- */

function renderDirectory(items = JAIHO_DIRECTORY) {

    const grid = document.querySelector(CONFIG.gridSelector);

    if (!grid) return;

    if (!items.length) {
        grid.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search-x"></i>
                <h3>Nothing found</h3>
                <p>${escapeHTML(CONFIG.emptyMessage)}</p>
            </div>
        `;

        refreshIcons();
        return;
    }

    grid.innerHTML = items.map(createDirectoryCard).join("");

    refreshIcons();
}


/* ---------------------------------------------------------
   6. SEARCH AND FILTER
--------------------------------------------------------- */

function initializeDirectoryControls() {

    const searchInput = document.querySelector(CONFIG.searchSelector);
    const filterButtons = document.querySelectorAll(CONFIG.filterSelector);

    let activeFilter = "all";

    function applyFilters() {

        const searchTerm = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const filteredItems = JAIHO_DIRECTORY.filter(item => {

            const matchesFilter =
                activeFilter === "all" ||
                item.type === activeFilter;

            const searchableText = [
                item.name,
                item.description,
                item.category,
                item.type
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(searchTerm);

            return matchesFilter && matchesSearch;
        });

        renderDirectory(filteredItems);
    }


    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeFilter = button.dataset.filter || "all";

            filterButtons.forEach(filterButton => {
                filterButton.classList.toggle(
                    "active",
                    filterButton === button
                );

                filterButton.setAttribute(
                    "aria-pressed",
                    filterButton === button ? "true" : "false"
                );
            });

            applyFilters();
        });

    });

    applyFilters();
}


/* ---------------------------------------------------------
   7. SITE INFORMATION
--------------------------------------------------------- */

function initializeSiteInformation() {

    const siteName = "Jaiho Links";
    const developer = "Jaiho TechServe";

    document.querySelectorAll("[data-site-name]").forEach(element => {
        element.textContent = siteName;
    });

    document.querySelectorAll("[data-site-developer]").forEach(element => {
        element.textContent = developer;
    });

}


/* ---------------------------------------------------------
   8. INITIALIZATION
--------------------------------------------------------- */

function initializeJaihoLinks() {

    initializeSiteInformation();

    const directoryGrid = document.querySelector(CONFIG.gridSelector);

    if (directoryGrid) {
        initializeDirectoryControls();
    }

    refreshIcons();

}


/* ---------------------------------------------------------
   9. START APPLICATION
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", initializeJaihoLinks);


/* ---------------------------------------------------------
   10. OPTIONAL GLOBAL ACCESS

   Useful when maintaining the directory.
--------------------------------------------------------- */

window.JaihoLinks = {
    directory: JAIHO_DIRECTORY,
    getItem: getDirectoryItem,
    render: renderDirectory
};
