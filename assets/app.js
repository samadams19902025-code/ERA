/* ============================================================
   ERA — interactions: i18n (DE/EN), nav, lightbox, reservation
   Vanilla JS, no dependencies.
   ============================================================ */

/* ---- TODO: verify & insert real contact data --------------- */
const PHONE_DISPLAY = "0177 9666081";
const PHONE_TEL     = "+491779666081";
const WHATSAPP      = "491779666081";
const MAPS_DIR      = "https://www.google.com/maps/dir/?api=1&destination=Era+Restaurant+Karl-Liebknecht-Stra%C3%9Fe+53+04107+Leipzig";
const LIEFERANDO    = "https://www.lieferando.de/speisekarte/era-restaurant";
const WOLT          = "https://wolt.com/de/deu/leipzig";   /* TODO verify exact Era Wolt link */
const INSTAGRAM     = "https://instagram.com/era_ristorante_pizzeria_le";
const MENU_URL      = "https://era-restaurant-leipzig.de/speisekarte"; /* existing menu page */

/* ============================================================
   i18n dictionary
   ============================================================ */
const I18N = {
  de:{
    "bar.text":"🍷 Tisch reservieren & ein Schnäpschen aufs Haus beim ersten Besuch",
    "bar.cta":"Reservieren",
    "bar.close":"Schließen",
    "nav.kueche":"Küche","nav.menu":"Speisekarte","nav.about":"Über uns",
    "nav.reviews":"Bewertungen","nav.visit":"Besuch",
    "cta.reserve":"Tisch reservieren","cta.menu":"Speisekarte","cta.call":"Anrufen",
    "cta.route":"Route","cta.reserveShort":"Reservieren","cta.fullmenu":"Vollständige Speisekarte",
    "rating":"4,4 bei Google",
    "hero.eyebrow":"Ristorante & Pizzeria · Leipzig",
    "hero.title":'Ein Stück Italien.<br>Mitten auf der <span class="gold">Karli</span>.',
    "hero.sub":"Hausgemachte Pasta, Steinofenpizza & italienische Weine — im Herzen von Leipzig.",
    "scroll":"Entdecken",
    "promo.eyebrow":"Aktion","promo.title":"Reservieren &amp; genießen",
    "promo.text":"Sichern Sie sich Ihren Tisch auf der Karli — und lassen Sie sich von unserer Küche verwöhnen. Ein Schnäpschen aufs Haus inklusive.",
    "promo.cta":"Jetzt Tisch sichern","promo.dismiss":"Vielleicht später","promo.badge":"Nur für kurze Zeit",
    "strip.badge":"Aktion","strip.title":"Reservieren &amp; genießen — Schnäpschen aufs Haus",
    "strip.text":"Nur für kurze Zeit. Sichern Sie sich Ihren Tisch, bevor die Aktion endet.",
    "strip.cta":"Jetzt sichern",
    "urg.hero":"Nur für kurze Zeit · Aktion läuft","urg.reserve":"Aktion endet bald — jetzt sichern",

    "cucina.eyebrow":"La Cucina","cucina.title":"Was Era ausmacht",
    "cucina.lead":"Echte italienische Küche, ohne Schnörkel — frisch zubereitet, ehrlich serviert, mit der Gastfreundschaft eines Hauses, das seinen Gast beim zweiten Besuch beim Namen kennt.",
    "p1.h":"Hausgemachte Pasta","p1.p":"Frisch zubereitet, al dente, mit Liebe — so wie in Italien.",
    "p2.h":"Steinofenpizza","p2.p":"Knuspriger Teig, reichhaltig belegt, aus unserem Steinofen.",
    "p3.h":"Italienische Weine","p3.p":"Handverlesen, von Prosecco D.O.C. bis Barolo — für jeden Gang das richtige Glas.",

    "hl.eyebrow":"Unsere Highlights","hl.title":"Vom Antipasto bis zum Dolce",
    "d1.t":"Antipasti","d1.h":"Bruschetta al Pomodoro","d1.p":"Frisch, gut gewürzt, hübsch angerichtet — der Auftakt eines guten Abends.",
    "d2.t":"Dalla Griglia","d2.h":"Rinderfilet vom Grill","d2.p":"Ca. 250 g, vom Grill — für den besonderen Abend.",
    "d3.t":"Pizza","d3.h":"Steinofenpizza","d3.p":"Knuspriger Rand, dünner Boden, perfekt belegt.",
    "d4.t":"Pizza Speciale","d4.h":"Prosciutto & Grana","d4.p":"Rucola, Kirschtomaten, Rohschinken & gehobelter Grana.",
    "d5.t":"Dolci · ★★★★★","d5.h":"Tiramisu","d5.p":"Das beste Tiramisu in Leipzig. Sagen nicht wir — sagen unsere Gäste.",
    "d6.t":"Pizzeria","d6.h":"Quattro Stagioni","d6.p":"Vier Jahreszeiten auf einer Pizza — der Klassiker.",
    "hl.note":"Preise & vollständige Auswahl auf unserer Speisekarte.",

    "about.eyebrow":"Über Era","about.title":"Neu hier — und schon ein Stammlokal",
    "about.p1":"Im Era bringen wir authentische italienische Küche mitten ins Herz von Leipzig. Direkt auf der Karli, zwischen Bars und Theatern, ist Era ein Ort zum Genießen und Verweilen.",
    "about.p2":"Ob ein schneller Lunch mit Kollegen, ein Dinner zu zweit oder ein langer Abend mit Freunden und einer Flasche Wein — bei uns finden Sie den richtigen Rahmen. Und vielleicht auch ein Schnäpschen aufs Haus.",
    "about.q":"„Zum Geburtstag gab es sogar eine Flasche Wein aufs Haus.“","about.qby":"— aus einer Gästebewertung",

    "rev.eyebrow":"Bewertungen","rev.title":"Was unsere Gäste sagen",
    "rev.lead":"Echte Stimmen unserer Gäste auf Google.",

    "gal.eyebrow":"Unser Restaurant","gal.title":"Mediterranes Flair auf der Karli",
    "gal.lead":"Warmes Licht, gedeckte Tische, eine gut sortierte Bar — und im Sommer der Freisitz mitten im Leben der Karl-Liebknecht-Straße.",

    "visit.eyebrow":"Besuch uns","visit.title":"Wir freuen uns auf Sie",
    "visit.addr":"Adresse","visit.hours":"Öffnungszeiten","visit.phone":"Telefon","visit.find":"So finden Sie uns",
    "h.days":"Dienstag – Sonntag","h.open":"16:00 – 23:00","h.closedday":"Montag","h.closed":"Geschlossen",
    "visit.note":"Reservierung empfohlen · Lieferung über Lieferando & Wolt · Direkt auf der Karli.",

    "res.eyebrow":"Reservierung","res.title":"Reservieren Sie Ihren Tisch",
    "res.lead":"Rufen Sie uns an, schreiben Sie über WhatsApp — oder senden Sie uns gleich hier Ihre Anfrage.",
    "f.name":"Name","f.guests":"Personen","f.date":"Datum","f.time":"Uhrzeit","f.phone":"Telefon",
    "f.note":"Anmerkung (optional)","f.note.ph":"Allergien, Anlass, Sitzwunsch …",
    "f.submit":"Anfrage senden","f.guests.ph":"Anzahl wählen",
    "f.err.name":"Bitte geben Sie Ihren Namen an.","f.err.date":"Bitte wählen Sie ein Datum.",
    "f.err.time":"Bitte wählen Sie eine Uhrzeit.","f.err.guests":"Bitte wählen Sie die Personenzahl.",
    "res.ok.h":"Grazie!","res.ok.p":"Wir haben Ihre Anfrage erhalten und melden uns zur Bestätigung. Möchten Sie es sofort verbindlich machen?",
    "res.ok.wa":"Per WhatsApp senden","res.ok.call":"Lieber anrufen",
    "res.formnote":"Diese Anfrage ist unverbindlich, bis wir sie bestätigt haben.",

    "foot.tag":"Authentische italienische Küche auf der Karl-Liebknecht-Straße in Leipzig.",
    "foot.visit":"Besuch","foot.order":"Bestellen & Folgen","foot.legal":"Rechtliches",
    "foot.deliv1":"Lieferung über Lieferando","foot.deliv2":"Lieferung über Wolt",
    "foot.imprint":"Impressum","foot.privacy":"Datenschutz",
    "foot.rights":"Era · Ristorante & Pizzeria · Leipzig"
  },
  en:{
    "bar.text":"🍷 Reserve a table & enjoy a drink on the house on your first visit",
    "bar.cta":"Reserve",
    "bar.close":"Close",
    "nav.kueche":"Kitchen","nav.menu":"Menu","nav.about":"About",
    "nav.reviews":"Reviews","nav.visit":"Visit",
    "cta.reserve":"Reserve a Table","cta.menu":"See the Menu","cta.call":"Call",
    "cta.route":"Route","cta.reserveShort":"Reserve","cta.fullmenu":"Full Menu",
    "rating":"4.4 on Google",
    "hero.eyebrow":"Ristorante & Pizzeria · Leipzig",
    "hero.title":'A piece of Italy.<br>Right on the <span class="gold">Karli</span>.',
    "hero.sub":"Homemade pasta, stone-oven pizza & Italian wines — in the heart of Leipzig.",
    "scroll":"Discover",
    "promo.eyebrow":"Offer","promo.title":"Reserve &amp; enjoy",
    "promo.text":"Secure your table on the Karli — and let our kitchen spoil you. A little shot on the house included.",
    "promo.cta":"Reserve your table","promo.dismiss":"Maybe later","promo.badge":"Limited time",
    "strip.badge":"Offer","strip.title":"Reserve &amp; enjoy — a shot on the house",
    "strip.text":"Limited time only. Secure your table before the offer ends.",
    "strip.cta":"Claim it now",
    "urg.hero":"Limited time · Offer running","urg.reserve":"Offer ends soon — claim it now",

    "cucina.eyebrow":"La Cucina","cucina.title":"What makes Era different",
    "cucina.lead":"Real Italian cooking, no frills — freshly made, honestly served, with the hospitality of a place that knows your name by your second visit.",
    "p1.h":"Homemade Pasta","p1.p":"Freshly made, al dente, with love — just like in Italy.",
    "p2.h":"Stone-Oven Pizza","p2.p":"Crispy dough, generously topped, straight from our stone oven.",
    "p3.h":"Italian Wines","p3.p":"Hand-picked, from Prosecco D.O.C. to Barolo — the right glass for every course.",

    "hl.eyebrow":"Our Highlights","hl.title":"From antipasto to dolce",
    "d1.t":"Antipasti","d1.h":"Bruschetta al Pomodoro","d1.p":"Fresh, well-seasoned, beautifully plated — the start of a good evening.",
    "d2.t":"From the Grill","d2.h":"Grilled Beef Fillet","d2.p":"Approx. 250 g, from the grill — for that special evening.",
    "d3.t":"Pizza","d3.h":"Stone-Oven Pizza","d3.p":"Crispy crust, thin base, perfectly topped.",
    "d4.t":"Pizza Speciale","d4.h":"Prosciutto & Grana","d4.p":"Rocket, cherry tomatoes, cured ham & shaved Grana.",
    "d5.t":"Dolci · ★★★★★","d5.h":"Tiramisu","d5.p":"The best Tiramisu in Leipzig. Don't take our word — take our guests'.",
    "d6.t":"Pizzeria","d6.h":"Quattro Stagioni","d6.p":"Four seasons on one pizza — the classic.",
    "hl.note":"Prices & full selection on our menu.",

    "about.eyebrow":"About Era","about.title":"New here — already a regular's place",
    "about.p1":"At Era we bring authentic Italian cuisine to the heart of Leipzig. Right on the Karli, between bars and theaters, Era is a place to enjoy and linger.",
    "about.p2":"Whether it's a quick lunch with colleagues, a dinner for two, or a long evening with friends and a bottle of wine — you'll find the right setting here. And maybe a little shot on the house.",
    "about.q":"\u201CFor my birthday they even brought a bottle of wine on the house.\u201D","about.qby":"— from a guest review",

    "rev.eyebrow":"Reviews","rev.title":"What our guests say",
    "rev.lead":"Real voices from our guests on Google.",

    "gal.eyebrow":"Our Space","gal.title":"Mediterranean flair on the Karli",
    "gal.lead":"Warm light, set tables, a well-stocked bar — and in summer the Freisitz right in the middle of Karl-Liebknecht-Straße life.",

    "visit.eyebrow":"Visit Us","visit.title":"We look forward to seeing you",
    "visit.addr":"Address","visit.hours":"Opening Hours","visit.phone":"Phone","visit.find":"How to find us",
    "h.days":"Tuesday – Sunday","h.open":"16:00 – 23:00","h.closedday":"Monday","h.closed":"Closed",
    "visit.note":"Reservations recommended · Delivery via Lieferando & Wolt · Right on the Karli.",

    "res.eyebrow":"Reservation","res.title":"Reserve your table",
    "res.lead":"Call us, message us on WhatsApp — or send your request right here.",
    "f.name":"Name","f.guests":"Guests","f.date":"Date","f.time":"Time","f.phone":"Phone",
    "f.note":"Note (optional)","f.note.ph":"Allergies, occasion, seating preference …",
    "f.submit":"Send Request","f.guests.ph":"Select number",
    "f.err.name":"Please enter your name.","f.err.date":"Please choose a date.",
    "f.err.time":"Please choose a time.","f.err.guests":"Please choose the number of guests.",
    "res.ok.h":"Grazie!","res.ok.p":"We've received your request and will be in touch to confirm. Want to make it final right away?",
    "res.ok.wa":"Send via WhatsApp","res.ok.call":"Rather call",
    "res.formnote":"This request is non-binding until we've confirmed it.",

    "foot.tag":"Authentic Italian cuisine on Karl-Liebknecht-Straße in Leipzig.",
    "foot.visit":"Visit","foot.order":"Order & Follow","foot.legal":"Legal",
    "foot.deliv1":"Order via Lieferando","foot.deliv2":"Order via Wolt",
    "foot.imprint":"Imprint","foot.privacy":"Privacy",
    "foot.rights":"Era · Ristorante & Pizzeria · Leipzig"
  }
};

let LANG = localStorage.getItem("era_lang") || "de";

function applyLang(lang){
  LANG = lang;
  localStorage.setItem("era_lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v = dict[el.getAttribute("data-i18n")];
    if(v!=null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const v = dict[el.getAttribute("data-i18n-ph")];
    if(v!=null) el.setAttribute("placeholder", v);
  });
  document.querySelectorAll("[data-i18n-al]").forEach(el=>{
    const v = dict[el.getAttribute("data-i18n-al")];
    if(v!=null) el.setAttribute("aria-label", v);
  });
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", ()=>{
  initPromoBar();
  applyLang(LANG);

  /* Language toggle */
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.addEventListener("click", ()=>applyLang(b.dataset.lang));
  });

  /* Sticky header state */
  const header = document.querySelector(".header");
  const onScroll = ()=> header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  /* Hamburger / mobile menu */
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  const toggleMenu = (open)=>{
    burger.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", ()=>toggleMenu(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>toggleMenu(false)));

  /* Reveal on scroll */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  initLightbox();
  initForm();
  initPromo();
});

/* ============================================================
   Promo modal (funnel) — appears shortly after load, once per visit
   ============================================================ */
function initPromo(){
  const promo = document.getElementById("promo");
  if(!promo) return;
  const open = ()=>{ promo.classList.add("open"); };
  const close = ()=>{ promo.classList.remove("open"); sessionStorage.setItem("era_promo_seen","1"); };

  if(!sessionStorage.getItem("era_promo_seen")){
    setTimeout(open, 4500);
  }
  document.getElementById("promoClose").addEventListener("click", close);
  document.getElementById("promoDismiss").addEventListener("click", close);
  document.getElementById("promoCta").addEventListener("click", close);
  promo.addEventListener("click", e=>{ if(e.target===promo) close(); });
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && promo.classList.contains("open")) close(); });
}

/* ============================================================
   Lightbox gallery
   ============================================================ */
function initLightbox(){
  const imgs = [...document.querySelectorAll(".gphoto img")];
  if(!imgs.length) return;
  const overlay = document.createElement("div");
  overlay.className = "lb";
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Close">&times;</button>
    <button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>
    <img class="lb-img" alt="">
    <button class="lb-nav lb-next" aria-label="Next">&#8250;</button>`;
  document.body.appendChild(overlay);
  const style = document.createElement("style");
  style.textContent = `
    .lb{position:fixed;inset:0;z-index:200;background:rgba(18,22,16,.94);display:none;
      align-items:center;justify-content:center;backdrop-filter:blur(6px);}
    .lb.open{display:flex;}
    .lb-img{max-width:90vw;max-height:86vh;border-radius:8px;box-shadow:0 30px 80px -20px #000;}
    .lb-close{position:absolute;top:18px;right:24px;color:#fff;font-size:2.4rem;line-height:1;opacity:.8;}
    .lb-close:hover{opacity:1;}
    .lb-nav{position:absolute;top:50%;transform:translateY(-50%);color:#fff;font-size:3rem;
      width:64px;height:64px;opacity:.7;}
    .lb-nav:hover{opacity:1;}
    .lb-prev{left:1.2rem;} .lb-next{right:1.2rem;}
    @media(max-width:680px){.lb-nav{font-size:2.2rem;width:48px;}}`;
  document.head.appendChild(style);

  const lbImg = overlay.querySelector(".lb-img");
  let idx = 0;
  const show = i=>{ idx=(i+imgs.length)%imgs.length; lbImg.src = imgs[idx].src; };
  const open = i=>{ show(i); overlay.classList.add("open"); document.body.style.overflow="hidden"; };
  const close = ()=>{ overlay.classList.remove("open"); document.body.style.overflow=""; };
  imgs.forEach((im,i)=>im.parentElement.addEventListener("click", ()=>open(i)));
  overlay.querySelector(".lb-close").addEventListener("click", close);
  overlay.querySelector(".lb-prev").addEventListener("click", e=>{e.stopPropagation();show(idx-1);});
  overlay.querySelector(".lb-next").addEventListener("click", e=>{e.stopPropagation();show(idx+1);});
  overlay.addEventListener("click", e=>{ if(e.target===overlay) close(); });
  document.addEventListener("keydown", e=>{
    if(!overlay.classList.contains("open")) return;
    if(e.key==="Escape") close();
    if(e.key==="ArrowLeft") show(idx-1);
    if(e.key==="ArrowRight") show(idx+1);
  });
}

/* ============================================================
   Reservation form
   ============================================================ */
function initForm(){
  const form = document.getElementById("res-form");
  if(!form) return;

  /* date min = today */
  const dateEl = form.querySelector('[name="date"]');
  const today = new Date().toISOString().split("T")[0];
  dateEl.min = today;

  const fields = ["name","date","time","guests"];
  form.addEventListener("submit", e=>{
    e.preventDefault();
    let ok = true;
    fields.forEach(n=>{
      const el = form.querySelector(`[name="${n}"]`);
      const wrap = el.closest(".field");
      const valid = el.value.trim() !== "";
      wrap.classList.toggle("invalid", !valid);
      if(!valid) ok = false;
    });
    if(!ok){ form.querySelector(".field.invalid input,.field.invalid select")?.focus(); return; }

    const d = {
      name: form.name.value.trim(),
      date: form.date.value,
      time: form.time.value,
      guests: form.guests.value,
      phone: form.phone.value.trim(),
      note: form.note.value.trim()
    };
    const dict = I18N[LANG];
    const intro = LANG==="de"
      ? "Hallo, ich möchte gerne einen Tisch reservieren."
      : "Hello, I'd like to reserve a table.";
    const lines = [
      intro,"",
      `${dict["f.name"]}: ${d.name}`,
      `${dict["f.date"]}: ${d.date}`,
      `${dict["f.time"]}: ${d.time}`,
      `${dict["f.guests"]}: ${d.guests}`,
      d.phone ? `${dict["f.phone"]}: ${d.phone}` : null,
      d.note ? `${dict["f.note"].replace(/\s*\(.*\)/,"")}: ${d.note}` : null
    ].filter(Boolean);
    const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;

    form.innerHTML = `
      <div class="res-success">
        <div class="check">✓</div>
        <h3>${dict["res.ok.h"]}</h3>
        <p>${dict["res.ok.p"]}</p>
        <div style="display:flex;flex-direction:column;gap:.7rem;margin-top:1.5rem;">
          <a class="btn btn-primary" style="justify-content:center" target="_blank" rel="noopener noreferrer" href="${waLink}">${dict["res.ok.wa"]}</a>
          <a class="btn btn-ghost" style="justify-content:center" href="tel:${PHONE_TEL}">${dict["res.ok.call"]} · ${PHONE_DISPLAY}</a>
        </div>
      </div>`;
  });
}


/* ---------- Promo top bar ---------- */
function initPromoBar(){
  if(localStorage.getItem("era_promobar")==="closed"){ document.body.classList.add("pb-hidden"); document.documentElement.style.setProperty("--bar-h","0px"); return; }
  const bar=document.createElement("div"); bar.id="promobar";
  bar.innerHTML='<span class="pb-txt" data-i18n="bar.text"></span>'
    +'<a class="pb-cta" href="index.html#reserve" data-i18n="bar.cta"></a>'
    +'<button class="pb-close" aria-label="Close" data-i18n-al="bar.close">&times;</button>';
  document.body.prepend(bar);
  const setH=()=>document.documentElement.style.setProperty("--bar-h", bar.offsetHeight+"px");
  setH(); window.addEventListener("resize", setH, {passive:true});
  bar.querySelector(".pb-close").addEventListener("click", ()=>{
    document.body.classList.add("pb-hidden");
    document.documentElement.style.setProperty("--bar-h","0px");
    localStorage.setItem("era_promobar","closed");
  });
}
