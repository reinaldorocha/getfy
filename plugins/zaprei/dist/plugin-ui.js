import { h as ze, ref as W, reactive as hr, onMounted as Ke, openBlock as z, createElementBlock as T, createElementVNode as i, createVNode as X, unref as N, normalizeClass as Z, withDirectives as ie, vModelCheckbox as qd, vModelText as ye, createStaticVNode as Vd, createTextVNode as Ce, toDisplayString as L, createCommentVNode as ee, getCurrentScope as jd, inject as mr, effectScope as Hd, watch as Ie, provide as Fn, defineComponent as Fe, useSlots as lh, onUnmounted as tl, withCtx as rt, renderSlot as Ye, createPropsRestProxy as uh, toRef as qe, computed as J, getCurrentInstance as vr, onScopeDispose as No, nextTick as ln, onBeforeMount as ch, shallowRef as on, Fragment as ve, renderList as Re, normalizeStyle as vt, onBeforeUnmount as ya, isMemoSame as dh, createBlock as Oe, useAttrs as fh, mergeProps as ba, Teleport as Gd, isRef as nl, toRefs as ph, customRef as hh, toValue as Me, resolveComponent as Wd, resolveDynamicComponent as Ot, markRaw as tr, readonly as mh, withModifiers as nn, vModelSelect as lt, Transition as vh, toHandlers as gh } from "vue";
const yh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Xl = (e) => e === "";
const bh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Yl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const xh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const wh = (e) => {
  const t = xh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var wr = {
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
const _h = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": a,
  size: s = wr.width,
  color: l = wr.stroke,
  ...d
}, { slots: u }) => ze(
  "svg",
  {
    ...wr,
    ...d,
    width: s,
    height: s,
    stroke: l,
    "stroke-width": Xl(n) || Xl(r) || n === !0 || r === !0 ? Number(o || a || wr["stroke-width"]) * 24 / Number(s) : o || a || wr["stroke-width"],
    class: bh(
      "lucide",
      d.class,
      ...e ? [`lucide-${Yl(wh(e))}-icon`, `lucide-${Yl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !yh(d) && { "aria-hidden": "true" }
  },
  [...t.map((c) => ze(...c)), ...u.default ? [u.default()] : []]
);
const $e = (e, t) => (n, { slots: r, attrs: o }) => ze(
  _h,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const kh = $e("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Xd = $e("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Sh = $e("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Eh = $e("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const es = $e("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const Yd = $e("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const xi = $e("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Kd = $e("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const zh = $e("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const xa = $e("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const qr = $e("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ar = $e("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Zd = $e("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Jd = $e("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const $h = $e("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ph = $e("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Kl = $e("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Nr = $e("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const Qd = $e("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const It = $e("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Zl = $e("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Ch = $e("message-square-text", [
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
const ef = $e("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Ah = $e("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const tf = $e("palette", [
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
const Th = $e("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const nf = $e("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const rf = $e("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Oh = $e("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const Jl = $e("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Nh = $e("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Rh = $e("save", [
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
const Vr = $e("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Pt = $e("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const of = $e("settings", [
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
const rl = $e("sparkles", [
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
const Yo = $e("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const af = $e("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Mh = $e("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const wi = $e("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const At = $e("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Bn = $e("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Dh = "/zaprei";
function Fh() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function Bh(e) {
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
function Xe(e, { method: t = "GET", body: n, query: r } = {}) {
  const o = new URL(Dh + e, window.location.origin);
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
      "X-CSRF-TOKEN": Fh(),
      ...a || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: a ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(Bh);
}
const Ae = {
  connection: () => Xe("/connection"),
  saveConnection: (e) => Xe("/connection", { method: "PUT", body: e }),
  testConnection: () => Xe("/connection/test", { method: "POST" }),
  products: () => Xe("/products"),
  groups: () => Xe("/groups"),
  dailyReport: () => Xe("/daily-report"),
  saveDailyReport: (e) => Xe("/daily-report", { method: "PUT", body: e }),
  testDailyReport: (e) => Xe("/daily-report/test", { method: "POST", body: e }),
  flows: (e) => Xe("/flows", { query: { product_id: e } }),
  createFlow: (e) => Xe("/flows", { method: "POST", body: e }),
  updateFlow: (e, t) => Xe(`/flows/${e}`, { method: "PUT", body: t }),
  deleteFlow: (e) => Xe(`/flows/${e}`, { method: "DELETE" }),
  duplicateFlow: (e) => Xe(`/flows/${e}/duplicate`, { method: "POST" }),
  testFlow: (e, t) => Xe(`/flows/${e}/test`, {
    method: "POST",
    body: typeof t == "string" ? { phone: t } : t
  }),
  runs: () => Xe("/flows/runs"),
  retryRun: (e) => Xe(`/flows/runs/${e}/retry`, { method: "POST" }),
  contacts: (e) => Xe("/contacts", { query: e }),
  importContacts: (e) => Xe("/contacts/import", { method: "POST", body: Ql(e) }),
  deleteContact: (e) => Xe(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Xe("/campaigns"),
  createCampaign: (e) => Xe("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Xe(`/campaigns/${e}`),
  cancelCampaign: (e) => Xe(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Xe("/media", { method: "POST", body: Ql(e) })
};
function Ql(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Lh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Uh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, qh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Vh = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, jh = {
  key: 1,
  class: "mt-4 space-y-4"
}, Hh = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, Gh = ["placeholder"], Wh = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Xh = { class: "mt-2 flex items-center gap-2" }, Yh = ["value"], Kh = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, Zh = { class: "flex flex-wrap items-center gap-2" }, Jh = ["disabled"], Qh = ["disabled"], em = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, tm = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, nm = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, sf = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = W(!0), o = W(!1), a = W(!1), s = W(""), l = W(""), d = W(!1), u = W(!1), c = W(""), f = hr({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, s.value = "";
      try {
        const { connection: m } = await Ae.connection();
        f.base_url = m.credentials.base_url || "", f.instance = m.credentials.instance || "", f.is_active = m.is_active, u.value = m.credentials.has_api_key, d.value = m.connected, c.value = m.webhook_url || "";
      } catch (m) {
        s.value = m.message;
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      o.value = !0, s.value = "", l.value = "";
      try {
        const { connection: m } = await Ae.saveConnection({ ...f });
        f.api_key = "", u.value = m.credentials.has_api_key, d.value = m.connected, c.value = m.webhook_url || "", l.value = "Conexão salva.", n("saved");
      } catch (m) {
        s.value = m.message;
      } finally {
        o.value = !1;
      }
    }
    async function h() {
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
        const { message: m } = await Ae.testConnection();
        l.value = m || "Conexão validada.";
      } catch (m) {
        s.value = m.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(v), (m, g) => (z(), T("div", Lh, [
      i("div", Uh, [
        i("div", qh, [
          X(N(nf), { class: "h-5 w-5" })
        ]),
        g[5] || (g[5] = i("div", null, [
          i("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (z(), T("div", Vh, [
        X(N(It), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        g[6] || (g[6] = i("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (z(), T("div", jh, [
        i("div", Hh, [
          g[7] || (g[7] = i("div", null, [
            i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            i("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          i("label", {
            class: Z(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ie(i("input", {
              "onUpdate:modelValue": g[0] || (g[0] = (_) => f.is_active = _),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [qd, f.is_active]
            ]),
            i("span", {
              class: Z(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        i("div", null, [
          g[8] || (g[8] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          ie(i("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": g[1] || (g[1] = (_) => f.base_url = _),
            type: "url",
            placeholder: "https://sua-evolution-go.com",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              ye,
              f.base_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          g[9] || (g[9] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ie(i("input", {
            id: "zr-instance",
            "onUpdate:modelValue": g[2] || (g[2] = (_) => f.instance = _),
            type: "text",
            placeholder: "getfy-bot",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              ye,
              f.instance,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          g[10] || (g[10] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ie(i("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": g[3] || (g[3] = (_) => f.api_key = _),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, Gh), [
            [
              ye,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          g[11] || (g[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        c.value ? (z(), T("div", Wh, [
          g[13] || (g[13] = Vd('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          i("div", Xh, [
            i("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: g[4] || (g[4] = (_) => _.target.select())
            }, null, 40, Yh),
            i("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: h
            }, [
              X(N(Zd), { class: "h-3.5 w-3.5" }),
              g[12] || (g[12] = Ce(" Copiar ", -1))
            ])
          ])
        ])) : (z(), T("p", Kh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        i("div", Zh, [
          i("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: b
          }, L(o.value ? "Salvando…" : "Salvar conexão"), 9, Jh),
          i("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, L(a.value ? "Testando…" : "Testar conexão"), 9, Qh),
          d.value ? (z(), T("span", em, [
            X(N(qr), { class: "h-3 w-3" }),
            g[14] || (g[14] = Ce(" Conectado ", -1))
          ])) : ee("", !0)
        ]),
        s.value ? (z(), T("p", tm, L(s.value), 1)) : l.value ? (z(), T("p", nm, L(l.value), 1)) : ee("", !0)
      ]))
    ]));
  }
};
function jr(e) {
  return jd() ? (No(e), !0) : !1;
}
function rn(e) {
  return typeof e == "function" ? e() : N(e);
}
const rm = typeof window < "u" && typeof document < "u", om = (e) => typeof e < "u", am = Object.prototype.toString, sm = (e) => am.call(e) === "[object Object]", im = () => {
};
function lm(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const lf = (e) => e();
function um(e = lf) {
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
  return { isActive: mh(t), pause: n, resume: r, eventFilter: o };
}
function eu(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function cm(e, t, n = {}) {
  const {
    eventFilter: r = lf,
    ...o
  } = n;
  return Ie(
    e,
    lm(
      r,
      t
    ),
    o
  );
}
function Kn(e, t, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: a, pause: s, resume: l, isActive: d } = um(r);
  return { stop: cm(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: s, resume: l, isActive: d };
}
function dm(e, t = {}) {
  if (!nl(e))
    return ph(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = hh(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var a;
        if ((a = rn(t.replaceRef)) != null ? a : !0)
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
function _i(e, t = !1) {
  function n(f, { flush: v = "sync", deep: b = !1, timeout: h, throwOnTimeout: p } = {}) {
    let m = null;
    const _ = [new Promise((y) => {
      m = Ie(
        e,
        (k) => {
          f(k) !== t && (m?.(), y(k));
        },
        {
          flush: v,
          deep: b,
          immediate: !0
        }
      );
    })];
    return h != null && _.push(
      eu(h, p).then(() => rn(e)).finally(() => m?.())
    ), Promise.race(_);
  }
  function r(f, v) {
    if (!nl(f))
      return n((k) => k === f, v);
    const { flush: b = "sync", deep: h = !1, timeout: p, throwOnTimeout: m } = v ?? {};
    let g = null;
    const y = [new Promise((k) => {
      g = Ie(
        [e, f],
        ([C, $]) => {
          t !== (C === $) && (g?.(), k(C));
        },
        {
          flush: b,
          deep: h,
          immediate: !0
        }
      );
    })];
    return p != null && y.push(
      eu(p, m).then(() => rn(e)).finally(() => (g?.(), rn(e)))
    ), Promise.race(y);
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
    return n((b) => {
      const h = Array.from(b);
      return h.includes(f) || h.includes(rn(f));
    }, v);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, v) {
    let b = -1;
    return n(() => (b += 1, b >= f), v);
  }
  return Array.isArray(rn(e)) ? {
    toMatch: n,
    toContains: d,
    changed: u,
    changedTimes: c,
    get not() {
      return _i(e, !t);
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
      return _i(e, !t);
    }
  };
}
function ki(e) {
  return _i(e);
}
function fm(e) {
  var t;
  const n = rn(e);
  return (t = n?.$el) != null ? t : n;
}
const uf = rm ? window : void 0;
function cf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = uf) : [t, n, r, o] = e, !t)
    return im;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, f, v, b) => (c.addEventListener(f, v, b), () => c.removeEventListener(f, v, b)), d = Ie(
    () => [fm(t), rn(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const v = sm(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((b) => r.map((h) => l(c, b, h, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), s();
  };
  return jr(u), u;
}
function pm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function tu(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = uf,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: l = !1
  } = r, d = pm(t);
  return cf(o, a, (c) => {
    c.repeat && rn(l) || d(c) && n(c);
  }, s);
}
function hm(e) {
  return JSON.parse(JSON.stringify(e));
}
function ts(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, b = vr(), h = n || b?.emit || ((o = b?.$emit) == null ? void 0 : o.bind(b)) || ((s = (a = b?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(b?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const m = (y) => l ? typeof l == "function" ? l(y) : hm(y) : y, g = () => om(e[t]) ? m(e[t]) : f, _ = (y) => {
    v ? v(y) && h(p, y) : h(p, y);
  };
  if (d) {
    const y = g(), k = W(y);
    let C = !1;
    return Ie(
      () => e[t],
      ($) => {
        C || (C = !0, k.value = m($), ln(() => C = !1));
      }
    ), Ie(
      k,
      ($) => {
        !C && ($ !== e[t] || c) && _($);
      },
      { deep: c }
    ), k;
  } else
    return J({
      get() {
        return g();
      },
      set(y) {
        _(y);
      }
    });
}
var mm = { value: () => {
} };
function wa() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ro(n);
}
function Ro(e) {
  this._ = e;
}
function vm(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ro.prototype = wa.prototype = {
  constructor: Ro,
  on: function(e, t) {
    var n = this._, r = vm(e + "", n), o, a = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (e = r[a]).type) && (o = gm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < s; )
      if (o = (e = r[a]).type)
        n[o] = nu(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = nu(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Ro(e);
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
function gm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function nu(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Si = "http://www.w3.org/1999/xhtml";
const ru = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Si,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _a(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ru.hasOwnProperty(t) ? { space: ru[t], local: e } : e;
}
function ym(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Si && t.documentElement.namespaceURI === Si ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function bm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function df(e) {
  var t = _a(e);
  return (t.local ? bm : ym)(t);
}
function xm() {
}
function ol(e) {
  return e == null ? xm : function() {
    return this.querySelector(e);
  };
}
function wm(e) {
  typeof e != "function" && (e = ol(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = new Array(s), d, u, c = 0; c < s; ++c)
      (d = a[c]) && (u = e.call(d, d.__data__, c, a)) && ("__data__" in d && (u.__data__ = d.__data__), l[c] = u);
  return new wt(r, this._parents);
}
function _m(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function km() {
  return [];
}
function ff(e) {
  return e == null ? km : function() {
    return this.querySelectorAll(e);
  };
}
function Sm(e) {
  return function() {
    return _m(e.apply(this, arguments));
  };
}
function Em(e) {
  typeof e == "function" ? e = Sm(e) : e = ff(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var s = t[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && (r.push(e.call(d, d.__data__, u, s)), o.push(d));
  return new wt(r, o);
}
function pf(e) {
  return function() {
    return this.matches(e);
  };
}
function hf(e) {
  return function(t) {
    return t.matches(e);
  };
}
var zm = Array.prototype.find;
function $m(e) {
  return function() {
    return zm.call(this.children, e);
  };
}
function Pm() {
  return this.firstElementChild;
}
function Cm(e) {
  return this.select(e == null ? Pm : $m(typeof e == "function" ? e : hf(e)));
}
var Am = Array.prototype.filter;
function Tm() {
  return Array.from(this.children);
}
function Om(e) {
  return function() {
    return Am.call(this.children, e);
  };
}
function Nm(e) {
  return this.selectAll(e == null ? Tm : Om(typeof e == "function" ? e : hf(e)));
}
function Rm(e) {
  typeof e != "function" && (e = pf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new wt(r, this._parents);
}
function mf(e) {
  return new Array(e.length);
}
function Im() {
  return new wt(this._enter || this._groups.map(mf), this._parents);
}
function Ko(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ko.prototype = {
  constructor: Ko,
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
function Mm(e) {
  return function() {
    return e;
  };
}
function Dm(e, t, n, r, o, a) {
  for (var s = 0, l, d = t.length, u = a.length; s < u; ++s)
    (l = t[s]) ? (l.__data__ = a[s], r[s] = l) : n[s] = new Ko(e, a[s]);
  for (; s < d; ++s)
    (l = t[s]) && (o[s] = l);
}
function Fm(e, t, n, r, o, a, s) {
  var l, d, u = /* @__PURE__ */ new Map(), c = t.length, f = a.length, v = new Array(c), b;
  for (l = 0; l < c; ++l)
    (d = t[l]) && (v[l] = b = s.call(d, d.__data__, l, t) + "", u.has(b) ? o[l] = d : u.set(b, d));
  for (l = 0; l < f; ++l)
    b = s.call(e, a[l], l, a) + "", (d = u.get(b)) ? (r[l] = d, d.__data__ = a[l], u.delete(b)) : n[l] = new Ko(e, a[l]);
  for (l = 0; l < c; ++l)
    (d = t[l]) && u.get(v[l]) === d && (o[l] = d);
}
function Bm(e) {
  return e.__data__;
}
function Lm(e, t) {
  if (!arguments.length)
    return Array.from(this, Bm);
  var n = t ? Fm : Dm, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Mm(e));
  for (var a = o.length, s = new Array(a), l = new Array(a), d = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], f = o[u], v = f.length, b = Um(e.call(c, c && c.__data__, u, r)), h = b.length, p = l[u] = new Array(h), m = s[u] = new Array(h), g = d[u] = new Array(v);
    n(c, f, p, m, g, b, t);
    for (var _ = 0, y = 0, k, C; _ < h; ++_)
      if (k = p[_]) {
        for (_ >= y && (y = _ + 1); !(C = m[y]) && ++y < h; )
          ;
        k._next = C || null;
      }
  }
  return s = new wt(s, r), s._enter = l, s._exit = d, s;
}
function Um(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qm() {
  return new wt(this._exit || this._groups.map(mf), this._parents);
}
function Vm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function jm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, s = Math.min(o, a), l = new Array(o), d = 0; d < s; ++d)
    for (var u = n[d], c = r[d], f = u.length, v = l[d] = new Array(f), b, h = 0; h < f; ++h)
      (b = u[h] || c[h]) && (v[h] = b);
  for (; d < o; ++d)
    l[d] = n[d];
  return new wt(l, this._parents);
}
function Hm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], s; --o >= 0; )
      (s = r[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function Gm(e) {
  e || (e = Wm);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var s = n[a], l = s.length, d = o[a] = new Array(l), u, c = 0; c < l; ++c)
      (u = s[c]) && (d[c] = u);
    d.sort(t);
  }
  return new wt(o, this._parents).order();
}
function Wm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xm() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ym() {
  return Array.from(this);
}
function Km() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function Zm() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Jm() {
  return !this.node();
}
function Qm(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, s = o.length, l; a < s; ++a)
      (l = o[a]) && e.call(l, l.__data__, a, o);
  return this;
}
function ev(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function tv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function nv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function rv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ov(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function av(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function sv(e, t) {
  var n = _a(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? tv : ev : typeof t == "function" ? n.local ? av : ov : n.local ? rv : nv)(n, t));
}
function vf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function iv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function lv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function uv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function cv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? iv : typeof t == "function" ? uv : lv)(e, t, n ?? "")) : sr(this.node(), e);
}
function sr(e, t) {
  return e.style.getPropertyValue(t) || vf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function dv(e) {
  return function() {
    delete this[e];
  };
}
function fv(e, t) {
  return function() {
    this[e] = t;
  };
}
function pv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function hv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? dv : typeof t == "function" ? pv : fv)(e, t)) : this.node()[e];
}
function gf(e) {
  return e.trim().split(/^|\s+/);
}
function al(e) {
  return e.classList || new yf(e);
}
function yf(e) {
  this._node = e, this._names = gf(e.getAttribute("class") || "");
}
yf.prototype = {
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
function bf(e, t) {
  for (var n = al(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function xf(e, t) {
  for (var n = al(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function mv(e) {
  return function() {
    bf(this, e);
  };
}
function vv(e) {
  return function() {
    xf(this, e);
  };
}
function gv(e, t) {
  return function() {
    (t.apply(this, arguments) ? bf : xf)(this, e);
  };
}
function yv(e, t) {
  var n = gf(e + "");
  if (arguments.length < 2) {
    for (var r = al(this.node()), o = -1, a = n.length; ++o < a; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? gv : t ? mv : vv)(n, t));
}
function bv() {
  this.textContent = "";
}
function xv(e) {
  return function() {
    this.textContent = e;
  };
}
function wv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function _v(e) {
  return arguments.length ? this.each(e == null ? bv : (typeof e == "function" ? wv : xv)(e)) : this.node().textContent;
}
function kv() {
  this.innerHTML = "";
}
function Sv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ev(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function zv(e) {
  return arguments.length ? this.each(e == null ? kv : (typeof e == "function" ? Ev : Sv)(e)) : this.node().innerHTML;
}
function $v() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Pv() {
  return this.each($v);
}
function Cv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Av() {
  return this.each(Cv);
}
function Tv(e) {
  var t = typeof e == "function" ? e : df(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ov() {
  return null;
}
function Nv(e, t) {
  var n = typeof e == "function" ? e : df(e), r = t == null ? Ov : typeof t == "function" ? t : ol(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Rv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Iv() {
  return this.each(Rv);
}
function Mv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Dv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fv(e) {
  return this.select(e ? Dv : Mv);
}
function Bv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Lv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Uv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function qv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Vv(e, t, n) {
  return function() {
    var r = this.__on, o, a = Lv(t);
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
function jv(e, t, n) {
  var r = Uv(e + ""), o, a = r.length, s;
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
  for (l = t ? Vv : qv, o = 0; o < a; ++o)
    this.each(l(r[o], t, n));
  return this;
}
function wf(e, t, n) {
  var r = vf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hv(e, t) {
  return function() {
    return wf(this, e, t);
  };
}
function Gv(e, t) {
  return function() {
    return wf(this, e, t.apply(this, arguments));
  };
}
function Wv(e, t) {
  return this.each((typeof t == "function" ? Gv : Hv)(e, t));
}
function* Xv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, s; o < a; ++o)
      (s = r[o]) && (yield s);
}
var _f = [null];
function wt(e, t) {
  this._groups = e, this._parents = t;
}
function ro() {
  return new wt([[document.documentElement]], _f);
}
function Yv() {
  return this;
}
wt.prototype = ro.prototype = {
  constructor: wt,
  select: wm,
  selectAll: Em,
  selectChild: Cm,
  selectChildren: Nm,
  filter: Rm,
  data: Lm,
  enter: Im,
  exit: qm,
  join: Vm,
  merge: jm,
  selection: Yv,
  order: Hm,
  sort: Gm,
  call: Xm,
  nodes: Ym,
  node: Km,
  size: Zm,
  empty: Jm,
  each: Qm,
  attr: sv,
  style: cv,
  property: hv,
  classed: yv,
  text: _v,
  html: zv,
  raise: Pv,
  lower: Av,
  append: Tv,
  insert: Nv,
  remove: Iv,
  clone: Fv,
  datum: Bv,
  on: jv,
  dispatch: Wv,
  [Symbol.iterator]: Xv
};
function Nt(e) {
  return typeof e == "string" ? new wt([[document.querySelector(e)]], [document.documentElement]) : new wt([[e]], _f);
}
function Kv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function jt(e, t) {
  if (e = Kv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Zv = { passive: !1 }, Hr = { capture: !0, passive: !1 };
function ns(e) {
  e.stopImmediatePropagation();
}
function nr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kf(e) {
  var t = e.document.documentElement, n = Nt(e).on("dragstart.drag", nr, Hr);
  "onselectstart" in t ? n.on("selectstart.drag", nr, Hr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sf(e, t) {
  var n = e.document.documentElement, r = Nt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", nr, Hr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const go = (e) => () => e;
function Ei(e, {
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
Ei.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Jv(e) {
  return !e.ctrlKey && !e.button;
}
function Qv() {
  return this.parentNode;
}
function eg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function tg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ng() {
  var e = Jv, t = Qv, n = eg, r = tg, o = {}, a = wa("start", "drag", "end"), s = 0, l, d, u, c, f = 0;
  function v(k) {
    k.on("mousedown.drag", b).filter(r).on("touchstart.drag", m).on("touchmove.drag", g, Zv).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(k, C) {
    if (!(c || !e.call(this, k, C))) {
      var $ = y(this, t.call(this, k, C), k, C, "mouse");
      $ && (Nt(k.view).on("mousemove.drag", h, Hr).on("mouseup.drag", p, Hr), kf(k.view), ns(k), u = !1, l = k.clientX, d = k.clientY, $("start", k));
    }
  }
  function h(k) {
    if (nr(k), !u) {
      var C = k.clientX - l, $ = k.clientY - d;
      u = C * C + $ * $ > f;
    }
    o.mouse("drag", k);
  }
  function p(k) {
    Nt(k.view).on("mousemove.drag mouseup.drag", null), Sf(k.view, u), nr(k), o.mouse("end", k);
  }
  function m(k, C) {
    if (e.call(this, k, C)) {
      var $ = k.changedTouches, w = t.call(this, k, C), S = $.length, U, D;
      for (U = 0; U < S; ++U)
        (D = y(this, w, k, C, $[U].identifier, $[U])) && (ns(k), D("start", k, $[U]));
    }
  }
  function g(k) {
    var C = k.changedTouches, $ = C.length, w, S;
    for (w = 0; w < $; ++w)
      (S = o[C[w].identifier]) && (nr(k), S("drag", k, C[w]));
  }
  function _(k) {
    var C = k.changedTouches, $ = C.length, w, S;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), w = 0; w < $; ++w)
      (S = o[C[w].identifier]) && (ns(k), S("end", k, C[w]));
  }
  function y(k, C, $, w, S, U) {
    var D = a.copy(), M = jt(U || $, C), A, V, E;
    if ((E = n.call(k, new Ei("beforestart", {
      sourceEvent: $,
      target: v,
      identifier: S,
      active: s,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), w)) != null)
      return A = E.x - M[0] || 0, V = E.y - M[1] || 0, function F(P, R, x) {
        var q = M, Q;
        switch (P) {
          case "start":
            o[S] = F, Q = s++;
            break;
          case "end":
            delete o[S], --s;
          case "drag":
            M = jt(x || R, C), Q = s;
            break;
        }
        D.call(
          P,
          k,
          new Ei(P, {
            sourceEvent: R,
            subject: E,
            target: v,
            identifier: S,
            active: Q,
            x: M[0] + A,
            y: M[1] + V,
            dx: M[0] - q[0],
            dy: M[1] - q[1],
            dispatch: D
          }),
          w
        );
      };
  }
  return v.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : go(!!k), v) : e;
  }, v.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : go(k), v) : t;
  }, v.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : go(k), v) : n;
  }, v.touchable = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : go(!!k), v) : r;
  }, v.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? v : k;
  }, v.clickDistance = function(k) {
    return arguments.length ? (f = (k = +k) * k, v) : Math.sqrt(f);
  }, v;
}
function sl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ef(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function oo() {
}
var Gr = 0.7, Zo = 1 / Gr, rr = "\\s*([+-]?\\d+)\\s*", Wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rg = /^#([0-9a-f]{3,8})$/, og = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), ag = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), sg = new RegExp(`^rgba\\(${rr},${rr},${rr},${Wr}\\)$`), ig = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${Wr}\\)$`), lg = new RegExp(`^hsl\\(${Wr},${Xt},${Xt}\\)$`), ug = new RegExp(`^hsla\\(${Wr},${Xt},${Xt},${Wr}\\)$`), ou = {
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
sl(oo, Ln, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: au,
  // Deprecated! Use color.formatHex.
  formatHex: au,
  formatHex8: cg,
  formatHsl: dg,
  formatRgb: su,
  toString: su
});
function au() {
  return this.rgb().formatHex();
}
function cg() {
  return this.rgb().formatHex8();
}
function dg() {
  return zf(this).formatHsl();
}
function su() {
  return this.rgb().formatRgb();
}
function Ln(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? iu(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = og.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = ag.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sg.exec(e)) ? yo(t[1], t[2], t[3], t[4]) : (t = ig.exec(e)) ? yo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = lg.exec(e)) ? cu(t[1], t[2] / 100, t[3] / 100, 1) : (t = ug.exec(e)) ? cu(t[1], t[2] / 100, t[3] / 100, t[4]) : ou.hasOwnProperty(e) ? iu(ou[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function iu(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function fg(e) {
  return e instanceof oo || (e = Ln(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function zi(e, t, n, r) {
  return arguments.length === 1 ? fg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
sl(pt, zi, Ef(oo, {
  brighter(e) {
    return e = e == null ? Zo : Math.pow(Zo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Rn(this.r), Rn(this.g), Rn(this.b), Jo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lu,
  // Deprecated! Use color.formatHex.
  formatHex: lu,
  formatHex8: pg,
  formatRgb: uu,
  toString: uu
}));
function lu() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function pg() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function uu() {
  const e = Jo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Rn(this.r)}, ${Rn(this.g)}, ${Rn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Jo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Rn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = Rn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function cu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Rt(e, t, n, r);
}
function zf(e) {
  if (e instanceof Rt)
    return new Rt(e.h, e.s, e.l, e.opacity);
  if (e instanceof oo || (e = Ln(e)), !e)
    return new Rt();
  if (e instanceof Rt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, l = a - o, d = (a + o) / 2;
  return l ? (t === a ? s = (n - r) / l + (n < r) * 6 : n === a ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= d < 0.5 ? a + o : 2 - a - o, s *= 60) : l = d > 0 && d < 1 ? 0 : s, new Rt(s, l, d, e.opacity);
}
function hg(e, t, n, r) {
  return arguments.length === 1 ? zf(e) : new Rt(e, t, n, r ?? 1);
}
function Rt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
sl(Rt, hg, Ef(oo, {
  brighter(e) {
    return e = e == null ? Zo : Math.pow(Zo, e), new Rt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new Rt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      rs(e >= 240 ? e - 240 : e + 120, o, r),
      rs(e, o, r),
      rs(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Rt(du(this.h), bo(this.s), bo(this.l), Jo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Jo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${du(this.h)}, ${bo(this.s) * 100}%, ${bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function du(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const il = (e) => () => e;
function mg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function vg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function gg(e) {
  return (e = +e) == 1 ? $f : function(t, n) {
    return n - t ? vg(t, n, e) : il(isNaN(t) ? n : t);
  };
}
function $f(e, t) {
  var n = t - e;
  return n ? mg(e, n) : il(isNaN(e) ? t : e);
}
const Qo = (function e(t) {
  var n = gg(t);
  function r(o, a) {
    var s = n((o = zi(o)).r, (a = zi(a)).r), l = n(o.g, a.g), d = n(o.b, a.b), u = $f(o.opacity, a.opacity);
    return function(c) {
      return o.r = s(c), o.g = l(c), o.b = d(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function yg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(a) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - a) + t[o] * a;
    return r;
  };
}
function bg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xg(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), a = new Array(n), s;
  for (s = 0; s < r; ++s)
    o[s] = Rr(e[s], t[s]);
  for (; s < n; ++s)
    a[s] = t[s];
  return function(l) {
    for (s = 0; s < r; ++s)
      a[s] = o[s](l);
    return a;
  };
}
function wg(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Ht(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function _g(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Rr(e[o], t[o]) : r[o] = t[o];
  return function(a) {
    for (o in n)
      r[o] = n[o](a);
    return r;
  };
}
var $i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, os = new RegExp($i.source, "g");
function kg(e) {
  return function() {
    return e;
  };
}
function Sg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Pf(e, t) {
  var n = $i.lastIndex = os.lastIndex = 0, r, o, a, s = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (r = $i.exec(e)) && (o = os.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[s] ? l[s] += a : l[++s] = a), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, d.push({ i: s, x: Ht(r, o) })), n = os.lastIndex;
  return n < t.length && (a = t.slice(n), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? d[0] ? Sg(d[0].x) : kg(t) : (t = d.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      l[(f = d[c]).i] = f.x(u);
    return l.join("");
  });
}
function Rr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? il(t) : (n === "number" ? Ht : n === "string" ? (r = Ln(t)) ? (t = r, Qo) : Pf : t instanceof Ln ? Qo : t instanceof Date ? wg : bg(t) ? yg : Array.isArray(t) ? xg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _g : Ht)(e, t);
}
var fu = 180 / Math.PI, Pi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Cf(e, t, n, r, o, a) {
  var s, l, d;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (d = e * n + t * r) && (n -= e * d, r -= t * d), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, d /= l), e * r < t * n && (e = -e, t = -t, d = -d, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * fu,
    skewX: Math.atan(d) * fu,
    scaleX: s,
    scaleY: l
  };
}
var xo;
function Eg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Pi : Cf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zg(e) {
  return e == null || (xo || (xo = document.createElementNS("http://www.w3.org/2000/svg", "g")), xo.setAttribute("transform", e), !(e = xo.transform.baseVal.consolidate())) ? Pi : (e = e.matrix, Cf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Af(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, v, b, h) {
    if (u !== f || c !== v) {
      var p = b.push("translate(", null, t, null, n);
      h.push({ i: p - 4, x: Ht(u, f) }, { i: p - 2, x: Ht(c, v) });
    } else (f || v) && b.push("translate(" + f + t + v + n);
  }
  function s(u, c, f, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Ht(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function l(u, c, f, v) {
    u !== c ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Ht(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function d(u, c, f, v, b, h) {
    if (u !== f || c !== v) {
      var p = b.push(o(b) + "scale(", null, ",", null, ")");
      h.push({ i: p - 4, x: Ht(u, f) }, { i: p - 2, x: Ht(c, v) });
    } else (f !== 1 || v !== 1) && b.push(o(b) + "scale(" + f + "," + v + ")");
  }
  return function(u, c) {
    var f = [], v = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, v), s(u.rotate, c.rotate, f, v), l(u.skewX, c.skewX, f, v), d(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, v), u = c = null, function(b) {
      for (var h = -1, p = v.length, m; ++h < p; )
        f[(m = v[h]).i] = m.x(b);
      return f.join("");
    };
  };
}
var $g = Af(Eg, "px, ", "px)", "deg)"), Pg = Af(zg, ", ", ")", ")"), Cg = 1e-12;
function pu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ag(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Tg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Io = (function e(t, n, r) {
  function o(a, s) {
    var l = a[0], d = a[1], u = a[2], c = s[0], f = s[1], v = s[2], b = c - l, h = f - d, p = b * b + h * h, m, g;
    if (p < Cg)
      g = Math.log(v / u) / t, m = function(w) {
        return [
          l + w * b,
          d + w * h,
          u * Math.exp(t * w * g)
        ];
      };
    else {
      var _ = Math.sqrt(p), y = (v * v - u * u + r * p) / (2 * u * n * _), k = (v * v - u * u - r * p) / (2 * v * n * _), C = Math.log(Math.sqrt(y * y + 1) - y), $ = Math.log(Math.sqrt(k * k + 1) - k);
      g = ($ - C) / t, m = function(w) {
        var S = w * g, U = pu(C), D = u / (n * _) * (U * Tg(t * S + C) - Ag(C));
        return [
          l + D * b,
          d + D * h,
          u * U / pu(t * S + C)
        ];
      };
    }
    return m.duration = g * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(a) {
    var s = Math.max(1e-3, +a), l = s * s, d = l * l;
    return e(s, l, d);
  }, o;
})(Math.SQRT2, 2, 4);
var ir = 0, Cr = 0, _r = 0, Tf = 1e3, ea, Ar, ta = 0, Un = 0, ka = 0, Xr = typeof performance == "object" && performance.now ? performance : Date, Of = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ll() {
  return Un || (Of(Og), Un = Xr.now() + ka);
}
function Og() {
  Un = 0;
}
function na() {
  this._call = this._time = this._next = null;
}
na.prototype = Nf.prototype = {
  constructor: na,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ll() : +n) + (t == null ? 0 : +t), !this._next && Ar !== this && (Ar ? Ar._next = this : ea = this, Ar = this), this._call = e, this._time = n, Ci();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ci());
  }
};
function Nf(e, t, n) {
  var r = new na();
  return r.restart(e, t, n), r;
}
function Ng() {
  ll(), ++ir;
  for (var e = ea, t; e; )
    (t = Un - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ir;
}
function hu() {
  Un = (ta = Xr.now()) + ka, ir = Cr = 0;
  try {
    Ng();
  } finally {
    ir = 0, Ig(), Un = 0;
  }
}
function Rg() {
  var e = Xr.now(), t = e - ta;
  t > Tf && (ka -= t, ta = e);
}
function Ig() {
  for (var e, t = ea, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ea = n);
  Ar = e, Ci(r);
}
function Ci(e) {
  if (!ir) {
    Cr && (Cr = clearTimeout(Cr));
    var t = e - Un;
    t > 24 ? (e < 1 / 0 && (Cr = setTimeout(hu, e - Xr.now() - ka)), _r && (_r = clearInterval(_r))) : (_r || (ta = Xr.now(), _r = setInterval(Rg, Tf)), ir = 1, Of(hu));
  }
}
function mu(e, t, n) {
  var r = new na();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Mg = wa("start", "end", "cancel", "interrupt"), Dg = [], Rf = 0, vu = 1, Ai = 2, Mo = 3, gu = 4, Ti = 5, Do = 6;
function Sa(e, t, n, r, o, a) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Fg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Mg,
    tween: Dg,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Rf
  });
}
function ul(e, t) {
  var n = Dt(e, t);
  if (n.state > Rf)
    throw new Error("too late; already scheduled");
  return n;
}
function Jt(e, t) {
  var n = Dt(e, t);
  if (n.state > Mo)
    throw new Error("too late; already running");
  return n;
}
function Dt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Fg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Nf(a, 0, n.time);
  function a(u) {
    n.state = vu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, v, b;
    if (n.state !== vu)
      return d();
    for (c in r)
      if (b = r[c], b.name === n.name) {
        if (b.state === Mo)
          return mu(s);
        b.state === gu ? (b.state = Do, b.timer.stop(), b.on.call("interrupt", e, e.__data__, b.index, b.group), delete r[c]) : +c < t && (b.state = Do, b.timer.stop(), b.on.call("cancel", e, e.__data__, b.index, b.group), delete r[c]);
      }
    if (mu(function() {
      n.state === Mo && (n.state = gu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Ai, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ai) {
      for (n.state = Mo, o = new Array(v = n.tween.length), c = 0, f = -1; c < v; ++c)
        (b = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = b);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(d), n.state = Ti, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, c);
    n.state === Ti && (n.on.call("end", e, e.__data__, n.index, n.group), d());
  }
  function d() {
    n.state = Do, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Fo(e, t) {
  var n = e.__transition, r, o, a = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ai && r.state < Ti, r.state = Do, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    a && delete e.__transition;
  }
}
function Bg(e) {
  return this.each(function() {
    Fo(this, e);
  });
}
function Lg(e, t) {
  var n, r;
  return function() {
    var o = Jt(this, e), a = o.tween;
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
function Ug(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = Jt(this, e), s = a.tween;
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
function qg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Dt(this.node(), n).tween, o = 0, a = r.length, s; o < a; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Lg : Ug)(n, e, t));
}
function cl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Jt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Dt(o, r).value[t];
  };
}
function If(e, t) {
  var n;
  return (typeof t == "number" ? Ht : t instanceof Ln ? Qo : (n = Ln(t)) ? (t = n, Qo) : Pf)(e, t);
}
function Vg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Hg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Gg(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Wg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), d;
    return l == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), d = l + "", s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l)));
  };
}
function Xg(e, t, n) {
  var r, o, a;
  return function() {
    var s, l = n(this), d;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), d = l + "", s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l)));
  };
}
function Yg(e, t) {
  var n = _a(e), r = n === "transform" ? Pg : If;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Xg : Wg)(n, r, cl(this, "attr." + e, t)) : t == null ? (n.local ? jg : Vg)(n) : (n.local ? Gg : Hg)(n, r, t));
}
function Kg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Jg(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Zg(e, a)), n;
  }
  return o._value = t, o;
}
function Qg(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Kg(e, a)), n;
  }
  return o._value = t, o;
}
function ey(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = _a(e);
  return this.tween(n, (r.local ? Jg : Qg)(r, t));
}
function ty(e, t) {
  return function() {
    ul(this, e).delay = +t.apply(this, arguments);
  };
}
function ny(e, t) {
  return t = +t, function() {
    ul(this, e).delay = t;
  };
}
function ry(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ty : ny)(t, e)) : Dt(this.node(), t).delay;
}
function oy(e, t) {
  return function() {
    Jt(this, e).duration = +t.apply(this, arguments);
  };
}
function ay(e, t) {
  return t = +t, function() {
    Jt(this, e).duration = t;
  };
}
function sy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oy : ay)(t, e)) : Dt(this.node(), t).duration;
}
function iy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Jt(this, e).ease = t;
  };
}
function ly(e) {
  var t = this._id;
  return arguments.length ? this.each(iy(t, e)) : Dt(this.node(), t).ease;
}
function uy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Jt(this, e).ease = n;
  };
}
function cy(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(uy(this._id, e));
}
function dy(e) {
  typeof e != "function" && (e = pf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new cn(r, this._parents, this._name, this._id);
}
function fy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), s = new Array(r), l = 0; l < a; ++l)
    for (var d = t[l], u = n[l], c = d.length, f = s[l] = new Array(c), v, b = 0; b < c; ++b)
      (v = d[b] || u[b]) && (f[b] = v);
  for (; l < r; ++l)
    s[l] = t[l];
  return new cn(s, this._parents, this._name, this._id);
}
function py(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function hy(e, t, n) {
  var r, o, a = py(t) ? ul : Jt;
  return function() {
    var s = a(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function my(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Dt(this.node(), n).on.on(e) : this.each(hy(n, e, t));
}
function vy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function gy() {
  return this.on("end.remove", vy(this._id));
}
function yy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ol(e));
  for (var r = this._groups, o = r.length, a = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], d = l.length, u = a[s] = new Array(d), c, f, v = 0; v < d; ++v)
      (c = l[v]) && (f = e.call(c, c.__data__, v, l)) && ("__data__" in c && (f.__data__ = c.__data__), u[v] = f, Sa(u[v], t, n, v, u, Dt(c, n)));
  return new cn(a, this._parents, t, n);
}
function by(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ff(e));
  for (var r = this._groups, o = r.length, a = [], s = [], l = 0; l < o; ++l)
    for (var d = r[l], u = d.length, c, f = 0; f < u; ++f)
      if (c = d[f]) {
        for (var v = e.call(c, c.__data__, f, d), b, h = Dt(c, n), p = 0, m = v.length; p < m; ++p)
          (b = v[p]) && Sa(b, t, n, p, v, h);
        a.push(v), s.push(c);
      }
  return new cn(a, s, t, n);
}
var xy = ro.prototype.constructor;
function wy() {
  return new xy(this._groups, this._parents);
}
function _y(e, t) {
  var n, r, o;
  return function() {
    var a = sr(this, e), s = (this.style.removeProperty(e), sr(this, e));
    return a === s ? null : a === n && s === r ? o : o = t(n = a, r = s);
  };
}
function Mf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ky(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = sr(this, e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Sy(e, t, n) {
  var r, o, a;
  return function() {
    var s = sr(this, e), l = n(this), d = l + "";
    return l == null && (d = l = (this.style.removeProperty(e), sr(this, e))), s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l));
  };
}
function Ey(e, t) {
  var n, r, o, a = "style." + t, s = "end." + a, l;
  return function() {
    var d = Jt(this, e), u = d.on, c = d.value[a] == null ? l || (l = Mf(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), d.on = r;
  };
}
function zy(e, t, n) {
  var r = (e += "") == "transform" ? $g : If;
  return t == null ? this.styleTween(e, _y(e, r)).on("end.style." + e, Mf(e)) : typeof t == "function" ? this.styleTween(e, Sy(e, r, cl(this, "style." + e, t))).each(Ey(this._id, e)) : this.styleTween(e, ky(e, r, t), n).on("end.style." + e, null);
}
function $y(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Py(e, t, n) {
  var r, o;
  function a() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && $y(e, s, n)), r;
  }
  return a._value = t, a;
}
function Cy(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Py(e, t, n ?? ""));
}
function Ay(e) {
  return function() {
    this.textContent = e;
  };
}
function Ty(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Oy(e) {
  return this.tween("text", typeof e == "function" ? Ty(cl(this, "text", e)) : Ay(e == null ? "" : e + ""));
}
function Ny(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ry(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ny(o)), t;
  }
  return r._value = e, r;
}
function Iy(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Ry(e));
}
function My() {
  for (var e = this._name, t = this._id, n = Df(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      if (d = s[u]) {
        var c = Dt(d, t);
        Sa(d, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new cn(r, this._parents, e, n);
}
function Dy() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, s) {
    var l = { value: s }, d = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = Jt(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(d)), u.on = t;
    }), o === 0 && a();
  });
}
var Fy = 0;
function cn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Df() {
  return ++Fy;
}
var Qt = ro.prototype;
cn.prototype = {
  constructor: cn,
  select: yy,
  selectAll: by,
  selectChild: Qt.selectChild,
  selectChildren: Qt.selectChildren,
  filter: dy,
  merge: fy,
  selection: wy,
  transition: My,
  call: Qt.call,
  nodes: Qt.nodes,
  node: Qt.node,
  size: Qt.size,
  empty: Qt.empty,
  each: Qt.each,
  on: my,
  attr: Yg,
  attrTween: ey,
  style: zy,
  styleTween: Cy,
  text: Oy,
  textTween: Iy,
  remove: gy,
  tween: qg,
  delay: ry,
  duration: sy,
  ease: ly,
  easeVarying: cy,
  end: Dy,
  [Symbol.iterator]: Qt[Symbol.iterator]
};
function By(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ly = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: By
};
function Uy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function qy(e) {
  var t, n;
  e instanceof cn ? (t = e._id, e = e._name) : (t = Df(), (n = Ly).time = ll(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && Sa(d, e, t, u, s, n || Uy(d, t));
  return new cn(r, this._parents, e, t);
}
ro.prototype.interrupt = Bg;
ro.prototype.transition = qy;
const wo = (e) => () => e;
function Vy(e, {
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
function an(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
an.prototype = {
  constructor: an,
  scale: function(e) {
    return e === 1 ? this : new an(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new an(this.k, this.x + this.k * e, this.y + this.k * t);
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
var lr = new an(1, 0, 0);
an.prototype;
function as(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function jy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Hy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function yu() {
  return this.__zoom || lr;
}
function Gy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Wy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s)
  );
}
function Yy() {
  var e = jy, t = Hy, n = Xy, r = Gy, o = Wy, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, d = Io, u = wa("start", "zoom", "end"), c, f, v, b = 500, h = 150, p = 0, m = 10;
  function g(E) {
    E.property("__zoom", yu).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", U).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", M).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", V).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  g.transform = function(E, F, P, R) {
    var x = E.selection ? E.selection() : E;
    x.property("__zoom", yu), E !== x ? C(E, F, P, R) : x.interrupt().each(function() {
      $(this, arguments).event(R).start().zoom(null, typeof F == "function" ? F.apply(this, arguments) : F).end();
    });
  }, g.scaleBy = function(E, F, P, R) {
    g.scaleTo(E, function() {
      var x = this.__zoom.k, q = typeof F == "function" ? F.apply(this, arguments) : F;
      return x * q;
    }, P, R);
  }, g.scaleTo = function(E, F, P, R) {
    g.transform(E, function() {
      var x = t.apply(this, arguments), q = this.__zoom, Q = P == null ? k(x) : typeof P == "function" ? P.apply(this, arguments) : P, te = q.invert(Q), fe = typeof F == "function" ? F.apply(this, arguments) : F;
      return n(y(_(q, fe), Q, te), x, s);
    }, P, R);
  }, g.translateBy = function(E, F, P, R) {
    g.transform(E, function() {
      return n(this.__zoom.translate(
        typeof F == "function" ? F.apply(this, arguments) : F,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, R);
  }, g.translateTo = function(E, F, P, R, x) {
    g.transform(E, function() {
      var q = t.apply(this, arguments), Q = this.__zoom, te = R == null ? k(q) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(lr.translate(te[0], te[1]).scale(Q.k).translate(
        typeof F == "function" ? -F.apply(this, arguments) : -F,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), q, s);
    }, R, x);
  };
  function _(E, F) {
    return F = Math.max(a[0], Math.min(a[1], F)), F === E.k ? E : new an(F, E.x, E.y);
  }
  function y(E, F, P) {
    var R = F[0] - P[0] * E.k, x = F[1] - P[1] * E.k;
    return R === E.x && x === E.y ? E : new an(E.k, R, x);
  }
  function k(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function C(E, F, P, R) {
    E.on("start.zoom", function() {
      $(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var x = this, q = arguments, Q = $(x, q).event(R), te = t.apply(x, q), fe = P == null ? k(te) : typeof P == "function" ? P.apply(x, q) : P, be = Math.max(te[1][0] - te[0][0], te[1][1] - te[0][1]), _e = x.__zoom, ne = typeof F == "function" ? F.apply(x, q) : F, ae = d(_e.invert(fe).concat(be / _e.k), ne.invert(fe).concat(be / ne.k));
      return function(me) {
        if (me === 1)
          me = ne;
        else {
          var Pe = ae(me), Se = be / Pe[2];
          me = new an(Se, fe[0] - Pe[0] * Se, fe[1] - Pe[1] * Se);
        }
        Q.zoom(null, me);
      };
    });
  }
  function $(E, F, P) {
    return !P && E.__zooming || new w(E, F);
  }
  function w(E, F) {
    this.that = E, this.args = F, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, F), this.taps = 0;
  }
  w.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, F) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = F.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = F.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = F.invert(this.touch1[0])), this.that.__zoom = F, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var F = Nt(this.that).datum();
      u.call(
        E,
        this.that,
        new Vy(E, {
          sourceEvent: this.sourceEvent,
          target: g,
          transform: this.that.__zoom,
          dispatch: u
        }),
        F
      );
    }
  };
  function S(E, ...F) {
    if (!e.apply(this, arguments))
      return;
    var P = $(this, F).event(E), R = this.__zoom, x = Math.max(a[0], Math.min(a[1], R.k * Math.pow(2, r.apply(this, arguments)))), q = jt(E);
    if (P.wheel)
      (P.mouse[0][0] !== q[0] || P.mouse[0][1] !== q[1]) && (P.mouse[1] = R.invert(P.mouse[0] = q)), clearTimeout(P.wheel);
    else {
      if (R.k === x)
        return;
      P.mouse = [q, R.invert(q)], Fo(this), P.start();
    }
    kr(E), P.wheel = setTimeout(Q, h), P.zoom("mouse", n(y(_(R, x), P.mouse[0], P.mouse[1]), P.extent, s));
    function Q() {
      P.wheel = null, P.end();
    }
  }
  function U(E, ...F) {
    if (v || !e.apply(this, arguments))
      return;
    var P = E.currentTarget, R = $(this, F, !0).event(E), x = Nt(E.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", be, !0), q = jt(E, P), Q = E.clientX, te = E.clientY;
    kf(E.view), as(E), R.mouse = [q, this.__zoom.invert(q)], Fo(this), R.start();
    function fe(_e) {
      if (kr(_e), !R.moved) {
        var ne = _e.clientX - Q, ae = _e.clientY - te;
        R.moved = ne * ne + ae * ae > p;
      }
      R.event(_e).zoom("mouse", n(y(R.that.__zoom, R.mouse[0] = jt(_e, P), R.mouse[1]), R.extent, s));
    }
    function be(_e) {
      x.on("mousemove.zoom mouseup.zoom", null), Sf(_e.view, R.moved), kr(_e), R.event(_e).end();
    }
  }
  function D(E, ...F) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, R = jt(E.changedTouches ? E.changedTouches[0] : E, this), x = P.invert(R), q = P.k * (E.shiftKey ? 0.5 : 2), Q = n(y(_(P, q), R, x), t.apply(this, F), s);
      kr(E), l > 0 ? Nt(this).transition().duration(l).call(C, Q, R, E) : Nt(this).call(g.transform, Q, R, E);
    }
  }
  function M(E, ...F) {
    if (e.apply(this, arguments)) {
      var P = E.touches, R = P.length, x = $(this, F, E.changedTouches.length === R).event(E), q, Q, te, fe;
      for (as(E), Q = 0; Q < R; ++Q)
        te = P[Q], fe = jt(te, this), fe = [fe, this.__zoom.invert(fe), te.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== fe[2] && (x.touch1 = fe, x.taps = 0) : (x.touch0 = fe, q = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), q && (x.taps < 2 && (f = fe[0], c = setTimeout(function() {
        c = null;
      }, b)), Fo(this), x.start());
    }
  }
  function A(E, ...F) {
    if (this.__zooming) {
      var P = $(this, F).event(E), R = E.changedTouches, x = R.length, q, Q, te, fe;
      for (kr(E), q = 0; q < x; ++q)
        Q = R[q], te = jt(Q, this), P.touch0 && P.touch0[2] === Q.identifier ? P.touch0[0] = te : P.touch1 && P.touch1[2] === Q.identifier && (P.touch1[0] = te);
      if (Q = P.that.__zoom, P.touch1) {
        var be = P.touch0[0], _e = P.touch0[1], ne = P.touch1[0], ae = P.touch1[1], me = (me = ne[0] - be[0]) * me + (me = ne[1] - be[1]) * me, Pe = (Pe = ae[0] - _e[0]) * Pe + (Pe = ae[1] - _e[1]) * Pe;
        Q = _(Q, Math.sqrt(me / Pe)), te = [(be[0] + ne[0]) / 2, (be[1] + ne[1]) / 2], fe = [(_e[0] + ae[0]) / 2, (_e[1] + ae[1]) / 2];
      } else if (P.touch0)
        te = P.touch0[0], fe = P.touch0[1];
      else
        return;
      P.zoom("touch", n(y(Q, te, fe), P.extent, s));
    }
  }
  function V(E, ...F) {
    if (this.__zooming) {
      var P = $(this, F).event(E), R = E.changedTouches, x = R.length, q, Q;
      for (as(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, b), q = 0; q < x; ++q)
        Q = R[q], P.touch0 && P.touch0[2] === Q.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === Q.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0)
        P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (Q = jt(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < m)) {
        var te = Nt(this).on("dblclick.zoom");
        te && te.apply(this, arguments);
      }
    }
  }
  return g.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : wo(+E), g) : r;
  }, g.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : wo(!!E), g) : e;
  }, g.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : wo(!!E), g) : o;
  }, g.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : wo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), g) : t;
  }, g.scaleExtent = function(E) {
    return arguments.length ? (a[0] = +E[0], a[1] = +E[1], g) : [a[0], a[1]];
  }, g.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], g) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, g.constrain = function(E) {
    return arguments.length ? (n = E, g) : n;
  }, g.duration = function(E) {
    return arguments.length ? (l = +E, g) : l;
  }, g.interpolate = function(E) {
    return arguments.length ? (d = E, g) : d;
  }, g.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? g : E;
  }, g.clickDistance = function(E) {
    return arguments.length ? (p = (E = +E) * E, g) : Math.sqrt(p);
  }, g.tapDistance = function(E) {
    return arguments.length ? (m = +E, g) : m;
  }, g;
}
var ue = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(ue || {}), dl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(dl || {}), An = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(An || {}), _n = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(_n || {}), ra = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(ra || {}), Ir = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Ir || {}), Ff = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Ff || {});
const Ky = ["INPUT", "SELECT", "TEXTAREA"], Zy = typeof document < "u" ? document : null;
function Oi(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Ky.includes(r?.nodeName) || o || !!a;
}
function Jy(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function bu(e, t, n, r) {
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
function Qy(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = eb(n.code, e);
    return Array.isArray(e) ? e.some((o) => bu(n[r], o, t, n.type === "keyup")) : bu(n[r], e, t, n.type === "keyup");
  };
}
function eb(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Mr(e, t) {
  const n = J(() => Me(t?.target) ?? Zy), r = on(Me(e) === !0);
  let o = !1;
  const a = /* @__PURE__ */ new Set();
  let s = d(Me(e));
  Ie(
    () => Me(e),
    (u, c) => {
      typeof c == "boolean" && typeof u != "boolean" && l(), s = d(u);
    },
    {
      immediate: !0
    }
  ), cf(["blur", "contextmenu"], l), tu(
    (...u) => s(...u),
    (u) => {
      var c, f;
      const v = Me(t?.actInsideInputWithModifier) ?? !0, b = Me(t?.preventDefault) ?? !1;
      if (o = Jy(u), (!o || o && !v) && Oi(u))
        return;
      const p = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target, m = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !b && (o || !m) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), tu(
    (...u) => s(...u),
    (u) => {
      const c = Me(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !c) && Oi(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function l() {
    o = !1, a.clear(), r.value = Me(e) === !0;
  }
  function d(u) {
    return u === null ? (l(), () => !1) : typeof u == "boolean" ? (l(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? Qy(u, a) : u;
  }
  return r;
}
const Bf = "vue-flow__node-desc", Lf = "vue-flow__edge-desc", tb = "vue-flow__aria-live", Uf = ["Enter", " ", "Escape"], or = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function oa(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function aa(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function Ea(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function qn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function qf(e, t) {
  return {
    x: qn(e.x, t[0][0], t[1][0]),
    y: qn(e.y, t[0][1], t[1][1])
  };
}
function xu(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function kn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function In(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !kn(e);
}
function Tr(e) {
  return In(e) && "computedPosition" in e;
}
function _o(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function nb(e) {
  return _o(e.width) && _o(e.height) && _o(e.x) && _o(e.y);
}
function rb(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: tr({
      width: 0,
      height: 0
    }),
    computedPosition: tr({
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
    events: tr(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function Vf(e, t, n) {
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
    events: tr(et(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? a, e, { id: e.id.toString() });
}
function jf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, a = /* @__PURE__ */ new Set(), s = r === "source" ? "target" : "source";
  for (const l of n)
    l[s] === o && a.add(l[r]);
  return t.filter((l) => a.has(l.id));
}
function ob(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return jf(a, s, l, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => kn(a) && a.source === r).map((a) => n.find((s) => In(s) && s.id === a.target));
}
function ab(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return jf(a, s, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => kn(a) && a.target === r).map((a) => n.find((s) => In(s) && s.id === a.source));
}
function Hf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function sb(e, t) {
  return t.some(
    (n) => kn(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Yr({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function Kr({ x: e, y: t }, { x: n, y: r, zoom: o }, a = !1, s = [1, 1]) {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? za(l, s) : l;
}
function ib(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Gf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function lb({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function Wf(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = ib(
      t,
      Gf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return lb(t);
}
function Xf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const a = {
    ...Kr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const l of e) {
    const { dimensions: d, selectable: u = !0, hidden: c = !1 } = l, f = d.width ?? l.width ?? null, v = d.height ?? l.height ?? null;
    if (o && !u || c)
      continue;
    const b = aa(a, oa(l)), h = f === null || v === null, p = r && b > 0, m = (f ?? 0) * (v ?? 0);
    (h || p || b >= m || l.dragging) && s.push(l);
  }
  return s;
}
function Yf(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const r of e)
      n.add(r.id);
  return t.filter((r) => n.has(r.source) || n.has(r.target));
}
function Zn(e, t) {
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
  return ao(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function ub(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Zn(e, n), o = Zn(e, t);
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
    const r = Zn(e.top ?? e.y ?? 0, n), o = Zn(e.bottom ?? e.y ?? 0, n), a = Zn(e.left ?? e.x ?? 0, t), s = Zn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: a, x: a + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function cb(e, t, n, r, o, a) {
  const { x: s, y: l } = Yr(e, { x: t, y: n, zoom: r }), { x: d, y: u } = Yr(
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
function wu(e, t, n, r, o, a = 0.1) {
  const s = ub(a, t, n), l = (t - s.x) / e.width, d = (n - s.y) / e.height, u = Math.min(l, d), c = qn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, b = t / 2 - f * c, h = n / 2 - v * c, p = cb(e, b, h, c, t, n), m = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: b - m.left + m.right,
    y: h - m.top + m.bottom,
    zoom: c
  };
}
function db(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Kf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Kf(n, t) : !1;
}
function Zr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function _u(e) {
  const t = e.ctrlKey && sa() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function ku(e, t, n) {
  return e < t ? qn(Math.abs(e - t), 1, t) / t : e > n ? -qn(Math.abs(e - n), 1, t) / t : 0;
}
function Zf(e, t, n = 15, r = 40) {
  const o = ku(e.x, r, t.width - r) * n, a = ku(e.y, r, t.height - r) * n;
  return [o, a];
}
function ss(e, t) {
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
function Su(e, t) {
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
            if (Tr(s) && (typeof l.position < "u" && (s.position = l.position), typeof l.dragging < "u" && (s.dragging = l.dragging), s.expandParent && s.parentNode)) {
              const d = t[a.indexOf(s.parentNode)];
              d && Tr(d) && ss(s, d);
            }
            break;
          case "dimensions":
            if (Tr(s) && (typeof l.dimensions < "u" && (s.dimensions = l.dimensions), typeof l.updateStyle < "u" && l.updateStyle && (s.style = {
              ...s.style || {},
              width: `${(n = l.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = l.dimensions) == null ? void 0 : r.height}px`
            }), typeof l.resizing < "u" && (s.resizing = l.resizing), s.expandParent && s.parentNode)) {
              const d = t[a.indexOf(s.parentNode)];
              d && Tr(d) && (!!d.dimensions.width && !!d.dimensions.height ? ss(s, d) : ln(() => {
                ss(s, d);
              }));
            }
            break;
        }
  return t;
}
function gn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Eu(e) {
  return {
    item: e,
    type: "add"
  };
}
function zu(e) {
  return {
    id: e,
    type: "remove"
  };
}
function $u(e, t, n, r, o) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: r || null,
    targetHandle: o || null,
    type: "remove"
  };
}
function yn(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, a] of e) {
    const s = t.has(o);
    !(a.selected === void 0 && !s) && a.selected !== s && (n && (a.selected = s), r.push(gn(a.id, s)));
  }
  return r;
}
const Pu = () => {
};
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Pu, r = () => !1;
  const o = () => t.size > 0 || r(), a = (v) => {
    n = v;
  }, s = () => {
    n = Pu;
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
      const b = () => u(v);
      return jr(b), { off: b };
    },
    off: u,
    trigger: (v) => {
      const b = [n];
      return o() ? b.push(...t) : e && b.push(e), Promise.allSettled(b.map((h) => h(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: a,
    removeEmitter: s,
    setHasEmitListeners: l,
    removeHasEmitListeners: d
  };
}
function Cu(e, t, n) {
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
function fb(e, t, n, r) {
  var o, a;
  const s = /* @__PURE__ */ new Map();
  for (const [l, d] of e)
    (d.selected || d.id === r) && (!d.parentNode || !Kf(d, e)) && (d.draggable || t && typeof d.draggable > "u") && e.get(l) && s.set(l, {
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
function is({
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
function Jf(e) {
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
function pb(e, t, n) {
  const [r, o, a, s] = typeof e != "string" ? Jf(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + s, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - a
    ]
  ] : !1;
}
function hb(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const a = pb(o, e, r);
      a && (o = a);
    } else
      t(new ot(tt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const a = r?.computedPosition.x || 0, s = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + a, o[0][1] + s],
      [o[1][0] + a, o[1][1] + s]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [a, s, l, d] = Jf(o.padding), u = r?.computedPosition.x || 0, c = r?.computedPosition.y || 0;
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
function mb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function fl(e, t, n, r, o) {
  const a = mb(e.dimensions, hb(e, n, r, o)), s = qf(t, a);
  return {
    position: {
      x: s.x - (o?.computedPosition.x || 0),
      y: s.y - (o?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function ur(e, t, n = ue.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, a = (t?.y ?? 0) + e.computedPosition.y, { width: s, height: l } = t ?? bb(e);
  if (r)
    return { x: o + s / 2, y: a + l / 2 };
  switch (t?.position ?? n) {
    case ue.Top:
      return { x: o + s / 2, y: a };
    case ue.Right:
      return { x: o + s, y: a + l / 2 };
    case ue.Bottom:
      return { x: o + s / 2, y: a + l };
    case ue.Left:
      return { x: o, y: a + l / 2 };
  }
}
function Au(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function vb({
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
  const c = Gf({
    x: (0 - d.x) / d.zoom,
    y: (0 - d.y) / d.zoom,
    width: s / d.zoom,
    height: l / d.zoom
  }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), v = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(f * v) > 0;
}
function gb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const a = t(e.source), s = t(e.target);
  return !a || !s ? 0 : (n && (o = r ? e.zIndex : Math.max(a.computedPosition.z || 0, s.computedPosition.z || 0)), o);
}
var tt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(tt || {});
const Tu = {
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
class ot extends Error {
  constructor(t, ...n) {
    var r;
    super((r = Tu[t]) == null ? void 0 : r.call(Tu, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function pl(e) {
  return "clientX" in e;
}
function yb(e) {
  return "sourceEvent" in e;
}
function Gt(e, t) {
  const n = pl(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const sa = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function bb(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function za(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const xb = () => !0;
function ls(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function wb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    aa(o, oa(a)) > 0 && r.push(a);
  return r;
}
const _b = 250;
function kb(e, t, n, r) {
  var o, a;
  let s = [], l = Number.POSITIVE_INFINITY;
  const d = wb(e, n, t + _b);
  for (const u of d) {
    const c = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y: b } = ur(u, f, f.position, !0), h = Math.sqrt((v - e.x) ** 2 + (b - e.y) ** 2);
      h > t || (h < l ? (s = [{ ...f, x: v, y: b }], l = h) : h === l && s.push({ ...f, x: v, y: b }));
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
function Ou(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: a,
  doc: s,
  lib: l,
  flowId: d,
  isValidConnection: u = xb
}, c, f, v, b) {
  const h = a === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${d}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: m, y: g } = Gt(e), _ = s.elementFromPoint(m, g), y = _?.classList.contains(`${l}-flow__handle`) ? _ : p, k = {
    handleDomNode: y,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (y) {
    const C = Qf(void 0, y), $ = y.getAttribute("data-nodeid"), w = y.getAttribute("data-handleid"), S = y.classList.contains("connectable"), U = y.classList.contains("connectableend");
    if (!$ || !C)
      return k;
    const D = {
      source: h ? $ : r,
      sourceHandle: h ? w : o,
      target: h ? r : $,
      targetHandle: h ? o : w
    };
    k.connection = D;
    const A = S && U && (n === _n.Strict ? h && C === "source" || !h && C === "target" : $ !== r || w !== o);
    k.isValid = A && u(D, {
      nodes: f,
      edges: c,
      sourceNode: v(D.source),
      targetNode: v(D.target)
    }), k.toHandle = ep($, C, w, b, n, !0);
  }
  return k;
}
function Qf(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Sb(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function Eb(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function ep(e, t, n, r, o, a = !1) {
  var s, l, d;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === _n.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((d = u.handleBounds) == null ? void 0 : d.target) ?? []], f = (n ? c?.find((v) => v.id === n) : c?.[0]) ?? null;
  return f && a ? { ...f, ...ur(u, f, f.position, !0) } : f;
}
const Ni = {
  [ue.Left]: ue.Right,
  [ue.Right]: ue.Left,
  [ue.Top]: ue.Bottom,
  [ue.Bottom]: ue.Top
}, zb = ["production", "prod"];
function ao(e, ...t) {
  tp() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function tp() {
  return !zb.includes(process.env.NODE_ENV || "");
}
function Nu(e, t, n, r, o) {
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
      ...Ea(s)
    };
  }) : null;
}
function Ri(e, t, n, r, o, a = !1, s) {
  o.value = !1, e.selected ? (a || e.selected && t) && (r([e]), ln(() => {
    s.blur();
  })) : n([e]);
}
function et(e) {
  return typeof N(e) < "u";
}
function $b(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new ot(tt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return kn(e) ? o = e : o = {
    ...e,
    id: Hf(e)
  }, o = Vf(o, void 0, r), sb(o, t) ? !1 : o;
}
function Pb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new ot(tt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new ot(tt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...s } = e;
  return {
    ...s,
    id: r ? Hf(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Ru(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const s = e[a];
    if (!In(s)) {
      n(
        new ot(tt.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = rb(s, t(s.id), s.parentNode);
    s.parentNode && (r[s.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const s = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !s && n(new ot(tt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return o;
}
function Iu(e, t, n, r, o, a) {
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
function us(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: s = null, targetHandle: l = null } = r, d = { edgeId: r.id, source: o, target: a, sourceHandle: s, targetHandle: l }, u = `${o}-${s}--${a}-${l}`, c = `${a}-${l}--${o}-${s}`;
    Iu("source", d, c, e, o, s), Iu("target", d, u, e, a, l);
  }
}
function Mu(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function cs(e, t, n, r, o, a, s, l) {
  const d = [];
  for (const u of e) {
    const c = kn(u) ? u : $b(u, l, o, a);
    if (!c)
      continue;
    const f = n(c.source), v = n(c.target);
    if (!f || !v) {
      o(new ot(tt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new ot(tt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!v) {
      o(new ot(tt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: l,
      nodes: s,
      sourceNode: f,
      targetNode: v
    })) {
      o(new ot(tt.EDGE_INVALID, c.id));
      continue;
    }
    const b = r(c.id);
    d.push({
      ...Vf(c, b, a),
      sourceNode: f,
      targetNode: v
    });
  }
  return d;
}
const Du = /* @__PURE__ */ Symbol("vueFlow"), np = /* @__PURE__ */ Symbol("nodeId"), rp = /* @__PURE__ */ Symbol("nodeRef"), Cb = /* @__PURE__ */ Symbol("edgeId"), Ab = /* @__PURE__ */ Symbol("edgeRef"), $a = /* @__PURE__ */ Symbol("slots");
function op(e) {
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
    findNode: b,
    multiSelectionActive: h,
    nodesSelectionActive: p,
    selectNodesOnDrag: m,
    removeSelectedElements: g,
    addSelectedNodes: _,
    updateNodePositions: y,
    emits: k
  } = Ve(), { onStart: C, onDrag: $, onStop: w, onClick: S, el: U, disabled: D, id: M, selectable: A, dragHandle: V } = e, E = on(!1);
  let F = [], P, R = null, x = { x: void 0, y: void 0 }, q = { x: 0, y: 0 }, Q = null, te = !1, fe = !1, be = 0, _e = !1;
  const ne = Nb(), ae = ({ x: se, y: ge }) => {
    x = { x: se, y: ge };
    let I = !1;
    if (F = F.map((O) => {
      const B = { x: se - O.distance.x, y: ge - O.distance.y }, { computedPosition: H } = fl(
        O,
        n.value ? za(B, r.value) : B,
        k.error,
        s.value,
        O.parentNode ? b(O.parentNode) : void 0
      );
      return I = I || O.position.x !== H.x || O.position.y !== H.y, O.position = H, O;
    }), fe = fe || I, !!I && (y(F, !0, !0), E.value = !0, Q)) {
      const [O, B] = is({
        id: M,
        dragItems: F,
        findNode: b
      });
      $({ event: Q, node: O, nodes: B });
    }
  }, me = () => {
    if (!R)
      return;
    const [se, ge] = Zf(q, R, c.value);
    if (se !== 0 || ge !== 0) {
      const I = {
        x: (x.x ?? 0) - se / d.value.zoom,
        y: (x.y ?? 0) - ge / d.value.zoom
      };
      v({ x: se, y: ge }) && ae(I);
    }
    be = requestAnimationFrame(me);
  }, Pe = (se, ge) => {
    te = !0;
    const I = b(M);
    !m.value && !h.value && I && (I.selected || g()), I && Me(A) && m.value && Ri(
      I,
      h.value,
      _,
      g,
      p,
      !1,
      ge
    );
    const O = ne(se.sourceEvent);
    if (x = O, F = fb(a.value, f.value, O, M), F.length) {
      const [B, H] = is({
        id: M,
        dragItems: F,
        findNode: b
      });
      C({ event: se.sourceEvent, node: B, nodes: H });
    }
  }, Se = (se, ge) => {
    var I;
    se.sourceEvent.type === "touchmove" && se.sourceEvent.touches.length > 1 || (fe = !1, l.value === 0 && Pe(se, ge), x = ne(se.sourceEvent), R = ((I = t.value) == null ? void 0 : I.getBoundingClientRect()) || null, q = Gt(se.sourceEvent, R));
  }, le = (se, ge) => {
    const I = ne(se.sourceEvent);
    if (!_e && te && u.value && (_e = !0, me()), !te) {
      const O = I.xSnapped - (x.x ?? 0), B = I.ySnapped - (x.y ?? 0);
      Math.sqrt(O * O + B * B) > l.value && Pe(se, ge);
    }
    (x.x !== I.xSnapped || x.y !== I.ySnapped) && F.length && te && (Q = se.sourceEvent, q = Gt(se.sourceEvent, R), ae(I));
  }, we = (se) => {
    let ge = !1;
    if (!te && !E.value && !h.value) {
      const I = se.sourceEvent, O = ne(I), B = O.xSnapped - (x.x ?? 0), H = O.ySnapped - (x.y ?? 0), j = Math.sqrt(B * B + H * H);
      j !== 0 && j <= l.value && (S?.(I), ge = !0);
    }
    if (F.length && !ge) {
      fe && (y(F, !1, !1), fe = !1);
      const [I, O] = is({
        id: M,
        dragItems: F,
        findNode: b
      });
      w({ event: se.sourceEvent, node: I, nodes: O });
    }
    F = [], E.value = !1, _e = !1, te = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(be);
  };
  return Ie([() => Me(D), U], ([se, ge], I, O) => {
    if (ge) {
      const B = Nt(ge);
      se || (P = ng().on("start", (H) => Se(H, ge)).on("drag", (H) => le(H, ge)).on("end", (H) => we(H)).filter((H) => {
        const j = H.target, re = Me(V);
        return !H.button && (!o.value || !Cu(j, `.${o.value}`, ge) && (!re || Cu(j, re, ge)));
      }), B.call(P)), O(() => {
        B.on(".drag", null), P && (P.on("start", null), P.on("drag", null), P.on("end", null));
      });
    }
  }), E;
}
function Tb() {
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
function Ob(e, t) {
  const n = Tb();
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
function Nb() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = Ve();
  return (o) => {
    var a;
    const s = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = yb(o) ? o.sourceEvent : o, { x: d, y: u } = Gt(l, s), c = Kr({ x: d, y: u }, e.value), { x: f, y: v } = n.value ? za(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: v,
      ...c
    };
  };
}
function ko() {
  return !0;
}
function ap({
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
    nodesConnectable: b,
    autoPanOnConnect: h,
    autoPanSpeed: p,
    findNode: m,
    panBy: g,
    startConnection: _,
    updateConnection: y,
    endConnection: k,
    emits: C,
    viewport: $,
    edges: w,
    nodes: S,
    isValidConnection: U,
    nodeLookup: D
  } = Ve();
  let M = null, A = !1, V = null;
  function E(P) {
    var R;
    const x = Me(n) === "target", q = pl(P), Q = xu(P.target), te = P.currentTarget;
    if (te && (q && P.button === 0 || !q)) {
      let fe = function(pe) {
        I = Gt(pe, we), ae = kb(
          Kr(I, $.value, !1, [1, 1]),
          c.value,
          D.value,
          H
        ), O || (B(), O = !0);
        const xe = Ou(
          pe,
          {
            handle: ae,
            connectionMode: u.value,
            fromNodeId: Me(t),
            fromHandleId: Me(e),
            fromType: x ? "target" : "source",
            isValidConnection: ne,
            doc: Q,
            lib: "vue",
            flowId: l,
            nodeLookup: D.value
          },
          w.value,
          S.value,
          m,
          D.value
        );
        V = xe.handleDomNode, M = xe.connection, A = Eb(!!ae, xe.isValid);
        const Ee = {
          // from stays the same
          ...de,
          isValid: A,
          to: xe.toHandle && A ? Yr({ x: xe.toHandle.x, y: xe.toHandle.y }, $.value) : I,
          toHandle: xe.toHandle,
          toPosition: A && xe.toHandle ? xe.toHandle.position : Ni[H.position],
          toNode: xe.toHandle ? D.value.get(xe.toHandle.nodeId) : null
        };
        if (A && ae && de?.toHandle && Ee.toHandle && de.toHandle.type === Ee.toHandle.type && de.toHandle.nodeId === Ee.toHandle.nodeId && de.toHandle.id === Ee.toHandle.id && de.to.x === Ee.to.x && de.to.y === Ee.to.y)
          return;
        const Be = ae ?? xe.toHandle;
        if (y(
          Be && A ? Yr(
            {
              x: Be.x,
              y: Be.y
            },
            $.value
          ) : I,
          Be,
          Sb(!!Be, A)
        ), de = Ee, !ae && !A && !V)
          return ls(ge);
        M && M.source !== M.target && V && (ls(ge), ge = V, V.classList.add("connecting", "vue-flow__handle-connecting"), V.classList.toggle("valid", !!A), V.classList.toggle("vue-flow__handle-valid", !!A));
      }, be = function(pe) {
        "touches" in pe && pe.touches.length > 0 || ((ae || V) && M && A && (a ? a(pe, M) : C.connect(M)), C.connectEnd(pe), o && s?.(pe), ls(ge), cancelAnimationFrame(me), k(pe), O = !1, A = !1, M = null, V = null, Q.removeEventListener("mousemove", fe), Q.removeEventListener("mouseup", be), Q.removeEventListener("touchmove", fe), Q.removeEventListener("touchend", be));
      };
      const _e = m(Me(t));
      let ne = Me(r) || U.value || ko;
      !ne && _e && (ne = (x ? _e.isValidSourcePos : _e.isValidTargetPos) || ko);
      let ae, me = 0;
      const { x: Pe, y: Se } = Gt(P), le = Qf(Me(o), te), we = (R = d.value) == null ? void 0 : R.getBoundingClientRect();
      if (!we || !le)
        return;
      const se = ep(Me(t), le, Me(e), D.value, u.value);
      if (!se)
        return;
      let ge, I = Gt(P, we), O = !1;
      const B = () => {
        if (!h.value)
          return;
        const [pe, xe] = Zf(I, we, p.value);
        g({ x: pe, y: xe }), me = requestAnimationFrame(B);
      }, H = {
        ...se,
        nodeId: Me(t),
        type: le,
        position: se.position
      }, j = D.value.get(Me(t)), oe = {
        inProgress: !0,
        isValid: null,
        from: ur(j, H, ue.Left, !0),
        fromHandle: H,
        fromPosition: H.position,
        fromNode: j,
        to: I,
        toHandle: null,
        toPosition: Ni[H.position],
        toNode: null
      };
      _(
        {
          nodeId: Me(t),
          id: Me(e),
          type: le,
          position: te?.getAttribute("data-handlepos") || ue.Top,
          ...I
        },
        {
          x: Pe - we.left,
          y: Se - we.top
        }
      ), C.connectStart({ event: P, nodeId: Me(t), handleId: Me(e), handleType: le });
      let de = oe;
      Q.addEventListener("mousemove", fe), Q.addEventListener("mouseup", be), Q.addEventListener("touchmove", fe), Q.addEventListener("touchend", be);
    }
  }
  function F(P) {
    var R, x;
    if (!f.value)
      return;
    const q = Me(n) === "target";
    if (!v.value) {
      C.clickConnectStart({ event: P, nodeId: Me(t), handleId: Me(e) }), _(
        {
          nodeId: Me(t),
          type: Me(n),
          id: Me(e),
          position: ue.Top,
          ...Gt(P)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Me(r) || U.value || ko;
    const te = m(Me(t));
    if (!Q && te && (Q = (q ? te.isValidSourcePos : te.isValidTargetPos) || ko), te && (typeof te.connectable > "u" ? b.value : te.connectable) === !1)
      return;
    const fe = xu(P.target), be = Ou(
      P,
      {
        handle: {
          nodeId: Me(t),
          id: Me(e),
          type: Me(n),
          position: ue.Top,
          ...Gt(P)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: fe,
        lib: "vue",
        flowId: l,
        nodeLookup: D.value
      },
      w.value,
      S.value,
      m,
      D.value
    ), _e = ((R = be.connection) == null ? void 0 : R.source) === ((x = be.connection) == null ? void 0 : x.target);
    be.isValid && be.connection && !_e && C.connect(be.connection), C.clickConnectEnd(P), k(P, !0);
  }
  return {
    handlePointerDown: E,
    handleClick: F
  };
}
function Rb() {
  return mr(np, "");
}
function sp(e) {
  const t = e ?? Rb() ?? "", n = mr(rp, W(null)), { findNode: r, edges: o, emits: a } = Ve(), s = r(t);
  return s || a.error(new ot(tt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: s,
    parentNode: J(() => r(s.parentNode)),
    connectedEdges: J(() => Yf([s], o.value))
  };
}
function Ib() {
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
function Mb(e, t) {
  const n = Ib();
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
function ip() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: s, emits: l } = Ve();
  return (d, u = !1) => {
    const c = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, v = u ? 4 : 1, b = d.x * c * v, h = d.y * f * v, p = [];
    for (const m of e.value)
      if (m.draggable || s && typeof m.draggable > "u") {
        const g = { x: m.computedPosition.x + b, y: m.computedPosition.y + h }, { position: _ } = fl(
          m,
          g,
          l.error,
          t.value,
          m.parentNode ? r(m.parentNode) : void 0
        );
        p.push({
          id: m.id,
          position: _,
          from: m.position,
          distance: { x: d.x, y: d.y },
          dimensions: m.dimensions
        });
      }
    n(p, !0, !1);
  };
}
const So = 0.1, Db = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function mn() {
  return ao("Viewport not initialized yet."), Promise.resolve(!1);
}
const Fb = {
  zoomIn: mn,
  zoomOut: mn,
  zoomTo: mn,
  fitView: mn,
  setCenter: mn,
  fitBounds: mn,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: mn,
  setTransform: mn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function Bb(e) {
  function t(r, o) {
    return new Promise((a) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Rr : Io).scaleBy(
        ds(e.d3Selection, o?.duration, o?.ease, () => {
          a(!0);
        }),
        r
      ) : a(!1);
    });
  }
  function n(r, o, a, s) {
    return new Promise((l) => {
      var d;
      const { x: u, y: c } = qf({ x: -r, y: -o }, e.translateExtent), f = lr.translate(-u, -c).scale(a);
      e.d3Selection && e.d3Zoom ? (d = e.d3Zoom) == null || d.interpolate(s?.interpolate === "linear" ? Rr : Io).transform(
        ds(e.d3Selection, s?.duration, s?.ease, () => {
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
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(a?.interpolate === "linear" ? Rr : Io).scaleTo(
        ds(e.d3Selection, a?.duration, a?.ease, () => {
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
      padding: So,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var a, s;
      const l = [];
      for (const v of e.nodes)
        v.dimensions.width && v.dimensions.height && (o?.includeHiddenNodes || !v.hidden) && (!((a = o.nodes) != null && a.length) || (s = o.nodes) != null && s.length && o.nodes.includes(v.id)) && l.push(v);
      if (!l.length)
        return Promise.resolve(!1);
      const d = Wf(l), { x: u, y: c, zoom: f } = wu(
        d,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? So
      );
      return n(u, c, f, o);
    },
    setCenter: (o, a, s) => {
      const l = typeof s?.zoom < "u" ? s.zoom : e.maxZoom, d = e.dimensions.width / 2 - o * l, u = e.dimensions.height / 2 - a * l;
      return n(d, u, l, s);
    },
    fitBounds: (o, a = { padding: So }) => {
      const { x: s, y: l, zoom: d } = wu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        a.padding ?? So
      );
      return n(s, l, d, a);
    },
    project: (o) => Kr(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x - a,
          y: o.y - s
        };
        return Kr(l, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x + a,
          y: o.y + s
        };
        return Yr(l, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Fb);
}
function ds(e, t = 0, n = Db, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Lb(e, t, n) {
  const r = Hd(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, m, g = !!(n.nodes.value.length || n.edges.value.length);
        p = Kn([e.modelValue, () => {
          var _, y;
          return (y = (_ = e.modelValue) == null ? void 0 : _.value) == null ? void 0 : y.length;
        }], ([_]) => {
          _ && Array.isArray(_) && (m?.pause(), n.setElements(_), !m && !g && _.length ? g = !0 : m?.resume());
        }), m = Kn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([_, y]) => {
            var k;
            (k = e.modelValue) != null && k.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [..._, ...y], ln(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), No(() => {
          p?.stop(), m?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let p, m, g = !!n.nodes.value.length;
        p = Kn([e.nodes, () => {
          var _, y;
          return (y = (_ = e.nodes) == null ? void 0 : _.value) == null ? void 0 : y.length;
        }], ([_]) => {
          _ && Array.isArray(_) && (m?.pause(), n.setNodes(_), !m && !g && _.length ? g = !0 : m?.resume());
        }), m = Kn(
          [n.nodes, () => n.nodes.value.length],
          ([_]) => {
            var y;
            (y = e.nodes) != null && y.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [..._], ln(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), No(() => {
          p?.stop(), m?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        let p, m, g = !!n.edges.value.length;
        p = Kn([e.edges, () => {
          var _, y;
          return (y = (_ = e.edges) == null ? void 0 : _.value) == null ? void 0 : y.length;
        }], ([_]) => {
          _ && Array.isArray(_) && (m?.pause(), n.setEdges(_), !m && !g && _.length ? g = !0 : m?.resume());
        }), m = Kn(
          [n.edges, () => n.edges.value.length],
          ([_]) => {
            var y;
            (y = e.edges) != null && y.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [..._], ln(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), No(() => {
          p?.stop(), m?.stop();
        });
      });
    }, l = () => {
      r.run(() => {
        Ie(
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
        Ie(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      r.run(() => {
        Ie(
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
        Ie(
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
        Ie(
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
        const p = async (m) => {
          let g = m;
          typeof t.autoConnect == "function" && (g = await t.autoConnect(m)), g !== !1 && n.addEdges([g]);
        };
        Ie(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Ie(
          n.autoConnect,
          (m, g, _) => {
            m ? n.onConnect(p) : n.hooks.value.connect.off(p), _(() => {
              n.hooks.value.connect.off(p);
            });
          },
          { immediate: !0 }
        );
      });
    }, b = () => {
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
      for (const m of Object.keys(t)) {
        const g = m;
        if (!p.includes(g)) {
          const _ = qe(() => t[g]), y = n[g];
          nl(y) && r.run(() => {
            Ie(
              _,
              (k) => {
                et(k) && (y.value = k);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), a(), s(), d(), l(), u(), c(), f(), v(), b();
  }), () => r.stop();
}
function Ub() {
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
    error: ce((e) => ao(e.message))
  };
}
function qb(e, t) {
  const n = vr();
  ch(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const s = (l) => {
        e(o, l);
      };
      a.setEmitter(s), jr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), jr(a.removeHasEmitListeners);
    }
  });
  function r(o) {
    var a;
    const s = Vb(o);
    return !!((a = n?.vnode.props) == null ? void 0 : a[s]);
  }
}
function Vb(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, a) => a.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function lp() {
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
    selectionMode: dl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Ir.Free,
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
      type: An.Bezier,
      style: {}
    },
    connectionMode: _n.Loose,
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
    multiSelectionKeyCode: sa() ? "Meta" : "Control",
    zoomActivationKeyCode: sa() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: Ub(),
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
const jb = [
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
function Hb(e, t, n) {
  const r = Bb(e), o = (I) => {
    const O = I ?? [];
    e.hooks.updateNodeInternals.trigger(O);
  }, a = (I) => ab(I, e.nodes, e.edges), s = (I) => ob(I, e.nodes, e.edges), l = (I) => Yf(I, e.edges), d = ({ id: I, type: O, nodeId: B }) => {
    var H;
    const j = I ? `-${O}-${I}` : `-${O}`;
    return Array.from(((H = e.connectionLookup.get(`${B}${j}`)) == null ? void 0 : H.values()) ?? []);
  }, u = (I) => {
    if (I)
      return t.value.get(I);
  }, c = (I) => {
    if (I)
      return n.value.get(I);
  }, f = (I, O, B) => {
    var H, j;
    const re = [];
    for (const oe of I) {
      const de = {
        id: oe.id,
        type: "position",
        dragging: B,
        from: oe.from
      };
      if (O && (de.position = oe.position, oe.parentNode)) {
        const pe = u(oe.parentNode);
        de.position = {
          x: de.position.x - (((H = pe?.computedPosition) == null ? void 0 : H.x) ?? 0),
          y: de.position.y - (((j = pe?.computedPosition) == null ? void 0 : j.y) ?? 0)
        };
      }
      re.push(de);
    }
    re?.length && e.hooks.nodesChange.trigger(re);
  }, v = (I) => {
    if (!e.vueFlowRef)
      return;
    const O = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!O)
      return;
    const B = window.getComputedStyle(O), { m22: H } = new window.DOMMatrixReadOnly(B.transform), j = [];
    for (const re of I) {
      const oe = re, de = u(oe.id);
      if (de) {
        const pe = Ea(oe.nodeElement);
        if (!!(pe.width && pe.height && (de.dimensions.width !== pe.width || de.dimensions.height !== pe.height || oe.forceUpdate))) {
          const Ee = oe.nodeElement.getBoundingClientRect();
          de.dimensions = pe, de.handleBounds.source = Nu("source", oe.nodeElement, Ee, H, de.id), de.handleBounds.target = Nu("target", oe.nodeElement, Ee, H, de.id), j.push({
            id: de.id,
            type: "dimensions",
            dimensions: pe
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), j.length && e.hooks.nodesChange.trigger(j);
  }, b = (I, O) => {
    const B = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
    for (const oe of I)
      In(oe) ? B.add(oe.id) : kn(oe) && H.add(oe.id);
    const j = yn(t.value, B, !0), re = yn(n.value, H);
    if (e.multiSelectionActive) {
      for (const oe of B)
        j.push(gn(oe, O));
      for (const oe of H)
        re.push(gn(oe, O));
    }
    j.length && e.hooks.nodesChange.trigger(j), re.length && e.hooks.edgesChange.trigger(re);
  }, h = (I) => {
    if (e.multiSelectionActive) {
      const O = I.map((B) => gn(B.id, !0));
      e.hooks.nodesChange.trigger(O);
      return;
    }
    e.hooks.nodesChange.trigger(yn(t.value, new Set(I.map((O) => O.id)), !0)), e.hooks.edgesChange.trigger(yn(n.value));
  }, p = (I) => {
    if (e.multiSelectionActive) {
      const O = I.map((B) => gn(B.id, !0));
      e.hooks.edgesChange.trigger(O);
      return;
    }
    e.hooks.edgesChange.trigger(yn(n.value, new Set(I.map((O) => O.id)))), e.hooks.nodesChange.trigger(yn(t.value, /* @__PURE__ */ new Set(), !0));
  }, m = (I) => {
    b(I, !0);
  }, g = (I) => {
    const B = (I || e.nodes).map((H) => (H.selected = !1, gn(H.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, _ = (I) => {
    const B = (I || e.edges).map((H) => (H.selected = !1, gn(H.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, y = (I) => {
    if (!I || !I.length)
      return b([], !1);
    const O = I.reduce(
      (B, H) => {
        const j = gn(H.id, !1);
        return In(H) ? B.nodes.push(j) : B.edges.push(j), B;
      },
      { nodes: [], edges: [] }
    );
    O.nodes.length && e.hooks.nodesChange.trigger(O.nodes), O.edges.length && e.hooks.edgesChange.trigger(O.edges);
  }, k = (I) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([I, e.maxZoom]), e.minZoom = I;
  }, C = (I) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([e.minZoom, I]), e.maxZoom = I;
  }, $ = (I) => {
    var O;
    (O = e.d3Zoom) == null || O.translateExtent(I), e.translateExtent = I;
  }, w = (I) => {
    e.nodeExtent = I, o();
  }, S = (I) => {
    var O;
    (O = e.d3Zoom) == null || O.clickDistance(I);
  }, U = (I) => {
    e.nodesDraggable = I, e.nodesConnectable = I, e.elementsSelectable = I;
  }, D = (I) => {
    const O = I instanceof Function ? I(e.nodes) : I;
    !e.initialized && !O.length || (e.nodes = Ru(O, u, e.hooks.error.trigger));
  }, M = (I) => {
    const O = I instanceof Function ? I(e.edges) : I;
    if (!e.initialized && !O.length)
      return;
    const B = cs(
      O,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    us(e.connectionLookup, n.value, B), e.edges = B;
  }, A = (I) => {
    const O = I instanceof Function ? I([...e.nodes, ...e.edges]) : I;
    !e.initialized && !O.length || (D(O.filter(In)), M(O.filter(kn)));
  }, V = (I) => {
    let O = I instanceof Function ? I(e.nodes) : I;
    O = Array.isArray(O) ? O : [O];
    const B = Ru(O, u, e.hooks.error.trigger), H = [];
    for (const j of B)
      H.push(Eu(j));
    H.length && e.hooks.nodesChange.trigger(H);
  }, E = (I) => {
    let O = I instanceof Function ? I(e.edges) : I;
    O = Array.isArray(O) ? O : [O];
    const B = cs(
      O,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), H = [];
    for (const j of B)
      H.push(Eu(j));
    H.length && e.hooks.edgesChange.trigger(H);
  }, F = (I, O = !0, B = !1) => {
    const H = I instanceof Function ? I(e.nodes) : I, j = Array.isArray(H) ? H : [H], re = [], oe = [];
    function de(xe) {
      const Ee = l(xe);
      for (const Be of Ee)
        (!et(Be.deletable) || Be.deletable) && oe.push($u(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function pe(xe) {
      const Ee = [];
      for (const Be of e.nodes)
        Be.parentNode === xe && Ee.push(Be);
      if (Ee.length) {
        for (const Be of Ee)
          re.push(zu(Be.id));
        O && de(Ee);
        for (const Be of Ee)
          pe(Be.id);
      }
    }
    for (const xe of j) {
      const Ee = typeof xe == "string" ? u(xe) : xe;
      Ee && (et(Ee.deletable) && !Ee.deletable || (re.push(zu(Ee.id)), O && de([Ee]), B && pe(Ee.id)));
    }
    oe.length && e.hooks.edgesChange.trigger(oe), re.length && e.hooks.nodesChange.trigger(re);
  }, P = (I) => {
    const O = I instanceof Function ? I(e.edges) : I, B = Array.isArray(O) ? O : [O], H = [];
    for (const j of B) {
      const re = typeof j == "string" ? c(j) : j;
      re && (et(re.deletable) && !re.deletable || H.push(
        $u(
          typeof j == "string" ? j : j.id,
          re.source,
          re.target,
          re.sourceHandle,
          re.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(H);
  }, R = (I, O, B = !0) => {
    const H = c(I.id);
    if (!H)
      return !1;
    const j = e.edges.indexOf(H), re = Pb(I, O, H, B, e.hooks.error.trigger);
    if (re) {
      const [oe] = cs(
        [re],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((de, pe) => pe === j ? oe : de), us(e.connectionLookup, n.value, [oe]), oe;
    }
    return !1;
  }, x = (I, O, B = { replace: !1 }) => {
    const H = c(I);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, q = (I) => Su(I, e.nodes), Q = (I) => {
    const O = Su(I, e.edges);
    return us(e.connectionLookup, n.value, O), O;
  }, te = (I, O, B = { replace: !1 }) => {
    const H = u(I);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    B.replace ? e.nodes.splice(e.nodes.indexOf(H), 1, j) : Object.assign(H, j);
  }, fe = (I, O, B = { replace: !1 }) => {
    const H = u(I);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, be = (I, O, B = !1) => {
    B ? e.connectionClickStartHandle = I : e.connectionStartHandle = I, e.connectionEndHandle = null, e.connectionStatus = null, O && (e.connectionPosition = O);
  }, _e = (I, O = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = I, e.connectionEndHandle = O, e.connectionStatus = B);
  }, ne = (I, O) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, O ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, ae = (I) => {
    const O = nb(I), B = O ? null : Tr(I) ? I : u(I.id);
    return !O && !B ? [null, null, O] : [O ? I : oa(B), B, O];
  }, me = (I, O = !0, B = e.nodes) => {
    const [H, j, re] = ae(I);
    if (!H)
      return [];
    const oe = [];
    for (const de of B || e.nodes) {
      if (!re && (de.id === j.id || !de.computedPosition))
        continue;
      const pe = oa(de), xe = aa(pe, H);
      (O && xe > 0 || xe >= pe.width * pe.height || xe >= Number(H.width) * Number(H.height)) && oe.push(de);
    }
    return oe;
  }, Pe = (I, O, B = !0) => {
    const [H] = ae(I);
    if (!H)
      return !1;
    const j = aa(H, O);
    return B && j > 0 || j >= Number(H.width) * Number(H.height);
  }, Se = (I) => {
    const { viewport: O, dimensions: B, d3Zoom: H, d3Selection: j, translateExtent: re } = e;
    if (!H || !j || !I.x && !I.y)
      return !1;
    const oe = lr.translate(O.x + I.x, O.y + I.y).scale(O.zoom), de = [
      [0, 0],
      [B.width, B.height]
    ], pe = H.constrain()(oe, de, re), xe = e.viewport.x !== pe.x || e.viewport.y !== pe.y || e.viewport.zoom !== pe.k;
    return H.transform(j, pe), xe;
  }, le = (I) => {
    const O = I instanceof Function ? I(e) : I, B = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(O.defaultEdgeOptions) && (e.defaultEdgeOptions = O.defaultEdgeOptions);
    const H = O.modelValue || O.nodes || O.edges ? [] : void 0;
    H && (O.modelValue && H.push(...O.modelValue), O.nodes && H.push(...O.nodes), O.edges && H.push(...O.edges), A(H));
    const j = () => {
      et(O.maxZoom) && C(O.maxZoom), et(O.minZoom) && k(O.minZoom), et(O.translateExtent) && $(O.translateExtent);
    };
    for (const re of Object.keys(O)) {
      const oe = re, de = O[oe];
      ![...jb, ...B].includes(oe) && et(de) && (e[oe] = de);
    }
    ki(() => e.d3Zoom).not.toBeNull().then(j), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: A,
    setNodes: D,
    setEdges: M,
    addNodes: V,
    addEdges: E,
    removeNodes: F,
    removeEdges: P,
    findNode: u,
    findEdge: c,
    updateEdge: R,
    updateEdgeData: x,
    updateNode: te,
    updateNodeData: fe,
    applyEdgeChanges: Q,
    applyNodeChanges: q,
    addSelectedElements: m,
    addSelectedNodes: h,
    addSelectedEdges: p,
    setMinZoom: k,
    setMaxZoom: C,
    setTranslateExtent: $,
    setNodeExtent: w,
    setPaneClickDistance: S,
    removeSelectedElements: y,
    removeSelectedNodes: g,
    removeSelectedEdges: _,
    startConnection: be,
    updateConnection: _e,
    endConnection: ne,
    setInteractive: U,
    setState: le,
    getIntersectingNodes: me,
    getIncomers: a,
    getOutgoers: s,
    getConnectedEdges: l,
    getHandleConnections: d,
    isNodeIntersecting: Pe,
    panBy: Se,
    fitView: (I) => r.value.fitView(I),
    zoomIn: (I) => r.value.zoomIn(I),
    zoomOut: (I) => r.value.zoomOut(I),
    zoomTo: (I, O) => r.value.zoomTo(I, O),
    setViewport: (I, O) => r.value.setViewport(I, O),
    setTransform: (I, O) => r.value.setTransform(I, O),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (I, O, B) => r.value.setCenter(I, O, B),
    fitBounds: (I, O) => r.value.fitBounds(I, O),
    project: (I) => r.value.project(I),
    screenToFlowCoordinate: (I) => r.value.screenToFlowCoordinate(I),
    flowToScreenCoordinate: (I) => r.value.flowToScreenCoordinate(I),
    toObject: () => {
      const I = [], O = [];
      for (const B of e.nodes) {
        const {
          computedPosition: H,
          handleBounds: j,
          selected: re,
          dimensions: oe,
          isParent: de,
          resizing: pe,
          dragging: xe,
          events: Ee,
          ...Be
        } = B;
        I.push(Be);
      }
      for (const B of e.edges) {
        const { selected: H, sourceNode: j, targetNode: re, events: oe, ...de } = B;
        O.push(de);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: I,
          edges: O,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (I) => new Promise((O) => {
      const { nodes: B, edges: H, position: j, zoom: re, viewport: oe } = I;
      B && D(B), H && M(H);
      const [de, pe] = oe?.x && oe?.y ? [oe.x, oe.y] : j ?? [null, null];
      if (de && pe) {
        const xe = oe?.zoom || re || e.viewport.zoom;
        return ki(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: de,
            y: pe,
            zoom: xe
          }).then(() => {
            O(!0);
          });
        });
      } else
        O(!0);
    }),
    updateNodeInternals: o,
    viewportHelper: r,
    $reset: () => {
      const I = lp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const O = lr.translate(I.defaultViewport.x ?? 0, I.defaultViewport.y ?? 0).scale(qn(I.defaultViewport.zoom ?? 1, I.minZoom, I.maxZoom)), B = e.viewportRef.getBoundingClientRect(), H = [
          [0, 0],
          [B.width, B.height]
        ], j = e.d3Zoom.constrain()(O, H, I.translateExtent);
        e.d3Zoom.transform(e.d3Selection, j);
      }
      le(I);
    },
    $destroy: () => {
    }
  };
}
const Gb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Wb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, ut = /* @__PURE__ */ Fe({
  ...Wb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => ue.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = uh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = qe(() => n.type ?? "source"), o = qe(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: s,
      connectionClickStartHandle: l,
      connectionEndHandle: d,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: v
    } = Ve(), { id: b, node: h, nodeEl: p, connectedEdges: m } = sp(), g = W(), _ = qe(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), y = qe(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), k = qe(
      () => {
        var M, A, V, E, F, P;
        return ((M = s.value) == null ? void 0 : M.nodeId) === b && ((A = s.value) == null ? void 0 : A.id) === e.id && ((V = s.value) == null ? void 0 : V.type) === r.value || ((E = d.value) == null ? void 0 : E.nodeId) === b && ((F = d.value) == null ? void 0 : F.id) === e.id && ((P = d.value) == null ? void 0 : P.type) === r.value;
      }
    ), C = qe(
      () => {
        var M, A, V;
        return ((M = l.value) == null ? void 0 : M.nodeId) === b && ((A = l.value) == null ? void 0 : A.id) === e.id && ((V = l.value) == null ? void 0 : V.type) === r.value;
      }
    ), { handlePointerDown: $, handleClick: w } = ap({
      nodeId: b,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), S = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !m.value.some((M) => {
      const A = M[`${r.value}Handle`];
      return M[r.value] !== b ? !1 : A ? A === e.id : !0;
    }) : typeof e.connectable == "number" ? m.value.filter((M) => {
      const A = M[`${r.value}Handle`];
      return M[r.value] !== b ? !1 : A ? A === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(h, m.value) : et(e.connectable) ? e.connectable : c.value);
    Ke(() => {
      var M;
      if (!h.dimensions.width || !h.dimensions.height)
        return;
      const A = (M = h.handleBounds[r.value]) == null ? void 0 : M.find((q) => q.id === e.id);
      if (!u.value || A)
        return;
      const V = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !g.value || !V || !e.id)
        return;
      const E = p.value.getBoundingClientRect(), F = g.value.getBoundingClientRect(), P = window.getComputedStyle(V), { m22: R } = new window.DOMMatrixReadOnly(P.transform), x = {
        id: e.id,
        position: e.position,
        x: (F.left - E.left) / R,
        y: (F.top - E.top) / R,
        type: r.value,
        nodeId: b,
        ...Ea(g.value)
      };
      h.handleBounds[r.value] = [...h.handleBounds[r.value] ?? [], x];
    });
    function U(M) {
      const A = pl(M);
      S.value && _.value && (A && M.button === 0 || !A) && $(M);
    }
    function D(M) {
      !b || !l.value && !_.value || S.value && w(M);
    }
    return t({
      handleClick: w,
      handlePointerDown: $,
      onClick: D,
      onPointerDown: U
    }), (M, A) => (z(), T("div", {
      ref_key: "handle",
      ref: g,
      "data-id": `${N(a)}-${N(b)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": N(b),
      "data-handlepos": M.position,
      class: Z(["vue-flow__handle", [
        `vue-flow__handle-${M.position}`,
        `vue-flow__handle-${e.id}`,
        N(f),
        N(v),
        r.value,
        {
          connectable: S.value,
          connecting: C.value,
          connectablestart: _.value,
          connectableend: y.value,
          connectionindicator: S.value && (_.value && !k.value || y.value && k.value)
        }
      ]]),
      onMousedown: U,
      onTouchstartPassive: U,
      onClick: D
    }, [
      Ye(M.$slots, "default", { id: M.id })
    ], 42, Gb));
  }
}), Pa = function({
  sourcePosition: e = ue.Bottom,
  targetPosition: t = ue.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: a,
  data: s
}) {
  const l = s.label ?? n;
  return [
    ze(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? ze(l) : ze(ve, [l]),
    ze(ut, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Pa.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Pa.inheritAttrs = !1;
Pa.compatConfig = { MODE: 3 };
const Xb = Pa, Ca = function({
  targetPosition: e = ue.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    ze(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? ze(a) : ze(ve, [a])
  ];
};
Ca.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Ca.inheritAttrs = !1;
Ca.compatConfig = { MODE: 3 };
const Yb = Ca, Aa = function({
  sourcePosition: e = ue.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? ze(a) : ze(ve, [a]),
    ze(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Aa.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Aa.inheritAttrs = !1;
Aa.compatConfig = { MODE: 3 };
const Kb = Aa, Zb = ["transform"], Jb = ["width", "height", "x", "y", "rx", "ry"], Qb = ["y"], ex = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, tx = /* @__PURE__ */ Fe({
  ...ex,
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
    const t = W({ x: 0, y: 0, width: 0, height: 0 }), n = W(null), r = J(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ke(o), Ie([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const a = n.value.getBBox();
      (a.width !== t.value.width || a.height !== t.value.height) && (t.value = a);
    }
    return (a, s) => (z(), T("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      a.labelShowBg ? (z(), T("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * a.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * a.labelBgPadding[1]}px`,
        x: -a.labelBgPadding[0],
        y: -a.labelBgPadding[1],
        style: vt(a.labelBgStyle),
        rx: a.labelBgBorderRadius,
        ry: a.labelBgBorderRadius
      }, null, 12, Jb)) : ee("", !0),
      i("text", ba(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Ye(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (z(), Oe(Ot(a.label), { key: 0 })) : (z(), T(ve, { key: 1 }, [
            Ce(L(a.label), 1)
          ], 64))
        ])
      ], 16, Qb)
    ], 8, Zb));
  }
}), nx = ["id", "d", "marker-end", "marker-start"], rx = ["d", "stroke-width"], ox = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, so = /* @__PURE__ */ Fe({
  ...ox,
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
    const n = W(null), r = W(null), o = W(null), a = fh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (s, l) => (z(), T(ve, null, [
      i("path", ba(N(a), {
        id: s.id,
        ref_key: "pathEl",
        ref: n,
        d: s.path,
        class: "vue-flow__edge-path",
        "marker-end": s.markerEnd,
        "marker-start": s.markerStart
      }), null, 16, nx),
      s.interactionWidth ? (z(), T("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: s.path,
        "stroke-width": s.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, rx)) : ee("", !0),
      s.label && s.labelX && s.labelY ? (z(), Oe(tx, {
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
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : ee("", !0)
    ], 64));
  }
});
function up({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [a, l, o, s];
}
function cp({
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
function Eo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Fu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let s, l;
  switch (e) {
    case ue.Left:
      s = t - Eo(t - r, a), l = n;
      break;
    case ue.Right:
      s = t + Eo(r - t, a), l = n;
      break;
    case ue.Top:
      s = t, l = n - Eo(n - o, a);
      break;
    case ue.Bottom:
      s = t, l = n + Eo(o - n, a);
      break;
  }
  return [s, l];
}
function hl(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ue.Top,
    curvature: l = 0.25
  } = e, [d, u] = Fu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [c, f] = Fu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [v, b, h, p] = cp({
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
    b,
    h,
    p
  ];
}
function Bu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let a, s;
  switch (e) {
    case ue.Left:
    case ue.Right:
      a = 0.5 * (t + r), s = n;
      break;
    case ue.Top:
    case ue.Bottom:
      a = t, s = 0.5 * (n + o);
      break;
  }
  return [a, s];
}
function dp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ue.Top
  } = e, [l, d] = Bu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, c] = Bu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, v, b, h] = cp({
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
    b,
    h
  ];
}
const Lu = {
  [ue.Left]: { x: -1, y: 0 },
  [ue.Right]: { x: 1, y: 0 },
  [ue.Top]: { x: 0, y: -1 },
  [ue.Bottom]: { x: 0, y: 1 }
};
function ax({
  source: e,
  sourcePosition: t = ue.Bottom,
  target: n
}) {
  return t === ue.Left || t === ue.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Uu(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function sx({
  source: e,
  sourcePosition: t = ue.Bottom,
  target: n,
  targetPosition: r = ue.Top,
  center: o,
  offset: a
}) {
  const s = Lu[t], l = Lu[r], d = { x: e.x + s.x * a, y: e.y + s.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, c = ax({
    source: d,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", v = c[f];
  let b, h, p;
  const m = { x: 0, y: 0 }, g = { x: 0, y: 0 }, [_, y, k, C] = up({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * l[f] === -1) {
    h = o.x ?? _, p = o.y ?? y;
    const w = [
      { x: h, y: d.y },
      { x: h, y: u.y }
    ], S = [
      { x: d.x, y: p },
      { x: u.x, y: p }
    ];
    s[f] === v ? b = f === "x" ? w : S : b = f === "x" ? S : w;
  } else {
    const w = [{ x: d.x, y: u.y }], S = [{ x: u.x, y: d.y }];
    if (f === "x" ? b = s.x === v ? S : w : b = s.y === v ? w : S, t === r) {
      const V = Math.abs(e[f] - n[f]);
      if (V <= a) {
        const E = Math.min(a - 1, a - V);
        s[f] === v ? m[f] = (d[f] > e[f] ? -1 : 1) * E : g[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const V = f === "x" ? "y" : "x", E = s[f] === l[V], F = d[V] > u[V], P = d[V] < u[V];
      (s[f] === 1 && (!E && F || E && P) || s[f] !== 1 && (!E && P || E && F)) && (b = f === "x" ? w : S);
    }
    const U = { x: d.x + m.x, y: d.y + m.y }, D = { x: u.x + g.x, y: u.y + g.y }, M = Math.max(Math.abs(U.x - b[0].x), Math.abs(D.x - b[0].x)), A = Math.max(Math.abs(U.y - b[0].y), Math.abs(D.y - b[0].y));
    M >= A ? (h = (U.x + D.x) / 2, p = b[0].y) : (h = b[0].x, p = (U.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + m.x, y: d.y + m.y },
    ...b,
    { x: u.x + g.x, y: u.y + g.y },
    n
  ], h, p, k, C];
}
function ix(e, t, n, r) {
  const o = Math.min(Uu(e, t) / 2, Uu(t, n) / 2, r), { x: a, y: s } = t;
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
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ue.Top,
    borderRadius: l = 5,
    centerX: d,
    centerY: u,
    offset: c = 20
  } = e, [f, v, b, h, p] = sx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: s,
    center: { x: d, y: u },
    offset: c
  });
  return [f.reduce((g, _, y) => {
    let k;
    return y > 0 && y < f.length - 1 ? k = ix(f[y - 1], _, f[y + 1], l) : k = `${y === 0 ? "M" : "L"}${_.x} ${_.y}`, g += k, g;
  }, ""), v, b, h, p];
}
function lx(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [a, s, l, d] = up({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, a, s, l, d];
}
const ux = Fe({
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
      const [n, r, o] = lx(e);
      return ze(so, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), cx = ux, dx = Fe({
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
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return ze(so, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), fp = dx, fx = Fe({
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
    return () => ze(fp, { ...e, ...t, borderRadius: 0 });
  }
}), px = fx, hx = Fe({
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
      const [n, r, o] = hl({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return ze(so, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), mx = hx, vx = Fe({
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
      const [n, r, o] = dp({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return ze(so, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), gx = vx, yx = {
  input: Kb,
  default: Xb,
  output: Yb
}, bx = {
  default: mx,
  straight: cx,
  step: px,
  smoothstep: fp,
  simplebezier: gx
};
function xx(e, t, n) {
  const r = J(() => (p) => t.value.get(p)), o = J(() => (p) => n.value.get(p)), a = J(() => {
    const p = {
      ...bx,
      ...e.edgeTypes
    }, m = Object.keys(p);
    for (const g of e.edges)
      g.type && !m.includes(g.type) && (p[g.type] = g.type);
    return p;
  }), s = J(() => {
    const p = {
      ...yx,
      ...e.nodeTypes
    }, m = Object.keys(p);
    for (const g of e.nodes)
      g.type && !m.includes(g.type) && (p[g.type] = g.type);
    return p;
  }), l = J(() => e.onlyRenderVisibleElements ? Xf(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), d = J(() => {
    if (e.onlyRenderVisibleElements) {
      const p = [];
      for (const m of e.edges) {
        const g = t.value.get(m.source), _ = t.value.get(m.target);
        vb({
          sourcePos: g.computedPosition || { x: 0, y: 0 },
          targetPos: _.computedPosition || { x: 0, y: 0 },
          sourceWidth: g.dimensions.width,
          sourceHeight: g.dimensions.height,
          targetWidth: _.dimensions.width,
          targetHeight: _.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && p.push(m);
      }
      return p;
    }
    return e.edges;
  }), u = J(() => [...l.value, ...d.value]), c = J(() => {
    const p = [];
    for (const m of e.nodes)
      m.selected && p.push(m);
    return p;
  }), f = J(() => {
    const p = [];
    for (const m of e.edges)
      m.selected && p.push(m);
    return p;
  }), v = J(() => [
    ...c.value,
    ...f.value
  ]), b = J(() => {
    const p = [];
    for (const m of e.nodes)
      m.dimensions.width && m.dimensions.height && m.handleBounds !== void 0 && p.push(m);
    return p;
  }), h = J(
    () => l.value.length > 0 && b.value.length === l.value.length
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
    getNodesInitialized: b,
    areNodesInitialized: h
  };
}
class Tn {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = vr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? Tn.instance;
    return Tn.instance = r ?? new Tn(), n && (n.config.globalProperties.$vueFlowStorage = Tn.instance), Tn.instance;
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
    const r = lp(), o = hr(r), a = {};
    for (const [v, b] of Object.entries(o.hooks)) {
      const h = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      a[h] = b.on;
    }
    const s = {};
    for (const [v, b] of Object.entries(o.hooks))
      s[v] = b.trigger;
    const l = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const b of o.nodes)
        v.set(b.id, b);
      return v;
    }), d = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const b of o.edges)
        v.set(b.id, b);
      return v;
    }), u = xx(o, l, d), c = Hb(o, l, d);
    c.setState({ ...o, ...n });
    const f = {
      ...a,
      ...u,
      ...c,
      ...dm(o),
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
function Ve(e) {
  const t = Tn.getInstance(), n = jd(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, s = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const d = mr(Du, null);
    typeof d < "u" && d !== null && (!s || d.id === s) && (l = d);
  }
  if (l || s && (l = t.get(s)), !l || s && l.id !== s) {
    const d = a ?? t.getId(), u = t.create(d, o);
    l = u, (n ?? Hd(!0)).run(() => {
      Ie(
        u.applyDefault,
        (f, v, b) => {
          const h = (m) => {
            u.applyNodeChanges(m);
          }, p = (m) => {
            u.applyEdgeChanges(m);
          };
          f ? (u.onNodesChange(h), u.onEdgesChange(p)) : (u.hooks.value.nodesChange.off(h), u.hooks.value.edgesChange.off(p)), b(() => {
            u.hooks.value.nodesChange.off(h), u.hooks.value.edgesChange.off(p);
          });
        },
        { immediate: !0 }
      ), jr(() => {
        if (l) {
          const f = t.get(l.id);
          f ? f.$destroy() : ao(`No store instance found for id ${l.id} in storage.`);
        }
      });
    });
  } else
    r && l.setState(o);
  if (n && (Fn(Du, l), n.vueFlowId = l.id), r) {
    const d = vr();
    d?.type.name !== "VueFlow" && l.emits.error(new ot(tt.USEVUEFLOW_OPTIONS));
  }
  return l;
}
function wx(e) {
  const { emits: t, dimensions: n } = Ve();
  let r;
  Ke(() => {
    const o = () => {
      var a, s;
      if (!e.value || !(((s = (a = e.value).checkVisibility) == null ? void 0 : s.call(a)) ?? !0))
        return;
      const l = Ea(e.value);
      (l.width === 0 || l.height === 0) && t.error(new ot(tt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: l.width || 500, height: l.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), ya(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const _x = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, kx = /* @__PURE__ */ Fe({
  ..._x,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (z(), T("div", {
      class: "vue-flow__selection vue-flow__container",
      style: vt({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), Sx = ["tabIndex"], Ex = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, zx = /* @__PURE__ */ Fe({
  ...Ex,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: s } = Ve(), l = ip(), d = W(null), u = op({
      el: d,
      onStart(h) {
        t.selectionDragStart(h), t.nodeDragStart(h);
      },
      onDrag(h) {
        t.selectionDrag(h), t.nodeDrag(h);
      },
      onStop(h) {
        t.selectionDragStop(h), t.nodeDragStop(h);
      }
    });
    Ke(() => {
      var h;
      a.value || (h = d.value) == null || h.focus({ preventScroll: !0 });
    });
    const c = J(() => Wf(r.value)), f = J(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function v(h) {
      t.selectionContextMenu({ event: h, nodes: r.value });
    }
    function b(h) {
      a.value || or[h.key] && (h.preventDefault(), l(
        {
          x: or[h.key].x,
          y: or[h.key].y
        },
        h.shiftKey
      ));
    }
    return (h, p) => !N(s) && c.value.width && c.value.height ? (z(), T("div", {
      key: 0,
      class: Z(["vue-flow__nodesselection vue-flow__container", N(o)]),
      style: vt({ transform: `translate(${N(n).x}px,${N(n).y}px) scale(${N(n).zoom})` })
    }, [
      i("div", {
        ref_key: "el",
        ref: d,
        class: Z([{ dragging: N(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: N(a) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: b
      }, null, 46, Sx)
    ], 6)) : ee("", !0);
  }
});
function $x(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const Px = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, Cx = /* @__PURE__ */ Fe({
  ...Px,
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
      removeEdges: b,
      selectionMode: h,
      deleteKeyCode: p,
      multiSelectionKeyCode: m,
      multiSelectionActive: g,
      edgeLookup: _,
      nodeLookup: y,
      connectionLookup: k,
      defaultEdgeOptions: C,
      connectionStartHandle: $,
      panOnDrag: w
    } = Ve(), S = on(null), U = on(/* @__PURE__ */ new Set()), D = on(/* @__PURE__ */ new Set()), M = on(null), A = qe(() => d.value && (e.isSelecting || a.value)), V = qe(() => $.value !== null);
    let E = !1, F = !1;
    const P = Mr(p, { actInsideInputWithModifier: !1 }), R = Mr(m);
    Ie(P, (ne) => {
      ne && (v(f.value), b(c.value), u.value = !1);
    }), Ie(R, (ne) => {
      g.value = ne;
    });
    function x(ne, ae) {
      return (me) => {
        me.target === ae && ne?.(me);
      };
    }
    function q(ne) {
      if (E || V.value) {
        E = !1;
        return;
      }
      o.paneClick(ne), s(), u.value = !1;
    }
    function Q(ne) {
      var ae;
      if (Array.isArray(w.value) && ((ae = w.value) != null && ae.includes(2))) {
        ne.preventDefault();
        return;
      }
      o.paneContextMenu(ne);
    }
    function te(ne) {
      o.paneScroll(ne);
    }
    function fe(ne) {
      var ae, me, Pe;
      if (M.value = ((ae = t.value) == null ? void 0 : ae.getBoundingClientRect()) ?? null, !d.value || !e.isSelecting || ne.button !== 0 || ne.target !== S.value || !M.value)
        return;
      (Pe = (me = ne.target) == null ? void 0 : me.setPointerCapture) == null || Pe.call(me, ne.pointerId);
      const { x: Se, y: le } = $x(ne, M.value);
      F = !0, E = !1, s(), l.value = {
        width: 0,
        height: 0,
        startX: Se,
        startY: le,
        x: Se,
        y: le
      }, o.selectionStart(ne);
    }
    function be(ne) {
      var ae;
      if (!M.value || !l.value)
        return;
      E = !0;
      const { x: me, y: Pe } = Gt(ne, M.value), { startX: Se = 0, startY: le = 0 } = l.value, we = {
        startX: Se,
        startY: le,
        x: me < Se ? me : Se,
        y: Pe < le ? Pe : le,
        width: Math.abs(me - Se),
        height: Math.abs(Pe - le)
      }, se = U.value, ge = D.value;
      U.value = new Set(
        Xf(n.value, we, r.value, h.value === dl.Partial, !0).map(
          (O) => O.id
        )
      ), D.value = /* @__PURE__ */ new Set();
      const I = ((ae = C.value) == null ? void 0 : ae.selectable) ?? !0;
      for (const O of U.value) {
        const B = k.value.get(O);
        if (B)
          for (const { edgeId: H } of B.values()) {
            const j = _.value.get(H);
            j && (j.selectable ?? I) && D.value.add(H);
          }
      }
      if (!Mu(se, U.value)) {
        const O = yn(y.value, U.value, !0);
        o.nodesChange(O);
      }
      if (!Mu(ge, D.value)) {
        const O = yn(_.value, D.value);
        o.edgesChange(O);
      }
      l.value = we, a.value = !0, u.value = !1;
    }
    function _e(ne) {
      var ae;
      ne.button !== 0 || !F || ((ae = ne.target) == null || ae.releasePointerCapture(ne.pointerId), !a.value && l.value && ne.target === S.value && q(ne), a.value = !1, l.value = null, u.value = U.value.size > 0, o.selectionEnd(ne), e.selectionKeyPressed && (E = !1), F = !1);
    }
    return (ne, ae) => (z(), T("div", {
      ref_key: "container",
      ref: S,
      class: Z(["vue-flow__pane vue-flow__container", { selection: ne.isSelecting }]),
      onClick: ae[0] || (ae[0] = (me) => A.value ? void 0 : x(q, S.value)(me)),
      onContextmenu: ae[1] || (ae[1] = (me) => x(Q, S.value)(me)),
      onWheelPassive: ae[2] || (ae[2] = (me) => x(te, S.value)(me)),
      onPointerenter: ae[3] || (ae[3] = (me) => A.value ? void 0 : N(o).paneMouseEnter(me)),
      onPointerdown: ae[4] || (ae[4] = (me) => A.value ? fe(me) : N(o).paneMouseMove(me)),
      onPointermove: ae[5] || (ae[5] = (me) => A.value ? be(me) : N(o).paneMouseMove(me)),
      onPointerup: ae[6] || (ae[6] = (me) => A.value ? _e(me) : void 0),
      onPointerleave: ae[7] || (ae[7] = (me) => N(o).paneMouseLeave(me))
    }, [
      Ye(ne.$slots, "default"),
      N(a) && N(l) ? (z(), Oe(kx, {
        key: 0,
        "user-selection-rect": N(l)
      }, null, 8, ["user-selection-rect"])) : ee("", !0),
      N(u) && N(f).length ? (z(), Oe(zx, { key: 1 })) : ee("", !0)
    ], 34));
  }
}), Ax = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Tx = /* @__PURE__ */ Fe({
  ...Ax,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = Ve(), o = J(() => n.value ? !r.value : !1), a = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (s, l) => (z(), T("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: vt({ transform: a.value, opacity: o.value ? 0 : void 0 })
    }, [
      Ye(s.$slots, "default")
    ], 4));
  }
}), Ox = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Nx = /* @__PURE__ */ Fe({
  ...Ox,
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
      zoomOnPinch: b,
      zoomOnScroll: h,
      preventScrolling: p,
      noWheelClassName: m,
      noPanClassName: g,
      emits: _,
      connectionStartHandle: y,
      userSelectionActive: k,
      paneDragging: C,
      d3Zoom: $,
      d3Selection: w,
      d3ZoomHandler: S,
      viewport: U,
      viewportRef: D,
      paneClickDistance: M
    } = Ve();
    wx(D);
    const A = on(!1), V = on(!1);
    let E = null, F = !1, P = 0, R = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = Mr(l), q = Mr(s), Q = Mr(a), te = qe(
      () => (!q.value || q.value && s.value === !0) && (x.value || f.value)
    ), fe = qe(() => x.value || d.value), be = qe(() => s.value === !0 && te.value !== !0), _e = qe(
      () => q.value && s.value !== !0 || k.value || be.value
    ), ne = qe(() => y.value !== null);
    Ke(() => {
      if (!D.value) {
        ao("Viewport element is missing");
        return;
      }
      const le = D.value, we = le.getBoundingClientRect(), se = Yy().clickDistance(M.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ge = Nt(le).call(se), I = ge.on("wheel.zoom"), O = lr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(qn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [we.width, we.height]
      ], H = se.constrain()(O, B, o.value);
      se.transform(ge, H), se.wheelDelta(_u), $.value = se, w.value = ge, S.value = I, U.value = { x: H.x, y: H.y, zoom: H.k }, se.on("start", (j) => {
        var re;
        if (!j.sourceEvent)
          return null;
        P = j.sourceEvent.button, A.value = !0;
        const oe = Pe(j.transform);
        ((re = j.sourceEvent) == null ? void 0 : re.type) === "mousedown" && (C.value = !0), R = oe, _.viewportChangeStart(oe), _.moveStart({ event: j, flowTransform: oe });
      }), se.on("end", (j) => {
        if (!j.sourceEvent)
          return null;
        if (A.value = !1, C.value = !1, ae(te.value, P ?? 0) && !F && _.paneContextMenu(j.sourceEvent), F = !1, me(R, j.transform)) {
          const re = Pe(j.transform);
          R = re, _.viewportChangeEnd(re), _.moveEnd({ event: j, flowTransform: re });
        }
      }), se.filter((j) => {
        var re;
        const oe = Q.value || h.value, de = b.value && j.ctrlKey, pe = j.button, xe = j.type === "wheel";
        if (pe === 1 && j.type === "mousedown" && (Se(j, "vue-flow__node") || Se(j, "vue-flow__edge")))
          return !0;
        if (!te.value && !oe && !fe.value && !v.value && !b.value || k.value || ne.value && !xe || !v.value && j.type === "dblclick" || Se(j, m.value) && xe || Se(j, g.value) && (!xe || fe.value && xe && !Q.value) || !b.value && j.ctrlKey && xe || !oe && !fe.value && !de && xe)
          return !1;
        if (!b && j.type === "touchstart" && ((re = j.touches) == null ? void 0 : re.length) > 1)
          return j.preventDefault(), !1;
        if (!te.value && (j.type === "mousedown" || j.type === "touchstart") || be.value && Array.isArray(f.value) && f.value.includes(0) && pe === 0 || Array.isArray(f.value) && !f.value.includes(pe) && (j.type === "mousedown" || j.type === "touchstart"))
          return !1;
        const Ee = Array.isArray(f.value) && f.value.includes(pe) || s.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !pe || pe <= 1;
        return (!j.ctrlKey || x.value || xe) && Ee;
      }), Ie(
        [k, te],
        () => {
          k.value && !A.value ? se.on("zoom", null) : k.value || se.on("zoom", (j) => {
            U.value = { x: j.transform.x, y: j.transform.y, zoom: j.transform.k };
            const re = Pe(j.transform);
            F = ae(te.value, P ?? 0), _.viewportChange(re), _.move({ event: j, flowTransform: re });
          });
        },
        { immediate: !0 }
      ), Ie(
        [k, fe, u, Q, b, p, m],
        () => {
          fe.value && !Q.value && !k.value ? ge.on(
            "wheel.zoom",
            (j) => {
              if (Se(j, m.value))
                return !1;
              const re = Q.value || h.value, oe = b.value && j.ctrlKey;
              if (!(!p.value || fe.value || re || oe))
                return !1;
              j.preventDefault(), j.stopImmediatePropagation();
              const pe = ge.property("__zoom").k || 1, xe = sa();
              if (!x.value && j.ctrlKey && b.value && xe) {
                const Ha = jt(j), zn = _u(j), br = pe * 2 ** zn;
                se.scaleTo(ge, br, Ha, j);
                return;
              }
              const Ee = j.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Ir.Vertical ? 0 : j.deltaX * Ee, Lt = u.value === Ir.Horizontal ? 0 : j.deltaY * Ee;
              !xe && j.shiftKey && u.value !== Ir.Vertical && !Be && Lt && (Be = Lt, Lt = 0), se.translateBy(
                ge,
                -(Be / pe) * c.value,
                -(Lt / pe) * c.value
              );
              const gt = Pe(ge.property("__zoom"));
              E && clearTimeout(E), V.value ? (_.move({ event: j, flowTransform: gt }), _.viewportChange(gt), E = setTimeout(() => {
                _.moveEnd({ event: j, flowTransform: gt }), _.viewportChangeEnd(gt), V.value = !1;
              }, 150)) : (V.value = !0, _.moveStart({ event: j, flowTransform: gt }), _.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof I < "u" && ge.on(
            "wheel.zoom",
            function(j, re) {
              const oe = !p.value && j.type === "wheel" && !j.ctrlKey, de = Q.value || h.value, pe = b.value && j.ctrlKey;
              if (!de && !d.value && !pe && j.type === "wheel" || oe || Se(j, m.value))
                return null;
              j.preventDefault(), I.call(this, j, re);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function ae(le, we) {
      return we === 2 && Array.isArray(le) && le.includes(2);
    }
    function me(le, we) {
      return le.x !== we.x && !Number.isNaN(we.x) || le.y !== we.y && !Number.isNaN(we.y) || le.zoom !== we.k && !Number.isNaN(we.k);
    }
    function Pe(le) {
      return {
        x: le.x,
        y: le.y,
        zoom: le.k
      };
    }
    function Se(le, we) {
      return le.target.closest(`.${we}`);
    }
    return (le, we) => (z(), T("div", {
      ref_key: "viewportRef",
      ref: D,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      X(Cx, {
        "is-selecting": _e.value,
        "selection-key-pressed": N(q),
        class: Z({
          connecting: ne.value,
          dragging: N(C),
          draggable: N(f) === !0 || Array.isArray(N(f)) && N(f).includes(0)
        })
      }, {
        default: rt(() => [
          X(Tx, null, {
            default: rt(() => [
              Ye(le.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Rx = ["id"], Ix = ["id"], Mx = ["id"], Dx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Fx = /* @__PURE__ */ Fe({
  ...Dx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = Ve();
    return (o, a) => (z(), T(ve, null, [
      i("div", {
        id: `${N(Bf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + L(N(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Rx),
      i("div", {
        id: `${N(Lf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Ix),
      N(n) ? ee("", !0) : (z(), T("div", {
        key: 0,
        id: `${N(tb)}-${N(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, L(N(r)), 9, Mx))
    ], 64));
  }
});
function Bx() {
  const e = Ve();
  Ie(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function Lx(e, t, n) {
  return n === ue.Left ? e - t : n === ue.Right ? e + t : e;
}
function Ux(e, t, n) {
  return n === ue.Top ? e - t : n === ue.Bottom ? e + t : e;
}
const ml = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = ue.Top,
  type: o
}) {
  return ze("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Lx(t, e, r),
    cy: Ux(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
ml.props = ["radius", "centerX", "centerY", "position", "type"];
ml.compatConfig = { MODE: 3 };
const qu = ml, qx = Fe({
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
      multiSelectionActive: b,
      disableKeyboardA11y: h,
      elementsSelectable: p,
      edgesUpdatable: m,
      edgesFocusable: g,
      hooks: _
    } = Ve(), y = J(() => c(e.id)), { emit: k, on: C } = Ob(y.value, a), $ = mr($a), w = vr(), S = W(!1), U = W(!1), D = W(""), M = W(null), A = W("source"), V = W(null), E = qe(
      () => typeof y.value.selectable > "u" ? p.value : y.value.selectable
    ), F = qe(() => typeof y.value.updatable > "u" ? m.value : y.value.updatable), P = qe(() => typeof y.value.focusable > "u" ? g.value : y.value.focusable);
    Fn(Cb, e.id), Fn(Ab, V);
    const R = J(() => y.value.class instanceof Function ? y.value.class(y.value) : y.value.class), x = J(() => y.value.style instanceof Function ? y.value.style(y.value) : y.value.style), q = J(() => {
      const O = y.value.type || "default", B = $?.[`edge-${O}`];
      if (B)
        return B;
      let H = y.value.template ?? d.value[O];
      if (typeof H == "string" && w) {
        const j = Object.keys(w.appContext.components);
        j && j.includes(O) && (H = Wd(O, !1));
      }
      return H && typeof H != "string" ? H : (a.error(new ot(tt.EDGE_TYPE_MISSING, H)), !1);
    }), { handlePointerDown: Q } = ap({
      nodeId: D,
      handleId: M,
      type: A,
      isValidConnection: v,
      edgeUpdaterType: A,
      onEdgeUpdate: be,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const O = f(y.value.source), B = f(y.value.target), H = "pathOptions" in y.value ? y.value.pathOptions : {};
      if (!O && !B)
        return a.error(new ot(tt.EDGE_SOURCE_TARGET_MISSING, y.value.id, y.value.source, y.value.target)), null;
      if (!O)
        return a.error(new ot(tt.EDGE_SOURCE_MISSING, y.value.id, y.value.source)), null;
      if (!B)
        return a.error(new ot(tt.EDGE_TARGET_MISSING, y.value.id, y.value.target)), null;
      if (!y.value || y.value.hidden || O.hidden || B.hidden)
        return null;
      let j;
      r.value === _n.Strict ? j = O.handleBounds.source : j = [...O.handleBounds.source || [], ...O.handleBounds.target || []];
      const re = Au(j, y.value.sourceHandle);
      let oe;
      r.value === _n.Strict ? oe = B.handleBounds.target : oe = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const de = Au(oe, y.value.targetHandle), pe = re?.position || ue.Bottom, xe = de?.position || ue.Top, { x: Ee, y: Be } = ur(O, re, pe), { x: Lt, y: gt } = ur(B, de, xe);
      return y.value.sourceX = Ee, y.value.sourceY = Be, y.value.targetX = Lt, y.value.targetY = gt, ze(
        "g",
        {
          ref: V,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${q.value === !1 ? "default" : y.value.type || "default"}`,
            l.value,
            R.value,
            {
              updating: S.value,
              selected: y.value.selected,
              animated: y.value.animated,
              inactive: !E.value && !_.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: P.value ? 0 : void 0,
          "aria-label": y.value.ariaLabel === null ? void 0 : y.value.ariaLabel ?? `Edge from ${y.value.source} to ${y.value.target}`,
          "aria-describedby": P.value ? `${Lf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: P.value ? "group" : "img",
          ...y.value.domAttributes,
          onClick: ae,
          onContextmenu: me,
          onDblclick: Pe,
          onMouseenter: Se,
          onMousemove: le,
          onMouseleave: we,
          onKeyDown: P.value ? I : void 0
        },
        [
          U.value ? null : ze(q.value === !1 ? d.value.default : q.value, {
            id: e.id,
            sourceNode: O,
            targetNode: B,
            source: y.value.source,
            target: y.value.target,
            type: y.value.type,
            updatable: F.value,
            selected: y.value.selected,
            animated: y.value.animated,
            label: y.value.label,
            labelStyle: y.value.labelStyle,
            labelShowBg: y.value.labelShowBg,
            labelBgStyle: y.value.labelBgStyle,
            labelBgPadding: y.value.labelBgPadding,
            labelBgBorderRadius: y.value.labelBgBorderRadius,
            data: y.value.data,
            events: { ...y.value.events, ...C },
            style: x.value,
            markerStart: `url('#${Zr(y.value.markerStart, t)}')`,
            markerEnd: `url('#${Zr(y.value.markerEnd, t)}')`,
            sourcePosition: pe,
            targetPosition: xe,
            sourceX: Ee,
            sourceY: Be,
            targetX: Lt,
            targetY: gt,
            sourceHandleId: y.value.sourceHandle,
            targetHandleId: y.value.targetHandle,
            interactionWidth: y.value.interactionWidth,
            ...H
          }),
          [
            F.value === "source" || F.value === !0 ? [
              ze(
                "g",
                {
                  onMousedown: se,
                  onMouseenter: te,
                  onMouseout: fe
                },
                ze(qu, {
                  position: pe,
                  centerX: Ee,
                  centerY: Be,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            F.value === "target" || F.value === !0 ? [
              ze(
                "g",
                {
                  onMousedown: ge,
                  onMouseenter: te,
                  onMouseout: fe
                },
                ze(qu, {
                  position: xe,
                  centerX: Lt,
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
    function te() {
      S.value = !0;
    }
    function fe() {
      S.value = !1;
    }
    function be(O, B) {
      k.update({ event: O, edge: y.value, connection: B });
    }
    function _e(O) {
      k.updateEnd({ event: O, edge: y.value }), U.value = !1;
    }
    function ne(O, B) {
      O.button === 0 && (U.value = !0, D.value = B ? y.value.target : y.value.source, M.value = (B ? y.value.targetHandle : y.value.sourceHandle) ?? null, A.value = B ? "target" : "source", k.updateStart({ event: O, edge: y.value }), Q(O));
    }
    function ae(O) {
      var B;
      const H = { event: O, edge: y.value };
      E.value && (s.value = !1, y.value.selected && b.value ? (u([y.value]), (B = V.value) == null || B.blur()) : n([y.value])), k.click(H);
    }
    function me(O) {
      k.contextMenu({ event: O, edge: y.value });
    }
    function Pe(O) {
      k.doubleClick({ event: O, edge: y.value });
    }
    function Se(O) {
      k.mouseEnter({ event: O, edge: y.value });
    }
    function le(O) {
      k.mouseMove({ event: O, edge: y.value });
    }
    function we(O) {
      k.mouseLeave({ event: O, edge: y.value });
    }
    function se(O) {
      ne(O, !0);
    }
    function ge(O) {
      ne(O, !1);
    }
    function I(O) {
      var B;
      !h.value && Uf.includes(O.key) && E.value && (O.key === "Escape" ? ((B = V.value) == null || B.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), Vx = qx, jx = Fe({
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
    } = Ve(), v = (e = mr($a)) == null ? void 0 : e["connection-line"], b = J(() => {
      var _;
      return f((_ = r.value) == null ? void 0 : _.nodeId);
    }), h = J(() => {
      var _;
      return f((_ = o.value) == null ? void 0 : _.nodeId) ?? null;
    }), p = J(() => ({
      x: (a.value.x - c.value.x) / c.value.zoom,
      y: (a.value.y - c.value.y) / c.value.zoom
    })), m = J(
      () => d.value.markerStart ? `url(#${Zr(d.value.markerStart, t)})` : ""
    ), g = J(
      () => d.value.markerEnd ? `url(#${Zr(d.value.markerEnd, t)})` : ""
    );
    return () => {
      var _, y, k;
      if (!b.value || !r.value)
        return null;
      const C = r.value.id, $ = r.value.type, w = b.value.handleBounds;
      let S = w?.[$] ?? [];
      if (n.value === _n.Loose) {
        const x = w?.[$ === "source" ? "target" : "source"] ?? [];
        S = [...S, ...x];
      }
      if (!S)
        return null;
      const U = (C ? S.find((x) => x.id === C) : S[0]) ?? null, D = U?.position ?? ue.Top, { x: M, y: A } = ur(b.value, U, D);
      let V = null;
      h.value && (n.value === _n.Strict ? V = ((_ = h.value.handleBounds[$ === "source" ? "target" : "source"]) == null ? void 0 : _.find(
        (x) => {
          var q;
          return x.id === ((q = o.value) == null ? void 0 : q.id);
        }
      )) || null : V = ((y = [...h.value.handleBounds.source ?? [], ...h.value.handleBounds.target ?? []]) == null ? void 0 : y.find(
        (x) => {
          var q;
          return x.id === ((q = o.value) == null ? void 0 : q.id);
        }
      )) || null);
      const E = ((k = o.value) == null ? void 0 : k.position) ?? (D ? Ni[D] : null);
      if (!D || !E)
        return null;
      const F = s.value ?? d.value.type ?? An.Bezier;
      let P = "";
      const R = {
        sourceX: M,
        sourceY: A,
        sourcePosition: D,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: E
      };
      return F === An.Bezier ? [P] = hl(R) : F === An.Step ? [P] = Ii({
        ...R,
        borderRadius: 0
      }) : F === An.SmoothStep ? [P] = Ii(R) : F === An.SimpleBezier ? [P] = dp(R) : P = `M${M},${A} ${p.value.x},${p.value.y}`, ze(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        ze(
          "g",
          { class: "vue-flow__connection" },
          v ? ze(v, {
            sourceX: M,
            sourceY: A,
            sourcePosition: D,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: E,
            sourceNode: b.value,
            sourceHandle: U,
            targetNode: h.value,
            targetHandle: V,
            markerEnd: g.value,
            markerStart: m.value,
            connectionStatus: u.value
          }) : ze("path", {
            d: P,
            class: [d.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...l.value,
              ...d.value.style
            },
            "marker-end": g.value,
            "marker-start": m.value
          })
        )
      );
    };
  }
}), Hx = jx, Gx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Wx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Xx = /* @__PURE__ */ Fe({
  ...Wx,
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
    return (t, n) => (z(), T("marker", {
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
      t.type === N(ra).ArrowClosed ? (z(), T("polyline", {
        key: 0,
        style: vt({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : ee("", !0),
      t.type === N(ra).Arrow ? (z(), T("polyline", {
        key: 1,
        style: vt({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : ee("", !0)
    ], 8, Gx));
  }
}), Yx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Kx = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, Zx = /* @__PURE__ */ Fe({
  ...Kx,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = Ve(), a = J(() => {
      const s = /* @__PURE__ */ new Set(), l = [], d = (u) => {
        if (u) {
          const c = Zr(u, t);
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
    return (s, l) => (z(), T("svg", Yx, [
      i("defs", null, [
        (z(!0), T(ve, null, Re(a.value, (d) => (z(), Oe(Xx, {
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
}), Jx = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, Qx = /* @__PURE__ */ Fe({
  ...Jx,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = Ve();
    return (o, a) => (z(), T(ve, null, [
      X(Zx),
      (z(!0), T(ve, null, Re(N(n), (s) => (z(), T("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: N(gb)(s, N(t), N(r)) })
      }, [
        X(N(Vx), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      X(N(Hx))
    ], 64));
  }
}), e1 = Fe({
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
      elevateNodesOnSelect: b,
      disableKeyboardA11y: h,
      ariaLiveMessage: p,
      snapToGrid: m,
      snapGrid: g,
      nodeDragThreshold: _,
      nodesDraggable: y,
      elementsSelectable: k,
      nodesConnectable: C,
      nodesFocusable: $,
      hooks: w
    } = Ve(), S = W(null);
    Fn(rp, S), Fn(np, e.id);
    const U = mr($a), D = vr(), M = ip(), { node: A, parentNode: V } = sp(e.id), { emit: E, on: F } = Mb(A, s), P = qe(() => typeof A.draggable > "u" ? y.value : A.draggable), R = qe(() => typeof A.selectable > "u" ? k.value : A.selectable), x = qe(() => typeof A.connectable > "u" ? C.value : A.connectable), q = qe(() => typeof A.focusable > "u" ? $.value : A.focusable), Q = J(
      () => R.value || P.value || w.value.nodeClick.hasListeners() || w.value.nodeDoubleClick.hasListeners() || w.value.nodeMouseEnter.hasListeners() || w.value.nodeMouseMove.hasListeners() || w.value.nodeMouseLeave.hasListeners()
    ), te = qe(() => !!A.dimensions.width && !!A.dimensions.height), fe = J(() => {
      const B = A.type || "default", H = U?.[`node-${B}`];
      if (H)
        return H;
      let j = A.template || f.value[B];
      if (typeof j == "string" && D) {
        const re = Object.keys(D.appContext.components);
        re && re.includes(B) && (j = Wd(B, !1));
      }
      return j && typeof j != "string" ? j : (s.error(new ot(tt.NODE_TYPE_MISSING, j)), !1);
    }), be = op({
      id: e.id,
      el: S,
      disabled: () => !P.value,
      selectable: R,
      dragHandle: () => A.dragHandle,
      onStart(B) {
        E.dragStart(B);
      },
      onDrag(B) {
        E.drag(B);
      },
      onStop(B) {
        E.dragStop(B);
      },
      onClick(B) {
        I(B);
      }
    }), _e = J(() => A.class instanceof Function ? A.class(A) : A.class), ne = J(() => {
      const B = (A.style instanceof Function ? A.style(A) : A.style) || {}, H = A.width instanceof Function ? A.width(A) : A.width, j = A.height instanceof Function ? A.height(A) : A.height;
      return !B.width && H && (B.width = typeof H == "string" ? H : `${H}px`), !B.height && j && (B.height = typeof j == "string" ? j : `${j}px`), B;
    }), ae = qe(() => Number(A.zIndex ?? ne.value.zIndex ?? 0));
    return c((B) => {
      (B.includes(e.id) || !B.length) && Pe();
    }), Ke(() => {
      Ie(
        () => A.hidden,
        (B = !1, H, j) => {
          !B && S.value && (e.resizeObserver.observe(S.value), j(() => {
            S.value && e.resizeObserver.unobserve(S.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Ie([() => A.type, () => A.sourcePosition, () => A.targetPosition], () => {
      ln(() => {
        u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
      });
    }), Ie(
      [
        () => A.position.x,
        () => A.position.y,
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
        ae,
        () => A.selected,
        () => A.dimensions.height,
        () => A.dimensions.width,
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.dimensions.height;
        },
        () => {
          var B;
          return (B = V.value) == null ? void 0 : B.dimensions.width;
        }
      ],
      ([B, H, j, re, oe, de]) => {
        const pe = {
          x: B,
          y: H,
          z: de + (b.value && A.selected ? 1e3 : 0)
        };
        typeof j < "u" && typeof re < "u" ? A.computedPosition = db({ x: j, y: re, z: oe }, pe) : A.computedPosition = pe;
      },
      { flush: "post", immediate: !0 }
    ), Ie([() => A.extent, v], ([B, H], [j, re]) => {
      (B !== j || H !== re) && me();
    }), A.extent === "parent" || typeof A.extent == "object" && "range" in A.extent && A.extent.range === "parent" ? ki(() => te).toBe(!0).then(me) : me(), () => A.hidden ? null : ze(
      "div",
      {
        ref: S,
        "data-id": A.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${fe.value === !1 ? "default" : A.type || "default"}`,
          {
            [n.value]: P.value,
            dragging: be?.value,
            draggable: P.value,
            selected: A.selected,
            selectable: R.value,
            parent: A.isParent
          },
          _e.value
        ],
        style: {
          visibility: te.value ? "visible" : "hidden",
          zIndex: A.computedPosition.z ?? ae.value,
          transform: `translate(${A.computedPosition.x}px,${A.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...ne.value
        },
        tabIndex: q.value ? 0 : void 0,
        role: q.value ? "group" : void 0,
        "aria-describedby": h.value ? void 0 : `${Bf}-${t}`,
        "aria-label": A.ariaLabel,
        "aria-roledescription": "node",
        ...A.domAttributes,
        onMouseenter: Se,
        onMousemove: le,
        onMouseleave: we,
        onContextmenu: se,
        onClick: I,
        onDblclick: ge,
        onKeydown: O
      },
      [
        ze(fe.value === !1 ? f.value.default : fe.value, {
          id: A.id,
          type: A.type,
          data: A.data,
          events: { ...A.events, ...F },
          selected: A.selected,
          resizing: A.resizing,
          dragging: be.value,
          connectable: x.value,
          position: A.computedPosition,
          dimensions: A.dimensions,
          isValidTargetPos: A.isValidTargetPos,
          isValidSourcePos: A.isValidSourcePos,
          parent: A.parentNode,
          parentNodeId: A.parentNode,
          zIndex: A.computedPosition.z ?? ae.value,
          targetPosition: A.targetPosition,
          sourcePosition: A.sourcePosition,
          label: A.label,
          dragHandle: A.dragHandle,
          onUpdateNodeInternals: Pe
        })
      ]
    );
    function me() {
      const B = A.computedPosition, { computedPosition: H, position: j } = fl(
        A,
        m.value ? za(B, g.value) : B,
        s.error,
        v.value,
        V.value
      );
      (A.computedPosition.x !== H.x || A.computedPosition.y !== H.y) && (A.computedPosition = { ...A.computedPosition, ...H }), (A.position.x !== j.x || A.position.y !== j.y) && (A.position = j);
    }
    function Pe() {
      S.value && u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
    }
    function Se(B) {
      be?.value || E.mouseEnter({ event: B, node: A });
    }
    function le(B) {
      be?.value || E.mouseMove({ event: B, node: A });
    }
    function we(B) {
      be?.value || E.mouseLeave({ event: B, node: A });
    }
    function se(B) {
      return E.contextMenu({ event: B, node: A });
    }
    function ge(B) {
      return E.doubleClick({ event: B, node: A });
    }
    function I(B) {
      R.value && (!r.value || !P.value || _.value > 0) && Ri(
        A,
        a.value,
        d,
        l,
        o,
        !1,
        S.value
      ), E.click({ event: B, node: A });
    }
    function O(B) {
      if (!(Oi(B) || h.value))
        if (Uf.includes(B.key) && R.value) {
          const H = B.key === "Escape";
          Ri(
            A,
            a.value,
            d,
            l,
            o,
            H,
            S.value
          );
        } else P.value && A.selected && or[B.key] && (B.preventDefault(), p.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~A.position.x}, y: ${~~A.position.y}`, M(
          {
            x: or[B.key].x,
            y: or[B.key].y
          },
          B.shiftKey
        ));
    }
  }
}), t1 = e1, n1 = {
  height: "0",
  width: "0"
}, r1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, o1 = /* @__PURE__ */ Fe({
  ...r1,
  setup(e) {
    const { viewportRef: t } = Ve(), n = qe(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (z(), T("svg", null, [
      (z(), T("foreignObject", n1, [
        (z(), Oe(Gd, {
          to: n.value,
          disabled: !n.value
        }, [
          Ye(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function a1(e = { includeHiddenNodes: !1 }) {
  const { nodes: t } = Ve();
  return J(() => {
    if (t.value.length === 0)
      return !1;
    for (const n of t.value)
      if ((e.includeHiddenNodes || !n.hidden) && (n?.handleBounds === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
        return !1;
    return !0;
  });
}
const s1 = { class: "vue-flow__nodes vue-flow__container" }, i1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, l1 = /* @__PURE__ */ Fe({
  ...i1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = Ve(), o = a1(), a = W();
    return Ie(
      o,
      (s) => {
        s && ln(() => {
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
        ln(() => n(l));
      });
    }), ya(() => {
      var s;
      return (s = a.value) == null ? void 0 : s.disconnect();
    }), (s, l) => (z(), T("div", s1, [
      a.value ? (z(!0), T(ve, { key: 0 }, Re(N(t), (d, u, c, f) => {
        const v = [d.id];
        if (f && f.key === d.id && dh(f, v))
          return f;
        const b = (z(), Oe(N(t1), {
          id: d.id,
          key: d.id,
          "resize-observer": a.value
        }, null, 8, ["id", "resize-observer"]));
        return b.memo = v, b;
      }, l, 0), 128)) : ee("", !0)
    ]));
  }
});
function u1() {
  const { emits: e } = Ve();
  Ke(() => {
    if (tp()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new ot(tt.MISSING_STYLES));
    }
  });
}
const c1 = /* @__PURE__ */ i("div", { class: "vue-flow__edge-labels" }, null, -1), d1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, f1 = /* @__PURE__ */ Fe({
  ...d1,
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
    const r = e, o = lh(), a = ts(r, "modelValue", n), s = ts(r, "nodes", n), l = ts(r, "edges", n), d = Ve(r), u = Lb({ modelValue: a, nodes: s, edges: l }, r, d);
    return qb(n, d.hooks), Bx(), u1(), Fn($a, o), tl(u), t(d), (c, f) => (z(), T("div", {
      ref: N(d).vueFlowRef,
      class: "vue-flow"
    }, [
      X(Nx, null, {
        default: rt(() => [
          X(Qx),
          c1,
          X(l1),
          Ye(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Ye(c.$slots, "default"),
      X(Fx)
    ], 512));
  }
}), p1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, h1 = /* @__PURE__ */ Fe({
  ...p1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = Ve(), r = J(() => `${t.position}`.split("-"));
    return (o, a) => (z(), T("div", {
      class: Z(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: N(n) ? "none" : "all" })
    }, [
      Ye(o.$slots, "default")
    ], 6));
  }
});
var sn = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(sn || {});
const pp = function({ dimensions: e, size: t, color: n }) {
  return ze("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, hp = function({ radius: e, color: t }) {
  return ze("circle", { cx: e, cy: e, r: e, fill: t });
};
sn.Lines + "", sn.Dots + "";
const m1 = {
  [sn.Dots]: "#81818a",
  [sn.Lines]: "#eee"
}, v1 = ["id", "x", "y", "width", "height", "patternTransform"], g1 = {
  key: 2,
  height: "100",
  width: "100"
}, y1 = ["fill"], b1 = ["x", "y", "fill"], x1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, w1 = /* @__PURE__ */ Fe({
  ...x1,
  props: {
    id: {},
    variant: { default: () => sn.Dots },
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
    const { id: t, viewport: n } = Ve(), r = J(() => {
      const s = n.value.zoom, [l, d] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * s || 1, d * s || 1], c = e.size * s, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], b = [f * s || 1 + u[0] / 2, v * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: b,
        size: c
      };
    }), o = qe(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = qe(() => e.color || e.patternColor || m1[e.variant || sn.Dots]);
    return (s, l) => (z(), T("svg", {
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
            s.variant === N(sn).Lines ? (z(), Oe(N(pp), {
              key: 0,
              size: s.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === N(sn).Dots ? (z(), Oe(N(hp), {
              key: 1,
              color: a.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : ee("", !0),
            s.bgColor ? (z(), T("svg", g1, [
              i("rect", {
                width: "100%",
                height: "100%",
                fill: s.bgColor
              }, null, 8, y1)
            ])) : ee("", !0)
          ])
        ], 8, v1)
      ]),
      i("rect", {
        x: s.x,
        y: s.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, b1),
      Ye(s.$slots, "default", { id: o.value })
    ], 4));
  }
}), _1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, k1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, S1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function E1(e, t, n, r, o, a) {
  return z(), T("button", S1, [
    Ye(e.$slots, "default")
  ]);
}
const zo = /* @__PURE__ */ k1(_1, [["render", E1]]), z1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, $1 = /* @__PURE__ */ i("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), P1 = [
  $1
];
function C1(e, t) {
  return z(), T("svg", z1, P1);
}
const A1 = { render: C1 }, T1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, O1 = /* @__PURE__ */ i("path", { d: "M0 0h32v4.2H0z" }, null, -1), N1 = [
  O1
];
function R1(e, t) {
  return z(), T("svg", T1, N1);
}
const I1 = { render: R1 }, M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, D1 = /* @__PURE__ */ i("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), F1 = [
  D1
];
function B1(e, t) {
  return z(), T("svg", M1, F1);
}
const L1 = { render: B1 }, U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, q1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), V1 = [
  q1
];
function j1(e, t) {
  return z(), T("svg", U1, V1);
}
const H1 = { render: j1 }, G1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, W1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), X1 = [
  W1
];
function Y1(e, t) {
  return z(), T("svg", G1, X1);
}
const K1 = { render: Y1 }, Z1 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, J1 = /* @__PURE__ */ Fe({
  ...Z1,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Ff.BottomLeft }
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
    } = Ve(), v = qe(() => n.value || r.value || o.value), b = qe(() => u.value.zoom <= c.value), h = qe(() => u.value.zoom >= f.value);
    function p() {
      s(), t("zoomIn");
    }
    function m() {
      l(), t("zoomOut");
    }
    function g() {
      d(e.fitViewParams), t("fitView");
    }
    function _() {
      a(!v.value), t("interactionChange", !v.value);
    }
    return (y, k) => (z(), Oe(N(h1), {
      class: "vue-flow__controls",
      position: y.position
    }, {
      default: rt(() => [
        Ye(y.$slots, "top"),
        y.showZoom ? (z(), T(ve, { key: 0 }, [
          Ye(y.$slots, "control-zoom-in", {}, () => [
            X(zo, {
              class: "vue-flow__controls-zoomin",
              disabled: h.value,
              onClick: p
            }, {
              default: rt(() => [
                Ye(y.$slots, "icon-zoom-in", {}, () => [
                  (z(), Oe(Ot(N(A1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Ye(y.$slots, "control-zoom-out", {}, () => [
            X(zo, {
              class: "vue-flow__controls-zoomout",
              disabled: b.value,
              onClick: m
            }, {
              default: rt(() => [
                Ye(y.$slots, "icon-zoom-out", {}, () => [
                  (z(), Oe(Ot(N(I1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : ee("", !0),
        y.showFitView ? Ye(y.$slots, "control-fit-view", { key: 1 }, () => [
          X(zo, {
            class: "vue-flow__controls-fitview",
            onClick: g
          }, {
            default: rt(() => [
              Ye(y.$slots, "icon-fit-view", {}, () => [
                (z(), Oe(Ot(N(L1))))
              ])
            ]),
            _: 3
          })
        ]) : ee("", !0),
        y.showInteractive ? Ye(y.$slots, "control-interactive", { key: 2 }, () => [
          y.showInteractive ? (z(), Oe(zo, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: _
          }, {
            default: rt(() => [
              v.value ? Ye(y.$slots, "icon-unlock", { key: 0 }, () => [
                (z(), Oe(Ot(N(K1))))
              ]) : ee("", !0),
              v.value ? ee("", !0) : Ye(y.$slots, "icon-lock", { key: 1 }, () => [
                (z(), Oe(Ot(N(H1))))
              ])
            ]),
            _: 3
          })) : ee("", !0)
        ]) : ee("", !0),
        Ye(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), Q1 = {
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
    const n = e, r = t, o = J(() => hl({
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
    }), d = J(() => ({
      stroke: l.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, c) => (z(), T(ve, null, [
      X(N(so), {
        id: e.id,
        path: o.value[0],
        style: vt(d.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      X(N(o1), null, {
        default: rt(() => [
          i("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(a.value)
          }, [
            l.value.label ? (z(), T("span", {
              key: 0,
              class: Z(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, L(l.value.label), 3)) : ee("", !0),
            i("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: c[0] || (c[0] = nn((f) => r("remove", e.id), ["stop"]))
            }, [
              X(N(At), { class: "h-2.5 w-2.5" })
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, Mn = [
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
function Bo(e) {
  return Mn.find((t) => t.eventClass === e)?.label || e || "—";
}
const mp = [
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
], ew = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], tw = [
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
], nw = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], rw = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], vp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "has_order_bumps", label: "➕ Comprou Order Bump? (Sim/Não)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], gp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], yp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], ow = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Cn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function bp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Cn[t] || 1)));
}
function aw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Cn.days === 0 ? { value: t / Cn.days, unit: "days" } : t > 0 && t % Cn.hours === 0 ? { value: t / Cn.hours, unit: "hours" } : t > 0 && t % Cn.minutes === 0 ? { value: t / Cn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const sw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function ia(e) {
  return sw[e] || "minutos";
}
function bn(e) {
  return ew.find((t) => t.type === e)?.label || e;
}
function xp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "" } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400 } : {};
}
function wp(e) {
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
function _p(e) {
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
const kp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, iw = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, lw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, uw = { class: "space-y-4" }, cw = ["value"], dw = ["value"], fw = { key: 0 }, pw = { key: 1 }, hw = ["value"], mw = { class: "mt-2 flex flex-wrap gap-1.5" }, vw = ["title", "onClick"], gw = { key: 0 }, yw = ["accept", "disabled"], bw = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, xw = { key: 2 }, ww = ["disabled"], _w = { class: "space-y-2" }, kw = ["onUpdate:modelValue"], Sw = ["value"], Ew = ["onUpdate:modelValue"], zw = ["onUpdate:modelValue"], $w = ["value"], Pw = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], Aw = ["onUpdate:modelValue"], Tw = ["onUpdate:modelValue"], Ow = ["onUpdate:modelValue"], Nw = ["onClick"], Rw = { class: "grid grid-cols-2 gap-2" }, Iw = { class: "space-y-3" }, Mw = ["onUpdate:modelValue"], Dw = ["onUpdate:modelValue"], Fw = ["onUpdate:modelValue"], Bw = ["onClick"], Lw = ["onClick"], Uw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, qw = ["onClick"], Vw = { class: "grid grid-cols-2 gap-2" }, jw = { class: "space-y-2" }, Hw = ["onUpdate:modelValue", "placeholder"], Gw = ["onClick"], Ww = ["max"], Xw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Te = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", Sp = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => mp }
  },
  setup(e) {
    const t = e, n = W(!1), r = W(""), o = W([]), a = W("list"), s = ($) => ["image", "video", "audio", "document"].includes($), l = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function d($, w) {
      t.data[$] = `${t.data[$] || ""}${w}`;
    }
    async function u($, w = "media_url", S = "mime_type") {
      const U = $.target.files?.[0];
      if (U) {
        n.value = !0, r.value = "";
        try {
          const D = await Ae.uploadMedia(U);
          t.data[w] = D.url, S && (t.data[S] = D.mime_type);
        } catch (D) {
          r.value = D.message;
        } finally {
          n.value = !1, $.target.value = "";
        }
      }
    }
    const c = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, v = ($) => {
      t.data.buttons = c.value.filter((w, S) => S !== $);
    }, b = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), h = () => {
      t.data.sections = [...b.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = ($) => {
      t.data.sections = b.value.filter((w, S) => S !== $);
    }, m = ($) => {
      $.rows = [...$.rows || [], { title: "", description: "" }];
    }, g = ($, w) => {
      $.rows = ($.rows || []).filter((S, U) => U !== w);
    }, _ = J(() => Array.isArray(t.data.options) ? t.data.options : []), y = () => {
      t.data.options = [..._.value, ""];
    }, k = ($) => {
      t.data.options = _.value.filter((w, S) => S !== $);
    };
    async function C() {
      try {
        o.value = (await Ae.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && C();
    }), ($, w) => (z(), T("div", uw, [
      i("div", null, [
        i("label", {
          class: Z(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ie(i("select", {
          id: "zr-mode",
          "onUpdate:modelValue": w[0] || (w[0] = (S) => e.data.mode = S),
          class: Z(Te)
        }, [
          (z(!0), T(ve, null, Re(N(tw), (S) => (z(), T("option", {
            key: S.value,
            value: S.value
          }, L(S.label), 9, cw))), 128))
        ], 512), [
          [lt, e.data.mode]
        ])
      ]),
      e.showRecipient ? (z(), T(ve, { key: 0 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          ie(i("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": w[1] || (w[1] = (S) => e.data.recipient_type = S),
            class: Z(Te)
          }, [
            (z(!0), T(ve, null, Re(N(ow), (S) => (z(), T("option", {
              key: S.value,
              value: S.value
            }, L(S.label), 9, dw))), 128))
          ], 512), [
            [lt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (z(), T("div", fw, [
          i("label", {
            class: Z(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          ie(i("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": w[2] || (w[2] = (S) => e.data.custom_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: Z(Te)
          }, null, 512), [
            [
              ye,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (z(), T("div", pw, [
          i("label", {
            class: Z(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? ie((z(), T("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": w[3] || (w[3] = (S) => e.data.group_id = S),
            class: Z(Te)
          }, [
            w[30] || (w[30] = i("option", { value: "" }, "Selecione o grupo…", -1)),
            (z(!0), T(ve, null, Re(o.value, (S) => (z(), T("option", {
              key: S.id,
              value: S.id
            }, L(S.name), 9, hw))), 128))
          ], 512)), [
            [lt, e.data.group_id]
          ]) : ie((z(), T("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": w[4] || (w[4] = (S) => e.data.group_id = S),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: Z(Te)
          }, null, 512)), [
            [
              ye,
              e.data.group_id,
              void 0,
              { trim: !0 }
            ]
          ]),
          i("button", {
            type: "button",
            class: "mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: w[5] || (w[5] = (S) => a.value = a.value === "list" ? "manual" : "list")
          }, L(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : ee("", !0)
      ], 64)) : ee("", !0),
      e.data.mode === "text" || s(e.data.mode) ? (z(), T(ve, { key: 1 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-text"
          }, L(s(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ie(i("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": w[6] || (w[6] = (S) => e.data.text = S),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: Z([Te, "font-mono leading-relaxed"])
          }, null, 2), [
            [ye, e.data.text]
          ]),
          i("div", mw, [
            (z(!0), T(ve, null, Re(e.variables, (S) => (z(), T("button", {
              key: S.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: S.label,
              onClick: (U) => d("text", S.token)
            }, L(S.token), 9, vw))), 128))
          ])
        ]),
        s(e.data.mode) ? (z(), T("div", gw, [
          i("label", {
            class: Z(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          ie(i("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": w[7] || (w[7] = (S) => e.data.media_url = S),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: Z(Te)
          }, null, 512), [
            [
              ye,
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
          }, null, 40, yw),
          n.value ? (z(), T("p", bw, "Enviando arquivo…")) : ee("", !0)
        ])) : ee("", !0)
      ], 64)) : e.data.mode === "sticker" ? (z(), T("div", xw, [
        i("label", {
          class: Z(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ie(i("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": w[8] || (w[8] = (S) => e.data.media_url = S),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: Z(Te)
        }, null, 512), [
          [
            ye,
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
        }, null, 40, ww)
      ])) : e.data.mode === "buttons" ? (z(), T(ve, { key: 3 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-title"
          }, "Título"),
          ie(i("input", {
            id: "zr-title",
            "onUpdate:modelValue": w[9] || (w[9] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          ie(i("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": w[10] || (w[10] = (S) => e.data.text = S),
            rows: "3",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          ie(i("input", {
            id: "zr-footer",
            "onUpdate:modelValue": w[11] || (w[11] = (S) => e.data.footer = S),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.footer]
          ])
        ]),
        i("div", _w, [
          i("label", {
            class: Z(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (z(!0), T(ve, null, Re(c.value, (S, U) => (z(), T("div", {
            key: U,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ie(i("select", {
              "onUpdate:modelValue": (D) => S.type = D,
              class: Z(Te)
            }, [
              (z(!0), T(ve, null, Re(N(nw), (D) => (z(), T("option", {
                key: D.value,
                value: D.value
              }, L(D.label), 9, Sw))), 128))
            ], 8, kw), [
              [lt, S.type]
            ]),
            S.type === "pix" ? (z(), T(ve, { key: 0 }, [
              ie(i("input", {
                "onUpdate:modelValue": (D) => S.name = D,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: Z(Te)
              }, null, 8, Ew), [
                [ye, S.name]
              ]),
              ie(i("select", {
                "onUpdate:modelValue": (D) => S.keyType = D,
                class: Z(Te)
              }, [
                w[31] || (w[31] = i("option", { value: "" }, "Tipo de chave PIX", -1)),
                (z(!0), T(ve, null, Re(N(rw), (D) => (z(), T("option", {
                  key: D.value,
                  value: D.value
                }, L(D.label), 9, $w))), 128))
              ], 8, zw), [
                [lt, S.keyType]
              ]),
              ie(i("input", {
                "onUpdate:modelValue": (D) => S.key = D,
                type: "text",
                placeholder: "Chave PIX",
                class: Z(Te)
              }, null, 8, Pw), [
                [
                  ye,
                  S.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              w[32] || (w[32] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (z(), T(ve, { key: 1 }, [
              ie(i("input", {
                "onUpdate:modelValue": (D) => S.displayText = D,
                type: "text",
                placeholder: "Texto do botão",
                class: Z(Te)
              }, null, 8, Cw), [
                [ye, S.displayText]
              ]),
              S.type === "url" ? ie((z(), T("input", {
                key: 0,
                "onUpdate:modelValue": (D) => S.url = D,
                type: "url",
                placeholder: "https://…",
                class: Z(Te)
              }, null, 8, Aw)), [
                [
                  ye,
                  S.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : ee("", !0),
              S.type === "call" ? ie((z(), T("input", {
                key: 1,
                "onUpdate:modelValue": (D) => S.phoneNumber = D,
                type: "text",
                placeholder: "+5511999998888",
                class: Z(Te)
              }, null, 8, Tw)), [
                [
                  ye,
                  S.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : ee("", !0),
              S.type === "copy" ? ie((z(), T("input", {
                key: 2,
                "onUpdate:modelValue": (D) => S.copyCode = D,
                type: "text",
                placeholder: "Código a copiar",
                class: Z(Te)
              }, null, 8, Ow)), [
                [
                  ye,
                  S.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : ee("", !0)
            ], 64)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => v(U)
            }, "Remover botão", 8, Nw)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (z(), T(ve, { key: 4 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-list-title"
          }, "Título"),
          ie(i("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": w[12] || (w[12] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Nossos planos",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          ie(i("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": w[13] || (w[13] = (S) => e.data.text = S),
            rows: "3",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", Rw, [
          i("div", null, [
            i("label", {
              class: Z(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            ie(i("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": w[14] || (w[14] = (S) => e.data.footer = S),
              type: "text",
              class: Z(Te)
            }, null, 512), [
              [ye, e.data.footer]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: Z(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            ie(i("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": w[15] || (w[15] = (S) => e.data.button_text = S),
              type: "text",
              placeholder: "Ver Menu",
              class: Z(Te)
            }, null, 512), [
              [ye, e.data.button_text]
            ])
          ])
        ]),
        i("div", Iw, [
          i("label", {
            class: Z(Ue)
          }, "Seções"),
          (z(!0), T(ve, null, Re(b.value, (S, U) => (z(), T("div", {
            key: U,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ie(i("input", {
              "onUpdate:modelValue": (D) => S.title = D,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: Z(Te)
            }, null, 8, Mw), [
              [ye, S.title]
            ]),
            (z(!0), T(ve, null, Re(S.rows, (D, M) => (z(), T("div", {
              key: M,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ie(i("input", {
                "onUpdate:modelValue": (A) => D.title = A,
                type: "text",
                placeholder: "Título da opção",
                class: Z(Te)
              }, null, 8, Dw), [
                [ye, D.title]
              ]),
              ie(i("input", {
                "onUpdate:modelValue": (A) => D.description = A,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: Z(Te)
              }, null, 8, Fw), [
                [ye, D.description]
              ]),
              i("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (A) => g(S, M)
              }, "Remover opção", 8, Bw)
            ]))), 128)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (D) => m(S)
            }, "+ Adicionar opção", 8, Lw),
            i("div", Uw, [
              i("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (D) => p(U)
              }, "Remover seção", 8, qw)
            ])
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: h
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (z(), T(ve, { key: 5 }, [
        i("div", Vw, [
          i("div", null, [
            i("label", {
              class: Z(Ue),
              for: "zr-lat"
            }, "Latitude"),
            ie(i("input", {
              id: "zr-lat",
              "onUpdate:modelValue": w[16] || (w[16] = (S) => e.data.latitude = S),
              type: "text",
              placeholder: "-23.5505",
              class: Z(Te)
            }, null, 512), [
              [ye, e.data.latitude]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: Z(Ue),
              for: "zr-lng"
            }, "Longitude"),
            ie(i("input", {
              id: "zr-lng",
              "onUpdate:modelValue": w[17] || (w[17] = (S) => e.data.longitude = S),
              type: "text",
              placeholder: "-46.6333",
              class: Z(Te)
            }, null, 512), [
              [ye, e.data.longitude]
            ])
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          ie(i("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": w[18] || (w[18] = (S) => e.data.location_name = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.location_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          ie(i("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": w[19] || (w[19] = (S) => e.data.address = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (z(), T(ve, { key: 6 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          ie(i("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": w[20] || (w[20] = (S) => e.data.contact_name = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.contact_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          ie(i("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": w[21] || (w[21] = (S) => e.data.contact_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.contact_phone]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ie(i("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": w[22] || (w[22] = (S) => e.data.organization = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (z(), T(ve, { key: 7 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          ie(i("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": w[23] || (w[23] = (S) => e.data.question = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.question]
          ])
        ]),
        i("div", jw, [
          i("label", {
            class: Z(Ue)
          }, "Opções (mínimo 2)"),
          (z(!0), T(ve, null, Re(_.value, (S, U) => (z(), T("div", {
            key: U,
            class: "flex gap-2"
          }, [
            ie(i("input", {
              "onUpdate:modelValue": (D) => _.value[U] = D,
              type: "text",
              class: Z(Te),
              placeholder: `Opção ${U + 1}`
            }, null, 8, Hw), [
              [ye, _.value[U]]
            ]),
            _.value.length > 2 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => k(U)
            }, "✕", 8, Gw)) : ee("", !0)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: y
          }, "+ Adicionar opção")
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ie(i("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": w[24] || (w[24] = (S) => e.data.max_answers = S),
            type: "number",
            min: "1",
            max: _.value.length,
            class: Z(Te)
          }, null, 8, Ww), [
            [
              ye,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (z(), T(ve, { key: 8 }, [
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-link-url"
          }, "URL"),
          ie(i("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": w[25] || (w[25] = (S) => e.data.url = S),
            type: "url",
            placeholder: "https://…",
            class: Z(Te)
          }, null, 512), [
            [
              ye,
              e.data.url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          ie(i("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": w[26] || (w[26] = (S) => e.data.title = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ie(i("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": w[27] || (w[27] = (S) => e.data.description = S),
            type: "text",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.description]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ie(i("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": w[28] || (w[28] = (S) => e.data.image_url = S),
            type: "url",
            class: Z(Te)
          }, null, 512), [
            [
              ye,
              e.data.image_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: Z(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ie(i("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": w[29] || (w[29] = (S) => e.data.text = S),
            rows: "3",
            class: Z(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ])
      ], 64)) : ee("", !0),
      r.value ? (z(), T("p", Xw, L(r.value), 1)) : ee("", !0)
    ]));
  }
}, Ep = {
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
}, Yw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Kw(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Mi(e, t = Ep) {
  return e ? e.replace(Yw, (n, r) => {
    const o = Kw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const Zw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, Jw = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, Qw = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, e_ = { class: "text-xs" }, t_ = { class: "font-bold text-white" }, n_ = { class: "my-4 flex justify-end" }, r_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, o_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, a_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, vl = {
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
      return a?.trim() ? Mi(a) : "Sua mensagem aparece aqui…";
    }), o = J(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (a, s) => (z(), T("div", Zw, [
      i("div", Jw, [
        i("div", Qw, L(n.value), 1),
        i("div", e_, [
          i("div", t_, L(e.recipientName || "Cliente"), 1),
          s[0] || (s[0] = i("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      i("div", n_, [
        i("div", r_, [
          o.value ? (z(), T("span", o_, L(o.value), 1)) : ee("", !0),
          Ce(" " + L(r.value) + " ", 1),
          i("div", a_, [
            s[1] || (s[1] = i("span", null, "12:00", -1)),
            X(N(xi), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      s[2] || (s[2] = i("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, s_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, i_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, l_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, u_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, c_ = {
  key: 0,
  class: "space-y-4 p-4"
}, d_ = ["value"], f_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, p_ = {
  key: 0,
  class: "p-4"
}, h_ = {
  key: 1,
  class: "p-4"
}, m_ = {
  key: 2,
  class: "space-y-1 p-4"
}, v_ = { class: "flex gap-2" }, g_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, y_ = {
  key: 3,
  class: "space-y-4 p-4"
}, b_ = ["value"], x_ = { key: 0 }, w_ = ["value"], __ = { key: 1 }, k_ = ["value"], S_ = { key: 2 }, E_ = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, z_ = {
  key: 4,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, $_ = {
  key: 4,
  class: "space-y-1 p-4"
}, P_ = { class: "flex gap-2" }, C_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, A_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, T_ = {
  key: 1,
  class: "space-y-4 p-4"
}, O_ = { class: "flex items-start justify-between gap-2" }, N_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, R_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, en = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Pn = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", I_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W("config");
    let a = null, s = null;
    Ie(
      () => [n.node?.id, n.node?.data?.mode],
      ([d, u]) => {
        d === void 0 || u === void 0 || (d === a && u !== s && Object.assign(n.node.data, wp(u)), a = d, s = u);
      },
      { immediate: !0 }
    ), Ie(
      () => n.node,
      (d) => {
        if (!["delay", "wait_reply"].includes(d?.type) || d.data.delay_value) return;
        const { value: u, unit: c } = aw(d.data.seconds || 0);
        d.data.delay_value = u, d.data.delay_unit = c;
      },
      { immediate: !0 }
    ), Ie(() => n.node?.id, () => {
      o.value = "config";
    });
    function l() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = bp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (d, u) => (z(), T("aside", s_, [
      e.node ? (z(), T(ve, { key: 0 }, [
        i("div", i_, [
          i("div", null, [
            i("h3", l_, L(N(bn)(e.node.type)), 1),
            i("p", u_, L(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (c) => r("remove-node", e.node.id))
          }, [
            X(N(Yo), { class: "h-3 w-3" }),
            u[12] || (u[12] = Ce(" Excluir ", -1))
          ])) : ee("", !0)
        ]),
        e.node.type === "trigger" ? (z(), T("div", c_, [
          i("div", null, [
            i("label", {
              class: Z(Pn)
            }, "Evento"),
            i("input", {
              class: Z([en, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, d_),
            u[13] || (u[13] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (z(), T(ve, { key: 1 }, [
          i("div", f_, [
            i("button", {
              type: "button",
              class: Z(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (c) => o.value = "config")
            }, " Configurar ", 2),
            i("button", {
              type: "button",
              class: Z(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (c) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (z(), T("div", p_, [
            X(vl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": N(Ep).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (z(), T("div", h_, [
            X(Sp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (z(), T("div", m_, [
          i("label", {
            class: Z(Pn),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          i("div", v_, [
            ie(i("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: Z(en),
              onChange: l
            }, null, 544), [
              [
                ye,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ie(i("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (c) => e.node.data.delay_unit = c),
              class: Z(en),
              onChange: l
            }, [...u[14] || (u[14] = [
              i("option", { value: "seconds" }, "Segundos", -1),
              i("option", { value: "minutes" }, "Minutos", -1),
              i("option", { value: "hours" }, "Horas", -1),
              i("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [lt, e.node.data.delay_unit]
            ])
          ]),
          i("p", g_, " Aguarda " + L(e.node.data.delay_value || 0) + " " + L(N(ia)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (z(), T("div", y_, [
          i("div", null, [
            i("label", {
              class: Z(Pn),
              for: "zr-kind"
            }, "Regra de validação"),
            ie(i("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (c) => e.node.data.kind = c),
              class: Z(en)
            }, [
              (z(!0), T(ve, null, Re(N(vp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, L(c.label), 9, b_))), 128))
            ], 512), [
              [lt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (z(), T("div", x_, [
            i("label", {
              class: Z(Pn),
              for: "zr-order-status"
            }, "Status esperado"),
            ie(i("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (c) => e.node.data.value = c),
              class: Z(en)
            }, [
              (z(!0), T(ve, null, Re(N(gp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, L(c.label), 9, w_))), 128))
            ], 512), [
              [lt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (z(), T("div", __, [
            i("label", {
              class: Z(Pn),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ie(i("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (c) => e.node.data.value = c),
              class: Z(en)
            }, [
              (z(!0), T(ve, null, Re(N(yp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, L(c.label), 9, k_))), 128))
            ], 512), [
              [lt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (z(), T("div", S_, [
            i("label", {
              class: Z(Pn),
              for: "zr-value"
            }, "Classe do evento"),
            ie(i("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: Z(en)
            }, null, 512), [
              [
                ye,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : ee("", !0),
          e.node.data.kind === "order_is_paid" ? (z(), T("p", E_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (z(), T("p", z_, [...u[15] || (u[15] = [
            Ce(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            Ce(" se houver bumps, ou ", -1),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            Ce(" se comprou apenas o produto principal. ", -1)
          ])])) : ee("", !0),
          u[16] || (u[16] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Ce(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            Ce(" e outra do ponto "),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            Ce(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (z(), T("div", $_, [
          i("label", {
            class: Z(Pn),
            for: "zr-wait-value"
          }, "Tempo máximo de espera"),
          i("div", P_, [
            ie(i("input", {
              id: "zr-wait-value",
              "onUpdate:modelValue": u[9] || (u[9] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: Z(en),
              onChange: l
            }, null, 544), [
              [
                ye,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ie(i("select", {
              "onUpdate:modelValue": u[10] || (u[10] = (c) => e.node.data.delay_unit = c),
              class: Z(en),
              onChange: l
            }, [...u[17] || (u[17] = [
              i("option", { value: "seconds" }, "Segundos", -1),
              i("option", { value: "minutes" }, "Minutos", -1),
              i("option", { value: "hours" }, "Horas", -1),
              i("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [lt, e.node.data.delay_unit]
            ])
          ]),
          i("p", C_, " Espera até " + L(e.node.data.delay_value || 0) + " " + L(N(ia)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente. ", 1),
          u[18] || (u[18] = i("p", { class: "mt-3 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Ce(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            Ce(" (o cliente mandou uma mensagem) e outra do ponto "),
            i("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            Ce(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (z(), T("p", A_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (z(), T("div", T_, [
        i("div", O_, [
          i("div", null, [
            u[19] || (u[19] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            i("p", N_, L(e.edge.source) + " → " + L(e.edge.target), 1)
          ]),
          i("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[11] || (u[11] = (c) => r("remove-edge", e.edge.id))
          }, [
            X(N(Yo), { class: "h-3 w-3" }),
            u[20] || (u[20] = Ce(" Excluir ", -1))
          ])
        ]),
        u[21] || (u[21] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (z(), T("p", R_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, M_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, D_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, F_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, B_ = { class: "flex items-center gap-2" }, L_ = { class: "mt-6 space-y-4" }, U_ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, q_ = { class: "mt-2.5 flex items-center gap-2" }, V_ = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, j_ = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, H_ = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, G_ = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, W_ = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, X_ = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, Y_ = { class: "flex items-center gap-3" }, K_ = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, Z_ = { class: "flex items-center gap-2" }, J_ = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, Q_ = {
  key: 0,
  class: "flex justify-center my-1"
}, e2 = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, t2 = {
  key: 1,
  class: "flex justify-start"
}, n2 = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, r2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, o2 = {
  key: 2,
  class: "flex justify-end"
}, a2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, s2 = { class: "leading-relaxed" }, i2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, l2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, u2 = ["disabled", "placeholder"], c2 = ["disabled"], d2 = {
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
    const s = W(!1), l = W(""), d = W(!1), u = W(null);
    J(() => n.nodes.find((y) => y.id === o.value));
    function c() {
      const y = /* @__PURE__ */ new Date();
      return `${String(y.getHours()).padStart(2, "0")}:${String(y.getMinutes()).padStart(2, "0")}`;
    }
    function f() {
      a.value = [], s.value = !1, u.value = null, l.value = "";
      const y = n.nodes.find((k) => k.type === "trigger");
      if (!y) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: c()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${y.data?.event_class || "Evento do Fluxo"}`,
        time: c()
      }), o.value = y.id, b();
    }
    function v(y, k = null) {
      return n.edges.find((C) => C.source !== y ? !1 : k === null ? !0 : (C.sourceHandle === "yes" || C.sourceHandle === "replied" || C.data?.condition === "true" ? "true" : C.sourceHandle === "no" || C.sourceHandle === "timeout" || C.data?.condition === "false" ? "false" : null) === k);
    }
    function b() {
      if (!o.value) return;
      const y = n.nodes.find((k) => k.id === o.value);
      if (y) {
        if (y.type === "trigger") {
          const k = v(y.id);
          if (!k) return _("Fluxo finalizado após o gatilho.");
          o.value = k.target, h();
          return;
        }
        if (y.type === "send_message") {
          const k = v(y.id);
          if (!k) return _("Fim do fluxo atingido.");
          o.value = k.target, h();
          return;
        }
        if (y.type === "delay") {
          const k = v(y.id);
          if (!k) return _("Fim do fluxo atingido.");
          o.value = k.target, h();
          return;
        }
        if (y.type === "condition") {
          const k = d.value ? "true" : "false", C = v(y.id, k);
          if (!C) return _(`Fim do fluxo (ramificação ${k === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = C.target, h();
          return;
        }
        y.type === "end" && _("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const y = n.nodes.find((k) => k.id === o.value);
      if (y) {
        if (y.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: y.data?.mode || "text",
            text: y.data?.text || y.data?.caption || "Mensagem enviada",
            data: y.data || {},
            time: c()
          }), setTimeout(b, 800);
          return;
        }
        if (y.type === "delay") {
          const k = y.data?.delay_value || 15, C = y.data?.delay_unit || "minutes";
          u.value = `${k} ${C}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${k} ${C}...`,
            time: c()
          });
          return;
        }
        if (y.type === "condition") {
          const k = d.value;
          a.value.push({
            type: "system",
            text: `🔀 Avaliando condição: Pedido pago? -> ${k ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
            time: c()
          }), setTimeout(b, 600);
          return;
        }
        if (y.type === "wait_reply") {
          s.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: c()
          });
          return;
        }
        y.type === "end" && _("Fluxo concluído.");
      }
    }
    function p() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: c()
      }), b());
    }
    function m() {
      if (!l.value.trim()) return;
      const y = l.value.trim();
      l.value = "", s.value = !1, a.value.push({
        type: "user",
        text: y,
        time: c()
      });
      const k = n.nodes.find((C) => C.id === o.value);
      if (k && k.type === "wait_reply") {
        const C = v(k.id, "true");
        if (!C) return _("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = C.target, setTimeout(h, 500);
      }
    }
    function g() {
      s.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: c()
      });
      const y = n.nodes.find((k) => k.id === o.value);
      if (y && y.type === "wait_reply") {
        const k = v(y.id, "false");
        if (!k) return _("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = k.target, setTimeout(h, 500);
      }
    }
    function _(y) {
      a.value.push({
        type: "system",
        text: `🏁 ${y}`,
        time: c()
      }), o.value = null;
    }
    return Ke(f), (y, k) => (z(), T("div", M_, [
      i("div", D_, [
        i("div", F_, [
          i("div", B_, [
            X(N(rl), { class: "h-4 w-4 text-emerald-500" }),
            k[4] || (k[4] = i("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          k[11] || (k[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          i("div", L_, [
            i("div", U_, [
              k[5] || (k[5] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              k[6] || (k[6] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              i("div", q_, [
                i("button", {
                  type: "button",
                  class: Z(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: k[0] || (k[0] = (C) => d.value = !0)
                }, " SIM (Pago) ", 2),
                i("button", {
                  type: "button",
                  class: Z(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: k[1] || (k[1] = (C) => d.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (z(), T("div", V_, [
              i("div", j_, [
                X(N(ar), { class: "h-4 w-4" }),
                i("span", null, "Aguardando: " + L(u.value), 1)
              ]),
              i("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: p
              }, [
                X(N(Ph), { class: "h-3.5 w-3.5" }),
                k[7] || (k[7] = i("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : ee("", !0),
            s.value ? (z(), T("div", H_, [
              k[9] || (k[9] = i("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              i("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: g
              }, [...k[8] || (k[8] = [
                i("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : ee("", !0)
          ]),
          i("div", G_, [
            i("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: f
            }, [
              X(N(Oh), { class: "h-3.5 w-3.5" }),
              k[10] || (k[10] = i("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        i("div", W_, [
          i("div", X_, [
            i("div", Y_, [
              k[13] || (k[13] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              i("div", null, [
                i("div", K_, L(e.flow.name), 1),
                k[12] || (k[12] = i("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            i("div", Z_, [
              i("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: k[2] || (k[2] = (C) => r("close"))
              }, [
                X(N(At), { class: "h-4 w-4" })
              ])
            ])
          ]),
          i("div", J_, [
            (z(!0), T(ve, null, Re(a.value, (C, $) => (z(), T(ve, { key: $ }, [
              C.type === "system" ? (z(), T("div", Q_, [
                i("span", e2, L(C.text), 1)
              ])) : C.type === "bot" ? (z(), T("div", t2, [
                i("div", n2, [
                  X(vl, {
                    text: C.text,
                    mode: C.mode,
                    caption: C.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  i("div", r2, [
                    i("span", null, L(C.time), 1),
                    X(N(xi), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : C.type === "user" ? (z(), T("div", o2, [
                i("div", a2, [
                  i("p", s2, L(C.text), 1),
                  i("div", i2, [
                    i("span", null, L(C.time), 1),
                    X(N(xi), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : ee("", !0)
            ], 64))), 128))
          ]),
          i("div", l2, [
            i("form", {
              class: "flex items-center gap-2",
              onSubmit: nn(m, ["prevent"])
            }, [
              ie(i("input", {
                "onUpdate:modelValue": k[3] || (k[3] = (C) => l.value = C),
                type: "text",
                disabled: !s.value,
                placeholder: s.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, u2), [
                [ye, l.value]
              ]),
              i("button", {
                type: "submit",
                disabled: !s.value || !l.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                X(N(Pt), { class: "h-4 w-4" })
              ], 8, c2)
            ], 32)
          ])
        ])
      ])
    ]));
  }
};
function Qn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function f2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const p2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function h2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return p2[e]?.[t];
}
function $o(e, t = {}) {
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
  return e === "delay" ? t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${ia(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s` : e === "condition" ? t.kind === "order_status_is" ? `Status do pedido é "${gp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${yp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : vp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?" : e === "wait_reply" ? t.delay_value && t.delay_unit ? `Espera até ${t.delay_value} ${ia(t.delay_unit)}` : `Espera até ${Math.max(0, Number(t.seconds) || 0)}s` : e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function m2(e, t = "") {
  const n = Qn(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => Qn(u) && u.id).map((u, c) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + c % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(c / 4) * 170
    },
    data: Qn(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  a.some((u) => u.type === "trigger") || a.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: xp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const s = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), d = o.filter((u) => Qn(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, c) => {
    const f = Qn(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${c}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: h2(s.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: a, edges: d };
}
function v2(e, t) {
  const n = Qn(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = bp(n.delay_value, n.delay_unit)), n;
}
function g2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function y2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: v2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = g2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function b2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : f2(e),
    type: e,
    position: t,
    data: xp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: bn(e)
  };
}
function at(e) {
  return String(e ?? "").trim();
}
function x2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? at(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : at(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? at(e.url) !== "" : t === "call" ? at(e.phoneNumber) !== "" : t === "copy" ? at(e.copyCode) !== "" : !0;
}
function w2(e) {
  return at(e?.title) !== "";
}
function Di(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && at(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && at(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(x2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(w2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
      break;
    case "location":
      (at(e.latitude) === "" || at(e.longitude) === "") && n.push(`${t}: informe latitude e longitude.`);
      break;
    case "contact":
      (at(e.contact_name) === "" || at(e.contact_phone) === "") && n.push(`${t}: informe nome e telefone do contato.`);
      break;
    case "poll": {
      const r = (e.options || []).filter((o) => at(o) !== "");
      (at(e.question) === "" || r.length < 2) && n.push(`${t}: informe a pergunta e ao menos 2 opções.`);
      break;
    }
    case "link":
      at(e.url) === "" && n.push(`${t}: informe a URL do link.`);
      break;
    case "image":
    case "video":
    case "audio":
    case "document":
    case "sticker":
      at(e.media_url) === "" && n.push(`${t}: selecione um arquivo.`);
      break;
    default:
      at(e.text) === "" && n.push(`${t}: escreva o texto da mensagem.`);
  }
  return n;
}
function _2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, a = at(o.mode) || "text";
    t.push(...Di(o, `Bloco "Enviar mensagem" (${a})`));
  }
  return t;
}
const k2 = { class: "flex h-full flex-col lg:flex-row" }, S2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, E2 = { class: "mb-4 flex items-center justify-between" }, z2 = { class: "space-y-2" }, $2 = ["onDragstart", "onClick"], P2 = { class: "text-xs font-bold" }, C2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, A2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, T2 = ["disabled"], O2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, N2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, R2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, I2 = { class: "flex-1 text-xs" }, M2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, D2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, F2 = { class: "flex items-center gap-2" }, B2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, L2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, U2 = { class: "p-3" }, q2 = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, V2 = { class: "truncate" }, j2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, H2 = { class: "flex items-center gap-2" }, G2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, W2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, X2 = { class: "flex items-center gap-1.5" }, Y2 = ["onClick"], K2 = { class: "p-3" }, Z2 = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, J2 = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, Q2 = {
  key: 1,
  class: "space-y-1"
}, ek = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, tk = { class: "text-[10px] text-zinc-500" }, nk = {
  key: 2,
  class: "space-y-1.5"
}, rk = { class: "text-[11px] leading-snug line-clamp-2" }, ok = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, ak = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, sk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, ik = { class: "flex items-center gap-2" }, lk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, uk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, ck = ["onClick"], dk = { class: "p-3" }, fk = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, pk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, hk = { class: "flex items-center gap-2" }, mk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, vk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, gk = ["onClick"], yk = { class: "p-3 space-y-2.5 pb-12" }, bk = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, xk = { class: "line-clamp-2" }, wk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, _k = { class: "flex items-center gap-2" }, kk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, Sk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Ek = ["onClick"], zk = { class: "p-3 space-y-2.5 pb-12" }, $k = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Pk = { class: "line-clamp-2" }, Ck = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Ak = { class: "flex items-center gap-2" }, Tk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, Ok = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Nk = ["onClick"], Rk = {
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
    function v(P) {
      return f[P] || { label: P || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: b, addEdges: h, project: p, fitView: m } = Ve(), g = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Bn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Zl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: ar, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Nr, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: Jl, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Kl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], _ = J(() => r.flow?.trigger_event || ""), y = J(() => a.value.find((P) => P.id === l.value) || null), k = J(() => s.value.find((P) => P.id === d.value) || null), C = {
      type: "zaprei",
      markerEnd: ra.ArrowClosed,
      data: {}
    };
    Ie(
      () => r.flow?.id,
      () => {
        const P = m2(r.flow?.graph_json, _.value);
        a.value = P.nodes, s.value = P.edges, l.value = null, d.value = null, setTimeout(() => m({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), b((P) => {
      h([{
        ...P,
        ...C,
        sourceHandle: P.sourceHandle,
        data: { sourceHandle: P.sourceHandle }
      }]);
    });
    function $(P) {
      l.value = P, d.value = null;
    }
    function w(P) {
      d.value = P, l.value = null;
    }
    function S() {
      l.value = null, d.value = null;
    }
    function U(P, R) {
      if (P === "trigger" && a.value.some((q) => q.type === "trigger"))
        return;
      const x = b2(P, R || { x: 420, y: 320 }, _.value);
      a.value = [...a.value, x], $(x.id);
    }
    function D(P) {
      !P || a.value.find((R) => R.id === P)?.type === "trigger" || (a.value = a.value.filter((R) => R.id !== P), s.value = s.value.filter((R) => R.source !== P && R.target !== P), l.value === P && (l.value = null));
    }
    function M(P) {
      s.value = s.value.filter((R) => R.id !== P), d.value === P && (d.value = null);
    }
    function A(P, R) {
      P.dataTransfer?.setData("application/zaprei-node", R), P.dataTransfer.effectAllowed = "move";
    }
    function V(P) {
      P.preventDefault(), P.dataTransfer.dropEffect = "move";
    }
    function E(P) {
      P.preventDefault();
      const R = P.dataTransfer?.getData("application/zaprei-node");
      if (!R) return;
      const x = P.currentTarget.getBoundingClientRect(), q = p({
        x: P.clientX - x.left,
        y: P.clientY - x.top
      });
      U(R, q);
    }
    function F() {
      const P = y2(a.value, s.value), R = _2(P);
      u.value = R, !R.length && o("save", P);
    }
    return t({
      requestSave: F,
      handleSave: F
    }), (P, R) => (z(), T("div", k2, [
      i("aside", S2, [
        i("div", E2, [
          R[8] || (R[8] = i("div", null, [
            i("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            i("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          i("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: R[0] || (R[0] = (x) => c.value = !0)
          }, [
            X(N(rl), { class: "h-3.5 w-3.5" }),
            R[7] || (R[7] = i("span", null, "Simulador", -1))
          ])
        ]),
        i("div", z2, [
          (z(), T(ve, null, Re(g, (x) => i("div", {
            key: x.type,
            draggable: "true",
            class: Z(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", x.color]),
            onDragstart: (q) => A(q, x.type),
            onClick: (q) => U(x.type)
          }, [
            (z(), Oe(Ot(x.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            i("div", null, [
              i("div", P2, L(x.title), 1),
              i("div", C2, L(x.desc), 1)
            ])
          ], 42, $2)), 64))
        ]),
        i("div", A2, [
          i("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: F
          }, [
            i("span", null, L(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, T2)
        ])
      ]),
      i("main", {
        class: "relative h-full flex-1",
        onDragover: V,
        onDrop: E
      }, [
        X(vh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: rt(() => [
            u.value.length ? (z(), T("div", O2, [
              i("div", N2, [
                i("div", R2, [
                  X(N(xa), { class: "h-4 w-4" })
                ]),
                i("div", I2, [
                  R[9] || (R[9] = i("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  i("ul", M2, [
                    (z(!0), T(ve, null, Re(u.value, (x, q) => (z(), T("li", { key: q }, L(x), 1))), 128))
                  ])
                ]),
                i("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: R[1] || (R[1] = (x) => u.value = [])
                }, [
                  X(N(At), { class: "h-4 w-4" })
                ])
              ])
            ])) : ee("", !0)
          ]),
          _: 1
        }),
        X(N(f1), {
          nodes: a.value,
          "onUpdate:nodes": R[2] || (R[2] = (x) => a.value = x),
          edges: s.value,
          "onUpdate:edges": R[3] || (R[3] = (x) => s.value = x),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": C,
          onNodeClick: R[4] || (R[4] = (x) => $(x.node?.id)),
          onEdgeClick: R[5] || (R[5] = (x) => w(x.edge?.id)),
          onPaneClick: S
        }, {
          "edge-zaprei": rt((x) => [
            X(Q1, ba(x, { onRemove: M }), null, 16)
          ]),
          "node-trigger": rt((x) => [
            i("div", {
              class: Z(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", D2, [
                i("div", F2, [
                  i("div", B2, [
                    X(N(Bn), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", L2, L(N(bn)("trigger")), 1)
                ]),
                R[10] || (R[10] = i("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              i("div", U2, [
                i("div", q2, [
                  R[11] || (R[11] = i("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  i("span", V2, L(N($o)("trigger", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": rt((x) => [
            i("div", {
              class: Z(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", j2, [
                i("div", H2, [
                  i("div", G2, [
                    X(N(Zl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", W2, L(N(bn)("send_message")), 1)
                ]),
                i("div", X2, [
                  i("span", {
                    class: Z(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", v(x.data?.mode).color])
                  }, L(v(x.data?.mode).label), 3),
                  i("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: nn((q) => D(x.id), ["stop"])
                  }, [
                    X(N(At), { class: "h-3.5 w-3.5" })
                  ], 8, Y2)
                ])
              ]),
              i("div", K2, [
                i("div", Z2, [
                  x.data?.mode === "audio" ? (z(), T("div", J2, [
                    X(N(Ah), { class: "h-3.5 w-3.5" }),
                    R[12] || (R[12] = i("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    R[13] || (R[13] = i("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : x.data?.mode === "poll" ? (z(), T("div", Q2, [
                    i("div", ek, "📊 " + L(x.data?.question || "Pergunta da enquete..."), 1),
                    i("div", tk, L((x.data?.options || []).length) + " opções configuradas", 1)
                  ])) : x.data?.mode === "buttons" ? (z(), T("div", nk, [
                    i("p", rk, L(x.data?.text || "Texto da mensagem..."), 1),
                    (x.data?.buttons || []).length ? (z(), T("div", ok, [
                      (z(!0), T(ve, null, Re((x.data?.buttons || []).slice(0, 3), (q, Q) => (z(), T("span", {
                        key: Q,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, L(q.label || `Botão ${Q + 1}`), 1))), 128))
                    ])) : ee("", !0)
                  ])) : (z(), T("div", ak, L(x.data?.text || x.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": rt((x) => [
            i("div", {
              class: Z(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", sk, [
                i("div", ik, [
                  i("div", lk, [
                    X(N(ar), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", uk, L(N(bn)("delay")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: nn((q) => D(x.id), ["stop"])
                }, [
                  X(N(At), { class: "h-3.5 w-3.5" })
                ], 8, ck)
              ]),
              i("div", dk, [
                i("div", fk, [
                  R[14] || (R[14] = i("span", { class: "relative flex h-2 w-2" }, [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    i("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  i("span", null, L(N($o)("delay", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": rt((x) => [
            i("div", {
              class: Z(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", pk, [
                i("div", hk, [
                  i("div", mk, [
                    X(N(Nr), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", vk, L(N(bn)("condition")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: nn((q) => D(x.id), ["stop"])
                }, [
                  X(N(At), { class: "h-3.5 w-3.5" })
                ], 8, gk)
              ]),
              i("div", yk, [
                i("div", bk, [
                  i("span", xk, L(N($o)("condition", x.data)), 1)
                ]),
                R[15] || (R[15] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                X(N(ut), {
                  id: "yes",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[16] || (R[16] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                X(N(ut), {
                  id: "no",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": rt((x) => [
            i("div", {
              class: Z(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", wk, [
                i("div", _k, [
                  i("div", kk, [
                    X(N(Jl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Sk, L(N(bn)("wait_reply")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: nn((q) => D(x.id), ["stop"])
                }, [
                  X(N(At), { class: "h-3.5 w-3.5" })
                ], 8, Ek)
              ]),
              i("div", zk, [
                i("div", $k, [
                  i("span", Pk, L(N($o)("wait_reply", x.data)), 1)
                ]),
                R[17] || (R[17] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                X(N(ut), {
                  id: "replied",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[18] || (R[18] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                X(N(ut), {
                  id: "timeout",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": rt((x) => [
            i("div", {
              class: Z(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Ck, [
                i("div", Ak, [
                  i("div", Tk, [
                    X(N(Kl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Ok, L(N(bn)("end")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: nn((q) => D(x.id), ["stop"])
                }, [
                  X(N(At), { class: "h-3.5 w-3.5" })
                ], 8, Nk)
              ]),
              R[19] || (R[19] = i("div", { class: "p-3" }, [
                i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: rt(() => [
            X(N(w1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            X(N(J1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      X(I_, {
        node: y.value,
        edge: k.value,
        onRemoveNode: D,
        onRemoveEdge: M
      }, null, 8, ["node", "edge"]),
      c.value ? (z(), Oe(d2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: s.value,
        onClose: R[6] || (R[6] = (x) => c.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : ee("", !0)
    ]));
  }
}, Ik = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Mk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Dk = { class: "flex items-center gap-3" }, Fk = ["disabled"], Bk = { class: "flex items-center gap-2" }, Lk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Uk = { class: "text-sm font-bold" }, qk = ["disabled"], Vk = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, zp = {
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
        await Ae.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (c) {
        s.value = c.message, a.value = !1;
      }
    }
    return (u, c) => (z(), Oe(Gd, { to: "body" }, [
      i("div", Ik, [
        i("header", Mk, [
          i("div", Dk, [
            i("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: a.value,
              onClick: c[0] || (c[0] = (f) => r("close"))
            }, [
              X(N(Xd), { class: "h-4 w-4 text-emerald-500" }),
              c[1] || (c[1] = i("span", null, "Voltar para Automações", -1))
            ], 8, Fk),
            c[3] || (c[3] = i("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            i("div", Bk, [
              i("div", Lk, [
                X(N(ef), { class: "h-4 w-4" })
              ]),
              i("div", null, [
                i("div", Uk, L(e.flow.name || "Editor de Fluxo Visual"), 1),
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
            a.value ? (z(), Oe(N(It), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Oe(N(Rh), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, L(a.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, qk)
        ]),
        s.value ? (z(), T("p", Vk, [
          X(N(xa), { class: "h-4 w-4 shrink-0" }),
          i("span", null, L(s.value), 1)
        ])) : ee("", !0),
        X(Rk, {
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
}, jk = { class: "truncate" }, Hk = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, Gk = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, Wk = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, Xk = ["checked", "onChange"], Yk = { class: "truncate" }, cr = {
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
    function s(b) {
      a.value && !a.value.contains(b.target) && u();
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
    function c(b) {
      r("update:modelValue", n.modelValue.includes(b) ? n.modelValue.filter((h) => h !== b) : [...n.modelValue, b]);
    }
    function f() {
      r("update:modelValue", []);
    }
    ya(() => document.removeEventListener("click", s, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const b = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${b})`;
    });
    return (b, h) => (z(), T("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      i("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        i("span", jk, L(v.value), 1),
        X(N(zh), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (z(), T("div", Hk, [
        e.options.length ? (z(), T(ve, { key: 1 }, [
          e.matchMode ? (z(), T("div", Wk, [
            i("button", {
              type: "button",
              class: Z(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: h[0] || (h[0] = (p) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            i("button", {
              type: "button",
              class: Z(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: h[1] || (h[1] = (p) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : ee("", !0),
          e.modelValue.length ? (z(), T("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : ee("", !0),
          (z(!0), T(ve, null, Re(e.options, (p) => (z(), T("label", {
            key: p.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            i("span", {
              class: Z(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(p.value) ? (z(), Oe(N(Kd), {
                key: 0,
                class: "h-3 w-3"
              })) : ee("", !0)
            ], 2),
            i("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(p.value),
              onChange: (m) => c(p.value)
            }, null, 40, Xk),
            i("span", Yk, L(p.label), 1)
          ]))), 128))
        ], 64)) : (z(), T("p", Gk, "Nenhuma opção disponível."))
      ])) : ee("", !0)
    ], 512));
  }
}, Kk = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, Zk = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, Jk = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, Qk = { class: "flex items-center gap-2.5" }, e5 = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, t5 = { class: "space-y-4 p-5" }, n5 = ["value"], r5 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, o5 = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, a5 = ["disabled"], s5 = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W([]), a = W(!1), s = W(""), l = hr({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Mn[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), d = J(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await Ae.products()).products || [];
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
        await Ae.updateFlow(n.flow.id, {
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
    return Ke(u), (f, v) => (z(), T("div", Kk, [
      i("div", Zk, [
        i("div", Jk, [
          i("div", Qk, [
            i("div", e5, [
              X(N(of), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          i("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (b) => r("close"))
          }, [
            X(N(At), { class: "h-4 w-4" })
          ])
        ]),
        i("div", t5, [
          i("div", null, [
            v[6] || (v[6] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ie(i("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": v[1] || (v[1] = (b) => l.name = b),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [ye, l.name]
            ])
          ]),
          i("div", null, [
            v[7] || (v[7] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ie(i("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (b) => l.trigger_event = b),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (z(!0), T(ve, null, Re(N(Mn), (b) => (z(), T("option", {
                key: b.id,
                value: b.eventClass
              }, L(b.label), 9, n5))), 128))
            ], 512), [
              [lt, l.trigger_event]
            ]),
            v[8] || (v[8] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          i("div", null, [
            v[9] || (v[9] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            X(cr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (b) => l.product_ids = b),
              options: d.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          s.value ? (z(), T("p", r5, L(s.value), 1)) : ee("", !0)
        ]),
        i("div", o5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v[4] || (v[4] = (b) => r("close"))
          }, " Cancelar "),
          i("button", {
            type: "button",
            disabled: a.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: c
          }, L(a.value ? "Salvando…" : "Salvar"), 9, a5)
        ])
      ])
    ]));
  }
}, i5 = [
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
], l5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, u5 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, c5 = ["onClick"], d5 = { class: "flex items-center justify-between" }, f5 = { class: "text-2xl" }, p5 = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, h5 = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, m5 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, v5 = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (z(), T("div", l5, [
      n[1] || (n[1] = i("div", { class: "mb-4 flex items-center justify-between" }, [
        i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      i("div", u5, [
        (z(!0), T(ve, null, Re(N(i5), (r) => (z(), T("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          i("div", null, [
            i("div", d5, [
              i("span", f5, L(r.icon), 1),
              i("span", p5, L(r.badge), 1)
            ]),
            i("h3", h5, L(r.title), 1),
            i("p", m5, L(r.description), 1)
          ]),
          n[0] || (n[0] = i("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            i("span", null, "Usar modelo"),
            i("span", null, "→")
          ], -1))
        ], 8, c5))), 128))
      ])
    ]));
  }
}, g5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, y5 = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, b5 = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, x5 = { class: "flex items-center gap-3" }, w5 = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, _5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, k5 = { class: "text-zinc-700 dark:text-zinc-300" }, S5 = { class: "p-6 space-y-4" }, E5 = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, z5 = { class: "flex items-center gap-2 font-bold text-sm" }, $5 = { class: "text-xs" }, P5 = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, C5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, A5 = ["value"], T5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, O5 = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, N5 = ["disabled"], R5 = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(""), a = W(""), s = W(!1), l = W(""), d = W(!1), u = W("");
    function c(p) {
      const m = String(p || "").replace(/\D/g, "").slice(0, 11);
      return m ? m.length <= 2 ? `(${m}` : m.length <= 6 ? `(${m.slice(0, 2)}) ${m.slice(2)}` : m.length <= 10 ? `(${m.slice(0, 2)}) ${m.slice(2, 6)}-${m.slice(6)}` : `(${m.slice(0, 2)}) ${m.slice(2, 7)}-${m.slice(7, 11)}` : "";
    }
    function f(p) {
      const m = p.target.value;
      o.value = c(m);
    }
    const v = J(() => o.value.replace(/\D/g, "")), b = J(() => v.value.length >= 10 && v.value.length <= 11);
    async function h() {
      if (!(!b.value || s.value)) {
        s.value = !0, l.value = "", d.value = !1;
        try {
          await Ae.testFlow(n.flow.id, {
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
    return (p, m) => (z(), T("div", g5, [
      i("div", y5, [
        i("div", b5, [
          i("div", x5, [
            i("div", w5, [
              X(N(Pt), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              m[4] || (m[4] = i("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              i("p", _5, [
                m[3] || (m[3] = Ce("Fluxo: ", -1)),
                i("strong", k5, L(e.flow.name), 1)
              ])
            ])
          ]),
          i("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: m[0] || (m[0] = (g) => r("close"))
          }, [
            X(N(At), { class: "h-4 w-4" })
          ])
        ]),
        i("div", S5, [
          m[13] || (m[13] = i("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            i("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          d.value ? (z(), T("div", E5, [
            i("div", z5, [
              X(N(qr), { class: "h-5 w-5 text-emerald-500" }),
              m[5] || (m[5] = i("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            i("p", $5, [
              m[6] || (m[6] = Ce(" As mensagens foram enviadas para ", -1)),
              i("strong", null, L(u.value), 1),
              m[7] || (m[7] = Ce('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : ee("", !0),
          l.value ? (z(), T("div", P5, L(l.value), 1)) : ee("", !0),
          i("form", {
            class: "space-y-4",
            onSubmit: nn(h, ["prevent"])
          }, [
            i("div", null, [
              m[9] || (m[9] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              i("div", C5, [
                m[8] || (m[8] = i("span", { class: "mr-2 text-xs font-bold text-zinc-500" }, "🇧🇷 +55", -1)),
                i("input", {
                  value: o.value,
                  type: "text",
                  placeholder: "(11) 99999-8888",
                  class: "w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white",
                  onInput: f
                }, null, 40, A5)
              ]),
              m[10] || (m[10] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Digite seu número com DDD (10 ou 11 dígitos). ", -1))
            ]),
            i("div", null, [
              m[11] || (m[11] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Nome do Cliente (para variáveis do fluxo) ", -1)),
              i("div", T5, [
                X(N(Mh), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                ie(i("input", {
                  "onUpdate:modelValue": m[1] || (m[1] = (g) => a.value = g),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [ye, a.value]
                ])
              ]),
              m[12] || (m[12] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                Ce(" Substitui as tags "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                Ce(" e "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                Ce(". ")
              ], -1))
            ])
          ], 32)
        ]),
        i("div", O5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: m[2] || (m[2] = (g) => r("close"))
          }, L(d.value ? "Concluir" : "Cancelar"), 1),
          i("button", {
            type: "button",
            disabled: !b.value || s.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: h
          }, [
            s.value ? (z(), Oe(N(It), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Oe(N(Pt), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, L(s.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, N5)
        ])
      ])
    ]));
  }
}, I5 = { class: "space-y-4 text-zinc-900 dark:text-white" }, M5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, D5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, F5 = { class: "flex flex-wrap items-center gap-2" }, B5 = { class: "relative w-64" }, L5 = ["value"], U5 = { class: "flex items-center gap-3" }, q5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, V5 = ["disabled"], j5 = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, H5 = { class: "grid gap-3 sm:grid-cols-3" }, G5 = ["value"], W5 = { class: "flex gap-2" }, X5 = ["disabled"], Y5 = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, K5 = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, Z5 = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, J5 = {
  key: 4,
  class: "py-10 text-center"
}, Q5 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, eS = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, tS = { class: "flex items-start justify-between gap-2" }, nS = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, rS = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, oS = ["title", "disabled", "onClick"], aS = { class: "mt-2" }, sS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, iS = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, lS = { class: "flex items-center gap-1" }, uS = ["onClick"], cS = ["disabled", "onClick"], dS = ["disabled", "onClick"], fS = ["disabled", "onClick"], pS = ["onClick"], hS = ["onClick"], mS = {
  __name: "FlowsPanel",
  setup(e) {
    const t = W([]), n = W([]), r = W(!0), o = W(!1), a = W(""), s = W(""), l = W(!1), d = W(""), u = W("all"), c = W(null), f = W(null), v = W(null), b = W({ name: "", trigger_event: Mn[3].eventClass, product_ids: [] }), h = W(!1), p = J(() => {
      const V = d.value.trim().toLowerCase();
      return t.value.filter((E) => u.value !== "all" && E.trigger_event !== u.value ? !1 : !V || `${E.name} ${Bo(E.trigger_event)}`.toLowerCase().includes(V));
    }), m = J(() => n.value.map((V) => ({ value: V.id, label: V.name })));
    function g(V) {
      if (!V || !V.length) return "Todos os produtos";
      const E = V.map((F) => n.value.find((P) => P.id === F)?.name).filter(Boolean);
      return E.length ? E.length > 2 ? `${E.slice(0, 2).join(", ")} +${E.length - 2}` : E.join(", ") : "Todos os produtos";
    }
    async function _() {
      r.value = !0, a.value = "";
      try {
        const [V, E] = await Promise.all([Ae.flows(), Ae.products()]);
        t.value = V.flows || [], n.value = E.products || [];
      } catch (V) {
        a.value = V.message;
      } finally {
        r.value = !1;
      }
    }
    async function y(V) {
      o.value = !0, a.value = "";
      try {
        await V(), await _();
      } catch (E) {
        a.value = E.message;
      } finally {
        o.value = !1;
      }
    }
    function k(V) {
      v.value = V;
    }
    function C({ phone: V }) {
      s.value = `Fluxo "${v.value?.name}" disparado para ${V}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function $() {
      const V = b.value.name.trim() || Bo(b.value.trigger_event);
      return y(async () => {
        await Ae.createFlow({
          name: V,
          trigger_event: b.value.trigger_event,
          product_ids: b.value.product_ids.length ? b.value.product_ids : null,
          is_active: !0,
          graph_json: _p(b.value.trigger_event)
        }), b.value.name = "", b.value.product_ids = [], h.value = !1;
      });
    }
    const w = (V) => y(() => Ae.updateFlow(V.id, { is_active: !V.is_active })), S = (V) => y(() => Ae.duplicateFlow(V.id));
    function U(V) {
      if (window.confirm(`Excluir o fluxo "${V.name}"?`))
        return y(() => Ae.deleteFlow(V.id));
    }
    function D(V) {
      const E = {
        name: V.name,
        trigger_event: V.trigger_event,
        product_ids: V.product_ids,
        graph_json: V.graph_json
      }, F = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), P = URL.createObjectURL(F), R = document.createElement("a");
      R.href = P, R.download = `${(V.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, R.click(), URL.revokeObjectURL(P);
    }
    async function M(V) {
      const E = V.target.files?.[0];
      if (E) {
        l.value = !0, a.value = "", s.value = "";
        try {
          const F = JSON.parse(await E.text());
          if (!F || typeof F != "object" || !F.graph_json || !F.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const P = new Set(n.value.map((x) => x.id)), R = (Array.isArray(F.product_ids) ? F.product_ids : []).filter((x) => P.has(x));
          await Ae.createFlow({
            name: F.name ? `${F.name} (importado)` : "Fluxo importado",
            trigger_event: F.trigger_event,
            product_ids: R.length ? R : null,
            graph_json: F.graph_json,
            is_active: !1
          }), s.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await _();
        } catch (F) {
          a.value = F.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, V.target.value = "";
        }
      }
    }
    function A(V) {
      return y(() => Ae.createFlow({
        name: V.title,
        trigger_event: V.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: V.graph(V.eventClass)
      }));
    }
    return Ke(_), (V, E) => (z(), T("div", I5, [
      X(v5, { onUse: A }),
      i("div", M5, [
        i("div", D5, [
          i("div", F5, [
            i("div", B5, [
              X(N(Vr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ie(i("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (F) => d.value = F),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [ye, d.value]
              ])
            ]),
            ie(i("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (F) => u.value = F),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              E[10] || (E[10] = i("option", { value: "all" }, "Todos os eventos", -1)),
              (z(!0), T(ve, null, Re(N(Mn), (F) => (z(), T("option", {
                key: F.id,
                value: F.eventClass
              }, L(F.label), 9, L5))), 128))
            ], 512), [
              [lt, u.value]
            ])
          ]),
          i("div", U5, [
            i("span", q5, L(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            i("label", {
              class: Z(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              X(N(af), { class: "h-4 w-4" }),
              i("span", null, L(l.value ? "Importando…" : "Importar"), 1),
              i("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: l.value,
                onChange: M
              }, null, 40, V5)
            ], 2),
            i("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: E[2] || (E[2] = (F) => h.value = !h.value)
            }, [
              X(N(rf), { class: "h-4 w-4" }),
              E[11] || (E[11] = i("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        h.value ? (z(), T("div", j5, [
          i("div", H5, [
            i("div", null, [
              E[12] || (E[12] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ie(i("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": E[3] || (E[3] = (F) => b.value.name = F),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [ye, b.value.name]
              ])
            ]),
            i("div", null, [
              E[13] || (E[13] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ie(i("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": E[4] || (E[4] = (F) => b.value.trigger_event = F),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (z(!0), T(ve, null, Re(N(Mn), (F) => (z(), T("option", {
                  key: F.id,
                  value: F.eventClass
                }, L(F.label), 9, G5))), 128))
              ], 512), [
                [lt, b.value.trigger_event]
              ])
            ]),
            i("div", null, [
              E[14] || (E[14] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              X(cr, {
                modelValue: b.value.product_ids,
                "onUpdate:modelValue": E[5] || (E[5] = (F) => b.value.product_ids = F),
                options: m.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          i("div", W5, [
            i("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: $
            }, " Criar fluxo em branco ", 8, X5),
            i("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: E[6] || (E[6] = (F) => h.value = !1)
            }, " Cancelar ")
          ])
        ])) : ee("", !0),
        a.value ? (z(), T("p", Y5, L(a.value), 1)) : s.value ? (z(), T("p", K5, L(s.value), 1)) : ee("", !0),
        r.value ? (z(), T("div", Z5, [
          X(N(It), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          E[15] || (E[15] = i("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (z(), T("div", eS, [
          (z(!0), T(ve, null, Re(p.value, (F) => (z(), T("div", {
            key: F.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            i("div", null, [
              i("div", tS, [
                i("div", null, [
                  i("span", nS, L(N(Bo)(F.trigger_event)), 1),
                  i("h3", rS, L(F.name), 1)
                ]),
                i("button", {
                  type: "button",
                  class: Z(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", F.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: F.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (P) => w(F)
                }, [
                  i("span", {
                    class: Z(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", F.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, oS)
              ]),
              i("div", aS, [
                i("span", sS, L(g(F.product_ids)), 1)
              ])
            ]),
            i("div", iS, [
              i("div", lS, [
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (P) => f.value = F
                }, [
                  X(N(of), { class: "h-4 w-4" })
                ], 8, uS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (P) => S(F)
                }, [
                  X(N(Zd), { class: "h-4 w-4" })
                ], 8, cS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (P) => U(F)
                }, [
                  X(N(Yo), { class: "h-4 w-4" })
                ], 8, dS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (P) => k(F)
                }, [
                  X(N(Pt), { class: "h-4 w-4" })
                ], 8, fS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (P) => D(F)
                }, [
                  X(N(Jd), { class: "h-4 w-4" })
                ], 8, pS)
              ]),
              i("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (P) => c.value = F
              }, [
                X(N(tf), { class: "h-3.5 w-3.5" }),
                E[18] || (E[18] = i("span", null, "Editar Visual", -1))
              ], 8, hS)
            ])
          ]))), 128))
        ])) : (z(), T("div", J5, [
          i("div", Q5, [
            X(N(Bn), { class: "h-6 w-6" })
          ]),
          E[16] || (E[16] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          E[17] || (E[17] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (z(), Oe(zp, {
        key: 0,
        flow: c.value,
        onClose: E[7] || (E[7] = (F) => c.value = null),
        onSaved: _
      }, null, 8, ["flow"])) : ee("", !0),
      f.value ? (z(), Oe(s5, {
        key: 1,
        flow: f.value,
        onClose: E[8] || (E[8] = (F) => f.value = null),
        onSaved: _
      }, null, 8, ["flow"])) : ee("", !0),
      v.value ? (z(), Oe(R5, {
        key: 2,
        flow: v.value,
        onClose: E[9] || (E[9] = (F) => v.value = null),
        onTested: C
      }, null, 8, ["flow"])) : ee("", !0)
    ]));
  }
}, vS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, gS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, yS = { class: "flex items-center gap-2" }, bS = ["disabled"], xS = { class: "mt-4 grid grid-cols-3 gap-3" }, wS = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, _S = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, kS = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, SS = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, ES = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, zS = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, $S = { class: "mt-4 flex flex-wrap items-end gap-2" }, PS = { class: "w-48" }, CS = { class: "w-48" }, AS = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, TS = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, OS = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, NS = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, RS = {
  key: 3,
  class: "py-10 text-center"
}, IS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, MS = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, DS = { class: "w-full text-left text-xs" }, FS = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, BS = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, LS = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, US = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, qS = { class: "px-3 py-2.5" }, VS = { class: "px-3 py-2.5" }, jS = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, HS = ["title"], GS = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, WS = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, XS = { class: "px-3 py-2.5" }, YS = ["onClick"], KS = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = W([]), r = W([]), o = W({ all: 0, buyers: 0, imported: 0 }), a = W(!0), s = W(""), l = W(""), d = W("all"), u = W([]), c = W("or"), f = W([]), v = W(""), b = W(!1), h = J(() => r.value.map((C) => ({ value: C.name, label: C.name }))), p = J(() => {
      const C = v.value.trim().toLowerCase();
      return n.value.filter(($) => d.value === "buyer" && $.source !== "buyer" || d.value === "imported" && $.source !== "imported" || u.value.length && !(c.value === "and" ? u.value.every((S) => $.products.includes(S)) : $.products.some((S) => u.value.includes(S))) || f.value.length && $.products.some((w) => f.value.includes(w)) ? !1 : !C || `${$.name} ${$.phone} ${$.email}`.toLowerCase().includes(C));
    });
    async function m() {
      a.value = !0, s.value = "";
      try {
        const [C, $] = await Promise.all([Ae.contacts(), Ae.products()]);
        n.value = C.contacts || [], o.value = C.counts || o.value, r.value = $.products || [];
      } catch (C) {
        s.value = C.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(m);
    const g = "\uFEFF";
    function _() {
      const C = t.map((U) => U.join(",")).join(`\r
`), $ = new Blob([g + C], { type: "text/csv;charset=utf-8" }), w = URL.createObjectURL($), S = document.createElement("a");
      S.href = w, S.download = "zaprei-modelo-importacao.csv", S.click(), URL.revokeObjectURL(w);
    }
    async function y(C) {
      const $ = C.target.files?.[0];
      if ($) {
        b.value = !0, s.value = "", l.value = "";
        try {
          const { imported: w } = await Ae.importContacts($);
          l.value = `${w} contato(s) importado(s).`, await m();
        } catch (w) {
          s.value = w.message;
        } finally {
          b.value = !1, C.target.value = "";
        }
      }
    }
    async function k(C) {
      if (window.confirm(`Remover ${C.name}?`)) {
        s.value = "";
        try {
          await Ae.deleteContact(C.id), await m();
        } catch ($) {
          s.value = $.message;
        }
      }
    }
    return (C, $) => (z(), T("div", vS, [
      i("div", gS, [
        $[6] || ($[6] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        i("div", yS, [
          i("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: _
          }, [
            X(N(Jd), { class: "h-4 w-4" }),
            $[5] || ($[5] = i("span", null, "Baixar exemplo", -1))
          ]),
          i("label", {
            class: Z(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": b.value }])
          }, [
            X(N(af), { class: "h-4 w-4" }),
            i("span", null, L(b.value ? "Importando…" : "Importar CSV"), 1),
            i("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: b.value,
              onChange: y
            }, null, 40, bS)
          ], 2)
        ])
      ]),
      i("div", xS, [
        i("div", wS, [
          i("div", _S, L(o.value.all), 1),
          $[7] || ($[7] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        i("div", kS, [
          i("div", SS, L(o.value.buyers), 1),
          $[8] || ($[8] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        i("div", ES, [
          i("div", zS, L(o.value.imported), 1),
          $[9] || ($[9] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      i("div", $S, [
        i("div", null, [
          $[11] || ($[11] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ie(i("select", {
            "onUpdate:modelValue": $[0] || ($[0] = (w) => d.value = w),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [...$[10] || ($[10] = [
            i("option", { value: "all" }, "Todas as origens", -1),
            i("option", { value: "buyer" }, "Apenas compradores", -1),
            i("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [lt, d.value]
          ])
        ]),
        i("div", PS, [
          $[12] || ($[12] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          X(cr, {
            modelValue: u.value,
            "onUpdate:modelValue": $[1] || ($[1] = (w) => u.value = w),
            mode: c.value,
            "onUpdate:mode": $[2] || ($[2] = (w) => c.value = w),
            options: h.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        i("div", CS, [
          $[13] || ($[13] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          X(cr, {
            modelValue: f.value,
            "onUpdate:modelValue": $[3] || ($[3] = (w) => f.value = w),
            options: h.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ie(i("input", {
          "onUpdate:modelValue": $[4] || ($[4] = (w) => v.value = w),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [ye, v.value]
        ]),
        i("span", AS, L(p.value.length) + " de " + L(n.value.length) + " contato(s)", 1)
      ]),
      $[17] || ($[17] = i("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        Ce(" O CSV aceita as colunas "),
        i("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        Ce(" (máximo de 10 MB). ")
      ], -1)),
      s.value ? (z(), T("p", TS, L(s.value), 1)) : l.value ? (z(), T("p", OS, L(l.value), 1)) : ee("", !0),
      a.value ? (z(), T("div", NS, [
        X(N(It), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        $[14] || ($[14] = i("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? (z(), T("div", MS, [
        i("table", DS, [
          $[16] || ($[16] = i("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            i("tr", null, [
              i("th", { class: "px-3 py-2.5" }, "Contato"),
              i("th", { class: "px-3 py-2.5" }, "Telefone"),
              i("th", { class: "px-3 py-2.5" }, "E-mail"),
              i("th", { class: "px-3 py-2.5" }, "Origem"),
              i("th", { class: "px-3 py-2.5" }, "Produtos"),
              i("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          i("tbody", FS, [
            (z(!0), T(ve, null, Re(p.value, (w) => (z(), T("tr", {
              key: w.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", BS, L(w.name), 1),
              i("td", LS, L(w.phone), 1),
              i("td", US, L(w.email || "—"), 1),
              i("td", qS, [
                i("span", {
                  class: Z(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", w.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, L(w.origin), 3)
              ]),
              i("td", VS, [
                w.products.length ? (z(), T("div", jS, [
                  (z(!0), T(ve, null, Re(w.products.slice(0, 2), (S) => (z(), T("span", {
                    key: S,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: S
                  }, L(S), 9, HS))), 128)),
                  w.products.length > 2 ? (z(), T("span", GS, "+" + L(w.products.length - 2), 1)) : ee("", !0)
                ])) : (z(), T("span", WS, "—"))
              ]),
              i("td", XS, [
                w.can_delete ? (z(), T("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (S) => k(w)
                }, [
                  X(N(Yo), { class: "h-3.5 w-3.5" })
                ], 8, YS)) : ee("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", RS, [
        i("div", IS, [
          X(N(wi), { class: "h-6 w-6" })
        ]),
        $[15] || ($[15] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, ZS = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, JS = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, QS = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, eE = { class: "flex items-center gap-3" }, tE = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, nE = { class: "flex items-center gap-2" }, rE = { key: 1 }, oE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, aE = { class: "flex-1 overflow-y-auto p-6" }, sE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, iE = { class: "space-y-2" }, lE = { class: "grid grid-cols-2 gap-3" }, uE = { class: "flex items-center gap-2" }, cE = { class: "flex items-center gap-2" }, dE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, fE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, pE = ["value"], hE = { class: "space-y-2" }, mE = { class: "grid grid-cols-2 gap-3" }, vE = { class: "flex items-center gap-2" }, gE = { class: "flex items-center gap-2" }, yE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, bE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, xE = ["min"], wE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, _E = { class: "flex items-center justify-between" }, kE = { class: "flex items-center gap-2" }, SE = { class: "text-xs font-bold text-emerald-400" }, EE = {
  key: 1,
  class: "space-y-4"
}, zE = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, $E = { class: "dark space-y-3" }, PE = { class: "relative" }, CE = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, AE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, TE = { class: "text-xs font-normal text-zinc-500" }, OE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, NE = { class: "w-full text-left text-xs" }, RE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, IE = { class: "w-10 px-3 py-2.5 text-center" }, ME = ["checked"], DE = { class: "divide-y divide-zinc-800/60" }, FE = ["onClick"], BE = ["checked", "onChange"], LE = { class: "px-3 py-2" }, UE = { class: "font-medium text-white" }, qE = { class: "text-[11px] text-zinc-500" }, VE = { class: "px-3 py-2 font-mono text-zinc-300" }, jE = { class: "px-3 py-2" }, HE = { class: "px-3 py-2" }, GE = { class: "flex max-w-[200px] flex-wrap gap-1" }, WE = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, XE = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, YE = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, KE = { key: 2 }, ZE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-4 py-2"
}, JE = { class: "rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-6" }, QE = { class: "flex items-center gap-3 border-b border-zinc-800 pb-4" }, ez = { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400" }, tz = { class: "text-base font-bold text-white" }, nz = { class: "mt-4 space-y-3 text-xs text-zinc-300" }, rz = { class: "flex justify-between" }, oz = { class: "font-medium text-white" }, az = { class: "flex justify-between" }, sz = { class: "font-medium text-emerald-400" }, iz = { class: "flex justify-between" }, lz = {
  key: 1,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, uz = { class: "dark" }, cz = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, dz = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, fz = { class: "grid grid-cols-2 gap-3 text-xs" }, pz = { class: "mt-0.5 font-semibold text-white" }, hz = { class: "mt-0.5 text-base font-black text-emerald-400" }, mz = { class: "mt-0.5 text-zinc-300" }, vz = { class: "text-xs text-zinc-500" }, gz = {
  key: 0,
  class: "mt-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs font-semibold text-emerald-400"
}, yz = {
  key: 1,
  class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300"
}, bz = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, xz = { key: 1 }, wz = { class: "flex items-center gap-3" }, _z = ["disabled"], kz = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = W(1), o = W(!1), a = W(""), s = W([]), l = W([]), d = W([]), u = W(!1), c = W("all"), f = W([]), v = W("or"), b = W([]), h = W(""), p = W({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), m = J(() => d.value.find((R) => R.id === p.value.flow_id)), g = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), _ = mp.filter((R) => R.token.startsWith("{{customer."));
    let y = !0;
    Ie(() => p.value.message_data.mode, (R) => {
      if (y) {
        y = !1;
        return;
      }
      Object.assign(p.value.message_data, wp(R));
    });
    const k = J(() => l.value.map((R) => ({ value: R.name, label: R.name }))), C = J(() => {
      const R = h.value.trim().toLowerCase();
      return s.value.filter((x) => c.value === "buyers" && x.source !== "buyer" || c.value === "imported" && x.source !== "imported" || f.value.length && !(v.value === "and" ? f.value.every((Q) => x.products.includes(Q)) : x.products.some((Q) => f.value.includes(Q))) || b.value.length && x.products.some((q) => b.value.includes(q)) ? !1 : !R || `${x.name} ${x.phone}`.toLowerCase().includes(R));
    }), $ = J(() => C.value.length > 0 && C.value.every((R) => p.value.selected_contact_keys.includes(R.id)));
    function w(R) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(R) ? x.filter((q) => q !== R) : [...x, R];
    }
    function S() {
      const R = C.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...R])];
    }
    function U() {
      const R = new Set(C.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !R.has(x));
    }
    const D = J(() => s.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), M = J(() => ({
      customer: { name: D.value.name, first_name: (D.value.name || "").split(" ")[0] || D.value.name }
    })), A = J(() => {
      const R = p.value.message_data;
      return Mi(R.text || R.question || R.title || "", M.value);
    }), V = J(() => Mi(p.value.message_data.caption || "", M.value));
    async function E() {
      u.value = !0;
      try {
        const [R, x, q] = await Promise.all([
          Ae.contacts(),
          Ae.products(),
          Ae.flows()
        ]);
        s.value = R.contacts || [], l.value = x.products || [], d.value = q.flows || [];
      } catch {
        s.value = [];
      } finally {
        u.value = !1;
      }
    }
    function F() {
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
          const R = Di(p.value.message_data, "Mensagem");
          if (R.length) {
            a.value = R[0];
            return;
          }
          if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
            a.value = "Escreva o texto da mensagem antes de avançar.";
            return;
          }
        }
      r.value++;
    }
    async function P() {
      if (a.value = "", p.value.action_type === "flow") {
        if (!p.value.flow_id) {
          a.value = "Selecione um fluxo de automação para disparar.", r.value = 1;
          return;
        }
      } else {
        const R = Di(p.value.message_data, "Mensagem");
        if (R.length) {
          a.value = R[0], r.value = 3;
          return;
        }
        if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
          a.value = "Escreva o texto da mensagem antes de iniciar o disparo.", r.value = 3;
          return;
        }
      }
      o.value = !0;
      try {
        await Ae.createCampaign({
          name: p.value.name,
          flow_id: p.value.action_type === "flow" ? p.value.flow_id : null,
          message_data: p.value.action_type === "message" ? p.value.message_data : null,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (R) {
        a.value = R.message;
      } finally {
        o.value = !1;
      }
    }
    return Ke(E), (R, x) => (z(), T("div", ZS, [
      i("div", JS, [
        i("div", QS, [
          i("div", eE, [
            i("div", tE, [
              X(N(Pt), { class: "h-5 w-5" })
            ]),
            x[17] || (x[17] = i("div", null, [
              i("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              i("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          i("div", nE, [
            (z(), T(ve, null, Re(4, (q) => i("div", {
              key: q,
              class: Z(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === q ? "bg-emerald-500 text-zinc-950" : r.value > q ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > q ? (z(), Oe(N(Kd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (z(), T("span", rE, L(q), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (z(), T("div", oE, [
          X(N(xa), { class: "h-4 w-4 shrink-0" }),
          i("span", null, L(a.value), 1)
        ])) : ee("", !0),
        i("div", aE, [
          r.value === 1 ? (z(), T("div", sE, [
            i("div", null, [
              x[18] || (x[18] = i("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ie(i("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (q) => p.value.name = q),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [ye, p.value.name]
              ]),
              x[19] || (x[19] = i("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            i("div", iE, [
              x[27] || (x[27] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Tipo de Envio da Campanha *", -1)),
              i("div", lE, [
                i("button", {
                  type: "button",
                  class: Z(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (q) => p.value.action_type = "message")
                }, [
                  i("div", uE, [
                    X(N(Pt), { class: "h-4 w-4 text-emerald-400" }),
                    x[20] || (x[20] = i("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  x[21] || (x[21] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: Z(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (q) => p.value.action_type = "flow")
                }, [
                  i("div", cE, [
                    X(N(Nr), { class: "h-4 w-4 text-emerald-400" }),
                    x[22] || (x[22] = i("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  x[23] || (x[23] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? (z(), T("div", dE, [
                i("label", fE, [
                  X(N(Nr), { class: "h-3.5 w-3.5" }),
                  x[24] || (x[24] = i("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                ie(i("select", {
                  "onUpdate:modelValue": x[3] || (x[3] = (q) => p.value.flow_id = q),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  x[25] || (x[25] = i("option", { value: null }, "Selecione um fluxo...", -1)),
                  (z(!0), T(ve, null, Re(d.value, (q) => (z(), T("option", {
                    key: q.id,
                    value: q.id
                  }, L(q.name) + " (" + L(q.trigger_event || "Personalizado") + ") ", 9, pE))), 128))
                ], 512), [
                  [lt, p.value.flow_id]
                ]),
                x[26] || (x[26] = i("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : ee("", !0)
            ]),
            i("div", hE, [
              x[34] || (x[34] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              i("div", mE, [
                i("button", {
                  type: "button",
                  class: Z(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[4] || (x[4] = (q) => p.value.schedule_mode = "immediate")
                }, [
                  i("div", vE, [
                    X(N(Bn), { class: "h-4 w-4 text-emerald-400" }),
                    x[28] || (x[28] = i("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[29] || (x[29] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: Z(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[5] || (x[5] = (q) => p.value.schedule_mode = "scheduled")
                }, [
                  i("div", gE, [
                    X(N(es), { class: "h-4 w-4 text-emerald-400" }),
                    x[30] || (x[30] = i("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[31] || (x[31] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (z(), T("div", yE, [
                i("label", bE, [
                  X(N(ar), { class: "h-3.5 w-3.5" }),
                  x[32] || (x[32] = i("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ie(i("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (q) => p.value.scheduled_at = q),
                  type: "datetime-local",
                  min: g.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, xE), [
                  [ye, p.value.scheduled_at]
                ]),
                x[33] || (x[33] = i("p", { class: "text-[11px] text-zinc-400" }, [
                  Ce(" A campanha ficará com status "),
                  i("strong", { class: "text-purple-400" }, "Agendada"),
                  Ce(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : ee("", !0)
            ]),
            i("div", wE, [
              i("div", _E, [
                i("div", kE, [
                  X(N(Ih), { class: "h-4 w-4 text-emerald-400" }),
                  x[35] || (x[35] = i("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                i("span", SE, L(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ie(i("input", {
                "onUpdate:modelValue": x[7] || (x[7] = (q) => p.value.throttle_seconds = q),
                type: "range",
                min: "3",
                max: "30",
                step: "1",
                class: "w-full cursor-pointer accent-emerald-500"
              }, null, 512), [
                [
                  ye,
                  p.value.throttle_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              x[36] || (x[36] = i("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (z(), T("div", EE, [
            i("div", zE, [
              i("div", $E, [
                i("div", null, [
                  x[37] || (x[37] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  X(cr, {
                    modelValue: f.value,
                    "onUpdate:modelValue": x[8] || (x[8] = (q) => f.value = q),
                    mode: v.value,
                    "onUpdate:mode": x[9] || (x[9] = (q) => v.value = q),
                    options: k.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                i("div", null, [
                  x[38] || (x[38] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  X(cr, {
                    modelValue: b.value,
                    "onUpdate:modelValue": x[10] || (x[10] = (q) => b.value = q),
                    options: k.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[39] || (x[39] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              i("div", null, [
                x[41] || (x[41] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ie(i("select", {
                  "onUpdate:modelValue": x[11] || (x[11] = (q) => c.value = q),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[40] || (x[40] = [
                  i("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  i("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  i("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [lt, c.value]
                ]),
                x[42] || (x[42] = i("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                i("div", PE, [
                  X(N(Vr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ie(i("input", {
                    "onUpdate:modelValue": x[12] || (x[12] = (q) => h.value = q),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [ye, h.value]
                  ])
                ])
              ]),
              i("div", CE, [
                i("div", null, [
                  x[43] || (x[43] = i("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  i("div", AE, [
                    Ce(L(p.value.selected_contact_keys.length) + " ", 1),
                    i("span", TE, "de " + L(C.value.length) + " filtrados", 1)
                  ])
                ]),
                i("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  i("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: S
                  }, "Selecionar Todos"),
                  x[44] || (x[44] = i("span", { class: "text-zinc-600" }, "•", -1)),
                  i("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: U
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            i("div", OE, [
              i("table", NE, [
                i("thead", RE, [
                  i("tr", null, [
                    i("th", IE, [
                      i("input", {
                        type: "checkbox",
                        checked: $.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[13] || (x[13] = (q) => $.value ? U() : S())
                      }, null, 40, ME)
                    ]),
                    x[45] || (x[45] = i("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[46] || (x[46] = i("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[47] || (x[47] = i("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[48] || (x[48] = i("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                i("tbody", DE, [
                  (z(!0), T(ve, null, Re(C.value, (q) => (z(), T("tr", {
                    key: q.id,
                    class: Z(["cursor-pointer transition", p.value.selected_contact_keys.includes(q.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (Q) => w(q.id)
                  }, [
                    i("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[14] || (x[14] = nn(() => {
                      }, ["stop"]))
                    }, [
                      i("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(q.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (Q) => w(q.id)
                      }, null, 40, BE)
                    ]),
                    i("td", LE, [
                      i("div", UE, L(q.name), 1),
                      i("div", qE, L(q.email || "-"), 1)
                    ]),
                    i("td", VE, L(q.phone), 1),
                    i("td", jE, [
                      i("span", {
                        class: Z(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", q.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, L(q.origin), 3)
                    ]),
                    i("td", HE, [
                      i("div", GE, [
                        (z(!0), T(ve, null, Re(q.products.slice(0, 2), (Q) => (z(), T("span", {
                          key: Q,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, L(Q), 1))), 128)),
                        q.products.length > 2 ? (z(), T("span", WE, "+" + L(q.products.length - 2), 1)) : ee("", !0)
                      ])
                    ])
                  ], 10, FE))), 128))
                ])
              ]),
              u.value ? (z(), T("p", XE, "Carregando contatos...")) : C.value.length ? ee("", !0) : (z(), T("p", YE, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (z(), T("div", KE, [
            p.value.action_type === "flow" ? (z(), T("div", ZE, [
              i("div", JE, [
                i("div", QE, [
                  i("div", ez, [
                    X(N(Nr), { class: "h-6 w-6" })
                  ]),
                  i("div", null, [
                    x[49] || (x[49] = i("span", { class: "text-[10px] font-bold uppercase tracking-wider text-emerald-400" }, "Fluxo de Automação Selecionado", -1)),
                    i("h4", tz, L(m.value?.name || "Nenhum fluxo selecionado"), 1)
                  ])
                ]),
                i("div", nz, [
                  i("div", rz, [
                    x[50] || (x[50] = i("span", { class: "text-zinc-500" }, "Gatilho do Fluxo:", -1)),
                    i("span", oz, L(m.value?.trigger_event || "Disparo Direto"), 1)
                  ]),
                  i("div", az, [
                    x[51] || (x[51] = i("span", { class: "text-zinc-500" }, "Blocos de Ação:", -1)),
                    i("span", sz, L(m.value?.graph_json?.nodes?.length || 0) + " blocos configurados", 1)
                  ]),
                  i("div", iz, [
                    x[52] || (x[52] = i("span", { class: "text-zinc-500" }, "Status:", -1)),
                    i("span", {
                      class: Z(["rounded-full px-2 py-0.5 text-[10px] font-semibold", m.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, L(m.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                x[53] || (x[53] = i("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : (z(), T("div", lz, [
              i("div", uz, [
                X(Sp, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: N(_)
                }, null, 8, ["data", "variables"])
              ]),
              i("div", null, [
                x[54] || (x[54] = i("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                X(vl, {
                  text: A.value,
                  caption: V.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": D.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? (z(), T("div", cz, [
            i("div", dz, [
              x[59] || (x[59] = i("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              i("div", fz, [
                i("div", null, [
                  x[55] || (x[55] = i("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  i("p", pz, L(p.value.name), 1)
                ]),
                i("div", null, [
                  x[56] || (x[56] = i("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  i("p", hz, L(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                i("div", null, [
                  x[57] || (x[57] = i("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  i("p", {
                    class: Z(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (z(), Oe(Ot(p.value.schedule_mode === "scheduled" ? N(es) : N(Bn)), { class: "h-3.5 w-3.5" })),
                    i("span", null, L(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                i("div", null, [
                  x[58] || (x[58] = i("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  i("p", mz, "~" + L(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              i("div", null, [
                i("span", vz, L(p.value.action_type === "flow" ? "Fluxo a Disparar:" : `Conteúdo da Mensagem (${p.value.message_data.mode}):`), 1),
                p.value.action_type === "flow" ? (z(), T("div", gz, " ⚡ " + L(m.value?.name || "Fluxo selecionado"), 1)) : (z(), T("div", yz, L(A.value || V.value || "—"), 1))
              ])
            ])
          ])) : ee("", !0)
        ]),
        i("div", bz, [
          r.value > 1 ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[15] || (x[15] = (q) => r.value--)
          }, [
            X(N(Xd), { class: "mr-2 h-4 w-4" }),
            x[60] || (x[60] = i("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (z(), T("div", xz)),
          i("div", wz, [
            i("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[16] || (x[16] = (q) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: F
            }, [
              x[61] || (x[61] = i("span", null, "Próximo", -1)),
              X(N(Sh), { class: "ml-2 h-4 w-4" })
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: Z(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: P
            }, [
              o.value ? (z(), Oe(N(It), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (z(), Oe(Ot(p.value.schedule_mode === "scheduled" ? N(es) : N(Pt)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              i("span", null, L(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, _z))
          ])
        ])
      ])
    ]));
  }
}, Sz = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, Ez = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, zz = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, $z = { class: "flex items-center gap-3" }, Pz = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, Cz = { class: "text-lg font-bold text-white" }, Az = { class: "mt-0.5 text-xs text-zinc-400" }, Tz = {
  key: 0,
  class: "text-zinc-500"
}, Oz = { class: "flex items-center gap-2" }, Nz = ["disabled"], Rz = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, Iz = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, Mz = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, Dz = { class: "flex items-center justify-between text-xs" }, Fz = { class: "flex items-center gap-2" }, Bz = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, Lz = { class: "font-bold text-white" }, Uz = { class: "font-mono font-bold text-emerald-400" }, qz = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, Vz = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, jz = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, Hz = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, Gz = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, Wz = { class: "mt-0.5 text-xl font-bold text-white" }, Xz = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, Yz = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, Kz = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, Zz = { class: "mt-0.5 text-xl font-bold text-amber-400" }, Jz = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, Qz = { class: "mt-0.5 text-xl font-bold text-red-400" }, e$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, t$ = { class: "relative max-w-sm flex-1" }, n$ = { class: "flex-1 overflow-y-auto p-6" }, r$ = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, o$ = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, a$ = { class: "w-full text-left text-xs" }, s$ = { class: "divide-y divide-zinc-800/60" }, i$ = { class: "px-4 py-3" }, l$ = { class: "font-medium text-white" }, u$ = ["title"], c$ = { class: "px-4 py-3 font-mono text-zinc-300" }, d$ = { class: "px-4 py-3" }, f$ = { class: "px-4 py-3 text-right text-zinc-400" }, p$ = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = W(null), a = W([]), s = W(!0), l = W(!1), d = W(""), u = W(""), c = W(""), f = J(() => {
      const m = u.value.trim().toLowerCase();
      return a.value.filter((g) => c.value && g.status !== c.value ? !1 : !m || `${g.name || ""} ${g.phone}`.toLowerCase().includes(m));
    }), v = (m) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[m] || "border-blue-500/20 bg-blue-500/10 text-blue-400", b = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const m = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(m / o.value.total_recipients * 100));
    });
    async function h() {
      s.value = !0, d.value = "";
      try {
        const m = await Ae.campaign(n.campaignId);
        o.value = m.campaign, a.value = m.sends || [];
      } catch (m) {
        d.value = m.message;
      } finally {
        s.value = !1;
      }
    }
    async function p() {
      l.value = !0, d.value = "";
      try {
        await Ae.cancelCampaign(n.campaignId), r("changed"), await h();
      } catch (m) {
        d.value = m.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(h), (m, g) => (z(), T("div", Sz, [
      i("div", Ez, [
        i("div", zz, [
          i("div", $z, [
            i("div", Pz, [
              X(N(Vr), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              i("div", Cz, L(o.value?.name || "Campanha"), 1),
              i("p", Az, [
                i("span", null, L(o.value ? N(kp)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (z(), T("span", Tz, " • " + L(o.value.message), 1)) : ee("", !0)
              ])
            ])
          ]),
          i("div", Oz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (z(), T("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              X(N(Eh), { class: "h-3.5 w-3.5" }),
              i("span", null, L(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, Nz)) : ee("", !0),
            i("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: g[0] || (g[0] = (_) => r("close"))
            }, [
              X(N(At), { class: "h-4 w-4" })
            ])
          ])
        ]),
        s.value ? (z(), T("p", Rz, "Carregando detalhes…")) : d.value ? (z(), T("p", Iz, L(d.value), 1)) : o.value ? (z(), T(ve, { key: 2 }, [
          i("div", Mz, [
            i("div", Dz, [
              i("div", Fz, [
                o.value.status === "running" ? (z(), T("span", Bz, [...g[3] || (g[3] = [
                  i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  i("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : ee("", !0),
                i("span", Lz, L(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              i("span", Uz, L(b.value) + "%", 1)
            ]),
            i("div", qz, [
              i("div", {
                class: Z(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${b.value}%` })
              }, null, 6)
            ]),
            i("div", Vz, [
              i("span", null, L(o.value.sent_count) + " de " + L(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (z(), T("span", jz, " 🛡️ Intervalo randômico (jitter) ativo ")) : ee("", !0)
            ])
          ]),
          i("div", Hz, [
            i("div", Gz, [
              g[4] || (g[4] = i("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              i("div", Wz, L(o.value.total_recipients), 1)
            ]),
            i("div", Xz, [
              g[5] || (g[5] = i("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              i("div", Yz, L(o.value.sent_count), 1)
            ]),
            i("div", Kz, [
              g[6] || (g[6] = i("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              i("div", Zz, L(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            i("div", Jz, [
              g[7] || (g[7] = i("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              i("div", Qz, L(o.value.error_count), 1)
            ])
          ]),
          i("div", e$, [
            i("div", t$, [
              X(N(Vr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ie(i("input", {
                "onUpdate:modelValue": g[1] || (g[1] = (_) => u.value = _),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [ye, u.value]
              ])
            ]),
            ie(i("select", {
              "onUpdate:modelValue": g[2] || (g[2] = (_) => c.value = _),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...g[8] || (g[8] = [
              Vd('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [lt, c.value]
            ])
          ]),
          i("div", n$, [
            f.value.length ? (z(), T("div", o$, [
              i("table", a$, [
                g[9] || (g[9] = i("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  i("tr", null, [
                    i("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    i("th", { class: "px-4 py-2.5" }, "Telefone"),
                    i("th", { class: "px-4 py-2.5" }, "Status"),
                    i("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                i("tbody", s$, [
                  (z(!0), T(ve, null, Re(f.value, (_) => (z(), T("tr", {
                    key: _.id
                  }, [
                    i("td", i$, [
                      i("div", l$, L(_.name || "—"), 1),
                      _.error_message ? (z(), T("div", {
                        key: 0,
                        title: _.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, L(_.error_message), 9, u$)) : ee("", !0)
                    ]),
                    i("td", c$, L(_.phone), 1),
                    i("td", d$, [
                      i("span", {
                        class: Z(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(_.status)])
                      }, L(N(iw)[_.status] || _.status), 3)
                    ]),
                    i("td", f$, L(_.sent_at ? new Date(_.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (z(), T("div", r$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : ee("", !0)
      ])
    ]));
  }
}, h$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, m$ = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, v$ = { class: "relative w-64" }, g$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, y$ = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, b$ = {
  key: 2,
  class: "py-10 text-center"
}, x$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, w$ = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, _$ = { class: "w-full text-left text-xs" }, k$ = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, S$ = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, E$ = { class: "px-3 py-2.5" }, z$ = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, $$ = { class: "px-3 py-2.5" }, P$ = { class: "px-3 py-2.5" }, C$ = { class: "flex items-center gap-2" }, A$ = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, T$ = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, O$ = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, N$ = { class: "px-3 py-2.5" }, R$ = ["onClick"], I$ = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = W([]), n = W(!0), r = W(""), o = W(""), a = W(!1), s = W(null), l = (c) => ({
      completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      cancelled: "border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      scheduled: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400"
    })[c] || "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400", d = J(() => {
      const c = o.value.trim().toLowerCase();
      return c ? t.value.filter((f) => f.name.toLowerCase().includes(c)) : t.value;
    });
    async function u() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ae.campaigns()).campaigns || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    return Ke(u), (c, f) => (z(), T("div", h$, [
      i("div", m$, [
        i("div", v$, [
          X(N(Vr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ie(i("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (v) => o.value = v),
            type: "text",
            placeholder: "Buscar campanhas...",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [ye, o.value]
          ])
        ]),
        i("button", {
          type: "button",
          class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
          onClick: f[1] || (f[1] = (v) => a.value = !0)
        }, [
          X(N(rf), { class: "h-4 w-4" }),
          f[4] || (f[4] = i("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (z(), T("p", g$, L(r.value), 1)) : ee("", !0),
      n.value ? (z(), T("div", y$, [
        X(N(It), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = i("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : d.value.length ? (z(), T("div", w$, [
        i("table", _$, [
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
          i("tbody", k$, [
            (z(!0), T(ve, null, Re(d.value, (v) => (z(), T("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", S$, L(v.name), 1),
              i("td", E$, [
                i("span", {
                  class: Z(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(v.status)])
                }, [
                  v.status === "running" ? (z(), T("span", z$, [...f[7] || (f[7] = [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    i("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : ee("", !0),
                  Ce(" " + L(N(kp)[v.status] || v.status), 1)
                ], 2)
              ]),
              i("td", $$, L(v.total_recipients), 1),
              i("td", P$, [
                i("div", C$, [
                  i("span", A$, L(v.sent_count) + "/" + L(v.total_recipients), 1),
                  i("div", T$, [
                    i("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              i("td", {
                class: Z(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, L(v.error_count), 3),
              i("td", O$, L(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              i("td", N$, [
                i("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (b) => s.value = v.id
                }, [
                  X(N($h), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = i("span", null, "Detalhes", -1))
                ], 8, R$)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", b$, [
        i("div", x$, [
          X(N(Pt), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (z(), Oe(kz, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => a.value = !1),
        onCreated: u
      })) : ee("", !0),
      s.value ? (z(), Oe(p$, {
        key: 5,
        "campaign-id": s.value,
        onClose: f[3] || (f[3] = (v) => s.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : ee("", !0)
    ]));
  }
}, M$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, D$ = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, F$ = ["disabled"], B$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, L$ = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, U$ = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, q$ = {
  key: 3,
  class: "py-10 text-center"
}, V$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, j$ = {
  key: 4,
  class: "mt-4 space-y-2"
}, H$ = { class: "flex items-center gap-3" }, G$ = { class: "font-semibold text-zinc-900 dark:text-white" }, W$ = { class: "text-zinc-500 dark:text-zinc-400" }, X$ = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, Y$ = ["title"], K$ = ["title"], Z$ = { class: "flex items-center gap-2" }, J$ = ["disabled", "onClick"], Q$ = {
  __name: "RunsPanel",
  setup(e) {
    const t = W([]), n = W(!0), r = W(""), o = W(""), a = W(null), s = (c) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[c] || "bg-amber-500", l = (c) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[c] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function d() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ae.runs()).runs || [];
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
          await Ae.retryRun(c.id), o.value = `Execução #${c.id} reiniciada.`, await d();
        } catch (f) {
          r.value = f.message;
        } finally {
          a.value = null;
        }
      }
    }
    return Ke(d), (c, f) => (z(), T("div", M$, [
      i("div", D$, [
        f[0] || (f[0] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        i("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: d
        }, " Atualizar ", 8, F$)
      ]),
      r.value ? (z(), T("p", B$, L(r.value), 1)) : o.value ? (z(), T("p", L$, L(o.value), 1)) : ee("", !0),
      n.value ? (z(), T("div", U$, [
        X(N(It), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = i("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (z(), T("div", j$, [
        (z(!0), T(ve, null, Re(t.value, (v) => (z(), T("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          i("div", H$, [
            i("span", {
              class: Z(["h-2 w-2 rounded-full", s(v.status)])
            }, null, 2),
            i("div", null, [
              i("div", G$, "Fluxo #" + L(v.flow_id), 1),
              i("div", W$, L(N(Bo)(v.event_class)) + " • " + L(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (z(), T("div", X$, [
                X(N(Ch), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                i("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + L(v.context.last_reply) + "”", 9, Y$)
              ])) : ee("", !0),
              v.last_error ? (z(), T("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, L(v.last_error), 9, K$)) : ee("", !0)
            ])
          ]),
          i("div", Z$, [
            v.status === "failed" ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === v.id,
              onClick: (b) => u(v)
            }, [
              X(N(Nh), {
                class: Z(["h-3 w-3", { "animate-spin": a.value === v.id }])
              }, null, 8, ["class"]),
              i("span", null, L(a.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, J$)) : ee("", !0),
            i("span", {
              class: Z(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(v.status)])
            }, L(N(lw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (z(), T("div", q$, [
        i("div", V$, [
          X(N(Qd), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, e3 = { class: "mx-auto max-w-6xl space-y-6" }, t3 = { class: "flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900" }, n3 = { class: "flex items-center gap-4" }, r3 = { class: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400" }, o3 = { class: "flex items-center gap-3" }, a3 = { class: "relative inline-flex cursor-pointer items-center" }, s3 = {
  key: 0,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, i3 = {
  key: 1,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, l3 = {
  key: 2,
  class: "flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300"
}, u3 = {
  key: 3,
  class: "flex h-64 items-center justify-center"
}, c3 = {
  key: 4,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, d3 = { class: "space-y-6 lg:col-span-7" }, f3 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, p3 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, h3 = { class: "mt-6 space-y-4" }, m3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, v3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, g3 = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, y3 = { class: "flex items-center justify-between" }, b3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, x3 = {
  key: 0,
  class: "mt-3 space-y-2"
}, w3 = { class: "flex flex-wrap gap-1.5" }, _3 = ["title", "onClick"], k3 = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, S3 = ["disabled"], E3 = ["disabled"], z3 = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, $3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, P3 = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, C3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, A3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, T3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, O3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, N3 = { class: "lg:col-span-5" }, R3 = { class: "overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, I3 = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, M3 = { class: "min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, D3 = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, F3 = { class: "font-sans whitespace-pre-wrap select-text" }, B3 = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, L3 = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, U3 = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = W(!0), n = W(!1), r = W(!1), o = W(""), a = W(""), s = W(""), l = W(""), d = W(null), u = W(!1), c = hr({
      enabled: !1,
      time: "23:59",
      phone: "",
      custom_template: ""
    }), f = [
      { tag: "{{date}}", label: "Data do relatório" },
      { tag: "{{total_formatted}}", label: "Faturamento total" },
      { tag: "{{orders_count}}", label: "Vendas aprovadas" },
      { tag: "{{ticket_medio_formatted}}", label: "Ticket médio" },
      { tag: "{{pending_total_formatted}}", label: "Valor pendente" },
      { tag: "{{pending_count}}", label: "Qtd pendente" },
      { tag: "{{payment_methods_text}}", label: "Formas de pagamento" },
      { tag: "{{products_text}}", label: "Produtos vendidos" },
      { tag: "{{bumps_section}}", label: "Order Bumps vendidos" }
    ];
    async function v() {
      t.value = !0, o.value = "";
      try {
        const g = await Ae.dailyReport();
        c.enabled = !!g.config?.enabled, c.time = g.config?.time || "23:59", c.phone = g.config?.phone || "", c.custom_template = g.config?.custom_template || "", u.value = !!g.config?.custom_template, l.value = g.preview || "", d.value = g.data || null;
      } catch (g) {
        o.value = g.message || "Falha ao carregar configurações do relatório.";
      } finally {
        t.value = !1;
      }
    }
    async function b() {
      n.value = !0, o.value = "", a.value = "";
      try {
        const g = await Ae.saveDailyReport({
          enabled: c.enabled,
          time: c.time,
          phone: c.phone,
          custom_template: u.value ? c.custom_template : null
        });
        l.value = g.preview || l.value, a.value = "Configurações do relatório diário salvas com sucesso!", setTimeout(() => {
          a.value = "";
        }, 5e3);
      } catch (g) {
        o.value = g.message || "Erro ao salvar configurações.";
      } finally {
        n.value = !1;
      }
    }
    async function h() {
      if (!c.phone) {
        o.value = "Informe o número do WhatsApp de destino antes de testar.";
        return;
      }
      r.value = !0, o.value = "", s.value = "";
      try {
        const g = await Ae.testDailyReport({ phone: c.phone });
        s.value = g.message || "Relatório de teste enviado para o WhatsApp!", g.preview && (l.value = g.preview), setTimeout(() => {
          s.value = "";
        }, 8e3);
      } catch (g) {
        o.value = g.message || "Falha ao disparar relatório de teste.";
      } finally {
        r.value = !1;
      }
    }
    function p(g) {
      c.custom_template = (c.custom_template || "") + " " + g;
    }
    const m = J(() => (l.value || "").split(`
`));
    return Ke(v), (g, _) => (z(), T("div", e3, [
      i("div", t3, [
        i("div", n3, [
          i("div", r3, [
            X(N(Yd), { class: "h-7 w-7" })
          ]),
          _[5] || (_[5] = i("div", null, [
            i("h2", { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, "Relatório Diário de Vendas no WhatsApp"),
            i("p", { class: "text-xs text-zinc-600 dark:text-zinc-400" }, " Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo com faturamento, vendas, formas de pagamento e order bumps. ")
          ], -1))
        ]),
        i("div", o3, [
          i("span", {
            class: Z(["text-xs font-semibold", c.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, L(c.enabled ? "● Envio Ativo" : "○ Envio Desativado"), 3),
          i("label", a3, [
            ie(i("input", {
              "onUpdate:modelValue": _[0] || (_[0] = (y) => c.enabled = y),
              type: "checkbox",
              class: "peer sr-only",
              onChange: b
            }, null, 544), [
              [qd, c.enabled]
            ]),
            _[6] || (_[6] = i("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      a.value ? (z(), T("div", s3, [
        X(N(qr), { class: "h-5 w-5 shrink-0" }),
        i("span", null, L(a.value), 1)
      ])) : ee("", !0),
      s.value ? (z(), T("div", i3, [
        X(N(Pt), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        i("span", null, L(s.value), 1)
      ])) : ee("", !0),
      o.value ? (z(), T("div", l3, [
        X(N(xa), { class: "h-5 w-5 shrink-0" }),
        i("span", null, L(o.value), 1)
      ])) : ee("", !0),
      t.value ? (z(), T("div", u3, [
        X(N(It), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (z(), T("div", c3, [
        i("div", d3, [
          i("div", f3, [
            i("h3", p3, [
              X(N(ar), { class: "h-4 w-4 text-emerald-500" }),
              _[7] || (_[7] = Ce(" Agendamento & Destino ", -1))
            ]),
            _[15] || (_[15] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Defina o horário e para qual número do WhatsApp o relatório diário consolidado será entregue. ", -1)),
            i("div", h3, [
              i("div", null, [
                _[8] || (_[8] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                i("div", m3, [
                  X(N(Th), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(i("input", {
                    "onUpdate:modelValue": _[1] || (_[1] = (y) => c.phone = y),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, c.phone]
                  ])
                ]),
                _[9] || (_[9] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ]),
              i("div", null, [
                _[10] || (_[10] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Horário de Disparo Diário * ", -1)),
                i("div", v3, [
                  X(N(ar), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ie(i("input", {
                    "onUpdate:modelValue": _[2] || (_[2] = (y) => c.time = y),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, c.time]
                  ])
                ]),
                _[11] || (_[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                  Ce(" Padrão sugerido: "),
                  i("strong", null, "23:59"),
                  Ce(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ")
                ], -1))
              ]),
              i("div", g3, [
                i("div", y3, [
                  i("div", null, [
                    _[12] || (_[12] = i("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    i("p", b3, L(u.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  i("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: _[3] || (_[3] = (y) => u.value = !u.value)
                  }, L(u.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                u.value ? (z(), T("div", x3, [
                  i("div", w3, [
                    (z(), T(ve, null, Re(f, (y) => i("button", {
                      key: y.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: y.label,
                      onClick: (k) => p(y.tag)
                    }, L(y.tag), 9, _3)), 64))
                  ]),
                  ie(i("textarea", {
                    "onUpdate:modelValue": _[4] || (_[4] = (y) => c.custom_template = y),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [ye, c.custom_template]
                  ])
                ])) : ee("", !0)
              ]),
              i("div", k3, [
                i("button", {
                  type: "button",
                  disabled: n.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: b
                }, [
                  n.value ? (z(), Oe(N(It), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (z(), Oe(N(qr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  _[13] || (_[13] = Ce(" Salvar Configurações ", -1))
                ], 8, S3),
                i("button", {
                  type: "button",
                  disabled: r.value || !c.phone,
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: h
                }, [
                  r.value ? (z(), Oe(N(It), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (z(), Oe(N(Pt), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  _[14] || (_[14] = Ce(" Enviar Agora (Teste) ", -1))
                ], 8, E3)
              ])
            ])
          ]),
          d.value ? (z(), T("div", z3, [
            i("div", $3, [
              _[16] || (_[16] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Faturamento Hoje", -1)),
              i("div", P3, L(d.value.total_formatted), 1)
            ]),
            i("div", C3, [
              _[17] || (_[17] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Vendas Aprovadas", -1)),
              i("div", A3, L(d.value.orders_count), 1)
            ]),
            i("div", T3, [
              _[18] || (_[18] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Order Bumps", -1)),
              i("div", O3, L(d.value.bumps_count) + " (" + L(d.value.bumps_total_formatted) + ")", 1)
            ])
          ])) : ee("", !0)
        ]),
        i("div", N3, [
          i("div", R3, [
            i("div", I3, [
              _[19] || (_[19] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, " ZR ", -1)),
              _[20] || (_[20] = i("div", { class: "flex-1" }, [
                i("div", { class: "text-xs font-bold leading-tight" }, "ZapRei Notificações"),
                i("div", { class: "text-[10px] text-white/70" }, "relatório diário automático")
              ], -1)),
              X(N(rl), { class: "h-4 w-4 text-emerald-300" })
            ]),
            i("div", M3, [
              i("div", D3, [
                i("div", F3, [
                  (z(!0), T(ve, null, Re(m.value, (y, k) => (z(), T("div", {
                    key: k,
                    class: "min-h-[1.2em]"
                  }, L(y), 1))), 128))
                ]),
                i("div", B3, [
                  i("span", null, L(c.time || "23:59"), 1),
                  _[21] || (_[21] = i("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            i("div", L3, [
              _[22] || (_[22] = Ce(" Disparo automático via ", -1)),
              _[23] || (_[23] = i("strong", null, "Evolution GO", -1)),
              Ce(" às " + L(c.time), 1)
            ])
          ])
        ])
      ]))
    ]));
  }
}, q3 = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, V3 = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, j3 = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, H3 = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, G3 = { class: "flex flex-wrap items-center gap-3" }, W3 = { class: "text-xs font-bold" }, X3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, Y3 = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, K3 = { class: "flex items-center justify-between" }, Z3 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, J3 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, Q3 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, e4 = { class: "flex items-center justify-between" }, t4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, n4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, r4 = { class: "flex items-center justify-between" }, o4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, a4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, s4 = { class: "flex items-center justify-between" }, i4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, l4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, u4 = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, c4 = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, d4 = ["onClick"], f4 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, p4 = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Bn, component: mS },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Pt, component: I$ },
      { id: "daily_report", label: "Relatório Diário", icon: Yd, component: U3 },
      { id: "contacts", label: "Base de Contatos", icon: wi, component: KS },
      { id: "runs", label: "Execuções", icon: Qd, component: Q$ },
      { id: "connection", label: "Conexão", icon: nf, component: sf }
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
        r.value = (await Ae.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function l() {
      try {
        const [u, c, f, v] = await Promise.all([
          Ae.flows().catch(() => ({ flows: [] })),
          Ae.campaigns().catch(() => ({ campaigns: [] })),
          Ae.contacts().catch(() => ({ counts: {} })),
          Ae.runs().catch(() => ({ runs: [] }))
        ]), b = u.flows || [], h = c.campaigns || [], p = v.runs || [], m = f.counts?.all || 0;
        o.value = {
          flows: b.length,
          campaigns: h.length,
          contacts: m
        };
        const g = b.filter((k) => k.is_active).length, _ = p.filter((k) => k.status === "completed").length, y = p.length ? Math.round(_ / p.length * 100) : 100;
        a.value = {
          flowsCount: b.length,
          activeFlowsCount: g,
          campaignsCount: h.length,
          contactsCount: m,
          runsCount: p.length,
          runsSuccessRate: y
        };
      } catch {
      }
    }
    const d = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ke(() => {
      s(), l();
    }), (u, c) => (z(), T("div", q3, [
      i("div", V3, [
        i("div", j3, [
          i("div", null, [
            i("div", H3, [
              X(N(ef), { class: "h-3.5 w-3.5" }),
              c[5] || (c[5] = i("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            c[6] || (c[6] = i("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            c[7] || (c[7] = i("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          i("div", G3, [
            i("div", {
              class: Z(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              i("div", {
                class: Z(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              i("div", null, [
                i("div", W3, L(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                i("div", X3, L(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              i("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: c[0] || (c[0] = (f) => n.value = "connection")
              }, L(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        i("div", Y3, [
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[1] || (c[1] = (f) => n.value = "flows")
          }, [
            i("div", K3, [
              c[8] || (c[8] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              i("div", Z3, [
                X(N(Bn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", J3, [
              Ce(L(a.value.activeFlowsCount) + " ", 1),
              c[9] || (c[9] = i("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            i("div", Q3, " de " + L(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[2] || (c[2] = (f) => n.value = "campaigns")
          }, [
            i("div", e4, [
              c[10] || (c[10] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              i("div", t4, [
                X(N(Pt), { class: "h-4 w-4" })
              ])
            ]),
            i("div", n4, L(a.value.campaignsCount), 1),
            c[11] || (c[11] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[3] || (c[3] = (f) => n.value = "contacts")
          }, [
            i("div", r4, [
              c[12] || (c[12] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              i("div", o4, [
                X(N(wi), { class: "h-4 w-4" })
              ])
            ]),
            i("div", a4, L(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            c[13] || (c[13] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[4] || (c[4] = (f) => n.value = "runs")
          }, [
            i("div", s4, [
              c[14] || (c[14] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              i("div", i4, [
                X(N(kh), { class: "h-4 w-4" })
              ])
            ]),
            i("div", l4, [
              Ce(L(a.value.runsCount) + " ", 1),
              c[15] || (c[15] = i("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            i("div", u4, [
              c[16] || (c[16] = i("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              i("span", null, L(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        i("div", c4, [
          (z(), T(ve, null, Re(t, (f) => i("button", {
            key: f.id,
            type: "button",
            class: Z(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            (z(), Oe(Ot(f.icon), { class: "h-4 w-4" })),
            i("span", null, L(f.label), 1),
            d(f.id) !== null && d(f.id) > 0 ? (z(), T("span", {
              key: 0,
              class: Z(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, L(d(f.id)), 3)) : ee("", !0)
          ], 10, d4)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (z(), T("p", f4, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : ee("", !0),
      (z(), Oe(Ot(t.find((f) => f.id === n.value).component), ba({ key: n.value }, gh(n.value === "connection" ? { saved: s } : {})), null, 16))
    ]));
  }
}, h4 = { class: "space-y-4" }, m4 = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (z(), T("div", h4, [
      X(sf, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = i("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          Ce(" Fluxos, contatos e campanhas ficam no menu "),
          i("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          Ce(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var $p = typeof global == "object" && global && global.Object === Object && global, v4 = typeof self == "object" && self && self.Object === Object && self, Ft = $p || v4 || Function("return this")(), Kt = Ft.Symbol, Pp = Object.prototype, g4 = Pp.hasOwnProperty, y4 = Pp.toString, Sr = Kt ? Kt.toStringTag : void 0;
function b4(e) {
  var t = g4.call(e, Sr), n = e[Sr];
  try {
    e[Sr] = void 0;
    var r = !0;
  } catch {
  }
  var o = y4.call(e);
  return r && (t ? e[Sr] = n : delete e[Sr]), o;
}
var x4 = Object.prototype, w4 = x4.toString;
function _4(e) {
  return w4.call(e);
}
var k4 = "[object Null]", S4 = "[object Undefined]", Vu = Kt ? Kt.toStringTag : void 0;
function Hn(e) {
  return e == null ? e === void 0 ? S4 : k4 : Vu && Vu in Object(e) ? b4(e) : _4(e);
}
function Zt(e) {
  return e != null && typeof e == "object";
}
var E4 = "[object Symbol]";
function Ta(e) {
  return typeof e == "symbol" || Zt(e) && Hn(e) == E4;
}
function z4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Mt = Array.isArray, ju = Kt ? Kt.prototype : void 0, Hu = ju ? ju.toString : void 0;
function Cp(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return z4(e, Cp) + "";
  if (Ta(e))
    return Hu ? Hu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var $4 = /\s/;
function P4(e) {
  for (var t = e.length; t-- && $4.test(e.charAt(t)); )
    ;
  return t;
}
var C4 = /^\s+/;
function A4(e) {
  return e && e.slice(0, P4(e) + 1).replace(C4, "");
}
function _t(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Gu = NaN, T4 = /^[-+]0x[0-9a-f]+$/i, O4 = /^0b[01]+$/i, N4 = /^0o[0-7]+$/i, R4 = parseInt;
function Wu(e) {
  if (typeof e == "number")
    return e;
  if (Ta(e))
    return Gu;
  if (_t(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _t(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = A4(e);
  var n = O4.test(e);
  return n || N4.test(e) ? R4(e.slice(2), n ? 2 : 8) : T4.test(e) ? Gu : +e;
}
function Ap(e) {
  return e;
}
var I4 = "[object AsyncFunction]", M4 = "[object Function]", D4 = "[object GeneratorFunction]", F4 = "[object Proxy]";
function gl(e) {
  if (!_t(e))
    return !1;
  var t = Hn(e);
  return t == M4 || t == D4 || t == I4 || t == F4;
}
var fs = Ft["__core-js_shared__"], Xu = (function() {
  var e = /[^.]+$/.exec(fs && fs.keys && fs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function B4(e) {
  return !!Xu && Xu in e;
}
var L4 = Function.prototype, U4 = L4.toString;
function Gn(e) {
  if (e != null) {
    try {
      return U4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var q4 = /[\\^$.*+?()[\]{}|]/g, V4 = /^\[object .+?Constructor\]$/, j4 = Function.prototype, H4 = Object.prototype, G4 = j4.toString, W4 = H4.hasOwnProperty, X4 = RegExp(
  "^" + G4.call(W4).replace(q4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Y4(e) {
  if (!_t(e) || B4(e))
    return !1;
  var t = gl(e) ? X4 : V4;
  return t.test(Gn(e));
}
function K4(e, t) {
  return e?.[t];
}
function Wn(e, t) {
  var n = K4(e, t);
  return Y4(n) ? n : void 0;
}
var Fi = Wn(Ft, "WeakMap"), Yu = Object.create, Z4 = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!_t(t))
      return {};
    if (Yu)
      return Yu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function J4(e, t, n) {
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
function Q4(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var eP = 800, tP = 16, nP = Date.now;
function rP(e) {
  var t = 0, n = 0;
  return function() {
    var r = nP(), o = tP - (r - n);
    if (n = r, o > 0) {
      if (++t >= eP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function oP(e) {
  return function() {
    return e;
  };
}
var la = (function() {
  try {
    var e = Wn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), aP = la ? function(e, t) {
  return la(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: oP(t),
    writable: !0
  });
} : Ap, sP = rP(aP);
function iP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var lP = 9007199254740991, uP = /^(?:0|[1-9]\d*)$/;
function Oa(e, t) {
  var n = typeof e;
  return t = t ?? lP, !!t && (n == "number" || n != "symbol" && uP.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function yl(e, t, n) {
  t == "__proto__" && la ? la(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function io(e, t) {
  return e === t || e !== e && t !== t;
}
var cP = Object.prototype, dP = cP.hasOwnProperty;
function bl(e, t, n) {
  var r = e[t];
  (!(dP.call(e, t) && io(r, n)) || n === void 0 && !(t in e)) && yl(e, t, n);
}
function fP(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), o ? yl(n, l, d) : bl(n, l, d);
  }
  return n;
}
var Ku = Math.max;
function pP(e, t, n) {
  return t = Ku(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ku(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), J4(e, this, l);
  };
}
function hP(e, t) {
  return sP(pP(e, t, Ap), e + "");
}
var mP = 9007199254740991;
function xl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mP;
}
function Na(e) {
  return e != null && xl(e.length) && !gl(e);
}
function vP(e, t, n) {
  if (!_t(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Na(n) && Oa(t, n.length) : r == "string" && t in n) ? io(n[t], e) : !1;
}
function gP(e) {
  return hP(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && vP(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var yP = Object.prototype;
function wl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yP;
  return e === n;
}
function bP(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var xP = "[object Arguments]";
function Zu(e) {
  return Zt(e) && Hn(e) == xP;
}
var Tp = Object.prototype, wP = Tp.hasOwnProperty, _P = Tp.propertyIsEnumerable, ua = Zu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Zu : function(e) {
  return Zt(e) && wP.call(e, "callee") && !_P.call(e, "callee");
};
function kP() {
  return !1;
}
var Op = typeof exports == "object" && exports && !exports.nodeType && exports, Ju = Op && typeof module == "object" && module && !module.nodeType && module, SP = Ju && Ju.exports === Op, Qu = SP ? Ft.Buffer : void 0, EP = Qu ? Qu.isBuffer : void 0, Jr = EP || kP, zP = "[object Arguments]", $P = "[object Array]", PP = "[object Boolean]", CP = "[object Date]", AP = "[object Error]", TP = "[object Function]", OP = "[object Map]", NP = "[object Number]", RP = "[object Object]", IP = "[object RegExp]", MP = "[object Set]", DP = "[object String]", FP = "[object WeakMap]", BP = "[object ArrayBuffer]", LP = "[object DataView]", UP = "[object Float32Array]", qP = "[object Float64Array]", VP = "[object Int8Array]", jP = "[object Int16Array]", HP = "[object Int32Array]", GP = "[object Uint8Array]", WP = "[object Uint8ClampedArray]", XP = "[object Uint16Array]", YP = "[object Uint32Array]", We = {};
We[UP] = We[qP] = We[VP] = We[jP] = We[HP] = We[GP] = We[WP] = We[XP] = We[YP] = !0;
We[zP] = We[$P] = We[BP] = We[PP] = We[LP] = We[CP] = We[AP] = We[TP] = We[OP] = We[NP] = We[RP] = We[IP] = We[MP] = We[DP] = We[FP] = !1;
function KP(e) {
  return Zt(e) && xl(e.length) && !!We[Hn(e)];
}
function _l(e) {
  return function(t) {
    return e(t);
  };
}
var Np = typeof exports == "object" && exports && !exports.nodeType && exports, Dr = Np && typeof module == "object" && module && !module.nodeType && module, ZP = Dr && Dr.exports === Np, ps = ZP && $p.process, dr = (function() {
  try {
    var e = Dr && Dr.require && Dr.require("util").types;
    return e || ps && ps.binding && ps.binding("util");
  } catch {
  }
})(), ec = dr && dr.isTypedArray, kl = ec ? _l(ec) : KP, JP = Object.prototype, QP = JP.hasOwnProperty;
function Rp(e, t) {
  var n = Mt(e), r = !n && ua(e), o = !n && !r && Jr(e), a = !n && !r && !o && kl(e), s = n || r || o || a, l = s ? bP(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || QP.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Oa(u, d))) && l.push(u);
  return l;
}
function Ip(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var eC = Ip(Object.keys, Object), tC = Object.prototype, nC = tC.hasOwnProperty;
function rC(e) {
  if (!wl(e))
    return eC(e);
  var t = [];
  for (var n in Object(e))
    nC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function oC(e) {
  return Na(e) ? Rp(e) : rC(e);
}
function aC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var sC = Object.prototype, iC = sC.hasOwnProperty;
function lC(e) {
  if (!_t(e))
    return aC(e);
  var t = wl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !iC.call(e, r)) || n.push(r);
  return n;
}
function Mp(e) {
  return Na(e) ? Rp(e, !0) : lC(e);
}
var uC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cC = /^\w*$/;
function dC(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ta(e) ? !0 : cC.test(e) || !uC.test(e) || t != null && e in Object(t);
}
var Qr = Wn(Object, "create");
function fC() {
  this.__data__ = Qr ? Qr(null) : {}, this.size = 0;
}
function pC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hC = "__lodash_hash_undefined__", mC = Object.prototype, vC = mC.hasOwnProperty;
function gC(e) {
  var t = this.__data__;
  if (Qr) {
    var n = t[e];
    return n === hC ? void 0 : n;
  }
  return vC.call(t, e) ? t[e] : void 0;
}
var yC = Object.prototype, bC = yC.hasOwnProperty;
function xC(e) {
  var t = this.__data__;
  return Qr ? t[e] !== void 0 : bC.call(t, e);
}
var wC = "__lodash_hash_undefined__";
function _C(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qr && t === void 0 ? wC : t, this;
}
function Vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vn.prototype.clear = fC;
Vn.prototype.delete = pC;
Vn.prototype.get = gC;
Vn.prototype.has = xC;
Vn.prototype.set = _C;
function kC() {
  this.__data__ = [], this.size = 0;
}
function Ra(e, t) {
  for (var n = e.length; n--; )
    if (io(e[n][0], t))
      return n;
  return -1;
}
var SC = Array.prototype, EC = SC.splice;
function zC(e) {
  var t = this.__data__, n = Ra(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : EC.call(t, n, 1), --this.size, !0;
}
function $C(e) {
  var t = this.__data__, n = Ra(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function PC(e) {
  return Ra(this.__data__, e) > -1;
}
function CC(e, t) {
  var n = this.__data__, r = Ra(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dn.prototype.clear = kC;
dn.prototype.delete = zC;
dn.prototype.get = $C;
dn.prototype.has = PC;
dn.prototype.set = CC;
var eo = Wn(Ft, "Map");
function AC() {
  this.size = 0, this.__data__ = {
    hash: new Vn(),
    map: new (eo || dn)(),
    string: new Vn()
  };
}
function TC(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ia(e, t) {
  var n = e.__data__;
  return TC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function OC(e) {
  var t = Ia(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function NC(e) {
  return Ia(this, e).get(e);
}
function RC(e) {
  return Ia(this, e).has(e);
}
function IC(e, t) {
  var n = Ia(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fn.prototype.clear = AC;
fn.prototype.delete = OC;
fn.prototype.get = NC;
fn.prototype.has = RC;
fn.prototype.set = IC;
var MC = "Expected a function";
function Sl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(MC);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Sl.Cache || fn)(), n;
}
Sl.Cache = fn;
var DC = 500;
function FC(e) {
  var t = Sl(e, function(r) {
    return n.size === DC && n.clear(), r;
  }), n = t.cache;
  return t;
}
var BC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, LC = /\\(\\)?/g, UC = FC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(BC, function(n, r, o, a) {
    t.push(o ? a.replace(LC, "$1") : r || n);
  }), t;
});
function Dp(e) {
  return e == null ? "" : Cp(e);
}
function El(e, t) {
  return Mt(e) ? e : dC(e, t) ? [e] : UC(Dp(e));
}
function zl(e) {
  if (typeof e == "string" || Ta(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function qC(e, t) {
  t = El(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[zl(t[n++])];
  return n && n == r ? e : void 0;
}
function xt(e, t, n) {
  var r = e == null ? void 0 : qC(e, t);
  return r === void 0 ? n : r;
}
function VC(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Fp = Ip(Object.getPrototypeOf, Object), jC = "[object Object]", HC = Function.prototype, GC = Object.prototype, Bp = HC.toString, WC = GC.hasOwnProperty, XC = Bp.call(Object);
function YC(e) {
  if (!Zt(e) || Hn(e) != jC)
    return !1;
  var t = Fp(e);
  if (t === null)
    return !0;
  var n = WC.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Bp.call(n) == XC;
}
function KC(e) {
  return function(t) {
    return e?.[t];
  };
}
function ZC() {
  this.__data__ = new dn(), this.size = 0;
}
function JC(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function QC(e) {
  return this.__data__.get(e);
}
function eA(e) {
  return this.__data__.has(e);
}
var tA = 200;
function nA(e, t) {
  var n = this.__data__;
  if (n instanceof dn) {
    var r = n.__data__;
    if (!eo || r.length < tA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new fn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Yt(e) {
  var t = this.__data__ = new dn(e);
  this.size = t.size;
}
Yt.prototype.clear = ZC;
Yt.prototype.delete = JC;
Yt.prototype.get = QC;
Yt.prototype.has = eA;
Yt.prototype.set = nA;
var Lp = typeof exports == "object" && exports && !exports.nodeType && exports, tc = Lp && typeof module == "object" && module && !module.nodeType && module, rA = tc && tc.exports === Lp, nc = rA ? Ft.Buffer : void 0, rc = nc ? nc.allocUnsafe : void 0;
function Up(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = rc ? rc(n) : new e.constructor(n);
  return e.copy(r), r;
}
function oA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function aA() {
  return [];
}
var sA = Object.prototype, iA = sA.propertyIsEnumerable, oc = Object.getOwnPropertySymbols, lA = oc ? function(e) {
  return e == null ? [] : (e = Object(e), oA(oc(e), function(t) {
    return iA.call(e, t);
  }));
} : aA;
function uA(e, t, n) {
  var r = t(e);
  return Mt(e) ? r : VC(r, n(e));
}
function Bi(e) {
  return uA(e, oC, lA);
}
var Li = Wn(Ft, "DataView"), Ui = Wn(Ft, "Promise"), qi = Wn(Ft, "Set"), ac = "[object Map]", cA = "[object Object]", sc = "[object Promise]", ic = "[object Set]", lc = "[object WeakMap]", uc = "[object DataView]", dA = Gn(Li), fA = Gn(eo), pA = Gn(Ui), hA = Gn(qi), mA = Gn(Fi), Tt = Hn;
(Li && Tt(new Li(new ArrayBuffer(1))) != uc || eo && Tt(new eo()) != ac || Ui && Tt(Ui.resolve()) != sc || qi && Tt(new qi()) != ic || Fi && Tt(new Fi()) != lc) && (Tt = function(e) {
  var t = Hn(e), n = t == cA ? e.constructor : void 0, r = n ? Gn(n) : "";
  if (r)
    switch (r) {
      case dA:
        return uc;
      case fA:
        return ac;
      case pA:
        return sc;
      case hA:
        return ic;
      case mA:
        return lc;
    }
  return t;
});
var vA = Object.prototype, gA = vA.hasOwnProperty;
function yA(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && gA.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ca = Ft.Uint8Array;
function $l(e) {
  var t = new e.constructor(e.byteLength);
  return new ca(t).set(new ca(e)), t;
}
function bA(e, t) {
  var n = $l(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var xA = /\w*$/;
function wA(e) {
  var t = new e.constructor(e.source, xA.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var cc = Kt ? Kt.prototype : void 0, dc = cc ? cc.valueOf : void 0;
function _A(e) {
  return dc ? Object(dc.call(e)) : {};
}
function qp(e, t) {
  var n = t ? $l(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var kA = "[object Boolean]", SA = "[object Date]", EA = "[object Map]", zA = "[object Number]", $A = "[object RegExp]", PA = "[object Set]", CA = "[object String]", AA = "[object Symbol]", TA = "[object ArrayBuffer]", OA = "[object DataView]", NA = "[object Float32Array]", RA = "[object Float64Array]", IA = "[object Int8Array]", MA = "[object Int16Array]", DA = "[object Int32Array]", FA = "[object Uint8Array]", BA = "[object Uint8ClampedArray]", LA = "[object Uint16Array]", UA = "[object Uint32Array]";
function qA(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case TA:
      return $l(e);
    case kA:
    case SA:
      return new r(+e);
    case OA:
      return bA(e);
    case NA:
    case RA:
    case IA:
    case MA:
    case DA:
    case FA:
    case BA:
    case LA:
    case UA:
      return qp(e, n);
    case EA:
      return new r();
    case zA:
    case CA:
      return new r(e);
    case $A:
      return wA(e);
    case PA:
      return new r();
    case AA:
      return _A(e);
  }
}
function Vp(e) {
  return typeof e.constructor == "function" && !wl(e) ? Z4(Fp(e)) : {};
}
var VA = "[object Map]";
function jA(e) {
  return Zt(e) && Tt(e) == VA;
}
var fc = dr && dr.isMap, HA = fc ? _l(fc) : jA, GA = "[object Set]";
function WA(e) {
  return Zt(e) && Tt(e) == GA;
}
var pc = dr && dr.isSet, XA = pc ? _l(pc) : WA, YA = 1, jp = "[object Arguments]", KA = "[object Array]", ZA = "[object Boolean]", JA = "[object Date]", QA = "[object Error]", Hp = "[object Function]", eT = "[object GeneratorFunction]", tT = "[object Map]", nT = "[object Number]", Gp = "[object Object]", rT = "[object RegExp]", oT = "[object Set]", aT = "[object String]", sT = "[object Symbol]", iT = "[object WeakMap]", lT = "[object ArrayBuffer]", uT = "[object DataView]", cT = "[object Float32Array]", dT = "[object Float64Array]", fT = "[object Int8Array]", pT = "[object Int16Array]", hT = "[object Int32Array]", mT = "[object Uint8Array]", vT = "[object Uint8ClampedArray]", gT = "[object Uint16Array]", yT = "[object Uint32Array]", He = {};
He[jp] = He[KA] = He[lT] = He[uT] = He[ZA] = He[JA] = He[cT] = He[dT] = He[fT] = He[pT] = He[hT] = He[tT] = He[nT] = He[Gp] = He[rT] = He[oT] = He[aT] = He[sT] = He[mT] = He[vT] = He[gT] = He[yT] = !0;
He[QA] = He[Hp] = He[iT] = !1;
function Lo(e, t, n, r, o, a) {
  var s, l = t & YA;
  if (s !== void 0)
    return s;
  if (!_t(e))
    return e;
  var d = Mt(e);
  if (d)
    s = yA(e);
  else {
    var u = Tt(e), c = u == Hp || u == eT;
    if (Jr(e))
      return Up(e, l);
    if (u == Gp || u == jp || c && !o)
      s = c ? {} : Vp(e);
    else {
      if (!He[u])
        return o ? e : {};
      s = qA(e, u, l);
    }
  }
  a || (a = new Yt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, s), XA(e) ? e.forEach(function(h) {
    s.add(Lo(h, t, n, h, e, a));
  }) : HA(e) && e.forEach(function(h, p) {
    s.set(p, Lo(h, t, n, p, e, a));
  });
  var v = Bi, b = d ? void 0 : v(e);
  return iP(b || e, function(h, p) {
    b && (p = h, h = e[p]), bl(s, p, Lo(h, t, n, p, e, a));
  }), s;
}
var bT = 1, xT = 4;
function it(e) {
  return Lo(e, bT | xT);
}
var wT = "__lodash_hash_undefined__";
function _T(e) {
  return this.__data__.set(e, wT), this;
}
function kT(e) {
  return this.__data__.has(e);
}
function da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new fn(); ++t < n; )
    this.add(e[t]);
}
da.prototype.add = da.prototype.push = _T;
da.prototype.has = kT;
function ST(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ET(e, t) {
  return e.has(t);
}
var zT = 1, $T = 2;
function Wp(e, t, n, r, o, a) {
  var s = n & zT, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, v = !0, b = n & $T ? new da() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < l; ) {
    var h = e[f], p = t[f];
    if (r)
      var m = s ? r(p, h, f, t, e, a) : r(h, p, f, e, t, a);
    if (m !== void 0) {
      if (m)
        continue;
      v = !1;
      break;
    }
    if (b) {
      if (!ST(t, function(g, _) {
        if (!ET(b, _) && (h === g || o(h, g, n, r, a)))
          return b.push(_);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === p || o(h, p, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function PT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function CT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var AT = 1, TT = 2, OT = "[object Boolean]", NT = "[object Date]", RT = "[object Error]", IT = "[object Map]", MT = "[object Number]", DT = "[object RegExp]", FT = "[object Set]", BT = "[object String]", LT = "[object Symbol]", UT = "[object ArrayBuffer]", qT = "[object DataView]", hc = Kt ? Kt.prototype : void 0, hs = hc ? hc.valueOf : void 0;
function VT(e, t, n, r, o, a, s) {
  switch (n) {
    case qT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case UT:
      return !(e.byteLength != t.byteLength || !a(new ca(e), new ca(t)));
    case OT:
    case NT:
    case MT:
      return io(+e, +t);
    case RT:
      return e.name == t.name && e.message == t.message;
    case DT:
    case BT:
      return e == t + "";
    case IT:
      var l = PT;
    case FT:
      var d = r & AT;
      if (l || (l = CT), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= TT, s.set(e, t);
      var c = Wp(l(e), l(t), r, o, a, s);
      return s.delete(e), c;
    case LT:
      if (hs)
        return hs.call(e) == hs.call(t);
  }
  return !1;
}
var jT = 1, HT = Object.prototype, GT = HT.hasOwnProperty;
function WT(e, t, n, r, o, a) {
  var s = n & jT, l = Bi(e), d = l.length, u = Bi(t), c = u.length;
  if (d != c && !s)
    return !1;
  for (var f = d; f--; ) {
    var v = l[f];
    if (!(s ? v in t : GT.call(t, v)))
      return !1;
  }
  var b = a.get(e), h = a.get(t);
  if (b && h)
    return b == t && h == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var m = s; ++f < d; ) {
    v = l[f];
    var g = e[v], _ = t[v];
    if (r)
      var y = s ? r(_, g, v, t, e, a) : r(g, _, v, e, t, a);
    if (!(y === void 0 ? g === _ || o(g, _, n, r, a) : y)) {
      p = !1;
      break;
    }
    m || (m = v == "constructor");
  }
  if (p && !m) {
    var k = e.constructor, C = t.constructor;
    k != C && "constructor" in e && "constructor" in t && !(typeof k == "function" && k instanceof k && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var XT = 1, mc = "[object Arguments]", vc = "[object Array]", Po = "[object Object]", YT = Object.prototype, gc = YT.hasOwnProperty;
function KT(e, t, n, r, o, a) {
  var s = Mt(e), l = Mt(t), d = s ? vc : Tt(e), u = l ? vc : Tt(t);
  d = d == mc ? Po : d, u = u == mc ? Po : u;
  var c = d == Po, f = u == Po, v = d == u;
  if (v && Jr(e)) {
    if (!Jr(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Yt()), s || kl(e) ? Wp(e, t, n, r, o, a) : VT(e, t, d, n, r, o, a);
  if (!(n & XT)) {
    var b = c && gc.call(e, "__wrapped__"), h = f && gc.call(t, "__wrapped__");
    if (b || h) {
      var p = b ? e.value() : e, m = h ? t.value() : t;
      return a || (a = new Yt()), o(p, m, n, r, a);
    }
  }
  return v ? (a || (a = new Yt()), WT(e, t, n, r, o, a)) : !1;
}
function Xp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Zt(e) && !Zt(t) ? e !== e && t !== t : KT(e, t, n, r, Xp, o);
}
function ZT(e, t, n) {
  t = El(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = zl(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && xl(o) && Oa(s, o) && (Mt(e) || ua(e)));
}
function JT(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), l = s.length; l--; ) {
      var d = s[++o];
      if (n(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var QT = JT(), ms = function() {
  return Ft.Date.now();
}, eO = "Expected a function", tO = Math.max, nO = Math.min;
function rO(e, t, n) {
  var r, o, a, s, l, d, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(eO);
  t = Wu(t) || 0, _t(n) && (c = !0, f = "maxWait" in n, a = f ? tO(Wu(n.maxWait) || 0, t) : a, v = "trailing" in n ? !0 : v);
  function b($) {
    var w = r, S = o;
    return r = o = void 0, u = $, s = e.apply(S, w), s;
  }
  function h($) {
    return u = $, l = setTimeout(g, t), c ? b($) : s;
  }
  function p($) {
    var w = $ - d, S = $ - u, U = t - w;
    return f ? nO(U, a - S) : U;
  }
  function m($) {
    var w = $ - d, S = $ - u;
    return d === void 0 || w >= t || w < 0 || f && S >= a;
  }
  function g() {
    var $ = ms();
    if (m($))
      return _($);
    l = setTimeout(g, p($));
  }
  function _($) {
    return l = void 0, v && r ? b($) : (r = o = void 0, s);
  }
  function y() {
    l !== void 0 && clearTimeout(l), u = 0, r = d = o = l = void 0;
  }
  function k() {
    return l === void 0 ? s : _(ms());
  }
  function C() {
    var $ = ms(), w = m($);
    if (r = arguments, o = this, d = $, w) {
      if (l === void 0)
        return h(d);
      if (f)
        return clearTimeout(l), l = setTimeout(g, t), b(d);
    }
    return l === void 0 && (l = setTimeout(g, t)), s;
  }
  return C.cancel = y, C.flush = k, C;
}
function Vi(e, t, n) {
  (n !== void 0 && !io(e[t], n) || n === void 0 && !(t in e)) && yl(e, t, n);
}
function oO(e) {
  return Zt(e) && Na(e);
}
function ji(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function aO(e) {
  return fP(e, Mp(e));
}
function sO(e, t, n, r, o, a, s) {
  var l = ji(e, n), d = ji(t, n), u = s.get(d);
  if (u) {
    Vi(e, n, u);
    return;
  }
  var c = a ? a(l, d, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var v = Mt(d), b = !v && Jr(d), h = !v && !b && kl(d);
    c = d, v || b || h ? Mt(l) ? c = l : oO(l) ? c = Q4(l) : b ? (f = !1, c = Up(d, !0)) : h ? (f = !1, c = qp(d, !0)) : c = [] : YC(d) || ua(d) ? (c = l, ua(l) ? c = aO(l) : (!_t(l) || gl(l)) && (c = Vp(d))) : f = !1;
  }
  f && (s.set(d, c), o(c, d, r, a, s), s.delete(d)), Vi(e, n, c);
}
function Yp(e, t, n, r, o) {
  e !== t && QT(t, function(a, s) {
    if (o || (o = new Yt()), _t(a))
      sO(e, t, s, n, Yp, r, o);
    else {
      var l = r ? r(ji(e, s), a, s + "", e, t, o) : void 0;
      l === void 0 && (l = a), Vi(e, s, l);
    }
  }, Mp);
}
var iO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, lO = KC(iO), Kp = /[&<>"']/g, uO = RegExp(Kp.source);
function cO(e) {
  return e = Dp(e), e && uO.test(e) ? e.replace(Kp, lO) : e;
}
var dO = Object.prototype, fO = dO.hasOwnProperty;
function pO(e, t) {
  return e != null && fO.call(e, t);
}
function Zp(e, t) {
  return e != null && ZT(e, t, pO);
}
function wn(e, t) {
  return Xp(e, t);
}
var Hi = gP(function(e, t, n) {
  Yp(e, t, n);
});
function hO(e, t, n, r) {
  if (!_t(e))
    return e;
  t = El(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var d = zl(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != s) {
      var c = l[d];
      u = void 0, u === void 0 && (u = _t(c) ? c : Oa(t[o + 1]) ? [] : {});
    }
    bl(l, d, u), l = l[d];
  }
  return e;
}
function Et(e, t, n) {
  return e == null ? e : hO(e, t, n);
}
var yc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mO(e) {
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
var vs, bc;
function gr() {
  return bc || (bc = 1, vs = TypeError), vs;
}
const vO = {}, gO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vO
}, Symbol.toStringTag, { value: "Module" })), yO = /* @__PURE__ */ mO(gO);
var gs, xc;
function Ma() {
  if (xc) return gs;
  xc = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, b = v ? WeakRef.prototype.deref : null, h = Boolean.prototype.valueOf, p = Object.prototype.toString, m = Function.prototype.toString, g = String.prototype.match, _ = String.prototype.slice, y = String.prototype.replace, k = String.prototype.toUpperCase, C = String.prototype.toLowerCase, $ = RegExp.prototype.test, w = Array.prototype.concat, S = Array.prototype.join, U = Array.prototype.slice, D = Math.floor, M = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, A = Object.getOwnPropertySymbols, V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", F = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, P = Object.prototype.propertyIsEnumerable, R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(G) {
    return G.__proto__;
  } : null);
  function x(G, K) {
    if (G === 1 / 0 || G === -1 / 0 || G !== G || G && G > -1e3 && G < 1e3 || $.call(/e/, K))
      return K;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof G == "number") {
      var je = G < 0 ? -D(-G) : D(G);
      if (je !== G) {
        var Ge = String(je), Ne = _.call(K, Ge.length + 1);
        return y.call(Ge, Le, "$&_") + "." + y.call(y.call(Ne, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return y.call(K, Le, "$&_");
  }
  var q = yO, Q = q.custom, te = I(Q) ? Q : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  gs = function G(K, Le, je, Ge) {
    var Ne = Le || {};
    if (H(Ne, "quoteStyle") && !H(fe, Ne.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (H(Ne, "maxStringLength") && (typeof Ne.maxStringLength == "number" ? Ne.maxStringLength < 0 && Ne.maxStringLength !== 1 / 0 : Ne.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var pn = H(Ne, "customInspect") ? Ne.customInspect : !0;
    if (typeof pn != "boolean" && pn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (H(Ne, "indent") && Ne.indent !== null && Ne.indent !== "	" && !(parseInt(Ne.indent, 10) === Ne.indent && Ne.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(Ne, "numericSeparator") && typeof Ne.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var $n = Ne.numericSeparator;
    if (typeof K > "u")
      return "undefined";
    if (K === null)
      return "null";
    if (typeof K == "boolean")
      return K ? "true" : "false";
    if (typeof K == "string")
      return gt(K, Ne);
    if (typeof K == "number") {
      if (K === 0)
        return 1 / 0 / K > 0 ? "0" : "-0";
      var yt = String(K);
      return $n ? x(K, yt) : yt;
    }
    if (typeof K == "bigint") {
      var hn = String(K) + "n";
      return $n ? x(K, hn) : hn;
    }
    var Wa = typeof Ne.depth > "u" ? 5 : Ne.depth;
    if (typeof je > "u" && (je = 0), je >= Wa && Wa > 0 && typeof K == "object")
      return me(K) ? "[Array]" : "[Object]";
    var Xn = ah(Ne, je);
    if (typeof Ge > "u")
      Ge = [];
    else if (oe(Ge, K) >= 0)
      return "[Circular]";
    function Ct(Yn, vo, ih) {
      if (vo && (Ge = U.call(Ge), Ge.push(vo)), ih) {
        var Wl = {
          depth: Ne.depth
        };
        return H(Ne, "quoteStyle") && (Wl.quoteStyle = Ne.quoteStyle), G(Yn, Wl, je + 1, Ge);
      }
      return G(Yn, Ne, je + 1, Ge);
    }
    if (typeof K == "function" && !Se(K)) {
      var Ll = re(K), Ul = ho(K, Ct);
      return "[Function" + (Ll ? ": " + Ll : " (anonymous)") + "]" + (Ul.length > 0 ? " { " + S.call(Ul, ", ") + " }" : "");
    }
    if (I(K)) {
      var ql = E ? y.call(String(K), /^(Symbol\(.*\))_[^)]*$/, "$1") : V.call(K);
      return typeof K == "object" && !E ? zn(ql) : ql;
    }
    if (Lt(K)) {
      for (var xr = "<" + C.call(String(K.nodeName)), Xa = K.attributes || [], mo = 0; mo < Xa.length; mo++)
        xr += " " + Xa[mo].name + "=" + _e(ne(Xa[mo].value), "double", Ne);
      return xr += ">", K.childNodes && K.childNodes.length && (xr += "..."), xr += "</" + C.call(String(K.nodeName)) + ">", xr;
    }
    if (me(K)) {
      if (K.length === 0)
        return "[]";
      var Ya = ho(K, Ct);
      return Xn && !oh(Ya) ? "[" + Ga(Ya, Xn) + "]" : "[ " + S.call(Ya, ", ") + " ]";
    }
    if (le(K)) {
      var Ka = ho(K, Ct);
      return !("cause" in Error.prototype) && "cause" in K && !P.call(K, "cause") ? "{ [" + String(K) + "] " + S.call(w.call("[cause]: " + Ct(K.cause), Ka), ", ") + " }" : Ka.length === 0 ? "[" + String(K) + "]" : "{ [" + String(K) + "] " + S.call(Ka, ", ") + " }";
    }
    if (typeof K == "object" && pn) {
      if (te && typeof K[te] == "function" && q)
        return q(K, { depth: Wa - je });
      if (pn !== "symbol" && typeof K.inspect == "function")
        return K.inspect();
    }
    if (de(K)) {
      var Vl = [];
      return r && r.call(K, function(Yn, vo) {
        Vl.push(Ct(vo, K, !0) + " => " + Ct(Yn, K));
      }), Bl("Map", n.call(K), Vl, Xn);
    }
    if (Ee(K)) {
      var jl = [];
      return l && l.call(K, function(Yn) {
        jl.push(Ct(Yn, K));
      }), Bl("Set", s.call(K), jl, Xn);
    }
    if (pe(K))
      return br("WeakMap");
    if (Be(K))
      return br("WeakSet");
    if (xe(K))
      return br("WeakRef");
    if (se(K))
      return zn(Ct(Number(K)));
    if (O(K))
      return zn(Ct(M.call(K)));
    if (ge(K))
      return zn(h.call(K));
    if (we(K))
      return zn(Ct(String(K)));
    if (typeof window < "u" && K === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && K === globalThis || typeof yc < "u" && K === yc)
      return "{ [object globalThis] }";
    if (!Pe(K) && !Se(K)) {
      var Za = ho(K, Ct), Hl = R ? R(K) === Object.prototype : K instanceof Object || K.constructor === Object, Ja = K instanceof Object ? "" : "null prototype", Gl = !Hl && F && Object(K) === K && F in K ? _.call(j(K), 8, -1) : Ja ? "Object" : "", sh = Hl || typeof K.constructor != "function" ? "" : K.constructor.name ? K.constructor.name + " " : "", Qa = sh + (Gl || Ja ? "[" + S.call(w.call([], Gl || [], Ja || []), ": ") + "] " : "");
      return Za.length === 0 ? Qa + "{}" : Xn ? Qa + "{" + Ga(Za, Xn) + "}" : Qa + "{ " + S.call(Za, ", ") + " }";
    }
    return String(K);
  };
  function _e(G, K, Le) {
    var je = Le.quoteStyle || K, Ge = fe[je];
    return Ge + G + Ge;
  }
  function ne(G) {
    return y.call(String(G), /"/g, "&quot;");
  }
  function ae(G) {
    return !F || !(typeof G == "object" && (F in G || typeof G[F] < "u"));
  }
  function me(G) {
    return j(G) === "[object Array]" && ae(G);
  }
  function Pe(G) {
    return j(G) === "[object Date]" && ae(G);
  }
  function Se(G) {
    return j(G) === "[object RegExp]" && ae(G);
  }
  function le(G) {
    return j(G) === "[object Error]" && ae(G);
  }
  function we(G) {
    return j(G) === "[object String]" && ae(G);
  }
  function se(G) {
    return j(G) === "[object Number]" && ae(G);
  }
  function ge(G) {
    return j(G) === "[object Boolean]" && ae(G);
  }
  function I(G) {
    if (E)
      return G && typeof G == "object" && G instanceof Symbol;
    if (typeof G == "symbol")
      return !0;
    if (!G || typeof G != "object" || !V)
      return !1;
    try {
      return V.call(G), !0;
    } catch {
    }
    return !1;
  }
  function O(G) {
    if (!G || typeof G != "object" || !M)
      return !1;
    try {
      return M.call(G), !0;
    } catch {
    }
    return !1;
  }
  var B = Object.prototype.hasOwnProperty || function(G) {
    return G in this;
  };
  function H(G, K) {
    return B.call(G, K);
  }
  function j(G) {
    return p.call(G);
  }
  function re(G) {
    if (G.name)
      return G.name;
    var K = g.call(m.call(G), /^function\s*([\w$]+)/);
    return K ? K[1] : null;
  }
  function oe(G, K) {
    if (G.indexOf)
      return G.indexOf(K);
    for (var Le = 0, je = G.length; Le < je; Le++)
      if (G[Le] === K)
        return Le;
    return -1;
  }
  function de(G) {
    if (!n || !G || typeof G != "object")
      return !1;
    try {
      n.call(G);
      try {
        s.call(G);
      } catch {
        return !0;
      }
      return G instanceof Map;
    } catch {
    }
    return !1;
  }
  function pe(G) {
    if (!u || !G || typeof G != "object")
      return !1;
    try {
      u.call(G, u);
      try {
        f.call(G, f);
      } catch {
        return !0;
      }
      return G instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xe(G) {
    if (!b || !G || typeof G != "object")
      return !1;
    try {
      return b.call(G), !0;
    } catch {
    }
    return !1;
  }
  function Ee(G) {
    if (!s || !G || typeof G != "object")
      return !1;
    try {
      s.call(G);
      try {
        n.call(G);
      } catch {
        return !0;
      }
      return G instanceof Set;
    } catch {
    }
    return !1;
  }
  function Be(G) {
    if (!f || !G || typeof G != "object")
      return !1;
    try {
      f.call(G, f);
      try {
        u.call(G, u);
      } catch {
        return !0;
      }
      return G instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Lt(G) {
    return !G || typeof G != "object" ? !1 : typeof HTMLElement < "u" && G instanceof HTMLElement ? !0 : typeof G.nodeName == "string" && typeof G.getAttribute == "function";
  }
  function gt(G, K) {
    if (G.length > K.maxStringLength) {
      var Le = G.length - K.maxStringLength, je = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(_.call(G, 0, K.maxStringLength), K) + je;
    }
    var Ge = be[K.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var Ne = y.call(y.call(G, Ge, "\\$1"), /[\x00-\x1f]/g, Ha);
    return _e(Ne, "single", K);
  }
  function Ha(G) {
    var K = G.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[K];
    return Le ? "\\" + Le : "\\x" + (K < 16 ? "0" : "") + k.call(K.toString(16));
  }
  function zn(G) {
    return "Object(" + G + ")";
  }
  function br(G) {
    return G + " { ? }";
  }
  function Bl(G, K, Le, je) {
    var Ge = je ? Ga(Le, je) : S.call(Le, ", ");
    return G + " (" + K + ") {" + Ge + "}";
  }
  function oh(G) {
    for (var K = 0; K < G.length; K++)
      if (oe(G[K], `
`) >= 0)
        return !1;
    return !0;
  }
  function ah(G, K) {
    var Le;
    if (G.indent === "	")
      Le = "	";
    else if (typeof G.indent == "number" && G.indent > 0)
      Le = S.call(Array(G.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: S.call(Array(K + 1), Le)
    };
  }
  function Ga(G, K) {
    if (G.length === 0)
      return "";
    var Le = `
` + K.prev + K.base;
    return Le + S.call(G, "," + Le) + `
` + K.prev;
  }
  function ho(G, K) {
    var Le = me(G), je = [];
    if (Le) {
      je.length = G.length;
      for (var Ge = 0; Ge < G.length; Ge++)
        je[Ge] = H(G, Ge) ? K(G[Ge], G) : "";
    }
    var Ne = typeof A == "function" ? A(G) : [], pn;
    if (E) {
      pn = {};
      for (var $n = 0; $n < Ne.length; $n++)
        pn["$" + Ne[$n]] = Ne[$n];
    }
    for (var yt in G)
      H(G, yt) && (Le && String(Number(yt)) === yt && yt < G.length || E && pn["$" + yt] instanceof Symbol || ($.call(/[^\w$]/, yt) ? je.push(K(yt, G) + ": " + K(G[yt], G)) : je.push(yt + ": " + K(G[yt], G))));
    if (typeof A == "function")
      for (var hn = 0; hn < Ne.length; hn++)
        P.call(G, Ne[hn]) && je.push("[" + K(Ne[hn]) + "]: " + K(G[Ne[hn]], G));
    return je;
  }
  return gs;
}
var ys, wc;
function bO() {
  if (wc) return ys;
  wc = 1;
  var e = /* @__PURE__ */ Ma(), t = /* @__PURE__ */ gr(), n = function(l, d, u) {
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
  return ys = function() {
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
  }, ys;
}
var bs, _c;
function Jp() {
  return _c || (_c = 1, bs = Object), bs;
}
var xs, kc;
function xO() {
  return kc || (kc = 1, xs = Error), xs;
}
var ws, Sc;
function wO() {
  return Sc || (Sc = 1, ws = EvalError), ws;
}
var _s, Ec;
function _O() {
  return Ec || (Ec = 1, _s = RangeError), _s;
}
var ks, zc;
function kO() {
  return zc || (zc = 1, ks = ReferenceError), ks;
}
var Ss, $c;
function SO() {
  return $c || ($c = 1, Ss = SyntaxError), Ss;
}
var Es, Pc;
function EO() {
  return Pc || (Pc = 1, Es = URIError), Es;
}
var zs, Cc;
function zO() {
  return Cc || (Cc = 1, zs = Math.abs), zs;
}
var $s, Ac;
function $O() {
  return Ac || (Ac = 1, $s = Math.floor), $s;
}
var Ps, Tc;
function PO() {
  return Tc || (Tc = 1, Ps = Math.max), Ps;
}
var Cs, Oc;
function CO() {
  return Oc || (Oc = 1, Cs = Math.min), Cs;
}
var As, Nc;
function AO() {
  return Nc || (Nc = 1, As = Math.pow), As;
}
var Ts, Rc;
function TO() {
  return Rc || (Rc = 1, Ts = Math.round), Ts;
}
var Os, Ic;
function OO() {
  return Ic || (Ic = 1, Os = Number.isNaN || function(t) {
    return t !== t;
  }), Os;
}
var Ns, Mc;
function NO() {
  if (Mc) return Ns;
  Mc = 1;
  var e = /* @__PURE__ */ OO();
  return Ns = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Ns;
}
var Rs, Dc;
function RO() {
  return Dc || (Dc = 1, Rs = Object.getOwnPropertyDescriptor), Rs;
}
var Is, Fc;
function Qp() {
  if (Fc) return Is;
  Fc = 1;
  var e = /* @__PURE__ */ RO();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Is = e, Is;
}
var Ms, Bc;
function IO() {
  if (Bc) return Ms;
  Bc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ms = e, Ms;
}
var Ds, Lc;
function MO() {
  return Lc || (Lc = 1, Ds = function() {
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
  }), Ds;
}
var Fs, Uc;
function DO() {
  if (Uc) return Fs;
  Uc = 1;
  var e = typeof Symbol < "u" && Symbol, t = MO();
  return Fs = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Fs;
}
var Bs, qc;
function e0() {
  return qc || (qc = 1, Bs = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Bs;
}
var Ls, Vc;
function t0() {
  if (Vc) return Ls;
  Vc = 1;
  var e = /* @__PURE__ */ Jp();
  return Ls = e.getPrototypeOf || null, Ls;
}
var Us, jc;
function FO() {
  if (jc) return Us;
  jc = 1;
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
  return Us = function(d) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var c = a(arguments, 1), f, v = function() {
      if (this instanceof f) {
        var g = u.apply(
          this,
          o(c, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        d,
        o(c, arguments)
      );
    }, b = n(0, u.length - c.length), h = [], p = 0; p < b; p++)
      h[p] = "$" + p;
    if (f = Function("binder", "return function (" + s(h, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var m = function() {
      };
      m.prototype = u.prototype, f.prototype = new m(), m.prototype = null;
    }
    return f;
  }, Us;
}
var qs, Hc;
function Da() {
  if (Hc) return qs;
  Hc = 1;
  var e = FO();
  return qs = Function.prototype.bind || e, qs;
}
var Vs, Gc;
function Pl() {
  return Gc || (Gc = 1, Vs = Function.prototype.call), Vs;
}
var js, Wc;
function n0() {
  return Wc || (Wc = 1, js = Function.prototype.apply), js;
}
var Hs, Xc;
function BO() {
  return Xc || (Xc = 1, Hs = typeof Reflect < "u" && Reflect && Reflect.apply), Hs;
}
var Gs, Yc;
function LO() {
  if (Yc) return Gs;
  Yc = 1;
  var e = Da(), t = n0(), n = Pl(), r = BO();
  return Gs = r || e.call(n, t), Gs;
}
var Ws, Kc;
function r0() {
  if (Kc) return Ws;
  Kc = 1;
  var e = Da(), t = /* @__PURE__ */ gr(), n = Pl(), r = LO();
  return Ws = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ws;
}
var Xs, Zc;
function UO() {
  if (Zc) return Xs;
  Zc = 1;
  var e = r0(), t = /* @__PURE__ */ Qp(), n;
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
  return Xs = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : o(l));
    }
  ) : !1, Xs;
}
var Ys, Jc;
function qO() {
  if (Jc) return Ys;
  Jc = 1;
  var e = e0(), t = t0(), n = /* @__PURE__ */ UO();
  return Ys = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Ys;
}
var Ks, Qc;
function VO() {
  if (Qc) return Ks;
  Qc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Da();
  return Ks = n.call(e, t), Ks;
}
var Zs, ed;
function Cl() {
  if (ed) return Zs;
  ed = 1;
  var e, t = /* @__PURE__ */ Jp(), n = /* @__PURE__ */ xO(), r = /* @__PURE__ */ wO(), o = /* @__PURE__ */ _O(), a = /* @__PURE__ */ kO(), s = /* @__PURE__ */ SO(), l = /* @__PURE__ */ gr(), d = /* @__PURE__ */ EO(), u = /* @__PURE__ */ zO(), c = /* @__PURE__ */ $O(), f = /* @__PURE__ */ PO(), v = /* @__PURE__ */ CO(), b = /* @__PURE__ */ AO(), h = /* @__PURE__ */ TO(), p = /* @__PURE__ */ NO(), m = Function, g = function(Se) {
    try {
      return m('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, _ = /* @__PURE__ */ Qp(), y = /* @__PURE__ */ IO(), k = function() {
    throw new l();
  }, C = _ ? (function() {
    try {
      return arguments.callee, k;
    } catch {
      try {
        return _(arguments, "callee").get;
      } catch {
        return k;
      }
    }
  })() : k, $ = DO()(), w = qO(), S = t0(), U = e0(), D = n0(), M = Pl(), A = {}, V = typeof Uint8Array > "u" || !w ? e : w(Uint8Array), E = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": $ && w ? w([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": A,
    "%AsyncGenerator%": A,
    "%AsyncGeneratorFunction%": A,
    "%AsyncIteratorPrototype%": A,
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
    "%GeneratorFunction%": A,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $ && w ? w(w([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !$ || !w ? e : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": _,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !$ || !w ? e : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $ && w ? w(""[Symbol.iterator]()) : e,
    "%Symbol%": $ ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": C,
    "%TypedArray%": V,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": M,
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": y,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": u,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": b,
    "%Math.round%": h,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": U
  };
  if (w)
    try {
      null.error;
    } catch (Se) {
      var F = w(w(Se));
      E["%Error.prototype%"] = F;
    }
  var P = function Se(le) {
    var we;
    if (le === "%AsyncFunction%")
      we = g("async function () {}");
    else if (le === "%GeneratorFunction%")
      we = g("function* () {}");
    else if (le === "%AsyncGeneratorFunction%")
      we = g("async function* () {}");
    else if (le === "%AsyncGenerator%") {
      var se = Se("%AsyncGeneratorFunction%");
      se && (we = se.prototype);
    } else if (le === "%AsyncIteratorPrototype%") {
      var ge = Se("%AsyncGenerator%");
      ge && w && (we = w(ge.prototype));
    }
    return E[le] = we, we;
  }, R = {
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
  }, x = Da(), q = /* @__PURE__ */ VO(), Q = x.call(M, Array.prototype.concat), te = x.call(D, Array.prototype.splice), fe = x.call(M, String.prototype.replace), be = x.call(M, String.prototype.slice), _e = x.call(M, RegExp.prototype.exec), ne = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ae = /\\(\\)?/g, me = function(le) {
    var we = be(le, 0, 1), se = be(le, -1);
    if (we === "%" && se !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (se === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ge = [];
    return fe(le, ne, function(I, O, B, H) {
      ge[ge.length] = B ? fe(H, ae, "$1") : O || I;
    }), ge;
  }, Pe = function(le, we) {
    var se = le, ge;
    if (q(R, se) && (ge = R[se], se = "%" + ge[0] + "%"), q(E, se)) {
      var I = E[se];
      if (I === A && (I = P(se)), typeof I > "u" && !we)
        throw new l("intrinsic " + le + " exists, but is not available. Please file an issue!");
      return {
        alias: ge,
        name: se,
        value: I
      };
    }
    throw new s("intrinsic " + le + " does not exist!");
  };
  return Zs = function(le, we) {
    if (typeof le != "string" || le.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, le) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var se = me(le), ge = se.length > 0 ? se[0] : "", I = Pe("%" + ge + "%", we), O = I.name, B = I.value, H = !1, j = I.alias;
    j && (ge = j[0], te(se, Q([0, 1], j)));
    for (var re = 1, oe = !0; re < se.length; re += 1) {
      var de = se[re], pe = be(de, 0, 1), xe = be(de, -1);
      if ((pe === '"' || pe === "'" || pe === "`" || xe === '"' || xe === "'" || xe === "`") && pe !== xe)
        throw new s("property names with quotes must have matching quotes");
      if ((de === "constructor" || !oe) && (H = !0), ge += "." + de, O = "%" + ge + "%", q(E, O))
        B = E[O];
      else if (B != null) {
        if (!(de in B)) {
          if (!we)
            throw new l("base intrinsic for " + le + " exists, but the property is not available.");
          return;
        }
        if (_ && re + 1 >= se.length) {
          var Ee = _(B, de);
          oe = !!Ee, oe && "get" in Ee && !("originalValue" in Ee.get) ? B = Ee.get : B = B[de];
        } else
          oe = q(B, de), B = B[de];
        oe && !H && (E[O] = B);
      }
    }
    return B;
  }, Zs;
}
var Js, td;
function o0() {
  if (td) return Js;
  td = 1;
  var e = /* @__PURE__ */ Cl(), t = r0(), n = t([e("%String.prototype.indexOf%")]);
  return Js = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Js;
}
var Qs, nd;
function a0() {
  if (nd) return Qs;
  nd = 1;
  var e = /* @__PURE__ */ Cl(), t = /* @__PURE__ */ o0(), n = /* @__PURE__ */ Ma(), r = /* @__PURE__ */ gr(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return Qs = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(b) {
        if (!v.has(b))
          throw new r("Side channel does not contain " + n(b));
      },
      delete: function(b) {
        if (f) {
          var h = d(f, b);
          return u(f) === 0 && (f = void 0), h;
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
      set: function(b, h) {
        f || (f = new o()), s(f, b, h);
      }
    };
    return v;
  }, Qs;
}
var ei, rd;
function jO() {
  if (rd) return ei;
  rd = 1;
  var e = /* @__PURE__ */ Cl(), t = /* @__PURE__ */ o0(), n = /* @__PURE__ */ Ma(), r = a0(), o = /* @__PURE__ */ gr(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return ei = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, v, b = {
        assert: function(h) {
          if (!b.has(h))
            throw new o("Side channel does not contain " + n(h));
        },
        delete: function(h) {
          if (a && h && (typeof h == "object" || typeof h == "function")) {
            if (f)
              return u(f, h);
          } else if (r && v)
            return v.delete(h);
          return !1;
        },
        get: function(h) {
          return a && h && (typeof h == "object" || typeof h == "function") && f ? s(f, h) : v && v.get(h);
        },
        has: function(h) {
          return a && h && (typeof h == "object" || typeof h == "function") && f ? d(f, h) : !!v && v.has(h);
        },
        set: function(h, p) {
          a && h && (typeof h == "object" || typeof h == "function") ? (f || (f = new a()), l(f, h, p)) : r && (v || (v = r()), v.set(h, p));
        }
      };
      return b;
    }
  ) : r, ei;
}
var ti, od;
function s0() {
  if (od) return ti;
  od = 1;
  var e = /* @__PURE__ */ gr(), t = /* @__PURE__ */ Ma(), n = bO(), r = a0(), o = jO(), a = o || r || n;
  return ti = function() {
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
  }, ti;
}
var ni, ad;
function Al() {
  if (ad) return ni;
  ad = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return ni = {
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
  }, ni;
}
var ri, sd;
function i0() {
  if (sd) return ri;
  sd = 1;
  var e = /* @__PURE__ */ Al(), t = s0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(w, S) {
    return o.set(w, S), w;
  }, s = function(w) {
    return o.has(w);
  }, l = function(w) {
    return o.get(w);
  }, d = function(w, S) {
    o.set(w, S);
  }, u = (function() {
    for (var $ = [], w = 0; w < 256; ++w)
      $[$.length] = "%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase();
    return $;
  })(), c = function(w) {
    for (; w.length > 1; ) {
      var S = w.pop(), U = S.obj[S.prop];
      if (r(U)) {
        for (var D = [], M = 0; M < U.length; ++M)
          typeof U[M] < "u" && (D[D.length] = U[M]);
        S.obj[S.prop] = D;
      }
    }
  }, f = function(w, S) {
    for (var U = S && S.plainObjects ? { __proto__: null } : {}, D = 0; D < w.length; ++D)
      typeof w[D] < "u" && (U[D] = w[D]);
    return U;
  }, v = function $(w, S, U) {
    if (!S)
      return w;
    if (typeof S != "object" && typeof S != "function") {
      if (r(w)) {
        var D = w.length;
        if (U && typeof U.arrayLimit == "number" && D > U.arrayLimit)
          return a(f(w.concat(S), U), D);
        w[D] = S;
      } else if (w && typeof w == "object")
        if (s(w)) {
          var M = l(w) + 1;
          w[M] = S, d(w, M);
        } else {
          if (U && U.strictMerge)
            return [w, S];
          (U && (U.plainObjects || U.allowPrototypes) || !n.call(Object.prototype, S)) && (w[S] = !0);
        }
      else
        return [w, S];
      return w;
    }
    if (!w || typeof w != "object") {
      if (s(S)) {
        for (var A = Object.keys(S), V = U && U.plainObjects ? { __proto__: null, 0: w } : { 0: w }, E = 0; E < A.length; E++) {
          var F = parseInt(A[E], 10);
          V[F + 1] = S[A[E]];
        }
        return a(V, l(S) + 1);
      }
      var P = [w].concat(S);
      return U && typeof U.arrayLimit == "number" && P.length > U.arrayLimit ? a(f(P, U), P.length - 1) : P;
    }
    var R = w;
    return r(w) && !r(S) && (R = f(w, U)), r(w) && r(S) ? (S.forEach(function(x, q) {
      if (n.call(w, q)) {
        var Q = w[q];
        Q && typeof Q == "object" && x && typeof x == "object" ? w[q] = $(Q, x, U) : w[w.length] = x;
      } else
        w[q] = x;
    }), w) : Object.keys(S).reduce(function(x, q) {
      var Q = S[q];
      if (n.call(x, q) ? x[q] = $(x[q], Q, U) : x[q] = Q, s(S) && !s(x) && a(x, l(S)), s(x)) {
        var te = parseInt(q, 10);
        String(te) === q && te >= 0 && te > l(x) && d(x, te);
      }
      return x;
    }, R);
  }, b = function(w, S) {
    return Object.keys(S).reduce(function(U, D) {
      return U[D] = S[D], U;
    }, w);
  }, h = function($, w, S) {
    var U = $.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return U.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(U);
    } catch {
      return U;
    }
  }, p = 1024, m = function(w, S, U, D, M) {
    if (w.length === 0)
      return w;
    var A = w;
    if (typeof w == "symbol" ? A = Symbol.prototype.toString.call(w) : typeof w != "string" && (A = String(w)), U === "iso-8859-1")
      return escape(A).replace(/%u[0-9a-f]{4}/gi, function(q) {
        return "%26%23" + parseInt(q.slice(2), 16) + "%3B";
      });
    for (var V = "", E = 0; E < A.length; E += p) {
      for (var F = A.length >= p ? A.slice(E, E + p) : A, P = [], R = 0; R < F.length; ++R) {
        var x = F.charCodeAt(R);
        if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || M === e.RFC1738 && (x === 40 || x === 41)) {
          P[P.length] = F.charAt(R);
          continue;
        }
        if (x < 128) {
          P[P.length] = u[x];
          continue;
        }
        if (x < 2048) {
          P[P.length] = u[192 | x >> 6] + u[128 | x & 63];
          continue;
        }
        if (x < 55296 || x >= 57344) {
          P[P.length] = u[224 | x >> 12] + u[128 | x >> 6 & 63] + u[128 | x & 63];
          continue;
        }
        R += 1, x = 65536 + ((x & 1023) << 10 | F.charCodeAt(R) & 1023), P[P.length] = u[240 | x >> 18] + u[128 | x >> 12 & 63] + u[128 | x >> 6 & 63] + u[128 | x & 63];
      }
      V += P.join("");
    }
    return V;
  }, g = function(w) {
    for (var S = [{ obj: { o: w }, prop: "o" }], U = [], D = 0; D < S.length; ++D)
      for (var M = S[D], A = M.obj[M.prop], V = Object.keys(A), E = 0; E < V.length; ++E) {
        var F = V[E], P = A[F];
        typeof P == "object" && P !== null && U.indexOf(P) === -1 && (S[S.length] = { obj: A, prop: F }, U[U.length] = P);
      }
    return c(S), w;
  }, _ = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, y = function(w) {
    return !w || typeof w != "object" ? !1 : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, k = function(w, S, U, D) {
    if (s(w)) {
      var M = l(w) + 1;
      return w[M] = S, d(w, M), w;
    }
    var A = [].concat(w, S);
    return A.length > U ? a(f(A, { plainObjects: D }), A.length - 1) : A;
  }, C = function(w, S) {
    if (r(w)) {
      for (var U = [], D = 0; D < w.length; D += 1)
        U[U.length] = S(w[D]);
      return U;
    }
    return S(w);
  };
  return ri = {
    arrayToObject: f,
    assign: b,
    combine: k,
    compact: g,
    decode: h,
    encode: m,
    isBuffer: y,
    isOverflow: s,
    isRegExp: _,
    markOverflow: a,
    maybeMap: C,
    merge: v
  }, ri;
}
var oi, id;
function HO() {
  if (id) return oi;
  id = 1;
  var e = s0(), t = /* @__PURE__ */ i0(), n = /* @__PURE__ */ Al(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(m) {
      return m + "[]";
    },
    comma: "comma",
    indices: function(m, g) {
      return m + "[" + g + "]";
    },
    repeat: function(m) {
      return m;
    }
  }, a = Array.isArray, s = Array.prototype.push, l = function(p, m) {
    s.apply(p, a(m) ? m : [m]);
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
  }, v = {}, b = function p(m, g, _, y, k, C, $, w, S, U, D, M, A, V, E, F, P, R) {
    for (var x = m, q = R, Q = 0, te = !1; (q = q.get(v)) !== void 0 && !te; ) {
      var fe = q.get(m);
      if (Q += 1, typeof fe < "u") {
        if (fe === Q)
          throw new RangeError("Cyclic object value");
        te = !0;
      }
      typeof q.get(v) > "u" && (Q = 0);
    }
    if (typeof U == "function" ? x = U(g, x) : x instanceof Date ? x = A(x) : _ === "comma" && a(x) && (x = t.maybeMap(x, function(O) {
      return O instanceof Date ? A(O) : O;
    })), x === null) {
      if (C)
        return S && !F ? S(g, c.encoder, P, "key", V) : g;
      x = "";
    }
    if (f(x) || t.isBuffer(x)) {
      if (S) {
        var be = F ? g : S(g, c.encoder, P, "key", V);
        return [E(be) + "=" + E(S(x, c.encoder, P, "value", V))];
      }
      return [E(g) + "=" + E(String(x))];
    }
    var _e = [];
    if (typeof x > "u")
      return _e;
    var ne;
    if (_ === "comma" && a(x))
      F && S && (x = t.maybeMap(x, S)), ne = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (a(U))
      ne = U;
    else {
      var ae = Object.keys(x);
      ne = D ? ae.sort(D) : ae;
    }
    var me = w ? String(g).replace(/\./g, "%2E") : String(g), Pe = y && a(x) && x.length === 1 ? me + "[]" : me;
    if (k && a(x) && x.length === 0)
      return Pe + "[]";
    for (var Se = 0; Se < ne.length; ++Se) {
      var le = ne[Se], we = typeof le == "object" && le && typeof le.value < "u" ? le.value : x[le];
      if (!($ && we === null)) {
        var se = M && w ? String(le).replace(/\./g, "%2E") : String(le), ge = a(x) ? typeof _ == "function" ? _(Pe, se) : Pe : Pe + (M ? "." + se : "[" + se + "]");
        R.set(m, Q);
        var I = e();
        I.set(v, R), l(_e, p(
          we,
          ge,
          _,
          y,
          k,
          C,
          $,
          w,
          _ === "comma" && F && a(x) ? null : S,
          U,
          D,
          M,
          A,
          V,
          E,
          F,
          P,
          I
        ));
      }
    }
    return _e;
  }, h = function(m) {
    if (!m)
      return c;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.encodeDotInKeys < "u" && typeof m.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.encoder !== null && typeof m.encoder < "u" && typeof m.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var g = m.charset || c.charset;
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var _ = n.default;
    if (typeof m.format < "u") {
      if (!r.call(n.formatters, m.format))
        throw new TypeError("Unknown format option provided.");
      _ = m.format;
    }
    var y = n.formatters[_], k = c.filter;
    (typeof m.filter == "function" || a(m.filter)) && (k = m.filter);
    var C;
    if (m.arrayFormat in o ? C = m.arrayFormat : "indices" in m ? C = m.indices ? "indices" : "repeat" : C = c.arrayFormat, "commaRoundTrip" in m && typeof m.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof m.allowDots > "u" ? m.encodeDotInKeys === !0 ? !0 : c.allowDots : !!m.allowDots;
    return {
      addQueryPrefix: typeof m.addQueryPrefix == "boolean" ? m.addQueryPrefix : c.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: C,
      charset: g,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!m.commaRoundTrip,
      delimiter: typeof m.delimiter > "u" ? c.delimiter : m.delimiter,
      encode: typeof m.encode == "boolean" ? m.encode : c.encode,
      encodeDotInKeys: typeof m.encodeDotInKeys == "boolean" ? m.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof m.encoder == "function" ? m.encoder : c.encoder,
      encodeValuesOnly: typeof m.encodeValuesOnly == "boolean" ? m.encodeValuesOnly : c.encodeValuesOnly,
      filter: k,
      format: _,
      formatter: y,
      serializeDate: typeof m.serializeDate == "function" ? m.serializeDate : c.serializeDate,
      skipNulls: typeof m.skipNulls == "boolean" ? m.skipNulls : c.skipNulls,
      sort: typeof m.sort == "function" ? m.sort : null,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : c.strictNullHandling
    };
  };
  return oi = function(p, m) {
    var g = p, _ = h(m), y, k;
    typeof _.filter == "function" ? (k = _.filter, g = k("", g)) : a(_.filter) && (k = _.filter, y = k);
    var C = [];
    if (typeof g != "object" || g === null)
      return "";
    var $ = o[_.arrayFormat], w = $ === "comma" && _.commaRoundTrip;
    y || (y = Object.keys(g)), _.sort && y.sort(_.sort);
    for (var S = e(), U = 0; U < y.length; ++U) {
      var D = y[U], M = g[D];
      _.skipNulls && M === null || l(C, b(
        M,
        D,
        $,
        w,
        _.allowEmptyArrays,
        _.strictNullHandling,
        _.skipNulls,
        _.encodeDotInKeys,
        _.encode ? _.encoder : null,
        _.filter,
        _.sort,
        _.allowDots,
        _.serializeDate,
        _.format,
        _.formatter,
        _.encodeValuesOnly,
        _.charset,
        S
      ));
    }
    var A = C.join(_.delimiter), V = _.addQueryPrefix === !0 ? "?" : "";
    return _.charsetSentinel && (_.charset === "iso-8859-1" ? V += "utf8=%26%2310003%3B&" : V += "utf8=%E2%9C%93&"), A.length > 0 ? V + A : "";
  }, oi;
}
var ai, ld;
function GO() {
  if (ld) return ai;
  ld = 1;
  var e = /* @__PURE__ */ i0(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    return b.replace(/&#(\d+);/g, function(h, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, a = function(b, h, p) {
    if (b && typeof b == "string" && h.comma && b.indexOf(",") > -1)
      return b.split(",");
    if (h.throwOnLimitExceeded && p >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return b;
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", d = function(h, p) {
    var m = { __proto__: null }, g = p.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var _ = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, y = g.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof _ < "u" ? _ + 1 : _
    );
    if (p.throwOnLimitExceeded && typeof _ < "u" && y.length > _)
      throw new RangeError("Parameter limit exceeded. Only " + _ + " parameter" + (_ === 1 ? "" : "s") + " allowed.");
    var k = -1, C, $ = p.charset;
    if (p.charsetSentinel)
      for (C = 0; C < y.length; ++C)
        y[C].indexOf("utf8=") === 0 && (y[C] === l ? $ = "utf-8" : y[C] === s && ($ = "iso-8859-1"), k = C, C = y.length);
    for (C = 0; C < y.length; ++C)
      if (C !== k) {
        var w = y[C], S = w.indexOf("]="), U = S === -1 ? w.indexOf("=") : S + 1, D, M;
        if (U === -1 ? (D = p.decoder(w, r.decoder, $, "key"), M = p.strictNullHandling ? null : "") : (D = p.decoder(w.slice(0, U), r.decoder, $, "key"), D !== null && (M = e.maybeMap(
          a(
            w.slice(U + 1),
            p,
            n(m[D]) ? m[D].length : 0
          ),
          function(V) {
            return p.decoder(V, r.decoder, $, "value");
          }
        ))), M && p.interpretNumericEntities && $ === "iso-8859-1" && (M = o(String(M))), w.indexOf("[]=") > -1 && (M = n(M) ? [M] : M), p.comma && n(M) && M.length > p.arrayLimit) {
          if (p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          M = e.combine([], M, p.arrayLimit, p.plainObjects);
        }
        if (D !== null) {
          var A = t.call(m, D);
          A && (p.duplicates === "combine" || w.indexOf("[]=") > -1) ? m[D] = e.combine(
            m[D],
            M,
            p.arrayLimit,
            p.plainObjects
          ) : (!A || p.duplicates === "last") && (m[D] = M);
        }
      }
    return m;
  }, u = function(b, h, p, m) {
    var g = 0;
    if (b.length > 0 && b[b.length - 1] === "[]") {
      var _ = b.slice(0, -1).join("");
      g = Array.isArray(h) && h[_] ? h[_].length : 0;
    }
    for (var y = m ? h : a(h, p, g), k = b.length - 1; k >= 0; --k) {
      var C, $ = b[k];
      if ($ === "[]" && p.parseArrays)
        e.isOverflow(y) ? C = y : C = p.allowEmptyArrays && (y === "" || p.strictNullHandling && y === null) ? [] : e.combine(
          [],
          y,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        C = p.plainObjects ? { __proto__: null } : {};
        var w = $.charAt(0) === "[" && $.charAt($.length - 1) === "]" ? $.slice(1, -1) : $, S = p.decodeDotInKeys ? w.replace(/%2E/g, ".") : w, U = parseInt(S, 10), D = !isNaN(U) && $ !== S && String(U) === S && U >= 0 && p.parseArrays;
        if (!p.parseArrays && S === "")
          C = { 0: y };
        else if (D && U < p.arrayLimit)
          C = [], C[U] = y;
        else {
          if (D && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          D ? (C[U] = y, e.markOverflow(C, U)) : S !== "__proto__" && (C[S] = y);
        }
      }
      y = C;
    }
    return y;
  }, c = function(h, p) {
    var m = p.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, m) && !p.allowPrototypes ? void 0 : [m];
    var g = /(\[[^[\]]*])/, _ = /(\[[^[\]]*])/g, y = g.exec(m), k = y ? m.slice(0, y.index) : m, C = [];
    if (k) {
      if (!p.plainObjects && t.call(Object.prototype, k) && !p.allowPrototypes)
        return;
      C[C.length] = k;
    }
    for (var $ = 0; (y = _.exec(m)) !== null && $ < p.depth; ) {
      $ += 1;
      var w = y[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, w) && !p.allowPrototypes)
        return;
      C[C.length] = y[1];
    }
    if (y) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      C[C.length] = "[" + m.slice(y.index) + "]";
    }
    return C;
  }, f = function(h, p, m, g) {
    if (h) {
      var _ = c(h, m);
      if (_)
        return u(_, p, m, g);
    }
  }, v = function(h) {
    if (!h)
      return r;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.decodeDotInKeys < "u" && typeof h.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.decoder !== null && typeof h.decoder < "u" && typeof h.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof h.throwOnLimitExceeded < "u" && typeof h.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var p = typeof h.charset > "u" ? r.charset : h.charset, m = typeof h.duplicates > "u" ? r.duplicates : h.duplicates;
    if (m !== "combine" && m !== "first" && m !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : r.allowDots : !!h.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : r.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : r.arrayLimit,
      charset: p,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : r.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : r.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : r.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : r.depth,
      duplicates: m,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : r.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : r.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : r.strictDepth,
      strictMerge: typeof h.strictMerge == "boolean" ? !!h.strictMerge : r.strictMerge,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return ai = function(b, h) {
    var p = v(h);
    if (b === "" || b === null || typeof b > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var m = typeof b == "string" ? d(b, p) : b, g = p.plainObjects ? { __proto__: null } : {}, _ = Object.keys(m), y = 0; y < _.length; ++y) {
      var k = _[y], C = f(k, m[k], p, typeof b == "string");
      g = e.merge(g, C, p);
    }
    return p.allowSparse === !0 ? g : e.compact(g);
  }, ai;
}
var si, ud;
function WO() {
  if (ud) return si;
  ud = 1;
  var e = /* @__PURE__ */ HO(), t = /* @__PURE__ */ GO(), n = /* @__PURE__ */ Al();
  return si = {
    formats: n,
    parse: t,
    stringify: e
  }, si;
}
var cd = /* @__PURE__ */ WO();
function l0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: XO } = Object.prototype, { getPrototypeOf: Tl } = Object, { iterator: Fa, toStringTag: u0 } = Symbol, Ba = /* @__PURE__ */ ((e) => (t) => {
  const n = XO.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Bt = (e) => (e = e.toLowerCase(), (t) => Ba(t) === e), La = (e) => (t) => typeof t === e, { isArray: yr } = Array, fr = La("undefined");
function lo(e) {
  return e !== null && !fr(e) && e.constructor !== null && !fr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const c0 = Bt("ArrayBuffer");
function YO(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && c0(e.buffer), t;
}
const KO = La("string"), ht = La("function"), d0 = La("number"), uo = (e) => e !== null && typeof e == "object", ZO = (e) => e === !0 || e === !1, Uo = (e) => {
  if (Ba(e) !== "object")
    return !1;
  const t = Tl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(u0 in e) && !(Fa in e);
}, JO = (e) => {
  if (!uo(e) || lo(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, QO = Bt("Date"), eN = Bt("File"), tN = (e) => !!(e && typeof e.uri < "u"), nN = (e) => e && typeof e.getParts < "u", rN = Bt("Blob"), oN = Bt("FileList"), aN = (e) => uo(e) && ht(e.pipe);
function sN() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const dd = sN(), fd = typeof dd.FormData < "u" ? dd.FormData : void 0, iN = (e) => {
  let t;
  return e && (fd && e instanceof fd || ht(e.append) && ((t = Ba(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, lN = Bt("URLSearchParams"), [uN, cN, dN, fN] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Bt), pN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function co(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), yr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (lo(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (r = 0; r < s; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function f0(e, t) {
  if (lo(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, p0 = (e) => !fr(e) && e !== Nn;
function Gi() {
  const { caseless: e, skipUndefined: t } = p0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const s = e && f0(n, a) || a;
    Uo(n[s]) && Uo(o) ? n[s] = Gi(n[s], o) : Uo(o) ? n[s] = Gi({}, o) : yr(o) ? n[s] = o.slice() : (!t || !fr(o)) && (n[s] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && co(arguments[o], r);
  return n;
}
const hN = (e, t, n, { allOwnKeys: r } = {}) => (co(
  t,
  (o, a) => {
    n && ht(o) ? Object.defineProperty(e, a, {
      value: l0(o, n),
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
), e), mN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, gN = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Tl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, bN = (e) => {
  if (!e) return null;
  if (yr(e)) return e;
  let t = e.length;
  if (!d0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, xN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Tl(Uint8Array)), wN = (e, t) => {
  const r = (e && e[Fa]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, _N = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, kN = Bt("HTMLFormElement"), SN = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), pd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), EN = Bt("RegExp"), h0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  co(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, zN = (e) => {
  h0(e, (t, n) => {
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
}, $N = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return yr(e) ? r(e) : r(String(e).split(t)), n;
}, PN = () => {
}, CN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function AN(e) {
  return !!(e && ht(e.append) && e[u0] === "FormData" && e[Fa]);
}
const TN = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (uo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (lo(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = yr(r) ? [] : {};
        return co(r, (s, l) => {
          const d = n(s, o + 1);
          !fr(d) && (a[l] = d);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, ON = Bt("AsyncFunction"), NN = (e) => e && (uo(e) || ht(e)) && ht(e.then) && ht(e.catch), m0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Nn.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Nn && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Nn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Nn.postMessage)), RN = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nn) : typeof process < "u" && process.nextTick || m0, IN = (e) => e != null && ht(e[Fa]), Y = {
  isArray: yr,
  isArrayBuffer: c0,
  isBuffer: lo,
  isFormData: iN,
  isArrayBufferView: YO,
  isString: KO,
  isNumber: d0,
  isBoolean: ZO,
  isObject: uo,
  isPlainObject: Uo,
  isEmptyObject: JO,
  isReadableStream: uN,
  isRequest: cN,
  isResponse: dN,
  isHeaders: fN,
  isUndefined: fr,
  isDate: QO,
  isFile: eN,
  isReactNativeBlob: tN,
  isReactNative: nN,
  isBlob: rN,
  isRegExp: EN,
  isFunction: ht,
  isStream: aN,
  isURLSearchParams: lN,
  isTypedArray: xN,
  isFileList: oN,
  forEach: co,
  merge: Gi,
  extend: hN,
  trim: pN,
  stripBOM: mN,
  inherits: vN,
  toFlatObject: gN,
  kindOf: Ba,
  kindOfTest: Bt,
  endsWith: yN,
  toArray: bN,
  forEachEntry: wN,
  matchAll: _N,
  isHTMLForm: kN,
  hasOwnProperty: pd,
  hasOwnProp: pd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: h0,
  freezeMethods: zN,
  toObjectSet: $N,
  toCamelCase: SN,
  noop: PN,
  toFiniteNumber: CN,
  findKey: f0,
  global: Nn,
  isContextDefined: p0,
  isSpecCompliantForm: AN,
  toJSONObject: TN,
  isAsyncFn: ON,
  isThenable: NN,
  setImmediate: m0,
  asap: RN,
  isIterable: IN
};
let ke = class v0 extends Error {
  static from(t, n, r, o, a, s) {
    const l = new v0(t.message, n || t.code, r, o, a);
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
      config: Y.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
ke.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ke.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ke.ECONNABORTED = "ECONNABORTED";
ke.ETIMEDOUT = "ETIMEDOUT";
ke.ERR_NETWORK = "ERR_NETWORK";
ke.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ke.ERR_DEPRECATED = "ERR_DEPRECATED";
ke.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ke.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ke.ERR_CANCELED = "ERR_CANCELED";
ke.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ke.ERR_INVALID_URL = "ERR_INVALID_URL";
const MN = null;
function Wi(e) {
  return Y.isPlainObject(e) || Y.isArray(e);
}
function g0(e) {
  return Y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ii(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = g0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function DN(e) {
  return Y.isArray(e) && !e.some(Wi);
}
const FN = Y.toFlatObject(Y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ua(e, t, n) {
  if (!Y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = Y.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(p, m) {
      return !Y.isUndefined(m[p]);
    }
  );
  const r = n.metaTokens, o = n.visitor || c, a = n.dots, s = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && Y.isSpecCompliantForm(t);
  if (!Y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (Y.isDate(h))
      return h.toISOString();
    if (Y.isBoolean(h))
      return h.toString();
    if (!d && Y.isBlob(h))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return Y.isArrayBuffer(h) || Y.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, p, m) {
    let g = h;
    if (Y.isReactNative(t) && Y.isReactNativeBlob(h))
      return t.append(ii(m, p, a), u(h)), !1;
    if (h && !m && typeof h == "object") {
      if (Y.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), h = JSON.stringify(h);
      else if (Y.isArray(h) && DN(h) || (Y.isFileList(h) || Y.endsWith(p, "[]")) && (g = Y.toArray(h)))
        return p = g0(p), g.forEach(function(y, k) {
          !(Y.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ii([p], k, a) : s === null ? p : p + "[]",
            u(y)
          );
        }), !1;
    }
    return Wi(h) ? !0 : (t.append(ii(m, p, a), u(h)), !1);
  }
  const f = [], v = Object.assign(FN, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Wi
  });
  function b(h, p) {
    if (!Y.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(h), Y.forEach(h, function(g, _) {
        (!(Y.isUndefined(g) || g === null) && o.call(t, g, Y.isString(_) ? _.trim() : _, p, v)) === !0 && b(g, p ? p.concat(_) : [_]);
      }), f.pop();
    }
  }
  if (!Y.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function hd(e) {
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
function Ol(e, t) {
  this._pairs = [], e && Ua(e, this, t);
}
const y0 = Ol.prototype;
y0.append = function(t, n) {
  this._pairs.push([t, n]);
};
y0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, hd);
  } : hd;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function BN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function b0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || BN, o = Y.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let s;
  if (a ? s = a(t, o) : s = Y.isURLSearchParams(t) ? t.toString() : new Ol(t, o).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class md {
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
    Y.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Nl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, LN = typeof URLSearchParams < "u" ? URLSearchParams : Ol, UN = typeof FormData < "u" ? FormData : null, qN = typeof Blob < "u" ? Blob : null, VN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: LN,
    FormData: UN,
    Blob: qN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Rl = typeof window < "u" && typeof document < "u", Xi = typeof navigator == "object" && navigator || void 0, jN = Rl && (!Xi || ["ReactNative", "NativeScript", "NS"].indexOf(Xi.product) < 0), HN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", GN = Rl && window.location.href || "http://localhost", WN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Rl,
  hasStandardBrowserEnv: jN,
  hasStandardBrowserWebWorkerEnv: HN,
  navigator: Xi,
  origin: GN
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...WN,
  ...VN
};
function XN(e, t) {
  return Ua(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ct.isNode && Y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function YN(e) {
  return Y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function KN(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function x0(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), d = a >= n.length;
    return s = !s && Y.isArray(o) ? o.length : s, d ? (Y.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !Y.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && Y.isArray(o[s]) && (o[s] = KN(o[s])), !l);
  }
  if (Y.isFormData(e) && Y.isFunction(e.entries)) {
    const n = {};
    return Y.forEachEntry(e, (r, o) => {
      t(YN(r), o, n, 0);
    }), n;
  }
  return null;
}
function ZN(e, t, n) {
  if (Y.isString(e))
    try {
      return (t || JSON.parse)(e), Y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const fo = {
  transitional: Nl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = Y.isObject(t);
      if (a && Y.isHTMLForm(t) && (t = new FormData(t)), Y.isFormData(t))
        return o ? JSON.stringify(x0(t)) : t;
      if (Y.isArrayBuffer(t) || Y.isBuffer(t) || Y.isStream(t) || Y.isFile(t) || Y.isBlob(t) || Y.isReadableStream(t))
        return t;
      if (Y.isArrayBufferView(t))
        return t.buffer;
      if (Y.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return XN(t, this.formSerializer).toString();
        if ((l = Y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return Ua(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), ZN(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || fo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (Y.isResponse(t) || Y.isReadableStream(t))
        return t;
      if (t && Y.isString(t) && (r && !this.responseType || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError" ? ke.from(l, ke.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
Y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  fo.headers[e] = {};
});
const JN = Y.toObjectSet([
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
]), QN = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && JN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, vd = /* @__PURE__ */ Symbol("internals"), e8 = (e) => !/[\r\n]/.test(e);
function w0(e, t) {
  if (!(e === !1 || e == null)) {
    if (Y.isArray(e)) {
      e.forEach((n) => w0(n, t));
      return;
    }
    if (!e8(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Er(e) {
  return e && String(e).trim().toLowerCase();
}
function t8(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function qo(e) {
  return e === !1 || e == null ? e : Y.isArray(e) ? e.map(qo) : t8(String(e));
}
function n8(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const r8 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function li(e, t, n, r, o) {
  if (Y.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!Y.isString(t)) {
    if (Y.isString(r))
      return t.indexOf(r) !== -1;
    if (Y.isRegExp(r))
      return r.test(t);
  }
}
function o8(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function a8(e, t) {
  const n = Y.toCamelCase(" " + t);
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
      const c = Er(d);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = Y.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (w0(l, d), o[f || d] = qo(l));
    }
    const s = (l, d) => Y.forEach(l, (u, c) => a(u, c, d));
    if (Y.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (Y.isString(t) && (t = t.trim()) && !r8(t))
      s(QN(t), n);
    else if (Y.isObject(t) && Y.isIterable(t)) {
      let l = {}, d, u;
      for (const c of t) {
        if (!Y.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (d = l[u]) ? Y.isArray(d) ? [...d, c[1]] : [d, c[1]] : c[1];
      }
      s(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Er(t), t) {
      const r = Y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return n8(o);
        if (Y.isFunction(n))
          return n.call(this, o, r);
        if (Y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Er(t), t) {
      const r = Y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || li(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Er(s), s) {
        const l = Y.findKey(r, s);
        l && (!n || li(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return Y.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || li(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return Y.forEach(this, (o, a) => {
      const s = Y.findKey(r, a);
      if (s) {
        n[s] = qo(o), delete n[a];
        return;
      }
      const l = t ? o8(a) : String(a).trim();
      l !== a && delete n[a], n[l] = qo(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return Y.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && Y.isArray(r) ? r.join(", ") : r);
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
    const r = (this[vd] = this[vd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = Er(s);
      r[l] || (a8(o, s), r[l] = !0);
    }
    return Y.isArray(t) ? t.forEach(a) : a(t), this;
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
Y.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
Y.freezeMethods(mt);
function ui(e, t) {
  const n = this || fo, r = t || n, o = mt.from(r.headers);
  let a = r.data;
  return Y.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function _0(e) {
  return !!(e && e.__CANCEL__);
}
let po = class extends ke {
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
    super(t ?? "canceled", ke.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function k0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new ke(
      "Request failed with status code " + n.status,
      [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function s8(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function i8(e, t) {
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
    const b = c && u - c;
    return b ? Math.round(v * 1e3 / b) : void 0;
  };
}
function l8(e, t) {
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
const fa = (e, t, n = 3) => {
  let r = 0;
  const o = i8(50, 250);
  return l8((a) => {
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
}, gd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, yd = (e) => (...t) => Y.asap(() => e(...t)), u8 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, c8 = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, s) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      Y.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), Y.isString(r) && l.push(`path=${r}`), Y.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), Y.isString(s) && l.push(`SameSite=${s}`), document.cookie = l.join("; ");
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
function d8(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function f8(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function S0(e, t, n) {
  let r = !d8(t);
  return e && (r || n == !1) ? f8(e, t) : t;
}
const bd = (e) => e instanceof mt ? { ...e } : e;
function jn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, v) {
    return Y.isPlainObject(u) && Y.isPlainObject(c) ? Y.merge.call({ caseless: v }, u, c) : Y.isPlainObject(c) ? Y.merge({}, c) : Y.isArray(c) ? c.slice() : c;
  }
  function o(u, c, f, v) {
    if (Y.isUndefined(c)) {
      if (!Y.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, c, f, v);
  }
  function a(u, c) {
    if (!Y.isUndefined(c))
      return r(void 0, c);
  }
  function s(u, c) {
    if (Y.isUndefined(c)) {
      if (!Y.isUndefined(u))
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
    headers: (u, c, f) => o(bd(u), bd(c), f, !0)
  };
  return Y.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = Y.hasOwnProp(d, c) ? d[c] : o, v = f(e[c], t[c], c);
    Y.isUndefined(v) && f !== l || (n[c] = v);
  }), n;
}
const E0 = (e) => {
  const t = jn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: l } = t;
  if (t.headers = s = mt.from(s), t.url = b0(
    S0(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && s.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), Y.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (Y.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([c, f]) => {
        u.includes(c.toLowerCase()) && s.set(c, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && Y.isFunction(r) && (r = r(t)), r || r !== !1 && u8(t.url))) {
    const d = o && a && c8.read(a);
    d && s.set(o, d);
  }
  return t;
}, p8 = typeof XMLHttpRequest < "u", h8 = p8 && function(e) {
  return new Promise(function(n, r) {
    const o = E0(e);
    let a = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = o, c, f, v, b, h;
    function p() {
      b && b(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function g() {
      if (!m)
        return;
      const y = mt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), C = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: y,
        config: e,
        request: m
      };
      k0(
        function(w) {
          n(w), p();
        },
        function(w) {
          r(w), p();
        },
        C
      ), m = null;
    }
    "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, m.onabort = function() {
      m && (r(new ke("Request aborted", ke.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(k) {
      const C = k && k.message ? k.message : "Network Error", $ = new ke(C, ke.ERR_NETWORK, e, m);
      $.event = k || null, r($), m = null;
    }, m.ontimeout = function() {
      let k = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || Nl;
      o.timeoutErrorMessage && (k = o.timeoutErrorMessage), r(
        new ke(
          k,
          C.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
          e,
          m
        )
      ), m = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in m && Y.forEach(s.toJSON(), function(k, C) {
      m.setRequestHeader(C, k);
    }), Y.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), l && l !== "json" && (m.responseType = o.responseType), u && ([v, h] = fa(u, !0), m.addEventListener("progress", v)), d && m.upload && ([f, b] = fa(d), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (y) => {
      m && (r(!y || y.type ? new po(null, e, m) : y), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const _ = s8(o.url);
    if (_ && ct.protocols.indexOf(_) === -1) {
      r(
        new ke(
          "Unsupported protocol " + _ + ":",
          ke.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    m.send(a || null);
  });
}, m8 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(
          c instanceof ke ? c : new po(c instanceof Error ? c.message : c)
        );
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new ke(`timeout of ${t}ms exceeded`, ke.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: d } = r;
    return d.unsubscribe = () => Y.asap(l), d;
  }
}, v8 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, g8 = async function* (e, t) {
  for await (const n of y8(e))
    yield* v8(n, t);
}, y8 = async function* (e) {
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
}, xd = (e, t, n, r) => {
  const o = g8(e, t);
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
}, wd = 64 * 1024, { isFunction: Co } = Y, b8 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(Y.global), { ReadableStream: _d, TextEncoder: kd } = Y.global, Sd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, x8 = (e) => {
  e = Y.merge.call(
    {
      skipUndefined: !0
    },
    b8,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? Co(t) : typeof fetch == "function", a = Co(n), s = Co(r);
  if (!o)
    return !1;
  const l = o && Co(_d), d = o && (typeof kd == "function" ? /* @__PURE__ */ ((h) => (p) => h.encode(p))(new kd()) : async (h) => new Uint8Array(await new n(h).arrayBuffer())), u = a && l && Sd(() => {
    let h = !1;
    const p = new _d(), m = new n(ct.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), h && !m;
  }), c = s && l && Sd(() => Y.isReadableStream(new r("").body)), f = {
    stream: c && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !f[h] && (f[h] = (p, m) => {
      let g = p && p[h];
      if (g)
        return g.call(p);
      throw new ke(
        `Response type '${h}' is not supported`,
        ke.ERR_NOT_SUPPORT,
        m
      );
    });
  });
  const v = async (h) => {
    if (h == null)
      return 0;
    if (Y.isBlob(h))
      return h.size;
    if (Y.isSpecCompliantForm(h))
      return (await new n(ct.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (Y.isArrayBufferView(h) || Y.isArrayBuffer(h))
      return h.byteLength;
    if (Y.isURLSearchParams(h) && (h = h + ""), Y.isString(h))
      return (await d(h)).byteLength;
  }, b = async (h, p) => {
    const m = Y.toFiniteNumber(h.getContentLength());
    return m ?? v(p);
  };
  return async (h) => {
    let {
      url: p,
      method: m,
      data: g,
      signal: _,
      cancelToken: y,
      timeout: k,
      onDownloadProgress: C,
      onUploadProgress: $,
      responseType: w,
      headers: S,
      withCredentials: U = "same-origin",
      fetchOptions: D
    } = E0(h), M = t || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let A = m8(
      [_, y && y.toAbortSignal()],
      k
    ), V = null;
    const E = A && A.unsubscribe && (() => {
      A.unsubscribe();
    });
    let F;
    try {
      if ($ && u && m !== "get" && m !== "head" && (F = await b(S, g)) !== 0) {
        let te = new n(p, {
          method: "POST",
          body: g,
          duplex: "half"
        }), fe;
        if (Y.isFormData(g) && (fe = te.headers.get("content-type")) && S.setContentType(fe), te.body) {
          const [be, _e] = gd(
            F,
            fa(yd($))
          );
          g = xd(te.body, wd, be, _e);
        }
      }
      Y.isString(U) || (U = U ? "include" : "omit");
      const P = a && "credentials" in n.prototype, R = {
        ...D,
        signal: A,
        method: m.toUpperCase(),
        headers: S.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: P ? U : void 0
      };
      V = a && new n(p, R);
      let x = await (a ? M(V, D) : M(p, R));
      const q = c && (w === "stream" || w === "response");
      if (c && (C || q && E)) {
        const te = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          te[ne] = x[ne];
        });
        const fe = Y.toFiniteNumber(x.headers.get("content-length")), [be, _e] = C && gd(
          fe,
          fa(yd(C), !0)
        ) || [];
        x = new r(
          xd(x.body, wd, be, () => {
            _e && _e(), E && E();
          }),
          te
        );
      }
      w = w || "text";
      let Q = await f[Y.findKey(f, w) || "text"](
        x,
        h
      );
      return !q && E && E(), await new Promise((te, fe) => {
        k0(te, fe, {
          data: Q,
          headers: mt.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: h,
          request: V
        });
      });
    } catch (P) {
      throw E && E(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new ke(
          "Network Error",
          ke.ERR_NETWORK,
          h,
          V,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : ke.from(P, P && P.code, h, V, P && P.response);
    }
  };
}, w8 = /* @__PURE__ */ new Map(), z0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let s = a.length, l = s, d, u, c = w8;
  for (; l--; )
    d = a[l], u = c.get(d), u === void 0 && c.set(d, u = l ? /* @__PURE__ */ new Map() : x8(t)), c = u;
  return u;
};
z0();
const Il = {
  http: MN,
  xhr: h8,
  fetch: {
    get: z0
  }
};
Y.forEach(Il, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ed = (e) => `- ${e}`, _8 = (e) => Y.isFunction(e) || e === null || e === !1;
function k8(e, t) {
  e = Y.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (o = r, !_8(r) && (o = Il[(l = String(r)).toLowerCase()], o === void 0))
      throw new ke(`Unknown adapter '${l}'`);
    if (o && (Y.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(a).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(Ed).join(`
`) : " " + Ed(s[0]) : "as no adapter specified";
    throw new ke(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const $0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: k8,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Il
};
function ci(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new po(null, e);
}
function zd(e) {
  return ci(e), e.headers = mt.from(e.headers), e.data = ui.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $0.getAdapter(e.adapter || fo.adapter, e)(e).then(
    function(r) {
      return ci(e), r.data = ui.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return _0(r) || (ci(e), r && r.response && (r.response.data = ui.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const P0 = "1.15.0", qa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qa[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $d = {};
qa.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + P0 + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new ke(
        o(s, " has been removed" + (n ? " in " + n : "")),
        ke.ERR_DEPRECATED
      );
    return n && !$d[s] && ($d[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
qa.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function S8(e, t, n) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const l = e[a], d = l === void 0 || s(l, a, e);
      if (d !== !0)
        throw new ke(
          "option " + a + " must be " + d,
          ke.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new ke("Unknown option " + a, ke.ERR_BAD_OPTION);
  }
}
const Vo = {
  assertOptions: S8,
  validators: qa
}, St = Vo.validators;
let Dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new md(),
      response: new md()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = jn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Vo.assertOptions(
      r,
      {
        silentJSONParsing: St.transitional(St.boolean),
        forcedJSONParsing: St.transitional(St.boolean),
        clarifyTimeoutError: St.transitional(St.boolean),
        legacyInterceptorReqResOrdering: St.transitional(St.boolean)
      },
      !1
    ), o != null && (Y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Vo.assertOptions(
      o,
      {
        encode: St.function,
        serialize: St.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Vo.assertOptions(
      n,
      {
        baseUrl: St.spelling("baseURL"),
        withXsrfToken: St.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && Y.merge(a.common, a[n.method]);
    a && Y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (h) => {
      delete a[h];
    }), n.headers = mt.concat(s, a);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1)
        return;
      d = d && p.synchronous;
      const m = n.transitional || Nl;
      m && m.legacyInterceptorReqResOrdering ? l.unshift(p.fulfilled, p.rejected) : l.push(p.fulfilled, p.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let c, f = 0, v;
    if (!d) {
      const h = [zd.bind(this), void 0];
      for (h.unshift(...l), h.push(...u), v = h.length, c = Promise.resolve(n); f < v; )
        c = c.then(h[f++], h[f++]);
      return c;
    }
    v = l.length;
    let b = n;
    for (; f < v; ) {
      const h = l[f++], p = l[f++];
      try {
        b = h(b);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      c = zd.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, v = u.length; f < v; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = jn(this.defaults, t);
    const n = S0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return b0(n, t.params, t.paramsSerializer);
  }
};
Y.forEach(["delete", "get", "head", "options"], function(t) {
  Dn.prototype[t] = function(n, r) {
    return this.request(
      jn(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
Y.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, l) {
      return this.request(
        jn(l || {}, {
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
  Dn.prototype[t] = n(), Dn.prototype[t + "Form"] = n(!0);
});
let E8 = class C0 {
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
      r.reason || (r.reason = new po(a, s, l), n(r.reason));
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
      token: new C0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function z8(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function $8(e) {
  return Y.isObject(e) && e.isAxiosError === !0;
}
const Yi = {
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
Object.entries(Yi).forEach(([e, t]) => {
  Yi[t] = e;
});
function A0(e) {
  const t = new Dn(e), n = l0(Dn.prototype.request, t);
  return Y.extend(n, Dn.prototype, t, { allOwnKeys: !0 }), Y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return A0(jn(e, o));
  }, n;
}
const Je = A0(fo);
Je.Axios = Dn;
Je.CanceledError = po;
Je.CancelToken = E8;
Je.isCancel = _0;
Je.VERSION = P0;
Je.toFormData = Ua;
Je.AxiosError = ke;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = z8;
Je.isAxiosError = $8;
Je.mergeConfig = jn;
Je.AxiosHeaders = mt;
Je.formToJSON = (e) => x0(Y.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = $0.getAdapter;
Je.HttpStatusCode = Yi;
Je.default = Je;
const {
  Axios: yR,
  AxiosError: bR,
  CanceledError: xR,
  isCancel: T0,
  CancelToken: wR,
  VERSION: _R,
  all: kR,
  Cancel: SR,
  isAxiosError: O0,
  spread: ER,
  toFormData: zR,
  AxiosHeaders: $R,
  HttpStatusCode: PR,
  formToJSON: CR,
  getAdapter: AR,
  mergeConfig: P8
} = Je;
var C8 = class {
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
    return Zp(this.config, e) ? xt(this.config, e) : xt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? Et(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      Et(this.config, n, r);
    });
  }
}, Sn = new C8({
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
function to(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function kt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Pd = (e) => kt("before", { cancelable: !0, detail: { visit: e } }), A8 = (e) => kt("error", { detail: { errors: e } }), T8 = (e) => kt("exception", { cancelable: !0, detail: { exception: e } }), O8 = (e) => kt("finish", { detail: { visit: e } }), N8 = (e) => kt("invalid", { cancelable: !0, detail: { response: e } }), R8 = (e) => kt("beforeUpdate", { detail: { page: e } }), Fr = (e) => kt("navigate", { detail: { page: e } }), I8 = (e) => kt("progress", { detail: { progress: e } }), M8 = (e) => kt("start", { detail: { visit: e } }), D8 = (e) => kt("success", { detail: { page: e } }), F8 = (e, t) => kt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), B8 = (e) => kt("prefetching", { detail: { visit: e } }), pa = (e) => kt("flash", { detail: { flash: e } }), dt = class {
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
dt.locationVisitKey = "inertiaLocationVisit";
var L8 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = N0(), n = await R0(), r = await G8(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await q8(t, r, e);
}, pr = {
  key: "historyKey",
  iv: "historyIv"
}, U8 = async (e) => {
  const t = N0(), n = await R0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await V8(t, n, e);
}, q8 = async (e, t, n) => {
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
}, V8 = async (e, t, n) => {
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
}, N0 = () => {
  const e = dt.get(pr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(pr.iv, Array.from(t)), t;
}, j8 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), H8 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(pr.key, Array.from(new Uint8Array(t)));
}, G8 = async (e) => {
  if (e)
    return e;
  const t = await j8();
  return t ? (await H8(t), t) : null;
}, R0 = async () => {
  const e = dt.get(pr.key);
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
}, I0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !W8(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, W8 = (e, t) => {
  switch (typeof e) {
    case "object":
      return I0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, X8 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Cd = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(X8))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, Y8 = class {
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
          Vt.removeFromInFlight(e), c(f);
        }
      });
    }).then((u) => {
      this.remove(e);
      const c = u.getPageResponse();
      he.mergeOncePropsIntoResponse(c), this.cached.push({
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
    return [Cd(t), Cd(n)];
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
    const t = it(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return I0(
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
        he.mergeOncePropsIntoResponse(n, { force: !0 });
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
}, Vt = new Y8(), di = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, K8 = (e) => {
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
}, M0 = (e, t) => {
  if (!t)
    return e.filter((a) => di(a));
  const n = e.indexOf(t), r = [], o = [];
  for (let a = n; a >= 0; a--) {
    const s = e[a];
    if (di(s))
      r.push(s);
    else
      break;
  }
  for (let a = n + 1; a < e.length; a++) {
    const s = e[a];
    if (di(s))
      o.push(s);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Br = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Br(e, t - 1) : e();
  });
}, Or = typeof window > "u", Z8 = !Or && /Firefox/i.test(window.navigator.userAgent), ft = class {
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
    if (Z8 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Br(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    !Or && window.location.hash || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Or ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Or || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Or || this.regions().forEach((t, n) => {
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
}, Ml = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function Ki(e) {
  return Ml(e) || e instanceof FormData && Array.from(e.values()).some((t) => Ki(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Ki(t));
}
var Zi = (e) => e instanceof FormData;
function D0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && B0(t, F0(n, o, "indices"), e[o], r);
  return t;
}
function F0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function B0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => B0(e, F0(t, o.toString(), r), n[o], r)
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
  D0(n, e, t, r);
}
function zt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var J8 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? zt(e) : e;
  if ((Ki(t) || r) && !Zi(t) && (Sn.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = D0(t, new FormData(), null, o)), Zi(t))
    return [a, t];
  const [s, l] = Dl(n, a, t, o);
  return [zt(s), l];
};
function Dl(e, t, n, r = "brackets") {
  const o = e === "get" && !Zi(n) && Object.keys(n).length > 0, a = L0(t.toString()), s = a || t.toString().startsWith("/") || t.toString() === "", l = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), d = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), b = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = cd.stringify(
      { ...cd.parse(f.search, b), ...n },
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
function ha(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Ad = (e, t) => {
  e.hash && !t.hash && ha(e).href === t.href && (t.hash = e.hash);
}, ma = (e, t) => ha(e).href === ha(t).href, Q8 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function un(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function L0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function e6(e, t) {
  const n = typeof e == "string" ? zt(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var t6 = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1, this.pendingDeferredProps = null, this.historyQuotaExceeded = !1;
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: n,
    onFlash: r
  }) {
    return this.page = { ...e, flash: e.flash ?? {} }, this.swapComponent = t, this.resolveComponent = n, this.onFlashCallback = r, Wt.on("historyQuotaExceeded", () => {
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
      t = t || ma(zt(e.url), d);
      const c = { ...e, flash: {} };
      return new Promise(
        (f) => t ? De.replaceState(c, f) : De.pushState(c, f)
      ).then(() => {
        const f = !this.isTheSame(e);
        if (!f && Object.keys(e.props.errors || {}).length > 0 && (o = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && Vt.updateCachedOncePropsFromCurrentPage(), f && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: s,
          page: e,
          preserveState: r,
          viewTransition: o
        }).then(() => {
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(u)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Wt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Fr(e);
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
}, he = new t6(), Va = class {
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
}, er = typeof window > "u", zr = new Va(), Td = !er && /CriOS/.test(window.navigator.userAgent), n6 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    this.replaceState({
      ...he.getWithoutFlashData(),
      rememberedState: {
        ...he.get()?.rememberedState ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    if (!er)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!er) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, zr.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Td ? new Promise((o) => {
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
        props: it(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((n) => e.encryptHistory ? L8(t).then(n) : n(t));
  }
  processQueue() {
    return zr.process();
  }
  decrypt(e = null) {
    if (er)
      return Promise.resolve(e ?? he.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? U8(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    zr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !wn(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    zr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !wn(this.getDocumentScrollPosition(), e))
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
    if (wn(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (he.merge(r), !er) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, zr.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Td ? new Promise((s) => {
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
        Wt.fireInternalEvent("historyQuotaExceeded", t);
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
    return !er && !!window.history.state?.page;
  }
  clear() {
    dt.remove(pr.key), dt.remove(pr.iv);
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
var De = new n6(), r6 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", to(ft.onWindowScroll.bind(ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", to(ft.onScroll.bind(ft), 100), !0);
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
    he.clear(), this.fireInternalEvent("missingHistoryItem");
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
      const n = zt(he.get().url);
      n.hash = window.location.hash, De.replaceState({ ...he.getWithoutFlashData(), url: n.href }), ft.reset();
      return;
    }
    if (!De.isValidState(t))
      return this.onMissingHistoryItem();
    De.decrypt(t.page).then((n) => {
      if (he.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ze.cancelAll({ prefetch: !1 }), he.setQuietly(n, { preserveState: !1 }).then(() => {
        ft.restore(De.getScrollRegions()), Fr(he.get());
        const r = {}, o = he.get().props;
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
}, Wt = new r6(), o6 = class {
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
}, fi = new o6(), a6 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    fi.isReload() && (De.deleteState(De.rememberedState), De.clearInitialState(De.rememberedState));
  }
  static handleBackForward() {
    if (!fi.isBackForward() || !De.browserHasHistoryEntry())
      return !1;
    const e = De.getScrollRegions();
    return De.decrypt().then((t) => {
      he.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Fr(he.get());
      });
    }).catch(() => {
      Wt.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!dt.exists(dt.locationVisitKey))
      return !1;
    const e = dt.get(dt.locationVisitKey) || {};
    return dt.remove(dt.locationVisitKey), typeof window < "u" && he.setUrlHash(window.location.hash), De.decrypt(he.get()).then(() => {
      const t = De.getState(De.rememberedState, {}), n = De.getScrollRegions();
      he.remember(t), he.set(he.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && ft.restore(n), Fr(he.get());
      });
    }).catch(() => {
      Wt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && he.setUrlHash(window.location.hash), he.set(he.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      fi.isReload() ? ft.restore(De.getScrollRegions()) : ft.scrollToAnchor();
      const e = he.get();
      Fr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => pa(t));
    });
  }
}, s6 = class {
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
}, i6 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new s6(e, t, n);
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
}, l6 = new i6(), Ji = class jo {
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
    return new jo(t);
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = he.get().component);
    const n = this.params.only.concat(this.params.reset);
    return n.length > 0 && (t["X-Inertia-Partial-Data"] = n.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = jo.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = jo.resolvePreserveOption(this.params.preserveState, t);
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
}, U0 = {
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
}, u6 = {
  show(e) {
    const { iframe: t, page: n } = U0.createIframeAndPage(e);
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
}, c6 = new Va(), Od = class q0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new q0(t, n, r);
  }
  async handlePrefetch() {
    ma(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return c6.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), F8(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await De.processQueue(), De.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = he.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return A8(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(he.get().url);
    const { flash: n } = he.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (pa(n), this.requestParams.all().onFlash(n)), D8(he.get()), await this.requestParams.all().onSuccess(he.get()), De.preserveUrl = !1;
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
      const n = zt(this.getHeader("x-inertia-location"));
      return Ad(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (N8(t))
      return Sn.get("future.useDialogForErrorModal") ? u6.show(t.data) : U0.show(t.data);
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
      if (dt.set(dt.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === !0
      }), typeof window > "u")
        return;
      ma(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), he.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = De.preserveUrl ? he.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), R8(t), he.set(t, {
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
    if (this.originatingPage.component !== he.get().component)
      return !1;
    const n = zt(this.originatingPage.url), r = zt(he.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = zt(t.url);
    return Ad(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== he.get().component || Sn.get("future.preserveEqualProps") !== !0)
      return;
    const n = he.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      wn(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== he.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], a = t.matchPropsOn || [], s = (d, u) => {
      const c = xt(he.get().props, d), f = xt(t.props, d);
      if (Array.isArray(f)) {
        const v = this.mergeOrMatchItems(
          c || [],
          f,
          d,
          a,
          u
        );
        Et(t.props, d, v);
      } else if (typeof f == "object" && f !== null) {
        const v = {
          ...c || {},
          ...f
        };
        Et(t.props, d, v);
      }
    };
    if (n.forEach((d) => s(d, !0)), r.forEach((d) => s(d, !1)), o.forEach((d) => {
      const u = he.get().props[d], c = t.props[d], f = (v, b, h) => Array.isArray(b) ? this.mergeOrMatchItems(v, b, h, a) : typeof b == "object" && b !== null ? Object.keys(b).reduce(
        (p, m) => (p[m] = f(v ? v[m] : void 0, b[m], `${h}.${m}`), p),
        { ...v }
      ) : b;
      t.props[d] = f(u, c, d);
    }), t.props = { ...he.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const d = he.get().props.errors;
      d && Object.keys(d).length > 0 && (t.props.errors = d);
    }
    he.get().scrollProps && (t.scrollProps = {
      ...he.get().scrollProps || {},
      ...t.scrollProps || {}
    }), he.hasOnceProps() && (t.onceProps = {
      ...he.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...he.get().flash });
    const l = he.get().initialDeferredProps;
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
    this.requestParams.all().preserveState && n && t.component === he.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Nd = class V0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Ji.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new V0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), M8(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), B8(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Je({
      method: this.requestParams.all().method,
      url: ha(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Od.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Od.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && T8(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, O8(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, I8(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = he.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const r = Object.entries(n.onceProps || {}).filter(([, o]) => n.props[o.prop] === void 0 ? !1 : !o.expiresAt || o.expiresAt > Date.now()).map(([o]) => o);
    return r.length > 0 && (t["X-Inertia-Except-Once-Props"] = r.join(",")), t;
  }
}, Rd = class {
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
}, d6 = class {
  constructor() {
    this.syncRequestStream = new Rd({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Rd({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Va();
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: n,
    onFlash: r
  }) {
    he.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: r
    }), a6.handle(), Wt.init(), Wt.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Wt.on("loadDeferredProps", (o) => {
      this.loadDeferredProps(o);
    }), Wt.on("historyQuotaExceeded", (o) => {
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
    } : Wt.onGlobalEvent(e, t);
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
    return l6.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Pd(n))
      return;
    const o = zt(he.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? Q8(n.url, o) : ma(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !he.isCleared() && !n.preserveUrl && ft.save();
    const l = {
      ...n,
      ...r
    }, d = Vt.get(l);
    d ? (Lr.reveal(d.inFlight), Vt.use(d, l)) : (Lr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Nd.create(l, he.get())));
  }
  getCached(e, t = {}) {
    return Vt.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Vt.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Vt.removeAll();
  }
  flushByCacheTags(e) {
    Vt.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return Vt.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (un(e) ? e.method : "get")) !== "get")
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
    if (l.onBefore(o) === !1 || !Pd(o))
      return;
    Lr.hide(), this.asyncRequestStream.interruptInFlight();
    const d = {
      ...o,
      ...l
    };
    new Promise((c) => {
      const f = () => {
        he.get() ? c() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Vt.add(
        d,
        (c) => {
          this.asyncRequestStream.send(Nd.create(c, he.get()));
        },
        {
          cacheFor: Sn.get("prefetch.cacheFor"),
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
    return he.resolve(e);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, n) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(r) {
        const o = typeof t == "function" ? t(xt(r, e), r) : t;
        return Et(it(r), e, o);
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
    const n = he.get().flash;
    let r;
    if (typeof e == "function")
      r = e(n);
    else if (typeof e == "string")
      r = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      r = { ...n, ...e };
    else
      return;
    he.setFlash(r), Object.keys(r).length && pa(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = he.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((p) => [p.prop, n.props[p.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, a = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: s, onError: l, onFinish: d, onFlash: u, onSuccess: c, ...f } = e, v = {
      ...n,
      ...f,
      flash: a ?? {},
      props: o
    }, b = Ji.resolvePreserveOption(e.preserveScroll ?? !1, v), h = Ji.resolvePreserveOption(e.preserveState ?? !1, v);
    return he.set(v, {
      replace: t,
      preserveScroll: b,
      preserveState: h,
      viewTransition: s
    }).then(() => {
      const p = he.get().flash;
      Object.keys(p).length > 0 && (pa(p), u?.(p));
      const m = he.get().props.errors || {};
      if (Object.keys(m).length === 0) {
        c?.(he.get());
        return;
      }
      const g = e.errorBag ? m[e.errorBag || ""] || {} : m;
      l?.(g);
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
    if (un(e)) {
      const u = e;
      e = u.url, t.method = t.method ?? u.method;
    }
    const r = Sn.get("visitOptions"), o = r ? r(e.toString(), it(t)) || {} : {}, a = {
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
    }, [s, l] = J8(
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
}, Ho = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? un(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : un(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function f6(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function p6(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function h6(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function m6(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Go(e) {
  if (Array.isArray(e))
    return e.map(Go);
  if (typeof e != "object" || e === null || Ml(e))
    return e;
  if (m6(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = Go(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Go(e[n]);
  return t;
}
function Id(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = p6(f6(n));
    if (o[o.length - 1] === "") {
      const a = o.slice(0, -1), s = xt(t, a);
      if (Array.isArray(s))
        s.push(r);
      else if (s && typeof s == "object" && !Ml(s)) {
        const l = Object.keys(s).filter((d) => /^\d+$/.test(d)).map(Number).sort((d, u) => d - u);
        Et(t, a, l.length > 0 ? [...l.map((d) => s[d]), r] : [r]);
      } else
        Et(t, a, [r]);
      continue;
    }
    h6(t, o.map(String), r);
  }
  return Go(t);
}
var pi = {
  preferredAttribute() {
    return Sn.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
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
  update: to(function(e) {
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
function v6(e, t, n) {
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
    const f = t(""), v = pi.preferredAttribute(), b = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, h = Object.values(r).reduce((p, m) => p.concat(m), []).reduce((p, m) => {
      if (m.indexOf("<") === -1)
        return p;
      if (m.indexOf("<title ") === 0) {
        const _ = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = _ ? `${_[1]}${t(_[2])}${_[3]}` : m, p;
      }
      const g = m.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return g ? p[g[0]] = m : p[Object.keys(p).length] = m, p;
    }, b);
    return Object.values(h);
  }
  function c() {
    e ? n(u()) : pi.update(u());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const f = a();
      return {
        preferredAttribute: pi.preferredAttribute,
        reconnect: () => l(f),
        update: (v) => d(f, v),
        disconnect: () => s(f)
      };
    }
  };
}
var g6 = "X-Inertia-Infinite-Scroll-Merge-Intent", y6 = (e) => {
  const t = () => {
    const g = he.get().scrollProps?.[e.getPropName()];
    if (g)
      return g;
    throw new Error(`The page object does not contain a scroll prop named "${e.getPropName()}".`);
  }, n = {
    component: null,
    loading: !1,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  }, r = () => {
    const g = t();
    n.component = he.get().component, n.loading = !1, n.previousPage = g.previousPage, n.nextPage = g.nextPage, n.lastLoadedPage = g.currentPage, n.requestCount = 0;
  }, o = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    r();
    const g = Ze.restore(o());
    g && typeof g == "object" && g.lastLoadedPage === t().currentPage && (n.previousPage = g.previousPage, n.nextPage = g.nextPage, n.lastLoadedPage = g.lastLoadedPage, n.requestCount = g.requestCount || 0);
  }
  const a = Ze.on("success", (g) => {
    n.component === g.detail.page.component && t().reset && (r(), e.onReset?.());
  }), s = (g) => g === "next" ? "nextPage" : "previousPage", l = (g) => {
    const _ = s(g);
    return n[_];
  }, d = (g) => {
    const _ = t(), y = s(g);
    n.lastLoadedPage = _.currentPage, n[y] = _[y], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, c = () => n.requestCount, f = (g, _ = {}) => {
    const y = l(g);
    n.loading || y === null || (n.loading = !0, Ze.reload({
      ..._,
      data: { [u()]: y },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [g6]: g === "previous" ? "prepend" : "append",
        ..._.headers
      },
      onBefore: (k) => {
        g === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), _.onBefore?.(k);
      },
      onBeforeUpdate: (k) => {
        e.onBeforeUpdate(), _.onBeforeUpdate?.(k);
      },
      onSuccess: (k) => {
        d(g), _.onSuccess?.(k);
      },
      onFinish: (k) => {
        n.loading = !1, g === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), _.onFinish?.(k);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: u,
    getRequestCount: c,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (g) => f("next", g),
    fetchPrevious: (g) => f("previous", g),
    removeEventListener: a
  };
}, b6 = () => {
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
}, Wo = "infiniteScrollPage", hi = "infiniteScrollIgnore", j0 = (e) => e.dataset[Wo], x6 = (e) => {
  const t = b6();
  let n, r, o, a, s = !1;
  const l = () => {
    a = new MutationObserver((w) => {
      w.forEach((S) => {
        S.addedNodes.forEach((U) => {
          U.nodeType === Node.ELEMENT_NODE && v.add(U);
        });
      }), k();
    }), a.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (w) => e.onItemIntersected(w.target)
    );
    const $ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, $), o = t.new(e.onNextTriggered, $);
  }, d = () => {
    s && u();
    const $ = e.getStartElement(), w = e.getEndElement();
    $ && e.shouldFetchPrevious() && r.observe($), w && e.shouldFetchNext() && o.observe(w), s = !0;
  }, u = () => {
    s && (r.disconnect(), o.disconnect(), s = !1);
  }, c = () => {
    s && d();
  }, f = () => {
    u(), t.flushAll(), a?.disconnect();
  }, v = /* @__PURE__ */ new Set(), b = ($) => !(Wo in $.dataset) && !(hi in $.dataset), h = () => {
    Array.from(v).forEach(($) => {
      b($) && ($.dataset[hi] = "true"), n.observe($);
    }), v.clear();
  }, p = ($) => Array.from(
    $.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let m = !1;
  const g = ($) => {
    !m && (m = !0, C()) || (p(e.getItemsElement()).forEach((w) => {
      b(w) && (w.dataset[Wo] = $?.toString() || "1"), n.observe(w);
    }), y());
  }, _ = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, y = () => {
    const $ = {}, w = e.getItemsElement().childNodes;
    for (let S = 0; S < w.length; S++) {
      const U = w[S];
      if (U.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = j0(U);
      typeof D > "u" || (D in $ ? $[D].to = S : $[D] = { from: S, to: S });
    }
    Ze.remember($, _());
  }, k = to(y, 250), C = () => {
    const $ = Ze.restore(_());
    if (!$ || typeof $ != "object")
      return !1;
    const w = e.getItemsElement().childNodes;
    for (let S = 0; S < w.length; S++) {
      const U = w[S];
      if (U.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = U;
      let M;
      for (const [A, V] of Object.entries($))
        if (S >= V.from && S <= V.to) {
          M = A;
          break;
        }
      if (M)
        D.dataset[Wo] = M;
      else if (b(D))
        D.dataset[hi] = "true";
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
    processManuallyAddedElements: h,
    processServerLoadedElements: g
  };
}, w6 = new Va(), Jn, vn, Ao = null, _6 = (e) => {
  let t = !0;
  const n = (o) => {
    w6.add(() => new Promise((a) => {
      if (!t)
        return Jn = vn = null, a();
      if (!Jn || !vn) {
        const d = he.get().url;
        Jn = zt(d), vn = zt(d), Ao = L0(d);
      }
      const s = e.getPageName(), l = vn.searchParams;
      o === "1" ? l.delete(s) : l.set(s, o), setTimeout(() => a());
    })).finally(() => {
      t && Jn && vn && Jn.href !== vn.href && Ao !== null && Ze.replace({
        url: e6(vn, Ao),
        preserveScroll: !0,
        preserveState: !0
      }), Jn = vn = Ao = null;
    });
  };
  return {
    onItemIntersected: to((o) => {
      const a = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !a)
        return;
      const s = /* @__PURE__ */ new Map(), l = [...a.children];
      M0(l, o).forEach((c) => {
        const f = j0(c) ?? "1";
        s.has(f) ? s.set(f, s.get(f) + 1) : s.set(f, 1);
      });
      const u = Array.from(s.entries()).sort((c, f) => f[1] - c[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, k6 = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const l = e.getScrollableParent(), d = e.getItemsElement();
        n = l?.scrollTop || window.scrollY;
        const u = M0([...d.children]);
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
function S6(e) {
  const t = _6({ ...e, getPageName: () => o.getPageName() }), n = k6(e), r = x6({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = y6({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Br(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Br(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), a = (u) => {
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), b = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (h) => {
      v(h), c();
    }, u.onSuccess = (h) => {
      b(h), f();
    }, u;
  }, s = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = a(u)), s(u);
  };
  const l = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = a(u)), l(u);
  };
  const d = Ze.on("success", () => Br(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      d(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function H0(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function To(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(H0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Md(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !H0(e) && (e.key === "Enter" || t && e.key === " ");
}
var nt = "nprogress", $t, st = {
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
}, En = null, E6 = (e) => {
  Object.assign(st, e), st.includeCSS && T6(st.color), $t = document.createElement("div"), $t.id = nt, $t.innerHTML = st.template;
}, ja = (e) => {
  const t = G0();
  e = Z0(e, st.minimum, 1), En = e === 1 ? null : e;
  const n = $6(!t), r = n.querySelector(st.barSelector), o = st.speed, a = st.easing;
  n.offsetWidth, A6((s) => {
    const l = st.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${Xo(e)}%,0,0)`
    } : st.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${Xo(e)}%,0)`
    } : { marginLeft: `${Xo(e)}%` };
    for (const d in l)
      r.style[d] = l[d];
    if (e !== 1)
      return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        K0(), n.style.transition = "", n.style.opacity = "", s();
      }, o);
    }, o);
  });
}, G0 = () => typeof En == "number", W0 = () => {
  En || ja(0);
  const e = function() {
    setTimeout(function() {
      En && (X0(), e());
    }, st.trickleSpeed);
  };
  st.trickle && e();
}, z6 = (e) => {
  !e && !En || (X0(0.3 + 0.5 * Math.random()), ja(1));
}, X0 = (e) => {
  const t = En;
  if (t === null)
    return W0();
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
    })(), ja(Z0(t + e, 0, 0.994));
}, $6 = (e) => {
  if (P6())
    return document.getElementById(nt);
  document.documentElement.classList.add(`${nt}-busy`);
  const t = $t.querySelector(st.barSelector), n = e ? "-100" : Xo(En || 0), r = Y0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, st.showSpinner || $t.querySelector(st.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${nt}-custom-parent`), r.appendChild($t), $t;
}, Y0 = () => C6(st.parent) ? st.parent : document.querySelector(st.parent), K0 = () => {
  document.documentElement.classList.remove(`${nt}-busy`), Y0().classList.remove(`${nt}-custom-parent`), $t?.remove();
}, P6 = () => document.getElementById(nt) !== null, C6 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Z0(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Xo = (e) => (-1 + e) * 100, A6 = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), T6 = (e) => {
  const t = document.createElement("style");
  t.textContent = `
    #${nt} {
      pointer-events: none;
    }

    #${nt} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${nt} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${nt} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${nt} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${nt}-spinner 400ms linear infinite;
    }

    .${nt}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${nt}-custom-parent #${nt} .spinner,
    .${nt}-custom-parent #${nt} .bar {
      position: absolute;
    }

    @keyframes ${nt}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, O6 = () => {
  $t && ($t.style.display = "");
}, N6 = () => {
  $t && ($t.style.display = "none");
}, Ut = {
  configure: E6,
  isStarted: G0,
  done: z6,
  set: ja,
  remove: K0,
  start: W0,
  status: En,
  show: O6,
  hide: N6
}, R6 = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    Ut.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && Ut.show();
  }
  hide() {
    this.hideCount++, Ut.hide();
  }
  set(e) {
    Ut.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    Ut.done();
  }
  reset() {
    Ut.set(0);
  }
  remove() {
    Ut.done(), Ut.remove();
  }
  isStarted() {
    return Ut.isStarted();
  }
  getStatus() {
    return Ut.status;
  }
}, Lr = new R6();
Lr.reveal;
Lr.hide;
var J0 = /* @__PURE__ */ Symbol("FormComponentReset");
function Qi(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function I6(e, t) {
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
function M6(e, t) {
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
function mi(e, t) {
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
    return I6(e, t);
  if (e instanceof HTMLSelectElement)
    return M6(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function D6(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && Qi(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        mi(r, t) && (n = !0);
      else {
        const a = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        mi(r, a) && (n = !0);
      }
  }) : Qi(e) && (n = mi(e, t)), n;
}
function F6(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const a = new FormData(e), s = Array.from(e.elements).map((l) => Qi(l) ? l.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...a.keys(), ...s])];
  }
  let o = !1;
  n.forEach((a) => {
    const s = e.elements.namedItem(a);
    s && D6(s, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [J0]: !0 } })
  );
}
var Ze = new d6();
let no = Je.create(), Q0 = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, eh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const va = {}, xn = {
  get: (e, t = {}, n = {}) => Pr($r("get", e, t, n)),
  post: (e, t = {}, n = {}) => Pr($r("post", e, t, n)),
  patch: (e, t = {}, n = {}) => Pr($r("patch", e, t, n)),
  put: (e, t = {}, n = {}) => Pr($r("put", e, t, n)),
  delete: (e, t = {}, n = {}) => Pr($r("delete", e, t, n)),
  use(e) {
    return no = e, xn;
  },
  axios() {
    return no;
  },
  fingerprintRequestsUsing(e) {
    return Q0 = e === null ? () => null : e, xn;
  },
  determineSuccessUsing(e) {
    return eh = e, xn;
  }
}, $r = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Hi({}, n, r?.params)
  } : {
    data: Hi({}, n, r?.data)
  }
}), Pr = (e = {}) => {
  const t = [
    B6,
    U6,
    q6
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), no.request(t).then(async (n) => {
    t.precognitive && Dd(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && eh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && L6(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Fd(t, r) ?? ((s) => s))(o) ?? o;
  }, (n) => V6(n) ? Promise.reject(n) : (t.precognitive && Dd(n.response), (Fd(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, B6 = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? no.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Q0(e, no) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": j6(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, L6 = (e) => e >= 200 && e < 300, U6 = (e) => (typeof e.fingerprint != "string" || (va[e.fingerprint]?.abort(), delete va[e.fingerprint]), e), q6 = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (va[e.fingerprint] = new AbortController(), {
  ...e,
  signal: va[e.fingerprint].signal
}), Dd = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, V6 = (e) => !O0(e) || typeof e.response?.status != "number" || T0(e), Fd = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], j6 = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (th(e.data) ? "multipart/form-data" : "application/json"), th = (e) => Fl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => th(t)), Fl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, H6 = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let r = [""];
  for (const o of n)
    if (o === "*") {
      const a = [];
      for (const s of r) {
        const l = s ? xt(t, s) : t;
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
}, G6 = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Bd = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => G6(n, r)))), W6 = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (M) => M !== o ? (o = M, n.validatingChanged) : [];
  let s = [];
  const l = (M) => {
    const A = [...new Set(M)];
    return s.length !== A.length || !A.every((V) => s.includes(V)) ? (s = A, n.validatedChanged) : [];
  }, d = () => s.filter((M) => typeof f[M] > "u");
  let u = [];
  const c = (M) => {
    const A = [...new Set(M)];
    return u.length !== A.length || !A.every((V) => u.includes(V)) ? (u = A, n.touchedChanged) : [];
  };
  let f = {};
  const v = (M) => {
    const A = Y6(M);
    return wn(f, A) ? [] : (f = A, n.errorsChanged);
  }, b = (M) => {
    const A = { ...f };
    return delete A[Ur(M)], v(A);
  }, h = () => Object.keys(f).length > 0;
  let p = 1500;
  const m = (M) => {
    p = M, $.cancel(), $ = C();
  };
  let g = t, _ = null, y = [], k = null;
  const C = () => rO((M) => {
    e({
      get: (A, V = {}, E = {}) => xn.get(A, U(V), w(E, M, V)),
      post: (A, V = {}, E = {}) => xn.post(A, U(V), w(E, M, V)),
      patch: (A, V = {}, E = {}) => xn.patch(A, U(V), w(E, M, V)),
      put: (A, V = {}, E = {}) => xn.put(A, U(V), w(E, M, V)),
      delete: (A, V = {}, E = {}) => xn.delete(A, U(V), w(E, M, V))
    }).catch((A) => T0(A) || O0(A) && A.response?.status === 422 ? null : Promise.reject(A));
  }, p, { leading: !0, trailing: !0 });
  let $ = C();
  const w = (M, A, V = {}) => {
    const E = {
      ...M,
      ...A
    }, F = Array.from(E.only ?? E.validate ?? u);
    return {
      ...A,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...P8(M, A),
      only: F,
      timeout: E.timeout ?? 5e3,
      onValidationError: (P, R) => ([
        ...l([...s, ...F]),
        ...v(Hi(Bd({ ...f }, F), P.data.errors))
      ].forEach((x) => x()), E.onValidationError ? E.onValidationError(P, R) : Promise.reject(R)),
      onSuccess: (P) => (l([...s, ...F]).forEach((R) => R()), E.onSuccess ? E.onSuccess(P) : P),
      onPrecognitionSuccess: (P) => ([
        ...l([...s, ...F]),
        ...v(Bd({ ...f }, F))
      ].forEach((R) => R()), E.onPrecognitionSuccess ? E.onPrecognitionSuccess(P) : P),
      onBefore: () => {
        const P = u.some((q) => q.includes("*")), R = P ? [...new Set(u.flatMap((q) => H6(q, V)))] : u;
        return E.onBeforeValidation && E.onBeforeValidation({ data: V, touched: R }, { data: g, touched: y }) === !1 || (E.onBefore || (() => !0))() === !1 ? !1 : (P && c(R).forEach((q) => q()), k = u, _ = V, !0);
      },
      onStart: () => {
        a(!0).forEach((P) => P()), (E.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((P) => P()), y = k, g = _, k = _ = null, (E.onFinish ?? (() => null))();
      }
    };
  }, S = (M, A, V) => {
    if (typeof M > "u") {
      const E = Array.from(V?.only ?? V?.validate ?? []);
      c([...u, ...E]).forEach((F) => F()), $(V ?? {});
      return;
    }
    if (Fl(A) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    M = Ur(M), (M.includes("*") || xt(g, M) !== A) && (c([M, ...u]).forEach((E) => E()), $(V ?? {}));
  }, U = (M) => r === !1 ? el(M) : M, D = {
    touched: () => u,
    validate(M, A, V) {
      return typeof M == "object" && !("target" in M) && (V = M, M = A = void 0), S(M, A, V), D;
    },
    touch(M) {
      const A = Array.isArray(M) ? M : [Ur(M)];
      return c([...u, ...A]).forEach((V) => V()), D;
    },
    validating: () => o,
    valid: d,
    errors: () => f,
    hasErrors: h,
    setErrors(M) {
      return v(M).forEach((A) => A()), D;
    },
    forgetError(M) {
      return b(M).forEach((A) => A()), D;
    },
    defaults(M) {
      return t = M, g = M, D;
    },
    reset(...M) {
      if (M.length === 0)
        c([]).forEach((A) => A());
      else {
        const A = [...u];
        M.forEach((V) => {
          A.includes(V) && A.splice(A.indexOf(V), 1), Et(g, V, xt(t, V));
        }), c(A).forEach((V) => V());
      }
      return D;
    },
    setTimeout(M) {
      return m(M), D;
    },
    on(M, A) {
      return n[M].push(A), D;
    },
    validateFiles() {
      return r = !0, D;
    },
    withoutFileValidation() {
      return r = !1, D;
    }
  };
  return D;
}, X6 = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), Y6 = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Ur = (e) => typeof e != "string" ? e.target.name : e, el = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Fl(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(el({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = el(t[n]);
        return;
      }
    }
  }), t;
};
var vi = null, gi = !1;
function K6(e) {
  if (gi)
    return;
  vi === null && (gi = !0, vi = new Set(Object.keys(nh({}))), gi = !1);
  const t = Object.keys(e).filter((n) => vi.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function nh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Ho.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = it(typeof n == "function" ? n() : n);
  K6(a);
  let s = null, l, d = (h) => h, u = null, c = [], f = !1;
  const b = hr({
    ...o ? o.data : it(a),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...h) {
      r = Ho.createWayfinderCallback(...h);
      const p = this;
      let m = null;
      const g = W6((y) => {
        const { method: k, url: C } = r(), $ = it(d(this.data()));
        return y[k](C, $);
      }, it(a));
      u = g, g.on("validatingChanged", () => {
        p.validating = g.validating();
      }).on("validatedChanged", () => {
        p.__valid = g.valid();
      }).on("touchedChanged", () => {
        p.__touched = g.touched();
      }).on("errorsChanged", () => {
        const y = m ?? ga.get("form.withAllErrors") ? g.errors() : X6(g.errors());
        this.errors = {}, this.setError(y), p.__valid = g.valid();
      });
      const _ = (y, k) => (k(y), y);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => g,
        withAllErrors: () => _(p, () => m = !0),
        valid: (y) => p.__valid.includes(y),
        invalid: (y) => y in this.errors,
        setValidationTimeout: (y) => _(p, () => g.setTimeout(y)),
        validateFiles: () => _(p, () => g.validateFiles()),
        withoutFileValidation: () => _(p, () => g.withoutFileValidation()),
        touch: (y, ...k) => (Array.isArray(y) ? g.touch(y) : typeof y == "string" ? g.touch([y, ...k]) : g.touch(y), p),
        touched: (y) => typeof y == "string" ? p.__touched.includes(y) : p.__touched.length > 0,
        validate: (y, k) => {
          if (typeof y == "object" && !("target" in y) && (k = y, y = void 0), y === void 0)
            g.validate(k);
          else {
            const C = Ur(y), $ = d(this.data());
            g.validate(C, xt($, C), k);
          }
          return p;
        },
        setErrors: (y) => _(p, () => this.setError(y)),
        forgetError: (y) => _(
          p,
          () => this.clearErrors(Ur(y))
        )
      }), p;
    },
    data() {
      return Object.keys(a).reduce((h, p) => Et(h, p, xt(this, p)), {});
    },
    transform(h) {
      return d = h, this;
    },
    defaults(h, p) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof h > "u" ? (a = it(this.data()), this.isDirty = !1) : a = typeof h == "string" ? Et(it(a), h, p) : Object.assign({}, it(a), h), u?.defaults(a), this;
    },
    reset(...h) {
      const p = it(typeof n == "function" ? n() : a), m = it(p);
      return h.length === 0 ? (a = m, Object.assign(this, p)) : h.filter((g) => Zp(m, g)).forEach((g) => {
        Et(a, g, xt(m, g)), Et(this, g, xt(p, g));
      }), u?.reset(...h), this;
    },
    setError(h, p) {
      const m = typeof h == "string" ? { [h]: p } : h;
      return Object.assign(this.errors, m), this.hasErrors = Object.keys(this.errors).length > 0, u?.setErrors(m), this;
    },
    clearErrors(...h) {
      return this.errors = Object.keys(this.errors).reduce(
        (p, m) => ({
          ...p,
          ...h.length > 0 && !h.includes(m) ? { [m]: this.errors[m] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, u && (h.length === 0 ? u.setErrors({}) : h.forEach(u.forgetError)), this;
    },
    resetAndClearErrors(...h) {
      return this.reset(...h), this.clearErrors(...h), this;
    },
    submit(...h) {
      const { method: p, url: m, options: g } = Ho.parseSubmitArguments(h, r);
      f = !1;
      const _ = {
        ...g,
        onCancelToken: (k) => {
          if (s = k, g.onCancelToken)
            return g.onCancelToken(k);
        },
        onBefore: (k) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), g.onBefore)
            return g.onBefore(k);
        },
        onStart: (k) => {
          if (this.processing = !0, g.onStart)
            return g.onStart(k);
        },
        onProgress: (k) => {
          if (this.progress = k ?? null, g.onProgress)
            return g.onProgress(k);
        },
        onSuccess: async (k) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(
            () => this.recentlySuccessful = !1,
            ga.get("form.recentlySuccessfulDuration")
          );
          const C = g.onSuccess ? await g.onSuccess(k) : null;
          return f || (a = it(this.data()), this.isDirty = !1), C;
        },
        onError: (k) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(k), g.onError)
            return g.onError(k);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, g.onCancel)
            return g.onCancel();
        },
        onFinish: (k) => {
          if (this.processing = !1, this.progress = null, s = null, g.onFinish)
            return g.onFinish(k);
        }
      }, y = d(this.data());
      p === "delete" ? Ze.delete(m, { ..._, data: y }) : Ze[p](m, y, _);
    },
    get(h, p) {
      this.submit("get", h, p);
    },
    post(h, p) {
      this.submit("post", h, p);
    },
    put(h, p) {
      this.submit("put", h, p);
    },
    patch(h, p) {
      this.submit("patch", h, p);
    },
    delete(h, p) {
      this.submit("delete", h, p);
    },
    cancel() {
      s && s.cancel();
    },
    dontRemember(...h) {
      return c = h, this;
    },
    __rememberable: t === null,
    __remember() {
      const h = this.data();
      if (c.length > 0) {
        const p = { ...h };
        return c.forEach((m) => delete p[m]), { data: p, errors: this.errors };
      }
      return { data: h, errors: this.errors };
    },
    __restore(h) {
      Object.assign(this, h.data), this.setError(h.errors);
    }
  });
  return Ie(
    b,
    (h) => {
      b.isDirty = !wn(b.data(), a);
      const p = Ze.restore(t), m = it(h.__remember());
      t && !wn(p, m) && Ze.remember(m, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? b.withPrecognition(r) : b;
}
var bt = W(void 0), Qe = W(), yi = on(null), Oo = W(void 0), Ld;
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
    bt.value = t ? tr(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Oo.value = void 0;
    const a = typeof window > "u";
    return Ld = v6(a, r || ((s) => s), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (s) => {
        bt.value = tr(s.component), Qe.value = s.page, Oo.value = s.preserveState ? Oo.value : Date.now();
      },
      onFlash: (s) => {
        Qe.value = { ...Qe.value, flash: s };
      }
    }), Ze.on("navigate", () => Ld.forceUpdate())), () => {
      if (bt.value) {
        bt.value.inheritAttrs = !!bt.value.inheritAttrs;
        const s = ze(bt.value, {
          ...Qe.value.props,
          key: Oo.value
        });
        return yi.value && (bt.value.layout = yi.value, yi.value = null), bt.value.layout ? typeof bt.value.layout == "function" ? bt.value.layout(ze, s) : (Array.isArray(bt.value.layout) ? bt.value.layout : [bt.value.layout]).concat(s).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, ze(d, { ...Qe.value.props }, () => l))) : s;
      }
    };
  }
});
function rh() {
  return hr({
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
var tn = () => {
}, Z6 = /* @__PURE__ */ Symbol("InertiaFormContext");
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
      default: tn
    },
    onBefore: {
      type: Function,
      default: tn
    },
    onStart: {
      type: Function,
      default: tn
    },
    onProgress: {
      type: Function,
      default: tn
    },
    onFinish: {
      type: Function,
      default: tn
    },
    onCancel: {
      type: Function,
      default: tn
    },
    onSuccess: {
      type: Function,
      default: tn
    },
    onError: {
      type: Function,
      default: tn
    },
    onSubmitComplete: {
      type: Function,
      default: tn
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
      const [C, $] = h();
      return e.transform($);
    }, a = nh({}).withPrecognition(
      () => l.value,
      () => h()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? Sn.get("form.withAllErrors")) && a.withAllErrors();
    const s = W(), l = J(
      () => un(e.action) ? e.action.method : e.method.toLowerCase()
    ), d = W(!1), u = W(new FormData()), c = (C) => {
      C.type === "reset" && C.detail?.[J0] && C.preventDefault(), d.value = C.type === "reset" ? !1 : !wn(b(), Id(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = v(), a.defaults(b()), f.forEach((C) => s.value.addEventListener(C, c));
    }), Ie(
      () => e.validateFiles,
      (C) => C ? a.validateFiles() : a.withoutFileValidation()
    ), Ie(
      () => e.validationTimeout,
      (C) => a.setValidationTimeout(C)
    ), ya(() => f.forEach((C) => s.value?.removeEventListener(C, c)));
    const v = (C) => new FormData(s.value, C), b = (C) => Id(v(C)), h = (C) => Dl(
      l.value,
      un(e.action) ? e.action.url : e.action,
      b(C),
      e.queryStringArrayFormat
    ), p = (C) => {
      const [$, w] = h(C);
      if (C?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open($, "_blank");
        return;
      }
      const U = (M) => {
        M && (M === !0 ? m() : M.length > 0 && m(...M));
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
        onSuccess: (...M) => {
          e.onSuccess?.(...M), e.onSubmitComplete?.(k), U(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && y();
        },
        onError: (...M) => {
          e.onError?.(...M), U(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(w)).submit(l.value, $, D), a.transform(o);
    }, m = (...C) => {
      F6(s.value, u.value, C), a.reset(...C);
    }, g = (...C) => {
      a.clearErrors(...C);
    }, _ = (...C) => {
      g(...C), m(...C);
    }, y = () => {
      u.value = v(), d.value = !1;
    }, k = {
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
      clearErrors: g,
      resetAndClearErrors: _,
      setError: (C, $) => a.setError(typeof C == "string" ? { [C]: $ } : C),
      get isDirty() {
        return d.value;
      },
      reset: m,
      submit: p,
      defaults: y,
      getData: b,
      getFormData: v,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: (C, $) => a.validate(...Ho.mergeHeadersForValidation(C, $, e.headers)),
      validator: () => a.validator()
    };
    return r(k), Fn(Z6, k), () => ze(
      "form",
      {
        ...n,
        ref: s,
        action: un(e.action) ? e.action.url : e.action,
        method: l.value,
        onSubmit: (C) => {
          C.preventDefault(), p(C.submitter);
        },
        inert: e.disableWhileProcessing && a.processing
      },
      t.default ? t.default(k) : []
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${cO(o)}"`;
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
var bi = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
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
    const o = W(null), a = W(null), s = W(null), l = J(
      () => bi(e.itemsElement, o.value)
    ), d = J(() => K8(l.value)), u = J(
      () => bi(e.startElement, a.value)
    ), c = J(() => bi(e.endElement, s.value)), f = W(!1), v = W(!1), b = W(0), h = W(!1), p = W(!1), m = () => {
      b.value = g.getRequestCount(), h.value = g.hasPrevious(), p.value = g.hasNext();
    }, {
      dataManager: g,
      elementManager: _,
      flush: y
    } = S6({
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
        f.value = !1, m();
      },
      onCompleteNextRequest: () => {
        v.value = !1, m();
      },
      onDataReset: m
    });
    if (m(), typeof window > "u") {
      const w = rh().scrollProps?.[e.data];
      w && (h.value = !!w.previousPage, p.value = !!w.nextPage);
    }
    const k = J(() => !C.value), C = J(
      () => e.manual || e.manualAfter > 0 && b.value >= e.manualAfter
    ), $ = () => {
      d.value ? d.value.scrollTo({
        top: d.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ke(() => {
      _.setupObservers(), _.processServerLoadedElements(g.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && $(), k.value && _.enableTriggers();
    }), tl(y), Ie(
      () => [k.value, e.onlyNext, e.onlyPrevious],
      ([w]) => {
        w ? _.enableTriggers() : _.disableTriggers();
      }
    ), r({
      fetchNext: g.fetchNext,
      fetchPrevious: g.fetchPrevious,
      hasPrevious: g.hasPrevious,
      hasNext: g.hasNext
    }), () => {
      const w = [], S = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: h.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const U = k.value && !e.onlyNext, D = {
          loading: f.value,
          fetch: g.fetchPrevious,
          autoMode: U,
          manualMode: !U,
          hasMore: h.value,
          ...S
        };
        w.push(
          ze(
            "div",
            { ref: a },
            t.previous ? t.previous(D) : f.value ? t.loading?.(D) : void 0
          )
        );
      }
      if (w.push(
        ze(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || v.value,
            loadingPrevious: f.value,
            loadingNext: v.value
          })
        )
      ), !e.endElement) {
        const U = k.value && !e.onlyPrevious, D = {
          loading: v.value,
          fetch: g.fetchNext,
          autoMode: U,
          manualMode: !U,
          hasMore: p.value,
          ...S
        };
        w.push(
          ze(
            "div",
            { ref: s },
            t.next ? t.next(D) : v.value ? t.loading?.(D) : void 0
          )
        );
      }
      return ze(ve, {}, e.reverse ? [...w].reverse() : w);
    };
  }
});
var qt = () => {
}, J6 = Fe({
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
      default: qt
    },
    onProgress: {
      type: Function,
      default: qt
    },
    onFinish: {
      type: Function,
      default: qt
    },
    onBefore: {
      type: Function,
      default: qt
    },
    onCancel: {
      type: Function,
      default: qt
    },
    onSuccess: {
      type: Function,
      default: qt
    },
    onError: {
      type: Function,
      default: qt
    },
    onCancelToken: {
      type: Function,
      default: qt
    },
    onPrefetching: {
      type: Function,
      default: qt
    },
    onPrefetched: {
      type: Function,
      default: qt
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
    const r = W(0), o = W(), a = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = J(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : ga.get("prefetch.cacheFor"));
    Ke(() => {
      a.value.includes("mount") && p();
    }), tl(() => {
      clearTimeout(o.value);
    });
    const l = J(
      () => un(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), d = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : l.value !== "get" ? "button" : e.as.toLowerCase()), u = J(
      () => Dl(
        l.value,
        un(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), c = J(() => u.value[0]), f = J(() => u.value[1]), v = J(() => d.value === "button" ? { type: "button" } : d.value === "a" || typeof d.value != "string" ? { href: c.value } : {}), b = J(() => ({
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
    })), h = J(() => ({
      ...b.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (y) => {
        r.value++, e.onStart?.(y);
      },
      onProgress: e.onProgress,
      onFinish: (y) => {
        r.value--, e.onFinish?.(y);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), p = () => {
      Ze.prefetch(
        c.value,
        {
          ...b.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: s.value,
          cacheTags: e.cacheTags
        }
      );
    }, m = {
      onClick: (y) => {
        To(y) && (y.preventDefault(), Ze.visit(c.value, h.value));
      }
    }, g = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          p();
        }, ga.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: m.onClick
    }, _ = {
      onMousedown: (y) => {
        To(y) && (y.preventDefault(), p());
      },
      onKeydown: (y) => {
        Md(y) && (y.preventDefault(), p());
      },
      onMouseup: (y) => {
        To(y) && (y.preventDefault(), Ze.visit(c.value, h.value));
      },
      onKeyup: (y) => {
        Md(y) && (y.preventDefault(), Ze.visit(c.value, h.value));
      },
      onClick: (y) => {
        To(y) && y.preventDefault();
      }
    };
    return () => ze(
      d.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? g : a.value.includes("click") ? _ : m
      },
      t
    );
  }
}), Q6 = J6;
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
    const e = rh();
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
    return (this.$props.always || !this.loaded) && e.push(ze(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var ga = Sn.extend({});
const eR = { class: "space-y-3 text-zinc-900 dark:text-white" }, tR = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, nR = { key: 0 }, rR = { key: 1 }, oR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, aR = { class: "space-y-2" }, sR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, iR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, lR = {
  key: 0,
  class: "flex items-center gap-2"
}, uR = ["disabled", "onClick"], cR = ["disabled", "onClick"], dR = ["disabled", "onClick"], fR = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = W([]), r = W(!0), o = W(!1), a = W(!1), s = W(""), l = W(null), d = J(() => t.produto?.id ?? null), u = J(() => new Map(n.value.map((h) => [h.trigger_event, h])));
    async function c() {
      r.value = !0, s.value = "";
      try {
        const [h, p] = await Promise.all([Ae.connection(), Ae.flows(d.value)]);
        a.value = h.connection.connected, n.value = p.flows || [];
      } catch (h) {
        s.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function f(h) {
      o.value = !0, s.value = "";
      try {
        await h(), await c();
      } catch (p) {
        s.value = p.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (h) => f(() => Ae.createFlow({
      name: `${h.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: h.eventClass,
      product_id: d.value,
      is_active: !0,
      graph_json: _p(h.eventClass)
    })), b = (h) => f(() => Ae.updateFlow(h.id, { is_active: !h.is_active }));
    return Ke(c), (h, p) => (z(), T("div", eR, [
      r.value ? (z(), T("p", tR, "Verificando integração…")) : (z(), T(ve, { key: 1 }, [
        i("div", {
          class: Z(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          X(N(qr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (z(), T("span", nR, "ZapRei conectado à Evolution GO.")) : (z(), T("span", rR, [
            p[2] || (p[2] = Ce(" A Evolution GO não está conectada. ", -1)),
            X(N(Q6), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: rt(() => [...p[1] || (p[1] = [
                Ce("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = Ce(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = i("div", null, [
          i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        s.value ? (z(), T("p", oR, L(s.value), 1)) : ee("", !0),
        i("div", aR, [
          (z(!0), T(ve, null, Re(N(Mn), (m) => (z(), T("div", {
            key: m.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            i("div", null, [
              i("div", sR, L(m.label), 1),
              i("div", iR, L(m.eventClass), 1)
            ]),
            u.value.get(m.eventClass) ? (z(), T("div", lR, [
              i("span", {
                class: Z(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(m.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, L(u.value.get(m.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              i("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (g) => b(u.value.get(m.eventClass))
              }, L(u.value.get(m.eventClass).is_active ? "Pausar" : "Ativar"), 9, uR),
              i("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (g) => l.value = u.value.get(m.eventClass)
              }, [
                X(N(tf), { class: "h-3 w-3" }),
                p[4] || (p[4] = Ce(" Editar ", -1))
              ], 8, cR)
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (g) => v(m)
            }, " Criar fluxo ", 8, dR))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (z(), Oe(zp, {
        key: 2,
        flow: l.value,
        onClose: p[0] || (p[0] = (m) => l.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : ee("", !0)
    ]));
  }
}, pR = "zaprei", Ud = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Ud)) {
  const e = document.createElement("link");
  e.id = Ud, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[pR] = { Dashboard: p4, Integrations: m4, ProductPanel: fR };
export {
  p4 as Dashboard,
  m4 as Integrations,
  fR as ProductPanel
};
