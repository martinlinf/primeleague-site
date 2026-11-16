/* ============================================================
   SITE CONFIG — change the contact email here only
   ------------------------------------------------------------
   After you register a domain, replace primeleague.net with that
   domain. Example, if the site is primeleague.com:

     var SITE_EMAIL = "info@primeleague.com";

   This is the only value you need to edit for the email.
   Every page reads it automatically. If JavaScript is off,
   the same placeholder (info@primeleague.net) still appears in
   the HTML as a fallback.
   ============================================================ */
var SITE_EMAIL = "info@primeleague.net";

document.addEventListener("DOMContentLoaded", function () {
  var email = SITE_EMAIL || "info@primeleague.net";
  var nodes = document.querySelectorAll("[data-email]");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    el.textContent = email;
    if (el.tagName === "A") {
      el.setAttribute("href", "mailto:" + email);
    }
  }
});
