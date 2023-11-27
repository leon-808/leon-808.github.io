$(".nav_li").on("click", nav_click);
$("body").off("swiperight").on("swiperight", m_nav_swiperight);
$("body").off("swipeleft").on("swipeleft", m_nav_swipeleft);

function nav_click() {
  $(".nav_li").each(function () {
    $(this).removeClass("clicked");
  });
  $(this).addClass("clicked");
}

function m_nav_swiperight() {
  if ($("m_nav").css("display") == "block") {
    const current = $(".m_nav_li.current");
    const prev = current.prev("li");
    const next = current.next("li");
    const pprev = prev.prev("li");
    if (prev.length && prev.text() != "") {
      prev.removeClass("prev");
      prev.addClass("current");
      current.removeClass("current");
      current.addClass("next");
      next.removeClass("next");
      if (pprev.length) pprev.addClass("prev");
      m_nav_handleArrows();
      return false;
    }
  }
}

function m_nav_swipeleft() {
  if ($("m_nav").css("display") == "block") {
    const current = $(".m_nav_li.current");
    const prev = current.prev("li");
    const next = current.next("li");
    const nnext = next.next("li");
    if (next.length && next.text() != "") {
      prev.removeClass("prev");
      current.removeClass("current");
      current.addClass("prev");
      next.removeClass("next");
      next.addClass("current");
      if (nnext.length) nnext.addClass("next");
      m_nav_handleArrows();
      return false;
    }
  }
}

function m_nav_handleArrows() {
  $(".m_nav_li").each(function () {
    const me = $(this);
    const text = me
      .html()
      .replace(/<span[^>]*>(.*?)<\/span>/g, "")
      .trim();
    const length = 10 - text.length;
    const pSpan = `
    <span class="arrow1">< </span>
    <span class="arrow2"><</span>
    <span class="arrow3"><</span>
    `;
    const nSpan = `
    <span class="arrow1"> ></span>
    <span class="arrow2">></span>
    <span class="arrow3">></span>
    `;
    if (me.text() != "") {
      if (me.hasClass("prev")) me.html(pSpan + text.padStart(length, "　"));
      else if (me.hasClass("next")) me.html(text.padEnd(length, "　") + nSpan);
      else me.text(text);
    }
  });
}
