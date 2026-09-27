import { h as Ae, ref as W, reactive as _n, onMounted as Ke, openBlock as S, createElementBlock as $, createElementVNode as i, createVNode as Y, unref as N, normalizeClass as X, withDirectives as re, vModelCheckbox as Tn, vModelText as be, createStaticVNode as Gc, createTextVNode as ne, toDisplayString as q, createCommentVNode as oe, getCurrentScope as Wc, inject as gr, effectScope as Xc, watch as Me, provide as qn, defineComponent as Fe, useSlots as fh, onUnmounted as nl, withCtx as ot, renderSlot as Ye, createPropsRestProxy as ph, toRef as Ve, computed as ee, getCurrentInstance as yr, onScopeDispose as Mo, nextTick as un, onBeforeMount as hh, shallowRef as an, Fragment as te, renderList as Ne, normalizeStyle as vt, onBeforeUnmount as wa, isMemoSame as mh, createBlock as Pe, useAttrs as vh, mergeProps as _a, Teleport as Yc, isRef as rl, toRefs as gh, customRef as yh, toValue as Ie, resolveComponent as Kc, resolveDynamicComponent as Rt, markRaw as ar, readonly as bh, withModifiers as rn, vModelSelect as tt, Transition as xh, toHandlers as wh } from "vue";
const _h = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Yl = (e) => e === "";
const kh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Kl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Sh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const Eh = (e) => {
  const t = Sh(e);
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
const zh = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": a,
  size: s = kr.width,
  color: l = kr.stroke,
  ...d
}, { slots: u }) => Ae(
  "svg",
  {
    ...kr,
    ...d,
    width: s,
    height: s,
    stroke: l,
    "stroke-width": Yl(n) || Yl(r) || n === !0 || r === !0 ? Number(o || a || kr["stroke-width"]) * 24 / Number(s) : o || a || kr["stroke-width"],
    class: kh(
      "lucide",
      d.class,
      ...e ? [`lucide-${Kl(Eh(e))}-icon`, `lucide-${Kl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !_h(d) && { "aria-hidden": "true" }
  },
  [...t.map((c) => Ae(...c)), ...u.default ? [u.default()] : []]
);
const $e = (e, t) => (n, { slots: r, attrs: o }) => Ae(
  zh,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const $h = $e("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Zc = $e("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Ph = $e("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Ch = $e("ban", [
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
const Jl = $e("calendar-range", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);
const Io = $e("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const Jc = $e("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const _i = $e("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Qc = $e("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Ah = $e("chevron-down", [
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
const Dn = $e("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const ef = $e("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const tf = $e("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const Th = $e("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Oh = $e("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Ql = $e("flag", [
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
const nf = $e("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Dt = $e("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const eu = $e("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Nh = $e("message-square-text", [
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
const rf = $e("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Rh = $e("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const of = $e("palette", [
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
const tu = $e("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const af = $e("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const sf = $e("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const lf = $e("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const nu = $e("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Mh = $e("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Ih = $e("save", [
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
const uf = $e("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Dh = $e("shield-check", [
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
const df = $e("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Fh = $e("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Rn = $e("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Bh = $e("wallet", [
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
const Vn = $e("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Lh = "/zaprei";
function Uh() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function qh(e) {
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
  const o = new URL(Lh + e, window.location.origin);
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
      "X-CSRF-TOKEN": Uh(),
      ...a || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: a ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(qh);
}
const Ee = {
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
  monthlyReport: () => qe("/monthly-report"),
  saveMonthlyReport: (e) => qe("/monthly-report", { method: "PUT", body: e }),
  testMonthlyReport: (e) => qe("/monthly-report/test", { method: "POST", body: e }),
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
  importContacts: (e) => qe("/contacts/import", { method: "POST", body: ru(e) }),
  deleteContact: (e) => qe(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => qe("/campaigns"),
  createCampaign: (e) => qe("/campaigns", { method: "POST", body: e }),
  campaign: (e) => qe(`/campaigns/${e}`),
  cancelCampaign: (e) => qe(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => qe("/media", { method: "POST", body: ru(e) })
};
function ru(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Vh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, jh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Hh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Gh = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, Wh = {
  key: 1,
  class: "mt-4 space-y-4"
}, Xh = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, Yh = ["placeholder"], Kh = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Zh = { class: "mt-2 flex items-center gap-2" }, Jh = ["value"], Qh = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, em = { class: "flex flex-wrap items-center gap-2" }, tm = ["disabled"], nm = ["disabled"], rm = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, om = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, am = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, cf = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = W(!0), o = W(!1), a = W(!1), s = W(""), l = W(""), d = W(!1), u = W(!1), c = W(""), f = _n({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, s.value = "";
      try {
        const { connection: h } = await Ee.connection();
        f.base_url = h.credentials.base_url || "", f.instance = h.credentials.instance || "", f.is_active = h.is_active, u.value = h.credentials.has_api_key, d.value = h.connected, c.value = h.webhook_url || "";
      } catch (h) {
        s.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      o.value = !0, s.value = "", l.value = "";
      try {
        const { connection: h } = await Ee.saveConnection({ ...f });
        f.api_key = "", u.value = h.credentials.has_api_key, d.value = h.connected, c.value = h.webhook_url || "", l.value = "Conexão salva.", n("saved");
      } catch (h) {
        s.value = h.message;
      } finally {
        o.value = !1;
      }
    }
    async function m() {
      if (c.value)
        try {
          await navigator.clipboard.writeText(c.value), l.value = "URL do webhook copiada.";
        } catch {
          s.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function p() {
      a.value = !0, s.value = "", l.value = "";
      try {
        const { message: h } = await Ee.testConnection();
        l.value = h || "Conexão validada.";
      } catch (h) {
        s.value = h.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(v), (h, b) => (S(), $("div", Vh, [
      i("div", jh, [
        i("div", Hh, [
          Y(N(af), { class: "h-5 w-5" })
        ]),
        b[5] || (b[5] = i("div", null, [
          i("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (S(), $("div", Gh, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        b[6] || (b[6] = i("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (S(), $("div", Wh, [
        i("div", Xh, [
          b[7] || (b[7] = i("div", null, [
            i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            i("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          i("label", {
            class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            re(i("input", {
              "onUpdate:modelValue": b[0] || (b[0] = (z) => f.is_active = z),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [Tn, f.is_active]
            ]),
            i("span", {
              class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        i("div", null, [
          b[8] || (b[8] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          re(i("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": b[1] || (b[1] = (z) => f.base_url = z),
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
          re(i("input", {
            id: "zr-instance",
            "onUpdate:modelValue": b[2] || (b[2] = (z) => f.instance = z),
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
          re(i("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": b[3] || (b[3] = (z) => f.api_key = z),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, Yh), [
            [
              be,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          b[11] || (b[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        c.value ? (S(), $("div", Kh, [
          b[13] || (b[13] = Gc('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          i("div", Zh, [
            i("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: b[4] || (b[4] = (z) => z.target.select())
            }, null, 40, Jh),
            i("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: m
            }, [
              Y(N(ef), { class: "h-3.5 w-3.5" }),
              b[12] || (b[12] = ne(" Copiar ", -1))
            ])
          ])
        ])) : (S(), $("p", Qh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        i("div", em, [
          i("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, q(o.value ? "Salvando…" : "Salvar conexão"), 9, tm),
          i("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, q(a.value ? "Testando…" : "Testar conexão"), 9, nm),
          d.value ? (S(), $("span", rm, [
            Y(N(jr), { class: "h-3 w-3" }),
            b[14] || (b[14] = ne(" Conectado ", -1))
          ])) : oe("", !0)
        ]),
        s.value ? (S(), $("p", om, q(s.value), 1)) : l.value ? (S(), $("p", am, q(l.value), 1)) : oe("", !0)
      ]))
    ]));
  }
};
function Gr(e) {
  return Wc() ? (Mo(e), !0) : !1;
}
function on(e) {
  return typeof e == "function" ? e() : N(e);
}
const sm = typeof window < "u" && typeof document < "u", im = (e) => typeof e < "u", lm = Object.prototype.toString, um = (e) => lm.call(e) === "[object Object]", dm = () => {
};
function cm(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const ff = (e) => e();
function fm(e = ff) {
  const t = W(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...a) => {
    t.value && e(...a);
  };
  return { isActive: bh(t), pause: n, resume: r, eventFilter: o };
}
function ou(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function pm(e, t, n = {}) {
  const {
    eventFilter: r = ff,
    ...o
  } = n;
  return Me(
    e,
    cm(
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
  } = n, { eventFilter: a, pause: s, resume: l, isActive: d } = fm(r);
  return { stop: pm(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: s, resume: l, isActive: d };
}
function hm(e, t = {}) {
  if (!rl(e))
    return gh(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = yh(() => ({
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
    const z = [new Promise((w) => {
      h = Me(
        e,
        (T) => {
          f(T) !== t && (h?.(), w(T));
        },
        {
          flush: v,
          deep: y,
          immediate: !0
        }
      );
    })];
    return m != null && z.push(
      ou(m, p).then(() => on(e)).finally(() => h?.())
    ), Promise.race(z);
  }
  function r(f, v) {
    if (!rl(f))
      return n((T) => T === f, v);
    const { flush: y = "sync", deep: m = !1, timeout: p, throwOnTimeout: h } = v ?? {};
    let b = null;
    const w = [new Promise((T) => {
      b = Me(
        [e, f],
        ([P, _]) => {
          t !== (P === _) && (b?.(), T(P));
        },
        {
          flush: y,
          deep: m,
          immediate: !0
        }
      );
    })];
    return p != null && w.push(
      ou(p, h).then(() => on(e)).finally(() => (b?.(), on(e)))
    ), Promise.race(w);
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
  function d(f, v) {
    return n((y) => {
      const m = Array.from(y);
      return m.includes(f) || m.includes(on(f));
    }, v);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, v) {
    let y = -1;
    return n(() => (y += 1, y >= f), v);
  }
  return Array.isArray(on(e)) ? {
    toMatch: n,
    toContains: d,
    changed: u,
    changedTimes: c,
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
    changedTimes: c,
    get not() {
      return ki(e, !t);
    }
  };
}
function Si(e) {
  return ki(e);
}
function mm(e) {
  var t;
  const n = on(e);
  return (t = n?.$el) != null ? t : n;
}
const pf = sm ? window : void 0;
function hf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = pf) : [t, n, r, o] = e, !t)
    return dm;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, f, v, y) => (c.addEventListener(f, v, y), () => c.removeEventListener(f, v, y)), d = Me(
    () => [mm(t), on(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const v = um(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((y) => r.map((m) => l(c, y, m, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), s();
  };
  return Gr(u), u;
}
function vm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function au(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = pf,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: l = !1
  } = r, d = vm(t);
  return hf(o, a, (c) => {
    c.repeat && on(l) || d(c) && n(c);
  }, s);
}
function gm(e) {
  return JSON.parse(JSON.stringify(e));
}
function rs(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, y = yr(), m = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((s = (a = y?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(y?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const h = (w) => l ? typeof l == "function" ? l(w) : gm(w) : w, b = () => im(e[t]) ? h(e[t]) : f, z = (w) => {
    v ? v(w) && m(p, w) : m(p, w);
  };
  if (d) {
    const w = b(), T = W(w);
    let P = !1;
    return Me(
      () => e[t],
      (_) => {
        P || (P = !0, T.value = h(_), un(() => P = !1));
      }
    ), Me(
      T,
      (_) => {
        !P && (_ !== e[t] || c) && z(_);
      },
      { deep: c }
    ), T;
  } else
    return ee({
      get() {
        return b();
      },
      set(w) {
        z(w);
      }
    });
}
var ym = { value: () => {
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
function bm(e, t) {
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
    var n = this._, r = bm(e + "", n), o, a = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (e = r[a]).type) && (o = xm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < s; )
      if (o = (e = r[a]).type)
        n[o] = su(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = su(n[o], e.name, null);
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
function xm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function su(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = ym, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ei = "http://www.w3.org/1999/xhtml";
const iu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ei,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ea(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), iu.hasOwnProperty(t) ? { space: iu[t], local: e } : e;
}
function wm(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ei && t.documentElement.namespaceURI === Ei ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function _m(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function mf(e) {
  var t = Ea(e);
  return (t.local ? _m : wm)(t);
}
function km() {
}
function al(e) {
  return e == null ? km : function() {
    return this.querySelector(e);
  };
}
function Sm(e) {
  typeof e != "function" && (e = al(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = new Array(s), d, u, c = 0; c < s; ++c)
      (d = a[c]) && (u = e.call(d, d.__data__, c, a)) && ("__data__" in d && (u.__data__ = d.__data__), l[c] = u);
  return new _t(r, this._parents);
}
function Em(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function zm() {
  return [];
}
function vf(e) {
  return e == null ? zm : function() {
    return this.querySelectorAll(e);
  };
}
function $m(e) {
  return function() {
    return Em(e.apply(this, arguments));
  };
}
function Pm(e) {
  typeof e == "function" ? e = $m(e) : e = vf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var s = t[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && (r.push(e.call(d, d.__data__, u, s)), o.push(d));
  return new _t(r, o);
}
function gf(e) {
  return function() {
    return this.matches(e);
  };
}
function yf(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Cm = Array.prototype.find;
function Am(e) {
  return function() {
    return Cm.call(this.children, e);
  };
}
function Tm() {
  return this.firstElementChild;
}
function Om(e) {
  return this.select(e == null ? Tm : Am(typeof e == "function" ? e : yf(e)));
}
var Nm = Array.prototype.filter;
function Rm() {
  return Array.from(this.children);
}
function Mm(e) {
  return function() {
    return Nm.call(this.children, e);
  };
}
function Im(e) {
  return this.selectAll(e == null ? Rm : Mm(typeof e == "function" ? e : yf(e)));
}
function Dm(e) {
  typeof e != "function" && (e = gf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new _t(r, this._parents);
}
function bf(e) {
  return new Array(e.length);
}
function Fm() {
  return new _t(this._enter || this._groups.map(bf), this._parents);
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
function Bm(e) {
  return function() {
    return e;
  };
}
function Lm(e, t, n, r, o, a) {
  for (var s = 0, l, d = t.length, u = a.length; s < u; ++s)
    (l = t[s]) ? (l.__data__ = a[s], r[s] = l) : n[s] = new Qo(e, a[s]);
  for (; s < d; ++s)
    (l = t[s]) && (o[s] = l);
}
function Um(e, t, n, r, o, a, s) {
  var l, d, u = /* @__PURE__ */ new Map(), c = t.length, f = a.length, v = new Array(c), y;
  for (l = 0; l < c; ++l)
    (d = t[l]) && (v[l] = y = s.call(d, d.__data__, l, t) + "", u.has(y) ? o[l] = d : u.set(y, d));
  for (l = 0; l < f; ++l)
    y = s.call(e, a[l], l, a) + "", (d = u.get(y)) ? (r[l] = d, d.__data__ = a[l], u.delete(y)) : n[l] = new Qo(e, a[l]);
  for (l = 0; l < c; ++l)
    (d = t[l]) && u.get(v[l]) === d && (o[l] = d);
}
function qm(e) {
  return e.__data__;
}
function Vm(e, t) {
  if (!arguments.length)
    return Array.from(this, qm);
  var n = t ? Um : Lm, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Bm(e));
  for (var a = o.length, s = new Array(a), l = new Array(a), d = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], f = o[u], v = f.length, y = jm(e.call(c, c && c.__data__, u, r)), m = y.length, p = l[u] = new Array(m), h = s[u] = new Array(m), b = d[u] = new Array(v);
    n(c, f, p, h, b, y, t);
    for (var z = 0, w = 0, T, P; z < m; ++z)
      if (T = p[z]) {
        for (z >= w && (w = z + 1); !(P = h[w]) && ++w < m; )
          ;
        T._next = P || null;
      }
  }
  return s = new _t(s, r), s._enter = l, s._exit = d, s;
}
function jm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Hm() {
  return new _t(this._exit || this._groups.map(bf), this._parents);
}
function Gm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Wm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, s = Math.min(o, a), l = new Array(o), d = 0; d < s; ++d)
    for (var u = n[d], c = r[d], f = u.length, v = l[d] = new Array(f), y, m = 0; m < f; ++m)
      (y = u[m] || c[m]) && (v[m] = y);
  for (; d < o; ++d)
    l[d] = n[d];
  return new _t(l, this._parents);
}
function Xm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], s; --o >= 0; )
      (s = r[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function Ym(e) {
  e || (e = Km);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var s = n[a], l = s.length, d = o[a] = new Array(l), u, c = 0; c < l; ++c)
      (u = s[c]) && (d[c] = u);
    d.sort(t);
  }
  return new _t(o, this._parents).order();
}
function Km(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Zm() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Jm() {
  return Array.from(this);
}
function Qm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function ev() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function tv() {
  return !this.node();
}
function nv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, s = o.length, l; a < s; ++a)
      (l = o[a]) && e.call(l, l.__data__, a, o);
  return this;
}
function rv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ov(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function av(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function iv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function uv(e, t) {
  var n = Ea(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ov : rv : typeof t == "function" ? n.local ? lv : iv : n.local ? sv : av)(n, t));
}
function xf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function dv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function cv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function fv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function pv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? dv : typeof t == "function" ? fv : cv)(e, t, n ?? "")) : ur(this.node(), e);
}
function ur(e, t) {
  return e.style.getPropertyValue(t) || xf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function hv(e) {
  return function() {
    delete this[e];
  };
}
function mv(e, t) {
  return function() {
    this[e] = t;
  };
}
function vv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function gv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? hv : typeof t == "function" ? vv : mv)(e, t)) : this.node()[e];
}
function wf(e) {
  return e.trim().split(/^|\s+/);
}
function sl(e) {
  return e.classList || new _f(e);
}
function _f(e) {
  this._node = e, this._names = wf(e.getAttribute("class") || "");
}
_f.prototype = {
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
function kf(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function Sf(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function yv(e) {
  return function() {
    kf(this, e);
  };
}
function bv(e) {
  return function() {
    Sf(this, e);
  };
}
function xv(e, t) {
  return function() {
    (t.apply(this, arguments) ? kf : Sf)(this, e);
  };
}
function wv(e, t) {
  var n = wf(e + "");
  if (arguments.length < 2) {
    for (var r = sl(this.node()), o = -1, a = n.length; ++o < a; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xv : t ? yv : bv)(n, t));
}
function _v() {
  this.textContent = "";
}
function kv(e) {
  return function() {
    this.textContent = e;
  };
}
function Sv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ev(e) {
  return arguments.length ? this.each(e == null ? _v : (typeof e == "function" ? Sv : kv)(e)) : this.node().textContent;
}
function zv() {
  this.innerHTML = "";
}
function $v(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Pv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Cv(e) {
  return arguments.length ? this.each(e == null ? zv : (typeof e == "function" ? Pv : $v)(e)) : this.node().innerHTML;
}
function Av() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Tv() {
  return this.each(Av);
}
function Ov() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Nv() {
  return this.each(Ov);
}
function Rv(e) {
  var t = typeof e == "function" ? e : mf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Mv() {
  return null;
}
function Iv(e, t) {
  var n = typeof e == "function" ? e : mf(e), r = t == null ? Mv : typeof t == "function" ? t : al(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Dv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Fv() {
  return this.each(Dv);
}
function Bv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Lv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Uv(e) {
  return this.select(e ? Lv : Bv);
}
function qv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Vv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function jv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Hv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gv(e, t, n) {
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
function Wv(e, t, n) {
  var r = jv(e + ""), o, a = r.length, s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var d = 0, u = l.length, c; d < u; ++d)
        for (o = 0, c = l[d]; o < a; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (l = t ? Gv : Hv, o = 0; o < a; ++o)
    this.each(l(r[o], t, n));
  return this;
}
function Ef(e, t, n) {
  var r = xf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Xv(e, t) {
  return function() {
    return Ef(this, e, t);
  };
}
function Yv(e, t) {
  return function() {
    return Ef(this, e, t.apply(this, arguments));
  };
}
function Kv(e, t) {
  return this.each((typeof t == "function" ? Yv : Xv)(e, t));
}
function* Zv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, s; o < a; ++o)
      (s = r[o]) && (yield s);
}
var zf = [null];
function _t(e, t) {
  this._groups = e, this._parents = t;
}
function ao() {
  return new _t([[document.documentElement]], zf);
}
function Jv() {
  return this;
}
_t.prototype = ao.prototype = {
  constructor: _t,
  select: Sm,
  selectAll: Pm,
  selectChild: Om,
  selectChildren: Im,
  filter: Dm,
  data: Vm,
  enter: Fm,
  exit: Hm,
  join: Gm,
  merge: Wm,
  selection: Jv,
  order: Xm,
  sort: Ym,
  call: Zm,
  nodes: Jm,
  node: Qm,
  size: ev,
  empty: tv,
  each: nv,
  attr: uv,
  style: pv,
  property: gv,
  classed: wv,
  text: Ev,
  html: Cv,
  raise: Tv,
  lower: Nv,
  append: Rv,
  insert: Iv,
  remove: Fv,
  clone: Uv,
  datum: qv,
  on: Wv,
  dispatch: Kv,
  [Symbol.iterator]: Zv
};
function Mt(e) {
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], zf);
}
function Qv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Gt(e, t) {
  if (e = Qv(e), t === void 0 && (t = e.currentTarget), t) {
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
const eg = { passive: !1 }, Wr = { capture: !0, passive: !1 };
function os(e) {
  e.stopImmediatePropagation();
}
function sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function $f(e) {
  var t = e.document.documentElement, n = Mt(e).on("dragstart.drag", sr, Wr);
  "onselectstart" in t ? n.on("selectstart.drag", sr, Wr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Pf(e, t) {
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
  dx: d,
  dy: u,
  dispatch: c
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
    dx: { value: d, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
zi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function tg(e) {
  return !e.ctrlKey && !e.button;
}
function ng() {
  return this.parentNode;
}
function rg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function og() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ag() {
  var e = tg, t = ng, n = rg, r = og, o = {}, a = Sa("start", "drag", "end"), s = 0, l, d, u, c, f = 0;
  function v(T) {
    T.on("mousedown.drag", y).filter(r).on("touchstart.drag", h).on("touchmove.drag", b, eg).on("touchend.drag touchcancel.drag", z).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(T, P) {
    if (!(c || !e.call(this, T, P))) {
      var _ = w(this, t.call(this, T, P), T, P, "mouse");
      _ && (Mt(T.view).on("mousemove.drag", m, Wr).on("mouseup.drag", p, Wr), $f(T.view), os(T), u = !1, l = T.clientX, d = T.clientY, _("start", T));
    }
  }
  function m(T) {
    if (sr(T), !u) {
      var P = T.clientX - l, _ = T.clientY - d;
      u = P * P + _ * _ > f;
    }
    o.mouse("drag", T);
  }
  function p(T) {
    Mt(T.view).on("mousemove.drag mouseup.drag", null), Pf(T.view, u), sr(T), o.mouse("end", T);
  }
  function h(T, P) {
    if (e.call(this, T, P)) {
      var _ = T.changedTouches, g = t.call(this, T, P), k = _.length, V, D;
      for (V = 0; V < k; ++V)
        (D = w(this, g, T, P, _[V].identifier, _[V])) && (os(T), D("start", T, _[V]));
    }
  }
  function b(T) {
    var P = T.changedTouches, _ = P.length, g, k;
    for (g = 0; g < _; ++g)
      (k = o[P[g].identifier]) && (sr(T), k("drag", T, P[g]));
  }
  function z(T) {
    var P = T.changedTouches, _ = P.length, g, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), g = 0; g < _; ++g)
      (k = o[P[g].identifier]) && (os(T), k("end", T, P[g]));
  }
  function w(T, P, _, g, k, V) {
    var D = a.copy(), F = Gt(V || _, P), C, j, E;
    if ((E = n.call(T, new zi("beforestart", {
      sourceEvent: _,
      target: v,
      identifier: k,
      active: s,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), g)) != null)
      return C = E.x - F[0] || 0, j = E.y - F[1] || 0, function L(A, I, x) {
        var M = F, O;
        switch (A) {
          case "start":
            o[k] = L, O = s++;
            break;
          case "end":
            delete o[k], --s;
          case "drag":
            F = Gt(x || I, P), O = s;
            break;
        }
        D.call(
          A,
          T,
          new zi(A, {
            sourceEvent: I,
            subject: E,
            target: v,
            identifier: k,
            active: O,
            x: F[0] + C,
            y: F[1] + j,
            dx: F[0] - M[0],
            dy: F[1] - M[1],
            dispatch: D
          }),
          g
        );
      };
  }
  return v.filter = function(T) {
    return arguments.length ? (e = typeof T == "function" ? T : bo(!!T), v) : e;
  }, v.container = function(T) {
    return arguments.length ? (t = typeof T == "function" ? T : bo(T), v) : t;
  }, v.subject = function(T) {
    return arguments.length ? (n = typeof T == "function" ? T : bo(T), v) : n;
  }, v.touchable = function(T) {
    return arguments.length ? (r = typeof T == "function" ? T : bo(!!T), v) : r;
  }, v.on = function() {
    var T = a.on.apply(a, arguments);
    return T === a ? v : T;
  }, v.clickDistance = function(T) {
    return arguments.length ? (f = (T = +T) * T, v) : Math.sqrt(f);
  }, v;
}
function il(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Cf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function so() {
}
var Xr = 0.7, ea = 1 / Xr, ir = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sg = /^#([0-9a-f]{3,8})$/, ig = new RegExp(`^rgb\\(${ir},${ir},${ir}\\)$`), lg = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), ug = new RegExp(`^rgba\\(${ir},${ir},${ir},${Yr}\\)$`), dg = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Yr}\\)$`), cg = new RegExp(`^hsl\\(${Yr},${Kt},${Kt}\\)$`), fg = new RegExp(`^hsla\\(${Yr},${Kt},${Kt},${Yr}\\)$`), lu = {
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
  hex: uu,
  // Deprecated! Use color.formatHex.
  formatHex: uu,
  formatHex8: pg,
  formatHsl: hg,
  formatRgb: du,
  toString: du
});
function uu() {
  return this.rgb().formatHex();
}
function pg() {
  return this.rgb().formatHex8();
}
function hg() {
  return Af(this).formatHsl();
}
function du() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = sg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? cu(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ig.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = lg.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ug.exec(e)) ? xo(t[1], t[2], t[3], t[4]) : (t = dg.exec(e)) ? xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cg.exec(e)) ? hu(t[1], t[2] / 100, t[3] / 100, 1) : (t = fg.exec(e)) ? hu(t[1], t[2] / 100, t[3] / 100, t[4]) : lu.hasOwnProperty(e) ? cu(lu[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function cu(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function mg(e) {
  return e instanceof so || (e = jn(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function $i(e, t, n, r) {
  return arguments.length === 1 ? mg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
il(pt, $i, Cf(so, {
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
    return new pt(Fn(this.r), Fn(this.g), Fn(this.b), ta(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fu,
  // Deprecated! Use color.formatHex.
  formatHex: fu,
  formatHex8: vg,
  formatRgb: pu,
  toString: pu
}));
function fu() {
  return `#${Mn(this.r)}${Mn(this.g)}${Mn(this.b)}`;
}
function vg() {
  return `#${Mn(this.r)}${Mn(this.g)}${Mn(this.b)}${Mn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function pu() {
  const e = ta(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Fn(this.r)}, ${Fn(this.g)}, ${Fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ta(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Mn(e) {
  return e = Fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function hu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new It(e, t, n, r);
}
function Af(e) {
  if (e instanceof It)
    return new It(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = jn(e)), !e)
    return new It();
  if (e instanceof It)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, l = a - o, d = (a + o) / 2;
  return l ? (t === a ? s = (n - r) / l + (n < r) * 6 : n === a ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= d < 0.5 ? a + o : 2 - a - o, s *= 60) : l = d > 0 && d < 1 ? 0 : s, new It(s, l, d, e.opacity);
}
function gg(e, t, n, r) {
  return arguments.length === 1 ? Af(e) : new It(e, t, n, r ?? 1);
}
function It(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
il(It, gg, Cf(so, {
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
    return new It(mu(this.h), wo(this.s), wo(this.l), ta(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ta(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${mu(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function mu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ll = (e) => () => e;
function yg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function bg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function xg(e) {
  return (e = +e) == 1 ? Tf : function(t, n) {
    return n - t ? bg(t, n, e) : ll(isNaN(t) ? n : t);
  };
}
function Tf(e, t) {
  var n = t - e;
  return n ? yg(e, n) : ll(isNaN(e) ? t : e);
}
const na = (function e(t) {
  var n = xg(t);
  function r(o, a) {
    var s = n((o = $i(o)).r, (a = $i(a)).r), l = n(o.g, a.g), d = n(o.b, a.b), u = Tf(o.opacity, a.opacity);
    return function(c) {
      return o.r = s(c), o.g = l(c), o.b = d(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function wg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - a) + t[o] * a;
    return r;
  };
}
function _g(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function kg(e, t) {
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
function Sg(e, t) {
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
function Eg(e, t) {
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
function zg(e) {
  return function() {
    return e;
  };
}
function $g(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Of(e, t) {
  var n = Pi.lastIndex = ss.lastIndex = 0, r, o, a, s = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (r = Pi.exec(e)) && (o = ss.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[s] ? l[s] += a : l[++s] = a), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, d.push({ i: s, x: Wt(r, o) })), n = ss.lastIndex;
  return n < t.length && (a = t.slice(n), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? d[0] ? $g(d[0].x) : zg(t) : (t = d.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      l[(f = d[c]).i] = f.x(u);
    return l.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ll(t) : (n === "number" ? Wt : n === "string" ? (r = jn(t)) ? (t = r, na) : Of : t instanceof jn ? na : t instanceof Date ? Sg : _g(t) ? wg : Array.isArray(t) ? kg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Eg : Wt)(e, t);
}
var vu = 180 / Math.PI, Ci = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Nf(e, t, n, r, o, a) {
  var s, l, d;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (d = e * n + t * r) && (n -= e * d, r -= t * d), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, d /= l), e * r < t * n && (e = -e, t = -t, d = -d, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * vu,
    skewX: Math.atan(d) * vu,
    scaleX: s,
    scaleY: l
  };
}
var _o;
function Pg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ci : Nf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Cg(e) {
  return e == null || (_o || (_o = document.createElementNS("http://www.w3.org/2000/svg", "g")), _o.setAttribute("transform", e), !(e = _o.transform.baseVal.consolidate())) ? Ci : (e = e.matrix, Nf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Rf(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, v, y, m) {
    if (u !== f || c !== v) {
      var p = y.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, v) });
    } else (f || v) && y.push("translate(" + f + t + v + n);
  }
  function s(u, c, f, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Wt(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function l(u, c, f, v) {
    u !== c ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Wt(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function d(u, c, f, v, y, m) {
    if (u !== f || c !== v) {
      var p = y.push(o(y) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, v) });
    } else (f !== 1 || v !== 1) && y.push(o(y) + "scale(" + f + "," + v + ")");
  }
  return function(u, c) {
    var f = [], v = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, v), s(u.rotate, c.rotate, f, v), l(u.skewX, c.skewX, f, v), d(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, v), u = c = null, function(y) {
      for (var m = -1, p = v.length, h; ++m < p; )
        f[(h = v[m]).i] = h.x(y);
      return f.join("");
    };
  };
}
var Ag = Rf(Pg, "px, ", "px)", "deg)"), Tg = Rf(Cg, ", ", ")", ")"), Og = 1e-12;
function gu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ng(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Rg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Fo = (function e(t, n, r) {
  function o(a, s) {
    var l = a[0], d = a[1], u = a[2], c = s[0], f = s[1], v = s[2], y = c - l, m = f - d, p = y * y + m * m, h, b;
    if (p < Og)
      b = Math.log(v / u) / t, h = function(g) {
        return [
          l + g * y,
          d + g * m,
          u * Math.exp(t * g * b)
        ];
      };
    else {
      var z = Math.sqrt(p), w = (v * v - u * u + r * p) / (2 * u * n * z), T = (v * v - u * u - r * p) / (2 * v * n * z), P = Math.log(Math.sqrt(w * w + 1) - w), _ = Math.log(Math.sqrt(T * T + 1) - T);
      b = (_ - P) / t, h = function(g) {
        var k = g * b, V = gu(P), D = u / (n * z) * (V * Rg(t * k + P) - Ng(P));
        return [
          l + D * y,
          d + D * m,
          u * V / gu(t * k + P)
        ];
      };
    }
    return h.duration = b * 1e3 * t / Math.SQRT2, h;
  }
  return o.rho = function(a) {
    var s = Math.max(1e-3, +a), l = s * s, d = l * l;
    return e(s, l, d);
  }, o;
})(Math.SQRT2, 2, 4);
var dr = 0, Tr = 0, Sr = 0, Mf = 1e3, ra, Or, oa = 0, Hn = 0, za = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, If = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ul() {
  return Hn || (If(Mg), Hn = Kr.now() + za);
}
function Mg() {
  Hn = 0;
}
function aa() {
  this._call = this._time = this._next = null;
}
aa.prototype = Df.prototype = {
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
function Df(e, t, n) {
  var r = new aa();
  return r.restart(e, t, n), r;
}
function Ig() {
  ul(), ++dr;
  for (var e = ra, t; e; )
    (t = Hn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --dr;
}
function yu() {
  Hn = (oa = Kr.now()) + za, dr = Tr = 0;
  try {
    Ig();
  } finally {
    dr = 0, Fg(), Hn = 0;
  }
}
function Dg() {
  var e = Kr.now(), t = e - oa;
  t > Mf && (za -= t, oa = e);
}
function Fg() {
  for (var e, t = ra, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ra = n);
  Or = e, Ai(r);
}
function Ai(e) {
  if (!dr) {
    Tr && (Tr = clearTimeout(Tr));
    var t = e - Hn;
    t > 24 ? (e < 1 / 0 && (Tr = setTimeout(yu, e - Kr.now() - za)), Sr && (Sr = clearInterval(Sr))) : (Sr || (oa = Kr.now(), Sr = setInterval(Dg, Mf)), dr = 1, If(yu));
  }
}
function bu(e, t, n) {
  var r = new aa();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Bg = Sa("start", "end", "cancel", "interrupt"), Lg = [], Ff = 0, xu = 1, Ti = 2, Bo = 3, wu = 4, Oi = 5, Lo = 6;
function $a(e, t, n, r, o, a) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Ug(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Bg,
    tween: Lg,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ff
  });
}
function dl(e, t) {
  var n = Bt(e, t);
  if (n.state > Ff)
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
function Ug(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Df(a, 0, n.time);
  function a(u) {
    n.state = xu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, v, y;
    if (n.state !== xu)
      return d();
    for (c in r)
      if (y = r[c], y.name === n.name) {
        if (y.state === Bo)
          return bu(s);
        y.state === wu ? (y.state = Lo, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[c]) : +c < t && (y.state = Lo, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[c]);
      }
    if (bu(function() {
      n.state === Bo && (n.state = wu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Ti, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ti) {
      for (n.state = Bo, o = new Array(v = n.tween.length), c = 0, f = -1; c < v; ++c)
        (y = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(d), n.state = Oi, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, c);
    n.state === Oi && (n.on.call("end", e, e.__data__, n.index, n.group), d());
  }
  function d() {
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
function qg(e) {
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
function jg(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = en(this, e), s = a.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, d = 0, u = o.length; d < u; ++d)
        if (o[d].name === t) {
          o[d] = l;
          break;
        }
      d === u && o.push(l);
    }
    a.tween = o;
  };
}
function Hg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Bt(this.node(), n).tween, o = 0, a = r.length, s; o < a; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Vg : jg)(n, e, t));
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
function Bf(e, t) {
  var n;
  return (typeof t == "number" ? Wt : t instanceof jn ? na : (n = jn(t)) ? (t = n, na) : Of)(e, t);
}
function Gg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Wg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Yg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Kg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), d;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), d = l + "", s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l)));
  };
}
function Zg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), d;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), d = l + "", s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l)));
  };
}
function Jg(e, t) {
  var n = Ea(e), r = n === "transform" ? Tg : Bf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Zg : Kg)(n, r, cl(this, "attr." + e, t)) : t == null ? (n.local ? Wg : Gg)(n) : (n.local ? Yg : Xg)(n, r, t));
}
function Qg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ey(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ty(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && ey(e, a)), n;
  }
  return o._value = t, o;
}
function ny(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Qg(e, a)), n;
  }
  return o._value = t, o;
}
function ry(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Ea(e);
  return this.tween(n, (r.local ? ty : ny)(r, t));
}
function oy(e, t) {
  return function() {
    dl(this, e).delay = +t.apply(this, arguments);
  };
}
function ay(e, t) {
  return t = +t, function() {
    dl(this, e).delay = t;
  };
}
function sy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oy : ay)(t, e)) : Bt(this.node(), t).delay;
}
function iy(e, t) {
  return function() {
    en(this, e).duration = +t.apply(this, arguments);
  };
}
function ly(e, t) {
  return t = +t, function() {
    en(this, e).duration = t;
  };
}
function uy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? iy : ly)(t, e)) : Bt(this.node(), t).duration;
}
function dy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    en(this, e).ease = t;
  };
}
function cy(e) {
  var t = this._id;
  return arguments.length ? this.each(dy(t, e)) : Bt(this.node(), t).ease;
}
function fy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    en(this, e).ease = n;
  };
}
function py(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(fy(this._id, e));
}
function hy(e) {
  typeof e != "function" && (e = gf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new cn(r, this._parents, this._name, this._id);
}
function my(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), s = new Array(r), l = 0; l < a; ++l)
    for (var d = t[l], u = n[l], c = d.length, f = s[l] = new Array(c), v, y = 0; y < c; ++y)
      (v = d[y] || u[y]) && (f[y] = v);
  for (; l < r; ++l)
    s[l] = t[l];
  return new cn(s, this._parents, this._name, this._id);
}
function vy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function gy(e, t, n) {
  var r, o, a = vy(t) ? dl : en;
  return function() {
    var s = a(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function yy(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Bt(this.node(), n).on.on(e) : this.each(gy(n, e, t));
}
function by(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function xy() {
  return this.on("end.remove", by(this._id));
}
function wy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = al(e));
  for (var r = this._groups, o = r.length, a = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], d = l.length, u = a[s] = new Array(d), c, f, v = 0; v < d; ++v)
      (c = l[v]) && (f = e.call(c, c.__data__, v, l)) && ("__data__" in c && (f.__data__ = c.__data__), u[v] = f, $a(u[v], t, n, v, u, Bt(c, n)));
  return new cn(a, this._parents, t, n);
}
function _y(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = vf(e));
  for (var r = this._groups, o = r.length, a = [], s = [], l = 0; l < o; ++l)
    for (var d = r[l], u = d.length, c, f = 0; f < u; ++f)
      if (c = d[f]) {
        for (var v = e.call(c, c.__data__, f, d), y, m = Bt(c, n), p = 0, h = v.length; p < h; ++p)
          (y = v[p]) && $a(y, t, n, p, v, m);
        a.push(v), s.push(c);
      }
  return new cn(a, s, t, n);
}
var ky = ao.prototype.constructor;
function Sy() {
  return new ky(this._groups, this._parents);
}
function Ey(e, t) {
  var n, r, o;
  return function() {
    var a = ur(this, e), s = (this.style.removeProperty(e), ur(this, e));
    return a === s ? null : a === n && s === r ? o : o = t(n = a, r = s);
  };
}
function Lf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function zy(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = ur(this, e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function $y(e, t, n) {
  var r, o, a;
  return function() {
    var s = ur(this, e), l = n(this), d = l + "";
    return l == null && (d = l = (this.style.removeProperty(e), ur(this, e))), s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l));
  };
}
function Py(e, t) {
  var n, r, o, a = "style." + t, s = "end." + a, l;
  return function() {
    var d = en(this, e), u = d.on, c = d.value[a] == null ? l || (l = Lf(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), d.on = r;
  };
}
function Cy(e, t, n) {
  var r = (e += "") == "transform" ? Ag : Bf;
  return t == null ? this.styleTween(e, Ey(e, r)).on("end.style." + e, Lf(e)) : typeof t == "function" ? this.styleTween(e, $y(e, r, cl(this, "style." + e, t))).each(Py(this._id, e)) : this.styleTween(e, zy(e, r, t), n).on("end.style." + e, null);
}
function Ay(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ty(e, t, n) {
  var r, o;
  function a() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Ay(e, s, n)), r;
  }
  return a._value = t, a;
}
function Oy(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Ty(e, t, n ?? ""));
}
function Ny(e) {
  return function() {
    this.textContent = e;
  };
}
function Ry(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function My(e) {
  return this.tween("text", typeof e == "function" ? Ry(cl(this, "text", e)) : Ny(e == null ? "" : e + ""));
}
function Iy(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Dy(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Iy(o)), t;
  }
  return r._value = e, r;
}
function Fy(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Dy(e));
}
function By() {
  for (var e = this._name, t = this._id, n = Uf(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      if (d = s[u]) {
        var c = Bt(d, t);
        $a(d, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new cn(r, this._parents, e, n);
}
function Ly() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, s) {
    var l = { value: s }, d = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = en(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(d)), u.on = t;
    }), o === 0 && a();
  });
}
var Uy = 0;
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Uf() {
  return ++Uy;
}
var tn = ao.prototype;
cn.prototype = {
  constructor: cn,
  select: wy,
  selectAll: _y,
  selectChild: tn.selectChild,
  selectChildren: tn.selectChildren,
  filter: hy,
  merge: my,
  selection: Sy,
  transition: By,
  call: tn.call,
  nodes: tn.nodes,
  node: tn.node,
  size: tn.size,
  empty: tn.empty,
  each: tn.each,
  on: yy,
  attr: Jg,
  attrTween: ry,
  style: Cy,
  styleTween: Oy,
  text: My,
  textTween: Fy,
  remove: xy,
  tween: Hg,
  delay: sy,
  duration: uy,
  ease: cy,
  easeVarying: py,
  end: Ly,
  [Symbol.iterator]: tn[Symbol.iterator]
};
function qy(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Vy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: qy
};
function jy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Hy(e) {
  var t, n;
  e instanceof cn ? (t = e._id, e = e._name) : (t = Uf(), (n = Vy).time = ul(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && $a(d, e, t, u, s, n || jy(d, t));
  return new cn(r, this._parents, e, t);
}
ao.prototype.interrupt = qg;
ao.prototype.transition = Hy;
const ko = (e) => () => e;
function Gy(e, {
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
function Wy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Xy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function _u() {
  return this.__zoom || cr;
}
function Yy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ky() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s)
  );
}
function Jy() {
  var e = Wy, t = Xy, n = Zy, r = Yy, o = Ky, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, d = Fo, u = Sa("start", "zoom", "end"), c, f, v, y = 500, m = 150, p = 0, h = 10;
  function b(E) {
    E.property("__zoom", _u).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", F).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", j).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(E, L, A, I) {
    var x = E.selection ? E.selection() : E;
    x.property("__zoom", _u), E !== x ? P(E, L, A, I) : x.interrupt().each(function() {
      _(this, arguments).event(I).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, b.scaleBy = function(E, L, A, I) {
    b.scaleTo(E, function() {
      var x = this.__zoom.k, M = typeof L == "function" ? L.apply(this, arguments) : L;
      return x * M;
    }, A, I);
  }, b.scaleTo = function(E, L, A, I) {
    b.transform(E, function() {
      var x = t.apply(this, arguments), M = this.__zoom, O = A == null ? T(x) : typeof A == "function" ? A.apply(this, arguments) : A, Q = M.invert(O), fe = typeof L == "function" ? L.apply(this, arguments) : L;
      return n(w(z(M, fe), O, Q), x, s);
    }, A, I);
  }, b.translateBy = function(E, L, A, I) {
    b.transform(E, function() {
      return n(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof A == "function" ? A.apply(this, arguments) : A
      ), t.apply(this, arguments), s);
    }, null, I);
  }, b.translateTo = function(E, L, A, I, x) {
    b.transform(E, function() {
      var M = t.apply(this, arguments), O = this.__zoom, Q = I == null ? T(M) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(cr.translate(Q[0], Q[1]).scale(O.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof A == "function" ? -A.apply(this, arguments) : -A
      ), M, s);
    }, I, x);
  };
  function z(E, L) {
    return L = Math.max(a[0], Math.min(a[1], L)), L === E.k ? E : new sn(L, E.x, E.y);
  }
  function w(E, L, A) {
    var I = L[0] - A[0] * E.k, x = L[1] - A[1] * E.k;
    return I === E.x && x === E.y ? E : new sn(E.k, I, x);
  }
  function T(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function P(E, L, A, I) {
    E.on("start.zoom", function() {
      _(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var x = this, M = arguments, O = _(x, M).event(I), Q = t.apply(x, M), fe = A == null ? T(Q) : typeof A == "function" ? A.apply(x, M) : A, xe = Math.max(Q[1][0] - Q[0][0], Q[1][1] - Q[0][1]), ke = x.__zoom, ae = typeof L == "function" ? L.apply(x, M) : L, le = d(ke.invert(fe).concat(xe / ke.k), ae.invert(fe).concat(xe / ae.k));
      return function(ge) {
        if (ge === 1)
          ge = ae;
        else {
          var Te = le(ge), ze = xe / Te[2];
          ge = new sn(ze, fe[0] - Te[0] * ze, fe[1] - Te[1] * ze);
        }
        O.zoom(null, ge);
      };
    });
  }
  function _(E, L, A) {
    return !A && E.__zooming || new g(E, L);
  }
  function g(E, L) {
    this.that = E, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, L), this.taps = 0;
  }
  g.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, L) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var L = Mt(this.that).datum();
      u.call(
        E,
        this.that,
        new Gy(E, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        L
      );
    }
  };
  function k(E, ...L) {
    if (!e.apply(this, arguments))
      return;
    var A = _(this, L).event(E), I = this.__zoom, x = Math.max(a[0], Math.min(a[1], I.k * Math.pow(2, r.apply(this, arguments)))), M = Gt(E);
    if (A.wheel)
      (A.mouse[0][0] !== M[0] || A.mouse[0][1] !== M[1]) && (A.mouse[1] = I.invert(A.mouse[0] = M)), clearTimeout(A.wheel);
    else {
      if (I.k === x)
        return;
      A.mouse = [M, I.invert(M)], Uo(this), A.start();
    }
    Er(E), A.wheel = setTimeout(O, m), A.zoom("mouse", n(w(z(I, x), A.mouse[0], A.mouse[1]), A.extent, s));
    function O() {
      A.wheel = null, A.end();
    }
  }
  function V(E, ...L) {
    if (v || !e.apply(this, arguments))
      return;
    var A = E.currentTarget, I = _(this, L, !0).event(E), x = Mt(E.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", xe, !0), M = Gt(E, A), O = E.clientX, Q = E.clientY;
    $f(E.view), is(E), I.mouse = [M, this.__zoom.invert(M)], Uo(this), I.start();
    function fe(ke) {
      if (Er(ke), !I.moved) {
        var ae = ke.clientX - O, le = ke.clientY - Q;
        I.moved = ae * ae + le * le > p;
      }
      I.event(ke).zoom("mouse", n(w(I.that.__zoom, I.mouse[0] = Gt(ke, A), I.mouse[1]), I.extent, s));
    }
    function xe(ke) {
      x.on("mousemove.zoom mouseup.zoom", null), Pf(ke.view, I.moved), Er(ke), I.event(ke).end();
    }
  }
  function D(E, ...L) {
    if (e.apply(this, arguments)) {
      var A = this.__zoom, I = Gt(E.changedTouches ? E.changedTouches[0] : E, this), x = A.invert(I), M = A.k * (E.shiftKey ? 0.5 : 2), O = n(w(z(A, M), I, x), t.apply(this, L), s);
      Er(E), l > 0 ? Mt(this).transition().duration(l).call(P, O, I, E) : Mt(this).call(b.transform, O, I, E);
    }
  }
  function F(E, ...L) {
    if (e.apply(this, arguments)) {
      var A = E.touches, I = A.length, x = _(this, L, E.changedTouches.length === I).event(E), M, O, Q, fe;
      for (is(E), O = 0; O < I; ++O)
        Q = A[O], fe = Gt(Q, this), fe = [fe, this.__zoom.invert(fe), Q.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== fe[2] && (x.touch1 = fe, x.taps = 0) : (x.touch0 = fe, M = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), M && (x.taps < 2 && (f = fe[0], c = setTimeout(function() {
        c = null;
      }, y)), Uo(this), x.start());
    }
  }
  function C(E, ...L) {
    if (this.__zooming) {
      var A = _(this, L).event(E), I = E.changedTouches, x = I.length, M, O, Q, fe;
      for (Er(E), M = 0; M < x; ++M)
        O = I[M], Q = Gt(O, this), A.touch0 && A.touch0[2] === O.identifier ? A.touch0[0] = Q : A.touch1 && A.touch1[2] === O.identifier && (A.touch1[0] = Q);
      if (O = A.that.__zoom, A.touch1) {
        var xe = A.touch0[0], ke = A.touch0[1], ae = A.touch1[0], le = A.touch1[1], ge = (ge = ae[0] - xe[0]) * ge + (ge = ae[1] - xe[1]) * ge, Te = (Te = le[0] - ke[0]) * Te + (Te = le[1] - ke[1]) * Te;
        O = z(O, Math.sqrt(ge / Te)), Q = [(xe[0] + ae[0]) / 2, (xe[1] + ae[1]) / 2], fe = [(ke[0] + le[0]) / 2, (ke[1] + le[1]) / 2];
      } else if (A.touch0)
        Q = A.touch0[0], fe = A.touch0[1];
      else
        return;
      A.zoom("touch", n(w(O, Q, fe), A.extent, s));
    }
  }
  function j(E, ...L) {
    if (this.__zooming) {
      var A = _(this, L).event(E), I = E.changedTouches, x = I.length, M, O;
      for (is(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, y), M = 0; M < x; ++M)
        O = I[M], A.touch0 && A.touch0[2] === O.identifier ? delete A.touch0 : A.touch1 && A.touch1[2] === O.identifier && delete A.touch1;
      if (A.touch1 && !A.touch0 && (A.touch0 = A.touch1, delete A.touch1), A.touch0)
        A.touch0[1] = this.__zoom.invert(A.touch0[0]);
      else if (A.end(), A.taps === 2 && (O = Gt(O, this), Math.hypot(f[0] - O[0], f[1] - O[1]) < h)) {
        var Q = Mt(this).on("dblclick.zoom");
        Q && Q.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : ko(+E), b) : r;
  }, b.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : ko(!!E), b) : e;
  }, b.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : ko(!!E), b) : o;
  }, b.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : ko([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), b) : t;
  }, b.scaleExtent = function(E) {
    return arguments.length ? (a[0] = +E[0], a[1] = +E[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(E) {
    return arguments.length ? (n = E, b) : n;
  }, b.duration = function(E) {
    return arguments.length ? (l = +E, b) : l;
  }, b.interpolate = function(E) {
    return arguments.length ? (d = E, b) : d;
  }, b.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? b : E;
  }, b.clickDistance = function(E) {
    return arguments.length ? (p = (E = +E) * E, b) : Math.sqrt(p);
  }, b.tapDistance = function(E) {
    return arguments.length ? (h = +E, b) : h;
  }, b;
}
var ce = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(ce || {}), fl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(fl || {}), On = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(On || {}), Sn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(Sn || {}), sa = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(sa || {}), Dr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Dr || {}), qf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(qf || {});
const Qy = ["INPUT", "SELECT", "TEXTAREA"], eb = typeof document < "u" ? document : null;
function Ni(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Qy.includes(r?.nodeName) || o || !!a;
}
function tb(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function ku(e, t, n, r) {
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
function nb(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = rb(n.code, e);
    return Array.isArray(e) ? e.some((o) => ku(n[r], o, t, n.type === "keyup")) : ku(n[r], e, t, n.type === "keyup");
  };
}
function rb(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Fr(e, t) {
  const n = ee(() => Ie(t?.target) ?? eb), r = an(Ie(e) === !0);
  let o = !1;
  const a = /* @__PURE__ */ new Set();
  let s = d(Ie(e));
  Me(
    () => Ie(e),
    (u, c) => {
      typeof c == "boolean" && typeof u != "boolean" && l(), s = d(u);
    },
    {
      immediate: !0
    }
  ), hf(["blur", "contextmenu"], l), au(
    (...u) => s(...u),
    (u) => {
      var c, f;
      const v = Ie(t?.actInsideInputWithModifier) ?? !0, y = Ie(t?.preventDefault) ?? !1;
      if (o = tb(u), (!o || o && !v) && Ni(u))
        return;
      const p = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target, h = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !y && (o || !h) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), au(
    (...u) => s(...u),
    (u) => {
      const c = Ie(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !c) && Ni(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function l() {
    o = !1, a.clear(), r.value = Ie(e) === !0;
  }
  function d(u) {
    return u === null ? (l(), () => !1) : typeof u == "boolean" ? (l(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? nb(u, a) : u;
  }
  return r;
}
const Vf = "vue-flow__node-desc", jf = "vue-flow__edge-desc", ob = "vue-flow__aria-live", Hf = ["Enter", " ", "Escape"], lr = {
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
function Gf(e, t) {
  return {
    x: Gn(e.x, t[0][0], t[1][0]),
    y: Gn(e.y, t[0][1], t[1][1])
  };
}
function Su(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function En(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Bn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !En(e);
}
function Nr(e) {
  return Bn(e) && "computedPosition" in e;
}
function So(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ab(e) {
  return So(e.width) && So(e.height) && So(e.x) && So(e.y);
}
function sb(e, t, n) {
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
function Wf(e, t, n) {
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
function Xf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, a = /* @__PURE__ */ new Set(), s = r === "source" ? "target" : "source";
  for (const l of n)
    l[s] === o && a.add(l[r]);
  return t.filter((l) => a.has(l.id));
}
function ib(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Xf(a, s, l, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => En(a) && a.source === r).map((a) => n.find((s) => Bn(s) && s.id === a.target));
}
function lb(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Xf(a, s, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => En(a) && a.target === r).map((a) => n.find((s) => Bn(s) && s.id === a.source));
}
function Yf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function ub(e, t) {
  return t.some(
    (n) => En(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
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
function db(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Kf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function cb({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function Zf(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = db(
      t,
      Kf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return cb(t);
}
function Jf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const a = {
    ...Jr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const l of e) {
    const { dimensions: d, selectable: u = !0, hidden: c = !1 } = l, f = d.width ?? l.width ?? null, v = d.height ?? l.height ?? null;
    if (o && !u || c)
      continue;
    const y = la(a, ia(l)), m = f === null || v === null, p = r && y > 0, h = (f ?? 0) * (v ?? 0);
    (m || p || y >= h || l.dragging) && s.push(l);
  }
  return s;
}
function Qf(e, t) {
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
function fb(e, t, n) {
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
function pb(e, t, n, r, o, a) {
  const { x: s, y: l } = Zr(e, { x: t, y: n, zoom: r }), { x: d, y: u } = Zr(
    { x: e.x + e.width, y: e.y + e.height },
    {
      x: t,
      y: n,
      zoom: r
    }
  ), c = o - d, f = a - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(c),
    bottom: Math.floor(f)
  };
}
function Eu(e, t, n, r, o, a = 0.1) {
  const s = fb(a, t, n), l = (t - s.x) / e.width, d = (n - s.y) / e.height, u = Math.min(l, d), c = Gn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, y = t / 2 - f * c, m = n / 2 - v * c, p = pb(e, y, m, c, t, n), h = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: y - h.left + h.right,
    y: m - h.top + h.bottom,
    zoom: c
  };
}
function hb(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function ep(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : ep(n, t) : !1;
}
function Qr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function zu(e) {
  const t = e.ctrlKey && ua() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function $u(e, t, n) {
  return e < t ? Gn(Math.abs(e - t), 1, t) / t : e > n ? -Gn(Math.abs(e - n), 1, t) / t : 0;
}
function tp(e, t, n = 15, r = 40) {
  const o = $u(e.x, r, t.width - r) * n, a = $u(e.y, r, t.height - r) * n;
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
function Pu(e, t) {
  var n, r;
  const o = e.filter((s) => s.type === "add" || s.type === "remove");
  for (const s of o)
    if (s.type === "add")
      t.findIndex((d) => d.id === s.item.id) === -1 && t.push(s.item);
    else if (s.type === "remove") {
      const l = t.findIndex((d) => d.id === s.id);
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
              const d = t[a.indexOf(s.parentNode)];
              d && Nr(d) && ls(s, d);
            }
            break;
          case "dimensions":
            if (Nr(s) && (typeof l.dimensions < "u" && (s.dimensions = l.dimensions), typeof l.updateStyle < "u" && l.updateStyle && (s.style = {
              ...s.style || {},
              width: `${(n = l.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = l.dimensions) == null ? void 0 : r.height}px`
            }), typeof l.resizing < "u" && (s.resizing = l.resizing), s.expandParent && s.parentNode)) {
              const d = t[a.indexOf(s.parentNode)];
              d && Nr(d) && (!!d.dimensions.width && !!d.dimensions.height ? ls(s, d) : un(() => {
                ls(s, d);
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
function Cu(e) {
  return {
    item: e,
    type: "add"
  };
}
function Au(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Tu(e, t, n, r, o) {
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
const Ou = () => {
};
function pe(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Ou, r = () => !1;
  const o = () => t.size > 0 || r(), a = (v) => {
    n = v;
  }, s = () => {
    n = Ou;
  }, l = (v) => {
    r = v;
  }, d = () => {
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
    removeHasEmitListeners: d
  };
}
function Nu(e, t, n) {
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
function mb(e, t, n, r) {
  var o, a;
  const s = /* @__PURE__ */ new Map();
  for (const [l, d] of e)
    (d.selected || d.id === r) && (!d.parentNode || !ep(d, e)) && (d.draggable || t && typeof d.draggable > "u") && e.get(l) && s.set(l, {
      id: d.id,
      position: d.position || { x: 0, y: 0 },
      distance: {
        x: n.x - ((o = d.computedPosition) == null ? void 0 : o.x) || 0,
        y: n.y - ((a = d.computedPosition) == null ? void 0 : a.y) || 0
      },
      from: { x: d.computedPosition.x, y: d.computedPosition.y },
      extent: d.extent,
      parentNode: d.parentNode,
      dimensions: { ...d.dimensions },
      expandParent: d.expandParent
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
function np(e) {
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
function vb(e, t, n) {
  const [r, o, a, s] = typeof e != "string" ? np(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + s, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - a
    ]
  ] : !1;
}
function gb(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const a = vb(o, e, r);
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
    const [a, s, l, d] = np(o.padding), u = r?.computedPosition.x || 0, c = r?.computedPosition.y || 0;
    o = [
      [o.range[0][0] + u + d, o.range[0][1] + c + a],
      [o.range[1][0] + u - s, o.range[1][1] + c - l]
    ];
  }
  return o === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : o;
}
function yb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function pl(e, t, n, r, o) {
  const a = yb(e.dimensions, gb(e, n, r, o)), s = Gf(t, a);
  return {
    position: {
      x: s.x - (o?.computedPosition.x || 0),
      y: s.y - (o?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function fr(e, t, n = ce.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, a = (t?.y ?? 0) + e.computedPosition.y, { width: s, height: l } = t ?? _b(e);
  if (r)
    return { x: o + s / 2, y: a + l / 2 };
  switch (t?.position ?? n) {
    case ce.Top:
      return { x: o + s / 2, y: a };
    case ce.Right:
      return { x: o + s, y: a + l / 2 };
    case ce.Bottom:
      return { x: o + s / 2, y: a + l };
    case ce.Left:
      return { x: o, y: a + l / 2 };
  }
}
function Ru(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function bb({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: r,
  targetWidth: o,
  targetHeight: a,
  width: s,
  height: l,
  viewport: d
}) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + o),
    y2: Math.max(e.y + r, t.y + a)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const c = Kf({
    x: (0 - d.x) / d.zoom,
    y: (0 - d.y) / d.zoom,
    width: s / d.zoom,
    height: l / d.zoom
  }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), v = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(f * v) > 0;
}
function xb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const a = t(e.source), s = t(e.target);
  return !a || !s ? 0 : (n && (o = r ? e.zIndex : Math.max(a.computedPosition.z || 0, s.computedPosition.z || 0)), o);
}
var nt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(nt || {});
const Mu = {
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
    super((r = Mu[t]) == null ? void 0 : r.call(Mu, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function hl(e) {
  return "clientX" in e;
}
function wb(e) {
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
function _b(e) {
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
const kb = () => !0;
function ds(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function Sb(e, t, n) {
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
const Eb = 250;
function zb(e, t, n, r) {
  var o, a;
  let s = [], l = Number.POSITIVE_INFINITY;
  const d = Sb(e, n, t + Eb);
  for (const u of d) {
    const c = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const f of c) {
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
    return s.find((c) => c.type === u) ?? s[0];
  }
  return s[0];
}
function Iu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: a,
  doc: s,
  lib: l,
  flowId: d,
  isValidConnection: u = kb
}, c, f, v, y) {
  const m = a === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${d}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: b } = Xt(e), z = s.elementFromPoint(h, b), w = z?.classList.contains(`${l}-flow__handle`) ? z : p, T = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const P = rp(void 0, w), _ = w.getAttribute("data-nodeid"), g = w.getAttribute("data-handleid"), k = w.classList.contains("connectable"), V = w.classList.contains("connectableend");
    if (!_ || !P)
      return T;
    const D = {
      source: m ? _ : r,
      sourceHandle: m ? g : o,
      target: m ? r : _,
      targetHandle: m ? o : g
    };
    T.connection = D;
    const C = k && V && (n === Sn.Strict ? m && P === "source" || !m && P === "target" : _ !== r || g !== o);
    T.isValid = C && u(D, {
      nodes: f,
      edges: c,
      sourceNode: v(D.source),
      targetNode: v(D.target)
    }), T.toHandle = op(_, P, g, y, n, !0);
  }
  return T;
}
function rp(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function $b(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function Pb(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function op(e, t, n, r, o, a = !1) {
  var s, l, d;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === Sn.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((d = u.handleBounds) == null ? void 0 : d.target) ?? []], f = (n ? c?.find((v) => v.id === n) : c?.[0]) ?? null;
  return f && a ? { ...f, ...fr(u, f, f.position, !0) } : f;
}
const Ri = {
  [ce.Left]: ce.Right,
  [ce.Right]: ce.Left,
  [ce.Top]: ce.Bottom,
  [ce.Bottom]: ce.Top
}, Cb = ["production", "prod"];
function io(e, ...t) {
  ap() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function ap() {
  return !Cb.includes(process.env.NODE_ENV || "");
}
function Du(e, t, n, r, o) {
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
function Ab(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new at(nt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return En(e) ? o = e : o = {
    ...e,
    id: Yf(e)
  }, o = Wf(o, void 0, r), ub(o, t) ? !1 : o;
}
function Tb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new at(nt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new at(nt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...s } = e;
  return {
    ...s,
    id: r ? Yf(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Fu(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const s = e[a];
    if (!Bn(s)) {
      n(
        new at(nt.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = sb(s, t(s.id), s.parentNode);
    s.parentNode && (r[s.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const s = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !s && n(new at(nt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return o;
}
function Bu(e, t, n, r, o, a) {
  let s = o;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, l.set(n, t)), s = `${o}-${e}`;
  const d = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, d.set(n, t)), a) {
    s = `${o}-${e}-${a}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function cs(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: s = null, targetHandle: l = null } = r, d = { edgeId: r.id, source: o, target: a, sourceHandle: s, targetHandle: l }, u = `${o}-${s}--${a}-${l}`, c = `${a}-${l}--${o}-${s}`;
    Bu("source", d, c, e, o, s), Bu("target", d, u, e, a, l);
  }
}
function Lu(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function fs(e, t, n, r, o, a, s, l) {
  const d = [];
  for (const u of e) {
    const c = En(u) ? u : Ab(u, l, o, a);
    if (!c)
      continue;
    const f = n(c.source), v = n(c.target);
    if (!f || !v) {
      o(new at(nt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new at(nt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!v) {
      o(new at(nt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: l,
      nodes: s,
      sourceNode: f,
      targetNode: v
    })) {
      o(new at(nt.EDGE_INVALID, c.id));
      continue;
    }
    const y = r(c.id);
    d.push({
      ...Wf(c, y, a),
      sourceNode: f,
      targetNode: v
    });
  }
  return d;
}
const Uu = /* @__PURE__ */ Symbol("vueFlow"), sp = /* @__PURE__ */ Symbol("nodeId"), ip = /* @__PURE__ */ Symbol("nodeRef"), Ob = /* @__PURE__ */ Symbol("edgeId"), Nb = /* @__PURE__ */ Symbol("edgeRef"), Aa = /* @__PURE__ */ Symbol("slots");
function lp(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: r,
    noDragClassName: o,
    nodeLookup: a,
    nodeExtent: s,
    nodeDragThreshold: l,
    viewport: d,
    autoPanOnNodeDrag: u,
    autoPanSpeed: c,
    nodesDraggable: f,
    panBy: v,
    findNode: y,
    multiSelectionActive: m,
    nodesSelectionActive: p,
    selectNodesOnDrag: h,
    removeSelectedElements: b,
    addSelectedNodes: z,
    updateNodePositions: w,
    emits: T
  } = je(), { onStart: P, onDrag: _, onStop: g, onClick: k, el: V, disabled: D, id: F, selectable: C, dragHandle: j } = e, E = an(!1);
  let L = [], A, I = null, x = { x: void 0, y: void 0 }, M = { x: 0, y: 0 }, O = null, Q = !1, fe = !1, xe = 0, ke = !1;
  const ae = Ib(), le = ({ x: ue, y: ye }) => {
    x = { x: ue, y: ye };
    let B = !1;
    if (L = L.map((R) => {
      const U = { x: ue - R.distance.x, y: ye - R.distance.y }, { computedPosition: G } = pl(
        R,
        n.value ? Ca(U, r.value) : U,
        T.error,
        s.value,
        R.parentNode ? y(R.parentNode) : void 0
      );
      return B = B || R.position.x !== G.x || R.position.y !== G.y, R.position = G, R;
    }), fe = fe || B, !!B && (w(L, !0, !0), E.value = !0, O)) {
      const [R, U] = us({
        id: F,
        dragItems: L,
        findNode: y
      });
      _({ event: O, node: R, nodes: U });
    }
  }, ge = () => {
    if (!I)
      return;
    const [ue, ye] = tp(M, I, c.value);
    if (ue !== 0 || ye !== 0) {
      const B = {
        x: (x.x ?? 0) - ue / d.value.zoom,
        y: (x.y ?? 0) - ye / d.value.zoom
      };
      v({ x: ue, y: ye }) && le(B);
    }
    xe = requestAnimationFrame(ge);
  }, Te = (ue, ye) => {
    Q = !0;
    const B = y(F);
    !h.value && !m.value && B && (B.selected || b()), B && Ie(C) && h.value && Mi(
      B,
      m.value,
      z,
      b,
      p,
      !1,
      ye
    );
    const R = ae(ue.sourceEvent);
    if (x = R, L = mb(a.value, f.value, R, F), L.length) {
      const [U, G] = us({
        id: F,
        dragItems: L,
        findNode: y
      });
      P({ event: ue.sourceEvent, node: U, nodes: G });
    }
  }, ze = (ue, ye) => {
    var B;
    ue.sourceEvent.type === "touchmove" && ue.sourceEvent.touches.length > 1 || (fe = !1, l.value === 0 && Te(ue, ye), x = ae(ue.sourceEvent), I = ((B = t.value) == null ? void 0 : B.getBoundingClientRect()) || null, M = Xt(ue.sourceEvent, I));
  }, de = (ue, ye) => {
    const B = ae(ue.sourceEvent);
    if (!ke && Q && u.value && (ke = !0, ge()), !Q) {
      const R = B.xSnapped - (x.x ?? 0), U = B.ySnapped - (x.y ?? 0);
      Math.sqrt(R * R + U * U) > l.value && Te(ue, ye);
    }
    (x.x !== B.xSnapped || x.y !== B.ySnapped) && L.length && Q && (O = ue.sourceEvent, M = Xt(ue.sourceEvent, I), le(B));
  }, _e = (ue) => {
    let ye = !1;
    if (!Q && !E.value && !m.value) {
      const B = ue.sourceEvent, R = ae(B), U = R.xSnapped - (x.x ?? 0), G = R.ySnapped - (x.y ?? 0), H = Math.sqrt(U * U + G * G);
      H !== 0 && H <= l.value && (k?.(B), ye = !0);
    }
    if (L.length && !ye) {
      fe && (w(L, !1, !1), fe = !1);
      const [B, R] = us({
        id: F,
        dragItems: L,
        findNode: y
      });
      g({ event: ue.sourceEvent, node: B, nodes: R });
    }
    L = [], E.value = !1, ke = !1, Q = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(xe);
  };
  return Me([() => Ie(D), V], ([ue, ye], B, R) => {
    if (ye) {
      const U = Mt(ye);
      ue || (A = ag().on("start", (G) => ze(G, ye)).on("drag", (G) => de(G, ye)).on("end", (G) => _e(G)).filter((G) => {
        const H = G.target, se = Ie(j);
        return !G.button && (!o.value || !Nu(H, `.${o.value}`, ye) && (!se || Nu(H, se, ye)));
      }), U.call(A)), R(() => {
        U.on(".drag", null), A && (A.on("start", null), A.on("drag", null), A.on("end", null));
      });
    }
  }), E;
}
function Rb() {
  return {
    doubleClick: pe(),
    click: pe(),
    mouseEnter: pe(),
    mouseMove: pe(),
    mouseLeave: pe(),
    contextMenu: pe(),
    updateStart: pe(),
    update: pe(),
    updateEnd: pe()
  };
}
function Mb(e, t) {
  const n = Rb();
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
function Ib() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = je();
  return (o) => {
    var a;
    const s = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = wb(o) ? o.sourceEvent : o, { x: d, y: u } = Xt(l, s), c = Jr({ x: d, y: u }, e.value), { x: f, y: v } = n.value ? Ca(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: v,
      ...c
    };
  };
}
function Eo() {
  return !0;
}
function up({
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
    vueFlowRef: d,
    connectionMode: u,
    connectionRadius: c,
    connectOnClick: f,
    connectionClickStartHandle: v,
    nodesConnectable: y,
    autoPanOnConnect: m,
    autoPanSpeed: p,
    findNode: h,
    panBy: b,
    startConnection: z,
    updateConnection: w,
    endConnection: T,
    emits: P,
    viewport: _,
    edges: g,
    nodes: k,
    isValidConnection: V,
    nodeLookup: D
  } = je();
  let F = null, C = !1, j = null;
  function E(A) {
    var I;
    const x = Ie(n) === "target", M = hl(A), O = Su(A.target), Q = A.currentTarget;
    if (Q && (M && A.button === 0 || !M)) {
      let fe = function(me) {
        B = Xt(me, _e), le = zb(
          Jr(B, _.value, !1, [1, 1]),
          c.value,
          D.value,
          G
        ), R || (U(), R = !0);
        const we = Iu(
          me,
          {
            handle: le,
            connectionMode: u.value,
            fromNodeId: Ie(t),
            fromHandleId: Ie(e),
            fromType: x ? "target" : "source",
            isValidConnection: ae,
            doc: O,
            lib: "vue",
            flowId: l,
            nodeLookup: D.value
          },
          g.value,
          k.value,
          h,
          D.value
        );
        j = we.handleDomNode, F = we.connection, C = Pb(!!le, we.isValid);
        const Ce = {
          // from stays the same
          ...he,
          isValid: C,
          to: we.toHandle && C ? Zr({ x: we.toHandle.x, y: we.toHandle.y }, _.value) : B,
          toHandle: we.toHandle,
          toPosition: C && we.toHandle ? we.toHandle.position : Ri[G.position],
          toNode: we.toHandle ? D.value.get(we.toHandle.nodeId) : null
        };
        if (C && le && he?.toHandle && Ce.toHandle && he.toHandle.type === Ce.toHandle.type && he.toHandle.nodeId === Ce.toHandle.nodeId && he.toHandle.id === Ce.toHandle.id && he.to.x === Ce.to.x && he.to.y === Ce.to.y)
          return;
        const Be = le ?? we.toHandle;
        if (w(
          Be && C ? Zr(
            {
              x: Be.x,
              y: Be.y
            },
            _.value
          ) : B,
          Be,
          $b(!!Be, C)
        ), he = Ce, !le && !C && !j)
          return ds(ye);
        F && F.source !== F.target && j && (ds(ye), ye = j, j.classList.add("connecting", "vue-flow__handle-connecting"), j.classList.toggle("valid", !!C), j.classList.toggle("vue-flow__handle-valid", !!C));
      }, xe = function(me) {
        "touches" in me && me.touches.length > 0 || ((le || j) && F && C && (a ? a(me, F) : P.connect(F)), P.connectEnd(me), o && s?.(me), ds(ye), cancelAnimationFrame(ge), T(me), R = !1, C = !1, F = null, j = null, O.removeEventListener("mousemove", fe), O.removeEventListener("mouseup", xe), O.removeEventListener("touchmove", fe), O.removeEventListener("touchend", xe));
      };
      const ke = h(Ie(t));
      let ae = Ie(r) || V.value || Eo;
      !ae && ke && (ae = (x ? ke.isValidSourcePos : ke.isValidTargetPos) || Eo);
      let le, ge = 0;
      const { x: Te, y: ze } = Xt(A), de = rp(Ie(o), Q), _e = (I = d.value) == null ? void 0 : I.getBoundingClientRect();
      if (!_e || !de)
        return;
      const ue = op(Ie(t), de, Ie(e), D.value, u.value);
      if (!ue)
        return;
      let ye, B = Xt(A, _e), R = !1;
      const U = () => {
        if (!m.value)
          return;
        const [me, we] = tp(B, _e, p.value);
        b({ x: me, y: we }), ge = requestAnimationFrame(U);
      }, G = {
        ...ue,
        nodeId: Ie(t),
        type: de,
        position: ue.position
      }, H = D.value.get(Ie(t)), ie = {
        inProgress: !0,
        isValid: null,
        from: fr(H, G, ce.Left, !0),
        fromHandle: G,
        fromPosition: G.position,
        fromNode: H,
        to: B,
        toHandle: null,
        toPosition: Ri[G.position],
        toNode: null
      };
      z(
        {
          nodeId: Ie(t),
          id: Ie(e),
          type: de,
          position: Q?.getAttribute("data-handlepos") || ce.Top,
          ...B
        },
        {
          x: Te - _e.left,
          y: ze - _e.top
        }
      ), P.connectStart({ event: A, nodeId: Ie(t), handleId: Ie(e), handleType: de });
      let he = ie;
      O.addEventListener("mousemove", fe), O.addEventListener("mouseup", xe), O.addEventListener("touchmove", fe), O.addEventListener("touchend", xe);
    }
  }
  function L(A) {
    var I, x;
    if (!f.value)
      return;
    const M = Ie(n) === "target";
    if (!v.value) {
      P.clickConnectStart({ event: A, nodeId: Ie(t), handleId: Ie(e) }), z(
        {
          nodeId: Ie(t),
          type: Ie(n),
          id: Ie(e),
          position: ce.Top,
          ...Xt(A)
        },
        void 0,
        !0
      );
      return;
    }
    let O = Ie(r) || V.value || Eo;
    const Q = h(Ie(t));
    if (!O && Q && (O = (M ? Q.isValidSourcePos : Q.isValidTargetPos) || Eo), Q && (typeof Q.connectable > "u" ? y.value : Q.connectable) === !1)
      return;
    const fe = Su(A.target), xe = Iu(
      A,
      {
        handle: {
          nodeId: Ie(t),
          id: Ie(e),
          type: Ie(n),
          position: ce.Top,
          ...Xt(A)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: O,
        doc: fe,
        lib: "vue",
        flowId: l,
        nodeLookup: D.value
      },
      g.value,
      k.value,
      h,
      D.value
    ), ke = ((I = xe.connection) == null ? void 0 : I.source) === ((x = xe.connection) == null ? void 0 : x.target);
    xe.isValid && xe.connection && !ke && P.connect(xe.connection), P.clickConnectEnd(A), T(A, !0);
  }
  return {
    handlePointerDown: E,
    handleClick: L
  };
}
function Db() {
  return gr(sp, "");
}
function dp(e) {
  const t = e ?? Db() ?? "", n = gr(ip, W(null)), { findNode: r, edges: o, emits: a } = je(), s = r(t);
  return s || a.error(new at(nt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: s,
    parentNode: ee(() => r(s.parentNode)),
    connectedEdges: ee(() => Qf([s], o.value))
  };
}
function Fb() {
  return {
    doubleClick: pe(),
    click: pe(),
    mouseEnter: pe(),
    mouseMove: pe(),
    mouseLeave: pe(),
    contextMenu: pe(),
    dragStart: pe(),
    drag: pe(),
    dragStop: pe()
  };
}
function Bb(e, t) {
  const n = Fb();
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
function cp() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: s, emits: l } = je();
  return (d, u = !1) => {
    const c = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, v = u ? 4 : 1, y = d.x * c * v, m = d.y * f * v, p = [];
    for (const h of e.value)
      if (h.draggable || s && typeof h.draggable > "u") {
        const b = { x: h.computedPosition.x + y, y: h.computedPosition.y + m }, { position: z } = pl(
          h,
          b,
          l.error,
          t.value,
          h.parentNode ? r(h.parentNode) : void 0
        );
        p.push({
          id: h.id,
          position: z,
          from: h.position,
          distance: { x: d.x, y: d.y },
          dimensions: h.dimensions
        });
      }
    n(p, !0, !1);
  };
}
const zo = 0.1, Lb = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function vn() {
  return io("Viewport not initialized yet."), Promise.resolve(!1);
}
const Ub = {
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
function qb(e) {
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
      var d;
      const { x: u, y: c } = Gf({ x: -r, y: -o }, e.translateExtent), f = cr.translate(-u, -c).scale(a);
      e.d3Selection && e.d3Zoom ? (d = e.d3Zoom) == null || d.interpolate(s?.interpolate === "linear" ? Ir : Fo).transform(
        ps(e.d3Selection, s?.duration, s?.ease, () => {
          l(!0);
        }),
        f
      ) : l(!1);
    });
  }
  return ee(() => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
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
      const d = Zf(l), { x: u, y: c, zoom: f } = Eu(
        d,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? zo
      );
      return n(u, c, f, o);
    },
    setCenter: (o, a, s) => {
      const l = typeof s?.zoom < "u" ? s.zoom : e.maxZoom, d = e.dimensions.width / 2 - o * l, u = e.dimensions.height / 2 - a * l;
      return n(d, u, l, s);
    },
    fitBounds: (o, a = { padding: zo }) => {
      const { x: s, y: l, zoom: d } = Eu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        a.padding ?? zo
      );
      return n(s, l, d, a);
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
  } : Ub);
}
function ps(e, t = 0, n = Lb, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Vb(e, t, n) {
  const r = Xc(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, h, b = !!(n.nodes.value.length || n.edges.value.length);
        p = er([e.modelValue, () => {
          var z, w;
          return (w = (z = e.modelValue) == null ? void 0 : z.value) == null ? void 0 : w.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setElements(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = er(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([z, w]) => {
            var T;
            (T = e.modelValue) != null && T.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [...z, ...w], un(() => {
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
          var z, w;
          return (w = (z = e.nodes) == null ? void 0 : z.value) == null ? void 0 : w.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setNodes(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = er(
          [n.nodes, () => n.nodes.value.length],
          ([z]) => {
            var w;
            (w = e.nodes) != null && w.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [...z], un(() => {
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
          var z, w;
          return (w = (z = e.edges) == null ? void 0 : z.value) == null ? void 0 : w.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setEdges(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = er(
          [n.edges, () => n.edges.value.length],
          ([z]) => {
            var w;
            (w = e.edges) != null && w.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [...z], un(() => {
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
    }, d = () => {
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
    }, c = () => {
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
          (h, b, z) => {
            h ? n.onConnect(p) : n.hooks.value.connect.off(p), z(() => {
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
          const z = Ve(() => t[b]), w = n[b];
          rl(w) && r.run(() => {
            Me(
              z,
              (T) => {
                et(T) && (w.value = T);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), a(), s(), d(), l(), u(), c(), f(), v(), y();
  }), () => r.stop();
}
function jb() {
  return {
    edgesChange: pe(),
    nodesChange: pe(),
    nodeDoubleClick: pe(),
    nodeClick: pe(),
    nodeMouseEnter: pe(),
    nodeMouseMove: pe(),
    nodeMouseLeave: pe(),
    nodeContextMenu: pe(),
    nodeDragStart: pe(),
    nodeDrag: pe(),
    nodeDragStop: pe(),
    nodesInitialized: pe(),
    miniMapNodeClick: pe(),
    miniMapNodeDoubleClick: pe(),
    miniMapNodeMouseEnter: pe(),
    miniMapNodeMouseMove: pe(),
    miniMapNodeMouseLeave: pe(),
    connect: pe(),
    connectStart: pe(),
    connectEnd: pe(),
    clickConnectStart: pe(),
    clickConnectEnd: pe(),
    paneReady: pe(),
    init: pe(),
    move: pe(),
    moveStart: pe(),
    moveEnd: pe(),
    selectionDragStart: pe(),
    selectionDrag: pe(),
    selectionDragStop: pe(),
    selectionContextMenu: pe(),
    selectionStart: pe(),
    selectionEnd: pe(),
    viewportChangeStart: pe(),
    viewportChange: pe(),
    viewportChangeEnd: pe(),
    paneScroll: pe(),
    paneClick: pe(),
    paneContextMenu: pe(),
    paneMouseEnter: pe(),
    paneMouseMove: pe(),
    paneMouseLeave: pe(),
    edgeContextMenu: pe(),
    edgeMouseEnter: pe(),
    edgeMouseMove: pe(),
    edgeMouseLeave: pe(),
    edgeDoubleClick: pe(),
    edgeClick: pe(),
    edgeUpdateStart: pe(),
    edgeUpdate: pe(),
    edgeUpdateEnd: pe(),
    updateNodeInternals: pe(),
    error: pe((e) => io(e.message))
  };
}
function Hb(e, t) {
  const n = yr();
  hh(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const s = (l) => {
        e(o, l);
      };
      a.setEmitter(s), Gr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), Gr(a.removeHasEmitListeners);
    }
  });
  function r(o) {
    var a;
    const s = Gb(o);
    return !!((a = n?.vnode.props) == null ? void 0 : a[s]);
  }
}
function Gb(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, a) => a.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function fp() {
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
      type: On.Bezier,
      style: {}
    },
    connectionMode: Sn.Loose,
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
    hooks: jb(),
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
const Wb = [
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
function Xb(e, t, n) {
  const r = qb(e), o = (B) => {
    const R = B ?? [];
    e.hooks.updateNodeInternals.trigger(R);
  }, a = (B) => lb(B, e.nodes, e.edges), s = (B) => ib(B, e.nodes, e.edges), l = (B) => Qf(B, e.edges), d = ({ id: B, type: R, nodeId: U }) => {
    var G;
    const H = B ? `-${R}-${B}` : `-${R}`;
    return Array.from(((G = e.connectionLookup.get(`${U}${H}`)) == null ? void 0 : G.values()) ?? []);
  }, u = (B) => {
    if (B)
      return t.value.get(B);
  }, c = (B) => {
    if (B)
      return n.value.get(B);
  }, f = (B, R, U) => {
    var G, H;
    const se = [];
    for (const ie of B) {
      const he = {
        id: ie.id,
        type: "position",
        dragging: U,
        from: ie.from
      };
      if (R && (he.position = ie.position, ie.parentNode)) {
        const me = u(ie.parentNode);
        he.position = {
          x: he.position.x - (((G = me?.computedPosition) == null ? void 0 : G.x) ?? 0),
          y: he.position.y - (((H = me?.computedPosition) == null ? void 0 : H.y) ?? 0)
        };
      }
      se.push(he);
    }
    se?.length && e.hooks.nodesChange.trigger(se);
  }, v = (B) => {
    if (!e.vueFlowRef)
      return;
    const R = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!R)
      return;
    const U = window.getComputedStyle(R), { m22: G } = new window.DOMMatrixReadOnly(U.transform), H = [];
    for (const se of B) {
      const ie = se, he = u(ie.id);
      if (he) {
        const me = Pa(ie.nodeElement);
        if (!!(me.width && me.height && (he.dimensions.width !== me.width || he.dimensions.height !== me.height || ie.forceUpdate))) {
          const Ce = ie.nodeElement.getBoundingClientRect();
          he.dimensions = me, he.handleBounds.source = Du("source", ie.nodeElement, Ce, G, he.id), he.handleBounds.target = Du("target", ie.nodeElement, Ce, G, he.id), H.push({
            id: he.id,
            type: "dimensions",
            dimensions: me
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), H.length && e.hooks.nodesChange.trigger(H);
  }, y = (B, R) => {
    const U = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
    for (const ie of B)
      Bn(ie) ? U.add(ie.id) : En(ie) && G.add(ie.id);
    const H = bn(t.value, U, !0), se = bn(n.value, G);
    if (e.multiSelectionActive) {
      for (const ie of U)
        H.push(yn(ie, R));
      for (const ie of G)
        se.push(yn(ie, R));
    }
    H.length && e.hooks.nodesChange.trigger(H), se.length && e.hooks.edgesChange.trigger(se);
  }, m = (B) => {
    if (e.multiSelectionActive) {
      const R = B.map((U) => yn(U.id, !0));
      e.hooks.nodesChange.trigger(R);
      return;
    }
    e.hooks.nodesChange.trigger(bn(t.value, new Set(B.map((R) => R.id)), !0)), e.hooks.edgesChange.trigger(bn(n.value));
  }, p = (B) => {
    if (e.multiSelectionActive) {
      const R = B.map((U) => yn(U.id, !0));
      e.hooks.edgesChange.trigger(R);
      return;
    }
    e.hooks.edgesChange.trigger(bn(n.value, new Set(B.map((R) => R.id)))), e.hooks.nodesChange.trigger(bn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (B) => {
    y(B, !0);
  }, b = (B) => {
    const U = (B || e.nodes).map((G) => (G.selected = !1, yn(G.id, !1)));
    e.hooks.nodesChange.trigger(U);
  }, z = (B) => {
    const U = (B || e.edges).map((G) => (G.selected = !1, yn(G.id, !1)));
    e.hooks.edgesChange.trigger(U);
  }, w = (B) => {
    if (!B || !B.length)
      return y([], !1);
    const R = B.reduce(
      (U, G) => {
        const H = yn(G.id, !1);
        return Bn(G) ? U.nodes.push(H) : U.edges.push(H), U;
      },
      { nodes: [], edges: [] }
    );
    R.nodes.length && e.hooks.nodesChange.trigger(R.nodes), R.edges.length && e.hooks.edgesChange.trigger(R.edges);
  }, T = (B) => {
    var R;
    (R = e.d3Zoom) == null || R.scaleExtent([B, e.maxZoom]), e.minZoom = B;
  }, P = (B) => {
    var R;
    (R = e.d3Zoom) == null || R.scaleExtent([e.minZoom, B]), e.maxZoom = B;
  }, _ = (B) => {
    var R;
    (R = e.d3Zoom) == null || R.translateExtent(B), e.translateExtent = B;
  }, g = (B) => {
    e.nodeExtent = B, o();
  }, k = (B) => {
    var R;
    (R = e.d3Zoom) == null || R.clickDistance(B);
  }, V = (B) => {
    e.nodesDraggable = B, e.nodesConnectable = B, e.elementsSelectable = B;
  }, D = (B) => {
    const R = B instanceof Function ? B(e.nodes) : B;
    !e.initialized && !R.length || (e.nodes = Fu(R, u, e.hooks.error.trigger));
  }, F = (B) => {
    const R = B instanceof Function ? B(e.edges) : B;
    if (!e.initialized && !R.length)
      return;
    const U = fs(
      R,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    cs(e.connectionLookup, n.value, U), e.edges = U;
  }, C = (B) => {
    const R = B instanceof Function ? B([...e.nodes, ...e.edges]) : B;
    !e.initialized && !R.length || (D(R.filter(Bn)), F(R.filter(En)));
  }, j = (B) => {
    let R = B instanceof Function ? B(e.nodes) : B;
    R = Array.isArray(R) ? R : [R];
    const U = Fu(R, u, e.hooks.error.trigger), G = [];
    for (const H of U)
      G.push(Cu(H));
    G.length && e.hooks.nodesChange.trigger(G);
  }, E = (B) => {
    let R = B instanceof Function ? B(e.edges) : B;
    R = Array.isArray(R) ? R : [R];
    const U = fs(
      R,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), G = [];
    for (const H of U)
      G.push(Cu(H));
    G.length && e.hooks.edgesChange.trigger(G);
  }, L = (B, R = !0, U = !1) => {
    const G = B instanceof Function ? B(e.nodes) : B, H = Array.isArray(G) ? G : [G], se = [], ie = [];
    function he(we) {
      const Ce = l(we);
      for (const Be of Ce)
        (!et(Be.deletable) || Be.deletable) && ie.push(Tu(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function me(we) {
      const Ce = [];
      for (const Be of e.nodes)
        Be.parentNode === we && Ce.push(Be);
      if (Ce.length) {
        for (const Be of Ce)
          se.push(Au(Be.id));
        R && he(Ce);
        for (const Be of Ce)
          me(Be.id);
      }
    }
    for (const we of H) {
      const Ce = typeof we == "string" ? u(we) : we;
      Ce && (et(Ce.deletable) && !Ce.deletable || (se.push(Au(Ce.id)), R && he([Ce]), U && me(Ce.id)));
    }
    ie.length && e.hooks.edgesChange.trigger(ie), se.length && e.hooks.nodesChange.trigger(se);
  }, A = (B) => {
    const R = B instanceof Function ? B(e.edges) : B, U = Array.isArray(R) ? R : [R], G = [];
    for (const H of U) {
      const se = typeof H == "string" ? c(H) : H;
      se && (et(se.deletable) && !se.deletable || G.push(
        Tu(
          typeof H == "string" ? H : H.id,
          se.source,
          se.target,
          se.sourceHandle,
          se.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(G);
  }, I = (B, R, U = !0) => {
    const G = c(B.id);
    if (!G)
      return !1;
    const H = e.edges.indexOf(G), se = Tb(B, R, G, U, e.hooks.error.trigger);
    if (se) {
      const [ie] = fs(
        [se],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((he, me) => me === H ? ie : he), cs(e.connectionLookup, n.value, [ie]), ie;
    }
    return !1;
  }, x = (B, R, U = { replace: !1 }) => {
    const G = c(B);
    if (!G)
      return;
    const H = typeof R == "function" ? R(G) : R;
    G.data = U.replace ? H : { ...G.data, ...H };
  }, M = (B) => Pu(B, e.nodes), O = (B) => {
    const R = Pu(B, e.edges);
    return cs(e.connectionLookup, n.value, R), R;
  }, Q = (B, R, U = { replace: !1 }) => {
    const G = u(B);
    if (!G)
      return;
    const H = typeof R == "function" ? R(G) : R;
    U.replace ? e.nodes.splice(e.nodes.indexOf(G), 1, H) : Object.assign(G, H);
  }, fe = (B, R, U = { replace: !1 }) => {
    const G = u(B);
    if (!G)
      return;
    const H = typeof R == "function" ? R(G) : R;
    G.data = U.replace ? H : { ...G.data, ...H };
  }, xe = (B, R, U = !1) => {
    U ? e.connectionClickStartHandle = B : e.connectionStartHandle = B, e.connectionEndHandle = null, e.connectionStatus = null, R && (e.connectionPosition = R);
  }, ke = (B, R = null, U = null) => {
    e.connectionStartHandle && (e.connectionPosition = B, e.connectionEndHandle = R, e.connectionStatus = U);
  }, ae = (B, R) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, R ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, le = (B) => {
    const R = ab(B), U = R ? null : Nr(B) ? B : u(B.id);
    return !R && !U ? [null, null, R] : [R ? B : ia(U), U, R];
  }, ge = (B, R = !0, U = e.nodes) => {
    const [G, H, se] = le(B);
    if (!G)
      return [];
    const ie = [];
    for (const he of U || e.nodes) {
      if (!se && (he.id === H.id || !he.computedPosition))
        continue;
      const me = ia(he), we = la(me, G);
      (R && we > 0 || we >= me.width * me.height || we >= Number(G.width) * Number(G.height)) && ie.push(he);
    }
    return ie;
  }, Te = (B, R, U = !0) => {
    const [G] = le(B);
    if (!G)
      return !1;
    const H = la(G, R);
    return U && H > 0 || H >= Number(G.width) * Number(G.height);
  }, ze = (B) => {
    const { viewport: R, dimensions: U, d3Zoom: G, d3Selection: H, translateExtent: se } = e;
    if (!G || !H || !B.x && !B.y)
      return !1;
    const ie = cr.translate(R.x + B.x, R.y + B.y).scale(R.zoom), he = [
      [0, 0],
      [U.width, U.height]
    ], me = G.constrain()(ie, he, se), we = e.viewport.x !== me.x || e.viewport.y !== me.y || e.viewport.zoom !== me.k;
    return G.transform(H, me), we;
  }, de = (B) => {
    const R = B instanceof Function ? B(e) : B, U = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(R.defaultEdgeOptions) && (e.defaultEdgeOptions = R.defaultEdgeOptions);
    const G = R.modelValue || R.nodes || R.edges ? [] : void 0;
    G && (R.modelValue && G.push(...R.modelValue), R.nodes && G.push(...R.nodes), R.edges && G.push(...R.edges), C(G));
    const H = () => {
      et(R.maxZoom) && P(R.maxZoom), et(R.minZoom) && T(R.minZoom), et(R.translateExtent) && _(R.translateExtent);
    };
    for (const se of Object.keys(R)) {
      const ie = se, he = R[ie];
      ![...Wb, ...U].includes(ie) && et(he) && (e[ie] = he);
    }
    Si(() => e.d3Zoom).not.toBeNull().then(H), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: C,
    setNodes: D,
    setEdges: F,
    addNodes: j,
    addEdges: E,
    removeNodes: L,
    removeEdges: A,
    findNode: u,
    findEdge: c,
    updateEdge: I,
    updateEdgeData: x,
    updateNode: Q,
    updateNodeData: fe,
    applyEdgeChanges: O,
    applyNodeChanges: M,
    addSelectedElements: h,
    addSelectedNodes: m,
    addSelectedEdges: p,
    setMinZoom: T,
    setMaxZoom: P,
    setTranslateExtent: _,
    setNodeExtent: g,
    setPaneClickDistance: k,
    removeSelectedElements: w,
    removeSelectedNodes: b,
    removeSelectedEdges: z,
    startConnection: xe,
    updateConnection: ke,
    endConnection: ae,
    setInteractive: V,
    setState: de,
    getIntersectingNodes: ge,
    getIncomers: a,
    getOutgoers: s,
    getConnectedEdges: l,
    getHandleConnections: d,
    isNodeIntersecting: Te,
    panBy: ze,
    fitView: (B) => r.value.fitView(B),
    zoomIn: (B) => r.value.zoomIn(B),
    zoomOut: (B) => r.value.zoomOut(B),
    zoomTo: (B, R) => r.value.zoomTo(B, R),
    setViewport: (B, R) => r.value.setViewport(B, R),
    setTransform: (B, R) => r.value.setTransform(B, R),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (B, R, U) => r.value.setCenter(B, R, U),
    fitBounds: (B, R) => r.value.fitBounds(B, R),
    project: (B) => r.value.project(B),
    screenToFlowCoordinate: (B) => r.value.screenToFlowCoordinate(B),
    flowToScreenCoordinate: (B) => r.value.flowToScreenCoordinate(B),
    toObject: () => {
      const B = [], R = [];
      for (const U of e.nodes) {
        const {
          computedPosition: G,
          handleBounds: H,
          selected: se,
          dimensions: ie,
          isParent: he,
          resizing: me,
          dragging: we,
          events: Ce,
          ...Be
        } = U;
        B.push(Be);
      }
      for (const U of e.edges) {
        const { selected: G, sourceNode: H, targetNode: se, events: ie, ...he } = U;
        R.push(he);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: B,
          edges: R,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (B) => new Promise((R) => {
      const { nodes: U, edges: G, position: H, zoom: se, viewport: ie } = B;
      U && D(U), G && F(G);
      const [he, me] = ie?.x && ie?.y ? [ie.x, ie.y] : H ?? [null, null];
      if (he && me) {
        const we = ie?.zoom || se || e.viewport.zoom;
        return Si(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: he,
            y: me,
            zoom: we
          }).then(() => {
            R(!0);
          });
        });
      } else
        R(!0);
    }),
    updateNodeInternals: o,
    viewportHelper: r,
    $reset: () => {
      const B = fp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const R = cr.translate(B.defaultViewport.x ?? 0, B.defaultViewport.y ?? 0).scale(Gn(B.defaultViewport.zoom ?? 1, B.minZoom, B.maxZoom)), U = e.viewportRef.getBoundingClientRect(), G = [
          [0, 0],
          [U.width, U.height]
        ], H = e.d3Zoom.constrain()(R, G, B.translateExtent);
        e.d3Zoom.transform(e.d3Selection, H);
      }
      de(B);
    },
    $destroy: () => {
    }
  };
}
const Yb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Kb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, ut = /* @__PURE__ */ Fe({
  ...Kb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => ce.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = ph(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = Ve(() => n.type ?? "source"), o = Ve(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: s,
      connectionClickStartHandle: l,
      connectionEndHandle: d,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: v
    } = je(), { id: y, node: m, nodeEl: p, connectedEdges: h } = dp(), b = W(), z = Ve(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), w = Ve(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), T = Ve(
      () => {
        var F, C, j, E, L, A;
        return ((F = s.value) == null ? void 0 : F.nodeId) === y && ((C = s.value) == null ? void 0 : C.id) === e.id && ((j = s.value) == null ? void 0 : j.type) === r.value || ((E = d.value) == null ? void 0 : E.nodeId) === y && ((L = d.value) == null ? void 0 : L.id) === e.id && ((A = d.value) == null ? void 0 : A.type) === r.value;
      }
    ), P = Ve(
      () => {
        var F, C, j;
        return ((F = l.value) == null ? void 0 : F.nodeId) === y && ((C = l.value) == null ? void 0 : C.id) === e.id && ((j = l.value) == null ? void 0 : j.type) === r.value;
      }
    ), { handlePointerDown: _, handleClick: g } = up({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), k = ee(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((F) => {
      const C = F[`${r.value}Handle`];
      return F[r.value] !== y ? !1 : C ? C === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((F) => {
      const C = F[`${r.value}Handle`];
      return F[r.value] !== y ? !1 : C ? C === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(m, h.value) : et(e.connectable) ? e.connectable : c.value);
    Ke(() => {
      var F;
      if (!m.dimensions.width || !m.dimensions.height)
        return;
      const C = (F = m.handleBounds[r.value]) == null ? void 0 : F.find((M) => M.id === e.id);
      if (!u.value || C)
        return;
      const j = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !b.value || !j || !e.id)
        return;
      const E = p.value.getBoundingClientRect(), L = b.value.getBoundingClientRect(), A = window.getComputedStyle(j), { m22: I } = new window.DOMMatrixReadOnly(A.transform), x = {
        id: e.id,
        position: e.position,
        x: (L.left - E.left) / I,
        y: (L.top - E.top) / I,
        type: r.value,
        nodeId: y,
        ...Pa(b.value)
      };
      m.handleBounds[r.value] = [...m.handleBounds[r.value] ?? [], x];
    });
    function V(F) {
      const C = hl(F);
      k.value && z.value && (C && F.button === 0 || !C) && _(F);
    }
    function D(F) {
      !y || !l.value && !z.value || k.value && g(F);
    }
    return t({
      handleClick: g,
      handlePointerDown: _,
      onClick: D,
      onPointerDown: V
    }), (F, C) => (S(), $("div", {
      ref_key: "handle",
      ref: b,
      "data-id": `${N(a)}-${N(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": N(y),
      "data-handlepos": F.position,
      class: X(["vue-flow__handle", [
        `vue-flow__handle-${F.position}`,
        `vue-flow__handle-${e.id}`,
        N(f),
        N(v),
        r.value,
        {
          connectable: k.value,
          connecting: P.value,
          connectablestart: z.value,
          connectableend: w.value,
          connectionindicator: k.value && (z.value && !T.value || w.value && T.value)
        }
      ]]),
      onMousedown: V,
      onTouchstartPassive: V,
      onClick: D
    }, [
      Ye(F.$slots, "default", { id: F.id })
    ], 42, Yb));
  }
}), Ta = function({
  sourcePosition: e = ce.Bottom,
  targetPosition: t = ce.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: a,
  data: s
}) {
  const l = s.label ?? n;
  return [
    Ae(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? Ae(l) : Ae(te, [l]),
    Ae(ut, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Ta.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ta.inheritAttrs = !1;
Ta.compatConfig = { MODE: 3 };
const Zb = Ta, Oa = function({
  targetPosition: e = ce.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    Ae(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? Ae(a) : Ae(te, [a])
  ];
};
Oa.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Oa.inheritAttrs = !1;
Oa.compatConfig = { MODE: 3 };
const Jb = Oa, Na = function({
  sourcePosition: e = ce.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? Ae(a) : Ae(te, [a]),
    Ae(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Na.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Na.inheritAttrs = !1;
Na.compatConfig = { MODE: 3 };
const Qb = Na, ex = ["transform"], tx = ["width", "height", "x", "y", "rx", "ry"], nx = ["y"], rx = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, ox = /* @__PURE__ */ Fe({
  ...rx,
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
    const t = W({ x: 0, y: 0, width: 0, height: 0 }), n = W(null), r = ee(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ke(o), Me([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const a = n.value.getBBox();
      (a.width !== t.value.width || a.height !== t.value.height) && (t.value = a);
    }
    return (a, s) => (S(), $("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      a.labelShowBg ? (S(), $("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * a.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * a.labelBgPadding[1]}px`,
        x: -a.labelBgPadding[0],
        y: -a.labelBgPadding[1],
        style: vt(a.labelBgStyle),
        rx: a.labelBgBorderRadius,
        ry: a.labelBgBorderRadius
      }, null, 12, tx)) : oe("", !0),
      i("text", _a(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Ye(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (S(), Pe(Rt(a.label), { key: 0 })) : (S(), $(te, { key: 1 }, [
            ne(q(a.label), 1)
          ], 64))
        ])
      ], 16, nx)
    ], 8, ex));
  }
}), ax = ["id", "d", "marker-end", "marker-start"], sx = ["d", "stroke-width"], ix = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, lo = /* @__PURE__ */ Fe({
  ...ix,
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
    const n = W(null), r = W(null), o = W(null), a = vh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (s, l) => (S(), $(te, null, [
      i("path", _a(N(a), {
        id: s.id,
        ref_key: "pathEl",
        ref: n,
        d: s.path,
        class: "vue-flow__edge-path",
        "marker-end": s.markerEnd,
        "marker-start": s.markerStart
      }), null, 16, ax),
      s.interactionWidth ? (S(), $("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: s.path,
        "stroke-width": s.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, sx)) : oe("", !0),
      s.label && s.labelX && s.labelY ? (S(), Pe(ox, {
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
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : oe("", !0)
    ], 64));
  }
});
function pp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [a, l, o, s];
}
function hp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: a,
  targetControlX: s,
  targetControlY: l
}) {
  const d = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + l * 0.375 + r * 0.125, c = Math.abs(d - e), f = Math.abs(u - t);
  return [d, u, c, f];
}
function $o(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function qu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let s, l;
  switch (e) {
    case ce.Left:
      s = t - $o(t - r, a), l = n;
      break;
    case ce.Right:
      s = t + $o(r - t, a), l = n;
      break;
    case ce.Top:
      s = t, l = n - $o(n - o, a);
      break;
    case ce.Bottom:
      s = t, l = n + $o(o - n, a);
      break;
  }
  return [s, l];
}
function ml(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ce.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ce.Top,
    curvature: l = 0.25
  } = e, [d, u] = qu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [c, f] = qu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [v, y, m, p] = hp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: a,
    sourceControlX: d,
    sourceControlY: u,
    targetControlX: c,
    targetControlY: f
  });
  return [
    `M${t},${n} C${d},${u} ${c},${f} ${o},${a}`,
    v,
    y,
    m,
    p
  ];
}
function Vu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let a, s;
  switch (e) {
    case ce.Left:
    case ce.Right:
      a = 0.5 * (t + r), s = n;
      break;
    case ce.Top:
    case ce.Bottom:
      a = t, s = 0.5 * (n + o);
      break;
  }
  return [a, s];
}
function mp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ce.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ce.Top
  } = e, [l, d] = Vu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, c] = Vu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, v, y, m] = hp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: a,
    sourceControlX: l,
    sourceControlY: d,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${t},${n} C${l},${d} ${u},${c} ${o},${a}`,
    f,
    v,
    y,
    m
  ];
}
const ju = {
  [ce.Left]: { x: -1, y: 0 },
  [ce.Right]: { x: 1, y: 0 },
  [ce.Top]: { x: 0, y: -1 },
  [ce.Bottom]: { x: 0, y: 1 }
};
function lx({
  source: e,
  sourcePosition: t = ce.Bottom,
  target: n
}) {
  return t === ce.Left || t === ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Hu(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function ux({
  source: e,
  sourcePosition: t = ce.Bottom,
  target: n,
  targetPosition: r = ce.Top,
  center: o,
  offset: a
}) {
  const s = ju[t], l = ju[r], d = { x: e.x + s.x * a, y: e.y + s.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, c = lx({
    source: d,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", v = c[f];
  let y, m, p;
  const h = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [z, w, T, P] = pp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * l[f] === -1) {
    m = o.x ?? z, p = o.y ?? w;
    const g = [
      { x: m, y: d.y },
      { x: m, y: u.y }
    ], k = [
      { x: d.x, y: p },
      { x: u.x, y: p }
    ];
    s[f] === v ? y = f === "x" ? g : k : y = f === "x" ? k : g;
  } else {
    const g = [{ x: d.x, y: u.y }], k = [{ x: u.x, y: d.y }];
    if (f === "x" ? y = s.x === v ? k : g : y = s.y === v ? g : k, t === r) {
      const j = Math.abs(e[f] - n[f]);
      if (j <= a) {
        const E = Math.min(a - 1, a - j);
        s[f] === v ? h[f] = (d[f] > e[f] ? -1 : 1) * E : b[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const j = f === "x" ? "y" : "x", E = s[f] === l[j], L = d[j] > u[j], A = d[j] < u[j];
      (s[f] === 1 && (!E && L || E && A) || s[f] !== 1 && (!E && A || E && L)) && (y = f === "x" ? g : k);
    }
    const V = { x: d.x + h.x, y: d.y + h.y }, D = { x: u.x + b.x, y: u.y + b.y }, F = Math.max(Math.abs(V.x - y[0].x), Math.abs(D.x - y[0].x)), C = Math.max(Math.abs(V.y - y[0].y), Math.abs(D.y - y[0].y));
    F >= C ? (m = (V.x + D.x) / 2, p = y[0].y) : (m = y[0].x, p = (V.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + h.x, y: d.y + h.y },
    ...y,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], m, p, T, P];
}
function dx(e, t, n, r) {
  const o = Math.min(Hu(e, t) / 2, Hu(t, n) / 2, r), { x: a, y: s } = t;
  if (e.x === a && a === n.x || e.y === s && s === n.y)
    return `L${a} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${s}Q ${a},${s} ${a},${s + o * c}`;
  }
  const l = e.x < n.x ? 1 : -1, d = e.y < n.y ? -1 : 1;
  return `L ${a},${s + o * d}Q ${a},${s} ${a + o * l},${s}`;
}
function Ii(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ce.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ce.Top,
    borderRadius: l = 5,
    centerX: d,
    centerY: u,
    offset: c = 20
  } = e, [f, v, y, m, p] = ux({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: s,
    center: { x: d, y: u },
    offset: c
  });
  return [f.reduce((b, z, w) => {
    let T;
    return w > 0 && w < f.length - 1 ? T = dx(f[w - 1], z, f[w + 1], l) : T = `${w === 0 ? "M" : "L"}${z.x} ${z.y}`, b += T, b;
  }, ""), v, y, m, p];
}
function cx(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [a, s, l, d] = pp({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, a, s, l, d];
}
const fx = Fe({
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
      const [n, r, o] = cx(e);
      return Ae(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), px = fx, hx = Fe({
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
        sourcePosition: e.sourcePosition ?? ce.Bottom,
        targetPosition: e.targetPosition ?? ce.Top
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
}), vp = hx, mx = Fe({
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
    return () => Ae(vp, { ...e, ...t, borderRadius: 0 });
  }
}), vx = mx, gx = Fe({
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
        sourcePosition: e.sourcePosition ?? ce.Bottom,
        targetPosition: e.targetPosition ?? ce.Top
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
}), yx = gx, bx = Fe({
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
      const [n, r, o] = mp({
        ...e,
        sourcePosition: e.sourcePosition ?? ce.Bottom,
        targetPosition: e.targetPosition ?? ce.Top
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
}), xx = bx, wx = {
  input: Qb,
  default: Zb,
  output: Jb
}, _x = {
  default: yx,
  straight: px,
  step: vx,
  smoothstep: vp,
  simplebezier: xx
};
function kx(e, t, n) {
  const r = ee(() => (p) => t.value.get(p)), o = ee(() => (p) => n.value.get(p)), a = ee(() => {
    const p = {
      ..._x,
      ...e.edgeTypes
    }, h = Object.keys(p);
    for (const b of e.edges)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), s = ee(() => {
    const p = {
      ...wx,
      ...e.nodeTypes
    }, h = Object.keys(p);
    for (const b of e.nodes)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), l = ee(() => e.onlyRenderVisibleElements ? Jf(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), d = ee(() => {
    if (e.onlyRenderVisibleElements) {
      const p = [];
      for (const h of e.edges) {
        const b = t.value.get(h.source), z = t.value.get(h.target);
        bb({
          sourcePos: b.computedPosition || { x: 0, y: 0 },
          targetPos: z.computedPosition || { x: 0, y: 0 },
          sourceWidth: b.dimensions.width,
          sourceHeight: b.dimensions.height,
          targetWidth: z.dimensions.width,
          targetHeight: z.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && p.push(h);
      }
      return p;
    }
    return e.edges;
  }), u = ee(() => [...l.value, ...d.value]), c = ee(() => {
    const p = [];
    for (const h of e.nodes)
      h.selected && p.push(h);
    return p;
  }), f = ee(() => {
    const p = [];
    for (const h of e.edges)
      h.selected && p.push(h);
    return p;
  }), v = ee(() => [
    ...c.value,
    ...f.value
  ]), y = ee(() => {
    const p = [];
    for (const h of e.nodes)
      h.dimensions.width && h.dimensions.height && h.handleBounds !== void 0 && p.push(h);
    return p;
  }), m = ee(
    () => l.value.length > 0 && y.value.length === l.value.length
  );
  return {
    getNode: r,
    getEdge: o,
    getElements: u,
    getEdgeTypes: a,
    getNodeTypes: s,
    getEdges: d,
    getNodes: l,
    getSelectedElements: v,
    getSelectedNodes: c,
    getSelectedEdges: f,
    getNodesInitialized: y,
    areNodesInitialized: m
  };
}
class Nn {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = yr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? Nn.instance;
    return Nn.instance = r ?? new Nn(), n && (n.config.globalProperties.$vueFlowStorage = Nn.instance), Nn.instance;
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
    const r = fp(), o = _n(r), a = {};
    for (const [v, y] of Object.entries(o.hooks)) {
      const m = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      a[m] = y.on;
    }
    const s = {};
    for (const [v, y] of Object.entries(o.hooks))
      s[v] = y.trigger;
    const l = ee(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.nodes)
        v.set(y.id, y);
      return v;
    }), d = ee(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.edges)
        v.set(y.id, y);
      return v;
    }), u = kx(o, l, d), c = Xb(o, l, d);
    c.setState({ ...o, ...n });
    const f = {
      ...a,
      ...u,
      ...c,
      ...hm(o),
      nodeLookup: l,
      edgeLookup: d,
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
  const t = Nn.getInstance(), n = Wc(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, s = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const d = gr(Uu, null);
    typeof d < "u" && d !== null && (!s || d.id === s) && (l = d);
  }
  if (l || s && (l = t.get(s)), !l || s && l.id !== s) {
    const d = a ?? t.getId(), u = t.create(d, o);
    l = u, (n ?? Xc(!0)).run(() => {
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
  if (n && (qn(Uu, l), n.vueFlowId = l.id), r) {
    const d = yr();
    d?.type.name !== "VueFlow" && l.emits.error(new at(nt.USEVUEFLOW_OPTIONS));
  }
  return l;
}
function Sx(e) {
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
const Ex = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, zx = /* @__PURE__ */ Fe({
  ...Ex,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (S(), $("div", {
      class: "vue-flow__selection vue-flow__container",
      style: vt({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), $x = ["tabIndex"], Px = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Cx = /* @__PURE__ */ Fe({
  ...Px,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: s } = je(), l = cp(), d = W(null), u = lp({
      el: d,
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
      a.value || (m = d.value) == null || m.focus({ preventScroll: !0 });
    });
    const c = ee(() => Zf(r.value)), f = ee(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
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
    return (m, p) => !N(s) && c.value.width && c.value.height ? (S(), $("div", {
      key: 0,
      class: X(["vue-flow__nodesselection vue-flow__container", N(o)]),
      style: vt({ transform: `translate(${N(n).x}px,${N(n).y}px) scale(${N(n).zoom})` })
    }, [
      i("div", {
        ref_key: "el",
        ref: d,
        class: X([{ dragging: N(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: N(a) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: y
      }, null, 46, $x)
    ], 6)) : oe("", !0);
  }
});
function Ax(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const Tx = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, Ox = /* @__PURE__ */ Fe({
  ...Tx,
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
      elementsSelectable: d,
      nodesSelectionActive: u,
      getSelectedEdges: c,
      getSelectedNodes: f,
      removeNodes: v,
      removeEdges: y,
      selectionMode: m,
      deleteKeyCode: p,
      multiSelectionKeyCode: h,
      multiSelectionActive: b,
      edgeLookup: z,
      nodeLookup: w,
      connectionLookup: T,
      defaultEdgeOptions: P,
      connectionStartHandle: _,
      panOnDrag: g
    } = je(), k = an(null), V = an(/* @__PURE__ */ new Set()), D = an(/* @__PURE__ */ new Set()), F = an(null), C = Ve(() => d.value && (e.isSelecting || a.value)), j = Ve(() => _.value !== null);
    let E = !1, L = !1;
    const A = Fr(p, { actInsideInputWithModifier: !1 }), I = Fr(h);
    Me(A, (ae) => {
      ae && (v(f.value), y(c.value), u.value = !1);
    }), Me(I, (ae) => {
      b.value = ae;
    });
    function x(ae, le) {
      return (ge) => {
        ge.target === le && ae?.(ge);
      };
    }
    function M(ae) {
      if (E || j.value) {
        E = !1;
        return;
      }
      o.paneClick(ae), s(), u.value = !1;
    }
    function O(ae) {
      var le;
      if (Array.isArray(g.value) && ((le = g.value) != null && le.includes(2))) {
        ae.preventDefault();
        return;
      }
      o.paneContextMenu(ae);
    }
    function Q(ae) {
      o.paneScroll(ae);
    }
    function fe(ae) {
      var le, ge, Te;
      if (F.value = ((le = t.value) == null ? void 0 : le.getBoundingClientRect()) ?? null, !d.value || !e.isSelecting || ae.button !== 0 || ae.target !== k.value || !F.value)
        return;
      (Te = (ge = ae.target) == null ? void 0 : ge.setPointerCapture) == null || Te.call(ge, ae.pointerId);
      const { x: ze, y: de } = Ax(ae, F.value);
      L = !0, E = !1, s(), l.value = {
        width: 0,
        height: 0,
        startX: ze,
        startY: de,
        x: ze,
        y: de
      }, o.selectionStart(ae);
    }
    function xe(ae) {
      var le;
      if (!F.value || !l.value)
        return;
      E = !0;
      const { x: ge, y: Te } = Xt(ae, F.value), { startX: ze = 0, startY: de = 0 } = l.value, _e = {
        startX: ze,
        startY: de,
        x: ge < ze ? ge : ze,
        y: Te < de ? Te : de,
        width: Math.abs(ge - ze),
        height: Math.abs(Te - de)
      }, ue = V.value, ye = D.value;
      V.value = new Set(
        Jf(n.value, _e, r.value, m.value === fl.Partial, !0).map(
          (R) => R.id
        )
      ), D.value = /* @__PURE__ */ new Set();
      const B = ((le = P.value) == null ? void 0 : le.selectable) ?? !0;
      for (const R of V.value) {
        const U = T.value.get(R);
        if (U)
          for (const { edgeId: G } of U.values()) {
            const H = z.value.get(G);
            H && (H.selectable ?? B) && D.value.add(G);
          }
      }
      if (!Lu(ue, V.value)) {
        const R = bn(w.value, V.value, !0);
        o.nodesChange(R);
      }
      if (!Lu(ye, D.value)) {
        const R = bn(z.value, D.value);
        o.edgesChange(R);
      }
      l.value = _e, a.value = !0, u.value = !1;
    }
    function ke(ae) {
      var le;
      ae.button !== 0 || !L || ((le = ae.target) == null || le.releasePointerCapture(ae.pointerId), !a.value && l.value && ae.target === k.value && M(ae), a.value = !1, l.value = null, u.value = V.value.size > 0, o.selectionEnd(ae), e.selectionKeyPressed && (E = !1), L = !1);
    }
    return (ae, le) => (S(), $("div", {
      ref_key: "container",
      ref: k,
      class: X(["vue-flow__pane vue-flow__container", { selection: ae.isSelecting }]),
      onClick: le[0] || (le[0] = (ge) => C.value ? void 0 : x(M, k.value)(ge)),
      onContextmenu: le[1] || (le[1] = (ge) => x(O, k.value)(ge)),
      onWheelPassive: le[2] || (le[2] = (ge) => x(Q, k.value)(ge)),
      onPointerenter: le[3] || (le[3] = (ge) => C.value ? void 0 : N(o).paneMouseEnter(ge)),
      onPointerdown: le[4] || (le[4] = (ge) => C.value ? fe(ge) : N(o).paneMouseMove(ge)),
      onPointermove: le[5] || (le[5] = (ge) => C.value ? xe(ge) : N(o).paneMouseMove(ge)),
      onPointerup: le[6] || (le[6] = (ge) => C.value ? ke(ge) : void 0),
      onPointerleave: le[7] || (le[7] = (ge) => N(o).paneMouseLeave(ge))
    }, [
      Ye(ae.$slots, "default"),
      N(a) && N(l) ? (S(), Pe(zx, {
        key: 0,
        "user-selection-rect": N(l)
      }, null, 8, ["user-selection-rect"])) : oe("", !0),
      N(u) && N(f).length ? (S(), Pe(Cx, { key: 1 })) : oe("", !0)
    ], 34));
  }
}), Nx = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Rx = /* @__PURE__ */ Fe({
  ...Nx,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = je(), o = ee(() => n.value ? !r.value : !1), a = ee(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (s, l) => (S(), $("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: vt({ transform: a.value, opacity: o.value ? 0 : void 0 })
    }, [
      Ye(s.$slots, "default")
    ], 4));
  }
}), Mx = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Ix = /* @__PURE__ */ Fe({
  ...Mx,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: r,
      translateExtent: o,
      zoomActivationKeyCode: a,
      selectionKeyCode: s,
      panActivationKeyCode: l,
      panOnScroll: d,
      panOnScrollMode: u,
      panOnScrollSpeed: c,
      panOnDrag: f,
      zoomOnDoubleClick: v,
      zoomOnPinch: y,
      zoomOnScroll: m,
      preventScrolling: p,
      noWheelClassName: h,
      noPanClassName: b,
      emits: z,
      connectionStartHandle: w,
      userSelectionActive: T,
      paneDragging: P,
      d3Zoom: _,
      d3Selection: g,
      d3ZoomHandler: k,
      viewport: V,
      viewportRef: D,
      paneClickDistance: F
    } = je();
    Sx(D);
    const C = an(!1), j = an(!1);
    let E = null, L = !1, A = 0, I = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = Fr(l), M = Fr(s), O = Fr(a), Q = Ve(
      () => (!M.value || M.value && s.value === !0) && (x.value || f.value)
    ), fe = Ve(() => x.value || d.value), xe = Ve(() => s.value === !0 && Q.value !== !0), ke = Ve(
      () => M.value && s.value !== !0 || T.value || xe.value
    ), ae = Ve(() => w.value !== null);
    Ke(() => {
      if (!D.value) {
        io("Viewport element is missing");
        return;
      }
      const de = D.value, _e = de.getBoundingClientRect(), ue = Jy().clickDistance(F.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ye = Mt(de).call(ue), B = ye.on("wheel.zoom"), R = cr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(Gn(r.value.zoom ?? 1, t.value, n.value)), U = [
        [0, 0],
        [_e.width, _e.height]
      ], G = ue.constrain()(R, U, o.value);
      ue.transform(ye, G), ue.wheelDelta(zu), _.value = ue, g.value = ye, k.value = B, V.value = { x: G.x, y: G.y, zoom: G.k }, ue.on("start", (H) => {
        var se;
        if (!H.sourceEvent)
          return null;
        A = H.sourceEvent.button, C.value = !0;
        const ie = Te(H.transform);
        ((se = H.sourceEvent) == null ? void 0 : se.type) === "mousedown" && (P.value = !0), I = ie, z.viewportChangeStart(ie), z.moveStart({ event: H, flowTransform: ie });
      }), ue.on("end", (H) => {
        if (!H.sourceEvent)
          return null;
        if (C.value = !1, P.value = !1, le(Q.value, A ?? 0) && !L && z.paneContextMenu(H.sourceEvent), L = !1, ge(I, H.transform)) {
          const se = Te(H.transform);
          I = se, z.viewportChangeEnd(se), z.moveEnd({ event: H, flowTransform: se });
        }
      }), ue.filter((H) => {
        var se;
        const ie = O.value || m.value, he = y.value && H.ctrlKey, me = H.button, we = H.type === "wheel";
        if (me === 1 && H.type === "mousedown" && (ze(H, "vue-flow__node") || ze(H, "vue-flow__edge")))
          return !0;
        if (!Q.value && !ie && !fe.value && !v.value && !y.value || T.value || ae.value && !we || !v.value && H.type === "dblclick" || ze(H, h.value) && we || ze(H, b.value) && (!we || fe.value && we && !O.value) || !y.value && H.ctrlKey && we || !ie && !fe.value && !he && we)
          return !1;
        if (!y && H.type === "touchstart" && ((se = H.touches) == null ? void 0 : se.length) > 1)
          return H.preventDefault(), !1;
        if (!Q.value && (H.type === "mousedown" || H.type === "touchstart") || xe.value && Array.isArray(f.value) && f.value.includes(0) && me === 0 || Array.isArray(f.value) && !f.value.includes(me) && (H.type === "mousedown" || H.type === "touchstart"))
          return !1;
        const Ce = Array.isArray(f.value) && f.value.includes(me) || s.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !me || me <= 1;
        return (!H.ctrlKey || x.value || we) && Ce;
      }), Me(
        [T, Q],
        () => {
          T.value && !C.value ? ue.on("zoom", null) : T.value || ue.on("zoom", (H) => {
            V.value = { x: H.transform.x, y: H.transform.y, zoom: H.transform.k };
            const se = Te(H.transform);
            L = le(Q.value, A ?? 0), z.viewportChange(se), z.move({ event: H, flowTransform: se });
          });
        },
        { immediate: !0 }
      ), Me(
        [T, fe, u, O, y, p, h],
        () => {
          fe.value && !O.value && !T.value ? ye.on(
            "wheel.zoom",
            (H) => {
              if (ze(H, h.value))
                return !1;
              const se = O.value || m.value, ie = y.value && H.ctrlKey;
              if (!(!p.value || fe.value || se || ie))
                return !1;
              H.preventDefault(), H.stopImmediatePropagation();
              const me = ye.property("__zoom").k || 1, we = ua();
              if (!x.value && H.ctrlKey && y.value && we) {
                const Xa = Gt(H), Pn = zu(H), wr = me * 2 ** Pn;
                ue.scaleTo(ye, wr, Xa, H);
                return;
              }
              const Ce = H.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Dr.Vertical ? 0 : H.deltaX * Ce, qt = u.value === Dr.Horizontal ? 0 : H.deltaY * Ce;
              !we && H.shiftKey && u.value !== Dr.Vertical && !Be && qt && (Be = qt, qt = 0), ue.translateBy(
                ye,
                -(Be / me) * c.value,
                -(qt / me) * c.value
              );
              const gt = Te(ye.property("__zoom"));
              E && clearTimeout(E), j.value ? (z.move({ event: H, flowTransform: gt }), z.viewportChange(gt), E = setTimeout(() => {
                z.moveEnd({ event: H, flowTransform: gt }), z.viewportChangeEnd(gt), j.value = !1;
              }, 150)) : (j.value = !0, z.moveStart({ event: H, flowTransform: gt }), z.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof B < "u" && ye.on(
            "wheel.zoom",
            function(H, se) {
              const ie = !p.value && H.type === "wheel" && !H.ctrlKey, he = O.value || m.value, me = y.value && H.ctrlKey;
              if (!he && !d.value && !me && H.type === "wheel" || ie || ze(H, h.value))
                return null;
              H.preventDefault(), B.call(this, H, se);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function le(de, _e) {
      return _e === 2 && Array.isArray(de) && de.includes(2);
    }
    function ge(de, _e) {
      return de.x !== _e.x && !Number.isNaN(_e.x) || de.y !== _e.y && !Number.isNaN(_e.y) || de.zoom !== _e.k && !Number.isNaN(_e.k);
    }
    function Te(de) {
      return {
        x: de.x,
        y: de.y,
        zoom: de.k
      };
    }
    function ze(de, _e) {
      return de.target.closest(`.${_e}`);
    }
    return (de, _e) => (S(), $("div", {
      ref_key: "viewportRef",
      ref: D,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      Y(Ox, {
        "is-selecting": ke.value,
        "selection-key-pressed": N(M),
        class: X({
          connecting: ae.value,
          dragging: N(P),
          draggable: N(f) === !0 || Array.isArray(N(f)) && N(f).includes(0)
        })
      }, {
        default: ot(() => [
          Y(Rx, null, {
            default: ot(() => [
              Ye(de.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Dx = ["id"], Fx = ["id"], Bx = ["id"], Lx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Ux = /* @__PURE__ */ Fe({
  ...Lx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = je();
    return (o, a) => (S(), $(te, null, [
      i("div", {
        id: `${N(Vf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + q(N(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Dx),
      i("div", {
        id: `${N(jf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Fx),
      N(n) ? oe("", !0) : (S(), $("div", {
        key: 0,
        id: `${N(ob)}-${N(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, q(N(r)), 9, Bx))
    ], 64));
  }
});
function qx() {
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
  return n === ce.Left ? e - t : n === ce.Right ? e + t : e;
}
function jx(e, t, n) {
  return n === ce.Top ? e - t : n === ce.Bottom ? e + t : e;
}
const vl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = ce.Top,
  type: o
}) {
  return Ae("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Vx(t, e, r),
    cy: jx(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
vl.props = ["radius", "centerX", "centerY", "position", "type"];
vl.compatConfig = { MODE: 3 };
const Gu = vl, Hx = Fe({
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
      getEdgeTypes: d,
      removeSelectedEdges: u,
      findEdge: c,
      findNode: f,
      isValidConnection: v,
      multiSelectionActive: y,
      disableKeyboardA11y: m,
      elementsSelectable: p,
      edgesUpdatable: h,
      edgesFocusable: b,
      hooks: z
    } = je(), w = ee(() => c(e.id)), { emit: T, on: P } = Mb(w.value, a), _ = gr(Aa), g = yr(), k = W(!1), V = W(!1), D = W(""), F = W(null), C = W("source"), j = W(null), E = Ve(
      () => typeof w.value.selectable > "u" ? p.value : w.value.selectable
    ), L = Ve(() => typeof w.value.updatable > "u" ? h.value : w.value.updatable), A = Ve(() => typeof w.value.focusable > "u" ? b.value : w.value.focusable);
    qn(Ob, e.id), qn(Nb, j);
    const I = ee(() => w.value.class instanceof Function ? w.value.class(w.value) : w.value.class), x = ee(() => w.value.style instanceof Function ? w.value.style(w.value) : w.value.style), M = ee(() => {
      const R = w.value.type || "default", U = _?.[`edge-${R}`];
      if (U)
        return U;
      let G = w.value.template ?? d.value[R];
      if (typeof G == "string" && g) {
        const H = Object.keys(g.appContext.components);
        H && H.includes(R) && (G = Kc(R, !1));
      }
      return G && typeof G != "string" ? G : (a.error(new at(nt.EDGE_TYPE_MISSING, G)), !1);
    }), { handlePointerDown: O } = up({
      nodeId: D,
      handleId: F,
      type: C,
      isValidConnection: v,
      edgeUpdaterType: C,
      onEdgeUpdate: xe,
      onEdgeUpdateEnd: ke
    });
    return () => {
      const R = f(w.value.source), U = f(w.value.target), G = "pathOptions" in w.value ? w.value.pathOptions : {};
      if (!R && !U)
        return a.error(new at(nt.EDGE_SOURCE_TARGET_MISSING, w.value.id, w.value.source, w.value.target)), null;
      if (!R)
        return a.error(new at(nt.EDGE_SOURCE_MISSING, w.value.id, w.value.source)), null;
      if (!U)
        return a.error(new at(nt.EDGE_TARGET_MISSING, w.value.id, w.value.target)), null;
      if (!w.value || w.value.hidden || R.hidden || U.hidden)
        return null;
      let H;
      r.value === Sn.Strict ? H = R.handleBounds.source : H = [...R.handleBounds.source || [], ...R.handleBounds.target || []];
      const se = Ru(H, w.value.sourceHandle);
      let ie;
      r.value === Sn.Strict ? ie = U.handleBounds.target : ie = [...U.handleBounds.target || [], ...U.handleBounds.source || []];
      const he = Ru(ie, w.value.targetHandle), me = se?.position || ce.Bottom, we = he?.position || ce.Top, { x: Ce, y: Be } = fr(R, se, me), { x: qt, y: gt } = fr(U, he, we);
      return w.value.sourceX = Ce, w.value.sourceY = Be, w.value.targetX = qt, w.value.targetY = gt, Ae(
        "g",
        {
          ref: j,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${M.value === !1 ? "default" : w.value.type || "default"}`,
            l.value,
            I.value,
            {
              updating: k.value,
              selected: w.value.selected,
              animated: w.value.animated,
              inactive: !E.value && !z.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: A.value ? 0 : void 0,
          "aria-label": w.value.ariaLabel === null ? void 0 : w.value.ariaLabel ?? `Edge from ${w.value.source} to ${w.value.target}`,
          "aria-describedby": A.value ? `${jf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: A.value ? "group" : "img",
          ...w.value.domAttributes,
          onClick: le,
          onContextmenu: ge,
          onDblclick: Te,
          onMouseenter: ze,
          onMousemove: de,
          onMouseleave: _e,
          onKeyDown: A.value ? B : void 0
        },
        [
          V.value ? null : Ae(M.value === !1 ? d.value.default : M.value, {
            id: e.id,
            sourceNode: R,
            targetNode: U,
            source: w.value.source,
            target: w.value.target,
            type: w.value.type,
            updatable: L.value,
            selected: w.value.selected,
            animated: w.value.animated,
            label: w.value.label,
            labelStyle: w.value.labelStyle,
            labelShowBg: w.value.labelShowBg,
            labelBgStyle: w.value.labelBgStyle,
            labelBgPadding: w.value.labelBgPadding,
            labelBgBorderRadius: w.value.labelBgBorderRadius,
            data: w.value.data,
            events: { ...w.value.events, ...P },
            style: x.value,
            markerStart: `url('#${Qr(w.value.markerStart, t)}')`,
            markerEnd: `url('#${Qr(w.value.markerEnd, t)}')`,
            sourcePosition: me,
            targetPosition: we,
            sourceX: Ce,
            sourceY: Be,
            targetX: qt,
            targetY: gt,
            sourceHandleId: w.value.sourceHandle,
            targetHandleId: w.value.targetHandle,
            interactionWidth: w.value.interactionWidth,
            ...G
          }),
          [
            L.value === "source" || L.value === !0 ? [
              Ae(
                "g",
                {
                  onMousedown: ue,
                  onMouseenter: Q,
                  onMouseout: fe
                },
                Ae(Gu, {
                  position: me,
                  centerX: Ce,
                  centerY: Be,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            L.value === "target" || L.value === !0 ? [
              Ae(
                "g",
                {
                  onMousedown: ye,
                  onMouseenter: Q,
                  onMouseout: fe
                },
                Ae(Gu, {
                  position: we,
                  centerX: qt,
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
    function Q() {
      k.value = !0;
    }
    function fe() {
      k.value = !1;
    }
    function xe(R, U) {
      T.update({ event: R, edge: w.value, connection: U });
    }
    function ke(R) {
      T.updateEnd({ event: R, edge: w.value }), V.value = !1;
    }
    function ae(R, U) {
      R.button === 0 && (V.value = !0, D.value = U ? w.value.target : w.value.source, F.value = (U ? w.value.targetHandle : w.value.sourceHandle) ?? null, C.value = U ? "target" : "source", T.updateStart({ event: R, edge: w.value }), O(R));
    }
    function le(R) {
      var U;
      const G = { event: R, edge: w.value };
      E.value && (s.value = !1, w.value.selected && y.value ? (u([w.value]), (U = j.value) == null || U.blur()) : n([w.value])), T.click(G);
    }
    function ge(R) {
      T.contextMenu({ event: R, edge: w.value });
    }
    function Te(R) {
      T.doubleClick({ event: R, edge: w.value });
    }
    function ze(R) {
      T.mouseEnter({ event: R, edge: w.value });
    }
    function de(R) {
      T.mouseMove({ event: R, edge: w.value });
    }
    function _e(R) {
      T.mouseLeave({ event: R, edge: w.value });
    }
    function ue(R) {
      ae(R, !0);
    }
    function ye(R) {
      ae(R, !1);
    }
    function B(R) {
      var U;
      !m.value && Hf.includes(R.key) && E.value && (R.key === "Escape" ? ((U = j.value) == null || U.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), Gx = Hx, Wx = Fe({
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
      connectionLineOptions: d,
      connectionStatus: u,
      viewport: c,
      findNode: f
    } = je(), v = (e = gr(Aa)) == null ? void 0 : e["connection-line"], y = ee(() => {
      var z;
      return f((z = r.value) == null ? void 0 : z.nodeId);
    }), m = ee(() => {
      var z;
      return f((z = o.value) == null ? void 0 : z.nodeId) ?? null;
    }), p = ee(() => ({
      x: (a.value.x - c.value.x) / c.value.zoom,
      y: (a.value.y - c.value.y) / c.value.zoom
    })), h = ee(
      () => d.value.markerStart ? `url(#${Qr(d.value.markerStart, t)})` : ""
    ), b = ee(
      () => d.value.markerEnd ? `url(#${Qr(d.value.markerEnd, t)})` : ""
    );
    return () => {
      var z, w, T;
      if (!y.value || !r.value)
        return null;
      const P = r.value.id, _ = r.value.type, g = y.value.handleBounds;
      let k = g?.[_] ?? [];
      if (n.value === Sn.Loose) {
        const x = g?.[_ === "source" ? "target" : "source"] ?? [];
        k = [...k, ...x];
      }
      if (!k)
        return null;
      const V = (P ? k.find((x) => x.id === P) : k[0]) ?? null, D = V?.position ?? ce.Top, { x: F, y: C } = fr(y.value, V, D);
      let j = null;
      m.value && (n.value === Sn.Strict ? j = ((z = m.value.handleBounds[_ === "source" ? "target" : "source"]) == null ? void 0 : z.find(
        (x) => {
          var M;
          return x.id === ((M = o.value) == null ? void 0 : M.id);
        }
      )) || null : j = ((w = [...m.value.handleBounds.source ?? [], ...m.value.handleBounds.target ?? []]) == null ? void 0 : w.find(
        (x) => {
          var M;
          return x.id === ((M = o.value) == null ? void 0 : M.id);
        }
      )) || null);
      const E = ((T = o.value) == null ? void 0 : T.position) ?? (D ? Ri[D] : null);
      if (!D || !E)
        return null;
      const L = s.value ?? d.value.type ?? On.Bezier;
      let A = "";
      const I = {
        sourceX: F,
        sourceY: C,
        sourcePosition: D,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: E
      };
      return L === On.Bezier ? [A] = ml(I) : L === On.Step ? [A] = Ii({
        ...I,
        borderRadius: 0
      }) : L === On.SmoothStep ? [A] = Ii(I) : L === On.SimpleBezier ? [A] = mp(I) : A = `M${F},${C} ${p.value.x},${p.value.y}`, Ae(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        Ae(
          "g",
          { class: "vue-flow__connection" },
          v ? Ae(v, {
            sourceX: F,
            sourceY: C,
            sourcePosition: D,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: E,
            sourceNode: y.value,
            sourceHandle: V,
            targetNode: m.value,
            targetHandle: j,
            markerEnd: b.value,
            markerStart: h.value,
            connectionStatus: u.value
          }) : Ae("path", {
            d: A,
            class: [d.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...l.value,
              ...d.value.style
            },
            "marker-end": b.value,
            "marker-start": h.value
          })
        )
      );
    };
  }
}), Xx = Wx, Yx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Kx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Zx = /* @__PURE__ */ Fe({
  ...Kx,
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
    return (t, n) => (S(), $("marker", {
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
      t.type === N(sa).ArrowClosed ? (S(), $("polyline", {
        key: 0,
        style: vt({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : oe("", !0),
      t.type === N(sa).Arrow ? (S(), $("polyline", {
        key: 1,
        style: vt({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : oe("", !0)
    ], 8, Yx));
  }
}), Jx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Qx = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, e1 = /* @__PURE__ */ Fe({
  ...Qx,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = je(), a = ee(() => {
      const s = /* @__PURE__ */ new Set(), l = [], d = (u) => {
        if (u) {
          const c = Qr(u, t);
          s.has(c) || (typeof u == "object" ? l.push({ ...u, id: c, color: u.color || o.value }) : l.push({ id: c, color: o.value, type: u }), s.add(c));
        }
      };
      for (const u of [r.value.markerEnd, r.value.markerStart])
        d(u);
      for (const u of n.value)
        for (const c of [u.markerStart, u.markerEnd])
          d(c);
      return l.sort((u, c) => u.id.localeCompare(c.id));
    });
    return (s, l) => (S(), $("svg", Jx, [
      i("defs", null, [
        (S(!0), $(te, null, Ne(a.value, (d) => (S(), Pe(Zx, {
          id: d.id,
          key: d.id,
          type: d.type,
          color: d.color,
          width: d.width,
          height: d.height,
          markerUnits: d.markerUnits,
          "stroke-width": d.strokeWidth,
          orient: d.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
      ])
    ]));
  }
}), t1 = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, n1 = /* @__PURE__ */ Fe({
  ...t1,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = je();
    return (o, a) => (S(), $(te, null, [
      Y(e1),
      (S(!0), $(te, null, Ne(N(n), (s) => (S(), $("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: N(xb)(s, N(t), N(r)) })
      }, [
        Y(N(Gx), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      Y(N(Xx))
    ], 64));
  }
}), r1 = Fe({
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
      addSelectedNodes: d,
      updateNodeDimensions: u,
      onUpdateNodeInternals: c,
      getNodeTypes: f,
      nodeExtent: v,
      elevateNodesOnSelect: y,
      disableKeyboardA11y: m,
      ariaLiveMessage: p,
      snapToGrid: h,
      snapGrid: b,
      nodeDragThreshold: z,
      nodesDraggable: w,
      elementsSelectable: T,
      nodesConnectable: P,
      nodesFocusable: _,
      hooks: g
    } = je(), k = W(null);
    qn(ip, k), qn(sp, e.id);
    const V = gr(Aa), D = yr(), F = cp(), { node: C, parentNode: j } = dp(e.id), { emit: E, on: L } = Bb(C, s), A = Ve(() => typeof C.draggable > "u" ? w.value : C.draggable), I = Ve(() => typeof C.selectable > "u" ? T.value : C.selectable), x = Ve(() => typeof C.connectable > "u" ? P.value : C.connectable), M = Ve(() => typeof C.focusable > "u" ? _.value : C.focusable), O = ee(
      () => I.value || A.value || g.value.nodeClick.hasListeners() || g.value.nodeDoubleClick.hasListeners() || g.value.nodeMouseEnter.hasListeners() || g.value.nodeMouseMove.hasListeners() || g.value.nodeMouseLeave.hasListeners()
    ), Q = Ve(() => !!C.dimensions.width && !!C.dimensions.height), fe = ee(() => {
      const U = C.type || "default", G = V?.[`node-${U}`];
      if (G)
        return G;
      let H = C.template || f.value[U];
      if (typeof H == "string" && D) {
        const se = Object.keys(D.appContext.components);
        se && se.includes(U) && (H = Kc(U, !1));
      }
      return H && typeof H != "string" ? H : (s.error(new at(nt.NODE_TYPE_MISSING, H)), !1);
    }), xe = lp({
      id: e.id,
      el: k,
      disabled: () => !A.value,
      selectable: I,
      dragHandle: () => C.dragHandle,
      onStart(U) {
        E.dragStart(U);
      },
      onDrag(U) {
        E.drag(U);
      },
      onStop(U) {
        E.dragStop(U);
      },
      onClick(U) {
        B(U);
      }
    }), ke = ee(() => C.class instanceof Function ? C.class(C) : C.class), ae = ee(() => {
      const U = (C.style instanceof Function ? C.style(C) : C.style) || {}, G = C.width instanceof Function ? C.width(C) : C.width, H = C.height instanceof Function ? C.height(C) : C.height;
      return !U.width && G && (U.width = typeof G == "string" ? G : `${G}px`), !U.height && H && (U.height = typeof H == "string" ? H : `${H}px`), U;
    }), le = Ve(() => Number(C.zIndex ?? ae.value.zIndex ?? 0));
    return c((U) => {
      (U.includes(e.id) || !U.length) && Te();
    }), Ke(() => {
      Me(
        () => C.hidden,
        (U = !1, G, H) => {
          !U && k.value && (e.resizeObserver.observe(k.value), H(() => {
            k.value && e.resizeObserver.unobserve(k.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Me([() => C.type, () => C.sourcePosition, () => C.targetPosition], () => {
      un(() => {
        u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
      });
    }), Me(
      [
        () => C.position.x,
        () => C.position.y,
        () => {
          var U;
          return (U = j.value) == null ? void 0 : U.computedPosition.x;
        },
        () => {
          var U;
          return (U = j.value) == null ? void 0 : U.computedPosition.y;
        },
        () => {
          var U;
          return (U = j.value) == null ? void 0 : U.computedPosition.z;
        },
        le,
        () => C.selected,
        () => C.dimensions.height,
        () => C.dimensions.width,
        () => {
          var U;
          return (U = j.value) == null ? void 0 : U.dimensions.height;
        },
        () => {
          var U;
          return (U = j.value) == null ? void 0 : U.dimensions.width;
        }
      ],
      ([U, G, H, se, ie, he]) => {
        const me = {
          x: U,
          y: G,
          z: he + (y.value && C.selected ? 1e3 : 0)
        };
        typeof H < "u" && typeof se < "u" ? C.computedPosition = hb({ x: H, y: se, z: ie }, me) : C.computedPosition = me;
      },
      { flush: "post", immediate: !0 }
    ), Me([() => C.extent, v], ([U, G], [H, se]) => {
      (U !== H || G !== se) && ge();
    }), C.extent === "parent" || typeof C.extent == "object" && "range" in C.extent && C.extent.range === "parent" ? Si(() => Q).toBe(!0).then(ge) : ge(), () => C.hidden ? null : Ae(
      "div",
      {
        ref: k,
        "data-id": C.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${fe.value === !1 ? "default" : C.type || "default"}`,
          {
            [n.value]: A.value,
            dragging: xe?.value,
            draggable: A.value,
            selected: C.selected,
            selectable: I.value,
            parent: C.isParent
          },
          ke.value
        ],
        style: {
          visibility: Q.value ? "visible" : "hidden",
          zIndex: C.computedPosition.z ?? le.value,
          transform: `translate(${C.computedPosition.x}px,${C.computedPosition.y}px)`,
          pointerEvents: O.value ? "all" : "none",
          ...ae.value
        },
        tabIndex: M.value ? 0 : void 0,
        role: M.value ? "group" : void 0,
        "aria-describedby": m.value ? void 0 : `${Vf}-${t}`,
        "aria-label": C.ariaLabel,
        "aria-roledescription": "node",
        ...C.domAttributes,
        onMouseenter: ze,
        onMousemove: de,
        onMouseleave: _e,
        onContextmenu: ue,
        onClick: B,
        onDblclick: ye,
        onKeydown: R
      },
      [
        Ae(fe.value === !1 ? f.value.default : fe.value, {
          id: C.id,
          type: C.type,
          data: C.data,
          events: { ...C.events, ...L },
          selected: C.selected,
          resizing: C.resizing,
          dragging: xe.value,
          connectable: x.value,
          position: C.computedPosition,
          dimensions: C.dimensions,
          isValidTargetPos: C.isValidTargetPos,
          isValidSourcePos: C.isValidSourcePos,
          parent: C.parentNode,
          parentNodeId: C.parentNode,
          zIndex: C.computedPosition.z ?? le.value,
          targetPosition: C.targetPosition,
          sourcePosition: C.sourcePosition,
          label: C.label,
          dragHandle: C.dragHandle,
          onUpdateNodeInternals: Te
        })
      ]
    );
    function ge() {
      const U = C.computedPosition, { computedPosition: G, position: H } = pl(
        C,
        h.value ? Ca(U, b.value) : U,
        s.error,
        v.value,
        j.value
      );
      (C.computedPosition.x !== G.x || C.computedPosition.y !== G.y) && (C.computedPosition = { ...C.computedPosition, ...G }), (C.position.x !== H.x || C.position.y !== H.y) && (C.position = H);
    }
    function Te() {
      k.value && u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
    }
    function ze(U) {
      xe?.value || E.mouseEnter({ event: U, node: C });
    }
    function de(U) {
      xe?.value || E.mouseMove({ event: U, node: C });
    }
    function _e(U) {
      xe?.value || E.mouseLeave({ event: U, node: C });
    }
    function ue(U) {
      return E.contextMenu({ event: U, node: C });
    }
    function ye(U) {
      return E.doubleClick({ event: U, node: C });
    }
    function B(U) {
      I.value && (!r.value || !A.value || z.value > 0) && Mi(
        C,
        a.value,
        d,
        l,
        o,
        !1,
        k.value
      ), E.click({ event: U, node: C });
    }
    function R(U) {
      if (!(Ni(U) || m.value))
        if (Hf.includes(U.key) && I.value) {
          const G = U.key === "Escape";
          Mi(
            C,
            a.value,
            d,
            l,
            o,
            G,
            k.value
          );
        } else A.value && C.selected && lr[U.key] && (U.preventDefault(), p.value = `Moved selected node ${U.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~C.position.x}, y: ${~~C.position.y}`, F(
          {
            x: lr[U.key].x,
            y: lr[U.key].y
          },
          U.shiftKey
        ));
    }
  }
}), o1 = r1, a1 = {
  height: "0",
  width: "0"
}, s1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, i1 = /* @__PURE__ */ Fe({
  ...s1,
  setup(e) {
    const { viewportRef: t } = je(), n = Ve(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (S(), $("svg", null, [
      (S(), $("foreignObject", a1, [
        (S(), Pe(Yc, {
          to: n.value,
          disabled: !n.value
        }, [
          Ye(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function l1(e = { includeHiddenNodes: !1 }) {
  const { nodes: t } = je();
  return ee(() => {
    if (t.value.length === 0)
      return !1;
    for (const n of t.value)
      if ((e.includeHiddenNodes || !n.hidden) && (n?.handleBounds === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
        return !1;
    return !0;
  });
}
const u1 = { class: "vue-flow__nodes vue-flow__container" }, d1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, c1 = /* @__PURE__ */ Fe({
  ...d1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = je(), o = l1(), a = W();
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
        const l = s.map((d) => ({
          id: d.target.getAttribute("data-id"),
          nodeElement: d.target,
          forceUpdate: !0
        }));
        un(() => n(l));
      });
    }), wa(() => {
      var s;
      return (s = a.value) == null ? void 0 : s.disconnect();
    }), (s, l) => (S(), $("div", u1, [
      a.value ? (S(!0), $(te, { key: 0 }, Ne(N(t), (d, u, c, f) => {
        const v = [d.id];
        if (f && f.key === d.id && mh(f, v))
          return f;
        const y = (S(), Pe(N(o1), {
          id: d.id,
          key: d.id,
          "resize-observer": a.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = v, y;
      }, l, 0), 128)) : oe("", !0)
    ]));
  }
});
function f1() {
  const { emits: e } = je();
  Ke(() => {
    if (ap()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new at(nt.MISSING_STYLES));
    }
  });
}
const p1 = /* @__PURE__ */ i("div", { class: "vue-flow__edge-labels" }, null, -1), h1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, m1 = /* @__PURE__ */ Fe({
  ...h1,
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
    const r = e, o = fh(), a = rs(r, "modelValue", n), s = rs(r, "nodes", n), l = rs(r, "edges", n), d = je(r), u = Vb({ modelValue: a, nodes: s, edges: l }, r, d);
    return Hb(n, d.hooks), qx(), f1(), qn(Aa, o), nl(u), t(d), (c, f) => (S(), $("div", {
      ref: N(d).vueFlowRef,
      class: "vue-flow"
    }, [
      Y(Ix, null, {
        default: ot(() => [
          Y(n1),
          p1,
          Y(c1),
          Ye(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Ye(c.$slots, "default"),
      Y(Ux)
    ], 512));
  }
}), v1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, g1 = /* @__PURE__ */ Fe({
  ...v1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = je(), r = ee(() => `${t.position}`.split("-"));
    return (o, a) => (S(), $("div", {
      class: X(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: N(n) ? "none" : "all" })
    }, [
      Ye(o.$slots, "default")
    ], 6));
  }
});
var ln = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(ln || {});
const gp = function({ dimensions: e, size: t, color: n }) {
  return Ae("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, yp = function({ radius: e, color: t }) {
  return Ae("circle", { cx: e, cy: e, r: e, fill: t });
};
ln.Lines + "", ln.Dots + "";
const y1 = {
  [ln.Dots]: "#81818a",
  [ln.Lines]: "#eee"
}, b1 = ["id", "x", "y", "width", "height", "patternTransform"], x1 = {
  key: 2,
  height: "100",
  width: "100"
}, w1 = ["fill"], _1 = ["x", "y", "fill"], k1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, S1 = /* @__PURE__ */ Fe({
  ...k1,
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
    const { id: t, viewport: n } = je(), r = ee(() => {
      const s = n.value.zoom, [l, d] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * s || 1, d * s || 1], c = e.size * s, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], y = [f * s || 1 + u[0] / 2, v * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: y,
        size: c
      };
    }), o = Ve(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = Ve(() => e.color || e.patternColor || y1[e.variant || ln.Dots]);
    return (s, l) => (S(), $("svg", {
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
            s.variant === N(ln).Lines ? (S(), Pe(N(gp), {
              key: 0,
              size: s.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === N(ln).Dots ? (S(), Pe(N(yp), {
              key: 1,
              color: a.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : oe("", !0),
            s.bgColor ? (S(), $("svg", x1, [
              i("rect", {
                width: "100%",
                height: "100%",
                fill: s.bgColor
              }, null, 8, w1)
            ])) : oe("", !0)
          ])
        ], 8, b1)
      ]),
      i("rect", {
        x: s.x,
        y: s.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, _1),
      Ye(s.$slots, "default", { id: o.value })
    ], 4));
  }
}), E1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, z1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, $1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function P1(e, t, n, r, o, a) {
  return S(), $("button", $1, [
    Ye(e.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ z1(E1, [["render", P1]]), C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, A1 = /* @__PURE__ */ i("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), T1 = [
  A1
];
function O1(e, t) {
  return S(), $("svg", C1, T1);
}
const N1 = { render: O1 }, R1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, M1 = /* @__PURE__ */ i("path", { d: "M0 0h32v4.2H0z" }, null, -1), I1 = [
  M1
];
function D1(e, t) {
  return S(), $("svg", R1, I1);
}
const F1 = { render: D1 }, B1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, L1 = /* @__PURE__ */ i("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), U1 = [
  L1
];
function q1(e, t) {
  return S(), $("svg", B1, U1);
}
const V1 = { render: q1 }, j1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, H1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), G1 = [
  H1
];
function W1(e, t) {
  return S(), $("svg", j1, G1);
}
const X1 = { render: W1 }, Y1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, K1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), Z1 = [
  K1
];
function J1(e, t) {
  return S(), $("svg", Y1, Z1);
}
const Q1 = { render: J1 }, ew = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, tw = /* @__PURE__ */ Fe({
  ...ew,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => qf.BottomLeft }
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
      fitView: d,
      viewport: u,
      minZoom: c,
      maxZoom: f
    } = je(), v = Ve(() => n.value || r.value || o.value), y = Ve(() => u.value.zoom <= c.value), m = Ve(() => u.value.zoom >= f.value);
    function p() {
      s(), t("zoomIn");
    }
    function h() {
      l(), t("zoomOut");
    }
    function b() {
      d(e.fitViewParams), t("fitView");
    }
    function z() {
      a(!v.value), t("interactionChange", !v.value);
    }
    return (w, T) => (S(), Pe(N(g1), {
      class: "vue-flow__controls",
      position: w.position
    }, {
      default: ot(() => [
        Ye(w.$slots, "top"),
        w.showZoom ? (S(), $(te, { key: 0 }, [
          Ye(w.$slots, "control-zoom-in", {}, () => [
            Y(Po, {
              class: "vue-flow__controls-zoomin",
              disabled: m.value,
              onClick: p
            }, {
              default: ot(() => [
                Ye(w.$slots, "icon-zoom-in", {}, () => [
                  (S(), Pe(Rt(N(N1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Ye(w.$slots, "control-zoom-out", {}, () => [
            Y(Po, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: h
            }, {
              default: ot(() => [
                Ye(w.$slots, "icon-zoom-out", {}, () => [
                  (S(), Pe(Rt(N(F1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : oe("", !0),
        w.showFitView ? Ye(w.$slots, "control-fit-view", { key: 1 }, () => [
          Y(Po, {
            class: "vue-flow__controls-fitview",
            onClick: b
          }, {
            default: ot(() => [
              Ye(w.$slots, "icon-fit-view", {}, () => [
                (S(), Pe(Rt(N(V1))))
              ])
            ]),
            _: 3
          })
        ]) : oe("", !0),
        w.showInteractive ? Ye(w.$slots, "control-interactive", { key: 2 }, () => [
          w.showInteractive ? (S(), Pe(Po, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: z
          }, {
            default: ot(() => [
              v.value ? Ye(w.$slots, "icon-unlock", { key: 0 }, () => [
                (S(), Pe(Rt(N(Q1))))
              ]) : oe("", !0),
              v.value ? oe("", !0) : Ye(w.$slots, "icon-lock", { key: 1 }, () => [
                (S(), Pe(Rt(N(X1))))
              ])
            ]),
            _: 3
          })) : oe("", !0)
        ]) : oe("", !0),
        Ye(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), nw = {
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
    const n = e, r = t, o = ee(() => ml({
      sourceX: n.sourceX,
      sourceY: n.sourceY,
      targetX: n.targetX,
      targetY: n.targetY,
      sourcePosition: n.sourcePosition,
      targetPosition: n.targetPosition
    })), a = ee(() => ({
      position: "absolute",
      transform: `translate(-50%, -50%) translate(${o.value[1]}px, ${o.value[2]}px)`
    })), s = ee(() => {
      const u = n.sourceHandleId || n.sourceHandle || n.data?.sourceHandle;
      return u || (n.data?.condition === "true" ? "yes" : n.data?.condition === "false" ? "no" : "");
    }), l = ee(() => {
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
    }), d = ee(() => ({
      stroke: l.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, c) => (S(), $(te, null, [
      Y(N(lo), {
        id: e.id,
        path: o.value[0],
        style: vt(d.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      Y(N(i1), null, {
        default: ot(() => [
          i("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(a.value)
          }, [
            l.value.label ? (S(), $("span", {
              key: 0,
              class: X(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, q(l.value.label), 3)) : oe("", !0),
            i("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: c[0] || (c[0] = rn((f) => r("remove", e.id), ["stop"]))
            }, [
              Y(N(Ot), { class: "h-2.5 w-2.5" })
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, Ln = [
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
function qo(e) {
  return Ln.find((t) => t.eventClass === e)?.label || e || "—";
}
const bp = [
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
], rw = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], ow = [
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
], aw = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], sw = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], xp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "has_order_bumps", label: "➕ Comprou Order Bump? (Sim/Não)" },
  { value: "reply_matches", label: "💬 Resposta do cliente (contém / exato / maiúsculas e minúsculas)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], wp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], _p = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], iw = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], An = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function kp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (An[t] || 1)));
}
function lw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % An.days === 0 ? { value: t / An.days, unit: "days" } : t > 0 && t % An.hours === 0 ? { value: t / An.hours, unit: "hours" } : t > 0 && t % An.minutes === 0 ? { value: t / An.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const uw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function da(e) {
  return uw[e] || "minutos";
}
function xn(e) {
  return rw.find((t) => t.type === e)?.label || e;
}
function Sp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "", match_mode: "contains", case_sensitive: !1, ignore_accents: !0 } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400, filter_reply: !1, match_mode: "contains", match_text: "", case_sensitive: !1, ignore_accents: !0 } : {};
}
function Ep(e) {
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
function zp(e) {
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
const $p = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, dw = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, cw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, fw = { class: "space-y-4" }, pw = ["value"], hw = ["value"], mw = { key: 0 }, vw = { key: 1 }, gw = ["value"], yw = { class: "mt-2 flex flex-wrap gap-1.5" }, bw = ["title", "onClick"], xw = { key: 0 }, ww = ["accept", "disabled"], _w = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, kw = { key: 2 }, Sw = ["disabled"], Ew = { class: "space-y-2" }, zw = ["onUpdate:modelValue"], $w = ["value"], Pw = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], Aw = ["value"], Tw = ["onUpdate:modelValue"], Ow = ["onUpdate:modelValue"], Nw = ["onUpdate:modelValue"], Rw = ["onUpdate:modelValue"], Mw = ["onUpdate:modelValue"], Iw = ["onClick"], Dw = { class: "grid grid-cols-2 gap-2" }, Fw = { class: "space-y-3" }, Bw = ["onUpdate:modelValue"], Lw = ["onUpdate:modelValue"], Uw = ["onUpdate:modelValue"], qw = ["onClick"], Vw = ["onClick"], jw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Hw = ["onClick"], Gw = { class: "grid grid-cols-2 gap-2" }, Ww = { class: "space-y-2" }, Xw = ["onUpdate:modelValue", "placeholder"], Yw = ["onClick"], Kw = ["max"], Zw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Oe = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", Pp = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => bp }
  },
  setup(e) {
    const t = e, n = W(!1), r = W(""), o = W([]), a = W("list"), s = (_) => ["image", "video", "audio", "document"].includes(_), l = ee(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function d(_, g) {
      t.data[_] = `${t.data[_] || ""}${g}`;
    }
    async function u(_, g = "media_url", k = "mime_type") {
      const V = _.target.files?.[0];
      if (V) {
        n.value = !0, r.value = "";
        try {
          const D = await Ee.uploadMedia(V);
          t.data[g] = D.url, k && (t.data[k] = D.mime_type);
        } catch (D) {
          r.value = D.message;
        } finally {
          n.value = !1, _.target.value = "";
        }
      }
    }
    const c = ee(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, v = (_) => {
      t.data.buttons = c.value.filter((g, k) => k !== _);
    }, y = ee(() => Array.isArray(t.data.sections) ? t.data.sections : []), m = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = (_) => {
      t.data.sections = y.value.filter((g, k) => k !== _);
    }, h = (_) => {
      _.rows = [..._.rows || [], { title: "", description: "" }];
    }, b = (_, g) => {
      _.rows = (_.rows || []).filter((k, V) => V !== g);
    }, z = ee(() => Array.isArray(t.data.options) ? t.data.options : []), w = () => {
      t.data.options = [...z.value, ""];
    }, T = (_) => {
      t.data.options = z.value.filter((g, k) => k !== _);
    };
    async function P() {
      try {
        o.value = (await Ee.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && P();
    }), (_, g) => (S(), $("div", fw, [
      i("div", null, [
        i("label", {
          class: X(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        re(i("select", {
          id: "zr-mode",
          "onUpdate:modelValue": g[0] || (g[0] = (k) => e.data.mode = k),
          class: X(Oe)
        }, [
          (S(!0), $(te, null, Ne(N(ow), (k) => (S(), $("option", {
            key: k.value,
            value: k.value
          }, q(k.label), 9, pw))), 128))
        ], 512), [
          [tt, e.data.mode]
        ])
      ]),
      e.showRecipient ? (S(), $(te, { key: 0 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          re(i("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": g[1] || (g[1] = (k) => e.data.recipient_type = k),
            class: X(Oe)
          }, [
            (S(!0), $(te, null, Ne(N(iw), (k) => (S(), $("option", {
              key: k.value,
              value: k.value
            }, q(k.label), 9, hw))), 128))
          ], 512), [
            [tt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (S(), $("div", mw, [
          i("label", {
            class: X(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          re(i("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": g[2] || (g[2] = (k) => e.data.custom_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: X(Oe)
          }, null, 512), [
            [
              be,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (S(), $("div", vw, [
          i("label", {
            class: X(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? re((S(), $("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": g[3] || (g[3] = (k) => e.data.group_id = k),
            class: X(Oe)
          }, [
            g[30] || (g[30] = i("option", { value: "" }, "Selecione o grupo…", -1)),
            (S(!0), $(te, null, Ne(o.value, (k) => (S(), $("option", {
              key: k.id,
              value: k.id
            }, q(k.name), 9, gw))), 128))
          ], 512)), [
            [tt, e.data.group_id]
          ]) : re((S(), $("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": g[4] || (g[4] = (k) => e.data.group_id = k),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: X(Oe)
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
            onClick: g[5] || (g[5] = (k) => a.value = a.value === "list" ? "manual" : "list")
          }, q(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : oe("", !0)
      ], 64)) : oe("", !0),
      e.data.mode === "text" || s(e.data.mode) ? (S(), $(te, { key: 1 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-text"
          }, q(s(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          re(i("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": g[6] || (g[6] = (k) => e.data.text = k),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: X([Oe, "font-mono leading-relaxed"])
          }, null, 2), [
            [be, e.data.text]
          ]),
          i("div", yw, [
            (S(!0), $(te, null, Ne(e.variables, (k) => (S(), $("button", {
              key: k.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: k.label,
              onClick: (V) => d("text", k.token)
            }, q(k.token), 9, bw))), 128))
          ])
        ]),
        s(e.data.mode) ? (S(), $("div", xw, [
          i("label", {
            class: X(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          re(i("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": g[7] || (g[7] = (k) => e.data.media_url = k),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: X(Oe)
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
          }, null, 40, ww),
          n.value ? (S(), $("p", _w, "Enviando arquivo…")) : oe("", !0)
        ])) : oe("", !0)
      ], 64)) : e.data.mode === "sticker" ? (S(), $("div", kw, [
        i("label", {
          class: X(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        re(i("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": g[8] || (g[8] = (k) => e.data.media_url = k),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: X(Oe)
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
        }, null, 40, Sw)
      ])) : e.data.mode === "buttons" ? (S(), $(te, { key: 3 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-title"
          }, "Título"),
          re(i("input", {
            id: "zr-title",
            "onUpdate:modelValue": g[9] || (g[9] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          re(i("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": g[10] || (g[10] = (k) => e.data.text = k),
            rows: "3",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          re(i("input", {
            id: "zr-footer",
            "onUpdate:modelValue": g[11] || (g[11] = (k) => e.data.footer = k),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.footer]
          ])
        ]),
        i("div", Ew, [
          i("label", {
            class: X(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (S(!0), $(te, null, Ne(c.value, (k, V) => (S(), $("div", {
            key: V,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            re(i("select", {
              "onUpdate:modelValue": (D) => k.type = D,
              class: X(Oe)
            }, [
              (S(!0), $(te, null, Ne(N(aw), (D) => (S(), $("option", {
                key: D.value,
                value: D.value
              }, q(D.label), 9, $w))), 128))
            ], 8, zw), [
              [tt, k.type]
            ]),
            k.type === "pix" ? (S(), $(te, { key: 0 }, [
              re(i("input", {
                "onUpdate:modelValue": (D) => k.name = D,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: X(Oe)
              }, null, 8, Pw), [
                [be, k.name]
              ]),
              re(i("select", {
                "onUpdate:modelValue": (D) => k.keyType = D,
                class: X(Oe)
              }, [
                g[31] || (g[31] = i("option", { value: "" }, "Tipo de chave PIX", -1)),
                (S(!0), $(te, null, Ne(N(sw), (D) => (S(), $("option", {
                  key: D.value,
                  value: D.value
                }, q(D.label), 9, Aw))), 128))
              ], 8, Cw), [
                [tt, k.keyType]
              ]),
              re(i("input", {
                "onUpdate:modelValue": (D) => k.key = D,
                type: "text",
                placeholder: "Chave PIX",
                class: X(Oe)
              }, null, 8, Tw), [
                [
                  be,
                  k.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              g[32] || (g[32] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (S(), $(te, { key: 1 }, [
              re(i("input", {
                "onUpdate:modelValue": (D) => k.displayText = D,
                type: "text",
                placeholder: "Texto do botão",
                class: X(Oe)
              }, null, 8, Ow), [
                [be, k.displayText]
              ]),
              k.type === "url" ? re((S(), $("input", {
                key: 0,
                "onUpdate:modelValue": (D) => k.url = D,
                type: "url",
                placeholder: "https://…",
                class: X(Oe)
              }, null, 8, Nw)), [
                [
                  be,
                  k.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : oe("", !0),
              k.type === "call" ? re((S(), $("input", {
                key: 1,
                "onUpdate:modelValue": (D) => k.phoneNumber = D,
                type: "text",
                placeholder: "+5511999998888",
                class: X(Oe)
              }, null, 8, Rw)), [
                [
                  be,
                  k.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : oe("", !0),
              k.type === "copy" ? re((S(), $("input", {
                key: 2,
                "onUpdate:modelValue": (D) => k.copyCode = D,
                type: "text",
                placeholder: "Código a copiar",
                class: X(Oe)
              }, null, 8, Mw)), [
                [
                  be,
                  k.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : oe("", !0)
            ], 64)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => v(V)
            }, "Remover botão", 8, Iw)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (S(), $(te, { key: 4 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-list-title"
          }, "Título"),
          re(i("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": g[12] || (g[12] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Nossos planos",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          re(i("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": g[13] || (g[13] = (k) => e.data.text = k),
            rows: "3",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ]),
        i("div", Dw, [
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            re(i("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": g[14] || (g[14] = (k) => e.data.footer = k),
              type: "text",
              class: X(Oe)
            }, null, 512), [
              [be, e.data.footer]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            re(i("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": g[15] || (g[15] = (k) => e.data.button_text = k),
              type: "text",
              placeholder: "Ver Menu",
              class: X(Oe)
            }, null, 512), [
              [be, e.data.button_text]
            ])
          ])
        ]),
        i("div", Fw, [
          i("label", {
            class: X(Ue)
          }, "Seções"),
          (S(!0), $(te, null, Ne(y.value, (k, V) => (S(), $("div", {
            key: V,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            re(i("input", {
              "onUpdate:modelValue": (D) => k.title = D,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: X(Oe)
            }, null, 8, Bw), [
              [be, k.title]
            ]),
            (S(!0), $(te, null, Ne(k.rows, (D, F) => (S(), $("div", {
              key: F,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              re(i("input", {
                "onUpdate:modelValue": (C) => D.title = C,
                type: "text",
                placeholder: "Título da opção",
                class: X(Oe)
              }, null, 8, Lw), [
                [be, D.title]
              ]),
              re(i("input", {
                "onUpdate:modelValue": (C) => D.description = C,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: X(Oe)
              }, null, 8, Uw), [
                [be, D.description]
              ]),
              i("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (C) => b(k, F)
              }, "Remover opção", 8, qw)
            ]))), 128)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (D) => h(k)
            }, "+ Adicionar opção", 8, Vw),
            i("div", jw, [
              i("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (D) => p(V)
              }, "Remover seção", 8, Hw)
            ])
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: m
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (S(), $(te, { key: 5 }, [
        i("div", Gw, [
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-lat"
            }, "Latitude"),
            re(i("input", {
              id: "zr-lat",
              "onUpdate:modelValue": g[16] || (g[16] = (k) => e.data.latitude = k),
              type: "text",
              placeholder: "-23.5505",
              class: X(Oe)
            }, null, 512), [
              [be, e.data.latitude]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-lng"
            }, "Longitude"),
            re(i("input", {
              id: "zr-lng",
              "onUpdate:modelValue": g[17] || (g[17] = (k) => e.data.longitude = k),
              type: "text",
              placeholder: "-46.6333",
              class: X(Oe)
            }, null, 512), [
              [be, e.data.longitude]
            ])
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          re(i("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": g[18] || (g[18] = (k) => e.data.location_name = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.location_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          re(i("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": g[19] || (g[19] = (k) => e.data.address = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (S(), $(te, { key: 6 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          re(i("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": g[20] || (g[20] = (k) => e.data.contact_name = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.contact_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          re(i("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": g[21] || (g[21] = (k) => e.data.contact_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.contact_phone]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          re(i("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": g[22] || (g[22] = (k) => e.data.organization = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (S(), $(te, { key: 7 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          re(i("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": g[23] || (g[23] = (k) => e.data.question = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.question]
          ])
        ]),
        i("div", Ww, [
          i("label", {
            class: X(Ue)
          }, "Opções (mínimo 2)"),
          (S(!0), $(te, null, Ne(z.value, (k, V) => (S(), $("div", {
            key: V,
            class: "flex gap-2"
          }, [
            re(i("input", {
              "onUpdate:modelValue": (D) => z.value[V] = D,
              type: "text",
              class: X(Oe),
              placeholder: `Opção ${V + 1}`
            }, null, 8, Xw), [
              [be, z.value[V]]
            ]),
            z.value.length > 2 ? (S(), $("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => T(V)
            }, "✕", 8, Yw)) : oe("", !0)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: w
          }, "+ Adicionar opção")
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          re(i("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": g[24] || (g[24] = (k) => e.data.max_answers = k),
            type: "number",
            min: "1",
            max: z.value.length,
            class: X(Oe)
          }, null, 8, Kw), [
            [
              be,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (S(), $(te, { key: 8 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-link-url"
          }, "URL"),
          re(i("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": g[25] || (g[25] = (k) => e.data.url = k),
            type: "url",
            placeholder: "https://…",
            class: X(Oe)
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
            class: X(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          re(i("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": g[26] || (g[26] = (k) => e.data.title = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          re(i("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": g[27] || (g[27] = (k) => e.data.description = k),
            type: "text",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.description]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          re(i("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": g[28] || (g[28] = (k) => e.data.image_url = k),
            type: "url",
            class: X(Oe)
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
            class: X(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          re(i("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": g[29] || (g[29] = (k) => e.data.text = k),
            rows: "3",
            class: X(Oe)
          }, null, 512), [
            [be, e.data.text]
          ])
        ])
      ], 64)) : oe("", !0),
      r.value ? (S(), $("p", Zw, q(r.value), 1)) : oe("", !0)
    ]));
  }
}, Cp = {
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
}, Jw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Qw(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Di(e, t = Cp) {
  return e ? e.replace(Jw, (n, r) => {
    const o = Qw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const e_ = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, t_ = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, n_ = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, r_ = { class: "text-xs" }, o_ = { class: "font-bold text-white" }, a_ = { class: "my-4 flex justify-end" }, s_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, i_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, l_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, gl = {
  __name: "MessagePreview",
  props: {
    text: { type: String, default: "" },
    recipientName: { type: String, default: "Cliente" },
    caption: { type: String, default: "" },
    /** '' | image | video | audio | document | buttons */
    mode: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = ee(() => (t.recipientName || "C").trim().charAt(0).toUpperCase()), r = ee(() => {
      const a = t.mode && t.mode !== "text" && t.caption || t.text;
      return a?.trim() ? Di(a) : "Sua mensagem aparece aqui…";
    }), o = ee(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (a, s) => (S(), $("div", e_, [
      i("div", t_, [
        i("div", n_, q(n.value), 1),
        i("div", r_, [
          i("div", o_, q(e.recipientName || "Cliente"), 1),
          s[0] || (s[0] = i("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      i("div", a_, [
        i("div", s_, [
          o.value ? (S(), $("span", i_, q(o.value), 1)) : oe("", !0),
          ne(" " + q(r.value) + " ", 1),
          i("div", l_, [
            s[1] || (s[1] = i("span", null, "12:00", -1)),
            Y(N(_i), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      s[2] || (s[2] = i("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, u_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, d_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, c_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, f_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, p_ = {
  key: 0,
  class: "space-y-4 p-4"
}, h_ = ["value"], m_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, v_ = {
  key: 0,
  class: "p-4"
}, g_ = {
  key: 1,
  class: "p-4"
}, y_ = {
  key: 2,
  class: "space-y-1 p-4"
}, b_ = { class: "flex gap-2" }, x_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, w_ = {
  key: 3,
  class: "space-y-4 p-4"
}, __ = ["value"], k_ = { key: 0 }, S_ = ["value"], E_ = { key: 1 }, z_ = ["value"], $_ = { key: 2 }, P_ = {
  key: 3,
  class: "space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3.5"
}, C_ = { class: "space-y-2 pt-1" }, A_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, T_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, O_ = {
  key: 4,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, N_ = {
  key: 5,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, R_ = {
  key: 4,
  class: "space-y-3 p-4"
}, M_ = { class: "flex gap-2" }, I_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, D_ = { class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-2.5" }, F_ = { class: "flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer" }, B_ = {
  key: 0,
  class: "space-y-2.5 pt-1 border-t border-teal-500/10"
}, L_ = { class: "space-y-1.5 pt-0.5" }, U_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, q_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, V_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, j_ = {
  key: 1,
  class: "space-y-4 p-4"
}, H_ = { class: "flex items-start justify-between gap-2" }, G_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, W_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, bt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Tt = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", X_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W("config");
    let a = null, s = null;
    Me(
      () => [n.node?.id, n.node?.data?.mode],
      ([d, u]) => {
        d === void 0 || u === void 0 || (d === a && u !== s && Object.assign(n.node.data, Ep(u)), a = d, s = u);
      },
      { immediate: !0 }
    ), Me(
      () => n.node,
      (d) => {
        if (!["delay", "wait_reply"].includes(d?.type) || d.data.delay_value) return;
        const { value: u, unit: c } = lw(d.data.seconds || 0);
        d.data.delay_value = u, d.data.delay_unit = c;
      },
      { immediate: !0 }
    ), Me(() => n.node?.id, () => {
      o.value = "config";
    });
    function l() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = kp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (d, u) => (S(), $("aside", u_, [
      e.node ? (S(), $(te, { key: 0 }, [
        i("div", d_, [
          i("div", null, [
            i("h3", c_, q(N(xn)(e.node.type)), 1),
            i("p", f_, q(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (S(), $("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (c) => r("remove-node", e.node.id))
          }, [
            Y(N(Jo), { class: "h-3 w-3" }),
            u[21] || (u[21] = ne(" Excluir ", -1))
          ])) : oe("", !0)
        ]),
        e.node.type === "trigger" ? (S(), $("div", p_, [
          i("div", null, [
            i("label", {
              class: X(Tt)
            }, "Evento"),
            i("input", {
              class: X([bt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, h_),
            u[22] || (u[22] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (S(), $(te, { key: 1 }, [
          i("div", m_, [
            i("button", {
              type: "button",
              class: X(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (c) => o.value = "config")
            }, " Configurar ", 2),
            i("button", {
              type: "button",
              class: X(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (c) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (S(), $("div", v_, [
            Y(gl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": N(Cp).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (S(), $("div", g_, [
            Y(Pp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (S(), $("div", y_, [
          i("label", {
            class: X(Tt),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          i("div", b_, [
            re(i("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: X(bt),
              onChange: l
            }, null, 544), [
              [
                be,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            re(i("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (c) => e.node.data.delay_unit = c),
              class: X(bt),
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
          i("p", x_, " Aguarda " + q(e.node.data.delay_value || 0) + " " + q(N(da)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (S(), $("div", w_, [
          i("div", null, [
            i("label", {
              class: X(Tt),
              for: "zr-kind"
            }, "Regra de validação"),
            re(i("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (c) => e.node.data.kind = c),
              class: X(bt)
            }, [
              (S(!0), $(te, null, Ne(N(xp), (c) => (S(), $("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, __))), 128))
            ], 512), [
              [tt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (S(), $("div", k_, [
            i("label", {
              class: X(Tt),
              for: "zr-order-status"
            }, "Status esperado"),
            re(i("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (c) => e.node.data.value = c),
              class: X(bt)
            }, [
              (S(!0), $(te, null, Ne(N(wp), (c) => (S(), $("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, S_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (S(), $("div", E_, [
            i("label", {
              class: X(Tt),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            re(i("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (c) => e.node.data.value = c),
              class: X(bt)
            }, [
              (S(!0), $(te, null, Ne(N(_p), (c) => (S(), $("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, z_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (S(), $("div", $_, [
            i("label", {
              class: X(Tt),
              for: "zr-value"
            }, "Classe do evento"),
            re(i("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: X(bt)
            }, null, 512), [
              [
                be,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : e.node.data.kind === "reply_matches" ? (S(), $("div", P_, [
            u[27] || (u[27] = i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Identificar resposta do cliente", -1)),
            i("div", null, [
              i("label", {
                class: X(Tt),
                for: "zr-reply-mode"
              }, "Modo de correspondência"),
              re(i("select", {
                id: "zr-reply-mode",
                "onUpdate:modelValue": u[9] || (u[9] = (c) => e.node.data.match_mode = c),
                class: X(bt)
              }, [...u[24] || (u[24] = [
                i("option", { value: "contains" }, "Contém o texto", -1),
                i("option", { value: "exact" }, "Texto exato", -1)
              ])], 512), [
                [tt, e.node.data.match_mode]
              ])
            ]),
            i("div", null, [
              i("label", {
                class: X(Tt),
                for: "zr-reply-value"
              }, "Texto esperado"),
              re(i("input", {
                id: "zr-reply-value",
                "onUpdate:modelValue": u[10] || (u[10] = (c) => e.node.data.value = c),
                type: "text",
                placeholder: "Ex: eu quero",
                class: X(bt)
              }, null, 512), [
                [be, e.node.data.value]
              ])
            ]),
            i("div", C_, [
              i("label", A_, [
                re(i("input", {
                  "onUpdate:modelValue": u[11] || (u[11] = (c) => e.node.data.case_sensitive = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [Tn, e.node.data.case_sensitive]
                ]),
                u[25] || (u[25] = i("span", null, "Diferenciar maiúsculas e minúsculas", -1))
              ]),
              i("label", T_, [
                re(i("input", {
                  "onUpdate:modelValue": u[12] || (u[12] = (c) => e.node.data.ignore_accents = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [Tn, e.node.data.ignore_accents]
                ]),
                u[26] || (u[26] = i("span", null, 'Ignorar acentos (ex: "não" = "nao", "é" = "e")', -1))
              ])
            ]),
            u[28] || (u[28] = i("p", { class: "text-[11px] text-teal-700 dark:text-teal-300" }, [
              ne(" Avalia a última mensagem enviada pelo cliente. Segue por "),
              i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
              ne(" se corresponder, ou "),
              i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
              ne(' caso responda outra coisa (ex: "não"). ')
            ], -1))
          ])) : oe("", !0),
          e.node.data.kind === "order_is_paid" ? (S(), $("p", O_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (S(), $("p", N_, [...u[29] || (u[29] = [
            ne(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            ne(" se houver bumps, ou ", -1),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            ne(" se comprou apenas o produto principal. ", -1)
          ])])) : oe("", !0),
          u[30] || (u[30] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ne(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            ne(" e outra do ponto "),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            ne(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (S(), $("div", R_, [
          i("div", null, [
            i("label", {
              class: X(Tt),
              for: "zr-wait-value"
            }, "Tempo máximo de espera"),
            i("div", M_, [
              re(i("input", {
                id: "zr-wait-value",
                "onUpdate:modelValue": u[13] || (u[13] = (c) => e.node.data.delay_value = c),
                type: "number",
                min: "1",
                class: X(bt),
                onChange: l
              }, null, 544), [
                [
                  be,
                  e.node.data.delay_value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              re(i("select", {
                "onUpdate:modelValue": u[14] || (u[14] = (c) => e.node.data.delay_unit = c),
                class: X(bt),
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
            i("p", I_, " Espera até " + q(e.node.data.delay_value || 0) + " " + q(N(da)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente na Evolution GO. ", 1)
          ]),
          i("div", D_, [
            i("label", F_, [
              re(i("input", {
                "onUpdate:modelValue": u[15] || (u[15] = (c) => e.node.data.filter_reply = c),
                type: "checkbox",
                class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
              }, null, 512), [
                [Tn, e.node.data.filter_reply]
              ]),
              u[32] || (u[32] = i("span", null, "Filtrar resposta esperada (opcional)", -1))
            ]),
            e.node.data.filter_reply ? (S(), $("div", B_, [
              i("div", null, [
                i("label", {
                  class: X(Tt),
                  for: "zr-wait-filter-mode"
                }, "Tipo de correspondência"),
                re(i("select", {
                  id: "zr-wait-filter-mode",
                  "onUpdate:modelValue": u[16] || (u[16] = (c) => e.node.data.match_mode = c),
                  class: X(bt)
                }, [...u[33] || (u[33] = [
                  i("option", { value: "contains" }, "Contém o texto", -1),
                  i("option", { value: "exact" }, "Texto exato", -1)
                ])], 512), [
                  [tt, e.node.data.match_mode]
                ])
              ]),
              i("div", null, [
                i("label", {
                  class: X(Tt),
                  for: "zr-wait-filter-text"
                }, "Texto esperado"),
                re(i("input", {
                  id: "zr-wait-filter-text",
                  "onUpdate:modelValue": u[17] || (u[17] = (c) => e.node.data.match_text = c),
                  type: "text",
                  placeholder: "Ex: eu quero",
                  class: X(bt)
                }, null, 512), [
                  [be, e.node.data.match_text]
                ])
              ]),
              i("div", L_, [
                i("label", U_, [
                  re(i("input", {
                    "onUpdate:modelValue": u[18] || (u[18] = (c) => e.node.data.case_sensitive = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [Tn, e.node.data.case_sensitive]
                  ]),
                  u[34] || (u[34] = i("span", null, "Diferenciar maiúsculas/minúsculas", -1))
                ]),
                i("label", q_, [
                  re(i("input", {
                    "onUpdate:modelValue": u[19] || (u[19] = (c) => e.node.data.ignore_accents = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [Tn, e.node.data.ignore_accents]
                  ]),
                  u[35] || (u[35] = i("span", null, 'Ignorar acentos (ex: "não" = "nao")', -1))
                ])
              ]),
              u[36] || (u[36] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, [
                ne(" Apenas respostas que atenderem a este critério ativarão a saída "),
                i("strong", { class: "text-teal-600 dark:text-teal-400" }, "RESPONDEU"),
                ne(". Respostas divergentes continuarão aguardando até o tempo esgotar. ")
              ], -1))
            ])) : oe("", !0)
          ]),
          u[37] || (u[37] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ne(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            ne(" (o cliente mandou uma mensagem) e outra do ponto "),
            i("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            ne(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (S(), $("p", V_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (S(), $("div", j_, [
        i("div", H_, [
          i("div", null, [
            u[38] || (u[38] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            i("p", G_, q(e.edge.source) + " → " + q(e.edge.target), 1)
          ]),
          i("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[20] || (u[20] = (c) => r("remove-edge", e.edge.id))
          }, [
            Y(N(Jo), { class: "h-3 w-3" }),
            u[39] || (u[39] = ne(" Excluir ", -1))
          ])
        ]),
        u[40] || (u[40] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (S(), $("p", W_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, Y_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, K_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, Z_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, J_ = { class: "flex items-center gap-2" }, Q_ = { class: "mt-6 space-y-4" }, e2 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, t2 = { class: "mt-2.5 flex items-center gap-2" }, n2 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, r2 = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, o2 = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, a2 = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, s2 = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, i2 = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, l2 = { class: "flex items-center gap-3" }, u2 = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, d2 = { class: "flex items-center gap-2" }, c2 = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, f2 = {
  key: 0,
  class: "flex justify-center my-1"
}, p2 = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, h2 = {
  key: 1,
  class: "flex justify-start"
}, m2 = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, v2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, g2 = {
  key: 2,
  class: "flex justify-end"
}, y2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, b2 = { class: "leading-relaxed" }, x2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, w2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, _2 = ["disabled", "placeholder"], k2 = ["disabled"], S2 = {
  __name: "FlowSimulatorModal",
  props: {
    flow: { type: Object, required: !0 },
    nodes: { type: Array, required: !0 },
    edges: { type: Array, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(null), a = W([]);
    W(!1);
    const s = W(!1), l = W(""), d = W(!1), u = W(null), c = W("");
    function f(P, _, g = "contains", k = !1, V = !0) {
      let D = (P || "").trim(), F = (_ || "").trim();
      return F ? (V && (D = D.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), F = F.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), k || (D = D.toLowerCase(), F = F.toLowerCase()), g === "exact" ? D === F : D.includes(F)) : !0;
    }
    ee(() => n.nodes.find((P) => P.id === o.value));
    function v() {
      const P = /* @__PURE__ */ new Date();
      return `${String(P.getHours()).padStart(2, "0")}:${String(P.getMinutes()).padStart(2, "0")}`;
    }
    function y() {
      a.value = [], s.value = !1, u.value = null, l.value = "";
      const P = n.nodes.find((_) => _.type === "trigger");
      if (!P) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: v()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${P.data?.event_class || "Evento do Fluxo"}`,
        time: v()
      }), o.value = P.id, p();
    }
    function m(P, _ = null) {
      return n.edges.find((g) => g.source !== P ? !1 : _ === null ? !0 : (g.sourceHandle === "yes" || g.sourceHandle === "replied" || g.data?.condition === "true" ? "true" : g.sourceHandle === "no" || g.sourceHandle === "timeout" || g.data?.condition === "false" ? "false" : null) === _);
    }
    function p() {
      if (!o.value) return;
      const P = n.nodes.find((_) => _.id === o.value);
      if (P) {
        if (P.type === "trigger") {
          const _ = m(P.id);
          if (!_) return T("Fluxo finalizado após o gatilho.");
          o.value = _.target, h();
          return;
        }
        if (P.type === "send_message") {
          const _ = m(P.id);
          if (!_) return T("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (P.type === "delay") {
          const _ = m(P.id);
          if (!_) return T("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (P.type === "condition") {
          let _ = "false";
          if (P.data?.kind === "reply_matches") {
            const k = P.data?.value || "", V = P.data?.match_mode || "contains", D = !!P.data?.case_sensitive, F = P.data?.ignore_accents !== !1;
            _ = f(c.value, k, V, D, F) ? "true" : "false";
          } else
            _ = d.value ? "true" : "false";
          const g = m(P.id, _);
          if (!g) return T(`Fim do fluxo (ramificação ${_ === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = g.target, h();
          return;
        }
        P.type === "end" && T("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const P = n.nodes.find((_) => _.id === o.value);
      if (P) {
        if (P.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: P.data?.mode || "text",
            text: P.data?.text || P.data?.caption || "Mensagem enviada",
            data: P.data || {},
            time: v()
          }), setTimeout(p, 800);
          return;
        }
        if (P.type === "delay") {
          const _ = P.data?.delay_value || 15, g = P.data?.delay_unit || "minutes";
          u.value = `${_} ${g}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${_} ${g}...`,
            time: v()
          });
          return;
        }
        if (P.type === "condition") {
          if (P.data?.kind === "reply_matches") {
            const _ = P.data?.value || "", g = P.data?.match_mode || "contains", k = !!P.data?.case_sensitive, V = P.data?.ignore_accents !== !1, D = f(c.value, _, g, k, V);
            a.value.push({
              type: "system",
              text: `🔀 Avaliando resposta do cliente: "${c.value || "(vazia)"}" ${g === "exact" ? "igual a" : "contém"} "${_}" -> ${D ? "SIM" : "NÃO"}`,
              time: v()
            });
          } else {
            const _ = d.value;
            a.value.push({
              type: "system",
              text: `🔀 Avaliando condição: Pedido pago? -> ${_ ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
              time: v()
            });
          }
          setTimeout(p, 600);
          return;
        }
        if (P.type === "wait_reply") {
          s.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: v()
          });
          return;
        }
        P.type === "end" && T("Fluxo concluído.");
      }
    }
    function b() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: v()
      }), p());
    }
    function z() {
      if (!l.value.trim()) return;
      const P = l.value.trim();
      l.value = "", c.value = P, a.value.push({
        type: "user",
        text: P,
        time: v()
      });
      const _ = n.nodes.find((g) => g.id === o.value);
      if (_ && _.type === "wait_reply") {
        if (_.data?.filter_reply && _.data?.match_text && !f(
          P,
          _.data.match_text,
          _.data.match_mode || "contains",
          !!_.data.case_sensitive,
          _.data.ignore_accents !== !1
        )) {
          a.value.push({
            type: "system",
            text: `⚠️ Resposta "${P}" não atende ao filtro ("${_.data.match_text}"). O fluxo continua aguardando.`,
            time: v()
          });
          return;
        }
        s.value = !1;
        const g = m(_.id, "true");
        if (!g) return T("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = g.target, setTimeout(h, 500);
      }
    }
    function w() {
      s.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: v()
      });
      const P = n.nodes.find((_) => _.id === o.value);
      if (P && P.type === "wait_reply") {
        const _ = m(P.id, "false");
        if (!_) return T("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = _.target, setTimeout(h, 500);
      }
    }
    function T(P) {
      a.value.push({
        type: "system",
        text: `🏁 ${P}`,
        time: v()
      }), o.value = null;
    }
    return Ke(y), (P, _) => (S(), $("div", Y_, [
      i("div", K_, [
        i("div", Z_, [
          i("div", J_, [
            Y(N(ol), { class: "h-4 w-4 text-emerald-500" }),
            _[4] || (_[4] = i("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          _[11] || (_[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          i("div", Q_, [
            i("div", e2, [
              _[5] || (_[5] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              _[6] || (_[6] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              i("div", t2, [
                i("button", {
                  type: "button",
                  class: X(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: _[0] || (_[0] = (g) => d.value = !0)
                }, " SIM (Pago) ", 2),
                i("button", {
                  type: "button",
                  class: X(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: _[1] || (_[1] = (g) => d.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (S(), $("div", n2, [
              i("div", r2, [
                Y(N(Dn), { class: "h-4 w-4" }),
                i("span", null, "Aguardando: " + q(u.value), 1)
              ]),
              i("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: b
              }, [
                Y(N(Oh), { class: "h-3.5 w-3.5" }),
                _[7] || (_[7] = i("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : oe("", !0),
            s.value ? (S(), $("div", o2, [
              _[9] || (_[9] = i("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              i("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: w
              }, [..._[8] || (_[8] = [
                i("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : oe("", !0)
          ]),
          i("div", a2, [
            i("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: y
            }, [
              Y(N(lf), { class: "h-3.5 w-3.5" }),
              _[10] || (_[10] = i("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        i("div", s2, [
          i("div", i2, [
            i("div", l2, [
              _[13] || (_[13] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              i("div", null, [
                i("div", u2, q(e.flow.name), 1),
                _[12] || (_[12] = i("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            i("div", d2, [
              i("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: _[2] || (_[2] = (g) => r("close"))
              }, [
                Y(N(Ot), { class: "h-4 w-4" })
              ])
            ])
          ]),
          i("div", c2, [
            (S(!0), $(te, null, Ne(a.value, (g, k) => (S(), $(te, { key: k }, [
              g.type === "system" ? (S(), $("div", f2, [
                i("span", p2, q(g.text), 1)
              ])) : g.type === "bot" ? (S(), $("div", h2, [
                i("div", m2, [
                  Y(gl, {
                    text: g.text,
                    mode: g.mode,
                    caption: g.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  i("div", v2, [
                    i("span", null, q(g.time), 1),
                    Y(N(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : g.type === "user" ? (S(), $("div", g2, [
                i("div", y2, [
                  i("p", b2, q(g.text), 1),
                  i("div", x2, [
                    i("span", null, q(g.time), 1),
                    Y(N(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : oe("", !0)
            ], 64))), 128))
          ]),
          i("div", w2, [
            i("form", {
              class: "flex items-center gap-2",
              onSubmit: rn(z, ["prevent"])
            }, [
              re(i("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (g) => l.value = g),
                type: "text",
                disabled: !s.value,
                placeholder: s.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, _2), [
                [be, l.value]
              ]),
              i("button", {
                type: "submit",
                disabled: !s.value || !l.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                Y(N(Ct), { class: "h-4 w-4" })
              ], 8, k2)
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
function E2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const z2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function $2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return z2[e]?.[t];
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
    return t.kind === "order_status_is" ? `Status do pedido é "${wp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${_p.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "reply_matches" ? `Resposta ${t.match_mode === "exact" ? "igual a" : "contém"} "${t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : xp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?";
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
function P2(e, t = "") {
  const n = rr(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => rr(u) && u.id).map((u, c) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + c % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(c / 4) * 170
    },
    data: rr(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  a.some((u) => u.type === "trigger") || a.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: Sp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const s = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), d = o.filter((u) => rr(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, c) => {
    const f = rr(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${c}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: $2(s.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: a, edges: d };
}
function C2(e, t) {
  const n = rr(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = kp(n.delay_value, n.delay_unit)), n;
}
function A2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function T2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: C2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = A2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function O2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : E2(e),
    type: e,
    position: t,
    data: Sp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: xn(e)
  };
}
function st(e) {
  return String(e ?? "").trim();
}
function N2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? st(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : st(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? st(e.url) !== "" : t === "call" ? st(e.phoneNumber) !== "" : t === "copy" ? st(e.copyCode) !== "" : !0;
}
function R2(e) {
  return st(e?.title) !== "";
}
function Fi(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && st(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && st(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(N2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(R2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
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
function M2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, a = st(o.mode) || "text";
    t.push(...Fi(o, `Bloco "Enviar mensagem" (${a})`));
  }
  return t;
}
const I2 = { class: "flex h-full flex-col lg:flex-row" }, D2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, F2 = { class: "mb-4 flex items-center justify-between" }, B2 = { class: "space-y-2" }, L2 = ["onDragstart", "onClick"], U2 = { class: "text-xs font-bold" }, q2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, V2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, j2 = ["disabled"], H2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, G2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, W2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, X2 = { class: "flex-1 text-xs" }, Y2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, K2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Z2 = { class: "flex items-center gap-2" }, J2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, Q2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, ek = { class: "p-3" }, tk = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, nk = { class: "truncate" }, rk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, ok = { class: "flex items-center gap-2" }, ak = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, sk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, ik = { class: "flex items-center gap-1.5" }, lk = ["onClick"], uk = { class: "p-3" }, dk = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, ck = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, fk = {
  key: 1,
  class: "space-y-1"
}, pk = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, hk = { class: "text-[10px] text-zinc-500" }, mk = {
  key: 2,
  class: "space-y-1.5"
}, vk = { class: "text-[11px] leading-snug line-clamp-2" }, gk = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, yk = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, bk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, xk = { class: "flex items-center gap-2" }, wk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, _k = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, kk = ["onClick"], Sk = { class: "p-3" }, Ek = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, zk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, $k = { class: "flex items-center gap-2" }, Pk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, Ck = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Ak = ["onClick"], Tk = { class: "p-3 space-y-2.5 pb-12" }, Ok = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, Nk = { class: "line-clamp-2" }, Rk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Mk = { class: "flex items-center gap-2" }, Ik = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, Dk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Fk = ["onClick"], Bk = { class: "p-3 space-y-2.5 pb-12" }, Lk = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Uk = { class: "line-clamp-2" }, qk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Vk = { class: "flex items-center gap-2" }, jk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, Hk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Gk = ["onClick"], Wk = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = W([]), s = W([]), l = W(null), d = W(null), u = W([]), c = W(!1), f = {
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
    function v(A) {
      return f[A] || { label: A || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: y, addEdges: m, project: p, fitView: h } = je(), b = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Vn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: eu, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: Dn, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Mr, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: nu, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Ql, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], z = ee(() => r.flow?.trigger_event || ""), w = ee(() => a.value.find((A) => A.id === l.value) || null), T = ee(() => s.value.find((A) => A.id === d.value) || null), P = {
      type: "zaprei",
      markerEnd: sa.ArrowClosed,
      data: {}
    };
    Me(
      () => r.flow?.id,
      () => {
        const A = P2(r.flow?.graph_json, z.value);
        a.value = A.nodes, s.value = A.edges, l.value = null, d.value = null, setTimeout(() => h({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), y((A) => {
      m([{
        ...A,
        ...P,
        sourceHandle: A.sourceHandle,
        data: { sourceHandle: A.sourceHandle }
      }]);
    });
    function _(A) {
      l.value = A, d.value = null;
    }
    function g(A) {
      d.value = A, l.value = null;
    }
    function k() {
      l.value = null, d.value = null;
    }
    function V(A, I) {
      if (A === "trigger" && a.value.some((M) => M.type === "trigger"))
        return;
      const x = O2(A, I || { x: 420, y: 320 }, z.value);
      a.value = [...a.value, x], _(x.id);
    }
    function D(A) {
      !A || a.value.find((I) => I.id === A)?.type === "trigger" || (a.value = a.value.filter((I) => I.id !== A), s.value = s.value.filter((I) => I.source !== A && I.target !== A), l.value === A && (l.value = null));
    }
    function F(A) {
      s.value = s.value.filter((I) => I.id !== A), d.value === A && (d.value = null);
    }
    function C(A, I) {
      A.dataTransfer?.setData("application/zaprei-node", I), A.dataTransfer.effectAllowed = "move";
    }
    function j(A) {
      A.preventDefault(), A.dataTransfer.dropEffect = "move";
    }
    function E(A) {
      A.preventDefault();
      const I = A.dataTransfer?.getData("application/zaprei-node");
      if (!I) return;
      const x = A.currentTarget.getBoundingClientRect(), M = p({
        x: A.clientX - x.left,
        y: A.clientY - x.top
      });
      V(I, M);
    }
    function L() {
      const A = T2(a.value, s.value), I = M2(A);
      u.value = I, !I.length && o("save", A);
    }
    return t({
      requestSave: L,
      handleSave: L
    }), (A, I) => (S(), $("div", I2, [
      i("aside", D2, [
        i("div", F2, [
          I[8] || (I[8] = i("div", null, [
            i("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            i("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          i("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: I[0] || (I[0] = (x) => c.value = !0)
          }, [
            Y(N(ol), { class: "h-3.5 w-3.5" }),
            I[7] || (I[7] = i("span", null, "Simulador", -1))
          ])
        ]),
        i("div", B2, [
          (S(), $(te, null, Ne(b, (x) => i("div", {
            key: x.type,
            draggable: "true",
            class: X(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", x.color]),
            onDragstart: (M) => C(M, x.type),
            onClick: (M) => V(x.type)
          }, [
            (S(), Pe(Rt(x.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            i("div", null, [
              i("div", U2, q(x.title), 1),
              i("div", q2, q(x.desc), 1)
            ])
          ], 42, L2)), 64))
        ]),
        i("div", V2, [
          i("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: L
          }, [
            i("span", null, q(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, j2)
        ])
      ]),
      i("main", {
        class: "relative h-full flex-1",
        onDragover: j,
        onDrop: E
      }, [
        Y(xh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: ot(() => [
            u.value.length ? (S(), $("div", H2, [
              i("div", G2, [
                i("div", W2, [
                  Y(N(ka), { class: "h-4 w-4" })
                ]),
                i("div", X2, [
                  I[9] || (I[9] = i("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  i("ul", Y2, [
                    (S(!0), $(te, null, Ne(u.value, (x, M) => (S(), $("li", { key: M }, q(x), 1))), 128))
                  ])
                ]),
                i("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: I[1] || (I[1] = (x) => u.value = [])
                }, [
                  Y(N(Ot), { class: "h-4 w-4" })
                ])
              ])
            ])) : oe("", !0)
          ]),
          _: 1
        }),
        Y(N(m1), {
          nodes: a.value,
          "onUpdate:nodes": I[2] || (I[2] = (x) => a.value = x),
          edges: s.value,
          "onUpdate:edges": I[3] || (I[3] = (x) => s.value = x),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": P,
          onNodeClick: I[4] || (I[4] = (x) => _(x.node?.id)),
          onEdgeClick: I[5] || (I[5] = (x) => g(x.edge?.id)),
          onPaneClick: k
        }, {
          "edge-zaprei": ot((x) => [
            Y(nw, _a(x, { onRemove: F }), null, 16)
          ]),
          "node-trigger": ot((x) => [
            i("div", {
              class: X(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "source",
                position: N(ce).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", K2, [
                i("div", Z2, [
                  i("div", J2, [
                    Y(N(Vn), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Q2, q(N(xn)("trigger")), 1)
                ]),
                I[10] || (I[10] = i("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              i("div", ek, [
                i("div", tk, [
                  I[11] || (I[11] = i("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  i("span", nk, q(N(Co)("trigger", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": ot((x) => [
            i("div", {
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ce).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(ut), {
                type: "source",
                position: N(ce).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", rk, [
                i("div", ok, [
                  i("div", ak, [
                    Y(N(eu), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", sk, q(N(xn)("send_message")), 1)
                ]),
                i("div", ik, [
                  i("span", {
                    class: X(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", v(x.data?.mode).color])
                  }, q(v(x.data?.mode).label), 3),
                  i("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: rn((M) => D(x.id), ["stop"])
                  }, [
                    Y(N(Ot), { class: "h-3.5 w-3.5" })
                  ], 8, lk)
                ])
              ]),
              i("div", uk, [
                i("div", dk, [
                  x.data?.mode === "audio" ? (S(), $("div", ck, [
                    Y(N(Rh), { class: "h-3.5 w-3.5" }),
                    I[12] || (I[12] = i("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    I[13] || (I[13] = i("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : x.data?.mode === "poll" ? (S(), $("div", fk, [
                    i("div", pk, "📊 " + q(x.data?.question || "Pergunta da enquete..."), 1),
                    i("div", hk, q((x.data?.options || []).length) + " opções configuradas", 1)
                  ])) : x.data?.mode === "buttons" ? (S(), $("div", mk, [
                    i("p", vk, q(x.data?.text || "Texto da mensagem..."), 1),
                    (x.data?.buttons || []).length ? (S(), $("div", gk, [
                      (S(!0), $(te, null, Ne((x.data?.buttons || []).slice(0, 3), (M, O) => (S(), $("span", {
                        key: O,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, q(M.label || `Botão ${O + 1}`), 1))), 128))
                    ])) : oe("", !0)
                  ])) : (S(), $("div", yk, q(x.data?.text || x.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": ot((x) => [
            i("div", {
              class: X(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ce).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(ut), {
                type: "source",
                position: N(ce).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", bk, [
                i("div", xk, [
                  i("div", wk, [
                    Y(N(Dn), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", _k, q(N(xn)("delay")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((M) => D(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, kk)
              ]),
              i("div", Sk, [
                i("div", Ek, [
                  I[14] || (I[14] = i("span", { class: "relative flex h-2 w-2" }, [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    i("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  i("span", null, q(N(Co)("delay", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": ot((x) => [
            i("div", {
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ce).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", zk, [
                i("div", $k, [
                  i("div", Pk, [
                    Y(N(Mr), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Ck, q(N(xn)("condition")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((M) => D(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Ak)
              ]),
              i("div", Tk, [
                i("div", Ok, [
                  i("span", Nk, q(N(Co)("condition", x.data)), 1)
                ]),
                I[15] || (I[15] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                Y(N(ut), {
                  id: "yes",
                  type: "source",
                  position: N(ce).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                I[16] || (I[16] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                Y(N(ut), {
                  id: "no",
                  type: "source",
                  position: N(ce).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": ot((x) => [
            i("div", {
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ce).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Rk, [
                i("div", Mk, [
                  i("div", Ik, [
                    Y(N(nu), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Dk, q(N(xn)("wait_reply")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((M) => D(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Fk)
              ]),
              i("div", Bk, [
                i("div", Lk, [
                  i("span", Uk, q(N(Co)("wait_reply", x.data)), 1)
                ]),
                I[17] || (I[17] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                Y(N(ut), {
                  id: "replied",
                  type: "source",
                  position: N(ce).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                I[18] || (I[18] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                Y(N(ut), {
                  id: "timeout",
                  type: "source",
                  position: N(ce).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": ot((x) => [
            i("div", {
              class: X(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ce).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", qk, [
                i("div", Vk, [
                  i("div", jk, [
                    Y(N(Ql), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Hk, q(N(xn)("end")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((M) => D(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Gk)
              ]),
              I[19] || (I[19] = i("div", { class: "p-3" }, [
                i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: ot(() => [
            Y(N(S1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            Y(N(tw))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      Y(X_, {
        node: w.value,
        edge: T.value,
        onRemoveNode: D,
        onRemoveEdge: F
      }, null, 8, ["node", "edge"]),
      c.value ? (S(), Pe(S2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: s.value,
        onClose: I[6] || (I[6] = (x) => c.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : oe("", !0)
    ]));
  }
}, Xk = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Yk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Kk = { class: "flex items-center gap-3" }, Zk = ["disabled"], Jk = { class: "flex items-center gap-2" }, Qk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, e5 = { class: "text-sm font-bold" }, t5 = ["disabled"], n5 = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, Ap = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(null), a = W(!1), s = W("");
    function l() {
      o.value?.requestSave?.();
    }
    async function d(u) {
      a.value = !0, s.value = "";
      try {
        await Ee.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (c) {
        s.value = c.message, a.value = !1;
      }
    }
    return (u, c) => (S(), Pe(Yc, { to: "body" }, [
      i("div", Xk, [
        i("header", Yk, [
          i("div", Kk, [
            i("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: a.value,
              onClick: c[0] || (c[0] = (f) => r("close"))
            }, [
              Y(N(Zc), { class: "h-4 w-4 text-emerald-500" }),
              c[1] || (c[1] = i("span", null, "Voltar para Automações", -1))
            ], 8, Zk),
            c[3] || (c[3] = i("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            i("div", Jk, [
              i("div", Qk, [
                Y(N(rf), { class: "h-4 w-4" })
              ]),
              i("div", null, [
                i("div", e5, q(e.flow.name || "Editor de Fluxo Visual"), 1),
                c[2] || (c[2] = i("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          i("button", {
            type: "button",
            disabled: a.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: l
          }, [
            a.value ? (S(), Pe(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (S(), Pe(N(Ih), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, q(a.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, t5)
        ]),
        s.value ? (S(), $("p", n5, [
          Y(N(ka), { class: "h-4 w-4 shrink-0" }),
          i("span", null, q(s.value), 1)
        ])) : oe("", !0),
        Y(Wk, {
          ref_key: "canvas",
          ref: o,
          flow: e.flow,
          saving: a.value,
          class: "flex-1 overflow-hidden",
          onSave: d
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, r5 = { class: "truncate" }, o5 = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, a5 = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, s5 = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, i5 = ["checked", "onChange"], l5 = { class: "truncate" }, pr = {
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
    const n = e, r = t, o = W(!1), a = W(null);
    function s(y) {
      a.value && !a.value.contains(y.target) && u();
    }
    function l() {
      o.value ? u() : d();
    }
    function d() {
      o.value = !0, document.addEventListener("click", s, !0);
    }
    function u() {
      o.value = !1, document.removeEventListener("click", s, !0);
    }
    function c(y) {
      r("update:modelValue", n.modelValue.includes(y) ? n.modelValue.filter((m) => m !== y) : [...n.modelValue, y]);
    }
    function f() {
      r("update:modelValue", []);
    }
    wa(() => document.removeEventListener("click", s, !0));
    const v = ee(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, m) => (S(), $("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      i("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        i("span", r5, q(v.value), 1),
        Y(N(Ah), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (S(), $("div", o5, [
        e.options.length ? (S(), $(te, { key: 1 }, [
          e.matchMode ? (S(), $("div", s5, [
            i("button", {
              type: "button",
              class: X(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: m[0] || (m[0] = (p) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            i("button", {
              type: "button",
              class: X(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: m[1] || (m[1] = (p) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : oe("", !0),
          e.modelValue.length ? (S(), $("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : oe("", !0),
          (S(!0), $(te, null, Ne(e.options, (p) => (S(), $("label", {
            key: p.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            i("span", {
              class: X(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(p.value) ? (S(), Pe(N(Qc), {
                key: 0,
                class: "h-3 w-3"
              })) : oe("", !0)
            ], 2),
            i("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(p.value),
              onChange: (h) => c(p.value)
            }, null, 40, i5),
            i("span", l5, q(p.label), 1)
          ]))), 128))
        ], 64)) : (S(), $("p", a5, "Nenhuma opção disponível."))
      ])) : oe("", !0)
    ], 512));
  }
}, u5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, d5 = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, c5 = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, f5 = { class: "flex items-center gap-2.5" }, p5 = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, h5 = { class: "space-y-4 p-5" }, m5 = ["value"], v5 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, g5 = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, y5 = ["disabled"], b5 = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W([]), a = W(!1), s = W(""), l = _n({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Ln[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), d = ee(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await Ee.products()).products || [];
      } catch {
        o.value = [];
      }
    }
    async function c() {
      if (!l.name.trim()) {
        s.value = "Informe um nome para o fluxo.";
        return;
      }
      a.value = !0, s.value = "";
      try {
        await Ee.updateFlow(n.flow.id, {
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
    return Ke(u), (f, v) => (S(), $("div", u5, [
      i("div", d5, [
        i("div", c5, [
          i("div", f5, [
            i("div", p5, [
              Y(N(uf), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          i("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (y) => r("close"))
          }, [
            Y(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", h5, [
          i("div", null, [
            v[6] || (v[6] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            re(i("input", {
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
            re(i("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (y) => l.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (S(!0), $(te, null, Ne(N(Ln), (y) => (S(), $("option", {
                key: y.id,
                value: y.eventClass
              }, q(y.label), 9, m5))), 128))
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
            Y(pr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (y) => l.product_ids = y),
              options: d.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          s.value ? (S(), $("p", v5, q(s.value), 1)) : oe("", !0)
        ]),
        i("div", g5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v[4] || (v[4] = (y) => r("close"))
          }, " Cancelar "),
          i("button", {
            type: "button",
            disabled: a.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: c
          }, q(a.value ? "Salvando…" : "Salvar"), 9, y5)
        ])
      ])
    ]));
  }
}, x5 = [
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
], w5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, _5 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, k5 = ["onClick"], S5 = { class: "flex items-center justify-between" }, E5 = { class: "text-2xl" }, z5 = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, $5 = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, P5 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, C5 = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (S(), $("div", w5, [
      n[1] || (n[1] = i("div", { class: "mb-4 flex items-center justify-between" }, [
        i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      i("div", _5, [
        (S(!0), $(te, null, Ne(N(x5), (r) => (S(), $("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          i("div", null, [
            i("div", S5, [
              i("span", E5, q(r.icon), 1),
              i("span", z5, q(r.badge), 1)
            ]),
            i("h3", $5, q(r.title), 1),
            i("p", P5, q(r.description), 1)
          ]),
          n[0] || (n[0] = i("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            i("span", null, "Usar modelo"),
            i("span", null, "→")
          ], -1))
        ], 8, k5))), 128))
      ])
    ]));
  }
}, A5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, T5 = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, O5 = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, N5 = { class: "flex items-center gap-3" }, R5 = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, M5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, I5 = { class: "text-zinc-700 dark:text-zinc-300" }, D5 = { class: "p-6 space-y-4" }, F5 = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, B5 = { class: "flex items-center gap-2 font-bold text-sm" }, L5 = { class: "text-xs" }, U5 = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, q5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V5 = ["value"], j5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, H5 = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, G5 = ["disabled"], W5 = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(""), a = W(""), s = W(!1), l = W(""), d = W(!1), u = W("");
    function c(p) {
      const h = String(p || "").replace(/\D/g, "").slice(0, 11);
      return h ? h.length <= 2 ? `(${h}` : h.length <= 6 ? `(${h.slice(0, 2)}) ${h.slice(2)}` : h.length <= 10 ? `(${h.slice(0, 2)}) ${h.slice(2, 6)}-${h.slice(6)}` : `(${h.slice(0, 2)}) ${h.slice(2, 7)}-${h.slice(7, 11)}` : "";
    }
    function f(p) {
      const h = p.target.value;
      o.value = c(h);
    }
    const v = ee(() => o.value.replace(/\D/g, "")), y = ee(() => v.value.length >= 10 && v.value.length <= 11);
    async function m() {
      if (!(!y.value || s.value)) {
        s.value = !0, l.value = "", d.value = !1;
        try {
          await Ee.testFlow(n.flow.id, {
            phone: v.value,
            customer_name: a.value.trim() || void 0
          }), u.value = o.value, d.value = !0, r("tested", { phone: v.value, name: a.value });
        } catch (p) {
          l.value = p.message || "Falha ao disparar teste.";
        } finally {
          s.value = !1;
        }
      }
    }
    return (p, h) => (S(), $("div", A5, [
      i("div", T5, [
        i("div", O5, [
          i("div", N5, [
            i("div", R5, [
              Y(N(Ct), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              h[4] || (h[4] = i("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              i("p", M5, [
                h[3] || (h[3] = ne("Fluxo: ", -1)),
                i("strong", I5, q(e.flow.name), 1)
              ])
            ])
          ]),
          i("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (b) => r("close"))
          }, [
            Y(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", D5, [
          h[13] || (h[13] = i("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            i("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          d.value ? (S(), $("div", F5, [
            i("div", B5, [
              Y(N(jr), { class: "h-5 w-5 text-emerald-500" }),
              h[5] || (h[5] = i("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            i("p", L5, [
              h[6] || (h[6] = ne(" As mensagens foram enviadas para ", -1)),
              i("strong", null, q(u.value), 1),
              h[7] || (h[7] = ne('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : oe("", !0),
          l.value ? (S(), $("div", U5, q(l.value), 1)) : oe("", !0),
          i("form", {
            class: "space-y-4",
            onSubmit: rn(m, ["prevent"])
          }, [
            i("div", null, [
              h[9] || (h[9] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              i("div", q5, [
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
              i("div", j5, [
                Y(N(Fh), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                re(i("input", {
                  "onUpdate:modelValue": h[1] || (h[1] = (b) => a.value = b),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [be, a.value]
                ])
              ]),
              h[12] || (h[12] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                ne(" Substitui as tags "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                ne(" e "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                ne(". ")
              ], -1))
            ])
          ], 32)
        ]),
        i("div", H5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[2] || (h[2] = (b) => r("close"))
          }, q(d.value ? "Concluir" : "Cancelar"), 1),
          i("button", {
            type: "button",
            disabled: !y.value || s.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: m
          }, [
            s.value ? (S(), Pe(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (S(), Pe(N(Ct), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, q(s.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, G5)
        ])
      ])
    ]));
  }
}, X5 = { class: "space-y-4 text-zinc-900 dark:text-white" }, Y5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, K5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, Z5 = { class: "flex flex-wrap items-center gap-2" }, J5 = { class: "relative w-64" }, Q5 = ["value"], eS = { class: "flex items-center gap-3" }, tS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, nS = ["disabled"], rS = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, oS = { class: "grid gap-3 sm:grid-cols-3" }, aS = ["value"], sS = { class: "flex gap-2" }, iS = ["disabled"], lS = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, uS = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, dS = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, cS = {
  key: 4,
  class: "py-10 text-center"
}, fS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, pS = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, hS = { class: "flex items-start justify-between gap-2" }, mS = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, vS = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, gS = ["title", "disabled", "onClick"], yS = { class: "mt-2" }, bS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, xS = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, wS = { class: "flex items-center gap-1" }, _S = ["onClick"], kS = ["disabled", "onClick"], SS = ["disabled", "onClick"], ES = ["disabled", "onClick"], zS = ["onClick"], $S = ["onClick"], PS = {
  __name: "FlowsPanel",
  setup(e) {
    const t = W([]), n = W([]), r = W(!0), o = W(!1), a = W(""), s = W(""), l = W(!1), d = W(""), u = W("all"), c = W(null), f = W(null), v = W(null), y = W({ name: "", trigger_event: Ln[3].eventClass, product_ids: [] }), m = W(!1), p = ee(() => {
      const j = d.value.trim().toLowerCase();
      return t.value.filter((E) => u.value !== "all" && E.trigger_event !== u.value ? !1 : !j || `${E.name} ${qo(E.trigger_event)}`.toLowerCase().includes(j));
    }), h = ee(() => n.value.map((j) => ({ value: j.id, label: j.name })));
    function b(j) {
      if (!j || !j.length) return "Todos os produtos";
      const E = j.map((L) => n.value.find((A) => A.id === L)?.name).filter(Boolean);
      return E.length ? E.length > 2 ? `${E.slice(0, 2).join(", ")} +${E.length - 2}` : E.join(", ") : "Todos os produtos";
    }
    async function z() {
      r.value = !0, a.value = "";
      try {
        const [j, E] = await Promise.all([Ee.flows(), Ee.products()]);
        t.value = j.flows || [], n.value = E.products || [];
      } catch (j) {
        a.value = j.message;
      } finally {
        r.value = !1;
      }
    }
    async function w(j) {
      o.value = !0, a.value = "";
      try {
        await j(), await z();
      } catch (E) {
        a.value = E.message;
      } finally {
        o.value = !1;
      }
    }
    function T(j) {
      v.value = j;
    }
    function P({ phone: j }) {
      s.value = `Fluxo "${v.value?.name}" disparado para ${j}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function _() {
      const j = y.value.name.trim() || qo(y.value.trigger_event);
      return w(async () => {
        await Ee.createFlow({
          name: j,
          trigger_event: y.value.trigger_event,
          product_ids: y.value.product_ids.length ? y.value.product_ids : null,
          is_active: !0,
          graph_json: zp(y.value.trigger_event)
        }), y.value.name = "", y.value.product_ids = [], m.value = !1;
      });
    }
    const g = (j) => w(() => Ee.updateFlow(j.id, { is_active: !j.is_active })), k = (j) => w(() => Ee.duplicateFlow(j.id));
    function V(j) {
      if (window.confirm(`Excluir o fluxo "${j.name}"?`))
        return w(() => Ee.deleteFlow(j.id));
    }
    function D(j) {
      const E = {
        name: j.name,
        trigger_event: j.trigger_event,
        product_ids: j.product_ids,
        graph_json: j.graph_json
      }, L = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), A = URL.createObjectURL(L), I = document.createElement("a");
      I.href = A, I.download = `${(j.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, I.click(), URL.revokeObjectURL(A);
    }
    async function F(j) {
      const E = j.target.files?.[0];
      if (E) {
        l.value = !0, a.value = "", s.value = "";
        try {
          const L = JSON.parse(await E.text());
          if (!L || typeof L != "object" || !L.graph_json || !L.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const A = new Set(n.value.map((x) => x.id)), I = (Array.isArray(L.product_ids) ? L.product_ids : []).filter((x) => A.has(x));
          await Ee.createFlow({
            name: L.name ? `${L.name} (importado)` : "Fluxo importado",
            trigger_event: L.trigger_event,
            product_ids: I.length ? I : null,
            graph_json: L.graph_json,
            is_active: !1
          }), s.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await z();
        } catch (L) {
          a.value = L.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, j.target.value = "";
        }
      }
    }
    function C(j) {
      return w(() => Ee.createFlow({
        name: j.title,
        trigger_event: j.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: j.graph(j.eventClass)
      }));
    }
    return Ke(z), (j, E) => (S(), $("div", X5, [
      Y(C5, { onUse: C }),
      i("div", Y5, [
        i("div", K5, [
          i("div", Z5, [
            i("div", J5, [
              Y(N(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              re(i("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (L) => d.value = L),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [be, d.value]
              ])
            ]),
            re(i("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (L) => u.value = L),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              E[10] || (E[10] = i("option", { value: "all" }, "Todos os eventos", -1)),
              (S(!0), $(te, null, Ne(N(Ln), (L) => (S(), $("option", {
                key: L.id,
                value: L.eventClass
              }, q(L.label), 9, Q5))), 128))
            ], 512), [
              [tt, u.value]
            ])
          ]),
          i("div", eS, [
            i("span", tS, q(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            i("label", {
              class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              Y(N(df), { class: "h-4 w-4" }),
              i("span", null, q(l.value ? "Importando…" : "Importar"), 1),
              i("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: l.value,
                onChange: F
              }, null, 40, nS)
            ], 2),
            i("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: E[2] || (E[2] = (L) => m.value = !m.value)
            }, [
              Y(N(sf), { class: "h-4 w-4" }),
              E[11] || (E[11] = i("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        m.value ? (S(), $("div", rS, [
          i("div", oS, [
            i("div", null, [
              E[12] || (E[12] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              re(i("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": E[3] || (E[3] = (L) => y.value.name = L),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [be, y.value.name]
              ])
            ]),
            i("div", null, [
              E[13] || (E[13] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              re(i("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": E[4] || (E[4] = (L) => y.value.trigger_event = L),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (S(!0), $(te, null, Ne(N(Ln), (L) => (S(), $("option", {
                  key: L.id,
                  value: L.eventClass
                }, q(L.label), 9, aS))), 128))
              ], 512), [
                [tt, y.value.trigger_event]
              ])
            ]),
            i("div", null, [
              E[14] || (E[14] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              Y(pr, {
                modelValue: y.value.product_ids,
                "onUpdate:modelValue": E[5] || (E[5] = (L) => y.value.product_ids = L),
                options: h.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          i("div", sS, [
            i("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: _
            }, " Criar fluxo em branco ", 8, iS),
            i("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: E[6] || (E[6] = (L) => m.value = !1)
            }, " Cancelar ")
          ])
        ])) : oe("", !0),
        a.value ? (S(), $("p", lS, q(a.value), 1)) : s.value ? (S(), $("p", uS, q(s.value), 1)) : oe("", !0),
        r.value ? (S(), $("div", dS, [
          Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          E[15] || (E[15] = i("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (S(), $("div", pS, [
          (S(!0), $(te, null, Ne(p.value, (L) => (S(), $("div", {
            key: L.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            i("div", null, [
              i("div", hS, [
                i("div", null, [
                  i("span", mS, q(N(qo)(L.trigger_event)), 1),
                  i("h3", vS, q(L.name), 1)
                ]),
                i("button", {
                  type: "button",
                  class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", L.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: L.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (A) => g(L)
                }, [
                  i("span", {
                    class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", L.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, gS)
              ]),
              i("div", yS, [
                i("span", bS, q(b(L.product_ids)), 1)
              ])
            ]),
            i("div", xS, [
              i("div", wS, [
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (A) => f.value = L
                }, [
                  Y(N(uf), { class: "h-4 w-4" })
                ], 8, _S),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (A) => k(L)
                }, [
                  Y(N(ef), { class: "h-4 w-4" })
                ], 8, kS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (A) => V(L)
                }, [
                  Y(N(Jo), { class: "h-4 w-4" })
                ], 8, SS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (A) => T(L)
                }, [
                  Y(N(Ct), { class: "h-4 w-4" })
                ], 8, ES),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (A) => D(L)
                }, [
                  Y(N(tf), { class: "h-4 w-4" })
                ], 8, zS)
              ]),
              i("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (A) => c.value = L
              }, [
                Y(N(of), { class: "h-3.5 w-3.5" }),
                E[18] || (E[18] = i("span", null, "Editar Visual", -1))
              ], 8, $S)
            ])
          ]))), 128))
        ])) : (S(), $("div", cS, [
          i("div", fS, [
            Y(N(Vn), { class: "h-6 w-6" })
          ]),
          E[16] || (E[16] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          E[17] || (E[17] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (S(), Pe(Ap, {
        key: 0,
        flow: c.value,
        onClose: E[7] || (E[7] = (L) => c.value = null),
        onSaved: z
      }, null, 8, ["flow"])) : oe("", !0),
      f.value ? (S(), Pe(b5, {
        key: 1,
        flow: f.value,
        onClose: E[8] || (E[8] = (L) => f.value = null),
        onSaved: z
      }, null, 8, ["flow"])) : oe("", !0),
      v.value ? (S(), Pe(W5, {
        key: 2,
        flow: v.value,
        onClose: E[9] || (E[9] = (L) => v.value = null),
        onTested: P
      }, null, 8, ["flow"])) : oe("", !0)
    ]));
  }
}, CS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, AS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, TS = { class: "flex items-center gap-2" }, OS = ["disabled"], NS = { class: "mt-4 grid grid-cols-3 gap-3" }, RS = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, MS = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, IS = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, DS = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, FS = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, BS = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, LS = { class: "mt-4 flex flex-wrap items-end gap-2" }, US = { class: "w-48" }, qS = { class: "w-48" }, VS = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, jS = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, HS = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, GS = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, WS = {
  key: 3,
  class: "py-10 text-center"
}, XS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, YS = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, KS = { class: "w-full text-left text-xs" }, ZS = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, JS = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, QS = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, eE = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, tE = { class: "px-3 py-2.5" }, nE = { class: "px-3 py-2.5" }, rE = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, oE = ["title"], aE = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, sE = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, iE = { class: "px-3 py-2.5" }, lE = ["onClick"], uE = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = W([]), r = W([]), o = W({ all: 0, buyers: 0, imported: 0 }), a = W(!0), s = W(""), l = W(""), d = W("all"), u = W([]), c = W("or"), f = W([]), v = W(""), y = W(!1), m = ee(() => r.value.map((P) => ({ value: P.name, label: P.name }))), p = ee(() => {
      const P = v.value.trim().toLowerCase();
      return n.value.filter((_) => d.value === "buyer" && _.source !== "buyer" || d.value === "imported" && _.source !== "imported" || u.value.length && !(c.value === "and" ? u.value.every((k) => _.products.includes(k)) : _.products.some((k) => u.value.includes(k))) || f.value.length && _.products.some((g) => f.value.includes(g)) ? !1 : !P || `${_.name} ${_.phone} ${_.email}`.toLowerCase().includes(P));
    });
    async function h() {
      a.value = !0, s.value = "";
      try {
        const [P, _] = await Promise.all([Ee.contacts(), Ee.products()]);
        n.value = P.contacts || [], o.value = P.counts || o.value, r.value = _.products || [];
      } catch (P) {
        s.value = P.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(h);
    const b = "\uFEFF";
    function z() {
      const P = t.map((V) => V.join(",")).join(`\r
`), _ = new Blob([b + P], { type: "text/csv;charset=utf-8" }), g = URL.createObjectURL(_), k = document.createElement("a");
      k.href = g, k.download = "zaprei-modelo-importacao.csv", k.click(), URL.revokeObjectURL(g);
    }
    async function w(P) {
      const _ = P.target.files?.[0];
      if (_) {
        y.value = !0, s.value = "", l.value = "";
        try {
          const { imported: g } = await Ee.importContacts(_);
          l.value = `${g} contato(s) importado(s).`, await h();
        } catch (g) {
          s.value = g.message;
        } finally {
          y.value = !1, P.target.value = "";
        }
      }
    }
    async function T(P) {
      if (window.confirm(`Remover ${P.name}?`)) {
        s.value = "";
        try {
          await Ee.deleteContact(P.id), await h();
        } catch (_) {
          s.value = _.message;
        }
      }
    }
    return (P, _) => (S(), $("div", CS, [
      i("div", AS, [
        _[6] || (_[6] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        i("div", TS, [
          i("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: z
          }, [
            Y(N(tf), { class: "h-4 w-4" }),
            _[5] || (_[5] = i("span", null, "Baixar exemplo", -1))
          ]),
          i("label", {
            class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            Y(N(df), { class: "h-4 w-4" }),
            i("span", null, q(y.value ? "Importando…" : "Importar CSV"), 1),
            i("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: w
            }, null, 40, OS)
          ], 2)
        ])
      ]),
      i("div", NS, [
        i("div", RS, [
          i("div", MS, q(o.value.all), 1),
          _[7] || (_[7] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        i("div", IS, [
          i("div", DS, q(o.value.buyers), 1),
          _[8] || (_[8] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        i("div", FS, [
          i("div", BS, q(o.value.imported), 1),
          _[9] || (_[9] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      i("div", LS, [
        i("div", null, [
          _[11] || (_[11] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          re(i("select", {
            "onUpdate:modelValue": _[0] || (_[0] = (g) => d.value = g),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [..._[10] || (_[10] = [
            i("option", { value: "all" }, "Todas as origens", -1),
            i("option", { value: "buyer" }, "Apenas compradores", -1),
            i("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [tt, d.value]
          ])
        ]),
        i("div", US, [
          _[12] || (_[12] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          Y(pr, {
            modelValue: u.value,
            "onUpdate:modelValue": _[1] || (_[1] = (g) => u.value = g),
            mode: c.value,
            "onUpdate:mode": _[2] || (_[2] = (g) => c.value = g),
            options: m.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        i("div", qS, [
          _[13] || (_[13] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          Y(pr, {
            modelValue: f.value,
            "onUpdate:modelValue": _[3] || (_[3] = (g) => f.value = g),
            options: m.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        re(i("input", {
          "onUpdate:modelValue": _[4] || (_[4] = (g) => v.value = g),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [be, v.value]
        ]),
        i("span", VS, q(p.value.length) + " de " + q(n.value.length) + " contato(s)", 1)
      ]),
      _[17] || (_[17] = i("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        ne(" O CSV aceita as colunas "),
        i("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        ne(" (máximo de 10 MB). ")
      ], -1)),
      s.value ? (S(), $("p", jS, q(s.value), 1)) : l.value ? (S(), $("p", HS, q(l.value), 1)) : oe("", !0),
      a.value ? (S(), $("div", GS, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        _[14] || (_[14] = i("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? (S(), $("div", YS, [
        i("table", KS, [
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
          i("tbody", ZS, [
            (S(!0), $(te, null, Ne(p.value, (g) => (S(), $("tr", {
              key: g.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", JS, q(g.name), 1),
              i("td", QS, q(g.phone), 1),
              i("td", eE, q(g.email || "—"), 1),
              i("td", tE, [
                i("span", {
                  class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", g.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, q(g.origin), 3)
              ]),
              i("td", nE, [
                g.products.length ? (S(), $("div", rE, [
                  (S(!0), $(te, null, Ne(g.products.slice(0, 2), (k) => (S(), $("span", {
                    key: k,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: k
                  }, q(k), 9, oE))), 128)),
                  g.products.length > 2 ? (S(), $("span", aE, "+" + q(g.products.length - 2), 1)) : oe("", !0)
                ])) : (S(), $("span", sE, "—"))
              ]),
              i("td", iE, [
                g.can_delete ? (S(), $("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (k) => T(g)
                }, [
                  Y(N(Jo), { class: "h-3.5 w-3.5" })
                ], 8, lE)) : oe("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (S(), $("div", WS, [
        i("div", XS, [
          Y(N(Rn), { class: "h-6 w-6" })
        ]),
        _[15] || (_[15] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, dE = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, cE = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, fE = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, pE = { class: "flex items-center gap-3" }, hE = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, mE = { class: "flex items-center gap-2" }, vE = { key: 1 }, gE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, yE = { class: "flex-1 overflow-y-auto p-6" }, bE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, xE = { class: "space-y-2" }, wE = { class: "grid grid-cols-2 gap-3" }, _E = { class: "flex items-center gap-2" }, kE = { class: "flex items-center gap-2" }, SE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, EE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, zE = ["value"], $E = { class: "space-y-2" }, PE = { class: "grid grid-cols-2 gap-3" }, CE = { class: "flex items-center gap-2" }, AE = { class: "flex items-center gap-2" }, TE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, OE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, NE = ["min"], RE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, ME = { class: "flex items-center justify-between" }, IE = { class: "flex items-center gap-2" }, DE = { class: "text-xs font-bold text-emerald-400" }, FE = {
  key: 1,
  class: "space-y-4"
}, BE = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, LE = { class: "dark space-y-3" }, UE = { class: "relative" }, qE = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, VE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, jE = { class: "text-xs font-normal text-zinc-500" }, HE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, GE = { class: "w-full text-left text-xs" }, WE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, XE = { class: "w-10 px-3 py-2.5 text-center" }, YE = ["checked"], KE = { class: "divide-y divide-zinc-800/60" }, ZE = ["onClick"], JE = ["checked", "onChange"], QE = { class: "px-3 py-2" }, ez = { class: "font-medium text-white" }, tz = { class: "text-[11px] text-zinc-500" }, nz = { class: "px-3 py-2 font-mono text-zinc-300" }, rz = { class: "px-3 py-2" }, oz = { class: "px-3 py-2" }, az = { class: "flex max-w-[200px] flex-wrap gap-1" }, sz = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, iz = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, lz = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, uz = { key: 2 }, dz = {
  key: 0,
  class: "mx-auto max-w-xl space-y-4 py-2"
}, cz = { class: "rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-6" }, fz = { class: "flex items-center gap-3 border-b border-zinc-800 pb-4" }, pz = { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400" }, hz = { class: "text-base font-bold text-white" }, mz = { class: "mt-4 space-y-3 text-xs text-zinc-300" }, vz = { class: "flex justify-between" }, gz = { class: "font-medium text-white" }, yz = { class: "flex justify-between" }, bz = { class: "font-medium text-emerald-400" }, xz = { class: "flex justify-between" }, wz = {
  key: 1,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, _z = { class: "dark" }, kz = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, Sz = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, Ez = { class: "grid grid-cols-2 gap-3 text-xs" }, zz = { class: "mt-0.5 font-semibold text-white" }, $z = { class: "mt-0.5 text-base font-black text-emerald-400" }, Pz = { class: "mt-0.5 text-zinc-300" }, Cz = { class: "text-xs text-zinc-500" }, Az = {
  key: 0,
  class: "mt-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs font-semibold text-emerald-400"
}, Tz = {
  key: 1,
  class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300"
}, Oz = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, Nz = { key: 1 }, Rz = { class: "flex items-center gap-3" }, Mz = ["disabled"], Iz = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = W(1), o = W(!1), a = W(""), s = W([]), l = W([]), d = W([]), u = W(!1), c = W("all"), f = W([]), v = W("or"), y = W([]), m = W(""), p = W({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), h = ee(() => d.value.find((I) => I.id === p.value.flow_id)), b = ee(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), z = bp.filter((I) => I.token.startsWith("{{customer."));
    let w = !0;
    Me(() => p.value.message_data.mode, (I) => {
      if (w) {
        w = !1;
        return;
      }
      Object.assign(p.value.message_data, Ep(I));
    });
    const T = ee(() => l.value.map((I) => ({ value: I.name, label: I.name }))), P = ee(() => {
      const I = m.value.trim().toLowerCase();
      return s.value.filter((x) => c.value === "buyers" && x.source !== "buyer" || c.value === "imported" && x.source !== "imported" || f.value.length && !(v.value === "and" ? f.value.every((O) => x.products.includes(O)) : x.products.some((O) => f.value.includes(O))) || y.value.length && x.products.some((M) => y.value.includes(M)) ? !1 : !I || `${x.name} ${x.phone}`.toLowerCase().includes(I));
    }), _ = ee(() => P.value.length > 0 && P.value.every((I) => p.value.selected_contact_keys.includes(I.id)));
    function g(I) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(I) ? x.filter((M) => M !== I) : [...x, I];
    }
    function k() {
      const I = P.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...I])];
    }
    function V() {
      const I = new Set(P.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !I.has(x));
    }
    const D = ee(() => s.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), F = ee(() => ({
      customer: { name: D.value.name, first_name: (D.value.name || "").split(" ")[0] || D.value.name }
    })), C = ee(() => {
      const I = p.value.message_data;
      return Di(I.text || I.question || I.title || "", F.value);
    }), j = ee(() => Di(p.value.message_data.caption || "", F.value));
    async function E() {
      u.value = !0;
      try {
        const [I, x, M] = await Promise.all([
          Ee.contacts(),
          Ee.products(),
          Ee.flows()
        ]);
        s.value = I.contacts || [], l.value = x.products || [], d.value = M.flows || [];
      } catch {
        s.value = [];
      } finally {
        u.value = !1;
      }
    }
    function L() {
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
          const I = Fi(p.value.message_data, "Mensagem");
          if (I.length) {
            a.value = I[0];
            return;
          }
          if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
            a.value = "Escreva o texto da mensagem antes de avançar.";
            return;
          }
        }
      r.value++;
    }
    async function A() {
      if (a.value = "", p.value.action_type === "flow") {
        if (!p.value.flow_id) {
          a.value = "Selecione um fluxo de automação para disparar.", r.value = 1;
          return;
        }
      } else {
        const I = Fi(p.value.message_data, "Mensagem");
        if (I.length) {
          a.value = I[0], r.value = 3;
          return;
        }
        if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
          a.value = "Escreva o texto da mensagem antes de iniciar o disparo.", r.value = 3;
          return;
        }
      }
      o.value = !0;
      try {
        await Ee.createCampaign({
          name: p.value.name,
          flow_id: p.value.action_type === "flow" ? p.value.flow_id : null,
          message_data: p.value.action_type === "message" ? p.value.message_data : null,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (I) {
        a.value = I.message;
      } finally {
        o.value = !1;
      }
    }
    return Ke(E), (I, x) => (S(), $("div", dE, [
      i("div", cE, [
        i("div", fE, [
          i("div", pE, [
            i("div", hE, [
              Y(N(Ct), { class: "h-5 w-5" })
            ]),
            x[17] || (x[17] = i("div", null, [
              i("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              i("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          i("div", mE, [
            (S(), $(te, null, Ne(4, (M) => i("div", {
              key: M,
              class: X(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === M ? "bg-emerald-500 text-zinc-950" : r.value > M ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > M ? (S(), Pe(N(Qc), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (S(), $("span", vE, q(M), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (S(), $("div", gE, [
          Y(N(ka), { class: "h-4 w-4 shrink-0" }),
          i("span", null, q(a.value), 1)
        ])) : oe("", !0),
        i("div", yE, [
          r.value === 1 ? (S(), $("div", bE, [
            i("div", null, [
              x[18] || (x[18] = i("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              re(i("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (M) => p.value.name = M),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [be, p.value.name]
              ]),
              x[19] || (x[19] = i("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            i("div", xE, [
              x[27] || (x[27] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Tipo de Envio da Campanha *", -1)),
              i("div", wE, [
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (M) => p.value.action_type = "message")
                }, [
                  i("div", _E, [
                    Y(N(Ct), { class: "h-4 w-4 text-emerald-400" }),
                    x[20] || (x[20] = i("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  x[21] || (x[21] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (M) => p.value.action_type = "flow")
                }, [
                  i("div", kE, [
                    Y(N(Mr), { class: "h-4 w-4 text-emerald-400" }),
                    x[22] || (x[22] = i("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  x[23] || (x[23] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? (S(), $("div", SE, [
                i("label", EE, [
                  Y(N(Mr), { class: "h-3.5 w-3.5" }),
                  x[24] || (x[24] = i("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                re(i("select", {
                  "onUpdate:modelValue": x[3] || (x[3] = (M) => p.value.flow_id = M),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  x[25] || (x[25] = i("option", { value: null }, "Selecione um fluxo...", -1)),
                  (S(!0), $(te, null, Ne(d.value, (M) => (S(), $("option", {
                    key: M.id,
                    value: M.id
                  }, q(M.name) + " (" + q(M.trigger_event || "Personalizado") + ") ", 9, zE))), 128))
                ], 512), [
                  [tt, p.value.flow_id]
                ]),
                x[26] || (x[26] = i("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : oe("", !0)
            ]),
            i("div", $E, [
              x[34] || (x[34] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              i("div", PE, [
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[4] || (x[4] = (M) => p.value.schedule_mode = "immediate")
                }, [
                  i("div", CE, [
                    Y(N(Vn), { class: "h-4 w-4 text-emerald-400" }),
                    x[28] || (x[28] = i("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[29] || (x[29] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[5] || (x[5] = (M) => p.value.schedule_mode = "scheduled")
                }, [
                  i("div", AE, [
                    Y(N(Io), { class: "h-4 w-4 text-emerald-400" }),
                    x[30] || (x[30] = i("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[31] || (x[31] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (S(), $("div", TE, [
                i("label", OE, [
                  Y(N(Dn), { class: "h-3.5 w-3.5" }),
                  x[32] || (x[32] = i("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                re(i("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (M) => p.value.scheduled_at = M),
                  type: "datetime-local",
                  min: b.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, NE), [
                  [be, p.value.scheduled_at]
                ]),
                x[33] || (x[33] = i("p", { class: "text-[11px] text-zinc-400" }, [
                  ne(" A campanha ficará com status "),
                  i("strong", { class: "text-purple-400" }, "Agendada"),
                  ne(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : oe("", !0)
            ]),
            i("div", RE, [
              i("div", ME, [
                i("div", IE, [
                  Y(N(Dh), { class: "h-4 w-4 text-emerald-400" }),
                  x[35] || (x[35] = i("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                i("span", DE, q(p.value.throttle_seconds) + " segundos", 1)
              ]),
              re(i("input", {
                "onUpdate:modelValue": x[7] || (x[7] = (M) => p.value.throttle_seconds = M),
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
              x[36] || (x[36] = i("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (S(), $("div", FE, [
            i("div", BE, [
              i("div", LE, [
                i("div", null, [
                  x[37] || (x[37] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  Y(pr, {
                    modelValue: f.value,
                    "onUpdate:modelValue": x[8] || (x[8] = (M) => f.value = M),
                    mode: v.value,
                    "onUpdate:mode": x[9] || (x[9] = (M) => v.value = M),
                    options: T.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                i("div", null, [
                  x[38] || (x[38] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  Y(pr, {
                    modelValue: y.value,
                    "onUpdate:modelValue": x[10] || (x[10] = (M) => y.value = M),
                    options: T.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[39] || (x[39] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              i("div", null, [
                x[41] || (x[41] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                re(i("select", {
                  "onUpdate:modelValue": x[11] || (x[11] = (M) => c.value = M),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[40] || (x[40] = [
                  i("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  i("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  i("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [tt, c.value]
                ]),
                x[42] || (x[42] = i("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                i("div", UE, [
                  Y(N(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  re(i("input", {
                    "onUpdate:modelValue": x[12] || (x[12] = (M) => m.value = M),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [be, m.value]
                  ])
                ])
              ]),
              i("div", qE, [
                i("div", null, [
                  x[43] || (x[43] = i("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  i("div", VE, [
                    ne(q(p.value.selected_contact_keys.length) + " ", 1),
                    i("span", jE, "de " + q(P.value.length) + " filtrados", 1)
                  ])
                ]),
                i("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  i("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: k
                  }, "Selecionar Todos"),
                  x[44] || (x[44] = i("span", { class: "text-zinc-600" }, "•", -1)),
                  i("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: V
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            i("div", HE, [
              i("table", GE, [
                i("thead", WE, [
                  i("tr", null, [
                    i("th", XE, [
                      i("input", {
                        type: "checkbox",
                        checked: _.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[13] || (x[13] = (M) => _.value ? V() : k())
                      }, null, 40, YE)
                    ]),
                    x[45] || (x[45] = i("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[46] || (x[46] = i("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[47] || (x[47] = i("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[48] || (x[48] = i("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                i("tbody", KE, [
                  (S(!0), $(te, null, Ne(P.value, (M) => (S(), $("tr", {
                    key: M.id,
                    class: X(["cursor-pointer transition", p.value.selected_contact_keys.includes(M.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (O) => g(M.id)
                  }, [
                    i("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[14] || (x[14] = rn(() => {
                      }, ["stop"]))
                    }, [
                      i("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(M.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (O) => g(M.id)
                      }, null, 40, JE)
                    ]),
                    i("td", QE, [
                      i("div", ez, q(M.name), 1),
                      i("div", tz, q(M.email || "-"), 1)
                    ]),
                    i("td", nz, q(M.phone), 1),
                    i("td", rz, [
                      i("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", M.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, q(M.origin), 3)
                    ]),
                    i("td", oz, [
                      i("div", az, [
                        (S(!0), $(te, null, Ne(M.products.slice(0, 2), (O) => (S(), $("span", {
                          key: O,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, q(O), 1))), 128)),
                        M.products.length > 2 ? (S(), $("span", sz, "+" + q(M.products.length - 2), 1)) : oe("", !0)
                      ])
                    ])
                  ], 10, ZE))), 128))
                ])
              ]),
              u.value ? (S(), $("p", iz, "Carregando contatos...")) : P.value.length ? oe("", !0) : (S(), $("p", lz, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (S(), $("div", uz, [
            p.value.action_type === "flow" ? (S(), $("div", dz, [
              i("div", cz, [
                i("div", fz, [
                  i("div", pz, [
                    Y(N(Mr), { class: "h-6 w-6" })
                  ]),
                  i("div", null, [
                    x[49] || (x[49] = i("span", { class: "text-[10px] font-bold uppercase tracking-wider text-emerald-400" }, "Fluxo de Automação Selecionado", -1)),
                    i("h4", hz, q(h.value?.name || "Nenhum fluxo selecionado"), 1)
                  ])
                ]),
                i("div", mz, [
                  i("div", vz, [
                    x[50] || (x[50] = i("span", { class: "text-zinc-500" }, "Gatilho do Fluxo:", -1)),
                    i("span", gz, q(h.value?.trigger_event || "Disparo Direto"), 1)
                  ]),
                  i("div", yz, [
                    x[51] || (x[51] = i("span", { class: "text-zinc-500" }, "Blocos de Ação:", -1)),
                    i("span", bz, q(h.value?.graph_json?.nodes?.length || 0) + " blocos configurados", 1)
                  ]),
                  i("div", xz, [
                    x[52] || (x[52] = i("span", { class: "text-zinc-500" }, "Status:", -1)),
                    i("span", {
                      class: X(["rounded-full px-2 py-0.5 text-[10px] font-semibold", h.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, q(h.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                x[53] || (x[53] = i("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : (S(), $("div", wz, [
              i("div", _z, [
                Y(Pp, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: N(z)
                }, null, 8, ["data", "variables"])
              ]),
              i("div", null, [
                x[54] || (x[54] = i("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                Y(gl, {
                  text: C.value,
                  caption: j.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": D.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? (S(), $("div", kz, [
            i("div", Sz, [
              x[59] || (x[59] = i("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              i("div", Ez, [
                i("div", null, [
                  x[55] || (x[55] = i("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  i("p", zz, q(p.value.name), 1)
                ]),
                i("div", null, [
                  x[56] || (x[56] = i("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  i("p", $z, q(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                i("div", null, [
                  x[57] || (x[57] = i("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  i("p", {
                    class: X(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (S(), Pe(Rt(p.value.schedule_mode === "scheduled" ? N(Io) : N(Vn)), { class: "h-3.5 w-3.5" })),
                    i("span", null, q(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                i("div", null, [
                  x[58] || (x[58] = i("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  i("p", Pz, "~" + q(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              i("div", null, [
                i("span", Cz, q(p.value.action_type === "flow" ? "Fluxo a Disparar:" : `Conteúdo da Mensagem (${p.value.message_data.mode}):`), 1),
                p.value.action_type === "flow" ? (S(), $("div", Az, " ⚡ " + q(h.value?.name || "Fluxo selecionado"), 1)) : (S(), $("div", Tz, q(C.value || j.value || "—"), 1))
              ])
            ])
          ])) : oe("", !0)
        ]),
        i("div", Oz, [
          r.value > 1 ? (S(), $("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[15] || (x[15] = (M) => r.value--)
          }, [
            Y(N(Zc), { class: "mr-2 h-4 w-4" }),
            x[60] || (x[60] = i("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (S(), $("div", Nz)),
          i("div", Rz, [
            i("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[16] || (x[16] = (M) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (S(), $("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: L
            }, [
              x[61] || (x[61] = i("span", null, "Próximo", -1)),
              Y(N(Ph), { class: "ml-2 h-4 w-4" })
            ])) : (S(), $("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: X(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: A
            }, [
              o.value ? (S(), Pe(N(Dt), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (S(), Pe(Rt(p.value.schedule_mode === "scheduled" ? N(Io) : N(Ct)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              i("span", null, q(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, Mz))
          ])
        ])
      ])
    ]));
  }
}, Dz = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, Fz = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, Bz = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, Lz = { class: "flex items-center gap-3" }, Uz = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, qz = { class: "text-lg font-bold text-white" }, Vz = { class: "mt-0.5 text-xs text-zinc-400" }, jz = {
  key: 0,
  class: "text-zinc-500"
}, Hz = { class: "flex items-center gap-2" }, Gz = ["disabled"], Wz = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, Xz = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, Yz = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, Kz = { class: "flex items-center justify-between text-xs" }, Zz = { class: "flex items-center gap-2" }, Jz = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, Qz = { class: "font-bold text-white" }, e$ = { class: "font-mono font-bold text-emerald-400" }, t$ = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, n$ = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, r$ = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, o$ = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, a$ = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, s$ = { class: "mt-0.5 text-xl font-bold text-white" }, i$ = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, l$ = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, u$ = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, d$ = { class: "mt-0.5 text-xl font-bold text-amber-400" }, c$ = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, f$ = { class: "mt-0.5 text-xl font-bold text-red-400" }, p$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, h$ = { class: "relative max-w-sm flex-1" }, m$ = { class: "flex-1 overflow-y-auto p-6" }, v$ = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, g$ = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, y$ = { class: "w-full text-left text-xs" }, b$ = { class: "divide-y divide-zinc-800/60" }, x$ = { class: "px-4 py-3" }, w$ = { class: "font-medium text-white" }, _$ = ["title"], k$ = { class: "px-4 py-3 font-mono text-zinc-300" }, S$ = { class: "px-4 py-3" }, E$ = { class: "px-4 py-3 text-right text-zinc-400" }, z$ = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(null), a = W([]), s = W(!0), l = W(!1), d = W(""), u = W(""), c = W(""), f = ee(() => {
      const h = u.value.trim().toLowerCase();
      return a.value.filter((b) => c.value && b.status !== c.value ? !1 : !h || `${b.name || ""} ${b.phone}`.toLowerCase().includes(h));
    }), v = (h) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[h] || "border-blue-500/20 bg-blue-500/10 text-blue-400", y = ee(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const h = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(h / o.value.total_recipients * 100));
    });
    async function m() {
      s.value = !0, d.value = "";
      try {
        const h = await Ee.campaign(n.campaignId);
        o.value = h.campaign, a.value = h.sends || [];
      } catch (h) {
        d.value = h.message;
      } finally {
        s.value = !1;
      }
    }
    async function p() {
      l.value = !0, d.value = "";
      try {
        await Ee.cancelCampaign(n.campaignId), r("changed"), await m();
      } catch (h) {
        d.value = h.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(m), (h, b) => (S(), $("div", Dz, [
      i("div", Fz, [
        i("div", Bz, [
          i("div", Lz, [
            i("div", Uz, [
              Y(N(Hr), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              i("div", qz, q(o.value?.name || "Campanha"), 1),
              i("p", Vz, [
                i("span", null, q(o.value ? N($p)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (S(), $("span", jz, " • " + q(o.value.message), 1)) : oe("", !0)
              ])
            ])
          ]),
          i("div", Hz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (S(), $("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              Y(N(Ch), { class: "h-3.5 w-3.5" }),
              i("span", null, q(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, Gz)) : oe("", !0),
            i("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: b[0] || (b[0] = (z) => r("close"))
            }, [
              Y(N(Ot), { class: "h-4 w-4" })
            ])
          ])
        ]),
        s.value ? (S(), $("p", Wz, "Carregando detalhes…")) : d.value ? (S(), $("p", Xz, q(d.value), 1)) : o.value ? (S(), $(te, { key: 2 }, [
          i("div", Yz, [
            i("div", Kz, [
              i("div", Zz, [
                o.value.status === "running" ? (S(), $("span", Jz, [...b[3] || (b[3] = [
                  i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  i("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : oe("", !0),
                i("span", Qz, q(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              i("span", e$, q(y.value) + "%", 1)
            ]),
            i("div", t$, [
              i("div", {
                class: X(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${y.value}%` })
              }, null, 6)
            ]),
            i("div", n$, [
              i("span", null, q(o.value.sent_count) + " de " + q(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (S(), $("span", r$, " 🛡️ Intervalo randômico (jitter) ativo ")) : oe("", !0)
            ])
          ]),
          i("div", o$, [
            i("div", a$, [
              b[4] || (b[4] = i("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              i("div", s$, q(o.value.total_recipients), 1)
            ]),
            i("div", i$, [
              b[5] || (b[5] = i("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              i("div", l$, q(o.value.sent_count), 1)
            ]),
            i("div", u$, [
              b[6] || (b[6] = i("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              i("div", d$, q(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            i("div", c$, [
              b[7] || (b[7] = i("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              i("div", f$, q(o.value.error_count), 1)
            ])
          ]),
          i("div", p$, [
            i("div", h$, [
              Y(N(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              re(i("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (z) => u.value = z),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [be, u.value]
              ])
            ]),
            re(i("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (z) => c.value = z),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...b[8] || (b[8] = [
              Gc('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [tt, c.value]
            ])
          ]),
          i("div", m$, [
            f.value.length ? (S(), $("div", g$, [
              i("table", y$, [
                b[9] || (b[9] = i("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  i("tr", null, [
                    i("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    i("th", { class: "px-4 py-2.5" }, "Telefone"),
                    i("th", { class: "px-4 py-2.5" }, "Status"),
                    i("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                i("tbody", b$, [
                  (S(!0), $(te, null, Ne(f.value, (z) => (S(), $("tr", {
                    key: z.id
                  }, [
                    i("td", x$, [
                      i("div", w$, q(z.name || "—"), 1),
                      z.error_message ? (S(), $("div", {
                        key: 0,
                        title: z.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, q(z.error_message), 9, _$)) : oe("", !0)
                    ]),
                    i("td", k$, q(z.phone), 1),
                    i("td", S$, [
                      i("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(z.status)])
                      }, q(N(dw)[z.status] || z.status), 3)
                    ]),
                    i("td", E$, q(z.sent_at ? new Date(z.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (S(), $("div", v$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : oe("", !0)
      ])
    ]));
  }
}, $$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, P$ = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, C$ = { class: "relative w-64" }, A$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, T$ = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, O$ = {
  key: 2,
  class: "py-10 text-center"
}, N$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, R$ = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, M$ = { class: "w-full text-left text-xs" }, I$ = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, D$ = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, F$ = { class: "px-3 py-2.5" }, B$ = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, L$ = { class: "px-3 py-2.5" }, U$ = { class: "px-3 py-2.5" }, q$ = { class: "flex items-center gap-2" }, V$ = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, j$ = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, H$ = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, G$ = { class: "px-3 py-2.5" }, W$ = ["onClick"], X$ = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = W([]), n = W(!0), r = W(""), o = W(""), a = W(!1), s = W(null), l = (c) => ({
      completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      cancelled: "border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      scheduled: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400"
    })[c] || "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400", d = ee(() => {
      const c = o.value.trim().toLowerCase();
      return c ? t.value.filter((f) => f.name.toLowerCase().includes(c)) : t.value;
    });
    async function u() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ee.campaigns()).campaigns || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    return Ke(u), (c, f) => (S(), $("div", $$, [
      i("div", P$, [
        i("div", C$, [
          Y(N(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          re(i("input", {
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
          Y(N(sf), { class: "h-4 w-4" }),
          f[4] || (f[4] = i("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (S(), $("p", A$, q(r.value), 1)) : oe("", !0),
      n.value ? (S(), $("div", T$, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = i("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : d.value.length ? (S(), $("div", R$, [
        i("table", M$, [
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
          i("tbody", I$, [
            (S(!0), $(te, null, Ne(d.value, (v) => (S(), $("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", D$, q(v.name), 1),
              i("td", F$, [
                i("span", {
                  class: X(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(v.status)])
                }, [
                  v.status === "running" ? (S(), $("span", B$, [...f[7] || (f[7] = [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    i("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : oe("", !0),
                  ne(" " + q(N($p)[v.status] || v.status), 1)
                ], 2)
              ]),
              i("td", L$, q(v.total_recipients), 1),
              i("td", U$, [
                i("div", q$, [
                  i("span", V$, q(v.sent_count) + "/" + q(v.total_recipients), 1),
                  i("div", j$, [
                    i("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              i("td", {
                class: X(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, q(v.error_count), 3),
              i("td", H$, q(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              i("td", G$, [
                i("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => s.value = v.id
                }, [
                  Y(N(Th), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = i("span", null, "Detalhes", -1))
                ], 8, W$)
              ])
            ]))), 128))
          ])
        ])
      ])) : (S(), $("div", O$, [
        i("div", N$, [
          Y(N(Ct), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (S(), Pe(Iz, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => a.value = !1),
        onCreated: u
      })) : oe("", !0),
      s.value ? (S(), Pe(z$, {
        key: 5,
        "campaign-id": s.value,
        onClose: f[3] || (f[3] = (v) => s.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : oe("", !0)
    ]));
  }
}, Y$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, K$ = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Z$ = ["disabled"], J$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Q$ = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, e3 = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, t3 = {
  key: 3,
  class: "py-10 text-center"
}, n3 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, r3 = {
  key: 4,
  class: "mt-4 space-y-2"
}, o3 = { class: "flex items-center gap-3" }, a3 = { class: "font-semibold text-zinc-900 dark:text-white" }, s3 = { class: "text-zinc-500 dark:text-zinc-400" }, i3 = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, l3 = ["title"], u3 = ["title"], d3 = { class: "flex items-center gap-2" }, c3 = ["disabled", "onClick"], f3 = {
  __name: "RunsPanel",
  setup(e) {
    const t = W([]), n = W(!0), r = W(""), o = W(""), a = W(null), s = (c) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[c] || "bg-amber-500", l = (c) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[c] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function d() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ee.runs()).runs || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    async function u(c) {
      if (window.confirm("Tentar novamente do início do fluxo? Blocos de mensagem já entregues antes da falha podem ser reenviados.")) {
        a.value = c.id, r.value = "", o.value = "";
        try {
          await Ee.retryRun(c.id), o.value = `Execução #${c.id} reiniciada.`, await d();
        } catch (f) {
          r.value = f.message;
        } finally {
          a.value = null;
        }
      }
    }
    return Ke(d), (c, f) => (S(), $("div", Y$, [
      i("div", K$, [
        f[0] || (f[0] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        i("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: d
        }, " Atualizar ", 8, Z$)
      ]),
      r.value ? (S(), $("p", J$, q(r.value), 1)) : o.value ? (S(), $("p", Q$, q(o.value), 1)) : oe("", !0),
      n.value ? (S(), $("div", e3, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = i("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (S(), $("div", r3, [
        (S(!0), $(te, null, Ne(t.value, (v) => (S(), $("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          i("div", o3, [
            i("span", {
              class: X(["h-2 w-2 rounded-full", s(v.status)])
            }, null, 2),
            i("div", null, [
              i("div", a3, "Fluxo #" + q(v.flow_id), 1),
              i("div", s3, q(N(qo)(v.event_class)) + " • " + q(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (S(), $("div", i3, [
                Y(N(Nh), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                i("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + q(v.context.last_reply) + "”", 9, l3)
              ])) : oe("", !0),
              v.last_error ? (S(), $("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, q(v.last_error), 9, u3)) : oe("", !0)
            ])
          ]),
          i("div", d3, [
            v.status === "failed" ? (S(), $("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === v.id,
              onClick: (y) => u(v)
            }, [
              Y(N(Mh), {
                class: X(["h-3 w-3", { "animate-spin": a.value === v.id }])
              }, null, 8, ["class"]),
              i("span", null, q(a.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, c3)) : oe("", !0),
            i("span", {
              class: X(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(v.status)])
            }, q(N(cw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (S(), $("div", t3, [
        i("div", n3, [
          Y(N(nf), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, p3 = { class: "mx-auto max-w-6xl space-y-6" }, h3 = { class: "flex items-center justify-between" }, m3 = { class: "inline-flex rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5 dark:border-zinc-800 dark:bg-zinc-900" }, v3 = { class: "hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400" }, g3 = { class: "flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900" }, y3 = { class: "flex items-center gap-4" }, b3 = { class: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400" }, x3 = { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, w3 = { class: "text-xs text-zinc-600 dark:text-zinc-400" }, _3 = { class: "flex items-center gap-3" }, k3 = { class: "relative inline-flex cursor-pointer items-center" }, S3 = {
  key: 0,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, E3 = {
  key: 1,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, z3 = {
  key: 2,
  class: "flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300"
}, $3 = {
  key: 3,
  class: "flex h-64 items-center justify-center"
}, P3 = {
  key: 4,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, C3 = { class: "space-y-6 lg:col-span-7" }, A3 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, T3 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, O3 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, N3 = { class: "mt-6 space-y-4" }, R3 = { class: "mt-1.5 grid grid-cols-2 gap-2" }, M3 = { key: 0 }, I3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, D3 = {
  key: 1,
  class: "space-y-2"
}, F3 = { class: "flex items-center justify-between" }, B3 = { class: "flex items-center gap-2" }, L3 = ["disabled"], U3 = { key: 0 }, q3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V3 = ["value"], j3 = { key: 1 }, H3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, G3 = { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, W3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, X3 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, Y3 = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, K3 = { class: "flex items-center justify-between" }, Z3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, J3 = {
  key: 0,
  class: "mt-3 space-y-2"
}, Q3 = { class: "flex flex-wrap gap-1.5" }, e4 = ["title", "onClick"], t4 = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, n4 = ["disabled"], r4 = ["disabled"], o4 = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, a4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, s4 = { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, i4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, l4 = { class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-center shadow-xs dark:border-emerald-500/30 dark:bg-emerald-500/10" }, u4 = { class: "text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center justify-center gap-1" }, d4 = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, c4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, f4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, p4 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, h4 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, m4 = { class: "lg:col-span-5" }, v4 = { class: "overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, g4 = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, y4 = { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, b4 = { key: 1 }, x4 = { class: "flex-1" }, w4 = { class: "text-xs font-bold leading-tight" }, _4 = { class: "text-[10px] text-white/70" }, k4 = { class: "min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, S4 = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, E4 = { class: "font-sans whitespace-pre-wrap select-text" }, z4 = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, $4 = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, P4 = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = W("daily"), n = W(!0), r = W(!1), o = W(!1), a = W(!1), s = W(""), l = W(""), d = W(""), u = W([]), c = W("list"), f = _n({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), v = W(!1), y = W(""), m = W(null), p = _n({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), h = W(!1), b = W(""), z = W(null), w = _n({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), T = W(!1), P = W(""), _ = W(null), g = [
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
      { tag: "{{products_text}}", label: "Lista de produtos vendidos (com total)" },
      { tag: "{{products_total_formatted}}", label: "Total faturado em produtos principais" },
      { tag: "{{products_count}}", label: "Qtd de produtos principais vendidos" },
      { tag: "{{bumps_section}}", label: "Seção de Order Bumps (com total)" },
      { tag: "{{bumps_total_formatted}}", label: "Total faturado em order bumps" },
      { tag: "{{bumps_count}}", label: "Qtd de order bumps vendidos" },
      { tag: "{{month_name}}", label: "Nome do mês (relatório mensal)" },
      { tag: "{{year}}", label: "Ano do relatório" }
    ], k = ee(() => t.value === "weekly" ? p : t.value === "monthly" ? w : f), V = ee(() => t.value === "weekly" ? b.value : t.value === "monthly" ? P.value : y.value), D = ee(() => t.value === "weekly" ? z.value : t.value === "monthly" ? _.value : m.value), F = ee({
      get: () => t.value === "weekly" ? h.value : t.value === "monthly" ? T.value : v.value,
      set: (M) => {
        t.value === "weekly" ? h.value = M : t.value === "monthly" ? T.value = M : v.value = M;
      }
    });
    async function C() {
      a.value = !0;
      try {
        const M = await Ee.groups();
        u.value = M.groups || [], u.value.length === 0 && (c.value = "manual");
      } catch {
        u.value = [], c.value = "manual";
      } finally {
        a.value = !1;
      }
    }
    async function j() {
      n.value = !0, s.value = "";
      try {
        const M = await Ee.dailyReport();
        f.enabled = !!M.config?.enabled, f.time = M.config?.time || "23:59", f.recipient_type = M.config?.recipient_type || "phone", f.phone = M.config?.phone || "", f.group_id = M.config?.group_id || "", f.custom_template = M.config?.custom_template || "", v.value = !!M.config?.custom_template, y.value = M.preview || "", m.value = M.data || null;
        const O = M.weekly_config || {};
        p.enabled = !!O.enabled, p.time = O.time || "23:59", p.recipient_type = O.recipient_type || f.recipient_type || "phone", p.phone = O.phone || f.phone || "", p.group_id = O.group_id || f.group_id || "", p.custom_template = O.custom_template || "", h.value = !!O.custom_template, b.value = M.weekly_preview || "", z.value = M.weekly_data || null;
        const Q = M.monthly_config || {};
        w.enabled = !!Q.enabled, w.time = Q.time || "23:59", w.recipient_type = Q.recipient_type || f.recipient_type || "phone", w.phone = Q.phone || f.phone || "", w.group_id = Q.group_id || f.group_id || "", w.custom_template = Q.custom_template || "", T.value = !!Q.custom_template, P.value = M.monthly_preview || "", _.value = M.monthly_data || null, await C();
      } catch (M) {
        s.value = M.message || "Falha ao carregar configurações dos relatórios.";
      } finally {
        n.value = !1;
      }
    }
    async function E() {
      r.value = !0, s.value = "", l.value = "";
      try {
        if (t.value === "daily") {
          const M = await Ee.saveDailyReport({
            enabled: f.enabled,
            time: f.time,
            recipient_type: f.recipient_type,
            phone: f.phone,
            group_id: f.group_id,
            custom_template: v.value ? f.custom_template : null
          });
          y.value = M.preview || y.value, l.value = "Configurações do relatório diário salvas com sucesso!";
        } else if (t.value === "weekly") {
          const M = await Ee.saveWeeklyReport({
            enabled: p.enabled,
            time: p.time,
            recipient_type: p.recipient_type,
            phone: p.phone,
            group_id: p.group_id,
            custom_template: h.value ? p.custom_template : null
          });
          b.value = M.preview || b.value, l.value = "Configurações do relatório semanal (segunda a domingo) salvas com sucesso!";
        } else {
          const M = await Ee.saveMonthlyReport({
            enabled: w.enabled,
            time: w.time,
            recipient_type: w.recipient_type,
            phone: w.phone,
            group_id: w.group_id,
            custom_template: T.value ? w.custom_template : null
          });
          P.value = M.preview || P.value, l.value = "Configurações do relatório mensal (fechamento do mês) salvas com sucesso!";
        }
        setTimeout(() => {
          l.value = "";
        }, 5e3);
      } catch (M) {
        s.value = M.message || "Erro ao salvar configurações.";
      } finally {
        r.value = !1;
      }
    }
    async function L() {
      const M = k.value;
      if (M.recipient_type === "group") {
        if (!M.group_id) {
          s.value = "Selecione ou informe o JID do grupo do WhatsApp antes de testar.";
          return;
        }
      } else if (!M.phone) {
        s.value = "Informe o número do WhatsApp de destino antes de testar.";
        return;
      }
      o.value = !0, s.value = "", d.value = "";
      try {
        if (t.value === "daily") {
          const O = await Ee.testDailyReport({
            recipient_type: M.recipient_type,
            phone: M.phone,
            group_id: M.group_id
          });
          d.value = O.message || "Relatório diário de teste enviado para o WhatsApp!", O.preview && (y.value = O.preview);
        } else if (t.value === "weekly") {
          const O = await Ee.testWeeklyReport({
            recipient_type: M.recipient_type,
            phone: M.phone,
            group_id: M.group_id
          });
          d.value = O.message || "Relatório semanal de teste enviado para o WhatsApp!", O.preview && (b.value = O.preview);
        } else {
          const O = await Ee.testMonthlyReport({
            recipient_type: M.recipient_type,
            phone: M.phone,
            group_id: M.group_id
          });
          d.value = O.message || "Relatório mensal de teste enviado para o WhatsApp!", O.preview && (P.value = O.preview);
        }
        setTimeout(() => {
          d.value = "";
        }, 8e3);
      } catch (O) {
        s.value = O.message || "Falha ao disparar relatório de teste.";
      } finally {
        o.value = !1;
      }
    }
    function A(M) {
      t.value === "daily" ? f.custom_template = (f.custom_template || "") + " " + M : t.value === "weekly" ? p.custom_template = (p.custom_template || "") + " " + M : w.custom_template = (w.custom_template || "") + " " + M;
    }
    const I = ee(() => (V.value || "").split(`
`)), x = ee(() => {
      if (k.value.recipient_type !== "group") return "";
      const M = u.value.find((O) => O.id === k.value.group_id);
      return M ? M.name : k.value.group_id || "Grupo de Vendas";
    });
    return Ke(j), (M, O) => (S(), $("div", p3, [
      i("div", h3, [
        i("div", m3, [
          i("button", {
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "daily" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: O[0] || (O[0] = (Q) => t.value = "daily")
          }, [
            Y(N(Io), { class: "h-4 w-4" }),
            O[13] || (O[13] = i("span", null, "Relatório Diário", -1))
          ], 2),
          i("button", {
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "weekly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: O[1] || (O[1] = (Q) => t.value = "weekly")
          }, [
            Y(N(Zl), { class: "h-4 w-4" }),
            O[14] || (O[14] = i("span", null, "Relatório Semanal (Domingos)", -1))
          ], 2),
          i("button", {
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "monthly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: O[2] || (O[2] = (Q) => t.value = "monthly")
          }, [
            Y(N(Jl), { class: "h-4 w-4" }),
            O[15] || (O[15] = i("span", null, "Relatório Mensal (Último Dia)", -1))
          ], 2)
        ]),
        i("div", v3, [
          Y(N(Dn), { class: "h-3.5 w-3.5 text-emerald-500" }),
          O[16] || (O[16] = i("span", null, [
            ne("Horário padrão: "),
            i("strong", null, "23:59")
          ], -1))
        ])
      ]),
      i("div", g3, [
        i("div", y3, [
          i("div", b3, [
            t.value === "daily" ? (S(), Pe(N(Jc), {
              key: 0,
              class: "h-7 w-7"
            })) : t.value === "weekly" ? (S(), Pe(N(Zl), {
              key: 1,
              class: "h-7 w-7"
            })) : (S(), Pe(N(Jl), {
              key: 2,
              class: "h-7 w-7"
            }))
          ]),
          i("div", null, [
            i("h2", x3, [
              t.value === "daily" ? (S(), $(te, { key: 0 }, [
                ne("Relatório Diário de Vendas no WhatsApp")
              ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                ne("Relatório Semanal de Vendas no WhatsApp")
              ], 64)) : (S(), $(te, { key: 2 }, [
                ne("Relatório Mensal de Vendas no WhatsApp")
              ], 64))
            ]),
            i("p", w3, [
              t.value === "daily" ? (S(), $(te, { key: 0 }, [
                O[17] || (O[17] = ne(" Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas com ", -1)),
                O[18] || (O[18] = i("strong", null, "faturamento bruto e valor líquido", -1)),
                O[19] || (O[19] = ne(". ", -1))
              ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                O[20] || (O[20] = ne(" Receba automaticamente todo ", -1)),
                O[21] || (O[21] = i("strong", null, "domingo às 23:59", -1)),
                O[22] || (O[22] = ne(" o consolidado de vendas de ", -1)),
                O[23] || (O[23] = i("strong", null, "segunda-feira a domingo", -1)),
                O[24] || (O[24] = ne(" com faturamento bruto e líquido. ", -1))
              ], 64)) : (S(), $(te, { key: 2 }, [
                O[25] || (O[25] = ne(" Receba automaticamente no ", -1)),
                O[26] || (O[26] = i("strong", null, "último dia do mês às 23:59", -1)),
                O[27] || (O[27] = ne(" o fechamento consolidado completo de vendas do mês inteiro (1º ao último dia). ", -1))
              ], 64))
            ])
          ])
        ]),
        i("div", _3, [
          i("span", {
            class: X(["text-xs font-semibold", k.value.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, q(k.value.enabled ? "● Envio Ativo" : "○ Envio Desativado"), 3),
          i("label", k3, [
            re(i("input", {
              "onUpdate:modelValue": O[3] || (O[3] = (Q) => k.value.enabled = Q),
              type: "checkbox",
              class: "peer sr-only",
              onChange: E
            }, null, 544), [
              [Tn, k.value.enabled]
            ]),
            O[28] || (O[28] = i("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      l.value ? (S(), $("div", S3, [
        Y(N(jr), { class: "h-5 w-5 shrink-0" }),
        i("span", null, q(l.value), 1)
      ])) : oe("", !0),
      d.value ? (S(), $("div", E3, [
        Y(N(Ct), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        i("span", null, q(d.value), 1)
      ])) : oe("", !0),
      s.value ? (S(), $("div", z3, [
        Y(N(ka), { class: "h-5 w-5 shrink-0" }),
        i("span", null, q(s.value), 1)
      ])) : oe("", !0),
      n.value ? (S(), $("div", $3, [
        Y(N(Dt), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (S(), $("div", P3, [
        i("div", C3, [
          i("div", A3, [
            i("h3", T3, [
              Y(N(Dn), { class: "h-4 w-4 text-emerald-500" }),
              t.value === "daily" ? (S(), $(te, { key: 0 }, [
                ne("Agendamento & Destino Diário")
              ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                ne("Agendamento & Destino Semanal")
              ], 64)) : (S(), $(te, { key: 2 }, [
                ne("Agendamento & Destino Mensal")
              ], 64))
            ]),
            i("p", O3, [
              t.value === "daily" ? (S(), $(te, { key: 0 }, [
                ne(" Defina o horário e para quem o relatório diário consolidado será entregue (número ou grupo). ")
              ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                ne(" O relatório semanal é disparado todo domingo com o acumulado de vendas de segunda a domingo. ")
              ], 64)) : (S(), $(te, { key: 2 }, [
                ne(" O relatório mensal é disparado no último dia do mês com o consolidado de vendas do mês inteiro. ")
              ], 64))
            ]),
            i("div", N3, [
              i("div", null, [
                O[31] || (O[31] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Enviar Para * ", -1)),
                i("div", R3, [
                  i("button", {
                    type: "button",
                    class: X(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", k.value.recipient_type === "phone" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: O[4] || (O[4] = (Q) => k.value.recipient_type = "phone")
                  }, [
                    Y(N(tu), { class: "h-3.5 w-3.5" }),
                    O[29] || (O[29] = i("span", null, "Número Individual", -1))
                  ], 2),
                  i("button", {
                    type: "button",
                    class: X(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", k.value.recipient_type === "group" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: O[5] || (O[5] = () => {
                      k.value.recipient_type = "group", u.value.length || C();
                    })
                  }, [
                    Y(N(Rn), { class: "h-3.5 w-3.5" }),
                    O[30] || (O[30] = i("span", null, "Grupo do WhatsApp", -1))
                  ], 2)
                ])
              ]),
              k.value.recipient_type === "phone" ? (S(), $("div", M3, [
                O[32] || (O[32] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                i("div", I3, [
                  Y(N(tu), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  re(i("input", {
                    "onUpdate:modelValue": O[6] || (O[6] = (Q) => k.value.phone = Q),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [be, k.value.phone]
                  ])
                ]),
                O[33] || (O[33] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ])) : (S(), $("div", D3, [
                i("div", F3, [
                  O[36] || (O[36] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Grupo de Destino * ", -1)),
                  i("div", B3, [
                    i("button", {
                      type: "button",
                      class: "flex items-center gap-1 text-[11px] font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400",
                      disabled: a.value,
                      onClick: C
                    }, [
                      Y(N(lf), {
                        class: X(["h-3 w-3", a.value ? "animate-spin" : ""])
                      }, null, 8, ["class"]),
                      O[34] || (O[34] = i("span", null, "Recarregar Grupos", -1))
                    ], 8, L3),
                    O[35] || (O[35] = i("span", { class: "text-zinc-300 dark:text-zinc-700" }, "|", -1)),
                    i("button", {
                      type: "button",
                      class: "text-[11px] font-semibold text-zinc-600 transition hover:underline dark:text-zinc-400",
                      onClick: O[7] || (O[7] = (Q) => c.value = c.value === "list" ? "manual" : "list")
                    }, q(c.value === "list" ? "Digitar JID" : "Escolher da lista"), 1)
                  ])
                ]),
                c.value === "list" && u.value.length > 0 ? (S(), $("div", U3, [
                  i("div", q3, [
                    Y(N(Rn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    re(i("select", {
                      "onUpdate:modelValue": O[8] || (O[8] = (Q) => k.value.group_id = Q),
                      class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                    }, [
                      O[37] || (O[37] = i("option", { value: "" }, "Selecione um grupo da Evolution GO...", -1)),
                      (S(!0), $(te, null, Ne(u.value, (Q) => (S(), $("option", {
                        key: Q.id,
                        value: Q.id
                      }, q(Q.name), 9, V3))), 128))
                    ], 512), [
                      [tt, k.value.group_id]
                    ])
                  ])
                ])) : (S(), $("div", j3, [
                  i("div", H3, [
                    Y(N(Rn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    re(i("input", {
                      "onUpdate:modelValue": O[9] || (O[9] = (Q) => k.value.group_id = Q),
                      type: "text",
                      placeholder: "Ex: 120363025244589234@g.us",
                      class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                    }, null, 512), [
                      [be, k.value.group_id]
                    ])
                  ]),
                  O[38] || (O[38] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                    ne(" Insira o JID oficial do grupo do WhatsApp (terminado em "),
                    i("code", null, "@g.us"),
                    ne("). ")
                  ], -1))
                ]))
              ])),
              i("div", null, [
                i("label", G3, [
                  t.value === "daily" ? (S(), $(te, { key: 0 }, [
                    ne("Horário de Disparo Diário *")
                  ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                    ne("Horário de Disparo aos Domingos *")
                  ], 64)) : (S(), $(te, { key: 2 }, [
                    ne("Horário de Disparo no Último Dia do Mês *")
                  ], 64))
                ]),
                i("div", W3, [
                  Y(N(Dn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  re(i("input", {
                    "onUpdate:modelValue": O[10] || (O[10] = (Q) => k.value.time = Q),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [be, k.value.time]
                  ])
                ]),
                i("p", X3, [
                  t.value === "daily" ? (S(), $(te, { key: 0 }, [
                    O[39] || (O[39] = ne(" Padrão sugerido: ", -1)),
                    O[40] || (O[40] = i("strong", null, "23:59", -1)),
                    O[41] || (O[41] = ne(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ", -1))
                  ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                    O[42] || (O[42] = ne(" Padrão sugerido: ", -1)),
                    O[43] || (O[43] = i("strong", null, "23:59 aos domingos", -1)),
                    O[44] || (O[44] = ne(". O relatório consolidará as vendas de ", -1)),
                    O[45] || (O[45] = i("strong", null, "segunda-feira a domingo", -1)),
                    O[46] || (O[46] = ne(". ", -1))
                  ], 64)) : (S(), $(te, { key: 2 }, [
                    O[47] || (O[47] = ne(" Padrão sugerido: ", -1)),
                    O[48] || (O[48] = i("strong", null, "23:59 no último dia do mês", -1)),
                    O[49] || (O[49] = ne(". O relatório consolidará as vendas de todo o mês (do dia 1º ao último dia). ", -1))
                  ], 64))
                ])
              ]),
              i("div", Y3, [
                i("div", K3, [
                  i("div", null, [
                    O[50] || (O[50] = i("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    i("p", Z3, q(F.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  i("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: O[11] || (O[11] = (Q) => F.value = !F.value)
                  }, q(F.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                F.value ? (S(), $("div", J3, [
                  i("div", Q3, [
                    (S(), $(te, null, Ne(g, (Q) => i("button", {
                      key: Q.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: Q.label,
                      onClick: (fe) => A(Q.tag)
                    }, q(Q.tag), 9, e4)), 64))
                  ]),
                  re(i("textarea", {
                    "onUpdate:modelValue": O[12] || (O[12] = (Q) => k.value.custom_template = Q),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [be, k.value.custom_template]
                  ])
                ])) : oe("", !0)
              ]),
              i("div", t4, [
                i("button", {
                  type: "button",
                  disabled: r.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: E
                }, [
                  r.value ? (S(), Pe(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (S(), Pe(N(jr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  O[51] || (O[51] = ne(" Salvar Configurações ", -1))
                ], 8, n4),
                i("button", {
                  type: "button",
                  disabled: o.value || (k.value.recipient_type === "group" ? !k.value.group_id : !k.value.phone),
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: L
                }, [
                  o.value ? (S(), Pe(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (S(), Pe(N(Ct), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  i("span", null, q(k.value.recipient_type === "group" ? "Enviar Teste ao Grupo" : "Enviar Teste"), 1)
                ], 8, r4)
              ])
            ])
          ]),
          D.value ? (S(), $("div", o4, [
            i("div", a4, [
              i("span", s4, [
                t.value === "daily" ? (S(), $(te, { key: 0 }, [
                  ne("Bruto Hoje")
                ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                  ne("Bruto Semana")
                ], 64)) : (S(), $(te, { key: 2 }, [
                  ne("Bruto Mês")
                ], 64))
              ]),
              i("div", i4, q(D.value.total_formatted), 1)
            ]),
            i("div", l4, [
              i("span", u4, [
                Y(N(Bh), { class: "h-3 w-3" }),
                t.value === "daily" ? (S(), $(te, { key: 0 }, [
                  ne("Líquido Hoje")
                ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                  ne("Líquido Semana")
                ], 64)) : (S(), $(te, { key: 2 }, [
                  ne("Líquido Mês")
                ], 64))
              ]),
              i("div", d4, q(D.value.net_total_formatted), 1)
            ]),
            i("div", c4, [
              O[52] || (O[52] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Vendas Aprovadas ", -1)),
              i("div", f4, q(D.value.orders_count), 1)
            ]),
            i("div", p4, [
              O[53] || (O[53] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Order Bumps ", -1)),
              i("div", h4, q(D.value.bumps_count) + " (" + q(D.value.bumps_total_formatted) + ") ", 1)
            ])
          ])) : oe("", !0)
        ]),
        i("div", m4, [
          i("div", v4, [
            i("div", g4, [
              i("div", y4, [
                k.value.recipient_type === "group" ? (S(), Pe(N(Rn), {
                  key: 0,
                  class: "h-4 w-4"
                })) : (S(), $("span", b4, "ZR"))
              ]),
              i("div", x4, [
                i("div", w4, q(k.value.recipient_type === "group" ? x.value : "ZapRei Notificações"), 1),
                i("div", _4, [
                  k.value.recipient_type === "group" ? (S(), $(te, { key: 0 }, [
                    ne("grupo do WhatsApp")
                  ], 64)) : t.value === "daily" ? (S(), $(te, { key: 1 }, [
                    ne("relatório diário automático")
                  ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 2 }, [
                    ne("relatório semanal aos domingos")
                  ], 64)) : (S(), $(te, { key: 3 }, [
                    ne("relatório mensal no último dia")
                  ], 64))
                ])
              ]),
              Y(N(ol), { class: "h-4 w-4 text-emerald-300" })
            ]),
            i("div", k4, [
              i("div", S4, [
                i("div", E4, [
                  (S(!0), $(te, null, Ne(I.value, (Q, fe) => (S(), $("div", {
                    key: fe,
                    class: "min-h-[1.2em]"
                  }, q(Q), 1))), 128))
                ]),
                i("div", z4, [
                  i("span", null, q(k.value.time || "23:59"), 1),
                  O[54] || (O[54] = i("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            i("div", $4, [
              t.value === "daily" ? (S(), $(te, { key: 0 }, [
                O[55] || (O[55] = ne(" Disparo automático diário via ", -1)),
                O[56] || (O[56] = i("strong", null, "Evolution GO", -1)),
                ne(" às " + q(f.time), 1)
              ], 64)) : t.value === "weekly" ? (S(), $(te, { key: 1 }, [
                O[57] || (O[57] = ne(" Disparo automático aos ", -1)),
                O[58] || (O[58] = i("strong", null, "domingos", -1)),
                O[59] || (O[59] = ne(" via ", -1)),
                O[60] || (O[60] = i("strong", null, "Evolution GO", -1)),
                ne(" às " + q(p.time) + " (vendas de segunda a domingo) ", 1)
              ], 64)) : (S(), $(te, { key: 2 }, [
                O[61] || (O[61] = ne(" Disparo automático no ", -1)),
                O[62] || (O[62] = i("strong", null, "último dia do mês", -1)),
                O[63] || (O[63] = ne(" via ", -1)),
                O[64] || (O[64] = i("strong", null, "Evolution GO", -1)),
                ne(" às " + q(w.time) + " (vendas do mês inteiro) ", 1)
              ], 64))
            ])
          ])
        ])
      ]))
    ]));
  }
}, C4 = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, A4 = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, T4 = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, O4 = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, N4 = { class: "flex flex-wrap items-center gap-3" }, R4 = { class: "text-xs font-bold" }, M4 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, I4 = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, D4 = { class: "flex items-center justify-between" }, F4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, B4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, L4 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, U4 = { class: "flex items-center justify-between" }, q4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, V4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, j4 = { class: "flex items-center justify-between" }, H4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, G4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, W4 = { class: "flex items-center justify-between" }, X4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, Y4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, K4 = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, Z4 = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, J4 = ["onClick"], Q4 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, eP = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Vn, component: PS },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Ct, component: X$ },
      { id: "daily_report", label: "Relatórios de Vendas", icon: Jc, component: P4 },
      { id: "contacts", label: "Base de Contatos", icon: Rn, component: uE },
      { id: "runs", label: "Execuções", icon: nf, component: f3 },
      { id: "connection", label: "Conexão", icon: af, component: cf }
    ], n = W("flows"), r = W(null), o = W({ flows: 0, campaigns: 0, contacts: 0 }), a = W({
      flowsCount: 0,
      activeFlowsCount: 0,
      campaignsCount: 0,
      contactsCount: 0,
      runsCount: 0,
      runsSuccessRate: 100
    });
    async function s() {
      try {
        r.value = (await Ee.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function l() {
      try {
        const [u, c, f, v] = await Promise.all([
          Ee.flows().catch(() => ({ flows: [] })),
          Ee.campaigns().catch(() => ({ campaigns: [] })),
          Ee.contacts().catch(() => ({ counts: {} })),
          Ee.runs().catch(() => ({ runs: [] }))
        ]), y = u.flows || [], m = c.campaigns || [], p = v.runs || [], h = f.counts?.all || 0;
        o.value = {
          flows: y.length,
          campaigns: m.length,
          contacts: h
        };
        const b = y.filter((T) => T.is_active).length, z = p.filter((T) => T.status === "completed").length, w = p.length ? Math.round(z / p.length * 100) : 100;
        a.value = {
          flowsCount: y.length,
          activeFlowsCount: b,
          campaignsCount: m.length,
          contactsCount: h,
          runsCount: p.length,
          runsSuccessRate: w
        };
      } catch {
      }
    }
    const d = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ke(() => {
      s(), l();
    }), (u, c) => (S(), $("div", C4, [
      i("div", A4, [
        i("div", T4, [
          i("div", null, [
            i("div", O4, [
              Y(N(rf), { class: "h-3.5 w-3.5" }),
              c[5] || (c[5] = i("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            c[6] || (c[6] = i("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            c[7] || (c[7] = i("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          i("div", N4, [
            i("div", {
              class: X(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              i("div", {
                class: X(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              i("div", null, [
                i("div", R4, q(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                i("div", M4, q(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              i("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: c[0] || (c[0] = (f) => n.value = "connection")
              }, q(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        i("div", I4, [
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[1] || (c[1] = (f) => n.value = "flows")
          }, [
            i("div", D4, [
              c[8] || (c[8] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              i("div", F4, [
                Y(N(Vn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", B4, [
              ne(q(a.value.activeFlowsCount) + " ", 1),
              c[9] || (c[9] = i("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            i("div", L4, " de " + q(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[2] || (c[2] = (f) => n.value = "campaigns")
          }, [
            i("div", U4, [
              c[10] || (c[10] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              i("div", q4, [
                Y(N(Ct), { class: "h-4 w-4" })
              ])
            ]),
            i("div", V4, q(a.value.campaignsCount), 1),
            c[11] || (c[11] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[3] || (c[3] = (f) => n.value = "contacts")
          }, [
            i("div", j4, [
              c[12] || (c[12] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              i("div", H4, [
                Y(N(Rn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", G4, q(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            c[13] || (c[13] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[4] || (c[4] = (f) => n.value = "runs")
          }, [
            i("div", W4, [
              c[14] || (c[14] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              i("div", X4, [
                Y(N($h), { class: "h-4 w-4" })
              ])
            ]),
            i("div", Y4, [
              ne(q(a.value.runsCount) + " ", 1),
              c[15] || (c[15] = i("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            i("div", K4, [
              c[16] || (c[16] = i("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              i("span", null, q(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        i("div", Z4, [
          (S(), $(te, null, Ne(t, (f) => i("button", {
            key: f.id,
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            (S(), Pe(Rt(f.icon), { class: "h-4 w-4" })),
            i("span", null, q(f.label), 1),
            d(f.id) !== null && d(f.id) > 0 ? (S(), $("span", {
              key: 0,
              class: X(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, q(d(f.id)), 3)) : oe("", !0)
          ], 10, J4)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (S(), $("p", Q4, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : oe("", !0),
      (S(), Pe(Rt(t.find((f) => f.id === n.value).component), _a({ key: n.value }, wh(n.value === "connection" ? { saved: s } : {})), null, 16))
    ]));
  }
}, tP = { class: "space-y-4" }, nP = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (S(), $("div", tP, [
      Y(cf, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = i("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          ne(" Fluxos, contatos e campanhas ficam no menu "),
          i("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          ne(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Tp = typeof global == "object" && global && global.Object === Object && global, rP = typeof self == "object" && self && self.Object === Object && self, Lt = Tp || rP || Function("return this")(), Jt = Lt.Symbol, Op = Object.prototype, oP = Op.hasOwnProperty, aP = Op.toString, zr = Jt ? Jt.toStringTag : void 0;
function sP(e) {
  var t = oP.call(e, zr), n = e[zr];
  try {
    e[zr] = void 0;
    var r = !0;
  } catch {
  }
  var o = aP.call(e);
  return r && (t ? e[zr] = n : delete e[zr]), o;
}
var iP = Object.prototype, lP = iP.toString;
function uP(e) {
  return lP.call(e);
}
var dP = "[object Null]", cP = "[object Undefined]", Wu = Jt ? Jt.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? cP : dP : Wu && Wu in Object(e) ? sP(e) : uP(e);
}
function Qt(e) {
  return e != null && typeof e == "object";
}
var fP = "[object Symbol]";
function Ra(e) {
  return typeof e == "symbol" || Qt(e) && Yn(e) == fP;
}
function pP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ft = Array.isArray, Xu = Jt ? Jt.prototype : void 0, Yu = Xu ? Xu.toString : void 0;
function Np(e) {
  if (typeof e == "string")
    return e;
  if (Ft(e))
    return pP(e, Np) + "";
  if (Ra(e))
    return Yu ? Yu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var hP = /\s/;
function mP(e) {
  for (var t = e.length; t-- && hP.test(e.charAt(t)); )
    ;
  return t;
}
var vP = /^\s+/;
function gP(e) {
  return e && e.slice(0, mP(e) + 1).replace(vP, "");
}
function kt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ku = NaN, yP = /^[-+]0x[0-9a-f]+$/i, bP = /^0b[01]+$/i, xP = /^0o[0-7]+$/i, wP = parseInt;
function Zu(e) {
  if (typeof e == "number")
    return e;
  if (Ra(e))
    return Ku;
  if (kt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = gP(e);
  var n = bP.test(e);
  return n || xP.test(e) ? wP(e.slice(2), n ? 2 : 8) : yP.test(e) ? Ku : +e;
}
function Rp(e) {
  return e;
}
var _P = "[object AsyncFunction]", kP = "[object Function]", SP = "[object GeneratorFunction]", EP = "[object Proxy]";
function yl(e) {
  if (!kt(e))
    return !1;
  var t = Yn(e);
  return t == kP || t == SP || t == _P || t == EP;
}
var hs = Lt["__core-js_shared__"], Ju = (function() {
  var e = /[^.]+$/.exec(hs && hs.keys && hs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function zP(e) {
  return !!Ju && Ju in e;
}
var $P = Function.prototype, PP = $P.toString;
function Kn(e) {
  if (e != null) {
    try {
      return PP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var CP = /[\\^$.*+?()[\]{}|]/g, AP = /^\[object .+?Constructor\]$/, TP = Function.prototype, OP = Object.prototype, NP = TP.toString, RP = OP.hasOwnProperty, MP = RegExp(
  "^" + NP.call(RP).replace(CP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function IP(e) {
  if (!kt(e) || zP(e))
    return !1;
  var t = yl(e) ? MP : AP;
  return t.test(Kn(e));
}
function DP(e, t) {
  return e?.[t];
}
function Zn(e, t) {
  var n = DP(e, t);
  return IP(n) ? n : void 0;
}
var Bi = Zn(Lt, "WeakMap"), Qu = Object.create, FP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!kt(t))
      return {};
    if (Qu)
      return Qu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function BP(e, t, n) {
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
function LP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var UP = 800, qP = 16, VP = Date.now;
function jP(e) {
  var t = 0, n = 0;
  return function() {
    var r = VP(), o = qP - (r - n);
    if (n = r, o > 0) {
      if (++t >= UP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function HP(e) {
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
})(), GP = ca ? function(e, t) {
  return ca(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: HP(t),
    writable: !0
  });
} : Rp, WP = jP(GP);
function XP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var YP = 9007199254740991, KP = /^(?:0|[1-9]\d*)$/;
function Ma(e, t) {
  var n = typeof e;
  return t = t ?? YP, !!t && (n == "number" || n != "symbol" && KP.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var ZP = Object.prototype, JP = ZP.hasOwnProperty;
function xl(e, t, n) {
  var r = e[t];
  (!(JP.call(e, t) && uo(r, n)) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function QP(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), o ? bl(n, l, d) : xl(n, l, d);
  }
  return n;
}
var ed = Math.max;
function eC(e, t, n) {
  return t = ed(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ed(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), BP(e, this, l);
  };
}
function tC(e, t) {
  return WP(eC(e, t, Rp), e + "");
}
var nC = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nC;
}
function Ia(e) {
  return e != null && wl(e.length) && !yl(e);
}
function rC(e, t, n) {
  if (!kt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ia(n) && Ma(t, n.length) : r == "string" && t in n) ? uo(n[t], e) : !1;
}
function oC(e) {
  return tC(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && rC(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var aC = Object.prototype;
function _l(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || aC;
  return e === n;
}
function sC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var iC = "[object Arguments]";
function td(e) {
  return Qt(e) && Yn(e) == iC;
}
var Mp = Object.prototype, lC = Mp.hasOwnProperty, uC = Mp.propertyIsEnumerable, fa = td(/* @__PURE__ */ (function() {
  return arguments;
})()) ? td : function(e) {
  return Qt(e) && lC.call(e, "callee") && !uC.call(e, "callee");
};
function dC() {
  return !1;
}
var Ip = typeof exports == "object" && exports && !exports.nodeType && exports, nd = Ip && typeof module == "object" && module && !module.nodeType && module, cC = nd && nd.exports === Ip, rd = cC ? Lt.Buffer : void 0, fC = rd ? rd.isBuffer : void 0, eo = fC || dC, pC = "[object Arguments]", hC = "[object Array]", mC = "[object Boolean]", vC = "[object Date]", gC = "[object Error]", yC = "[object Function]", bC = "[object Map]", xC = "[object Number]", wC = "[object Object]", _C = "[object RegExp]", kC = "[object Set]", SC = "[object String]", EC = "[object WeakMap]", zC = "[object ArrayBuffer]", $C = "[object DataView]", PC = "[object Float32Array]", CC = "[object Float64Array]", AC = "[object Int8Array]", TC = "[object Int16Array]", OC = "[object Int32Array]", NC = "[object Uint8Array]", RC = "[object Uint8ClampedArray]", MC = "[object Uint16Array]", IC = "[object Uint32Array]", Xe = {};
Xe[PC] = Xe[CC] = Xe[AC] = Xe[TC] = Xe[OC] = Xe[NC] = Xe[RC] = Xe[MC] = Xe[IC] = !0;
Xe[pC] = Xe[hC] = Xe[zC] = Xe[mC] = Xe[$C] = Xe[vC] = Xe[gC] = Xe[yC] = Xe[bC] = Xe[xC] = Xe[wC] = Xe[_C] = Xe[kC] = Xe[SC] = Xe[EC] = !1;
function DC(e) {
  return Qt(e) && wl(e.length) && !!Xe[Yn(e)];
}
function kl(e) {
  return function(t) {
    return e(t);
  };
}
var Dp = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Dp && typeof module == "object" && module && !module.nodeType && module, FC = Br && Br.exports === Dp, ms = FC && Tp.process, hr = (function() {
  try {
    var e = Br && Br.require && Br.require("util").types;
    return e || ms && ms.binding && ms.binding("util");
  } catch {
  }
})(), od = hr && hr.isTypedArray, Sl = od ? kl(od) : DC, BC = Object.prototype, LC = BC.hasOwnProperty;
function Fp(e, t) {
  var n = Ft(e), r = !n && fa(e), o = !n && !r && eo(e), a = !n && !r && !o && Sl(e), s = n || r || o || a, l = s ? sC(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || LC.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ma(u, d))) && l.push(u);
  return l;
}
function Bp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var UC = Bp(Object.keys, Object), qC = Object.prototype, VC = qC.hasOwnProperty;
function jC(e) {
  if (!_l(e))
    return UC(e);
  var t = [];
  for (var n in Object(e))
    VC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function HC(e) {
  return Ia(e) ? Fp(e) : jC(e);
}
function GC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var WC = Object.prototype, XC = WC.hasOwnProperty;
function YC(e) {
  if (!kt(e))
    return GC(e);
  var t = _l(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !XC.call(e, r)) || n.push(r);
  return n;
}
function Lp(e) {
  return Ia(e) ? Fp(e, !0) : YC(e);
}
var KC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ZC = /^\w*$/;
function JC(e, t) {
  if (Ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ra(e) ? !0 : ZC.test(e) || !KC.test(e) || t != null && e in Object(t);
}
var to = Zn(Object, "create");
function QC() {
  this.__data__ = to ? to(null) : {}, this.size = 0;
}
function eA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tA = "__lodash_hash_undefined__", nA = Object.prototype, rA = nA.hasOwnProperty;
function oA(e) {
  var t = this.__data__;
  if (to) {
    var n = t[e];
    return n === tA ? void 0 : n;
  }
  return rA.call(t, e) ? t[e] : void 0;
}
var aA = Object.prototype, sA = aA.hasOwnProperty;
function iA(e) {
  var t = this.__data__;
  return to ? t[e] !== void 0 : sA.call(t, e);
}
var lA = "__lodash_hash_undefined__";
function uA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = to && t === void 0 ? lA : t, this;
}
function Wn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Wn.prototype.clear = QC;
Wn.prototype.delete = eA;
Wn.prototype.get = oA;
Wn.prototype.has = iA;
Wn.prototype.set = uA;
function dA() {
  this.__data__ = [], this.size = 0;
}
function Da(e, t) {
  for (var n = e.length; n--; )
    if (uo(e[n][0], t))
      return n;
  return -1;
}
var cA = Array.prototype, fA = cA.splice;
function pA(e) {
  var t = this.__data__, n = Da(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : fA.call(t, n, 1), --this.size, !0;
}
function hA(e) {
  var t = this.__data__, n = Da(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function mA(e) {
  return Da(this.__data__, e) > -1;
}
function vA(e, t) {
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
fn.prototype.clear = dA;
fn.prototype.delete = pA;
fn.prototype.get = hA;
fn.prototype.has = mA;
fn.prototype.set = vA;
var no = Zn(Lt, "Map");
function gA() {
  this.size = 0, this.__data__ = {
    hash: new Wn(),
    map: new (no || fn)(),
    string: new Wn()
  };
}
function yA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Fa(e, t) {
  var n = e.__data__;
  return yA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bA(e) {
  var t = Fa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xA(e) {
  return Fa(this, e).get(e);
}
function wA(e) {
  return Fa(this, e).has(e);
}
function _A(e, t) {
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
pn.prototype.clear = gA;
pn.prototype.delete = bA;
pn.prototype.get = xA;
pn.prototype.has = wA;
pn.prototype.set = _A;
var kA = "Expected a function";
function El(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kA);
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
var SA = 500;
function EA(e) {
  var t = El(e, function(r) {
    return n.size === SA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var zA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $A = /\\(\\)?/g, PA = EA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zA, function(n, r, o, a) {
    t.push(o ? a.replace($A, "$1") : r || n);
  }), t;
});
function Up(e) {
  return e == null ? "" : Np(e);
}
function zl(e, t) {
  return Ft(e) ? e : JC(e, t) ? [e] : PA(Up(e));
}
function $l(e) {
  if (typeof e == "string" || Ra(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function CA(e, t) {
  t = zl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$l(t[n++])];
  return n && n == r ? e : void 0;
}
function wt(e, t, n) {
  var r = e == null ? void 0 : CA(e, t);
  return r === void 0 ? n : r;
}
function AA(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var qp = Bp(Object.getPrototypeOf, Object), TA = "[object Object]", OA = Function.prototype, NA = Object.prototype, Vp = OA.toString, RA = NA.hasOwnProperty, MA = Vp.call(Object);
function IA(e) {
  if (!Qt(e) || Yn(e) != TA)
    return !1;
  var t = qp(e);
  if (t === null)
    return !0;
  var n = RA.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Vp.call(n) == MA;
}
function DA(e) {
  return function(t) {
    return e?.[t];
  };
}
function FA() {
  this.__data__ = new fn(), this.size = 0;
}
function BA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function LA(e) {
  return this.__data__.get(e);
}
function UA(e) {
  return this.__data__.has(e);
}
var qA = 200;
function VA(e, t) {
  var n = this.__data__;
  if (n instanceof fn) {
    var r = n.__data__;
    if (!no || r.length < qA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new pn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new fn(e);
  this.size = t.size;
}
Zt.prototype.clear = FA;
Zt.prototype.delete = BA;
Zt.prototype.get = LA;
Zt.prototype.has = UA;
Zt.prototype.set = VA;
var jp = typeof exports == "object" && exports && !exports.nodeType && exports, ad = jp && typeof module == "object" && module && !module.nodeType && module, jA = ad && ad.exports === jp, sd = jA ? Lt.Buffer : void 0, id = sd ? sd.allocUnsafe : void 0;
function Hp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = id ? id(n) : new e.constructor(n);
  return e.copy(r), r;
}
function HA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function GA() {
  return [];
}
var WA = Object.prototype, XA = WA.propertyIsEnumerable, ld = Object.getOwnPropertySymbols, YA = ld ? function(e) {
  return e == null ? [] : (e = Object(e), HA(ld(e), function(t) {
    return XA.call(e, t);
  }));
} : GA;
function KA(e, t, n) {
  var r = t(e);
  return Ft(e) ? r : AA(r, n(e));
}
function Li(e) {
  return KA(e, HC, YA);
}
var Ui = Zn(Lt, "DataView"), qi = Zn(Lt, "Promise"), Vi = Zn(Lt, "Set"), ud = "[object Map]", ZA = "[object Object]", dd = "[object Promise]", cd = "[object Set]", fd = "[object WeakMap]", pd = "[object DataView]", JA = Kn(Ui), QA = Kn(no), eT = Kn(qi), tT = Kn(Vi), nT = Kn(Bi), Nt = Yn;
(Ui && Nt(new Ui(new ArrayBuffer(1))) != pd || no && Nt(new no()) != ud || qi && Nt(qi.resolve()) != dd || Vi && Nt(new Vi()) != cd || Bi && Nt(new Bi()) != fd) && (Nt = function(e) {
  var t = Yn(e), n = t == ZA ? e.constructor : void 0, r = n ? Kn(n) : "";
  if (r)
    switch (r) {
      case JA:
        return pd;
      case QA:
        return ud;
      case eT:
        return dd;
      case tT:
        return cd;
      case nT:
        return fd;
    }
  return t;
});
var rT = Object.prototype, oT = rT.hasOwnProperty;
function aT(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && oT.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var pa = Lt.Uint8Array;
function Pl(e) {
  var t = new e.constructor(e.byteLength);
  return new pa(t).set(new pa(e)), t;
}
function sT(e, t) {
  var n = Pl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var iT = /\w*$/;
function lT(e) {
  var t = new e.constructor(e.source, iT.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var hd = Jt ? Jt.prototype : void 0, md = hd ? hd.valueOf : void 0;
function uT(e) {
  return md ? Object(md.call(e)) : {};
}
function Gp(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var dT = "[object Boolean]", cT = "[object Date]", fT = "[object Map]", pT = "[object Number]", hT = "[object RegExp]", mT = "[object Set]", vT = "[object String]", gT = "[object Symbol]", yT = "[object ArrayBuffer]", bT = "[object DataView]", xT = "[object Float32Array]", wT = "[object Float64Array]", _T = "[object Int8Array]", kT = "[object Int16Array]", ST = "[object Int32Array]", ET = "[object Uint8Array]", zT = "[object Uint8ClampedArray]", $T = "[object Uint16Array]", PT = "[object Uint32Array]";
function CT(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case yT:
      return Pl(e);
    case dT:
    case cT:
      return new r(+e);
    case bT:
      return sT(e);
    case xT:
    case wT:
    case _T:
    case kT:
    case ST:
    case ET:
    case zT:
    case $T:
    case PT:
      return Gp(e, n);
    case fT:
      return new r();
    case pT:
    case vT:
      return new r(e);
    case hT:
      return lT(e);
    case mT:
      return new r();
    case gT:
      return uT(e);
  }
}
function Wp(e) {
  return typeof e.constructor == "function" && !_l(e) ? FP(qp(e)) : {};
}
var AT = "[object Map]";
function TT(e) {
  return Qt(e) && Nt(e) == AT;
}
var vd = hr && hr.isMap, OT = vd ? kl(vd) : TT, NT = "[object Set]";
function RT(e) {
  return Qt(e) && Nt(e) == NT;
}
var gd = hr && hr.isSet, MT = gd ? kl(gd) : RT, IT = 1, Xp = "[object Arguments]", DT = "[object Array]", FT = "[object Boolean]", BT = "[object Date]", LT = "[object Error]", Yp = "[object Function]", UT = "[object GeneratorFunction]", qT = "[object Map]", VT = "[object Number]", Kp = "[object Object]", jT = "[object RegExp]", HT = "[object Set]", GT = "[object String]", WT = "[object Symbol]", XT = "[object WeakMap]", YT = "[object ArrayBuffer]", KT = "[object DataView]", ZT = "[object Float32Array]", JT = "[object Float64Array]", QT = "[object Int8Array]", eO = "[object Int16Array]", tO = "[object Int32Array]", nO = "[object Uint8Array]", rO = "[object Uint8ClampedArray]", oO = "[object Uint16Array]", aO = "[object Uint32Array]", Ge = {};
Ge[Xp] = Ge[DT] = Ge[YT] = Ge[KT] = Ge[FT] = Ge[BT] = Ge[ZT] = Ge[JT] = Ge[QT] = Ge[eO] = Ge[tO] = Ge[qT] = Ge[VT] = Ge[Kp] = Ge[jT] = Ge[HT] = Ge[GT] = Ge[WT] = Ge[nO] = Ge[rO] = Ge[oO] = Ge[aO] = !0;
Ge[LT] = Ge[Yp] = Ge[XT] = !1;
function Vo(e, t, n, r, o, a) {
  var s, l = t & IT;
  if (s !== void 0)
    return s;
  if (!kt(e))
    return e;
  var d = Ft(e);
  if (d)
    s = aT(e);
  else {
    var u = Nt(e), c = u == Yp || u == UT;
    if (eo(e))
      return Hp(e, l);
    if (u == Kp || u == Xp || c && !o)
      s = c ? {} : Wp(e);
    else {
      if (!Ge[u])
        return o ? e : {};
      s = CT(e, u, l);
    }
  }
  a || (a = new Zt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, s), MT(e) ? e.forEach(function(m) {
    s.add(Vo(m, t, n, m, e, a));
  }) : OT(e) && e.forEach(function(m, p) {
    s.set(p, Vo(m, t, n, p, e, a));
  });
  var v = Li, y = d ? void 0 : v(e);
  return XP(y || e, function(m, p) {
    y && (p = m, m = e[p]), xl(s, p, Vo(m, t, n, p, e, a));
  }), s;
}
var sO = 1, iO = 4;
function lt(e) {
  return Vo(e, sO | iO);
}
var lO = "__lodash_hash_undefined__";
function uO(e) {
  return this.__data__.set(e, lO), this;
}
function dO(e) {
  return this.__data__.has(e);
}
function ha(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pn(); ++t < n; )
    this.add(e[t]);
}
ha.prototype.add = ha.prototype.push = uO;
ha.prototype.has = dO;
function cO(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function fO(e, t) {
  return e.has(t);
}
var pO = 1, hO = 2;
function Zp(e, t, n, r, o, a) {
  var s = n & pO, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, v = !0, y = n & hO ? new ha() : void 0;
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
      if (!cO(t, function(b, z) {
        if (!fO(y, z) && (m === b || o(m, b, n, r, a)))
          return y.push(z);
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
function mO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function vO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var gO = 1, yO = 2, bO = "[object Boolean]", xO = "[object Date]", wO = "[object Error]", _O = "[object Map]", kO = "[object Number]", SO = "[object RegExp]", EO = "[object Set]", zO = "[object String]", $O = "[object Symbol]", PO = "[object ArrayBuffer]", CO = "[object DataView]", yd = Jt ? Jt.prototype : void 0, vs = yd ? yd.valueOf : void 0;
function AO(e, t, n, r, o, a, s) {
  switch (n) {
    case CO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case PO:
      return !(e.byteLength != t.byteLength || !a(new pa(e), new pa(t)));
    case bO:
    case xO:
    case kO:
      return uo(+e, +t);
    case wO:
      return e.name == t.name && e.message == t.message;
    case SO:
    case zO:
      return e == t + "";
    case _O:
      var l = mO;
    case EO:
      var d = r & gO;
      if (l || (l = vO), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= yO, s.set(e, t);
      var c = Zp(l(e), l(t), r, o, a, s);
      return s.delete(e), c;
    case $O:
      if (vs)
        return vs.call(e) == vs.call(t);
  }
  return !1;
}
var TO = 1, OO = Object.prototype, NO = OO.hasOwnProperty;
function RO(e, t, n, r, o, a) {
  var s = n & TO, l = Li(e), d = l.length, u = Li(t), c = u.length;
  if (d != c && !s)
    return !1;
  for (var f = d; f--; ) {
    var v = l[f];
    if (!(s ? v in t : NO.call(t, v)))
      return !1;
  }
  var y = a.get(e), m = a.get(t);
  if (y && m)
    return y == t && m == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var h = s; ++f < d; ) {
    v = l[f];
    var b = e[v], z = t[v];
    if (r)
      var w = s ? r(z, b, v, t, e, a) : r(b, z, v, e, t, a);
    if (!(w === void 0 ? b === z || o(b, z, n, r, a) : w)) {
      p = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (p && !h) {
    var T = e.constructor, P = t.constructor;
    T != P && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof P == "function" && P instanceof P) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var MO = 1, bd = "[object Arguments]", xd = "[object Array]", Ao = "[object Object]", IO = Object.prototype, wd = IO.hasOwnProperty;
function DO(e, t, n, r, o, a) {
  var s = Ft(e), l = Ft(t), d = s ? xd : Nt(e), u = l ? xd : Nt(t);
  d = d == bd ? Ao : d, u = u == bd ? Ao : u;
  var c = d == Ao, f = u == Ao, v = d == u;
  if (v && eo(e)) {
    if (!eo(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Zt()), s || Sl(e) ? Zp(e, t, n, r, o, a) : AO(e, t, d, n, r, o, a);
  if (!(n & MO)) {
    var y = c && wd.call(e, "__wrapped__"), m = f && wd.call(t, "__wrapped__");
    if (y || m) {
      var p = y ? e.value() : e, h = m ? t.value() : t;
      return a || (a = new Zt()), o(p, h, n, r, a);
    }
  }
  return v ? (a || (a = new Zt()), RO(e, t, n, r, o, a)) : !1;
}
function Jp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Qt(e) && !Qt(t) ? e !== e && t !== t : DO(e, t, n, r, Jp, o);
}
function FO(e, t, n) {
  t = zl(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $l(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && Ma(s, o) && (Ft(e) || fa(e)));
}
function BO(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), l = s.length; l--; ) {
      var d = s[++o];
      if (n(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var LO = BO(), gs = function() {
  return Lt.Date.now();
}, UO = "Expected a function", qO = Math.max, VO = Math.min;
function jO(e, t, n) {
  var r, o, a, s, l, d, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(UO);
  t = Zu(t) || 0, kt(n) && (c = !0, f = "maxWait" in n, a = f ? qO(Zu(n.maxWait) || 0, t) : a, v = "trailing" in n ? !0 : v);
  function y(_) {
    var g = r, k = o;
    return r = o = void 0, u = _, s = e.apply(k, g), s;
  }
  function m(_) {
    return u = _, l = setTimeout(b, t), c ? y(_) : s;
  }
  function p(_) {
    var g = _ - d, k = _ - u, V = t - g;
    return f ? VO(V, a - k) : V;
  }
  function h(_) {
    var g = _ - d, k = _ - u;
    return d === void 0 || g >= t || g < 0 || f && k >= a;
  }
  function b() {
    var _ = gs();
    if (h(_))
      return z(_);
    l = setTimeout(b, p(_));
  }
  function z(_) {
    return l = void 0, v && r ? y(_) : (r = o = void 0, s);
  }
  function w() {
    l !== void 0 && clearTimeout(l), u = 0, r = d = o = l = void 0;
  }
  function T() {
    return l === void 0 ? s : z(gs());
  }
  function P() {
    var _ = gs(), g = h(_);
    if (r = arguments, o = this, d = _, g) {
      if (l === void 0)
        return m(d);
      if (f)
        return clearTimeout(l), l = setTimeout(b, t), y(d);
    }
    return l === void 0 && (l = setTimeout(b, t)), s;
  }
  return P.cancel = w, P.flush = T, P;
}
function ji(e, t, n) {
  (n !== void 0 && !uo(e[t], n) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function HO(e) {
  return Qt(e) && Ia(e);
}
function Hi(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function GO(e) {
  return QP(e, Lp(e));
}
function WO(e, t, n, r, o, a, s) {
  var l = Hi(e, n), d = Hi(t, n), u = s.get(d);
  if (u) {
    ji(e, n, u);
    return;
  }
  var c = a ? a(l, d, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var v = Ft(d), y = !v && eo(d), m = !v && !y && Sl(d);
    c = d, v || y || m ? Ft(l) ? c = l : HO(l) ? c = LP(l) : y ? (f = !1, c = Hp(d, !0)) : m ? (f = !1, c = Gp(d, !0)) : c = [] : IA(d) || fa(d) ? (c = l, fa(l) ? c = GO(l) : (!kt(l) || yl(l)) && (c = Wp(d))) : f = !1;
  }
  f && (s.set(d, c), o(c, d, r, a, s), s.delete(d)), ji(e, n, c);
}
function Qp(e, t, n, r, o) {
  e !== t && LO(t, function(a, s) {
    if (o || (o = new Zt()), kt(a))
      WO(e, t, s, n, Qp, r, o);
    else {
      var l = r ? r(Hi(e, s), a, s + "", e, t, o) : void 0;
      l === void 0 && (l = a), ji(e, s, l);
    }
  }, Lp);
}
var XO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, YO = DA(XO), e0 = /[&<>"']/g, KO = RegExp(e0.source);
function ZO(e) {
  return e = Up(e), e && KO.test(e) ? e.replace(e0, YO) : e;
}
var JO = Object.prototype, QO = JO.hasOwnProperty;
function e8(e, t) {
  return e != null && QO.call(e, t);
}
function t0(e, t) {
  return e != null && FO(e, t, e8);
}
function kn(e, t) {
  return Jp(e, t);
}
var Gi = oC(function(e, t, n) {
  Qp(e, t, n);
});
function t8(e, t, n, r) {
  if (!kt(e))
    return e;
  t = zl(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var d = $l(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != s) {
      var c = l[d];
      u = void 0, u === void 0 && (u = kt(c) ? c : Ma(t[o + 1]) ? [] : {});
    }
    xl(l, d, u), l = l[d];
  }
  return e;
}
function zt(e, t, n) {
  return e == null ? e : t8(e, t, n);
}
var _d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function n8(e) {
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
var ys, kd;
function br() {
  return kd || (kd = 1, ys = TypeError), ys;
}
const r8 = {}, o8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r8
}, Symbol.toStringTag, { value: "Module" })), a8 = /* @__PURE__ */ n8(o8);
var bs, Sd;
function Ba() {
  if (Sd) return bs;
  Sd = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, y = v ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, h = Function.prototype.toString, b = String.prototype.match, z = String.prototype.slice, w = String.prototype.replace, T = String.prototype.toUpperCase, P = String.prototype.toLowerCase, _ = RegExp.prototype.test, g = Array.prototype.concat, k = Array.prototype.join, V = Array.prototype.slice, D = Math.floor, F = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, C = Object.getOwnPropertySymbols, j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", L = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, A = Object.prototype.propertyIsEnumerable, I = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(K) {
    return K.__proto__;
  } : null);
  function x(K, J) {
    if (K === 1 / 0 || K === -1 / 0 || K !== K || K && K > -1e3 && K < 1e3 || _.call(/e/, J))
      return J;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof K == "number") {
      var He = K < 0 ? -D(-K) : D(K);
      if (He !== K) {
        var We = String(He), Re = z.call(J, We.length + 1);
        return w.call(We, Le, "$&_") + "." + w.call(w.call(Re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return w.call(J, Le, "$&_");
  }
  var M = a8, O = M.custom, Q = B(O) ? O : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, xe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  bs = function K(J, Le, He, We) {
    var Re = Le || {};
    if (G(Re, "quoteStyle") && !G(fe, Re.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (G(Re, "maxStringLength") && (typeof Re.maxStringLength == "number" ? Re.maxStringLength < 0 && Re.maxStringLength !== 1 / 0 : Re.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var hn = G(Re, "customInspect") ? Re.customInspect : !0;
    if (typeof hn != "boolean" && hn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (G(Re, "indent") && Re.indent !== null && Re.indent !== "	" && !(parseInt(Re.indent, 10) === Re.indent && Re.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (G(Re, "numericSeparator") && typeof Re.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Cn = Re.numericSeparator;
    if (typeof J > "u")
      return "undefined";
    if (J === null)
      return "null";
    if (typeof J == "boolean")
      return J ? "true" : "false";
    if (typeof J == "string")
      return gt(J, Re);
    if (typeof J == "number") {
      if (J === 0)
        return 1 / 0 / J > 0 ? "0" : "-0";
      var yt = String(J);
      return Cn ? x(J, yt) : yt;
    }
    if (typeof J == "bigint") {
      var mn = String(J) + "n";
      return Cn ? x(J, mn) : mn;
    }
    var Ka = typeof Re.depth > "u" ? 5 : Re.depth;
    if (typeof He > "u" && (He = 0), He >= Ka && Ka > 0 && typeof J == "object")
      return ge(J) ? "[Array]" : "[Object]";
    var Jn = uh(Re, He);
    if (typeof We > "u")
      We = [];
    else if (ie(We, J) >= 0)
      return "[Circular]";
    function At(Qn, yo, ch) {
      if (yo && (We = V.call(We), We.push(yo)), ch) {
        var Xl = {
          depth: Re.depth
        };
        return G(Re, "quoteStyle") && (Xl.quoteStyle = Re.quoteStyle), K(Qn, Xl, He + 1, We);
      }
      return K(Qn, Re, He + 1, We);
    }
    if (typeof J == "function" && !ze(J)) {
      var Ul = se(J), ql = vo(J, At);
      return "[Function" + (Ul ? ": " + Ul : " (anonymous)") + "]" + (ql.length > 0 ? " { " + k.call(ql, ", ") + " }" : "");
    }
    if (B(J)) {
      var Vl = E ? w.call(String(J), /^(Symbol\(.*\))_[^)]*$/, "$1") : j.call(J);
      return typeof J == "object" && !E ? Pn(Vl) : Vl;
    }
    if (qt(J)) {
      for (var _r = "<" + P.call(String(J.nodeName)), Za = J.attributes || [], go = 0; go < Za.length; go++)
        _r += " " + Za[go].name + "=" + ke(ae(Za[go].value), "double", Re);
      return _r += ">", J.childNodes && J.childNodes.length && (_r += "..."), _r += "</" + P.call(String(J.nodeName)) + ">", _r;
    }
    if (ge(J)) {
      if (J.length === 0)
        return "[]";
      var Ja = vo(J, At);
      return Jn && !lh(Ja) ? "[" + Ya(Ja, Jn) + "]" : "[ " + k.call(Ja, ", ") + " ]";
    }
    if (de(J)) {
      var Qa = vo(J, At);
      return !("cause" in Error.prototype) && "cause" in J && !A.call(J, "cause") ? "{ [" + String(J) + "] " + k.call(g.call("[cause]: " + At(J.cause), Qa), ", ") + " }" : Qa.length === 0 ? "[" + String(J) + "]" : "{ [" + String(J) + "] " + k.call(Qa, ", ") + " }";
    }
    if (typeof J == "object" && hn) {
      if (Q && typeof J[Q] == "function" && M)
        return M(J, { depth: Ka - He });
      if (hn !== "symbol" && typeof J.inspect == "function")
        return J.inspect();
    }
    if (he(J)) {
      var jl = [];
      return r && r.call(J, function(Qn, yo) {
        jl.push(At(yo, J, !0) + " => " + At(Qn, J));
      }), Ll("Map", n.call(J), jl, Jn);
    }
    if (Ce(J)) {
      var Hl = [];
      return l && l.call(J, function(Qn) {
        Hl.push(At(Qn, J));
      }), Ll("Set", s.call(J), Hl, Jn);
    }
    if (me(J))
      return wr("WeakMap");
    if (Be(J))
      return wr("WeakSet");
    if (we(J))
      return wr("WeakRef");
    if (ue(J))
      return Pn(At(Number(J)));
    if (R(J))
      return Pn(At(F.call(J)));
    if (ye(J))
      return Pn(m.call(J));
    if (_e(J))
      return Pn(At(String(J)));
    if (typeof window < "u" && J === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && J === globalThis || typeof _d < "u" && J === _d)
      return "{ [object globalThis] }";
    if (!Te(J) && !ze(J)) {
      var es = vo(J, At), Gl = I ? I(J) === Object.prototype : J instanceof Object || J.constructor === Object, ts = J instanceof Object ? "" : "null prototype", Wl = !Gl && L && Object(J) === J && L in J ? z.call(H(J), 8, -1) : ts ? "Object" : "", dh = Gl || typeof J.constructor != "function" ? "" : J.constructor.name ? J.constructor.name + " " : "", ns = dh + (Wl || ts ? "[" + k.call(g.call([], Wl || [], ts || []), ": ") + "] " : "");
      return es.length === 0 ? ns + "{}" : Jn ? ns + "{" + Ya(es, Jn) + "}" : ns + "{ " + k.call(es, ", ") + " }";
    }
    return String(J);
  };
  function ke(K, J, Le) {
    var He = Le.quoteStyle || J, We = fe[He];
    return We + K + We;
  }
  function ae(K) {
    return w.call(String(K), /"/g, "&quot;");
  }
  function le(K) {
    return !L || !(typeof K == "object" && (L in K || typeof K[L] < "u"));
  }
  function ge(K) {
    return H(K) === "[object Array]" && le(K);
  }
  function Te(K) {
    return H(K) === "[object Date]" && le(K);
  }
  function ze(K) {
    return H(K) === "[object RegExp]" && le(K);
  }
  function de(K) {
    return H(K) === "[object Error]" && le(K);
  }
  function _e(K) {
    return H(K) === "[object String]" && le(K);
  }
  function ue(K) {
    return H(K) === "[object Number]" && le(K);
  }
  function ye(K) {
    return H(K) === "[object Boolean]" && le(K);
  }
  function B(K) {
    if (E)
      return K && typeof K == "object" && K instanceof Symbol;
    if (typeof K == "symbol")
      return !0;
    if (!K || typeof K != "object" || !j)
      return !1;
    try {
      return j.call(K), !0;
    } catch {
    }
    return !1;
  }
  function R(K) {
    if (!K || typeof K != "object" || !F)
      return !1;
    try {
      return F.call(K), !0;
    } catch {
    }
    return !1;
  }
  var U = Object.prototype.hasOwnProperty || function(K) {
    return K in this;
  };
  function G(K, J) {
    return U.call(K, J);
  }
  function H(K) {
    return p.call(K);
  }
  function se(K) {
    if (K.name)
      return K.name;
    var J = b.call(h.call(K), /^function\s*([\w$]+)/);
    return J ? J[1] : null;
  }
  function ie(K, J) {
    if (K.indexOf)
      return K.indexOf(J);
    for (var Le = 0, He = K.length; Le < He; Le++)
      if (K[Le] === J)
        return Le;
    return -1;
  }
  function he(K) {
    if (!n || !K || typeof K != "object")
      return !1;
    try {
      n.call(K);
      try {
        s.call(K);
      } catch {
        return !0;
      }
      return K instanceof Map;
    } catch {
    }
    return !1;
  }
  function me(K) {
    if (!u || !K || typeof K != "object")
      return !1;
    try {
      u.call(K, u);
      try {
        f.call(K, f);
      } catch {
        return !0;
      }
      return K instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function we(K) {
    if (!y || !K || typeof K != "object")
      return !1;
    try {
      return y.call(K), !0;
    } catch {
    }
    return !1;
  }
  function Ce(K) {
    if (!s || !K || typeof K != "object")
      return !1;
    try {
      s.call(K);
      try {
        n.call(K);
      } catch {
        return !0;
      }
      return K instanceof Set;
    } catch {
    }
    return !1;
  }
  function Be(K) {
    if (!f || !K || typeof K != "object")
      return !1;
    try {
      f.call(K, f);
      try {
        u.call(K, u);
      } catch {
        return !0;
      }
      return K instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function qt(K) {
    return !K || typeof K != "object" ? !1 : typeof HTMLElement < "u" && K instanceof HTMLElement ? !0 : typeof K.nodeName == "string" && typeof K.getAttribute == "function";
  }
  function gt(K, J) {
    if (K.length > J.maxStringLength) {
      var Le = K.length - J.maxStringLength, He = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(z.call(K, 0, J.maxStringLength), J) + He;
    }
    var We = xe[J.quoteStyle || "single"];
    We.lastIndex = 0;
    var Re = w.call(w.call(K, We, "\\$1"), /[\x00-\x1f]/g, Xa);
    return ke(Re, "single", J);
  }
  function Xa(K) {
    var J = K.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[J];
    return Le ? "\\" + Le : "\\x" + (J < 16 ? "0" : "") + T.call(J.toString(16));
  }
  function Pn(K) {
    return "Object(" + K + ")";
  }
  function wr(K) {
    return K + " { ? }";
  }
  function Ll(K, J, Le, He) {
    var We = He ? Ya(Le, He) : k.call(Le, ", ");
    return K + " (" + J + ") {" + We + "}";
  }
  function lh(K) {
    for (var J = 0; J < K.length; J++)
      if (ie(K[J], `
`) >= 0)
        return !1;
    return !0;
  }
  function uh(K, J) {
    var Le;
    if (K.indent === "	")
      Le = "	";
    else if (typeof K.indent == "number" && K.indent > 0)
      Le = k.call(Array(K.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: k.call(Array(J + 1), Le)
    };
  }
  function Ya(K, J) {
    if (K.length === 0)
      return "";
    var Le = `
` + J.prev + J.base;
    return Le + k.call(K, "," + Le) + `
` + J.prev;
  }
  function vo(K, J) {
    var Le = ge(K), He = [];
    if (Le) {
      He.length = K.length;
      for (var We = 0; We < K.length; We++)
        He[We] = G(K, We) ? J(K[We], K) : "";
    }
    var Re = typeof C == "function" ? C(K) : [], hn;
    if (E) {
      hn = {};
      for (var Cn = 0; Cn < Re.length; Cn++)
        hn["$" + Re[Cn]] = Re[Cn];
    }
    for (var yt in K)
      G(K, yt) && (Le && String(Number(yt)) === yt && yt < K.length || E && hn["$" + yt] instanceof Symbol || (_.call(/[^\w$]/, yt) ? He.push(J(yt, K) + ": " + J(K[yt], K)) : He.push(yt + ": " + J(K[yt], K))));
    if (typeof C == "function")
      for (var mn = 0; mn < Re.length; mn++)
        A.call(K, Re[mn]) && He.push("[" + J(Re[mn]) + "]: " + J(K[Re[mn]], K));
    return He;
  }
  return bs;
}
var xs, Ed;
function s8() {
  if (Ed) return xs;
  Ed = 1;
  var e = /* @__PURE__ */ Ba(), t = /* @__PURE__ */ br(), n = function(l, d, u) {
    for (var c = l, f; (f = c.next) != null; c = f)
      if (f.key === d)
        return c.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, r = function(l, d) {
    if (l) {
      var u = n(l, d);
      return u && u.value;
    }
  }, o = function(l, d, u) {
    var c = n(l, d);
    c ? c.value = u : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: d,
      next: l.next,
      value: u
    };
  }, a = function(l, d) {
    return l ? !!n(l, d) : !1;
  }, s = function(l, d) {
    if (l)
      return n(l, d, !0);
  };
  return xs = function() {
    var d, u = {
      assert: function(c) {
        if (!u.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var f = s(d, c);
        return f && d && !d.next && (d = void 0), !!f;
      },
      get: function(c) {
        return r(d, c);
      },
      has: function(c) {
        return a(d, c);
      },
      set: function(c, f) {
        d || (d = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          d,
          c,
          f
        );
      }
    };
    return u;
  }, xs;
}
var ws, zd;
function n0() {
  return zd || (zd = 1, ws = Object), ws;
}
var _s, $d;
function i8() {
  return $d || ($d = 1, _s = Error), _s;
}
var ks, Pd;
function l8() {
  return Pd || (Pd = 1, ks = EvalError), ks;
}
var Ss, Cd;
function u8() {
  return Cd || (Cd = 1, Ss = RangeError), Ss;
}
var Es, Ad;
function d8() {
  return Ad || (Ad = 1, Es = ReferenceError), Es;
}
var zs, Td;
function c8() {
  return Td || (Td = 1, zs = SyntaxError), zs;
}
var $s, Od;
function f8() {
  return Od || (Od = 1, $s = URIError), $s;
}
var Ps, Nd;
function p8() {
  return Nd || (Nd = 1, Ps = Math.abs), Ps;
}
var Cs, Rd;
function h8() {
  return Rd || (Rd = 1, Cs = Math.floor), Cs;
}
var As, Md;
function m8() {
  return Md || (Md = 1, As = Math.max), As;
}
var Ts, Id;
function v8() {
  return Id || (Id = 1, Ts = Math.min), Ts;
}
var Os, Dd;
function g8() {
  return Dd || (Dd = 1, Os = Math.pow), Os;
}
var Ns, Fd;
function y8() {
  return Fd || (Fd = 1, Ns = Math.round), Ns;
}
var Rs, Bd;
function b8() {
  return Bd || (Bd = 1, Rs = Number.isNaN || function(t) {
    return t !== t;
  }), Rs;
}
var Ms, Ld;
function x8() {
  if (Ld) return Ms;
  Ld = 1;
  var e = /* @__PURE__ */ b8();
  return Ms = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Ms;
}
var Is, Ud;
function w8() {
  return Ud || (Ud = 1, Is = Object.getOwnPropertyDescriptor), Is;
}
var Ds, qd;
function r0() {
  if (qd) return Ds;
  qd = 1;
  var e = /* @__PURE__ */ w8();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ds = e, Ds;
}
var Fs, Vd;
function _8() {
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
var Bs, jd;
function k8() {
  return jd || (jd = 1, Bs = function() {
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
var Ls, Hd;
function S8() {
  if (Hd) return Ls;
  Hd = 1;
  var e = typeof Symbol < "u" && Symbol, t = k8();
  return Ls = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ls;
}
var Us, Gd;
function o0() {
  return Gd || (Gd = 1, Us = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Us;
}
var qs, Wd;
function a0() {
  if (Wd) return qs;
  Wd = 1;
  var e = /* @__PURE__ */ n0();
  return qs = e.getPrototypeOf || null, qs;
}
var Vs, Xd;
function E8() {
  if (Xd) return Vs;
  Xd = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(d, u) {
    for (var c = [], f = 0; f < d.length; f += 1)
      c[f] = d[f];
    for (var v = 0; v < u.length; v += 1)
      c[v + d.length] = u[v];
    return c;
  }, a = function(d, u) {
    for (var c = [], f = u, v = 0; f < d.length; f += 1, v += 1)
      c[v] = d[f];
    return c;
  }, s = function(l, d) {
    for (var u = "", c = 0; c < l.length; c += 1)
      u += l[c], c + 1 < l.length && (u += d);
    return u;
  };
  return Vs = function(d) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var c = a(arguments, 1), f, v = function() {
      if (this instanceof f) {
        var b = u.apply(
          this,
          o(c, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return u.apply(
        d,
        o(c, arguments)
      );
    }, y = n(0, u.length - c.length), m = [], p = 0; p < y; p++)
      m[p] = "$" + p;
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, Vs;
}
var js, Yd;
function La() {
  if (Yd) return js;
  Yd = 1;
  var e = E8();
  return js = Function.prototype.bind || e, js;
}
var Hs, Kd;
function Cl() {
  return Kd || (Kd = 1, Hs = Function.prototype.call), Hs;
}
var Gs, Zd;
function s0() {
  return Zd || (Zd = 1, Gs = Function.prototype.apply), Gs;
}
var Ws, Jd;
function z8() {
  return Jd || (Jd = 1, Ws = typeof Reflect < "u" && Reflect && Reflect.apply), Ws;
}
var Xs, Qd;
function $8() {
  if (Qd) return Xs;
  Qd = 1;
  var e = La(), t = s0(), n = Cl(), r = z8();
  return Xs = r || e.call(n, t), Xs;
}
var Ys, ec;
function i0() {
  if (ec) return Ys;
  ec = 1;
  var e = La(), t = /* @__PURE__ */ br(), n = Cl(), r = $8();
  return Ys = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ys;
}
var Ks, tc;
function P8() {
  if (tc) return Ks;
  tc = 1;
  var e = i0(), t = /* @__PURE__ */ r0(), n;
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
var Zs, nc;
function C8() {
  if (nc) return Zs;
  nc = 1;
  var e = o0(), t = a0(), n = /* @__PURE__ */ P8();
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
var Js, rc;
function A8() {
  if (rc) return Js;
  rc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = La();
  return Js = n.call(e, t), Js;
}
var Qs, oc;
function Al() {
  if (oc) return Qs;
  oc = 1;
  var e, t = /* @__PURE__ */ n0(), n = /* @__PURE__ */ i8(), r = /* @__PURE__ */ l8(), o = /* @__PURE__ */ u8(), a = /* @__PURE__ */ d8(), s = /* @__PURE__ */ c8(), l = /* @__PURE__ */ br(), d = /* @__PURE__ */ f8(), u = /* @__PURE__ */ p8(), c = /* @__PURE__ */ h8(), f = /* @__PURE__ */ m8(), v = /* @__PURE__ */ v8(), y = /* @__PURE__ */ g8(), m = /* @__PURE__ */ y8(), p = /* @__PURE__ */ x8(), h = Function, b = function(ze) {
    try {
      return h('"use strict"; return (' + ze + ").constructor;")();
    } catch {
    }
  }, z = /* @__PURE__ */ r0(), w = /* @__PURE__ */ _8(), T = function() {
    throw new l();
  }, P = z ? (function() {
    try {
      return arguments.callee, T;
    } catch {
      try {
        return z(arguments, "callee").get;
      } catch {
        return T;
      }
    }
  })() : T, _ = S8()(), g = C8(), k = a0(), V = o0(), D = s0(), F = Cl(), C = {}, j = typeof Uint8Array > "u" || !g ? e : g(Uint8Array), E = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && g ? g([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": C,
    "%AsyncGenerator%": C,
    "%AsyncGeneratorFunction%": C,
    "%AsyncIteratorPrototype%": C,
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
    "%GeneratorFunction%": C,
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
    "%Object.getOwnPropertyDescriptor%": z,
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
    "%ThrowTypeError%": P,
    "%TypedArray%": j,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": F,
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": u,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": y,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": V
  };
  if (g)
    try {
      null.error;
    } catch (ze) {
      var L = g(g(ze));
      E["%Error.prototype%"] = L;
    }
  var A = function ze(de) {
    var _e;
    if (de === "%AsyncFunction%")
      _e = b("async function () {}");
    else if (de === "%GeneratorFunction%")
      _e = b("function* () {}");
    else if (de === "%AsyncGeneratorFunction%")
      _e = b("async function* () {}");
    else if (de === "%AsyncGenerator%") {
      var ue = ze("%AsyncGeneratorFunction%");
      ue && (_e = ue.prototype);
    } else if (de === "%AsyncIteratorPrototype%") {
      var ye = ze("%AsyncGenerator%");
      ye && g && (_e = g(ye.prototype));
    }
    return E[de] = _e, _e;
  }, I = {
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
  }, x = La(), M = /* @__PURE__ */ A8(), O = x.call(F, Array.prototype.concat), Q = x.call(D, Array.prototype.splice), fe = x.call(F, String.prototype.replace), xe = x.call(F, String.prototype.slice), ke = x.call(F, RegExp.prototype.exec), ae = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, le = /\\(\\)?/g, ge = function(de) {
    var _e = xe(de, 0, 1), ue = xe(de, -1);
    if (_e === "%" && ue !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ue === "%" && _e !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ye = [];
    return fe(de, ae, function(B, R, U, G) {
      ye[ye.length] = U ? fe(G, le, "$1") : R || B;
    }), ye;
  }, Te = function(de, _e) {
    var ue = de, ye;
    if (M(I, ue) && (ye = I[ue], ue = "%" + ye[0] + "%"), M(E, ue)) {
      var B = E[ue];
      if (B === C && (B = A(ue)), typeof B > "u" && !_e)
        throw new l("intrinsic " + de + " exists, but is not available. Please file an issue!");
      return {
        alias: ye,
        name: ue,
        value: B
      };
    }
    throw new s("intrinsic " + de + " does not exist!");
  };
  return Qs = function(de, _e) {
    if (typeof de != "string" || de.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof _e != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (ke(/^%?[^%]*%?$/, de) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ue = ge(de), ye = ue.length > 0 ? ue[0] : "", B = Te("%" + ye + "%", _e), R = B.name, U = B.value, G = !1, H = B.alias;
    H && (ye = H[0], Q(ue, O([0, 1], H)));
    for (var se = 1, ie = !0; se < ue.length; se += 1) {
      var he = ue[se], me = xe(he, 0, 1), we = xe(he, -1);
      if ((me === '"' || me === "'" || me === "`" || we === '"' || we === "'" || we === "`") && me !== we)
        throw new s("property names with quotes must have matching quotes");
      if ((he === "constructor" || !ie) && (G = !0), ye += "." + he, R = "%" + ye + "%", M(E, R))
        U = E[R];
      else if (U != null) {
        if (!(he in U)) {
          if (!_e)
            throw new l("base intrinsic for " + de + " exists, but the property is not available.");
          return;
        }
        if (z && se + 1 >= ue.length) {
          var Ce = z(U, he);
          ie = !!Ce, ie && "get" in Ce && !("originalValue" in Ce.get) ? U = Ce.get : U = U[he];
        } else
          ie = M(U, he), U = U[he];
        ie && !G && (E[R] = U);
      }
    }
    return U;
  }, Qs;
}
var ei, ac;
function l0() {
  if (ac) return ei;
  ac = 1;
  var e = /* @__PURE__ */ Al(), t = i0(), n = t([e("%String.prototype.indexOf%")]);
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
var ti, sc;
function u0() {
  if (sc) return ti;
  sc = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ l0(), n = /* @__PURE__ */ Ba(), r = /* @__PURE__ */ br(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return ti = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(y) {
        if (!v.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (f) {
          var m = d(f, y);
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
var ni, ic;
function T8() {
  if (ic) return ni;
  ic = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ l0(), n = /* @__PURE__ */ Ba(), r = u0(), o = /* @__PURE__ */ br(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
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
          return a && m && (typeof m == "object" || typeof m == "function") && f ? d(f, m) : !!v && v.has(m);
        },
        set: function(m, p) {
          a && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new a()), l(f, m, p)) : r && (v || (v = r()), v.set(m, p));
        }
      };
      return y;
    }
  ) : r, ni;
}
var ri, lc;
function d0() {
  if (lc) return ri;
  lc = 1;
  var e = /* @__PURE__ */ br(), t = /* @__PURE__ */ Ba(), n = s8(), r = u0(), o = T8(), a = o || r || n;
  return ri = function() {
    var l, d = {
      assert: function(u) {
        if (!d.has(u))
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
      set: function(u, c) {
        l || (l = a()), l.set(u, c);
      }
    };
    return d;
  }, ri;
}
var oi, uc;
function Tl() {
  if (uc) return oi;
  uc = 1;
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
var ai, dc;
function c0() {
  if (dc) return ai;
  dc = 1;
  var e = /* @__PURE__ */ Tl(), t = d0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(g, k) {
    return o.set(g, k), g;
  }, s = function(g) {
    return o.has(g);
  }, l = function(g) {
    return o.get(g);
  }, d = function(g, k) {
    o.set(g, k);
  }, u = (function() {
    for (var _ = [], g = 0; g < 256; ++g)
      _[_.length] = "%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase();
    return _;
  })(), c = function(g) {
    for (; g.length > 1; ) {
      var k = g.pop(), V = k.obj[k.prop];
      if (r(V)) {
        for (var D = [], F = 0; F < V.length; ++F)
          typeof V[F] < "u" && (D[D.length] = V[F]);
        k.obj[k.prop] = D;
      }
    }
  }, f = function(g, k) {
    for (var V = k && k.plainObjects ? { __proto__: null } : {}, D = 0; D < g.length; ++D)
      typeof g[D] < "u" && (V[D] = g[D]);
    return V;
  }, v = function _(g, k, V) {
    if (!k)
      return g;
    if (typeof k != "object" && typeof k != "function") {
      if (r(g)) {
        var D = g.length;
        if (V && typeof V.arrayLimit == "number" && D > V.arrayLimit)
          return a(f(g.concat(k), V), D);
        g[D] = k;
      } else if (g && typeof g == "object")
        if (s(g)) {
          var F = l(g) + 1;
          g[F] = k, d(g, F);
        } else {
          if (V && V.strictMerge)
            return [g, k];
          (V && (V.plainObjects || V.allowPrototypes) || !n.call(Object.prototype, k)) && (g[k] = !0);
        }
      else
        return [g, k];
      return g;
    }
    if (!g || typeof g != "object") {
      if (s(k)) {
        for (var C = Object.keys(k), j = V && V.plainObjects ? { __proto__: null, 0: g } : { 0: g }, E = 0; E < C.length; E++) {
          var L = parseInt(C[E], 10);
          j[L + 1] = k[C[E]];
        }
        return a(j, l(k) + 1);
      }
      var A = [g].concat(k);
      return V && typeof V.arrayLimit == "number" && A.length > V.arrayLimit ? a(f(A, V), A.length - 1) : A;
    }
    var I = g;
    return r(g) && !r(k) && (I = f(g, V)), r(g) && r(k) ? (k.forEach(function(x, M) {
      if (n.call(g, M)) {
        var O = g[M];
        O && typeof O == "object" && x && typeof x == "object" ? g[M] = _(O, x, V) : g[g.length] = x;
      } else
        g[M] = x;
    }), g) : Object.keys(k).reduce(function(x, M) {
      var O = k[M];
      if (n.call(x, M) ? x[M] = _(x[M], O, V) : x[M] = O, s(k) && !s(x) && a(x, l(k)), s(x)) {
        var Q = parseInt(M, 10);
        String(Q) === M && Q >= 0 && Q > l(x) && d(x, Q);
      }
      return x;
    }, I);
  }, y = function(g, k) {
    return Object.keys(k).reduce(function(V, D) {
      return V[D] = k[D], V;
    }, g);
  }, m = function(_, g, k) {
    var V = _.replace(/\+/g, " ");
    if (k === "iso-8859-1")
      return V.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(V);
    } catch {
      return V;
    }
  }, p = 1024, h = function(g, k, V, D, F) {
    if (g.length === 0)
      return g;
    var C = g;
    if (typeof g == "symbol" ? C = Symbol.prototype.toString.call(g) : typeof g != "string" && (C = String(g)), V === "iso-8859-1")
      return escape(C).replace(/%u[0-9a-f]{4}/gi, function(M) {
        return "%26%23" + parseInt(M.slice(2), 16) + "%3B";
      });
    for (var j = "", E = 0; E < C.length; E += p) {
      for (var L = C.length >= p ? C.slice(E, E + p) : C, A = [], I = 0; I < L.length; ++I) {
        var x = L.charCodeAt(I);
        if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || F === e.RFC1738 && (x === 40 || x === 41)) {
          A[A.length] = L.charAt(I);
          continue;
        }
        if (x < 128) {
          A[A.length] = u[x];
          continue;
        }
        if (x < 2048) {
          A[A.length] = u[192 | x >> 6] + u[128 | x & 63];
          continue;
        }
        if (x < 55296 || x >= 57344) {
          A[A.length] = u[224 | x >> 12] + u[128 | x >> 6 & 63] + u[128 | x & 63];
          continue;
        }
        I += 1, x = 65536 + ((x & 1023) << 10 | L.charCodeAt(I) & 1023), A[A.length] = u[240 | x >> 18] + u[128 | x >> 12 & 63] + u[128 | x >> 6 & 63] + u[128 | x & 63];
      }
      j += A.join("");
    }
    return j;
  }, b = function(g) {
    for (var k = [{ obj: { o: g }, prop: "o" }], V = [], D = 0; D < k.length; ++D)
      for (var F = k[D], C = F.obj[F.prop], j = Object.keys(C), E = 0; E < j.length; ++E) {
        var L = j[E], A = C[L];
        typeof A == "object" && A !== null && V.indexOf(A) === -1 && (k[k.length] = { obj: C, prop: L }, V[V.length] = A);
      }
    return c(k), g;
  }, z = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, w = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g));
  }, T = function(g, k, V, D) {
    if (s(g)) {
      var F = l(g) + 1;
      return g[F] = k, d(g, F), g;
    }
    var C = [].concat(g, k);
    return C.length > V ? a(f(C, { plainObjects: D }), C.length - 1) : C;
  }, P = function(g, k) {
    if (r(g)) {
      for (var V = [], D = 0; D < g.length; D += 1)
        V[V.length] = k(g[D]);
      return V;
    }
    return k(g);
  };
  return ai = {
    arrayToObject: f,
    assign: y,
    combine: T,
    compact: b,
    decode: m,
    encode: h,
    isBuffer: w,
    isOverflow: s,
    isRegExp: z,
    markOverflow: a,
    maybeMap: P,
    merge: v
  }, ai;
}
var si, cc;
function O8() {
  if (cc) return si;
  cc = 1;
  var e = d0(), t = /* @__PURE__ */ c0(), n = /* @__PURE__ */ Tl(), r = Object.prototype.hasOwnProperty, o = {
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
  }, d = Date.prototype.toISOString, u = n.default, c = {
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
      return d.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, v = {}, y = function p(h, b, z, w, T, P, _, g, k, V, D, F, C, j, E, L, A, I) {
    for (var x = h, M = I, O = 0, Q = !1; (M = M.get(v)) !== void 0 && !Q; ) {
      var fe = M.get(h);
      if (O += 1, typeof fe < "u") {
        if (fe === O)
          throw new RangeError("Cyclic object value");
        Q = !0;
      }
      typeof M.get(v) > "u" && (O = 0);
    }
    if (typeof V == "function" ? x = V(b, x) : x instanceof Date ? x = C(x) : z === "comma" && a(x) && (x = t.maybeMap(x, function(R) {
      return R instanceof Date ? C(R) : R;
    })), x === null) {
      if (P)
        return k && !L ? k(b, c.encoder, A, "key", j) : b;
      x = "";
    }
    if (f(x) || t.isBuffer(x)) {
      if (k) {
        var xe = L ? b : k(b, c.encoder, A, "key", j);
        return [E(xe) + "=" + E(k(x, c.encoder, A, "value", j))];
      }
      return [E(b) + "=" + E(String(x))];
    }
    var ke = [];
    if (typeof x > "u")
      return ke;
    var ae;
    if (z === "comma" && a(x))
      L && k && (x = t.maybeMap(x, k)), ae = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (a(V))
      ae = V;
    else {
      var le = Object.keys(x);
      ae = D ? le.sort(D) : le;
    }
    var ge = g ? String(b).replace(/\./g, "%2E") : String(b), Te = w && a(x) && x.length === 1 ? ge + "[]" : ge;
    if (T && a(x) && x.length === 0)
      return Te + "[]";
    for (var ze = 0; ze < ae.length; ++ze) {
      var de = ae[ze], _e = typeof de == "object" && de && typeof de.value < "u" ? de.value : x[de];
      if (!(_ && _e === null)) {
        var ue = F && g ? String(de).replace(/\./g, "%2E") : String(de), ye = a(x) ? typeof z == "function" ? z(Te, ue) : Te : Te + (F ? "." + ue : "[" + ue + "]");
        I.set(h, O);
        var B = e();
        B.set(v, I), l(ke, p(
          _e,
          ye,
          z,
          w,
          T,
          P,
          _,
          g,
          z === "comma" && L && a(x) ? null : k,
          V,
          D,
          F,
          C,
          j,
          E,
          L,
          A,
          B
        ));
      }
    }
    return ke;
  }, m = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var z = n.default;
    if (typeof h.format < "u") {
      if (!r.call(n.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      z = h.format;
    }
    var w = n.formatters[z], T = c.filter;
    (typeof h.filter == "function" || a(h.filter)) && (T = h.filter);
    var P;
    if (h.arrayFormat in o ? P = h.arrayFormat : "indices" in h ? P = h.indices ? "indices" : "repeat" : P = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var _ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: _,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: P,
      charset: b,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: T,
      format: z,
      formatter: w,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return si = function(p, h) {
    var b = p, z = m(h), w, T;
    typeof z.filter == "function" ? (T = z.filter, b = T("", b)) : a(z.filter) && (T = z.filter, w = T);
    var P = [];
    if (typeof b != "object" || b === null)
      return "";
    var _ = o[z.arrayFormat], g = _ === "comma" && z.commaRoundTrip;
    w || (w = Object.keys(b)), z.sort && w.sort(z.sort);
    for (var k = e(), V = 0; V < w.length; ++V) {
      var D = w[V], F = b[D];
      z.skipNulls && F === null || l(P, y(
        F,
        D,
        _,
        g,
        z.allowEmptyArrays,
        z.strictNullHandling,
        z.skipNulls,
        z.encodeDotInKeys,
        z.encode ? z.encoder : null,
        z.filter,
        z.sort,
        z.allowDots,
        z.serializeDate,
        z.format,
        z.formatter,
        z.encodeValuesOnly,
        z.charset,
        k
      ));
    }
    var C = P.join(z.delimiter), j = z.addQueryPrefix === !0 ? "?" : "";
    return z.charsetSentinel && (z.charset === "iso-8859-1" ? j += "utf8=%26%2310003%3B&" : j += "utf8=%E2%9C%93&"), C.length > 0 ? j + C : "";
  }, si;
}
var ii, fc;
function N8() {
  if (fc) return ii;
  fc = 1;
  var e = /* @__PURE__ */ c0(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", d = function(m, p) {
    var h = { __proto__: null }, b = p.ignoreQueryPrefix ? m.replace(/^\?/, "") : m;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var z = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, w = b.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof z < "u" ? z + 1 : z
    );
    if (p.throwOnLimitExceeded && typeof z < "u" && w.length > z)
      throw new RangeError("Parameter limit exceeded. Only " + z + " parameter" + (z === 1 ? "" : "s") + " allowed.");
    var T = -1, P, _ = p.charset;
    if (p.charsetSentinel)
      for (P = 0; P < w.length; ++P)
        w[P].indexOf("utf8=") === 0 && (w[P] === l ? _ = "utf-8" : w[P] === s && (_ = "iso-8859-1"), T = P, P = w.length);
    for (P = 0; P < w.length; ++P)
      if (P !== T) {
        var g = w[P], k = g.indexOf("]="), V = k === -1 ? g.indexOf("=") : k + 1, D, F;
        if (V === -1 ? (D = p.decoder(g, r.decoder, _, "key"), F = p.strictNullHandling ? null : "") : (D = p.decoder(g.slice(0, V), r.decoder, _, "key"), D !== null && (F = e.maybeMap(
          a(
            g.slice(V + 1),
            p,
            n(h[D]) ? h[D].length : 0
          ),
          function(j) {
            return p.decoder(j, r.decoder, _, "value");
          }
        ))), F && p.interpretNumericEntities && _ === "iso-8859-1" && (F = o(String(F))), g.indexOf("[]=") > -1 && (F = n(F) ? [F] : F), p.comma && n(F) && F.length > p.arrayLimit) {
          if (p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          F = e.combine([], F, p.arrayLimit, p.plainObjects);
        }
        if (D !== null) {
          var C = t.call(h, D);
          C && (p.duplicates === "combine" || g.indexOf("[]=") > -1) ? h[D] = e.combine(
            h[D],
            F,
            p.arrayLimit,
            p.plainObjects
          ) : (!C || p.duplicates === "last") && (h[D] = F);
        }
      }
    return h;
  }, u = function(y, m, p, h) {
    var b = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var z = y.slice(0, -1).join("");
      b = Array.isArray(m) && m[z] ? m[z].length : 0;
    }
    for (var w = h ? m : a(m, p, b), T = y.length - 1; T >= 0; --T) {
      var P, _ = y[T];
      if (_ === "[]" && p.parseArrays)
        e.isOverflow(w) ? P = w : P = p.allowEmptyArrays && (w === "" || p.strictNullHandling && w === null) ? [] : e.combine(
          [],
          w,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        P = p.plainObjects ? { __proto__: null } : {};
        var g = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, k = p.decodeDotInKeys ? g.replace(/%2E/g, ".") : g, V = parseInt(k, 10), D = !isNaN(V) && _ !== k && String(V) === k && V >= 0 && p.parseArrays;
        if (!p.parseArrays && k === "")
          P = { 0: w };
        else if (D && V < p.arrayLimit)
          P = [], P[V] = w;
        else {
          if (D && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          D ? (P[V] = w, e.markOverflow(P, V)) : k !== "__proto__" && (P[k] = w);
        }
      }
      w = P;
    }
    return w;
  }, c = function(m, p) {
    var h = p.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, h) && !p.allowPrototypes ? void 0 : [h];
    var b = /(\[[^[\]]*])/, z = /(\[[^[\]]*])/g, w = b.exec(h), T = w ? h.slice(0, w.index) : h, P = [];
    if (T) {
      if (!p.plainObjects && t.call(Object.prototype, T) && !p.allowPrototypes)
        return;
      P[P.length] = T;
    }
    for (var _ = 0; (w = z.exec(h)) !== null && _ < p.depth; ) {
      _ += 1;
      var g = w[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, g) && !p.allowPrototypes)
        return;
      P[P.length] = w[1];
    }
    if (w) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      P[P.length] = "[" + h.slice(w.index) + "]";
    }
    return P;
  }, f = function(m, p, h, b) {
    if (m) {
      var z = c(m, h);
      if (z)
        return u(z, p, h, b);
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
    for (var h = typeof y == "string" ? d(y, p) : y, b = p.plainObjects ? { __proto__: null } : {}, z = Object.keys(h), w = 0; w < z.length; ++w) {
      var T = z[w], P = f(T, h[T], p, typeof y == "string");
      b = e.merge(b, P, p);
    }
    return p.allowSparse === !0 ? b : e.compact(b);
  }, ii;
}
var li, pc;
function R8() {
  if (pc) return li;
  pc = 1;
  var e = /* @__PURE__ */ O8(), t = /* @__PURE__ */ N8(), n = /* @__PURE__ */ Tl();
  return li = {
    formats: n,
    parse: t,
    stringify: e
  }, li;
}
var hc = /* @__PURE__ */ R8();
function f0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: M8 } = Object.prototype, { getPrototypeOf: Ol } = Object, { iterator: Ua, toStringTag: p0 } = Symbol, qa = /* @__PURE__ */ ((e) => (t) => {
  const n = M8.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ut = (e) => (e = e.toLowerCase(), (t) => qa(t) === e), Va = (e) => (t) => typeof t === e, { isArray: xr } = Array, mr = Va("undefined");
function co(e) {
  return e !== null && !mr(e) && e.constructor !== null && !mr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const h0 = Ut("ArrayBuffer");
function I8(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && h0(e.buffer), t;
}
const D8 = Va("string"), ht = Va("function"), m0 = Va("number"), fo = (e) => e !== null && typeof e == "object", F8 = (e) => e === !0 || e === !1, jo = (e) => {
  if (qa(e) !== "object")
    return !1;
  const t = Ol(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(p0 in e) && !(Ua in e);
}, B8 = (e) => {
  if (!fo(e) || co(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, L8 = Ut("Date"), U8 = Ut("File"), q8 = (e) => !!(e && typeof e.uri < "u"), V8 = (e) => e && typeof e.getParts < "u", j8 = Ut("Blob"), H8 = Ut("FileList"), G8 = (e) => fo(e) && ht(e.pipe);
function W8() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const mc = W8(), vc = typeof mc.FormData < "u" ? mc.FormData : void 0, X8 = (e) => {
  let t;
  return e && (vc && e instanceof vc || ht(e.append) && ((t = qa(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, Y8 = Ut("URLSearchParams"), [K8, Z8, J8, Q8] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ut), eN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function v0(e, t) {
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
const In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, g0 = (e) => !mr(e) && e !== In;
function Wi() {
  const { caseless: e, skipUndefined: t } = g0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const s = e && v0(n, a) || a;
    jo(n[s]) && jo(o) ? n[s] = Wi(n[s], o) : jo(o) ? n[s] = Wi({}, o) : xr(o) ? n[s] = o.slice() : (!t || !mr(o)) && (n[s] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && po(arguments[o], r);
  return n;
}
const tN = (e, t, n, { allOwnKeys: r } = {}) => (po(
  t,
  (o, a) => {
    n && ht(o) ? Object.defineProperty(e, a, {
      value: f0(o, n),
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
), e), nN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, oN = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Ol(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, aN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, sN = (e) => {
  if (!e) return null;
  if (xr(e)) return e;
  let t = e.length;
  if (!m0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, iN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ol(Uint8Array)), lN = (e, t) => {
  const r = (e && e[Ua]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, uN = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, dN = Ut("HTMLFormElement"), cN = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), gc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), fN = Ut("RegExp"), y0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  po(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, pN = (e) => {
  y0(e, (t, n) => {
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
}, hN = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return xr(e) ? r(e) : r(String(e).split(t)), n;
}, mN = () => {
}, vN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gN(e) {
  return !!(e && ht(e.append) && e[p0] === "FormData" && e[Ua]);
}
const yN = (e) => {
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
          const d = n(s, o + 1);
          !mr(d) && (a[l] = d);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, bN = Ut("AsyncFunction"), xN = (e) => e && (fo(e) || ht(e)) && ht(e.then) && ht(e.catch), b0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (In.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === In && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), In.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(In.postMessage)), wN = typeof queueMicrotask < "u" ? queueMicrotask.bind(In) : typeof process < "u" && process.nextTick || b0, _N = (e) => e != null && ht(e[Ua]), Z = {
  isArray: xr,
  isArrayBuffer: h0,
  isBuffer: co,
  isFormData: X8,
  isArrayBufferView: I8,
  isString: D8,
  isNumber: m0,
  isBoolean: F8,
  isObject: fo,
  isPlainObject: jo,
  isEmptyObject: B8,
  isReadableStream: K8,
  isRequest: Z8,
  isResponse: J8,
  isHeaders: Q8,
  isUndefined: mr,
  isDate: L8,
  isFile: U8,
  isReactNativeBlob: q8,
  isReactNative: V8,
  isBlob: j8,
  isRegExp: fN,
  isFunction: ht,
  isStream: G8,
  isURLSearchParams: Y8,
  isTypedArray: iN,
  isFileList: H8,
  forEach: po,
  merge: Wi,
  extend: tN,
  trim: eN,
  stripBOM: nN,
  inherits: rN,
  toFlatObject: oN,
  kindOf: qa,
  kindOfTest: Ut,
  endsWith: aN,
  toArray: sN,
  forEachEntry: lN,
  matchAll: uN,
  isHTMLForm: dN,
  hasOwnProperty: gc,
  hasOwnProp: gc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: y0,
  freezeMethods: pN,
  toObjectSet: hN,
  toCamelCase: cN,
  noop: mN,
  toFiniteNumber: vN,
  findKey: v0,
  global: In,
  isContextDefined: g0,
  isSpecCompliantForm: gN,
  toJSONObject: yN,
  isAsyncFn: bN,
  isThenable: xN,
  setImmediate: b0,
  asap: wN,
  isIterable: _N
};
let Se = class x0 extends Error {
  static from(t, n, r, o, a, s) {
    const l = new x0(t.message, n || t.code, r, o, a);
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
      config: Z.toJSONObject(this.config),
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
const kN = null;
function Xi(e) {
  return Z.isPlainObject(e) || Z.isArray(e);
}
function w0(e) {
  return Z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ui(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = w0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function SN(e) {
  return Z.isArray(e) && !e.some(Xi);
}
const EN = Z.toFlatObject(Z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ja(e, t, n) {
  if (!Z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = Z.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(p, h) {
      return !Z.isUndefined(h[p]);
    }
  );
  const r = n.metaTokens, o = n.visitor || c, a = n.dots, s = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && Z.isSpecCompliantForm(t);
  if (!Z.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (Z.isDate(m))
      return m.toISOString();
    if (Z.isBoolean(m))
      return m.toString();
    if (!d && Z.isBlob(m))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return Z.isArrayBuffer(m) || Z.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, p, h) {
    let b = m;
    if (Z.isReactNative(t) && Z.isReactNativeBlob(m))
      return t.append(ui(h, p, a), u(m)), !1;
    if (m && !h && typeof m == "object") {
      if (Z.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (Z.isArray(m) && SN(m) || (Z.isFileList(m) || Z.endsWith(p, "[]")) && (b = Z.toArray(m)))
        return p = w0(p), b.forEach(function(w, T) {
          !(Z.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ui([p], T, a) : s === null ? p : p + "[]",
            u(w)
          );
        }), !1;
    }
    return Xi(m) ? !0 : (t.append(ui(h, p, a), u(m)), !1);
  }
  const f = [], v = Object.assign(EN, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Xi
  });
  function y(m, p) {
    if (!Z.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), Z.forEach(m, function(b, z) {
        (!(Z.isUndefined(b) || b === null) && o.call(t, b, Z.isString(z) ? z.trim() : z, p, v)) === !0 && y(b, p ? p.concat(z) : [z]);
      }), f.pop();
    }
  }
  if (!Z.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function yc(e) {
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
const _0 = Nl.prototype;
_0.append = function(t, n) {
  this._pairs.push([t, n]);
};
_0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, yc);
  } : yc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function zN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function k0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zN, o = Z.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let s;
  if (a ? s = a(t, o) : s = Z.isURLSearchParams(t) ? t.toString() : new Nl(t, o).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class bc {
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
    Z.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Rl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, $N = typeof URLSearchParams < "u" ? URLSearchParams : Nl, PN = typeof FormData < "u" ? FormData : null, CN = typeof Blob < "u" ? Blob : null, AN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $N,
    FormData: PN,
    Blob: CN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ml = typeof window < "u" && typeof document < "u", Yi = typeof navigator == "object" && navigator || void 0, TN = Ml && (!Yi || ["ReactNative", "NativeScript", "NS"].indexOf(Yi.product) < 0), ON = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", NN = Ml && window.location.href || "http://localhost", RN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ml,
  hasStandardBrowserEnv: TN,
  hasStandardBrowserWebWorkerEnv: ON,
  navigator: Yi,
  origin: NN
}, Symbol.toStringTag, { value: "Module" })), dt = {
  ...RN,
  ...AN
};
function MN(e, t) {
  return ja(e, new dt.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return dt.isNode && Z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function IN(e) {
  return Z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function DN(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function S0(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), d = a >= n.length;
    return s = !s && Z.isArray(o) ? o.length : s, d ? (Z.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !Z.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && Z.isArray(o[s]) && (o[s] = DN(o[s])), !l);
  }
  if (Z.isFormData(e) && Z.isFunction(e.entries)) {
    const n = {};
    return Z.forEachEntry(e, (r, o) => {
      t(IN(r), o, n, 0);
    }), n;
  }
  return null;
}
function FN(e, t, n) {
  if (Z.isString(e))
    try {
      return (t || JSON.parse)(e), Z.trim(e);
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
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = Z.isObject(t);
      if (a && Z.isHTMLForm(t) && (t = new FormData(t)), Z.isFormData(t))
        return o ? JSON.stringify(S0(t)) : t;
      if (Z.isArrayBuffer(t) || Z.isBuffer(t) || Z.isStream(t) || Z.isFile(t) || Z.isBlob(t) || Z.isReadableStream(t))
        return t;
      if (Z.isArrayBufferView(t))
        return t.buffer;
      if (Z.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return MN(t, this.formSerializer).toString();
        if ((l = Z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return ja(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), FN(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || ho.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (Z.isResponse(t) || Z.isReadableStream(t))
        return t;
      if (t && Z.isString(t) && (r && !this.responseType || o)) {
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
Z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ho.headers[e] = {};
});
const BN = Z.toObjectSet([
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
]), LN = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && BN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, xc = /* @__PURE__ */ Symbol("internals"), UN = (e) => !/[\r\n]/.test(e);
function E0(e, t) {
  if (!(e === !1 || e == null)) {
    if (Z.isArray(e)) {
      e.forEach((n) => E0(n, t));
      return;
    }
    if (!UN(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function qN(e) {
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
  return e === !1 || e == null ? e : Z.isArray(e) ? e.map(Ho) : qN(String(e));
}
function VN(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function di(e, t, n, r, o) {
  if (Z.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!Z.isString(t)) {
    if (Z.isString(r))
      return t.indexOf(r) !== -1;
    if (Z.isRegExp(r))
      return r.test(t);
  }
}
function HN(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function GN(e, t) {
  const n = Z.toCamelCase(" " + t);
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
    function a(l, d, u) {
      const c = $r(d);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = Z.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (E0(l, d), o[f || d] = Ho(l));
    }
    const s = (l, d) => Z.forEach(l, (u, c) => a(u, c, d));
    if (Z.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (Z.isString(t) && (t = t.trim()) && !jN(t))
      s(LN(t), n);
    else if (Z.isObject(t) && Z.isIterable(t)) {
      let l = {}, d, u;
      for (const c of t) {
        if (!Z.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (d = l[u]) ? Z.isArray(d) ? [...d, c[1]] : [d, c[1]] : c[1];
      }
      s(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = $r(t), t) {
      const r = Z.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return VN(o);
        if (Z.isFunction(n))
          return n.call(this, o, r);
        if (Z.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = $r(t), t) {
      const r = Z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || di(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = $r(s), s) {
        const l = Z.findKey(r, s);
        l && (!n || di(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return Z.isArray(t) ? t.forEach(a) : a(t), o;
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
    return Z.forEach(this, (o, a) => {
      const s = Z.findKey(r, a);
      if (s) {
        n[s] = Ho(o), delete n[a];
        return;
      }
      const l = t ? HN(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Ho(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return Z.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && Z.isArray(r) ? r.join(", ") : r);
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
    const r = (this[xc] = this[xc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = $r(s);
      r[l] || (GN(o, s), r[l] = !0);
    }
    return Z.isArray(t) ? t.forEach(a) : a(t), this;
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
Z.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
Z.freezeMethods(mt);
function ci(e, t) {
  const n = this || ho, r = t || n, o = mt.from(r.headers);
  let a = r.data;
  return Z.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function z0(e) {
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
function $0(e, t, n) {
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
function WN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function XN(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), c = r[a];
    s || (s = u), n[o] = d, r[o] = u;
    let f = a, v = 0;
    for (; f !== o; )
      v += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < t)
      return;
    const y = c && u - c;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function YN(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const s = (u, c = Date.now()) => {
    n = c, o = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - n;
    f >= r ? s(u, c) : (o = u, a || (a = setTimeout(() => {
      a = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const ma = (e, t, n = 3) => {
  let r = 0;
  const o = XN(50, 250);
  return YN((a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, d = s - r, u = o(d), c = s <= l;
    r = s;
    const f = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && l && c ? (l - s) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, wc = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, _c = (e) => (...t) => Z.asap(() => e(...t)), KN = dt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, dt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(dt.origin),
  dt.navigator && /(msie|trident)/i.test(dt.navigator.userAgent)
) : () => !0, ZN = dt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, s) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      Z.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), Z.isString(r) && l.push(`path=${r}`), Z.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), Z.isString(s) && l.push(`SameSite=${s}`), document.cookie = l.join("; ");
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
function JN(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function QN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function P0(e, t, n) {
  let r = !JN(t);
  return e && (r || n == !1) ? QN(e, t) : t;
}
const kc = (e) => e instanceof mt ? { ...e } : e;
function Xn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, v) {
    return Z.isPlainObject(u) && Z.isPlainObject(c) ? Z.merge.call({ caseless: v }, u, c) : Z.isPlainObject(c) ? Z.merge({}, c) : Z.isArray(c) ? c.slice() : c;
  }
  function o(u, c, f, v) {
    if (Z.isUndefined(c)) {
      if (!Z.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, c, f, v);
  }
  function a(u, c) {
    if (!Z.isUndefined(c))
      return r(void 0, c);
  }
  function s(u, c) {
    if (Z.isUndefined(c)) {
      if (!Z.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, f) {
    if (f in t)
      return r(u, c);
    if (f in e)
      return r(void 0, u);
  }
  const d = {
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
    headers: (u, c, f) => o(kc(u), kc(c), f, !0)
  };
  return Z.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = Z.hasOwnProp(d, c) ? d[c] : o, v = f(e[c], t[c], c);
    Z.isUndefined(v) && f !== l || (n[c] = v);
  }), n;
}
const C0 = (e) => {
  const t = Xn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: l } = t;
  if (t.headers = s = mt.from(s), t.url = k0(
    P0(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && s.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), Z.isFormData(n)) {
    if (dt.hasStandardBrowserEnv || dt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (Z.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([c, f]) => {
        u.includes(c.toLowerCase()) && s.set(c, f);
      });
    }
  }
  if (dt.hasStandardBrowserEnv && (r && Z.isFunction(r) && (r = r(t)), r || r !== !1 && KN(t.url))) {
    const d = o && a && ZN.read(a);
    d && s.set(o, d);
  }
  return t;
}, e6 = typeof XMLHttpRequest < "u", t6 = e6 && function(e) {
  return new Promise(function(n, r) {
    const o = C0(e);
    let a = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = o, c, f, v, y, m;
    function p() {
      y && y(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function b() {
      if (!h)
        return;
      const w = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), P = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: e,
        request: h
      };
      $0(
        function(g) {
          n(g), p();
        },
        function(g) {
          r(g), p();
        },
        P
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new Se("Request aborted", Se.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(T) {
      const P = T && T.message ? T.message : "Network Error", _ = new Se(P, Se.ERR_NETWORK, e, h);
      _.event = T || null, r(_), h = null;
    }, h.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Rl;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(
        new Se(
          T,
          P.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in h && Z.forEach(s.toJSON(), function(T, P) {
      h.setRequestHeader(P, T);
    }), Z.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([v, m] = ma(u, !0), h.addEventListener("progress", v)), d && h.upload && ([f, y] = ma(d), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (w) => {
      h && (r(!w || w.type ? new mo(null, e, h) : w), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const z = WN(o.url);
    if (z && dt.protocols.indexOf(z) === -1) {
      r(
        new Se(
          "Unsupported protocol " + z + ":",
          Se.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(a || null);
  });
}, n6 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(
          c instanceof Se ? c : new mo(c instanceof Error ? c.message : c)
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
    const { signal: d } = r;
    return d.unsubscribe = () => Z.asap(l), d;
  }
}, r6 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, o6 = async function* (e, t) {
  for await (const n of a6(e))
    yield* r6(n, t);
}, a6 = async function* (e) {
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
}, Sc = (e, t, n, r) => {
  const o = o6(e, t);
  let a = 0, s, l = (d) => {
    s || (s = !0, r && r(d));
  };
  return new ReadableStream(
    {
      async pull(d) {
        try {
          const { done: u, value: c } = await o.next();
          if (u) {
            l(), d.close();
            return;
          }
          let f = c.byteLength;
          if (n) {
            let v = a += f;
            n(v);
          }
          d.enqueue(new Uint8Array(c));
        } catch (u) {
          throw l(u), u;
        }
      },
      cancel(d) {
        return l(d), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Ec = 64 * 1024, { isFunction: To } = Z, s6 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(Z.global), { ReadableStream: zc, TextEncoder: $c } = Z.global, Pc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, i6 = (e) => {
  e = Z.merge.call(
    {
      skipUndefined: !0
    },
    s6,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? To(t) : typeof fetch == "function", a = To(n), s = To(r);
  if (!o)
    return !1;
  const l = o && To(zc), d = o && (typeof $c == "function" ? /* @__PURE__ */ ((m) => (p) => m.encode(p))(new $c()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), u = a && l && Pc(() => {
    let m = !1;
    const p = new zc(), h = new n(dt.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), m && !h;
  }), c = s && l && Pc(() => Z.isReadableStream(new r("").body)), f = {
    stream: c && ((m) => m.body)
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
    if (Z.isBlob(m))
      return m.size;
    if (Z.isSpecCompliantForm(m))
      return (await new n(dt.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (Z.isArrayBufferView(m) || Z.isArrayBuffer(m))
      return m.byteLength;
    if (Z.isURLSearchParams(m) && (m = m + ""), Z.isString(m))
      return (await d(m)).byteLength;
  }, y = async (m, p) => {
    const h = Z.toFiniteNumber(m.getContentLength());
    return h ?? v(p);
  };
  return async (m) => {
    let {
      url: p,
      method: h,
      data: b,
      signal: z,
      cancelToken: w,
      timeout: T,
      onDownloadProgress: P,
      onUploadProgress: _,
      responseType: g,
      headers: k,
      withCredentials: V = "same-origin",
      fetchOptions: D
    } = C0(m), F = t || fetch;
    g = g ? (g + "").toLowerCase() : "text";
    let C = n6(
      [z, w && w.toAbortSignal()],
      T
    ), j = null;
    const E = C && C.unsubscribe && (() => {
      C.unsubscribe();
    });
    let L;
    try {
      if (_ && u && h !== "get" && h !== "head" && (L = await y(k, b)) !== 0) {
        let Q = new n(p, {
          method: "POST",
          body: b,
          duplex: "half"
        }), fe;
        if (Z.isFormData(b) && (fe = Q.headers.get("content-type")) && k.setContentType(fe), Q.body) {
          const [xe, ke] = wc(
            L,
            ma(_c(_))
          );
          b = Sc(Q.body, Ec, xe, ke);
        }
      }
      Z.isString(V) || (V = V ? "include" : "omit");
      const A = a && "credentials" in n.prototype, I = {
        ...D,
        signal: C,
        method: h.toUpperCase(),
        headers: k.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: A ? V : void 0
      };
      j = a && new n(p, I);
      let x = await (a ? F(j, D) : F(p, I));
      const M = c && (g === "stream" || g === "response");
      if (c && (P || M && E)) {
        const Q = {};
        ["status", "statusText", "headers"].forEach((ae) => {
          Q[ae] = x[ae];
        });
        const fe = Z.toFiniteNumber(x.headers.get("content-length")), [xe, ke] = P && wc(
          fe,
          ma(_c(P), !0)
        ) || [];
        x = new r(
          Sc(x.body, Ec, xe, () => {
            ke && ke(), E && E();
          }),
          Q
        );
      }
      g = g || "text";
      let O = await f[Z.findKey(f, g) || "text"](
        x,
        m
      );
      return !M && E && E(), await new Promise((Q, fe) => {
        $0(Q, fe, {
          data: O,
          headers: mt.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: m,
          request: j
        });
      });
    } catch (A) {
      throw E && E(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
        new Se(
          "Network Error",
          Se.ERR_NETWORK,
          m,
          j,
          A && A.response
        ),
        {
          cause: A.cause || A
        }
      ) : Se.from(A, A && A.code, m, j, A && A.response);
    }
  };
}, l6 = /* @__PURE__ */ new Map(), A0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let s = a.length, l = s, d, u, c = l6;
  for (; l--; )
    d = a[l], u = c.get(d), u === void 0 && c.set(d, u = l ? /* @__PURE__ */ new Map() : i6(t)), c = u;
  return u;
};
A0();
const Il = {
  http: kN,
  xhr: t6,
  fetch: {
    get: A0
  }
};
Z.forEach(Il, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Cc = (e) => `- ${e}`, u6 = (e) => Z.isFunction(e) || e === null || e === !1;
function d6(e, t) {
  e = Z.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (o = r, !u6(r) && (o = Il[(l = String(r)).toLowerCase()], o === void 0))
      throw new Se(`Unknown adapter '${l}'`);
    if (o && (Z.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(a).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(Cc).join(`
`) : " " + Cc(s[0]) : "as no adapter specified";
    throw new Se(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const T0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: d6,
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
function Ac(e) {
  return fi(e), e.headers = mt.from(e.headers), e.data = ci.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), T0.getAdapter(e.adapter || ho.adapter, e)(e).then(
    function(r) {
      return fi(e), r.data = ci.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return z0(r) || (fi(e), r && r.response && (r.response.data = ci.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const O0 = "1.15.0", Ha = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ha[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Tc = {};
Ha.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + O0 + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new Se(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Se.ERR_DEPRECATED
      );
    return n && !Tc[s] && (Tc[s] = !0, console.warn(
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
function c6(e, t, n) {
  if (typeof e != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const l = e[a], d = l === void 0 || s(l, a, e);
      if (d !== !0)
        throw new Se(
          "option " + a + " must be " + d,
          Se.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Se("Unknown option " + a, Se.ERR_BAD_OPTION);
  }
}
const Go = {
  assertOptions: c6,
  validators: Ha
}, Et = Go.validators;
let Un = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new bc(),
      response: new bc()
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
`, s + 1), d = l === -1 ? "" : a.slice(l + 1);
            String(r.stack).endsWith(d) || (r.stack += `
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
    ), o != null && (Z.isFunction(o) ? n.paramsSerializer = {
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
    let s = a && Z.merge(a.common, a[n.method]);
    a && Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
      delete a[m];
    }), n.headers = mt.concat(s, a);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1)
        return;
      d = d && p.synchronous;
      const h = n.transitional || Rl;
      h && h.legacyInterceptorReqResOrdering ? l.unshift(p.fulfilled, p.rejected) : l.push(p.fulfilled, p.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let c, f = 0, v;
    if (!d) {
      const m = [Ac.bind(this), void 0];
      for (m.unshift(...l), m.push(...u), v = m.length, c = Promise.resolve(n); f < v; )
        c = c.then(m[f++], m[f++]);
      return c;
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
      c = Ac.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, v = u.length; f < v; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Xn(this.defaults, t);
    const n = P0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return k0(n, t.params, t.paramsSerializer);
  }
};
Z.forEach(["delete", "get", "head", "options"], function(t) {
  Un.prototype[t] = function(n, r) {
    return this.request(
      Xn(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
Z.forEach(["post", "put", "patch"], function(t) {
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
  Un.prototype[t] = n(), Un.prototype[t + "Form"] = n(!0);
});
let f6 = class N0 {
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
      token: new N0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function p6(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function h6(e) {
  return Z.isObject(e) && e.isAxiosError === !0;
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
function R0(e) {
  const t = new Un(e), n = f0(Un.prototype.request, t);
  return Z.extend(n, Un.prototype, t, { allOwnKeys: !0 }), Z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return R0(Xn(e, o));
  }, n;
}
const Je = R0(ho);
Je.Axios = Un;
Je.CanceledError = mo;
Je.CancelToken = f6;
Je.isCancel = z0;
Je.VERSION = O0;
Je.toFormData = ja;
Je.AxiosError = Se;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = p6;
Je.isAxiosError = h6;
Je.mergeConfig = Xn;
Je.AxiosHeaders = mt;
Je.formToJSON = (e) => S0(Z.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = T0.getAdapter;
Je.HttpStatusCode = Ki;
Je.default = Je;
const {
  Axios: aM,
  AxiosError: sM,
  CanceledError: iM,
  isCancel: M0,
  CancelToken: lM,
  VERSION: uM,
  all: dM,
  Cancel: cM,
  isAxiosError: I0,
  spread: fM,
  toFormData: pM,
  AxiosHeaders: hM,
  HttpStatusCode: mM,
  formToJSON: vM,
  getAdapter: gM,
  mergeConfig: m6
} = Je;
var v6 = class {
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
    return t0(this.config, e) ? wt(this.config, e) : wt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? zt(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      zt(this.config, n, r);
    });
  }
}, zn = new v6({
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
var Oc = (e) => St("before", { cancelable: !0, detail: { visit: e } }), g6 = (e) => St("error", { detail: { errors: e } }), y6 = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), b6 = (e) => St("finish", { detail: { visit: e } }), x6 = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), w6 = (e) => St("beforeUpdate", { detail: { page: e } }), Lr = (e) => St("navigate", { detail: { page: e } }), _6 = (e) => St("progress", { detail: { progress: e } }), k6 = (e) => St("start", { detail: { visit: e } }), S6 = (e) => St("success", { detail: { page: e } }), E6 = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), z6 = (e) => St("prefetching", { detail: { visit: e } }), va = (e) => St("flash", { detail: { flash: e } }), ct = class {
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
var $6 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = D0(), n = await F0(), r = await N6(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await C6(t, r, e);
}, vr = {
  key: "historyKey",
  iv: "historyIv"
}, P6 = async (e) => {
  const t = D0(), n = await F0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await A6(t, n, e);
}, C6 = async (e, t, n) => {
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
}, A6 = async (e, t, n) => {
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
}, D0 = () => {
  const e = ct.get(vr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return ct.set(vr.iv, Array.from(t)), t;
}, T6 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), O6 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  ct.set(vr.key, Array.from(new Uint8Array(t)));
}, N6 = async (e) => {
  if (e)
    return e;
  const t = await T6();
  return t ? (await O6(t), t) : null;
}, F0 = async () => {
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
}, B0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !R6(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, R6 = (e, t) => {
  switch (typeof e) {
    case "object":
      return B0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, M6 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Nc = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(M6))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, I6 = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n, cacheTags: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const a = this.findCached(e);
    if (!e.fresh && a && a.staleTimestamp > Date.now())
      return Promise.resolve();
    const [s, l] = this.extractStaleValues(n), d = new Promise((u, c) => {
      t({
        ...e,
        onCancel: () => {
          this.remove(e), e.onCancel(), c();
        },
        onError: (f) => {
          this.remove(e), e.onError(f), c();
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
          Ht.removeFromInFlight(e), c(f);
        }
      });
    }).then((u) => {
      this.remove(e);
      const c = u.getPageResponse();
      ve.mergeOncePropsIntoResponse(c), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + s,
        expiresAt: Date.now() + l,
        response: d,
        singleUse: l === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(r) ? r : [r]
      });
      const f = this.getShortestOncePropTtl(c);
      return this.scheduleForRemoval(
        e,
        f ? Math.min(l, f) : l
      ), this.removeFromInFlight(e), u.handlePrefetch(), u;
    });
    return this.inFlightRequests.push({
      params: { ...e },
      response: d,
      staleTimestamp: null,
      inFlight: !0
    }), d;
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
    return [Nc(t), Nc(n)];
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
    return B0(
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
        ve.mergeOncePropsIntoResponse(n, { force: !0 });
        for (const [s, l] of Object.entries(n.deferredProps ?? {})) {
          const d = l.filter((u) => n.props[u] === void 0);
          d.length > 0 ? n.deferredProps[s] = d : delete n.deferredProps[s];
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
}, Ht = new I6(), pi = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, D6 = (e) => {
  const t = (s) => {
    const l = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(l.overflowY) ? !0 : l.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowX) ? !0 : r(l.maxHeight, s.style.height) || o(s, "height");
  }, n = (s) => {
    const l = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(l.overflowX) ? !0 : l.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowY) ? !0 : r(l.maxWidth, s.style.width) || o(s, "width");
  }, r = (s, l) => !!(s && s !== "none" && s !== "0px" || l && l !== "auto" && l !== "0"), o = (s, l) => {
    const d = s.parentElement;
    if (!d)
      return !1;
    const u = window.getComputedStyle(d);
    if (["flex", "inline-flex"].includes(u.display)) {
      const c = ["column", "column-reverse"].includes(u.flexDirection);
      return l === "height" ? c : !c;
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
}, L0 = (e, t) => {
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
}, Rr = typeof window > "u", F6 = !Rr && /Firefox/i.test(window.navigator.userAgent), ft = class {
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
    if (F6 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
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
function U0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && V0(t, q0(n, o, "indices"), e[o], r);
  return t;
}
function q0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function V0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => V0(e, q0(t, o.toString(), r), n[o], r)
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
  U0(n, e, t, r);
}
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var B6 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? $t(e) : e;
  if ((Zi(t) || r) && !Ji(t) && (zn.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = U0(t, new FormData(), null, o)), Ji(t))
    return [a, t];
  const [s, l] = Fl(n, a, t, o);
  return [$t(s), l];
};
function Fl(e, t, n, r = "brackets") {
  const o = e === "get" && !Ji(n) && Object.keys(n).length > 0, a = j0(t.toString()), s = a || t.toString().startsWith("/") || t.toString() === "", l = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), d = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = hc.stringify(
      { ...hc.parse(f.search, y), ...n },
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
      l ? f.pathname.substring(d ? 0 : 1) : "",
      u ? f.search : "",
      c ? f.hash : ""
    ].join(""),
    o ? {} : n
  ];
}
function ga(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Rc = (e, t) => {
  e.hash && !t.hash && ga(e).href === t.href && (t.hash = e.hash);
}, ya = (e, t) => ga(e).href === ga(t).href, L6 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function dn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function j0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function U6(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var q6 = class {
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
      const l = typeof window > "u", d = l ? new URL(e.url) : window.location, u = !l && n ? ft.getScrollRegions() : [];
      t = t || ya($t(e.url), d);
      const c = { ...e, flash: {} };
      return new Promise(
        (f) => t ? De.replaceState(c, f) : De.pushState(c, f)
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
}, ve = new q6(), Ga = class {
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
}, or = typeof window > "u", Pr = new Ga(), Mc = !or && /CriOS/.test(window.navigator.userAgent), V6 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    this.replaceState({
      ...ve.getWithoutFlashData(),
      rememberedState: {
        ...ve.get()?.rememberedState ?? {},
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
        return Mc ? new Promise((o) => {
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
    return new Promise((n) => e.encryptHistory ? $6(t).then(n) : n(t));
  }
  processQueue() {
    return Pr.process();
  }
  decrypt(e = null) {
    if (or)
      return Promise.resolve(e ?? ve.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? P6(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Pr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !kn(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    Pr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !kn(this.getDocumentScrollPosition(), e))
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
    if (kn(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (ve.merge(r), !or) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Pr.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Mc ? new Promise((s) => {
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
var De = new V6(), j6 = class {
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
    ve.clear(), this.fireInternalEvent("missingHistoryItem");
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
      const n = $t(ve.get().url);
      n.hash = window.location.hash, De.replaceState({ ...ve.getWithoutFlashData(), url: n.href }), ft.reset();
      return;
    }
    if (!De.isValidState(t))
      return this.onMissingHistoryItem();
    De.decrypt(t.page).then((n) => {
      if (ve.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ze.cancelAll({ prefetch: !1 }), ve.setQuietly(n, { preserveState: !1 }).then(() => {
        ft.restore(De.getScrollRegions()), Lr(ve.get());
        const r = {}, o = ve.get().props;
        for (const [a, s] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const l = s.filter((d) => o[d] === void 0);
          l.length > 0 && (r[a] = l);
        }
        Object.keys(r).length > 0 && this.fireInternalEvent("loadDeferredProps", r);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Yt = new j6(), H6 = class {
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
}, hi = new H6(), G6 = class {
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
      ve.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Lr(ve.get());
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
    return ct.remove(ct.locationVisitKey), typeof window < "u" && ve.setUrlHash(window.location.hash), De.decrypt(ve.get()).then(() => {
      const t = De.getState(De.rememberedState, {}), n = De.getScrollRegions();
      ve.remember(t), ve.set(ve.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && ft.restore(n), Lr(ve.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && ve.setUrlHash(window.location.hash), ve.set(ve.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      hi.isReload() ? ft.restore(De.getScrollRegions()) : ft.scrollToAnchor();
      const e = ve.get();
      Lr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => va(t));
    });
  }
}, W6 = class {
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
}, X6 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new W6(e, t, n);
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
}, Y6 = new X6(), Qi = class Wo {
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = ve.get().component);
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
}, H0 = {
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
}, K6 = {
  show(e) {
    const { iframe: t, page: n } = H0.createIframeAndPage(e);
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
}, Z6 = new Ga(), Ic = class G0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new G0(t, n, r);
  }
  async handlePrefetch() {
    ya(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Z6.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), E6(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await De.processQueue(), De.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = ve.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return g6(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(ve.get().url);
    const { flash: n } = ve.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (va(n), this.requestParams.all().onFlash(n)), S6(ve.get()), await this.requestParams.all().onSuccess(ve.get()), De.preserveUrl = !1;
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
      return Rc(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (x6(t))
      return zn.get("future.useDialogForErrorModal") ? K6.show(t.data) : H0.show(t.data);
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
    return this.shouldSetPage(t) ? (this.mergeProps(t), ve.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = De.preserveUrl ? ve.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), w6(t), ve.set(t, {
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
    if (this.originatingPage.component !== ve.get().component)
      return !1;
    const n = $t(this.originatingPage.url), r = $t(ve.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = $t(t.url);
    return Rc(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== ve.get().component || zn.get("future.preserveEqualProps") !== !0)
      return;
    const n = ve.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      kn(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== ve.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], a = t.matchPropsOn || [], s = (d, u) => {
      const c = wt(ve.get().props, d), f = wt(t.props, d);
      if (Array.isArray(f)) {
        const v = this.mergeOrMatchItems(
          c || [],
          f,
          d,
          a,
          u
        );
        zt(t.props, d, v);
      } else if (typeof f == "object" && f !== null) {
        const v = {
          ...c || {},
          ...f
        };
        zt(t.props, d, v);
      }
    };
    if (n.forEach((d) => s(d, !0)), r.forEach((d) => s(d, !1)), o.forEach((d) => {
      const u = ve.get().props[d], c = t.props[d], f = (v, y, m) => Array.isArray(y) ? this.mergeOrMatchItems(v, y, m, a) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (p, h) => (p[h] = f(v ? v[h] : void 0, y[h], `${m}.${h}`), p),
        { ...v }
      ) : y;
      t.props[d] = f(u, c, d);
    }), t.props = { ...ve.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const d = ve.get().props.errors;
      d && Object.keys(d).length > 0 && (t.props.errors = d);
    }
    ve.get().scrollProps && (t.scrollProps = {
      ...ve.get().scrollProps || {},
      ...t.scrollProps || {}
    }), ve.hasOnceProps() && (t.onceProps = {
      ...ve.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...ve.get().flash });
    const l = ve.get().initialDeferredProps;
    l && Object.keys(l).length > 0 && (t.initialDeferredProps = l);
  }
  mergeOrMatchItems(t, n, r, o, a = !0) {
    const s = Array.isArray(t) ? t : [], l = o.find((c) => c.split(".").slice(0, -1).join(".") === r);
    if (!l)
      return a ? [...s, ...n] : [...n, ...s];
    const d = l.split(".").pop() || "", u = /* @__PURE__ */ new Map();
    return n.forEach((c) => {
      this.hasUniqueProperty(c, d) && u.set(c[d], c);
    }), a ? this.appendWithMatching(s, n, u, d) : this.prependWithMatching(s, n, u, d);
  }
  appendWithMatching(t, n, r, o) {
    const a = t.map((l) => this.hasUniqueProperty(l, o) && r.has(l[o]) ? r.get(l[o]) : l), s = n.filter((l) => this.hasUniqueProperty(l, o) ? !t.some(
      (d) => this.hasUniqueProperty(d, o) && d[o] === l[o]
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
    this.requestParams.all().preserveState && n && t.component === ve.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Dc = class W0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Qi.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new W0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), k6(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), z6(this.requestParams.all()));
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
    }).then((n) => (this.response = Ic.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Ic.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && y6(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, b6(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, _6(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = ve.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const r = Object.entries(n.onceProps || {}).filter(([, o]) => n.props[o.prop] === void 0 ? !1 : !o.expiresAt || o.expiresAt > Date.now()).map(([o]) => o);
    return r.length > 0 && (t["X-Inertia-Except-Once-Props"] = r.join(",")), t;
  }
}, Fc = class {
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
}, J6 = class {
  constructor() {
    this.syncRequestStream = new Fc({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Fc({
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
    ve.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: r
    }), G6.handle(), Yt.init(), Yt.on("missingHistoryItem", () => {
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
    return Y6.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Oc(n))
      return;
    const o = $t(ve.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? L6(n.url, o) : ya(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !ve.isCleared() && !n.preserveUrl && ft.save();
    const l = {
      ...n,
      ...r
    }, d = Ht.get(l);
    d ? (qr.reveal(d.inFlight), Ht.use(d, l)) : (qr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Dc.create(l, ve.get())));
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
    if (l.onBefore(o) === !1 || !Oc(o))
      return;
    qr.hide(), this.asyncRequestStream.interruptInFlight();
    const d = {
      ...o,
      ...l
    };
    new Promise((c) => {
      const f = () => {
        ve.get() ? c() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Ht.add(
        d,
        (c) => {
          this.asyncRequestStream.send(Dc.create(c, ve.get()));
        },
        {
          cacheFor: zn.get("prefetch.cacheFor"),
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
    return ve.resolve(e);
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
    const n = ve.get().flash;
    let r;
    if (typeof e == "function")
      r = e(n);
    else if (typeof e == "string")
      r = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      r = { ...n, ...e };
    else
      return;
    ve.setFlash(r), Object.keys(r).length && va(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = ve.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((p) => [p.prop, n.props[p.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, a = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: s, onError: l, onFinish: d, onFlash: u, onSuccess: c, ...f } = e, v = {
      ...n,
      ...f,
      flash: a ?? {},
      props: o
    }, y = Qi.resolvePreserveOption(e.preserveScroll ?? !1, v), m = Qi.resolvePreserveOption(e.preserveState ?? !1, v);
    return ve.set(v, {
      replace: t,
      preserveScroll: y,
      preserveState: m,
      viewTransition: s
    }).then(() => {
      const p = ve.get().flash;
      Object.keys(p).length > 0 && (va(p), u?.(p));
      const h = ve.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        c?.(ve.get());
        return;
      }
      const b = e.errorBag ? h[e.errorBag || ""] || {} : h;
      l?.(b);
    }).finally(() => d?.(e));
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
    const r = zn.get("visitOptions"), o = r ? r(e.toString(), lt(t)) || {} : {}, a = {
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
    }, [s, l] = B6(
      e,
      a.data,
      a.method,
      a.forceFormData,
      a.queryStringArrayFormat
    ), d = {
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...a,
      ...n,
      url: s,
      data: l
    };
    return d.prefetch && (d.headers.Purpose = "prefetch"), d;
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
function Q6(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function eR(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function tR(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function nR(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Yo(e) {
  if (Array.isArray(e))
    return e.map(Yo);
  if (typeof e != "object" || e === null || Dl(e))
    return e;
  if (nR(e)) {
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
function Bc(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = eR(Q6(n));
    if (o[o.length - 1] === "") {
      const a = o.slice(0, -1), s = wt(t, a);
      if (Array.isArray(s))
        s.push(r);
      else if (s && typeof s == "object" && !Dl(s)) {
        const l = Object.keys(s).filter((d) => /^\d+$/.test(d)).map(Number).sort((d, u) => d - u);
        zt(t, a, l.length > 0 ? [...l.map((d) => s[d]), r] : [r]);
      } else
        zt(t, a, [r]);
      continue;
    }
    tR(t, o.map(String), r);
  }
  return Yo(t);
}
var mi = {
  preferredAttribute() {
    return zn.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
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
function rR(e, t, n) {
  const r = {};
  let o = 0;
  function a() {
    const f = o += 1;
    return r[f] = [], f.toString();
  }
  function s(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], c());
  }
  function l(f) {
    Object.keys(r).indexOf(f) === -1 && (r[f] = []);
  }
  function d(f, v = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = v), c();
  }
  function u() {
    const f = t(""), v = mi.preferredAttribute(), y = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, m = Object.values(r).reduce((p, h) => p.concat(h), []).reduce((p, h) => {
      if (h.indexOf("<") === -1)
        return p;
      if (h.indexOf("<title ") === 0) {
        const z = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = z ? `${z[1]}${t(z[2])}${z[3]}` : h, p;
      }
      const b = h.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return b ? p[b[0]] = h : p[Object.keys(p).length] = h, p;
    }, y);
    return Object.values(m);
  }
  function c() {
    e ? n(u()) : mi.update(u());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const f = a();
      return {
        preferredAttribute: mi.preferredAttribute,
        reconnect: () => l(f),
        update: (v) => d(f, v),
        disconnect: () => s(f)
      };
    }
  };
}
var oR = "X-Inertia-Infinite-Scroll-Merge-Intent", aR = (e) => {
  const t = () => {
    const b = ve.get().scrollProps?.[e.getPropName()];
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
    n.component = ve.get().component, n.loading = !1, n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.currentPage, n.requestCount = 0;
  }, o = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    r();
    const b = Ze.restore(o());
    b && typeof b == "object" && b.lastLoadedPage === t().currentPage && (n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.lastLoadedPage, n.requestCount = b.requestCount || 0);
  }
  const a = Ze.on("success", (b) => {
    n.component === b.detail.page.component && t().reset && (r(), e.onReset?.());
  }), s = (b) => b === "next" ? "nextPage" : "previousPage", l = (b) => {
    const z = s(b);
    return n[z];
  }, d = (b) => {
    const z = t(), w = s(b);
    n.lastLoadedPage = z.currentPage, n[w] = z[w], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, c = () => n.requestCount, f = (b, z = {}) => {
    const w = l(b);
    n.loading || w === null || (n.loading = !0, Ze.reload({
      ...z,
      data: { [u()]: w },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [oR]: b === "previous" ? "prepend" : "append",
        ...z.headers
      },
      onBefore: (T) => {
        b === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), z.onBefore?.(T);
      },
      onBeforeUpdate: (T) => {
        e.onBeforeUpdate(), z.onBeforeUpdate?.(T);
      },
      onSuccess: (T) => {
        d(b), z.onSuccess?.(T);
      },
      onFinish: (T) => {
        n.loading = !1, b === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), z.onFinish?.(T);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: u,
    getRequestCount: c,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (b) => f("next", b),
    fetchPrevious: (b) => f("previous", b),
    removeEventListener: a
  };
}, sR = () => {
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
}, Ko = "infiniteScrollPage", vi = "infiniteScrollIgnore", X0 = (e) => e.dataset[Ko], iR = (e) => {
  const t = sR();
  let n, r, o, a, s = !1;
  const l = () => {
    a = new MutationObserver((g) => {
      g.forEach((k) => {
        k.addedNodes.forEach((V) => {
          V.nodeType === Node.ELEMENT_NODE && v.add(V);
        });
      }), T();
    }), a.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (g) => e.onItemIntersected(g.target)
    );
    const _ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, _), o = t.new(e.onNextTriggered, _);
  }, d = () => {
    s && u();
    const _ = e.getStartElement(), g = e.getEndElement();
    _ && e.shouldFetchPrevious() && r.observe(_), g && e.shouldFetchNext() && o.observe(g), s = !0;
  }, u = () => {
    s && (r.disconnect(), o.disconnect(), s = !1);
  }, c = () => {
    s && d();
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
    !h && (h = !0, P()) || (p(e.getItemsElement()).forEach((g) => {
      y(g) && (g.dataset[Ko] = _?.toString() || "1"), n.observe(g);
    }), w());
  }, z = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, w = () => {
    const _ = {}, g = e.getItemsElement().childNodes;
    for (let k = 0; k < g.length; k++) {
      const V = g[k];
      if (V.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = X0(V);
      typeof D > "u" || (D in _ ? _[D].to = k : _[D] = { from: k, to: k });
    }
    Ze.remember(_, z());
  }, T = ro(w, 250), P = () => {
    const _ = Ze.restore(z());
    if (!_ || typeof _ != "object")
      return !1;
    const g = e.getItemsElement().childNodes;
    for (let k = 0; k < g.length; k++) {
      const V = g[k];
      if (V.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = V;
      let F;
      for (const [C, j] of Object.entries(_))
        if (k >= j.from && k <= j.to) {
          F = C;
          break;
        }
      if (F)
        D.dataset[Ko] = F;
      else if (y(D))
        D.dataset[vi] = "true";
      else
        continue;
      n.observe(D);
    }
    return !0;
  };
  return {
    setupObservers: l,
    enableTriggers: d,
    disableTriggers: u,
    refreshTriggers: c,
    flushAll: f,
    processManuallyAddedElements: m,
    processServerLoadedElements: b
  };
}, lR = new Ga(), nr, gn, Oo = null, uR = (e) => {
  let t = !0;
  const n = (o) => {
    lR.add(() => new Promise((a) => {
      if (!t)
        return nr = gn = null, a();
      if (!nr || !gn) {
        const d = ve.get().url;
        nr = $t(d), gn = $t(d), Oo = j0(d);
      }
      const s = e.getPageName(), l = gn.searchParams;
      o === "1" ? l.delete(s) : l.set(s, o), setTimeout(() => a());
    })).finally(() => {
      t && nr && gn && nr.href !== gn.href && Oo !== null && Ze.replace({
        url: U6(gn, Oo),
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
      L0(l, o).forEach((c) => {
        const f = X0(c) ?? "1";
        s.has(f) ? s.set(f, s.get(f) + 1) : s.set(f, 1);
      });
      const u = Array.from(s.entries()).sort((c, f) => f[1] - c[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, dR = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const l = e.getScrollableParent(), d = e.getItemsElement();
        n = l?.scrollTop || window.scrollY;
        const u = L0([...d.children]);
        if (u.length > 0) {
          r = u[0];
          const c = l?.getBoundingClientRect() || { top: 0 }, f = l ? c.top : 0;
          o = r.getBoundingClientRect().top - f;
        }
      },
      restoreScrollPosition: () => {
        if (!r)
          return;
        let l = 0, d = !1;
        const u = () => {
          if (l++, d || l > 10)
            return !1;
          const c = e.getScrollableParent(), f = c?.getBoundingClientRect() || { top: 0 }, v = c ? f.top : 0, p = r.getBoundingClientRect().top - v - o;
          if (p === 0) {
            window.requestAnimationFrame(u);
            return;
          }
          c ? c.scrollTo({ top: n + p }) : window.scrollTo(0, window.scrollY + p), d = !0;
        };
        window.requestAnimationFrame(u);
      }
    };
  }
});
function cR(e) {
  const t = uR({ ...e, getPageName: () => o.getPageName() }), n = dR(e), r = iR({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = aR({
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
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), y = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (m) => {
      v(m), c();
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
  const d = Ze.on("success", () => Ur(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      d(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function Y0(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function No(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(Y0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Lc(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !Y0(e) && (e.key === "Enter" || t && e.key === " ");
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
}, $n = null, fR = (e) => {
  Object.assign(it, e), it.includeCSS && yR(it.color), Pt = document.createElement("div"), Pt.id = rt, Pt.innerHTML = it.template;
}, Wa = (e) => {
  const t = K0();
  e = th(e, it.minimum, 1), $n = e === 1 ? null : e;
  const n = hR(!t), r = n.querySelector(it.barSelector), o = it.speed, a = it.easing;
  n.offsetWidth, gR((s) => {
    const l = it.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${Zo(e)}%,0,0)`
    } : it.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${Zo(e)}%,0)`
    } : { marginLeft: `${Zo(e)}%` };
    for (const d in l)
      r.style[d] = l[d];
    if (e !== 1)
      return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        eh(), n.style.transition = "", n.style.opacity = "", s();
      }, o);
    }, o);
  });
}, K0 = () => typeof $n == "number", Z0 = () => {
  $n || Wa(0);
  const e = function() {
    setTimeout(function() {
      $n && (J0(), e());
    }, it.trickleSpeed);
  };
  it.trickle && e();
}, pR = (e) => {
  !e && !$n || (J0(0.3 + 0.5 * Math.random()), Wa(1));
}, J0 = (e) => {
  const t = $n;
  if (t === null)
    return Z0();
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
    })(), Wa(th(t + e, 0, 0.994));
}, hR = (e) => {
  if (mR())
    return document.getElementById(rt);
  document.documentElement.classList.add(`${rt}-busy`);
  const t = Pt.querySelector(it.barSelector), n = e ? "-100" : Zo($n || 0), r = Q0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, it.showSpinner || Pt.querySelector(it.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${rt}-custom-parent`), r.appendChild(Pt), Pt;
}, Q0 = () => vR(it.parent) ? it.parent : document.querySelector(it.parent), eh = () => {
  document.documentElement.classList.remove(`${rt}-busy`), Q0().classList.remove(`${rt}-custom-parent`), Pt?.remove();
}, mR = () => document.getElementById(rt) !== null, vR = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function th(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Zo = (e) => (-1 + e) * 100, gR = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), yR = (e) => {
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
}, bR = () => {
  Pt && (Pt.style.display = "");
}, xR = () => {
  Pt && (Pt.style.display = "none");
}, Vt = {
  configure: fR,
  isStarted: K0,
  done: pR,
  set: Wa,
  remove: eh,
  start: Z0,
  status: $n,
  show: bR,
  hide: xR
}, wR = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    Vt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && Vt.show();
  }
  hide() {
    this.hideCount++, Vt.hide();
  }
  set(e) {
    Vt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    Vt.done();
  }
  reset() {
    Vt.set(0);
  }
  remove() {
    Vt.done(), Vt.remove();
  }
  isStarted() {
    return Vt.isStarted();
  }
  getStatus() {
    return Vt.status;
  }
}, qr = new wR();
qr.reveal;
qr.hide;
var nh = /* @__PURE__ */ Symbol("FormComponentReset");
function el(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function _R(e, t) {
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
function kR(e, t) {
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
    return _R(e, t);
  if (e instanceof HTMLSelectElement)
    return kR(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function SR(e, t) {
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
function ER(e, t, n) {
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
    s && SR(s, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [nh]: !0 } })
  );
}
var Ze = new J6();
let oo = Je.create(), rh = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, oh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
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
    return rh = e === null ? () => null : e, wn;
  },
  determineSuccessUsing(e) {
    return oh = e, wn;
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
    zR,
    PR,
    CR
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), oo.request(t).then(async (n) => {
    t.precognitive && Uc(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && oh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && $R(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (qc(t, r) ?? ((s) => s))(o) ?? o;
  }, (n) => AR(n) ? Promise.reject(n) : (t.precognitive && Uc(n.response), (qc(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, zR = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? oo.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? rh(e, oo) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": TR(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, $R = (e) => e >= 200 && e < 300, PR = (e) => (typeof e.fingerprint != "string" || (ba[e.fingerprint]?.abort(), delete ba[e.fingerprint]), e), CR = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (ba[e.fingerprint] = new AbortController(), {
  ...e,
  signal: ba[e.fingerprint].signal
}), Uc = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, AR = (e) => !I0(e) || typeof e.response?.status != "number" || M0(e), qc = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], TR = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (ah(e.data) ? "multipart/form-data" : "application/json"), ah = (e) => Bl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => ah(t)), Bl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, OR = (e, t) => {
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
          for (let d = 0; d < l.length; d++)
            a.push(s ? `${s}.${d}` : String(d));
        else if (l !== null && typeof l == "object")
          for (const d of Object.keys(l))
            a.push(s ? `${s}.${d}` : d);
      }
      r = a;
    } else
      r = r.map((a) => a ? `${a}.${o}` : o);
  return r;
}, NR = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Vc = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => NR(n, r)))), RR = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (F) => F !== o ? (o = F, n.validatingChanged) : [];
  let s = [];
  const l = (F) => {
    const C = [...new Set(F)];
    return s.length !== C.length || !C.every((j) => s.includes(j)) ? (s = C, n.validatedChanged) : [];
  }, d = () => s.filter((F) => typeof f[F] > "u");
  let u = [];
  const c = (F) => {
    const C = [...new Set(F)];
    return u.length !== C.length || !C.every((j) => u.includes(j)) ? (u = C, n.touchedChanged) : [];
  };
  let f = {};
  const v = (F) => {
    const C = IR(F);
    return kn(f, C) ? [] : (f = C, n.errorsChanged);
  }, y = (F) => {
    const C = { ...f };
    return delete C[Vr(F)], v(C);
  }, m = () => Object.keys(f).length > 0;
  let p = 1500;
  const h = (F) => {
    p = F, _.cancel(), _ = P();
  };
  let b = t, z = null, w = [], T = null;
  const P = () => jO((F) => {
    e({
      get: (C, j = {}, E = {}) => wn.get(C, V(j), g(E, F, j)),
      post: (C, j = {}, E = {}) => wn.post(C, V(j), g(E, F, j)),
      patch: (C, j = {}, E = {}) => wn.patch(C, V(j), g(E, F, j)),
      put: (C, j = {}, E = {}) => wn.put(C, V(j), g(E, F, j)),
      delete: (C, j = {}, E = {}) => wn.delete(C, V(j), g(E, F, j))
    }).catch((C) => M0(C) || I0(C) && C.response?.status === 422 ? null : Promise.reject(C));
  }, p, { leading: !0, trailing: !0 });
  let _ = P();
  const g = (F, C, j = {}) => {
    const E = {
      ...F,
      ...C
    }, L = Array.from(E.only ?? E.validate ?? u);
    return {
      ...C,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...m6(F, C),
      only: L,
      timeout: E.timeout ?? 5e3,
      onValidationError: (A, I) => ([
        ...l([...s, ...L]),
        ...v(Gi(Vc({ ...f }, L), A.data.errors))
      ].forEach((x) => x()), E.onValidationError ? E.onValidationError(A, I) : Promise.reject(I)),
      onSuccess: (A) => (l([...s, ...L]).forEach((I) => I()), E.onSuccess ? E.onSuccess(A) : A),
      onPrecognitionSuccess: (A) => ([
        ...l([...s, ...L]),
        ...v(Vc({ ...f }, L))
      ].forEach((I) => I()), E.onPrecognitionSuccess ? E.onPrecognitionSuccess(A) : A),
      onBefore: () => {
        const A = u.some((M) => M.includes("*")), I = A ? [...new Set(u.flatMap((M) => OR(M, j)))] : u;
        return E.onBeforeValidation && E.onBeforeValidation({ data: j, touched: I }, { data: b, touched: w }) === !1 || (E.onBefore || (() => !0))() === !1 ? !1 : (A && c(I).forEach((M) => M()), T = u, z = j, !0);
      },
      onStart: () => {
        a(!0).forEach((A) => A()), (E.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((A) => A()), w = T, b = z, T = z = null, (E.onFinish ?? (() => null))();
      }
    };
  }, k = (F, C, j) => {
    if (typeof F > "u") {
      const E = Array.from(j?.only ?? j?.validate ?? []);
      c([...u, ...E]).forEach((L) => L()), _(j ?? {});
      return;
    }
    if (Bl(C) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    F = Vr(F), (F.includes("*") || wt(b, F) !== C) && (c([F, ...u]).forEach((E) => E()), _(j ?? {}));
  }, V = (F) => r === !1 ? tl(F) : F, D = {
    touched: () => u,
    validate(F, C, j) {
      return typeof F == "object" && !("target" in F) && (j = F, F = C = void 0), k(F, C, j), D;
    },
    touch(F) {
      const C = Array.isArray(F) ? F : [Vr(F)];
      return c([...u, ...C]).forEach((j) => j()), D;
    },
    validating: () => o,
    valid: d,
    errors: () => f,
    hasErrors: m,
    setErrors(F) {
      return v(F).forEach((C) => C()), D;
    },
    forgetError(F) {
      return y(F).forEach((C) => C()), D;
    },
    defaults(F) {
      return t = F, b = F, D;
    },
    reset(...F) {
      if (F.length === 0)
        c([]).forEach((C) => C());
      else {
        const C = [...u];
        F.forEach((j) => {
          C.includes(j) && C.splice(C.indexOf(j), 1), zt(b, j, wt(t, j));
        }), c(C).forEach((j) => j());
      }
      return D;
    },
    setTimeout(F) {
      return h(F), D;
    },
    on(F, C) {
      return n[F].push(C), D;
    },
    validateFiles() {
      return r = !0, D;
    },
    withoutFileValidation() {
      return r = !1, D;
    }
  };
  return D;
}, MR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), IR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Vr = (e) => typeof e != "string" ? e.target.name : e, tl = (e) => {
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
function DR(e) {
  if (bi)
    return;
  yi === null && (bi = !0, yi = new Set(Object.keys(sh({}))), bi = !1);
  const t = Object.keys(e).filter((n) => yi.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function sh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Xo.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = lt(typeof n == "function" ? n() : n);
  DR(a);
  let s = null, l, d = (m) => m, u = null, c = [], f = !1;
  const y = _n({
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
      const b = RR((w) => {
        const { method: T, url: P } = r(), _ = lt(d(this.data()));
        return w[T](P, _);
      }, lt(a));
      u = b, b.on("validatingChanged", () => {
        p.validating = b.validating();
      }).on("validatedChanged", () => {
        p.__valid = b.valid();
      }).on("touchedChanged", () => {
        p.__touched = b.touched();
      }).on("errorsChanged", () => {
        const w = h ?? xa.get("form.withAllErrors") ? b.errors() : MR(b.errors());
        this.errors = {}, this.setError(w), p.__valid = b.valid();
      });
      const z = (w, T) => (T(w), w);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => b,
        withAllErrors: () => z(p, () => h = !0),
        valid: (w) => p.__valid.includes(w),
        invalid: (w) => w in this.errors,
        setValidationTimeout: (w) => z(p, () => b.setTimeout(w)),
        validateFiles: () => z(p, () => b.validateFiles()),
        withoutFileValidation: () => z(p, () => b.withoutFileValidation()),
        touch: (w, ...T) => (Array.isArray(w) ? b.touch(w) : typeof w == "string" ? b.touch([w, ...T]) : b.touch(w), p),
        touched: (w) => typeof w == "string" ? p.__touched.includes(w) : p.__touched.length > 0,
        validate: (w, T) => {
          if (typeof w == "object" && !("target" in w) && (T = w, w = void 0), w === void 0)
            b.validate(T);
          else {
            const P = Vr(w), _ = d(this.data());
            b.validate(P, wt(_, P), T);
          }
          return p;
        },
        setErrors: (w) => z(p, () => this.setError(w)),
        forgetError: (w) => z(
          p,
          () => this.clearErrors(Vr(w))
        )
      }), p;
    },
    data() {
      return Object.keys(a).reduce((m, p) => zt(m, p, wt(this, p)), {});
    },
    transform(m) {
      return d = m, this;
    },
    defaults(m, p) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof m > "u" ? (a = lt(this.data()), this.isDirty = !1) : a = typeof m == "string" ? zt(lt(a), m, p) : Object.assign({}, lt(a), m), u?.defaults(a), this;
    },
    reset(...m) {
      const p = lt(typeof n == "function" ? n() : a), h = lt(p);
      return m.length === 0 ? (a = h, Object.assign(this, p)) : m.filter((b) => t0(h, b)).forEach((b) => {
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
      const z = {
        ...b,
        onCancelToken: (T) => {
          if (s = T, b.onCancelToken)
            return b.onCancelToken(T);
        },
        onBefore: (T) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), b.onBefore)
            return b.onBefore(T);
        },
        onStart: (T) => {
          if (this.processing = !0, b.onStart)
            return b.onStart(T);
        },
        onProgress: (T) => {
          if (this.progress = T ?? null, b.onProgress)
            return b.onProgress(T);
        },
        onSuccess: async (T) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(
            () => this.recentlySuccessful = !1,
            xa.get("form.recentlySuccessfulDuration")
          );
          const P = b.onSuccess ? await b.onSuccess(T) : null;
          return f || (a = lt(this.data()), this.isDirty = !1), P;
        },
        onError: (T) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(T), b.onError)
            return b.onError(T);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, b.onCancel)
            return b.onCancel();
        },
        onFinish: (T) => {
          if (this.processing = !1, this.progress = null, s = null, b.onFinish)
            return b.onFinish(T);
        }
      }, w = d(this.data());
      p === "delete" ? Ze.delete(h, { ...z, data: w }) : Ze[p](h, w, z);
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
      return c = m, this;
    },
    __rememberable: t === null,
    __remember() {
      const m = this.data();
      if (c.length > 0) {
        const p = { ...m };
        return c.forEach((h) => delete p[h]), { data: p, errors: this.errors };
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
      y.isDirty = !kn(y.data(), a);
      const p = Ze.restore(t), h = lt(m.__remember());
      t && !kn(p, h) && Ze.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var xt = W(void 0), Qe = W(), xi = an(null), Ro = W(void 0), jc;
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
    return jc = rR(a, r || ((s) => s), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (s) => {
        xt.value = ar(s.component), Qe.value = s.page, Ro.value = s.preserveState ? Ro.value : Date.now();
      },
      onFlash: (s) => {
        Qe.value = { ...Qe.value, flash: s };
      }
    }), Ze.on("navigate", () => jc.forceUpdate())), () => {
      if (xt.value) {
        xt.value.inheritAttrs = !!xt.value.inheritAttrs;
        const s = Ae(xt.value, {
          ...Qe.value.props,
          key: Ro.value
        });
        return xi.value && (xt.value.layout = xi.value, xi.value = null), xt.value.layout ? typeof xt.value.layout == "function" ? xt.value.layout(Ae, s) : (Array.isArray(xt.value.layout) ? xt.value.layout : [xt.value.layout]).concat(s).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, Ae(d, { ...Qe.value.props }, () => l))) : s;
      }
    };
  }
});
function ih() {
  return _n({
    props: ee(() => Qe.value?.props),
    url: ee(() => Qe.value?.url),
    component: ee(() => Qe.value?.component),
    version: ee(() => Qe.value?.version),
    clearHistory: ee(() => Qe.value?.clearHistory),
    deferredProps: ee(() => Qe.value?.deferredProps),
    mergeProps: ee(() => Qe.value?.mergeProps),
    prependProps: ee(() => Qe.value?.prependProps),
    deepMergeProps: ee(() => Qe.value?.deepMergeProps),
    matchPropsOn: ee(() => Qe.value?.matchPropsOn),
    rememberedState: ee(() => Qe.value?.rememberedState),
    encryptHistory: ee(() => Qe.value?.encryptHistory),
    scrollProps: ee(() => Qe.value?.scrollProps),
    flash: ee(() => Qe.value?.flash)
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
}, FR = /* @__PURE__ */ Symbol("InertiaFormContext");
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
      const [P, _] = m();
      return e.transform(_);
    }, a = sh({}).withPrecognition(
      () => l.value,
      () => m()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? zn.get("form.withAllErrors")) && a.withAllErrors();
    const s = W(), l = ee(
      () => dn(e.action) ? e.action.method : e.method.toLowerCase()
    ), d = W(!1), u = W(new FormData()), c = (P) => {
      P.type === "reset" && P.detail?.[nh] && P.preventDefault(), d.value = P.type === "reset" ? !1 : !kn(y(), Bc(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = v(), a.defaults(y()), f.forEach((P) => s.value.addEventListener(P, c));
    }), Me(
      () => e.validateFiles,
      (P) => P ? a.validateFiles() : a.withoutFileValidation()
    ), Me(
      () => e.validationTimeout,
      (P) => a.setValidationTimeout(P)
    ), wa(() => f.forEach((P) => s.value?.removeEventListener(P, c)));
    const v = (P) => new FormData(s.value, P), y = (P) => Bc(v(P)), m = (P) => Fl(
      l.value,
      dn(e.action) ? e.action.url : e.action,
      y(P),
      e.queryStringArrayFormat
    ), p = (P) => {
      const [_, g] = m(P);
      if (P?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open(_, "_blank");
        return;
      }
      const V = (F) => {
        F && (F === !0 ? h() : F.length > 0 && h(...F));
      }, D = {
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
        onSuccess: (...F) => {
          e.onSuccess?.(...F), e.onSubmitComplete?.(T), V(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && w();
        },
        onError: (...F) => {
          e.onError?.(...F), V(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(g)).submit(l.value, _, D), a.transform(o);
    }, h = (...P) => {
      ER(s.value, u.value, P), a.reset(...P);
    }, b = (...P) => {
      a.clearErrors(...P);
    }, z = (...P) => {
      b(...P), h(...P);
    }, w = () => {
      u.value = v(), d.value = !1;
    }, T = {
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
      resetAndClearErrors: z,
      setError: (P, _) => a.setError(typeof P == "string" ? { [P]: _ } : P),
      get isDirty() {
        return d.value;
      },
      reset: h,
      submit: p,
      defaults: w,
      getData: y,
      getFormData: v,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: (P, _) => a.validate(...Xo.mergeHeadersForValidation(P, _, e.headers)),
      validator: () => a.validator()
    };
    return r(T), qn(FR, T), () => Ae(
      "form",
      {
        ...n,
        ref: s,
        action: dn(e.action) ? e.action.url : e.action,
        method: l.value,
        onSubmit: (P) => {
          P.preventDefault(), p(P.submitter);
        },
        inert: e.disableWhileProcessing && a.processing
      },
      t.default ? t.default(T) : []
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${ZO(o)}"`;
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
    const o = W(null), a = W(null), s = W(null), l = ee(
      () => wi(e.itemsElement, o.value)
    ), d = ee(() => D6(l.value)), u = ee(
      () => wi(e.startElement, a.value)
    ), c = ee(() => wi(e.endElement, s.value)), f = W(!1), v = W(!1), y = W(0), m = W(!1), p = W(!1), h = () => {
      y.value = b.getRequestCount(), m.value = b.hasPrevious(), p.value = b.hasNext();
    }, {
      dataManager: b,
      elementManager: z,
      flush: w
    } = cR({
      // Data
      getPropName: () => e.data,
      inReverseMode: () => e.reverse,
      shouldFetchNext: () => !e.onlyPrevious,
      shouldFetchPrevious: () => !e.onlyNext,
      shouldPreserveUrl: () => e.preserveUrl,
      // Elements
      getTriggerMargin: () => e.buffer,
      getStartElement: () => u.value,
      getEndElement: () => c.value,
      getItemsElement: () => l.value,
      getScrollableParent: () => d.value,
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
      const g = ih().scrollProps?.[e.data];
      g && (m.value = !!g.previousPage, p.value = !!g.nextPage);
    }
    const T = ee(() => !P.value), P = ee(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), _ = () => {
      d.value ? d.value.scrollTo({
        top: d.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ke(() => {
      z.setupObservers(), z.processServerLoadedElements(b.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && _(), T.value && z.enableTriggers();
    }), nl(w), Me(
      () => [T.value, e.onlyNext, e.onlyPrevious],
      ([g]) => {
        g ? z.enableTriggers() : z.disableTriggers();
      }
    ), r({
      fetchNext: b.fetchNext,
      fetchPrevious: b.fetchPrevious,
      hasPrevious: b.hasPrevious,
      hasNext: b.hasNext
    }), () => {
      const g = [], k = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: m.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const V = T.value && !e.onlyNext, D = {
          loading: f.value,
          fetch: b.fetchPrevious,
          autoMode: V,
          manualMode: !V,
          hasMore: m.value,
          ...k
        };
        g.push(
          Ae(
            "div",
            { ref: a },
            t.previous ? t.previous(D) : f.value ? t.loading?.(D) : void 0
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
        const V = T.value && !e.onlyPrevious, D = {
          loading: v.value,
          fetch: b.fetchNext,
          autoMode: V,
          manualMode: !V,
          hasMore: p.value,
          ...k
        };
        g.push(
          Ae(
            "div",
            { ref: s },
            t.next ? t.next(D) : v.value ? t.loading?.(D) : void 0
          )
        );
      }
      return Ae(te, {}, e.reverse ? [...g].reverse() : g);
    };
  }
});
var jt = () => {
}, BR = Fe({
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
    const r = W(0), o = W(), a = ee(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = ee(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : xa.get("prefetch.cacheFor"));
    Ke(() => {
      a.value.includes("mount") && p();
    }), nl(() => {
      clearTimeout(o.value);
    });
    const l = ee(
      () => dn(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), d = ee(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : l.value !== "get" ? "button" : e.as.toLowerCase()), u = ee(
      () => Fl(
        l.value,
        dn(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), c = ee(() => u.value[0]), f = ee(() => u.value[1]), v = ee(() => d.value === "button" ? { type: "button" } : d.value === "a" || typeof d.value != "string" ? { href: c.value } : {}), y = ee(() => ({
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
    })), m = ee(() => ({
      ...y.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (w) => {
        r.value++, e.onStart?.(w);
      },
      onProgress: e.onProgress,
      onFinish: (w) => {
        r.value--, e.onFinish?.(w);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), p = () => {
      Ze.prefetch(
        c.value,
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
      onClick: (w) => {
        No(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
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
    }, z = {
      onMousedown: (w) => {
        No(w) && (w.preventDefault(), p());
      },
      onKeydown: (w) => {
        Lc(w) && (w.preventDefault(), p());
      },
      onMouseup: (w) => {
        No(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
      },
      onKeyup: (w) => {
        Lc(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
      },
      onClick: (w) => {
        No(w) && w.preventDefault();
      }
    };
    return () => Ae(
      d.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? b : a.value.includes("click") ? z : h
      },
      t
    );
  }
}), LR = BR;
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
    const e = ih();
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
var xa = zn.extend({});
const UR = { class: "space-y-3 text-zinc-900 dark:text-white" }, qR = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, VR = { key: 0 }, jR = { key: 1 }, HR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, GR = { class: "space-y-2" }, WR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, XR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, YR = {
  key: 0,
  class: "flex items-center gap-2"
}, KR = ["disabled", "onClick"], ZR = ["disabled", "onClick"], JR = ["disabled", "onClick"], QR = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = W([]), r = W(!0), o = W(!1), a = W(!1), s = W(""), l = W(null), d = ee(() => t.produto?.id ?? null), u = ee(() => new Map(n.value.map((m) => [m.trigger_event, m])));
    async function c() {
      r.value = !0, s.value = "";
      try {
        const [m, p] = await Promise.all([Ee.connection(), Ee.flows(d.value)]);
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
        await m(), await c();
      } catch (p) {
        s.value = p.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (m) => f(() => Ee.createFlow({
      name: `${m.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: m.eventClass,
      product_id: d.value,
      is_active: !0,
      graph_json: zp(m.eventClass)
    })), y = (m) => f(() => Ee.updateFlow(m.id, { is_active: !m.is_active }));
    return Ke(c), (m, p) => (S(), $("div", UR, [
      r.value ? (S(), $("p", qR, "Verificando integração…")) : (S(), $(te, { key: 1 }, [
        i("div", {
          class: X(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          Y(N(jr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (S(), $("span", VR, "ZapRei conectado à Evolution GO.")) : (S(), $("span", jR, [
            p[2] || (p[2] = ne(" A Evolution GO não está conectada. ", -1)),
            Y(N(LR), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: ot(() => [...p[1] || (p[1] = [
                ne("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = ne(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = i("div", null, [
          i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        s.value ? (S(), $("p", HR, q(s.value), 1)) : oe("", !0),
        i("div", GR, [
          (S(!0), $(te, null, Ne(N(Ln), (h) => (S(), $("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            i("div", null, [
              i("div", WR, q(h.label), 1),
              i("div", XR, q(h.eventClass), 1)
            ]),
            u.value.get(h.eventClass) ? (S(), $("div", YR, [
              i("span", {
                class: X(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, q(u.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              i("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (b) => y(u.value.get(h.eventClass))
              }, q(u.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, KR),
              i("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (b) => l.value = u.value.get(h.eventClass)
              }, [
                Y(N(of), { class: "h-3 w-3" }),
                p[4] || (p[4] = ne(" Editar ", -1))
              ], 8, ZR)
            ])) : (S(), $("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (b) => v(h)
            }, " Criar fluxo ", 8, JR))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (S(), Pe(Ap, {
        key: 2,
        flow: l.value,
        onClose: p[0] || (p[0] = (h) => l.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : oe("", !0)
    ]));
  }
}, eM = "zaprei", Hc = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Hc)) {
  const e = document.createElement("link");
  e.id = Hc, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[eM] = { Dashboard: eP, Integrations: nP, ProductPanel: QR };
export {
  eP as Dashboard,
  nP as Integrations,
  QR as ProductPanel
};
