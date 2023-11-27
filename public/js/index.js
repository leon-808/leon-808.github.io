$(".nav_li").on("click", nav_click);
$("body").on("swiperight", m_nav_swiperight);
$("body").on("swipeleft", m_nav_swipeleft);

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
    }
  }
}
