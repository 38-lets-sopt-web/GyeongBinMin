export function bindHeaderRefresh() {
  const btn = document.querySelector(".header-button");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.location.reload();
  });
}

