// original from: https://tawara-memo.hatenablog.com/entry/2024/10/20/135716

(function () {
  "use strict";

  function stopEvent(e) {
    // Ctrl-Tab
    if (e.key == "Tab" && e.ctrlKey) {
      e.stopImmediatePropagation();
    }
  }

  window.addEventListener("keydown", stopEvent, true);

  document.querySelectorAll("textarea, input").forEach(function (e) {
    e.addEventListener("keydown", stopEvent, true);
  });
})();
