document.addEventListener("DOMContentLoaded", () => {
  // Fullscreen SELECTED navigation.
  const menu = document.getElementById("selectedMenu");
  const toggler = document.querySelector(".navbar-toggler");
  const closeButton = document.querySelector(".selected-close");

  if (menu && toggler) {
    const openMenu = () => {
      menu.classList.add("show");
      toggler.setAttribute("aria-expanded", "true");
      toggler.setAttribute("aria-label", "Close navigation menu");
      document.body.classList.add("menu-is-open");
      closeButton?.focus();
    };

    const closeMenu = (returnFocus = true) => {
      menu.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
      toggler.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-is-open");
      if (returnFocus) toggler.focus();
    };

    toggler.addEventListener("click", () => {
      menu.classList.contains("show") ? closeMenu(false) : openMenu();
    });

    closeButton?.addEventListener("click", () => closeMenu());

    menu.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", () => closeMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("show")) closeMenu();
    });

    menu.addEventListener("click", (event) => {
      if (event.target === menu) closeMenu();
    });
  }

  // Reusable category filters for Sessions and Journal.
  const filterTargets = {
    sessions: {
      selector: ".session-tile",
      empty: ".sessions-grid-empty"
    },
    journal: {
      selector: ".journal-card",
      empty: ".journal-grid-empty"
    }
  };

  document.querySelectorAll("[data-filter-group]").forEach((filterGroup) => {
    const groupName = filterGroup.dataset.filterGroup;
    const config = filterTargets[groupName];
    if (!config) return;

    const buttons = filterGroup.querySelectorAll(".filter-button[data-filter]");
    const cards = document.querySelectorAll(config.selector);
    const emptyMessage = document.querySelector(config.empty);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.filter;

        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        let visibleCount = 0;
        cards.forEach((card) => {
          const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
          const visible = selected === "all" || categories.includes(selected);
          card.classList.toggle("is-filtered-out", !visible);
          if (visible) visibleCount += 1;
        });

        if (emptyMessage) emptyMessage.hidden = visibleCount > 0;
      });
    });
  });

  // Open a session's native details panel when a card links to its hash.
  const openSessionFromHash = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
  };
  openSessionFromHash();
  window.addEventListener("hashchange", openSessionFromHash);

  // AOS scroll reveals.
  if (window.AOS) {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
  }
});
