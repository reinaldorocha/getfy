import { h as Pe, ref as G, reactive as vr, onMounted as Ke, openBlock as E, createElementBlock as C, createElementVNode as i, createVNode as X, unref as O, normalizeClass as W, withDirectives as ee, vModelCheckbox as An, vModelText as ye, createStaticVNode as jd, createTextVNode as ke, toDisplayString as U, createCommentVNode as te, getCurrentScope as Hd, inject as gr, effectScope as Gd, watch as Ie, provide as Ln, defineComponent as Fe, useSlots as ch, onUnmounted as nl, withCtx as ot, renderSlot as Ye, createPropsRestProxy as dh, toRef as Ve, computed as J, getCurrentInstance as yr, onScopeDispose as Io, nextTick as un, onBeforeMount as fh, shallowRef as an, Fragment as me, renderList as Ne, normalizeStyle as vt, onBeforeUnmount as xa, isMemoSame as ph, createBlock as Oe, useAttrs as hh, mergeProps as wa, Teleport as Wd, isRef as rl, toRefs as mh, customRef as vh, toValue as Me, resolveComponent as Xd, resolveDynamicComponent as Rt, markRaw as rr, readonly as gh, withModifiers as rn, vModelSelect as tt, Transition as yh, toHandlers as bh } from "vue";
const xh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Yl = (e) => e === "";
const wh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Kl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const _h = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const kh = (e) => {
  const t = _h(e);
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
const Sh = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": a,
  size: s = kr.width,
  color: l = kr.stroke,
  ...d
}, { slots: u }) => Pe(
  "svg",
  {
    ...kr,
    ...d,
    width: s,
    height: s,
    stroke: l,
    "stroke-width": Yl(n) || Yl(r) || n === !0 || r === !0 ? Number(o || a || kr["stroke-width"]) * 24 / Number(s) : o || a || kr["stroke-width"],
    class: wh(
      "lucide",
      d.class,
      ...e ? [`lucide-${Kl(kh(e))}-icon`, `lucide-${Kl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !xh(d) && { "aria-hidden": "true" }
  },
  [...t.map((c) => Pe(...c)), ...u.default ? [u.default()] : []]
);
const Ce = (e, t) => (n, { slots: r, attrs: o }) => Pe(
  Sh,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const Eh = Ce("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Yd = Ce("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const zh = Ce("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const $h = Ce("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const ns = Ce("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const Kd = Ce("chart-column", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
const _i = Ce("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Zd = Ce("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Ph = Ce("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const _a = Ce("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const jr = Ce("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ir = Ce("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Jd = Ce("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Qd = Ce("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const Ch = Ce("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ah = Ce("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Zl = Ce("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Ir = Ce("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const ef = Ce("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const Dt = Ce("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Jl = Ce("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Th = Ce("message-square-text", [
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
const tf = Ce("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Oh = Ce("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const nf = Ce("palette", [
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
const Ql = Ce("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const rf = Ce("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const of = Ce("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const af = Ce("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const eu = Ce("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Nh = Ce("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Rh = Ce("save", [
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
const Hr = Ce("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Ct = Ce("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const sf = Ce("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Ih = Ce("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ol = Ce("sparkles", [
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
const Zo = Ce("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const lf = Ce("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Mh = Ce("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Nn = Ce("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Ot = Ce("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Un = Ce("zap", [
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
const $e = {
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
  importContacts: (e) => Xe("/contacts/import", { method: "POST", body: tu(e) }),
  deleteContact: (e) => Xe(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Xe("/campaigns"),
  createCampaign: (e) => Xe("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Xe(`/campaigns/${e}`),
  cancelCampaign: (e) => Xe(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Xe("/media", { method: "POST", body: tu(e) })
};
function tu(e) {
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
}, uf = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = G(!0), o = G(!1), a = G(!1), s = G(""), l = G(""), d = G(!1), u = G(!1), c = G(""), f = vr({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function g() {
      r.value = !0, s.value = "";
      try {
        const { connection: h } = await $e.connection();
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
        const { connection: h } = await $e.saveConnection({ ...f });
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
        const { message: h } = await $e.testConnection();
        l.value = h || "Conexão validada.";
      } catch (h) {
        s.value = h.message;
      } finally {
        a.value = !1;
      }
    }
    return Ke(g), (h, b) => (E(), C("div", Lh, [
      i("div", Uh, [
        i("div", Vh, [
          X(O(rf), { class: "h-5 w-5" })
        ]),
        b[5] || (b[5] = i("div", null, [
          i("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (E(), C("div", qh, [
        X(O(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        b[6] || (b[6] = i("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (E(), C("div", jh, [
        i("div", Hh, [
          b[7] || (b[7] = i("div", null, [
            i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            i("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          i("label", {
            class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ee(i("input", {
              "onUpdate:modelValue": b[0] || (b[0] = (z) => f.is_active = z),
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
            "onUpdate:modelValue": b[1] || (b[1] = (z) => f.base_url = z),
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
          b[9] || (b[9] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ee(i("input", {
            id: "zr-instance",
            "onUpdate:modelValue": b[2] || (b[2] = (z) => f.instance = z),
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
          b[10] || (b[10] = i("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ee(i("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": b[3] || (b[3] = (z) => f.api_key = z),
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
          b[11] || (b[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        c.value ? (E(), C("div", Wh, [
          b[13] || (b[13] = jd('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          i("div", Xh, [
            i("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: b[4] || (b[4] = (z) => z.target.select())
            }, null, 40, Yh),
            i("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: m
            }, [
              X(O(Jd), { class: "h-3.5 w-3.5" }),
              b[12] || (b[12] = ke(" Copiar ", -1))
            ])
          ])
        ])) : (E(), C("p", Kh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        i("div", Zh, [
          i("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, U(o.value ? "Salvando…" : "Salvar conexão"), 9, Jh),
          i("button", {
            type: "button",
            disabled: a.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, U(a.value ? "Testando…" : "Testar conexão"), 9, Qh),
          d.value ? (E(), C("span", em, [
            X(O(jr), { class: "h-3 w-3" }),
            b[14] || (b[14] = ke(" Conectado ", -1))
          ])) : te("", !0)
        ]),
        s.value ? (E(), C("p", tm, U(s.value), 1)) : l.value ? (E(), C("p", nm, U(l.value), 1)) : te("", !0)
      ]))
    ]));
  }
};
function Gr(e) {
  return Hd() ? (Io(e), !0) : !1;
}
function on(e) {
  return typeof e == "function" ? e() : O(e);
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
const cf = (e) => e();
function um(e = cf) {
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
  return { isActive: gh(t), pause: n, resume: r, eventFilter: o };
}
function nu(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function cm(e, t, n = {}) {
  const {
    eventFilter: r = cf,
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
function Jn(e, t, n = {}) {
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
    return mh(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = vh(() => ({
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
  function n(f, { flush: g = "sync", deep: y = !1, timeout: m, throwOnTimeout: p } = {}) {
    let h = null;
    const z = [new Promise((_) => {
      h = Ie(
        e,
        (T) => {
          f(T) !== t && (h?.(), _(T));
        },
        {
          flush: g,
          deep: y,
          immediate: !0
        }
      );
    })];
    return m != null && z.push(
      nu(m, p).then(() => on(e)).finally(() => h?.())
    ), Promise.race(z);
  }
  function r(f, g) {
    if (!rl(f))
      return n((T) => T === f, g);
    const { flush: y = "sync", deep: m = !1, timeout: p, throwOnTimeout: h } = g ?? {};
    let b = null;
    const _ = [new Promise((T) => {
      b = Ie(
        [e, f],
        ([$, w]) => {
          t !== ($ === w) && (b?.(), T($));
        },
        {
          flush: y,
          deep: m,
          immediate: !0
        }
      );
    })];
    return p != null && _.push(
      nu(p, h).then(() => on(e)).finally(() => (b?.(), on(e)))
    ), Promise.race(_);
  }
  function o(f) {
    return n((g) => !!g, f);
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
  function d(f, g) {
    return n((y) => {
      const m = Array.from(y);
      return m.includes(f) || m.includes(on(f));
    }, g);
  }
  function u(f) {
    return c(1, f);
  }
  function c(f = 1, g) {
    let y = -1;
    return n(() => (y += 1, y >= f), g);
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
const df = rm ? window : void 0;
function ff(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = df) : [t, n, r, o] = e, !t)
    return im;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((c) => c()), a.length = 0;
  }, l = (c, f, g, y) => (c.addEventListener(f, g, y), () => c.removeEventListener(f, g, y)), d = Ie(
    () => [fm(t), on(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const g = sm(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((y) => r.map((m) => l(c, y, m, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), s();
  };
  return Gr(u), u;
}
function pm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ru(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = df,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: l = !1
  } = r, d = pm(t);
  return ff(o, a, (c) => {
    c.repeat && on(l) || d(c) && n(c);
  }, s);
}
function hm(e) {
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
    shouldEmit: g
  } = r, y = yr(), m = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((s = (a = y?.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(y?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const h = (_) => l ? typeof l == "function" ? l(_) : hm(_) : _, b = () => om(e[t]) ? h(e[t]) : f, z = (_) => {
    g ? g(_) && m(p, _) : m(p, _);
  };
  if (d) {
    const _ = b(), T = G(_);
    let $ = !1;
    return Ie(
      () => e[t],
      (w) => {
        $ || ($ = !0, T.value = h(w), un(() => $ = !1));
      }
    ), Ie(
      T,
      (w) => {
        !$ && (w !== e[t] || c) && z(w);
      },
      { deep: c }
    ), T;
  } else
    return J({
      get() {
        return b();
      },
      set(_) {
        z(_);
      }
    });
}
var mm = { value: () => {
} };
function ka() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Mo(n);
}
function Mo(e) {
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
Mo.prototype = ka.prototype = {
  constructor: Mo,
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
        n[o] = ou(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = ou(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Mo(e);
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
function ou(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = mm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ei = "http://www.w3.org/1999/xhtml";
const au = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ei,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Sa(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), au.hasOwnProperty(t) ? { space: au[t], local: e } : e;
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
function pf(e) {
  var t = Sa(e);
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
function hf(e) {
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
  typeof e == "function" ? e = Sm(e) : e = hf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var s = t[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && (r.push(e.call(d, d.__data__, u, s)), o.push(d));
  return new _t(r, o);
}
function mf(e) {
  return function() {
    return this.matches(e);
  };
}
function vf(e) {
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
  return this.select(e == null ? Pm : $m(typeof e == "function" ? e : vf(e)));
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
  return this.selectAll(e == null ? Tm : Om(typeof e == "function" ? e : vf(e)));
}
function Rm(e) {
  typeof e != "function" && (e = mf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new _t(r, this._parents);
}
function gf(e) {
  return new Array(e.length);
}
function Im() {
  return new _t(this._enter || this._groups.map(gf), this._parents);
}
function Jo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Jo.prototype = {
  constructor: Jo,
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
    (l = t[s]) ? (l.__data__ = a[s], r[s] = l) : n[s] = new Jo(e, a[s]);
  for (; s < d; ++s)
    (l = t[s]) && (o[s] = l);
}
function Fm(e, t, n, r, o, a, s) {
  var l, d, u = /* @__PURE__ */ new Map(), c = t.length, f = a.length, g = new Array(c), y;
  for (l = 0; l < c; ++l)
    (d = t[l]) && (g[l] = y = s.call(d, d.__data__, l, t) + "", u.has(y) ? o[l] = d : u.set(y, d));
  for (l = 0; l < f; ++l)
    y = s.call(e, a[l], l, a) + "", (d = u.get(y)) ? (r[l] = d, d.__data__ = a[l], u.delete(y)) : n[l] = new Jo(e, a[l]);
  for (l = 0; l < c; ++l)
    (d = t[l]) && u.get(g[l]) === d && (o[l] = d);
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
    var c = r[u], f = o[u], g = f.length, y = Um(e.call(c, c && c.__data__, u, r)), m = y.length, p = l[u] = new Array(m), h = s[u] = new Array(m), b = d[u] = new Array(g);
    n(c, f, p, h, b, y, t);
    for (var z = 0, _ = 0, T, $; z < m; ++z)
      if (T = p[z]) {
        for (z >= _ && (_ = z + 1); !($ = h[_]) && ++_ < m; )
          ;
        T._next = $ || null;
      }
  }
  return s = new _t(s, r), s._enter = l, s._exit = d, s;
}
function Um(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vm() {
  return new _t(this._exit || this._groups.map(gf), this._parents);
}
function qm(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function jm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, s = Math.min(o, a), l = new Array(o), d = 0; d < s; ++d)
    for (var u = n[d], c = r[d], f = u.length, g = l[d] = new Array(f), y, m = 0; m < f; ++m)
      (y = u[m] || c[m]) && (g[m] = y);
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
  function t(f, g) {
    return f && g ? e(f.__data__, g.__data__) : !f - !g;
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
  var n = Sa(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? tv : ev : typeof t == "function" ? n.local ? av : ov : n.local ? rv : nv)(n, t));
}
function yf(e) {
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
  return arguments.length > 1 ? this.each((t == null ? iv : typeof t == "function" ? uv : lv)(e, t, n ?? "")) : lr(this.node(), e);
}
function lr(e, t) {
  return e.style.getPropertyValue(t) || yf(e).getComputedStyle(e, null).getPropertyValue(t);
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
function bf(e) {
  return e.trim().split(/^|\s+/);
}
function sl(e) {
  return e.classList || new xf(e);
}
function xf(e) {
  this._node = e, this._names = bf(e.getAttribute("class") || "");
}
xf.prototype = {
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
function wf(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function _f(e, t) {
  for (var n = sl(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function mv(e) {
  return function() {
    wf(this, e);
  };
}
function vv(e) {
  return function() {
    _f(this, e);
  };
}
function gv(e, t) {
  return function() {
    (t.apply(this, arguments) ? wf : _f)(this, e);
  };
}
function yv(e, t) {
  var n = bf(e + "");
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
  var t = typeof e == "function" ? e : pf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ov() {
  return null;
}
function Nv(e, t) {
  var n = typeof e == "function" ? e : pf(e), r = t == null ? Ov : typeof t == "function" ? t : al(t);
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
function kf(e, t, n) {
  var r = yf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hv(e, t) {
  return function() {
    return kf(this, e, t);
  };
}
function Gv(e, t) {
  return function() {
    return kf(this, e, t.apply(this, arguments));
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
var Sf = [null];
function _t(e, t) {
  this._groups = e, this._parents = t;
}
function ao() {
  return new _t([[document.documentElement]], Sf);
}
function Yv() {
  return this;
}
_t.prototype = ao.prototype = {
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
  return typeof e == "string" ? new _t([[document.querySelector(e)]], [document.documentElement]) : new _t([[e]], Sf);
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
const Zv = { passive: !1 }, Wr = { capture: !0, passive: !1 };
function os(e) {
  e.stopImmediatePropagation();
}
function or(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ef(e) {
  var t = e.document.documentElement, n = It(e).on("dragstart.drag", or, Wr);
  "onselectstart" in t ? n.on("selectstart.drag", or, Wr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function zf(e, t) {
  var n = e.document.documentElement, r = It(e).on("dragstart.drag", null);
  t && (r.on("click.drag", or, Wr), setTimeout(function() {
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
  var e = Jv, t = Qv, n = eg, r = tg, o = {}, a = ka("start", "drag", "end"), s = 0, l, d, u, c, f = 0;
  function g(T) {
    T.on("mousedown.drag", y).filter(r).on("touchstart.drag", h).on("touchmove.drag", b, Zv).on("touchend.drag touchcancel.drag", z).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(T, $) {
    if (!(c || !e.call(this, T, $))) {
      var w = _(this, t.call(this, T, $), T, $, "mouse");
      w && (It(T.view).on("mousemove.drag", m, Wr).on("mouseup.drag", p, Wr), Ef(T.view), os(T), u = !1, l = T.clientX, d = T.clientY, w("start", T));
    }
  }
  function m(T) {
    if (or(T), !u) {
      var $ = T.clientX - l, w = T.clientY - d;
      u = $ * $ + w * w > f;
    }
    o.mouse("drag", T);
  }
  function p(T) {
    It(T.view).on("mousemove.drag mouseup.drag", null), zf(T.view, u), or(T), o.mouse("end", T);
  }
  function h(T, $) {
    if (e.call(this, T, $)) {
      var w = T.changedTouches, v = t.call(this, T, $), k = w.length, L, M;
      for (L = 0; L < k; ++L)
        (M = _(this, v, T, $, w[L].identifier, w[L])) && (os(T), M("start", T, w[L]));
    }
  }
  function b(T) {
    var $ = T.changedTouches, w = $.length, v, k;
    for (v = 0; v < w; ++v)
      (k = o[$[v].identifier]) && (or(T), k("drag", T, $[v]));
  }
  function z(T) {
    var $ = T.changedTouches, w = $.length, v, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), v = 0; v < w; ++v)
      (k = o[$[v].identifier]) && (os(T), k("end", T, $[v]));
  }
  function _(T, $, w, v, k, L) {
    var M = a.copy(), I = Gt(L || w, $), A, q, S;
    if ((S = n.call(T, new zi("beforestart", {
      sourceEvent: w,
      target: g,
      identifier: k,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: M
    }), v)) != null)
      return A = S.x - I[0] || 0, q = S.y - I[1] || 0, function F(P, R, x) {
        var V = I, Q;
        switch (P) {
          case "start":
            o[k] = F, Q = s++;
            break;
          case "end":
            delete o[k], --s;
          case "drag":
            I = Gt(x || R, $), Q = s;
            break;
        }
        M.call(
          P,
          T,
          new zi(P, {
            sourceEvent: R,
            subject: S,
            target: g,
            identifier: k,
            active: Q,
            x: I[0] + A,
            y: I[1] + q,
            dx: I[0] - V[0],
            dy: I[1] - V[1],
            dispatch: M
          }),
          v
        );
      };
  }
  return g.filter = function(T) {
    return arguments.length ? (e = typeof T == "function" ? T : bo(!!T), g) : e;
  }, g.container = function(T) {
    return arguments.length ? (t = typeof T == "function" ? T : bo(T), g) : t;
  }, g.subject = function(T) {
    return arguments.length ? (n = typeof T == "function" ? T : bo(T), g) : n;
  }, g.touchable = function(T) {
    return arguments.length ? (r = typeof T == "function" ? T : bo(!!T), g) : r;
  }, g.on = function() {
    var T = a.on.apply(a, arguments);
    return T === a ? g : T;
  }, g.clickDistance = function(T) {
    return arguments.length ? (f = (T = +T) * T, g) : Math.sqrt(f);
  }, g;
}
function il(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function $f(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function so() {
}
var Xr = 0.7, Qo = 1 / Xr, ar = "\\s*([+-]?\\d+)\\s*", Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rg = /^#([0-9a-f]{3,8})$/, og = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), ag = new RegExp(`^rgb\\(${Kt},${Kt},${Kt}\\)$`), sg = new RegExp(`^rgba\\(${ar},${ar},${ar},${Yr}\\)$`), ig = new RegExp(`^rgba\\(${Kt},${Kt},${Kt},${Yr}\\)$`), lg = new RegExp(`^hsl\\(${Yr},${Kt},${Kt}\\)$`), ug = new RegExp(`^hsla\\(${Yr},${Kt},${Kt},${Yr}\\)$`), su = {
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
il(so, Vn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: iu,
  // Deprecated! Use color.formatHex.
  formatHex: iu,
  formatHex8: cg,
  formatHsl: dg,
  formatRgb: lu,
  toString: lu
});
function iu() {
  return this.rgb().formatHex();
}
function cg() {
  return this.rgb().formatHex8();
}
function dg() {
  return Pf(this).formatHsl();
}
function lu() {
  return this.rgb().formatRgb();
}
function Vn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = rg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? uu(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? xo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? xo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = og.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = ag.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sg.exec(e)) ? xo(t[1], t[2], t[3], t[4]) : (t = ig.exec(e)) ? xo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = lg.exec(e)) ? fu(t[1], t[2] / 100, t[3] / 100, 1) : (t = ug.exec(e)) ? fu(t[1], t[2] / 100, t[3] / 100, t[4]) : su.hasOwnProperty(e) ? uu(su[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function uu(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function xo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function fg(e) {
  return e instanceof so || (e = Vn(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function $i(e, t, n, r) {
  return arguments.length === 1 ? fg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
il(pt, $i, $f(so, {
  brighter(e) {
    return e = e == null ? Qo : Math.pow(Qo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Mn(this.r), Mn(this.g), Mn(this.b), ea(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cu,
  // Deprecated! Use color.formatHex.
  formatHex: cu,
  formatHex8: pg,
  formatRgb: du,
  toString: du
}));
function cu() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
}
function pg() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function du() {
  const e = ea(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Mn(this.r)}, ${Mn(this.g)}, ${Mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ea(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Rn(e) {
  return e = Mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function fu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, r);
}
function Pf(e) {
  if (e instanceof Mt)
    return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = Vn(e)), !e)
    return new Mt();
  if (e instanceof Mt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), s = NaN, l = a - o, d = (a + o) / 2;
  return l ? (t === a ? s = (n - r) / l + (n < r) * 6 : n === a ? s = (r - t) / l + 2 : s = (t - n) / l + 4, l /= d < 0.5 ? a + o : 2 - a - o, s *= 60) : l = d > 0 && d < 1 ? 0 : s, new Mt(s, l, d, e.opacity);
}
function hg(e, t, n, r) {
  return arguments.length === 1 ? Pf(e) : new Mt(e, t, n, r ?? 1);
}
function Mt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
il(Mt, hg, $f(so, {
  brighter(e) {
    return e = e == null ? Qo : Math.pow(Qo, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
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
    return new Mt(pu(this.h), wo(this.s), wo(this.l), ea(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ea(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${pu(this.h)}, ${wo(this.s) * 100}%, ${wo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function pu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function wo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
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
  return (e = +e) == 1 ? Cf : function(t, n) {
    return n - t ? vg(t, n, e) : ll(isNaN(t) ? n : t);
  };
}
function Cf(e, t) {
  var n = t - e;
  return n ? mg(e, n) : ll(isNaN(e) ? t : e);
}
const ta = (function e(t) {
  var n = gg(t);
  function r(o, a) {
    var s = n((o = $i(o)).r, (a = $i(a)).r), l = n(o.g, a.g), d = n(o.b, a.b), u = Cf(o.opacity, a.opacity);
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
    o[s] = Mr(e[s], t[s]);
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
    o in e ? n[o] = Mr(e[o], t[o]) : r[o] = t[o];
  return function(a) {
    for (o in n)
      r[o] = n[o](a);
    return r;
  };
}
var Pi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ss = new RegExp(Pi.source, "g");
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
function Af(e, t) {
  var n = Pi.lastIndex = ss.lastIndex = 0, r, o, a, s = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (r = Pi.exec(e)) && (o = ss.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), l[s] ? l[s] += a : l[++s] = a), (r = r[0]) === (o = o[0]) ? l[s] ? l[s] += o : l[++s] = o : (l[++s] = null, d.push({ i: s, x: Wt(r, o) })), n = ss.lastIndex;
  return n < t.length && (a = t.slice(n), l[s] ? l[s] += a : l[++s] = a), l.length < 2 ? d[0] ? Sg(d[0].x) : kg(t) : (t = d.length, function(u) {
    for (var c = 0, f; c < t; ++c)
      l[(f = d[c]).i] = f.x(u);
    return l.join("");
  });
}
function Mr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ll(t) : (n === "number" ? Wt : n === "string" ? (r = Vn(t)) ? (t = r, ta) : Af : t instanceof Vn ? ta : t instanceof Date ? wg : bg(t) ? yg : Array.isArray(t) ? xg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _g : Wt)(e, t);
}
var hu = 180 / Math.PI, Ci = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Tf(e, t, n, r, o, a) {
  var s, l, d;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (d = e * n + t * r) && (n -= e * d, r -= t * d), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, d /= l), e * r < t * n && (e = -e, t = -t, d = -d, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * hu,
    skewX: Math.atan(d) * hu,
    scaleX: s,
    scaleY: l
  };
}
var _o;
function Eg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ci : Tf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function zg(e) {
  return e == null || (_o || (_o = document.createElementNS("http://www.w3.org/2000/svg", "g")), _o.setAttribute("transform", e), !(e = _o.transform.baseVal.consolidate())) ? Ci : (e = e.matrix, Tf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Of(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, f, g, y, m) {
    if (u !== f || c !== g) {
      var p = y.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, g) });
    } else (f || g) && y.push("translate(" + f + t + g + n);
  }
  function s(u, c, f, g) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), g.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Wt(u, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function l(u, c, f, g) {
    u !== c ? g.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Wt(u, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function d(u, c, f, g, y, m) {
    if (u !== f || c !== g) {
      var p = y.push(o(y) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: Wt(u, f) }, { i: p - 2, x: Wt(c, g) });
    } else (f !== 1 || g !== 1) && y.push(o(y) + "scale(" + f + "," + g + ")");
  }
  return function(u, c) {
    var f = [], g = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, f, g), s(u.rotate, c.rotate, f, g), l(u.skewX, c.skewX, f, g), d(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, g), u = c = null, function(y) {
      for (var m = -1, p = g.length, h; ++m < p; )
        f[(h = g[m]).i] = h.x(y);
      return f.join("");
    };
  };
}
var $g = Of(Eg, "px, ", "px)", "deg)"), Pg = Of(zg, ", ", ")", ")"), Cg = 1e-12;
function mu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ag(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Tg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Do = (function e(t, n, r) {
  function o(a, s) {
    var l = a[0], d = a[1], u = a[2], c = s[0], f = s[1], g = s[2], y = c - l, m = f - d, p = y * y + m * m, h, b;
    if (p < Cg)
      b = Math.log(g / u) / t, h = function(v) {
        return [
          l + v * y,
          d + v * m,
          u * Math.exp(t * v * b)
        ];
      };
    else {
      var z = Math.sqrt(p), _ = (g * g - u * u + r * p) / (2 * u * n * z), T = (g * g - u * u - r * p) / (2 * g * n * z), $ = Math.log(Math.sqrt(_ * _ + 1) - _), w = Math.log(Math.sqrt(T * T + 1) - T);
      b = (w - $) / t, h = function(v) {
        var k = v * b, L = mu($), M = u / (n * z) * (L * Tg(t * k + $) - Ag($));
        return [
          l + M * y,
          d + M * m,
          u * L / mu(t * k + $)
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
var ur = 0, Tr = 0, Sr = 0, Nf = 1e3, na, Or, ra = 0, qn = 0, Ea = 0, Kr = typeof performance == "object" && performance.now ? performance : Date, Rf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ul() {
  return qn || (Rf(Og), qn = Kr.now() + Ea);
}
function Og() {
  qn = 0;
}
function oa() {
  this._call = this._time = this._next = null;
}
oa.prototype = If.prototype = {
  constructor: oa,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ul() : +n) + (t == null ? 0 : +t), !this._next && Or !== this && (Or ? Or._next = this : na = this, Or = this), this._call = e, this._time = n, Ai();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ai());
  }
};
function If(e, t, n) {
  var r = new oa();
  return r.restart(e, t, n), r;
}
function Ng() {
  ul(), ++ur;
  for (var e = na, t; e; )
    (t = qn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ur;
}
function vu() {
  qn = (ra = Kr.now()) + Ea, ur = Tr = 0;
  try {
    Ng();
  } finally {
    ur = 0, Ig(), qn = 0;
  }
}
function Rg() {
  var e = Kr.now(), t = e - ra;
  t > Nf && (Ea -= t, ra = e);
}
function Ig() {
  for (var e, t = na, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : na = n);
  Or = e, Ai(r);
}
function Ai(e) {
  if (!ur) {
    Tr && (Tr = clearTimeout(Tr));
    var t = e - qn;
    t > 24 ? (e < 1 / 0 && (Tr = setTimeout(vu, e - Kr.now() - Ea)), Sr && (Sr = clearInterval(Sr))) : (Sr || (ra = Kr.now(), Sr = setInterval(Rg, Nf)), ur = 1, Rf(vu));
  }
}
function gu(e, t, n) {
  var r = new oa();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Mg = ka("start", "end", "cancel", "interrupt"), Dg = [], Mf = 0, yu = 1, Ti = 2, Fo = 3, bu = 4, Oi = 5, Bo = 6;
function za(e, t, n, r, o, a) {
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
    state: Mf
  });
}
function cl(e, t) {
  var n = Bt(e, t);
  if (n.state > Mf)
    throw new Error("too late; already scheduled");
  return n;
}
function en(e, t) {
  var n = Bt(e, t);
  if (n.state > Fo)
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
  r[t] = n, n.timer = If(a, 0, n.time);
  function a(u) {
    n.state = yu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, f, g, y;
    if (n.state !== yu)
      return d();
    for (c in r)
      if (y = r[c], y.name === n.name) {
        if (y.state === Fo)
          return gu(s);
        y.state === bu ? (y.state = Bo, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[c]) : +c < t && (y.state = Bo, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[c]);
      }
    if (gu(function() {
      n.state === Fo && (n.state = bu, n.timer.restart(l, n.delay, n.time), l(u));
    }), n.state = Ti, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ti) {
      for (n.state = Fo, o = new Array(g = n.tween.length), c = 0, f = -1; c < g; ++c)
        (y = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function l(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(d), n.state = Oi, 1), f = -1, g = o.length; ++f < g; )
      o[f].call(e, c);
    n.state === Oi && (n.on.call("end", e, e.__data__, n.index, n.group), d());
  }
  function d() {
    n.state = Bo, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Lo(e, t) {
  var n = e.__transition, r, o, a = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ti && r.state < Oi, r.state = Bo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    a && delete e.__transition;
  }
}
function Bg(e) {
  return this.each(function() {
    Lo(this, e);
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
function Df(e, t) {
  var n;
  return (typeof t == "number" ? Wt : t instanceof Vn ? ta : (n = Vn(t)) ? (t = n, ta) : Af)(e, t);
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
  var n = Sa(e), r = n === "transform" ? Pg : Df;
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
  var r = Sa(e);
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
  typeof e != "function" && (e = mf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, l = r[o] = [], d, u = 0; u < s; ++u)
      (d = a[u]) && e.call(d, d.__data__, u, a) && l.push(d);
  return new dn(r, this._parents, this._name, this._id);
}
function fy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), s = new Array(r), l = 0; l < a; ++l)
    for (var d = t[l], u = n[l], c = d.length, f = s[l] = new Array(c), g, y = 0; y < c; ++y)
      (g = d[y] || u[y]) && (f[y] = g);
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
    for (var l = r[s], d = l.length, u = a[s] = new Array(d), c, f, g = 0; g < d; ++g)
      (c = l[g]) && (f = e.call(c, c.__data__, g, l)) && ("__data__" in c && (f.__data__ = c.__data__), u[g] = f, za(u[g], t, n, g, u, Bt(c, n)));
  return new dn(a, this._parents, t, n);
}
function by(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = hf(e));
  for (var r = this._groups, o = r.length, a = [], s = [], l = 0; l < o; ++l)
    for (var d = r[l], u = d.length, c, f = 0; f < u; ++f)
      if (c = d[f]) {
        for (var g = e.call(c, c.__data__, f, d), y, m = Bt(c, n), p = 0, h = g.length; p < h; ++p)
          (y = g[p]) && za(y, t, n, p, g, m);
        a.push(g), s.push(c);
      }
  return new dn(a, s, t, n);
}
var xy = ao.prototype.constructor;
function wy() {
  return new xy(this._groups, this._parents);
}
function _y(e, t) {
  var n, r, o;
  return function() {
    var a = lr(this, e), s = (this.style.removeProperty(e), lr(this, e));
    return a === s ? null : a === n && s === r ? o : o = t(n = a, r = s);
  };
}
function Ff(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ky(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var s = lr(this, e);
    return s === o ? null : s === r ? a : a = t(r = s, n);
  };
}
function Sy(e, t, n) {
  var r, o, a;
  return function() {
    var s = lr(this, e), l = n(this), d = l + "";
    return l == null && (d = l = (this.style.removeProperty(e), lr(this, e))), s === d ? null : s === r && d === o ? a : (o = d, a = t(r = s, l));
  };
}
function Ey(e, t) {
  var n, r, o, a = "style." + t, s = "end." + a, l;
  return function() {
    var d = en(this, e), u = d.on, c = d.value[a] == null ? l || (l = Ff(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), d.on = r;
  };
}
function zy(e, t, n) {
  var r = (e += "") == "transform" ? $g : Df;
  return t == null ? this.styleTween(e, _y(e, r)).on("end.style." + e, Ff(e)) : typeof t == "function" ? this.styleTween(e, Sy(e, r, dl(this, "style." + e, t))).each(Ey(this._id, e)) : this.styleTween(e, ky(e, r, t), n).on("end.style." + e, null);
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
  for (var e = this._name, t = this._id, n = Bf(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      if (d = s[u]) {
        var c = Bt(d, t);
        za(d, e, n, u, s, {
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
function Bf() {
  return ++Fy;
}
var tn = ao.prototype;
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
  e instanceof dn ? (t = e._id, e = e._name) : (t = Bf(), (n = Ly).time = ul(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, d, u = 0; u < l; ++u)
      (d = s[u]) && za(d, e, t, u, s, n || Uy(d, t));
  return new dn(r, this._parents, e, t);
}
ao.prototype.interrupt = Bg;
ao.prototype.transition = Vy;
const ko = (e) => () => e;
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
var cr = new sn(1, 0, 0);
sn.prototype;
function is(e) {
  e.stopImmediatePropagation();
}
function Er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function jy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Hy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function xu() {
  return this.__zoom || cr;
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
  var e = jy, t = Hy, n = Xy, r = Gy, o = Wy, a = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, d = Do, u = ka("start", "zoom", "end"), c, f, g, y = 500, m = 150, p = 0, h = 10;
  function b(S) {
    S.property("__zoom", xu).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", M).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(S, F, P, R) {
    var x = S.selection ? S.selection() : S;
    x.property("__zoom", xu), S !== x ? $(S, F, P, R) : x.interrupt().each(function() {
      w(this, arguments).event(R).start().zoom(null, typeof F == "function" ? F.apply(this, arguments) : F).end();
    });
  }, b.scaleBy = function(S, F, P, R) {
    b.scaleTo(S, function() {
      var x = this.__zoom.k, V = typeof F == "function" ? F.apply(this, arguments) : F;
      return x * V;
    }, P, R);
  }, b.scaleTo = function(S, F, P, R) {
    b.transform(S, function() {
      var x = t.apply(this, arguments), V = this.__zoom, Q = P == null ? T(x) : typeof P == "function" ? P.apply(this, arguments) : P, ne = V.invert(Q), fe = typeof F == "function" ? F.apply(this, arguments) : F;
      return n(_(z(V, fe), Q, ne), x, s);
    }, P, R);
  }, b.translateBy = function(S, F, P, R) {
    b.transform(S, function() {
      return n(this.__zoom.translate(
        typeof F == "function" ? F.apply(this, arguments) : F,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), s);
    }, null, R);
  }, b.translateTo = function(S, F, P, R, x) {
    b.transform(S, function() {
      var V = t.apply(this, arguments), Q = this.__zoom, ne = R == null ? T(V) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(cr.translate(ne[0], ne[1]).scale(Q.k).translate(
        typeof F == "function" ? -F.apply(this, arguments) : -F,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), V, s);
    }, R, x);
  };
  function z(S, F) {
    return F = Math.max(a[0], Math.min(a[1], F)), F === S.k ? S : new sn(F, S.x, S.y);
  }
  function _(S, F, P) {
    var R = F[0] - P[0] * S.k, x = F[1] - P[1] * S.k;
    return R === S.x && x === S.y ? S : new sn(S.k, R, x);
  }
  function T(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function $(S, F, P, R) {
    S.on("start.zoom", function() {
      w(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      w(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var x = this, V = arguments, Q = w(x, V).event(R), ne = t.apply(x, V), fe = P == null ? T(ne) : typeof P == "function" ? P.apply(x, V) : P, be = Math.max(ne[1][0] - ne[0][0], ne[1][1] - ne[0][1]), _e = x.__zoom, re = typeof F == "function" ? F.apply(x, V) : F, se = d(_e.invert(fe).concat(be / _e.k), re.invert(fe).concat(be / re.k));
      return function(ve) {
        if (ve === 1)
          ve = re;
        else {
          var Ae = se(ve), Ee = be / Ae[2];
          ve = new sn(Ee, fe[0] - Ae[0] * Ee, fe[1] - Ae[1] * Ee);
        }
        Q.zoom(null, ve);
      };
    });
  }
  function w(S, F, P) {
    return !P && S.__zooming || new v(S, F);
  }
  function v(S, F) {
    this.that = S, this.args = F, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, F), this.taps = 0;
  }
  v.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, F) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = F.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = F.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = F.invert(this.touch1[0])), this.that.__zoom = F, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var F = It(this.that).datum();
      u.call(
        S,
        this.that,
        new qy(S, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        F
      );
    }
  };
  function k(S, ...F) {
    if (!e.apply(this, arguments))
      return;
    var P = w(this, F).event(S), R = this.__zoom, x = Math.max(a[0], Math.min(a[1], R.k * Math.pow(2, r.apply(this, arguments)))), V = Gt(S);
    if (P.wheel)
      (P.mouse[0][0] !== V[0] || P.mouse[0][1] !== V[1]) && (P.mouse[1] = R.invert(P.mouse[0] = V)), clearTimeout(P.wheel);
    else {
      if (R.k === x)
        return;
      P.mouse = [V, R.invert(V)], Lo(this), P.start();
    }
    Er(S), P.wheel = setTimeout(Q, m), P.zoom("mouse", n(_(z(R, x), P.mouse[0], P.mouse[1]), P.extent, s));
    function Q() {
      P.wheel = null, P.end();
    }
  }
  function L(S, ...F) {
    if (g || !e.apply(this, arguments))
      return;
    var P = S.currentTarget, R = w(this, F, !0).event(S), x = It(S.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", be, !0), V = Gt(S, P), Q = S.clientX, ne = S.clientY;
    Ef(S.view), is(S), R.mouse = [V, this.__zoom.invert(V)], Lo(this), R.start();
    function fe(_e) {
      if (Er(_e), !R.moved) {
        var re = _e.clientX - Q, se = _e.clientY - ne;
        R.moved = re * re + se * se > p;
      }
      R.event(_e).zoom("mouse", n(_(R.that.__zoom, R.mouse[0] = Gt(_e, P), R.mouse[1]), R.extent, s));
    }
    function be(_e) {
      x.on("mousemove.zoom mouseup.zoom", null), zf(_e.view, R.moved), Er(_e), R.event(_e).end();
    }
  }
  function M(S, ...F) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, R = Gt(S.changedTouches ? S.changedTouches[0] : S, this), x = P.invert(R), V = P.k * (S.shiftKey ? 0.5 : 2), Q = n(_(z(P, V), R, x), t.apply(this, F), s);
      Er(S), l > 0 ? It(this).transition().duration(l).call($, Q, R, S) : It(this).call(b.transform, Q, R, S);
    }
  }
  function I(S, ...F) {
    if (e.apply(this, arguments)) {
      var P = S.touches, R = P.length, x = w(this, F, S.changedTouches.length === R).event(S), V, Q, ne, fe;
      for (is(S), Q = 0; Q < R; ++Q)
        ne = P[Q], fe = Gt(ne, this), fe = [fe, this.__zoom.invert(fe), ne.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== fe[2] && (x.touch1 = fe, x.taps = 0) : (x.touch0 = fe, V = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), V && (x.taps < 2 && (f = fe[0], c = setTimeout(function() {
        c = null;
      }, y)), Lo(this), x.start());
    }
  }
  function A(S, ...F) {
    if (this.__zooming) {
      var P = w(this, F).event(S), R = S.changedTouches, x = R.length, V, Q, ne, fe;
      for (Er(S), V = 0; V < x; ++V)
        Q = R[V], ne = Gt(Q, this), P.touch0 && P.touch0[2] === Q.identifier ? P.touch0[0] = ne : P.touch1 && P.touch1[2] === Q.identifier && (P.touch1[0] = ne);
      if (Q = P.that.__zoom, P.touch1) {
        var be = P.touch0[0], _e = P.touch0[1], re = P.touch1[0], se = P.touch1[1], ve = (ve = re[0] - be[0]) * ve + (ve = re[1] - be[1]) * ve, Ae = (Ae = se[0] - _e[0]) * Ae + (Ae = se[1] - _e[1]) * Ae;
        Q = z(Q, Math.sqrt(ve / Ae)), ne = [(be[0] + re[0]) / 2, (be[1] + re[1]) / 2], fe = [(_e[0] + se[0]) / 2, (_e[1] + se[1]) / 2];
      } else if (P.touch0)
        ne = P.touch0[0], fe = P.touch0[1];
      else
        return;
      P.zoom("touch", n(_(Q, ne, fe), P.extent, s));
    }
  }
  function q(S, ...F) {
    if (this.__zooming) {
      var P = w(this, F).event(S), R = S.changedTouches, x = R.length, V, Q;
      for (is(S), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, y), V = 0; V < x; ++V)
        Q = R[V], P.touch0 && P.touch0[2] === Q.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === Q.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0)
        P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (Q = Gt(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < h)) {
        var ne = It(this).on("dblclick.zoom");
        ne && ne.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : ko(+S), b) : r;
  }, b.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : ko(!!S), b) : e;
  }, b.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : ko(!!S), b) : o;
  }, b.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : ko([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), b) : t;
  }, b.scaleExtent = function(S) {
    return arguments.length ? (a[0] = +S[0], a[1] = +S[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(S) {
    return arguments.length ? (s[0][0] = +S[0][0], s[1][0] = +S[1][0], s[0][1] = +S[0][1], s[1][1] = +S[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(S) {
    return arguments.length ? (n = S, b) : n;
  }, b.duration = function(S) {
    return arguments.length ? (l = +S, b) : l;
  }, b.interpolate = function(S) {
    return arguments.length ? (d = S, b) : d;
  }, b.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? b : S;
  }, b.clickDistance = function(S) {
    return arguments.length ? (p = (S = +S) * S, b) : Math.sqrt(p);
  }, b.tapDistance = function(S) {
    return arguments.length ? (h = +S, b) : h;
  }, b;
}
var ue = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(ue || {}), fl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(fl || {}), Tn = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(Tn || {}), kn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(kn || {}), aa = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(aa || {}), Dr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Dr || {}), Lf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Lf || {});
const Ky = ["INPUT", "SELECT", "TEXTAREA"], Zy = typeof document < "u" ? document : null;
function Ni(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, a = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Ky.includes(r?.nodeName) || o || !!a;
}
function Jy(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function wu(e, t, n, r) {
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
    return Array.isArray(e) ? e.some((o) => wu(n[r], o, t, n.type === "keyup")) : wu(n[r], e, t, n.type === "keyup");
  };
}
function eb(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Fr(e, t) {
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
  ), ff(["blur", "contextmenu"], l), ru(
    (...u) => s(...u),
    (u) => {
      var c, f;
      const g = Me(t?.actInsideInputWithModifier) ?? !0, y = Me(t?.preventDefault) ?? !1;
      if (o = Jy(u), (!o || o && !g) && Ni(u))
        return;
      const p = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target, h = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !y && (o || !h) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), ru(
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
const Uf = "vue-flow__node-desc", Vf = "vue-flow__edge-desc", tb = "vue-flow__aria-live", qf = ["Enter", " ", "Escape"], sr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function sa(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function ia(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function $a(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function jn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function jf(e, t) {
  return {
    x: jn(e.x, t[0][0], t[1][0]),
    y: jn(e.y, t[0][1], t[1][1])
  };
}
function _u(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function Sn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Dn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !Sn(e);
}
function Nr(e) {
  return Dn(e) && "computedPosition" in e;
}
function So(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function nb(e) {
  return So(e.width) && So(e.height) && So(e.x) && So(e.y);
}
function rb(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: rr({
      width: 0,
      height: 0
    }),
    computedPosition: rr({
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
    events: rr(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function Hf(e, t, n) {
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
    events: rr(et(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? a, e, { id: e.id.toString() });
}
function Gf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, a = /* @__PURE__ */ new Set(), s = r === "source" ? "target" : "source";
  for (const l of n)
    l[s] === o && a.add(l[r]);
  return t.filter((l) => a.has(l.id));
}
function ob(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Gf(a, s, l, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Sn(a) && a.source === r).map((a) => n.find((s) => Dn(s) && s.id === a.target));
}
function ab(...e) {
  if (e.length === 3) {
    const [a, s, l] = e;
    return Gf(a, s, l, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((a) => Sn(a) && a.target === r).map((a) => n.find((s) => Dn(s) && s.id === a.source));
}
function Wf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function sb(e, t) {
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
  return a ? Pa(l, s) : l;
}
function ib(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Xf({ x: e, y: t, width: n, height: r }) {
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
function Yf(e) {
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
      Xf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return lb(t);
}
function Kf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const a = {
    ...Jr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const l of e) {
    const { dimensions: d, selectable: u = !0, hidden: c = !1 } = l, f = d.width ?? l.width ?? null, g = d.height ?? l.height ?? null;
    if (o && !u || c)
      continue;
    const y = ia(a, sa(l)), m = f === null || g === null, p = r && y > 0, h = (f ?? 0) * (g ?? 0);
    (m || p || y >= h || l.dragging) && s.push(l);
  }
  return s;
}
function Zf(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const r of e)
      n.add(r.id);
  return t.filter((r) => n.has(r.source) || n.has(r.target));
}
function Qn(e, t) {
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
function ub(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Qn(e, n), o = Qn(e, t);
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
    const r = Qn(e.top ?? e.y ?? 0, n), o = Qn(e.bottom ?? e.y ?? 0, n), a = Qn(e.left ?? e.x ?? 0, t), s = Qn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: a, x: a + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function cb(e, t, n, r, o, a) {
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
function ku(e, t, n, r, o, a = 0.1) {
  const s = ub(a, t, n), l = (t - s.x) / e.width, d = (n - s.y) / e.height, u = Math.min(l, d), c = jn(u, r, o), f = e.x + e.width / 2, g = e.y + e.height / 2, y = t / 2 - f * c, m = n / 2 - g * c, p = cb(e, y, m, c, t, n), h = {
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
function db(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Jf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Jf(n, t) : !1;
}
function Qr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function Su(e) {
  const t = e.ctrlKey && la() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function Eu(e, t, n) {
  return e < t ? jn(Math.abs(e - t), 1, t) / t : e > n ? -jn(Math.abs(e - n), 1, t) / t : 0;
}
function Qf(e, t, n = 15, r = 40) {
  const o = Eu(e.x, r, t.width - r) * n, a = Eu(e.y, r, t.height - r) * n;
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
function zu(e, t) {
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
function $u(e) {
  return {
    item: e,
    type: "add"
  };
}
function Pu(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Cu(e, t, n, r, o) {
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
const Au = () => {
};
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Au, r = () => !1;
  const o = () => t.size > 0 || r(), a = (g) => {
    n = g;
  }, s = () => {
    n = Au;
  }, l = (g) => {
    r = g;
  }, d = () => {
    r = () => !1;
  }, u = (g) => {
    t.delete(g);
  };
  return {
    on: (g) => {
      t.add(g);
      const y = () => u(g);
      return Gr(y), { off: y };
    },
    off: u,
    trigger: (g) => {
      const y = [n];
      return o() ? y.push(...t) : e && y.push(e), Promise.allSettled(y.map((m) => m(g)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: a,
    removeEmitter: s,
    setHasEmitListeners: l,
    removeHasEmitListeners: d
  };
}
function Tu(e, t, n) {
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
    (d.selected || d.id === r) && (!d.parentNode || !Jf(d, e)) && (d.draggable || t && typeof d.draggable > "u") && e.get(l) && s.set(l, {
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
function ep(e) {
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
  const [r, o, a, s] = typeof e != "string" ? ep(e.padding) : [0, 0, 0, 0];
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
      t(new at(nt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const a = r?.computedPosition.x || 0, s = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + a, o[0][1] + s],
      [o[1][0] + a, o[1][1] + s]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [a, s, l, d] = ep(o.padding), u = r?.computedPosition.x || 0, c = r?.computedPosition.y || 0;
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
  const a = mb(e.dimensions, hb(e, n, r, o)), s = jf(t, a);
  return {
    position: {
      x: s.x - (o?.computedPosition.x || 0),
      y: s.y - (o?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function dr(e, t, n = ue.Left, r = !1) {
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
function Ou(e, t) {
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
  const c = Xf({
    x: (0 - d.x) / d.zoom,
    y: (0 - d.y) / d.zoom,
    width: s / d.zoom,
    height: l / d.zoom
  }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), g = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(f * g) > 0;
}
function gb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const a = t(e.source), s = t(e.target);
  return !a || !s ? 0 : (n && (o = r ? e.zIndex : Math.max(a.computedPosition.z || 0, s.computedPosition.z || 0)), o);
}
var nt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(nt || {});
const Nu = {
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
    super((r = Nu[t]) == null ? void 0 : r.call(Nu, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
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
const la = () => {
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
function Pa(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const xb = () => !0;
function cs(e) {
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
    ia(o, sa(a)) > 0 && r.push(a);
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
      const { x: g, y } = dr(u, f, f.position, !0), m = Math.sqrt((g - e.x) ** 2 + (y - e.y) ** 2);
      m > t || (m < l ? (s = [{ ...f, x: g, y }], l = m) : m === l && s.push({ ...f, x: g, y }));
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
function Ru(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: a,
  doc: s,
  lib: l,
  flowId: d,
  isValidConnection: u = xb
}, c, f, g, y) {
  const m = a === "target", p = t ? s.querySelector(`.${l}-flow__handle[data-id="${d}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: b } = Xt(e), z = s.elementFromPoint(h, b), _ = z?.classList.contains(`${l}-flow__handle`) ? z : p, T = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const $ = tp(void 0, _), w = _.getAttribute("data-nodeid"), v = _.getAttribute("data-handleid"), k = _.classList.contains("connectable"), L = _.classList.contains("connectableend");
    if (!w || !$)
      return T;
    const M = {
      source: m ? w : r,
      sourceHandle: m ? v : o,
      target: m ? r : w,
      targetHandle: m ? o : v
    };
    T.connection = M;
    const A = k && L && (n === kn.Strict ? m && $ === "source" || !m && $ === "target" : w !== r || v !== o);
    T.isValid = A && u(M, {
      nodes: f,
      edges: c,
      sourceNode: g(M.source),
      targetNode: g(M.target)
    }), T.toHandle = np(w, $, v, y, n, !0);
  }
  return T;
}
function tp(e, t) {
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
function np(e, t, n, r, o, a = !1) {
  var s, l, d;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === kn.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((l = u.handleBounds) == null ? void 0 : l.source) ?? [], ...((d = u.handleBounds) == null ? void 0 : d.target) ?? []], f = (n ? c?.find((g) => g.id === n) : c?.[0]) ?? null;
  return f && a ? { ...f, ...dr(u, f, f.position, !0) } : f;
}
const Ri = {
  [ue.Left]: ue.Right,
  [ue.Right]: ue.Left,
  [ue.Top]: ue.Bottom,
  [ue.Bottom]: ue.Top
}, zb = ["production", "prod"];
function io(e, ...t) {
  rp() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function rp() {
  return !zb.includes(process.env.NODE_ENV || "");
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
      ...$a(s)
    };
  }) : null;
}
function Ii(e, t, n, r, o, a = !1, s) {
  o.value = !1, e.selected ? (a || e.selected && t) && (r([e]), un(() => {
    s.blur();
  })) : n([e]);
}
function et(e) {
  return typeof O(e) < "u";
}
function $b(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new at(nt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return Sn(e) ? o = e : o = {
    ...e,
    id: Wf(e)
  }, o = Hf(o, void 0, r), sb(o, t) ? !1 : o;
}
function Pb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new at(nt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new at(nt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: a, ...s } = e;
  return {
    ...s,
    id: r ? Wf(t) : a,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Mu(e, t, n) {
  const r = {}, o = [];
  for (let a = 0; a < e.length; ++a) {
    const s = e[a];
    if (!Dn(s)) {
      n(
        new at(nt.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${a}]`
      );
      continue;
    }
    const l = rb(s, t(s.id), s.parentNode);
    s.parentNode && (r[s.parentNode] = !0), o[a] = l;
  }
  for (const a of o) {
    const s = t(a.parentNode) || o.find((l) => l.id === a.parentNode);
    a.parentNode && !s && n(new at(nt.NODE_MISSING_PARENT, a.id, a.parentNode)), (a.parentNode || r[a.id]) && (r[a.id] && (a.isParent = !0), s && (s.isParent = !0));
  }
  return o;
}
function Du(e, t, n, r, o, a) {
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
function ds(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: s = null, targetHandle: l = null } = r, d = { edgeId: r.id, source: o, target: a, sourceHandle: s, targetHandle: l }, u = `${o}-${s}--${a}-${l}`, c = `${a}-${l}--${o}-${s}`;
    Du("source", d, c, e, o, s), Du("target", d, u, e, a, l);
  }
}
function Fu(e, t) {
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
    const c = Sn(u) ? u : $b(u, l, o, a);
    if (!c)
      continue;
    const f = n(c.source), g = n(c.target);
    if (!f || !g) {
      o(new at(nt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new at(nt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!g) {
      o(new at(nt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: l,
      nodes: s,
      sourceNode: f,
      targetNode: g
    })) {
      o(new at(nt.EDGE_INVALID, c.id));
      continue;
    }
    const y = r(c.id);
    d.push({
      ...Hf(c, y, a),
      sourceNode: f,
      targetNode: g
    });
  }
  return d;
}
const Bu = /* @__PURE__ */ Symbol("vueFlow"), op = /* @__PURE__ */ Symbol("nodeId"), ap = /* @__PURE__ */ Symbol("nodeRef"), Cb = /* @__PURE__ */ Symbol("edgeId"), Ab = /* @__PURE__ */ Symbol("edgeRef"), Ca = /* @__PURE__ */ Symbol("slots");
function sp(e) {
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
    panBy: g,
    findNode: y,
    multiSelectionActive: m,
    nodesSelectionActive: p,
    selectNodesOnDrag: h,
    removeSelectedElements: b,
    addSelectedNodes: z,
    updateNodePositions: _,
    emits: T
  } = qe(), { onStart: $, onDrag: w, onStop: v, onClick: k, el: L, disabled: M, id: I, selectable: A, dragHandle: q } = e, S = an(!1);
  let F = [], P, R = null, x = { x: void 0, y: void 0 }, V = { x: 0, y: 0 }, Q = null, ne = !1, fe = !1, be = 0, _e = !1;
  const re = Nb(), se = ({ x: ie, y: ge }) => {
    x = { x: ie, y: ge };
    let D = !1;
    if (F = F.map((N) => {
      const B = { x: ie - N.distance.x, y: ge - N.distance.y }, { computedPosition: H } = pl(
        N,
        n.value ? Pa(B, r.value) : B,
        T.error,
        s.value,
        N.parentNode ? y(N.parentNode) : void 0
      );
      return D = D || N.position.x !== H.x || N.position.y !== H.y, N.position = H, N;
    }), fe = fe || D, !!D && (_(F, !0, !0), S.value = !0, Q)) {
      const [N, B] = us({
        id: I,
        dragItems: F,
        findNode: y
      });
      w({ event: Q, node: N, nodes: B });
    }
  }, ve = () => {
    if (!R)
      return;
    const [ie, ge] = Qf(V, R, c.value);
    if (ie !== 0 || ge !== 0) {
      const D = {
        x: (x.x ?? 0) - ie / d.value.zoom,
        y: (x.y ?? 0) - ge / d.value.zoom
      };
      g({ x: ie, y: ge }) && se(D);
    }
    be = requestAnimationFrame(ve);
  }, Ae = (ie, ge) => {
    ne = !0;
    const D = y(I);
    !h.value && !m.value && D && (D.selected || b()), D && Me(A) && h.value && Ii(
      D,
      m.value,
      z,
      b,
      p,
      !1,
      ge
    );
    const N = re(ie.sourceEvent);
    if (x = N, F = fb(a.value, f.value, N, I), F.length) {
      const [B, H] = us({
        id: I,
        dragItems: F,
        findNode: y
      });
      $({ event: ie.sourceEvent, node: B, nodes: H });
    }
  }, Ee = (ie, ge) => {
    var D;
    ie.sourceEvent.type === "touchmove" && ie.sourceEvent.touches.length > 1 || (fe = !1, l.value === 0 && Ae(ie, ge), x = re(ie.sourceEvent), R = ((D = t.value) == null ? void 0 : D.getBoundingClientRect()) || null, V = Xt(ie.sourceEvent, R));
  }, le = (ie, ge) => {
    const D = re(ie.sourceEvent);
    if (!_e && ne && u.value && (_e = !0, ve()), !ne) {
      const N = D.xSnapped - (x.x ?? 0), B = D.ySnapped - (x.y ?? 0);
      Math.sqrt(N * N + B * B) > l.value && Ae(ie, ge);
    }
    (x.x !== D.xSnapped || x.y !== D.ySnapped) && F.length && ne && (Q = ie.sourceEvent, V = Xt(ie.sourceEvent, R), se(D));
  }, we = (ie) => {
    let ge = !1;
    if (!ne && !S.value && !m.value) {
      const D = ie.sourceEvent, N = re(D), B = N.xSnapped - (x.x ?? 0), H = N.ySnapped - (x.y ?? 0), j = Math.sqrt(B * B + H * H);
      j !== 0 && j <= l.value && (k?.(D), ge = !0);
    }
    if (F.length && !ge) {
      fe && (_(F, !1, !1), fe = !1);
      const [D, N] = us({
        id: I,
        dragItems: F,
        findNode: y
      });
      v({ event: ie.sourceEvent, node: D, nodes: N });
    }
    F = [], S.value = !1, _e = !1, ne = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(be);
  };
  return Ie([() => Me(M), L], ([ie, ge], D, N) => {
    if (ge) {
      const B = It(ge);
      ie || (P = ng().on("start", (H) => Ee(H, ge)).on("drag", (H) => le(H, ge)).on("end", (H) => we(H)).filter((H) => {
        const j = H.target, oe = Me(q);
        return !H.button && (!o.value || !Tu(j, `.${o.value}`, ge) && (!oe || Tu(j, oe, ge)));
      }), B.call(P)), N(() => {
        B.on(".drag", null), P && (P.on("start", null), P.on("drag", null), P.on("end", null));
      });
    }
  }), S;
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
    const s = ((a = r.value) == null ? void 0 : a.getBoundingClientRect()) ?? { left: 0, top: 0 }, l = yb(o) ? o.sourceEvent : o, { x: d, y: u } = Xt(l, s), c = Jr({ x: d, y: u }, e.value), { x: f, y: g } = n.value ? Pa(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: g,
      ...c
    };
  };
}
function Eo() {
  return !0;
}
function ip({
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
    connectionClickStartHandle: g,
    nodesConnectable: y,
    autoPanOnConnect: m,
    autoPanSpeed: p,
    findNode: h,
    panBy: b,
    startConnection: z,
    updateConnection: _,
    endConnection: T,
    emits: $,
    viewport: w,
    edges: v,
    nodes: k,
    isValidConnection: L,
    nodeLookup: M
  } = qe();
  let I = null, A = !1, q = null;
  function S(P) {
    var R;
    const x = Me(n) === "target", V = hl(P), Q = _u(P.target), ne = P.currentTarget;
    if (ne && (V && P.button === 0 || !V)) {
      let fe = function(pe) {
        D = Xt(pe, we), se = kb(
          Jr(D, w.value, !1, [1, 1]),
          c.value,
          M.value,
          H
        ), N || (B(), N = !0);
        const xe = Ru(
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
          v.value,
          k.value,
          h,
          M.value
        );
        q = xe.handleDomNode, I = xe.connection, A = Eb(!!se, xe.isValid);
        const ze = {
          // from stays the same
          ...de,
          isValid: A,
          to: xe.toHandle && A ? Zr({ x: xe.toHandle.x, y: xe.toHandle.y }, w.value) : D,
          toHandle: xe.toHandle,
          toPosition: A && xe.toHandle ? xe.toHandle.position : Ri[H.position],
          toNode: xe.toHandle ? M.value.get(xe.toHandle.nodeId) : null
        };
        if (A && se && de?.toHandle && ze.toHandle && de.toHandle.type === ze.toHandle.type && de.toHandle.nodeId === ze.toHandle.nodeId && de.toHandle.id === ze.toHandle.id && de.to.x === ze.to.x && de.to.y === ze.to.y)
          return;
        const Be = se ?? xe.toHandle;
        if (_(
          Be && A ? Zr(
            {
              x: Be.x,
              y: Be.y
            },
            w.value
          ) : D,
          Be,
          Sb(!!Be, A)
        ), de = ze, !se && !A && !q)
          return cs(ge);
        I && I.source !== I.target && q && (cs(ge), ge = q, q.classList.add("connecting", "vue-flow__handle-connecting"), q.classList.toggle("valid", !!A), q.classList.toggle("vue-flow__handle-valid", !!A));
      }, be = function(pe) {
        "touches" in pe && pe.touches.length > 0 || ((se || q) && I && A && (a ? a(pe, I) : $.connect(I)), $.connectEnd(pe), o && s?.(pe), cs(ge), cancelAnimationFrame(ve), T(pe), N = !1, A = !1, I = null, q = null, Q.removeEventListener("mousemove", fe), Q.removeEventListener("mouseup", be), Q.removeEventListener("touchmove", fe), Q.removeEventListener("touchend", be));
      };
      const _e = h(Me(t));
      let re = Me(r) || L.value || Eo;
      !re && _e && (re = (x ? _e.isValidSourcePos : _e.isValidTargetPos) || Eo);
      let se, ve = 0;
      const { x: Ae, y: Ee } = Xt(P), le = tp(Me(o), ne), we = (R = d.value) == null ? void 0 : R.getBoundingClientRect();
      if (!we || !le)
        return;
      const ie = np(Me(t), le, Me(e), M.value, u.value);
      if (!ie)
        return;
      let ge, D = Xt(P, we), N = !1;
      const B = () => {
        if (!m.value)
          return;
        const [pe, xe] = Qf(D, we, p.value);
        b({ x: pe, y: xe }), ve = requestAnimationFrame(B);
      }, H = {
        ...ie,
        nodeId: Me(t),
        type: le,
        position: ie.position
      }, j = M.value.get(Me(t)), ae = {
        inProgress: !0,
        isValid: null,
        from: dr(j, H, ue.Left, !0),
        fromHandle: H,
        fromPosition: H.position,
        fromNode: j,
        to: D,
        toHandle: null,
        toPosition: Ri[H.position],
        toNode: null
      };
      z(
        {
          nodeId: Me(t),
          id: Me(e),
          type: le,
          position: ne?.getAttribute("data-handlepos") || ue.Top,
          ...D
        },
        {
          x: Ae - we.left,
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
    if (!g.value) {
      $.clickConnectStart({ event: P, nodeId: Me(t), handleId: Me(e) }), z(
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
    let Q = Me(r) || L.value || Eo;
    const ne = h(Me(t));
    if (!Q && ne && (Q = (V ? ne.isValidSourcePos : ne.isValidTargetPos) || Eo), ne && (typeof ne.connectable > "u" ? y.value : ne.connectable) === !1)
      return;
    const fe = _u(P.target), be = Ru(
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
        fromNodeId: g.value.nodeId,
        fromHandleId: g.value.id ?? null,
        fromType: g.value.type,
        isValidConnection: Q,
        doc: fe,
        lib: "vue",
        flowId: l,
        nodeLookup: M.value
      },
      v.value,
      k.value,
      h,
      M.value
    ), _e = ((R = be.connection) == null ? void 0 : R.source) === ((x = be.connection) == null ? void 0 : x.target);
    be.isValid && be.connection && !_e && $.connect(be.connection), $.clickConnectEnd(P), T(P, !0);
  }
  return {
    handlePointerDown: S,
    handleClick: F
  };
}
function Rb() {
  return gr(op, "");
}
function lp(e) {
  const t = e ?? Rb() ?? "", n = gr(ap, G(null)), { findNode: r, edges: o, emits: a } = qe(), s = r(t);
  return s || a.error(new at(nt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: s,
    parentNode: J(() => r(s.parentNode)),
    connectedEdges: J(() => Zf([s], o.value))
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
function up() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: a, nodesDraggable: s, emits: l } = qe();
  return (d, u = !1) => {
    const c = a.value ? o.value[0] : 5, f = a.value ? o.value[1] : 5, g = u ? 4 : 1, y = d.x * c * g, m = d.y * f * g, p = [];
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
const zo = 0.1, Db = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function vn() {
  return io("Viewport not initialized yet."), Promise.resolve(!1);
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
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Mr : Do).scaleBy(
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
      const { x: u, y: c } = jf({ x: -r, y: -o }, e.translateExtent), f = cr.translate(-u, -c).scale(a);
      e.d3Selection && e.d3Zoom ? (d = e.d3Zoom) == null || d.interpolate(s?.interpolate === "linear" ? Mr : Do).transform(
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
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(a?.interpolate === "linear" ? Mr : Do).scaleTo(
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
      for (const g of e.nodes)
        g.dimensions.width && g.dimensions.height && (o?.includeHiddenNodes || !g.hidden) && (!((a = o.nodes) != null && a.length) || (s = o.nodes) != null && s.length && o.nodes.includes(g.id)) && l.push(g);
      if (!l.length)
        return Promise.resolve(!1);
      const d = Yf(l), { x: u, y: c, zoom: f } = ku(
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
      const { x: s, y: l, zoom: d } = ku(
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
  } : Fb);
}
function ps(e, t = 0, n = Db, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Lb(e, t, n) {
  const r = Gd(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, h, b = !!(n.nodes.value.length || n.edges.value.length);
        p = Jn([e.modelValue, () => {
          var z, _;
          return (_ = (z = e.modelValue) == null ? void 0 : z.value) == null ? void 0 : _.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setElements(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = Jn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([z, _]) => {
            var T;
            (T = e.modelValue) != null && T.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [...z, ..._], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Io(() => {
          p?.stop(), h?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let p, h, b = !!n.nodes.value.length;
        p = Jn([e.nodes, () => {
          var z, _;
          return (_ = (z = e.nodes) == null ? void 0 : z.value) == null ? void 0 : _.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setNodes(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = Jn(
          [n.nodes, () => n.nodes.value.length],
          ([z]) => {
            var _;
            (_ = e.nodes) != null && _.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [...z], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Io(() => {
          p?.stop(), h?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        let p, h, b = !!n.edges.value.length;
        p = Jn([e.edges, () => {
          var z, _;
          return (_ = (z = e.edges) == null ? void 0 : z.value) == null ? void 0 : _.length;
        }], ([z]) => {
          z && Array.isArray(z) && (h?.pause(), n.setEdges(z), !h && !b && z.length ? b = !0 : h?.resume());
        }), h = Jn(
          [n.edges, () => n.edges.value.length],
          ([z]) => {
            var _;
            (_ = e.edges) != null && _.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [...z], un(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), Io(() => {
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
    }, g = () => {
      r.run(() => {
        const p = async (h) => {
          let b = h;
          typeof t.autoConnect == "function" && (b = await t.autoConnect(h)), b !== !1 && n.addEdges([b]);
        };
        Ie(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Ie(
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
          const z = Ve(() => t[b]), _ = n[b];
          rl(_) && r.run(() => {
            Ie(
              z,
              (T) => {
                et(T) && (_.value = T);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), a(), s(), d(), l(), u(), c(), f(), g(), y();
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
    error: ce((e) => io(e.message))
  };
}
function Vb(e, t) {
  const n = yr();
  fh(() => {
    for (const [o, a] of Object.entries(t.value)) {
      const s = (l) => {
        e(o, l);
      };
      a.setEmitter(s), Gr(a.removeEmitter), a.setHasEmitListeners(() => r(o)), Gr(a.removeHasEmitListeners);
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
    multiSelectionKeyCode: la() ? "Meta" : "Control",
    zoomActivationKeyCode: la() ? "Meta" : "Control",
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
    const N = D ?? [];
    e.hooks.updateNodeInternals.trigger(N);
  }, a = (D) => ab(D, e.nodes, e.edges), s = (D) => ob(D, e.nodes, e.edges), l = (D) => Zf(D, e.edges), d = ({ id: D, type: N, nodeId: B }) => {
    var H;
    const j = D ? `-${N}-${D}` : `-${N}`;
    return Array.from(((H = e.connectionLookup.get(`${B}${j}`)) == null ? void 0 : H.values()) ?? []);
  }, u = (D) => {
    if (D)
      return t.value.get(D);
  }, c = (D) => {
    if (D)
      return n.value.get(D);
  }, f = (D, N, B) => {
    var H, j;
    const oe = [];
    for (const ae of D) {
      const de = {
        id: ae.id,
        type: "position",
        dragging: B,
        from: ae.from
      };
      if (N && (de.position = ae.position, ae.parentNode)) {
        const pe = u(ae.parentNode);
        de.position = {
          x: de.position.x - (((H = pe?.computedPosition) == null ? void 0 : H.x) ?? 0),
          y: de.position.y - (((j = pe?.computedPosition) == null ? void 0 : j.y) ?? 0)
        };
      }
      oe.push(de);
    }
    oe?.length && e.hooks.nodesChange.trigger(oe);
  }, g = (D) => {
    if (!e.vueFlowRef)
      return;
    const N = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!N)
      return;
    const B = window.getComputedStyle(N), { m22: H } = new window.DOMMatrixReadOnly(B.transform), j = [];
    for (const oe of D) {
      const ae = oe, de = u(ae.id);
      if (de) {
        const pe = $a(ae.nodeElement);
        if (!!(pe.width && pe.height && (de.dimensions.width !== pe.width || de.dimensions.height !== pe.height || ae.forceUpdate))) {
          const ze = ae.nodeElement.getBoundingClientRect();
          de.dimensions = pe, de.handleBounds.source = Iu("source", ae.nodeElement, ze, H, de.id), de.handleBounds.target = Iu("target", ae.nodeElement, ze, H, de.id), j.push({
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
  }, y = (D, N) => {
    const B = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
    for (const ae of D)
      Dn(ae) ? B.add(ae.id) : Sn(ae) && H.add(ae.id);
    const j = bn(t.value, B, !0), oe = bn(n.value, H);
    if (e.multiSelectionActive) {
      for (const ae of B)
        j.push(yn(ae, N));
      for (const ae of H)
        oe.push(yn(ae, N));
    }
    j.length && e.hooks.nodesChange.trigger(j), oe.length && e.hooks.edgesChange.trigger(oe);
  }, m = (D) => {
    if (e.multiSelectionActive) {
      const N = D.map((B) => yn(B.id, !0));
      e.hooks.nodesChange.trigger(N);
      return;
    }
    e.hooks.nodesChange.trigger(bn(t.value, new Set(D.map((N) => N.id)), !0)), e.hooks.edgesChange.trigger(bn(n.value));
  }, p = (D) => {
    if (e.multiSelectionActive) {
      const N = D.map((B) => yn(B.id, !0));
      e.hooks.edgesChange.trigger(N);
      return;
    }
    e.hooks.edgesChange.trigger(bn(n.value, new Set(D.map((N) => N.id)))), e.hooks.nodesChange.trigger(bn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (D) => {
    y(D, !0);
  }, b = (D) => {
    const B = (D || e.nodes).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, z = (D) => {
    const B = (D || e.edges).map((H) => (H.selected = !1, yn(H.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, _ = (D) => {
    if (!D || !D.length)
      return y([], !1);
    const N = D.reduce(
      (B, H) => {
        const j = yn(H.id, !1);
        return Dn(H) ? B.nodes.push(j) : B.edges.push(j), B;
      },
      { nodes: [], edges: [] }
    );
    N.nodes.length && e.hooks.nodesChange.trigger(N.nodes), N.edges.length && e.hooks.edgesChange.trigger(N.edges);
  }, T = (D) => {
    var N;
    (N = e.d3Zoom) == null || N.scaleExtent([D, e.maxZoom]), e.minZoom = D;
  }, $ = (D) => {
    var N;
    (N = e.d3Zoom) == null || N.scaleExtent([e.minZoom, D]), e.maxZoom = D;
  }, w = (D) => {
    var N;
    (N = e.d3Zoom) == null || N.translateExtent(D), e.translateExtent = D;
  }, v = (D) => {
    e.nodeExtent = D, o();
  }, k = (D) => {
    var N;
    (N = e.d3Zoom) == null || N.clickDistance(D);
  }, L = (D) => {
    e.nodesDraggable = D, e.nodesConnectable = D, e.elementsSelectable = D;
  }, M = (D) => {
    const N = D instanceof Function ? D(e.nodes) : D;
    !e.initialized && !N.length || (e.nodes = Mu(N, u, e.hooks.error.trigger));
  }, I = (D) => {
    const N = D instanceof Function ? D(e.edges) : D;
    if (!e.initialized && !N.length)
      return;
    const B = fs(
      N,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    ds(e.connectionLookup, n.value, B), e.edges = B;
  }, A = (D) => {
    const N = D instanceof Function ? D([...e.nodes, ...e.edges]) : D;
    !e.initialized && !N.length || (M(N.filter(Dn)), I(N.filter(Sn)));
  }, q = (D) => {
    let N = D instanceof Function ? D(e.nodes) : D;
    N = Array.isArray(N) ? N : [N];
    const B = Mu(N, u, e.hooks.error.trigger), H = [];
    for (const j of B)
      H.push($u(j));
    H.length && e.hooks.nodesChange.trigger(H);
  }, S = (D) => {
    let N = D instanceof Function ? D(e.edges) : D;
    N = Array.isArray(N) ? N : [N];
    const B = fs(
      N,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), H = [];
    for (const j of B)
      H.push($u(j));
    H.length && e.hooks.edgesChange.trigger(H);
  }, F = (D, N = !0, B = !1) => {
    const H = D instanceof Function ? D(e.nodes) : D, j = Array.isArray(H) ? H : [H], oe = [], ae = [];
    function de(xe) {
      const ze = l(xe);
      for (const Be of ze)
        (!et(Be.deletable) || Be.deletable) && ae.push(Cu(Be.id, Be.source, Be.target, Be.sourceHandle, Be.targetHandle));
    }
    function pe(xe) {
      const ze = [];
      for (const Be of e.nodes)
        Be.parentNode === xe && ze.push(Be);
      if (ze.length) {
        for (const Be of ze)
          oe.push(Pu(Be.id));
        N && de(ze);
        for (const Be of ze)
          pe(Be.id);
      }
    }
    for (const xe of j) {
      const ze = typeof xe == "string" ? u(xe) : xe;
      ze && (et(ze.deletable) && !ze.deletable || (oe.push(Pu(ze.id)), N && de([ze]), B && pe(ze.id)));
    }
    ae.length && e.hooks.edgesChange.trigger(ae), oe.length && e.hooks.nodesChange.trigger(oe);
  }, P = (D) => {
    const N = D instanceof Function ? D(e.edges) : D, B = Array.isArray(N) ? N : [N], H = [];
    for (const j of B) {
      const oe = typeof j == "string" ? c(j) : j;
      oe && (et(oe.deletable) && !oe.deletable || H.push(
        Cu(
          typeof j == "string" ? j : j.id,
          oe.source,
          oe.target,
          oe.sourceHandle,
          oe.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(H);
  }, R = (D, N, B = !0) => {
    const H = c(D.id);
    if (!H)
      return !1;
    const j = e.edges.indexOf(H), oe = Pb(D, N, H, B, e.hooks.error.trigger);
    if (oe) {
      const [ae] = fs(
        [oe],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((de, pe) => pe === j ? ae : de), ds(e.connectionLookup, n.value, [ae]), ae;
    }
    return !1;
  }, x = (D, N, B = { replace: !1 }) => {
    const H = c(D);
    if (!H)
      return;
    const j = typeof N == "function" ? N(H) : N;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, V = (D) => zu(D, e.nodes), Q = (D) => {
    const N = zu(D, e.edges);
    return ds(e.connectionLookup, n.value, N), N;
  }, ne = (D, N, B = { replace: !1 }) => {
    const H = u(D);
    if (!H)
      return;
    const j = typeof N == "function" ? N(H) : N;
    B.replace ? e.nodes.splice(e.nodes.indexOf(H), 1, j) : Object.assign(H, j);
  }, fe = (D, N, B = { replace: !1 }) => {
    const H = u(D);
    if (!H)
      return;
    const j = typeof N == "function" ? N(H) : N;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, be = (D, N, B = !1) => {
    B ? e.connectionClickStartHandle = D : e.connectionStartHandle = D, e.connectionEndHandle = null, e.connectionStatus = null, N && (e.connectionPosition = N);
  }, _e = (D, N = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = D, e.connectionEndHandle = N, e.connectionStatus = B);
  }, re = (D, N) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, N ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, se = (D) => {
    const N = nb(D), B = N ? null : Nr(D) ? D : u(D.id);
    return !N && !B ? [null, null, N] : [N ? D : sa(B), B, N];
  }, ve = (D, N = !0, B = e.nodes) => {
    const [H, j, oe] = se(D);
    if (!H)
      return [];
    const ae = [];
    for (const de of B || e.nodes) {
      if (!oe && (de.id === j.id || !de.computedPosition))
        continue;
      const pe = sa(de), xe = ia(pe, H);
      (N && xe > 0 || xe >= pe.width * pe.height || xe >= Number(H.width) * Number(H.height)) && ae.push(de);
    }
    return ae;
  }, Ae = (D, N, B = !0) => {
    const [H] = se(D);
    if (!H)
      return !1;
    const j = ia(H, N);
    return B && j > 0 || j >= Number(H.width) * Number(H.height);
  }, Ee = (D) => {
    const { viewport: N, dimensions: B, d3Zoom: H, d3Selection: j, translateExtent: oe } = e;
    if (!H || !j || !D.x && !D.y)
      return !1;
    const ae = cr.translate(N.x + D.x, N.y + D.y).scale(N.zoom), de = [
      [0, 0],
      [B.width, B.height]
    ], pe = H.constrain()(ae, de, oe), xe = e.viewport.x !== pe.x || e.viewport.y !== pe.y || e.viewport.zoom !== pe.k;
    return H.transform(j, pe), xe;
  }, le = (D) => {
    const N = D instanceof Function ? D(e) : D, B = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(N.defaultEdgeOptions) && (e.defaultEdgeOptions = N.defaultEdgeOptions);
    const H = N.modelValue || N.nodes || N.edges ? [] : void 0;
    H && (N.modelValue && H.push(...N.modelValue), N.nodes && H.push(...N.nodes), N.edges && H.push(...N.edges), A(H));
    const j = () => {
      et(N.maxZoom) && $(N.maxZoom), et(N.minZoom) && T(N.minZoom), et(N.translateExtent) && w(N.translateExtent);
    };
    for (const oe of Object.keys(N)) {
      const ae = oe, de = N[ae];
      ![...jb, ...B].includes(ae) && et(de) && (e[ae] = de);
    }
    Si(() => e.d3Zoom).not.toBeNull().then(j), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: g,
    setElements: A,
    setNodes: M,
    setEdges: I,
    addNodes: q,
    addEdges: S,
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
    setMinZoom: T,
    setMaxZoom: $,
    setTranslateExtent: w,
    setNodeExtent: v,
    setPaneClickDistance: k,
    removeSelectedElements: _,
    removeSelectedNodes: b,
    removeSelectedEdges: z,
    startConnection: be,
    updateConnection: _e,
    endConnection: re,
    setInteractive: L,
    setState: le,
    getIntersectingNodes: ve,
    getIncomers: a,
    getOutgoers: s,
    getConnectedEdges: l,
    getHandleConnections: d,
    isNodeIntersecting: Ae,
    panBy: Ee,
    fitView: (D) => r.value.fitView(D),
    zoomIn: (D) => r.value.zoomIn(D),
    zoomOut: (D) => r.value.zoomOut(D),
    zoomTo: (D, N) => r.value.zoomTo(D, N),
    setViewport: (D, N) => r.value.setViewport(D, N),
    setTransform: (D, N) => r.value.setTransform(D, N),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (D, N, B) => r.value.setCenter(D, N, B),
    fitBounds: (D, N) => r.value.fitBounds(D, N),
    project: (D) => r.value.project(D),
    screenToFlowCoordinate: (D) => r.value.screenToFlowCoordinate(D),
    flowToScreenCoordinate: (D) => r.value.flowToScreenCoordinate(D),
    toObject: () => {
      const D = [], N = [];
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
        N.push(de);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: D,
          edges: N,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (D) => new Promise((N) => {
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
            N(!0);
          });
        });
      } else
        N(!0);
    }),
    updateNodeInternals: o,
    viewportHelper: r,
    $reset: () => {
      const D = cp();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const N = cr.translate(D.defaultViewport.x ?? 0, D.defaultViewport.y ?? 0).scale(jn(D.defaultViewport.zoom ?? 1, D.minZoom, D.maxZoom)), B = e.viewportRef.getBoundingClientRect(), H = [
          [0, 0],
          [B.width, B.height]
        ], j = e.d3Zoom.constrain()(N, H, D.translateExtent);
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
    const n = dh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = Ve(() => n.type ?? "source"), o = Ve(() => n.isValidConnection ?? null), {
      id: a,
      connectionStartHandle: s,
      connectionClickStartHandle: l,
      connectionEndHandle: d,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: g
    } = qe(), { id: y, node: m, nodeEl: p, connectedEdges: h } = lp(), b = G(), z = Ve(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), _ = Ve(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), T = Ve(
      () => {
        var I, A, q, S, F, P;
        return ((I = s.value) == null ? void 0 : I.nodeId) === y && ((A = s.value) == null ? void 0 : A.id) === e.id && ((q = s.value) == null ? void 0 : q.type) === r.value || ((S = d.value) == null ? void 0 : S.nodeId) === y && ((F = d.value) == null ? void 0 : F.id) === e.id && ((P = d.value) == null ? void 0 : P.type) === r.value;
      }
    ), $ = Ve(
      () => {
        var I, A, q;
        return ((I = l.value) == null ? void 0 : I.nodeId) === y && ((A = l.value) == null ? void 0 : A.id) === e.id && ((q = l.value) == null ? void 0 : q.type) === r.value;
      }
    ), { handlePointerDown: w, handleClick: v } = ip({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), k = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((I) => {
      const A = I[`${r.value}Handle`];
      return I[r.value] !== y ? !1 : A ? A === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((I) => {
      const A = I[`${r.value}Handle`];
      return I[r.value] !== y ? !1 : A ? A === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(m, h.value) : et(e.connectable) ? e.connectable : c.value);
    Ke(() => {
      var I;
      if (!m.dimensions.width || !m.dimensions.height)
        return;
      const A = (I = m.handleBounds[r.value]) == null ? void 0 : I.find((V) => V.id === e.id);
      if (!u.value || A)
        return;
      const q = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !b.value || !q || !e.id)
        return;
      const S = p.value.getBoundingClientRect(), F = b.value.getBoundingClientRect(), P = window.getComputedStyle(q), { m22: R } = new window.DOMMatrixReadOnly(P.transform), x = {
        id: e.id,
        position: e.position,
        x: (F.left - S.left) / R,
        y: (F.top - S.top) / R,
        type: r.value,
        nodeId: y,
        ...$a(b.value)
      };
      m.handleBounds[r.value] = [...m.handleBounds[r.value] ?? [], x];
    });
    function L(I) {
      const A = hl(I);
      k.value && z.value && (A && I.button === 0 || !A) && w(I);
    }
    function M(I) {
      !y || !l.value && !z.value || k.value && v(I);
    }
    return t({
      handleClick: v,
      handlePointerDown: w,
      onClick: M,
      onPointerDown: L
    }), (I, A) => (E(), C("div", {
      ref_key: "handle",
      ref: b,
      "data-id": `${O(a)}-${O(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": O(y),
      "data-handlepos": I.position,
      class: W(["vue-flow__handle", [
        `vue-flow__handle-${I.position}`,
        `vue-flow__handle-${e.id}`,
        O(f),
        O(g),
        r.value,
        {
          connectable: k.value,
          connecting: $.value,
          connectablestart: z.value,
          connectableend: _.value,
          connectionindicator: k.value && (z.value && !T.value || _.value && T.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: M
    }, [
      Ye(I.$slots, "default", { id: I.id })
    ], 42, Gb));
  }
}), Aa = function({
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
    Pe(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof l != "string" && l ? Pe(l) : Pe(me, [l]),
    Pe(ut, { type: "source", position: e, connectable: r, isValidConnection: a })
  ];
};
Aa.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Aa.inheritAttrs = !1;
Aa.compatConfig = { MODE: 3 };
const Xb = Aa, Ta = function({
  targetPosition: e = ue.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    Pe(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof a != "string" && a ? Pe(a) : Pe(me, [a])
  ];
};
Ta.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
Ta.inheritAttrs = !1;
Ta.compatConfig = { MODE: 3 };
const Yb = Ta, Oa = function({
  sourcePosition: e = ue.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const a = o.label ?? t;
  return [
    typeof a != "string" && a ? Pe(a) : Pe(me, [a]),
    Pe(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Oa.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Oa.inheritAttrs = !1;
Oa.compatConfig = { MODE: 3 };
const Kb = Oa, Zb = ["transform"], Jb = ["width", "height", "x", "y", "rx", "ry"], Qb = ["y"], ex = {
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
    return (a, s) => (E(), C("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      a.labelShowBg ? (E(), C("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * a.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * a.labelBgPadding[1]}px`,
        x: -a.labelBgPadding[0],
        y: -a.labelBgPadding[1],
        style: vt(a.labelBgStyle),
        rx: a.labelBgBorderRadius,
        ry: a.labelBgBorderRadius
      }, null, 12, Jb)) : te("", !0),
      i("text", wa(a.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: a.labelStyle
      }), [
        Ye(a.$slots, "default", {}, () => [
          typeof a.label != "string" ? (E(), Oe(Rt(a.label), { key: 0 })) : (E(), C(me, { key: 1 }, [
            ke(U(a.label), 1)
          ], 64))
        ])
      ], 16, Qb)
    ], 8, Zb));
  }
}), nx = ["id", "d", "marker-end", "marker-start"], rx = ["d", "stroke-width"], ox = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, lo = /* @__PURE__ */ Fe({
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
    const n = G(null), r = G(null), o = G(null), a = hh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (s, l) => (E(), C(me, null, [
      i("path", wa(O(a), {
        id: s.id,
        ref_key: "pathEl",
        ref: n,
        d: s.path,
        class: "vue-flow__edge-path",
        "marker-end": s.markerEnd,
        "marker-start": s.markerStart
      }), null, 16, nx),
      s.interactionWidth ? (E(), C("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: s.path,
        "stroke-width": s.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, rx)) : te("", !0),
      s.label && s.labelX && s.labelY ? (E(), Oe(tx, {
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
function dp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, l = r < t ? r + s : r - s;
  return [a, l, o, s];
}
function fp({
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
function Lu({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  let s, l;
  switch (e) {
    case ue.Left:
      s = t - $o(t - r, a), l = n;
      break;
    case ue.Right:
      s = t + $o(r - t, a), l = n;
      break;
    case ue.Top:
      s = t, l = n - $o(n - o, a);
      break;
    case ue.Bottom:
      s = t, l = n + $o(o - n, a);
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
  } = e, [d, u] = Lu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a,
    c: l
  }), [c, f] = Lu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n,
    c: l
  }), [g, y, m, p] = fp({
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
    g,
    y,
    m,
    p
  ];
}
function Uu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
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
function pp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: a,
    targetPosition: s = ue.Top
  } = e, [l, d] = Uu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: a
  }), [u, c] = Uu({
    pos: s,
    x1: o,
    y1: a,
    x2: t,
    y2: n
  }), [f, g, y, m] = fp({
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
    g,
    y,
    m
  ];
}
const Vu = {
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
function qu(e, t) {
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
  const s = Vu[t], l = Vu[r], d = { x: e.x + s.x * a, y: e.y + s.y * a }, u = { x: n.x + l.x * a, y: n.y + l.y * a }, c = ax({
    source: d,
    sourcePosition: t,
    target: u
  }), f = c.x !== 0 ? "x" : "y", g = c[f];
  let y, m, p;
  const h = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [z, _, T, $] = dp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * l[f] === -1) {
    m = o.x ?? z, p = o.y ?? _;
    const v = [
      { x: m, y: d.y },
      { x: m, y: u.y }
    ], k = [
      { x: d.x, y: p },
      { x: u.x, y: p }
    ];
    s[f] === g ? y = f === "x" ? v : k : y = f === "x" ? k : v;
  } else {
    const v = [{ x: d.x, y: u.y }], k = [{ x: u.x, y: d.y }];
    if (f === "x" ? y = s.x === g ? k : v : y = s.y === g ? v : k, t === r) {
      const q = Math.abs(e[f] - n[f]);
      if (q <= a) {
        const S = Math.min(a - 1, a - q);
        s[f] === g ? h[f] = (d[f] > e[f] ? -1 : 1) * S : b[f] = (u[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const q = f === "x" ? "y" : "x", S = s[f] === l[q], F = d[q] > u[q], P = d[q] < u[q];
      (s[f] === 1 && (!S && F || S && P) || s[f] !== 1 && (!S && P || S && F)) && (y = f === "x" ? v : k);
    }
    const L = { x: d.x + h.x, y: d.y + h.y }, M = { x: u.x + b.x, y: u.y + b.y }, I = Math.max(Math.abs(L.x - y[0].x), Math.abs(M.x - y[0].x)), A = Math.max(Math.abs(L.y - y[0].y), Math.abs(M.y - y[0].y));
    I >= A ? (m = (L.x + M.x) / 2, p = y[0].y) : (m = y[0].x, p = (L.y + M.y) / 2);
  }
  return [[
    e,
    { x: d.x + h.x, y: d.y + h.y },
    ...y,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], m, p, T, $];
}
function ix(e, t, n, r) {
  const o = Math.min(qu(e, t) / 2, qu(t, n) / 2, r), { x: a, y: s } = t;
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
  } = e, [f, g, y, m, p] = sx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: a },
    targetPosition: s,
    center: { x: d, y: u },
    offset: c
  });
  return [f.reduce((b, z, _) => {
    let T;
    return _ > 0 && _ < f.length - 1 ? T = ix(f[_ - 1], z, f[_ + 1], l) : T = `${_ === 0 ? "M" : "L"}${z.x} ${z.y}`, b += T, b;
  }, ""), g, y, m, p];
}
function lx(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [a, s, l, d] = dp({
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
      return Pe(lo, {
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
      return Pe(lo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), hp = dx, fx = Fe({
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
    return () => Pe(hp, { ...e, ...t, borderRadius: 0 });
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
      return Pe(lo, {
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
      const [n, r, o] = pp({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return Pe(lo, {
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
  smoothstep: hp,
  simplebezier: gx
};
function xx(e, t, n) {
  const r = J(() => (p) => t.value.get(p)), o = J(() => (p) => n.value.get(p)), a = J(() => {
    const p = {
      ...bx,
      ...e.edgeTypes
    }, h = Object.keys(p);
    for (const b of e.edges)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), s = J(() => {
    const p = {
      ...yx,
      ...e.nodeTypes
    }, h = Object.keys(p);
    for (const b of e.nodes)
      b.type && !h.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), l = J(() => e.onlyRenderVisibleElements ? Kf(
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
        const b = t.value.get(h.source), z = t.value.get(h.target);
        vb({
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
  }), g = J(() => [
    ...c.value,
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
    getEdges: d,
    getNodes: l,
    getSelectedElements: g,
    getSelectedNodes: c,
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
    const r = cp(), o = vr(r), a = {};
    for (const [g, y] of Object.entries(o.hooks)) {
      const m = `on${g.charAt(0).toUpperCase() + g.slice(1)}`;
      a[m] = y.on;
    }
    const s = {};
    for (const [g, y] of Object.entries(o.hooks))
      s[g] = y.trigger;
    const l = J(() => {
      const g = /* @__PURE__ */ new Map();
      for (const y of o.nodes)
        g.set(y.id, y);
      return g;
    }), d = J(() => {
      const g = /* @__PURE__ */ new Map();
      for (const y of o.edges)
        g.set(y.id, y);
      return g;
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
  const t = On.getInstance(), n = Hd(), r = typeof e == "object", o = r ? e : { id: e }, a = o.id, s = a ?? n?.vueFlowId;
  let l;
  if (n) {
    const d = gr(Bu, null);
    typeof d < "u" && d !== null && (!s || d.id === s) && (l = d);
  }
  if (l || s && (l = t.get(s)), !l || s && l.id !== s) {
    const d = a ?? t.getId(), u = t.create(d, o);
    l = u, (n ?? Gd(!0)).run(() => {
      Ie(
        u.applyDefault,
        (f, g, y) => {
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
  if (n && (Ln(Bu, l), n.vueFlowId = l.id), r) {
    const d = yr();
    d?.type.name !== "VueFlow" && l.emits.error(new at(nt.USEVUEFLOW_OPTIONS));
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
      const l = $a(e.value);
      (l.width === 0 || l.height === 0) && t.error(new at(nt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: l.width || 500, height: l.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), xa(() => {
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
    return (t, n) => (E(), C("div", {
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
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: a, userSelectionActive: s } = qe(), l = up(), d = G(null), u = sp({
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
    const c = J(() => Yf(r.value)), f = J(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function g(m) {
      t.selectionContextMenu({ event: m, nodes: r.value });
    }
    function y(m) {
      a.value || sr[m.key] && (m.preventDefault(), l(
        {
          x: sr[m.key].x,
          y: sr[m.key].y
        },
        m.shiftKey
      ));
    }
    return (m, p) => !O(s) && c.value.width && c.value.height ? (E(), C("div", {
      key: 0,
      class: W(["vue-flow__nodesselection vue-flow__container", O(o)]),
      style: vt({ transform: `translate(${O(n).x}px,${O(n).y}px) scale(${O(n).zoom})` })
    }, [
      i("div", {
        ref_key: "el",
        ref: d,
        class: W([{ dragging: O(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: O(a) ? void 0 : -1,
        onContextmenu: g,
        onKeydown: y
      }, null, 46, Sx)
    ], 6)) : te("", !0);
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
      removeNodes: g,
      removeEdges: y,
      selectionMode: m,
      deleteKeyCode: p,
      multiSelectionKeyCode: h,
      multiSelectionActive: b,
      edgeLookup: z,
      nodeLookup: _,
      connectionLookup: T,
      defaultEdgeOptions: $,
      connectionStartHandle: w,
      panOnDrag: v
    } = qe(), k = an(null), L = an(/* @__PURE__ */ new Set()), M = an(/* @__PURE__ */ new Set()), I = an(null), A = Ve(() => d.value && (e.isSelecting || a.value)), q = Ve(() => w.value !== null);
    let S = !1, F = !1;
    const P = Fr(p, { actInsideInputWithModifier: !1 }), R = Fr(h);
    Ie(P, (re) => {
      re && (g(f.value), y(c.value), u.value = !1);
    }), Ie(R, (re) => {
      b.value = re;
    });
    function x(re, se) {
      return (ve) => {
        ve.target === se && re?.(ve);
      };
    }
    function V(re) {
      if (S || q.value) {
        S = !1;
        return;
      }
      o.paneClick(re), s(), u.value = !1;
    }
    function Q(re) {
      var se;
      if (Array.isArray(v.value) && ((se = v.value) != null && se.includes(2))) {
        re.preventDefault();
        return;
      }
      o.paneContextMenu(re);
    }
    function ne(re) {
      o.paneScroll(re);
    }
    function fe(re) {
      var se, ve, Ae;
      if (I.value = ((se = t.value) == null ? void 0 : se.getBoundingClientRect()) ?? null, !d.value || !e.isSelecting || re.button !== 0 || re.target !== k.value || !I.value)
        return;
      (Ae = (ve = re.target) == null ? void 0 : ve.setPointerCapture) == null || Ae.call(ve, re.pointerId);
      const { x: Ee, y: le } = $x(re, I.value);
      F = !0, S = !1, s(), l.value = {
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
      S = !0;
      const { x: ve, y: Ae } = Xt(re, I.value), { startX: Ee = 0, startY: le = 0 } = l.value, we = {
        startX: Ee,
        startY: le,
        x: ve < Ee ? ve : Ee,
        y: Ae < le ? Ae : le,
        width: Math.abs(ve - Ee),
        height: Math.abs(Ae - le)
      }, ie = L.value, ge = M.value;
      L.value = new Set(
        Kf(n.value, we, r.value, m.value === fl.Partial, !0).map(
          (N) => N.id
        )
      ), M.value = /* @__PURE__ */ new Set();
      const D = ((se = $.value) == null ? void 0 : se.selectable) ?? !0;
      for (const N of L.value) {
        const B = T.value.get(N);
        if (B)
          for (const { edgeId: H } of B.values()) {
            const j = z.value.get(H);
            j && (j.selectable ?? D) && M.value.add(H);
          }
      }
      if (!Fu(ie, L.value)) {
        const N = bn(_.value, L.value, !0);
        o.nodesChange(N);
      }
      if (!Fu(ge, M.value)) {
        const N = bn(z.value, M.value);
        o.edgesChange(N);
      }
      l.value = we, a.value = !0, u.value = !1;
    }
    function _e(re) {
      var se;
      re.button !== 0 || !F || ((se = re.target) == null || se.releasePointerCapture(re.pointerId), !a.value && l.value && re.target === k.value && V(re), a.value = !1, l.value = null, u.value = L.value.size > 0, o.selectionEnd(re), e.selectionKeyPressed && (S = !1), F = !1);
    }
    return (re, se) => (E(), C("div", {
      ref_key: "container",
      ref: k,
      class: W(["vue-flow__pane vue-flow__container", { selection: re.isSelecting }]),
      onClick: se[0] || (se[0] = (ve) => A.value ? void 0 : x(V, k.value)(ve)),
      onContextmenu: se[1] || (se[1] = (ve) => x(Q, k.value)(ve)),
      onWheelPassive: se[2] || (se[2] = (ve) => x(ne, k.value)(ve)),
      onPointerenter: se[3] || (se[3] = (ve) => A.value ? void 0 : O(o).paneMouseEnter(ve)),
      onPointerdown: se[4] || (se[4] = (ve) => A.value ? fe(ve) : O(o).paneMouseMove(ve)),
      onPointermove: se[5] || (se[5] = (ve) => A.value ? be(ve) : O(o).paneMouseMove(ve)),
      onPointerup: se[6] || (se[6] = (ve) => A.value ? _e(ve) : void 0),
      onPointerleave: se[7] || (se[7] = (ve) => O(o).paneMouseLeave(ve))
    }, [
      Ye(re.$slots, "default"),
      O(a) && O(l) ? (E(), Oe(kx, {
        key: 0,
        "user-selection-rect": O(l)
      }, null, 8, ["user-selection-rect"])) : te("", !0),
      O(u) && O(f).length ? (E(), Oe(zx, { key: 1 })) : te("", !0)
    ], 34));
  }
}), Ax = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Tx = /* @__PURE__ */ Fe({
  ...Ax,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = qe(), o = J(() => n.value ? !r.value : !1), a = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (s, l) => (E(), C("div", {
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
      zoomOnDoubleClick: g,
      zoomOnPinch: y,
      zoomOnScroll: m,
      preventScrolling: p,
      noWheelClassName: h,
      noPanClassName: b,
      emits: z,
      connectionStartHandle: _,
      userSelectionActive: T,
      paneDragging: $,
      d3Zoom: w,
      d3Selection: v,
      d3ZoomHandler: k,
      viewport: L,
      viewportRef: M,
      paneClickDistance: I
    } = qe();
    wx(M);
    const A = an(!1), q = an(!1);
    let S = null, F = !1, P = 0, R = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = Fr(l), V = Fr(s), Q = Fr(a), ne = Ve(
      () => (!V.value || V.value && s.value === !0) && (x.value || f.value)
    ), fe = Ve(() => x.value || d.value), be = Ve(() => s.value === !0 && ne.value !== !0), _e = Ve(
      () => V.value && s.value !== !0 || T.value || be.value
    ), re = Ve(() => _.value !== null);
    Ke(() => {
      if (!M.value) {
        io("Viewport element is missing");
        return;
      }
      const le = M.value, we = le.getBoundingClientRect(), ie = Yy().clickDistance(I.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ge = It(le).call(ie), D = ge.on("wheel.zoom"), N = cr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(jn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [we.width, we.height]
      ], H = ie.constrain()(N, B, o.value);
      ie.transform(ge, H), ie.wheelDelta(Su), w.value = ie, v.value = ge, k.value = D, L.value = { x: H.x, y: H.y, zoom: H.k }, ie.on("start", (j) => {
        var oe;
        if (!j.sourceEvent)
          return null;
        P = j.sourceEvent.button, A.value = !0;
        const ae = Ae(j.transform);
        ((oe = j.sourceEvent) == null ? void 0 : oe.type) === "mousedown" && ($.value = !0), R = ae, z.viewportChangeStart(ae), z.moveStart({ event: j, flowTransform: ae });
      }), ie.on("end", (j) => {
        if (!j.sourceEvent)
          return null;
        if (A.value = !1, $.value = !1, se(ne.value, P ?? 0) && !F && z.paneContextMenu(j.sourceEvent), F = !1, ve(R, j.transform)) {
          const oe = Ae(j.transform);
          R = oe, z.viewportChangeEnd(oe), z.moveEnd({ event: j, flowTransform: oe });
        }
      }), ie.filter((j) => {
        var oe;
        const ae = Q.value || m.value, de = y.value && j.ctrlKey, pe = j.button, xe = j.type === "wheel";
        if (pe === 1 && j.type === "mousedown" && (Ee(j, "vue-flow__node") || Ee(j, "vue-flow__edge")))
          return !0;
        if (!ne.value && !ae && !fe.value && !g.value && !y.value || T.value || re.value && !xe || !g.value && j.type === "dblclick" || Ee(j, h.value) && xe || Ee(j, b.value) && (!xe || fe.value && xe && !Q.value) || !y.value && j.ctrlKey && xe || !ae && !fe.value && !de && xe)
          return !1;
        if (!y && j.type === "touchstart" && ((oe = j.touches) == null ? void 0 : oe.length) > 1)
          return j.preventDefault(), !1;
        if (!ne.value && (j.type === "mousedown" || j.type === "touchstart") || be.value && Array.isArray(f.value) && f.value.includes(0) && pe === 0 || Array.isArray(f.value) && !f.value.includes(pe) && (j.type === "mousedown" || j.type === "touchstart"))
          return !1;
        const ze = Array.isArray(f.value) && f.value.includes(pe) || s.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !pe || pe <= 1;
        return (!j.ctrlKey || x.value || xe) && ze;
      }), Ie(
        [T, ne],
        () => {
          T.value && !A.value ? ie.on("zoom", null) : T.value || ie.on("zoom", (j) => {
            L.value = { x: j.transform.x, y: j.transform.y, zoom: j.transform.k };
            const oe = Ae(j.transform);
            F = se(ne.value, P ?? 0), z.viewportChange(oe), z.move({ event: j, flowTransform: oe });
          });
        },
        { immediate: !0 }
      ), Ie(
        [T, fe, u, Q, y, p, h],
        () => {
          fe.value && !Q.value && !T.value ? ge.on(
            "wheel.zoom",
            (j) => {
              if (Ee(j, h.value))
                return !1;
              const oe = Q.value || m.value, ae = y.value && j.ctrlKey;
              if (!(!p.value || fe.value || oe || ae))
                return !1;
              j.preventDefault(), j.stopImmediatePropagation();
              const pe = ge.property("__zoom").k || 1, xe = la();
              if (!x.value && j.ctrlKey && y.value && xe) {
                const Wa = Gt(j), $n = Su(j), wr = pe * 2 ** $n;
                ie.scaleTo(ge, wr, Wa, j);
                return;
              }
              const ze = j.deltaMode === 1 ? 20 : 1;
              let Be = u.value === Dr.Vertical ? 0 : j.deltaX * ze, Vt = u.value === Dr.Horizontal ? 0 : j.deltaY * ze;
              !xe && j.shiftKey && u.value !== Dr.Vertical && !Be && Vt && (Be = Vt, Vt = 0), ie.translateBy(
                ge,
                -(Be / pe) * c.value,
                -(Vt / pe) * c.value
              );
              const gt = Ae(ge.property("__zoom"));
              S && clearTimeout(S), q.value ? (z.move({ event: j, flowTransform: gt }), z.viewportChange(gt), S = setTimeout(() => {
                z.moveEnd({ event: j, flowTransform: gt }), z.viewportChangeEnd(gt), q.value = !1;
              }, 150)) : (q.value = !0, z.moveStart({ event: j, flowTransform: gt }), z.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof D < "u" && ge.on(
            "wheel.zoom",
            function(j, oe) {
              const ae = !p.value && j.type === "wheel" && !j.ctrlKey, de = Q.value || m.value, pe = y.value && j.ctrlKey;
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
    function ve(le, we) {
      return le.x !== we.x && !Number.isNaN(we.x) || le.y !== we.y && !Number.isNaN(we.y) || le.zoom !== we.k && !Number.isNaN(we.k);
    }
    function Ae(le) {
      return {
        x: le.x,
        y: le.y,
        zoom: le.k
      };
    }
    function Ee(le, we) {
      return le.target.closest(`.${we}`);
    }
    return (le, we) => (E(), C("div", {
      ref_key: "viewportRef",
      ref: M,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      X(Cx, {
        "is-selecting": _e.value,
        "selection-key-pressed": O(V),
        class: W({
          connecting: re.value,
          dragging: O($),
          draggable: O(f) === !0 || Array.isArray(O(f)) && O(f).includes(0)
        })
      }, {
        default: ot(() => [
          X(Tx, null, {
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
}), Rx = ["id"], Ix = ["id"], Mx = ["id"], Dx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Fx = /* @__PURE__ */ Fe({
  ...Dx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = qe();
    return (o, a) => (E(), C(me, null, [
      i("div", {
        id: `${O(Uf)}-${O(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + U(O(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Rx),
      i("div", {
        id: `${O(Vf)}-${O(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Ix),
      O(n) ? te("", !0) : (E(), C("div", {
        key: 0,
        id: `${O(tb)}-${O(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, U(O(r)), 9, Mx))
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
  return Pe("circle", {
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
const ju = vl, Vx = Fe({
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
      isValidConnection: g,
      multiSelectionActive: y,
      disableKeyboardA11y: m,
      elementsSelectable: p,
      edgesUpdatable: h,
      edgesFocusable: b,
      hooks: z
    } = qe(), _ = J(() => c(e.id)), { emit: T, on: $ } = Ob(_.value, a), w = gr(Ca), v = yr(), k = G(!1), L = G(!1), M = G(""), I = G(null), A = G("source"), q = G(null), S = Ve(
      () => typeof _.value.selectable > "u" ? p.value : _.value.selectable
    ), F = Ve(() => typeof _.value.updatable > "u" ? h.value : _.value.updatable), P = Ve(() => typeof _.value.focusable > "u" ? b.value : _.value.focusable);
    Ln(Cb, e.id), Ln(Ab, q);
    const R = J(() => _.value.class instanceof Function ? _.value.class(_.value) : _.value.class), x = J(() => _.value.style instanceof Function ? _.value.style(_.value) : _.value.style), V = J(() => {
      const N = _.value.type || "default", B = w?.[`edge-${N}`];
      if (B)
        return B;
      let H = _.value.template ?? d.value[N];
      if (typeof H == "string" && v) {
        const j = Object.keys(v.appContext.components);
        j && j.includes(N) && (H = Xd(N, !1));
      }
      return H && typeof H != "string" ? H : (a.error(new at(nt.EDGE_TYPE_MISSING, H)), !1);
    }), { handlePointerDown: Q } = ip({
      nodeId: M,
      handleId: I,
      type: A,
      isValidConnection: g,
      edgeUpdaterType: A,
      onEdgeUpdate: be,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const N = f(_.value.source), B = f(_.value.target), H = "pathOptions" in _.value ? _.value.pathOptions : {};
      if (!N && !B)
        return a.error(new at(nt.EDGE_SOURCE_TARGET_MISSING, _.value.id, _.value.source, _.value.target)), null;
      if (!N)
        return a.error(new at(nt.EDGE_SOURCE_MISSING, _.value.id, _.value.source)), null;
      if (!B)
        return a.error(new at(nt.EDGE_TARGET_MISSING, _.value.id, _.value.target)), null;
      if (!_.value || _.value.hidden || N.hidden || B.hidden)
        return null;
      let j;
      r.value === kn.Strict ? j = N.handleBounds.source : j = [...N.handleBounds.source || [], ...N.handleBounds.target || []];
      const oe = Ou(j, _.value.sourceHandle);
      let ae;
      r.value === kn.Strict ? ae = B.handleBounds.target : ae = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const de = Ou(ae, _.value.targetHandle), pe = oe?.position || ue.Bottom, xe = de?.position || ue.Top, { x: ze, y: Be } = dr(N, oe, pe), { x: Vt, y: gt } = dr(B, de, xe);
      return _.value.sourceX = ze, _.value.sourceY = Be, _.value.targetX = Vt, _.value.targetY = gt, Pe(
        "g",
        {
          ref: q,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${V.value === !1 ? "default" : _.value.type || "default"}`,
            l.value,
            R.value,
            {
              updating: k.value,
              selected: _.value.selected,
              animated: _.value.animated,
              inactive: !S.value && !z.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: P.value ? 0 : void 0,
          "aria-label": _.value.ariaLabel === null ? void 0 : _.value.ariaLabel ?? `Edge from ${_.value.source} to ${_.value.target}`,
          "aria-describedby": P.value ? `${Vf}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: P.value ? "group" : "img",
          ..._.value.domAttributes,
          onClick: se,
          onContextmenu: ve,
          onDblclick: Ae,
          onMouseenter: Ee,
          onMousemove: le,
          onMouseleave: we,
          onKeyDown: P.value ? D : void 0
        },
        [
          L.value ? null : Pe(V.value === !1 ? d.value.default : V.value, {
            id: e.id,
            sourceNode: N,
            targetNode: B,
            source: _.value.source,
            target: _.value.target,
            type: _.value.type,
            updatable: F.value,
            selected: _.value.selected,
            animated: _.value.animated,
            label: _.value.label,
            labelStyle: _.value.labelStyle,
            labelShowBg: _.value.labelShowBg,
            labelBgStyle: _.value.labelBgStyle,
            labelBgPadding: _.value.labelBgPadding,
            labelBgBorderRadius: _.value.labelBgBorderRadius,
            data: _.value.data,
            events: { ..._.value.events, ...$ },
            style: x.value,
            markerStart: `url('#${Qr(_.value.markerStart, t)}')`,
            markerEnd: `url('#${Qr(_.value.markerEnd, t)}')`,
            sourcePosition: pe,
            targetPosition: xe,
            sourceX: ze,
            sourceY: Be,
            targetX: Vt,
            targetY: gt,
            sourceHandleId: _.value.sourceHandle,
            targetHandleId: _.value.targetHandle,
            interactionWidth: _.value.interactionWidth,
            ...H
          }),
          [
            F.value === "source" || F.value === !0 ? [
              Pe(
                "g",
                {
                  onMousedown: ie,
                  onMouseenter: ne,
                  onMouseout: fe
                },
                Pe(ju, {
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
              Pe(
                "g",
                {
                  onMousedown: ge,
                  onMouseenter: ne,
                  onMouseout: fe
                },
                Pe(ju, {
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
      k.value = !0;
    }
    function fe() {
      k.value = !1;
    }
    function be(N, B) {
      T.update({ event: N, edge: _.value, connection: B });
    }
    function _e(N) {
      T.updateEnd({ event: N, edge: _.value }), L.value = !1;
    }
    function re(N, B) {
      N.button === 0 && (L.value = !0, M.value = B ? _.value.target : _.value.source, I.value = (B ? _.value.targetHandle : _.value.sourceHandle) ?? null, A.value = B ? "target" : "source", T.updateStart({ event: N, edge: _.value }), Q(N));
    }
    function se(N) {
      var B;
      const H = { event: N, edge: _.value };
      S.value && (s.value = !1, _.value.selected && y.value ? (u([_.value]), (B = q.value) == null || B.blur()) : n([_.value])), T.click(H);
    }
    function ve(N) {
      T.contextMenu({ event: N, edge: _.value });
    }
    function Ae(N) {
      T.doubleClick({ event: N, edge: _.value });
    }
    function Ee(N) {
      T.mouseEnter({ event: N, edge: _.value });
    }
    function le(N) {
      T.mouseMove({ event: N, edge: _.value });
    }
    function we(N) {
      T.mouseLeave({ event: N, edge: _.value });
    }
    function ie(N) {
      re(N, !0);
    }
    function ge(N) {
      re(N, !1);
    }
    function D(N) {
      var B;
      !m.value && qf.includes(N.key) && S.value && (N.key === "Escape" ? ((B = q.value) == null || B.blur(), u([c(e.id)])) : n([c(e.id)]));
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
    } = qe(), g = (e = gr(Ca)) == null ? void 0 : e["connection-line"], y = J(() => {
      var z;
      return f((z = r.value) == null ? void 0 : z.nodeId);
    }), m = J(() => {
      var z;
      return f((z = o.value) == null ? void 0 : z.nodeId) ?? null;
    }), p = J(() => ({
      x: (a.value.x - c.value.x) / c.value.zoom,
      y: (a.value.y - c.value.y) / c.value.zoom
    })), h = J(
      () => d.value.markerStart ? `url(#${Qr(d.value.markerStart, t)})` : ""
    ), b = J(
      () => d.value.markerEnd ? `url(#${Qr(d.value.markerEnd, t)})` : ""
    );
    return () => {
      var z, _, T;
      if (!y.value || !r.value)
        return null;
      const $ = r.value.id, w = r.value.type, v = y.value.handleBounds;
      let k = v?.[w] ?? [];
      if (n.value === kn.Loose) {
        const x = v?.[w === "source" ? "target" : "source"] ?? [];
        k = [...k, ...x];
      }
      if (!k)
        return null;
      const L = ($ ? k.find((x) => x.id === $) : k[0]) ?? null, M = L?.position ?? ue.Top, { x: I, y: A } = dr(y.value, L, M);
      let q = null;
      m.value && (n.value === kn.Strict ? q = ((z = m.value.handleBounds[w === "source" ? "target" : "source"]) == null ? void 0 : z.find(
        (x) => {
          var V;
          return x.id === ((V = o.value) == null ? void 0 : V.id);
        }
      )) || null : q = ((_ = [...m.value.handleBounds.source ?? [], ...m.value.handleBounds.target ?? []]) == null ? void 0 : _.find(
        (x) => {
          var V;
          return x.id === ((V = o.value) == null ? void 0 : V.id);
        }
      )) || null);
      const S = ((T = o.value) == null ? void 0 : T.position) ?? (M ? Ri[M] : null);
      if (!M || !S)
        return null;
      const F = s.value ?? d.value.type ?? Tn.Bezier;
      let P = "";
      const R = {
        sourceX: I,
        sourceY: A,
        sourcePosition: M,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: S
      };
      return F === Tn.Bezier ? [P] = ml(R) : F === Tn.Step ? [P] = Mi({
        ...R,
        borderRadius: 0
      }) : F === Tn.SmoothStep ? [P] = Mi(R) : F === Tn.SimpleBezier ? [P] = pp(R) : P = `M${I},${A} ${p.value.x},${p.value.y}`, Pe(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        Pe(
          "g",
          { class: "vue-flow__connection" },
          g ? Pe(g, {
            sourceX: I,
            sourceY: A,
            sourcePosition: M,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: S,
            sourceNode: y.value,
            sourceHandle: L,
            targetNode: m.value,
            targetHandle: q,
            markerEnd: b.value,
            markerStart: h.value,
            connectionStatus: u.value
          }) : Pe("path", {
            d: P,
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
    return (t, n) => (E(), C("marker", {
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
      t.type === O(aa).ArrowClosed ? (E(), C("polyline", {
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
      t.type === O(aa).Arrow ? (E(), C("polyline", {
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
    return (s, l) => (E(), C("svg", Yx, [
      i("defs", null, [
        (E(!0), C(me, null, Ne(a.value, (d) => (E(), Oe(Xx, {
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
    return (o, a) => (E(), C(me, null, [
      X(Zx),
      (E(!0), C(me, null, Ne(O(n), (s) => (E(), C("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: O(gb)(s, O(t), O(r)) })
      }, [
        X(O(qx), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      X(O(Hx))
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
      nodeExtent: g,
      elevateNodesOnSelect: y,
      disableKeyboardA11y: m,
      ariaLiveMessage: p,
      snapToGrid: h,
      snapGrid: b,
      nodeDragThreshold: z,
      nodesDraggable: _,
      elementsSelectable: T,
      nodesConnectable: $,
      nodesFocusable: w,
      hooks: v
    } = qe(), k = G(null);
    Ln(ap, k), Ln(op, e.id);
    const L = gr(Ca), M = yr(), I = up(), { node: A, parentNode: q } = lp(e.id), { emit: S, on: F } = Mb(A, s), P = Ve(() => typeof A.draggable > "u" ? _.value : A.draggable), R = Ve(() => typeof A.selectable > "u" ? T.value : A.selectable), x = Ve(() => typeof A.connectable > "u" ? $.value : A.connectable), V = Ve(() => typeof A.focusable > "u" ? w.value : A.focusable), Q = J(
      () => R.value || P.value || v.value.nodeClick.hasListeners() || v.value.nodeDoubleClick.hasListeners() || v.value.nodeMouseEnter.hasListeners() || v.value.nodeMouseMove.hasListeners() || v.value.nodeMouseLeave.hasListeners()
    ), ne = Ve(() => !!A.dimensions.width && !!A.dimensions.height), fe = J(() => {
      const B = A.type || "default", H = L?.[`node-${B}`];
      if (H)
        return H;
      let j = A.template || f.value[B];
      if (typeof j == "string" && M) {
        const oe = Object.keys(M.appContext.components);
        oe && oe.includes(B) && (j = Xd(B, !1));
      }
      return j && typeof j != "string" ? j : (s.error(new at(nt.NODE_TYPE_MISSING, j)), !1);
    }), be = sp({
      id: e.id,
      el: k,
      disabled: () => !P.value,
      selectable: R,
      dragHandle: () => A.dragHandle,
      onStart(B) {
        S.dragStart(B);
      },
      onDrag(B) {
        S.drag(B);
      },
      onStop(B) {
        S.dragStop(B);
      },
      onClick(B) {
        D(B);
      }
    }), _e = J(() => A.class instanceof Function ? A.class(A) : A.class), re = J(() => {
      const B = (A.style instanceof Function ? A.style(A) : A.style) || {}, H = A.width instanceof Function ? A.width(A) : A.width, j = A.height instanceof Function ? A.height(A) : A.height;
      return !B.width && H && (B.width = typeof H == "string" ? H : `${H}px`), !B.height && j && (B.height = typeof j == "string" ? j : `${j}px`), B;
    }), se = Ve(() => Number(A.zIndex ?? re.value.zIndex ?? 0));
    return c((B) => {
      (B.includes(e.id) || !B.length) && Ae();
    }), Ke(() => {
      Ie(
        () => A.hidden,
        (B = !1, H, j) => {
          !B && k.value && (e.resizeObserver.observe(k.value), j(() => {
            k.value && e.resizeObserver.unobserve(k.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Ie([() => A.type, () => A.sourcePosition, () => A.targetPosition], () => {
      un(() => {
        u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
      });
    }), Ie(
      [
        () => A.position.x,
        () => A.position.y,
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
        () => A.selected,
        () => A.dimensions.height,
        () => A.dimensions.width,
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
          z: de + (y.value && A.selected ? 1e3 : 0)
        };
        typeof j < "u" && typeof oe < "u" ? A.computedPosition = db({ x: j, y: oe, z: ae }, pe) : A.computedPosition = pe;
      },
      { flush: "post", immediate: !0 }
    ), Ie([() => A.extent, g], ([B, H], [j, oe]) => {
      (B !== j || H !== oe) && ve();
    }), A.extent === "parent" || typeof A.extent == "object" && "range" in A.extent && A.extent.range === "parent" ? Si(() => ne).toBe(!0).then(ve) : ve(), () => A.hidden ? null : Pe(
      "div",
      {
        ref: k,
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
          visibility: ne.value ? "visible" : "hidden",
          zIndex: A.computedPosition.z ?? se.value,
          transform: `translate(${A.computedPosition.x}px,${A.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...re.value
        },
        tabIndex: V.value ? 0 : void 0,
        role: V.value ? "group" : void 0,
        "aria-describedby": m.value ? void 0 : `${Uf}-${t}`,
        "aria-label": A.ariaLabel,
        "aria-roledescription": "node",
        ...A.domAttributes,
        onMouseenter: Ee,
        onMousemove: le,
        onMouseleave: we,
        onContextmenu: ie,
        onClick: D,
        onDblclick: ge,
        onKeydown: N
      },
      [
        Pe(fe.value === !1 ? f.value.default : fe.value, {
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
          zIndex: A.computedPosition.z ?? se.value,
          targetPosition: A.targetPosition,
          sourcePosition: A.sourcePosition,
          label: A.label,
          dragHandle: A.dragHandle,
          onUpdateNodeInternals: Ae
        })
      ]
    );
    function ve() {
      const B = A.computedPosition, { computedPosition: H, position: j } = pl(
        A,
        h.value ? Pa(B, b.value) : B,
        s.error,
        g.value,
        q.value
      );
      (A.computedPosition.x !== H.x || A.computedPosition.y !== H.y) && (A.computedPosition = { ...A.computedPosition, ...H }), (A.position.x !== j.x || A.position.y !== j.y) && (A.position = j);
    }
    function Ae() {
      k.value && u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
    }
    function Ee(B) {
      be?.value || S.mouseEnter({ event: B, node: A });
    }
    function le(B) {
      be?.value || S.mouseMove({ event: B, node: A });
    }
    function we(B) {
      be?.value || S.mouseLeave({ event: B, node: A });
    }
    function ie(B) {
      return S.contextMenu({ event: B, node: A });
    }
    function ge(B) {
      return S.doubleClick({ event: B, node: A });
    }
    function D(B) {
      R.value && (!r.value || !P.value || z.value > 0) && Ii(
        A,
        a.value,
        d,
        l,
        o,
        !1,
        k.value
      ), S.click({ event: B, node: A });
    }
    function N(B) {
      if (!(Ni(B) || m.value))
        if (qf.includes(B.key) && R.value) {
          const H = B.key === "Escape";
          Ii(
            A,
            a.value,
            d,
            l,
            o,
            H,
            k.value
          );
        } else P.value && A.selected && sr[B.key] && (B.preventDefault(), p.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~A.position.x}, y: ${~~A.position.y}`, I(
          {
            x: sr[B.key].x,
            y: sr[B.key].y
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
    return (r, o) => (E(), C("svg", null, [
      (E(), C("foreignObject", n1, [
        (E(), Oe(Wd, {
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
    }), xa(() => {
      var s;
      return (s = a.value) == null ? void 0 : s.disconnect();
    }), (s, l) => (E(), C("div", s1, [
      a.value ? (E(!0), C(me, { key: 0 }, Ne(O(t), (d, u, c, f) => {
        const g = [d.id];
        if (f && f.key === d.id && ph(f, g))
          return f;
        const y = (E(), Oe(O(t1), {
          id: d.id,
          key: d.id,
          "resize-observer": a.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = g, y;
      }, l, 0), 128)) : te("", !0)
    ]));
  }
});
function u1() {
  const { emits: e } = qe();
  Ke(() => {
    if (rp()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new at(nt.MISSING_STYLES));
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
    const r = e, o = ch(), a = rs(r, "modelValue", n), s = rs(r, "nodes", n), l = rs(r, "edges", n), d = qe(r), u = Lb({ modelValue: a, nodes: s, edges: l }, r, d);
    return Vb(n, d.hooks), Bx(), u1(), Ln(Ca, o), nl(u), t(d), (c, f) => (E(), C("div", {
      ref: O(d).vueFlowRef,
      class: "vue-flow"
    }, [
      X(Nx, null, {
        default: ot(() => [
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
    const t = e, { userSelectionActive: n } = qe(), r = J(() => `${t.position}`.split("-"));
    return (o, a) => (E(), C("div", {
      class: W(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: O(n) ? "none" : "all" })
    }, [
      Ye(o.$slots, "default")
    ], 6));
  }
});
var ln = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(ln || {});
const mp = function({ dimensions: e, size: t, color: n }) {
  return Pe("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, vp = function({ radius: e, color: t }) {
  return Pe("circle", { cx: e, cy: e, r: e, fill: t });
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
      const s = n.value.zoom, [l, d] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [l * s || 1, d * s || 1], c = e.size * s, [f, g] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], y = [f * s || 1 + u[0] / 2, g * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: y,
        size: c
      };
    }), o = Ve(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), a = Ve(() => e.color || e.patternColor || m1[e.variant || ln.Dots]);
    return (s, l) => (E(), C("svg", {
      class: "vue-flow__background vue-flow__container",
      style: vt({
        height: `${s.height > 100 ? 100 : s.height}%`,
        width: `${s.width > 100 ? 100 : s.width}%`
      })
    }, [
      Ye(s.$slots, "pattern-container", { id: o.value }, () => [
        i("pattern", {
          id: o.value,
          x: O(n).x % r.value.scaledGap[0],
          y: O(n).y % r.value.scaledGap[1],
          width: r.value.scaledGap[0],
          height: r.value.scaledGap[1],
          patternTransform: `translate(-${r.value.offset[0]},-${r.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          Ye(s.$slots, "pattern", {}, () => [
            s.variant === O(ln).Lines ? (E(), Oe(O(mp), {
              key: 0,
              size: s.lineWidth,
              color: a.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === O(ln).Dots ? (E(), Oe(O(vp), {
              key: 1,
              color: a.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : te("", !0),
            s.bgColor ? (E(), C("svg", g1, [
              i("rect", {
                width: "100%",
                height: "100%",
                fill: s.bgColor
              }, null, 8, y1)
            ])) : te("", !0)
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
  return E(), C("button", S1, [
    Ye(e.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ k1(_1, [["render", E1]]), z1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, $1 = /* @__PURE__ */ i("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), P1 = [
  $1
];
function C1(e, t) {
  return E(), C("svg", z1, P1);
}
const A1 = { render: C1 }, T1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, O1 = /* @__PURE__ */ i("path", { d: "M0 0h32v4.2H0z" }, null, -1), N1 = [
  O1
];
function R1(e, t) {
  return E(), C("svg", T1, N1);
}
const I1 = { render: R1 }, M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, D1 = /* @__PURE__ */ i("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), F1 = [
  D1
];
function B1(e, t) {
  return E(), C("svg", M1, F1);
}
const L1 = { render: B1 }, U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, V1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), q1 = [
  V1
];
function j1(e, t) {
  return E(), C("svg", U1, q1);
}
const H1 = { render: j1 }, G1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, W1 = /* @__PURE__ */ i("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), X1 = [
  W1
];
function Y1(e, t) {
  return E(), C("svg", G1, X1);
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
    position: { default: () => Lf.BottomLeft }
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
    } = qe(), g = Ve(() => n.value || r.value || o.value), y = Ve(() => u.value.zoom <= c.value), m = Ve(() => u.value.zoom >= f.value);
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
      a(!g.value), t("interactionChange", !g.value);
    }
    return (_, T) => (E(), Oe(O(h1), {
      class: "vue-flow__controls",
      position: _.position
    }, {
      default: ot(() => [
        Ye(_.$slots, "top"),
        _.showZoom ? (E(), C(me, { key: 0 }, [
          Ye(_.$slots, "control-zoom-in", {}, () => [
            X(Po, {
              class: "vue-flow__controls-zoomin",
              disabled: m.value,
              onClick: p
            }, {
              default: ot(() => [
                Ye(_.$slots, "icon-zoom-in", {}, () => [
                  (E(), Oe(Rt(O(A1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Ye(_.$slots, "control-zoom-out", {}, () => [
            X(Po, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: h
            }, {
              default: ot(() => [
                Ye(_.$slots, "icon-zoom-out", {}, () => [
                  (E(), Oe(Rt(O(I1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : te("", !0),
        _.showFitView ? Ye(_.$slots, "control-fit-view", { key: 1 }, () => [
          X(Po, {
            class: "vue-flow__controls-fitview",
            onClick: b
          }, {
            default: ot(() => [
              Ye(_.$slots, "icon-fit-view", {}, () => [
                (E(), Oe(Rt(O(L1))))
              ])
            ]),
            _: 3
          })
        ]) : te("", !0),
        _.showInteractive ? Ye(_.$slots, "control-interactive", { key: 2 }, () => [
          _.showInteractive ? (E(), Oe(Po, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: z
          }, {
            default: ot(() => [
              g.value ? Ye(_.$slots, "icon-unlock", { key: 0 }, () => [
                (E(), Oe(Rt(O(K1))))
              ]) : te("", !0),
              g.value ? te("", !0) : Ye(_.$slots, "icon-lock", { key: 1 }, () => [
                (E(), Oe(Rt(O(H1))))
              ])
            ]),
            _: 3
          })) : te("", !0)
        ]) : te("", !0),
        Ye(_.$slots, "default")
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
    return (u, c) => (E(), C(me, null, [
      X(O(lo), {
        id: e.id,
        path: o.value[0],
        style: vt(d.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      X(O(o1), null, {
        default: ot(() => [
          i("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(a.value)
          }, [
            l.value.label ? (E(), C("span", {
              key: 0,
              class: W(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", l.value.badgeClass])
            }, U(l.value.label), 3)) : te("", !0),
            i("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: c[0] || (c[0] = rn((f) => r("remove", e.id), ["stop"]))
            }, [
              X(O(Ot), { class: "h-2.5 w-2.5" })
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, Fn = [
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
function Uo(e) {
  return Fn.find((t) => t.eventClass === e)?.label || e || "—";
}
const gp = [
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
], yp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "has_order_bumps", label: "➕ Comprou Order Bump? (Sim/Não)" },
  { value: "reply_matches", label: "💬 Resposta do cliente (contém / exato / maiúsculas e minúsculas)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], bp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], xp = [
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
function wp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Cn[t] || 1)));
}
function aw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Cn.days === 0 ? { value: t / Cn.days, unit: "days" } : t > 0 && t % Cn.hours === 0 ? { value: t / Cn.hours, unit: "hours" } : t > 0 && t % Cn.minutes === 0 ? { value: t / Cn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const sw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function ua(e) {
  return sw[e] || "minutos";
}
function xn(e) {
  return ew.find((t) => t.type === e)?.label || e;
}
function _p(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "", match_mode: "contains", case_sensitive: !1, ignore_accents: !0 } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400, filter_reply: !1, match_mode: "contains", match_text: "", case_sensitive: !1, ignore_accents: !0 } : {};
}
function kp(e) {
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
function Sp(e) {
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
const Ep = {
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
}, Te = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", zp = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => gp }
  },
  setup(e) {
    const t = e, n = G(!1), r = G(""), o = G([]), a = G("list"), s = (w) => ["image", "video", "audio", "document"].includes(w), l = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function d(w, v) {
      t.data[w] = `${t.data[w] || ""}${v}`;
    }
    async function u(w, v = "media_url", k = "mime_type") {
      const L = w.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const M = await $e.uploadMedia(L);
          t.data[v] = M.url, k && (t.data[k] = M.mime_type);
        } catch (M) {
          r.value = M.message;
        } finally {
          n.value = !1, w.target.value = "";
        }
      }
    }
    const c = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, g = (w) => {
      t.data.buttons = c.value.filter((v, k) => k !== w);
    }, y = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), m = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = (w) => {
      t.data.sections = y.value.filter((v, k) => k !== w);
    }, h = (w) => {
      w.rows = [...w.rows || [], { title: "", description: "" }];
    }, b = (w, v) => {
      w.rows = (w.rows || []).filter((k, L) => L !== v);
    }, z = J(() => Array.isArray(t.data.options) ? t.data.options : []), _ = () => {
      t.data.options = [...z.value, ""];
    }, T = (w) => {
      t.data.options = z.value.filter((v, k) => k !== w);
    };
    async function $() {
      try {
        o.value = (await $e.groups()).groups || [], a.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], a.value = "manual";
      }
    }
    return Ke(() => {
      t.showRecipient && $();
    }), (w, v) => (E(), C("div", uw, [
      i("div", null, [
        i("label", {
          class: W(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ee(i("select", {
          id: "zr-mode",
          "onUpdate:modelValue": v[0] || (v[0] = (k) => e.data.mode = k),
          class: W(Te)
        }, [
          (E(!0), C(me, null, Ne(O(tw), (k) => (E(), C("option", {
            key: k.value,
            value: k.value
          }, U(k.label), 9, cw))), 128))
        ], 512), [
          [tt, e.data.mode]
        ])
      ]),
      e.showRecipient ? (E(), C(me, { key: 0 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          ee(i("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": v[1] || (v[1] = (k) => e.data.recipient_type = k),
            class: W(Te)
          }, [
            (E(!0), C(me, null, Ne(O(ow), (k) => (E(), C("option", {
              key: k.value,
              value: k.value
            }, U(k.label), 9, dw))), 128))
          ], 512), [
            [tt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (E(), C("div", fw, [
          i("label", {
            class: W(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          ee(i("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": v[2] || (v[2] = (k) => e.data.custom_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: W(Te)
          }, null, 512), [
            [
              ye,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (E(), C("div", pw, [
          i("label", {
            class: W(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          a.value === "list" ? ee((E(), C("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": v[3] || (v[3] = (k) => e.data.group_id = k),
            class: W(Te)
          }, [
            v[30] || (v[30] = i("option", { value: "" }, "Selecione o grupo…", -1)),
            (E(!0), C(me, null, Ne(o.value, (k) => (E(), C("option", {
              key: k.id,
              value: k.id
            }, U(k.name), 9, hw))), 128))
          ], 512)), [
            [tt, e.data.group_id]
          ]) : ee((E(), C("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": v[4] || (v[4] = (k) => e.data.group_id = k),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: W(Te)
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
            onClick: v[5] || (v[5] = (k) => a.value = a.value === "list" ? "manual" : "list")
          }, U(a.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : te("", !0)
      ], 64)) : te("", !0),
      e.data.mode === "text" || s(e.data.mode) ? (E(), C(me, { key: 1 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-text"
          }, U(s(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ee(i("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": v[6] || (v[6] = (k) => e.data.text = k),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: W([Te, "font-mono leading-relaxed"])
          }, null, 2), [
            [ye, e.data.text]
          ]),
          i("div", mw, [
            (E(!0), C(me, null, Ne(e.variables, (k) => (E(), C("button", {
              key: k.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: k.label,
              onClick: (L) => d("text", k.token)
            }, U(k.token), 9, vw))), 128))
          ])
        ]),
        s(e.data.mode) ? (E(), C("div", gw, [
          i("label", {
            class: W(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          ee(i("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": v[7] || (v[7] = (k) => e.data.media_url = k),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: W(Te)
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
          n.value ? (E(), C("p", bw, "Enviando arquivo…")) : te("", !0)
        ])) : te("", !0)
      ], 64)) : e.data.mode === "sticker" ? (E(), C("div", xw, [
        i("label", {
          class: W(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ee(i("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": v[8] || (v[8] = (k) => e.data.media_url = k),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: W(Te)
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
      ])) : e.data.mode === "buttons" ? (E(), C(me, { key: 3 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-title"
          }, "Título"),
          ee(i("input", {
            id: "zr-title",
            "onUpdate:modelValue": v[9] || (v[9] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          ee(i("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": v[10] || (v[10] = (k) => e.data.text = k),
            rows: "3",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          ee(i("input", {
            id: "zr-footer",
            "onUpdate:modelValue": v[11] || (v[11] = (k) => e.data.footer = k),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.footer]
          ])
        ]),
        i("div", _w, [
          i("label", {
            class: W(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (E(!0), C(me, null, Ne(c.value, (k, L) => (E(), C("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ee(i("select", {
              "onUpdate:modelValue": (M) => k.type = M,
              class: W(Te)
            }, [
              (E(!0), C(me, null, Ne(O(nw), (M) => (E(), C("option", {
                key: M.value,
                value: M.value
              }, U(M.label), 9, Sw))), 128))
            ], 8, kw), [
              [tt, k.type]
            ]),
            k.type === "pix" ? (E(), C(me, { key: 0 }, [
              ee(i("input", {
                "onUpdate:modelValue": (M) => k.name = M,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: W(Te)
              }, null, 8, Ew), [
                [ye, k.name]
              ]),
              ee(i("select", {
                "onUpdate:modelValue": (M) => k.keyType = M,
                class: W(Te)
              }, [
                v[31] || (v[31] = i("option", { value: "" }, "Tipo de chave PIX", -1)),
                (E(!0), C(me, null, Ne(O(rw), (M) => (E(), C("option", {
                  key: M.value,
                  value: M.value
                }, U(M.label), 9, $w))), 128))
              ], 8, zw), [
                [tt, k.keyType]
              ]),
              ee(i("input", {
                "onUpdate:modelValue": (M) => k.key = M,
                type: "text",
                placeholder: "Chave PIX",
                class: W(Te)
              }, null, 8, Pw), [
                [
                  ye,
                  k.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              v[32] || (v[32] = i("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (E(), C(me, { key: 1 }, [
              ee(i("input", {
                "onUpdate:modelValue": (M) => k.displayText = M,
                type: "text",
                placeholder: "Texto do botão",
                class: W(Te)
              }, null, 8, Cw), [
                [ye, k.displayText]
              ]),
              k.type === "url" ? ee((E(), C("input", {
                key: 0,
                "onUpdate:modelValue": (M) => k.url = M,
                type: "url",
                placeholder: "https://…",
                class: W(Te)
              }, null, 8, Aw)), [
                [
                  ye,
                  k.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              k.type === "call" ? ee((E(), C("input", {
                key: 1,
                "onUpdate:modelValue": (M) => k.phoneNumber = M,
                type: "text",
                placeholder: "+5511999998888",
                class: W(Te)
              }, null, 8, Tw)), [
                [
                  ye,
                  k.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              k.type === "copy" ? ee((E(), C("input", {
                key: 2,
                "onUpdate:modelValue": (M) => k.copyCode = M,
                type: "text",
                placeholder: "Código a copiar",
                class: W(Te)
              }, null, 8, Ow)), [
                [
                  ye,
                  k.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0)
            ], 64)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (M) => g(L)
            }, "Remover botão", 8, Nw)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (E(), C(me, { key: 4 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-list-title"
          }, "Título"),
          ee(i("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": v[12] || (v[12] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Nossos planos",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          ee(i("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": v[13] || (v[13] = (k) => e.data.text = k),
            rows: "3",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ]),
        i("div", Rw, [
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            ee(i("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": v[14] || (v[14] = (k) => e.data.footer = k),
              type: "text",
              class: W(Te)
            }, null, 512), [
              [ye, e.data.footer]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            ee(i("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": v[15] || (v[15] = (k) => e.data.button_text = k),
              type: "text",
              placeholder: "Ver Menu",
              class: W(Te)
            }, null, 512), [
              [ye, e.data.button_text]
            ])
          ])
        ]),
        i("div", Iw, [
          i("label", {
            class: W(Ue)
          }, "Seções"),
          (E(!0), C(me, null, Ne(y.value, (k, L) => (E(), C("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ee(i("input", {
              "onUpdate:modelValue": (M) => k.title = M,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: W(Te)
            }, null, 8, Mw), [
              [ye, k.title]
            ]),
            (E(!0), C(me, null, Ne(k.rows, (M, I) => (E(), C("div", {
              key: I,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ee(i("input", {
                "onUpdate:modelValue": (A) => M.title = A,
                type: "text",
                placeholder: "Título da opção",
                class: W(Te)
              }, null, 8, Dw), [
                [ye, M.title]
              ]),
              ee(i("input", {
                "onUpdate:modelValue": (A) => M.description = A,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: W(Te)
              }, null, 8, Fw), [
                [ye, M.description]
              ]),
              i("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (A) => b(k, I)
              }, "Remover opção", 8, Bw)
            ]))), 128)),
            i("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (M) => h(k)
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
      ], 64)) : e.data.mode === "location" ? (E(), C(me, { key: 5 }, [
        i("div", qw, [
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-lat"
            }, "Latitude"),
            ee(i("input", {
              id: "zr-lat",
              "onUpdate:modelValue": v[16] || (v[16] = (k) => e.data.latitude = k),
              type: "text",
              placeholder: "-23.5505",
              class: W(Te)
            }, null, 512), [
              [ye, e.data.latitude]
            ])
          ]),
          i("div", null, [
            i("label", {
              class: W(Ue),
              for: "zr-lng"
            }, "Longitude"),
            ee(i("input", {
              id: "zr-lng",
              "onUpdate:modelValue": v[17] || (v[17] = (k) => e.data.longitude = k),
              type: "text",
              placeholder: "-46.6333",
              class: W(Te)
            }, null, 512), [
              [ye, e.data.longitude]
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
            "onUpdate:modelValue": v[18] || (v[18] = (k) => e.data.location_name = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.location_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          ee(i("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": v[19] || (v[19] = (k) => e.data.address = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (E(), C(me, { key: 6 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          ee(i("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": v[20] || (v[20] = (k) => e.data.contact_name = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.contact_name]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          ee(i("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": v[21] || (v[21] = (k) => e.data.contact_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.contact_phone]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ee(i("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": v[22] || (v[22] = (k) => e.data.organization = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (E(), C(me, { key: 7 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          ee(i("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": v[23] || (v[23] = (k) => e.data.question = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.question]
          ])
        ]),
        i("div", jw, [
          i("label", {
            class: W(Ue)
          }, "Opções (mínimo 2)"),
          (E(!0), C(me, null, Ne(z.value, (k, L) => (E(), C("div", {
            key: L,
            class: "flex gap-2"
          }, [
            ee(i("input", {
              "onUpdate:modelValue": (M) => z.value[L] = M,
              type: "text",
              class: W(Te),
              placeholder: `Opção ${L + 1}`
            }, null, 8, Hw), [
              [ye, z.value[L]]
            ]),
            z.value.length > 2 ? (E(), C("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (M) => T(L)
            }, "✕", 8, Gw)) : te("", !0)
          ]))), 128)),
          i("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: _
          }, "+ Adicionar opção")
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ee(i("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": v[24] || (v[24] = (k) => e.data.max_answers = k),
            type: "number",
            min: "1",
            max: z.value.length,
            class: W(Te)
          }, null, 8, Ww), [
            [
              ye,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (E(), C(me, { key: 8 }, [
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-url"
          }, "URL"),
          ee(i("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": v[25] || (v[25] = (k) => e.data.url = k),
            type: "url",
            placeholder: "https://…",
            class: W(Te)
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
            class: W(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          ee(i("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": v[26] || (v[26] = (k) => e.data.title = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.title]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ee(i("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": v[27] || (v[27] = (k) => e.data.description = k),
            type: "text",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.description]
          ])
        ]),
        i("div", null, [
          i("label", {
            class: W(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ee(i("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": v[28] || (v[28] = (k) => e.data.image_url = k),
            type: "url",
            class: W(Te)
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
            class: W(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ee(i("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": v[29] || (v[29] = (k) => e.data.text = k),
            rows: "3",
            class: W(Te)
          }, null, 512), [
            [ye, e.data.text]
          ])
        ])
      ], 64)) : te("", !0),
      r.value ? (E(), C("p", Xw, U(r.value), 1)) : te("", !0)
    ]));
  }
}, $p = {
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
function Di(e, t = $p) {
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
    return (a, s) => (E(), C("div", Zw, [
      i("div", Jw, [
        i("div", Qw, U(n.value), 1),
        i("div", e_, [
          i("div", t_, U(e.recipientName || "Cliente"), 1),
          s[0] || (s[0] = i("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      i("div", n_, [
        i("div", r_, [
          o.value ? (E(), C("span", o_, U(o.value), 1)) : te("", !0),
          ke(" " + U(r.value) + " ", 1),
          i("div", a_, [
            s[1] || (s[1] = i("span", null, "12:00", -1)),
            X(O(_i), { class: "h-3 w-3 text-sky-400" })
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
        d === void 0 || u === void 0 || (d === a && u !== s && Object.assign(n.node.data, kp(u)), a = d, s = u);
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
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = wp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (d, u) => (E(), C("aside", s_, [
      e.node ? (E(), C(me, { key: 0 }, [
        i("div", i_, [
          i("div", null, [
            i("h3", l_, U(O(xn)(e.node.type)), 1),
            i("p", u_, U(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (E(), C("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (c) => r("remove-node", e.node.id))
          }, [
            X(O(Zo), { class: "h-3 w-3" }),
            u[21] || (u[21] = ke(" Excluir ", -1))
          ])) : te("", !0)
        ]),
        e.node.type === "trigger" ? (E(), C("div", c_, [
          i("div", null, [
            i("label", {
              class: W(Tt)
            }, "Evento"),
            i("input", {
              class: W([bt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, d_),
            u[22] || (u[22] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (E(), C(me, { key: 1 }, [
          i("div", f_, [
            i("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (c) => o.value = "config")
            }, " Configurar ", 2),
            i("button", {
              type: "button",
              class: W(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (c) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (E(), C("div", p_, [
            X(gl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": O($p).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (E(), C("div", h_, [
            X(zp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (E(), C("div", m_, [
          i("label", {
            class: W(Tt),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          i("div", v_, [
            ee(i("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: W(bt),
              onChange: l
            }, null, 544), [
              [
                ye,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ee(i("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (c) => e.node.data.delay_unit = c),
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
          i("p", g_, " Aguarda " + U(e.node.data.delay_value || 0) + " " + U(O(ua)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (E(), C("div", y_, [
          i("div", null, [
            i("label", {
              class: W(Tt),
              for: "zr-kind"
            }, "Regra de validação"),
            ee(i("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (c) => e.node.data.kind = c),
              class: W(bt)
            }, [
              (E(!0), C(me, null, Ne(O(yp), (c) => (E(), C("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, b_))), 128))
            ], 512), [
              [tt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (E(), C("div", x_, [
            i("label", {
              class: W(Tt),
              for: "zr-order-status"
            }, "Status esperado"),
            ee(i("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (c) => e.node.data.value = c),
              class: W(bt)
            }, [
              (E(!0), C(me, null, Ne(O(bp), (c) => (E(), C("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, w_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (E(), C("div", __, [
            i("label", {
              class: W(Tt),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ee(i("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (c) => e.node.data.value = c),
              class: W(bt)
            }, [
              (E(!0), C(me, null, Ne(O(xp), (c) => (E(), C("option", {
                key: c.value,
                value: c.value
              }, U(c.label), 9, k_))), 128))
            ], 512), [
              [tt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (E(), C("div", S_, [
            i("label", {
              class: W(Tt),
              for: "zr-value"
            }, "Classe do evento"),
            ee(i("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: W(bt)
            }, null, 512), [
              [
                ye,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : e.node.data.kind === "reply_matches" ? (E(), C("div", E_, [
            u[27] || (u[27] = i("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Identificar resposta do cliente", -1)),
            i("div", null, [
              i("label", {
                class: W(Tt),
                for: "zr-reply-mode"
              }, "Modo de correspondência"),
              ee(i("select", {
                id: "zr-reply-mode",
                "onUpdate:modelValue": u[9] || (u[9] = (c) => e.node.data.match_mode = c),
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
                "onUpdate:modelValue": u[10] || (u[10] = (c) => e.node.data.value = c),
                type: "text",
                placeholder: "Ex: eu quero",
                class: W(bt)
              }, null, 512), [
                [ye, e.node.data.value]
              ])
            ]),
            i("div", z_, [
              i("label", $_, [
                ee(i("input", {
                  "onUpdate:modelValue": u[11] || (u[11] = (c) => e.node.data.case_sensitive = c),
                  type: "checkbox",
                  class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                }, null, 512), [
                  [An, e.node.data.case_sensitive]
                ]),
                u[25] || (u[25] = i("span", null, "Diferenciar maiúsculas e minúsculas", -1))
              ]),
              i("label", P_, [
                ee(i("input", {
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
              ke(" Avalia a última mensagem enviada pelo cliente. Segue por "),
              i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
              ke(" se corresponder, ou "),
              i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
              ke(' caso responda outra coisa (ex: "não"). ')
            ], -1))
          ])) : te("", !0),
          e.node.data.kind === "order_is_paid" ? (E(), C("p", C_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : e.node.data.kind === "has_order_bumps" ? (E(), C("p", A_, [...u[29] || (u[29] = [
            ke(" Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída ", -1),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM", -1),
            ke(" se houver bumps, ou ", -1),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO", -1),
            ke(" se comprou apenas o produto principal. ", -1)
          ])])) : te("", !0),
          u[30] || (u[30] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ke(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            ke(" e outra do ponto "),
            i("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            ke(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (E(), C("div", T_, [
          i("div", null, [
            i("label", {
              class: W(Tt),
              for: "zr-wait-value"
            }, "Tempo máximo de espera"),
            i("div", O_, [
              ee(i("input", {
                id: "zr-wait-value",
                "onUpdate:modelValue": u[13] || (u[13] = (c) => e.node.data.delay_value = c),
                type: "number",
                min: "1",
                class: W(bt),
                onChange: l
              }, null, 544), [
                [
                  ye,
                  e.node.data.delay_value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ee(i("select", {
                "onUpdate:modelValue": u[14] || (u[14] = (c) => e.node.data.delay_unit = c),
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
            i("p", N_, " Espera até " + U(e.node.data.delay_value || 0) + " " + U(O(ua)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente na Evolution GO. ", 1)
          ]),
          i("div", R_, [
            i("label", I_, [
              ee(i("input", {
                "onUpdate:modelValue": u[15] || (u[15] = (c) => e.node.data.filter_reply = c),
                type: "checkbox",
                class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
              }, null, 512), [
                [An, e.node.data.filter_reply]
              ]),
              u[32] || (u[32] = i("span", null, "Filtrar resposta esperada (opcional)", -1))
            ]),
            e.node.data.filter_reply ? (E(), C("div", M_, [
              i("div", null, [
                i("label", {
                  class: W(Tt),
                  for: "zr-wait-filter-mode"
                }, "Tipo de correspondência"),
                ee(i("select", {
                  id: "zr-wait-filter-mode",
                  "onUpdate:modelValue": u[16] || (u[16] = (c) => e.node.data.match_mode = c),
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
                  "onUpdate:modelValue": u[17] || (u[17] = (c) => e.node.data.match_text = c),
                  type: "text",
                  placeholder: "Ex: eu quero",
                  class: W(bt)
                }, null, 512), [
                  [ye, e.node.data.match_text]
                ])
              ]),
              i("div", D_, [
                i("label", F_, [
                  ee(i("input", {
                    "onUpdate:modelValue": u[18] || (u[18] = (c) => e.node.data.case_sensitive = c),
                    type: "checkbox",
                    class: "rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                  }, null, 512), [
                    [An, e.node.data.case_sensitive]
                  ]),
                  u[34] || (u[34] = i("span", null, "Diferenciar maiúsculas/minúsculas", -1))
                ]),
                i("label", B_, [
                  ee(i("input", {
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
                ke(" Apenas respostas que atenderem a este critério ativarão a saída "),
                i("strong", { class: "text-teal-600 dark:text-teal-400" }, "RESPONDEU"),
                ke(". Respostas divergentes continuarão aguardando até o tempo esgotar. ")
              ], -1))
            ])) : te("", !0)
          ]),
          u[37] || (u[37] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            ke(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            i("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            ke(" (o cliente mandou uma mensagem) e outra do ponto "),
            i("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            ke(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (E(), C("p", L_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (E(), C("div", U_, [
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
            X(O(Zo), { class: "h-3 w-3" }),
            u[39] || (u[39] = ke(" Excluir ", -1))
          ])
        ]),
        u[40] || (u[40] = i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (E(), C("p", j_, "Selecione um bloco ou uma conexão para editar as propriedades."))
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
    function f($, w, v = "contains", k = !1, L = !0) {
      let M = ($ || "").trim(), I = (w || "").trim();
      return I ? (L && (M = M.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), I = I.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), k || (M = M.toLowerCase(), I = I.toLowerCase()), v === "exact" ? M === I : M.includes(I)) : !0;
    }
    J(() => n.nodes.find(($) => $.id === o.value));
    function g() {
      const $ = /* @__PURE__ */ new Date();
      return `${String($.getHours()).padStart(2, "0")}:${String($.getMinutes()).padStart(2, "0")}`;
    }
    function y() {
      a.value = [], s.value = !1, u.value = null, l.value = "";
      const $ = n.nodes.find((w) => w.type === "trigger");
      if (!$) {
        a.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: g()
        });
        return;
      }
      a.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${$.data?.event_class || "Evento do Fluxo"}`,
        time: g()
      }), o.value = $.id, p();
    }
    function m($, w = null) {
      return n.edges.find((v) => v.source !== $ ? !1 : w === null ? !0 : (v.sourceHandle === "yes" || v.sourceHandle === "replied" || v.data?.condition === "true" ? "true" : v.sourceHandle === "no" || v.sourceHandle === "timeout" || v.data?.condition === "false" ? "false" : null) === w);
    }
    function p() {
      if (!o.value) return;
      const $ = n.nodes.find((w) => w.id === o.value);
      if ($) {
        if ($.type === "trigger") {
          const w = m($.id);
          if (!w) return T("Fluxo finalizado após o gatilho.");
          o.value = w.target, h();
          return;
        }
        if ($.type === "send_message") {
          const w = m($.id);
          if (!w) return T("Fim do fluxo atingido.");
          o.value = w.target, h();
          return;
        }
        if ($.type === "delay") {
          const w = m($.id);
          if (!w) return T("Fim do fluxo atingido.");
          o.value = w.target, h();
          return;
        }
        if ($.type === "condition") {
          let w = "false";
          if ($.data?.kind === "reply_matches") {
            const k = $.data?.value || "", L = $.data?.match_mode || "contains", M = !!$.data?.case_sensitive, I = $.data?.ignore_accents !== !1;
            w = f(c.value, k, L, M, I) ? "true" : "false";
          } else
            w = d.value ? "true" : "false";
          const v = m($.id, w);
          if (!v) return T(`Fim do fluxo (ramificação ${w === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = v.target, h();
          return;
        }
        $.type === "end" && T("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const $ = n.nodes.find((w) => w.id === o.value);
      if ($) {
        if ($.type === "send_message") {
          a.value.push({
            type: "bot",
            mode: $.data?.mode || "text",
            text: $.data?.text || $.data?.caption || "Mensagem enviada",
            data: $.data || {},
            time: g()
          }), setTimeout(p, 800);
          return;
        }
        if ($.type === "delay") {
          const w = $.data?.delay_value || 15, v = $.data?.delay_unit || "minutes";
          u.value = `${w} ${v}`, a.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${w} ${v}...`,
            time: g()
          });
          return;
        }
        if ($.type === "condition") {
          if ($.data?.kind === "reply_matches") {
            const w = $.data?.value || "", v = $.data?.match_mode || "contains", k = !!$.data?.case_sensitive, L = $.data?.ignore_accents !== !1, M = f(c.value, w, v, k, L);
            a.value.push({
              type: "system",
              text: `🔀 Avaliando resposta do cliente: "${c.value || "(vazia)"}" ${v === "exact" ? "igual a" : "contém"} "${w}" -> ${M ? "SIM" : "NÃO"}`,
              time: g()
            });
          } else {
            const w = d.value;
            a.value.push({
              type: "system",
              text: `🔀 Avaliando condição: Pedido pago? -> ${w ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
              time: g()
            });
          }
          setTimeout(p, 600);
          return;
        }
        if ($.type === "wait_reply") {
          s.value = !0, a.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: g()
          });
          return;
        }
        $.type === "end" && T("Fluxo concluído.");
      }
    }
    function b() {
      u.value && (u.value = null, a.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: g()
      }), p());
    }
    function z() {
      if (!l.value.trim()) return;
      const $ = l.value.trim();
      l.value = "", c.value = $, a.value.push({
        type: "user",
        text: $,
        time: g()
      });
      const w = n.nodes.find((v) => v.id === o.value);
      if (w && w.type === "wait_reply") {
        if (w.data?.filter_reply && w.data?.match_text && !f(
          $,
          w.data.match_text,
          w.data.match_mode || "contains",
          !!w.data.case_sensitive,
          w.data.ignore_accents !== !1
        )) {
          a.value.push({
            type: "system",
            text: `⚠️ Resposta "${$}" não atende ao filtro ("${w.data.match_text}"). O fluxo continua aguardando.`,
            time: g()
          });
          return;
        }
        s.value = !1;
        const v = m(w.id, "true");
        if (!v) return T("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = v.target, setTimeout(h, 500);
      }
    }
    function _() {
      s.value = !1, a.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: g()
      });
      const $ = n.nodes.find((w) => w.id === o.value);
      if ($ && $.type === "wait_reply") {
        const w = m($.id, "false");
        if (!w) return T("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = w.target, setTimeout(h, 500);
      }
    }
    function T($) {
      a.value.push({
        type: "system",
        text: `🏁 ${$}`,
        time: g()
      }), o.value = null;
    }
    return Ke(y), ($, w) => (E(), C("div", G_, [
      i("div", W_, [
        i("div", X_, [
          i("div", Y_, [
            X(O(ol), { class: "h-4 w-4 text-emerald-500" }),
            w[4] || (w[4] = i("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          w[11] || (w[11] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          i("div", K_, [
            i("div", Z_, [
              w[5] || (w[5] = i("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              w[6] || (w[6] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              i("div", J_, [
                i("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: w[0] || (w[0] = (v) => d.value = !0)
                }, " SIM (Pago) ", 2),
                i("button", {
                  type: "button",
                  class: W(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", d.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: w[1] || (w[1] = (v) => d.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (E(), C("div", Q_, [
              i("div", e2, [
                X(O(ir), { class: "h-4 w-4" }),
                i("span", null, "Aguardando: " + U(u.value), 1)
              ]),
              i("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: b
              }, [
                X(O(Ah), { class: "h-3.5 w-3.5" }),
                w[7] || (w[7] = i("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : te("", !0),
            s.value ? (E(), C("div", t2, [
              w[9] || (w[9] = i("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              i("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: _
              }, [...w[8] || (w[8] = [
                i("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : te("", !0)
          ]),
          i("div", n2, [
            i("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: y
            }, [
              X(O(af), { class: "h-3.5 w-3.5" }),
              w[10] || (w[10] = i("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        i("div", r2, [
          i("div", o2, [
            i("div", a2, [
              w[13] || (w[13] = i("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              i("div", null, [
                i("div", s2, U(e.flow.name), 1),
                w[12] || (w[12] = i("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            i("div", i2, [
              i("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: w[2] || (w[2] = (v) => r("close"))
              }, [
                X(O(Ot), { class: "h-4 w-4" })
              ])
            ])
          ]),
          i("div", l2, [
            (E(!0), C(me, null, Ne(a.value, (v, k) => (E(), C(me, { key: k }, [
              v.type === "system" ? (E(), C("div", u2, [
                i("span", c2, U(v.text), 1)
              ])) : v.type === "bot" ? (E(), C("div", d2, [
                i("div", f2, [
                  X(gl, {
                    text: v.text,
                    mode: v.mode,
                    caption: v.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  i("div", p2, [
                    i("span", null, U(v.time), 1),
                    X(O(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : v.type === "user" ? (E(), C("div", h2, [
                i("div", m2, [
                  i("p", v2, U(v.text), 1),
                  i("div", g2, [
                    i("span", null, U(v.time), 1),
                    X(O(_i), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : te("", !0)
            ], 64))), 128))
          ]),
          i("div", y2, [
            i("form", {
              class: "flex items-center gap-2",
              onSubmit: rn(z, ["prevent"])
            }, [
              ee(i("input", {
                "onUpdate:modelValue": w[3] || (w[3] = (v) => l.value = v),
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
                X(O(Ct), { class: "h-4 w-4" })
              ], 8, x2)
            ], 32)
          ])
        ])
      ])
    ]));
  }
};
function tr(e) {
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
    return t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${ua(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s`;
  if (e === "condition")
    return t.kind === "order_status_is" ? `Status do pedido é "${bp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${xp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "reply_matches" ? `Resposta ${t.match_mode === "exact" ? "igual a" : "contém"} "${t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : yp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?";
  if (e === "wait_reply") {
    const n = t.delay_value && t.delay_unit ? `${t.delay_value} ${ua(t.delay_unit)}` : `${Math.max(0, Number(t.seconds) || 0)}s`;
    if (t.filter_reply && t.match_text) {
      const r = t.match_mode === "exact" ? "igual a" : "contém";
      return `Espera até ${n} • Resposta ${r} "${t.match_text}"`;
    }
    return `Espera até ${n}`;
  }
  return e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function E2(e, t = "") {
  const n = tr(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], a = r.filter((u) => tr(u) && u.id).map((u, c) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + c % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(c / 4) * 170
    },
    data: tr(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  a.some((u) => u.type === "trigger") || a.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: _p("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const s = new Map(a.map((u) => [u.id, u.type])), l = new Set(a.map((u) => u.id)), d = o.filter((u) => tr(u) && l.has(String(u.from)) && l.has(String(u.to))).map((u, c) => {
    const f = tr(u.data) ? { ...u.data } : {};
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
  const n = tr(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = wp(n.delay_value, n.delay_unit)), n;
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
    data: _p(e, n),
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
    function g(P) {
      return f[P] || { label: P || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: y, addEdges: m, project: p, fitView: h } = qe(), b = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Un, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Jl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: ir, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Ir, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: eu, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Zl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], z = J(() => r.flow?.trigger_event || ""), _ = J(() => a.value.find((P) => P.id === l.value) || null), T = J(() => s.value.find((P) => P.id === d.value) || null), $ = {
      type: "zaprei",
      markerEnd: aa.ArrowClosed,
      data: {}
    };
    Ie(
      () => r.flow?.id,
      () => {
        const P = E2(r.flow?.graph_json, z.value);
        a.value = P.nodes, s.value = P.edges, l.value = null, d.value = null, setTimeout(() => h({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), y((P) => {
      m([{
        ...P,
        ...$,
        sourceHandle: P.sourceHandle,
        data: { sourceHandle: P.sourceHandle }
      }]);
    });
    function w(P) {
      l.value = P, d.value = null;
    }
    function v(P) {
      d.value = P, l.value = null;
    }
    function k() {
      l.value = null, d.value = null;
    }
    function L(P, R) {
      if (P === "trigger" && a.value.some((V) => V.type === "trigger"))
        return;
      const x = C2(P, R || { x: 420, y: 320 }, z.value);
      a.value = [...a.value, x], w(x.id);
    }
    function M(P) {
      !P || a.value.find((R) => R.id === P)?.type === "trigger" || (a.value = a.value.filter((R) => R.id !== P), s.value = s.value.filter((R) => R.source !== P && R.target !== P), l.value === P && (l.value = null));
    }
    function I(P) {
      s.value = s.value.filter((R) => R.id !== P), d.value === P && (d.value = null);
    }
    function A(P, R) {
      P.dataTransfer?.setData("application/zaprei-node", R), P.dataTransfer.effectAllowed = "move";
    }
    function q(P) {
      P.preventDefault(), P.dataTransfer.dropEffect = "move";
    }
    function S(P) {
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
    }), (P, R) => (E(), C("div", N2, [
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
            X(O(ol), { class: "h-3.5 w-3.5" }),
            R[7] || (R[7] = i("span", null, "Simulador", -1))
          ])
        ]),
        i("div", M2, [
          (E(), C(me, null, Ne(b, (x) => i("div", {
            key: x.type,
            draggable: "true",
            class: W(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", x.color]),
            onDragstart: (V) => A(V, x.type),
            onClick: (V) => L(x.type)
          }, [
            (E(), Oe(Rt(x.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
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
        onDrop: S
      }, [
        X(yh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: ot(() => [
            u.value.length ? (E(), C("div", V2, [
              i("div", q2, [
                i("div", j2, [
                  X(O(_a), { class: "h-4 w-4" })
                ]),
                i("div", H2, [
                  R[9] || (R[9] = i("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  i("ul", G2, [
                    (E(!0), C(me, null, Ne(u.value, (x, V) => (E(), C("li", { key: V }, U(x), 1))), 128))
                  ])
                ]),
                i("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: R[1] || (R[1] = (x) => u.value = [])
                }, [
                  X(O(Ot), { class: "h-4 w-4" })
                ])
              ])
            ])) : te("", !0)
          ]),
          _: 1
        }),
        X(O(f1), {
          nodes: a.value,
          "onUpdate:nodes": R[2] || (R[2] = (x) => a.value = x),
          edges: s.value,
          "onUpdate:edges": R[3] || (R[3] = (x) => s.value = x),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": $,
          onNodeClick: R[4] || (R[4] = (x) => w(x.node?.id)),
          onEdgeClick: R[5] || (R[5] = (x) => v(x.edge?.id)),
          onPaneClick: k
        }, {
          "edge-zaprei": ot((x) => [
            X(Q1, wa(x, { onRemove: I }), null, 16)
          ]),
          "node-trigger": ot((x) => [
            i("div", {
              class: W(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "source",
                position: O(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", W2, [
                i("div", X2, [
                  i("div", Y2, [
                    X(O(Un), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", K2, U(O(xn)("trigger")), 1)
                ]),
                R[10] || (R[10] = i("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              i("div", Z2, [
                i("div", J2, [
                  R[11] || (R[11] = i("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  i("span", Q2, U(O(Co)("trigger", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": ot((x) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "target",
                position: O(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(O(ut), {
                type: "source",
                position: O(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", ek, [
                i("div", tk, [
                  i("div", nk, [
                    X(O(Jl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", rk, U(O(xn)("send_message")), 1)
                ]),
                i("div", ok, [
                  i("span", {
                    class: W(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", g(x.data?.mode).color])
                  }, U(g(x.data?.mode).label), 3),
                  i("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: rn((V) => M(x.id), ["stop"])
                  }, [
                    X(O(Ot), { class: "h-3.5 w-3.5" })
                  ], 8, ak)
                ])
              ]),
              i("div", sk, [
                i("div", ik, [
                  x.data?.mode === "audio" ? (E(), C("div", lk, [
                    X(O(Oh), { class: "h-3.5 w-3.5" }),
                    R[12] || (R[12] = i("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    R[13] || (R[13] = i("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : x.data?.mode === "poll" ? (E(), C("div", uk, [
                    i("div", ck, "📊 " + U(x.data?.question || "Pergunta da enquete..."), 1),
                    i("div", dk, U((x.data?.options || []).length) + " opções configuradas", 1)
                  ])) : x.data?.mode === "buttons" ? (E(), C("div", fk, [
                    i("p", pk, U(x.data?.text || "Texto da mensagem..."), 1),
                    (x.data?.buttons || []).length ? (E(), C("div", hk, [
                      (E(!0), C(me, null, Ne((x.data?.buttons || []).slice(0, 3), (V, Q) => (E(), C("span", {
                        key: Q,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, U(V.label || `Botão ${Q + 1}`), 1))), 128))
                    ])) : te("", !0)
                  ])) : (E(), C("div", mk, U(x.data?.text || x.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": ot((x) => [
            i("div", {
              class: W(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "target",
                position: O(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              X(O(ut), {
                type: "source",
                position: O(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              i("div", vk, [
                i("div", gk, [
                  i("div", yk, [
                    X(O(ir), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", bk, U(O(xn)("delay")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  X(O(Ot), { class: "h-3.5 w-3.5" })
                ], 8, xk)
              ]),
              i("div", wk, [
                i("div", _k, [
                  R[14] || (R[14] = i("span", { class: "relative flex h-2 w-2" }, [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    i("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  i("span", null, U(O(Co)("delay", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": ot((x) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "target",
                position: O(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", kk, [
                i("div", Sk, [
                  i("div", Ek, [
                    X(O(Ir), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", zk, U(O(xn)("condition")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  X(O(Ot), { class: "h-3.5 w-3.5" })
                ], 8, $k)
              ]),
              i("div", Pk, [
                i("div", Ck, [
                  i("span", Ak, U(O(Co)("condition", x.data)), 1)
                ]),
                R[15] || (R[15] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                X(O(ut), {
                  id: "yes",
                  type: "source",
                  position: O(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[16] || (R[16] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                X(O(ut), {
                  id: "no",
                  type: "source",
                  position: O(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": ot((x) => [
            i("div", {
              class: W(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "target",
                position: O(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Tk, [
                i("div", Ok, [
                  i("div", Nk, [
                    X(O(eu), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Rk, U(O(xn)("wait_reply")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  X(O(Ot), { class: "h-3.5 w-3.5" })
                ], 8, Ik)
              ]),
              i("div", Mk, [
                i("div", Dk, [
                  i("span", Fk, U(O(Co)("wait_reply", x.data)), 1)
                ]),
                R[17] || (R[17] = i("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                X(O(ut), {
                  id: "replied",
                  type: "source",
                  position: O(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                R[18] || (R[18] = i("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                X(O(ut), {
                  id: "timeout",
                  type: "source",
                  position: O(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": ot((x) => [
            i("div", {
              class: W(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              X(O(ut), {
                type: "target",
                position: O(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              i("div", Bk, [
                i("div", Lk, [
                  i("div", Uk, [
                    X(O(Zl), { class: "h-3.5 w-3.5" })
                  ]),
                  i("span", Vk, U(O(xn)("end")), 1)
                ]),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: rn((V) => M(x.id), ["stop"])
                }, [
                  X(O(Ot), { class: "h-3.5 w-3.5" })
                ], 8, qk)
              ]),
              R[19] || (R[19] = i("div", { class: "p-3" }, [
                i("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: ot(() => [
            X(O(w1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            X(O(J1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      X(H_, {
        node: _.value,
        edge: T.value,
        onRemoveNode: M,
        onRemoveEdge: I
      }, null, 8, ["node", "edge"]),
      c.value ? (E(), Oe(w2, {
        key: 0,
        flow: e.flow,
        nodes: a.value,
        edges: s.value,
        onClose: R[6] || (R[6] = (x) => c.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : te("", !0)
    ]));
  }
}, Hk = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Gk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Wk = { class: "flex items-center gap-3" }, Xk = ["disabled"], Yk = { class: "flex items-center gap-2" }, Kk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Zk = { class: "text-sm font-bold" }, Jk = ["disabled"], Qk = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, Pp = {
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
        await $e.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (c) {
        s.value = c.message, a.value = !1;
      }
    }
    return (u, c) => (E(), Oe(Wd, { to: "body" }, [
      i("div", Hk, [
        i("header", Gk, [
          i("div", Wk, [
            i("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: a.value,
              onClick: c[0] || (c[0] = (f) => r("close"))
            }, [
              X(O(Yd), { class: "h-4 w-4 text-emerald-500" }),
              c[1] || (c[1] = i("span", null, "Voltar para Automações", -1))
            ], 8, Xk),
            c[3] || (c[3] = i("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            i("div", Yk, [
              i("div", Kk, [
                X(O(tf), { class: "h-4 w-4" })
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
            a.value ? (E(), Oe(O(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (E(), Oe(O(Rh), {
              key: 1,
              class: "h-4 w-4"
            })),
            i("span", null, U(a.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, Jk)
        ]),
        s.value ? (E(), C("p", Qk, [
          X(O(_a), { class: "h-4 w-4 shrink-0" }),
          i("span", null, U(s.value), 1)
        ])) : te("", !0),
        X(jk, {
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
}, o5 = ["checked", "onChange"], a5 = { class: "truncate" }, fr = {
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
    xa(() => document.removeEventListener("click", s, !0));
    const g = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, m) => (E(), C("div", {
      ref_key: "root",
      ref: a,
      class: "relative"
    }, [
      i("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: l
      }, [
        i("span", e5, U(g.value), 1),
        X(O(Ph), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (E(), C("div", t5, [
        e.options.length ? (E(), C(me, { key: 1 }, [
          e.matchMode ? (E(), C("div", r5, [
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
          e.modelValue.length ? (E(), C("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : te("", !0),
          (E(!0), C(me, null, Ne(e.options, (p) => (E(), C("label", {
            key: p.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            i("span", {
              class: W(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(p.value) ? (E(), Oe(O(Zd), {
                key: 0,
                class: "h-3 w-3"
              })) : te("", !0)
            ], 2),
            i("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(p.value),
              onChange: (h) => c(p.value)
            }, null, 40, o5),
            i("span", a5, U(p.label), 1)
          ]))), 128))
        ], 64)) : (E(), C("p", n5, "Nenhuma opção disponível."))
      ])) : te("", !0)
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
    const n = e, r = t, o = G([]), a = G(!1), s = G(""), l = vr({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Fn[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), d = J(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await $e.products()).products || [];
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
        await $e.updateFlow(n.flow.id, {
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
    return Ke(u), (f, g) => (E(), C("div", s5, [
      i("div", i5, [
        i("div", l5, [
          i("div", u5, [
            i("div", c5, [
              X(O(sf), { class: "h-4 w-4" })
            ]),
            g[5] || (g[5] = i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          i("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: g[0] || (g[0] = (y) => r("close"))
          }, [
            X(O(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", d5, [
          i("div", null, [
            g[6] || (g[6] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ee(i("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": g[1] || (g[1] = (y) => l.name = y),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [ye, l.name]
            ])
          ]),
          i("div", null, [
            g[7] || (g[7] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ee(i("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": g[2] || (g[2] = (y) => l.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (E(!0), C(me, null, Ne(O(Fn), (y) => (E(), C("option", {
                key: y.id,
                value: y.eventClass
              }, U(y.label), 9, f5))), 128))
            ], 512), [
              [tt, l.trigger_event]
            ]),
            g[8] || (g[8] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          i("div", null, [
            g[9] || (g[9] = i("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            X(fr, {
              modelValue: l.product_ids,
              "onUpdate:modelValue": g[3] || (g[3] = (y) => l.product_ids = y),
              options: d.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          s.value ? (E(), C("p", p5, U(s.value), 1)) : te("", !0)
        ]),
        i("div", h5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: g[4] || (g[4] = (y) => r("close"))
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
    return (t, n) => (E(), C("div", y5, [
      n[1] || (n[1] = i("div", { class: "mb-4 flex items-center justify-between" }, [
        i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      i("div", b5, [
        (E(!0), C(me, null, Ne(O(g5), (r) => (E(), C("button", {
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
    const g = J(() => o.value.replace(/\D/g, "")), y = J(() => g.value.length >= 10 && g.value.length <= 11);
    async function m() {
      if (!(!y.value || s.value)) {
        s.value = !0, l.value = "", d.value = !1;
        try {
          await $e.testFlow(n.flow.id, {
            phone: g.value,
            customer_name: a.value.trim() || void 0
          }), u.value = o.value, d.value = !0, r("tested", { phone: g.value, name: a.value });
        } catch (p) {
          l.value = p.message || "Falha ao disparar teste.";
        } finally {
          s.value = !1;
        }
      }
    }
    return (p, h) => (E(), C("div", $5, [
      i("div", P5, [
        i("div", C5, [
          i("div", A5, [
            i("div", T5, [
              X(O(Ct), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              h[4] || (h[4] = i("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              i("p", O5, [
                h[3] || (h[3] = ke("Fluxo: ", -1)),
                i("strong", N5, U(e.flow.name), 1)
              ])
            ])
          ]),
          i("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (b) => r("close"))
          }, [
            X(O(Ot), { class: "h-4 w-4" })
          ])
        ]),
        i("div", R5, [
          h[13] || (h[13] = i("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            i("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          d.value ? (E(), C("div", I5, [
            i("div", M5, [
              X(O(jr), { class: "h-5 w-5 text-emerald-500" }),
              h[5] || (h[5] = i("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            i("p", D5, [
              h[6] || (h[6] = ke(" As mensagens foram enviadas para ", -1)),
              i("strong", null, U(u.value), 1),
              h[7] || (h[7] = ke('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : te("", !0),
          l.value ? (E(), C("div", F5, U(l.value), 1)) : te("", !0),
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
                X(O(Mh), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                ee(i("input", {
                  "onUpdate:modelValue": h[1] || (h[1] = (b) => a.value = b),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [ye, a.value]
                ])
              ]),
              h[12] || (h[12] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                ke(" Substitui as tags "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                ke(" e "),
                i("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                ke(". ")
              ], -1))
            ])
          ], 32)
        ]),
        i("div", V5, [
          i("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[2] || (h[2] = (b) => r("close"))
          }, U(d.value ? "Concluir" : "Cancelar"), 1),
          i("button", {
            type: "button",
            disabled: !y.value || s.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: m
          }, [
            s.value ? (E(), Oe(O(Dt), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (E(), Oe(O(Ct), {
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
    const t = G([]), n = G([]), r = G(!0), o = G(!1), a = G(""), s = G(""), l = G(!1), d = G(""), u = G("all"), c = G(null), f = G(null), g = G(null), y = G({ name: "", trigger_event: Fn[3].eventClass, product_ids: [] }), m = G(!1), p = J(() => {
      const q = d.value.trim().toLowerCase();
      return t.value.filter((S) => u.value !== "all" && S.trigger_event !== u.value ? !1 : !q || `${S.name} ${Uo(S.trigger_event)}`.toLowerCase().includes(q));
    }), h = J(() => n.value.map((q) => ({ value: q.id, label: q.name })));
    function b(q) {
      if (!q || !q.length) return "Todos os produtos";
      const S = q.map((F) => n.value.find((P) => P.id === F)?.name).filter(Boolean);
      return S.length ? S.length > 2 ? `${S.slice(0, 2).join(", ")} +${S.length - 2}` : S.join(", ") : "Todos os produtos";
    }
    async function z() {
      r.value = !0, a.value = "";
      try {
        const [q, S] = await Promise.all([$e.flows(), $e.products()]);
        t.value = q.flows || [], n.value = S.products || [];
      } catch (q) {
        a.value = q.message;
      } finally {
        r.value = !1;
      }
    }
    async function _(q) {
      o.value = !0, a.value = "";
      try {
        await q(), await z();
      } catch (S) {
        a.value = S.message;
      } finally {
        o.value = !1;
      }
    }
    function T(q) {
      g.value = q;
    }
    function $({ phone: q }) {
      s.value = `Fluxo "${g.value?.name}" disparado para ${q}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function w() {
      const q = y.value.name.trim() || Uo(y.value.trigger_event);
      return _(async () => {
        await $e.createFlow({
          name: q,
          trigger_event: y.value.trigger_event,
          product_ids: y.value.product_ids.length ? y.value.product_ids : null,
          is_active: !0,
          graph_json: Sp(y.value.trigger_event)
        }), y.value.name = "", y.value.product_ids = [], m.value = !1;
      });
    }
    const v = (q) => _(() => $e.updateFlow(q.id, { is_active: !q.is_active })), k = (q) => _(() => $e.duplicateFlow(q.id));
    function L(q) {
      if (window.confirm(`Excluir o fluxo "${q.name}"?`))
        return _(() => $e.deleteFlow(q.id));
    }
    function M(q) {
      const S = {
        name: q.name,
        trigger_event: q.trigger_event,
        product_ids: q.product_ids,
        graph_json: q.graph_json
      }, F = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" }), P = URL.createObjectURL(F), R = document.createElement("a");
      R.href = P, R.download = `${(q.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, R.click(), URL.revokeObjectURL(P);
    }
    async function I(q) {
      const S = q.target.files?.[0];
      if (S) {
        l.value = !0, a.value = "", s.value = "";
        try {
          const F = JSON.parse(await S.text());
          if (!F || typeof F != "object" || !F.graph_json || !F.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const P = new Set(n.value.map((x) => x.id)), R = (Array.isArray(F.product_ids) ? F.product_ids : []).filter((x) => P.has(x));
          await $e.createFlow({
            name: F.name ? `${F.name} (importado)` : "Fluxo importado",
            trigger_event: F.trigger_event,
            product_ids: R.length ? R : null,
            graph_json: F.graph_json,
            is_active: !1
          }), s.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await z();
        } catch (F) {
          a.value = F.message || "Não foi possível importar o arquivo.";
        } finally {
          l.value = !1, q.target.value = "";
        }
      }
    }
    function A(q) {
      return _(() => $e.createFlow({
        name: q.title,
        trigger_event: q.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: q.graph(q.eventClass)
      }));
    }
    return Ke(z), (q, S) => (E(), C("div", H5, [
      X(z5, { onUse: A }),
      i("div", G5, [
        i("div", W5, [
          i("div", X5, [
            i("div", Y5, [
              X(O(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ee(i("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (F) => d.value = F),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [ye, d.value]
              ])
            ]),
            ee(i("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (F) => u.value = F),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              S[10] || (S[10] = i("option", { value: "all" }, "Todos os eventos", -1)),
              (E(!0), C(me, null, Ne(O(Fn), (F) => (E(), C("option", {
                key: F.id,
                value: F.eventClass
              }, U(F.label), 9, K5))), 128))
            ], 512), [
              [tt, u.value]
            ])
          ]),
          i("div", Z5, [
            i("span", J5, U(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            i("label", {
              class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": l.value }])
            }, [
              X(O(lf), { class: "h-4 w-4" }),
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
              onClick: S[2] || (S[2] = (F) => m.value = !m.value)
            }, [
              X(O(of), { class: "h-4 w-4" }),
              S[11] || (S[11] = i("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        m.value ? (E(), C("div", eS, [
          i("div", tS, [
            i("div", null, [
              S[12] || (S[12] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ee(i("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": S[3] || (S[3] = (F) => y.value.name = F),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [ye, y.value.name]
              ])
            ]),
            i("div", null, [
              S[13] || (S[13] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ee(i("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": S[4] || (S[4] = (F) => y.value.trigger_event = F),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (E(!0), C(me, null, Ne(O(Fn), (F) => (E(), C("option", {
                  key: F.id,
                  value: F.eventClass
                }, U(F.label), 9, nS))), 128))
              ], 512), [
                [tt, y.value.trigger_event]
              ])
            ]),
            i("div", null, [
              S[14] || (S[14] = i("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              X(fr, {
                modelValue: y.value.product_ids,
                "onUpdate:modelValue": S[5] || (S[5] = (F) => y.value.product_ids = F),
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
              onClick: w
            }, " Criar fluxo em branco ", 8, oS),
            i("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: S[6] || (S[6] = (F) => m.value = !1)
            }, " Cancelar ")
          ])
        ])) : te("", !0),
        a.value ? (E(), C("p", aS, U(a.value), 1)) : s.value ? (E(), C("p", sS, U(s.value), 1)) : te("", !0),
        r.value ? (E(), C("div", iS, [
          X(O(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          S[15] || (S[15] = i("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (E(), C("div", cS, [
          (E(!0), C(me, null, Ne(p.value, (F) => (E(), C("div", {
            key: F.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            i("div", null, [
              i("div", dS, [
                i("div", null, [
                  i("span", fS, U(O(Uo)(F.trigger_event)), 1),
                  i("h3", pS, U(F.name), 1)
                ]),
                i("button", {
                  type: "button",
                  class: W(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", F.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: F.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (P) => v(F)
                }, [
                  i("span", {
                    class: W(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", F.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, hS)
              ]),
              i("div", mS, [
                i("span", vS, U(b(F.product_ids)), 1)
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
                  X(O(sf), { class: "h-4 w-4" })
                ], 8, bS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (P) => k(F)
                }, [
                  X(O(Jd), { class: "h-4 w-4" })
                ], 8, xS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (P) => L(F)
                }, [
                  X(O(Zo), { class: "h-4 w-4" })
                ], 8, wS),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (P) => T(F)
                }, [
                  X(O(Ct), { class: "h-4 w-4" })
                ], 8, _S),
                i("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (P) => M(F)
                }, [
                  X(O(Qd), { class: "h-4 w-4" })
                ], 8, kS)
              ]),
              i("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (P) => c.value = F
              }, [
                X(O(nf), { class: "h-3.5 w-3.5" }),
                S[18] || (S[18] = i("span", null, "Editar Visual", -1))
              ], 8, SS)
            ])
          ]))), 128))
        ])) : (E(), C("div", lS, [
          i("div", uS, [
            X(O(Un), { class: "h-6 w-6" })
          ]),
          S[16] || (S[16] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          S[17] || (S[17] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (E(), Oe(Pp, {
        key: 0,
        flow: c.value,
        onClose: S[7] || (S[7] = (F) => c.value = null),
        onSaved: z
      }, null, 8, ["flow"])) : te("", !0),
      f.value ? (E(), Oe(v5, {
        key: 1,
        flow: f.value,
        onClose: S[8] || (S[8] = (F) => f.value = null),
        onSaved: z
      }, null, 8, ["flow"])) : te("", !0),
      g.value ? (E(), Oe(j5, {
        key: 2,
        flow: g.value,
        onClose: S[9] || (S[9] = (F) => g.value = null),
        onTested: $
      }, null, 8, ["flow"])) : te("", !0)
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
    ], n = G([]), r = G([]), o = G({ all: 0, buyers: 0, imported: 0 }), a = G(!0), s = G(""), l = G(""), d = G("all"), u = G([]), c = G("or"), f = G([]), g = G(""), y = G(!1), m = J(() => r.value.map(($) => ({ value: $.name, label: $.name }))), p = J(() => {
      const $ = g.value.trim().toLowerCase();
      return n.value.filter((w) => d.value === "buyer" && w.source !== "buyer" || d.value === "imported" && w.source !== "imported" || u.value.length && !(c.value === "and" ? u.value.every((k) => w.products.includes(k)) : w.products.some((k) => u.value.includes(k))) || f.value.length && w.products.some((v) => f.value.includes(v)) ? !1 : !$ || `${w.name} ${w.phone} ${w.email}`.toLowerCase().includes($));
    });
    async function h() {
      a.value = !0, s.value = "";
      try {
        const [$, w] = await Promise.all([$e.contacts(), $e.products()]);
        n.value = $.contacts || [], o.value = $.counts || o.value, r.value = w.products || [];
      } catch ($) {
        s.value = $.message;
      } finally {
        a.value = !1;
      }
    }
    Ke(h);
    const b = "\uFEFF";
    function z() {
      const $ = t.map((L) => L.join(",")).join(`\r
`), w = new Blob([b + $], { type: "text/csv;charset=utf-8" }), v = URL.createObjectURL(w), k = document.createElement("a");
      k.href = v, k.download = "zaprei-modelo-importacao.csv", k.click(), URL.revokeObjectURL(v);
    }
    async function _($) {
      const w = $.target.files?.[0];
      if (w) {
        y.value = !0, s.value = "", l.value = "";
        try {
          const { imported: v } = await $e.importContacts(w);
          l.value = `${v} contato(s) importado(s).`, await h();
        } catch (v) {
          s.value = v.message;
        } finally {
          y.value = !1, $.target.value = "";
        }
      }
    }
    async function T($) {
      if (window.confirm(`Remover ${$.name}?`)) {
        s.value = "";
        try {
          await $e.deleteContact($.id), await h();
        } catch (w) {
          s.value = w.message;
        }
      }
    }
    return ($, w) => (E(), C("div", zS, [
      i("div", $S, [
        w[6] || (w[6] = i("div", null, [
          i("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        i("div", PS, [
          i("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: z
          }, [
            X(O(Qd), { class: "h-4 w-4" }),
            w[5] || (w[5] = i("span", null, "Baixar exemplo", -1))
          ]),
          i("label", {
            class: W(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            X(O(lf), { class: "h-4 w-4" }),
            i("span", null, U(y.value ? "Importando…" : "Importar CSV"), 1),
            i("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: _
            }, null, 40, CS)
          ], 2)
        ])
      ]),
      i("div", AS, [
        i("div", TS, [
          i("div", OS, U(o.value.all), 1),
          w[7] || (w[7] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        i("div", NS, [
          i("div", RS, U(o.value.buyers), 1),
          w[8] || (w[8] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        i("div", IS, [
          i("div", MS, U(o.value.imported), 1),
          w[9] || (w[9] = i("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      i("div", DS, [
        i("div", null, [
          w[11] || (w[11] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ee(i("select", {
            "onUpdate:modelValue": w[0] || (w[0] = (v) => d.value = v),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [...w[10] || (w[10] = [
            i("option", { value: "all" }, "Todas as origens", -1),
            i("option", { value: "buyer" }, "Apenas compradores", -1),
            i("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [tt, d.value]
          ])
        ]),
        i("div", FS, [
          w[12] || (w[12] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          X(fr, {
            modelValue: u.value,
            "onUpdate:modelValue": w[1] || (w[1] = (v) => u.value = v),
            mode: c.value,
            "onUpdate:mode": w[2] || (w[2] = (v) => c.value = v),
            options: m.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        i("div", BS, [
          w[13] || (w[13] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          X(fr, {
            modelValue: f.value,
            "onUpdate:modelValue": w[3] || (w[3] = (v) => f.value = v),
            options: m.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ee(i("input", {
          "onUpdate:modelValue": w[4] || (w[4] = (v) => g.value = v),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [ye, g.value]
        ]),
        i("span", LS, U(p.value.length) + " de " + U(n.value.length) + " contato(s)", 1)
      ]),
      w[17] || (w[17] = i("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        ke(" O CSV aceita as colunas "),
        i("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        ke(" (máximo de 10 MB). ")
      ], -1)),
      s.value ? (E(), C("p", US, U(s.value), 1)) : l.value ? (E(), C("p", VS, U(l.value), 1)) : te("", !0),
      a.value ? (E(), C("div", qS, [
        X(O(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        w[14] || (w[14] = i("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? (E(), C("div", GS, [
        i("table", WS, [
          w[16] || (w[16] = i("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
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
            (E(!0), C(me, null, Ne(p.value, (v) => (E(), C("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", YS, U(v.name), 1),
              i("td", KS, U(v.phone), 1),
              i("td", ZS, U(v.email || "—"), 1),
              i("td", JS, [
                i("span", {
                  class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, U(v.origin), 3)
              ]),
              i("td", QS, [
                v.products.length ? (E(), C("div", eE, [
                  (E(!0), C(me, null, Ne(v.products.slice(0, 2), (k) => (E(), C("span", {
                    key: k,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: k
                  }, U(k), 9, tE))), 128)),
                  v.products.length > 2 ? (E(), C("span", nE, "+" + U(v.products.length - 2), 1)) : te("", !0)
                ])) : (E(), C("span", rE, "—"))
              ]),
              i("td", oE, [
                v.can_delete ? (E(), C("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (k) => T(v)
                }, [
                  X(O(Zo), { class: "h-3.5 w-3.5" })
                ], 8, aE)) : te("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (E(), C("div", jS, [
        i("div", HS, [
          X(O(Nn), { class: "h-6 w-6" })
        ]),
        w[15] || (w[15] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
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
    const n = t, r = G(1), o = G(!1), a = G(""), s = G([]), l = G([]), d = G([]), u = G(!1), c = G("all"), f = G([]), g = G("or"), y = G([]), m = G(""), p = G({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), h = J(() => d.value.find((R) => R.id === p.value.flow_id)), b = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), z = gp.filter((R) => R.token.startsWith("{{customer."));
    let _ = !0;
    Ie(() => p.value.message_data.mode, (R) => {
      if (_) {
        _ = !1;
        return;
      }
      Object.assign(p.value.message_data, kp(R));
    });
    const T = J(() => l.value.map((R) => ({ value: R.name, label: R.name }))), $ = J(() => {
      const R = m.value.trim().toLowerCase();
      return s.value.filter((x) => c.value === "buyers" && x.source !== "buyer" || c.value === "imported" && x.source !== "imported" || f.value.length && !(g.value === "and" ? f.value.every((Q) => x.products.includes(Q)) : x.products.some((Q) => f.value.includes(Q))) || y.value.length && x.products.some((V) => y.value.includes(V)) ? !1 : !R || `${x.name} ${x.phone}`.toLowerCase().includes(R));
    }), w = J(() => $.value.length > 0 && $.value.every((R) => p.value.selected_contact_keys.includes(R.id)));
    function v(R) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(R) ? x.filter((V) => V !== R) : [...x, R];
    }
    function k() {
      const R = $.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...R])];
    }
    function L() {
      const R = new Set($.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !R.has(x));
    }
    const M = J(() => s.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), I = J(() => ({
      customer: { name: M.value.name, first_name: (M.value.name || "").split(" ")[0] || M.value.name }
    })), A = J(() => {
      const R = p.value.message_data;
      return Di(R.text || R.question || R.title || "", I.value);
    }), q = J(() => Di(p.value.message_data.caption || "", I.value));
    async function S() {
      u.value = !0;
      try {
        const [R, x, V] = await Promise.all([
          $e.contacts(),
          $e.products(),
          $e.flows()
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
        await $e.createCampaign({
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
    return Ke(S), (R, x) => (E(), C("div", iE, [
      i("div", lE, [
        i("div", uE, [
          i("div", cE, [
            i("div", dE, [
              X(O(Ct), { class: "h-5 w-5" })
            ]),
            x[17] || (x[17] = i("div", null, [
              i("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              i("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          i("div", fE, [
            (E(), C(me, null, Ne(4, (V) => i("div", {
              key: V,
              class: W(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === V ? "bg-emerald-500 text-zinc-950" : r.value > V ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > V ? (E(), Oe(O(Zd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (E(), C("span", pE, U(V), 1))
            ], 2)), 64))
          ])
        ]),
        a.value ? (E(), C("div", hE, [
          X(O(_a), { class: "h-4 w-4 shrink-0" }),
          i("span", null, U(a.value), 1)
        ])) : te("", !0),
        i("div", mE, [
          r.value === 1 ? (E(), C("div", vE, [
            i("div", null, [
              x[18] || (x[18] = i("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ee(i("input", {
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
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (V) => p.value.action_type = "message")
                }, [
                  i("div", bE, [
                    X(O(Ct), { class: "h-4 w-4 text-emerald-400" }),
                    x[20] || (x[20] = i("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  x[21] || (x[21] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (V) => p.value.action_type = "flow")
                }, [
                  i("div", xE, [
                    X(O(Ir), { class: "h-4 w-4 text-emerald-400" }),
                    x[22] || (x[22] = i("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  x[23] || (x[23] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? (E(), C("div", wE, [
                i("label", _E, [
                  X(O(Ir), { class: "h-3.5 w-3.5" }),
                  x[24] || (x[24] = i("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                ee(i("select", {
                  "onUpdate:modelValue": x[3] || (x[3] = (V) => p.value.flow_id = V),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  x[25] || (x[25] = i("option", { value: null }, "Selecione um fluxo...", -1)),
                  (E(!0), C(me, null, Ne(d.value, (V) => (E(), C("option", {
                    key: V.id,
                    value: V.id
                  }, U(V.name) + " (" + U(V.trigger_event || "Personalizado") + ") ", 9, kE))), 128))
                ], 512), [
                  [tt, p.value.flow_id]
                ]),
                x[26] || (x[26] = i("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : te("", !0)
            ]),
            i("div", SE, [
              x[34] || (x[34] = i("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              i("div", EE, [
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[4] || (x[4] = (V) => p.value.schedule_mode = "immediate")
                }, [
                  i("div", zE, [
                    X(O(Un), { class: "h-4 w-4 text-emerald-400" }),
                    x[28] || (x[28] = i("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[29] || (x[29] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                i("button", {
                  type: "button",
                  class: W(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[5] || (x[5] = (V) => p.value.schedule_mode = "scheduled")
                }, [
                  i("div", $E, [
                    X(O(ns), { class: "h-4 w-4 text-emerald-400" }),
                    x[30] || (x[30] = i("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[31] || (x[31] = i("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (E(), C("div", PE, [
                i("label", CE, [
                  X(O(ir), { class: "h-3.5 w-3.5" }),
                  x[32] || (x[32] = i("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ee(i("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (V) => p.value.scheduled_at = V),
                  type: "datetime-local",
                  min: b.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, AE), [
                  [ye, p.value.scheduled_at]
                ]),
                x[33] || (x[33] = i("p", { class: "text-[11px] text-zinc-400" }, [
                  ke(" A campanha ficará com status "),
                  i("strong", { class: "text-purple-400" }, "Agendada"),
                  ke(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : te("", !0)
            ]),
            i("div", TE, [
              i("div", OE, [
                i("div", NE, [
                  X(O(Ih), { class: "h-4 w-4 text-emerald-400" }),
                  x[35] || (x[35] = i("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                i("span", RE, U(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ee(i("input", {
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
          ])) : r.value === 2 ? (E(), C("div", IE, [
            i("div", ME, [
              i("div", DE, [
                i("div", null, [
                  x[37] || (x[37] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  X(fr, {
                    modelValue: f.value,
                    "onUpdate:modelValue": x[8] || (x[8] = (V) => f.value = V),
                    mode: g.value,
                    "onUpdate:mode": x[9] || (x[9] = (V) => g.value = V),
                    options: T.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                i("div", null, [
                  x[38] || (x[38] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  X(fr, {
                    modelValue: y.value,
                    "onUpdate:modelValue": x[10] || (x[10] = (V) => y.value = V),
                    options: T.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[39] || (x[39] = i("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              i("div", null, [
                x[41] || (x[41] = i("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ee(i("select", {
                  "onUpdate:modelValue": x[11] || (x[11] = (V) => c.value = V),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[40] || (x[40] = [
                  i("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  i("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  i("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [tt, c.value]
                ]),
                x[42] || (x[42] = i("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                i("div", FE, [
                  X(O(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ee(i("input", {
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
                    ke(U(p.value.selected_contact_keys.length) + " ", 1),
                    i("span", UE, "de " + U($.value.length) + " filtrados", 1)
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
                        checked: w.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[13] || (x[13] = (V) => w.value ? L() : k())
                      }, null, 40, GE)
                    ]),
                    x[45] || (x[45] = i("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[46] || (x[46] = i("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[47] || (x[47] = i("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[48] || (x[48] = i("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                i("tbody", WE, [
                  (E(!0), C(me, null, Ne($.value, (V) => (E(), C("tr", {
                    key: V.id,
                    class: W(["cursor-pointer transition", p.value.selected_contact_keys.includes(V.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (Q) => v(V.id)
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
                        onChange: (Q) => v(V.id)
                      }, null, 40, YE)
                    ]),
                    i("td", KE, [
                      i("div", ZE, U(V.name), 1),
                      i("div", JE, U(V.email || "-"), 1)
                    ]),
                    i("td", QE, U(V.phone), 1),
                    i("td", ez, [
                      i("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", V.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, U(V.origin), 3)
                    ]),
                    i("td", tz, [
                      i("div", nz, [
                        (E(!0), C(me, null, Ne(V.products.slice(0, 2), (Q) => (E(), C("span", {
                          key: Q,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, U(Q), 1))), 128)),
                        V.products.length > 2 ? (E(), C("span", rz, "+" + U(V.products.length - 2), 1)) : te("", !0)
                      ])
                    ])
                  ], 10, XE))), 128))
                ])
              ]),
              u.value ? (E(), C("p", oz, "Carregando contatos...")) : $.value.length ? te("", !0) : (E(), C("p", az, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (E(), C("div", sz, [
            p.value.action_type === "flow" ? (E(), C("div", iz, [
              i("div", lz, [
                i("div", uz, [
                  i("div", cz, [
                    X(O(Ir), { class: "h-6 w-6" })
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
                      class: W(["rounded-full px-2 py-0.5 text-[10px] font-semibold", h.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, U(h.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                x[53] || (x[53] = i("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : (E(), C("div", yz, [
              i("div", bz, [
                X(zp, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: O(z)
                }, null, 8, ["data", "variables"])
              ]),
              i("div", null, [
                x[54] || (x[54] = i("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                X(gl, {
                  text: A.value,
                  caption: q.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": M.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? (E(), C("div", xz, [
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
                    class: W(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (E(), Oe(Rt(p.value.schedule_mode === "scheduled" ? O(ns) : O(Un)), { class: "h-3.5 w-3.5" })),
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
                p.value.action_type === "flow" ? (E(), C("div", $z, " ⚡ " + U(h.value?.name || "Fluxo selecionado"), 1)) : (E(), C("div", Pz, U(A.value || q.value || "—"), 1))
              ])
            ])
          ])) : te("", !0)
        ]),
        i("div", Cz, [
          r.value > 1 ? (E(), C("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[15] || (x[15] = (V) => r.value--)
          }, [
            X(O(Yd), { class: "mr-2 h-4 w-4" }),
            x[60] || (x[60] = i("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (E(), C("div", Az)),
          i("div", Tz, [
            i("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[16] || (x[16] = (V) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (E(), C("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: F
            }, [
              x[61] || (x[61] = i("span", null, "Próximo", -1)),
              X(O(zh), { class: "ml-2 h-4 w-4" })
            ])) : (E(), C("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: W(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: P
            }, [
              o.value ? (E(), Oe(O(Dt), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (E(), Oe(Rt(p.value.schedule_mode === "scheduled" ? O(ns) : O(Ct)), {
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
      return a.value.filter((b) => c.value && b.status !== c.value ? !1 : !h || `${b.name || ""} ${b.phone}`.toLowerCase().includes(h));
    }), g = (h) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[h] || "border-blue-500/20 bg-blue-500/10 text-blue-400", y = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const h = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(h / o.value.total_recipients * 100));
    });
    async function m() {
      s.value = !0, d.value = "";
      try {
        const h = await $e.campaign(n.campaignId);
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
        await $e.cancelCampaign(n.campaignId), r("changed"), await m();
      } catch (h) {
        d.value = h.message;
      } finally {
        l.value = !1;
      }
    }
    return Ke(m), (h, b) => (E(), C("div", Rz, [
      i("div", Iz, [
        i("div", Mz, [
          i("div", Dz, [
            i("div", Fz, [
              X(O(Hr), { class: "h-5 w-5" })
            ]),
            i("div", null, [
              i("div", Bz, U(o.value?.name || "Campanha"), 1),
              i("p", Lz, [
                i("span", null, U(o.value ? O(Ep)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? (E(), C("span", Uz, " • " + U(o.value.message), 1)) : te("", !0)
              ])
            ])
          ]),
          i("div", Vz, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (E(), C("button", {
              key: 0,
              type: "button",
              disabled: l.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              X(O($h), { class: "h-3.5 w-3.5" }),
              i("span", null, U(l.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, qz)) : te("", !0),
            i("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: b[0] || (b[0] = (z) => r("close"))
            }, [
              X(O(Ot), { class: "h-4 w-4" })
            ])
          ])
        ]),
        s.value ? (E(), C("p", jz, "Carregando detalhes…")) : d.value ? (E(), C("p", Hz, U(d.value), 1)) : o.value ? (E(), C(me, { key: 2 }, [
          i("div", Gz, [
            i("div", Wz, [
              i("div", Xz, [
                o.value.status === "running" ? (E(), C("span", Yz, [...b[3] || (b[3] = [
                  i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  i("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : te("", !0),
                i("span", Kz, U(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              i("span", Zz, U(y.value) + "%", 1)
            ]),
            i("div", Jz, [
              i("div", {
                class: W(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${y.value}%` })
              }, null, 6)
            ]),
            i("div", Qz, [
              i("span", null, U(o.value.sent_count) + " de " + U(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (E(), C("span", e$, " 🛡️ Intervalo randômico (jitter) ativo ")) : te("", !0)
            ])
          ]),
          i("div", t$, [
            i("div", n$, [
              b[4] || (b[4] = i("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              i("div", r$, U(o.value.total_recipients), 1)
            ]),
            i("div", o$, [
              b[5] || (b[5] = i("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              i("div", a$, U(o.value.sent_count), 1)
            ]),
            i("div", s$, [
              b[6] || (b[6] = i("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              i("div", i$, U(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            i("div", l$, [
              b[7] || (b[7] = i("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              i("div", u$, U(o.value.error_count), 1)
            ])
          ]),
          i("div", c$, [
            i("div", d$, [
              X(O(Hr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ee(i("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (z) => u.value = z),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [ye, u.value]
              ])
            ]),
            ee(i("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (z) => c.value = z),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...b[8] || (b[8] = [
              jd('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [tt, c.value]
            ])
          ]),
          i("div", f$, [
            f.value.length ? (E(), C("div", h$, [
              i("table", m$, [
                b[9] || (b[9] = i("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  i("tr", null, [
                    i("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    i("th", { class: "px-4 py-2.5" }, "Telefone"),
                    i("th", { class: "px-4 py-2.5" }, "Status"),
                    i("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                i("tbody", v$, [
                  (E(!0), C(me, null, Ne(f.value, (z) => (E(), C("tr", {
                    key: z.id
                  }, [
                    i("td", g$, [
                      i("div", y$, U(z.name || "—"), 1),
                      z.error_message ? (E(), C("div", {
                        key: 0,
                        title: z.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, U(z.error_message), 9, b$)) : te("", !0)
                    ]),
                    i("td", x$, U(z.phone), 1),
                    i("td", w$, [
                      i("span", {
                        class: W(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", g(z.status)])
                      }, U(O(iw)[z.status] || z.status), 3)
                    ]),
                    i("td", _$, U(z.sent_at ? new Date(z.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (E(), C("div", p$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : te("", !0)
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
        t.value = (await $e.campaigns()).campaigns || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    return Ke(u), (c, f) => (E(), C("div", S$, [
      i("div", E$, [
        i("div", z$, [
          X(O(Hr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ee(i("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (g) => o.value = g),
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
          onClick: f[1] || (f[1] = (g) => a.value = !0)
        }, [
          X(O(of), { class: "h-4 w-4" }),
          f[4] || (f[4] = i("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (E(), C("p", $$, U(r.value), 1)) : te("", !0),
      n.value ? (E(), C("div", P$, [
        X(O(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = i("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : d.value.length ? (E(), C("div", T$, [
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
            (E(!0), C(me, null, Ne(d.value, (g) => (E(), C("tr", {
              key: g.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              i("td", R$, U(g.name), 1),
              i("td", I$, [
                i("span", {
                  class: W(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", l(g.status)])
                }, [
                  g.status === "running" ? (E(), C("span", M$, [...f[7] || (f[7] = [
                    i("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    i("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : te("", !0),
                  ke(" " + U(O(Ep)[g.status] || g.status), 1)
                ], 2)
              ]),
              i("td", D$, U(g.total_recipients), 1),
              i("td", F$, [
                i("div", B$, [
                  i("span", L$, U(g.sent_count) + "/" + U(g.total_recipients), 1),
                  i("div", U$, [
                    i("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${g.total_recipients ? Math.min(100, Math.round(g.sent_count / g.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              i("td", {
                class: W(["px-3 py-2.5", g.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, U(g.error_count), 3),
              i("td", V$, U(g.scheduled_at ? new Date(g.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              i("td", q$, [
                i("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => s.value = g.id
                }, [
                  X(O(Ch), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = i("span", null, "Detalhes", -1))
                ], 8, j$)
              ])
            ]))), 128))
          ])
        ])
      ])) : (E(), C("div", C$, [
        i("div", A$, [
          X(O(Ct), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = i("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      a.value ? (E(), Oe(Nz, {
        key: 4,
        onClose: f[2] || (f[2] = (g) => a.value = !1),
        onCreated: u
      })) : te("", !0),
      s.value ? (E(), Oe(k$, {
        key: 5,
        "campaign-id": s.value,
        onClose: f[3] || (f[3] = (g) => s.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : te("", !0)
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
        t.value = (await $e.runs()).runs || [];
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
          await $e.retryRun(c.id), o.value = `Execução #${c.id} reiniciada.`, await d();
        } catch (f) {
          r.value = f.message;
        } finally {
          a.value = null;
        }
      }
    }
    return Ke(d), (c, f) => (E(), C("div", G$, [
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
      r.value ? (E(), C("p", Y$, U(r.value), 1)) : o.value ? (E(), C("p", K$, U(o.value), 1)) : te("", !0),
      n.value ? (E(), C("div", Z$, [
        X(O(Dt), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = i("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (E(), C("div", e3, [
        (E(!0), C(me, null, Ne(t.value, (g) => (E(), C("div", {
          key: g.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          i("div", t3, [
            i("span", {
              class: W(["h-2 w-2 rounded-full", s(g.status)])
            }, null, 2),
            i("div", null, [
              i("div", n3, "Fluxo #" + U(g.flow_id), 1),
              i("div", r3, U(O(Uo)(g.event_class)) + " • " + U(new Date(g.created_at).toLocaleString("pt-BR")), 1),
              g.context?.last_reply ? (E(), C("div", o3, [
                X(O(Th), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                i("span", {
                  class: "max-w-md truncate",
                  title: g.context.last_reply
                }, "Cliente respondeu: “" + U(g.context.last_reply) + "”", 9, a3)
              ])) : te("", !0),
              g.last_error ? (E(), C("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: g.last_error
              }, U(g.last_error), 9, s3)) : te("", !0)
            ])
          ]),
          i("div", i3, [
            g.status === "failed" ? (E(), C("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: a.value === g.id,
              onClick: (y) => u(g)
            }, [
              X(O(Nh), {
                class: W(["h-3 w-3", { "animate-spin": a.value === g.id }])
              }, null, 8, ["class"]),
              i("span", null, U(a.value === g.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, l3)) : te("", !0),
            i("span", {
              class: W(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", l(g.status)])
            }, U(O(lw)[g.status] || g.status), 3)
          ])
        ]))), 128))
      ])) : (E(), C("div", J$, [
        i("div", Q$, [
          X(O(ef), { class: "h-6 w-6" })
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
}, w3 = { class: "space-y-6 lg:col-span-7" }, _3 = { class: "rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, k3 = { class: "flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white" }, S3 = { class: "mt-6 space-y-4" }, E3 = { class: "mt-1.5 grid grid-cols-2 gap-2" }, z3 = { key: 0 }, $3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, P3 = {
  key: 1,
  class: "space-y-2"
}, C3 = { class: "flex items-center justify-between" }, A3 = { class: "flex items-center gap-2" }, T3 = ["disabled"], O3 = { key: 0 }, N3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, R3 = ["value"], I3 = { key: 1 }, M3 = { class: "flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, D3 = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, F3 = { class: "pt-2 border-t border-zinc-100 dark:border-zinc-800" }, B3 = { class: "flex items-center justify-between" }, L3 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, U3 = {
  key: 0,
  class: "mt-3 space-y-2"
}, V3 = { class: "flex flex-wrap gap-1.5" }, q3 = ["title", "onClick"], j3 = { class: "flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center" }, H3 = ["disabled"], G3 = ["disabled"], W3 = {
  key: 0,
  class: "grid grid-cols-3 gap-3"
}, X3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, Y3 = { class: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400" }, K3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, Z3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, J3 = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, Q3 = { class: "mt-1 text-sm font-black text-zinc-900 dark:text-white" }, e4 = { class: "lg:col-span-5" }, t4 = { class: "overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800" }, n4 = { class: "flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white" }, r4 = { class: "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs" }, o4 = { key: 1 }, a4 = { class: "flex-1" }, s4 = { class: "text-xs font-bold leading-tight" }, i4 = { class: "text-[10px] text-white/70" }, l4 = { class: "min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]" }, u4 = { class: "max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100" }, c4 = { class: "font-sans whitespace-pre-wrap select-text" }, d4 = { class: "mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400" }, f4 = { class: "border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400" }, p4 = {
  __name: "DailyReportPanel",
  setup(e) {
    const t = G(!0), n = G(!1), r = G(!1), o = G(!1), a = G(""), s = G(""), l = G(""), d = G(""), u = G(null), c = G(!1), f = G([]), g = G("list"), y = vr({
      enabled: !1,
      time: "23:59",
      recipient_type: "phone",
      // 'phone' | 'group'
      phone: "",
      group_id: "",
      custom_template: ""
    }), m = [
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
    async function p() {
      o.value = !0;
      try {
        const w = await $e.groups();
        f.value = w.groups || [], f.value.length === 0 && (g.value = "manual");
      } catch {
        f.value = [], g.value = "manual";
      } finally {
        o.value = !1;
      }
    }
    async function h() {
      t.value = !0, a.value = "";
      try {
        const w = await $e.dailyReport();
        y.enabled = !!w.config?.enabled, y.time = w.config?.time || "23:59", y.recipient_type = w.config?.recipient_type || "phone", y.phone = w.config?.phone || "", y.group_id = w.config?.group_id || "", y.custom_template = w.config?.custom_template || "", c.value = !!w.config?.custom_template, d.value = w.preview || "", u.value = w.data || null, await p();
      } catch (w) {
        a.value = w.message || "Falha ao carregar configurações do relatório.";
      } finally {
        t.value = !1;
      }
    }
    async function b() {
      n.value = !0, a.value = "", s.value = "";
      try {
        const w = await $e.saveDailyReport({
          enabled: y.enabled,
          time: y.time,
          recipient_type: y.recipient_type,
          phone: y.phone,
          group_id: y.group_id,
          custom_template: c.value ? y.custom_template : null
        });
        d.value = w.preview || d.value, s.value = "Configurações do relatório diário salvas com sucesso!", setTimeout(() => {
          s.value = "";
        }, 5e3);
      } catch (w) {
        a.value = w.message || "Erro ao salvar configurações.";
      } finally {
        n.value = !1;
      }
    }
    async function z() {
      if (y.recipient_type === "group") {
        if (!y.group_id) {
          a.value = "Selecione ou informe o JID do grupo do WhatsApp antes de testar.";
          return;
        }
      } else if (!y.phone) {
        a.value = "Informe o número do WhatsApp de destino antes de testar.";
        return;
      }
      r.value = !0, a.value = "", l.value = "";
      try {
        const w = await $e.testDailyReport({
          recipient_type: y.recipient_type,
          phone: y.phone,
          group_id: y.group_id
        });
        l.value = w.message || "Relatório de teste enviado para o WhatsApp!", w.preview && (d.value = w.preview), setTimeout(() => {
          l.value = "";
        }, 8e3);
      } catch (w) {
        a.value = w.message || "Falha ao disparar relatório de teste.";
      } finally {
        r.value = !1;
      }
    }
    function _(w) {
      y.custom_template = (y.custom_template || "") + " " + w;
    }
    const T = J(() => (d.value || "").split(`
`)), $ = J(() => {
      if (y.recipient_type !== "group") return "";
      const w = f.value.find((v) => v.id === y.group_id);
      return w ? w.name : y.group_id || "Grupo de Vendas";
    });
    return Ke(h), (w, v) => (E(), C("div", c3, [
      i("div", d3, [
        i("div", f3, [
          i("div", p3, [
            X(O(Kd), { class: "h-7 w-7" })
          ]),
          v[10] || (v[10] = i("div", null, [
            i("h2", { class: "text-xl font-bold tracking-tight text-zinc-900 dark:text-white" }, "Relatório Diário de Vendas no WhatsApp"),
            i("p", { class: "text-xs text-zinc-600 dark:text-zinc-400" }, " Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas para o seu número ou para um grupo da sua equipe. ")
          ], -1))
        ]),
        i("div", h3, [
          i("span", {
            class: W(["text-xs font-semibold", y.enabled ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-500"])
          }, U(y.enabled ? "● Envio Ativo" : "○ Envio Desativado"), 3),
          i("label", m3, [
            ee(i("input", {
              "onUpdate:modelValue": v[0] || (v[0] = (k) => y.enabled = k),
              type: "checkbox",
              class: "peer sr-only",
              onChange: b
            }, null, 544), [
              [An, y.enabled]
            ]),
            v[11] || (v[11] = i("div", { class: "peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700" }, null, -1))
          ])
        ])
      ]),
      s.value ? (E(), C("div", v3, [
        X(O(jr), { class: "h-5 w-5 shrink-0" }),
        i("span", null, U(s.value), 1)
      ])) : te("", !0),
      l.value ? (E(), C("div", g3, [
        X(O(Ct), { class: "h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" }),
        i("span", null, U(l.value), 1)
      ])) : te("", !0),
      a.value ? (E(), C("div", y3, [
        X(O(_a), { class: "h-5 w-5 shrink-0" }),
        i("span", null, U(a.value), 1)
      ])) : te("", !0),
      t.value ? (E(), C("div", b3, [
        X(O(Dt), { class: "h-8 w-8 animate-spin text-emerald-500" })
      ])) : (E(), C("div", x3, [
        i("div", w3, [
          i("div", _3, [
            i("h3", k3, [
              X(O(ir), { class: "h-4 w-4 text-emerald-500" }),
              v[12] || (v[12] = ke(" Agendamento & Destino ", -1))
            ]),
            v[27] || (v[27] = i("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Defina o horário e para quem o relatório diário consolidado será entregue (número ou grupo). ", -1)),
            i("div", S3, [
              i("div", null, [
                v[15] || (v[15] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Enviar Para * ", -1)),
                i("div", E3, [
                  i("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", y.recipient_type === "phone" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: v[1] || (v[1] = (k) => y.recipient_type = "phone")
                  }, [
                    X(O(Ql), { class: "h-3.5 w-3.5" }),
                    v[13] || (v[13] = i("span", null, "Número Individual", -1))
                  ], 2),
                  i("button", {
                    type: "button",
                    class: W(["flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition", y.recipient_type === "group" ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"]),
                    onClick: v[2] || (v[2] = () => {
                      y.recipient_type = "group", f.value.length || p();
                    })
                  }, [
                    X(O(Nn), { class: "h-3.5 w-3.5" }),
                    v[14] || (v[14] = i("span", null, "Grupo do WhatsApp", -1))
                  ], 2)
                ])
              ]),
              y.recipient_type === "phone" ? (E(), C("div", z3, [
                v[16] || (v[16] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " WhatsApp de Destino * ", -1)),
                i("div", $3, [
                  X(O(Ql), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ee(i("input", {
                    "onUpdate:modelValue": v[3] || (v[3] = (k) => y.phone = k),
                    type: "text",
                    placeholder: "Ex: 5511999998888 ou 11999998888",
                    class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, y.phone]
                  ])
                ]),
                v[17] || (v[17] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Seu próprio número com DDD. Aceita formato nacional com ou sem o 55. ", -1))
              ])) : (E(), C("div", P3, [
                i("div", C3, [
                  v[20] || (v[20] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Grupo de Destino * ", -1)),
                  i("div", A3, [
                    i("button", {
                      type: "button",
                      class: "flex items-center gap-1 text-[11px] font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400",
                      disabled: o.value,
                      onClick: p
                    }, [
                      X(O(af), {
                        class: W(["h-3 w-3", o.value ? "animate-spin" : ""])
                      }, null, 8, ["class"]),
                      v[18] || (v[18] = i("span", null, "Recarregar Grupos", -1))
                    ], 8, T3),
                    v[19] || (v[19] = i("span", { class: "text-zinc-300 dark:text-zinc-700" }, "|", -1)),
                    i("button", {
                      type: "button",
                      class: "text-[11px] font-semibold text-zinc-600 transition hover:underline dark:text-zinc-400",
                      onClick: v[4] || (v[4] = (k) => g.value = g.value === "list" ? "manual" : "list")
                    }, U(g.value === "list" ? "Digitar JID" : "Escolher da lista"), 1)
                  ])
                ]),
                g.value === "list" && f.value.length > 0 ? (E(), C("div", O3, [
                  i("div", N3, [
                    X(O(Nn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ee(i("select", {
                      "onUpdate:modelValue": v[5] || (v[5] = (k) => y.group_id = k),
                      class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                    }, [
                      v[21] || (v[21] = i("option", { value: "" }, "Selecione um grupo da Evolution GO...", -1)),
                      (E(!0), C(me, null, Ne(f.value, (k) => (E(), C("option", {
                        key: k.id,
                        value: k.id
                      }, U(k.name), 9, R3))), 128))
                    ], 512), [
                      [tt, y.group_id]
                    ])
                  ])
                ])) : (E(), C("div", I3, [
                  i("div", M3, [
                    X(O(Nn), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                    ee(i("input", {
                      "onUpdate:modelValue": v[6] || (v[6] = (k) => y.group_id = k),
                      type: "text",
                      placeholder: "Ex: 120363025244589234@g.us",
                      class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                    }, null, 512), [
                      [ye, y.group_id]
                    ])
                  ]),
                  v[22] || (v[22] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                    ke(" Insira o JID oficial do grupo do WhatsApp (terminado em "),
                    i("code", null, "@g.us"),
                    ke("). ")
                  ], -1))
                ]))
              ])),
              i("div", null, [
                v[23] || (v[23] = i("label", { class: "block text-xs font-semibold text-zinc-700 dark:text-zinc-300" }, " Horário de Disparo Diário * ", -1)),
                i("div", D3, [
                  X(O(ir), { class: "mr-2.5 h-4 w-4 text-zinc-400" }),
                  ee(i("input", {
                    "onUpdate:modelValue": v[7] || (v[7] = (k) => y.time = k),
                    type: "time",
                    class: "w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                  }, null, 512), [
                    [ye, y.time]
                  ])
                ]),
                v[24] || (v[24] = i("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                  ke(" Padrão sugerido: "),
                  i("strong", null, "23:59"),
                  ke(" (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia. ")
                ], -1))
              ]),
              i("div", F3, [
                i("div", B3, [
                  i("div", null, [
                    v[25] || (v[25] = i("label", { class: "text-xs font-semibold text-zinc-800 dark:text-zinc-200" }, "Personalizar texto da mensagem", -1)),
                    i("p", L3, U(c.value ? "Modo personalizado ativo" : "Usando modelo visual oficial do ZapRei"), 1)
                  ]),
                  i("button", {
                    type: "button",
                    class: "text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400",
                    onClick: v[8] || (v[8] = (k) => c.value = !c.value)
                  }, U(c.value ? "Usar Modelo Padrão" : "Editar Texto"), 1)
                ]),
                c.value ? (E(), C("div", U3, [
                  i("div", V3, [
                    (E(), C(me, null, Ne(m, (k) => i("button", {
                      key: k.tag,
                      type: "button",
                      class: "rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400",
                      title: k.label,
                      onClick: (L) => _(k.tag)
                    }, U(k.tag), 9, q3)), 64))
                  ]),
                  ee(i("textarea", {
                    "onUpdate:modelValue": v[9] || (v[9] = (k) => y.custom_template = k),
                    rows: "10",
                    placeholder: "Digite o texto personalizado para o relatório...",
                    class: "w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                  }, null, 512), [
                    [ye, y.custom_template]
                  ])
                ])) : te("", !0)
              ]),
              i("div", j3, [
                i("button", {
                  type: "button",
                  disabled: n.value,
                  class: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50",
                  onClick: b
                }, [
                  n.value ? (E(), Oe(O(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin"
                  })) : (E(), Oe(O(jr), {
                    key: 1,
                    class: "h-4 w-4"
                  })),
                  v[26] || (v[26] = ke(" Salvar Configurações ", -1))
                ], 8, H3),
                i("button", {
                  type: "button",
                  disabled: r.value || (y.recipient_type === "group" ? !y.group_id : !y.phone),
                  class: "flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  onClick: z
                }, [
                  r.value ? (E(), Oe(O(Dt), {
                    key: 0,
                    class: "h-4 w-4 animate-spin text-emerald-500"
                  })) : (E(), Oe(O(Ct), {
                    key: 1,
                    class: "h-4 w-4 text-emerald-500"
                  })),
                  i("span", null, U(y.recipient_type === "group" ? "Enviar Teste ao Grupo" : "Enviar Teste"), 1)
                ], 8, G3)
              ])
            ])
          ]),
          u.value ? (E(), C("div", W3, [
            i("div", X3, [
              v[28] || (v[28] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Faturamento Hoje", -1)),
              i("div", Y3, U(u.value.total_formatted), 1)
            ]),
            i("div", K3, [
              v[29] || (v[29] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Vendas Aprovadas", -1)),
              i("div", Z3, U(u.value.orders_count), 1)
            ]),
            i("div", J3, [
              v[30] || (v[30] = i("span", { class: "text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase" }, "Order Bumps", -1)),
              i("div", Q3, U(u.value.bumps_count) + " (" + U(u.value.bumps_total_formatted) + ")", 1)
            ])
          ])) : te("", !0)
        ]),
        i("div", e4, [
          i("div", t4, [
            i("div", n4, [
              i("div", r4, [
                y.recipient_type === "group" ? (E(), Oe(O(Nn), {
                  key: 0,
                  class: "h-4 w-4"
                })) : (E(), C("span", o4, "ZR"))
              ]),
              i("div", a4, [
                i("div", s4, U(y.recipient_type === "group" ? $.value : "ZapRei Notificações"), 1),
                i("div", i4, U(y.recipient_type === "group" ? "grupo do WhatsApp" : "relatório diário automático"), 1)
              ]),
              X(O(ol), { class: "h-4 w-4 text-emerald-300" })
            ]),
            i("div", l4, [
              i("div", u4, [
                i("div", c4, [
                  (E(!0), C(me, null, Ne(T.value, (k, L) => (E(), C("div", {
                    key: L,
                    class: "min-h-[1.2em]"
                  }, U(k), 1))), 128))
                ]),
                i("div", d4, [
                  i("span", null, U(y.time || "23:59"), 1),
                  v[31] || (v[31] = i("span", { class: "text-[#53bdeb]" }, "✓✓", -1))
                ])
              ])
            ]),
            i("div", f4, [
              v[32] || (v[32] = ke(" Disparo automático via ", -1)),
              v[33] || (v[33] = i("strong", null, "Evolution GO", -1)),
              ke(" às " + U(y.time), 1)
            ])
          ])
        ])
      ]))
    ]));
  }
}, h4 = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, m4 = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, v4 = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, g4 = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, y4 = { class: "flex flex-wrap items-center gap-3" }, b4 = { class: "text-xs font-bold" }, x4 = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, w4 = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, _4 = { class: "flex items-center justify-between" }, k4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, S4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, E4 = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, z4 = { class: "flex items-center justify-between" }, $4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, P4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, C4 = { class: "flex items-center justify-between" }, A4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, T4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, O4 = { class: "flex items-center justify-between" }, N4 = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, R4 = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, I4 = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, M4 = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, D4 = ["onClick"], F4 = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, B4 = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Un, component: ES },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Ct, component: H$ },
      { id: "daily_report", label: "Relatório Diário", icon: Kd, component: p4 },
      { id: "contacts", label: "Base de Contatos", icon: Nn, component: sE },
      { id: "runs", label: "Execuções", icon: ef, component: u3 },
      { id: "connection", label: "Conexão", icon: rf, component: uf }
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
        r.value = (await $e.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function l() {
      try {
        const [u, c, f, g] = await Promise.all([
          $e.flows().catch(() => ({ flows: [] })),
          $e.campaigns().catch(() => ({ campaigns: [] })),
          $e.contacts().catch(() => ({ counts: {} })),
          $e.runs().catch(() => ({ runs: [] }))
        ]), y = u.flows || [], m = c.campaigns || [], p = g.runs || [], h = f.counts?.all || 0;
        o.value = {
          flows: y.length,
          campaigns: m.length,
          contacts: h
        };
        const b = y.filter((T) => T.is_active).length, z = p.filter((T) => T.status === "completed").length, _ = p.length ? Math.round(z / p.length * 100) : 100;
        a.value = {
          flowsCount: y.length,
          activeFlowsCount: b,
          campaignsCount: m.length,
          contactsCount: h,
          runsCount: p.length,
          runsSuccessRate: _
        };
      } catch {
      }
    }
    const d = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ke(() => {
      s(), l();
    }), (u, c) => (E(), C("div", h4, [
      i("div", m4, [
        i("div", v4, [
          i("div", null, [
            i("div", g4, [
              X(O(tf), { class: "h-3.5 w-3.5" }),
              c[5] || (c[5] = i("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            c[6] || (c[6] = i("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            c[7] || (c[7] = i("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          i("div", y4, [
            i("div", {
              class: W(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              i("div", {
                class: W(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              i("div", null, [
                i("div", b4, U(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                i("div", x4, U(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              i("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: c[0] || (c[0] = (f) => n.value = "connection")
              }, U(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        i("div", w4, [
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[1] || (c[1] = (f) => n.value = "flows")
          }, [
            i("div", _4, [
              c[8] || (c[8] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              i("div", k4, [
                X(O(Un), { class: "h-4 w-4" })
              ])
            ]),
            i("div", S4, [
              ke(U(a.value.activeFlowsCount) + " ", 1),
              c[9] || (c[9] = i("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            i("div", E4, " de " + U(a.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[2] || (c[2] = (f) => n.value = "campaigns")
          }, [
            i("div", z4, [
              c[10] || (c[10] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              i("div", $4, [
                X(O(Ct), { class: "h-4 w-4" })
              ])
            ]),
            i("div", P4, U(a.value.campaignsCount), 1),
            c[11] || (c[11] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[3] || (c[3] = (f) => n.value = "contacts")
          }, [
            i("div", C4, [
              c[12] || (c[12] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              i("div", A4, [
                X(O(Nn), { class: "h-4 w-4" })
              ])
            ]),
            i("div", T4, U(a.value.contactsCount.toLocaleString("pt-BR")), 1),
            c[13] || (c[13] = i("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          i("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: c[4] || (c[4] = (f) => n.value = "runs")
          }, [
            i("div", O4, [
              c[14] || (c[14] = i("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              i("div", N4, [
                X(O(Eh), { class: "h-4 w-4" })
              ])
            ]),
            i("div", R4, [
              ke(U(a.value.runsCount) + " ", 1),
              c[15] || (c[15] = i("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            i("div", I4, [
              c[16] || (c[16] = i("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              i("span", null, U(a.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        i("div", M4, [
          (E(), C(me, null, Ne(t, (f) => i("button", {
            key: f.id,
            type: "button",
            class: W(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (g) => n.value = f.id
          }, [
            (E(), Oe(Rt(f.icon), { class: "h-4 w-4" })),
            i("span", null, U(f.label), 1),
            d(f.id) !== null && d(f.id) > 0 ? (E(), C("span", {
              key: 0,
              class: W(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, U(d(f.id)), 3)) : te("", !0)
          ], 10, D4)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (E(), C("p", F4, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : te("", !0),
      (E(), Oe(Rt(t.find((f) => f.id === n.value).component), wa({ key: n.value }, bh(n.value === "connection" ? { saved: s } : {})), null, 16))
    ]));
  }
}, L4 = { class: "space-y-4" }, U4 = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (E(), C("div", L4, [
      X(uf, {
        onSaved: o[0] || (o[0] = (a) => n("saved"))
      }),
      o[1] || (o[1] = i("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          ke(" Fluxos, contatos e campanhas ficam no menu "),
          i("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          ke(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Cp = typeof global == "object" && global && global.Object === Object && global, V4 = typeof self == "object" && self && self.Object === Object && self, Lt = Cp || V4 || Function("return this")(), Jt = Lt.Symbol, Ap = Object.prototype, q4 = Ap.hasOwnProperty, j4 = Ap.toString, zr = Jt ? Jt.toStringTag : void 0;
function H4(e) {
  var t = q4.call(e, zr), n = e[zr];
  try {
    e[zr] = void 0;
    var r = !0;
  } catch {
  }
  var o = j4.call(e);
  return r && (t ? e[zr] = n : delete e[zr]), o;
}
var G4 = Object.prototype, W4 = G4.toString;
function X4(e) {
  return W4.call(e);
}
var Y4 = "[object Null]", K4 = "[object Undefined]", Hu = Jt ? Jt.toStringTag : void 0;
function Wn(e) {
  return e == null ? e === void 0 ? K4 : Y4 : Hu && Hu in Object(e) ? H4(e) : X4(e);
}
function Qt(e) {
  return e != null && typeof e == "object";
}
var Z4 = "[object Symbol]";
function Na(e) {
  return typeof e == "symbol" || Qt(e) && Wn(e) == Z4;
}
function J4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ft = Array.isArray, Gu = Jt ? Jt.prototype : void 0, Wu = Gu ? Gu.toString : void 0;
function Tp(e) {
  if (typeof e == "string")
    return e;
  if (Ft(e))
    return J4(e, Tp) + "";
  if (Na(e))
    return Wu ? Wu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Q4 = /\s/;
function eP(e) {
  for (var t = e.length; t-- && Q4.test(e.charAt(t)); )
    ;
  return t;
}
var tP = /^\s+/;
function nP(e) {
  return e && e.slice(0, eP(e) + 1).replace(tP, "");
}
function kt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xu = NaN, rP = /^[-+]0x[0-9a-f]+$/i, oP = /^0b[01]+$/i, aP = /^0o[0-7]+$/i, sP = parseInt;
function Yu(e) {
  if (typeof e == "number")
    return e;
  if (Na(e))
    return Xu;
  if (kt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nP(e);
  var n = oP.test(e);
  return n || aP.test(e) ? sP(e.slice(2), n ? 2 : 8) : rP.test(e) ? Xu : +e;
}
function Op(e) {
  return e;
}
var iP = "[object AsyncFunction]", lP = "[object Function]", uP = "[object GeneratorFunction]", cP = "[object Proxy]";
function yl(e) {
  if (!kt(e))
    return !1;
  var t = Wn(e);
  return t == lP || t == uP || t == iP || t == cP;
}
var hs = Lt["__core-js_shared__"], Ku = (function() {
  var e = /[^.]+$/.exec(hs && hs.keys && hs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function dP(e) {
  return !!Ku && Ku in e;
}
var fP = Function.prototype, pP = fP.toString;
function Xn(e) {
  if (e != null) {
    try {
      return pP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hP = /[\\^$.*+?()[\]{}|]/g, mP = /^\[object .+?Constructor\]$/, vP = Function.prototype, gP = Object.prototype, yP = vP.toString, bP = gP.hasOwnProperty, xP = RegExp(
  "^" + yP.call(bP).replace(hP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wP(e) {
  if (!kt(e) || dP(e))
    return !1;
  var t = yl(e) ? xP : mP;
  return t.test(Xn(e));
}
function _P(e, t) {
  return e?.[t];
}
function Yn(e, t) {
  var n = _P(e, t);
  return wP(n) ? n : void 0;
}
var Bi = Yn(Lt, "WeakMap"), Zu = Object.create, kP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!kt(t))
      return {};
    if (Zu)
      return Zu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function SP(e, t, n) {
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
function EP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var zP = 800, $P = 16, PP = Date.now;
function CP(e) {
  var t = 0, n = 0;
  return function() {
    var r = PP(), o = $P - (r - n);
    if (n = r, o > 0) {
      if (++t >= zP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function AP(e) {
  return function() {
    return e;
  };
}
var ca = (function() {
  try {
    var e = Yn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), TP = ca ? function(e, t) {
  return ca(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: AP(t),
    writable: !0
  });
} : Op, OP = CP(TP);
function NP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var RP = 9007199254740991, IP = /^(?:0|[1-9]\d*)$/;
function Ra(e, t) {
  var n = typeof e;
  return t = t ?? RP, !!t && (n == "number" || n != "symbol" && IP.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var MP = Object.prototype, DP = MP.hasOwnProperty;
function xl(e, t, n) {
  var r = e[t];
  (!(DP.call(e, t) && uo(r, n)) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function FP(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), o ? bl(n, l, d) : xl(n, l, d);
  }
  return n;
}
var Ju = Math.max;
function BP(e, t, n) {
  return t = Ju(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ju(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = r[o];
    return l[t] = n(s), SP(e, this, l);
  };
}
function LP(e, t) {
  return OP(BP(e, t, Op), e + "");
}
var UP = 9007199254740991;
function wl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UP;
}
function Ia(e) {
  return e != null && wl(e.length) && !yl(e);
}
function VP(e, t, n) {
  if (!kt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ia(n) && Ra(t, n.length) : r == "string" && t in n) ? uo(n[t], e) : !1;
}
function qP(e) {
  return LP(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && VP(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var l = n[r];
      l && e(t, l, r, a);
    }
    return t;
  });
}
var jP = Object.prototype;
function _l(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || jP;
  return e === n;
}
function HP(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var GP = "[object Arguments]";
function Qu(e) {
  return Qt(e) && Wn(e) == GP;
}
var Np = Object.prototype, WP = Np.hasOwnProperty, XP = Np.propertyIsEnumerable, da = Qu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Qu : function(e) {
  return Qt(e) && WP.call(e, "callee") && !XP.call(e, "callee");
};
function YP() {
  return !1;
}
var Rp = typeof exports == "object" && exports && !exports.nodeType && exports, ec = Rp && typeof module == "object" && module && !module.nodeType && module, KP = ec && ec.exports === Rp, tc = KP ? Lt.Buffer : void 0, ZP = tc ? tc.isBuffer : void 0, eo = ZP || YP, JP = "[object Arguments]", QP = "[object Array]", eC = "[object Boolean]", tC = "[object Date]", nC = "[object Error]", rC = "[object Function]", oC = "[object Map]", aC = "[object Number]", sC = "[object Object]", iC = "[object RegExp]", lC = "[object Set]", uC = "[object String]", cC = "[object WeakMap]", dC = "[object ArrayBuffer]", fC = "[object DataView]", pC = "[object Float32Array]", hC = "[object Float64Array]", mC = "[object Int8Array]", vC = "[object Int16Array]", gC = "[object Int32Array]", yC = "[object Uint8Array]", bC = "[object Uint8ClampedArray]", xC = "[object Uint16Array]", wC = "[object Uint32Array]", We = {};
We[pC] = We[hC] = We[mC] = We[vC] = We[gC] = We[yC] = We[bC] = We[xC] = We[wC] = !0;
We[JP] = We[QP] = We[dC] = We[eC] = We[fC] = We[tC] = We[nC] = We[rC] = We[oC] = We[aC] = We[sC] = We[iC] = We[lC] = We[uC] = We[cC] = !1;
function _C(e) {
  return Qt(e) && wl(e.length) && !!We[Wn(e)];
}
function kl(e) {
  return function(t) {
    return e(t);
  };
}
var Ip = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Ip && typeof module == "object" && module && !module.nodeType && module, kC = Br && Br.exports === Ip, ms = kC && Cp.process, pr = (function() {
  try {
    var e = Br && Br.require && Br.require("util").types;
    return e || ms && ms.binding && ms.binding("util");
  } catch {
  }
})(), nc = pr && pr.isTypedArray, Sl = nc ? kl(nc) : _C, SC = Object.prototype, EC = SC.hasOwnProperty;
function Mp(e, t) {
  var n = Ft(e), r = !n && da(e), o = !n && !r && eo(e), a = !n && !r && !o && Sl(e), s = n || r || o || a, l = s ? HP(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || EC.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ra(u, d))) && l.push(u);
  return l;
}
function Dp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var zC = Dp(Object.keys, Object), $C = Object.prototype, PC = $C.hasOwnProperty;
function CC(e) {
  if (!_l(e))
    return zC(e);
  var t = [];
  for (var n in Object(e))
    PC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function AC(e) {
  return Ia(e) ? Mp(e) : CC(e);
}
function TC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var OC = Object.prototype, NC = OC.hasOwnProperty;
function RC(e) {
  if (!kt(e))
    return TC(e);
  var t = _l(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !NC.call(e, r)) || n.push(r);
  return n;
}
function Fp(e) {
  return Ia(e) ? Mp(e, !0) : RC(e);
}
var IC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, MC = /^\w*$/;
function DC(e, t) {
  if (Ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Na(e) ? !0 : MC.test(e) || !IC.test(e) || t != null && e in Object(t);
}
var to = Yn(Object, "create");
function FC() {
  this.__data__ = to ? to(null) : {}, this.size = 0;
}
function BC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var LC = "__lodash_hash_undefined__", UC = Object.prototype, VC = UC.hasOwnProperty;
function qC(e) {
  var t = this.__data__;
  if (to) {
    var n = t[e];
    return n === LC ? void 0 : n;
  }
  return VC.call(t, e) ? t[e] : void 0;
}
var jC = Object.prototype, HC = jC.hasOwnProperty;
function GC(e) {
  var t = this.__data__;
  return to ? t[e] !== void 0 : HC.call(t, e);
}
var WC = "__lodash_hash_undefined__";
function XC(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = to && t === void 0 ? WC : t, this;
}
function Hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Hn.prototype.clear = FC;
Hn.prototype.delete = BC;
Hn.prototype.get = qC;
Hn.prototype.has = GC;
Hn.prototype.set = XC;
function YC() {
  this.__data__ = [], this.size = 0;
}
function Ma(e, t) {
  for (var n = e.length; n--; )
    if (uo(e[n][0], t))
      return n;
  return -1;
}
var KC = Array.prototype, ZC = KC.splice;
function JC(e) {
  var t = this.__data__, n = Ma(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ZC.call(t, n, 1), --this.size, !0;
}
function QC(e) {
  var t = this.__data__, n = Ma(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function eA(e) {
  return Ma(this.__data__, e) > -1;
}
function tA(e, t) {
  var n = this.__data__, r = Ma(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fn.prototype.clear = YC;
fn.prototype.delete = JC;
fn.prototype.get = QC;
fn.prototype.has = eA;
fn.prototype.set = tA;
var no = Yn(Lt, "Map");
function nA() {
  this.size = 0, this.__data__ = {
    hash: new Hn(),
    map: new (no || fn)(),
    string: new Hn()
  };
}
function rA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Da(e, t) {
  var n = e.__data__;
  return rA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function oA(e) {
  var t = Da(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function aA(e) {
  return Da(this, e).get(e);
}
function sA(e) {
  return Da(this, e).has(e);
}
function iA(e, t) {
  var n = Da(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pn.prototype.clear = nA;
pn.prototype.delete = oA;
pn.prototype.get = aA;
pn.prototype.has = sA;
pn.prototype.set = iA;
var lA = "Expected a function";
function El(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(lA);
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
var uA = 500;
function cA(e) {
  var t = El(e, function(r) {
    return n.size === uA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var dA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fA = /\\(\\)?/g, pA = cA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(dA, function(n, r, o, a) {
    t.push(o ? a.replace(fA, "$1") : r || n);
  }), t;
});
function Bp(e) {
  return e == null ? "" : Tp(e);
}
function zl(e, t) {
  return Ft(e) ? e : DC(e, t) ? [e] : pA(Bp(e));
}
function $l(e) {
  if (typeof e == "string" || Na(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function hA(e, t) {
  t = zl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$l(t[n++])];
  return n && n == r ? e : void 0;
}
function wt(e, t, n) {
  var r = e == null ? void 0 : hA(e, t);
  return r === void 0 ? n : r;
}
function mA(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Lp = Dp(Object.getPrototypeOf, Object), vA = "[object Object]", gA = Function.prototype, yA = Object.prototype, Up = gA.toString, bA = yA.hasOwnProperty, xA = Up.call(Object);
function wA(e) {
  if (!Qt(e) || Wn(e) != vA)
    return !1;
  var t = Lp(e);
  if (t === null)
    return !0;
  var n = bA.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Up.call(n) == xA;
}
function _A(e) {
  return function(t) {
    return e?.[t];
  };
}
function kA() {
  this.__data__ = new fn(), this.size = 0;
}
function SA(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function EA(e) {
  return this.__data__.get(e);
}
function zA(e) {
  return this.__data__.has(e);
}
var $A = 200;
function PA(e, t) {
  var n = this.__data__;
  if (n instanceof fn) {
    var r = n.__data__;
    if (!no || r.length < $A - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new pn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new fn(e);
  this.size = t.size;
}
Zt.prototype.clear = kA;
Zt.prototype.delete = SA;
Zt.prototype.get = EA;
Zt.prototype.has = zA;
Zt.prototype.set = PA;
var Vp = typeof exports == "object" && exports && !exports.nodeType && exports, rc = Vp && typeof module == "object" && module && !module.nodeType && module, CA = rc && rc.exports === Vp, oc = CA ? Lt.Buffer : void 0, ac = oc ? oc.allocUnsafe : void 0;
function qp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = ac ? ac(n) : new e.constructor(n);
  return e.copy(r), r;
}
function AA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function TA() {
  return [];
}
var OA = Object.prototype, NA = OA.propertyIsEnumerable, sc = Object.getOwnPropertySymbols, RA = sc ? function(e) {
  return e == null ? [] : (e = Object(e), AA(sc(e), function(t) {
    return NA.call(e, t);
  }));
} : TA;
function IA(e, t, n) {
  var r = t(e);
  return Ft(e) ? r : mA(r, n(e));
}
function Li(e) {
  return IA(e, AC, RA);
}
var Ui = Yn(Lt, "DataView"), Vi = Yn(Lt, "Promise"), qi = Yn(Lt, "Set"), ic = "[object Map]", MA = "[object Object]", lc = "[object Promise]", uc = "[object Set]", cc = "[object WeakMap]", dc = "[object DataView]", DA = Xn(Ui), FA = Xn(no), BA = Xn(Vi), LA = Xn(qi), UA = Xn(Bi), Nt = Wn;
(Ui && Nt(new Ui(new ArrayBuffer(1))) != dc || no && Nt(new no()) != ic || Vi && Nt(Vi.resolve()) != lc || qi && Nt(new qi()) != uc || Bi && Nt(new Bi()) != cc) && (Nt = function(e) {
  var t = Wn(e), n = t == MA ? e.constructor : void 0, r = n ? Xn(n) : "";
  if (r)
    switch (r) {
      case DA:
        return dc;
      case FA:
        return ic;
      case BA:
        return lc;
      case LA:
        return uc;
      case UA:
        return cc;
    }
  return t;
});
var VA = Object.prototype, qA = VA.hasOwnProperty;
function jA(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && qA.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var fa = Lt.Uint8Array;
function Pl(e) {
  var t = new e.constructor(e.byteLength);
  return new fa(t).set(new fa(e)), t;
}
function HA(e, t) {
  var n = Pl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var GA = /\w*$/;
function WA(e) {
  var t = new e.constructor(e.source, GA.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var fc = Jt ? Jt.prototype : void 0, pc = fc ? fc.valueOf : void 0;
function XA(e) {
  return pc ? Object(pc.call(e)) : {};
}
function jp(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var YA = "[object Boolean]", KA = "[object Date]", ZA = "[object Map]", JA = "[object Number]", QA = "[object RegExp]", eT = "[object Set]", tT = "[object String]", nT = "[object Symbol]", rT = "[object ArrayBuffer]", oT = "[object DataView]", aT = "[object Float32Array]", sT = "[object Float64Array]", iT = "[object Int8Array]", lT = "[object Int16Array]", uT = "[object Int32Array]", cT = "[object Uint8Array]", dT = "[object Uint8ClampedArray]", fT = "[object Uint16Array]", pT = "[object Uint32Array]";
function hT(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case rT:
      return Pl(e);
    case YA:
    case KA:
      return new r(+e);
    case oT:
      return HA(e);
    case aT:
    case sT:
    case iT:
    case lT:
    case uT:
    case cT:
    case dT:
    case fT:
    case pT:
      return jp(e, n);
    case ZA:
      return new r();
    case JA:
    case tT:
      return new r(e);
    case QA:
      return WA(e);
    case eT:
      return new r();
    case nT:
      return XA(e);
  }
}
function Hp(e) {
  return typeof e.constructor == "function" && !_l(e) ? kP(Lp(e)) : {};
}
var mT = "[object Map]";
function vT(e) {
  return Qt(e) && Nt(e) == mT;
}
var hc = pr && pr.isMap, gT = hc ? kl(hc) : vT, yT = "[object Set]";
function bT(e) {
  return Qt(e) && Nt(e) == yT;
}
var mc = pr && pr.isSet, xT = mc ? kl(mc) : bT, wT = 1, Gp = "[object Arguments]", _T = "[object Array]", kT = "[object Boolean]", ST = "[object Date]", ET = "[object Error]", Wp = "[object Function]", zT = "[object GeneratorFunction]", $T = "[object Map]", PT = "[object Number]", Xp = "[object Object]", CT = "[object RegExp]", AT = "[object Set]", TT = "[object String]", OT = "[object Symbol]", NT = "[object WeakMap]", RT = "[object ArrayBuffer]", IT = "[object DataView]", MT = "[object Float32Array]", DT = "[object Float64Array]", FT = "[object Int8Array]", BT = "[object Int16Array]", LT = "[object Int32Array]", UT = "[object Uint8Array]", VT = "[object Uint8ClampedArray]", qT = "[object Uint16Array]", jT = "[object Uint32Array]", He = {};
He[Gp] = He[_T] = He[RT] = He[IT] = He[kT] = He[ST] = He[MT] = He[DT] = He[FT] = He[BT] = He[LT] = He[$T] = He[PT] = He[Xp] = He[CT] = He[AT] = He[TT] = He[OT] = He[UT] = He[VT] = He[qT] = He[jT] = !0;
He[ET] = He[Wp] = He[NT] = !1;
function Vo(e, t, n, r, o, a) {
  var s, l = t & wT;
  if (s !== void 0)
    return s;
  if (!kt(e))
    return e;
  var d = Ft(e);
  if (d)
    s = jA(e);
  else {
    var u = Nt(e), c = u == Wp || u == zT;
    if (eo(e))
      return qp(e, l);
    if (u == Xp || u == Gp || c && !o)
      s = c ? {} : Hp(e);
    else {
      if (!He[u])
        return o ? e : {};
      s = hT(e, u, l);
    }
  }
  a || (a = new Zt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, s), xT(e) ? e.forEach(function(m) {
    s.add(Vo(m, t, n, m, e, a));
  }) : gT(e) && e.forEach(function(m, p) {
    s.set(p, Vo(m, t, n, p, e, a));
  });
  var g = Li, y = d ? void 0 : g(e);
  return NP(y || e, function(m, p) {
    y && (p = m, m = e[p]), xl(s, p, Vo(m, t, n, p, e, a));
  }), s;
}
var HT = 1, GT = 4;
function lt(e) {
  return Vo(e, HT | GT);
}
var WT = "__lodash_hash_undefined__";
function XT(e) {
  return this.__data__.set(e, WT), this;
}
function YT(e) {
  return this.__data__.has(e);
}
function pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new pn(); ++t < n; )
    this.add(e[t]);
}
pa.prototype.add = pa.prototype.push = XT;
pa.prototype.has = YT;
function KT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ZT(e, t) {
  return e.has(t);
}
var JT = 1, QT = 2;
function Yp(e, t, n, r, o, a) {
  var s = n & JT, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, g = !0, y = n & QT ? new pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < l; ) {
    var m = e[f], p = t[f];
    if (r)
      var h = s ? r(p, m, f, t, e, a) : r(m, p, f, e, t, a);
    if (h !== void 0) {
      if (h)
        continue;
      g = !1;
      break;
    }
    if (y) {
      if (!KT(t, function(b, z) {
        if (!ZT(y, z) && (m === b || o(m, b, n, r, a)))
          return y.push(z);
      })) {
        g = !1;
        break;
      }
    } else if (!(m === p || o(m, p, n, r, a))) {
      g = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), g;
}
function eO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function tO(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var nO = 1, rO = 2, oO = "[object Boolean]", aO = "[object Date]", sO = "[object Error]", iO = "[object Map]", lO = "[object Number]", uO = "[object RegExp]", cO = "[object Set]", dO = "[object String]", fO = "[object Symbol]", pO = "[object ArrayBuffer]", hO = "[object DataView]", vc = Jt ? Jt.prototype : void 0, vs = vc ? vc.valueOf : void 0;
function mO(e, t, n, r, o, a, s) {
  switch (n) {
    case hO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case pO:
      return !(e.byteLength != t.byteLength || !a(new fa(e), new fa(t)));
    case oO:
    case aO:
    case lO:
      return uo(+e, +t);
    case sO:
      return e.name == t.name && e.message == t.message;
    case uO:
    case dO:
      return e == t + "";
    case iO:
      var l = eO;
    case cO:
      var d = r & nO;
      if (l || (l = tO), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= rO, s.set(e, t);
      var c = Yp(l(e), l(t), r, o, a, s);
      return s.delete(e), c;
    case fO:
      if (vs)
        return vs.call(e) == vs.call(t);
  }
  return !1;
}
var vO = 1, gO = Object.prototype, yO = gO.hasOwnProperty;
function bO(e, t, n, r, o, a) {
  var s = n & vO, l = Li(e), d = l.length, u = Li(t), c = u.length;
  if (d != c && !s)
    return !1;
  for (var f = d; f--; ) {
    var g = l[f];
    if (!(s ? g in t : yO.call(t, g)))
      return !1;
  }
  var y = a.get(e), m = a.get(t);
  if (y && m)
    return y == t && m == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var h = s; ++f < d; ) {
    g = l[f];
    var b = e[g], z = t[g];
    if (r)
      var _ = s ? r(z, b, g, t, e, a) : r(b, z, g, e, t, a);
    if (!(_ === void 0 ? b === z || o(b, z, n, r, a) : _)) {
      p = !1;
      break;
    }
    h || (h = g == "constructor");
  }
  if (p && !h) {
    var T = e.constructor, $ = t.constructor;
    T != $ && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof $ == "function" && $ instanceof $) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var xO = 1, gc = "[object Arguments]", yc = "[object Array]", Ao = "[object Object]", wO = Object.prototype, bc = wO.hasOwnProperty;
function _O(e, t, n, r, o, a) {
  var s = Ft(e), l = Ft(t), d = s ? yc : Nt(e), u = l ? yc : Nt(t);
  d = d == gc ? Ao : d, u = u == gc ? Ao : u;
  var c = d == Ao, f = u == Ao, g = d == u;
  if (g && eo(e)) {
    if (!eo(t))
      return !1;
    s = !0, c = !1;
  }
  if (g && !c)
    return a || (a = new Zt()), s || Sl(e) ? Yp(e, t, n, r, o, a) : mO(e, t, d, n, r, o, a);
  if (!(n & xO)) {
    var y = c && bc.call(e, "__wrapped__"), m = f && bc.call(t, "__wrapped__");
    if (y || m) {
      var p = y ? e.value() : e, h = m ? t.value() : t;
      return a || (a = new Zt()), o(p, h, n, r, a);
    }
  }
  return g ? (a || (a = new Zt()), bO(e, t, n, r, o, a)) : !1;
}
function Kp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Qt(e) && !Qt(t) ? e !== e && t !== t : _O(e, t, n, r, Kp, o);
}
function kO(e, t, n) {
  t = zl(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $l(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && wl(o) && Ra(s, o) && (Ft(e) || da(e)));
}
function SO(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), l = s.length; l--; ) {
      var d = s[++o];
      if (n(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var EO = SO(), gs = function() {
  return Lt.Date.now();
}, zO = "Expected a function", $O = Math.max, PO = Math.min;
function CO(e, t, n) {
  var r, o, a, s, l, d, u = 0, c = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(zO);
  t = Yu(t) || 0, kt(n) && (c = !0, f = "maxWait" in n, a = f ? $O(Yu(n.maxWait) || 0, t) : a, g = "trailing" in n ? !0 : g);
  function y(w) {
    var v = r, k = o;
    return r = o = void 0, u = w, s = e.apply(k, v), s;
  }
  function m(w) {
    return u = w, l = setTimeout(b, t), c ? y(w) : s;
  }
  function p(w) {
    var v = w - d, k = w - u, L = t - v;
    return f ? PO(L, a - k) : L;
  }
  function h(w) {
    var v = w - d, k = w - u;
    return d === void 0 || v >= t || v < 0 || f && k >= a;
  }
  function b() {
    var w = gs();
    if (h(w))
      return z(w);
    l = setTimeout(b, p(w));
  }
  function z(w) {
    return l = void 0, g && r ? y(w) : (r = o = void 0, s);
  }
  function _() {
    l !== void 0 && clearTimeout(l), u = 0, r = d = o = l = void 0;
  }
  function T() {
    return l === void 0 ? s : z(gs());
  }
  function $() {
    var w = gs(), v = h(w);
    if (r = arguments, o = this, d = w, v) {
      if (l === void 0)
        return m(d);
      if (f)
        return clearTimeout(l), l = setTimeout(b, t), y(d);
    }
    return l === void 0 && (l = setTimeout(b, t)), s;
  }
  return $.cancel = _, $.flush = T, $;
}
function ji(e, t, n) {
  (n !== void 0 && !uo(e[t], n) || n === void 0 && !(t in e)) && bl(e, t, n);
}
function AO(e) {
  return Qt(e) && Ia(e);
}
function Hi(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function TO(e) {
  return FP(e, Fp(e));
}
function OO(e, t, n, r, o, a, s) {
  var l = Hi(e, n), d = Hi(t, n), u = s.get(d);
  if (u) {
    ji(e, n, u);
    return;
  }
  var c = a ? a(l, d, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var g = Ft(d), y = !g && eo(d), m = !g && !y && Sl(d);
    c = d, g || y || m ? Ft(l) ? c = l : AO(l) ? c = EP(l) : y ? (f = !1, c = qp(d, !0)) : m ? (f = !1, c = jp(d, !0)) : c = [] : wA(d) || da(d) ? (c = l, da(l) ? c = TO(l) : (!kt(l) || yl(l)) && (c = Hp(d))) : f = !1;
  }
  f && (s.set(d, c), o(c, d, r, a, s), s.delete(d)), ji(e, n, c);
}
function Zp(e, t, n, r, o) {
  e !== t && EO(t, function(a, s) {
    if (o || (o = new Zt()), kt(a))
      OO(e, t, s, n, Zp, r, o);
    else {
      var l = r ? r(Hi(e, s), a, s + "", e, t, o) : void 0;
      l === void 0 && (l = a), ji(e, s, l);
    }
  }, Fp);
}
var NO = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, RO = _A(NO), Jp = /[&<>"']/g, IO = RegExp(Jp.source);
function MO(e) {
  return e = Bp(e), e && IO.test(e) ? e.replace(Jp, RO) : e;
}
var DO = Object.prototype, FO = DO.hasOwnProperty;
function BO(e, t) {
  return e != null && FO.call(e, t);
}
function Qp(e, t) {
  return e != null && kO(e, t, BO);
}
function _n(e, t) {
  return Kp(e, t);
}
var Gi = qP(function(e, t, n) {
  Zp(e, t, n);
});
function LO(e, t, n, r) {
  if (!kt(e))
    return e;
  t = zl(t, e);
  for (var o = -1, a = t.length, s = a - 1, l = e; l != null && ++o < a; ) {
    var d = $l(t[o]), u = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != s) {
      var c = l[d];
      u = void 0, u === void 0 && (u = kt(c) ? c : Ra(t[o + 1]) ? [] : {});
    }
    xl(l, d, u), l = l[d];
  }
  return e;
}
function zt(e, t, n) {
  return e == null ? e : LO(e, t, n);
}
var xc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function UO(e) {
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
var ys, wc;
function br() {
  return wc || (wc = 1, ys = TypeError), ys;
}
const VO = {}, qO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VO
}, Symbol.toStringTag, { value: "Module" })), jO = /* @__PURE__ */ UO(qO);
var bs, _c;
function Fa() {
  if (_c) return bs;
  _c = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, l = o && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, y = g ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, h = Function.prototype.toString, b = String.prototype.match, z = String.prototype.slice, _ = String.prototype.replace, T = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, w = RegExp.prototype.test, v = Array.prototype.concat, k = Array.prototype.join, L = Array.prototype.slice, M = Math.floor, I = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, A = Object.getOwnPropertySymbols, q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, S = typeof Symbol == "function" && typeof Symbol.iterator == "object", F = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === S || !0) ? Symbol.toStringTag : null, P = Object.prototype.propertyIsEnumerable, R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(Y) {
    return Y.__proto__;
  } : null);
  function x(Y, Z) {
    if (Y === 1 / 0 || Y === -1 / 0 || Y !== Y || Y && Y > -1e3 && Y < 1e3 || w.call(/e/, Z))
      return Z;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof Y == "number") {
      var je = Y < 0 ? -M(-Y) : M(Y);
      if (je !== Y) {
        var Ge = String(je), Re = z.call(Z, Ge.length + 1);
        return _.call(Ge, Le, "$&_") + "." + _.call(_.call(Re, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(Z, Le, "$&_");
  }
  var V = jO, Q = V.custom, ne = D(Q) ? Q : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, be = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  bs = function Y(Z, Le, je, Ge) {
    var Re = Le || {};
    if (H(Re, "quoteStyle") && !H(fe, Re.quoteStyle))
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
      return Pn ? x(Z, yt) : yt;
    }
    if (typeof Z == "bigint") {
      var mn = String(Z) + "n";
      return Pn ? x(Z, mn) : mn;
    }
    var Ya = typeof Re.depth > "u" ? 5 : Re.depth;
    if (typeof je > "u" && (je = 0), je >= Ya && Ya > 0 && typeof Z == "object")
      return ve(Z) ? "[Array]" : "[Object]";
    var Kn = ih(Re, je);
    if (typeof Ge > "u")
      Ge = [];
    else if (ae(Ge, Z) >= 0)
      return "[Circular]";
    function At(Zn, yo, uh) {
      if (yo && (Ge = L.call(Ge), Ge.push(yo)), uh) {
        var Xl = {
          depth: Re.depth
        };
        return H(Re, "quoteStyle") && (Xl.quoteStyle = Re.quoteStyle), Y(Zn, Xl, je + 1, Ge);
      }
      return Y(Zn, Re, je + 1, Ge);
    }
    if (typeof Z == "function" && !Ee(Z)) {
      var Ul = oe(Z), Vl = vo(Z, At);
      return "[Function" + (Ul ? ": " + Ul : " (anonymous)") + "]" + (Vl.length > 0 ? " { " + k.call(Vl, ", ") + " }" : "");
    }
    if (D(Z)) {
      var ql = S ? _.call(String(Z), /^(Symbol\(.*\))_[^)]*$/, "$1") : q.call(Z);
      return typeof Z == "object" && !S ? $n(ql) : ql;
    }
    if (Vt(Z)) {
      for (var _r = "<" + $.call(String(Z.nodeName)), Ka = Z.attributes || [], go = 0; go < Ka.length; go++)
        _r += " " + Ka[go].name + "=" + _e(re(Ka[go].value), "double", Re);
      return _r += ">", Z.childNodes && Z.childNodes.length && (_r += "..."), _r += "</" + $.call(String(Z.nodeName)) + ">", _r;
    }
    if (ve(Z)) {
      if (Z.length === 0)
        return "[]";
      var Za = vo(Z, At);
      return Kn && !sh(Za) ? "[" + Xa(Za, Kn) + "]" : "[ " + k.call(Za, ", ") + " ]";
    }
    if (le(Z)) {
      var Ja = vo(Z, At);
      return !("cause" in Error.prototype) && "cause" in Z && !P.call(Z, "cause") ? "{ [" + String(Z) + "] " + k.call(v.call("[cause]: " + At(Z.cause), Ja), ", ") + " }" : Ja.length === 0 ? "[" + String(Z) + "]" : "{ [" + String(Z) + "] " + k.call(Ja, ", ") + " }";
    }
    if (typeof Z == "object" && hn) {
      if (ne && typeof Z[ne] == "function" && V)
        return V(Z, { depth: Ya - je });
      if (hn !== "symbol" && typeof Z.inspect == "function")
        return Z.inspect();
    }
    if (de(Z)) {
      var jl = [];
      return r && r.call(Z, function(Zn, yo) {
        jl.push(At(yo, Z, !0) + " => " + At(Zn, Z));
      }), Ll("Map", n.call(Z), jl, Kn);
    }
    if (ze(Z)) {
      var Hl = [];
      return l && l.call(Z, function(Zn) {
        Hl.push(At(Zn, Z));
      }), Ll("Set", s.call(Z), Hl, Kn);
    }
    if (pe(Z))
      return wr("WeakMap");
    if (Be(Z))
      return wr("WeakSet");
    if (xe(Z))
      return wr("WeakRef");
    if (ie(Z))
      return $n(At(Number(Z)));
    if (N(Z))
      return $n(At(I.call(Z)));
    if (ge(Z))
      return $n(m.call(Z));
    if (we(Z))
      return $n(At(String(Z)));
    if (typeof window < "u" && Z === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && Z === globalThis || typeof xc < "u" && Z === xc)
      return "{ [object globalThis] }";
    if (!Ae(Z) && !Ee(Z)) {
      var Qa = vo(Z, At), Gl = R ? R(Z) === Object.prototype : Z instanceof Object || Z.constructor === Object, es = Z instanceof Object ? "" : "null prototype", Wl = !Gl && F && Object(Z) === Z && F in Z ? z.call(j(Z), 8, -1) : es ? "Object" : "", lh = Gl || typeof Z.constructor != "function" ? "" : Z.constructor.name ? Z.constructor.name + " " : "", ts = lh + (Wl || es ? "[" + k.call(v.call([], Wl || [], es || []), ": ") + "] " : "");
      return Qa.length === 0 ? ts + "{}" : Kn ? ts + "{" + Xa(Qa, Kn) + "}" : ts + "{ " + k.call(Qa, ", ") + " }";
    }
    return String(Z);
  };
  function _e(Y, Z, Le) {
    var je = Le.quoteStyle || Z, Ge = fe[je];
    return Ge + Y + Ge;
  }
  function re(Y) {
    return _.call(String(Y), /"/g, "&quot;");
  }
  function se(Y) {
    return !F || !(typeof Y == "object" && (F in Y || typeof Y[F] < "u"));
  }
  function ve(Y) {
    return j(Y) === "[object Array]" && se(Y);
  }
  function Ae(Y) {
    return j(Y) === "[object Date]" && se(Y);
  }
  function Ee(Y) {
    return j(Y) === "[object RegExp]" && se(Y);
  }
  function le(Y) {
    return j(Y) === "[object Error]" && se(Y);
  }
  function we(Y) {
    return j(Y) === "[object String]" && se(Y);
  }
  function ie(Y) {
    return j(Y) === "[object Number]" && se(Y);
  }
  function ge(Y) {
    return j(Y) === "[object Boolean]" && se(Y);
  }
  function D(Y) {
    if (S)
      return Y && typeof Y == "object" && Y instanceof Symbol;
    if (typeof Y == "symbol")
      return !0;
    if (!Y || typeof Y != "object" || !q)
      return !1;
    try {
      return q.call(Y), !0;
    } catch {
    }
    return !1;
  }
  function N(Y) {
    if (!Y || typeof Y != "object" || !I)
      return !1;
    try {
      return I.call(Y), !0;
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
    for (var Le = 0, je = Y.length; Le < je; Le++)
      if (Y[Le] === Z)
        return Le;
    return -1;
  }
  function de(Y) {
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
  function pe(Y) {
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
  function xe(Y) {
    if (!y || !Y || typeof Y != "object")
      return !1;
    try {
      return y.call(Y), !0;
    } catch {
    }
    return !1;
  }
  function ze(Y) {
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
      var Le = Y.length - Z.maxStringLength, je = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(z.call(Y, 0, Z.maxStringLength), Z) + je;
    }
    var Ge = be[Z.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var Re = _.call(_.call(Y, Ge, "\\$1"), /[\x00-\x1f]/g, Wa);
    return _e(Re, "single", Z);
  }
  function Wa(Y) {
    var Z = Y.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[Z];
    return Le ? "\\" + Le : "\\x" + (Z < 16 ? "0" : "") + T.call(Z.toString(16));
  }
  function $n(Y) {
    return "Object(" + Y + ")";
  }
  function wr(Y) {
    return Y + " { ? }";
  }
  function Ll(Y, Z, Le, je) {
    var Ge = je ? Xa(Le, je) : k.call(Le, ", ");
    return Y + " (" + Z + ") {" + Ge + "}";
  }
  function sh(Y) {
    for (var Z = 0; Z < Y.length; Z++)
      if (ae(Y[Z], `
`) >= 0)
        return !1;
    return !0;
  }
  function ih(Y, Z) {
    var Le;
    if (Y.indent === "	")
      Le = "	";
    else if (typeof Y.indent == "number" && Y.indent > 0)
      Le = k.call(Array(Y.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: k.call(Array(Z + 1), Le)
    };
  }
  function Xa(Y, Z) {
    if (Y.length === 0)
      return "";
    var Le = `
` + Z.prev + Z.base;
    return Le + k.call(Y, "," + Le) + `
` + Z.prev;
  }
  function vo(Y, Z) {
    var Le = ve(Y), je = [];
    if (Le) {
      je.length = Y.length;
      for (var Ge = 0; Ge < Y.length; Ge++)
        je[Ge] = H(Y, Ge) ? Z(Y[Ge], Y) : "";
    }
    var Re = typeof A == "function" ? A(Y) : [], hn;
    if (S) {
      hn = {};
      for (var Pn = 0; Pn < Re.length; Pn++)
        hn["$" + Re[Pn]] = Re[Pn];
    }
    for (var yt in Y)
      H(Y, yt) && (Le && String(Number(yt)) === yt && yt < Y.length || S && hn["$" + yt] instanceof Symbol || (w.call(/[^\w$]/, yt) ? je.push(Z(yt, Y) + ": " + Z(Y[yt], Y)) : je.push(yt + ": " + Z(Y[yt], Y))));
    if (typeof A == "function")
      for (var mn = 0; mn < Re.length; mn++)
        P.call(Y, Re[mn]) && je.push("[" + Z(Re[mn]) + "]: " + Z(Y[Re[mn]], Y));
    return je;
  }
  return bs;
}
var xs, kc;
function HO() {
  if (kc) return xs;
  kc = 1;
  var e = /* @__PURE__ */ Fa(), t = /* @__PURE__ */ br(), n = function(l, d, u) {
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
var ws, Sc;
function e0() {
  return Sc || (Sc = 1, ws = Object), ws;
}
var _s, Ec;
function GO() {
  return Ec || (Ec = 1, _s = Error), _s;
}
var ks, zc;
function WO() {
  return zc || (zc = 1, ks = EvalError), ks;
}
var Ss, $c;
function XO() {
  return $c || ($c = 1, Ss = RangeError), Ss;
}
var Es, Pc;
function YO() {
  return Pc || (Pc = 1, Es = ReferenceError), Es;
}
var zs, Cc;
function KO() {
  return Cc || (Cc = 1, zs = SyntaxError), zs;
}
var $s, Ac;
function ZO() {
  return Ac || (Ac = 1, $s = URIError), $s;
}
var Ps, Tc;
function JO() {
  return Tc || (Tc = 1, Ps = Math.abs), Ps;
}
var Cs, Oc;
function QO() {
  return Oc || (Oc = 1, Cs = Math.floor), Cs;
}
var As, Nc;
function eN() {
  return Nc || (Nc = 1, As = Math.max), As;
}
var Ts, Rc;
function tN() {
  return Rc || (Rc = 1, Ts = Math.min), Ts;
}
var Os, Ic;
function nN() {
  return Ic || (Ic = 1, Os = Math.pow), Os;
}
var Ns, Mc;
function rN() {
  return Mc || (Mc = 1, Ns = Math.round), Ns;
}
var Rs, Dc;
function oN() {
  return Dc || (Dc = 1, Rs = Number.isNaN || function(t) {
    return t !== t;
  }), Rs;
}
var Is, Fc;
function aN() {
  if (Fc) return Is;
  Fc = 1;
  var e = /* @__PURE__ */ oN();
  return Is = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Is;
}
var Ms, Bc;
function sN() {
  return Bc || (Bc = 1, Ms = Object.getOwnPropertyDescriptor), Ms;
}
var Ds, Lc;
function t0() {
  if (Lc) return Ds;
  Lc = 1;
  var e = /* @__PURE__ */ sN();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ds = e, Ds;
}
var Fs, Uc;
function iN() {
  if (Uc) return Fs;
  Uc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Fs = e, Fs;
}
var Bs, Vc;
function lN() {
  return Vc || (Vc = 1, Bs = function() {
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
var Ls, qc;
function uN() {
  if (qc) return Ls;
  qc = 1;
  var e = typeof Symbol < "u" && Symbol, t = lN();
  return Ls = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ls;
}
var Us, jc;
function n0() {
  return jc || (jc = 1, Us = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Us;
}
var Vs, Hc;
function r0() {
  if (Hc) return Vs;
  Hc = 1;
  var e = /* @__PURE__ */ e0();
  return Vs = e.getPrototypeOf || null, Vs;
}
var qs, Gc;
function cN() {
  if (Gc) return qs;
  Gc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(d, u) {
    for (var c = [], f = 0; f < d.length; f += 1)
      c[f] = d[f];
    for (var g = 0; g < u.length; g += 1)
      c[g + d.length] = u[g];
    return c;
  }, a = function(d, u) {
    for (var c = [], f = u, g = 0; f < d.length; f += 1, g += 1)
      c[g] = d[f];
    return c;
  }, s = function(l, d) {
    for (var u = "", c = 0; c < l.length; c += 1)
      u += l[c], c + 1 < l.length && (u += d);
    return u;
  };
  return qs = function(d) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var c = a(arguments, 1), f, g = function() {
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
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(g), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, qs;
}
var js, Wc;
function Ba() {
  if (Wc) return js;
  Wc = 1;
  var e = cN();
  return js = Function.prototype.bind || e, js;
}
var Hs, Xc;
function Cl() {
  return Xc || (Xc = 1, Hs = Function.prototype.call), Hs;
}
var Gs, Yc;
function o0() {
  return Yc || (Yc = 1, Gs = Function.prototype.apply), Gs;
}
var Ws, Kc;
function dN() {
  return Kc || (Kc = 1, Ws = typeof Reflect < "u" && Reflect && Reflect.apply), Ws;
}
var Xs, Zc;
function fN() {
  if (Zc) return Xs;
  Zc = 1;
  var e = Ba(), t = o0(), n = Cl(), r = dN();
  return Xs = r || e.call(n, t), Xs;
}
var Ys, Jc;
function a0() {
  if (Jc) return Ys;
  Jc = 1;
  var e = Ba(), t = /* @__PURE__ */ br(), n = Cl(), r = fN();
  return Ys = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ys;
}
var Ks, Qc;
function pN() {
  if (Qc) return Ks;
  Qc = 1;
  var e = a0(), t = /* @__PURE__ */ t0(), n;
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
var Zs, ed;
function hN() {
  if (ed) return Zs;
  ed = 1;
  var e = n0(), t = r0(), n = /* @__PURE__ */ pN();
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
var Js, td;
function mN() {
  if (td) return Js;
  td = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Ba();
  return Js = n.call(e, t), Js;
}
var Qs, nd;
function Al() {
  if (nd) return Qs;
  nd = 1;
  var e, t = /* @__PURE__ */ e0(), n = /* @__PURE__ */ GO(), r = /* @__PURE__ */ WO(), o = /* @__PURE__ */ XO(), a = /* @__PURE__ */ YO(), s = /* @__PURE__ */ KO(), l = /* @__PURE__ */ br(), d = /* @__PURE__ */ ZO(), u = /* @__PURE__ */ JO(), c = /* @__PURE__ */ QO(), f = /* @__PURE__ */ eN(), g = /* @__PURE__ */ tN(), y = /* @__PURE__ */ nN(), m = /* @__PURE__ */ rN(), p = /* @__PURE__ */ aN(), h = Function, b = function(Ee) {
    try {
      return h('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, z = /* @__PURE__ */ t0(), _ = /* @__PURE__ */ iN(), T = function() {
    throw new l();
  }, $ = z ? (function() {
    try {
      return arguments.callee, T;
    } catch {
      try {
        return z(arguments, "callee").get;
      } catch {
        return T;
      }
    }
  })() : T, w = uN()(), v = hN(), k = r0(), L = n0(), M = o0(), I = Cl(), A = {}, q = typeof Uint8Array > "u" || !v ? e : v(Uint8Array), S = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": w && v ? v([][Symbol.iterator]()) : e,
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
    "%Function%": h,
    "%GeneratorFunction%": A,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": w && v ? v(v([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !w || !v ? e : v((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !w || !v ? e : v((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": w && v ? v(""[Symbol.iterator]()) : e,
    "%Symbol%": w ? Symbol : e,
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
    "%Object.defineProperty%": _,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": u,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": g,
    "%Math.pow%": y,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": L
  };
  if (v)
    try {
      null.error;
    } catch (Ee) {
      var F = v(v(Ee));
      S["%Error.prototype%"] = F;
    }
  var P = function Ee(le) {
    var we;
    if (le === "%AsyncFunction%")
      we = b("async function () {}");
    else if (le === "%GeneratorFunction%")
      we = b("function* () {}");
    else if (le === "%AsyncGeneratorFunction%")
      we = b("async function* () {}");
    else if (le === "%AsyncGenerator%") {
      var ie = Ee("%AsyncGeneratorFunction%");
      ie && (we = ie.prototype);
    } else if (le === "%AsyncIteratorPrototype%") {
      var ge = Ee("%AsyncGenerator%");
      ge && v && (we = v(ge.prototype));
    }
    return S[le] = we, we;
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
  }, x = Ba(), V = /* @__PURE__ */ mN(), Q = x.call(I, Array.prototype.concat), ne = x.call(M, Array.prototype.splice), fe = x.call(I, String.prototype.replace), be = x.call(I, String.prototype.slice), _e = x.call(I, RegExp.prototype.exec), re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, ve = function(le) {
    var we = be(le, 0, 1), ie = be(le, -1);
    if (we === "%" && ie !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ie === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var ge = [];
    return fe(le, re, function(D, N, B, H) {
      ge[ge.length] = B ? fe(H, se, "$1") : N || D;
    }), ge;
  }, Ae = function(le, we) {
    var ie = le, ge;
    if (V(R, ie) && (ge = R[ie], ie = "%" + ge[0] + "%"), V(S, ie)) {
      var D = S[ie];
      if (D === A && (D = P(ie)), typeof D > "u" && !we)
        throw new l("intrinsic " + le + " exists, but is not available. Please file an issue!");
      return {
        alias: ge,
        name: ie,
        value: D
      };
    }
    throw new s("intrinsic " + le + " does not exist!");
  };
  return Qs = function(le, we) {
    if (typeof le != "string" || le.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, le) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ie = ve(le), ge = ie.length > 0 ? ie[0] : "", D = Ae("%" + ge + "%", we), N = D.name, B = D.value, H = !1, j = D.alias;
    j && (ge = j[0], ne(ie, Q([0, 1], j)));
    for (var oe = 1, ae = !0; oe < ie.length; oe += 1) {
      var de = ie[oe], pe = be(de, 0, 1), xe = be(de, -1);
      if ((pe === '"' || pe === "'" || pe === "`" || xe === '"' || xe === "'" || xe === "`") && pe !== xe)
        throw new s("property names with quotes must have matching quotes");
      if ((de === "constructor" || !ae) && (H = !0), ge += "." + de, N = "%" + ge + "%", V(S, N))
        B = S[N];
      else if (B != null) {
        if (!(de in B)) {
          if (!we)
            throw new l("base intrinsic for " + le + " exists, but the property is not available.");
          return;
        }
        if (z && oe + 1 >= ie.length) {
          var ze = z(B, de);
          ae = !!ze, ae && "get" in ze && !("originalValue" in ze.get) ? B = ze.get : B = B[de];
        } else
          ae = V(B, de), B = B[de];
        ae && !H && (S[N] = B);
      }
    }
    return B;
  }, Qs;
}
var ei, rd;
function s0() {
  if (rd) return ei;
  rd = 1;
  var e = /* @__PURE__ */ Al(), t = a0(), n = t([e("%String.prototype.indexOf%")]);
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
var ti, od;
function i0() {
  if (od) return ti;
  od = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ s0(), n = /* @__PURE__ */ Fa(), r = /* @__PURE__ */ br(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return ti = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, g = {
      assert: function(y) {
        if (!g.has(y))
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
    return g;
  }, ti;
}
var ni, ad;
function vN() {
  if (ad) return ni;
  ad = 1;
  var e = /* @__PURE__ */ Al(), t = /* @__PURE__ */ s0(), n = /* @__PURE__ */ Fa(), r = i0(), o = /* @__PURE__ */ br(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return ni = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, g, y = {
        assert: function(m) {
          if (!y.has(m))
            throw new o("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (a && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return u(f, m);
          } else if (r && g)
            return g.delete(m);
          return !1;
        },
        get: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? s(f, m) : g && g.get(m);
        },
        has: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? d(f, m) : !!g && g.has(m);
        },
        set: function(m, p) {
          a && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new a()), l(f, m, p)) : r && (g || (g = r()), g.set(m, p));
        }
      };
      return y;
    }
  ) : r, ni;
}
var ri, sd;
function l0() {
  if (sd) return ri;
  sd = 1;
  var e = /* @__PURE__ */ br(), t = /* @__PURE__ */ Fa(), n = HO(), r = i0(), o = vN(), a = o || r || n;
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
var oi, id;
function Tl() {
  if (id) return oi;
  id = 1;
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
var ai, ld;
function u0() {
  if (ld) return ai;
  ld = 1;
  var e = /* @__PURE__ */ Tl(), t = l0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), a = function(v, k) {
    return o.set(v, k), v;
  }, s = function(v) {
    return o.has(v);
  }, l = function(v) {
    return o.get(v);
  }, d = function(v, k) {
    o.set(v, k);
  }, u = (function() {
    for (var w = [], v = 0; v < 256; ++v)
      w[w.length] = "%" + ((v < 16 ? "0" : "") + v.toString(16)).toUpperCase();
    return w;
  })(), c = function(v) {
    for (; v.length > 1; ) {
      var k = v.pop(), L = k.obj[k.prop];
      if (r(L)) {
        for (var M = [], I = 0; I < L.length; ++I)
          typeof L[I] < "u" && (M[M.length] = L[I]);
        k.obj[k.prop] = M;
      }
    }
  }, f = function(v, k) {
    for (var L = k && k.plainObjects ? { __proto__: null } : {}, M = 0; M < v.length; ++M)
      typeof v[M] < "u" && (L[M] = v[M]);
    return L;
  }, g = function w(v, k, L) {
    if (!k)
      return v;
    if (typeof k != "object" && typeof k != "function") {
      if (r(v)) {
        var M = v.length;
        if (L && typeof L.arrayLimit == "number" && M > L.arrayLimit)
          return a(f(v.concat(k), L), M);
        v[M] = k;
      } else if (v && typeof v == "object")
        if (s(v)) {
          var I = l(v) + 1;
          v[I] = k, d(v, I);
        } else {
          if (L && L.strictMerge)
            return [v, k];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, k)) && (v[k] = !0);
        }
      else
        return [v, k];
      return v;
    }
    if (!v || typeof v != "object") {
      if (s(k)) {
        for (var A = Object.keys(k), q = L && L.plainObjects ? { __proto__: null, 0: v } : { 0: v }, S = 0; S < A.length; S++) {
          var F = parseInt(A[S], 10);
          q[F + 1] = k[A[S]];
        }
        return a(q, l(k) + 1);
      }
      var P = [v].concat(k);
      return L && typeof L.arrayLimit == "number" && P.length > L.arrayLimit ? a(f(P, L), P.length - 1) : P;
    }
    var R = v;
    return r(v) && !r(k) && (R = f(v, L)), r(v) && r(k) ? (k.forEach(function(x, V) {
      if (n.call(v, V)) {
        var Q = v[V];
        Q && typeof Q == "object" && x && typeof x == "object" ? v[V] = w(Q, x, L) : v[v.length] = x;
      } else
        v[V] = x;
    }), v) : Object.keys(k).reduce(function(x, V) {
      var Q = k[V];
      if (n.call(x, V) ? x[V] = w(x[V], Q, L) : x[V] = Q, s(k) && !s(x) && a(x, l(k)), s(x)) {
        var ne = parseInt(V, 10);
        String(ne) === V && ne >= 0 && ne > l(x) && d(x, ne);
      }
      return x;
    }, R);
  }, y = function(v, k) {
    return Object.keys(k).reduce(function(L, M) {
      return L[M] = k[M], L;
    }, v);
  }, m = function(w, v, k) {
    var L = w.replace(/\+/g, " ");
    if (k === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, p = 1024, h = function(v, k, L, M, I) {
    if (v.length === 0)
      return v;
    var A = v;
    if (typeof v == "symbol" ? A = Symbol.prototype.toString.call(v) : typeof v != "string" && (A = String(v)), L === "iso-8859-1")
      return escape(A).replace(/%u[0-9a-f]{4}/gi, function(V) {
        return "%26%23" + parseInt(V.slice(2), 16) + "%3B";
      });
    for (var q = "", S = 0; S < A.length; S += p) {
      for (var F = A.length >= p ? A.slice(S, S + p) : A, P = [], R = 0; R < F.length; ++R) {
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
  }, b = function(v) {
    for (var k = [{ obj: { o: v }, prop: "o" }], L = [], M = 0; M < k.length; ++M)
      for (var I = k[M], A = I.obj[I.prop], q = Object.keys(A), S = 0; S < q.length; ++S) {
        var F = q[S], P = A[F];
        typeof P == "object" && P !== null && L.indexOf(P) === -1 && (k[k.length] = { obj: A, prop: F }, L[L.length] = P);
      }
    return c(k), v;
  }, z = function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }, _ = function(v) {
    return !v || typeof v != "object" ? !1 : !!(v.constructor && v.constructor.isBuffer && v.constructor.isBuffer(v));
  }, T = function(v, k, L, M) {
    if (s(v)) {
      var I = l(v) + 1;
      return v[I] = k, d(v, I), v;
    }
    var A = [].concat(v, k);
    return A.length > L ? a(f(A, { plainObjects: M }), A.length - 1) : A;
  }, $ = function(v, k) {
    if (r(v)) {
      for (var L = [], M = 0; M < v.length; M += 1)
        L[L.length] = k(v[M]);
      return L;
    }
    return k(v);
  };
  return ai = {
    arrayToObject: f,
    assign: y,
    combine: T,
    compact: b,
    decode: m,
    encode: h,
    isBuffer: _,
    isOverflow: s,
    isRegExp: z,
    markOverflow: a,
    maybeMap: $,
    merge: g
  }, ai;
}
var si, ud;
function gN() {
  if (ud) return si;
  ud = 1;
  var e = l0(), t = /* @__PURE__ */ u0(), n = /* @__PURE__ */ Tl(), r = Object.prototype.hasOwnProperty, o = {
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
  }, g = {}, y = function p(h, b, z, _, T, $, w, v, k, L, M, I, A, q, S, F, P, R) {
    for (var x = h, V = R, Q = 0, ne = !1; (V = V.get(g)) !== void 0 && !ne; ) {
      var fe = V.get(h);
      if (Q += 1, typeof fe < "u") {
        if (fe === Q)
          throw new RangeError("Cyclic object value");
        ne = !0;
      }
      typeof V.get(g) > "u" && (Q = 0);
    }
    if (typeof L == "function" ? x = L(b, x) : x instanceof Date ? x = A(x) : z === "comma" && a(x) && (x = t.maybeMap(x, function(N) {
      return N instanceof Date ? A(N) : N;
    })), x === null) {
      if ($)
        return k && !F ? k(b, c.encoder, P, "key", q) : b;
      x = "";
    }
    if (f(x) || t.isBuffer(x)) {
      if (k) {
        var be = F ? b : k(b, c.encoder, P, "key", q);
        return [S(be) + "=" + S(k(x, c.encoder, P, "value", q))];
      }
      return [S(b) + "=" + S(String(x))];
    }
    var _e = [];
    if (typeof x > "u")
      return _e;
    var re;
    if (z === "comma" && a(x))
      F && k && (x = t.maybeMap(x, k)), re = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (a(L))
      re = L;
    else {
      var se = Object.keys(x);
      re = M ? se.sort(M) : se;
    }
    var ve = v ? String(b).replace(/\./g, "%2E") : String(b), Ae = _ && a(x) && x.length === 1 ? ve + "[]" : ve;
    if (T && a(x) && x.length === 0)
      return Ae + "[]";
    for (var Ee = 0; Ee < re.length; ++Ee) {
      var le = re[Ee], we = typeof le == "object" && le && typeof le.value < "u" ? le.value : x[le];
      if (!(w && we === null)) {
        var ie = I && v ? String(le).replace(/\./g, "%2E") : String(le), ge = a(x) ? typeof z == "function" ? z(Ae, ie) : Ae : Ae + (I ? "." + ie : "[" + ie + "]");
        R.set(h, Q);
        var D = e();
        D.set(g, R), l(_e, p(
          we,
          ge,
          z,
          _,
          T,
          $,
          w,
          v,
          z === "comma" && F && a(x) ? null : k,
          L,
          M,
          I,
          A,
          q,
          S,
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
    var b = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var z = n.default;
    if (typeof h.format < "u") {
      if (!r.call(n.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      z = h.format;
    }
    var _ = n.formatters[z], T = c.filter;
    (typeof h.filter == "function" || a(h.filter)) && (T = h.filter);
    var $;
    if (h.arrayFormat in o ? $ = h.arrayFormat : "indices" in h ? $ = h.indices ? "indices" : "repeat" : $ = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var w = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: w,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: $,
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
      formatter: _,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return si = function(p, h) {
    var b = p, z = m(h), _, T;
    typeof z.filter == "function" ? (T = z.filter, b = T("", b)) : a(z.filter) && (T = z.filter, _ = T);
    var $ = [];
    if (typeof b != "object" || b === null)
      return "";
    var w = o[z.arrayFormat], v = w === "comma" && z.commaRoundTrip;
    _ || (_ = Object.keys(b)), z.sort && _.sort(z.sort);
    for (var k = e(), L = 0; L < _.length; ++L) {
      var M = _[L], I = b[M];
      z.skipNulls && I === null || l($, y(
        I,
        M,
        w,
        v,
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
    var A = $.join(z.delimiter), q = z.addQueryPrefix === !0 ? "?" : "";
    return z.charsetSentinel && (z.charset === "iso-8859-1" ? q += "utf8=%26%2310003%3B&" : q += "utf8=%E2%9C%93&"), A.length > 0 ? q + A : "";
  }, si;
}
var ii, cd;
function yN() {
  if (cd) return ii;
  cd = 1;
  var e = /* @__PURE__ */ u0(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    var z = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, _ = b.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof z < "u" ? z + 1 : z
    );
    if (p.throwOnLimitExceeded && typeof z < "u" && _.length > z)
      throw new RangeError("Parameter limit exceeded. Only " + z + " parameter" + (z === 1 ? "" : "s") + " allowed.");
    var T = -1, $, w = p.charset;
    if (p.charsetSentinel)
      for ($ = 0; $ < _.length; ++$)
        _[$].indexOf("utf8=") === 0 && (_[$] === l ? w = "utf-8" : _[$] === s && (w = "iso-8859-1"), T = $, $ = _.length);
    for ($ = 0; $ < _.length; ++$)
      if ($ !== T) {
        var v = _[$], k = v.indexOf("]="), L = k === -1 ? v.indexOf("=") : k + 1, M, I;
        if (L === -1 ? (M = p.decoder(v, r.decoder, w, "key"), I = p.strictNullHandling ? null : "") : (M = p.decoder(v.slice(0, L), r.decoder, w, "key"), M !== null && (I = e.maybeMap(
          a(
            v.slice(L + 1),
            p,
            n(h[M]) ? h[M].length : 0
          ),
          function(q) {
            return p.decoder(q, r.decoder, w, "value");
          }
        ))), I && p.interpretNumericEntities && w === "iso-8859-1" && (I = o(String(I))), v.indexOf("[]=") > -1 && (I = n(I) ? [I] : I), p.comma && n(I) && I.length > p.arrayLimit) {
          if (p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          I = e.combine([], I, p.arrayLimit, p.plainObjects);
        }
        if (M !== null) {
          var A = t.call(h, M);
          A && (p.duplicates === "combine" || v.indexOf("[]=") > -1) ? h[M] = e.combine(
            h[M],
            I,
            p.arrayLimit,
            p.plainObjects
          ) : (!A || p.duplicates === "last") && (h[M] = I);
        }
      }
    return h;
  }, u = function(y, m, p, h) {
    var b = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var z = y.slice(0, -1).join("");
      b = Array.isArray(m) && m[z] ? m[z].length : 0;
    }
    for (var _ = h ? m : a(m, p, b), T = y.length - 1; T >= 0; --T) {
      var $, w = y[T];
      if (w === "[]" && p.parseArrays)
        e.isOverflow(_) ? $ = _ : $ = p.allowEmptyArrays && (_ === "" || p.strictNullHandling && _ === null) ? [] : e.combine(
          [],
          _,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        $ = p.plainObjects ? { __proto__: null } : {};
        var v = w.charAt(0) === "[" && w.charAt(w.length - 1) === "]" ? w.slice(1, -1) : w, k = p.decodeDotInKeys ? v.replace(/%2E/g, ".") : v, L = parseInt(k, 10), M = !isNaN(L) && w !== k && String(L) === k && L >= 0 && p.parseArrays;
        if (!p.parseArrays && k === "")
          $ = { 0: _ };
        else if (M && L < p.arrayLimit)
          $ = [], $[L] = _;
        else {
          if (M && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          M ? ($[L] = _, e.markOverflow($, L)) : k !== "__proto__" && ($[k] = _);
        }
      }
      _ = $;
    }
    return _;
  }, c = function(m, p) {
    var h = p.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, h) && !p.allowPrototypes ? void 0 : [h];
    var b = /(\[[^[\]]*])/, z = /(\[[^[\]]*])/g, _ = b.exec(h), T = _ ? h.slice(0, _.index) : h, $ = [];
    if (T) {
      if (!p.plainObjects && t.call(Object.prototype, T) && !p.allowPrototypes)
        return;
      $[$.length] = T;
    }
    for (var w = 0; (_ = z.exec(h)) !== null && w < p.depth; ) {
      w += 1;
      var v = _[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, v) && !p.allowPrototypes)
        return;
      $[$.length] = _[1];
    }
    if (_) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      $[$.length] = "[" + h.slice(_.index) + "]";
    }
    return $;
  }, f = function(m, p, h, b) {
    if (m) {
      var z = c(m, h);
      if (z)
        return u(z, p, h, b);
    }
  }, g = function(m) {
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
    var p = g(m);
    if (y === "" || y === null || typeof y > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var h = typeof y == "string" ? d(y, p) : y, b = p.plainObjects ? { __proto__: null } : {}, z = Object.keys(h), _ = 0; _ < z.length; ++_) {
      var T = z[_], $ = f(T, h[T], p, typeof y == "string");
      b = e.merge(b, $, p);
    }
    return p.allowSparse === !0 ? b : e.compact(b);
  }, ii;
}
var li, dd;
function bN() {
  if (dd) return li;
  dd = 1;
  var e = /* @__PURE__ */ gN(), t = /* @__PURE__ */ yN(), n = /* @__PURE__ */ Tl();
  return li = {
    formats: n,
    parse: t,
    stringify: e
  }, li;
}
var fd = /* @__PURE__ */ bN();
function c0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: xN } = Object.prototype, { getPrototypeOf: Ol } = Object, { iterator: La, toStringTag: d0 } = Symbol, Ua = /* @__PURE__ */ ((e) => (t) => {
  const n = xN.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ut = (e) => (e = e.toLowerCase(), (t) => Ua(t) === e), Va = (e) => (t) => typeof t === e, { isArray: xr } = Array, hr = Va("undefined");
function co(e) {
  return e !== null && !hr(e) && e.constructor !== null && !hr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const f0 = Ut("ArrayBuffer");
function wN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && f0(e.buffer), t;
}
const _N = Va("string"), ht = Va("function"), p0 = Va("number"), fo = (e) => e !== null && typeof e == "object", kN = (e) => e === !0 || e === !1, qo = (e) => {
  if (Ua(e) !== "object")
    return !1;
  const t = Ol(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(d0 in e) && !(La in e);
}, SN = (e) => {
  if (!fo(e) || co(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, EN = Ut("Date"), zN = Ut("File"), $N = (e) => !!(e && typeof e.uri < "u"), PN = (e) => e && typeof e.getParts < "u", CN = Ut("Blob"), AN = Ut("FileList"), TN = (e) => fo(e) && ht(e.pipe);
function ON() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const pd = ON(), hd = typeof pd.FormData < "u" ? pd.FormData : void 0, NN = (e) => {
  let t;
  return e && (hd && e instanceof hd || ht(e.append) && ((t = Ua(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, RN = Ut("URLSearchParams"), [IN, MN, DN, FN] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ut), BN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function h0(e, t) {
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
const In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, m0 = (e) => !hr(e) && e !== In;
function Wi() {
  const { caseless: e, skipUndefined: t } = m0(this) && this || {}, n = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const s = e && h0(n, a) || a;
    qo(n[s]) && qo(o) ? n[s] = Wi(n[s], o) : qo(o) ? n[s] = Wi({}, o) : xr(o) ? n[s] = o.slice() : (!t || !hr(o)) && (n[s] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && po(arguments[o], r);
  return n;
}
const LN = (e, t, n, { allOwnKeys: r } = {}) => (po(
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
), e), UN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), VN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qN = (e, t, n, r) => {
  let o, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Ol(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, jN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, HN = (e) => {
  if (!e) return null;
  if (xr(e)) return e;
  let t = e.length;
  if (!p0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, GN = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ol(Uint8Array)), WN = (e, t) => {
  const r = (e && e[La]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, XN = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, YN = Ut("HTMLFormElement"), KN = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), md = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ZN = Ut("RegExp"), v0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  po(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, JN = (e) => {
  v0(e, (t, n) => {
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
}, QN = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return xr(e) ? r(e) : r(String(e).split(t)), n;
}, e8 = () => {
}, t8 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function n8(e) {
  return !!(e && ht(e.append) && e[d0] === "FormData" && e[La]);
}
const r8 = (e) => {
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
          !hr(d) && (a[l] = d);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, o8 = Ut("AsyncFunction"), a8 = (e) => e && (fo(e) || ht(e)) && ht(e.then) && ht(e.catch), g0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (In.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === In && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), In.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(In.postMessage)), s8 = typeof queueMicrotask < "u" ? queueMicrotask.bind(In) : typeof process < "u" && process.nextTick || g0, i8 = (e) => e != null && ht(e[La]), K = {
  isArray: xr,
  isArrayBuffer: f0,
  isBuffer: co,
  isFormData: NN,
  isArrayBufferView: wN,
  isString: _N,
  isNumber: p0,
  isBoolean: kN,
  isObject: fo,
  isPlainObject: qo,
  isEmptyObject: SN,
  isReadableStream: IN,
  isRequest: MN,
  isResponse: DN,
  isHeaders: FN,
  isUndefined: hr,
  isDate: EN,
  isFile: zN,
  isReactNativeBlob: $N,
  isReactNative: PN,
  isBlob: CN,
  isRegExp: ZN,
  isFunction: ht,
  isStream: TN,
  isURLSearchParams: RN,
  isTypedArray: GN,
  isFileList: AN,
  forEach: po,
  merge: Wi,
  extend: LN,
  trim: BN,
  stripBOM: UN,
  inherits: VN,
  toFlatObject: qN,
  kindOf: Ua,
  kindOfTest: Ut,
  endsWith: jN,
  toArray: HN,
  forEachEntry: WN,
  matchAll: XN,
  isHTMLForm: YN,
  hasOwnProperty: md,
  hasOwnProp: md,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: v0,
  freezeMethods: JN,
  toObjectSet: QN,
  toCamelCase: KN,
  noop: e8,
  toFiniteNumber: t8,
  findKey: h0,
  global: In,
  isContextDefined: m0,
  isSpecCompliantForm: n8,
  toJSONObject: r8,
  isAsyncFn: o8,
  isThenable: a8,
  setImmediate: g0,
  asap: s8,
  isIterable: i8
};
let Se = class y0 extends Error {
  static from(t, n, r, o, a, s) {
    const l = new y0(t.message, n || t.code, r, o, a);
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
const l8 = null;
function Xi(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function b0(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ui(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = b0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function u8(e) {
  return K.isArray(e) && !e.some(Xi);
}
const c8 = K.toFlatObject(K, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qa(e, t, n) {
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
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(m) || K.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, p, h) {
    let b = m;
    if (K.isReactNative(t) && K.isReactNativeBlob(m))
      return t.append(ui(h, p, a), u(m)), !1;
    if (m && !h && typeof m == "object") {
      if (K.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (K.isArray(m) && u8(m) || (K.isFileList(m) || K.endsWith(p, "[]")) && (b = K.toArray(m)))
        return p = b0(p), b.forEach(function(_, T) {
          !(K.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ui([p], T, a) : s === null ? p : p + "[]",
            u(_)
          );
        }), !1;
    }
    return Xi(m) ? !0 : (t.append(ui(h, p, a), u(m)), !1);
  }
  const f = [], g = Object.assign(c8, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Xi
  });
  function y(m, p) {
    if (!K.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), K.forEach(m, function(b, z) {
        (!(K.isUndefined(b) || b === null) && o.call(t, b, K.isString(z) ? z.trim() : z, p, g)) === !0 && y(b, p ? p.concat(z) : [z]);
      }), f.pop();
    }
  }
  if (!K.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function vd(e) {
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
  this._pairs = [], e && qa(e, this, t);
}
const x0 = Nl.prototype;
x0.append = function(t, n) {
  this._pairs.push([t, n]);
};
x0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, vd);
  } : vd;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function d8(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function w0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || d8, o = K.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let s;
  if (a ? s = a(t, o) : s = K.isURLSearchParams(t) ? t.toString() : new Nl(t, o).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class gd {
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
}, f8 = typeof URLSearchParams < "u" ? URLSearchParams : Nl, p8 = typeof FormData < "u" ? FormData : null, h8 = typeof Blob < "u" ? Blob : null, m8 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: f8,
    FormData: p8,
    Blob: h8
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Il = typeof window < "u" && typeof document < "u", Yi = typeof navigator == "object" && navigator || void 0, v8 = Il && (!Yi || ["ReactNative", "NativeScript", "NS"].indexOf(Yi.product) < 0), g8 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", y8 = Il && window.location.href || "http://localhost", b8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Il,
  hasStandardBrowserEnv: v8,
  hasStandardBrowserWebWorkerEnv: g8,
  navigator: Yi,
  origin: y8
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...b8,
  ...m8
};
function x8(e, t) {
  return qa(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ct.isNode && K.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function w8(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _8(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function _0(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), d = a >= n.length;
    return s = !s && K.isArray(o) ? o.length : s, d ? (K.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !l) : ((!o[s] || !K.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && K.isArray(o[s]) && (o[s] = _8(o[s])), !l);
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const n = {};
    return K.forEachEntry(e, (r, o) => {
      t(w8(r), o, n, 0);
    }), n;
  }
  return null;
}
function k8(e, t, n) {
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
        return o ? JSON.stringify(_0(t)) : t;
      if (K.isArrayBuffer(t) || K.isBuffer(t) || K.isStream(t) || K.isFile(t) || K.isBlob(t) || K.isReadableStream(t))
        return t;
      if (K.isArrayBufferView(t))
        return t.buffer;
      if (K.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return x8(t, this.formSerializer).toString();
        if ((l = K.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return qa(
            l ? { "files[]": t } : t,
            d && new d(),
            this.formSerializer
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), k8(t)) : t;
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
  ho.headers[e] = {};
});
const S8 = K.toObjectSet([
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
]), E8 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && S8[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, yd = /* @__PURE__ */ Symbol("internals"), z8 = (e) => !/[\r\n]/.test(e);
function k0(e, t) {
  if (!(e === !1 || e == null)) {
    if (K.isArray(e)) {
      e.forEach((n) => k0(n, t));
      return;
    }
    if (!z8(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function $8(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function jo(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(jo) : $8(String(e));
}
function P8(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const C8 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ci(e, t, n, r, o) {
  if (K.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!K.isString(t)) {
    if (K.isString(r))
      return t.indexOf(r) !== -1;
    if (K.isRegExp(r))
      return r.test(t);
  }
}
function A8(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function T8(e, t) {
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
      const c = $r(d);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = K.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (k0(l, d), o[f || d] = jo(l));
    }
    const s = (l, d) => K.forEach(l, (u, c) => a(u, c, d));
    if (K.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (K.isString(t) && (t = t.trim()) && !C8(t))
      s(E8(t), n);
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
    if (t = $r(t), t) {
      const r = K.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return P8(o);
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
      return !!(r && this[r] !== void 0 && (!n || ci(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = $r(s), s) {
        const l = K.findKey(r, s);
        l && (!n || ci(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return K.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ci(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return K.forEach(this, (o, a) => {
      const s = K.findKey(r, a);
      if (s) {
        n[s] = jo(o), delete n[a];
        return;
      }
      const l = t ? A8(a) : String(a).trim();
      l !== a && delete n[a], n[l] = jo(o), r[l] = !0;
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
    const r = (this[yd] = this[yd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const l = $r(s);
      r[l] || (T8(o, s), r[l] = !0);
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
function di(e, t) {
  const n = this || ho, r = t || n, o = mt.from(r.headers);
  let a = r.data;
  return K.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function S0(e) {
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
function E0(e, t, n) {
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
function O8(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function N8(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), c = r[a];
    s || (s = u), n[o] = d, r[o] = u;
    let f = a, g = 0;
    for (; f !== o; )
      g += n[f++], f = f % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), u - s < t)
      return;
    const y = c && u - c;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function R8(e, t) {
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
const ha = (e, t, n = 3) => {
  let r = 0;
  const o = N8(50, 250);
  return R8((a) => {
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
}, bd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, xd = (e) => (...t) => K.asap(() => e(...t)), I8 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, M8 = ct.hasStandardBrowserEnv ? (
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
function D8(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function F8(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function z0(e, t, n) {
  let r = !D8(t);
  return e && (r || n == !1) ? F8(e, t) : t;
}
const wd = (e) => e instanceof mt ? { ...e } : e;
function Gn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, g) {
    return K.isPlainObject(u) && K.isPlainObject(c) ? K.merge.call({ caseless: g }, u, c) : K.isPlainObject(c) ? K.merge({}, c) : K.isArray(c) ? c.slice() : c;
  }
  function o(u, c, f, g) {
    if (K.isUndefined(c)) {
      if (!K.isUndefined(u))
        return r(void 0, u, f, g);
    } else return r(u, c, f, g);
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
    headers: (u, c, f) => o(wd(u), wd(c), f, !0)
  };
  return K.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = K.hasOwnProp(d, c) ? d[c] : o, g = f(e[c], t[c], c);
    K.isUndefined(g) && f !== l || (n[c] = g);
  }), n;
}
const $0 = (e) => {
  const t = Gn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: l } = t;
  if (t.headers = s = mt.from(s), t.url = w0(
    z0(t.baseURL, t.url, t.allowAbsoluteUrls),
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
  if (ct.hasStandardBrowserEnv && (r && K.isFunction(r) && (r = r(t)), r || r !== !1 && I8(t.url))) {
    const d = o && a && M8.read(a);
    d && s.set(o, d);
  }
  return t;
}, B8 = typeof XMLHttpRequest < "u", L8 = B8 && function(e) {
  return new Promise(function(n, r) {
    const o = $0(e);
    let a = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = o, c, f, g, y, m;
    function p() {
      y && y(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function b() {
      if (!h)
        return;
      const _ = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), $ = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: _,
        config: e,
        request: h
      };
      E0(
        function(v) {
          n(v), p();
        },
        function(v) {
          r(v), p();
        },
        $
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new Se("Request aborted", Se.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(T) {
      const $ = T && T.message ? T.message : "Network Error", w = new Se($, Se.ERR_NETWORK, e, h);
      w.event = T || null, r(w), h = null;
    }, h.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || Rl;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(
        new Se(
          T,
          $.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in h && K.forEach(s.toJSON(), function(T, $) {
      h.setRequestHeader($, T);
    }), K.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), l && l !== "json" && (h.responseType = o.responseType), u && ([g, m] = ha(u, !0), h.addEventListener("progress", g)), d && h.upload && ([f, y] = ha(d), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (_) => {
      h && (r(!_ || _.type ? new mo(null, e, h) : _), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const z = O8(o.url);
    if (z && ct.protocols.indexOf(z) === -1) {
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
}, U8 = (e, t) => {
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
    return d.unsubscribe = () => K.asap(l), d;
  }
}, V8 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, q8 = async function* (e, t) {
  for await (const n of j8(e))
    yield* V8(n, t);
}, j8 = async function* (e) {
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
}, _d = (e, t, n, r) => {
  const o = q8(e, t);
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
            let g = a += f;
            n(g);
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
}, kd = 64 * 1024, { isFunction: To } = K, H8 = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(K.global), { ReadableStream: Sd, TextEncoder: Ed } = K.global, zd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, G8 = (e) => {
  e = K.merge.call(
    {
      skipUndefined: !0
    },
    H8,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? To(t) : typeof fetch == "function", a = To(n), s = To(r);
  if (!o)
    return !1;
  const l = o && To(Sd), d = o && (typeof Ed == "function" ? /* @__PURE__ */ ((m) => (p) => m.encode(p))(new Ed()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), u = a && l && zd(() => {
    let m = !1;
    const p = new Sd(), h = new n(ct.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), m && !h;
  }), c = s && l && zd(() => K.isReadableStream(new r("").body)), f = {
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
  const g = async (m) => {
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
  }, y = async (m, p) => {
    const h = K.toFiniteNumber(m.getContentLength());
    return h ?? g(p);
  };
  return async (m) => {
    let {
      url: p,
      method: h,
      data: b,
      signal: z,
      cancelToken: _,
      timeout: T,
      onDownloadProgress: $,
      onUploadProgress: w,
      responseType: v,
      headers: k,
      withCredentials: L = "same-origin",
      fetchOptions: M
    } = $0(m), I = t || fetch;
    v = v ? (v + "").toLowerCase() : "text";
    let A = U8(
      [z, _ && _.toAbortSignal()],
      T
    ), q = null;
    const S = A && A.unsubscribe && (() => {
      A.unsubscribe();
    });
    let F;
    try {
      if (w && u && h !== "get" && h !== "head" && (F = await y(k, b)) !== 0) {
        let ne = new n(p, {
          method: "POST",
          body: b,
          duplex: "half"
        }), fe;
        if (K.isFormData(b) && (fe = ne.headers.get("content-type")) && k.setContentType(fe), ne.body) {
          const [be, _e] = bd(
            F,
            ha(xd(w))
          );
          b = _d(ne.body, kd, be, _e);
        }
      }
      K.isString(L) || (L = L ? "include" : "omit");
      const P = a && "credentials" in n.prototype, R = {
        ...M,
        signal: A,
        method: h.toUpperCase(),
        headers: k.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: P ? L : void 0
      };
      q = a && new n(p, R);
      let x = await (a ? I(q, M) : I(p, R));
      const V = c && (v === "stream" || v === "response");
      if (c && ($ || V && S)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach((re) => {
          ne[re] = x[re];
        });
        const fe = K.toFiniteNumber(x.headers.get("content-length")), [be, _e] = $ && bd(
          fe,
          ha(xd($), !0)
        ) || [];
        x = new r(
          _d(x.body, kd, be, () => {
            _e && _e(), S && S();
          }),
          ne
        );
      }
      v = v || "text";
      let Q = await f[K.findKey(f, v) || "text"](
        x,
        m
      );
      return !V && S && S(), await new Promise((ne, fe) => {
        E0(ne, fe, {
          data: Q,
          headers: mt.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: m,
          request: q
        });
      });
    } catch (P) {
      throw S && S(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new Se(
          "Network Error",
          Se.ERR_NETWORK,
          m,
          q,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : Se.from(P, P && P.code, m, q, P && P.response);
    }
  };
}, W8 = /* @__PURE__ */ new Map(), P0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let s = a.length, l = s, d, u, c = W8;
  for (; l--; )
    d = a[l], u = c.get(d), u === void 0 && c.set(d, u = l ? /* @__PURE__ */ new Map() : G8(t)), c = u;
  return u;
};
P0();
const Ml = {
  http: l8,
  xhr: L8,
  fetch: {
    get: P0
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
const $d = (e) => `- ${e}`, X8 = (e) => K.isFunction(e) || e === null || e === !1;
function Y8(e, t) {
  e = K.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (o = r, !X8(r) && (o = Ml[(l = String(r)).toLowerCase()], o === void 0))
      throw new Se(`Unknown adapter '${l}'`);
    if (o && (K.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(a).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? s.length > 1 ? `since :
` + s.map($d).join(`
`) : " " + $d(s[0]) : "as no adapter specified";
    throw new Se(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const C0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Y8,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ml
};
function fi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new mo(null, e);
}
function Pd(e) {
  return fi(e), e.headers = mt.from(e.headers), e.data = di.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), C0.getAdapter(e.adapter || ho.adapter, e)(e).then(
    function(r) {
      return fi(e), r.data = di.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return S0(r) || (fi(e), r && r.response && (r.response.data = di.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const A0 = "1.15.0", ja = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ja[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Cd = {};
ja.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + A0 + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new Se(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Se.ERR_DEPRECATED
      );
    return n && !Cd[s] && (Cd[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
ja.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function K8(e, t, n) {
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
const Ho = {
  assertOptions: K8,
  validators: ja
}, Et = Ho.validators;
let Bn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new gd(),
      response: new gd()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Gn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Ho.assertOptions(
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
    } : Ho.assertOptions(
      o,
      {
        encode: Et.function,
        serialize: Et.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ho.assertOptions(
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
    let c, f = 0, g;
    if (!d) {
      const m = [Pd.bind(this), void 0];
      for (m.unshift(...l), m.push(...u), g = m.length, c = Promise.resolve(n); f < g; )
        c = c.then(m[f++], m[f++]);
      return c;
    }
    g = l.length;
    let y = n;
    for (; f < g; ) {
      const m = l[f++], p = l[f++];
      try {
        y = m(y);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      c = Pd.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, g = u.length; f < g; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Gn(this.defaults, t);
    const n = z0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return w0(n, t.params, t.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function(t) {
  Bn.prototype[t] = function(n, r) {
    return this.request(
      Gn(r || {}, {
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
        Gn(l || {}, {
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
  Bn.prototype[t] = n(), Bn.prototype[t + "Form"] = n(!0);
});
let Z8 = class T0 {
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
      token: new T0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function J8(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Q8(e) {
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
function O0(e) {
  const t = new Bn(e), n = c0(Bn.prototype.request, t);
  return K.extend(n, Bn.prototype, t, { allOwnKeys: !0 }), K.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return O0(Gn(e, o));
  }, n;
}
const Je = O0(ho);
Je.Axios = Bn;
Je.CanceledError = mo;
Je.CancelToken = Z8;
Je.isCancel = S0;
Je.VERSION = A0;
Je.toFormData = qa;
Je.AxiosError = Se;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = J8;
Je.isAxiosError = Q8;
Je.mergeConfig = Gn;
Je.AxiosHeaders = mt;
Je.formToJSON = (e) => _0(K.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = C0.getAdapter;
Je.HttpStatusCode = Ki;
Je.default = Je;
const {
  Axios: jR,
  AxiosError: HR,
  CanceledError: GR,
  isCancel: N0,
  CancelToken: WR,
  VERSION: XR,
  all: YR,
  Cancel: KR,
  isAxiosError: R0,
  spread: ZR,
  toFormData: JR,
  AxiosHeaders: QR,
  HttpStatusCode: eI,
  formToJSON: tI,
  getAdapter: nI,
  mergeConfig: e6
} = Je;
var t6 = class {
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
    return Qp(this.config, e) ? wt(this.config, e) : wt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? zt(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      zt(this.config, n, r);
    });
  }
}, En = new t6({
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
var Ad = (e) => St("before", { cancelable: !0, detail: { visit: e } }), n6 = (e) => St("error", { detail: { errors: e } }), r6 = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), o6 = (e) => St("finish", { detail: { visit: e } }), a6 = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), s6 = (e) => St("beforeUpdate", { detail: { page: e } }), Lr = (e) => St("navigate", { detail: { page: e } }), i6 = (e) => St("progress", { detail: { progress: e } }), l6 = (e) => St("start", { detail: { visit: e } }), u6 = (e) => St("success", { detail: { page: e } }), c6 = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), d6 = (e) => St("prefetching", { detail: { visit: e } }), ma = (e) => St("flash", { detail: { flash: e } }), dt = class {
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
var f6 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = I0(), n = await M0(), r = await y6(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await h6(t, r, e);
}, mr = {
  key: "historyKey",
  iv: "historyIv"
}, p6 = async (e) => {
  const t = I0(), n = await M0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await m6(t, n, e);
}, h6 = async (e, t, n) => {
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
}, m6 = async (e, t, n) => {
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
  const e = dt.get(mr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(mr.iv, Array.from(t)), t;
}, v6 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), g6 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(mr.key, Array.from(new Uint8Array(t)));
}, y6 = async (e) => {
  if (e)
    return e;
  const t = await v6();
  return t ? (await g6(t), t) : null;
}, M0 = async () => {
  const e = dt.get(mr.key);
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
}, D0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !b6(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, b6 = (e, t) => {
  switch (typeof e) {
    case "object":
      return D0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, x6 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Td = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(x6))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, w6 = class {
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
        onPrefetched(f, g) {
          e.onPrefetched(f, g);
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
    return [Td(t), Td(n)];
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
    return D0(
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
}, Ht = new w6(), pi = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, _6 = (e) => {
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
}, F0 = (e, t) => {
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
}, Rr = typeof window > "u", k6 = !Rr && /Firefox/i.test(window.navigator.userAgent), ft = class {
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
    if (k6 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
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
function B0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && U0(t, L0(n, o, "indices"), e[o], r);
  return t;
}
function L0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function U0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => U0(e, L0(t, o.toString(), r), n[o], r)
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
  B0(n, e, t, r);
}
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var S6 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? $t(e) : e;
  if ((Zi(t) || r) && !Ji(t) && (En.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = B0(t, new FormData(), null, o)), Ji(t))
    return [a, t];
  const [s, l] = Fl(n, a, t, o);
  return [$t(s), l];
};
function Fl(e, t, n, r = "brackets") {
  const o = e === "get" && !Ji(n) && Object.keys(n).length > 0, a = V0(t.toString()), s = a || t.toString().startsWith("/") || t.toString() === "", l = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), d = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const g = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = fd.stringify(
      { ...fd.parse(f.search, y), ...n },
      {
        encodeValuesOnly: !0,
        arrayFormat: g ? "indices" : r
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
function va(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Od = (e, t) => {
  e.hash && !t.hash && va(e).href === t.href && (t.hash = e.hash);
}, ga = (e, t) => va(e).href === va(t).href, E6 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function cn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function V0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function z6(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var $6 = class {
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
      t = t || ga($t(e.url), d);
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
}, he = new $6(), Ha = class {
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
}, nr = typeof window > "u", Pr = new Ha(), Nd = !nr && /CriOS/.test(window.navigator.userAgent), P6 = class {
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
    if (!nr)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!nr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Pr.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Nd ? new Promise((o) => {
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
    return new Promise((n) => e.encryptHistory ? f6(t).then(n) : n(t));
  }
  processQueue() {
    return Pr.process();
  }
  decrypt(e = null) {
    if (nr)
      return Promise.resolve(e ?? he.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? p6(e) : Promise.resolve(e);
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
    if (he.merge(r), !nr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Pr.add(() => this.getPageData(e).then((o) => {
        const a = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Nd ? new Promise((s) => {
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
    return !nr && !!window.history.state?.page;
  }
  clear() {
    dt.remove(mr.key), dt.remove(mr.iv);
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
var De = new P6(), C6 = class {
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
        ft.restore(De.getScrollRegions()), Lr(he.get());
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
}, Yt = new C6(), A6 = class {
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
}, hi = new A6(), T6 = class {
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
      he.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Lr(he.get());
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
        e.preserveScroll && ft.restore(n), Lr(he.get());
      });
    }).catch(() => {
      Yt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && he.setUrlHash(window.location.hash), he.set(he.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      hi.isReload() ? ft.restore(De.getScrollRegions()) : ft.scrollToAnchor();
      const e = he.get();
      Lr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => ma(t));
    });
  }
}, O6 = class {
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
}, N6 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new O6(e, t, n);
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
}, R6 = new N6(), Qi = class Go {
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
    return new Go(t);
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
    this.params.preserveScroll = Go.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Go.resolvePreserveOption(this.params.preserveState, t);
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
}, q0 = {
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
}, I6 = {
  show(e) {
    const { iframe: t, page: n } = q0.createIframeAndPage(e);
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
}, M6 = new Ha(), Rd = class j0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new j0(t, n, r);
  }
  async handlePrefetch() {
    ga(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return M6.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), c6(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await De.processQueue(), De.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = he.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return n6(r), this.requestParams.all().onError(r);
    }
    Ze.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ze.flush(he.get().url);
    const { flash: n } = he.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (ma(n), this.requestParams.all().onFlash(n)), u6(he.get()), await this.requestParams.all().onSuccess(he.get()), De.preserveUrl = !1;
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
      return Od(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (a6(t))
      return En.get("future.useDialogForErrorModal") ? I6.show(t.data) : q0.show(t.data);
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
      ga(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), he.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = De.preserveUrl ? he.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), s6(t), he.set(t, {
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
    return Od(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
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
        const g = this.mergeOrMatchItems(
          c || [],
          f,
          d,
          a,
          u
        );
        zt(t.props, d, g);
      } else if (typeof f == "object" && f !== null) {
        const g = {
          ...c || {},
          ...f
        };
        zt(t.props, d, g);
      }
    };
    if (n.forEach((d) => s(d, !0)), r.forEach((d) => s(d, !1)), o.forEach((d) => {
      const u = he.get().props[d], c = t.props[d], f = (g, y, m) => Array.isArray(y) ? this.mergeOrMatchItems(g, y, m, a) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (p, h) => (p[h] = f(g ? g[h] : void 0, y[h], `${m}.${h}`), p),
        { ...g }
      ) : y;
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
}, Id = class H0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Qi.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new H0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), l6(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), d6(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Je({
      method: this.requestParams.all().method,
      url: va(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Rd.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Rd.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Je.isCancel(n) && r6(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, o6(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, i6(t), this.requestParams.all().onProgress(t));
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
}, Md = class {
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
}, D6 = class {
  constructor() {
    this.syncRequestStream = new Md({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Md({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Ha();
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
    }), T6.handle(), Yt.init(), Yt.on("missingHistoryItem", () => {
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
    return R6.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Ad(n))
      return;
    const o = $t(he.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? E6(n.url, o) : ga(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !he.isCleared() && !n.preserveUrl && ft.save();
    const l = {
      ...n,
      ...r
    }, d = Ht.get(l);
    d ? (Vr.reveal(d.inFlight), Ht.use(d, l)) : (Vr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Id.create(l, he.get())));
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
    if (l.onBefore(o) === !1 || !Ad(o))
      return;
    Vr.hide(), this.asyncRequestStream.interruptInFlight();
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
          this.asyncRequestStream.send(Id.create(c, he.get()));
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
    he.setFlash(r), Object.keys(r).length && ma(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = he.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((p) => [p.prop, n.props[p.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, a = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: s, onError: l, onFinish: d, onFlash: u, onSuccess: c, ...f } = e, g = {
      ...n,
      ...f,
      flash: a ?? {},
      props: o
    }, y = Qi.resolvePreserveOption(e.preserveScroll ?? !1, g), m = Qi.resolvePreserveOption(e.preserveState ?? !1, g);
    return he.set(g, {
      replace: t,
      preserveScroll: y,
      preserveState: m,
      viewTransition: s
    }).then(() => {
      const p = he.get().flash;
      Object.keys(p).length > 0 && (ma(p), u?.(p));
      const h = he.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        c?.(he.get());
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
    }, [s, l] = S6(
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
}, Wo = class {
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
function F6(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, a) => a === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function B6(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function L6(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function U6(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Xo(e) {
  if (Array.isArray(e))
    return e.map(Xo);
  if (typeof e != "object" || e === null || Dl(e))
    return e;
  if (U6(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = Xo(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Xo(e[n]);
  return t;
}
function Dd(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = B6(F6(n));
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
    L6(t, o.map(String), r);
  }
  return Xo(t);
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
function V6(e, t, n) {
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
  function d(f, g = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = g), c();
  }
  function u() {
    const f = t(""), g = mi.preferredAttribute(), y = {
      ...f ? { title: `<title ${g}="">${f}</title>` } : {}
    }, m = Object.values(r).reduce((p, h) => p.concat(h), []).reduce((p, h) => {
      if (h.indexOf("<") === -1)
        return p;
      if (h.indexOf("<title ") === 0) {
        const z = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = z ? `${z[1]}${t(z[2])}${z[3]}` : h, p;
      }
      const b = h.match(g === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
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
        update: (g) => d(f, g),
        disconnect: () => s(f)
      };
    }
  };
}
var q6 = "X-Inertia-Infinite-Scroll-Merge-Intent", j6 = (e) => {
  const t = () => {
    const b = he.get().scrollProps?.[e.getPropName()];
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
    n.component = he.get().component, n.loading = !1, n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.currentPage, n.requestCount = 0;
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
    const z = t(), _ = s(b);
    n.lastLoadedPage = z.currentPage, n[_] = z[_], n.requestCount += 1, Ze.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, c = () => n.requestCount, f = (b, z = {}) => {
    const _ = l(b);
    n.loading || _ === null || (n.loading = !0, Ze.reload({
      ...z,
      data: { [u()]: _ },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [q6]: b === "previous" ? "prepend" : "append",
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
}, H6 = () => {
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
}, Yo = "infiniteScrollPage", vi = "infiniteScrollIgnore", G0 = (e) => e.dataset[Yo], G6 = (e) => {
  const t = H6();
  let n, r, o, a, s = !1;
  const l = () => {
    a = new MutationObserver((v) => {
      v.forEach((k) => {
        k.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && g.add(L);
        });
      }), T();
    }), a.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (v) => e.onItemIntersected(v.target)
    );
    const w = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, w), o = t.new(e.onNextTriggered, w);
  }, d = () => {
    s && u();
    const w = e.getStartElement(), v = e.getEndElement();
    w && e.shouldFetchPrevious() && r.observe(w), v && e.shouldFetchNext() && o.observe(v), s = !0;
  }, u = () => {
    s && (r.disconnect(), o.disconnect(), s = !1);
  }, c = () => {
    s && d();
  }, f = () => {
    u(), t.flushAll(), a?.disconnect();
  }, g = /* @__PURE__ */ new Set(), y = (w) => !(Yo in w.dataset) && !(vi in w.dataset), m = () => {
    Array.from(g).forEach((w) => {
      y(w) && (w.dataset[vi] = "true"), n.observe(w);
    }), g.clear();
  }, p = (w) => Array.from(
    w.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let h = !1;
  const b = (w) => {
    !h && (h = !0, $()) || (p(e.getItemsElement()).forEach((v) => {
      y(v) && (v.dataset[Yo] = w?.toString() || "1"), n.observe(v);
    }), _());
  }, z = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, _ = () => {
    const w = {}, v = e.getItemsElement().childNodes;
    for (let k = 0; k < v.length; k++) {
      const L = v[k];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = G0(L);
      typeof M > "u" || (M in w ? w[M].to = k : w[M] = { from: k, to: k });
    }
    Ze.remember(w, z());
  }, T = ro(_, 250), $ = () => {
    const w = Ze.restore(z());
    if (!w || typeof w != "object")
      return !1;
    const v = e.getItemsElement().childNodes;
    for (let k = 0; k < v.length; k++) {
      const L = v[k];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = L;
      let I;
      for (const [A, q] of Object.entries(w))
        if (k >= q.from && k <= q.to) {
          I = A;
          break;
        }
      if (I)
        M.dataset[Yo] = I;
      else if (y(M))
        M.dataset[vi] = "true";
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
    processServerLoadedElements: b
  };
}, W6 = new Ha(), er, gn, Oo = null, X6 = (e) => {
  let t = !0;
  const n = (o) => {
    W6.add(() => new Promise((a) => {
      if (!t)
        return er = gn = null, a();
      if (!er || !gn) {
        const d = he.get().url;
        er = $t(d), gn = $t(d), Oo = V0(d);
      }
      const s = e.getPageName(), l = gn.searchParams;
      o === "1" ? l.delete(s) : l.set(s, o), setTimeout(() => a());
    })).finally(() => {
      t && er && gn && er.href !== gn.href && Oo !== null && Ze.replace({
        url: z6(gn, Oo),
        preserveScroll: !0,
        preserveState: !0
      }), er = gn = Oo = null;
    });
  };
  return {
    onItemIntersected: ro((o) => {
      const a = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !a)
        return;
      const s = /* @__PURE__ */ new Map(), l = [...a.children];
      F0(l, o).forEach((c) => {
        const f = G0(c) ?? "1";
        s.has(f) ? s.set(f, s.get(f) + 1) : s.set(f, 1);
      });
      const u = Array.from(s.entries()).sort((c, f) => f[1] - c[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, Y6 = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const l = e.getScrollableParent(), d = e.getItemsElement();
        n = l?.scrollTop || window.scrollY;
        const u = F0([...d.children]);
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
          const c = e.getScrollableParent(), f = c?.getBoundingClientRect() || { top: 0 }, g = c ? f.top : 0, p = r.getBoundingClientRect().top - g - o;
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
function K6(e) {
  const t = X6({ ...e, getPageName: () => o.getPageName() }), n = Y6(e), r = G6({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = j6({
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
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), g = u.onBeforeUpdate || (() => {
    }), y = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (m) => {
      g(m), c();
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
function W0(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function No(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(W0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Fd(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !W0(e) && (e.key === "Enter" || t && e.key === " ");
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
}, zn = null, Z6 = (e) => {
  Object.assign(it, e), it.includeCSS && rR(it.color), Pt = document.createElement("div"), Pt.id = rt, Pt.innerHTML = it.template;
}, Ga = (e) => {
  const t = X0();
  e = Q0(e, it.minimum, 1), zn = e === 1 ? null : e;
  const n = Q6(!t), r = n.querySelector(it.barSelector), o = it.speed, a = it.easing;
  n.offsetWidth, nR((s) => {
    const l = it.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate3d(${Ko(e)}%,0,0)`
    } : it.positionUsing === "translate" ? {
      transition: `all ${o}ms ${a}`,
      transform: `translate(${Ko(e)}%,0)`
    } : { marginLeft: `${Ko(e)}%` };
    for (const d in l)
      r.style[d] = l[d];
    if (e !== 1)
      return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        J0(), n.style.transition = "", n.style.opacity = "", s();
      }, o);
    }, o);
  });
}, X0 = () => typeof zn == "number", Y0 = () => {
  zn || Ga(0);
  const e = function() {
    setTimeout(function() {
      zn && (K0(), e());
    }, it.trickleSpeed);
  };
  it.trickle && e();
}, J6 = (e) => {
  !e && !zn || (K0(0.3 + 0.5 * Math.random()), Ga(1));
}, K0 = (e) => {
  const t = zn;
  if (t === null)
    return Y0();
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
    })(), Ga(Q0(t + e, 0, 0.994));
}, Q6 = (e) => {
  if (eR())
    return document.getElementById(rt);
  document.documentElement.classList.add(`${rt}-busy`);
  const t = Pt.querySelector(it.barSelector), n = e ? "-100" : Ko(zn || 0), r = Z0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, it.showSpinner || Pt.querySelector(it.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${rt}-custom-parent`), r.appendChild(Pt), Pt;
}, Z0 = () => tR(it.parent) ? it.parent : document.querySelector(it.parent), J0 = () => {
  document.documentElement.classList.remove(`${rt}-busy`), Z0().classList.remove(`${rt}-custom-parent`), Pt?.remove();
}, eR = () => document.getElementById(rt) !== null, tR = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Q0(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Ko = (e) => (-1 + e) * 100, nR = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), rR = (e) => {
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
}, oR = () => {
  Pt && (Pt.style.display = "");
}, aR = () => {
  Pt && (Pt.style.display = "none");
}, qt = {
  configure: Z6,
  isStarted: X0,
  done: J6,
  set: Ga,
  remove: J0,
  start: Y0,
  status: zn,
  show: oR,
  hide: aR
}, sR = class {
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
}, Vr = new sR();
Vr.reveal;
Vr.hide;
var eh = /* @__PURE__ */ Symbol("FormComponentReset");
function el(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function iR(e, t) {
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
function lR(e, t) {
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
    return iR(e, t);
  if (e instanceof HTMLSelectElement)
    return lR(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function uR(e, t) {
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
function cR(e, t, n) {
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
    s && uR(s, t.getAll(a)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [eh]: !0 } })
  );
}
var Ze = new D6();
let oo = Je.create(), th = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, nh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const ya = {}, wn = {
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
    return th = e === null ? () => null : e, wn;
  },
  determineSuccessUsing(e) {
    return nh = e, wn;
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
    dR,
    pR,
    hR
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), oo.request(t).then(async (n) => {
    t.precognitive && Bd(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && nh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && fR(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Ld(t, r) ?? ((s) => s))(o) ?? o;
  }, (n) => mR(n) ? Promise.reject(n) : (t.precognitive && Bd(n.response), (Ld(t, n.response.status) ?? ((o, a) => Promise.reject(a)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, dR = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? oo.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? th(e, oo) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": vR(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, fR = (e) => e >= 200 && e < 300, pR = (e) => (typeof e.fingerprint != "string" || (ya[e.fingerprint]?.abort(), delete ya[e.fingerprint]), e), hR = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (ya[e.fingerprint] = new AbortController(), {
  ...e,
  signal: ya[e.fingerprint].signal
}), Bd = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, mR = (e) => !R0(e) || typeof e.response?.status != "number" || N0(e), Ld = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], vR = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (rh(e.data) ? "multipart/form-data" : "application/json"), rh = (e) => Bl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => rh(t)), Bl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, gR = (e, t) => {
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
}, yR = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Ud = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => yR(n, r)))), bR = (e, t = {}) => {
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
    const A = [...new Set(I)];
    return s.length !== A.length || !A.every((q) => s.includes(q)) ? (s = A, n.validatedChanged) : [];
  }, d = () => s.filter((I) => typeof f[I] > "u");
  let u = [];
  const c = (I) => {
    const A = [...new Set(I)];
    return u.length !== A.length || !A.every((q) => u.includes(q)) ? (u = A, n.touchedChanged) : [];
  };
  let f = {};
  const g = (I) => {
    const A = wR(I);
    return _n(f, A) ? [] : (f = A, n.errorsChanged);
  }, y = (I) => {
    const A = { ...f };
    return delete A[qr(I)], g(A);
  }, m = () => Object.keys(f).length > 0;
  let p = 1500;
  const h = (I) => {
    p = I, w.cancel(), w = $();
  };
  let b = t, z = null, _ = [], T = null;
  const $ = () => CO((I) => {
    e({
      get: (A, q = {}, S = {}) => wn.get(A, L(q), v(S, I, q)),
      post: (A, q = {}, S = {}) => wn.post(A, L(q), v(S, I, q)),
      patch: (A, q = {}, S = {}) => wn.patch(A, L(q), v(S, I, q)),
      put: (A, q = {}, S = {}) => wn.put(A, L(q), v(S, I, q)),
      delete: (A, q = {}, S = {}) => wn.delete(A, L(q), v(S, I, q))
    }).catch((A) => N0(A) || R0(A) && A.response?.status === 422 ? null : Promise.reject(A));
  }, p, { leading: !0, trailing: !0 });
  let w = $();
  const v = (I, A, q = {}) => {
    const S = {
      ...I,
      ...A
    }, F = Array.from(S.only ?? S.validate ?? u);
    return {
      ...A,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...e6(I, A),
      only: F,
      timeout: S.timeout ?? 5e3,
      onValidationError: (P, R) => ([
        ...l([...s, ...F]),
        ...g(Gi(Ud({ ...f }, F), P.data.errors))
      ].forEach((x) => x()), S.onValidationError ? S.onValidationError(P, R) : Promise.reject(R)),
      onSuccess: (P) => (l([...s, ...F]).forEach((R) => R()), S.onSuccess ? S.onSuccess(P) : P),
      onPrecognitionSuccess: (P) => ([
        ...l([...s, ...F]),
        ...g(Ud({ ...f }, F))
      ].forEach((R) => R()), S.onPrecognitionSuccess ? S.onPrecognitionSuccess(P) : P),
      onBefore: () => {
        const P = u.some((V) => V.includes("*")), R = P ? [...new Set(u.flatMap((V) => gR(V, q)))] : u;
        return S.onBeforeValidation && S.onBeforeValidation({ data: q, touched: R }, { data: b, touched: _ }) === !1 || (S.onBefore || (() => !0))() === !1 ? !1 : (P && c(R).forEach((V) => V()), T = u, z = q, !0);
      },
      onStart: () => {
        a(!0).forEach((P) => P()), (S.onStart ?? (() => null))();
      },
      onFinish: () => {
        a(!1).forEach((P) => P()), _ = T, b = z, T = z = null, (S.onFinish ?? (() => null))();
      }
    };
  }, k = (I, A, q) => {
    if (typeof I > "u") {
      const S = Array.from(q?.only ?? q?.validate ?? []);
      c([...u, ...S]).forEach((F) => F()), w(q ?? {});
      return;
    }
    if (Bl(A) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    I = qr(I), (I.includes("*") || wt(b, I) !== A) && (c([I, ...u]).forEach((S) => S()), w(q ?? {}));
  }, L = (I) => r === !1 ? tl(I) : I, M = {
    touched: () => u,
    validate(I, A, q) {
      return typeof I == "object" && !("target" in I) && (q = I, I = A = void 0), k(I, A, q), M;
    },
    touch(I) {
      const A = Array.isArray(I) ? I : [qr(I)];
      return c([...u, ...A]).forEach((q) => q()), M;
    },
    validating: () => o,
    valid: d,
    errors: () => f,
    hasErrors: m,
    setErrors(I) {
      return g(I).forEach((A) => A()), M;
    },
    forgetError(I) {
      return y(I).forEach((A) => A()), M;
    },
    defaults(I) {
      return t = I, b = I, M;
    },
    reset(...I) {
      if (I.length === 0)
        c([]).forEach((A) => A());
      else {
        const A = [...u];
        I.forEach((q) => {
          A.includes(q) && A.splice(A.indexOf(q), 1), zt(b, q, wt(t, q));
        }), c(A).forEach((q) => q());
      }
      return M;
    },
    setTimeout(I) {
      return h(I), M;
    },
    on(I, A) {
      return n[I].push(A), M;
    },
    validateFiles() {
      return r = !0, M;
    },
    withoutFileValidation() {
      return r = !1, M;
    }
  };
  return M;
}, xR = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), wR = (e) => Object.keys(e).reduce((t, n) => ({
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
function _R(e) {
  if (bi)
    return;
  yi === null && (bi = !0, yi = new Set(Object.keys(oh({}))), bi = !1);
  const t = Object.keys(e).filter((n) => yi.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function oh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Wo.parseUseFormArguments(...e);
  const o = t ? Ze.restore(t) : null;
  let a = lt(typeof n == "function" ? n() : n);
  _R(a);
  let s = null, l, d = (m) => m, u = null, c = [], f = !1;
  const y = vr({
    ...o ? o.data : lt(a),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...m) {
      r = Wo.createWayfinderCallback(...m);
      const p = this;
      let h = null;
      const b = bR((_) => {
        const { method: T, url: $ } = r(), w = lt(d(this.data()));
        return _[T]($, w);
      }, lt(a));
      u = b, b.on("validatingChanged", () => {
        p.validating = b.validating();
      }).on("validatedChanged", () => {
        p.__valid = b.valid();
      }).on("touchedChanged", () => {
        p.__touched = b.touched();
      }).on("errorsChanged", () => {
        const _ = h ?? ba.get("form.withAllErrors") ? b.errors() : xR(b.errors());
        this.errors = {}, this.setError(_), p.__valid = b.valid();
      });
      const z = (_, T) => (T(_), _);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => b,
        withAllErrors: () => z(p, () => h = !0),
        valid: (_) => p.__valid.includes(_),
        invalid: (_) => _ in this.errors,
        setValidationTimeout: (_) => z(p, () => b.setTimeout(_)),
        validateFiles: () => z(p, () => b.validateFiles()),
        withoutFileValidation: () => z(p, () => b.withoutFileValidation()),
        touch: (_, ...T) => (Array.isArray(_) ? b.touch(_) : typeof _ == "string" ? b.touch([_, ...T]) : b.touch(_), p),
        touched: (_) => typeof _ == "string" ? p.__touched.includes(_) : p.__touched.length > 0,
        validate: (_, T) => {
          if (typeof _ == "object" && !("target" in _) && (T = _, _ = void 0), _ === void 0)
            b.validate(T);
          else {
            const $ = qr(_), w = d(this.data());
            b.validate($, wt(w, $), T);
          }
          return p;
        },
        setErrors: (_) => z(p, () => this.setError(_)),
        forgetError: (_) => z(
          p,
          () => this.clearErrors(qr(_))
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
      return m.length === 0 ? (a = h, Object.assign(this, p)) : m.filter((b) => Qp(h, b)).forEach((b) => {
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
      const { method: p, url: h, options: b } = Wo.parseSubmitArguments(m, r);
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
            ba.get("form.recentlySuccessfulDuration")
          );
          const $ = b.onSuccess ? await b.onSuccess(T) : null;
          return f || (a = lt(this.data()), this.isDirty = !1), $;
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
      }, _ = d(this.data());
      p === "delete" ? Ze.delete(h, { ...z, data: _ }) : Ze[p](h, _, z);
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
    y,
    (m) => {
      y.isDirty = !_n(y.data(), a);
      const p = Ze.restore(t), h = lt(m.__remember());
      t && !_n(p, h) && Ze.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var xt = G(void 0), Qe = G(), xi = an(null), Ro = G(void 0), Vd;
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
    xt.value = t ? rr(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Ro.value = void 0;
    const a = typeof window > "u";
    return Vd = V6(a, r || ((s) => s), o || (() => {
    })), a || (Ze.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (s) => {
        xt.value = rr(s.component), Qe.value = s.page, Ro.value = s.preserveState ? Ro.value : Date.now();
      },
      onFlash: (s) => {
        Qe.value = { ...Qe.value, flash: s };
      }
    }), Ze.on("navigate", () => Vd.forceUpdate())), () => {
      if (xt.value) {
        xt.value.inheritAttrs = !!xt.value.inheritAttrs;
        const s = Pe(xt.value, {
          ...Qe.value.props,
          key: Ro.value
        });
        return xi.value && (xt.value.layout = xi.value, xi.value = null), xt.value.layout ? typeof xt.value.layout == "function" ? xt.value.layout(Pe, s) : (Array.isArray(xt.value.layout) ? xt.value.layout : [xt.value.layout]).concat(s).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, Pe(d, { ...Qe.value.props }, () => l))) : s;
      }
    };
  }
});
function ah() {
  return vr({
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
}, kR = /* @__PURE__ */ Symbol("InertiaFormContext");
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
      const [$, w] = m();
      return e.transform(w);
    }, a = oh({}).withPrecognition(
      () => l.value,
      () => m()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && a.validateFiles(), (e.withAllErrors ?? En.get("form.withAllErrors")) && a.withAllErrors();
    const s = G(), l = J(
      () => cn(e.action) ? e.action.method : e.method.toLowerCase()
    ), d = G(!1), u = G(new FormData()), c = ($) => {
      $.type === "reset" && $.detail?.[eh] && $.preventDefault(), d.value = $.type === "reset" ? !1 : !_n(y(), Dd(u.value));
    }, f = ["input", "change", "reset"];
    Ke(() => {
      u.value = g(), a.defaults(y()), f.forEach(($) => s.value.addEventListener($, c));
    }), Ie(
      () => e.validateFiles,
      ($) => $ ? a.validateFiles() : a.withoutFileValidation()
    ), Ie(
      () => e.validationTimeout,
      ($) => a.setValidationTimeout($)
    ), xa(() => f.forEach(($) => s.value?.removeEventListener($, c)));
    const g = ($) => new FormData(s.value, $), y = ($) => Dd(g($)), m = ($) => Fl(
      l.value,
      cn(e.action) ? e.action.url : e.action,
      y($),
      e.queryStringArrayFormat
    ), p = ($) => {
      const [w, v] = m($);
      if ($?.getAttribute("formtarget") === "_blank" && l.value === "get") {
        window.open(w, "_blank");
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
          e.onSuccess?.(...I), e.onSubmitComplete?.(T), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && _();
        },
        onError: (...I) => {
          e.onError?.(...I), L(e.resetOnError);
        },
        ...e.options
      };
      a.transform(() => e.transform(v)).submit(l.value, w, M), a.transform(o);
    }, h = (...$) => {
      cR(s.value, u.value, $), a.reset(...$);
    }, b = (...$) => {
      a.clearErrors(...$);
    }, z = (...$) => {
      b(...$), h(...$);
    }, _ = () => {
      u.value = g(), d.value = !1;
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
      setError: ($, w) => a.setError(typeof $ == "string" ? { [$]: w } : $),
      get isDirty() {
        return d.value;
      },
      reset: h,
      submit: p,
      defaults: _,
      getData: y,
      getFormData: g,
      // Precognition
      touch: a.touch,
      valid: a.valid,
      invalid: a.invalid,
      touched: a.touched,
      validate: ($, w) => a.validate(...Wo.mergeHeadersForValidation($, w, e.headers)),
      validator: () => a.validator()
    };
    return r(T), Ln(kR, T), () => Pe(
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${MO(o)}"`;
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
    ), d = J(() => _6(l.value)), u = J(
      () => wi(e.startElement, a.value)
    ), c = J(() => wi(e.endElement, s.value)), f = G(!1), g = G(!1), y = G(0), m = G(!1), p = G(!1), h = () => {
      y.value = b.getRequestCount(), m.value = b.hasPrevious(), p.value = b.hasNext();
    }, {
      dataManager: b,
      elementManager: z,
      flush: _
    } = K6({
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
      onBeforeNextRequest: () => g.value = !0,
      onCompletePreviousRequest: () => {
        f.value = !1, h();
      },
      onCompleteNextRequest: () => {
        g.value = !1, h();
      },
      onDataReset: h
    });
    if (h(), typeof window > "u") {
      const v = ah().scrollProps?.[e.data];
      v && (m.value = !!v.previousPage, p.value = !!v.nextPage);
    }
    const T = J(() => !$.value), $ = J(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), w = () => {
      d.value ? d.value.scrollTo({
        top: d.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ke(() => {
      z.setupObservers(), z.processServerLoadedElements(b.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && w(), T.value && z.enableTriggers();
    }), nl(_), Ie(
      () => [T.value, e.onlyNext, e.onlyPrevious],
      ([v]) => {
        v ? z.enableTriggers() : z.disableTriggers();
      }
    ), r({
      fetchNext: b.fetchNext,
      fetchPrevious: b.fetchPrevious,
      hasPrevious: b.hasPrevious,
      hasNext: b.hasNext
    }), () => {
      const v = [], k = {
        loadingPrevious: f.value,
        loadingNext: g.value,
        hasPrevious: m.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const L = T.value && !e.onlyNext, M = {
          loading: f.value,
          fetch: b.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: m.value,
          ...k
        };
        v.push(
          Pe(
            "div",
            { ref: a },
            t.previous ? t.previous(M) : f.value ? t.loading?.(M) : void 0
          )
        );
      }
      if (v.push(
        Pe(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || g.value,
            loadingPrevious: f.value,
            loadingNext: g.value
          })
        )
      ), !e.endElement) {
        const L = T.value && !e.onlyPrevious, M = {
          loading: g.value,
          fetch: b.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ...k
        };
        v.push(
          Pe(
            "div",
            { ref: s },
            t.next ? t.next(M) : g.value ? t.loading?.(M) : void 0
          )
        );
      }
      return Pe(me, {}, e.reverse ? [...v].reverse() : v);
    };
  }
});
var jt = () => {
}, SR = Fe({
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
    const r = G(0), o = G(), a = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = J(() => e.cacheFor !== 0 ? e.cacheFor : a.value.length === 1 && a.value[0] === "click" ? 0 : ba.get("prefetch.cacheFor"));
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
    ), c = J(() => u.value[0]), f = J(() => u.value[1]), g = J(() => d.value === "button" ? { type: "button" } : d.value === "a" || typeof d.value != "string" ? { href: c.value } : {}), y = J(() => ({
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
      onStart: (_) => {
        r.value++, e.onStart?.(_);
      },
      onProgress: e.onProgress,
      onFinish: (_) => {
        r.value--, e.onFinish?.(_);
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
      onClick: (_) => {
        No(_) && (_.preventDefault(), Ze.visit(c.value, m.value));
      }
    }, b = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          p();
        }, ba.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: h.onClick
    }, z = {
      onMousedown: (_) => {
        No(_) && (_.preventDefault(), p());
      },
      onKeydown: (_) => {
        Fd(_) && (_.preventDefault(), p());
      },
      onMouseup: (_) => {
        No(_) && (_.preventDefault(), Ze.visit(c.value, m.value));
      },
      onKeyup: (_) => {
        Fd(_) && (_.preventDefault(), Ze.visit(c.value, m.value));
      },
      onClick: (_) => {
        No(_) && _.preventDefault();
      }
    };
    return () => Pe(
      d.value,
      {
        ...n,
        ...g.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...a.value.includes("hover") ? b : a.value.includes("click") ? z : h
      },
      t
    );
  }
}), ER = SR;
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
    const e = ah();
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
    return (this.$props.always || !this.loaded) && e.push(Pe(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var ba = En.extend({});
const zR = { class: "space-y-3 text-zinc-900 dark:text-white" }, $R = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, PR = { key: 0 }, CR = { key: 1 }, AR = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, TR = { class: "space-y-2" }, OR = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, NR = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, RR = {
  key: 0,
  class: "flex items-center gap-2"
}, IR = ["disabled", "onClick"], MR = ["disabled", "onClick"], DR = ["disabled", "onClick"], FR = {
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
        const [m, p] = await Promise.all([$e.connection(), $e.flows(d.value)]);
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
    const g = (m) => f(() => $e.createFlow({
      name: `${m.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: m.eventClass,
      product_id: d.value,
      is_active: !0,
      graph_json: Sp(m.eventClass)
    })), y = (m) => f(() => $e.updateFlow(m.id, { is_active: !m.is_active }));
    return Ke(c), (m, p) => (E(), C("div", zR, [
      r.value ? (E(), C("p", $R, "Verificando integração…")) : (E(), C(me, { key: 1 }, [
        i("div", {
          class: W(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", a.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          X(O(jr), { class: "h-4 w-4 shrink-0" }),
          a.value ? (E(), C("span", PR, "ZapRei conectado à Evolution GO.")) : (E(), C("span", CR, [
            p[2] || (p[2] = ke(" A Evolution GO não está conectada. ", -1)),
            X(O(ER), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: ot(() => [...p[1] || (p[1] = [
                ke("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = ke(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = i("div", null, [
          i("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          i("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        s.value ? (E(), C("p", AR, U(s.value), 1)) : te("", !0),
        i("div", TR, [
          (E(!0), C(me, null, Ne(O(Fn), (h) => (E(), C("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            i("div", null, [
              i("div", OR, U(h.label), 1),
              i("div", NR, U(h.eventClass), 1)
            ]),
            u.value.get(h.eventClass) ? (E(), C("div", RR, [
              i("span", {
                class: W(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, U(u.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              i("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !a.value || o.value,
                onClick: (b) => y(u.value.get(h.eventClass))
              }, U(u.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, IR),
              i("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !a.value,
                onClick: (b) => l.value = u.value.get(h.eventClass)
              }, [
                X(O(nf), { class: "h-3 w-3" }),
                p[4] || (p[4] = ke(" Editar ", -1))
              ], 8, MR)
            ])) : (E(), C("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !a.value || o.value,
              onClick: (b) => g(h)
            }, " Criar fluxo ", 8, DR))
          ]))), 128))
        ])
      ], 64)),
      l.value ? (E(), Oe(Pp, {
        key: 2,
        flow: l.value,
        onClose: p[0] || (p[0] = (h) => l.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, BR = "zaprei", qd = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(qd)) {
  const e = document.createElement("link");
  e.id = qd, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[BR] = { Dashboard: B4, Integrations: U4, ProductPanel: FR };
export {
  B4 as Dashboard,
  U4 as Integrations,
  FR as ProductPanel
};
