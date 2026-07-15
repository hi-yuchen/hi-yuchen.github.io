(() => {
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-language]"));

  const applyLanguage = (language) => {
    const next = language === "zh" ? "zh" : "en";
    root.dataset.lang = next;
    root.lang = next === "zh" ? "zh-CN" : "en";
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === next));
    });
    try {
      localStorage.setItem("yu-chen-language", next);
    } catch (_) {}
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  applyLanguage(root.dataset.lang);
})();
