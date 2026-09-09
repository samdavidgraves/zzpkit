/**
 * Soft access gate for Zzpkit product kit.
 * Buyers receive the toegangscode after payment (see SALES_PACK.md).
 * Marketing index.html stays public.
 */
(function () {
  var STORAGE_KEY = "zzpkit_ok";
  var ACCESS_CODE = "WERKLIJN29";

  function hasAccess() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function grantAccess() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      /* private mode — still reveal this session */
    }
  }

  function revealApp() {
    document.body.classList.remove("is-gated");
    var gate = document.getElementById("zzpkit-gate");
    if (gate) gate.remove();
  }

  function showGate() {
    document.body.classList.add("is-gated");

    var overlay = document.createElement("div");
    overlay.id = "zzpkit-gate";
    overlay.className = "gate";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "gate-title");

    overlay.innerHTML =
      '<div class="gate-card">' +
      '  <p class="gate-eyebrow">ZZP AI Starterkit</p>' +
      '  <h1 id="gate-title" class="gate-title">Toegang tot Zzpkit</h1>' +
      '  <p class="gate-lead">Voer de toegangscode in die je na betaling hebt ontvangen.</p>' +
      '  <form class="gate-form" id="gate-form" novalidate>' +
      '    <label class="gate-label" for="gate-code">Toegangscode</label>' +
      '    <input class="gate-input" type="text" id="gate-code" name="code" ' +
      '      autocomplete="off" autocapitalize="characters" spellcheck="false" ' +
      '      placeholder="Jouw code" required />' +
      '    <p class="gate-error" id="gate-error" role="alert" hidden>Onjuiste code. Check je aankoopmail.</p>' +
      '    <button type="submit" class="btn btn-primary gate-submit">Open kit</button>' +
      "  </form>" +
      '  <p class="gate-hint">Nog geen code? <a href="index.html">Terug naar de marketingpagina</a></p>' +
      "</div>";

    document.body.appendChild(overlay);

    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-code");
    var error = document.getElementById("gate-error");

    if (input) {
      setTimeout(function () {
        input.focus();
      }, 50);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var raw = (input.value || "").trim().toUpperCase();
      if (raw === ACCESS_CODE) {
        grantAccess();
        revealApp();
      } else {
        error.hidden = false;
        input.setAttribute("aria-invalid", "true");
        input.select();
      }
    });

    input.addEventListener("input", function () {
      error.hidden = true;
      input.removeAttribute("aria-invalid");
    });
  }

  if (hasAccess()) {
    document.body.classList.remove("is-gated");
  } else {
    if (document.body) {
      showGate();
    } else {
      document.addEventListener("DOMContentLoaded", showGate);
    }
  }
})();
