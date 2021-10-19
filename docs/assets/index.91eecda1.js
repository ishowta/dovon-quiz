import {
  r as e,
  R as t,
  C as r,
  V as o,
  H as l,
  I as n,
  a,
  T as c,
  S as s,
  b as i,
  F as m,
  B as u,
  u as p,
  c as d,
  d as h,
  e as f,
  f as g,
  g as E,
  h as x,
  m as b,
  i as w,
  j as y,
  k as v,
  G as S,
  l as k,
  n as C,
  o as z,
  p as F,
} from "./vendor.d1fe4bac.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const r of e)
        if ("childList" === r.type)
          for (const e of r.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const D = () => {
  const [p, d] = e.exports.useState(""),
    [h, f] = e.exports.useState([]),
    [g, E] = e.exports.useState(0);
  return t.createElement(
    r,
    { bg: "background", minH: "100vh", flexDir: "column", color: "white" },
    t.createElement(
      o,
      { spacing: "2rem" },
      t.createElement(l, null, "Dovon quiz generator"),
      t.createElement(n, {
        size: "lg",
        placeholder: "お題",
        w: "400px",
        value: p,
        onChange: (e) => d(e.target.value),
      }),
      t.createElement(
        a,
        { w: "400px", spacing: "20px" },
        t.createElement(c, { fontSize: "1rem", flexShrink: 0 }, "ドボン"),
        t.createElement(
          s,
          {
            bg: "white",
            color: "#333",
            value: g,
            onChange: (e) => E(Number.parseInt(e.target.value)),
          },
          h.map((e, r) => t.createElement("option", { value: r, key: r }, e))
        )
      ),
      t.createElement(
        r,
        { flexWrap: "wrap", w: "80vw" },
        h.map((e, o) =>
          t.createElement(
            r,
            { border: "solid 1px #555", key: o, w: "200px", h: "200px" },
            t.createElement(n, {
              placeholder: "選択肢",
              _placeholder: { color: "#fff3" },
              fontSize: "3xl",
              w: "full",
              h: "full",
              value: e,
              onChange: (e) =>
                f((t) => [...t.slice(0, o), e.target.value, ...t.slice(o + 1)]),
            })
          )
        ),
        t.createElement(
          r,
          {
            border: "solid 1px #555",
            w: "200px",
            h: "200px",
            cursor: "pointer",
            onClick: () => {
              f((e) => [...e, ""]);
            },
          },
          t.createElement(i, {
            as: m,
            w: "100px",
            h: "100px",
            color: "gray.500",
            _hover: { color: "gray.400" },
          })
        )
      ),
      t.createElement(
        u,
        {
          size: "lg",
          colorScheme: "orange",
          onClick: () => {
            const e = Math.floor(1e8 * Math.random()),
              t = new URLSearchParams({
                odai: p,
                sentakusis: h.join(","),
                dobon: (387 * e + g).toString(),
              }).toString();
            window.open(`/play?${t}`, "_blank");
          },
        },
        "Generate"
      )
    )
  );
};
const L = () => {
    const n = p(),
      a = new URLSearchParams(d().search),
      s = a.get("odai"),
      m = a.get("sentakusis").split(","),
      [x, b] = e.exports.useState(Array(m.length).fill(!1)),
      w = Number.parseInt(a.get("dobon")) % 387;
    console.log(x);
    return t.createElement(
      r,
      { bg: "background", minH: "100vh", flexDir: "column", color: "white" },
      t.createElement(
        o,
        { spacing: "1rem" },
        t.createElement(l, { color: "#fff3" }, "Dovon quiz generator"),
        t.createElement(l, null, s),
        t.createElement(
          r,
          { flexWrap: "wrap", w: "80vw" },
          m.map((e, o) =>
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                r,
                {
                  border: "solid 1px #555",
                  key: o,
                  w: "200px",
                  h: "200px",
                  _hover: { bg: "gray.800" },
                  cursor: "pointer",
                  onClick: () =>
                    ((e) => {
                      console.log(e),
                        b((t) => [...t.slice(0, e), !t[e], ...t.slice(e + 1)]);
                    })(o),
                },
                t.createElement(c, { fontSize: "3xl" }, e),
                x[o] &&
                  t.createElement(
                    t.Fragment,
                    null,
                    o === w
                      ? t.createElement(i, {
                          opacity: 0.8,
                          color: "blue.500",
                          as: h,
                          pos: "absolute",
                          w: "150px",
                          h: "150px",
                        })
                      : t.createElement(i, {
                          opacity: 0.8,
                          color: "red.500",
                          as: f,
                          pos: "absolute",
                          w: "150px",
                          h: "150px",
                        })
                  )
              )
            )
          )
        ),
        t.createElement(
          g,
          { url: location.href, title: s },
          t.createElement(E, { size: 32, round: !0 })
        ),
        t.createElement(
          u,
          {
            variant: "link",
            size: "lg",
            colorScheme: "orange",
            onClick: () => n.push("/"),
          },
          "Create new dovon quiz"
        )
      )
    );
  },
  A = x({
    colors: {
      brand: {
        50: "#EDFDFD",
        100: "#C4F1F9",
        200: "#9DECF9",
        300: "#76E4F7",
        400: "#0BC5EA",
        500: "#00B5D8",
        600: "#00A3C4",
        700: "#0987A0",
        800: "#086F83",
        900: "#065666",
      },
      background: "#282c34",
    },
    components: {
      Heading: { baseStyle: { color: "white" } },
      Text: { baseStyle: { fontSize: "2xl", color: "white" } },
    },
  });
b(w);
const I = y`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`,
  N = () =>
    t.createElement(
      v,
      { theme: A },
      t.createElement(S, { styles: I }),
      t.createElement(
        k,
        null,
        t.createElement(
          C,
          null,
          t.createElement(z, { path: "/play" }, t.createElement(L, null)),
          t.createElement(z, { path: "/" }, t.createElement(D, null))
        )
      )
    );
F.render(
  t.createElement(t.StrictMode, null, t.createElement(N, null)),
  document.getElementById("root")
);
