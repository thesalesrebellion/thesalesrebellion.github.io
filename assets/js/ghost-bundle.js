!(function (n) {
  var r = {};
  function o(e) {
    var t;
    return (
      r[e] ||
      ((t = r[e] = { i: e, l: !1, exports: {} }),
      n[e].call(t.exports, t, t.exports, o),
      (t.l = !0),
      t)
    ).exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 20));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1);
    t.default = function (e, t) {
      return (
        void 0 === t && (t = window.document),
        (0, r.arrayFrom)(t.constructor.prototype.querySelectorAll.call(t, e))
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetForm =
          t.reportValidity =
          t.createEvent =
          t.includes =
          t.arrayFrom =
          t.closest =
            void 0),
        r(n(0)));
    function i(e) {
      var t;
      return "function" == typeof Event
        ? new Event(e, { cancelable: !0 })
        : ((t = document.createEvent("Event")).initEvent(e, !1, !0), t);
    }
    (t.closest = function e(t, n) {
      return Element.prototype.closest
        ? Element.prototype.closest.call(t, n)
        : (
            Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector
          ).call(t, n)
        ? t
        : t.parentElement
        ? e(t.parentElement, n)
        : null;
    }),
      (t.arrayFrom = function (e) {
        return Array.from ? Array.from(e) : Array.prototype.slice.call(e);
      }),
      (t.includes = function (e, t) {
        return String.prototype.includes
          ? String.prototype.includes.call(e, t)
          : -1 < e.indexOf(t);
      }),
      (t.createEvent = i),
      (t.reportValidity = function (e) {
        var t;
        return HTMLFormElement.prototype.reportValidity
          ? HTMLFormElement.prototype.reportValidity.call(e)
          : !!HTMLFormElement.prototype.checkValidity.call(e) ||
              (((t = document.createElement("button")).type = "submit"),
              e.appendChild(t),
              t.click(),
              e.removeChild(t),
              !1);
      }),
      (t.resetForm = function (e) {
        var t, n;
        HTMLFormElement.prototype.reset.call(e),
          (t = document.createElement("form")),
          ((n = document.createElement("input")).required = !0),
          (n.value = "foo"),
          t.appendChild(n),
          t.reset(),
          !1 === n.validity.valueMissing &&
            ((0, o.default)(
              "input:not([type=hidden]),textarea,select",
              e
            ).forEach(function (e) {
              e.value = e.value;
            }),
            e.dispatchEvent(i("reset")));
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      o =
        (this && this.__spreadArray) ||
        function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
              (!r && o in t) ||
                ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
          return e.concat(r || Array.prototype.slice.call(t));
        },
      i =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.error = t.warn = t.log = void 0),
        n(1));
    (t.log = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      (0, i.includes)(window.location.search, "ub-debug=") &&
        console.log.apply(console, o([], r(e), !1));
    }),
      (t.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        console.warn.apply(console, o([], r(e), !1));
      }),
      (t.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        console.error.apply(console, o([], r(e), !1));
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.UsedAs = t.BreakpointName = void 0),
      (t.BreakpointName = {
        Mobile: "mobile",
        Tablet: "tablet",
        Desktop: "desktop",
      }),
      (t.UsedAs = {
        MainPage: "main",
        LightboxPage: "lightbox",
        FormConfirmationPage: "form_confirmation",
      });
  },
  function (e, t) {
    var n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getScrollbarWidth =
        t.isMobile =
        t.isInternetExplorer =
        t.isIos =
          void 0),
      (t.isIos = function () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
      }),
      (t.isInternetExplorer = function () {
        return /msie ([\w.]+)/.test(navigator.userAgent);
      }),
      (t.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|PlayBook|Windows Phone|IEMobile|WPDesktop/i.test(
          navigator.userAgent || navigator.vendor
        );
      }),
      (t.getScrollbarWidth = function () {
        var e = document.createElement("div"),
          t =
            ((e.style.visibility = "hidden"),
            (e.style.width = "100px"),
            (e.style.msOverflowStyle = "scrollbar"),
            document.body.appendChild(e),
            e.offsetWidth);
        e.style.overflow = "scroll";
        ((n = document.createElement("div")).style.width = "100%"),
          e.appendChild(n);
        var n = n.offsetWidth;
        return e.parentNode && e.parentNode.removeChild(e), t - n;
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      a =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n);
          return i(t, e), t;
        },
      u =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      c =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addQueryParamsToUrl = t.getQueryParams = void 0),
        a(n(9))),
      s = u(n(11));
    (t.getQueryParams = function (e) {
      return (
        delete (e = c.parse(e)).attempt,
        delete e.page_uuid,
        delete e.sub_page,
        delete e.token,
        delete e.time,
        delete e.closedAt,
        e
      );
    }),
      (t.addQueryParamsToUrl = function (e, t) {
        var n;
        return 0 === Object.keys(t).length
          ? e
          : ((n = (e = (0, s.default)(e, c.parse)).query),
            e.set("query", r(r({}, t), n)),
            e.toString());
      });
  },
  function (e, t, n) {
    "use strict";
    var o,
      r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      a =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pageIsEmbeddable =
          t.close =
          t.reportFormSubmit =
          t.showFormConfirmation =
            void 0),
        n(12)),
      u = n(3),
      c = i(n(0));
    function s(e, t) {
      e = r({ type: e, namespace: "ub-emb" }, (t = void 0 === t ? {} : t));
      window.parent.postMessage(JSON.stringify(e), "*");
    }
    function l(e) {
      e = e.data;
      "addSubmitHeaders" === e.type && (0, a.addSubmitHeaders)(e.headers);
    }
    function f() {
      s(o.Close);
    }
    function d(e) {
      return !0 === (e = void 0 === e ? window : e).ub.page.isEmbeddable;
    }
    ((i = o = o || {}).ReportPageSize = "reportPageSize"),
      (i.LinkClick = "linkClick"),
      (i.FormSubmit = "formSubmit"),
      (i.Close = "closeOverlay"),
      (i.ShowFormConfirmation = "openOverlay"),
      (t.showFormConfirmation = function (e, t) {
        s(o.ShowFormConfirmation, {
          url: e,
          size: { desktop: t.desktop, mobile: t.mobile },
        });
      }),
      (t.reportFormSubmit = function (e, t) {
        s(o.FormSubmit, { isConversion: e, formAction: t });
      }),
      (t.close = f),
      (t.pageIsEmbeddable = d),
      (t.default = function () {
        var e;
        d() &&
          (window.addEventListener("message", l),
          window.ub.page.usedAs === u.UsedAs.MainPage &&
            s(o.ReportPageSize, {
              desktop: window.ub.page.dimensions.desktop,
              mobile: window.ub.page.dimensions.mobile,
            }),
          (0, c.default)(
            "a.lp-pom-button, .lp-pom-image a, .lp-pom-text a"
          ).forEach(function (r) {
            return r.addEventListener("click", function (e) {
              var t = r.href,
                n = r.target,
                n = "_top" === n || "_parent" === n;
              t &&
                "#" !== t &&
                (n && e.preventDefault(),
                s(o.LinkClick, {
                  isConversion: r.hasAttribute("data-goal"),
                  linkUrl: t,
                  shouldRedirect: n,
                }));
            });
          }),
          (e = window.ub.page.embeddableDisplaySettings)) &&
          e.autoDismissDelay &&
          setTimeout(f, 1e3 * e.autoDismissDelay);
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        return HTMLFormElement.prototype.querySelector.call(
          e,
          "button[type=submit]"
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty;
    function a(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function u(e) {
      try {
        return encodeURIComponent(e);
      } catch (e) {
        return null;
      }
    }
    (t.stringify = function (e, t) {
      var n,
        r,
        o = [];
      for (r in ("string" != typeof (t = t || "") && (t = "?"), e))
        i.call(e, r) &&
          ((n = e[r]) || (null != n && !isNaN(n)) || (n = ""),
          (r = u(r)),
          (n = u(n)),
          null !== r) &&
          null !== n &&
          o.push(r + "=" + n);
      return o.length ? t + o.join("&") : "";
    }),
      (t.parse = function (e) {
        for (var t = /([^=?#&]+)=?([^&]*)/g, n = {}; (o = t.exec(e)); ) {
          var r = a(o[1]),
            o = a(o[2]);
          null === r || null === o || r in n || (n[r] = o);
        }
        return n;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3);
    t.default = function e(t) {
      return t.ub &&
        t.ub.page &&
        (t.ub.page.usedAs === r.UsedAs.MainPage || t.ub.page.isEmbeddable)
        ? t
        : t.parent !== t
        ? e(t.parent)
        : null;
    };
  },
  function (e, t, n) {
    "use strict";
    !function (o) {
      var d = n(22),
        p = n(9),
        t =
          /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        h = /[\n\r\t]/g,
        i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /:\d+$/,
        c = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        m = /^[a-zA-Z]:/;
      function v(e) {
        return (e || "").toString().replace(t, "");
      }
      var y = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return b(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        a = { hash: 1, query: 1 };
      function g(e) {
        var t,
          n =
            "undefined" != typeof window
              ? window
              : void 0 !== o
              ? o
              : "undefined" != typeof self
              ? self
              : {},
          n = n.location || {},
          r = {},
          n = typeof (e = e || n);
        if ("blob:" === e.protocol) r = new _(unescape(e.pathname), {});
        else if ("string" == n) for (t in ((r = new _(e, {})), a)) delete r[t];
        else if ("object" == n) {
          for (t in e) t in a || (r[t] = e[t]);
          void 0 === r.slashes && (r.slashes = i.test(e.href));
        }
        return r;
      }
      function b(e) {
        return (
          "file:" === e ||
          "ftp:" === e ||
          "http:" === e ||
          "https:" === e ||
          "ws:" === e ||
          "wss:" === e
        );
      }
      function w(e, t) {
        (e = (e = v(e)).replace(h, "")), (t = t || {});
        var n,
          e = c.exec(e),
          r = e[1] ? e[1].toLowerCase() : "",
          o = !!e[2],
          i = !!e[3],
          a = 0;
        return (
          o
            ? (a = i
                ? ((n = e[2] + e[3] + e[4]), e[2].length + e[3].length)
                : ((n = e[2] + e[4]), e[2].length))
            : i
            ? ((n = e[3] + e[4]), (a = e[3].length))
            : (n = e[4]),
          "file:" === r
            ? 2 <= a && (n = n.slice(2))
            : b(r)
            ? (n = e[4])
            : r
            ? o && (n = n.slice(2))
            : 2 <= a && b(t.protocol) && (n = e[4]),
          { protocol: r, slashes: o || b(r), slashesCount: a, rest: n }
        );
      }
      function _(e, t, n) {
        if (((e = (e = v(e)).replace(h, "")), !(this instanceof _)))
          return new _(e, t, n);
        var r,
          o,
          i,
          a,
          u,
          c = y.slice(),
          s = typeof t,
          l = this,
          f = 0;
        for (
          "object" != s && "string" != s && ((n = t), (t = null)),
            n && "function" != typeof n && (n = p.parse),
            r = !(s = w(e || "", (t = g(t)))).protocol && !s.slashes,
            l.slashes = s.slashes || (r && t.slashes),
            l.protocol = s.protocol || t.protocol || "",
            e = s.rest,
            (("file:" === s.protocol && (2 !== s.slashesCount || m.test(e))) ||
              (!s.slashes &&
                (s.protocol || s.slashesCount < 2 || !b(l.protocol)))) &&
              (c[3] = [/(.*)/, "pathname"]);
          f < c.length;
          f++
        )
          "function" == typeof (i = c[f])
            ? (e = i(e, l))
            : ((o = i[0]),
              (u = i[1]),
              o != o
                ? (l[u] = e)
                : "string" == typeof o
                ? ~(a = "@" === o ? e.lastIndexOf(o) : e.indexOf(o)) &&
                  (e =
                    "number" == typeof i[2]
                      ? ((l[u] = e.slice(0, a)), e.slice(a + i[2]))
                      : ((l[u] = e.slice(a)), e.slice(0, a)))
                : (a = o.exec(e)) && ((l[u] = a[1]), (e = e.slice(0, a.index))),
              (l[u] = l[u] || (r && i[3] && t[u]) || ""),
              i[4] && (l[u] = l[u].toLowerCase()));
        n && (l.query = n(l.query)),
          r &&
            t.slashes &&
            "/" !== l.pathname.charAt(0) &&
            ("" !== l.pathname || "" !== t.pathname) &&
            (l.pathname = (function (e, t) {
              if ("" === e) return t;
              for (
                var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  r = n.length,
                  t = n[r - 1],
                  o = !1,
                  i = 0;
                r--;

              )
                "." === n[r]
                  ? n.splice(r, 1)
                  : ".." === n[r]
                  ? (n.splice(r, 1), i++)
                  : i && (0 === r && (o = !0), n.splice(r, 1), i--);
              return (
                o && n.unshift(""),
                ("." !== t && ".." !== t) || n.push(""),
                n.join("/")
              );
            })(l.pathname, t.pathname)),
          "/" !== l.pathname.charAt(0) &&
            b(l.protocol) &&
            (l.pathname = "/" + l.pathname),
          d(l.port, l.protocol) || ((l.host = l.hostname), (l.port = "")),
          (l.username = l.password = ""),
          l.auth &&
            (~(a = l.auth.indexOf(":"))
              ? ((l.username = l.auth.slice(0, a)),
                (l.username = encodeURIComponent(
                  decodeURIComponent(l.username)
                )),
                (l.password = l.auth.slice(a + 1)),
                (l.password = encodeURIComponent(
                  decodeURIComponent(l.password)
                )))
              : (l.username = encodeURIComponent(decodeURIComponent(l.auth))),
            (l.auth = l.password ? l.username + ":" + l.password : l.username)),
          (l.origin =
            "file:" !== l.protocol && b(l.protocol) && l.host
              ? l.protocol + "//" + l.host
              : "null"),
          (l.href = l.toString());
      }
      (_.prototype = {
        set: function (e, t, n) {
          var r = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (n || p.parse)(t)),
                (r[e] = t);
              break;
            case "port":
              (r[e] = t),
                d(t, r.protocol)
                  ? t && (r.host = r.hostname + ":" + t)
                  : ((r.host = r.hostname), (r[e] = ""));
              break;
            case "hostname":
              (r[e] = t), r.port && (t += ":" + r.port), (r.host = t);
              break;
            case "host":
              (r[e] = t),
                u.test(t)
                  ? ((t = t.split(":")),
                    (r.port = t.pop()),
                    (r.hostname = t.join(":")))
                  : ((r.hostname = t), (r.port = ""));
              break;
            case "protocol":
              (r.protocol = t.toLowerCase()), (r.slashes = !n);
              break;
            case "pathname":
            case "hash":
              t
                ? ((o = "pathname" === e ? "/" : "#"),
                  (r[e] = t.charAt(0) !== o ? o + t : t))
                : (r[e] = t);
              break;
            case "username":
            case "password":
              r[e] = encodeURIComponent(t);
              break;
            case "auth":
              var o = t.indexOf(":");
              ~o
                ? ((r.username = t.slice(0, o)),
                  (r.username = encodeURIComponent(
                    decodeURIComponent(r.username)
                  )),
                  (r.password = t.slice(o + 1)),
                  (r.password = encodeURIComponent(
                    decodeURIComponent(r.password)
                  )))
                : (r.username = encodeURIComponent(decodeURIComponent(t)));
          }
          for (var i = 0; i < y.length; i++) {
            var a = y[i];
            a[4] && (r[a[1]] = r[a[1]].toLowerCase());
          }
          return (
            (r.auth = r.password ? r.username + ":" + r.password : r.username),
            (r.origin =
              "file:" !== r.protocol && b(r.protocol) && r.host
                ? r.protocol + "//" + r.host
                : "null"),
            (r.href = r.toString()),
            r
          );
        },
        toString: function (e) {
          (e && "function" == typeof e) || (e = p.stringify);
          var t = this,
            n = t.host,
            r =
              ((r = t.protocol) && ":" !== r.charAt(r.length - 1) && (r += ":"),
              r + ((t.protocol && t.slashes) || b(t.protocol) ? "//" : ""));
          return (
            t.username
              ? ((r += t.username),
                t.password && (r += ":" + t.password),
                (r += "@"))
              : t.password
              ? (r = r + (":" + t.password) + "@")
              : "file:" !== t.protocol &&
                b(t.protocol) &&
                !n &&
                "/" !== t.pathname &&
                (r += "@"),
            (":" === n[n.length - 1] || (u.test(t.hostname) && !t.port)) &&
              (n += ":"),
            (r += n + t.pathname),
            (n = "object" == typeof t.query ? e(t.query) : t.query) &&
              (r += "?" !== n.charAt(0) ? "?" + n : n),
            t.hash && (r += t.hash),
            r
          );
        },
      }),
        (_.extractProtocol = w),
        (_.location = g),
        (_.trimLeft = v),
        (_.qs = p),
        (e.exports = _);
    }.call(this, n(4));
  },
  function (e, t, n) {
    "use strict";
    var f =
        (this && this.__assign) ||
        function () {
          return (f =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__awaiter) ||
        function (e, a, u, c) {
          return new (u = u || Promise)(function (n, t) {
            function r(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof u
                    ? t
                    : new u(function (e) {
                        e(t);
                      })
                  ).then(r, o);
            }
            i((c = c.apply(e, a || [])).next());
          });
        },
      d =
        (this && this.__generator) ||
        function (r, o) {
          var i,
            a,
            u,
            c = {
              label: 0,
              sent: function () {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: [],
            },
            s = { next: e(0), throw: e(1), return: e(2) };
          return (
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function e(n) {
            return function (e) {
              var t = [n, e];
              if (i) throw new TypeError("Generator is already executing.");
              for (; (c = s && t[(s = 0)] ? 0 : c); )
                try {
                  if (
                    ((i = 1),
                    a &&
                      (u =
                        2 & t[0]
                          ? a.return
                          : t[0]
                          ? a.throw || ((u = a.return) && u.call(a), 0)
                          : a.next) &&
                      !(u = u.call(a, t[1])).done)
                  )
                    return u;
                  switch (((a = 0), (t = u ? [2 & t[0], u.value] : t)[0])) {
                    case 0:
                    case 1:
                      u = t;
                      break;
                    case 4:
                      return c.label++, { value: t[1], done: !1 };
                    case 5:
                      c.label++, (a = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !(u = 0 < (u = c.trys).length && u[u.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === t[0] && (!u || (t[1] > u[0] && t[1] < u[3])))
                        c.label = t[1];
                      else if (6 === t[0] && c.label < u[1])
                        (c.label = u[1]), (u = t);
                      else {
                        if (!(u && c.label < u[2])) {
                          u[2] && c.ops.pop(), c.trys.pop();
                          continue;
                        }
                        (c.label = u[2]), c.ops.push(t);
                      }
                  }
                  t = o.call(r, c);
                } catch (e) {
                  (t = [6, e]), (a = 0);
                } finally {
                  i = u = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            };
          }
        },
      u =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      p =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initSubmitHandler = t.handleSubmit = t.addSubmitHeaders = void 0),
        n(24),
        n(27),
        i(n(7))),
      h = i(n(2)),
      m = u(n(10)),
      v = n(1),
      y = n(6),
      g = u(n(0)),
      b = n(28),
      c = u(n(31)),
      w = u(n(8)),
      _ = {};
    function x(n, o, i) {
      return a(this, void 0, void 0, function () {
        var r,
          t = this;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (r = {
                  formElement: o,
                  isConversionGoal: i.ub.form.isConversionGoal,
                }),
                [
                  4,
                  Promise.all(
                    n.map(function (n) {
                      return a(t, void 0, void 0, function () {
                        var t;
                        return d(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (e.trys.push([0, 5, , 6]), 1 < n.length)
                                ? [
                                    4,
                                    new Promise(function (e) {
                                      return n(r, e);
                                    }),
                                  ]
                                : [3, 2];
                            case 1:
                              return e.sent(), [3, 4];
                            case 2:
                              return [4, n(r)];
                            case 3:
                              e.sent(), (e.label = 4);
                            case 4:
                              return [3, 6];
                            case 5:
                              return (
                                (t = e.sent()),
                                h.warn("[Form]", "Submit hook threw error", t),
                                [3, 6]
                              );
                            case 6:
                              return [2];
                          }
                        });
                      });
                    })
                  ),
                ]
              );
            case 1:
              return e.sent(), [2];
          }
        });
      });
    }
    function s(e) {
      return a(this, arguments, void 0, function (r, o) {
        var i, a, u, c, s, l;
        return (
          void 0 === o && (o = window),
          d(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (i =
                    HTMLFormElement.prototype.getAttribute.call(r, "action") ||
                    ""),
                  ((a = (0, w.default)(r)).disabled = !0),
                  h.log("[Form]", "Calling beforeFormSubmit hooks"),
                  [4, x(o.ub.hooks.beforeFormSubmit, r, o)]
                );
              case 1:
                e.sent();
                var t = (u = (0, g.default)("input,select,textarea", r)
                  .filter(function (e) {
                    return (
                      e instanceof HTMLSelectElement ||
                      e instanceof HTMLTextAreaElement ||
                      (-1 ===
                        ["submit", "button", "image", "reset", "file"].indexOf(
                          e.type
                        ) &&
                        (("checkbox" !== e.type && "radio" !== e.type) ||
                          e.checked))
                    );
                  })
                  .filter(function (e) {
                    return !e.disabled && e.name;
                  })
                  .map(function (e) {
                    return ""
                      .concat(encodeURIComponent(e.name), "=")
                      .concat(encodeURIComponent(e.value));
                  })
                  .join("&")
                  .replace(/%20/g, "+"));
                try {
                  var n = (0, m.default)(window);
                  n && n.postMessage(t, "*");
                } catch (e) {}
                if (
                  (p.pageIsEmbeddable() &&
                    p.reportFormSubmit(
                      window.ub.form.isConversionGoal,
                      window.ub.form.action
                    ),
                  (c = {}),
                  !i)
                )
                  return [3, 7];
                h.log("[Form]", "Sending request"),
                  (s = (0, y.addQueryParamsToUrl)(i, {
                    "lp-form-submit-method": "ajax",
                  })),
                  (e.label = 2);
              case 2:
                return (
                  e.trys.push([2, 5, , 6]),
                  [
                    4,
                    o.fetch(s, {
                      method: "POST",
                      headers: f(f({}, _), {
                        "Content-Type": "application/x-www-form-urlencoded",
                      }),
                      body: u,
                      credentials: "include",
                    }),
                  ]
                );
              case 3:
                if ((l = e.sent()).ok) return [4, l.json()];
                throw new Error("".concat(l.status, " ").concat(l.statusText));
              case 4:
                return (c = e.sent()), [3, 6];
              case 5:
                return (
                  (l = e.sent()),
                  (a.disabled = !1),
                  h.error("[Form]", "Request failed", l),
                  o.alert(
                    "We're sorry, the form could not be submitted. Please try again."
                  ),
                  [2]
                );
              case 6:
                return h.log("[Form]", "Request complete"), [3, 8];
              case 7:
                h.log("[Form]", "Skipping request"), (e.label = 8);
              case 8:
                return (
                  h.log("[Form]", "Calling afterFormSubmit hooks"),
                  [4, x(o.ub.hooks.afterFormSubmit, r, o)]
                );
              case 9:
                return (
                  e.sent(),
                  (0, b.performFormAction)(r, c, o),
                  (0, g.default)("input,textarea,select", r).forEach(function (
                    e
                  ) {
                    return e.blur();
                  }),
                  ((a.disabled = !1), v.resetForm)(r),
                  [2]
                );
            }
          })
        );
      });
    }
    (t.addSubmitHeaders = function (t) {
      Object.keys(t).forEach(function (e) {
        /^X-Ub-/.test(e) && "string" == typeof t[e] && (_[e] = t[e]);
      });
    }),
      (t.handleSubmit = s),
      (t.initSubmitHandler = function (t, n) {
        void 0 === n && (n = window),
          HTMLFormElement.prototype.addEventListener.call(
            t,
            "submit",
            function (e) {
              e.preventDefault(),
                !(0, w.default)(t).disabled && (0, c.default)(t) && s(t, n);
            }
          );
      });
  },
  function (e, o, i) {
    !function (e) {
      var t =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        n = Function.prototype.apply;
      function r(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (o.setTimeout = function () {
        return new r(n.call(setTimeout, t, arguments), clearTimeout);
      }),
        (o.setInterval = function () {
          return new r(n.call(setInterval, t, arguments), clearInterval);
        }),
        (o.clearTimeout = o.clearInterval =
          function (e) {
            e && e.close();
          }),
        (r.prototype.unref = r.prototype.ref = function () {}),
        (r.prototype.close = function () {
          this._clearFn.call(t, this._id);
        }),
        (o.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (o.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (o._unrefActive = o.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        i(25),
        (o.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (o.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, i(4));
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__assign) ||
      function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        var t = (e = e.dataset).eventCategory,
          n = e.eventAction,
          e = e.eventLabel;
        return r(
          r(r({}, t ? { category: t } : {}), n ? { action: n } : {}),
          e ? { label: e } : {}
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      c = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(2)));
    t.default = function (r, o, i, e) {
      var a = (e = void 0 === e ? window : e).ga,
        u = e.gtag;
      return "function" != typeof a && "function" != typeof u
        ? Promise.resolve()
        : (c.log("[Google Analytics]", "Sending event", {
            category: r,
            action: o,
            label: i,
          }),
          new Promise(function (e, t) {
            var n = setTimeout(function () {
              return t(new Error("Google Analytics event timed out"));
            }, 2e3);
            "function" == typeof u &&
              u("event", "event", {
                eventCategory: r,
                eventAction: o,
                eventLabel: i,
                hitCallback: function () {
                  clearTimeout(n), e();
                },
              }),
              "function" == typeof a &&
                a("send", {
                  hitType: "event",
                  eventCategory: r,
                  eventAction: o,
                  eventLabel: i,
                  transport: "beacon",
                  hitCallback: function () {
                    clearTimeout(n), e();
                  },
                });
          }));
    };
  },
  function (e, t, n) {
    "use strict";
    var a =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return {
                  value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                  done: !e,
                };
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      u =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      n =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.onBreakpointChange = t.getCurrentBreakpoint = void 0),
        n(3)),
      c = window.ub.page.dimensions,
      s = {};
    function i() {
      var t, e;
      try {
        for (
          var n = a(Object.entries(s)), r = n.next();
          !r.done;
          r = n.next()
        ) {
          var o = u(r.value, 2),
            i = o[0];
          if (o[1].matches) return i;
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          r && !r.done && (e = n.return) && e.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      return c.breakpoints[0];
    }
    c.mobileMaxWidth &&
      (s[n.BreakpointName.Mobile] = window.matchMedia(
        "(max-width: ".concat(c.mobileMaxWidth, "px)")
      )),
      c.tabletMaxWidth &&
        (s[n.BreakpointName.Tablet] = window.matchMedia(
          "(max-width: ".concat(c.tabletMaxWidth, "px)")
        )),
      (t.getCurrentBreakpoint = i),
      (t.onBreakpointChange = function (e) {
        var t, n;
        try {
          for (var r = a(Object.values(s)), o = r.next(); !o.done; o = r.next())
            o.value.addEventListener("change", function () {
              return e(i());
            });
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      });
  },
  function (g, e, t) {
    "use strict";
    t.r(e),
      t.d(e, "h", function () {
        return n;
      }),
      t.d(e, "createElement", function () {
        return n;
      }),
      t.d(e, "cloneElement", function () {
        return o;
      }),
      t.d(e, "createRef", function () {
        return y;
      }),
      t.d(e, "Component", function () {
        return m;
      }),
      t.d(e, "render", function () {
        return v;
      }),
      t.d(e, "rerender", function () {
        return f;
      }),
      t.d(e, "options", function () {
        return _;
      });
    var c = function () {},
      _ = {},
      s = [],
      l = [];
    function n(e, t) {
      for (var n, r, o, i = l, a = arguments.length; 2 < a--; )
        s.push(arguments[a]);
      for (
        t &&
        null != t.children &&
        (s.length || s.push(t.children), delete t.children);
        s.length;

      )
        if ((r = s.pop()) && void 0 !== r.pop)
          for (a = r.length; a--; ) s.push(r[a]);
        else
          "boolean" == typeof r && (r = null),
            (o = "function" != typeof e) &&
              (null == r
                ? (r = "")
                : "number" == typeof r
                ? (r = String(r))
                : "string" != typeof r && (o = !1)),
            o && n ? (i[i.length - 1] += r) : i === l ? (i = [r]) : i.push(r),
            (n = o);
      var u = new c();
      return (
        (u.nodeName = e),
        (u.children = i),
        (u.attributes = null == t ? void 0 : t),
        (u.key = null == t ? void 0 : t.key),
        void 0 !== _.vnode && _.vnode(u),
        u
      );
    }
    function x(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function u(e, t) {
      null != e && ("function" == typeof e ? e(t) : (e.current = t));
    }
    var r =
      "function" == typeof Promise
        ? Promise.resolve().then.bind(Promise.resolve())
        : setTimeout;
    function o(e, t) {
      return n(
        e.nodeName,
        x(x({}, e.attributes), t),
        2 < arguments.length ? [].slice.call(arguments, 2) : e.children
      );
    }
    var b = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      i = [];
    function a(e) {
      e._dirty ||
        ((e._dirty = !0), 1 != i.push(e)) ||
        (_.debounceRendering || r)(f);
    }
    function f() {
      for (var e; (e = i.pop()); ) e._dirty && j(e);
    }
    function G(e, t) {
      return (
        e.normalizedNodeName === t ||
        e.nodeName.toLowerCase() === t.toLowerCase()
      );
    }
    function Y(e) {
      var t = x({}, e.attributes),
        n = ((t.children = e.children), e.nodeName.defaultProps);
      if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
      return t;
    }
    function $(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function Q(e, t, n, r, o) {
      if ("key" !== (t = "className" === t ? "class" : t))
        if ("ref" === t) u(n, null), u(r, e);
        else if ("class" !== t || o)
          if ("style" === t) {
            if (
              ((r && "string" != typeof r && "string" != typeof n) ||
                (e.style.cssText = r || ""),
              r && "object" == typeof r)
            ) {
              if ("string" != typeof n)
                for (var i in n) i in r || (e.style[i] = "");
              for (var i in r)
                e.style[i] =
                  "number" == typeof r[i] && !1 === b.test(i)
                    ? r[i] + "px"
                    : r[i];
            }
          } else if ("dangerouslySetInnerHTML" === t)
            r && (e.innerHTML = r.__html || "");
          else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            (t = t.toLowerCase().substring(2)),
              r
                ? n || e.addEventListener(t, d, a)
                : e.removeEventListener(t, d, a),
              ((e._listeners || (e._listeners = {}))[t] = r);
          } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
              e[t] = null == r ? "" : r;
            } catch (e) {}
            (null != r && !1 !== r) ||
              "spellcheck" == t ||
              e.removeAttribute(t);
          } else {
            n = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r
              ? n
                ? e.removeAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase()
                  )
                : e.removeAttribute(t)
              : "function" != typeof r &&
                (n
                  ? e.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      t.toLowerCase(),
                      r
                    )
                  : e.setAttribute(t, r));
          }
        else e.className = r || "";
    }
    function d(e) {
      return this._listeners[e.type]((_.event && _.event(e)) || e);
    }
    var E = [],
      k = 0,
      J = !1,
      X = !1;
    function A() {
      for (var e; (e = E.shift()); )
        _.afterMount && _.afterMount(e),
          e.componentDidMount && e.componentDidMount();
    }
    function O(e, t, n, r, o, i) {
      k++ ||
        ((J = null != o && void 0 !== o.ownerSVGElement),
        (X = null != e && !("__preactattr_" in e)));
      e = Z(e, t, n, r, i);
      return (
        o && e.parentNode !== o && o.appendChild(e),
        --k || ((X = !1), i) || A(),
        e
      );
    }
    function Z(e, t, N, B, n) {
      var r = e,
        D = J;
      if (
        "string" == typeof (t = null != t && "boolean" != typeof t ? t : "") ||
        "number" == typeof t
      )
        e && void 0 !== e.splitText && e.parentNode && (!e._component || n)
          ? e.nodeValue != t && (e.nodeValue = t)
          : ((r = document.createTextNode(t)),
            e && (e.parentNode && e.parentNode.replaceChild(r, e), K(e, !0))),
          (r.__preactattr_ = !0);
      else {
        n = t.nodeName;
        if ("function" == typeof n) {
          for (
            var o = e,
              i = t,
              a = N,
              u = B,
              c = o && o._component,
              s = c,
              l = o,
              f = c && o._componentConstructor === i.nodeName,
              d = f,
              p = Y(i);
            c && !d && (c = c._parentComponent);

          )
            d = c.constructor === i.nodeName;
          return (
            c && d && (!u || c._component)
              ? (te(c, p, 3, a, u), (o = c.base))
              : (s && !f && (ne(s), (o = l = null)),
                (c = ee(i.nodeName, p, a)),
                o && !c.nextBase && ((c.nextBase = o), (l = null)),
                te(c, p, 1, a, u),
                (o = c.base),
                l && o !== l && ((l._component = null), K(l, !1))),
            o
          );
        }
        if (
          ((J = "svg" === n || ("foreignObject" !== n && J)),
          (n = String(n)),
          (!e || !G(e, n)) &&
            ((f = n),
            ((s = (s = J)
              ? document.createElementNS("http://www.w3.org/2000/svg", f)
              : document.createElement(f)).normalizedNodeName = f),
            (r = s),
            e))
        ) {
          for (; e.firstChild; ) r.appendChild(e.firstChild);
          e.parentNode && e.parentNode.replaceChild(r, e), K(e, !0);
        }
        var p = r.firstChild,
          h = r.__preactattr_,
          a = t.children;
        if (null == h)
          for (
            var h = (r.__preactattr_ = {}), m = r.attributes, v = m.length;
            v--;

          )
            h[m[v].name] = m[v].value;
        if (
          !X &&
          a &&
          1 === a.length &&
          "string" == typeof a[0] &&
          null != p &&
          void 0 !== p.splitText &&
          null == p.nextSibling
        )
          p.nodeValue != a[0] && (p.nodeValue = a[0]);
        else if ((a && a.length) || null != p) {
          var y,
            R,
            g,
            b,
            w,
            _ = r,
            x = a,
            U = N,
            H = B,
            E = X || null != h.dangerouslySetInnerHTML,
            k = _.childNodes,
            A = [],
            O = {},
            j = 0,
            P = 0,
            W = k.length,
            C = 0,
            q = x ? x.length : 0;
          if (0 !== W)
            for (var T = 0; T < W; T++) {
              var S = k[T],
                V = S.__preactattr_;
              null !=
              (M = q && V ? (S._component ? S._component.__key : V.key) : null)
                ? (j++, (O[M] = S))
                : (V ||
                    (void 0 !== S.splitText ? !E || S.nodeValue.trim() : E)) &&
                  (A[C++] = S);
            }
          if (0 !== q)
            for (var M, T = 0; T < q; T++) {
              if (((b = x[T]), (w = null) != (M = b.key)))
                j && void 0 !== O[M] && ((w = O[M]), (O[M] = void 0), j--);
              else if (P < C)
                for (y = P; y < C; y++)
                  if (
                    void 0 !== A[y] &&
                    (function (e, t, n) {
                      return "string" == typeof t || "number" == typeof t
                        ? void 0 !== e.splitText
                        : "string" == typeof t.nodeName
                        ? !e._componentConstructor && G(e, t.nodeName)
                        : n || e._componentConstructor === t.nodeName;
                    })((R = A[y]), b, E)
                  ) {
                    (w = R),
                      (A[y] = void 0),
                      y === C - 1 && C--,
                      y === P && P++;
                    break;
                  }
              (w = Z(w, b, U, H)),
                (g = k[T]),
                w &&
                  w !== _ &&
                  w !== g &&
                  (null == g
                    ? _.appendChild(w)
                    : w === g.nextSibling
                    ? $(g)
                    : _.insertBefore(w, g));
            }
          if (j) for (var T in O) void 0 !== O[T] && K(O[T], !1);
          for (; P <= C; ) void 0 !== (w = A[C--]) && K(w, !1);
        }
        var F,
          z = r,
          L = t.attributes,
          I = h;
        for (F in I)
          (L && null != L[F]) ||
            null == I[F] ||
            Q(z, F, I[F], (I[F] = void 0), J);
        for (F in L)
          "children" === F ||
            "innerHTML" === F ||
            (F in I &&
              L[F] === ("value" === F || "checked" === F ? z : I)[F]) ||
            Q(z, F, I[F], (I[F] = L[F]), J);
        J = D;
      }
      return r;
    }
    function K(e, t) {
      var n = e._component;
      n
        ? ne(n)
        : (null != e.__preactattr_ && u(e.__preactattr_.ref, null),
          (!1 !== t && null != e.__preactattr_) || $(e),
          p(e));
    }
    function p(e) {
      for (e = e.lastChild; e; ) {
        var t = e.previousSibling;
        K(e, !0), (e = t);
      }
    }
    var h = [];
    function ee(e, t, n) {
      var r,
        o = h.length;
      for (
        e.prototype && e.prototype.render
          ? ((r = new e(t, n)), m.call(r, t, n))
          : (((r = new m(t, n)).constructor = e), (r.render = w));
        o--;

      )
        if (h[o].constructor === e)
          return (r.nextBase = h[o].nextBase), h.splice(o, 1), r;
      return r;
    }
    function w(e, t, n) {
      return this.constructor(e, n);
    }
    function te(e, t, n, r, o) {
      e._disable ||
        ((e._disable = !0),
        (e.__ref = t.ref),
        (e.__key = t.key),
        delete t.ref,
        delete t.key,
        void 0 === e.constructor.getDerivedStateFromProps &&
          (!e.base || o
            ? e.componentWillMount && e.componentWillMount()
            : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)),
        r &&
          r !== e.context &&
          (e.prevContext || (e.prevContext = e.context), (e.context = r)),
        e.prevProps || (e.prevProps = e.props),
        (e.props = t),
        (e._disable = !1),
        0 !== n &&
          (1 !== n && !1 === _.syncComponentUpdates && e.base
            ? a(e)
            : j(e, 1, o)),
        u(e.__ref, e));
    }
    function j(e, t, n, r) {
      if (!e._disable) {
        var o = e.props,
          i = e.state,
          a = e.context,
          u = e.prevProps || o,
          c = e.prevState || i,
          s = e.prevContext || a,
          l = e.base,
          f = e.nextBase,
          d = l || f,
          p = e._component,
          h = !1,
          m = s;
        if (
          (e.constructor.getDerivedStateFromProps &&
            ((i = x(x({}, i), e.constructor.getDerivedStateFromProps(o, i))),
            (e.state = i)),
          l &&
            ((e.props = u),
            (e.state = c),
            (e.context = s),
            2 !== t &&
            e.shouldComponentUpdate &&
            !1 === e.shouldComponentUpdate(o, i, a)
              ? (h = !0)
              : e.componentWillUpdate && e.componentWillUpdate(o, i, a),
            (e.props = o),
            (e.state = i),
            (e.context = a)),
          (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
          (e._dirty = !1),
          !h)
        ) {
          (s = e.render(o, i, a)),
            e.getChildContext && (a = x(x({}, a), e.getChildContext())),
            l &&
              e.getSnapshotBeforeUpdate &&
              (m = e.getSnapshotBeforeUpdate(u, c));
          var v,
            y,
            g,
            o = s && s.nodeName;
          if (
            ("function" == typeof o
              ? ((i = Y(s)),
                (g = p) && g.constructor === o && i.key == g.__key
                  ? te(g, i, 1, a, !1)
                  : ((v = g),
                    (e._component = g = ee(o, i, a)),
                    (g.nextBase = g.nextBase || f),
                    (g._parentComponent = e),
                    te(g, i, 0, a, !1),
                    j(g, 1, n, !0)),
                (y = g.base))
              : ((o = d),
                (v = p) && (o = e._component = null),
                (!d && 1 !== t) ||
                  (o && (o._component = null),
                  (y = O(o, s, a, n || !l, d && d.parentNode, !0)))),
            d &&
              y !== d &&
              g !== p &&
              (f = d.parentNode) &&
              y !== f &&
              (f.replaceChild(y, d), v || ((d._component = null), K(d, !1))),
            v && ne(v),
            (e.base = y) && !r)
          ) {
            for (var b = e, w = e; (w = w._parentComponent); ) (b = w).base = y;
            (y._component = b), (y._componentConstructor = b.constructor);
          }
        }
        for (
          !l || n
            ? E.push(e)
            : h ||
              (e.componentDidUpdate && e.componentDidUpdate(u, c, m),
              _.afterUpdate && _.afterUpdate(e));
          e._renderCallbacks.length;

        )
          e._renderCallbacks.pop().call(e);
        k || r || A();
      }
    }
    function ne(e) {
      _.beforeUnmount && _.beforeUnmount(e);
      var t = e.base,
        n =
          ((e._disable = !0),
          e.componentWillUnmount && e.componentWillUnmount(),
          (e.base = null),
          e._component);
      n
        ? ne(n)
        : t &&
          (null != t.__preactattr_ && u(t.__preactattr_.ref, null),
          $((e.nextBase = t)),
          h.push(e),
          p(t)),
        u(e.__ref, null);
    }
    function m(e, t) {
      (this._dirty = !0),
        (this.context = t),
        (this.props = e),
        (this.state = this.state || {}),
        (this._renderCallbacks = []);
    }
    function v(e, t, n) {
      return O(n, e, {}, !1, t, !1);
    }
    function y() {
      return {};
    }
    x(m.prototype, {
      setState: function (e, t) {
        this.prevState || (this.prevState = this.state),
          (this.state = x(
            x({}, this.state),
            "function" == typeof e ? e(this.state, this.props) : e
          )),
          t && this._renderCallbacks.push(t),
          a(this);
      },
      forceUpdate: function (e) {
        e && this._renderCallbacks.push(e), j(this, 2);
      },
      render: function () {},
    }),
      (e.default = {
        h: n,
        createElement: n,
        cloneElement: o,
        createRef: y,
        Component: m,
        render: v,
        rerender: f,
        options: _,
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActionType = void 0),
      (t.ActionType = {
        OpenLightbox: "OPEN_LIGHTBOX",
        CloseLightbox: "CLOSE_LIGHTBOX",
        BreakpointChanged: "BREAKPOINT_CHANGED",
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "runTextFixes", function () {
        return v;
      }),
      n.d(t, "initText", function () {
        return y;
      });
    var o = n(2),
      r = n(1),
      t = n(0),
      i = n.n(t);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t, n) {
      return (
        (t = (function (e) {
          e = (function (e, t) {
            if ("object" != a(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 === n) return ("string" === t ? String : Number)(e);
            n = n.call(e, t || "default");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e, "string");
          return "symbol" == a(e) ? e : e + "";
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    (c = [
      "h1",
      "h2",
      "h3",
      "h4",
      "span",
      ".lp-pom-text",
      /^\#lp\-pom\-text\-/,
    ]),
      (s = function (e) {
        return c.some(e.match.bind(e));
      }),
      (l = [
        "font-family",
        "font-size",
        "font-weight",
        "font-height",
        "letter-spacing",
      ]);
    var c,
      s,
      l,
      f = function () {
        return Object(r.arrayFrom)(document.styleSheets)
          .filter(d)
          .some(function (e) {
            return Object(r.arrayFrom)(e.rules || []).some(h);
          });
      };
    function d(e) {
      return (
        "STYLE" === (e = e.ownerNode).tagName &&
        null === e.getAttribute("data-page-type")
      );
    }
    function p(e) {
      return l.some(e.match.bind(e));
    }
    function h(e) {
      return (
        e.selectorText &&
        e.selectorText
          .split(/[^\#\.\-\_0-9a-z]/i)
          .filter(function (e) {
            return e && 0 < e.length;
          })
          .some(s) &&
        Object(r.arrayFrom)(e.style || []).some(p)
      );
    }
    var m = {
      _heightErrorAllowance: window.innerWidth <= 600 ? 32 : 16,
      _getTextElementMetrics: function () {
        return this.textElements
          .map(function (e) {
            return u({}, e.id, {
              designHeight: parseInt(window.getComputedStyle(e).height, 10),
            });
          })
          .reduce(function (e, t) {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? Object(arguments[e]) : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  r.push.apply(
                    r,
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  ),
                  r.forEach(function (e) {
                    u(t, e, n[e]);
                  });
              }
              return t;
            })({}, e, t);
          }, {});
      },
      _NO_SUB_PIXEL: "no-sub-pixel",
      adjustTextHeight: function (e, t) {
        var n;
        e &&
          ((n = this._heightErrorAllowance),
          this._applySubPixelLetterSpacingFix(e, t, n) ===
            this._NO_SUB_PIXEL) &&
          this._adjustIfSubPixelNotEnough(e, t, n);
      },
      _adjustIfSubPixelNotEnough: function (e, t, n) {
        var r = this._applyWordSpacing1PxFix(e);
        return (
          e.offsetHeight + n < t
            ? ((e.style.wordSpacing = "0px"),
              (r =
                "word-spacing: 0px; width " +
                this._applyWidthIncreaseFix(e, t, n, 10)))
            : e.offsetHeight - n > t &&
              (r =
                "word-spacing: -1px; width " +
                this._applyWidthIncreaseFix(e, t, n, 30)),
          r
        );
      },
      _applySubPixelLetterSpacingFix: function (e, t, n, r) {
        var o = e.offsetHeight,
          i = 0;
        for (r = r || -2; e.offsetHeight - n > t && r < i; )
          if (
            ((e.style.letterSpacing = (i -= 0.05) + "px"),
            -0.85 <= i && e.offsetHeight === o)
          )
            return (e.style.letterSpacing = "0px"), this._NO_SUB_PIXEL;
        return i;
      },
      _applyWordSpacing1PxFix: function (e) {
        return (e.style.wordSpacing = "-1px"), "word-spacing: -1px";
      },
      _applyWidthIncreaseFix: function (e, t, n, r) {
        for (var o = e.offsetWidth, i = 1; e.offsetHeight - n > t && i <= r; )
          (e.style.width = o + i + "px"), i++;
        var a = this._getCurrentTransformMatrix(e),
          u = (a[0] || "").trim() || 1,
          u = ((1 - i / 250) * (u <= 1 ? u : 1)).toFixed(3),
          a = "scale(" + u + "," + ((a[3] || "").trim() || 1) + ")";
        return (
          u < 1 &&
            ((e.style.transform = a),
            (e.style.webkitTransform = a),
            (e.style.transformOrigin = "top left"),
            (e.style.webkitTransformOrigin = "top left")),
          i
        );
      },
      _getCurrentTransformMatrix: function (e) {
        return window
          .getComputedStyle(e)
          .webkitTransform.slice(7, -1)
          .split(", ");
      },
      _adjustTextHeightOLD: function (e, t) {
        for (
          var n = 1, r = parseInt(window.getComputedStyle(e).width, 10);
          e.offsetHeight - this._heightErrorAllowance > t && n <= 50;

        )
          (e.style.width = r + n + "px"), n++;
      },
      runTextFixes: function () {
        (window.ub &&
          window.ub.page &&
          window.ub.page.disableTextAdjustments) ||
          setTimeout(this.fixTextHeights.bind(this), 250);
      },
      fixTextHeights: function () {
        var n,
          r = this;
        try {
          n = f();
        } catch (e) {
          (n = !0), o.warn("[Text]", e);
        }
        (this.textElements =
          this.textElements || i()(".lp-pom-text, .lp-form-label")),
          (this.textElementMetrics =
            this.textElementMetrics || this._getTextElementMetrics());
        var e = n ? "98%" : "none",
          t = document.createElement("style");
        (t.type = "text/css"),
          (t.textContent =
            "@media only screen and (max-width: 480px), only screen and (max-device-width: 480px) {* {-webkit-text-size-adjust: ".concat(
              e,
              ";}}"
            )),
          document.head.appendChild(t),
          this.textElements.forEach(function (e) {
            try {
              var t = r.textElementMetrics[e.id].designHeight;
              (e.style.height = "auto"),
                n
                  ? r._adjustTextHeightOLD(e, t)
                  : e.offsetHeight - r._heightErrorAllowance > t &&
                    -1 === window.location.search.indexOf("none") &&
                    r.adjustTextHeight(e, t);
            } catch (e) {
              o.warn("[Text]", e);
            }
          });
      },
    };
    function v() {
      m.runTextFixes();
    }
    function y() {
      (window.ub.page.webFonts && window.ub.page.webFonts.length) || v();
    }
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      t = (Object.defineProperty(t, "__esModule", { value: !0 }), r(n(21))),
      o = r(n(23)),
      i = r(n(32)),
      a = r(n(7)),
      u = r(n(33)),
      c = r(n(36)),
      s = r(n(39)),
      l = r(n(41)),
      f = r(n(42)),
      d = r(n(43)),
      p = r(n(51)),
      h = r(n(52)),
      m = r(n(53)),
      v = n(19),
      y = r(n(54)),
      g = r(n(55)),
      b = r(n(59)),
      r = r(n(60));
    (0, t.default)(),
      (0, i.default)(),
      (0, a.default)(),
      (0, s.default)(),
      (0, c.default)(),
      (0, f.default)(),
      (0, d.default)(),
      (0, p.default)(),
      (0, h.default)(),
      (0, m.default)(),
      (0, g.default)(),
      (0, b.default)(),
      (0, r.default)(),
      (0, o.default)(),
      (0, u.default)(),
      (0, y.default)(),
      (0, v.initText)();
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(6)),
      i = r(n(0));
    t.default = function (t) {
      void 0 === t && (t = window),
        (0, i.default)(
          'a[data-params="true"], *[data-params="true"] a',
          t.document
        ).forEach(function (e) {
          e.href = (0, o.addQueryParamsToUrl)(
            e.href,
            (0, o.getQueryParams)(t.location.search)
          );
        });
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      if (((t = t.split(":")[0]), !(e = +e))) return !1;
      switch (t) {
        case "http":
        case "ws":
          return 80 !== e;
        case "https":
        case "wss":
          return 443 !== e;
        case "ftp":
          return 21 !== e;
        case "gopher":
          return 70 !== e;
        case "file":
          return !1;
      }
      return 0 !== e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      u =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleDownloadButtonClick = void 0),
        i(n(7))),
      c = n(1),
      s = a(n(0));
    function l(e, t) {
      void 0 === t && (t = window);
      var n = e.currentTarget;
      n &&
        (n = n.getAttribute("data-asset-uuid")) &&
        (n = (function (e, t) {
          void 0 === t && (t = window);
          return t.sessionStorage.getItem("ub-asset-" + e);
        })(n, t)) &&
        (e.preventDefault(), e.stopPropagation(), t.open(n, "_blank"));
    }
    function f(e) {
      e.preventDefault(), u.close();
    }
    (t.handleDownloadButtonClick = l),
      (t.default = function () {
        (0, s.default)("a.lp-pom-button[data-asset-uuid]").forEach(function (
          e
        ) {
          return e.addEventListener("click", l);
        }),
          u.pageIsEmbeddable() &&
            (0, s.default)('a.lp-pom-button[data-close="true"]').forEach(
              function (e) {
                return e.addEventListener("click", f);
              }
            ),
          (0, c.arrayFrom)(window.document.styleSheets)
            .filter(function (e) {
              return (
                e.ownerNode instanceof HTMLStyleElement &&
                "page-styles" === e.ownerNode.title
              );
            })
            .forEach(function (e) {
              e &&
                e instanceof CSSStyleSheet &&
                (0, c.arrayFrom)(e.cssRules)
                  .filter(function (e) {
                    return (
                      e instanceof CSSStyleRule &&
                      /#lp-pom-button-\d+:(?:active|hover)/.test(e.selectorText)
                    );
                  })
                  .map(function (e) {
                    return (
                      e instanceof CSSStyleRule &&
                      e.style.backgroundImage &&
                      e.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)
                    );
                  })
                  .map(function (e) {
                    return e ? e[1] : null;
                  })
                  .filter(Boolean)
                  .forEach(function (e) {
                    window.document.createElement("img").src = e || "";
                  });
            });
      });
  },
  function (e, t, n) {
    "use strict";
    !function (t, e) {
      function n(t) {
        var n = this.constructor;
        return this.then(
          function (e) {
            return n.resolve(t()).then(function () {
              return e;
            });
          },
          function (e) {
            return n.resolve(t()).then(function () {
              return n.reject(e);
            });
          }
        );
      }
      var r = setTimeout;
      function o() {}
      function i(e) {
        if (!(this instanceof i))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          f(e, this);
      }
      function a(n, r) {
        for (; 3 === n._state; ) n = n._value;
        0 === n._state
          ? n._deferreds.push(r)
          : ((n._handled = !0),
            i._immediateFn(function () {
              var e,
                t = 1 === n._state ? r.onFulfilled : r.onRejected;
              if (null === t) (1 === n._state ? u : c)(r.promise, n._value);
              else {
                try {
                  e = t(n._value);
                } catch (e) {
                  return void c(r.promise, e);
                }
                u(r.promise, e);
              }
            }));
      }
      function u(t, e) {
        try {
          if (e === t)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
            var n = e.then;
            if (e instanceof i)
              return (t._state = 3), (t._value = e), void s(t);
            if ("function" == typeof n)
              return void f(
                ((r = n),
                (o = e),
                function () {
                  r.apply(o, arguments);
                }),
                t
              );
          }
          (t._state = 1), (t._value = e), s(t);
        } catch (e) {
          c(t, e);
        }
        var r, o;
      }
      function c(e, t) {
        (e._state = 2), (e._value = t), s(e);
      }
      function s(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          i._immediateFn(function () {
            e._handled || i._unhandledRejectionFn(e._value);
          });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
          a(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function l(e, t, n) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.promise = n);
      }
      function f(e, t) {
        var n = !1;
        try {
          e(
            function (e) {
              n || ((n = !0), u(t, e));
            },
            function (e) {
              n || ((n = !0), c(t, e));
            }
          );
        } catch (e) {
          n || ((n = !0), c(t, e));
        }
      }
      (i.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (i.prototype.then = function (e, t) {
          var n = new this.constructor(o);
          return a(this, new l(e, t, n)), n;
        }),
        (i.prototype.finally = n),
        (i.all = function (t) {
          return new i(function (o, i) {
            if (!t || void 0 === t.length)
              throw new TypeError("Promise.all accepts an array");
            var a = Array.prototype.slice.call(t);
            if (0 === a.length) return o([]);
            var u = a.length;
            for (var e = 0; e < a.length; e++)
              !(function t(n, e) {
                try {
                  if (e && ("object" == typeof e || "function" == typeof e)) {
                    var r = e.then;
                    if ("function" == typeof r)
                      return void r.call(
                        e,
                        function (e) {
                          t(n, e);
                        },
                        i
                      );
                  }
                  (a[n] = e), 0 == --u && o(a);
                } catch (e) {
                  i(e);
                }
              })(e, a[e]);
          });
        }),
        (i.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === i
            ? t
            : new i(function (e) {
                e(t);
              });
        }),
        (i.reject = function (n) {
          return new i(function (e, t) {
            t(n);
          });
        }),
        (i.race = function (o) {
          return new i(function (e, t) {
            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
          });
        }),
        (i._immediateFn =
          "function" == typeof t
            ? function (e) {
                t(e);
              }
            : function (e) {
                r(e, 0);
              }),
        (i._unhandledRejectionFn = function (e) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", e);
        });
      var d = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== e) return e;
        throw new Error("unable to locate global object");
      })();
      "Promise" in d
        ? d.Promise.prototype.finally || (d.Promise.prototype.finally = n)
        : (d.Promise = i);
    }.call(this, n(13).setImmediate, n(4));
  },
  function (e, t, n) {
    !function (e, p) {
      !(function (n, i) {
        "use strict";
        var r, a, u, o, c, s, t, e;
        function l(e) {
          delete a[e];
        }
        function f(e) {
          if (u) setTimeout(f, 0, e);
          else {
            var t = a[e];
            if (t) {
              u = !0;
              try {
                var n = t,
                  r = n.callback,
                  o = n.args;
                switch (o.length) {
                  case 0:
                    r();
                    break;
                  case 1:
                    r(o[0]);
                    break;
                  case 2:
                    r(o[0], o[1]);
                    break;
                  case 3:
                    r(o[0], o[1], o[2]);
                    break;
                  default:
                    r.apply(i, o);
                }
              } finally {
                l(e), (u = !1);
              }
            }
          }
        }
        function d() {
          function e(e) {
            e.source === n &&
              "string" == typeof e.data &&
              0 === e.data.indexOf(t) &&
              f(+e.data.slice(t.length));
          }
          var t = "setImmediate$" + Math.random() + "$";
          n.addEventListener
            ? n.addEventListener("message", e, !1)
            : n.attachEvent("onmessage", e),
            (c = function (e) {
              n.postMessage(t + e, "*");
            });
        }
        n.setImmediate ||
          ((r = 1),
          (u = !(a = {})),
          (o = n.document),
          (e =
            (e = Object.getPrototypeOf && Object.getPrototypeOf(n)) &&
            e.setTimeout
              ? e
              : n),
          "[object process]" === {}.toString.call(n.process)
            ? (c = function (e) {
                p.nextTick(function () {
                  f(e);
                });
              })
            : !(function () {
                var e, t;
                if (n.postMessage && !n.importScripts)
                  return (
                    (e = !0),
                    (t = n.onmessage),
                    (n.onmessage = function () {
                      e = !1;
                    }),
                    n.postMessage("", "*"),
                    (n.onmessage = t),
                    e
                  );
              })()
            ? (c = n.MessageChannel
                ? (((t = new MessageChannel()).port1.onmessage = function (e) {
                    f(e.data);
                  }),
                  function (e) {
                    t.port2.postMessage(e);
                  })
                : o && "onreadystatechange" in o.createElement("script")
                ? ((s = o.documentElement),
                  function (e) {
                    var t = o.createElement("script");
                    (t.onreadystatechange = function () {
                      f(e),
                        (t.onreadystatechange = null),
                        s.removeChild(t),
                        (t = null);
                    }),
                      s.appendChild(t);
                  })
                : function (e) {
                    setTimeout(f, 0, e);
                  })
            : d(),
          (e.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));
            for (
              var t = new Array(arguments.length - 1), n = 0;
              n < t.length;
              n++
            )
              t[n] = arguments[n + 1];
            return (a[r] = { callback: e, args: t }), c(r), r++;
          }),
          (e.clearImmediate = l));
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(4), n(26));
  },
  function (e, t) {
    var n,
      r,
      e = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (e) {
      n = o;
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : i;
    } catch (e) {
      r = i;
    }
    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return (n = setTimeout)(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    var u,
      c = [],
      s = !1,
      l = -1;
    function f() {
      s &&
        u &&
        ((s = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length) &&
        d();
    }
    function d() {
      if (!s) {
        for (var e = a(f), t = ((s = !0), c.length); t; ) {
          for (u = c, c = []; ++l < t; ) u && u[l].run();
          (l = -1), (t = c.length);
        }
        (u = null),
          (s = !1),
          !(function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === i || !r) && clearTimeout) return (r = clearTimeout)(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function h() {}
    (e.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new p(e, t)), 1 !== c.length || s || a(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (e.title = "browser"),
      (e.browser = !0),
      (e.env = {}),
      (e.argv = []),
      (e.version = ""),
      (e.versions = {}),
      (e.on = h),
      (e.addListener = h),
      (e.once = h),
      (e.off = h),
      (e.removeListener = h),
      (e.removeAllListeners = h),
      (e.emit = h),
      (e.prependListener = h),
      (e.prependOnceListener = h),
      (e.listeners = function (e) {
        return [];
      }),
      (e.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (e.cwd = function () {
        return "/";
      }),
      (e.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (e.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    self.fetch ||
      (self.fetch = function (c, s) {
        return (
          (s = s || {}),
          new Promise(function (e, t) {
            function n() {
              return {
                ok: 2 == ((o.status / 100) | 0),
                statusText: o.statusText,
                status: o.status,
                url: o.responseURL,
                text: function () {
                  return Promise.resolve(o.responseText);
                },
                json: function () {
                  return Promise.resolve(JSON.parse(o.responseText));
                },
                blob: function () {
                  return Promise.resolve(new Blob([o.response]));
                },
                clone: n,
                headers: {
                  keys: function () {
                    return i;
                  },
                  entries: function () {
                    return a;
                  },
                  get: function (e) {
                    return u[e.toLowerCase()];
                  },
                  has: function (e) {
                    return e.toLowerCase() in u;
                  },
                },
              };
            }
            var r,
              o = new XMLHttpRequest(),
              i = [],
              a = [],
              u = {};
            for (r in (o.open(s.method || "get", c, !0),
            (o.onload = function () {
              o
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
                  i.push((t = t.toLowerCase())),
                    a.push([t, n]),
                    (u[t] = u[t] ? u[t] + "," + n : n);
                }),
                e(n());
            }),
            (o.onerror = t),
            (o.withCredentials = "include" == s.credentials),
            s.headers))
              o.setRequestHeader(r, s.headers[r]);
            o.send(s.body || null);
          })
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      l =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.performFormAction = void 0),
        a(n(11))),
      f = i(n(7)),
      d = n(2),
      p = n(3),
      h = n(29),
      m = a(n(10)),
      v = n(6),
      y = a(n(0)),
      u = n(30);
    function g(e) {
      var t = u(e, { hash: !0 });
      return (
        delete t.pageId,
        delete t.pageVariant,
        Object.keys(t)
          .filter(function (e) {
            return /^ubafs-/.test(e);
          })
          .forEach(function (e) {
            delete t[e];
          }),
        t
      );
    }
    function b(e, t) {
      return (0, v.addQueryParamsToUrl)(e, g(t));
    }
    t.performFormAction = function (e, t, n) {
      var r,
        o = (n = void 0 === n ? window : n).ub.form;
      switch (
        ((0, d.log)("[Form]", "Performing form action:", o.action), o.action)
      ) {
        case h.FormAction.Alert:
          return void n.alert(o.message);
        case h.FormAction.FormConfirmation:
          var i = e,
            a = n;
          void 0 === a && (a = window), (i = g(e));
          try {
            a.sessionStorage.setItem("ubFormData", JSON.stringify(i));
          } catch (e) {
            (0, d.warn)("[Form - storeFormData]", e);
          }
          var u = t,
            c = n;
          if ((void 0 === c && (c = window), u.protected_assets))
            try {
              Object.keys(u.protected_assets).forEach(function (e) {
                u.protected_assets &&
                  c.sessionStorage.setItem(
                    "ub-asset-".concat(e),
                    u.protected_assets[e]
                  );
              });
            } catch (e) {
              (0, d.warn)("[Form - storeProtectedAssets]", e);
            }
          (a = o.url), (i = n.location.href);
          var a = (0, l.default)(a, i).toString(),
            i = (0, v.addQueryParamsToUrl)(
              a,
              (0, v.getQueryParams)(n.location.search)
            ),
            s = (0, m.default)(n);
          return void (f.pageIsEmbeddable()
            ? f.showFormConfirmation(i, o.lightboxSize)
            : s && s.ub.lightbox.openLightbox(i, o.lightboxSize, !1));
        case h.FormAction.ExternalLightbox:
          a = o.includeFormData ? b(o.url, e) : o.url;
          return void (
            (s = (0, m.default)(n)) &&
            s.ub.lightbox.openLightbox(a, o.lightboxSize, !0)
          );
        case h.FormAction.GoToUrl:
          return !o.url && f.pageIsEmbeddable()
            ? void f.close()
            : ((a = o.includeFormData ? b(o.url, e) : o.url),
              void ((s =
                "_parent" === o.target ||
                n.ub.page.usedAs === p.UsedAs.LightboxPage
                  ? n.parent
                  : n).location.href = a));
        case h.FormAction.PostToUrl:
          !o.url && f.pageIsEmbeddable()
            ? f.close()
            : ((r =
                HTMLFormElement.prototype.getAttribute.call(e, "action") || ""),
              (e.method = "POST"),
              (e.action = o.includeFormData ? b(o.url, e) : o.url),
              (e.target = o.target),
              (0, y.default)('input[name^="ubafs-"]', e).forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
              HTMLFormElement.prototype.submit.call(e),
              setTimeout(function () {
                e.action = r;
              }));
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FormAction = void 0),
      (t.FormAction = {
        Alert: "message",
        ExternalLightbox: "externalLightbox",
        FormConfirmation: "modal",
        GoToUrl: "url",
        PostToUrl: "post",
      });
  },
  function (e, t) {
    var m = /^(?:submit|button|image|reset|file)$/i,
      v = /^(?:input|select|textarea|keygen)/i,
      o = /(\[[^\[\]]*\])/g;
    function y(e, t, n) {
      var r;
      return (
        t.match(o)
          ? (function e(t, n, r) {
              var o, i, a;
              return 0 === n.length
                ? r
                : ((i = (o = n.shift()).match(/^\[(.+?)\]$/)),
                  "[]" === o
                    ? ((t = t || []),
                      (Array.isArray(t)
                        ? t
                        : ((t._values = t._values || []), t._values)
                      ).push(e(null, n, r)))
                    : i
                    ? ((a = +(i = i[1])),
                      isNaN(a)
                        ? ((t = t || {})[i] = e(t[i], n, r))
                        : ((t = t || [])[a] = e(t[a], n, r)))
                    : (t[o] = e(t[o], n, r)),
                  t);
            })(
              e,
              (function (e) {
                var t = [],
                  n = new RegExp(o),
                  r = /^([^\[\]]*)/.exec(e);
                for (r[1] && t.push(r[1]); null !== (r = n.exec(e)); )
                  t.push(r[1]);
                return t;
              })(t),
              n
            )
          : (r = e[t])
          ? (Array.isArray(r) || (e[t] = [r]), e[t].push(n))
          : (e[t] = n),
        e
      );
    }
    function g(e, t, n) {
      return (
        (n = n.replace(/(\r)?\n/g, "\r\n")),
        (n = (n = encodeURIComponent(n)).replace(/%20/g, "+")),
        e + (e ? "&" : "") + encodeURIComponent(t) + "=" + n
      );
    }
    e.exports = function (e, t) {
      "object" != typeof t
        ? (t = { hash: !!t })
        : void 0 === t.hash && (t.hash = !0);
      for (
        var n = t.hash ? {} : "",
          r = t.serializer || (t.hash ? y : g),
          o = e && e.elements ? e.elements : [],
          i = Object.create(null),
          a = 0;
        a < o.length;
        ++a
      ) {
        var u = o[a];
        if (
          (t.disabled || !u.disabled) &&
          u.name &&
          v.test(u.nodeName) &&
          !m.test(u.type)
        ) {
          var c = u.name,
            s = u.value;
          if (
            (("checkbox" !== u.type && "radio" !== u.type) ||
              u.checked ||
              (s = void 0),
            t.empty)
          ) {
            if (
              ("checkbox" !== u.type || u.checked || (s = ""),
              "radio" === u.type &&
                (i[u.name] || u.checked
                  ? u.checked && (i[u.name] = !0)
                  : (i[u.name] = !1)),
              null == s && "radio" == u.type)
            )
              continue;
          } else if (!s) continue;
          if ("select-multiple" === u.type) {
            for (var s = [], l = u.options, f = !1, d = 0; d < l.length; ++d) {
              var p = l[d],
                h = t.empty && !p.value,
                h = p.value || h;
              p.selected &&
                h &&
                ((f = !0),
                (n =
                  t.hash && "[]" !== c.slice(c.length - 2)
                    ? r(n, c + "[]", p.value)
                    : r(n, c, p.value)));
            }
            !f && t.empty && (n = r(n, c, ""));
          } else n = r(n, c, s);
        }
      }
      if (t.empty) for (var c in i) i[c] || (n = r(n, c, ""));
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(2)),
      i = r(n(0));
    t.default = function (e, t) {
      void 0 === t && (t = window);
      var n = (r = HTMLFormElement.prototype).checkValidity,
        r = r.reportValidity;
      return "function" == typeof n
        ? !!n.call(e) ||
            (r
              ? r.call(e)
              : t.alert("Please ensure all fields are completed and valid."),
            !1)
        : ((0, o.log)(
            "[Form]",
            "Browser doesn't support validation; using manual fallback validation"
          ),
          !!(
            (0, i.default)(
              "input[required][type=text],input[required][type=email],input[required][type=tel],textarea[required]",
              e
            ).every(function (e) {
              return Boolean(e.value);
            }) &&
            (0, i.default)("input[required][type=radio]", e).every(function (
              e
            ) {
              return e.checked;
            })
          ) || (t.alert("Please complete all required fields."), !1));
    };
  },
  function (e, t, n) {
    "use strict";
    var o,
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      u =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return a(t, e), t;
        },
      c =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      s = (Object.defineProperty(t, "__esModule", { value: !0 }), u(n(2))),
      l = n(6),
      f = c(n(0));
    ((u = o = o || {}).UpperCase = "uppercase"),
      (u.LowerCase = "lowercase"),
      (u.TitleCase = "titlecase"),
      (u.Capitalized = "capitalized"),
      (t.default = function (e) {
        void 0 === e && (e = window);
        var r,
          t = (0, f.default)("ub\\:clientsidedynamic", e.document);
        0 !== t.length &&
          ((r = i(
            i({}, (0, l.getQueryParams)(e.location.search)),
            (function (e) {
              try {
                return JSON.parse(e.getItem("ubFormData") || "{}");
              } catch (e) {
                return s.warn("[Client-side DTR]", e), {};
              }
            })(e.sessionStorage)
          )),
          t.forEach(function (e) {
            var t,
              n = e.getAttribute("parameter");
            n &&
              r[n] &&
              ((t = e.getAttribute("method")),
              (e.innerHTML = (function (e, t) {
                var n = decodeURI(e);
                switch (t) {
                  case o.UpperCase:
                    return n.toUpperCase();
                  case o.LowerCase:
                    return n.toLowerCase();
                  case o.TitleCase:
                    return n.replace(/(?:^|\s)\w/g, function (e) {
                      return e.toUpperCase();
                    });
                  case o.Capitalized:
                    return ""
                      .concat(n.charAt(0).toUpperCase())
                      .concat(n.slice(1));
                  default:
                    return n;
                }
              })(r[n], t)));
          }));
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), r(n(0))),
      i = r(n(34)),
      a = n(12),
      u = n(35);
    t.default = function () {
      (0, o.default)(".lp-pom-form form").forEach(function (e) {
        (0, i.default)(e),
          (0, u.initValidation)(e),
          (0, a.initSubmitHandler)(e);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      u = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(9))),
      c = a(n(0));
    t.default = function (e, t) {
      void 0 === t && (t = window);
      var n = u.parse(t.location.search);
      (0, c.default)(
        'input:not([type="radio"]):not([type="checkbox"]):not([name="pageId"]):not([name="pageVariant"]),textarea',
        e
      ).forEach(function (e) {
        var t = n[e.name];
        t && (e.value = t);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initValidation =
          t.stripUnicodeChars =
          t.setCheckboxValidity =
          t.setFieldCustomValidity =
          t.setFieldValidityMessage =
            void 0),
        n(2)),
      i = r(n(0)),
      a = r(n(8));
    function u(e) {
      var t;
      return (
        e && (((t = document.createElement("textarea")).innerHTML = e), t.value)
      );
    }
    function c(e, t) {
      t =
        (t = void 0 === t ? window : t).ub.form.validationMessages[e.name] ||
        {};
      e.validity.valueMissing
        ? e.setCustomValidity(u(t.required) || "This field is required.")
        : "email" === e.type &&
          (e.validity.patternMismatch || e.validity.typeMismatch)
        ? e.setCustomValidity(
            u(t.email) || "Please enter a valid email address."
          )
        : "tel" === e.type && e.validity.patternMismatch
        ? e.setCustomValidity(
            u(t.phone) || "Please enter a valid phone number."
          )
        : e.validity.patternMismatch
        ? e.setCustomValidity(u(t.custom) || "Please enter a valid value.")
        : e.setCustomValidity("");
    }
    function s(t, e) {
      var n = (e = void 0 === e ? window : e).ub.form.customValidators;
      !n ||
        t.validity.valueMissing ||
        t.validity.typeMismatch ||
        t.validity.patternMismatch ||
        (!t.required && "" === t.value) ||
        ((e = Object.keys(e.ub.form.validationRules[t.name] || {})
          .filter(function (e) {
            return "required" !== e && "phone" !== e && "email" !== e;
          })
          .map(function (e) {
            return n[e];
          })
          .filter(Boolean)
          .filter(function (e) {
            try {
              return !e.isValid(t.value, t);
            } catch (e) {
              return (0, o.warn)("[Form]", "Custom validator error:", e), !1;
            }
          })),
        t.setCustomValidity(
          e.length ? e[0].message || "Please enter a valid value." : ""
        ));
    }
    function l(e, t) {
      void 0 === t && (t = window);
      var n = e.form,
        r = null !== e.getAttribute("data-required"),
        o = HTMLFormElement.prototype.querySelector;
      r &&
      null ===
        o.call(n, 'input[type=checkbox][name="'.concat(e.name, '"]:checked'))
        ? ((r = t.ub.form.validationMessages[e.name] || {}),
          e.setCustomValidity(
            u(r.required || r.custom) || "Please select one or more options."
          ))
        : e.setCustomValidity("");
    }
    function f(e) {
      var t = /[\u0000]/g;
      (0, i.default)(
        "input[type=text],input[type=email],input[type=tel],textarea",
        e
      ).forEach(function (e) {
        e.value = null !== (e = e.value.replace(t, "")).match(/^ *$/) ? "" : e;
      });
    }
    function d(e) {
      (0, i.default)(
        "input[type=text],input[type=email],input[type=tel],input[type=radio],textarea,select",
        e
      ).forEach(function (e) {
        return c(e);
      }),
        (0, i.default)(
          "input[type=text],input[type=email],input[type=tel],textarea,select",
          e
        ).forEach(function (e) {
          return s(e);
        }),
        (0, i.default)("input[type=checkbox]", e).forEach(function (e) {
          return l(e);
        });
    }
    (t.setFieldValidityMessage = c),
      (t.setFieldCustomValidity = s),
      (t.setCheckboxValidity = l),
      (t.stripUnicodeChars = f),
      (t.initValidation = function (t) {
        var e = HTMLFormElement.prototype.addEventListener;
        f(t),
          d(t),
          e.call(t, "input", function () {
            return d(t);
          }),
          e.call(t, "change", function () {
            return d(t);
          }),
          (0, i.default)("select", t).forEach(function (e) {
            return e.addEventListener("blur", function () {
              return d(t);
            });
          }),
          (0, a.default)(t).addEventListener("click", function () {
            f(t), d(t);
          }),
          e.call(t, "reset", function () {
            return setTimeout(function () {
              return d(t);
            });
          });
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      u = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(2))),
      c = n(3),
      s = a(n(0)),
      l = n(37),
      f = a(n(38));
    t.default = function (t) {
      var e = (t = void 0 === t ? window : t).ga,
        n = t.gtag;
      !t.ub.googleAnalyticsTrackingId ||
        ("function" != typeof e && "function" != typeof n) ||
        (u.log("[Google Analytics]", "Sending pageview"),
        t.ub.page.variantId && t.ub.page.usedAs === c.UsedAs.MainPage
          ? ("function" == typeof e &&
              e("send", {
                hitType: "pageview",
                page:
                  t.location.pathname + t.ub.page.variantId + t.location.search,
              }),
            "function" == typeof n &&
              n("event", "page_variant", { variant_id: t.ub.page.variantId }))
          : "function" == typeof e && e("send", { hitType: "pageview" }),
        (0, s.default)(
          "a.lp-pom-button,.lp-pom-image a,.lp-pom-text a",
          t.document
        ).forEach(function (e) {
          return e.addEventListener("click", function (e) {
            return (0, f.default)(e, t);
          });
        }),
        t.ub.hooks.afterFormSubmit.push(function (e) {
          e = e.formElement;
          return (0, l.handleFormSubmit)(e, t);
        }));
    };
  },
  function (e, t, n) {
    "use strict";
    var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      i =
        (this && this.__awaiter) ||
        function (e, a, u, c) {
          return new (u = u || Promise)(function (n, t) {
            function r(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof u
                    ? t
                    : new u(function (e) {
                        e(t);
                      })
                  ).then(r, o);
            }
            i((c = c.apply(e, a || [])).next());
          });
        },
      a =
        (this && this.__generator) ||
        function (r, o) {
          var i,
            a,
            u,
            c = {
              label: 0,
              sent: function () {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: [],
            },
            s = { next: e(0), throw: e(1), return: e(2) };
          return (
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function e(n) {
            return function (e) {
              var t = [n, e];
              if (i) throw new TypeError("Generator is already executing.");
              for (; (c = s && t[(s = 0)] ? 0 : c); )
                try {
                  if (
                    ((i = 1),
                    a &&
                      (u =
                        2 & t[0]
                          ? a.return
                          : t[0]
                          ? a.throw || ((u = a.return) && u.call(a), 0)
                          : a.next) &&
                      !(u = u.call(a, t[1])).done)
                  )
                    return u;
                  switch (((a = 0), (t = u ? [2 & t[0], u.value] : t)[0])) {
                    case 0:
                    case 1:
                      u = t;
                      break;
                    case 4:
                      return c.label++, { value: t[1], done: !1 };
                    case 5:
                      c.label++, (a = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !(u = 0 < (u = c.trys).length && u[u.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === t[0] && (!u || (t[1] > u[0] && t[1] < u[3])))
                        c.label = t[1];
                      else if (6 === t[0] && c.label < u[1])
                        (c.label = u[1]), (u = t);
                      else {
                        if (!(u && c.label < u[2])) {
                          u[2] && c.ops.pop(), c.trys.pop();
                          continue;
                        }
                        (c.label = u[2]), c.ops.push(t);
                      }
                  }
                  t = o.call(r, c);
                } catch (e) {
                  (t = [6, e]), (a = 0);
                } finally {
                  i = u = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            };
          }
        },
      r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      u =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleFormSubmit = void 0),
        n(1)),
      c = r(n(14)),
      s = r(n(15));
    t.handleFormSubmit = function (n, r) {
      return i(this, void 0, void 0, function () {
        var t;
        return a(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (t = (0, u.closest)(n, ".lp-pom-form")),
                (t = o(
                  {
                    category: "Form",
                    action: "Submit",
                    label: t ? "#".concat(t.id) : "",
                  },
                  t ? (0, c.default)(t) : {}
                )),
                [4, (0, s.default)(t.category, t.action, t.label, r)]
              );
            case 1:
              return e.sent(), [2];
          }
        });
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var s =
        (this && this.__assign) ||
        function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__awaiter) ||
        function (e, a, u, c) {
          return new (u = u || Promise)(function (n, t) {
            function r(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof u
                    ? t
                    : new u(function (e) {
                        e(t);
                      })
                  ).then(r, o);
            }
            i((c = c.apply(e, a || [])).next());
          });
        },
      l =
        (this && this.__generator) ||
        function (r, o) {
          var i,
            a,
            u,
            c = {
              label: 0,
              sent: function () {
                if (1 & u[0]) throw u[1];
                return u[1];
              },
              trys: [],
              ops: [],
            },
            s = { next: e(0), throw: e(1), return: e(2) };
          return (
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function e(n) {
            return function (e) {
              var t = [n, e];
              if (i) throw new TypeError("Generator is already executing.");
              for (; (c = s && t[(s = 0)] ? 0 : c); )
                try {
                  if (
                    ((i = 1),
                    a &&
                      (u =
                        2 & t[0]
                          ? a.return
                          : t[0]
                          ? a.throw || ((u = a.return) && u.call(a), 0)
                          : a.next) &&
                      !(u = u.call(a, t[1])).done)
                  )
                    return u;
                  switch (((a = 0), (t = u ? [2 & t[0], u.value] : t)[0])) {
                    case 0:
                    case 1:
                      u = t;
                      break;
                    case 4:
                      return c.label++, { value: t[1], done: !1 };
                    case 5:
                      c.label++, (a = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = c.ops.pop()), c.trys.pop();
                      continue;
                    default:
                      if (
                        !(u = 0 < (u = c.trys).length && u[u.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        c = 0;
                        continue;
                      }
                      if (3 === t[0] && (!u || (t[1] > u[0] && t[1] < u[3])))
                        c.label = t[1];
                      else if (6 === t[0] && c.label < u[1])
                        (c.label = u[1]), (u = t);
                      else {
                        if (!(u && c.label < u[2])) {
                          u[2] && c.ops.pop(), c.trys.pop();
                          continue;
                        }
                        (c.label = u[2]), c.ops.push(t);
                      }
                  }
                  t = o.call(r, c);
                } catch (e) {
                  (t = [6, e]), (a = 0);
                } finally {
                  i = u = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            };
          }
        },
      u =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      f = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(2))),
      d = n(1),
      p = u(n(14)),
      h = u(n(15));
    function m(e) {
      return /clk[n,g]\//.test(e)
        ? e.replace(/clk[n,g]\//, "").replace("/", "://")
        : e;
    }
    t.default = function (u, c) {
      return a(this, void 0, void 0, function () {
        var r, o, i, a;
        return l(this, function (e) {
          switch (e.label) {
            case 0:
              return u.isTrusted
                ? ((r = u.currentTarget),
                  (o = (0, d.closest)(r, ".lp-element"))
                    ? ((a = r.getAttribute("href") || ""),
                      (i =
                        !c.navigator.sendBeacon &&
                        "_blank" !== r.target &&
                        !a.startsWith("#")) &&
                        (f.log(
                          "[Google Analytics]",
                          "Preventing default link action"
                        ),
                        u.preventDefault(),
                        u.stopPropagation(),
                        u.stopImmediatePropagation()),
                      (a = s(
                        s(
                          s(
                            {},
                            ((n = (t = a).split("/")[2] || ""),
                            t.startsWith("#") || !t
                              ? { category: "In-Page", action: t || "none" }
                              : (0, d.includes)(n, "facebook")
                              ? { category: "Social", action: "Facebook" }
                              : (0, d.includes)(n, "twitter")
                              ? { category: "Social", action: "Twitter" }
                              : (0, d.includes)(n, "linkedin")
                              ? { category: "Social", action: "Linkedin" }
                              : (0, d.includes)(n, "plus.google.com")
                              ? { category: "Social", action: "Google+" }
                              : (0, d.includes)(t, "mailto:")
                              ? {
                                  category: "Email",
                                  action: t.replace("mailto:", ""),
                                }
                              : (0, d.includes)(t, "/tel/")
                              ? {
                                  category: "Phone",
                                  action: t.split("/tel/")[1],
                                }
                              : (0, d.includes)(t, "/rel/")
                              ? { category: "Lightbox", action: "Lightbox" }
                              : /\.(pdf|doc|docx|csv)/.test(t)
                              ? { category: "Download", action: m(t) }
                              : { category: "Outbound", action: m(t) })
                          ),
                          { label: o.id ? "#".concat(o.id) : "" }
                        ),
                        (0, p.default)(o)
                      )),
                      [4, (0, h.default)(a.category, a.action, a.label, c)])
                    : [2])
                : [2];
            case 1:
              return (
                e.sent(),
                i &&
                  (f.log(
                    "[Google Analytics]",
                    "Performing default link action"
                  ),
                  r.click()),
                [2]
              );
          }
          var t, n;
        });
      });
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(40);
    t.default = function (e) {
      (e = void 0 === e ? window : e).ub.googleTagManagerContainerId &&
        e.ub.hooks.afterFormSubmit.push(function () {
          return (0, r.gtmHandleFormSubmit)(e);
        });
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.gtmHandleFormSubmit = void 0),
        i(n(2)));
    t.gtmHandleFormSubmit = function (e) {
      e.ub.googleTagManagerContainerId &&
        Array.isArray(e.dataLayer) &&
        (a.log("[Google Tag Manager]", "Adding data layer event"),
        e.dataLayer.push({ event: "gtm.formSubmit" }));
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(16)),
      i = r(n(0));
    function a(e, t, n) {
      return e.getAttribute("data-src-".concat(t, "-").concat(n, "x")) || "";
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(5);
    t.default = function () {
      var e;
      (0, r.isIos)() &&
        (e =
          document.querySelector("meta[name=viewport]") ||
          ((e = document.createElement("meta")).setAttribute(
            "name",
            "viewport"
          ),
          e.setAttribute("content", "width=device-width, initial-scale=1"),
          document.head.appendChild(e),
          e)).setAttribute(
          "content",
          "".concat(e.content, ", maximum-scale=1")
        );
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      c = (Object.defineProperty(t, "__esModule", { value: !0 }), n(17)),
      s = n(3),
      l = n(16),
      f = r(n(10)),
      d = r(n(0)),
      p = r(n(44)),
      h = r(n(50)),
      m = n(18);
    t.default = function (n) {
      var e, r, o, i;
      function a(e) {
        (o = (0, h.default)(o, e)), t();
      }
      function u() {
        a({ type: m.ActionType.CloseLightbox });
      }
      function t() {
        var e = o.activeLightbox,
          t = o.breakpoint;
        i = (0, c.render)(
          (0, c.h)(p.default, {
            isExternal: e ? e.isExternal : null,
            onClose: u,
            size: e ? e.sizes[t] : null,
            url: e ? e.url : null,
          }),
          n.document.body,
          i
        );
      }
      void 0 === n && (n = window),
        (e = n),
        (r = (0, f.default)(e)),
        (e.ub.page.lightboxTriggers || []).forEach(function (t) {
          return (0, d.default)(t.selector, e.document).forEach(function (e) {
            return e.addEventListener("click", function (e) {
              e.preventDefault(),
                r &&
                  r.ub.lightbox.openLightbox(
                    e.currentTarget.href,
                    t.sizes,
                    t.isExternal
                  );
            });
          });
        }),
        n.ub.page.usedAs === s.UsedAs.MainPage &&
          ((o = {
            activeLightbox: null,
            breakpoint: (0, l.getCurrentBreakpoint)(),
          }),
          (0, l.onBreakpointChange)(function (e) {
            return a({
              type: m.ActionType.BreakpointChanged,
              payload: { breakpoint: e },
            });
          }),
          n.addEventListener("keydown", function (e) {
            ("Escape" !== e.key && 27 !== e.keyCode) ||
              a({ type: m.ActionType.CloseLightbox });
          }),
          t(),
          (n.ub.lightbox = {
            openLightbox: function (e, t, n) {
              a({
                type: m.ActionType.OpenLightbox,
                payload: {
                  url: e,
                  sizes: t,
                  isExternal: (n = void 0 === n ? !0 : n),
                },
              });
            },
          }));
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      o,
      i =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array
              ? function (e, t) {
                  e.__proto__ = t;
                }
              : function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }))(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      u =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      c =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                a(t, e, n);
          return u(t, e), t;
        },
      s = (Object.defineProperty(t, "__esModule", { value: !0 }), n(17)),
      l = n(5),
      f = c(n(45)),
      c =
        ((o = s.Component),
        i(d, o),
        (d.prototype.render = function () {
          var e = this.props,
            t = e.onClose,
            e = e.url,
            n = this.getAdjustedSize();
          return e && n
            ? (0, s.h)(
                "div",
                {
                  className: "".concat(f.backdrop, " ").concat(f.open),
                  onClick: t,
                },
                (0, s.h)(
                  "div",
                  {
                    className: f.lightbox,
                    style: n,
                    ref: this.lightboxElementRef,
                  },
                  (0, s.h)(
                    "div",
                    { className: f.iframeWrapper, style: n },
                    (0, s.h)("iframe", { src: e, key: e })
                  ),
                  (0, s.h)(
                    "button",
                    {
                      className: f.close,
                      type: "button",
                      role: "button",
                      onClick: t,
                    },
                    "Close"
                  )
                )
              )
            : (0, s.h)("div", { className: f.backdrop });
        }),
        (d.prototype.componentDidMount = function () {
          window.addEventListener("resize", this.updateOverflows),
            this.setState({
              browserScrollbarWidth: (0, l.getScrollbarWidth)(),
            });
        }),
        (d.prototype.componentDidUpdate = function () {
          this.updateOverflows();
        }),
        (d.prototype.componentWillUnmount = function () {
          window.removeEventListener("resize", this.updateOverflows);
        }),
        (d.prototype.lightboxElementRef = function (e) {
          this.lightboxElement = e;
        }),
        (d.prototype.updateOverflows = function () {
          var e,
            t = this.getAdjustedSize();
          t &&
            this.lightboxElement &&
            ((e =
              this.props.isExternal ||
              Boolean(t.height > this.lightboxElement.offsetHeight)),
            (t = Boolean(t.width > this.lightboxElement.offsetWidth)),
            (e === this.state.hasVerticalOverflow &&
              t === this.state.hasHorizontalOverflow) ||
              this.setState({
                hasHorizontalOverflow: t,
                hasVerticalOverflow: e,
              }));
        }),
        (d.prototype.getAdjustedSize = function () {
          var e = this.props.size,
            t = this.state,
            n = t.browserScrollbarWidth,
            r = t.hasHorizontalOverflow,
            t = t.hasVerticalOverflow;
          return e
            ? { height: e.height + (r ? n : 0), width: e.width + (t ? n : 0) }
            : null;
        }),
        d);
    function d(e) {
      e = o.call(this, e) || this;
      return (
        (e.state = {
          hasHorizontalOverflow: !1,
          hasVerticalOverflow: !1,
          browserScrollbarWidth: 0,
        }),
        (e.lightboxElement = null),
        (e.lightboxElementRef = e.lightboxElementRef.bind(e)),
        (e.updateOverflows = e.updateOverflows.bind(e)),
        e
      );
    }
    t.default = c;
  },
  function (e, t, n) {
    var r = n(46),
      o = ("string" == typeof r && (r = [[e.i, r, ""]]), { hmr: !0 });
    (o.transform = void 0), (o.insertInto = void 0), n(48)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (t = n(47)(!0)).push([
      e.i,
      ".backdrop__3tG5Hl {\n  align-items: center;\n  bottom: -1000px;\n  display: flex;\n  justify-content: center;\n  left: -1000px;\n  padding: 1030px;\n  pointer-events: none;\n  position: fixed;\n  right: -1000px;\n  top: -1000px;\n  transition:\n    background-color 300ms ease-in-out,\n    z-index 300ms step-end;\n  z-index: -1;\n}\n\n.backdrop__3tG5Hl.open__1oMisJ {\n  background-color: rgba(119, 119, 119, 0.7);\n  pointer-events: auto;\n  transition: background-color 300ms ease-in-out;\n  z-index: 1100;\n}\n\n.lightbox__3bUz8F {\n  background-color: white;\n  box-shadow:\n    0 0 12px rgba(0, 0, 0, 0.3),\n    0 1px 5px rgba(0, 0, 0, 0.2);\n  max-height: 100%;\n  max-width: 100%;\n  position: relative;\n}\n\n.iframeWrapper__yCVOH2 {\n  /* iOS has a 'feature' where it will expand iframes so they become as large as their content\n     document. When this happens the following properties allow the user to scroll in the parent\n     element instead of the iframe itself. This should have no effect on non-iOS browsers; the\n     scrolling will be entirely within the iframe. */\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.iframeWrapper__yCVOH2 iframe {\n  border: none;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.close__2NcGKV {\n  background: url(\"https://builder-assets.unbounce.com/published/images/lightbox-close@3x.png\")\n    center / 30px 30px transparent no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0;\n  height: 40px;\n  position: absolute;\n  right: -19px;\n  top: -19px;\n  width: 40px;\n}\n\n@media only screen and (max-width: 420px) {\n  .backdrop__3tG5Hl {\n    /* Allow the lightbox to reach the vertical viewport edges before scrolling */\n    padding-left: 1000px;\n    padding-right: 1000px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .close__2NcGKV {\n    /* Move the close button to the left so it remains visible */\n    right: 10px;\n  }\n}\n",
      "",
      {
        version: 3,
        sources: ["Lightbox.css"],
        names: [],
        mappings:
          "AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,YAAY;EACZ;;0BAEwB;EACxB,WAAW;AACb;;AAEA;EACE,0CAA0C;EAC1C,oBAAoB;EACpB,8CAA8C;EAC9C,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB;;gCAE8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE;;;oDAGkD;EAClD,iCAAiC;EACjC,cAAc;;EAEd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;4CAC0C;EAC1C,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,WAAW;AACb;;AAEA;EACE;IACE,6EAA6E;IAC7E,oBAAoB;IACpB,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,4DAA4D;IAC5D,WAAW;EACb;AACF",
        file: "Lightbox.css",
        sourcesContent: [
          ".backdrop {\n  align-items: center;\n  bottom: -1000px;\n  display: flex;\n  justify-content: center;\n  left: -1000px;\n  padding: 1030px;\n  pointer-events: none;\n  position: fixed;\n  right: -1000px;\n  top: -1000px;\n  transition:\n    background-color 300ms ease-in-out,\n    z-index 300ms step-end;\n  z-index: -1;\n}\n\n.backdrop.open {\n  background-color: rgba(119, 119, 119, 0.7);\n  pointer-events: auto;\n  transition: background-color 300ms ease-in-out;\n  z-index: 1100;\n}\n\n.lightbox {\n  background-color: white;\n  box-shadow:\n    0 0 12px rgba(0, 0, 0, 0.3),\n    0 1px 5px rgba(0, 0, 0, 0.2);\n  max-height: 100%;\n  max-width: 100%;\n  position: relative;\n}\n\n.iframeWrapper {\n  /* iOS has a 'feature' where it will expand iframes so they become as large as their content\n     document. When this happens the following properties allow the user to scroll in the parent\n     element instead of the iframe itself. This should have no effect on non-iOS browsers; the\n     scrolling will be entirely within the iframe. */\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.iframeWrapper iframe {\n  border: none;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.close {\n  background: url(\"https://builder-assets.unbounce.com/published/images/lightbox-close@3x.png\")\n    center / 30px 30px transparent no-repeat;\n  border: none;\n  cursor: pointer;\n  font-size: 0;\n  height: 40px;\n  position: absolute;\n  right: -19px;\n  top: -19px;\n  width: 40px;\n}\n\n@media only screen and (max-width: 420px) {\n  .backdrop {\n    /* Allow the lightbox to reach the vertical viewport edges before scrolling */\n    padding-left: 1000px;\n    padding-right: 1000px;\n  }\n}\n\n@media only screen and (max-width: 380px) {\n  .close {\n    /* Move the close button to the left so it remains visible */\n    right: 10px;\n  }\n}\n",
        ],
      },
    ]),
      (t.locals = {
        backdrop: "backdrop__3tG5Hl",
        open: "open__1oMisJ",
        lightbox: "lightbox__3bUz8F",
        iframeWrapper: "iframeWrapper__yCVOH2",
        close: "close__2NcGKV",
      }),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (n) {
      var c = [];
      return (
        (c.toString = function () {
          return this.map(function (e) {
            var t = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa)
                return (
                  (e = (function (e) {
                    (e = btoa(unescape(encodeURIComponent(JSON.stringify(e))))),
                      (e =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          e
                        ));
                    return "/*# ".concat(e, " */");
                  })(r)),
                  (t = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  })),
                  [n].concat(t).concat([e]).join("\n")
                );
              return [n].join("\n");
            })(e, n);
            return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (c.i = function (e, t, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var r = {};
          if (n)
            for (var o = 0; o < this.length; o++) {
              var i = this[o][0];
              null != i && (r[i] = !0);
            }
          for (var a = 0; a < e.length; a++) {
            var u = [].concat(e[a]);
            (n && r[u[0]]) ||
              (t &&
                (u[2]
                  ? (u[2] = "".concat(t, " and ").concat(u[2]))
                  : (u[2] = t)),
              c.push(u));
          }
        }),
        c
      );
    };
  },
  function (e, t, r) {
    var n,
      o,
      i,
      c = {},
      s =
        ((n = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return (o = void 0 === o ? n.apply(this, arguments) : o);
        }),
      a =
        ((i = {}),
        function (e, t) {
          if ("function" == typeof e) return e();
          if (void 0 === i[e]) {
            t = function (e, t) {
              return (t || document).querySelector(e);
            }.call(this, e, t);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            i[e] = t;
          }
          return i[e];
        }),
      u = null,
      l = 0,
      f = [],
      d = r(49);
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = c[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(b(r.parts[i], t));
        } else {
          for (var a = [], i = 0; i < r.parts.length; i++)
            a.push(b(r.parts[i], t));
          c[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function h(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          i = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(i) : n.push((r[a] = { id: a, parts: [i] }));
      }
      return n;
    }
    function m(e, t) {
      var n = a(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = f[f.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          f.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        r = a(e.insertAt.before, n);
        n.insertBefore(t, r);
      }
    }
    function v(e) {
      null !== e.parentNode &&
        (e.parentNode.removeChild(e), 0 <= (e = f.indexOf(e))) &&
        f.splice(e, 1);
    }
    function y(e) {
      var t,
        n = document.createElement("style");
      return (
        void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce && (t = r.nc) && (e.attrs.nonce = t),
        g(n, e.attrs),
        m(e, n),
        n
      );
    }
    function g(t, n) {
      Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      });
    }
    function b(t, e) {
      var n, r, o, i, a;
      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {};
        t.css = i;
      }
      return (
        (o = e.singleton
          ? ((i = l++),
            (n = u = u || y(e)),
            (r = x.bind(null, n, i, !1)),
            x.bind(null, n, i, !0))
          : t.sourceMap &&
            "function" == typeof URL &&
            "function" == typeof URL.createObjectURL &&
            "function" == typeof URL.revokeObjectURL &&
            "function" == typeof Blob &&
            "function" == typeof btoa
          ? ((i = e),
            (a = document.createElement("link")),
            void 0 === i.attrs.type && (i.attrs.type = "text/css"),
            (i.attrs.rel = "stylesheet"),
            g(a, i.attrs),
            m(i, a),
            (n = a),
            (r = function (e, t, n) {
              var r = n.css,
                n = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && n;
              (t.convertToAbsoluteUrls || o) && (r = d(r));
              n &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                  " */");
              (t = new Blob([r], { type: "text/css" })), (o = e.href);
              (e.href = URL.createObjectURL(t)), o && URL.revokeObjectURL(o);
            }.bind(null, n, e)),
            function () {
              v(n), n.href && URL.revokeObjectURL(n.href);
            })
          : ((n = y(e)),
            (r = function (e, t) {
              var n = t.css,
                t = t.media;
              t && e.setAttribute("media", t);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            function () {
              v(n);
            })),
        r(t),
        function (e) {
          e
            ? (e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap) ||
              r((t = e))
            : o();
        }
      );
    }
    e.exports = function (e, a) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}),
        a.singleton || "boolean" == typeof a.singleton || (a.singleton = s()),
        a.insertInto || (a.insertInto = "head"),
        a.insertAt || (a.insertAt = "bottom");
      var u = h(e, a);
      return (
        p(u, a),
        function (e) {
          for (var t = [], n = 0; n < u.length; n++) {
            var r = u[n];
            (o = c[r.id]).refs--, t.push(o);
          }
          e && p(h(e, a), a);
          for (var o, n = 0; n < t.length; n++)
            if (0 === (o = t[n]).refs) {
              for (var i = 0; i < o.parts.length; i++) o.parts[i]();
              delete c[o.id];
            }
        }
      );
    };
    w = [];
    var w,
      _ = function (e, t) {
        return (w[e] = t), w.filter(Boolean).join("\n");
      };
    function x(e, t, n, r) {
      var n = n ? "" : r.css;
      e.styleSheet
        ? (e.styleSheet.cssText = _(t, n))
        : ((r = document.createTextNode(n)),
          (n = e.childNodes)[t] && e.removeChild(n[t]),
          n.length ? e.insertBefore(r, n[t]) : e.appendChild(r));
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var n,
        r,
        t = "undefined" != typeof window && window.location;
      if (t)
        return e && "string" == typeof e
          ? ((n = t.protocol + "//" + t.host),
            (r = n + t.pathname.replace(/\/[^\/]*$/, "/")),
            e.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function (e, t) {
                t = t
                  .trim()
                  .replace(/^"(.*)"$/, function (e, t) {
                    return t;
                  })
                  .replace(/^'(.*)'$/, function (e, t) {
                    return t;
                  });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                  t
                )
                  ? e
                  : ((e =
                      0 === t.indexOf("//")
                        ? t
                        : 0 === t.indexOf("/")
                        ? n + t
                        : r + t.replace(/^\.\//, "")),
                    "url(" + JSON.stringify(e) + ")");
              }
            ))
          : e;
      throw new Error("fixUrls requires window.location");
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(18));
    t.default = function (e, t) {
      switch (t.type) {
        case o.ActionType.OpenLightbox:
          return r(r({}, e), { activeLightbox: t.payload });
        case o.ActionType.CloseLightbox:
          return r(r({}, e), { activeLightbox: null });
        case o.ActionType.BreakpointChanged:
          return r(r({}, e), { breakpoint: t.payload.breakpoint });
        default:
          return e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3);
    t.default = function () {
      var e = window.ub.page.usedAs === r.UsedAs.LightboxPage,
        t = Boolean(document.querySelector(".lp-pom-form"));
      e &&
        t &&
        (e = document.getElementById("lp-pom-root")) &&
        (((t = document.createElement("div")).style.cssText =
          "-webkit-overflow-scrolling: touch; overflow: auto; height:100%;"),
        document.body.insertBefore(t, e),
        t.appendChild(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(5)),
      i = r(n(0));
    function a() {
      (0, i.default)(".lp-pom-root, .lp-pom-block")
        .filter(function (e) {
          return "fixed" === e.style.backgroundAttachment;
        })
        .forEach(function (e) {
          e.style.backgroundAttachment = "scroll";
        });
    }
    t.default = function () {
      (0, o.isMobile)() &&
        (a(), window.addEventListener("orientationchange", a));
    };
  },
  function (e, t, n) {
    "use strict";
    function r() {
      var e,
        t = document.getElementById("lp-pom-root"),
        n = document.querySelector('meta[name="viewport"]');
      t &&
        n &&
        600 < window.innerWidth &&
        window.innerWidth < 1024 &&
        ((e = window.innerWidth),
        (t = t.offsetWidth),
        (n.content =
          t <= e
            ? "initial-scale=1.0, width=device-width, user-scalable=yes"
            : "initial-scale=" + e / t + ", user-scalable=yes"));
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        r(), window.addEventListener("orientationchange", r);
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      l = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(2))),
      f = a(n(0)),
      d = 14,
      p = "".concat(d, "px");
    t.default = function (n) {
      void 0 === n && (n = window);
      try {
        (u = (a = n).document),
          ((c = u.createElement("div")).style.fontSize = p),
          (c.style.lineHeight = p),
          u.body.appendChild(c),
          (s = (a = a.getComputedStyle(c)).fontSize),
          (a = a.lineHeight),
          u.body.removeChild(c);
        var r,
          o,
          e = {
            fontSizeInflation: parseFloat(s || p) / d,
            lineHeightInflation: parseFloat(a || p) / d,
          },
          t = e.fontSizeInflation,
          i = e.lineHeightInflation;
        (1 === t && 1 === i) ||
          (l.log(
            "[Text Inflation Fixer]",
            "Detected "
              .concat(t, "x font-size and ")
              .concat(i, "x line-height inflation. Adjusting to compensate...")
          ),
          (r = Math.pow(t, 2)),
          (o = 1 !== t && 1 === i ? t : Math.pow(i, 2)),
          (0, f.default)(
            ".lp-pom-text *, .lp-pom-button, .lp-pom-form-field *",
            n.document
          )
            .map(function (e) {
              var t = n.getComputedStyle(e);
              return {
                element: e,
                fontSize: t.fontSize,
                lineHeight: t.lineHeight,
              };
            })
            .forEach(function (e) {
              var t = e.element,
                n = e.fontSize,
                e = e.lineHeight;
              n && (t.style.fontSize = "".concat(parseFloat(n) / r, "px")),
                e && (t.style.lineHeight = "".concat(parseFloat(e) / o, "px"));
            }));
      } catch (e) {
        l.warn("[Text Inflation Fixer]", e);
      }
      var a, u, c, s;
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(5)),
      i = r(n(0)),
      a = r(n(56)),
      u = r(n(58));
    function c(e, t) {
      var n,
        t = parseFloat(t.getAttribute("data-ratio") || "1"),
        e =
          "lp-pom-root" === (e = e).id
            ? window.innerWidth / window.innerHeight
            : e.offsetWidth / e.offsetHeight;
      return e < t
        ? ((n = t / e - 1),
          {
            top: "0",
            left: -Math.ceil((n / 2) * 100) + "%",
            height: "100%",
            width: Math.ceil(100 + 100 * n) + "%",
          })
        : ((n = e / t - 1),
          {
            top: -Math.ceil((n / 2) * 100) + "%",
            left: "0",
            height: Math.ceil(100 + 100 * n) + "%",
            width: "100%",
          });
    }
    function s(e) {
      var t = e.querySelector(".lp-pom-video-background"),
        n = e.querySelector(".lp-pom-video-background iframe"),
        r = e.querySelector(".lp-pom-video-background-image");
      t &&
        n &&
        r &&
        ((0, o.isMobile)() && t.removeChild(n),
        (e = c(e, t)),
        (n.style.top = e.top),
        (n.style.left = e.left),
        (n.style.height = e.height),
        (n.style.width = e.width),
        (r.style.top = e.top),
        (r.style.left = e.left),
        (r.style.height = e.height),
        (r.style.width = e.width));
    }
    function l() {
      (0, i.default)(".lp-pom-video-background")
        .map(function (e) {
          return e.parentElement;
        })
        .forEach(s);
    }
    t.default = function () {
      l(),
        window.addEventListener("resize", l),
        (0, u.default)(),
        (0, a.default)();
    };
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), r(n(57))),
      i = r(n(0));
    function a(t) {
      t.style.opacity = "0";
      var n = new o.default(t);
      n.ready().then(function () {
        n.setAutopause(!1), n.setVolume(0), n.setLoop(!0), n.play();
      }),
        n.on("timeupdate", function e() {
          (t.style.opacity = "1"), n.off("timeupdate", e);
        });
    }
    t.default = function () {
      (0, i.default)(".lp-pom-video-background iframe.vimeo").forEach(a);
    };
  },
  function (e, oe, t) {
    "use strict";
    t.r(oe),
      function (e, b) {
        function r(t, e) {
          var n,
            r = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(t)),
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              r.push.apply(r, n)),
            r
          );
        }
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  f(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function k() {
          k = function () {
            return a;
          };
          var a = {},
            e = Object.prototype,
            c = e.hasOwnProperty,
            s =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            t = "function" == typeof Symbol ? Symbol : {},
            r = t.iterator || "@@iterator",
            n = t.asyncIterator || "@@asyncIterator",
            o = t.toStringTag || "@@toStringTag";
          function i(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            i({}, "");
          } catch (e) {
            i = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var o,
              i,
              a,
              u,
              t = t && t.prototype instanceof d ? t : d,
              t = Object.create(t.prototype),
              r = new _(r || []);
            return (
              s(t, "_invoke", {
                value:
                  ((o = e),
                  (i = n),
                  (a = r),
                  (u = "suspendedStart"),
                  function (e, t) {
                    if ("executing" === u)
                      throw new Error("Generator is already running");
                    if ("completed" === u) {
                      if ("throw" === e) throw t;
                      return E();
                    }
                    for (a.method = e, a.arg = t; ; ) {
                      var n = a.delegate;
                      if (n) {
                        n = (function e(t, n) {
                          var r = n.method,
                            o = t.iterator[r];
                          if (void 0 === o)
                            return (
                              (n.delegate = null),
                              ("throw" === r &&
                                t.iterator.return &&
                                ((n.method = "return"),
                                (n.arg = void 0),
                                e(t, n),
                                "throw" === n.method)) ||
                                ("return" !== r &&
                                  ((n.method = "throw"),
                                  (n.arg = new TypeError(
                                    "The iterator does not provide a '" +
                                      r +
                                      "' method"
                                  )))),
                              f
                            );
                          r = l(o, t.iterator, n.arg);
                          if ("throw" === r.type)
                            return (
                              (n.method = "throw"),
                              (n.arg = r.arg),
                              (n.delegate = null),
                              f
                            );
                          o = r.arg;
                          return o
                            ? o.done
                              ? ((n[t.resultName] = o.value),
                                (n.next = t.nextLoc),
                                "return" !== n.method &&
                                  ((n.method = "next"), (n.arg = void 0)),
                                (n.delegate = null),
                                f)
                              : o
                            : ((n.method = "throw"),
                              (n.arg = new TypeError(
                                "iterator result is not an object"
                              )),
                              (n.delegate = null),
                              f);
                        })(n, a);
                        if (n) {
                          if (n === f) continue;
                          return n;
                        }
                      }
                      if ("next" === a.method) a.sent = a._sent = a.arg;
                      else if ("throw" === a.method) {
                        if ("suspendedStart" === u)
                          throw ((u = "completed"), a.arg);
                        a.dispatchException(a.arg);
                      } else "return" === a.method && a.abrupt("return", a.arg);
                      u = "executing";
                      n = l(o, i, a);
                      if ("normal" === n.type) {
                        if (
                          ((u = a.done ? "completed" : "suspendedYield"),
                          n.arg === f)
                        )
                          continue;
                        return { value: n.arg, done: a.done };
                      }
                      "throw" === n.type &&
                        ((u = "completed"),
                        (a.method = "throw"),
                        (a.arg = n.arg));
                    }
                  }),
              }),
              t
            );
          }
          function l(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          a.wrap = u;
          var f = {};
          function d() {}
          function p() {}
          function h() {}
          var t = {},
            m =
              (i(t, r, function () {
                return this;
              }),
              Object.getPrototypeOf),
            m = m && m(m(x([]))),
            v =
              (m && m !== e && c.call(m, r) && (t = m),
              (h.prototype = d.prototype = Object.create(t)));
          function y(e) {
            ["next", "throw", "return"].forEach(function (t) {
              i(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function g(a, u) {
            var t;
            s(this, "_invoke", {
              value: function (n, r) {
                function e() {
                  return new u(function (e, t) {
                    !(function t(e, n, r, o) {
                      var i,
                        e = l(a[e], a, n);
                      if ("throw" !== e.type)
                        return (n = (i = e.arg).value) &&
                          "object" == typeof n &&
                          c.call(n, "__await")
                          ? u.resolve(n.__await).then(
                              function (e) {
                                t("next", e, r, o);
                              },
                              function (e) {
                                t("throw", e, r, o);
                              }
                            )
                          : u.resolve(n).then(
                              function (e) {
                                (i.value = e), r(i);
                              },
                              function (e) {
                                return t("throw", e, r, o);
                              }
                            );
                      o(e.arg);
                    })(n, r, e, t);
                  });
                }
                return (t = t ? t.then(e, e) : e());
              },
            });
          }
          function b(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function w(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function _(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(b, this),
              this.reset(!0);
          }
          function x(t) {
            if (t) {
              var n,
                e = t[r];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length))
                return (
                  (n = -1),
                  ((e = function e() {
                    for (; ++n < t.length; )
                      if (c.call(t, n))
                        return (e.value = t[n]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  }).next = e)
                );
            }
            return { next: E };
          }
          function E() {
            return { value: void 0, done: !0 };
          }
          return (
            s(v, "constructor", { value: (p.prototype = h), configurable: !0 }),
            s(h, "constructor", { value: p, configurable: !0 }),
            (p.displayName = i(h, o, "GeneratorFunction")),
            (a.isGeneratorFunction = function (e) {
              e = "function" == typeof e && e.constructor;
              return (
                !!e &&
                (e === p || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (a.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, h)
                  : ((e.__proto__ = h), i(e, o, "GeneratorFunction")),
                (e.prototype = Object.create(v)),
                e
              );
            }),
            (a.awrap = function (e) {
              return { __await: e };
            }),
            y(g.prototype),
            i(g.prototype, n, function () {
              return this;
            }),
            (a.AsyncIterator = g),
            (a.async = function (e, t, n, r, o) {
              void 0 === o && (o = Promise);
              var i = new g(u(e, t, n, r), o);
              return a.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            y(v),
            i(v, o, "Generator"),
            i(v, r, function () {
              return this;
            }),
            i(v, "toString", function () {
              return "[object Generator]";
            }),
            (a.keys = function (e) {
              var t,
                n = Object(e),
                r = [];
              for (t in n) r.push(t);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in n) return (e.value = t), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (a.values = x),
            (_.prototype = {
              constructor: _,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(w),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      c.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (n) {
                if (this.done) throw n;
                var r = this;
                function e(e, t) {
                  return (
                    (i.type = "throw"),
                    (i.arg = n),
                    (r.next = e),
                    t && ((r.method = "next"), (r.arg = void 0)),
                    !!t
                  );
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var o = this.tryEntries[t],
                    i = o.completion;
                  if ("root" === o.tryLoc) return e("end");
                  if (o.tryLoc <= this.prev) {
                    var a = c.call(o, "catchLoc"),
                      u = c.call(o, "finallyLoc");
                    if (a && u) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    } else if (a) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    c.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                var i = (o =
                  o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc
                    ? null
                    : o)
                  ? o.completion
                  : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  f
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), w(n), f;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var n,
                    r,
                    o = this.tryEntries[t];
                  if (o.tryLoc === e)
                    return (
                      "throw" === (n = o.completion).type &&
                        ((r = n.arg), w(o)),
                      r
                    );
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: x(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  f
                );
              },
            }),
            a
          );
        }
        function c(e, t, n, r, o, i, a) {
          try {
            var u = e[i](a),
              c = u.value;
          } catch (e) {
            return void n(e);
          }
          u.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function d(u) {
          return function () {
            var e = this,
              a = arguments;
            return new Promise(function (t, n) {
              var r = u.apply(e, a);
              function o(e) {
                c(r, t, n, o, i, "next", e);
              }
              function i(e) {
                c(r, t, n, o, i, "throw", e);
              }
              o(void 0);
            });
          };
        }
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, U(r.key), r);
          }
        }
        function l(e, t, n) {
          t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 });
        }
        function f(e, t, n) {
          (t = U(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n);
        }
        function i(e) {
          return (i = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function p(e, t) {
          return (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
        }
        function N() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function B(e, t, n) {
          return (B = N()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                t = new (Function.bind.apply(e, r))();
                return n && p(t, n.prototype), t;
              }).apply(null, arguments);
        }
        function D(e) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (function (e) {
            if (
              null === e ||
              -1 === Function.toString.call(e).indexOf("[native code]")
            )
              return e;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== n) {
              if (n.has(e)) return n.get(e);
              n.set(e, t);
            }
            function t() {
              return B(e, arguments, i(this).constructor);
            }
            return (
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              p(t, e)
            );
          })(e);
        }
        function h(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function R(n) {
          var r = N();
          return function () {
            var e,
              t = i(n),
              t =
                ((e = r
                  ? ((e = i(this).constructor),
                    Reflect.construct(t, arguments, e))
                  : t.apply(this, arguments)),
                this);
            if (e && ("object" == typeof e || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return h(t);
          };
        }
        function U(e) {
          e = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 === n) return ("string" === t ? String : Number)(e);
            if ("object" != typeof (n = n.call(e, t || "default"))) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(e, "string");
          return "symbol" == typeof e ? e : String(e);
        }
        var H = void 0 !== e && "[object global]" === {}.toString.call(e);
        function W(e, t) {
          return 0 === e.indexOf(t.toLowerCase())
            ? e
            : ""
                .concat(t.toLowerCase())
                .concat(e.substr(0, 1).toUpperCase())
                .concat(e.substr(1));
        }
        function m(e) {
          return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
        }
        function q(e) {
          return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e);
        }
        function V(e) {
          var t,
            e = 0 < arguments.length && void 0 !== e ? e : {},
            n = e.id,
            e = e.url,
            e = n || e;
          if (!e)
            throw new Error(
              "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
            );
          if (
            ((t = e),
            !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t)
          )
            return "https://vimeo.com/".concat(e);
          if (m(e)) return e.replace("http:", "https:");
          if (n)
            throw new TypeError("â€œ".concat(n, "â€ is not a valid video id."));
          throw new TypeError("â€œ".concat(e, "â€ is not a vimeo.com url."));
        }
        function z(t, e, n) {
          var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : "addEventListener",
            o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : "removeEventListener",
            i = "string" == typeof e ? [e] : e;
          return (
            i.forEach(function (e) {
              t[r](e, n);
            }),
            {
              cancel: function () {
                return i.forEach(function (e) {
                  return t[o](e, n);
                });
              },
            }
          );
        }
        var t = void 0 !== Array.prototype.indexOf,
          n = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(H || (t && n)))
          throw new Error(
            "Sorry, the Vimeo Player API is not available in this browser."
          );
        var G,
          Y,
          a,
          $ =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {};
        function v() {
          if (void 0 === this)
            throw new TypeError("Constructor WeakMap requires 'new'");
          if (
            (a(this, "_id", "_WeakMap_" + Q() + "." + Q()),
            0 < arguments.length)
          )
            throw new TypeError("WeakMap iterable is not supported");
        }
        function y(e, t) {
          if (!g(e) || !G.call(e, "_id"))
            throw new TypeError(
              t + " method called on incompatible receiver " + typeof e
            );
        }
        function Q() {
          return Math.random().toString().substring(2);
        }
        function g(e) {
          return Object(e) === e;
        }
        (t =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : $).WeakMap ||
          ((G = Object.prototype.hasOwnProperty),
          (Y =
            Object.defineProperty &&
            (function () {
              try {
                return 1 === Object.defineProperty({}, "x", { value: 1 }).x;
              } catch (e) {}
            })()),
          (t.WeakMap =
            ((a = function (e, t, n) {
              Y
                ? Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[t] = n);
            })(v.prototype, "delete", function (e) {
              var t;
              return (
                y(this, "delete"),
                !!g(e) &&
                  !(!(t = e[this._id]) || t[0] !== e || (delete e[this._id], 0))
              );
            }),
            a(v.prototype, "get", function (e) {
              var t;
              return (
                y(this, "get"),
                g(e) && (t = e[this._id]) && t[0] === e ? t[1] : void 0
              );
            }),
            a(v.prototype, "has", function (e) {
              var t;
              return (
                y(this, "has"), !!g(e) && !(!(t = e[this._id]) || t[0] !== e)
              );
            }),
            a(v.prototype, "set", function (e, t) {
              var n;
              if ((y(this, "set"), g(e)))
                return (
                  (n = e[this._id]) && n[0] === e
                    ? (n[1] = t)
                    : a(e, this._id, [e, t]),
                  this
                );
              throw new TypeError("Invalid value used as weak map key");
            }),
            a(v, "_polyfill", !0),
            v)));
        (function (e) {
          var t, n, r;
          (r = function () {
            var t,
              n,
              r,
              o,
              i,
              e = Object.prototype.toString,
              a =
                void 0 !== b
                  ? function (e) {
                      return b(e);
                    }
                  : setTimeout;
            try {
              Object.defineProperty({}, "x", {}),
                (t = function (e, t, n, r) {
                  return Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !1 !== r,
                  });
                });
            } catch (e) {
              t = function (e, t, n) {
                return (e[t] = n), e;
              };
            }
            function u(e, t) {
              (this.fn = e), (this.self = t), (this.next = void 0);
            }
            function c(e, t) {
              y.add(e, t), (n = n || a(y.drain));
            }
            function s(e) {
              var t,
                n = typeof e;
              return (
                "function" ==
                  typeof (t =
                    null == e || ("object" != n && "function" != n)
                      ? t
                      : e.then) && t
              );
            }
            function l() {
              for (var e = 0; e < this.chain.length; e++) {
                n = t = i = o = r = void 0;
                var t,
                  n,
                  r = this,
                  o =
                    1 === this.state
                      ? this.chain[e].success
                      : this.chain[e].failure,
                  i = this.chain[e];
                try {
                  !1 === o
                    ? i.reject(r.msg)
                    : (t = !0 === o ? r.msg : o.call(void 0, r.msg)) ===
                      i.promise
                    ? i.reject(TypeError("Promise-chain cycle"))
                    : (n = s(t))
                    ? n.call(t, i.resolve, i.reject)
                    : i.resolve(t);
                } catch (e) {
                  i.reject(e);
                }
              }
              this.chain.length = 0;
            }
            function f(e) {
              var n,
                r = this;
              if (!r.triggered) {
                (r.triggered = !0), r.def && (r = r.def);
                try {
                  (n = s(e))
                    ? c(function () {
                        var t = new h(r);
                        try {
                          n.call(
                            e,
                            function () {
                              f.apply(t, arguments);
                            },
                            function () {
                              d.apply(t, arguments);
                            }
                          );
                        } catch (e) {
                          d.call(t, e);
                        }
                      })
                    : ((r.msg = e),
                      (r.state = 1),
                      0 < r.chain.length && c(l, r));
                } catch (e) {
                  d.call(new h(r), e);
                }
              }
            }
            function d(e) {
              var t = this;
              t.triggered ||
                ((t.triggered = !0),
                ((t = t.def ? t.def : t).msg = e),
                (t.state = 2),
                0 < t.chain.length && c(l, t));
            }
            function p(e, n, r, o) {
              for (var t = 0; t < n.length; t++)
                !(function (t) {
                  e.resolve(n[t]).then(function (e) {
                    r(t, e);
                  }, o);
                })(t);
            }
            function h(e) {
              (this.def = e), (this.triggered = !1);
            }
            function m(e) {
              (this.promise = e),
                (this.state = 0),
                (this.triggered = !1),
                (this.chain = []),
                (this.msg = void 0);
            }
            function v(e) {
              if ("function" != typeof e) throw TypeError("Not a function");
              if (0 !== this.__NPO__) throw TypeError("Not a promise");
              this.__NPO__ = 1;
              var r = new m(this);
              (this.then = function (e, t) {
                var n = {
                  success: "function" != typeof e || e,
                  failure: "function" == typeof t && t,
                };
                return (
                  (n.promise = new this.constructor(function (e, t) {
                    if ("function" != typeof e || "function" != typeof t)
                      throw TypeError("Not a function");
                    (n.resolve = e), (n.reject = t);
                  })),
                  r.chain.push(n),
                  0 !== r.state && c(l, r),
                  n.promise
                );
              }),
                (this.catch = function (e) {
                  return this.then(void 0, e);
                });
              try {
                e.call(
                  void 0,
                  function (e) {
                    f.call(r, e);
                  },
                  function (e) {
                    d.call(r, e);
                  }
                );
              } catch (e) {
                d.call(r, e);
              }
            }
            var y = {
                add: function (e, t) {
                  (i = new u(e, t)), o ? (o.next = i) : (r = i), (o = i);
                },
                drain: function () {
                  var e = r;
                  for (r = o = n = void 0; e; ) e.fn.call(e.self), (e = e.next);
                },
              },
              g = t({}, "constructor", v, !1);
            return (
              t((v.prototype = g), "__NPO__", 0, !1),
              t(v, "resolve", function (n) {
                return n && "object" == typeof n && 1 === n.__NPO__
                  ? n
                  : new this(function (e, t) {
                      if ("function" != typeof e || "function" != typeof t)
                        throw TypeError("Not a function");
                      e(n);
                    });
              }),
              t(v, "reject", function (n) {
                return new this(function (e, t) {
                  if ("function" != typeof e || "function" != typeof t)
                    throw TypeError("Not a function");
                  t(n);
                });
              }),
              t(v, "all", function (t) {
                var a = this;
                return "[object Array]" != e.call(t)
                  ? a.reject(TypeError("Not an array"))
                  : 0 === t.length
                  ? a.resolve([])
                  : new a(function (n, e) {
                      if ("function" != typeof n || "function" != typeof e)
                        throw TypeError("Not a function");
                      var r = t.length,
                        o = Array(r),
                        i = 0;
                      p(
                        a,
                        t,
                        function (e, t) {
                          (o[e] = t), ++i === r && n(o);
                        },
                        e
                      );
                    });
              }),
              t(v, "race", function (t) {
                var r = this;
                return "[object Array]" != e.call(t)
                  ? r.reject(TypeError("Not an array"))
                  : new r(function (n, e) {
                      if ("function" != typeof n || "function" != typeof e)
                        throw TypeError("Not a function");
                      p(
                        r,
                        t,
                        function (e, t) {
                          n(t);
                        },
                        e
                      );
                    });
              }),
              v
            );
          }),
            ((n = $)[(t = "Promise")] = n[t] || r()),
            e.exports && (e.exports = n[t]);
        })((n = { exports: {} }));
        var w = n.exports,
          _ = new WeakMap();
        function x(e, t, n) {
          var r = _.get(e.element) || {};
          t in r || (r[t] = []), r[t].push(n), _.set(e.element, r);
        }
        function E(e, t) {
          return (_.get(e.element) || {})[t] || [];
        }
        function A(e, t, n) {
          var r = _.get(e.element) || {};
          return (
            !r[t] ||
            (n
              ? (-1 !== (n = r[t].indexOf(n)) && r[t].splice(n, 1),
                _.set(e.element, r),
                r[t] && 0 === r[t].length)
              : ((r[t] = []), _.set(e.element, r), !0))
          );
        }
        function O(e) {
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (e) {
              return console.warn(e), {};
            }
          return e;
        }
        function j(e, t, n) {
          e.element.contentWindow &&
            e.element.contentWindow.postMessage &&
            ((t = { method: t }),
            void 0 !== n && (t.value = n),
            8 <=
              (n = parseFloat(
                navigator.userAgent
                  .toLowerCase()
                  .replace(/^.*msie (\d+).*$/, "$1")
              )) &&
              n < 10 &&
              (t = JSON.stringify(t)),
            e.element.contentWindow.postMessage(t, e.origin));
        }
        function J(n, r) {
          var t,
            e,
            o,
            i,
            a = [];
          (r = O(r)).event
            ? ("error" === r.event &&
                E(n, r.data.method).forEach(function (e) {
                  var t = new Error(r.data.message);
                  (t.name = r.data.name), e.reject(t), A(n, r.data.method, e);
                }),
              (a = E(n, "event:".concat(r.event))),
              (t = r.data))
            : r.method &&
              ((e = n),
              (o = r.method),
              (o =
                !((i = E(e, o)).length < 1) &&
                (A(e, o, (e = i.shift())), e))) &&
              (a.push(o), (t = r.value)),
            a.forEach(function (e) {
              try {
                "function" == typeof e ? e.call(n, t) : e.resolve(t);
              } catch (e) {}
            });
        }
        var X = [
          "autopause",
          "autoplay",
          "background",
          "byline",
          "color",
          "colors",
          "controls",
          "dnt",
          "height",
          "id",
          "interactive_params",
          "keyboard",
          "loop",
          "maxheight",
          "maxwidth",
          "muted",
          "playsinline",
          "portrait",
          "responsive",
          "speed",
          "texttrack",
          "title",
          "transparent",
          "url",
          "width",
        ];
        function Z(r, e) {
          return X.reduce(
            function (e, t) {
              var n = r.getAttribute("data-vimeo-".concat(t));
              return (!n && "" !== n) || (e[t] = "" === n ? 1 : n), e;
            },
            1 < arguments.length && void 0 !== e ? e : {}
          );
        }
        function P(e, t) {
          var n,
            e = e.html;
          if (t)
            return (
              null === t.getAttribute("data-vimeo-initialized") &&
                (((n = document.createElement("div")).innerHTML = e),
                t.appendChild(n.firstChild),
                t.setAttribute("data-vimeo-initialized", "true")),
              t.querySelector("iframe")
            );
          throw new TypeError("An element must be provided");
        }
        function K(i, e, t) {
          var a = 1 < arguments.length && void 0 !== e ? e : {},
            u = 2 < arguments.length ? t : void 0;
          return new Promise(function (t, n) {
            if (!m(i))
              throw new TypeError(
                "â€œ".concat(i, "â€ is not a vimeo.com url.")
              );
            var e,
              r = "https://vimeo.com/api/oembed.json?url=".concat(
                encodeURIComponent(i)
              );
            for (e in a)
              a.hasOwnProperty(e) &&
                (r += "&".concat(e, "=").concat(encodeURIComponent(a[e])));
            var o = new (
              "XDomainRequest" in window ? XDomainRequest : XMLHttpRequest
            )();
            o.open("GET", r, !0),
              (o.onload = function () {
                if (404 === o.status)
                  n(new Error("â€œ".concat(i, "â€ was not found.")));
                else if (403 === o.status)
                  n(new Error("â€œ".concat(i, "â€ is not embeddable.")));
                else
                  try {
                    var e = JSON.parse(o.responseText);
                    403 === e.domain_status_code
                      ? (P(e, u),
                        n(new Error("â€œ".concat(i, "â€ is not embeddable."))))
                      : t(e);
                  } catch (e) {
                    n(e);
                  }
              }),
              (o.onerror = function () {
                var e = o.status ? " (".concat(o.status, ")") : "";
                n(
                  new Error(
                    "There was an error fetching the embed code from Vimeo".concat(
                      e,
                      "."
                    )
                  )
                );
              }),
              o.send();
          });
        }
        function ee(e) {
          function n(e) {
            "console" in window &&
              console.error &&
              console.error("There was an error creating an embed: ".concat(e));
          }
          (e = 0 < arguments.length && void 0 !== e ? e : document),
            (e = [].slice.call(
              e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
            ));
          e.forEach(function (t) {
            try {
              var e;
              null === t.getAttribute("data-vimeo-defer") &&
                K(V((e = Z(t))), e, t)
                  .then(function (e) {
                    return P(e, t);
                  })
                  .catch(n);
            } catch (e) {
              n(e);
            }
          });
        }
        function te(e) {
          var a,
            t = 0 < arguments.length && void 0 !== e ? e : document;
          window.VimeoCheckedUrlTimeParam ||
            ((window.VimeoCheckedUrlTimeParam = !0),
            (a = function (e) {
              "console" in window &&
                console.error &&
                console.error(
                  "There was an error getting video Id: ".concat(e)
                );
            }),
            window.addEventListener("message", function (r) {
              if (m(r.origin)) {
                var e = O(r.data);
                if (e && "ready" === e.event)
                  for (
                    var o = t.querySelectorAll("iframe"), i = 0;
                    i < o.length;
                    i++
                  )
                    !(function () {
                      var t,
                        e = o[i],
                        n = e.contentWindow === r.source;
                      q(e.src) &&
                        n &&
                        (t = new I(e))
                          .getVideoId()
                          .then(function (e) {
                            var e = new RegExp(
                              "[?&]vimeo_t_".concat(e, "=([^&#]*)")
                            ).exec(window.location.href);
                            e &&
                              e[1] &&
                              ((e = decodeURI(e[1])), t.setCurrentTime(e));
                          })
                          .catch(a);
                    })();
              }
            }));
        }
        var C,
          T,
          S,
          ne = {
            role: "viewer",
            autoPlayMuted: !0,
            allowedDrift: 0.3,
            maxAllowedDrift: 1,
            minCheckInterval: 0.1,
            maxRateAdjustment: 0.2,
            maxTimeToCatchUp: 1,
          },
          re = (function (e) {
            var t = a;
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && p(t, e);
            var r,
              n,
              o,
              i = R(a);
            function a(e, t) {
              var o,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = 3 < arguments.length ? arguments[3] : void 0;
              return (
                s(this, a),
                f(h((o = i.call(this))), "logger", void 0),
                f(h(o), "speedAdjustment", 0),
                f(
                  h(o),
                  "adjustSpeed",
                  (function () {
                    var n = d(
                      k().mark(function e(t, n) {
                        var r;
                        return k().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (o.speedAdjustment === n)
                                  return e.abrupt("return");
                                e.next = 2;
                                break;
                              case 2:
                                return (e.next = 4), t.getPlaybackRate();
                              case 4:
                                return (
                                  (e.t0 = e.sent),
                                  (e.t1 = o.speedAdjustment),
                                  (e.t2 = e.t0 - e.t1),
                                  (e.t3 = n),
                                  (r = e.t2 + e.t3),
                                  o.log("New playbackRate:  ".concat(r)),
                                  (e.next = 12),
                                  t.setPlaybackRate(r)
                                );
                              case 12:
                                o.speedAdjustment = n;
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })()
                ),
                (o.logger = r),
                o.init(t, e, u(u({}, ne), n)),
                o
              );
            }
            return (
              l(a, [
                {
                  key: "disconnect",
                  value: function () {
                    this.dispatchEvent(new Event("disconnect"));
                  },
                },
                {
                  key: "init",
                  value:
                    ((o = d(
                      k().mark(function e(t, n, r) {
                        var o,
                          i,
                          a,
                          u = this;
                        return k().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.waitForTOReadyState(t, "open")
                                  );
                                case 2:
                                  if ("viewer" === r.role)
                                    return (
                                      (e.next = 5), this.updatePlayer(t, n, r)
                                    );
                                  e.next = 10;
                                  break;
                                case 5:
                                  (o = z(t, "change", function () {
                                    return u.updatePlayer(t, n, r);
                                  })),
                                    (i = this.maintainPlaybackPosition(
                                      t,
                                      n,
                                      r
                                    )),
                                    this.addEventListener(
                                      "disconnect",
                                      function () {
                                        i.cancel(), o.cancel();
                                      }
                                    ),
                                    (e.next = 14);
                                  break;
                                case 10:
                                  return (
                                    (e.next = 12), this.updateTimingObject(t, n)
                                  );
                                case 12:
                                  (a = z(
                                    n,
                                    ["seeked", "play", "pause", "ratechange"],
                                    function () {
                                      return u.updateTimingObject(t, n);
                                    },
                                    "on",
                                    "off"
                                  )),
                                    this.addEventListener(
                                      "disconnect",
                                      function () {
                                        return a.cancel();
                                      }
                                    );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e, t, n) {
                      return o.apply(this, arguments);
                    }),
                },
                {
                  key: "updateTimingObject",
                  value:
                    ((n = d(
                      k().mark(function e(t, n) {
                        return k().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = t), (e.next = 3), n.getCurrentTime()
                                );
                              case 3:
                                return (
                                  (e.t1 = e.sent), (e.next = 6), n.getPaused()
                                );
                              case 6:
                                e.sent
                                  ? ((e.t2 = 0), (e.next = 13))
                                  : (e.next = 10);
                                break;
                              case 10:
                                return (e.next = 12), n.getPlaybackRate();
                              case 12:
                                e.t2 = e.sent;
                              case 13:
                                (e.t3 = e.t2),
                                  (e.t4 = { position: e.t1, velocity: e.t3 }),
                                  e.t0.update.call(e.t0, e.t4);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function (e, t) {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  key: "updatePlayer",
                  value:
                    ((r = d(
                      k().mark(function e(t, n, r) {
                        var o, i;
                        return k().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((i = t.query()),
                                    (o = i.position),
                                    (i = i.velocity),
                                    "number" == typeof o && n.setCurrentTime(o),
                                    "number" != typeof i)
                                  )
                                    e.next = 25;
                                  else {
                                    if (0 === i)
                                      return (e.next = 6), n.getPaused();
                                    e.next = 11;
                                  }
                                  break;
                                case 6:
                                  if (((e.t0 = e.sent), !1 !== e.t0)) {
                                    e.next = 9;
                                    break;
                                  }
                                  n.pause();
                                case 9:
                                  e.next = 25;
                                  break;
                                case 11:
                                  if (0 < i)
                                    return (e.next = 14), n.getPaused();
                                  e.next = 25;
                                  break;
                                case 14:
                                  if (((e.t1 = e.sent), !0 === e.t1))
                                    return (
                                      (e.next = 18),
                                      n.play().catch(
                                        (function () {
                                          var t = d(
                                            k().mark(function e(t) {
                                              return k().wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (
                                                        "NotAllowedError" ===
                                                          t.name &&
                                                        r.autoPlayMuted
                                                      )
                                                        return (
                                                          (e.next = 3),
                                                          n.setMuted(!0)
                                                        );
                                                      e.next = 5;
                                                      break;
                                                    case 3:
                                                      return (
                                                        (e.next = 5),
                                                        n
                                                          .play()
                                                          .catch(function (e) {
                                                            return console.error(
                                                              "Couldn't play the video from TimingSrcConnector. Error:",
                                                              e
                                                            );
                                                          })
                                                      );
                                                    case 5:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (e) {
                                            return t.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    );
                                  e.next = 19;
                                  break;
                                case 18:
                                  this.updatePlayer(t, n, r);
                                case 19:
                                  return (e.next = 21), n.getPlaybackRate();
                                case 21:
                                  if (
                                    ((e.t2 = e.sent), (e.t3 = i), e.t2 === e.t3)
                                  ) {
                                    e.next = 25;
                                    break;
                                  }
                                  n.setPlaybackRate(i);
                                case 25:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e, t, n) {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: "maintainPlaybackPosition",
                  value: function (i, a, e) {
                    var u = this,
                      c = e.allowedDrift,
                      s = e.maxAllowedDrift,
                      t = e.minCheckInterval,
                      l = e.maxRateAdjustment,
                      f = e.maxTimeToCatchUp,
                      e = 1e3 * Math.min(f, Math.max(t, s)),
                      n = (function () {
                        var e = d(
                          k().mark(function e() {
                            var t, n, r, o;
                            return k().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.t0 = 0 === i.query().velocity), e.t0)
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (e.next = 4), a.getPaused();
                                  case 4:
                                    (e.t1 = e.sent), (e.t0 = !0 === e.t1);
                                  case 6:
                                    if (e.t0) return e.abrupt("return");
                                    e.next = 8;
                                    break;
                                  case 8:
                                    return (
                                      (e.t2 = i.query().position),
                                      (e.next = 11),
                                      a.getCurrentTime()
                                    );
                                  case 11:
                                    if (
                                      ((e.t3 = e.sent),
                                      (t = e.t2 - e.t3),
                                      (n = Math.abs(t)),
                                      u.log("Drift: ".concat(t)),
                                      s < n)
                                    )
                                      return (e.next = 18), u.adjustSpeed(a, 0);
                                    e.next = 22;
                                    break;
                                  case 18:
                                    a.setCurrentTime(i.query().position),
                                      u.log("Resync by currentTime"),
                                      (e.next = 29);
                                    break;
                                  case 22:
                                    if (c < n)
                                      return (
                                        (o =
                                          (o = n / f) < (r = l)
                                            ? (r - o) / 2
                                            : r),
                                        (e.next = 28),
                                        u.adjustSpeed(a, o * Math.sign(t))
                                      );
                                    e.next = 29;
                                    break;
                                  case 28:
                                    u.log("Resync by playbackRate");
                                  case 29:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      r = setInterval(function () {
                        return n();
                      }, e);
                    return {
                      cancel: function () {
                        return clearInterval(r);
                      },
                    };
                  },
                },
                {
                  key: "log",
                  value: function (e) {
                    var t;
                    null != (t = this.logger) &&
                      t.call(this, "TimingSrcConnector: ".concat(e));
                  },
                },
                {
                  key: "waitForTOReadyState",
                  value: function (n, r) {
                    return new Promise(function (t) {
                      (function e() {
                        n.readyState === r
                          ? t()
                          : n.addEventListener("readystatechange", e, {
                              once: !0,
                            });
                      })();
                    });
                  },
                },
              ]),
              a
            );
          })(D(EventTarget)),
          M = new WeakMap(),
          F = new WeakMap(),
          L = {},
          I = (function () {
            function r(i) {
              var a = this,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                (s(this, r),
                window.jQuery &&
                  i instanceof jQuery &&
                  (1 < i.length &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "A jQuery object with multiple elements was passed, using the first element."
                    ),
                  (i = i[0])),
                "undefined" != typeof document &&
                  "string" == typeof i &&
                  (i = document.getElementById(i)),
                (n = i),
                !Boolean(
                  n &&
                    1 === n.nodeType &&
                    "nodeName" in n &&
                    n.ownerDocument &&
                    n.ownerDocument.defaultView
                ))
              )
                throw new TypeError(
                  "You must pass either a valid element or a valid id."
                );
              if (
                "IFRAME" ===
                  (i =
                    "IFRAME" !== i.nodeName && (n = i.querySelector("iframe"))
                      ? n
                      : i).nodeName &&
                !m(i.getAttribute("src") || "")
              )
                throw new Error(
                  "The player element passed isnâ€™t a Vimeo embed."
                );
              if (M.has(i)) return M.get(i);
              (this._window = i.ownerDocument.defaultView),
                (this.element = i),
                (this.origin = "*");
              var e,
                n = new w(function (r, o) {
                  var e;
                  (a._onMessage = function (e) {
                    var t, n;
                    m(e.origin) &&
                      a.element.contentWindow === e.source &&
                      ("*" === a.origin && (a.origin = e.origin),
                      (e = O(e.data)) &&
                      "error" === e.event &&
                      e.data &&
                      "ready" === e.data.method
                        ? (((t = new Error(e.data.message)).name = e.data.name),
                          o(t))
                        : ((t = e && "ready" === e.event),
                          (n = e && "ping" === e.method),
                          t || n
                            ? (a.element.setAttribute("data-ready", "true"),
                              r())
                            : J(a, e)));
                  }),
                    a._window.addEventListener("message", a._onMessage),
                    "IFRAME" !== a.element.nodeName &&
                      K(V((e = Z(i, t))), e, i)
                        .then(function (e) {
                          var t,
                            n,
                            r = P(e, i);
                          return (
                            (a.element = r),
                            (a._originalElement = i),
                            (t = i),
                            (r = r),
                            (n = _.get(t)),
                            _.set(r, n),
                            _.delete(t),
                            M.set(a.element, a),
                            e
                          );
                        })
                        .catch(o);
                });
              return (
                F.set(this, n),
                M.set(this.element, this),
                "IFRAME" === this.element.nodeName && j(this, "ping"),
                L.isEnabled &&
                  ((e = function () {
                    return L.exit();
                  }),
                  (this.fullscreenchangeHandler = function () {
                    (L.isFullscreen ? x : A)(a, "event:exitFullscreen", e),
                      a.ready().then(function () {
                        j(a, "fullscreenchange", L.isFullscreen);
                      });
                  }),
                  L.on("fullscreenchange", this.fullscreenchangeHandler)),
                this
              );
            }
            var n;
            return (
              l(r, [
                {
                  key: "callMethod",
                  value: function (n) {
                    var r = this,
                      o =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return new w(function (e, t) {
                      return r
                        .ready()
                        .then(function () {
                          x(r, n, { resolve: e, reject: t }), j(r, n, o);
                        })
                        .catch(t);
                    });
                  },
                },
                {
                  key: "get",
                  value: function (n) {
                    var r = this;
                    return new w(function (e, t) {
                      return (
                        (n = W(n, "get")),
                        r
                          .ready()
                          .then(function () {
                            x(r, n, { resolve: e, reject: t }), j(r, n);
                          })
                          .catch(t)
                      );
                    });
                  },
                },
                {
                  key: "set",
                  value: function (n, r) {
                    var o = this;
                    return new w(function (e, t) {
                      if (((n = W(n, "set")), null == r))
                        throw new TypeError("There must be a value to set.");
                      return o
                        .ready()
                        .then(function () {
                          x(o, n, { resolve: e, reject: t }), j(o, n, r);
                        })
                        .catch(t);
                    });
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (!t)
                      throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof t)
                      throw new TypeError("The callback must be a function.");
                    0 === E(this, "event:".concat(e)).length &&
                      this.callMethod("addEventListener", e).catch(
                        function () {}
                      ),
                      x(this, "event:".concat(e), t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (t && "function" != typeof t)
                      throw new TypeError("The callback must be a function.");
                    A(this, "event:".concat(e), t) &&
                      this.callMethod("removeEventListener", e).catch(function (
                        e
                      ) {});
                  },
                },
                {
                  key: "loadVideo",
                  value: function (e) {
                    return this.callMethod("loadVideo", e);
                  },
                },
                {
                  key: "ready",
                  value: function () {
                    var e =
                      F.get(this) ||
                      new w(function (e, t) {
                        t(new Error("Unknown player. Probably unloaded."));
                      });
                    return w.resolve(e);
                  },
                },
                {
                  key: "addCuePoint",
                  value: function (e) {
                    return this.callMethod("addCuePoint", {
                      time: e,
                      data:
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                    });
                  },
                },
                {
                  key: "removeCuePoint",
                  value: function (e) {
                    return this.callMethod("removeCuePoint", e);
                  },
                },
                {
                  key: "enableTextTrack",
                  value: function (e, t) {
                    if (e)
                      return this.callMethod("enableTextTrack", {
                        language: e,
                        kind: t,
                      });
                    throw new TypeError("You must pass a language.");
                  },
                },
                {
                  key: "disableTextTrack",
                  value: function () {
                    return this.callMethod("disableTextTrack");
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    return this.callMethod("pause");
                  },
                },
                {
                  key: "play",
                  value: function () {
                    return this.callMethod("play");
                  },
                },
                {
                  key: "requestFullscreen",
                  value: function () {
                    return L.isEnabled
                      ? L.request(this.element)
                      : this.callMethod("requestFullscreen");
                  },
                },
                {
                  key: "exitFullscreen",
                  value: function () {
                    return L.isEnabled
                      ? L.exit()
                      : this.callMethod("exitFullscreen");
                  },
                },
                {
                  key: "getFullscreen",
                  value: function () {
                    return L.isEnabled
                      ? w.resolve(L.isFullscreen)
                      : this.get("fullscreen");
                  },
                },
                {
                  key: "requestPictureInPicture",
                  value: function () {
                    return this.callMethod("requestPictureInPicture");
                  },
                },
                {
                  key: "exitPictureInPicture",
                  value: function () {
                    return this.callMethod("exitPictureInPicture");
                  },
                },
                {
                  key: "getPictureInPicture",
                  value: function () {
                    return this.get("pictureInPicture");
                  },
                },
                {
                  key: "remotePlaybackPrompt",
                  value: function () {
                    return this.callMethod("remotePlaybackPrompt");
                  },
                },
                {
                  key: "unload",
                  value: function () {
                    return this.callMethod("unload");
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var n = this;
                    return new w(function (e) {
                      var t;
                      F.delete(n),
                        M.delete(n.element),
                        n._originalElement &&
                          (M.delete(n._originalElement),
                          n._originalElement.removeAttribute(
                            "data-vimeo-initialized"
                          )),
                        n.element &&
                          "IFRAME" === n.element.nodeName &&
                          n.element.parentNode &&
                          (n.element.parentNode.parentNode &&
                          n._originalElement &&
                          n._originalElement !== n.element.parentNode
                            ? n.element.parentNode.parentNode.removeChild(
                                n.element.parentNode
                              )
                            : n.element.parentNode.removeChild(n.element)),
                        n.element &&
                          "DIV" === n.element.nodeName &&
                          n.element.parentNode &&
                          (n.element.removeAttribute("data-vimeo-initialized"),
                          (t = n.element.querySelector("iframe"))) &&
                          t.parentNode &&
                          (t.parentNode.parentNode &&
                          n._originalElement &&
                          n._originalElement !== t.parentNode
                            ? t.parentNode.parentNode.removeChild(t.parentNode)
                            : t.parentNode.removeChild(t)),
                        n._window.removeEventListener("message", n._onMessage),
                        L.isEnabled &&
                          L.off("fullscreenchange", n.fullscreenchangeHandler),
                        e();
                    });
                  },
                },
                {
                  key: "getAutopause",
                  value: function () {
                    return this.get("autopause");
                  },
                },
                {
                  key: "setAutopause",
                  value: function (e) {
                    return this.set("autopause", e);
                  },
                },
                {
                  key: "getBuffered",
                  value: function () {
                    return this.get("buffered");
                  },
                },
                {
                  key: "getCameraProps",
                  value: function () {
                    return this.get("cameraProps");
                  },
                },
                {
                  key: "setCameraProps",
                  value: function (e) {
                    return this.set("cameraProps", e);
                  },
                },
                {
                  key: "getChapters",
                  value: function () {
                    return this.get("chapters");
                  },
                },
                {
                  key: "getCurrentChapter",
                  value: function () {
                    return this.get("currentChapter");
                  },
                },
                {
                  key: "getColor",
                  value: function () {
                    return this.get("color");
                  },
                },
                {
                  key: "getColors",
                  value: function () {
                    return w.all([
                      this.get("colorOne"),
                      this.get("colorTwo"),
                      this.get("colorThree"),
                      this.get("colorFour"),
                    ]);
                  },
                },
                {
                  key: "setColor",
                  value: function (e) {
                    return this.set("color", e);
                  },
                },
                {
                  key: "setColors",
                  value: function (e) {
                    var t;
                    return Array.isArray(e)
                      ? ((t = new w(function (e) {
                          return e(null);
                        })),
                        (e = [
                          e[0] ? this.set("colorOne", e[0]) : t,
                          e[1] ? this.set("colorTwo", e[1]) : t,
                          e[2] ? this.set("colorThree", e[2]) : t,
                          e[3] ? this.set("colorFour", e[3]) : t,
                        ]),
                        w.all(e))
                      : new w(function (e, t) {
                          return t(new TypeError("Argument must be an array."));
                        });
                  },
                },
                {
                  key: "getCuePoints",
                  value: function () {
                    return this.get("cuePoints");
                  },
                },
                {
                  key: "getCurrentTime",
                  value: function () {
                    return this.get("currentTime");
                  },
                },
                {
                  key: "setCurrentTime",
                  value: function (e) {
                    return this.set("currentTime", e);
                  },
                },
                {
                  key: "getDuration",
                  value: function () {
                    return this.get("duration");
                  },
                },
                {
                  key: "getEnded",
                  value: function () {
                    return this.get("ended");
                  },
                },
                {
                  key: "getLoop",
                  value: function () {
                    return this.get("loop");
                  },
                },
                {
                  key: "setLoop",
                  value: function (e) {
                    return this.set("loop", e);
                  },
                },
                {
                  key: "setMuted",
                  value: function (e) {
                    return this.set("muted", e);
                  },
                },
                {
                  key: "getMuted",
                  value: function () {
                    return this.get("muted");
                  },
                },
                {
                  key: "getPaused",
                  value: function () {
                    return this.get("paused");
                  },
                },
                {
                  key: "getPlaybackRate",
                  value: function () {
                    return this.get("playbackRate");
                  },
                },
                {
                  key: "setPlaybackRate",
                  value: function (e) {
                    return this.set("playbackRate", e);
                  },
                },
                {
                  key: "getPlayed",
                  value: function () {
                    return this.get("played");
                  },
                },
                {
                  key: "getQualities",
                  value: function () {
                    return this.get("qualities");
                  },
                },
                {
                  key: "getQuality",
                  value: function () {
                    return this.get("quality");
                  },
                },
                {
                  key: "setQuality",
                  value: function (e) {
                    return this.set("quality", e);
                  },
                },
                {
                  key: "getRemotePlaybackAvailability",
                  value: function () {
                    return this.get("remotePlaybackAvailability");
                  },
                },
                {
                  key: "getRemotePlaybackState",
                  value: function () {
                    return this.get("remotePlaybackState");
                  },
                },
                {
                  key: "getSeekable",
                  value: function () {
                    return this.get("seekable");
                  },
                },
                {
                  key: "getSeeking",
                  value: function () {
                    return this.get("seeking");
                  },
                },
                {
                  key: "getTextTracks",
                  value: function () {
                    return this.get("textTracks");
                  },
                },
                {
                  key: "getVideoEmbedCode",
                  value: function () {
                    return this.get("videoEmbedCode");
                  },
                },
                {
                  key: "getVideoId",
                  value: function () {
                    return this.get("videoId");
                  },
                },
                {
                  key: "getVideoTitle",
                  value: function () {
                    return this.get("videoTitle");
                  },
                },
                {
                  key: "getVideoWidth",
                  value: function () {
                    return this.get("videoWidth");
                  },
                },
                {
                  key: "getVideoHeight",
                  value: function () {
                    return this.get("videoHeight");
                  },
                },
                {
                  key: "getVideoUrl",
                  value: function () {
                    return this.get("videoUrl");
                  },
                },
                {
                  key: "getVolume",
                  value: function () {
                    return this.get("volume");
                  },
                },
                {
                  key: "setVolume",
                  value: function (e) {
                    return this.set("volume", e);
                  },
                },
                {
                  key: "setTimingSrc",
                  value:
                    ((n = d(
                      k().mark(function e(t, n) {
                        var r,
                          o = this;
                        return k().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new TypeError(
                                    "A Timing Object must be provided."
                                  );
                                case 2:
                                  return (e.next = 4), this.ready();
                                case 4:
                                  return (
                                    (r = new re(this, t, n)),
                                    j(this, "notifyTimingObjectConnect"),
                                    r.addEventListener(
                                      "disconnect",
                                      function () {
                                        return j(
                                          o,
                                          "notifyTimingObjectDisconnect"
                                        );
                                      }
                                    ),
                                    e.abrupt("return", r)
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e, t) {
                      return n.apply(this, arguments);
                    }),
                },
              ]),
              r
            );
          })();
        H ||
          ((C = (function () {
            for (
              var e,
                t = [
                  [
                    "requestFullscreen",
                    "exitFullscreen",
                    "fullscreenElement",
                    "fullscreenEnabled",
                    "fullscreenchange",
                    "fullscreenerror",
                  ],
                  [
                    "webkitRequestFullscreen",
                    "webkitExitFullscreen",
                    "webkitFullscreenElement",
                    "webkitFullscreenEnabled",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "webkitRequestFullScreen",
                    "webkitCancelFullScreen",
                    "webkitCurrentFullScreenElement",
                    "webkitCancelFullScreen",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "mozRequestFullScreen",
                    "mozCancelFullScreen",
                    "mozFullScreenElement",
                    "mozFullScreenEnabled",
                    "mozfullscreenchange",
                    "mozfullscreenerror",
                  ],
                  [
                    "msRequestFullscreen",
                    "msExitFullscreen",
                    "msFullscreenElement",
                    "msFullscreenEnabled",
                    "MSFullscreenChange",
                    "MSFullscreenError",
                  ],
                ],
                n = 0,
                r = t.length,
                o = {};
              n < r;
              n++
            )
              if ((e = t[n]) && e[1] in document) {
                for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                return o;
              }
            return !1;
          })()),
          (T = {
            fullscreenchange: C.fullscreenchange,
            fullscreenerror: C.fullscreenerror,
          }),
          (S = {
            request: function (o) {
              return new Promise(function (e, t) {
                function n() {
                  S.off("fullscreenchange", n), e();
                }
                S.on("fullscreenchange", n);
                var r = (o = o || document.documentElement)[
                  C.requestFullscreen
                ]();
                r instanceof Promise && r.then(n).catch(t);
              });
            },
            exit: function () {
              return new Promise(function (t, e) {
                var n, r;
                S.isFullscreen
                  ? (S.on(
                      "fullscreenchange",
                      (n = function e() {
                        S.off("fullscreenchange", e), t();
                      })
                    ),
                    (r = document[C.exitFullscreen]()) instanceof Promise &&
                      r.then(n).catch(e))
                  : t();
              });
            },
            on: function (e, t) {
              e = T[e];
              e && document.addEventListener(e, t);
            },
            off: function (e, t) {
              e = T[e];
              e && document.removeEventListener(e, t);
            },
          }),
          Object.defineProperties(S, {
            isFullscreen: {
              get: function () {
                return Boolean(document[C.fullscreenElement]);
              },
            },
            element: {
              enumerable: !0,
              get: function () {
                return document[C.fullscreenElement];
              },
            },
            isEnabled: {
              enumerable: !0,
              get: function () {
                return Boolean(document[C.fullscreenEnabled]);
              },
            },
          }),
          (L = S),
          ee(),
          (function (e) {
            var r = 0 < arguments.length && void 0 !== e ? e : document;
            window.VimeoPlayerResizeEmbeds_ ||
              ((window.VimeoPlayerResizeEmbeds_ = !0),
              window.addEventListener("message", function (e) {
                if (m(e.origin) && e.data && "spacechange" === e.data.event)
                  for (
                    var t = r.querySelectorAll("iframe"), n = 0;
                    n < t.length;
                    n++
                  )
                    if (t[n].contentWindow === e.source) {
                      t[n].parentElement.style.paddingBottom = "".concat(
                        e.data.data[0].bottom,
                        "px"
                      );
                      break;
                    }
              }));
          })(),
          (function (e) {
            var a = 0 < arguments.length && void 0 !== e ? e : document;
            window.VimeoSeoMetadataAppended ||
              ((window.VimeoSeoMetadataAppended = !0),
              window.addEventListener("message", function (e) {
                if (m(e.origin)) {
                  var t = O(e.data);
                  if (t && "ready" === t.event)
                    for (
                      var n = a.querySelectorAll("iframe"), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r],
                        i = o.contentWindow === e.source;
                      q(o.src) &&
                        i &&
                        new I(o).callMethod(
                          "appendVideoMetadata",
                          window.location.href
                        );
                    }
                }
              }));
          })(),
          te()),
          (oe.default = I);
      }.call(this, t(4), t(13).setImmediate);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      o = (Object.defineProperty(t, "__esModule", { value: !0 }), n(5)),
      i = r(n(0));
    function a(e) {
      e.target.mute(), e.target.playVideo();
    }
    function c(e) {
      e.getIframe().parentNode && (e.seekTo(0.2, !0), e.playVideo());
    }
    function u(a, u) {
      return function (e) {
        var t,
          n,
          r,
          o = e.data,
          i = e.target;
        switch (o) {
          case YT.PlayerState.PLAYING:
            return (
              (u.style.opacity = "1"),
              (n = a),
              void (
                0 < (r = (t = i).getDuration() - t.getCurrentTime() - 0.2) &&
                (window.clearTimeout(n),
                window.setTimeout(function () {
                  c(t);
                }, 1e3 * r))
              )
            );
          case YT.PlayerState.BUFFERING:
            return void window.clearTimeout(a);
          case YT.PlayerState.ENDED:
            window.clearTimeout(a), c(i);
        }
      };
    }
    t.default = function () {
      var e,
        t = (0, i.default)(".lp-pom-video-background iframe.youtube");
      0 !== t.length &&
        ((0, o.isInternetExplorer)() ||
          t.forEach(function (e) {
            e.style.opacity = "0";
          }),
        (window.onYouTubeIframeAPIReady = function () {
          t.forEach(function (e) {
            new window.YT.Player(e.id, {
              events: { onReady: a, onStateChange: u(0, e) },
            });
          }),
            delete window.onYouTubeIframeAPIReady;
        }),
        ((e = document.createElement("script")).src =
          "https://www.youtube.com/iframe_api"),
        document.head.appendChild(e));
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        (e = void 0 === e ? window : e).ub.page.visitorId =
          e.ub.visitorId || null;
      });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              (o &&
                ("get" in o ? t.__esModule : !o.writable && !o.configurable)) ||
                (o = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, o);
            }
          : function (e, t, n, r) {
              e[(r = void 0 === r ? n : r)] = t[n];
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n);
          return o(t, e), t;
        },
      a = (Object.defineProperty(t, "__esModule", { value: !0 }), i(n(61))),
      u = n(19);
    t.default = function () {
      window.ub.page.webFonts &&
        0 < window.ub.page.webFonts.length &&
        a.load({
          google: {
            families: window.ub.page.webFonts,
            api: "https://fonts.ub-assets.com/css",
          },
          active: function () {
            (0, u.runTextFixes)();
          },
        });
    };
  },
  function (e, t, N) {
    var u, c, o, n, h, k, A, O, j, P, r, i;
    function B(e, t, n) {
      return e.call.apply(e.bind, arguments);
    }
    function D(t, n, e) {
      var r;
      if (t)
        return 2 < arguments.length
          ? ((r = Array.prototype.slice.call(arguments, 2)),
            function () {
              var e = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(e, r), t.apply(n, e);
            })
          : function () {
              return t.apply(n, arguments);
            };
      throw Error();
    }
    function m(e, t, n) {
      return (m =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? B
          : D).apply(null, arguments);
    }
    function R(e, t) {
      (this.a = e), (this.o = t || e), (this.c = this.o.document);
    }
    function s(e, t, n, r) {
      if (((t = e.c.createElement(t)), n))
        for (var o in n)
          n.hasOwnProperty(o) &&
            ("style" == o ? (t.style.cssText = n[o]) : t.setAttribute(o, n[o]));
      return r && t.appendChild(e.c.createTextNode(r)), t;
    }
    function l(e, t, n) {
      (e =
        (e = e.c.getElementsByTagName(t)[0]) ||
        document.documentElement).insertBefore(n, e.lastChild);
    }
    function a(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function v(e, t, n) {
      (t = t || []), (n = n || []);
      for (var r = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
        for (var i = !1, a = 0; a < r.length; a += 1)
          if (t[o] === r[a]) {
            i = !0;
            break;
          }
        i || r.push(t[o]);
      }
      for (t = [], o = 0; o < r.length; o += 1) {
        for (i = !1, a = 0; a < n.length; a += 1)
          if (r[o] === n[a]) {
            i = !0;
            break;
          }
        i || t.push(r[o]);
      }
      e.className = t
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/, "");
    }
    function f(e, t) {
      for (var n = e.className.split(/\s+/), r = 0, o = n.length; r < o; r++)
        if (n[r] == t) return !0;
      return !1;
    }
    function C(e, t, n) {
      function r() {
        a && o && (a(i), (a = null));
      }
      t = s(e, "link", { rel: "stylesheet", href: t, media: "all" });
      var o = !1,
        i = null,
        a = n || null;
      c
        ? ((t.onload = function () {
            (o = !0), r();
          }),
          (t.onerror = function () {
            (o = !0), (i = Error("Stylesheet failed to load")), r();
          }))
        : setTimeout(function () {
            (o = !0), r();
          }, 0),
        l(e, "head", t);
    }
    function d(e, t, n, r) {
      var o,
        i,
        a = e.c.getElementsByTagName("head")[0];
      return a
        ? ((o = s(e, "script", { src: t })),
          (i = !1),
          (o.onload = o.onreadystatechange =
            function () {
              i ||
                (this.readyState &&
                  "loaded" != this.readyState &&
                  "complete" != this.readyState) ||
                ((i = !0),
                n && n(null),
                (o.onload = o.onreadystatechange = null),
                "HEAD" == o.parentNode.tagName && a.removeChild(o));
            }),
          a.appendChild(o),
          setTimeout(function () {
            i || ((i = !0), n && n(Error("Script load timeout")));
          }, r || 5e3),
          o)
        : null;
    }
    function T() {
      (this.a = 0), (this.c = null);
    }
    function S(e) {
      return (
        e.a++,
        function () {
          e.a--, p(e);
        }
      );
    }
    function M(e, t) {
      (e.c = t), p(e);
    }
    function p(e) {
      0 == e.a && e.c && (e.c(), (e.c = null));
    }
    function y(e) {
      this.a = e || "-";
    }
    function F(e, t) {
      (this.c = e), (this.f = 4), (this.a = "n");
      e = (t || "n4").match(/^([nio])([1-9])$/i);
      e && ((this.a = e[1]), (this.f = parseInt(e[2], 10)));
    }
    function g(e) {
      var t = [];
      e = e.split(/,\s*/);
      for (var n = 0; n < e.length; n++) {
        var r = e[n].replace(/['"]/g, "");
        -1 != r.indexOf(" ") || /^\d/.test(r)
          ? t.push("'" + r + "'")
          : t.push(r);
      }
      return t.join(",");
    }
    function b(e) {
      return e.a + e.f;
    }
    function U(e) {
      var t = "normal";
      return "o" === e.a ? (t = "oblique") : "i" === e.a && (t = "italic"), t;
    }
    function H(e, t) {
      (this.c = e),
        (this.f = e.o.document.documentElement),
        (this.h = t),
        (this.a = new y("-")),
        (this.j = !1 !== t.events),
        (this.g = !1 !== t.classes);
    }
    function W(e) {
      var t, n, r;
      e.g &&
        ((t = f(e.f, e.a.c("wf", "active"))),
        (n = []),
        (r = [e.a.c("wf", "loading")]),
        t || n.push(e.a.c("wf", "inactive")),
        v(e.f, n, r)),
        w(e, "inactive");
    }
    function w(e, t, n) {
      e.j && e.h[t] && (n ? e.h[t](n.c, b(n)) : e.h[t]());
    }
    function q() {
      this.c = {};
    }
    function _(e, t) {
      (this.c = e),
        (this.f = t),
        (this.a = s(this.c, "span", { "aria-hidden": "true" }, this.f));
    }
    function x(e) {
      l(e.c, "body", e.a);
    }
    function E(e) {
      return (
        "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
        g(e.c) +
        ";font-style:" +
        U(e) +
        ";font-weight:" +
        e.f +
        "00;"
      );
    }
    function V(e, t, n, r, o, i) {
      (this.g = e),
        (this.j = t),
        (this.a = r),
        (this.c = n),
        (this.f = o || 3e3),
        (this.h = i || void 0);
    }
    function z(e, t, n, r, o, i, a) {
      (this.v = e),
        (this.B = t),
        (this.c = n),
        (this.a = r),
        (this.s = a || "BESbswy"),
        (this.f = {}),
        (this.w = o || 3e3),
        (this.u = i || null),
        (this.m = this.j = this.h = this.g = null),
        (this.g = new _(this.c, this.s)),
        (this.h = new _(this.c, this.s)),
        (this.j = new _(this.c, this.s)),
        (this.m = new _(this.c, this.s)),
        (e = E((e = new F(this.a.c + ",serif", b(this.a))))),
        (this.g.a.style.cssText = e),
        (e = E((e = new F(this.a.c + ",sans-serif", b(this.a))))),
        (this.h.a.style.cssText = e),
        (e = E((e = new F("serif", b(this.a))))),
        (this.j.a.style.cssText = e),
        (e = E((e = new F("sans-serif", b(this.a))))),
        (this.m.a.style.cssText = e),
        x(this.g),
        x(this.h),
        x(this.j),
        x(this.m);
    }
    function G() {
      var e;
      return (
        null === n &&
          ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
            window.navigator.userAgent
          )),
          (n =
            !!e &&
            (parseInt(e[1], 10) < 536 ||
              (536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)))),
        n
      );
    }
    function Y(e, t, n) {
      for (var r in o)
        if (o.hasOwnProperty(r) && t === e.f[o[r]] && n === e.f[o[r]])
          return !0;
      return !1;
    }
    function $(e) {
      var t = e.g.a.offsetWidth,
        n = e.h.a.offsetWidth;
      (t === e.f.serif && n === e.f["sans-serif"]) || (G() && Y(e, t, n))
        ? u() - e.A >= e.w
          ? G() && Y(e, t, n) && (null === e.u || e.u.hasOwnProperty(e.a.c))
            ? L(e, e.v)
            : L(e, e.B)
          : setTimeout(
              m(function () {
                $(this);
              }, e),
              50
            )
        : L(e, e.v);
    }
    function L(e, t) {
      setTimeout(
        m(function () {
          a(this.g.a), a(this.h.a), a(this.j.a), a(this.m.a), t(this.a);
        }, e),
        0
      );
    }
    function I(e, t, n) {
      (this.c = e),
        (this.a = t),
        (this.f = 0),
        (this.m = this.j = !1),
        (this.s = n);
    }
    function Q(e) {
      0 == --e.f &&
        e.j &&
        (e.m
          ? ((e = e.a).g &&
              v(
                e.f,
                [e.a.c("wf", "active")],
                [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]
              ),
            w(e, "active"))
          : W(e.a));
    }
    function J(e) {
      (this.j = e), (this.a = new q()), (this.h = 0), (this.f = this.g = !0);
    }
    function X(e, t) {
      (this.c = e), (this.a = t);
    }
    function Z(e, t) {
      (this.c = e), (this.a = t);
    }
    function K(e, t) {
      (this.c = e || "https://fonts.googleapis.com/css"),
        (this.a = []),
        (this.f = []),
        (this.g = t || "");
    }
    function ee(e) {
      (this.f = e), (this.a = []), (this.c = {});
    }
    function te(e, t) {
      (this.c = e), (this.a = t);
    }
    function ne(e, t) {
      (this.c = e), (this.a = t);
    }
    function re(e, t) {
      (this.c = e), (this.f = t), (this.a = []);
    }
    (u =
      Date.now ||
      function () {
        return +new Date();
      }),
      (c = !!window.FontFace),
      (y.prototype.c = function (e) {
        for (var t = [], n = 0; n < arguments.length; n++)
          t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return t.join(this.a);
      }),
      (V.prototype.start = function () {
        var o = this.c.o.document,
          i = this,
          a = u(),
          e = new Promise(function (n, r) {
            !(function t() {
              var e;
              u() - a >= i.f
                ? r()
                : o.fonts
                    .load(U((e = i.a)) + " " + e.f + "00 300px " + g(e.c), i.h)
                    .then(
                      function (e) {
                        1 <= e.length ? n() : setTimeout(t, 25);
                      },
                      function () {
                        r();
                      }
                    );
            })();
          }),
          n = null,
          t = new Promise(function (e, t) {
            n = setTimeout(t, i.f);
          });
        Promise.race([t, e]).then(
          function () {
            n && (clearTimeout(n), (n = null)), i.g(i.a);
          },
          function () {
            i.j(i.a);
          }
        );
      }),
      (o = { D: "serif", C: "sans-serif" }),
      (n = null),
      (z.prototype.start = function () {
        (this.f.serif = this.j.a.offsetWidth),
          (this.f["sans-serif"] = this.m.a.offsetWidth),
          (this.A = u()),
          $(this);
      }),
      (h = null),
      (I.prototype.g = function (e) {
        var t = this.a;
        t.g &&
          v(
            t.f,
            [t.a.c("wf", e.c, b(e).toString(), "active")],
            [
              t.a.c("wf", e.c, b(e).toString(), "loading"),
              t.a.c("wf", e.c, b(e).toString(), "inactive"),
            ]
          ),
          w(t, "fontactive", e),
          (this.m = !0),
          Q(this);
      }),
      (I.prototype.h = function (e) {
        var t,
          n,
          r,
          o = this.a;
        o.g &&
          ((t = f(o.f, o.a.c("wf", e.c, b(e).toString(), "active"))),
          (n = []),
          (r = [o.a.c("wf", e.c, b(e).toString(), "loading")]),
          t || n.push(o.a.c("wf", e.c, b(e).toString(), "inactive")),
          v(o.f, n, r)),
          w(o, "fontinactive", e),
          Q(this);
      }),
      (J.prototype.load = function (e) {
        (this.c = new R(this.j, e.context || this.j)),
          (this.g = !1 !== e.events),
          (this.f = !1 !== e.classes);
        var r = this,
          t = new H(this.c, e),
          n = e,
          o = [],
          e = n.timeout,
          o =
            ((function (e) {
              e.g && v(e.f, [e.a.c("wf", "loading")]), w(e, "loading");
            })(t),
            (function (e, t, n) {
              var r,
                o,
                i = [];
              for (r in t)
                t.hasOwnProperty(r) && (o = e.c[r]) && i.push(o(t[r], n));
              return i;
            })(r.a, n, r.c)),
          i = new I(r.c, t, e);
        for (r.h = o.length, t = 0, n = o.length; t < n; t++)
          o[t].load(function (e, t, n) {
            var s, l, f, d, p;
            (s = i),
              (l = e),
              (f = t),
              (d = n),
              (p = 0 == --(e = r).h),
              (e.f || e.g) &&
                setTimeout(function () {
                  var e = d || null,
                    t = f || {};
                  if (0 === l.length && p) W(s.a);
                  else {
                    (s.f += l.length), p && (s.j = p);
                    for (var n = [], r = 0; r < l.length; r++) {
                      var o,
                        i = l[r],
                        a = t[i.c],
                        u = s.a,
                        c = i;
                      u.g &&
                        v(u.f, [u.a.c("wf", c.c, b(c).toString(), "loading")]),
                        w(u, "fontloading", c),
                        (u = (h =
                          (u = null) === h
                            ? !!window.FontFace &&
                              ((c = /Gecko.*Firefox\/(\d+)/.exec(
                                window.navigator.userAgent
                              )),
                              (o =
                                /OS X.*Version\/10\..*Safari/.exec(
                                  window.navigator.userAgent
                                ) && /Apple/.exec(window.navigator.vendor)),
                              c ? 42 < parseInt(c[1], 10) : !o)
                            : h)
                          ? new V(m(s.g, s), m(s.h, s), s.c, i, s.s, a)
                          : new z(m(s.g, s), m(s.h, s), s.c, i, s.s, e, a)),
                        n.push(u);
                    }
                    for (r = 0; r < n.length; r++) n[r].start();
                  }
                }, 0);
          });
      }),
      (X.prototype.load = function (a) {
        var u,
          t = this,
          c = t.a.projectId,
          e = t.a.version;
        c
          ? ((u = t.c.o),
            (d(
              this.c,
              (t.a.api || "https://fast.fonts.net/jsapi") +
                "/" +
                c +
                ".js" +
                (e ? "?v=" + e : ""),
              function (e) {
                e
                  ? a([])
                  : ((u["__MonotypeConfiguration__" + c] = function () {
                      return t.a;
                    }),
                    (function e() {
                      if (u["__mti_fntLst" + c]) {
                        var t,
                          n = u["__mti_fntLst" + c](),
                          r = [];
                        if (n)
                          for (var o = 0; o < n.length; o++) {
                            var i = n[o].fontfamily;
                            null != n[o].fontStyle && null != n[o].fontWeight
                              ? ((t = n[o].fontStyle + n[o].fontWeight),
                                r.push(new F(i, t)))
                              : r.push(new F(i));
                          }
                        a(r);
                      } else
                        setTimeout(function () {
                          e();
                        }, 50);
                    })());
              }
            ).id = "__MonotypeAPIScript__" + c))
          : a([]);
      }),
      (Z.prototype.load = function (e) {
        for (
          var t = this.a.urls || [],
            n = this.a.families || [],
            r = this.a.testStrings || {},
            o = new T(),
            i = 0,
            a = t.length;
          i < a;
          i++
        )
          C(this.c, t[i], S(o));
        var u = [];
        for (i = 0, a = n.length; i < a; i++)
          if ((t = n[i].split(":"))[1])
            for (var c = t[1].split(","), s = 0; s < c.length; s += 1)
              u.push(new F(t[0], c[s]));
          else u.push(new F(t[0]));
        M(o, function () {
          e(u, r);
        });
      }),
      (k = {
        latin: "BESbswy",
        "latin-ext": "Ã§Ã¶Ã¼ÄŸÅŸ",
        cyrillic: "Ð¹ÑÐ–",
        greek: "Î±Î²Î£",
        khmer: "áž€ážáž‚",
        Hanuman: "áž€ážáž‚",
      }),
      (A = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7",
      }),
      (O = { i: "i", italic: "i", n: "n", normal: "n" }),
      (j =
        /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/),
      (P = { Arimo: !0, Cousine: !0, Tinos: !0 }),
      (te.prototype.load = function (e) {
        for (
          var t = new T(),
            n = this.c,
            r = new K(this.a.api, this.a.text),
            o = this.a.families,
            i = r,
            a = o,
            u = a.length,
            c = 0;
          c < u;
          c++
        ) {
          var s = a[c].split(":"),
            l = (3 == s.length && i.f.push(s.pop()), "");
          2 == s.length && "" != s[1] && (l = ":"), i.a.push(s.join(l));
        }
        for (var f = new ee(o), d = f, p = d.f.length, h = 0; h < p; h++) {
          var m = d.f[h].split(":"),
            v = m[0].replace(/\+/g, " "),
            y = ["n4"];
          if (2 <= m.length) {
            var g,
              b,
              w = m[1],
              _ = [];
            if (w)
              for (var x = (w = w.split(",")).length, E = 0; E < x; E++)
                (b =
                  !(b = w[E]).match(/^[\w-]+$/) ||
                  null == (g = j.exec(b.toLowerCase()))
                    ? ""
                    : [
                        (b = null == (b = g[2]) || "" == b ? "n" : O[b]),
                        (g =
                          null == (g = g[1]) || "" == g
                            ? "4"
                            : A[g] || (isNaN(g) ? "4" : g.substr(0, 1))),
                      ].join("")) && _.push(b);
            0 < _.length && (y = _),
              3 == m.length &&
                ((_ = []), 0 < (m = (m = m[2]) ? m.split(",") : _).length) &&
                (m = k[m[0]]) &&
                (d.c[v] = m);
          }
          for (
            d.c[v] || ((m = k[v]) && (d.c[v] = m)), m = 0;
            m < y.length;
            m += 1
          )
            d.a.push(new F(v, y[m]));
        }
        C(
          n,
          (function (e) {
            if (0 == e.a.length) throw Error("No fonts to load!");
            if (-1 != e.c.indexOf("kit=")) return e.c;
            for (var t = e.a.length, n = [], r = 0; r < t; r++)
              n.push(e.a[r].replace(/ /g, "+"));
            return (
              (t = e.c + "?family=" + n.join("%7C")),
              0 < e.f.length && (t += "&subset=" + e.f.join(",")),
              0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
              t
            );
          })(r),
          S(t)
        ),
          M(t, function () {
            e(f.a, f.c, P);
          });
      }),
      (ne.prototype.load = function (a) {
        var e = this.a.id,
          u = this.c.o;
        e
          ? d(
              this.c,
              (this.a.api || "https://use.typekit.net") + "/" + e + ".js",
              function (e) {
                if (e) a([]);
                else if (u.Typekit && u.Typekit.config && u.Typekit.config.fn) {
                  e = u.Typekit.config.fn;
                  for (var t = [], n = 0; n < e.length; n += 2)
                    for (var r = e[n], o = e[n + 1], i = 0; i < o.length; i++)
                      t.push(new F(r, o[i]));
                  try {
                    u.Typekit.load({ events: !1, classes: !1, async: !0 });
                  } catch (e) {}
                  a(t);
                }
              },
              2e3
            )
          : a([]);
      }),
      (re.prototype.load = function (c) {
        var e = this.f.id,
          t = this.c.o,
          s = this;
        e
          ? (t.__webfontfontdeckmodule__ || (t.__webfontfontdeckmodule__ = {}),
            (t.__webfontfontdeckmodule__[e] = function (e, t) {
              for (var n, r, o, i = 0, a = t.fonts.length; i < a; ++i) {
                var u = t.fonts[i];
                s.a.push(
                  new F(
                    u.name,
                    ((u = "font-weight:" + u.weight + ";font-style:" + u.style),
                    (o = r = n = void 0),
                    (n = 4),
                    (r = "n"),
                    (o = null),
                    u &&
                      ((o = u.match(/(normal|oblique|italic)/i)) &&
                        o[1] &&
                        (r = o[1].substr(0, 1).toLowerCase()),
                      (o = u.match(/([1-9]00|normal|bold)/i))) &&
                      o[1] &&
                      (/bold/i.test(o[1])
                        ? (n = 7)
                        : /[1-9]00/.test(o[1]) &&
                          (n = parseInt(o[1].substr(0, 1), 10))),
                    r + n)
                  )
                );
              }
              c(s.a);
            }),
            d(
              this.c,
              (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                ((t = this.c).o.location.hostname || t.a.location.hostname) +
                "/" +
                e +
                ".js",
              function (e) {
                e && c([]);
              }
            ))
          : c([]);
      }),
      ((r = new J(window)).a.c.custom = function (e, t) {
        return new Z(t, e);
      }),
      (r.a.c.fontdeck = function (e, t) {
        return new re(t, e);
      }),
      (r.a.c.monotype = function (e, t) {
        return new X(t, e);
      }),
      (r.a.c.typekit = function (e, t) {
        return new ne(t, e);
      }),
      (r.a.c.google = function (e, t) {
        return new te(t, e);
      }),
      (i = { load: m(r.load, r) }),
      void 0 !==
        (r = function () {
          return i;
        }.call(t, N, t, e)) && (e.exports = r);
  },
]);
