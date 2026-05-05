(() => {
  const STRINGS = {
    en: {
      "nav.story": "Story",
      "nav.menu": "Menu",
      "nav.reviews": "Reviews",
      "nav.visit": "Visit",
      "nav.contact": "Contact",
      "hero.eyebrow": "Doi Saket · Chiang Mai",
      "hero.title": "Hand-roasted, every morning.",
      "hero.sub": "Single-origin beans from our family farm on Doi Pa Miang Mae Sai — roasted by hand at the Phra That Doi Saket junction, brewed with care.",
      "hero.call": "Call now",
      "hero.directions": "Get directions",
      "story.eyebrow": "Our story",
      "story.title": "From the mountain to your cup.",
      "story.p1": "Chalermsri began as a small intention on Doi Pa Miang Mae Sai — a family coffee farm tended slowly, season after season, from cherry to roast.",
      "story.p2": "Today we hand-roast organic beans freshly in the shop, right beside Phra That Doi Saket. You’ll often see them drying in the sun by the door. Choose a blend to suit your taste, or take a bag home.",
      "story.fact1.k": "Roasted",
      "story.fact1.v": "In-house, in small batches",
      "story.fact2.k": "Origin",
      "story.fact2.v": "Doi Pa Miang Mae Sai",
      "story.fact3.k": "Family-run",
      "story.fact3.v": "Since 2017",
      "menu.eyebrow": "Menu",
      "menu.title": "A short, considered list.",
      "menu.note": "Indicative prices from in-shop reviews. Full menu coming soon.",
      "menu.hot.t": "Hot coffee",
      "menu.hot.1": "Espresso · Americano · Latte",
      "menu.iced.t": "Iced coffee",
      "menu.iced.1": "Iced black · Iced latte · Signature",
      "menu.beans.t": "Whole bean & bites",
      "menu.beans.1": "Curated single-origin beans",
      "menu.beans.from": "from ฿50",
      "menu.beans.2": "Toast & light bites",
      "menu.beans.askshop": "In shop",
      "menu.beans.3": "Bulk / wholesale",
      "menu.beans.ask": "Ask",
      "reviews.eyebrow": "What guests say",
      "reviews.title": "100% recommend on Google",
      "reviews.r1.q": "“Come here, enjoy the relaxing atmosphere and absolutely fantastic coffee. This is not propaganda, this is the truth. You will love.”",
      "reviews.r2.q": "“Relaxing atmosphere.”",
      "reviews.more": "Read all reviews on Google",
      "visit.eyebrow": "Visit",
      "visit.title": "At the Phra That Doi Saket junction.",
      "visit.address.k": "Address",
      "visit.address.v": "1007 Choeng Doi, Doi Saket, Chiang Mai 50220",
      "visit.landmark.k": "Landmark",
      "visit.landmark.v": "Three-way junction in front of Wat Phra That Doi Saket",
      "visit.hours.k": "Hours",
      "visit.hours.v": "From 08:00 — closing time varies, please call ahead.",
      "visit.phone.k": "Phone",
      "visit.parking.k": "Parking",
      "visit.parking.v": "Limited — a couple of spots out front.",
      "visit.directions": "Open in Google Maps",
      "contact.eyebrow": "Contact",
      "contact.title": "Bulk orders, shipping & wholesale.",
      "contact.p1": "Want beans shipped, or buying for a café or office? Send us a note and we’ll get back to you within a day or two.",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.fb": "Facebook",
      "contact.yt": "YouTube",
      "form.name": "Your name",
      "form.email": "Email",
      "form.kind": "I’m asking about",
      "form.kind.shipping": "Shipping beans",
      "form.kind.bulk": "Bulk / wholesale",
      "form.kind.visit": "Visiting the shop",
      "form.kind.other": "Something else",
      "form.message": "Message",
      "form.submit": "Send",
      "form.note": "This opens your email app with the message ready to send."
    },
    th: {
      "nav.story": "เรื่องราว",
      "nav.menu": "เมนู",
      "nav.reviews": "รีวิว",
      "nav.visit": "เยี่ยมชม",
      "nav.contact": "ติดต่อ",
      "hero.eyebrow": "ดอยสะเก็ด · เชียงใหม่",
      "hero.title": "คั่วสดทุกเช้า ด้วยมือของเรา",
      "hero.sub": "เมล็ดกาแฟจากไร่ของครอบครัวบนดอยป่าเมี่ยงแม่สาย คั่วเองที่ร้าน ตรงสามแยกพระธาตุดอยสะเก็ด ชงด้วยใจ",
      "hero.call": "โทรเลย",
      "hero.directions": "ดูเส้นทาง",
      "story.eyebrow": "เรื่องราวของเรา",
      "story.title": "จากดอย สู่ถ้วยกาแฟของคุณ",
      "story.p1": "ร้านกาแฟบ้านเฉลิมศรี เริ่มต้นจากความตั้งใจเล็ก ๆ บนดอยป่าเมี่ยงแม่สาย ไร่กาแฟของครอบครัวที่ค่อย ๆ ดูแลทีละฤดูกาล",
      "story.p2": "วันนี้เราคั่วเมล็ดออร์แกนิกสด ๆ ในร้าน ติดวัดพระธาตุดอยสะเก็ด มักจะเห็นเมล็ดตากแดดอยู่หน้าร้าน เลือกเบลนด์ที่ถูกใจ หรือซื้อกลับบ้านได้",
      "story.fact1.k": "คั่ว",
      "story.fact1.v": "คั่วเอง ทีละน้อย",
      "story.fact2.k": "แหล่งปลูก",
      "story.fact2.v": "ดอยป่าเมี่ยงแม่สาย",
      "story.fact3.k": "กิจการครอบครัว",
      "story.fact3.v": "ตั้งแต่ปี 2560",
      "menu.eyebrow": "เมนู",
      "menu.title": "เมนูสั้น ๆ ที่ตั้งใจคัดมา",
      "menu.note": "ราคาตั้งต้นจากรีวิวที่ร้าน เมนูเต็มเร็ว ๆ นี้",
      "menu.hot.t": "กาแฟร้อน",
      "menu.hot.1": "เอสเปรสโซ่ · อเมริกาโน่ · ลาเต้",
      "menu.iced.t": "กาแฟเย็น",
      "menu.iced.1": "ดำเย็น · ลาเต้เย็น · ซิกเนเจอร์",
      "menu.beans.t": "เมล็ดกาแฟ & ของทานเล่น",
      "menu.beans.1": "เมล็ดซิงเกิลออริจินคัดพิเศษ",
      "menu.beans.from": "เริ่มต้น ฿50",
      "menu.beans.2": "ขนมปังปิ้ง & ของว่าง",
      "menu.beans.askshop": "ที่ร้าน",
      "menu.beans.3": "ส่ง / ขายส่ง",
      "menu.beans.ask": "สอบถาม",
      "reviews.eyebrow": "ลูกค้าพูดถึงเรา",
      "reviews.title": "แนะนำ 100% บน Google",
      "reviews.r1.q": "“มาที่นี่ บรรยากาศผ่อนคลาย กาแฟอร่อยมาก ไม่ใช่การโฆษณา นี่คือเรื่องจริง คุณจะต้องชอบ”",
      "reviews.r2.q": "“บรรยากาศผ่อนคลาย”",
      "reviews.more": "อ่านรีวิวทั้งหมดบน Google",
      "visit.eyebrow": "เยี่ยมชม",
      "visit.title": "ตรงสามแยกพระธาตุดอยสะเก็ด",
      "visit.address.k": "ที่อยู่",
      "visit.address.v": "1007 ต.เชิงดอย อ.ดอยสะเก็ด จ.เชียงใหม่ 50220",
      "visit.landmark.k": "จุดสังเกต",
      "visit.landmark.v": "สามแยกหน้าวัดพระธาตุดอยสะเก็ด",
      "visit.hours.k": "เวลาเปิด",
      "visit.hours.v": "เปิด 08:00 — เวลาปิดเปลี่ยนได้ โทรสอบถามล่วงหน้านะคะ",
      "visit.phone.k": "โทรศัพท์",
      "visit.parking.k": "ที่จอดรถ",
      "visit.parking.v": "จำกัด — มีไม่กี่คันหน้าร้าน",
      "visit.directions": "เปิดใน Google Maps",
      "contact.eyebrow": "ติดต่อ",
      "contact.title": "สั่งจำนวนมาก จัดส่ง & ขายส่ง",
      "contact.p1": "อยากให้จัดส่งเมล็ดกาแฟ หรือสั่งสำหรับร้านกาแฟ/ออฟฟิศ? ส่งข้อความหาเรา ตอบกลับภายใน 1–2 วัน",
      "contact.phone": "โทรศัพท์",
      "contact.email": "อีเมล",
      "contact.fb": "เฟซบุ๊ก",
      "contact.yt": "ยูทูบ",
      "form.name": "ชื่อ",
      "form.email": "อีเมล",
      "form.kind": "เรื่องที่ติดต่อ",
      "form.kind.shipping": "จัดส่งเมล็ดกาแฟ",
      "form.kind.bulk": "สั่งจำนวนมาก / ขายส่ง",
      "form.kind.visit": "มาเยี่ยมชมร้าน",
      "form.kind.other": "เรื่องอื่น ๆ",
      "form.message": "ข้อความ",
      "form.submit": "ส่ง",
      "form.note": "จะเปิดแอปอีเมลของคุณพร้อมข้อความให้กดส่ง"
    }
  };

  const apply = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = STRINGS[lang]?.[key];
      if (val) el.textContent = val;
    });
    document.querySelectorAll(".lang-toggle [data-lang]").forEach((el) => {
      el.hidden = el.dataset.lang === lang;
    });
    try { localStorage.setItem("lang", lang); } catch (_) {}
  };

  const initialLang = (() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "th") return saved;
    } catch (_) {}
    return (navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en";
  })();
  apply(initialLang);

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    apply(document.documentElement.lang === "th" ? "en" : "th");
  });

  document.getElementById("contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const kind = (data.get("kind") || "").toString();
    const message = (data.get("message") || "").toString().trim();
    if (!name || !email || !message) { f.reportValidity(); return; }
    const subject = `[Website] ${kind} — ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:chalermsrihouse2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = navigator.connection?.saveData;
    if (reduce.matches || saveData) {
      heroVideo.removeAttribute("autoplay");
      heroVideo.pause();
    } else {
      heroVideo.addEventListener("ended", () => {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
      });
      heroVideo.play().catch(() => {});
    }
  }
})();
