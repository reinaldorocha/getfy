import { h as Me, ref as G, reactive as ln, onMounted as Ke, openBlock as w, createElementBlock as z, createElementVNode as s, createVNode as Y, unref as N, normalizeClass as W, withDirectives as ie, vModelCheckbox as Rn, vModelText as Se, createStaticVNode as Kc, createTextVNode as re, toDisplayString as q, createCommentVNode as le, getCurrentScope as Zc, inject as wr, effectScope as Jc, watch as Fe, provide as jn, defineComponent as qe, useSlots as mh, onUnmounted as ll, withCtx as ot, renderSlot as Xe, createPropsRestProxy as vh, toRef as He, computed as ne, getCurrentInstance as _r, onScopeDispose as Uo, nextTick as fn, onBeforeMount as gh, shallowRef as un, Fragment as ee, renderList as De, normalizeStyle as kt, onBeforeUnmount as $a, isMemoSame as yh, createBlock as Ae, useAttrs as bh, mergeProps as Pa, Teleport as Qc, isRef as ul, toRefs as xh, customRef as wh, toValue as Le, resolveComponent as ef, resolveDynamicComponent as Dt, markRaw as ur, readonly as _h, withModifiers as Sn, vModelSelect as tt, Transition as kh, vModelRadio as Ql, toHandlers as Sh } from "vue";
const Eh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const eu = (e) => e === "";
const zh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const tu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const $h = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const Ph = (e) => {
  const t = $h(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var $r = {
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
const Ch = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": a,
  size: i = $r.width,
  color: l = $r.stroke,
  ...d
}, { slots: u }) => Me(
  "svg",
  {
    ...$r,
    ...d,
    width: i,
    height: i,
    stroke: l,
    "stroke-width": eu(n) || eu(r) || n === !0 || r === !0 ? Number(o || a || $r["stroke-width"]) * 24 / Number(i) : o || a || $r["stroke-width"],
    class: zh(
      "lucide",
      d.class,
      ...e ? [`lucide-${tu(Ph(e))}-icon`, `lucide-${tu(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !Eh(d) && { "aria-hidden": "true" }
  },
  [...t.map((c) => Me(...c)), ...u.default ? [u.default()] : []]
);
const Re = (e, t) => (n, { slots: r, attrs: o }) => Me(
  Ch,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const Ah = Re("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const tf = Re("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Th = Re("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Oh = Re("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const nu = Re("calendar-days", [
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
const si = Re("calendar-range", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);
const Br = Re("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const nf = Re("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const Cs = Re("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const rf = Re("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Nh = Re("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Xr = Re("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Lr = Re("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Bn = Re("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const of = Re("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const af = Re("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const Rh = Re("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Mh = Re("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const ru = Re("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const ou = Re("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const sf = Re("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const ht = Re("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const au = Re("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Ih = Re("message-square-text", [
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
const lf = Re("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Dh = Re("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const uf = Re("palette", [
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
const li = Re("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const df = Re("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const cf = Re("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const On = Re("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const iu = Re("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const ff = Re("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Fh = Re("save", [
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
const Kr = Re("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const hn = Re("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const pf = Re("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Bh = Re("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ra = Re("sparkles", [
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
const oa = Re("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const ui = Re("trending-up", [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
]);
const hf = Re("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const En = Re("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Lh = Re("wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);
const Yt = Re("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Hn = Re("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Uh = "/zaprei";
function Vh() {
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
function Ue(e, { method: t = "GET", body: n, query: r } = {}) {
  const o = new URL(Uh + e, window.location.origin);
  Object.entries(r || {}).forEach(([i, l]) => {
    l != null && l !== "" && o.searchParams.set(i, l);
  });
  const a = n instanceof FormData;
  return fetch(o, {
    method: t,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": Vh(),
      ...a || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: a ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(qh);
}
const Te = {
  connection: () => Ue("/connection"),
  saveConnection: (e) => Ue("/connection", { method: "PUT", body: e }),
  testConnection: () => Ue("/connection/test", { method: "POST" }),
  products: () => Ue("/products"),
  groups: () => Ue("/groups"),
  dailyReport: () => Ue("/daily-report"),
  saveDailyReport: (e) => Ue("/daily-report", { method: "PUT", body: e }),
  testDailyReport: (e) => Ue("/daily-report/test", { method: "POST", body: e }),
  weeklyReport: () => Ue("/weekly-report"),
  saveWeeklyReport: (e) => Ue("/weekly-report", { method: "PUT", body: e }),
  testWeeklyReport: (e) => Ue("/weekly-report/test", { method: "POST", body: e }),
  monthlyReport: () => Ue("/monthly-report"),
  saveMonthlyReport: (e) => Ue("/monthly-report", { method: "PUT", body: e }),
  testMonthlyReport: (e) => Ue("/monthly-report/test", { method: "POST", body: e }),
  yearlyReport: () => Ue("/yearly-report"),
  saveYearlyReport: (e) => Ue("/yearly-report", { method: "PUT", body: e }),
  testYearlyReport: (e) => Ue("/yearly-report/test", { method: "POST", body: e }),
  previewReport: (e) => Ue("/daily-report/preview", { query: e }),
  resendReport: (e) => Ue("/daily-report/resend", { method: "POST", body: e }),
  flows: (e) => Ue("/flows", { query: { product_id: e } }),
  createFlow: (e) => Ue("/flows", { method: "POST", body: e }),
  updateFlow: (e, t) => Ue(`/flows/${e}`, { method: "PUT", body: t }),
  deleteFlow: (e) => Ue(`/flows/${e}`, { method: "DELETE" }),
  duplicateFlow: (e) => Ue(`/flows/${e}/duplicate`, { method: "POST" }),
  testFlow: (e, t) => Ue(`/flows/${e}/test`, {
    method: "POST",
    body: typeof t == "string" ? { phone: t } : t
  }),
  runs: () => Ue("/flows/runs"),
  retryRun: (e) => Ue(`/flows/runs/${e}/retry`, { method: "POST" }),
  contacts: (e) => Ue("/contacts", { query: e }),
  importContacts: (e) => Ue("/contacts/import", { method: "POST", body: su(e) }),
  deleteContact: (e) => Ue(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Ue("/campaigns"),
  createCampaign: (e) => Ue("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Ue(`/campaigns/${e}`),
  cancelCampaign: (e) => Ue(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Ue("/media", { method: "POST", body: su(e) })
};
function su(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const jh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Hh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Gh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Wh = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, Yh = {
  key: 1,
  class: "mt-4 space-y-4"
}, Xh = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, Kh = ["placeholder"], Zh = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Jh = { class: "mt-2 flex items-center gap-2" }, Qh = ["value"], em = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, tm = { class: "flex flex-wrap items-center gap-2" }, nm = ["disabled"], rm = ["disabled"], om = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, am = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, im = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, mf = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = G(!0), o = G(!1), a = G(!1), i = G(""), l = G(""), d = G(!1), u = G(!1), c = G(""), f = ln({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function h() {
      r.value = !0, i.value = "";
      try {
        const { connection: m } = await Te.connection();
        f.base_url = m.credentials.base_url || "", f.instance = m.credentials.instance || "", f.is_active = m.is_active, u.value = m.credentials.has_api_key, d.value = m.connected, c.value = m.webhook_url || "";
      } catch (m) {
        i.value = m.message;
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      o.value = !0, i.value = "", l.value = "";
      try {
        const { connection: m } = await Te.saveConnection({ ...f });
        f.api_key = "", u.value = m.credentials.has_api_key, d.value = m.connected, c.value = m.webhook_url || "", l.value = "Conexão salva.", n("saved");
      } catch (m) {
        i.value = m.message;
      } finally {
        o.value = !1;
      }
    }
    async function p() {
      if (c.value)
        try {
          await navigator.clipboard.writeText(c.value), l.value = "URL do webhook copiada.";
        } catch {
          i.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function v() {
      a.value = !0, i.value = "", l.value = "";
      try {
        const { message: m } = await Te.testConnection();
        l.value = m || "Conexão validada.";
      } catch (m) {
        i.value = m.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(h), (m, y) => (w(), z("div", jh, [
      s("div", Hh, [
        s("div", Gh, [
          Y(N(df), { class: "h-5 w-5" })
        ]),
        y[5] || (y[5] = s("div", null, [
          s("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (w(), z("div", Wh, [
        Y(N(ht), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        y[6] || (y[6] = s("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (w(), z("div", Yh, [
        s("div", Xh, [
          y[7] || (y[7] = s("div", null, [
            s("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            s("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          s("label", {
            class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ie(s("input", {
              "onUpdate:modelValue": y[0] || (y[0] = ($) => f.is_active = $),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [Rn, f.is_active]
            ]),
            s("span", {
              class: W(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        s("div", null, [
          y[8] || (y[8] = s("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          ie(s("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": y[1] || (y[1] = ($) => f.base_url = $),
            type: "url",
            placeholder: "https://sua-evolution-go.com",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              Se,
              f.base_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        s("div", null, [
          y[9] || (y[9] = s("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ie(s("input", {
            id: "zr-instance",
            "onUpdate:modelValue": y[2] || (y[2] = ($) => f.instance = $),
            type: "text",
            placeholder: "getfy-bot",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              Se,
              f.instance,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        s("div", null, [
          y[10] || (y[10] = s("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ie(s("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": y[3] || (y[3] = ($) => f.api_key = $),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, Kh), [
            [
              Se,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          y[11] || (y[11] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        c.value ? (w(), z("div", Zh, [
          y[13] || (y[13] = Kc('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          s("div", Jh, [
            s("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: y[4] || (y[4] = ($) => $.target.select())
            }, null, 40, Qh),
            s("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: p
            }, [
              Y(N(of), { class: "h-3.5 w-3.5" }),
              y[12] || (y[12] = re(" Copiar ", -1))
            ])
          ])
        ])) : (w(), z("p", em, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        s("div", tm, [
          s("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: b
          }, q(o.value ? "Salvando…" : "Salvar conexão"), 9, nm),
          s("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v
          }, q(a.value ? "Testando…" : "Testar conexão"), 9, rm),
          d.value ? (w(), z("span", om, [
            Y(N(Lr), { class: "h-3 w-3" }),
            y[14] || (y[14] = re(" Conectado ", -1))
          ])) : le("", !0)
        ]),
        i.value ? (w(), z("p", am, q(i.value), 1)) : l.value ? (w(), z("p", im, q(l.value), 1)) : le("", !0)
      ]))
    ]));
  }
};
function Zr(e) {
  return Zc() ? (Uo(e), !0) : !1;
}
function sn(e) {
  return typeof e == "function" ? e() : N(e);
}
const sm = typeof window < "u" && typeof document < "u", lm = (e) => typeof e < "u", um = Object.prototype.toString, dm = (e) => um.call(e) === "[object Object]", cm = () => {
};
function fm(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const vf = (e) => e();
function pm(e = vf) {
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
  return { isActive: _h(t), pause: n, resume: r, eventFilter: o };
}
function lu(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function hm(e, t, n = {}) {
  const {
    eventFilter: r = vf,
    ...o
  } = n;
  return Fe(
    e,
    fm(
      r,
      t
    ),
    o
  );
}
function or(e, t, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: a, pause: i, resume: l, isActive: d } = pm(r);
  return { stop: hm(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: i, resume: l, isActive: d };
}
function mm(e, t = {}) {
  if (!ul(e))
    return xh(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = wh(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var a;
        if ((a = sn(t.replaceRef)) != null ? a : !0)
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
function As(e, t = !1) {
  function n(f, { flush: h = "sync", deep: b = !1, timeout: p, throwOnTimeout: v } = {}) {
    let m = null;
    const $ = [new Promise((k) => {
      m = Fe(
        e,
        (T) => {
          f(T) !== t && (m?.(), k(T));
        },
        {
          flush: h,
          deep: b,
          immediate: !0
        }
      );
    })];
    return p != null && $.push(
      lu(p, v).then(() => sn(e)).finally(() => m?.())
    ), Promise.race($);
  }
  function r(f, h) {
    if (!ul(f))
      return n((T) => T === f, h);
    const { flush: b = "sync", deep: p = !1, timeout: v, throwOnTimeout: m } = h ?? {};
    let y = null;
    const k = [new Promise((T) => {
      y = Fe(
        [e, f],
        ([C, _]) => {
          t !== (C === _) && (y?.(), T(C));
        },
        {
          flush: b,
          deep: p,
          immediate: !0
        }
      );
    })];
    return v != null && k.push(
      lu(v, m).then(() => sn(e)).finally(() => (y?.(), sn(e)))
    ), Promise.race(k);
  }
  function o(f) {
    return n((h) => !!h, f);
  }
  function a(f) {
    return r(null, f);
  }
  function i(f) {
    return r(void 0, f);
  }
  function l(f) {
    return n(Number.isNaN, f);
  }
  function d(f, h) {
    return n((b) => {
      const p = Array.from(b);
      return p.includes(f) || p.includes(sn(f));
    }, h);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, h) {
    let b = -1;
    return n(() => (b += 1, b >= f), h);
  }
  return Array.isArray(sn(e)) ? {
    toMatch: n,
    toContains: d,
    changed: u,
    changedTimes: c,
    get not() {
      return As(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: o,
    toBeNull: a,
    toBeNaN: l,
    toBeUndefined: i,
    changed: u,
    changedTimes: c,
    get not() {
      return As(e, !t);
    }
  };
}
function Ts(e) {
  return As(e);
}
function vm(e) {
  var t;
  const n = sn(e);
  return (t = n?.$el) != null ? t : n;
}
const gf = sm ? window : void 0;
function yf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = gf) : [t, n, r, o] = e, !t)
    return cm;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, f, h, b) => (c.addEventListener(f, h, b), () => c.removeEventListener(f, h, b)), d = Fe(
    () => [vm(t), sn(o)],
    ([c, f]) => {
      if (i(), !c)
        return;
      const h = dm(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((b) => r.map((p) => l(c, b, p, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), i();
  };
  return Zr(u), u;
}
function gm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function uu(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = gf,
    eventName: a = "keydown",
    passive: i = !1,
    dedupe: l = !1
  } = r, d = gm(t);
  return yf(o, a, (c) => {
    c.repeat && sn(l) || d(c) && n(c);
  }, i);
}
function ym(e) {
  return JSON.parse(JSON.stringify(e));
}
function di(e, t, n, r = {}) {
  var o, a, i;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: h
  } = r, b = _r(), p = n || b?.emit || ((o = b?.$emit) == null ? void 0 : o.bind(b)) || ((i = (a = b?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(b?.proxy));
  let v = u;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const m = (k) => l ? typeof l == "function" ? l(k) : ym(k) : k, y = () => lm(e[t]) ? m(e[t]) : f, $ = (k) => {
    h ? h(k) && p(v, k) : p(v, k);
  };
  if (d) {
    const k = y(), T = G(k);
    let C = !1;
    return Fe(
      () => e[t],
      (_) => {
        C || (C = !0, T.value = m(_), fn(() => C = !1));
      }
    ), Fe(
      T,
      (_) => {
        !C && (_ !== e[t] || c) && $(_);
      },
      { deep: c }
    ), T;
  } else
    return ne({
      get() {
        return y();
      },
      set(k) {
        $(k);
      }
    });
}
var bm = { value: () => {
} };
function Ca() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Vo(n);
}
function Vo(e) {
  this._ = e;
}
function xm(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Vo.prototype = Ca.prototype = {
  constructor: Vo,
  on: function(e, t) {
    var n = this._, r = xm(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; )
        if ((o = (e = r[a]).type) && (o = wm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type)
        n[o] = du(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = du(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Vo(e);
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
function wm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function du(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = bm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Os = "http://www.w3.org/1999/xhtml";
const cu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Os,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Aa(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), cu.hasOwnProperty(t) ? { space: cu[t], local: e } : e;
}
function _m(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Os && t.documentElement.namespaceURI === Os ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function km(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function bf(e) {
  var t = Aa(e);
  return (t.local ? km : _m)(t);
}
function Sm() {
}
function dl(e) {
  return e == null ? Sm : function() {
    return this.querySelector(e);
  };
}
function Em(e) {
  typeof e != "function" && (e = dl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, l = r[o] = new Array(i), d, u, c = 0; c < i; ++c)
      (d = a[c]) && (u = e.call(d, d.__data__, c, a)) && ("__data__" in d && (u.__data__ = d.__data__), l[c] = u);
  return new St(r, this._parents);
}
function zm(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function $m() {
  return [];
}
function xf(e) {
  return e == null ? $m : function() {
    return this.querySelectorAll(e);
  };
}
function Pm(e) {
  return function() {
    return zm(e.apply(this, arguments));
  };
}
function Cm(e) {
  typeof e == "function" ? e = Pm(e) : e = xf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], l = i.length, d, u = 0; u < l; ++u)
      (d = i[u]) && (r.push(e.call(d, d.__data__, u, i)), o.push(d));
  return new St(r, o);
}
function wf(e) {
  return function() {
    return this.matches(e);
  };
}
function _f(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Am = Array.prototype.find;
function Tm(e) {
  return function() {
    return Am.call(this.children, e);
  };
}
function Om() {
  return this.firstElementChild;
}
function Nm(e) {
  return this.select(e == null ? Om : Tm(typeof e == "function" ? e : _f(e)));
}
var Rm = Array.prototype.filter;
function Mm() {
  return Array.from(this.children);
}
function Im(e) {
  return function() {
    return Rm.call(this.children, e);
  };
}
function Dm(e) {
  return this.selectAll(e == null ? Mm : Im(typeof e == "function" ? e : _f(e)));
}
function Fm(e) {
  typeof e != "function" && (e = wf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, l = r[o] = [], d, u = 0; u < i; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new St(r, this._parents);
}
function kf(e) {
  return new Array(e.length);
}
function Bm() {
  return new St(this._enter || this._groups.map(kf), this._parents);
}
function aa(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
aa.prototype = {
  constructor: aa,
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
function Lm(e) {
  return function() {
    return e;
  };
}
function Um(e, t, n, r, o, a) {
  for (var i = 0, l, d = t.length, u = a.length; i < u; ++i)
    (l = t[i]) ? (l.__data__ = a[i], r[i] = l) : n[i] = new aa(e, a[i]);
  for (; i < d; ++i)
    (l = t[i]) && (o[i] = l);
}
function Vm(e, t, n, r, o, a, i) {
  var l, d, u = /* @__PURE__ */ new Map(), c = t.length, f = a.length, h = new Array(c), b;
  for (l = 0; l < c; ++l)
    (d = t[l]) && (h[l] = b = i.call(d, d.__data__, l, t) + "", u.has(b) ? o[l] = d : u.set(b, d));
  for (l = 0; l < f; ++l)
    b = i.call(e, a[l], l, a) + "", (d = u.get(b)) ? (r[l] = d, d.__data__ = a[l], u.delete(b)) : n[l] = new aa(e, a[l]);
  for (l = 0; l < c; ++l)
    (d = t[l]) && u.get(h[l]) === d && (o[l] = d);
}
function qm(e) {
  return e.__data__;
}
function jm(e, t) {
  if (!arguments.length)
    return Array.from(this, qm);
  var n = t ? Vm : Um, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Lm(e));
  for (var a = o.length, i = new Array(a), l = new Array(a), d = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], f = o[u], h = f.length, b = Hm(e.call(c, c && c.__data__, u, r)), p = b.length, v = l[u] = new Array(p), m = i[u] = new Array(p), y = d[u] = new Array(h);
    n(c, f, v, m, y, b, t);
    for (var $ = 0, k = 0, T, C; $ < p; ++$)
      if (T = v[$]) {
        for ($ >= k && (k = $ + 1); !(C = m[k]) && ++k < p; )
          ;
        T._next = C || null;
      }
  }
  return i = new St(i, r), i._enter = l, i._exit = d, i;
}
function Hm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Gm() {
  return new St(this._exit || this._groups.map(kf), this._parents);
}
function Wm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function Ym(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), l = new Array(o), d = 0; d < i; ++d)
    for (var u = n[d], c = r[d], f = u.length, h = l[d] = new Array(f), b, p = 0; p < f; ++p)
      (b = u[p] || c[p]) && (h[p] = b);
  for (; d < o; ++d)
    l[d] = n[d];
  return new St(l, this._parents);
}
function Xm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function Km(e) {
  e || (e = Zm);
  function t(f, h) {
    return f && h ? e(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], l = i.length, d = o[a] = new Array(l), u, c = 0; c < l; ++c)
      (u = i[c]) && (d[c] = u);
    d.sort(t);
  }
  return new St(o, this._parents).order();
}
function Zm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jm() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Qm() {
  return Array.from(this);
}
function ev() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i)
        return i;
    }
  return null;
}
function tv() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function nv() {
  return !this.node();
}
function rv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, l; a < i; ++a)
      (l = o[a]) && e.call(l, l.__data__, a, o);
  return this;
}
function ov(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function av(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function iv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function lv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function uv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function dv(e, t) {
  var n = Aa(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? av : ov : typeof t == "function" ? n.local ? uv : lv : n.local ? sv : iv)(n, t));
}
function Sf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function cv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function pv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function hv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? cv : typeof t == "function" ? pv : fv)(e, t, n ?? "")) : pr(this.node(), e);
}
function pr(e, t) {
  return e.style.getPropertyValue(t) || Sf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function mv(e) {
  return function() {
    delete this[e];
  };
}
function vv(e, t) {
  return function() {
    this[e] = t;
  };
}
function gv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function yv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? mv : typeof t == "function" ? gv : vv)(e, t)) : this.node()[e];
}
function Ef(e) {
  return e.trim().split(/^|\s+/);
}
function cl(e) {
  return e.classList || new zf(e);
}
function zf(e) {
  this._node = e, this._names = Ef(e.getAttribute("class") || "");
}
zf.prototype = {
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
function $f(e, t) {
  for (var n = cl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function Pf(e, t) {
  for (var n = cl(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function bv(e) {
  return function() {
    $f(this, e);
  };
}
function xv(e) {
  return function() {
    Pf(this, e);
  };
}
function wv(e, t) {
  return function() {
    (t.apply(this, arguments) ? $f : Pf)(this, e);
  };
}
function _v(e, t) {
  var n = Ef(e + "");
  if (arguments.length < 2) {
    for (var r = cl(this.node()), o = -1, a = n.length; ++o < a; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? wv : t ? bv : xv)(n, t));
}
function kv() {
  this.textContent = "";
}
function Sv(e) {
  return function() {
    this.textContent = e;
  };
}
function Ev(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function zv(e) {
  return arguments.length ? this.each(e == null ? kv : (typeof e == "function" ? Ev : Sv)(e)) : this.node().textContent;
}
function $v() {
  this.innerHTML = "";
}
function Pv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Cv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Av(e) {
  return arguments.length ? this.each(e == null ? $v : (typeof e == "function" ? Cv : Pv)(e)) : this.node().innerHTML;
}
function Tv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ov() {
  return this.each(Tv);
}
function Nv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rv() {
  return this.each(Nv);
}
function Mv(e) {
  var t = typeof e == "function" ? e : bf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Iv() {
  return null;
}
function Dv(e, t) {
  var n = typeof e == "function" ? e : bf(e), r = t == null ? Iv : typeof t == "function" ? t : dl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Fv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Bv() {
  return this.each(Fv);
}
function Lv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Uv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vv(e) {
  return this.select(e ? Uv : Lv);
}
function qv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function jv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Hv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Gv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Wv(e, t, n) {
  return function() {
    var r = this.__on, o, a = jv(t);
    if (r) {
      for (var i = 0, l = r.length; i < l; ++i)
        if ((o = r[i]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), o = { type: e.type, name: e.name, value: t, listener: a, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Yv(e, t, n) {
  var r = Hv(e + ""), o, a = r.length, i;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var d = 0, u = l.length, c; d < u; ++d)
        for (o = 0, c = l[d]; o < a; ++o)
          if ((i = r[o]).type === c.type && i.name === c.name)
            return c.value;
    }
    return;
  }
  for (l = t ? Wv : Gv, o = 0; o < a; ++o)
    this.each(l(r[o], t, n));
  return this;
}
function Cf(e, t, n) {
  var r = Sf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Xv(e, t) {
  return function() {
    return Cf(this, e, t);
  };
}
function Kv(e, t) {
  return function() {
    return Cf(this, e, t.apply(this, arguments));
  };
}
function Zv(e, t) {
  return this.each((typeof t == "function" ? Kv : Xv)(e, t));
}
function* Jv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var Af = [null];
function St(e, t) {
  this._groups = e, this._parents = t;
}
function co() {
  return new St([[document.documentElement]], Af);
}
function Qv() {
  return this;
}
St.prototype = co.prototype = {
  constructor: St,
  select: Em,
  selectAll: Cm,
  selectChild: Nm,
  selectChildren: Dm,
  filter: Fm,
  data: jm,
  enter: Bm,
  exit: Gm,
  join: Wm,
  merge: Ym,
  selection: Qv,
  order: Xm,
  sort: Km,
  call: Jm,
  nodes: Qm,
  node: ev,
  size: tv,
  empty: nv,
  each: rv,
  attr: dv,
  style: hv,
  property: yv,
  classed: _v,
  text: zv,
  html: Av,
  raise: Ov,
  lower: Rv,
  append: Mv,
  insert: Dv,
  remove: Bv,
  clone: Vv,
  datum: qv,
  on: Yv,
  dispatch: Zv,
  [Symbol.iterator]: Jv
};
function Ft(e) {
  return typeof e == "string" ? new St([[document.querySelector(e)]], [document.documentElement]) : new St([[e]], Af);
}
function eg(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Wt(e, t) {
  if (e = eg(e), t === void 0 && (t = e.currentTarget), t) {
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
const tg = { passive: !1 }, Jr = { capture: !0, passive: !1 };
function ci(e) {
  e.stopImmediatePropagation();
}
function dr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Tf(e) {
  var t = e.document.documentElement, n = Ft(e).on("dragstart.drag", dr, Jr);
  "onselectstart" in t ? n.on("selectstart.drag", dr, Jr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Of(e, t) {
  var n = e.document.documentElement, r = Ft(e).on("dragstart.drag", null);
  t && (r.on("click.drag", dr, Jr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Eo = (e) => () => e;
function Ns(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: a,
  x: i,
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
    x: { value: i, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: d, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ns.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function ng(e) {
  return !e.ctrlKey && !e.button;
}
function rg() {
  return this.parentNode;
}
function og(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function ag() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ig() {
  var e = ng, t = rg, n = og, r = ag, o = {}, a = Ca("start", "drag", "end"), i = 0, l, d, u, c, f = 0;
  function h(T) {
    T.on("mousedown.drag", b).filter(r).on("touchstart.drag", m).on("touchmove.drag", y, tg).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(T, C) {
    if (!(c || !e.call(this, T, C))) {
      var _ = k(this, t.call(this, T, C), T, C, "mouse");
      _ && (Ft(T.view).on("mousemove.drag", p, Jr).on("mouseup.drag", v, Jr), Tf(T.view), ci(T), u = !1, l = T.clientX, d = T.clientY, _("start", T));
    }
  }
  function p(T) {
    if (dr(T), !u) {
      var C = T.clientX - l, _ = T.clientY - d;
      u = C * C + _ * _ > f;
    }
    o.mouse("drag", T);
  }
  function v(T) {
    Ft(T.view).on("mousemove.drag mouseup.drag", null), Of(T.view, u), dr(T), o.mouse("end", T);
  }
  function m(T, C) {
    if (e.call(this, T, C)) {
      var _ = T.changedTouches, g = t.call(this, T, C), S = _.length, L, F;
      for (L = 0; L < S; ++L)
        (F = k(this, g, T, C, _[L].identifier, _[L])) && (ci(T), F("start", T, _[L]));
    }
  }
  function y(T) {
    var C = T.changedTouches, _ = C.length, g, S;
    for (g = 0; g < _; ++g)
      (S = o[C[g].identifier]) && (dr(T), S("drag", T, C[g]));
  }
  function $(T) {
    var C = T.changedTouches, _ = C.length, g, S;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), g = 0; g < _; ++g)
      (S = o[C[g].identifier]) && (ci(T), S("end", T, C[g]));
  }
  function k(T, C, _, g, S, L) {
    var F = a.copy(), O = Wt(L || _, C), E, U, A;
    if ((A = n.call(T, new Ns("beforestart", {
      sourceEvent: _,
      target: h,
      identifier: S,
      active: i,
      x: O[0],
      y: O[1],
      dx: 0,
      dy: 0,
      dispatch: F
    }), g)) != null)
      return E = A.x - O[0] || 0, U = A.y - O[1] || 0, function j(x, I, R) {
        var Q = O, te;
        switch (x) {
          case "start":
            o[S] = j, te = i++;
            break;
          case "end":
            delete o[S], --i;
          case "drag":
            O = Wt(R || I, C), te = i;
            break;
        }
        F.call(
          x,
          T,
          new Ns(x, {
            sourceEvent: I,
            subject: A,
            target: h,
            identifier: S,
            active: te,
            x: O[0] + E,
            y: O[1] + U,
            dx: O[0] - Q[0],
            dy: O[1] - Q[1],
            dispatch: F
          }),
          g
        );
      };
  }
  return h.filter = function(T) {
    return arguments.length ? (e = typeof T == "function" ? T : Eo(!!T), h) : e;
  }, h.container = function(T) {
    return arguments.length ? (t = typeof T == "function" ? T : Eo(T), h) : t;
  }, h.subject = function(T) {
    return arguments.length ? (n = typeof T == "function" ? T : Eo(T), h) : n;
  }, h.touchable = function(T) {
    return arguments.length ? (r = typeof T == "function" ? T : Eo(!!T), h) : r;
  }, h.on = function() {
    var T = a.on.apply(a, arguments);
    return T === a ? h : T;
  }, h.clickDistance = function(T) {
    return arguments.length ? (f = (T = +T) * T, h) : Math.sqrt(f);
  }, h;
}
function fl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Nf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function fo() {
}
var Qr = 0.7, ia = 1 / Qr, cr = "\\s*([+-]?\\d+)\\s*", eo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sg = /^#([0-9a-f]{3,8})$/, lg = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), ug = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), dg = new RegExp(`^rgba\\(${cr},${cr},${cr},${eo}\\)$`), cg = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${eo}\\)$`), fg = new RegExp(`^hsl\\(${eo},${Jt},${Jt}\\)$`), pg = new RegExp(`^hsla\\(${eo},${Jt},${Jt},${eo}\\)$`), fu = {
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
fl(fo, Gn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pu,
  // Deprecated! Use color.formatHex.
  formatHex: pu,
  formatHex8: hg,
  formatHsl: mg,
  formatRgb: hu,
  toString: hu
});
function pu() {
  return this.rgb().formatHex();
}
function hg() {
  return this.rgb().formatHex8();
}
function mg() {
  return Rf(this).formatHsl();
}
function hu() {
  return this.rgb().formatRgb();
}
function Gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = sg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mu(t) : n === 3 ? new vt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lg.exec(e)) ? new vt(t[1], t[2], t[3], 1) : (t = ug.exec(e)) ? new vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = dg.exec(e)) ? zo(t[1], t[2], t[3], t[4]) : (t = cg.exec(e)) ? zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fg.exec(e)) ? yu(t[1], t[2] / 100, t[3] / 100, 1) : (t = pg.exec(e)) ? yu(t[1], t[2] / 100, t[3] / 100, t[4]) : fu.hasOwnProperty(e) ? mu(fu[e]) : e === "transparent" ? new vt(NaN, NaN, NaN, 0) : null;
}
function mu(e) {
  return new vt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new vt(e, t, n, r);
}
function vg(e) {
  return e instanceof fo || (e = Gn(e)), e ? (e = e.rgb(), new vt(e.r, e.g, e.b, e.opacity)) : new vt();
}
function Rs(e, t, n, r) {
  return arguments.length === 1 ? vg(e) : new vt(e, t, n, r ?? 1);
}
function vt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
fl(vt, Rs, Nf(fo, {
  brighter(e) {
    return e = e == null ? ia : Math.pow(ia, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qr : Math.pow(Qr, e), new vt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new vt(Ln(this.r), Ln(this.g), Ln(this.b), sa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vu,
  // Deprecated! Use color.formatHex.
  formatHex: vu,
  formatHex8: gg,
  formatRgb: gu,
  toString: gu
}));
function vu() {
  return `#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}`;
}
function gg() {
  return `#${Dn(this.r)}${Dn(this.g)}${Dn(this.b)}${Dn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function gu() {
  const e = sa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ln(this.r)}, ${Ln(this.g)}, ${Ln(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function sa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ln(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Dn(e) {
  return e = Ln(e), (e < 16 ? "0" : "") + e.toString(16);
}
function yu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Bt(e, t, n, r);
}
function Rf(e) {
  if (e instanceof Bt)
    return new Bt(e.h, e.s, e.l, e.opacity);
  if (e instanceof fo || (e = Gn(e)), !e)
    return new Bt();
  if (e instanceof Bt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, l = a - o, d = (a + o) / 2;
  return l ? (t === a ? i = (n - r) / l + (n < r) * 6 : n === a ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? a + o : 2 - a - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Bt(i, l, d, e.opacity);
}
function yg(e, t, n, r) {
  return arguments.length === 1 ? Rf(e) : new Bt(e, t, n, r ?? 1);
}
function Bt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
fl(Bt, yg, Nf(fo, {
  brighter(e) {
    return e = e == null ? ia : Math.pow(ia, e), new Bt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qr : Math.pow(Qr, e), new Bt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new vt(
      fi(e >= 240 ? e - 240 : e + 120, o, r),
      fi(e, o, r),
      fi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Bt(bu(this.h), $o(this.s), $o(this.l), sa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = sa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bu(this.h)}, ${$o(this.s) * 100}%, ${$o(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function $o(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const pl = (e) => () => e;
function bg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function xg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function wg(e) {
  return (e = +e) == 1 ? Mf : function(t, n) {
    return n - t ? xg(t, n, e) : pl(isNaN(t) ? n : t);
  };
}
function Mf(e, t) {
  var n = t - e;
  return n ? bg(e, n) : pl(isNaN(e) ? t : e);
}
const la = (function e(t) {
  var n = wg(t);
  function r(o, a) {
    var i = n((o = Rs(o)).r, (a = Rs(a)).r), l = n(o.g, a.g), d = n(o.b, a.b), u = Mf(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = l(c), o.b = d(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function _g(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - a) + t[o] * a;
    return r;
  };
}
function kg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Sg(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), a = new Array(n), i;
  for (i = 0; i < r; ++i)
    o[i] = Ur(e[i], t[i]);
  for (; i < n; ++i)
    a[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i)
      a[i] = o[i](l);
    return a;
  };
}
function Eg(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Xt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function zg(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ur(e[o], t[o]) : r[o] = t[o];
  return function(a) {
    for (o in n)
      r[o] = n[o](a);
    return r;
  };
}
var Ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pi = new RegExp(Ms.source, "g");
function $g(e) {
  return function() {
    return e;
  };
}
function Pg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function If(e, t) {
  var n = Ms.lastIndex = pi.lastIndex = 0, r, o, a, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (r = Ms.exec(e)) && (o = pi.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[i] ? l[i] += a : l[++i] = a), (r = r[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Xt(r, o) })), n = pi.lastIndex;
  return n < t.length && (a = t.slice(n), l[i] ? l[i] += a : l[++i] = a), l.length < 2 ? d[0] ? Pg(d[0].x) : $g(t) : (t = d.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      l[(f = d[c]).i] = f.x(u);
    return l.join("");
  });
}
function Ur(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? pl(t) : (n === "number" ? Xt : n === "string" ? (r = Gn(t)) ? (t = r, la) : If : t instanceof Gn ? la : t instanceof Date ? Eg : kg(t) ? _g : Array.isArray(t) ? Sg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zg : Xt)(e, t);
}
var xu = 180 / Math.PI, Is = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Df(e, t, n, r, o, a) {
  var i, l, d;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (d = e * n + t * r) && (n -= e * d, r -= t * d), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, d /= l), e * r < t * n && (e = -e, t = -t, d = -d, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * xu,
    skewX: Math.atan(d) * xu,
    scaleX: i,
    scaleY: l
  };
}
var Po;
function Cg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Is : Df(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ag(e) {
  return e == null || (Po || (Po = document.createElementNS("http://www.w3.org/2000/svg", "g")), Po.setAttribute("transform", e), !(e = Po.transform.baseVal.consolidate())) ? Is : (e = e.matrix, Df(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ff(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, h, b, p) {
    if (u !== f || c !== h) {
      var v = b.push("translate(", null, t, null, n);
      p.push({ i: v - 4, x: Xt(u, f) }, { i: v - 2, x: Xt(c, h) });
    } else (f || h) && b.push("translate(" + f + t + h + n);
  }
  function i(u, c, f, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Xt(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function l(u, c, f, h) {
    u !== c ? h.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Xt(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function d(u, c, f, h, b, p) {
    if (u !== f || c !== h) {
      var v = b.push(o(b) + "scale(", null, ",", null, ")");
      p.push({ i: v - 4, x: Xt(u, f) }, { i: v - 2, x: Xt(c, h) });
    } else (f !== 1 || h !== 1) && b.push(o(b) + "scale(" + f + "," + h + ")");
  }
  return function(u, c) {
    var f = [], h = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, h), i(u.rotate, c.rotate, f, h), l(u.skewX, c.skewX, f, h), d(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, h), u = c = null, function(b) {
      for (var p = -1, v = h.length, m; ++p < v; )
        f[(m = h[p]).i] = m.x(b);
      return f.join("");
    };
  };
}
var Tg = Ff(Cg, "px, ", "px)", "deg)"), Og = Ff(Ag, ", ", ")", ")"), Ng = 1e-12;
function wu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Rg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Mg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const qo = (function e(t, n, r) {
  function o(a, i) {
    var l = a[0], d = a[1], u = a[2], c = i[0], f = i[1], h = i[2], b = c - l, p = f - d, v = b * b + p * p, m, y;
    if (v < Ng)
      y = Math.log(h / u) / t, m = function(g) {
        return [
          l + g * b,
          d + g * p,
          u * Math.exp(t * g * y)
        ];
      };
    else {
      var $ = Math.sqrt(v), k = (h * h - u * u + r * v) / (2 * u * n * $), T = (h * h - u * u - r * v) / (2 * h * n * $), C = Math.log(Math.sqrt(k * k + 1) - k), _ = Math.log(Math.sqrt(T * T + 1) - T);
      y = (_ - C) / t, m = function(g) {
        var S = g * y, L = wu(C), F = u / (n * $) * (L * Mg(t * S + C) - Rg(C));
        return [
          l + F * b,
          d + F * p,
          u * L / wu(t * S + C)
        ];
      };
    }
    return m.duration = y * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), l = i * i, d = l * l;
    return e(i, l, d);
  }, o;
})(Math.SQRT2, 2, 4);
var hr = 0, Mr = 0, Pr = 0, Bf = 1e3, ua, Ir, da = 0, Wn = 0, Ta = 0, to = typeof performance == "object" && performance.now ? performance : Date, Lf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function hl() {
  return Wn || (Lf(Ig), Wn = to.now() + Ta);
}
function Ig() {
  Wn = 0;
}
function ca() {
  this._call = this._time = this._next = null;
}
ca.prototype = Uf.prototype = {
  constructor: ca,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? hl() : +n) + (t == null ? 0 : +t), !this._next && Ir !== this && (Ir ? Ir._next = this : ua = this, Ir = this), this._call = e, this._time = n, Ds();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ds());
  }
};
function Uf(e, t, n) {
  var r = new ca();
  return r.restart(e, t, n), r;
}
function Dg() {
  hl(), ++hr;
  for (var e = ua, t; e; )
    (t = Wn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --hr;
}
function _u() {
  Wn = (da = to.now()) + Ta, hr = Mr = 0;
  try {
    Dg();
  } finally {
    hr = 0, Bg(), Wn = 0;
  }
}
function Fg() {
  var e = to.now(), t = e - da;
  t > Bf && (Ta -= t, da = e);
}
function Bg() {
  for (var e, t = ua, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ua = n);
  Ir = e, Ds(r);
}
function Ds(e) {
  if (!hr) {
    Mr && (Mr = clearTimeout(Mr));
    var t = e - Wn;
    t > 24 ? (e < 1 / 0 && (Mr = setTimeout(_u, e - to.now() - Ta)), Pr && (Pr = clearInterval(Pr))) : (Pr || (da = to.now(), Pr = setInterval(Fg, Bf)), hr = 1, Lf(_u));
  }
}
function ku(e, t, n) {
  var r = new ca();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Lg = Ca("start", "end", "cancel", "interrupt"), Ug = [], Vf = 0, Su = 1, Fs = 2, jo = 3, Eu = 4, Bs = 5, Ho = 6;
function Oa(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i)
    e.__transition = {};
  else if (n in i)
    return;
  Vg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Lg,
    tween: Ug,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Vf
  });
}
function ml(e, t) {
  var n = Ut(e, t);
  if (n.state > Vf)
    throw new Error("too late; already scheduled");
  return n;
}
function nn(e, t) {
  var n = Ut(e, t);
  if (n.state > jo)
    throw new Error("too late; already running");
  return n;
}
function Ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Vg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Uf(a, 0, n.time);
  function a(u) {
    n.state = Su, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, f, h, b;
    if (n.state !== Su)
      return d();
    for (c in r)
      if (b = r[c], b.name === n.name) {
        if (b.state === jo)
          return ku(i);
        b.state === Eu ? (b.state = Ho, b.timer.stop(), b.on.call("interrupt", e, e.__data__, b.index, b.group), delete r[c]) : +c < t && (b.state = Ho, b.timer.stop(), b.on.call("cancel", e, e.__data__, b.index, b.group), delete r[c]);
      }
    if (ku(function() {
      n.state === jo && (n.state = Eu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Fs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fs) {
      for (n.state = jo, o = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (b = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = b);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(d), n.state = Bs, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(e, c);
    n.state === Bs && (n.on.call("end", e, e.__data__, n.index, n.group), d());
  }
  function d() {
    n.state = Ho, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Go(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Fs && r.state < Bs, r.state = Ho, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function qg(e) {
  return this.each(function() {
    Go(this, e);
  });
}
function jg(e, t) {
  var n, r;
  return function() {
    var o = nn(this, e), a = o.tween;
    if (a !== n) {
      r = n = a;
      for (var i = 0, l = r.length; i < l; ++i)
        if (r[i].name === t) {
          r = r.slice(), r.splice(i, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Hg(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = nn(this, e), i = a.tween;
    if (i !== r) {
      o = (r = i).slice();
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
function Gg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ut(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? jg : Hg)(n, e, t));
}
function vl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = nn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ut(o, r).value[t];
  };
}
function qf(e, t) {
  var n;
  return (typeof t == "number" ? Xt : t instanceof Gn ? la : (n = Gn(t)) ? (t = n, la) : If)(e, t);
}
function Wg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Yg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Kg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Zg(e, t, n) {
  var r, o, a;
  return function() {
    var i, l = n(this), d;
    return l == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), d = l + "", i === d ? null : i === r && d === o ? a : (o = d, a = t(r = i, l)));
  };
}
function Jg(e, t, n) {
  var r, o, a;
  return function() {
    var i, l = n(this), d;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), d = l + "", i === d ? null : i === r && d === o ? a : (o = d, a = t(r = i, l)));
  };
}
function Qg(e, t) {
  var n = Aa(e), r = n === "transform" ? Og : qf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Jg : Zg)(n, r, vl(this, "attr." + e, t)) : t == null ? (n.local ? Yg : Wg)(n) : (n.local ? Kg : Xg)(n, r, t));
}
function ey(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ty(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ny(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && ty(e, a)), n;
  }
  return o._value = t, o;
}
function ry(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && ey(e, a)), n;
  }
  return o._value = t, o;
}
function oy(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Aa(e);
  return this.tween(n, (r.local ? ny : ry)(r, t));
}
function ay(e, t) {
  return function() {
    ml(this, e).delay = +t.apply(this, arguments);
  };
}
function iy(e, t) {
  return t = +t, function() {
    ml(this, e).delay = t;
  };
}
function sy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ay : iy)(t, e)) : Ut(this.node(), t).delay;
}
function ly(e, t) {
  return function() {
    nn(this, e).duration = +t.apply(this, arguments);
  };
}
function uy(e, t) {
  return t = +t, function() {
    nn(this, e).duration = t;
  };
}
function dy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ly : uy)(t, e)) : Ut(this.node(), t).duration;
}
function cy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    nn(this, e).ease = t;
  };
}
function fy(e) {
  var t = this._id;
  return arguments.length ? this.each(cy(t, e)) : Ut(this.node(), t).ease;
}
function py(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    nn(this, e).ease = n;
  };
}
function hy(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(py(this._id, e));
}
function my(e) {
  typeof e != "function" && (e = wf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, l = r[o] = [], d, u = 0; u < i; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new mn(r, this._parents, this._name, this._id);
}
function vy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), l = 0; l < a; ++l)
    for (var d = t[l], u = n[l], c = d.length, f = i[l] = new Array(c), h, b = 0; b < c; ++b)
      (h = d[b] || u[b]) && (f[b] = h);
  for (; l < r; ++l)
    i[l] = t[l];
  return new mn(i, this._parents, this._name, this._id);
}
function gy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function yy(e, t, n) {
  var r, o, a = gy(t) ? ml : nn;
  return function() {
    var i = a(this, e), l = i.on;
    l !== r && (o = (r = l).copy()).on(t, n), i.on = o;
  };
}
function by(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ut(this.node(), n).on.on(e) : this.each(yy(n, e, t));
}
function xy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function wy() {
  return this.on("end.remove", xy(this._id));
}
function _y(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = dl(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var l = r[i], d = l.length, u = a[i] = new Array(d), c, f, h = 0; h < d; ++h)
      (c = l[h]) && (f = e.call(c, c.__data__, h, l)) && ("__data__" in c && (f.__data__ = c.__data__), u[h] = f, Oa(u[h], t, n, h, u, Ut(c, n)));
  return new mn(a, this._parents, t, n);
}
function ky(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = xf(e));
  for (var r = this._groups, o = r.length, a = [], i = [], l = 0; l < o; ++l)
    for (var d = r[l], u = d.length, c, f = 0; f < u; ++f)
      if (c = d[f]) {
        for (var h = e.call(c, c.__data__, f, d), b, p = Ut(c, n), v = 0, m = h.length; v < m; ++v)
          (b = h[v]) && Oa(b, t, n, v, h, p);
        a.push(h), i.push(c);
      }
  return new mn(a, i, t, n);
}
var Sy = co.prototype.constructor;
function Ey() {
  return new Sy(this._groups, this._parents);
}
function zy(e, t) {
  var n, r, o;
  return function() {
    var a = pr(this, e), i = (this.style.removeProperty(e), pr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function jf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function $y(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = pr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Py(e, t, n) {
  var r, o, a;
  return function() {
    var i = pr(this, e), l = n(this), d = l + "";
    return l == null && (d = l = (this.style.removeProperty(e), pr(this, e))), i === d ? null : i === r && d === o ? a : (o = d, a = t(r = i, l));
  };
}
function Cy(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, l;
  return function() {
    var d = nn(this, e), u = d.on, c = d.value[a] == null ? l || (l = jf(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), d.on = r;
  };
}
function Ay(e, t, n) {
  var r = (e += "") == "transform" ? Tg : qf;
  return t == null ? this.styleTween(e, zy(e, r)).on("end.style." + e, jf(e)) : typeof t == "function" ? this.styleTween(e, Py(e, r, vl(this, "style." + e, t))).each(Cy(this._id, e)) : this.styleTween(e, $y(e, r, t), n).on("end.style." + e, null);
}
function Ty(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Oy(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && Ty(e, i, n)), r;
  }
  return a._value = t, a;
}
function Ny(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Oy(e, t, n ?? ""));
}
function Ry(e) {
  return function() {
    this.textContent = e;
  };
}
function My(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Iy(e) {
  return this.tween("text", typeof e == "function" ? My(vl(this, "text", e)) : Ry(e == null ? "" : e + ""));
}
function Dy(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Fy(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Dy(o)), t;
  }
  return r._value = e, r;
}
function By(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Fy(e));
}
function Ly() {
  for (var e = this._name, t = this._id, n = Hf(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], l = i.length, d, u = 0; u < l; ++u)
      if (d = i[u]) {
        var c = Ut(d, t);
        Oa(d, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new mn(r, this._parents, e, n);
}
function Uy() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var l = { value: i }, d = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = nn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(d)), u.on = t;
    }), o === 0 && a();
  });
}
var Vy = 0;
function mn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Hf() {
  return ++Vy;
}
var on = co.prototype;
mn.prototype = {
  constructor: mn,
  select: _y,
  selectAll: ky,
  selectChild: on.selectChild,
  selectChildren: on.selectChildren,
  filter: my,
  merge: vy,
  selection: Ey,
  transition: Ly,
  call: on.call,
  nodes: on.nodes,
  node: on.node,
  size: on.size,
  empty: on.empty,
  each: on.each,
  on: by,
  attr: Qg,
  attrTween: oy,
  style: Ay,
  styleTween: Ny,
  text: Iy,
  textTween: By,
  remove: wy,
  tween: Gg,
  delay: sy,
  duration: dy,
  ease: fy,
  easeVarying: hy,
  end: Uy,
  [Symbol.iterator]: on[Symbol.iterator]
};
function qy(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var jy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: qy
};
function Hy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Gy(e) {
  var t, n;
  e instanceof mn ? (t = e._id, e = e._name) : (t = Hf(), (n = jy).time = hl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], l = i.length, d, u = 0; u < l; ++u)
      (d = i[u]) && Oa(d, e, t, u, i, n || Hy(d, t));
  return new mn(r, this._parents, e, t);
}
co.prototype.interrupt = qg;
co.prototype.transition = Gy;
const Co = (e) => () => e;
function Wy(e, {
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
function dn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
dn.prototype = {
  constructor: dn,
  scale: function(e) {
    return e === 1 ? this : new dn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new dn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var mr = new dn(1, 0, 0);
dn.prototype;
function hi(e) {
  e.stopImmediatePropagation();
}
function Cr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Yy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Xy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function zu() {
  return this.__zoom || mr;
}
function Ky(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Zy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Jy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function Qy() {
  var e = Yy, t = Xy, n = Jy, r = Ky, o = Zy, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, d = qo, u = Ca("start", "zoom", "end"), c, f, h, b = 500, p = 150, v = 0, m = 10;
  function y(A) {
    A.property("__zoom", zu).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", F).filter(o).on("touchstart.zoom", O).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", U).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(A, j, x, I) {
    var R = A.selection ? A.selection() : A;
    R.property("__zoom", zu), A !== R ? C(A, j, x, I) : R.interrupt().each(function() {
      _(this, arguments).event(I).start().zoom(null, typeof j == "function" ? j.apply(this, arguments) : j).end();
    });
  }, y.scaleBy = function(A, j, x, I) {
    y.scaleTo(A, function() {
      var R = this.__zoom.k, Q = typeof j == "function" ? j.apply(this, arguments) : j;
      return R * Q;
    }, x, I);
  }, y.scaleTo = function(A, j, x, I) {
    y.transform(A, function() {
      var R = t.apply(this, arguments), Q = this.__zoom, te = x == null ? T(R) : typeof x == "function" ? x.apply(this, arguments) : x, se = Q.invert(te), he = typeof j == "function" ? j.apply(this, arguments) : j;
      return n(k($(Q, he), te, se), R, i);
    }, x, I);
  }, y.translateBy = function(A, j, x, I) {
    y.transform(A, function() {
      return n(this.__zoom.translate(
        typeof j == "function" ? j.apply(this, arguments) : j,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), i);
    }, null, I);
  }, y.translateTo = function(A, j, x, I, R) {
    y.transform(A, function() {
      var Q = t.apply(this, arguments), te = this.__zoom, se = I == null ? T(Q) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(mr.translate(se[0], se[1]).scale(te.k).translate(
        typeof j == "function" ? -j.apply(this, arguments) : -j,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), Q, i);
    }, I, R);
  };
  function $(A, j) {
    return j = Math.max(a[0], Math.min(a[1], j)), j === A.k ? A : new dn(j, A.x, A.y);
  }
  function k(A, j, x) {
    var I = j[0] - x[0] * A.k, R = j[1] - x[1] * A.k;
    return I === A.x && R === A.y ? A : new dn(A.k, I, R);
  }
  function T(A) {
    return [(+A[0][0] + +A[1][0]) / 2, (+A[0][1] + +A[1][1]) / 2];
  }
  function C(A, j, x, I) {
    A.on("start.zoom", function() {
      _(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var R = this, Q = arguments, te = _(R, Q).event(I), se = t.apply(R, Q), he = x == null ? T(se) : typeof x == "function" ? x.apply(R, Q) : x, ze = Math.max(se[1][0] - se[0][0], se[1][1] - se[0][1]), xe = R.__zoom, ce = typeof j == "function" ? j.apply(R, Q) : j, fe = d(xe.invert(he).concat(ze / xe.k), ce.invert(he).concat(ze / ce.k));
      return function(we) {
        if (we === 1)
          we = ce;
        else {
          var $e = fe(we), Ce = ze / $e[2];
          we = new dn(Ce, he[0] - $e[0] * Ce, he[1] - $e[1] * Ce);
        }
        te.zoom(null, we);
      };
    });
  }
  function _(A, j, x) {
    return !x && A.__zooming || new g(A, j);
  }
  function g(A, j) {
    this.that = A, this.args = j, this.active = 0, this.sourceEvent = null, this.extent = t.apply(A, j), this.taps = 0;
  }
  g.prototype = {
    event: function(A) {
      return A && (this.sourceEvent = A), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(A, j) {
      return this.mouse && A !== "mouse" && (this.mouse[1] = j.invert(this.mouse[0])), this.touch0 && A !== "touch" && (this.touch0[1] = j.invert(this.touch0[0])), this.touch1 && A !== "touch" && (this.touch1[1] = j.invert(this.touch1[0])), this.that.__zoom = j, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(A) {
      var j = Ft(this.that).datum();
      u.call(
        A,
        this.that,
        new Wy(A, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: u
        }),
        j
      );
    }
  };
  function S(A, ...j) {
    if (!e.apply(this, arguments))
      return;
    var x = _(this, j).event(A), I = this.__zoom, R = Math.max(a[0], Math.min(a[1], I.k * Math.pow(2, r.apply(this, arguments)))), Q = Wt(A);
    if (x.wheel)
      (x.mouse[0][0] !== Q[0] || x.mouse[0][1] !== Q[1]) && (x.mouse[1] = I.invert(x.mouse[0] = Q)), clearTimeout(x.wheel);
    else {
      if (I.k === R)
        return;
      x.mouse = [Q, I.invert(Q)], Go(this), x.start();
    }
    Cr(A), x.wheel = setTimeout(te, p), x.zoom("mouse", n(k($(I, R), x.mouse[0], x.mouse[1]), x.extent, i));
    function te() {
      x.wheel = null, x.end();
    }
  }
  function L(A, ...j) {
    if (h || !e.apply(this, arguments))
      return;
    var x = A.currentTarget, I = _(this, j, !0).event(A), R = Ft(A.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", ze, !0), Q = Wt(A, x), te = A.clientX, se = A.clientY;
    Tf(A.view), hi(A), I.mouse = [Q, this.__zoom.invert(Q)], Go(this), I.start();
    function he(xe) {
      if (Cr(xe), !I.moved) {
        var ce = xe.clientX - te, fe = xe.clientY - se;
        I.moved = ce * ce + fe * fe > v;
      }
      I.event(xe).zoom("mouse", n(k(I.that.__zoom, I.mouse[0] = Wt(xe, x), I.mouse[1]), I.extent, i));
    }
    function ze(xe) {
      R.on("mousemove.zoom mouseup.zoom", null), Of(xe.view, I.moved), Cr(xe), I.event(xe).end();
    }
  }
  function F(A, ...j) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, I = Wt(A.changedTouches ? A.changedTouches[0] : A, this), R = x.invert(I), Q = x.k * (A.shiftKey ? 0.5 : 2), te = n(k($(x, Q), I, R), t.apply(this, j), i);
      Cr(A), l > 0 ? Ft(this).transition().duration(l).call(C, te, I, A) : Ft(this).call(y.transform, te, I, A);
    }
  }
  function O(A, ...j) {
    if (e.apply(this, arguments)) {
      var x = A.touches, I = x.length, R = _(this, j, A.changedTouches.length === I).event(A), Q, te, se, he;
      for (hi(A), te = 0; te < I; ++te)
        se = x[te], he = Wt(se, this), he = [he, this.__zoom.invert(he), se.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== he[2] && (R.touch1 = he, R.taps = 0) : (R.touch0 = he, Q = !0, R.taps = 1 + !!c);
      c && (c = clearTimeout(c)), Q && (R.taps < 2 && (f = he[0], c = setTimeout(function() {
        c = null;
      }, b)), Go(this), R.start());
    }
  }
  function E(A, ...j) {
    if (this.__zooming) {
      var x = _(this, j).event(A), I = A.changedTouches, R = I.length, Q, te, se, he;
      for (Cr(A), Q = 0; Q < R; ++Q)
        te = I[Q], se = Wt(te, this), x.touch0 && x.touch0[2] === te.identifier ? x.touch0[0] = se : x.touch1 && x.touch1[2] === te.identifier && (x.touch1[0] = se);
      if (te = x.that.__zoom, x.touch1) {
        var ze = x.touch0[0], xe = x.touch0[1], ce = x.touch1[0], fe = x.touch1[1], we = (we = ce[0] - ze[0]) * we + (we = ce[1] - ze[1]) * we, $e = ($e = fe[0] - xe[0]) * $e + ($e = fe[1] - xe[1]) * $e;
        te = $(te, Math.sqrt(we / $e)), se = [(ze[0] + ce[0]) / 2, (ze[1] + ce[1]) / 2], he = [(xe[0] + fe[0]) / 2, (xe[1] + fe[1]) / 2];
      } else if (x.touch0)
        se = x.touch0[0], he = x.touch0[1];
      else
        return;
      x.zoom("touch", n(k(te, se, he), x.extent, i));
    }
  }
  function U(A, ...j) {
    if (this.__zooming) {
      var x = _(this, j).event(A), I = A.changedTouches, R = I.length, Q, te;
      for (hi(A), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, b), Q = 0; Q < R; ++Q)
        te = I[Q], x.touch0 && x.touch0[2] === te.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === te.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0)
        x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (te = Wt(te, this), Math.hypot(f[0] - te[0], f[1] - te[1]) < m)) {
        var se = Ft(this).on("dblclick.zoom");
        se && se.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(A) {
    return arguments.length ? (r = typeof A == "function" ? A : Co(+A), y) : r;
  }, y.filter = function(A) {
    return arguments.length ? (e = typeof A == "function" ? A : Co(!!A), y) : e;
  }, y.touchable = function(A) {
    return arguments.length ? (o = typeof A == "function" ? A : Co(!!A), y) : o;
  }, y.extent = function(A) {
    return arguments.length ? (t = typeof A == "function" ? A : Co([[+A[0][0], +A[0][1]], [+A[1][0], +A[1][1]]]), y) : t;
  }, y.scaleExtent = function(A) {
    return arguments.length ? (a[0] = +A[0], a[1] = +A[1], y) : [a[0], a[1]];
  }, y.translateExtent = function(A) {
    return arguments.length ? (i[0][0] = +A[0][0], i[1][0] = +A[1][0], i[0][1] = +A[0][1], i[1][1] = +A[1][1], y) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, y.constrain = function(A) {
    return arguments.length ? (n = A, y) : n;
  }, y.duration = function(A) {
    return arguments.length ? (l = +A, y) : l;
  }, y.interpolate = function(A) {
    return arguments.length ? (d = A, y) : d;
  }, y.on = function() {
    var A = u.on.apply(u, arguments);
    return A === u ? y : A;
  }, y.clickDistance = function(A) {
    return arguments.length ? (v = (A = +A) * A, y) : Math.sqrt(v);
  }, y.tapDistance = function(A) {
    return arguments.length ? (m = +A, y) : m;
  }, y;
}
var me = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(me || {}), gl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(gl || {}), Mn = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(Mn || {}), Pn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(Pn || {}), fa = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(fa || {}), Vr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Vr || {}), Gf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Gf || {});
const eb = ["INPUT", "SELECT", "TEXTAREA"], tb = typeof document < "u" ? document : null;
function Ls(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return eb.includes(r?.nodeName) || o || !!a;
}
function nb(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function $u(e, t, n, r) {
  const o = t.replace("+", `
`).replace(`

`, `
+`).split(`
`).map((i) => i.trim().toLowerCase());
  if (o.length === 1)
    return e.toLowerCase() === t.toLowerCase();
  r || n.add(e.toLowerCase());
  const a = o.every(
    (i, l) => n.has(i) && Array.from(n.values())[l] === o[l]
  );
  return r && n.delete(e.toLowerCase()), a;
}
function rb(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = ob(n.code, e);
    return Array.isArray(e) ? e.some((o) => $u(n[r], o, t, n.type === "keyup")) : $u(n[r], e, t, n.type === "keyup");
  };
}
function ob(e, t) {
  return t.includes(e) ? "code" : "key";
}
function qr(e, t) {
  const n = ne(() => Le(t?.target) ?? tb), r = un(Le(e) === !0);
  let o = !1;
  const a = /* @__PURE__ */ new Set();
  let i = d(Le(e));
  Fe(
    () => Le(e),
    (u, c) => {
      typeof c == "boolean" && typeof u != "boolean" && l(), i = d(u);
    },
    {
      immediate: !0
    }
  ), yf(["blur", "contextmenu"], l), uu(
    (...u) => i(...u),
    (u) => {
      var c, f;
      const h = Le(t?.actInsideInputWithModifier) ?? !0, b = Le(t?.preventDefault) ?? !1;
      if (o = nb(u), (!o || o && !h) && Ls(u))
        return;
      const v = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target, m = v?.nodeName === "BUTTON" || v?.nodeName === "A";
      !b && (o || !m) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), uu(
    (...u) => i(...u),
    (u) => {
      const c = Le(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !c) && Ls(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function l() {
    o = !1, a.clear(), r.value = Le(e) === !0;
  }
  function d(u) {
    return u === null ? (l(), () => !1) : typeof u == "boolean" ? (l(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? rb(u, a) : u;
  }
  return r;
}
const Wf = "vue-flow__node-desc", Yf = "vue-flow__edge-desc", ab = "vue-flow__aria-live", Xf = ["Enter", " ", "Escape"], fr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function pa(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function ha(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function Na(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Yn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Kf(e, t) {
  return {
    x: Yn(e.x, t[0][0], t[1][0]),
    y: Yn(e.y, t[0][1], t[1][1])
  };
}
function Pu(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function Cn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Un(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !Cn(e);
}
function Dr(e) {
  return Un(e) && "computedPosition" in e;
}
function Ao(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ib(e) {
  return Ao(e.width) && Ao(e.height) && Ao(e.x) && Ao(e.y);
}
function sb(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: ur({
      width: 0,
      height: 0
    }),
    computedPosition: ur({
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
    events: ur(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function Zf(e, t, n) {
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
    events: ur(et(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? a, e, { id: e.id.toString() });
}
function Jf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, a = /* @__PURE__ */ new Set(), i = r === "source" ? "target" : "source";
  for (const l of n)
    l[i] === o && a.add(l[r]);
  return t.filter((l) => a.has(l.id));
}
function lb(...e) {
  if (e.length === 3) {
    const [a, i, l] = e;
    return Jf(a, i, l, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Cn(a) && a.source === r).map((a) => n.find((i) => Un(i) && i.id === a.target));
}
function ub(...e) {
  if (e.length === 3) {
    const [a, i, l] = e;
    return Jf(a, i, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Cn(a) && a.target === r).map((a) => n.find((i) => Un(i) && i.id === a.source));
}
function Qf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function db(e, t) {
  return t.some(
    (n) => Cn(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function no({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function ro({ x: e, y: t }, { x: n, y: r, zoom: o }, a = !1, i = [1, 1]) {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? Ra(l, i) : l;
}
function cb(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function ep({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function fb({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function tp(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = cb(
      t,
      ep({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return fb(t);
}
function np(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const a = {
    ...ro(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, i = [];
  for (const l of e) {
    const { dimensions: d, selectable: u = !0, hidden: c = !1 } = l, f = d.width ?? l.width ?? null, h = d.height ?? l.height ?? null;
    if (o && !u || c)
      continue;
    const b = ha(a, pa(l)), p = f === null || h === null, v = r && b > 0, m = (f ?? 0) * (h ?? 0);
    (p || v || b >= m || l.dragging) && i.push(l);
  }
  return i;
}
function rp(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const r of e)
      n.add(r.id);
  return t.filter((r) => n.has(r.source) || n.has(r.target));
}
function ar(e, t) {
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
  return po(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function pb(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = ar(e, n), o = ar(e, t);
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
    const r = ar(e.top ?? e.y ?? 0, n), o = ar(e.bottom ?? e.y ?? 0, n), a = ar(e.left ?? e.x ?? 0, t), i = ar(e.right ?? e.x ?? 0, t);
    return { top: r, right: i, bottom: o, left: a, x: a + i, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function hb(e, t, n, r, o, a) {
  const { x: i, y: l } = no(e, { x: t, y: n, zoom: r }), { x: d, y: u } = no(
    { x: e.x + e.width, y: e.y + e.height },
    {
      x: t,
      y: n,
      zoom: r
    }
  ), c = o - d, f = a - u;
  return {
    left: Math.floor(i),
    top: Math.floor(l),
    right: Math.floor(c),
    bottom: Math.floor(f)
  };
}
function Cu(e, t, n, r, o, a = 0.1) {
  const i = pb(a, t, n), l = (t - i.x) / e.width, d = (n - i.y) / e.height, u = Math.min(l, d), c = Yn(u, r, o), f = e.x + e.width / 2, h = e.y + e.height / 2, b = t / 2 - f * c, p = n / 2 - h * c, v = hb(e, b, p, c, t, n), m = {
    left: Math.min(v.left - i.left, 0),
    top: Math.min(v.top - i.top, 0),
    right: Math.min(v.right - i.right, 0),
    bottom: Math.min(v.bottom - i.bottom, 0)
  };
  return {
    x: b - m.left + m.right,
    y: p - m.top + m.bottom,
    zoom: c
  };
}
function mb(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function op(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : op(n, t) : !1;
}
function oo(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function Au(e) {
  const t = e.ctrlKey && ma() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function Tu(e, t, n) {
  return e < t ? Yn(Math.abs(e - t), 1, t) / t : e > n ? -Yn(Math.abs(e - n), 1, t) / t : 0;
}
function ap(e, t, n = 15, r = 40) {
  const o = Tu(e.x, r, t.width - r) * n, a = Tu(e.y, r, t.height - r) * n;
  return [o, a];
}
function mi(e, t) {
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
          const i = Number(o.width.replace("px", ""));
          o.width = `${i + a}px`;
        } else
          o.width += a;
        e.position.x = 0;
      }
      if (e.position.y < 0) {
        const a = Math.abs(e.position.y);
        if (t.position.y = t.position.y - a, typeof o.height == "string") {
          const i = Number(o.height.replace("px", ""));
          o.height = `${i + a}px`;
        } else
          o.height += a;
        e.position.y = 0;
      }
      t.dimensions.width = Number(o.width.toString().replace("px", "")), t.dimensions.height = Number(o.height.toString().replace("px", "")), typeof t.style == "function" ? t.style = (a) => {
        const i = t.style;
        return {
          ...i(a),
          ...o
        };
      } : t.style = {
        ...t.style,
        ...o
      };
    }
  }
}
function Ou(e, t) {
  var n, r;
  const o = e.filter((i) => i.type === "add" || i.type === "remove");
  for (const i of o)
    if (i.type === "add")
      t.findIndex((d) => d.id === i.item.id) === -1 && t.push(i.item);
    else if (i.type === "remove") {
      const l = t.findIndex((d) => d.id === i.id);
      l !== -1 && t.splice(l, 1);
    }
  const a = t.map((i) => i.id);
  for (const i of t)
    for (const l of e)
      if (l.id === i.id)
        switch (l.type) {
          case "select":
            i.selected = l.selected;
            break;
          case "position":
            if (Dr(i) && (typeof l.position < "u" && (i.position = l.position), typeof l.dragging < "u" && (i.dragging = l.dragging), i.expandParent && i.parentNode)) {
              const d = t[a.indexOf(i.parentNode)];
              d && Dr(d) && mi(i, d);
            }
            break;
          case "dimensions":
            if (Dr(i) && (typeof l.dimensions < "u" && (i.dimensions = l.dimensions), typeof l.updateStyle < "u" && l.updateStyle && (i.style = {
              ...i.style || {},
              width: `${(n = l.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = l.dimensions) == null ? void 0 : r.height}px`
            }), typeof l.resizing < "u" && (i.resizing = l.resizing), i.expandParent && i.parentNode)) {
              const d = t[a.indexOf(i.parentNode)];
              d && Dr(d) && (!!d.dimensions.width && !!d.dimensions.height ? mi(i, d) : fn(() => {
                mi(i, d);
              }));
            }
            break;
        }
  return t;
}
function wn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Nu(e) {
  return {
    item: e,
    type: "add"
  };
}
function Ru(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Mu(e, t, n, r, o) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: r || null,
    targetHandle: o || null,
    type: "remove"
  };
}
function _n(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, a] of e) {
    const i = t.has(o);
    !(a.selected === void 0 && !i) && a.selected !== i && (n && (a.selected = i), r.push(wn(a.id, i)));
  }
  return r;
}
const Iu = () => {
};
function ye(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Iu, r = () => !1;
  const o = () => t.size > 0 || r(), a = (h) => {
    n = h;
  }, i = () => {
    n = Iu;
  }, l = (h) => {
    r = h;
  }, d = () => {
    r = () => !1;
  }, u = (h) => {
    t.delete(h);
  };
  return {
    on: (h) => {
      t.add(h);
      const b = () => u(h);
      return Zr(b), { off: b };
    },
    off: u,
    trigger: (h) => {
      const b = [n];
      return o() ? b.push(...t) : e && b.push(e), Promise.allSettled(b.map((p) => p(h)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: a,
    removeEmitter: i,
    setHasEmitListeners: l,
    removeHasEmitListeners: d
  };
}
function Du(e, t, n) {
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
function vb(e, t, n, r) {
  var o, a;
  const i = /* @__PURE__ */ new Map();
  for (const [l, d] of e)
    (d.selected || d.id === r) && (!d.parentNode || !op(d, e)) && (d.draggable || t && typeof d.draggable > "u") && e.get(l) && i.set(l, {
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
  return Array.from(i.values());
}
function vi({
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
function ip(e) {
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
function gb(e, t, n) {
  const [r, o, a, i] = typeof e != "string" ? ip(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + i, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - a
    ]
  ] : !1;
}
function yb(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const a = gb(o, e, r);
      a && (o = a);
    } else
      t(new at(nt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const a = r?.computedPosition.x || 0, i = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + a, o[0][1] + i],
      [o[1][0] + a, o[1][1] + i]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [a, i, l, d] = ip(o.padding), u = r?.computedPosition.x || 0, c = r?.computedPosition.y || 0;
    o = [
      [o.range[0][0] + u + d, o.range[0][1] + c + a],
      [o.range[1][0] + u - i, o.range[1][1] + c - l]
    ];
  }
  return o === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : o;
}
function bb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function yl(e, t, n, r, o) {
  const a = bb(e.dimensions, yb(e, n, r, o)), i = Kf(t, a);
  return {
    position: {
      x: i.x - (o?.computedPosition.x || 0),
      y: i.y - (o?.computedPosition.y || 0)
    },
    computedPosition: i
  };
}
function vr(e, t, n = me.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, a = (t?.y ?? 0) + e.computedPosition.y, { width: i, height: l } = t ?? kb(e);
  if (r)
    return { x: o + i / 2, y: a + l / 2 };
  switch (t?.position ?? n) {
    case me.Top:
      return { x: o + i / 2, y: a };
    case me.Right:
      return { x: o + i, y: a + l / 2 };
    case me.Bottom:
      return { x: o + i / 2, y: a + l };
    case me.Left:
      return { x: o, y: a + l / 2 };
  }
}
function Fu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function xb({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: r,
  targetWidth: o,
  targetHeight: a,
  width: i,
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
  const c = ep({
    x: (0 - d.x) / d.zoom,
    y: (0 - d.y) / d.zoom,
    width: i / d.zoom,
    height: l / d.zoom
  }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), h = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(f * h) > 0;
}
function wb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const a = t(e.source), i = t(e.target);
  return !a || !i ? 0 : (n && (o = r ? e.zIndex : Math.max(a.computedPosition.z || 0, i.computedPosition.z || 0)), o);
}
var nt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(nt || {});
const Bu = {
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
    super((r = Bu[t]) == null ? void 0 : r.call(Bu, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function bl(e) {
  return "clientX" in e;
}
function _b(e) {
  return "sourceEvent" in e;
}
function Kt(e, t) {
  const n = bl(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const ma = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function kb(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function Ra(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const Sb = () => !0;
function gi(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function Eb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    ha(o, pa(a)) > 0 && r.push(a);
  return r;
}
const zb = 250;
function $b(e, t, n, r) {
  var o, a;
  let i = [], l = Number.POSITIVE_INFINITY;
  const d = Eb(e, n, t + zb);
  for (const u of d) {
    const c = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: h, y: b } = vr(u, f, f.position, !0), p = Math.sqrt((h - e.x) ** 2 + (b - e.y) ** 2);
      p > t || (p < l ? (i = [{ ...f, x: h, y: b }], l = p) : p === l && i.push({ ...f, x: h, y: b }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((c) => c.type === u) ?? i[0];
  }
  return i[0];
}
function Lu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: a,
  doc: i,
  lib: l,
  flowId: d,
  isValidConnection: u = Sb
}, c, f, h, b) {
  const p = a === "target", v = t ? i.querySelector(`.${l}-flow__handle[data-id="${d}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: m, y } = Kt(e), $ = i.elementFromPoint(m, y), k = $?.classList.contains(`${l}-flow__handle`) ? $ : v, T = {
    handleDomNode: k,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (k) {
    const C = sp(void 0, k), _ = k.getAttribute("data-nodeid"), g = k.getAttribute("data-handleid"), S = k.classList.contains("connectable"), L = k.classList.contains("connectableend");
    if (!_ || !C)
      return T;
    const F = {
      source: p ? _ : r,
      sourceHandle: p ? g : o,
      target: p ? r : _,
      targetHandle: p ? o : g
    };
    T.connection = F;
    const E = S && L && (n === Pn.Strict ? p && C === "source" || !p && C === "target" : _ !== r || g !== o);
    T.isValid = E && u(F, {
      nodes: f,
      edges: c,
      sourceNode: h(F.source),
      targetNode: h(F.target)
    }), T.toHandle = lp(_, C, g, b, n, !0);
  }
  return T;
}
function sp(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Pb(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function Cb(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function lp(e, t, n, r, o, a = !1) {
  var i, l, d;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === Pn.Strict ? (i = u.handleBounds) == null ? void 0 : i[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((d = u.handleBounds) == null ? void 0 : d.target) ?? []], f = (n ? c?.find((h) => h.id === n) : c?.[0]) ?? null;
  return f && a ? { ...f, ...vr(u, f, f.position, !0) } : f;
}
const Us = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
}, Ab = ["production", "prod"];
function po(e, ...t) {
  up() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function up() {
  return !Ab.includes(process.env.NODE_ENV || "");
}
function Uu(e, t, n, r, o) {
  const a = t.querySelectorAll(`.vue-flow__handle.${e}`);
  return a?.length ? Array.from(a).map((i) => {
    const l = i.getBoundingClientRect();
    return {
      id: i.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: i.getAttribute("data-handlepos"),
      x: (l.left - n.left) / r,
      y: (l.top - n.top) / r,
      ...Na(i)
    };
  }) : null;
}
function Vs(e, t, n, r, o, a = !1, i) {
  o.value = !1, e.selected ? (a || e.selected && t) && (r([e]), fn(() => {
    i.blur();
  })) : n([e]);
}
function et(e) {
  return typeof N(e) < "u";
}
function Tb(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new at(nt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return Cn(e) ? o = e : o = {
    ...e,
    id: Qf(e)
  }, o = Zf(o, void 0, r), db(o, t) ? !1 : o;
}
function Ob(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new at(nt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new at(nt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...i } = e;
  return {
    ...i,
    id: r ? Qf(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Vu(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const i = e[a];
    if (!Un(i)) {
      n(
        new at(nt.NODE_INVALID, i?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = sb(i, t(i.id), i.parentNode);
    i.parentNode && (r[i.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const i = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !i && n(new at(nt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), i && (i.isParent = !0));
  }
  return o;
}
function qu(e, t, n, r, o, a) {
  let i = o;
  const l = r.get(i) || /* @__PURE__ */ new Map();
  r.set(i, l.set(n, t)), i = `${o}-${e}`;
  const d = r.get(i) || /* @__PURE__ */ new Map();
  if (r.set(i, d.set(n, t)), a) {
    i = `${o}-${e}-${a}`;
    const u = r.get(i) || /* @__PURE__ */ new Map();
    r.set(i, u.set(n, t));
  }
}
function yi(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: l = null } = r, d = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: l }, u = `${o}-${i}--${a}-${l}`, c = `${a}-${l}--${o}-${i}`;
    qu("source", d, c, e, o, i), qu("target", d, u, e, a, l);
  }
}
function ju(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function bi(e, t, n, r, o, a, i, l) {
  const d = [];
  for (const u of e) {
    const c = Cn(u) ? u : Tb(u, l, o, a);
    if (!c)
      continue;
    const f = n(c.source), h = n(c.target);
    if (!f || !h) {
      o(new at(nt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new at(nt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!h) {
      o(new at(nt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: l,
      nodes: i,
      sourceNode: f,
      targetNode: h
    })) {
      o(new at(nt.EDGE_INVALID, c.id));
      continue;
    }
    const b = r(c.id);
    d.push({
      ...Zf(c, b, a),
      sourceNode: f,
      targetNode: h
    });
  }
  return d;
}
const Hu = /* @__PURE__ */ Symbol("vueFlow"), dp = /* @__PURE__ */ Symbol("nodeId"), cp = /* @__PURE__ */ Symbol("nodeRef"), Nb = /* @__PURE__ */ Symbol("edgeId"), Rb = /* @__PURE__ */ Symbol("edgeRef"), Ma = /* @__PURE__ */ Symbol("slots");
function fp(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: r,
    noDragClassName: o,
    nodeLookup: a,
    nodeExtent: i,
    nodeDragThreshold: l,
    viewport: d,
    autoPanOnNodeDrag: u,
    autoPanSpeed: c,
    nodesDraggable: f,
    panBy: h,
    findNode: b,
    multiSelectionActive: p,
    nodesSelectionActive: v,
    selectNodesOnDrag: m,
    removeSelectedElements: y,
    addSelectedNodes: $,
    updateNodePositions: k,
    emits: T
  } = Ge(), { onStart: C, onDrag: _, onStop: g, onClick: S, el: L, disabled: F, id: O, selectable: E, dragHandle: U } = e, A = un(!1);
  let j = [], x, I = null, R = { x: void 0, y: void 0 }, Q = { x: 0, y: 0 }, te = null, se = !1, he = !1, ze = 0, xe = !1;
  const ce = Db(), fe = ({ x: ae, y: be }) => {
    R = { x: ae, y: be };
    let D = !1;
    if (j = j.map((M) => {
      const B = { x: ae - M.distance.x, y: be - M.distance.y }, { computedPosition: V } = yl(
        M,
        n.value ? Ra(B, r.value) : B,
        T.error,
        i.value,
        M.parentNode ? b(M.parentNode) : void 0
      );
      return D = D || M.position.x !== V.x || M.position.y !== V.y, M.position = V, M;
    }), he = he || D, !!D && (k(j, !0, !0), A.value = !0, te)) {
      const [M, B] = vi({
        id: O,
        dragItems: j,
        findNode: b
      });
      _({ event: te, node: M, nodes: B });
    }
  }, we = () => {
    if (!I)
      return;
    const [ae, be] = ap(Q, I, c.value);
    if (ae !== 0 || be !== 0) {
      const D = {
        x: (R.x ?? 0) - ae / d.value.zoom,
        y: (R.y ?? 0) - be / d.value.zoom
      };
      h({ x: ae, y: be }) && fe(D);
    }
    ze = requestAnimationFrame(we);
  }, $e = (ae, be) => {
    se = !0;
    const D = b(O);
    !m.value && !p.value && D && (D.selected || y()), D && Le(E) && m.value && Vs(
      D,
      p.value,
      $,
      y,
      v,
      !1,
      be
    );
    const M = ce(ae.sourceEvent);
    if (R = M, j = vb(a.value, f.value, M, O), j.length) {
      const [B, V] = vi({
        id: O,
        dragItems: j,
        findNode: b
      });
      C({ event: ae.sourceEvent, node: B, nodes: V });
    }
  }, Ce = (ae, be) => {
    var D;
    ae.sourceEvent.type === "touchmove" && ae.sourceEvent.touches.length > 1 || (he = !1, l.value === 0 && $e(ae, be), R = ce(ae.sourceEvent), I = ((D = t.value) == null ? void 0 : D.getBoundingClientRect()) || null, Q = Kt(ae.sourceEvent, I));
  }, pe = (ae, be) => {
    const D = ce(ae.sourceEvent);
    if (!xe && se && u.value && (xe = !0, we()), !se) {
      const M = D.xSnapped - (R.x ?? 0), B = D.ySnapped - (R.y ?? 0);
      Math.sqrt(M * M + B * B) > l.value && $e(ae, be);
    }
    (R.x !== D.xSnapped || R.y !== D.ySnapped) && j.length && se && (te = ae.sourceEvent, Q = Kt(ae.sourceEvent, I), fe(D));
  }, Pe = (ae) => {
    let be = !1;
    if (!se && !A.value && !p.value) {
      const D = ae.sourceEvent, M = ce(D), B = M.xSnapped - (R.x ?? 0), V = M.ySnapped - (R.y ?? 0), H = Math.sqrt(B * B + V * V);
      H !== 0 && H <= l.value && (S?.(D), be = !0);
    }
    if (j.length && !be) {
      he && (k(j, !1, !1), he = !1);
      const [D, M] = vi({
        id: O,
        dragItems: j,
        findNode: b
      });
      g({ event: ae.sourceEvent, node: D, nodes: M });
    }
    j = [], A.value = !1, xe = !1, se = !1, R = { x: void 0, y: void 0 }, cancelAnimationFrame(ze);
  };
  return Fe([() => Le(F), L], ([ae, be], D, M) => {
    if (be) {
      const B = Ft(be);
      ae || (x = ig().on("start", (V) => Ce(V, be)).on("drag", (V) => pe(V, be)).on("end", (V) => Pe(V)).filter((V) => {
        const H = V.target, ue = Le(U);
        return !V.button && (!o.value || !Du(H, `.${o.value}`, be) && (!ue || Du(H, ue, be)));
      }), B.call(x)), M(() => {
        B.on(".drag", null), x && (x.on("start", null), x.on("drag", null), x.on("end", null));
      });
    }
  }), A;
}
function Mb() {
  return {
    doubleClick: ye(),
    click: ye(),
    mouseEnter: ye(),
    mouseMove: ye(),
    mouseLeave: ye(),
    contextMenu: ye(),
    updateStart: ye(),
    update: ye(),
    updateEnd: ye()
  };
}
function Ib(e, t) {
  const n = Mb();
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
function Db() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = Ge();
  return (o) => {
    var a;
    const i = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = _b(o) ? o.sourceEvent : o, { x: d, y: u } = Kt(l, i), c = ro({ x: d, y: u }, e.value), { x: f, y: h } = n.value ? Ra(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: h,
      ...c
    };
  };
}
function To() {
  return !0;
}
function pp({
  handleId: e,
  nodeId: t,
  type: n,
  isValidConnection: r,
  edgeUpdaterType: o,
  onEdgeUpdate: a,
  onEdgeUpdateEnd: i
}) {
  const {
    id: l,
    vueFlowRef: d,
    connectionMode: u,
    connectionRadius: c,
    connectOnClick: f,
    connectionClickStartHandle: h,
    nodesConnectable: b,
    autoPanOnConnect: p,
    autoPanSpeed: v,
    findNode: m,
    panBy: y,
    startConnection: $,
    updateConnection: k,
    endConnection: T,
    emits: C,
    viewport: _,
    edges: g,
    nodes: S,
    isValidConnection: L,
    nodeLookup: F
  } = Ge();
  let O = null, E = !1, U = null;
  function A(x) {
    var I;
    const R = Le(n) === "target", Q = bl(x), te = Pu(x.target), se = x.currentTarget;
    if (se && (Q && x.button === 0 || !Q)) {
      let he = function(ge) {
        D = Kt(ge, Pe), fe = $b(
          ro(D, _.value, !1, [1, 1]),
          c.value,
          F.value,
          V
        ), M || (B(), M = !0);
        const ke = Lu(
          ge,
          {
            handle: fe,
            connectionMode: u.value,
            fromNodeId: Le(t),
            fromHandleId: Le(e),
            fromType: R ? "target" : "source",
            isValidConnection: ce,
            doc: te,
            lib: "vue",
            flowId: l,
            nodeLookup: F.value
          },
          g.value,
          S.value,
          m,
          F.value
        );
        U = ke.handleDomNode, O = ke.connection, E = Cb(!!fe, ke.isValid);
        const Ne = {
          // from stays the same
          ...ve,
          isValid: E,
          to: ke.toHandle && E ? no({ x: ke.toHandle.x, y: ke.toHandle.y }, _.value) : D,
          toHandle: ke.toHandle,
          toPosition: E && ke.toHandle ? ke.toHandle.position : Us[V.position],
          toNode: ke.toHandle ? F.value.get(ke.toHandle.nodeId) : null
        };
        if (E && fe && ve?.toHandle && Ne.toHandle && ve.toHandle.type === Ne.toHandle.type && ve.toHandle.nodeId === Ne.toHandle.nodeId && ve.toHandle.id === Ne.toHandle.id && ve.to.x === Ne.to.x && ve.to.y === Ne.to.y)
          return;
        const Be = fe ?? ke.toHandle;
        if (k(
          Be && E ? no(
            {
              x: Be.x,
              y: Be.y
            },
            _.value
          ) : D,
          Be,
          Pb(!!Be, E)
        ), ve = Ne, !fe && !E && !U)
          return gi(be);
        O && O.source !== O.target && U && (gi(be), be = U, U.classList.add("connecting", "vue-flow__handle-connecting"), U.classList.toggle("valid", !!E), U.classList.toggle("vue-flow__handle-valid", !!E));
      }, ze = function(ge) {
        "touches" in ge && ge.touches.length > 0 || ((fe || U) && O && E && (a ? a(ge, O) : C.connect(O)), C.connectEnd(ge), o && i?.(ge), gi(be), cancelAnimationFrame(we), T(ge), M = !1, E = !1, O = null, U = null, te.removeEventListener("mousemove", he), te.removeEventListener("mouseup", ze), te.removeEventListener("touchmove", he), te.removeEventListener("touchend", ze));
      };
      const xe = m(Le(t));
      let ce = Le(r) || L.value || To;
      !ce && xe && (ce = (R ? xe.isValidSourcePos : xe.isValidTargetPos) || To);
      let fe, we = 0;
      const { x: $e, y: Ce } = Kt(x), pe = sp(Le(o), se), Pe = (I = d.value) == null ? void 0 : I.getBoundingClientRect();
      if (!Pe || !pe)
        return;
      const ae = lp(Le(t), pe, Le(e), F.value, u.value);
      if (!ae)
        return;
      let be, D = Kt(x, Pe), M = !1;
      const B = () => {
        if (!p.value)
          return;
        const [ge, ke] = ap(D, Pe, v.value);
        y({ x: ge, y: ke }), we = requestAnimationFrame(B);
      }, V = {
        ...ae,
        nodeId: Le(t),
        type: pe,
        position: ae.position
      }, H = F.value.get(Le(t)), de = {
        inProgress: !0,
        isValid: null,
        from: vr(H, V, me.Left, !0),
        fromHandle: V,
        fromPosition: V.position,
        fromNode: H,
        to: D,
        toHandle: null,
        toPosition: Us[V.position],
        toNode: null
      };
      $(
        {
          nodeId: Le(t),
          id: Le(e),
          type: pe,
          position: se?.getAttribute("data-handlepos") || me.Top,
          ...D
        },
        {
          x: $e - Pe.left,
          y: Ce - Pe.top
        }
      ), C.connectStart({ event: x, nodeId: Le(t), handleId: Le(e), handleType: pe });
      let ve = de;
      te.addEventListener("mousemove", he), te.addEventListener("mouseup", ze), te.addEventListener("touchmove", he), te.addEventListener("touchend", ze);
    }
  }
  function j(x) {
    var I, R;
    if (!f.value)
      return;
    const Q = Le(n) === "target";
    if (!h.value) {
      C.clickConnectStart({ event: x, nodeId: Le(t), handleId: Le(e) }), $(
        {
          nodeId: Le(t),
          type: Le(n),
          id: Le(e),
          position: me.Top,
          ...Kt(x)
        },
        void 0,
        !0
      );
      return;
    }
    let te = Le(r) || L.value || To;
    const se = m(Le(t));
    if (!te && se && (te = (Q ? se.isValidSourcePos : se.isValidTargetPos) || To), se && (typeof se.connectable > "u" ? b.value : se.connectable) === !1)
      return;
    const he = Pu(x.target), ze = Lu(
      x,
      {
        handle: {
          nodeId: Le(t),
          id: Le(e),
          type: Le(n),
          position: me.Top,
          ...Kt(x)
        },
        connectionMode: u.value,
        fromNodeId: h.value.nodeId,
        fromHandleId: h.value.id ?? null,
        fromType: h.value.type,
        isValidConnection: te,
        doc: he,
        lib: "vue",
        flowId: l,
        nodeLookup: F.value
      },
      g.value,
      S.value,
      m,
      F.value
    ), xe = ((I = ze.connection) == null ? void 0 : I.source) === ((R = ze.connection) == null ? void 0 : R.target);
    ze.isValid && ze.connection && !xe && C.connect(ze.connection), C.clickConnectEnd(x), T(x, !0);
  }
  return {
    handlePointerDown: A,
    handleClick: j
  };
}
function Fb() {
  return wr(dp, "");
}
function hp(e) {
  const t = e ?? Fb() ?? "", n = wr(cp, G(null)), { findNode: r, edges: o, emits: a } = Ge(), i = r(t);
  return i || a.error(new at(nt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: i,
    parentNode: ne(() => r(i.parentNode)),
    connectedEdges: ne(() => rp([i], o.value))
  };
}
function Bb() {
  return {
    doubleClick: ye(),
    click: ye(),
    mouseEnter: ye(),
    mouseMove: ye(),
    mouseLeave: ye(),
    contextMenu: ye(),
    dragStart: ye(),
    drag: ye(),
    dragStop: ye()
  };
}
function Lb(e, t) {
  const n = Bb();
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
function mp() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: i, emits: l } = Ge();
  return (d, u = !1) => {
    const c = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, h = u ? 4 : 1, b = d.x * c * h, p = d.y * f * h, v = [];
    for (const m of e.value)
      if (m.draggable || i && typeof m.draggable > "u") {
        const y = { x: m.computedPosition.x + b, y: m.computedPosition.y + p }, { position: $ } = yl(
          m,
          y,
          l.error,
          t.value,
          m.parentNode ? r(m.parentNode) : void 0
        );
        v.push({
          id: m.id,
          position: $,
          from: m.position,
          distance: { x: d.x, y: d.y },
          dimensions: m.dimensions
        });
      }
    n(v, !0, !1);
  };
}
const Oo = 0.1, Ub = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function bn() {
  return po("Viewport not initialized yet."), Promise.resolve(!1);
}
const Vb = {
  zoomIn: bn,
  zoomOut: bn,
  zoomTo: bn,
  fitView: bn,
  setCenter: bn,
  fitBounds: bn,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: bn,
  setTransform: bn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function qb(e) {
  function t(r, o) {
    return new Promise((a) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Ur : qo).scaleBy(
        xi(e.d3Selection, o?.duration, o?.ease, () => {
          a(!0);
        }),
        r
      ) : a(!1);
    });
  }
  function n(r, o, a, i) {
    return new Promise((l) => {
      var d;
      const { x: u, y: c } = Kf({ x: -r, y: -o }, e.translateExtent), f = mr.translate(-u, -c).scale(a);
      e.d3Selection && e.d3Zoom ? (d = e.d3Zoom) == null || d.interpolate(i?.interpolate === "linear" ? Ur : qo).transform(
        xi(e.d3Selection, i?.duration, i?.ease, () => {
          l(!0);
        }),
        f
      ) : l(!1);
    });
  }
  return ne(() => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
    viewportInitialized: !0,
    // todo: allow passing scale as option
    zoomIn: (o) => t(1.2, o),
    zoomOut: (o) => t(1 / 1.2, o),
    zoomTo: (o, a) => new Promise((i) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(a?.interpolate === "linear" ? Ur : qo).scaleTo(
        xi(e.d3Selection, a?.duration, a?.ease, () => {
          i(!0);
        }),
        o
      ) : i(!1);
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
      padding: Oo,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var a, i;
      const l = [];
      for (const h of e.nodes)
        h.dimensions.width && h.dimensions.height && (o?.includeHiddenNodes || !h.hidden) && (!((a = o.nodes) != null && a.length) || (i = o.nodes) != null && i.length && o.nodes.includes(h.id)) && l.push(h);
      if (!l.length)
        return Promise.resolve(!1);
      const d = tp(l), { x: u, y: c, zoom: f } = Cu(
        d,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? Oo
      );
      return n(u, c, f, o);
    },
    setCenter: (o, a, i) => {
      const l = typeof i?.zoom < "u" ? i.zoom : e.maxZoom, d = e.dimensions.width / 2 - o * l, u = e.dimensions.height / 2 - a * l;
      return n(d, u, l, i);
    },
    fitBounds: (o, a = { padding: Oo }) => {
      const { x: i, y: l, zoom: d } = Cu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        a.padding ?? Oo
      );
      return n(i, l, d, a);
    },
    project: (o) => ro(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: i } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x - a,
          y: o.y - i
        };
        return ro(l, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: i } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x + a,
          y: o.y + i
        };
        return no(l, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Vb);
}
function xi(e, t = 0, n = Ub, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function jb(e, t, n) {
  const r = Jc(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let v, m, y = !!(n.nodes.value.length || n.edges.value.length);
        v = or([e.modelValue, () => {
          var $, k;
          return (k = ($ = e.modelValue) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (m?.pause(), n.setElements($), !m && !y && $.length ? y = !0 : m?.resume());
        }), m = or(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([$, k]) => {
            var T;
            (T = e.modelValue) != null && T.value && Array.isArray(e.modelValue.value) && (v?.pause(), e.modelValue.value = [...$, ...k], fn(() => {
              v?.resume();
            }));
          },
          { immediate: y }
        ), Uo(() => {
          v?.stop(), m?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let v, m, y = !!n.nodes.value.length;
        v = or([e.nodes, () => {
          var $, k;
          return (k = ($ = e.nodes) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (m?.pause(), n.setNodes($), !m && !y && $.length ? y = !0 : m?.resume());
        }), m = or(
          [n.nodes, () => n.nodes.value.length],
          ([$]) => {
            var k;
            (k = e.nodes) != null && k.value && Array.isArray(e.nodes.value) && (v?.pause(), e.nodes.value = [...$], fn(() => {
              v?.resume();
            }));
          },
          { immediate: y }
        ), Uo(() => {
          v?.stop(), m?.stop();
        });
      });
    }, i = () => {
      r.run(() => {
        let v, m, y = !!n.edges.value.length;
        v = or([e.edges, () => {
          var $, k;
          return (k = ($ = e.edges) == null ? void 0 : $.value) == null ? void 0 : k.length;
        }], ([$]) => {
          $ && Array.isArray($) && (m?.pause(), n.setEdges($), !m && !y && $.length ? y = !0 : m?.resume());
        }), m = or(
          [n.edges, () => n.edges.value.length],
          ([$]) => {
            var k;
            (k = e.edges) != null && k.value && Array.isArray(e.edges.value) && (v?.pause(), e.edges.value = [...$], fn(() => {
              v?.resume();
            }));
          },
          { immediate: y }
        ), Uo(() => {
          v?.stop(), m?.stop();
        });
      });
    }, l = () => {
      r.run(() => {
        Fe(
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
        Fe(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      r.run(() => {
        Fe(
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
        Fe(
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
        Fe(
          () => t.applyDefault,
          () => {
            et(t.applyDefault) && (n.applyDefault.value = t.applyDefault);
          },
          {
            immediate: !0
          }
        );
      });
    }, h = () => {
      r.run(() => {
        const v = async (m) => {
          let y = m;
          typeof t.autoConnect == "function" && (y = await t.autoConnect(m)), y !== !1 && n.addEdges([y]);
        };
        Fe(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Fe(
          n.autoConnect,
          (m, y, $) => {
            m ? n.onConnect(v) : n.hooks.value.connect.off(v), $(() => {
              n.hooks.value.connect.off(v);
            });
          },
          { immediate: !0 }
        );
      });
    }, b = () => {
      const v = [
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
      for (const m of Object.keys(t)) {
        const y = m;
        if (!v.includes(y)) {
          const $ = He(() => t[y]), k = n[y];
          ul(k) && r.run(() => {
            Fe(
              $,
              (T) => {
                et(T) && (k.value = T);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), a(), i(), d(), l(), u(), c(), f(), h(), b();
  }), () => r.stop();
}
function Hb() {
  return {
    edgesChange: ye(),
    nodesChange: ye(),
    nodeDoubleClick: ye(),
    nodeClick: ye(),
    nodeMouseEnter: ye(),
    nodeMouseMove: ye(),
    nodeMouseLeave: ye(),
    nodeContextMenu: ye(),
    nodeDragStart: ye(),
    nodeDrag: ye(),
    nodeDragStop: ye(),
    nodesInitialized: ye(),
    miniMapNodeClick: ye(),
    miniMapNodeDoubleClick: ye(),
    miniMapNodeMouseEnter: ye(),
    miniMapNodeMouseMove: ye(),
    miniMapNodeMouseLeave: ye(),
    connect: ye(),
    connectStart: ye(),
    connectEnd: ye(),
    clickConnectStart: ye(),
    clickConnectEnd: ye(),
    paneReady: ye(),
    init: ye(),
    move: ye(),
    moveStart: ye(),
    moveEnd: ye(),
    selectionDragStart: ye(),
    selectionDrag: ye(),
    selectionDragStop: ye(),
    selectionContextMenu: ye(),
    selectionStart: ye(),
    selectionEnd: ye(),
    viewportChangeStart: ye(),
    viewportChange: ye(),
    viewportChangeEnd: ye(),
    paneScroll: ye(),
    paneClick: ye(),
    paneContextMenu: ye(),
    paneMouseEnter: ye(),
    paneMouseMove: ye(),
    paneMouseLeave: ye(),
    edgeContextMenu: ye(),
    edgeMouseEnter: ye(),
    edgeMouseMove: ye(),
    edgeMouseLeave: ye(),
    edgeDoubleClick: ye(),
    edgeClick: ye(),
    edgeUpdateStart: ye(),
    edgeUpdate: ye(),
    edgeUpdateEnd: ye(),
    updateNodeInternals: ye(),
    error: ye((e) => po(e.message))
  };
}
function Gb(e, t) {
  const n = _r();
  gh(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const i = (l) => {
        e(o, l);
      };
      a.setEmitter(i), Zr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), Zr(a.removeHasEmitListeners);
    }
  });
  function r(o) {
    var a;
    const i = Wb(o);
    return !!((a = n?.vnode.props) == null ? void 0 : a[i]);
  }
}
function Wb(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, a) => a.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function vp() {
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
    selectionMode: gl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Vr.Free,
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
      type: Mn.Bezier,
      style: {}
    },
    connectionMode: Pn.Loose,
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
    multiSelectionKeyCode: ma() ? "Meta" : "Control",
    zoomActivationKeyCode: ma() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: Hb(),
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
const Yb = [
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
  const r = qb(e), o = (D) => {
    const M = D ?? [];
    e.hooks.updateNodeInternals.trigger(M);
  }, a = (D) => ub(D, e.nodes, e.edges), i = (D) => lb(D, e.nodes, e.edges), l = (D) => rp(D, e.edges), d = ({ id: D, type: M, nodeId: B }) => {
    var V;
    const H = D ? `-${M}-${D}` : `-${M}`;
    return Array.from(((V = e.connectionLookup.get(`${B}${H}`)) == null ? void 0 : V.values()) ?? []);
  }, u = (D) => {
    if (D)
      return t.value.get(D);
  }, c = (D) => {
    if (D)
      return n.value.get(D);
  }, f = (D, M, B) => {
    var V, H;
    const ue = [];
    for (const de of D) {
      const ve = {
        id: de.id,
        type: "position",
        dragging: B,
        from: de.from
      };
      if (M && (ve.position = de.position, de.parentNode)) {
        const ge = u(de.parentNode);
        ve.position = {
          x: ve.position.x - (((V = ge?.computedPosition) == null ? void 0 : V.x) ?? 0),
          y: ve.position.y - (((H = ge?.computedPosition) == null ? void 0 : H.y) ?? 0)
        };
      }
      ue.push(ve);
    }
    ue?.length && e.hooks.nodesChange.trigger(ue);
  }, h = (D) => {
    if (!e.vueFlowRef)
      return;
    const M = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!M)
      return;
    const B = window.getComputedStyle(M), { m22: V } = new window.DOMMatrixReadOnly(B.transform), H = [];
    for (const ue of D) {
      const de = ue, ve = u(de.id);
      if (ve) {
        const ge = Na(de.nodeElement);
        if (!!(ge.width && ge.height && (ve.dimensions.width !== ge.width || ve.dimensions.height !== ge.height || de.forceUpdate))) {
          const Ne = de.nodeElement.getBoundingClientRect();
          ve.dimensions = ge, ve.handleBounds.source = Uu("source", de.nodeElement, Ne, V, ve.id), ve.handleBounds.target = Uu("target", de.nodeElement, Ne, V, ve.id), H.push({
            id: ve.id,
            type: "dimensions",
            dimensions: ge
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), H.length && e.hooks.nodesChange.trigger(H);
  }, b = (D, M) => {
    const B = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    for (const de of D)
      Un(de) ? B.add(de.id) : Cn(de) && V.add(de.id);
    const H = _n(t.value, B, !0), ue = _n(n.value, V);
    if (e.multiSelectionActive) {
      for (const de of B)
        H.push(wn(de, M));
      for (const de of V)
        ue.push(wn(de, M));
    }
    H.length && e.hooks.nodesChange.trigger(H), ue.length && e.hooks.edgesChange.trigger(ue);
  }, p = (D) => {
    if (e.multiSelectionActive) {
      const M = D.map((B) => wn(B.id, !0));
      e.hooks.nodesChange.trigger(M);
      return;
    }
    e.hooks.nodesChange.trigger(_n(t.value, new Set(D.map((M) => M.id)), !0)), e.hooks.edgesChange.trigger(_n(n.value));
  }, v = (D) => {
    if (e.multiSelectionActive) {
      const M = D.map((B) => wn(B.id, !0));
      e.hooks.edgesChange.trigger(M);
      return;
    }
    e.hooks.edgesChange.trigger(_n(n.value, new Set(D.map((M) => M.id)))), e.hooks.nodesChange.trigger(_n(t.value, /* @__PURE__ */ new Set(), !0));
  }, m = (D) => {
    b(D, !0);
  }, y = (D) => {
    const B = (D || e.nodes).map((V) => (V.selected = !1, wn(V.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, $ = (D) => {
    const B = (D || e.edges).map((V) => (V.selected = !1, wn(V.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, k = (D) => {
    if (!D || !D.length)
      return b([], !1);
    const M = D.reduce(
      (B, V) => {
        const H = wn(V.id, !1);
        return Un(V) ? B.nodes.push(H) : B.edges.push(H), B;
      },
      { nodes: [], edges: [] }
    );
    M.nodes.length && e.hooks.nodesChange.trigger(M.nodes), M.edges.length && e.hooks.edgesChange.trigger(M.edges);
  }, T = (D) => {
    var M;
    (M = e.d3Zoom) == null || M.scaleExtent([D, e.maxZoom]), e.minZoom = D;
  }, C = (D) => {
    var M;
    (M = e.d3Zoom) == null || M.scaleExtent([e.minZoom, D]), e.maxZoom = D;
  }, _ = (D) => {
    var M;
    (M = e.d3Zoom) == null || M.translateExtent(D), e.translateExtent = D;
  }, g = (D) => {
    e.nodeExtent = D, o();
  }, S = (D) => {
    var M;
    (M = e.d3Zoom) == null || M.clickDistance(D);
  }, L = (D) => {
    e.nodesDraggable = D, e.nodesConnectable = D, e.elementsSelectable = D;
  }, F = (D) => {
    const M = D instanceof Function ? D(e.nodes) : D;
    !e.initialized && !M.length || (e.nodes = Vu(M, u, e.hooks.error.trigger));
  }, O = (D) => {
    const M = D instanceof Function ? D(e.edges) : D;
    if (!e.initialized && !M.length)
      return;
    const B = bi(
      M,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    yi(e.connectionLookup, n.value, B), e.edges = B;
  }, E = (D) => {
    const M = D instanceof Function ? D([...e.nodes, ...e.edges]) : D;
    !e.initialized && !M.length || (F(M.filter(Un)), O(M.filter(Cn)));
  }, U = (D) => {
    let M = D instanceof Function ? D(e.nodes) : D;
    M = Array.isArray(M) ? M : [M];
    const B = Vu(M, u, e.hooks.error.trigger), V = [];
    for (const H of B)
      V.push(Nu(H));
    V.length && e.hooks.nodesChange.trigger(V);
  }, A = (D) => {
    let M = D instanceof Function ? D(e.edges) : D;
    M = Array.isArray(M) ? M : [M];
    const B = bi(
      M,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), V = [];
    for (const H of B)
      V.push(Nu(H));
    V.length && e.hooks.edgesChange.trigger(V);
  }, j = (D, M = !0, B = !1) => {
    const V = D instanceof Function ? D(e.nodes) : D, H = Array.isArray(V) ? V : [V], ue = [], de = [];
    function ve(ke) {
      const Ne = l(ke);
      for (const Be of Ne)
        (!et(Be.deletable) || Be.deletable) && de.push(Mu(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function ge(ke) {
      const Ne = [];
      for (const Be of e.nodes)
        Be.parentNode === ke && Ne.push(Be);
      if (Ne.length) {
        for (const Be of Ne)
          ue.push(Ru(Be.id));
        M && ve(Ne);
        for (const Be of Ne)
          ge(Be.id);
      }
    }
    for (const ke of H) {
      const Ne = typeof ke == "string" ? u(ke) : ke;
      Ne && (et(Ne.deletable) && !Ne.deletable || (ue.push(Ru(Ne.id)), M && ve([Ne]), B && ge(Ne.id)));
    }
    de.length && e.hooks.edgesChange.trigger(de), ue.length && e.hooks.nodesChange.trigger(ue);
  }, x = (D) => {
    const M = D instanceof Function ? D(e.edges) : D, B = Array.isArray(M) ? M : [M], V = [];
    for (const H of B) {
      const ue = typeof H == "string" ? c(H) : H;
      ue && (et(ue.deletable) && !ue.deletable || V.push(
        Mu(
          typeof H == "string" ? H : H.id,
          ue.source,
          ue.target,
          ue.sourceHandle,
          ue.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(V);
  }, I = (D, M, B = !0) => {
    const V = c(D.id);
    if (!V)
      return !1;
    const H = e.edges.indexOf(V), ue = Ob(D, M, V, B, e.hooks.error.trigger);
    if (ue) {
      const [de] = bi(
        [ue],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((ve, ge) => ge === H ? de : ve), yi(e.connectionLookup, n.value, [de]), de;
    }
    return !1;
  }, R = (D, M, B = { replace: !1 }) => {
    const V = c(D);
    if (!V)
      return;
    const H = typeof M == "function" ? M(V) : M;
    V.data = B.replace ? H : { ...V.data, ...H };
  }, Q = (D) => Ou(D, e.nodes), te = (D) => {
    const M = Ou(D, e.edges);
    return yi(e.connectionLookup, n.value, M), M;
  }, se = (D, M, B = { replace: !1 }) => {
    const V = u(D);
    if (!V)
      return;
    const H = typeof M == "function" ? M(V) : M;
    B.replace ? e.nodes.splice(e.nodes.indexOf(V), 1, H) : Object.assign(V, H);
  }, he = (D, M, B = { replace: !1 }) => {
    const V = u(D);
    if (!V)
      return;
    const H = typeof M == "function" ? M(V) : M;
    V.data = B.replace ? H : { ...V.data, ...H };
  }, ze = (D, M, B = !1) => {
    B ? e.connectionClickStartHandle = D : e.connectionStartHandle = D, e.connectionEndHandle = null, e.connectionStatus = null, M && (e.connectionPosition = M);
  }, xe = (D, M = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = D, e.connectionEndHandle = M, e.connectionStatus = B);
  }, ce = (D, M) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, M ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, fe = (D) => {
    const M = ib(D), B = M ? null : Dr(D) ? D : u(D.id);
    return !M && !B ? [null, null, M] : [M ? D : pa(B), B, M];
  }, we = (D, M = !0, B = e.nodes) => {
    const [V, H, ue] = fe(D);
    if (!V)
      return [];
    const de = [];
    for (const ve of B || e.nodes) {
      if (!ue && (ve.id === H.id || !ve.computedPosition))
        continue;
      const ge = pa(ve), ke = ha(ge, V);
      (M && ke > 0 || ke >= ge.width * ge.height || ke >= Number(V.width) * Number(V.height)) && de.push(ve);
    }
    return de;
  }, $e = (D, M, B = !0) => {
    const [V] = fe(D);
    if (!V)
      return !1;
    const H = ha(V, M);
    return B && H > 0 || H >= Number(V.width) * Number(V.height);
  }, Ce = (D) => {
    const { viewport: M, dimensions: B, d3Zoom: V, d3Selection: H, translateExtent: ue } = e;
    if (!V || !H || !D.x && !D.y)
      return !1;
    const de = mr.translate(M.x + D.x, M.y + D.y).scale(M.zoom), ve = [
      [0, 0],
      [B.width, B.height]
    ], ge = V.constrain()(de, ve, ue), ke = e.viewport.x !== ge.x || e.viewport.y !== ge.y || e.viewport.zoom !== ge.k;
    return V.transform(H, ge), ke;
  }, pe = (D) => {
    const M = D instanceof Function ? D(e) : D, B = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(M.defaultEdgeOptions) && (e.defaultEdgeOptions = M.defaultEdgeOptions);
    const V = M.modelValue || M.nodes || M.edges ? [] : void 0;
    V && (M.modelValue && V.push(...M.modelValue), M.nodes && V.push(...M.nodes), M.edges && V.push(...M.edges), E(V));
    const H = () => {
      et(M.maxZoom) && C(M.maxZoom), et(M.minZoom) && T(M.minZoom), et(M.translateExtent) && _(M.translateExtent);
    };
    for (const ue of Object.keys(M)) {
      const de = ue, ve = M[de];
      ![...Yb, ...B].includes(de) && et(ve) && (e[de] = ve);
    }
    Ts(() => e.d3Zoom).not.toBeNull().then(H), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: h,
    setElements: E,
    setNodes: F,
    setEdges: O,
    addNodes: U,
    addEdges: A,
    removeNodes: j,
    removeEdges: x,
    findNode: u,
    findEdge: c,
    updateEdge: I,
    updateEdgeData: R,
    updateNode: se,
    updateNodeData: he,
    applyEdgeChanges: te,
    applyNodeChanges: Q,
    addSelectedElements: m,
    addSelectedNodes: p,
    addSelectedEdges: v,
    setMinZoom: T,
    setMaxZoom: C,
    setTranslateExtent: _,
    setNodeExtent: g,
    setPaneClickDistance: S,
    removeSelectedElements: k,
    removeSelectedNodes: y,
    removeSelectedEdges: $,
    startConnection: ze,
    updateConnection: xe,
    endConnection: ce,
    setInteractive: L,
    setState: pe,
    getIntersectingNodes: we,
    getIncomers: a,
    getOutgoers: i,
    getConnectedEdges: l,
    getHandleConnections: d,
    isNodeIntersecting: $e,
    panBy: Ce,
    fitView: (D) => r.value.fitView(D),
    zoomIn: (D) => r.value.zoomIn(D),
    zoomOut: (D) => r.value.zoomOut(D),
    zoomTo: (D, M) => r.value.zoomTo(D, M),
    setViewport: (D, M) => r.value.setViewport(D, M),
    setTransform: (D, M) => r.value.setTransform(D, M),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (D, M, B) => r.value.setCenter(D, M, B),
    fitBounds: (D, M) => r.value.fitBounds(D, M),
    project: (D) => r.value.project(D),
    screenToFlowCoordinate: (D) => r.value.screenToFlowCoordinate(D),
    flowToScreenCoordinate: (D) => r.value.flowToScreenCoordinate(D),
    toObject: () => {
      const D = [], M = [];
      for (const B of e.nodes) {
        const {
          computedPosition: V,
          handleBounds: H,
          selected: ue,
          dimensions: de,
          isParent: ve,
          resizing: ge,
          dragging: ke,
          events: Ne,
          ...Be
        } = B;
        D.push(Be);
      }
      for (const B of e.edges) {
        const { selected: V, sourceNode: H, targetNode: ue, events: de, ...ve } = B;
        M.push(ve);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: D,
          edges: M,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (D) => new Promise((M) => {
      const { nodes: B, edges: V, position: H, zoom: ue, viewport: de } = D;
      B && F(B), V && O(V);
      const [ve, ge] = de?.x && de?.y ? [de.x, de.y] : H ?? [null, null];
      if (ve && ge) {
        const ke = de?.zoom || ue || e.viewport.zoom;
        return Ts(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: ve,
            y: ge,
            zoom: ke
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
      const D = vp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const M = mr.translate(D.defaultViewport.x ?? 0, D.defaultViewport.y ?? 0).scale(Yn(D.defaultViewport.zoom ?? 1, D.minZoom, D.maxZoom)), B = e.viewportRef.getBoundingClientRect(), V = [
          [0, 0],
          [B.width, B.height]
        ], H = e.d3Zoom.constrain()(M, V, D.translateExtent);
        e.d3Zoom.transform(e.d3Selection, H);
      }
      pe(D);
    },
    $destroy: () => {
    }
  };
}
const Kb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Zb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, dt = /* @__PURE__ */ qe({
  ...Zb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => me.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = vh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = He(() => n.type ?? "source"), o = He(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: i,
      connectionClickStartHandle: l,
      connectionEndHandle: d,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: h
    } = Ge(), { id: b, node: p, nodeEl: v, connectedEdges: m } = hp(), y = G(), $ = He(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), k = He(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), T = He(
      () => {
        var O, E, U, A, j, x;
        return ((O = i.value) == null ? void 0 : O.nodeId) === b && ((E = i.value) == null ? void 0 : E.id) === e.id && ((U = i.value) == null ? void 0 : U.type) === r.value || ((A = d.value) == null ? void 0 : A.nodeId) === b && ((j = d.value) == null ? void 0 : j.id) === e.id && ((x = d.value) == null ? void 0 : x.type) === r.value;
      }
    ), C = He(
      () => {
        var O, E, U;
        return ((O = l.value) == null ? void 0 : O.nodeId) === b && ((E = l.value) == null ? void 0 : E.id) === e.id && ((U = l.value) == null ? void 0 : U.type) === r.value;
      }
    ), { handlePointerDown: _, handleClick: g } = pp({
      nodeId: b,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), S = ne(() => typeof e.connectable == "string" && e.connectable === "single" ? !m.value.some((O) => {
      const E = O[`${r.value}Handle`];
      return O[r.value] !== b ? !1 : E ? E === e.id : !0;
    }) : typeof e.connectable == "number" ? m.value.filter((O) => {
      const E = O[`${r.value}Handle`];
      return O[r.value] !== b ? !1 : E ? E === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(p, m.value) : et(e.connectable) ? e.connectable : c.value);
    Ke(() => {
      var O;
      if (!p.dimensions.width || !p.dimensions.height)
        return;
      const E = (O = p.handleBounds[r.value]) == null ? void 0 : O.find((Q) => Q.id === e.id);
      if (!u.value || E)
        return;
      const U = u.value.querySelector(".vue-flow__transformationpane");
      if (!v.value || !y.value || !U || !e.id)
        return;
      const A = v.value.getBoundingClientRect(), j = y.value.getBoundingClientRect(), x = window.getComputedStyle(U), { m22: I } = new window.DOMMatrixReadOnly(x.transform), R = {
        id: e.id,
        position: e.position,
        x: (j.left - A.left) / I,
        y: (j.top - A.top) / I,
        type: r.value,
        nodeId: b,
        ...Na(y.value)
      };
      p.handleBounds[r.value] = [...p.handleBounds[r.value] ?? [], R];
    });
    function L(O) {
      const E = bl(O);
      S.value && $.value && (E && O.button === 0 || !E) && _(O);
    }
    function F(O) {
      !b || !l.value && !$.value || S.value && g(O);
    }
    return t({
      handleClick: g,
      handlePointerDown: _,
      onClick: F,
      onPointerDown: L
    }), (O, E) => (w(), z("div", {
      ref_key: "handle",
      ref: y,
      "data-id": `${N(a)}-${N(b)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": N(b),
      "data-handlepos": O.position,
      class: W(["vue-flow__handle", [
        `vue-flow__handle-${O.position}`,
        `vue-flow__handle-${e.id}`,
        N(f),
        N(h),
        r.value,
        {
          connectable: S.value,
          connecting: C.value,
          connectablestart: $.value,
          connectableend: k.value,
          connectionindicator: S.value && ($.value && !T.value || k.value && T.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: F
    }, [
      Xe(O.$slots, "default", { id: O.id })
    ], 42, Kb));
  }
}), Ia = function({
  sourcePosition: e = me.Bottom,
  targetPosition: t = me.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: a,
  data: i
}) {
  const l = i.label ?? n;
  return [
    Me(dt, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? Me(l) : Me(ee, [l]),
    Me(dt, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Ia.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ia.inheritAttrs = !1;
Ia.compatConfig = { MODE: 3 };
const Jb = Ia, Da = function({
  targetPosition: e = me.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    Me(dt, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? Me(a) : Me(ee, [a])
  ];
};
Da.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Da.inheritAttrs = !1;
Da.compatConfig = { MODE: 3 };
const Qb = Da, Fa = function({
  sourcePosition: e = me.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? Me(a) : Me(ee, [a]),
    Me(dt, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Fa.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Fa.inheritAttrs = !1;
Fa.compatConfig = { MODE: 3 };
const ex = Fa, tx = ["transform"], nx = ["width", "height", "x", "y", "rx", "ry"], rx = ["y"], ox = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, ax = /* @__PURE__ */ qe({
  ...ox,
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
    const t = G({ x: 0, y: 0, width: 0, height: 0 }), n = G(null), r = ne(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ke(o), Fe([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const a = n.value.getBBox();
      (a.width !== t.value.width || a.height !== t.value.height) && (t.value = a);
    }
    return (a, i) => (w(), z("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      a.labelShowBg ? (w(), z("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * a.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * a.labelBgPadding[1]}px`,
        x: -a.labelBgPadding[0],
        y: -a.labelBgPadding[1],
        style: kt(a.labelBgStyle),
        rx: a.labelBgBorderRadius,
        ry: a.labelBgBorderRadius
      }, null, 12, nx)) : le("", !0),
      s("text", Pa(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Xe(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (w(), Ae(Dt(a.label), { key: 0 })) : (w(), z(ee, { key: 1 }, [
            re(q(a.label), 1)
          ], 64))
        ])
      ], 16, rx)
    ], 8, tx));
  }
}), ix = ["id", "d", "marker-end", "marker-start"], sx = ["d", "stroke-width"], lx = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, ho = /* @__PURE__ */ qe({
  ...lx,
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
    const n = G(null), r = G(null), o = G(null), a = bh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (i, l) => (w(), z(ee, null, [
      s("path", Pa(N(a), {
        id: i.id,
        ref_key: "pathEl",
        ref: n,
        d: i.path,
        class: "vue-flow__edge-path",
        "marker-end": i.markerEnd,
        "marker-start": i.markerStart
      }), null, 16, ix),
      i.interactionWidth ? (w(), z("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: i.path,
        "stroke-width": i.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, sx)) : le("", !0),
      i.label && i.labelX && i.labelY ? (w(), Ae(ax, {
        key: 1,
        ref_key: "labelEl",
        ref: o,
        x: i.labelX,
        y: i.labelY,
        label: i.label,
        "label-show-bg": i.labelShowBg,
        "label-bg-style": i.labelBgStyle,
        "label-bg-padding": i.labelBgPadding,
        "label-bg-border-radius": i.labelBgBorderRadius,
        "label-style": i.labelStyle
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : le("", !0)
    ], 64));
  }
});
function gp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, l = r < t ? r + i : r - i;
  return [a, l, o, i];
}
function yp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: a,
  targetControlX: i,
  targetControlY: l
}) {
  const d = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + l * 0.375 + r * 0.125, c = Math.abs(d - e), f = Math.abs(u - t);
  return [d, u, c, f];
}
function No(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Gu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let i, l;
  switch (e) {
    case me.Left:
      i = t - No(t - r, a), l = n;
      break;
    case me.Right:
      i = t + No(r - t, a), l = n;
      break;
    case me.Top:
      i = t, l = n - No(n - o, a);
      break;
    case me.Bottom:
      i = t, l = n + No(o - n, a);
      break;
  }
  return [i, l];
}
function xl(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = me.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: i = me.Top,
    curvature: l = 0.25
  } = e, [d, u] = Gu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [c, f] = Gu({
    pos: i,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [h, b, p, v] = yp({
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
    h,
    b,
    p,
    v
  ];
}
function Wu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let a, i;
  switch (e) {
    case me.Left:
    case me.Right:
      a = 0.5 * (t + r), i = n;
      break;
    case me.Top:
    case me.Bottom:
      a = t, i = 0.5 * (n + o);
      break;
  }
  return [a, i];
}
function bp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = me.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: i = me.Top
  } = e, [l, d] = Wu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, c] = Wu({
    pos: i,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, h, b, p] = yp({
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
    h,
    b,
    p
  ];
}
const Yu = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
};
function ux({
  source: e,
  sourcePosition: t = me.Bottom,
  target: n
}) {
  return t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Xu(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function dx({
  source: e,
  sourcePosition: t = me.Bottom,
  target: n,
  targetPosition: r = me.Top,
  center: o,
  offset: a
}) {
  const i = Yu[t], l = Yu[r], d = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, c = ux({
    source: d,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", h = c[f];
  let b, p, v;
  const m = { x: 0, y: 0 }, y = { x: 0, y: 0 }, [$, k, T, C] = gp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[f] * l[f] === -1) {
    p = o.x ?? $, v = o.y ?? k;
    const g = [
      { x: p, y: d.y },
      { x: p, y: u.y }
    ], S = [
      { x: d.x, y: v },
      { x: u.x, y: v }
    ];
    i[f] === h ? b = f === "x" ? g : S : b = f === "x" ? S : g;
  } else {
    const g = [{ x: d.x, y: u.y }], S = [{ x: u.x, y: d.y }];
    if (f === "x" ? b = i.x === h ? S : g : b = i.y === h ? g : S, t === r) {
      const U = Math.abs(e[f] - n[f]);
      if (U <= a) {
        const A = Math.min(a - 1, a - U);
        i[f] === h ? m[f] = (d[f] > e[f] ? -1 : 1) * A : y[f] = (u[f] > n[f] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const U = f === "x" ? "y" : "x", A = i[f] === l[U], j = d[U] > u[U], x = d[U] < u[U];
      (i[f] === 1 && (!A && j || A && x) || i[f] !== 1 && (!A && x || A && j)) && (b = f === "x" ? g : S);
    }
    const L = { x: d.x + m.x, y: d.y + m.y }, F = { x: u.x + y.x, y: u.y + y.y }, O = Math.max(Math.abs(L.x - b[0].x), Math.abs(F.x - b[0].x)), E = Math.max(Math.abs(L.y - b[0].y), Math.abs(F.y - b[0].y));
    O >= E ? (p = (L.x + F.x) / 2, v = b[0].y) : (p = b[0].x, v = (L.y + F.y) / 2);
  }
  return [[
    e,
    { x: d.x + m.x, y: d.y + m.y },
    ...b,
    { x: u.x + y.x, y: u.y + y.y },
    n
  ], p, v, T, C];
}
function cx(e, t, n, r) {
  const o = Math.min(Xu(e, t) / 2, Xu(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const l = e.x < n.x ? 1 : -1, d = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * d}Q ${a},${i} ${a + o * l},${i}`;
}
function qs(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = me.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: i = me.Top,
    borderRadius: l = 5,
    centerX: d,
    centerY: u,
    offset: c = 20
  } = e, [f, h, b, p, v] = dx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: i,
    center: { x: d, y: u },
    offset: c
  });
  return [f.reduce((y, $, k) => {
    let T;
    return k > 0 && k < f.length - 1 ? T = cx(f[k - 1], $, f[k + 1], l) : T = `${k === 0 ? "M" : "L"}${$.x} ${$.y}`, y += T, y;
  }, ""), h, b, p, v];
}
function fx(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [a, i, l, d] = gp({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, a, i, l, d];
}
const px = qe({
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
      const [n, r, o] = fx(e);
      return Me(ho, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), hx = px, mx = qe({
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
      const [n, r, o] = qs({
        ...e,
        sourcePosition: e.sourcePosition ?? me.Bottom,
        targetPosition: e.targetPosition ?? me.Top
      });
      return Me(ho, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), xp = mx, vx = qe({
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
    return () => Me(xp, { ...e, ...t, borderRadius: 0 });
  }
}), gx = vx, yx = qe({
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
      const [n, r, o] = xl({
        ...e,
        sourcePosition: e.sourcePosition ?? me.Bottom,
        targetPosition: e.targetPosition ?? me.Top
      });
      return Me(ho, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), bx = yx, xx = qe({
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
      const [n, r, o] = bp({
        ...e,
        sourcePosition: e.sourcePosition ?? me.Bottom,
        targetPosition: e.targetPosition ?? me.Top
      });
      return Me(ho, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), wx = xx, _x = {
  input: ex,
  default: Jb,
  output: Qb
}, kx = {
  default: bx,
  straight: hx,
  step: gx,
  smoothstep: xp,
  simplebezier: wx
};
function Sx(e, t, n) {
  const r = ne(() => (v) => t.value.get(v)), o = ne(() => (v) => n.value.get(v)), a = ne(() => {
    const v = {
      ...kx,
      ...e.edgeTypes
    }, m = Object.keys(v);
    for (const y of e.edges)
      y.type && !m.includes(y.type) && (v[y.type] = y.type);
    return v;
  }), i = ne(() => {
    const v = {
      ..._x,
      ...e.nodeTypes
    }, m = Object.keys(v);
    for (const y of e.nodes)
      y.type && !m.includes(y.type) && (v[y.type] = y.type);
    return v;
  }), l = ne(() => e.onlyRenderVisibleElements ? np(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), d = ne(() => {
    if (e.onlyRenderVisibleElements) {
      const v = [];
      for (const m of e.edges) {
        const y = t.value.get(m.source), $ = t.value.get(m.target);
        xb({
          sourcePos: y.computedPosition || { x: 0, y: 0 },
          targetPos: $.computedPosition || { x: 0, y: 0 },
          sourceWidth: y.dimensions.width,
          sourceHeight: y.dimensions.height,
          targetWidth: $.dimensions.width,
          targetHeight: $.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && v.push(m);
      }
      return v;
    }
    return e.edges;
  }), u = ne(() => [...l.value, ...d.value]), c = ne(() => {
    const v = [];
    for (const m of e.nodes)
      m.selected && v.push(m);
    return v;
  }), f = ne(() => {
    const v = [];
    for (const m of e.edges)
      m.selected && v.push(m);
    return v;
  }), h = ne(() => [
    ...c.value,
    ...f.value
  ]), b = ne(() => {
    const v = [];
    for (const m of e.nodes)
      m.dimensions.width && m.dimensions.height && m.handleBounds !== void 0 && v.push(m);
    return v;
  }), p = ne(
    () => l.value.length > 0 && b.value.length === l.value.length
  );
  return {
    getNode: r,
    getEdge: o,
    getElements: u,
    getEdgeTypes: a,
    getNodeTypes: i,
    getEdges: d,
    getNodes: l,
    getSelectedElements: h,
    getSelectedNodes: c,
    getSelectedEdges: f,
    getNodesInitialized: b,
    areNodesInitialized: p
  };
}
class In {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = _r()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? In.instance;
    return In.instance = r ?? new In(), n && (n.config.globalProperties.$vueFlowStorage = In.instance), In.instance;
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
    const r = vp(), o = ln(r), a = {};
    for (const [h, b] of Object.entries(o.hooks)) {
      const p = `on${h.charAt(0).toUpperCase() + h.slice(1)}`;
      a[p] = b.on;
    }
    const i = {};
    for (const [h, b] of Object.entries(o.hooks))
      i[h] = b.trigger;
    const l = ne(() => {
      const h = /* @__PURE__ */ new Map();
      for (const b of o.nodes)
        h.set(b.id, b);
      return h;
    }), d = ne(() => {
      const h = /* @__PURE__ */ new Map();
      for (const b of o.edges)
        h.set(b.id, b);
      return h;
    }), u = Sx(o, l, d), c = Xb(o, l, d);
    c.setState({ ...o, ...n });
    const f = {
      ...a,
      ...u,
      ...c,
      ...mm(o),
      nodeLookup: l,
      edgeLookup: d,
      emits: i,
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
function Ge(e) {
  const t = In.getInstance(), n = Zc(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, i = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const d = wr(Hu, null);
    typeof d < "u" && d !== null && (!i || d.id === i) && (l = d);
  }
  if (l || i && (l = t.get(i)), !l || i && l.id !== i) {
    const d = a ?? t.getId(), u = t.create(d, o);
    l = u, (n ?? Jc(!0)).run(() => {
      Fe(
        u.applyDefault,
        (f, h, b) => {
          const p = (m) => {
            u.applyNodeChanges(m);
          }, v = (m) => {
            u.applyEdgeChanges(m);
          };
          f ? (u.onNodesChange(p), u.onEdgesChange(v)) : (u.hooks.value.nodesChange.off(p), u.hooks.value.edgesChange.off(v)), b(() => {
            u.hooks.value.nodesChange.off(p), u.hooks.value.edgesChange.off(v);
          });
        },
        { immediate: !0 }
      ), Zr(() => {
        if (l) {
          const f = t.get(l.id);
          f ? f.$destroy() : po(`No store instance found for id ${l.id} in storage.`);
        }
      });
    });
  } else
    r && l.setState(o);
  if (n && (jn(Hu, l), n.vueFlowId = l.id), r) {
    const d = _r();
    d?.type.name !== "VueFlow" && l.emits.error(new at(nt.USEVUEFLOW_OPTIONS));
  }
  return l;
}
function Ex(e) {
  const { emits: t, dimensions: n } = Ge();
  let r;
  Ke(() => {
    const o = () => {
      var a, i;
      if (!e.value || !(((i = (a = e.value).checkVisibility) == null ? void 0 : i.call(a)) ?? !0))
        return;
      const l = Na(e.value);
      (l.width === 0 || l.height === 0) && t.error(new at(nt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: l.width || 500, height: l.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), $a(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const zx = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, $x = /* @__PURE__ */ qe({
  ...zx,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (w(), z("div", {
      class: "vue-flow__selection vue-flow__container",
      style: kt({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), Px = ["tabIndex"], Cx = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Ax = /* @__PURE__ */ qe({
  ...Cx,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: i } = Ge(), l = mp(), d = G(null), u = fp({
      el: d,
      onStart(p) {
        t.selectionDragStart(p), t.nodeDragStart(p);
      },
      onDrag(p) {
        t.selectionDrag(p), t.nodeDrag(p);
      },
      onStop(p) {
        t.selectionDragStop(p), t.nodeDragStop(p);
      }
    });
    Ke(() => {
      var p;
      a.value || (p = d.value) == null || p.focus({ preventScroll: !0 });
    });
    const c = ne(() => tp(r.value)), f = ne(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function h(p) {
      t.selectionContextMenu({ event: p, nodes: r.value });
    }
    function b(p) {
      a.value || fr[p.key] && (p.preventDefault(), l(
        {
          x: fr[p.key].x,
          y: fr[p.key].y
        },
        p.shiftKey
      ));
    }
    return (p, v) => !N(i) && c.value.width && c.value.height ? (w(), z("div", {
      key: 0,
      class: W(["vue-flow__nodesselection vue-flow__container", N(o)]),
      style: kt({ transform: `translate(${N(n).x}px,${N(n).y}px) scale(${N(n).zoom})` })
    }, [
      s("div", {
        ref_key: "el",
        ref: d,
        class: W([{ dragging: N(u) }, "vue-flow__nodesselection-rect"]),
        style: kt(f.value),
        tabIndex: N(a) ? void 0 : -1,
        onContextmenu: h,
        onKeydown: b
      }, null, 46, Px)
    ], 6)) : le("", !0);
  }
});
function Tx(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const Ox = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, Nx = /* @__PURE__ */ qe({
  ...Ox,
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
      removeSelectedElements: i,
      userSelectionRect: l,
      elementsSelectable: d,
      nodesSelectionActive: u,
      getSelectedEdges: c,
      getSelectedNodes: f,
      removeNodes: h,
      removeEdges: b,
      selectionMode: p,
      deleteKeyCode: v,
      multiSelectionKeyCode: m,
      multiSelectionActive: y,
      edgeLookup: $,
      nodeLookup: k,
      connectionLookup: T,
      defaultEdgeOptions: C,
      connectionStartHandle: _,
      panOnDrag: g
    } = Ge(), S = un(null), L = un(/* @__PURE__ */ new Set()), F = un(/* @__PURE__ */ new Set()), O = un(null), E = He(() => d.value && (e.isSelecting || a.value)), U = He(() => _.value !== null);
    let A = !1, j = !1;
    const x = qr(v, { actInsideInputWithModifier: !1 }), I = qr(m);
    Fe(x, (ce) => {
      ce && (h(f.value), b(c.value), u.value = !1);
    }), Fe(I, (ce) => {
      y.value = ce;
    });
    function R(ce, fe) {
      return (we) => {
        we.target === fe && ce?.(we);
      };
    }
    function Q(ce) {
      if (A || U.value) {
        A = !1;
        return;
      }
      o.paneClick(ce), i(), u.value = !1;
    }
    function te(ce) {
      var fe;
      if (Array.isArray(g.value) && ((fe = g.value) != null && fe.includes(2))) {
        ce.preventDefault();
        return;
      }
      o.paneContextMenu(ce);
    }
    function se(ce) {
      o.paneScroll(ce);
    }
    function he(ce) {
      var fe, we, $e;
      if (O.value = ((fe = t.value) == null ? void 0 : fe.getBoundingClientRect()) ?? null, !d.value || !e.isSelecting || ce.button !== 0 || ce.target !== S.value || !O.value)
        return;
      ($e = (we = ce.target) == null ? void 0 : we.setPointerCapture) == null || $e.call(we, ce.pointerId);
      const { x: Ce, y: pe } = Tx(ce, O.value);
      j = !0, A = !1, i(), l.value = {
        width: 0,
        height: 0,
        startX: Ce,
        startY: pe,
        x: Ce,
        y: pe
      }, o.selectionStart(ce);
    }
    function ze(ce) {
      var fe;
      if (!O.value || !l.value)
        return;
      A = !0;
      const { x: we, y: $e } = Kt(ce, O.value), { startX: Ce = 0, startY: pe = 0 } = l.value, Pe = {
        startX: Ce,
        startY: pe,
        x: we < Ce ? we : Ce,
        y: $e < pe ? $e : pe,
        width: Math.abs(we - Ce),
        height: Math.abs($e - pe)
      }, ae = L.value, be = F.value;
      L.value = new Set(
        np(n.value, Pe, r.value, p.value === gl.Partial, !0).map(
          (M) => M.id
        )
      ), F.value = /* @__PURE__ */ new Set();
      const D = ((fe = C.value) == null ? void 0 : fe.selectable) ?? !0;
      for (const M of L.value) {
        const B = T.value.get(M);
        if (B)
          for (const { edgeId: V } of B.values()) {
            const H = $.value.get(V);
            H && (H.selectable ?? D) && F.value.add(V);
          }
      }
      if (!ju(ae, L.value)) {
        const M = _n(k.value, L.value, !0);
        o.nodesChange(M);
      }
      if (!ju(be, F.value)) {
        const M = _n($.value, F.value);
        o.edgesChange(M);
      }
      l.value = Pe, a.value = !0, u.value = !1;
    }
    function xe(ce) {
      var fe;
      ce.button !== 0 || !j || ((fe = ce.target) == null || fe.releasePointerCapture(ce.pointerId), !a.value && l.value && ce.target === S.value && Q(ce), a.value = !1, l.value = null, u.value = L.value.size > 0, o.selectionEnd(ce), e.selectionKeyPressed && (A = !1), j = !1);
    }
    return (ce, fe) => (w(), z("div", {
      ref_key: "container",
      ref: S,
      class: W(["vue-flow__pane vue-flow__container", { selection: ce.isSelecting }]),
      onClick: fe[0] || (fe[0] = (we) => E.value ? void 0 : R(Q, S.value)(we)),
      onContextmenu: fe[1] || (fe[1] = (we) => R(te, S.value)(we)),
      onWheelPassive: fe[2] || (fe[2] = (we) => R(se, S.value)(we)),
      onPointerenter: fe[3] || (fe[3] = (we) => E.value ? void 0 : N(o).paneMouseEnter(we)),
      onPointerdown: fe[4] || (fe[4] = (we) => E.value ? he(we) : N(o).paneMouseMove(we)),
      onPointermove: fe[5] || (fe[5] = (we) => E.value ? ze(we) : N(o).paneMouseMove(we)),
      onPointerup: fe[6] || (fe[6] = (we) => E.value ? xe(we) : void 0),
      onPointerleave: fe[7] || (fe[7] = (we) => N(o).paneMouseLeave(we))
    }, [
      Xe(ce.$slots, "default"),
      N(a) && N(l) ? (w(), Ae($x, {
        key: 0,
        "user-selection-rect": N(l)
      }, null, 8, ["user-selection-rect"])) : le("", !0),
      N(u) && N(f).length ? (w(), Ae(Ax, { key: 1 })) : le("", !0)
    ], 34));
  }
}), Rx = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Mx = /* @__PURE__ */ qe({
  ...Rx,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = Ge(), o = ne(() => n.value ? !r.value : !1), a = ne(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (i, l) => (w(), z("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: kt({ transform: a.value, opacity: o.value ? 0 : void 0 })
    }, [
      Xe(i.$slots, "default")
    ], 4));
  }
}), Ix = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Dx = /* @__PURE__ */ qe({
  ...Ix,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: r,
      translateExtent: o,
      zoomActivationKeyCode: a,
      selectionKeyCode: i,
      panActivationKeyCode: l,
      panOnScroll: d,
      panOnScrollMode: u,
      panOnScrollSpeed: c,
      panOnDrag: f,
      zoomOnDoubleClick: h,
      zoomOnPinch: b,
      zoomOnScroll: p,
      preventScrolling: v,
      noWheelClassName: m,
      noPanClassName: y,
      emits: $,
      connectionStartHandle: k,
      userSelectionActive: T,
      paneDragging: C,
      d3Zoom: _,
      d3Selection: g,
      d3ZoomHandler: S,
      viewport: L,
      viewportRef: F,
      paneClickDistance: O
    } = Ge();
    Ex(F);
    const E = un(!1), U = un(!1);
    let A = null, j = !1, x = 0, I = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const R = qr(l), Q = qr(i), te = qr(a), se = He(
      () => (!Q.value || Q.value && i.value === !0) && (R.value || f.value)
    ), he = He(() => R.value || d.value), ze = He(() => i.value === !0 && se.value !== !0), xe = He(
      () => Q.value && i.value !== !0 || T.value || ze.value
    ), ce = He(() => k.value !== null);
    Ke(() => {
      if (!F.value) {
        po("Viewport element is missing");
        return;
      }
      const pe = F.value, Pe = pe.getBoundingClientRect(), ae = Qy().clickDistance(O.value).scaleExtent([t.value, n.value]).translateExtent(o.value), be = Ft(pe).call(ae), D = be.on("wheel.zoom"), M = mr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(Yn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [Pe.width, Pe.height]
      ], V = ae.constrain()(M, B, o.value);
      ae.transform(be, V), ae.wheelDelta(Au), _.value = ae, g.value = be, S.value = D, L.value = { x: V.x, y: V.y, zoom: V.k }, ae.on("start", (H) => {
        var ue;
        if (!H.sourceEvent)
          return null;
        x = H.sourceEvent.button, E.value = !0;
        const de = $e(H.transform);
        ((ue = H.sourceEvent) == null ? void 0 : ue.type) === "mousedown" && (C.value = !0), I = de, $.viewportChangeStart(de), $.moveStart({ event: H, flowTransform: de });
      }), ae.on("end", (H) => {
        if (!H.sourceEvent)
          return null;
        if (E.value = !1, C.value = !1, fe(se.value, x ?? 0) && !j && $.paneContextMenu(H.sourceEvent), j = !1, we(I, H.transform)) {
          const ue = $e(H.transform);
          I = ue, $.viewportChangeEnd(ue), $.moveEnd({ event: H, flowTransform: ue });
        }
      }), ae.filter((H) => {
        var ue;
        const de = te.value || p.value, ve = b.value && H.ctrlKey, ge = H.button, ke = H.type === "wheel";
        if (ge === 1 && H.type === "mousedown" && (Ce(H, "vue-flow__node") || Ce(H, "vue-flow__edge")))
          return !0;
        if (!se.value && !de && !he.value && !h.value && !b.value || T.value || ce.value && !ke || !h.value && H.type === "dblclick" || Ce(H, m.value) && ke || Ce(H, y.value) && (!ke || he.value && ke && !te.value) || !b.value && H.ctrlKey && ke || !de && !he.value && !ve && ke)
          return !1;
        if (!b && H.type === "touchstart" && ((ue = H.touches) == null ? void 0 : ue.length) > 1)
          return H.preventDefault(), !1;
        if (!se.value && (H.type === "mousedown" || H.type === "touchstart") || ze.value && Array.isArray(f.value) && f.value.includes(0) && ge === 0 || Array.isArray(f.value) && !f.value.includes(ge) && (H.type === "mousedown" || H.type === "touchstart"))
          return !1;
        const Ne = Array.isArray(f.value) && f.value.includes(ge) || i.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !ge || ge <= 1;
        return (!H.ctrlKey || R.value || ke) && Ne;
      }), Fe(
        [T, se],
        () => {
          T.value && !E.value ? ae.on("zoom", null) : T.value || ae.on("zoom", (H) => {
            L.value = { x: H.transform.x, y: H.transform.y, zoom: H.transform.k };
            const ue = $e(H.transform);
            j = fe(se.value, x ?? 0), $.viewportChange(ue), $.move({ event: H, flowTransform: ue });
          });
        },
        { immediate: !0 }
      ), Fe(
        [T, he, u, te, b, v, m],
        () => {
          he.value && !te.value && !T.value ? be.on(
            "wheel.zoom",
            (H) => {
              if (Ce(H, m.value))
                return !1;
              const ue = te.value || p.value, de = b.value && H.ctrlKey;
              if (!(!v.value || he.value || ue || de))
                return !1;
              H.preventDefault(), H.stopImmediatePropagation();
              const ge = be.property("__zoom").k || 1, ke = ma();
              if (!R.value && H.ctrlKey && b.value && ke) {
                const er = Wt(H), $t = Au(H), rn = ge * 2 ** $t;
                ae.scaleTo(be, rn, er, H);
                return;
              }
              const Ne = H.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Vr.Vertical ? 0 : H.deltaX * Ne, bt = u.value === Vr.Horizontal ? 0 : H.deltaY * Ne;
              !ke && H.shiftKey && u.value !== Vr.Vertical && !Be && bt && (Be = bt, bt = 0), ae.translateBy(
                be,
                -(Be / ge) * c.value,
                -(bt / ge) * c.value
              );
              const ft = $e(be.property("__zoom"));
              A && clearTimeout(A), U.value ? ($.move({ event: H, flowTransform: ft }), $.viewportChange(ft), A = setTimeout(() => {
                $.moveEnd({ event: H, flowTransform: ft }), $.viewportChangeEnd(ft), U.value = !1;
              }, 150)) : (U.value = !0, $.moveStart({ event: H, flowTransform: ft }), $.viewportChangeStart(ft));
            },
            { passive: !1 }
          ) : typeof D < "u" && be.on(
            "wheel.zoom",
            function(H, ue) {
              const de = !v.value && H.type === "wheel" && !H.ctrlKey, ve = te.value || p.value, ge = b.value && H.ctrlKey;
              if (!ve && !d.value && !ge && H.type === "wheel" || de || Ce(H, m.value))
                return null;
              H.preventDefault(), D.call(this, H, ue);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function fe(pe, Pe) {
      return Pe === 2 && Array.isArray(pe) && pe.includes(2);
    }
    function we(pe, Pe) {
      return pe.x !== Pe.x && !Number.isNaN(Pe.x) || pe.y !== Pe.y && !Number.isNaN(Pe.y) || pe.zoom !== Pe.k && !Number.isNaN(Pe.k);
    }
    function $e(pe) {
      return {
        x: pe.x,
        y: pe.y,
        zoom: pe.k
      };
    }
    function Ce(pe, Pe) {
      return pe.target.closest(`.${Pe}`);
    }
    return (pe, Pe) => (w(), z("div", {
      ref_key: "viewportRef",
      ref: F,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      Y(Nx, {
        "is-selecting": xe.value,
        "selection-key-pressed": N(Q),
        class: W({
          connecting: ce.value,
          dragging: N(C),
          draggable: N(f) === !0 || Array.isArray(N(f)) && N(f).includes(0)
        })
      }, {
        default: ot(() => [
          Y(Mx, null, {
            default: ot(() => [
              Xe(pe.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Fx = ["id"], Bx = ["id"], Lx = ["id"], Ux = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Vx = /* @__PURE__ */ qe({
  ...Ux,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = Ge();
    return (o, a) => (w(), z(ee, null, [
      s("div", {
        id: `${N(Wf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + q(N(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Fx),
      s("div", {
        id: `${N(Yf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Bx),
      N(n) ? le("", !0) : (w(), z("div", {
        key: 0,
        id: `${N(ab)}-${N(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, q(N(r)), 9, Lx))
    ], 64));
  }
});
function qx() {
  const e = Ge();
  Fe(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function jx(e, t, n) {
  return n === me.Left ? e - t : n === me.Right ? e + t : e;
}
function Hx(e, t, n) {
  return n === me.Top ? e - t : n === me.Bottom ? e + t : e;
}
const wl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = me.Top,
  type: o
}) {
  return Me("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: jx(t, e, r),
    cy: Hx(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
wl.props = ["radius", "centerX", "centerY", "position", "type"];
wl.compatConfig = { MODE: 3 };
const Ku = wl, Gx = qe({
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
      nodesSelectionActive: i,
      noPanClassName: l,
      getEdgeTypes: d,
      removeSelectedEdges: u,
      findEdge: c,
      findNode: f,
      isValidConnection: h,
      multiSelectionActive: b,
      disableKeyboardA11y: p,
      elementsSelectable: v,
      edgesUpdatable: m,
      edgesFocusable: y,
      hooks: $
    } = Ge(), k = ne(() => c(e.id)), { emit: T, on: C } = Ib(k.value, a), _ = wr(Ma), g = _r(), S = G(!1), L = G(!1), F = G(""), O = G(null), E = G("source"), U = G(null), A = He(
      () => typeof k.value.selectable > "u" ? v.value : k.value.selectable
    ), j = He(() => typeof k.value.updatable > "u" ? m.value : k.value.updatable), x = He(() => typeof k.value.focusable > "u" ? y.value : k.value.focusable);
    jn(Nb, e.id), jn(Rb, U);
    const I = ne(() => k.value.class instanceof Function ? k.value.class(k.value) : k.value.class), R = ne(() => k.value.style instanceof Function ? k.value.style(k.value) : k.value.style), Q = ne(() => {
      const M = k.value.type || "default", B = _?.[`edge-${M}`];
      if (B)
        return B;
      let V = k.value.template ?? d.value[M];
      if (typeof V == "string" && g) {
        const H = Object.keys(g.appContext.components);
        H && H.includes(M) && (V = ef(M, !1));
      }
      return V && typeof V != "string" ? V : (a.error(new at(nt.EDGE_TYPE_MISSING, V)), !1);
    }), { handlePointerDown: te } = pp({
      nodeId: F,
      handleId: O,
      type: E,
      isValidConnection: h,
      edgeUpdaterType: E,
      onEdgeUpdate: ze,
      onEdgeUpdateEnd: xe
    });
    return () => {
      const M = f(k.value.source), B = f(k.value.target), V = "pathOptions" in k.value ? k.value.pathOptions : {};
      if (!M && !B)
        return a.error(new at(nt.EDGE_SOURCE_TARGET_MISSING, k.value.id, k.value.source, k.value.target)), null;
      if (!M)
        return a.error(new at(nt.EDGE_SOURCE_MISSING, k.value.id, k.value.source)), null;
      if (!B)
        return a.error(new at(nt.EDGE_TARGET_MISSING, k.value.id, k.value.target)), null;
      if (!k.value || k.value.hidden || M.hidden || B.hidden)
        return null;
      let H;
      r.value === Pn.Strict ? H = M.handleBounds.source : H = [...M.handleBounds.source || [], ...M.handleBounds.target || []];
      const ue = Fu(H, k.value.sourceHandle);
      let de;
      r.value === Pn.Strict ? de = B.handleBounds.target : de = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const ve = Fu(de, k.value.targetHandle), ge = ue?.position || me.Bottom, ke = ve?.position || me.Top, { x: Ne, y: Be } = vr(M, ue, ge), { x: bt, y: ft } = vr(B, ve, ke);
      return k.value.sourceX = Ne, k.value.sourceY = Be, k.value.targetX = bt, k.value.targetY = ft, Me(
        "g",
        {
          ref: U,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${Q.value === !1 ? "default" : k.value.type || "default"}`,
            l.value,
            I.value,
            {
              updating: S.value,
              selected: k.value.selected,
              animated: k.value.animated,
              inactive: !A.value && !$.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: x.value ? 0 : void 0,
          "aria-label": k.value.ariaLabel === null ? void 0 : k.value.ariaLabel ?? `Edge from ${k.value.source} to ${k.value.target}`,
          "aria-describedby": x.value ? `${Yf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: x.value ? "group" : "img",
          ...k.value.domAttributes,
          onClick: fe,
          onContextmenu: we,
          onDblclick: $e,
          onMouseenter: Ce,
          onMousemove: pe,
          onMouseleave: Pe,
          onKeyDown: x.value ? D : void 0
        },
        [
          L.value ? null : Me(Q.value === !1 ? d.value.default : Q.value, {
            id: e.id,
            sourceNode: M,
            targetNode: B,
            source: k.value.source,
            target: k.value.target,
            type: k.value.type,
            updatable: j.value,
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
            style: R.value,
            markerStart: `url('#${oo(k.value.markerStart, t)}')`,
            markerEnd: `url('#${oo(k.value.markerEnd, t)}')`,
            sourcePosition: ge,
            targetPosition: ke,
            sourceX: Ne,
            sourceY: Be,
            targetX: bt,
            targetY: ft,
            sourceHandleId: k.value.sourceHandle,
            targetHandleId: k.value.targetHandle,
            interactionWidth: k.value.interactionWidth,
            ...V
          }),
          [
            j.value === "source" || j.value === !0 ? [
              Me(
                "g",
                {
                  onMousedown: ae,
                  onMouseenter: se,
                  onMouseout: he
                },
                Me(Ku, {
                  position: ge,
                  centerX: Ne,
                  centerY: Be,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            j.value === "target" || j.value === !0 ? [
              Me(
                "g",
                {
                  onMousedown: be,
                  onMouseenter: se,
                  onMouseout: he
                },
                Me(Ku, {
                  position: ke,
                  centerX: bt,
                  centerY: ft,
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
    function se() {
      S.value = !0;
    }
    function he() {
      S.value = !1;
    }
    function ze(M, B) {
      T.update({ event: M, edge: k.value, connection: B });
    }
    function xe(M) {
      T.updateEnd({ event: M, edge: k.value }), L.value = !1;
    }
    function ce(M, B) {
      M.button === 0 && (L.value = !0, F.value = B ? k.value.target : k.value.source, O.value = (B ? k.value.targetHandle : k.value.sourceHandle) ?? null, E.value = B ? "target" : "source", T.updateStart({ event: M, edge: k.value }), te(M));
    }
    function fe(M) {
      var B;
      const V = { event: M, edge: k.value };
      A.value && (i.value = !1, k.value.selected && b.value ? (u([k.value]), (B = U.value) == null || B.blur()) : n([k.value])), T.click(V);
    }
    function we(M) {
      T.contextMenu({ event: M, edge: k.value });
    }
    function $e(M) {
      T.doubleClick({ event: M, edge: k.value });
    }
    function Ce(M) {
      T.mouseEnter({ event: M, edge: k.value });
    }
    function pe(M) {
      T.mouseMove({ event: M, edge: k.value });
    }
    function Pe(M) {
      T.mouseLeave({ event: M, edge: k.value });
    }
    function ae(M) {
      ce(M, !0);
    }
    function be(M) {
      ce(M, !1);
    }
    function D(M) {
      var B;
      !p.value && Xf.includes(M.key) && A.value && (M.key === "Escape" ? ((B = U.value) == null || B.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), Wx = Gx, Yx = qe({
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
      connectionLineType: i,
      connectionLineStyle: l,
      connectionLineOptions: d,
      connectionStatus: u,
      viewport: c,
      findNode: f
    } = Ge(), h = (e = wr(Ma)) == null ? void 0 : e["connection-line"], b = ne(() => {
      var $;
      return f(($ = r.value) == null ? void 0 : $.nodeId);
    }), p = ne(() => {
      var $;
      return f(($ = o.value) == null ? void 0 : $.nodeId) ?? null;
    }), v = ne(() => ({
      x: (a.value.x - c.value.x) / c.value.zoom,
      y: (a.value.y - c.value.y) / c.value.zoom
    })), m = ne(
      () => d.value.markerStart ? `url(#${oo(d.value.markerStart, t)})` : ""
    ), y = ne(
      () => d.value.markerEnd ? `url(#${oo(d.value.markerEnd, t)})` : ""
    );
    return () => {
      var $, k, T;
      if (!b.value || !r.value)
        return null;
      const C = r.value.id, _ = r.value.type, g = b.value.handleBounds;
      let S = g?.[_] ?? [];
      if (n.value === Pn.Loose) {
        const R = g?.[_ === "source" ? "target" : "source"] ?? [];
        S = [...S, ...R];
      }
      if (!S)
        return null;
      const L = (C ? S.find((R) => R.id === C) : S[0]) ?? null, F = L?.position ?? me.Top, { x: O, y: E } = vr(b.value, L, F);
      let U = null;
      p.value && (n.value === Pn.Strict ? U = (($ = p.value.handleBounds[_ === "source" ? "target" : "source"]) == null ? void 0 : $.find(
        (R) => {
          var Q;
          return R.id === ((Q = o.value) == null ? void 0 : Q.id);
        }
      )) || null : U = ((k = [...p.value.handleBounds.source ?? [], ...p.value.handleBounds.target ?? []]) == null ? void 0 : k.find(
        (R) => {
          var Q;
          return R.id === ((Q = o.value) == null ? void 0 : Q.id);
        }
      )) || null);
      const A = ((T = o.value) == null ? void 0 : T.position) ?? (F ? Us[F] : null);
      if (!F || !A)
        return null;
      const j = i.value ?? d.value.type ?? Mn.Bezier;
      let x = "";
      const I = {
        sourceX: O,
        sourceY: E,
        sourcePosition: F,
        targetX: v.value.x,
        targetY: v.value.y,
        targetPosition: A
      };
      return j === Mn.Bezier ? [x] = xl(I) : j === Mn.Step ? [x] = qs({
        ...I,
        borderRadius: 0
      }) : j === Mn.SmoothStep ? [x] = qs(I) : j === Mn.SimpleBezier ? [x] = bp(I) : x = `M${O},${E} ${v.value.x},${v.value.y}`, Me(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        Me(
          "g",
          { class: "vue-flow__connection" },
          h ? Me(h, {
            sourceX: O,
            sourceY: E,
            sourcePosition: F,
            targetX: v.value.x,
            targetY: v.value.y,
            targetPosition: A,
            sourceNode: b.value,
            sourceHandle: L,
            targetNode: p.value,
            targetHandle: U,
            markerEnd: y.value,
            markerStart: m.value,
            connectionStatus: u.value
          }) : Me("path", {
            d: x,
            class: [d.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...l.value,
              ...d.value.style
            },
            "marker-end": y.value,
            "marker-start": m.value
          })
        )
      );
    };
  }
}), Xx = Yx, Kx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Zx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Jx = /* @__PURE__ */ qe({
  ...Zx,
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
    return (t, n) => (w(), z("marker", {
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
      t.type === N(fa).ArrowClosed ? (w(), z("polyline", {
        key: 0,
        style: kt({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : le("", !0),
      t.type === N(fa).Arrow ? (w(), z("polyline", {
        key: 1,
        style: kt({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : le("", !0)
    ], 8, Kx));
  }
}), Qx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, e1 = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, t1 = /* @__PURE__ */ qe({
  ...e1,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = Ge(), a = ne(() => {
      const i = /* @__PURE__ */ new Set(), l = [], d = (u) => {
        if (u) {
          const c = oo(u, t);
          i.has(c) || (typeof u == "object" ? l.push({ ...u, id: c, color: u.color || o.value }) : l.push({ id: c, color: o.value, type: u }), i.add(c));
        }
      };
      for (const u of [r.value.markerEnd, r.value.markerStart])
        d(u);
      for (const u of n.value)
        for (const c of [u.markerStart, u.markerEnd])
          d(c);
      return l.sort((u, c) => u.id.localeCompare(c.id));
    });
    return (i, l) => (w(), z("svg", Qx, [
      s("defs", null, [
        (w(!0), z(ee, null, De(a.value, (d) => (w(), Ae(Jx, {
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
}), n1 = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, r1 = /* @__PURE__ */ qe({
  ...n1,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = Ge();
    return (o, a) => (w(), z(ee, null, [
      Y(t1),
      (w(!0), z(ee, null, De(N(n), (i) => (w(), z("svg", {
        key: i.id,
        class: "vue-flow__edges vue-flow__container",
        style: kt({ zIndex: N(wb)(i, N(t), N(r)) })
      }, [
        Y(N(Wx), {
          id: i.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      Y(N(Xx))
    ], 64));
  }
}), o1 = qe({
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
      emits: i,
      removeSelectedNodes: l,
      addSelectedNodes: d,
      updateNodeDimensions: u,
      onUpdateNodeInternals: c,
      getNodeTypes: f,
      nodeExtent: h,
      elevateNodesOnSelect: b,
      disableKeyboardA11y: p,
      ariaLiveMessage: v,
      snapToGrid: m,
      snapGrid: y,
      nodeDragThreshold: $,
      nodesDraggable: k,
      elementsSelectable: T,
      nodesConnectable: C,
      nodesFocusable: _,
      hooks: g
    } = Ge(), S = G(null);
    jn(cp, S), jn(dp, e.id);
    const L = wr(Ma), F = _r(), O = mp(), { node: E, parentNode: U } = hp(e.id), { emit: A, on: j } = Lb(E, i), x = He(() => typeof E.draggable > "u" ? k.value : E.draggable), I = He(() => typeof E.selectable > "u" ? T.value : E.selectable), R = He(() => typeof E.connectable > "u" ? C.value : E.connectable), Q = He(() => typeof E.focusable > "u" ? _.value : E.focusable), te = ne(
      () => I.value || x.value || g.value.nodeClick.hasListeners() || g.value.nodeDoubleClick.hasListeners() || g.value.nodeMouseEnter.hasListeners() || g.value.nodeMouseMove.hasListeners() || g.value.nodeMouseLeave.hasListeners()
    ), se = He(() => !!E.dimensions.width && !!E.dimensions.height), he = ne(() => {
      const B = E.type || "default", V = L?.[`node-${B}`];
      if (V)
        return V;
      let H = E.template || f.value[B];
      if (typeof H == "string" && F) {
        const ue = Object.keys(F.appContext.components);
        ue && ue.includes(B) && (H = ef(B, !1));
      }
      return H && typeof H != "string" ? H : (i.error(new at(nt.NODE_TYPE_MISSING, H)), !1);
    }), ze = fp({
      id: e.id,
      el: S,
      disabled: () => !x.value,
      selectable: I,
      dragHandle: () => E.dragHandle,
      onStart(B) {
        A.dragStart(B);
      },
      onDrag(B) {
        A.drag(B);
      },
      onStop(B) {
        A.dragStop(B);
      },
      onClick(B) {
        D(B);
      }
    }), xe = ne(() => E.class instanceof Function ? E.class(E) : E.class), ce = ne(() => {
      const B = (E.style instanceof Function ? E.style(E) : E.style) || {}, V = E.width instanceof Function ? E.width(E) : E.width, H = E.height instanceof Function ? E.height(E) : E.height;
      return !B.width && V && (B.width = typeof V == "string" ? V : `${V}px`), !B.height && H && (B.height = typeof H == "string" ? H : `${H}px`), B;
    }), fe = He(() => Number(E.zIndex ?? ce.value.zIndex ?? 0));
    return c((B) => {
      (B.includes(e.id) || !B.length) && $e();
    }), Ke(() => {
      Fe(
        () => E.hidden,
        (B = !1, V, H) => {
          !B && S.value && (e.resizeObserver.observe(S.value), H(() => {
            S.value && e.resizeObserver.unobserve(S.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Fe([() => E.type, () => E.sourcePosition, () => E.targetPosition], () => {
      fn(() => {
        u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
      });
    }), Fe(
      [
        () => E.position.x,
        () => E.position.y,
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.computedPosition.x;
        },
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.computedPosition.y;
        },
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.computedPosition.z;
        },
        fe,
        () => E.selected,
        () => E.dimensions.height,
        () => E.dimensions.width,
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.dimensions.height;
        },
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.dimensions.width;
        }
      ],
      ([B, V, H, ue, de, ve]) => {
        const ge = {
          x: B,
          y: V,
          z: ve + (b.value && E.selected ? 1e3 : 0)
        };
        typeof H < "u" && typeof ue < "u" ? E.computedPosition = mb({ x: H, y: ue, z: de }, ge) : E.computedPosition = ge;
      },
      { flush: "post", immediate: !0 }
    ), Fe([() => E.extent, h], ([B, V], [H, ue]) => {
      (B !== H || V !== ue) && we();
    }), E.extent === "parent" || typeof E.extent == "object" && "range" in E.extent && E.extent.range === "parent" ? Ts(() => se).toBe(!0).then(we) : we(), () => E.hidden ? null : Me(
      "div",
      {
        ref: S,
        "data-id": E.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${he.value === !1 ? "default" : E.type || "default"}`,
          {
            [n.value]: x.value,
            dragging: ze?.value,
            draggable: x.value,
            selected: E.selected,
            selectable: I.value,
            parent: E.isParent
          },
          xe.value
        ],
        style: {
          visibility: se.value ? "visible" : "hidden",
          zIndex: E.computedPosition.z ?? fe.value,
          transform: `translate(${E.computedPosition.x}px,${E.computedPosition.y}px)`,
          pointerEvents: te.value ? "all" : "none",
          ...ce.value
        },
        tabIndex: Q.value ? 0 : void 0,
        role: Q.value ? "group" : void 0,
        "aria-describedby": p.value ? void 0 : `${Wf}-${t}`,
        "aria-label": E.ariaLabel,
        "aria-roledescription": "node",
        ...E.domAttributes,
        onMouseenter: Ce,
        onMousemove: pe,
        onMouseleave: Pe,
        onContextmenu: ae,
        onClick: D,
        onDblclick: be,
        onKeydown: M
      },
      [
        Me(he.value === !1 ? f.value.default : he.value, {
          id: E.id,
          type: E.type,
          data: E.data,
          events: { ...E.events, ...j },
          selected: E.selected,
          resizing: E.resizing,
          dragging: ze.value,
          connectable: R.value,
          position: E.computedPosition,
          dimensions: E.dimensions,
          isValidTargetPos: E.isValidTargetPos,
          isValidSourcePos: E.isValidSourcePos,
          parent: E.parentNode,
          parentNodeId: E.parentNode,
          zIndex: E.computedPosition.z ?? fe.value,
          targetPosition: E.targetPosition,
          sourcePosition: E.sourcePosition,
          label: E.label,
          dragHandle: E.dragHandle,
          onUpdateNodeInternals: $e
        })
      ]
    );
    function we() {
      const B = E.computedPosition, { computedPosition: V, position: H } = yl(
        E,
        m.value ? Ra(B, y.value) : B,
        i.error,
        h.value,
        U.value
      );
      (E.computedPosition.x !== V.x || E.computedPosition.y !== V.y) && (E.computedPosition = { ...E.computedPosition, ...V }), (E.position.x !== H.x || E.position.y !== H.y) && (E.position = H);
    }
    function $e() {
      S.value && u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
    }
    function Ce(B) {
      ze?.value || A.mouseEnter({ event: B, node: E });
    }
    function pe(B) {
      ze?.value || A.mouseMove({ event: B, node: E });
    }
    function Pe(B) {
      ze?.value || A.mouseLeave({ event: B, node: E });
    }
    function ae(B) {
      return A.contextMenu({ event: B, node: E });
    }
    function be(B) {
      return A.doubleClick({ event: B, node: E });
    }
    function D(B) {
      I.value && (!r.value || !x.value || $.value > 0) && Vs(
        E,
        a.value,
        d,
        l,
        o,
        !1,
        S.value
      ), A.click({ event: B, node: E });
    }
    function M(B) {
      if (!(Ls(B) || p.value))
        if (Xf.includes(B.key) && I.value) {
          const V = B.key === "Escape";
          Vs(
            E,
            a.value,
            d,
            l,
            o,
            V,
            S.value
          );
        } else x.value && E.selected && fr[B.key] && (B.preventDefault(), v.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~E.position.x}, y: ${~~E.position.y}`, O(
          {
            x: fr[B.key].x,
            y: fr[B.key].y
          },
          B.shiftKey
        ));
    }
  }
}), a1 = o1, i1 = {
  height: "0",
  width: "0"
}, s1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, l1 = /* @__PURE__ */ qe({
  ...s1,
  setup(e) {
    const { viewportRef: t } = Ge(), n = He(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (w(), z("svg", null, [
      (w(), z("foreignObject", i1, [
        (w(), Ae(Qc, {
          to: n.value,
          disabled: !n.value
        }, [
          Xe(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function u1(e = { includeHiddenNodes: !1 }) {
  const { nodes: t } = Ge();
  return ne(() => {
    if (t.value.length === 0)
      return !1;
    for (const n of t.value)
      if ((e.includeHiddenNodes || !n.hidden) && (n?.handleBounds === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
        return !1;
    return !0;
  });
}
const d1 = { class: "vue-flow__nodes vue-flow__container" }, c1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, f1 = /* @__PURE__ */ qe({
  ...c1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = Ge(), o = u1(), a = G();
    return Fe(
      o,
      (i) => {
        i && fn(() => {
          r.nodesInitialized(t.value);
        });
      },
      { immediate: !0 }
    ), Ke(() => {
      a.value = new ResizeObserver((i) => {
        const l = i.map((d) => ({
          id: d.target.getAttribute("data-id"),
          nodeElement: d.target,
          forceUpdate: !0
        }));
        fn(() => n(l));
      });
    }), $a(() => {
      var i;
      return (i = a.value) == null ? void 0 : i.disconnect();
    }), (i, l) => (w(), z("div", d1, [
      a.value ? (w(!0), z(ee, { key: 0 }, De(N(t), (d, u, c, f) => {
        const h = [d.id];
        if (f && f.key === d.id && yh(f, h))
          return f;
        const b = (w(), Ae(N(a1), {
          id: d.id,
          key: d.id,
          "resize-observer": a.value
        }, null, 8, ["id", "resize-observer"]));
        return b.memo = h, b;
      }, l, 0), 128)) : le("", !0)
    ]));
  }
});
function p1() {
  const { emits: e } = Ge();
  Ke(() => {
    if (up()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new at(nt.MISSING_STYLES));
    }
  });
}
const h1 = /* @__PURE__ */ s("div", { class: "vue-flow__edge-labels" }, null, -1), m1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, v1 = /* @__PURE__ */ qe({
  ...m1,
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
    const r = e, o = mh(), a = di(r, "modelValue", n), i = di(r, "nodes", n), l = di(r, "edges", n), d = Ge(r), u = jb({ modelValue: a, nodes: i, edges: l }, r, d);
    return Gb(n, d.hooks), qx(), p1(), jn(Ma, o), ll(u), t(d), (c, f) => (w(), z("div", {
      ref: N(d).vueFlowRef,
      class: "vue-flow"
    }, [
      Y(Dx, null, {
        default: ot(() => [
          Y(r1),
          h1,
          Y(f1),
          Xe(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Xe(c.$slots, "default"),
      Y(Vx)
    ], 512));
  }
}), g1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, y1 = /* @__PURE__ */ qe({
  ...g1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = Ge(), r = ne(() => `${t.position}`.split("-"));
    return (o, a) => (w(), z("div", {
      class: W(["vue-flow__panel", r.value]),
      style: kt({ pointerEvents: N(n) ? "none" : "all" })
    }, [
      Xe(o.$slots, "default")
    ], 6));
  }
});
var cn = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(cn || {});
const wp = function({ dimensions: e, size: t, color: n }) {
  return Me("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, _p = function({ radius: e, color: t }) {
  return Me("circle", { cx: e, cy: e, r: e, fill: t });
};
cn.Lines + "", cn.Dots + "";
const b1 = {
  [cn.Dots]: "#81818a",
  [cn.Lines]: "#eee"
}, x1 = ["id", "x", "y", "width", "height", "patternTransform"], w1 = {
  key: 2,
  height: "100",
  width: "100"
}, _1 = ["fill"], k1 = ["x", "y", "fill"], S1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, E1 = /* @__PURE__ */ qe({
  ...S1,
  props: {
    id: {},
    variant: { default: () => cn.Dots },
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
    const { id: t, viewport: n } = Ge(), r = ne(() => {
      const i = n.value.zoom, [l, d] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * i || 1, d * i || 1], c = e.size * i, [f, h] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], b = [f * i || 1 + u[0] / 2, h * i || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: b,
        size: c
      };
    }), o = He(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = He(() => e.color || e.patternColor || b1[e.variant || cn.Dots]);
    return (i, l) => (w(), z("svg", {
      class: "vue-flow__background vue-flow__container",
      style: kt({
        height: `${i.height > 100 ? 100 : i.height}%`,
        width: `${i.width > 100 ? 100 : i.width}%`
      })
    }, [
      Xe(i.$slots, "pattern-container", { id: o.value }, () => [
        s("pattern", {
          id: o.value,
          x: N(n).x % r.value.scaledGap[0],
          y: N(n).y % r.value.scaledGap[1],
          width: r.value.scaledGap[0],
          height: r.value.scaledGap[1],
          patternTransform: `translate(-${r.value.offset[0]},-${r.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          Xe(i.$slots, "pattern", {}, () => [
            i.variant === N(cn).Lines ? (w(), Ae(N(wp), {
              key: 0,
              size: i.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : i.variant === N(cn).Dots ? (w(), Ae(N(_p), {
              key: 1,
              color: a.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : le("", !0),
            i.bgColor ? (w(), z("svg", w1, [
              s("rect", {
                width: "100%",
                height: "100%",
                fill: i.bgColor
              }, null, 8, _1)
            ])) : le("", !0)
          ])
        ], 8, x1)
      ]),
      s("rect", {
        x: i.x,
        y: i.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, k1),
      Xe(i.$slots, "default", { id: o.value })
    ], 4));
  }
}), z1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, $1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, P1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function C1(e, t, n, r, o, a) {
  return w(), z("button", P1, [
    Xe(e.$slots, "default")
  ]);
}
const Ro = /* @__PURE__ */ $1(z1, [["render", C1]]), A1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, T1 = /* @__PURE__ */ s("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), O1 = [
  T1
];
function N1(e, t) {
  return w(), z("svg", A1, O1);
}
const R1 = { render: N1 }, M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, I1 = /* @__PURE__ */ s("path", { d: "M0 0h32v4.2H0z" }, null, -1), D1 = [
  I1
];
function F1(e, t) {
  return w(), z("svg", M1, D1);
}
const B1 = { render: F1 }, L1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, U1 = /* @__PURE__ */ s("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), V1 = [
  U1
];
function q1(e, t) {
  return w(), z("svg", L1, V1);
}
const j1 = { render: q1 }, H1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, G1 = /* @__PURE__ */ s("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), W1 = [
  G1
];
function Y1(e, t) {
  return w(), z("svg", H1, W1);
}
const X1 = { render: Y1 }, K1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, Z1 = /* @__PURE__ */ s("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), J1 = [
  Z1
];
function Q1(e, t) {
  return w(), z("svg", K1, J1);
}
const ew = { render: Q1 }, tw = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, nw = /* @__PURE__ */ qe({
  ...tw,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Gf.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(e, { emit: t }) {
    const {
      nodesDraggable: n,
      nodesConnectable: r,
      elementsSelectable: o,
      setInteractive: a,
      zoomIn: i,
      zoomOut: l,
      fitView: d,
      viewport: u,
      minZoom: c,
      maxZoom: f
    } = Ge(), h = He(() => n.value || r.value || o.value), b = He(() => u.value.zoom <= c.value), p = He(() => u.value.zoom >= f.value);
    function v() {
      i(), t("zoomIn");
    }
    function m() {
      l(), t("zoomOut");
    }
    function y() {
      d(e.fitViewParams), t("fitView");
    }
    function $() {
      a(!h.value), t("interactionChange", !h.value);
    }
    return (k, T) => (w(), Ae(N(y1), {
      class: "vue-flow__controls",
      position: k.position
    }, {
      default: ot(() => [
        Xe(k.$slots, "top"),
        k.showZoom ? (w(), z(ee, { key: 0 }, [
          Xe(k.$slots, "control-zoom-in", {}, () => [
            Y(Ro, {
              class: "vue-flow__controls-zoomin",
              disabled: p.value,
              onClick: v
            }, {
              default: ot(() => [
                Xe(k.$slots, "icon-zoom-in", {}, () => [
                  (w(), Ae(Dt(N(R1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Xe(k.$slots, "control-zoom-out", {}, () => [
            Y(Ro, {
              class: "vue-flow__controls-zoomout",
              disabled: b.value,
              onClick: m
            }, {
              default: ot(() => [
                Xe(k.$slots, "icon-zoom-out", {}, () => [
                  (w(), Ae(Dt(N(B1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : le("", !0),
        k.showFitView ? Xe(k.$slots, "control-fit-view", { key: 1 }, () => [
          Y(Ro, {
            class: "vue-flow__controls-fitview",
            onClick: y
          }, {
            default: ot(() => [
              Xe(k.$slots, "icon-fit-view", {}, () => [
                (w(), Ae(Dt(N(j1))))
              ])
            ]),
            _: 3
          })
        ]) : le("", !0),
        k.showInteractive ? Xe(k.$slots, "control-interactive", { key: 2 }, () => [
          k.showInteractive ? (w(), Ae(Ro, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: $
          }, {
            default: ot(() => [
              h.value ? Xe(k.$slots, "icon-unlock", { key: 0 }, () => [
                (w(), Ae(Dt(N(ew))))
              ]) : le("", !0),
              h.value ? le("", !0) : Xe(k.$slots, "icon-lock", { key: 1 }, () => [
                (w(), Ae(Dt(N(X1))))
              ])
            ]),
            _: 3
          })) : le("", !0)
        ]) : le("", !0),
        Xe(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), rw = {
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
    const n = e, r = t, o = ne(() => xl({
      sourceX: n.sourceX,
      sourceY: n.sourceY,
      targetX: n.targetX,
      targetY: n.targetY,
      sourcePosition: n.sourcePosition,
      targetPosition: n.targetPosition
    })), a = ne(() => ({
      position: "absolute",
      transform: `translate(-50%, -50%) translate(${o.value[1]}px, ${o.value[2]}px)`
    })), i = ne(() => {
      const u = n.sourceHandleId || n.sourceHandle || n.data?.sourceHandle;
      return u || (n.data?.condition === "true" ? "yes" : n.data?.condition === "false" ? "no" : "");
    }), l = ne(() => {
      switch (i.value) {
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
    }), d = ne(() => ({
      stroke: l.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, c) => (w(), z(ee, null, [
      Y(N(ho), {
        id: e.id,
        path: o.value[0],
        style: kt(d.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      Y(N(l1), null, {
        default: ot(() => [
          s("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: kt(a.value)
          }, [
            l.value.label ? (w(), z("span", {
              key: 0,
              class: W(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, q(l.value.label), 3)) : le("", !0),
            s("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: c[0] || (c[0] = Sn((f) => r("remove", e.id), ["stop"]))
            }, [
              Y(N(Yt), { class: "h-2.5 w-2.5" })
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, Vn = [
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
function Wo(e) {
  return Vn.find((t) => t.eventClass === e)?.label || e || "—";
}
const kp = [
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
], ow = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], aw = [
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
], iw = [
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
], Sp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "has_order_bumps", label: "➕ Comprou Order Bump? (Sim/Não)" },
  { value: "reply_matches", label: "💬 Resposta do cliente (contém / exato / maiúsculas e minúsculas)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], Ep = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], zp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], lw = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Nn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function $p(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Nn[t] || 1)));
}
function uw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Nn.days === 0 ? { value: t / Nn.days, unit: "days" } : t > 0 && t % Nn.hours === 0 ? { value: t / Nn.hours, unit: "hours" } : t > 0 && t % Nn.minutes === 0 ? { value: t / Nn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const dw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function va(e) {
  return dw[e] || "minutos";
}
function kn(e) {
  return ow.find((t) => t.type === e)?.label || e;
}
function Pp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "", match_mode: "contains", case_sensitive: !1, ignore_accents: !0 } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400, filter_reply: !1, match_mode: "contains", match_text: "", case_sensitive: !1, ignore_accents: !0 } : {};
}
function Cp(e) {
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
function Ap(e) {
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
const Tp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, cw = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, fw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, pw = { class: "space-y-4" }, hw = ["value"], mw = ["value"], vw = { key: 0 }, gw = { key: 1 }, yw = ["value"], bw = { class: "mt-2 flex flex-wrap gap-1.5" }, xw = ["title", "onClick"], ww = { key: 0 }, _w = ["accept", "disabled"], kw = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, Sw = { key: 2 }, Ew = ["disabled"], zw = { class: "space-y-2" }, $w = ["onUpdate:modelValue"], Pw = ["value"], Cw = ["onUpdate:modelValue"], Aw = ["onUpdate:modelValue"], Tw = ["value"], Ow = ["onUpdate:modelValue"], Nw = ["onUpdate:modelValue"], Rw = ["onUpdate:modelValue"], Mw = ["onUpdate:modelValue"], Iw = ["onUpdate:modelValue"], Dw = ["onClick"], Fw = { class: "grid grid-cols-2 gap-2" }, Bw = { class: "space-y-3" }, Lw = ["onUpdate:modelValue"], Uw = ["onUpdate:modelValue"], Vw = ["onUpdate:modelValue"], qw = ["onClick"], jw = ["onClick"], Hw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Gw = ["onClick"], Ww = { class: "grid grid-cols-2 gap-2" }, Yw = { class: "space-y-2" }, Xw = ["onUpdate:modelValue", "placeholder"], Kw = ["onClick"], Zw = ["max"], Jw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Ie = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", je = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", Op = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => kp }
  },
  setup(e) {
    const t = e, n = G(!1), r = G(""), o = G([]), a = G("list"), i = (_) => ["image", "video", "audio", "document"].includes(_), l = ne(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function d(_, g) {
      t.data[_] = `${t.data[_] || ""}${g}`;
    }
    async function u(_, g = "media_url", S = "mime_type") {
      const L = _.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const F = await Te.uploadMedia(L);
          t.data[g] = F.url, S && (t.data[S] = F.mime_type);
        } catch (F) {
          r.value = F.message;
        } finally {
          n.value = !1, _.target.value = "";
        }
      }
    }
    const c = ne(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, h = (_) => {
      t.data.buttons = c.value.filter((g, S) => S !== _);
    }, b = ne(() => Array.isArray(t.data.sections) ? t.data.sections : []), p = () => {
      t.data.sections = [...b.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, v = (_) => {
      t.data.sections = b.value.filter((g, S) => S !== _);
    }, m = (_) => {
      _.rows = [..._.rows || [], { title: "", description: "" }];
    }, y = (_, g) => {
      _.rows = (_.rows || []).filter((S, L) => L !== g);
    }, $ = ne(() => Array.isArray(t.data.options) ? t.data.options : []), k = () => {
      t.data.options = [...$.value, ""];
    }, T = (_) => {
      t.data.options = $.value.filter((g, S) => S !== _);
    };
    async function C() {
      try {
        o.value = (await Te.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && C();
    }), (_, g) => (w(), z("div", pw, [
      s("div", null, [
        s("label", {
          class: W(je),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ie(s("select", {
          id: "zr-mode",
          "onUpdate:modelValue": g[0] || (g[0] = (S) => e.data.mode = S),
          class: W(Ie)
        }, [
          (w(!0), z(ee, null, De(N(aw), (S) => (w(), z("option", {
            key: S.value,
            value: S.value
          }, q(S.label), 9, hw))), 128))
        ], 512), [
          [tt, e.data.mode]
        ])
      ]),
      e.showRecipient ? (w(), z(ee, { key: 0 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-recipient"
          }, "Destinatário"),
          ie(s("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": g[1] || (g[1] = (S) => e.data.recipient_type = S),
            class: W(Ie)
          }, [
            (w(!0), z(ee, null, De(N(lw), (S) => (w(), z("option", {
              key: S.value,
              value: S.value
            }, q(S.label), 9, mw))), 128))
          ], 512), [
            [tt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (w(), z("div", vw, [
          s("label", {
            class: W(je),
            for: "zr-custom-phone"
          }, "Número"),
          ie(s("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": g[2] || (g[2] = (S) => e.data.custom_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: W(Ie)
          }, null, 512), [
            [
              Se,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (w(), z("div", gw, [
          s("label", {
            class: W(je),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? ie((w(), z("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": g[3] || (g[3] = (S) => e.data.group_id = S),
            class: W(Ie)
          }, [
            g[30] || (g[30] = s("option", { value: "" }, "Selecione o grupo…", -1)),
            (w(!0), z(ee, null, De(o.value, (S) => (w(), z("option", {
              key: S.id,
              value: S.id
            }, q(S.name), 9, yw))), 128))
          ], 512)), [
            [tt, e.data.group_id]
          ]) : ie((w(), z("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": g[4] || (g[4] = (S) => e.data.group_id = S),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: W(Ie)
          }, null, 512)), [
            [
              Se,
              e.data.group_id,
              void 0,
              { trim: !0 }
            ]
          ]),
          s("button", {
            type: "button",
            class: "mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: g[5] || (g[5] = (S) => a.value = a.value === "list" ? "manual" : "list")
          }, q(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : le("", !0)
      ], 64)) : le("", !0),
      e.data.mode === "text" || i(e.data.mode) ? (w(), z(ee, { key: 1 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-text"
          }, q(i(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ie(s("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": g[6] || (g[6] = (S) => e.data.text = S),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: W([Ie, "font-mono leading-relaxed"])
          }, null, 2), [
            [Se, e.data.text]
          ]),
          s("div", bw, [
            (w(!0), z(ee, null, De(e.variables, (S) => (w(), z("button", {
              key: S.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: S.label,
              onClick: (L) => d("text", S.token)
            }, q(S.token), 9, xw))), 128))
          ])
        ]),
        i(e.data.mode) ? (w(), z("div", ww, [
          s("label", {
            class: W(je),
            for: "zr-media-url"
          }, "Arquivo"),
          ie(s("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": g[7] || (g[7] = (S) => e.data.media_url = S),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: W(Ie)
          }, null, 512), [
            [
              Se,
              e.data.media_url,
              void 0,
              { trim: !0 }
            ]
          ]),
          s("input", {
            type: "file",
            class: "mt-2 w-full text-xs",
            accept: l.value,
            disabled: n.value,
            onChange: u
          }, null, 40, _w),
          n.value ? (w(), z("p", kw, "Enviando arquivo…")) : le("", !0)
        ])) : le("", !0)
      ], 64)) : e.data.mode === "sticker" ? (w(), z("div", Sw, [
        s("label", {
          class: W(je),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ie(s("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": g[8] || (g[8] = (S) => e.data.media_url = S),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: W(Ie)
        }, null, 512), [
          [
            Se,
            e.data.media_url,
            void 0,
            { trim: !0 }
          ]
        ]),
        s("input", {
          type: "file",
          class: "mt-2 w-full text-xs",
          accept: "image/*",
          disabled: n.value,
          onChange: u
        }, null, 40, Ew)
      ])) : e.data.mode === "buttons" ? (w(), z(ee, { key: 3 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-title"
          }, "Título"),
          ie(s("input", {
            id: "zr-title",
            "onUpdate:modelValue": g[9] || (g[9] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.title]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-text-btn"
          }, "Descrição"),
          ie(s("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": g[10] || (g[10] = (S) => e.data.text = S),
            rows: "3",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.text]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-footer"
          }, "Rodapé"),
          ie(s("input", {
            id: "zr-footer",
            "onUpdate:modelValue": g[11] || (g[11] = (S) => e.data.footer = S),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.footer]
          ])
        ]),
        s("div", zw, [
          s("label", {
            class: W(je)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (w(!0), z(ee, null, De(c.value, (S, L) => (w(), z("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ie(s("select", {
              "onUpdate:modelValue": (F) => S.type = F,
              class: W(Ie)
            }, [
              (w(!0), z(ee, null, De(N(iw), (F) => (w(), z("option", {
                key: F.value,
                value: F.value
              }, q(F.label), 9, Pw))), 128))
            ], 8, $w), [
              [tt, S.type]
            ]),
            S.type === "pix" ? (w(), z(ee, { key: 0 }, [
              ie(s("input", {
                "onUpdate:modelValue": (F) => S.name = F,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: W(Ie)
              }, null, 8, Cw), [
                [Se, S.name]
              ]),
              ie(s("select", {
                "onUpdate:modelValue": (F) => S.keyType = F,
                class: W(Ie)
              }, [
                g[31] || (g[31] = s("option", { value: "" }, "Tipo de chave PIX", -1)),
                (w(!0), z(ee, null, De(N(sw), (F) => (w(), z("option", {
                  key: F.value,
                  value: F.value
                }, q(F.label), 9, Tw))), 128))
              ], 8, Aw), [
                [tt, S.keyType]
              ]),
              ie(s("input", {
                "onUpdate:modelValue": (F) => S.key = F,
                type: "text",
                placeholder: "Chave PIX",
                class: W(Ie)
              }, null, 8, Ow), [
                [
                  Se,
                  S.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              g[32] || (g[32] = s("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (w(), z(ee, { key: 1 }, [
              ie(s("input", {
                "onUpdate:modelValue": (F) => S.displayText = F,
                type: "text",
                placeholder: "Texto do botão",
                class: W(Ie)
              }, null, 8, Nw), [
                [Se, S.displayText]
              ]),
              S.type === "url" ? ie((w(), z("input", {
                key: 0,
                "onUpdate:modelValue": (F) => S.url = F,
                type: "url",
                placeholder: "https://…",
                class: W(Ie)
              }, null, 8, Rw)), [
                [
                  Se,
                  S.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : le("", !0),
              S.type === "call" ? ie((w(), z("input", {
                key: 1,
                "onUpdate:modelValue": (F) => S.phoneNumber = F,
                type: "text",
                placeholder: "+5511999998888",
                class: W(Ie)
              }, null, 8, Mw)), [
                [
                  Se,
                  S.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : le("", !0),
              S.type === "copy" ? ie((w(), z("input", {
                key: 2,
                "onUpdate:modelValue": (F) => S.copyCode = F,
                type: "text",
                placeholder: "Código a copiar",
                class: W(Ie)
              }, null, 8, Iw)), [
                [
                  Se,
                  S.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : le("", !0)
            ], 64)),
            s("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (F) => h(L)
            }, "Remover botão", 8, Dw)
          ]))), 128)),
          s("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (w(), z(ee, { key: 4 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-list-title"
          }, "Título"),
          ie(s("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": g[12] || (g[12] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Nossos planos",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.title]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-list-text"
          }, "Descrição"),
          ie(s("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": g[13] || (g[13] = (S) => e.data.text = S),
            rows: "3",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.text]
          ])
        ]),
        s("div", Fw, [
          s("div", null, [
            s("label", {
              class: W(je),
              for: "zr-list-footer"
            }, "Rodapé"),
            ie(s("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": g[14] || (g[14] = (S) => e.data.footer = S),
              type: "text",
              class: W(Ie)
            }, null, 512), [
              [Se, e.data.footer]
            ])
          ]),
          s("div", null, [
            s("label", {
              class: W(je),
              for: "zr-list-button"
            }, "Texto do botão"),
            ie(s("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": g[15] || (g[15] = (S) => e.data.button_text = S),
              type: "text",
              placeholder: "Ver Menu",
              class: W(Ie)
            }, null, 512), [
              [Se, e.data.button_text]
            ])
          ])
        ]),
        s("div", Bw, [
          s("label", {
            class: W(je)
          }, "Seções"),
          (w(!0), z(ee, null, De(b.value, (S, L) => (w(), z("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ie(s("input", {
              "onUpdate:modelValue": (F) => S.title = F,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: W(Ie)
            }, null, 8, Lw), [
              [Se, S.title]
            ]),
            (w(!0), z(ee, null, De(S.rows, (F, O) => (w(), z("div", {
              key: O,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ie(s("input", {
                "onUpdate:modelValue": (E) => F.title = E,
                type: "text",
                placeholder: "Título da opção",
                class: W(Ie)
              }, null, 8, Uw), [
                [Se, F.title]
              ]),
              ie(s("input", {
                "onUpdate:modelValue": (E) => F.description = E,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: W(Ie)
              }, null, 8, Vw), [
                [Se, F.description]
              ]),
              s("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (E) => y(S, O)
              }, "Remover opção", 8, qw)
            ]))), 128)),
            s("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (F) => m(S)
            }, "+ Adicionar opção", 8, jw),
            s("div", Hw, [
              s("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (F) => v(L)
              }, "Remover seção", 8, Gw)
            ])
          ]))), 128)),
          s("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: p
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (w(), z(ee, { key: 5 }, [
        s("div", Ww, [
          s("div", null, [
            s("label", {
              class: W(je),
              for: "zr-lat"
            }, "Latitude"),
            ie(s("input", {
              id: "zr-lat",
              "onUpdate:modelValue": g[16] || (g[16] = (S) => e.data.latitude = S),
              type: "text",
              placeholder: "-23.5505",
              class: W(Ie)
            }, null, 512), [
              [Se, e.data.latitude]
            ])
          ]),
          s("div", null, [
            s("label", {
              class: W(je),
              for: "zr-lng"
            }, "Longitude"),
            ie(s("input", {
              id: "zr-lng",
              "onUpdate:modelValue": g[17] || (g[17] = (S) => e.data.longitude = S),
              type: "text",
              placeholder: "-46.6333",
              class: W(Ie)
            }, null, 512), [
              [Se, e.data.longitude]
            ])
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-loc-name"
          }, "Nome do local"),
          ie(s("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": g[18] || (g[18] = (S) => e.data.location_name = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.location_name]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-loc-address"
          }, "Endereço"),
          ie(s("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": g[19] || (g[19] = (S) => e.data.address = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (w(), z(ee, { key: 6 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-contact-name"
          }, "Nome completo"),
          ie(s("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": g[20] || (g[20] = (S) => e.data.contact_name = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.contact_name]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-contact-phone"
          }, "Telefone"),
          ie(s("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": g[21] || (g[21] = (S) => e.data.contact_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.contact_phone]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ie(s("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": g[22] || (g[22] = (S) => e.data.organization = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (w(), z(ee, { key: 7 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-poll-question"
          }, "Pergunta"),
          ie(s("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": g[23] || (g[23] = (S) => e.data.question = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.question]
          ])
        ]),
        s("div", Yw, [
          s("label", {
            class: W(je)
          }, "Opções (mínimo 2)"),
          (w(!0), z(ee, null, De($.value, (S, L) => (w(), z("div", {
            key: L,
            class: "flex gap-2"
          }, [
            ie(s("input", {
              "onUpdate:modelValue": (F) => $.value[L] = F,
              type: "text",
              class: W(Ie),
              placeholder: `Opção ${L + 1}`
            }, null, 8, Xw), [
              [Se, $.value[L]]
            ]),
            $.value.length > 2 ? (w(), z("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (F) => T(L)
            }, "✕", 8, Kw)) : le("", !0)
          ]))), 128)),
          s("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: k
          }, "+ Adicionar opção")
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ie(s("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": g[24] || (g[24] = (S) => e.data.max_answers = S),
            type: "number",
            min: "1",
            max: $.value.length,
            class: W(Ie)
          }, null, 8, Zw), [
            [
              Se,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (w(), z(ee, { key: 8 }, [
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-link-url"
          }, "URL"),
          ie(s("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": g[25] || (g[25] = (S) => e.data.url = S),
            type: "url",
            placeholder: "https://…",
            class: W(Ie)
          }, null, 512), [
            [
              Se,
              e.data.url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-link-title"
          }, "Título da prévia"),
          ie(s("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": g[26] || (g[26] = (S) => e.data.title = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.title]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ie(s("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": g[27] || (g[27] = (S) => e.data.description = S),
            type: "text",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.description]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ie(s("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": g[28] || (g[28] = (S) => e.data.image_url = S),
            type: "url",
            class: W(Ie)
          }, null, 512), [
            [
              Se,
              e.data.image_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        s("div", null, [
          s("label", {
            class: W(je),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ie(s("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": g[29] || (g[29] = (S) => e.data.text = S),
            rows: "3",
            class: W(Ie)
          }, null, 512), [
            [Se, e.data.text]
          ])
        ])
      ], 64)) : le("", !0),
      r.value ? (w(), z("p", Jw, q(r.value), 1)) : le("", !0)
    ]));
  }
}, Np = {
  customer: { name: "João Silva", first_name: "João", email: "joao@exemplo.com", phone: "5511999998888" },
  order: {
    id: 1042,
    status: "completed",
    amount_formatted: "R$ 197,00",
    product: { name: "Curso VIP" }
  },
  checkout_link: "https://seu-checkout.com/c/curso-vip",
  pix: { copy_paste: "00020126580014BR.GOV.BCB.PIX...", qrcode: "data:image/png;base64,…" },
  boleto: { barcode: "34191.79001 01043.510047 91020.150008 1 96610000019700", pdf_url: "https://…/boleto.pdf" },
  access: { link: "https://area-de-membros.com/acesso", email: "joao@exemplo.com", password: "••••••" }
}, Qw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function e_(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function js(e, t = Np) {
  return e ? e.replace(Qw, (n, r) => {
    const o = e_(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const t_ = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, n_ = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, r_ = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, o_ = { class: "text-xs" }, a_ = { class: "font-bold text-white" }, i_ = { class: "my-4 flex justify-end" }, s_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, l_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, u_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, _l = {
  __name: "MessagePreview",
  props: {
    text: { type: String, default: "" },
    recipientName: { type: String, default: "Cliente" },
    caption: { type: String, default: "" },
    /** '' | image | video | audio | document | buttons */
    mode: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = ne(() => (t.recipientName || "C").trim().charAt(0).toUpperCase()), r = ne(() => {
      const a = t.mode && t.mode !== "text" && t.caption || t.text;
      return a?.trim() ? js(a) : "Sua mensagem aparece aqui…";
    }), o = ne(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (a, i) => (w(), z("div", t_, [
      s("div", n_, [
        s("div", r_, q(n.value), 1),
        s("div", o_, [
          s("div", a_, q(e.recipientName || "Cliente"), 1),
          i[0] || (i[0] = s("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      s("div", i_, [
        s("div", s_, [
          o.value ? (w(), z("span", l_, q(o.value), 1)) : le("", !0),
          re(" " + q(r.value) + " ", 1),
          s("div", u_, [
            i[1] || (i[1] = s("span", null, "12:00", -1)),
            Y(N(Cs), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      i[2] || (i[2] = s("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, d_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, c_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, f_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, p_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, h_ = {
  key: 0,
  class: "space-y-4 p-4"
}, m_ = ["value"], v_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, g_ = {
  key: 0,
  class: "p-4"
}, y_ = {
  key: 1,
  class: "p-4"
}, b_ = {
  key: 2,
  class: "space-y-1 p-4"
}, x_ = { class: "flex gap-2" }, w_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, __ = {
  key: 3,
  class: "space-y-4 p-4"
}, k_ = ["value"], S_ = { key: 0 }, E_ = ["value"], z_ = { key: 1 }, $_ = ["value"], P_ = { key: 2 }, C_ = {
  key: 3,
  class: "space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3.5"
}, A_ = { class: "space-y-2 pt-1" }, T_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, O_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, N_ = {
  key: 4,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, R_ = {
  key: 5,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, M_ = {
  key: 4,
  class: "space-y-3 p-4"
}, I_ = { class: "flex gap-2" }, D_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, F_ = { class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-2.5" }, B_ = { class: "flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer" }, L_ = {
  key: 0,
  class: "space-y-2.5 pt-1 border-t border-teal-500/10"
}, U_ = { class: "space-y-1.5 pt-0.5" }, V_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, q_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, j_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, H_ = {
  key: 1,
  class: "space-y-4 p-4"
}, G_ = { class: "flex items-start justify-between gap-2" }, W_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, Y_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, xt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Mt = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", X_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G("config");
    let a = null, i = null;
    Fe(
      () => [n.node?.id, n.node?.data?.mode],
      ([d, u]) => {
        d === void 0 || u === void 0 || (d === a && u !== i && Object.assign(n.node.data, Cp(u)), a = d, i = u);
      },
      { immediate: !0 }
    ), Fe(
      () => n.node,
      (d) => {
        if (!["delay", "wait_reply"].includes(d?.type) || d.data.delay_value) return;
        const { value: u, unit: c } = uw(d.data.seconds || 0);
        d.data.delay_value = u, d.data.delay_unit = c;
      },
      { immediate: !0 }
    ), Fe(() => n.node?.id, () => {
      o.value = "config";
    });
    function l() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = $p(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (d, u) => (w(), z("aside", d_, [
      e.node ? (w(), z(ee, { key: 0 }, [
        s("div", c_, [
          s("div", null, [
            s("h3", f_, q(N(kn)(e.node.type)), 1),
            s("p", p_, q(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (w(), z("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (c) => r("remove-node", e.node.id))
          }, [
            Y(N(oa), { class: "h-3 w-3" }),
            u[21] || (u[21] = re(" Excluir ", -1))
          ])) : le("", !0)
        ]),
        e.node.type === "trigger" ? (w(), z("div", h_, [
          s("div", null, [
            s("label", {
              class: W(Mt)
            }, "Evento"),
            s("input", {
              class: W([xt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, m_),
            u[22] || (u[22] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (w(), z(ee, { key: 1 }, [
          s("div", v_, [
            s("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (c) => o.value = "config")
            }, " Configurar ", 2),
            s("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (c) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (w(), z("div", g_, [
            Y(_l, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": N(Np).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (w(), z("div", y_, [
            Y(Op, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (w(), z("div", b_, [
          s("label", {
            class: W(Mt),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          s("div", x_, [
            ie(s("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: W(xt),
              onChange: l
            }, null, 544), [
              [
                Se,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ie(s("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (c) => e.node.data.delay_unit = c),
              class: W(xt),
              onChange: l
            }, [...u[23] || (u[23] = [
              s("option", { value: "seconds" }, "Segundos", -1),
              s("option", { value: "minutes" }, "Minutos", -1),
              s("option", { value: "hours" }, "Horas", -1),
              s("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [tt, e.node.data.delay_unit]
            ])
          ]),
          s("p", w_, " Aguarda " + q(e.node.data.delay_value || 0) + " " + q(N(va)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (w(), z("div", __, [
          s("div", null, [
            s("label", {
              class: W(Mt),
              for: "zr-kind"
            }, "Regra de validação"),
            ie(s("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (c) => e.node.data.kind = c),
              class: W(xt)
            }, [
              (w(!0), z(ee, null, De(N(Sp), (c) => (w(), z("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, k_))), 128))
            ], 512), [
              [tt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (w(), z("div", S_, [
            s("label", {
              class: W(Mt),
              for: "zr-order-status"
            }, "Status esperado"),
            ie(s("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (c) => e.node.data.value = c),
              class: W(xt)
            }, [
              (w(!0), z(ee, null, De(N(Ep), (c) => (w(), z("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, E_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (w(), z("div", z_, [
            s("label", {
              class: W(Mt),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ie(s("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (c) => e.node.data.value = c),
              class: W(xt)
            }, [
              (w(!0), z(ee, null, De(N(zp), (c) => (w(), z("option", {
                key: c.value,
                value: c.value
              }, q(c.label), 9, $_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (w(), z("div", P_, [
            s("label", {
              class: W(Mt),
              for: "zr-value"
            }, "Classe do evento"),
            ie(s("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: W(xt)
            }, null, 512), [
              [
                Se,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : e.node.data.kind === "reply_matches" ? (w(), z("div", C_, [
            u[27] || (u[27] = s("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Identificar resposta do cliente", -1)),
            s("div", null, [
              s("label", {
                class: W(Mt),
                for: "zr-reply-mode"
              }, "Modo de correspondência"),
              ie(s("select", {
                id: "zr-reply-mode",
                "onUpdate:modelValue": u[9] || (u[9] = (c) => e.node.data.match_mode = c),
                class: W(xt)
              }, [...u[24] || (u[24] = [
                s("option", { value: "contains" }, "Contém o texto", -1),
                s("option", { value: "exact" }, "Texto exato", -1)
              ])], 512), [
                [tt, e.node.data.match_mode]
              ])
            ]),
            s("div", null, [
              s("label", {
                class: W(Mt),
                for: "zr-reply-value"
              }, "Texto esperado"),
              ie(s("input", {
                id: "zr-reply-value",
                "onUpdate:modelValue": u[10] || (u[10] = (c) => e.node.data.value = c),
                type: "text",
                placeholder: "Ex: eu quero",
                class: W(xt)
              }, null, 512), [
                [Se, e.node.data.value]
              ])
            ]),
            s("div", A_, [
              s("label", T_, [
                ie(s("input", {
                  "onUpdate:modelValue": u[11] || (u[11] = (c) => e.node.data.case_sensitive = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [Rn, e.node.data.case_sensitive]
                ]),
                u[25] || (u[25] = s("span", null, "Diferenciar maiúsculas e minúsculas", -1))
              ]),
              s("label", O_, [
                ie(s("input", {
                  "onUpdate:modelValue": u[12] || (u[12] = (c) => e.node.data.ignore_accents = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [Rn, e.node.data.ignore_accents]
                ]),
                u[26] || (u[26] = s("span", null, 'Ignorar acentos (ex: "não" = "nao", "é" = "e")', -1))
              ])
            ]),
            u[28] || (u[28] = s("p", { class: "text-[11px] text-teal-700 dark:text-teal-300" }, [
              re(" Avalia a última mensagem enviada pelo cliente. Segue por "),
              s("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
              re(" se corresponder, ou "),
              s("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
              re(' caso responda outra coisa (ex: "não"). ')
            ], -1))
          ])) : le("", !0),
          e.node.data.kind === "order_is_paid" ? (w(), z("p", N_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (w(), z("p", R_, [...u[29] || (u[29] = [
            re(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            s("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            re(" se houver bumps, ou ", -1),
            s("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            re(" se comprou apenas o produto principal. ", -1)
          ])])) : le("", !0),
          u[30] || (u[30] = s("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            re(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            s("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            re(" e outra do ponto "),
            s("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            re(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (w(), z("div", M_, [
          s("div", null, [
            s("label", {
              class: W(Mt),
              for: "zr-wait-value"
            }, "Tempo máximo de espera"),
            s("div", I_, [
              ie(s("input", {
                id: "zr-wait-value",
                "onUpdate:modelValue": u[13] || (u[13] = (c) => e.node.data.delay_value = c),
                type: "number",
                min: "1",
                class: W(xt),
                onChange: l
              }, null, 544), [
                [
                  Se,
                  e.node.data.delay_value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ie(s("select", {
                "onUpdate:modelValue": u[14] || (u[14] = (c) => e.node.data.delay_unit = c),
                class: W(xt),
                onChange: l
              }, [...u[31] || (u[31] = [
                s("option", { value: "seconds" }, "Segundos", -1),
                s("option", { value: "minutes" }, "Minutos", -1),
                s("option", { value: "hours" }, "Horas", -1),
                s("option", { value: "days" }, "Dias", -1)
              ])], 544), [
                [tt, e.node.data.delay_unit]
              ])
            ]),
            s("p", D_, " Espera até " + q(e.node.data.delay_value || 0) + " " + q(N(va)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente na Evolution GO. ", 1)
          ]),
          s("div", F_, [
            s("label", B_, [
              ie(s("input", {
                "onUpdate:modelValue": u[15] || (u[15] = (c) => e.node.data.filter_reply = c),
                type: "checkbox",
                class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
              }, null, 512), [
                [Rn, e.node.data.filter_reply]
              ]),
              u[32] || (u[32] = s("span", null, "Filtrar resposta esperada (opcional)", -1))
            ]),
            e.node.data.filter_reply ? (w(), z("div", L_, [
              s("div", null, [
                s("label", {
                  class: W(Mt),
                  for: "zr-wait-filter-mode"
                }, "Tipo de correspondência"),
                ie(s("select", {
                  id: "zr-wait-filter-mode",
                  "onUpdate:modelValue": u[16] || (u[16] = (c) => e.node.data.match_mode = c),
                  class: W(xt)
                }, [...u[33] || (u[33] = [
                  s("option", { value: "contains" }, "Contém o texto", -1),
                  s("option", { value: "exact" }, "Texto exato", -1)
                ])], 512), [
                  [tt, e.node.data.match_mode]
                ])
              ]),
              s("div", null, [
                s("label", {
                  class: W(Mt),
                  for: "zr-wait-filter-text"
                }, "Texto esperado"),
                ie(s("input", {
                  id: "zr-wait-filter-text",
                  "onUpdate:modelValue": u[17] || (u[17] = (c) => e.node.data.match_text = c),
                  type: "text",
                  placeholder: "Ex: eu quero",
                  class: W(xt)
                }, null, 512), [
                  [Se, e.node.data.match_text]
                ])
              ]),
              s("div", U_, [
                s("label", V_, [
                  ie(s("input", {
                    "onUpdate:modelValue": u[18] || (u[18] = (c) => e.node.data.case_sensitive = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [Rn, e.node.data.case_sensitive]
                  ]),
                  u[34] || (u[34] = s("span", null, "Diferenciar maiúsculas/minúsculas", -1))
                ]),
                s("label", q_, [
                  ie(s("input", {
                    "onUpdate:modelValue": u[19] || (u[19] = (c) => e.node.data.ignore_accents = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [Rn, e.node.data.ignore_accents]
                  ]),
                  u[35] || (u[35] = s("span", null, 'Ignorar acentos (ex: "não" = "nao")', -1))
                ])
              ]),
              u[36] || (u[36] = s("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, [
                re(" Apenas respostas que atenderem a este critério ativarão a saída "),
                s("strong", { class: "text-teal-600 dark:text-teal-400" }, "RESPONDEU"),
                re(". Respostas divergentes continuarão aguardando até o tempo esgotar. ")
              ], -1))
            ])) : le("", !0)
          ]),
          u[37] || (u[37] = s("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            re(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            s("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            re(" (o cliente mandou uma mensagem) e outra do ponto "),
            s("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            re(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (w(), z("p", j_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (w(), z("div", H_, [
        s("div", G_, [
          s("div", null, [
            u[38] || (u[38] = s("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            s("p", W_, q(e.edge.source) + " → " + q(e.edge.target), 1)
          ]),
          s("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[20] || (u[20] = (c) => r("remove-edge", e.edge.id))
          }, [
            Y(N(oa), { class: "h-3 w-3" }),
            u[39] || (u[39] = re(" Excluir ", -1))
          ])
        ]),
        u[40] || (u[40] = s("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (w(), z("p", Y_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, K_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, Z_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, J_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, Q_ = { class: "flex items-center gap-2" }, e2 = { class: "mt-6 space-y-4" }, t2 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, n2 = { class: "mt-2.5 flex items-center gap-2" }, r2 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, o2 = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, a2 = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, i2 = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, s2 = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, l2 = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, u2 = { class: "flex items-center gap-3" }, d2 = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, c2 = { class: "flex items-center gap-2" }, f2 = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, p2 = {
  key: 0,
  class: "flex justify-center my-1"
}, h2 = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, m2 = {
  key: 1,
  class: "flex justify-start"
}, v2 = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, g2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, y2 = {
  key: 2,
  class: "flex justify-end"
}, b2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, x2 = { class: "leading-relaxed" }, w2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, _2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, k2 = ["disabled", "placeholder"], S2 = ["disabled"], E2 = {
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
    const i = G(!1), l = G(""), d = G(!1), u = G(null), c = G("");
    function f(C, _, g = "contains", S = !1, L = !0) {
      let F = (C || "").trim(), O = (_ || "").trim();
      return O ? (L && (F = F.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), O = O.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), S || (F = F.toLowerCase(), O = O.toLowerCase()), g === "exact" ? F === O : F.includes(O)) : !0;
    }
    ne(() => n.nodes.find((C) => C.id === o.value));
    function h() {
      const C = /* @__PURE__ */ new Date();
      return `${String(C.getHours()).padStart(2, "0")}:${String(C.getMinutes()).padStart(2, "0")}`;
    }
    function b() {
      a.value = [], i.value = !1, u.value = null, l.value = "";
      const C = n.nodes.find((_) => _.type === "trigger");
      if (!C) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: h()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${C.data?.event_class || "Evento do Fluxo"}`,
        time: h()
      }), o.value = C.id, v();
    }
    function p(C, _ = null) {
      return n.edges.find((g) => g.source !== C ? !1 : _ === null ? !0 : (g.sourceHandle === "yes" || g.sourceHandle === "replied" || g.data?.condition === "true" ? "true" : g.sourceHandle === "no" || g.sourceHandle === "timeout" || g.data?.condition === "false" ? "false" : null) === _);
    }
    function v() {
      if (!o.value) return;
      const C = n.nodes.find((_) => _.id === o.value);
      if (C) {
        if (C.type === "trigger") {
          const _ = p(C.id);
          if (!_) return T("Fluxo finalizado após o gatilho.");
          o.value = _.target, m();
          return;
        }
        if (C.type === "send_message") {
          const _ = p(C.id);
          if (!_) return T("Fim do fluxo atingido.");
          o.value = _.target, m();
          return;
        }
        if (C.type === "delay") {
          const _ = p(C.id);
          if (!_) return T("Fim do fluxo atingido.");
          o.value = _.target, m();
          return;
        }
        if (C.type === "condition") {
          let _ = "false";
          if (C.data?.kind === "reply_matches") {
            const S = C.data?.value || "", L = C.data?.match_mode || "contains", F = !!C.data?.case_sensitive, O = C.data?.ignore_accents !== !1;
            _ = f(c.value, S, L, F, O) ? "true" : "false";
          } else
            _ = d.value ? "true" : "false";
          const g = p(C.id, _);
          if (!g) return T(`Fim do fluxo (ramificação ${_ === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = g.target, m();
          return;
        }
        C.type === "end" && T("Fluxo finalizado com sucesso.");
      }
    }
    function m() {
      const C = n.nodes.find((_) => _.id === o.value);
      if (C) {
        if (C.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: C.data?.mode || "text",
            text: C.data?.text || C.data?.caption || "Mensagem enviada",
            data: C.data || {},
            time: h()
          }), setTimeout(v, 800);
          return;
        }
        if (C.type === "delay") {
          const _ = C.data?.delay_value || 15, g = C.data?.delay_unit || "minutes";
          u.value = `${_} ${g}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${_} ${g}...`,
            time: h()
          });
          return;
        }
        if (C.type === "condition") {
          if (C.data?.kind === "reply_matches") {
            const _ = C.data?.value || "", g = C.data?.match_mode || "contains", S = !!C.data?.case_sensitive, L = C.data?.ignore_accents !== !1, F = f(c.value, _, g, S, L);
            a.value.push({
              type: "system",
              text: `🔀 Avaliando resposta do cliente: "${c.value || "(vazia)"}" ${g === "exact" ? "igual a" : "contém"} "${_}" -> ${F ? "SIM" : "NÃO"}`,
              time: h()
            });
          } else {
            const _ = d.value;
            a.value.push({
              type: "system",
              text: `🔀 Avaliando condição: Pedido pago? -> ${_ ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
              time: h()
            });
          }
          setTimeout(v, 600);
          return;
        }
        if (C.type === "wait_reply") {
          i.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: h()
          });
          return;
        }
        C.type === "end" && T("Fluxo concluído.");
      }
    }
    function y() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: h()
      }), v());
    }
    function $() {
      if (!l.value.trim()) return;
      const C = l.value.trim();
      l.value = "", c.value = C, a.value.push({
        type: "user",
        text: C,
        time: h()
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
            time: h()
          });
          return;
        }
        i.value = !1;
        const g = p(_.id, "true");
        if (!g) return T("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = g.target, setTimeout(m, 500);
      }
    }
    function k() {
      i.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: h()
      });
      const C = n.nodes.find((_) => _.id === o.value);
      if (C && C.type === "wait_reply") {
        const _ = p(C.id, "false");
        if (!_) return T("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = _.target, setTimeout(m, 500);
      }
    }
    function T(C) {
      a.value.push({
        type: "system",
        text: `🏁 ${C}`,
        time: h()
      }), o.value = null;
    }
    return Ke(b), (C, _) => (w(), z("div", K_, [
      s("div", Z_, [
        s("div", J_, [
          s("div", Q_, [
            Y(N(ra), { class: "h-4 w-4 text-emerald-500" }),
            _[4] || (_[4] = s("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          _[11] || (_[11] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          s("div", e2, [
            s("div", t2, [
              _[5] || (_[5] = s("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              _[6] || (_[6] = s("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              s("div", n2, [
                s("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: _[0] || (_[0] = (g) => d.value = !0)
                }, " SIM (Pago) ", 2),
                s("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: _[1] || (_[1] = (g) => d.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (w(), z("div", r2, [
              s("div", o2, [
                Y(N(Bn), { class: "h-4 w-4" }),
                s("span", null, "Aguardando: " + q(u.value), 1)
              ]),
              s("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: y
              }, [
                Y(N(Mh), { class: "h-3.5 w-3.5" }),
                _[7] || (_[7] = s("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : le("", !0),
            i.value ? (w(), z("div", a2, [
              _[9] || (_[9] = s("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              s("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: k
              }, [..._[8] || (_[8] = [
                s("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : le("", !0)
          ]),
          s("div", i2, [
            s("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: b
            }, [
              Y(N(On), { class: "h-3.5 w-3.5" }),
              _[10] || (_[10] = s("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        s("div", s2, [
          s("div", l2, [
            s("div", u2, [
              _[13] || (_[13] = s("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              s("div", null, [
                s("div", d2, q(e.flow.name), 1),
                _[12] || (_[12] = s("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            s("div", c2, [
              s("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: _[2] || (_[2] = (g) => r("close"))
              }, [
                Y(N(Yt), { class: "h-4 w-4" })
              ])
            ])
          ]),
          s("div", f2, [
            (w(!0), z(ee, null, De(a.value, (g, S) => (w(), z(ee, { key: S }, [
              g.type === "system" ? (w(), z("div", p2, [
                s("span", h2, q(g.text), 1)
              ])) : g.type === "bot" ? (w(), z("div", m2, [
                s("div", v2, [
                  Y(_l, {
                    text: g.text,
                    mode: g.mode,
                    caption: g.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  s("div", g2, [
                    s("span", null, q(g.time), 1),
                    Y(N(Cs), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : g.type === "user" ? (w(), z("div", y2, [
                s("div", b2, [
                  s("p", x2, q(g.text), 1),
                  s("div", w2, [
                    s("span", null, q(g.time), 1),
                    Y(N(Cs), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : le("", !0)
            ], 64))), 128))
          ]),
          s("div", _2, [
            s("form", {
              class: "flex items-center gap-2",
              onSubmit: Sn($, ["prevent"])
            }, [
              ie(s("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (g) => l.value = g),
                type: "text",
                disabled: !i.value,
                placeholder: i.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, k2), [
                [Se, l.value]
              ]),
              s("button", {
                type: "submit",
                disabled: !i.value || !l.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                Y(N(hn), { class: "h-4 w-4" })
              ], 8, S2)
            ], 32)
          ])
        ])
      ])
    ]));
  }
};
function sr(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function z2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const $2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function P2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return $2[e]?.[t];
}
function Mo(e, t = {}) {
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
  return e === "delay" ? t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${va(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s` : e === "condition" ? t.kind === "order_status_is" ? `Status do pedido é "${Ep.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${zp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : Sp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?" : e === "wait_reply" ? t.delay_value && t.delay_unit ? `Espera até ${t.delay_value} ${va(t.delay_unit)}` : `Espera até ${Math.max(0, Number(t.seconds) || 0)}s` : e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function C2(e, t = "") {
  const n = sr(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => sr(u) && u.id).map((u, c) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + c % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(c / 4) * 170
    },
    data: sr(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  a.some((u) => u.type === "trigger") || a.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: Pp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const i = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), d = o.filter((u) => sr(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, c) => {
    const f = sr(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${c}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: P2(i.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: a, edges: d };
}
function A2(e, t) {
  const n = sr(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = $p(n.delay_value, n.delay_unit)), n;
}
function T2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function O2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: A2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = T2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function N2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : z2(e),
    type: e,
    position: t,
    data: Pp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: kn(e)
  };
}
function st(e) {
  return String(e ?? "").trim();
}
function R2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? st(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : st(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? st(e.url) !== "" : t === "call" ? st(e.phoneNumber) !== "" : t === "copy" ? st(e.copyCode) !== "" : !0;
}
function M2(e) {
  return st(e?.title) !== "";
}
function Rp(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && st(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && st(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(R2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(M2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
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
function I2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, a = st(o.mode) || "text";
    t.push(...Rp(o, `Bloco "Enviar mensagem" (${a})`));
  }
  return t;
}
const D2 = { class: "flex h-full flex-col lg:flex-row" }, F2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, B2 = { class: "mb-4 flex items-center justify-between" }, L2 = { class: "space-y-2" }, U2 = ["onDragstart", "onClick"], V2 = { class: "text-xs font-bold" }, q2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, j2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, H2 = ["disabled"], G2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, W2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, Y2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, X2 = { class: "flex-1 text-xs" }, K2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, Z2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, J2 = { class: "flex items-center gap-2" }, Q2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, ek = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, tk = { class: "p-3" }, nk = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, rk = { class: "truncate" }, ok = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, ak = { class: "flex items-center gap-2" }, ik = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, sk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, lk = { class: "flex items-center gap-1.5" }, uk = ["onClick"], dk = { class: "p-3" }, ck = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, fk = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, pk = {
  key: 1,
  class: "space-y-1"
}, hk = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, mk = { class: "text-[10px] text-zinc-500" }, vk = {
  key: 2,
  class: "space-y-1.5"
}, gk = { class: "text-[11px] leading-snug line-clamp-2" }, yk = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, bk = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, xk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, wk = { class: "flex items-center gap-2" }, _k = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, kk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Sk = ["onClick"], Ek = { class: "p-3" }, zk = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, $k = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Pk = { class: "flex items-center gap-2" }, Ck = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, Ak = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Tk = ["onClick"], Ok = { class: "p-3 space-y-2.5 pb-12" }, Nk = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, Rk = { class: "line-clamp-2" }, Mk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Ik = { class: "flex items-center gap-2" }, Dk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, Fk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Bk = ["onClick"], Lk = { class: "p-3 space-y-2.5 pb-12" }, Uk = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Vk = { class: "line-clamp-2" }, qk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, jk = { class: "flex items-center gap-2" }, Hk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, Gk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Wk = ["onClick"], Yk = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = G([]), i = G([]), l = G(null), d = G(null), u = G([]), c = G(!1), f = {
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
    function h(x) {
      return f[x] || { label: x || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: b, addEdges: p, project: v, fitView: m } = Ge(), y = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Hn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: au, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: Bn, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: ou, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: iu, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: ru, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], $ = ne(() => r.flow?.trigger_event || ""), k = ne(() => a.value.find((x) => x.id === l.value) || null), T = ne(() => i.value.find((x) => x.id === d.value) || null), C = {
      type: "zaprei",
      markerEnd: fa.ArrowClosed,
      data: {}
    };
    Fe(
      () => r.flow?.id,
      () => {
        const x = C2(r.flow?.graph_json, $.value);
        a.value = x.nodes, i.value = x.edges, l.value = null, d.value = null, setTimeout(() => m({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), b((x) => {
      p([{
        ...x,
        ...C,
        sourceHandle: x.sourceHandle,
        data: { sourceHandle: x.sourceHandle }
      }]);
    });
    function _(x) {
      l.value = x, d.value = null;
    }
    function g(x) {
      d.value = x, l.value = null;
    }
    function S() {
      l.value = null, d.value = null;
    }
    function L(x, I) {
      if (x === "trigger" && a.value.some((Q) => Q.type === "trigger"))
        return;
      const R = N2(x, I || { x: 420, y: 320 }, $.value);
      a.value = [...a.value, R], _(R.id);
    }
    function F(x) {
      !x || a.value.find((I) => I.id === x)?.type === "trigger" || (a.value = a.value.filter((I) => I.id !== x), i.value = i.value.filter((I) => I.source !== x && I.target !== x), l.value === x && (l.value = null));
    }
    function O(x) {
      i.value = i.value.filter((I) => I.id !== x), d.value === x && (d.value = null);
    }
    function E(x, I) {
      x.dataTransfer?.setData("application/zaprei-node", I), x.dataTransfer.effectAllowed = "move";
    }
    function U(x) {
      x.preventDefault(), x.dataTransfer.dropEffect = "move";
    }
    function A(x) {
      x.preventDefault();
      const I = x.dataTransfer?.getData("application/zaprei-node");
      if (!I) return;
      const R = x.currentTarget.getBoundingClientRect(), Q = v({
        x: x.clientX - R.left,
        y: x.clientY - R.top
      });
      L(I, Q);
    }
    function j() {
      const x = O2(a.value, i.value), I = I2(x);
      u.value = I, !I.length && o("save", x);
    }
    return t({
      requestSave: j,
      handleSave: j
    }), (x, I) => (w(), z("div", D2, [
      s("aside", F2, [
        s("div", B2, [
          I[8] || (I[8] = s("div", null, [
            s("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            s("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          s("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: I[0] || (I[0] = (R) => c.value = !0)
          }, [
            Y(N(ra), { class: "h-3.5 w-3.5" }),
            I[7] || (I[7] = s("span", null, "Simulador", -1))
          ])
        ]),
        s("div", L2, [
          (w(), z(ee, null, De(y, (R) => s("div", {
            key: R.type,
            draggable: "true",
            class: W(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", R.color]),
            onDragstart: (Q) => E(Q, R.type),
            onClick: (Q) => L(R.type)
          }, [
            (w(), Ae(Dt(R.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            s("div", null, [
              s("div", V2, q(R.title), 1),
              s("div", q2, q(R.desc), 1)
            ])
          ], 42, U2)), 64))
        ]),
        s("div", j2, [
          s("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: j
          }, [
            s("span", null, q(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, H2)
        ])
      ]),
      s("main", {
        class: "relative h-full flex-1",
        onDragover: U,
        onDrop: A
      }, [
        Y(kh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: ot(() => [
            u.value.length ? (w(), z("div", G2, [
              s("div", W2, [
                s("div", Y2, [
                  Y(N(Xr), { class: "h-4 w-4" })
                ]),
                s("div", X2, [
                  I[9] || (I[9] = s("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  s("ul", K2, [
                    (w(!0), z(ee, null, De(u.value, (R, Q) => (w(), z("li", { key: Q }, q(R), 1))), 128))
                  ])
                ]),
                s("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: I[1] || (I[1] = (R) => u.value = [])
                }, [
                  Y(N(Yt), { class: "h-4 w-4" })
                ])
              ])
            ])) : le("", !0)
          ]),
          _: 1
        }),
        Y(N(v1), {
          nodes: a.value,
          "onUpdate:nodes": I[2] || (I[2] = (R) => a.value = R),
          edges: i.value,
          "onUpdate:edges": I[3] || (I[3] = (R) => i.value = R),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": C,
          onNodeClick: I[4] || (I[4] = (R) => _(R.node?.id)),
          onEdgeClick: I[5] || (I[5] = (R) => g(R.edge?.id)),
          onPaneClick: S
        }, {
          "edge-zaprei": ot((R) => [
            Y(rw, Pa(R, { onRemove: O }), null, 16)
          ]),
          "node-trigger": ot((R) => [
            s("div", {
              class: W(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "source",
                position: N(me).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              s("div", Z2, [
                s("div", J2, [
                  s("div", Q2, [
                    Y(N(Hn), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", ek, q(N(kn)("trigger")), 1)
                ]),
                I[10] || (I[10] = s("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              s("div", tk, [
                s("div", nk, [
                  I[11] || (I[11] = s("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  s("span", rk, q(N(Mo)("trigger", R.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": ot((R) => [
            s("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "target",
                position: N(me).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(dt), {
                type: "source",
                position: N(me).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              s("div", ok, [
                s("div", ak, [
                  s("div", ik, [
                    Y(N(au), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", sk, q(N(kn)("send_message")), 1)
                ]),
                s("div", lk, [
                  s("span", {
                    class: W(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", h(R.data?.mode).color])
                  }, q(h(R.data?.mode).label), 3),
                  s("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: Sn((Q) => F(R.id), ["stop"])
                  }, [
                    Y(N(Yt), { class: "h-3.5 w-3.5" })
                  ], 8, uk)
                ])
              ]),
              s("div", dk, [
                s("div", ck, [
                  R.data?.mode === "audio" ? (w(), z("div", fk, [
                    Y(N(Dh), { class: "h-3.5 w-3.5" }),
                    I[12] || (I[12] = s("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    I[13] || (I[13] = s("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : R.data?.mode === "poll" ? (w(), z("div", pk, [
                    s("div", hk, "📊 " + q(R.data?.question || "Pergunta da enquete..."), 1),
                    s("div", mk, q((R.data?.options || []).length) + " opções configuradas", 1)
                  ])) : R.data?.mode === "buttons" ? (w(), z("div", vk, [
                    s("p", gk, q(R.data?.text || "Texto da mensagem..."), 1),
                    (R.data?.buttons || []).length ? (w(), z("div", yk, [
                      (w(!0), z(ee, null, De((R.data?.buttons || []).slice(0, 3), (Q, te) => (w(), z("span", {
                        key: te,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, q(Q.label || `Botão ${te + 1}`), 1))), 128))
                    ])) : le("", !0)
                  ])) : (w(), z("div", bk, q(R.data?.text || R.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": ot((R) => [
            s("div", {
              class: W(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "target",
                position: N(me).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(dt), {
                type: "source",
                position: N(me).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              s("div", xk, [
                s("div", wk, [
                  s("div", _k, [
                    Y(N(Bn), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", kk, q(N(kn)("delay")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: Sn((Q) => F(R.id), ["stop"])
                }, [
                  Y(N(Yt), { class: "h-3.5 w-3.5" })
                ], 8, Sk)
              ]),
              s("div", Ek, [
                s("div", zk, [
                  I[14] || (I[14] = s("span", { class: "relative flex h-2 w-2" }, [
                    s("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    s("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  s("span", null, q(N(Mo)("delay", R.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": ot((R) => [
            s("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "target",
                position: N(me).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              s("div", $k, [
                s("div", Pk, [
                  s("div", Ck, [
                    Y(N(ou), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", Ak, q(N(kn)("condition")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: Sn((Q) => F(R.id), ["stop"])
                }, [
                  Y(N(Yt), { class: "h-3.5 w-3.5" })
                ], 8, Tk)
              ]),
              s("div", Ok, [
                s("div", Nk, [
                  s("span", Rk, q(N(Mo)("condition", R.data)), 1)
                ]),
                I[15] || (I[15] = s("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                Y(N(dt), {
                  id: "yes",
                  type: "source",
                  position: N(me).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                I[16] || (I[16] = s("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                Y(N(dt), {
                  id: "no",
                  type: "source",
                  position: N(me).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": ot((R) => [
            s("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "target",
                position: N(me).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              s("div", Mk, [
                s("div", Ik, [
                  s("div", Dk, [
                    Y(N(iu), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", Fk, q(N(kn)("wait_reply")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: Sn((Q) => F(R.id), ["stop"])
                }, [
                  Y(N(Yt), { class: "h-3.5 w-3.5" })
                ], 8, Bk)
              ]),
              s("div", Lk, [
                s("div", Uk, [
                  s("span", Vk, q(N(Mo)("wait_reply", R.data)), 1)
                ]),
                I[17] || (I[17] = s("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                Y(N(dt), {
                  id: "replied",
                  type: "source",
                  position: N(me).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                I[18] || (I[18] = s("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                Y(N(dt), {
                  id: "timeout",
                  type: "source",
                  position: N(me).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": ot((R) => [
            s("div", {
              class: W(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", R.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(dt), {
                type: "target",
                position: N(me).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              s("div", qk, [
                s("div", jk, [
                  s("div", Hk, [
                    Y(N(ru), { class: "h-3.5 w-3.5" })
                  ]),
                  s("span", Gk, q(N(kn)("end")), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: Sn((Q) => F(R.id), ["stop"])
                }, [
                  Y(N(Yt), { class: "h-3.5 w-3.5" })
                ], 8, Wk)
              ]),
              I[19] || (I[19] = s("div", { class: "p-3" }, [
                s("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: ot(() => [
            Y(N(E1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            Y(N(nw))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      Y(X_, {
        node: k.value,
        edge: T.value,
        onRemoveNode: F,
        onRemoveEdge: O
      }, null, 8, ["node", "edge"]),
      c.value ? (w(), Ae(E2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: i.value,
        onClose: I[6] || (I[6] = (R) => c.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : le("", !0)
    ]));
  }
}, Xk = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Kk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Zk = { class: "flex items-center gap-3" }, Jk = ["disabled"], Qk = { class: "flex items-center gap-2" }, e5 = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, t5 = { class: "text-sm font-bold" }, n5 = ["disabled"], r5 = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, Mp = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(!1), a = G("");
    async function i(l) {
      o.value = !0, a.value = "";
      try {
        await Te.updateFlow(n.flow.id, { graph_json: l }), r("saved"), r("close");
      } catch (d) {
        a.value = d.message, o.value = !1;
      }
    }
    return (l, d) => (w(), Ae(Qc, { to: "body" }, [
      s("div", Xk, [
        s("header", Kk, [
          s("div", Zk, [
            s("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: o.value,
              onClick: d[0] || (d[0] = (u) => r("close"))
            }, [
              Y(N(tf), { class: "h-4 w-4 text-emerald-500" }),
              d[2] || (d[2] = s("span", null, "Voltar para Automações", -1))
            ], 8, Jk),
            d[4] || (d[4] = s("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            s("div", Qk, [
              s("div", e5, [
                Y(N(lf), { class: "h-4 w-4" })
              ]),
              s("div", null, [
                s("div", t5, q(e.flow.name || "Editor de Fluxo Visual"), 1),
                d[3] || (d[3] = s("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          s("button", {
            type: "button",
            disabled: o.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: d[1] || (d[1] = (u) => l.$refs.canvas?.requestSave())
          }, [
            o.value ? (w(), Ae(N(ht), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (w(), Ae(N(Fh), {
              key: 1,
              class: "h-4 w-4"
            })),
            s("span", null, q(o.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, n5)
        ]),
        a.value ? (w(), z("p", r5, [
          Y(N(Xr), { class: "h-4 w-4 shrink-0" }),
          s("span", null, q(a.value), 1)
        ])) : le("", !0),
        Y(Yk, {
          ref: "canvas",
          flow: e.flow,
          saving: o.value,
          class: "flex-1 overflow-hidden",
          onSave: i
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, o5 = { class: "truncate" }, a5 = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, i5 = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, s5 = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, l5 = ["checked", "onChange"], u5 = { class: "truncate" }, gr = {
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
    function i(b) {
      a.value && !a.value.contains(b.target) && u();
    }
    function l() {
      o.value ? u() : d();
    }
    function d() {
      o.value = !0, document.addEventListener("click", i, !0);
    }
    function u() {
      o.value = !1, document.removeEventListener("click", i, !0);
    }
    function c(b) {
      r("update:modelValue", n.modelValue.includes(b) ? n.modelValue.filter((p) => p !== b) : [...n.modelValue, b]);
    }
    function f() {
      r("update:modelValue", []);
    }
    $a(() => document.removeEventListener("click", i, !0));
    const h = ne(() => {
      if (!n.modelValue.length) return n.placeholder;
      const b = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${b})`;
    });
    return (b, p) => (w(), z("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      s("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        s("span", o5, q(h.value), 1),
        Y(N(Nh), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (w(), z("div", a5, [
        e.options.length ? (w(), z(ee, { key: 1 }, [
          e.matchMode ? (w(), z("div", s5, [
            s("button", {
              type: "button",
              class: W(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: p[0] || (p[0] = (v) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            s("button", {
              type: "button",
              class: W(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: p[1] || (p[1] = (v) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : le("", !0),
          e.modelValue.length ? (w(), z("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : le("", !0),
          (w(!0), z(ee, null, De(e.options, (v) => (w(), z("label", {
            key: v.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            s("span", {
              class: W(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(v.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(v.value) ? (w(), Ae(N(rf), {
                key: 0,
                class: "h-3 w-3"
              })) : le("", !0)
            ], 2),
            s("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(v.value),
              onChange: (m) => c(v.value)
            }, null, 40, l5),
            s("span", u5, q(v.label), 1)
          ]))), 128))
        ], 64)) : (w(), z("p", i5, "Nenhuma opção disponível."))
      ])) : le("", !0)
    ], 512));
  }
}, d5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, c5 = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, f5 = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, p5 = { class: "flex items-center gap-2.5" }, h5 = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, m5 = { class: "space-y-4 p-5" }, v5 = ["value"], g5 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, y5 = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, b5 = ["disabled"], x5 = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G([]), a = G(!1), i = G(""), l = ln({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Vn[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), d = ne(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await Te.products()).products || [];
      } catch {
        o.value = [];
      }
    }
    async function c() {
      if (!l.name.trim()) {
        i.value = "Informe um nome para o fluxo.";
        return;
      }
      a.value = !0, i.value = "";
      try {
        await Te.updateFlow(n.flow.id, {
          name: l.name.trim(),
          trigger_event: l.trigger_event,
          product_ids: l.product_ids.length ? l.product_ids : null
        }), r("saved"), r("close");
      } catch (f) {
        i.value = f.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(u), (f, h) => (w(), z("div", d5, [
      s("div", c5, [
        s("div", f5, [
          s("div", p5, [
            s("div", h5, [
              Y(N(pf), { class: "h-4 w-4" })
            ]),
            h[5] || (h[5] = s("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          s("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (b) => r("close"))
          }, [
            Y(N(Yt), { class: "h-4 w-4" })
          ])
        ]),
        s("div", m5, [
          s("div", null, [
            h[6] || (h[6] = s("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ie(s("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": h[1] || (h[1] = (b) => l.name = b),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [Se, l.name]
            ])
          ]),
          s("div", null, [
            h[7] || (h[7] = s("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ie(s("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": h[2] || (h[2] = (b) => l.trigger_event = b),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (w(!0), z(ee, null, De(N(Vn), (b) => (w(), z("option", {
                key: b.id,
                value: b.eventClass
              }, q(b.label), 9, v5))), 128))
            ], 512), [
              [tt, l.trigger_event]
            ]),
            h[8] || (h[8] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          s("div", null, [
            h[9] || (h[9] = s("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            Y(gr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": h[3] || (h[3] = (b) => l.product_ids = b),
              options: d.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          i.value ? (w(), z("p", g5, q(i.value), 1)) : le("", !0)
        ]),
        s("div", y5, [
          s("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[4] || (h[4] = (b) => r("close"))
          }, " Cancelar "),
          s("button", {
            type: "button",
            disabled: a.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: c
          }, q(a.value ? "Salvando…" : "Salvar"), 9, b5)
        ])
      ])
    ]));
  }
}, w5 = [
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
], _5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, k5 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, S5 = ["onClick"], E5 = { class: "flex items-center justify-between" }, z5 = { class: "text-2xl" }, $5 = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, P5 = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, C5 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, A5 = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (w(), z("div", _5, [
      n[1] || (n[1] = s("div", { class: "mb-4 flex items-center justify-between" }, [
        s("div", null, [
          s("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      s("div", k5, [
        (w(!0), z(ee, null, De(N(w5), (r) => (w(), z("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          s("div", null, [
            s("div", E5, [
              s("span", z5, q(r.icon), 1),
              s("span", $5, q(r.badge), 1)
            ]),
            s("h3", P5, q(r.title), 1),
            s("p", C5, q(r.description), 1)
          ]),
          n[0] || (n[0] = s("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            s("span", null, "Usar modelo"),
            s("span", null, "→")
          ], -1))
        ], 8, S5))), 128))
      ])
    ]));
  }
}, T5 = { class: "space-y-4 text-zinc-900 dark:text-white" }, O5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, N5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, R5 = { class: "flex flex-wrap items-center gap-2" }, M5 = { class: "relative w-64" }, I5 = ["value"], D5 = { class: "flex items-center gap-3" }, F5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, B5 = ["disabled"], L5 = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, U5 = { class: "grid gap-3 sm:grid-cols-3" }, V5 = ["value"], q5 = { class: "flex gap-2" }, j5 = ["disabled"], H5 = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, G5 = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, W5 = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, Y5 = {
  key: 4,
  class: "py-10 text-center"
}, X5 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, K5 = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, Z5 = { class: "flex items-start justify-between gap-2" }, J5 = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, Q5 = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, eS = ["title", "disabled", "onClick"], tS = { class: "mt-2" }, nS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, rS = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, oS = { class: "flex items-center gap-1" }, aS = ["onClick"], iS = ["disabled", "onClick"], sS = ["disabled", "onClick"], lS = ["disabled", "onClick"], uS = ["onClick"], dS = ["onClick"], cS = {
  __name: "FlowsPanel",
  setup(e) {
    const t = G([]), n = G([]), r = G(!0), o = G(!1), a = G(""), i = G(""), l = G(!1), d = G(""), u = G("all"), c = G(null), f = G(null), h = G({ name: "", trigger_event: Vn[3].eventClass, product_ids: [] }), b = G(!1), p = ne(() => {
      const O = d.value.trim().toLowerCase();
      return t.value.filter((E) => u.value !== "all" && E.trigger_event !== u.value ? !1 : !O || `${E.name} ${Wo(E.trigger_event)}`.toLowerCase().includes(O));
    }), v = ne(() => n.value.map((O) => ({ value: O.id, label: O.name })));
    function m(O) {
      if (!O || !O.length) return "Todos os produtos";
      const E = O.map((U) => n.value.find((A) => A.id === U)?.name).filter(Boolean);
      return E.length ? E.length > 2 ? `${E.slice(0, 2).join(", ")} +${E.length - 2}` : E.join(", ") : "Todos os produtos";
    }
    async function y() {
      r.value = !0, a.value = "";
      try {
        const [O, E] = await Promise.all([Te.flows(), Te.products()]);
        t.value = O.flows || [], n.value = E.products || [];
      } catch (O) {
        a.value = O.message;
      } finally {
        r.value = !1;
      }
    }
    async function $(O) {
      o.value = !0, a.value = "";
      try {
        await O(), await y();
      } catch (E) {
        a.value = E.message;
      } finally {
        o.value = !1;
      }
    }
    function k(O) {
      const E = window.prompt(`Testar "${O.name}" — número de WhatsApp com DDD (ex: 11999998888):`);
      if (!(!E || !E.trim()))
        return i.value = "", $(async () => {
          await Te.testFlow(O.id, E.trim()), i.value = `Fluxo "${O.name}" disparado para ${E.trim()}. Confira o WhatsApp e o Histórico de Execuções.`;
        });
    }
    function T() {
      const O = h.value.name.trim() || Wo(h.value.trigger_event);
      return $(async () => {
        await Te.createFlow({
          name: O,
          trigger_event: h.value.trigger_event,
          product_ids: h.value.product_ids.length ? h.value.product_ids : null,
          is_active: !0,
          graph_json: Ap(h.value.trigger_event)
        }), h.value.name = "", h.value.product_ids = [], b.value = !1;
      });
    }
    const C = (O) => $(() => Te.updateFlow(O.id, { is_active: !O.is_active })), _ = (O) => $(() => Te.duplicateFlow(O.id));
    function g(O) {
      if (window.confirm(`Excluir o fluxo "${O.name}"?`))
        return $(() => Te.deleteFlow(O.id));
    }
    function S(O) {
      const E = {
        name: O.name,
        trigger_event: O.trigger_event,
        product_ids: O.product_ids,
        graph_json: O.graph_json
      }, U = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), A = URL.createObjectURL(U), j = document.createElement("a");
      j.href = A, j.download = `${(O.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, j.click(), URL.revokeObjectURL(A);
    }
    async function L(O) {
      const E = O.target.files?.[0];
      if (E) {
        l.value = !0, a.value = "", i.value = "";
        try {
          const U = JSON.parse(await E.text());
          if (!U || typeof U != "object" || !U.graph_json || !U.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const A = new Set(n.value.map((x) => x.id)), j = (Array.isArray(U.product_ids) ? U.product_ids : []).filter((x) => A.has(x));
          await Te.createFlow({
            name: U.name ? `${U.name} (importado)` : "Fluxo importado",
            trigger_event: U.trigger_event,
            product_ids: j.length ? j : null,
            graph_json: U.graph_json,
            is_active: !1
          }), i.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await y();
        } catch (U) {
          a.value = U.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, O.target.value = "";
        }
      }
    }
    function F(O) {
      return $(() => Te.createFlow({
        name: O.title,
        trigger_event: O.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: O.graph(O.eventClass)
      }));
    }
    return Ke(y), (O, E) => (w(), z("div", T5, [
      Y(A5, { onUse: F }),
      s("div", O5, [
        s("div", N5, [
          s("div", R5, [
            s("div", M5, [
              Y(N(Kr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ie(s("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (U) => d.value = U),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [Se, d.value]
              ])
            ]),
            ie(s("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (U) => u.value = U),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              E[9] || (E[9] = s("option", { value: "all" }, "Todos os eventos", -1)),
              (w(!0), z(ee, null, De(N(Vn), (U) => (w(), z("option", {
                key: U.id,
                value: U.eventClass
              }, q(U.label), 9, I5))), 128))
            ], 512), [
              [tt, u.value]
            ])
          ]),
          s("div", D5, [
            s("span", F5, q(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            s("label", {
              class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              Y(N(hf), { class: "h-4 w-4" }),
              s("span", null, q(l.value ? "Importando…" : "Importar"), 1),
              s("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: l.value,
                onChange: L
              }, null, 40, B5)
            ], 2),
            s("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: E[2] || (E[2] = (U) => b.value = !b.value)
            }, [
              Y(N(cf), { class: "h-4 w-4" }),
              E[10] || (E[10] = s("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        b.value ? (w(), z("div", L5, [
          s("div", U5, [
            s("div", null, [
              E[11] || (E[11] = s("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ie(s("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": E[3] || (E[3] = (U) => h.value.name = U),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [Se, h.value.name]
              ])
            ]),
            s("div", null, [
              E[12] || (E[12] = s("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ie(s("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": E[4] || (E[4] = (U) => h.value.trigger_event = U),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (w(!0), z(ee, null, De(N(Vn), (U) => (w(), z("option", {
                  key: U.id,
                  value: U.eventClass
                }, q(U.label), 9, V5))), 128))
              ], 512), [
                [tt, h.value.trigger_event]
              ])
            ]),
            s("div", null, [
              E[13] || (E[13] = s("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              Y(gr, {
                modelValue: h.value.product_ids,
                "onUpdate:modelValue": E[5] || (E[5] = (U) => h.value.product_ids = U),
                options: v.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          s("div", q5, [
            s("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: T
            }, " Criar fluxo em branco ", 8, j5),
            s("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: E[6] || (E[6] = (U) => b.value = !1)
            }, " Cancelar ")
          ])
        ])) : le("", !0),
        a.value ? (w(), z("p", H5, q(a.value), 1)) : i.value ? (w(), z("p", G5, q(i.value), 1)) : le("", !0),
        r.value ? (w(), z("div", W5, [
          Y(N(ht), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          E[14] || (E[14] = s("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (w(), z("div", K5, [
          (w(!0), z(ee, null, De(p.value, (U) => (w(), z("div", {
            key: U.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            s("div", null, [
              s("div", Z5, [
                s("div", null, [
                  s("span", J5, q(N(Wo)(U.trigger_event)), 1),
                  s("h3", Q5, q(U.name), 1)
                ]),
                s("button", {
                  type: "button",
                  class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", U.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: U.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (A) => C(U)
                }, [
                  s("span", {
                    class: W(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", U.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, eS)
              ]),
              s("div", tS, [
                s("span", nS, q(m(U.product_ids)), 1)
              ])
            ]),
            s("div", rS, [
              s("div", oS, [
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (A) => f.value = U
                }, [
                  Y(N(pf), { class: "h-4 w-4" })
                ], 8, aS),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (A) => _(U)
                }, [
                  Y(N(of), { class: "h-4 w-4" })
                ], 8, iS),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (A) => g(U)
                }, [
                  Y(N(oa), { class: "h-4 w-4" })
                ], 8, sS),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (A) => k(U)
                }, [
                  Y(N(hn), { class: "h-4 w-4" })
                ], 8, lS),
                s("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (A) => S(U)
                }, [
                  Y(N(af), { class: "h-4 w-4" })
                ], 8, uS)
              ]),
              s("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (A) => c.value = U
              }, [
                Y(N(uf), { class: "h-3.5 w-3.5" }),
                E[17] || (E[17] = s("span", null, "Editar Visual", -1))
              ], 8, dS)
            ])
          ]))), 128))
        ])) : (w(), z("div", Y5, [
          s("div", X5, [
            Y(N(Hn), { class: "h-6 w-6" })
          ]),
          E[15] || (E[15] = s("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          E[16] || (E[16] = s("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (w(), Ae(Mp, {
        key: 0,
        flow: c.value,
        onClose: E[7] || (E[7] = (U) => c.value = null),
        onSaved: y
      }, null, 8, ["flow"])) : le("", !0),
      f.value ? (w(), Ae(x5, {
        key: 1,
        flow: f.value,
        onClose: E[8] || (E[8] = (U) => f.value = null),
        onSaved: y
      }, null, 8, ["flow"])) : le("", !0)
    ]));
  }
}, fS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, pS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, hS = { class: "flex items-center gap-2" }, mS = ["disabled"], vS = { class: "mt-4 grid grid-cols-3 gap-3" }, gS = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, yS = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, bS = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, xS = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, wS = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, _S = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, kS = { class: "mt-4 flex flex-wrap items-end gap-2" }, SS = { class: "w-48" }, ES = { class: "w-48" }, zS = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, $S = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, PS = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, CS = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, AS = {
  key: 3,
  class: "py-10 text-center"
}, TS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, OS = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, NS = { class: "w-full text-left text-xs" }, RS = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, MS = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, IS = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, DS = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, FS = { class: "px-3 py-2.5" }, BS = { class: "px-3 py-2.5" }, LS = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, US = ["title"], VS = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, qS = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, jS = { class: "px-3 py-2.5" }, HS = ["onClick"], GS = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = G([]), r = G([]), o = G({ all: 0, buyers: 0, imported: 0 }), a = G(!0), i = G(""), l = G(""), d = G("all"), u = G([]), c = G("or"), f = G([]), h = G(""), b = G(!1), p = ne(() => r.value.map((C) => ({ value: C.name, label: C.name }))), v = ne(() => {
      const C = h.value.trim().toLowerCase();
      return n.value.filter((_) => d.value === "buyer" && _.source !== "buyer" || d.value === "imported" && _.source !== "imported" || u.value.length && !(c.value === "and" ? u.value.every((S) => _.products.includes(S)) : _.products.some((S) => u.value.includes(S))) || f.value.length && _.products.some((g) => f.value.includes(g)) ? !1 : !C || `${_.name} ${_.phone} ${_.email}`.toLowerCase().includes(C));
    });
    async function m() {
      a.value = !0, i.value = "";
      try {
        const [C, _] = await Promise.all([Te.contacts(), Te.products()]);
        n.value = C.contacts || [], o.value = C.counts || o.value, r.value = _.products || [];
      } catch (C) {
        i.value = C.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(m);
    const y = "\uFEFF";
    function $() {
      const C = t.map((L) => L.join(",")).join(`\r
`), _ = new Blob([y + C], { type: "text/csv;charset=utf-8" }), g = URL.createObjectURL(_), S = document.createElement("a");
      S.href = g, S.download = "zaprei-modelo-importacao.csv", S.click(), URL.revokeObjectURL(g);
    }
    async function k(C) {
      const _ = C.target.files?.[0];
      if (_) {
        b.value = !0, i.value = "", l.value = "";
        try {
          const { imported: g } = await Te.importContacts(_);
          l.value = `${g} contato(s) importado(s).`, await m();
        } catch (g) {
          i.value = g.message;
        } finally {
          b.value = !1, C.target.value = "";
        }
      }
    }
    async function T(C) {
      if (window.confirm(`Remover ${C.name}?`)) {
        i.value = "";
        try {
          await Te.deleteContact(C.id), await m();
        } catch (_) {
          i.value = _.message;
        }
      }
    }
    return (C, _) => (w(), z("div", fS, [
      s("div", pS, [
        _[6] || (_[6] = s("div", null, [
          s("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        s("div", hS, [
          s("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: $
          }, [
            Y(N(af), { class: "h-4 w-4" }),
            _[5] || (_[5] = s("span", null, "Baixar exemplo", -1))
          ]),
          s("label", {
            class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": b.value }])
          }, [
            Y(N(hf), { class: "h-4 w-4" }),
            s("span", null, q(b.value ? "Importando…" : "Importar CSV"), 1),
            s("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: b.value,
              onChange: k
            }, null, 40, mS)
          ], 2)
        ])
      ]),
      s("div", vS, [
        s("div", gS, [
          s("div", yS, q(o.value.all), 1),
          _[7] || (_[7] = s("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        s("div", bS, [
          s("div", xS, q(o.value.buyers), 1),
          _[8] || (_[8] = s("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        s("div", wS, [
          s("div", _S, q(o.value.imported), 1),
          _[9] || (_[9] = s("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      s("div", kS, [
        s("div", null, [
          _[11] || (_[11] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ie(s("select", {
            "onUpdate:modelValue": _[0] || (_[0] = (g) => d.value = g),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [..._[10] || (_[10] = [
            s("option", { value: "all" }, "Todas as origens", -1),
            s("option", { value: "buyer" }, "Apenas compradores", -1),
            s("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [tt, d.value]
          ])
        ]),
        s("div", SS, [
          _[12] || (_[12] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          Y(gr, {
            modelValue: u.value,
            "onUpdate:modelValue": _[1] || (_[1] = (g) => u.value = g),
            mode: c.value,
            "onUpdate:mode": _[2] || (_[2] = (g) => c.value = g),
            options: p.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        s("div", ES, [
          _[13] || (_[13] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          Y(gr, {
            modelValue: f.value,
            "onUpdate:modelValue": _[3] || (_[3] = (g) => f.value = g),
            options: p.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ie(s("input", {
          "onUpdate:modelValue": _[4] || (_[4] = (g) => h.value = g),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [Se, h.value]
        ]),
        s("span", zS, q(v.value.length) + " de " + q(n.value.length) + " contato(s)", 1)
      ]),
      _[17] || (_[17] = s("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        re(" O CSV aceita as colunas "),
        s("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        re(" (máximo de 10 MB). ")
      ], -1)),
      i.value ? (w(), z("p", $S, q(i.value), 1)) : l.value ? (w(), z("p", PS, q(l.value), 1)) : le("", !0),
      a.value ? (w(), z("div", CS, [
        Y(N(ht), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        _[14] || (_[14] = s("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : v.value.length ? (w(), z("div", OS, [
        s("table", NS, [
          _[16] || (_[16] = s("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            s("tr", null, [
              s("th", { class: "px-3 py-2.5" }, "Contato"),
              s("th", { class: "px-3 py-2.5" }, "Telefone"),
              s("th", { class: "px-3 py-2.5" }, "E-mail"),
              s("th", { class: "px-3 py-2.5" }, "Origem"),
              s("th", { class: "px-3 py-2.5" }, "Produtos"),
              s("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          s("tbody", RS, [
            (w(!0), z(ee, null, De(v.value, (g) => (w(), z("tr", {
              key: g.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              s("td", MS, q(g.name), 1),
              s("td", IS, q(g.phone), 1),
              s("td", DS, q(g.email || "—"), 1),
              s("td", FS, [
                s("span", {
                  class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", g.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, q(g.origin), 3)
              ]),
              s("td", BS, [
                g.products.length ? (w(), z("div", LS, [
                  (w(!0), z(ee, null, De(g.products.slice(0, 2), (S) => (w(), z("span", {
                    key: S,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: S
                  }, q(S), 9, US))), 128)),
                  g.products.length > 2 ? (w(), z("span", VS, "+" + q(g.products.length - 2), 1)) : le("", !0)
                ])) : (w(), z("span", qS, "—"))
              ]),
              s("td", jS, [
                g.can_delete ? (w(), z("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (S) => T(g)
                }, [
                  Y(N(oa), { class: "h-3.5 w-3.5" })
                ], 8, HS)) : le("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (w(), z("div", AS, [
        s("div", TS, [
          Y(N(En), { class: "h-6 w-6" })
        ]),
        _[15] || (_[15] = s("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, WS = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, YS = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, XS = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, KS = { class: "flex items-center gap-3" }, ZS = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, JS = { class: "flex items-center gap-2" }, QS = { key: 1 }, eE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, tE = { class: "flex-1 overflow-y-auto p-6" }, nE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, rE = { class: "space-y-2" }, oE = { class: "grid grid-cols-2 gap-3" }, aE = { class: "flex items-center gap-2" }, iE = { class: "flex items-center gap-2" }, sE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, lE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, uE = ["min"], dE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, cE = { class: "flex items-center justify-between" }, fE = { class: "flex items-center gap-2" }, pE = { class: "text-xs font-bold text-emerald-400" }, hE = {
  key: 1,
  class: "space-y-4"
}, mE = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, vE = { class: "dark space-y-3" }, gE = { class: "relative" }, yE = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, bE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, xE = { class: "text-xs font-normal text-zinc-500" }, wE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, _E = { class: "w-full text-left text-xs" }, kE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, SE = { class: "w-10 px-3 py-2.5 text-center" }, EE = ["checked"], zE = { class: "divide-y divide-zinc-800/60" }, $E = ["onClick"], PE = ["checked", "onChange"], CE = { class: "px-3 py-2" }, AE = { class: "font-medium text-white" }, TE = { class: "text-[11px] text-zinc-500" }, OE = { class: "px-3 py-2 font-mono text-zinc-300" }, NE = { class: "px-3 py-2" }, RE = { class: "px-3 py-2" }, ME = { class: "flex max-w-[200px] flex-wrap gap-1" }, IE = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, DE = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, FE = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, BE = {
  key: 2,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, LE = { class: "dark" }, UE = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, VE = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, qE = { class: "grid grid-cols-2 gap-3 text-xs" }, jE = { class: "mt-0.5 font-semibold text-white" }, HE = { class: "mt-0.5 text-base font-black text-emerald-400" }, GE = { class: "mt-0.5 text-zinc-300" }, WE = { class: "text-xs text-zinc-500" }, YE = { class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300" }, XE = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, KE = { key: 1 }, ZE = { class: "flex items-center gap-3" }, JE = ["disabled"], QE = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = G(1), o = G(!1), a = G(""), i = G([]), l = G([]), d = G(!1), u = G("all"), c = G([]), f = G("or"), h = G([]), b = G(""), p = G({
      name: "",
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "" }
    }), v = ne(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), m = kp.filter((j) => j.token.startsWith("{{customer."));
    let y = !0;
    Fe(() => p.value.message_data.mode, (j) => {
      if (y) {
        y = !1;
        return;
      }
      Object.assign(p.value.message_data, Cp(j));
    });
    const $ = ne(() => l.value.map((j) => ({ value: j.name, label: j.name }))), k = ne(() => {
      const j = b.value.trim().toLowerCase();
      return i.value.filter((x) => u.value === "buyers" && x.source !== "buyer" || u.value === "imported" && x.source !== "imported" || c.value.length && !(f.value === "and" ? c.value.every((R) => x.products.includes(R)) : x.products.some((R) => c.value.includes(R))) || h.value.length && x.products.some((I) => h.value.includes(I)) ? !1 : !j || `${x.name} ${x.phone}`.toLowerCase().includes(j));
    }), T = ne(() => k.value.length > 0 && k.value.every((j) => p.value.selected_contact_keys.includes(j.id)));
    function C(j) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(j) ? x.filter((I) => I !== j) : [...x, j];
    }
    function _() {
      const j = k.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...j])];
    }
    function g() {
      const j = new Set(k.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !j.has(x));
    }
    const S = ne(() => i.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), L = ne(() => ({
      customer: { name: S.value.name, first_name: (S.value.name || "").split(" ")[0] || S.value.name }
    })), F = ne(() => {
      const j = p.value.message_data;
      return js(j.text || j.question || j.title || "", L.value);
    }), O = ne(() => js(p.value.message_data.caption || "", L.value));
    async function E() {
      d.value = !0;
      try {
        const [j, x] = await Promise.all([Te.contacts(), Te.products()]);
        i.value = j.contacts || [], l.value = x.products || [];
      } catch {
        i.value = [];
      } finally {
        d.value = !1;
      }
    }
    function U() {
      if (a.value = "", r.value === 1) {
        if (!p.value.name.trim()) {
          a.value = "Informe um nome para a campanha.";
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
      if (r.value === 3) {
        const j = Rp(p.value.message_data, "Mensagem");
        if (j.length) {
          a.value = j[0];
          return;
        }
      }
      r.value++;
    }
    async function A() {
      o.value = !0, a.value = "";
      try {
        await Te.createCampaign({
          name: p.value.name,
          message_data: p.value.message_data,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (j) {
        a.value = j.message;
      } finally {
        o.value = !1;
      }
    }
    return Ke(E), (j, x) => (w(), z("div", WS, [
      s("div", YS, [
        s("div", XS, [
          s("div", KS, [
            s("div", ZS, [
              Y(N(hn), { class: "h-5 w-5" })
            ]),
            x[14] || (x[14] = s("div", null, [
              s("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              s("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          s("div", JS, [
            (w(), z(ee, null, De(4, (I) => s("div", {
              key: I,
              class: W(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === I ? "bg-emerald-500 text-zinc-950" : r.value > I ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > I ? (w(), Ae(N(rf), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (w(), z("span", QS, q(I), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (w(), z("div", eE, [
          Y(N(Xr), { class: "h-4 w-4 shrink-0" }),
          s("span", null, q(a.value), 1)
        ])) : le("", !0),
        s("div", tE, [
          r.value === 1 ? (w(), z("div", nE, [
            s("div", null, [
              x[15] || (x[15] = s("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ie(s("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (I) => p.value.name = I),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [Se, p.value.name]
              ]),
              x[16] || (x[16] = s("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            s("div", rE, [
              x[23] || (x[23] = s("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              s("div", oE, [
                s("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (I) => p.value.schedule_mode = "immediate")
                }, [
                  s("div", aE, [
                    Y(N(Hn), { class: "h-4 w-4 text-emerald-400" }),
                    x[17] || (x[17] = s("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[18] || (x[18] = s("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                s("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (I) => p.value.schedule_mode = "scheduled")
                }, [
                  s("div", iE, [
                    Y(N(Br), { class: "h-4 w-4 text-emerald-400" }),
                    x[19] || (x[19] = s("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[20] || (x[20] = s("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (w(), z("div", sE, [
                s("label", lE, [
                  Y(N(Bn), { class: "h-3.5 w-3.5" }),
                  x[21] || (x[21] = s("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ie(s("input", {
                  "onUpdate:modelValue": x[3] || (x[3] = (I) => p.value.scheduled_at = I),
                  type: "datetime-local",
                  min: v.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, uE), [
                  [Se, p.value.scheduled_at]
                ]),
                x[22] || (x[22] = s("p", { class: "text-[11px] text-zinc-400" }, [
                  re(" A campanha ficará com status "),
                  s("strong", { class: "text-purple-400" }, "Agendada"),
                  re(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : le("", !0)
            ]),
            s("div", dE, [
              s("div", cE, [
                s("div", fE, [
                  Y(N(Bh), { class: "h-4 w-4 text-emerald-400" }),
                  x[24] || (x[24] = s("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                s("span", pE, q(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ie(s("input", {
                "onUpdate:modelValue": x[4] || (x[4] = (I) => p.value.throttle_seconds = I),
                type: "range",
                min: "3",
                max: "30",
                step: "1",
                class: "w-full cursor-pointer accent-emerald-500"
              }, null, 512), [
                [
                  Se,
                  p.value.throttle_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              x[25] || (x[25] = s("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (w(), z("div", hE, [
            s("div", mE, [
              s("div", vE, [
                s("div", null, [
                  x[26] || (x[26] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  Y(gr, {
                    modelValue: c.value,
                    "onUpdate:modelValue": x[5] || (x[5] = (I) => c.value = I),
                    mode: f.value,
                    "onUpdate:mode": x[6] || (x[6] = (I) => f.value = I),
                    options: $.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                s("div", null, [
                  x[27] || (x[27] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  Y(gr, {
                    modelValue: h.value,
                    "onUpdate:modelValue": x[7] || (x[7] = (I) => h.value = I),
                    options: $.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[28] || (x[28] = s("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              s("div", null, [
                x[30] || (x[30] = s("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ie(s("select", {
                  "onUpdate:modelValue": x[8] || (x[8] = (I) => u.value = I),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[29] || (x[29] = [
                  s("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  s("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  s("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [tt, u.value]
                ]),
                x[31] || (x[31] = s("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                s("div", gE, [
                  Y(N(Kr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ie(s("input", {
                    "onUpdate:modelValue": x[9] || (x[9] = (I) => b.value = I),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [Se, b.value]
                  ])
                ])
              ]),
              s("div", yE, [
                s("div", null, [
                  x[32] || (x[32] = s("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  s("div", bE, [
                    re(q(p.value.selected_contact_keys.length) + " ", 1),
                    s("span", xE, "de " + q(k.value.length) + " filtrados", 1)
                  ])
                ]),
                s("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  s("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: _
                  }, "Selecionar Todos"),
                  x[33] || (x[33] = s("span", { class: "text-zinc-600" }, "•", -1)),
                  s("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: g
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            s("div", wE, [
              s("table", _E, [
                s("thead", kE, [
                  s("tr", null, [
                    s("th", SE, [
                      s("input", {
                        type: "checkbox",
                        checked: T.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[10] || (x[10] = (I) => T.value ? g() : _())
                      }, null, 40, EE)
                    ]),
                    x[34] || (x[34] = s("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[35] || (x[35] = s("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[36] || (x[36] = s("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[37] || (x[37] = s("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                s("tbody", zE, [
                  (w(!0), z(ee, null, De(k.value, (I) => (w(), z("tr", {
                    key: I.id,
                    class: W(["cursor-pointer transition", p.value.selected_contact_keys.includes(I.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (R) => C(I.id)
                  }, [
                    s("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[11] || (x[11] = Sn(() => {
                      }, ["stop"]))
                    }, [
                      s("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(I.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (R) => C(I.id)
                      }, null, 40, PE)
                    ]),
                    s("td", CE, [
                      s("div", AE, q(I.name), 1),
                      s("div", TE, q(I.email || "-"), 1)
                    ]),
                    s("td", OE, q(I.phone), 1),
                    s("td", NE, [
                      s("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", I.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, q(I.origin), 3)
                    ]),
                    s("td", RE, [
                      s("div", ME, [
                        (w(!0), z(ee, null, De(I.products.slice(0, 2), (R) => (w(), z("span", {
                          key: R,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, q(R), 1))), 128)),
                        I.products.length > 2 ? (w(), z("span", IE, "+" + q(I.products.length - 2), 1)) : le("", !0)
                      ])
                    ])
                  ], 10, $E))), 128))
                ])
              ]),
              d.value ? (w(), z("p", DE, "Carregando contatos...")) : k.value.length ? le("", !0) : (w(), z("p", FE, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (w(), z("div", BE, [
            s("div", LE, [
              Y(Op, {
                data: p.value.message_data,
                "show-recipient": !1,
                variables: N(m)
              }, null, 8, ["data", "variables"])
            ]),
            s("div", null, [
              x[38] || (x[38] = s("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
              Y(_l, {
                text: F.value,
                caption: O.value,
                mode: p.value.message_data.mode,
                "recipient-name": S.value.name
              }, null, 8, ["text", "caption", "mode", "recipient-name"])
            ])
          ])) : r.value === 4 ? (w(), z("div", UE, [
            s("div", VE, [
              x[43] || (x[43] = s("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              s("div", qE, [
                s("div", null, [
                  x[39] || (x[39] = s("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  s("p", jE, q(p.value.name), 1)
                ]),
                s("div", null, [
                  x[40] || (x[40] = s("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  s("p", HE, q(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                s("div", null, [
                  x[41] || (x[41] = s("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  s("p", {
                    class: W(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (w(), Ae(Dt(p.value.schedule_mode === "scheduled" ? N(Br) : N(Hn)), { class: "h-3.5 w-3.5" })),
                    s("span", null, q(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                s("div", null, [
                  x[42] || (x[42] = s("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  s("p", GE, "~" + q(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              s("div", null, [
                s("span", WE, "Prévia do Conteúdo (" + q(p.value.message_data.mode) + "):", 1),
                s("div", YE, q(F.value || O.value || "—"), 1)
              ])
            ])
          ])) : le("", !0)
        ]),
        s("div", XE, [
          r.value > 1 ? (w(), z("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[12] || (x[12] = (I) => r.value--)
          }, [
            Y(N(tf), { class: "mr-2 h-4 w-4" }),
            x[44] || (x[44] = s("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (w(), z("div", KE)),
          s("div", ZE, [
            s("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[13] || (x[13] = (I) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (w(), z("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: U
            }, [
              x[45] || (x[45] = s("span", null, "Próximo", -1)),
              Y(N(Th), { class: "ml-2 h-4 w-4" })
            ])) : (w(), z("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: W(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: A
            }, [
              o.value ? (w(), Ae(N(ht), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (w(), Ae(Dt(p.value.schedule_mode === "scheduled" ? N(Br) : N(hn)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              s("span", null, q(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, JE))
          ])
        ])
      ])
    ]));
  }
}, ez = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, tz = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, nz = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, rz = { class: "flex items-center gap-3" }, oz = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, az = { class: "text-lg font-bold text-white" }, iz = { class: "mt-0.5 text-xs text-zinc-400" }, sz = {
  key: 0,
  class: "text-zinc-500"
}, lz = { class: "flex items-center gap-2" }, uz = ["disabled"], dz = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, cz = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, fz = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, pz = { class: "flex items-center justify-between text-xs" }, hz = { class: "flex items-center gap-2" }, mz = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, vz = { class: "font-bold text-white" }, gz = { class: "font-mono font-bold text-emerald-400" }, yz = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, bz = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, xz = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, wz = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, _z = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, kz = { class: "mt-0.5 text-xl font-bold text-white" }, Sz = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, Ez = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, zz = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, $z = { class: "mt-0.5 text-xl font-bold text-amber-400" }, Pz = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, Cz = { class: "mt-0.5 text-xl font-bold text-red-400" }, Az = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, Tz = { class: "relative max-w-sm flex-1" }, Oz = { class: "flex-1 overflow-y-auto p-6" }, Nz = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, Rz = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, Mz = { class: "w-full text-left text-xs" }, Iz = { class: "divide-y divide-zinc-800/60" }, Dz = { class: "px-4 py-3" }, Fz = { class: "font-medium text-white" }, Bz = ["title"], Lz = { class: "px-4 py-3 font-mono text-zinc-300" }, Uz = { class: "px-4 py-3" }, Vz = { class: "px-4 py-3 text-right text-zinc-400" }, qz = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(null), a = G([]), i = G(!0), l = G(!1), d = G(""), u = G(""), c = G(""), f = ne(() => {
      const m = u.value.trim().toLowerCase();
      return a.value.filter((y) => c.value && y.status !== c.value ? !1 : !m || `${y.name || ""} ${y.phone}`.toLowerCase().includes(m));
    }), h = (m) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[m] || "border-blue-500/20 bg-blue-500/10 text-blue-400", b = ne(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const m = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(m / o.value.total_recipients * 100));
    });
    async function p() {
      i.value = !0, d.value = "";
      try {
        const m = await Te.campaign(n.campaignId);
        o.value = m.campaign, a.value = m.sends || [];
      } catch (m) {
        d.value = m.message;
      } finally {
        i.value = !1;
      }
    }
    async function v() {
      l.value = !0, d.value = "";
      try {
        await Te.cancelCampaign(n.campaignId), r("changed"), await p();
      } catch (m) {
        d.value = m.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(p), (m, y) => (w(), z("div", ez, [
      s("div", tz, [
        s("div", nz, [
          s("div", rz, [
            s("div", oz, [
              Y(N(Kr), { class: "h-5 w-5" })
            ]),
            s("div", null, [
              s("div", az, q(o.value?.name || "Campanha"), 1),
              s("p", iz, [
                s("span", null, q(o.value ? N(Tp)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (w(), z("span", sz, " • " + q(o.value.message), 1)) : le("", !0)
              ])
            ])
          ]),
          s("div", lz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (w(), z("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: v
            }, [
              Y(N(Oh), { class: "h-3.5 w-3.5" }),
              s("span", null, q(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, uz)) : le("", !0),
            s("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: y[0] || (y[0] = ($) => r("close"))
            }, [
              Y(N(Yt), { class: "h-4 w-4" })
            ])
          ])
        ]),
        i.value ? (w(), z("p", dz, "Carregando detalhes…")) : d.value ? (w(), z("p", cz, q(d.value), 1)) : o.value ? (w(), z(ee, { key: 2 }, [
          s("div", fz, [
            s("div", pz, [
              s("div", hz, [
                o.value.status === "running" ? (w(), z("span", mz, [...y[3] || (y[3] = [
                  s("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  s("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : le("", !0),
                s("span", vz, q(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              s("span", gz, q(b.value) + "%", 1)
            ]),
            s("div", yz, [
              s("div", {
                class: W(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: kt({ width: `${b.value}%` })
              }, null, 6)
            ]),
            s("div", bz, [
              s("span", null, q(o.value.sent_count) + " de " + q(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (w(), z("span", xz, " 🛡️ Intervalo randômico (jitter) ativo ")) : le("", !0)
            ])
          ]),
          s("div", wz, [
            s("div", _z, [
              y[4] || (y[4] = s("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              s("div", kz, q(o.value.total_recipients), 1)
            ]),
            s("div", Sz, [
              y[5] || (y[5] = s("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              s("div", Ez, q(o.value.sent_count), 1)
            ]),
            s("div", zz, [
              y[6] || (y[6] = s("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              s("div", $z, q(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            s("div", Pz, [
              y[7] || (y[7] = s("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              s("div", Cz, q(o.value.error_count), 1)
            ])
          ]),
          s("div", Az, [
            s("div", Tz, [
              Y(N(Kr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ie(s("input", {
                "onUpdate:modelValue": y[1] || (y[1] = ($) => u.value = $),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [Se, u.value]
              ])
            ]),
            ie(s("select", {
              "onUpdate:modelValue": y[2] || (y[2] = ($) => c.value = $),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...y[8] || (y[8] = [
              Kc('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [tt, c.value]
            ])
          ]),
          s("div", Oz, [
            f.value.length ? (w(), z("div", Rz, [
              s("table", Mz, [
                y[9] || (y[9] = s("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  s("tr", null, [
                    s("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    s("th", { class: "px-4 py-2.5" }, "Telefone"),
                    s("th", { class: "px-4 py-2.5" }, "Status"),
                    s("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                s("tbody", Iz, [
                  (w(!0), z(ee, null, De(f.value, ($) => (w(), z("tr", {
                    key: $.id
                  }, [
                    s("td", Dz, [
                      s("div", Fz, q($.name || "—"), 1),
                      $.error_message ? (w(), z("div", {
                        key: 0,
                        title: $.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, q($.error_message), 9, Bz)) : le("", !0)
                    ]),
                    s("td", Lz, q($.phone), 1),
                    s("td", Uz, [
                      s("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", h($.status)])
                      }, q(N(cw)[$.status] || $.status), 3)
                    ]),
                    s("td", Vz, q($.sent_at ? new Date($.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (w(), z("div", Nz, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : le("", !0)
      ])
    ]));
  }
}, jz = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Hz = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, Gz = { class: "relative w-64" }, Wz = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Yz = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, Xz = {
  key: 2,
  class: "py-10 text-center"
}, Kz = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, Zz = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, Jz = { class: "w-full text-left text-xs" }, Qz = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, e3 = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, t3 = { class: "px-3 py-2.5" }, n3 = { class: "px-3 py-2.5" }, r3 = { class: "px-3 py-2.5 font-semibold text-emerald-600 dark:text-emerald-400" }, o3 = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, a3 = { class: "px-3 py-2.5" }, i3 = ["onClick"], s3 = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(!1), i = G(null), l = (c) => ({
      completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      cancelled: "border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      scheduled: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400"
    })[c] || "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400", d = ne(() => {
      const c = o.value.trim().toLowerCase();
      return c ? t.value.filter((f) => f.name.toLowerCase().includes(c)) : t.value;
    });
    async function u() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Te.campaigns()).campaigns || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    return Ke(u), (c, f) => (w(), z("div", jz, [
      s("div", Hz, [
        s("div", Gz, [
          Y(N(Kr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ie(s("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (h) => o.value = h),
            type: "text",
            placeholder: "Buscar campanhas...",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [Se, o.value]
          ])
        ]),
        s("button", {
          type: "button",
          class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
          onClick: f[1] || (f[1] = (h) => a.value = !0)
        }, [
          Y(N(cf), { class: "h-4 w-4" }),
          f[4] || (f[4] = s("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (w(), z("p", Wz, q(r.value), 1)) : le("", !0),
      n.value ? (w(), z("div", Yz, [
        Y(N(ht), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = s("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : d.value.length ? (w(), z("div", Zz, [
        s("table", Jz, [
          f[8] || (f[8] = s("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            s("tr", null, [
              s("th", { class: "px-3 py-2.5" }, "Campanha"),
              s("th", { class: "px-3 py-2.5" }, "Status"),
              s("th", { class: "px-3 py-2.5" }, "Destinatários"),
              s("th", { class: "px-3 py-2.5" }, "Enviados"),
              s("th", { class: "px-3 py-2.5" }, "Falhas"),
              s("th", { class: "px-3 py-2.5" }, "Agendada para"),
              s("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          s("tbody", Qz, [
            (w(!0), z(ee, null, De(d.value, (h) => (w(), z("tr", {
              key: h.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              s("td", e3, q(h.name), 1),
              s("td", t3, [
                s("span", {
                  class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(h.status)])
                }, q(N(Tp)[h.status] || h.status), 3)
              ]),
              s("td", n3, q(h.total_recipients), 1),
              s("td", r3, q(h.sent_count), 1),
              s("td", {
                class: W(["px-3 py-2.5", h.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, q(h.error_count), 3),
              s("td", o3, q(h.scheduled_at ? new Date(h.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              s("td", a3, [
                s("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (b) => i.value = h.id
                }, [
                  Y(N(Rh), { class: "h-3.5 w-3.5" }),
                  f[7] || (f[7] = s("span", null, "Detalhes", -1))
                ], 8, i3)
              ])
            ]))), 128))
          ])
        ])
      ])) : (w(), z("div", Xz, [
        s("div", Kz, [
          Y(N(hn), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = s("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (w(), Ae(QE, {
        key: 4,
        onClose: f[2] || (f[2] = (h) => a.value = !1),
        onCreated: u
      })) : le("", !0),
      i.value ? (w(), Ae(qz, {
        key: 5,
        "campaign-id": i.value,
        onClose: f[3] || (f[3] = (h) => i.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : le("", !0)
    ]));
  }
}, l3 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, u3 = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, d3 = ["disabled"], c3 = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, f3 = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, p3 = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, h3 = {
  key: 3,
  class: "py-10 text-center"
}, m3 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, v3 = {
  key: 4,
  class: "mt-4 space-y-2"
}, g3 = { class: "flex items-center gap-3" }, y3 = { class: "font-semibold text-zinc-900 dark:text-white" }, b3 = { class: "text-zinc-500 dark:text-zinc-400" }, x3 = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, w3 = ["title"], _3 = ["title"], k3 = { class: "flex items-center gap-2" }, S3 = ["disabled", "onClick"], E3 = {
  __name: "RunsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(null), i = (c) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[c] || "bg-amber-500", l = (c) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[c] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function d() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Te.runs()).runs || [];
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
          await Te.retryRun(c.id), o.value = `Execução #${c.id} reiniciada.`, await d();
        } catch (f) {
          r.value = f.message;
        } finally {
          a.value = null;
        }
      }
    }
    return Ke(d), (c, f) => (w(), z("div", l3, [
      s("div", u3, [
        f[0] || (f[0] = s("div", null, [
          s("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        s("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: d
        }, " Atualizar ", 8, d3)
      ]),
      r.value ? (w(), z("p", c3, q(r.value), 1)) : o.value ? (w(), z("p", f3, q(o.value), 1)) : le("", !0),
      n.value ? (w(), z("div", p3, [
        Y(N(ht), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = s("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (w(), z("div", v3, [
        (w(!0), z(ee, null, De(t.value, (h) => (w(), z("div", {
          key: h.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          s("div", g3, [
            s("span", {
              class: W(["h-2 w-2 rounded-full", i(h.status)])
            }, null, 2),
            s("div", null, [
              s("div", y3, "Fluxo #" + q(h.flow_id), 1),
              s("div", b3, q(N(Wo)(h.event_class)) + " • " + q(new Date(h.created_at).toLocaleString("pt-BR")), 1),
              h.context?.last_reply ? (w(), z("div", x3, [
                Y(N(Ih), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                s("span", {
                  class: "max-w-md truncate",
                  title: h.context.last_reply
                }, "Cliente respondeu: “" + q(h.context.last_reply) + "”", 9, w3)
              ])) : le("", !0),
              h.last_error ? (w(), z("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: h.last_error
              }, q(h.last_error), 9, _3)) : le("", !0)
            ])
          ]),
          s("div", k3, [
            h.status === "failed" ? (w(), z("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === h.id,
              onClick: (b) => u(h)
            }, [
              Y(N(ff), {
                class: W(["h-3 w-3", { "animate-spin": a.value === h.id }])
              }, null, 8, ["class"]),
              s("span", null, q(a.value === h.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, S3)) : le("", !0),
            s("span", {
              class: W(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(h.status)])
            }, q(N(fw)[h.status] || h.status), 3)
          ])
        ]))), 128))
      ])) : (w(), z("div", h3, [
        s("div", m3, [
          Y(N(sf), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = s("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, z3 = { class: "mx-auto max-w-6xl space-y-6" }, $3 = { class: "flex flex-wrap items-center justify-between gap-3" }, P3 = { class: "inline-flex flex-wrap rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5 dark:border-zinc-800 dark:bg-zinc-900" }, C3 = { class: "hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400" }, A3 = { class: "flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900" }, T3 = { class: "flex items-center gap-4" }, O3 = { class: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400" }, N3 = { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, R3 = { class: "text-xs text-zinc-600 dark:text-zinc-400" }, M3 = { class: "flex items-center gap-3" }, I3 = { class: "relative inline-flex cursor-pointer items-center" }, D3 = {
  key: 0,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, F3 = {
  key: 1,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, B3 = {
  key: 2,
  class: "flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300"
}, L3 = {
  key: 3,
  class: "flex h-64 items-center justify-center"
}, U3 = {
  key: 4,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, V3 = { class: "space-y-6 lg:col-span-7" }, q3 = { class: "rounded-3xl border border-amber-300/80 bg-gradient-to-b from-amber-500/10 via-white to-white p-6 shadow-sm dark:border-amber-500/30 dark:from-amber-500/15 dark:via-zinc-900 dark:bg-zinc-900" }, j3 = { class: "flex items-start justify-between gap-4" }, H3 = { class: "flex items-center gap-2" }, G3 = { class: "inline-flex items-center gap-1.5 rounded-xl bg-amber-500/20 px-2.5 py-1 text-[11px] font-bold text-amber-800 dark:bg-amber-500/25 dark:text-amber-300" }, W3 = { class: "mt-2 text-sm font-bold text-zinc-900 dark:text-white" }, Y3 = {
  key: 0,
  class: "mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-3.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, X3 = {
  key: 1,
  class: "mt-4 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-500/15 p-3.5 text-xs font-semibold text-rose-800 dark:text-rose-300"
}, K3 = { class: "space-y-1" }, Z3 = { class: "mt-5 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-500/20 dark:bg-amber-950/20" }, J3 = {
  key: 0,
  class: "space-y-3"
}, Q3 = { class: "flex flex-wrap gap-2" }, e4 = { class: "flex items-center gap-2" }, t4 = { class: "flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900" }, n4 = ["max"], r4 = ["disabled"], o4 = {
  key: 1,
  class: "space-y-3"
}, a4 = { class: "flex flex-wrap gap-2" }, i4 = { class: "flex items-center gap-2" }, s4 = { class: "flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900" }, l4 = ["max"], u4 = ["disabled"], d4 = {
  key: 2,
  class: "space-y-3"
}, c4 = { class: "flex flex-wrap gap-2" }, f4 = ["onClick"], p4 = { class: "flex items-center gap-2" }, h4 = { class: "flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900" }, m4 = ["value"], v4 = ["disabled"], g4 = {
  key: 3,
  class: "space-y-3"
}, y4 = { class: "flex flex-wrap gap-2" }, b4 = {
  key: 4,
  class: "mt-3 flex items-center justify-between rounded-xl border border-amber-300 bg-amber-100/60 px-3 py-2 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
}, x4 = { class: "flex items-center gap-1.5 font-semibold" }, w4 = { class: "mt-4 space-y-3" }, _4 = { class: "flex items-center justify-between" }, k4 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, S4 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, E4 = { class: "truncate" }, z4 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400 truncate" }, $4 = {
  key: 0,
  class: "pt-2 space-y-2 border-t border-zinc-100 dark:border-zinc-800"
}, P4 = { class: "flex items-center gap-4" }, C4 = { class: "inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300" }, A4 = { class: "inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300" }, T4 = {
  key: 0,
  class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-950"
}, O4 = {
  key: 1,
  class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-950"
}, N4 = { class: "mt-5" }, R4 = ["disabled"], M4 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, I4 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, D4 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, F4 = { class: "mt-6 space-y-4" }, B4 = { class: "mt-1.5 grid grid-cols-2 gap-2" }, L4 = { key: 0 }, U4 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V4 = {
  key: 1,
  class: "space-y-2"
}, q4 = { class: "flex items-center justify-between" }, j4 = { class: "flex items-center gap-2" }, H4 = ["disabled"], G4 = { key: 0 }, W4 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, Y4 = ["value"], X4 = { key: 1 }, K4 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, Z4 = { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, J4 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, Q4 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, e$ = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, t$ = { class: "flex items-center justify-between" }, n$ = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, r$ = {
  key: 0,
  class: "mt-3 space-y-2"
}, o$ = { class: "flex flex-wrap gap-1.5" }, a$ = ["title", "onClick"], i$ = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, s$ = ["disabled"], l$ = ["disabled"], u$ = {
  key: 0,
  class: "grid grid-cols-2 gap-3 sm:grid-cols-4"
}, d$ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, c$ = { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, f$ = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, p$ = { class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-center shadow-xs dark:border-emerald-500/30 dark:bg-emerald-500/10" }, h$ = { class: "text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center justify-center gap-1" }, m$ = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, v$ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, g$ = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, y$ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, b$ = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, x$ = { class: "lg:col-span-5" }, w$ = { class: "sticky top-6 overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, _$ = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, k$ = { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, S$ = { key: 1 }, E$ = { class: "flex-1 min-w-0" }, z$ = { class: "text-xs font-bold leading-tight truncate" }, $$ = { class: "text-[10px] text-white/70 truncate" }, P$ = { class: "min-h-[460px] max-h-[580px] overflow-y-auto bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, C$ = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, A$ = { class: "font-sans whitespace-pre-wrap select-text" }, T$ = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, O$ = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, N$ = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = G("daily"), n = G(!0), r = G(!1), o = G(!1), a = G(!1), i = G(!1), l = G(!1), d = G(""), u = G(""), c = G(""), f = G(""), h = G(""), b = G([]), p = G("list");
    function v() {
      const K = /* @__PURE__ */ new Date(), P = K.getFullYear(), oe = String(K.getMonth() + 1).padStart(2, "0"), Ee = String(K.getDate()).padStart(2, "0");
      return `${P}-${oe}-${Ee}`;
    }
    function m() {
      const K = /* @__PURE__ */ new Date();
      K.setDate(K.getDate() - 1);
      const P = K.getFullYear(), oe = String(K.getMonth() + 1).padStart(2, "0"), Ee = String(K.getDate()).padStart(2, "0");
      return `${P}-${oe}-${Ee}`;
    }
    function y() {
      const K = /* @__PURE__ */ new Date();
      K.setDate(K.getDate() - 2);
      const P = K.getFullYear(), oe = String(K.getMonth() + 1).padStart(2, "0"), Ee = String(K.getDate()).padStart(2, "0");
      return `${P}-${oe}-${Ee}`;
    }
    function $() {
      const K = /* @__PURE__ */ new Date(), P = K.getFullYear(), oe = String(K.getMonth() + 1).padStart(2, "0");
      return `${P}-${oe}`;
    }
    function k() {
      const K = /* @__PURE__ */ new Date();
      K.setMonth(K.getMonth() - 1);
      const P = K.getFullYear(), oe = String(K.getMonth() + 1).padStart(2, "0");
      return `${P}-${oe}`;
    }
    const T = v(), C = $(), _ = (/* @__PURE__ */ new Date()).getFullYear(), g = [_, _ - 1, _ - 2, _ - 3], S = G(m()), L = G(k()), F = G(_.toString()), O = G("previous_week"), E = G("default"), U = G("phone"), A = G(""), j = G(""), x = G(!1), I = G(""), R = G(null), Q = G(""), te = ln({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), se = G(!1), he = G(""), ze = G(null), xe = ln({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      phone: "",
      group_id: "",
      custom_template: ""
    }), ce = G(!1), fe = G(""), we = G(null), $e = ln({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      phone: "",
      group_id: "",
      custom_template: ""
    }), Ce = G(!1), pe = G(""), Pe = G(null), ae = ln({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      phone: "",
      group_id: "",
      custom_template: ""
    }), be = G(!1), D = G(""), M = G(null), B = [
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
    ], V = ne(() => t.value === "weekly" ? xe : t.value === "monthly" ? $e : t.value === "yearly" ? ae : te), H = ne(() => x.value && I.value ? I.value : t.value === "weekly" ? fe.value : t.value === "monthly" ? pe.value : t.value === "yearly" ? D.value : he.value), ue = ne(() => x.value && R.value ? R.value : t.value === "weekly" ? we.value : t.value === "monthly" ? Pe.value : t.value === "yearly" ? M.value : ze.value), de = ne({
      get: () => t.value === "weekly" ? ce.value : t.value === "monthly" ? Ce.value : t.value === "yearly" ? be.value : se.value,
      set: (K) => {
        t.value === "weekly" ? ce.value = K : t.value === "monthly" ? Ce.value = K : t.value === "yearly" ? be.value = K : se.value = K;
      }
    }), ve = ne(() => {
      const K = V.value;
      if (K.recipient_type === "group") {
        if (!K.group_id) return "Nenhum grupo configurado";
        const P = b.value.find((oe) => oe.id === K.group_id);
        return P ? `Grupo: ${P.name}` : `Grupo: ${K.group_id}`;
      }
      return K.phone ? `WhatsApp: ${K.phone}` : "Nenhum número configurado";
    });
    function ge() {
      return t.value === "daily" ? S.value : t.value === "monthly" ? L.value : t.value === "yearly" ? F.value : t.value === "weekly" ? O.value === "previous_week" ? "last_week" : "this_week" : "";
    }
    async function ke() {
      i.value = !0, h.value = "";
      try {
        const K = ge(), P = await Te.previewReport({
          type: t.value,
          date: K
        });
        I.value = P.preview || "", R.value = P.data || null, Q.value = P.date || K, x.value = !0;
      } catch (K) {
        h.value = K.message || "Falha ao carregar prévia do período selecionado.";
      } finally {
        i.value = !1;
      }
    }
    function Ne() {
      x.value = !1, I.value = "", R.value = null, Q.value = "", f.value = "", h.value = "";
    }
    function Be(K) {
      K === "today" ? S.value = v() : K === "yesterday" ? S.value = m() : K === "before_yesterday" && (S.value = y()), ke();
    }
    function bt(K) {
      K === "current" ? L.value = $() : K === "previous" && (L.value = k()), ke();
    }
    function ft(K) {
      F.value = K.toString(), ke();
    }
    function er(K) {
      O.value = K, ke();
    }
    function $t(K) {
      t.value = K, Ne();
    }
    async function rn() {
      l.value = !0;
      try {
        const K = await Te.groups();
        b.value = K.groups || [], b.value.length === 0 && (p.value = "manual");
      } catch {
        b.value = [], p.value = "manual";
      } finally {
        l.value = !1;
      }
    }
    async function wo() {
      n.value = !0, d.value = "";
      try {
        const K = await Te.dailyReport();
        te.enabled = !!K.config?.enabled, te.time = K.config?.time || "23:59", te.recipient_type = K.config?.recipient_type || "phone", te.phone = K.config?.phone || "", te.group_id = K.config?.group_id || "", te.custom_template = K.config?.custom_template || "", se.value = !!K.config?.custom_template, he.value = K.preview || "", ze.value = K.data || null;
        const P = K.weekly_config || {};
        xe.enabled = !!P.enabled, xe.time = P.time || "23:59", xe.recipient_type = P.recipient_type || te.recipient_type || "phone", xe.phone = P.phone || te.phone || "", xe.group_id = P.group_id || te.group_id || "", xe.custom_template = P.custom_template || "", ce.value = !!P.custom_template, fe.value = K.weekly_preview || "", we.value = K.weekly_data || null;
        const oe = K.monthly_config || {};
        $e.enabled = !!oe.enabled, $e.time = oe.time || "23:59", $e.recipient_type = oe.recipient_type || te.recipient_type || "phone", $e.phone = oe.phone || te.phone || "", $e.group_id = oe.group_id || te.group_id || "", $e.custom_template = oe.custom_template || "", Ce.value = !!oe.custom_template, pe.value = K.monthly_preview || "", Pe.value = K.monthly_data || null;
        const Ee = K.yearly_config || {};
        ae.enabled = !!Ee.enabled, ae.time = Ee.time || "23:59", ae.recipient_type = Ee.recipient_type || te.recipient_type || "phone", ae.phone = Ee.phone || te.phone || "", ae.group_id = Ee.group_id || te.group_id || "", ae.custom_template = Ee.custom_template || "", be.value = !!Ee.custom_template, D.value = K.yearly_preview || "", M.value = K.yearly_data || null, await rn();
      } catch (K) {
        d.value = K.message || "Falha ao carregar configurações dos relatórios.";
      } finally {
        n.value = !1;
      }
    }
    async function _o() {
      r.value = !0, d.value = "", u.value = "";
      try {
        if (t.value === "daily") {
          const K = await Te.saveDailyReport({
            enabled: te.enabled,
            time: te.time,
            recipient_type: te.recipient_type,
            phone: te.phone,
            group_id: te.group_id,
            custom_template: se.value ? te.custom_template : null
          });
          he.value = K.preview || he.value, u.value = "Configurações do relatório diário salvas com sucesso!";
        } else if (t.value === "weekly") {
          const K = await Te.saveWeeklyReport({
            enabled: xe.enabled,
            time: xe.time,
            recipient_type: xe.recipient_type,
            phone: xe.phone,
            group_id: xe.group_id,
            custom_template: ce.value ? xe.custom_template : null
          });
          fe.value = K.preview || fe.value, u.value = "Configurações do relatório semanal (segunda a domingo) salvas com sucesso!";
        } else if (t.value === "monthly") {
          const K = await Te.saveMonthlyReport({
            enabled: $e.enabled,
            time: $e.time,
            recipient_type: $e.recipient_type,
            phone: $e.phone,
            group_id: $e.group_id,
            custom_template: Ce.value ? $e.custom_template : null
          });
          pe.value = K.preview || pe.value, u.value = "Configurações do relatório mensal (fechamento do mês) salvas com sucesso!";
        } else {
          const K = await Te.saveYearlyReport({
            enabled: ae.enabled,
            time: ae.time,
            recipient_type: ae.recipient_type,
            phone: ae.phone,
            group_id: ae.group_id,
            custom_template: be.value ? ae.custom_template : null
          });
          D.value = K.preview || D.value, u.value = "Configurações do relatório anual (fechamento de ano) salvas com sucesso!";
        }
        setTimeout(() => {
          u.value = "";
        }, 5e3);
      } catch (K) {
        d.value = K.message || "Erro ao salvar configurações.";
      } finally {
        r.value = !1;
      }
    }
    async function Qa() {
      const K = V.value;
      if (K.recipient_type === "group") {
        if (!K.group_id) {
          d.value = "Selecione ou informe o JID do grupo do WhatsApp antes de testar.";
          return;
        }
      } else if (!K.phone) {
        d.value = "Informe o número do WhatsApp de destino antes de testar.";
        return;
      }
      o.value = !0, d.value = "", c.value = "";
      try {
        if (t.value === "daily") {
          const P = await Te.testDailyReport({
            recipient_type: K.recipient_type,
            phone: K.phone,
            group_id: K.group_id
          });
          c.value = P.message || "Relatório diário de teste enviado para o WhatsApp!", P.preview && (he.value = P.preview);
        } else if (t.value === "weekly") {
          const P = await Te.testWeeklyReport({
            recipient_type: K.recipient_type,
            phone: K.phone,
            group_id: K.group_id
          });
          c.value = P.message || "Relatório semanal de teste enviado para o WhatsApp!", P.preview && (fe.value = P.preview);
        } else if (t.value === "monthly") {
          const P = await Te.testMonthlyReport({
            recipient_type: K.recipient_type,
            phone: K.phone,
            group_id: K.group_id
          });
          c.value = P.message || "Relatório mensal de teste enviado para o WhatsApp!", P.preview && (pe.value = P.preview);
        } else {
          const P = await Te.testYearlyReport({
            recipient_type: K.recipient_type,
            phone: K.phone,
            group_id: K.group_id
          });
          c.value = P.message || "Relatório anual de teste enviado para o WhatsApp!", P.preview && (D.value = P.preview);
        }
        setTimeout(() => {
          c.value = "";
        }, 8e3);
      } catch (P) {
        d.value = P.message || "Falha ao disparar relatório de teste.";
      } finally {
        o.value = !1;
      }
    }
    async function Er() {
      const K = E.value === "custom", P = V.value, oe = K ? U.value : P.recipient_type, Ee = K ? A.value : P.phone, Nt = K ? j.value : P.group_id;
      if (oe === "group" && !Nt) {
        h.value = "Selecione ou informe o JID do grupo do WhatsApp de destino para o reenvio.";
        return;
      }
      if (oe === "phone" && !Ee) {
        h.value = "Informe o número do WhatsApp de destino para o reenvio.";
        return;
      }
      a.value = !0, h.value = "", f.value = "";
      try {
        const Pt = ge(), it = await Te.resendReport({
          type: t.value,
          date: Pt,
          recipient_type: oe,
          phone: Ee,
          group_id: Nt
        });
        f.value = it.message || "Relatório reenviado com sucesso para o WhatsApp!", it.preview && (I.value = it.preview, R.value = it.data || R.value, x.value = !0), setTimeout(() => {
          f.value = "";
        }, 1e4);
      } catch (Pt) {
        h.value = Pt.body?.message || Pt.message || "Falha ao reenviar relatório. Se a API do WhatsApp estiver offline, verifique a conexão do ZapRei antes de tentar novamente.";
      } finally {
        a.value = !1;
      }
    }
    function tr(K) {
      t.value === "daily" ? te.custom_template = (te.custom_template || "") + " " + K : t.value === "weekly" ? xe.custom_template = (xe.custom_template || "") + " " + K : t.value === "monthly" ? $e.custom_template = ($e.custom_template || "") + " " + K : ae.custom_template = (ae.custom_template || "") + " " + K;
    }
    const X = ne(() => (H.value || "").split(`
`)), J = ne(() => {
      if (V.value.recipient_type !== "group") return "";
      const K = b.value.find((P) => P.id === V.value.group_id);
      return K ? K.name : V.value.group_id || "Grupo de Vendas";
    });
    return Ke(wo), (K, P) => (w(), z("div", z3, [
      s("div", $3, [
        s("div", P3, [
          s("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "daily" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: P[0] || (P[0] = (oe) => $t("daily"))
          }, [
            Y(N(Br), { class: "h-4 w-4" }),
            P[30] || (P[30] = s("span", null, "Relatório Diário", -1))
          ], 2),
          s("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "weekly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: P[1] || (P[1] = (oe) => $t("weekly"))
          }, [
            Y(N(nu), { class: "h-4 w-4" }),
            P[31] || (P[31] = s("span", null, "Relatório Semanal", -1))
          ], 2),
          s("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "monthly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: P[2] || (P[2] = (oe) => $t("monthly"))
          }, [
            Y(N(si), { class: "h-4 w-4" }),
            P[32] || (P[32] = s("span", null, "Relatório Mensal", -1))
          ], 2),
          s("button", {
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition", t.value === "yearly" ? "bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"]),
            onClick: P[3] || (P[3] = (oe) => $t("yearly"))
          }, [
            Y(N(ui), { class: "h-4 w-4" }),
            P[33] || (P[33] = s("span", null, "Relatório Anual", -1))
          ], 2)
        ]),
        s("div", C3, [
          Y(N(Bn), { class: "h-3.5 w-3.5 text-emerald-500" }),
          P[34] || (P[34] = s("span", null, [
            re("Horário padrão: "),
            s("strong", null, "23:59"),
            re(" (Brasília)")
          ], -1))
        ])
      ]),
      s("div", A3, [
        s("div", T3, [
          s("div", O3, [
            t.value === "daily" ? (w(), Ae(N(nf), {
              key: 0,
              class: "h-7 w-7"
            })) : t.value === "weekly" ? (w(), Ae(N(nu), {
              key: 1,
              class: "h-7 w-7"
            })) : t.value === "monthly" ? (w(), Ae(N(si), {
              key: 2,
              class: "h-7 w-7"
            })) : (w(), Ae(N(ui), {
              key: 3,
              class: "h-7 w-7"
            }))
          ]),
          s("div", null, [
            s("h2", N3, [
              t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                re("Relatório Diário de Vendas no WhatsApp")
              ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                re("Relatório Semanal de Vendas no WhatsApp")
              ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                re("Relatório Mensal de Vendas no WhatsApp")
              ], 64)) : (w(), z(ee, { key: 3 }, [
                re("Relatório Anual de Vendas no WhatsApp")
              ], 64))
            ]),
            s("p", R3, [
              t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                P[35] || (P[35] = re(" Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas com ", -1)),
                P[36] || (P[36] = s("strong", null, "faturamento bruto e valor líquido", -1)),
                P[37] || (P[37] = re(". ", -1))
              ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                P[38] || (P[38] = re(" Receba automaticamente todo ", -1)),
                P[39] || (P[39] = s("strong", null, "domingo às 23:59", -1)),
                P[40] || (P[40] = re(" o consolidado de vendas de ", -1)),
                P[41] || (P[41] = s("strong", null, "segunda-feira a domingo", -1)),
                P[42] || (P[42] = re(" com faturamento bruto e líquido. ", -1))
              ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                P[43] || (P[43] = re(" Receba automaticamente no ", -1)),
                P[44] || (P[44] = s("strong", null, "último dia do mês às 23:59", -1)),
                P[45] || (P[45] = re(" o fechamento consolidado completo de vendas do mês inteiro (1º ao último dia). ", -1))
              ], 64)) : (w(), z(ee, { key: 3 }, [
                P[46] || (P[46] = re(" Receba automaticamente no ", -1)),
                P[47] || (P[47] = s("strong", null, "último dia do ano (31 de dezembro) às 23:59", -1)),
                P[48] || (P[48] = re(" o fechamento consolidado de vendas de todo o ano. ", -1))
              ], 64))
            ])
          ])
        ]),
        s("div", M3, [
          s("span", {
            class: W(["text-xs font-semibold", V.value.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, q(V.value.enabled ? "● Envio Automático Ativo" : "○ Envio Automático Desativado"), 3),
          s("label", I3, [
            ie(s("input", {
              "onUpdate:modelValue": P[4] || (P[4] = (oe) => V.value.enabled = oe),
              type: "checkbox",
              class: "peer sr-only",
              onChange: _o
            }, null, 544), [
              [Rn, V.value.enabled]
            ]),
            P[49] || (P[49] = s("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      u.value ? (w(), z("div", D3, [
        Y(N(Lr), { class: "h-5 w-5 shrink-0" }),
        s("span", null, q(u.value), 1)
      ])) : le("", !0),
      c.value ? (w(), z("div", F3, [
        Y(N(hn), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        s("span", null, q(c.value), 1)
      ])) : le("", !0),
      d.value ? (w(), z("div", B3, [
        Y(N(Xr), { class: "h-5 w-5 shrink-0" }),
        s("span", null, q(d.value), 1)
      ])) : le("", !0),
      n.value ? (w(), z("div", L3, [
        Y(N(ht), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (w(), z("div", U3, [
        s("div", V3, [
          s("div", q3, [
            s("div", j3, [
              s("div", null, [
                s("div", H3, [
                  s("span", G3, [
                    Y(N(On), { class: "h-3.5 w-3.5 text-amber-600 dark:text-amber-400" }),
                    P[50] || (P[50] = s("span", null, "Contingência de API & Reenvio sob Demanda", -1))
                  ])
                ]),
                s("h3", W3, [
                  t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                    re("Reenviar Relatório do Dia (Escolher Data)")
                  ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                    re("Reenviar Relatório Semanal")
                  ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                    re("Reenviar Relatório do Mês (Escolher Mês/Ano)")
                  ], 64)) : (w(), z(ee, { key: 3 }, [
                    re("Reenviar Relatório do Ano (Escolher Ano)")
                  ], 64))
                ]),
                P[51] || (P[51] = s("p", { class: "mt-1 text-xs text-zinc-600 dark:text-zinc-400" }, " A API do WhatsApp caiu ou precisa reenviar vendas passadas? Escolha o período abaixo para visualizar e disparar imediatamente. ", -1))
              ])
            ]),
            f.value ? (w(), z("div", Y3, [
              Y(N(Lr), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
              s("span", null, q(f.value), 1)
            ])) : le("", !0),
            h.value ? (w(), z("div", X3, [
              Y(N(Xr), { class: "h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" }),
              s("div", K3, [
                s("div", null, q(h.value), 1),
                P[52] || (P[52] = s("div", { class: "text-[11px] font-normal text-rose-700/80 dark:text-rose-300/80" }, [
                  re(" Dica: Verifique na aba "),
                  s("strong", null, "Conexão"),
                  re(" se a instância da Evolution GO está online e conectada ao WhatsApp antes de reenviar. ")
                ], -1))
              ])
            ])) : le("", !0),
            s("div", Z3, [
              t.value === "daily" ? (w(), z("div", J3, [
                P[54] || (P[54] = s("div", { class: "flex items-center justify-between" }, [
                  s("label", { class: "text-xs font-bold text-zinc-800 dark:text-zinc-200" }, " Escolher o Dia para Reenviar "),
                  s("span", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Selecione qualquer data no calendário ")
                ], -1)),
                s("div", Q3, [
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", S.value === N(T) ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[5] || (P[5] = (oe) => Be("today"))
                  }, " Hoje ", 2),
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", S.value === m() ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[6] || (P[6] = (oe) => Be("yesterday"))
                  }, " Ontem ", 2),
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", S.value === y() ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[7] || (P[7] = (oe) => Be("before_yesterday"))
                  }, " Anteontem ", 2)
                ]),
                s("div", e4, [
                  s("div", t4, [
                    Y(N(Br), { class: "mr-2.5 h-4 w-4 text-amber-500" }),
                    ie(s("input", {
                      "onUpdate:modelValue": P[8] || (P[8] = (oe) => S.value = oe),
                      type: "date",
                      max: N(T),
                      class: "w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white",
                      onChange: ke
                    }, null, 40, n4), [
                      [Se, S.value]
                    ])
                  ]),
                  s("button", {
                    type: "button",
                    disabled: i.value,
                    class: "flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
                    onClick: ke
                  }, [
                    i.value ? (w(), Ae(N(ht), {
                      key: 0,
                      class: "h-3.5 w-3.5 animate-spin text-amber-500"
                    })) : (w(), Ae(N(On), {
                      key: 1,
                      class: "h-3.5 w-3.5 text-amber-500"
                    })),
                    P[53] || (P[53] = s("span", null, "Visualizar", -1))
                  ], 8, r4)
                ])
              ])) : t.value === "monthly" ? (w(), z("div", o4, [
                P[56] || (P[56] = s("div", { class: "flex items-center justify-between" }, [
                  s("label", { class: "text-xs font-bold text-zinc-800 dark:text-zinc-200" }, " Escolher o Mês para Reenviar "),
                  s("span", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Consolida vendas do dia 1º ao último dia do mês ")
                ], -1)),
                s("div", a4, [
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", L.value === N(C) ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[9] || (P[9] = (oe) => bt("current"))
                  }, " Mês Atual ", 2),
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", L.value === k() ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[10] || (P[10] = (oe) => bt("previous"))
                  }, " Mês Anterior ", 2)
                ]),
                s("div", i4, [
                  s("div", s4, [
                    Y(N(si), { class: "mr-2.5 h-4 w-4 text-amber-500" }),
                    ie(s("input", {
                      "onUpdate:modelValue": P[11] || (P[11] = (oe) => L.value = oe),
                      type: "month",
                      max: N(C),
                      class: "w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white",
                      onChange: ke
                    }, null, 40, l4), [
                      [Se, L.value]
                    ])
                  ]),
                  s("button", {
                    type: "button",
                    disabled: i.value,
                    class: "flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
                    onClick: ke
                  }, [
                    i.value ? (w(), Ae(N(ht), {
                      key: 0,
                      class: "h-3.5 w-3.5 animate-spin text-amber-500"
                    })) : (w(), Ae(N(On), {
                      key: 1,
                      class: "h-3.5 w-3.5 text-amber-500"
                    })),
                    P[55] || (P[55] = s("span", null, "Visualizar", -1))
                  ], 8, u4)
                ])
              ])) : t.value === "yearly" ? (w(), z("div", d4, [
                P[58] || (P[58] = s("div", { class: "flex items-center justify-between" }, [
                  s("label", { class: "text-xs font-bold text-zinc-800 dark:text-zinc-200" }, " Escolher o Ano para Reenviar "),
                  s("span", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Consolida vendas de 01/01 a 31/12 ")
                ], -1)),
                s("div", c4, [
                  (w(), z(ee, null, De(g, (oe) => s("button", {
                    key: oe,
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", F.value === oe.toString() ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: (Ee) => ft(oe)
                  }, " Ano " + q(oe), 11, f4)), 64))
                ]),
                s("div", p4, [
                  s("div", h4, [
                    Y(N(ui), { class: "mr-2.5 h-4 w-4 text-amber-500" }),
                    ie(s("select", {
                      "onUpdate:modelValue": P[12] || (P[12] = (oe) => F.value = oe),
                      class: "w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white",
                      onChange: ke
                    }, [
                      (w(), z(ee, null, De(g, (oe) => s("option", {
                        key: oe,
                        value: oe.toString()
                      }, " Ano " + q(oe) + " (01/01 a 31/12) ", 9, m4)), 64))
                    ], 544), [
                      [tt, F.value]
                    ])
                  ]),
                  s("button", {
                    type: "button",
                    disabled: i.value,
                    class: "flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
                    onClick: ke
                  }, [
                    i.value ? (w(), Ae(N(ht), {
                      key: 0,
                      class: "h-3.5 w-3.5 animate-spin text-amber-500"
                    })) : (w(), Ae(N(On), {
                      key: 1,
                      class: "h-3.5 w-3.5 text-amber-500"
                    })),
                    P[57] || (P[57] = s("span", null, "Visualizar", -1))
                  ], 8, v4)
                ])
              ])) : (w(), z("div", g4, [
                P[59] || (P[59] = s("div", { class: "flex items-center justify-between" }, [
                  s("label", { class: "text-xs font-bold text-zinc-800 dark:text-zinc-200" }, " Escolher Semana para Reenviar "),
                  s("span", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Consolida de segunda a domingo ")
                ], -1)),
                s("div", y4, [
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", O.value === "previous_week" ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[13] || (P[13] = (oe) => er("previous_week"))
                  }, " Semana Passada (Fechada) ", 2),
                  s("button", {
                    type: "button",
                    class: W(["rounded-xl border px-3 py-1.5 text-xs font-bold transition", O.value === "this_week" ? "border-amber-500 bg-amber-500 text-white shadow-xs" : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"]),
                    onClick: P[14] || (P[14] = (oe) => er("this_week"))
                  }, " Esta Semana (Em Andamento) ", 2)
                ])
              ])),
              x.value ? (w(), z("div", b4, [
                s("span", x4, [
                  Y(N(ra), { class: "h-3.5 w-3.5 text-amber-600 dark:text-amber-400" }),
                  P[60] || (P[60] = re(" Visualizando dados de: ", -1)),
                  s("strong", null, q(Q.value), 1)
                ]),
                s("button", {
                  type: "button",
                  class: "flex items-center gap-1 text-[11px] font-bold text-amber-800 hover:underline dark:text-amber-300",
                  onClick: Ne
                }, [
                  Y(N(ff), { class: "h-3 w-3" }),
                  P[61] || (P[61] = s("span", null, "Voltar ao tempo real", -1))
                ])
              ])) : le("", !0)
            ]),
            s("div", w4, [
              s("div", _4, [
                P[62] || (P[62] = s("label", { class: "text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Para Onde Reenviar? ", -1)),
                s("span", k4, q(E.value === "default" ? "Usando destino configurado" : "Destino personalizado"), 1)
              ]),
              s("div", S4, [
                s("button", {
                  type: "button",
                  class: W(["flex items-center gap-2 rounded-2xl border p-2.5 text-left text-xs font-semibold transition", E.value === "default" ? "border-amber-500 bg-amber-500/10 text-amber-800 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"]),
                  onClick: P[15] || (P[15] = (oe) => E.value = "default")
                }, [
                  P[64] || (P[64] = s("div", { class: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold text-[10px]" }, " ✓ ", -1)),
                  s("div", E4, [
                    P[63] || (P[63] = s("div", { class: "text-[11px] font-bold" }, "Destinatário Padrão", -1)),
                    s("div", z4, q(ve.value), 1)
                  ])
                ], 2),
                s("button", {
                  type: "button",
                  class: W(["flex items-center gap-2 rounded-2xl border p-2.5 text-left text-xs font-semibold transition", E.value === "custom" ? "border-amber-500 bg-amber-500/10 text-amber-800 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"]),
                  onClick: P[16] || (P[16] = (oe) => E.value = "custom")
                }, [...P[65] || (P[65] = [
                  s("div", { class: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-[10px]" }, " + ", -1),
                  s("div", { class: "truncate" }, [
                    s("div", { class: "text-[11px] font-bold" }, "Outro Destino (Teste)"),
                    s("div", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "Digitar outro número ou grupo")
                  ], -1)
                ])], 2)
              ]),
              E.value === "custom" ? (w(), z("div", $4, [
                s("div", P4, [
                  s("label", C4, [
                    ie(s("input", {
                      "onUpdate:modelValue": P[17] || (P[17] = (oe) => U.value = oe),
                      type: "radio",
                      value: "phone",
                      class: "text-amber-600"
                    }, null, 512), [
                      [Ql, U.value]
                    ]),
                    P[66] || (P[66] = s("span", null, "WhatsApp Individual", -1))
                  ]),
                  s("label", A4, [
                    ie(s("input", {
                      "onUpdate:modelValue": P[18] || (P[18] = (oe) => U.value = oe),
                      type: "radio",
                      value: "group",
                      class: "text-amber-600"
                    }, null, 512), [
                      [Ql, U.value]
                    ]),
                    P[67] || (P[67] = s("span", null, "Grupo de WhatsApp", -1))
                  ])
                ]),
                U.value === "phone" ? (w(), z("div", T4, [
                  Y(N(li), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(s("input", {
                    "onUpdate:modelValue": P[19] || (P[19] = (oe) => A.value = oe),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [Se, A.value]
                  ])
                ])) : (w(), z("div", O4, [
                  Y(N(En), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(s("input", {
                    "onUpdate:modelValue": P[20] || (P[20] = (oe) => j.value = oe),
                    type: "text",
                    placeholder: "Ex: 120363025244589234@g.us",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [Se, j.value]
                  ])
                ]))
              ])) : le("", !0)
            ]),
            s("div", N4, [
              s("button", {
                type: "button",
                disabled: a.value || i.value,
                class: "flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-3.5 text-xs font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-400 disabled:opacity-50",
                onClick: Er
              }, [
                a.value ? (w(), Ae(N(ht), {
                  key: 0,
                  class: "h-4 w-4 animate-spin text-white"
                })) : (w(), Ae(N(On), {
                  key: 1,
                  class: "h-4 w-4 text-white"
                })),
                s("span", null, [
                  a.value ? (w(), z(ee, { key: 0 }, [
                    re("Disparando para o WhatsApp...")
                  ], 64)) : t.value === "daily" ? (w(), z(ee, { key: 1 }, [
                    re("Reenviar Relatório do Dia Escolhido")
                  ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 2 }, [
                    re("Reenviar Relatório Semanal")
                  ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 3 }, [
                    re("Reenviar Relatório Mensal Escolhido")
                  ], 64)) : (w(), z(ee, { key: 4 }, [
                    re("Reenviar Relatório Anual Escolhido")
                  ], 64))
                ])
              ], 8, R4)
            ])
          ]),
          s("div", M4, [
            s("h3", I4, [
              Y(N(Bn), { class: "h-4 w-4 text-emerald-500" }),
              t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                re("Agendamento & Destino Diário Automático")
              ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                re("Agendamento & Destino Semanal Automático")
              ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                re("Agendamento & Destino Mensal Automático")
              ], 64)) : (w(), z(ee, { key: 3 }, [
                re("Agendamento & Destino Anual Automático")
              ], 64))
            ]),
            s("p", D4, [
              t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                re(" Defina o horário e para quem o relatório diário consolidado será entregue diariamente (número ou grupo). ")
              ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                re(" O relatório semanal é disparado todo domingo com o acumulado de vendas de segunda a domingo. ")
              ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                re(" O relatório mensal é disparado no último dia do mês com o consolidado de vendas do mês inteiro. ")
              ], 64)) : (w(), z(ee, { key: 3 }, [
                re(" O relatório anual é disparado no dia 31 de dezembro com o fechamento anual consolidado. ")
              ], 64))
            ]),
            s("div", F4, [
              s("div", null, [
                P[70] || (P[70] = s("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Enviar Para * ", -1)),
                s("div", B4, [
                  s("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", V.value.recipient_type === "phone" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: P[21] || (P[21] = (oe) => V.value.recipient_type = "phone")
                  }, [
                    Y(N(li), { class: "h-3.5 w-3.5" }),
                    P[68] || (P[68] = s("span", null, "Número Individual", -1))
                  ], 2),
                  s("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", V.value.recipient_type === "group" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: P[22] || (P[22] = () => {
                      V.value.recipient_type = "group", b.value.length || rn();
                    })
                  }, [
                    Y(N(En), { class: "h-3.5 w-3.5" }),
                    P[69] || (P[69] = s("span", null, "Grupo do WhatsApp", -1))
                  ], 2)
                ])
              ]),
              V.value.recipient_type === "phone" ? (w(), z("div", L4, [
                P[71] || (P[71] = s("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                s("div", U4, [
                  Y(N(li), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(s("input", {
                    "onUpdate:modelValue": P[23] || (P[23] = (oe) => V.value.phone = oe),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [Se, V.value.phone]
                  ])
                ]),
                P[72] || (P[72] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ])) : (w(), z("div", V4, [
                s("div", q4, [
                  P[75] || (P[75] = s("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Grupo de Destino * ", -1)),
                  s("div", j4, [
                    s("button", {
                      type: "button",
                      class: "flex items-center gap-1 text-[11px] font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400",
                      disabled: l.value,
                      onClick: rn
                    }, [
                      Y(N(On), {
                        class: W(["h-3 w-3", l.value ? "animate-spin" : ""])
                      }, null, 8, ["class"]),
                      P[73] || (P[73] = s("span", null, "Recarregar Grupos", -1))
                    ], 8, H4),
                    P[74] || (P[74] = s("span", { class: "text-zinc-300 dark:text-zinc-700" }, "|", -1)),
                    s("button", {
                      type: "button",
                      class: "text-[11px] font-semibold text-zinc-600 transition hover:underline dark:text-zinc-400",
                      onClick: P[24] || (P[24] = (oe) => p.value = p.value === "list" ? "manual" : "list")
                    }, q(p.value === "list" ? "Digitar JID" : "Escolher da lista"), 1)
                  ])
                ]),
                p.value === "list" && b.value.length > 0 ? (w(), z("div", G4, [
                  s("div", W4, [
                    Y(N(En), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ie(s("select", {
                      "onUpdate:modelValue": P[25] || (P[25] = (oe) => V.value.group_id = oe),
                      class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                    }, [
                      P[76] || (P[76] = s("option", { value: "" }, "Selecione um grupo da Evolution GO...", -1)),
                      (w(!0), z(ee, null, De(b.value, (oe) => (w(), z("option", {
                        key: oe.id,
                        value: oe.id
                      }, q(oe.name), 9, Y4))), 128))
                    ], 512), [
                      [tt, V.value.group_id]
                    ])
                  ])
                ])) : (w(), z("div", X4, [
                  s("div", K4, [
                    Y(N(En), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ie(s("input", {
                      "onUpdate:modelValue": P[26] || (P[26] = (oe) => V.value.group_id = oe),
                      type: "text",
                      placeholder: "Ex: 120363025244589234@g.us",
                      class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                    }, null, 512), [
                      [Se, V.value.group_id]
                    ])
                  ]),
                  P[77] || (P[77] = s("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                    re(" Insira o JID oficial do grupo do WhatsApp (terminado em "),
                    s("code", null, "@g.us"),
                    re("). ")
                  ], -1))
                ]))
              ])),
              s("div", null, [
                s("label", Z4, [
                  t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                    re("Horário de Disparo Diário *")
                  ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                    re("Horário de Disparo aos Domingos *")
                  ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                    re("Horário de Disparo no Último Dia do Mês *")
                  ], 64)) : (w(), z(ee, { key: 3 }, [
                    re("Horário de Disparo em 31 de Dezembro *")
                  ], 64))
                ]),
                s("div", J4, [
                  Y(N(Bn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(s("input", {
                    "onUpdate:modelValue": P[27] || (P[27] = (oe) => V.value.time = oe),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [Se, V.value.time]
                  ])
                ]),
                s("p", Q4, [
                  t.value === "daily" ? (w(), z(ee, { key: 0 }, [
                    P[78] || (P[78] = re(" Padrão sugerido: ", -1)),
                    P[79] || (P[79] = s("strong", null, "23:59", -1)),
                    P[80] || (P[80] = re(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ", -1))
                  ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 1 }, [
                    P[81] || (P[81] = re(" Padrão sugerido: ", -1)),
                    P[82] || (P[82] = s("strong", null, "23:59 aos domingos", -1)),
                    P[83] || (P[83] = re(". O relatório consolidará as vendas de ", -1)),
                    P[84] || (P[84] = s("strong", null, "segunda-feira a domingo", -1)),
                    P[85] || (P[85] = re(". ", -1))
                  ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 2 }, [
                    P[86] || (P[86] = re(" Padrão sugerido: ", -1)),
                    P[87] || (P[87] = s("strong", null, "23:59 no último dia do mês", -1)),
                    P[88] || (P[88] = re(". O relatório consolidará as vendas de todo o mês (do dia 1º ao último dia). ", -1))
                  ], 64)) : (w(), z(ee, { key: 3 }, [
                    P[89] || (P[89] = re(" Padrão sugerido: ", -1)),
                    P[90] || (P[90] = s("strong", null, "23:59 no dia 31 de dezembro", -1)),
                    P[91] || (P[91] = re(". O relatório consolidará as vendas de todo o ano. ", -1))
                  ], 64))
                ])
              ]),
              s("div", e$, [
                s("div", t$, [
                  s("div", null, [
                    P[92] || (P[92] = s("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    s("p", n$, q(de.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  s("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: P[28] || (P[28] = (oe) => de.value = !de.value)
                  }, q(de.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                de.value ? (w(), z("div", r$, [
                  s("div", o$, [
                    (w(), z(ee, null, De(B, (oe) => s("button", {
                      key: oe.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: oe.label,
                      onClick: (Ee) => tr(oe.tag)
                    }, q(oe.tag), 9, a$)), 64))
                  ]),
                  ie(s("textarea", {
                    "onUpdate:modelValue": P[29] || (P[29] = (oe) => V.value.custom_template = oe),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [Se, V.value.custom_template]
                  ])
                ])) : le("", !0)
              ]),
              s("div", i$, [
                s("button", {
                  type: "button",
                  disabled: r.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: _o
                }, [
                  r.value ? (w(), Ae(N(ht), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (w(), Ae(N(Lr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  P[93] || (P[93] = re(" Salvar Configurações ", -1))
                ], 8, s$),
                s("button", {
                  type: "button",
                  disabled: o.value || (V.value.recipient_type === "group" ? !V.value.group_id : !V.value.phone),
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: Qa
                }, [
                  o.value ? (w(), Ae(N(ht), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (w(), Ae(N(hn), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  s("span", null, q(V.value.recipient_type === "group" ? "Enviar Teste ao Grupo" : "Enviar Teste"), 1)
                ], 8, l$)
              ])
            ])
          ]),
          ue.value ? (w(), z("div", u$, [
            s("div", d$, [
              s("span", c$, [
                x.value ? (w(), z(ee, { key: 0 }, [
                  re("Bruto do Período")
                ], 64)) : t.value === "daily" ? (w(), z(ee, { key: 1 }, [
                  re("Bruto Hoje")
                ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 2 }, [
                  re("Bruto Semana")
                ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 3 }, [
                  re("Bruto Mês")
                ], 64)) : (w(), z(ee, { key: 4 }, [
                  re("Bruto Ano")
                ], 64))
              ]),
              s("div", f$, q(ue.value.total_formatted), 1)
            ]),
            s("div", p$, [
              s("span", h$, [
                Y(N(Lh), { class: "h-3 w-3" }),
                x.value ? (w(), z(ee, { key: 0 }, [
                  re("Líquido do Período")
                ], 64)) : t.value === "daily" ? (w(), z(ee, { key: 1 }, [
                  re("Líquido Hoje")
                ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 2 }, [
                  re("Líquido Semana")
                ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 3 }, [
                  re("Líquido Mês")
                ], 64)) : (w(), z(ee, { key: 4 }, [
                  re("Líquido Ano")
                ], 64))
              ]),
              s("div", m$, q(ue.value.net_total_formatted), 1)
            ]),
            s("div", v$, [
              P[94] || (P[94] = s("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Vendas Aprovadas ", -1)),
              s("div", g$, q(ue.value.orders_count), 1)
            ]),
            s("div", y$, [
              P[95] || (P[95] = s("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, " Order Bumps ", -1)),
              s("div", b$, q(ue.value.bumps_count) + " (" + q(ue.value.bumps_total_formatted) + ") ", 1)
            ])
          ])) : le("", !0)
        ]),
        s("div", x$, [
          s("div", w$, [
            s("div", _$, [
              s("div", k$, [
                V.value.recipient_type === "group" ? (w(), Ae(N(En), {
                  key: 0,
                  class: "h-4 w-4"
                })) : (w(), z("span", S$, "ZR"))
              ]),
              s("div", E$, [
                s("div", z$, q(V.value.recipient_type === "group" ? J.value : "ZapRei Notificações"), 1),
                s("div", $$, [
                  x.value ? (w(), z(ee, { key: 0 }, [
                    re(" ⚡ reenvio sob demanda: " + q(Q.value), 1)
                  ], 64)) : V.value.recipient_type === "group" ? (w(), z(ee, { key: 1 }, [
                    re(" grupo do WhatsApp ")
                  ], 64)) : t.value === "daily" ? (w(), z(ee, { key: 2 }, [
                    re(" relatório diário automático ")
                  ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 3 }, [
                    re(" relatório semanal aos domingos ")
                  ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 4 }, [
                    re(" relatório mensal no último dia ")
                  ], 64)) : (w(), z(ee, { key: 5 }, [
                    re(" relatório anual em 31/12 ")
                  ], 64))
                ])
              ]),
              Y(N(ra), { class: "h-4 w-4 text-emerald-300 shrink-0" })
            ]),
            s("div", P$, [
              s("div", C$, [
                s("div", A$, [
                  (w(!0), z(ee, null, De(X.value, (oe, Ee) => (w(), z("div", {
                    key: Ee,
                    class: "min-h-[1.2em]"
                  }, q(oe), 1))), 128))
                ]),
                s("div", T$, [
                  s("span", null, q(x.value ? "Reenvio" : V.value.time || "23:59"), 1),
                  P[96] || (P[96] = s("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            s("div", O$, [
              x.value ? (w(), z(ee, { key: 0 }, [
                P[97] || (P[97] = re(" Prévia de reenvio para ", -1)),
                s("strong", null, q(Q.value), 1),
                P[98] || (P[98] = re(" via ", -1)),
                P[99] || (P[99] = s("strong", null, "Evolution GO", -1))
              ], 64)) : t.value === "daily" ? (w(), z(ee, { key: 1 }, [
                P[100] || (P[100] = re(" Disparo automático diário via ", -1)),
                P[101] || (P[101] = s("strong", null, "Evolution GO", -1)),
                re(" às " + q(te.time), 1)
              ], 64)) : t.value === "weekly" ? (w(), z(ee, { key: 2 }, [
                P[102] || (P[102] = re(" Disparo automático aos ", -1)),
                P[103] || (P[103] = s("strong", null, "domingos", -1)),
                P[104] || (P[104] = re(" via ", -1)),
                P[105] || (P[105] = s("strong", null, "Evolution GO", -1)),
                re(" às " + q(xe.time) + " (segunda a domingo) ", 1)
              ], 64)) : t.value === "monthly" ? (w(), z(ee, { key: 3 }, [
                P[106] || (P[106] = re(" Disparo automático no ", -1)),
                P[107] || (P[107] = s("strong", null, "último dia do mês", -1)),
                P[108] || (P[108] = re(" via ", -1)),
                P[109] || (P[109] = s("strong", null, "Evolution GO", -1)),
                re(" às " + q($e.time) + " (mês inteiro) ", 1)
              ], 64)) : (w(), z(ee, { key: 4 }, [
                P[110] || (P[110] = re(" Disparo automático no ", -1)),
                P[111] || (P[111] = s("strong", null, "dia 31 de dezembro", -1)),
                P[112] || (P[112] = re(" via ", -1)),
                P[113] || (P[113] = s("strong", null, "Evolution GO", -1)),
                re(" às " + q(ae.time) + " (ano inteiro) ", 1)
              ], 64))
            ])
          ])
        ])
      ]))
    ]));
  }
}, R$ = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, M$ = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, I$ = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, D$ = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, F$ = { class: "flex flex-wrap items-center gap-3" }, B$ = { class: "text-xs font-bold" }, L$ = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, U$ = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, V$ = { class: "flex items-center justify-between" }, q$ = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, j$ = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, H$ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, G$ = { class: "flex items-center justify-between" }, W$ = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, Y$ = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, X$ = { class: "flex items-center justify-between" }, K$ = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, Z$ = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, J$ = { class: "flex items-center justify-between" }, Q$ = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, eP = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, tP = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, nP = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, rP = ["onClick"], oP = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, aP = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Hn, component: cS },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: hn, component: s3 },
      { id: "daily_report", label: "Relatórios de Vendas", icon: nf, component: N$ },
      { id: "contacts", label: "Base de Contatos", icon: En, component: GS },
      { id: "runs", label: "Execuções", icon: sf, component: E3 },
      { id: "connection", label: "Conexão", icon: df, component: mf }
    ], n = G("flows"), r = G(null), o = G({ flows: 0, campaigns: 0, contacts: 0 }), a = G({
      flowsCount: 0,
      activeFlowsCount: 0,
      campaignsCount: 0,
      contactsCount: 0,
      runsCount: 0,
      runsSuccessRate: 100
    });
    async function i() {
      try {
        r.value = (await Te.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function l() {
      try {
        const [u, c, f, h] = await Promise.all([
          Te.flows().catch(() => ({ flows: [] })),
          Te.campaigns().catch(() => ({ campaigns: [] })),
          Te.contacts().catch(() => ({ counts: {} })),
          Te.runs().catch(() => ({ runs: [] }))
        ]), b = u.flows || [], p = c.campaigns || [], v = h.runs || [], m = f.counts?.all || 0;
        o.value = {
          flows: b.length,
          campaigns: p.length,
          contacts: m
        };
        const y = b.filter((T) => T.is_active).length, $ = v.filter((T) => T.status === "completed").length, k = v.length ? Math.round($ / v.length * 100) : 100;
        a.value = {
          flowsCount: b.length,
          activeFlowsCount: y,
          campaignsCount: p.length,
          contactsCount: m,
          runsCount: v.length,
          runsSuccessRate: k
        };
      } catch {
      }
    }
    const d = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ke(() => {
      i(), l();
    }), (u, c) => (w(), z("div", R$, [
      s("div", M$, [
        s("div", I$, [
          s("div", null, [
            s("div", D$, [
              Y(N(lf), { class: "h-3.5 w-3.5" }),
              c[5] || (c[5] = s("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            c[6] || (c[6] = s("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            c[7] || (c[7] = s("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          s("div", F$, [
            s("div", {
              class: W(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              s("div", {
                class: W(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              s("div", null, [
                s("div", B$, q(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                s("div", L$, q(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              s("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: c[0] || (c[0] = (f) => n.value = "connection")
              }, q(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        s("div", U$, [
          s("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[1] || (c[1] = (f) => n.value = "flows")
          }, [
            s("div", V$, [
              c[8] || (c[8] = s("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              s("div", q$, [
                Y(N(Hn), { class: "h-4 w-4" })
              ])
            ]),
            s("div", j$, [
              re(q(a.value.activeFlowsCount) + " ", 1),
              c[9] || (c[9] = s("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            s("div", H$, " de " + q(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          s("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[2] || (c[2] = (f) => n.value = "campaigns")
          }, [
            s("div", G$, [
              c[10] || (c[10] = s("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              s("div", W$, [
                Y(N(hn), { class: "h-4 w-4" })
              ])
            ]),
            s("div", Y$, q(a.value.campaignsCount), 1),
            c[11] || (c[11] = s("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          s("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[3] || (c[3] = (f) => n.value = "contacts")
          }, [
            s("div", X$, [
              c[12] || (c[12] = s("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              s("div", K$, [
                Y(N(En), { class: "h-4 w-4" })
              ])
            ]),
            s("div", Z$, q(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            c[13] || (c[13] = s("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          s("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[4] || (c[4] = (f) => n.value = "runs")
          }, [
            s("div", J$, [
              c[14] || (c[14] = s("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              s("div", Q$, [
                Y(N(Ah), { class: "h-4 w-4" })
              ])
            ]),
            s("div", eP, [
              re(q(a.value.runsCount) + " ", 1),
              c[15] || (c[15] = s("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            s("div", tP, [
              c[16] || (c[16] = s("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              s("span", null, q(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        s("div", nP, [
          (w(), z(ee, null, De(t, (f) => s("button", {
            key: f.id,
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (h) => n.value = f.id
          }, [
            (w(), Ae(Dt(f.icon), { class: "h-4 w-4" })),
            s("span", null, q(f.label), 1),
            d(f.id) !== null && d(f.id) > 0 ? (w(), z("span", {
              key: 0,
              class: W(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, q(d(f.id)), 3)) : le("", !0)
          ], 10, rP)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (w(), z("p", oP, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : le("", !0),
      (w(), Ae(Dt(t.find((f) => f.id === n.value).component), Pa({ key: n.value }, Sh(n.value === "connection" ? { saved: i } : {})), null, 16))
    ]));
  }
}, iP = { class: "space-y-4" }, sP = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (w(), z("div", iP, [
      Y(mf, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = s("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          re(" Fluxos, contatos e campanhas ficam no menu "),
          s("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          re(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Ip = typeof global == "object" && global && global.Object === Object && global, lP = typeof self == "object" && self && self.Object === Object && self, Vt = Ip || lP || Function("return this")(), en = Vt.Symbol, Dp = Object.prototype, uP = Dp.hasOwnProperty, dP = Dp.toString, Ar = en ? en.toStringTag : void 0;
function cP(e) {
  var t = uP.call(e, Ar), n = e[Ar];
  try {
    e[Ar] = void 0;
    var r = !0;
  } catch {
  }
  var o = dP.call(e);
  return r && (t ? e[Ar] = n : delete e[Ar]), o;
}
var fP = Object.prototype, pP = fP.toString;
function hP(e) {
  return pP.call(e);
}
var mP = "[object Null]", vP = "[object Undefined]", Zu = en ? en.toStringTag : void 0;
function Zn(e) {
  return e == null ? e === void 0 ? vP : mP : Zu && Zu in Object(e) ? cP(e) : hP(e);
}
function tn(e) {
  return e != null && typeof e == "object";
}
var gP = "[object Symbol]";
function Ba(e) {
  return typeof e == "symbol" || tn(e) && Zn(e) == gP;
}
function yP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Lt = Array.isArray, Ju = en ? en.prototype : void 0, Qu = Ju ? Ju.toString : void 0;
function Fp(e) {
  if (typeof e == "string")
    return e;
  if (Lt(e))
    return yP(e, Fp) + "";
  if (Ba(e))
    return Qu ? Qu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var bP = /\s/;
function xP(e) {
  for (var t = e.length; t-- && bP.test(e.charAt(t)); )
    ;
  return t;
}
var wP = /^\s+/;
function _P(e) {
  return e && e.slice(0, xP(e) + 1).replace(wP, "");
}
function Et(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ed = NaN, kP = /^[-+]0x[0-9a-f]+$/i, SP = /^0b[01]+$/i, EP = /^0o[0-7]+$/i, zP = parseInt;
function td(e) {
  if (typeof e == "number")
    return e;
  if (Ba(e))
    return ed;
  if (Et(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Et(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _P(e);
  var n = SP.test(e);
  return n || EP.test(e) ? zP(e.slice(2), n ? 2 : 8) : kP.test(e) ? ed : +e;
}
function Bp(e) {
  return e;
}
var $P = "[object AsyncFunction]", PP = "[object Function]", CP = "[object GeneratorFunction]", AP = "[object Proxy]";
function kl(e) {
  if (!Et(e))
    return !1;
  var t = Zn(e);
  return t == PP || t == CP || t == $P || t == AP;
}
var wi = Vt["__core-js_shared__"], nd = (function() {
  var e = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function TP(e) {
  return !!nd && nd in e;
}
var OP = Function.prototype, NP = OP.toString;
function Jn(e) {
  if (e != null) {
    try {
      return NP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var RP = /[\\^$.*+?()[\]{}|]/g, MP = /^\[object .+?Constructor\]$/, IP = Function.prototype, DP = Object.prototype, FP = IP.toString, BP = DP.hasOwnProperty, LP = RegExp(
  "^" + FP.call(BP).replace(RP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function UP(e) {
  if (!Et(e) || TP(e))
    return !1;
  var t = kl(e) ? LP : MP;
  return t.test(Jn(e));
}
function VP(e, t) {
  return e?.[t];
}
function Qn(e, t) {
  var n = VP(e, t);
  return UP(n) ? n : void 0;
}
var Hs = Qn(Vt, "WeakMap"), rd = Object.create, qP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!Et(t))
      return {};
    if (rd)
      return rd(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function jP(e, t, n) {
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
function HP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var GP = 800, WP = 16, YP = Date.now;
function XP(e) {
  var t = 0, n = 0;
  return function() {
    var r = YP(), o = WP - (r - n);
    if (n = r, o > 0) {
      if (++t >= GP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function KP(e) {
  return function() {
    return e;
  };
}
var ga = (function() {
  try {
    var e = Qn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), ZP = ga ? function(e, t) {
  return ga(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: KP(t),
    writable: !0
  });
} : Bp, JP = XP(ZP);
function QP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var eC = 9007199254740991, tC = /^(?:0|[1-9]\d*)$/;
function La(e, t) {
  var n = typeof e;
  return t = t ?? eC, !!t && (n == "number" || n != "symbol" && tC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Sl(e, t, n) {
  t == "__proto__" && ga ? ga(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function mo(e, t) {
  return e === t || e !== e && t !== t;
}
var nC = Object.prototype, rC = nC.hasOwnProperty;
function El(e, t, n) {
  var r = e[t];
  (!(rC.call(e, t) && mo(r, n)) || n === void 0 && !(t in e)) && Sl(e, t, n);
}
function oC(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), o ? Sl(n, l, d) : El(n, l, d);
  }
  return n;
}
var od = Math.max;
function aC(e, t, n) {
  return t = od(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = od(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(i), jP(e, this, l);
  };
}
function iC(e, t) {
  return JP(aC(e, t, Bp), e + "");
}
var sC = 9007199254740991;
function zl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sC;
}
function Ua(e) {
  return e != null && zl(e.length) && !kl(e);
}
function lC(e, t, n) {
  if (!Et(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ua(n) && La(t, n.length) : r == "string" && t in n) ? mo(n[t], e) : !1;
}
function uC(e) {
  return iC(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && lC(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var dC = Object.prototype;
function $l(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || dC;
  return e === n;
}
function cC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fC = "[object Arguments]";
function ad(e) {
  return tn(e) && Zn(e) == fC;
}
var Lp = Object.prototype, pC = Lp.hasOwnProperty, hC = Lp.propertyIsEnumerable, ya = ad(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ad : function(e) {
  return tn(e) && pC.call(e, "callee") && !hC.call(e, "callee");
};
function mC() {
  return !1;
}
var Up = typeof exports == "object" && exports && !exports.nodeType && exports, id = Up && typeof module == "object" && module && !module.nodeType && module, vC = id && id.exports === Up, sd = vC ? Vt.Buffer : void 0, gC = sd ? sd.isBuffer : void 0, ao = gC || mC, yC = "[object Arguments]", bC = "[object Array]", xC = "[object Boolean]", wC = "[object Date]", _C = "[object Error]", kC = "[object Function]", SC = "[object Map]", EC = "[object Number]", zC = "[object Object]", $C = "[object RegExp]", PC = "[object Set]", CC = "[object String]", AC = "[object WeakMap]", TC = "[object ArrayBuffer]", OC = "[object DataView]", NC = "[object Float32Array]", RC = "[object Float64Array]", MC = "[object Int8Array]", IC = "[object Int16Array]", DC = "[object Int32Array]", FC = "[object Uint8Array]", BC = "[object Uint8ClampedArray]", LC = "[object Uint16Array]", UC = "[object Uint32Array]", Ye = {};
Ye[NC] = Ye[RC] = Ye[MC] = Ye[IC] = Ye[DC] = Ye[FC] = Ye[BC] = Ye[LC] = Ye[UC] = !0;
Ye[yC] = Ye[bC] = Ye[TC] = Ye[xC] = Ye[OC] = Ye[wC] = Ye[_C] = Ye[kC] = Ye[SC] = Ye[EC] = Ye[zC] = Ye[$C] = Ye[PC] = Ye[CC] = Ye[AC] = !1;
function VC(e) {
  return tn(e) && zl(e.length) && !!Ye[Zn(e)];
}
function Pl(e) {
  return function(t) {
    return e(t);
  };
}
var Vp = typeof exports == "object" && exports && !exports.nodeType && exports, jr = Vp && typeof module == "object" && module && !module.nodeType && module, qC = jr && jr.exports === Vp, _i = qC && Ip.process, yr = (function() {
  try {
    var e = jr && jr.require && jr.require("util").types;
    return e || _i && _i.binding && _i.binding("util");
  } catch {
  }
})(), ld = yr && yr.isTypedArray, Cl = ld ? Pl(ld) : VC, jC = Object.prototype, HC = jC.hasOwnProperty;
function qp(e, t) {
  var n = Lt(e), r = !n && ya(e), o = !n && !r && ao(e), a = !n && !r && !o && Cl(e), i = n || r || o || a, l = i ? cC(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || HC.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    La(u, d))) && l.push(u);
  return l;
}
function jp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var GC = jp(Object.keys, Object), WC = Object.prototype, YC = WC.hasOwnProperty;
function XC(e) {
  if (!$l(e))
    return GC(e);
  var t = [];
  for (var n in Object(e))
    YC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function KC(e) {
  return Ua(e) ? qp(e) : XC(e);
}
function ZC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var JC = Object.prototype, QC = JC.hasOwnProperty;
function eA(e) {
  if (!Et(e))
    return ZC(e);
  var t = $l(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !QC.call(e, r)) || n.push(r);
  return n;
}
function Hp(e) {
  return Ua(e) ? qp(e, !0) : eA(e);
}
var tA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nA = /^\w*$/;
function rA(e, t) {
  if (Lt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ba(e) ? !0 : nA.test(e) || !tA.test(e) || t != null && e in Object(t);
}
var io = Qn(Object, "create");
function oA() {
  this.__data__ = io ? io(null) : {}, this.size = 0;
}
function aA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var iA = "__lodash_hash_undefined__", sA = Object.prototype, lA = sA.hasOwnProperty;
function uA(e) {
  var t = this.__data__;
  if (io) {
    var n = t[e];
    return n === iA ? void 0 : n;
  }
  return lA.call(t, e) ? t[e] : void 0;
}
var dA = Object.prototype, cA = dA.hasOwnProperty;
function fA(e) {
  var t = this.__data__;
  return io ? t[e] !== void 0 : cA.call(t, e);
}
var pA = "__lodash_hash_undefined__";
function hA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = io && t === void 0 ? pA : t, this;
}
function Xn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Xn.prototype.clear = oA;
Xn.prototype.delete = aA;
Xn.prototype.get = uA;
Xn.prototype.has = fA;
Xn.prototype.set = hA;
function mA() {
  this.__data__ = [], this.size = 0;
}
function Va(e, t) {
  for (var n = e.length; n--; )
    if (mo(e[n][0], t))
      return n;
  return -1;
}
var vA = Array.prototype, gA = vA.splice;
function yA(e) {
  var t = this.__data__, n = Va(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : gA.call(t, n, 1), --this.size, !0;
}
function bA(e) {
  var t = this.__data__, n = Va(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xA(e) {
  return Va(this.__data__, e) > -1;
}
function wA(e, t) {
  var n = this.__data__, r = Va(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vn.prototype.clear = mA;
vn.prototype.delete = yA;
vn.prototype.get = bA;
vn.prototype.has = xA;
vn.prototype.set = wA;
var so = Qn(Vt, "Map");
function _A() {
  this.size = 0, this.__data__ = {
    hash: new Xn(),
    map: new (so || vn)(),
    string: new Xn()
  };
}
function kA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qa(e, t) {
  var n = e.__data__;
  return kA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function SA(e) {
  var t = qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function EA(e) {
  return qa(this, e).get(e);
}
function zA(e) {
  return qa(this, e).has(e);
}
function $A(e, t) {
  var n = qa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function gn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
gn.prototype.clear = _A;
gn.prototype.delete = SA;
gn.prototype.get = EA;
gn.prototype.has = zA;
gn.prototype.set = $A;
var PA = "Expected a function";
function Al(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(PA);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Al.Cache || gn)(), n;
}
Al.Cache = gn;
var CA = 500;
function AA(e) {
  var t = Al(e, function(r) {
    return n.size === CA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var TA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, OA = /\\(\\)?/g, NA = AA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(TA, function(n, r, o, a) {
    t.push(o ? a.replace(OA, "$1") : r || n);
  }), t;
});
function Gp(e) {
  return e == null ? "" : Fp(e);
}
function Tl(e, t) {
  return Lt(e) ? e : rA(e, t) ? [e] : NA(Gp(e));
}
function Ol(e) {
  if (typeof e == "string" || Ba(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function RA(e, t) {
  t = Tl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ol(t[n++])];
  return n && n == r ? e : void 0;
}
function _t(e, t, n) {
  var r = e == null ? void 0 : RA(e, t);
  return r === void 0 ? n : r;
}
function MA(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Wp = jp(Object.getPrototypeOf, Object), IA = "[object Object]", DA = Function.prototype, FA = Object.prototype, Yp = DA.toString, BA = FA.hasOwnProperty, LA = Yp.call(Object);
function UA(e) {
  if (!tn(e) || Zn(e) != IA)
    return !1;
  var t = Wp(e);
  if (t === null)
    return !0;
  var n = BA.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Yp.call(n) == LA;
}
function VA(e) {
  return function(t) {
    return e?.[t];
  };
}
function qA() {
  this.__data__ = new vn(), this.size = 0;
}
function jA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function HA(e) {
  return this.__data__.get(e);
}
function GA(e) {
  return this.__data__.has(e);
}
var WA = 200;
function YA(e, t) {
  var n = this.__data__;
  if (n instanceof vn) {
    var r = n.__data__;
    if (!so || r.length < WA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new gn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Qt(e) {
  var t = this.__data__ = new vn(e);
  this.size = t.size;
}
Qt.prototype.clear = qA;
Qt.prototype.delete = jA;
Qt.prototype.get = HA;
Qt.prototype.has = GA;
Qt.prototype.set = YA;
var Xp = typeof exports == "object" && exports && !exports.nodeType && exports, ud = Xp && typeof module == "object" && module && !module.nodeType && module, XA = ud && ud.exports === Xp, dd = XA ? Vt.Buffer : void 0, cd = dd ? dd.allocUnsafe : void 0;
function Kp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = cd ? cd(n) : new e.constructor(n);
  return e.copy(r), r;
}
function KA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function ZA() {
  return [];
}
var JA = Object.prototype, QA = JA.propertyIsEnumerable, fd = Object.getOwnPropertySymbols, eT = fd ? function(e) {
  return e == null ? [] : (e = Object(e), KA(fd(e), function(t) {
    return QA.call(e, t);
  }));
} : ZA;
function tT(e, t, n) {
  var r = t(e);
  return Lt(e) ? r : MA(r, n(e));
}
function Gs(e) {
  return tT(e, KC, eT);
}
var Ws = Qn(Vt, "DataView"), Ys = Qn(Vt, "Promise"), Xs = Qn(Vt, "Set"), pd = "[object Map]", nT = "[object Object]", hd = "[object Promise]", md = "[object Set]", vd = "[object WeakMap]", gd = "[object DataView]", rT = Jn(Ws), oT = Jn(so), aT = Jn(Ys), iT = Jn(Xs), sT = Jn(Hs), It = Zn;
(Ws && It(new Ws(new ArrayBuffer(1))) != gd || so && It(new so()) != pd || Ys && It(Ys.resolve()) != hd || Xs && It(new Xs()) != md || Hs && It(new Hs()) != vd) && (It = function(e) {
  var t = Zn(e), n = t == nT ? e.constructor : void 0, r = n ? Jn(n) : "";
  if (r)
    switch (r) {
      case rT:
        return gd;
      case oT:
        return pd;
      case aT:
        return hd;
      case iT:
        return md;
      case sT:
        return vd;
    }
  return t;
});
var lT = Object.prototype, uT = lT.hasOwnProperty;
function dT(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && uT.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ba = Vt.Uint8Array;
function Nl(e) {
  var t = new e.constructor(e.byteLength);
  return new ba(t).set(new ba(e)), t;
}
function cT(e, t) {
  var n = Nl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var fT = /\w*$/;
function pT(e) {
  var t = new e.constructor(e.source, fT.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var yd = en ? en.prototype : void 0, bd = yd ? yd.valueOf : void 0;
function hT(e) {
  return bd ? Object(bd.call(e)) : {};
}
function Zp(e, t) {
  var n = t ? Nl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var mT = "[object Boolean]", vT = "[object Date]", gT = "[object Map]", yT = "[object Number]", bT = "[object RegExp]", xT = "[object Set]", wT = "[object String]", _T = "[object Symbol]", kT = "[object ArrayBuffer]", ST = "[object DataView]", ET = "[object Float32Array]", zT = "[object Float64Array]", $T = "[object Int8Array]", PT = "[object Int16Array]", CT = "[object Int32Array]", AT = "[object Uint8Array]", TT = "[object Uint8ClampedArray]", OT = "[object Uint16Array]", NT = "[object Uint32Array]";
function RT(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case kT:
      return Nl(e);
    case mT:
    case vT:
      return new r(+e);
    case ST:
      return cT(e);
    case ET:
    case zT:
    case $T:
    case PT:
    case CT:
    case AT:
    case TT:
    case OT:
    case NT:
      return Zp(e, n);
    case gT:
      return new r();
    case yT:
    case wT:
      return new r(e);
    case bT:
      return pT(e);
    case xT:
      return new r();
    case _T:
      return hT(e);
  }
}
function Jp(e) {
  return typeof e.constructor == "function" && !$l(e) ? qP(Wp(e)) : {};
}
var MT = "[object Map]";
function IT(e) {
  return tn(e) && It(e) == MT;
}
var xd = yr && yr.isMap, DT = xd ? Pl(xd) : IT, FT = "[object Set]";
function BT(e) {
  return tn(e) && It(e) == FT;
}
var wd = yr && yr.isSet, LT = wd ? Pl(wd) : BT, UT = 1, Qp = "[object Arguments]", VT = "[object Array]", qT = "[object Boolean]", jT = "[object Date]", HT = "[object Error]", e0 = "[object Function]", GT = "[object GeneratorFunction]", WT = "[object Map]", YT = "[object Number]", t0 = "[object Object]", XT = "[object RegExp]", KT = "[object Set]", ZT = "[object String]", JT = "[object Symbol]", QT = "[object WeakMap]", eO = "[object ArrayBuffer]", tO = "[object DataView]", nO = "[object Float32Array]", rO = "[object Float64Array]", oO = "[object Int8Array]", aO = "[object Int16Array]", iO = "[object Int32Array]", sO = "[object Uint8Array]", lO = "[object Uint8ClampedArray]", uO = "[object Uint16Array]", dO = "[object Uint32Array]", We = {};
We[Qp] = We[VT] = We[eO] = We[tO] = We[qT] = We[jT] = We[nO] = We[rO] = We[oO] = We[aO] = We[iO] = We[WT] = We[YT] = We[t0] = We[XT] = We[KT] = We[ZT] = We[JT] = We[sO] = We[lO] = We[uO] = We[dO] = !0;
We[HT] = We[e0] = We[QT] = !1;
function Yo(e, t, n, r, o, a) {
  var i, l = t & UT;
  if (i !== void 0)
    return i;
  if (!Et(e))
    return e;
  var d = Lt(e);
  if (d)
    i = dT(e);
  else {
    var u = It(e), c = u == e0 || u == GT;
    if (ao(e))
      return Kp(e, l);
    if (u == t0 || u == Qp || c && !o)
      i = c ? {} : Jp(e);
    else {
      if (!We[u])
        return o ? e : {};
      i = RT(e, u, l);
    }
  }
  a || (a = new Qt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, i), LT(e) ? e.forEach(function(p) {
    i.add(Yo(p, t, n, p, e, a));
  }) : DT(e) && e.forEach(function(p, v) {
    i.set(v, Yo(p, t, n, v, e, a));
  });
  var h = Gs, b = d ? void 0 : h(e);
  return QP(b || e, function(p, v) {
    b && (v = p, p = e[v]), El(i, v, Yo(p, t, n, v, e, a));
  }), i;
}
var cO = 1, fO = 4;
function ut(e) {
  return Yo(e, cO | fO);
}
var pO = "__lodash_hash_undefined__";
function hO(e) {
  return this.__data__.set(e, pO), this;
}
function mO(e) {
  return this.__data__.has(e);
}
function xa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new gn(); ++t < n; )
    this.add(e[t]);
}
xa.prototype.add = xa.prototype.push = hO;
xa.prototype.has = mO;
function vO(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gO(e, t) {
  return e.has(t);
}
var yO = 1, bO = 2;
function n0(e, t, n, r, o, a) {
  var i = n & yO, l = e.length, d = t.length;
  if (l != d && !(i && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, h = !0, b = n & bO ? new xa() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < l; ) {
    var p = e[f], v = t[f];
    if (r)
      var m = i ? r(v, p, f, t, e, a) : r(p, v, f, e, t, a);
    if (m !== void 0) {
      if (m)
        continue;
      h = !1;
      break;
    }
    if (b) {
      if (!vO(t, function(y, $) {
        if (!gO(b, $) && (p === y || o(p, y, n, r, a)))
          return b.push($);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === v || o(p, v, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
function xO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function wO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var _O = 1, kO = 2, SO = "[object Boolean]", EO = "[object Date]", zO = "[object Error]", $O = "[object Map]", PO = "[object Number]", CO = "[object RegExp]", AO = "[object Set]", TO = "[object String]", OO = "[object Symbol]", NO = "[object ArrayBuffer]", RO = "[object DataView]", _d = en ? en.prototype : void 0, ki = _d ? _d.valueOf : void 0;
function MO(e, t, n, r, o, a, i) {
  switch (n) {
    case RO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case NO:
      return !(e.byteLength != t.byteLength || !a(new ba(e), new ba(t)));
    case SO:
    case EO:
    case PO:
      return mo(+e, +t);
    case zO:
      return e.name == t.name && e.message == t.message;
    case CO:
    case TO:
      return e == t + "";
    case $O:
      var l = xO;
    case AO:
      var d = r & _O;
      if (l || (l = wO), e.size != t.size && !d)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= kO, i.set(e, t);
      var c = n0(l(e), l(t), r, o, a, i);
      return i.delete(e), c;
    case OO:
      if (ki)
        return ki.call(e) == ki.call(t);
  }
  return !1;
}
var IO = 1, DO = Object.prototype, FO = DO.hasOwnProperty;
function BO(e, t, n, r, o, a) {
  var i = n & IO, l = Gs(e), d = l.length, u = Gs(t), c = u.length;
  if (d != c && !i)
    return !1;
  for (var f = d; f--; ) {
    var h = l[f];
    if (!(i ? h in t : FO.call(t, h)))
      return !1;
  }
  var b = a.get(e), p = a.get(t);
  if (b && p)
    return b == t && p == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var m = i; ++f < d; ) {
    h = l[f];
    var y = e[h], $ = t[h];
    if (r)
      var k = i ? r($, y, h, t, e, a) : r(y, $, h, e, t, a);
    if (!(k === void 0 ? y === $ || o(y, $, n, r, a) : k)) {
      v = !1;
      break;
    }
    m || (m = h == "constructor");
  }
  if (v && !m) {
    var T = e.constructor, C = t.constructor;
    T != C && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof C == "function" && C instanceof C) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var LO = 1, kd = "[object Arguments]", Sd = "[object Array]", Io = "[object Object]", UO = Object.prototype, Ed = UO.hasOwnProperty;
function VO(e, t, n, r, o, a) {
  var i = Lt(e), l = Lt(t), d = i ? Sd : It(e), u = l ? Sd : It(t);
  d = d == kd ? Io : d, u = u == kd ? Io : u;
  var c = d == Io, f = u == Io, h = d == u;
  if (h && ao(e)) {
    if (!ao(t))
      return !1;
    i = !0, c = !1;
  }
  if (h && !c)
    return a || (a = new Qt()), i || Cl(e) ? n0(e, t, n, r, o, a) : MO(e, t, d, n, r, o, a);
  if (!(n & LO)) {
    var b = c && Ed.call(e, "__wrapped__"), p = f && Ed.call(t, "__wrapped__");
    if (b || p) {
      var v = b ? e.value() : e, m = p ? t.value() : t;
      return a || (a = new Qt()), o(v, m, n, r, a);
    }
  }
  return h ? (a || (a = new Qt()), BO(e, t, n, r, o, a)) : !1;
}
function r0(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !tn(e) && !tn(t) ? e !== e && t !== t : VO(e, t, n, r, r0, o);
}
function qO(e, t, n) {
  t = Tl(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = Ol(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && zl(o) && La(i, o) && (Lt(e) || ya(e)));
}
function jO(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
      var d = i[++o];
      if (n(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var HO = jO(), Si = function() {
  return Vt.Date.now();
}, GO = "Expected a function", WO = Math.max, YO = Math.min;
function XO(e, t, n) {
  var r, o, a, i, l, d, u = 0, c = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(GO);
  t = td(t) || 0, Et(n) && (c = !0, f = "maxWait" in n, a = f ? WO(td(n.maxWait) || 0, t) : a, h = "trailing" in n ? !0 : h);
  function b(_) {
    var g = r, S = o;
    return r = o = void 0, u = _, i = e.apply(S, g), i;
  }
  function p(_) {
    return u = _, l = setTimeout(y, t), c ? b(_) : i;
  }
  function v(_) {
    var g = _ - d, S = _ - u, L = t - g;
    return f ? YO(L, a - S) : L;
  }
  function m(_) {
    var g = _ - d, S = _ - u;
    return d === void 0 || g >= t || g < 0 || f && S >= a;
  }
  function y() {
    var _ = Si();
    if (m(_))
      return $(_);
    l = setTimeout(y, v(_));
  }
  function $(_) {
    return l = void 0, h && r ? b(_) : (r = o = void 0, i);
  }
  function k() {
    l !== void 0 && clearTimeout(l), u = 0, r = d = o = l = void 0;
  }
  function T() {
    return l === void 0 ? i : $(Si());
  }
  function C() {
    var _ = Si(), g = m(_);
    if (r = arguments, o = this, d = _, g) {
      if (l === void 0)
        return p(d);
      if (f)
        return clearTimeout(l), l = setTimeout(y, t), b(d);
    }
    return l === void 0 && (l = setTimeout(y, t)), i;
  }
  return C.cancel = k, C.flush = T, C;
}
function Ks(e, t, n) {
  (n !== void 0 && !mo(e[t], n) || n === void 0 && !(t in e)) && Sl(e, t, n);
}
function KO(e) {
  return tn(e) && Ua(e);
}
function Zs(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function ZO(e) {
  return oC(e, Hp(e));
}
function JO(e, t, n, r, o, a, i) {
  var l = Zs(e, n), d = Zs(t, n), u = i.get(d);
  if (u) {
    Ks(e, n, u);
    return;
  }
  var c = a ? a(l, d, n + "", e, t, i) : void 0, f = c === void 0;
  if (f) {
    var h = Lt(d), b = !h && ao(d), p = !h && !b && Cl(d);
    c = d, h || b || p ? Lt(l) ? c = l : KO(l) ? c = HP(l) : b ? (f = !1, c = Kp(d, !0)) : p ? (f = !1, c = Zp(d, !0)) : c = [] : UA(d) || ya(d) ? (c = l, ya(l) ? c = ZO(l) : (!Et(l) || kl(l)) && (c = Jp(d))) : f = !1;
  }
  f && (i.set(d, c), o(c, d, r, a, i), i.delete(d)), Ks(e, n, c);
}
function o0(e, t, n, r, o) {
  e !== t && HO(t, function(a, i) {
    if (o || (o = new Qt()), Et(a))
      JO(e, t, i, n, o0, r, o);
    else {
      var l = r ? r(Zs(e, i), a, i + "", e, t, o) : void 0;
      l === void 0 && (l = a), Ks(e, i, l);
    }
  }, Hp);
}
var QO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, e8 = VA(QO), a0 = /[&<>"']/g, t8 = RegExp(a0.source);
function n8(e) {
  return e = Gp(e), e && t8.test(e) ? e.replace(a0, e8) : e;
}
var r8 = Object.prototype, o8 = r8.hasOwnProperty;
function a8(e, t) {
  return e != null && o8.call(e, t);
}
function i0(e, t) {
  return e != null && qO(e, t, a8);
}
function $n(e, t) {
  return r0(e, t);
}
var Js = uC(function(e, t, n) {
  o0(e, t, n);
});
function i8(e, t, n, r) {
  if (!Et(e))
    return e;
  t = Tl(t, e);
  for (var o = -1, a = t.length, i = a - 1, l = e; l != null && ++o < a; ) {
    var d = Ol(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != i) {
      var c = l[d];
      u = void 0, u === void 0 && (u = Et(c) ? c : La(t[o + 1]) ? [] : {});
    }
    El(l, d, u), l = l[d];
  }
  return e;
}
function At(e, t, n) {
  return e == null ? e : i8(e, t, n);
}
var zd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function s8(e) {
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
var Ei, $d;
function kr() {
  return $d || ($d = 1, Ei = TypeError), Ei;
}
const l8 = {}, u8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l8
}, Symbol.toStringTag, { value: "Module" })), d8 = /* @__PURE__ */ s8(u8);
var zi, Pd;
function ja() {
  if (Pd) return zi;
  Pd = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, b = h ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, v = Object.prototype.toString, m = Function.prototype.toString, y = String.prototype.match, $ = String.prototype.slice, k = String.prototype.replace, T = String.prototype.toUpperCase, C = String.prototype.toLowerCase, _ = RegExp.prototype.test, g = Array.prototype.concat, S = Array.prototype.join, L = Array.prototype.slice, F = Math.floor, O = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, E = Object.getOwnPropertySymbols, U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, A = typeof Symbol == "function" && typeof Symbol.iterator == "object", j = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === A || !0) ? Symbol.toStringTag : null, x = Object.prototype.propertyIsEnumerable, I = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(X) {
    return X.__proto__;
  } : null);
  function R(X, J) {
    if (X === 1 / 0 || X === -1 / 0 || X !== X || X && X > -1e3 && X < 1e3 || _.call(/e/, J))
      return J;
    var K = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof X == "number") {
      var P = X < 0 ? -F(-X) : F(X);
      if (P !== X) {
        var oe = String(P), Ee = $.call(J, oe.length + 1);
        return k.call(oe, K, "$&_") + "." + k.call(k.call(Ee, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return k.call(J, K, "$&_");
  }
  var Q = d8, te = Q.custom, se = D(te) ? te : null, he = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ze = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  zi = function X(J, K, P, oe) {
    var Ee = K || {};
    if (V(Ee, "quoteStyle") && !V(he, Ee.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (V(Ee, "maxStringLength") && (typeof Ee.maxStringLength == "number" ? Ee.maxStringLength < 0 && Ee.maxStringLength !== 1 / 0 : Ee.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Nt = V(Ee, "customInspect") ? Ee.customInspect : !0;
    if (typeof Nt != "boolean" && Nt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (V(Ee, "indent") && Ee.indent !== null && Ee.indent !== "	" && !(parseInt(Ee.indent, 10) === Ee.indent && Ee.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (V(Ee, "numericSeparator") && typeof Ee.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Pt = Ee.numericSeparator;
    if (typeof J > "u")
      return "undefined";
    if (J === null)
      return "null";
    if (typeof J == "boolean")
      return J ? "true" : "false";
    if (typeof J == "string")
      return ft(J, Ee);
    if (typeof J == "number") {
      if (J === 0)
        return 1 / 0 / J > 0 ? "0" : "-0";
      var it = String(J);
      return Pt ? R(J, it) : it;
    }
    if (typeof J == "bigint") {
      var yn = String(J) + "n";
      return Pt ? R(J, yn) : yn;
    }
    var ei = typeof Ee.depth > "u" ? 5 : Ee.depth;
    if (typeof P > "u" && (P = 0), P >= ei && ei > 0 && typeof J == "object")
      return we(J) ? "[Array]" : "[Object]";
    var nr = Qa(Ee, P);
    if (typeof oe > "u")
      oe = [];
    else if (de(oe, J) >= 0)
      return "[Circular]";
    function Rt(rr, So, hh) {
      if (So && (oe = L.call(oe), oe.push(So)), hh) {
        var Jl = {
          depth: Ee.depth
        };
        return V(Ee, "quoteStyle") && (Jl.quoteStyle = Ee.quoteStyle), X(rr, Jl, P + 1, oe);
      }
      return X(rr, Ee, P + 1, oe);
    }
    if (typeof J == "function" && !Ce(J)) {
      var Hl = ue(J), Gl = tr(J, Rt);
      return "[Function" + (Hl ? ": " + Hl : " (anonymous)") + "]" + (Gl.length > 0 ? " { " + S.call(Gl, ", ") + " }" : "");
    }
    if (D(J)) {
      var Wl = A ? k.call(String(J), /^(Symbol\(.*\))_[^)]*$/, "$1") : U.call(J);
      return typeof J == "object" && !A ? $t(Wl) : Wl;
    }
    if (bt(J)) {
      for (var zr = "<" + C.call(String(J.nodeName)), ti = J.attributes || [], ko = 0; ko < ti.length; ko++)
        zr += " " + ti[ko].name + "=" + xe(ce(ti[ko].value), "double", Ee);
      return zr += ">", J.childNodes && J.childNodes.length && (zr += "..."), zr += "</" + C.call(String(J.nodeName)) + ">", zr;
    }
    if (we(J)) {
      if (J.length === 0)
        return "[]";
      var ni = tr(J, Rt);
      return nr && !_o(ni) ? "[" + Er(ni, nr) + "]" : "[ " + S.call(ni, ", ") + " ]";
    }
    if (pe(J)) {
      var ri = tr(J, Rt);
      return !("cause" in Error.prototype) && "cause" in J && !x.call(J, "cause") ? "{ [" + String(J) + "] " + S.call(g.call("[cause]: " + Rt(J.cause), ri), ", ") + " }" : ri.length === 0 ? "[" + String(J) + "]" : "{ [" + String(J) + "] " + S.call(ri, ", ") + " }";
    }
    if (typeof J == "object" && Nt) {
      if (se && typeof J[se] == "function" && Q)
        return Q(J, { depth: ei - P });
      if (Nt !== "symbol" && typeof J.inspect == "function")
        return J.inspect();
    }
    if (ve(J)) {
      var Yl = [];
      return r && r.call(J, function(rr, So) {
        Yl.push(Rt(So, J, !0) + " => " + Rt(rr, J));
      }), wo("Map", n.call(J), Yl, nr);
    }
    if (Ne(J)) {
      var Xl = [];
      return l && l.call(J, function(rr) {
        Xl.push(Rt(rr, J));
      }), wo("Set", i.call(J), Xl, nr);
    }
    if (ge(J))
      return rn("WeakMap");
    if (Be(J))
      return rn("WeakSet");
    if (ke(J))
      return rn("WeakRef");
    if (ae(J))
      return $t(Rt(Number(J)));
    if (M(J))
      return $t(Rt(O.call(J)));
    if (be(J))
      return $t(p.call(J));
    if (Pe(J))
      return $t(Rt(String(J)));
    if (typeof window < "u" && J === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && J === globalThis || typeof zd < "u" && J === zd)
      return "{ [object globalThis] }";
    if (!$e(J) && !Ce(J)) {
      var oi = tr(J, Rt), Kl = I ? I(J) === Object.prototype : J instanceof Object || J.constructor === Object, ai = J instanceof Object ? "" : "null prototype", Zl = !Kl && j && Object(J) === J && j in J ? $.call(H(J), 8, -1) : ai ? "Object" : "", ph = Kl || typeof J.constructor != "function" ? "" : J.constructor.name ? J.constructor.name + " " : "", ii = ph + (Zl || ai ? "[" + S.call(g.call([], Zl || [], ai || []), ": ") + "] " : "");
      return oi.length === 0 ? ii + "{}" : nr ? ii + "{" + Er(oi, nr) + "}" : ii + "{ " + S.call(oi, ", ") + " }";
    }
    return String(J);
  };
  function xe(X, J, K) {
    var P = K.quoteStyle || J, oe = he[P];
    return oe + X + oe;
  }
  function ce(X) {
    return k.call(String(X), /"/g, "&quot;");
  }
  function fe(X) {
    return !j || !(typeof X == "object" && (j in X || typeof X[j] < "u"));
  }
  function we(X) {
    return H(X) === "[object Array]" && fe(X);
  }
  function $e(X) {
    return H(X) === "[object Date]" && fe(X);
  }
  function Ce(X) {
    return H(X) === "[object RegExp]" && fe(X);
  }
  function pe(X) {
    return H(X) === "[object Error]" && fe(X);
  }
  function Pe(X) {
    return H(X) === "[object String]" && fe(X);
  }
  function ae(X) {
    return H(X) === "[object Number]" && fe(X);
  }
  function be(X) {
    return H(X) === "[object Boolean]" && fe(X);
  }
  function D(X) {
    if (A)
      return X && typeof X == "object" && X instanceof Symbol;
    if (typeof X == "symbol")
      return !0;
    if (!X || typeof X != "object" || !U)
      return !1;
    try {
      return U.call(X), !0;
    } catch {
    }
    return !1;
  }
  function M(X) {
    if (!X || typeof X != "object" || !O)
      return !1;
    try {
      return O.call(X), !0;
    } catch {
    }
    return !1;
  }
  var B = Object.prototype.hasOwnProperty || function(X) {
    return X in this;
  };
  function V(X, J) {
    return B.call(X, J);
  }
  function H(X) {
    return v.call(X);
  }
  function ue(X) {
    if (X.name)
      return X.name;
    var J = y.call(m.call(X), /^function\s*([\w$]+)/);
    return J ? J[1] : null;
  }
  function de(X, J) {
    if (X.indexOf)
      return X.indexOf(J);
    for (var K = 0, P = X.length; K < P; K++)
      if (X[K] === J)
        return K;
    return -1;
  }
  function ve(X) {
    if (!n || !X || typeof X != "object")
      return !1;
    try {
      n.call(X);
      try {
        i.call(X);
      } catch {
        return !0;
      }
      return X instanceof Map;
    } catch {
    }
    return !1;
  }
  function ge(X) {
    if (!u || !X || typeof X != "object")
      return !1;
    try {
      u.call(X, u);
      try {
        f.call(X, f);
      } catch {
        return !0;
      }
      return X instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function ke(X) {
    if (!b || !X || typeof X != "object")
      return !1;
    try {
      return b.call(X), !0;
    } catch {
    }
    return !1;
  }
  function Ne(X) {
    if (!i || !X || typeof X != "object")
      return !1;
    try {
      i.call(X);
      try {
        n.call(X);
      } catch {
        return !0;
      }
      return X instanceof Set;
    } catch {
    }
    return !1;
  }
  function Be(X) {
    if (!f || !X || typeof X != "object")
      return !1;
    try {
      f.call(X, f);
      try {
        u.call(X, u);
      } catch {
        return !0;
      }
      return X instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function bt(X) {
    return !X || typeof X != "object" ? !1 : typeof HTMLElement < "u" && X instanceof HTMLElement ? !0 : typeof X.nodeName == "string" && typeof X.getAttribute == "function";
  }
  function ft(X, J) {
    if (X.length > J.maxStringLength) {
      var K = X.length - J.maxStringLength, P = "... " + K + " more character" + (K > 1 ? "s" : "");
      return ft($.call(X, 0, J.maxStringLength), J) + P;
    }
    var oe = ze[J.quoteStyle || "single"];
    oe.lastIndex = 0;
    var Ee = k.call(k.call(X, oe, "\\$1"), /[\x00-\x1f]/g, er);
    return xe(Ee, "single", J);
  }
  function er(X) {
    var J = X.charCodeAt(0), K = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[J];
    return K ? "\\" + K : "\\x" + (J < 16 ? "0" : "") + T.call(J.toString(16));
  }
  function $t(X) {
    return "Object(" + X + ")";
  }
  function rn(X) {
    return X + " { ? }";
  }
  function wo(X, J, K, P) {
    var oe = P ? Er(K, P) : S.call(K, ", ");
    return X + " (" + J + ") {" + oe + "}";
  }
  function _o(X) {
    for (var J = 0; J < X.length; J++)
      if (de(X[J], `
`) >= 0)
        return !1;
    return !0;
  }
  function Qa(X, J) {
    var K;
    if (X.indent === "	")
      K = "	";
    else if (typeof X.indent == "number" && X.indent > 0)
      K = S.call(Array(X.indent + 1), " ");
    else
      return null;
    return {
      base: K,
      prev: S.call(Array(J + 1), K)
    };
  }
  function Er(X, J) {
    if (X.length === 0)
      return "";
    var K = `
` + J.prev + J.base;
    return K + S.call(X, "," + K) + `
` + J.prev;
  }
  function tr(X, J) {
    var K = we(X), P = [];
    if (K) {
      P.length = X.length;
      for (var oe = 0; oe < X.length; oe++)
        P[oe] = V(X, oe) ? J(X[oe], X) : "";
    }
    var Ee = typeof E == "function" ? E(X) : [], Nt;
    if (A) {
      Nt = {};
      for (var Pt = 0; Pt < Ee.length; Pt++)
        Nt["$" + Ee[Pt]] = Ee[Pt];
    }
    for (var it in X)
      V(X, it) && (K && String(Number(it)) === it && it < X.length || A && Nt["$" + it] instanceof Symbol || (_.call(/[^\w$]/, it) ? P.push(J(it, X) + ": " + J(X[it], X)) : P.push(it + ": " + J(X[it], X))));
    if (typeof E == "function")
      for (var yn = 0; yn < Ee.length; yn++)
        x.call(X, Ee[yn]) && P.push("[" + J(Ee[yn]) + "]: " + J(X[Ee[yn]], X));
    return P;
  }
  return zi;
}
var $i, Cd;
function c8() {
  if (Cd) return $i;
  Cd = 1;
  var e = /* @__PURE__ */ ja(), t = /* @__PURE__ */ kr(), n = function(l, d, u) {
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
  }, i = function(l, d) {
    if (l)
      return n(l, d, !0);
  };
  return $i = function() {
    var d, u = {
      assert: function(c) {
        if (!u.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var f = i(d, c);
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
  }, $i;
}
var Pi, Ad;
function s0() {
  return Ad || (Ad = 1, Pi = Object), Pi;
}
var Ci, Td;
function f8() {
  return Td || (Td = 1, Ci = Error), Ci;
}
var Ai, Od;
function p8() {
  return Od || (Od = 1, Ai = EvalError), Ai;
}
var Ti, Nd;
function h8() {
  return Nd || (Nd = 1, Ti = RangeError), Ti;
}
var Oi, Rd;
function m8() {
  return Rd || (Rd = 1, Oi = ReferenceError), Oi;
}
var Ni, Md;
function v8() {
  return Md || (Md = 1, Ni = SyntaxError), Ni;
}
var Ri, Id;
function g8() {
  return Id || (Id = 1, Ri = URIError), Ri;
}
var Mi, Dd;
function y8() {
  return Dd || (Dd = 1, Mi = Math.abs), Mi;
}
var Ii, Fd;
function b8() {
  return Fd || (Fd = 1, Ii = Math.floor), Ii;
}
var Di, Bd;
function x8() {
  return Bd || (Bd = 1, Di = Math.max), Di;
}
var Fi, Ld;
function w8() {
  return Ld || (Ld = 1, Fi = Math.min), Fi;
}
var Bi, Ud;
function _8() {
  return Ud || (Ud = 1, Bi = Math.pow), Bi;
}
var Li, Vd;
function k8() {
  return Vd || (Vd = 1, Li = Math.round), Li;
}
var Ui, qd;
function S8() {
  return qd || (qd = 1, Ui = Number.isNaN || function(t) {
    return t !== t;
  }), Ui;
}
var Vi, jd;
function E8() {
  if (jd) return Vi;
  jd = 1;
  var e = /* @__PURE__ */ S8();
  return Vi = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Vi;
}
var qi, Hd;
function z8() {
  return Hd || (Hd = 1, qi = Object.getOwnPropertyDescriptor), qi;
}
var ji, Gd;
function l0() {
  if (Gd) return ji;
  Gd = 1;
  var e = /* @__PURE__ */ z8();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ji = e, ji;
}
var Hi, Wd;
function $8() {
  if (Wd) return Hi;
  Wd = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Hi = e, Hi;
}
var Gi, Yd;
function P8() {
  return Yd || (Yd = 1, Gi = function() {
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
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
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
  }), Gi;
}
var Wi, Xd;
function C8() {
  if (Xd) return Wi;
  Xd = 1;
  var e = typeof Symbol < "u" && Symbol, t = P8();
  return Wi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Wi;
}
var Yi, Kd;
function u0() {
  return Kd || (Kd = 1, Yi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Yi;
}
var Xi, Zd;
function d0() {
  if (Zd) return Xi;
  Zd = 1;
  var e = /* @__PURE__ */ s0();
  return Xi = e.getPrototypeOf || null, Xi;
}
var Ki, Jd;
function A8() {
  if (Jd) return Ki;
  Jd = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(d, u) {
    for (var c = [], f = 0; f < d.length; f += 1)
      c[f] = d[f];
    for (var h = 0; h < u.length; h += 1)
      c[h + d.length] = u[h];
    return c;
  }, a = function(d, u) {
    for (var c = [], f = u, h = 0; f < d.length; f += 1, h += 1)
      c[h] = d[f];
    return c;
  }, i = function(l, d) {
    for (var u = "", c = 0; c < l.length; c += 1)
      u += l[c], c + 1 < l.length && (u += d);
    return u;
  };
  return Ki = function(d) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var c = a(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var y = u.apply(
          this,
          o(c, arguments)
        );
        return Object(y) === y ? y : this;
      }
      return u.apply(
        d,
        o(c, arguments)
      );
    }, b = n(0, u.length - c.length), p = [], v = 0; v < b; v++)
      p[v] = "$" + v;
    if (f = Function("binder", "return function (" + i(p, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var m = function() {
      };
      m.prototype = u.prototype, f.prototype = new m(), m.prototype = null;
    }
    return f;
  }, Ki;
}
var Zi, Qd;
function Ha() {
  if (Qd) return Zi;
  Qd = 1;
  var e = A8();
  return Zi = Function.prototype.bind || e, Zi;
}
var Ji, ec;
function Rl() {
  return ec || (ec = 1, Ji = Function.prototype.call), Ji;
}
var Qi, tc;
function c0() {
  return tc || (tc = 1, Qi = Function.prototype.apply), Qi;
}
var es, nc;
function T8() {
  return nc || (nc = 1, es = typeof Reflect < "u" && Reflect && Reflect.apply), es;
}
var ts, rc;
function O8() {
  if (rc) return ts;
  rc = 1;
  var e = Ha(), t = c0(), n = Rl(), r = T8();
  return ts = r || e.call(n, t), ts;
}
var ns, oc;
function f0() {
  if (oc) return ns;
  oc = 1;
  var e = Ha(), t = /* @__PURE__ */ kr(), n = Rl(), r = O8();
  return ns = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, ns;
}
var rs, ac;
function N8() {
  if (ac) return rs;
  ac = 1;
  var e = f0(), t = /* @__PURE__ */ l0(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return rs = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : o(l));
    }
  ) : !1, rs;
}
var os, ic;
function R8() {
  if (ic) return os;
  ic = 1;
  var e = u0(), t = d0(), n = /* @__PURE__ */ N8();
  return os = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, os;
}
var as, sc;
function M8() {
  if (sc) return as;
  sc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Ha();
  return as = n.call(e, t), as;
}
var is, lc;
function Ml() {
  if (lc) return is;
  lc = 1;
  var e, t = /* @__PURE__ */ s0(), n = /* @__PURE__ */ f8(), r = /* @__PURE__ */ p8(), o = /* @__PURE__ */ h8(), a = /* @__PURE__ */ m8(), i = /* @__PURE__ */ v8(), l = /* @__PURE__ */ kr(), d = /* @__PURE__ */ g8(), u = /* @__PURE__ */ y8(), c = /* @__PURE__ */ b8(), f = /* @__PURE__ */ x8(), h = /* @__PURE__ */ w8(), b = /* @__PURE__ */ _8(), p = /* @__PURE__ */ k8(), v = /* @__PURE__ */ E8(), m = Function, y = function(Ce) {
    try {
      return m('"use strict"; return (' + Ce + ").constructor;")();
    } catch {
    }
  }, $ = /* @__PURE__ */ l0(), k = /* @__PURE__ */ $8(), T = function() {
    throw new l();
  }, C = $ ? (function() {
    try {
      return arguments.callee, T;
    } catch {
      try {
        return $(arguments, "callee").get;
      } catch {
        return T;
      }
    }
  })() : T, _ = C8()(), g = R8(), S = d0(), L = u0(), F = c0(), O = Rl(), E = {}, U = typeof Uint8Array > "u" || !g ? e : g(Uint8Array), A = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && g ? g([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": E,
    "%AsyncGenerator%": E,
    "%AsyncGeneratorFunction%": E,
    "%AsyncIteratorPrototype%": E,
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
    "%Function%": m,
    "%GeneratorFunction%": E,
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
    "%SyntaxError%": i,
    "%ThrowTypeError%": C,
    "%TypedArray%": U,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": O,
    "%Function.prototype.apply%": F,
    "%Object.defineProperty%": k,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": u,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": b,
    "%Math.round%": p,
    "%Math.sign%": v,
    "%Reflect.getPrototypeOf%": L
  };
  if (g)
    try {
      null.error;
    } catch (Ce) {
      var j = g(g(Ce));
      A["%Error.prototype%"] = j;
    }
  var x = function Ce(pe) {
    var Pe;
    if (pe === "%AsyncFunction%")
      Pe = y("async function () {}");
    else if (pe === "%GeneratorFunction%")
      Pe = y("function* () {}");
    else if (pe === "%AsyncGeneratorFunction%")
      Pe = y("async function* () {}");
    else if (pe === "%AsyncGenerator%") {
      var ae = Ce("%AsyncGeneratorFunction%");
      ae && (Pe = ae.prototype);
    } else if (pe === "%AsyncIteratorPrototype%") {
      var be = Ce("%AsyncGenerator%");
      be && g && (Pe = g(be.prototype));
    }
    return A[pe] = Pe, Pe;
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
  }, R = Ha(), Q = /* @__PURE__ */ M8(), te = R.call(O, Array.prototype.concat), se = R.call(F, Array.prototype.splice), he = R.call(O, String.prototype.replace), ze = R.call(O, String.prototype.slice), xe = R.call(O, RegExp.prototype.exec), ce = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fe = /\\(\\)?/g, we = function(pe) {
    var Pe = ze(pe, 0, 1), ae = ze(pe, -1);
    if (Pe === "%" && ae !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (ae === "%" && Pe !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var be = [];
    return he(pe, ce, function(D, M, B, V) {
      be[be.length] = B ? he(V, fe, "$1") : M || D;
    }), be;
  }, $e = function(pe, Pe) {
    var ae = pe, be;
    if (Q(I, ae) && (be = I[ae], ae = "%" + be[0] + "%"), Q(A, ae)) {
      var D = A[ae];
      if (D === E && (D = x(ae)), typeof D > "u" && !Pe)
        throw new l("intrinsic " + pe + " exists, but is not available. Please file an issue!");
      return {
        alias: be,
        name: ae,
        value: D
      };
    }
    throw new i("intrinsic " + pe + " does not exist!");
  };
  return is = function(pe, Pe) {
    if (typeof pe != "string" || pe.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Pe != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (xe(/^%?[^%]*%?$/, pe) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ae = we(pe), be = ae.length > 0 ? ae[0] : "", D = $e("%" + be + "%", Pe), M = D.name, B = D.value, V = !1, H = D.alias;
    H && (be = H[0], se(ae, te([0, 1], H)));
    for (var ue = 1, de = !0; ue < ae.length; ue += 1) {
      var ve = ae[ue], ge = ze(ve, 0, 1), ke = ze(ve, -1);
      if ((ge === '"' || ge === "'" || ge === "`" || ke === '"' || ke === "'" || ke === "`") && ge !== ke)
        throw new i("property names with quotes must have matching quotes");
      if ((ve === "constructor" || !de) && (V = !0), be += "." + ve, M = "%" + be + "%", Q(A, M))
        B = A[M];
      else if (B != null) {
        if (!(ve in B)) {
          if (!Pe)
            throw new l("base intrinsic for " + pe + " exists, but the property is not available.");
          return;
        }
        if ($ && ue + 1 >= ae.length) {
          var Ne = $(B, ve);
          de = !!Ne, de && "get" in Ne && !("originalValue" in Ne.get) ? B = Ne.get : B = B[ve];
        } else
          de = Q(B, ve), B = B[ve];
        de && !V && (A[M] = B);
      }
    }
    return B;
  }, is;
}
var ss, uc;
function p0() {
  if (uc) return ss;
  uc = 1;
  var e = /* @__PURE__ */ Ml(), t = f0(), n = t([e("%String.prototype.indexOf%")]);
  return ss = function(o, a) {
    var i = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof i == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [i]
    ) : i;
  }, ss;
}
var ls, dc;
function h0() {
  if (dc) return ls;
  dc = 1;
  var e = /* @__PURE__ */ Ml(), t = /* @__PURE__ */ p0(), n = /* @__PURE__ */ ja(), r = /* @__PURE__ */ kr(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return ls = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, h = {
      assert: function(b) {
        if (!h.has(b))
          throw new r("Side channel does not contain " + n(b));
      },
      delete: function(b) {
        if (f) {
          var p = d(f, b);
          return u(f) === 0 && (f = void 0), p;
        }
        return !1;
      },
      get: function(b) {
        if (f)
          return a(f, b);
      },
      has: function(b) {
        return f ? l(f, b) : !1;
      },
      set: function(b, p) {
        f || (f = new o()), i(f, b, p);
      }
    };
    return h;
  }, ls;
}
var us, cc;
function I8() {
  if (cc) return us;
  cc = 1;
  var e = /* @__PURE__ */ Ml(), t = /* @__PURE__ */ p0(), n = /* @__PURE__ */ ja(), r = h0(), o = /* @__PURE__ */ kr(), a = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return us = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, h, b = {
        assert: function(p) {
          if (!b.has(p))
            throw new o("Side channel does not contain " + n(p));
        },
        delete: function(p) {
          if (a && p && (typeof p == "object" || typeof p == "function")) {
            if (f)
              return u(f, p);
          } else if (r && h)
            return h.delete(p);
          return !1;
        },
        get: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && f ? i(f, p) : h && h.get(p);
        },
        has: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && f ? d(f, p) : !!h && h.has(p);
        },
        set: function(p, v) {
          a && p && (typeof p == "object" || typeof p == "function") ? (f || (f = new a()), l(f, p, v)) : r && (h || (h = r()), h.set(p, v));
        }
      };
      return b;
    }
  ) : r, us;
}
var ds, fc;
function m0() {
  if (fc) return ds;
  fc = 1;
  var e = /* @__PURE__ */ kr(), t = /* @__PURE__ */ ja(), n = c8(), r = h0(), o = I8(), a = o || r || n;
  return ds = function() {
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
  }, ds;
}
var cs, pc;
function Il() {
  if (pc) return cs;
  pc = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return cs = {
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
  }, cs;
}
var fs, hc;
function v0() {
  if (hc) return fs;
  hc = 1;
  var e = /* @__PURE__ */ Il(), t = m0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(g, S) {
    return o.set(g, S), g;
  }, i = function(g) {
    return o.has(g);
  }, l = function(g) {
    return o.get(g);
  }, d = function(g, S) {
    o.set(g, S);
  }, u = (function() {
    for (var _ = [], g = 0; g < 256; ++g)
      _[_.length] = "%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase();
    return _;
  })(), c = function(g) {
    for (; g.length > 1; ) {
      var S = g.pop(), L = S.obj[S.prop];
      if (r(L)) {
        for (var F = [], O = 0; O < L.length; ++O)
          typeof L[O] < "u" && (F[F.length] = L[O]);
        S.obj[S.prop] = F;
      }
    }
  }, f = function(g, S) {
    for (var L = S && S.plainObjects ? { __proto__: null } : {}, F = 0; F < g.length; ++F)
      typeof g[F] < "u" && (L[F] = g[F]);
    return L;
  }, h = function _(g, S, L) {
    if (!S)
      return g;
    if (typeof S != "object" && typeof S != "function") {
      if (r(g)) {
        var F = g.length;
        if (L && typeof L.arrayLimit == "number" && F > L.arrayLimit)
          return a(f(g.concat(S), L), F);
        g[F] = S;
      } else if (g && typeof g == "object")
        if (i(g)) {
          var O = l(g) + 1;
          g[O] = S, d(g, O);
        } else {
          if (L && L.strictMerge)
            return [g, S];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, S)) && (g[S] = !0);
        }
      else
        return [g, S];
      return g;
    }
    if (!g || typeof g != "object") {
      if (i(S)) {
        for (var E = Object.keys(S), U = L && L.plainObjects ? { __proto__: null, 0: g } : { 0: g }, A = 0; A < E.length; A++) {
          var j = parseInt(E[A], 10);
          U[j + 1] = S[E[A]];
        }
        return a(U, l(S) + 1);
      }
      var x = [g].concat(S);
      return L && typeof L.arrayLimit == "number" && x.length > L.arrayLimit ? a(f(x, L), x.length - 1) : x;
    }
    var I = g;
    return r(g) && !r(S) && (I = f(g, L)), r(g) && r(S) ? (S.forEach(function(R, Q) {
      if (n.call(g, Q)) {
        var te = g[Q];
        te && typeof te == "object" && R && typeof R == "object" ? g[Q] = _(te, R, L) : g[g.length] = R;
      } else
        g[Q] = R;
    }), g) : Object.keys(S).reduce(function(R, Q) {
      var te = S[Q];
      if (n.call(R, Q) ? R[Q] = _(R[Q], te, L) : R[Q] = te, i(S) && !i(R) && a(R, l(S)), i(R)) {
        var se = parseInt(Q, 10);
        String(se) === Q && se >= 0 && se > l(R) && d(R, se);
      }
      return R;
    }, I);
  }, b = function(g, S) {
    return Object.keys(S).reduce(function(L, F) {
      return L[F] = S[F], L;
    }, g);
  }, p = function(_, g, S) {
    var L = _.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, v = 1024, m = function(g, S, L, F, O) {
    if (g.length === 0)
      return g;
    var E = g;
    if (typeof g == "symbol" ? E = Symbol.prototype.toString.call(g) : typeof g != "string" && (E = String(g)), L === "iso-8859-1")
      return escape(E).replace(/%u[0-9a-f]{4}/gi, function(Q) {
        return "%26%23" + parseInt(Q.slice(2), 16) + "%3B";
      });
    for (var U = "", A = 0; A < E.length; A += v) {
      for (var j = E.length >= v ? E.slice(A, A + v) : E, x = [], I = 0; I < j.length; ++I) {
        var R = j.charCodeAt(I);
        if (R === 45 || R === 46 || R === 95 || R === 126 || R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || O === e.RFC1738 && (R === 40 || R === 41)) {
          x[x.length] = j.charAt(I);
          continue;
        }
        if (R < 128) {
          x[x.length] = u[R];
          continue;
        }
        if (R < 2048) {
          x[x.length] = u[192 | R >> 6] + u[128 | R & 63];
          continue;
        }
        if (R < 55296 || R >= 57344) {
          x[x.length] = u[224 | R >> 12] + u[128 | R >> 6 & 63] + u[128 | R & 63];
          continue;
        }
        I += 1, R = 65536 + ((R & 1023) << 10 | j.charCodeAt(I) & 1023), x[x.length] = u[240 | R >> 18] + u[128 | R >> 12 & 63] + u[128 | R >> 6 & 63] + u[128 | R & 63];
      }
      U += x.join("");
    }
    return U;
  }, y = function(g) {
    for (var S = [{ obj: { o: g }, prop: "o" }], L = [], F = 0; F < S.length; ++F)
      for (var O = S[F], E = O.obj[O.prop], U = Object.keys(E), A = 0; A < U.length; ++A) {
        var j = U[A], x = E[j];
        typeof x == "object" && x !== null && L.indexOf(x) === -1 && (S[S.length] = { obj: E, prop: j }, L[L.length] = x);
      }
    return c(S), g;
  }, $ = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, k = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g));
  }, T = function(g, S, L, F) {
    if (i(g)) {
      var O = l(g) + 1;
      return g[O] = S, d(g, O), g;
    }
    var E = [].concat(g, S);
    return E.length > L ? a(f(E, { plainObjects: F }), E.length - 1) : E;
  }, C = function(g, S) {
    if (r(g)) {
      for (var L = [], F = 0; F < g.length; F += 1)
        L[L.length] = S(g[F]);
      return L;
    }
    return S(g);
  };
  return fs = {
    arrayToObject: f,
    assign: b,
    combine: T,
    compact: y,
    decode: p,
    encode: m,
    isBuffer: k,
    isOverflow: i,
    isRegExp: $,
    markOverflow: a,
    maybeMap: C,
    merge: h
  }, fs;
}
var ps, mc;
function D8() {
  if (mc) return ps;
  mc = 1;
  var e = m0(), t = /* @__PURE__ */ v0(), n = /* @__PURE__ */ Il(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(m) {
      return m + "[]";
    },
    comma: "comma",
    indices: function(m, y) {
      return m + "[" + y + "]";
    },
    repeat: function(m) {
      return m;
    }
  }, a = Array.isArray, i = Array.prototype.push, l = function(v, m) {
    i.apply(v, a(m) ? m : [m]);
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
    serializeDate: function(m) {
      return d.call(m);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(m) {
    return typeof m == "string" || typeof m == "number" || typeof m == "boolean" || typeof m == "symbol" || typeof m == "bigint";
  }, h = {}, b = function v(m, y, $, k, T, C, _, g, S, L, F, O, E, U, A, j, x, I) {
    for (var R = m, Q = I, te = 0, se = !1; (Q = Q.get(h)) !== void 0 && !se; ) {
      var he = Q.get(m);
      if (te += 1, typeof he < "u") {
        if (he === te)
          throw new RangeError("Cyclic object value");
        se = !0;
      }
      typeof Q.get(h) > "u" && (te = 0);
    }
    if (typeof L == "function" ? R = L(y, R) : R instanceof Date ? R = E(R) : $ === "comma" && a(R) && (R = t.maybeMap(R, function(M) {
      return M instanceof Date ? E(M) : M;
    })), R === null) {
      if (C)
        return S && !j ? S(y, c.encoder, x, "key", U) : y;
      R = "";
    }
    if (f(R) || t.isBuffer(R)) {
      if (S) {
        var ze = j ? y : S(y, c.encoder, x, "key", U);
        return [A(ze) + "=" + A(S(R, c.encoder, x, "value", U))];
      }
      return [A(y) + "=" + A(String(R))];
    }
    var xe = [];
    if (typeof R > "u")
      return xe;
    var ce;
    if ($ === "comma" && a(R))
      j && S && (R = t.maybeMap(R, S)), ce = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (a(L))
      ce = L;
    else {
      var fe = Object.keys(R);
      ce = F ? fe.sort(F) : fe;
    }
    var we = g ? String(y).replace(/\./g, "%2E") : String(y), $e = k && a(R) && R.length === 1 ? we + "[]" : we;
    if (T && a(R) && R.length === 0)
      return $e + "[]";
    for (var Ce = 0; Ce < ce.length; ++Ce) {
      var pe = ce[Ce], Pe = typeof pe == "object" && pe && typeof pe.value < "u" ? pe.value : R[pe];
      if (!(_ && Pe === null)) {
        var ae = O && g ? String(pe).replace(/\./g, "%2E") : String(pe), be = a(R) ? typeof $ == "function" ? $($e, ae) : $e : $e + (O ? "." + ae : "[" + ae + "]");
        I.set(m, te);
        var D = e();
        D.set(h, I), l(xe, v(
          Pe,
          be,
          $,
          k,
          T,
          C,
          _,
          g,
          $ === "comma" && j && a(R) ? null : S,
          L,
          F,
          O,
          E,
          U,
          A,
          j,
          x,
          D
        ));
      }
    }
    return xe;
  }, p = function(m) {
    if (!m)
      return c;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.encodeDotInKeys < "u" && typeof m.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.encoder !== null && typeof m.encoder < "u" && typeof m.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var y = m.charset || c.charset;
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var $ = n.default;
    if (typeof m.format < "u") {
      if (!r.call(n.formatters, m.format))
        throw new TypeError("Unknown format option provided.");
      $ = m.format;
    }
    var k = n.formatters[$], T = c.filter;
    (typeof m.filter == "function" || a(m.filter)) && (T = m.filter);
    var C;
    if (m.arrayFormat in o ? C = m.arrayFormat : "indices" in m ? C = m.indices ? "indices" : "repeat" : C = c.arrayFormat, "commaRoundTrip" in m && typeof m.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var _ = typeof m.allowDots > "u" ? m.encodeDotInKeys === !0 ? !0 : c.allowDots : !!m.allowDots;
    return {
      addQueryPrefix: typeof m.addQueryPrefix == "boolean" ? m.addQueryPrefix : c.addQueryPrefix,
      allowDots: _,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: C,
      charset: y,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!m.commaRoundTrip,
      delimiter: typeof m.delimiter > "u" ? c.delimiter : m.delimiter,
      encode: typeof m.encode == "boolean" ? m.encode : c.encode,
      encodeDotInKeys: typeof m.encodeDotInKeys == "boolean" ? m.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof m.encoder == "function" ? m.encoder : c.encoder,
      encodeValuesOnly: typeof m.encodeValuesOnly == "boolean" ? m.encodeValuesOnly : c.encodeValuesOnly,
      filter: T,
      format: $,
      formatter: k,
      serializeDate: typeof m.serializeDate == "function" ? m.serializeDate : c.serializeDate,
      skipNulls: typeof m.skipNulls == "boolean" ? m.skipNulls : c.skipNulls,
      sort: typeof m.sort == "function" ? m.sort : null,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : c.strictNullHandling
    };
  };
  return ps = function(v, m) {
    var y = v, $ = p(m), k, T;
    typeof $.filter == "function" ? (T = $.filter, y = T("", y)) : a($.filter) && (T = $.filter, k = T);
    var C = [];
    if (typeof y != "object" || y === null)
      return "";
    var _ = o[$.arrayFormat], g = _ === "comma" && $.commaRoundTrip;
    k || (k = Object.keys(y)), $.sort && k.sort($.sort);
    for (var S = e(), L = 0; L < k.length; ++L) {
      var F = k[L], O = y[F];
      $.skipNulls && O === null || l(C, b(
        O,
        F,
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
    var E = C.join($.delimiter), U = $.addQueryPrefix === !0 ? "?" : "";
    return $.charsetSentinel && ($.charset === "iso-8859-1" ? U += "utf8=%26%2310003%3B&" : U += "utf8=%E2%9C%93&"), E.length > 0 ? U + E : "";
  }, ps;
}
var hs, vc;
function F8() {
  if (vc) return hs;
  vc = 1;
  var e = /* @__PURE__ */ v0(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, o = function(b) {
    return b.replace(/&#(\d+);/g, function(p, v) {
      return String.fromCharCode(parseInt(v, 10));
    });
  }, a = function(b, p, v) {
    if (b && typeof b == "string" && p.comma && b.indexOf(",") > -1)
      return b.split(",");
    if (p.throwOnLimitExceeded && v >= p.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return b;
  }, i = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", d = function(p, v) {
    var m = { __proto__: null }, y = v.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    y = y.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var $ = v.parameterLimit === 1 / 0 ? void 0 : v.parameterLimit, k = y.split(
      v.delimiter,
      v.throwOnLimitExceeded && typeof $ < "u" ? $ + 1 : $
    );
    if (v.throwOnLimitExceeded && typeof $ < "u" && k.length > $)
      throw new RangeError("Parameter limit exceeded. Only " + $ + " parameter" + ($ === 1 ? "" : "s") + " allowed.");
    var T = -1, C, _ = v.charset;
    if (v.charsetSentinel)
      for (C = 0; C < k.length; ++C)
        k[C].indexOf("utf8=") === 0 && (k[C] === l ? _ = "utf-8" : k[C] === i && (_ = "iso-8859-1"), T = C, C = k.length);
    for (C = 0; C < k.length; ++C)
      if (C !== T) {
        var g = k[C], S = g.indexOf("]="), L = S === -1 ? g.indexOf("=") : S + 1, F, O;
        if (L === -1 ? (F = v.decoder(g, r.decoder, _, "key"), O = v.strictNullHandling ? null : "") : (F = v.decoder(g.slice(0, L), r.decoder, _, "key"), F !== null && (O = e.maybeMap(
          a(
            g.slice(L + 1),
            v,
            n(m[F]) ? m[F].length : 0
          ),
          function(U) {
            return v.decoder(U, r.decoder, _, "value");
          }
        ))), O && v.interpretNumericEntities && _ === "iso-8859-1" && (O = o(String(O))), g.indexOf("[]=") > -1 && (O = n(O) ? [O] : O), v.comma && n(O) && O.length > v.arrayLimit) {
          if (v.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          O = e.combine([], O, v.arrayLimit, v.plainObjects);
        }
        if (F !== null) {
          var E = t.call(m, F);
          E && (v.duplicates === "combine" || g.indexOf("[]=") > -1) ? m[F] = e.combine(
            m[F],
            O,
            v.arrayLimit,
            v.plainObjects
          ) : (!E || v.duplicates === "last") && (m[F] = O);
        }
      }
    return m;
  }, u = function(b, p, v, m) {
    var y = 0;
    if (b.length > 0 && b[b.length - 1] === "[]") {
      var $ = b.slice(0, -1).join("");
      y = Array.isArray(p) && p[$] ? p[$].length : 0;
    }
    for (var k = m ? p : a(p, v, y), T = b.length - 1; T >= 0; --T) {
      var C, _ = b[T];
      if (_ === "[]" && v.parseArrays)
        e.isOverflow(k) ? C = k : C = v.allowEmptyArrays && (k === "" || v.strictNullHandling && k === null) ? [] : e.combine(
          [],
          k,
          v.arrayLimit,
          v.plainObjects
        );
      else {
        C = v.plainObjects ? { __proto__: null } : {};
        var g = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, S = v.decodeDotInKeys ? g.replace(/%2E/g, ".") : g, L = parseInt(S, 10), F = !isNaN(L) && _ !== S && String(L) === S && L >= 0 && v.parseArrays;
        if (!v.parseArrays && S === "")
          C = { 0: k };
        else if (F && L < v.arrayLimit)
          C = [], C[L] = k;
        else {
          if (F && v.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          F ? (C[L] = k, e.markOverflow(C, L)) : S !== "__proto__" && (C[S] = k);
        }
      }
      k = C;
    }
    return k;
  }, c = function(p, v) {
    var m = v.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (v.depth <= 0)
      return !v.plainObjects && t.call(Object.prototype, m) && !v.allowPrototypes ? void 0 : [m];
    var y = /(\[[^[\]]*])/, $ = /(\[[^[\]]*])/g, k = y.exec(m), T = k ? m.slice(0, k.index) : m, C = [];
    if (T) {
      if (!v.plainObjects && t.call(Object.prototype, T) && !v.allowPrototypes)
        return;
      C[C.length] = T;
    }
    for (var _ = 0; (k = $.exec(m)) !== null && _ < v.depth; ) {
      _ += 1;
      var g = k[1].slice(1, -1);
      if (!v.plainObjects && t.call(Object.prototype, g) && !v.allowPrototypes)
        return;
      C[C.length] = k[1];
    }
    if (k) {
      if (v.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + v.depth + " and strictDepth is true");
      C[C.length] = "[" + m.slice(k.index) + "]";
    }
    return C;
  }, f = function(p, v, m, y) {
    if (p) {
      var $ = c(p, m);
      if ($)
        return u($, v, m, y);
    }
  }, h = function(p) {
    if (!p)
      return r;
    if (typeof p.allowEmptyArrays < "u" && typeof p.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof p.decodeDotInKeys < "u" && typeof p.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (p.decoder !== null && typeof p.decoder < "u" && typeof p.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof p.charset < "u" && p.charset !== "utf-8" && p.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof p.throwOnLimitExceeded < "u" && typeof p.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var v = typeof p.charset > "u" ? r.charset : p.charset, m = typeof p.duplicates > "u" ? r.duplicates : p.duplicates;
    if (m !== "combine" && m !== "first" && m !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var y = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : r.allowDots : !!p.allowDots;
    return {
      allowDots: y,
      allowEmptyArrays: typeof p.allowEmptyArrays == "boolean" ? !!p.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : r.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : r.arrayLimit,
      charset: v,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : r.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : r.comma,
      decodeDotInKeys: typeof p.decodeDotInKeys == "boolean" ? p.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof p.decoder == "function" ? p.decoder : r.decoder,
      delimiter: typeof p.delimiter == "string" || e.isRegExp(p.delimiter) ? p.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : r.depth,
      duplicates: m,
      ignoreQueryPrefix: p.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof p.interpretNumericEntities == "boolean" ? p.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof p.parameterLimit == "number" ? p.parameterLimit : r.parameterLimit,
      parseArrays: p.parseArrays !== !1,
      plainObjects: typeof p.plainObjects == "boolean" ? p.plainObjects : r.plainObjects,
      strictDepth: typeof p.strictDepth == "boolean" ? !!p.strictDepth : r.strictDepth,
      strictMerge: typeof p.strictMerge == "boolean" ? !!p.strictMerge : r.strictMerge,
      strictNullHandling: typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof p.throwOnLimitExceeded == "boolean" ? p.throwOnLimitExceeded : !1
    };
  };
  return hs = function(b, p) {
    var v = h(p);
    if (b === "" || b === null || typeof b > "u")
      return v.plainObjects ? { __proto__: null } : {};
    for (var m = typeof b == "string" ? d(b, v) : b, y = v.plainObjects ? { __proto__: null } : {}, $ = Object.keys(m), k = 0; k < $.length; ++k) {
      var T = $[k], C = f(T, m[T], v, typeof b == "string");
      y = e.merge(y, C, v);
    }
    return v.allowSparse === !0 ? y : e.compact(y);
  }, hs;
}
var ms, gc;
function B8() {
  if (gc) return ms;
  gc = 1;
  var e = /* @__PURE__ */ D8(), t = /* @__PURE__ */ F8(), n = /* @__PURE__ */ Il();
  return ms = {
    formats: n,
    parse: t,
    stringify: e
  }, ms;
}
var yc = /* @__PURE__ */ B8();
function g0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: L8 } = Object.prototype, { getPrototypeOf: Dl } = Object, { iterator: Ga, toStringTag: y0 } = Symbol, Wa = /* @__PURE__ */ ((e) => (t) => {
  const n = L8.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qt = (e) => (e = e.toLowerCase(), (t) => Wa(t) === e), Ya = (e) => (t) => typeof t === e, { isArray: Sr } = Array, br = Ya("undefined");
function vo(e) {
  return e !== null && !br(e) && e.constructor !== null && !br(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const b0 = qt("ArrayBuffer");
function U8(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && b0(e.buffer), t;
}
const V8 = Ya("string"), gt = Ya("function"), x0 = Ya("number"), go = (e) => e !== null && typeof e == "object", q8 = (e) => e === !0 || e === !1, Xo = (e) => {
  if (Wa(e) !== "object")
    return !1;
  const t = Dl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(y0 in e) && !(Ga in e);
}, j8 = (e) => {
  if (!go(e) || vo(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, H8 = qt("Date"), G8 = qt("File"), W8 = (e) => !!(e && typeof e.uri < "u"), Y8 = (e) => e && typeof e.getParts < "u", X8 = qt("Blob"), K8 = qt("FileList"), Z8 = (e) => go(e) && gt(e.pipe);
function J8() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const bc = J8(), xc = typeof bc.FormData < "u" ? bc.FormData : void 0, Q8 = (e) => {
  let t;
  return e && (xc && e instanceof xc || gt(e.append) && ((t = Wa(e)) === "formdata" || // detect form-data instance
  t === "object" && gt(e.toString) && e.toString() === "[object FormData]"));
}, e6 = qt("URLSearchParams"), [t6, n6, r6, o6] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(qt), a6 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Sr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (vo(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (r = 0; r < i; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function w0(e, t) {
  if (vo(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _0 = (e) => !br(e) && e !== Fn;
function Qs() {
  const { caseless: e, skipUndefined: t } = _0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = e && w0(n, a) || a;
    Xo(n[i]) && Xo(o) ? n[i] = Qs(n[i], o) : Xo(o) ? n[i] = Qs({}, o) : Sr(o) ? n[i] = o.slice() : (!t || !br(o)) && (n[i] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && yo(arguments[o], r);
  return n;
}
const i6 = (e, t, n, { allOwnKeys: r } = {}) => (yo(
  t,
  (o, a) => {
    n && gt(o) ? Object.defineProperty(e, a, {
      value: g0(o, n),
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
), e), s6 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), l6 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, u6 = (e, t, n, r) => {
  let o, a, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Dl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, d6 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, c6 = (e) => {
  if (!e) return null;
  if (Sr(e)) return e;
  let t = e.length;
  if (!x0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, f6 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Dl(Uint8Array)), p6 = (e, t) => {
  const r = (e && e[Ga]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, h6 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, m6 = qt("HTMLFormElement"), v6 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), wc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), g6 = qt("RegExp"), k0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yo(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, y6 = (e) => {
  k0(e, (t, n) => {
    if (gt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (gt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, b6 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Sr(e) ? r(e) : r(String(e).split(t)), n;
}, x6 = () => {
}, w6 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _6(e) {
  return !!(e && gt(e.append) && e[y0] === "FormData" && e[Ga]);
}
const k6 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (go(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (vo(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = Sr(r) ? [] : {};
        return yo(r, (i, l) => {
          const d = n(i, o + 1);
          !br(d) && (a[l] = d);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, S6 = qt("AsyncFunction"), E6 = (e) => e && (go(e) || gt(e)) && gt(e.then) && gt(e.catch), S0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Fn.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Fn && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Fn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", gt(Fn.postMessage)), z6 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Fn) : typeof process < "u" && process.nextTick || S0, $6 = (e) => e != null && gt(e[Ga]), Z = {
  isArray: Sr,
  isArrayBuffer: b0,
  isBuffer: vo,
  isFormData: Q8,
  isArrayBufferView: U8,
  isString: V8,
  isNumber: x0,
  isBoolean: q8,
  isObject: go,
  isPlainObject: Xo,
  isEmptyObject: j8,
  isReadableStream: t6,
  isRequest: n6,
  isResponse: r6,
  isHeaders: o6,
  isUndefined: br,
  isDate: H8,
  isFile: G8,
  isReactNativeBlob: W8,
  isReactNative: Y8,
  isBlob: X8,
  isRegExp: g6,
  isFunction: gt,
  isStream: Z8,
  isURLSearchParams: e6,
  isTypedArray: f6,
  isFileList: K8,
  forEach: yo,
  merge: Qs,
  extend: i6,
  trim: a6,
  stripBOM: s6,
  inherits: l6,
  toFlatObject: u6,
  kindOf: Wa,
  kindOfTest: qt,
  endsWith: d6,
  toArray: c6,
  forEachEntry: p6,
  matchAll: h6,
  isHTMLForm: m6,
  hasOwnProperty: wc,
  hasOwnProp: wc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: k0,
  freezeMethods: y6,
  toObjectSet: b6,
  toCamelCase: v6,
  noop: x6,
  toFiniteNumber: w6,
  findKey: w0,
  global: Fn,
  isContextDefined: _0,
  isSpecCompliantForm: _6,
  toJSONObject: k6,
  isAsyncFn: S6,
  isThenable: E6,
  setImmediate: S0,
  asap: z6,
  isIterable: $6
};
let Oe = class E0 extends Error {
  static from(t, n, r, o, a, i) {
    const l = new E0(t.message, n || t.code, r, o, a);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
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
Oe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Oe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Oe.ECONNABORTED = "ECONNABORTED";
Oe.ETIMEDOUT = "ETIMEDOUT";
Oe.ERR_NETWORK = "ERR_NETWORK";
Oe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Oe.ERR_DEPRECATED = "ERR_DEPRECATED";
Oe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Oe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Oe.ERR_CANCELED = "ERR_CANCELED";
Oe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Oe.ERR_INVALID_URL = "ERR_INVALID_URL";
const P6 = null;
function el(e) {
  return Z.isPlainObject(e) || Z.isArray(e);
}
function z0(e) {
  return Z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vs(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = z0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function C6(e) {
  return Z.isArray(e) && !e.some(el);
}
const A6 = Z.toFlatObject(Z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xa(e, t, n) {
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
    function(v, m) {
      return !Z.isUndefined(m[v]);
    }
  );
  const r = n.metaTokens, o = n.visitor || c, a = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && Z.isSpecCompliantForm(t);
  if (!Z.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (Z.isDate(p))
      return p.toISOString();
    if (Z.isBoolean(p))
      return p.toString();
    if (!d && Z.isBlob(p))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return Z.isArrayBuffer(p) || Z.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, v, m) {
    let y = p;
    if (Z.isReactNative(t) && Z.isReactNativeBlob(p))
      return t.append(vs(m, v, a), u(p)), !1;
    if (p && !m && typeof p == "object") {
      if (Z.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (Z.isArray(p) && C6(p) || (Z.isFileList(p) || Z.endsWith(v, "[]")) && (y = Z.toArray(p)))
        return v = z0(v), y.forEach(function(k, T) {
          !(Z.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? vs([v], T, a) : i === null ? v : v + "[]",
            u(k)
          );
        }), !1;
    }
    return el(p) ? !0 : (t.append(vs(m, v, a), u(p)), !1);
  }
  const f = [], h = Object.assign(A6, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: el
  });
  function b(p, v) {
    if (!Z.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(p), Z.forEach(p, function(y, $) {
        (!(Z.isUndefined(y) || y === null) && o.call(t, y, Z.isString($) ? $.trim() : $, v, h)) === !0 && b(y, v ? v.concat($) : [$]);
      }), f.pop();
    }
  }
  if (!Z.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function _c(e) {
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
function Fl(e, t) {
  this._pairs = [], e && Xa(e, this, t);
}
const $0 = Fl.prototype;
$0.append = function(t, n) {
  this._pairs.push([t, n]);
};
$0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _c);
  } : _c;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function T6(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function P0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || T6, o = Z.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let i;
  if (a ? i = a(t, o) : i = Z.isURLSearchParams(t) ? t.toString() : new Fl(t, o).toString(r), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class kc {
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
const Bl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, O6 = typeof URLSearchParams < "u" ? URLSearchParams : Fl, N6 = typeof FormData < "u" ? FormData : null, R6 = typeof Blob < "u" ? Blob : null, M6 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: O6,
    FormData: N6,
    Blob: R6
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ll = typeof window < "u" && typeof document < "u", tl = typeof navigator == "object" && navigator || void 0, I6 = Ll && (!tl || ["ReactNative", "NativeScript", "NS"].indexOf(tl.product) < 0), D6 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", F6 = Ll && window.location.href || "http://localhost", B6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ll,
  hasStandardBrowserEnv: I6,
  hasStandardBrowserWebWorkerEnv: D6,
  navigator: tl,
  origin: F6
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...B6,
  ...M6
};
function L6(e, t) {
  return Xa(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ct.isNode && Z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function U6(e) {
  return Z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function V6(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function C0(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), d = a >= n.length;
    return i = !i && Z.isArray(o) ? o.length : i, d ? (Z.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !Z.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && Z.isArray(o[i]) && (o[i] = V6(o[i])), !l);
  }
  if (Z.isFormData(e) && Z.isFunction(e.entries)) {
    const n = {};
    return Z.forEachEntry(e, (r, o) => {
      t(U6(r), o, n, 0);
    }), n;
  }
  return null;
}
function q6(e, t, n) {
  if (Z.isString(e))
    try {
      return (t || JSON.parse)(e), Z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const bo = {
  transitional: Bl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = Z.isObject(t);
      if (a && Z.isHTMLForm(t) && (t = new FormData(t)), Z.isFormData(t))
        return o ? JSON.stringify(C0(t)) : t;
      if (Z.isArrayBuffer(t) || Z.isBuffer(t) || Z.isStream(t) || Z.isFile(t) || Z.isBlob(t) || Z.isReadableStream(t))
        return t;
      if (Z.isArrayBufferView(t))
        return t.buffer;
      if (Z.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return L6(t, this.formSerializer).toString();
        if ((l = Z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return Xa(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), q6(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || bo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (Z.isResponse(t) || Z.isReadableStream(t))
        return t;
      if (t && Z.isString(t) && (r && !this.responseType || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? Oe.from(l, Oe.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: ct.classes.FormData,
    Blob: ct.classes.Blob
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
  bo.headers[e] = {};
});
const j6 = Z.toObjectSet([
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
]), H6 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && j6[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Sc = /* @__PURE__ */ Symbol("internals"), G6 = (e) => !/[\r\n]/.test(e);
function A0(e, t) {
  if (!(e === !1 || e == null)) {
    if (Z.isArray(e)) {
      e.forEach((n) => A0(n, t));
      return;
    }
    if (!G6(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Tr(e) {
  return e && String(e).trim().toLowerCase();
}
function W6(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Ko(e) {
  return e === !1 || e == null ? e : Z.isArray(e) ? e.map(Ko) : W6(String(e));
}
function Y6(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const X6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gs(e, t, n, r, o) {
  if (Z.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!Z.isString(t)) {
    if (Z.isString(r))
      return t.indexOf(r) !== -1;
    if (Z.isRegExp(r))
      return r.test(t);
  }
}
function K6(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Z6(e, t) {
  const n = Z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, i) {
        return this[r].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
let yt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, d, u) {
      const c = Tr(d);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = Z.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (A0(l, d), o[f || d] = Ko(l));
    }
    const i = (l, d) => Z.forEach(l, (u, c) => a(u, c, d));
    if (Z.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (Z.isString(t) && (t = t.trim()) && !X6(t))
      i(H6(t), n);
    else if (Z.isObject(t) && Z.isIterable(t)) {
      let l = {}, d, u;
      for (const c of t) {
        if (!Z.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (d = l[u]) ? Z.isArray(d) ? [...d, c[1]] : [d, c[1]] : c[1];
      }
      i(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Tr(t), t) {
      const r = Z.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Y6(o);
        if (Z.isFunction(n))
          return n.call(this, o, r);
        if (Z.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Tr(t), t) {
      const r = Z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = Tr(i), i) {
        const l = Z.findKey(r, i);
        l && (!n || gs(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return Z.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || gs(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return Z.forEach(this, (o, a) => {
      const i = Z.findKey(r, a);
      if (i) {
        n[i] = Ko(o), delete n[a];
        return;
      }
      const l = t ? K6(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Ko(o), r[l] = !0;
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
    const r = (this[Sc] = this[Sc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = Tr(i);
      r[l] || (Z6(o, i), r[l] = !0);
    }
    return Z.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
yt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
Z.reduceDescriptors(yt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
Z.freezeMethods(yt);
function ys(e, t) {
  const n = this || bo, r = t || n, o = yt.from(r.headers);
  let a = r.data;
  return Z.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function T0(e) {
  return !!(e && e.__CANCEL__);
}
let xo = class extends Oe {
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
    super(t ?? "canceled", Oe.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function O0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new Oe(
      "Request failed with status code " + n.status,
      [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function J6(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Q6(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), c = r[a];
    i || (i = u), n[o] = d, r[o] = u;
    let f = a, h = 0;
    for (; f !== o; )
      h += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - i < t)
      return;
    const b = c && u - c;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function eN(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (u, c = Date.now()) => {
    n = c, o = null, a && (clearTimeout(a), a = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - n;
    f >= r ? i(u, c) : (o = u, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - f)));
  }, () => o && i(o)];
}
const wa = (e, t, n = 3) => {
  let r = 0;
  const o = Q6(50, 250);
  return eN((a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, d = i - r, u = o(d), c = i <= l;
    r = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && l && c ? (l - i) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Ec = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, zc = (e) => (...t) => Z.asap(() => e(...t)), tN = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, nN = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, i) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      Z.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), Z.isString(r) && l.push(`path=${r}`), Z.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), Z.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
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
function rN(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function oN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function N0(e, t, n) {
  let r = !rN(t);
  return e && (r || n == !1) ? oN(e, t) : t;
}
const $c = (e) => e instanceof yt ? { ...e } : e;
function Kn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, h) {
    return Z.isPlainObject(u) && Z.isPlainObject(c) ? Z.merge.call({ caseless: h }, u, c) : Z.isPlainObject(c) ? Z.merge({}, c) : Z.isArray(c) ? c.slice() : c;
  }
  function o(u, c, f, h) {
    if (Z.isUndefined(c)) {
      if (!Z.isUndefined(u))
        return r(void 0, u, f, h);
    } else return r(u, c, f, h);
  }
  function a(u, c) {
    if (!Z.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
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
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, c, f) => o($c(u), $c(c), f, !0)
  };
  return Z.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = Z.hasOwnProp(d, c) ? d[c] : o, h = f(e[c], t[c], c);
    Z.isUndefined(h) && f !== l || (n[c] = h);
  }), n;
}
const R0 = (e) => {
  const t = Kn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: l } = t;
  if (t.headers = i = yt.from(i), t.url = P0(
    N0(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && i.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), Z.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (Z.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([c, f]) => {
        u.includes(c.toLowerCase()) && i.set(c, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && Z.isFunction(r) && (r = r(t)), r || r !== !1 && tN(t.url))) {
    const d = o && a && nN.read(a);
    d && i.set(o, d);
  }
  return t;
}, aN = typeof XMLHttpRequest < "u", iN = aN && function(e) {
  return new Promise(function(n, r) {
    const o = R0(e);
    let a = o.data;
    const i = yt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = o, c, f, h, b, p;
    function v() {
      b && b(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function y() {
      if (!m)
        return;
      const k = yt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), C = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: k,
        config: e,
        request: m
      };
      O0(
        function(g) {
          n(g), v();
        },
        function(g) {
          r(g), v();
        },
        C
      ), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (r(new Oe("Request aborted", Oe.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(T) {
      const C = T && T.message ? T.message : "Network Error", _ = new Oe(C, Oe.ERR_NETWORK, e, m);
      _.event = T || null, r(_), m = null;
    }, m.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || Bl;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(
        new Oe(
          T,
          C.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
          e,
          m
        )
      ), m = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in m && Z.forEach(i.toJSON(), function(T, C) {
      m.setRequestHeader(C, T);
    }), Z.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), u && ([h, p] = wa(u, !0), m.addEventListener("progress", h)), d && m.upload && ([f, b] = wa(d), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (k) => {
      m && (r(!k || k.type ? new xo(null, e, m) : k), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const $ = J6(o.url);
    if ($ && ct.protocols.indexOf($) === -1) {
      r(
        new Oe(
          "Unsupported protocol " + $ + ":",
          Oe.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    m.send(a || null);
  });
}, sN = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(
          c instanceof Oe ? c : new xo(c instanceof Error ? c.message : c)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new Oe(`timeout of ${t}ms exceeded`, Oe.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: d } = r;
    return d.unsubscribe = () => Z.asap(l), d;
  }
}, lN = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, uN = async function* (e, t) {
  for await (const n of dN(e))
    yield* lN(n, t);
}, dN = async function* (e) {
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
}, Pc = (e, t, n, r) => {
  const o = uN(e, t);
  let a = 0, i, l = (d) => {
    i || (i = !0, r && r(d));
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
            let h = a += f;
            n(h);
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
}, Cc = 64 * 1024, { isFunction: Do } = Z, cN = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(Z.global), { ReadableStream: Ac, TextEncoder: Tc } = Z.global, Oc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, fN = (e) => {
  e = Z.merge.call(
    {
      skipUndefined: !0
    },
    cN,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? Do(t) : typeof fetch == "function", a = Do(n), i = Do(r);
  if (!o)
    return !1;
  const l = o && Do(Ac), d = o && (typeof Tc == "function" ? /* @__PURE__ */ ((p) => (v) => p.encode(v))(new Tc()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), u = a && l && Oc(() => {
    let p = !1;
    const v = new Ac(), m = new n(ct.origin, {
      body: v,
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return v.cancel(), p && !m;
  }), c = i && l && Oc(() => Z.isReadableStream(new r("").body)), f = {
    stream: c && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (v, m) => {
      let y = v && v[p];
      if (y)
        return y.call(v);
      throw new Oe(
        `Response type '${p}' is not supported`,
        Oe.ERR_NOT_SUPPORT,
        m
      );
    });
  });
  const h = async (p) => {
    if (p == null)
      return 0;
    if (Z.isBlob(p))
      return p.size;
    if (Z.isSpecCompliantForm(p))
      return (await new n(ct.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (Z.isArrayBufferView(p) || Z.isArrayBuffer(p))
      return p.byteLength;
    if (Z.isURLSearchParams(p) && (p = p + ""), Z.isString(p))
      return (await d(p)).byteLength;
  }, b = async (p, v) => {
    const m = Z.toFiniteNumber(p.getContentLength());
    return m ?? h(v);
  };
  return async (p) => {
    let {
      url: v,
      method: m,
      data: y,
      signal: $,
      cancelToken: k,
      timeout: T,
      onDownloadProgress: C,
      onUploadProgress: _,
      responseType: g,
      headers: S,
      withCredentials: L = "same-origin",
      fetchOptions: F
    } = R0(p), O = t || fetch;
    g = g ? (g + "").toLowerCase() : "text";
    let E = sN(
      [$, k && k.toAbortSignal()],
      T
    ), U = null;
    const A = E && E.unsubscribe && (() => {
      E.unsubscribe();
    });
    let j;
    try {
      if (_ && u && m !== "get" && m !== "head" && (j = await b(S, y)) !== 0) {
        let se = new n(v, {
          method: "POST",
          body: y,
          duplex: "half"
        }), he;
        if (Z.isFormData(y) && (he = se.headers.get("content-type")) && S.setContentType(he), se.body) {
          const [ze, xe] = Ec(
            j,
            wa(zc(_))
          );
          y = Pc(se.body, Cc, ze, xe);
        }
      }
      Z.isString(L) || (L = L ? "include" : "omit");
      const x = a && "credentials" in n.prototype, I = {
        ...F,
        signal: E,
        method: m.toUpperCase(),
        headers: S.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: x ? L : void 0
      };
      U = a && new n(v, I);
      let R = await (a ? O(U, F) : O(v, I));
      const Q = c && (g === "stream" || g === "response");
      if (c && (C || Q && A)) {
        const se = {};
        ["status", "statusText", "headers"].forEach((ce) => {
          se[ce] = R[ce];
        });
        const he = Z.toFiniteNumber(R.headers.get("content-length")), [ze, xe] = C && Ec(
          he,
          wa(zc(C), !0)
        ) || [];
        R = new r(
          Pc(R.body, Cc, ze, () => {
            xe && xe(), A && A();
          }),
          se
        );
      }
      g = g || "text";
      let te = await f[Z.findKey(f, g) || "text"](
        R,
        p
      );
      return !Q && A && A(), await new Promise((se, he) => {
        O0(se, he, {
          data: te,
          headers: yt.from(R.headers),
          status: R.status,
          statusText: R.statusText,
          config: p,
          request: U
        });
      });
    } catch (x) {
      throw A && A(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
        new Oe(
          "Network Error",
          Oe.ERR_NETWORK,
          p,
          U,
          x && x.response
        ),
        {
          cause: x.cause || x
        }
      ) : Oe.from(x, x && x.code, p, U, x && x.response);
    }
  };
}, pN = /* @__PURE__ */ new Map(), M0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let i = a.length, l = i, d, u, c = pN;
  for (; l--; )
    d = a[l], u = c.get(d), u === void 0 && c.set(d, u = l ? /* @__PURE__ */ new Map() : fN(t)), c = u;
  return u;
};
M0();
const Ul = {
  http: P6,
  xhr: iN,
  fetch: {
    get: M0
  }
};
Z.forEach(Ul, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nc = (e) => `- ${e}`, hN = (e) => Z.isFunction(e) || e === null || e === !1;
function mN(e, t) {
  e = Z.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let l;
    if (o = r, !hN(r) && (o = Ul[(l = String(r)).toLowerCase()], o === void 0))
      throw new Oe(`Unknown adapter '${l}'`);
    if (o && (Z.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(Nc).join(`
`) : " " + Nc(i[0]) : "as no adapter specified";
    throw new Oe(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const I0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: mN,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ul
};
function bs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new xo(null, e);
}
function Rc(e) {
  return bs(e), e.headers = yt.from(e.headers), e.data = ys.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), I0.getAdapter(e.adapter || bo.adapter, e)(e).then(
    function(r) {
      return bs(e), r.data = ys.call(e, e.transformResponse, r), r.headers = yt.from(r.headers), r;
    },
    function(r) {
      return T0(r) || (bs(e), r && r.response && (r.response.data = ys.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = yt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const D0 = "1.15.0", Ka = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ka[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Mc = {};
Ka.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + D0 + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new Oe(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Oe.ERR_DEPRECATED
      );
    return n && !Mc[i] && (Mc[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
Ka.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function vN(e, t, n) {
  if (typeof e != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = t[a];
    if (i) {
      const l = e[a], d = l === void 0 || i(l, a, e);
      if (d !== !0)
        throw new Oe(
          "option " + a + " must be " + d,
          Oe.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Oe("Unknown option " + a, Oe.ERR_BAD_OPTION);
  }
}
const Zo = {
  assertOptions: vN,
  validators: Ka
}, Ct = Zo.validators;
let qn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new kc(),
      response: new kc()
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
          const i = o.stack.indexOf(`
`);
          return i === -1 ? "" : o.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = a;
          else if (a) {
            const i = a.indexOf(`
`), l = i === -1 ? -1 : a.indexOf(`
`, i + 1), d = l === -1 ? "" : a.slice(l + 1);
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Kn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Zo.assertOptions(
      r,
      {
        silentJSONParsing: Ct.transitional(Ct.boolean),
        forcedJSONParsing: Ct.transitional(Ct.boolean),
        clarifyTimeoutError: Ct.transitional(Ct.boolean),
        legacyInterceptorReqResOrdering: Ct.transitional(Ct.boolean)
      },
      !1
    ), o != null && (Z.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Zo.assertOptions(
      o,
      {
        encode: Ct.function,
        serialize: Ct.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Zo.assertOptions(
      n,
      {
        baseUrl: Ct.spelling("baseURL"),
        withXsrfToken: Ct.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && Z.merge(a.common, a[n.method]);
    a && Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete a[p];
    }), n.headers = yt.concat(i, a);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1)
        return;
      d = d && v.synchronous;
      const m = n.transitional || Bl;
      m && m.legacyInterceptorReqResOrdering ? l.unshift(v.fulfilled, v.rejected) : l.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c, f = 0, h;
    if (!d) {
      const p = [Rc.bind(this), void 0];
      for (p.unshift(...l), p.push(...u), h = p.length, c = Promise.resolve(n); f < h; )
        c = c.then(p[f++], p[f++]);
      return c;
    }
    h = l.length;
    let b = n;
    for (; f < h; ) {
      const p = l[f++], v = l[f++];
      try {
        b = p(b);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      c = Rc.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Kn(this.defaults, t);
    const n = N0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return P0(n, t.params, t.paramsSerializer);
  }
};
Z.forEach(["delete", "get", "head", "options"], function(t) {
  qn.prototype[t] = function(n, r) {
    return this.request(
      Kn(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
Z.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, i, l) {
      return this.request(
        Kn(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  qn.prototype[t] = n(), qn.prototype[t + "Form"] = n(!0);
});
let gN = class F0 {
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
      const i = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, l) {
      r.reason || (r.reason = new xo(a, i, l), n(r.reason));
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
      token: new F0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function yN(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function bN(e) {
  return Z.isObject(e) && e.isAxiosError === !0;
}
const nl = {
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
Object.entries(nl).forEach(([e, t]) => {
  nl[t] = e;
});
function B0(e) {
  const t = new qn(e), n = g0(qn.prototype.request, t);
  return Z.extend(n, qn.prototype, t, { allOwnKeys: !0 }), Z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return B0(Kn(e, o));
  }, n;
}
const Je = B0(bo);
Je.Axios = qn;
Je.CanceledError = xo;
Je.CancelToken = gN;
Je.isCancel = T0;
Je.VERSION = D0;
Je.toFormData = Xa;
Je.AxiosError = Oe;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = yN;
Je.isAxiosError = bN;
Je.mergeConfig = Kn;
Je.AxiosHeaders = yt;
Je.formToJSON = (e) => C0(Z.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = I0.getAdapter;
Je.HttpStatusCode = nl;
Je.default = Je;
const {
  Axios: dM,
  AxiosError: cM,
  CanceledError: fM,
  isCancel: L0,
  CancelToken: pM,
  VERSION: hM,
  all: mM,
  Cancel: vM,
  isAxiosError: U0,
  spread: gM,
  toFormData: yM,
  AxiosHeaders: bM,
  HttpStatusCode: xM,
  formToJSON: wM,
  getAdapter: _M,
  mergeConfig: xN
} = Je;
var wN = class {
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
    return i0(this.config, e) ? _t(this.config, e) : _t(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? At(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      At(this.config, n, r);
    });
  }
}, An = new wN({
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
function lo(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function zt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ic = (e) => zt("before", { cancelable: !0, detail: { visit: e } }), _N = (e) => zt("error", { detail: { errors: e } }), kN = (e) => zt("exception", { cancelable: !0, detail: { exception: e } }), SN = (e) => zt("finish", { detail: { visit: e } }), EN = (e) => zt("invalid", { cancelable: !0, detail: { response: e } }), zN = (e) => zt("beforeUpdate", { detail: { page: e } }), Hr = (e) => zt("navigate", { detail: { page: e } }), $N = (e) => zt("progress", { detail: { progress: e } }), PN = (e) => zt("start", { detail: { visit: e } }), CN = (e) => zt("success", { detail: { page: e } }), AN = (e, t) => zt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), TN = (e) => zt("prefetching", { detail: { visit: e } }), _a = (e) => zt("flash", { detail: { flash: e } }), pt = class {
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
pt.locationVisitKey = "inertiaLocationVisit";
var ON = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = V0(), n = await q0(), r = await FN(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await RN(t, r, e);
}, xr = {
  key: "historyKey",
  iv: "historyIv"
}, NN = async (e) => {
  const t = V0(), n = await q0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await MN(t, n, e);
}, RN = async (e, t, n) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), i = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    a.subarray(0, i.written)
  );
}, MN = async (e, t, n) => {
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
}, V0 = () => {
  const e = pt.get(xr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return pt.set(xr.iv, Array.from(t)), t;
}, IN = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), DN = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  pt.set(xr.key, Array.from(new Uint8Array(t)));
}, FN = async (e) => {
  if (e)
    return e;
  const t = await IN();
  return t ? (await DN(t), t) : null;
}, q0 = async () => {
  const e = pt.get(xr.key);
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
}, j0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !BN(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, BN = (e, t) => {
  switch (typeof e) {
    case "object":
      return j0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, LN = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Dc = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(LN))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, UN = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n, cacheTags: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const a = this.findCached(e);
    if (!e.fresh && a && a.staleTimestamp > Date.now())
      return Promise.resolve();
    const [i, l] = this.extractStaleValues(n), d = new Promise((u, c) => {
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
        onPrefetched(f, h) {
          e.onPrefetched(f, h);
        },
        onPrefetchResponse(f) {
          u(f);
        },
        onPrefetchError(f) {
          Gt.removeFromInFlight(e), c(f);
        }
      });
    }).then((u) => {
      this.remove(e);
      const c = u.getPageResponse();
      _e.mergeOncePropsIntoResponse(c), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + i,
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
    return [Dc(t), Dc(n)];
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
    const t = ut(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return j0(
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
        _e.mergeOncePropsIntoResponse(n, { force: !0 });
        for (const [i, l] of Object.entries(n.deferredProps ?? {})) {
          const d = l.filter((u) => n.props[u] === void 0);
          d.length > 0 ? n.deferredProps[i] = d : delete n.deferredProps[i];
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
}, Gt = new UN(), xs = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, VN = (e) => {
  const t = (i) => {
    const l = window.getComputedStyle(i);
    return ["scroll", "overlay"].includes(l.overflowY) ? !0 : l.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowX) ? !0 : r(l.maxHeight, i.style.height) || o(i, "height");
  }, n = (i) => {
    const l = window.getComputedStyle(i);
    return ["scroll", "overlay"].includes(l.overflowX) ? !0 : l.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(l.overflowY) ? !0 : r(l.maxWidth, i.style.width) || o(i, "width");
  }, r = (i, l) => !!(i && i !== "none" && i !== "0px" || l && l !== "auto" && l !== "0"), o = (i, l) => {
    const d = i.parentElement;
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
    const i = t(a) || n(a);
    if (window.getComputedStyle(a).display !== "contents" && i)
      return a;
    a = a.parentElement;
  }
  return null;
}, H0 = (e, t) => {
  if (!t)
    return e.filter((a) => xs(a));
  const n = e.indexOf(t), r = [], o = [];
  for (let a = n; a >= 0; a--) {
    const i = e[a];
    if (xs(i))
      r.push(i);
    else
      break;
  }
  for (let a = n + 1; a < e.length; a++) {
    const i = e[a];
    if (xs(i))
      o.push(i);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Gr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Gr(e, t - 1) : e();
  });
}, Fr = typeof window > "u", qN = !Fr && /Firefox/i.test(window.navigator.userAgent), mt = class {
  static save() {
    Ve.saveScrollPositions(this.getScrollRegions());
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
    if (qN && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Gr(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    !Fr && window.location.hash || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Fr ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Fr || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Fr || this.regions().forEach((t, n) => {
      const r = e[n];
      r && (typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left));
    });
  }
  static restoreDocument() {
    const e = Ve.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    Ve.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, Vl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function rl(e) {
  return Vl(e) || e instanceof FormData && Array.from(e.values()).some((t) => rl(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => rl(t));
}
var ol = (e) => e instanceof FormData;
function G0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && Y0(t, W0(n, o, "indices"), e[o], r);
  return t;
}
function W0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function Y0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => Y0(e, W0(t, o.toString(), r), n[o], r)
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
  G0(n, e, t, r);
}
function Tt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var jN = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Tt(e) : e;
  if ((rl(t) || r) && !ol(t) && (An.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = G0(t, new FormData(), null, o)), ol(t))
    return [a, t];
  const [i, l] = ql(n, a, t, o);
  return [Tt(i), l];
};
function ql(e, t, n, r = "brackets") {
  const o = e === "get" && !ol(n) && Object.keys(n).length > 0, a = X0(t.toString()), i = a || t.toString().startsWith("/") || t.toString() === "", l = !i && !t.toString().startsWith("#") && !t.toString().startsWith("?"), d = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const h = /\[\d+\]/.test(decodeURIComponent(f.search)), b = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = yc.stringify(
      { ...yc.parse(f.search, b), ...n },
      {
        encodeValuesOnly: !0,
        arrayFormat: h ? "indices" : r
      }
    );
  }
  return [
    [
      a ? `${f.protocol}//${f.host}` : "",
      i ? f.pathname : "",
      l ? f.pathname.substring(d ? 0 : 1) : "",
      u ? f.search : "",
      c ? f.hash : ""
    ].join(""),
    o ? {} : n
  ];
}
function ka(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Fc = (e, t) => {
  e.hash && !t.hash && ka(e).href === t.href && (t.hash = e.hash);
}, Sa = (e, t) => ka(e).href === ka(t).href, HN = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function pn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function X0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function GN(e, t) {
  const n = typeof e == "string" ? Tt(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var WN = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1, this.pendingDeferredProps = null, this.historyQuotaExceeded = !1;
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: n,
    onFlash: r
  }) {
    return this.page = { ...e, flash: e.flash ?? {} }, this.swapComponent = t, this.resolveComponent = n, this.onFlashCallback = r, Zt.on("historyQuotaExceeded", () => {
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
    return e.clearHistory && Ve.clear(), this.resolve(e.component).then((i) => {
      if (a !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const l = typeof window > "u", d = l ? new URL(e.url) : window.location, u = !l && n ? mt.getScrollRegions() : [];
      t = t || Sa(Tt(e.url), d);
      const c = { ...e, flash: {} };
      return new Promise(
        (f) => t ? Ve.replaceState(c, f) : Ve.pushState(c, f)
      ).then(() => {
        const f = !this.isTheSame(e);
        if (!f && Object.keys(e.props.errors || {}).length > 0 && (o = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && Gt.updateCachedOncePropsFromCurrentPage(), f && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: i,
          page: e,
          preserveState: r,
          viewTransition: o
        }).then(() => {
          n ? window.requestAnimationFrame(() => mt.restoreScrollRegions(u)) : mt.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Zt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Hr(e);
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, Ve.setCurrent(e), this.swap({ component: n, page: e, preserveState: t, viewTransition: !1 })));
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
    return new Promise((i) => {
      const l = document.startViewTransition(() => o().then(i));
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
}, _e = new WN(), Za = class {
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
}, lr = typeof window > "u", Or = new Za(), Bc = !lr && /CriOS/.test(window.navigator.userAgent), YN = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    this.replaceState({
      ..._e.getWithoutFlashData(),
      rememberedState: {
        ..._e.get()?.rememberedState ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    if (!lr)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!lr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Or.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Bc ? new Promise((o) => {
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
        props: ut(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((n) => e.encryptHistory ? ON(t).then(n) : n(t));
  }
  processQueue() {
    return Or.process();
  }
  decrypt(e = null) {
    if (lr)
      return Promise.resolve(e ?? _e.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? NN(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Or.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !$n(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    Or.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !$n(this.getDocumentScrollPosition(), e))
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
    if ($n(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (_e.merge(r), !lr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Or.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Bc ? new Promise((i) => {
          setTimeout(() => a().then(i));
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
        Zt.fireInternalEvent("historyQuotaExceeded", t);
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
    return !lr && !!window.history.state?.page;
  }
  clear() {
    pt.remove(xr.key), pt.remove(xr.iv);
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
var Ve = new YN(), XN = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", lo(mt.onWindowScroll.bind(mt), 100), !0)), typeof document < "u" && document.addEventListener("scroll", lo(mt.onScroll.bind(mt), 100), !0);
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
    _e.clear(), this.fireInternalEvent("missingHistoryItem");
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
    e.persisted && Ve.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const n = Tt(_e.get().url);
      n.hash = window.location.hash, Ve.replaceState({ ..._e.getWithoutFlashData(), url: n.href }), mt.reset();
      return;
    }
    if (!Ve.isValidState(t))
      return this.onMissingHistoryItem();
    Ve.decrypt(t.page).then((n) => {
      if (_e.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ze.cancelAll({ prefetch: !1 }), _e.setQuietly(n, { preserveState: !1 }).then(() => {
        mt.restore(Ve.getScrollRegions()), Hr(_e.get());
        const r = {}, o = _e.get().props;
        for (const [a, i] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const l = i.filter((d) => o[d] === void 0);
          l.length > 0 && (r[a] = l);
        }
        Object.keys(r).length > 0 && this.fireInternalEvent("loadDeferredProps", r);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Zt = new XN(), KN = class {
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
}, ws = new KN(), ZN = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    ws.isReload() && (Ve.deleteState(Ve.rememberedState), Ve.clearInitialState(Ve.rememberedState));
  }
  static handleBackForward() {
    if (!ws.isBackForward() || !Ve.browserHasHistoryEntry())
      return !1;
    const e = Ve.getScrollRegions();
    return Ve.decrypt().then((t) => {
      _e.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        mt.restore(e), Hr(_e.get());
      });
    }).catch(() => {
      Zt.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!pt.exists(pt.locationVisitKey))
      return !1;
    const e = pt.get(pt.locationVisitKey) || {};
    return pt.remove(pt.locationVisitKey), typeof window < "u" && _e.setUrlHash(window.location.hash), Ve.decrypt(_e.get()).then(() => {
      const t = Ve.getState(Ve.rememberedState, {}), n = Ve.getScrollRegions();
      _e.remember(t), _e.set(_e.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && mt.restore(n), Hr(_e.get());
      });
    }).catch(() => {
      Zt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && _e.setUrlHash(window.location.hash), _e.set(_e.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      ws.isReload() ? mt.restore(Ve.getScrollRegions()) : mt.scrollToAnchor();
      const e = _e.get();
      Hr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => _a(t));
    });
  }
}, JN = class {
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
}, QN = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new JN(e, t, n);
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
}, eR = new QN(), al = class Jo {
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
    return new Jo(t);
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = _e.get().component);
    const n = this.params.only.concat(this.params.reset);
    return n.length > 0 && (t["X-Inertia-Partial-Data"] = n.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = Jo.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Jo.resolvePreserveOption(this.params.preserveState, t);
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
}, K0 = {
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
}, tR = {
  show(e) {
    const { iframe: t, page: n } = K0.createIframeAndPage(e);
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
}, nR = new Za(), Lc = class Z0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new Z0(t, n, r);
  }
  async handlePrefetch() {
    Sa(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return nR.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), AN(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await Ve.processQueue(), Ve.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = _e.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return _N(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(_e.get().url);
    const { flash: n } = _e.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (_a(n), this.requestParams.all().onFlash(n)), CN(_e.get()), await this.requestParams.all().onSuccess(_e.get()), Ve.preserveUrl = !1;
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
      const n = Tt(this.getHeader("x-inertia-location"));
      return Fc(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (EN(t))
      return An.get("future.useDialogForErrorModal") ? tR.show(t.data) : K0.show(t.data);
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
      if (pt.set(pt.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === !0
      }), typeof window > "u")
        return;
      Sa(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), _e.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = Ve.preserveUrl ? _e.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), zN(t), _e.set(t, {
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
    if (this.originatingPage.component !== _e.get().component)
      return !1;
    const n = Tt(this.originatingPage.url), r = Tt(_e.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = Tt(t.url);
    return Fc(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== _e.get().component || An.get("future.preserveEqualProps") !== !0)
      return;
    const n = _e.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      $n(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== _e.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], a = t.matchPropsOn || [], i = (d, u) => {
      const c = _t(_e.get().props, d), f = _t(t.props, d);
      if (Array.isArray(f)) {
        const h = this.mergeOrMatchItems(
          c || [],
          f,
          d,
          a,
          u
        );
        At(t.props, d, h);
      } else if (typeof f == "object" && f !== null) {
        const h = {
          ...c || {},
          ...f
        };
        At(t.props, d, h);
      }
    };
    if (n.forEach((d) => i(d, !0)), r.forEach((d) => i(d, !1)), o.forEach((d) => {
      const u = _e.get().props[d], c = t.props[d], f = (h, b, p) => Array.isArray(b) ? this.mergeOrMatchItems(h, b, p, a) : typeof b == "object" && b !== null ? Object.keys(b).reduce(
        (v, m) => (v[m] = f(h ? h[m] : void 0, b[m], `${p}.${m}`), v),
        { ...h }
      ) : b;
      t.props[d] = f(u, c, d);
    }), t.props = { ..._e.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const d = _e.get().props.errors;
      d && Object.keys(d).length > 0 && (t.props.errors = d);
    }
    _e.get().scrollProps && (t.scrollProps = {
      ..._e.get().scrollProps || {},
      ...t.scrollProps || {}
    }), _e.hasOnceProps() && (t.onceProps = {
      ..._e.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ..._e.get().flash });
    const l = _e.get().initialDeferredProps;
    l && Object.keys(l).length > 0 && (t.initialDeferredProps = l);
  }
  mergeOrMatchItems(t, n, r, o, a = !0) {
    const i = Array.isArray(t) ? t : [], l = o.find((c) => c.split(".").slice(0, -1).join(".") === r);
    if (!l)
      return a ? [...i, ...n] : [...n, ...i];
    const d = l.split(".").pop() || "", u = /* @__PURE__ */ new Map();
    return n.forEach((c) => {
      this.hasUniqueProperty(c, d) && u.set(c[d], c);
    }), a ? this.appendWithMatching(i, n, u, d) : this.prependWithMatching(i, n, u, d);
  }
  appendWithMatching(t, n, r, o) {
    const a = t.map((l) => this.hasUniqueProperty(l, o) && r.has(l[o]) ? r.get(l[o]) : l), i = n.filter((l) => this.hasUniqueProperty(l, o) ? !t.some(
      (d) => this.hasUniqueProperty(d, o) && d[o] === l[o]
    ) : !0);
    return [...a, ...i];
  }
  prependWithMatching(t, n, r, o) {
    const a = t.filter((i) => this.hasUniqueProperty(i, o) ? !r.has(i[o]) : !0);
    return [...n, ...a];
  }
  hasUniqueProperty(t, n) {
    return t && typeof t == "object" && n in t;
  }
  async setRememberedState(t) {
    const n = await Ve.getState(Ve.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === _e.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Uc = class J0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = al.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new J0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), PN(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), TN(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Je({
      method: this.requestParams.all().method,
      url: ka(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Lc.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Lc.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && kN(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, SN(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, $N(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = _e.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const r = Object.entries(n.onceProps || {}).filter(([, o]) => n.props[o.prop] === void 0 ? !1 : !o.expiresAt || o.expiresAt > Date.now()).map(([o]) => o);
    return r.length > 0 && (t["X-Inertia-Except-Once-Props"] = r.join(",")), t;
  }
}, Vc = class {
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
}, rR = class {
  constructor() {
    this.syncRequestStream = new Vc({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Vc({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Za();
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: n,
    onFlash: r
  }) {
    _e.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: r
    }), ZN.handle(), Zt.init(), Zt.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Zt.on("loadDeferredProps", (o) => {
      this.loadDeferredProps(o);
    }), Zt.on("historyQuotaExceeded", (o) => {
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
    Ve.remember(e, t);
  }
  restore(e = "default") {
    return Ve.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Zt.onGlobalEvent(e, t);
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
    return eR.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Ic(n))
      return;
    const o = Tt(_e.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? HN(n.url, o) : Sa(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !_e.isCleared() && !n.preserveUrl && mt.save();
    const l = {
      ...n,
      ...r
    }, d = Gt.get(l);
    d ? (Wr.reveal(d.inFlight), Gt.use(d, l)) : (Wr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Uc.create(l, _e.get())));
  }
  getCached(e, t = {}) {
    return Gt.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Gt.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Gt.removeAll();
  }
  flushByCacheTags(e) {
    Gt.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return Gt.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (pn(e) ? e.method : "get")) !== "get")
      throw new Error("Prefetch requests must use the GET method");
    const o = this.getPendingVisit(e, {
      ...t,
      async: !0,
      showProgress: !1,
      prefetch: !0,
      viewTransition: !1
    }), a = o.url.origin + o.url.pathname + o.url.search, i = window.location.origin + window.location.pathname + window.location.search;
    if (a === i)
      return;
    const l = this.getVisitEvents(t);
    if (l.onBefore(o) === !1 || !Ic(o))
      return;
    Wr.hide(), this.asyncRequestStream.interruptInFlight();
    const d = {
      ...o,
      ...l
    };
    new Promise((c) => {
      const f = () => {
        _e.get() ? c() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Gt.add(
        d,
        (c) => {
          this.asyncRequestStream.send(Uc.create(c, _e.get()));
        },
        {
          cacheFor: An.get("prefetch.cacheFor"),
          cacheTags: [],
          ...n
        }
      );
    });
  }
  clearHistory() {
    Ve.clear();
  }
  decryptHistory() {
    return Ve.decrypt();
  }
  resolveComponent(e) {
    return _e.resolve(e);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, n) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(r) {
        const o = typeof t == "function" ? t(_t(r, e), r) : t;
        return At(ut(r), e, o);
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
    const n = _e.get().flash;
    let r;
    if (typeof e == "function")
      r = e(n);
    else if (typeof e == "string")
      r = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      r = { ...n, ...e };
    else
      return;
    _e.setFlash(r), Object.keys(r).length && _a(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = _e.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((v) => [v.prop, n.props[v.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, a = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: i, onError: l, onFinish: d, onFlash: u, onSuccess: c, ...f } = e, h = {
      ...n,
      ...f,
      flash: a ?? {},
      props: o
    }, b = al.resolvePreserveOption(e.preserveScroll ?? !1, h), p = al.resolvePreserveOption(e.preserveState ?? !1, h);
    return _e.set(h, {
      replace: t,
      preserveScroll: b,
      preserveState: p,
      viewTransition: i
    }).then(() => {
      const v = _e.get().flash;
      Object.keys(v).length > 0 && (_a(v), u?.(v));
      const m = _e.get().props.errors || {};
      if (Object.keys(m).length === 0) {
        c?.(_e.get());
        return;
      }
      const y = e.errorBag ? m[e.errorBag || ""] || {} : m;
      l?.(y);
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
    if (pn(e)) {
      const u = e;
      e = u.url, t.method = t.method ?? u.method;
    }
    const r = An.get("visitOptions"), o = r ? r(e.toString(), ut(t)) || {} : {}, a = {
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
    }, [i, l] = jN(
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
      url: i,
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
}, Qo = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? pn(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : pn(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function oR(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function aR(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function iR(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function sR(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function ea(e) {
  if (Array.isArray(e))
    return e.map(ea);
  if (typeof e != "object" || e === null || Vl(e))
    return e;
  if (sR(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = ea(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = ea(e[n]);
  return t;
}
function qc(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = aR(oR(n));
    if (o[o.length - 1] === "") {
      const a = o.slice(0, -1), i = _t(t, a);
      if (Array.isArray(i))
        i.push(r);
      else if (i && typeof i == "object" && !Vl(i)) {
        const l = Object.keys(i).filter((d) => /^\d+$/.test(d)).map(Number).sort((d, u) => d - u);
        At(t, a, l.length > 0 ? [...l.map((d) => i[d]), r] : [r]);
      } else
        At(t, a, [r]);
      continue;
    }
    iR(t, o.map(String), r);
  }
  return ea(t);
}
var _s = {
  preferredAttribute() {
    return An.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
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
  update: lo(function(e) {
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
function lR(e, t, n) {
  const r = {};
  let o = 0;
  function a() {
    const f = o += 1;
    return r[f] = [], f.toString();
  }
  function i(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], c());
  }
  function l(f) {
    Object.keys(r).indexOf(f) === -1 && (r[f] = []);
  }
  function d(f, h = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = h), c();
  }
  function u() {
    const f = t(""), h = _s.preferredAttribute(), b = {
      ...f ? { title: `<title ${h}="">${f}</title>` } : {}
    }, p = Object.values(r).reduce((v, m) => v.concat(m), []).reduce((v, m) => {
      if (m.indexOf("<") === -1)
        return v;
      if (m.indexOf("<title ") === 0) {
        const $ = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return v.title = $ ? `${$[1]}${t($[2])}${$[3]}` : m, v;
      }
      const y = m.match(h === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return y ? v[y[0]] = m : v[Object.keys(v).length] = m, v;
    }, b);
    return Object.values(p);
  }
  function c() {
    e ? n(u()) : _s.update(u());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const f = a();
      return {
        preferredAttribute: _s.preferredAttribute,
        reconnect: () => l(f),
        update: (h) => d(f, h),
        disconnect: () => i(f)
      };
    }
  };
}
var uR = "X-Inertia-Infinite-Scroll-Merge-Intent", dR = (e) => {
  const t = () => {
    const y = _e.get().scrollProps?.[e.getPropName()];
    if (y)
      return y;
    throw new Error(`The page object does not contain a scroll prop named "${e.getPropName()}".`);
  }, n = {
    component: null,
    loading: !1,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  }, r = () => {
    const y = t();
    n.component = _e.get().component, n.loading = !1, n.previousPage = y.previousPage, n.nextPage = y.nextPage, n.lastLoadedPage = y.currentPage, n.requestCount = 0;
  }, o = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    r();
    const y = Ze.restore(o());
    y && typeof y == "object" && y.lastLoadedPage === t().currentPage && (n.previousPage = y.previousPage, n.nextPage = y.nextPage, n.lastLoadedPage = y.lastLoadedPage, n.requestCount = y.requestCount || 0);
  }
  const a = Ze.on("success", (y) => {
    n.component === y.detail.page.component && t().reset && (r(), e.onReset?.());
  }), i = (y) => y === "next" ? "nextPage" : "previousPage", l = (y) => {
    const $ = i(y);
    return n[$];
  }, d = (y) => {
    const $ = t(), k = i(y);
    n.lastLoadedPage = $.currentPage, n[k] = $[k], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, c = () => n.requestCount, f = (y, $ = {}) => {
    const k = l(y);
    n.loading || k === null || (n.loading = !0, Ze.reload({
      ...$,
      data: { [u()]: k },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [uR]: y === "previous" ? "prepend" : "append",
        ...$.headers
      },
      onBefore: (T) => {
        y === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), $.onBefore?.(T);
      },
      onBeforeUpdate: (T) => {
        e.onBeforeUpdate(), $.onBeforeUpdate?.(T);
      },
      onSuccess: (T) => {
        d(y), $.onSuccess?.(T);
      },
      onFinish: (T) => {
        n.loading = !1, y === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), $.onFinish?.(T);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: u,
    getRequestCount: c,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (y) => f("next", y),
    fetchPrevious: (y) => f("previous", y),
    removeEventListener: a
  };
}, cR = () => {
  const e = [];
  return {
    new: (r, o = {}) => {
      const a = new IntersectionObserver((i) => {
        for (const l of i)
          l.isIntersecting && r(l);
      }, o);
      return e.push(a), a;
    },
    flushAll: () => {
      e.forEach((r) => r.disconnect()), e.length = 0;
    }
  };
}, ta = "infiniteScrollPage", ks = "infiniteScrollIgnore", Q0 = (e) => e.dataset[ta], fR = (e) => {
  const t = cR();
  let n, r, o, a, i = !1;
  const l = () => {
    a = new MutationObserver((g) => {
      g.forEach((S) => {
        S.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && h.add(L);
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
    i && u();
    const _ = e.getStartElement(), g = e.getEndElement();
    _ && e.shouldFetchPrevious() && r.observe(_), g && e.shouldFetchNext() && o.observe(g), i = !0;
  }, u = () => {
    i && (r.disconnect(), o.disconnect(), i = !1);
  }, c = () => {
    i && d();
  }, f = () => {
    u(), t.flushAll(), a?.disconnect();
  }, h = /* @__PURE__ */ new Set(), b = (_) => !(ta in _.dataset) && !(ks in _.dataset), p = () => {
    Array.from(h).forEach((_) => {
      b(_) && (_.dataset[ks] = "true"), n.observe(_);
    }), h.clear();
  }, v = (_) => Array.from(
    _.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let m = !1;
  const y = (_) => {
    !m && (m = !0, C()) || (v(e.getItemsElement()).forEach((g) => {
      b(g) && (g.dataset[ta] = _?.toString() || "1"), n.observe(g);
    }), k());
  }, $ = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, k = () => {
    const _ = {}, g = e.getItemsElement().childNodes;
    for (let S = 0; S < g.length; S++) {
      const L = g[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const F = Q0(L);
      typeof F > "u" || (F in _ ? _[F].to = S : _[F] = { from: S, to: S });
    }
    Ze.remember(_, $());
  }, T = lo(k, 250), C = () => {
    const _ = Ze.restore($());
    if (!_ || typeof _ != "object")
      return !1;
    const g = e.getItemsElement().childNodes;
    for (let S = 0; S < g.length; S++) {
      const L = g[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const F = L;
      let O;
      for (const [E, U] of Object.entries(_))
        if (S >= U.from && S <= U.to) {
          O = E;
          break;
        }
      if (O)
        F.dataset[ta] = O;
      else if (b(F))
        F.dataset[ks] = "true";
      else
        continue;
      n.observe(F);
    }
    return !0;
  };
  return {
    setupObservers: l,
    enableTriggers: d,
    disableTriggers: u,
    refreshTriggers: c,
    flushAll: f,
    processManuallyAddedElements: p,
    processServerLoadedElements: y
  };
}, pR = new Za(), ir, xn, Fo = null, hR = (e) => {
  let t = !0;
  const n = (o) => {
    pR.add(() => new Promise((a) => {
      if (!t)
        return ir = xn = null, a();
      if (!ir || !xn) {
        const d = _e.get().url;
        ir = Tt(d), xn = Tt(d), Fo = X0(d);
      }
      const i = e.getPageName(), l = xn.searchParams;
      o === "1" ? l.delete(i) : l.set(i, o), setTimeout(() => a());
    })).finally(() => {
      t && ir && xn && ir.href !== xn.href && Fo !== null && Ze.replace({
        url: GN(xn, Fo),
        preserveScroll: !0,
        preserveState: !0
      }), ir = xn = Fo = null;
    });
  };
  return {
    onItemIntersected: lo((o) => {
      const a = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !a)
        return;
      const i = /* @__PURE__ */ new Map(), l = [...a.children];
      H0(l, o).forEach((c) => {
        const f = Q0(c) ?? "1";
        i.has(f) ? i.set(f, i.get(f) + 1) : i.set(f, 1);
      });
      const u = Array.from(i.entries()).sort((c, f) => f[1] - c[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, mR = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const l = e.getScrollableParent(), d = e.getItemsElement();
        n = l?.scrollTop || window.scrollY;
        const u = H0([...d.children]);
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
          const c = e.getScrollableParent(), f = c?.getBoundingClientRect() || { top: 0 }, h = c ? f.top : 0, v = r.getBoundingClientRect().top - h - o;
          if (v === 0) {
            window.requestAnimationFrame(u);
            return;
          }
          c ? c.scrollTo({ top: n + v }) : window.scrollTo(0, window.scrollY + v), d = !0;
        };
        window.requestAnimationFrame(u);
      }
    };
  }
});
function vR(e) {
  const t = hR({ ...e, getPageName: () => o.getPageName() }), n = mR(e), r = fR({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = dR({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Gr(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Gr(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), a = (u) => {
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), h = u.onBeforeUpdate || (() => {
    }), b = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (p) => {
      h(p), c();
    }, u.onSuccess = (p) => {
      b(p), f();
    }, u;
  }, i = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = a(u)), i(u);
  };
  const l = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = a(u)), l(u);
  };
  const d = Ze.on("success", () => Gr(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      d(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function eh(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function Bo(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(eh(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function jc(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !eh(e) && (e.key === "Enter" || t && e.key === " ");
}
var rt = "nprogress", Ot, lt = {
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
}, Tn = null, gR = (e) => {
  Object.assign(lt, e), lt.includeCSS && kR(lt.color), Ot = document.createElement("div"), Ot.id = rt, Ot.innerHTML = lt.template;
}, Ja = (e) => {
  const t = th();
  e = ih(e, lt.minimum, 1), Tn = e === 1 ? null : e;
  const n = bR(!t), r = n.querySelector(lt.barSelector), o = lt.speed, a = lt.easing;
  n.offsetWidth, _R((i) => {
    const l = lt.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${na(e)}%,0,0)`
    } : lt.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${na(e)}%,0)`
    } : { marginLeft: `${na(e)}%` };
    for (const d in l)
      r.style[d] = l[d];
    if (e !== 1)
      return setTimeout(i, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        ah(), n.style.transition = "", n.style.opacity = "", i();
      }, o);
    }, o);
  });
}, th = () => typeof Tn == "number", nh = () => {
  Tn || Ja(0);
  const e = function() {
    setTimeout(function() {
      Tn && (rh(), e());
    }, lt.trickleSpeed);
  };
  lt.trickle && e();
}, yR = (e) => {
  !e && !Tn || (rh(0.3 + 0.5 * Math.random()), Ja(1));
}, rh = (e) => {
  const t = Tn;
  if (t === null)
    return nh();
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
    })(), Ja(ih(t + e, 0, 0.994));
}, bR = (e) => {
  if (xR())
    return document.getElementById(rt);
  document.documentElement.classList.add(`${rt}-busy`);
  const t = Ot.querySelector(lt.barSelector), n = e ? "-100" : na(Tn || 0), r = oh();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, lt.showSpinner || Ot.querySelector(lt.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${rt}-custom-parent`), r.appendChild(Ot), Ot;
}, oh = () => wR(lt.parent) ? lt.parent : document.querySelector(lt.parent), ah = () => {
  document.documentElement.classList.remove(`${rt}-busy`), oh().classList.remove(`${rt}-custom-parent`), Ot?.remove();
}, xR = () => document.getElementById(rt) !== null, wR = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function ih(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var na = (e) => (-1 + e) * 100, _R = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), kR = (e) => {
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
}, SR = () => {
  Ot && (Ot.style.display = "");
}, ER = () => {
  Ot && (Ot.style.display = "none");
}, jt = {
  configure: gR,
  isStarted: th,
  done: yR,
  set: Ja,
  remove: ah,
  start: nh,
  status: Tn,
  show: SR,
  hide: ER
}, zR = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    jt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && jt.show();
  }
  hide() {
    this.hideCount++, jt.hide();
  }
  set(e) {
    jt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    jt.done();
  }
  reset() {
    jt.set(0);
  }
  remove() {
    jt.done(), jt.remove();
  }
  isStarted() {
    return jt.isStarted();
  }
  getStatus() {
    return jt.status;
  }
}, Wr = new zR();
Wr.reveal;
Wr.hide;
var sh = /* @__PURE__ */ Symbol("FormComponentReset");
function il(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function $R(e, t) {
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
function PR(e, t) {
  const n = e.value, r = Array.from(e.selectedOptions).map((i) => i.value);
  if (e.multiple) {
    const i = t.map((l) => String(l));
    Array.from(e.options).forEach((l) => {
      l.selected = i.includes(l.value);
    });
  } else
    e.value = t[0] !== void 0 ? String(t[0]) : "";
  const o = Array.from(e.selectedOptions).map((i) => i.value);
  return e.multiple ? JSON.stringify(r.sort()) !== JSON.stringify(o.sort()) : e.value !== n;
}
function Ss(e, t) {
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
    return $R(e, t);
  if (e instanceof HTMLSelectElement)
    return PR(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function CR(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && il(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        Ss(r, t) && (n = !0);
      else {
        const a = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        Ss(r, a) && (n = !0);
      }
  }) : il(e) && (n = Ss(e, t)), n;
}
function AR(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const a = new FormData(e), i = Array.from(e.elements).map((l) => il(l) ? l.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...a.keys(), ...i])];
  }
  let o = !1;
  n.forEach((a) => {
    const i = e.elements.namedItem(a);
    i && CR(i, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [sh]: !0 } })
  );
}
var Ze = new rR();
let uo = Je.create(), lh = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, uh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const Ea = {}, zn = {
  get: (e, t = {}, n = {}) => Rr(Nr("get", e, t, n)),
  post: (e, t = {}, n = {}) => Rr(Nr("post", e, t, n)),
  patch: (e, t = {}, n = {}) => Rr(Nr("patch", e, t, n)),
  put: (e, t = {}, n = {}) => Rr(Nr("put", e, t, n)),
  delete: (e, t = {}, n = {}) => Rr(Nr("delete", e, t, n)),
  use(e) {
    return uo = e, zn;
  },
  axios() {
    return uo;
  },
  fingerprintRequestsUsing(e) {
    return lh = e === null ? () => null : e, zn;
  },
  determineSuccessUsing(e) {
    return uh = e, zn;
  }
}, Nr = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Js({}, n, r?.params)
  } : {
    data: Js({}, n, r?.data)
  }
}), Rr = (e = {}) => {
  const t = [
    TR,
    NR,
    RR
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), uo.request(t).then(async (n) => {
    t.precognitive && Hc(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && uh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && OR(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Gc(t, r) ?? ((i) => i))(o) ?? o;
  }, (n) => MR(n) ? Promise.reject(n) : (t.precognitive && Hc(n.response), (Gc(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, TR = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? uo.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? lh(e, uo) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": IR(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, OR = (e) => e >= 200 && e < 300, NR = (e) => (typeof e.fingerprint != "string" || (Ea[e.fingerprint]?.abort(), delete Ea[e.fingerprint]), e), RR = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (Ea[e.fingerprint] = new AbortController(), {
  ...e,
  signal: Ea[e.fingerprint].signal
}), Hc = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, MR = (e) => !U0(e) || typeof e.response?.status != "number" || L0(e), Gc = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], IR = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (dh(e.data) ? "multipart/form-data" : "application/json"), dh = (e) => jl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => dh(t)), jl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, DR = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let r = [""];
  for (const o of n)
    if (o === "*") {
      const a = [];
      for (const i of r) {
        const l = i ? _t(t, i) : t;
        if (Array.isArray(l))
          for (let d = 0; d < l.length; d++)
            a.push(i ? `${i}.${d}` : String(d));
        else if (l !== null && typeof l == "object")
          for (const d of Object.keys(l))
            a.push(i ? `${i}.${d}` : d);
      }
      r = a;
    } else
      r = r.map((a) => a ? `${a}.${o}` : o);
  return r;
}, FR = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Wc = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => FR(n, r)))), BR = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (O) => O !== o ? (o = O, n.validatingChanged) : [];
  let i = [];
  const l = (O) => {
    const E = [...new Set(O)];
    return i.length !== E.length || !E.every((U) => i.includes(U)) ? (i = E, n.validatedChanged) : [];
  }, d = () => i.filter((O) => typeof f[O] > "u");
  let u = [];
  const c = (O) => {
    const E = [...new Set(O)];
    return u.length !== E.length || !E.every((U) => u.includes(U)) ? (u = E, n.touchedChanged) : [];
  };
  let f = {};
  const h = (O) => {
    const E = UR(O);
    return $n(f, E) ? [] : (f = E, n.errorsChanged);
  }, b = (O) => {
    const E = { ...f };
    return delete E[Yr(O)], h(E);
  }, p = () => Object.keys(f).length > 0;
  let v = 1500;
  const m = (O) => {
    v = O, _.cancel(), _ = C();
  };
  let y = t, $ = null, k = [], T = null;
  const C = () => XO((O) => {
    e({
      get: (E, U = {}, A = {}) => zn.get(E, L(U), g(A, O, U)),
      post: (E, U = {}, A = {}) => zn.post(E, L(U), g(A, O, U)),
      patch: (E, U = {}, A = {}) => zn.patch(E, L(U), g(A, O, U)),
      put: (E, U = {}, A = {}) => zn.put(E, L(U), g(A, O, U)),
      delete: (E, U = {}, A = {}) => zn.delete(E, L(U), g(A, O, U))
    }).catch((E) => L0(E) || U0(E) && E.response?.status === 422 ? null : Promise.reject(E));
  }, v, { leading: !0, trailing: !0 });
  let _ = C();
  const g = (O, E, U = {}) => {
    const A = {
      ...O,
      ...E
    }, j = Array.from(A.only ?? A.validate ?? u);
    return {
      ...E,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...xN(O, E),
      only: j,
      timeout: A.timeout ?? 5e3,
      onValidationError: (x, I) => ([
        ...l([...i, ...j]),
        ...h(Js(Wc({ ...f }, j), x.data.errors))
      ].forEach((R) => R()), A.onValidationError ? A.onValidationError(x, I) : Promise.reject(I)),
      onSuccess: (x) => (l([...i, ...j]).forEach((I) => I()), A.onSuccess ? A.onSuccess(x) : x),
      onPrecognitionSuccess: (x) => ([
        ...l([...i, ...j]),
        ...h(Wc({ ...f }, j))
      ].forEach((I) => I()), A.onPrecognitionSuccess ? A.onPrecognitionSuccess(x) : x),
      onBefore: () => {
        const x = u.some((Q) => Q.includes("*")), I = x ? [...new Set(u.flatMap((Q) => DR(Q, U)))] : u;
        return A.onBeforeValidation && A.onBeforeValidation({ data: U, touched: I }, { data: y, touched: k }) === !1 || (A.onBefore || (() => !0))() === !1 ? !1 : (x && c(I).forEach((Q) => Q()), T = u, $ = U, !0);
      },
      onStart: () => {
        a(!0).forEach((x) => x()), (A.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((x) => x()), k = T, y = $, T = $ = null, (A.onFinish ?? (() => null))();
      }
    };
  }, S = (O, E, U) => {
    if (typeof O > "u") {
      const A = Array.from(U?.only ?? U?.validate ?? []);
      c([...u, ...A]).forEach((j) => j()), _(U ?? {});
      return;
    }
    if (jl(E) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    O = Yr(O), (O.includes("*") || _t(y, O) !== E) && (c([O, ...u]).forEach((A) => A()), _(U ?? {}));
  }, L = (O) => r === !1 ? sl(O) : O, F = {
    touched: () => u,
    validate(O, E, U) {
      return typeof O == "object" && !("target" in O) && (U = O, O = E = void 0), S(O, E, U), F;
    },
    touch(O) {
      const E = Array.isArray(O) ? O : [Yr(O)];
      return c([...u, ...E]).forEach((U) => U()), F;
    },
    validating: () => o,
    valid: d,
    errors: () => f,
    hasErrors: p,
    setErrors(O) {
      return h(O).forEach((E) => E()), F;
    },
    forgetError(O) {
      return b(O).forEach((E) => E()), F;
    },
    defaults(O) {
      return t = O, y = O, F;
    },
    reset(...O) {
      if (O.length === 0)
        c([]).forEach((E) => E());
      else {
        const E = [...u];
        O.forEach((U) => {
          E.includes(U) && E.splice(E.indexOf(U), 1), At(y, U, _t(t, U));
        }), c(E).forEach((U) => U());
      }
      return F;
    },
    setTimeout(O) {
      return m(O), F;
    },
    on(O, E) {
      return n[O].push(E), F;
    },
    validateFiles() {
      return r = !0, F;
    },
    withoutFileValidation() {
      return r = !1, F;
    }
  };
  return F;
}, LR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), UR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Yr = (e) => typeof e != "string" ? e.target.name : e, sl = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (jl(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(sl({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = sl(t[n]);
        return;
      }
    }
  }), t;
};
var Es = null, zs = !1;
function VR(e) {
  if (zs)
    return;
  Es === null && (zs = !0, Es = new Set(Object.keys(ch({}))), zs = !1);
  const t = Object.keys(e).filter((n) => Es.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function ch(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Qo.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = ut(typeof n == "function" ? n() : n);
  VR(a);
  let i = null, l, d = (p) => p, u = null, c = [], f = !1;
  const b = ln({
    ...o ? o.data : ut(a),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...p) {
      r = Qo.createWayfinderCallback(...p);
      const v = this;
      let m = null;
      const y = BR((k) => {
        const { method: T, url: C } = r(), _ = ut(d(this.data()));
        return k[T](C, _);
      }, ut(a));
      u = y, y.on("validatingChanged", () => {
        v.validating = y.validating();
      }).on("validatedChanged", () => {
        v.__valid = y.valid();
      }).on("touchedChanged", () => {
        v.__touched = y.touched();
      }).on("errorsChanged", () => {
        const k = m ?? za.get("form.withAllErrors") ? y.errors() : LR(y.errors());
        this.errors = {}, this.setError(k), v.__valid = y.valid();
      });
      const $ = (k, T) => (T(k), k);
      return Object.assign(v, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => y,
        withAllErrors: () => $(v, () => m = !0),
        valid: (k) => v.__valid.includes(k),
        invalid: (k) => k in this.errors,
        setValidationTimeout: (k) => $(v, () => y.setTimeout(k)),
        validateFiles: () => $(v, () => y.validateFiles()),
        withoutFileValidation: () => $(v, () => y.withoutFileValidation()),
        touch: (k, ...T) => (Array.isArray(k) ? y.touch(k) : typeof k == "string" ? y.touch([k, ...T]) : y.touch(k), v),
        touched: (k) => typeof k == "string" ? v.__touched.includes(k) : v.__touched.length > 0,
        validate: (k, T) => {
          if (typeof k == "object" && !("target" in k) && (T = k, k = void 0), k === void 0)
            y.validate(T);
          else {
            const C = Yr(k), _ = d(this.data());
            y.validate(C, _t(_, C), T);
          }
          return v;
        },
        setErrors: (k) => $(v, () => this.setError(k)),
        forgetError: (k) => $(
          v,
          () => this.clearErrors(Yr(k))
        )
      }), v;
    },
    data() {
      return Object.keys(a).reduce((p, v) => At(p, v, _t(this, v)), {});
    },
    transform(p) {
      return d = p, this;
    },
    defaults(p, v) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof p > "u" ? (a = ut(this.data()), this.isDirty = !1) : a = typeof p == "string" ? At(ut(a), p, v) : Object.assign({}, ut(a), p), u?.defaults(a), this;
    },
    reset(...p) {
      const v = ut(typeof n == "function" ? n() : a), m = ut(v);
      return p.length === 0 ? (a = m, Object.assign(this, v)) : p.filter((y) => i0(m, y)).forEach((y) => {
        At(a, y, _t(m, y)), At(this, y, _t(v, y));
      }), u?.reset(...p), this;
    },
    setError(p, v) {
      const m = typeof p == "string" ? { [p]: v } : p;
      return Object.assign(this.errors, m), this.hasErrors = Object.keys(this.errors).length > 0, u?.setErrors(m), this;
    },
    clearErrors(...p) {
      return this.errors = Object.keys(this.errors).reduce(
        (v, m) => ({
          ...v,
          ...p.length > 0 && !p.includes(m) ? { [m]: this.errors[m] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, u && (p.length === 0 ? u.setErrors({}) : p.forEach(u.forgetError)), this;
    },
    resetAndClearErrors(...p) {
      return this.reset(...p), this.clearErrors(...p), this;
    },
    submit(...p) {
      const { method: v, url: m, options: y } = Qo.parseSubmitArguments(p, r);
      f = !1;
      const $ = {
        ...y,
        onCancelToken: (T) => {
          if (i = T, y.onCancelToken)
            return y.onCancelToken(T);
        },
        onBefore: (T) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), y.onBefore)
            return y.onBefore(T);
        },
        onStart: (T) => {
          if (this.processing = !0, y.onStart)
            return y.onStart(T);
        },
        onProgress: (T) => {
          if (this.progress = T ?? null, y.onProgress)
            return y.onProgress(T);
        },
        onSuccess: async (T) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(
            () => this.recentlySuccessful = !1,
            za.get("form.recentlySuccessfulDuration")
          );
          const C = y.onSuccess ? await y.onSuccess(T) : null;
          return f || (a = ut(this.data()), this.isDirty = !1), C;
        },
        onError: (T) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(T), y.onError)
            return y.onError(T);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, y.onCancel)
            return y.onCancel();
        },
        onFinish: (T) => {
          if (this.processing = !1, this.progress = null, i = null, y.onFinish)
            return y.onFinish(T);
        }
      }, k = d(this.data());
      v === "delete" ? Ze.delete(m, { ...$, data: k }) : Ze[v](m, k, $);
    },
    get(p, v) {
      this.submit("get", p, v);
    },
    post(p, v) {
      this.submit("post", p, v);
    },
    put(p, v) {
      this.submit("put", p, v);
    },
    patch(p, v) {
      this.submit("patch", p, v);
    },
    delete(p, v) {
      this.submit("delete", p, v);
    },
    cancel() {
      i && i.cancel();
    },
    dontRemember(...p) {
      return c = p, this;
    },
    __rememberable: t === null,
    __remember() {
      const p = this.data();
      if (c.length > 0) {
        const v = { ...p };
        return c.forEach((m) => delete v[m]), { data: v, errors: this.errors };
      }
      return { data: p, errors: this.errors };
    },
    __restore(p) {
      Object.assign(this, p.data), this.setError(p.errors);
    }
  });
  return Fe(
    b,
    (p) => {
      b.isDirty = !$n(b.data(), a);
      const v = Ze.restore(t), m = ut(p.__remember());
      t && !$n(v, m) && Ze.remember(m, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? b.withPrecognition(r) : b;
}
var wt = G(void 0), Qe = G(), $s = un(null), Lo = G(void 0), Yc;
qe({
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
    wt.value = t ? ur(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Lo.value = void 0;
    const a = typeof window > "u";
    return Yc = lR(a, r || ((i) => i), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (i) => {
        wt.value = ur(i.component), Qe.value = i.page, Lo.value = i.preserveState ? Lo.value : Date.now();
      },
      onFlash: (i) => {
        Qe.value = { ...Qe.value, flash: i };
      }
    }), Ze.on("navigate", () => Yc.forceUpdate())), () => {
      if (wt.value) {
        wt.value.inheritAttrs = !!wt.value.inheritAttrs;
        const i = Me(wt.value, {
          ...Qe.value.props,
          key: Lo.value
        });
        return $s.value && (wt.value.layout = $s.value, $s.value = null), wt.value.layout ? typeof wt.value.layout == "function" ? wt.value.layout(Me, i) : (Array.isArray(wt.value.layout) ? wt.value.layout : [wt.value.layout]).concat(i).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, Me(d, { ...Qe.value.props }, () => l))) : i;
      }
    };
  }
});
function fh() {
  return ln({
    props: ne(() => Qe.value?.props),
    url: ne(() => Qe.value?.url),
    component: ne(() => Qe.value?.component),
    version: ne(() => Qe.value?.version),
    clearHistory: ne(() => Qe.value?.clearHistory),
    deferredProps: ne(() => Qe.value?.deferredProps),
    mergeProps: ne(() => Qe.value?.mergeProps),
    prependProps: ne(() => Qe.value?.prependProps),
    deepMergeProps: ne(() => Qe.value?.deepMergeProps),
    matchPropsOn: ne(() => Qe.value?.matchPropsOn),
    rememberedState: ne(() => Qe.value?.rememberedState),
    encryptHistory: ne(() => Qe.value?.encryptHistory),
    scrollProps: ne(() => Qe.value?.scrollProps),
    flash: ne(() => Qe.value?.flash)
  });
}
qe({
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
var an = () => {
}, qR = /* @__PURE__ */ Symbol("InertiaFormContext");
qe({
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
      default: an
    },
    onBefore: {
      type: Function,
      default: an
    },
    onStart: {
      type: Function,
      default: an
    },
    onProgress: {
      type: Function,
      default: an
    },
    onFinish: {
      type: Function,
      default: an
    },
    onCancel: {
      type: Function,
      default: an
    },
    onSuccess: {
      type: Function,
      default: an
    },
    onError: {
      type: Function,
      default: an
    },
    onSubmitComplete: {
      type: Function,
      default: an
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
      const [C, _] = p();
      return e.transform(_);
    }, a = ch({}).withPrecognition(
      () => l.value,
      () => p()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? An.get("form.withAllErrors")) && a.withAllErrors();
    const i = G(), l = ne(
      () => pn(e.action) ? e.action.method : e.method.toLowerCase()
    ), d = G(!1), u = G(new FormData()), c = (C) => {
      C.type === "reset" && C.detail?.[sh] && C.preventDefault(), d.value = C.type === "reset" ? !1 : !$n(b(), qc(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = h(), a.defaults(b()), f.forEach((C) => i.value.addEventListener(C, c));
    }), Fe(
      () => e.validateFiles,
      (C) => C ? a.validateFiles() : a.withoutFileValidation()
    ), Fe(
      () => e.validationTimeout,
      (C) => a.setValidationTimeout(C)
    ), $a(() => f.forEach((C) => i.value?.removeEventListener(C, c)));
    const h = (C) => new FormData(i.value, C), b = (C) => qc(h(C)), p = (C) => ql(
      l.value,
      pn(e.action) ? e.action.url : e.action,
      b(C),
      e.queryStringArrayFormat
    ), v = (C) => {
      const [_, g] = p(C);
      if (C?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open(_, "_blank");
        return;
      }
      const L = (O) => {
        O && (O === !0 ? m() : O.length > 0 && m(...O));
      }, F = {
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
        onSuccess: (...O) => {
          e.onSuccess?.(...O), e.onSubmitComplete?.(T), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && k();
        },
        onError: (...O) => {
          e.onError?.(...O), L(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(g)).submit(l.value, _, F), a.transform(o);
    }, m = (...C) => {
      AR(i.value, u.value, C), a.reset(...C);
    }, y = (...C) => {
      a.clearErrors(...C);
    }, $ = (...C) => {
      y(...C), m(...C);
    }, k = () => {
      u.value = h(), d.value = !1;
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
      clearErrors: y,
      resetAndClearErrors: $,
      setError: (C, _) => a.setError(typeof C == "string" ? { [C]: _ } : C),
      get isDirty() {
        return d.value;
      },
      reset: m,
      submit: v,
      defaults: k,
      getData: b,
      getFormData: h,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: (C, _) => a.validate(...Qo.mergeHeadersForValidation(C, _, e.headers)),
      validator: () => a.validator()
    };
    return r(T), jn(qR, T), () => Me(
      "form",
      {
        ...n,
        ref: i,
        action: pn(e.action) ? e.action.url : e.action,
        method: l.value,
        onSubmit: (C) => {
          C.preventDefault(), v(C.submitter);
        },
        inert: e.disableWhileProcessing && a.processing
      },
      t.default ? t.default(T) : []
    );
  }
});
qe({
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${n8(o)}"`;
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
var Ps = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
qe({
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
    const o = G(null), a = G(null), i = G(null), l = ne(
      () => Ps(e.itemsElement, o.value)
    ), d = ne(() => VN(l.value)), u = ne(
      () => Ps(e.startElement, a.value)
    ), c = ne(() => Ps(e.endElement, i.value)), f = G(!1), h = G(!1), b = G(0), p = G(!1), v = G(!1), m = () => {
      b.value = y.getRequestCount(), p.value = y.hasPrevious(), v.value = y.hasNext();
    }, {
      dataManager: y,
      elementManager: $,
      flush: k
    } = vR({
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
      onBeforeNextRequest: () => h.value = !0,
      onCompletePreviousRequest: () => {
        f.value = !1, m();
      },
      onCompleteNextRequest: () => {
        h.value = !1, m();
      },
      onDataReset: m
    });
    if (m(), typeof window > "u") {
      const g = fh().scrollProps?.[e.data];
      g && (p.value = !!g.previousPage, v.value = !!g.nextPage);
    }
    const T = ne(() => !C.value), C = ne(
      () => e.manual || e.manualAfter > 0 && b.value >= e.manualAfter
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
      $.setupObservers(), $.processServerLoadedElements(y.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && _(), T.value && $.enableTriggers();
    }), ll(k), Fe(
      () => [T.value, e.onlyNext, e.onlyPrevious],
      ([g]) => {
        g ? $.enableTriggers() : $.disableTriggers();
      }
    ), r({
      fetchNext: y.fetchNext,
      fetchPrevious: y.fetchPrevious,
      hasPrevious: y.hasPrevious,
      hasNext: y.hasNext
    }), () => {
      const g = [], S = {
        loadingPrevious: f.value,
        loadingNext: h.value,
        hasPrevious: p.value,
        hasNext: v.value
      };
      if (!e.startElement) {
        const L = T.value && !e.onlyNext, F = {
          loading: f.value,
          fetch: y.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ...S
        };
        g.push(
          Me(
            "div",
            { ref: a },
            t.previous ? t.previous(F) : f.value ? t.loading?.(F) : void 0
          )
        );
      }
      if (g.push(
        Me(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || h.value,
            loadingPrevious: f.value,
            loadingNext: h.value
          })
        )
      ), !e.endElement) {
        const L = T.value && !e.onlyPrevious, F = {
          loading: h.value,
          fetch: y.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: v.value,
          ...S
        };
        g.push(
          Me(
            "div",
            { ref: i },
            t.next ? t.next(F) : h.value ? t.loading?.(F) : void 0
          )
        );
      }
      return Me(ee, {}, e.reverse ? [...g].reverse() : g);
    };
  }
});
var Ht = () => {
}, jR = qe({
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
      default: Ht
    },
    onProgress: {
      type: Function,
      default: Ht
    },
    onFinish: {
      type: Function,
      default: Ht
    },
    onBefore: {
      type: Function,
      default: Ht
    },
    onCancel: {
      type: Function,
      default: Ht
    },
    onSuccess: {
      type: Function,
      default: Ht
    },
    onError: {
      type: Function,
      default: Ht
    },
    onCancelToken: {
      type: Function,
      default: Ht
    },
    onPrefetching: {
      type: Function,
      default: Ht
    },
    onPrefetched: {
      type: Function,
      default: Ht
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
    const r = G(0), o = G(), a = ne(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), i = ne(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : za.get("prefetch.cacheFor"));
    Ke(() => {
      a.value.includes("mount") && v();
    }), ll(() => {
      clearTimeout(o.value);
    });
    const l = ne(
      () => pn(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), d = ne(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : l.value !== "get" ? "button" : e.as.toLowerCase()), u = ne(
      () => ql(
        l.value,
        pn(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), c = ne(() => u.value[0]), f = ne(() => u.value[1]), h = ne(() => d.value === "button" ? { type: "button" } : d.value === "a" || typeof d.value != "string" ? { href: c.value } : {}), b = ne(() => ({
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
    })), p = ne(() => ({
      ...b.value,
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
    })), v = () => {
      Ze.prefetch(
        c.value,
        {
          ...b.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: i.value,
          cacheTags: e.cacheTags
        }
      );
    }, m = {
      onClick: (k) => {
        Bo(k) && (k.preventDefault(), Ze.visit(c.value, p.value));
      }
    }, y = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          v();
        }, za.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: m.onClick
    }, $ = {
      onMousedown: (k) => {
        Bo(k) && (k.preventDefault(), v());
      },
      onKeydown: (k) => {
        jc(k) && (k.preventDefault(), v());
      },
      onMouseup: (k) => {
        Bo(k) && (k.preventDefault(), Ze.visit(c.value, p.value));
      },
      onKeyup: (k) => {
        jc(k) && (k.preventDefault(), Ze.visit(c.value, p.value));
      },
      onClick: (k) => {
        Bo(k) && k.preventDefault();
      }
    };
    return () => Me(
      d.value,
      {
        ...n,
        ...h.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? y : a.value.includes("click") ? $ : m
      },
      t
    );
  }
}), HR = jR;
qe({
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
    const e = fh();
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
    return (this.$props.always || !this.loaded) && e.push(Me(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var za = An.extend({});
const GR = { class: "space-y-3 text-zinc-900 dark:text-white" }, WR = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, YR = { key: 0 }, XR = { key: 1 }, KR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, ZR = { class: "space-y-2" }, JR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, QR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, eM = {
  key: 0,
  class: "flex items-center gap-2"
}, tM = ["disabled", "onClick"], nM = ["disabled", "onClick"], rM = ["disabled", "onClick"], oM = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = G([]), r = G(!0), o = G(!1), a = G(!1), i = G(""), l = G(null), d = ne(() => t.produto?.id ?? null), u = ne(() => new Map(n.value.map((p) => [p.trigger_event, p])));
    async function c() {
      r.value = !0, i.value = "";
      try {
        const [p, v] = await Promise.all([Te.connection(), Te.flows(d.value)]);
        a.value = p.connection.connected, n.value = v.flows || [];
      } catch (p) {
        i.value = p.message;
      } finally {
        r.value = !1;
      }
    }
    async function f(p) {
      o.value = !0, i.value = "";
      try {
        await p(), await c();
      } catch (v) {
        i.value = v.message;
      } finally {
        o.value = !1;
      }
    }
    const h = (p) => f(() => Te.createFlow({
      name: `${p.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: p.eventClass,
      product_id: d.value,
      is_active: !0,
      graph_json: Ap(p.eventClass)
    })), b = (p) => f(() => Te.updateFlow(p.id, { is_active: !p.is_active }));
    return Ke(c), (p, v) => (w(), z("div", GR, [
      r.value ? (w(), z("p", WR, "Verificando integração…")) : (w(), z(ee, { key: 1 }, [
        s("div", {
          class: W(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          Y(N(Lr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (w(), z("span", YR, "ZapRei conectado à Evolution GO.")) : (w(), z("span", XR, [
            v[2] || (v[2] = re(" A Evolution GO não está conectada. ", -1)),
            Y(N(HR), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: ot(() => [...v[1] || (v[1] = [
                re("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            v[3] || (v[3] = re(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        v[5] || (v[5] = s("div", null, [
          s("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          s("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        i.value ? (w(), z("p", KR, q(i.value), 1)) : le("", !0),
        s("div", ZR, [
          (w(!0), z(ee, null, De(N(Vn), (m) => (w(), z("div", {
            key: m.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            s("div", null, [
              s("div", JR, q(m.label), 1),
              s("div", QR, q(m.eventClass), 1)
            ]),
            u.value.get(m.eventClass) ? (w(), z("div", eM, [
              s("span", {
                class: W(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(m.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, q(u.value.get(m.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              s("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (y) => b(u.value.get(m.eventClass))
              }, q(u.value.get(m.eventClass).is_active ? "Pausar" : "Ativar"), 9, tM),
              s("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (y) => l.value = u.value.get(m.eventClass)
              }, [
                Y(N(uf), { class: "h-3 w-3" }),
                v[4] || (v[4] = re(" Editar ", -1))
              ], 8, nM)
            ])) : (w(), z("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (y) => h(m)
            }, " Criar fluxo ", 8, rM))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (w(), Ae(Mp, {
        key: 2,
        flow: l.value,
        onClose: v[0] || (v[0] = (m) => l.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : le("", !0)
    ]));
  }
}, aM = "zaprei", Xc = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Xc)) {
  const e = document.createElement("link");
  e.id = Xc, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[aM] = { Dashboard: aP, Integrations: sP, ProductPanel: oM };
export {
  aP as Dashboard,
  sP as Integrations,
  oM as ProductPanel
};
