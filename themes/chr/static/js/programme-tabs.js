(() => {
  const tablist = document.querySelector("[data-programme-tabs]");

  if (!tablist) {
    return;
  }

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs
    .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
    .filter(Boolean);

  panels.forEach((panel) => {
    const table = panel.querySelector("table");

    if (table && !table.parentElement.classList.contains("programme-table-scroll")) {
      const wrapper = document.createElement("div");
      wrapper.className = "programme-table-scroll";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("aria-label", `${panel.getAttribute("aria-labelledby").replace("tab-", "")} programme table`);
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  const activateTab = (tab, { focus = false, updateHash = false } = {}) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== tab.getAttribute("aria-controls");
    });

    if (updateHash) {
      window.history.pushState(null, "", `#${tab.getAttribute("aria-controls")}`);
    }

    if (focus) {
      tab.focus();
    }
  };

  const tabForHash = () => {
    const id = window.location.hash.slice(1);
    return tabs.find((tab) => tab.getAttribute("aria-controls") === id);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(tab, { updateHash: true });
    });

    tab.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(tabs[nextIndex], { focus: true, updateHash: true });
    });
  });

  window.addEventListener("hashchange", () => {
    const tab = tabForHash();
    if (tab) {
      activateTab(tab);
    }
  });

  tablist.classList.add("is-ready");
  activateTab(tabForHash() || tabs[0]);
})();
