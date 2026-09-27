import { h as Ae, ref as G, reactive as Un, onMounted as Ke, openBlock as E, createElementBlock as A, createElementVNode as i, createVNode as X, unref as N, normalizeClass as W, withDirectives as ee, vModelCheckbox as An, vModelText as be, createStaticVNode as Hc, createTextVNode as ye, toDisplayString as L, createCommentVNode as te, getCurrentScope as Gc, inject as gr, effectScope as Wc, watch as Me, provide as Vn, defineComponent as Fe, useSlots as ch, onUnmounted as nl, withCtx as ot, renderSlot as Ye, createPropsRestProxy as fh, toRef as Ve, computed as J, getCurrentInstance as yr, onScopeDispose as Mo, nextTick as un, onBeforeMount as ph, shallowRef as an, Fragment as ue, renderList as Ne, normalizeStyle as vt, onBeforeUnmount as wa, isMemoSame as hh, createBlock as Ce, useAttrs as mh, mergeProps as _a, Teleport as Xc, isRef as rl, toRefs as vh, customRef as gh, toValue as Ie, resolveComponent as Yc, resolveDynamicComponent as Rt, markRaw as ar, readonly as yh, withModifiers as rn, vModelSelect as tt, Transition as bh, toHandlers as xh } from "vue";
const wh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Yl = (e) => e === "";
const _h = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Kl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const Sh = (e) => {
  const t = kh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var kr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Eh = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": a,
  size: s = kr.width,
  color: l = kr.stroke,
  ...c
}, { slots: u }) => Ae(
  "svg",
  {
    ...kr,
    ...c,
    width: s,
    height: s,
    stroke: l,
    "stroke-width": Yl(n) || Yl(r) || n === !0 || r === !0 ? Number(o || a || kr["stroke-width"]) * 24 / Number(s) : o || a || kr["stroke-width"],
    class: _h(
      "lucide",
      c.class,
      ...e ? [`lucide-${Kl(Sh(e))}-icon`, `lucide-${Kl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !wh(c) && { "aria-hidden": "true" }
  },
  [...t.map((d) => Ae(...d)), ...u.default ? [u.default()] : []]
);
const $e = (e, t) => (n, { slots: r, attrs: o }) => Ae(
  Eh,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const zh = $e("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Kc = $e("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const $h = $e("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Ph = $e("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const Zl = $e("calendar-days", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
const Io = $e("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const Zc = $e("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const _i = $e("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Jc = $e("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Ch = $e("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const ka = $e("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const jr = $e("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const In = $e("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Qc = $e("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const ef = $e("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const Ah = $e("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Th = $e("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Jl = $e("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Mr = $e("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const tf = $e("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Dt = $e("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Ql = $e("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Oh = $e("message-square-text", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M7 11h10", key: "1twpyw" }],
  ["path", { d: "M7 15h6", key: "d9of3u" }],
  ["path", { d: "M7 7h8", key: "af5zfr" }]
]);
const nf = $e("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Nh = $e("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const rf = $e("palette", [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
]);
const eu = $e("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const of = $e("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const af = $e("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const sf = $e("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const tu = $e("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Rh = $e("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Mh = $e("save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
const Hr = $e("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Ct = $e("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const lf = $e("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ih = $e("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ol = $e("sparkles", [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
]);
const Jo = $e("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const uf = $e("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Dh = $e("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Nn = $e("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Fh = $e("wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);
const Ot = $e("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const qn = $e("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Bh = "/zaprei";
function Lh() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function Uh(e) {
  const t = await e.text();
  let n = null;
  try {
    n = t ? JSON.parse(t) : null;
  } catch {
    n = null;
  }
  if (!e.ok) {
    const r = n?.message || Object.values(n?.errors || {}).flat()[0] || "Não foi possível concluir a operação.", o = new Error(r);
    throw o.status = e.status, o.body = n, o;
  }
  return n ?? {};
}
function qe(e, { method: t = "GET", body: n, query: r } = {}) {
  const o = new URL(Bh + e, window.location.origin);
  Object.entries(r || {}).forEach(([s, l]) => {
    l != null && l !== "" && o.searchParams.set(s, l);
  });
  const a = n instanceof FormData;
  return fetch(o, {
    method: t,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": Lh(),
      ...a || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: a ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(Uh);
}
const ze = {
  connection: () => qe("/connection"),
  saveConnection: (e) => qe("/connection", { method: "PUT", body: e }),
  testConnection: () => qe("/connection/test", { method: "POST" }),
  products: () => qe("/products"),
  groups: () => qe("/groups"),
  dailyReport: () => qe("/daily-report"),
  saveDailyReport: (e) => qe("/daily-report", { method: "PUT", body: e }),
  testDailyReport: (e) => qe("/daily-report/test", { method: "POST", body: e }),
  weeklyReport: () => qe("/weekly-report"),
  saveWeeklyReport: (e) => qe("/weekly-report", { method: "PUT", body: e }),
  testWeeklyReport: (e) => qe("/weekly-report/test", { method: "POST", body: e }),
  flows: (e) => qe("/flows", { query: { product_id: e } }),
  createFlow: (e) => qe("/flows", { method: "POST", body: e }),
  updateFlow: (e, t) => qe(`/flows/${e}`, { method: "PUT", body: t }),
  deleteFlow: (e) => qe(`/flows/${e}`, { method: "DELETE" }),
  duplicateFlow: (e) => qe(`/flows/${e}/duplicate`, { method: "POST" }),
  testFlow: (e, t) => qe(`/flows/${e}/test`, {
    method: "POST",
    body: typeof t == "string" ? { phone: t } : t
  }),
  runs: () => qe("/flows/runs"),
  retryRun: (e) => qe(`/flows/runs/${e}/retry`, { method: "POST" }),
  contacts: (e) => qe("/contacts", { query: e }),
  importContacts: (e) => qe("/contacts/import", { method: "POST", body: nu(e) }),
  deleteContact: (e) => qe(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => qe("/campaigns"),
  createCampaign: (e) => qe("/campaigns", { method: "POST", body: e }),
  campaign: (e) => qe(`/campaigns/${e}`),
  cancelCampaign: (e) => qe(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => qe("/media", { method: "POST", body: nu(e) })
};
function nu(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Vh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, qh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, jh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Hh = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, Gh = {
  key: 1,
  class: "mt-4 space-y-4"
}, Wh = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, Xh = ["placeholder"], Yh = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Kh = { class: "mt-2 flex items-center gap-2" }, Zh = ["value"], Jh = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, Qh = { class: "flex flex-wrap items-center gap-2" }, em = ["disabled"], tm = ["disabled"], nm = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, rm = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, om = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, df = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = G(!0), o = G(!1), a = G(!1), s = G(""), l = G(""), c = G(!1), u = G(!1), d = G(""), f = Un({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, s.value = "";
      try {
        const { connection: h } = await ze.connection();
        f.base_url = h.credentials.base_url || "", f.instance = h.credentials.instance || "", f.is_active = h.is_active, u.value = h.credentials.has_api_key, c.value = h.connected, d.value = h.webhook_url || "";
      } catch (h) {
        s.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      o.value = !0, s.value = "", l.value = "";
      try {
        const { connection: h } = await ze.saveConnection({ ...f });
        f.api_key = "", u.value = h.credentials.has_api_key, c.value = h.connected, d.value = h.webhook_url || "", l.value = "Conexão salva.", n("saved");
      } catch (h) {
        s.value = h.message;
      } finally {
        o.value = !1;
      }
    }
    async function m() {
      if (d.value)
        try {
          await navigator.clipboard.writeText(d.value), l.value = "URL do webhook copiada.";
        } catch {
          s.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function p() {
      a.value = !0, s.value = "", l.value = "";
      try {
        const { message: h } = await ze.testConnection();
        l.value = h || "Conexão validada.";
      } catch (h) {
        s.value = h.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(v), (h, b) => (E(), A("div", Vh, [
      i("div", qh, [
        i("div", jh, [
          X(N(of), { class: "h-5 w-5" })
        ]),
        b[5] || (b[5] = i("div", null, [
          i("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (E(), A("div", Hh, [
        X(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        b[6] || (b[6] = i("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (E(), A("div", Gh, [
        i("div", Wh, [
          b[7] || (b[7] = i("div", null, [
            i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            i("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          i("label", {
            class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ee(i("input", {
              "onUpdate:modelValue": b[0] || (b[0] = ($) => f.is_active = $),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [An, f.is_active]
            ]),
            i("span", {
              class: W(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        i("div", null, [
          b[8] || (b[8] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          ee(i("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": b[1] || (b[1] = ($) => f.base_url = $),
            type: "url",
            placeholder: "https://sua-evolution-go.com",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              be,
              f.base_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          b[9] || (b[9] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ee(i("input", {
            id: "zr-instance",
            "onUpdate:modelValue": b[2] || (b[2] = ($) => f.instance = $),
            type: "text",
            placeholder: "getfy-bot",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              be,
              f.instance,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          b[10] || (b[10] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ee(i("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": b[3] || (b[3] = ($) => f.api_key = $),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, Xh), [
            [
              be,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          b[11] || (b[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        d.value ? (E(), A("div", Yh, [
          b[13] || (b[13] = Hc('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          i("div", Kh, [
            i("input", {
              value: d.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: b[4] || (b[4] = ($) => $.target.select())
            }, null, 40, Zh),
            i("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: m
            }, [
              X(N(Qc), { class: "h-3.5 w-3.5" }),
              b[12] || (b[12] = ye(" Copiar ", -1))
            ])
          ])
        ])) : (E(), A("p", Jh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        i("div", Qh, [
          i("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, L(o.value ? "Salvando…" : "Salvar conexão"), 9, em),
          i("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, L(a.value ? "Testando…" : "Testar conexão"), 9, tm),
          c.value ? (E(), A("span", nm, [
            X(N(jr), { class: "h-3 w-3" }),
            b[14] || (b[14] = ye(" Conectado ", -1))
          ])) : te("", !0)
        ]),
        s.value ? (E(), A("p", rm, L(s.value), 1)) : l.value ? (E(), A("p", om, L(l.value), 1)) : te("", !0)
      ]))
    ]));
  }
};
function Gr(e) {
  return Gc() ? (Mo(e), !0) : !1;
}
function on(e) {
  return typeof e == "function" ? e() : N(e);
}
const am = typeof window < "u" && typeof document < "u", sm = (e) => typeof e < "u", im = Object.prototype.toString, lm = (e) => im.call(e) === "[object Object]", um = () => {
};
function dm(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const cf = (e) => e();
function cm(e = cf) {
  const t = G(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...a) => {
    t.value && e(...a);
  };
  return { isActive: yh(t), pause: n, resume: r, eventFilter: o };
}
function ru(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function fm(e, t, n = {}) {
  const {
    eventFilter: r = cf,
    ...o
  } = n;
  return Me(
    e,
    dm(
      r,
      t
    ),
    o
  );
}
function er(e, t, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: a, pause: s, resume: l, isActive: c } = cm(r);
  return { stop: fm(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: s, resume: l, isActive: c };
}
function pm(e, t = {}) {
  if (!rl(e))
    return vh(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = gh(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var a;
        if ((a = on(t.replaceRef)) != null ? a : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[r] = o, e.value = l;
          } else {
            const l = { ...e.value, [r]: o };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[r] = o;
      }
    }));
  return n;
}
function ki(e, t = !1) {
  function n(f, { flush: v = "sync", deep: y = !1, timeout: m, throwOnTimeout: p } = {}) {
    let h = null;
    const $ = [new Promise((k) => {
      h = Me(
        e,
        (P) => {
          f(P) !== t && (h?.(), k(P));
        },
        {
          flush: v,
          deep: y,
          immediate: !0
        }
      );
    })];
    return m != null && $.push(
      ru(m, p).then(() => on(e)).finally(() => h?.())
    ), Promise.race($);
  }
  function r(f, v) {
    if (!rl(f))
      return n((P) => P === f, v);
    const { flush: y = "sync", deep: m = !1, timeout: p, throwOnTimeout: h } = v ?? {};
    let b = null;
    const k = [new Promise((P) => {
      b = Me(
        [e, f],
        ([C, _]) => {
          t !== (C === _) && (b?.(), P(C));
        },
        {
          flush: y,
          deep: m,
          immediate: !0
        }
      );
    })];
    return p != null && k.push(
      ru(p, h).then(() => on(e)).finally(() => (b?.(), on(e)))
    ), Promise.race(k);
  }
  function o(f) {
    return n((v) => !!v, f);
  }
  function a(f) {
    return r(null, f);
  }
  function s(f) {
    return r(void 0, f);
  }
  function l(f) {
    return n(Number.isNaN, f);
  }
  function c(f, v) {
    return n((y) => {
      const m = Array.from(y);
      return m.includes(f) || m.includes(on(f));
    }, v);
  }
  function u(f) {
    return d(1, f);
  }
  function d(f = 1, v) {
    let y = -1;
    return n(() => (y += 1, y >= f), v);
  }
  return Array.isArray(on(e)) ? {
    toMatch: n,
    toContains: c,
    changed: u,
    changedTimes: d,
    get not() {
      return ki(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: o,
    toBeNull: a,
    toBeNaN: l,
    toBeUndefined: s,
    changed: u,
    changedTimes: d,
    get not() {
      return ki(e, !t);
    }
  };
}
function Si(e) {
  return ki(e);
}
function hm(e) {
  var t;
  const n = on(e);
  return (t = n?.$el) != null ? t : n;
}
const ff = am ? window : void 0;
function pf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = ff) : [t, n, r, o] = e, !t)
    return um;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, l = (d, f, v, y) => (d.addEventListener(f, v, y), () => d.removeEventListener(f, v, y)), c = Me(
    () => [hm(t), on(o)],
    ([d, f]) => {
      if (s(), !d)
        return;
      const v = lm(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((y) => r.map((m) => l(d, y, m, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), s();
  };
  return Gr(u), u;
}
function mm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ou(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = ff,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: l = !1
  } = r, c = mm(t);
  return pf(o, a, (d) => {
    d.repeat && on(l) || c(d) && n(d);
  }, s);
}
function vm(e) {
  return JSON.parse(JSON.stringify(e));
}
function rs(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: l = !1,
    passive: c = !1,
    eventName: u,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, y = yr(), m = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((s = (a = y?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(y?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const h = (k) => l ? typeof l == "function" ? l(k) : vm(k) : k, b = () => sm(e[t]) ? h(e[t]) : f, $ = (k) => {
    v ? v(k) && m(p, k) : m(p, k);
  };
  if (c) {
    const k = b(), P = G(k);
    let C = !1;
    return Me(
      () => e[t],
      (_) => {
        C || (C = !0, P.value = h(_), un(() => C = !1));
      }
    ), Me(
      P,
      (_) => {
        !C && (_ !== e[t] || d) && $(_);
      },
      { deep: d }
    ), P;
  } else
    return J({
      get() {
        return b();
      },
      set(k) {
        $(k);
      }
    });
}
var gm = { value: () => {
} };
function Sa() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Do(n);
}
function Do(e) {
  this._ = e;
}
function ym(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Do.prototype = Sa.prototype = {
  constructor: Do,
  on: function(e, t) {
    var n = this._, r = ym(e + "", n), o, a = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (e = r[a]).type) && (o = bm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < s; )
      if (o = (e = r[a]).type)
        n[o] = au(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = au(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Do(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, a; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (a = this._[e], r = 0, o = a.length; r < o; ++r)
      a[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, a = r.length; o < a; ++o)
      r[o].value.apply(t, n);
  }
};
function bm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function au(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = gm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ei = "http://www.w3.org/1999/xhtml";
const su = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ei,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ea(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), su.hasOwnProperty(t) ? { space: su[t], local: e } : e;
}
function xm(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ei && t.documentElement.namespaceURI === Ei ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function wm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function hf(e) {
  var t = Ea(e);
  return (t.local ? wm : xm)(t);
}
function _m() {
}
function al(e) {
  return e == null ? _m : function() {
    return this.querySelector(e);
  };
}
function km(e) {
  typeof e != "function" && (e = al(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = new Array(s), c, u, d = 0; d < s; ++d)
      (c = a[d]) && (u = e.call(c, c.__data__, d, a)) && ("__data__" in c && (u.__data__ = c.__data__), l[d] = u);
  return new _t(r, this._parents);
}
function Sm(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Em() {
  return [];
}
function mf(e) {
  return e == null ? Em : function() {
    return this.querySelectorAll(e);
  };
}
function zm(e) {
  return function() {
    return Sm(e.apply(this, arguments));
  };
}
function $m(e) {
  typeof e == "function" ? e = zm(e) : e = mf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var s = t[a], l = s.length, c, u = 0; u < l; ++u)
      (c = s[u]) && (r.push(e.call(c, c.__data__, u, s)), o.push(c));
  return new _t(r, o);
}
function vf(e) {
  return function() {
    return this.matches(e);
  };
}
function gf(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Pm = Array.prototype.find;
function Cm(e) {
  return function() {
    return Pm.call(this.children, e);
  };
}
function Am() {
  return this.firstElementChild;
}
function Tm(e) {
  return this.select(e == null ? Am : Cm(typeof e == "function" ? e : gf(e)));
}
var Om = Array.prototype.filter;
function Nm() {
  return Array.from(this.children);
}
function Rm(e) {
  return function() {
    return Om.call(this.children, e);
  };
}
function Mm(e) {
  return this.selectAll(e == null ? Nm : Rm(typeof e == "function" ? e : gf(e)));
}
function Im(e) {
  typeof e != "function" && (e = vf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], c, u = 0; u < s; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && l.push(c);
  return new _t(r, this._parents);
}
function yf(e) {
  return new Array(e.length);
}
function Dm() {
  return new _t(this._enter || this._groups.map(yf), this._parents);
}
function Qo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Qo.prototype = {
  constructor: Qo,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Fm(e) {
  return function() {
    return e;
  };
}
function Bm(e, t, n, r, o, a) {
  for (var s = 0, l, c = t.length, u = a.length; s < u; ++s)
    (l = t[s]) ? (l.__data__ = a[s], r[s] = l) : n[s] = new Qo(e, a[s]);
  for (; s < c; ++s)
    (l = t[s]) && (o[s] = l);
}
function Lm(e, t, n, r, o, a, s) {
  var l, c, u = /* @__PURE__ */ new Map(), d = t.length, f = a.length, v = new Array(d), y;
  for (l = 0; l < d; ++l)
    (c = t[l]) && (v[l] = y = s.call(c, c.__data__, l, t) + "", u.has(y) ? o[l] = c : u.set(y, c));
  for (l = 0; l < f; ++l)
    y = s.call(e, a[l], l, a) + "", (c = u.get(y)) ? (r[l] = c, c.__data__ = a[l], u.delete(y)) : n[l] = new Qo(e, a[l]);
  for (l = 0; l < d; ++l)
    (c = t[l]) && u.get(v[l]) === c && (o[l] = c);
}
function Um(e) {
  return e.__data__;
}
function Vm(e, t) {
  if (!arguments.length)
    return Array.from(this, Um);
  var n = t ? Lm : Bm, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Fm(e));
  for (var a = o.length, s = new Array(a), l = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var d = r[u], f = o[u], v = f.length, y = qm(e.call(d, d && d.__data__, u, r)), m = y.length, p = l[u] = new Array(m), h = s[u] = new Array(m), b = c[u] = new Array(v);
    n(d, f, p, h, b, y, t);
    for (var $ = 0, k = 0, P, C; $ < m; ++$)
      if (P = p[$]) {
        for ($ >= k && (k = $ + 1); !(C = h[k]) && ++k < m; )
          ;
        P._next = C || null;
      }
  }
  return s = new _t(s, r), s._enter = l, s._exit = c, s;
}
function qm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function jm() {
  return new _t(this._exit || this._groups.map(yf), this._parents);
}
function Hm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Gm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, s = Math.min(o, a), l = new Array(o), c = 0; c < s; ++c)
    for (var u = n[c], d = r[c], f = u.length, v = l[c] = new Array(f), y, m = 0; m < f; ++m)
      (y = u[m] || d[m]) && (v[m] = y);
  for (; c < o; ++c)
    l[c] = n[c];
  return new _t(l, this._parents);
}
function Wm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], s; --o >= 0; )
      (s = r[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function Xm(e) {
  e || (e = Ym);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var s = n[a], l = s.length, c = o[a] = new Array(l), u, d = 0; d < l; ++d)
      (u = s[d]) && (c[d] = u);
    c.sort(t);
  }
  return new _t(o, this._parents).order();
}
function Ym(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Km() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zm() {
  return Array.from(this);
}
function Jm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function Qm() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function ev() {
  return !this.node();
}
function tv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, s = o.length, l; a < s; ++a)
      (l = o[a]) && e.call(l, l.__data__, a, o);
  return this;
}
function nv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ov(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function av(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function sv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function iv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function lv(e, t) {
  var n = Ea(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? rv : nv : typeof t == "function" ? n.local ? iv : sv : n.local ? av : ov)(n, t));
}
function bf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function uv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function dv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function cv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function fv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? uv : typeof t == "function" ? cv : dv)(e, t, n ?? "")) : ur(this.node(), e);
}
function ur(e, t) {
  return e.style.getPropertyValue(t) || bf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function pv(e) {
  return function() {
    delete this[e];
  };
}
function hv(e, t) {
  return function() {
    this[e] = t;
  };
}
function mv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function vv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? pv : typeof t == "function" ? mv : hv)(e, t)) : this.node()[e];
}
function xf(e) {
  return e.trim().split(/^|\s+/);
}
function sl(e) {
  return e.classList || new wf(e);
}
function wf(e) {
  this._node = e, this._names = xf(e.getAttribute("class") || "");
}
wf.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function _f(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function kf(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function gv(e) {
  return function() {
    _f(this, e);
  };
}
function yv(e) {
  return function() {
    kf(this, e);
  };
}
function bv(e, t) {
  return function() {
    (t.apply(this, arguments) ? _f : kf)(this, e);
  };
}
function xv(e, t) {
  var n = xf(e + "");
  if (arguments.length < 2) {
    for (var r = sl(this.node()), o = -1, a = n.length; ++o < a; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? bv : t ? gv : yv)(n, t));
}
function wv() {
  this.textContent = "";
}
function _v(e) {
  return function() {
    this.textContent = e;
  };
}
function kv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Sv(e) {
  return arguments.length ? this.each(e == null ? wv : (typeof e == "function" ? kv : _v)(e)) : this.node().textContent;
}
function Ev() {
  this.innerHTML = "";
}
function zv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function $v(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Pv(e) {
  return arguments.length ? this.each(e == null ? Ev : (typeof e == "function" ? $v : zv)(e)) : this.node().innerHTML;
}
function Cv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Av() {
  return this.each(Cv);
}
function Tv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ov() {
  return this.each(Tv);
}
function Nv(e) {
  var t = typeof e == "function" ? e : hf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Rv() {
  return null;
}
function Mv(e, t) {
  var n = typeof e == "function" ? e : hf(e), r = t == null ? Rv : typeof t == "function" ? t : al(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Iv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Dv() {
  return this.each(Iv);
}
function Fv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Lv(e) {
  return this.select(e ? Bv : Fv);
}
function Uv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Vv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function qv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function jv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Hv(e, t, n) {
  return function() {
    var r = this.__on, o, a = Vv(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), o = { type: e.type, name: e.name, value: t, listener: a, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Gv(e, t, n) {
  var r = qv(e + ""), o, a = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var c = 0, u = l.length, d; c < u; ++c)
        for (o = 0, d = l[c]; o < a; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (l = t ? Hv : jv, o = 0; o < a; ++o)
    this.each(l(r[o], t, n));
  return this;
}
function Sf(e, t, n) {
  var r = bf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Wv(e, t) {
  return function() {
    return Sf(this, e, t);
  };
}
function Xv(e, t) {
  return function() {
    return Sf(this, e, t.apply(this, arguments));
  };
}
function Yv(e, t) {
  return this.each((typeof t == "function" ? Xv : Wv)(e, t));
}
function* Kv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, s; o < a; ++o)
      (s = r[o]) && (yield s);
}
var Ef = [null];
function _t(e, t) {
  this._groups = e, this._parents = t;
}
function ao() {
  return new _t([[document.documentElement]], Ef);
}
function Zv() {
  return this;
}
_t.prototype = ao.prototype = {
  constructor: _t,
  select: km,
  selectAll: $m,
  selectChild: Tm,
  selectChildren: Mm,
  filter: Im,
  data: Vm,
  enter: Dm,
  exit: jm,
  join: Hm,
  merge: Gm,
  selection: Zv,
  order: Wm,
  sort: Xm,
  call: Km,
  nodes: Zm,
  node: Jm,
  size: Qm,
  empty: ev,
  each: tv,
  attr: lv,
  style: fv,
  property: vv,
  classed: xv,
  text: Sv,
  html: Pv,
  raise: Av,
  lower: Ov,
  append: Nv,
  insert: Mv,
  remove: Dv,
  clone: Lv,
  datum: Uv,
  on: Gv,
  dispatch: Yv,
  [Symbol.iterator]: Kv
};
function Mt(e) {
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], Ef);
}
function Jv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Gt(e, t) {
  if (e = Jv(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Qv = { passive: !1 }, Wr = { capture: !0, passive: !1 };
function os(e) {
  e.stopImmediatePropagation();
}
function sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zf(e) {
  var t = e.document.documentElement, n = Mt(e).on("dragstart.drag", sr, Wr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Wr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function $f(e, t) {
  var n = e.document.documentElement, r = Mt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", sr, Wr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const bo = (e) => () => e;
function zi(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: a,
  x: s,
  y: l,
  dx: c,
  dy: u,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
zi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function eg(e) {
  return !e.ctrlKey && !e.button;
}
function tg() {
  return this.parentNode;
}
function ng(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function rg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function og() {
  var e = eg, t = tg, n = ng, r = rg, o = {}, a = Sa("start", "drag", "end"), s = 0, l, c, u, d, f = 0;
  function v(P) {
    P.on("mousedown.drag", y).filter(r).on("touchstart.drag", h).on("touchmove.drag", b, Qv).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(P, C) {
    if (!(d || !e.call(this, P, C))) {
      var _ = k(this, t.call(this, P, C), P, C, "mouse");
      _ && (Mt(P.view).on("mousemove.drag", m, Wr).on("mouseup.drag", p, Wr), zf(P.view), os(P), u = !1, l = P.clientX, c = P.clientY, _("start", P));
    }
  }
  function m(P) {
    if (sr(P), !u) {
      var C = P.clientX - l, _ = P.clientY - c;
      u = C * C + _ * _ > f;
    }
    o.mouse("drag", P);
  }
  function p(P) {
    Mt(P.view).on("mousemove.drag mouseup.drag", null), $f(P.view, u), sr(P), o.mouse("end", P);
  }
  function h(P, C) {
    if (e.call(this, P, C)) {
      var _ = P.changedTouches, g = t.call(this, P, C), S = _.length, U, I;
      for (U = 0; U < S; ++U)
        (I = k(this, g, P, C, _[U].identifier, _[U])) && (os(P), I("start", P, _[U]));
    }
  }
  function b(P) {
    var C = P.changedTouches, _ = C.length, g, S;
    for (g = 0; g < _; ++g)
      (S = o[C[g].identifier]) && (sr(P), S("drag", P, C[g]));
  }
  function $(P) {
    var C = P.changedTouches, _ = C.length, g, S;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), g = 0; g < _; ++g)
      (S = o[C[g].identifier]) && (os(P), S("end", P, C[g]));
  }
  function k(P, C, _, g, S, U) {
    var I = a.copy(), D = Gt(U || _, C), T, V, z;
    if ((z = n.call(P, new zi("beforestart", {
      sourceEvent: _,
      target: v,
      identifier: S,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), g)) != null)
      return T = z.x - D[0] || 0, V = z.y - D[1] || 0, function R(x, O, w) {
        var q = D, Q;
        switch (x) {
          case "start":
            o[S] = R, Q = s++;
            break;
          case "end":
            delete o[S], --s;
          case "drag":
            D = Gt(w || O, C), Q = s;
            break;
        }
        I.call(
          x,
          P,
          new zi(x, {
            sourceEvent: O,
            subject: z,
            target: v,
            identifier: S,
            active: Q,
            x: D[0] + T,
            y: D[1] + V,
            dx: D[0] - q[0],
            dy: D[1] - q[1],
            dispatch: I
          }),
          g
        );
      };
  }
  return v.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : bo(!!P), v) : e;
  }, v.container = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : bo(P), v) : t;
  }, v.subject = function(P) {
    return arguments.length ? (n = typeof P == "function" ? P : bo(P), v) : n;
  }, v.touchable = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : bo(!!P), v) : r;
  }, v.on = function() {
    var P = a.on.apply(a, arguments);
    return P === a ? v : P;
  }, v.clickDistance = function(P) {
    return arguments.length ? (f = (P = +P) * P, v) : Math.sqrt(f);
  }, v;
}
function il(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Pf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function so() {
}
var Xr = 0.7, ea = 1 / Xr, ir = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ag = /^#([0-9a-f]{3,8})$/, sg = new RegExp(`^rgb\\(${ir},${ir},${ir}\\)$`), ig = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), lg = new RegExp(`^rgba\\(${ir},${ir},${ir},${Yr}\\)$`), ug = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Yr}\\)$`), dg = new RegExp(`^hsl\\(${Yr},${Kt},${Kt}\\)$`), cg = new RegExp(`^hsla\\(${Yr},${Kt},${Kt},${Yr}\\)$`), iu = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
il(so, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: lu,
  // Deprecated! Use color.formatHex.
  formatHex: lu,
  formatHex8: fg,
  formatHsl: pg,
  formatRgb: uu,
  toString: uu
});
function lu() {
  return this.rgb().formatHex();
}
function fg() {
  return this.rgb().formatHex8();
}
function pg() {
  return Cf(this).formatHsl();
}
function uu() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ag.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? du(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sg.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = ig.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lg.exec(e)) ? xo(t[1], t[2], t[3], t[4]) : (t = ug.exec(e)) ? xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = dg.exec(e)) ? pu(t[1], t[2] / 100, t[3] / 100, 1) : (t = cg.exec(e)) ? pu(t[1], t[2] / 100, t[3] / 100, t[4]) : iu.hasOwnProperty(e) ? du(iu[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function du(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function hg(e) {
  return e instanceof so || (e = jn(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function $i(e, t, n, r) {
  return arguments.length === 1 ? hg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
il(pt, $i, Pf(so, {
  brighter(e) {
    return e = e == null ? ea : Math.pow(ea, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Dn(this.r), Dn(this.g), Dn(this.b), ta(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cu,
  // Deprecated! Use color.formatHex.
  formatHex: cu,
  formatHex8: mg,
  formatRgb: fu,
  toString: fu
}));
function cu() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
}
function mg() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fu() {
  const e = ta(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dn(this.r)}, ${Dn(this.g)}, ${Dn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ta(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Dn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Rn(e) {
  return e = Dn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function pu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new It(e, t, n, r);
}
function Cf(e) {
  if (e instanceof It)
    return new It(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = jn(e)), !e)
    return new It();
  if (e instanceof It)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, l = a - o, c = (a + o) / 2;
  return l ? (t === a ? s = (n - r) / l + (n < r) * 6 : n === a ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= c < 0.5 ? a + o : 2 - a - o, s *= 60) : l = c > 0 && c < 1 ? 0 : s, new It(s, l, c, e.opacity);
}
function vg(e, t, n, r) {
  return arguments.length === 1 ? Cf(e) : new It(e, t, n, r ?? 1);
}
function It(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
il(It, vg, Pf(so, {
  brighter(e) {
    return e = e == null ? ea : Math.pow(ea, e), new It(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new It(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      as(e >= 240 ? e - 240 : e + 120, o, r),
      as(e, o, r),
      as(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new It(hu(this.h), wo(this.s), wo(this.l), ta(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ta(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hu(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ll = (e) => () => e;
function gg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function yg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function bg(e) {
  return (e = +e) == 1 ? Af : function(t, n) {
    return n - t ? yg(t, n, e) : ll(isNaN(t) ? n : t);
  };
}
function Af(e, t) {
  var n = t - e;
  return n ? gg(e, n) : ll(isNaN(e) ? t : e);
}
const na = (function e(t) {
  var n = bg(t);
  function r(o, a) {
    var s = n((o = $i(o)).r, (a = $i(a)).r), l = n(o.g, a.g), c = n(o.b, a.b), u = Af(o.opacity, a.opacity);
    return function(d) {
      return o.r = s(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function xg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - a) + t[o] * a;
    return r;
  };
}
function wg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _g(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), a = new Array(n), s;
  for (s = 0; s < r; ++s)
    o[s] = Ir(e[s], t[s]);
  for (; s < n; ++s)
    a[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s)
      a[s] = o[s](l);
    return a;
  };
}
function kg(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Wt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Sg(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ir(e[o], t[o]) : r[o] = t[o];
  return function(a) {
    for (o in n)
      r[o] = n[o](a);
    return r;
  };
}
var Pi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ss = new RegExp(Pi.source, "g");
function Eg(e) {
  return function() {
    return e;
  };
}
function zg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Tf(e, t) {
  var n = Pi.lastIndex = ss.lastIndex = 0, r, o, a, s = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (r = Pi.exec(e)) && (o = ss.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[s] ? l[s] += a : l[++s] = a), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, c.push({ i: s, x: Wt(r, o) })), n = ss.lastIndex;
  return n < t.length && (a = t.slice(n), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? c[0] ? zg(c[0].x) : Eg(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d)
      l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ll(t) : (n === "number" ? Wt : n === "string" ? (r = jn(t)) ? (t = r, na) : Tf : t instanceof jn ? na : t instanceof Date ? kg : wg(t) ? xg : Array.isArray(t) ? _g : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Sg : Wt)(e, t);
}
var mu = 180 / Math.PI, Ci = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Of(e, t, n, r, o, a) {
  var s, l, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * r) && (n -= e * c, r -= t * c), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, c /= l), e * r < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * mu,
    skewX: Math.atan(c) * mu,
    scaleX: s,
    scaleY: l
  };
}
var _o;
function $g(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ci : Of(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Pg(e) {
  return e == null || (_o || (_o = document.createElementNS("http://www.w3.org/2000/svg", "g")), _o.setAttribute("transform", e), !(e = _o.transform.baseVal.consolidate())) ? Ci : (e = e.matrix, Of(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Nf(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, d, f, v, y, m) {
    if (u !== f || d !== v) {
      var p = y.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(d, v) });
    } else (f || v) && y.push("translate(" + f + t + v + n);
  }
  function s(u, d, f, v) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Wt(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function l(u, d, f, v) {
    u !== d ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Wt(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function c(u, d, f, v, y, m) {
    if (u !== f || d !== v) {
      var p = y.push(o(y) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(d, v) });
    } else (f !== 1 || v !== 1) && y.push(o(y) + "scale(" + f + "," + v + ")");
  }
  return function(u, d) {
    var f = [], v = [];
    return u = e(u), d = e(d), a(u.translateX, u.translateY, d.translateX, d.translateY, f, v), s(u.rotate, d.rotate, f, v), l(u.skewX, d.skewX, f, v), c(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, v), u = d = null, function(y) {
      for (var m = -1, p = v.length, h; ++m < p; )
        f[(h = v[m]).i] = h.x(y);
      return f.join("");
    };
  };
}
var Cg = Nf($g, "px, ", "px)", "deg)"), Ag = Nf(Pg, ", ", ")", ")"), Tg = 1e-12;
function vu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Og(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Ng(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Fo = (function e(t, n, r) {
  function o(a, s) {
    var l = a[0], c = a[1], u = a[2], d = s[0], f = s[1], v = s[2], y = d - l, m = f - c, p = y * y + m * m, h, b;
    if (p < Tg)
      b = Math.log(v / u) / t, h = function(g) {
        return [
          l + g * y,
          c + g * m,
          u * Math.exp(t * g * b)
        ];
      };
    else {
      var $ = Math.sqrt(p), k = (v * v - u * u + r * p) / (2 * u * n * $), P = (v * v - u * u - r * p) / (2 * v * n * $), C = Math.log(Math.sqrt(k * k + 1) - k), _ = Math.log(Math.sqrt(P * P + 1) - P);
      b = (_ - C) / t, h = function(g) {
        var S = g * b, U = vu(C), I = u / (n * $) * (U * Ng(t * S + C) - Og(C));
        return [
          l + I * y,
          c + I * m,
          u * U / vu(t * S + C)
        ];
      };
    }
    return h.duration = b * 1e3 * t / Math.SQRT2, h;
  }
  return o.rho = function(a) {
    var s = Math.max(1e-3, +a), l = s * s, c = l * l;
    return e(s, l, c);
  }, o;
})(Math.SQRT2, 2, 4);
var dr = 0, Tr = 0, Sr = 0, Rf = 1e3, ra, Or, oa = 0, Hn = 0, za = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Mf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ul() {
  return Hn || (Mf(Rg), Hn = Kr.now() + za);
}
function Rg() {
  Hn = 0;
}
function aa() {
  this._call = this._time = this._next = null;
}
aa.prototype = If.prototype = {
  constructor: aa,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ul() : +n) + (t == null ? 0 : +t), !this._next && Or !== this && (Or ? Or._next = this : ra = this, Or = this), this._call = e, this._time = n, Ai();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ai());
  }
};
function If(e, t, n) {
  var r = new aa();
  return r.restart(e, t, n), r;
}
function Mg() {
  ul(), ++dr;
  for (var e = ra, t; e; )
    (t = Hn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --dr;
}
function gu() {
  Hn = (oa = Kr.now()) + za, dr = Tr = 0;
  try {
    Mg();
  } finally {
    dr = 0, Dg(), Hn = 0;
  }
}
function Ig() {
  var e = Kr.now(), t = e - oa;
  t > Rf && (za -= t, oa = e);
}
function Dg() {
  for (var e, t = ra, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ra = n);
  Or = e, Ai(r);
}
function Ai(e) {
  if (!dr) {
    Tr && (Tr = clearTimeout(Tr));
    var t = e - Hn;
    t > 24 ? (e < 1 / 0 && (Tr = setTimeout(gu, e - Kr.now() - za)), Sr && (Sr = clearInterval(Sr))) : (Sr || (oa = Kr.now(), Sr = setInterval(Ig, Rf)), dr = 1, Mf(gu));
  }
}
function yu(e, t, n) {
  var r = new aa();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Fg = Sa("start", "end", "cancel", "interrupt"), Bg = [], Df = 0, bu = 1, Ti = 2, Bo = 3, xu = 4, Oi = 5, Lo = 6;
function $a(e, t, n, r, o, a) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Lg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Fg,
    tween: Bg,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Df
  });
}
function dl(e, t) {
  var n = Bt(e, t);
  if (n.state > Df)
    throw new Error("too late; already scheduled");
  return n;
}
function en(e, t) {
  var n = Bt(e, t);
  if (n.state > Bo)
    throw new Error("too late; already running");
  return n;
}
function Bt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Lg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = If(a, 0, n.time);
  function a(u) {
    n.state = bu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, v, y;
    if (n.state !== bu)
      return c();
    for (d in r)
      if (y = r[d], y.name === n.name) {
        if (y.state === Bo)
          return yu(s);
        y.state === xu ? (y.state = Lo, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[d]) : +d < t && (y.state = Lo, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[d]);
      }
    if (yu(function() {
      n.state === Bo && (n.state = xu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Ti, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ti) {
      for (n.state = Bo, o = new Array(v = n.tween.length), d = 0, f = -1; d < v; ++d)
        (y = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Oi, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, d);
    n.state === Oi && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Lo, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Uo(e, t) {
  var n = e.__transition, r, o, a = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ti && r.state < Oi, r.state = Lo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    a && delete e.__transition;
  }
}
function Ug(e) {
  return this.each(function() {
    Uo(this, e);
  });
}
function Vg(e, t) {
  var n, r;
  return function() {
    var o = en(this, e), a = o.tween;
    if (a !== n) {
      r = n = a;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function qg(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = en(this, e), s = a.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, c = 0, u = o.length; c < u; ++c)
        if (o[c].name === t) {
          o[c] = l;
          break;
        }
      c === u && o.push(l);
    }
    a.tween = o;
  };
}
function jg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Bt(this.node(), n).tween, o = 0, a = r.length, s; o < a; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Vg : qg)(n, e, t));
}
function cl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = en(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Bt(o, r).value[t];
  };
}
function Ff(e, t) {
  var n;
  return (typeof t == "number" ? Wt : t instanceof jn ? na : (n = jn(t)) ? (t = n, na) : Tf)(e, t);
}
function Hg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Gg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Wg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Xg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Yg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), c;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = l + "", s === c ? null : s === r && c === o ? a : (o = c, a = t(r = s, l)));
  };
}
function Kg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), c;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = l + "", s === c ? null : s === r && c === o ? a : (o = c, a = t(r = s, l)));
  };
}
function Zg(e, t) {
  var n = Ea(e), r = n === "transform" ? Ag : Ff;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Kg : Yg)(n, r, cl(this, "attr." + e, t)) : t == null ? (n.local ? Gg : Hg)(n) : (n.local ? Xg : Wg)(n, r, t));
}
function Jg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Qg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ey(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Qg(e, a)), n;
  }
  return o._value = t, o;
}
function ty(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Jg(e, a)), n;
  }
  return o._value = t, o;
}
function ny(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Ea(e);
  return this.tween(n, (r.local ? ey : ty)(r, t));
}
function ry(e, t) {
  return function() {
    dl(this, e).delay = +t.apply(this, arguments);
  };
}
function oy(e, t) {
  return t = +t, function() {
    dl(this, e).delay = t;
  };
}
function ay(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ry : oy)(t, e)) : Bt(this.node(), t).delay;
}
function sy(e, t) {
  return function() {
    en(this, e).duration = +t.apply(this, arguments);
  };
}
function iy(e, t) {
  return t = +t, function() {
    en(this, e).duration = t;
  };
}
function ly(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? sy : iy)(t, e)) : Bt(this.node(), t).duration;
}
function uy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    en(this, e).ease = t;
  };
}
function dy(e) {
  var t = this._id;
  return arguments.length ? this.each(uy(t, e)) : Bt(this.node(), t).ease;
}
function cy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    en(this, e).ease = n;
  };
}
function fy(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(cy(this._id, e));
}
function py(e) {
  typeof e != "function" && (e = vf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], c, u = 0; u < s; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && l.push(c);
  return new cn(r, this._parents, this._name, this._id);
}
function hy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), s = new Array(r), l = 0; l < a; ++l)
    for (var c = t[l], u = n[l], d = c.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = c[y] || u[y]) && (f[y] = v);
  for (; l < r; ++l)
    s[l] = t[l];
  return new cn(s, this._parents, this._name, this._id);
}
function my(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function vy(e, t, n) {
  var r, o, a = my(t) ? dl : en;
  return function() {
    var s = a(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function gy(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Bt(this.node(), n).on.on(e) : this.each(vy(n, e, t));
}
function yy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function by() {
  return this.on("end.remove", yy(this._id));
}
function xy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = al(e));
  for (var r = this._groups, o = r.length, a = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], c = l.length, u = a[s] = new Array(c), d, f, v = 0; v < c; ++v)
      (d = l[v]) && (f = e.call(d, d.__data__, v, l)) && ("__data__" in d && (f.__data__ = d.__data__), u[v] = f, $a(u[v], t, n, v, u, Bt(d, n)));
  return new cn(a, this._parents, t, n);
}
function wy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = mf(e));
  for (var r = this._groups, o = r.length, a = [], s = [], l = 0; l < o; ++l)
    for (var c = r[l], u = c.length, d, f = 0; f < u; ++f)
      if (d = c[f]) {
        for (var v = e.call(d, d.__data__, f, c), y, m = Bt(d, n), p = 0, h = v.length; p < h; ++p)
          (y = v[p]) && $a(y, t, n, p, v, m);
        a.push(v), s.push(d);
      }
  return new cn(a, s, t, n);
}
var _y = ao.prototype.constructor;
function ky() {
  return new _y(this._groups, this._parents);
}
function Sy(e, t) {
  var n, r, o;
  return function() {
    var a = ur(this, e), s = (this.style.removeProperty(e), ur(this, e));
    return a === s ? null : a === n && s === r ? o : o = t(n = a, r = s);
  };
}
function Bf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ey(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = ur(this, e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function zy(e, t, n) {
  var r, o, a;
  return function() {
    var s = ur(this, e), l = n(this), c = l + "";
    return l == null && (c = l = (this.style.removeProperty(e), ur(this, e))), s === c ? null : s === r && c === o ? a : (o = c, a = t(r = s, l));
  };
}
function $y(e, t) {
  var n, r, o, a = "style." + t, s = "end." + a, l;
  return function() {
    var c = en(this, e), u = c.on, d = c.value[a] == null ? l || (l = Bf(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), c.on = r;
  };
}
function Py(e, t, n) {
  var r = (e += "") == "transform" ? Cg : Ff;
  return t == null ? this.styleTween(e, Sy(e, r)).on("end.style." + e, Bf(e)) : typeof t == "function" ? this.styleTween(e, zy(e, r, cl(this, "style." + e, t))).each($y(this._id, e)) : this.styleTween(e, Ey(e, r, t), n).on("end.style." + e, null);
}
function Cy(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ay(e, t, n) {
  var r, o;
  function a() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Cy(e, s, n)), r;
  }
  return a._value = t, a;
}
function Ty(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Ay(e, t, n ?? ""));
}
function Oy(e) {
  return function() {
    this.textContent = e;
  };
}
function Ny(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Ry(e) {
  return this.tween("text", typeof e == "function" ? Ny(cl(this, "text", e)) : Oy(e == null ? "" : e + ""));
}
function My(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Iy(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && My(o)), t;
  }
  return r._value = e, r;
}
function Dy(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Iy(e));
}
function Fy() {
  for (var e = this._name, t = this._id, n = Lf(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, c, u = 0; u < l; ++u)
      if (c = s[u]) {
        var d = Bt(c, t);
        $a(c, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new cn(r, this._parents, e, n);
}
function By() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, s) {
    var l = { value: s }, c = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = en(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(c)), u.on = t;
    }), o === 0 && a();
  });
}
var Ly = 0;
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Lf() {
  return ++Ly;
}
var tn = ao.prototype;
cn.prototype = {
  constructor: cn,
  select: xy,
  selectAll: wy,
  selectChild: tn.selectChild,
  selectChildren: tn.selectChildren,
  filter: py,
  merge: hy,
  selection: ky,
  transition: Fy,
  call: tn.call,
  nodes: tn.nodes,
  node: tn.node,
  size: tn.size,
  empty: tn.empty,
  each: tn.each,
  on: gy,
  attr: Zg,
  attrTween: ny,
  style: Py,
  styleTween: Ty,
  text: Ry,
  textTween: Dy,
  remove: by,
  tween: jg,
  delay: ay,
  duration: ly,
  ease: dy,
  easeVarying: fy,
  end: By,
  [Symbol.iterator]: tn[Symbol.iterator]
};
function Uy(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Vy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Uy
};
function qy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function jy(e) {
  var t, n;
  e instanceof cn ? (t = e._id, e = e._name) : (t = Lf(), (n = Vy).time = ul(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, c, u = 0; u < l; ++u)
      (c = s[u]) && $a(c, e, t, u, s, n || qy(c, t));
  return new cn(r, this._parents, e, t);
}
ao.prototype.interrupt = Ug;
ao.prototype.transition = jy;
const ko = (e) => () => e;
function Hy(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function sn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
sn.prototype = {
  constructor: sn,
  scale: function(e) {
    return e === 1 ? this : new sn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new sn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var cr = new sn(1, 0, 0);
sn.prototype;
function is(e) {
  e.stopImmediatePropagation();
}
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Wy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function wu() {
  return this.__zoom || cr;
}
function Xy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Yy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ky(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s)
  );
}
function Zy() {
  var e = Gy, t = Wy, n = Ky, r = Xy, o = Yy, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, c = Fo, u = Sa("start", "zoom", "end"), d, f, v, y = 500, m = 150, p = 0, h = 10;
  function b(z) {
    z.property("__zoom", wu).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", U).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", V).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(z, R, x, O) {
    var w = z.selection ? z.selection() : z;
    w.property("__zoom", wu), z !== w ? C(z, R, x, O) : w.interrupt().each(function() {
      _(this, arguments).event(O).start().zoom(null, typeof R == "function" ? R.apply(this, arguments) : R).end();
    });
  }, b.scaleBy = function(z, R, x, O) {
    b.scaleTo(z, function() {
      var w = this.__zoom.k, q = typeof R == "function" ? R.apply(this, arguments) : R;
      return w * q;
    }, x, O);
  }, b.scaleTo = function(z, R, x, O) {
    b.transform(z, function() {
      var w = t.apply(this, arguments), q = this.__zoom, Q = x == null ? P(w) : typeof x == "function" ? x.apply(this, arguments) : x, ne = q.invert(Q), pe = typeof R == "function" ? R.apply(this, arguments) : R;
      return n(k($(q, pe), Q, ne), w, s);
    }, x, O);
  }, b.translateBy = function(z, R, x, O) {
    b.transform(z, function() {
      return n(this.__zoom.translate(
        typeof R == "function" ? R.apply(this, arguments) : R,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), s);
    }, null, O);
  }, b.translateTo = function(z, R, x, O, w) {
    b.transform(z, function() {
      var q = t.apply(this, arguments), Q = this.__zoom, ne = O == null ? P(q) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(cr.translate(ne[0], ne[1]).scale(Q.k).translate(
        typeof R == "function" ? -R.apply(this, arguments) : -R,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), q, s);
    }, O, w);
  };
  function $(z, R) {
    return R = Math.max(a[0], Math.min(a[1], R)), R === z.k ? z : new sn(R, z.x, z.y);
  }
  function k(z, R, x) {
    var O = R[0] - x[0] * z.k, w = R[1] - x[1] * z.k;
    return O === z.x && w === z.y ? z : new sn(z.k, O, w);
  }
  function P(z) {
    return [(+z[0][0] + +z[1][0]) / 2, (+z[0][1] + +z[1][1]) / 2];
  }
  function C(z, R, x, O) {
    z.on("start.zoom", function() {
      _(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var w = this, q = arguments, Q = _(w, q).event(O), ne = t.apply(w, q), pe = x == null ? P(ne) : typeof x == "function" ? x.apply(w, q) : x, xe = Math.max(ne[1][0] - ne[0][0], ne[1][1] - ne[0][1]), ke = w.__zoom, re = typeof R == "function" ? R.apply(w, q) : R, se = c(ke.invert(pe).concat(xe / ke.k), re.invert(pe).concat(xe / re.k));
      return function(ve) {
        if (ve === 1)
          ve = re;
        else {
          var Te = se(ve), Ee = xe / Te[2];
          ve = new sn(Ee, pe[0] - Te[0] * Ee, pe[1] - Te[1] * Ee);
        }
        Q.zoom(null, ve);
      };
    });
  }
  function _(z, R, x) {
    return !x && z.__zooming || new g(z, R);
  }
  function g(z, R) {
    this.that = z, this.args = R, this.active = 0, this.sourceEvent = null, this.extent = t.apply(z, R), this.taps = 0;
  }
  g.prototype = {
    event: function(z) {
      return z && (this.sourceEvent = z), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(z, R) {
      return this.mouse && z !== "mouse" && (this.mouse[1] = R.invert(this.mouse[0])), this.touch0 && z !== "touch" && (this.touch0[1] = R.invert(this.touch0[0])), this.touch1 && z !== "touch" && (this.touch1[1] = R.invert(this.touch1[0])), this.that.__zoom = R, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(z) {
      var R = Mt(this.that).datum();
      u.call(
        z,
        this.that,
        new Hy(z, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        R
      );
    }
  };
  function S(z, ...R) {
    if (!e.apply(this, arguments))
      return;
    var x = _(this, R).event(z), O = this.__zoom, w = Math.max(a[0], Math.min(a[1], O.k * Math.pow(2, r.apply(this, arguments)))), q = Gt(z);
    if (x.wheel)
      (x.mouse[0][0] !== q[0] || x.mouse[0][1] !== q[1]) && (x.mouse[1] = O.invert(x.mouse[0] = q)), clearTimeout(x.wheel);
    else {
      if (O.k === w)
        return;
      x.mouse = [q, O.invert(q)], Uo(this), x.start();
    }
    Er(z), x.wheel = setTimeout(Q, m), x.zoom("mouse", n(k($(O, w), x.mouse[0], x.mouse[1]), x.extent, s));
    function Q() {
      x.wheel = null, x.end();
    }
  }
  function U(z, ...R) {
    if (v || !e.apply(this, arguments))
      return;
    var x = z.currentTarget, O = _(this, R, !0).event(z), w = Mt(z.view).on("mousemove.zoom", pe, !0).on("mouseup.zoom", xe, !0), q = Gt(z, x), Q = z.clientX, ne = z.clientY;
    zf(z.view), is(z), O.mouse = [q, this.__zoom.invert(q)], Uo(this), O.start();
    function pe(ke) {
      if (Er(ke), !O.moved) {
        var re = ke.clientX - Q, se = ke.clientY - ne;
        O.moved = re * re + se * se > p;
      }
      O.event(ke).zoom("mouse", n(k(O.that.__zoom, O.mouse[0] = Gt(ke, x), O.mouse[1]), O.extent, s));
    }
    function xe(ke) {
      w.on("mousemove.zoom mouseup.zoom", null), $f(ke.view, O.moved), Er(ke), O.event(ke).end();
    }
  }
  function I(z, ...R) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, O = Gt(z.changedTouches ? z.changedTouches[0] : z, this), w = x.invert(O), q = x.k * (z.shiftKey ? 0.5 : 2), Q = n(k($(x, q), O, w), t.apply(this, R), s);
      Er(z), l > 0 ? Mt(this).transition().duration(l).call(C, Q, O, z) : Mt(this).call(b.transform, Q, O, z);
    }
  }
  function D(z, ...R) {
    if (e.apply(this, arguments)) {
      var x = z.touches, O = x.length, w = _(this, R, z.changedTouches.length === O).event(z), q, Q, ne, pe;
      for (is(z), Q = 0; Q < O; ++Q)
        ne = x[Q], pe = Gt(ne, this), pe = [pe, this.__zoom.invert(pe), ne.identifier], w.touch0 ? !w.touch1 && w.touch0[2] !== pe[2] && (w.touch1 = pe, w.taps = 0) : (w.touch0 = pe, q = !0, w.taps = 1 + !!d);
      d && (d = clearTimeout(d)), q && (w.taps < 2 && (f = pe[0], d = setTimeout(function() {
        d = null;
      }, y)), Uo(this), w.start());
    }
  }
  function T(z, ...R) {
    if (this.__zooming) {
      var x = _(this, R).event(z), O = z.changedTouches, w = O.length, q, Q, ne, pe;
      for (Er(z), q = 0; q < w; ++q)
        Q = O[q], ne = Gt(Q, this), x.touch0 && x.touch0[2] === Q.identifier ? x.touch0[0] = ne : x.touch1 && x.touch1[2] === Q.identifier && (x.touch1[0] = ne);
      if (Q = x.that.__zoom, x.touch1) {
        var xe = x.touch0[0], ke = x.touch0[1], re = x.touch1[0], se = x.touch1[1], ve = (ve = re[0] - xe[0]) * ve + (ve = re[1] - xe[1]) * ve, Te = (Te = se[0] - ke[0]) * Te + (Te = se[1] - ke[1]) * Te;
        Q = $(Q, Math.sqrt(ve / Te)), ne = [(xe[0] + re[0]) / 2, (xe[1] + re[1]) / 2], pe = [(ke[0] + se[0]) / 2, (ke[1] + se[1]) / 2];
      } else if (x.touch0)
        ne = x.touch0[0], pe = x.touch0[1];
      else
        return;
      x.zoom("touch", n(k(Q, ne, pe), x.extent, s));
    }
  }
  function V(z, ...R) {
    if (this.__zooming) {
      var x = _(this, R).event(z), O = z.changedTouches, w = O.length, q, Q;
      for (is(z), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, y), q = 0; q < w; ++q)
        Q = O[q], x.touch0 && x.touch0[2] === Q.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === Q.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0)
        x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (Q = Gt(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < h)) {
        var ne = Mt(this).on("dblclick.zoom");
        ne && ne.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(z) {
    return arguments.length ? (r = typeof z == "function" ? z : ko(+z), b) : r;
  }, b.filter = function(z) {
    return arguments.length ? (e = typeof z == "function" ? z : ko(!!z), b) : e;
  }, b.touchable = function(z) {
    return arguments.length ? (o = typeof z == "function" ? z : ko(!!z), b) : o;
  }, b.extent = function(z) {
    return arguments.length ? (t = typeof z == "function" ? z : ko([[+z[0][0], +z[0][1]], [+z[1][0], +z[1][1]]]), b) : t;
  }, b.scaleExtent = function(z) {
    return arguments.length ? (a[0] = +z[0], a[1] = +z[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(z) {
    return arguments.length ? (s[0][0] = +z[0][0], s[1][0] = +z[1][0], s[0][1] = +z[0][1], s[1][1] = +z[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(z) {
    return arguments.length ? (n = z, b) : n;
  }, b.duration = function(z) {
    return arguments.length ? (l = +z, b) : l;
  }, b.interpolate = function(z) {
    return arguments.length ? (c = z, b) : c;
  }, b.on = function() {
    var z = u.on.apply(u, arguments);
    return z === u ? b : z;
  }, b.clickDistance = function(z) {
    return arguments.length ? (p = (z = +z) * z, b) : Math.sqrt(p);
  }, b.tapDistance = function(z) {
    return arguments.length ? (h = +z, b) : h;
  }, b;
}
var de = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(de || {}), fl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(fl || {}), Tn = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(Tn || {}), kn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(kn || {}), sa = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(sa || {}), Dr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Dr || {}), Uf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Uf || {});
const Jy = ["INPUT", "SELECT", "TEXTAREA"], Qy = typeof document < "u" ? document : null;
function Ni(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Jy.includes(r?.nodeName) || o || !!a;
}
function eb(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function _u(e, t, n, r) {
  const o = t.replace("+", `
`).replace(`

`, `
+`).split(`
`).map((s) => s.trim().toLowerCase());
  if (o.length === 1)
    return e.toLowerCase() === t.toLowerCase();
  r || n.add(e.toLowerCase());
  const a = o.every(
    (s, l) => n.has(s) && Array.from(n.values())[l] === o[l]
  );
  return r && n.delete(e.toLowerCase()), a;
}
function tb(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = nb(n.code, e);
    return Array.isArray(e) ? e.some((o) => _u(n[r], o, t, n.type === "keyup")) : _u(n[r], e, t, n.type === "keyup");
  };
}
function nb(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Fr(e, t) {
  const n = J(() => Ie(t?.target) ?? Qy), r = an(Ie(e) === !0);
  let o = !1;
  const a = /* @__PURE__ */ new Set();
  let s = c(Ie(e));
  Me(
    () => Ie(e),
    (u, d) => {
      typeof d == "boolean" && typeof u != "boolean" && l(), s = c(u);
    },
    {
      immediate: !0
    }
  ), pf(["blur", "contextmenu"], l), ou(
    (...u) => s(...u),
    (u) => {
      var d, f;
      const v = Ie(t?.actInsideInputWithModifier) ?? !0, y = Ie(t?.preventDefault) ?? !1;
      if (o = eb(u), (!o || o && !v) && Ni(u))
        return;
      const p = ((f = (d = u.composedPath) == null ? void 0 : d.call(u)) == null ? void 0 : f[0]) || u.target, h = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !y && (o || !h) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), ou(
    (...u) => s(...u),
    (u) => {
      const d = Ie(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !d) && Ni(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function l() {
    o = !1, a.clear(), r.value = Ie(e) === !0;
  }
  function c(u) {
    return u === null ? (l(), () => !1) : typeof u == "boolean" ? (l(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? tb(u, a) : u;
  }
  return r;
}
const Vf = "vue-flow__node-desc", qf = "vue-flow__edge-desc", rb = "vue-flow__aria-live", jf = ["Enter", " ", "Escape"], lr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function ia(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function la(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function Pa(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Gn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Hf(e, t) {
  return {
    x: Gn(e.x, t[0][0], t[1][0]),
    y: Gn(e.y, t[0][1], t[1][1])
  };
}
function ku(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function Sn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Fn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !Sn(e);
}
function Nr(e) {
  return Fn(e) && "computedPosition" in e;
}
function So(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ob(e) {
  return So(e.width) && So(e.height) && So(e.x) && So(e.y);
}
function ab(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: ar({
      width: 0,
      height: 0
    }),
    computedPosition: ar({
      z: 0,
      ...e.position
    }),
    // todo: shouldn't be defined initially, as we want to use handleBounds to check if a node was actually initialized or not
    handleBounds: {
      source: [],
      target: []
    },
    draggable: void 0,
    selectable: void 0,
    connectable: void 0,
    focusable: void 0,
    selected: !1,
    dragging: !1,
    resizing: !1,
    initialized: !1,
    isParent: !1,
    position: {
      x: 0,
      y: 0
    },
    data: et(e.data) ? e.data : {},
    events: ar(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function Gf(e, t, n) {
  var r, o;
  const a = {
    id: e.id.toString(),
    type: e.type ?? t?.type ?? "default",
    source: e.source.toString(),
    target: e.target.toString(),
    sourceHandle: (r = e.sourceHandle) == null ? void 0 : r.toString(),
    targetHandle: (o = e.targetHandle) == null ? void 0 : o.toString(),
    updatable: e.updatable ?? n?.updatable,
    selectable: e.selectable ?? n?.selectable,
    focusable: e.focusable ?? n?.focusable,
    data: et(e.data) ? e.data : {},
    events: ar(et(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? a, e, { id: e.id.toString() });
}
function Wf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, a = /* @__PURE__ */ new Set(), s = r === "source" ? "target" : "source";
  for (const l of n)
    l[s] === o && a.add(l[r]);
  return t.filter((l) => a.has(l.id));
}
function sb(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Wf(a, s, l, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Sn(a) && a.source === r).map((a) => n.find((s) => Fn(s) && s.id === a.target));
}
function ib(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Wf(a, s, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Sn(a) && a.target === r).map((a) => n.find((s) => Fn(s) && s.id === a.source));
}
function Xf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function lb(e, t) {
  return t.some(
    (n) => Sn(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Zr({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function Jr({ x: e, y: t }, { x: n, y: r, zoom: o }, a = !1, s = [1, 1]) {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? Ca(l, s) : l;
}
function ub(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Yf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function db({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function Kf(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = ub(
      t,
      Yf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return db(t);
}
function Zf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const a = {
    ...Jr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const l of e) {
    const { dimensions: c, selectable: u = !0, hidden: d = !1 } = l, f = c.width ?? l.width ?? null, v = c.height ?? l.height ?? null;
    if (o && !u || d)
      continue;
    const y = la(a, ia(l)), m = f === null || v === null, p = r && y > 0, h = (f ?? 0) * (v ?? 0);
    (m || p || y >= h || l.dragging) && s.push(l);
  }
  return s;
}
function Jf(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const r of e)
      n.add(r.id);
  return t.filter((r) => n.has(r.source) || n.has(r.target));
}
function tr(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = Number.parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = Number.parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return io(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function cb(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = tr(e, n), o = tr(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = tr(e.top ?? e.y ?? 0, n), o = tr(e.bottom ?? e.y ?? 0, n), a = tr(e.left ?? e.x ?? 0, t), s = tr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: a, x: a + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function fb(e, t, n, r, o, a) {
  const { x: s, y: l } = Zr(e, { x: t, y: n, zoom: r }), { x: c, y: u } = Zr(
    { x: e.x + e.width, y: e.y + e.height },
    {
      x: t,
      y: n,
      zoom: r
    }
  ), d = o - c, f = a - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
function Su(e, t, n, r, o, a = 0.1) {
  const s = cb(a, t, n), l = (t - s.x) / e.width, c = (n - s.y) / e.height, u = Math.min(l, c), d = Gn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, y = t / 2 - f * d, m = n / 2 - v * d, p = fb(e, y, m, d, t, n), h = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: y - h.left + h.right,
    y: m - h.top + h.bottom,
    zoom: d
  };
}
function pb(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Qf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Qf(n, t) : !1;
}
function Qr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function Eu(e) {
  const t = e.ctrlKey && ua() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function zu(e, t, n) {
  return e < t ? Gn(Math.abs(e - t), 1, t) / t : e > n ? -Gn(Math.abs(e - n), 1, t) / t : 0;
}
function ep(e, t, n = 15, r = 40) {
  const o = zu(e.x, r, t.width - r) * n, a = zu(e.y, r, t.height - r) * n;
  return [o, a];
}
function ls(e, t) {
  if (t) {
    const n = e.position.x + e.dimensions.width - t.dimensions.width, r = e.position.y + e.dimensions.height - t.dimensions.height;
    if (n > 0 || r > 0 || e.position.x < 0 || e.position.y < 0) {
      let o = {};
      if (typeof t.style == "function" ? o = { ...t.style(t) } : t.style && (o = { ...t.style }), o.width = o.width ?? `${t.dimensions.width}px`, o.height = o.height ?? `${t.dimensions.height}px`, n > 0)
        if (typeof o.width == "string") {
          const a = Number(o.width.replace("px", ""));
          o.width = `${a + n}px`;
        } else
          o.width += n;
      if (r > 0)
        if (typeof o.height == "string") {
          const a = Number(o.height.replace("px", ""));
          o.height = `${a + r}px`;
        } else
          o.height += r;
      if (e.position.x < 0) {
        const a = Math.abs(e.position.x);
        if (t.position.x = t.position.x - a, typeof o.width == "string") {
          const s = Number(o.width.replace("px", ""));
          o.width = `${s + a}px`;
        } else
          o.width += a;
        e.position.x = 0;
      }
      if (e.position.y < 0) {
        const a = Math.abs(e.position.y);
        if (t.position.y = t.position.y - a, typeof o.height == "string") {
          const s = Number(o.height.replace("px", ""));
          o.height = `${s + a}px`;
        } else
          o.height += a;
        e.position.y = 0;
      }
      t.dimensions.width = Number(o.width.toString().replace("px", "")), t.dimensions.height = Number(o.height.toString().replace("px", "")), typeof t.style == "function" ? t.style = (a) => {
        const s = t.style;
        return {
          ...s(a),
          ...o
        };
      } : t.style = {
        ...t.style,
        ...o
      };
    }
  }
}
function $u(e, t) {
  var n, r;
  const o = e.filter((s) => s.type === "add" || s.type === "remove");
  for (const s of o)
    if (s.type === "add")
      t.findIndex((c) => c.id === s.item.id) === -1 && t.push(s.item);
    else if (s.type === "remove") {
      const l = t.findIndex((c) => c.id === s.id);
      l !== -1 && t.splice(l, 1);
    }
  const a = t.map((s) => s.id);
  for (const s of t)
    for (const l of e)
      if (l.id === s.id)
        switch (l.type) {
          case "select":
            s.selected = l.selected;
            break;
          case "position":
            if (Nr(s) && (typeof l.position < "u" && (s.position = l.position), typeof l.dragging < "u" && (s.dragging = l.dragging), s.expandParent && s.parentNode)) {
              const c = t[a.indexOf(s.parentNode)];
              c && Nr(c) && ls(s, c);
            }
            break;
          case "dimensions":
            if (Nr(s) && (typeof l.dimensions < "u" && (s.dimensions = l.dimensions), typeof l.updateStyle < "u" && l.updateStyle && (s.style = {
              ...s.style || {},
              width: `${(n = l.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = l.dimensions) == null ? void 0 : r.height}px`
            }), typeof l.resizing < "u" && (s.resizing = l.resizing), s.expandParent && s.parentNode)) {
              const c = t[a.indexOf(s.parentNode)];
              c && Nr(c) && (!!c.dimensions.width && !!c.dimensions.height ? ls(s, c) : un(() => {
                ls(s, c);
              }));
            }
            break;
        }
  return t;
}
function yn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Pu(e) {
  return {
    item: e,
    type: "add"
  };
}
function Cu(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Au(e, t, n, r, o) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: r || null,
    targetHandle: o || null,
    type: "remove"
  };
}
function bn(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, a] of e) {
    const s = t.has(o);
    !(a.selected === void 0 && !s) && a.selected !== s && (n && (a.selected = s), r.push(yn(a.id, s)));
  }
  return r;
}
const Tu = () => {
};
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Tu, r = () => !1;
  const o = () => t.size > 0 || r(), a = (v) => {
    n = v;
  }, s = () => {
    n = Tu;
  }, l = (v) => {
    r = v;
  }, c = () => {
    r = () => !1;
  }, u = (v) => {
    t.delete(v);
  };
  return {
    on: (v) => {
      t.add(v);
      const y = () => u(v);
      return Gr(y), { off: y };
    },
    off: u,
    trigger: (v) => {
      const y = [n];
      return o() ? y.push(...t) : e && y.push(e), Promise.allSettled(y.map((m) => m(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: a,
    removeEmitter: s,
    setHasEmitListeners: l,
    removeHasEmitListeners: c
  };
}
function Ou(e, t, n) {
  let r = e;
  do {
    if (r && r.matches(t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentElement;
  } while (r);
  return !1;
}
function hb(e, t, n, r) {
  var o, a;
  const s = /* @__PURE__ */ new Map();
  for (const [l, c] of e)
    (c.selected || c.id === r) && (!c.parentNode || !Qf(c, e)) && (c.draggable || t && typeof c.draggable > "u") && e.get(l) && s.set(l, {
      id: c.id,
      position: c.position || { x: 0, y: 0 },
      distance: {
        x: n.x - ((o = c.computedPosition) == null ? void 0 : o.x) || 0,
        y: n.y - ((a = c.computedPosition) == null ? void 0 : a.y) || 0
      },
      from: { x: c.computedPosition.x, y: c.computedPosition.y },
      extent: c.extent,
      parentNode: c.parentNode,
      dimensions: { ...c.dimensions },
      expandParent: c.expandParent
    });
  return Array.from(s.values());
}
function us({
  id: e,
  dragItems: t,
  findNode: n
}) {
  const r = [];
  for (const o of t) {
    const a = n(o.id);
    a && r.push(a);
  }
  return [e ? r.find((o) => o.id === e) : r[0], r];
}
function tp(e) {
  if (Array.isArray(e))
    switch (e.length) {
      case 1:
        return [e[0], e[0], e[0], e[0]];
      case 2:
        return [e[0], e[1], e[0], e[1]];
      case 3:
        return [e[0], e[1], e[2], e[1]];
      case 4:
        return e;
      default:
        return [0, 0, 0, 0];
    }
  return [e, e, e, e];
}
function mb(e, t, n) {
  const [r, o, a, s] = typeof e != "string" ? tp(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + s, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - a
    ]
  ] : !1;
}
function vb(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const a = mb(o, e, r);
      a && (o = a);
    } else
      t(new at(nt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const a = r?.computedPosition.x || 0, s = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + a, o[0][1] + s],
      [o[1][0] + a, o[1][1] + s]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [a, s, l, c] = tp(o.padding), u = r?.computedPosition.x || 0, d = r?.computedPosition.y || 0;
    o = [
      [o.range[0][0] + u + c, o.range[0][1] + d + a],
      [o.range[1][0] + u - s, o.range[1][1] + d - l]
    ];
  }
  return o === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : o;
}
function gb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function pl(e, t, n, r, o) {
  const a = gb(e.dimensions, vb(e, n, r, o)), s = Hf(t, a);
  return {
    position: {
      x: s.x - (o?.computedPosition.x || 0),
      y: s.y - (o?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function fr(e, t, n = de.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, a = (t?.y ?? 0) + e.computedPosition.y, { width: s, height: l } = t ?? wb(e);
  if (r)
    return { x: o + s / 2, y: a + l / 2 };
  switch (t?.position ?? n) {
    case de.Top:
      return { x: o + s / 2, y: a };
    case de.Right:
      return { x: o + s, y: a + l / 2 };
    case de.Bottom:
      return { x: o + s / 2, y: a + l };
    case de.Left:
      return { x: o, y: a + l / 2 };
  }
}
function Nu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function yb({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: r,
  targetWidth: o,
  targetHeight: a,
  width: s,
  height: l,
  viewport: c
}) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + o),
    y2: Math.max(e.y + r, t.y + a)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const d = Yf({
    x: (0 - c.x) / c.zoom,
    y: (0 - c.y) / c.zoom,
    width: s / c.zoom,
    height: l / c.zoom
  }), f = Math.max(0, Math.min(d.x2, u.x2) - Math.max(d.x, u.x)), v = Math.max(0, Math.min(d.y2, u.y2) - Math.max(d.y, u.y));
  return Math.ceil(f * v) > 0;
}
function bb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const a = t(e.source), s = t(e.target);
  return !a || !s ? 0 : (n && (o = r ? e.zIndex : Math.max(a.computedPosition.z || 0, s.computedPosition.z || 0)), o);
}
var nt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(nt || {});
const Ru = {
  MISSING_STYLES: () => "It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",
  MISSING_VIEWPORT_DIMENSIONS: () => "The Vue Flow parent container needs a width and a height to render the graph",
  NODE_INVALID: (e) => `Node is invalid
Node: ${e}`,
  NODE_NOT_FOUND: (e) => `Node not found
Node: ${e}`,
  NODE_MISSING_PARENT: (e, t) => `Node is missing a parent
Node: ${e}
Parent: ${t}`,
  NODE_TYPE_MISSING: (e) => `Node type is missing
Type: ${e}`,
  NODE_EXTENT_INVALID: (e) => `Only child nodes can use a parent extent
Node: ${e}`,
  EDGE_INVALID: (e) => `An edge needs a source and a target
Edge: ${e}`,
  EDGE_SOURCE_MISSING: (e, t) => `Edge source is missing
Edge: ${e} 
Source: ${t}`,
  EDGE_TARGET_MISSING: (e, t) => `Edge target is missing
Edge: ${e} 
Target: ${t}`,
  EDGE_TYPE_MISSING: (e) => `Edge type is missing
Type: ${e}`,
  EDGE_SOURCE_TARGET_SAME: (e, t, n) => `Edge source and target are the same
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_SOURCE_TARGET_MISSING: (e, t, n) => `Edge source or target is missing
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_ORPHANED: (e) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e}`,
  EDGE_NOT_FOUND: (e) => `Edge not found
Edge: ${e}`,
  // deprecation errors
  USEVUEFLOW_OPTIONS: () => "The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"
};
class at extends Error {
  constructor(t, ...n) {
    var r;
    super((r = Ru[t]) == null ? void 0 : r.call(Ru, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function hl(e) {
  return "clientX" in e;
}
function xb(e) {
  return "sourceEvent" in e;
}
function Xt(e, t) {
  const n = hl(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const ua = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function wb(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function Ca(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const _b = () => !0;
function ds(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function kb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    la(o, ia(a)) > 0 && r.push(a);
  return r;
}
const Sb = 250;
function Eb(e, t, n, r) {
  var o, a;
  let s = [], l = Number.POSITIVE_INFINITY;
  const c = kb(e, n, t + Sb);
  for (const u of c) {
    const d = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y } = fr(u, f, f.position, !0), m = Math.sqrt((v - e.x) ** 2 + (y - e.y) ** 2);
      m > t || (m < l ? (s = [{ ...f, x: v, y }], l = m) : m === l && s.push({ ...f, x: v, y }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return s.find((d) => d.type === u) ?? s[0];
  }
  return s[0];
}
function Mu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: a,
  doc: s,
  lib: l,
  flowId: c,
  isValidConnection: u = _b
}, d, f, v, y) {
  const m = a === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: b } = Xt(e), $ = s.elementFromPoint(h, b), k = $?.classList.contains(`${l}-flow__handle`) ? $ : p, P = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const C = np(void 0, k), _ = k.getAttribute("data-nodeid"), g = k.getAttribute("data-handleid"), S = k.classList.contains("connectable"), U = k.classList.contains("connectableend");
    if (!_ || !C)
      return P;
    const I = {
      source: m ? _ : r,
      sourceHandle: m ? g : o,
      target: m ? r : _,
      targetHandle: m ? o : g
    };
    P.connection = I;
    const T = S && U && (n === kn.Strict ? m && C === "source" || !m && C === "target" : _ !== r || g !== o);
    P.isValid = T && u(I, {
      nodes: f,
      edges: d,
      sourceNode: v(I.source),
      targetNode: v(I.target)
    }), P.toHandle = rp(_, C, g, y, n, !0);
  }
  return P;
}
function np(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function zb(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function $b(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function rp(e, t, n, r, o, a = !1) {
  var s, l, c;
  const u = r.get(e);
  if (!u)
    return null;
  const d = o === kn.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((c = u.handleBounds) == null ? void 0 : c.target) ?? []], f = (n ? d?.find((v) => v.id === n) : d?.[0]) ?? null;
  return f && a ? { ...f, ...fr(u, f, f.position, !0) } : f;
}
const Ri = {
  [de.Left]: de.Right,
  [de.Right]: de.Left,
  [de.Top]: de.Bottom,
  [de.Bottom]: de.Top
}, Pb = ["production", "prod"];
function io(e, ...t) {
  op() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function op() {
  return !Pb.includes(process.env.NODE_ENV || "");
}
function Iu(e, t, n, r, o) {
  const a = t.querySelectorAll(`.vue-flow__handle.${e}`);
  return a?.length ? Array.from(a).map((s) => {
    const l = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Pa(s)
    };
  }) : null;
}
function Mi(e, t, n, r, o, a = !1, s) {
  o.value = !1, e.selected ? (a || e.selected && t) && (r([e]), un(() => {
    s.blur();
  })) : n([e]);
}
function et(e) {
  return typeof N(e) < "u";
}
function Cb(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new at(nt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return Sn(e) ? o = e : o = {
    ...e,
    id: Xf(e)
  }, o = Gf(o, void 0, r), lb(o, t) ? !1 : o;
}
function Ab(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new at(nt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new at(nt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...s } = e;
  return {
    ...s,
    id: r ? Xf(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Du(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const s = e[a];
    if (!Fn(s)) {
      n(
        new at(nt.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = ab(s, t(s.id), s.parentNode);
    s.parentNode && (r[s.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const s = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !s && n(new at(nt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return o;
}
function Fu(e, t, n, r, o, a) {
  let s = o;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${o}-${e}`;
  const c = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, c.set(n, t)), a) {
    s = `${o}-${e}-${a}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function cs(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: s = null, targetHandle: l = null } = r, c = { edgeId: r.id, source: o, target: a, sourceHandle: s, targetHandle: l }, u = `${o}-${s}--${a}-${l}`, d = `${a}-${l}--${o}-${s}`;
    Fu("source", c, d, e, o, s), Fu("target", c, u, e, a, l);
  }
}
function Bu(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function fs(e, t, n, r, o, a, s, l) {
  const c = [];
  for (const u of e) {
    const d = Sn(u) ? u : Cb(u, l, o, a);
    if (!d)
      continue;
    const f = n(d.source), v = n(d.target);
    if (!f || !v) {
      o(new at(nt.EDGE_SOURCE_TARGET_MISSING, d.id, d.source, d.target));
      continue;
    }
    if (!f) {
      o(new at(nt.EDGE_SOURCE_MISSING, d.id, d.source));
      continue;
    }
    if (!v) {
      o(new at(nt.EDGE_TARGET_MISSING, d.id, d.target));
      continue;
    }
    if (t && !t(d, {
      edges: l,
      nodes: s,
      sourceNode: f,
      targetNode: v
    })) {
      o(new at(nt.EDGE_INVALID, d.id));
      continue;
    }
    const y = r(d.id);
    c.push({
      ...Gf(d, y, a),
      sourceNode: f,
      targetNode: v
    });
  }
  return c;
}
const Lu = /* @__PURE__ */ Symbol("vueFlow"), ap = /* @__PURE__ */ Symbol("nodeId"), sp = /* @__PURE__ */ Symbol("nodeRef"), Tb = /* @__PURE__ */ Symbol("edgeId"), Ob = /* @__PURE__ */ Symbol("edgeRef"), Aa = /* @__PURE__ */ Symbol("slots");
function ip(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: r,
    noDragClassName: o,
    nodeLookup: a,
    nodeExtent: s,
    nodeDragThreshold: l,
    viewport: c,
    autoPanOnNodeDrag: u,
    autoPanSpeed: d,
    nodesDraggable: f,
    panBy: v,
    findNode: y,
    multiSelectionActive: m,
    nodesSelectionActive: p,
    selectNodesOnDrag: h,
    removeSelectedElements: b,
    addSelectedNodes: $,
    updateNodePositions: k,
    emits: P
  } = je(), { onStart: C, onDrag: _, onStop: g, onClick: S, el: U, disabled: I, id: D, selectable: T, dragHandle: V } = e, z = an(!1);
  let R = [], x, O = null, w = { x: void 0, y: void 0 }, q = { x: 0, y: 0 }, Q = null, ne = !1, pe = !1, xe = 0, ke = !1;
  const re = Mb(), se = ({ x: ie, y: ge }) => {
    w = { x: ie, y: ge };
    let F = !1;
    if (R = R.map((M) => {
      const B = { x: ie - M.distance.x, y: ge - M.distance.y }, { computedPosition: H } = pl(
        M,
        n.value ? Ca(B, r.value) : B,
        P.error,
        s.value,
        M.parentNode ? y(M.parentNode) : void 0
      );
      return F = F || M.position.x !== H.x || M.position.y !== H.y, M.position = H, M;
    }), pe = pe || F, !!F && (k(R, !0, !0), z.value = !0, Q)) {
      const [M, B] = us({
        id: D,
        dragItems: R,
        findNode: y
      });
      _({ event: Q, node: M, nodes: B });
    }
  }, ve = () => {
    if (!O)
      return;
    const [ie, ge] = ep(q, O, d.value);
    if (ie !== 0 || ge !== 0) {
      const F = {
        x: (w.x ?? 0) - ie / c.value.zoom,
        y: (w.y ?? 0) - ge / c.value.zoom
      };
      v({ x: ie, y: ge }) && se(F);
    }
    xe = requestAnimationFrame(ve);
  }, Te = (ie, ge) => {
    ne = !0;
    const F = y(D);
    !h.value && !m.value && F && (F.selected || b()), F && Ie(T) && h.value && Mi(
      F,
      m.value,
      $,
      b,
      p,
      !1,
      ge
    );
    const M = re(ie.sourceEvent);
    if (w = M, R = hb(a.value, f.value, M, D), R.length) {
      const [B, H] = us({
        id: D,
        dragItems: R,
        findNode: y
      });
      C({ event: ie.sourceEvent, node: B, nodes: H });
    }
  }, Ee = (ie, ge) => {
    var F;
    ie.sourceEvent.type === "touchmove" && ie.sourceEvent.touches.length > 1 || (pe = !1, l.value === 0 && Te(ie, ge), w = re(ie.sourceEvent), O = ((F = t.value) == null ? void 0 : F.getBoundingClientRect()) || null, q = Xt(ie.sourceEvent, O));
  }, le = (ie, ge) => {
    const F = re(ie.sourceEvent);
    if (!ke && ne && u.value && (ke = !0, ve()), !ne) {
      const M = F.xSnapped - (w.x ?? 0), B = F.ySnapped - (w.y ?? 0);
      Math.sqrt(M * M + B * B) > l.value && Te(ie, ge);
    }
    (w.x !== F.xSnapped || w.y !== F.ySnapped) && R.length && ne && (Q = ie.sourceEvent, q = Xt(ie.sourceEvent, O), se(F));
  }, _e = (ie) => {
    let ge = !1;
    if (!ne && !z.value && !m.value) {
      const F = ie.sourceEvent, M = re(F), B = M.xSnapped - (w.x ?? 0), H = M.ySnapped - (w.y ?? 0), j = Math.sqrt(B * B + H * H);
      j !== 0 && j <= l.value && (S?.(F), ge = !0);
    }
    if (R.length && !ge) {
      pe && (k(R, !1, !1), pe = !1);
      const [F, M] = us({
        id: D,
        dragItems: R,
        findNode: y
      });
      g({ event: ie.sourceEvent, node: F, nodes: M });
    }
    R = [], z.value = !1, ke = !1, ne = !1, w = { x: void 0, y: void 0 }, cancelAnimationFrame(xe);
  };
  return Me([() => Ie(I), U], ([ie, ge], F, M) => {
    if (ge) {
      const B = Mt(ge);
      ie || (x = og().on("start", (H) => Ee(H, ge)).on("drag", (H) => le(H, ge)).on("end", (H) => _e(H)).filter((H) => {
        const j = H.target, oe = Ie(V);
        return !H.button && (!o.value || !Ou(j, `.${o.value}`, ge) && (!oe || Ou(j, oe, ge)));
      }), B.call(x)), M(() => {
        B.on(".drag", null), x && (x.on("start", null), x.on("drag", null), x.on("end", null));
      });
    }
  }), z;
}
function Nb() {
  return {
    doubleClick: ce(),
    click: ce(),
    mouseEnter: ce(),
    mouseMove: ce(),
    mouseLeave: ce(),
    contextMenu: ce(),
    updateStart: ce(),
    update: ce(),
    updateEnd: ce()
  };
}
function Rb(e, t) {
  const n = Nb();
  return n.doubleClick.on((r) => {
    var o, a;
    t.edgeDoubleClick(r), (a = (o = e.events) == null ? void 0 : o.doubleClick) == null || a.call(o, r);
  }), n.click.on((r) => {
    var o, a;
    t.edgeClick(r), (a = (o = e.events) == null ? void 0 : o.click) == null || a.call(o, r);
  }), n.mouseEnter.on((r) => {
    var o, a;
    t.edgeMouseEnter(r), (a = (o = e.events) == null ? void 0 : o.mouseEnter) == null || a.call(o, r);
  }), n.mouseMove.on((r) => {
    var o, a;
    t.edgeMouseMove(r), (a = (o = e.events) == null ? void 0 : o.mouseMove) == null || a.call(o, r);
  }), n.mouseLeave.on((r) => {
    var o, a;
    t.edgeMouseLeave(r), (a = (o = e.events) == null ? void 0 : o.mouseLeave) == null || a.call(o, r);
  }), n.contextMenu.on((r) => {
    var o, a;
    t.edgeContextMenu(r), (a = (o = e.events) == null ? void 0 : o.contextMenu) == null || a.call(o, r);
  }), n.updateStart.on((r) => {
    var o, a;
    t.edgeUpdateStart(r), (a = (o = e.events) == null ? void 0 : o.updateStart) == null || a.call(o, r);
  }), n.update.on((r) => {
    var o, a;
    t.edgeUpdate(r), (a = (o = e.events) == null ? void 0 : o.update) == null || a.call(o, r);
  }), n.updateEnd.on((r) => {
    var o, a;
    t.edgeUpdateEnd(r), (a = (o = e.events) == null ? void 0 : o.updateEnd) == null || a.call(o, r);
  }), Object.entries(n).reduce(
    (r, [o, a]) => (r.emit[o] = a.trigger, r.on[o] = a.on, r),
    { emit: {}, on: {} }
  );
}
function Mb() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = je();
  return (o) => {
    var a;
    const s = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = xb(o) ? o.sourceEvent : o, { x: c, y: u } = Xt(l, s), d = Jr({ x: c, y: u }, e.value), { x: f, y: v } = n.value ? Ca(d, t.value) : d;
    return {
      xSnapped: f,
      ySnapped: v,
      ...d
    };
  };
}
function Eo() {
  return !0;
}
function lp({
  handleId: e,
  nodeId: t,
  type: n,
  isValidConnection: r,
  edgeUpdaterType: o,
  onEdgeUpdate: a,
  onEdgeUpdateEnd: s
}) {
  const {
    id: l,
    vueFlowRef: c,
    connectionMode: u,
    connectionRadius: d,
    connectOnClick: f,
    connectionClickStartHandle: v,
    nodesConnectable: y,
    autoPanOnConnect: m,
    autoPanSpeed: p,
    findNode: h,
    panBy: b,
    startConnection: $,
    updateConnection: k,
    endConnection: P,
    emits: C,
    viewport: _,
    edges: g,
    nodes: S,
    isValidConnection: U,
    nodeLookup: I
  } = je();
  let D = null, T = !1, V = null;
  function z(x) {
    var O;
    const w = Ie(n) === "target", q = hl(x), Q = ku(x.target), ne = x.currentTarget;
    if (ne && (q && x.button === 0 || !q)) {
      let pe = function(he) {
        F = Xt(he, _e), se = Eb(
          Jr(F, _.value, !1, [1, 1]),
          d.value,
          I.value,
          H
        ), M || (B(), M = !0);
        const we = Mu(
          he,
          {
            handle: se,
            connectionMode: u.value,
            fromNodeId: Ie(t),
            fromHandleId: Ie(e),
            fromType: w ? "target" : "source",
            isValidConnection: re,
            doc: Q,
            lib: "vue",
            flowId: l,
            nodeLookup: I.value
          },
          g.value,
          S.value,
          h,
          I.value
        );
        V = we.handleDomNode, D = we.connection, T = $b(!!se, we.isValid);
        const Pe = {
          // from stays the same
          ...fe,
          isValid: T,
          to: we.toHandle && T ? Zr({ x: we.toHandle.x, y: we.toHandle.y }, _.value) : F,
          toHandle: we.toHandle,
          toPosition: T && we.toHandle ? we.toHandle.position : Ri[H.position],
          toNode: we.toHandle ? I.value.get(we.toHandle.nodeId) : null
        };
        if (T && se && fe?.toHandle && Pe.toHandle && fe.toHandle.type === Pe.toHandle.type && fe.toHandle.nodeId === Pe.toHandle.nodeId && fe.toHandle.id === Pe.toHandle.id && fe.to.x === Pe.to.x && fe.to.y === Pe.to.y)
          return;
        const Be = se ?? we.toHandle;
        if (k(
          Be && T ? Zr(
            {
              x: Be.x,
              y: Be.y
            },
            _.value
          ) : F,
          Be,
          zb(!!Be, T)
        ), fe = Pe, !se && !T && !V)
          return ds(ge);
        D && D.source !== D.target && V && (ds(ge), ge = V, V.classList.add("connecting", "vue-flow__handle-connecting"), V.classList.toggle("valid", !!T), V.classList.toggle("vue-flow__handle-valid", !!T));
      }, xe = function(he) {
        "touches" in he && he.touches.length > 0 || ((se || V) && D && T && (a ? a(he, D) : C.connect(D)), C.connectEnd(he), o && s?.(he), ds(ge), cancelAnimationFrame(ve), P(he), M = !1, T = !1, D = null, V = null, Q.removeEventListener("mousemove", pe), Q.removeEventListener("mouseup", xe), Q.removeEventListener("touchmove", pe), Q.removeEventListener("touchend", xe));
      };
      const ke = h(Ie(t));
      let re = Ie(r) || U.value || Eo;
      !re && ke && (re = (w ? ke.isValidSourcePos : ke.isValidTargetPos) || Eo);
      let se, ve = 0;
      const { x: Te, y: Ee } = Xt(x), le = np(Ie(o), ne), _e = (O = c.value) == null ? void 0 : O.getBoundingClientRect();
      if (!_e || !le)
        return;
      const ie = rp(Ie(t), le, Ie(e), I.value, u.value);
      if (!ie)
        return;
      let ge, F = Xt(x, _e), M = !1;
      const B = () => {
        if (!m.value)
          return;
        const [he, we] = ep(F, _e, p.value);
        b({ x: he, y: we }), ve = requestAnimationFrame(B);
      }, H = {
        ...ie,
        nodeId: Ie(t),
        type: le,
        position: ie.position
      }, j = I.value.get(Ie(t)), ae = {
        inProgress: !0,
        isValid: null,
        from: fr(j, H, de.Left, !0),
        fromHandle: H,
        fromPosition: H.position,
        fromNode: j,
        to: F,
        toHandle: null,
        toPosition: Ri[H.position],
        toNode: null
      };
      $(
        {
          nodeId: Ie(t),
          id: Ie(e),
          type: le,
          position: ne?.getAttribute("data-handlepos") || de.Top,
          ...F
        },
        {
          x: Te - _e.left,
          y: Ee - _e.top
        }
      ), C.connectStart({ event: x, nodeId: Ie(t), handleId: Ie(e), handleType: le });
      let fe = ae;
      Q.addEventListener("mousemove", pe), Q.addEventListener("mouseup", xe), Q.addEventListener("touchmove", pe), Q.addEventListener("touchend", xe);
    }
  }
  function R(x) {
    var O, w;
    if (!f.value)
      return;
    const q = Ie(n) === "target";
    if (!v.value) {
      C.clickConnectStart({ event: x, nodeId: Ie(t), handleId: Ie(e) }), $(
        {
          nodeId: Ie(t),
          type: Ie(n),
          id: Ie(e),
          position: de.Top,
          ...Xt(x)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Ie(r) || U.value || Eo;
    const ne = h(Ie(t));
    if (!Q && ne && (Q = (q ? ne.isValidSourcePos : ne.isValidTargetPos) || Eo), ne && (typeof ne.connectable > "u" ? y.value : ne.connectable) === !1)
      return;
    const pe = ku(x.target), xe = Mu(
      x,
      {
        handle: {
          nodeId: Ie(t),
          id: Ie(e),
          type: Ie(n),
          position: de.Top,
          ...Xt(x)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: pe,
        lib: "vue",
        flowId: l,
        nodeLookup: I.value
      },
      g.value,
      S.value,
      h,
      I.value
    ), ke = ((O = xe.connection) == null ? void 0 : O.source) === ((w = xe.connection) == null ? void 0 : w.target);
    xe.isValid && xe.connection && !ke && C.connect(xe.connection), C.clickConnectEnd(x), P(x, !0);
  }
  return {
    handlePointerDown: z,
    handleClick: R
  };
}
function Ib() {
  return gr(ap, "");
}
function up(e) {
  const t = e ?? Ib() ?? "", n = gr(sp, G(null)), { findNode: r, edges: o, emits: a } = je(), s = r(t);
  return s || a.error(new at(nt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: s,
    parentNode: J(() => r(s.parentNode)),
    connectedEdges: J(() => Jf([s], o.value))
  };
}
function Db() {
  return {
    doubleClick: ce(),
    click: ce(),
    mouseEnter: ce(),
    mouseMove: ce(),
    mouseLeave: ce(),
    contextMenu: ce(),
    dragStart: ce(),
    drag: ce(),
    dragStop: ce()
  };
}
function Fb(e, t) {
  const n = Db();
  return n.doubleClick.on((r) => {
    var o, a;
    t.nodeDoubleClick(r), (a = (o = e.events) == null ? void 0 : o.doubleClick) == null || a.call(o, r);
  }), n.click.on((r) => {
    var o, a;
    t.nodeClick(r), (a = (o = e.events) == null ? void 0 : o.click) == null || a.call(o, r);
  }), n.mouseEnter.on((r) => {
    var o, a;
    t.nodeMouseEnter(r), (a = (o = e.events) == null ? void 0 : o.mouseEnter) == null || a.call(o, r);
  }), n.mouseMove.on((r) => {
    var o, a;
    t.nodeMouseMove(r), (a = (o = e.events) == null ? void 0 : o.mouseMove) == null || a.call(o, r);
  }), n.mouseLeave.on((r) => {
    var o, a;
    t.nodeMouseLeave(r), (a = (o = e.events) == null ? void 0 : o.mouseLeave) == null || a.call(o, r);
  }), n.contextMenu.on((r) => {
    var o, a;
    t.nodeContextMenu(r), (a = (o = e.events) == null ? void 0 : o.contextMenu) == null || a.call(o, r);
  }), n.dragStart.on((r) => {
    var o, a;
    t.nodeDragStart(r), (a = (o = e.events) == null ? void 0 : o.dragStart) == null || a.call(o, r);
  }), n.drag.on((r) => {
    var o, a;
    t.nodeDrag(r), (a = (o = e.events) == null ? void 0 : o.drag) == null || a.call(o, r);
  }), n.dragStop.on((r) => {
    var o, a;
    t.nodeDragStop(r), (a = (o = e.events) == null ? void 0 : o.dragStop) == null || a.call(o, r);
  }), Object.entries(n).reduce(
    (r, [o, a]) => (r.emit[o] = a.trigger, r.on[o] = a.on, r),
    { emit: {}, on: {} }
  );
}
function dp() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: s, emits: l } = je();
  return (c, u = !1) => {
    const d = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, v = u ? 4 : 1, y = c.x * d * v, m = c.y * f * v, p = [];
    for (const h of e.value)
      if (h.draggable || s && typeof h.draggable > "u") {
        const b = { x: h.computedPosition.x + y, y: h.computedPosition.y + m }, { position: $ } = pl(
          h,
          b,
          l.error,
          t.value,
          h.parentNode ? r(h.parentNode) : void 0
        );
        p.push({
          id: h.id,
          position: $,
          from: h.position,
          distance: { x: c.x, y: c.y },
          dimensions: h.dimensions
        });
      }
    n(p, !0, !1);
  };
}
const zo = 0.1, Bb = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function vn() {
  return io("Viewport not initialized yet."), Promise.resolve(!1);
}
const Lb = {
  zoomIn: vn,
  zoomOut: vn,
  zoomTo: vn,
  fitView: vn,
  setCenter: vn,
  fitBounds: vn,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: vn,
  setTransform: vn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function Ub(e) {
  function t(r, o) {
    return new Promise((a) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Ir : Fo).scaleBy(
        ps(e.d3Selection, o?.duration, o?.ease, () => {
          a(!0);
        }),
        r
      ) : a(!1);
    });
  }
  function n(r, o, a, s) {
    return new Promise((l) => {
      var c;
      const { x: u, y: d } = Hf({ x: -r, y: -o }, e.translateExtent), f = cr.translate(-u, -d).scale(a);
      e.d3Selection && e.d3Zoom ? (c = e.d3Zoom) == null || c.interpolate(s?.interpolate === "linear" ? Ir : Fo).transform(
        ps(e.d3Selection, s?.duration, s?.ease, () => {
          l(!0);
        }),
        f
      ) : l(!1);
    });
  }
  return J(() => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
    viewportInitialized: !0,
    // todo: allow passing scale as option
    zoomIn: (o) => t(1.2, o),
    zoomOut: (o) => t(1 / 1.2, o),
    zoomTo: (o, a) => new Promise((s) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(a?.interpolate === "linear" ? Ir : Fo).scaleTo(
        ps(e.d3Selection, a?.duration, a?.ease, () => {
          s(!0);
        }),
        o
      ) : s(!1);
    }),
    setViewport: (o, a) => n(o.x, o.y, o.zoom, a),
    setTransform: (o, a) => n(o.x, o.y, o.zoom, a),
    getViewport: () => ({
      x: e.viewport.x,
      y: e.viewport.y,
      zoom: e.viewport.zoom
    }),
    getTransform: () => ({
      x: e.viewport.x,
      y: e.viewport.y,
      zoom: e.viewport.zoom
    }),
    fitView: (o = {
      padding: zo,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var a, s;
      const l = [];
      for (const v of e.nodes)
        v.dimensions.width && v.dimensions.height && (o?.includeHiddenNodes || !v.hidden) && (!((a = o.nodes) != null && a.length) || (s = o.nodes) != null && s.length && o.nodes.includes(v.id)) && l.push(v);
      if (!l.length)
        return Promise.resolve(!1);
      const c = Kf(l), { x: u, y: d, zoom: f } = Su(
        c,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? zo
      );
      return n(u, d, f, o);
    },
    setCenter: (o, a, s) => {
      const l = typeof s?.zoom < "u" ? s.zoom : e.maxZoom, c = e.dimensions.width / 2 - o * l, u = e.dimensions.height / 2 - a * l;
      return n(c, u, l, s);
    },
    fitBounds: (o, a = { padding: zo }) => {
      const { x: s, y: l, zoom: c } = Su(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        a.padding ?? zo
      );
      return n(s, l, c, a);
    },
    project: (o) => Jr(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x - a,
          y: o.y - s
        };
        return Jr(l, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x + a,
          y: o.y + s
        };
        return Zr(l, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Lb);
}
function ps(e, t = 0, n = Bb, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Vb(e, t, n) {
  const r = Wc(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, h, b = !!(n.nodes.value.length || n.edges.value.length);
        p = er([e.modelValue, () => {
          var $, k;
          return (k = ($ = e.modelValue) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (h?.pause(), n.setElements($), !h && !b && $.length ? b = !0 : h?.resume());
        }), h = er(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([$, k]) => {
            var P;
            (P = e.modelValue) != null && P.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [...$, ...k], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Mo(() => {
          p?.stop(), h?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let p, h, b = !!n.nodes.value.length;
        p = er([e.nodes, () => {
          var $, k;
          return (k = ($ = e.nodes) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (h?.pause(), n.setNodes($), !h && !b && $.length ? b = !0 : h?.resume());
        }), h = er(
          [n.nodes, () => n.nodes.value.length],
          ([$]) => {
            var k;
            (k = e.nodes) != null && k.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [...$], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Mo(() => {
          p?.stop(), h?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        let p, h, b = !!n.edges.value.length;
        p = er([e.edges, () => {
          var $, k;
          return (k = ($ = e.edges) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (h?.pause(), n.setEdges($), !h && !b && $.length ? b = !0 : h?.resume());
        }), h = er(
          [n.edges, () => n.edges.value.length],
          ([$]) => {
            var k;
            (k = e.edges) != null && k.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [...$], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Mo(() => {
          p?.stop(), h?.stop();
        });
      });
    }, l = () => {
      r.run(() => {
        Me(
          () => t.maxZoom,
          () => {
            t.maxZoom && et(t.maxZoom) && n.setMaxZoom(t.maxZoom);
          },
          {
            immediate: !0
          }
        );
      });
    }, c = () => {
      r.run(() => {
        Me(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      r.run(() => {
        Me(
          () => t.translateExtent,
          () => {
            t.translateExtent && et(t.translateExtent) && n.setTranslateExtent(t.translateExtent);
          },
          {
            immediate: !0
          }
        );
      });
    }, d = () => {
      r.run(() => {
        Me(
          () => t.nodeExtent,
          () => {
            t.nodeExtent && et(t.nodeExtent) && n.setNodeExtent(t.nodeExtent);
          },
          {
            immediate: !0
          }
        );
      });
    }, f = () => {
      r.run(() => {
        Me(
          () => t.applyDefault,
          () => {
            et(t.applyDefault) && (n.applyDefault.value = t.applyDefault);
          },
          {
            immediate: !0
          }
        );
      });
    }, v = () => {
      r.run(() => {
        const p = async (h) => {
          let b = h;
          typeof t.autoConnect == "function" && (b = await t.autoConnect(h)), b !== !1 && n.addEdges([b]);
        };
        Me(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Me(
          n.autoConnect,
          (h, b, $) => {
            h ? n.onConnect(p) : n.hooks.value.connect.off(p), $(() => {
              n.hooks.value.connect.off(p);
            });
          },
          { immediate: !0 }
        );
      });
    }, y = () => {
      const p = [
        "id",
        "modelValue",
        "translateExtent",
        "nodeExtent",
        "edges",
        "nodes",
        "maxZoom",
        "minZoom",
        "applyDefault",
        "autoConnect"
      ];
      for (const h of Object.keys(t)) {
        const b = h;
        if (!p.includes(b)) {
          const $ = Ve(() => t[b]), k = n[b];
          rl(k) && r.run(() => {
            Me(
              $,
              (P) => {
                et(P) && (k.value = P);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), a(), s(), c(), l(), u(), d(), f(), v(), y();
  }), () => r.stop();
}
function qb() {
  return {
    edgesChange: ce(),
    nodesChange: ce(),
    nodeDoubleClick: ce(),
    nodeClick: ce(),
    nodeMouseEnter: ce(),
    nodeMouseMove: ce(),
    nodeMouseLeave: ce(),
    nodeContextMenu: ce(),
    nodeDragStart: ce(),
    nodeDrag: ce(),
    nodeDragStop: ce(),
    nodesInitialized: ce(),
    miniMapNodeClick: ce(),
    miniMapNodeDoubleClick: ce(),
    miniMapNodeMouseEnter: ce(),
    miniMapNodeMouseMove: ce(),
    miniMapNodeMouseLeave: ce(),
    connect: ce(),
    connectStart: ce(),
    connectEnd: ce(),
    clickConnectStart: ce(),
    clickConnectEnd: ce(),
    paneReady: ce(),
    init: ce(),
    move: ce(),
    moveStart: ce(),
    moveEnd: ce(),
    selectionDragStart: ce(),
    selectionDrag: ce(),
    selectionDragStop: ce(),
    selectionContextMenu: ce(),
    selectionStart: ce(),
    selectionEnd: ce(),
    viewportChangeStart: ce(),
    viewportChange: ce(),
    viewportChangeEnd: ce(),
    paneScroll: ce(),
    paneClick: ce(),
    paneContextMenu: ce(),
    paneMouseEnter: ce(),
    paneMouseMove: ce(),
    paneMouseLeave: ce(),
    edgeContextMenu: ce(),
    edgeMouseEnter: ce(),
    edgeMouseMove: ce(),
    edgeMouseLeave: ce(),
    edgeDoubleClick: ce(),
    edgeClick: ce(),
    edgeUpdateStart: ce(),
    edgeUpdate: ce(),
    edgeUpdateEnd: ce(),
    updateNodeInternals: ce(),
    error: ce((e) => io(e.message))
  };
}
function jb(e, t) {
  const n = yr();
  ph(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const s = (l) => {
        e(o, l);
      };
      a.setEmitter(s), Gr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), Gr(a.removeHasEmitListeners);
    }
  });
  function r(o) {
    var a;
    const s = Hb(o);
    return !!((a = n?.vnode.props) == null ? void 0 : a[s]);
  }
}
function Hb(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, a) => a.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function cp() {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    connectionLookup: /* @__PURE__ */ new Map(),
    nodeTypes: {},
    edgeTypes: {},
    initialized: !1,
    dimensions: {
      width: 0,
      height: 0
    },
    viewport: { x: 0, y: 0, zoom: 1 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    selectionMode: fl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Dr.Free,
    paneClickDistance: 0,
    panOnDrag: !0,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: !1,
    defaultViewport: { x: 0, y: 0, zoom: 1 },
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    defaultMarkerColor: "#b1b1b7",
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: Tn.Bezier,
      style: {}
    },
    connectionMode: kn.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: Number.NaN, y: Number.NaN },
    connectionRadius: 20,
    connectOnClick: !0,
    connectionStatus: null,
    isValidConnection: null,
    snapGrid: [15, 15],
    snapToGrid: !1,
    edgesUpdatable: !1,
    edgesFocusable: !0,
    nodesFocusable: !0,
    nodesConnectable: !0,
    nodesDraggable: !0,
    nodeDragThreshold: 1,
    elementsSelectable: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    selectionKeyCode: "Shift",
    multiSelectionKeyCode: ua() ? "Meta" : "Control",
    zoomActivationKeyCode: ua() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: qb(),
    applyDefault: !0,
    autoConnect: !1,
    fitViewOnInit: !1,
    fitViewOnInitDone: !1,
    noDragClassName: "nodrag",
    noWheelClassName: "nowheel",
    noPanClassName: "nopan",
    defaultEdgeOptions: void 0,
    elevateEdgesOnSelect: !1,
    elevateNodesOnSelect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnConnect: !0,
    autoPanSpeed: 15,
    disableKeyboardA11y: !1,
    ariaLiveMessage: ""
  };
}
const Gb = [
  "id",
  "vueFlowRef",
  "viewportRef",
  "initialized",
  "modelValue",
  "nodes",
  "edges",
  "maxZoom",
  "minZoom",
  "translateExtent",
  "hooks",
  "defaultEdgeOptions"
];
function Wb(e, t, n) {
  const r = Ub(e), o = (F) => {
    const M = F ?? [];
    e.hooks.updateNodeInternals.trigger(M);
  }, a = (F) => ib(F, e.nodes, e.edges), s = (F) => sb(F, e.nodes, e.edges), l = (F) => Jf(F, e.edges), c = ({ id: F, type: M, nodeId: B }) => {
    var H;
    const j = F ? `-${M}-${F}` : `-${M}`;
    return Array.from(((H = e.connectionLookup.get(`${B}${j}`)) == null ? void 0 : H.values()) ?? []);
  }, u = (F) => {
    if (F)
      return t.value.get(F);
  }, d = (F) => {
    if (F)
      return n.value.get(F);
  }, f = (F, M, B) => {
    var H, j;
    const oe = [];
    for (const ae of F) {
      const fe = {
        id: ae.id,
        type: "position",
        dragging: B,
        from: ae.from
      };
      if (M && (fe.position = ae.position, ae.parentNode)) {
        const he = u(ae.parentNode);
        fe.position = {
          x: fe.position.x - (((H = he?.computedPosition) == null ? void 0 : H.x) ?? 0),
          y: fe.position.y - (((j = he?.computedPosition) == null ? void 0 : j.y) ?? 0)
        };
      }
      oe.push(fe);
    }
    oe?.length && e.hooks.nodesChange.trigger(oe);
  }, v = (F) => {
    if (!e.vueFlowRef)
      return;
    const M = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!M)
      return;
    const B = window.getComputedStyle(M), { m22: H } = new window.DOMMatrixReadOnly(B.transform), j = [];
    for (const oe of F) {
      const ae = oe, fe = u(ae.id);
      if (fe) {
        const he = Pa(ae.nodeElement);
        if (!!(he.width && he.height && (fe.dimensions.width !== he.width || fe.dimensions.height !== he.height || ae.forceUpdate))) {
          const Pe = ae.nodeElement.getBoundingClientRect();
          fe.dimensions = he, fe.handleBounds.source = Iu("source", ae.nodeElement, Pe, H, fe.id), fe.handleBounds.target = Iu("target", ae.nodeElement, Pe, H, fe.id), j.push({
            id: fe.id,
            type: "dimensions",
            dimensions: he
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), j.length && e.hooks.nodesChange.trigger(j);
  }, y = (F, M) => {
    const B = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
    for (const ae of F)
      Fn(ae) ? B.add(ae.id) : Sn(ae) && H.add(ae.id);
    const j = bn(t.value, B, !0), oe = bn(n.value, H);
    if (e.multiSelectionActive) {
      for (const ae of B)
        j.push(yn(ae, M));
      for (const ae of H)
        oe.push(yn(ae, M));
    }
    j.length && e.hooks.nodesChange.trigger(j), oe.length && e.hooks.edgesChange.trigger(oe);
  }, m = (F) => {
    if (e.multiSelectionActive) {
      const M = F.map((B) => yn(B.id, !0));
      e.hooks.nodesChange.trigger(M);
      return;
    }
    e.hooks.nodesChange.trigger(bn(t.value, new Set(F.map((M) => M.id)), !0)), e.hooks.edgesChange.trigger(bn(n.value));
  }, p = (F) => {
    if (e.multiSelectionActive) {
      const M = F.map((B) => yn(B.id, !0));
      e.hooks.edgesChange.trigger(M);
      return;
    }
    e.hooks.edgesChange.trigger(bn(n.value, new Set(F.map((M) => M.id)))), e.hooks.nodesChange.trigger(bn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (F) => {
    y(F, !0);
  }, b = (F) => {
    const B = (F || e.nodes).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, $ = (F) => {
    const B = (F || e.edges).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, k = (F) => {
    if (!F || !F.length)
      return y([], !1);
    const M = F.reduce(
      (B, H) => {
        const j = yn(H.id, !1);
        return Fn(H) ? B.nodes.push(j) : B.edges.push(j), B;
      },
      { nodes: [], edges: [] }
    );
    M.nodes.length && e.hooks.nodesChange.trigger(M.nodes), M.edges.length && e.hooks.edgesChange.trigger(M.edges);
  }, P = (F) => {
    var M;
    (M = e.d3Zoom) == null || M.scaleExtent([F, e.maxZoom]), e.minZoom = F;
  }, C = (F) => {
    var M;
    (M = e.d3Zoom) == null || M.scaleExtent([e.minZoom, F]), e.maxZoom = F;
  }, _ = (F) => {
    var M;
    (M = e.d3Zoom) == null || M.translateExtent(F), e.translateExtent = F;
  }, g = (F) => {
    e.nodeExtent = F, o();
  }, S = (F) => {
    var M;
    (M = e.d3Zoom) == null || M.clickDistance(F);
  }, U = (F) => {
    e.nodesDraggable = F, e.nodesConnectable = F, e.elementsSelectable = F;
  }, I = (F) => {
    const M = F instanceof Function ? F(e.nodes) : F;
    !e.initialized && !M.length || (e.nodes = Du(M, u, e.hooks.error.trigger));
  }, D = (F) => {
    const M = F instanceof Function ? F(e.edges) : F;
    if (!e.initialized && !M.length)
      return;
    const B = fs(
      M,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    cs(e.connectionLookup, n.value, B), e.edges = B;
  }, T = (F) => {
    const M = F instanceof Function ? F([...e.nodes, ...e.edges]) : F;
    !e.initialized && !M.length || (I(M.filter(Fn)), D(M.filter(Sn)));
  }, V = (F) => {
    let M = F instanceof Function ? F(e.nodes) : F;
    M = Array.isArray(M) ? M : [M];
    const B = Du(M, u, e.hooks.error.trigger), H = [];
    for (const j of B)
      H.push(Pu(j));
    H.length && e.hooks.nodesChange.trigger(H);
  }, z = (F) => {
    let M = F instanceof Function ? F(e.edges) : F;
    M = Array.isArray(M) ? M : [M];
    const B = fs(
      M,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), H = [];
    for (const j of B)
      H.push(Pu(j));
    H.length && e.hooks.edgesChange.trigger(H);
  }, R = (F, M = !0, B = !1) => {
    const H = F instanceof Function ? F(e.nodes) : F, j = Array.isArray(H) ? H : [H], oe = [], ae = [];
    function fe(we) {
      const Pe = l(we);
      for (const Be of Pe)
        (!et(Be.deletable) || Be.deletable) && ae.push(Au(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function he(we) {
      const Pe = [];
      for (const Be of e.nodes)
        Be.parentNode === we && Pe.push(Be);
      if (Pe.length) {
        for (const Be of Pe)
          oe.push(Cu(Be.id));
        M && fe(Pe);
        for (const Be of Pe)
          he(Be.id);
      }
    }
    for (const we of j) {
      const Pe = typeof we == "string" ? u(we) : we;
      Pe && (et(Pe.deletable) && !Pe.deletable || (oe.push(Cu(Pe.id)), M && fe([Pe]), B && he(Pe.id)));
    }
    ae.length && e.hooks.edgesChange.trigger(ae), oe.length && e.hooks.nodesChange.trigger(oe);
  }, x = (F) => {
    const M = F instanceof Function ? F(e.edges) : F, B = Array.isArray(M) ? M : [M], H = [];
    for (const j of B) {
      const oe = typeof j == "string" ? d(j) : j;
      oe && (et(oe.deletable) && !oe.deletable || H.push(
        Au(
          typeof j == "string" ? j : j.id,
          oe.source,
          oe.target,
          oe.sourceHandle,
          oe.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(H);
  }, O = (F, M, B = !0) => {
    const H = d(F.id);
    if (!H)
      return !1;
    const j = e.edges.indexOf(H), oe = Ab(F, M, H, B, e.hooks.error.trigger);
    if (oe) {
      const [ae] = fs(
        [oe],
        e.isValidConnection,
        u,
        d,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((fe, he) => he === j ? ae : fe), cs(e.connectionLookup, n.value, [ae]), ae;
    }
    return !1;
  }, w = (F, M, B = { replace: !1 }) => {
    const H = d(F);
    if (!H)
      return;
    const j = typeof M == "function" ? M(H) : M;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, q = (F) => $u(F, e.nodes), Q = (F) => {
    const M = $u(F, e.edges);
    return cs(e.connectionLookup, n.value, M), M;
  }, ne = (F, M, B = { replace: !1 }) => {
    const H = u(F);
    if (!H)
      return;
    const j = typeof M == "function" ? M(H) : M;
    B.replace ? e.nodes.splice(e.nodes.indexOf(H), 1, j) : Object.assign(H, j);
  }, pe = (F, M, B = { replace: !1 }) => {
    const H = u(F);
    if (!H)
      return;
    const j = typeof M == "function" ? M(H) : M;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, xe = (F, M, B = !1) => {
    B ? e.connectionClickStartHandle = F : e.connectionStartHandle = F, e.connectionEndHandle = null, e.connectionStatus = null, M && (e.connectionPosition = M);
  }, ke = (F, M = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = F, e.connectionEndHandle = M, e.connectionStatus = B);
  }, re = (F, M) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, M ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, se = (F) => {
    const M = ob(F), B = M ? null : Nr(F) ? F : u(F.id);
    return !M && !B ? [null, null, M] : [M ? F : ia(B), B, M];
  }, ve = (F, M = !0, B = e.nodes) => {
    const [H, j, oe] = se(F);
    if (!H)
      return [];
    const ae = [];
    for (const fe of B || e.nodes) {
      if (!oe && (fe.id === j.id || !fe.computedPosition))
        continue;
      const he = ia(fe), we = la(he, H);
      (M && we > 0 || we >= he.width * he.height || we >= Number(H.width) * Number(H.height)) && ae.push(fe);
    }
    return ae;
  }, Te = (F, M, B = !0) => {
    const [H] = se(F);
    if (!H)
      return !1;
    const j = la(H, M);
    return B && j > 0 || j >= Number(H.width) * Number(H.height);
  }, Ee = (F) => {
    const { viewport: M, dimensions: B, d3Zoom: H, d3Selection: j, translateExtent: oe } = e;
    if (!H || !j || !F.x && !F.y)
      return !1;
    const ae = cr.translate(M.x + F.x, M.y + F.y).scale(M.zoom), fe = [
      [0, 0],
      [B.width, B.height]
    ], he = H.constrain()(ae, fe, oe), we = e.viewport.x !== he.x || e.viewport.y !== he.y || e.viewport.zoom !== he.k;
    return H.transform(j, he), we;
  }, le = (F) => {
    const M = F instanceof Function ? F(e) : F, B = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(M.defaultEdgeOptions) && (e.defaultEdgeOptions = M.defaultEdgeOptions);
    const H = M.modelValue || M.nodes || M.edges ? [] : void 0;
    H && (M.modelValue && H.push(...M.modelValue), M.nodes && H.push(...M.nodes), M.edges && H.push(...M.edges), T(H));
    const j = () => {
      et(M.maxZoom) && C(M.maxZoom), et(M.minZoom) && P(M.minZoom), et(M.translateExtent) && _(M.translateExtent);
    };
    for (const oe of Object.keys(M)) {
      const ae = oe, fe = M[ae];
      ![...Gb, ...B].includes(ae) && et(fe) && (e[ae] = fe);
    }
    Si(() => e.d3Zoom).not.toBeNull().then(j), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: T,
    setNodes: I,
    setEdges: D,
    addNodes: V,
    addEdges: z,
    removeNodes: R,
    removeEdges: x,
    findNode: u,
    findEdge: d,
    updateEdge: O,
    updateEdgeData: w,
    updateNode: ne,
    updateNodeData: pe,
    applyEdgeChanges: Q,
    applyNodeChanges: q,
    addSelectedElements: h,
    addSelectedNodes: m,
    addSelectedEdges: p,
    setMinZoom: P,
    setMaxZoom: C,
    setTranslateExtent: _,
    setNodeExtent: g,
    setPaneClickDistance: S,
    removeSelectedElements: k,
    removeSelectedNodes: b,
    removeSelectedEdges: $,
    startConnection: xe,
    updateConnection: ke,
    endConnection: re,
    setInteractive: U,
    setState: le,
    getIntersectingNodes: ve,
    getIncomers: a,
    getOutgoers: s,
    getConnectedEdges: l,
    getHandleConnections: c,
    isNodeIntersecting: Te,
    panBy: Ee,
    fitView: (F) => r.value.fitView(F),
    zoomIn: (F) => r.value.zoomIn(F),
    zoomOut: (F) => r.value.zoomOut(F),
    zoomTo: (F, M) => r.value.zoomTo(F, M),
    setViewport: (F, M) => r.value.setViewport(F, M),
    setTransform: (F, M) => r.value.setTransform(F, M),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (F, M, B) => r.value.setCenter(F, M, B),
    fitBounds: (F, M) => r.value.fitBounds(F, M),
    project: (F) => r.value.project(F),
    screenToFlowCoordinate: (F) => r.value.screenToFlowCoordinate(F),
    flowToScreenCoordinate: (F) => r.value.flowToScreenCoordinate(F),
    toObject: () => {
      const F = [], M = [];
      for (const B of e.nodes) {
        const {
          computedPosition: H,
          handleBounds: j,
          selected: oe,
          dimensions: ae,
          isParent: fe,
          resizing: he,
          dragging: we,
          events: Pe,
          ...Be
        } = B;
        F.push(Be);
      }
      for (const B of e.edges) {
        const { selected: H, sourceNode: j, targetNode: oe, events: ae, ...fe } = B;
        M.push(fe);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: F,
          edges: M,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (F) => new Promise((M) => {
      const { nodes: B, edges: H, position: j, zoom: oe, viewport: ae } = F;
      B && I(B), H && D(H);
      const [fe, he] = ae?.x && ae?.y ? [ae.x, ae.y] : j ?? [null, null];
      if (fe && he) {
        const we = ae?.zoom || oe || e.viewport.zoom;
        return Si(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: fe,
            y: he,
            zoom: we
          }).then(() => {
            M(!0);
          });
        });
      } else
        M(!0);
    }),
    updateNodeInternals: o,
    viewportHelper: r,
    $reset: () => {
      const F = cp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const M = cr.translate(F.defaultViewport.x ?? 0, F.defaultViewport.y ?? 0).scale(Gn(F.defaultViewport.zoom ?? 1, F.minZoom, F.maxZoom)), B = e.viewportRef.getBoundingClientRect(), H = [
          [0, 0],
          [B.width, B.height]
        ], j = e.d3Zoom.constrain()(M, H, F.translateExtent);
        e.d3Zoom.transform(e.d3Selection, j);
      }
      le(F);
    },
    $destroy: () => {
    }
  };
}
const Xb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Yb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, ut = /* @__PURE__ */ Fe({
  ...Yb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => de.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = fh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = Ve(() => n.type ?? "source"), o = Ve(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: s,
      connectionClickStartHandle: l,
      connectionEndHandle: c,
      vueFlowRef: u,
      nodesConnectable: d,
      noDragClassName: f,
      noPanClassName: v
    } = je(), { id: y, node: m, nodeEl: p, connectedEdges: h } = up(), b = G(), $ = Ve(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), k = Ve(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), P = Ve(
      () => {
        var D, T, V, z, R, x;
        return ((D = s.value) == null ? void 0 : D.nodeId) === y && ((T = s.value) == null ? void 0 : T.id) === e.id && ((V = s.value) == null ? void 0 : V.type) === r.value || ((z = c.value) == null ? void 0 : z.nodeId) === y && ((R = c.value) == null ? void 0 : R.id) === e.id && ((x = c.value) == null ? void 0 : x.type) === r.value;
      }
    ), C = Ve(
      () => {
        var D, T, V;
        return ((D = l.value) == null ? void 0 : D.nodeId) === y && ((T = l.value) == null ? void 0 : T.id) === e.id && ((V = l.value) == null ? void 0 : V.type) === r.value;
      }
    ), { handlePointerDown: _, handleClick: g } = lp({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), S = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((D) => {
      const T = D[`${r.value}Handle`];
      return D[r.value] !== y ? !1 : T ? T === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((D) => {
      const T = D[`${r.value}Handle`];
      return D[r.value] !== y ? !1 : T ? T === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(m, h.value) : et(e.connectable) ? e.connectable : d.value);
    Ke(() => {
      var D;
      if (!m.dimensions.width || !m.dimensions.height)
        return;
      const T = (D = m.handleBounds[r.value]) == null ? void 0 : D.find((q) => q.id === e.id);
      if (!u.value || T)
        return;
      const V = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !b.value || !V || !e.id)
        return;
      const z = p.value.getBoundingClientRect(), R = b.value.getBoundingClientRect(), x = window.getComputedStyle(V), { m22: O } = new window.DOMMatrixReadOnly(x.transform), w = {
        id: e.id,
        position: e.position,
        x: (R.left - z.left) / O,
        y: (R.top - z.top) / O,
        type: r.value,
        nodeId: y,
        ...Pa(b.value)
      };
      m.handleBounds[r.value] = [...m.handleBounds[r.value] ?? [], w];
    });
    function U(D) {
      const T = hl(D);
      S.value && $.value && (T && D.button === 0 || !T) && _(D);
    }
    function I(D) {
      !y || !l.value && !$.value || S.value && g(D);
    }
    return t({
      handleClick: g,
      handlePointerDown: _,
      onClick: I,
      onPointerDown: U
    }), (D, T) => (E(), A("div", {
      ref_key: "handle",
      ref: b,
      "data-id": `${N(a)}-${N(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": N(y),
      "data-handlepos": D.position,
      class: W(["vue-flow__handle", [
        `vue-flow__handle-${D.position}`,
        `vue-flow__handle-${e.id}`,
        N(f),
        N(v),
        r.value,
        {
          connectable: S.value,
          connecting: C.value,
          connectablestart: $.value,
          connectableend: k.value,
          connectionindicator: S.value && ($.value && !P.value || k.value && P.value)
        }
      ]]),
      onMousedown: U,
      onTouchstartPassive: U,
      onClick: I
    }, [
      Ye(D.$slots, "default", { id: D.id })
    ], 42, Xb));
  }
}), Ta = function({
  sourcePosition: e = de.Bottom,
  targetPosition: t = de.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: a,
  data: s
}) {
  const l = s.label ?? n;
  return [
    Ae(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? Ae(l) : Ae(ue, [l]),
    Ae(ut, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Ta.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ta.inheritAttrs = !1;
Ta.compatConfig = { MODE: 3 };
const Kb = Ta, Oa = function({
  targetPosition: e = de.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    Ae(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? Ae(a) : Ae(ue, [a])
  ];
};
Oa.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Oa.inheritAttrs = !1;
Oa.compatConfig = { MODE: 3 };
const Zb = Oa, Na = function({
  sourcePosition: e = de.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? Ae(a) : Ae(ue, [a]),
    Ae(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Na.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Na.inheritAttrs = !1;
Na.compatConfig = { MODE: 3 };
const Jb = Na, Qb = ["transform"], ex = ["width", "height", "x", "y", "rx", "ry"], tx = ["y"], nx = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, rx = /* @__PURE__ */ Fe({
  ...nx,
  props: {
    x: {},
    y: {},
    label: {},
    labelStyle: { default: () => ({}) },
    labelShowBg: { type: Boolean, default: !0 },
    labelBgStyle: { default: () => ({}) },
    labelBgPadding: { default: () => [2, 4] },
    labelBgBorderRadius: { default: 2 }
  },
  setup(e) {
    const t = G({ x: 0, y: 0, width: 0, height: 0 }), n = G(null), r = J(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ke(o), Me([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const a = n.value.getBBox();
      (a.width !== t.value.width || a.height !== t.value.height) && (t.value = a);
    }
    return (a, s) => (E(), A("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      a.labelShowBg ? (E(), A("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * a.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * a.labelBgPadding[1]}px`,
        x: -a.labelBgPadding[0],
        y: -a.labelBgPadding[1],
        style: vt(a.labelBgStyle),
        rx: a.labelBgBorderRadius,
        ry: a.labelBgBorderRadius
      }, null, 12, ex)) : te("", !0),
      i("text", _a(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Ye(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (E(), Ce(Rt(a.label), { key: 0 })) : (E(), A(ue, { key: 1 }, [
            ye(L(a.label), 1)
          ], 64))
        ])
      ], 16, tx)
    ], 8, Qb));
  }
}), ox = ["id", "d", "marker-end", "marker-start"], ax = ["d", "stroke-width"], sx = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, lo = /* @__PURE__ */ Fe({
  ...sx,
  props: {
    id: {},
    labelX: {},
    labelY: {},
    path: {},
    label: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: { default: 20 },
    labelStyle: {},
    labelShowBg: { type: Boolean },
    labelBgStyle: {},
    labelBgPadding: {},
    labelBgBorderRadius: {}
  },
  setup(e, { expose: t }) {
    const n = G(null), r = G(null), o = G(null), a = mh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (s, l) => (E(), A(ue, null, [
      i("path", _a(N(a), {
        id: s.id,
        ref_key: "pathEl",
        ref: n,
        d: s.path,
        class: "vue-flow__edge-path",
        "marker-end": s.markerEnd,
        "marker-start": s.markerStart
      }), null, 16, ox),
      s.interactionWidth ? (E(), A("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: s.path,
        "stroke-width": s.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, ax)) : te("", !0),
      s.label && s.labelX && s.labelY ? (E(), Ce(rx, {
        key: 1,
        ref_key: "labelEl",
        ref: o,
        x: s.labelX,
        y: s.labelY,
        label: s.label,
        "label-show-bg": s.labelShowBg,
        "label-bg-style": s.labelBgStyle,
        "label-bg-padding": s.labelBgPadding,
        "label-bg-border-radius": s.labelBgBorderRadius,
        "label-style": s.labelStyle
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : te("", !0)
    ], 64));
  }
});
function fp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [a, l, o, s];
}
function pp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: a,
  targetControlX: s,
  targetControlY: l
}) {
  const c = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + l * 0.375 + r * 0.125, d = Math.abs(c - e), f = Math.abs(u - t);
  return [c, u, d, f];
}
function $o(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Uu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let s, l;
  switch (e) {
    case de.Left:
      s = t - $o(t - r, a), l = n;
      break;
    case de.Right:
      s = t + $o(r - t, a), l = n;
      break;
    case de.Top:
      s = t, l = n - $o(n - o, a);
      break;
    case de.Bottom:
      s = t, l = n + $o(o - n, a);
      break;
  }
  return [s, l];
}
function ml(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = de.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = de.Top,
    curvature: l = 0.25
  } = e, [c, u] = Uu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [d, f] = Uu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [v, y, m, p] = pp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: a,
    sourceControlX: c,
    sourceControlY: u,
    targetControlX: d,
    targetControlY: f
  });
  return [
    `M${t},${n} C${c},${u} ${d},${f} ${o},${a}`,
    v,
    y,
    m,
    p
  ];
}
function Vu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let a, s;
  switch (e) {
    case de.Left:
    case de.Right:
      a = 0.5 * (t + r), s = n;
      break;
    case de.Top:
    case de.Bottom:
      a = t, s = 0.5 * (n + o);
      break;
  }
  return [a, s];
}
function hp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = de.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = de.Top
  } = e, [l, c] = Vu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, d] = Vu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, v, y, m] = pp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: a,
    sourceControlX: l,
    sourceControlY: c,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${t},${n} C${l},${c} ${u},${d} ${o},${a}`,
    f,
    v,
    y,
    m
  ];
}
const qu = {
  [de.Left]: { x: -1, y: 0 },
  [de.Right]: { x: 1, y: 0 },
  [de.Top]: { x: 0, y: -1 },
  [de.Bottom]: { x: 0, y: 1 }
};
function ix({
  source: e,
  sourcePosition: t = de.Bottom,
  target: n
}) {
  return t === de.Left || t === de.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function ju(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function lx({
  source: e,
  sourcePosition: t = de.Bottom,
  target: n,
  targetPosition: r = de.Top,
  center: o,
  offset: a
}) {
  const s = qu[t], l = qu[r], c = { x: e.x + s.x * a, y: e.y + s.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, d = ix({
    source: c,
    sourcePosition: t,
    target: u
  }), f = d.x !== 0 ? "x" : "y", v = d[f];
  let y, m, p;
  const h = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [$, k, P, C] = fp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * l[f] === -1) {
    m = o.x ?? $, p = o.y ?? k;
    const g = [
      { x: m, y: c.y },
      { x: m, y: u.y }
    ], S = [
      { x: c.x, y: p },
      { x: u.x, y: p }
    ];
    s[f] === v ? y = f === "x" ? g : S : y = f === "x" ? S : g;
  } else {
    const g = [{ x: c.x, y: u.y }], S = [{ x: u.x, y: c.y }];
    if (f === "x" ? y = s.x === v ? S : g : y = s.y === v ? g : S, t === r) {
      const V = Math.abs(e[f] - n[f]);
      if (V <= a) {
        const z = Math.min(a - 1, a - V);
        s[f] === v ? h[f] = (c[f] > e[f] ? -1 : 1) * z : b[f] = (u[f] > n[f] ? -1 : 1) * z;
      }
    }
    if (t !== r) {
      const V = f === "x" ? "y" : "x", z = s[f] === l[V], R = c[V] > u[V], x = c[V] < u[V];
      (s[f] === 1 && (!z && R || z && x) || s[f] !== 1 && (!z && x || z && R)) && (y = f === "x" ? g : S);
    }
    const U = { x: c.x + h.x, y: c.y + h.y }, I = { x: u.x + b.x, y: u.y + b.y }, D = Math.max(Math.abs(U.x - y[0].x), Math.abs(I.x - y[0].x)), T = Math.max(Math.abs(U.y - y[0].y), Math.abs(I.y - y[0].y));
    D >= T ? (m = (U.x + I.x) / 2, p = y[0].y) : (m = y[0].x, p = (U.y + I.y) / 2);
  }
  return [[
    e,
    { x: c.x + h.x, y: c.y + h.y },
    ...y,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], m, p, P, C];
}
function ux(e, t, n, r) {
  const o = Math.min(ju(e, t) / 2, ju(t, n) / 2, r), { x: a, y: s } = t;
  if (e.x === a && a === n.x || e.y === s && s === n.y)
    return `L${a} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${s}Q ${a},${s} ${a},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${a},${s + o * c}Q ${a},${s} ${a + o * l},${s}`;
}
function Ii(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = de.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = de.Top,
    borderRadius: l = 5,
    centerX: c,
    centerY: u,
    offset: d = 20
  } = e, [f, v, y, m, p] = lx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: s,
    center: { x: c, y: u },
    offset: d
  });
  return [f.reduce((b, $, k) => {
    let P;
    return k > 0 && k < f.length - 1 ? P = ux(f[k - 1], $, f[k + 1], l) : P = `${k === 0 ? "M" : "L"}${$.x} ${$.y}`, b += P, b;
  }, ""), v, y, m, p];
}
function dx(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [a, s, l, c] = fp({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, a, s, l, c];
}
const cx = Fe({
  name: "StraightEdge",
  props: [
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, r, o] = dx(e);
      return Ae(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), fx = cx, px = Fe({
  name: "SmoothStepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "borderRadius",
    "markerEnd",
    "markerStart",
    "interactionWidth",
    "offset"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, r, o] = Ii({
        ...e,
        sourcePosition: e.sourcePosition ?? de.Bottom,
        targetPosition: e.targetPosition ?? de.Top
      });
      return Ae(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), mp = px, hx = Fe({
  name: "StepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  setup(e, { attrs: t }) {
    return () => Ae(mp, { ...e, ...t, borderRadius: 0 });
  }
}), mx = hx, vx = Fe({
  name: "BezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "curvature",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, r, o] = ml({
        ...e,
        sourcePosition: e.sourcePosition ?? de.Bottom,
        targetPosition: e.targetPosition ?? de.Top
      });
      return Ae(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), gx = vx, yx = Fe({
  name: "SimpleBezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, r, o] = hp({
        ...e,
        sourcePosition: e.sourcePosition ?? de.Bottom,
        targetPosition: e.targetPosition ?? de.Top
      });
      return Ae(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), bx = yx, xx = {
  input: Jb,
  default: Kb,
  output: Zb
}, wx = {
  default: gx,
  straight: fx,
  step: mx,
  smoothstep: mp,
  simplebezier: bx
};
function _x(e, t, n) {
  const r = J(() => (p) => t.value.get(p)), o = J(() => (p) => n.value.get(p)), a = J(() => {
    const p = {
      ...wx,
      ...e.edgeTypes
    }, h = Object.keys(p);
    for (const b of e.edges)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), s = J(() => {
    const p = {
      ...xx,
      ...e.nodeTypes
    }, h = Object.keys(p);
    for (const b of e.nodes)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), l = J(() => e.onlyRenderVisibleElements ? Zf(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), c = J(() => {
    if (e.onlyRenderVisibleElements) {
      const p = [];
      for (const h of e.edges) {
        const b = t.value.get(h.source), $ = t.value.get(h.target);
        yb({
          sourcePos: b.computedPosition || { x: 0, y: 0 },
          targetPos: $.computedPosition || { x: 0, y: 0 },
          sourceWidth: b.dimensions.width,
          sourceHeight: b.dimensions.height,
          targetWidth: $.dimensions.width,
          targetHeight: $.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && p.push(h);
      }
      return p;
    }
    return e.edges;
  }), u = J(() => [...l.value, ...c.value]), d = J(() => {
    const p = [];
    for (const h of e.nodes)
      h.selected && p.push(h);
    return p;
  }), f = J(() => {
    const p = [];
    for (const h of e.edges)
      h.selected && p.push(h);
    return p;
  }), v = J(() => [
    ...d.value,
    ...f.value
  ]), y = J(() => {
    const p = [];
    for (const h of e.nodes)
      h.dimensions.width && h.dimensions.height && h.handleBounds !== void 0 && p.push(h);
    return p;
  }), m = J(
    () => l.value.length > 0 && y.value.length === l.value.length
  );
  return {
    getNode: r,
    getEdge: o,
    getElements: u,
    getEdgeTypes: a,
    getNodeTypes: s,
    getEdges: c,
    getNodes: l,
    getSelectedElements: v,
    getSelectedNodes: d,
    getSelectedEdges: f,
    getNodesInitialized: y,
    areNodesInitialized: m
  };
}
class On {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = yr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? On.instance;
    return On.instance = r ?? new On(), n && (n.config.globalProperties.$vueFlowStorage = On.instance), On.instance;
  }
  set(t, n) {
    return this.flows.set(t, n);
  }
  get(t) {
    return this.flows.get(t);
  }
  remove(t) {
    return this.flows.delete(t);
  }
  create(t, n) {
    const r = cp(), o = Un(r), a = {};
    for (const [v, y] of Object.entries(o.hooks)) {
      const m = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      a[m] = y.on;
    }
    const s = {};
    for (const [v, y] of Object.entries(o.hooks))
      s[v] = y.trigger;
    const l = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.nodes)
        v.set(y.id, y);
      return v;
    }), c = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.edges)
        v.set(y.id, y);
      return v;
    }), u = _x(o, l, c), d = Wb(o, l, c);
    d.setState({ ...o, ...n });
    const f = {
      ...a,
      ...u,
      ...d,
      ...pm(o),
      nodeLookup: l,
      edgeLookup: c,
      emits: s,
      id: t,
      vueFlowVersion: "1.48.2",
      $destroy: () => {
        this.remove(t);
      }
    };
    return this.set(t, f), f;
  }
  getId() {
    return `vue-flow-${this.currentId++}`;
  }
}
function je(e) {
  const t = On.getInstance(), n = Gc(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, s = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const c = gr(Lu, null);
    typeof c < "u" && c !== null && (!s || c.id === s) && (l = c);
  }
  if (l || s && (l = t.get(s)), !l || s && l.id !== s) {
    const c = a ?? t.getId(), u = t.create(c, o);
    l = u, (n ?? Wc(!0)).run(() => {
      Me(
        u.applyDefault,
        (f, v, y) => {
          const m = (h) => {
            u.applyNodeChanges(h);
          }, p = (h) => {
            u.applyEdgeChanges(h);
          };
          f ? (u.onNodesChange(m), u.onEdgesChange(p)) : (u.hooks.value.nodesChange.off(m), u.hooks.value.edgesChange.off(p)), y(() => {
            u.hooks.value.nodesChange.off(m), u.hooks.value.edgesChange.off(p);
          });
        },
        { immediate: !0 }
      ), Gr(() => {
        if (l) {
          const f = t.get(l.id);
          f ? f.$destroy() : io(`No store instance found for id ${l.id} in storage.`);
        }
      });
    });
  } else
    r && l.setState(o);
  if (n && (Vn(Lu, l), n.vueFlowId = l.id), r) {
    const c = yr();
    c?.type.name !== "VueFlow" && l.emits.error(new at(nt.USEVUEFLOW_OPTIONS));
  }
  return l;
}
function kx(e) {
  const { emits: t, dimensions: n } = je();
  let r;
  Ke(() => {
    const o = () => {
      var a, s;
      if (!e.value || !(((s = (a = e.value).checkVisibility) == null ? void 0 : s.call(a)) ?? !0))
        return;
      const l = Pa(e.value);
      (l.width === 0 || l.height === 0) && t.error(new at(nt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: l.width || 500, height: l.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), wa(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const Sx = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, Ex = /* @__PURE__ */ Fe({
  ...Sx,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (E(), A("div", {
      class: "vue-flow__selection vue-flow__container",
      style: vt({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), zx = ["tabIndex"], $x = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Px = /* @__PURE__ */ Fe({
  ...$x,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: s } = je(), l = dp(), c = G(null), u = ip({
      el: c,
      onStart(m) {
        t.selectionDragStart(m), t.nodeDragStart(m);
      },
      onDrag(m) {
        t.selectionDrag(m), t.nodeDrag(m);
      },
      onStop(m) {
        t.selectionDragStop(m), t.nodeDragStop(m);
      }
    });
    Ke(() => {
      var m;
      a.value || (m = c.value) == null || m.focus({ preventScroll: !0 });
    });
    const d = J(() => Kf(r.value)), f = J(() => ({
      width: `${d.value.width}px`,
      height: `${d.value.height}px`,
      top: `${d.value.y}px`,
      left: `${d.value.x}px`
    }));
    function v(m) {
      t.selectionContextMenu({ event: m, nodes: r.value });
    }
    function y(m) {
      a.value || lr[m.key] && (m.preventDefault(), l(
        {
          x: lr[m.key].x,
          y: lr[m.key].y
        },
        m.shiftKey
      ));
    }
    return (m, p) => !N(s) && d.value.width && d.value.height ? (E(), A("div", {
      key: 0,
      class: W(["vue-flow__nodesselection vue-flow__container", N(o)]),
      style: vt({ transform: `translate(${N(n).x}px,${N(n).y}px) scale(${N(n).zoom})` })
    }, [
      i("div", {
        ref_key: "el",
        ref: c,
        class: W([{ dragging: N(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: N(a) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: y
      }, null, 46, zx)
    ], 6)) : te("", !0);
  }
});
function Cx(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const Ax = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, Tx = /* @__PURE__ */ Fe({
  ...Ax,
  props: {
    isSelecting: { type: Boolean },
    selectionKeyPressed: { type: Boolean }
  },
  setup(e) {
    const {
      vueFlowRef: t,
      nodes: n,
      viewport: r,
      emits: o,
      userSelectionActive: a,
      removeSelectedElements: s,
      userSelectionRect: l,
      elementsSelectable: c,
      nodesSelectionActive: u,
      getSelectedEdges: d,
      getSelectedNodes: f,
      removeNodes: v,
      removeEdges: y,
      selectionMode: m,
      deleteKeyCode: p,
      multiSelectionKeyCode: h,
      multiSelectionActive: b,
      edgeLookup: $,
      nodeLookup: k,
      connectionLookup: P,
      defaultEdgeOptions: C,
      connectionStartHandle: _,
      panOnDrag: g
    } = je(), S = an(null), U = an(/* @__PURE__ */ new Set()), I = an(/* @__PURE__ */ new Set()), D = an(null), T = Ve(() => c.value && (e.isSelecting || a.value)), V = Ve(() => _.value !== null);
    let z = !1, R = !1;
    const x = Fr(p, { actInsideInputWithModifier: !1 }), O = Fr(h);
    Me(x, (re) => {
      re && (v(f.value), y(d.value), u.value = !1);
    }), Me(O, (re) => {
      b.value = re;
    });
    function w(re, se) {
      return (ve) => {
        ve.target === se && re?.(ve);
      };
    }
    function q(re) {
      if (z || V.value) {
        z = !1;
        return;
      }
      o.paneClick(re), s(), u.value = !1;
    }
    function Q(re) {
      var se;
      if (Array.isArray(g.value) && ((se = g.value) != null && se.includes(2))) {
        re.preventDefault();
        return;
      }
      o.paneContextMenu(re);
    }
    function ne(re) {
      o.paneScroll(re);
    }
    function pe(re) {
      var se, ve, Te;
      if (D.value = ((se = t.value) == null ? void 0 : se.getBoundingClientRect()) ?? null, !c.value || !e.isSelecting || re.button !== 0 || re.target !== S.value || !D.value)
        return;
      (Te = (ve = re.target) == null ? void 0 : ve.setPointerCapture) == null || Te.call(ve, re.pointerId);
      const { x: Ee, y: le } = Cx(re, D.value);
      R = !0, z = !1, s(), l.value = {
        width: 0,
        height: 0,
        startX: Ee,
        startY: le,
        x: Ee,
        y: le
      }, o.selectionStart(re);
    }
    function xe(re) {
      var se;
      if (!D.value || !l.value)
        return;
      z = !0;
      const { x: ve, y: Te } = Xt(re, D.value), { startX: Ee = 0, startY: le = 0 } = l.value, _e = {
        startX: Ee,
        startY: le,
        x: ve < Ee ? ve : Ee,
        y: Te < le ? Te : le,
        width: Math.abs(ve - Ee),
        height: Math.abs(Te - le)
      }, ie = U.value, ge = I.value;
      U.value = new Set(
        Zf(n.value, _e, r.value, m.value === fl.Partial, !0).map(
          (M) => M.id
        )
      ), I.value = /* @__PURE__ */ new Set();
      const F = ((se = C.value) == null ? void 0 : se.selectable) ?? !0;
      for (const M of U.value) {
        const B = P.value.get(M);
        if (B)
          for (const { edgeId: H } of B.values()) {
            const j = $.value.get(H);
            j && (j.selectable ?? F) && I.value.add(H);
          }
      }
      if (!Bu(ie, U.value)) {
        const M = bn(k.value, U.value, !0);
        o.nodesChange(M);
      }
      if (!Bu(ge, I.value)) {
        const M = bn($.value, I.value);
        o.edgesChange(M);
      }
      l.value = _e, a.value = !0, u.value = !1;
    }
    function ke(re) {
      var se;
      re.button !== 0 || !R || ((se = re.target) == null || se.releasePointerCapture(re.pointerId), !a.value && l.value && re.target === S.value && q(re), a.value = !1, l.value = null, u.value = U.value.size > 0, o.selectionEnd(re), e.selectionKeyPressed && (z = !1), R = !1);
    }
    return (re, se) => (E(), A("div", {
      ref_key: "container",
      ref: S,
      class: W(["vue-flow__pane vue-flow__container", { selection: re.isSelecting }]),
      onClick: se[0] || (se[0] = (ve) => T.value ? void 0 : w(q, S.value)(ve)),
      onContextmenu: se[1] || (se[1] = (ve) => w(Q, S.value)(ve)),
      onWheelPassive: se[2] || (se[2] = (ve) => w(ne, S.value)(ve)),
      onPointerenter: se[3] || (se[3] = (ve) => T.value ? void 0 : N(o).paneMouseEnter(ve)),
      onPointerdown: se[4] || (se[4] = (ve) => T.value ? pe(ve) : N(o).paneMouseMove(ve)),
      onPointermove: se[5] || (se[5] = (ve) => T.value ? xe(ve) : N(o).paneMouseMove(ve)),
      onPointerup: se[6] || (se[6] = (ve) => T.value ? ke(ve) : void 0),
      onPointerleave: se[7] || (se[7] = (ve) => N(o).paneMouseLeave(ve))
    }, [
      Ye(re.$slots, "default"),
      N(a) && N(l) ? (E(), Ce(Ex, {
        key: 0,
        "user-selection-rect": N(l)
      }, null, 8, ["user-selection-rect"])) : te("", !0),
      N(u) && N(f).length ? (E(), Ce(Px, { key: 1 })) : te("", !0)
    ], 34));
  }
}), Ox = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Nx = /* @__PURE__ */ Fe({
  ...Ox,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = je(), o = J(() => n.value ? !r.value : !1), a = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (s, l) => (E(), A("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: vt({ transform: a.value, opacity: o.value ? 0 : void 0 })
    }, [
      Ye(s.$slots, "default")
    ], 4));
  }
}), Rx = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Mx = /* @__PURE__ */ Fe({
  ...Rx,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: r,
      translateExtent: o,
      zoomActivationKeyCode: a,
      selectionKeyCode: s,
      panActivationKeyCode: l,
      panOnScroll: c,
      panOnScrollMode: u,
      panOnScrollSpeed: d,
      panOnDrag: f,
      zoomOnDoubleClick: v,
      zoomOnPinch: y,
      zoomOnScroll: m,
      preventScrolling: p,
      noWheelClassName: h,
      noPanClassName: b,
      emits: $,
      connectionStartHandle: k,
      userSelectionActive: P,
      paneDragging: C,
      d3Zoom: _,
      d3Selection: g,
      d3ZoomHandler: S,
      viewport: U,
      viewportRef: I,
      paneClickDistance: D
    } = je();
    kx(I);
    const T = an(!1), V = an(!1);
    let z = null, R = !1, x = 0, O = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const w = Fr(l), q = Fr(s), Q = Fr(a), ne = Ve(
      () => (!q.value || q.value && s.value === !0) && (w.value || f.value)
    ), pe = Ve(() => w.value || c.value), xe = Ve(() => s.value === !0 && ne.value !== !0), ke = Ve(
      () => q.value && s.value !== !0 || P.value || xe.value
    ), re = Ve(() => k.value !== null);
    Ke(() => {
      if (!I.value) {
        io("Viewport element is missing");
        return;
      }
      const le = I.value, _e = le.getBoundingClientRect(), ie = Zy().clickDistance(D.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ge = Mt(le).call(ie), F = ge.on("wheel.zoom"), M = cr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(Gn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [_e.width, _e.height]
      ], H = ie.constrain()(M, B, o.value);
      ie.transform(ge, H), ie.wheelDelta(Eu), _.value = ie, g.value = ge, S.value = F, U.value = { x: H.x, y: H.y, zoom: H.k }, ie.on("start", (j) => {
        var oe;
        if (!j.sourceEvent)
          return null;
        x = j.sourceEvent.button, T.value = !0;
        const ae = Te(j.transform);
        ((oe = j.sourceEvent) == null ? void 0 : oe.type) === "mousedown" && (C.value = !0), O = ae, $.viewportChangeStart(ae), $.moveStart({ event: j, flowTransform: ae });
      }), ie.on("end", (j) => {
        if (!j.sourceEvent)
          return null;
        if (T.value = !1, C.value = !1, se(ne.value, x ?? 0) && !R && $.paneContextMenu(j.sourceEvent), R = !1, ve(O, j.transform)) {
          const oe = Te(j.transform);
          O = oe, $.viewportChangeEnd(oe), $.moveEnd({ event: j, flowTransform: oe });
        }
      }), ie.filter((j) => {
        var oe;
        const ae = Q.value || m.value, fe = y.value && j.ctrlKey, he = j.button, we = j.type === "wheel";
        if (he === 1 && j.type === "mousedown" && (Ee(j, "vue-flow__node") || Ee(j, "vue-flow__edge")))
          return !0;
        if (!ne.value && !ae && !pe.value && !v.value && !y.value || P.value || re.value && !we || !v.value && j.type === "dblclick" || Ee(j, h.value) && we || Ee(j, b.value) && (!we || pe.value && we && !Q.value) || !y.value && j.ctrlKey && we || !ae && !pe.value && !fe && we)
          return !1;
        if (!y && j.type === "touchstart" && ((oe = j.touches) == null ? void 0 : oe.length) > 1)
          return j.preventDefault(), !1;
        if (!ne.value && (j.type === "mousedown" || j.type === "touchstart") || xe.value && Array.isArray(f.value) && f.value.includes(0) && he === 0 || Array.isArray(f.value) && !f.value.includes(he) && (j.type === "mousedown" || j.type === "touchstart"))
          return !1;
        const Pe = Array.isArray(f.value) && f.value.includes(he) || s.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !he || he <= 1;
        return (!j.ctrlKey || w.value || we) && Pe;
      }), Me(
        [P, ne],
        () => {
          P.value && !T.value ? ie.on("zoom", null) : P.value || ie.on("zoom", (j) => {
            U.value = { x: j.transform.x, y: j.transform.y, zoom: j.transform.k };
            const oe = Te(j.transform);
            R = se(ne.value, x ?? 0), $.viewportChange(oe), $.move({ event: j, flowTransform: oe });
          });
        },
        { immediate: !0 }
      ), Me(
        [P, pe, u, Q, y, p, h],
        () => {
          pe.value && !Q.value && !P.value ? ge.on(
            "wheel.zoom",
            (j) => {
              if (Ee(j, h.value))
                return !1;
              const oe = Q.value || m.value, ae = y.value && j.ctrlKey;
              if (!(!p.value || pe.value || oe || ae))
                return !1;
              j.preventDefault(), j.stopImmediatePropagation();
              const he = ge.property("__zoom").k || 1, we = ua();
              if (!w.value && j.ctrlKey && y.value && we) {
                const Xa = Gt(j), $n = Eu(j), wr = he * 2 ** $n;
                ie.scaleTo(ge, wr, Xa, j);
                return;
              }
              const Pe = j.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Dr.Vertical ? 0 : j.deltaX * Pe, Vt = u.value === Dr.Horizontal ? 0 : j.deltaY * Pe;
              !we && j.shiftKey && u.value !== Dr.Vertical && !Be && Vt && (Be = Vt, Vt = 0), ie.translateBy(
                ge,
                -(Be / he) * d.value,
                -(Vt / he) * d.value
              );
              const gt = Te(ge.property("__zoom"));
              z && clearTimeout(z), V.value ? ($.move({ event: j, flowTransform: gt }), $.viewportChange(gt), z = setTimeout(() => {
                $.moveEnd({ event: j, flowTransform: gt }), $.viewportChangeEnd(gt), V.value = !1;
              }, 150)) : (V.value = !0, $.moveStart({ event: j, flowTransform: gt }), $.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof F < "u" && ge.on(
            "wheel.zoom",
            function(j, oe) {
              const ae = !p.value && j.type === "wheel" && !j.ctrlKey, fe = Q.value || m.value, he = y.value && j.ctrlKey;
              if (!fe && !c.value && !he && j.type === "wheel" || ae || Ee(j, h.value))
                return null;
              j.preventDefault(), F.call(this, j, oe);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function se(le, _e) {
      return _e === 2 && Array.isArray(le) && le.includes(2);
    }
    function ve(le, _e) {
      return le.x !== _e.x && !Number.isNaN(_e.x) || le.y !== _e.y && !Number.isNaN(_e.y) || le.zoom !== _e.k && !Number.isNaN(_e.k);
    }
    function Te(le) {
      return {
        x: le.x,
        y: le.y,
        zoom: le.k
      };
    }
    function Ee(le, _e) {
      return le.target.closest(`.${_e}`);
    }
    return (le, _e) => (E(), A("div", {
      ref_key: "viewportRef",
      ref: I,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      X(Tx, {
        "is-selecting": ke.value,
        "selection-key-pressed": N(q),
        class: W({
          connecting: re.value,
          dragging: N(C),
          draggable: N(f) === !0 || Array.isArray(N(f)) && N(f).includes(0)
        })
      }, {
        default: ot(() => [
          X(Nx, null, {
            default: ot(() => [
              Ye(le.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Ix = ["id"], Dx = ["id"], Fx = ["id"], Bx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Lx = /* @__PURE__ */ Fe({
  ...Bx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = je();
    return (o, a) => (E(), A(ue, null, [
      i("div", {
        id: `${N(Vf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + L(N(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Ix),
      i("div", {
        id: `${N(qf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Dx),
      N(n) ? te("", !0) : (E(), A("div", {
        key: 0,
        id: `${N(rb)}-${N(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, L(N(r)), 9, Fx))
    ], 64));
  }
});
function Ux() {
  const e = je();
  Me(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function Vx(e, t, n) {
  return n === de.Left ? e - t : n === de.Right ? e + t : e;
}
function qx(e, t, n) {
  return n === de.Top ? e - t : n === de.Bottom ? e + t : e;
}
const vl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = de.Top,
  type: o
}) {
  return Ae("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Vx(t, e, r),
    cy: qx(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
vl.props = ["radius", "centerX", "centerY", "position", "type"];
vl.compatConfig = { MODE: 3 };
const Hu = vl, jx = Fe({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["id"],
  setup(e) {
    const {
      id: t,
      addSelectedEdges: n,
      connectionMode: r,
      edgeUpdaterRadius: o,
      emits: a,
      nodesSelectionActive: s,
      noPanClassName: l,
      getEdgeTypes: c,
      removeSelectedEdges: u,
      findEdge: d,
      findNode: f,
      isValidConnection: v,
      multiSelectionActive: y,
      disableKeyboardA11y: m,
      elementsSelectable: p,
      edgesUpdatable: h,
      edgesFocusable: b,
      hooks: $
    } = je(), k = J(() => d(e.id)), { emit: P, on: C } = Rb(k.value, a), _ = gr(Aa), g = yr(), S = G(!1), U = G(!1), I = G(""), D = G(null), T = G("source"), V = G(null), z = Ve(
      () => typeof k.value.selectable > "u" ? p.value : k.value.selectable
    ), R = Ve(() => typeof k.value.updatable > "u" ? h.value : k.value.updatable), x = Ve(() => typeof k.value.focusable > "u" ? b.value : k.value.focusable);
    Vn(Tb, e.id), Vn(Ob, V);
    const O = J(() => k.value.class instanceof Function ? k.value.class(k.value) : k.value.class), w = J(() => k.value.style instanceof Function ? k.value.style(k.value) : k.value.style), q = J(() => {
      const M = k.value.type || "default", B = _?.[`edge-${M}`];
      if (B)
        return B;
      let H = k.value.template ?? c.value[M];
      if (typeof H == "string" && g) {
        const j = Object.keys(g.appContext.components);
        j && j.includes(M) && (H = Yc(M, !1));
      }
      return H && typeof H != "string" ? H : (a.error(new at(nt.EDGE_TYPE_MISSING, H)), !1);
    }), { handlePointerDown: Q } = lp({
      nodeId: I,
      handleId: D,
      type: T,
      isValidConnection: v,
      edgeUpdaterType: T,
      onEdgeUpdate: xe,
      onEdgeUpdateEnd: ke
    });
    return () => {
      const M = f(k.value.source), B = f(k.value.target), H = "pathOptions" in k.value ? k.value.pathOptions : {};
      if (!M && !B)
        return a.error(new at(nt.EDGE_SOURCE_TARGET_MISSING, k.value.id, k.value.source, k.value.target)), null;
      if (!M)
        return a.error(new at(nt.EDGE_SOURCE_MISSING, k.value.id, k.value.source)), null;
      if (!B)
        return a.error(new at(nt.EDGE_TARGET_MISSING, k.value.id, k.value.target)), null;
      if (!k.value || k.value.hidden || M.hidden || B.hidden)
        return null;
      let j;
      r.value === kn.Strict ? j = M.handleBounds.source : j = [...M.handleBounds.source || [], ...M.handleBounds.target || []];
      const oe = Nu(j, k.value.sourceHandle);
      let ae;
      r.value === kn.Strict ? ae = B.handleBounds.target : ae = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const fe = Nu(ae, k.value.targetHandle), he = oe?.position || de.Bottom, we = fe?.position || de.Top, { x: Pe, y: Be } = fr(M, oe, he), { x: Vt, y: gt } = fr(B, fe, we);
      return k.value.sourceX = Pe, k.value.sourceY = Be, k.value.targetX = Vt, k.value.targetY = gt, Ae(
        "g",
        {
          ref: V,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${q.value === !1 ? "default" : k.value.type || "default"}`,
            l.value,
            O.value,
            {
              updating: S.value,
              selected: k.value.selected,
              animated: k.value.animated,
              inactive: !z.value && !$.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: x.value ? 0 : void 0,
          "aria-label": k.value.ariaLabel === null ? void 0 : k.value.ariaLabel ?? `Edge from ${k.value.source} to ${k.value.target}`,
          "aria-describedby": x.value ? `${qf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: x.value ? "group" : "img",
          ...k.value.domAttributes,
          onClick: se,
          onContextmenu: ve,
          onDblclick: Te,
          onMouseenter: Ee,
          onMousemove: le,
          onMouseleave: _e,
          onKeyDown: x.value ? F : void 0
        },
        [
          U.value ? null : Ae(q.value === !1 ? c.value.default : q.value, {
            id: e.id,
            sourceNode: M,
            targetNode: B,
            source: k.value.source,
            target: k.value.target,
            type: k.value.type,
            updatable: R.value,
            selected: k.value.selected,
            animated: k.value.animated,
            label: k.value.label,
            labelStyle: k.value.labelStyle,
            labelShowBg: k.value.labelShowBg,
            labelBgStyle: k.value.labelBgStyle,
            labelBgPadding: k.value.labelBgPadding,
            labelBgBorderRadius: k.value.labelBgBorderRadius,
            data: k.value.data,
            events: { ...k.value.events, ...C },
            style: w.value,
            markerStart: `url('#${Qr(k.value.markerStart, t)}')`,
            markerEnd: `url('#${Qr(k.value.markerEnd, t)}')`,
            sourcePosition: he,
            targetPosition: we,
            sourceX: Pe,
            sourceY: Be,
            targetX: Vt,
            targetY: gt,
            sourceHandleId: k.value.sourceHandle,
            targetHandleId: k.value.targetHandle,
            interactionWidth: k.value.interactionWidth,
            ...H
          }),
          [
            R.value === "source" || R.value === !0 ? [
              Ae(
                "g",
                {
                  onMousedown: ie,
                  onMouseenter: ne,
                  onMouseout: pe
                },
                Ae(Hu, {
                  position: he,
                  centerX: Pe,
                  centerY: Be,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            R.value === "target" || R.value === !0 ? [
              Ae(
                "g",
                {
                  onMousedown: ge,
                  onMouseenter: ne,
                  onMouseout: pe
                },
                Ae(Hu, {
                  position: we,
                  centerX: Vt,
                  centerY: gt,
                  radius: o.value,
                  type: "target",
                  "data-type": "target"
                })
              )
            ] : null
          ]
        ]
      );
    };
    function ne() {
      S.value = !0;
    }
    function pe() {
      S.value = !1;
    }
    function xe(M, B) {
      P.update({ event: M, edge: k.value, connection: B });
    }
    function ke(M) {
      P.updateEnd({ event: M, edge: k.value }), U.value = !1;
    }
    function re(M, B) {
      M.button === 0 && (U.value = !0, I.value = B ? k.value.target : k.value.source, D.value = (B ? k.value.targetHandle : k.value.sourceHandle) ?? null, T.value = B ? "target" : "source", P.updateStart({ event: M, edge: k.value }), Q(M));
    }
    function se(M) {
      var B;
      const H = { event: M, edge: k.value };
      z.value && (s.value = !1, k.value.selected && y.value ? (u([k.value]), (B = V.value) == null || B.blur()) : n([k.value])), P.click(H);
    }
    function ve(M) {
      P.contextMenu({ event: M, edge: k.value });
    }
    function Te(M) {
      P.doubleClick({ event: M, edge: k.value });
    }
    function Ee(M) {
      P.mouseEnter({ event: M, edge: k.value });
    }
    function le(M) {
      P.mouseMove({ event: M, edge: k.value });
    }
    function _e(M) {
      P.mouseLeave({ event: M, edge: k.value });
    }
    function ie(M) {
      re(M, !0);
    }
    function ge(M) {
      re(M, !1);
    }
    function F(M) {
      var B;
      !m.value && jf.includes(M.key) && z.value && (M.key === "Escape" ? ((B = V.value) == null || B.blur(), u([d(e.id)])) : n([d(e.id)]));
    }
  }
}), Hx = jx, Gx = Fe({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var e;
    const {
      id: t,
      connectionMode: n,
      connectionStartHandle: r,
      connectionEndHandle: o,
      connectionPosition: a,
      connectionLineType: s,
      connectionLineStyle: l,
      connectionLineOptions: c,
      connectionStatus: u,
      viewport: d,
      findNode: f
    } = je(), v = (e = gr(Aa)) == null ? void 0 : e["connection-line"], y = J(() => {
      var $;
      return f(($ = r.value) == null ? void 0 : $.nodeId);
    }), m = J(() => {
      var $;
      return f(($ = o.value) == null ? void 0 : $.nodeId) ?? null;
    }), p = J(() => ({
      x: (a.value.x - d.value.x) / d.value.zoom,
      y: (a.value.y - d.value.y) / d.value.zoom
    })), h = J(
      () => c.value.markerStart ? `url(#${Qr(c.value.markerStart, t)})` : ""
    ), b = J(
      () => c.value.markerEnd ? `url(#${Qr(c.value.markerEnd, t)})` : ""
    );
    return () => {
      var $, k, P;
      if (!y.value || !r.value)
        return null;
      const C = r.value.id, _ = r.value.type, g = y.value.handleBounds;
      let S = g?.[_] ?? [];
      if (n.value === kn.Loose) {
        const w = g?.[_ === "source" ? "target" : "source"] ?? [];
        S = [...S, ...w];
      }
      if (!S)
        return null;
      const U = (C ? S.find((w) => w.id === C) : S[0]) ?? null, I = U?.position ?? de.Top, { x: D, y: T } = fr(y.value, U, I);
      let V = null;
      m.value && (n.value === kn.Strict ? V = (($ = m.value.handleBounds[_ === "source" ? "target" : "source"]) == null ? void 0 : $.find(
        (w) => {
          var q;
          return w.id === ((q = o.value) == null ? void 0 : q.id);
        }
      )) || null : V = ((k = [...m.value.handleBounds.source ?? [], ...m.value.handleBounds.target ?? []]) == null ? void 0 : k.find(
        (w) => {
          var q;
          return w.id === ((q = o.value) == null ? void 0 : q.id);
        }
      )) || null);
      const z = ((P = o.value) == null ? void 0 : P.position) ?? (I ? Ri[I] : null);
      if (!I || !z)
        return null;
      const R = s.value ?? c.value.type ?? Tn.Bezier;
      let x = "";
      const O = {
        sourceX: D,
        sourceY: T,
        sourcePosition: I,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: z
      };
      return R === Tn.Bezier ? [x] = ml(O) : R === Tn.Step ? [x] = Ii({
        ...O,
        borderRadius: 0
      }) : R === Tn.SmoothStep ? [x] = Ii(O) : R === Tn.SimpleBezier ? [x] = hp(O) : x = `M${D},${T} ${p.value.x},${p.value.y}`, Ae(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        Ae(
          "g",
          { class: "vue-flow__connection" },
          v ? Ae(v, {
            sourceX: D,
            sourceY: T,
            sourcePosition: I,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: z,
            sourceNode: y.value,
            sourceHandle: U,
            targetNode: m.value,
            targetHandle: V,
            markerEnd: b.value,
            markerStart: h.value,
            connectionStatus: u.value
          }) : Ae("path", {
            d: x,
            class: [c.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...l.value,
              ...c.value.style
            },
            "marker-end": b.value,
            "marker-start": h.value
          })
        )
      );
    };
  }
}), Wx = Gx, Xx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Yx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Kx = /* @__PURE__ */ Fe({
  ...Yx,
  props: {
    id: {},
    type: {},
    color: { default: "none" },
    width: { default: 12.5 },
    height: { default: 12.5 },
    markerUnits: { default: "strokeWidth" },
    orient: { default: "auto-start-reverse" },
    strokeWidth: { default: 1 }
  },
  setup(e) {
    return (t, n) => (E(), A("marker", {
      id: t.id,
      class: "vue-flow__arrowhead",
      viewBox: "-10 -10 20 20",
      refX: "0",
      refY: "0",
      markerWidth: `${t.width}`,
      markerHeight: `${t.height}`,
      markerUnits: t.markerUnits,
      orient: t.orient
    }, [
      t.type === N(sa).ArrowClosed ? (E(), A("polyline", {
        key: 0,
        style: vt({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : te("", !0),
      t.type === N(sa).Arrow ? (E(), A("polyline", {
        key: 1,
        style: vt({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : te("", !0)
    ], 8, Xx));
  }
}), Zx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Jx = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, Qx = /* @__PURE__ */ Fe({
  ...Jx,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = je(), a = J(() => {
      const s = /* @__PURE__ */ new Set(), l = [], c = (u) => {
        if (u) {
          const d = Qr(u, t);
          s.has(d) || (typeof u == "object" ? l.push({ ...u, id: d, color: u.color || o.value }) : l.push({ id: d, color: o.value, type: u }), s.add(d));
        }
      };
      for (const u of [r.value.markerEnd, r.value.markerStart])
        c(u);
      for (const u of n.value)
        for (const d of [u.markerStart, u.markerEnd])
          c(d);
      return l.sort((u, d) => u.id.localeCompare(d.id));
    });
    return (s, l) => (E(), A("svg", Zx, [
      i("defs", null, [
        (E(!0), A(ue, null, Ne(a.value, (c) => (E(), Ce(Kx, {
          id: c.id,
          key: c.id,
          type: c.type,
          color: c.color,
          width: c.width,
          height: c.height,
          markerUnits: c.markerUnits,
          "stroke-width": c.strokeWidth,
          orient: c.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
      ])
    ]));
  }
}), e1 = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, t1 = /* @__PURE__ */ Fe({
  ...e1,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = je();
    return (o, a) => (E(), A(ue, null, [
      X(Qx),
      (E(!0), A(ue, null, Ne(N(n), (s) => (E(), A("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: N(bb)(s, N(t), N(r)) })
      }, [
        X(N(Hx), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      X(N(Wx))
    ], 64));
  }
}), n1 = Fe({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["id", "resizeObserver"],
  setup(e) {
    const {
      id: t,
      noPanClassName: n,
      selectNodesOnDrag: r,
      nodesSelectionActive: o,
      multiSelectionActive: a,
      emits: s,
      removeSelectedNodes: l,
      addSelectedNodes: c,
      updateNodeDimensions: u,
      onUpdateNodeInternals: d,
      getNodeTypes: f,
      nodeExtent: v,
      elevateNodesOnSelect: y,
      disableKeyboardA11y: m,
      ariaLiveMessage: p,
      snapToGrid: h,
      snapGrid: b,
      nodeDragThreshold: $,
      nodesDraggable: k,
      elementsSelectable: P,
      nodesConnectable: C,
      nodesFocusable: _,
      hooks: g
    } = je(), S = G(null);
    Vn(sp, S), Vn(ap, e.id);
    const U = gr(Aa), I = yr(), D = dp(), { node: T, parentNode: V } = up(e.id), { emit: z, on: R } = Fb(T, s), x = Ve(() => typeof T.draggable > "u" ? k.value : T.draggable), O = Ve(() => typeof T.selectable > "u" ? P.value : T.selectable), w = Ve(() => typeof T.connectable > "u" ? C.value : T.connectable), q = Ve(() => typeof T.focusable > "u" ? _.value : T.focusable), Q = J(
      () => O.value || x.value || g.value.nodeClick.hasListeners() || g.value.nodeDoubleClick.hasListeners() || g.value.nodeMouseEnter.hasListeners() || g.value.nodeMouseMove.hasListeners() || g.value.nodeMouseLeave.hasListeners()
    ), ne = Ve(() => !!T.dimensions.width && !!T.dimensions.height), pe = J(() => {
      const B = T.type || "default", H = U?.[`node-${B}`];
      if (H)
        return H;
      let j = T.template || f.value[B];
      if (typeof j == "string" && I) {
        const oe = Object.keys(I.appContext.components);
        oe && oe.includes(B) && (j = Yc(B, !1));
      }
      return j && typeof j != "string" ? j : (s.error(new at(nt.NODE_TYPE_MISSING, j)), !1);
    }), xe = ip({
      id: e.id,
      el: S,
      disabled: () => !x.value,
      selectable: O,
      dragHandle: () => T.dragHandle,
      onStart(B) {
        z.dragStart(B);
      },
      onDrag(B) {
        z.drag(B);
      },
      onStop(B) {
        z.dragStop(B);
      },
      onClick(B) {
        F(B);
      }
    }), ke = J(() => T.class instanceof Function ? T.class(T) : T.class), re = J(() => {
      const B = (T.style instanceof Function ? T.style(T) : T.style) || {}, H = T.width instanceof Function ? T.width(T) : T.width, j = T.height instanceof Function ? T.height(T) : T.height;
      return !B.width && H && (B.width = typeof H == "string" ? H : `${H}px`), !B.height && j && (B.height = typeof j == "string" ? j : `${j}px`), B;
    }), se = Ve(() => Number(T.zIndex ?? re.value.zIndex ?? 0));
    return d((B) => {
      (B.includes(e.id) || !B.length) && Te();
    }), Ke(() => {
      Me(
        () => T.hidden,
        (B = !1, H, j) => {
          !B && S.value && (e.resizeObserver.observe(S.value), j(() => {
            S.value && e.resizeObserver.unobserve(S.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Me([() => T.type, () => T.sourcePosition, () => T.targetPosition], () => {
      un(() => {
        u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
      });
    }), Me(
      [
        () => T.position.x,
        () => T.position.y,
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.computedPosition.x;
        },
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.computedPosition.y;
        },
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.computedPosition.z;
        },
        se,
        () => T.selected,
        () => T.dimensions.height,
        () => T.dimensions.width,
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.dimensions.height;
        },
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.dimensions.width;
        }
      ],
      ([B, H, j, oe, ae, fe]) => {
        const he = {
          x: B,
          y: H,
          z: fe + (y.value && T.selected ? 1e3 : 0)
        };
        typeof j < "u" && typeof oe < "u" ? T.computedPosition = pb({ x: j, y: oe, z: ae }, he) : T.computedPosition = he;
      },
      { flush: "post", immediate: !0 }
    ), Me([() => T.extent, v], ([B, H], [j, oe]) => {
      (B !== j || H !== oe) && ve();
    }), T.extent === "parent" || typeof T.extent == "object" && "range" in T.extent && T.extent.range === "parent" ? Si(() => ne).toBe(!0).then(ve) : ve(), () => T.hidden ? null : Ae(
      "div",
      {
        ref: S,
        "data-id": T.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${pe.value === !1 ? "default" : T.type || "default"}`,
          {
            [n.value]: x.value,
            dragging: xe?.value,
            draggable: x.value,
            selected: T.selected,
            selectable: O.value,
            parent: T.isParent
          },
          ke.value
        ],
        style: {
          visibility: ne.value ? "visible" : "hidden",
          zIndex: T.computedPosition.z ?? se.value,
          transform: `translate(${T.computedPosition.x}px,${T.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...re.value
        },
        tabIndex: q.value ? 0 : void 0,
        role: q.value ? "group" : void 0,
        "aria-describedby": m.value ? void 0 : `${Vf}-${t}`,
        "aria-label": T.ariaLabel,
        "aria-roledescription": "node",
        ...T.domAttributes,
        onMouseenter: Ee,
        onMousemove: le,
        onMouseleave: _e,
        onContextmenu: ie,
        onClick: F,
        onDblclick: ge,
        onKeydown: M
      },
      [
        Ae(pe.value === !1 ? f.value.default : pe.value, {
          id: T.id,
          type: T.type,
          data: T.data,
          events: { ...T.events, ...R },
          selected: T.selected,
          resizing: T.resizing,
          dragging: xe.value,
          connectable: w.value,
          position: T.computedPosition,
          dimensions: T.dimensions,
          isValidTargetPos: T.isValidTargetPos,
          isValidSourcePos: T.isValidSourcePos,
          parent: T.parentNode,
          parentNodeId: T.parentNode,
          zIndex: T.computedPosition.z ?? se.value,
          targetPosition: T.targetPosition,
          sourcePosition: T.sourcePosition,
          label: T.label,
          dragHandle: T.dragHandle,
          onUpdateNodeInternals: Te
        })
      ]
    );
    function ve() {
      const B = T.computedPosition, { computedPosition: H, position: j } = pl(
        T,
        h.value ? Ca(B, b.value) : B,
        s.error,
        v.value,
        V.value
      );
      (T.computedPosition.x !== H.x || T.computedPosition.y !== H.y) && (T.computedPosition = { ...T.computedPosition, ...H }), (T.position.x !== j.x || T.position.y !== j.y) && (T.position = j);
    }
    function Te() {
      S.value && u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
    }
    function Ee(B) {
      xe?.value || z.mouseEnter({ event: B, node: T });
    }
    function le(B) {
      xe?.value || z.mouseMove({ event: B, node: T });
    }
    function _e(B) {
      xe?.value || z.mouseLeave({ event: B, node: T });
    }
    function ie(B) {
      return z.contextMenu({ event: B, node: T });
    }
    function ge(B) {
      return z.doubleClick({ event: B, node: T });
    }
    function F(B) {
      O.value && (!r.value || !x.value || $.value > 0) && Mi(
        T,
        a.value,
        c,
        l,
        o,
        !1,
        S.value
      ), z.click({ event: B, node: T });
    }
    function M(B) {
      if (!(Ni(B) || m.value))
        if (jf.includes(B.key) && O.value) {
          const H = B.key === "Escape";
          Mi(
            T,
            a.value,
            c,
            l,
            o,
            H,
            S.value
          );
        } else x.value && T.selected && lr[B.key] && (B.preventDefault(), p.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~T.position.x}, y: ${~~T.position.y}`, D(
          {
            x: lr[B.key].x,
            y: lr[B.key].y
          },
          B.shiftKey
        ));
    }
  }
}), r1 = n1, o1 = {
  height: "0",
  width: "0"
}, a1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, s1 = /* @__PURE__ */ Fe({
  ...a1,
  setup(e) {
    const { viewportRef: t } = je(), n = Ve(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (E(), A("svg", null, [
      (E(), A("foreignObject", o1, [
        (E(), Ce(Xc, {
          to: n.value,
          disabled: !n.value
        }, [
          Ye(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function i1(e = { includeHiddenNodes: !1 }) {
  const { nodes: t } = je();
  return J(() => {
    if (t.value.length === 0)
      return !1;
    for (const n of t.value)
      if ((e.includeHiddenNodes || !n.hidden) && (n?.handleBounds === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
        return !1;
    return !0;
  });
}
const l1 = { class: "vue-flow__nodes vue-flow__container" }, u1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, d1 = /* @__PURE__ */ Fe({
  ...u1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = je(), o = i1(), a = G();
    return Me(
      o,
      (s) => {
        s && un(() => {
          r.nodesInitialized(t.value);
        });
      },
      { immediate: !0 }
    ), Ke(() => {
      a.value = new ResizeObserver((s) => {
        const l = s.map((c) => ({
          id: c.target.getAttribute("data-id"),
          nodeElement: c.target,
          forceUpdate: !0
        }));
        un(() => n(l));
      });
    }), wa(() => {
      var s;
      return (s = a.value) == null ? void 0 : s.disconnect();
    }), (s, l) => (E(), A("div", l1, [
      a.value ? (E(!0), A(ue, { key: 0 }, Ne(N(t), (c, u, d, f) => {
        const v = [c.id];
        if (f && f.key === c.id && hh(f, v))
          return f;
        const y = (E(), Ce(N(r1), {
          id: c.id,
          key: c.id,
          "resize-observer": a.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = v, y;
      }, l, 0), 128)) : te("", !0)
    ]));
  }
});
function c1() {
  const { emits: e } = je();
  Ke(() => {
    if (op()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new at(nt.MISSING_STYLES));
    }
  });
}
const f1 = /* @__PURE__ */ i("div", { class: "vue-flow__edge-labels" }, null, -1), p1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, h1 = /* @__PURE__ */ Fe({
  ...p1,
  props: {
    id: {},
    modelValue: {},
    nodes: {},
    edges: {},
    edgeTypes: {},
    nodeTypes: {},
    connectionMode: {},
    connectionLineType: {},
    connectionLineStyle: { default: void 0 },
    connectionLineOptions: { default: void 0 },
    connectionRadius: {},
    isValidConnection: { type: [Function, null], default: void 0 },
    deleteKeyCode: { default: void 0 },
    selectionKeyCode: { type: [Boolean, null], default: void 0 },
    multiSelectionKeyCode: { default: void 0 },
    zoomActivationKeyCode: { default: void 0 },
    panActivationKeyCode: { default: void 0 },
    snapToGrid: { type: Boolean, default: void 0 },
    snapGrid: {},
    onlyRenderVisibleElements: { type: Boolean, default: void 0 },
    edgesUpdatable: { type: [Boolean, String], default: void 0 },
    nodesDraggable: { type: Boolean, default: void 0 },
    nodesConnectable: { type: Boolean, default: void 0 },
    nodeDragThreshold: {},
    elementsSelectable: { type: Boolean, default: void 0 },
    selectNodesOnDrag: { type: Boolean, default: void 0 },
    panOnDrag: { type: [Boolean, Array], default: void 0 },
    minZoom: {},
    maxZoom: {},
    defaultViewport: {},
    translateExtent: {},
    nodeExtent: {},
    defaultMarkerColor: {},
    zoomOnScroll: { type: Boolean, default: void 0 },
    zoomOnPinch: { type: Boolean, default: void 0 },
    panOnScroll: { type: Boolean, default: void 0 },
    panOnScrollSpeed: {},
    panOnScrollMode: {},
    paneClickDistance: {},
    zoomOnDoubleClick: { type: Boolean, default: void 0 },
    preventScrolling: { type: Boolean, default: void 0 },
    selectionMode: {},
    edgeUpdaterRadius: {},
    fitViewOnInit: { type: Boolean, default: void 0 },
    connectOnClick: { type: Boolean, default: void 0 },
    applyDefault: { type: Boolean, default: void 0 },
    autoConnect: { type: [Boolean, Function], default: void 0 },
    noDragClassName: {},
    noWheelClassName: {},
    noPanClassName: {},
    defaultEdgeOptions: {},
    elevateEdgesOnSelect: { type: Boolean, default: void 0 },
    elevateNodesOnSelect: { type: Boolean, default: void 0 },
    disableKeyboardA11y: { type: Boolean, default: void 0 },
    edgesFocusable: { type: Boolean, default: void 0 },
    nodesFocusable: { type: Boolean, default: void 0 },
    autoPanOnConnect: { type: Boolean, default: void 0 },
    autoPanOnNodeDrag: { type: Boolean, default: void 0 },
    autoPanSpeed: {}
  },
  emits: ["nodesChange", "edgesChange", "nodesInitialized", "paneReady", "init", "updateNodeInternals", "error", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeUpdate", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdateEnd", "nodeContextMenu", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeDoubleClick", "nodeClick", "nodeDragStart", "nodeDrag", "nodeDragStop", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "update:modelValue", "update:nodes", "update:edges"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ch(), a = rs(r, "modelValue", n), s = rs(r, "nodes", n), l = rs(r, "edges", n), c = je(r), u = Vb({ modelValue: a, nodes: s, edges: l }, r, c);
    return jb(n, c.hooks), Ux(), c1(), Vn(Aa, o), nl(u), t(c), (d, f) => (E(), A("div", {
      ref: N(c).vueFlowRef,
      class: "vue-flow"
    }, [
      X(Mx, null, {
        default: ot(() => [
          X(t1),
          f1,
          X(d1),
          Ye(d.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Ye(d.$slots, "default"),
      X(Lx)
    ], 512));
  }
}), m1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, v1 = /* @__PURE__ */ Fe({
  ...m1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = je(), r = J(() => `${t.position}`.split("-"));
    return (o, a) => (E(), A("div", {
      class: W(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: N(n) ? "none" : "all" })
    }, [
      Ye(o.$slots, "default")
    ], 6));
  }
});
var ln = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(ln || {});
const vp = function({ dimensions: e, size: t, color: n }) {
  return Ae("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, gp = function({ radius: e, color: t }) {
  return Ae("circle", { cx: e, cy: e, r: e, fill: t });
};
ln.Lines + "", ln.Dots + "";
const g1 = {
  [ln.Dots]: "#81818a",
  [ln.Lines]: "#eee"
}, y1 = ["id", "x", "y", "width", "height", "patternTransform"], b1 = {
  key: 2,
  height: "100",
  width: "100"
}, x1 = ["fill"], w1 = ["x", "y", "fill"], _1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, k1 = /* @__PURE__ */ Fe({
  ..._1,
  props: {
    id: {},
    variant: { default: () => ln.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: {},
    color: {},
    bgColor: {},
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 0 }
  },
  setup(e) {
    const { id: t, viewport: n } = je(), r = J(() => {
      const s = n.value.zoom, [l, c] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * s || 1, c * s || 1], d = e.size * s, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], y = [f * s || 1 + u[0] / 2, v * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: y,
        size: d
      };
    }), o = Ve(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = Ve(() => e.color || e.patternColor || g1[e.variant || ln.Dots]);
    return (s, l) => (E(), A("svg", {
      class: "vue-flow__background vue-flow__container",
      style: vt({
        height: `${s.height > 100 ? 100 : s.height}%`,
        width: `${s.width > 100 ? 100 : s.width}%`
      })
    }, [
      Ye(s.$slots, "pattern-container", { id: o.value }, () => [
        i("pattern", {
          id: o.value,
          x: N(n).x % r.value.scaledGap[0],
          y: N(n).y % r.value.scaledGap[1],
          width: r.value.scaledGap[0],
          height: r.value.scaledGap[1],
          patternTransform: `translate(-${r.value.offset[0]},-${r.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          Ye(s.$slots, "pattern", {}, () => [
            s.variant === N(ln).Lines ? (E(), Ce(N(vp), {
              key: 0,
              size: s.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === N(ln).Dots ? (E(), Ce(N(gp), {
              key: 1,
              color: a.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : te("", !0),
            s.bgColor ? (E(), A("svg", b1, [
              i("rect", {
                width: "100%",
                height: "100%",
                fill: s.bgColor
              }, null, 8, x1)
            ])) : te("", !0)
          ])
        ], 8, y1)
      ]),
      i("rect", {
        x: s.x,
        y: s.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, w1),
      Ye(s.$slots, "default", { id: o.value })
    ], 4));
  }
}), S1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, E1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, z1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function $1(e, t, n, r, o, a) {
  return E(), A("button", z1, [
    Ye(e.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ E1(S1, [["render", $1]]), P1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, C1 = /* @__PURE__ */ i("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), A1 = [
  C1
];
function T1(e, t) {
  return E(), A("svg", P1, A1);
}
const O1 = { render: T1 }, N1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, R1 = /* @__PURE__ */ i("path", { d: "M0 0h32v4.2H0z" }, null, -1), M1 = [
  R1
];
function I1(e, t) {
  return E(), A("svg", N1, M1);
}
const D1 = { render: I1 }, F1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, B1 = /* @__PURE__ */ i("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), L1 = [
  B1
];
function U1(e, t) {
  return E(), A("svg", F1, L1);
}
const V1 = { render: U1 }, q1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, j1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), H1 = [
  j1
];
function G1(e, t) {
  return E(), A("svg", q1, H1);
}
const W1 = { render: G1 }, X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, Y1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), K1 = [
  Y1
];
function Z1(e, t) {
  return E(), A("svg", X1, K1);
}
const J1 = { render: Z1 }, Q1 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, ew = /* @__PURE__ */ Fe({
  ...Q1,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Uf.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(e, { emit: t }) {
    const {
      nodesDraggable: n,
      nodesConnectable: r,
      elementsSelectable: o,
      setInteractive: a,
      zoomIn: s,
      zoomOut: l,
      fitView: c,
      viewport: u,
      minZoom: d,
      maxZoom: f
    } = je(), v = Ve(() => n.value || r.value || o.value), y = Ve(() => u.value.zoom <= d.value), m = Ve(() => u.value.zoom >= f.value);
    function p() {
      s(), t("zoomIn");
    }
    function h() {
      l(), t("zoomOut");
    }
    function b() {
      c(e.fitViewParams), t("fitView");
    }
    function $() {
      a(!v.value), t("interactionChange", !v.value);
    }
    return (k, P) => (E(), Ce(N(v1), {
      class: "vue-flow__controls",
      position: k.position
    }, {
      default: ot(() => [
        Ye(k.$slots, "top"),
        k.showZoom ? (E(), A(ue, { key: 0 }, [
          Ye(k.$slots, "control-zoom-in", {}, () => [
            X(Po, {
              class: "vue-flow__controls-zoomin",
              disabled: m.value,
              onClick: p
            }, {
              default: ot(() => [
                Ye(k.$slots, "icon-zoom-in", {}, () => [
                  (E(), Ce(Rt(N(O1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Ye(k.$slots, "control-zoom-out", {}, () => [
            X(Po, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: h
            }, {
              default: ot(() => [
                Ye(k.$slots, "icon-zoom-out", {}, () => [
                  (E(), Ce(Rt(N(D1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : te("", !0),
        k.showFitView ? Ye(k.$slots, "control-fit-view", { key: 1 }, () => [
          X(Po, {
            class: "vue-flow__controls-fitview",
            onClick: b
          }, {
            default: ot(() => [
              Ye(k.$slots, "icon-fit-view", {}, () => [
                (E(), Ce(Rt(N(V1))))
              ])
            ]),
            _: 3
          })
        ]) : te("", !0),
        k.showInteractive ? Ye(k.$slots, "control-interactive", { key: 2 }, () => [
          k.showInteractive ? (E(), Ce(Po, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: $
          }, {
            default: ot(() => [
              v.value ? Ye(k.$slots, "icon-unlock", { key: 0 }, () => [
                (E(), Ce(Rt(N(J1))))
              ]) : te("", !0),
              v.value ? te("", !0) : Ye(k.$slots, "icon-lock", { key: 1 }, () => [
                (E(), Ce(Rt(N(W1))))
              ])
            ]),
            _: 3
          })) : te("", !0)
        ]) : te("", !0),
        Ye(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), tw = {
  __name: "FlowEdge",
  props: {
    id: { type: String, required: !0 },
    source: { type: String, default: "" },
    target: { type: String, default: "" },
    sourceX: { type: Number, required: !0 },
    sourceY: { type: Number, required: !0 },
    targetX: { type: Number, required: !0 },
    targetY: { type: Number, required: !0 },
    sourcePosition: { type: String, default: "right" },
    targetPosition: { type: String, default: "left" },
    sourceHandleId: { type: String, default: "" },
    sourceHandle: { type: String, default: "" },
    markerEnd: { type: String, default: "" },
    selected: { type: Boolean, default: !1 },
    data: { type: Object, default: () => ({}) }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = J(() => ml({
      sourceX: n.sourceX,
      sourceY: n.sourceY,
      targetX: n.targetX,
      targetY: n.targetY,
      sourcePosition: n.sourcePosition,
      targetPosition: n.targetPosition
    })), a = J(() => ({
      position: "absolute",
      transform: `translate(-50%, -50%) translate(${o.value[1]}px, ${o.value[2]}px)`
    })), s = J(() => {
      const u = n.sourceHandleId || n.sourceHandle || n.data?.sourceHandle;
      return u || (n.data?.condition === "true" ? "yes" : n.data?.condition === "false" ? "no" : "");
    }), l = J(() => {
      switch (s.value) {
        case "yes":
          return {
            label: "SIM",
            stroke: "#10b981",
            badgeClass: "border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-500/40"
          };
        case "no":
          return {
            label: "NÃO",
            stroke: "#f43f5e",
            badgeClass: "border-rose-500/30 bg-rose-50 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-500/40"
          };
        case "replied":
          return {
            label: "RESPONDEU",
            stroke: "#14b8a6",
            badgeClass: "border-teal-500/30 bg-teal-50 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-500/40"
          };
        case "timeout":
          return {
            label: "ESGOTOU",
            stroke: "#f59e0b",
            badgeClass: "border-amber-500/30 bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-500/40"
          };
        default:
          return {
            label: null,
            stroke: n.selected ? "#10b981" : "#94a3b8",
            badgeClass: ""
          };
      }
    }), c = J(() => ({
      stroke: l.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, d) => (E(), A(ue, null, [
      X(N(lo), {
        id: e.id,
        path: o.value[0],
        style: vt(c.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      X(N(s1), null, {
        default: ot(() => [
          i("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(a.value)
          }, [
            l.value.label ? (E(), A("span", {
              key: 0,
              class: W(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, L(l.value.label), 3)) : te("", !0),
            i("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: d[0] || (d[0] = rn((f) => r("remove", e.id), ["stop"]))
            }, [
              X(N(Ot), { class: "h-2.5 w-2.5" })
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, Bn = [
  { id: "order_pending", label: "Pedido pendente", eventClass: "App\\Events\\OrderPending" },
  { id: "pix_generated", label: "PIX gerado", eventClass: "App\\Events\\PixGenerated" },
  { id: "boleto_generated", label: "Boleto gerado", eventClass: "App\\Events\\BoletoGenerated" },
  { id: "order_completed", label: "Venda aprovada", eventClass: "App\\Events\\OrderCompleted" },
  { id: "access_delivery", label: "Envio de acesso", eventClass: "App\\Events\\AccessDeliveryReady" },
  { id: "order_rejected", label: "Pagamento recusado", eventClass: "App\\Events\\OrderRejected" },
  { id: "order_cancelled", label: "Pedido cancelado", eventClass: "App\\Events\\OrderCancelled" },
  { id: "order_refunded", label: "Pedido reembolsado", eventClass: "App\\Events\\OrderRefunded" },
  { id: "cart_abandoned", label: "Carrinho abandonado", eventClass: "App\\Events\\CartAbandoned" },
  { id: "subscription_created", label: "Assinatura criada", eventClass: "App\\Events\\SubscriptionCreated" },
  { id: "subscription_renewed", label: "Assinatura renovada", eventClass: "App\\Events\\SubscriptionRenewed" },
  { id: "subscription_cancelled", label: "Assinatura cancelada", eventClass: "App\\Events\\SubscriptionCancelled" },
  { id: "subscription_past_due", label: "Assinatura em atraso", eventClass: "App\\Events\\SubscriptionPastDue" }
];
function Vo(e) {
  return Bn.find((t) => t.eventClass === e)?.label || e || "—";
}
const yp = [
  { token: "{{customer.name}}", label: "Nome do cliente" },
  { token: "{{customer.first_name}}", label: "Primeiro nome" },
  { token: "{{customer.email}}", label: "E-mail do cliente" },
  { token: "{{customer.phone}}", label: "Telefone do cliente" },
  { token: "{{order.id}}", label: "ID do pedido" },
  { token: "{{order.status}}", label: "Status do pedido" },
  { token: "{{order.amount_formatted}}", label: "Valor da venda (igual Utmify)" },
  { token: "{{order.paid_amount_formatted}}", label: "Valor pago pelo cliente (com juros)" },
  { token: "{{order.payment_method_label}}", label: "Forma de pagamento (PIX, Cartão...)" },
  { token: "{{order.product.name}}", label: "Nome do produto" },
  { token: "{{order.bumps_section}}", label: "Bloco de Order Bumps (oculta se vazio)" },
  { token: "{{order.bumps_list}}", label: "Lista de Order Bumps (bullet points)" },
  { token: "{{order.bumps_names}}", label: "Nomes dos Order Bumps (vírgula)" },
  { token: "{{order.bumps_total_formatted}}", label: "Total dos Order Bumps" },
  { token: "{{order.items_list}}", label: "Lista de todos os itens (principal + bumps)" },
  { token: "{{checkout_link}}", label: "Link do checkout" },
  { token: "{{pix.copy_paste}}", label: "PIX copia e cola" },
  { token: "{{pix.qrcode}}", label: "QR Code do PIX" },
  { token: "{{boleto.barcode}}", label: "Linha digitável do boleto" },
  { token: "{{boleto.pdf_url}}", label: "Link do PDF do boleto" },
  { token: "{{access.link}}", label: "Link de acesso" },
  { token: "{{access.email}}", label: "Login de acesso" },
  { token: "{{access.password}}", label: "Senha de acesso" },
  { token: "{{last_reply}}", label: "Última resposta do cliente" }
], nw = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], rw = [
  { value: "text", label: "Texto" },
  { value: "image", label: "Imagem" },
  { value: "video", label: "Vídeo" },
  { value: "audio", label: "Áudio" },
  { value: "document", label: "Documento" },
  { value: "sticker", label: "Figurinha" },
  { value: "buttons", label: "Botões" },
  { value: "list", label: "Lista" },
  { value: "location", label: "Localização" },
  { value: "contact", label: "Contato" },
  { value: "poll", label: "Enquete" },
  { value: "link", label: "Link com prévia" }
], ow = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], aw = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], bp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "has_order_bumps", label: "➕ Comprou Order Bump? (Sim/Não)" },
  { value: "reply_matches", label: "💬 Resposta do cliente (contém / exato / maiúsculas e minúsculas)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], xp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], wp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], sw = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Cn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function _p(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Cn[t] || 1)));
}
function iw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Cn.days === 0 ? { value: t / Cn.days, unit: "days" } : t > 0 && t % Cn.hours === 0 ? { value: t / Cn.hours, unit: "hours" } : t > 0 && t % Cn.minutes === 0 ? { value: t / Cn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const lw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function da(e) {
  return lw[e] || "minutos";
}
function xn(e) {
  return nw.find((t) => t.type === e)?.label || e;
}
function kp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "", match_mode: "contains", case_sensitive: !1, ignore_accents: !0 } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400, filter_reply: !1, match_mode: "contains", match_text: "", case_sensitive: !1, ignore_accents: !0 } : {};
}
function Sp(e) {
  return {
    text: { text: "Olá {{customer.first_name}}!" },
    image: { text: "", caption: "", media_url: "", mime_type: "" },
    video: { text: "", caption: "", media_url: "", mime_type: "" },
    audio: { media_url: "", mime_type: "" },
    document: { text: "", caption: "", media_url: "", mime_type: "" },
    sticker: { media_url: "" },
    buttons: { title: "", footer: "", text: "Olá {{customer.first_name}}!", buttons: [{ type: "reply", displayText: "Sim" }] },
    list: { title: "", footer: "", text: "Olá {{customer.first_name}}!", button_text: "Ver opções", sections: [{ title: "Opções", rows: [{ title: "Opção 1", description: "" }] }] },
    location: { latitude: "", longitude: "", location_name: "", address: "" },
    contact: { contact_name: "", contact_phone: "", organization: "" },
    poll: { question: "Qual a sua preferência?", options: ["Opção 1", "Opção 2"], max_answers: 1 },
    link: { url: "", title: "", description: "", text: "", image_url: "" }
  }[e] || { text: "Olá {{customer.first_name}}!" };
}
function Ep(e) {
  return {
    nodes: [
      { id: "trigger", type: "trigger", x: 80, y: 200, data: { event_class: e } },
      { id: "message_1", type: "send_message", x: 400, y: 200, data: { mode: "text", recipient_type: "customer", text: e === "App\\Events\\AccessDeliveryReady" ? `Olá {{customer.first_name}}! Seu pagamento foi aprovado.

Acesso ao produto *{{order.product.name}}*:

🔗 {{access.link}}
👤 {{access.email}}
🔑 {{access.password}}` : `Olá {{customer.first_name}}!

Produto: {{order.product.name}}
Valor: {{order.amount_formatted}}
Link: {{checkout_link}}` } },
      { id: "end_1", type: "end", x: 720, y: 200, data: {} }
    ],
    edges: [
      { from: "trigger", to: "message_1" },
      { from: "message_1", to: "end_1" }
    ]
  };
}
const zp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, uw = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, dw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, cw = { class: "space-y-4" }, fw = ["value"], pw = ["value"], hw = { key: 0 }, mw = { key: 1 }, vw = ["value"], gw = { class: "mt-2 flex flex-wrap gap-1.5" }, yw = ["title", "onClick"], bw = { key: 0 }, xw = ["accept", "disabled"], ww = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, _w = { key: 2 }, kw = ["disabled"], Sw = { class: "space-y-2" }, Ew = ["onUpdate:modelValue"], zw = ["value"], $w = ["onUpdate:modelValue"], Pw = ["onUpdate:modelValue"], Cw = ["value"], Aw = ["onUpdate:modelValue"], Tw = ["onUpdate:modelValue"], Ow = ["onUpdate:modelValue"], Nw = ["onUpdate:modelValue"], Rw = ["onUpdate:modelValue"], Mw = ["onClick"], Iw = { class: "grid grid-cols-2 gap-2" }, Dw = { class: "space-y-3" }, Fw = ["onUpdate:modelValue"], Bw = ["onUpdate:modelValue"], Lw = ["onUpdate:modelValue"], Uw = ["onClick"], Vw = ["onClick"], qw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, jw = ["onClick"], Hw = { class: "grid grid-cols-2 gap-2" }, Gw = { class: "space-y-2" }, Ww = ["onUpdate:modelValue", "placeholder"], Xw = ["onClick"], Yw = ["max"], Kw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Oe = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", $p = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => yp }
  },
  setup(e) {
    const t = e, n = G(!1), r = G(""), o = G([]), a = G("list"), s = (_) => ["image", "video", "audio", "document"].includes(_), l = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function c(_, g) {
      t.data[_] = `${t.data[_] || ""}${g}`;
    }
    async function u(_, g = "media_url", S = "mime_type") {
      const U = _.target.files?.[0];
      if (U) {
        n.value = !0, r.value = "";
        try {
          const I = await ze.uploadMedia(U);
          t.data[g] = I.url, S && (t.data[S] = I.mime_type);
        } catch (I) {
          r.value = I.message;
        } finally {
          n.value = !1, _.target.value = "";
        }
      }
    }
    const d = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...d.value, { type: "reply", displayText: "" }];
    }, v = (_) => {
      t.data.buttons = d.value.filter((g, S) => S !== _);
    }, y = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), m = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = (_) => {
      t.data.sections = y.value.filter((g, S) => S !== _);
    }, h = (_) => {
      _.rows = [..._.rows || [], { title: "", description: "" }];
    }, b = (_, g) => {
      _.rows = (_.rows || []).filter((S, U) => U !== g);
    }, $ = J(() => Array.isArray(t.data.options) ? t.data.options : []), k = () => {
      t.data.options = [...$.value, ""];
    }, P = (_) => {
      t.data.options = $.value.filter((g, S) => S !== _);
    };
    async function C() {
      try {
        o.value = (await ze.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && C();
    }), (_, g) => (E(), A("div", cw, [
      i("div", null, [
        i("label", {
          class: W(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ee(i("select", {
          id: "zr-mode",
          "onUpdate:modelValue": g[0] || (g[0] = (S) => e.data.mode = S),
          class: W(Oe)
        }, [
          (E(!0), A(ue, null, Ne(N(rw), (S) => (E(), A("option", {
            key: S.value,
            value: S.value
          }, L(S.label), 9, fw))), 128))
        ], 512), [
          [tt, e.data.mode]
        ])
      ]),
      e.showRecipient ? (E(), A(ue, { key: 0 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          ee(i("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": g[1] || (g[1] = (S) => e.data.recipient_type = S),
            class: W(Oe)
          }, [
            (E(!0), A(ue, null, Ne(N(sw), (S) => (E(), A("option", {
              key: S.value,
              value: S.value
            }, L(S.label), 9, pw))), 128))
          ], 512), [
            [tt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (E(), A("div", hw, [
          i("label", {
            class: W(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          ee(i("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": g[2] || (g[2] = (S) => e.data.custom_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: W(Oe)
          }, null, 512), [
            [
              be,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (E(), A("div", mw, [
          i("label", {
            class: W(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? ee((E(), A("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": g[3] || (g[3] = (S) => e.data.group_id = S),
            class: W(Oe)
          }, [
            g[30] || (g[30] = i("option", { value: "" }, "Selecione o grupo…", -1)),
            (E(!0), A(ue, null, Ne(o.value, (S) => (E(), A("option", {
              key: S.id,
              value: S.id
            }, L(S.name), 9, vw))), 128))
          ], 512)), [
            [tt, e.data.group_id]
          ]) : ee((E(), A("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": g[4] || (g[4] = (S) => e.data.group_id = S),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: W(Oe)
          }, null, 512)), [
            [
              be,
              e.data.group_id,
              void 0,
              { trim: !0 }
            ]
          ]),
          i("button", {
            type: "button",
            class: "mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: g[5] || (g[5] = (S) => a.value = a.value === "list" ? "manual" : "list")
          }, L(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : te("", !0)
      ], 64)) : te("", !0),
      e.data.mode === "text" || s(e.data.mode) ? (E(), A(ue, { key: 1 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-text"
          }, L(s(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ee(i("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": g[6] || (g[6] = (S) => e.data.text = S),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: W([Oe, "font-mono leading-relaxed"])
          }, null, 2), [
            [be, e.data.text]
          ]),
          i("div", gw, [
            (E(!0), A(ue, null, Ne(e.variables, (S) => (E(), A("button", {
              key: S.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: S.label,
              onClick: (U) => c("text", S.token)
            }, L(S.token), 9, yw))), 128))
          ])
        ]),
        s(e.data.mode) ? (E(), A("div", bw, [
          i("label", {
            class: W(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          ee(i("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": g[7] || (g[7] = (S) => e.data.media_url = S),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: W(Oe)
          }, null, 512), [
            [
              be,
              e.data.media_url,
              void 0,
              { trim: !0 }
            ]
          ]),
          i("input", {
            type: "file",
            class: "mt-2 w-full text-xs",
            accept: l.value,
            disabled: n.value,
            onChange: u
          }, null, 40, xw),
          n.value ? (E(), A("p", ww, "Enviando arquivo…")) : te("", !0)
        ])) : te("", !0)
      ], 64)) : e.data.mode === "sticker" ? (E(), A("div", _w, [
        i("label", {
          class: W(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ee(i("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": g[8] || (g[8] = (S) => e.data.media_url = S),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: W(Oe)
        }, null, 512), [
          [
            be,
            e.data.media_url,
            void 0,
            { trim: !0 }
          ]
        ]),
        i("input", {
          type: "file",
          class: "mt-2 w-full text-xs",
          accept: "image/*",
          disabled: n.value,
          onChange: u
        }, null, 40, kw)
      ])) : e.data.mode === "buttons" ? (E(), A(ue, { key: 3 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-title"
          }, "Título"),
          ee(i("input", {
            id: "zr-title",
            "onUpdate:modelValue": g[9] || (g[9] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          ee(i("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": g[10] || (g[10] = (S) => e.data.text = S),
            rows: "3",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          ee(i("input", {
            id: "zr-footer",
            "onUpdate:modelValue": g[11] || (g[11] = (S) => e.data.footer = S),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.footer]
          ])
        ]),
        i("div", Sw, [
          i("label", {
            class: W(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (E(!0), A(ue, null, Ne(d.value, (S, U) => (E(), A("div", {
            key: U,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ee(i("select", {
              "onUpdate:modelValue": (I) => S.type = I,
              class: W(Oe)
            }, [
              (E(!0), A(ue, null, Ne(N(ow), (I) => (E(), A("option", {
                key: I.value,
                value: I.value
              }, L(I.label), 9, zw))), 128))
            ], 8, Ew), [
              [tt, S.type]
            ]),
            S.type === "pix" ? (E(), A(ue, { key: 0 }, [
              ee(i("input", {
                "onUpdate:modelValue": (I) => S.name = I,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: W(Oe)
              }, null, 8, $w), [
                [be, S.name]
              ]),
              ee(i("select", {
                "onUpdate:modelValue": (I) => S.keyType = I,
                class: W(Oe)
              }, [
                g[31] || (g[31] = i("option", { value: "" }, "Tipo de chave PIX", -1)),
                (E(!0), A(ue, null, Ne(N(aw), (I) => (E(), A("option", {
                  key: I.value,
                  value: I.value
                }, L(I.label), 9, Cw))), 128))
              ], 8, Pw), [
                [tt, S.keyType]
              ]),
              ee(i("input", {
                "onUpdate:modelValue": (I) => S.key = I,
                type: "text",
                placeholder: "Chave PIX",
                class: W(Oe)
              }, null, 8, Aw), [
                [
                  be,
                  S.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              g[32] || (g[32] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (E(), A(ue, { key: 1 }, [
              ee(i("input", {
                "onUpdate:modelValue": (I) => S.displayText = I,
                type: "text",
                placeholder: "Texto do botão",
                class: W(Oe)
              }, null, 8, Tw), [
                [be, S.displayText]
              ]),
              S.type === "url" ? ee((E(), A("input", {
                key: 0,
                "onUpdate:modelValue": (I) => S.url = I,
                type: "url",
                placeholder: "https://…",
                class: W(Oe)
              }, null, 8, Ow)), [
                [
                  be,
                  S.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              S.type === "call" ? ee((E(), A("input", {
                key: 1,
                "onUpdate:modelValue": (I) => S.phoneNumber = I,
                type: "text",
                placeholder: "+5511999998888",
                class: W(Oe)
              }, null, 8, Nw)), [
                [
                  be,
                  S.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              S.type === "copy" ? ee((E(), A("input", {
                key: 2,
                "onUpdate:modelValue": (I) => S.copyCode = I,
                type: "text",
                placeholder: "Código a copiar",
                class: W(Oe)
              }, null, 8, Rw)), [
                [
                  be,
                  S.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0)
            ], 64)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (I) => v(U)
            }, "Remover botão", 8, Mw)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (E(), A(ue, { key: 4 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-list-title"
          }, "Título"),
          ee(i("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": g[12] || (g[12] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Nossos planos",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          ee(i("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": g[13] || (g[13] = (S) => e.data.text = S),
            rows: "3",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ]),
        i("div", Iw, [
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            ee(i("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": g[14] || (g[14] = (S) => e.data.footer = S),
              type: "text",
              class: W(Oe)
            }, null, 512), [
              [be, e.data.footer]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            ee(i("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": g[15] || (g[15] = (S) => e.data.button_text = S),
              type: "text",
              placeholder: "Ver Menu",
              class: W(Oe)
            }, null, 512), [
              [be, e.data.button_text]
            ])
          ])
        ]),
        i("div", Dw, [
          i("label", {
            class: W(Ue)
          }, "Seções"),
          (E(!0), A(ue, null, Ne(y.value, (S, U) => (E(), A("div", {
            key: U,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ee(i("input", {
              "onUpdate:modelValue": (I) => S.title = I,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: W(Oe)
            }, null, 8, Fw), [
              [be, S.title]
            ]),
            (E(!0), A(ue, null, Ne(S.rows, (I, D) => (E(), A("div", {
              key: D,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ee(i("input", {
                "onUpdate:modelValue": (T) => I.title = T,
                type: "text",
                placeholder: "Título da opção",
                class: W(Oe)
              }, null, 8, Bw), [
                [be, I.title]
              ]),
              ee(i("input", {
                "onUpdate:modelValue": (T) => I.description = T,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: W(Oe)
              }, null, 8, Lw), [
                [be, I.description]
              ]),
              i("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (T) => b(S, D)
              }, "Remover opção", 8, Uw)
            ]))), 128)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (I) => h(S)
            }, "+ Adicionar opção", 8, Vw),
            i("div", qw, [
              i("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (I) => p(U)
              }, "Remover seção", 8, jw)
            ])
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: m
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (E(), A(ue, { key: 5 }, [
        i("div", Hw, [
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-lat"
            }, "Latitude"),
            ee(i("input", {
              id: "zr-lat",
              "onUpdate:modelValue": g[16] || (g[16] = (S) => e.data.latitude = S),
              type: "text",
              placeholder: "-23.5505",
              class: W(Oe)
            }, null, 512), [
              [be, e.data.latitude]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-lng"
            }, "Longitude"),
            ee(i("input", {
              id: "zr-lng",
              "onUpdate:modelValue": g[17] || (g[17] = (S) => e.data.longitude = S),
              type: "text",
              placeholder: "-46.6333",
              class: W(Oe)
            }, null, 512), [
              [be, e.data.longitude]
            ])
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          ee(i("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": g[18] || (g[18] = (S) => e.data.location_name = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.location_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          ee(i("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": g[19] || (g[19] = (S) => e.data.address = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (E(), A(ue, { key: 6 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          ee(i("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": g[20] || (g[20] = (S) => e.data.contact_name = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.contact_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          ee(i("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": g[21] || (g[21] = (S) => e.data.contact_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.contact_phone]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ee(i("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": g[22] || (g[22] = (S) => e.data.organization = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (E(), A(ue, { key: 7 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          ee(i("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": g[23] || (g[23] = (S) => e.data.question = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.question]
          ])
        ]),
        i("div", Gw, [
          i("label", {
            class: W(Ue)
          }, "Opções (mínimo 2)"),
          (E(!0), A(ue, null, Ne($.value, (S, U) => (E(), A("div", {
            key: U,
            class: "flex gap-2"
          }, [
            ee(i("input", {
              "onUpdate:modelValue": (I) => $.value[U] = I,
              type: "text",
              class: W(Oe),
              placeholder: `Opção ${U + 1}`
            }, null, 8, Ww), [
              [be, $.value[U]]
            ]),
            $.value.length > 2 ? (E(), A("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (I) => P(U)
            }, "✕", 8, Xw)) : te("", !0)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: k
          }, "+ Adicionar opção")
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ee(i("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": g[24] || (g[24] = (S) => e.data.max_answers = S),
            type: "number",
            min: "1",
            max: $.value.length,
            class: W(Oe)
          }, null, 8, Yw), [
            [
              be,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (E(), A(ue, { key: 8 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-url"
          }, "URL"),
          ee(i("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": g[25] || (g[25] = (S) => e.data.url = S),
            type: "url",
            placeholder: "https://…",
            class: W(Oe)
          }, null, 512), [
            [
              be,
              e.data.url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          ee(i("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": g[26] || (g[26] = (S) => e.data.title = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ee(i("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": g[27] || (g[27] = (S) => e.data.description = S),
            type: "text",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.description]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ee(i("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": g[28] || (g[28] = (S) => e.data.image_url = S),
            type: "url",
            class: W(Oe)
          }, null, 512), [
            [
              be,
              e.data.image_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ee(i("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": g[29] || (g[29] = (S) => e.data.text = S),
            rows: "3",
            class: W(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ])
      ], 64)) : te("", !0),
      r.value ? (E(), A("p", Kw, L(r.value), 1)) : te("", !0)
    ]));
  }
}, Pp = {
  customer: { name: "João Silva", first_name: "João", email: "joao@exemplo.com", phone: "5511999998888" },
  order: {
    id: 1042,
    status: "completed",
    amount_formatted: "R$ 197,00",
    paid_amount_formatted: "R$ 197,00",
    payment_method_label: "PIX",
    product: { name: "Curso VIP" },
    has_bumps: "Sim",
    has_bumps_bool: !0,
    bumps_count: 1,
    bumps: "• E-book Bônus (R$ 47,00)",
    bumps_list: "• E-book Bônus (R$ 47,00)",
    bumps_section: `➕ *Order Bump(s):*
• E-book Bônus (R$ 47,00)`,
    bumps_names: "E-book Bônus",
    bumps_total_formatted: "R$ 47,00",
    items_list: `• Curso VIP (R$ 150,00)
• E-book Bônus (R$ 47,00)`
  },
  bumps: "• E-book Bônus (R$ 47,00)",
  bumps_list: "• E-book Bônus (R$ 47,00)",
  bumps_section: `➕ *Order Bump(s):*
• E-book Bônus (R$ 47,00)`,
  bumps_names: "E-book Bônus",
  order_bumps: "• E-book Bônus (R$ 47,00)",
  checkout_link: "https://seu-checkout.com/c/curso-vip",
  pix: { copy_paste: "00020126580014BR.GOV.BCB.PIX...", qrcode: "data:image/png;base64,…" },
  boleto: { barcode: "34191.79001 01043.510047 91020.150008 1 96610000019700", pdf_url: "https://…/boleto.pdf" },
  access: { link: "https://area-de-membros.com/acesso", email: "joao@exemplo.com", password: "••••••" }
}, Zw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Jw(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Di(e, t = Pp) {
  return e ? e.replace(Zw, (n, r) => {
    const o = Jw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const Qw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, e_ = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, t_ = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, n_ = { class: "text-xs" }, r_ = { class: "font-bold text-white" }, o_ = { class: "my-4 flex justify-end" }, a_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, s_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, i_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, gl = {
  __name: "MessagePreview",
  props: {
    text: { type: String, default: "" },
    recipientName: { type: String, default: "Cliente" },
    caption: { type: String, default: "" },
    /** '' | image | video | audio | document | buttons */
    mode: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = J(() => (t.recipientName || "C").trim().charAt(0).toUpperCase()), r = J(() => {
      const a = t.mode && t.mode !== "text" && t.caption || t.text;
      return a?.trim() ? Di(a) : "Sua mensagem aparece aqui…";
    }), o = J(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (a, s) => (E(), A("div", Qw, [
      i("div", e_, [
        i("div", t_, L(n.value), 1),
        i("div", n_, [
          i("div", r_, L(e.recipientName || "Cliente"), 1),
          s[0] || (s[0] = i("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      i("div", o_, [
        i("div", a_, [
          o.value ? (E(), A("span", s_, L(o.value), 1)) : te("", !0),
          ye(" " + L(r.value) + " ", 1),
          i("div", i_, [
            s[1] || (s[1] = i("span", null, "12:00", -1)),
            X(N(_i), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      s[2] || (s[2] = i("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, l_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, u_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, d_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, c_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, f_ = {
  key: 0,
  class: "space-y-4 p-4"
}, p_ = ["value"], h_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, m_ = {
  key: 0,
  class: "p-4"
}, v_ = {
  key: 1,
  class: "p-4"
}, g_ = {
  key: 2,
  class: "space-y-1 p-4"
}, y_ = { class: "flex gap-2" }, b_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, x_ = {
  key: 3,
  class: "space-y-4 p-4"
}, w_ = ["value"], __ = { key: 0 }, k_ = ["value"], S_ = { key: 1 }, E_ = ["value"], z_ = { key: 2 }, $_ = {
  key: 3,
  class: "space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3.5"
}, P_ = { class: "space-y-2 pt-1" }, C_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, A_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, T_ = {
  key: 4,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, O_ = {
  key: 5,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, N_ = {
  key: 4,
  class: "space-y-3 p-4"
}, R_ = { class: "flex gap-2" }, M_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, I_ = { class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-2.5" }, D_ = { class: "flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer" }, F_ = {
  key: 0,
  class: "space-y-2.5 pt-1 border-t border-teal-500/10"
}, B_ = { class: "space-y-1.5 pt-0.5" }, L_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, U_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, V_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, q_ = {
  key: 1,
  class: "space-y-4 p-4"
}, j_ = { class: "flex items-start justify-between gap-2" }, H_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, G_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, bt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Tt = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", W_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G("config");
    let a = null, s = null;
    Me(
      () => [n.node?.id, n.node?.data?.mode],
      ([c, u]) => {
        c === void 0 || u === void 0 || (c === a && u !== s && Object.assign(n.node.data, Sp(u)), a = c, s = u);
      },
      { immediate: !0 }
    ), Me(
      () => n.node,
      (c) => {
        if (!["delay", "wait_reply"].includes(c?.type) || c.data.delay_value) return;
        const { value: u, unit: d } = iw(c.data.seconds || 0);
        c.data.delay_value = u, c.data.delay_unit = d;
      },
      { immediate: !0 }
    ), Me(() => n.node?.id, () => {
      o.value = "config";
    });
    function l() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = _p(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (c, u) => (E(), A("aside", l_, [
      e.node ? (E(), A(ue, { key: 0 }, [
        i("div", u_, [
          i("div", null, [
            i("h3", d_, L(N(xn)(e.node.type)), 1),
            i("p", c_, L(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (E(), A("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (d) => r("remove-node", e.node.id))
          }, [
            X(N(Jo), { class: "h-3 w-3" }),
            u[21] || (u[21] = ye(" Excluir ", -1))
          ])) : te("", !0)
        ]),
        e.node.type === "trigger" ? (E(), A("div", f_, [
          i("div", null, [
            i("label", {
              class: W(Tt)
            }, "Evento"),
            i("input", {
              class: W([bt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, p_),
            u[22] || (u[22] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (E(), A(ue, { key: 1 }, [
          i("div", h_, [
            i("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (d) => o.value = "config")
            }, " Configurar ", 2),
            i("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (d) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (E(), A("div", m_, [
            X(gl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": N(Pp).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (E(), A("div", v_, [
            X($p, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (E(), A("div", g_, [
          i("label", {
            class: W(Tt),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          i("div", y_, [
            ee(i("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (d) => e.node.data.delay_value = d),
              type: "number",
              min: "1",
              class: W(bt),
              onChange: l
            }, null, 544), [
              [
                be,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ee(i("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (d) => e.node.data.delay_unit = d),
              class: W(bt),
              onChange: l
            }, [...u[23] || (u[23] = [
              i("option", { value: "seconds" }, "Segundos", -1),
              i("option", { value: "minutes" }, "Minutos", -1),
              i("option", { value: "hours" }, "Horas", -1),
              i("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [tt, e.node.data.delay_unit]
            ])
          ]),
          i("p", b_, " Aguarda " + L(e.node.data.delay_value || 0) + " " + L(N(da)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (E(), A("div", x_, [
          i("div", null, [
            i("label", {
              class: W(Tt),
              for: "zr-kind"
            }, "Regra de validação"),
            ee(i("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (d) => e.node.data.kind = d),
              class: W(bt)
            }, [
              (E(!0), A(ue, null, Ne(N(bp), (d) => (E(), A("option", {
                key: d.value,
                value: d.value
              }, L(d.label), 9, w_))), 128))
            ], 512), [
              [tt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (E(), A("div", __, [
            i("label", {
              class: W(Tt),
              for: "zr-order-status"
            }, "Status esperado"),
            ee(i("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (d) => e.node.data.value = d),
              class: W(bt)
            }, [
              (E(!0), A(ue, null, Ne(N(xp), (d) => (E(), A("option", {
                key: d.value,
                value: d.value
              }, L(d.label), 9, k_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (E(), A("div", S_, [
            i("label", {
              class: W(Tt),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ee(i("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (d) => e.node.data.value = d),
              class: W(bt)
            }, [
              (E(!0), A(ue, null, Ne(N(wp), (d) => (E(), A("option", {
                key: d.value,
                value: d.value
              }, L(d.label), 9, E_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (E(), A("div", z_, [
            i("label", {
              class: W(Tt),
              for: "zr-value"
            }, "Classe do evento"),
            ee(i("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (d) => e.node.data.value = d),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: W(bt)
            }, null, 512), [
              [
                be,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : e.node.data.kind === "reply_matches" ? (E(), A("div", $_, [
            u[27] || (u[27] = i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Identificar resposta do cliente", -1)),
            i("div", null, [
              i("label", {
                class: W(Tt),
                for: "zr-reply-mode"
              }, "Modo de correspondência"),
              ee(i("select", {
                id: "zr-reply-mode",
                "onUpdate:modelValue": u[9] || (u[9] = (d) => e.node.data.match_mode = d),
                class: W(bt)
              }, [...u[24] || (u[24] = [
                i("option", { value: "contains" }, "Contém o texto", -1),
                i("option", { value: "exact" }, "Texto exato", -1)
              ])], 512), [
                [tt, e.node.data.match_mode]
              ])
            ]),
            i("div", null, [
              i("label", {
                class: W(Tt),
                for: "zr-reply-value"
              }, "Texto esperado"),
              ee(i("input", {
                id: "zr-reply-value",
                "onUpdate:modelValue": u[10] || (u[10] = (d) => e.node.data.value = d),
                type: "text",
                placeholder: "Ex: eu quero",
                class: W(bt)
              }, null, 512), [
                [be, e.node.data.value]
              ])
            ]),
            i("div", P_, [
              i("label", C_, [
                ee(i("input", {
                  "onUpdate:modelValue": u[11] || (u[11] = (d) => e.node.data.case_sensitive = d),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [An, e.node.data.case_sensitive]
                ]),
                u[25] || (u[25] = i("span", null, "Diferenciar maiúsculas e minúsculas", -1))
              ]),
              i("label", A_, [
                ee(i("input", {
                  "onUpdate:modelValue": u[12] || (u[12] = (d) => e.node.data.ignore_accents = d),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [An, e.node.data.ignore_accents]
                ]),
                u[26] || (u[26] = i("span", null, 'Ignorar acentos (ex: "não" = "nao", "é" = "e")', -1))
              ])
            ]),
            u[28] || (u[28] = i("p", { class: "text-[11px] text-teal-700 dark:text-teal-300" }, [
              ye(" Avalia a última mensagem enviada pelo cliente. Segue por "),
              i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
              ye(" se corresponder, ou "),
              i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
              ye(' caso responda outra coisa (ex: "não"). ')
            ], -1))
          ])) : te("", !0),
          e.node.data.kind === "order_is_paid" ? (E(), A("p", T_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (E(), A("p", O_, [...u[29] || (u[29] = [
            ye(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            ye(" se houver bumps, ou ", -1),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            ye(" se comprou apenas o produto principal. ", -1)
          ])])) : te("", !0),
          u[30] || (u[30] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ye(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            ye(" e outra do ponto "),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            ye(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (E(), A("div", N_, [
          i("div", null, [
            i("label", {
              class: W(Tt),
              for: "zr-wait-value"
            }, "Tempo máximo de espera"),
            i("div", R_, [
              ee(i("input", {
                id: "zr-wait-value",
                "onUpdate:modelValue": u[13] || (u[13] = (d) => e.node.data.delay_value = d),
                type: "number",
                min: "1",
                class: W(bt),
                onChange: l
              }, null, 544), [
                [
                  be,
                  e.node.data.delay_value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ee(i("select", {
                "onUpdate:modelValue": u[14] || (u[14] = (d) => e.node.data.delay_unit = d),
                class: W(bt),
                onChange: l
              }, [...u[31] || (u[31] = [
                i("option", { value: "seconds" }, "Segundos", -1),
                i("option", { value: "minutes" }, "Minutos", -1),
                i("option", { value: "hours" }, "Horas", -1),
                i("option", { value: "days" }, "Dias", -1)
              ])], 544), [
                [tt, e.node.data.delay_unit]
              ])
            ]),
            i("p", M_, " Espera até " + L(e.node.data.delay_value || 0) + " " + L(N(da)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente na Evolution GO. ", 1)
          ]),
          i("div", I_, [
            i("label", D_, [
              ee(i("input", {
                "onUpdate:modelValue": u[15] || (u[15] = (d) => e.node.data.filter_reply = d),
                type: "checkbox",
                class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
              }, null, 512), [
                [An, e.node.data.filter_reply]
              ]),
              u[32] || (u[32] = i("span", null, "Filtrar resposta esperada (opcional)", -1))
            ]),
            e.node.data.filter_reply ? (E(), A("div", F_, [
              i("div", null, [
                i("label", {
                  class: W(Tt),
                  for: "zr-wait-filter-mode"
                }, "Tipo de correspondência"),
                ee(i("select", {
                  id: "zr-wait-filter-mode",
                  "onUpdate:modelValue": u[16] || (u[16] = (d) => e.node.data.match_mode = d),
                  class: W(bt)
                }, [...u[33] || (u[33] = [
                  i("option", { value: "contains" }, "Contém o texto", -1),
                  i("option", { value: "exact" }, "Texto exato", -1)
                ])], 512), [
                  [tt, e.node.data.match_mode]
                ])
              ]),
              i("div", null, [
                i("label", {
                  class: W(Tt),
                  for: "zr-wait-filter-text"
                }, "Texto esperado"),
                ee(i("input", {
                  id: "zr-wait-filter-text",
                  "onUpdate:modelValue": u[17] || (u[17] = (d) => e.node.data.match_text = d),
                  type: "text",
                  placeholder: "Ex: eu quero",
                  class: W(bt)
                }, null, 512), [
                  [be, e.node.data.match_text]
                ])
              ]),
              i("div", B_, [
                i("label", L_, [
                  ee(i("input", {
                    "onUpdate:modelValue": u[18] || (u[18] = (d) => e.node.data.case_sensitive = d),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [An, e.node.data.case_sensitive]
                  ]),
                  u[34] || (u[34] = i("span", null, "Diferenciar maiúsculas/minúsculas", -1))
                ]),
                i("label", U_, [
                  ee(i("input", {
                    "onUpdate:modelValue": u[19] || (u[19] = (d) => e.node.data.ignore_accents = d),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [An, e.node.data.ignore_accents]
                  ]),
                  u[35] || (u[35] = i("span", null, 'Ignorar acentos (ex: "não" = "nao")', -1))
                ])
              ]),
              u[36] || (u[36] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, [
                ye(" Apenas respostas que atenderem a este critério ativarão a saída "),
                i("strong", { class: "text-teal-600 dark:text-teal-400" }, "RESPONDEU"),
                ye(". Respostas divergentes continuarão aguardando até o tempo esgotar. ")
              ], -1))
            ])) : te("", !0)
          ]),
          u[37] || (u[37] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ye(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            ye(" (o cliente mandou uma mensagem) e outra do ponto "),
            i("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            ye(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (E(), A("p", V_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (E(), A("div", q_, [
        i("div", j_, [
          i("div", null, [
            u[38] || (u[38] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            i("p", H_, L(e.edge.source) + " → " + L(e.edge.target), 1)
          ]),
          i("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[20] || (u[20] = (d) => r("remove-edge", e.edge.id))
          }, [
            X(N(Jo), { class: "h-3 w-3" }),
            u[39] || (u[39] = ye(" Excluir ", -1))
          ])
        ]),
        u[40] || (u[40] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (E(), A("p", G_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, X_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, Y_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, K_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, Z_ = { class: "flex items-center gap-2" }, J_ = { class: "mt-6 space-y-4" }, Q_ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, e2 = { class: "mt-2.5 flex items-center gap-2" }, t2 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, n2 = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, r2 = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, o2 = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, a2 = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, s2 = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, i2 = { class: "flex items-center gap-3" }, l2 = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, u2 = { class: "flex items-center gap-2" }, d2 = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, c2 = {
  key: 0,
  class: "flex justify-center my-1"
}, f2 = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, p2 = {
  key: 1,
  class: "flex justify-start"
}, h2 = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, m2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, v2 = {
  key: 2,
  class: "flex justify-end"
}, g2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, y2 = { class: "leading-relaxed" }, b2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, x2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, w2 = ["disabled", "placeholder"], _2 = ["disabled"], k2 = {
  __name: "FlowSimulatorModal",
  props: {
    flow: { type: Object, required: !0 },
    nodes: { type: Array, required: !0 },
    edges: { type: Array, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(null), a = G([]);
    G(!1);
    const s = G(!1), l = G(""), c = G(!1), u = G(null), d = G("");
    function f(C, _, g = "contains", S = !1, U = !0) {
      let I = (C || "").trim(), D = (_ || "").trim();
      return D ? (U && (I = I.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), D = D.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), S || (I = I.toLowerCase(), D = D.toLowerCase()), g === "exact" ? I === D : I.includes(D)) : !0;
    }
    J(() => n.nodes.find((C) => C.id === o.value));
    function v() {
      const C = /* @__PURE__ */ new Date();
      return `${String(C.getHours()).padStart(2, "0")}:${String(C.getMinutes()).padStart(2, "0")}`;
    }
    function y() {
      a.value = [], s.value = !1, u.value = null, l.value = "";
      const C = n.nodes.find((_) => _.type === "trigger");
      if (!C) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: v()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${C.data?.event_class || "Evento do Fluxo"}`,
        time: v()
      }), o.value = C.id, p();
    }
    function m(C, _ = null) {
      return n.edges.find((g) => g.source !== C ? !1 : _ === null ? !0 : (g.sourceHandle === "yes" || g.sourceHandle === "replied" || g.data?.condition === "true" ? "true" : g.sourceHandle === "no" || g.sourceHandle === "timeout" || g.data?.condition === "false" ? "false" : null) === _);
    }
    function p() {
      if (!o.value) return;
      const C = n.nodes.find((_) => _.id === o.value);
      if (C) {
        if (C.type === "trigger") {
          const _ = m(C.id);
          if (!_) return P("Fluxo finalizado após o gatilho.");
          o.value = _.target, h();
          return;
        }
        if (C.type === "send_message") {
          const _ = m(C.id);
          if (!_) return P("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (C.type === "delay") {
          const _ = m(C.id);
          if (!_) return P("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (C.type === "condition") {
          let _ = "false";
          if (C.data?.kind === "reply_matches") {
            const S = C.data?.value || "", U = C.data?.match_mode || "contains", I = !!C.data?.case_sensitive, D = C.data?.ignore_accents !== !1;
            _ = f(d.value, S, U, I, D) ? "true" : "false";
          } else
            _ = c.value ? "true" : "false";
          const g = m(C.id, _);
          if (!g) return P(`Fim do fluxo (ramificação ${_ === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = g.target, h();
          return;
        }
        C.type === "end" && P("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const C = n.nodes.find((_) => _.id === o.value);
      if (C) {
        if (C.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: C.data?.mode || "text",
            text: C.data?.text || C.data?.caption || "Mensagem enviada",
            data: C.data || {},
            time: v()
          }), setTimeout(p, 800);
          return;
        }
        if (C.type === "delay") {
          const _ = C.data?.delay_value || 15, g = C.data?.delay_unit || "minutes";
          u.value = `${_} ${g}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${_} ${g}...`,
            time: v()
          });
          return;
        }
        if (C.type === "condition") {
          if (C.data?.kind === "reply_matches") {
            const _ = C.data?.value || "", g = C.data?.match_mode || "contains", S = !!C.data?.case_sensitive, U = C.data?.ignore_accents !== !1, I = f(d.value, _, g, S, U);
            a.value.push({
              type: "system",
              text: `🔀 Avaliando resposta do cliente: "${d.value || "(vazia)"}" ${g === "exact" ? "igual a" : "contém"} "${_}" -> ${I ? "SIM" : "NÃO"}`,
              time: v()
            });
          } else {
            const _ = c.value;
            a.value.push({
              type: "system",
              text: `🔀 Avaliando condição: Pedido pago? -> ${_ ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
              time: v()
            });
          }
          setTimeout(p, 600);
          return;
        }
        if (C.type === "wait_reply") {
          s.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: v()
          });
          return;
        }
        C.type === "end" && P("Fluxo concluído.");
      }
    }
    function b() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: v()
      }), p());
    }
    function $() {
      if (!l.value.trim()) return;
      const C = l.value.trim();
      l.value = "", d.value = C, a.value.push({
        type: "user",
        text: C,
        time: v()
      });
      const _ = n.nodes.find((g) => g.id === o.value);
      if (_ && _.type === "wait_reply") {
        if (_.data?.filter_reply && _.data?.match_text && !f(
          C,
          _.data.match_text,
          _.data.match_mode || "contains",
          !!_.data.case_sensitive,
          _.data.ignore_accents !== !1
        )) {
          a.value.push({
            type: "system",
            text: `⚠️ Resposta "${C}" não atende ao filtro ("${_.data.match_text}"). O fluxo continua aguardando.`,
            time: v()
          });
          return;
        }
        s.value = !1;
        const g = m(_.id, "true");
        if (!g) return P("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = g.target, setTimeout(h, 500);
      }
    }
    function k() {
      s.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: v()
      });
      const C = n.nodes.find((_) => _.id === o.value);
      if (C && C.type === "wait_reply") {
        const _ = m(C.id, "false");
        if (!_) return P("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = _.target, setTimeout(h, 500);
      }
    }
    function P(C) {
      a.value.push({
        type: "system",
        text: `🏁 ${C}`,
        time: v()
      }), o.value = null;
    }
    return Ke(y), (C, _) => (E(), A("div", X_, [
      i("div", Y_, [
        i("div", K_, [
          i("div", Z_, [
            X(N(ol), { class: "h-4 w-4 text-emerald-500" }),
            _[4] || (_[4] = i("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          _[11] || (_[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          i("div", J_, [
            i("div", Q_, [
              _[5] || (_[5] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              _[6] || (_[6] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              i("div", e2, [
                i("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: _[0] || (_[0] = (g) => c.value = !0)
                }, " SIM (Pago) ", 2),
                i("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: _[1] || (_[1] = (g) => c.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (E(), A("div", t2, [
              i("div", n2, [
                X(N(In), { class: "h-4 w-4" }),
                i("span", null, "Aguardando: " + L(u.value), 1)
              ]),
              i("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: b
              }, [
                X(N(Th), { class: "h-3.5 w-3.5" }),
                _[7] || (_[7] = i("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : te("", !0),
            s.value ? (E(), A("div", r2, [
              _[9] || (_[9] = i("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              i("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: k
              }, [..._[8] || (_[8] = [
                i("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : te("", !0)
          ]),
          i("div", o2, [
            i("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: y
            }, [
              X(N(sf), { class: "h-3.5 w-3.5" }),
              _[10] || (_[10] = i("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        i("div", a2, [
          i("div", s2, [
            i("div", i2, [
              _[13] || (_[13] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              i("div", null, [
                i("div", l2, L(e.flow.name), 1),
                _[12] || (_[12] = i("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            i("div", u2, [
              i("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: _[2] || (_[2] = (g) => r("close"))
              }, [
                X(N(Ot), { class: "h-4 w-4" })
              ])
            ])
          ]),
          i("div", d2, [
            (E(!0), A(ue, null, Ne(a.value, (g, S) => (E(), A(ue, { key: S }, [
              g.type === "system" ? (E(), A("div", c2, [
                i("span", f2, L(g.text), 1)
              ])) : g.type === "bot" ? (E(), A("div", p2, [
                i("div", h2, [
                  X(gl, {
                    text: g.text,
                    mode: g.mode,
                    caption: g.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  i("div", m2, [
                    i("span", null, L(g.time), 1),
                    X(N(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : g.type === "user" ? (E(), A("div", v2, [
                i("div", g2, [
                  i("p", y2, L(g.text), 1),
                  i("div", b2, [
                    i("span", null, L(g.time), 1),
                    X(N(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : te("", !0)
            ], 64))), 128))
          ]),
          i("div", x2, [
            i("form", {
              class: "flex items-center gap-2",
              onSubmit: rn($, ["prevent"])
            }, [
              ee(i("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (g) => l.value = g),
                type: "text",
                disabled: !s.value,
                placeholder: s.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, w2), [
                [be, l.value]
              ]),
              i("button", {
                type: "submit",
                disabled: !s.value || !l.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                X(N(Ct), { class: "h-4 w-4" })
              ], 8, _2)
            ], 32)
          ])
        ])
      ])
    ]));
  }
};
function rr(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function S2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const E2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function z2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return E2[e]?.[t];
}
function Co(e, t = {}) {
  if (e === "send_message") {
    const n = String(t.mode || "text");
    if (n === "buttons") return `Botões • ${(t.buttons || []).length} opção(ões)`;
    if (n === "list") return `Lista • ${(t.sections || []).flatMap((a) => a.rows || []).length} item(ns)`;
    if (n === "location") return `Localização${t.location_name ? ` • ${t.location_name}` : ""}`;
    if (n === "contact") return `Contato${t.contact_name ? ` • ${t.contact_name}` : ""}`;
    if (n === "poll") return `Enquete${t.question ? ` • ${t.question}` : ""}`;
    if (n === "link") return `Link${t.url ? ` • ${t.url}` : ""}`;
    const r = String(t.text || t.caption || "").replace(/\s+/g, " ").trim(), o = r.length > 46 ? `${r.slice(0, 46)}…` : r;
    return o ? `${n} • ${o}` : n;
  }
  if (e === "delay")
    return t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${da(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s`;
  if (e === "condition")
    return t.kind === "order_status_is" ? `Status do pedido é "${xp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${wp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "reply_matches" ? `Resposta ${t.match_mode === "exact" ? "igual a" : "contém"} "${t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : bp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?";
  if (e === "wait_reply") {
    const n = t.delay_value && t.delay_unit ? `${t.delay_value} ${da(t.delay_unit)}` : `${Math.max(0, Number(t.seconds) || 0)}s`;
    if (t.filter_reply && t.match_text) {
      const r = t.match_mode === "exact" ? "igual a" : "contém";
      return `Espera até ${n} • Resposta ${r} "${t.match_text}"`;
    }
    return `Espera até ${n}`;
  }
  return e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function $2(e, t = "") {
  const n = rr(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => rr(u) && u.id).map((u, d) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + d % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(d / 4) * 170
    },
    data: rr(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  a.some((u) => u.type === "trigger") || a.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: kp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const s = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), c = o.filter((u) => rr(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, d) => {
    const f = rr(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${d}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: z2(s.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: a, edges: c };
}
function P2(e, t) {
  const n = rr(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = _p(n.delay_value, n.delay_unit)), n;
}
function C2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function A2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: P2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = C2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function T2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : S2(e),
    type: e,
    position: t,
    data: kp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: xn(e)
  };
}
function st(e) {
  return String(e ?? "").trim();
}
function O2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? st(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : st(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? st(e.url) !== "" : t === "call" ? st(e.phoneNumber) !== "" : t === "copy" ? st(e.copyCode) !== "" : !0;
}
function N2(e) {
  return st(e?.title) !== "";
}
function Fi(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && st(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && st(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(O2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(N2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
      break;
    case "location":
      (st(e.latitude) === "" || st(e.longitude) === "") && n.push(`${t}: informe latitude e longitude.`);
      break;
    case "contact":
      (st(e.contact_name) === "" || st(e.contact_phone) === "") && n.push(`${t}: informe nome e telefone do contato.`);
      break;
    case "poll": {
      const r = (e.options || []).filter((o) => st(o) !== "");
      (st(e.question) === "" || r.length < 2) && n.push(`${t}: informe a pergunta e ao menos 2 opções.`);
      break;
    }
    case "link":
      st(e.url) === "" && n.push(`${t}: informe a URL do link.`);
      break;
    case "image":
    case "video":
    case "audio":
    case "document":
    case "sticker":
      st(e.media_url) === "" && n.push(`${t}: selecione um arquivo.`);
      break;
    default:
      st(e.text) === "" && n.push(`${t}: escreva o texto da mensagem.`);
  }
  return n;
}
function R2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, a = st(o.mode) || "text";
    t.push(...Fi(o, `Bloco "Enviar mensagem" (${a})`));
  }
  return t;
}
const M2 = { class: "flex h-full flex-col lg:flex-row" }, I2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, D2 = { class: "mb-4 flex items-center justify-between" }, F2 = { class: "space-y-2" }, B2 = ["onDragstart", "onClick"], L2 = { class: "text-xs font-bold" }, U2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, V2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, q2 = ["disabled"], j2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, H2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, G2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, W2 = { class: "flex-1 text-xs" }, X2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, Y2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, K2 = { class: "flex items-center gap-2" }, Z2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, J2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Q2 = { class: "p-3" }, ek = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, tk = { class: "truncate" }, nk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, rk = { class: "flex items-center gap-2" }, ok = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, ak = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, sk = { class: "flex items-center gap-1.5" }, ik = ["onClick"], lk = { class: "p-3" }, uk = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, dk = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, ck = {
  key: 1,
  class: "space-y-1"
}, fk = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, pk = { class: "text-[10px] text-zinc-500" }, hk = {
  key: 2,
  class: "space-y-1.5"
}, mk = { class: "text-[11px] leading-snug line-clamp-2" }, vk = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, gk = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, yk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, bk = { class: "flex items-center gap-2" }, xk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, wk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, _k = ["onClick"], kk = { class: "p-3" }, Sk = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, Ek = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, zk = { class: "flex items-center gap-2" }, $k = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, Pk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Ck = ["onClick"], Ak = { class: "p-3 space-y-2.5 pb-12" }, Tk = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, Ok = { class: "line-clamp-2" }, Nk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Rk = { class: "flex items-center gap-2" }, Mk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, Ik = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Dk = ["onClick"], Fk = { class: "p-3 space-y-2.5 pb-12" }, Bk = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Lk = { class: "line-clamp-2" }, Uk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Vk = { class: "flex items-center gap-2" }, qk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, jk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Hk = ["onClick"], Gk = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = G([]), s = G([]), l = G(null), c = G(null), u = G([]), d = G(!1), f = {
      text: { label: "Texto", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
      media: { label: "Mídia", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" },
      audio: { label: "Áudio", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20" },
      buttons: { label: "Botões", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20" },
      list: { label: "Lista", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
      location: { label: "Local", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
      contact: { label: "Contato", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
      poll: { label: "Enquete", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
      link: { label: "Link", color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20" }
    };
    function v(x) {
      return f[x] || { label: x || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: y, addEdges: m, project: p, fitView: h } = je(), b = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: qn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Ql, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: In, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Mr, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: tu, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Jl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], $ = J(() => r.flow?.trigger_event || ""), k = J(() => a.value.find((x) => x.id === l.value) || null), P = J(() => s.value.find((x) => x.id === c.value) || null), C = {
      type: "zaprei",
      markerEnd: sa.ArrowClosed,
      data: {}
    };
    Me(
      () => r.flow?.id,
      () => {
        const x = $2(r.flow?.graph_json, $.value);
        a.value = x.nodes, s.value = x.edges, l.value = null, c.value = null, setTimeout(() => h({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), y((x) => {
      m([{
        ...x,
        ...C,
        sourceHandle: x.sourceHandle,
        data: { sourceHandle: x.sourceHandle }
      }]);
    });
    function _(x) {
      l.value = x, c.value = null;
    }
    function g(x) {
      c.value = x, l.value = null;
    }
    function S() {
      l.value = null, c.value = null;
    }
    function U(x, O) {
      if (x === "trigger" && a.value.some((q) => q.type === "trigger"))
        return;
      const w = T2(x, O || { x: 420, y: 320 }, $.value);
      a.value = [...a.value, w], _(w.id);
    }
    function I(x) {
      !x || a.value.find((O) => O.id === x)?.type === "trigger" || (a.value = a.value.filter((O) => O.id !== x), s.value = s.value.filter((O) => O.source !== x && O.target !== x), l.value === x && (l.value = null));
    }
    function D(x) {
      s.value = s.value.filter((O) => O.id !== x), c.value === x && (c.value = null);
    }
    function T(x, O) {
      x.dataTransfer?.setData("application/zaprei-node", O), x.dataTransfer.effectAllowed = "move";
    }
    function V(x) {
      x.preventDefault(), x.dataTransfer.dropEffect = "move";
    }
    function z(x) {
      x.preventDefault();
      const O = x.dataTransfer?.getData("application/zaprei-node");
      if (!O) return;
      const w = x.currentTarget.getBoundingClientRect(), q = p({
        x: x.clientX - w.left,
        y: x.clientY - w.top
      });
      U(O, q);
    }
    function R() {
      const x = A2(a.value, s.value), O = R2(x);
      u.value = O, !O.length && o("save", x);
    }
    return t({
      requestSave: R,
      handleSave: R
    }), (x, O) => (E(), A("div", M2, [
      i("aside", I2, [
        i("div", D2, [
          O[8] || (O[8] = i("div", null, [
            i("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            i("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          i("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: O[0] || (O[0] = (w) => d.value = !0)
          }, [
            X(N(ol), { class: "h-3.5 w-3.5" }),
            O[7] || (O[7] = i("span", null, "Simulador", -1))
          ])
        ]),
        i("div", F2, [
          (E(), A(ue, null, Ne(b, (w) => i("div", {
            key: w.type,
            draggable: "true",
            class: W(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", w.color]),
            onDragstart: (q) => T(q, w.type),
            onClick: (q) => U(w.type)
          }, [
            (E(), Ce(Rt(w.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            i("div", null, [
              i("div", L2, L(w.title), 1),
              i("div", U2, L(w.desc), 1)
            ])
          ], 42, B2)), 64))
        ]),
        i("div", V2, [
          i("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: R
          }, [
            i("span", null, L(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, q2)
        ])
      ]),
      i("main", {
        class: "relative h-full flex-1",
        onDragover: V,
        onDrop: z
      }, [
        X(bh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: ot(() => [
            u.value.length ? (E(), A("div", j2, [
              i("div", H2, [
                i("div", G2, [
                  X(N(ka), { class: "h-4 w-4" })
                ]),
                i("div", W2, [
                  O[9] || (O[9] = i("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  i("ul", X2, [
                    (E(!0), A(ue, null, Ne(u.value, (w, q) => (E(), A("li", { key: q }, L(w), 1))), 128))
                  ])
                ]),
                i("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: O[1] || (O[1] = (w) => u.value = [])
                }, [
                  X(N(Ot), { class: "h-4 w-4" })
                ])
              ])
            ])) : te("", !0)
          ]),
          _: 1
        }),
        X(N(h1), {
          nodes: a.value,
          "onUpdate:nodes": O[2] || (O[2] = (w) => a.value = w),
          edges: s.value,
          "onUpdate:edges": O[3] || (O[3] = (w) => s.value = w),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": C,
          onNodeClick: O[4] || (O[4] = (w) => _(w.node?.id)),
          onEdgeClick: O[5] || (O[5] = (w) => g(w.edge?.id)),
          onPaneClick: S
        }, {
          "edge-zaprei": ot((w) => [
            X(tw, _a(w, { onRemove: D }), null, 16)
          ]),
          "node-trigger": ot((w) => [
            i("div", {
              class: W(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "source",
                position: N(de).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", Y2, [
                i("div", K2, [
                  i("div", Z2, [
                    X(N(qn), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", J2, L(N(xn)("trigger")), 1)
                ]),
                O[10] || (O[10] = i("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              i("div", Q2, [
                i("div", ek, [
                  O[11] || (O[11] = i("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  i("span", tk, L(N(Co)("trigger", w.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": ot((w) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(de).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(N(ut), {
                type: "source",
                position: N(de).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", nk, [
                i("div", rk, [
                  i("div", ok, [
                    X(N(Ql), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", ak, L(N(xn)("send_message")), 1)
                ]),
                i("div", sk, [
                  i("span", {
                    class: W(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", v(w.data?.mode).color])
                  }, L(v(w.data?.mode).label), 3),
                  i("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: rn((q) => I(w.id), ["stop"])
                  }, [
                    X(N(Ot), { class: "h-3.5 w-3.5" })
                  ], 8, ik)
                ])
              ]),
              i("div", lk, [
                i("div", uk, [
                  w.data?.mode === "audio" ? (E(), A("div", dk, [
                    X(N(Nh), { class: "h-3.5 w-3.5" }),
                    O[12] || (O[12] = i("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    O[13] || (O[13] = i("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : w.data?.mode === "poll" ? (E(), A("div", ck, [
                    i("div", fk, "📊 " + L(w.data?.question || "Pergunta da enquete..."), 1),
                    i("div", pk, L((w.data?.options || []).length) + " opções configuradas", 1)
                  ])) : w.data?.mode === "buttons" ? (E(), A("div", hk, [
                    i("p", mk, L(w.data?.text || "Texto da mensagem..."), 1),
                    (w.data?.buttons || []).length ? (E(), A("div", vk, [
                      (E(!0), A(ue, null, Ne((w.data?.buttons || []).slice(0, 3), (q, Q) => (E(), A("span", {
                        key: Q,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, L(q.label || `Botão ${Q + 1}`), 1))), 128))
                    ])) : te("", !0)
                  ])) : (E(), A("div", gk, L(w.data?.text || w.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": ot((w) => [
            i("div", {
              class: W(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(de).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(N(ut), {
                type: "source",
                position: N(de).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", yk, [
                i("div", bk, [
                  i("div", xk, [
                    X(N(In), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", wk, L(N(xn)("delay")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((q) => I(w.id), ["stop"])
                }, [
                  X(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, _k)
              ]),
              i("div", kk, [
                i("div", Sk, [
                  O[14] || (O[14] = i("span", { class: "relative flex h-2 w-2" }, [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    i("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  i("span", null, L(N(Co)("delay", w.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": ot((w) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(de).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Ek, [
                i("div", zk, [
                  i("div", $k, [
                    X(N(Mr), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Pk, L(N(xn)("condition")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((q) => I(w.id), ["stop"])
                }, [
                  X(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Ck)
              ]),
              i("div", Ak, [
                i("div", Tk, [
                  i("span", Ok, L(N(Co)("condition", w.data)), 1)
                ]),
                O[15] || (O[15] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                X(N(ut), {
                  id: "yes",
                  type: "source",
                  position: N(de).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                O[16] || (O[16] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                X(N(ut), {
                  id: "no",
                  type: "source",
                  position: N(de).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": ot((w) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(de).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Nk, [
                i("div", Rk, [
                  i("div", Mk, [
                    X(N(tu), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Ik, L(N(xn)("wait_reply")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((q) => I(w.id), ["stop"])
                }, [
                  X(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Dk)
              ]),
              i("div", Fk, [
                i("div", Bk, [
                  i("span", Lk, L(N(Co)("wait_reply", w.data)), 1)
                ]),
                O[17] || (O[17] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                X(N(ut), {
                  id: "replied",
                  type: "source",
                  position: N(de).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                O[18] || (O[18] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                X(N(ut), {
                  id: "timeout",
                  type: "source",
                  position: N(de).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": ot((w) => [
            i("div", {
              class: W(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", w.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(de).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Uk, [
                i("div", Vk, [
                  i("div", qk, [
                    X(N(Jl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", jk, L(N(xn)("end")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((q) => I(w.id), ["stop"])
                }, [
                  X(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Hk)
              ]),
              O[19] || (O[19] = i("div", { class: "p-3" }, [
                i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: ot(() => [
            X(N(k1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            X(N(ew))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      X(W_, {
        node: k.value,
        edge: P.value,
        onRemoveNode: I,
        onRemoveEdge: D
      }, null, 8, ["node", "edge"]),
      d.value ? (E(), Ce(k2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: s.value,
        onClose: O[6] || (O[6] = (w) => d.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : te("", !0)
    ]));
  }
}, Wk = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Xk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Yk = { class: "flex items-center gap-3" }, Kk = ["disabled"], Zk = { class: "flex items-center gap-2" }, Jk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Qk = { class: "text-sm font-bold" }, e5 = ["disabled"], t5 = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, Cp = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(null), a = G(!1), s = G("");
    function l() {
      o.value?.requestSave?.();
    }
    async function c(u) {
      a.value = !0, s.value = "";
      try {
        await ze.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (d) {
        s.value = d.message, a.value = !1;
      }
    }
    return (u, d) => (E(), Ce(Xc, { to: "body" }, [
      i("div", Wk, [
        i("header", Xk, [
          i("div", Yk, [
            i("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: a.value,
              onClick: d[0] || (d[0] = (f) => r("close"))
            }, [
              X(N(Kc), { class: "h-4 w-4 text-emerald-500" }),
              d[1] || (d[1] = i("span", null, "Voltar para Automações", -1))
            ], 8, Kk),
            d[3] || (d[3] = i("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            i("div", Zk, [
              i("div", Jk, [
                X(N(nf), { class: "h-4 w-4" })
              ]),
              i("div", null, [
                i("div", Qk, L(e.flow.name || "Editor de Fluxo Visual"), 1),
                d[2] || (d[2] = i("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          i("button", {
            type: "button",
            disabled: a.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: l
          }, [
            a.value ? (E(), Ce(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (E(), Ce(N(Mh), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, L(a.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, e5)
        ]),
        s.value ? (E(), A("p", t5, [
          X(N(ka), { class: "h-4 w-4 shrink-0" }),
          i("span", null, L(s.value), 1)
        ])) : te("", !0),
        X(Gk, {
          ref_key: "canvas",
          ref: o,
          flow: e.flow,
          saving: a.value,
          class: "flex-1 overflow-hidden",
          onSave: c
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, n5 = { class: "truncate" }, r5 = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, o5 = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, a5 = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, s5 = ["checked", "onChange"], i5 = { class: "truncate" }, pr = {
  __name: "MultiSelectDropdown",
  props: {
    /** @type {{value: string, label: string}[]} */
    options: { type: Array, required: !0 },
    modelValue: { type: Array, default: () => [] },
    placeholder: { type: String, default: "Filtrar" },
    /** Mostra o alternador E/OU (só faz diferença com 2+ itens marcados). */
    matchMode: { type: Boolean, default: !1 },
    /** 'or' = tem pelo menos um dos marcados; 'and' = tem todos os marcados. */
    mode: { type: String, default: "or" }
  },
  emits: ["update:modelValue", "update:mode"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(!1), a = G(null);
    function s(y) {
      a.value && !a.value.contains(y.target) && u();
    }
    function l() {
      o.value ? u() : c();
    }
    function c() {
      o.value = !0, document.addEventListener("click", s, !0);
    }
    function u() {
      o.value = !1, document.removeEventListener("click", s, !0);
    }
    function d(y) {
      r("update:modelValue", n.modelValue.includes(y) ? n.modelValue.filter((m) => m !== y) : [...n.modelValue, y]);
    }
    function f() {
      r("update:modelValue", []);
    }
    wa(() => document.removeEventListener("click", s, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, m) => (E(), A("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      i("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        i("span", n5, L(v.value), 1),
        X(N(Ch), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (E(), A("div", r5, [
        e.options.length ? (E(), A(ue, { key: 1 }, [
          e.matchMode ? (E(), A("div", a5, [
            i("button", {
              type: "button",
              class: W(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: m[0] || (m[0] = (p) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            i("button", {
              type: "button",
              class: W(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: m[1] || (m[1] = (p) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : te("", !0),
          e.modelValue.length ? (E(), A("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : te("", !0),
          (E(!0), A(ue, null, Ne(e.options, (p) => (E(), A("label", {
            key: p.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            i("span", {
              class: W(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(p.value) ? (E(), Ce(N(Jc), {
                key: 0,
                class: "h-3 w-3"
              })) : te("", !0)
            ], 2),
            i("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(p.value),
              onChange: (h) => d(p.value)
            }, null, 40, s5),
            i("span", i5, L(p.label), 1)
          ]))), 128))
        ], 64)) : (E(), A("p", o5, "Nenhuma opção disponível."))
      ])) : te("", !0)
    ], 512));
  }
}, l5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, u5 = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, d5 = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, c5 = { class: "flex items-center gap-2.5" }, f5 = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, p5 = { class: "space-y-4 p-5" }, h5 = ["value"], m5 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, v5 = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, g5 = ["disabled"], y5 = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G([]), a = G(!1), s = G(""), l = Un({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Bn[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), c = J(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await ze.products()).products || [];
      } catch {
        o.value = [];
      }
    }
    async function d() {
      if (!l.name.trim()) {
        s.value = "Informe um nome para o fluxo.";
        return;
      }
      a.value = !0, s.value = "";
      try {
        await ze.updateFlow(n.flow.id, {
          name: l.name.trim(),
          trigger_event: l.trigger_event,
          product_ids: l.product_ids.length ? l.product_ids : null
        }), r("saved"), r("close");
      } catch (f) {
        s.value = f.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(u), (f, v) => (E(), A("div", l5, [
      i("div", u5, [
        i("div", d5, [
          i("div", c5, [
            i("div", f5, [
              X(N(lf), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          i("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (y) => r("close"))
          }, [
            X(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", p5, [
          i("div", null, [
            v[6] || (v[6] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ee(i("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": v[1] || (v[1] = (y) => l.name = y),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [be, l.name]
            ])
          ]),
          i("div", null, [
            v[7] || (v[7] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ee(i("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (y) => l.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (E(!0), A(ue, null, Ne(N(Bn), (y) => (E(), A("option", {
                key: y.id,
                value: y.eventClass
              }, L(y.label), 9, h5))), 128))
            ], 512), [
              [tt, l.trigger_event]
            ]),
            v[8] || (v[8] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          i("div", null, [
            v[9] || (v[9] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            X(pr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (y) => l.product_ids = y),
              options: c.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          s.value ? (E(), A("p", m5, L(s.value), 1)) : te("", !0)
        ]),
        i("div", v5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v[4] || (v[4] = (y) => r("close"))
          }, " Cancelar "),
          i("button", {
            type: "button",
            disabled: a.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: d
          }, L(a.value ? "Salvando…" : "Salvar"), 9, g5)
        ])
      ])
    ]));
  }
}, b5 = [
  {
    id: "pix_recovery",
    icon: "⚡",
    badge: "Mais popular",
    title: "Recuperação de PIX com verificação",
    description: "Espera 15 min → verifica se foi pago → se não, envia um lembrete e depois o botão para copiar o PIX.",
    eventClass: "App\\Events\\PixGenerated",
    graph: (e) => ({
      nodes: [
        { id: "trigger", type: "trigger", x: 60, y: 180, data: { event_class: e } },
        { id: "delay1", type: "delay", x: 320, y: 180, data: { delay_value: 15, delay_unit: "minutes", seconds: 900 } },
        { id: "cond1", type: "condition", x: 580, y: 180, data: { kind: "order_is_paid", value: "" } },
        {
          id: "send_reminder",
          type: "send_message",
          x: 860,
          y: 260,
          data: {
            mode: "text",
            recipient_type: "customer",
            text: `Olá {{customer.first_name}}! ⏳

Notamos que seu pedido de *{{order.product.name}}* ({{order.amount_formatted}}) ainda está aguardando pagamento.

Toque no botão da próxima mensagem para copiar o código PIX e finalizar rapidinho!`
          }
        },
        {
          id: "send_pix_button",
          type: "send_message",
          x: 1140,
          y: 260,
          data: {
            mode: "buttons",
            recipient_type: "customer",
            title: "Pagamento pendente",
            text: "*{{order.product.name}}* — {{order.amount_formatted}}",
            footer: "Assim que você pagar, seu acesso é liberado na hora!",
            buttons: [{ type: "copy", displayText: "Copiar código PIX", copyCode: "{{pix.copy_paste}}" }]
          }
        },
        { id: "end_paid", type: "end", x: 860, y: 90, data: {} },
        { id: "end_sent", type: "end", x: 1420, y: 260, data: {} }
      ],
      edges: [
        { from: "trigger", to: "delay1" },
        { from: "delay1", to: "cond1" },
        { from: "cond1", to: "end_paid", data: { condition: "true" } },
        { from: "cond1", to: "send_reminder", data: { condition: "false" } },
        { from: "send_reminder", to: "send_pix_button" },
        { from: "send_pix_button", to: "end_sent" }
      ]
    })
  },
  {
    id: "cart_recovery",
    icon: "🛒",
    badge: "Recuperação",
    title: "Recuperação de carrinho abandonado",
    description: "Espera 30 min → se ainda não comprou, envia um lembrete e um botão direto para o checkout.",
    eventClass: "App\\Events\\CartAbandoned",
    graph: (e) => ({
      nodes: [
        { id: "trigger", type: "trigger", x: 60, y: 180, data: { event_class: e } },
        { id: "delay1", type: "delay", x: 320, y: 180, data: { delay_value: 30, delay_unit: "minutes", seconds: 1800 } },
        { id: "cond1", type: "condition", x: 580, y: 180, data: { kind: "order_is_paid", value: "" } },
        {
          id: "send_cart",
          type: "send_message",
          x: 860,
          y: 260,
          data: {
            mode: "text",
            recipient_type: "customer",
            text: `Oi {{customer.first_name}}! Notamos que você não finalizou sua compra em *{{order.product.name}}*.

Seu pedido ficou reservado! Toque no botão da próxima mensagem para concluir agora.`
          }
        },
        {
          id: "send_cart_button",
          type: "send_message",
          x: 1140,
          y: 260,
          data: {
            mode: "buttons",
            recipient_type: "customer",
            title: "Finalize sua compra",
            text: "*{{order.product.name}}*",
            footer: "Seu pedido está reservado.",
            buttons: [{ type: "url", displayText: "Concluir compra", url: "{{checkout_link}}" }]
          }
        },
        { id: "end_paid", type: "end", x: 860, y: 90, data: {} },
        { id: "end_sent", type: "end", x: 1420, y: 260, data: {} }
      ],
      edges: [
        { from: "trigger", to: "delay1" },
        { from: "delay1", to: "cond1" },
        { from: "cond1", to: "end_paid", data: { condition: "true" } },
        { from: "cond1", to: "send_cart", data: { condition: "false" } },
        { from: "send_cart", to: "send_cart_button" },
        { from: "send_cart_button", to: "end_sent" }
      ]
    })
  },
  {
    id: "access_delivery",
    icon: "🔑",
    badge: "Essencial",
    title: "Entrega imediata de acesso",
    description: "Venda aprovada → envia link, e-mail e senha, depois um botão para acessar direto.",
    eventClass: "App\\Events\\AccessDeliveryReady",
    graph: (e) => ({
      nodes: [
        { id: "trigger", type: "trigger", x: 80, y: 180, data: { event_class: e } },
        {
          id: "send_access",
          type: "send_message",
          x: 400,
          y: 180,
          data: {
            mode: "text",
            recipient_type: "customer",
            text: `Parabéns {{customer.first_name}}! 🎉

Seu pagamento para *{{order.product.name}}* foi aprovado com sucesso!

Dados de acesso:
🔗 Link: {{access.link}}
👤 Login: {{access.email}}
🔑 Senha: {{access.password}}

Toque no botão da próxima mensagem para acessar direto, sem precisar copiar o link!`
          }
        },
        {
          id: "send_access_button",
          type: "send_message",
          x: 680,
          y: 180,
          data: {
            mode: "buttons",
            recipient_type: "customer",
            title: "Acesso liberado!",
            text: "*{{order.product.name}}*",
            footer: "Bons estudos!",
            buttons: [{ type: "url", displayText: "Acessar agora", url: "{{access.link}}" }]
          }
        },
        { id: "end", type: "end", x: 960, y: 180, data: {} }
      ],
      edges: [
        { from: "trigger", to: "send_access" },
        { from: "send_access", to: "send_access_button" },
        { from: "send_access_button", to: "end" }
      ]
    })
  },
  {
    id: "upsell_offer",
    icon: "🚀",
    badge: "Aumentar LTV",
    title: "Oferta de Upsell pós-compra (Cross-sell)",
    description: "Venda aprovada → espera 24 horas → envia recomendação de produto complementar com botão exclusivo.",
    eventClass: "App\\Events\\OrderCompleted",
    graph: (e) => ({
      nodes: [
        { id: "trigger", type: "trigger", x: 60, y: 180, data: { event_class: e } },
        { id: "delay_24h", type: "delay", x: 320, y: 180, data: { delay_value: 24, delay_unit: "hours", seconds: 86400 } },
        {
          id: "send_upsell_text",
          type: "send_message",
          x: 600,
          y: 180,
          data: {
            mode: "text",
            recipient_type: "customer",
            text: `Olá, {{customer.first_name}}! Tudo bem? 😊

Passando para saber como está sua experiência com o *{{order.product.name}}*!

Para te ajudar a acelerar ainda mais seus resultados, liberamos uma condição especial no nosso módulo avançado.

Toque no botão abaixo para conferir a oferta com desconto exclusivo de aluno:`
          }
        },
        {
          id: "send_upsell_button",
          type: "send_message",
          x: 900,
          y: 180,
          data: {
            mode: "buttons",
            recipient_type: "customer",
            title: "🚀 Oferta Especial de Upsell",
            text: "Acelere seus resultados com o próximo nível do *{{order.product.name}}*",
            footer: "Condição exclusiva para alunos",
            buttons: [{ type: "url", displayText: "Garantir com Desconto VIP", url: "{{checkout_link}}" }]
          }
        },
        { id: "end_upsell", type: "end", x: 1200, y: 180, data: {} }
      ],
      edges: [
        { from: "trigger", to: "delay_24h" },
        { from: "delay_24h", to: "send_upsell_text" },
        { from: "send_upsell_text", to: "send_upsell_button" },
        { from: "send_upsell_button", to: "end_upsell" }
      ]
    })
  },
  {
    id: "admin_sale_notification",
    icon: "🔔",
    badge: "Notificação",
    title: "Notificar venda aprovada no meu WhatsApp",
    description: "Venda aprovada na Getfy → envia uma notificação instantânea para o seu próprio WhatsApp com valor, produto e forma de pagamento.",
    eventClass: "App\\Events\\OrderCompleted",
    graph: (e) => ({
      nodes: [
        { id: "trigger", type: "trigger", x: 80, y: 180, data: { event_class: e } },
        {
          id: "send_admin_alert",
          type: "send_message",
          x: 400,
          y: 180,
          data: {
            mode: "text",
            recipient_type: "custom",
            custom_phone: "5511999999999",
            text: `🎉 *NOVA VENDA APROVADA!* 🚀

📦 *Produto:* {{order.product.name}}
{{order.bumps_section}}
💰 *Valor:* {{order.amount_formatted}}
💳 *Pagamento:* {{order.payment_method_label}}
👤 *Cliente:* {{customer.name}}
📱 *Telefone:* {{customer.phone}}
🆔 *Pedido:* #{{order.id}}

_Notificação automática ZapRei / Getfy._`
          }
        },
        { id: "end_alert", type: "end", x: 720, y: 180, data: {} }
      ],
      edges: [
        { from: "trigger", to: "send_admin_alert" },
        { from: "send_admin_alert", to: "end_alert" }
      ]
    })
  }
], x5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, w5 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, _5 = ["onClick"], k5 = { class: "flex items-center justify-between" }, S5 = { class: "text-2xl" }, E5 = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, z5 = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, $5 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, P5 = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (E(), A("div", x5, [
      n[1] || (n[1] = i("div", { class: "mb-4 flex items-center justify-between" }, [
        i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      i("div", w5, [
        (E(!0), A(ue, null, Ne(N(b5), (r) => (E(), A("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          i("div", null, [
            i("div", k5, [
              i("span", S5, L(r.icon), 1),
              i("span", E5, L(r.badge), 1)
            ]),
            i("h3", z5, L(r.title), 1),
            i("p", $5, L(r.description), 1)
          ]),
          n[0] || (n[0] = i("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            i("span", null, "Usar modelo"),
            i("span", null, "→")
          ], -1))
        ], 8, _5))), 128))
      ])
    ]));
  }
}, C5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, A5 = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, T5 = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, O5 = { class: "flex items-center gap-3" }, N5 = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, R5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, M5 = { class: "text-zinc-700 dark:text-zinc-300" }, I5 = { class: "p-6 space-y-4" }, D5 = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, F5 = { class: "flex items-center gap-2 font-bold text-sm" }, B5 = { class: "text-xs" }, L5 = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, U5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V5 = ["value"], q5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, j5 = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, H5 = ["disabled"], G5 = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(""), a = G(""), s = G(!1), l = G(""), c = G(!1), u = G("");
    function d(p) {
      const h = String(p || "").replace(/\D/g, "").slice(0, 11);
      return h ? h.length <= 2 ? `(${h}` : h.length <= 6 ? `(${h.slice(0, 2)}) ${h.slice(2)}` : h.length <= 10 ? `(${h.slice(0, 2)}) ${h.slice(2, 6)}-${h.slice(6)}` : `(${h.slice(0, 2)}) ${h.slice(2, 7)}-${h.slice(7, 11)}` : "";
    }
    function f(p) {
      const h = p.target.value;
      o.value = d(h);
    }
    const v = J(() => o.value.replace(/\D/g, "")), y = J(() => v.value.length >= 10 && v.value.length <= 11);
    async function m() {
      if (!(!y.value || s.value)) {
        s.value = !0, l.value = "", c.value = !1;
        try {
          await ze.testFlow(n.flow.id, {
            phone: v.value,
            customer_name: a.value.trim() || void 0
          }), u.value = o.value, c.value = !0, r("tested", { phone: v.value, name: a.value });
        } catch (p) {
          l.value = p.message || "Falha ao disparar teste.";
        } finally {
          s.value = !1;
        }
      }
    }
    return (p, h) => (E(), A("div", C5, [
      i("div", A5, [
        i("div", T5, [
          i("div", O5, [
            i("div", N5, [
              X(N(Ct), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              h[4] || (h[4] = i("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              i("p", R5, [
                h[3] || (h[3] = ye("Fluxo: ", -1)),
                i("strong", M5, L(e.flow.name), 1)
              ])
            ])
          ]),
          i("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (b) => r("close"))
          }, [
            X(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", I5, [
          h[13] || (h[13] = i("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            i("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          c.value ? (E(), A("div", D5, [
            i("div", F5, [
              X(N(jr), { class: "h-5 w-5 text-emerald-500" }),
              h[5] || (h[5] = i("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            i("p", B5, [
              h[6] || (h[6] = ye(" As mensagens foram enviadas para ", -1)),
              i("strong", null, L(u.value), 1),
              h[7] || (h[7] = ye('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : te("", !0),
          l.value ? (E(), A("div", L5, L(l.value), 1)) : te("", !0),
          i("form", {
            class: "space-y-4",
            onSubmit: rn(m, ["prevent"])
          }, [
            i("div", null, [
              h[9] || (h[9] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              i("div", U5, [
                h[8] || (h[8] = i("span", { class: "mr-2 text-xs font-bold text-zinc-500" }, "🇧🇷 +55", -1)),
                i("input", {
                  value: o.value,
                  type: "text",
                  placeholder: "(11) 99999-8888",
                  class: "w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white",
                  onInput: f
                }, null, 40, V5)
              ]),
              h[10] || (h[10] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Digite seu número com DDD (10 ou 11 dígitos). ", -1))
            ]),
            i("div", null, [
              h[11] || (h[11] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Nome do Cliente (para variáveis do fluxo) ", -1)),
              i("div", q5, [
                X(N(Dh), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                ee(i("input", {
                  "onUpdate:modelValue": h[1] || (h[1] = (b) => a.value = b),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [be, a.value]
                ])
              ]),
              h[12] || (h[12] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                ye(" Substitui as tags "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                ye(" e "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                ye(". ")
              ], -1))
            ])
          ], 32)
        ]),
        i("div", j5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[2] || (h[2] = (b) => r("close"))
          }, L(c.value ? "Concluir" : "Cancelar"), 1),
          i("button", {
            type: "button",
            disabled: !y.value || s.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: m
          }, [
            s.value ? (E(), Ce(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (E(), Ce(N(Ct), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, L(s.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, H5)
        ])
      ])
    ]));
  }
}, W5 = { class: "space-y-4 text-zinc-900 dark:text-white" }, X5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, Y5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, K5 = { class: "flex flex-wrap items-center gap-2" }, Z5 = { class: "relative w-64" }, J5 = ["value"], Q5 = { class: "flex items-center gap-3" }, eS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, tS = ["disabled"], nS = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, rS = { class: "grid gap-3 sm:grid-cols-3" }, oS = ["value"], aS = { class: "flex gap-2" }, sS = ["disabled"], iS = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, lS = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, uS = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, dS = {
  key: 4,
  class: "py-10 text-center"
}, cS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, fS = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, pS = { class: "flex items-start justify-between gap-2" }, hS = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, mS = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, vS = ["title", "disabled", "onClick"], gS = { class: "mt-2" }, yS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, bS = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, xS = { class: "flex items-center gap-1" }, wS = ["onClick"], _S = ["disabled", "onClick"], kS = ["disabled", "onClick"], SS = ["disabled", "onClick"], ES = ["onClick"], zS = ["onClick"], $S = {
  __name: "FlowsPanel",
  setup(e) {
    const t = G([]), n = G([]), r = G(!0), o = G(!1), a = G(""), s = G(""), l = G(!1), c = G(""), u = G("all"), d = G(null), f = G(null), v = G(null), y = G({ name: "", trigger_event: Bn[3].eventClass, product_ids: [] }), m = G(!1), p = J(() => {
      const V = c.value.trim().toLowerCase();
      return t.value.filter((z) => u.value !== "all" && z.trigger_event !== u.value ? !1 : !V || `${z.name} ${Vo(z.trigger_event)}`.toLowerCase().includes(V));
    }), h = J(() => n.value.map((V) => ({ value: V.id, label: V.name })));
    function b(V) {
      if (!V || !V.length) return "Todos os produtos";
      const z = V.map((R) => n.value.find((x) => x.id === R)?.name).filter(Boolean);
      return z.length ? z.length > 2 ? `${z.slice(0, 2).join(", ")} +${z.length - 2}` : z.join(", ") : "Todos os produtos";
    }
    async function $() {
      r.value = !0, a.value = "";
      try {
        const [V, z] = await Promise.all([ze.flows(), ze.products()]);
        t.value = V.flows || [], n.value = z.products || [];
      } catch (V) {
        a.value = V.message;
      } finally {
        r.value = !1;
      }
    }
    async function k(V) {
      o.value = !0, a.value = "";
      try {
        await V(), await $();
      } catch (z) {
        a.value = z.message;
      } finally {
        o.value = !1;
      }
    }
    function P(V) {
      v.value = V;
    }
    function C({ phone: V }) {
      s.value = `Fluxo "${v.value?.name}" disparado para ${V}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function _() {
      const V = y.value.name.trim() || Vo(y.value.trigger_event);
      return k(async () => {
        await ze.createFlow({
          name: V,
          trigger_event: y.value.trigger_event,
          product_ids: y.value.product_ids.length ? y.value.product_ids : null,
          is_active: !0,
          graph_json: Ep(y.value.trigger_event)
        }), y.value.name = "", y.value.product_ids = [], m.value = !1;
      });
    }
    const g = (V) => k(() => ze.updateFlow(V.id, { is_active: !V.is_active })), S = (V) => k(() => ze.duplicateFlow(V.id));
    function U(V) {
      if (window.confirm(`Excluir o fluxo "${V.name}"?`))
        return k(() => ze.deleteFlow(V.id));
    }
    function I(V) {
      const z = {
        name: V.name,
        trigger_event: V.trigger_event,
        product_ids: V.product_ids,
        graph_json: V.graph_json
      }, R = new Blob([JSON.stringify(z, null, 2)], { type: "application/json" }), x = URL.createObjectURL(R), O = document.createElement("a");
      O.href = x, O.download = `${(V.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, O.click(), URL.revokeObjectURL(x);
    }
    async function D(V) {
      const z = V.target.files?.[0];
      if (z) {
        l.value = !0, a.value = "", s.value = "";
        try {
          const R = JSON.parse(await z.text());
          if (!R || typeof R != "object" || !R.graph_json || !R.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const x = new Set(n.value.map((w) => w.id)), O = (Array.isArray(R.product_ids) ? R.product_ids : []).filter((w) => x.has(w));
          await ze.createFlow({
            name: R.name ? `${R.name} (importado)` : "Fluxo importado",
            trigger_event: R.trigger_event,
            product_ids: O.length ? O : null,
            graph_json: R.graph_json,
            is_active: !1
          }), s.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await $();
        } catch (R) {
          a.value = R.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, V.target.value = "";
        }
      }
    }
    function T(V) {
      return k(() => ze.createFlow({
        name: V.title,
        trigger_event: V.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: V.graph(V.eventClass)
      }));
    }
    return Ke($), (V, z) => (E(), A("div", W5, [
      X(P5, { onUse: T }),
      i("div", X5, [
        i("div", Y5, [
          i("div", K5, [
            i("div", Z5, [
              X(N(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ee(i("input", {
                "onUpdate:modelValue": z[0] || (z[0] = (R) => c.value = R),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [be, c.value]
              ])
            ]),
            ee(i("select", {
              "onUpdate:modelValue": z[1] || (z[1] = (R) => u.value = R),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              z[10] || (z[10] = i("option", { value: "all" }, "Todos os eventos", -1)),
              (E(!0), A(ue, null, Ne(N(Bn), (R) => (E(), A("option", {
                key: R.id,
                value: R.eventClass
              }, L(R.label), 9, J5))), 128))
            ], 512), [
              [tt, u.value]
            ])
          ]),
          i("div", Q5, [
            i("span", eS, L(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            i("label", {
              class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              X(N(uf), { class: "h-4 w-4" }),
              i("span", null, L(l.value ? "Importando…" : "Importar"), 1),
              i("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: l.value,
                onChange: D
              }, null, 40, tS)
            ], 2),
            i("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: z[2] || (z[2] = (R) => m.value = !m.value)
            }, [
              X(N(af), { class: "h-4 w-4" }),
              z[11] || (z[11] = i("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        m.value ? (E(), A("div", nS, [
          i("div", rS, [
            i("div", null, [
              z[12] || (z[12] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ee(i("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": z[3] || (z[3] = (R) => y.value.name = R),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [be, y.value.name]
              ])
            ]),
            i("div", null, [
              z[13] || (z[13] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ee(i("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": z[4] || (z[4] = (R) => y.value.trigger_event = R),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (E(!0), A(ue, null, Ne(N(Bn), (R) => (E(), A("option", {
                  key: R.id,
                  value: R.eventClass
                }, L(R.label), 9, oS))), 128))
              ], 512), [
                [tt, y.value.trigger_event]
              ])
            ]),
            i("div", null, [
              z[14] || (z[14] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              X(pr, {
                modelValue: y.value.product_ids,
                "onUpdate:modelValue": z[5] || (z[5] = (R) => y.value.product_ids = R),
                options: h.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          i("div", aS, [
            i("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: _
            }, " Criar fluxo em branco ", 8, sS),
            i("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: z[6] || (z[6] = (R) => m.value = !1)
            }, " Cancelar ")
          ])
        ])) : te("", !0),
        a.value ? (E(), A("p", iS, L(a.value), 1)) : s.value ? (E(), A("p", lS, L(s.value), 1)) : te("", !0),
        r.value ? (E(), A("div", uS, [
          X(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          z[15] || (z[15] = i("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (E(), A("div", fS, [
          (E(!0), A(ue, null, Ne(p.value, (R) => (E(), A("div", {
            key: R.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            i("div", null, [
              i("div", pS, [
                i("div", null, [
                  i("span", hS, L(N(Vo)(R.trigger_event)), 1),
                  i("h3", mS, L(R.name), 1)
                ]),
                i("button", {
                  type: "button",
                  class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", R.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: R.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (x) => g(R)
                }, [
                  i("span", {
                    class: W(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", R.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, vS)
              ]),
              i("div", gS, [
                i("span", yS, L(b(R.product_ids)), 1)
              ])
            ]),
            i("div", bS, [
              i("div", xS, [
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (x) => f.value = R
                }, [
                  X(N(lf), { class: "h-4 w-4" })
                ], 8, wS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (x) => S(R)
                }, [
                  X(N(Qc), { class: "h-4 w-4" })
                ], 8, _S),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (x) => U(R)
                }, [
                  X(N(Jo), { class: "h-4 w-4" })
                ], 8, kS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (x) => P(R)
                }, [
                  X(N(Ct), { class: "h-4 w-4" })
                ], 8, SS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (x) => I(R)
                }, [
                  X(N(ef), { class: "h-4 w-4" })
                ], 8, ES)
              ]),
              i("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (x) => d.value = R
              }, [
                X(N(rf), { class: "h-3.5 w-3.5" }),
                z[18] || (z[18] = i("span", null, "Editar Visual", -1))
              ], 8, zS)
            ])
          ]))), 128))
        ])) : (E(), A("div", dS, [
          i("div", cS, [
            X(N(qn), { class: "h-6 w-6" })
          ]),
          z[16] || (z[16] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          z[17] || (z[17] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      d.value ? (E(), Ce(Cp, {
        key: 0,
        flow: d.value,
        onClose: z[7] || (z[7] = (R) => d.value = null),
        onSaved: $
      }, null, 8, ["flow"])) : te("", !0),
      f.value ? (E(), Ce(y5, {
        key: 1,
        flow: f.value,
        onClose: z[8] || (z[8] = (R) => f.value = null),
        onSaved: $
      }, null, 8, ["flow"])) : te("", !0),
      v.value ? (E(), Ce(G5, {
        key: 2,
        flow: v.value,
        onClose: z[9] || (z[9] = (R) => v.value = null),
        onTested: C
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, PS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, CS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, AS = { class: "flex items-center gap-2" }, TS = ["disabled"], OS = { class: "mt-4 grid grid-cols-3 gap-3" }, NS = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, RS = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, MS = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, IS = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, DS = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, FS = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, BS = { class: "mt-4 flex flex-wrap items-end gap-2" }, LS = { class: "w-48" }, US = { class: "w-48" }, VS = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, qS = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, jS = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, HS = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, GS = {
  key: 3,
  class: "py-10 text-center"
}, WS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, XS = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, YS = { class: "w-full text-left text-xs" }, KS = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, ZS = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, JS = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, QS = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, eE = { class: "px-3 py-2.5" }, tE = { class: "px-3 py-2.5" }, nE = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, rE = ["title"], oE = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, aE = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, sE = { class: "px-3 py-2.5" }, iE = ["onClick"], lE = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = G([]), r = G([]), o = G({ all: 0, buyers: 0, imported: 0 }), a = G(!0), s = G(""), l = G(""), c = G("all"), u = G([]), d = G("or"), f = G([]), v = G(""), y = G(!1), m = J(() => r.value.map((C) => ({ value: C.name, label: C.name }))), p = J(() => {
      const C = v.value.trim().toLowerCase();
      return n.value.filter((_) => c.value === "buyer" && _.source !== "buyer" || c.value === "imported" && _.source !== "imported" || u.value.length && !(d.value === "and" ? u.value.every((S) => _.products.includes(S)) : _.products.some((S) => u.value.includes(S))) || f.value.length && _.products.some((g) => f.value.includes(g)) ? !1 : !C || `${_.name} ${_.phone} ${_.email}`.toLowerCase().includes(C));
    });
    async function h() {
      a.value = !0, s.value = "";
      try {
        const [C, _] = await Promise.all([ze.contacts(), ze.products()]);
        n.value = C.contacts || [], o.value = C.counts || o.value, r.value = _.products || [];
      } catch (C) {
        s.value = C.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(h);
    const b = "\uFEFF";
    function $() {
      const C = t.map((U) => U.join(",")).join(`\r
`), _ = new Blob([b + C], { type: "text/csv;charset=utf-8" }), g = URL.createObjectURL(_), S = document.createElement("a");
      S.href = g, S.download = "zaprei-modelo-importacao.csv", S.click(), URL.revokeObjectURL(g);
    }
    async function k(C) {
      const _ = C.target.files?.[0];
      if (_) {
        y.value = !0, s.value = "", l.value = "";
        try {
          const { imported: g } = await ze.importContacts(_);
          l.value = `${g} contato(s) importado(s).`, await h();
        } catch (g) {
          s.value = g.message;
        } finally {
          y.value = !1, C.target.value = "";
        }
      }
    }
    async function P(C) {
      if (window.confirm(`Remover ${C.name}?`)) {
        s.value = "";
        try {
          await ze.deleteContact(C.id), await h();
        } catch (_) {
          s.value = _.message;
        }
      }
    }
    return (C, _) => (E(), A("div", PS, [
      i("div", CS, [
        _[6] || (_[6] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        i("div", AS, [
          i("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: $
          }, [
            X(N(ef), { class: "h-4 w-4" }),
            _[5] || (_[5] = i("span", null, "Baixar exemplo", -1))
          ]),
          i("label", {
            class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            X(N(uf), { class: "h-4 w-4" }),
            i("span", null, L(y.value ? "Importando…" : "Importar CSV"), 1),
            i("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: k
            }, null, 40, TS)
          ], 2)
        ])
      ]),
      i("div", OS, [
        i("div", NS, [
          i("div", RS, L(o.value.all), 1),
          _[7] || (_[7] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        i("div", MS, [
          i("div", IS, L(o.value.buyers), 1),
          _[8] || (_[8] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        i("div", DS, [
          i("div", FS, L(o.value.imported), 1),
          _[9] || (_[9] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      i("div", BS, [
        i("div", null, [
          _[11] || (_[11] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ee(i("select", {
            "onUpdate:modelValue": _[0] || (_[0] = (g) => c.value = g),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [..._[10] || (_[10] = [
            i("option", { value: "all" }, "Todas as origens", -1),
            i("option", { value: "buyer" }, "Apenas compradores", -1),
            i("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [tt, c.value]
          ])
        ]),
        i("div", LS, [
          _[12] || (_[12] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          X(pr, {
            modelValue: u.value,
            "onUpdate:modelValue": _[1] || (_[1] = (g) => u.value = g),
            mode: d.value,
            "onUpdate:mode": _[2] || (_[2] = (g) => d.value = g),
            options: m.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        i("div", US, [
          _[13] || (_[13] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          X(pr, {
            modelValue: f.value,
            "onUpdate:modelValue": _[3] || (_[3] = (g) => f.value = g),
            options: m.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ee(i("input", {
          "onUpdate:modelValue": _[4] || (_[4] = (g) => v.value = g),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [be, v.value]
        ]),
        i("span", VS, L(p.value.length) + " de " + L(n.value.length) + " contato(s)", 1)
      ]),
      _[17] || (_[17] = i("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        ye(" O CSV aceita as colunas "),
        i("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        ye(" (máximo de 10 MB). ")
      ], -1)),
      s.value ? (E(), A("p", qS, L(s.value), 1)) : l.value ? (E(), A("p", jS, L(l.value), 1)) : te("", !0),
      a.value ? (E(), A("div", HS, [
        X(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        _[14] || (_[14] = i("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? (E(), A("div", XS, [
        i("table", YS, [
          _[16] || (_[16] = i("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            i("tr", null, [
              i("th", { class: "px-3 py-2.5" }, "Contato"),
              i("th", { class: "px-3 py-2.5" }, "Telefone"),
              i("th", { class: "px-3 py-2.5" }, "E-mail"),
              i("th", { class: "px-3 py-2.5" }, "Origem"),
              i("th", { class: "px-3 py-2.5" }, "Produtos"),
              i("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          i("tbody", KS, [
            (E(!0), A(ue, null, Ne(p.value, (g) => (E(), A("tr", {
              key: g.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", ZS, L(g.name), 1),
              i("td", JS, L(g.phone), 1),
              i("td", QS, L(g.email || "—"), 1),
              i("td", eE, [
                i("span", {
                  class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", g.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, L(g.origin), 3)
              ]),
              i("td", tE, [
                g.products.length ? (E(), A("div", nE, [
                  (E(!0), A(ue, null, Ne(g.products.slice(0, 2), (S) => (E(), A("span", {
                    key: S,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: S
                  }, L(S), 9, rE))), 128)),
                  g.products.length > 2 ? (E(), A("span", oE, "+" + L(g.products.length - 2), 1)) : te("", !0)
                ])) : (E(), A("span", aE, "—"))
              ]),
              i("td", sE, [
                g.can_delete ? (E(), A("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (S) => P(g)
                }, [
                  X(N(Jo), { class: "h-3.5 w-3.5" })
                ], 8, iE)) : te("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (E(), A("div", GS, [
        i("div", WS, [
          X(N(Nn), { class: "h-6 w-6" })
        ]),
        _[15] || (_[15] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, uE = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, dE = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, cE = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, fE = { class: "flex items-center gap-3" }, pE = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, hE = { class: "flex items-center gap-2" }, mE = { key: 1 }, vE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, gE = { class: "flex-1 overflow-y-auto p-6" }, yE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, bE = { class: "space-y-2" }, xE = { class: "grid grid-cols-2 gap-3" }, wE = { class: "flex items-center gap-2" }, _E = { class: "flex items-center gap-2" }, kE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, SE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, EE = ["value"], zE = { class: "space-y-2" }, $E = { class: "grid grid-cols-2 gap-3" }, PE = { class: "flex items-center gap-2" }, CE = { class: "flex items-center gap-2" }, AE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, TE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, OE = ["min"], NE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, RE = { class: "flex items-center justify-between" }, ME = { class: "flex items-center gap-2" }, IE = { class: "text-xs font-bold text-emerald-400" }, DE = {
  key: 1,
  class: "space-y-4"
}, FE = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, BE = { class: "dark space-y-3" }, LE = { class: "relative" }, UE = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, VE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, qE = { class: "text-xs font-normal text-zinc-500" }, jE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, HE = { class: "w-full text-left text-xs" }, GE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, WE = { class: "w-10 px-3 py-2.5 text-center" }, XE = ["checked"], YE = { class: "divide-y divide-zinc-800/60" }, KE = ["onClick"], ZE = ["checked", "onChange"], JE = { class: "px-3 py-2" }, QE = { class: "font-medium text-white" }, ez = { class: "text-[11px] text-zinc-500" }, tz = { class: "px-3 py-2 font-mono text-zinc-300" }, nz = { class: "px-3 py-2" }, rz = { class: "px-3 py-2" }, oz = { class: "flex max-w-[200px] flex-wrap gap-1" }, az = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, sz = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, iz = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, lz = { key: 2 }, uz = {
  key: 0,
  class: "mx-auto max-w-xl space-y-4 py-2"
}, dz = { class: "rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-6" }, cz = { class: "flex items-center gap-3 border-b border-zinc-800 pb-4" }, fz = { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400" }, pz = { class: "text-base font-bold text-white" }, hz = { class: "mt-4 space-y-3 text-xs text-zinc-300" }, mz = { class: "flex justify-between" }, vz = { class: "font-medium text-white" }, gz = { class: "flex justify-between" }, yz = { class: "font-medium text-emerald-400" }, bz = { class: "flex justify-between" }, xz = {
  key: 1,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, wz = { class: "dark" }, _z = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, kz = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, Sz = { class: "grid grid-cols-2 gap-3 text-xs" }, Ez = { class: "mt-0.5 font-semibold text-white" }, zz = { class: "mt-0.5 text-base font-black text-emerald-400" }, $z = { class: "mt-0.5 text-zinc-300" }, Pz = { class: "text-xs text-zinc-500" }, Cz = {
  key: 0,
  class: "mt-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs font-semibold text-emerald-400"
}, Az = {
  key: 1,
  class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300"
}, Tz = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, Oz = { key: 1 }, Nz = { class: "flex items-center gap-3" }, Rz = ["disabled"], Mz = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = G(1), o = G(!1), a = G(""), s = G([]), l = G([]), c = G([]), u = G(!1), d = G("all"), f = G([]), v = G("or"), y = G([]), m = G(""), p = G({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), h = J(() => c.value.find((O) => O.id === p.value.flow_id)), b = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), $ = yp.filter((O) => O.token.startsWith("{{customer."));
    let k = !0;
    Me(() => p.value.message_data.mode, (O) => {
      if (k) {
        k = !1;
        return;
      }
      Object.assign(p.value.message_data, Sp(O));
    });
    const P = J(() => l.value.map((O) => ({ value: O.name, label: O.name }))), C = J(() => {
      const O = m.value.trim().toLowerCase();
      return s.value.filter((w) => d.value === "buyers" && w.source !== "buyer" || d.value === "imported" && w.source !== "imported" || f.value.length && !(v.value === "and" ? f.value.every((Q) => w.products.includes(Q)) : w.products.some((Q) => f.value.includes(Q))) || y.value.length && w.products.some((q) => y.value.includes(q)) ? !1 : !O || `${w.name} ${w.phone}`.toLowerCase().includes(O));
    }), _ = J(() => C.value.length > 0 && C.value.every((O) => p.value.selected_contact_keys.includes(O.id)));
    function g(O) {
      const w = p.value.selected_contact_keys;
      p.value.selected_contact_keys = w.includes(O) ? w.filter((q) => q !== O) : [...w, O];
    }
    function S() {
      const O = C.value.map((w) => w.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...O])];
    }
    function U() {
      const O = new Set(C.value.map((w) => w.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((w) => !O.has(w));
    }
    const I = J(() => s.value.find((w) => p.value.selected_contact_keys.includes(w.id)) || { name: "Cliente" }), D = J(() => ({
      customer: { name: I.value.name, first_name: (I.value.name || "").split(" ")[0] || I.value.name }
    })), T = J(() => {
      const O = p.value.message_data;
      return Di(O.text || O.question || O.title || "", D.value);
    }), V = J(() => Di(p.value.message_data.caption || "", D.value));
    async function z() {
      u.value = !0;
      try {
        const [O, w, q] = await Promise.all([
          ze.contacts(),
          ze.products(),
          ze.flows()
        ]);
        s.value = O.contacts || [], l.value = w.products || [], c.value = q.flows || [];
      } catch {
        s.value = [];
      } finally {
        u.value = !1;
      }
    }
    function R() {
      if (a.value = "", r.value === 1) {
        if (!p.value.name.trim()) {
          a.value = "Informe um nome para a campanha.";
          return;
        }
        if (p.value.action_type === "flow" && !p.value.flow_id) {
          a.value = "Selecione o fluxo de automação que deseja disparar.";
          return;
        }
        if (p.value.schedule_mode === "scheduled" && !p.value.scheduled_at) {
          a.value = "Escolha a data e o horário do disparo.";
          return;
        }
      }
      if (r.value === 2 && p.value.selected_contact_keys.length === 0) {
        a.value = "Selecione ao menos um destinatário para o disparo.";
        return;
      }
      if (r.value === 3)
        if (p.value.action_type === "flow") {
          if (!p.value.flow_id) {
            a.value = "Selecione um fluxo de automação para disparar.";
            return;
          }
        } else {
          const O = Fi(p.value.message_data, "Mensagem");
          if (O.length) {
            a.value = O[0];
            return;
          }
          if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
            a.value = "Escreva o texto da mensagem antes de avançar.";
            return;
          }
        }
      r.value++;
    }
    async function x() {
      if (a.value = "", p.value.action_type === "flow") {
        if (!p.value.flow_id) {
          a.value = "Selecione um fluxo de automação para disparar.", r.value = 1;
          return;
        }
      } else {
        const O = Fi(p.value.message_data, "Mensagem");
        if (O.length) {
          a.value = O[0], r.value = 3;
          return;
        }
        if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
          a.value = "Escreva o texto da mensagem antes de iniciar o disparo.", r.value = 3;
          return;
        }
      }
      o.value = !0;
      try {
        await ze.createCampaign({
          name: p.value.name,
          flow_id: p.value.action_type === "flow" ? p.value.flow_id : null,
          message_data: p.value.action_type === "message" ? p.value.message_data : null,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (O) {
        a.value = O.message;
      } finally {
        o.value = !1;
      }
    }
    return Ke(z), (O, w) => (E(), A("div", uE, [
      i("div", dE, [
        i("div", cE, [
          i("div", fE, [
            i("div", pE, [
              X(N(Ct), { class: "h-5 w-5" })
            ]),
            w[17] || (w[17] = i("div", null, [
              i("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              i("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          i("div", hE, [
            (E(), A(ue, null, Ne(4, (q) => i("div", {
              key: q,
              class: W(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === q ? "bg-emerald-500 text-zinc-950" : r.value > q ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > q ? (E(), Ce(N(Jc), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (E(), A("span", mE, L(q), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (E(), A("div", vE, [
          X(N(ka), { class: "h-4 w-4 shrink-0" }),
          i("span", null, L(a.value), 1)
        ])) : te("", !0),
        i("div", gE, [
          r.value === 1 ? (E(), A("div", yE, [
            i("div", null, [
              w[18] || (w[18] = i("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ee(i("input", {
                id: "zr-name",
                "onUpdate:modelValue": w[0] || (w[0] = (q) => p.value.name = q),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [be, p.value.name]
              ]),
              w[19] || (w[19] = i("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            i("div", bE, [
              w[27] || (w[27] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Tipo de Envio da Campanha *", -1)),
              i("div", xE, [
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[1] || (w[1] = (q) => p.value.action_type = "message")
                }, [
                  i("div", wE, [
                    X(N(Ct), { class: "h-4 w-4 text-emerald-400" }),
                    w[20] || (w[20] = i("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  w[21] || (w[21] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[2] || (w[2] = (q) => p.value.action_type = "flow")
                }, [
                  i("div", _E, [
                    X(N(Mr), { class: "h-4 w-4 text-emerald-400" }),
                    w[22] || (w[22] = i("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  w[23] || (w[23] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? (E(), A("div", kE, [
                i("label", SE, [
                  X(N(Mr), { class: "h-3.5 w-3.5" }),
                  w[24] || (w[24] = i("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                ee(i("select", {
                  "onUpdate:modelValue": w[3] || (w[3] = (q) => p.value.flow_id = q),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  w[25] || (w[25] = i("option", { value: null }, "Selecione um fluxo...", -1)),
                  (E(!0), A(ue, null, Ne(c.value, (q) => (E(), A("option", {
                    key: q.id,
                    value: q.id
                  }, L(q.name) + " (" + L(q.trigger_event || "Personalizado") + ") ", 9, EE))), 128))
                ], 512), [
                  [tt, p.value.flow_id]
                ]),
                w[26] || (w[26] = i("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : te("", !0)
            ]),
            i("div", zE, [
              w[34] || (w[34] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              i("div", $E, [
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[4] || (w[4] = (q) => p.value.schedule_mode = "immediate")
                }, [
                  i("div", PE, [
                    X(N(qn), { class: "h-4 w-4 text-emerald-400" }),
                    w[28] || (w[28] = i("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  w[29] || (w[29] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[5] || (w[5] = (q) => p.value.schedule_mode = "scheduled")
                }, [
                  i("div", CE, [
                    X(N(Io), { class: "h-4 w-4 text-emerald-400" }),
                    w[30] || (w[30] = i("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  w[31] || (w[31] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (E(), A("div", AE, [
                i("label", TE, [
                  X(N(In), { class: "h-3.5 w-3.5" }),
                  w[32] || (w[32] = i("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ee(i("input", {
                  "onUpdate:modelValue": w[6] || (w[6] = (q) => p.value.scheduled_at = q),
                  type: "datetime-local",
                  min: b.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, OE), [
                  [be, p.value.scheduled_at]
                ]),
                w[33] || (w[33] = i("p", { class: "text-[11px] text-zinc-400" }, [
                  ye(" A campanha ficará com status "),
                  i("strong", { class: "text-purple-400" }, "Agendada"),
                  ye(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : te("", !0)
            ]),
            i("div", NE, [
              i("div", RE, [
                i("div", ME, [
                  X(N(Ih), { class: "h-4 w-4 text-emerald-400" }),
                  w[35] || (w[35] = i("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                i("span", IE, L(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ee(i("input", {
                "onUpdate:modelValue": w[7] || (w[7] = (q) => p.value.throttle_seconds = q),
                type: "range",
                min: "3",
                max: "30",
                step: "1",
                class: "w-full cursor-pointer accent-emerald-500"
              }, null, 512), [
                [
                  be,
                  p.value.throttle_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              w[36] || (w[36] = i("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (E(), A("div", DE, [
            i("div", FE, [
              i("div", BE, [
                i("div", null, [
                  w[37] || (w[37] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  X(pr, {
                    modelValue: f.value,
                    "onUpdate:modelValue": w[8] || (w[8] = (q) => f.value = q),
                    mode: v.value,
                    "onUpdate:mode": w[9] || (w[9] = (q) => v.value = q),
                    options: P.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                i("div", null, [
                  w[38] || (w[38] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  X(pr, {
                    modelValue: y.value,
                    "onUpdate:modelValue": w[10] || (w[10] = (q) => y.value = q),
                    options: P.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  w[39] || (w[39] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              i("div", null, [
                w[41] || (w[41] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ee(i("select", {
                  "onUpdate:modelValue": w[11] || (w[11] = (q) => d.value = q),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...w[40] || (w[40] = [
                  i("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  i("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  i("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [tt, d.value]
                ]),
                w[42] || (w[42] = i("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                i("div", LE, [
                  X(N(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ee(i("input", {
                    "onUpdate:modelValue": w[12] || (w[12] = (q) => m.value = q),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [be, m.value]
                  ])
                ])
              ]),
              i("div", UE, [
                i("div", null, [
                  w[43] || (w[43] = i("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  i("div", VE, [
                    ye(L(p.value.selected_contact_keys.length) + " ", 1),
                    i("span", qE, "de " + L(C.value.length) + " filtrados", 1)
                  ])
                ]),
                i("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  i("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: S
                  }, "Selecionar Todos"),
                  w[44] || (w[44] = i("span", { class: "text-zinc-600" }, "•", -1)),
                  i("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: U
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            i("div", jE, [
              i("table", HE, [
                i("thead", GE, [
                  i("tr", null, [
                    i("th", WE, [
                      i("input", {
                        type: "checkbox",
                        checked: _.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: w[13] || (w[13] = (q) => _.value ? U() : S())
                      }, null, 40, XE)
                    ]),
                    w[45] || (w[45] = i("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    w[46] || (w[46] = i("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    w[47] || (w[47] = i("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    w[48] || (w[48] = i("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                i("tbody", YE, [
                  (E(!0), A(ue, null, Ne(C.value, (q) => (E(), A("tr", {
                    key: q.id,
                    class: W(["cursor-pointer transition", p.value.selected_contact_keys.includes(q.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (Q) => g(q.id)
                  }, [
                    i("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: w[14] || (w[14] = rn(() => {
                      }, ["stop"]))
                    }, [
                      i("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(q.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (Q) => g(q.id)
                      }, null, 40, ZE)
                    ]),
                    i("td", JE, [
                      i("div", QE, L(q.name), 1),
                      i("div", ez, L(q.email || "-"), 1)
                    ]),
                    i("td", tz, L(q.phone), 1),
                    i("td", nz, [
                      i("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", q.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, L(q.origin), 3)
                    ]),
                    i("td", rz, [
                      i("div", oz, [
                        (E(!0), A(ue, null, Ne(q.products.slice(0, 2), (Q) => (E(), A("span", {
                          key: Q,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, L(Q), 1))), 128)),
                        q.products.length > 2 ? (E(), A("span", az, "+" + L(q.products.length - 2), 1)) : te("", !0)
                      ])
                    ])
                  ], 10, KE))), 128))
                ])
              ]),
              u.value ? (E(), A("p", sz, "Carregando contatos...")) : C.value.length ? te("", !0) : (E(), A("p", iz, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (E(), A("div", lz, [
            p.value.action_type === "flow" ? (E(), A("div", uz, [
              i("div", dz, [
                i("div", cz, [
                  i("div", fz, [
                    X(N(Mr), { class: "h-6 w-6" })
                  ]),
                  i("div", null, [
                    w[49] || (w[49] = i("span", { class: "text-[10px] font-bold uppercase tracking-wider text-emerald-400" }, "Fluxo de Automação Selecionado", -1)),
                    i("h4", pz, L(h.value?.name || "Nenhum fluxo selecionado"), 1)
                  ])
                ]),
                i("div", hz, [
                  i("div", mz, [
                    w[50] || (w[50] = i("span", { class: "text-zinc-500" }, "Gatilho do Fluxo:", -1)),
                    i("span", vz, L(h.value?.trigger_event || "Disparo Direto"), 1)
                  ]),
                  i("div", gz, [
                    w[51] || (w[51] = i("span", { class: "text-zinc-500" }, "Blocos de Ação:", -1)),
                    i("span", yz, L(h.value?.graph_json?.nodes?.length || 0) + " blocos configurados", 1)
                  ]),
                  i("div", bz, [
                    w[52] || (w[52] = i("span", { class: "text-zinc-500" }, "Status:", -1)),
                    i("span", {
                      class: W(["rounded-full px-2 py-0.5 text-[10px] font-semibold", h.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, L(h.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                w[53] || (w[53] = i("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : (E(), A("div", xz, [
              i("div", wz, [
                X($p, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: N($)
                }, null, 8, ["data", "variables"])
              ]),
              i("div", null, [
                w[54] || (w[54] = i("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                X(gl, {
                  text: T.value,
                  caption: V.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": I.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? (E(), A("div", _z, [
            i("div", kz, [
              w[59] || (w[59] = i("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              i("div", Sz, [
                i("div", null, [
                  w[55] || (w[55] = i("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  i("p", Ez, L(p.value.name), 1)
                ]),
                i("div", null, [
                  w[56] || (w[56] = i("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  i("p", zz, L(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                i("div", null, [
                  w[57] || (w[57] = i("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  i("p", {
                    class: W(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (E(), Ce(Rt(p.value.schedule_mode === "scheduled" ? N(Io) : N(qn)), { class: "h-3.5 w-3.5" })),
                    i("span", null, L(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                i("div", null, [
                  w[58] || (w[58] = i("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  i("p", $z, "~" + L(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              i("div", null, [
                i("span", Pz, L(p.value.action_type === "flow" ? "Fluxo a Disparar:" : `Conteúdo da Mensagem (${p.value.message_data.mode}):`), 1),
                p.value.action_type === "flow" ? (E(), A("div", Cz, " ⚡ " + L(h.value?.name || "Fluxo selecionado"), 1)) : (E(), A("div", Az, L(T.value || V.value || "—"), 1))
              ])
            ])
          ])) : te("", !0)
        ]),
        i("div", Tz, [
          r.value > 1 ? (E(), A("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: w[15] || (w[15] = (q) => r.value--)
          }, [
            X(N(Kc), { class: "mr-2 h-4 w-4" }),
            w[60] || (w[60] = i("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (E(), A("div", Oz)),
          i("div", Nz, [
            i("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: w[16] || (w[16] = (q) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (E(), A("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: R
            }, [
              w[61] || (w[61] = i("span", null, "Próximo", -1)),
              X(N($h), { class: "ml-2 h-4 w-4" })
            ])) : (E(), A("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: W(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: x
            }, [
              o.value ? (E(), Ce(N(Dt), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (E(), Ce(Rt(p.value.schedule_mode === "scheduled" ? N(Io) : N(Ct)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              i("span", null, L(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, Rz))
          ])
        ])
      ])
    ]));
  }
}, Iz = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, Dz = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, Fz = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, Bz = { class: "flex items-center gap-3" }, Lz = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, Uz = { class: "text-lg font-bold text-white" }, Vz = { class: "mt-0.5 text-xs text-zinc-400" }, qz = {
  key: 0,
  class: "text-zinc-500"
}, jz = { class: "flex items-center gap-2" }, Hz = ["disabled"], Gz = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, Wz = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, Xz = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, Yz = { class: "flex items-center justify-between text-xs" }, Kz = { class: "flex items-center gap-2" }, Zz = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, Jz = { class: "font-bold text-white" }, Qz = { class: "font-mono font-bold text-emerald-400" }, e$ = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, t$ = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, n$ = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, r$ = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, o$ = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, a$ = { class: "mt-0.5 text-xl font-bold text-white" }, s$ = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, i$ = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, l$ = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, u$ = { class: "mt-0.5 text-xl font-bold text-amber-400" }, d$ = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, c$ = { class: "mt-0.5 text-xl font-bold text-red-400" }, f$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, p$ = { class: "relative max-w-sm flex-1" }, h$ = { class: "flex-1 overflow-y-auto p-6" }, m$ = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, v$ = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, g$ = { class: "w-full text-left text-xs" }, y$ = { class: "divide-y divide-zinc-800/60" }, b$ = { class: "px-4 py-3" }, x$ = { class: "font-medium text-white" }, w$ = ["title"], _$ = { class: "px-4 py-3 font-mono text-zinc-300" }, k$ = { class: "px-4 py-3" }, S$ = { class: "px-4 py-3 text-right text-zinc-400" }, E$ = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(null), a = G([]), s = G(!0), l = G(!1), c = G(""), u = G(""), d = G(""), f = J(() => {
      const h = u.value.trim().toLowerCase();
      return a.value.filter((b) => d.value && b.status !== d.value ? !1 : !h || `${b.name || ""} ${b.phone}`.toLowerCase().includes(h));
    }), v = (h) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[h] || "border-blue-500/20 bg-blue-500/10 text-blue-400", y = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const h = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(h / o.value.total_recipients * 100));
    });
    async function m() {
      s.value = !0, c.value = "";
      try {
        const h = await ze.campaign(n.campaignId);
        o.value = h.campaign, a.value = h.sends || [];
      } catch (h) {
        c.value = h.message;
      } finally {
        s.value = !1;
      }
    }
    async function p() {
      l.value = !0, c.value = "";
      try {
        await ze.cancelCampaign(n.campaignId), r("changed"), await m();
      } catch (h) {
        c.value = h.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(m), (h, b) => (E(), A("div", Iz, [
      i("div", Dz, [
        i("div", Fz, [
          i("div", Bz, [
            i("div", Lz, [
              X(N(Hr), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              i("div", Uz, L(o.value?.name || "Campanha"), 1),
              i("p", Vz, [
                i("span", null, L(o.value ? N(zp)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (E(), A("span", qz, " • " + L(o.value.message), 1)) : te("", !0)
              ])
            ])
          ]),
          i("div", jz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (E(), A("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              X(N(Ph), { class: "h-3.5 w-3.5" }),
              i("span", null, L(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, Hz)) : te("", !0),
            i("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: b[0] || (b[0] = ($) => r("close"))
            }, [
              X(N(Ot), { class: "h-4 w-4" })
            ])
          ])
        ]),
        s.value ? (E(), A("p", Gz, "Carregando detalhes…")) : c.value ? (E(), A("p", Wz, L(c.value), 1)) : o.value ? (E(), A(ue, { key: 2 }, [
          i("div", Xz, [
            i("div", Yz, [
              i("div", Kz, [
                o.value.status === "running" ? (E(), A("span", Zz, [...b[3] || (b[3] = [
                  i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  i("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : te("", !0),
                i("span", Jz, L(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              i("span", Qz, L(y.value) + "%", 1)
            ]),
            i("div", e$, [
              i("div", {
                class: W(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${y.value}%` })
              }, null, 6)
            ]),
            i("div", t$, [
              i("span", null, L(o.value.sent_count) + " de " + L(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (E(), A("span", n$, " 🛡️ Intervalo randômico (jitter) ativo ")) : te("", !0)
            ])
          ]),
          i("div", r$, [
            i("div", o$, [
              b[4] || (b[4] = i("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              i("div", a$, L(o.value.total_recipients), 1)
            ]),
            i("div", s$, [
              b[5] || (b[5] = i("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              i("div", i$, L(o.value.sent_count), 1)
            ]),
            i("div", l$, [
              b[6] || (b[6] = i("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              i("div", u$, L(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            i("div", d$, [
              b[7] || (b[7] = i("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              i("div", c$, L(o.value.error_count), 1)
            ])
          ]),
          i("div", f$, [
            i("div", p$, [
              X(N(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ee(i("input", {
                "onUpdate:modelValue": b[1] || (b[1] = ($) => u.value = $),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [be, u.value]
              ])
            ]),
            ee(i("select", {
              "onUpdate:modelValue": b[2] || (b[2] = ($) => d.value = $),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...b[8] || (b[8] = [
              Hc('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [tt, d.value]
            ])
          ]),
          i("div", h$, [
            f.value.length ? (E(), A("div", v$, [
              i("table", g$, [
                b[9] || (b[9] = i("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  i("tr", null, [
                    i("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    i("th", { class: "px-4 py-2.5" }, "Telefone"),
                    i("th", { class: "px-4 py-2.5" }, "Status"),
                    i("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                i("tbody", y$, [
                  (E(!0), A(ue, null, Ne(f.value, ($) => (E(), A("tr", {
                    key: $.id
                  }, [
                    i("td", b$, [
                      i("div", x$, L($.name || "—"), 1),
                      $.error_message ? (E(), A("div", {
                        key: 0,
                        title: $.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, L($.error_message), 9, w$)) : te("", !0)
                    ]),
                    i("td", _$, L($.phone), 1),
                    i("td", k$, [
                      i("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v($.status)])
                      }, L(N(uw)[$.status] || $.status), 3)
                    ]),
                    i("td", S$, L($.sent_at ? new Date($.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (E(), A("div", m$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : te("", !0)
      ])
    ]));
  }
}, z$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, $$ = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, P$ = { class: "relative w-64" }, C$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, A$ = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, T$ = {
  key: 2,
  class: "py-10 text-center"
}, O$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, N$ = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, R$ = { class: "w-full text-left text-xs" }, M$ = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, I$ = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, D$ = { class: "px-3 py-2.5" }, F$ = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, B$ = { class: "px-3 py-2.5" }, L$ = { class: "px-3 py-2.5" }, U$ = { class: "flex items-center gap-2" }, V$ = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, q$ = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, j$ = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, H$ = { class: "px-3 py-2.5" }, G$ = ["onClick"], W$ = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(!1), s = G(null), l = (d) => ({
      completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      cancelled: "border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      scheduled: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400"
    })[d] || "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400", c = J(() => {
      const d = o.value.trim().toLowerCase();
      return d ? t.value.filter((f) => f.name.toLowerCase().includes(d)) : t.value;
    });
    async function u() {
      n.value = !0, r.value = "";
      try {
        t.value = (await ze.campaigns()).campaigns || [];
      } catch (d) {
        r.value = d.message;
      } finally {
        n.value = !1;
      }
    }
    return Ke(u), (d, f) => (E(), A("div", z$, [
      i("div", $$, [
        i("div", P$, [
          X(N(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ee(i("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (v) => o.value = v),
            type: "text",
            placeholder: "Buscar campanhas...",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [be, o.value]
          ])
        ]),
        i("button", {
          type: "button",
          class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
          onClick: f[1] || (f[1] = (v) => a.value = !0)
        }, [
          X(N(af), { class: "h-4 w-4" }),
          f[4] || (f[4] = i("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (E(), A("p", C$, L(r.value), 1)) : te("", !0),
      n.value ? (E(), A("div", A$, [
        X(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = i("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : c.value.length ? (E(), A("div", N$, [
        i("table", R$, [
          f[9] || (f[9] = i("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            i("tr", null, [
              i("th", { class: "px-3 py-2.5" }, "Campanha"),
              i("th", { class: "px-3 py-2.5" }, "Status"),
              i("th", { class: "px-3 py-2.5" }, "Destinatários"),
              i("th", { class: "px-3 py-2.5" }, "Enviados"),
              i("th", { class: "px-3 py-2.5" }, "Falhas"),
              i("th", { class: "px-3 py-2.5" }, "Agendada para"),
              i("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          i("tbody", M$, [
            (E(!0), A(ue, null, Ne(c.value, (v) => (E(), A("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", I$, L(v.name), 1),
              i("td", D$, [
                i("span", {
                  class: W(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(v.status)])
                }, [
                  v.status === "running" ? (E(), A("span", F$, [...f[7] || (f[7] = [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    i("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : te("", !0),
                  ye(" " + L(N(zp)[v.status] || v.status), 1)
                ], 2)
              ]),
              i("td", B$, L(v.total_recipients), 1),
              i("td", L$, [
                i("div", U$, [
                  i("span", V$, L(v.sent_count) + "/" + L(v.total_recipients), 1),
                  i("div", q$, [
                    i("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              i("td", {
                class: W(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, L(v.error_count), 3),
              i("td", j$, L(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              i("td", H$, [
                i("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => s.value = v.id
                }, [
                  X(N(Ah), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = i("span", null, "Detalhes", -1))
                ], 8, G$)
              ])
            ]))), 128))
          ])
        ])
      ])) : (E(), A("div", T$, [
        i("div", O$, [
          X(N(Ct), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (E(), Ce(Mz, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => a.value = !1),
        onCreated: u
      })) : te("", !0),
      s.value ? (E(), Ce(E$, {
        key: 5,
        "campaign-id": s.value,
        onClose: f[3] || (f[3] = (v) => s.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : te("", !0)
    ]));
  }
}, X$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Y$ = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, K$ = ["disabled"], Z$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, J$ = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, Q$ = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, e3 = {
  key: 3,
  class: "py-10 text-center"
}, t3 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, n3 = {
  key: 4,
  class: "mt-4 space-y-2"
}, r3 = { class: "flex items-center gap-3" }, o3 = { class: "font-semibold text-zinc-900 dark:text-white" }, a3 = { class: "text-zinc-500 dark:text-zinc-400" }, s3 = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, i3 = ["title"], l3 = ["title"], u3 = { class: "flex items-center gap-2" }, d3 = ["disabled", "onClick"], c3 = {
  __name: "RunsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(null), s = (d) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[d] || "bg-amber-500", l = (d) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[d] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function c() {
      n.value = !0, r.value = "";
      try {
        t.value = (await ze.runs()).runs || [];
      } catch (d) {
        r.value = d.message;
      } finally {
        n.value = !1;
      }
    }
    async function u(d) {
      if (window.confirm("Tentar novamente do início do fluxo? Blocos de mensagem já entregues antes da falha podem ser reenviados.")) {
        a.value = d.id, r.value = "", o.value = "";
        try {
          await ze.retryRun(d.id), o.value = `Execução #${d.id} reiniciada.`, await c();
        } catch (f) {
          r.value = f.message;
        } finally {
          a.value = null;
        }
      }
    }
    return Ke(c), (d, f) => (E(), A("div", X$, [
      i("div", Y$, [
        f[0] || (f[0] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        i("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: c
        }, " Atualizar ", 8, K$)
      ]),
      r.value ? (E(), A("p", Z$, L(r.value), 1)) : o.value ? (E(), A("p", J$, L(o.value), 1)) : te("", !0),
      n.value ? (E(), A("div", Q$, [
        X(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = i("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (E(), A("div", n3, [
        (E(!0), A(ue, null, Ne(t.value, (v) => (E(), A("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          i("div", r3, [
            i("span", {
              class: W(["h-2 w-2 rounded-full", s(v.status)])
            }, null, 2),
            i("div", null, [
              i("div", o3, "Fluxo #" + L(v.flow_id), 1),
              i("div", a3, L(N(Vo)(v.event_class)) + " • " + L(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (E(), A("div", s3, [
                X(N(Oh), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                i("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + L(v.context.last_reply) + "”", 9, i3)
              ])) : te("", !0),
              v.last_error ? (E(), A("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, L(v.last_error), 9, l3)) : te("", !0)
            ])
          ]),
          i("div", u3, [
            v.status === "failed" ? (E(), A("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === v.id,
              onClick: (y) => u(v)
            }, [
              X(N(Rh), {
                class: W(["h-3 w-3", { "animate-spin": a.value === v.id }])
              }, null, 8, ["class"]),
              i("span", null, L(a.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, d3)) : te("", !0),
            i("span", {
              class: W(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(v.status)])
            }, L(N(dw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (E(), A("div", e3, [
        i("div", t3, [
          X(N(tf), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, f3 = { class: "mx-auto max-w-6xl space-y-6" }, p3 = { class: "flex items-center justify-between" }, h3 = { class: "inline-flex rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5 dark:border-zinc-800 dark:bg-zinc-900" }, m3 = { class: "hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400" }, v3 = { class: "flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900" }, g3 = { class: "flex items-center gap-4" }, y3 = { class: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400" }, b3 = { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, x3 = { class: "text-xs text-zinc-600 dark:text-zinc-400" }, w3 = { class: "flex items-center gap-3" }, _3 = { class: "relative inline-flex cursor-pointer items-center" }, k3 = {
  key: 0,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, S3 = {
  key: 1,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, E3 = {
  key: 2,
  class: "flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300"
}, z3 = {
  key: 3,
  class: "flex h-64 items-center justify-center"
}, $3 = {
  key: 4,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, P3 = { class: "space-y-6 lg:col-span-7" }, C3 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, A3 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, T3 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, O3 = { class: "mt-6 space-y-4" }, N3 = { class: "mt-1.5 grid grid-cols-2 gap-2" }, R3 = { key: 0 }, M3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, I3 = {
  key: 1,
  class: "space-y-2"
}, D3 = { class: "flex items-center justify-between" }, F3 = { class: "flex items-center gap-2" }, B3 = ["disabled"], L3 = { key: 0 }, U3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V3 = ["value"], q3 = { key: 1 }, j3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, H3 = { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, G3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, W3 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, X3 = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, Y3 = { class: "flex items-center justify-between" }, K3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, Z3 = {
  key: 0,
  class: "mt-3 space-y-2"
}, J3 = { class: "flex flex-wrap gap-1.5" }, Q3 = ["title", "onClick"], e4 = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, t4 = ["disabled"], n4 = ["disabled"], r4 = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, o4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, a4 = { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, s4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, i4 = { class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-center shadow-xs dark:border-emerald-500/30 dark:bg-emerald-500/10" }, l4 = { class: "text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center justify-center gap-1" }, u4 = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, d4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, c4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, f4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, p4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, h4 = { class: "lg:col-span-5" }, m4 = { class: "overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, v4 = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, g4 = { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, y4 = { key: 1 }, b4 = { class: "flex-1" }, x4 = { class: "text-xs font-bold leading-tight" }, w4 = { class: "text-[10px] text-white/70" }, _4 = { class: "min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, k4 = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, S4 = { class: "font-sans whitespace-pre-wrap select-text" }, E4 = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, z4 = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, $4 = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = G("daily"), n = G(!0), r = G(!1), o = G(!1), a = G(!1), s = G(""), l = G(""), c = G(""), u = G([]), d = G("list"), f = Un({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), v = G(!1), y = G(""), m = G(null), p = Un({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), h = G(!1), b = G(""), $ = G(null), k = [
      { tag: "{{date}}", label: "Data / Período do relatório" },
      { tag: "{{total_formatted}}", label: "Faturamento bruto total" },
      { tag: "{{net_total_formatted}}", label: "Valor líquido total" },
      { tag: "{{orders_count}}", label: "Vendas aprovadas" },
      { tag: "{{ticket_medio_formatted}}", label: "Ticket médio bruto" },
      { tag: "{{ticket_medio_liquido_formatted}}", label: "Ticket médio líquido" },
      { tag: "{{pending_total_formatted}}", label: "Valor pendente" },
      { tag: "{{pending_count}}", label: "Qtd pedidos pendentes" },
      { tag: "{{refunded_count}}", label: "Qtd reembolsos" },
      { tag: "{{refunded_total_formatted}}", label: "Valor reembolsado" },
      { tag: "{{payment_methods_text}}", label: "Formas de pagamento" },
      { tag: "{{products_text}}", label: "Produtos vendidos" },
      { tag: "{{bumps_section}}", label: "Order Bumps vendidos" }
    ], P = J(() => t.value === "daily" ? f : p), C = J(() => t.value === "daily" ? y.value : b.value), _ = J(() => t.value === "daily" ? m.value : $.value), g = J({
      get: () => t.value === "daily" ? v.value : h.value,
      set: (R) => {
        t.value === "daily" ? v.value = R : h.value = R;
      }
    });
    async function S() {
      a.value = !0;
      try {
        const R = await ze.groups();
        u.value = R.groups || [], u.value.length === 0 && (d.value = "manual");
      } catch {
        u.value = [], d.value = "manual";
      } finally {
        a.value = !1;
      }
    }
    async function U() {
      n.value = !0, s.value = "";
      try {
        const R = await ze.dailyReport();
        f.enabled = !!R.config?.enabled, f.time = R.config?.time || "23:59", f.recipient_type = R.config?.recipient_type || "phone", f.phone = R.config?.phone || "", f.group_id = R.config?.group_id || "", f.custom_template = R.config?.custom_template || "", v.value = !!R.config?.custom_template, y.value = R.preview || "", m.value = R.data || null;
        const x = R.weekly_config || {};
        p.enabled = !!x.enabled, p.time = x.time || "23:59", p.recipient_type = x.recipient_type || f.recipient_type || "phone", p.phone = x.phone || f.phone || "", p.group_id = x.group_id || f.group_id || "", p.custom_template = x.custom_template || "", h.value = !!x.custom_template, b.value = R.weekly_preview || "", $.value = R.weekly_data || null, await S();
      } catch (R) {
        s.value = R.message || "Falha ao carregar configurações dos relatórios.";
      } finally {
        n.value = !1;
      }
    }
    async function I() {
      r.value = !0, s.value = "", l.value = "";
      try {
        if (t.value === "daily") {
          const R = await ze.saveDailyReport({
            enabled: f.enabled,
            time: f.time,
            recipient_type: f.recipient_type,
            phone: f.phone,
            group_id: f.group_id,
            custom_template: v.value ? f.custom_template : null
          });
          y.value = R.preview || y.value, l.value = "Configurações do relatório diário salvas com sucesso!";
        } else {
          const R = await ze.saveWeeklyReport({
            enabled: p.enabled,
            time: p.time,
            recipient_type: p.recipient_type,
            phone: p.phone,
            group_id: p.group_id,
            custom_template: h.value ? p.custom_template : null
          });
          b.value = R.preview || b.value, l.value = "Configurações do relatório semanal (segunda a domingo) salvas com sucesso!";
        }
        setTimeout(() => {
          l.value = "";
        }, 5e3);
      } catch (R) {
        s.value = R.message || "Erro ao salvar configurações.";
      } finally {
        r.value = !1;
      }
    }
    async function D() {
      const R = P.value;
      if (R.recipient_type === "group") {
        if (!R.group_id) {
          s.value = "Selecione ou informe o JID do grupo do WhatsApp antes de testar.";
          return;
        }
      } else if (!R.phone) {
        s.value = "Informe o número do WhatsApp de destino antes de testar.";
        return;
      }
      o.value = !0, s.value = "", c.value = "";
      try {
        if (t.value === "daily") {
          const x = await ze.testDailyReport({
            recipient_type: R.recipient_type,
            phone: R.phone,
            group_id: R.group_id
          });
          c.value = x.message || "Relatório diário de teste enviado para o WhatsApp!", x.preview && (y.value = x.preview);
        } else {
          const x = await ze.testWeeklyReport({
            recipient_type: R.recipient_type,
            phone: R.phone,
            group_id: R.group_id
          });
          c.value = x.message || "Relatório semanal de teste enviado para o WhatsApp!", x.preview && (b.value = x.preview);
        }
        setTimeout(() => {
          c.value = "";
        }, 8e3);
      } catch (x) {
        s.value = x.message || "Falha ao disparar relatório de teste.";
      } finally {
        o.value = !1;
      }
    }
    function T(R) {
      t.value === "daily" ? f.custom_template = (f.custom_template || "") + " " + R : p.custom_template = (p.custom_template || "") + " " + R;
    }
    const V = J(() => (C.value || "").split(`
`)), z = J(() => {
      if (P.value.recipient_type !== "group") return "";
      const R = u.value.find((x) => x.id === P.value.group_id);
      return R ? R.name : P.value.group_id || "Grupo de Vendas";
    });
    return Ke(U), (R, x) => (E(), A("div", f3, [
      i("div", p3, [
        i("div", h3, [
          i("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", t.value === "daily" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: x[0] || (x[0] = (O) => t.value = "daily")
          }, [
            X(N(Io), { class: "h-4 w-4" }),
            x[12] || (x[12] = i("span", null, "Relatório Diário", -1))
          ], 2),
          i("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", t.value === "weekly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: x[1] || (x[1] = (O) => t.value = "weekly")
          }, [
            X(N(Zl), { class: "h-4 w-4" }),
            x[13] || (x[13] = i("span", null, "Relatório Semanal (Domingos)", -1))
          ], 2)
        ]),
        i("div", m3, [
          X(N(In), { class: "h-3.5 w-3.5 text-emerald-500" }),
          x[14] || (x[14] = i("span", null, [
            ye("Horário padrão: "),
            i("strong", null, "23:59")
          ], -1))
        ])
      ]),
      i("div", v3, [
        i("div", g3, [
          i("div", y3, [
            t.value === "daily" ? (E(), Ce(N(Zc), {
              key: 0,
              class: "h-7 w-7"
            })) : (E(), Ce(N(Zl), {
              key: 1,
              class: "h-7 w-7"
            }))
          ]),
          i("div", null, [
            i("h2", b3, L(t.value === "daily" ? "Relatório Diário de Vendas no WhatsApp" : "Relatório Semanal de Vendas no WhatsApp"), 1),
            i("p", x3, [
              t.value === "daily" ? (E(), A(ue, { key: 0 }, [
                x[15] || (x[15] = ye(" Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas com ", -1)),
                x[16] || (x[16] = i("strong", null, "faturamento bruto e valor líquido", -1)),
                x[17] || (x[17] = ye(". ", -1))
              ], 64)) : (E(), A(ue, { key: 1 }, [
                x[18] || (x[18] = ye(" Receba automaticamente todo ", -1)),
                x[19] || (x[19] = i("strong", null, "domingo às 23:59", -1)),
                x[20] || (x[20] = ye(" o consolidado de vendas de ", -1)),
                x[21] || (x[21] = i("strong", null, "segunda-feira a domingo", -1)),
                x[22] || (x[22] = ye(" com faturamento bruto e líquido. ", -1))
              ], 64))
            ])
          ])
        ]),
        i("div", w3, [
          i("span", {
            class: W(["text-xs font-semibold", P.value.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, L(P.value.enabled ? "● Envio Ativo" : "○ Envio Desativado"), 3),
          i("label", _3, [
            ee(i("input", {
              "onUpdate:modelValue": x[2] || (x[2] = (O) => P.value.enabled = O),
              type: "checkbox",
              class: "peer sr-only",
              onChange: I
            }, null, 544), [
              [An, P.value.enabled]
            ]),
            x[23] || (x[23] = i("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      l.value ? (E(), A("div", k3, [
        X(N(jr), { class: "h-5 w-5 shrink-0" }),
        i("span", null, L(l.value), 1)
      ])) : te("", !0),
      c.value ? (E(), A("div", S3, [
        X(N(Ct), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        i("span", null, L(c.value), 1)
      ])) : te("", !0),
      s.value ? (E(), A("div", E3, [
        X(N(ka), { class: "h-5 w-5 shrink-0" }),
        i("span", null, L(s.value), 1)
      ])) : te("", !0),
      n.value ? (E(), A("div", z3, [
        X(N(Dt), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (E(), A("div", $3, [
        i("div", P3, [
          i("div", C3, [
            i("h3", A3, [
              X(N(In), { class: "h-4 w-4 text-emerald-500" }),
              ye(" " + L(t.value === "daily" ? "Agendamento & Destino Diário" : "Agendamento & Destino Semanal"), 1)
            ]),
            i("p", T3, L(t.value === "daily" ? "Defina o horário e para quem o relatório diário consolidado será entregue (número ou grupo)." : "O relatório semanal é disparado todo domingo com o acumulado de vendas de segunda a domingo."), 1),
            i("div", O3, [
              i("div", null, [
                x[26] || (x[26] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Enviar Para * ", -1)),
                i("div", N3, [
                  i("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", P.value.recipient_type === "phone" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: x[3] || (x[3] = (O) => P.value.recipient_type = "phone")
                  }, [
                    X(N(eu), { class: "h-3.5 w-3.5" }),
                    x[24] || (x[24] = i("span", null, "Número Individual", -1))
                  ], 2),
                  i("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", P.value.recipient_type === "group" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: x[4] || (x[4] = () => {
                      P.value.recipient_type = "group", u.value.length || S();
                    })
                  }, [
                    X(N(Nn), { class: "h-3.5 w-3.5" }),
                    x[25] || (x[25] = i("span", null, "Grupo do WhatsApp", -1))
                  ], 2)
                ])
              ]),
              P.value.recipient_type === "phone" ? (E(), A("div", R3, [
                x[27] || (x[27] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                i("div", M3, [
                  X(N(eu), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ee(i("input", {
                    "onUpdate:modelValue": x[5] || (x[5] = (O) => P.value.phone = O),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [be, P.value.phone]
                  ])
                ]),
                x[28] || (x[28] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ])) : (E(), A("div", I3, [
                i("div", D3, [
                  x[31] || (x[31] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Grupo de Destino * ", -1)),
                  i("div", F3, [
                    i("button", {
                      type: "button",
                      class: "flex items-center gap-1 text-[11px] font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400",
                      disabled: a.value,
                      onClick: S
                    }, [
                      X(N(sf), {
                        class: W(["h-3 w-3", a.value ? "animate-spin" : ""])
                      }, null, 8, ["class"]),
                      x[29] || (x[29] = i("span", null, "Recarregar Grupos", -1))
                    ], 8, B3),
                    x[30] || (x[30] = i("span", { class: "text-zinc-300 dark:text-zinc-700" }, "|", -1)),
                    i("button", {
                      type: "button",
                      class: "text-[11px] font-semibold text-zinc-600 transition hover:underline dark:text-zinc-400",
                      onClick: x[6] || (x[6] = (O) => d.value = d.value === "list" ? "manual" : "list")
                    }, L(d.value === "list" ? "Digitar JID" : "Escolher da lista"), 1)
                  ])
                ]),
                d.value === "list" && u.value.length > 0 ? (E(), A("div", L3, [
                  i("div", U3, [
                    X(N(Nn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ee(i("select", {
                      "onUpdate:modelValue": x[7] || (x[7] = (O) => P.value.group_id = O),
                      class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                    }, [
                      x[32] || (x[32] = i("option", { value: "" }, "Selecione um grupo da Evolution GO...", -1)),
                      (E(!0), A(ue, null, Ne(u.value, (O) => (E(), A("option", {
                        key: O.id,
                        value: O.id
                      }, L(O.name), 9, V3))), 128))
                    ], 512), [
                      [tt, P.value.group_id]
                    ])
                  ])
                ])) : (E(), A("div", q3, [
                  i("div", j3, [
                    X(N(Nn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ee(i("input", {
                      "onUpdate:modelValue": x[8] || (x[8] = (O) => P.value.group_id = O),
                      type: "text",
                      placeholder: "Ex: 120363025244589234@g.us",
                      class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                    }, null, 512), [
                      [be, P.value.group_id]
                    ])
                  ]),
                  x[33] || (x[33] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                    ye(" Insira o JID oficial do grupo do WhatsApp (terminado em "),
                    i("code", null, "@g.us"),
                    ye("). ")
                  ], -1))
                ]))
              ])),
              i("div", null, [
                i("label", H3, L(t.value === "daily" ? "Horário de Disparo Diário *" : "Horário de Disparo aos Domingos *"), 1),
                i("div", G3, [
                  X(N(In), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ee(i("input", {
                    "onUpdate:modelValue": x[9] || (x[9] = (O) => P.value.time = O),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [be, P.value.time]
                  ])
                ]),
                i("p", W3, [
                  t.value === "daily" ? (E(), A(ue, { key: 0 }, [
                    x[34] || (x[34] = ye(" Padrão sugerido: ", -1)),
                    x[35] || (x[35] = i("strong", null, "23:59", -1)),
                    x[36] || (x[36] = ye(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ", -1))
                  ], 64)) : (E(), A(ue, { key: 1 }, [
                    x[37] || (x[37] = ye(" Padrão sugerido: ", -1)),
                    x[38] || (x[38] = i("strong", null, "23:59 aos domingos", -1)),
                    x[39] || (x[39] = ye(". O relatório consolidará as vendas de ", -1)),
                    x[40] || (x[40] = i("strong", null, "segunda-feira a domingo", -1)),
                    x[41] || (x[41] = ye(". ", -1))
                  ], 64))
                ])
              ]),
              i("div", X3, [
                i("div", Y3, [
                  i("div", null, [
                    x[42] || (x[42] = i("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    i("p", K3, L(g.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  i("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: x[10] || (x[10] = (O) => g.value = !g.value)
                  }, L(g.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                g.value ? (E(), A("div", Z3, [
                  i("div", J3, [
                    (E(), A(ue, null, Ne(k, (O) => i("button", {
                      key: O.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: O.label,
                      onClick: (w) => T(O.tag)
                    }, L(O.tag), 9, Q3)), 64))
                  ]),
                  ee(i("textarea", {
                    "onUpdate:modelValue": x[11] || (x[11] = (O) => P.value.custom_template = O),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [be, P.value.custom_template]
                  ])
                ])) : te("", !0)
              ]),
              i("div", e4, [
                i("button", {
                  type: "button",
                  disabled: r.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: I
                }, [
                  r.value ? (E(), Ce(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (E(), Ce(N(jr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  x[43] || (x[43] = ye(" Salvar Configurações ", -1))
                ], 8, t4),
                i("button", {
                  type: "button",
                  disabled: o.value || (P.value.recipient_type === "group" ? !P.value.group_id : !P.value.phone),
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: D
                }, [
                  o.value ? (E(), Ce(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (E(), Ce(N(Ct), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  i("span", null, L(P.value.recipient_type === "group" ? "Enviar Teste ao Grupo" : "Enviar Teste"), 1)
                ], 8, n4)
              ])
            ])
          ]),
          _.value ? (E(), A("div", r4, [
            i("div", o4, [
              i("span", a4, L(t.value === "daily" ? "Bruto Hoje" : "Bruto Semana"), 1),
              i("div", s4, L(_.value.total_formatted), 1)
            ]),
            i("div", i4, [
              i("span", l4, [
                X(N(Fh), { class: "h-3 w-3" }),
                ye(" " + L(t.value === "daily" ? "Líquido Hoje" : "Líquido Semana"), 1)
              ]),
              i("div", u4, L(_.value.net_total_formatted), 1)
            ]),
            i("div", d4, [
              x[44] || (x[44] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Vendas Aprovadas ", -1)),
              i("div", c4, L(_.value.orders_count), 1)
            ]),
            i("div", f4, [
              x[45] || (x[45] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Order Bumps ", -1)),
              i("div", p4, L(_.value.bumps_count) + " (" + L(_.value.bumps_total_formatted) + ") ", 1)
            ])
          ])) : te("", !0)
        ]),
        i("div", h4, [
          i("div", m4, [
            i("div", v4, [
              i("div", g4, [
                P.value.recipient_type === "group" ? (E(), Ce(N(Nn), {
                  key: 0,
                  class: "h-4 w-4"
                })) : (E(), A("span", y4, "ZR"))
              ]),
              i("div", b4, [
                i("div", x4, L(P.value.recipient_type === "group" ? z.value : "ZapRei Notificações"), 1),
                i("div", w4, L(P.value.recipient_type === "group" ? "grupo do WhatsApp" : t.value === "daily" ? "relatório diário automático" : "relatório semanal aos domingos"), 1)
              ]),
              X(N(ol), { class: "h-4 w-4 text-emerald-300" })
            ]),
            i("div", _4, [
              i("div", k4, [
                i("div", S4, [
                  (E(!0), A(ue, null, Ne(V.value, (O, w) => (E(), A("div", {
                    key: w,
                    class: "min-h-[1.2em]"
                  }, L(O), 1))), 128))
                ]),
                i("div", E4, [
                  i("span", null, L(P.value.time || "23:59"), 1),
                  x[46] || (x[46] = i("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            i("div", z4, [
              t.value === "daily" ? (E(), A(ue, { key: 0 }, [
                x[47] || (x[47] = ye(" Disparo automático diário via ", -1)),
                x[48] || (x[48] = i("strong", null, "Evolution GO", -1)),
                ye(" às " + L(f.time), 1)
              ], 64)) : (E(), A(ue, { key: 1 }, [
                x[49] || (x[49] = ye(" Disparo automático aos ", -1)),
                x[50] || (x[50] = i("strong", null, "domingos", -1)),
                x[51] || (x[51] = ye(" via ", -1)),
                x[52] || (x[52] = i("strong", null, "Evolution GO", -1)),
                ye(" às " + L(p.time) + " (vendas de segunda a domingo) ", 1)
              ], 64))
            ])
          ])
        ])
      ]))
    ]));
  }
}, P4 = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, C4 = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, A4 = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, T4 = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, O4 = { class: "flex flex-wrap items-center gap-3" }, N4 = { class: "text-xs font-bold" }, R4 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, M4 = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, I4 = { class: "flex items-center justify-between" }, D4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, F4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, B4 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, L4 = { class: "flex items-center justify-between" }, U4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, V4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, q4 = { class: "flex items-center justify-between" }, j4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, H4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, G4 = { class: "flex items-center justify-between" }, W4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, X4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, Y4 = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, K4 = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, Z4 = ["onClick"], J4 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, Q4 = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: qn, component: $S },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Ct, component: W$ },
      { id: "daily_report", label: "Relatórios de Vendas", icon: Zc, component: $4 },
      { id: "contacts", label: "Base de Contatos", icon: Nn, component: lE },
      { id: "runs", label: "Execuções", icon: tf, component: c3 },
      { id: "connection", label: "Conexão", icon: of, component: df }
    ], n = G("flows"), r = G(null), o = G({ flows: 0, campaigns: 0, contacts: 0 }), a = G({
      flowsCount: 0,
      activeFlowsCount: 0,
      campaignsCount: 0,
      contactsCount: 0,
      runsCount: 0,
      runsSuccessRate: 100
    });
    async function s() {
      try {
        r.value = (await ze.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function l() {
      try {
        const [u, d, f, v] = await Promise.all([
          ze.flows().catch(() => ({ flows: [] })),
          ze.campaigns().catch(() => ({ campaigns: [] })),
          ze.contacts().catch(() => ({ counts: {} })),
          ze.runs().catch(() => ({ runs: [] }))
        ]), y = u.flows || [], m = d.campaigns || [], p = v.runs || [], h = f.counts?.all || 0;
        o.value = {
          flows: y.length,
          campaigns: m.length,
          contacts: h
        };
        const b = y.filter((P) => P.is_active).length, $ = p.filter((P) => P.status === "completed").length, k = p.length ? Math.round($ / p.length * 100) : 100;
        a.value = {
          flowsCount: y.length,
          activeFlowsCount: b,
          campaignsCount: m.length,
          contactsCount: h,
          runsCount: p.length,
          runsSuccessRate: k
        };
      } catch {
      }
    }
    const c = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ke(() => {
      s(), l();
    }), (u, d) => (E(), A("div", P4, [
      i("div", C4, [
        i("div", A4, [
          i("div", null, [
            i("div", T4, [
              X(N(nf), { class: "h-3.5 w-3.5" }),
              d[5] || (d[5] = i("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            d[6] || (d[6] = i("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            d[7] || (d[7] = i("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          i("div", O4, [
            i("div", {
              class: W(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              i("div", {
                class: W(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              i("div", null, [
                i("div", N4, L(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                i("div", R4, L(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              i("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: d[0] || (d[0] = (f) => n.value = "connection")
              }, L(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        i("div", M4, [
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[1] || (d[1] = (f) => n.value = "flows")
          }, [
            i("div", I4, [
              d[8] || (d[8] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              i("div", D4, [
                X(N(qn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", F4, [
              ye(L(a.value.activeFlowsCount) + " ", 1),
              d[9] || (d[9] = i("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            i("div", B4, " de " + L(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[2] || (d[2] = (f) => n.value = "campaigns")
          }, [
            i("div", L4, [
              d[10] || (d[10] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              i("div", U4, [
                X(N(Ct), { class: "h-4 w-4" })
              ])
            ]),
            i("div", V4, L(a.value.campaignsCount), 1),
            d[11] || (d[11] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[3] || (d[3] = (f) => n.value = "contacts")
          }, [
            i("div", q4, [
              d[12] || (d[12] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              i("div", j4, [
                X(N(Nn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", H4, L(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            d[13] || (d[13] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[4] || (d[4] = (f) => n.value = "runs")
          }, [
            i("div", G4, [
              d[14] || (d[14] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              i("div", W4, [
                X(N(zh), { class: "h-4 w-4" })
              ])
            ]),
            i("div", X4, [
              ye(L(a.value.runsCount) + " ", 1),
              d[15] || (d[15] = i("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            i("div", Y4, [
              d[16] || (d[16] = i("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              i("span", null, L(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        i("div", K4, [
          (E(), A(ue, null, Ne(t, (f) => i("button", {
            key: f.id,
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            (E(), Ce(Rt(f.icon), { class: "h-4 w-4" })),
            i("span", null, L(f.label), 1),
            c(f.id) !== null && c(f.id) > 0 ? (E(), A("span", {
              key: 0,
              class: W(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, L(c(f.id)), 3)) : te("", !0)
          ], 10, Z4)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (E(), A("p", J4, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : te("", !0),
      (E(), Ce(Rt(t.find((f) => f.id === n.value).component), _a({ key: n.value }, xh(n.value === "connection" ? { saved: s } : {})), null, 16))
    ]));
  }
}, eP = { class: "space-y-4" }, tP = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (E(), A("div", eP, [
      X(df, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = i("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          ye(" Fluxos, contatos e campanhas ficam no menu "),
          i("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          ye(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Ap = typeof global == "object" && global && global.Object === Object && global, nP = typeof self == "object" && self && self.Object === Object && self, Lt = Ap || nP || Function("return this")(), Jt = Lt.Symbol, Tp = Object.prototype, rP = Tp.hasOwnProperty, oP = Tp.toString, zr = Jt ? Jt.toStringTag : void 0;
function aP(e) {
  var t = rP.call(e, zr), n = e[zr];
  try {
    e[zr] = void 0;
    var r = !0;
  } catch {
  }
  var o = oP.call(e);
  return r && (t ? e[zr] = n : delete e[zr]), o;
}
var sP = Object.prototype, iP = sP.toString;
function lP(e) {
  return iP.call(e);
}
var uP = "[object Null]", dP = "[object Undefined]", Gu = Jt ? Jt.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? dP : uP : Gu && Gu in Object(e) ? aP(e) : lP(e);
}
function Qt(e) {
  return e != null && typeof e == "object";
}
var cP = "[object Symbol]";
function Ra(e) {
  return typeof e == "symbol" || Qt(e) && Yn(e) == cP;
}
function fP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ft = Array.isArray, Wu = Jt ? Jt.prototype : void 0, Xu = Wu ? Wu.toString : void 0;
function Op(e) {
  if (typeof e == "string")
    return e;
  if (Ft(e))
    return fP(e, Op) + "";
  if (Ra(e))
    return Xu ? Xu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var pP = /\s/;
function hP(e) {
  for (var t = e.length; t-- && pP.test(e.charAt(t)); )
    ;
  return t;
}
var mP = /^\s+/;
function vP(e) {
  return e && e.slice(0, hP(e) + 1).replace(mP, "");
}
function kt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yu = NaN, gP = /^[-+]0x[0-9a-f]+$/i, yP = /^0b[01]+$/i, bP = /^0o[0-7]+$/i, xP = parseInt;
function Ku(e) {
  if (typeof e == "number")
    return e;
  if (Ra(e))
    return Yu;
  if (kt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = vP(e);
  var n = yP.test(e);
  return n || bP.test(e) ? xP(e.slice(2), n ? 2 : 8) : gP.test(e) ? Yu : +e;
}
function Np(e) {
  return e;
}
var wP = "[object AsyncFunction]", _P = "[object Function]", kP = "[object GeneratorFunction]", SP = "[object Proxy]";
function yl(e) {
  if (!kt(e))
    return !1;
  var t = Yn(e);
  return t == _P || t == kP || t == wP || t == SP;
}
var hs = Lt["__core-js_shared__"], Zu = (function() {
  var e = /[^.]+$/.exec(hs && hs.keys && hs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function EP(e) {
  return !!Zu && Zu in e;
}
var zP = Function.prototype, $P = zP.toString;
function Kn(e) {
  if (e != null) {
    try {
      return $P.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var PP = /[\\^$.*+?()[\]{}|]/g, CP = /^\[object .+?Constructor\]$/, AP = Function.prototype, TP = Object.prototype, OP = AP.toString, NP = TP.hasOwnProperty, RP = RegExp(
  "^" + OP.call(NP).replace(PP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function MP(e) {
  if (!kt(e) || EP(e))
    return !1;
  var t = yl(e) ? RP : CP;
  return t.test(Kn(e));
}
function IP(e, t) {
  return e?.[t];
}
function Zn(e, t) {
  var n = IP(e, t);
  return MP(n) ? n : void 0;
}
var Bi = Zn(Lt, "WeakMap"), Ju = Object.create, DP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!kt(t))
      return {};
    if (Ju)
      return Ju(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function FP(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function BP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var LP = 800, UP = 16, VP = Date.now;
function qP(e) {
  var t = 0, n = 0;
  return function() {
    var r = VP(), o = UP - (r - n);
    if (n = r, o > 0) {
      if (++t >= LP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function jP(e) {
  return function() {
    return e;
  };
}
var ca = (function() {
  try {
    var e = Zn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), HP = ca ? function(e, t) {
  return ca(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jP(t),
    writable: !0
  });
} : Np, GP = qP(HP);
function WP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var XP = 9007199254740991, YP = /^(?:0|[1-9]\d*)$/;
function Ma(e, t) {
  var n = typeof e;
  return t = t ?? XP, !!t && (n == "number" || n != "symbol" && YP.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bl(e, t, n) {
  t == "__proto__" && ca ? ca(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function uo(e, t) {
  return e === t || e !== e && t !== t;
}
var KP = Object.prototype, ZP = KP.hasOwnProperty;
function xl(e, t, n) {
  var r = e[t];
  (!(ZP.call(e, t) && uo(r, n)) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function JP(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], c = void 0;
    c === void 0 && (c = e[l]), o ? bl(n, l, c) : xl(n, l, c);
  }
  return n;
}
var Qu = Math.max;
function QP(e, t, n) {
  return t = Qu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Qu(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), FP(e, this, l);
  };
}
function eC(e, t) {
  return GP(QP(e, t, Np), e + "");
}
var tC = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tC;
}
function Ia(e) {
  return e != null && wl(e.length) && !yl(e);
}
function nC(e, t, n) {
  if (!kt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ia(n) && Ma(t, n.length) : r == "string" && t in n) ? uo(n[t], e) : !1;
}
function rC(e) {
  return eC(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && nC(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var oC = Object.prototype;
function _l(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || oC;
  return e === n;
}
function aC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var sC = "[object Arguments]";
function ed(e) {
  return Qt(e) && Yn(e) == sC;
}
var Rp = Object.prototype, iC = Rp.hasOwnProperty, lC = Rp.propertyIsEnumerable, fa = ed(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ed : function(e) {
  return Qt(e) && iC.call(e, "callee") && !lC.call(e, "callee");
};
function uC() {
  return !1;
}
var Mp = typeof exports == "object" && exports && !exports.nodeType && exports, td = Mp && typeof module == "object" && module && !module.nodeType && module, dC = td && td.exports === Mp, nd = dC ? Lt.Buffer : void 0, cC = nd ? nd.isBuffer : void 0, eo = cC || uC, fC = "[object Arguments]", pC = "[object Array]", hC = "[object Boolean]", mC = "[object Date]", vC = "[object Error]", gC = "[object Function]", yC = "[object Map]", bC = "[object Number]", xC = "[object Object]", wC = "[object RegExp]", _C = "[object Set]", kC = "[object String]", SC = "[object WeakMap]", EC = "[object ArrayBuffer]", zC = "[object DataView]", $C = "[object Float32Array]", PC = "[object Float64Array]", CC = "[object Int8Array]", AC = "[object Int16Array]", TC = "[object Int32Array]", OC = "[object Uint8Array]", NC = "[object Uint8ClampedArray]", RC = "[object Uint16Array]", MC = "[object Uint32Array]", Xe = {};
Xe[$C] = Xe[PC] = Xe[CC] = Xe[AC] = Xe[TC] = Xe[OC] = Xe[NC] = Xe[RC] = Xe[MC] = !0;
Xe[fC] = Xe[pC] = Xe[EC] = Xe[hC] = Xe[zC] = Xe[mC] = Xe[vC] = Xe[gC] = Xe[yC] = Xe[bC] = Xe[xC] = Xe[wC] = Xe[_C] = Xe[kC] = Xe[SC] = !1;
function IC(e) {
  return Qt(e) && wl(e.length) && !!Xe[Yn(e)];
}
function kl(e) {
  return function(t) {
    return e(t);
  };
}
var Ip = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Ip && typeof module == "object" && module && !module.nodeType && module, DC = Br && Br.exports === Ip, ms = DC && Ap.process, hr = (function() {
  try {
    var e = Br && Br.require && Br.require("util").types;
    return e || ms && ms.binding && ms.binding("util");
  } catch {
  }
})(), rd = hr && hr.isTypedArray, Sl = rd ? kl(rd) : IC, FC = Object.prototype, BC = FC.hasOwnProperty;
function Dp(e, t) {
  var n = Ft(e), r = !n && fa(e), o = !n && !r && eo(e), a = !n && !r && !o && Sl(e), s = n || r || o || a, l = s ? aC(e.length, String) : [], c = l.length;
  for (var u in e)
    (t || BC.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ma(u, c))) && l.push(u);
  return l;
}
function Fp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var LC = Fp(Object.keys, Object), UC = Object.prototype, VC = UC.hasOwnProperty;
function qC(e) {
  if (!_l(e))
    return LC(e);
  var t = [];
  for (var n in Object(e))
    VC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function jC(e) {
  return Ia(e) ? Dp(e) : qC(e);
}
function HC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var GC = Object.prototype, WC = GC.hasOwnProperty;
function XC(e) {
  if (!kt(e))
    return HC(e);
  var t = _l(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !WC.call(e, r)) || n.push(r);
  return n;
}
function Bp(e) {
  return Ia(e) ? Dp(e, !0) : XC(e);
}
var YC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KC = /^\w*$/;
function ZC(e, t) {
  if (Ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ra(e) ? !0 : KC.test(e) || !YC.test(e) || t != null && e in Object(t);
}
var to = Zn(Object, "create");
function JC() {
  this.__data__ = to ? to(null) : {}, this.size = 0;
}
function QC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var eA = "__lodash_hash_undefined__", tA = Object.prototype, nA = tA.hasOwnProperty;
function rA(e) {
  var t = this.__data__;
  if (to) {
    var n = t[e];
    return n === eA ? void 0 : n;
  }
  return nA.call(t, e) ? t[e] : void 0;
}
var oA = Object.prototype, aA = oA.hasOwnProperty;
function sA(e) {
  var t = this.__data__;
  return to ? t[e] !== void 0 : aA.call(t, e);
}
var iA = "__lodash_hash_undefined__";
function lA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = to && t === void 0 ? iA : t, this;
}
function Wn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Wn.prototype.clear = JC;
Wn.prototype.delete = QC;
Wn.prototype.get = rA;
Wn.prototype.has = sA;
Wn.prototype.set = lA;
function uA() {
  this.__data__ = [], this.size = 0;
}
function Da(e, t) {
  for (var n = e.length; n--; )
    if (uo(e[n][0], t))
      return n;
  return -1;
}
var dA = Array.prototype, cA = dA.splice;
function fA(e) {
  var t = this.__data__, n = Da(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cA.call(t, n, 1), --this.size, !0;
}
function pA(e) {
  var t = this.__data__, n = Da(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hA(e) {
  return Da(this.__data__, e) > -1;
}
function mA(e, t) {
  var n = this.__data__, r = Da(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fn.prototype.clear = uA;
fn.prototype.delete = fA;
fn.prototype.get = pA;
fn.prototype.has = hA;
fn.prototype.set = mA;
var no = Zn(Lt, "Map");
function vA() {
  this.size = 0, this.__data__ = {
    hash: new Wn(),
    map: new (no || fn)(),
    string: new Wn()
  };
}
function gA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Fa(e, t) {
  var n = e.__data__;
  return gA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function yA(e) {
  var t = Fa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bA(e) {
  return Fa(this, e).get(e);
}
function xA(e) {
  return Fa(this, e).has(e);
}
function wA(e, t) {
  var n = Fa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pn.prototype.clear = vA;
pn.prototype.delete = yA;
pn.prototype.get = bA;
pn.prototype.has = xA;
pn.prototype.set = wA;
var _A = "Expected a function";
function El(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_A);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (El.Cache || pn)(), n;
}
El.Cache = pn;
var kA = 500;
function SA(e) {
  var t = El(e, function(r) {
    return n.size === kA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var EA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zA = /\\(\\)?/g, $A = SA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(EA, function(n, r, o, a) {
    t.push(o ? a.replace(zA, "$1") : r || n);
  }), t;
});
function Lp(e) {
  return e == null ? "" : Op(e);
}
function zl(e, t) {
  return Ft(e) ? e : ZC(e, t) ? [e] : $A(Lp(e));
}
function $l(e) {
  if (typeof e == "string" || Ra(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function PA(e, t) {
  t = zl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$l(t[n++])];
  return n && n == r ? e : void 0;
}
function wt(e, t, n) {
  var r = e == null ? void 0 : PA(e, t);
  return r === void 0 ? n : r;
}
function CA(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Up = Fp(Object.getPrototypeOf, Object), AA = "[object Object]", TA = Function.prototype, OA = Object.prototype, Vp = TA.toString, NA = OA.hasOwnProperty, RA = Vp.call(Object);
function MA(e) {
  if (!Qt(e) || Yn(e) != AA)
    return !1;
  var t = Up(e);
  if (t === null)
    return !0;
  var n = NA.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Vp.call(n) == RA;
}
function IA(e) {
  return function(t) {
    return e?.[t];
  };
}
function DA() {
  this.__data__ = new fn(), this.size = 0;
}
function FA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function BA(e) {
  return this.__data__.get(e);
}
function LA(e) {
  return this.__data__.has(e);
}
var UA = 200;
function VA(e, t) {
  var n = this.__data__;
  if (n instanceof fn) {
    var r = n.__data__;
    if (!no || r.length < UA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new pn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new fn(e);
  this.size = t.size;
}
Zt.prototype.clear = DA;
Zt.prototype.delete = FA;
Zt.prototype.get = BA;
Zt.prototype.has = LA;
Zt.prototype.set = VA;
var qp = typeof exports == "object" && exports && !exports.nodeType && exports, od = qp && typeof module == "object" && module && !module.nodeType && module, qA = od && od.exports === qp, ad = qA ? Lt.Buffer : void 0, sd = ad ? ad.allocUnsafe : void 0;
function jp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = sd ? sd(n) : new e.constructor(n);
  return e.copy(r), r;
}
function jA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function HA() {
  return [];
}
var GA = Object.prototype, WA = GA.propertyIsEnumerable, id = Object.getOwnPropertySymbols, XA = id ? function(e) {
  return e == null ? [] : (e = Object(e), jA(id(e), function(t) {
    return WA.call(e, t);
  }));
} : HA;
function YA(e, t, n) {
  var r = t(e);
  return Ft(e) ? r : CA(r, n(e));
}
function Li(e) {
  return YA(e, jC, XA);
}
var Ui = Zn(Lt, "DataView"), Vi = Zn(Lt, "Promise"), qi = Zn(Lt, "Set"), ld = "[object Map]", KA = "[object Object]", ud = "[object Promise]", dd = "[object Set]", cd = "[object WeakMap]", fd = "[object DataView]", ZA = Kn(Ui), JA = Kn(no), QA = Kn(Vi), eT = Kn(qi), tT = Kn(Bi), Nt = Yn;
(Ui && Nt(new Ui(new ArrayBuffer(1))) != fd || no && Nt(new no()) != ld || Vi && Nt(Vi.resolve()) != ud || qi && Nt(new qi()) != dd || Bi && Nt(new Bi()) != cd) && (Nt = function(e) {
  var t = Yn(e), n = t == KA ? e.constructor : void 0, r = n ? Kn(n) : "";
  if (r)
    switch (r) {
      case ZA:
        return fd;
      case JA:
        return ld;
      case QA:
        return ud;
      case eT:
        return dd;
      case tT:
        return cd;
    }
  return t;
});
var nT = Object.prototype, rT = nT.hasOwnProperty;
function oT(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && rT.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var pa = Lt.Uint8Array;
function Pl(e) {
  var t = new e.constructor(e.byteLength);
  return new pa(t).set(new pa(e)), t;
}
function aT(e, t) {
  var n = Pl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var sT = /\w*$/;
function iT(e) {
  var t = new e.constructor(e.source, sT.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var pd = Jt ? Jt.prototype : void 0, hd = pd ? pd.valueOf : void 0;
function lT(e) {
  return hd ? Object(hd.call(e)) : {};
}
function Hp(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var uT = "[object Boolean]", dT = "[object Date]", cT = "[object Map]", fT = "[object Number]", pT = "[object RegExp]", hT = "[object Set]", mT = "[object String]", vT = "[object Symbol]", gT = "[object ArrayBuffer]", yT = "[object DataView]", bT = "[object Float32Array]", xT = "[object Float64Array]", wT = "[object Int8Array]", _T = "[object Int16Array]", kT = "[object Int32Array]", ST = "[object Uint8Array]", ET = "[object Uint8ClampedArray]", zT = "[object Uint16Array]", $T = "[object Uint32Array]";
function PT(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case gT:
      return Pl(e);
    case uT:
    case dT:
      return new r(+e);
    case yT:
      return aT(e);
    case bT:
    case xT:
    case wT:
    case _T:
    case kT:
    case ST:
    case ET:
    case zT:
    case $T:
      return Hp(e, n);
    case cT:
      return new r();
    case fT:
    case mT:
      return new r(e);
    case pT:
      return iT(e);
    case hT:
      return new r();
    case vT:
      return lT(e);
  }
}
function Gp(e) {
  return typeof e.constructor == "function" && !_l(e) ? DP(Up(e)) : {};
}
var CT = "[object Map]";
function AT(e) {
  return Qt(e) && Nt(e) == CT;
}
var md = hr && hr.isMap, TT = md ? kl(md) : AT, OT = "[object Set]";
function NT(e) {
  return Qt(e) && Nt(e) == OT;
}
var vd = hr && hr.isSet, RT = vd ? kl(vd) : NT, MT = 1, Wp = "[object Arguments]", IT = "[object Array]", DT = "[object Boolean]", FT = "[object Date]", BT = "[object Error]", Xp = "[object Function]", LT = "[object GeneratorFunction]", UT = "[object Map]", VT = "[object Number]", Yp = "[object Object]", qT = "[object RegExp]", jT = "[object Set]", HT = "[object String]", GT = "[object Symbol]", WT = "[object WeakMap]", XT = "[object ArrayBuffer]", YT = "[object DataView]", KT = "[object Float32Array]", ZT = "[object Float64Array]", JT = "[object Int8Array]", QT = "[object Int16Array]", eO = "[object Int32Array]", tO = "[object Uint8Array]", nO = "[object Uint8ClampedArray]", rO = "[object Uint16Array]", oO = "[object Uint32Array]", Ge = {};
Ge[Wp] = Ge[IT] = Ge[XT] = Ge[YT] = Ge[DT] = Ge[FT] = Ge[KT] = Ge[ZT] = Ge[JT] = Ge[QT] = Ge[eO] = Ge[UT] = Ge[VT] = Ge[Yp] = Ge[qT] = Ge[jT] = Ge[HT] = Ge[GT] = Ge[tO] = Ge[nO] = Ge[rO] = Ge[oO] = !0;
Ge[BT] = Ge[Xp] = Ge[WT] = !1;
function qo(e, t, n, r, o, a) {
  var s, l = t & MT;
  if (s !== void 0)
    return s;
  if (!kt(e))
    return e;
  var c = Ft(e);
  if (c)
    s = oT(e);
  else {
    var u = Nt(e), d = u == Xp || u == LT;
    if (eo(e))
      return jp(e, l);
    if (u == Yp || u == Wp || d && !o)
      s = d ? {} : Gp(e);
    else {
      if (!Ge[u])
        return o ? e : {};
      s = PT(e, u, l);
    }
  }
  a || (a = new Zt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, s), RT(e) ? e.forEach(function(m) {
    s.add(qo(m, t, n, m, e, a));
  }) : TT(e) && e.forEach(function(m, p) {
    s.set(p, qo(m, t, n, p, e, a));
  });
  var v = Li, y = c ? void 0 : v(e);
  return WP(y || e, function(m, p) {
    y && (p = m, m = e[p]), xl(s, p, qo(m, t, n, p, e, a));
  }), s;
}
var aO = 1, sO = 4;
function lt(e) {
  return qo(e, aO | sO);
}
var iO = "__lodash_hash_undefined__";
function lO(e) {
  return this.__data__.set(e, iO), this;
}
function uO(e) {
  return this.__data__.has(e);
}
function ha(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pn(); ++t < n; )
    this.add(e[t]);
}
ha.prototype.add = ha.prototype.push = lO;
ha.prototype.has = uO;
function dO(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function cO(e, t) {
  return e.has(t);
}
var fO = 1, pO = 2;
function Kp(e, t, n, r, o, a) {
  var s = n & fO, l = e.length, c = t.length;
  if (l != c && !(s && c > l))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, y = n & pO ? new ha() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < l; ) {
    var m = e[f], p = t[f];
    if (r)
      var h = s ? r(p, m, f, t, e, a) : r(m, p, f, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!dO(t, function(b, $) {
        if (!cO(y, $) && (m === b || o(m, b, n, r, a)))
          return y.push($);
      })) {
        v = !1;
        break;
      }
    } else if (!(m === p || o(m, p, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function hO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function mO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var vO = 1, gO = 2, yO = "[object Boolean]", bO = "[object Date]", xO = "[object Error]", wO = "[object Map]", _O = "[object Number]", kO = "[object RegExp]", SO = "[object Set]", EO = "[object String]", zO = "[object Symbol]", $O = "[object ArrayBuffer]", PO = "[object DataView]", gd = Jt ? Jt.prototype : void 0, vs = gd ? gd.valueOf : void 0;
function CO(e, t, n, r, o, a, s) {
  switch (n) {
    case PO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case $O:
      return !(e.byteLength != t.byteLength || !a(new pa(e), new pa(t)));
    case yO:
    case bO:
    case _O:
      return uo(+e, +t);
    case xO:
      return e.name == t.name && e.message == t.message;
    case kO:
    case EO:
      return e == t + "";
    case wO:
      var l = hO;
    case SO:
      var c = r & vO;
      if (l || (l = mO), e.size != t.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= gO, s.set(e, t);
      var d = Kp(l(e), l(t), r, o, a, s);
      return s.delete(e), d;
    case zO:
      if (vs)
        return vs.call(e) == vs.call(t);
  }
  return !1;
}
var AO = 1, TO = Object.prototype, OO = TO.hasOwnProperty;
function NO(e, t, n, r, o, a) {
  var s = n & AO, l = Li(e), c = l.length, u = Li(t), d = u.length;
  if (c != d && !s)
    return !1;
  for (var f = c; f--; ) {
    var v = l[f];
    if (!(s ? v in t : OO.call(t, v)))
      return !1;
  }
  var y = a.get(e), m = a.get(t);
  if (y && m)
    return y == t && m == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var h = s; ++f < c; ) {
    v = l[f];
    var b = e[v], $ = t[v];
    if (r)
      var k = s ? r($, b, v, t, e, a) : r(b, $, v, e, t, a);
    if (!(k === void 0 ? b === $ || o(b, $, n, r, a) : k)) {
      p = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (p && !h) {
    var P = e.constructor, C = t.constructor;
    P != C && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var RO = 1, yd = "[object Arguments]", bd = "[object Array]", Ao = "[object Object]", MO = Object.prototype, xd = MO.hasOwnProperty;
function IO(e, t, n, r, o, a) {
  var s = Ft(e), l = Ft(t), c = s ? bd : Nt(e), u = l ? bd : Nt(t);
  c = c == yd ? Ao : c, u = u == yd ? Ao : u;
  var d = c == Ao, f = u == Ao, v = c == u;
  if (v && eo(e)) {
    if (!eo(t))
      return !1;
    s = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new Zt()), s || Sl(e) ? Kp(e, t, n, r, o, a) : CO(e, t, c, n, r, o, a);
  if (!(n & RO)) {
    var y = d && xd.call(e, "__wrapped__"), m = f && xd.call(t, "__wrapped__");
    if (y || m) {
      var p = y ? e.value() : e, h = m ? t.value() : t;
      return a || (a = new Zt()), o(p, h, n, r, a);
    }
  }
  return v ? (a || (a = new Zt()), NO(e, t, n, r, o, a)) : !1;
}
function Zp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Qt(e) && !Qt(t) ? e !== e && t !== t : IO(e, t, n, r, Zp, o);
}
function DO(e, t, n) {
  t = zl(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $l(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && Ma(s, o) && (Ft(e) || fa(e)));
}
function FO(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), l = s.length; l--; ) {
      var c = s[++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var BO = FO(), gs = function() {
  return Lt.Date.now();
}, LO = "Expected a function", UO = Math.max, VO = Math.min;
function qO(e, t, n) {
  var r, o, a, s, l, c, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(LO);
  t = Ku(t) || 0, kt(n) && (d = !0, f = "maxWait" in n, a = f ? UO(Ku(n.maxWait) || 0, t) : a, v = "trailing" in n ? !0 : v);
  function y(_) {
    var g = r, S = o;
    return r = o = void 0, u = _, s = e.apply(S, g), s;
  }
  function m(_) {
    return u = _, l = setTimeout(b, t), d ? y(_) : s;
  }
  function p(_) {
    var g = _ - c, S = _ - u, U = t - g;
    return f ? VO(U, a - S) : U;
  }
  function h(_) {
    var g = _ - c, S = _ - u;
    return c === void 0 || g >= t || g < 0 || f && S >= a;
  }
  function b() {
    var _ = gs();
    if (h(_))
      return $(_);
    l = setTimeout(b, p(_));
  }
  function $(_) {
    return l = void 0, v && r ? y(_) : (r = o = void 0, s);
  }
  function k() {
    l !== void 0 && clearTimeout(l), u = 0, r = c = o = l = void 0;
  }
  function P() {
    return l === void 0 ? s : $(gs());
  }
  function C() {
    var _ = gs(), g = h(_);
    if (r = arguments, o = this, c = _, g) {
      if (l === void 0)
        return m(c);
      if (f)
        return clearTimeout(l), l = setTimeout(b, t), y(c);
    }
    return l === void 0 && (l = setTimeout(b, t)), s;
  }
  return C.cancel = k, C.flush = P, C;
}
function ji(e, t, n) {
  (n !== void 0 && !uo(e[t], n) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function jO(e) {
  return Qt(e) && Ia(e);
}
function Hi(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function HO(e) {
  return JP(e, Bp(e));
}
function GO(e, t, n, r, o, a, s) {
  var l = Hi(e, n), c = Hi(t, n), u = s.get(c);
  if (u) {
    ji(e, n, u);
    return;
  }
  var d = a ? a(l, c, n + "", e, t, s) : void 0, f = d === void 0;
  if (f) {
    var v = Ft(c), y = !v && eo(c), m = !v && !y && Sl(c);
    d = c, v || y || m ? Ft(l) ? d = l : jO(l) ? d = BP(l) : y ? (f = !1, d = jp(c, !0)) : m ? (f = !1, d = Hp(c, !0)) : d = [] : MA(c) || fa(c) ? (d = l, fa(l) ? d = HO(l) : (!kt(l) || yl(l)) && (d = Gp(c))) : f = !1;
  }
  f && (s.set(c, d), o(d, c, r, a, s), s.delete(c)), ji(e, n, d);
}
function Jp(e, t, n, r, o) {
  e !== t && BO(t, function(a, s) {
    if (o || (o = new Zt()), kt(a))
      GO(e, t, s, n, Jp, r, o);
    else {
      var l = r ? r(Hi(e, s), a, s + "", e, t, o) : void 0;
      l === void 0 && (l = a), ji(e, s, l);
    }
  }, Bp);
}
var WO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, XO = IA(WO), Qp = /[&<>"']/g, YO = RegExp(Qp.source);
function KO(e) {
  return e = Lp(e), e && YO.test(e) ? e.replace(Qp, XO) : e;
}
var ZO = Object.prototype, JO = ZO.hasOwnProperty;
function QO(e, t) {
  return e != null && JO.call(e, t);
}
function e0(e, t) {
  return e != null && DO(e, t, QO);
}
function _n(e, t) {
  return Zp(e, t);
}
var Gi = rC(function(e, t, n) {
  Jp(e, t, n);
});
function e8(e, t, n, r) {
  if (!kt(e))
    return e;
  t = zl(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var c = $l(t[o]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != s) {
      var d = l[c];
      u = void 0, u === void 0 && (u = kt(d) ? d : Ma(t[o + 1]) ? [] : {});
    }
    xl(l, c, u), l = l[c];
  }
  return e;
}
function zt(e, t, n) {
  return e == null ? e : e8(e, t, n);
}
var wd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function t8(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var o = !1;
      try {
        o = this instanceof r;
      } catch {
      }
      return o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var ys, _d;
function br() {
  return _d || (_d = 1, ys = TypeError), ys;
}
const n8 = {}, r8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n8
}, Symbol.toStringTag, { value: "Module" })), o8 = /* @__PURE__ */ t8(r8);
var bs, kd;
function Ba() {
  if (kd) return bs;
  kd = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, y = v ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, h = Function.prototype.toString, b = String.prototype.match, $ = String.prototype.slice, k = String.prototype.replace, P = String.prototype.toUpperCase, C = String.prototype.toLowerCase, _ = RegExp.prototype.test, g = Array.prototype.concat, S = Array.prototype.join, U = Array.prototype.slice, I = Math.floor, D = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, T = Object.getOwnPropertySymbols, V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, z = typeof Symbol == "function" && typeof Symbol.iterator == "object", R = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === z || !0) ? Symbol.toStringTag : null, x = Object.prototype.propertyIsEnumerable, O = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(Y) {
    return Y.__proto__;
  } : null);
  function w(Y, Z) {
    if (Y === 1 / 0 || Y === -1 / 0 || Y !== Y || Y && Y > -1e3 && Y < 1e3 || _.call(/e/, Z))
      return Z;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof Y == "number") {
      var He = Y < 0 ? -I(-Y) : I(Y);
      if (He !== Y) {
        var We = String(He), Re = $.call(Z, We.length + 1);
        return k.call(We, Le, "$&_") + "." + k.call(k.call(Re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return k.call(Z, Le, "$&_");
  }
  var q = o8, Q = q.custom, ne = F(Q) ? Q : null, pe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, xe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  bs = function Y(Z, Le, He, We) {
    var Re = Le || {};
    if (H(Re, "quoteStyle") && !H(pe, Re.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (H(Re, "maxStringLength") && (typeof Re.maxStringLength == "number" ? Re.maxStringLength < 0 && Re.maxStringLength !== 1 / 0 : Re.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var hn = H(Re, "customInspect") ? Re.customInspect : !0;
    if (typeof hn != "boolean" && hn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (H(Re, "indent") && Re.indent !== null && Re.indent !== "	" && !(parseInt(Re.indent, 10) === Re.indent && Re.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(Re, "numericSeparator") && typeof Re.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Pn = Re.numericSeparator;
    if (typeof Z > "u")
      return "undefined";
    if (Z === null)
      return "null";
    if (typeof Z == "boolean")
      return Z ? "true" : "false";
    if (typeof Z == "string")
      return gt(Z, Re);
    if (typeof Z == "number") {
      if (Z === 0)
        return 1 / 0 / Z > 0 ? "0" : "-0";
      var yt = String(Z);
      return Pn ? w(Z, yt) : yt;
    }
    if (typeof Z == "bigint") {
      var mn = String(Z) + "n";
      return Pn ? w(Z, mn) : mn;
    }
    var Ka = typeof Re.depth > "u" ? 5 : Re.depth;
    if (typeof He > "u" && (He = 0), He >= Ka && Ka > 0 && typeof Z == "object")
      return ve(Z) ? "[Array]" : "[Object]";
    var Jn = lh(Re, He);
    if (typeof We > "u")
      We = [];
    else if (ae(We, Z) >= 0)
      return "[Circular]";
    function At(Qn, yo, dh) {
      if (yo && (We = U.call(We), We.push(yo)), dh) {
        var Xl = {
          depth: Re.depth
        };
        return H(Re, "quoteStyle") && (Xl.quoteStyle = Re.quoteStyle), Y(Qn, Xl, He + 1, We);
      }
      return Y(Qn, Re, He + 1, We);
    }
    if (typeof Z == "function" && !Ee(Z)) {
      var Ul = oe(Z), Vl = vo(Z, At);
      return "[Function" + (Ul ? ": " + Ul : " (anonymous)") + "]" + (Vl.length > 0 ? " { " + S.call(Vl, ", ") + " }" : "");
    }
    if (F(Z)) {
      var ql = z ? k.call(String(Z), /^(Symbol\(.*\))_[^)]*$/, "$1") : V.call(Z);
      return typeof Z == "object" && !z ? $n(ql) : ql;
    }
    if (Vt(Z)) {
      for (var _r = "<" + C.call(String(Z.nodeName)), Za = Z.attributes || [], go = 0; go < Za.length; go++)
        _r += " " + Za[go].name + "=" + ke(re(Za[go].value), "double", Re);
      return _r += ">", Z.childNodes && Z.childNodes.length && (_r += "..."), _r += "</" + C.call(String(Z.nodeName)) + ">", _r;
    }
    if (ve(Z)) {
      if (Z.length === 0)
        return "[]";
      var Ja = vo(Z, At);
      return Jn && !ih(Ja) ? "[" + Ya(Ja, Jn) + "]" : "[ " + S.call(Ja, ", ") + " ]";
    }
    if (le(Z)) {
      var Qa = vo(Z, At);
      return !("cause" in Error.prototype) && "cause" in Z && !x.call(Z, "cause") ? "{ [" + String(Z) + "] " + S.call(g.call("[cause]: " + At(Z.cause), Qa), ", ") + " }" : Qa.length === 0 ? "[" + String(Z) + "]" : "{ [" + String(Z) + "] " + S.call(Qa, ", ") + " }";
    }
    if (typeof Z == "object" && hn) {
      if (ne && typeof Z[ne] == "function" && q)
        return q(Z, { depth: Ka - He });
      if (hn !== "symbol" && typeof Z.inspect == "function")
        return Z.inspect();
    }
    if (fe(Z)) {
      var jl = [];
      return r && r.call(Z, function(Qn, yo) {
        jl.push(At(yo, Z, !0) + " => " + At(Qn, Z));
      }), Ll("Map", n.call(Z), jl, Jn);
    }
    if (Pe(Z)) {
      var Hl = [];
      return l && l.call(Z, function(Qn) {
        Hl.push(At(Qn, Z));
      }), Ll("Set", s.call(Z), Hl, Jn);
    }
    if (he(Z))
      return wr("WeakMap");
    if (Be(Z))
      return wr("WeakSet");
    if (we(Z))
      return wr("WeakRef");
    if (ie(Z))
      return $n(At(Number(Z)));
    if (M(Z))
      return $n(At(D.call(Z)));
    if (ge(Z))
      return $n(m.call(Z));
    if (_e(Z))
      return $n(At(String(Z)));
    if (typeof window < "u" && Z === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && Z === globalThis || typeof wd < "u" && Z === wd)
      return "{ [object globalThis] }";
    if (!Te(Z) && !Ee(Z)) {
      var es = vo(Z, At), Gl = O ? O(Z) === Object.prototype : Z instanceof Object || Z.constructor === Object, ts = Z instanceof Object ? "" : "null prototype", Wl = !Gl && R && Object(Z) === Z && R in Z ? $.call(j(Z), 8, -1) : ts ? "Object" : "", uh = Gl || typeof Z.constructor != "function" ? "" : Z.constructor.name ? Z.constructor.name + " " : "", ns = uh + (Wl || ts ? "[" + S.call(g.call([], Wl || [], ts || []), ": ") + "] " : "");
      return es.length === 0 ? ns + "{}" : Jn ? ns + "{" + Ya(es, Jn) + "}" : ns + "{ " + S.call(es, ", ") + " }";
    }
    return String(Z);
  };
  function ke(Y, Z, Le) {
    var He = Le.quoteStyle || Z, We = pe[He];
    return We + Y + We;
  }
  function re(Y) {
    return k.call(String(Y), /"/g, "&quot;");
  }
  function se(Y) {
    return !R || !(typeof Y == "object" && (R in Y || typeof Y[R] < "u"));
  }
  function ve(Y) {
    return j(Y) === "[object Array]" && se(Y);
  }
  function Te(Y) {
    return j(Y) === "[object Date]" && se(Y);
  }
  function Ee(Y) {
    return j(Y) === "[object RegExp]" && se(Y);
  }
  function le(Y) {
    return j(Y) === "[object Error]" && se(Y);
  }
  function _e(Y) {
    return j(Y) === "[object String]" && se(Y);
  }
  function ie(Y) {
    return j(Y) === "[object Number]" && se(Y);
  }
  function ge(Y) {
    return j(Y) === "[object Boolean]" && se(Y);
  }
  function F(Y) {
    if (z)
      return Y && typeof Y == "object" && Y instanceof Symbol;
    if (typeof Y == "symbol")
      return !0;
    if (!Y || typeof Y != "object" || !V)
      return !1;
    try {
      return V.call(Y), !0;
    } catch {
    }
    return !1;
  }
  function M(Y) {
    if (!Y || typeof Y != "object" || !D)
      return !1;
    try {
      return D.call(Y), !0;
    } catch {
    }
    return !1;
  }
  var B = Object.prototype.hasOwnProperty || function(Y) {
    return Y in this;
  };
  function H(Y, Z) {
    return B.call(Y, Z);
  }
  function j(Y) {
    return p.call(Y);
  }
  function oe(Y) {
    if (Y.name)
      return Y.name;
    var Z = b.call(h.call(Y), /^function\s*([\w$]+)/);
    return Z ? Z[1] : null;
  }
  function ae(Y, Z) {
    if (Y.indexOf)
      return Y.indexOf(Z);
    for (var Le = 0, He = Y.length; Le < He; Le++)
      if (Y[Le] === Z)
        return Le;
    return -1;
  }
  function fe(Y) {
    if (!n || !Y || typeof Y != "object")
      return !1;
    try {
      n.call(Y);
      try {
        s.call(Y);
      } catch {
        return !0;
      }
      return Y instanceof Map;
    } catch {
    }
    return !1;
  }
  function he(Y) {
    if (!u || !Y || typeof Y != "object")
      return !1;
    try {
      u.call(Y, u);
      try {
        f.call(Y, f);
      } catch {
        return !0;
      }
      return Y instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function we(Y) {
    if (!y || !Y || typeof Y != "object")
      return !1;
    try {
      return y.call(Y), !0;
    } catch {
    }
    return !1;
  }
  function Pe(Y) {
    if (!s || !Y || typeof Y != "object")
      return !1;
    try {
      s.call(Y);
      try {
        n.call(Y);
      } catch {
        return !0;
      }
      return Y instanceof Set;
    } catch {
    }
    return !1;
  }
  function Be(Y) {
    if (!f || !Y || typeof Y != "object")
      return !1;
    try {
      f.call(Y, f);
      try {
        u.call(Y, u);
      } catch {
        return !0;
      }
      return Y instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Vt(Y) {
    return !Y || typeof Y != "object" ? !1 : typeof HTMLElement < "u" && Y instanceof HTMLElement ? !0 : typeof Y.nodeName == "string" && typeof Y.getAttribute == "function";
  }
  function gt(Y, Z) {
    if (Y.length > Z.maxStringLength) {
      var Le = Y.length - Z.maxStringLength, He = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt($.call(Y, 0, Z.maxStringLength), Z) + He;
    }
    var We = xe[Z.quoteStyle || "single"];
    We.lastIndex = 0;
    var Re = k.call(k.call(Y, We, "\\$1"), /[\x00-\x1f]/g, Xa);
    return ke(Re, "single", Z);
  }
  function Xa(Y) {
    var Z = Y.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[Z];
    return Le ? "\\" + Le : "\\x" + (Z < 16 ? "0" : "") + P.call(Z.toString(16));
  }
  function $n(Y) {
    return "Object(" + Y + ")";
  }
  function wr(Y) {
    return Y + " { ? }";
  }
  function Ll(Y, Z, Le, He) {
    var We = He ? Ya(Le, He) : S.call(Le, ", ");
    return Y + " (" + Z + ") {" + We + "}";
  }
  function ih(Y) {
    for (var Z = 0; Z < Y.length; Z++)
      if (ae(Y[Z], `
`) >= 0)
        return !1;
    return !0;
  }
  function lh(Y, Z) {
    var Le;
    if (Y.indent === "	")
      Le = "	";
    else if (typeof Y.indent == "number" && Y.indent > 0)
      Le = S.call(Array(Y.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: S.call(Array(Z + 1), Le)
    };
  }
  function Ya(Y, Z) {
    if (Y.length === 0)
      return "";
    var Le = `
` + Z.prev + Z.base;
    return Le + S.call(Y, "," + Le) + `
` + Z.prev;
  }
  function vo(Y, Z) {
    var Le = ve(Y), He = [];
    if (Le) {
      He.length = Y.length;
      for (var We = 0; We < Y.length; We++)
        He[We] = H(Y, We) ? Z(Y[We], Y) : "";
    }
    var Re = typeof T == "function" ? T(Y) : [], hn;
    if (z) {
      hn = {};
      for (var Pn = 0; Pn < Re.length; Pn++)
        hn["$" + Re[Pn]] = Re[Pn];
    }
    for (var yt in Y)
      H(Y, yt) && (Le && String(Number(yt)) === yt && yt < Y.length || z && hn["$" + yt] instanceof Symbol || (_.call(/[^\w$]/, yt) ? He.push(Z(yt, Y) + ": " + Z(Y[yt], Y)) : He.push(yt + ": " + Z(Y[yt], Y))));
    if (typeof T == "function")
      for (var mn = 0; mn < Re.length; mn++)
        x.call(Y, Re[mn]) && He.push("[" + Z(Re[mn]) + "]: " + Z(Y[Re[mn]], Y));
    return He;
  }
  return bs;
}
var xs, Sd;
function a8() {
  if (Sd) return xs;
  Sd = 1;
  var e = /* @__PURE__ */ Ba(), t = /* @__PURE__ */ br(), n = function(l, c, u) {
    for (var d = l, f; (f = d.next) != null; d = f)
      if (f.key === c)
        return d.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, r = function(l, c) {
    if (l) {
      var u = n(l, c);
      return u && u.value;
    }
  }, o = function(l, c, u) {
    var d = n(l, c);
    d ? d.value = u : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: l.next,
      value: u
    };
  }, a = function(l, c) {
    return l ? !!n(l, c) : !1;
  }, s = function(l, c) {
    if (l)
      return n(l, c, !0);
  };
  return xs = function() {
    var c, u = {
      assert: function(d) {
        if (!u.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var f = s(c, d);
        return f && c && !c.next && (c = void 0), !!f;
      },
      get: function(d) {
        return r(c, d);
      },
      has: function(d) {
        return a(c, d);
      },
      set: function(d, f) {
        c || (c = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          c,
          d,
          f
        );
      }
    };
    return u;
  }, xs;
}
var ws, Ed;
function t0() {
  return Ed || (Ed = 1, ws = Object), ws;
}
var _s, zd;
function s8() {
  return zd || (zd = 1, _s = Error), _s;
}
var ks, $d;
function i8() {
  return $d || ($d = 1, ks = EvalError), ks;
}
var Ss, Pd;
function l8() {
  return Pd || (Pd = 1, Ss = RangeError), Ss;
}
var Es, Cd;
function u8() {
  return Cd || (Cd = 1, Es = ReferenceError), Es;
}
var zs, Ad;
function d8() {
  return Ad || (Ad = 1, zs = SyntaxError), zs;
}
var $s, Td;
function c8() {
  return Td || (Td = 1, $s = URIError), $s;
}
var Ps, Od;
function f8() {
  return Od || (Od = 1, Ps = Math.abs), Ps;
}
var Cs, Nd;
function p8() {
  return Nd || (Nd = 1, Cs = Math.floor), Cs;
}
var As, Rd;
function h8() {
  return Rd || (Rd = 1, As = Math.max), As;
}
var Ts, Md;
function m8() {
  return Md || (Md = 1, Ts = Math.min), Ts;
}
var Os, Id;
function v8() {
  return Id || (Id = 1, Os = Math.pow), Os;
}
var Ns, Dd;
function g8() {
  return Dd || (Dd = 1, Ns = Math.round), Ns;
}
var Rs, Fd;
function y8() {
  return Fd || (Fd = 1, Rs = Number.isNaN || function(t) {
    return t !== t;
  }), Rs;
}
var Ms, Bd;
function b8() {
  if (Bd) return Ms;
  Bd = 1;
  var e = /* @__PURE__ */ y8();
  return Ms = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Ms;
}
var Is, Ld;
function x8() {
  return Ld || (Ld = 1, Is = Object.getOwnPropertyDescriptor), Is;
}
var Ds, Ud;
function n0() {
  if (Ud) return Ds;
  Ud = 1;
  var e = /* @__PURE__ */ x8();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ds = e, Ds;
}
var Fs, Vd;
function w8() {
  if (Vd) return Fs;
  Vd = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Fs = e, Fs;
}
var Bs, qd;
function _8() {
  return qd || (qd = 1, Bs = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = /* @__PURE__ */ Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (l.value !== o || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Bs;
}
var Ls, jd;
function k8() {
  if (jd) return Ls;
  jd = 1;
  var e = typeof Symbol < "u" && Symbol, t = _8();
  return Ls = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ls;
}
var Us, Hd;
function r0() {
  return Hd || (Hd = 1, Us = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Us;
}
var Vs, Gd;
function o0() {
  if (Gd) return Vs;
  Gd = 1;
  var e = /* @__PURE__ */ t0();
  return Vs = e.getPrototypeOf || null, Vs;
}
var qs, Wd;
function S8() {
  if (Wd) return qs;
  Wd = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, u) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var v = 0; v < u.length; v += 1)
      d[v + c.length] = u[v];
    return d;
  }, a = function(c, u) {
    for (var d = [], f = u, v = 0; f < c.length; f += 1, v += 1)
      d[v] = c[f];
    return d;
  }, s = function(l, c) {
    for (var u = "", d = 0; d < l.length; d += 1)
      u += l[d], d + 1 < l.length && (u += c);
    return u;
  };
  return qs = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var d = a(arguments, 1), f, v = function() {
      if (this instanceof f) {
        var b = u.apply(
          this,
          o(d, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return u.apply(
        c,
        o(d, arguments)
      );
    }, y = n(0, u.length - d.length), m = [], p = 0; p < y; p++)
      m[p] = "$" + p;
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, qs;
}
var js, Xd;
function La() {
  if (Xd) return js;
  Xd = 1;
  var e = S8();
  return js = Function.prototype.bind || e, js;
}
var Hs, Yd;
function Cl() {
  return Yd || (Yd = 1, Hs = Function.prototype.call), Hs;
}
var Gs, Kd;
function a0() {
  return Kd || (Kd = 1, Gs = Function.prototype.apply), Gs;
}
var Ws, Zd;
function E8() {
  return Zd || (Zd = 1, Ws = typeof Reflect < "u" && Reflect && Reflect.apply), Ws;
}
var Xs, Jd;
function z8() {
  if (Jd) return Xs;
  Jd = 1;
  var e = La(), t = a0(), n = Cl(), r = E8();
  return Xs = r || e.call(n, t), Xs;
}
var Ys, Qd;
function s0() {
  if (Qd) return Ys;
  Qd = 1;
  var e = La(), t = /* @__PURE__ */ br(), n = Cl(), r = z8();
  return Ys = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ys;
}
var Ks, ec;
function $8() {
  if (ec) return Ks;
  ec = 1;
  var e = s0(), t = /* @__PURE__ */ n0(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return Ks = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : o(l));
    }
  ) : !1, Ks;
}
var Zs, tc;
function P8() {
  if (tc) return Zs;
  tc = 1;
  var e = r0(), t = o0(), n = /* @__PURE__ */ $8();
  return Zs = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Zs;
}
var Js, nc;
function C8() {
  if (nc) return Js;
  nc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = La();
  return Js = n.call(e, t), Js;
}
var Qs, rc;
function Al() {
  if (rc) return Qs;
  rc = 1;
  var e, t = /* @__PURE__ */ t0(), n = /* @__PURE__ */ s8(), r = /* @__PURE__ */ i8(), o = /* @__PURE__ */ l8(), a = /* @__PURE__ */ u8(), s = /* @__PURE__ */ d8(), l = /* @__PURE__ */ br(), c = /* @__PURE__ */ c8(), u = /* @__PURE__ */ f8(), d = /* @__PURE__ */ p8(), f = /* @__PURE__ */ h8(), v = /* @__PURE__ */ m8(), y = /* @__PURE__ */ v8(), m = /* @__PURE__ */ g8(), p = /* @__PURE__ */ b8(), h = Function, b = function(Ee) {
    try {
      return h('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, $ = /* @__PURE__ */ n0(), k = /* @__PURE__ */ w8(), P = function() {
    throw new l();
  }, C = $ ? (function() {
    try {
      return arguments.callee, P;
    } catch {
      try {
        return $(arguments, "callee").get;
      } catch {
        return P;
      }
    }
  })() : P, _ = k8()(), g = P8(), S = o0(), U = r0(), I = a0(), D = Cl(), T = {}, V = typeof Uint8Array > "u" || !g ? e : g(Uint8Array), z = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && g ? g([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": T,
    "%AsyncGenerator%": T,
    "%AsyncGeneratorFunction%": T,
    "%AsyncIteratorPrototype%": T,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": h,
    "%GeneratorFunction%": T,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": _ && g ? g(g([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !_ || !g ? e : g((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": $,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !_ || !g ? e : g((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": _ && g ? g(""[Symbol.iterator]()) : e,
    "%Symbol%": _ ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": C,
    "%TypedArray%": V,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": D,
    "%Function.prototype.apply%": I,
    "%Object.defineProperty%": k,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": y,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": U
  };
  if (g)
    try {
      null.error;
    } catch (Ee) {
      var R = g(g(Ee));
      z["%Error.prototype%"] = R;
    }
  var x = function Ee(le) {
    var _e;
    if (le === "%AsyncFunction%")
      _e = b("async function () {}");
    else if (le === "%GeneratorFunction%")
      _e = b("function* () {}");
    else if (le === "%AsyncGeneratorFunction%")
      _e = b("async function* () {}");
    else if (le === "%AsyncGenerator%") {
      var ie = Ee("%AsyncGeneratorFunction%");
      ie && (_e = ie.prototype);
    } else if (le === "%AsyncIteratorPrototype%") {
      var ge = Ee("%AsyncGenerator%");
      ge && g && (_e = g(ge.prototype));
    }
    return z[le] = _e, _e;
  }, O = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, w = La(), q = /* @__PURE__ */ C8(), Q = w.call(D, Array.prototype.concat), ne = w.call(I, Array.prototype.splice), pe = w.call(D, String.prototype.replace), xe = w.call(D, String.prototype.slice), ke = w.call(D, RegExp.prototype.exec), re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, ve = function(le) {
    var _e = xe(le, 0, 1), ie = xe(le, -1);
    if (_e === "%" && ie !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ie === "%" && _e !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ge = [];
    return pe(le, re, function(F, M, B, H) {
      ge[ge.length] = B ? pe(H, se, "$1") : M || F;
    }), ge;
  }, Te = function(le, _e) {
    var ie = le, ge;
    if (q(O, ie) && (ge = O[ie], ie = "%" + ge[0] + "%"), q(z, ie)) {
      var F = z[ie];
      if (F === T && (F = x(ie)), typeof F > "u" && !_e)
        throw new l("intrinsic " + le + " exists, but is not available. Please file an issue!");
      return {
        alias: ge,
        name: ie,
        value: F
      };
    }
    throw new s("intrinsic " + le + " does not exist!");
  };
  return Qs = function(le, _e) {
    if (typeof le != "string" || le.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof _e != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (ke(/^%?[^%]*%?$/, le) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ie = ve(le), ge = ie.length > 0 ? ie[0] : "", F = Te("%" + ge + "%", _e), M = F.name, B = F.value, H = !1, j = F.alias;
    j && (ge = j[0], ne(ie, Q([0, 1], j)));
    for (var oe = 1, ae = !0; oe < ie.length; oe += 1) {
      var fe = ie[oe], he = xe(fe, 0, 1), we = xe(fe, -1);
      if ((he === '"' || he === "'" || he === "`" || we === '"' || we === "'" || we === "`") && he !== we)
        throw new s("property names with quotes must have matching quotes");
      if ((fe === "constructor" || !ae) && (H = !0), ge += "." + fe, M = "%" + ge + "%", q(z, M))
        B = z[M];
      else if (B != null) {
        if (!(fe in B)) {
          if (!_e)
            throw new l("base intrinsic for " + le + " exists, but the property is not available.");
          return;
        }
        if ($ && oe + 1 >= ie.length) {
          var Pe = $(B, fe);
          ae = !!Pe, ae && "get" in Pe && !("originalValue" in Pe.get) ? B = Pe.get : B = B[fe];
        } else
          ae = q(B, fe), B = B[fe];
        ae && !H && (z[M] = B);
      }
    }
    return B;
  }, Qs;
}
var ei, oc;
function i0() {
  if (oc) return ei;
  oc = 1;
  var e = /* @__PURE__ */ Al(), t = s0(), n = t([e("%String.prototype.indexOf%")]);
  return ei = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, ei;
}
var ti, ac;
function l0() {
  if (ac) return ti;
  ac = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ i0(), n = /* @__PURE__ */ Ba(), r = /* @__PURE__ */ br(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return ti = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(y) {
        if (!v.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (f) {
          var m = c(f, y);
          return u(f) === 0 && (f = void 0), m;
        }
        return !1;
      },
      get: function(y) {
        if (f)
          return a(f, y);
      },
      has: function(y) {
        return f ? l(f, y) : !1;
      },
      set: function(y, m) {
        f || (f = new o()), s(f, y, m);
      }
    };
    return v;
  }, ti;
}
var ni, sc;
function A8() {
  if (sc) return ni;
  sc = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ i0(), n = /* @__PURE__ */ Ba(), r = l0(), o = /* @__PURE__ */ br(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return ni = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, v, y = {
        assert: function(m) {
          if (!y.has(m))
            throw new o("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (a && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return u(f, m);
          } else if (r && v)
            return v.delete(m);
          return !1;
        },
        get: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? s(f, m) : v && v.get(m);
        },
        has: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? c(f, m) : !!v && v.has(m);
        },
        set: function(m, p) {
          a && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new a()), l(f, m, p)) : r && (v || (v = r()), v.set(m, p));
        }
      };
      return y;
    }
  ) : r, ni;
}
var ri, ic;
function u0() {
  if (ic) return ri;
  ic = 1;
  var e = /* @__PURE__ */ br(), t = /* @__PURE__ */ Ba(), n = a8(), r = l0(), o = A8(), a = o || r || n;
  return ri = function() {
    var l, c = {
      assert: function(u) {
        if (!c.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!l && l.delete(u);
      },
      get: function(u) {
        return l && l.get(u);
      },
      has: function(u) {
        return !!l && l.has(u);
      },
      set: function(u, d) {
        l || (l = a()), l.set(u, d);
      }
    };
    return c;
  }, ri;
}
var oi, lc;
function Tl() {
  if (lc) return oi;
  lc = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return oi = {
    default: n.RFC3986,
    formatters: {
      RFC1738: function(r) {
        return e.call(r, t, "+");
      },
      RFC3986: function(r) {
        return String(r);
      }
    },
    RFC1738: n.RFC1738,
    RFC3986: n.RFC3986
  }, oi;
}
var ai, uc;
function d0() {
  if (uc) return ai;
  uc = 1;
  var e = /* @__PURE__ */ Tl(), t = u0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(g, S) {
    return o.set(g, S), g;
  }, s = function(g) {
    return o.has(g);
  }, l = function(g) {
    return o.get(g);
  }, c = function(g, S) {
    o.set(g, S);
  }, u = (function() {
    for (var _ = [], g = 0; g < 256; ++g)
      _[_.length] = "%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase();
    return _;
  })(), d = function(g) {
    for (; g.length > 1; ) {
      var S = g.pop(), U = S.obj[S.prop];
      if (r(U)) {
        for (var I = [], D = 0; D < U.length; ++D)
          typeof U[D] < "u" && (I[I.length] = U[D]);
        S.obj[S.prop] = I;
      }
    }
  }, f = function(g, S) {
    for (var U = S && S.plainObjects ? { __proto__: null } : {}, I = 0; I < g.length; ++I)
      typeof g[I] < "u" && (U[I] = g[I]);
    return U;
  }, v = function _(g, S, U) {
    if (!S)
      return g;
    if (typeof S != "object" && typeof S != "function") {
      if (r(g)) {
        var I = g.length;
        if (U && typeof U.arrayLimit == "number" && I > U.arrayLimit)
          return a(f(g.concat(S), U), I);
        g[I] = S;
      } else if (g && typeof g == "object")
        if (s(g)) {
          var D = l(g) + 1;
          g[D] = S, c(g, D);
        } else {
          if (U && U.strictMerge)
            return [g, S];
          (U && (U.plainObjects || U.allowPrototypes) || !n.call(Object.prototype, S)) && (g[S] = !0);
        }
      else
        return [g, S];
      return g;
    }
    if (!g || typeof g != "object") {
      if (s(S)) {
        for (var T = Object.keys(S), V = U && U.plainObjects ? { __proto__: null, 0: g } : { 0: g }, z = 0; z < T.length; z++) {
          var R = parseInt(T[z], 10);
          V[R + 1] = S[T[z]];
        }
        return a(V, l(S) + 1);
      }
      var x = [g].concat(S);
      return U && typeof U.arrayLimit == "number" && x.length > U.arrayLimit ? a(f(x, U), x.length - 1) : x;
    }
    var O = g;
    return r(g) && !r(S) && (O = f(g, U)), r(g) && r(S) ? (S.forEach(function(w, q) {
      if (n.call(g, q)) {
        var Q = g[q];
        Q && typeof Q == "object" && w && typeof w == "object" ? g[q] = _(Q, w, U) : g[g.length] = w;
      } else
        g[q] = w;
    }), g) : Object.keys(S).reduce(function(w, q) {
      var Q = S[q];
      if (n.call(w, q) ? w[q] = _(w[q], Q, U) : w[q] = Q, s(S) && !s(w) && a(w, l(S)), s(w)) {
        var ne = parseInt(q, 10);
        String(ne) === q && ne >= 0 && ne > l(w) && c(w, ne);
      }
      return w;
    }, O);
  }, y = function(g, S) {
    return Object.keys(S).reduce(function(U, I) {
      return U[I] = S[I], U;
    }, g);
  }, m = function(_, g, S) {
    var U = _.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return U.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(U);
    } catch {
      return U;
    }
  }, p = 1024, h = function(g, S, U, I, D) {
    if (g.length === 0)
      return g;
    var T = g;
    if (typeof g == "symbol" ? T = Symbol.prototype.toString.call(g) : typeof g != "string" && (T = String(g)), U === "iso-8859-1")
      return escape(T).replace(/%u[0-9a-f]{4}/gi, function(q) {
        return "%26%23" + parseInt(q.slice(2), 16) + "%3B";
      });
    for (var V = "", z = 0; z < T.length; z += p) {
      for (var R = T.length >= p ? T.slice(z, z + p) : T, x = [], O = 0; O < R.length; ++O) {
        var w = R.charCodeAt(O);
        if (w === 45 || w === 46 || w === 95 || w === 126 || w >= 48 && w <= 57 || w >= 65 && w <= 90 || w >= 97 && w <= 122 || D === e.RFC1738 && (w === 40 || w === 41)) {
          x[x.length] = R.charAt(O);
          continue;
        }
        if (w < 128) {
          x[x.length] = u[w];
          continue;
        }
        if (w < 2048) {
          x[x.length] = u[192 | w >> 6] + u[128 | w & 63];
          continue;
        }
        if (w < 55296 || w >= 57344) {
          x[x.length] = u[224 | w >> 12] + u[128 | w >> 6 & 63] + u[128 | w & 63];
          continue;
        }
        O += 1, w = 65536 + ((w & 1023) << 10 | R.charCodeAt(O) & 1023), x[x.length] = u[240 | w >> 18] + u[128 | w >> 12 & 63] + u[128 | w >> 6 & 63] + u[128 | w & 63];
      }
      V += x.join("");
    }
    return V;
  }, b = function(g) {
    for (var S = [{ obj: { o: g }, prop: "o" }], U = [], I = 0; I < S.length; ++I)
      for (var D = S[I], T = D.obj[D.prop], V = Object.keys(T), z = 0; z < V.length; ++z) {
        var R = V[z], x = T[R];
        typeof x == "object" && x !== null && U.indexOf(x) === -1 && (S[S.length] = { obj: T, prop: R }, U[U.length] = x);
      }
    return d(S), g;
  }, $ = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, k = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g));
  }, P = function(g, S, U, I) {
    if (s(g)) {
      var D = l(g) + 1;
      return g[D] = S, c(g, D), g;
    }
    var T = [].concat(g, S);
    return T.length > U ? a(f(T, { plainObjects: I }), T.length - 1) : T;
  }, C = function(g, S) {
    if (r(g)) {
      for (var U = [], I = 0; I < g.length; I += 1)
        U[U.length] = S(g[I]);
      return U;
    }
    return S(g);
  };
  return ai = {
    arrayToObject: f,
    assign: y,
    combine: P,
    compact: b,
    decode: m,
    encode: h,
    isBuffer: k,
    isOverflow: s,
    isRegExp: $,
    markOverflow: a,
    maybeMap: C,
    merge: v
  }, ai;
}
var si, dc;
function T8() {
  if (dc) return si;
  dc = 1;
  var e = u0(), t = /* @__PURE__ */ d0(), n = /* @__PURE__ */ Tl(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, b) {
      return h + "[" + b + "]";
    },
    repeat: function(h) {
      return h;
    }
  }, a = Array.isArray, s = Array.prototype.push, l = function(p, h) {
    s.apply(p, a(h) ? h : [h]);
  }, c = Date.prototype.toISOString, u = n.default, d = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: u,
    formatter: n.formatters[u],
    // deprecated
    indices: !1,
    serializeDate: function(h) {
      return c.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, v = {}, y = function p(h, b, $, k, P, C, _, g, S, U, I, D, T, V, z, R, x, O) {
    for (var w = h, q = O, Q = 0, ne = !1; (q = q.get(v)) !== void 0 && !ne; ) {
      var pe = q.get(h);
      if (Q += 1, typeof pe < "u") {
        if (pe === Q)
          throw new RangeError("Cyclic object value");
        ne = !0;
      }
      typeof q.get(v) > "u" && (Q = 0);
    }
    if (typeof U == "function" ? w = U(b, w) : w instanceof Date ? w = T(w) : $ === "comma" && a(w) && (w = t.maybeMap(w, function(M) {
      return M instanceof Date ? T(M) : M;
    })), w === null) {
      if (C)
        return S && !R ? S(b, d.encoder, x, "key", V) : b;
      w = "";
    }
    if (f(w) || t.isBuffer(w)) {
      if (S) {
        var xe = R ? b : S(b, d.encoder, x, "key", V);
        return [z(xe) + "=" + z(S(w, d.encoder, x, "value", V))];
      }
      return [z(b) + "=" + z(String(w))];
    }
    var ke = [];
    if (typeof w > "u")
      return ke;
    var re;
    if ($ === "comma" && a(w))
      R && S && (w = t.maybeMap(w, S)), re = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
    else if (a(U))
      re = U;
    else {
      var se = Object.keys(w);
      re = I ? se.sort(I) : se;
    }
    var ve = g ? String(b).replace(/\./g, "%2E") : String(b), Te = k && a(w) && w.length === 1 ? ve + "[]" : ve;
    if (P && a(w) && w.length === 0)
      return Te + "[]";
    for (var Ee = 0; Ee < re.length; ++Ee) {
      var le = re[Ee], _e = typeof le == "object" && le && typeof le.value < "u" ? le.value : w[le];
      if (!(_ && _e === null)) {
        var ie = D && g ? String(le).replace(/\./g, "%2E") : String(le), ge = a(w) ? typeof $ == "function" ? $(Te, ie) : Te : Te + (D ? "." + ie : "[" + ie + "]");
        O.set(h, Q);
        var F = e();
        F.set(v, O), l(ke, p(
          _e,
          ge,
          $,
          k,
          P,
          C,
          _,
          g,
          $ === "comma" && R && a(w) ? null : S,
          U,
          I,
          D,
          T,
          V,
          z,
          R,
          x,
          F
        ));
      }
    }
    return ke;
  }, m = function(h) {
    if (!h)
      return d;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = h.charset || d.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var $ = n.default;
    if (typeof h.format < "u") {
      if (!r.call(n.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      $ = h.format;
    }
    var k = n.formatters[$], P = d.filter;
    (typeof h.filter == "function" || a(h.filter)) && (P = h.filter);
    var C;
    if (h.arrayFormat in o ? C = h.arrayFormat : "indices" in h ? C = h.indices ? "indices" : "repeat" : C = d.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var _ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : d.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : d.addQueryPrefix,
      allowDots: _,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : d.allowEmptyArrays,
      arrayFormat: C,
      charset: b,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : d.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? d.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : d.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : d.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : d.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : d.encodeValuesOnly,
      filter: P,
      format: $,
      formatter: k,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : d.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : d.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : d.strictNullHandling
    };
  };
  return si = function(p, h) {
    var b = p, $ = m(h), k, P;
    typeof $.filter == "function" ? (P = $.filter, b = P("", b)) : a($.filter) && (P = $.filter, k = P);
    var C = [];
    if (typeof b != "object" || b === null)
      return "";
    var _ = o[$.arrayFormat], g = _ === "comma" && $.commaRoundTrip;
    k || (k = Object.keys(b)), $.sort && k.sort($.sort);
    for (var S = e(), U = 0; U < k.length; ++U) {
      var I = k[U], D = b[I];
      $.skipNulls && D === null || l(C, y(
        D,
        I,
        _,
        g,
        $.allowEmptyArrays,
        $.strictNullHandling,
        $.skipNulls,
        $.encodeDotInKeys,
        $.encode ? $.encoder : null,
        $.filter,
        $.sort,
        $.allowDots,
        $.serializeDate,
        $.format,
        $.formatter,
        $.encodeValuesOnly,
        $.charset,
        S
      ));
    }
    var T = C.join($.delimiter), V = $.addQueryPrefix === !0 ? "?" : "";
    return $.charsetSentinel && ($.charset === "iso-8859-1" ? V += "utf8=%26%2310003%3B&" : V += "utf8=%E2%9C%93&"), T.length > 0 ? V + T : "";
  }, si;
}
var ii, cc;
function O8() {
  if (cc) return ii;
  cc = 1;
  var e = /* @__PURE__ */ d0(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, o = function(y) {
    return y.replace(/&#(\d+);/g, function(m, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, a = function(y, m, p) {
    if (y && typeof y == "string" && m.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (m.throwOnLimitExceeded && p >= m.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", c = function(m, p) {
    var h = { __proto__: null }, b = p.ignoreQueryPrefix ? m.replace(/^\?/, "") : m;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var $ = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, k = b.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof $ < "u" ? $ + 1 : $
    );
    if (p.throwOnLimitExceeded && typeof $ < "u" && k.length > $)
      throw new RangeError("Parameter limit exceeded. Only " + $ + " parameter" + ($ === 1 ? "" : "s") + " allowed.");
    var P = -1, C, _ = p.charset;
    if (p.charsetSentinel)
      for (C = 0; C < k.length; ++C)
        k[C].indexOf("utf8=") === 0 && (k[C] === l ? _ = "utf-8" : k[C] === s && (_ = "iso-8859-1"), P = C, C = k.length);
    for (C = 0; C < k.length; ++C)
      if (C !== P) {
        var g = k[C], S = g.indexOf("]="), U = S === -1 ? g.indexOf("=") : S + 1, I, D;
        if (U === -1 ? (I = p.decoder(g, r.decoder, _, "key"), D = p.strictNullHandling ? null : "") : (I = p.decoder(g.slice(0, U), r.decoder, _, "key"), I !== null && (D = e.maybeMap(
          a(
            g.slice(U + 1),
            p,
            n(h[I]) ? h[I].length : 0
          ),
          function(V) {
            return p.decoder(V, r.decoder, _, "value");
          }
        ))), D && p.interpretNumericEntities && _ === "iso-8859-1" && (D = o(String(D))), g.indexOf("[]=") > -1 && (D = n(D) ? [D] : D), p.comma && n(D) && D.length > p.arrayLimit) {
          if (p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          D = e.combine([], D, p.arrayLimit, p.plainObjects);
        }
        if (I !== null) {
          var T = t.call(h, I);
          T && (p.duplicates === "combine" || g.indexOf("[]=") > -1) ? h[I] = e.combine(
            h[I],
            D,
            p.arrayLimit,
            p.plainObjects
          ) : (!T || p.duplicates === "last") && (h[I] = D);
        }
      }
    return h;
  }, u = function(y, m, p, h) {
    var b = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var $ = y.slice(0, -1).join("");
      b = Array.isArray(m) && m[$] ? m[$].length : 0;
    }
    for (var k = h ? m : a(m, p, b), P = y.length - 1; P >= 0; --P) {
      var C, _ = y[P];
      if (_ === "[]" && p.parseArrays)
        e.isOverflow(k) ? C = k : C = p.allowEmptyArrays && (k === "" || p.strictNullHandling && k === null) ? [] : e.combine(
          [],
          k,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        C = p.plainObjects ? { __proto__: null } : {};
        var g = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, S = p.decodeDotInKeys ? g.replace(/%2E/g, ".") : g, U = parseInt(S, 10), I = !isNaN(U) && _ !== S && String(U) === S && U >= 0 && p.parseArrays;
        if (!p.parseArrays && S === "")
          C = { 0: k };
        else if (I && U < p.arrayLimit)
          C = [], C[U] = k;
        else {
          if (I && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          I ? (C[U] = k, e.markOverflow(C, U)) : S !== "__proto__" && (C[S] = k);
        }
      }
      k = C;
    }
    return k;
  }, d = function(m, p) {
    var h = p.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, h) && !p.allowPrototypes ? void 0 : [h];
    var b = /(\[[^[\]]*])/, $ = /(\[[^[\]]*])/g, k = b.exec(h), P = k ? h.slice(0, k.index) : h, C = [];
    if (P) {
      if (!p.plainObjects && t.call(Object.prototype, P) && !p.allowPrototypes)
        return;
      C[C.length] = P;
    }
    for (var _ = 0; (k = $.exec(h)) !== null && _ < p.depth; ) {
      _ += 1;
      var g = k[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, g) && !p.allowPrototypes)
        return;
      C[C.length] = k[1];
    }
    if (k) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      C[C.length] = "[" + h.slice(k.index) + "]";
    }
    return C;
  }, f = function(m, p, h, b) {
    if (m) {
      var $ = d(m, h);
      if ($)
        return u($, p, h, b);
    }
  }, v = function(m) {
    if (!m)
      return r;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.decodeDotInKeys < "u" && typeof m.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.decoder !== null && typeof m.decoder < "u" && typeof m.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof m.throwOnLimitExceeded < "u" && typeof m.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var p = typeof m.charset > "u" ? r.charset : m.charset, h = typeof m.duplicates > "u" ? r.duplicates : m.duplicates;
    if (h !== "combine" && h !== "first" && h !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var b = typeof m.allowDots > "u" ? m.decodeDotInKeys === !0 ? !0 : r.allowDots : !!m.allowDots;
    return {
      allowDots: b,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof m.allowPrototypes == "boolean" ? m.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof m.allowSparse == "boolean" ? m.allowSparse : r.allowSparse,
      arrayLimit: typeof m.arrayLimit == "number" ? m.arrayLimit : r.arrayLimit,
      charset: p,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : r.charsetSentinel,
      comma: typeof m.comma == "boolean" ? m.comma : r.comma,
      decodeDotInKeys: typeof m.decodeDotInKeys == "boolean" ? m.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof m.decoder == "function" ? m.decoder : r.decoder,
      delimiter: typeof m.delimiter == "string" || e.isRegExp(m.delimiter) ? m.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof m.depth == "number" || m.depth === !1 ? +m.depth : r.depth,
      duplicates: h,
      ignoreQueryPrefix: m.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof m.interpretNumericEntities == "boolean" ? m.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof m.parameterLimit == "number" ? m.parameterLimit : r.parameterLimit,
      parseArrays: m.parseArrays !== !1,
      plainObjects: typeof m.plainObjects == "boolean" ? m.plainObjects : r.plainObjects,
      strictDepth: typeof m.strictDepth == "boolean" ? !!m.strictDepth : r.strictDepth,
      strictMerge: typeof m.strictMerge == "boolean" ? !!m.strictMerge : r.strictMerge,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof m.throwOnLimitExceeded == "boolean" ? m.throwOnLimitExceeded : !1
    };
  };
  return ii = function(y, m) {
    var p = v(m);
    if (y === "" || y === null || typeof y > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var h = typeof y == "string" ? c(y, p) : y, b = p.plainObjects ? { __proto__: null } : {}, $ = Object.keys(h), k = 0; k < $.length; ++k) {
      var P = $[k], C = f(P, h[P], p, typeof y == "string");
      b = e.merge(b, C, p);
    }
    return p.allowSparse === !0 ? b : e.compact(b);
  }, ii;
}
var li, fc;
function N8() {
  if (fc) return li;
  fc = 1;
  var e = /* @__PURE__ */ T8(), t = /* @__PURE__ */ O8(), n = /* @__PURE__ */ Tl();
  return li = {
    formats: n,
    parse: t,
    stringify: e
  }, li;
}
var pc = /* @__PURE__ */ N8();
function c0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: R8 } = Object.prototype, { getPrototypeOf: Ol } = Object, { iterator: Ua, toStringTag: f0 } = Symbol, Va = /* @__PURE__ */ ((e) => (t) => {
  const n = R8.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ut = (e) => (e = e.toLowerCase(), (t) => Va(t) === e), qa = (e) => (t) => typeof t === e, { isArray: xr } = Array, mr = qa("undefined");
function co(e) {
  return e !== null && !mr(e) && e.constructor !== null && !mr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const p0 = Ut("ArrayBuffer");
function M8(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && p0(e.buffer), t;
}
const I8 = qa("string"), ht = qa("function"), h0 = qa("number"), fo = (e) => e !== null && typeof e == "object", D8 = (e) => e === !0 || e === !1, jo = (e) => {
  if (Va(e) !== "object")
    return !1;
  const t = Ol(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(f0 in e) && !(Ua in e);
}, F8 = (e) => {
  if (!fo(e) || co(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, B8 = Ut("Date"), L8 = Ut("File"), U8 = (e) => !!(e && typeof e.uri < "u"), V8 = (e) => e && typeof e.getParts < "u", q8 = Ut("Blob"), j8 = Ut("FileList"), H8 = (e) => fo(e) && ht(e.pipe);
function G8() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const hc = G8(), mc = typeof hc.FormData < "u" ? hc.FormData : void 0, W8 = (e) => {
  let t;
  return e && (mc && e instanceof mc || ht(e.append) && ((t = Va(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, X8 = Ut("URLSearchParams"), [Y8, K8, Z8, J8] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ut), Q8 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function po(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), xr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (co(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (r = 0; r < s; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function m0(e, t) {
  if (co(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Mn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, v0 = (e) => !mr(e) && e !== Mn;
function Wi() {
  const { caseless: e, skipUndefined: t } = v0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const s = e && m0(n, a) || a;
    jo(n[s]) && jo(o) ? n[s] = Wi(n[s], o) : jo(o) ? n[s] = Wi({}, o) : xr(o) ? n[s] = o.slice() : (!t || !mr(o)) && (n[s] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && po(arguments[o], r);
  return n;
}
const eN = (e, t, n, { allOwnKeys: r } = {}) => (po(
  t,
  (o, a) => {
    n && ht(o) ? Object.defineProperty(e, a, {
      value: c0(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), tN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rN = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Ol(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, oN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, aN = (e) => {
  if (!e) return null;
  if (xr(e)) return e;
  let t = e.length;
  if (!h0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, sN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ol(Uint8Array)), iN = (e, t) => {
  const r = (e && e[Ua]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, lN = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, uN = Ut("HTMLFormElement"), dN = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), vc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), cN = Ut("RegExp"), g0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  po(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, fN = (e) => {
  g0(e, (t, n) => {
    if (ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ht(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, pN = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return xr(e) ? r(e) : r(String(e).split(t)), n;
}, hN = () => {
}, mN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vN(e) {
  return !!(e && ht(e.append) && e[f0] === "FormData" && e[Ua]);
}
const gN = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (fo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (co(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = xr(r) ? [] : {};
        return po(r, (s, l) => {
          const c = n(s, o + 1);
          !mr(c) && (a[l] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, yN = Ut("AsyncFunction"), bN = (e) => e && (fo(e) || ht(e)) && ht(e.then) && ht(e.catch), y0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Mn.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Mn && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Mn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Mn.postMessage)), xN = typeof queueMicrotask < "u" ? queueMicrotask.bind(Mn) : typeof process < "u" && process.nextTick || y0, wN = (e) => e != null && ht(e[Ua]), K = {
  isArray: xr,
  isArrayBuffer: p0,
  isBuffer: co,
  isFormData: W8,
  isArrayBufferView: M8,
  isString: I8,
  isNumber: h0,
  isBoolean: D8,
  isObject: fo,
  isPlainObject: jo,
  isEmptyObject: F8,
  isReadableStream: Y8,
  isRequest: K8,
  isResponse: Z8,
  isHeaders: J8,
  isUndefined: mr,
  isDate: B8,
  isFile: L8,
  isReactNativeBlob: U8,
  isReactNative: V8,
  isBlob: q8,
  isRegExp: cN,
  isFunction: ht,
  isStream: H8,
  isURLSearchParams: X8,
  isTypedArray: sN,
  isFileList: j8,
  forEach: po,
  merge: Wi,
  extend: eN,
  trim: Q8,
  stripBOM: tN,
  inherits: nN,
  toFlatObject: rN,
  kindOf: Va,
  kindOfTest: Ut,
  endsWith: oN,
  toArray: aN,
  forEachEntry: iN,
  matchAll: lN,
  isHTMLForm: uN,
  hasOwnProperty: vc,
  hasOwnProp: vc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: g0,
  freezeMethods: fN,
  toObjectSet: pN,
  toCamelCase: dN,
  noop: hN,
  toFiniteNumber: mN,
  findKey: m0,
  global: Mn,
  isContextDefined: v0,
  isSpecCompliantForm: vN,
  toJSONObject: gN,
  isAsyncFn: yN,
  isThenable: bN,
  setImmediate: y0,
  asap: xN,
  isIterable: wN
};
let Se = class b0 extends Error {
  static from(t, n, r, o, a, s) {
    const l = new b0(t.message, n || t.code, r, o, a);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), s && Object.assign(l, s), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, o, a) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: K.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
Se.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Se.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Se.ECONNABORTED = "ECONNABORTED";
Se.ETIMEDOUT = "ETIMEDOUT";
Se.ERR_NETWORK = "ERR_NETWORK";
Se.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Se.ERR_DEPRECATED = "ERR_DEPRECATED";
Se.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Se.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Se.ERR_CANCELED = "ERR_CANCELED";
Se.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Se.ERR_INVALID_URL = "ERR_INVALID_URL";
const _N = null;
function Xi(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function x0(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ui(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = x0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function kN(e) {
  return K.isArray(e) && !e.some(Xi);
}
const SN = K.toFlatObject(K, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ja(e, t, n) {
  if (!K.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = K.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(p, h) {
      return !K.isUndefined(h[p]);
    }
  );
  const r = n.metaTokens, o = n.visitor || d, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && K.isSpecCompliantForm(t);
  if (!K.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (K.isDate(m))
      return m.toISOString();
    if (K.isBoolean(m))
      return m.toString();
    if (!c && K.isBlob(m))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(m) || K.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, p, h) {
    let b = m;
    if (K.isReactNative(t) && K.isReactNativeBlob(m))
      return t.append(ui(h, p, a), u(m)), !1;
    if (m && !h && typeof m == "object") {
      if (K.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (K.isArray(m) && kN(m) || (K.isFileList(m) || K.endsWith(p, "[]")) && (b = K.toArray(m)))
        return p = x0(p), b.forEach(function(k, P) {
          !(K.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ui([p], P, a) : s === null ? p : p + "[]",
            u(k)
          );
        }), !1;
    }
    return Xi(m) ? !0 : (t.append(ui(h, p, a), u(m)), !1);
  }
  const f = [], v = Object.assign(SN, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Xi
  });
  function y(m, p) {
    if (!K.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), K.forEach(m, function(b, $) {
        (!(K.isUndefined(b) || b === null) && o.call(t, b, K.isString($) ? $.trim() : $, p, v)) === !0 && y(b, p ? p.concat($) : [$]);
      }), f.pop();
    }
  }
  if (!K.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function gc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Nl(e, t) {
  this._pairs = [], e && ja(e, this, t);
}
const w0 = Nl.prototype;
w0.append = function(t, n) {
  this._pairs.push([t, n]);
};
w0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, gc);
  } : gc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function EN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || EN, o = K.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let s;
  if (a ? s = a(t, o) : s = K.isURLSearchParams(t) ? t.toString() : new Nl(t, o).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class yc {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    K.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Rl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, zN = typeof URLSearchParams < "u" ? URLSearchParams : Nl, $N = typeof FormData < "u" ? FormData : null, PN = typeof Blob < "u" ? Blob : null, CN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zN,
    FormData: $N,
    Blob: PN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ml = typeof window < "u" && typeof document < "u", Yi = typeof navigator == "object" && navigator || void 0, AN = Ml && (!Yi || ["ReactNative", "NativeScript", "NS"].indexOf(Yi.product) < 0), TN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ON = Ml && window.location.href || "http://localhost", NN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ml,
  hasStandardBrowserEnv: AN,
  hasStandardBrowserWebWorkerEnv: TN,
  navigator: Yi,
  origin: ON
}, Symbol.toStringTag, { value: "Module" })), dt = {
  ...NN,
  ...CN
};
function RN(e, t) {
  return ja(e, new dt.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return dt.isNode && K.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function MN(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function IN(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function k0(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), c = a >= n.length;
    return s = !s && K.isArray(o) ? o.length : s, c ? (K.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !K.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && K.isArray(o[s]) && (o[s] = IN(o[s])), !l);
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const n = {};
    return K.forEachEntry(e, (r, o) => {
      t(MN(r), o, n, 0);
    }), n;
  }
  return null;
}
function DN(e, t, n) {
  if (K.isString(e))
    try {
      return (t || JSON.parse)(e), K.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ho = {
  transitional: Rl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = K.isObject(t);
      if (a && K.isHTMLForm(t) && (t = new FormData(t)), K.isFormData(t))
        return o ? JSON.stringify(k0(t)) : t;
      if (K.isArrayBuffer(t) || K.isBuffer(t) || K.isStream(t) || K.isFile(t) || K.isBlob(t) || K.isReadableStream(t))
        return t;
      if (K.isArrayBufferView(t))
        return t.buffer;
      if (K.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return RN(t, this.formSerializer).toString();
        if ((l = K.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return ja(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), DN(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || ho.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (K.isResponse(t) || K.isReadableStream(t))
        return t;
      if (t && K.isString(t) && (r && !this.responseType || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError" ? Se.from(l, Se.ERR_BAD_RESPONSE, this, null, this.response) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: dt.classes.FormData,
    Blob: dt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ho.headers[e] = {};
});
const FN = K.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), BN = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && FN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, bc = /* @__PURE__ */ Symbol("internals"), LN = (e) => !/[\r\n]/.test(e);
function S0(e, t) {
  if (!(e === !1 || e == null)) {
    if (K.isArray(e)) {
      e.forEach((n) => S0(n, t));
      return;
    }
    if (!LN(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function UN(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Ho(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(Ho) : UN(String(e));
}
function VN(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const qN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function di(e, t, n, r, o) {
  if (K.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!K.isString(t)) {
    if (K.isString(r))
      return t.indexOf(r) !== -1;
    if (K.isRegExp(r))
      return r.test(t);
  }
}
function jN(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function HN(e, t) {
  const n = K.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, c, u) {
      const d = $r(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = K.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (S0(l, c), o[f || c] = Ho(l));
    }
    const s = (l, c) => K.forEach(l, (u, d) => a(u, d, c));
    if (K.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (K.isString(t) && (t = t.trim()) && !qN(t))
      s(BN(t), n);
    else if (K.isObject(t) && K.isIterable(t)) {
      let l = {}, c, u;
      for (const d of t) {
        if (!K.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = d[0]] = (c = l[u]) ? K.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      s(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = $r(t), t) {
      const r = K.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return VN(o);
        if (K.isFunction(n))
          return n.call(this, o, r);
        if (K.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = $r(t), t) {
      const r = K.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || di(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = $r(s), s) {
        const l = K.findKey(r, s);
        l && (!n || di(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return K.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || di(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return K.forEach(this, (o, a) => {
      const s = K.findKey(r, a);
      if (s) {
        n[s] = Ho(o), delete n[a];
        return;
      }
      const l = t ? jN(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Ho(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return K.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && K.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[bc] = this[bc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = $r(s);
      r[l] || (HN(o, s), r[l] = !0);
    }
    return K.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
mt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
K.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
K.freezeMethods(mt);
function ci(e, t) {
  const n = this || ho, r = t || n, o = mt.from(r.headers);
  let a = r.data;
  return K.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function E0(e) {
  return !!(e && e.__CANCEL__);
}
let mo = class extends Se {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", Se.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function z0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new Se(
      "Request failed with status code " + n.status,
      [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function GN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function WN(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[a];
    s || (s = u), n[o] = c, r[o] = u;
    let f = a, v = 0;
    for (; f !== o; )
      v += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < t)
      return;
    const y = d && u - d;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function XN(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const s = (u, d = Date.now()) => {
    n = d, o = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? s(u, d) : (o = u, a || (a = setTimeout(() => {
      a = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const ma = (e, t, n = 3) => {
  let r = 0;
  const o = WN(50, 250);
  return XN((a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, c = s - r, u = o(c), d = s <= l;
    r = s;
    const f = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l && d ? (l - s) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, xc = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, wc = (e) => (...t) => K.asap(() => e(...t)), YN = dt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, dt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(dt.origin),
  dt.navigator && /(msie|trident)/i.test(dt.navigator.userAgent)
) : () => !0, KN = dt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, s) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      K.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), K.isString(r) && l.push(`path=${r}`), K.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), K.isString(s) && l.push(`SameSite=${s}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ZN(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function JN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $0(e, t, n) {
  let r = !ZN(t);
  return e && (r || n == !1) ? JN(e, t) : t;
}
const _c = (e) => e instanceof mt ? { ...e } : e;
function Xn(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, v) {
    return K.isPlainObject(u) && K.isPlainObject(d) ? K.merge.call({ caseless: v }, u, d) : K.isPlainObject(d) ? K.merge({}, d) : K.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f, v) {
    if (K.isUndefined(d)) {
      if (!K.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, d, f, v);
  }
  function a(u, d) {
    if (!K.isUndefined(d))
      return r(void 0, d);
  }
  function s(u, d) {
    if (K.isUndefined(d)) {
      if (!K.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, d, f) => o(_c(u), _c(d), f, !0)
  };
  return K.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const f = K.hasOwnProp(c, d) ? c[d] : o, v = f(e[d], t[d], d);
    K.isUndefined(v) && f !== l || (n[d] = v);
  }), n;
}
const P0 = (e) => {
  const t = Xn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: l } = t;
  if (t.headers = s = mt.from(s), t.url = _0(
    $0(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && s.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), K.isFormData(n)) {
    if (dt.hasStandardBrowserEnv || dt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (K.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([d, f]) => {
        u.includes(d.toLowerCase()) && s.set(d, f);
      });
    }
  }
  if (dt.hasStandardBrowserEnv && (r && K.isFunction(r) && (r = r(t)), r || r !== !1 && YN(t.url))) {
    const c = o && a && KN.read(a);
    c && s.set(o, c);
  }
  return t;
}, QN = typeof XMLHttpRequest < "u", e6 = QN && function(e) {
  return new Promise(function(n, r) {
    const o = P0(e);
    let a = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = o, d, f, v, y, m;
    function p() {
      y && y(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function b() {
      if (!h)
        return;
      const k = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), C = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: k,
        config: e,
        request: h
      };
      z0(
        function(g) {
          n(g), p();
        },
        function(g) {
          r(g), p();
        },
        C
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new Se("Request aborted", Se.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(P) {
      const C = P && P.message ? P.message : "Network Error", _ = new Se(C, Se.ERR_NETWORK, e, h);
      _.event = P || null, r(_), h = null;
    }, h.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || Rl;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), r(
        new Se(
          P,
          C.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in h && K.forEach(s.toJSON(), function(P, C) {
      h.setRequestHeader(C, P);
    }), K.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([v, m] = ma(u, !0), h.addEventListener("progress", v)), c && h.upload && ([f, y] = ma(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (d = (k) => {
      h && (r(!k || k.type ? new mo(null, e, h) : k), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const $ = GN(o.url);
    if ($ && dt.protocols.indexOf($) === -1) {
      r(
        new Se(
          "Unsupported protocol " + $ + ":",
          Se.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(a || null);
  });
}, t6 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const d = u instanceof Error ? u : this.reason;
        r.abort(
          d instanceof Se ? d : new mo(d instanceof Error ? d.message : d)
        );
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new Se(`timeout of ${t}ms exceeded`, Se.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: c } = r;
    return c.unsubscribe = () => K.asap(l), c;
  }
}, n6 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, r6 = async function* (e, t) {
  for await (const n of o6(e))
    yield* n6(n, t);
}, o6 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, kc = (e, t, n, r) => {
  const o = r6(e, t);
  let a = 0, s, l = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: u, value: d } = await o.next();
          if (u) {
            l(), c.close();
            return;
          }
          let f = d.byteLength;
          if (n) {
            let v = a += f;
            n(v);
          }
          c.enqueue(new Uint8Array(d));
        } catch (u) {
          throw l(u), u;
        }
      },
      cancel(c) {
        return l(c), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Sc = 64 * 1024, { isFunction: To } = K, a6 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(K.global), { ReadableStream: Ec, TextEncoder: zc } = K.global, $c = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, s6 = (e) => {
  e = K.merge.call(
    {
      skipUndefined: !0
    },
    a6,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? To(t) : typeof fetch == "function", a = To(n), s = To(r);
  if (!o)
    return !1;
  const l = o && To(Ec), c = o && (typeof zc == "function" ? /* @__PURE__ */ ((m) => (p) => m.encode(p))(new zc()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), u = a && l && $c(() => {
    let m = !1;
    const p = new Ec(), h = new n(dt.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), m && !h;
  }), d = s && l && $c(() => K.isReadableStream(new r("").body)), f = {
    stream: d && ((m) => m.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !f[m] && (f[m] = (p, h) => {
      let b = p && p[m];
      if (b)
        return b.call(p);
      throw new Se(
        `Response type '${m}' is not supported`,
        Se.ERR_NOT_SUPPORT,
        h
      );
    });
  });
  const v = async (m) => {
    if (m == null)
      return 0;
    if (K.isBlob(m))
      return m.size;
    if (K.isSpecCompliantForm(m))
      return (await new n(dt.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (K.isArrayBufferView(m) || K.isArrayBuffer(m))
      return m.byteLength;
    if (K.isURLSearchParams(m) && (m = m + ""), K.isString(m))
      return (await c(m)).byteLength;
  }, y = async (m, p) => {
    const h = K.toFiniteNumber(m.getContentLength());
    return h ?? v(p);
  };
  return async (m) => {
    let {
      url: p,
      method: h,
      data: b,
      signal: $,
      cancelToken: k,
      timeout: P,
      onDownloadProgress: C,
      onUploadProgress: _,
      responseType: g,
      headers: S,
      withCredentials: U = "same-origin",
      fetchOptions: I
    } = P0(m), D = t || fetch;
    g = g ? (g + "").toLowerCase() : "text";
    let T = t6(
      [$, k && k.toAbortSignal()],
      P
    ), V = null;
    const z = T && T.unsubscribe && (() => {
      T.unsubscribe();
    });
    let R;
    try {
      if (_ && u && h !== "get" && h !== "head" && (R = await y(S, b)) !== 0) {
        let ne = new n(p, {
          method: "POST",
          body: b,
          duplex: "half"
        }), pe;
        if (K.isFormData(b) && (pe = ne.headers.get("content-type")) && S.setContentType(pe), ne.body) {
          const [xe, ke] = xc(
            R,
            ma(wc(_))
          );
          b = kc(ne.body, Sc, xe, ke);
        }
      }
      K.isString(U) || (U = U ? "include" : "omit");
      const x = a && "credentials" in n.prototype, O = {
        ...I,
        signal: T,
        method: h.toUpperCase(),
        headers: S.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: x ? U : void 0
      };
      V = a && new n(p, O);
      let w = await (a ? D(V, I) : D(p, O));
      const q = d && (g === "stream" || g === "response");
      if (d && (C || q && z)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach((re) => {
          ne[re] = w[re];
        });
        const pe = K.toFiniteNumber(w.headers.get("content-length")), [xe, ke] = C && xc(
          pe,
          ma(wc(C), !0)
        ) || [];
        w = new r(
          kc(w.body, Sc, xe, () => {
            ke && ke(), z && z();
          }),
          ne
        );
      }
      g = g || "text";
      let Q = await f[K.findKey(f, g) || "text"](
        w,
        m
      );
      return !q && z && z(), await new Promise((ne, pe) => {
        z0(ne, pe, {
          data: Q,
          headers: mt.from(w.headers),
          status: w.status,
          statusText: w.statusText,
          config: m,
          request: V
        });
      });
    } catch (x) {
      throw z && z(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
        new Se(
          "Network Error",
          Se.ERR_NETWORK,
          m,
          V,
          x && x.response
        ),
        {
          cause: x.cause || x
        }
      ) : Se.from(x, x && x.code, m, V, x && x.response);
    }
  };
}, i6 = /* @__PURE__ */ new Map(), C0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let s = a.length, l = s, c, u, d = i6;
  for (; l--; )
    c = a[l], u = d.get(c), u === void 0 && d.set(c, u = l ? /* @__PURE__ */ new Map() : s6(t)), d = u;
  return u;
};
C0();
const Il = {
  http: _N,
  xhr: e6,
  fetch: {
    get: C0
  }
};
K.forEach(Il, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pc = (e) => `- ${e}`, l6 = (e) => K.isFunction(e) || e === null || e === !1;
function u6(e, t) {
  e = K.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (o = r, !l6(r) && (o = Il[(l = String(r)).toLowerCase()], o === void 0))
      throw new Se(`Unknown adapter '${l}'`);
    if (o && (K.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(a).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(Pc).join(`
`) : " " + Pc(s[0]) : "as no adapter specified";
    throw new Se(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const A0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: u6,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Il
};
function fi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new mo(null, e);
}
function Cc(e) {
  return fi(e), e.headers = mt.from(e.headers), e.data = ci.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), A0.getAdapter(e.adapter || ho.adapter, e)(e).then(
    function(r) {
      return fi(e), r.data = ci.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return E0(r) || (fi(e), r && r.response && (r.response.data = ci.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const T0 = "1.15.0", Ha = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ha[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ac = {};
Ha.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + T0 + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new Se(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Se.ERR_DEPRECATED
      );
    return n && !Ac[s] && (Ac[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
Ha.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function d6(e, t, n) {
  if (typeof e != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const l = e[a], c = l === void 0 || s(l, a, e);
      if (c !== !0)
        throw new Se(
          "option " + a + " must be " + c,
          Se.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Se("Unknown option " + a, Se.ERR_BAD_OPTION);
  }
}
const Go = {
  assertOptions: d6,
  validators: Ha
}, Et = Go.validators;
let Ln = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new yc(),
      response: new yc()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = (() => {
          if (!o.stack)
            return "";
          const s = o.stack.indexOf(`
`);
          return s === -1 ? "" : o.stack.slice(s + 1);
        })();
        try {
          if (!r.stack)
            r.stack = a;
          else if (a) {
            const s = a.indexOf(`
`), l = s === -1 ? -1 : a.indexOf(`
`, s + 1), c = l === -1 ? "" : a.slice(l + 1);
            String(r.stack).endsWith(c) || (r.stack += `
` + a);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Xn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Go.assertOptions(
      r,
      {
        silentJSONParsing: Et.transitional(Et.boolean),
        forcedJSONParsing: Et.transitional(Et.boolean),
        clarifyTimeoutError: Et.transitional(Et.boolean),
        legacyInterceptorReqResOrdering: Et.transitional(Et.boolean)
      },
      !1
    ), o != null && (K.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Go.assertOptions(
      o,
      {
        encode: Et.function,
        serialize: Et.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Go.assertOptions(
      n,
      {
        baseUrl: Et.spelling("baseURL"),
        withXsrfToken: Et.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && K.merge(a.common, a[n.method]);
    a && K.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
      delete a[m];
    }), n.headers = mt.concat(s, a);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1)
        return;
      c = c && p.synchronous;
      const h = n.transitional || Rl;
      h && h.legacyInterceptorReqResOrdering ? l.unshift(p.fulfilled, p.rejected) : l.push(p.fulfilled, p.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let d, f = 0, v;
    if (!c) {
      const m = [Cc.bind(this), void 0];
      for (m.unshift(...l), m.push(...u), v = m.length, d = Promise.resolve(n); f < v; )
        d = d.then(m[f++], m[f++]);
      return d;
    }
    v = l.length;
    let y = n;
    for (; f < v; ) {
      const m = l[f++], p = l[f++];
      try {
        y = m(y);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      d = Cc.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, v = u.length; f < v; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = Xn(this.defaults, t);
    const n = $0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _0(n, t.params, t.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function(t) {
  Ln.prototype[t] = function(n, r) {
    return this.request(
      Xn(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
K.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, l) {
      return this.request(
        Xn(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: s
        })
      );
    };
  }
  Ln.prototype[t] = n(), Ln.prototype[t + "Form"] = n(!0);
});
let c6 = class O0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, l) {
      r.reason || (r.reason = new mo(a, s, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new O0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function f6(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function p6(e) {
  return K.isObject(e) && e.isAxiosError === !0;
}
const Ki = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ki).forEach(([e, t]) => {
  Ki[t] = e;
});
function N0(e) {
  const t = new Ln(e), n = c0(Ln.prototype.request, t);
  return K.extend(n, Ln.prototype, t, { allOwnKeys: !0 }), K.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return N0(Xn(e, o));
  }, n;
}
const Je = N0(ho);
Je.Axios = Ln;
Je.CanceledError = mo;
Je.CancelToken = c6;
Je.isCancel = E0;
Je.VERSION = T0;
Je.toFormData = ja;
Je.AxiosError = Se;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = f6;
Je.isAxiosError = p6;
Je.mergeConfig = Xn;
Je.AxiosHeaders = mt;
Je.formToJSON = (e) => k0(K.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = A0.getAdapter;
Je.HttpStatusCode = Ki;
Je.default = Je;
const {
  Axios: oM,
  AxiosError: aM,
  CanceledError: sM,
  isCancel: R0,
  CancelToken: iM,
  VERSION: lM,
  all: uM,
  Cancel: dM,
  isAxiosError: M0,
  spread: cM,
  toFormData: fM,
  AxiosHeaders: pM,
  HttpStatusCode: hM,
  formToJSON: mM,
  getAdapter: vM,
  mergeConfig: h6
} = Je;
var m6 = class {
  constructor(e) {
    this.config = {}, this.defaults = e;
  }
  extend(e) {
    return e && (this.defaults = { ...this.defaults, ...e }), this;
  }
  replace(e) {
    this.config = e;
  }
  get(e) {
    return e0(this.config, e) ? wt(this.config, e) : wt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? zt(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      zt(this.config, n, r);
    });
  }
}, En = new m6({
  form: {
    recentlySuccessfulDuration: 2e3,
    forceIndicesArrayFormatInFormData: !0,
    withAllErrors: !1
  },
  future: {
    preserveEqualProps: !1,
    useDataInertiaHeadAttribute: !1,
    useDialogForErrorModal: !1,
    useScriptElementForInitialPage: !1
  },
  prefetch: {
    cacheFor: 3e4,
    hoverDelay: 75
  }
});
function ro(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function St(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Tc = (e) => St("before", { cancelable: !0, detail: { visit: e } }), v6 = (e) => St("error", { detail: { errors: e } }), g6 = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), y6 = (e) => St("finish", { detail: { visit: e } }), b6 = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), x6 = (e) => St("beforeUpdate", { detail: { page: e } }), Lr = (e) => St("navigate", { detail: { page: e } }), w6 = (e) => St("progress", { detail: { progress: e } }), _6 = (e) => St("start", { detail: { visit: e } }), k6 = (e) => St("success", { detail: { page: e } }), S6 = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), E6 = (e) => St("prefetching", { detail: { visit: e } }), va = (e) => St("flash", { detail: { flash: e } }), ct = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u")
      return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    const n = this.get(e);
    n === null ? this.set(e, t) : this.set(e, { ...n, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    const n = this.get(e);
    n !== null && (delete n[t], this.set(e, n));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
ct.locationVisitKey = "inertiaLocationVisit";
var z6 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = I0(), n = await D0(), r = await O6(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await P6(t, r, e);
}, vr = {
  key: "historyKey",
  iv: "historyIv"
}, $6 = async (e) => {
  const t = I0(), n = await D0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await C6(t, n, e);
}, P6 = async (e, t, n) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    a.subarray(0, s.written)
  );
}, C6 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const r = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    n
  );
  return JSON.parse(new TextDecoder().decode(r));
}, I0 = () => {
  const e = ct.get(vr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return ct.set(vr.iv, Array.from(t)), t;
}, A6 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), T6 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  ct.set(vr.key, Array.from(new Uint8Array(t)));
}, O6 = async (e) => {
  if (e)
    return e;
  const t = await A6();
  return t ? (await T6(t), t) : null;
}, D0 = async () => {
  const e = ct.get(vr.key);
  return e ? await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(e),
    {
      name: "AES-GCM",
      length: 256
    },
    !0,
    ["encrypt", "decrypt"]
  ) : null;
}, F0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !N6(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, N6 = (e, t) => {
  switch (typeof e) {
    case "object":
      return F0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, R6 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Oc = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(R6))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, M6 = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n, cacheTags: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const a = this.findCached(e);
    if (!e.fresh && a && a.staleTimestamp > Date.now())
      return Promise.resolve();
    const [s, l] = this.extractStaleValues(n), c = new Promise((u, d) => {
      t({
        ...e,
        onCancel: () => {
          this.remove(e), e.onCancel(), d();
        },
        onError: (f) => {
          this.remove(e), e.onError(f), d();
        },
        onPrefetching(f) {
          e.onPrefetching(f);
        },
        onPrefetched(f, v) {
          e.onPrefetched(f, v);
        },
        onPrefetchResponse(f) {
          u(f);
        },
        onPrefetchError(f) {
          Ht.removeFromInFlight(e), d(f);
        }
      });
    }).then((u) => {
      this.remove(e);
      const d = u.getPageResponse();
      me.mergeOncePropsIntoResponse(d), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + s,
        expiresAt: Date.now() + l,
        response: c,
        singleUse: l === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(r) ? r : [r]
      });
      const f = this.getShortestOncePropTtl(d);
      return this.scheduleForRemoval(
        e,
        f ? Math.min(l, f) : l
      ), this.removeFromInFlight(e), u.handlePrefetch(), u;
    });
    return this.inFlightRequests.push({
      params: { ...e },
      response: c,
      staleTimestamp: null,
      inFlight: !0
    }), c;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  removeByTags(e) {
    this.cached = this.cached.filter((t) => !t.tags.some((n) => e.includes(n)));
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  removeFromInFlight(e) {
    this.inFlightRequests = this.inFlightRequests.filter((t) => !this.paramsAreEqual(t.params, e));
  }
  extractStaleValues(e) {
    const [t, n] = this.cacheForToStaleAndExpires(e);
    return [Oc(t), Oc(n)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e))
      return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    const t = this.removalTimers.find((n) => this.paramsAreEqual(n.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((n) => n !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      const n = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({
        params: e,
        timer: n
      });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    const n = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = n, e.response.then((r) => {
      if (this.currentUseId === n)
        return r.mergeParams({ ...t, onPrefetched: () => {
        } }), this.removeSingleUseItems(t), r.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  withoutPurposePrefetchHeader(e) {
    const t = lt(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return F0(
      this.withoutPurposePrefetchHeader(e),
      this.withoutPurposePrefetchHeader(t),
      [
        "showProgress",
        "replace",
        "prefetch",
        "preserveScroll",
        "preserveState",
        "onBefore",
        "onBeforeUpdate",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onFlash",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async",
        "viewTransition"
      ]
    );
  }
  updateCachedOncePropsFromCurrentPage() {
    this.cached.forEach((e) => {
      e.response.then((t) => {
        const n = t.getPageResponse();
        me.mergeOncePropsIntoResponse(n, { force: !0 });
        for (const [s, l] of Object.entries(n.deferredProps ?? {})) {
          const c = l.filter((u) => n.props[u] === void 0);
          c.length > 0 ? n.deferredProps[s] = c : delete n.deferredProps[s];
        }
        const r = this.getShortestOncePropTtl(n);
        if (r === null)
          return;
        const o = e.expiresAt - Date.now(), a = Math.min(o, r);
        a > 0 ? this.scheduleForRemoval(e.params, a) : this.remove(e.params);
      });
    });
  }
  getShortestOncePropTtl(e) {
    const t = Object.values(e.onceProps ?? {}).map((n) => n.expiresAt).filter((n) => !!n);
    return t.length === 0 ? null : Math.min(...t) - Date.now();
  }
}, Ht = new M6(), pi = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, I6 = (e) => {
  const t = (s) => {
    const l = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(l.overflowY) ? !0 : l.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowX) ? !0 : r(l.maxHeight, s.style.height) || o(s, "height");
  }, n = (s) => {
    const l = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(l.overflowX) ? !0 : l.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowY) ? !0 : r(l.maxWidth, s.style.width) || o(s, "width");
  }, r = (s, l) => !!(s && s !== "none" && s !== "0px" || l && l !== "auto" && l !== "0"), o = (s, l) => {
    const c = s.parentElement;
    if (!c)
      return !1;
    const u = window.getComputedStyle(c);
    if (["flex", "inline-flex"].includes(u.display)) {
      const d = ["column", "column-reverse"].includes(u.flexDirection);
      return l === "height" ? d : !d;
    }
    return ["grid", "inline-grid"].includes(u.display);
  };
  let a = e?.parentElement;
  for (; a; ) {
    const s = t(a) || n(a);
    if (window.getComputedStyle(a).display !== "contents" && s)
      return a;
    a = a.parentElement;
  }
  return null;
}, B0 = (e, t) => {
  if (!t)
    return e.filter((a) => pi(a));
  const n = e.indexOf(t), r = [], o = [];
  for (let a = n; a >= 0; a--) {
    const s = e[a];
    if (pi(s))
      r.push(s);
    else
      break;
  }
  for (let a = n + 1; a < e.length; a++) {
    const s = e[a];
    if (pi(s))
      o.push(s);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Ur = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Ur(e, t - 1) : e();
  });
}, Rr = typeof window > "u", D6 = !Rr && /Firefox/i.test(window.navigator.userAgent), ft = class {
  static save() {
    De.saveScrollPositions(this.getScrollRegions());
  }
  static getScrollRegions() {
    return Array.from(this.regions()).map((e) => ({
      top: e.scrollTop,
      left: e.scrollLeft
    }));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static scrollToTop() {
    if (D6 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Ur(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    !Rr && window.location.hash || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Rr ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Rr || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Rr || this.regions().forEach((t, n) => {
      const r = e[n];
      r && (typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left));
    });
  }
  static restoreDocument() {
    const e = De.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    De.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, Dl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function Zi(e) {
  return Dl(e) || e instanceof FormData && Array.from(e.values()).some((t) => Zi(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Zi(t));
}
var Ji = (e) => e instanceof FormData;
function L0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && V0(t, U0(n, o, "indices"), e[o], r);
  return t;
}
function U0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function V0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => V0(e, U0(t, o.toString(), r), n[o], r)
    );
  if (n instanceof Date)
    return e.append(t, n.toISOString());
  if (n instanceof File)
    return e.append(t, n, n.name);
  if (n instanceof Blob)
    return e.append(t, n);
  if (typeof n == "boolean")
    return e.append(t, n ? "1" : "0");
  if (typeof n == "string")
    return e.append(t, n);
  if (typeof n == "number")
    return e.append(t, `${n}`);
  if (n == null)
    return e.append(t, "");
  L0(n, e, t, r);
}
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var F6 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? $t(e) : e;
  if ((Zi(t) || r) && !Ji(t) && (En.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = L0(t, new FormData(), null, o)), Ji(t))
    return [a, t];
  const [s, l] = Fl(n, a, t, o);
  return [$t(s), l];
};
function Fl(e, t, n, r = "brackets") {
  const o = e === "get" && !Ji(n) && Object.keys(n).length > 0, a = q0(t.toString()), s = a || t.toString().startsWith("/") || t.toString() === "", l = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), c = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, d = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = pc.stringify(
      { ...pc.parse(f.search, y), ...n },
      {
        encodeValuesOnly: !0,
        arrayFormat: v ? "indices" : r
      }
    );
  }
  return [
    [
      a ? `${f.protocol}//${f.host}` : "",
      s ? f.pathname : "",
      l ? f.pathname.substring(c ? 0 : 1) : "",
      u ? f.search : "",
      d ? f.hash : ""
    ].join(""),
    o ? {} : n
  ];
}
function ga(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Nc = (e, t) => {
  e.hash && !t.hash && ga(e).href === t.href && (t.hash = e.hash);
}, ya = (e, t) => ga(e).href === ga(t).href, B6 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function dn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function q0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function L6(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var U6 = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1, this.pendingDeferredProps = null, this.historyQuotaExceeded = !1;
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: n,
    onFlash: r
  }) {
    return this.page = { ...e, flash: e.flash ?? {} }, this.swapComponent = t, this.resolveComponent = n, this.onFlashCallback = r, Yt.on("historyQuotaExceeded", () => {
      this.historyQuotaExceeded = !0;
    }), this;
  }
  set(e, {
    replace: t = !1,
    preserveScroll: n = !1,
    preserveState: r = !1,
    viewTransition: o = !1
  } = {}) {
    Object.keys(e.deferredProps || {}).length && (this.pendingDeferredProps = {
      deferredProps: e.deferredProps,
      component: e.component,
      url: e.url
    }, e.initialDeferredProps === void 0 && (e.initialDeferredProps = e.deferredProps)), this.componentId = {};
    const a = this.componentId;
    return e.clearHistory && De.clear(), this.resolve(e.component).then((s) => {
      if (a !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const l = typeof window > "u", c = l ? new URL(e.url) : window.location, u = !l && n ? ft.getScrollRegions() : [];
      t = t || ya($t(e.url), c);
      const d = { ...e, flash: {} };
      return new Promise(
        (f) => t ? De.replaceState(d, f) : De.pushState(d, f)
      ).then(() => {
        const f = !this.isTheSame(e);
        if (!f && Object.keys(e.props.errors || {}).length > 0 && (o = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && Ht.updateCachedOncePropsFromCurrentPage(), f && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: s,
          page: e,
          preserveState: r,
          viewTransition: o
        }).then(() => {
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(u)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Yt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Lr(e);
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, De.setCurrent(e), this.swap({ component: n, page: e, preserveState: t, viewTransition: !1 })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  getWithoutFlashData() {
    return { ...this.page, flash: {} };
  }
  hasOnceProps() {
    return Object.keys(this.page.onceProps ?? {}).length > 0;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setFlash(e) {
    this.page = { ...this.page, flash: e }, this.onFlashCallback?.(e);
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({
    component: e,
    page: t,
    preserveState: n,
    viewTransition: r
  }) {
    const o = () => this.swapComponent({ component: e, page: t, preserveState: n });
    if (!r || !document?.startViewTransition || document.visibilityState === "hidden")
      return o();
    const a = typeof r == "boolean" ? () => null : r;
    return new Promise((s) => {
      const l = document.startViewTransition(() => o().then(s));
      a(l);
    });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((n) => n.event !== e && n.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
  mergeOncePropsIntoResponse(e, { force: t = !1 } = {}) {
    Object.entries(e.onceProps ?? {}).forEach(([n, r]) => {
      const o = this.page.onceProps?.[n];
      o !== void 0 && (t || e.props[r.prop] === void 0) && (e.props[r.prop] = this.page.props[o.prop], e.onceProps[n].expiresAt = o.expiresAt);
    });
  }
}, me = new U6(), Ga = class {
  constructor() {
    this.items = [], this.processingPromise = null;
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().finally(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    const e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
}, or = typeof window > "u", Pr = new Ga(), Rc = !or && /CriOS/.test(window.navigator.userAgent), V6 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    this.replaceState({
      ...me.getWithoutFlashData(),
      rememberedState: {
        ...me.get()?.rememberedState ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    if (!or)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!or) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Pr.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Rc ? new Promise((o) => {
          setTimeout(() => r().then(o));
        }) : r();
      }));
    }
  }
  clonePageProps(e) {
    try {
      return structuredClone(e.props), e;
    } catch {
      return {
        ...e,
        props: lt(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((n) => e.encryptHistory ? z6(t).then(n) : n(t));
  }
  processQueue() {
    return Pr.process();
  }
  decrypt(e = null) {
    if (or)
      return Promise.resolve(e ?? me.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? $6(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Pr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !_n(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    Pr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !_n(this.getDocumentScrollPosition(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          documentScrollPosition: e
        });
    }));
  }
  getScrollRegions() {
    return window.history.state?.scrollRegions || [];
  }
  getDocumentScrollPosition() {
    return window.history.state?.documentScrollPosition || { top: 0, left: 0 };
  }
  replaceState(e, t = null) {
    if (_n(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (me.merge(r), !or) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Pr.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Rc ? new Promise((s) => {
          setTimeout(() => a().then(s));
        }) : a();
      }));
    }
  }
  isHistoryThrottleError(e) {
    return e instanceof Error && e.name === "SecurityError" && (e.message.includes("history.pushState") || e.message.includes("history.replaceState"));
  }
  isQuotaExceededError(e) {
    return e instanceof Error && e.name === "QuotaExceededError";
  }
  withThrottleProtection(e) {
    return Promise.resolve().then(() => {
      try {
        return e();
      } catch (t) {
        if (!this.isHistoryThrottleError(t))
          throw t;
        console.error(t.message);
      }
    });
  }
  doReplaceState(e, t) {
    return this.withThrottleProtection(() => {
      window.history.replaceState(
        {
          ...e,
          scrollRegions: e.scrollRegions ?? window.history.state?.scrollRegions,
          documentScrollPosition: e.documentScrollPosition ?? window.history.state?.documentScrollPosition
        },
        "",
        t
      );
    });
  }
  doPushState(e, t) {
    return this.withThrottleProtection(() => {
      try {
        window.history.pushState(e, "", t);
      } catch (n) {
        if (!this.isQuotaExceededError(n))
          throw n;
        Yt.fireInternalEvent("historyQuotaExceeded", t);
      }
    });
  }
  getState(e, t) {
    return this.current?.[e] ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  clearInitialState(e) {
    this.initialState && this.initialState[e] !== void 0 && delete this.initialState[e];
  }
  browserHasHistoryEntry() {
    return !or && !!window.history.state?.page;
  }
  clear() {
    ct.remove(vr.key), ct.remove(vr.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var De = new V6(), q6 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", ro(ft.onWindowScroll.bind(ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", ro(ft.onScroll.bind(ft), 100), !0);
  }
  onGlobalEvent(e, t) {
    const n = ((r) => {
      const o = t(r);
      r.cancelable && !r.defaultPrevented && o === !1 && r.preventDefault();
    });
    return this.registerListener(`inertia:${e}`, n);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== t);
    };
  }
  onMissingHistoryItem() {
    me.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e, ...t) {
    this.internalListeners.filter((n) => n.event === e).forEach((n) => n.listener(...t));
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  // bfcache restores pages without firing `popstate`, so we use `pageshow` to
  // re-validate encrypted history entries after `clearHistory` removed the keys.
  // https://web.dev/articles/bfcache
  handlePageshowEvent(e) {
    e.persisted && De.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const n = $t(me.get().url);
      n.hash = window.location.hash, De.replaceState({ ...me.getWithoutFlashData(), url: n.href }), ft.reset();
      return;
    }
    if (!De.isValidState(t))
      return this.onMissingHistoryItem();
    De.decrypt(t.page).then((n) => {
      if (me.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ze.cancelAll({ prefetch: !1 }), me.setQuietly(n, { preserveState: !1 }).then(() => {
        ft.restore(De.getScrollRegions()), Lr(me.get());
        const r = {}, o = me.get().props;
        for (const [a, s] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const l = s.filter((c) => o[c] === void 0);
          l.length > 0 && (r[a] = l);
        }
        Object.keys(r).length > 0 && this.fireInternalEvent("loadDeferredProps", r);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Yt = new q6(), j6 = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, hi = new j6(), H6 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    hi.isReload() && (De.deleteState(De.rememberedState), De.clearInitialState(De.rememberedState));
  }
  static handleBackForward() {
    if (!hi.isBackForward() || !De.browserHasHistoryEntry())
      return !1;
    const e = De.getScrollRegions();
    return De.decrypt().then((t) => {
      me.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Lr(me.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!ct.exists(ct.locationVisitKey))
      return !1;
    const e = ct.get(ct.locationVisitKey) || {};
    return ct.remove(ct.locationVisitKey), typeof window < "u" && me.setUrlHash(window.location.hash), De.decrypt(me.get()).then(() => {
      const t = De.getState(De.rememberedState, {}), n = De.getScrollRegions();
      me.remember(t), me.set(me.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && ft.restore(n), Lr(me.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && me.setUrlHash(window.location.hash), me.set(me.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      hi.isReload() ? ft.restore(De.getScrollRegions()) : ft.scrollToAnchor();
      const e = me.get();
      Lr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => va(t));
    });
  }
}, G6 = class {
  constructor(e, t, n) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = n.keepAlive ?? !1, this.cb = t, this.interval = e, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? !1 : e, this.throttle && (this.cbCount = 0);
  }
}, W6 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new G6(e, t, n);
    return this.polls.push(r), {
      stop: () => r.stop(),
      start: () => r.start()
    };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((e) => e.isInBackground(document.hidden));
      },
      !1
    );
  }
}, X6 = new W6(), Qi = class Wo {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch)
      this.params = t;
    else {
      const n = {
        onBefore: this.wrapCallback(t, "onBefore"),
        onBeforeUpdate: this.wrapCallback(t, "onBeforeUpdate"),
        onStart: this.wrapCallback(t, "onStart"),
        onProgress: this.wrapCallback(t, "onProgress"),
        onFinish: this.wrapCallback(t, "onFinish"),
        onCancel: this.wrapCallback(t, "onCancel"),
        onSuccess: this.wrapCallback(t, "onSuccess"),
        onError: this.wrapCallback(t, "onError"),
        onFlash: this.wrapCallback(t, "onFlash"),
        onCancelToken: this.wrapCallback(t, "onCancelToken"),
        onPrefetched: this.wrapCallback(t, "onPrefetched"),
        onPrefetching: this.wrapCallback(t, "onPrefetching")
      };
      this.params = {
        ...t,
        ...n,
        onPrefetchResponse: t.onPrefetchResponse || (() => {
        }),
        onPrefetchError: t.onPrefetchError || (() => {
        })
      };
    }
  }
  static create(t) {
    return new Wo(t);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  isPrefetch() {
    return this.params.prefetch === !0;
  }
  isDeferredPropsRequest() {
    return this.params.deferredProps === !0;
  }
  onCancelToken(t) {
    this.params.onCancelToken({
      cancel: t
    });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: t = !0, interrupted: n = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = t, this.params.interrupted = n;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(t) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(t);
  }
  onPrefetchError(t) {
    this.params.onPrefetchError && this.params.onPrefetchError(t);
  }
  all() {
    return this.params;
  }
  headers() {
    const t = {
      ...this.params.headers
    };
    this.isPartial() && (t["X-Inertia-Partial-Component"] = me.get().component);
    const n = this.params.only.concat(this.params.reset);
    return n.length > 0 && (t["X-Inertia-Partial-Data"] = n.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = Wo.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Wo.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: n }) => {
      this.params[t](...n);
    });
  }
  merge(t) {
    this.params = {
      ...this.params,
      ...t
    };
  }
  wrapCallback(t, n) {
    return (...r) => {
      this.recordCallback(n, r), t[n](...r);
    };
  }
  recordCallback(t, n) {
    this.callbacks.push({ name: t, args: n });
  }
  static resolvePreserveOption(t, n) {
    return typeof t == "function" ? t(n) : t === "errors" ? Object.keys(n.props.errors || {}).length > 0 : t;
  }
}, j0 = {
  modal: null,
  listener: null,
  createIframeAndPage(e) {
    typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
      e
    )}`);
    const t = document.createElement("html");
    t.innerHTML = e, t.querySelectorAll("a").forEach((r) => r.setAttribute("target", "_top"));
    const n = document.createElement("iframe");
    return n.style.backgroundColor = "white", n.style.borderRadius = "5px", n.style.width = "100%", n.style.height = "100%", { iframe: n, page: t };
  },
  show(e) {
    const { iframe: t, page: n } = this.createIframeAndPage(e);
    if (this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide()), this.modal.appendChild(t), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !t.contentWindow)
      throw new Error("iframe not yet ready.");
    t.contentWindow.document.open(), t.contentWindow.document.write(n.outerHTML), t.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
  },
  hide() {
    this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
  },
  hideOnEscape(e) {
    e.keyCode === 27 && this.hide();
  }
}, Y6 = {
  show(e) {
    const { iframe: t, page: n } = j0.createIframeAndPage(e);
    t.style.boxSizing = "border-box", t.style.display = "block";
    const r = document.createElement("dialog");
    r.id = "inertia-error-dialog", Object.assign(r.style, {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: "0",
      margin: "auto",
      border: "none",
      backgroundColor: "transparent"
    });
    const o = document.createElement("style");
    if (o.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `, document.head.appendChild(o), r.addEventListener("click", (a) => {
      a.target === r && r.close();
    }), r.addEventListener("close", () => {
      o.remove(), r.remove();
    }), r.appendChild(t), document.body.prepend(r), r.showModal(), r.focus(), !t.contentWindow)
      throw new Error("iframe not yet ready.");
    t.contentWindow.document.open(), t.contentWindow.document.write(n.outerHTML), t.contentWindow.document.close();
  }
}, K6 = new Ga(), Mc = class H0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new H0(t, n, r);
  }
  async handlePrefetch() {
    ya(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return K6.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), S6(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await De.processQueue(), De.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = me.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return v6(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(me.get().url);
    const { flash: n } = me.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (va(n), this.requestParams.all().onFlash(n)), k6(me.get()), await this.requestParams.all().onSuccess(me.get()), De.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  getPageResponse() {
    const t = this.getDataFromResponse(this.response.data);
    return typeof t == "object" ? this.response.data = { ...t, flash: t.flash ?? {} } : this.response.data = t;
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      const n = $t(this.getHeader("x-inertia-location"));
      return Nc(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (b6(t))
      return En.get("future.useDialogForErrorModal") ? Y6.show(t.data) : j0.show(t.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(t) {
    return this.response.status === t;
  }
  getHeader(t) {
    return this.response.headers[t];
  }
  hasHeader(t) {
    return this.getHeader(t) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(t) {
    try {
      if (ct.set(ct.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === !0
      }), typeof window > "u")
        return;
      ya(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), me.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = De.preserveUrl ? me.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), x6(t), me.set(t, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState,
      viewTransition: this.requestParams.all().viewTransition
    })) : Promise.resolve();
  }
  getDataFromResponse(t) {
    if (typeof t != "string")
      return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  shouldSetPage(t) {
    if (!this.requestParams.all().async || this.originatingPage.component !== t.component)
      return !0;
    if (this.originatingPage.component !== me.get().component)
      return !1;
    const n = $t(this.originatingPage.url), r = $t(me.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = $t(t.url);
    return Nc(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== me.get().component || En.get("future.preserveEqualProps") !== !0)
      return;
    const n = me.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      _n(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== me.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], a = t.matchPropsOn || [], s = (c, u) => {
      const d = wt(me.get().props, c), f = wt(t.props, c);
      if (Array.isArray(f)) {
        const v = this.mergeOrMatchItems(
          d || [],
          f,
          c,
          a,
          u
        );
        zt(t.props, c, v);
      } else if (typeof f == "object" && f !== null) {
        const v = {
          ...d || {},
          ...f
        };
        zt(t.props, c, v);
      }
    };
    if (n.forEach((c) => s(c, !0)), r.forEach((c) => s(c, !1)), o.forEach((c) => {
      const u = me.get().props[c], d = t.props[c], f = (v, y, m) => Array.isArray(y) ? this.mergeOrMatchItems(v, y, m, a) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (p, h) => (p[h] = f(v ? v[h] : void 0, y[h], `${m}.${h}`), p),
        { ...v }
      ) : y;
      t.props[c] = f(u, d, c);
    }), t.props = { ...me.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const c = me.get().props.errors;
      c && Object.keys(c).length > 0 && (t.props.errors = c);
    }
    me.get().scrollProps && (t.scrollProps = {
      ...me.get().scrollProps || {},
      ...t.scrollProps || {}
    }), me.hasOnceProps() && (t.onceProps = {
      ...me.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...me.get().flash });
    const l = me.get().initialDeferredProps;
    l && Object.keys(l).length > 0 && (t.initialDeferredProps = l);
  }
  mergeOrMatchItems(t, n, r, o, a = !0) {
    const s = Array.isArray(t) ? t : [], l = o.find((d) => d.split(".").slice(0, -1).join(".") === r);
    if (!l)
      return a ? [...s, ...n] : [...n, ...s];
    const c = l.split(".").pop() || "", u = /* @__PURE__ */ new Map();
    return n.forEach((d) => {
      this.hasUniqueProperty(d, c) && u.set(d[c], d);
    }), a ? this.appendWithMatching(s, n, u, c) : this.prependWithMatching(s, n, u, c);
  }
  appendWithMatching(t, n, r, o) {
    const a = t.map((l) => this.hasUniqueProperty(l, o) && r.has(l[o]) ? r.get(l[o]) : l), s = n.filter((l) => this.hasUniqueProperty(l, o) ? !t.some(
      (c) => this.hasUniqueProperty(c, o) && c[o] === l[o]
    ) : !0);
    return [...a, ...s];
  }
  prependWithMatching(t, n, r, o) {
    const a = t.filter((s) => this.hasUniqueProperty(s, o) ? !r.has(s[o]) : !0);
    return [...n, ...a];
  }
  hasUniqueProperty(t, n) {
    return t && typeof t == "object" && n in t;
  }
  async setRememberedState(t) {
    const n = await De.getState(De.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === me.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Ic = class G0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Qi.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new G0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), _6(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), E6(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Je({
      method: this.requestParams.all().method,
      url: ga(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Mc.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Mc.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && g6(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, y6(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, w6(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = me.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const r = Object.entries(n.onceProps || {}).filter(([, o]) => n.props[o.prop] === void 0 ? !1 : !o.expiresAt || o.expiresAt > Date.now()).map(([o]) => o);
    return r.length > 0 && (t["X-Inertia-Except-Once-Props"] = r.join(",")), t;
  }
}, Dc = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    this.requests = [], this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().finally(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight({ prefetch: e = !0 } = {}) {
    this.requests.filter((t) => e || !t.isPrefetch()).forEach((t) => t.cancel({ cancelled: !0 }));
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, n = !1) {
    if (!n && !this.shouldCancel())
      return;
    this.requests.shift()?.cancel({ cancelled: e, interrupted: t });
  }
  shouldCancel() {
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, Z6 = class {
  constructor() {
    this.syncRequestStream = new Dc({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Dc({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Ga();
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: n,
    onFlash: r
  }) {
    me.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: r
    }), H6.handle(), Yt.init(), Yt.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Yt.on("loadDeferredProps", (o) => {
      this.loadDeferredProps(o);
    }), Yt.on("historyQuotaExceeded", (o) => {
      window.location.href = o;
    });
  }
  get(e, t = {}, n = {}) {
    return this.visit(e, { ...n, method: "get", data: t });
  }
  post(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "post", data: t });
  }
  put(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "put", data: t });
  }
  patch(e, t = {}, n = {}) {
    return this.visit(e, { preserveState: !0, ...n, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    return this.doReload(e);
  }
  doReload(e = {}) {
    if (!(typeof window > "u"))
      return this.visit(window.location.href, {
        ...e,
        preserveScroll: !0,
        preserveState: !0,
        async: !0,
        headers: {
          ...e.headers || {},
          "Cache-Control": "no-cache"
        }
      });
  }
  remember(e, t = "default") {
    De.remember(e, t);
  }
  restore(e = "default") {
    return De.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Yt.onGlobalEvent(e, t);
  }
  /**
   * @deprecated Use cancelAll() instead.
   */
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll({ async: e = !0, prefetch: t = !0, sync: n = !0 } = {}) {
    e && this.asyncRequestStream.cancelInFlight({ prefetch: t }), n && this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, n = {}) {
    return X6.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Tc(n))
      return;
    const o = $t(me.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? B6(n.url, o) : ya(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !me.isCleared() && !n.preserveUrl && ft.save();
    const l = {
      ...n,
      ...r
    }, c = Ht.get(l);
    c ? (Vr.reveal(c.inFlight), Ht.use(c, l)) : (Vr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Ic.create(l, me.get())));
  }
  getCached(e, t = {}) {
    return Ht.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Ht.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Ht.removeAll();
  }
  flushByCacheTags(e) {
    Ht.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return Ht.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (dn(e) ? e.method : "get")) !== "get")
      throw new Error("Prefetch requests must use the GET method");
    const o = this.getPendingVisit(e, {
      ...t,
      async: !0,
      showProgress: !1,
      prefetch: !0,
      viewTransition: !1
    }), a = o.url.origin + o.url.pathname + o.url.search, s = window.location.origin + window.location.pathname + window.location.search;
    if (a === s)
      return;
    const l = this.getVisitEvents(t);
    if (l.onBefore(o) === !1 || !Tc(o))
      return;
    Vr.hide(), this.asyncRequestStream.interruptInFlight();
    const c = {
      ...o,
      ...l
    };
    new Promise((d) => {
      const f = () => {
        me.get() ? d() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Ht.add(
        c,
        (d) => {
          this.asyncRequestStream.send(Ic.create(d, me.get()));
        },
        {
          cacheFor: En.get("prefetch.cacheFor"),
          cacheTags: [],
          ...n
        }
      );
    });
  }
  clearHistory() {
    De.clear();
  }
  decryptHistory() {
    return De.decrypt();
  }
  resolveComponent(e) {
    return me.resolve(e);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, n) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(r) {
        const o = typeof t == "function" ? t(wt(r, e), r) : t;
        return zt(lt(r), e, o);
      },
      ...n || {}
    });
  }
  appendToProp(e, t, n) {
    this.replaceProp(
      e,
      (r, o) => {
        const a = typeof t == "function" ? t(r, o) : t;
        return Array.isArray(r) || (r = r !== void 0 ? [r] : []), [...r, a];
      },
      n
    );
  }
  prependToProp(e, t, n) {
    this.replaceProp(
      e,
      (r, o) => {
        const a = typeof t == "function" ? t(r, o) : t;
        return Array.isArray(r) || (r = r !== void 0 ? [r] : []), [a, ...r];
      },
      n
    );
  }
  push(e) {
    this.clientVisit(e);
  }
  flash(e, t) {
    const n = me.get().flash;
    let r;
    if (typeof e == "function")
      r = e(n);
    else if (typeof e == "string")
      r = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      r = { ...n, ...e };
    else
      return;
    me.setFlash(r), Object.keys(r).length && va(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = me.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((p) => [p.prop, n.props[p.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, a = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: s, onError: l, onFinish: c, onFlash: u, onSuccess: d, ...f } = e, v = {
      ...n,
      ...f,
      flash: a ?? {},
      props: o
    }, y = Qi.resolvePreserveOption(e.preserveScroll ?? !1, v), m = Qi.resolvePreserveOption(e.preserveState ?? !1, v);
    return me.set(v, {
      replace: t,
      preserveScroll: y,
      preserveState: m,
      viewTransition: s
    }).then(() => {
      const p = me.get().flash;
      Object.keys(p).length > 0 && (va(p), u?.(p));
      const h = me.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        d?.(me.get());
        return;
      }
      const b = e.errorBag ? h[e.errorBag || ""] || {} : h;
      l?.(b);
    }).finally(() => c?.(e));
  }
  getPrefetchParams(e, t) {
    return {
      ...this.getPendingVisit(e, {
        ...t,
        async: !0,
        showProgress: !1,
        prefetch: !0,
        viewTransition: !1
      }),
      ...this.getVisitEvents(t)
    };
  }
  getPendingVisit(e, t, n = {}) {
    if (dn(e)) {
      const u = e;
      e = u.url, t.method = t.method ?? u.method;
    }
    const r = En.get("visitOptions"), o = r ? r(e.toString(), lt(t)) || {} : {}, a = {
      method: "get",
      data: {},
      replace: !1,
      preserveScroll: !1,
      preserveState: !1,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: !1,
      queryStringArrayFormat: "brackets",
      async: !1,
      showProgress: !0,
      fresh: !1,
      reset: [],
      preserveUrl: !1,
      prefetch: !1,
      invalidateCacheTags: [],
      viewTransition: !1,
      ...t,
      ...o
    }, [s, l] = F6(
      e,
      a.data,
      a.method,
      a.forceFormData,
      a.queryStringArrayFormat
    ), c = {
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...a,
      ...n,
      url: s,
      data: l
    };
    return c.prefetch && (c.headers.Purpose = "prefetch"), c;
  }
  getVisitEvents(e) {
    return {
      onCancelToken: e.onCancelToken || (() => {
      }),
      onBefore: e.onBefore || (() => {
      }),
      onBeforeUpdate: e.onBeforeUpdate || (() => {
      }),
      onStart: e.onStart || (() => {
      }),
      onProgress: e.onProgress || (() => {
      }),
      onFinish: e.onFinish || (() => {
      }),
      onCancel: e.onCancel || (() => {
      }),
      onSuccess: e.onSuccess || (() => {
      }),
      onError: e.onError || (() => {
      }),
      onFlash: e.onFlash || (() => {
      }),
      onPrefetched: e.onPrefetched || (() => {
      }),
      onPrefetching: e.onPrefetching || (() => {
      })
    };
  }
  loadDeferredProps(e) {
    e && Object.entries(e).forEach(([t, n]) => {
      this.doReload({ only: n, deferredProps: !0 });
    });
  }
}, Xo = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? dn(e[0]) ? e[0] : e[0]() : {
      method: typeof e[0] == "function" ? e[0]() : e[0],
      url: typeof e[1] == "function" ? e[1]() : e[1]
    };
  }
  /**
   * Parses all useForm() arguments into { rememberKey, data, precognitionEndpoint }.
   *
   * useForm()
   * useForm(data)
   * useForm(rememberKey, data)
   * useForm(method, url, data)
   * useForm(urlMethodPair, data)
   *
   */
  static parseUseFormArguments(...e) {
    return e.length === 0 ? {
      rememberKey: null,
      data: {},
      precognitionEndpoint: null
    } : e.length === 1 ? {
      rememberKey: null,
      data: e[0],
      precognitionEndpoint: null
    } : e.length === 2 ? typeof e[0] == "string" ? {
      rememberKey: e[0],
      data: e[1],
      precognitionEndpoint: null
    } : {
      rememberKey: null,
      data: e[1],
      precognitionEndpoint: this.createWayfinderCallback(e[0])
    } : {
      rememberKey: null,
      data: e[2],
      precognitionEndpoint: this.createWayfinderCallback(e[0], e[1])
    };
  }
  /**
   * Parses all submission arguments into { method, url, options }.
   * It uses the Precognition endpoint if no explicit method/url are provided.
   *
   * form.submit(method, url)
   * form.submit(method, url, options)
   * form.submit(urlMethodPair)
   * form.submit(urlMethodPair, options)
   * form.submit()
   * form.submit(options)
   */
  static parseSubmitArguments(e, t) {
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : dn(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
  }
  /**
   * Merges headers into the Precognition validate() arguments.
   */
  static mergeHeadersForValidation(e, t, n) {
    const r = (o) => (o.headers = {
      ...n ?? {},
      ...o.headers ?? {}
    }, o);
    return e && typeof e == "object" && !("target" in e) ? e = r(e) : t && typeof t == "object" ? t = r(t) : typeof e == "string" ? t = r(t ?? {}) : e = r(e ?? {}), [e, t];
  }
};
function J6(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function Q6(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function eR(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function tR(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Yo(e) {
  if (Array.isArray(e))
    return e.map(Yo);
  if (typeof e != "object" || e === null || Dl(e))
    return e;
  if (tR(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = Yo(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Yo(e[n]);
  return t;
}
function Fc(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = Q6(J6(n));
    if (o[o.length - 1] === "") {
      const a = o.slice(0, -1), s = wt(t, a);
      if (Array.isArray(s))
        s.push(r);
      else if (s && typeof s == "object" && !Dl(s)) {
        const l = Object.keys(s).filter((c) => /^\d+$/.test(c)).map(Number).sort((c, u) => c - u);
        zt(t, a, l.length > 0 ? [...l.map((c) => s[c]), r] : [r]);
      } else
        zt(t, a, [r]);
      continue;
    }
    eR(t, o.map(String), r);
  }
  return Yo(t);
}
var mi = {
  preferredAttribute() {
    return En.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
  },
  buildDOMElement(e) {
    const t = document.createElement("template");
    t.innerHTML = e;
    const n = t.content.firstChild;
    if (!e.startsWith("<script "))
      return n;
    const r = document.createElement("script");
    return r.innerHTML = n.innerHTML, n.getAttributeNames().forEach((o) => {
      r.setAttribute(o, n.getAttribute(o) || "");
    }), r;
  },
  isInertiaManagedElement(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.getAttribute(this.preferredAttribute()) !== null;
  },
  findMatchingElementIndex(e, t) {
    const n = this.preferredAttribute(), r = e.getAttribute(n);
    return r !== null ? t.findIndex((o) => o.getAttribute(n) === r) : -1;
  },
  update: ro(function(e) {
    const t = e.map((r) => this.buildDOMElement(r));
    Array.from(document.head.childNodes).filter(
      (r) => this.isInertiaManagedElement(r)
    ).forEach((r) => {
      const o = this.findMatchingElementIndex(r, t);
      if (o === -1) {
        r?.parentNode?.removeChild(r);
        return;
      }
      const a = t.splice(o, 1)[0];
      a && !r.isEqualNode(a) && r?.parentNode?.replaceChild(a, r);
    }), t.forEach((r) => document.head.appendChild(r));
  }, 1)
};
function nR(e, t, n) {
  const r = {};
  let o = 0;
  function a() {
    const f = o += 1;
    return r[f] = [], f.toString();
  }
  function s(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], d());
  }
  function l(f) {
    Object.keys(r).indexOf(f) === -1 && (r[f] = []);
  }
  function c(f, v = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = v), d();
  }
  function u() {
    const f = t(""), v = mi.preferredAttribute(), y = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, m = Object.values(r).reduce((p, h) => p.concat(h), []).reduce((p, h) => {
      if (h.indexOf("<") === -1)
        return p;
      if (h.indexOf("<title ") === 0) {
        const $ = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = $ ? `${$[1]}${t($[2])}${$[3]}` : h, p;
      }
      const b = h.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return b ? p[b[0]] = h : p[Object.keys(p).length] = h, p;
    }, y);
    return Object.values(m);
  }
  function d() {
    e ? n(u()) : mi.update(u());
  }
  return d(), {
    forceUpdate: d,
    createProvider: function() {
      const f = a();
      return {
        preferredAttribute: mi.preferredAttribute,
        reconnect: () => l(f),
        update: (v) => c(f, v),
        disconnect: () => s(f)
      };
    }
  };
}
var rR = "X-Inertia-Infinite-Scroll-Merge-Intent", oR = (e) => {
  const t = () => {
    const b = me.get().scrollProps?.[e.getPropName()];
    if (b)
      return b;
    throw new Error(`The page object does not contain a scroll prop named "${e.getPropName()}".`);
  }, n = {
    component: null,
    loading: !1,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  }, r = () => {
    const b = t();
    n.component = me.get().component, n.loading = !1, n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.currentPage, n.requestCount = 0;
  }, o = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    r();
    const b = Ze.restore(o());
    b && typeof b == "object" && b.lastLoadedPage === t().currentPage && (n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.lastLoadedPage, n.requestCount = b.requestCount || 0);
  }
  const a = Ze.on("success", (b) => {
    n.component === b.detail.page.component && t().reset && (r(), e.onReset?.());
  }), s = (b) => b === "next" ? "nextPage" : "previousPage", l = (b) => {
    const $ = s(b);
    return n[$];
  }, c = (b) => {
    const $ = t(), k = s(b);
    n.lastLoadedPage = $.currentPage, n[k] = $[k], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, d = () => n.requestCount, f = (b, $ = {}) => {
    const k = l(b);
    n.loading || k === null || (n.loading = !0, Ze.reload({
      ...$,
      data: { [u()]: k },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [rR]: b === "previous" ? "prepend" : "append",
        ...$.headers
      },
      onBefore: (P) => {
        b === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), $.onBefore?.(P);
      },
      onBeforeUpdate: (P) => {
        e.onBeforeUpdate(), $.onBeforeUpdate?.(P);
      },
      onSuccess: (P) => {
        c(b), $.onSuccess?.(P);
      },
      onFinish: (P) => {
        n.loading = !1, b === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), $.onFinish?.(P);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: u,
    getRequestCount: d,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (b) => f("next", b),
    fetchPrevious: (b) => f("previous", b),
    removeEventListener: a
  };
}, aR = () => {
  const e = [];
  return {
    new: (r, o = {}) => {
      const a = new IntersectionObserver((s) => {
        for (const l of s)
          l.isIntersecting && r(l);
      }, o);
      return e.push(a), a;
    },
    flushAll: () => {
      e.forEach((r) => r.disconnect()), e.length = 0;
    }
  };
}, Ko = "infiniteScrollPage", vi = "infiniteScrollIgnore", W0 = (e) => e.dataset[Ko], sR = (e) => {
  const t = aR();
  let n, r, o, a, s = !1;
  const l = () => {
    a = new MutationObserver((g) => {
      g.forEach((S) => {
        S.addedNodes.forEach((U) => {
          U.nodeType === Node.ELEMENT_NODE && v.add(U);
        });
      }), P();
    }), a.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (g) => e.onItemIntersected(g.target)
    );
    const _ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, _), o = t.new(e.onNextTriggered, _);
  }, c = () => {
    s && u();
    const _ = e.getStartElement(), g = e.getEndElement();
    _ && e.shouldFetchPrevious() && r.observe(_), g && e.shouldFetchNext() && o.observe(g), s = !0;
  }, u = () => {
    s && (r.disconnect(), o.disconnect(), s = !1);
  }, d = () => {
    s && c();
  }, f = () => {
    u(), t.flushAll(), a?.disconnect();
  }, v = /* @__PURE__ */ new Set(), y = (_) => !(Ko in _.dataset) && !(vi in _.dataset), m = () => {
    Array.from(v).forEach((_) => {
      y(_) && (_.dataset[vi] = "true"), n.observe(_);
    }), v.clear();
  }, p = (_) => Array.from(
    _.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let h = !1;
  const b = (_) => {
    !h && (h = !0, C()) || (p(e.getItemsElement()).forEach((g) => {
      y(g) && (g.dataset[Ko] = _?.toString() || "1"), n.observe(g);
    }), k());
  }, $ = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, k = () => {
    const _ = {}, g = e.getItemsElement().childNodes;
    for (let S = 0; S < g.length; S++) {
      const U = g[S];
      if (U.nodeType !== Node.ELEMENT_NODE)
        continue;
      const I = W0(U);
      typeof I > "u" || (I in _ ? _[I].to = S : _[I] = { from: S, to: S });
    }
    Ze.remember(_, $());
  }, P = ro(k, 250), C = () => {
    const _ = Ze.restore($());
    if (!_ || typeof _ != "object")
      return !1;
    const g = e.getItemsElement().childNodes;
    for (let S = 0; S < g.length; S++) {
      const U = g[S];
      if (U.nodeType !== Node.ELEMENT_NODE)
        continue;
      const I = U;
      let D;
      for (const [T, V] of Object.entries(_))
        if (S >= V.from && S <= V.to) {
          D = T;
          break;
        }
      if (D)
        I.dataset[Ko] = D;
      else if (y(I))
        I.dataset[vi] = "true";
      else
        continue;
      n.observe(I);
    }
    return !0;
  };
  return {
    setupObservers: l,
    enableTriggers: c,
    disableTriggers: u,
    refreshTriggers: d,
    flushAll: f,
    processManuallyAddedElements: m,
    processServerLoadedElements: b
  };
}, iR = new Ga(), nr, gn, Oo = null, lR = (e) => {
  let t = !0;
  const n = (o) => {
    iR.add(() => new Promise((a) => {
      if (!t)
        return nr = gn = null, a();
      if (!nr || !gn) {
        const c = me.get().url;
        nr = $t(c), gn = $t(c), Oo = q0(c);
      }
      const s = e.getPageName(), l = gn.searchParams;
      o === "1" ? l.delete(s) : l.set(s, o), setTimeout(() => a());
    })).finally(() => {
      t && nr && gn && nr.href !== gn.href && Oo !== null && Ze.replace({
        url: L6(gn, Oo),
        preserveScroll: !0,
        preserveState: !0
      }), nr = gn = Oo = null;
    });
  };
  return {
    onItemIntersected: ro((o) => {
      const a = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !a)
        return;
      const s = /* @__PURE__ */ new Map(), l = [...a.children];
      B0(l, o).forEach((d) => {
        const f = W0(d) ?? "1";
        s.has(f) ? s.set(f, s.get(f) + 1) : s.set(f, 1);
      });
      const u = Array.from(s.entries()).sort((d, f) => f[1] - d[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, uR = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const l = e.getScrollableParent(), c = e.getItemsElement();
        n = l?.scrollTop || window.scrollY;
        const u = B0([...c.children]);
        if (u.length > 0) {
          r = u[0];
          const d = l?.getBoundingClientRect() || { top: 0 }, f = l ? d.top : 0;
          o = r.getBoundingClientRect().top - f;
        }
      },
      restoreScrollPosition: () => {
        if (!r)
          return;
        let l = 0, c = !1;
        const u = () => {
          if (l++, c || l > 10)
            return !1;
          const d = e.getScrollableParent(), f = d?.getBoundingClientRect() || { top: 0 }, v = d ? f.top : 0, p = r.getBoundingClientRect().top - v - o;
          if (p === 0) {
            window.requestAnimationFrame(u);
            return;
          }
          d ? d.scrollTo({ top: n + p }) : window.scrollTo(0, window.scrollY + p), c = !0;
        };
        window.requestAnimationFrame(u);
      }
    };
  }
});
function dR(e) {
  const t = lR({ ...e, getPageName: () => o.getPageName() }), n = uR(e), r = sR({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = oR({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Ur(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Ur(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), a = (u) => {
    const { captureScrollPosition: d, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), y = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (m) => {
      v(m), d();
    }, u.onSuccess = (m) => {
      y(m), f();
    }, u;
  }, s = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = a(u)), s(u);
  };
  const l = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = a(u)), l(u);
  };
  const c = Ze.on("success", () => Ur(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      c(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function X0(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function No(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(X0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Bc(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !X0(e) && (e.key === "Enter" || t && e.key === " ");
}
var rt = "nprogress", Pt, it = {
  minimum: 0.08,
  easing: "linear",
  positionUsing: "translate3d",
  speed: 200,
  trickle: !0,
  trickleSpeed: 200,
  showSpinner: !0,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: !0,
  template: [
    '<div class="bar" role="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner" role="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
}, zn = null, cR = (e) => {
  Object.assign(it, e), it.includeCSS && gR(it.color), Pt = document.createElement("div"), Pt.id = rt, Pt.innerHTML = it.template;
}, Wa = (e) => {
  const t = Y0();
  e = eh(e, it.minimum, 1), zn = e === 1 ? null : e;
  const n = pR(!t), r = n.querySelector(it.barSelector), o = it.speed, a = it.easing;
  n.offsetWidth, vR((s) => {
    const l = it.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${Zo(e)}%,0,0)`
    } : it.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${Zo(e)}%,0)`
    } : { marginLeft: `${Zo(e)}%` };
    for (const c in l)
      r.style[c] = l[c];
    if (e !== 1)
      return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Q0(), n.style.transition = "", n.style.opacity = "", s();
      }, o);
    }, o);
  });
}, Y0 = () => typeof zn == "number", K0 = () => {
  zn || Wa(0);
  const e = function() {
    setTimeout(function() {
      zn && (Z0(), e());
    }, it.trickleSpeed);
  };
  it.trickle && e();
}, fR = (e) => {
  !e && !zn || (Z0(0.3 + 0.5 * Math.random()), Wa(1));
}, Z0 = (e) => {
  const t = zn;
  if (t === null)
    return K0();
  if (!(t > 1))
    return e = typeof e == "number" ? e : (() => {
      const n = {
        0.1: [0, 0.2],
        0.04: [0.2, 0.5],
        0.02: [0.5, 0.8],
        5e-3: [0.8, 0.99]
      };
      for (const r in n)
        if (t >= n[r][0] && t < n[r][1])
          return parseFloat(r);
      return 0;
    })(), Wa(eh(t + e, 0, 0.994));
}, pR = (e) => {
  if (hR())
    return document.getElementById(rt);
  document.documentElement.classList.add(`${rt}-busy`);
  const t = Pt.querySelector(it.barSelector), n = e ? "-100" : Zo(zn || 0), r = J0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, it.showSpinner || Pt.querySelector(it.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${rt}-custom-parent`), r.appendChild(Pt), Pt;
}, J0 = () => mR(it.parent) ? it.parent : document.querySelector(it.parent), Q0 = () => {
  document.documentElement.classList.remove(`${rt}-busy`), J0().classList.remove(`${rt}-custom-parent`), Pt?.remove();
}, hR = () => document.getElementById(rt) !== null, mR = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function eh(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Zo = (e) => (-1 + e) * 100, vR = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), gR = (e) => {
  const t = document.createElement("style");
  t.textContent = `
    #${rt} {
      pointer-events: none;
    }

    #${rt} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${rt} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${rt} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${rt} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${rt}-spinner 400ms linear infinite;
    }

    .${rt}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${rt}-custom-parent #${rt} .spinner,
    .${rt}-custom-parent #${rt} .bar {
      position: absolute;
    }

    @keyframes ${rt}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, yR = () => {
  Pt && (Pt.style.display = "");
}, bR = () => {
  Pt && (Pt.style.display = "none");
}, qt = {
  configure: cR,
  isStarted: Y0,
  done: fR,
  set: Wa,
  remove: Q0,
  start: K0,
  status: zn,
  show: yR,
  hide: bR
}, xR = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    qt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && qt.show();
  }
  hide() {
    this.hideCount++, qt.hide();
  }
  set(e) {
    qt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    qt.done();
  }
  reset() {
    qt.set(0);
  }
  remove() {
    qt.done(), qt.remove();
  }
  isStarted() {
    return qt.isStarted();
  }
  getStatus() {
    return qt.status;
  }
}, Vr = new xR();
Vr.reveal;
Vr.hide;
var th = /* @__PURE__ */ Symbol("FormComponentReset");
function el(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function wR(e, t) {
  const n = e.value, r = e.checked;
  switch (e.type.toLowerCase()) {
    case "checkbox":
      e.checked = t.includes(e.value);
      break;
    case "radio":
      e.checked = t[0] === e.value;
      break;
    case "file":
      e.value = "";
      break;
    case "button":
    case "submit":
    case "reset":
    case "image":
      break;
    default:
      e.value = t[0] !== null && t[0] !== void 0 ? String(t[0]) : "";
  }
  return e.value !== n || e.checked !== r;
}
function _R(e, t) {
  const n = e.value, r = Array.from(e.selectedOptions).map((s) => s.value);
  if (e.multiple) {
    const s = t.map((l) => String(l));
    Array.from(e.options).forEach((l) => {
      l.selected = s.includes(l.value);
    });
  } else
    e.value = t[0] !== void 0 ? String(t[0]) : "";
  const o = Array.from(e.selectedOptions).map((s) => s.value);
  return e.multiple ? JSON.stringify(r.sort()) !== JSON.stringify(o.sort()) : e.value !== n;
}
function gi(e, t) {
  if (e.disabled) {
    if (e instanceof HTMLInputElement) {
      const n = e.value, r = e.checked;
      switch (e.type.toLowerCase()) {
        case "checkbox":
        case "radio":
          return e.checked = e.defaultChecked, e.checked !== r;
        case "file":
          return e.value = "", n !== "";
        case "button":
        case "submit":
        case "reset":
        case "image":
          return !1;
        default:
          return e.value = e.defaultValue, e.value !== n;
      }
    } else if (e instanceof HTMLSelectElement) {
      const n = Array.from(e.selectedOptions).map((o) => o.value);
      Array.from(e.options).forEach((o) => {
        o.selected = o.defaultSelected;
      });
      const r = Array.from(e.selectedOptions).map((o) => o.value);
      return JSON.stringify(n.sort()) !== JSON.stringify(r.sort());
    } else if (e instanceof HTMLTextAreaElement) {
      const n = e.value;
      return e.value = e.defaultValue, e.value !== n;
    }
    return !1;
  }
  if (e instanceof HTMLInputElement)
    return wR(e, t);
  if (e instanceof HTMLSelectElement)
    return _R(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function kR(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && el(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        gi(r, t) && (n = !0);
      else {
        const a = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        gi(r, a) && (n = !0);
      }
  }) : el(e) && (n = gi(e, t)), n;
}
function SR(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const a = new FormData(e), s = Array.from(e.elements).map((l) => el(l) ? l.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...a.keys(), ...s])];
  }
  let o = !1;
  n.forEach((a) => {
    const s = e.elements.namedItem(a);
    s && kR(s, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [th]: !0 } })
  );
}
var Ze = new Z6();
let oo = Je.create(), nh = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, rh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const ba = {}, wn = {
  get: (e, t = {}, n = {}) => Ar(Cr("get", e, t, n)),
  post: (e, t = {}, n = {}) => Ar(Cr("post", e, t, n)),
  patch: (e, t = {}, n = {}) => Ar(Cr("patch", e, t, n)),
  put: (e, t = {}, n = {}) => Ar(Cr("put", e, t, n)),
  delete: (e, t = {}, n = {}) => Ar(Cr("delete", e, t, n)),
  use(e) {
    return oo = e, wn;
  },
  axios() {
    return oo;
  },
  fingerprintRequestsUsing(e) {
    return nh = e === null ? () => null : e, wn;
  },
  determineSuccessUsing(e) {
    return rh = e, wn;
  }
}, Cr = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Gi({}, n, r?.params)
  } : {
    data: Gi({}, n, r?.data)
  }
}), Ar = (e = {}) => {
  const t = [
    ER,
    $R,
    PR
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), oo.request(t).then(async (n) => {
    t.precognitive && Lc(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && rh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && zR(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Uc(t, r) ?? ((s) => s))(o) ?? o;
  }, (n) => CR(n) ? Promise.reject(n) : (t.precognitive && Lc(n.response), (Uc(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, ER = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? oo.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? nh(e, oo) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": AR(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, zR = (e) => e >= 200 && e < 300, $R = (e) => (typeof e.fingerprint != "string" || (ba[e.fingerprint]?.abort(), delete ba[e.fingerprint]), e), PR = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (ba[e.fingerprint] = new AbortController(), {
  ...e,
  signal: ba[e.fingerprint].signal
}), Lc = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, CR = (e) => !M0(e) || typeof e.response?.status != "number" || R0(e), Uc = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], AR = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (oh(e.data) ? "multipart/form-data" : "application/json"), oh = (e) => Bl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => oh(t)), Bl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, TR = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let r = [""];
  for (const o of n)
    if (o === "*") {
      const a = [];
      for (const s of r) {
        const l = s ? wt(t, s) : t;
        if (Array.isArray(l))
          for (let c = 0; c < l.length; c++)
            a.push(s ? `${s}.${c}` : String(c));
        else if (l !== null && typeof l == "object")
          for (const c of Object.keys(l))
            a.push(s ? `${s}.${c}` : c);
      }
      r = a;
    } else
      r = r.map((a) => a ? `${a}.${o}` : o);
  return r;
}, OR = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Vc = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => OR(n, r)))), NR = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (D) => D !== o ? (o = D, n.validatingChanged) : [];
  let s = [];
  const l = (D) => {
    const T = [...new Set(D)];
    return s.length !== T.length || !T.every((V) => s.includes(V)) ? (s = T, n.validatedChanged) : [];
  }, c = () => s.filter((D) => typeof f[D] > "u");
  let u = [];
  const d = (D) => {
    const T = [...new Set(D)];
    return u.length !== T.length || !T.every((V) => u.includes(V)) ? (u = T, n.touchedChanged) : [];
  };
  let f = {};
  const v = (D) => {
    const T = MR(D);
    return _n(f, T) ? [] : (f = T, n.errorsChanged);
  }, y = (D) => {
    const T = { ...f };
    return delete T[qr(D)], v(T);
  }, m = () => Object.keys(f).length > 0;
  let p = 1500;
  const h = (D) => {
    p = D, _.cancel(), _ = C();
  };
  let b = t, $ = null, k = [], P = null;
  const C = () => qO((D) => {
    e({
      get: (T, V = {}, z = {}) => wn.get(T, U(V), g(z, D, V)),
      post: (T, V = {}, z = {}) => wn.post(T, U(V), g(z, D, V)),
      patch: (T, V = {}, z = {}) => wn.patch(T, U(V), g(z, D, V)),
      put: (T, V = {}, z = {}) => wn.put(T, U(V), g(z, D, V)),
      delete: (T, V = {}, z = {}) => wn.delete(T, U(V), g(z, D, V))
    }).catch((T) => R0(T) || M0(T) && T.response?.status === 422 ? null : Promise.reject(T));
  }, p, { leading: !0, trailing: !0 });
  let _ = C();
  const g = (D, T, V = {}) => {
    const z = {
      ...D,
      ...T
    }, R = Array.from(z.only ?? z.validate ?? u);
    return {
      ...T,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...h6(D, T),
      only: R,
      timeout: z.timeout ?? 5e3,
      onValidationError: (x, O) => ([
        ...l([...s, ...R]),
        ...v(Gi(Vc({ ...f }, R), x.data.errors))
      ].forEach((w) => w()), z.onValidationError ? z.onValidationError(x, O) : Promise.reject(O)),
      onSuccess: (x) => (l([...s, ...R]).forEach((O) => O()), z.onSuccess ? z.onSuccess(x) : x),
      onPrecognitionSuccess: (x) => ([
        ...l([...s, ...R]),
        ...v(Vc({ ...f }, R))
      ].forEach((O) => O()), z.onPrecognitionSuccess ? z.onPrecognitionSuccess(x) : x),
      onBefore: () => {
        const x = u.some((q) => q.includes("*")), O = x ? [...new Set(u.flatMap((q) => TR(q, V)))] : u;
        return z.onBeforeValidation && z.onBeforeValidation({ data: V, touched: O }, { data: b, touched: k }) === !1 || (z.onBefore || (() => !0))() === !1 ? !1 : (x && d(O).forEach((q) => q()), P = u, $ = V, !0);
      },
      onStart: () => {
        a(!0).forEach((x) => x()), (z.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((x) => x()), k = P, b = $, P = $ = null, (z.onFinish ?? (() => null))();
      }
    };
  }, S = (D, T, V) => {
    if (typeof D > "u") {
      const z = Array.from(V?.only ?? V?.validate ?? []);
      d([...u, ...z]).forEach((R) => R()), _(V ?? {});
      return;
    }
    if (Bl(T) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    D = qr(D), (D.includes("*") || wt(b, D) !== T) && (d([D, ...u]).forEach((z) => z()), _(V ?? {}));
  }, U = (D) => r === !1 ? tl(D) : D, I = {
    touched: () => u,
    validate(D, T, V) {
      return typeof D == "object" && !("target" in D) && (V = D, D = T = void 0), S(D, T, V), I;
    },
    touch(D) {
      const T = Array.isArray(D) ? D : [qr(D)];
      return d([...u, ...T]).forEach((V) => V()), I;
    },
    validating: () => o,
    valid: c,
    errors: () => f,
    hasErrors: m,
    setErrors(D) {
      return v(D).forEach((T) => T()), I;
    },
    forgetError(D) {
      return y(D).forEach((T) => T()), I;
    },
    defaults(D) {
      return t = D, b = D, I;
    },
    reset(...D) {
      if (D.length === 0)
        d([]).forEach((T) => T());
      else {
        const T = [...u];
        D.forEach((V) => {
          T.includes(V) && T.splice(T.indexOf(V), 1), zt(b, V, wt(t, V));
        }), d(T).forEach((V) => V());
      }
      return I;
    },
    setTimeout(D) {
      return h(D), I;
    },
    on(D, T) {
      return n[D].push(T), I;
    },
    validateFiles() {
      return r = !0, I;
    },
    withoutFileValidation() {
      return r = !1, I;
    }
  };
  return I;
}, RR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), MR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), qr = (e) => typeof e != "string" ? e.target.name : e, tl = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Bl(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(tl({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = tl(t[n]);
        return;
      }
    }
  }), t;
};
var yi = null, bi = !1;
function IR(e) {
  if (bi)
    return;
  yi === null && (bi = !0, yi = new Set(Object.keys(ah({}))), bi = !1);
  const t = Object.keys(e).filter((n) => yi.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function ah(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Xo.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = lt(typeof n == "function" ? n() : n);
  IR(a);
  let s = null, l, c = (m) => m, u = null, d = [], f = !1;
  const y = Un({
    ...o ? o.data : lt(a),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...m) {
      r = Xo.createWayfinderCallback(...m);
      const p = this;
      let h = null;
      const b = NR((k) => {
        const { method: P, url: C } = r(), _ = lt(c(this.data()));
        return k[P](C, _);
      }, lt(a));
      u = b, b.on("validatingChanged", () => {
        p.validating = b.validating();
      }).on("validatedChanged", () => {
        p.__valid = b.valid();
      }).on("touchedChanged", () => {
        p.__touched = b.touched();
      }).on("errorsChanged", () => {
        const k = h ?? xa.get("form.withAllErrors") ? b.errors() : RR(b.errors());
        this.errors = {}, this.setError(k), p.__valid = b.valid();
      });
      const $ = (k, P) => (P(k), k);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => b,
        withAllErrors: () => $(p, () => h = !0),
        valid: (k) => p.__valid.includes(k),
        invalid: (k) => k in this.errors,
        setValidationTimeout: (k) => $(p, () => b.setTimeout(k)),
        validateFiles: () => $(p, () => b.validateFiles()),
        withoutFileValidation: () => $(p, () => b.withoutFileValidation()),
        touch: (k, ...P) => (Array.isArray(k) ? b.touch(k) : typeof k == "string" ? b.touch([k, ...P]) : b.touch(k), p),
        touched: (k) => typeof k == "string" ? p.__touched.includes(k) : p.__touched.length > 0,
        validate: (k, P) => {
          if (typeof k == "object" && !("target" in k) && (P = k, k = void 0), k === void 0)
            b.validate(P);
          else {
            const C = qr(k), _ = c(this.data());
            b.validate(C, wt(_, C), P);
          }
          return p;
        },
        setErrors: (k) => $(p, () => this.setError(k)),
        forgetError: (k) => $(
          p,
          () => this.clearErrors(qr(k))
        )
      }), p;
    },
    data() {
      return Object.keys(a).reduce((m, p) => zt(m, p, wt(this, p)), {});
    },
    transform(m) {
      return c = m, this;
    },
    defaults(m, p) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof m > "u" ? (a = lt(this.data()), this.isDirty = !1) : a = typeof m == "string" ? zt(lt(a), m, p) : Object.assign({}, lt(a), m), u?.defaults(a), this;
    },
    reset(...m) {
      const p = lt(typeof n == "function" ? n() : a), h = lt(p);
      return m.length === 0 ? (a = h, Object.assign(this, p)) : m.filter((b) => e0(h, b)).forEach((b) => {
        zt(a, b, wt(h, b)), zt(this, b, wt(p, b));
      }), u?.reset(...m), this;
    },
    setError(m, p) {
      const h = typeof m == "string" ? { [m]: p } : m;
      return Object.assign(this.errors, h), this.hasErrors = Object.keys(this.errors).length > 0, u?.setErrors(h), this;
    },
    clearErrors(...m) {
      return this.errors = Object.keys(this.errors).reduce(
        (p, h) => ({
          ...p,
          ...m.length > 0 && !m.includes(h) ? { [h]: this.errors[h] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, u && (m.length === 0 ? u.setErrors({}) : m.forEach(u.forgetError)), this;
    },
    resetAndClearErrors(...m) {
      return this.reset(...m), this.clearErrors(...m), this;
    },
    submit(...m) {
      const { method: p, url: h, options: b } = Xo.parseSubmitArguments(m, r);
      f = !1;
      const $ = {
        ...b,
        onCancelToken: (P) => {
          if (s = P, b.onCancelToken)
            return b.onCancelToken(P);
        },
        onBefore: (P) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), b.onBefore)
            return b.onBefore(P);
        },
        onStart: (P) => {
          if (this.processing = !0, b.onStart)
            return b.onStart(P);
        },
        onProgress: (P) => {
          if (this.progress = P ?? null, b.onProgress)
            return b.onProgress(P);
        },
        onSuccess: async (P) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(
            () => this.recentlySuccessful = !1,
            xa.get("form.recentlySuccessfulDuration")
          );
          const C = b.onSuccess ? await b.onSuccess(P) : null;
          return f || (a = lt(this.data()), this.isDirty = !1), C;
        },
        onError: (P) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(P), b.onError)
            return b.onError(P);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, b.onCancel)
            return b.onCancel();
        },
        onFinish: (P) => {
          if (this.processing = !1, this.progress = null, s = null, b.onFinish)
            return b.onFinish(P);
        }
      }, k = c(this.data());
      p === "delete" ? Ze.delete(h, { ...$, data: k }) : Ze[p](h, k, $);
    },
    get(m, p) {
      this.submit("get", m, p);
    },
    post(m, p) {
      this.submit("post", m, p);
    },
    put(m, p) {
      this.submit("put", m, p);
    },
    patch(m, p) {
      this.submit("patch", m, p);
    },
    delete(m, p) {
      this.submit("delete", m, p);
    },
    cancel() {
      s && s.cancel();
    },
    dontRemember(...m) {
      return d = m, this;
    },
    __rememberable: t === null,
    __remember() {
      const m = this.data();
      if (d.length > 0) {
        const p = { ...m };
        return d.forEach((h) => delete p[h]), { data: p, errors: this.errors };
      }
      return { data: m, errors: this.errors };
    },
    __restore(m) {
      Object.assign(this, m.data), this.setError(m.errors);
    }
  });
  return Me(
    y,
    (m) => {
      y.isDirty = !_n(y.data(), a);
      const p = Ze.restore(t), h = lt(m.__remember());
      t && !_n(p, h) && Ze.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var xt = G(void 0), Qe = G(), xi = an(null), Ro = G(void 0), qc;
Fe({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: !0
    },
    initialComponent: {
      type: Object,
      required: !1
    },
    resolveComponent: {
      type: Function,
      required: !1
    },
    titleCallback: {
      type: Function,
      required: !1,
      default: (e) => e
    },
    onHeadUpdate: {
      type: Function,
      required: !1,
      default: () => () => {
      }
    }
  },
  setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
    xt.value = t ? ar(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Ro.value = void 0;
    const a = typeof window > "u";
    return qc = nR(a, r || ((s) => s), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (s) => {
        xt.value = ar(s.component), Qe.value = s.page, Ro.value = s.preserveState ? Ro.value : Date.now();
      },
      onFlash: (s) => {
        Qe.value = { ...Qe.value, flash: s };
      }
    }), Ze.on("navigate", () => qc.forceUpdate())), () => {
      if (xt.value) {
        xt.value.inheritAttrs = !!xt.value.inheritAttrs;
        const s = Ae(xt.value, {
          ...Qe.value.props,
          key: Ro.value
        });
        return xi.value && (xt.value.layout = xi.value, xi.value = null), xt.value.layout ? typeof xt.value.layout == "function" ? xt.value.layout(Ae, s) : (Array.isArray(xt.value.layout) ? xt.value.layout : [xt.value.layout]).concat(s).reverse().reduce((l, c) => (c.inheritAttrs = !!c.inheritAttrs, Ae(c, { ...Qe.value.props }, () => l))) : s;
      }
    };
  }
});
function sh() {
  return Un({
    props: J(() => Qe.value?.props),
    url: J(() => Qe.value?.url),
    component: J(() => Qe.value?.component),
    version: J(() => Qe.value?.version),
    clearHistory: J(() => Qe.value?.clearHistory),
    deferredProps: J(() => Qe.value?.deferredProps),
    mergeProps: J(() => Qe.value?.mergeProps),
    prependProps: J(() => Qe.value?.prependProps),
    deepMergeProps: J(() => Qe.value?.deepMergeProps),
    matchPropsOn: J(() => Qe.value?.matchPropsOn),
    rememberedState: J(() => Qe.value?.rememberedState),
    encryptHistory: J(() => Qe.value?.encryptHistory),
    scrollProps: J(() => Qe.value?.scrollProps),
    flash: J(() => Qe.value?.flash)
  });
}
Fe({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: !0
    }
  },
  render() {
    const e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
    if (!this.$slots.fallback)
      throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
    return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default?.() : this.$slots.fallback();
  }
});
var nn = () => {
}, DR = /* @__PURE__ */ Symbol("InertiaFormContext");
Fe({
  name: "Form",
  slots: Object,
  props: {
    action: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    errorBag: {
      type: [String, null],
      default: null
    },
    showProgress: {
      type: Boolean,
      default: !0
    },
    transform: {
      type: Function,
      default: (e) => e
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetOnError: {
      type: [Boolean, Array],
      default: !1
    },
    resetOnSuccess: {
      type: [Boolean, Array],
      default: !1
    },
    setDefaultsOnSuccess: {
      type: Boolean,
      default: !1
    },
    onCancelToken: {
      type: Function,
      default: nn
    },
    onBefore: {
      type: Function,
      default: nn
    },
    onStart: {
      type: Function,
      default: nn
    },
    onProgress: {
      type: Function,
      default: nn
    },
    onFinish: {
      type: Function,
      default: nn
    },
    onCancel: {
      type: Function,
      default: nn
    },
    onSuccess: {
      type: Function,
      default: nn
    },
    onError: {
      type: Function,
      default: nn
    },
    onSubmitComplete: {
      type: Function,
      default: nn
    },
    disableWhileProcessing: {
      type: Boolean,
      default: !1
    },
    invalidateCacheTags: {
      type: [String, Array],
      default: () => []
    },
    validateFiles: {
      type: Boolean,
      default: !1
    },
    validationTimeout: {
      type: Number,
      default: 1500
    },
    withAllErrors: {
      type: Boolean,
      default: null
    }
  },
  setup(e, { slots: t, attrs: n, expose: r }) {
    const o = () => {
      const [C, _] = m();
      return e.transform(_);
    }, a = ah({}).withPrecognition(
      () => l.value,
      () => m()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? En.get("form.withAllErrors")) && a.withAllErrors();
    const s = G(), l = J(
      () => dn(e.action) ? e.action.method : e.method.toLowerCase()
    ), c = G(!1), u = G(new FormData()), d = (C) => {
      C.type === "reset" && C.detail?.[th] && C.preventDefault(), c.value = C.type === "reset" ? !1 : !_n(y(), Fc(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = v(), a.defaults(y()), f.forEach((C) => s.value.addEventListener(C, d));
    }), Me(
      () => e.validateFiles,
      (C) => C ? a.validateFiles() : a.withoutFileValidation()
    ), Me(
      () => e.validationTimeout,
      (C) => a.setValidationTimeout(C)
    ), wa(() => f.forEach((C) => s.value?.removeEventListener(C, d)));
    const v = (C) => new FormData(s.value, C), y = (C) => Fc(v(C)), m = (C) => Fl(
      l.value,
      dn(e.action) ? e.action.url : e.action,
      y(C),
      e.queryStringArrayFormat
    ), p = (C) => {
      const [_, g] = m(C);
      if (C?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open(_, "_blank");
        return;
      }
      const U = (D) => {
        D && (D === !0 ? h() : D.length > 0 && h(...D));
      }, I = {
        headers: e.headers,
        queryStringArrayFormat: e.queryStringArrayFormat,
        errorBag: e.errorBag,
        showProgress: e.showProgress,
        invalidateCacheTags: e.invalidateCacheTags,
        onCancelToken: e.onCancelToken,
        onBefore: e.onBefore,
        onStart: e.onStart,
        onProgress: e.onProgress,
        onFinish: e.onFinish,
        onCancel: e.onCancel,
        onSuccess: (...D) => {
          e.onSuccess?.(...D), e.onSubmitComplete?.(P), U(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && k();
        },
        onError: (...D) => {
          e.onError?.(...D), U(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(g)).submit(l.value, _, I), a.transform(o);
    }, h = (...C) => {
      SR(s.value, u.value, C), a.reset(...C);
    }, b = (...C) => {
      a.clearErrors(...C);
    }, $ = (...C) => {
      b(...C), h(...C);
    }, k = () => {
      u.value = v(), c.value = !1;
    }, P = {
      get errors() {
        return a.errors;
      },
      get hasErrors() {
        return a.hasErrors;
      },
      get processing() {
        return a.processing;
      },
      get progress() {
        return a.progress;
      },
      get wasSuccessful() {
        return a.wasSuccessful;
      },
      get recentlySuccessful() {
        return a.recentlySuccessful;
      },
      get validating() {
        return a.validating;
      },
      clearErrors: b,
      resetAndClearErrors: $,
      setError: (C, _) => a.setError(typeof C == "string" ? { [C]: _ } : C),
      get isDirty() {
        return c.value;
      },
      reset: h,
      submit: p,
      defaults: k,
      getData: y,
      getFormData: v,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: (C, _) => a.validate(...Xo.mergeHeadersForValidation(C, _, e.headers)),
      validator: () => a.validator()
    };
    return r(P), Vn(DR, P), () => Ae(
      "form",
      {
        ...n,
        ref: s,
        action: dn(e.action) ? e.action.url : e.action,
        method: l.value,
        onSubmit: (C) => {
          C.preventDefault(), p(C.submitter);
        },
        inert: e.disableWhileProcessing && a.processing
      },
      t.default ? t.default(P) : []
    );
  }
});
Fe({
  props: {
    title: {
      type: String,
      required: !1
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(e) {
      return typeof e.type == "string" && [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(e.type) > -1;
    },
    renderTagStart(e) {
      e.props = e.props || {}, e.props[this.provider.preferredAttribute()] = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
      const t = Object.keys(e.props).reduce((n, r) => {
        const o = String(e.props[r]);
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${KO(o)}"`;
      }, "");
      return `<${String(e.type)}${t}>`;
    },
    renderTagChildren(e) {
      const { children: t } = e;
      return typeof t == "string" ? t : Array.isArray(t) ? t.reduce((n, r) => n + this.renderTag(r), "") : "";
    },
    isFunctionNode(e) {
      return typeof e.type == "function";
    },
    isComponentNode(e) {
      return typeof e.type == "object";
    },
    isCommentNode(e) {
      return /(comment|cmt)/i.test(e.type.toString());
    },
    isFragmentNode(e) {
      return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
    },
    isTextNode(e) {
      return /(text|txt)/i.test(e.type.toString());
    },
    renderTag(e) {
      if (this.isTextNode(e))
        return String(e.children);
      if (this.isFragmentNode(e))
        return "";
      if (this.isCommentNode(e))
        return "";
      let t = this.renderTagStart(e);
      return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${String(e.type)}>`), t;
    },
    addTitleElement(e) {
      return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title ${this.provider.preferredAttribute()}>${this.title}</title>`), e;
    },
    renderNodes(e) {
      const t = e.flatMap((n) => this.resolveNode(n)).map((n) => this.renderTag(n)).filter((n) => n);
      return this.addTitleElement(t);
    },
    resolveNode(e) {
      return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var wi = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
Fe({
  name: "InfiniteScroll",
  slots: Object,
  props: {
    data: {
      type: String,
      required: !0
    },
    buffer: {
      type: Number,
      default: 0
    },
    onlyNext: {
      type: Boolean,
      default: !1
    },
    onlyPrevious: {
      type: Boolean,
      default: !1
    },
    as: {
      type: String,
      default: "div"
    },
    manual: {
      type: Boolean,
      default: !1
    },
    manualAfter: {
      type: Number,
      default: 0
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    autoScroll: {
      type: Boolean,
      default: void 0
    },
    itemsElement: {
      type: [String, Function, Object],
      default: null
    },
    startElement: {
      type: [String, Function, Object],
      default: null
    },
    endElement: {
      type: [String, Function, Object],
      default: null
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n, expose: r }) {
    const o = G(null), a = G(null), s = G(null), l = J(
      () => wi(e.itemsElement, o.value)
    ), c = J(() => I6(l.value)), u = J(
      () => wi(e.startElement, a.value)
    ), d = J(() => wi(e.endElement, s.value)), f = G(!1), v = G(!1), y = G(0), m = G(!1), p = G(!1), h = () => {
      y.value = b.getRequestCount(), m.value = b.hasPrevious(), p.value = b.hasNext();
    }, {
      dataManager: b,
      elementManager: $,
      flush: k
    } = dR({
      // Data
      getPropName: () => e.data,
      inReverseMode: () => e.reverse,
      shouldFetchNext: () => !e.onlyPrevious,
      shouldFetchPrevious: () => !e.onlyNext,
      shouldPreserveUrl: () => e.preserveUrl,
      // Elements
      getTriggerMargin: () => e.buffer,
      getStartElement: () => u.value,
      getEndElement: () => d.value,
      getItemsElement: () => l.value,
      getScrollableParent: () => c.value,
      // Request callbacks
      onBeforePreviousRequest: () => f.value = !0,
      onBeforeNextRequest: () => v.value = !0,
      onCompletePreviousRequest: () => {
        f.value = !1, h();
      },
      onCompleteNextRequest: () => {
        v.value = !1, h();
      },
      onDataReset: h
    });
    if (h(), typeof window > "u") {
      const g = sh().scrollProps?.[e.data];
      g && (m.value = !!g.previousPage, p.value = !!g.nextPage);
    }
    const P = J(() => !C.value), C = J(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), _ = () => {
      c.value ? c.value.scrollTo({
        top: c.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ke(() => {
      $.setupObservers(), $.processServerLoadedElements(b.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && _(), P.value && $.enableTriggers();
    }), nl(k), Me(
      () => [P.value, e.onlyNext, e.onlyPrevious],
      ([g]) => {
        g ? $.enableTriggers() : $.disableTriggers();
      }
    ), r({
      fetchNext: b.fetchNext,
      fetchPrevious: b.fetchPrevious,
      hasPrevious: b.hasPrevious,
      hasNext: b.hasNext
    }), () => {
      const g = [], S = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: m.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const U = P.value && !e.onlyNext, I = {
          loading: f.value,
          fetch: b.fetchPrevious,
          autoMode: U,
          manualMode: !U,
          hasMore: m.value,
          ...S
        };
        g.push(
          Ae(
            "div",
            { ref: a },
            t.previous ? t.previous(I) : f.value ? t.loading?.(I) : void 0
          )
        );
      }
      if (g.push(
        Ae(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || v.value,
            loadingPrevious: f.value,
            loadingNext: v.value
          })
        )
      ), !e.endElement) {
        const U = P.value && !e.onlyPrevious, I = {
          loading: v.value,
          fetch: b.fetchNext,
          autoMode: U,
          manualMode: !U,
          hasMore: p.value,
          ...S
        };
        g.push(
          Ae(
            "div",
            { ref: s },
            t.next ? t.next(I) : v.value ? t.loading?.(I) : void 0
          )
        );
      }
      return Ae(ue, {}, e.reverse ? [...g].reverse() : g);
    };
  }
});
var jt = () => {
}, FR = Fe({
  name: "Link",
  props: {
    as: {
      type: [String, Object],
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: !1
    },
    preserveScroll: {
      type: [Boolean, String, Function],
      default: !1
    },
    preserveState: {
      type: [Boolean, String, Function],
      default: null
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: !1
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: !1
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: jt
    },
    onProgress: {
      type: Function,
      default: jt
    },
    onFinish: {
      type: Function,
      default: jt
    },
    onBefore: {
      type: Function,
      default: jt
    },
    onCancel: {
      type: Function,
      default: jt
    },
    onSuccess: {
      type: Function,
      default: jt
    },
    onError: {
      type: Function,
      default: jt
    },
    onCancelToken: {
      type: Function,
      default: jt
    },
    onPrefetching: {
      type: Function,
      default: jt
    },
    onPrefetched: {
      type: Function,
      default: jt
    },
    cacheTags: {
      type: [String, Array],
      default: () => []
    },
    viewTransition: {
      type: [Boolean, Object],
      default: !1
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const r = G(0), o = G(), a = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = J(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : xa.get("prefetch.cacheFor"));
    Ke(() => {
      a.value.includes("mount") && p();
    }), nl(() => {
      clearTimeout(o.value);
    });
    const l = J(
      () => dn(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), c = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : l.value !== "get" ? "button" : e.as.toLowerCase()), u = J(
      () => Fl(
        l.value,
        dn(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), d = J(() => u.value[0]), f = J(() => u.value[1]), v = J(() => c.value === "button" ? { type: "button" } : c.value === "a" || typeof c.value != "string" ? { href: d.value } : {}), y = J(() => ({
      data: f.value,
      method: l.value,
      replace: e.replace,
      preserveScroll: e.preserveScroll,
      preserveState: e.preserveState ?? l.value !== "get",
      preserveUrl: e.preserveUrl,
      only: e.only,
      except: e.except,
      headers: e.headers,
      async: e.async
    })), m = J(() => ({
      ...y.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (k) => {
        r.value++, e.onStart?.(k);
      },
      onProgress: e.onProgress,
      onFinish: (k) => {
        r.value--, e.onFinish?.(k);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), p = () => {
      Ze.prefetch(
        d.value,
        {
          ...y.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: s.value,
          cacheTags: e.cacheTags
        }
      );
    }, h = {
      onClick: (k) => {
        No(k) && (k.preventDefault(), Ze.visit(d.value, m.value));
      }
    }, b = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          p();
        }, xa.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: h.onClick
    }, $ = {
      onMousedown: (k) => {
        No(k) && (k.preventDefault(), p());
      },
      onKeydown: (k) => {
        Bc(k) && (k.preventDefault(), p());
      },
      onMouseup: (k) => {
        No(k) && (k.preventDefault(), Ze.visit(d.value, m.value));
      },
      onKeyup: (k) => {
        Bc(k) && (k.preventDefault(), Ze.visit(d.value, m.value));
      },
      onClick: (k) => {
        No(k) && k.preventDefault();
      }
    };
    return () => Ae(
      c.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? b : a.value.includes("click") ? $ : h
      },
      t
    );
  }
}), BR = FR;
Fe({
  name: "WhenVisible",
  slots: Object,
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      loaded: !1,
      fetching: !1,
      observer: null
    };
  },
  unmounted() {
    this.observer?.disconnect();
  },
  computed: {
    keys() {
      return this.data ? Array.isArray(this.data) ? this.data : [this.data] : [];
    }
  },
  created() {
    const e = sh();
    this.$watch(
      () => this.keys.map((t) => e.props[t]),
      () => {
        const t = this.keys.length > 0 && this.keys.every((n) => e.props[n] !== void 0);
        this.loaded = t, !(t && !this.always) && (!this.observer || !t) && this.$nextTick(this.registerObserver);
      },
      { immediate: !0 }
    );
  },
  methods: {
    registerObserver() {
      typeof window > "u" || (this.observer?.disconnect(), this.observer = new IntersectionObserver(
        (e) => {
          if (!e[0].isIntersecting || this.fetching || !this.always && this.loaded)
            return;
          this.fetching = !0;
          const t = this.getReloadParams();
          Ze.reload({
            ...t,
            onStart: (n) => {
              this.fetching = !0, t.onStart?.(n);
            },
            onFinish: (n) => {
              this.loaded = !0, this.fetching = !1, t.onFinish?.(n), this.always || this.observer?.disconnect();
            }
          });
        },
        {
          rootMargin: `${this.$props.buffer}px`
        }
      ), this.observer.observe(this.$el.nextSibling));
    },
    getReloadParams() {
      const e = { ...this.$props.params };
      return this.$props.data && (e.only = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data]), e;
    }
  },
  render() {
    const e = [];
    return (this.$props.always || !this.loaded) && e.push(Ae(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var xa = En.extend({});
const LR = { class: "space-y-3 text-zinc-900 dark:text-white" }, UR = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, VR = { key: 0 }, qR = { key: 1 }, jR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, HR = { class: "space-y-2" }, GR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, WR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, XR = {
  key: 0,
  class: "flex items-center gap-2"
}, YR = ["disabled", "onClick"], KR = ["disabled", "onClick"], ZR = ["disabled", "onClick"], JR = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = G([]), r = G(!0), o = G(!1), a = G(!1), s = G(""), l = G(null), c = J(() => t.produto?.id ?? null), u = J(() => new Map(n.value.map((m) => [m.trigger_event, m])));
    async function d() {
      r.value = !0, s.value = "";
      try {
        const [m, p] = await Promise.all([ze.connection(), ze.flows(c.value)]);
        a.value = m.connection.connected, n.value = p.flows || [];
      } catch (m) {
        s.value = m.message;
      } finally {
        r.value = !1;
      }
    }
    async function f(m) {
      o.value = !0, s.value = "";
      try {
        await m(), await d();
      } catch (p) {
        s.value = p.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (m) => f(() => ze.createFlow({
      name: `${m.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: m.eventClass,
      product_id: c.value,
      is_active: !0,
      graph_json: Ep(m.eventClass)
    })), y = (m) => f(() => ze.updateFlow(m.id, { is_active: !m.is_active }));
    return Ke(d), (m, p) => (E(), A("div", LR, [
      r.value ? (E(), A("p", UR, "Verificando integração…")) : (E(), A(ue, { key: 1 }, [
        i("div", {
          class: W(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          X(N(jr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (E(), A("span", VR, "ZapRei conectado à Evolution GO.")) : (E(), A("span", qR, [
            p[2] || (p[2] = ye(" A Evolution GO não está conectada. ", -1)),
            X(N(BR), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: ot(() => [...p[1] || (p[1] = [
                ye("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = ye(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = i("div", null, [
          i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        s.value ? (E(), A("p", jR, L(s.value), 1)) : te("", !0),
        i("div", HR, [
          (E(!0), A(ue, null, Ne(N(Bn), (h) => (E(), A("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            i("div", null, [
              i("div", GR, L(h.label), 1),
              i("div", WR, L(h.eventClass), 1)
            ]),
            u.value.get(h.eventClass) ? (E(), A("div", XR, [
              i("span", {
                class: W(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, L(u.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              i("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (b) => y(u.value.get(h.eventClass))
              }, L(u.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, YR),
              i("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (b) => l.value = u.value.get(h.eventClass)
              }, [
                X(N(rf), { class: "h-3 w-3" }),
                p[4] || (p[4] = ye(" Editar ", -1))
              ], 8, KR)
            ])) : (E(), A("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (b) => v(h)
            }, " Criar fluxo ", 8, ZR))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (E(), Ce(Cp, {
        key: 2,
        flow: l.value,
        onClose: p[0] || (p[0] = (h) => l.value = null),
        onSaved: d
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, QR = "zaprei", jc = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(jc)) {
  const e = document.createElement("link");
  e.id = jc, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[QR] = { Dashboard: Q4, Integrations: tP, ProductPanel: JR };
export {
  Q4 as Dashboard,
  tP as Integrations,
  JR as ProductPanel
};
