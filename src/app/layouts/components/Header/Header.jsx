import * as bootstrap from "bootstrap";

function closeOffcanvasIfAny() {
  const el = document.getElementById("mobileMenu");
  if (!el) return;
  const instance = bootstrap.Offcanvas.getInstance(el);
  if (instance) instance.hide();
}
