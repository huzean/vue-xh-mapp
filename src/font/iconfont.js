!(function(a) {
  var e,
    d =
      '<svg><symbol id="icon-xiajiantou" viewBox="0 0 1024 1024"><path d="M862.752 326.016H161.248l349.696 371.936L862.72 326.016z"  ></path></symbol><symbol id="icon-shezhi-youjiantou" viewBox="0 0 1024 1024"><path d="M403.893 752c-8.192 0-16.385-3.199-22.52-9.558-12.014-12.453-11.658-32.263 0.785-44.267l192.878-186.173L382.158 325.83c-12.443-12.004-12.799-31.813-0.785-44.266 11.983-12.432 31.813-12.799 44.256-0.774l216.213 208.693a31.266 31.266 0 0 1 9.569 22.521c0 8.498-3.454 16.63-9.569 22.52L425.629 743.217c-6.074 5.869-13.91 8.783-21.736 8.783z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = a.document),
        (c = !1),
        (d = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      c || ((c = !0), o());
    }
    var o, i, c, d;
  })(function() {
    var e, t, n, o, i, c;
    ((e = document.createElement("div")).innerHTML = d),
      (d = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (c = o.firstChild).parentNode.insertBefore(i, c))
          : o.appendChild(n));
  });
})(window);
