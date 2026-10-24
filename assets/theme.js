// Tema do site: escuro por padrão, claro se a pessoa escolher. A escolha vale para todas as
// páginas (fica no localStorage) e é aplicada antes da página aparecer, para não piscar.
// Páginas que desenham com as cores do tema escutam o evento "temachange" e redesenham.
(() => {
  const KEY = "ferramentas.tema";
  const root = document.documentElement;
  const read = () => {
    try { return localStorage.getItem(KEY) === "light" ? "light" : "dark"; } catch (_) { return "dark"; }
  };
  const apply = (tema) => {
    if (root.dataset.theme === tema) return;
    root.dataset.theme = tema;
    dispatchEvent(new CustomEvent("temachange", { detail: tema }));
  };
  root.dataset.theme = read();

  // Outra aba ou uma miniatura da página inicial trocou o tema
  addEventListener("storage", (e) => { if (e.key === KEY) apply(read()); });

  addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("tema");
    if (!btn) return;
    const label = () => {
      const escuro = root.dataset.theme === "dark";
      btn.textContent = escuro ? "☀ Claro" : "☾ Escuro";
      btn.setAttribute("aria-label", escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro");
    };
    label();
    btn.addEventListener("click", () => {
      const tema = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem(KEY, tema); } catch (_) {}
      apply(tema);
    });
    addEventListener("temachange", label);
  });
})();
