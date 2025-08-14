const l = () => {
  if (typeof growiFacade > "u" || growiFacade.markdownRenderer == null)
    return;
  const a = () => {
    const t = document.querySelectorAll("input[name]"), c = {};
    t.forEach((e) => {
      c[e.name] = e.value;
    }), document.querySelectorAll("[data-replace]").forEach((e) => {
      let n = e.dataset.template || "";
      Object.entries(c).forEach(([o, r]) => {
        n = n.replace(new RegExp(`{{replace\\(${o}\\)}}`, "g"), r);
      }), e.textContent = n;
    });
  };
  document.querySelectorAll("input[name]").forEach((t) => {
    t.addEventListener("input", a);
  }), a();
}, i = () => {
};
window.pluginActivators == null && (window.pluginActivators = {});
window.pluginActivators["growi-plugin-input-replace"] = {
  activate: l,
  deactivate: i
};
