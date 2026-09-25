import { h as $e, ref as G, reactive as mr, onMounted as Ke, openBlock as z, createElementBlock as T, createElementVNode as i, createVNode as Y, unref as N, normalizeClass as X, withDirectives as te, vModelCheckbox as An, vModelText as ye, createStaticVNode as qd, createTextVNode as Se, toDisplayString as U, createCommentVNode as ee, getCurrentScope as jd, inject as vr, effectScope as Hd, watch as Ie, provide as Bn, defineComponent as Fe, useSlots as lh, onUnmounted as nl, withCtx as rt, renderSlot as Ye, createPropsRestProxy as uh, toRef as Ve, computed as J, getCurrentInstance as gr, onScopeDispose as Ro, nextTick as un, onBeforeMount as ch, shallowRef as an, Fragment as ve, renderList as Re, normalizeStyle as vt, onBeforeUnmount as ba, isMemoSame as dh, createBlock as Oe, useAttrs as fh, mergeProps as xa, Teleport as Gd, isRef as rl, toRefs as ph, customRef as hh, toValue as Me, resolveComponent as Wd, resolveDynamicComponent as Rt, markRaw as nr, readonly as mh, withModifiers as rn, vModelSelect as ot, Transition as vh, toHandlers as gh } from "vue";
const yh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Yl = (e) => e === "";
const bh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Kl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const xh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const wh = (e) => {
  const t = xh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var _r = {
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
  size: s = _r.width,
  color: l = _r.stroke,
  ...d
}, { slots: u }) => $e(
  "svg",
  {
    ..._r,
    ...d,
    width: s,
    height: s,
    stroke: l,
    "stroke-width": Yl(n) || Yl(r) || n === !0 || r === !0 ? Number(o || a || _r["stroke-width"]) * 24 / Number(s) : o || a || _r["stroke-width"],
    class: bh(
      "lucide",
      d.class,
      ...e ? [`lucide-${Kl(wh(e))}-icon`, `lucide-${Kl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !yh(d) && { "aria-hidden": "true" }
  },
  [...t.map((c) => $e(...c)), ...u.default ? [u.default()] : []]
);
const Pe = (e, t) => (n, { slots: r, attrs: o }) => $e(
  _h,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const kh = Pe("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Xd = Pe("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Sh = Pe("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Eh = Pe("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const ts = Pe("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const Yd = Pe("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const wi = Pe("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Kd = Pe("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const zh = Pe("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const wa = Pe("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const qr = Pe("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const sr = Pe("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Zd = Pe("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Jd = Pe("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const $h = Pe("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ph = Pe("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Zl = Pe("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Rr = Pe("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const Qd = Pe("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Dt = Pe("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Jl = Pe("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Ch = Pe("message-square-text", [
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
const ef = Pe("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Ah = Pe("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const tf = Pe("palette", [
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
const Th = Pe("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const nf = Pe("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const rf = Pe("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Oh = Pe("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const Ql = Pe("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Nh = Pe("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Rh = Pe("save", [
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
const jr = Pe("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Ct = Pe("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const of = Pe("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ih = Pe("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ol = Pe("sparkles", [
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
const Ko = Pe("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const af = Pe("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Mh = Pe("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const _i = Pe("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Ot = Pe("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Ln = Pe("zap", [
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
  importContacts: (e) => Xe("/contacts/import", { method: "POST", body: eu(e) }),
  deleteContact: (e) => Xe(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Xe("/campaigns"),
  createCampaign: (e) => Xe("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Xe(`/campaigns/${e}`),
  cancelCampaign: (e) => Xe(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Xe("/media", { method: "POST", body: eu(e) })
};
function eu(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Lh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Uh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Vh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, qh = {
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
    const n = t, r = G(!0), o = G(!1), a = G(!1), s = G(""), l = G(""), d = G(!1), u = G(!1), c = G(""), f = mr({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, s.value = "";
      try {
        const { connection: h } = await Ae.connection();
        f.base_url = h.credentials.base_url || "", f.instance = h.credentials.instance || "", f.is_active = h.is_active, u.value = h.credentials.has_api_key, d.value = h.connected, c.value = h.webhook_url || "";
      } catch (h) {
        s.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      o.value = !0, s.value = "", l.value = "";
      try {
        const { connection: h } = await Ae.saveConnection({ ...f });
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
        const { message: h } = await Ae.testConnection();
        l.value = h || "Conexão validada.";
      } catch (h) {
        s.value = h.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(v), (h, g) => (z(), T("div", Lh, [
      i("div", Uh, [
        i("div", Vh, [
          Y(N(nf), { class: "h-5 w-5" })
        ]),
        g[5] || (g[5] = i("div", null, [
          i("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (z(), T("div", qh, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        g[6] || (g[6] = i("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (z(), T("div", jh, [
        i("div", Hh, [
          g[7] || (g[7] = i("div", null, [
            i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            i("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          i("label", {
            class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            te(i("input", {
              "onUpdate:modelValue": g[0] || (g[0] = (k) => f.is_active = k),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [An, f.is_active]
            ]),
            i("span", {
              class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        i("div", null, [
          g[8] || (g[8] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          te(i("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": g[1] || (g[1] = (k) => f.base_url = k),
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
          te(i("input", {
            id: "zr-instance",
            "onUpdate:modelValue": g[2] || (g[2] = (k) => f.instance = k),
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
          te(i("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": g[3] || (g[3] = (k) => f.api_key = k),
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
          g[13] || (g[13] = qd('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          i("div", Xh, [
            i("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: g[4] || (g[4] = (k) => k.target.select())
            }, null, 40, Yh),
            i("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: m
            }, [
              Y(N(Zd), { class: "h-3.5 w-3.5" }),
              g[12] || (g[12] = Se(" Copiar ", -1))
            ])
          ])
        ])) : (z(), T("p", Kh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        i("div", Zh, [
          i("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: b
          }, U(o.value ? "Salvando…" : "Salvar conexão"), 9, Jh),
          i("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, U(a.value ? "Testando…" : "Testar conexão"), 9, Qh),
          d.value ? (z(), T("span", em, [
            Y(N(qr), { class: "h-3 w-3" }),
            g[14] || (g[14] = Se(" Conectado ", -1))
          ])) : ee("", !0)
        ]),
        s.value ? (z(), T("p", tm, U(s.value), 1)) : l.value ? (z(), T("p", nm, U(l.value), 1)) : ee("", !0)
      ]))
    ]));
  }
};
function Hr(e) {
  return jd() ? (Ro(e), !0) : !1;
}
function on(e) {
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
  return { isActive: mh(t), pause: n, resume: r, eventFilter: o };
}
function tu(e, t = !1, n = "Timeout") {
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
function Zn(e, t, n = {}) {
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
  if (!rl(e))
    return ph(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = hh(() => ({
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
  function n(f, { flush: v = "sync", deep: b = !1, timeout: m, throwOnTimeout: p } = {}) {
    let h = null;
    const k = [new Promise((w) => {
      h = Ie(
        e,
        (A) => {
          f(A) !== t && (h?.(), w(A));
        },
        {
          flush: v,
          deep: b,
          immediate: !0
        }
      );
    })];
    return m != null && k.push(
      tu(m, p).then(() => on(e)).finally(() => h?.())
    ), Promise.race(k);
  }
  function r(f, v) {
    if (!rl(f))
      return n((A) => A === f, v);
    const { flush: b = "sync", deep: m = !1, timeout: p, throwOnTimeout: h } = v ?? {};
    let g = null;
    const w = [new Promise((A) => {
      g = Ie(
        [e, f],
        ([$, _]) => {
          t !== ($ === _) && (g?.(), A($));
        },
        {
          flush: b,
          deep: m,
          immediate: !0
        }
      );
    })];
    return p != null && w.push(
      tu(p, h).then(() => on(e)).finally(() => (g?.(), on(e)))
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
    return n((b) => {
      const m = Array.from(b);
      return m.includes(f) || m.includes(on(f));
    }, v);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, v) {
    let b = -1;
    return n(() => (b += 1, b >= f), v);
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
function fm(e) {
  var t;
  const n = on(e);
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
    () => [fm(t), on(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const v = sm(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((b) => r.map((m) => l(c, b, m, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), s();
  };
  return Hr(u), u;
}
function pm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function nu(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = uf,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: l = !1
  } = r, d = pm(t);
  return cf(o, a, (c) => {
    c.repeat && on(l) || d(c) && n(c);
  }, s);
}
function hm(e) {
  return JSON.parse(JSON.stringify(e));
}
function ns(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, b = gr(), m = n || b?.emit || ((o = b?.$emit) == null ? void 0 : o.bind(b)) || ((s = (a = b?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(b?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const h = (w) => l ? typeof l == "function" ? l(w) : hm(w) : w, g = () => om(e[t]) ? h(e[t]) : f, k = (w) => {
    v ? v(w) && m(p, w) : m(p, w);
  };
  if (d) {
    const w = g(), A = G(w);
    let $ = !1;
    return Ie(
      () => e[t],
      (_) => {
        $ || ($ = !0, A.value = h(_), un(() => $ = !1));
      }
    ), Ie(
      A,
      (_) => {
        !$ && (_ !== e[t] || c) && k(_);
      },
      { deep: c }
    ), A;
  } else
    return J({
      get() {
        return g();
      },
      set(w) {
        k(w);
      }
    });
}
var mm = { value: () => {
} };
function _a() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Io(n);
}
function Io(e) {
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
Io.prototype = _a.prototype = {
  constructor: Io,
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
        n[o] = ru(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = ru(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Io(e);
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
function ru(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ei = "http://www.w3.org/1999/xhtml";
const ou = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ei,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ka(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ou.hasOwnProperty(t) ? { space: ou[t], local: e } : e;
}
function ym(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ei && t.documentElement.namespaceURI === Ei ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function bm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function df(e) {
  var t = ka(e);
  return (t.local ? bm : ym)(t);
}
function xm() {
}
function al(e) {
  return e == null ? xm : function() {
    return this.querySelector(e);
  };
}
function wm(e) {
  typeof e != "function" && (e = al(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = new Array(s), d, u, c = 0; c < s; ++c)
      (d = a[c]) && (u = e.call(d, d.__data__, c, a)) && ("__data__" in d && (u.__data__ = d.__data__), l[c] = u);
  return new _t(r, this._parents);
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
  return new _t(r, o);
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
  return new _t(r, this._parents);
}
function mf(e) {
  return new Array(e.length);
}
function Im() {
  return new _t(this._enter || this._groups.map(mf), this._parents);
}
function Zo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Zo.prototype = {
  constructor: Zo,
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
    (l = t[s]) ? (l.__data__ = a[s], r[s] = l) : n[s] = new Zo(e, a[s]);
  for (; s < d; ++s)
    (l = t[s]) && (o[s] = l);
}
function Fm(e, t, n, r, o, a, s) {
  var l, d, u = /* @__PURE__ */ new Map(), c = t.length, f = a.length, v = new Array(c), b;
  for (l = 0; l < c; ++l)
    (d = t[l]) && (v[l] = b = s.call(d, d.__data__, l, t) + "", u.has(b) ? o[l] = d : u.set(b, d));
  for (l = 0; l < f; ++l)
    b = s.call(e, a[l], l, a) + "", (d = u.get(b)) ? (r[l] = d, d.__data__ = a[l], u.delete(b)) : n[l] = new Zo(e, a[l]);
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
    var c = r[u], f = o[u], v = f.length, b = Um(e.call(c, c && c.__data__, u, r)), m = b.length, p = l[u] = new Array(m), h = s[u] = new Array(m), g = d[u] = new Array(v);
    n(c, f, p, h, g, b, t);
    for (var k = 0, w = 0, A, $; k < m; ++k)
      if (A = p[k]) {
        for (k >= w && (w = k + 1); !($ = h[w]) && ++w < m; )
          ;
        A._next = $ || null;
      }
  }
  return s = new _t(s, r), s._enter = l, s._exit = d, s;
}
function Um(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vm() {
  return new _t(this._exit || this._groups.map(mf), this._parents);
}
function qm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function jm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, s = Math.min(o, a), l = new Array(o), d = 0; d < s; ++d)
    for (var u = n[d], c = r[d], f = u.length, v = l[d] = new Array(f), b, m = 0; m < f; ++m)
      (b = u[m] || c[m]) && (v[m] = b);
  for (; d < o; ++d)
    l[d] = n[d];
  return new _t(l, this._parents);
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
  return new _t(o, this._parents).order();
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
  var n = ka(e);
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
  return arguments.length > 1 ? this.each((t == null ? iv : typeof t == "function" ? uv : lv)(e, t, n ?? "")) : ir(this.node(), e);
}
function ir(e, t) {
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
function sl(e) {
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
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function xf(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
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
    for (var r = sl(this.node()), o = -1, a = n.length; ++o < a; )
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
  var n = typeof e == "function" ? e : df(e), r = t == null ? Ov : typeof t == "function" ? t : al(t);
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
function Vv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function qv(e, t, n) {
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
  for (l = t ? qv : Vv, o = 0; o < a; ++o)
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
function _t(e, t) {
  this._groups = e, this._parents = t;
}
function oo() {
  return new _t([[document.documentElement]], _f);
}
function Yv() {
  return this;
}
_t.prototype = oo.prototype = {
  constructor: _t,
  select: wm,
  selectAll: Em,
  selectChild: Cm,
  selectChildren: Nm,
  filter: Rm,
  data: Lm,
  enter: Im,
  exit: Vm,
  join: qm,
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
function It(e) {
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], _f);
}
function Kv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Gt(e, t) {
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
const Zv = { passive: !1 }, Gr = { capture: !0, passive: !1 };
function rs(e) {
  e.stopImmediatePropagation();
}
function rr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kf(e) {
  var t = e.document.documentElement, n = It(e).on("dragstart.drag", rr, Gr);
  "onselectstart" in t ? n.on("selectstart.drag", rr, Gr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sf(e, t) {
  var n = e.document.documentElement, r = It(e).on("dragstart.drag", null);
  t && (r.on("click.drag", rr, Gr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const yo = (e) => () => e;
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
  var e = Jv, t = Qv, n = eg, r = tg, o = {}, a = _a("start", "drag", "end"), s = 0, l, d, u, c, f = 0;
  function v(A) {
    A.on("mousedown.drag", b).filter(r).on("touchstart.drag", h).on("touchmove.drag", g, Zv).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(A, $) {
    if (!(c || !e.call(this, A, $))) {
      var _ = w(this, t.call(this, A, $), A, $, "mouse");
      _ && (It(A.view).on("mousemove.drag", m, Gr).on("mouseup.drag", p, Gr), kf(A.view), rs(A), u = !1, l = A.clientX, d = A.clientY, _("start", A));
    }
  }
  function m(A) {
    if (rr(A), !u) {
      var $ = A.clientX - l, _ = A.clientY - d;
      u = $ * $ + _ * _ > f;
    }
    o.mouse("drag", A);
  }
  function p(A) {
    It(A.view).on("mousemove.drag mouseup.drag", null), Sf(A.view, u), rr(A), o.mouse("end", A);
  }
  function h(A, $) {
    if (e.call(this, A, $)) {
      var _ = A.changedTouches, y = t.call(this, A, $), S = _.length, L, M;
      for (L = 0; L < S; ++L)
        (M = w(this, y, A, $, _[L].identifier, _[L])) && (rs(A), M("start", A, _[L]));
    }
  }
  function g(A) {
    var $ = A.changedTouches, _ = $.length, y, S;
    for (y = 0; y < _; ++y)
      (S = o[$[y].identifier]) && (rr(A), S("drag", A, $[y]));
  }
  function k(A) {
    var $ = A.changedTouches, _ = $.length, y, S;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), y = 0; y < _; ++y)
      (S = o[$[y].identifier]) && (rs(A), S("end", A, $[y]));
  }
  function w(A, $, _, y, S, L) {
    var M = a.copy(), I = Gt(L || _, $), C, q, E;
    if ((E = n.call(A, new zi("beforestart", {
      sourceEvent: _,
      target: v,
      identifier: S,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: M
    }), y)) != null)
      return C = E.x - I[0] || 0, q = E.y - I[1] || 0, function F(P, R, x) {
        var V = I, Q;
        switch (P) {
          case "start":
            o[S] = F, Q = s++;
            break;
          case "end":
            delete o[S], --s;
          case "drag":
            I = Gt(x || R, $), Q = s;
            break;
        }
        M.call(
          P,
          A,
          new zi(P, {
            sourceEvent: R,
            subject: E,
            target: v,
            identifier: S,
            active: Q,
            x: I[0] + C,
            y: I[1] + q,
            dx: I[0] - V[0],
            dy: I[1] - V[1],
            dispatch: M
          }),
          y
        );
      };
  }
  return v.filter = function(A) {
    return arguments.length ? (e = typeof A == "function" ? A : yo(!!A), v) : e;
  }, v.container = function(A) {
    return arguments.length ? (t = typeof A == "function" ? A : yo(A), v) : t;
  }, v.subject = function(A) {
    return arguments.length ? (n = typeof A == "function" ? A : yo(A), v) : n;
  }, v.touchable = function(A) {
    return arguments.length ? (r = typeof A == "function" ? A : yo(!!A), v) : r;
  }, v.on = function() {
    var A = a.on.apply(a, arguments);
    return A === a ? v : A;
  }, v.clickDistance = function(A) {
    return arguments.length ? (f = (A = +A) * A, v) : Math.sqrt(f);
  }, v;
}
function il(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ef(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function ao() {
}
var Wr = 0.7, Jo = 1 / Wr, or = "\\s*([+-]?\\d+)\\s*", Xr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rg = /^#([0-9a-f]{3,8})$/, og = new RegExp(`^rgb\\(${or},${or},${or}\\)$`), ag = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), sg = new RegExp(`^rgba\\(${or},${or},${or},${Xr}\\)$`), ig = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Xr}\\)$`), lg = new RegExp(`^hsl\\(${Xr},${Kt},${Kt}\\)$`), ug = new RegExp(`^hsla\\(${Xr},${Kt},${Kt},${Xr}\\)$`), au = {
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
il(ao, Un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: su,
  // Deprecated! Use color.formatHex.
  formatHex: su,
  formatHex8: cg,
  formatHsl: dg,
  formatRgb: iu,
  toString: iu
});
function su() {
  return this.rgb().formatHex();
}
function cg() {
  return this.rgb().formatHex8();
}
function dg() {
  return zf(this).formatHsl();
}
function iu() {
  return this.rgb().formatRgb();
}
function Un(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? lu(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? bo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? bo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = og.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = ag.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sg.exec(e)) ? bo(t[1], t[2], t[3], t[4]) : (t = ig.exec(e)) ? bo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = lg.exec(e)) ? du(t[1], t[2] / 100, t[3] / 100, 1) : (t = ug.exec(e)) ? du(t[1], t[2] / 100, t[3] / 100, t[4]) : au.hasOwnProperty(e) ? lu(au[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function lu(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function bo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function fg(e) {
  return e instanceof ao || (e = Un(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function $i(e, t, n, r) {
  return arguments.length === 1 ? fg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
il(pt, $i, Ef(ao, {
  brighter(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wr : Math.pow(Wr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(In(this.r), In(this.g), In(this.b), Qo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: uu,
  // Deprecated! Use color.formatHex.
  formatHex: uu,
  formatHex8: pg,
  formatRgb: cu,
  toString: cu
}));
function uu() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}`;
}
function pg() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}${Nn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cu() {
  const e = Qo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Qo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function In(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nn(e) {
  return e = In(e), (e < 16 ? "0" : "") + e.toString(16);
}
function du(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, r);
}
function zf(e) {
  if (e instanceof Mt)
    return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ao || (e = Un(e)), !e)
    return new Mt();
  if (e instanceof Mt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, l = a - o, d = (a + o) / 2;
  return l ? (t === a ? s = (n - r) / l + (n < r) * 6 : n === a ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= d < 0.5 ? a + o : 2 - a - o, s *= 60) : l = d > 0 && d < 1 ? 0 : s, new Mt(s, l, d, e.opacity);
}
function hg(e, t, n, r) {
  return arguments.length === 1 ? zf(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
il(Mt, hg, Ef(ao, {
  brighter(e) {
    return e = e == null ? Jo : Math.pow(Jo, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wr : Math.pow(Wr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      os(e >= 240 ? e - 240 : e + 120, o, r),
      os(e, o, r),
      os(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Mt(fu(this.h), xo(this.s), xo(this.l), Qo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Qo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${fu(this.h)}, ${xo(this.s) * 100}%, ${xo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function fu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function os(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ll = (e) => () => e;
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
    return n - t ? vg(t, n, e) : ll(isNaN(t) ? n : t);
  };
}
function $f(e, t) {
  var n = t - e;
  return n ? mg(e, n) : ll(isNaN(e) ? t : e);
}
const ea = (function e(t) {
  var n = gg(t);
  function r(o, a) {
    var s = n((o = $i(o)).r, (a = $i(a)).r), l = n(o.g, a.g), d = n(o.b, a.b), u = $f(o.opacity, a.opacity);
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
    o[s] = Ir(e[s], t[s]);
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
function Wt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function _g(e, t) {
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
var Pi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, as = new RegExp(Pi.source, "g");
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
  var n = Pi.lastIndex = as.lastIndex = 0, r, o, a, s = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (r = Pi.exec(e)) && (o = as.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[s] ? l[s] += a : l[++s] = a), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, d.push({ i: s, x: Wt(r, o) })), n = as.lastIndex;
  return n < t.length && (a = t.slice(n), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? d[0] ? Sg(d[0].x) : kg(t) : (t = d.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      l[(f = d[c]).i] = f.x(u);
    return l.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ll(t) : (n === "number" ? Wt : n === "string" ? (r = Un(t)) ? (t = r, ea) : Pf : t instanceof Un ? ea : t instanceof Date ? wg : bg(t) ? yg : Array.isArray(t) ? xg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _g : Wt)(e, t);
}
var pu = 180 / Math.PI, Ci = {
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
    rotate: Math.atan2(t, e) * pu,
    skewX: Math.atan(d) * pu,
    scaleX: s,
    scaleY: l
  };
}
var wo;
function Eg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ci : Cf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zg(e) {
  return e == null || (wo || (wo = document.createElementNS("http://www.w3.org/2000/svg", "g")), wo.setAttribute("transform", e), !(e = wo.transform.baseVal.consolidate())) ? Ci : (e = e.matrix, Cf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Af(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, v, b, m) {
    if (u !== f || c !== v) {
      var p = b.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, v) });
    } else (f || v) && b.push("translate(" + f + t + v + n);
  }
  function s(u, c, f, v) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Wt(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function l(u, c, f, v) {
    u !== c ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Wt(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function d(u, c, f, v, b, m) {
    if (u !== f || c !== v) {
      var p = b.push(o(b) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, v) });
    } else (f !== 1 || v !== 1) && b.push(o(b) + "scale(" + f + "," + v + ")");
  }
  return function(u, c) {
    var f = [], v = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, v), s(u.rotate, c.rotate, f, v), l(u.skewX, c.skewX, f, v), d(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, v), u = c = null, function(b) {
      for (var m = -1, p = v.length, h; ++m < p; )
        f[(h = v[m]).i] = h.x(b);
      return f.join("");
    };
  };
}
var $g = Af(Eg, "px, ", "px)", "deg)"), Pg = Af(zg, ", ", ")", ")"), Cg = 1e-12;
function hu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ag(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Tg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Mo = (function e(t, n, r) {
  function o(a, s) {
    var l = a[0], d = a[1], u = a[2], c = s[0], f = s[1], v = s[2], b = c - l, m = f - d, p = b * b + m * m, h, g;
    if (p < Cg)
      g = Math.log(v / u) / t, h = function(y) {
        return [
          l + y * b,
          d + y * m,
          u * Math.exp(t * y * g)
        ];
      };
    else {
      var k = Math.sqrt(p), w = (v * v - u * u + r * p) / (2 * u * n * k), A = (v * v - u * u - r * p) / (2 * v * n * k), $ = Math.log(Math.sqrt(w * w + 1) - w), _ = Math.log(Math.sqrt(A * A + 1) - A);
      g = (_ - $) / t, h = function(y) {
        var S = y * g, L = hu($), M = u / (n * k) * (L * Tg(t * S + $) - Ag($));
        return [
          l + M * b,
          d + M * m,
          u * L / hu(t * S + $)
        ];
      };
    }
    return h.duration = g * 1e3 * t / Math.SQRT2, h;
  }
  return o.rho = function(a) {
    var s = Math.max(1e-3, +a), l = s * s, d = l * l;
    return e(s, l, d);
  }, o;
})(Math.SQRT2, 2, 4);
var lr = 0, Ar = 0, kr = 0, Tf = 1e3, ta, Tr, na = 0, Vn = 0, Sa = 0, Yr = typeof performance == "object" && performance.now ? performance : Date, Of = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ul() {
  return Vn || (Of(Og), Vn = Yr.now() + Sa);
}
function Og() {
  Vn = 0;
}
function ra() {
  this._call = this._time = this._next = null;
}
ra.prototype = Nf.prototype = {
  constructor: ra,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ul() : +n) + (t == null ? 0 : +t), !this._next && Tr !== this && (Tr ? Tr._next = this : ta = this, Tr = this), this._call = e, this._time = n, Ai();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ai());
  }
};
function Nf(e, t, n) {
  var r = new ra();
  return r.restart(e, t, n), r;
}
function Ng() {
  ul(), ++lr;
  for (var e = ta, t; e; )
    (t = Vn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --lr;
}
function mu() {
  Vn = (na = Yr.now()) + Sa, lr = Ar = 0;
  try {
    Ng();
  } finally {
    lr = 0, Ig(), Vn = 0;
  }
}
function Rg() {
  var e = Yr.now(), t = e - na;
  t > Tf && (Sa -= t, na = e);
}
function Ig() {
  for (var e, t = ta, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ta = n);
  Tr = e, Ai(r);
}
function Ai(e) {
  if (!lr) {
    Ar && (Ar = clearTimeout(Ar));
    var t = e - Vn;
    t > 24 ? (e < 1 / 0 && (Ar = setTimeout(mu, e - Yr.now() - Sa)), kr && (kr = clearInterval(kr))) : (kr || (na = Yr.now(), kr = setInterval(Rg, Tf)), lr = 1, Of(mu));
  }
}
function vu(e, t, n) {
  var r = new ra();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Mg = _a("start", "end", "cancel", "interrupt"), Dg = [], Rf = 0, gu = 1, Ti = 2, Do = 3, yu = 4, Oi = 5, Fo = 6;
function Ea(e, t, n, r, o, a) {
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
function cl(e, t) {
  var n = Bt(e, t);
  if (n.state > Rf)
    throw new Error("too late; already scheduled");
  return n;
}
function en(e, t) {
  var n = Bt(e, t);
  if (n.state > Do)
    throw new Error("too late; already running");
  return n;
}
function Bt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Fg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Nf(a, 0, n.time);
  function a(u) {
    n.state = gu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, v, b;
    if (n.state !== gu)
      return d();
    for (c in r)
      if (b = r[c], b.name === n.name) {
        if (b.state === Do)
          return vu(s);
        b.state === yu ? (b.state = Fo, b.timer.stop(), b.on.call("interrupt", e, e.__data__, b.index, b.group), delete r[c]) : +c < t && (b.state = Fo, b.timer.stop(), b.on.call("cancel", e, e.__data__, b.index, b.group), delete r[c]);
      }
    if (vu(function() {
      n.state === Do && (n.state = yu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Ti, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ti) {
      for (n.state = Do, o = new Array(v = n.tween.length), c = 0, f = -1; c < v; ++c)
        (b = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = b);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(d), n.state = Oi, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, c);
    n.state === Oi && (n.on.call("end", e, e.__data__, n.index, n.group), d());
  }
  function d() {
    n.state = Fo, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Bo(e, t) {
  var n = e.__transition, r, o, a = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ti && r.state < Oi, r.state = Fo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    a && delete e.__transition;
  }
}
function Bg(e) {
  return this.each(function() {
    Bo(this, e);
  });
}
function Lg(e, t) {
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
function Ug(e, t, n) {
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
function Vg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Bt(this.node(), n).tween, o = 0, a = r.length, s; o < a; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Lg : Ug)(n, e, t));
}
function dl(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = en(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Bt(o, r).value[t];
  };
}
function If(e, t) {
  var n;
  return (typeof t == "number" ? Wt : t instanceof Un ? ea : (n = Un(t)) ? (t = n, ea) : Pf)(e, t);
}
function qg(e) {
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
  var n = ka(e), r = n === "transform" ? Pg : If;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Xg : Wg)(n, r, dl(this, "attr." + e, t)) : t == null ? (n.local ? jg : qg)(n) : (n.local ? Gg : Hg)(n, r, t));
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
  var r = ka(e);
  return this.tween(n, (r.local ? Jg : Qg)(r, t));
}
function ty(e, t) {
  return function() {
    cl(this, e).delay = +t.apply(this, arguments);
  };
}
function ny(e, t) {
  return t = +t, function() {
    cl(this, e).delay = t;
  };
}
function ry(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ty : ny)(t, e)) : Bt(this.node(), t).delay;
}
function oy(e, t) {
  return function() {
    en(this, e).duration = +t.apply(this, arguments);
  };
}
function ay(e, t) {
  return t = +t, function() {
    en(this, e).duration = t;
  };
}
function sy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oy : ay)(t, e)) : Bt(this.node(), t).duration;
}
function iy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    en(this, e).ease = t;
  };
}
function ly(e) {
  var t = this._id;
  return arguments.length ? this.each(iy(t, e)) : Bt(this.node(), t).ease;
}
function uy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    en(this, e).ease = n;
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
  return new dn(r, this._parents, this._name, this._id);
}
function fy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), s = new Array(r), l = 0; l < a; ++l)
    for (var d = t[l], u = n[l], c = d.length, f = s[l] = new Array(c), v, b = 0; b < c; ++b)
      (v = d[b] || u[b]) && (f[b] = v);
  for (; l < r; ++l)
    s[l] = t[l];
  return new dn(s, this._parents, this._name, this._id);
}
function py(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function hy(e, t, n) {
  var r, o, a = py(t) ? cl : en;
  return function() {
    var s = a(this, e), l = s.on;
    l !== r && (o = (r = l).copy()).on(t, n), s.on = o;
  };
}
function my(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Bt(this.node(), n).on.on(e) : this.each(hy(n, e, t));
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
  typeof e != "function" && (e = al(e));
  for (var r = this._groups, o = r.length, a = new Array(o), s = 0; s < o; ++s)
    for (var l = r[s], d = l.length, u = a[s] = new Array(d), c, f, v = 0; v < d; ++v)
      (c = l[v]) && (f = e.call(c, c.__data__, v, l)) && ("__data__" in c && (f.__data__ = c.__data__), u[v] = f, Ea(u[v], t, n, v, u, Bt(c, n)));
  return new dn(a, this._parents, t, n);
}
function by(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ff(e));
  for (var r = this._groups, o = r.length, a = [], s = [], l = 0; l < o; ++l)
    for (var d = r[l], u = d.length, c, f = 0; f < u; ++f)
      if (c = d[f]) {
        for (var v = e.call(c, c.__data__, f, d), b, m = Bt(c, n), p = 0, h = v.length; p < h; ++p)
          (b = v[p]) && Ea(b, t, n, p, v, m);
        a.push(v), s.push(c);
      }
  return new dn(a, s, t, n);
}
var xy = oo.prototype.constructor;
function wy() {
  return new xy(this._groups, this._parents);
}
function _y(e, t) {
  var n, r, o;
  return function() {
    var a = ir(this, e), s = (this.style.removeProperty(e), ir(this, e));
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
    var s = ir(this, e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Sy(e, t, n) {
  var r, o, a;
  return function() {
    var s = ir(this, e), l = n(this), d = l + "";
    return l == null && (d = l = (this.style.removeProperty(e), ir(this, e))), s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l));
  };
}
function Ey(e, t) {
  var n, r, o, a = "style." + t, s = "end." + a, l;
  return function() {
    var d = en(this, e), u = d.on, c = d.value[a] == null ? l || (l = Mf(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), d.on = r;
  };
}
function zy(e, t, n) {
  var r = (e += "") == "transform" ? $g : If;
  return t == null ? this.styleTween(e, _y(e, r)).on("end.style." + e, Mf(e)) : typeof t == "function" ? this.styleTween(e, Sy(e, r, dl(this, "style." + e, t))).each(Ey(this._id, e)) : this.styleTween(e, ky(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? Ty(dl(this, "text", e)) : Ay(e == null ? "" : e + ""));
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
        var c = Bt(d, t);
        Ea(d, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dn(r, this._parents, e, n);
}
function Dy() {
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
var Fy = 0;
function dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Df() {
  return ++Fy;
}
var tn = oo.prototype;
dn.prototype = {
  constructor: dn,
  select: yy,
  selectAll: by,
  selectChild: tn.selectChild,
  selectChildren: tn.selectChildren,
  filter: dy,
  merge: fy,
  selection: wy,
  transition: My,
  call: tn.call,
  nodes: tn.nodes,
  node: tn.node,
  size: tn.size,
  empty: tn.empty,
  each: tn.each,
  on: my,
  attr: Yg,
  attrTween: ey,
  style: zy,
  styleTween: Cy,
  text: Oy,
  textTween: Iy,
  remove: gy,
  tween: Vg,
  delay: ry,
  duration: sy,
  ease: ly,
  easeVarying: cy,
  end: Dy,
  [Symbol.iterator]: tn[Symbol.iterator]
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
function Vy(e) {
  var t, n;
  e instanceof dn ? (t = e._id, e = e._name) : (t = Df(), (n = Ly).time = ul(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && Ea(d, e, t, u, s, n || Uy(d, t));
  return new dn(r, this._parents, e, t);
}
oo.prototype.interrupt = Bg;
oo.prototype.transition = Vy;
const _o = (e) => () => e;
function qy(e, {
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
var ur = new sn(1, 0, 0);
sn.prototype;
function ss(e) {
  e.stopImmediatePropagation();
}
function Sr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function jy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Hy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function bu() {
  return this.__zoom || ur;
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
  var e = jy, t = Hy, n = Xy, r = Gy, o = Wy, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, d = Mo, u = _a("start", "zoom", "end"), c, f, v, b = 500, m = 150, p = 0, h = 10;
  function g(E) {
    E.property("__zoom", bu).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", M).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  g.transform = function(E, F, P, R) {
    var x = E.selection ? E.selection() : E;
    x.property("__zoom", bu), E !== x ? $(E, F, P, R) : x.interrupt().each(function() {
      _(this, arguments).event(R).start().zoom(null, typeof F == "function" ? F.apply(this, arguments) : F).end();
    });
  }, g.scaleBy = function(E, F, P, R) {
    g.scaleTo(E, function() {
      var x = this.__zoom.k, V = typeof F == "function" ? F.apply(this, arguments) : F;
      return x * V;
    }, P, R);
  }, g.scaleTo = function(E, F, P, R) {
    g.transform(E, function() {
      var x = t.apply(this, arguments), V = this.__zoom, Q = P == null ? A(x) : typeof P == "function" ? P.apply(this, arguments) : P, ne = V.invert(Q), fe = typeof F == "function" ? F.apply(this, arguments) : F;
      return n(w(k(V, fe), Q, ne), x, s);
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
      var V = t.apply(this, arguments), Q = this.__zoom, ne = R == null ? A(V) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(ur.translate(ne[0], ne[1]).scale(Q.k).translate(
        typeof F == "function" ? -F.apply(this, arguments) : -F,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), V, s);
    }, R, x);
  };
  function k(E, F) {
    return F = Math.max(a[0], Math.min(a[1], F)), F === E.k ? E : new sn(F, E.x, E.y);
  }
  function w(E, F, P) {
    var R = F[0] - P[0] * E.k, x = F[1] - P[1] * E.k;
    return R === E.x && x === E.y ? E : new sn(E.k, R, x);
  }
  function A(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function $(E, F, P, R) {
    E.on("start.zoom", function() {
      _(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      _(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var x = this, V = arguments, Q = _(x, V).event(R), ne = t.apply(x, V), fe = P == null ? A(ne) : typeof P == "function" ? P.apply(x, V) : P, be = Math.max(ne[1][0] - ne[0][0], ne[1][1] - ne[0][1]), _e = x.__zoom, re = typeof F == "function" ? F.apply(x, V) : F, se = d(_e.invert(fe).concat(be / _e.k), re.invert(fe).concat(be / re.k));
      return function(me) {
        if (me === 1)
          me = re;
        else {
          var Ce = se(me), Ee = be / Ce[2];
          me = new sn(Ee, fe[0] - Ce[0] * Ee, fe[1] - Ce[1] * Ee);
        }
        Q.zoom(null, me);
      };
    });
  }
  function _(E, F, P) {
    return !P && E.__zooming || new y(E, F);
  }
  function y(E, F) {
    this.that = E, this.args = F, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, F), this.taps = 0;
  }
  y.prototype = {
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
      var F = It(this.that).datum();
      u.call(
        E,
        this.that,
        new qy(E, {
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
    var P = _(this, F).event(E), R = this.__zoom, x = Math.max(a[0], Math.min(a[1], R.k * Math.pow(2, r.apply(this, arguments)))), V = Gt(E);
    if (P.wheel)
      (P.mouse[0][0] !== V[0] || P.mouse[0][1] !== V[1]) && (P.mouse[1] = R.invert(P.mouse[0] = V)), clearTimeout(P.wheel);
    else {
      if (R.k === x)
        return;
      P.mouse = [V, R.invert(V)], Bo(this), P.start();
    }
    Sr(E), P.wheel = setTimeout(Q, m), P.zoom("mouse", n(w(k(R, x), P.mouse[0], P.mouse[1]), P.extent, s));
    function Q() {
      P.wheel = null, P.end();
    }
  }
  function L(E, ...F) {
    if (v || !e.apply(this, arguments))
      return;
    var P = E.currentTarget, R = _(this, F, !0).event(E), x = It(E.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", be, !0), V = Gt(E, P), Q = E.clientX, ne = E.clientY;
    kf(E.view), ss(E), R.mouse = [V, this.__zoom.invert(V)], Bo(this), R.start();
    function fe(_e) {
      if (Sr(_e), !R.moved) {
        var re = _e.clientX - Q, se = _e.clientY - ne;
        R.moved = re * re + se * se > p;
      }
      R.event(_e).zoom("mouse", n(w(R.that.__zoom, R.mouse[0] = Gt(_e, P), R.mouse[1]), R.extent, s));
    }
    function be(_e) {
      x.on("mousemove.zoom mouseup.zoom", null), Sf(_e.view, R.moved), Sr(_e), R.event(_e).end();
    }
  }
  function M(E, ...F) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, R = Gt(E.changedTouches ? E.changedTouches[0] : E, this), x = P.invert(R), V = P.k * (E.shiftKey ? 0.5 : 2), Q = n(w(k(P, V), R, x), t.apply(this, F), s);
      Sr(E), l > 0 ? It(this).transition().duration(l).call($, Q, R, E) : It(this).call(g.transform, Q, R, E);
    }
  }
  function I(E, ...F) {
    if (e.apply(this, arguments)) {
      var P = E.touches, R = P.length, x = _(this, F, E.changedTouches.length === R).event(E), V, Q, ne, fe;
      for (ss(E), Q = 0; Q < R; ++Q)
        ne = P[Q], fe = Gt(ne, this), fe = [fe, this.__zoom.invert(fe), ne.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== fe[2] && (x.touch1 = fe, x.taps = 0) : (x.touch0 = fe, V = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), V && (x.taps < 2 && (f = fe[0], c = setTimeout(function() {
        c = null;
      }, b)), Bo(this), x.start());
    }
  }
  function C(E, ...F) {
    if (this.__zooming) {
      var P = _(this, F).event(E), R = E.changedTouches, x = R.length, V, Q, ne, fe;
      for (Sr(E), V = 0; V < x; ++V)
        Q = R[V], ne = Gt(Q, this), P.touch0 && P.touch0[2] === Q.identifier ? P.touch0[0] = ne : P.touch1 && P.touch1[2] === Q.identifier && (P.touch1[0] = ne);
      if (Q = P.that.__zoom, P.touch1) {
        var be = P.touch0[0], _e = P.touch0[1], re = P.touch1[0], se = P.touch1[1], me = (me = re[0] - be[0]) * me + (me = re[1] - be[1]) * me, Ce = (Ce = se[0] - _e[0]) * Ce + (Ce = se[1] - _e[1]) * Ce;
        Q = k(Q, Math.sqrt(me / Ce)), ne = [(be[0] + re[0]) / 2, (be[1] + re[1]) / 2], fe = [(_e[0] + se[0]) / 2, (_e[1] + se[1]) / 2];
      } else if (P.touch0)
        ne = P.touch0[0], fe = P.touch0[1];
      else
        return;
      P.zoom("touch", n(w(Q, ne, fe), P.extent, s));
    }
  }
  function q(E, ...F) {
    if (this.__zooming) {
      var P = _(this, F).event(E), R = E.changedTouches, x = R.length, V, Q;
      for (ss(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, b), V = 0; V < x; ++V)
        Q = R[V], P.touch0 && P.touch0[2] === Q.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === Q.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0)
        P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (Q = Gt(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < h)) {
        var ne = It(this).on("dblclick.zoom");
        ne && ne.apply(this, arguments);
      }
    }
  }
  return g.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : _o(+E), g) : r;
  }, g.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : _o(!!E), g) : e;
  }, g.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : _o(!!E), g) : o;
  }, g.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : _o([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), g) : t;
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
    return arguments.length ? (h = +E, g) : h;
  }, g;
}
var ue = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(ue || {}), fl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(fl || {}), Tn = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(Tn || {}), kn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(kn || {}), oa = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(oa || {}), Mr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Mr || {}), Ff = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Ff || {});
const Ky = ["INPUT", "SELECT", "TEXTAREA"], Zy = typeof document < "u" ? document : null;
function Ni(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Ky.includes(r?.nodeName) || o || !!a;
}
function Jy(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function xu(e, t, n, r) {
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
    return Array.isArray(e) ? e.some((o) => xu(n[r], o, t, n.type === "keyup")) : xu(n[r], e, t, n.type === "keyup");
  };
}
function eb(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Dr(e, t) {
  const n = J(() => Me(t?.target) ?? Zy), r = an(Me(e) === !0);
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
  ), cf(["blur", "contextmenu"], l), nu(
    (...u) => s(...u),
    (u) => {
      var c, f;
      const v = Me(t?.actInsideInputWithModifier) ?? !0, b = Me(t?.preventDefault) ?? !1;
      if (o = Jy(u), (!o || o && !v) && Ni(u))
        return;
      const p = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target, h = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !b && (o || !h) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), nu(
    (...u) => s(...u),
    (u) => {
      const c = Me(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !c) && Ni(u))
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
const Bf = "vue-flow__node-desc", Lf = "vue-flow__edge-desc", tb = "vue-flow__aria-live", Uf = ["Enter", " ", "Escape"], ar = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function aa(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function sa(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function za(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function qn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Vf(e, t) {
  return {
    x: qn(e.x, t[0][0], t[1][0]),
    y: qn(e.y, t[0][1], t[1][1])
  };
}
function wu(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function Sn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Mn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !Sn(e);
}
function Or(e) {
  return Mn(e) && "computedPosition" in e;
}
function ko(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function nb(e) {
  return ko(e.width) && ko(e.height) && ko(e.x) && ko(e.y);
}
function rb(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: nr({
      width: 0,
      height: 0
    }),
    computedPosition: nr({
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
    events: nr(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function qf(e, t, n) {
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
    events: nr(et(e.events) ? e.events : {}),
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
  return n.filter((a) => Sn(a) && a.source === r).map((a) => n.find((s) => Mn(s) && s.id === a.target));
}
function ab(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return jf(a, s, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Sn(a) && a.target === r).map((a) => n.find((s) => Mn(s) && s.id === a.source));
}
function Hf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function sb(e, t) {
  return t.some(
    (n) => Sn(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Kr({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function Zr({ x: e, y: t }, { x: n, y: r, zoom: o }, a = !1, s = [1, 1]) {
  const l = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? $a(l, s) : l;
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
    ...Zr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const l of e) {
    const { dimensions: d, selectable: u = !0, hidden: c = !1 } = l, f = d.width ?? l.width ?? null, v = d.height ?? l.height ?? null;
    if (o && !u || c)
      continue;
    const b = sa(a, aa(l)), m = f === null || v === null, p = r && b > 0, h = (f ?? 0) * (v ?? 0);
    (m || p || b >= h || l.dragging) && s.push(l);
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
function Jn(e, t) {
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
  return so(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function ub(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Jn(e, n), o = Jn(e, t);
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
    const r = Jn(e.top ?? e.y ?? 0, n), o = Jn(e.bottom ?? e.y ?? 0, n), a = Jn(e.left ?? e.x ?? 0, t), s = Jn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: a, x: a + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function cb(e, t, n, r, o, a) {
  const { x: s, y: l } = Kr(e, { x: t, y: n, zoom: r }), { x: d, y: u } = Kr(
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
function _u(e, t, n, r, o, a = 0.1) {
  const s = ub(a, t, n), l = (t - s.x) / e.width, d = (n - s.y) / e.height, u = Math.min(l, d), c = qn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, b = t / 2 - f * c, m = n / 2 - v * c, p = cb(e, b, m, c, t, n), h = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: b - h.left + h.right,
    y: m - h.top + h.bottom,
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
function Jr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function ku(e) {
  const t = e.ctrlKey && ia() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function Su(e, t, n) {
  return e < t ? qn(Math.abs(e - t), 1, t) / t : e > n ? -qn(Math.abs(e - n), 1, t) / t : 0;
}
function Zf(e, t, n = 15, r = 40) {
  const o = Su(e.x, r, t.width - r) * n, a = Su(e.y, r, t.height - r) * n;
  return [o, a];
}
function is(e, t) {
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
function Eu(e, t) {
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
            if (Or(s) && (typeof l.position < "u" && (s.position = l.position), typeof l.dragging < "u" && (s.dragging = l.dragging), s.expandParent && s.parentNode)) {
              const d = t[a.indexOf(s.parentNode)];
              d && Or(d) && is(s, d);
            }
            break;
          case "dimensions":
            if (Or(s) && (typeof l.dimensions < "u" && (s.dimensions = l.dimensions), typeof l.updateStyle < "u" && l.updateStyle && (s.style = {
              ...s.style || {},
              width: `${(n = l.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = l.dimensions) == null ? void 0 : r.height}px`
            }), typeof l.resizing < "u" && (s.resizing = l.resizing), s.expandParent && s.parentNode)) {
              const d = t[a.indexOf(s.parentNode)];
              d && Or(d) && (!!d.dimensions.width && !!d.dimensions.height ? is(s, d) : un(() => {
                is(s, d);
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
function zu(e) {
  return {
    item: e,
    type: "add"
  };
}
function $u(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Pu(e, t, n, r, o) {
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
const Cu = () => {
};
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Cu, r = () => !1;
  const o = () => t.size > 0 || r(), a = (v) => {
    n = v;
  }, s = () => {
    n = Cu;
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
      return Hr(b), { off: b };
    },
    off: u,
    trigger: (v) => {
      const b = [n];
      return o() ? b.push(...t) : e && b.push(e), Promise.allSettled(b.map((m) => m(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: a,
    removeEmitter: s,
    setHasEmitListeners: l,
    removeHasEmitListeners: d
  };
}
function Au(e, t, n) {
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
function ls({
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
      t(new at(tt.NODE_EXTENT_INVALID, e.id)), o = n;
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
function pl(e, t, n, r, o) {
  const a = mb(e.dimensions, hb(e, n, r, o)), s = Vf(t, a);
  return {
    position: {
      x: s.x - (o?.computedPosition.x || 0),
      y: s.y - (o?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function cr(e, t, n = ue.Left, r = !1) {
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
function Tu(e, t) {
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
const Ou = {
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
    super((r = Ou[t]) == null ? void 0 : r.call(Ou, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function hl(e) {
  return "clientX" in e;
}
function yb(e) {
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
const ia = () => {
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
function $a(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const xb = () => !0;
function us(e) {
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
    sa(o, aa(a)) > 0 && r.push(a);
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
      const { x: v, y: b } = cr(u, f, f.position, !0), m = Math.sqrt((v - e.x) ** 2 + (b - e.y) ** 2);
      m > t || (m < l ? (s = [{ ...f, x: v, y: b }], l = m) : m === l && s.push({ ...f, x: v, y: b }));
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
function Nu(e, {
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
  const m = a === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${d}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = Xt(e), k = s.elementFromPoint(h, g), w = k?.classList.contains(`${l}-flow__handle`) ? k : p, A = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const $ = Qf(void 0, w), _ = w.getAttribute("data-nodeid"), y = w.getAttribute("data-handleid"), S = w.classList.contains("connectable"), L = w.classList.contains("connectableend");
    if (!_ || !$)
      return A;
    const M = {
      source: m ? _ : r,
      sourceHandle: m ? y : o,
      target: m ? r : _,
      targetHandle: m ? o : y
    };
    A.connection = M;
    const C = S && L && (n === kn.Strict ? m && $ === "source" || !m && $ === "target" : _ !== r || y !== o);
    A.isValid = C && u(M, {
      nodes: f,
      edges: c,
      sourceNode: v(M.source),
      targetNode: v(M.target)
    }), A.toHandle = ep(_, $, y, b, n, !0);
  }
  return A;
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
  const c = o === kn.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((d = u.handleBounds) == null ? void 0 : d.target) ?? []], f = (n ? c?.find((v) => v.id === n) : c?.[0]) ?? null;
  return f && a ? { ...f, ...cr(u, f, f.position, !0) } : f;
}
const Ri = {
  [ue.Left]: ue.Right,
  [ue.Right]: ue.Left,
  [ue.Top]: ue.Bottom,
  [ue.Bottom]: ue.Top
}, zb = ["production", "prod"];
function so(e, ...t) {
  tp() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function tp() {
  return !zb.includes(process.env.NODE_ENV || "");
}
function Ru(e, t, n, r, o) {
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
      ...za(s)
    };
  }) : null;
}
function Ii(e, t, n, r, o, a = !1, s) {
  o.value = !1, e.selected ? (a || e.selected && t) && (r([e]), un(() => {
    s.blur();
  })) : n([e]);
}
function et(e) {
  return typeof N(e) < "u";
}
function $b(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new at(tt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return Sn(e) ? o = e : o = {
    ...e,
    id: Hf(e)
  }, o = qf(o, void 0, r), sb(o, t) ? !1 : o;
}
function Pb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new at(tt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new at(tt.EDGE_NOT_FOUND, e.id)), !1;
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
function Iu(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const s = e[a];
    if (!Mn(s)) {
      n(
        new at(tt.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = rb(s, t(s.id), s.parentNode);
    s.parentNode && (r[s.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const s = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !s && n(new at(tt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return o;
}
function Mu(e, t, n, r, o, a) {
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
    Mu("source", d, c, e, o, s), Mu("target", d, u, e, a, l);
  }
}
function Du(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function ds(e, t, n, r, o, a, s, l) {
  const d = [];
  for (const u of e) {
    const c = Sn(u) ? u : $b(u, l, o, a);
    if (!c)
      continue;
    const f = n(c.source), v = n(c.target);
    if (!f || !v) {
      o(new at(tt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new at(tt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!v) {
      o(new at(tt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: l,
      nodes: s,
      sourceNode: f,
      targetNode: v
    })) {
      o(new at(tt.EDGE_INVALID, c.id));
      continue;
    }
    const b = r(c.id);
    d.push({
      ...qf(c, b, a),
      sourceNode: f,
      targetNode: v
    });
  }
  return d;
}
const Fu = /* @__PURE__ */ Symbol("vueFlow"), np = /* @__PURE__ */ Symbol("nodeId"), rp = /* @__PURE__ */ Symbol("nodeRef"), Cb = /* @__PURE__ */ Symbol("edgeId"), Ab = /* @__PURE__ */ Symbol("edgeRef"), Pa = /* @__PURE__ */ Symbol("slots");
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
    multiSelectionActive: m,
    nodesSelectionActive: p,
    selectNodesOnDrag: h,
    removeSelectedElements: g,
    addSelectedNodes: k,
    updateNodePositions: w,
    emits: A
  } = qe(), { onStart: $, onDrag: _, onStop: y, onClick: S, el: L, disabled: M, id: I, selectable: C, dragHandle: q } = e, E = an(!1);
  let F = [], P, R = null, x = { x: void 0, y: void 0 }, V = { x: 0, y: 0 }, Q = null, ne = !1, fe = !1, be = 0, _e = !1;
  const re = Nb(), se = ({ x: ie, y: ge }) => {
    x = { x: ie, y: ge };
    let D = !1;
    if (F = F.map((O) => {
      const B = { x: ie - O.distance.x, y: ge - O.distance.y }, { computedPosition: H } = pl(
        O,
        n.value ? $a(B, r.value) : B,
        A.error,
        s.value,
        O.parentNode ? b(O.parentNode) : void 0
      );
      return D = D || O.position.x !== H.x || O.position.y !== H.y, O.position = H, O;
    }), fe = fe || D, !!D && (w(F, !0, !0), E.value = !0, Q)) {
      const [O, B] = ls({
        id: I,
        dragItems: F,
        findNode: b
      });
      _({ event: Q, node: O, nodes: B });
    }
  }, me = () => {
    if (!R)
      return;
    const [ie, ge] = Zf(V, R, c.value);
    if (ie !== 0 || ge !== 0) {
      const D = {
        x: (x.x ?? 0) - ie / d.value.zoom,
        y: (x.y ?? 0) - ge / d.value.zoom
      };
      v({ x: ie, y: ge }) && se(D);
    }
    be = requestAnimationFrame(me);
  }, Ce = (ie, ge) => {
    ne = !0;
    const D = b(I);
    !h.value && !m.value && D && (D.selected || g()), D && Me(C) && h.value && Ii(
      D,
      m.value,
      k,
      g,
      p,
      !1,
      ge
    );
    const O = re(ie.sourceEvent);
    if (x = O, F = fb(a.value, f.value, O, I), F.length) {
      const [B, H] = ls({
        id: I,
        dragItems: F,
        findNode: b
      });
      $({ event: ie.sourceEvent, node: B, nodes: H });
    }
  }, Ee = (ie, ge) => {
    var D;
    ie.sourceEvent.type === "touchmove" && ie.sourceEvent.touches.length > 1 || (fe = !1, l.value === 0 && Ce(ie, ge), x = re(ie.sourceEvent), R = ((D = t.value) == null ? void 0 : D.getBoundingClientRect()) || null, V = Xt(ie.sourceEvent, R));
  }, le = (ie, ge) => {
    const D = re(ie.sourceEvent);
    if (!_e && ne && u.value && (_e = !0, me()), !ne) {
      const O = D.xSnapped - (x.x ?? 0), B = D.ySnapped - (x.y ?? 0);
      Math.sqrt(O * O + B * B) > l.value && Ce(ie, ge);
    }
    (x.x !== D.xSnapped || x.y !== D.ySnapped) && F.length && ne && (Q = ie.sourceEvent, V = Xt(ie.sourceEvent, R), se(D));
  }, we = (ie) => {
    let ge = !1;
    if (!ne && !E.value && !m.value) {
      const D = ie.sourceEvent, O = re(D), B = O.xSnapped - (x.x ?? 0), H = O.ySnapped - (x.y ?? 0), j = Math.sqrt(B * B + H * H);
      j !== 0 && j <= l.value && (S?.(D), ge = !0);
    }
    if (F.length && !ge) {
      fe && (w(F, !1, !1), fe = !1);
      const [D, O] = ls({
        id: I,
        dragItems: F,
        findNode: b
      });
      y({ event: ie.sourceEvent, node: D, nodes: O });
    }
    F = [], E.value = !1, _e = !1, ne = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(be);
  };
  return Ie([() => Me(M), L], ([ie, ge], D, O) => {
    if (ge) {
      const B = It(ge);
      ie || (P = ng().on("start", (H) => Ee(H, ge)).on("drag", (H) => le(H, ge)).on("end", (H) => we(H)).filter((H) => {
        const j = H.target, oe = Me(q);
        return !H.button && (!o.value || !Au(j, `.${o.value}`, ge) && (!oe || Au(j, oe, ge)));
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
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = qe();
  return (o) => {
    var a;
    const s = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = yb(o) ? o.sourceEvent : o, { x: d, y: u } = Xt(l, s), c = Zr({ x: d, y: u }, e.value), { x: f, y: v } = n.value ? $a(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: v,
      ...c
    };
  };
}
function So() {
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
    autoPanOnConnect: m,
    autoPanSpeed: p,
    findNode: h,
    panBy: g,
    startConnection: k,
    updateConnection: w,
    endConnection: A,
    emits: $,
    viewport: _,
    edges: y,
    nodes: S,
    isValidConnection: L,
    nodeLookup: M
  } = qe();
  let I = null, C = !1, q = null;
  function E(P) {
    var R;
    const x = Me(n) === "target", V = hl(P), Q = wu(P.target), ne = P.currentTarget;
    if (ne && (V && P.button === 0 || !V)) {
      let fe = function(pe) {
        D = Xt(pe, we), se = kb(
          Zr(D, _.value, !1, [1, 1]),
          c.value,
          M.value,
          H
        ), O || (B(), O = !0);
        const xe = Nu(
          pe,
          {
            handle: se,
            connectionMode: u.value,
            fromNodeId: Me(t),
            fromHandleId: Me(e),
            fromType: x ? "target" : "source",
            isValidConnection: re,
            doc: Q,
            lib: "vue",
            flowId: l,
            nodeLookup: M.value
          },
          y.value,
          S.value,
          h,
          M.value
        );
        q = xe.handleDomNode, I = xe.connection, C = Eb(!!se, xe.isValid);
        const ze = {
          // from stays the same
          ...de,
          isValid: C,
          to: xe.toHandle && C ? Kr({ x: xe.toHandle.x, y: xe.toHandle.y }, _.value) : D,
          toHandle: xe.toHandle,
          toPosition: C && xe.toHandle ? xe.toHandle.position : Ri[H.position],
          toNode: xe.toHandle ? M.value.get(xe.toHandle.nodeId) : null
        };
        if (C && se && de?.toHandle && ze.toHandle && de.toHandle.type === ze.toHandle.type && de.toHandle.nodeId === ze.toHandle.nodeId && de.toHandle.id === ze.toHandle.id && de.to.x === ze.to.x && de.to.y === ze.to.y)
          return;
        const Be = se ?? xe.toHandle;
        if (w(
          Be && C ? Kr(
            {
              x: Be.x,
              y: Be.y
            },
            _.value
          ) : D,
          Be,
          Sb(!!Be, C)
        ), de = ze, !se && !C && !q)
          return us(ge);
        I && I.source !== I.target && q && (us(ge), ge = q, q.classList.add("connecting", "vue-flow__handle-connecting"), q.classList.toggle("valid", !!C), q.classList.toggle("vue-flow__handle-valid", !!C));
      }, be = function(pe) {
        "touches" in pe && pe.touches.length > 0 || ((se || q) && I && C && (a ? a(pe, I) : $.connect(I)), $.connectEnd(pe), o && s?.(pe), us(ge), cancelAnimationFrame(me), A(pe), O = !1, C = !1, I = null, q = null, Q.removeEventListener("mousemove", fe), Q.removeEventListener("mouseup", be), Q.removeEventListener("touchmove", fe), Q.removeEventListener("touchend", be));
      };
      const _e = h(Me(t));
      let re = Me(r) || L.value || So;
      !re && _e && (re = (x ? _e.isValidSourcePos : _e.isValidTargetPos) || So);
      let se, me = 0;
      const { x: Ce, y: Ee } = Xt(P), le = Qf(Me(o), ne), we = (R = d.value) == null ? void 0 : R.getBoundingClientRect();
      if (!we || !le)
        return;
      const ie = ep(Me(t), le, Me(e), M.value, u.value);
      if (!ie)
        return;
      let ge, D = Xt(P, we), O = !1;
      const B = () => {
        if (!m.value)
          return;
        const [pe, xe] = Zf(D, we, p.value);
        g({ x: pe, y: xe }), me = requestAnimationFrame(B);
      }, H = {
        ...ie,
        nodeId: Me(t),
        type: le,
        position: ie.position
      }, j = M.value.get(Me(t)), ae = {
        inProgress: !0,
        isValid: null,
        from: cr(j, H, ue.Left, !0),
        fromHandle: H,
        fromPosition: H.position,
        fromNode: j,
        to: D,
        toHandle: null,
        toPosition: Ri[H.position],
        toNode: null
      };
      k(
        {
          nodeId: Me(t),
          id: Me(e),
          type: le,
          position: ne?.getAttribute("data-handlepos") || ue.Top,
          ...D
        },
        {
          x: Ce - we.left,
          y: Ee - we.top
        }
      ), $.connectStart({ event: P, nodeId: Me(t), handleId: Me(e), handleType: le });
      let de = ae;
      Q.addEventListener("mousemove", fe), Q.addEventListener("mouseup", be), Q.addEventListener("touchmove", fe), Q.addEventListener("touchend", be);
    }
  }
  function F(P) {
    var R, x;
    if (!f.value)
      return;
    const V = Me(n) === "target";
    if (!v.value) {
      $.clickConnectStart({ event: P, nodeId: Me(t), handleId: Me(e) }), k(
        {
          nodeId: Me(t),
          type: Me(n),
          id: Me(e),
          position: ue.Top,
          ...Xt(P)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Me(r) || L.value || So;
    const ne = h(Me(t));
    if (!Q && ne && (Q = (V ? ne.isValidSourcePos : ne.isValidTargetPos) || So), ne && (typeof ne.connectable > "u" ? b.value : ne.connectable) === !1)
      return;
    const fe = wu(P.target), be = Nu(
      P,
      {
        handle: {
          nodeId: Me(t),
          id: Me(e),
          type: Me(n),
          position: ue.Top,
          ...Xt(P)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: fe,
        lib: "vue",
        flowId: l,
        nodeLookup: M.value
      },
      y.value,
      S.value,
      h,
      M.value
    ), _e = ((R = be.connection) == null ? void 0 : R.source) === ((x = be.connection) == null ? void 0 : x.target);
    be.isValid && be.connection && !_e && $.connect(be.connection), $.clickConnectEnd(P), A(P, !0);
  }
  return {
    handlePointerDown: E,
    handleClick: F
  };
}
function Rb() {
  return vr(np, "");
}
function sp(e) {
  const t = e ?? Rb() ?? "", n = vr(rp, G(null)), { findNode: r, edges: o, emits: a } = qe(), s = r(t);
  return s || a.error(new at(tt.NODE_NOT_FOUND, t)), {
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
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: s, emits: l } = qe();
  return (d, u = !1) => {
    const c = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, v = u ? 4 : 1, b = d.x * c * v, m = d.y * f * v, p = [];
    for (const h of e.value)
      if (h.draggable || s && typeof h.draggable > "u") {
        const g = { x: h.computedPosition.x + b, y: h.computedPosition.y + m }, { position: k } = pl(
          h,
          g,
          l.error,
          t.value,
          h.parentNode ? r(h.parentNode) : void 0
        );
        p.push({
          id: h.id,
          position: k,
          from: h.position,
          distance: { x: d.x, y: d.y },
          dimensions: h.dimensions
        });
      }
    n(p, !0, !1);
  };
}
const Eo = 0.1, Db = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function vn() {
  return so("Viewport not initialized yet."), Promise.resolve(!1);
}
const Fb = {
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
function Bb(e) {
  function t(r, o) {
    return new Promise((a) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Ir : Mo).scaleBy(
        fs(e.d3Selection, o?.duration, o?.ease, () => {
          a(!0);
        }),
        r
      ) : a(!1);
    });
  }
  function n(r, o, a, s) {
    return new Promise((l) => {
      var d;
      const { x: u, y: c } = Vf({ x: -r, y: -o }, e.translateExtent), f = ur.translate(-u, -c).scale(a);
      e.d3Selection && e.d3Zoom ? (d = e.d3Zoom) == null || d.interpolate(s?.interpolate === "linear" ? Ir : Mo).transform(
        fs(e.d3Selection, s?.duration, s?.ease, () => {
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
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(a?.interpolate === "linear" ? Ir : Mo).scaleTo(
        fs(e.d3Selection, a?.duration, a?.ease, () => {
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
      padding: Eo,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var a, s;
      const l = [];
      for (const v of e.nodes)
        v.dimensions.width && v.dimensions.height && (o?.includeHiddenNodes || !v.hidden) && (!((a = o.nodes) != null && a.length) || (s = o.nodes) != null && s.length && o.nodes.includes(v.id)) && l.push(v);
      if (!l.length)
        return Promise.resolve(!1);
      const d = Wf(l), { x: u, y: c, zoom: f } = _u(
        d,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? Eo
      );
      return n(u, c, f, o);
    },
    setCenter: (o, a, s) => {
      const l = typeof s?.zoom < "u" ? s.zoom : e.maxZoom, d = e.dimensions.width / 2 - o * l, u = e.dimensions.height / 2 - a * l;
      return n(d, u, l, s);
    },
    fitBounds: (o, a = { padding: Eo }) => {
      const { x: s, y: l, zoom: d } = _u(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        a.padding ?? Eo
      );
      return n(s, l, d, a);
    },
    project: (o) => Zr(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x - a,
          y: o.y - s
        };
        return Zr(l, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: a, y: s } = e.vueFlowRef.getBoundingClientRect(), l = {
          x: o.x + a,
          y: o.y + s
        };
        return Kr(l, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Fb);
}
function fs(e, t = 0, n = Db, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Lb(e, t, n) {
  const r = Hd(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, h, g = !!(n.nodes.value.length || n.edges.value.length);
        p = Zn([e.modelValue, () => {
          var k, w;
          return (w = (k = e.modelValue) == null ? void 0 : k.value) == null ? void 0 : w.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setElements(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Zn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([k, w]) => {
            var A;
            (A = e.modelValue) != null && A.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [...k, ...w], un(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), Ro(() => {
          p?.stop(), h?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let p, h, g = !!n.nodes.value.length;
        p = Zn([e.nodes, () => {
          var k, w;
          return (w = (k = e.nodes) == null ? void 0 : k.value) == null ? void 0 : w.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setNodes(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Zn(
          [n.nodes, () => n.nodes.value.length],
          ([k]) => {
            var w;
            (w = e.nodes) != null && w.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [...k], un(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), Ro(() => {
          p?.stop(), h?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        let p, h, g = !!n.edges.value.length;
        p = Zn([e.edges, () => {
          var k, w;
          return (w = (k = e.edges) == null ? void 0 : k.value) == null ? void 0 : w.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setEdges(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Zn(
          [n.edges, () => n.edges.value.length],
          ([k]) => {
            var w;
            (w = e.edges) != null && w.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [...k], un(() => {
              p?.resume();
            }));
          },
          { immediate: g }
        ), Ro(() => {
          p?.stop(), h?.stop();
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
        const p = async (h) => {
          let g = h;
          typeof t.autoConnect == "function" && (g = await t.autoConnect(h)), g !== !1 && n.addEdges([g]);
        };
        Ie(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Ie(
          n.autoConnect,
          (h, g, k) => {
            h ? n.onConnect(p) : n.hooks.value.connect.off(p), k(() => {
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
      for (const h of Object.keys(t)) {
        const g = h;
        if (!p.includes(g)) {
          const k = Ve(() => t[g]), w = n[g];
          rl(w) && r.run(() => {
            Ie(
              k,
              (A) => {
                et(A) && (w.value = A);
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
    error: ce((e) => so(e.message))
  };
}
function Vb(e, t) {
  const n = gr();
  ch(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const s = (l) => {
        e(o, l);
      };
      a.setEmitter(s), Hr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), Hr(a.removeHasEmitListeners);
    }
  });
  function r(o) {
    var a;
    const s = qb(o);
    return !!((a = n?.vnode.props) == null ? void 0 : a[s]);
  }
}
function qb(e) {
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
    selectionMode: fl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Mr.Free,
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
    multiSelectionKeyCode: ia() ? "Meta" : "Control",
    zoomActivationKeyCode: ia() ? "Meta" : "Control",
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
  const r = Bb(e), o = (D) => {
    const O = D ?? [];
    e.hooks.updateNodeInternals.trigger(O);
  }, a = (D) => ab(D, e.nodes, e.edges), s = (D) => ob(D, e.nodes, e.edges), l = (D) => Yf(D, e.edges), d = ({ id: D, type: O, nodeId: B }) => {
    var H;
    const j = D ? `-${O}-${D}` : `-${O}`;
    return Array.from(((H = e.connectionLookup.get(`${B}${j}`)) == null ? void 0 : H.values()) ?? []);
  }, u = (D) => {
    if (D)
      return t.value.get(D);
  }, c = (D) => {
    if (D)
      return n.value.get(D);
  }, f = (D, O, B) => {
    var H, j;
    const oe = [];
    for (const ae of D) {
      const de = {
        id: ae.id,
        type: "position",
        dragging: B,
        from: ae.from
      };
      if (O && (de.position = ae.position, ae.parentNode)) {
        const pe = u(ae.parentNode);
        de.position = {
          x: de.position.x - (((H = pe?.computedPosition) == null ? void 0 : H.x) ?? 0),
          y: de.position.y - (((j = pe?.computedPosition) == null ? void 0 : j.y) ?? 0)
        };
      }
      oe.push(de);
    }
    oe?.length && e.hooks.nodesChange.trigger(oe);
  }, v = (D) => {
    if (!e.vueFlowRef)
      return;
    const O = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!O)
      return;
    const B = window.getComputedStyle(O), { m22: H } = new window.DOMMatrixReadOnly(B.transform), j = [];
    for (const oe of D) {
      const ae = oe, de = u(ae.id);
      if (de) {
        const pe = za(ae.nodeElement);
        if (!!(pe.width && pe.height && (de.dimensions.width !== pe.width || de.dimensions.height !== pe.height || ae.forceUpdate))) {
          const ze = ae.nodeElement.getBoundingClientRect();
          de.dimensions = pe, de.handleBounds.source = Ru("source", ae.nodeElement, ze, H, de.id), de.handleBounds.target = Ru("target", ae.nodeElement, ze, H, de.id), j.push({
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
  }, b = (D, O) => {
    const B = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
    for (const ae of D)
      Mn(ae) ? B.add(ae.id) : Sn(ae) && H.add(ae.id);
    const j = bn(t.value, B, !0), oe = bn(n.value, H);
    if (e.multiSelectionActive) {
      for (const ae of B)
        j.push(yn(ae, O));
      for (const ae of H)
        oe.push(yn(ae, O));
    }
    j.length && e.hooks.nodesChange.trigger(j), oe.length && e.hooks.edgesChange.trigger(oe);
  }, m = (D) => {
    if (e.multiSelectionActive) {
      const O = D.map((B) => yn(B.id, !0));
      e.hooks.nodesChange.trigger(O);
      return;
    }
    e.hooks.nodesChange.trigger(bn(t.value, new Set(D.map((O) => O.id)), !0)), e.hooks.edgesChange.trigger(bn(n.value));
  }, p = (D) => {
    if (e.multiSelectionActive) {
      const O = D.map((B) => yn(B.id, !0));
      e.hooks.edgesChange.trigger(O);
      return;
    }
    e.hooks.edgesChange.trigger(bn(n.value, new Set(D.map((O) => O.id)))), e.hooks.nodesChange.trigger(bn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (D) => {
    b(D, !0);
  }, g = (D) => {
    const B = (D || e.nodes).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, k = (D) => {
    const B = (D || e.edges).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, w = (D) => {
    if (!D || !D.length)
      return b([], !1);
    const O = D.reduce(
      (B, H) => {
        const j = yn(H.id, !1);
        return Mn(H) ? B.nodes.push(j) : B.edges.push(j), B;
      },
      { nodes: [], edges: [] }
    );
    O.nodes.length && e.hooks.nodesChange.trigger(O.nodes), O.edges.length && e.hooks.edgesChange.trigger(O.edges);
  }, A = (D) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([D, e.maxZoom]), e.minZoom = D;
  }, $ = (D) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([e.minZoom, D]), e.maxZoom = D;
  }, _ = (D) => {
    var O;
    (O = e.d3Zoom) == null || O.translateExtent(D), e.translateExtent = D;
  }, y = (D) => {
    e.nodeExtent = D, o();
  }, S = (D) => {
    var O;
    (O = e.d3Zoom) == null || O.clickDistance(D);
  }, L = (D) => {
    e.nodesDraggable = D, e.nodesConnectable = D, e.elementsSelectable = D;
  }, M = (D) => {
    const O = D instanceof Function ? D(e.nodes) : D;
    !e.initialized && !O.length || (e.nodes = Iu(O, u, e.hooks.error.trigger));
  }, I = (D) => {
    const O = D instanceof Function ? D(e.edges) : D;
    if (!e.initialized && !O.length)
      return;
    const B = ds(
      O,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    cs(e.connectionLookup, n.value, B), e.edges = B;
  }, C = (D) => {
    const O = D instanceof Function ? D([...e.nodes, ...e.edges]) : D;
    !e.initialized && !O.length || (M(O.filter(Mn)), I(O.filter(Sn)));
  }, q = (D) => {
    let O = D instanceof Function ? D(e.nodes) : D;
    O = Array.isArray(O) ? O : [O];
    const B = Iu(O, u, e.hooks.error.trigger), H = [];
    for (const j of B)
      H.push(zu(j));
    H.length && e.hooks.nodesChange.trigger(H);
  }, E = (D) => {
    let O = D instanceof Function ? D(e.edges) : D;
    O = Array.isArray(O) ? O : [O];
    const B = ds(
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
      H.push(zu(j));
    H.length && e.hooks.edgesChange.trigger(H);
  }, F = (D, O = !0, B = !1) => {
    const H = D instanceof Function ? D(e.nodes) : D, j = Array.isArray(H) ? H : [H], oe = [], ae = [];
    function de(xe) {
      const ze = l(xe);
      for (const Be of ze)
        (!et(Be.deletable) || Be.deletable) && ae.push(Pu(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function pe(xe) {
      const ze = [];
      for (const Be of e.nodes)
        Be.parentNode === xe && ze.push(Be);
      if (ze.length) {
        for (const Be of ze)
          oe.push($u(Be.id));
        O && de(ze);
        for (const Be of ze)
          pe(Be.id);
      }
    }
    for (const xe of j) {
      const ze = typeof xe == "string" ? u(xe) : xe;
      ze && (et(ze.deletable) && !ze.deletable || (oe.push($u(ze.id)), O && de([ze]), B && pe(ze.id)));
    }
    ae.length && e.hooks.edgesChange.trigger(ae), oe.length && e.hooks.nodesChange.trigger(oe);
  }, P = (D) => {
    const O = D instanceof Function ? D(e.edges) : D, B = Array.isArray(O) ? O : [O], H = [];
    for (const j of B) {
      const oe = typeof j == "string" ? c(j) : j;
      oe && (et(oe.deletable) && !oe.deletable || H.push(
        Pu(
          typeof j == "string" ? j : j.id,
          oe.source,
          oe.target,
          oe.sourceHandle,
          oe.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(H);
  }, R = (D, O, B = !0) => {
    const H = c(D.id);
    if (!H)
      return !1;
    const j = e.edges.indexOf(H), oe = Pb(D, O, H, B, e.hooks.error.trigger);
    if (oe) {
      const [ae] = ds(
        [oe],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((de, pe) => pe === j ? ae : de), cs(e.connectionLookup, n.value, [ae]), ae;
    }
    return !1;
  }, x = (D, O, B = { replace: !1 }) => {
    const H = c(D);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, V = (D) => Eu(D, e.nodes), Q = (D) => {
    const O = Eu(D, e.edges);
    return cs(e.connectionLookup, n.value, O), O;
  }, ne = (D, O, B = { replace: !1 }) => {
    const H = u(D);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    B.replace ? e.nodes.splice(e.nodes.indexOf(H), 1, j) : Object.assign(H, j);
  }, fe = (D, O, B = { replace: !1 }) => {
    const H = u(D);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, be = (D, O, B = !1) => {
    B ? e.connectionClickStartHandle = D : e.connectionStartHandle = D, e.connectionEndHandle = null, e.connectionStatus = null, O && (e.connectionPosition = O);
  }, _e = (D, O = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = D, e.connectionEndHandle = O, e.connectionStatus = B);
  }, re = (D, O) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, O ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, se = (D) => {
    const O = nb(D), B = O ? null : Or(D) ? D : u(D.id);
    return !O && !B ? [null, null, O] : [O ? D : aa(B), B, O];
  }, me = (D, O = !0, B = e.nodes) => {
    const [H, j, oe] = se(D);
    if (!H)
      return [];
    const ae = [];
    for (const de of B || e.nodes) {
      if (!oe && (de.id === j.id || !de.computedPosition))
        continue;
      const pe = aa(de), xe = sa(pe, H);
      (O && xe > 0 || xe >= pe.width * pe.height || xe >= Number(H.width) * Number(H.height)) && ae.push(de);
    }
    return ae;
  }, Ce = (D, O, B = !0) => {
    const [H] = se(D);
    if (!H)
      return !1;
    const j = sa(H, O);
    return B && j > 0 || j >= Number(H.width) * Number(H.height);
  }, Ee = (D) => {
    const { viewport: O, dimensions: B, d3Zoom: H, d3Selection: j, translateExtent: oe } = e;
    if (!H || !j || !D.x && !D.y)
      return !1;
    const ae = ur.translate(O.x + D.x, O.y + D.y).scale(O.zoom), de = [
      [0, 0],
      [B.width, B.height]
    ], pe = H.constrain()(ae, de, oe), xe = e.viewport.x !== pe.x || e.viewport.y !== pe.y || e.viewport.zoom !== pe.k;
    return H.transform(j, pe), xe;
  }, le = (D) => {
    const O = D instanceof Function ? D(e) : D, B = [
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
    H && (O.modelValue && H.push(...O.modelValue), O.nodes && H.push(...O.nodes), O.edges && H.push(...O.edges), C(H));
    const j = () => {
      et(O.maxZoom) && $(O.maxZoom), et(O.minZoom) && A(O.minZoom), et(O.translateExtent) && _(O.translateExtent);
    };
    for (const oe of Object.keys(O)) {
      const ae = oe, de = O[ae];
      ![...jb, ...B].includes(ae) && et(de) && (e[ae] = de);
    }
    Si(() => e.d3Zoom).not.toBeNull().then(j), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: C,
    setNodes: M,
    setEdges: I,
    addNodes: q,
    addEdges: E,
    removeNodes: F,
    removeEdges: P,
    findNode: u,
    findEdge: c,
    updateEdge: R,
    updateEdgeData: x,
    updateNode: ne,
    updateNodeData: fe,
    applyEdgeChanges: Q,
    applyNodeChanges: V,
    addSelectedElements: h,
    addSelectedNodes: m,
    addSelectedEdges: p,
    setMinZoom: A,
    setMaxZoom: $,
    setTranslateExtent: _,
    setNodeExtent: y,
    setPaneClickDistance: S,
    removeSelectedElements: w,
    removeSelectedNodes: g,
    removeSelectedEdges: k,
    startConnection: be,
    updateConnection: _e,
    endConnection: re,
    setInteractive: L,
    setState: le,
    getIntersectingNodes: me,
    getIncomers: a,
    getOutgoers: s,
    getConnectedEdges: l,
    getHandleConnections: d,
    isNodeIntersecting: Ce,
    panBy: Ee,
    fitView: (D) => r.value.fitView(D),
    zoomIn: (D) => r.value.zoomIn(D),
    zoomOut: (D) => r.value.zoomOut(D),
    zoomTo: (D, O) => r.value.zoomTo(D, O),
    setViewport: (D, O) => r.value.setViewport(D, O),
    setTransform: (D, O) => r.value.setTransform(D, O),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (D, O, B) => r.value.setCenter(D, O, B),
    fitBounds: (D, O) => r.value.fitBounds(D, O),
    project: (D) => r.value.project(D),
    screenToFlowCoordinate: (D) => r.value.screenToFlowCoordinate(D),
    flowToScreenCoordinate: (D) => r.value.flowToScreenCoordinate(D),
    toObject: () => {
      const D = [], O = [];
      for (const B of e.nodes) {
        const {
          computedPosition: H,
          handleBounds: j,
          selected: oe,
          dimensions: ae,
          isParent: de,
          resizing: pe,
          dragging: xe,
          events: ze,
          ...Be
        } = B;
        D.push(Be);
      }
      for (const B of e.edges) {
        const { selected: H, sourceNode: j, targetNode: oe, events: ae, ...de } = B;
        O.push(de);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: D,
          edges: O,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (D) => new Promise((O) => {
      const { nodes: B, edges: H, position: j, zoom: oe, viewport: ae } = D;
      B && M(B), H && I(H);
      const [de, pe] = ae?.x && ae?.y ? [ae.x, ae.y] : j ?? [null, null];
      if (de && pe) {
        const xe = ae?.zoom || oe || e.viewport.zoom;
        return Si(() => r.value.viewportInitialized).toBe(!0).then(() => {
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
      const D = lp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const O = ur.translate(D.defaultViewport.x ?? 0, D.defaultViewport.y ?? 0).scale(qn(D.defaultViewport.zoom ?? 1, D.minZoom, D.maxZoom)), B = e.viewportRef.getBoundingClientRect(), H = [
          [0, 0],
          [B.width, B.height]
        ], j = e.d3Zoom.constrain()(O, H, D.translateExtent);
        e.d3Zoom.transform(e.d3Selection, j);
      }
      le(D);
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
    const n = uh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = Ve(() => n.type ?? "source"), o = Ve(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: s,
      connectionClickStartHandle: l,
      connectionEndHandle: d,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: v
    } = qe(), { id: b, node: m, nodeEl: p, connectedEdges: h } = sp(), g = G(), k = Ve(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), w = Ve(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), A = Ve(
      () => {
        var I, C, q, E, F, P;
        return ((I = s.value) == null ? void 0 : I.nodeId) === b && ((C = s.value) == null ? void 0 : C.id) === e.id && ((q = s.value) == null ? void 0 : q.type) === r.value || ((E = d.value) == null ? void 0 : E.nodeId) === b && ((F = d.value) == null ? void 0 : F.id) === e.id && ((P = d.value) == null ? void 0 : P.type) === r.value;
      }
    ), $ = Ve(
      () => {
        var I, C, q;
        return ((I = l.value) == null ? void 0 : I.nodeId) === b && ((C = l.value) == null ? void 0 : C.id) === e.id && ((q = l.value) == null ? void 0 : q.type) === r.value;
      }
    ), { handlePointerDown: _, handleClick: y } = ap({
      nodeId: b,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), S = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((I) => {
      const C = I[`${r.value}Handle`];
      return I[r.value] !== b ? !1 : C ? C === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((I) => {
      const C = I[`${r.value}Handle`];
      return I[r.value] !== b ? !1 : C ? C === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(m, h.value) : et(e.connectable) ? e.connectable : c.value);
    Ke(() => {
      var I;
      if (!m.dimensions.width || !m.dimensions.height)
        return;
      const C = (I = m.handleBounds[r.value]) == null ? void 0 : I.find((V) => V.id === e.id);
      if (!u.value || C)
        return;
      const q = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !g.value || !q || !e.id)
        return;
      const E = p.value.getBoundingClientRect(), F = g.value.getBoundingClientRect(), P = window.getComputedStyle(q), { m22: R } = new window.DOMMatrixReadOnly(P.transform), x = {
        id: e.id,
        position: e.position,
        x: (F.left - E.left) / R,
        y: (F.top - E.top) / R,
        type: r.value,
        nodeId: b,
        ...za(g.value)
      };
      m.handleBounds[r.value] = [...m.handleBounds[r.value] ?? [], x];
    });
    function L(I) {
      const C = hl(I);
      S.value && k.value && (C && I.button === 0 || !C) && _(I);
    }
    function M(I) {
      !b || !l.value && !k.value || S.value && y(I);
    }
    return t({
      handleClick: y,
      handlePointerDown: _,
      onClick: M,
      onPointerDown: L
    }), (I, C) => (z(), T("div", {
      ref_key: "handle",
      ref: g,
      "data-id": `${N(a)}-${N(b)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": N(b),
      "data-handlepos": I.position,
      class: X(["vue-flow__handle", [
        `vue-flow__handle-${I.position}`,
        `vue-flow__handle-${e.id}`,
        N(f),
        N(v),
        r.value,
        {
          connectable: S.value,
          connecting: $.value,
          connectablestart: k.value,
          connectableend: w.value,
          connectionindicator: S.value && (k.value && !A.value || w.value && A.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: M
    }, [
      Ye(I.$slots, "default", { id: I.id })
    ], 42, Gb));
  }
}), Ca = function({
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
    $e(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? $e(l) : $e(ve, [l]),
    $e(ut, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Ca.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ca.inheritAttrs = !1;
Ca.compatConfig = { MODE: 3 };
const Xb = Ca, Aa = function({
  targetPosition: e = ue.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    $e(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? $e(a) : $e(ve, [a])
  ];
};
Aa.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Aa.inheritAttrs = !1;
Aa.compatConfig = { MODE: 3 };
const Yb = Aa, Ta = function({
  sourcePosition: e = ue.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? $e(a) : $e(ve, [a]),
    $e(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Ta.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Ta.inheritAttrs = !1;
Ta.compatConfig = { MODE: 3 };
const Kb = Ta, Zb = ["transform"], Jb = ["width", "height", "x", "y", "rx", "ry"], Qb = ["y"], ex = {
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
    const t = G({ x: 0, y: 0, width: 0, height: 0 }), n = G(null), r = J(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
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
      i("text", xa(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Ye(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (z(), Oe(Rt(a.label), { key: 0 })) : (z(), T(ve, { key: 1 }, [
            Se(U(a.label), 1)
          ], 64))
        ])
      ], 16, Qb)
    ], 8, Zb));
  }
}), nx = ["id", "d", "marker-end", "marker-start"], rx = ["d", "stroke-width"], ox = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, io = /* @__PURE__ */ Fe({
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
    const n = G(null), r = G(null), o = G(null), a = fh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (s, l) => (z(), T(ve, null, [
      i("path", xa(N(a), {
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
function zo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Bu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let s, l;
  switch (e) {
    case ue.Left:
      s = t - zo(t - r, a), l = n;
      break;
    case ue.Right:
      s = t + zo(r - t, a), l = n;
      break;
    case ue.Top:
      s = t, l = n - zo(n - o, a);
      break;
    case ue.Bottom:
      s = t, l = n + zo(o - n, a);
      break;
  }
  return [s, l];
}
function ml(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ue.Top,
    curvature: l = 0.25
  } = e, [d, u] = Bu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [c, f] = Bu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [v, b, m, p] = cp({
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
    m,
    p
  ];
}
function Lu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
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
  } = e, [l, d] = Lu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, c] = Lu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, v, b, m] = cp({
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
    m
  ];
}
const Uu = {
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
function Vu(e, t) {
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
  const s = Uu[t], l = Uu[r], d = { x: e.x + s.x * a, y: e.y + s.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, c = ax({
    source: d,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", v = c[f];
  let b, m, p;
  const h = { x: 0, y: 0 }, g = { x: 0, y: 0 }, [k, w, A, $] = up({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * l[f] === -1) {
    m = o.x ?? k, p = o.y ?? w;
    const y = [
      { x: m, y: d.y },
      { x: m, y: u.y }
    ], S = [
      { x: d.x, y: p },
      { x: u.x, y: p }
    ];
    s[f] === v ? b = f === "x" ? y : S : b = f === "x" ? S : y;
  } else {
    const y = [{ x: d.x, y: u.y }], S = [{ x: u.x, y: d.y }];
    if (f === "x" ? b = s.x === v ? S : y : b = s.y === v ? y : S, t === r) {
      const q = Math.abs(e[f] - n[f]);
      if (q <= a) {
        const E = Math.min(a - 1, a - q);
        s[f] === v ? h[f] = (d[f] > e[f] ? -1 : 1) * E : g[f] = (u[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const q = f === "x" ? "y" : "x", E = s[f] === l[q], F = d[q] > u[q], P = d[q] < u[q];
      (s[f] === 1 && (!E && F || E && P) || s[f] !== 1 && (!E && P || E && F)) && (b = f === "x" ? y : S);
    }
    const L = { x: d.x + h.x, y: d.y + h.y }, M = { x: u.x + g.x, y: u.y + g.y }, I = Math.max(Math.abs(L.x - b[0].x), Math.abs(M.x - b[0].x)), C = Math.max(Math.abs(L.y - b[0].y), Math.abs(M.y - b[0].y));
    I >= C ? (m = (L.x + M.x) / 2, p = b[0].y) : (m = b[0].x, p = (L.y + M.y) / 2);
  }
  return [[
    e,
    { x: d.x + h.x, y: d.y + h.y },
    ...b,
    { x: u.x + g.x, y: u.y + g.y },
    n
  ], m, p, A, $];
}
function ix(e, t, n, r) {
  const o = Math.min(Vu(e, t) / 2, Vu(t, n) / 2, r), { x: a, y: s } = t;
  if (e.x === a && a === n.x || e.y === s && s === n.y)
    return `L${a} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${s}Q ${a},${s} ${a},${s + o * c}`;
  }
  const l = e.x < n.x ? 1 : -1, d = e.y < n.y ? -1 : 1;
  return `L ${a},${s + o * d}Q ${a},${s} ${a + o * l},${s}`;
}
function Mi(e) {
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
  } = e, [f, v, b, m, p] = sx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: s,
    center: { x: d, y: u },
    offset: c
  });
  return [f.reduce((g, k, w) => {
    let A;
    return w > 0 && w < f.length - 1 ? A = ix(f[w - 1], k, f[w + 1], l) : A = `${w === 0 ? "M" : "L"}${k.x} ${k.y}`, g += A, g;
  }, ""), v, b, m, p];
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
      return $e(io, {
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
      const [n, r, o] = Mi({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return $e(io, {
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
    return () => $e(fp, { ...e, ...t, borderRadius: 0 });
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
      const [n, r, o] = ml({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return $e(io, {
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
      return $e(io, {
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
    }, h = Object.keys(p);
    for (const g of e.edges)
      g.type && !h.includes(g.type) && (p[g.type] = g.type);
    return p;
  }), s = J(() => {
    const p = {
      ...yx,
      ...e.nodeTypes
    }, h = Object.keys(p);
    for (const g of e.nodes)
      g.type && !h.includes(g.type) && (p[g.type] = g.type);
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
      for (const h of e.edges) {
        const g = t.value.get(h.source), k = t.value.get(h.target);
        vb({
          sourcePos: g.computedPosition || { x: 0, y: 0 },
          targetPos: k.computedPosition || { x: 0, y: 0 },
          sourceWidth: g.dimensions.width,
          sourceHeight: g.dimensions.height,
          targetWidth: k.dimensions.width,
          targetHeight: k.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && p.push(h);
      }
      return p;
    }
    return e.edges;
  }), u = J(() => [...l.value, ...d.value]), c = J(() => {
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
    ...c.value,
    ...f.value
  ]), b = J(() => {
    const p = [];
    for (const h of e.nodes)
      h.dimensions.width && h.dimensions.height && h.handleBounds !== void 0 && p.push(h);
    return p;
  }), m = J(
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
    areNodesInitialized: m
  };
}
class On {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = gr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? On.instance;
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
    const r = lp(), o = mr(r), a = {};
    for (const [v, b] of Object.entries(o.hooks)) {
      const m = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      a[m] = b.on;
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
function qe(e) {
  const t = On.getInstance(), n = jd(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, s = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const d = vr(Fu, null);
    typeof d < "u" && d !== null && (!s || d.id === s) && (l = d);
  }
  if (l || s && (l = t.get(s)), !l || s && l.id !== s) {
    const d = a ?? t.getId(), u = t.create(d, o);
    l = u, (n ?? Hd(!0)).run(() => {
      Ie(
        u.applyDefault,
        (f, v, b) => {
          const m = (h) => {
            u.applyNodeChanges(h);
          }, p = (h) => {
            u.applyEdgeChanges(h);
          };
          f ? (u.onNodesChange(m), u.onEdgesChange(p)) : (u.hooks.value.nodesChange.off(m), u.hooks.value.edgesChange.off(p)), b(() => {
            u.hooks.value.nodesChange.off(m), u.hooks.value.edgesChange.off(p);
          });
        },
        { immediate: !0 }
      ), Hr(() => {
        if (l) {
          const f = t.get(l.id);
          f ? f.$destroy() : so(`No store instance found for id ${l.id} in storage.`);
        }
      });
    });
  } else
    r && l.setState(o);
  if (n && (Bn(Fu, l), n.vueFlowId = l.id), r) {
    const d = gr();
    d?.type.name !== "VueFlow" && l.emits.error(new at(tt.USEVUEFLOW_OPTIONS));
  }
  return l;
}
function wx(e) {
  const { emits: t, dimensions: n } = qe();
  let r;
  Ke(() => {
    const o = () => {
      var a, s;
      if (!e.value || !(((s = (a = e.value).checkVisibility) == null ? void 0 : s.call(a)) ?? !0))
        return;
      const l = za(e.value);
      (l.width === 0 || l.height === 0) && t.error(new at(tt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: l.width || 500, height: l.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), ba(() => {
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
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: s } = qe(), l = ip(), d = G(null), u = op({
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
    const c = J(() => Wf(r.value)), f = J(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function v(m) {
      t.selectionContextMenu({ event: m, nodes: r.value });
    }
    function b(m) {
      a.value || ar[m.key] && (m.preventDefault(), l(
        {
          x: ar[m.key].x,
          y: ar[m.key].y
        },
        m.shiftKey
      ));
    }
    return (m, p) => !N(s) && c.value.width && c.value.height ? (z(), T("div", {
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
      selectionMode: m,
      deleteKeyCode: p,
      multiSelectionKeyCode: h,
      multiSelectionActive: g,
      edgeLookup: k,
      nodeLookup: w,
      connectionLookup: A,
      defaultEdgeOptions: $,
      connectionStartHandle: _,
      panOnDrag: y
    } = qe(), S = an(null), L = an(/* @__PURE__ */ new Set()), M = an(/* @__PURE__ */ new Set()), I = an(null), C = Ve(() => d.value && (e.isSelecting || a.value)), q = Ve(() => _.value !== null);
    let E = !1, F = !1;
    const P = Dr(p, { actInsideInputWithModifier: !1 }), R = Dr(h);
    Ie(P, (re) => {
      re && (v(f.value), b(c.value), u.value = !1);
    }), Ie(R, (re) => {
      g.value = re;
    });
    function x(re, se) {
      return (me) => {
        me.target === se && re?.(me);
      };
    }
    function V(re) {
      if (E || q.value) {
        E = !1;
        return;
      }
      o.paneClick(re), s(), u.value = !1;
    }
    function Q(re) {
      var se;
      if (Array.isArray(y.value) && ((se = y.value) != null && se.includes(2))) {
        re.preventDefault();
        return;
      }
      o.paneContextMenu(re);
    }
    function ne(re) {
      o.paneScroll(re);
    }
    function fe(re) {
      var se, me, Ce;
      if (I.value = ((se = t.value) == null ? void 0 : se.getBoundingClientRect()) ?? null, !d.value || !e.isSelecting || re.button !== 0 || re.target !== S.value || !I.value)
        return;
      (Ce = (me = re.target) == null ? void 0 : me.setPointerCapture) == null || Ce.call(me, re.pointerId);
      const { x: Ee, y: le } = $x(re, I.value);
      F = !0, E = !1, s(), l.value = {
        width: 0,
        height: 0,
        startX: Ee,
        startY: le,
        x: Ee,
        y: le
      }, o.selectionStart(re);
    }
    function be(re) {
      var se;
      if (!I.value || !l.value)
        return;
      E = !0;
      const { x: me, y: Ce } = Xt(re, I.value), { startX: Ee = 0, startY: le = 0 } = l.value, we = {
        startX: Ee,
        startY: le,
        x: me < Ee ? me : Ee,
        y: Ce < le ? Ce : le,
        width: Math.abs(me - Ee),
        height: Math.abs(Ce - le)
      }, ie = L.value, ge = M.value;
      L.value = new Set(
        Xf(n.value, we, r.value, m.value === fl.Partial, !0).map(
          (O) => O.id
        )
      ), M.value = /* @__PURE__ */ new Set();
      const D = ((se = $.value) == null ? void 0 : se.selectable) ?? !0;
      for (const O of L.value) {
        const B = A.value.get(O);
        if (B)
          for (const { edgeId: H } of B.values()) {
            const j = k.value.get(H);
            j && (j.selectable ?? D) && M.value.add(H);
          }
      }
      if (!Du(ie, L.value)) {
        const O = bn(w.value, L.value, !0);
        o.nodesChange(O);
      }
      if (!Du(ge, M.value)) {
        const O = bn(k.value, M.value);
        o.edgesChange(O);
      }
      l.value = we, a.value = !0, u.value = !1;
    }
    function _e(re) {
      var se;
      re.button !== 0 || !F || ((se = re.target) == null || se.releasePointerCapture(re.pointerId), !a.value && l.value && re.target === S.value && V(re), a.value = !1, l.value = null, u.value = L.value.size > 0, o.selectionEnd(re), e.selectionKeyPressed && (E = !1), F = !1);
    }
    return (re, se) => (z(), T("div", {
      ref_key: "container",
      ref: S,
      class: X(["vue-flow__pane vue-flow__container", { selection: re.isSelecting }]),
      onClick: se[0] || (se[0] = (me) => C.value ? void 0 : x(V, S.value)(me)),
      onContextmenu: se[1] || (se[1] = (me) => x(Q, S.value)(me)),
      onWheelPassive: se[2] || (se[2] = (me) => x(ne, S.value)(me)),
      onPointerenter: se[3] || (se[3] = (me) => C.value ? void 0 : N(o).paneMouseEnter(me)),
      onPointerdown: se[4] || (se[4] = (me) => C.value ? fe(me) : N(o).paneMouseMove(me)),
      onPointermove: se[5] || (se[5] = (me) => C.value ? be(me) : N(o).paneMouseMove(me)),
      onPointerup: se[6] || (se[6] = (me) => C.value ? _e(me) : void 0),
      onPointerleave: se[7] || (se[7] = (me) => N(o).paneMouseLeave(me))
    }, [
      Ye(re.$slots, "default"),
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
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = qe(), o = J(() => n.value ? !r.value : !1), a = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
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
      zoomOnScroll: m,
      preventScrolling: p,
      noWheelClassName: h,
      noPanClassName: g,
      emits: k,
      connectionStartHandle: w,
      userSelectionActive: A,
      paneDragging: $,
      d3Zoom: _,
      d3Selection: y,
      d3ZoomHandler: S,
      viewport: L,
      viewportRef: M,
      paneClickDistance: I
    } = qe();
    wx(M);
    const C = an(!1), q = an(!1);
    let E = null, F = !1, P = 0, R = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = Dr(l), V = Dr(s), Q = Dr(a), ne = Ve(
      () => (!V.value || V.value && s.value === !0) && (x.value || f.value)
    ), fe = Ve(() => x.value || d.value), be = Ve(() => s.value === !0 && ne.value !== !0), _e = Ve(
      () => V.value && s.value !== !0 || A.value || be.value
    ), re = Ve(() => w.value !== null);
    Ke(() => {
      if (!M.value) {
        so("Viewport element is missing");
        return;
      }
      const le = M.value, we = le.getBoundingClientRect(), ie = Yy().clickDistance(I.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ge = It(le).call(ie), D = ge.on("wheel.zoom"), O = ur.translate(r.value.x ?? 0, r.value.y ?? 0).scale(qn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [we.width, we.height]
      ], H = ie.constrain()(O, B, o.value);
      ie.transform(ge, H), ie.wheelDelta(ku), _.value = ie, y.value = ge, S.value = D, L.value = { x: H.x, y: H.y, zoom: H.k }, ie.on("start", (j) => {
        var oe;
        if (!j.sourceEvent)
          return null;
        P = j.sourceEvent.button, C.value = !0;
        const ae = Ce(j.transform);
        ((oe = j.sourceEvent) == null ? void 0 : oe.type) === "mousedown" && ($.value = !0), R = ae, k.viewportChangeStart(ae), k.moveStart({ event: j, flowTransform: ae });
      }), ie.on("end", (j) => {
        if (!j.sourceEvent)
          return null;
        if (C.value = !1, $.value = !1, se(ne.value, P ?? 0) && !F && k.paneContextMenu(j.sourceEvent), F = !1, me(R, j.transform)) {
          const oe = Ce(j.transform);
          R = oe, k.viewportChangeEnd(oe), k.moveEnd({ event: j, flowTransform: oe });
        }
      }), ie.filter((j) => {
        var oe;
        const ae = Q.value || m.value, de = b.value && j.ctrlKey, pe = j.button, xe = j.type === "wheel";
        if (pe === 1 && j.type === "mousedown" && (Ee(j, "vue-flow__node") || Ee(j, "vue-flow__edge")))
          return !0;
        if (!ne.value && !ae && !fe.value && !v.value && !b.value || A.value || re.value && !xe || !v.value && j.type === "dblclick" || Ee(j, h.value) && xe || Ee(j, g.value) && (!xe || fe.value && xe && !Q.value) || !b.value && j.ctrlKey && xe || !ae && !fe.value && !de && xe)
          return !1;
        if (!b && j.type === "touchstart" && ((oe = j.touches) == null ? void 0 : oe.length) > 1)
          return j.preventDefault(), !1;
        if (!ne.value && (j.type === "mousedown" || j.type === "touchstart") || be.value && Array.isArray(f.value) && f.value.includes(0) && pe === 0 || Array.isArray(f.value) && !f.value.includes(pe) && (j.type === "mousedown" || j.type === "touchstart"))
          return !1;
        const ze = Array.isArray(f.value) && f.value.includes(pe) || s.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !pe || pe <= 1;
        return (!j.ctrlKey || x.value || xe) && ze;
      }), Ie(
        [A, ne],
        () => {
          A.value && !C.value ? ie.on("zoom", null) : A.value || ie.on("zoom", (j) => {
            L.value = { x: j.transform.x, y: j.transform.y, zoom: j.transform.k };
            const oe = Ce(j.transform);
            F = se(ne.value, P ?? 0), k.viewportChange(oe), k.move({ event: j, flowTransform: oe });
          });
        },
        { immediate: !0 }
      ), Ie(
        [A, fe, u, Q, b, p, h],
        () => {
          fe.value && !Q.value && !A.value ? ge.on(
            "wheel.zoom",
            (j) => {
              if (Ee(j, h.value))
                return !1;
              const oe = Q.value || m.value, ae = b.value && j.ctrlKey;
              if (!(!p.value || fe.value || oe || ae))
                return !1;
              j.preventDefault(), j.stopImmediatePropagation();
              const pe = ge.property("__zoom").k || 1, xe = ia();
              if (!x.value && j.ctrlKey && b.value && xe) {
                const Ga = Gt(j), $n = ku(j), xr = pe * 2 ** $n;
                ie.scaleTo(ge, xr, Ga, j);
                return;
              }
              const ze = j.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Mr.Vertical ? 0 : j.deltaX * ze, Vt = u.value === Mr.Horizontal ? 0 : j.deltaY * ze;
              !xe && j.shiftKey && u.value !== Mr.Vertical && !Be && Vt && (Be = Vt, Vt = 0), ie.translateBy(
                ge,
                -(Be / pe) * c.value,
                -(Vt / pe) * c.value
              );
              const gt = Ce(ge.property("__zoom"));
              E && clearTimeout(E), q.value ? (k.move({ event: j, flowTransform: gt }), k.viewportChange(gt), E = setTimeout(() => {
                k.moveEnd({ event: j, flowTransform: gt }), k.viewportChangeEnd(gt), q.value = !1;
              }, 150)) : (q.value = !0, k.moveStart({ event: j, flowTransform: gt }), k.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof D < "u" && ge.on(
            "wheel.zoom",
            function(j, oe) {
              const ae = !p.value && j.type === "wheel" && !j.ctrlKey, de = Q.value || m.value, pe = b.value && j.ctrlKey;
              if (!de && !d.value && !pe && j.type === "wheel" || ae || Ee(j, h.value))
                return null;
              j.preventDefault(), D.call(this, j, oe);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function se(le, we) {
      return we === 2 && Array.isArray(le) && le.includes(2);
    }
    function me(le, we) {
      return le.x !== we.x && !Number.isNaN(we.x) || le.y !== we.y && !Number.isNaN(we.y) || le.zoom !== we.k && !Number.isNaN(we.k);
    }
    function Ce(le) {
      return {
        x: le.x,
        y: le.y,
        zoom: le.k
      };
    }
    function Ee(le, we) {
      return le.target.closest(`.${we}`);
    }
    return (le, we) => (z(), T("div", {
      ref_key: "viewportRef",
      ref: M,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      Y(Cx, {
        "is-selecting": _e.value,
        "selection-key-pressed": N(V),
        class: X({
          connecting: re.value,
          dragging: N($),
          draggable: N(f) === !0 || Array.isArray(N(f)) && N(f).includes(0)
        })
      }, {
        default: rt(() => [
          Y(Tx, null, {
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
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = qe();
    return (o, a) => (z(), T(ve, null, [
      i("div", {
        id: `${N(Bf)}-${N(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + U(N(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Rx),
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
      }, U(N(r)), 9, Mx))
    ], 64));
  }
});
function Bx() {
  const e = qe();
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
const vl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = ue.Top,
  type: o
}) {
  return $e("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Lx(t, e, r),
    cy: Ux(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
vl.props = ["radius", "centerX", "centerY", "position", "type"];
vl.compatConfig = { MODE: 3 };
const qu = vl, Vx = Fe({
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
      disableKeyboardA11y: m,
      elementsSelectable: p,
      edgesUpdatable: h,
      edgesFocusable: g,
      hooks: k
    } = qe(), w = J(() => c(e.id)), { emit: A, on: $ } = Ob(w.value, a), _ = vr(Pa), y = gr(), S = G(!1), L = G(!1), M = G(""), I = G(null), C = G("source"), q = G(null), E = Ve(
      () => typeof w.value.selectable > "u" ? p.value : w.value.selectable
    ), F = Ve(() => typeof w.value.updatable > "u" ? h.value : w.value.updatable), P = Ve(() => typeof w.value.focusable > "u" ? g.value : w.value.focusable);
    Bn(Cb, e.id), Bn(Ab, q);
    const R = J(() => w.value.class instanceof Function ? w.value.class(w.value) : w.value.class), x = J(() => w.value.style instanceof Function ? w.value.style(w.value) : w.value.style), V = J(() => {
      const O = w.value.type || "default", B = _?.[`edge-${O}`];
      if (B)
        return B;
      let H = w.value.template ?? d.value[O];
      if (typeof H == "string" && y) {
        const j = Object.keys(y.appContext.components);
        j && j.includes(O) && (H = Wd(O, !1));
      }
      return H && typeof H != "string" ? H : (a.error(new at(tt.EDGE_TYPE_MISSING, H)), !1);
    }), { handlePointerDown: Q } = ap({
      nodeId: M,
      handleId: I,
      type: C,
      isValidConnection: v,
      edgeUpdaterType: C,
      onEdgeUpdate: be,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const O = f(w.value.source), B = f(w.value.target), H = "pathOptions" in w.value ? w.value.pathOptions : {};
      if (!O && !B)
        return a.error(new at(tt.EDGE_SOURCE_TARGET_MISSING, w.value.id, w.value.source, w.value.target)), null;
      if (!O)
        return a.error(new at(tt.EDGE_SOURCE_MISSING, w.value.id, w.value.source)), null;
      if (!B)
        return a.error(new at(tt.EDGE_TARGET_MISSING, w.value.id, w.value.target)), null;
      if (!w.value || w.value.hidden || O.hidden || B.hidden)
        return null;
      let j;
      r.value === kn.Strict ? j = O.handleBounds.source : j = [...O.handleBounds.source || [], ...O.handleBounds.target || []];
      const oe = Tu(j, w.value.sourceHandle);
      let ae;
      r.value === kn.Strict ? ae = B.handleBounds.target : ae = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const de = Tu(ae, w.value.targetHandle), pe = oe?.position || ue.Bottom, xe = de?.position || ue.Top, { x: ze, y: Be } = cr(O, oe, pe), { x: Vt, y: gt } = cr(B, de, xe);
      return w.value.sourceX = ze, w.value.sourceY = Be, w.value.targetX = Vt, w.value.targetY = gt, $e(
        "g",
        {
          ref: q,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${V.value === !1 ? "default" : w.value.type || "default"}`,
            l.value,
            R.value,
            {
              updating: S.value,
              selected: w.value.selected,
              animated: w.value.animated,
              inactive: !E.value && !k.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: P.value ? 0 : void 0,
          "aria-label": w.value.ariaLabel === null ? void 0 : w.value.ariaLabel ?? `Edge from ${w.value.source} to ${w.value.target}`,
          "aria-describedby": P.value ? `${Lf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: P.value ? "group" : "img",
          ...w.value.domAttributes,
          onClick: se,
          onContextmenu: me,
          onDblclick: Ce,
          onMouseenter: Ee,
          onMousemove: le,
          onMouseleave: we,
          onKeyDown: P.value ? D : void 0
        },
        [
          L.value ? null : $e(V.value === !1 ? d.value.default : V.value, {
            id: e.id,
            sourceNode: O,
            targetNode: B,
            source: w.value.source,
            target: w.value.target,
            type: w.value.type,
            updatable: F.value,
            selected: w.value.selected,
            animated: w.value.animated,
            label: w.value.label,
            labelStyle: w.value.labelStyle,
            labelShowBg: w.value.labelShowBg,
            labelBgStyle: w.value.labelBgStyle,
            labelBgPadding: w.value.labelBgPadding,
            labelBgBorderRadius: w.value.labelBgBorderRadius,
            data: w.value.data,
            events: { ...w.value.events, ...$ },
            style: x.value,
            markerStart: `url('#${Jr(w.value.markerStart, t)}')`,
            markerEnd: `url('#${Jr(w.value.markerEnd, t)}')`,
            sourcePosition: pe,
            targetPosition: xe,
            sourceX: ze,
            sourceY: Be,
            targetX: Vt,
            targetY: gt,
            sourceHandleId: w.value.sourceHandle,
            targetHandleId: w.value.targetHandle,
            interactionWidth: w.value.interactionWidth,
            ...H
          }),
          [
            F.value === "source" || F.value === !0 ? [
              $e(
                "g",
                {
                  onMousedown: ie,
                  onMouseenter: ne,
                  onMouseout: fe
                },
                $e(qu, {
                  position: pe,
                  centerX: ze,
                  centerY: Be,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            F.value === "target" || F.value === !0 ? [
              $e(
                "g",
                {
                  onMousedown: ge,
                  onMouseenter: ne,
                  onMouseout: fe
                },
                $e(qu, {
                  position: xe,
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
    function fe() {
      S.value = !1;
    }
    function be(O, B) {
      A.update({ event: O, edge: w.value, connection: B });
    }
    function _e(O) {
      A.updateEnd({ event: O, edge: w.value }), L.value = !1;
    }
    function re(O, B) {
      O.button === 0 && (L.value = !0, M.value = B ? w.value.target : w.value.source, I.value = (B ? w.value.targetHandle : w.value.sourceHandle) ?? null, C.value = B ? "target" : "source", A.updateStart({ event: O, edge: w.value }), Q(O));
    }
    function se(O) {
      var B;
      const H = { event: O, edge: w.value };
      E.value && (s.value = !1, w.value.selected && b.value ? (u([w.value]), (B = q.value) == null || B.blur()) : n([w.value])), A.click(H);
    }
    function me(O) {
      A.contextMenu({ event: O, edge: w.value });
    }
    function Ce(O) {
      A.doubleClick({ event: O, edge: w.value });
    }
    function Ee(O) {
      A.mouseEnter({ event: O, edge: w.value });
    }
    function le(O) {
      A.mouseMove({ event: O, edge: w.value });
    }
    function we(O) {
      A.mouseLeave({ event: O, edge: w.value });
    }
    function ie(O) {
      re(O, !0);
    }
    function ge(O) {
      re(O, !1);
    }
    function D(O) {
      var B;
      !m.value && Uf.includes(O.key) && E.value && (O.key === "Escape" ? ((B = q.value) == null || B.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), qx = Vx, jx = Fe({
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
    } = qe(), v = (e = vr(Pa)) == null ? void 0 : e["connection-line"], b = J(() => {
      var k;
      return f((k = r.value) == null ? void 0 : k.nodeId);
    }), m = J(() => {
      var k;
      return f((k = o.value) == null ? void 0 : k.nodeId) ?? null;
    }), p = J(() => ({
      x: (a.value.x - c.value.x) / c.value.zoom,
      y: (a.value.y - c.value.y) / c.value.zoom
    })), h = J(
      () => d.value.markerStart ? `url(#${Jr(d.value.markerStart, t)})` : ""
    ), g = J(
      () => d.value.markerEnd ? `url(#${Jr(d.value.markerEnd, t)})` : ""
    );
    return () => {
      var k, w, A;
      if (!b.value || !r.value)
        return null;
      const $ = r.value.id, _ = r.value.type, y = b.value.handleBounds;
      let S = y?.[_] ?? [];
      if (n.value === kn.Loose) {
        const x = y?.[_ === "source" ? "target" : "source"] ?? [];
        S = [...S, ...x];
      }
      if (!S)
        return null;
      const L = ($ ? S.find((x) => x.id === $) : S[0]) ?? null, M = L?.position ?? ue.Top, { x: I, y: C } = cr(b.value, L, M);
      let q = null;
      m.value && (n.value === kn.Strict ? q = ((k = m.value.handleBounds[_ === "source" ? "target" : "source"]) == null ? void 0 : k.find(
        (x) => {
          var V;
          return x.id === ((V = o.value) == null ? void 0 : V.id);
        }
      )) || null : q = ((w = [...m.value.handleBounds.source ?? [], ...m.value.handleBounds.target ?? []]) == null ? void 0 : w.find(
        (x) => {
          var V;
          return x.id === ((V = o.value) == null ? void 0 : V.id);
        }
      )) || null);
      const E = ((A = o.value) == null ? void 0 : A.position) ?? (M ? Ri[M] : null);
      if (!M || !E)
        return null;
      const F = s.value ?? d.value.type ?? Tn.Bezier;
      let P = "";
      const R = {
        sourceX: I,
        sourceY: C,
        sourcePosition: M,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: E
      };
      return F === Tn.Bezier ? [P] = ml(R) : F === Tn.Step ? [P] = Mi({
        ...R,
        borderRadius: 0
      }) : F === Tn.SmoothStep ? [P] = Mi(R) : F === Tn.SimpleBezier ? [P] = dp(R) : P = `M${I},${C} ${p.value.x},${p.value.y}`, $e(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        $e(
          "g",
          { class: "vue-flow__connection" },
          v ? $e(v, {
            sourceX: I,
            sourceY: C,
            sourcePosition: M,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: E,
            sourceNode: b.value,
            sourceHandle: L,
            targetNode: m.value,
            targetHandle: q,
            markerEnd: g.value,
            markerStart: h.value,
            connectionStatus: u.value
          }) : $e("path", {
            d: P,
            class: [d.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...l.value,
              ...d.value.style
            },
            "marker-end": g.value,
            "marker-start": h.value
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
      t.type === N(oa).ArrowClosed ? (z(), T("polyline", {
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
      t.type === N(oa).Arrow ? (z(), T("polyline", {
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
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = qe(), a = J(() => {
      const s = /* @__PURE__ */ new Set(), l = [], d = (u) => {
        if (u) {
          const c = Jr(u, t);
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
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = qe();
    return (o, a) => (z(), T(ve, null, [
      Y(Zx),
      (z(!0), T(ve, null, Re(N(n), (s) => (z(), T("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: N(gb)(s, N(t), N(r)) })
      }, [
        Y(N(qx), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      Y(N(Hx))
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
      disableKeyboardA11y: m,
      ariaLiveMessage: p,
      snapToGrid: h,
      snapGrid: g,
      nodeDragThreshold: k,
      nodesDraggable: w,
      elementsSelectable: A,
      nodesConnectable: $,
      nodesFocusable: _,
      hooks: y
    } = qe(), S = G(null);
    Bn(rp, S), Bn(np, e.id);
    const L = vr(Pa), M = gr(), I = ip(), { node: C, parentNode: q } = sp(e.id), { emit: E, on: F } = Mb(C, s), P = Ve(() => typeof C.draggable > "u" ? w.value : C.draggable), R = Ve(() => typeof C.selectable > "u" ? A.value : C.selectable), x = Ve(() => typeof C.connectable > "u" ? $.value : C.connectable), V = Ve(() => typeof C.focusable > "u" ? _.value : C.focusable), Q = J(
      () => R.value || P.value || y.value.nodeClick.hasListeners() || y.value.nodeDoubleClick.hasListeners() || y.value.nodeMouseEnter.hasListeners() || y.value.nodeMouseMove.hasListeners() || y.value.nodeMouseLeave.hasListeners()
    ), ne = Ve(() => !!C.dimensions.width && !!C.dimensions.height), fe = J(() => {
      const B = C.type || "default", H = L?.[`node-${B}`];
      if (H)
        return H;
      let j = C.template || f.value[B];
      if (typeof j == "string" && M) {
        const oe = Object.keys(M.appContext.components);
        oe && oe.includes(B) && (j = Wd(B, !1));
      }
      return j && typeof j != "string" ? j : (s.error(new at(tt.NODE_TYPE_MISSING, j)), !1);
    }), be = op({
      id: e.id,
      el: S,
      disabled: () => !P.value,
      selectable: R,
      dragHandle: () => C.dragHandle,
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
        D(B);
      }
    }), _e = J(() => C.class instanceof Function ? C.class(C) : C.class), re = J(() => {
      const B = (C.style instanceof Function ? C.style(C) : C.style) || {}, H = C.width instanceof Function ? C.width(C) : C.width, j = C.height instanceof Function ? C.height(C) : C.height;
      return !B.width && H && (B.width = typeof H == "string" ? H : `${H}px`), !B.height && j && (B.height = typeof j == "string" ? j : `${j}px`), B;
    }), se = Ve(() => Number(C.zIndex ?? re.value.zIndex ?? 0));
    return c((B) => {
      (B.includes(e.id) || !B.length) && Ce();
    }), Ke(() => {
      Ie(
        () => C.hidden,
        (B = !1, H, j) => {
          !B && S.value && (e.resizeObserver.observe(S.value), j(() => {
            S.value && e.resizeObserver.unobserve(S.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Ie([() => C.type, () => C.sourcePosition, () => C.targetPosition], () => {
      un(() => {
        u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
      });
    }), Ie(
      [
        () => C.position.x,
        () => C.position.y,
        () => {
          var B;
          return (B = q.value) == null ? void 0 : B.computedPosition.x;
        },
        () => {
          var B;
          return (B = q.value) == null ? void 0 : B.computedPosition.y;
        },
        () => {
          var B;
          return (B = q.value) == null ? void 0 : B.computedPosition.z;
        },
        se,
        () => C.selected,
        () => C.dimensions.height,
        () => C.dimensions.width,
        () => {
          var B;
          return (B = q.value) == null ? void 0 : B.dimensions.height;
        },
        () => {
          var B;
          return (B = q.value) == null ? void 0 : B.dimensions.width;
        }
      ],
      ([B, H, j, oe, ae, de]) => {
        const pe = {
          x: B,
          y: H,
          z: de + (b.value && C.selected ? 1e3 : 0)
        };
        typeof j < "u" && typeof oe < "u" ? C.computedPosition = db({ x: j, y: oe, z: ae }, pe) : C.computedPosition = pe;
      },
      { flush: "post", immediate: !0 }
    ), Ie([() => C.extent, v], ([B, H], [j, oe]) => {
      (B !== j || H !== oe) && me();
    }), C.extent === "parent" || typeof C.extent == "object" && "range" in C.extent && C.extent.range === "parent" ? Si(() => ne).toBe(!0).then(me) : me(), () => C.hidden ? null : $e(
      "div",
      {
        ref: S,
        "data-id": C.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${fe.value === !1 ? "default" : C.type || "default"}`,
          {
            [n.value]: P.value,
            dragging: be?.value,
            draggable: P.value,
            selected: C.selected,
            selectable: R.value,
            parent: C.isParent
          },
          _e.value
        ],
        style: {
          visibility: ne.value ? "visible" : "hidden",
          zIndex: C.computedPosition.z ?? se.value,
          transform: `translate(${C.computedPosition.x}px,${C.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...re.value
        },
        tabIndex: V.value ? 0 : void 0,
        role: V.value ? "group" : void 0,
        "aria-describedby": m.value ? void 0 : `${Bf}-${t}`,
        "aria-label": C.ariaLabel,
        "aria-roledescription": "node",
        ...C.domAttributes,
        onMouseenter: Ee,
        onMousemove: le,
        onMouseleave: we,
        onContextmenu: ie,
        onClick: D,
        onDblclick: ge,
        onKeydown: O
      },
      [
        $e(fe.value === !1 ? f.value.default : fe.value, {
          id: C.id,
          type: C.type,
          data: C.data,
          events: { ...C.events, ...F },
          selected: C.selected,
          resizing: C.resizing,
          dragging: be.value,
          connectable: x.value,
          position: C.computedPosition,
          dimensions: C.dimensions,
          isValidTargetPos: C.isValidTargetPos,
          isValidSourcePos: C.isValidSourcePos,
          parent: C.parentNode,
          parentNodeId: C.parentNode,
          zIndex: C.computedPosition.z ?? se.value,
          targetPosition: C.targetPosition,
          sourcePosition: C.sourcePosition,
          label: C.label,
          dragHandle: C.dragHandle,
          onUpdateNodeInternals: Ce
        })
      ]
    );
    function me() {
      const B = C.computedPosition, { computedPosition: H, position: j } = pl(
        C,
        h.value ? $a(B, g.value) : B,
        s.error,
        v.value,
        q.value
      );
      (C.computedPosition.x !== H.x || C.computedPosition.y !== H.y) && (C.computedPosition = { ...C.computedPosition, ...H }), (C.position.x !== j.x || C.position.y !== j.y) && (C.position = j);
    }
    function Ce() {
      S.value && u([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
    }
    function Ee(B) {
      be?.value || E.mouseEnter({ event: B, node: C });
    }
    function le(B) {
      be?.value || E.mouseMove({ event: B, node: C });
    }
    function we(B) {
      be?.value || E.mouseLeave({ event: B, node: C });
    }
    function ie(B) {
      return E.contextMenu({ event: B, node: C });
    }
    function ge(B) {
      return E.doubleClick({ event: B, node: C });
    }
    function D(B) {
      R.value && (!r.value || !P.value || k.value > 0) && Ii(
        C,
        a.value,
        d,
        l,
        o,
        !1,
        S.value
      ), E.click({ event: B, node: C });
    }
    function O(B) {
      if (!(Ni(B) || m.value))
        if (Uf.includes(B.key) && R.value) {
          const H = B.key === "Escape";
          Ii(
            C,
            a.value,
            d,
            l,
            o,
            H,
            S.value
          );
        } else P.value && C.selected && ar[B.key] && (B.preventDefault(), p.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~C.position.x}, y: ${~~C.position.y}`, I(
          {
            x: ar[B.key].x,
            y: ar[B.key].y
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
    const { viewportRef: t } = qe(), n = Ve(() => {
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
  const { nodes: t } = qe();
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
    const { getNodes: t, updateNodeDimensions: n, emits: r } = qe(), o = a1(), a = G();
    return Ie(
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
    }), ba(() => {
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
  const { emits: e } = qe();
  Ke(() => {
    if (tp()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new at(tt.MISSING_STYLES));
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
    const r = e, o = lh(), a = ns(r, "modelValue", n), s = ns(r, "nodes", n), l = ns(r, "edges", n), d = qe(r), u = Lb({ modelValue: a, nodes: s, edges: l }, r, d);
    return Vb(n, d.hooks), Bx(), u1(), Bn(Pa, o), nl(u), t(d), (c, f) => (z(), T("div", {
      ref: N(d).vueFlowRef,
      class: "vue-flow"
    }, [
      Y(Nx, null, {
        default: rt(() => [
          Y(Qx),
          c1,
          Y(l1),
          Ye(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Ye(c.$slots, "default"),
      Y(Fx)
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
    const t = e, { userSelectionActive: n } = qe(), r = J(() => `${t.position}`.split("-"));
    return (o, a) => (z(), T("div", {
      class: X(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: N(n) ? "none" : "all" })
    }, [
      Ye(o.$slots, "default")
    ], 6));
  }
});
var ln = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(ln || {});
const pp = function({ dimensions: e, size: t, color: n }) {
  return $e("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, hp = function({ radius: e, color: t }) {
  return $e("circle", { cx: e, cy: e, r: e, fill: t });
};
ln.Lines + "", ln.Dots + "";
const m1 = {
  [ln.Dots]: "#81818a",
  [ln.Lines]: "#eee"
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
    const { id: t, viewport: n } = qe(), r = J(() => {
      const s = n.value.zoom, [l, d] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * s || 1, d * s || 1], c = e.size * s, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], b = [f * s || 1 + u[0] / 2, v * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: b,
        size: c
      };
    }), o = Ve(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = Ve(() => e.color || e.patternColor || m1[e.variant || ln.Dots]);
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
            s.variant === N(ln).Lines ? (z(), Oe(N(pp), {
              key: 0,
              size: s.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === N(ln).Dots ? (z(), Oe(N(hp), {
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
const $o = /* @__PURE__ */ k1(_1, [["render", E1]]), z1 = {
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
}, V1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), q1 = [
  V1
];
function j1(e, t) {
  return z(), T("svg", U1, q1);
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
    } = qe(), v = Ve(() => n.value || r.value || o.value), b = Ve(() => u.value.zoom <= c.value), m = Ve(() => u.value.zoom >= f.value);
    function p() {
      s(), t("zoomIn");
    }
    function h() {
      l(), t("zoomOut");
    }
    function g() {
      d(e.fitViewParams), t("fitView");
    }
    function k() {
      a(!v.value), t("interactionChange", !v.value);
    }
    return (w, A) => (z(), Oe(N(h1), {
      class: "vue-flow__controls",
      position: w.position
    }, {
      default: rt(() => [
        Ye(w.$slots, "top"),
        w.showZoom ? (z(), T(ve, { key: 0 }, [
          Ye(w.$slots, "control-zoom-in", {}, () => [
            Y($o, {
              class: "vue-flow__controls-zoomin",
              disabled: m.value,
              onClick: p
            }, {
              default: rt(() => [
                Ye(w.$slots, "icon-zoom-in", {}, () => [
                  (z(), Oe(Rt(N(A1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Ye(w.$slots, "control-zoom-out", {}, () => [
            Y($o, {
              class: "vue-flow__controls-zoomout",
              disabled: b.value,
              onClick: h
            }, {
              default: rt(() => [
                Ye(w.$slots, "icon-zoom-out", {}, () => [
                  (z(), Oe(Rt(N(I1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : ee("", !0),
        w.showFitView ? Ye(w.$slots, "control-fit-view", { key: 1 }, () => [
          Y($o, {
            class: "vue-flow__controls-fitview",
            onClick: g
          }, {
            default: rt(() => [
              Ye(w.$slots, "icon-fit-view", {}, () => [
                (z(), Oe(Rt(N(L1))))
              ])
            ]),
            _: 3
          })
        ]) : ee("", !0),
        w.showInteractive ? Ye(w.$slots, "control-interactive", { key: 2 }, () => [
          w.showInteractive ? (z(), Oe($o, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: k
          }, {
            default: rt(() => [
              v.value ? Ye(w.$slots, "icon-unlock", { key: 0 }, () => [
                (z(), Oe(Rt(N(K1))))
              ]) : ee("", !0),
              v.value ? ee("", !0) : Ye(w.$slots, "icon-lock", { key: 1 }, () => [
                (z(), Oe(Rt(N(H1))))
              ])
            ]),
            _: 3
          })) : ee("", !0)
        ]) : ee("", !0),
        Ye(w.$slots, "default")
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
    }), d = J(() => ({
      stroke: l.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, c) => (z(), T(ve, null, [
      Y(N(io), {
        id: e.id,
        path: o.value[0],
        style: vt(d.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      Y(N(o1), null, {
        default: rt(() => [
          i("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(a.value)
          }, [
            l.value.label ? (z(), T("span", {
              key: 0,
              class: X(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, U(l.value.label), 3)) : ee("", !0),
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
}, Dn = [
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
function Lo(e) {
  return Dn.find((t) => t.eventClass === e)?.label || e || "—";
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
  { value: "reply_matches", label: "💬 Resposta do cliente (contém / exato / maiúsculas e minúsculas)" },
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
function la(e) {
  return sw[e] || "minutos";
}
function xn(e) {
  return ew.find((t) => t.type === e)?.label || e;
}
function xp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "", match_mode: "contains", case_sensitive: !1, ignore_accents: !0 } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400, filter_reply: !1, match_mode: "contains", match_text: "", case_sensitive: !1, ignore_accents: !0 } : {};
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
}, xw = { key: 2 }, ww = ["disabled"], _w = { class: "space-y-2" }, kw = ["onUpdate:modelValue"], Sw = ["value"], Ew = ["onUpdate:modelValue"], zw = ["onUpdate:modelValue"], $w = ["value"], Pw = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], Aw = ["onUpdate:modelValue"], Tw = ["onUpdate:modelValue"], Ow = ["onUpdate:modelValue"], Nw = ["onClick"], Rw = { class: "grid grid-cols-2 gap-2" }, Iw = { class: "space-y-3" }, Mw = ["onUpdate:modelValue"], Dw = ["onUpdate:modelValue"], Fw = ["onUpdate:modelValue"], Bw = ["onClick"], Lw = ["onClick"], Uw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Vw = ["onClick"], qw = { class: "grid grid-cols-2 gap-2" }, jw = { class: "space-y-2" }, Hw = ["onUpdate:modelValue", "placeholder"], Gw = ["onClick"], Ww = ["max"], Xw = {
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
    const t = e, n = G(!1), r = G(""), o = G([]), a = G("list"), s = (_) => ["image", "video", "audio", "document"].includes(_), l = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function d(_, y) {
      t.data[_] = `${t.data[_] || ""}${y}`;
    }
    async function u(_, y = "media_url", S = "mime_type") {
      const L = _.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const M = await Ae.uploadMedia(L);
          t.data[y] = M.url, S && (t.data[S] = M.mime_type);
        } catch (M) {
          r.value = M.message;
        } finally {
          n.value = !1, _.target.value = "";
        }
      }
    }
    const c = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, v = (_) => {
      t.data.buttons = c.value.filter((y, S) => S !== _);
    }, b = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), m = () => {
      t.data.sections = [...b.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = (_) => {
      t.data.sections = b.value.filter((y, S) => S !== _);
    }, h = (_) => {
      _.rows = [..._.rows || [], { title: "", description: "" }];
    }, g = (_, y) => {
      _.rows = (_.rows || []).filter((S, L) => L !== y);
    }, k = J(() => Array.isArray(t.data.options) ? t.data.options : []), w = () => {
      t.data.options = [...k.value, ""];
    }, A = (_) => {
      t.data.options = k.value.filter((y, S) => S !== _);
    };
    async function $() {
      try {
        o.value = (await Ae.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && $();
    }), (_, y) => (z(), T("div", uw, [
      i("div", null, [
        i("label", {
          class: X(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        te(i("select", {
          id: "zr-mode",
          "onUpdate:modelValue": y[0] || (y[0] = (S) => e.data.mode = S),
          class: X(Te)
        }, [
          (z(!0), T(ve, null, Re(N(tw), (S) => (z(), T("option", {
            key: S.value,
            value: S.value
          }, U(S.label), 9, cw))), 128))
        ], 512), [
          [ot, e.data.mode]
        ])
      ]),
      e.showRecipient ? (z(), T(ve, { key: 0 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          te(i("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": y[1] || (y[1] = (S) => e.data.recipient_type = S),
            class: X(Te)
          }, [
            (z(!0), T(ve, null, Re(N(ow), (S) => (z(), T("option", {
              key: S.value,
              value: S.value
            }, U(S.label), 9, dw))), 128))
          ], 512), [
            [ot, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (z(), T("div", fw, [
          i("label", {
            class: X(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          te(i("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": y[2] || (y[2] = (S) => e.data.custom_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: X(Te)
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
            class: X(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? te((z(), T("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": y[3] || (y[3] = (S) => e.data.group_id = S),
            class: X(Te)
          }, [
            y[30] || (y[30] = i("option", { value: "" }, "Selecione o grupo…", -1)),
            (z(!0), T(ve, null, Re(o.value, (S) => (z(), T("option", {
              key: S.id,
              value: S.id
            }, U(S.name), 9, hw))), 128))
          ], 512)), [
            [ot, e.data.group_id]
          ]) : te((z(), T("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": y[4] || (y[4] = (S) => e.data.group_id = S),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: X(Te)
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
            onClick: y[5] || (y[5] = (S) => a.value = a.value === "list" ? "manual" : "list")
          }, U(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : ee("", !0)
      ], 64)) : ee("", !0),
      e.data.mode === "text" || s(e.data.mode) ? (z(), T(ve, { key: 1 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-text"
          }, U(s(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          te(i("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": y[6] || (y[6] = (S) => e.data.text = S),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: X([Te, "font-mono leading-relaxed"])
          }, null, 2), [
            [ye, e.data.text]
          ]),
          i("div", mw, [
            (z(!0), T(ve, null, Re(e.variables, (S) => (z(), T("button", {
              key: S.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: S.label,
              onClick: (L) => d("text", S.token)
            }, U(S.token), 9, vw))), 128))
          ])
        ]),
        s(e.data.mode) ? (z(), T("div", gw, [
          i("label", {
            class: X(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          te(i("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": y[7] || (y[7] = (S) => e.data.media_url = S),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: X(Te)
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
          class: X(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        te(i("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": y[8] || (y[8] = (S) => e.data.media_url = S),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: X(Te)
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
            class: X(Ue),
            for: "zr-title"
          }, "Título"),
          te(i("input", {
            id: "zr-title",
            "onUpdate:modelValue": y[9] || (y[9] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          te(i("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": y[10] || (y[10] = (S) => e.data.text = S),
            rows: "3",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          te(i("input", {
            id: "zr-footer",
            "onUpdate:modelValue": y[11] || (y[11] = (S) => e.data.footer = S),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.footer]
          ])
        ]),
        i("div", _w, [
          i("label", {
            class: X(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (z(!0), T(ve, null, Re(c.value, (S, L) => (z(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            te(i("select", {
              "onUpdate:modelValue": (M) => S.type = M,
              class: X(Te)
            }, [
              (z(!0), T(ve, null, Re(N(nw), (M) => (z(), T("option", {
                key: M.value,
                value: M.value
              }, U(M.label), 9, Sw))), 128))
            ], 8, kw), [
              [ot, S.type]
            ]),
            S.type === "pix" ? (z(), T(ve, { key: 0 }, [
              te(i("input", {
                "onUpdate:modelValue": (M) => S.name = M,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: X(Te)
              }, null, 8, Ew), [
                [ye, S.name]
              ]),
              te(i("select", {
                "onUpdate:modelValue": (M) => S.keyType = M,
                class: X(Te)
              }, [
                y[31] || (y[31] = i("option", { value: "" }, "Tipo de chave PIX", -1)),
                (z(!0), T(ve, null, Re(N(rw), (M) => (z(), T("option", {
                  key: M.value,
                  value: M.value
                }, U(M.label), 9, $w))), 128))
              ], 8, zw), [
                [ot, S.keyType]
              ]),
              te(i("input", {
                "onUpdate:modelValue": (M) => S.key = M,
                type: "text",
                placeholder: "Chave PIX",
                class: X(Te)
              }, null, 8, Pw), [
                [
                  ye,
                  S.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              y[32] || (y[32] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (z(), T(ve, { key: 1 }, [
              te(i("input", {
                "onUpdate:modelValue": (M) => S.displayText = M,
                type: "text",
                placeholder: "Texto do botão",
                class: X(Te)
              }, null, 8, Cw), [
                [ye, S.displayText]
              ]),
              S.type === "url" ? te((z(), T("input", {
                key: 0,
                "onUpdate:modelValue": (M) => S.url = M,
                type: "url",
                placeholder: "https://…",
                class: X(Te)
              }, null, 8, Aw)), [
                [
                  ye,
                  S.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : ee("", !0),
              S.type === "call" ? te((z(), T("input", {
                key: 1,
                "onUpdate:modelValue": (M) => S.phoneNumber = M,
                type: "text",
                placeholder: "+5511999998888",
                class: X(Te)
              }, null, 8, Tw)), [
                [
                  ye,
                  S.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : ee("", !0),
              S.type === "copy" ? te((z(), T("input", {
                key: 2,
                "onUpdate:modelValue": (M) => S.copyCode = M,
                type: "text",
                placeholder: "Código a copiar",
                class: X(Te)
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
              onClick: (M) => v(L)
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
            class: X(Ue),
            for: "zr-list-title"
          }, "Título"),
          te(i("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": y[12] || (y[12] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Nossos planos",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          te(i("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": y[13] || (y[13] = (S) => e.data.text = S),
            rows: "3",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", Rw, [
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            te(i("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": y[14] || (y[14] = (S) => e.data.footer = S),
              type: "text",
              class: X(Te)
            }, null, 512), [
              [ye, e.data.footer]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            te(i("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": y[15] || (y[15] = (S) => e.data.button_text = S),
              type: "text",
              placeholder: "Ver Menu",
              class: X(Te)
            }, null, 512), [
              [ye, e.data.button_text]
            ])
          ])
        ]),
        i("div", Iw, [
          i("label", {
            class: X(Ue)
          }, "Seções"),
          (z(!0), T(ve, null, Re(b.value, (S, L) => (z(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            te(i("input", {
              "onUpdate:modelValue": (M) => S.title = M,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: X(Te)
            }, null, 8, Mw), [
              [ye, S.title]
            ]),
            (z(!0), T(ve, null, Re(S.rows, (M, I) => (z(), T("div", {
              key: I,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              te(i("input", {
                "onUpdate:modelValue": (C) => M.title = C,
                type: "text",
                placeholder: "Título da opção",
                class: X(Te)
              }, null, 8, Dw), [
                [ye, M.title]
              ]),
              te(i("input", {
                "onUpdate:modelValue": (C) => M.description = C,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: X(Te)
              }, null, 8, Fw), [
                [ye, M.description]
              ]),
              i("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (C) => g(S, I)
              }, "Remover opção", 8, Bw)
            ]))), 128)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (M) => h(S)
            }, "+ Adicionar opção", 8, Lw),
            i("div", Uw, [
              i("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (M) => p(L)
              }, "Remover seção", 8, Vw)
            ])
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: m
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (z(), T(ve, { key: 5 }, [
        i("div", qw, [
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-lat"
            }, "Latitude"),
            te(i("input", {
              id: "zr-lat",
              "onUpdate:modelValue": y[16] || (y[16] = (S) => e.data.latitude = S),
              type: "text",
              placeholder: "-23.5505",
              class: X(Te)
            }, null, 512), [
              [ye, e.data.latitude]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: X(Ue),
              for: "zr-lng"
            }, "Longitude"),
            te(i("input", {
              id: "zr-lng",
              "onUpdate:modelValue": y[17] || (y[17] = (S) => e.data.longitude = S),
              type: "text",
              placeholder: "-46.6333",
              class: X(Te)
            }, null, 512), [
              [ye, e.data.longitude]
            ])
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          te(i("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": y[18] || (y[18] = (S) => e.data.location_name = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.location_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          te(i("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": y[19] || (y[19] = (S) => e.data.address = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (z(), T(ve, { key: 6 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          te(i("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": y[20] || (y[20] = (S) => e.data.contact_name = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.contact_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          te(i("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": y[21] || (y[21] = (S) => e.data.contact_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.contact_phone]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          te(i("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": y[22] || (y[22] = (S) => e.data.organization = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (z(), T(ve, { key: 7 }, [
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          te(i("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": y[23] || (y[23] = (S) => e.data.question = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.question]
          ])
        ]),
        i("div", jw, [
          i("label", {
            class: X(Ue)
          }, "Opções (mínimo 2)"),
          (z(!0), T(ve, null, Re(k.value, (S, L) => (z(), T("div", {
            key: L,
            class: "flex gap-2"
          }, [
            te(i("input", {
              "onUpdate:modelValue": (M) => k.value[L] = M,
              type: "text",
              class: X(Te),
              placeholder: `Opção ${L + 1}`
            }, null, 8, Hw), [
              [ye, k.value[L]]
            ]),
            k.value.length > 2 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (M) => A(L)
            }, "✕", 8, Gw)) : ee("", !0)
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
          te(i("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": y[24] || (y[24] = (S) => e.data.max_answers = S),
            type: "number",
            min: "1",
            max: k.value.length,
            class: X(Te)
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
            class: X(Ue),
            for: "zr-link-url"
          }, "URL"),
          te(i("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": y[25] || (y[25] = (S) => e.data.url = S),
            type: "url",
            placeholder: "https://…",
            class: X(Te)
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
            class: X(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          te(i("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": y[26] || (y[26] = (S) => e.data.title = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          te(i("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": y[27] || (y[27] = (S) => e.data.description = S),
            type: "text",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.description]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: X(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          te(i("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": y[28] || (y[28] = (S) => e.data.image_url = S),
            type: "url",
            class: X(Te)
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
            class: X(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          te(i("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": y[29] || (y[29] = (S) => e.data.text = S),
            rows: "3",
            class: X(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ])
      ], 64)) : ee("", !0),
      r.value ? (z(), T("p", Xw, U(r.value), 1)) : ee("", !0)
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
function Di(e, t = Ep) {
  return e ? e.replace(Yw, (n, r) => {
    const o = Kw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const Zw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, Jw = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, Qw = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, e_ = { class: "text-xs" }, t_ = { class: "font-bold text-white" }, n_ = { class: "my-4 flex justify-end" }, r_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, o_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, a_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, gl = {
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
    return (a, s) => (z(), T("div", Zw, [
      i("div", Jw, [
        i("div", Qw, U(n.value), 1),
        i("div", e_, [
          i("div", t_, U(e.recipientName || "Cliente"), 1),
          s[0] || (s[0] = i("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      i("div", n_, [
        i("div", r_, [
          o.value ? (z(), T("span", o_, U(o.value), 1)) : ee("", !0),
          Se(" " + U(r.value) + " ", 1),
          i("div", a_, [
            s[1] || (s[1] = i("span", null, "12:00", -1)),
            Y(N(wi), { class: "h-3 w-3 text-sky-400" })
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
  class: "space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3.5"
}, z_ = { class: "space-y-2 pt-1" }, $_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, P_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, C_ = {
  key: 4,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, A_ = {
  key: 5,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, T_ = {
  key: 4,
  class: "space-y-3 p-4"
}, O_ = { class: "flex gap-2" }, N_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, R_ = { class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-2.5" }, I_ = { class: "flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer" }, M_ = {
  key: 0,
  class: "space-y-2.5 pt-1 border-t border-teal-500/10"
}, D_ = { class: "space-y-1.5 pt-0.5" }, F_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, B_ = { class: "flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer" }, L_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, U_ = {
  key: 1,
  class: "space-y-4 p-4"
}, V_ = { class: "flex items-start justify-between gap-2" }, q_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, j_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, bt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Tt = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", H_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G("config");
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
            i("h3", l_, U(N(xn)(e.node.type)), 1),
            i("p", u_, U(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (c) => r("remove-node", e.node.id))
          }, [
            Y(N(Ko), { class: "h-3 w-3" }),
            u[21] || (u[21] = Se(" Excluir ", -1))
          ])) : ee("", !0)
        ]),
        e.node.type === "trigger" ? (z(), T("div", c_, [
          i("div", null, [
            i("label", {
              class: X(Tt)
            }, "Evento"),
            i("input", {
              class: X([bt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, d_),
            u[22] || (u[22] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (z(), T(ve, { key: 1 }, [
          i("div", f_, [
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
          o.value === "preview" ? (z(), T("div", p_, [
            Y(gl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": N(Ep).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (z(), T("div", h_, [
            Y(Sp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (z(), T("div", m_, [
          i("label", {
            class: X(Tt),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          i("div", v_, [
            te(i("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: X(bt),
              onChange: l
            }, null, 544), [
              [
                ye,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            te(i("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (c) => e.node.data.delay_unit = c),
              class: X(bt),
              onChange: l
            }, [...u[23] || (u[23] = [
              i("option", { value: "seconds" }, "Segundos", -1),
              i("option", { value: "minutes" }, "Minutos", -1),
              i("option", { value: "hours" }, "Horas", -1),
              i("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [ot, e.node.data.delay_unit]
            ])
          ]),
          i("p", g_, " Aguarda " + U(e.node.data.delay_value || 0) + " " + U(N(la)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (z(), T("div", y_, [
          i("div", null, [
            i("label", {
              class: X(Tt),
              for: "zr-kind"
            }, "Regra de validação"),
            te(i("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (c) => e.node.data.kind = c),
              class: X(bt)
            }, [
              (z(!0), T(ve, null, Re(N(vp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, b_))), 128))
            ], 512), [
              [ot, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (z(), T("div", x_, [
            i("label", {
              class: X(Tt),
              for: "zr-order-status"
            }, "Status esperado"),
            te(i("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (c) => e.node.data.value = c),
              class: X(bt)
            }, [
              (z(!0), T(ve, null, Re(N(gp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, w_))), 128))
            ], 512), [
              [ot, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (z(), T("div", __, [
            i("label", {
              class: X(Tt),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            te(i("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (c) => e.node.data.value = c),
              class: X(bt)
            }, [
              (z(!0), T(ve, null, Re(N(yp), (c) => (z(), T("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, k_))), 128))
            ], 512), [
              [ot, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (z(), T("div", S_, [
            i("label", {
              class: X(Tt),
              for: "zr-value"
            }, "Classe do evento"),
            te(i("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: X(bt)
            }, null, 512), [
              [
                ye,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : e.node.data.kind === "reply_matches" ? (z(), T("div", E_, [
            u[27] || (u[27] = i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Identificar resposta do cliente", -1)),
            i("div", null, [
              i("label", {
                class: X(Tt),
                for: "zr-reply-mode"
              }, "Modo de correspondência"),
              te(i("select", {
                id: "zr-reply-mode",
                "onUpdate:modelValue": u[9] || (u[9] = (c) => e.node.data.match_mode = c),
                class: X(bt)
              }, [...u[24] || (u[24] = [
                i("option", { value: "contains" }, "Contém o texto", -1),
                i("option", { value: "exact" }, "Texto exato", -1)
              ])], 512), [
                [ot, e.node.data.match_mode]
              ])
            ]),
            i("div", null, [
              i("label", {
                class: X(Tt),
                for: "zr-reply-value"
              }, "Texto esperado"),
              te(i("input", {
                id: "zr-reply-value",
                "onUpdate:modelValue": u[10] || (u[10] = (c) => e.node.data.value = c),
                type: "text",
                placeholder: "Ex: eu quero",
                class: X(bt)
              }, null, 512), [
                [ye, e.node.data.value]
              ])
            ]),
            i("div", z_, [
              i("label", $_, [
                te(i("input", {
                  "onUpdate:modelValue": u[11] || (u[11] = (c) => e.node.data.case_sensitive = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [An, e.node.data.case_sensitive]
                ]),
                u[25] || (u[25] = i("span", null, "Diferenciar maiúsculas e minúsculas", -1))
              ]),
              i("label", P_, [
                te(i("input", {
                  "onUpdate:modelValue": u[12] || (u[12] = (c) => e.node.data.ignore_accents = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [An, e.node.data.ignore_accents]
                ]),
                u[26] || (u[26] = i("span", null, 'Ignorar acentos (ex: "não" = "nao", "é" = "e")', -1))
              ])
            ]),
            u[28] || (u[28] = i("p", { class: "text-[11px] text-teal-700 dark:text-teal-300" }, [
              Se(" Avalia a última mensagem enviada pelo cliente. Segue por "),
              i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
              Se(" se corresponder, ou "),
              i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
              Se(' caso responda outra coisa (ex: "não"). ')
            ], -1))
          ])) : ee("", !0),
          e.node.data.kind === "order_is_paid" ? (z(), T("p", C_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (z(), T("p", A_, [...u[29] || (u[29] = [
            Se(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            Se(" se houver bumps, ou ", -1),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            Se(" se comprou apenas o produto principal. ", -1)
          ])])) : ee("", !0),
          u[30] || (u[30] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Se(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            Se(" e outra do ponto "),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            Se(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (z(), T("div", T_, [
          i("div", null, [
            i("label", {
              class: X(Tt),
              for: "zr-wait-value"
            }, "Tempo máximo de espera"),
            i("div", O_, [
              te(i("input", {
                id: "zr-wait-value",
                "onUpdate:modelValue": u[13] || (u[13] = (c) => e.node.data.delay_value = c),
                type: "number",
                min: "1",
                class: X(bt),
                onChange: l
              }, null, 544), [
                [
                  ye,
                  e.node.data.delay_value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              te(i("select", {
                "onUpdate:modelValue": u[14] || (u[14] = (c) => e.node.data.delay_unit = c),
                class: X(bt),
                onChange: l
              }, [...u[31] || (u[31] = [
                i("option", { value: "seconds" }, "Segundos", -1),
                i("option", { value: "minutes" }, "Minutos", -1),
                i("option", { value: "hours" }, "Horas", -1),
                i("option", { value: "days" }, "Dias", -1)
              ])], 544), [
                [ot, e.node.data.delay_unit]
              ])
            ]),
            i("p", N_, " Espera até " + U(e.node.data.delay_value || 0) + " " + U(N(la)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente na Evolution GO. ", 1)
          ]),
          i("div", R_, [
            i("label", I_, [
              te(i("input", {
                "onUpdate:modelValue": u[15] || (u[15] = (c) => e.node.data.filter_reply = c),
                type: "checkbox",
                class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
              }, null, 512), [
                [An, e.node.data.filter_reply]
              ]),
              u[32] || (u[32] = i("span", null, "Filtrar resposta esperada (opcional)", -1))
            ]),
            e.node.data.filter_reply ? (z(), T("div", M_, [
              i("div", null, [
                i("label", {
                  class: X(Tt),
                  for: "zr-wait-filter-mode"
                }, "Tipo de correspondência"),
                te(i("select", {
                  id: "zr-wait-filter-mode",
                  "onUpdate:modelValue": u[16] || (u[16] = (c) => e.node.data.match_mode = c),
                  class: X(bt)
                }, [...u[33] || (u[33] = [
                  i("option", { value: "contains" }, "Contém o texto", -1),
                  i("option", { value: "exact" }, "Texto exato", -1)
                ])], 512), [
                  [ot, e.node.data.match_mode]
                ])
              ]),
              i("div", null, [
                i("label", {
                  class: X(Tt),
                  for: "zr-wait-filter-text"
                }, "Texto esperado"),
                te(i("input", {
                  id: "zr-wait-filter-text",
                  "onUpdate:modelValue": u[17] || (u[17] = (c) => e.node.data.match_text = c),
                  type: "text",
                  placeholder: "Ex: eu quero",
                  class: X(bt)
                }, null, 512), [
                  [ye, e.node.data.match_text]
                ])
              ]),
              i("div", D_, [
                i("label", F_, [
                  te(i("input", {
                    "onUpdate:modelValue": u[18] || (u[18] = (c) => e.node.data.case_sensitive = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [An, e.node.data.case_sensitive]
                  ]),
                  u[34] || (u[34] = i("span", null, "Diferenciar maiúsculas/minúsculas", -1))
                ]),
                i("label", B_, [
                  te(i("input", {
                    "onUpdate:modelValue": u[19] || (u[19] = (c) => e.node.data.ignore_accents = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [An, e.node.data.ignore_accents]
                  ]),
                  u[35] || (u[35] = i("span", null, 'Ignorar acentos (ex: "não" = "nao")', -1))
                ])
              ]),
              u[36] || (u[36] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, [
                Se(" Apenas respostas que atenderem a este critério ativarão a saída "),
                i("strong", { class: "text-teal-600 dark:text-teal-400" }, "RESPONDEU"),
                Se(". Respostas divergentes continuarão aguardando até o tempo esgotar. ")
              ], -1))
            ])) : ee("", !0)
          ]),
          u[37] || (u[37] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Se(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            Se(" (o cliente mandou uma mensagem) e outra do ponto "),
            i("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            Se(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (z(), T("p", L_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (z(), T("div", U_, [
        i("div", V_, [
          i("div", null, [
            u[38] || (u[38] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            i("p", q_, U(e.edge.source) + " → " + U(e.edge.target), 1)
          ]),
          i("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[20] || (u[20] = (c) => r("remove-edge", e.edge.id))
          }, [
            Y(N(Ko), { class: "h-3 w-3" }),
            u[39] || (u[39] = Se(" Excluir ", -1))
          ])
        ]),
        u[40] || (u[40] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (z(), T("p", j_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, G_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, W_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, X_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, Y_ = { class: "flex items-center gap-2" }, K_ = { class: "mt-6 space-y-4" }, Z_ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, J_ = { class: "mt-2.5 flex items-center gap-2" }, Q_ = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, e2 = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, t2 = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, n2 = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, r2 = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, o2 = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, a2 = { class: "flex items-center gap-3" }, s2 = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, i2 = { class: "flex items-center gap-2" }, l2 = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, u2 = {
  key: 0,
  class: "flex justify-center my-1"
}, c2 = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, d2 = {
  key: 1,
  class: "flex justify-start"
}, f2 = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, p2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, h2 = {
  key: 2,
  class: "flex justify-end"
}, m2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, v2 = { class: "leading-relaxed" }, g2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, y2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, b2 = ["disabled", "placeholder"], x2 = ["disabled"], w2 = {
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
    const s = G(!1), l = G(""), d = G(!1), u = G(null), c = G("");
    function f($, _, y = "contains", S = !1, L = !0) {
      let M = ($ || "").trim(), I = (_ || "").trim();
      return I ? (L && (M = M.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), I = I.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), S || (M = M.toLowerCase(), I = I.toLowerCase()), y === "exact" ? M === I : M.includes(I)) : !0;
    }
    J(() => n.nodes.find(($) => $.id === o.value));
    function v() {
      const $ = /* @__PURE__ */ new Date();
      return `${String($.getHours()).padStart(2, "0")}:${String($.getMinutes()).padStart(2, "0")}`;
    }
    function b() {
      a.value = [], s.value = !1, u.value = null, l.value = "";
      const $ = n.nodes.find((_) => _.type === "trigger");
      if (!$) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: v()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${$.data?.event_class || "Evento do Fluxo"}`,
        time: v()
      }), o.value = $.id, p();
    }
    function m($, _ = null) {
      return n.edges.find((y) => y.source !== $ ? !1 : _ === null ? !0 : (y.sourceHandle === "yes" || y.sourceHandle === "replied" || y.data?.condition === "true" ? "true" : y.sourceHandle === "no" || y.sourceHandle === "timeout" || y.data?.condition === "false" ? "false" : null) === _);
    }
    function p() {
      if (!o.value) return;
      const $ = n.nodes.find((_) => _.id === o.value);
      if ($) {
        if ($.type === "trigger") {
          const _ = m($.id);
          if (!_) return A("Fluxo finalizado após o gatilho.");
          o.value = _.target, h();
          return;
        }
        if ($.type === "send_message") {
          const _ = m($.id);
          if (!_) return A("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if ($.type === "delay") {
          const _ = m($.id);
          if (!_) return A("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if ($.type === "condition") {
          let _ = "false";
          if ($.data?.kind === "reply_matches") {
            const S = $.data?.value || "", L = $.data?.match_mode || "contains", M = !!$.data?.case_sensitive, I = $.data?.ignore_accents !== !1;
            _ = f(c.value, S, L, M, I) ? "true" : "false";
          } else
            _ = d.value ? "true" : "false";
          const y = m($.id, _);
          if (!y) return A(`Fim do fluxo (ramificação ${_ === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = y.target, h();
          return;
        }
        $.type === "end" && A("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const $ = n.nodes.find((_) => _.id === o.value);
      if ($) {
        if ($.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: $.data?.mode || "text",
            text: $.data?.text || $.data?.caption || "Mensagem enviada",
            data: $.data || {},
            time: v()
          }), setTimeout(p, 800);
          return;
        }
        if ($.type === "delay") {
          const _ = $.data?.delay_value || 15, y = $.data?.delay_unit || "minutes";
          u.value = `${_} ${y}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${_} ${y}...`,
            time: v()
          });
          return;
        }
        if ($.type === "condition") {
          if ($.data?.kind === "reply_matches") {
            const _ = $.data?.value || "", y = $.data?.match_mode || "contains", S = !!$.data?.case_sensitive, L = $.data?.ignore_accents !== !1, M = f(c.value, _, y, S, L);
            a.value.push({
              type: "system",
              text: `🔀 Avaliando resposta do cliente: "${c.value || "(vazia)"}" ${y === "exact" ? "igual a" : "contém"} "${_}" -> ${M ? "SIM" : "NÃO"}`,
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
        if ($.type === "wait_reply") {
          s.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: v()
          });
          return;
        }
        $.type === "end" && A("Fluxo concluído.");
      }
    }
    function g() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: v()
      }), p());
    }
    function k() {
      if (!l.value.trim()) return;
      const $ = l.value.trim();
      l.value = "", c.value = $, a.value.push({
        type: "user",
        text: $,
        time: v()
      });
      const _ = n.nodes.find((y) => y.id === o.value);
      if (_ && _.type === "wait_reply") {
        if (_.data?.filter_reply && _.data?.match_text && !f(
          $,
          _.data.match_text,
          _.data.match_mode || "contains",
          !!_.data.case_sensitive,
          _.data.ignore_accents !== !1
        )) {
          a.value.push({
            type: "system",
            text: `⚠️ Resposta "${$}" não atende ao filtro ("${_.data.match_text}"). O fluxo continua aguardando.`,
            time: v()
          });
          return;
        }
        s.value = !1;
        const y = m(_.id, "true");
        if (!y) return A("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = y.target, setTimeout(h, 500);
      }
    }
    function w() {
      s.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: v()
      });
      const $ = n.nodes.find((_) => _.id === o.value);
      if ($ && $.type === "wait_reply") {
        const _ = m($.id, "false");
        if (!_) return A("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = _.target, setTimeout(h, 500);
      }
    }
    function A($) {
      a.value.push({
        type: "system",
        text: `🏁 ${$}`,
        time: v()
      }), o.value = null;
    }
    return Ke(b), ($, _) => (z(), T("div", G_, [
      i("div", W_, [
        i("div", X_, [
          i("div", Y_, [
            Y(N(ol), { class: "h-4 w-4 text-emerald-500" }),
            _[4] || (_[4] = i("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          _[11] || (_[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          i("div", K_, [
            i("div", Z_, [
              _[5] || (_[5] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              _[6] || (_[6] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              i("div", J_, [
                i("button", {
                  type: "button",
                  class: X(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: _[0] || (_[0] = (y) => d.value = !0)
                }, " SIM (Pago) ", 2),
                i("button", {
                  type: "button",
                  class: X(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: _[1] || (_[1] = (y) => d.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (z(), T("div", Q_, [
              i("div", e2, [
                Y(N(sr), { class: "h-4 w-4" }),
                i("span", null, "Aguardando: " + U(u.value), 1)
              ]),
              i("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: g
              }, [
                Y(N(Ph), { class: "h-3.5 w-3.5" }),
                _[7] || (_[7] = i("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : ee("", !0),
            s.value ? (z(), T("div", t2, [
              _[9] || (_[9] = i("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              i("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: w
              }, [..._[8] || (_[8] = [
                i("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : ee("", !0)
          ]),
          i("div", n2, [
            i("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: b
            }, [
              Y(N(Oh), { class: "h-3.5 w-3.5" }),
              _[10] || (_[10] = i("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        i("div", r2, [
          i("div", o2, [
            i("div", a2, [
              _[13] || (_[13] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              i("div", null, [
                i("div", s2, U(e.flow.name), 1),
                _[12] || (_[12] = i("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            i("div", i2, [
              i("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: _[2] || (_[2] = (y) => r("close"))
              }, [
                Y(N(Ot), { class: "h-4 w-4" })
              ])
            ])
          ]),
          i("div", l2, [
            (z(!0), T(ve, null, Re(a.value, (y, S) => (z(), T(ve, { key: S }, [
              y.type === "system" ? (z(), T("div", u2, [
                i("span", c2, U(y.text), 1)
              ])) : y.type === "bot" ? (z(), T("div", d2, [
                i("div", f2, [
                  Y(gl, {
                    text: y.text,
                    mode: y.mode,
                    caption: y.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  i("div", p2, [
                    i("span", null, U(y.time), 1),
                    Y(N(wi), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : y.type === "user" ? (z(), T("div", h2, [
                i("div", m2, [
                  i("p", v2, U(y.text), 1),
                  i("div", g2, [
                    i("span", null, U(y.time), 1),
                    Y(N(wi), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : ee("", !0)
            ], 64))), 128))
          ]),
          i("div", y2, [
            i("form", {
              class: "flex items-center gap-2",
              onSubmit: rn(k, ["prevent"])
            }, [
              te(i("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (y) => l.value = y),
                type: "text",
                disabled: !s.value,
                placeholder: s.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, b2), [
                [ye, l.value]
              ]),
              i("button", {
                type: "submit",
                disabled: !s.value || !l.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                Y(N(Ct), { class: "h-4 w-4" })
              ], 8, x2)
            ], 32)
          ])
        ])
      ])
    ]));
  }
};
function er(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function _2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const k2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function S2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return k2[e]?.[t];
}
function Po(e, t = {}) {
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
    return t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${la(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s`;
  if (e === "condition")
    return t.kind === "order_status_is" ? `Status do pedido é "${gp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${yp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "reply_matches" ? `Resposta ${t.match_mode === "exact" ? "igual a" : "contém"} "${t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : vp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?";
  if (e === "wait_reply") {
    const n = t.delay_value && t.delay_unit ? `${t.delay_value} ${la(t.delay_unit)}` : `${Math.max(0, Number(t.seconds) || 0)}s`;
    if (t.filter_reply && t.match_text) {
      const r = t.match_mode === "exact" ? "igual a" : "contém";
      return `Espera até ${n} • Resposta ${r} "${t.match_text}"`;
    }
    return `Espera até ${n}`;
  }
  return e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function E2(e, t = "") {
  const n = er(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => er(u) && u.id).map((u, c) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + c % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(c / 4) * 170
    },
    data: er(u.data) ? { ...u.data } : {},
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
  const s = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), d = o.filter((u) => er(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, c) => {
    const f = er(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${c}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: S2(s.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: a, edges: d };
}
function z2(e, t) {
  const n = er(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = bp(n.delay_value, n.delay_unit)), n;
}
function $2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function P2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: z2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = $2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function C2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : _2(e),
    type: e,
    position: t,
    data: xp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: xn(e)
  };
}
function st(e) {
  return String(e ?? "").trim();
}
function A2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? st(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : st(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? st(e.url) !== "" : t === "call" ? st(e.phoneNumber) !== "" : t === "copy" ? st(e.copyCode) !== "" : !0;
}
function T2(e) {
  return st(e?.title) !== "";
}
function Fi(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && st(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && st(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(A2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(T2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
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
function O2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, a = st(o.mode) || "text";
    t.push(...Fi(o, `Bloco "Enviar mensagem" (${a})`));
  }
  return t;
}
const N2 = { class: "flex h-full flex-col lg:flex-row" }, R2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, I2 = { class: "mb-4 flex items-center justify-between" }, M2 = { class: "space-y-2" }, D2 = ["onDragstart", "onClick"], F2 = { class: "text-xs font-bold" }, B2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, L2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, U2 = ["disabled"], V2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, q2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, j2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, H2 = { class: "flex-1 text-xs" }, G2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, W2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, X2 = { class: "flex items-center gap-2" }, Y2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, K2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Z2 = { class: "p-3" }, J2 = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, Q2 = { class: "truncate" }, ek = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, tk = { class: "flex items-center gap-2" }, nk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, rk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, ok = { class: "flex items-center gap-1.5" }, ak = ["onClick"], sk = { class: "p-3" }, ik = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, lk = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, uk = {
  key: 1,
  class: "space-y-1"
}, ck = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, dk = { class: "text-[10px] text-zinc-500" }, fk = {
  key: 2,
  class: "space-y-1.5"
}, pk = { class: "text-[11px] leading-snug line-clamp-2" }, hk = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, mk = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, vk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, gk = { class: "flex items-center gap-2" }, yk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, bk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, xk = ["onClick"], wk = { class: "p-3" }, _k = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, kk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Sk = { class: "flex items-center gap-2" }, Ek = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, zk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, $k = ["onClick"], Pk = { class: "p-3 space-y-2.5 pb-12" }, Ck = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, Ak = { class: "line-clamp-2" }, Tk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Ok = { class: "flex items-center gap-2" }, Nk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, Rk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Ik = ["onClick"], Mk = { class: "p-3 space-y-2.5 pb-12" }, Dk = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Fk = { class: "line-clamp-2" }, Bk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, Lk = { class: "flex items-center gap-2" }, Uk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, Vk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, qk = ["onClick"], jk = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = G([]), s = G([]), l = G(null), d = G(null), u = G([]), c = G(!1), f = {
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
    const { onConnect: b, addEdges: m, project: p, fitView: h } = qe(), g = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Ln, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Jl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: sr, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Rr, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: Ql, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Zl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], k = J(() => r.flow?.trigger_event || ""), w = J(() => a.value.find((P) => P.id === l.value) || null), A = J(() => s.value.find((P) => P.id === d.value) || null), $ = {
      type: "zaprei",
      markerEnd: oa.ArrowClosed,
      data: {}
    };
    Ie(
      () => r.flow?.id,
      () => {
        const P = E2(r.flow?.graph_json, k.value);
        a.value = P.nodes, s.value = P.edges, l.value = null, d.value = null, setTimeout(() => h({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), b((P) => {
      m([{
        ...P,
        ...$,
        sourceHandle: P.sourceHandle,
        data: { sourceHandle: P.sourceHandle }
      }]);
    });
    function _(P) {
      l.value = P, d.value = null;
    }
    function y(P) {
      d.value = P, l.value = null;
    }
    function S() {
      l.value = null, d.value = null;
    }
    function L(P, R) {
      if (P === "trigger" && a.value.some((V) => V.type === "trigger"))
        return;
      const x = C2(P, R || { x: 420, y: 320 }, k.value);
      a.value = [...a.value, x], _(x.id);
    }
    function M(P) {
      !P || a.value.find((R) => R.id === P)?.type === "trigger" || (a.value = a.value.filter((R) => R.id !== P), s.value = s.value.filter((R) => R.source !== P && R.target !== P), l.value === P && (l.value = null));
    }
    function I(P) {
      s.value = s.value.filter((R) => R.id !== P), d.value === P && (d.value = null);
    }
    function C(P, R) {
      P.dataTransfer?.setData("application/zaprei-node", R), P.dataTransfer.effectAllowed = "move";
    }
    function q(P) {
      P.preventDefault(), P.dataTransfer.dropEffect = "move";
    }
    function E(P) {
      P.preventDefault();
      const R = P.dataTransfer?.getData("application/zaprei-node");
      if (!R) return;
      const x = P.currentTarget.getBoundingClientRect(), V = p({
        x: P.clientX - x.left,
        y: P.clientY - x.top
      });
      L(R, V);
    }
    function F() {
      const P = P2(a.value, s.value), R = O2(P);
      u.value = R, !R.length && o("save", P);
    }
    return t({
      requestSave: F,
      handleSave: F
    }), (P, R) => (z(), T("div", N2, [
      i("aside", R2, [
        i("div", I2, [
          R[8] || (R[8] = i("div", null, [
            i("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            i("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          i("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: R[0] || (R[0] = (x) => c.value = !0)
          }, [
            Y(N(ol), { class: "h-3.5 w-3.5" }),
            R[7] || (R[7] = i("span", null, "Simulador", -1))
          ])
        ]),
        i("div", M2, [
          (z(), T(ve, null, Re(g, (x) => i("div", {
            key: x.type,
            draggable: "true",
            class: X(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", x.color]),
            onDragstart: (V) => C(V, x.type),
            onClick: (V) => L(x.type)
          }, [
            (z(), Oe(Rt(x.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            i("div", null, [
              i("div", F2, U(x.title), 1),
              i("div", B2, U(x.desc), 1)
            ])
          ], 42, D2)), 64))
        ]),
        i("div", L2, [
          i("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: F
          }, [
            i("span", null, U(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, U2)
        ])
      ]),
      i("main", {
        class: "relative h-full flex-1",
        onDragover: q,
        onDrop: E
      }, [
        Y(vh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: rt(() => [
            u.value.length ? (z(), T("div", V2, [
              i("div", q2, [
                i("div", j2, [
                  Y(N(wa), { class: "h-4 w-4" })
                ]),
                i("div", H2, [
                  R[9] || (R[9] = i("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  i("ul", G2, [
                    (z(!0), T(ve, null, Re(u.value, (x, V) => (z(), T("li", { key: V }, U(x), 1))), 128))
                  ])
                ]),
                i("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: R[1] || (R[1] = (x) => u.value = [])
                }, [
                  Y(N(Ot), { class: "h-4 w-4" })
                ])
              ])
            ])) : ee("", !0)
          ]),
          _: 1
        }),
        Y(N(f1), {
          nodes: a.value,
          "onUpdate:nodes": R[2] || (R[2] = (x) => a.value = x),
          edges: s.value,
          "onUpdate:edges": R[3] || (R[3] = (x) => s.value = x),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": $,
          onNodeClick: R[4] || (R[4] = (x) => _(x.node?.id)),
          onEdgeClick: R[5] || (R[5] = (x) => y(x.edge?.id)),
          onPaneClick: S
        }, {
          "edge-zaprei": rt((x) => [
            Y(Q1, xa(x, { onRemove: I }), null, 16)
          ]),
          "node-trigger": rt((x) => [
            i("div", {
              class: X(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", W2, [
                i("div", X2, [
                  i("div", Y2, [
                    Y(N(Ln), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", K2, U(N(xn)("trigger")), 1)
                ]),
                R[10] || (R[10] = i("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              i("div", Z2, [
                i("div", J2, [
                  R[11] || (R[11] = i("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  i("span", Q2, U(N(Po)("trigger", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": rt((x) => [
            i("div", {
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", ek, [
                i("div", tk, [
                  i("div", nk, [
                    Y(N(Jl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", rk, U(N(xn)("send_message")), 1)
                ]),
                i("div", ok, [
                  i("span", {
                    class: X(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", v(x.data?.mode).color])
                  }, U(v(x.data?.mode).label), 3),
                  i("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: rn((V) => M(x.id), ["stop"])
                  }, [
                    Y(N(Ot), { class: "h-3.5 w-3.5" })
                  ], 8, ak)
                ])
              ]),
              i("div", sk, [
                i("div", ik, [
                  x.data?.mode === "audio" ? (z(), T("div", lk, [
                    Y(N(Ah), { class: "h-3.5 w-3.5" }),
                    R[12] || (R[12] = i("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    R[13] || (R[13] = i("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : x.data?.mode === "poll" ? (z(), T("div", uk, [
                    i("div", ck, "📊 " + U(x.data?.question || "Pergunta da enquete..."), 1),
                    i("div", dk, U((x.data?.options || []).length) + " opções configuradas", 1)
                  ])) : x.data?.mode === "buttons" ? (z(), T("div", fk, [
                    i("p", pk, U(x.data?.text || "Texto da mensagem..."), 1),
                    (x.data?.buttons || []).length ? (z(), T("div", hk, [
                      (z(!0), T(ve, null, Re((x.data?.buttons || []).slice(0, 3), (V, Q) => (z(), T("span", {
                        key: Q,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, U(V.label || `Botão ${Q + 1}`), 1))), 128))
                    ])) : ee("", !0)
                  ])) : (z(), T("div", mk, U(x.data?.text || x.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": rt((x) => [
            i("div", {
              class: X(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Y(N(ut), {
                type: "source",
                position: N(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", vk, [
                i("div", gk, [
                  i("div", yk, [
                    Y(N(sr), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", bk, U(N(xn)("delay")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, xk)
              ]),
              i("div", wk, [
                i("div", _k, [
                  R[14] || (R[14] = i("span", { class: "relative flex h-2 w-2" }, [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    i("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  i("span", null, U(N(Po)("delay", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": rt((x) => [
            i("div", {
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", kk, [
                i("div", Sk, [
                  i("div", Ek, [
                    Y(N(Rr), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", zk, U(N(xn)("condition")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, $k)
              ]),
              i("div", Pk, [
                i("div", Ck, [
                  i("span", Ak, U(N(Po)("condition", x.data)), 1)
                ]),
                R[15] || (R[15] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                Y(N(ut), {
                  id: "yes",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[16] || (R[16] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                Y(N(ut), {
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
              class: X(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Tk, [
                i("div", Ok, [
                  i("div", Nk, [
                    Y(N(Ql), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Rk, U(N(xn)("wait_reply")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Ik)
              ]),
              i("div", Mk, [
                i("div", Dk, [
                  i("span", Fk, U(N(Po)("wait_reply", x.data)), 1)
                ]),
                R[17] || (R[17] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                Y(N(ut), {
                  id: "replied",
                  type: "source",
                  position: N(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[18] || (R[18] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                Y(N(ut), {
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
              class: X(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Y(N(ut), {
                type: "target",
                position: N(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Bk, [
                i("div", Lk, [
                  i("div", Uk, [
                    Y(N(Zl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Vk, U(N(xn)("end")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  Y(N(Ot), { class: "h-3.5 w-3.5" })
                ], 8, qk)
              ]),
              R[19] || (R[19] = i("div", { class: "p-3" }, [
                i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: rt(() => [
            Y(N(w1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            Y(N(J1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      Y(H_, {
        node: w.value,
        edge: A.value,
        onRemoveNode: M,
        onRemoveEdge: I
      }, null, 8, ["node", "edge"]),
      c.value ? (z(), Oe(w2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: s.value,
        onClose: R[6] || (R[6] = (x) => c.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : ee("", !0)
    ]));
  }
}, Hk = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Gk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Wk = { class: "flex items-center gap-3" }, Xk = ["disabled"], Yk = { class: "flex items-center gap-2" }, Kk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Zk = { class: "text-sm font-bold" }, Jk = ["disabled"], Qk = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, zp = {
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
    async function d(u) {
      a.value = !0, s.value = "";
      try {
        await Ae.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (c) {
        s.value = c.message, a.value = !1;
      }
    }
    return (u, c) => (z(), Oe(Gd, { to: "body" }, [
      i("div", Hk, [
        i("header", Gk, [
          i("div", Wk, [
            i("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: a.value,
              onClick: c[0] || (c[0] = (f) => r("close"))
            }, [
              Y(N(Xd), { class: "h-4 w-4 text-emerald-500" }),
              c[1] || (c[1] = i("span", null, "Voltar para Automações", -1))
            ], 8, Xk),
            c[3] || (c[3] = i("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            i("div", Yk, [
              i("div", Kk, [
                Y(N(ef), { class: "h-4 w-4" })
              ]),
              i("div", null, [
                i("div", Zk, U(e.flow.name || "Editor de Fluxo Visual"), 1),
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
            a.value ? (z(), Oe(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Oe(N(Rh), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, U(a.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, Jk)
        ]),
        s.value ? (z(), T("p", Qk, [
          Y(N(wa), { class: "h-4 w-4 shrink-0" }),
          i("span", null, U(s.value), 1)
        ])) : ee("", !0),
        Y(jk, {
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
}, e5 = { class: "truncate" }, t5 = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, n5 = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, r5 = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, o5 = ["checked", "onChange"], a5 = { class: "truncate" }, dr = {
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
      r("update:modelValue", n.modelValue.includes(b) ? n.modelValue.filter((m) => m !== b) : [...n.modelValue, b]);
    }
    function f() {
      r("update:modelValue", []);
    }
    ba(() => document.removeEventListener("click", s, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const b = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${b})`;
    });
    return (b, m) => (z(), T("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      i("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        i("span", e5, U(v.value), 1),
        Y(N(zh), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (z(), T("div", t5, [
        e.options.length ? (z(), T(ve, { key: 1 }, [
          e.matchMode ? (z(), T("div", r5, [
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
              class: X(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
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
              onChange: (h) => c(p.value)
            }, null, 40, o5),
            i("span", a5, U(p.label), 1)
          ]))), 128))
        ], 64)) : (z(), T("p", n5, "Nenhuma opção disponível."))
      ])) : ee("", !0)
    ], 512));
  }
}, s5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, i5 = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, l5 = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, u5 = { class: "flex items-center gap-2.5" }, c5 = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, d5 = { class: "space-y-4 p-5" }, f5 = ["value"], p5 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, h5 = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, m5 = ["disabled"], v5 = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G([]), a = G(!1), s = G(""), l = mr({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Dn[0].eventClass,
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
    return Ke(u), (f, v) => (z(), T("div", s5, [
      i("div", i5, [
        i("div", l5, [
          i("div", u5, [
            i("div", c5, [
              Y(N(of), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          i("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (b) => r("close"))
          }, [
            Y(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", d5, [
          i("div", null, [
            v[6] || (v[6] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            te(i("input", {
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
            te(i("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (b) => l.trigger_event = b),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (z(!0), T(ve, null, Re(N(Dn), (b) => (z(), T("option", {
                key: b.id,
                value: b.eventClass
              }, U(b.label), 9, f5))), 128))
            ], 512), [
              [ot, l.trigger_event]
            ]),
            v[8] || (v[8] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          i("div", null, [
            v[9] || (v[9] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            Y(dr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (b) => l.product_ids = b),
              options: d.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          s.value ? (z(), T("p", p5, U(s.value), 1)) : ee("", !0)
        ]),
        i("div", h5, [
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
          }, U(a.value ? "Salvando…" : "Salvar"), 9, m5)
        ])
      ])
    ]));
  }
}, g5 = [
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
], y5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, b5 = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, x5 = ["onClick"], w5 = { class: "flex items-center justify-between" }, _5 = { class: "text-2xl" }, k5 = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, S5 = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, E5 = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, z5 = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (z(), T("div", y5, [
      n[1] || (n[1] = i("div", { class: "mb-4 flex items-center justify-between" }, [
        i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      i("div", b5, [
        (z(!0), T(ve, null, Re(N(g5), (r) => (z(), T("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          i("div", null, [
            i("div", w5, [
              i("span", _5, U(r.icon), 1),
              i("span", k5, U(r.badge), 1)
            ]),
            i("h3", S5, U(r.title), 1),
            i("p", E5, U(r.description), 1)
          ]),
          n[0] || (n[0] = i("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            i("span", null, "Usar modelo"),
            i("span", null, "→")
          ], -1))
        ], 8, x5))), 128))
      ])
    ]));
  }
}, $5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, P5 = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, C5 = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, A5 = { class: "flex items-center gap-3" }, T5 = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, O5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, N5 = { class: "text-zinc-700 dark:text-zinc-300" }, R5 = { class: "p-6 space-y-4" }, I5 = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, M5 = { class: "flex items-center gap-2 font-bold text-sm" }, D5 = { class: "text-xs" }, F5 = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, B5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, L5 = ["value"], U5 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, V5 = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, q5 = ["disabled"], j5 = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(""), a = G(""), s = G(!1), l = G(""), d = G(!1), u = G("");
    function c(p) {
      const h = String(p || "").replace(/\D/g, "").slice(0, 11);
      return h ? h.length <= 2 ? `(${h}` : h.length <= 6 ? `(${h.slice(0, 2)}) ${h.slice(2)}` : h.length <= 10 ? `(${h.slice(0, 2)}) ${h.slice(2, 6)}-${h.slice(6)}` : `(${h.slice(0, 2)}) ${h.slice(2, 7)}-${h.slice(7, 11)}` : "";
    }
    function f(p) {
      const h = p.target.value;
      o.value = c(h);
    }
    const v = J(() => o.value.replace(/\D/g, "")), b = J(() => v.value.length >= 10 && v.value.length <= 11);
    async function m() {
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
    return (p, h) => (z(), T("div", $5, [
      i("div", P5, [
        i("div", C5, [
          i("div", A5, [
            i("div", T5, [
              Y(N(Ct), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              h[4] || (h[4] = i("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              i("p", O5, [
                h[3] || (h[3] = Se("Fluxo: ", -1)),
                i("strong", N5, U(e.flow.name), 1)
              ])
            ])
          ]),
          i("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (g) => r("close"))
          }, [
            Y(N(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", R5, [
          h[13] || (h[13] = i("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            i("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          d.value ? (z(), T("div", I5, [
            i("div", M5, [
              Y(N(qr), { class: "h-5 w-5 text-emerald-500" }),
              h[5] || (h[5] = i("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            i("p", D5, [
              h[6] || (h[6] = Se(" As mensagens foram enviadas para ", -1)),
              i("strong", null, U(u.value), 1),
              h[7] || (h[7] = Se('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : ee("", !0),
          l.value ? (z(), T("div", F5, U(l.value), 1)) : ee("", !0),
          i("form", {
            class: "space-y-4",
            onSubmit: rn(m, ["prevent"])
          }, [
            i("div", null, [
              h[9] || (h[9] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              i("div", B5, [
                h[8] || (h[8] = i("span", { class: "mr-2 text-xs font-bold text-zinc-500" }, "🇧🇷 +55", -1)),
                i("input", {
                  value: o.value,
                  type: "text",
                  placeholder: "(11) 99999-8888",
                  class: "w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white",
                  onInput: f
                }, null, 40, L5)
              ]),
              h[10] || (h[10] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Digite seu número com DDD (10 ou 11 dígitos). ", -1))
            ]),
            i("div", null, [
              h[11] || (h[11] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Nome do Cliente (para variáveis do fluxo) ", -1)),
              i("div", U5, [
                Y(N(Mh), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                te(i("input", {
                  "onUpdate:modelValue": h[1] || (h[1] = (g) => a.value = g),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [ye, a.value]
                ])
              ]),
              h[12] || (h[12] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                Se(" Substitui as tags "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                Se(" e "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                Se(". ")
              ], -1))
            ])
          ], 32)
        ]),
        i("div", V5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[2] || (h[2] = (g) => r("close"))
          }, U(d.value ? "Concluir" : "Cancelar"), 1),
          i("button", {
            type: "button",
            disabled: !b.value || s.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: m
          }, [
            s.value ? (z(), Oe(N(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Oe(N(Ct), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, U(s.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, q5)
        ])
      ])
    ]));
  }
}, H5 = { class: "space-y-4 text-zinc-900 dark:text-white" }, G5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, W5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, X5 = { class: "flex flex-wrap items-center gap-2" }, Y5 = { class: "relative w-64" }, K5 = ["value"], Z5 = { class: "flex items-center gap-3" }, J5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, Q5 = ["disabled"], eS = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, tS = { class: "grid gap-3 sm:grid-cols-3" }, nS = ["value"], rS = { class: "flex gap-2" }, oS = ["disabled"], aS = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, sS = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, iS = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, lS = {
  key: 4,
  class: "py-10 text-center"
}, uS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, cS = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, dS = { class: "flex items-start justify-between gap-2" }, fS = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, pS = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, hS = ["title", "disabled", "onClick"], mS = { class: "mt-2" }, vS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, gS = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, yS = { class: "flex items-center gap-1" }, bS = ["onClick"], xS = ["disabled", "onClick"], wS = ["disabled", "onClick"], _S = ["disabled", "onClick"], kS = ["onClick"], SS = ["onClick"], ES = {
  __name: "FlowsPanel",
  setup(e) {
    const t = G([]), n = G([]), r = G(!0), o = G(!1), a = G(""), s = G(""), l = G(!1), d = G(""), u = G("all"), c = G(null), f = G(null), v = G(null), b = G({ name: "", trigger_event: Dn[3].eventClass, product_ids: [] }), m = G(!1), p = J(() => {
      const q = d.value.trim().toLowerCase();
      return t.value.filter((E) => u.value !== "all" && E.trigger_event !== u.value ? !1 : !q || `${E.name} ${Lo(E.trigger_event)}`.toLowerCase().includes(q));
    }), h = J(() => n.value.map((q) => ({ value: q.id, label: q.name })));
    function g(q) {
      if (!q || !q.length) return "Todos os produtos";
      const E = q.map((F) => n.value.find((P) => P.id === F)?.name).filter(Boolean);
      return E.length ? E.length > 2 ? `${E.slice(0, 2).join(", ")} +${E.length - 2}` : E.join(", ") : "Todos os produtos";
    }
    async function k() {
      r.value = !0, a.value = "";
      try {
        const [q, E] = await Promise.all([Ae.flows(), Ae.products()]);
        t.value = q.flows || [], n.value = E.products || [];
      } catch (q) {
        a.value = q.message;
      } finally {
        r.value = !1;
      }
    }
    async function w(q) {
      o.value = !0, a.value = "";
      try {
        await q(), await k();
      } catch (E) {
        a.value = E.message;
      } finally {
        o.value = !1;
      }
    }
    function A(q) {
      v.value = q;
    }
    function $({ phone: q }) {
      s.value = `Fluxo "${v.value?.name}" disparado para ${q}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function _() {
      const q = b.value.name.trim() || Lo(b.value.trigger_event);
      return w(async () => {
        await Ae.createFlow({
          name: q,
          trigger_event: b.value.trigger_event,
          product_ids: b.value.product_ids.length ? b.value.product_ids : null,
          is_active: !0,
          graph_json: _p(b.value.trigger_event)
        }), b.value.name = "", b.value.product_ids = [], m.value = !1;
      });
    }
    const y = (q) => w(() => Ae.updateFlow(q.id, { is_active: !q.is_active })), S = (q) => w(() => Ae.duplicateFlow(q.id));
    function L(q) {
      if (window.confirm(`Excluir o fluxo "${q.name}"?`))
        return w(() => Ae.deleteFlow(q.id));
    }
    function M(q) {
      const E = {
        name: q.name,
        trigger_event: q.trigger_event,
        product_ids: q.product_ids,
        graph_json: q.graph_json
      }, F = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), P = URL.createObjectURL(F), R = document.createElement("a");
      R.href = P, R.download = `${(q.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, R.click(), URL.revokeObjectURL(P);
    }
    async function I(q) {
      const E = q.target.files?.[0];
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
          }), s.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await k();
        } catch (F) {
          a.value = F.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, q.target.value = "";
        }
      }
    }
    function C(q) {
      return w(() => Ae.createFlow({
        name: q.title,
        trigger_event: q.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: q.graph(q.eventClass)
      }));
    }
    return Ke(k), (q, E) => (z(), T("div", H5, [
      Y(z5, { onUse: C }),
      i("div", G5, [
        i("div", W5, [
          i("div", X5, [
            i("div", Y5, [
              Y(N(jr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              te(i("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (F) => d.value = F),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [ye, d.value]
              ])
            ]),
            te(i("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (F) => u.value = F),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              E[10] || (E[10] = i("option", { value: "all" }, "Todos os eventos", -1)),
              (z(!0), T(ve, null, Re(N(Dn), (F) => (z(), T("option", {
                key: F.id,
                value: F.eventClass
              }, U(F.label), 9, K5))), 128))
            ], 512), [
              [ot, u.value]
            ])
          ]),
          i("div", Z5, [
            i("span", J5, U(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            i("label", {
              class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              Y(N(af), { class: "h-4 w-4" }),
              i("span", null, U(l.value ? "Importando…" : "Importar"), 1),
              i("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: l.value,
                onChange: I
              }, null, 40, Q5)
            ], 2),
            i("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: E[2] || (E[2] = (F) => m.value = !m.value)
            }, [
              Y(N(rf), { class: "h-4 w-4" }),
              E[11] || (E[11] = i("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        m.value ? (z(), T("div", eS, [
          i("div", tS, [
            i("div", null, [
              E[12] || (E[12] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              te(i("input", {
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
              te(i("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": E[4] || (E[4] = (F) => b.value.trigger_event = F),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (z(!0), T(ve, null, Re(N(Dn), (F) => (z(), T("option", {
                  key: F.id,
                  value: F.eventClass
                }, U(F.label), 9, nS))), 128))
              ], 512), [
                [ot, b.value.trigger_event]
              ])
            ]),
            i("div", null, [
              E[14] || (E[14] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              Y(dr, {
                modelValue: b.value.product_ids,
                "onUpdate:modelValue": E[5] || (E[5] = (F) => b.value.product_ids = F),
                options: h.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          i("div", rS, [
            i("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: _
            }, " Criar fluxo em branco ", 8, oS),
            i("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: E[6] || (E[6] = (F) => m.value = !1)
            }, " Cancelar ")
          ])
        ])) : ee("", !0),
        a.value ? (z(), T("p", aS, U(a.value), 1)) : s.value ? (z(), T("p", sS, U(s.value), 1)) : ee("", !0),
        r.value ? (z(), T("div", iS, [
          Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          E[15] || (E[15] = i("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (z(), T("div", cS, [
          (z(!0), T(ve, null, Re(p.value, (F) => (z(), T("div", {
            key: F.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            i("div", null, [
              i("div", dS, [
                i("div", null, [
                  i("span", fS, U(N(Lo)(F.trigger_event)), 1),
                  i("h3", pS, U(F.name), 1)
                ]),
                i("button", {
                  type: "button",
                  class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", F.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: F.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (P) => y(F)
                }, [
                  i("span", {
                    class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", F.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, hS)
              ]),
              i("div", mS, [
                i("span", vS, U(g(F.product_ids)), 1)
              ])
            ]),
            i("div", gS, [
              i("div", yS, [
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (P) => f.value = F
                }, [
                  Y(N(of), { class: "h-4 w-4" })
                ], 8, bS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (P) => S(F)
                }, [
                  Y(N(Zd), { class: "h-4 w-4" })
                ], 8, xS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (P) => L(F)
                }, [
                  Y(N(Ko), { class: "h-4 w-4" })
                ], 8, wS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (P) => A(F)
                }, [
                  Y(N(Ct), { class: "h-4 w-4" })
                ], 8, _S),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (P) => M(F)
                }, [
                  Y(N(Jd), { class: "h-4 w-4" })
                ], 8, kS)
              ]),
              i("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (P) => c.value = F
              }, [
                Y(N(tf), { class: "h-3.5 w-3.5" }),
                E[18] || (E[18] = i("span", null, "Editar Visual", -1))
              ], 8, SS)
            ])
          ]))), 128))
        ])) : (z(), T("div", lS, [
          i("div", uS, [
            Y(N(Ln), { class: "h-6 w-6" })
          ]),
          E[16] || (E[16] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          E[17] || (E[17] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (z(), Oe(zp, {
        key: 0,
        flow: c.value,
        onClose: E[7] || (E[7] = (F) => c.value = null),
        onSaved: k
      }, null, 8, ["flow"])) : ee("", !0),
      f.value ? (z(), Oe(v5, {
        key: 1,
        flow: f.value,
        onClose: E[8] || (E[8] = (F) => f.value = null),
        onSaved: k
      }, null, 8, ["flow"])) : ee("", !0),
      v.value ? (z(), Oe(j5, {
        key: 2,
        flow: v.value,
        onClose: E[9] || (E[9] = (F) => v.value = null),
        onTested: $
      }, null, 8, ["flow"])) : ee("", !0)
    ]));
  }
}, zS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, $S = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, PS = { class: "flex items-center gap-2" }, CS = ["disabled"], AS = { class: "mt-4 grid grid-cols-3 gap-3" }, TS = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, OS = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, NS = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, RS = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, IS = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, MS = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, DS = { class: "mt-4 flex flex-wrap items-end gap-2" }, FS = { class: "w-48" }, BS = { class: "w-48" }, LS = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, US = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, VS = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, qS = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, jS = {
  key: 3,
  class: "py-10 text-center"
}, HS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, GS = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, WS = { class: "w-full text-left text-xs" }, XS = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, YS = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, KS = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, ZS = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, JS = { class: "px-3 py-2.5" }, QS = { class: "px-3 py-2.5" }, eE = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, tE = ["title"], nE = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, rE = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, oE = { class: "px-3 py-2.5" }, aE = ["onClick"], sE = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = G([]), r = G([]), o = G({ all: 0, buyers: 0, imported: 0 }), a = G(!0), s = G(""), l = G(""), d = G("all"), u = G([]), c = G("or"), f = G([]), v = G(""), b = G(!1), m = J(() => r.value.map(($) => ({ value: $.name, label: $.name }))), p = J(() => {
      const $ = v.value.trim().toLowerCase();
      return n.value.filter((_) => d.value === "buyer" && _.source !== "buyer" || d.value === "imported" && _.source !== "imported" || u.value.length && !(c.value === "and" ? u.value.every((S) => _.products.includes(S)) : _.products.some((S) => u.value.includes(S))) || f.value.length && _.products.some((y) => f.value.includes(y)) ? !1 : !$ || `${_.name} ${_.phone} ${_.email}`.toLowerCase().includes($));
    });
    async function h() {
      a.value = !0, s.value = "";
      try {
        const [$, _] = await Promise.all([Ae.contacts(), Ae.products()]);
        n.value = $.contacts || [], o.value = $.counts || o.value, r.value = _.products || [];
      } catch ($) {
        s.value = $.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(h);
    const g = "\uFEFF";
    function k() {
      const $ = t.map((L) => L.join(",")).join(`\r
`), _ = new Blob([g + $], { type: "text/csv;charset=utf-8" }), y = URL.createObjectURL(_), S = document.createElement("a");
      S.href = y, S.download = "zaprei-modelo-importacao.csv", S.click(), URL.revokeObjectURL(y);
    }
    async function w($) {
      const _ = $.target.files?.[0];
      if (_) {
        b.value = !0, s.value = "", l.value = "";
        try {
          const { imported: y } = await Ae.importContacts(_);
          l.value = `${y} contato(s) importado(s).`, await h();
        } catch (y) {
          s.value = y.message;
        } finally {
          b.value = !1, $.target.value = "";
        }
      }
    }
    async function A($) {
      if (window.confirm(`Remover ${$.name}?`)) {
        s.value = "";
        try {
          await Ae.deleteContact($.id), await h();
        } catch (_) {
          s.value = _.message;
        }
      }
    }
    return ($, _) => (z(), T("div", zS, [
      i("div", $S, [
        _[6] || (_[6] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        i("div", PS, [
          i("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: k
          }, [
            Y(N(Jd), { class: "h-4 w-4" }),
            _[5] || (_[5] = i("span", null, "Baixar exemplo", -1))
          ]),
          i("label", {
            class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": b.value }])
          }, [
            Y(N(af), { class: "h-4 w-4" }),
            i("span", null, U(b.value ? "Importando…" : "Importar CSV"), 1),
            i("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: b.value,
              onChange: w
            }, null, 40, CS)
          ], 2)
        ])
      ]),
      i("div", AS, [
        i("div", TS, [
          i("div", OS, U(o.value.all), 1),
          _[7] || (_[7] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        i("div", NS, [
          i("div", RS, U(o.value.buyers), 1),
          _[8] || (_[8] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        i("div", IS, [
          i("div", MS, U(o.value.imported), 1),
          _[9] || (_[9] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      i("div", DS, [
        i("div", null, [
          _[11] || (_[11] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          te(i("select", {
            "onUpdate:modelValue": _[0] || (_[0] = (y) => d.value = y),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [..._[10] || (_[10] = [
            i("option", { value: "all" }, "Todas as origens", -1),
            i("option", { value: "buyer" }, "Apenas compradores", -1),
            i("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [ot, d.value]
          ])
        ]),
        i("div", FS, [
          _[12] || (_[12] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          Y(dr, {
            modelValue: u.value,
            "onUpdate:modelValue": _[1] || (_[1] = (y) => u.value = y),
            mode: c.value,
            "onUpdate:mode": _[2] || (_[2] = (y) => c.value = y),
            options: m.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        i("div", BS, [
          _[13] || (_[13] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          Y(dr, {
            modelValue: f.value,
            "onUpdate:modelValue": _[3] || (_[3] = (y) => f.value = y),
            options: m.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        te(i("input", {
          "onUpdate:modelValue": _[4] || (_[4] = (y) => v.value = y),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [ye, v.value]
        ]),
        i("span", LS, U(p.value.length) + " de " + U(n.value.length) + " contato(s)", 1)
      ]),
      _[17] || (_[17] = i("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        Se(" O CSV aceita as colunas "),
        i("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        Se(" (máximo de 10 MB). ")
      ], -1)),
      s.value ? (z(), T("p", US, U(s.value), 1)) : l.value ? (z(), T("p", VS, U(l.value), 1)) : ee("", !0),
      a.value ? (z(), T("div", qS, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        _[14] || (_[14] = i("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? (z(), T("div", GS, [
        i("table", WS, [
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
          i("tbody", XS, [
            (z(!0), T(ve, null, Re(p.value, (y) => (z(), T("tr", {
              key: y.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", YS, U(y.name), 1),
              i("td", KS, U(y.phone), 1),
              i("td", ZS, U(y.email || "—"), 1),
              i("td", JS, [
                i("span", {
                  class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", y.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, U(y.origin), 3)
              ]),
              i("td", QS, [
                y.products.length ? (z(), T("div", eE, [
                  (z(!0), T(ve, null, Re(y.products.slice(0, 2), (S) => (z(), T("span", {
                    key: S,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: S
                  }, U(S), 9, tE))), 128)),
                  y.products.length > 2 ? (z(), T("span", nE, "+" + U(y.products.length - 2), 1)) : ee("", !0)
                ])) : (z(), T("span", rE, "—"))
              ]),
              i("td", oE, [
                y.can_delete ? (z(), T("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (S) => A(y)
                }, [
                  Y(N(Ko), { class: "h-3.5 w-3.5" })
                ], 8, aE)) : ee("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", jS, [
        i("div", HS, [
          Y(N(_i), { class: "h-6 w-6" })
        ]),
        _[15] || (_[15] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, iE = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, lE = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, uE = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, cE = { class: "flex items-center gap-3" }, dE = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, fE = { class: "flex items-center gap-2" }, pE = { key: 1 }, hE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, mE = { class: "flex-1 overflow-y-auto p-6" }, vE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, gE = { class: "space-y-2" }, yE = { class: "grid grid-cols-2 gap-3" }, bE = { class: "flex items-center gap-2" }, xE = { class: "flex items-center gap-2" }, wE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, _E = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, kE = ["value"], SE = { class: "space-y-2" }, EE = { class: "grid grid-cols-2 gap-3" }, zE = { class: "flex items-center gap-2" }, $E = { class: "flex items-center gap-2" }, PE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, CE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, AE = ["min"], TE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, OE = { class: "flex items-center justify-between" }, NE = { class: "flex items-center gap-2" }, RE = { class: "text-xs font-bold text-emerald-400" }, IE = {
  key: 1,
  class: "space-y-4"
}, ME = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, DE = { class: "dark space-y-3" }, FE = { class: "relative" }, BE = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, LE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, UE = { class: "text-xs font-normal text-zinc-500" }, VE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, qE = { class: "w-full text-left text-xs" }, jE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, HE = { class: "w-10 px-3 py-2.5 text-center" }, GE = ["checked"], WE = { class: "divide-y divide-zinc-800/60" }, XE = ["onClick"], YE = ["checked", "onChange"], KE = { class: "px-3 py-2" }, ZE = { class: "font-medium text-white" }, JE = { class: "text-[11px] text-zinc-500" }, QE = { class: "px-3 py-2 font-mono text-zinc-300" }, ez = { class: "px-3 py-2" }, tz = { class: "px-3 py-2" }, nz = { class: "flex max-w-[200px] flex-wrap gap-1" }, rz = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, oz = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, az = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, sz = { key: 2 }, iz = {
  key: 0,
  class: "mx-auto max-w-xl space-y-4 py-2"
}, lz = { class: "rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-6" }, uz = { class: "flex items-center gap-3 border-b border-zinc-800 pb-4" }, cz = { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400" }, dz = { class: "text-base font-bold text-white" }, fz = { class: "mt-4 space-y-3 text-xs text-zinc-300" }, pz = { class: "flex justify-between" }, hz = { class: "font-medium text-white" }, mz = { class: "flex justify-between" }, vz = { class: "font-medium text-emerald-400" }, gz = { class: "flex justify-between" }, yz = {
  key: 1,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, bz = { class: "dark" }, xz = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, wz = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, _z = { class: "grid grid-cols-2 gap-3 text-xs" }, kz = { class: "mt-0.5 font-semibold text-white" }, Sz = { class: "mt-0.5 text-base font-black text-emerald-400" }, Ez = { class: "mt-0.5 text-zinc-300" }, zz = { class: "text-xs text-zinc-500" }, $z = {
  key: 0,
  class: "mt-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs font-semibold text-emerald-400"
}, Pz = {
  key: 1,
  class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300"
}, Cz = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, Az = { key: 1 }, Tz = { class: "flex items-center gap-3" }, Oz = ["disabled"], Nz = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = G(1), o = G(!1), a = G(""), s = G([]), l = G([]), d = G([]), u = G(!1), c = G("all"), f = G([]), v = G("or"), b = G([]), m = G(""), p = G({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), h = J(() => d.value.find((R) => R.id === p.value.flow_id)), g = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), k = mp.filter((R) => R.token.startsWith("{{customer."));
    let w = !0;
    Ie(() => p.value.message_data.mode, (R) => {
      if (w) {
        w = !1;
        return;
      }
      Object.assign(p.value.message_data, wp(R));
    });
    const A = J(() => l.value.map((R) => ({ value: R.name, label: R.name }))), $ = J(() => {
      const R = m.value.trim().toLowerCase();
      return s.value.filter((x) => c.value === "buyers" && x.source !== "buyer" || c.value === "imported" && x.source !== "imported" || f.value.length && !(v.value === "and" ? f.value.every((Q) => x.products.includes(Q)) : x.products.some((Q) => f.value.includes(Q))) || b.value.length && x.products.some((V) => b.value.includes(V)) ? !1 : !R || `${x.name} ${x.phone}`.toLowerCase().includes(R));
    }), _ = J(() => $.value.length > 0 && $.value.every((R) => p.value.selected_contact_keys.includes(R.id)));
    function y(R) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(R) ? x.filter((V) => V !== R) : [...x, R];
    }
    function S() {
      const R = $.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...R])];
    }
    function L() {
      const R = new Set($.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !R.has(x));
    }
    const M = J(() => s.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), I = J(() => ({
      customer: { name: M.value.name, first_name: (M.value.name || "").split(" ")[0] || M.value.name }
    })), C = J(() => {
      const R = p.value.message_data;
      return Di(R.text || R.question || R.title || "", I.value);
    }), q = J(() => Di(p.value.message_data.caption || "", I.value));
    async function E() {
      u.value = !0;
      try {
        const [R, x, V] = await Promise.all([
          Ae.contacts(),
          Ae.products(),
          Ae.flows()
        ]);
        s.value = R.contacts || [], l.value = x.products || [], d.value = V.flows || [];
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
          const R = Fi(p.value.message_data, "Mensagem");
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
        const R = Fi(p.value.message_data, "Mensagem");
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
    return Ke(E), (R, x) => (z(), T("div", iE, [
      i("div", lE, [
        i("div", uE, [
          i("div", cE, [
            i("div", dE, [
              Y(N(Ct), { class: "h-5 w-5" })
            ]),
            x[17] || (x[17] = i("div", null, [
              i("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              i("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          i("div", fE, [
            (z(), T(ve, null, Re(4, (V) => i("div", {
              key: V,
              class: X(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === V ? "bg-emerald-500 text-zinc-950" : r.value > V ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > V ? (z(), Oe(N(Kd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (z(), T("span", pE, U(V), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (z(), T("div", hE, [
          Y(N(wa), { class: "h-4 w-4 shrink-0" }),
          i("span", null, U(a.value), 1)
        ])) : ee("", !0),
        i("div", mE, [
          r.value === 1 ? (z(), T("div", vE, [
            i("div", null, [
              x[18] || (x[18] = i("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              te(i("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (V) => p.value.name = V),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [ye, p.value.name]
              ]),
              x[19] || (x[19] = i("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            i("div", gE, [
              x[27] || (x[27] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Tipo de Envio da Campanha *", -1)),
              i("div", yE, [
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (V) => p.value.action_type = "message")
                }, [
                  i("div", bE, [
                    Y(N(Ct), { class: "h-4 w-4 text-emerald-400" }),
                    x[20] || (x[20] = i("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  x[21] || (x[21] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (V) => p.value.action_type = "flow")
                }, [
                  i("div", xE, [
                    Y(N(Rr), { class: "h-4 w-4 text-emerald-400" }),
                    x[22] || (x[22] = i("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  x[23] || (x[23] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? (z(), T("div", wE, [
                i("label", _E, [
                  Y(N(Rr), { class: "h-3.5 w-3.5" }),
                  x[24] || (x[24] = i("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                te(i("select", {
                  "onUpdate:modelValue": x[3] || (x[3] = (V) => p.value.flow_id = V),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  x[25] || (x[25] = i("option", { value: null }, "Selecione um fluxo...", -1)),
                  (z(!0), T(ve, null, Re(d.value, (V) => (z(), T("option", {
                    key: V.id,
                    value: V.id
                  }, U(V.name) + " (" + U(V.trigger_event || "Personalizado") + ") ", 9, kE))), 128))
                ], 512), [
                  [ot, p.value.flow_id]
                ]),
                x[26] || (x[26] = i("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : ee("", !0)
            ]),
            i("div", SE, [
              x[34] || (x[34] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              i("div", EE, [
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[4] || (x[4] = (V) => p.value.schedule_mode = "immediate")
                }, [
                  i("div", zE, [
                    Y(N(Ln), { class: "h-4 w-4 text-emerald-400" }),
                    x[28] || (x[28] = i("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[29] || (x[29] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[5] || (x[5] = (V) => p.value.schedule_mode = "scheduled")
                }, [
                  i("div", $E, [
                    Y(N(ts), { class: "h-4 w-4 text-emerald-400" }),
                    x[30] || (x[30] = i("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[31] || (x[31] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (z(), T("div", PE, [
                i("label", CE, [
                  Y(N(sr), { class: "h-3.5 w-3.5" }),
                  x[32] || (x[32] = i("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                te(i("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (V) => p.value.scheduled_at = V),
                  type: "datetime-local",
                  min: g.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, AE), [
                  [ye, p.value.scheduled_at]
                ]),
                x[33] || (x[33] = i("p", { class: "text-[11px] text-zinc-400" }, [
                  Se(" A campanha ficará com status "),
                  i("strong", { class: "text-purple-400" }, "Agendada"),
                  Se(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : ee("", !0)
            ]),
            i("div", TE, [
              i("div", OE, [
                i("div", NE, [
                  Y(N(Ih), { class: "h-4 w-4 text-emerald-400" }),
                  x[35] || (x[35] = i("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                i("span", RE, U(p.value.throttle_seconds) + " segundos", 1)
              ]),
              te(i("input", {
                "onUpdate:modelValue": x[7] || (x[7] = (V) => p.value.throttle_seconds = V),
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
          ])) : r.value === 2 ? (z(), T("div", IE, [
            i("div", ME, [
              i("div", DE, [
                i("div", null, [
                  x[37] || (x[37] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  Y(dr, {
                    modelValue: f.value,
                    "onUpdate:modelValue": x[8] || (x[8] = (V) => f.value = V),
                    mode: v.value,
                    "onUpdate:mode": x[9] || (x[9] = (V) => v.value = V),
                    options: A.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                i("div", null, [
                  x[38] || (x[38] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  Y(dr, {
                    modelValue: b.value,
                    "onUpdate:modelValue": x[10] || (x[10] = (V) => b.value = V),
                    options: A.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[39] || (x[39] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              i("div", null, [
                x[41] || (x[41] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                te(i("select", {
                  "onUpdate:modelValue": x[11] || (x[11] = (V) => c.value = V),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[40] || (x[40] = [
                  i("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  i("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  i("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [ot, c.value]
                ]),
                x[42] || (x[42] = i("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                i("div", FE, [
                  Y(N(jr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  te(i("input", {
                    "onUpdate:modelValue": x[12] || (x[12] = (V) => m.value = V),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [ye, m.value]
                  ])
                ])
              ]),
              i("div", BE, [
                i("div", null, [
                  x[43] || (x[43] = i("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  i("div", LE, [
                    Se(U(p.value.selected_contact_keys.length) + " ", 1),
                    i("span", UE, "de " + U($.value.length) + " filtrados", 1)
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
                    onClick: L
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            i("div", VE, [
              i("table", qE, [
                i("thead", jE, [
                  i("tr", null, [
                    i("th", HE, [
                      i("input", {
                        type: "checkbox",
                        checked: _.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[13] || (x[13] = (V) => _.value ? L() : S())
                      }, null, 40, GE)
                    ]),
                    x[45] || (x[45] = i("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[46] || (x[46] = i("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[47] || (x[47] = i("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[48] || (x[48] = i("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                i("tbody", WE, [
                  (z(!0), T(ve, null, Re($.value, (V) => (z(), T("tr", {
                    key: V.id,
                    class: X(["cursor-pointer transition", p.value.selected_contact_keys.includes(V.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (Q) => y(V.id)
                  }, [
                    i("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[14] || (x[14] = rn(() => {
                      }, ["stop"]))
                    }, [
                      i("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(V.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (Q) => y(V.id)
                      }, null, 40, YE)
                    ]),
                    i("td", KE, [
                      i("div", ZE, U(V.name), 1),
                      i("div", JE, U(V.email || "-"), 1)
                    ]),
                    i("td", QE, U(V.phone), 1),
                    i("td", ez, [
                      i("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", V.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, U(V.origin), 3)
                    ]),
                    i("td", tz, [
                      i("div", nz, [
                        (z(!0), T(ve, null, Re(V.products.slice(0, 2), (Q) => (z(), T("span", {
                          key: Q,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, U(Q), 1))), 128)),
                        V.products.length > 2 ? (z(), T("span", rz, "+" + U(V.products.length - 2), 1)) : ee("", !0)
                      ])
                    ])
                  ], 10, XE))), 128))
                ])
              ]),
              u.value ? (z(), T("p", oz, "Carregando contatos...")) : $.value.length ? ee("", !0) : (z(), T("p", az, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (z(), T("div", sz, [
            p.value.action_type === "flow" ? (z(), T("div", iz, [
              i("div", lz, [
                i("div", uz, [
                  i("div", cz, [
                    Y(N(Rr), { class: "h-6 w-6" })
                  ]),
                  i("div", null, [
                    x[49] || (x[49] = i("span", { class: "text-[10px] font-bold uppercase tracking-wider text-emerald-400" }, "Fluxo de Automação Selecionado", -1)),
                    i("h4", dz, U(h.value?.name || "Nenhum fluxo selecionado"), 1)
                  ])
                ]),
                i("div", fz, [
                  i("div", pz, [
                    x[50] || (x[50] = i("span", { class: "text-zinc-500" }, "Gatilho do Fluxo:", -1)),
                    i("span", hz, U(h.value?.trigger_event || "Disparo Direto"), 1)
                  ]),
                  i("div", mz, [
                    x[51] || (x[51] = i("span", { class: "text-zinc-500" }, "Blocos de Ação:", -1)),
                    i("span", vz, U(h.value?.graph_json?.nodes?.length || 0) + " blocos configurados", 1)
                  ]),
                  i("div", gz, [
                    x[52] || (x[52] = i("span", { class: "text-zinc-500" }, "Status:", -1)),
                    i("span", {
                      class: X(["rounded-full px-2 py-0.5 text-[10px] font-semibold", h.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, U(h.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                x[53] || (x[53] = i("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : (z(), T("div", yz, [
              i("div", bz, [
                Y(Sp, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: N(k)
                }, null, 8, ["data", "variables"])
              ]),
              i("div", null, [
                x[54] || (x[54] = i("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                Y(gl, {
                  text: C.value,
                  caption: q.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": M.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? (z(), T("div", xz, [
            i("div", wz, [
              x[59] || (x[59] = i("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              i("div", _z, [
                i("div", null, [
                  x[55] || (x[55] = i("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  i("p", kz, U(p.value.name), 1)
                ]),
                i("div", null, [
                  x[56] || (x[56] = i("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  i("p", Sz, U(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                i("div", null, [
                  x[57] || (x[57] = i("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  i("p", {
                    class: X(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (z(), Oe(Rt(p.value.schedule_mode === "scheduled" ? N(ts) : N(Ln)), { class: "h-3.5 w-3.5" })),
                    i("span", null, U(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                i("div", null, [
                  x[58] || (x[58] = i("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  i("p", Ez, "~" + U(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              i("div", null, [
                i("span", zz, U(p.value.action_type === "flow" ? "Fluxo a Disparar:" : `Conteúdo da Mensagem (${p.value.message_data.mode}):`), 1),
                p.value.action_type === "flow" ? (z(), T("div", $z, " ⚡ " + U(h.value?.name || "Fluxo selecionado"), 1)) : (z(), T("div", Pz, U(C.value || q.value || "—"), 1))
              ])
            ])
          ])) : ee("", !0)
        ]),
        i("div", Cz, [
          r.value > 1 ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[15] || (x[15] = (V) => r.value--)
          }, [
            Y(N(Xd), { class: "mr-2 h-4 w-4" }),
            x[60] || (x[60] = i("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (z(), T("div", Az)),
          i("div", Tz, [
            i("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[16] || (x[16] = (V) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: F
            }, [
              x[61] || (x[61] = i("span", null, "Próximo", -1)),
              Y(N(Sh), { class: "ml-2 h-4 w-4" })
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: X(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: P
            }, [
              o.value ? (z(), Oe(N(Dt), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (z(), Oe(Rt(p.value.schedule_mode === "scheduled" ? N(ts) : N(Ct)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              i("span", null, U(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, Oz))
          ])
        ])
      ])
    ]));
  }
}, Rz = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, Iz = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, Mz = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, Dz = { class: "flex items-center gap-3" }, Fz = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, Bz = { class: "text-lg font-bold text-white" }, Lz = { class: "mt-0.5 text-xs text-zinc-400" }, Uz = {
  key: 0,
  class: "text-zinc-500"
}, Vz = { class: "flex items-center gap-2" }, qz = ["disabled"], jz = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, Hz = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, Gz = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, Wz = { class: "flex items-center justify-between text-xs" }, Xz = { class: "flex items-center gap-2" }, Yz = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, Kz = { class: "font-bold text-white" }, Zz = { class: "font-mono font-bold text-emerald-400" }, Jz = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, Qz = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, e$ = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, t$ = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, n$ = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, r$ = { class: "mt-0.5 text-xl font-bold text-white" }, o$ = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, a$ = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, s$ = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, i$ = { class: "mt-0.5 text-xl font-bold text-amber-400" }, l$ = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, u$ = { class: "mt-0.5 text-xl font-bold text-red-400" }, c$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, d$ = { class: "relative max-w-sm flex-1" }, f$ = { class: "flex-1 overflow-y-auto p-6" }, p$ = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, h$ = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, m$ = { class: "w-full text-left text-xs" }, v$ = { class: "divide-y divide-zinc-800/60" }, g$ = { class: "px-4 py-3" }, y$ = { class: "font-medium text-white" }, b$ = ["title"], x$ = { class: "px-4 py-3 font-mono text-zinc-300" }, w$ = { class: "px-4 py-3" }, _$ = { class: "px-4 py-3 text-right text-zinc-400" }, k$ = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = G(null), a = G([]), s = G(!0), l = G(!1), d = G(""), u = G(""), c = G(""), f = J(() => {
      const h = u.value.trim().toLowerCase();
      return a.value.filter((g) => c.value && g.status !== c.value ? !1 : !h || `${g.name || ""} ${g.phone}`.toLowerCase().includes(h));
    }), v = (h) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[h] || "border-blue-500/20 bg-blue-500/10 text-blue-400", b = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const h = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(h / o.value.total_recipients * 100));
    });
    async function m() {
      s.value = !0, d.value = "";
      try {
        const h = await Ae.campaign(n.campaignId);
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
        await Ae.cancelCampaign(n.campaignId), r("changed"), await m();
      } catch (h) {
        d.value = h.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(m), (h, g) => (z(), T("div", Rz, [
      i("div", Iz, [
        i("div", Mz, [
          i("div", Dz, [
            i("div", Fz, [
              Y(N(jr), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              i("div", Bz, U(o.value?.name || "Campanha"), 1),
              i("p", Lz, [
                i("span", null, U(o.value ? N(kp)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (z(), T("span", Uz, " • " + U(o.value.message), 1)) : ee("", !0)
              ])
            ])
          ]),
          i("div", Vz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (z(), T("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              Y(N(Eh), { class: "h-3.5 w-3.5" }),
              i("span", null, U(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, qz)) : ee("", !0),
            i("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: g[0] || (g[0] = (k) => r("close"))
            }, [
              Y(N(Ot), { class: "h-4 w-4" })
            ])
          ])
        ]),
        s.value ? (z(), T("p", jz, "Carregando detalhes…")) : d.value ? (z(), T("p", Hz, U(d.value), 1)) : o.value ? (z(), T(ve, { key: 2 }, [
          i("div", Gz, [
            i("div", Wz, [
              i("div", Xz, [
                o.value.status === "running" ? (z(), T("span", Yz, [...g[3] || (g[3] = [
                  i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  i("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : ee("", !0),
                i("span", Kz, U(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              i("span", Zz, U(b.value) + "%", 1)
            ]),
            i("div", Jz, [
              i("div", {
                class: X(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${b.value}%` })
              }, null, 6)
            ]),
            i("div", Qz, [
              i("span", null, U(o.value.sent_count) + " de " + U(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (z(), T("span", e$, " 🛡️ Intervalo randômico (jitter) ativo ")) : ee("", !0)
            ])
          ]),
          i("div", t$, [
            i("div", n$, [
              g[4] || (g[4] = i("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              i("div", r$, U(o.value.total_recipients), 1)
            ]),
            i("div", o$, [
              g[5] || (g[5] = i("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              i("div", a$, U(o.value.sent_count), 1)
            ]),
            i("div", s$, [
              g[6] || (g[6] = i("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              i("div", i$, U(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            i("div", l$, [
              g[7] || (g[7] = i("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              i("div", u$, U(o.value.error_count), 1)
            ])
          ]),
          i("div", c$, [
            i("div", d$, [
              Y(N(jr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              te(i("input", {
                "onUpdate:modelValue": g[1] || (g[1] = (k) => u.value = k),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [ye, u.value]
              ])
            ]),
            te(i("select", {
              "onUpdate:modelValue": g[2] || (g[2] = (k) => c.value = k),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...g[8] || (g[8] = [
              qd('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [ot, c.value]
            ])
          ]),
          i("div", f$, [
            f.value.length ? (z(), T("div", h$, [
              i("table", m$, [
                g[9] || (g[9] = i("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  i("tr", null, [
                    i("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    i("th", { class: "px-4 py-2.5" }, "Telefone"),
                    i("th", { class: "px-4 py-2.5" }, "Status"),
                    i("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                i("tbody", v$, [
                  (z(!0), T(ve, null, Re(f.value, (k) => (z(), T("tr", {
                    key: k.id
                  }, [
                    i("td", g$, [
                      i("div", y$, U(k.name || "—"), 1),
                      k.error_message ? (z(), T("div", {
                        key: 0,
                        title: k.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, U(k.error_message), 9, b$)) : ee("", !0)
                    ]),
                    i("td", x$, U(k.phone), 1),
                    i("td", w$, [
                      i("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(k.status)])
                      }, U(N(iw)[k.status] || k.status), 3)
                    ]),
                    i("td", _$, U(k.sent_at ? new Date(k.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (z(), T("div", p$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : ee("", !0)
      ])
    ]));
  }
}, S$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, E$ = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, z$ = { class: "relative w-64" }, $$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, P$ = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, C$ = {
  key: 2,
  class: "py-10 text-center"
}, A$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, T$ = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, O$ = { class: "w-full text-left text-xs" }, N$ = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, R$ = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, I$ = { class: "px-3 py-2.5" }, M$ = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, D$ = { class: "px-3 py-2.5" }, F$ = { class: "px-3 py-2.5" }, B$ = { class: "flex items-center gap-2" }, L$ = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, U$ = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, V$ = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, q$ = { class: "px-3 py-2.5" }, j$ = ["onClick"], H$ = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(!1), s = G(null), l = (c) => ({
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
    return Ke(u), (c, f) => (z(), T("div", S$, [
      i("div", E$, [
        i("div", z$, [
          Y(N(jr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          te(i("input", {
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
          Y(N(rf), { class: "h-4 w-4" }),
          f[4] || (f[4] = i("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (z(), T("p", $$, U(r.value), 1)) : ee("", !0),
      n.value ? (z(), T("div", P$, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = i("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : d.value.length ? (z(), T("div", T$, [
        i("table", O$, [
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
          i("tbody", N$, [
            (z(!0), T(ve, null, Re(d.value, (v) => (z(), T("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", R$, U(v.name), 1),
              i("td", I$, [
                i("span", {
                  class: X(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(v.status)])
                }, [
                  v.status === "running" ? (z(), T("span", M$, [...f[7] || (f[7] = [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    i("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : ee("", !0),
                  Se(" " + U(N(kp)[v.status] || v.status), 1)
                ], 2)
              ]),
              i("td", D$, U(v.total_recipients), 1),
              i("td", F$, [
                i("div", B$, [
                  i("span", L$, U(v.sent_count) + "/" + U(v.total_recipients), 1),
                  i("div", U$, [
                    i("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              i("td", {
                class: X(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, U(v.error_count), 3),
              i("td", V$, U(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              i("td", q$, [
                i("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (b) => s.value = v.id
                }, [
                  Y(N($h), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = i("span", null, "Detalhes", -1))
                ], 8, j$)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", C$, [
        i("div", A$, [
          Y(N(Ct), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (z(), Oe(Nz, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => a.value = !1),
        onCreated: u
      })) : ee("", !0),
      s.value ? (z(), Oe(k$, {
        key: 5,
        "campaign-id": s.value,
        onClose: f[3] || (f[3] = (v) => s.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : ee("", !0)
    ]));
  }
}, G$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, W$ = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, X$ = ["disabled"], Y$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, K$ = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, Z$ = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, J$ = {
  key: 3,
  class: "py-10 text-center"
}, Q$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, e3 = {
  key: 4,
  class: "mt-4 space-y-2"
}, t3 = { class: "flex items-center gap-3" }, n3 = { class: "font-semibold text-zinc-900 dark:text-white" }, r3 = { class: "text-zinc-500 dark:text-zinc-400" }, o3 = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, a3 = ["title"], s3 = ["title"], i3 = { class: "flex items-center gap-2" }, l3 = ["disabled", "onClick"], u3 = {
  __name: "RunsPanel",
  setup(e) {
    const t = G([]), n = G(!0), r = G(""), o = G(""), a = G(null), s = (c) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[c] || "bg-amber-500", l = (c) => ({
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
    return Ke(d), (c, f) => (z(), T("div", G$, [
      i("div", W$, [
        f[0] || (f[0] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        i("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: d
        }, " Atualizar ", 8, X$)
      ]),
      r.value ? (z(), T("p", Y$, U(r.value), 1)) : o.value ? (z(), T("p", K$, U(o.value), 1)) : ee("", !0),
      n.value ? (z(), T("div", Z$, [
        Y(N(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = i("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (z(), T("div", e3, [
        (z(!0), T(ve, null, Re(t.value, (v) => (z(), T("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          i("div", t3, [
            i("span", {
              class: X(["h-2 w-2 rounded-full", s(v.status)])
            }, null, 2),
            i("div", null, [
              i("div", n3, "Fluxo #" + U(v.flow_id), 1),
              i("div", r3, U(N(Lo)(v.event_class)) + " • " + U(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (z(), T("div", o3, [
                Y(N(Ch), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                i("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + U(v.context.last_reply) + "”", 9, a3)
              ])) : ee("", !0),
              v.last_error ? (z(), T("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, U(v.last_error), 9, s3)) : ee("", !0)
            ])
          ]),
          i("div", i3, [
            v.status === "failed" ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === v.id,
              onClick: (b) => u(v)
            }, [
              Y(N(Nh), {
                class: X(["h-3 w-3", { "animate-spin": a.value === v.id }])
              }, null, 8, ["class"]),
              i("span", null, U(a.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, l3)) : ee("", !0),
            i("span", {
              class: X(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(v.status)])
            }, U(N(lw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (z(), T("div", J$, [
        i("div", Q$, [
          Y(N(Qd), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, c3 = { class: "mx-auto max-w-6xl space-y-6" }, d3 = { class: "flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900" }, f3 = { class: "flex items-center gap-4" }, p3 = { class: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400" }, h3 = { class: "flex items-center gap-3" }, m3 = { class: "relative inline-flex cursor-pointer items-center" }, v3 = {
  key: 0,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, g3 = {
  key: 1,
  class: "flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
}, y3 = {
  key: 2,
  class: "flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300"
}, b3 = {
  key: 3,
  class: "flex h-64 items-center justify-center"
}, x3 = {
  key: 4,
  class: "grid grid-cols-1 gap-6 lg:grid-cols-12"
}, w3 = { class: "space-y-6 lg:col-span-7" }, _3 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, k3 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, S3 = { class: "mt-6 space-y-4" }, E3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, z3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, $3 = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, P3 = { class: "flex items-center justify-between" }, C3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, A3 = {
  key: 0,
  class: "mt-3 space-y-2"
}, T3 = { class: "flex flex-wrap gap-1.5" }, O3 = ["title", "onClick"], N3 = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, R3 = ["disabled"], I3 = ["disabled"], M3 = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, D3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, F3 = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, B3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, L3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, U3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, V3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, q3 = { class: "lg:col-span-5" }, j3 = { class: "overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, H3 = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, G3 = { class: "min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, W3 = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, X3 = { class: "font-sans whitespace-pre-wrap select-text" }, Y3 = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, K3 = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, Z3 = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = G(!0), n = G(!1), r = G(!1), o = G(""), a = G(""), s = G(""), l = G(""), d = G(null), u = G(!1), c = mr({
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
    async function m() {
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
    const h = J(() => (l.value || "").split(`
`));
    return Ke(v), (g, k) => (z(), T("div", c3, [
      i("div", d3, [
        i("div", f3, [
          i("div", p3, [
            Y(N(Yd), { class: "h-7 w-7" })
          ]),
          k[5] || (k[5] = i("div", null, [
            i("h2", { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, "Relatório Diário de Vendas no WhatsApp"),
            i("p", { class: "text-xs text-zinc-600 dark:text-zinc-400" }, " Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo com faturamento, vendas, formas de pagamento e order bumps. ")
          ], -1))
        ]),
        i("div", h3, [
          i("span", {
            class: X(["text-xs font-semibold", c.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, U(c.enabled ? "● Envio Ativo" : "○ Envio Desativado"), 3),
          i("label", m3, [
            te(i("input", {
              "onUpdate:modelValue": k[0] || (k[0] = (w) => c.enabled = w),
              type: "checkbox",
              class: "peer sr-only",
              onChange: b
            }, null, 544), [
              [An, c.enabled]
            ]),
            k[6] || (k[6] = i("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      a.value ? (z(), T("div", v3, [
        Y(N(qr), { class: "h-5 w-5 shrink-0" }),
        i("span", null, U(a.value), 1)
      ])) : ee("", !0),
      s.value ? (z(), T("div", g3, [
        Y(N(Ct), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        i("span", null, U(s.value), 1)
      ])) : ee("", !0),
      o.value ? (z(), T("div", y3, [
        Y(N(wa), { class: "h-5 w-5 shrink-0" }),
        i("span", null, U(o.value), 1)
      ])) : ee("", !0),
      t.value ? (z(), T("div", b3, [
        Y(N(Dt), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (z(), T("div", x3, [
        i("div", w3, [
          i("div", _3, [
            i("h3", k3, [
              Y(N(sr), { class: "h-4 w-4 text-emerald-500" }),
              k[7] || (k[7] = Se(" Agendamento & Destino ", -1))
            ]),
            k[15] || (k[15] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Defina o horário e para qual número do WhatsApp o relatório diário consolidado será entregue. ", -1)),
            i("div", S3, [
              i("div", null, [
                k[8] || (k[8] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                i("div", E3, [
                  Y(N(Th), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  te(i("input", {
                    "onUpdate:modelValue": k[1] || (k[1] = (w) => c.phone = w),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, c.phone]
                  ])
                ]),
                k[9] || (k[9] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ]),
              i("div", null, [
                k[10] || (k[10] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Horário de Disparo Diário * ", -1)),
                i("div", z3, [
                  Y(N(sr), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  te(i("input", {
                    "onUpdate:modelValue": k[2] || (k[2] = (w) => c.time = w),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, c.time]
                  ])
                ]),
                k[11] || (k[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                  Se(" Padrão sugerido: "),
                  i("strong", null, "23:59"),
                  Se(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ")
                ], -1))
              ]),
              i("div", $3, [
                i("div", P3, [
                  i("div", null, [
                    k[12] || (k[12] = i("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    i("p", C3, U(u.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  i("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: k[3] || (k[3] = (w) => u.value = !u.value)
                  }, U(u.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                u.value ? (z(), T("div", A3, [
                  i("div", T3, [
                    (z(), T(ve, null, Re(f, (w) => i("button", {
                      key: w.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: w.label,
                      onClick: (A) => p(w.tag)
                    }, U(w.tag), 9, O3)), 64))
                  ]),
                  te(i("textarea", {
                    "onUpdate:modelValue": k[4] || (k[4] = (w) => c.custom_template = w),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [ye, c.custom_template]
                  ])
                ])) : ee("", !0)
              ]),
              i("div", N3, [
                i("button", {
                  type: "button",
                  disabled: n.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: b
                }, [
                  n.value ? (z(), Oe(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (z(), Oe(N(qr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  k[13] || (k[13] = Se(" Salvar Configurações ", -1))
                ], 8, R3),
                i("button", {
                  type: "button",
                  disabled: r.value || !c.phone,
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: m
                }, [
                  r.value ? (z(), Oe(N(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (z(), Oe(N(Ct), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  k[14] || (k[14] = Se(" Enviar Agora (Teste) ", -1))
                ], 8, I3)
              ])
            ])
          ]),
          d.value ? (z(), T("div", M3, [
            i("div", D3, [
              k[16] || (k[16] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Faturamento Hoje", -1)),
              i("div", F3, U(d.value.total_formatted), 1)
            ]),
            i("div", B3, [
              k[17] || (k[17] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Vendas Aprovadas", -1)),
              i("div", L3, U(d.value.orders_count), 1)
            ]),
            i("div", U3, [
              k[18] || (k[18] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Order Bumps", -1)),
              i("div", V3, U(d.value.bumps_count) + " (" + U(d.value.bumps_total_formatted) + ")", 1)
            ])
          ])) : ee("", !0)
        ]),
        i("div", q3, [
          i("div", j3, [
            i("div", H3, [
              k[19] || (k[19] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, " ZR ", -1)),
              k[20] || (k[20] = i("div", { class: "flex-1" }, [
                i("div", { class: "text-xs font-bold leading-tight" }, "ZapRei Notificações"),
                i("div", { class: "text-[10px] text-white/70" }, "relatório diário automático")
              ], -1)),
              Y(N(ol), { class: "h-4 w-4 text-emerald-300" })
            ]),
            i("div", G3, [
              i("div", W3, [
                i("div", X3, [
                  (z(!0), T(ve, null, Re(h.value, (w, A) => (z(), T("div", {
                    key: A,
                    class: "min-h-[1.2em]"
                  }, U(w), 1))), 128))
                ]),
                i("div", Y3, [
                  i("span", null, U(c.time || "23:59"), 1),
                  k[21] || (k[21] = i("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            i("div", K3, [
              k[22] || (k[22] = Se(" Disparo automático via ", -1)),
              k[23] || (k[23] = i("strong", null, "Evolution GO", -1)),
              Se(" às " + U(c.time), 1)
            ])
          ])
        ])
      ]))
    ]));
  }
}, J3 = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, Q3 = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, e4 = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, t4 = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, n4 = { class: "flex flex-wrap items-center gap-3" }, r4 = { class: "text-xs font-bold" }, o4 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, a4 = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, s4 = { class: "flex items-center justify-between" }, i4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, l4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, u4 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, c4 = { class: "flex items-center justify-between" }, d4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, f4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, p4 = { class: "flex items-center justify-between" }, h4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, m4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, v4 = { class: "flex items-center justify-between" }, g4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, y4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, b4 = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, x4 = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, w4 = ["onClick"], _4 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, k4 = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Ln, component: ES },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Ct, component: H$ },
      { id: "daily_report", label: "Relatório Diário", icon: Yd, component: Z3 },
      { id: "contacts", label: "Base de Contatos", icon: _i, component: sE },
      { id: "runs", label: "Execuções", icon: Qd, component: u3 },
      { id: "connection", label: "Conexão", icon: nf, component: sf }
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
        ]), b = u.flows || [], m = c.campaigns || [], p = v.runs || [], h = f.counts?.all || 0;
        o.value = {
          flows: b.length,
          campaigns: m.length,
          contacts: h
        };
        const g = b.filter((A) => A.is_active).length, k = p.filter((A) => A.status === "completed").length, w = p.length ? Math.round(k / p.length * 100) : 100;
        a.value = {
          flowsCount: b.length,
          activeFlowsCount: g,
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
    }), (u, c) => (z(), T("div", J3, [
      i("div", Q3, [
        i("div", e4, [
          i("div", null, [
            i("div", t4, [
              Y(N(ef), { class: "h-3.5 w-3.5" }),
              c[5] || (c[5] = i("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            c[6] || (c[6] = i("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            c[7] || (c[7] = i("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          i("div", n4, [
            i("div", {
              class: X(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              i("div", {
                class: X(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              i("div", null, [
                i("div", r4, U(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                i("div", o4, U(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              i("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: c[0] || (c[0] = (f) => n.value = "connection")
              }, U(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        i("div", a4, [
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[1] || (c[1] = (f) => n.value = "flows")
          }, [
            i("div", s4, [
              c[8] || (c[8] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              i("div", i4, [
                Y(N(Ln), { class: "h-4 w-4" })
              ])
            ]),
            i("div", l4, [
              Se(U(a.value.activeFlowsCount) + " ", 1),
              c[9] || (c[9] = i("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            i("div", u4, " de " + U(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[2] || (c[2] = (f) => n.value = "campaigns")
          }, [
            i("div", c4, [
              c[10] || (c[10] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              i("div", d4, [
                Y(N(Ct), { class: "h-4 w-4" })
              ])
            ]),
            i("div", f4, U(a.value.campaignsCount), 1),
            c[11] || (c[11] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[3] || (c[3] = (f) => n.value = "contacts")
          }, [
            i("div", p4, [
              c[12] || (c[12] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              i("div", h4, [
                Y(N(_i), { class: "h-4 w-4" })
              ])
            ]),
            i("div", m4, U(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            c[13] || (c[13] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[4] || (c[4] = (f) => n.value = "runs")
          }, [
            i("div", v4, [
              c[14] || (c[14] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              i("div", g4, [
                Y(N(kh), { class: "h-4 w-4" })
              ])
            ]),
            i("div", y4, [
              Se(U(a.value.runsCount) + " ", 1),
              c[15] || (c[15] = i("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            i("div", b4, [
              c[16] || (c[16] = i("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              i("span", null, U(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        i("div", x4, [
          (z(), T(ve, null, Re(t, (f) => i("button", {
            key: f.id,
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            (z(), Oe(Rt(f.icon), { class: "h-4 w-4" })),
            i("span", null, U(f.label), 1),
            d(f.id) !== null && d(f.id) > 0 ? (z(), T("span", {
              key: 0,
              class: X(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, U(d(f.id)), 3)) : ee("", !0)
          ], 10, w4)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (z(), T("p", _4, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : ee("", !0),
      (z(), Oe(Rt(t.find((f) => f.id === n.value).component), xa({ key: n.value }, gh(n.value === "connection" ? { saved: s } : {})), null, 16))
    ]));
  }
}, S4 = { class: "space-y-4" }, E4 = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (z(), T("div", S4, [
      Y(sf, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = i("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          Se(" Fluxos, contatos e campanhas ficam no menu "),
          i("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          Se(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var $p = typeof global == "object" && global && global.Object === Object && global, z4 = typeof self == "object" && self && self.Object === Object && self, Lt = $p || z4 || Function("return this")(), Jt = Lt.Symbol, Pp = Object.prototype, $4 = Pp.hasOwnProperty, P4 = Pp.toString, Er = Jt ? Jt.toStringTag : void 0;
function C4(e) {
  var t = $4.call(e, Er), n = e[Er];
  try {
    e[Er] = void 0;
    var r = !0;
  } catch {
  }
  var o = P4.call(e);
  return r && (t ? e[Er] = n : delete e[Er]), o;
}
var A4 = Object.prototype, T4 = A4.toString;
function O4(e) {
  return T4.call(e);
}
var N4 = "[object Null]", R4 = "[object Undefined]", ju = Jt ? Jt.toStringTag : void 0;
function Gn(e) {
  return e == null ? e === void 0 ? R4 : N4 : ju && ju in Object(e) ? C4(e) : O4(e);
}
function Qt(e) {
  return e != null && typeof e == "object";
}
var I4 = "[object Symbol]";
function Oa(e) {
  return typeof e == "symbol" || Qt(e) && Gn(e) == I4;
}
function M4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ft = Array.isArray, Hu = Jt ? Jt.prototype : void 0, Gu = Hu ? Hu.toString : void 0;
function Cp(e) {
  if (typeof e == "string")
    return e;
  if (Ft(e))
    return M4(e, Cp) + "";
  if (Oa(e))
    return Gu ? Gu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var D4 = /\s/;
function F4(e) {
  for (var t = e.length; t-- && D4.test(e.charAt(t)); )
    ;
  return t;
}
var B4 = /^\s+/;
function L4(e) {
  return e && e.slice(0, F4(e) + 1).replace(B4, "");
}
function kt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wu = NaN, U4 = /^[-+]0x[0-9a-f]+$/i, V4 = /^0b[01]+$/i, q4 = /^0o[0-7]+$/i, j4 = parseInt;
function Xu(e) {
  if (typeof e == "number")
    return e;
  if (Oa(e))
    return Wu;
  if (kt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = L4(e);
  var n = V4.test(e);
  return n || q4.test(e) ? j4(e.slice(2), n ? 2 : 8) : U4.test(e) ? Wu : +e;
}
function Ap(e) {
  return e;
}
var H4 = "[object AsyncFunction]", G4 = "[object Function]", W4 = "[object GeneratorFunction]", X4 = "[object Proxy]";
function yl(e) {
  if (!kt(e))
    return !1;
  var t = Gn(e);
  return t == G4 || t == W4 || t == H4 || t == X4;
}
var ps = Lt["__core-js_shared__"], Yu = (function() {
  var e = /[^.]+$/.exec(ps && ps.keys && ps.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Y4(e) {
  return !!Yu && Yu in e;
}
var K4 = Function.prototype, Z4 = K4.toString;
function Wn(e) {
  if (e != null) {
    try {
      return Z4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var J4 = /[\\^$.*+?()[\]{}|]/g, Q4 = /^\[object .+?Constructor\]$/, eP = Function.prototype, tP = Object.prototype, nP = eP.toString, rP = tP.hasOwnProperty, oP = RegExp(
  "^" + nP.call(rP).replace(J4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function aP(e) {
  if (!kt(e) || Y4(e))
    return !1;
  var t = yl(e) ? oP : Q4;
  return t.test(Wn(e));
}
function sP(e, t) {
  return e?.[t];
}
function Xn(e, t) {
  var n = sP(e, t);
  return aP(n) ? n : void 0;
}
var Bi = Xn(Lt, "WeakMap"), Ku = Object.create, iP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!kt(t))
      return {};
    if (Ku)
      return Ku(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function lP(e, t, n) {
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
function uP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var cP = 800, dP = 16, fP = Date.now;
function pP(e) {
  var t = 0, n = 0;
  return function() {
    var r = fP(), o = dP - (r - n);
    if (n = r, o > 0) {
      if (++t >= cP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hP(e) {
  return function() {
    return e;
  };
}
var ua = (function() {
  try {
    var e = Xn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), mP = ua ? function(e, t) {
  return ua(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hP(t),
    writable: !0
  });
} : Ap, vP = pP(mP);
function gP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var yP = 9007199254740991, bP = /^(?:0|[1-9]\d*)$/;
function Na(e, t) {
  var n = typeof e;
  return t = t ?? yP, !!t && (n == "number" || n != "symbol" && bP.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bl(e, t, n) {
  t == "__proto__" && ua ? ua(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function lo(e, t) {
  return e === t || e !== e && t !== t;
}
var xP = Object.prototype, wP = xP.hasOwnProperty;
function xl(e, t, n) {
  var r = e[t];
  (!(wP.call(e, t) && lo(r, n)) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function _P(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), o ? bl(n, l, d) : xl(n, l, d);
  }
  return n;
}
var Zu = Math.max;
function kP(e, t, n) {
  return t = Zu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Zu(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), lP(e, this, l);
  };
}
function SP(e, t) {
  return vP(kP(e, t, Ap), e + "");
}
var EP = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= EP;
}
function Ra(e) {
  return e != null && wl(e.length) && !yl(e);
}
function zP(e, t, n) {
  if (!kt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ra(n) && Na(t, n.length) : r == "string" && t in n) ? lo(n[t], e) : !1;
}
function $P(e) {
  return SP(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && zP(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var PP = Object.prototype;
function _l(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || PP;
  return e === n;
}
function CP(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var AP = "[object Arguments]";
function Ju(e) {
  return Qt(e) && Gn(e) == AP;
}
var Tp = Object.prototype, TP = Tp.hasOwnProperty, OP = Tp.propertyIsEnumerable, ca = Ju(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ju : function(e) {
  return Qt(e) && TP.call(e, "callee") && !OP.call(e, "callee");
};
function NP() {
  return !1;
}
var Op = typeof exports == "object" && exports && !exports.nodeType && exports, Qu = Op && typeof module == "object" && module && !module.nodeType && module, RP = Qu && Qu.exports === Op, ec = RP ? Lt.Buffer : void 0, IP = ec ? ec.isBuffer : void 0, Qr = IP || NP, MP = "[object Arguments]", DP = "[object Array]", FP = "[object Boolean]", BP = "[object Date]", LP = "[object Error]", UP = "[object Function]", VP = "[object Map]", qP = "[object Number]", jP = "[object Object]", HP = "[object RegExp]", GP = "[object Set]", WP = "[object String]", XP = "[object WeakMap]", YP = "[object ArrayBuffer]", KP = "[object DataView]", ZP = "[object Float32Array]", JP = "[object Float64Array]", QP = "[object Int8Array]", eC = "[object Int16Array]", tC = "[object Int32Array]", nC = "[object Uint8Array]", rC = "[object Uint8ClampedArray]", oC = "[object Uint16Array]", aC = "[object Uint32Array]", We = {};
We[ZP] = We[JP] = We[QP] = We[eC] = We[tC] = We[nC] = We[rC] = We[oC] = We[aC] = !0;
We[MP] = We[DP] = We[YP] = We[FP] = We[KP] = We[BP] = We[LP] = We[UP] = We[VP] = We[qP] = We[jP] = We[HP] = We[GP] = We[WP] = We[XP] = !1;
function sC(e) {
  return Qt(e) && wl(e.length) && !!We[Gn(e)];
}
function kl(e) {
  return function(t) {
    return e(t);
  };
}
var Np = typeof exports == "object" && exports && !exports.nodeType && exports, Fr = Np && typeof module == "object" && module && !module.nodeType && module, iC = Fr && Fr.exports === Np, hs = iC && $p.process, fr = (function() {
  try {
    var e = Fr && Fr.require && Fr.require("util").types;
    return e || hs && hs.binding && hs.binding("util");
  } catch {
  }
})(), tc = fr && fr.isTypedArray, Sl = tc ? kl(tc) : sC, lC = Object.prototype, uC = lC.hasOwnProperty;
function Rp(e, t) {
  var n = Ft(e), r = !n && ca(e), o = !n && !r && Qr(e), a = !n && !r && !o && Sl(e), s = n || r || o || a, l = s ? CP(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || uC.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Na(u, d))) && l.push(u);
  return l;
}
function Ip(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var cC = Ip(Object.keys, Object), dC = Object.prototype, fC = dC.hasOwnProperty;
function pC(e) {
  if (!_l(e))
    return cC(e);
  var t = [];
  for (var n in Object(e))
    fC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function hC(e) {
  return Ra(e) ? Rp(e) : pC(e);
}
function mC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var vC = Object.prototype, gC = vC.hasOwnProperty;
function yC(e) {
  if (!kt(e))
    return mC(e);
  var t = _l(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !gC.call(e, r)) || n.push(r);
  return n;
}
function Mp(e) {
  return Ra(e) ? Rp(e, !0) : yC(e);
}
var bC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xC = /^\w*$/;
function wC(e, t) {
  if (Ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Oa(e) ? !0 : xC.test(e) || !bC.test(e) || t != null && e in Object(t);
}
var eo = Xn(Object, "create");
function _C() {
  this.__data__ = eo ? eo(null) : {}, this.size = 0;
}
function kC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var SC = "__lodash_hash_undefined__", EC = Object.prototype, zC = EC.hasOwnProperty;
function $C(e) {
  var t = this.__data__;
  if (eo) {
    var n = t[e];
    return n === SC ? void 0 : n;
  }
  return zC.call(t, e) ? t[e] : void 0;
}
var PC = Object.prototype, CC = PC.hasOwnProperty;
function AC(e) {
  var t = this.__data__;
  return eo ? t[e] !== void 0 : CC.call(t, e);
}
var TC = "__lodash_hash_undefined__";
function OC(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = eo && t === void 0 ? TC : t, this;
}
function jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jn.prototype.clear = _C;
jn.prototype.delete = kC;
jn.prototype.get = $C;
jn.prototype.has = AC;
jn.prototype.set = OC;
function NC() {
  this.__data__ = [], this.size = 0;
}
function Ia(e, t) {
  for (var n = e.length; n--; )
    if (lo(e[n][0], t))
      return n;
  return -1;
}
var RC = Array.prototype, IC = RC.splice;
function MC(e) {
  var t = this.__data__, n = Ia(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : IC.call(t, n, 1), --this.size, !0;
}
function DC(e) {
  var t = this.__data__, n = Ia(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function FC(e) {
  return Ia(this.__data__, e) > -1;
}
function BC(e, t) {
  var n = this.__data__, r = Ia(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fn.prototype.clear = NC;
fn.prototype.delete = MC;
fn.prototype.get = DC;
fn.prototype.has = FC;
fn.prototype.set = BC;
var to = Xn(Lt, "Map");
function LC() {
  this.size = 0, this.__data__ = {
    hash: new jn(),
    map: new (to || fn)(),
    string: new jn()
  };
}
function UC(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ma(e, t) {
  var n = e.__data__;
  return UC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function VC(e) {
  var t = Ma(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function qC(e) {
  return Ma(this, e).get(e);
}
function jC(e) {
  return Ma(this, e).has(e);
}
function HC(e, t) {
  var n = Ma(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pn.prototype.clear = LC;
pn.prototype.delete = VC;
pn.prototype.get = qC;
pn.prototype.has = jC;
pn.prototype.set = HC;
var GC = "Expected a function";
function El(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(GC);
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
var WC = 500;
function XC(e) {
  var t = El(e, function(r) {
    return n.size === WC && n.clear(), r;
  }), n = t.cache;
  return t;
}
var YC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, KC = /\\(\\)?/g, ZC = XC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(YC, function(n, r, o, a) {
    t.push(o ? a.replace(KC, "$1") : r || n);
  }), t;
});
function Dp(e) {
  return e == null ? "" : Cp(e);
}
function zl(e, t) {
  return Ft(e) ? e : wC(e, t) ? [e] : ZC(Dp(e));
}
function $l(e) {
  if (typeof e == "string" || Oa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function JC(e, t) {
  t = zl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$l(t[n++])];
  return n && n == r ? e : void 0;
}
function wt(e, t, n) {
  var r = e == null ? void 0 : JC(e, t);
  return r === void 0 ? n : r;
}
function QC(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Fp = Ip(Object.getPrototypeOf, Object), eA = "[object Object]", tA = Function.prototype, nA = Object.prototype, Bp = tA.toString, rA = nA.hasOwnProperty, oA = Bp.call(Object);
function aA(e) {
  if (!Qt(e) || Gn(e) != eA)
    return !1;
  var t = Fp(e);
  if (t === null)
    return !0;
  var n = rA.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Bp.call(n) == oA;
}
function sA(e) {
  return function(t) {
    return e?.[t];
  };
}
function iA() {
  this.__data__ = new fn(), this.size = 0;
}
function lA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function uA(e) {
  return this.__data__.get(e);
}
function cA(e) {
  return this.__data__.has(e);
}
var dA = 200;
function fA(e, t) {
  var n = this.__data__;
  if (n instanceof fn) {
    var r = n.__data__;
    if (!to || r.length < dA - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new pn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new fn(e);
  this.size = t.size;
}
Zt.prototype.clear = iA;
Zt.prototype.delete = lA;
Zt.prototype.get = uA;
Zt.prototype.has = cA;
Zt.prototype.set = fA;
var Lp = typeof exports == "object" && exports && !exports.nodeType && exports, nc = Lp && typeof module == "object" && module && !module.nodeType && module, pA = nc && nc.exports === Lp, rc = pA ? Lt.Buffer : void 0, oc = rc ? rc.allocUnsafe : void 0;
function Up(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = oc ? oc(n) : new e.constructor(n);
  return e.copy(r), r;
}
function hA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function mA() {
  return [];
}
var vA = Object.prototype, gA = vA.propertyIsEnumerable, ac = Object.getOwnPropertySymbols, yA = ac ? function(e) {
  return e == null ? [] : (e = Object(e), hA(ac(e), function(t) {
    return gA.call(e, t);
  }));
} : mA;
function bA(e, t, n) {
  var r = t(e);
  return Ft(e) ? r : QC(r, n(e));
}
function Li(e) {
  return bA(e, hC, yA);
}
var Ui = Xn(Lt, "DataView"), Vi = Xn(Lt, "Promise"), qi = Xn(Lt, "Set"), sc = "[object Map]", xA = "[object Object]", ic = "[object Promise]", lc = "[object Set]", uc = "[object WeakMap]", cc = "[object DataView]", wA = Wn(Ui), _A = Wn(to), kA = Wn(Vi), SA = Wn(qi), EA = Wn(Bi), Nt = Gn;
(Ui && Nt(new Ui(new ArrayBuffer(1))) != cc || to && Nt(new to()) != sc || Vi && Nt(Vi.resolve()) != ic || qi && Nt(new qi()) != lc || Bi && Nt(new Bi()) != uc) && (Nt = function(e) {
  var t = Gn(e), n = t == xA ? e.constructor : void 0, r = n ? Wn(n) : "";
  if (r)
    switch (r) {
      case wA:
        return cc;
      case _A:
        return sc;
      case kA:
        return ic;
      case SA:
        return lc;
      case EA:
        return uc;
    }
  return t;
});
var zA = Object.prototype, $A = zA.hasOwnProperty;
function PA(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && $A.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var da = Lt.Uint8Array;
function Pl(e) {
  var t = new e.constructor(e.byteLength);
  return new da(t).set(new da(e)), t;
}
function CA(e, t) {
  var n = Pl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var AA = /\w*$/;
function TA(e) {
  var t = new e.constructor(e.source, AA.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var dc = Jt ? Jt.prototype : void 0, fc = dc ? dc.valueOf : void 0;
function OA(e) {
  return fc ? Object(fc.call(e)) : {};
}
function Vp(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var NA = "[object Boolean]", RA = "[object Date]", IA = "[object Map]", MA = "[object Number]", DA = "[object RegExp]", FA = "[object Set]", BA = "[object String]", LA = "[object Symbol]", UA = "[object ArrayBuffer]", VA = "[object DataView]", qA = "[object Float32Array]", jA = "[object Float64Array]", HA = "[object Int8Array]", GA = "[object Int16Array]", WA = "[object Int32Array]", XA = "[object Uint8Array]", YA = "[object Uint8ClampedArray]", KA = "[object Uint16Array]", ZA = "[object Uint32Array]";
function JA(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case UA:
      return Pl(e);
    case NA:
    case RA:
      return new r(+e);
    case VA:
      return CA(e);
    case qA:
    case jA:
    case HA:
    case GA:
    case WA:
    case XA:
    case YA:
    case KA:
    case ZA:
      return Vp(e, n);
    case IA:
      return new r();
    case MA:
    case BA:
      return new r(e);
    case DA:
      return TA(e);
    case FA:
      return new r();
    case LA:
      return OA(e);
  }
}
function qp(e) {
  return typeof e.constructor == "function" && !_l(e) ? iP(Fp(e)) : {};
}
var QA = "[object Map]";
function eT(e) {
  return Qt(e) && Nt(e) == QA;
}
var pc = fr && fr.isMap, tT = pc ? kl(pc) : eT, nT = "[object Set]";
function rT(e) {
  return Qt(e) && Nt(e) == nT;
}
var hc = fr && fr.isSet, oT = hc ? kl(hc) : rT, aT = 1, jp = "[object Arguments]", sT = "[object Array]", iT = "[object Boolean]", lT = "[object Date]", uT = "[object Error]", Hp = "[object Function]", cT = "[object GeneratorFunction]", dT = "[object Map]", fT = "[object Number]", Gp = "[object Object]", pT = "[object RegExp]", hT = "[object Set]", mT = "[object String]", vT = "[object Symbol]", gT = "[object WeakMap]", yT = "[object ArrayBuffer]", bT = "[object DataView]", xT = "[object Float32Array]", wT = "[object Float64Array]", _T = "[object Int8Array]", kT = "[object Int16Array]", ST = "[object Int32Array]", ET = "[object Uint8Array]", zT = "[object Uint8ClampedArray]", $T = "[object Uint16Array]", PT = "[object Uint32Array]", He = {};
He[jp] = He[sT] = He[yT] = He[bT] = He[iT] = He[lT] = He[xT] = He[wT] = He[_T] = He[kT] = He[ST] = He[dT] = He[fT] = He[Gp] = He[pT] = He[hT] = He[mT] = He[vT] = He[ET] = He[zT] = He[$T] = He[PT] = !0;
He[uT] = He[Hp] = He[gT] = !1;
function Uo(e, t, n, r, o, a) {
  var s, l = t & aT;
  if (s !== void 0)
    return s;
  if (!kt(e))
    return e;
  var d = Ft(e);
  if (d)
    s = PA(e);
  else {
    var u = Nt(e), c = u == Hp || u == cT;
    if (Qr(e))
      return Up(e, l);
    if (u == Gp || u == jp || c && !o)
      s = c ? {} : qp(e);
    else {
      if (!He[u])
        return o ? e : {};
      s = JA(e, u, l);
    }
  }
  a || (a = new Zt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, s), oT(e) ? e.forEach(function(m) {
    s.add(Uo(m, t, n, m, e, a));
  }) : tT(e) && e.forEach(function(m, p) {
    s.set(p, Uo(m, t, n, p, e, a));
  });
  var v = Li, b = d ? void 0 : v(e);
  return gP(b || e, function(m, p) {
    b && (p = m, m = e[p]), xl(s, p, Uo(m, t, n, p, e, a));
  }), s;
}
var CT = 1, AT = 4;
function lt(e) {
  return Uo(e, CT | AT);
}
var TT = "__lodash_hash_undefined__";
function OT(e) {
  return this.__data__.set(e, TT), this;
}
function NT(e) {
  return this.__data__.has(e);
}
function fa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pn(); ++t < n; )
    this.add(e[t]);
}
fa.prototype.add = fa.prototype.push = OT;
fa.prototype.has = NT;
function RT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function IT(e, t) {
  return e.has(t);
}
var MT = 1, DT = 2;
function Wp(e, t, n, r, o, a) {
  var s = n & MT, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, v = !0, b = n & DT ? new fa() : void 0;
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
    if (b) {
      if (!RT(t, function(g, k) {
        if (!IT(b, k) && (m === g || o(m, g, n, r, a)))
          return b.push(k);
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
function FT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function BT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var LT = 1, UT = 2, VT = "[object Boolean]", qT = "[object Date]", jT = "[object Error]", HT = "[object Map]", GT = "[object Number]", WT = "[object RegExp]", XT = "[object Set]", YT = "[object String]", KT = "[object Symbol]", ZT = "[object ArrayBuffer]", JT = "[object DataView]", mc = Jt ? Jt.prototype : void 0, ms = mc ? mc.valueOf : void 0;
function QT(e, t, n, r, o, a, s) {
  switch (n) {
    case JT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ZT:
      return !(e.byteLength != t.byteLength || !a(new da(e), new da(t)));
    case VT:
    case qT:
    case GT:
      return lo(+e, +t);
    case jT:
      return e.name == t.name && e.message == t.message;
    case WT:
    case YT:
      return e == t + "";
    case HT:
      var l = FT;
    case XT:
      var d = r & LT;
      if (l || (l = BT), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= UT, s.set(e, t);
      var c = Wp(l(e), l(t), r, o, a, s);
      return s.delete(e), c;
    case KT:
      if (ms)
        return ms.call(e) == ms.call(t);
  }
  return !1;
}
var eO = 1, tO = Object.prototype, nO = tO.hasOwnProperty;
function rO(e, t, n, r, o, a) {
  var s = n & eO, l = Li(e), d = l.length, u = Li(t), c = u.length;
  if (d != c && !s)
    return !1;
  for (var f = d; f--; ) {
    var v = l[f];
    if (!(s ? v in t : nO.call(t, v)))
      return !1;
  }
  var b = a.get(e), m = a.get(t);
  if (b && m)
    return b == t && m == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var h = s; ++f < d; ) {
    v = l[f];
    var g = e[v], k = t[v];
    if (r)
      var w = s ? r(k, g, v, t, e, a) : r(g, k, v, e, t, a);
    if (!(w === void 0 ? g === k || o(g, k, n, r, a) : w)) {
      p = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (p && !h) {
    var A = e.constructor, $ = t.constructor;
    A != $ && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof $ == "function" && $ instanceof $) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var oO = 1, vc = "[object Arguments]", gc = "[object Array]", Co = "[object Object]", aO = Object.prototype, yc = aO.hasOwnProperty;
function sO(e, t, n, r, o, a) {
  var s = Ft(e), l = Ft(t), d = s ? gc : Nt(e), u = l ? gc : Nt(t);
  d = d == vc ? Co : d, u = u == vc ? Co : u;
  var c = d == Co, f = u == Co, v = d == u;
  if (v && Qr(e)) {
    if (!Qr(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Zt()), s || Sl(e) ? Wp(e, t, n, r, o, a) : QT(e, t, d, n, r, o, a);
  if (!(n & oO)) {
    var b = c && yc.call(e, "__wrapped__"), m = f && yc.call(t, "__wrapped__");
    if (b || m) {
      var p = b ? e.value() : e, h = m ? t.value() : t;
      return a || (a = new Zt()), o(p, h, n, r, a);
    }
  }
  return v ? (a || (a = new Zt()), rO(e, t, n, r, o, a)) : !1;
}
function Xp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Qt(e) && !Qt(t) ? e !== e && t !== t : sO(e, t, n, r, Xp, o);
}
function iO(e, t, n) {
  t = zl(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $l(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && Na(s, o) && (Ft(e) || ca(e)));
}
function lO(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), l = s.length; l--; ) {
      var d = s[++o];
      if (n(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var uO = lO(), vs = function() {
  return Lt.Date.now();
}, cO = "Expected a function", dO = Math.max, fO = Math.min;
function pO(e, t, n) {
  var r, o, a, s, l, d, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(cO);
  t = Xu(t) || 0, kt(n) && (c = !0, f = "maxWait" in n, a = f ? dO(Xu(n.maxWait) || 0, t) : a, v = "trailing" in n ? !0 : v);
  function b(_) {
    var y = r, S = o;
    return r = o = void 0, u = _, s = e.apply(S, y), s;
  }
  function m(_) {
    return u = _, l = setTimeout(g, t), c ? b(_) : s;
  }
  function p(_) {
    var y = _ - d, S = _ - u, L = t - y;
    return f ? fO(L, a - S) : L;
  }
  function h(_) {
    var y = _ - d, S = _ - u;
    return d === void 0 || y >= t || y < 0 || f && S >= a;
  }
  function g() {
    var _ = vs();
    if (h(_))
      return k(_);
    l = setTimeout(g, p(_));
  }
  function k(_) {
    return l = void 0, v && r ? b(_) : (r = o = void 0, s);
  }
  function w() {
    l !== void 0 && clearTimeout(l), u = 0, r = d = o = l = void 0;
  }
  function A() {
    return l === void 0 ? s : k(vs());
  }
  function $() {
    var _ = vs(), y = h(_);
    if (r = arguments, o = this, d = _, y) {
      if (l === void 0)
        return m(d);
      if (f)
        return clearTimeout(l), l = setTimeout(g, t), b(d);
    }
    return l === void 0 && (l = setTimeout(g, t)), s;
  }
  return $.cancel = w, $.flush = A, $;
}
function ji(e, t, n) {
  (n !== void 0 && !lo(e[t], n) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function hO(e) {
  return Qt(e) && Ra(e);
}
function Hi(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function mO(e) {
  return _P(e, Mp(e));
}
function vO(e, t, n, r, o, a, s) {
  var l = Hi(e, n), d = Hi(t, n), u = s.get(d);
  if (u) {
    ji(e, n, u);
    return;
  }
  var c = a ? a(l, d, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var v = Ft(d), b = !v && Qr(d), m = !v && !b && Sl(d);
    c = d, v || b || m ? Ft(l) ? c = l : hO(l) ? c = uP(l) : b ? (f = !1, c = Up(d, !0)) : m ? (f = !1, c = Vp(d, !0)) : c = [] : aA(d) || ca(d) ? (c = l, ca(l) ? c = mO(l) : (!kt(l) || yl(l)) && (c = qp(d))) : f = !1;
  }
  f && (s.set(d, c), o(c, d, r, a, s), s.delete(d)), ji(e, n, c);
}
function Yp(e, t, n, r, o) {
  e !== t && uO(t, function(a, s) {
    if (o || (o = new Zt()), kt(a))
      vO(e, t, s, n, Yp, r, o);
    else {
      var l = r ? r(Hi(e, s), a, s + "", e, t, o) : void 0;
      l === void 0 && (l = a), ji(e, s, l);
    }
  }, Mp);
}
var gO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, yO = sA(gO), Kp = /[&<>"']/g, bO = RegExp(Kp.source);
function xO(e) {
  return e = Dp(e), e && bO.test(e) ? e.replace(Kp, yO) : e;
}
var wO = Object.prototype, _O = wO.hasOwnProperty;
function kO(e, t) {
  return e != null && _O.call(e, t);
}
function Zp(e, t) {
  return e != null && iO(e, t, kO);
}
function _n(e, t) {
  return Xp(e, t);
}
var Gi = $P(function(e, t, n) {
  Yp(e, t, n);
});
function SO(e, t, n, r) {
  if (!kt(e))
    return e;
  t = zl(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var d = $l(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != s) {
      var c = l[d];
      u = void 0, u === void 0 && (u = kt(c) ? c : Na(t[o + 1]) ? [] : {});
    }
    xl(l, d, u), l = l[d];
  }
  return e;
}
function zt(e, t, n) {
  return e == null ? e : SO(e, t, n);
}
var bc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function EO(e) {
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
var gs, xc;
function yr() {
  return xc || (xc = 1, gs = TypeError), gs;
}
const zO = {}, $O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zO
}, Symbol.toStringTag, { value: "Module" })), PO = /* @__PURE__ */ EO($O);
var ys, wc;
function Da() {
  if (wc) return ys;
  wc = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, b = v ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, h = Function.prototype.toString, g = String.prototype.match, k = String.prototype.slice, w = String.prototype.replace, A = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, _ = RegExp.prototype.test, y = Array.prototype.concat, S = Array.prototype.join, L = Array.prototype.slice, M = Math.floor, I = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, C = Object.getOwnPropertySymbols, q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", F = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, P = Object.prototype.propertyIsEnumerable, R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(W) {
    return W.__proto__;
  } : null);
  function x(W, Z) {
    if (W === 1 / 0 || W === -1 / 0 || W !== W || W && W > -1e3 && W < 1e3 || _.call(/e/, Z))
      return Z;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof W == "number") {
      var je = W < 0 ? -M(-W) : M(W);
      if (je !== W) {
        var Ge = String(je), Ne = k.call(Z, Ge.length + 1);
        return w.call(Ge, Le, "$&_") + "." + w.call(w.call(Ne, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return w.call(Z, Le, "$&_");
  }
  var V = PO, Q = V.custom, ne = D(Q) ? Q : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ys = function W(Z, Le, je, Ge) {
    var Ne = Le || {};
    if (H(Ne, "quoteStyle") && !H(fe, Ne.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (H(Ne, "maxStringLength") && (typeof Ne.maxStringLength == "number" ? Ne.maxStringLength < 0 && Ne.maxStringLength !== 1 / 0 : Ne.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var hn = H(Ne, "customInspect") ? Ne.customInspect : !0;
    if (typeof hn != "boolean" && hn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (H(Ne, "indent") && Ne.indent !== null && Ne.indent !== "	" && !(parseInt(Ne.indent, 10) === Ne.indent && Ne.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(Ne, "numericSeparator") && typeof Ne.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Pn = Ne.numericSeparator;
    if (typeof Z > "u")
      return "undefined";
    if (Z === null)
      return "null";
    if (typeof Z == "boolean")
      return Z ? "true" : "false";
    if (typeof Z == "string")
      return gt(Z, Ne);
    if (typeof Z == "number") {
      if (Z === 0)
        return 1 / 0 / Z > 0 ? "0" : "-0";
      var yt = String(Z);
      return Pn ? x(Z, yt) : yt;
    }
    if (typeof Z == "bigint") {
      var mn = String(Z) + "n";
      return Pn ? x(Z, mn) : mn;
    }
    var Xa = typeof Ne.depth > "u" ? 5 : Ne.depth;
    if (typeof je > "u" && (je = 0), je >= Xa && Xa > 0 && typeof Z == "object")
      return me(Z) ? "[Array]" : "[Object]";
    var Yn = ah(Ne, je);
    if (typeof Ge > "u")
      Ge = [];
    else if (ae(Ge, Z) >= 0)
      return "[Circular]";
    function At(Kn, go, ih) {
      if (go && (Ge = L.call(Ge), Ge.push(go)), ih) {
        var Xl = {
          depth: Ne.depth
        };
        return H(Ne, "quoteStyle") && (Xl.quoteStyle = Ne.quoteStyle), W(Kn, Xl, je + 1, Ge);
      }
      return W(Kn, Ne, je + 1, Ge);
    }
    if (typeof Z == "function" && !Ee(Z)) {
      var Ul = oe(Z), Vl = mo(Z, At);
      return "[Function" + (Ul ? ": " + Ul : " (anonymous)") + "]" + (Vl.length > 0 ? " { " + S.call(Vl, ", ") + " }" : "");
    }
    if (D(Z)) {
      var ql = E ? w.call(String(Z), /^(Symbol\(.*\))_[^)]*$/, "$1") : q.call(Z);
      return typeof Z == "object" && !E ? $n(ql) : ql;
    }
    if (Vt(Z)) {
      for (var wr = "<" + $.call(String(Z.nodeName)), Ya = Z.attributes || [], vo = 0; vo < Ya.length; vo++)
        wr += " " + Ya[vo].name + "=" + _e(re(Ya[vo].value), "double", Ne);
      return wr += ">", Z.childNodes && Z.childNodes.length && (wr += "..."), wr += "</" + $.call(String(Z.nodeName)) + ">", wr;
    }
    if (me(Z)) {
      if (Z.length === 0)
        return "[]";
      var Ka = mo(Z, At);
      return Yn && !oh(Ka) ? "[" + Wa(Ka, Yn) + "]" : "[ " + S.call(Ka, ", ") + " ]";
    }
    if (le(Z)) {
      var Za = mo(Z, At);
      return !("cause" in Error.prototype) && "cause" in Z && !P.call(Z, "cause") ? "{ [" + String(Z) + "] " + S.call(y.call("[cause]: " + At(Z.cause), Za), ", ") + " }" : Za.length === 0 ? "[" + String(Z) + "]" : "{ [" + String(Z) + "] " + S.call(Za, ", ") + " }";
    }
    if (typeof Z == "object" && hn) {
      if (ne && typeof Z[ne] == "function" && V)
        return V(Z, { depth: Xa - je });
      if (hn !== "symbol" && typeof Z.inspect == "function")
        return Z.inspect();
    }
    if (de(Z)) {
      var jl = [];
      return r && r.call(Z, function(Kn, go) {
        jl.push(At(go, Z, !0) + " => " + At(Kn, Z));
      }), Ll("Map", n.call(Z), jl, Yn);
    }
    if (ze(Z)) {
      var Hl = [];
      return l && l.call(Z, function(Kn) {
        Hl.push(At(Kn, Z));
      }), Ll("Set", s.call(Z), Hl, Yn);
    }
    if (pe(Z))
      return xr("WeakMap");
    if (Be(Z))
      return xr("WeakSet");
    if (xe(Z))
      return xr("WeakRef");
    if (ie(Z))
      return $n(At(Number(Z)));
    if (O(Z))
      return $n(At(I.call(Z)));
    if (ge(Z))
      return $n(m.call(Z));
    if (we(Z))
      return $n(At(String(Z)));
    if (typeof window < "u" && Z === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && Z === globalThis || typeof bc < "u" && Z === bc)
      return "{ [object globalThis] }";
    if (!Ce(Z) && !Ee(Z)) {
      var Ja = mo(Z, At), Gl = R ? R(Z) === Object.prototype : Z instanceof Object || Z.constructor === Object, Qa = Z instanceof Object ? "" : "null prototype", Wl = !Gl && F && Object(Z) === Z && F in Z ? k.call(j(Z), 8, -1) : Qa ? "Object" : "", sh = Gl || typeof Z.constructor != "function" ? "" : Z.constructor.name ? Z.constructor.name + " " : "", es = sh + (Wl || Qa ? "[" + S.call(y.call([], Wl || [], Qa || []), ": ") + "] " : "");
      return Ja.length === 0 ? es + "{}" : Yn ? es + "{" + Wa(Ja, Yn) + "}" : es + "{ " + S.call(Ja, ", ") + " }";
    }
    return String(Z);
  };
  function _e(W, Z, Le) {
    var je = Le.quoteStyle || Z, Ge = fe[je];
    return Ge + W + Ge;
  }
  function re(W) {
    return w.call(String(W), /"/g, "&quot;");
  }
  function se(W) {
    return !F || !(typeof W == "object" && (F in W || typeof W[F] < "u"));
  }
  function me(W) {
    return j(W) === "[object Array]" && se(W);
  }
  function Ce(W) {
    return j(W) === "[object Date]" && se(W);
  }
  function Ee(W) {
    return j(W) === "[object RegExp]" && se(W);
  }
  function le(W) {
    return j(W) === "[object Error]" && se(W);
  }
  function we(W) {
    return j(W) === "[object String]" && se(W);
  }
  function ie(W) {
    return j(W) === "[object Number]" && se(W);
  }
  function ge(W) {
    return j(W) === "[object Boolean]" && se(W);
  }
  function D(W) {
    if (E)
      return W && typeof W == "object" && W instanceof Symbol;
    if (typeof W == "symbol")
      return !0;
    if (!W || typeof W != "object" || !q)
      return !1;
    try {
      return q.call(W), !0;
    } catch {
    }
    return !1;
  }
  function O(W) {
    if (!W || typeof W != "object" || !I)
      return !1;
    try {
      return I.call(W), !0;
    } catch {
    }
    return !1;
  }
  var B = Object.prototype.hasOwnProperty || function(W) {
    return W in this;
  };
  function H(W, Z) {
    return B.call(W, Z);
  }
  function j(W) {
    return p.call(W);
  }
  function oe(W) {
    if (W.name)
      return W.name;
    var Z = g.call(h.call(W), /^function\s*([\w$]+)/);
    return Z ? Z[1] : null;
  }
  function ae(W, Z) {
    if (W.indexOf)
      return W.indexOf(Z);
    for (var Le = 0, je = W.length; Le < je; Le++)
      if (W[Le] === Z)
        return Le;
    return -1;
  }
  function de(W) {
    if (!n || !W || typeof W != "object")
      return !1;
    try {
      n.call(W);
      try {
        s.call(W);
      } catch {
        return !0;
      }
      return W instanceof Map;
    } catch {
    }
    return !1;
  }
  function pe(W) {
    if (!u || !W || typeof W != "object")
      return !1;
    try {
      u.call(W, u);
      try {
        f.call(W, f);
      } catch {
        return !0;
      }
      return W instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xe(W) {
    if (!b || !W || typeof W != "object")
      return !1;
    try {
      return b.call(W), !0;
    } catch {
    }
    return !1;
  }
  function ze(W) {
    if (!s || !W || typeof W != "object")
      return !1;
    try {
      s.call(W);
      try {
        n.call(W);
      } catch {
        return !0;
      }
      return W instanceof Set;
    } catch {
    }
    return !1;
  }
  function Be(W) {
    if (!f || !W || typeof W != "object")
      return !1;
    try {
      f.call(W, f);
      try {
        u.call(W, u);
      } catch {
        return !0;
      }
      return W instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Vt(W) {
    return !W || typeof W != "object" ? !1 : typeof HTMLElement < "u" && W instanceof HTMLElement ? !0 : typeof W.nodeName == "string" && typeof W.getAttribute == "function";
  }
  function gt(W, Z) {
    if (W.length > Z.maxStringLength) {
      var Le = W.length - Z.maxStringLength, je = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(k.call(W, 0, Z.maxStringLength), Z) + je;
    }
    var Ge = be[Z.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var Ne = w.call(w.call(W, Ge, "\\$1"), /[\x00-\x1f]/g, Ga);
    return _e(Ne, "single", Z);
  }
  function Ga(W) {
    var Z = W.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[Z];
    return Le ? "\\" + Le : "\\x" + (Z < 16 ? "0" : "") + A.call(Z.toString(16));
  }
  function $n(W) {
    return "Object(" + W + ")";
  }
  function xr(W) {
    return W + " { ? }";
  }
  function Ll(W, Z, Le, je) {
    var Ge = je ? Wa(Le, je) : S.call(Le, ", ");
    return W + " (" + Z + ") {" + Ge + "}";
  }
  function oh(W) {
    for (var Z = 0; Z < W.length; Z++)
      if (ae(W[Z], `
`) >= 0)
        return !1;
    return !0;
  }
  function ah(W, Z) {
    var Le;
    if (W.indent === "	")
      Le = "	";
    else if (typeof W.indent == "number" && W.indent > 0)
      Le = S.call(Array(W.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: S.call(Array(Z + 1), Le)
    };
  }
  function Wa(W, Z) {
    if (W.length === 0)
      return "";
    var Le = `
` + Z.prev + Z.base;
    return Le + S.call(W, "," + Le) + `
` + Z.prev;
  }
  function mo(W, Z) {
    var Le = me(W), je = [];
    if (Le) {
      je.length = W.length;
      for (var Ge = 0; Ge < W.length; Ge++)
        je[Ge] = H(W, Ge) ? Z(W[Ge], W) : "";
    }
    var Ne = typeof C == "function" ? C(W) : [], hn;
    if (E) {
      hn = {};
      for (var Pn = 0; Pn < Ne.length; Pn++)
        hn["$" + Ne[Pn]] = Ne[Pn];
    }
    for (var yt in W)
      H(W, yt) && (Le && String(Number(yt)) === yt && yt < W.length || E && hn["$" + yt] instanceof Symbol || (_.call(/[^\w$]/, yt) ? je.push(Z(yt, W) + ": " + Z(W[yt], W)) : je.push(yt + ": " + Z(W[yt], W))));
    if (typeof C == "function")
      for (var mn = 0; mn < Ne.length; mn++)
        P.call(W, Ne[mn]) && je.push("[" + Z(Ne[mn]) + "]: " + Z(W[Ne[mn]], W));
    return je;
  }
  return ys;
}
var bs, _c;
function CO() {
  if (_c) return bs;
  _c = 1;
  var e = /* @__PURE__ */ Da(), t = /* @__PURE__ */ yr(), n = function(l, d, u) {
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
  return bs = function() {
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
  }, bs;
}
var xs, kc;
function Jp() {
  return kc || (kc = 1, xs = Object), xs;
}
var ws, Sc;
function AO() {
  return Sc || (Sc = 1, ws = Error), ws;
}
var _s, Ec;
function TO() {
  return Ec || (Ec = 1, _s = EvalError), _s;
}
var ks, zc;
function OO() {
  return zc || (zc = 1, ks = RangeError), ks;
}
var Ss, $c;
function NO() {
  return $c || ($c = 1, Ss = ReferenceError), Ss;
}
var Es, Pc;
function RO() {
  return Pc || (Pc = 1, Es = SyntaxError), Es;
}
var zs, Cc;
function IO() {
  return Cc || (Cc = 1, zs = URIError), zs;
}
var $s, Ac;
function MO() {
  return Ac || (Ac = 1, $s = Math.abs), $s;
}
var Ps, Tc;
function DO() {
  return Tc || (Tc = 1, Ps = Math.floor), Ps;
}
var Cs, Oc;
function FO() {
  return Oc || (Oc = 1, Cs = Math.max), Cs;
}
var As, Nc;
function BO() {
  return Nc || (Nc = 1, As = Math.min), As;
}
var Ts, Rc;
function LO() {
  return Rc || (Rc = 1, Ts = Math.pow), Ts;
}
var Os, Ic;
function UO() {
  return Ic || (Ic = 1, Os = Math.round), Os;
}
var Ns, Mc;
function VO() {
  return Mc || (Mc = 1, Ns = Number.isNaN || function(t) {
    return t !== t;
  }), Ns;
}
var Rs, Dc;
function qO() {
  if (Dc) return Rs;
  Dc = 1;
  var e = /* @__PURE__ */ VO();
  return Rs = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Rs;
}
var Is, Fc;
function jO() {
  return Fc || (Fc = 1, Is = Object.getOwnPropertyDescriptor), Is;
}
var Ms, Bc;
function Qp() {
  if (Bc) return Ms;
  Bc = 1;
  var e = /* @__PURE__ */ jO();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ms = e, Ms;
}
var Ds, Lc;
function HO() {
  if (Lc) return Ds;
  Lc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ds = e, Ds;
}
var Fs, Uc;
function GO() {
  return Uc || (Uc = 1, Fs = function() {
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
  }), Fs;
}
var Bs, Vc;
function WO() {
  if (Vc) return Bs;
  Vc = 1;
  var e = typeof Symbol < "u" && Symbol, t = GO();
  return Bs = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Bs;
}
var Ls, qc;
function e0() {
  return qc || (qc = 1, Ls = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ls;
}
var Us, jc;
function t0() {
  if (jc) return Us;
  jc = 1;
  var e = /* @__PURE__ */ Jp();
  return Us = e.getPrototypeOf || null, Us;
}
var Vs, Hc;
function XO() {
  if (Hc) return Vs;
  Hc = 1;
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
    }, b = n(0, u.length - c.length), m = [], p = 0; p < b; p++)
      m[p] = "$" + p;
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, Vs;
}
var qs, Gc;
function Fa() {
  if (Gc) return qs;
  Gc = 1;
  var e = XO();
  return qs = Function.prototype.bind || e, qs;
}
var js, Wc;
function Cl() {
  return Wc || (Wc = 1, js = Function.prototype.call), js;
}
var Hs, Xc;
function n0() {
  return Xc || (Xc = 1, Hs = Function.prototype.apply), Hs;
}
var Gs, Yc;
function YO() {
  return Yc || (Yc = 1, Gs = typeof Reflect < "u" && Reflect && Reflect.apply), Gs;
}
var Ws, Kc;
function KO() {
  if (Kc) return Ws;
  Kc = 1;
  var e = Fa(), t = n0(), n = Cl(), r = YO();
  return Ws = r || e.call(n, t), Ws;
}
var Xs, Zc;
function r0() {
  if (Zc) return Xs;
  Zc = 1;
  var e = Fa(), t = /* @__PURE__ */ yr(), n = Cl(), r = KO();
  return Xs = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Xs;
}
var Ys, Jc;
function ZO() {
  if (Jc) return Ys;
  Jc = 1;
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
  return Ys = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : o(l));
    }
  ) : !1, Ys;
}
var Ks, Qc;
function JO() {
  if (Qc) return Ks;
  Qc = 1;
  var e = e0(), t = t0(), n = /* @__PURE__ */ ZO();
  return Ks = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Ks;
}
var Zs, ed;
function QO() {
  if (ed) return Zs;
  ed = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Fa();
  return Zs = n.call(e, t), Zs;
}
var Js, td;
function Al() {
  if (td) return Js;
  td = 1;
  var e, t = /* @__PURE__ */ Jp(), n = /* @__PURE__ */ AO(), r = /* @__PURE__ */ TO(), o = /* @__PURE__ */ OO(), a = /* @__PURE__ */ NO(), s = /* @__PURE__ */ RO(), l = /* @__PURE__ */ yr(), d = /* @__PURE__ */ IO(), u = /* @__PURE__ */ MO(), c = /* @__PURE__ */ DO(), f = /* @__PURE__ */ FO(), v = /* @__PURE__ */ BO(), b = /* @__PURE__ */ LO(), m = /* @__PURE__ */ UO(), p = /* @__PURE__ */ qO(), h = Function, g = function(Ee) {
    try {
      return h('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, k = /* @__PURE__ */ Qp(), w = /* @__PURE__ */ HO(), A = function() {
    throw new l();
  }, $ = k ? (function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return k(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  })() : A, _ = WO()(), y = JO(), S = t0(), L = e0(), M = n0(), I = Cl(), C = {}, q = typeof Uint8Array > "u" || !y ? e : y(Uint8Array), E = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && y ? y([][Symbol.iterator]()) : e,
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
    "%IteratorPrototype%": _ && y ? y(y([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !_ || !y ? e : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": k,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !_ || !y ? e : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": _ && y ? y(""[Symbol.iterator]()) : e,
    "%Symbol%": _ ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": $,
    "%TypedArray%": q,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": I,
    "%Function.prototype.apply%": M,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": u,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": b,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": L
  };
  if (y)
    try {
      null.error;
    } catch (Ee) {
      var F = y(y(Ee));
      E["%Error.prototype%"] = F;
    }
  var P = function Ee(le) {
    var we;
    if (le === "%AsyncFunction%")
      we = g("async function () {}");
    else if (le === "%GeneratorFunction%")
      we = g("function* () {}");
    else if (le === "%AsyncGeneratorFunction%")
      we = g("async function* () {}");
    else if (le === "%AsyncGenerator%") {
      var ie = Ee("%AsyncGeneratorFunction%");
      ie && (we = ie.prototype);
    } else if (le === "%AsyncIteratorPrototype%") {
      var ge = Ee("%AsyncGenerator%");
      ge && y && (we = y(ge.prototype));
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
  }, x = Fa(), V = /* @__PURE__ */ QO(), Q = x.call(I, Array.prototype.concat), ne = x.call(M, Array.prototype.splice), fe = x.call(I, String.prototype.replace), be = x.call(I, String.prototype.slice), _e = x.call(I, RegExp.prototype.exec), re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, me = function(le) {
    var we = be(le, 0, 1), ie = be(le, -1);
    if (we === "%" && ie !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ie === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ge = [];
    return fe(le, re, function(D, O, B, H) {
      ge[ge.length] = B ? fe(H, se, "$1") : O || D;
    }), ge;
  }, Ce = function(le, we) {
    var ie = le, ge;
    if (V(R, ie) && (ge = R[ie], ie = "%" + ge[0] + "%"), V(E, ie)) {
      var D = E[ie];
      if (D === C && (D = P(ie)), typeof D > "u" && !we)
        throw new l("intrinsic " + le + " exists, but is not available. Please file an issue!");
      return {
        alias: ge,
        name: ie,
        value: D
      };
    }
    throw new s("intrinsic " + le + " does not exist!");
  };
  return Js = function(le, we) {
    if (typeof le != "string" || le.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, le) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ie = me(le), ge = ie.length > 0 ? ie[0] : "", D = Ce("%" + ge + "%", we), O = D.name, B = D.value, H = !1, j = D.alias;
    j && (ge = j[0], ne(ie, Q([0, 1], j)));
    for (var oe = 1, ae = !0; oe < ie.length; oe += 1) {
      var de = ie[oe], pe = be(de, 0, 1), xe = be(de, -1);
      if ((pe === '"' || pe === "'" || pe === "`" || xe === '"' || xe === "'" || xe === "`") && pe !== xe)
        throw new s("property names with quotes must have matching quotes");
      if ((de === "constructor" || !ae) && (H = !0), ge += "." + de, O = "%" + ge + "%", V(E, O))
        B = E[O];
      else if (B != null) {
        if (!(de in B)) {
          if (!we)
            throw new l("base intrinsic for " + le + " exists, but the property is not available.");
          return;
        }
        if (k && oe + 1 >= ie.length) {
          var ze = k(B, de);
          ae = !!ze, ae && "get" in ze && !("originalValue" in ze.get) ? B = ze.get : B = B[de];
        } else
          ae = V(B, de), B = B[de];
        ae && !H && (E[O] = B);
      }
    }
    return B;
  }, Js;
}
var Qs, nd;
function o0() {
  if (nd) return Qs;
  nd = 1;
  var e = /* @__PURE__ */ Al(), t = r0(), n = t([e("%String.prototype.indexOf%")]);
  return Qs = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Qs;
}
var ei, rd;
function a0() {
  if (rd) return ei;
  rd = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ o0(), n = /* @__PURE__ */ Da(), r = /* @__PURE__ */ yr(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return ei = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(b) {
        if (!v.has(b))
          throw new r("Side channel does not contain " + n(b));
      },
      delete: function(b) {
        if (f) {
          var m = d(f, b);
          return u(f) === 0 && (f = void 0), m;
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
      set: function(b, m) {
        f || (f = new o()), s(f, b, m);
      }
    };
    return v;
  }, ei;
}
var ti, od;
function eN() {
  if (od) return ti;
  od = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ o0(), n = /* @__PURE__ */ Da(), r = a0(), o = /* @__PURE__ */ yr(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return ti = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, v, b = {
        assert: function(m) {
          if (!b.has(m))
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
      return b;
    }
  ) : r, ti;
}
var ni, ad;
function s0() {
  if (ad) return ni;
  ad = 1;
  var e = /* @__PURE__ */ yr(), t = /* @__PURE__ */ Da(), n = CO(), r = a0(), o = eN(), a = o || r || n;
  return ni = function() {
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
  }, ni;
}
var ri, sd;
function Tl() {
  if (sd) return ri;
  sd = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return ri = {
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
  }, ri;
}
var oi, id;
function i0() {
  if (id) return oi;
  id = 1;
  var e = /* @__PURE__ */ Tl(), t = s0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(y, S) {
    return o.set(y, S), y;
  }, s = function(y) {
    return o.has(y);
  }, l = function(y) {
    return o.get(y);
  }, d = function(y, S) {
    o.set(y, S);
  }, u = (function() {
    for (var _ = [], y = 0; y < 256; ++y)
      _[_.length] = "%" + ((y < 16 ? "0" : "") + y.toString(16)).toUpperCase();
    return _;
  })(), c = function(y) {
    for (; y.length > 1; ) {
      var S = y.pop(), L = S.obj[S.prop];
      if (r(L)) {
        for (var M = [], I = 0; I < L.length; ++I)
          typeof L[I] < "u" && (M[M.length] = L[I]);
        S.obj[S.prop] = M;
      }
    }
  }, f = function(y, S) {
    for (var L = S && S.plainObjects ? { __proto__: null } : {}, M = 0; M < y.length; ++M)
      typeof y[M] < "u" && (L[M] = y[M]);
    return L;
  }, v = function _(y, S, L) {
    if (!S)
      return y;
    if (typeof S != "object" && typeof S != "function") {
      if (r(y)) {
        var M = y.length;
        if (L && typeof L.arrayLimit == "number" && M > L.arrayLimit)
          return a(f(y.concat(S), L), M);
        y[M] = S;
      } else if (y && typeof y == "object")
        if (s(y)) {
          var I = l(y) + 1;
          y[I] = S, d(y, I);
        } else {
          if (L && L.strictMerge)
            return [y, S];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, S)) && (y[S] = !0);
        }
      else
        return [y, S];
      return y;
    }
    if (!y || typeof y != "object") {
      if (s(S)) {
        for (var C = Object.keys(S), q = L && L.plainObjects ? { __proto__: null, 0: y } : { 0: y }, E = 0; E < C.length; E++) {
          var F = parseInt(C[E], 10);
          q[F + 1] = S[C[E]];
        }
        return a(q, l(S) + 1);
      }
      var P = [y].concat(S);
      return L && typeof L.arrayLimit == "number" && P.length > L.arrayLimit ? a(f(P, L), P.length - 1) : P;
    }
    var R = y;
    return r(y) && !r(S) && (R = f(y, L)), r(y) && r(S) ? (S.forEach(function(x, V) {
      if (n.call(y, V)) {
        var Q = y[V];
        Q && typeof Q == "object" && x && typeof x == "object" ? y[V] = _(Q, x, L) : y[y.length] = x;
      } else
        y[V] = x;
    }), y) : Object.keys(S).reduce(function(x, V) {
      var Q = S[V];
      if (n.call(x, V) ? x[V] = _(x[V], Q, L) : x[V] = Q, s(S) && !s(x) && a(x, l(S)), s(x)) {
        var ne = parseInt(V, 10);
        String(ne) === V && ne >= 0 && ne > l(x) && d(x, ne);
      }
      return x;
    }, R);
  }, b = function(y, S) {
    return Object.keys(S).reduce(function(L, M) {
      return L[M] = S[M], L;
    }, y);
  }, m = function(_, y, S) {
    var L = _.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, p = 1024, h = function(y, S, L, M, I) {
    if (y.length === 0)
      return y;
    var C = y;
    if (typeof y == "symbol" ? C = Symbol.prototype.toString.call(y) : typeof y != "string" && (C = String(y)), L === "iso-8859-1")
      return escape(C).replace(/%u[0-9a-f]{4}/gi, function(V) {
        return "%26%23" + parseInt(V.slice(2), 16) + "%3B";
      });
    for (var q = "", E = 0; E < C.length; E += p) {
      for (var F = C.length >= p ? C.slice(E, E + p) : C, P = [], R = 0; R < F.length; ++R) {
        var x = F.charCodeAt(R);
        if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || I === e.RFC1738 && (x === 40 || x === 41)) {
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
      q += P.join("");
    }
    return q;
  }, g = function(y) {
    for (var S = [{ obj: { o: y }, prop: "o" }], L = [], M = 0; M < S.length; ++M)
      for (var I = S[M], C = I.obj[I.prop], q = Object.keys(C), E = 0; E < q.length; ++E) {
        var F = q[E], P = C[F];
        typeof P == "object" && P !== null && L.indexOf(P) === -1 && (S[S.length] = { obj: C, prop: F }, L[L.length] = P);
      }
    return c(S), y;
  }, k = function(y) {
    return Object.prototype.toString.call(y) === "[object RegExp]";
  }, w = function(y) {
    return !y || typeof y != "object" ? !1 : !!(y.constructor && y.constructor.isBuffer && y.constructor.isBuffer(y));
  }, A = function(y, S, L, M) {
    if (s(y)) {
      var I = l(y) + 1;
      return y[I] = S, d(y, I), y;
    }
    var C = [].concat(y, S);
    return C.length > L ? a(f(C, { plainObjects: M }), C.length - 1) : C;
  }, $ = function(y, S) {
    if (r(y)) {
      for (var L = [], M = 0; M < y.length; M += 1)
        L[L.length] = S(y[M]);
      return L;
    }
    return S(y);
  };
  return oi = {
    arrayToObject: f,
    assign: b,
    combine: A,
    compact: g,
    decode: m,
    encode: h,
    isBuffer: w,
    isOverflow: s,
    isRegExp: k,
    markOverflow: a,
    maybeMap: $,
    merge: v
  }, oi;
}
var ai, ld;
function tN() {
  if (ld) return ai;
  ld = 1;
  var e = s0(), t = /* @__PURE__ */ i0(), n = /* @__PURE__ */ Tl(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, g) {
      return h + "[" + g + "]";
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
  }, v = {}, b = function p(h, g, k, w, A, $, _, y, S, L, M, I, C, q, E, F, P, R) {
    for (var x = h, V = R, Q = 0, ne = !1; (V = V.get(v)) !== void 0 && !ne; ) {
      var fe = V.get(h);
      if (Q += 1, typeof fe < "u") {
        if (fe === Q)
          throw new RangeError("Cyclic object value");
        ne = !0;
      }
      typeof V.get(v) > "u" && (Q = 0);
    }
    if (typeof L == "function" ? x = L(g, x) : x instanceof Date ? x = C(x) : k === "comma" && a(x) && (x = t.maybeMap(x, function(O) {
      return O instanceof Date ? C(O) : O;
    })), x === null) {
      if ($)
        return S && !F ? S(g, c.encoder, P, "key", q) : g;
      x = "";
    }
    if (f(x) || t.isBuffer(x)) {
      if (S) {
        var be = F ? g : S(g, c.encoder, P, "key", q);
        return [E(be) + "=" + E(S(x, c.encoder, P, "value", q))];
      }
      return [E(g) + "=" + E(String(x))];
    }
    var _e = [];
    if (typeof x > "u")
      return _e;
    var re;
    if (k === "comma" && a(x))
      F && S && (x = t.maybeMap(x, S)), re = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (a(L))
      re = L;
    else {
      var se = Object.keys(x);
      re = M ? se.sort(M) : se;
    }
    var me = y ? String(g).replace(/\./g, "%2E") : String(g), Ce = w && a(x) && x.length === 1 ? me + "[]" : me;
    if (A && a(x) && x.length === 0)
      return Ce + "[]";
    for (var Ee = 0; Ee < re.length; ++Ee) {
      var le = re[Ee], we = typeof le == "object" && le && typeof le.value < "u" ? le.value : x[le];
      if (!(_ && we === null)) {
        var ie = I && y ? String(le).replace(/\./g, "%2E") : String(le), ge = a(x) ? typeof k == "function" ? k(Ce, ie) : Ce : Ce + (I ? "." + ie : "[" + ie + "]");
        R.set(h, Q);
        var D = e();
        D.set(v, R), l(_e, p(
          we,
          ge,
          k,
          w,
          A,
          $,
          _,
          y,
          k === "comma" && F && a(x) ? null : S,
          L,
          M,
          I,
          C,
          q,
          E,
          F,
          P,
          D
        ));
      }
    }
    return _e;
  }, m = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var g = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var k = n.default;
    if (typeof h.format < "u") {
      if (!r.call(n.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      k = h.format;
    }
    var w = n.formatters[k], A = c.filter;
    (typeof h.filter == "function" || a(h.filter)) && (A = h.filter);
    var $;
    if (h.arrayFormat in o ? $ = h.arrayFormat : "indices" in h ? $ = h.indices ? "indices" : "repeat" : $ = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var _ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: _,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: $,
      charset: g,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: A,
      format: k,
      formatter: w,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return ai = function(p, h) {
    var g = p, k = m(h), w, A;
    typeof k.filter == "function" ? (A = k.filter, g = A("", g)) : a(k.filter) && (A = k.filter, w = A);
    var $ = [];
    if (typeof g != "object" || g === null)
      return "";
    var _ = o[k.arrayFormat], y = _ === "comma" && k.commaRoundTrip;
    w || (w = Object.keys(g)), k.sort && w.sort(k.sort);
    for (var S = e(), L = 0; L < w.length; ++L) {
      var M = w[L], I = g[M];
      k.skipNulls && I === null || l($, b(
        I,
        M,
        _,
        y,
        k.allowEmptyArrays,
        k.strictNullHandling,
        k.skipNulls,
        k.encodeDotInKeys,
        k.encode ? k.encoder : null,
        k.filter,
        k.sort,
        k.allowDots,
        k.serializeDate,
        k.format,
        k.formatter,
        k.encodeValuesOnly,
        k.charset,
        S
      ));
    }
    var C = $.join(k.delimiter), q = k.addQueryPrefix === !0 ? "?" : "";
    return k.charsetSentinel && (k.charset === "iso-8859-1" ? q += "utf8=%26%2310003%3B&" : q += "utf8=%E2%9C%93&"), C.length > 0 ? q + C : "";
  }, ai;
}
var si, ud;
function nN() {
  if (ud) return si;
  ud = 1;
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
    return b.replace(/&#(\d+);/g, function(m, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, a = function(b, m, p) {
    if (b && typeof b == "string" && m.comma && b.indexOf(",") > -1)
      return b.split(",");
    if (m.throwOnLimitExceeded && p >= m.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return b;
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", d = function(m, p) {
    var h = { __proto__: null }, g = p.ignoreQueryPrefix ? m.replace(/^\?/, "") : m;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var k = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, w = g.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof k < "u" ? k + 1 : k
    );
    if (p.throwOnLimitExceeded && typeof k < "u" && w.length > k)
      throw new RangeError("Parameter limit exceeded. Only " + k + " parameter" + (k === 1 ? "" : "s") + " allowed.");
    var A = -1, $, _ = p.charset;
    if (p.charsetSentinel)
      for ($ = 0; $ < w.length; ++$)
        w[$].indexOf("utf8=") === 0 && (w[$] === l ? _ = "utf-8" : w[$] === s && (_ = "iso-8859-1"), A = $, $ = w.length);
    for ($ = 0; $ < w.length; ++$)
      if ($ !== A) {
        var y = w[$], S = y.indexOf("]="), L = S === -1 ? y.indexOf("=") : S + 1, M, I;
        if (L === -1 ? (M = p.decoder(y, r.decoder, _, "key"), I = p.strictNullHandling ? null : "") : (M = p.decoder(y.slice(0, L), r.decoder, _, "key"), M !== null && (I = e.maybeMap(
          a(
            y.slice(L + 1),
            p,
            n(h[M]) ? h[M].length : 0
          ),
          function(q) {
            return p.decoder(q, r.decoder, _, "value");
          }
        ))), I && p.interpretNumericEntities && _ === "iso-8859-1" && (I = o(String(I))), y.indexOf("[]=") > -1 && (I = n(I) ? [I] : I), p.comma && n(I) && I.length > p.arrayLimit) {
          if (p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          I = e.combine([], I, p.arrayLimit, p.plainObjects);
        }
        if (M !== null) {
          var C = t.call(h, M);
          C && (p.duplicates === "combine" || y.indexOf("[]=") > -1) ? h[M] = e.combine(
            h[M],
            I,
            p.arrayLimit,
            p.plainObjects
          ) : (!C || p.duplicates === "last") && (h[M] = I);
        }
      }
    return h;
  }, u = function(b, m, p, h) {
    var g = 0;
    if (b.length > 0 && b[b.length - 1] === "[]") {
      var k = b.slice(0, -1).join("");
      g = Array.isArray(m) && m[k] ? m[k].length : 0;
    }
    for (var w = h ? m : a(m, p, g), A = b.length - 1; A >= 0; --A) {
      var $, _ = b[A];
      if (_ === "[]" && p.parseArrays)
        e.isOverflow(w) ? $ = w : $ = p.allowEmptyArrays && (w === "" || p.strictNullHandling && w === null) ? [] : e.combine(
          [],
          w,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        $ = p.plainObjects ? { __proto__: null } : {};
        var y = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, S = p.decodeDotInKeys ? y.replace(/%2E/g, ".") : y, L = parseInt(S, 10), M = !isNaN(L) && _ !== S && String(L) === S && L >= 0 && p.parseArrays;
        if (!p.parseArrays && S === "")
          $ = { 0: w };
        else if (M && L < p.arrayLimit)
          $ = [], $[L] = w;
        else {
          if (M && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          M ? ($[L] = w, e.markOverflow($, L)) : S !== "__proto__" && ($[S] = w);
        }
      }
      w = $;
    }
    return w;
  }, c = function(m, p) {
    var h = p.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, h) && !p.allowPrototypes ? void 0 : [h];
    var g = /(\[[^[\]]*])/, k = /(\[[^[\]]*])/g, w = g.exec(h), A = w ? h.slice(0, w.index) : h, $ = [];
    if (A) {
      if (!p.plainObjects && t.call(Object.prototype, A) && !p.allowPrototypes)
        return;
      $[$.length] = A;
    }
    for (var _ = 0; (w = k.exec(h)) !== null && _ < p.depth; ) {
      _ += 1;
      var y = w[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, y) && !p.allowPrototypes)
        return;
      $[$.length] = w[1];
    }
    if (w) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      $[$.length] = "[" + h.slice(w.index) + "]";
    }
    return $;
  }, f = function(m, p, h, g) {
    if (m) {
      var k = c(m, h);
      if (k)
        return u(k, p, h, g);
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
    var g = typeof m.allowDots > "u" ? m.decodeDotInKeys === !0 ? !0 : r.allowDots : !!m.allowDots;
    return {
      allowDots: g,
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
  return si = function(b, m) {
    var p = v(m);
    if (b === "" || b === null || typeof b > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var h = typeof b == "string" ? d(b, p) : b, g = p.plainObjects ? { __proto__: null } : {}, k = Object.keys(h), w = 0; w < k.length; ++w) {
      var A = k[w], $ = f(A, h[A], p, typeof b == "string");
      g = e.merge(g, $, p);
    }
    return p.allowSparse === !0 ? g : e.compact(g);
  }, si;
}
var ii, cd;
function rN() {
  if (cd) return ii;
  cd = 1;
  var e = /* @__PURE__ */ tN(), t = /* @__PURE__ */ nN(), n = /* @__PURE__ */ Tl();
  return ii = {
    formats: n,
    parse: t,
    stringify: e
  }, ii;
}
var dd = /* @__PURE__ */ rN();
function l0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: oN } = Object.prototype, { getPrototypeOf: Ol } = Object, { iterator: Ba, toStringTag: u0 } = Symbol, La = /* @__PURE__ */ ((e) => (t) => {
  const n = oN.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ut = (e) => (e = e.toLowerCase(), (t) => La(t) === e), Ua = (e) => (t) => typeof t === e, { isArray: br } = Array, pr = Ua("undefined");
function uo(e) {
  return e !== null && !pr(e) && e.constructor !== null && !pr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const c0 = Ut("ArrayBuffer");
function aN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && c0(e.buffer), t;
}
const sN = Ua("string"), ht = Ua("function"), d0 = Ua("number"), co = (e) => e !== null && typeof e == "object", iN = (e) => e === !0 || e === !1, Vo = (e) => {
  if (La(e) !== "object")
    return !1;
  const t = Ol(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(u0 in e) && !(Ba in e);
}, lN = (e) => {
  if (!co(e) || uo(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, uN = Ut("Date"), cN = Ut("File"), dN = (e) => !!(e && typeof e.uri < "u"), fN = (e) => e && typeof e.getParts < "u", pN = Ut("Blob"), hN = Ut("FileList"), mN = (e) => co(e) && ht(e.pipe);
function vN() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const fd = vN(), pd = typeof fd.FormData < "u" ? fd.FormData : void 0, gN = (e) => {
  let t;
  return e && (pd && e instanceof pd || ht(e.append) && ((t = La(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, yN = Ut("URLSearchParams"), [bN, xN, wN, _N] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ut), kN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), br(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (uo(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (r = 0; r < s; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function f0(e, t) {
  if (uo(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, p0 = (e) => !pr(e) && e !== Rn;
function Wi() {
  const { caseless: e, skipUndefined: t } = p0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const s = e && f0(n, a) || a;
    Vo(n[s]) && Vo(o) ? n[s] = Wi(n[s], o) : Vo(o) ? n[s] = Wi({}, o) : br(o) ? n[s] = o.slice() : (!t || !pr(o)) && (n[s] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && fo(arguments[o], r);
  return n;
}
const SN = (e, t, n, { allOwnKeys: r } = {}) => (fo(
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
), e), EN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $N = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Ol(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, PN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, CN = (e) => {
  if (!e) return null;
  if (br(e)) return e;
  let t = e.length;
  if (!d0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, AN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ol(Uint8Array)), TN = (e, t) => {
  const r = (e && e[Ba]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, ON = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, NN = Ut("HTMLFormElement"), RN = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), hd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), IN = Ut("RegExp"), h0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  fo(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, MN = (e) => {
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
}, DN = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return br(e) ? r(e) : r(String(e).split(t)), n;
}, FN = () => {
}, BN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function LN(e) {
  return !!(e && ht(e.append) && e[u0] === "FormData" && e[Ba]);
}
const UN = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (co(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (uo(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = br(r) ? [] : {};
        return fo(r, (s, l) => {
          const d = n(s, o + 1);
          !pr(d) && (a[l] = d);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, VN = Ut("AsyncFunction"), qN = (e) => e && (co(e) || ht(e)) && ht(e.then) && ht(e.catch), m0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Rn.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Rn && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Rn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Rn.postMessage)), jN = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rn) : typeof process < "u" && process.nextTick || m0, HN = (e) => e != null && ht(e[Ba]), K = {
  isArray: br,
  isArrayBuffer: c0,
  isBuffer: uo,
  isFormData: gN,
  isArrayBufferView: aN,
  isString: sN,
  isNumber: d0,
  isBoolean: iN,
  isObject: co,
  isPlainObject: Vo,
  isEmptyObject: lN,
  isReadableStream: bN,
  isRequest: xN,
  isResponse: wN,
  isHeaders: _N,
  isUndefined: pr,
  isDate: uN,
  isFile: cN,
  isReactNativeBlob: dN,
  isReactNative: fN,
  isBlob: pN,
  isRegExp: IN,
  isFunction: ht,
  isStream: mN,
  isURLSearchParams: yN,
  isTypedArray: AN,
  isFileList: hN,
  forEach: fo,
  merge: Wi,
  extend: SN,
  trim: kN,
  stripBOM: EN,
  inherits: zN,
  toFlatObject: $N,
  kindOf: La,
  kindOfTest: Ut,
  endsWith: PN,
  toArray: CN,
  forEachEntry: TN,
  matchAll: ON,
  isHTMLForm: NN,
  hasOwnProperty: hd,
  hasOwnProp: hd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: h0,
  freezeMethods: MN,
  toObjectSet: DN,
  toCamelCase: RN,
  noop: FN,
  toFiniteNumber: BN,
  findKey: f0,
  global: Rn,
  isContextDefined: p0,
  isSpecCompliantForm: LN,
  toJSONObject: UN,
  isAsyncFn: VN,
  isThenable: qN,
  setImmediate: m0,
  asap: jN,
  isIterable: HN
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
      config: K.toJSONObject(this.config),
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
const GN = null;
function Xi(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function g0(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function li(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = g0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function WN(e) {
  return K.isArray(e) && !e.some(Xi);
}
const XN = K.toFlatObject(K, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Va(e, t, n) {
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
  const r = n.metaTokens, o = n.visitor || c, a = n.dots, s = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && K.isSpecCompliantForm(t);
  if (!K.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (K.isDate(m))
      return m.toISOString();
    if (K.isBoolean(m))
      return m.toString();
    if (!d && K.isBlob(m))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(m) || K.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, p, h) {
    let g = m;
    if (K.isReactNative(t) && K.isReactNativeBlob(m))
      return t.append(li(h, p, a), u(m)), !1;
    if (m && !h && typeof m == "object") {
      if (K.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (K.isArray(m) && WN(m) || (K.isFileList(m) || K.endsWith(p, "[]")) && (g = K.toArray(m)))
        return p = g0(p), g.forEach(function(w, A) {
          !(K.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? li([p], A, a) : s === null ? p : p + "[]",
            u(w)
          );
        }), !1;
    }
    return Xi(m) ? !0 : (t.append(li(h, p, a), u(m)), !1);
  }
  const f = [], v = Object.assign(XN, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Xi
  });
  function b(m, p) {
    if (!K.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), K.forEach(m, function(g, k) {
        (!(K.isUndefined(g) || g === null) && o.call(t, g, K.isString(k) ? k.trim() : k, p, v)) === !0 && b(g, p ? p.concat(k) : [k]);
      }), f.pop();
    }
  }
  if (!K.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function md(e) {
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
  this._pairs = [], e && Va(e, this, t);
}
const y0 = Nl.prototype;
y0.append = function(t, n) {
  this._pairs.push([t, n]);
};
y0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, md);
  } : md;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function YN(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function b0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || YN, o = K.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let s;
  if (a ? s = a(t, o) : s = K.isURLSearchParams(t) ? t.toString() : new Nl(t, o).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class vd {
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
}, KN = typeof URLSearchParams < "u" ? URLSearchParams : Nl, ZN = typeof FormData < "u" ? FormData : null, JN = typeof Blob < "u" ? Blob : null, QN = {
  isBrowser: !0,
  classes: {
    URLSearchParams: KN,
    FormData: ZN,
    Blob: JN
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Il = typeof window < "u" && typeof document < "u", Yi = typeof navigator == "object" && navigator || void 0, e8 = Il && (!Yi || ["ReactNative", "NativeScript", "NS"].indexOf(Yi.product) < 0), t8 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", n8 = Il && window.location.href || "http://localhost", r8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Il,
  hasStandardBrowserEnv: e8,
  hasStandardBrowserWebWorkerEnv: t8,
  navigator: Yi,
  origin: n8
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...r8,
  ...QN
};
function o8(e, t) {
  return Va(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ct.isNode && K.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function a8(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function s8(e) {
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
    return s = !s && K.isArray(o) ? o.length : s, d ? (K.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !K.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && K.isArray(o[s]) && (o[s] = s8(o[s])), !l);
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const n = {};
    return K.forEachEntry(e, (r, o) => {
      t(a8(r), o, n, 0);
    }), n;
  }
  return null;
}
function i8(e, t, n) {
  if (K.isString(e))
    try {
      return (t || JSON.parse)(e), K.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const po = {
  transitional: Rl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = K.isObject(t);
      if (a && K.isHTMLForm(t) && (t = new FormData(t)), K.isFormData(t))
        return o ? JSON.stringify(x0(t)) : t;
      if (K.isArrayBuffer(t) || K.isBuffer(t) || K.isStream(t) || K.isFile(t) || K.isBlob(t) || K.isReadableStream(t))
        return t;
      if (K.isArrayBufferView(t))
        return t.buffer;
      if (K.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return o8(t, this.formSerializer).toString();
        if ((l = K.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return Va(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), i8(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || po.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (K.isResponse(t) || K.isReadableStream(t))
        return t;
      if (t && K.isString(t) && (r && !this.responseType || o)) {
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
K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  po.headers[e] = {};
});
const l8 = K.toObjectSet([
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
]), u8 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && l8[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, gd = /* @__PURE__ */ Symbol("internals"), c8 = (e) => !/[\r\n]/.test(e);
function w0(e, t) {
  if (!(e === !1 || e == null)) {
    if (K.isArray(e)) {
      e.forEach((n) => w0(n, t));
      return;
    }
    if (!c8(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function zr(e) {
  return e && String(e).trim().toLowerCase();
}
function d8(e) {
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
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(qo) : d8(String(e));
}
function f8(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const p8 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ui(e, t, n, r, o) {
  if (K.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!K.isString(t)) {
    if (K.isString(r))
      return t.indexOf(r) !== -1;
    if (K.isRegExp(r))
      return r.test(t);
  }
}
function h8(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function m8(e, t) {
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
    function a(l, d, u) {
      const c = zr(d);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = K.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (w0(l, d), o[f || d] = qo(l));
    }
    const s = (l, d) => K.forEach(l, (u, c) => a(u, c, d));
    if (K.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (K.isString(t) && (t = t.trim()) && !p8(t))
      s(u8(t), n);
    else if (K.isObject(t) && K.isIterable(t)) {
      let l = {}, d, u;
      for (const c of t) {
        if (!K.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = c[0]] = (d = l[u]) ? K.isArray(d) ? [...d, c[1]] : [d, c[1]] : c[1];
      }
      s(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = zr(t), t) {
      const r = K.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return f8(o);
        if (K.isFunction(n))
          return n.call(this, o, r);
        if (K.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = zr(t), t) {
      const r = K.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ui(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = zr(s), s) {
        const l = K.findKey(r, s);
        l && (!n || ui(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return K.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ui(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return K.forEach(this, (o, a) => {
      const s = K.findKey(r, a);
      if (s) {
        n[s] = qo(o), delete n[a];
        return;
      }
      const l = t ? h8(a) : String(a).trim();
      l !== a && delete n[a], n[l] = qo(o), r[l] = !0;
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
    const r = (this[gd] = this[gd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = zr(s);
      r[l] || (m8(o, s), r[l] = !0);
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
  const n = this || po, r = t || n, o = mt.from(r.headers);
  let a = r.data;
  return K.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function _0(e) {
  return !!(e && e.__CANCEL__);
}
let ho = class extends ke {
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
function v8(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function g8(e, t) {
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
function y8(e, t) {
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
const pa = (e, t, n = 3) => {
  let r = 0;
  const o = g8(50, 250);
  return y8((a) => {
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
}, yd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, bd = (e) => (...t) => K.asap(() => e(...t)), b8 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, x8 = ct.hasStandardBrowserEnv ? (
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
function w8(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function _8(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function S0(e, t, n) {
  let r = !w8(t);
  return e && (r || n == !1) ? _8(e, t) : t;
}
const xd = (e) => e instanceof mt ? { ...e } : e;
function Hn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, v) {
    return K.isPlainObject(u) && K.isPlainObject(c) ? K.merge.call({ caseless: v }, u, c) : K.isPlainObject(c) ? K.merge({}, c) : K.isArray(c) ? c.slice() : c;
  }
  function o(u, c, f, v) {
    if (K.isUndefined(c)) {
      if (!K.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, c, f, v);
  }
  function a(u, c) {
    if (!K.isUndefined(c))
      return r(void 0, c);
  }
  function s(u, c) {
    if (K.isUndefined(c)) {
      if (!K.isUndefined(u))
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
    headers: (u, c, f) => o(xd(u), xd(c), f, !0)
  };
  return K.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = K.hasOwnProp(d, c) ? d[c] : o, v = f(e[c], t[c], c);
    K.isUndefined(v) && f !== l || (n[c] = v);
  }), n;
}
const E0 = (e) => {
  const t = Hn({}, e);
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
  ), K.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (K.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([c, f]) => {
        u.includes(c.toLowerCase()) && s.set(c, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && K.isFunction(r) && (r = r(t)), r || r !== !1 && b8(t.url))) {
    const d = o && a && x8.read(a);
    d && s.set(o, d);
  }
  return t;
}, k8 = typeof XMLHttpRequest < "u", S8 = k8 && function(e) {
  return new Promise(function(n, r) {
    const o = E0(e);
    let a = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = o, c, f, v, b, m;
    function p() {
      b && b(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function g() {
      if (!h)
        return;
      const w = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), $ = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: w,
        config: e,
        request: h
      };
      k0(
        function(y) {
          n(y), p();
        },
        function(y) {
          r(y), p();
        },
        $
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, h.onabort = function() {
      h && (r(new ke("Request aborted", ke.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(A) {
      const $ = A && A.message ? A.message : "Network Error", _ = new ke($, ke.ERR_NETWORK, e, h);
      _.event = A || null, r(_), h = null;
    }, h.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || Rl;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(
        new ke(
          A,
          $.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in h && K.forEach(s.toJSON(), function(A, $) {
      h.setRequestHeader($, A);
    }), K.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([v, m] = pa(u, !0), h.addEventListener("progress", v)), d && h.upload && ([f, b] = pa(d), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", b)), (o.cancelToken || o.signal) && (c = (w) => {
      h && (r(!w || w.type ? new ho(null, e, h) : w), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const k = v8(o.url);
    if (k && ct.protocols.indexOf(k) === -1) {
      r(
        new ke(
          "Unsupported protocol " + k + ":",
          ke.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(a || null);
  });
}, E8 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(u) {
      if (!o) {
        o = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(
          c instanceof ke ? c : new ho(c instanceof Error ? c.message : c)
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
    return d.unsubscribe = () => K.asap(l), d;
  }
}, z8 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, $8 = async function* (e, t) {
  for await (const n of P8(e))
    yield* z8(n, t);
}, P8 = async function* (e) {
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
}, wd = (e, t, n, r) => {
  const o = $8(e, t);
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
}, _d = 64 * 1024, { isFunction: Ao } = K, C8 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(K.global), { ReadableStream: kd, TextEncoder: Sd } = K.global, Ed = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, A8 = (e) => {
  e = K.merge.call(
    {
      skipUndefined: !0
    },
    C8,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? Ao(t) : typeof fetch == "function", a = Ao(n), s = Ao(r);
  if (!o)
    return !1;
  const l = o && Ao(kd), d = o && (typeof Sd == "function" ? /* @__PURE__ */ ((m) => (p) => m.encode(p))(new Sd()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), u = a && l && Ed(() => {
    let m = !1;
    const p = new kd(), h = new n(ct.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), m && !h;
  }), c = s && l && Ed(() => K.isReadableStream(new r("").body)), f = {
    stream: c && ((m) => m.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !f[m] && (f[m] = (p, h) => {
      let g = p && p[m];
      if (g)
        return g.call(p);
      throw new ke(
        `Response type '${m}' is not supported`,
        ke.ERR_NOT_SUPPORT,
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
      return (await new n(ct.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (K.isArrayBufferView(m) || K.isArrayBuffer(m))
      return m.byteLength;
    if (K.isURLSearchParams(m) && (m = m + ""), K.isString(m))
      return (await d(m)).byteLength;
  }, b = async (m, p) => {
    const h = K.toFiniteNumber(m.getContentLength());
    return h ?? v(p);
  };
  return async (m) => {
    let {
      url: p,
      method: h,
      data: g,
      signal: k,
      cancelToken: w,
      timeout: A,
      onDownloadProgress: $,
      onUploadProgress: _,
      responseType: y,
      headers: S,
      withCredentials: L = "same-origin",
      fetchOptions: M
    } = E0(m), I = t || fetch;
    y = y ? (y + "").toLowerCase() : "text";
    let C = E8(
      [k, w && w.toAbortSignal()],
      A
    ), q = null;
    const E = C && C.unsubscribe && (() => {
      C.unsubscribe();
    });
    let F;
    try {
      if (_ && u && h !== "get" && h !== "head" && (F = await b(S, g)) !== 0) {
        let ne = new n(p, {
          method: "POST",
          body: g,
          duplex: "half"
        }), fe;
        if (K.isFormData(g) && (fe = ne.headers.get("content-type")) && S.setContentType(fe), ne.body) {
          const [be, _e] = yd(
            F,
            pa(bd(_))
          );
          g = wd(ne.body, _d, be, _e);
        }
      }
      K.isString(L) || (L = L ? "include" : "omit");
      const P = a && "credentials" in n.prototype, R = {
        ...M,
        signal: C,
        method: h.toUpperCase(),
        headers: S.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: P ? L : void 0
      };
      q = a && new n(p, R);
      let x = await (a ? I(q, M) : I(p, R));
      const V = c && (y === "stream" || y === "response");
      if (c && ($ || V && E)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach((re) => {
          ne[re] = x[re];
        });
        const fe = K.toFiniteNumber(x.headers.get("content-length")), [be, _e] = $ && yd(
          fe,
          pa(bd($), !0)
        ) || [];
        x = new r(
          wd(x.body, _d, be, () => {
            _e && _e(), E && E();
          }),
          ne
        );
      }
      y = y || "text";
      let Q = await f[K.findKey(f, y) || "text"](
        x,
        m
      );
      return !V && E && E(), await new Promise((ne, fe) => {
        k0(ne, fe, {
          data: Q,
          headers: mt.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: m,
          request: q
        });
      });
    } catch (P) {
      throw E && E(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new ke(
          "Network Error",
          ke.ERR_NETWORK,
          m,
          q,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : ke.from(P, P && P.code, m, q, P && P.response);
    }
  };
}, T8 = /* @__PURE__ */ new Map(), z0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let s = a.length, l = s, d, u, c = T8;
  for (; l--; )
    d = a[l], u = c.get(d), u === void 0 && c.set(d, u = l ? /* @__PURE__ */ new Map() : A8(t)), c = u;
  return u;
};
z0();
const Ml = {
  http: GN,
  xhr: S8,
  fetch: {
    get: z0
  }
};
K.forEach(Ml, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zd = (e) => `- ${e}`, O8 = (e) => K.isFunction(e) || e === null || e === !1;
function N8(e, t) {
  e = K.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (o = r, !O8(r) && (o = Ml[(l = String(r)).toLowerCase()], o === void 0))
      throw new ke(`Unknown adapter '${l}'`);
    if (o && (K.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(a).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map(zd).join(`
`) : " " + zd(s[0]) : "as no adapter specified";
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
  getAdapter: N8,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ml
};
function di(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ho(null, e);
}
function $d(e) {
  return di(e), e.headers = mt.from(e.headers), e.data = ci.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $0.getAdapter(e.adapter || po.adapter, e)(e).then(
    function(r) {
      return di(e), r.data = ci.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return _0(r) || (di(e), r && r.response && (r.response.data = ci.call(
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
const Pd = {};
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
    return n && !Pd[s] && (Pd[s] = !0, console.warn(
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
function R8(e, t, n) {
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
const jo = {
  assertOptions: R8,
  validators: qa
}, Et = jo.validators;
let Fn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new vd(),
      response: new vd()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Hn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && jo.assertOptions(
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
    } : jo.assertOptions(
      o,
      {
        encode: Et.function,
        serialize: Et.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jo.assertOptions(
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
      const m = [$d.bind(this), void 0];
      for (m.unshift(...l), m.push(...u), v = m.length, c = Promise.resolve(n); f < v; )
        c = c.then(m[f++], m[f++]);
      return c;
    }
    v = l.length;
    let b = n;
    for (; f < v; ) {
      const m = l[f++], p = l[f++];
      try {
        b = m(b);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      c = $d.call(this, b);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, v = u.length; f < v; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Hn(this.defaults, t);
    const n = S0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return b0(n, t.params, t.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function(t) {
  Fn.prototype[t] = function(n, r) {
    return this.request(
      Hn(r || {}, {
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
        Hn(l || {}, {
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
  Fn.prototype[t] = n(), Fn.prototype[t + "Form"] = n(!0);
});
let I8 = class C0 {
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
      r.reason || (r.reason = new ho(a, s, l), n(r.reason));
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
function M8(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function D8(e) {
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
function A0(e) {
  const t = new Fn(e), n = l0(Fn.prototype.request, t);
  return K.extend(n, Fn.prototype, t, { allOwnKeys: !0 }), K.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return A0(Hn(e, o));
  }, n;
}
const Je = A0(po);
Je.Axios = Fn;
Je.CanceledError = ho;
Je.CancelToken = I8;
Je.isCancel = _0;
Je.VERSION = P0;
Je.toFormData = Va;
Je.AxiosError = ke;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = M8;
Je.isAxiosError = D8;
Je.mergeConfig = Hn;
Je.AxiosHeaders = mt;
Je.formToJSON = (e) => x0(K.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = $0.getAdapter;
Je.HttpStatusCode = Ki;
Je.default = Je;
const {
  Axios: PR,
  AxiosError: CR,
  CanceledError: AR,
  isCancel: T0,
  CancelToken: TR,
  VERSION: OR,
  all: NR,
  Cancel: RR,
  isAxiosError: O0,
  spread: IR,
  toFormData: MR,
  AxiosHeaders: DR,
  HttpStatusCode: FR,
  formToJSON: BR,
  getAdapter: LR,
  mergeConfig: F8
} = Je;
var B8 = class {
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
    return Zp(this.config, e) ? wt(this.config, e) : wt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? zt(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      zt(this.config, n, r);
    });
  }
}, En = new B8({
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
function no(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function St(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Cd = (e) => St("before", { cancelable: !0, detail: { visit: e } }), L8 = (e) => St("error", { detail: { errors: e } }), U8 = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), V8 = (e) => St("finish", { detail: { visit: e } }), q8 = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), j8 = (e) => St("beforeUpdate", { detail: { page: e } }), Br = (e) => St("navigate", { detail: { page: e } }), H8 = (e) => St("progress", { detail: { progress: e } }), G8 = (e) => St("start", { detail: { visit: e } }), W8 = (e) => St("success", { detail: { page: e } }), X8 = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), Y8 = (e) => St("prefetching", { detail: { visit: e } }), ha = (e) => St("flash", { detail: { flash: e } }), dt = class {
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
var K8 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = N0(), n = await R0(), r = await n6(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await J8(t, r, e);
}, hr = {
  key: "historyKey",
  iv: "historyIv"
}, Z8 = async (e) => {
  const t = N0(), n = await R0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await Q8(t, n, e);
}, J8 = async (e, t, n) => {
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
}, Q8 = async (e, t, n) => {
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
  const e = dt.get(hr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(hr.iv, Array.from(t)), t;
}, e6 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), t6 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(hr.key, Array.from(new Uint8Array(t)));
}, n6 = async (e) => {
  if (e)
    return e;
  const t = await e6();
  return t ? (await t6(t), t) : null;
}, R0 = async () => {
  const e = dt.get(hr.key);
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
    if (!n.includes(r) && e[r] !== t[r] && !r6(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, r6 = (e, t) => {
  switch (typeof e) {
    case "object":
      return I0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, o6 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Ad = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(o6))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, a6 = class {
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
    return [Ad(t), Ad(n)];
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
}, Ht = new a6(), fi = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, s6 = (e) => {
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
    return e.filter((a) => fi(a));
  const n = e.indexOf(t), r = [], o = [];
  for (let a = n; a >= 0; a--) {
    const s = e[a];
    if (fi(s))
      r.push(s);
    else
      break;
  }
  for (let a = n + 1; a < e.length; a++) {
    const s = e[a];
    if (fi(s))
      o.push(s);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Lr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Lr(e, t - 1) : e();
  });
}, Nr = typeof window > "u", i6 = !Nr && /Firefox/i.test(window.navigator.userAgent), ft = class {
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
    if (i6 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Lr(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    !Nr && window.location.hash || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Nr ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Nr || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Nr || this.regions().forEach((t, n) => {
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
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var l6 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? $t(e) : e;
  if ((Zi(t) || r) && !Ji(t) && (En.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = D0(t, new FormData(), null, o)), Ji(t))
    return [a, t];
  const [s, l] = Fl(n, a, t, o);
  return [$t(s), l];
};
function Fl(e, t, n, r = "brackets") {
  const o = e === "get" && !Ji(n) && Object.keys(n).length > 0, a = L0(t.toString()), s = a || t.toString().startsWith("/") || t.toString() === "", l = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), d = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), b = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = dd.stringify(
      { ...dd.parse(f.search, b), ...n },
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
function ma(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Td = (e, t) => {
  e.hash && !t.hash && ma(e).href === t.href && (t.hash = e.hash);
}, va = (e, t) => ma(e).href === ma(t).href, u6 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function cn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function L0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function c6(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var d6 = class {
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
      t = t || va($t(e.url), d);
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
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(u)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Yt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Br(e);
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
}, he = new d6(), ja = class {
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
}, tr = typeof window > "u", $r = new ja(), Od = !tr && /CriOS/.test(window.navigator.userAgent), f6 = class {
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
    if (!tr)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!tr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, $r.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Od ? new Promise((o) => {
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
    return new Promise((n) => e.encryptHistory ? K8(t).then(n) : n(t));
  }
  processQueue() {
    return $r.process();
  }
  decrypt(e = null) {
    if (tr)
      return Promise.resolve(e ?? he.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? Z8(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    $r.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !_n(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    $r.add(() => Promise.resolve().then(() => {
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
    if (he.merge(r), !tr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, $r.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Od ? new Promise((s) => {
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
    return !tr && !!window.history.state?.page;
  }
  clear() {
    dt.remove(hr.key), dt.remove(hr.iv);
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
var De = new f6(), p6 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", no(ft.onWindowScroll.bind(ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", no(ft.onScroll.bind(ft), 100), !0);
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
      const n = $t(he.get().url);
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
        ft.restore(De.getScrollRegions()), Br(he.get());
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
}, Yt = new p6(), h6 = class {
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
}, pi = new h6(), m6 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    pi.isReload() && (De.deleteState(De.rememberedState), De.clearInitialState(De.rememberedState));
  }
  static handleBackForward() {
    if (!pi.isBackForward() || !De.browserHasHistoryEntry())
      return !1;
    const e = De.getScrollRegions();
    return De.decrypt().then((t) => {
      he.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Br(he.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
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
        e.preserveScroll && ft.restore(n), Br(he.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && he.setUrlHash(window.location.hash), he.set(he.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      pi.isReload() ? ft.restore(De.getScrollRegions()) : ft.scrollToAnchor();
      const e = he.get();
      Br(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => ha(t));
    });
  }
}, v6 = class {
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
}, g6 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new v6(e, t, n);
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
}, y6 = new g6(), Qi = class Ho {
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
    return new Ho(t);
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
    this.params.preserveScroll = Ho.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Ho.resolvePreserveOption(this.params.preserveState, t);
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
}, b6 = {
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
}, x6 = new ja(), Nd = class V0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new V0(t, n, r);
  }
  async handlePrefetch() {
    va(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return x6.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), X8(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await De.processQueue(), De.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = he.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return L8(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(he.get().url);
    const { flash: n } = he.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (ha(n), this.requestParams.all().onFlash(n)), W8(he.get()), await this.requestParams.all().onSuccess(he.get()), De.preserveUrl = !1;
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
      return Td(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (q8(t))
      return En.get("future.useDialogForErrorModal") ? b6.show(t.data) : U0.show(t.data);
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
      va(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), he.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = De.preserveUrl ? he.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), j8(t), he.set(t, {
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
    const n = $t(this.originatingPage.url), r = $t(he.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = $t(t.url);
    return Td(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== he.get().component || En.get("future.preserveEqualProps") !== !0)
      return;
    const n = he.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      _n(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== he.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], a = t.matchPropsOn || [], s = (d, u) => {
      const c = wt(he.get().props, d), f = wt(t.props, d);
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
      const u = he.get().props[d], c = t.props[d], f = (v, b, m) => Array.isArray(b) ? this.mergeOrMatchItems(v, b, m, a) : typeof b == "object" && b !== null ? Object.keys(b).reduce(
        (p, h) => (p[h] = f(v ? v[h] : void 0, b[h], `${m}.${h}`), p),
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
}, Rd = class q0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Qi.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new q0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), G8(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), Y8(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Je({
      method: this.requestParams.all().method,
      url: ma(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Nd.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Nd.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && U8(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, V8(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, H8(t), this.requestParams.all().onProgress(t));
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
}, Id = class {
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
}, w6 = class {
  constructor() {
    this.syncRequestStream = new Id({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Id({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new ja();
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
    }), m6.handle(), Yt.init(), Yt.on("missingHistoryItem", () => {
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
    return y6.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Cd(n))
      return;
    const o = $t(he.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? u6(n.url, o) : va(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !he.isCleared() && !n.preserveUrl && ft.save();
    const l = {
      ...n,
      ...r
    }, d = Ht.get(l);
    d ? (Ur.reveal(d.inFlight), Ht.use(d, l)) : (Ur.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Rd.create(l, he.get())));
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
    if ((t.method ?? (cn(e) ? e.method : "get")) !== "get")
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
    if (l.onBefore(o) === !1 || !Cd(o))
      return;
    Ur.hide(), this.asyncRequestStream.interruptInFlight();
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
      Ht.add(
        d,
        (c) => {
          this.asyncRequestStream.send(Rd.create(c, he.get()));
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
    he.setFlash(r), Object.keys(r).length && ha(r);
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
    }, b = Qi.resolvePreserveOption(e.preserveScroll ?? !1, v), m = Qi.resolvePreserveOption(e.preserveState ?? !1, v);
    return he.set(v, {
      replace: t,
      preserveScroll: b,
      preserveState: m,
      viewTransition: s
    }).then(() => {
      const p = he.get().flash;
      Object.keys(p).length > 0 && (ha(p), u?.(p));
      const h = he.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        c?.(he.get());
        return;
      }
      const g = e.errorBag ? h[e.errorBag || ""] || {} : h;
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
    if (cn(e)) {
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
    }, [s, l] = l6(
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
}, Go = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? cn(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : cn(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function _6(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function k6(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function S6(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function E6(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Wo(e) {
  if (Array.isArray(e))
    return e.map(Wo);
  if (typeof e != "object" || e === null || Dl(e))
    return e;
  if (E6(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = Wo(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Wo(e[n]);
  return t;
}
function Md(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = k6(_6(n));
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
    S6(t, o.map(String), r);
  }
  return Wo(t);
}
var hi = {
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
  update: no(function(e) {
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
function z6(e, t, n) {
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
    const f = t(""), v = hi.preferredAttribute(), b = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, m = Object.values(r).reduce((p, h) => p.concat(h), []).reduce((p, h) => {
      if (h.indexOf("<") === -1)
        return p;
      if (h.indexOf("<title ") === 0) {
        const k = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = k ? `${k[1]}${t(k[2])}${k[3]}` : h, p;
      }
      const g = h.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return g ? p[g[0]] = h : p[Object.keys(p).length] = h, p;
    }, b);
    return Object.values(m);
  }
  function c() {
    e ? n(u()) : hi.update(u());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const f = a();
      return {
        preferredAttribute: hi.preferredAttribute,
        reconnect: () => l(f),
        update: (v) => d(f, v),
        disconnect: () => s(f)
      };
    }
  };
}
var $6 = "X-Inertia-Infinite-Scroll-Merge-Intent", P6 = (e) => {
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
    const k = s(g);
    return n[k];
  }, d = (g) => {
    const k = t(), w = s(g);
    n.lastLoadedPage = k.currentPage, n[w] = k[w], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, c = () => n.requestCount, f = (g, k = {}) => {
    const w = l(g);
    n.loading || w === null || (n.loading = !0, Ze.reload({
      ...k,
      data: { [u()]: w },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [$6]: g === "previous" ? "prepend" : "append",
        ...k.headers
      },
      onBefore: (A) => {
        g === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), k.onBefore?.(A);
      },
      onBeforeUpdate: (A) => {
        e.onBeforeUpdate(), k.onBeforeUpdate?.(A);
      },
      onSuccess: (A) => {
        d(g), k.onSuccess?.(A);
      },
      onFinish: (A) => {
        n.loading = !1, g === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), k.onFinish?.(A);
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
}, C6 = () => {
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
}, Xo = "infiniteScrollPage", mi = "infiniteScrollIgnore", j0 = (e) => e.dataset[Xo], A6 = (e) => {
  const t = C6();
  let n, r, o, a, s = !1;
  const l = () => {
    a = new MutationObserver((y) => {
      y.forEach((S) => {
        S.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && v.add(L);
        });
      }), A();
    }), a.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (y) => e.onItemIntersected(y.target)
    );
    const _ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, _), o = t.new(e.onNextTriggered, _);
  }, d = () => {
    s && u();
    const _ = e.getStartElement(), y = e.getEndElement();
    _ && e.shouldFetchPrevious() && r.observe(_), y && e.shouldFetchNext() && o.observe(y), s = !0;
  }, u = () => {
    s && (r.disconnect(), o.disconnect(), s = !1);
  }, c = () => {
    s && d();
  }, f = () => {
    u(), t.flushAll(), a?.disconnect();
  }, v = /* @__PURE__ */ new Set(), b = (_) => !(Xo in _.dataset) && !(mi in _.dataset), m = () => {
    Array.from(v).forEach((_) => {
      b(_) && (_.dataset[mi] = "true"), n.observe(_);
    }), v.clear();
  }, p = (_) => Array.from(
    _.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let h = !1;
  const g = (_) => {
    !h && (h = !0, $()) || (p(e.getItemsElement()).forEach((y) => {
      b(y) && (y.dataset[Xo] = _?.toString() || "1"), n.observe(y);
    }), w());
  }, k = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, w = () => {
    const _ = {}, y = e.getItemsElement().childNodes;
    for (let S = 0; S < y.length; S++) {
      const L = y[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = j0(L);
      typeof M > "u" || (M in _ ? _[M].to = S : _[M] = { from: S, to: S });
    }
    Ze.remember(_, k());
  }, A = no(w, 250), $ = () => {
    const _ = Ze.restore(k());
    if (!_ || typeof _ != "object")
      return !1;
    const y = e.getItemsElement().childNodes;
    for (let S = 0; S < y.length; S++) {
      const L = y[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = L;
      let I;
      for (const [C, q] of Object.entries(_))
        if (S >= q.from && S <= q.to) {
          I = C;
          break;
        }
      if (I)
        M.dataset[Xo] = I;
      else if (b(M))
        M.dataset[mi] = "true";
      else
        continue;
      n.observe(M);
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
    processServerLoadedElements: g
  };
}, T6 = new ja(), Qn, gn, To = null, O6 = (e) => {
  let t = !0;
  const n = (o) => {
    T6.add(() => new Promise((a) => {
      if (!t)
        return Qn = gn = null, a();
      if (!Qn || !gn) {
        const d = he.get().url;
        Qn = $t(d), gn = $t(d), To = L0(d);
      }
      const s = e.getPageName(), l = gn.searchParams;
      o === "1" ? l.delete(s) : l.set(s, o), setTimeout(() => a());
    })).finally(() => {
      t && Qn && gn && Qn.href !== gn.href && To !== null && Ze.replace({
        url: c6(gn, To),
        preserveScroll: !0,
        preserveState: !0
      }), Qn = gn = To = null;
    });
  };
  return {
    onItemIntersected: no((o) => {
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
}, N6 = (e) => ({
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
function R6(e) {
  const t = O6({ ...e, getPageName: () => o.getPageName() }), n = N6(e), r = A6({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = P6({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Lr(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Lr(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), a = (u) => {
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), b = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (m) => {
      v(m), c();
    }, u.onSuccess = (m) => {
      b(m), f();
    }, u;
  }, s = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = a(u)), s(u);
  };
  const l = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = a(u)), l(u);
  };
  const d = Ze.on("success", () => Lr(r.refreshTriggers, 2));
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
function Oo(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(H0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Dd(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !H0(e) && (e.key === "Enter" || t && e.key === " ");
}
var nt = "nprogress", Pt, it = {
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
}, zn = null, I6 = (e) => {
  Object.assign(it, e), it.includeCSS && U6(it.color), Pt = document.createElement("div"), Pt.id = nt, Pt.innerHTML = it.template;
}, Ha = (e) => {
  const t = G0();
  e = Z0(e, it.minimum, 1), zn = e === 1 ? null : e;
  const n = D6(!t), r = n.querySelector(it.barSelector), o = it.speed, a = it.easing;
  n.offsetWidth, L6((s) => {
    const l = it.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${Yo(e)}%,0,0)`
    } : it.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${Yo(e)}%,0)`
    } : { marginLeft: `${Yo(e)}%` };
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
}, G0 = () => typeof zn == "number", W0 = () => {
  zn || Ha(0);
  const e = function() {
    setTimeout(function() {
      zn && (X0(), e());
    }, it.trickleSpeed);
  };
  it.trickle && e();
}, M6 = (e) => {
  !e && !zn || (X0(0.3 + 0.5 * Math.random()), Ha(1));
}, X0 = (e) => {
  const t = zn;
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
    })(), Ha(Z0(t + e, 0, 0.994));
}, D6 = (e) => {
  if (F6())
    return document.getElementById(nt);
  document.documentElement.classList.add(`${nt}-busy`);
  const t = Pt.querySelector(it.barSelector), n = e ? "-100" : Yo(zn || 0), r = Y0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, it.showSpinner || Pt.querySelector(it.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${nt}-custom-parent`), r.appendChild(Pt), Pt;
}, Y0 = () => B6(it.parent) ? it.parent : document.querySelector(it.parent), K0 = () => {
  document.documentElement.classList.remove(`${nt}-busy`), Y0().classList.remove(`${nt}-custom-parent`), Pt?.remove();
}, F6 = () => document.getElementById(nt) !== null, B6 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Z0(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Yo = (e) => (-1 + e) * 100, L6 = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), U6 = (e) => {
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
}, V6 = () => {
  Pt && (Pt.style.display = "");
}, q6 = () => {
  Pt && (Pt.style.display = "none");
}, qt = {
  configure: I6,
  isStarted: G0,
  done: M6,
  set: Ha,
  remove: K0,
  start: W0,
  status: zn,
  show: V6,
  hide: q6
}, j6 = class {
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
}, Ur = new j6();
Ur.reveal;
Ur.hide;
var J0 = /* @__PURE__ */ Symbol("FormComponentReset");
function el(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function H6(e, t) {
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
function G6(e, t) {
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
function vi(e, t) {
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
    return H6(e, t);
  if (e instanceof HTMLSelectElement)
    return G6(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function W6(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && el(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        vi(r, t) && (n = !0);
      else {
        const a = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        vi(r, a) && (n = !0);
      }
  }) : el(e) && (n = vi(e, t)), n;
}
function X6(e, t, n) {
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
    s && W6(s, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [J0]: !0 } })
  );
}
var Ze = new w6();
let ro = Je.create(), Q0 = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, eh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const ga = {}, wn = {
  get: (e, t = {}, n = {}) => Cr(Pr("get", e, t, n)),
  post: (e, t = {}, n = {}) => Cr(Pr("post", e, t, n)),
  patch: (e, t = {}, n = {}) => Cr(Pr("patch", e, t, n)),
  put: (e, t = {}, n = {}) => Cr(Pr("put", e, t, n)),
  delete: (e, t = {}, n = {}) => Cr(Pr("delete", e, t, n)),
  use(e) {
    return ro = e, wn;
  },
  axios() {
    return ro;
  },
  fingerprintRequestsUsing(e) {
    return Q0 = e === null ? () => null : e, wn;
  },
  determineSuccessUsing(e) {
    return eh = e, wn;
  }
}, Pr = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Gi({}, n, r?.params)
  } : {
    data: Gi({}, n, r?.data)
  }
}), Cr = (e = {}) => {
  const t = [
    Y6,
    Z6,
    J6
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), ro.request(t).then(async (n) => {
    t.precognitive && Fd(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && eh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && K6(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Bd(t, r) ?? ((s) => s))(o) ?? o;
  }, (n) => Q6(n) ? Promise.reject(n) : (t.precognitive && Fd(n.response), (Bd(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, Y6 = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? ro.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Q0(e, ro) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": eR(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, K6 = (e) => e >= 200 && e < 300, Z6 = (e) => (typeof e.fingerprint != "string" || (ga[e.fingerprint]?.abort(), delete ga[e.fingerprint]), e), J6 = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (ga[e.fingerprint] = new AbortController(), {
  ...e,
  signal: ga[e.fingerprint].signal
}), Fd = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, Q6 = (e) => !O0(e) || typeof e.response?.status != "number" || T0(e), Bd = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], eR = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (th(e.data) ? "multipart/form-data" : "application/json"), th = (e) => Bl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => th(t)), Bl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, tR = (e, t) => {
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
}, nR = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Ld = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => nR(n, r)))), rR = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const a = (I) => I !== o ? (o = I, n.validatingChanged) : [];
  let s = [];
  const l = (I) => {
    const C = [...new Set(I)];
    return s.length !== C.length || !C.every((q) => s.includes(q)) ? (s = C, n.validatedChanged) : [];
  }, d = () => s.filter((I) => typeof f[I] > "u");
  let u = [];
  const c = (I) => {
    const C = [...new Set(I)];
    return u.length !== C.length || !C.every((q) => u.includes(q)) ? (u = C, n.touchedChanged) : [];
  };
  let f = {};
  const v = (I) => {
    const C = aR(I);
    return _n(f, C) ? [] : (f = C, n.errorsChanged);
  }, b = (I) => {
    const C = { ...f };
    return delete C[Vr(I)], v(C);
  }, m = () => Object.keys(f).length > 0;
  let p = 1500;
  const h = (I) => {
    p = I, _.cancel(), _ = $();
  };
  let g = t, k = null, w = [], A = null;
  const $ = () => pO((I) => {
    e({
      get: (C, q = {}, E = {}) => wn.get(C, L(q), y(E, I, q)),
      post: (C, q = {}, E = {}) => wn.post(C, L(q), y(E, I, q)),
      patch: (C, q = {}, E = {}) => wn.patch(C, L(q), y(E, I, q)),
      put: (C, q = {}, E = {}) => wn.put(C, L(q), y(E, I, q)),
      delete: (C, q = {}, E = {}) => wn.delete(C, L(q), y(E, I, q))
    }).catch((C) => T0(C) || O0(C) && C.response?.status === 422 ? null : Promise.reject(C));
  }, p, { leading: !0, trailing: !0 });
  let _ = $();
  const y = (I, C, q = {}) => {
    const E = {
      ...I,
      ...C
    }, F = Array.from(E.only ?? E.validate ?? u);
    return {
      ...C,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...F8(I, C),
      only: F,
      timeout: E.timeout ?? 5e3,
      onValidationError: (P, R) => ([
        ...l([...s, ...F]),
        ...v(Gi(Ld({ ...f }, F), P.data.errors))
      ].forEach((x) => x()), E.onValidationError ? E.onValidationError(P, R) : Promise.reject(R)),
      onSuccess: (P) => (l([...s, ...F]).forEach((R) => R()), E.onSuccess ? E.onSuccess(P) : P),
      onPrecognitionSuccess: (P) => ([
        ...l([...s, ...F]),
        ...v(Ld({ ...f }, F))
      ].forEach((R) => R()), E.onPrecognitionSuccess ? E.onPrecognitionSuccess(P) : P),
      onBefore: () => {
        const P = u.some((V) => V.includes("*")), R = P ? [...new Set(u.flatMap((V) => tR(V, q)))] : u;
        return E.onBeforeValidation && E.onBeforeValidation({ data: q, touched: R }, { data: g, touched: w }) === !1 || (E.onBefore || (() => !0))() === !1 ? !1 : (P && c(R).forEach((V) => V()), A = u, k = q, !0);
      },
      onStart: () => {
        a(!0).forEach((P) => P()), (E.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((P) => P()), w = A, g = k, A = k = null, (E.onFinish ?? (() => null))();
      }
    };
  }, S = (I, C, q) => {
    if (typeof I > "u") {
      const E = Array.from(q?.only ?? q?.validate ?? []);
      c([...u, ...E]).forEach((F) => F()), _(q ?? {});
      return;
    }
    if (Bl(C) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    I = Vr(I), (I.includes("*") || wt(g, I) !== C) && (c([I, ...u]).forEach((E) => E()), _(q ?? {}));
  }, L = (I) => r === !1 ? tl(I) : I, M = {
    touched: () => u,
    validate(I, C, q) {
      return typeof I == "object" && !("target" in I) && (q = I, I = C = void 0), S(I, C, q), M;
    },
    touch(I) {
      const C = Array.isArray(I) ? I : [Vr(I)];
      return c([...u, ...C]).forEach((q) => q()), M;
    },
    validating: () => o,
    valid: d,
    errors: () => f,
    hasErrors: m,
    setErrors(I) {
      return v(I).forEach((C) => C()), M;
    },
    forgetError(I) {
      return b(I).forEach((C) => C()), M;
    },
    defaults(I) {
      return t = I, g = I, M;
    },
    reset(...I) {
      if (I.length === 0)
        c([]).forEach((C) => C());
      else {
        const C = [...u];
        I.forEach((q) => {
          C.includes(q) && C.splice(C.indexOf(q), 1), zt(g, q, wt(t, q));
        }), c(C).forEach((q) => q());
      }
      return M;
    },
    setTimeout(I) {
      return h(I), M;
    },
    on(I, C) {
      return n[I].push(C), M;
    },
    validateFiles() {
      return r = !0, M;
    },
    withoutFileValidation() {
      return r = !1, M;
    }
  };
  return M;
}, oR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), aR = (e) => Object.keys(e).reduce((t, n) => ({
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
var gi = null, yi = !1;
function sR(e) {
  if (yi)
    return;
  gi === null && (yi = !0, gi = new Set(Object.keys(nh({}))), yi = !1);
  const t = Object.keys(e).filter((n) => gi.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function nh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Go.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = lt(typeof n == "function" ? n() : n);
  sR(a);
  let s = null, l, d = (m) => m, u = null, c = [], f = !1;
  const b = mr({
    ...o ? o.data : lt(a),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...m) {
      r = Go.createWayfinderCallback(...m);
      const p = this;
      let h = null;
      const g = rR((w) => {
        const { method: A, url: $ } = r(), _ = lt(d(this.data()));
        return w[A]($, _);
      }, lt(a));
      u = g, g.on("validatingChanged", () => {
        p.validating = g.validating();
      }).on("validatedChanged", () => {
        p.__valid = g.valid();
      }).on("touchedChanged", () => {
        p.__touched = g.touched();
      }).on("errorsChanged", () => {
        const w = h ?? ya.get("form.withAllErrors") ? g.errors() : oR(g.errors());
        this.errors = {}, this.setError(w), p.__valid = g.valid();
      });
      const k = (w, A) => (A(w), w);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => g,
        withAllErrors: () => k(p, () => h = !0),
        valid: (w) => p.__valid.includes(w),
        invalid: (w) => w in this.errors,
        setValidationTimeout: (w) => k(p, () => g.setTimeout(w)),
        validateFiles: () => k(p, () => g.validateFiles()),
        withoutFileValidation: () => k(p, () => g.withoutFileValidation()),
        touch: (w, ...A) => (Array.isArray(w) ? g.touch(w) : typeof w == "string" ? g.touch([w, ...A]) : g.touch(w), p),
        touched: (w) => typeof w == "string" ? p.__touched.includes(w) : p.__touched.length > 0,
        validate: (w, A) => {
          if (typeof w == "object" && !("target" in w) && (A = w, w = void 0), w === void 0)
            g.validate(A);
          else {
            const $ = Vr(w), _ = d(this.data());
            g.validate($, wt(_, $), A);
          }
          return p;
        },
        setErrors: (w) => k(p, () => this.setError(w)),
        forgetError: (w) => k(
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
      return m.length === 0 ? (a = h, Object.assign(this, p)) : m.filter((g) => Zp(h, g)).forEach((g) => {
        zt(a, g, wt(h, g)), zt(this, g, wt(p, g));
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
      const { method: p, url: h, options: g } = Go.parseSubmitArguments(m, r);
      f = !1;
      const k = {
        ...g,
        onCancelToken: (A) => {
          if (s = A, g.onCancelToken)
            return g.onCancelToken(A);
        },
        onBefore: (A) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), g.onBefore)
            return g.onBefore(A);
        },
        onStart: (A) => {
          if (this.processing = !0, g.onStart)
            return g.onStart(A);
        },
        onProgress: (A) => {
          if (this.progress = A ?? null, g.onProgress)
            return g.onProgress(A);
        },
        onSuccess: async (A) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(
            () => this.recentlySuccessful = !1,
            ya.get("form.recentlySuccessfulDuration")
          );
          const $ = g.onSuccess ? await g.onSuccess(A) : null;
          return f || (a = lt(this.data()), this.isDirty = !1), $;
        },
        onError: (A) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(A), g.onError)
            return g.onError(A);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, g.onCancel)
            return g.onCancel();
        },
        onFinish: (A) => {
          if (this.processing = !1, this.progress = null, s = null, g.onFinish)
            return g.onFinish(A);
        }
      }, w = d(this.data());
      p === "delete" ? Ze.delete(h, { ...k, data: w }) : Ze[p](h, w, k);
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
  return Ie(
    b,
    (m) => {
      b.isDirty = !_n(b.data(), a);
      const p = Ze.restore(t), h = lt(m.__remember());
      t && !_n(p, h) && Ze.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? b.withPrecognition(r) : b;
}
var xt = G(void 0), Qe = G(), bi = an(null), No = G(void 0), Ud;
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
    xt.value = t ? nr(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, No.value = void 0;
    const a = typeof window > "u";
    return Ud = z6(a, r || ((s) => s), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (s) => {
        xt.value = nr(s.component), Qe.value = s.page, No.value = s.preserveState ? No.value : Date.now();
      },
      onFlash: (s) => {
        Qe.value = { ...Qe.value, flash: s };
      }
    }), Ze.on("navigate", () => Ud.forceUpdate())), () => {
      if (xt.value) {
        xt.value.inheritAttrs = !!xt.value.inheritAttrs;
        const s = $e(xt.value, {
          ...Qe.value.props,
          key: No.value
        });
        return bi.value && (xt.value.layout = bi.value, bi.value = null), xt.value.layout ? typeof xt.value.layout == "function" ? xt.value.layout($e, s) : (Array.isArray(xt.value.layout) ? xt.value.layout : [xt.value.layout]).concat(s).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, $e(d, { ...Qe.value.props }, () => l))) : s;
      }
    };
  }
});
function rh() {
  return mr({
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
}, iR = /* @__PURE__ */ Symbol("InertiaFormContext");
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
      const [$, _] = m();
      return e.transform(_);
    }, a = nh({}).withPrecognition(
      () => l.value,
      () => m()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? En.get("form.withAllErrors")) && a.withAllErrors();
    const s = G(), l = J(
      () => cn(e.action) ? e.action.method : e.method.toLowerCase()
    ), d = G(!1), u = G(new FormData()), c = ($) => {
      $.type === "reset" && $.detail?.[J0] && $.preventDefault(), d.value = $.type === "reset" ? !1 : !_n(b(), Md(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = v(), a.defaults(b()), f.forEach(($) => s.value.addEventListener($, c));
    }), Ie(
      () => e.validateFiles,
      ($) => $ ? a.validateFiles() : a.withoutFileValidation()
    ), Ie(
      () => e.validationTimeout,
      ($) => a.setValidationTimeout($)
    ), ba(() => f.forEach(($) => s.value?.removeEventListener($, c)));
    const v = ($) => new FormData(s.value, $), b = ($) => Md(v($)), m = ($) => Fl(
      l.value,
      cn(e.action) ? e.action.url : e.action,
      b($),
      e.queryStringArrayFormat
    ), p = ($) => {
      const [_, y] = m($);
      if ($?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open(_, "_blank");
        return;
      }
      const L = (I) => {
        I && (I === !0 ? h() : I.length > 0 && h(...I));
      }, M = {
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
        onSuccess: (...I) => {
          e.onSuccess?.(...I), e.onSubmitComplete?.(A), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && w();
        },
        onError: (...I) => {
          e.onError?.(...I), L(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(y)).submit(l.value, _, M), a.transform(o);
    }, h = (...$) => {
      X6(s.value, u.value, $), a.reset(...$);
    }, g = (...$) => {
      a.clearErrors(...$);
    }, k = (...$) => {
      g(...$), h(...$);
    }, w = () => {
      u.value = v(), d.value = !1;
    }, A = {
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
      resetAndClearErrors: k,
      setError: ($, _) => a.setError(typeof $ == "string" ? { [$]: _ } : $),
      get isDirty() {
        return d.value;
      },
      reset: h,
      submit: p,
      defaults: w,
      getData: b,
      getFormData: v,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: ($, _) => a.validate(...Go.mergeHeadersForValidation($, _, e.headers)),
      validator: () => a.validator()
    };
    return r(A), Bn(iR, A), () => $e(
      "form",
      {
        ...n,
        ref: s,
        action: cn(e.action) ? e.action.url : e.action,
        method: l.value,
        onSubmit: ($) => {
          $.preventDefault(), p($.submitter);
        },
        inert: e.disableWhileProcessing && a.processing
      },
      t.default ? t.default(A) : []
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${xO(o)}"`;
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
var xi = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
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
      () => xi(e.itemsElement, o.value)
    ), d = J(() => s6(l.value)), u = J(
      () => xi(e.startElement, a.value)
    ), c = J(() => xi(e.endElement, s.value)), f = G(!1), v = G(!1), b = G(0), m = G(!1), p = G(!1), h = () => {
      b.value = g.getRequestCount(), m.value = g.hasPrevious(), p.value = g.hasNext();
    }, {
      dataManager: g,
      elementManager: k,
      flush: w
    } = R6({
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
      const y = rh().scrollProps?.[e.data];
      y && (m.value = !!y.previousPage, p.value = !!y.nextPage);
    }
    const A = J(() => !$.value), $ = J(
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
      k.setupObservers(), k.processServerLoadedElements(g.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && _(), A.value && k.enableTriggers();
    }), nl(w), Ie(
      () => [A.value, e.onlyNext, e.onlyPrevious],
      ([y]) => {
        y ? k.enableTriggers() : k.disableTriggers();
      }
    ), r({
      fetchNext: g.fetchNext,
      fetchPrevious: g.fetchPrevious,
      hasPrevious: g.hasPrevious,
      hasNext: g.hasNext
    }), () => {
      const y = [], S = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: m.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const L = A.value && !e.onlyNext, M = {
          loading: f.value,
          fetch: g.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: m.value,
          ...S
        };
        y.push(
          $e(
            "div",
            { ref: a },
            t.previous ? t.previous(M) : f.value ? t.loading?.(M) : void 0
          )
        );
      }
      if (y.push(
        $e(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || v.value,
            loadingPrevious: f.value,
            loadingNext: v.value
          })
        )
      ), !e.endElement) {
        const L = A.value && !e.onlyPrevious, M = {
          loading: v.value,
          fetch: g.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ...S
        };
        y.push(
          $e(
            "div",
            { ref: s },
            t.next ? t.next(M) : v.value ? t.loading?.(M) : void 0
          )
        );
      }
      return $e(ve, {}, e.reverse ? [...y].reverse() : y);
    };
  }
});
var jt = () => {
}, lR = Fe({
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
    const r = G(0), o = G(), a = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = J(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : ya.get("prefetch.cacheFor"));
    Ke(() => {
      a.value.includes("mount") && p();
    }), nl(() => {
      clearTimeout(o.value);
    });
    const l = J(
      () => cn(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), d = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : l.value !== "get" ? "button" : e.as.toLowerCase()), u = J(
      () => Fl(
        l.value,
        cn(e.href) ? e.href.url : e.href,
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
    })), m = J(() => ({
      ...b.value,
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
          ...b.value,
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
        Oo(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
      }
    }, g = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          p();
        }, ya.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: h.onClick
    }, k = {
      onMousedown: (w) => {
        Oo(w) && (w.preventDefault(), p());
      },
      onKeydown: (w) => {
        Dd(w) && (w.preventDefault(), p());
      },
      onMouseup: (w) => {
        Oo(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
      },
      onKeyup: (w) => {
        Dd(w) && (w.preventDefault(), Ze.visit(c.value, m.value));
      },
      onClick: (w) => {
        Oo(w) && w.preventDefault();
      }
    };
    return () => $e(
      d.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? g : a.value.includes("click") ? k : h
      },
      t
    );
  }
}), uR = lR;
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
    return (this.$props.always || !this.loaded) && e.push($e(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var ya = En.extend({});
const cR = { class: "space-y-3 text-zinc-900 dark:text-white" }, dR = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, fR = { key: 0 }, pR = { key: 1 }, hR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, mR = { class: "space-y-2" }, vR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, gR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, yR = {
  key: 0,
  class: "flex items-center gap-2"
}, bR = ["disabled", "onClick"], xR = ["disabled", "onClick"], wR = ["disabled", "onClick"], _R = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = G([]), r = G(!0), o = G(!1), a = G(!1), s = G(""), l = G(null), d = J(() => t.produto?.id ?? null), u = J(() => new Map(n.value.map((m) => [m.trigger_event, m])));
    async function c() {
      r.value = !0, s.value = "";
      try {
        const [m, p] = await Promise.all([Ae.connection(), Ae.flows(d.value)]);
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
    const v = (m) => f(() => Ae.createFlow({
      name: `${m.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: m.eventClass,
      product_id: d.value,
      is_active: !0,
      graph_json: _p(m.eventClass)
    })), b = (m) => f(() => Ae.updateFlow(m.id, { is_active: !m.is_active }));
    return Ke(c), (m, p) => (z(), T("div", cR, [
      r.value ? (z(), T("p", dR, "Verificando integração…")) : (z(), T(ve, { key: 1 }, [
        i("div", {
          class: X(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          Y(N(qr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (z(), T("span", fR, "ZapRei conectado à Evolution GO.")) : (z(), T("span", pR, [
            p[2] || (p[2] = Se(" A Evolution GO não está conectada. ", -1)),
            Y(N(uR), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: rt(() => [...p[1] || (p[1] = [
                Se("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = Se(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = i("div", null, [
          i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        s.value ? (z(), T("p", hR, U(s.value), 1)) : ee("", !0),
        i("div", mR, [
          (z(!0), T(ve, null, Re(N(Dn), (h) => (z(), T("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            i("div", null, [
              i("div", vR, U(h.label), 1),
              i("div", gR, U(h.eventClass), 1)
            ]),
            u.value.get(h.eventClass) ? (z(), T("div", yR, [
              i("span", {
                class: X(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, U(u.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              i("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (g) => b(u.value.get(h.eventClass))
              }, U(u.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, bR),
              i("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (g) => l.value = u.value.get(h.eventClass)
              }, [
                Y(N(tf), { class: "h-3 w-3" }),
                p[4] || (p[4] = Se(" Editar ", -1))
              ], 8, xR)
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (g) => v(h)
            }, " Criar fluxo ", 8, wR))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (z(), Oe(zp, {
        key: 2,
        flow: l.value,
        onClose: p[0] || (p[0] = (h) => l.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : ee("", !0)
    ]));
  }
}, kR = "zaprei", Vd = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Vd)) {
  const e = document.createElement("link");
  e.id = Vd, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[kR] = { Dashboard: k4, Integrations: E4, ProductPanel: _R };
export {
  k4 as Dashboard,
  E4 as Integrations,
  _R as ProductPanel
};
