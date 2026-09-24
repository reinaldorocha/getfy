import { h as $e, ref as X, reactive as Qr, onMounted as Ze, openBlock as z, createElementBlock as T, createElementVNode as l, createVNode as K, unref as I, normalizeClass as Y, withDirectives as ce, vModelCheckbox as a0, vModelText as xe, createStaticVNode as Bd, createTextVNode as Be, toDisplayString as V, createCommentVNode as te, getCurrentScope as Ld, inject as pr, effectScope as Ud, watch as Oe, provide as Fn, defineComponent as De, useSlots as s0, onUnmounted as Zs, withCtx as it, renderSlot as Xe, createPropsRestProxy as l0, toRef as qe, computed as J, getCurrentInstance as hr, onScopeDispose as Ao, nextTick as an, onBeforeMount as u0, shallowRef as nn, Fragment as ge, renderList as Re, normalizeStyle as vt, onBeforeUnmount as vi, isMemoSame as c0, createBlock as Ie, useAttrs as d0, mergeProps as gi, Teleport as qd, isRef as Js, toRefs as f0, customRef as p0, toValue as Ne, resolveComponent as Vd, resolveDynamicComponent as At, markRaw as tr, readonly as h0, withModifiers as en, vModelSelect as ut, toHandlers as m0 } from "vue";
const v0 = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const jl = (e) => e === "";
const g0 = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Hl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const y0 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const b0 = (e) => {
  const t = y0(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var br = {
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
const x0 = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": i,
  size: a = br.width,
  color: s = br.stroke,
  ...c
}, { slots: u }) => $e(
  "svg",
  {
    ...br,
    ...c,
    width: a,
    height: a,
    stroke: s,
    "stroke-width": jl(n) || jl(r) || n === !0 || r === !0 ? Number(o || i || br["stroke-width"]) * 24 / Number(a) : o || i || br["stroke-width"],
    class: g0(
      "lucide",
      c.class,
      ...e ? [`lucide-${Hl(b0(e))}-icon`, `lucide-${Hl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !v0(c) && { "aria-hidden": "true" }
  },
  [...t.map((d) => $e(...d)), ...u.default ? [u.default()] : []]
);
const Ce = (e, t) => (n, { slots: r, attrs: o }) => $e(
  x0,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const w0 = Ce("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const jd = Ce("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const _0 = Ce("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const S0 = Ce("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const Zi = Ce("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const gs = Ce("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Hd = Ce("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const k0 = Ce("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Gd = Ce("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Qs = Ce("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Go = Ce("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Wd = Ce("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Xd = Ce("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const E0 = Ce("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const $0 = Ce("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Gl = Ce("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Wl = Ce("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const Yd = Ce("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const En = Ce("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Xl = Ce("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const z0 = Ce("message-square-text", [
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
const Kd = Ce("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const P0 = Ce("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const Zd = Ce("palette", [
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
const Jd = Ce("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const Qd = Ce("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const C0 = Ce("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const Yl = Ce("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const A0 = Ce("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const T0 = Ce("save", [
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
const Br = Ce("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const ln = Ce("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const ef = Ce("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const O0 = Ce("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const tf = Ce("sparkles", [
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
const Wo = Ce("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const nf = Ce("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const N0 = Ce("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const ys = Ce("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Vt = Ce("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const Bn = Ce("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), I0 = "/zaprei";
function R0() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function M0(e) {
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
function Je(e, { method: t = "GET", body: n, query: r } = {}) {
  const o = new URL(I0 + e, window.location.origin);
  Object.entries(r || {}).forEach(([a, s]) => {
    s != null && s !== "" && o.searchParams.set(a, s);
  });
  const i = n instanceof FormData;
  return fetch(o, {
    method: t,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": R0(),
      ...i || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: i ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(M0);
}
const Te = {
  connection: () => Je("/connection"),
  saveConnection: (e) => Je("/connection", { method: "PUT", body: e }),
  testConnection: () => Je("/connection/test", { method: "POST" }),
  products: () => Je("/products"),
  groups: () => Je("/groups"),
  flows: (e) => Je("/flows", { query: { product_id: e } }),
  createFlow: (e) => Je("/flows", { method: "POST", body: e }),
  updateFlow: (e, t) => Je(`/flows/${e}`, { method: "PUT", body: t }),
  deleteFlow: (e) => Je(`/flows/${e}`, { method: "DELETE" }),
  duplicateFlow: (e) => Je(`/flows/${e}/duplicate`, { method: "POST" }),
  testFlow: (e, t) => Je(`/flows/${e}/test`, {
    method: "POST",
    body: typeof t == "string" ? { phone: t } : t
  }),
  runs: () => Je("/flows/runs"),
  retryRun: (e) => Je(`/flows/runs/${e}/retry`, { method: "POST" }),
  contacts: (e) => Je("/contacts", { query: e }),
  importContacts: (e) => Je("/contacts/import", { method: "POST", body: Kl(e) }),
  deleteContact: (e) => Je(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Je("/campaigns"),
  createCampaign: (e) => Je("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Je(`/campaigns/${e}`),
  cancelCampaign: (e) => Je(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Je("/media", { method: "POST", body: Kl(e) })
};
function Kl(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const D0 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, F0 = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, B0 = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, L0 = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, U0 = {
  key: 1,
  class: "mt-4 space-y-4"
}, q0 = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, V0 = ["placeholder"], j0 = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, H0 = { class: "mt-2 flex items-center gap-2" }, G0 = ["value"], W0 = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, X0 = { class: "flex flex-wrap items-center gap-2" }, Y0 = ["disabled"], K0 = ["disabled"], Z0 = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, J0 = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Q0 = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, rf = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = X(!0), o = X(!1), i = X(!1), a = X(""), s = X(""), c = X(!1), u = X(!1), d = X(""), f = Qr({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, a.value = "";
      try {
        const { connection: h } = await Te.connection();
        f.base_url = h.credentials.base_url || "", f.instance = h.credentials.instance || "", f.is_active = h.is_active, u.value = h.credentials.has_api_key, c.value = h.connected, d.value = h.webhook_url || "";
      } catch (h) {
        a.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      o.value = !0, a.value = "", s.value = "";
      try {
        const { connection: h } = await Te.saveConnection({ ...f });
        f.api_key = "", u.value = h.credentials.has_api_key, c.value = h.connected, d.value = h.webhook_url || "", s.value = "Conexão salva.", n("saved");
      } catch (h) {
        a.value = h.message;
      } finally {
        o.value = !1;
      }
    }
    async function p() {
      if (d.value)
        try {
          await navigator.clipboard.writeText(d.value), s.value = "URL do webhook copiada.";
        } catch {
          a.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function m() {
      i.value = !0, a.value = "", s.value = "";
      try {
        const { message: h } = await Te.testConnection();
        s.value = h || "Conexão validada.";
      } catch (h) {
        a.value = h.message;
      } finally {
        i.value = !1;
      }
    }
    return Ze(v), (h, b) => (z(), T("div", D0, [
      l("div", F0, [
        l("div", B0, [
          K(I(Jd), { class: "h-5 w-5" })
        ]),
        b[5] || (b[5] = l("div", null, [
          l("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (z(), T("div", L0, [
        K(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        b[6] || (b[6] = l("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (z(), T("div", U0, [
        l("div", q0, [
          b[7] || (b[7] = l("div", null, [
            l("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            l("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          l("label", {
            class: Y(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ce(l("input", {
              "onUpdate:modelValue": b[0] || (b[0] = (E) => f.is_active = E),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [a0, f.is_active]
            ]),
            l("span", {
              class: Y(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        l("div", null, [
          b[8] || (b[8] = l("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          ce(l("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": b[1] || (b[1] = (E) => f.base_url = E),
            type: "url",
            placeholder: "https://sua-evolution-go.com",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              xe,
              f.base_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        l("div", null, [
          b[9] || (b[9] = l("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ce(l("input", {
            id: "zr-instance",
            "onUpdate:modelValue": b[2] || (b[2] = (E) => f.instance = E),
            type: "text",
            placeholder: "getfy-bot",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              xe,
              f.instance,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        l("div", null, [
          b[10] || (b[10] = l("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ce(l("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": b[3] || (b[3] = (E) => f.api_key = E),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, V0), [
            [
              xe,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          b[11] || (b[11] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        d.value ? (z(), T("div", j0, [
          b[13] || (b[13] = Bd('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          l("div", H0, [
            l("input", {
              value: d.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: b[4] || (b[4] = (E) => E.target.select())
            }, null, 40, G0),
            l("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: p
            }, [
              K(I(Wd), { class: "h-3.5 w-3.5" }),
              b[12] || (b[12] = Be(" Copiar ", -1))
            ])
          ])
        ])) : (z(), T("p", W0, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        l("div", X0, [
          l("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, V(o.value ? "Salvando…" : "Salvar conexão"), 9, Y0),
          l("button", {
            type: "button",
            disabled: i.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: m
          }, V(i.value ? "Testando…" : "Testar conexão"), 9, K0),
          c.value ? (z(), T("span", Z0, [
            K(I(Qs), { class: "h-3 w-3" }),
            b[14] || (b[14] = Be(" Conectado ", -1))
          ])) : te("", !0)
        ]),
        a.value ? (z(), T("p", J0, V(a.value), 1)) : s.value ? (z(), T("p", Q0, V(s.value), 1)) : te("", !0)
      ]))
    ]));
  }
};
function Lr(e) {
  return Ld() ? (Ao(e), !0) : !1;
}
function tn(e) {
  return typeof e == "function" ? e() : I(e);
}
const em = typeof window < "u" && typeof document < "u", tm = (e) => typeof e < "u", nm = Object.prototype.toString, rm = (e) => nm.call(e) === "[object Object]", om = () => {
};
function im(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const of = (e) => e();
function am(e = of) {
  const t = X(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: h0(t), pause: n, resume: r, eventFilter: o };
}
function Zl(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function sm(e, t, n = {}) {
  const {
    eventFilter: r = of,
    ...o
  } = n;
  return Oe(
    e,
    im(
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
  } = n, { eventFilter: i, pause: a, resume: s, isActive: c } = am(r);
  return { stop: sm(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: a, resume: s, isActive: c };
}
function lm(e, t = {}) {
  if (!Js(e))
    return f0(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = p0(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var i;
        if ((i = tn(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const s = [...e.value];
            s[r] = o, e.value = s;
          } else {
            const s = { ...e.value, [r]: o };
            Object.setPrototypeOf(s, Object.getPrototypeOf(e.value)), e.value = s;
          }
        else
          e.value[r] = o;
      }
    }));
  return n;
}
function bs(e, t = !1) {
  function n(f, { flush: v = "sync", deep: y = !1, timeout: p, throwOnTimeout: m } = {}) {
    let h = null;
    const E = [new Promise((g) => {
      h = Oe(
        e,
        (S) => {
          f(S) !== t && (h?.(), g(S));
        },
        {
          flush: v,
          deep: y,
          immediate: !0
        }
      );
    })];
    return p != null && E.push(
      Zl(p, m).then(() => tn(e)).finally(() => h?.())
    ), Promise.race(E);
  }
  function r(f, v) {
    if (!Js(f))
      return n((S) => S === f, v);
    const { flush: y = "sync", deep: p = !1, timeout: m, throwOnTimeout: h } = v ?? {};
    let b = null;
    const g = [new Promise((S) => {
      b = Oe(
        [e, f],
        ([A, $]) => {
          t !== (A === $) && (b?.(), S(A));
        },
        {
          flush: y,
          deep: p,
          immediate: !0
        }
      );
    })];
    return m != null && g.push(
      Zl(m, h).then(() => tn(e)).finally(() => (b?.(), tn(e)))
    ), Promise.race(g);
  }
  function o(f) {
    return n((v) => !!v, f);
  }
  function i(f) {
    return r(null, f);
  }
  function a(f) {
    return r(void 0, f);
  }
  function s(f) {
    return n(Number.isNaN, f);
  }
  function c(f, v) {
    return n((y) => {
      const p = Array.from(y);
      return p.includes(f) || p.includes(tn(f));
    }, v);
  }
  function u(f) {
    return d(1, f);
  }
  function d(f = 1, v) {
    let y = -1;
    return n(() => (y += 1, y >= f), v);
  }
  return Array.isArray(tn(e)) ? {
    toMatch: n,
    toContains: c,
    changed: u,
    changedTimes: d,
    get not() {
      return bs(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: o,
    toBeNull: i,
    toBeNaN: s,
    toBeUndefined: a,
    changed: u,
    changedTimes: d,
    get not() {
      return bs(e, !t);
    }
  };
}
function xs(e) {
  return bs(e);
}
function um(e) {
  var t;
  const n = tn(e);
  return (t = n?.$el) != null ? t : n;
}
const af = em ? window : void 0;
function sf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = af) : [t, n, r, o] = e, !t)
    return om;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((d) => d()), i.length = 0;
  }, s = (d, f, v, y) => (d.addEventListener(f, v, y), () => d.removeEventListener(f, v, y)), c = Oe(
    () => [um(t), tn(o)],
    ([d, f]) => {
      if (a(), !d)
        return;
      const v = rm(f) ? { ...f } : f;
      i.push(
        ...n.flatMap((y) => r.map((p) => s(d, y, p, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), a();
  };
  return Lr(u), u;
}
function cm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Jl(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = af,
    eventName: i = "keydown",
    passive: a = !1,
    dedupe: s = !1
  } = r, c = cm(t);
  return sf(o, i, (d) => {
    d.repeat && tn(s) || c(d) && n(d);
  }, a);
}
function dm(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ji(e, t, n, r = {}) {
  var o, i, a;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: u,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, y = hr(), p = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((a = (i = y?.proxy) == null ? void 0 : i.$emit) == null ? void 0 : a.bind(y?.proxy));
  let m = u;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const h = (g) => s ? typeof s == "function" ? s(g) : dm(g) : g, b = () => tm(e[t]) ? h(e[t]) : f, E = (g) => {
    v ? v(g) && p(m, g) : p(m, g);
  };
  if (c) {
    const g = b(), S = X(g);
    let A = !1;
    return Oe(
      () => e[t],
      ($) => {
        A || (A = !0, S.value = h($), an(() => A = !1));
      }
    ), Oe(
      S,
      ($) => {
        !A && ($ !== e[t] || d) && E($);
      },
      { deep: d }
    ), S;
  } else
    return J({
      get() {
        return b();
      },
      set(g) {
        E(g);
      }
    });
}
var fm = { value: () => {
} };
function yi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new To(n);
}
function To(e) {
  this._ = e;
}
function pm(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
To.prototype = yi.prototype = {
  constructor: To,
  on: function(e, t) {
    var n = this._, r = pm(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; )
        if ((o = (e = r[i]).type) && (o = hm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type)
        n[o] = Ql(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = Ql(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new To(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, i; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  }
};
function hm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ql(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = fm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ws = "http://www.w3.org/1999/xhtml";
const eu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ws,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function bi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), eu.hasOwnProperty(t) ? { space: eu[t], local: e } : e;
}
function mm(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ws && t.documentElement.namespaceURI === ws ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function vm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function lf(e) {
  var t = bi(e);
  return (t.local ? vm : mm)(t);
}
function gm() {
}
function el(e) {
  return e == null ? gm : function() {
    return this.querySelector(e);
  };
}
function ym(e) {
  typeof e != "function" && (e = el(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), c, u, d = 0; d < a; ++d)
      (c = i[d]) && (u = e.call(c, c.__data__, d, i)) && ("__data__" in c && (u.__data__ = c.__data__), s[d] = u);
  return new wt(r, this._parents);
}
function bm(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function xm() {
  return [];
}
function uf(e) {
  return e == null ? xm : function() {
    return this.querySelectorAll(e);
  };
}
function wm(e) {
  return function() {
    return bm(e.apply(this, arguments));
  };
}
function _m(e) {
  typeof e == "function" ? e = wm(e) : e = uf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(e.call(c, c.__data__, u, a)), o.push(c));
  return new wt(r, o);
}
function cf(e) {
  return function() {
    return this.matches(e);
  };
}
function df(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Sm = Array.prototype.find;
function km(e) {
  return function() {
    return Sm.call(this.children, e);
  };
}
function Em() {
  return this.firstElementChild;
}
function $m(e) {
  return this.select(e == null ? Em : km(typeof e == "function" ? e : df(e)));
}
var zm = Array.prototype.filter;
function Pm() {
  return Array.from(this.children);
}
function Cm(e) {
  return function() {
    return zm.call(this.children, e);
  };
}
function Am(e) {
  return this.selectAll(e == null ? Pm : Cm(typeof e == "function" ? e : df(e)));
}
function Tm(e) {
  typeof e != "function" && (e = cf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], c, u = 0; u < a; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && s.push(c);
  return new wt(r, this._parents);
}
function ff(e) {
  return new Array(e.length);
}
function Om() {
  return new wt(this._enter || this._groups.map(ff), this._parents);
}
function Xo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Xo.prototype = {
  constructor: Xo,
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
function Nm(e) {
  return function() {
    return e;
  };
}
function Im(e, t, n, r, o, i) {
  for (var a = 0, s, c = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Xo(e, i[a]);
  for (; a < c; ++a)
    (s = t[a]) && (o[a] = s);
}
function Rm(e, t, n, r, o, i, a) {
  var s, c, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, v = new Array(d), y;
  for (s = 0; s < d; ++s)
    (c = t[s]) && (v[s] = y = a.call(c, c.__data__, s, t) + "", u.has(y) ? o[s] = c : u.set(y, c));
  for (s = 0; s < f; ++s)
    y = a.call(e, i[s], s, i) + "", (c = u.get(y)) ? (r[s] = c, c.__data__ = i[s], u.delete(y)) : n[s] = new Xo(e, i[s]);
  for (s = 0; s < d; ++s)
    (c = t[s]) && u.get(v[s]) === c && (o[s] = c);
}
function Mm(e) {
  return e.__data__;
}
function Dm(e, t) {
  if (!arguments.length)
    return Array.from(this, Mm);
  var n = t ? Rm : Im, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Nm(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], v = f.length, y = Fm(e.call(d, d && d.__data__, u, r)), p = y.length, m = s[u] = new Array(p), h = a[u] = new Array(p), b = c[u] = new Array(v);
    n(d, f, m, h, b, y, t);
    for (var E = 0, g = 0, S, A; E < p; ++E)
      if (S = m[E]) {
        for (E >= g && (g = E + 1); !(A = h[g]) && ++g < p; )
          ;
        S._next = A || null;
      }
  }
  return a = new wt(a, r), a._enter = s, a._exit = c, a;
}
function Fm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Bm() {
  return new wt(this._exit || this._groups.map(ff), this._parents);
}
function Lm(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Um(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), c = 0; c < a; ++c)
    for (var u = n[c], d = r[c], f = u.length, v = s[c] = new Array(f), y, p = 0; p < f; ++p)
      (y = u[p] || d[p]) && (v[p] = y);
  for (; c < o; ++c)
    s[c] = n[c];
  return new wt(s, this._parents);
}
function qm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function Vm(e) {
  e || (e = jm);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, c = o[i] = new Array(s), u, d = 0; d < s; ++d)
      (u = a[d]) && (c[d] = u);
    c.sort(t);
  }
  return new wt(o, this._parents).order();
}
function jm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hm() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Gm() {
  return Array.from(this);
}
function Wm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a)
        return a;
    }
  return null;
}
function Xm() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Ym() {
  return !this.node();
}
function Km(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Zm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Jm(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Qm(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ev(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function tv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function nv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function rv(e, t) {
  var n = bi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Jm : Zm : typeof t == "function" ? n.local ? nv : tv : n.local ? ev : Qm)(n, t));
}
function pf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ov(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function iv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function av(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function sv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ov : typeof t == "function" ? av : iv)(e, t, n ?? "")) : ir(this.node(), e);
}
function ir(e, t) {
  return e.style.getPropertyValue(t) || pf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function lv(e) {
  return function() {
    delete this[e];
  };
}
function uv(e, t) {
  return function() {
    this[e] = t;
  };
}
function cv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function dv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? lv : typeof t == "function" ? cv : uv)(e, t)) : this.node()[e];
}
function hf(e) {
  return e.trim().split(/^|\s+/);
}
function tl(e) {
  return e.classList || new mf(e);
}
function mf(e) {
  this._node = e, this._names = hf(e.getAttribute("class") || "");
}
mf.prototype = {
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
function vf(e, t) {
  for (var n = tl(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function gf(e, t) {
  for (var n = tl(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function fv(e) {
  return function() {
    vf(this, e);
  };
}
function pv(e) {
  return function() {
    gf(this, e);
  };
}
function hv(e, t) {
  return function() {
    (t.apply(this, arguments) ? vf : gf)(this, e);
  };
}
function mv(e, t) {
  var n = hf(e + "");
  if (arguments.length < 2) {
    for (var r = tl(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? hv : t ? fv : pv)(n, t));
}
function vv() {
  this.textContent = "";
}
function gv(e) {
  return function() {
    this.textContent = e;
  };
}
function yv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function bv(e) {
  return arguments.length ? this.each(e == null ? vv : (typeof e == "function" ? yv : gv)(e)) : this.node().textContent;
}
function xv() {
  this.innerHTML = "";
}
function wv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function _v(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Sv(e) {
  return arguments.length ? this.each(e == null ? xv : (typeof e == "function" ? _v : wv)(e)) : this.node().innerHTML;
}
function kv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ev() {
  return this.each(kv);
}
function $v() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zv() {
  return this.each($v);
}
function Pv(e) {
  var t = typeof e == "function" ? e : lf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Cv() {
  return null;
}
function Av(e, t) {
  var n = typeof e == "function" ? e : lf(e), r = t == null ? Cv : typeof t == "function" ? t : el(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Tv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ov() {
  return this.each(Tv);
}
function Nv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Iv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Rv(e) {
  return this.select(e ? Iv : Nv);
}
function Mv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Fv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Bv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Lv(e, t, n) {
  return function() {
    var r = this.__on, o, i = Dv(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((o = r[a]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Uv(e, t, n) {
  var r = Fv(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, d; c < u; ++c)
        for (o = 0, d = s[c]; o < i; ++o)
          if ((a = r[o]).type === d.type && a.name === d.name)
            return d.value;
    }
    return;
  }
  for (s = t ? Lv : Bv, o = 0; o < i; ++o)
    this.each(s(r[o], t, n));
  return this;
}
function yf(e, t, n) {
  var r = pf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function qv(e, t) {
  return function() {
    return yf(this, e, t);
  };
}
function Vv(e, t) {
  return function() {
    return yf(this, e, t.apply(this, arguments));
  };
}
function jv(e, t) {
  return this.each((typeof t == "function" ? Vv : qv)(e, t));
}
function* Hv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var bf = [null];
function wt(e, t) {
  this._groups = e, this._parents = t;
}
function eo() {
  return new wt([[document.documentElement]], bf);
}
function Gv() {
  return this;
}
wt.prototype = eo.prototype = {
  constructor: wt,
  select: ym,
  selectAll: _m,
  selectChild: $m,
  selectChildren: Am,
  filter: Tm,
  data: Dm,
  enter: Om,
  exit: Bm,
  join: Lm,
  merge: Um,
  selection: Gv,
  order: qm,
  sort: Vm,
  call: Hm,
  nodes: Gm,
  node: Wm,
  size: Xm,
  empty: Ym,
  each: Km,
  attr: rv,
  style: sv,
  property: dv,
  classed: mv,
  text: bv,
  html: Sv,
  raise: Ev,
  lower: zv,
  append: Pv,
  insert: Av,
  remove: Ov,
  clone: Rv,
  datum: Mv,
  on: Uv,
  dispatch: jv,
  [Symbol.iterator]: Hv
};
function Tt(e) {
  return typeof e == "string" ? new wt([[document.querySelector(e)]], [document.documentElement]) : new wt([[e]], bf);
}
function Wv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Ut(e, t) {
  if (e = Wv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Xv = { passive: !1 }, Ur = { capture: !0, passive: !1 };
function Qi(e) {
  e.stopImmediatePropagation();
}
function nr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xf(e) {
  var t = e.document.documentElement, n = Tt(e).on("dragstart.drag", nr, Ur);
  "onselectstart" in t ? n.on("selectstart.drag", nr, Ur) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function wf(e, t) {
  var n = e.document.documentElement, r = Tt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", nr, Ur), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ho = (e) => () => e;
function _s(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
  y: s,
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
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
_s.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Yv(e) {
  return !e.ctrlKey && !e.button;
}
function Kv() {
  return this.parentNode;
}
function Zv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Jv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Qv() {
  var e = Yv, t = Kv, n = Zv, r = Jv, o = {}, i = yi("start", "drag", "end"), a = 0, s, c, u, d, f = 0;
  function v(S) {
    S.on("mousedown.drag", y).filter(r).on("touchstart.drag", h).on("touchmove.drag", b, Xv).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(S, A) {
    if (!(d || !e.call(this, S, A))) {
      var $ = g(this, t.call(this, S, A), S, A, "mouse");
      $ && (Tt(S.view).on("mousemove.drag", p, Ur).on("mouseup.drag", m, Ur), xf(S.view), Qi(S), u = !1, s = S.clientX, c = S.clientY, $("start", S));
    }
  }
  function p(S) {
    if (nr(S), !u) {
      var A = S.clientX - s, $ = S.clientY - c;
      u = A * A + $ * $ > f;
    }
    o.mouse("drag", S);
  }
  function m(S) {
    Tt(S.view).on("mousemove.drag mouseup.drag", null), wf(S.view, u), nr(S), o.mouse("end", S);
  }
  function h(S, A) {
    if (e.call(this, S, A)) {
      var $ = S.changedTouches, w = t.call(this, S, A), _ = $.length, L, F;
      for (L = 0; L < _; ++L)
        (F = g(this, w, S, A, $[L].identifier, $[L])) && (Qi(S), F("start", S, $[L]));
    }
  }
  function b(S) {
    var A = S.changedTouches, $ = A.length, w, _;
    for (w = 0; w < $; ++w)
      (_ = o[A[w].identifier]) && (nr(S), _("drag", S, A[w]));
  }
  function E(S) {
    var A = S.changedTouches, $ = A.length, w, _;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), w = 0; w < $; ++w)
      (_ = o[A[w].identifier]) && (Qi(S), _("end", S, A[w]));
  }
  function g(S, A, $, w, _, L) {
    var F = i.copy(), M = Ut(L || $, A), C, U, k;
    if ((k = n.call(S, new _s("beforestart", {
      sourceEvent: $,
      target: v,
      identifier: _,
      active: a,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: F
    }), w)) != null)
      return C = k.x - M[0] || 0, U = k.y - M[1] || 0, function P(x, N, D) {
        var Z = M, Q;
        switch (x) {
          case "start":
            o[_] = P, Q = a++;
            break;
          case "end":
            delete o[_], --a;
          case "drag":
            M = Ut(D || N, A), Q = a;
            break;
        }
        F.call(
          x,
          S,
          new _s(x, {
            sourceEvent: N,
            subject: k,
            target: v,
            identifier: _,
            active: Q,
            x: M[0] + C,
            y: M[1] + U,
            dx: M[0] - Z[0],
            dy: M[1] - Z[1],
            dispatch: F
          }),
          w
        );
      };
  }
  return v.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : ho(!!S), v) : e;
  }, v.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : ho(S), v) : t;
  }, v.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : ho(S), v) : n;
  }, v.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : ho(!!S), v) : r;
  }, v.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? v : S;
  }, v.clickDistance = function(S) {
    return arguments.length ? (f = (S = +S) * S, v) : Math.sqrt(f);
  }, v;
}
function nl(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function _f(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function to() {
}
var qr = 0.7, Yo = 1 / qr, rr = "\\s*([+-]?\\d+)\\s*", Vr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eg = /^#([0-9a-f]{3,8})$/, tg = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), ng = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), rg = new RegExp(`^rgba\\(${rr},${rr},${rr},${Vr}\\)$`), og = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${Vr}\\)$`), ig = new RegExp(`^hsl\\(${Vr},${Gt},${Gt}\\)$`), ag = new RegExp(`^hsla\\(${Vr},${Gt},${Gt},${Vr}\\)$`), tu = {
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
nl(to, Ln, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nu,
  // Deprecated! Use color.formatHex.
  formatHex: nu,
  formatHex8: sg,
  formatHsl: lg,
  formatRgb: ru,
  toString: ru
});
function nu() {
  return this.rgb().formatHex();
}
function sg() {
  return this.rgb().formatHex8();
}
function lg() {
  return Sf(this).formatHsl();
}
function ru() {
  return this.rgb().formatRgb();
}
function Ln(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = eg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ou(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = tg.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = ng.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = rg.exec(e)) ? mo(t[1], t[2], t[3], t[4]) : (t = og.exec(e)) ? mo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ig.exec(e)) ? su(t[1], t[2] / 100, t[3] / 100, 1) : (t = ag.exec(e)) ? su(t[1], t[2] / 100, t[3] / 100, t[4]) : tu.hasOwnProperty(e) ? ou(tu[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function ou(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function ug(e) {
  return e instanceof to || (e = Ln(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function Ss(e, t, n, r) {
  return arguments.length === 1 ? ug(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
nl(pt, Ss, _f(to, {
  brighter(e) {
    return e = e == null ? Yo : Math.pow(Yo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(In(this.r), In(this.g), In(this.b), Ko(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: iu,
  // Deprecated! Use color.formatHex.
  formatHex: iu,
  formatHex8: cg,
  formatRgb: au,
  toString: au
}));
function iu() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function cg() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function au() {
  const e = Ko(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ko(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function In(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = In(e), (e < 16 ? "0" : "") + e.toString(16);
}
function su(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ot(e, t, n, r);
}
function Sf(e) {
  if (e instanceof Ot)
    return new Ot(e.h, e.s, e.l, e.opacity);
  if (e instanceof to || (e = Ln(e)), !e)
    return new Ot();
  if (e instanceof Ot)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, c = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= c < 0.5 ? i + o : 2 - i - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new Ot(a, s, c, e.opacity);
}
function dg(e, t, n, r) {
  return arguments.length === 1 ? Sf(e) : new Ot(e, t, n, r ?? 1);
}
function Ot(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
nl(Ot, dg, _f(to, {
  brighter(e) {
    return e = e == null ? Yo : Math.pow(Yo, e), new Ot(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qr : Math.pow(qr, e), new Ot(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      ea(e >= 240 ? e - 240 : e + 120, o, r),
      ea(e, o, r),
      ea(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ot(lu(this.h), vo(this.s), vo(this.l), Ko(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ko(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${lu(this.h)}, ${vo(this.s) * 100}%, ${vo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function lu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function vo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ea(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const rl = (e) => () => e;
function fg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function pg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function hg(e) {
  return (e = +e) == 1 ? kf : function(t, n) {
    return n - t ? pg(t, n, e) : rl(isNaN(t) ? n : t);
  };
}
function kf(e, t) {
  var n = t - e;
  return n ? fg(e, n) : rl(isNaN(e) ? t : e);
}
const Zo = (function e(t) {
  var n = hg(t);
  function r(o, i) {
    var a = n((o = Ss(o)).r, (i = Ss(i)).r), s = n(o.g, i.g), c = n(o.b, i.b), u = kf(o.opacity, i.opacity);
    return function(d) {
      return o.r = a(d), o.g = s(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function mg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function vg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function gg(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), a;
  for (a = 0; a < r; ++a)
    o[a] = Tr(e[a], t[a]);
  for (; a < n; ++a)
    i[a] = t[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      i[a] = o[a](s);
    return i;
  };
}
function yg(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function bg(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Tr(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n)
      r[o] = n[o](i);
    return r;
  };
}
var ks = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ta = new RegExp(ks.source, "g");
function xg(e) {
  return function() {
    return e;
  };
}
function wg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ef(e, t) {
  var n = ks.lastIndex = ta.lastIndex = 0, r, o, i, a = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (r = ks.exec(e)) && (o = ta.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, c.push({ i: a, x: qt(r, o) })), n = ta.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? c[0] ? wg(c[0].x) : xg(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d)
      s[(f = c[d]).i] = f.x(u);
    return s.join("");
  });
}
function Tr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? rl(t) : (n === "number" ? qt : n === "string" ? (r = Ln(t)) ? (t = r, Zo) : Ef : t instanceof Ln ? Zo : t instanceof Date ? yg : vg(t) ? mg : Array.isArray(t) ? gg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bg : qt)(e, t);
}
var uu = 180 / Math.PI, Es = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $f(e, t, n, r, o, i) {
  var a, s, c;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * uu,
    skewX: Math.atan(c) * uu,
    scaleX: a,
    scaleY: s
  };
}
var go;
function _g(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Es : $f(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Sg(e) {
  return e == null || (go || (go = document.createElementNS("http://www.w3.org/2000/svg", "g")), go.setAttribute("transform", e), !(e = go.transform.baseVal.consolidate())) ? Es : (e = e.matrix, $f(e.a, e.b, e.c, e.d, e.e, e.f));
}
function zf(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, v, y, p) {
    if (u !== f || d !== v) {
      var m = y.push("translate(", null, t, null, n);
      p.push({ i: m - 4, x: qt(u, f) }, { i: m - 2, x: qt(d, v) });
    } else (f || v) && y.push("translate(" + f + t + v + n);
  }
  function a(u, d, f, v) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: qt(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function s(u, d, f, v) {
    u !== d ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: qt(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function c(u, d, f, v, y, p) {
    if (u !== f || d !== v) {
      var m = y.push(o(y) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: qt(u, f) }, { i: m - 2, x: qt(d, v) });
    } else (f !== 1 || v !== 1) && y.push(o(y) + "scale(" + f + "," + v + ")");
  }
  return function(u, d) {
    var f = [], v = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, v), a(u.rotate, d.rotate, f, v), s(u.skewX, d.skewX, f, v), c(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, v), u = d = null, function(y) {
      for (var p = -1, m = v.length, h; ++p < m; )
        f[(h = v[p]).i] = h.x(y);
      return f.join("");
    };
  };
}
var kg = zf(_g, "px, ", "px)", "deg)"), Eg = zf(Sg, ", ", ")", ")"), $g = 1e-12;
function cu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function zg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Pg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Oo = (function e(t, n, r) {
  function o(i, a) {
    var s = i[0], c = i[1], u = i[2], d = a[0], f = a[1], v = a[2], y = d - s, p = f - c, m = y * y + p * p, h, b;
    if (m < $g)
      b = Math.log(v / u) / t, h = function(w) {
        return [
          s + w * y,
          c + w * p,
          u * Math.exp(t * w * b)
        ];
      };
    else {
      var E = Math.sqrt(m), g = (v * v - u * u + r * m) / (2 * u * n * E), S = (v * v - u * u - r * m) / (2 * v * n * E), A = Math.log(Math.sqrt(g * g + 1) - g), $ = Math.log(Math.sqrt(S * S + 1) - S);
      b = ($ - A) / t, h = function(w) {
        var _ = w * b, L = cu(A), F = u / (n * E) * (L * Pg(t * _ + A) - zg(A));
        return [
          s + F * y,
          c + F * p,
          u * L / cu(t * _ + A)
        ];
      };
    }
    return h.duration = b * 1e3 * t / Math.SQRT2, h;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, c = s * s;
    return e(a, s, c);
  }, o;
})(Math.SQRT2, 2, 4);
var ar = 0, zr = 0, xr = 0, Pf = 1e3, Jo, Pr, Qo = 0, Un = 0, xi = 0, jr = typeof performance == "object" && performance.now ? performance : Date, Cf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ol() {
  return Un || (Cf(Cg), Un = jr.now() + xi);
}
function Cg() {
  Un = 0;
}
function ei() {
  this._call = this._time = this._next = null;
}
ei.prototype = Af.prototype = {
  constructor: ei,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ol() : +n) + (t == null ? 0 : +t), !this._next && Pr !== this && (Pr ? Pr._next = this : Jo = this, Pr = this), this._call = e, this._time = n, $s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $s());
  }
};
function Af(e, t, n) {
  var r = new ei();
  return r.restart(e, t, n), r;
}
function Ag() {
  ol(), ++ar;
  for (var e = Jo, t; e; )
    (t = Un - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ar;
}
function du() {
  Un = (Qo = jr.now()) + xi, ar = zr = 0;
  try {
    Ag();
  } finally {
    ar = 0, Og(), Un = 0;
  }
}
function Tg() {
  var e = jr.now(), t = e - Qo;
  t > Pf && (xi -= t, Qo = e);
}
function Og() {
  for (var e, t = Jo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Jo = n);
  Pr = e, $s(r);
}
function $s(e) {
  if (!ar) {
    zr && (zr = clearTimeout(zr));
    var t = e - Un;
    t > 24 ? (e < 1 / 0 && (zr = setTimeout(du, e - jr.now() - xi)), xr && (xr = clearInterval(xr))) : (xr || (Qo = jr.now(), xr = setInterval(Tg, Pf)), ar = 1, Cf(du));
  }
}
function fu(e, t, n) {
  var r = new ei();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Ng = yi("start", "end", "cancel", "interrupt"), Ig = [], Tf = 0, pu = 1, zs = 2, No = 3, hu = 4, Ps = 5, Io = 6;
function wi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a)
    e.__transition = {};
  else if (n in a)
    return;
  Rg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Ng,
    tween: Ig,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Tf
  });
}
function il(e, t) {
  var n = It(e, t);
  if (n.state > Tf)
    throw new Error("too late; already scheduled");
  return n;
}
function Kt(e, t) {
  var n = It(e, t);
  if (n.state > No)
    throw new Error("too late; already running");
  return n;
}
function It(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Rg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Af(i, 0, n.time);
  function i(u) {
    n.state = pu, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var d, f, v, y;
    if (n.state !== pu)
      return c();
    for (d in r)
      if (y = r[d], y.name === n.name) {
        if (y.state === No)
          return fu(a);
        y.state === hu ? (y.state = Io, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[d]) : +d < t && (y.state = Io, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[d]);
      }
    if (fu(function() {
      n.state === No && (n.state = hu, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = zs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === zs) {
      for (n.state = No, o = new Array(v = n.tween.length), d = 0, f = -1; d < v; ++d)
        (y = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function s(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Ps, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, d);
    n.state === Ps && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Io, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Ro(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > zs && r.state < Ps, r.state = Io, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Mg(e) {
  return this.each(function() {
    Ro(this, e);
  });
}
function Dg(e, t) {
  var n, r;
  return function() {
    var o = Kt(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Fg(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = Kt(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, c = 0, u = o.length; c < u; ++c)
        if (o[c].name === t) {
          o[c] = s;
          break;
        }
      c === u && o.push(s);
    }
    i.tween = o;
  };
}
function Bg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = It(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Dg : Fg)(n, e, t));
}
function al(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Kt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return It(o, r).value[t];
  };
}
function Of(e, t) {
  var n;
  return (typeof t == "number" ? qt : t instanceof Ln ? Zo : (n = Ln(t)) ? (t = n, Zo) : Ef)(e, t);
}
function Lg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ug(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Vg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function jg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), c = s + "", a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s)));
  };
}
function Hg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), c = s + "", a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s)));
  };
}
function Gg(e, t) {
  var n = bi(e), r = n === "transform" ? Eg : Of;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Hg : jg)(n, r, al(this, "attr." + e, t)) : t == null ? (n.local ? Ug : Lg)(n) : (n.local ? Vg : qg)(n, r, t));
}
function Wg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Xg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Yg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Xg(e, i)), n;
  }
  return o._value = t, o;
}
function Kg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Wg(e, i)), n;
  }
  return o._value = t, o;
}
function Zg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = bi(e);
  return this.tween(n, (r.local ? Yg : Kg)(r, t));
}
function Jg(e, t) {
  return function() {
    il(this, e).delay = +t.apply(this, arguments);
  };
}
function Qg(e, t) {
  return t = +t, function() {
    il(this, e).delay = t;
  };
}
function ey(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Jg : Qg)(t, e)) : It(this.node(), t).delay;
}
function ty(e, t) {
  return function() {
    Kt(this, e).duration = +t.apply(this, arguments);
  };
}
function ny(e, t) {
  return t = +t, function() {
    Kt(this, e).duration = t;
  };
}
function ry(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ty : ny)(t, e)) : It(this.node(), t).duration;
}
function oy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Kt(this, e).ease = t;
  };
}
function iy(e) {
  var t = this._id;
  return arguments.length ? this.each(oy(t, e)) : It(this.node(), t).ease;
}
function ay(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Kt(this, e).ease = n;
  };
}
function sy(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(ay(this._id, e));
}
function ly(e) {
  typeof e != "function" && (e = cf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], c, u = 0; u < a; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && s.push(c);
  return new un(r, this._parents, this._name, this._id);
}
function uy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var c = t[s], u = n[s], d = c.length, f = a[s] = new Array(d), v, y = 0; y < d; ++y)
      (v = c[y] || u[y]) && (f[y] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new un(a, this._parents, this._name, this._id);
}
function cy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function dy(e, t, n) {
  var r, o, i = cy(t) ? il : Kt;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function fy(e, t) {
  var n = this._id;
  return arguments.length < 2 ? It(this.node(), n).on.on(e) : this.each(dy(n, e, t));
}
function py(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function hy() {
  return this.on("end.remove", py(this._id));
}
function my(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = el(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], c = s.length, u = i[a] = new Array(c), d, f, v = 0; v < c; ++v)
      (d = s[v]) && (f = e.call(d, d.__data__, v, s)) && ("__data__" in d && (f.__data__ = d.__data__), u[v] = f, wi(u[v], t, n, v, u, It(d, n)));
  return new un(i, this._parents, t, n);
}
function vy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = uf(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var c = r[s], u = c.length, d, f = 0; f < u; ++f)
      if (d = c[f]) {
        for (var v = e.call(d, d.__data__, f, c), y, p = It(d, n), m = 0, h = v.length; m < h; ++m)
          (y = v[m]) && wi(y, t, n, m, v, p);
        i.push(v), a.push(d);
      }
  return new un(i, a, t, n);
}
var gy = eo.prototype.constructor;
function yy() {
  return new gy(this._groups, this._parents);
}
function by(e, t) {
  var n, r, o;
  return function() {
    var i = ir(this, e), a = (this.style.removeProperty(e), ir(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Nf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function xy(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = ir(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function wy(e, t, n) {
  var r, o, i;
  return function() {
    var a = ir(this, e), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(e), ir(this, e))), a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s));
  };
}
function _y(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var c = Kt(this, e), u = c.on, d = c.value[i] == null ? s || (s = Nf(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(a, o = d), c.on = r;
  };
}
function Sy(e, t, n) {
  var r = (e += "") == "transform" ? kg : Of;
  return t == null ? this.styleTween(e, by(e, r)).on("end.style." + e, Nf(e)) : typeof t == "function" ? this.styleTween(e, wy(e, r, al(this, "style." + e, t))).each(_y(this._id, e)) : this.styleTween(e, xy(e, r, t), n).on("end.style." + e, null);
}
function ky(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ey(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && ky(e, a, n)), r;
  }
  return i._value = t, i;
}
function $y(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Ey(e, t, n ?? ""));
}
function zy(e) {
  return function() {
    this.textContent = e;
  };
}
function Py(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Cy(e) {
  return this.tween("text", typeof e == "function" ? Py(al(this, "text", e)) : zy(e == null ? "" : e + ""));
}
function Ay(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ty(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ay(o)), t;
  }
  return r._value = e, r;
}
function Oy(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Ty(e));
}
function Ny() {
  for (var e = this._name, t = this._id, n = If(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var d = It(c, t);
        wi(c, e, n, u, a, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new un(r, this._parents, e, n);
}
function Iy() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Kt(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), u.on = t;
    }), o === 0 && i();
  });
}
var Ry = 0;
function un(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function If() {
  return ++Ry;
}
var Zt = eo.prototype;
un.prototype = {
  constructor: un,
  select: my,
  selectAll: vy,
  selectChild: Zt.selectChild,
  selectChildren: Zt.selectChildren,
  filter: ly,
  merge: uy,
  selection: yy,
  transition: Ny,
  call: Zt.call,
  nodes: Zt.nodes,
  node: Zt.node,
  size: Zt.size,
  empty: Zt.empty,
  each: Zt.each,
  on: fy,
  attr: Gg,
  attrTween: Zg,
  style: Sy,
  styleTween: $y,
  text: Cy,
  textTween: Oy,
  remove: hy,
  tween: Bg,
  delay: ey,
  duration: ry,
  ease: iy,
  easeVarying: sy,
  end: Iy,
  [Symbol.iterator]: Zt[Symbol.iterator]
};
function My(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Dy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: My
};
function Fy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function By(e) {
  var t, n;
  e instanceof un ? (t = e._id, e = e._name) : (t = If(), (n = Dy).time = ol(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && wi(c, e, t, u, a, n || Fy(c, t));
  return new un(r, this._parents, e, t);
}
eo.prototype.interrupt = Mg;
eo.prototype.transition = By;
const yo = (e) => () => e;
function Ly(e, {
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
function rn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
rn.prototype = {
  constructor: rn,
  scale: function(e) {
    return e === 1 ? this : new rn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new rn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var sr = new rn(1, 0, 0);
rn.prototype;
function na(e) {
  e.stopImmediatePropagation();
}
function wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function qy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function mu() {
  return this.__zoom || sr;
}
function Vy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function jy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Hy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Gy() {
  var e = Uy, t = qy, n = Hy, r = Vy, o = jy, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, c = Oo, u = yi("start", "zoom", "end"), d, f, v, y = 500, p = 150, m = 0, h = 10;
  function b(k) {
    k.property("__zoom", mu).on("wheel.zoom", _, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", F).filter(o).on("touchstart.zoom", M).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", U).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(k, P, x, N) {
    var D = k.selection ? k.selection() : k;
    D.property("__zoom", mu), k !== D ? A(k, P, x, N) : D.interrupt().each(function() {
      $(this, arguments).event(N).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function(k, P, x, N) {
    b.scaleTo(k, function() {
      var D = this.__zoom.k, Z = typeof P == "function" ? P.apply(this, arguments) : P;
      return D * Z;
    }, x, N);
  }, b.scaleTo = function(k, P, x, N) {
    b.transform(k, function() {
      var D = t.apply(this, arguments), Z = this.__zoom, Q = x == null ? S(D) : typeof x == "function" ? x.apply(this, arguments) : x, ee = Z.invert(Q), fe = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(g(E(Z, fe), Q, ee), D, a);
    }, x, N);
  }, b.translateBy = function(k, P, x, N) {
    b.transform(k, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), a);
    }, null, N);
  }, b.translateTo = function(k, P, x, N, D) {
    b.transform(k, function() {
      var Z = t.apply(this, arguments), Q = this.__zoom, ee = N == null ? S(Z) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(sr.translate(ee[0], ee[1]).scale(Q.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), Z, a);
    }, N, D);
  };
  function E(k, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === k.k ? k : new rn(P, k.x, k.y);
  }
  function g(k, P, x) {
    var N = P[0] - x[0] * k.k, D = P[1] - x[1] * k.k;
    return N === k.x && D === k.y ? k : new rn(k.k, N, D);
  }
  function S(k) {
    return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
  }
  function A(k, P, x, N) {
    k.on("start.zoom", function() {
      $(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      $(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var D = this, Z = arguments, Q = $(D, Z).event(N), ee = t.apply(D, Z), fe = x == null ? S(ee) : typeof x == "function" ? x.apply(D, Z) : x, ye = Math.max(ee[1][0] - ee[0][0], ee[1][1] - ee[0][1]), _e = D.__zoom, ne = typeof P == "function" ? P.apply(D, Z) : P, ie = c(_e.invert(fe).concat(ye / _e.k), ne.invert(fe).concat(ye / ne.k));
      return function(me) {
        if (me === 1)
          me = ne;
        else {
          var ze = ie(me), ke = ye / ze[2];
          me = new rn(ke, fe[0] - ze[0] * ke, fe[1] - ze[1] * ke);
        }
        Q.zoom(null, me);
      };
    });
  }
  function $(k, P, x) {
    return !x && k.__zooming || new w(k, P);
  }
  function w(k, P) {
    this.that = k, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(k, P), this.taps = 0;
  }
  w.prototype = {
    event: function(k) {
      return k && (this.sourceEvent = k), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(k, P) {
      return this.mouse && k !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(k) {
      var P = Tt(this.that).datum();
      u.call(
        k,
        this.that,
        new Ly(k, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function _(k, ...P) {
    if (!e.apply(this, arguments))
      return;
    var x = $(this, P).event(k), N = this.__zoom, D = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), Z = Ut(k);
    if (x.wheel)
      (x.mouse[0][0] !== Z[0] || x.mouse[0][1] !== Z[1]) && (x.mouse[1] = N.invert(x.mouse[0] = Z)), clearTimeout(x.wheel);
    else {
      if (N.k === D)
        return;
      x.mouse = [Z, N.invert(Z)], Ro(this), x.start();
    }
    wr(k), x.wheel = setTimeout(Q, p), x.zoom("mouse", n(g(E(N, D), x.mouse[0], x.mouse[1]), x.extent, a));
    function Q() {
      x.wheel = null, x.end();
    }
  }
  function L(k, ...P) {
    if (v || !e.apply(this, arguments))
      return;
    var x = k.currentTarget, N = $(this, P, !0).event(k), D = Tt(k.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", ye, !0), Z = Ut(k, x), Q = k.clientX, ee = k.clientY;
    xf(k.view), na(k), N.mouse = [Z, this.__zoom.invert(Z)], Ro(this), N.start();
    function fe(_e) {
      if (wr(_e), !N.moved) {
        var ne = _e.clientX - Q, ie = _e.clientY - ee;
        N.moved = ne * ne + ie * ie > m;
      }
      N.event(_e).zoom("mouse", n(g(N.that.__zoom, N.mouse[0] = Ut(_e, x), N.mouse[1]), N.extent, a));
    }
    function ye(_e) {
      D.on("mousemove.zoom mouseup.zoom", null), wf(_e.view, N.moved), wr(_e), N.event(_e).end();
    }
  }
  function F(k, ...P) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, N = Ut(k.changedTouches ? k.changedTouches[0] : k, this), D = x.invert(N), Z = x.k * (k.shiftKey ? 0.5 : 2), Q = n(g(E(x, Z), N, D), t.apply(this, P), a);
      wr(k), s > 0 ? Tt(this).transition().duration(s).call(A, Q, N, k) : Tt(this).call(b.transform, Q, N, k);
    }
  }
  function M(k, ...P) {
    if (e.apply(this, arguments)) {
      var x = k.touches, N = x.length, D = $(this, P, k.changedTouches.length === N).event(k), Z, Q, ee, fe;
      for (na(k), Q = 0; Q < N; ++Q)
        ee = x[Q], fe = Ut(ee, this), fe = [fe, this.__zoom.invert(fe), ee.identifier], D.touch0 ? !D.touch1 && D.touch0[2] !== fe[2] && (D.touch1 = fe, D.taps = 0) : (D.touch0 = fe, Z = !0, D.taps = 1 + !!d);
      d && (d = clearTimeout(d)), Z && (D.taps < 2 && (f = fe[0], d = setTimeout(function() {
        d = null;
      }, y)), Ro(this), D.start());
    }
  }
  function C(k, ...P) {
    if (this.__zooming) {
      var x = $(this, P).event(k), N = k.changedTouches, D = N.length, Z, Q, ee, fe;
      for (wr(k), Z = 0; Z < D; ++Z)
        Q = N[Z], ee = Ut(Q, this), x.touch0 && x.touch0[2] === Q.identifier ? x.touch0[0] = ee : x.touch1 && x.touch1[2] === Q.identifier && (x.touch1[0] = ee);
      if (Q = x.that.__zoom, x.touch1) {
        var ye = x.touch0[0], _e = x.touch0[1], ne = x.touch1[0], ie = x.touch1[1], me = (me = ne[0] - ye[0]) * me + (me = ne[1] - ye[1]) * me, ze = (ze = ie[0] - _e[0]) * ze + (ze = ie[1] - _e[1]) * ze;
        Q = E(Q, Math.sqrt(me / ze)), ee = [(ye[0] + ne[0]) / 2, (ye[1] + ne[1]) / 2], fe = [(_e[0] + ie[0]) / 2, (_e[1] + ie[1]) / 2];
      } else if (x.touch0)
        ee = x.touch0[0], fe = x.touch0[1];
      else
        return;
      x.zoom("touch", n(g(Q, ee, fe), x.extent, a));
    }
  }
  function U(k, ...P) {
    if (this.__zooming) {
      var x = $(this, P).event(k), N = k.changedTouches, D = N.length, Z, Q;
      for (na(k), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, y), Z = 0; Z < D; ++Z)
        Q = N[Z], x.touch0 && x.touch0[2] === Q.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === Q.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0)
        x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (Q = Ut(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < h)) {
        var ee = Tt(this).on("dblclick.zoom");
        ee && ee.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : yo(+k), b) : r;
  }, b.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : yo(!!k), b) : e;
  }, b.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : yo(!!k), b) : o;
  }, b.extent = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : yo([[+k[0][0], +k[0][1]], [+k[1][0], +k[1][1]]]), b) : t;
  }, b.scaleExtent = function(k) {
    return arguments.length ? (i[0] = +k[0], i[1] = +k[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(k) {
    return arguments.length ? (a[0][0] = +k[0][0], a[1][0] = +k[1][0], a[0][1] = +k[0][1], a[1][1] = +k[1][1], b) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, b.constrain = function(k) {
    return arguments.length ? (n = k, b) : n;
  }, b.duration = function(k) {
    return arguments.length ? (s = +k, b) : s;
  }, b.interpolate = function(k) {
    return arguments.length ? (c = k, b) : c;
  }, b.on = function() {
    var k = u.on.apply(u, arguments);
    return k === u ? b : k;
  }, b.clickDistance = function(k) {
    return arguments.length ? (m = (k = +k) * k, b) : Math.sqrt(m);
  }, b.tapDistance = function(k) {
    return arguments.length ? (h = +k, b) : h;
  }, b;
}
var le = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(le || {}), sl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(sl || {}), An = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(An || {}), wn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(wn || {}), ti = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(ti || {}), Or = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Or || {}), Rf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Rf || {});
const Wy = ["INPUT", "SELECT", "TEXTAREA"], Xy = typeof document < "u" ? document : null;
function Cs(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, i = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Wy.includes(r?.nodeName) || o || !!i;
}
function Yy(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function vu(e, t, n, r) {
  const o = t.replace("+", `
`).replace(`

`, `
+`).split(`
`).map((a) => a.trim().toLowerCase());
  if (o.length === 1)
    return e.toLowerCase() === t.toLowerCase();
  r || n.add(e.toLowerCase());
  const i = o.every(
    (a, s) => n.has(a) && Array.from(n.values())[s] === o[s]
  );
  return r && n.delete(e.toLowerCase()), i;
}
function Ky(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = Zy(n.code, e);
    return Array.isArray(e) ? e.some((o) => vu(n[r], o, t, n.type === "keyup")) : vu(n[r], e, t, n.type === "keyup");
  };
}
function Zy(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Nr(e, t) {
  const n = J(() => Ne(t?.target) ?? Xy), r = nn(Ne(e) === !0);
  let o = !1;
  const i = /* @__PURE__ */ new Set();
  let a = c(Ne(e));
  Oe(
    () => Ne(e),
    (u, d) => {
      typeof d == "boolean" && typeof u != "boolean" && s(), a = c(u);
    },
    {
      immediate: !0
    }
  ), sf(["blur", "contextmenu"], s), Jl(
    (...u) => a(...u),
    (u) => {
      var d, f;
      const v = Ne(t?.actInsideInputWithModifier) ?? !0, y = Ne(t?.preventDefault) ?? !1;
      if (o = Yy(u), (!o || o && !v) && Cs(u))
        return;
      const m = ((f = (d = u.composedPath) == null ? void 0 : d.call(u)) == null ? void 0 : f[0]) || u.target, h = m?.nodeName === "BUTTON" || m?.nodeName === "A";
      !y && (o || !h) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), Jl(
    (...u) => a(...u),
    (u) => {
      const d = Ne(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !d) && Cs(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function s() {
    o = !1, i.clear(), r.value = Ne(e) === !0;
  }
  function c(u) {
    return u === null ? (s(), () => !1) : typeof u == "boolean" ? (s(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? Ky(u, i) : u;
  }
  return r;
}
const Mf = "vue-flow__node-desc", Df = "vue-flow__edge-desc", Jy = "vue-flow__aria-live", Ff = ["Enter", " ", "Escape"], or = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function ni(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function ri(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function _i(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function qn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Bf(e, t) {
  return {
    x: qn(e.x, t[0][0], t[1][0]),
    y: qn(e.y, t[0][1], t[1][1])
  };
}
function gu(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function _n(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Rn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !_n(e);
}
function Cr(e) {
  return Rn(e) && "computedPosition" in e;
}
function bo(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Qy(e) {
  return bo(e.width) && bo(e.height) && bo(e.x) && bo(e.y);
}
function eb(e, t, n) {
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
function Lf(e, t, n) {
  var r, o;
  const i = {
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
  return Object.assign(t ?? i, e, { id: e.id.toString() });
}
function Uf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, i = /* @__PURE__ */ new Set(), a = r === "source" ? "target" : "source";
  for (const s of n)
    s[a] === o && i.add(s[r]);
  return t.filter((s) => i.has(s.id));
}
function tb(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return Uf(i, a, s, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => _n(i) && i.source === r).map((i) => n.find((a) => Rn(a) && a.id === i.target));
}
function nb(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return Uf(i, a, s, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => _n(i) && i.target === r).map((i) => n.find((a) => Rn(a) && a.id === i.source));
}
function qf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function rb(e, t) {
  return t.some(
    (n) => _n(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Hr({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function Gr({ x: e, y: t }, { x: n, y: r, zoom: o }, i = !1, a = [1, 1]) {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Si(s, a) : s;
}
function ob(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Vf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function ib({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function jf(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = ob(
      t,
      Vf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return ib(t);
}
function Hf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const i = {
    ...Gr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, a = [];
  for (const s of e) {
    const { dimensions: c, selectable: u = !0, hidden: d = !1 } = s, f = c.width ?? s.width ?? null, v = c.height ?? s.height ?? null;
    if (o && !u || d)
      continue;
    const y = ri(i, ni(s)), p = f === null || v === null, m = r && y > 0, h = (f ?? 0) * (v ?? 0);
    (p || m || y >= h || s.dragging) && a.push(s);
  }
  return a;
}
function Gf(e, t) {
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
  return no(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function ab(e, t, n) {
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
    const r = Zn(e.top ?? e.y ?? 0, n), o = Zn(e.bottom ?? e.y ?? 0, n), i = Zn(e.left ?? e.x ?? 0, t), a = Zn(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function sb(e, t, n, r, o, i) {
  const { x: a, y: s } = Hr(e, { x: t, y: n, zoom: r }), { x: c, y: u } = Hr(
    { x: e.x + e.width, y: e.y + e.height },
    {
      x: t,
      y: n,
      zoom: r
    }
  ), d = o - c, f = i - u;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
function yu(e, t, n, r, o, i = 0.1) {
  const a = ab(i, t, n), s = (t - a.x) / e.width, c = (n - a.y) / e.height, u = Math.min(s, c), d = qn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, y = t / 2 - f * d, p = n / 2 - v * d, m = sb(e, y, p, d, t, n), h = {
    left: Math.min(m.left - a.left, 0),
    top: Math.min(m.top - a.top, 0),
    right: Math.min(m.right - a.right, 0),
    bottom: Math.min(m.bottom - a.bottom, 0)
  };
  return {
    x: y - h.left + h.right,
    y: p - h.top + h.bottom,
    zoom: d
  };
}
function lb(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Wf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Wf(n, t) : !1;
}
function Wr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function bu(e) {
  const t = e.ctrlKey && oi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function xu(e, t, n) {
  return e < t ? qn(Math.abs(e - t), 1, t) / t : e > n ? -qn(Math.abs(e - n), 1, t) / t : 0;
}
function Xf(e, t, n = 15, r = 40) {
  const o = xu(e.x, r, t.width - r) * n, i = xu(e.y, r, t.height - r) * n;
  return [o, i];
}
function ra(e, t) {
  if (t) {
    const n = e.position.x + e.dimensions.width - t.dimensions.width, r = e.position.y + e.dimensions.height - t.dimensions.height;
    if (n > 0 || r > 0 || e.position.x < 0 || e.position.y < 0) {
      let o = {};
      if (typeof t.style == "function" ? o = { ...t.style(t) } : t.style && (o = { ...t.style }), o.width = o.width ?? `${t.dimensions.width}px`, o.height = o.height ?? `${t.dimensions.height}px`, n > 0)
        if (typeof o.width == "string") {
          const i = Number(o.width.replace("px", ""));
          o.width = `${i + n}px`;
        } else
          o.width += n;
      if (r > 0)
        if (typeof o.height == "string") {
          const i = Number(o.height.replace("px", ""));
          o.height = `${i + r}px`;
        } else
          o.height += r;
      if (e.position.x < 0) {
        const i = Math.abs(e.position.x);
        if (t.position.x = t.position.x - i, typeof o.width == "string") {
          const a = Number(o.width.replace("px", ""));
          o.width = `${a + i}px`;
        } else
          o.width += i;
        e.position.x = 0;
      }
      if (e.position.y < 0) {
        const i = Math.abs(e.position.y);
        if (t.position.y = t.position.y - i, typeof o.height == "string") {
          const a = Number(o.height.replace("px", ""));
          o.height = `${a + i}px`;
        } else
          o.height += i;
        e.position.y = 0;
      }
      t.dimensions.width = Number(o.width.toString().replace("px", "")), t.dimensions.height = Number(o.height.toString().replace("px", "")), typeof t.style == "function" ? t.style = (i) => {
        const a = t.style;
        return {
          ...a(i),
          ...o
        };
      } : t.style = {
        ...t.style,
        ...o
      };
    }
  }
}
function wu(e, t) {
  var n, r;
  const o = e.filter((a) => a.type === "add" || a.type === "remove");
  for (const a of o)
    if (a.type === "add")
      t.findIndex((c) => c.id === a.item.id) === -1 && t.push(a.item);
    else if (a.type === "remove") {
      const s = t.findIndex((c) => c.id === a.id);
      s !== -1 && t.splice(s, 1);
    }
  const i = t.map((a) => a.id);
  for (const a of t)
    for (const s of e)
      if (s.id === a.id)
        switch (s.type) {
          case "select":
            a.selected = s.selected;
            break;
          case "position":
            if (Cr(a) && (typeof s.position < "u" && (a.position = s.position), typeof s.dragging < "u" && (a.dragging = s.dragging), a.expandParent && a.parentNode)) {
              const c = t[i.indexOf(a.parentNode)];
              c && Cr(c) && ra(a, c);
            }
            break;
          case "dimensions":
            if (Cr(a) && (typeof s.dimensions < "u" && (a.dimensions = s.dimensions), typeof s.updateStyle < "u" && s.updateStyle && (a.style = {
              ...a.style || {},
              width: `${(n = s.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = s.dimensions) == null ? void 0 : r.height}px`
            }), typeof s.resizing < "u" && (a.resizing = s.resizing), a.expandParent && a.parentNode)) {
              const c = t[i.indexOf(a.parentNode)];
              c && Cr(c) && (!!c.dimensions.width && !!c.dimensions.height ? ra(a, c) : an(() => {
                ra(a, c);
              }));
            }
            break;
        }
  return t;
}
function vn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function _u(e) {
  return {
    item: e,
    type: "add"
  };
}
function Su(e) {
  return {
    id: e,
    type: "remove"
  };
}
function ku(e, t, n, r, o) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: r || null,
    targetHandle: o || null,
    type: "remove"
  };
}
function gn(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const a = t.has(o);
    !(i.selected === void 0 && !a) && i.selected !== a && (n && (i.selected = a), r.push(vn(i.id, a)));
  }
  return r;
}
const Eu = () => {
};
function ue(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Eu, r = () => !1;
  const o = () => t.size > 0 || r(), i = (v) => {
    n = v;
  }, a = () => {
    n = Eu;
  }, s = (v) => {
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
      return Lr(y), { off: y };
    },
    off: u,
    trigger: (v) => {
      const y = [n];
      return o() ? y.push(...t) : e && y.push(e), Promise.allSettled(y.map((p) => p(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: i,
    removeEmitter: a,
    setHasEmitListeners: s,
    removeHasEmitListeners: c
  };
}
function $u(e, t, n) {
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
function ub(e, t, n, r) {
  var o, i;
  const a = /* @__PURE__ */ new Map();
  for (const [s, c] of e)
    (c.selected || c.id === r) && (!c.parentNode || !Wf(c, e)) && (c.draggable || t && typeof c.draggable > "u") && e.get(s) && a.set(s, {
      id: c.id,
      position: c.position || { x: 0, y: 0 },
      distance: {
        x: n.x - ((o = c.computedPosition) == null ? void 0 : o.x) || 0,
        y: n.y - ((i = c.computedPosition) == null ? void 0 : i.y) || 0
      },
      from: { x: c.computedPosition.x, y: c.computedPosition.y },
      extent: c.extent,
      parentNode: c.parentNode,
      dimensions: { ...c.dimensions },
      expandParent: c.expandParent
    });
  return Array.from(a.values());
}
function oa({
  id: e,
  dragItems: t,
  findNode: n
}) {
  const r = [];
  for (const o of t) {
    const i = n(o.id);
    i && r.push(i);
  }
  return [e ? r.find((o) => o.id === e) : r[0], r];
}
function Yf(e) {
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
function cb(e, t, n) {
  const [r, o, i, a] = typeof e != "string" ? Yf(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + a, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - i
    ]
  ] : !1;
}
function db(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const i = cb(o, e, r);
      i && (o = i);
    } else
      t(new rt(tt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const i = r?.computedPosition.x || 0, a = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + i, o[0][1] + a],
      [o[1][0] + i, o[1][1] + a]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [i, a, s, c] = Yf(o.padding), u = r?.computedPosition.x || 0, d = r?.computedPosition.y || 0;
    o = [
      [o.range[0][0] + u + c, o.range[0][1] + d + i],
      [o.range[1][0] + u - a, o.range[1][1] + d - s]
    ];
  }
  return o === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : o;
}
function fb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function ll(e, t, n, r, o) {
  const i = fb(e.dimensions, db(e, n, r, o)), a = Bf(t, i);
  return {
    position: {
      x: a.x - (o?.computedPosition.x || 0),
      y: a.y - (o?.computedPosition.y || 0)
    },
    computedPosition: a
  };
}
function lr(e, t, n = le.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, i = (t?.y ?? 0) + e.computedPosition.y, { width: a, height: s } = t ?? vb(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch (t?.position ?? n) {
    case le.Top:
      return { x: o + a / 2, y: i };
    case le.Right:
      return { x: o + a, y: i + s / 2 };
    case le.Bottom:
      return { x: o + a / 2, y: i + s };
    case le.Left:
      return { x: o, y: i + s / 2 };
  }
}
function zu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function pb({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: r,
  targetWidth: o,
  targetHeight: i,
  width: a,
  height: s,
  viewport: c
}) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + o),
    y2: Math.max(e.y + r, t.y + i)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const d = Vf({
    x: (0 - c.x) / c.zoom,
    y: (0 - c.y) / c.zoom,
    width: a / c.zoom,
    height: s / c.zoom
  }), f = Math.max(0, Math.min(d.x2, u.x2) - Math.max(d.x, u.x)), v = Math.max(0, Math.min(d.y2, u.y2) - Math.max(d.y, u.y));
  return Math.ceil(f * v) > 0;
}
function hb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const i = t(e.source), a = t(e.target);
  return !i || !a ? 0 : (n && (o = r ? e.zIndex : Math.max(i.computedPosition.z || 0, a.computedPosition.z || 0)), o);
}
var tt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(tt || {});
const Pu = {
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
class rt extends Error {
  constructor(t, ...n) {
    var r;
    super((r = Pu[t]) == null ? void 0 : r.call(Pu, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function ul(e) {
  return "clientX" in e;
}
function mb(e) {
  return "sourceEvent" in e;
}
function jt(e, t) {
  const n = ul(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const oi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function vb(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function Si(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const gb = () => !0;
function ia(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function yb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ri(o, ni(i)) > 0 && r.push(i);
  return r;
}
const bb = 250;
function xb(e, t, n, r) {
  var o, i;
  let a = [], s = Number.POSITIVE_INFINITY;
  const c = yb(e, n, t + bb);
  for (const u of c) {
    const d = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y } = lr(u, f, f.position, !0), p = Math.sqrt((v - e.x) ** 2 + (y - e.y) ** 2);
      p > t || (p < s ? (a = [{ ...f, x: v, y }], s = p) : p === s && a.push({ ...f, x: v, y }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return a.find((d) => d.type === u) ?? a[0];
  }
  return a[0];
}
function Cu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: i,
  doc: a,
  lib: s,
  flowId: c,
  isValidConnection: u = gb
}, d, f, v, y) {
  const p = i === "target", m = t ? a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: b } = jt(e), E = a.elementFromPoint(h, b), g = E?.classList.contains(`${s}-flow__handle`) ? E : m, S = {
    handleDomNode: g,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (g) {
    const A = Kf(void 0, g), $ = g.getAttribute("data-nodeid"), w = g.getAttribute("data-handleid"), _ = g.classList.contains("connectable"), L = g.classList.contains("connectableend");
    if (!$ || !A)
      return S;
    const F = {
      source: p ? $ : r,
      sourceHandle: p ? w : o,
      target: p ? r : $,
      targetHandle: p ? o : w
    };
    S.connection = F;
    const C = _ && L && (n === wn.Strict ? p && A === "source" || !p && A === "target" : $ !== r || w !== o);
    S.isValid = C && u(F, {
      nodes: f,
      edges: d,
      sourceNode: v(F.source),
      targetNode: v(F.target)
    }), S.toHandle = Zf($, A, w, y, n, !0);
  }
  return S;
}
function Kf(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function wb(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function _b(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function Zf(e, t, n, r, o, i = !1) {
  var a, s, c;
  const u = r.get(e);
  if (!u)
    return null;
  const d = o === wn.Strict ? (a = u.handleBounds) == null ? void 0 : a[t] : [...((s = u.handleBounds) == null ? void 0 : s.source) ?? [], ...((c = u.handleBounds) == null ? void 0 : c.target) ?? []], f = (n ? d?.find((v) => v.id === n) : d?.[0]) ?? null;
  return f && i ? { ...f, ...lr(u, f, f.position, !0) } : f;
}
const As = {
  [le.Left]: le.Right,
  [le.Right]: le.Left,
  [le.Top]: le.Bottom,
  [le.Bottom]: le.Top
}, Sb = ["production", "prod"];
function no(e, ...t) {
  Jf() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function Jf() {
  return !Sb.includes(process.env.NODE_ENV || "");
}
function Au(e, t, n, r, o) {
  const i = t.querySelectorAll(`.vue-flow__handle.${e}`);
  return i?.length ? Array.from(i).map((a) => {
    const s = a.getBoundingClientRect();
    return {
      id: a.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: a.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ..._i(a)
    };
  }) : null;
}
function Ts(e, t, n, r, o, i = !1, a) {
  o.value = !1, e.selected ? (i || e.selected && t) && (r([e]), an(() => {
    a.blur();
  })) : n([e]);
}
function et(e) {
  return typeof I(e) < "u";
}
function kb(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new rt(tt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return _n(e) ? o = e : o = {
    ...e,
    id: qf(e)
  }, o = Lf(o, void 0, r), rb(o, t) ? !1 : o;
}
function Eb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new rt(tt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new rt(tt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: i, ...a } = e;
  return {
    ...a,
    id: r ? qf(t) : i,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Tu(e, t, n) {
  const r = {}, o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    if (!Rn(a)) {
      n(
        new rt(tt.NODE_INVALID, a?.id) || `[ID UNKNOWN|INDEX ${i}]`
      );
      continue;
    }
    const s = eb(a, t(a.id), a.parentNode);
    a.parentNode && (r[a.parentNode] = !0), o[i] = s;
  }
  for (const i of o) {
    const a = t(i.parentNode) || o.find((s) => s.id === i.parentNode);
    i.parentNode && !a && n(new rt(tt.NODE_MISSING_PARENT, i.id, i.parentNode)), (i.parentNode || r[i.id]) && (r[i.id] && (i.isParent = !0), a && (a.isParent = !0));
  }
  return o;
}
function Ou(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const c = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, c.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const u = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, u.set(n, t));
  }
}
function aa(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, d = `${i}-${s}--${o}-${a}`;
    Ou("source", c, d, e, o, a), Ou("target", c, u, e, i, s);
  }
}
function Nu(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function sa(e, t, n, r, o, i, a, s) {
  const c = [];
  for (const u of e) {
    const d = _n(u) ? u : kb(u, s, o, i);
    if (!d)
      continue;
    const f = n(d.source), v = n(d.target);
    if (!f || !v) {
      o(new rt(tt.EDGE_SOURCE_TARGET_MISSING, d.id, d.source, d.target));
      continue;
    }
    if (!f) {
      o(new rt(tt.EDGE_SOURCE_MISSING, d.id, d.source));
      continue;
    }
    if (!v) {
      o(new rt(tt.EDGE_TARGET_MISSING, d.id, d.target));
      continue;
    }
    if (t && !t(d, {
      edges: s,
      nodes: a,
      sourceNode: f,
      targetNode: v
    })) {
      o(new rt(tt.EDGE_INVALID, d.id));
      continue;
    }
    const y = r(d.id);
    c.push({
      ...Lf(d, y, i),
      sourceNode: f,
      targetNode: v
    });
  }
  return c;
}
const Iu = /* @__PURE__ */ Symbol("vueFlow"), Qf = /* @__PURE__ */ Symbol("nodeId"), ep = /* @__PURE__ */ Symbol("nodeRef"), $b = /* @__PURE__ */ Symbol("edgeId"), zb = /* @__PURE__ */ Symbol("edgeRef"), ki = /* @__PURE__ */ Symbol("slots");
function tp(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: r,
    noDragClassName: o,
    nodeLookup: i,
    nodeExtent: a,
    nodeDragThreshold: s,
    viewport: c,
    autoPanOnNodeDrag: u,
    autoPanSpeed: d,
    nodesDraggable: f,
    panBy: v,
    findNode: y,
    multiSelectionActive: p,
    nodesSelectionActive: m,
    selectNodesOnDrag: h,
    removeSelectedElements: b,
    addSelectedNodes: E,
    updateNodePositions: g,
    emits: S
  } = Ve(), { onStart: A, onDrag: $, onStop: w, onClick: _, el: L, disabled: F, id: M, selectable: C, dragHandle: U } = e, k = nn(!1);
  let P = [], x, N = null, D = { x: void 0, y: void 0 }, Z = { x: 0, y: 0 }, Q = null, ee = !1, fe = !1, ye = 0, _e = !1;
  const ne = Ab(), ie = ({ x: ae, y: ve }) => {
    D = { x: ae, y: ve };
    let R = !1;
    if (P = P.map((O) => {
      const B = { x: ae - O.distance.x, y: ve - O.distance.y }, { computedPosition: j } = ll(
        O,
        n.value ? Si(B, r.value) : B,
        S.error,
        a.value,
        O.parentNode ? y(O.parentNode) : void 0
      );
      return R = R || O.position.x !== j.x || O.position.y !== j.y, O.position = j, O;
    }), fe = fe || R, !!R && (g(P, !0, !0), k.value = !0, Q)) {
      const [O, B] = oa({
        id: M,
        dragItems: P,
        findNode: y
      });
      $({ event: Q, node: O, nodes: B });
    }
  }, me = () => {
    if (!N)
      return;
    const [ae, ve] = Xf(Z, N, d.value);
    if (ae !== 0 || ve !== 0) {
      const R = {
        x: (D.x ?? 0) - ae / c.value.zoom,
        y: (D.y ?? 0) - ve / c.value.zoom
      };
      v({ x: ae, y: ve }) && ie(R);
    }
    ye = requestAnimationFrame(me);
  }, ze = (ae, ve) => {
    ee = !0;
    const R = y(M);
    !h.value && !p.value && R && (R.selected || b()), R && Ne(C) && h.value && Ts(
      R,
      p.value,
      E,
      b,
      m,
      !1,
      ve
    );
    const O = ne(ae.sourceEvent);
    if (D = O, P = ub(i.value, f.value, O, M), P.length) {
      const [B, j] = oa({
        id: M,
        dragItems: P,
        findNode: y
      });
      A({ event: ae.sourceEvent, node: B, nodes: j });
    }
  }, ke = (ae, ve) => {
    var R;
    ae.sourceEvent.type === "touchmove" && ae.sourceEvent.touches.length > 1 || (fe = !1, s.value === 0 && ze(ae, ve), D = ne(ae.sourceEvent), N = ((R = t.value) == null ? void 0 : R.getBoundingClientRect()) || null, Z = jt(ae.sourceEvent, N));
  }, se = (ae, ve) => {
    const R = ne(ae.sourceEvent);
    if (!_e && ee && u.value && (_e = !0, me()), !ee) {
      const O = R.xSnapped - (D.x ?? 0), B = R.ySnapped - (D.y ?? 0);
      Math.sqrt(O * O + B * B) > s.value && ze(ae, ve);
    }
    (D.x !== R.xSnapped || D.y !== R.ySnapped) && P.length && ee && (Q = ae.sourceEvent, Z = jt(ae.sourceEvent, N), ie(R));
  }, we = (ae) => {
    let ve = !1;
    if (!ee && !k.value && !p.value) {
      const R = ae.sourceEvent, O = ne(R), B = O.xSnapped - (D.x ?? 0), j = O.ySnapped - (D.y ?? 0), q = Math.sqrt(B * B + j * j);
      q !== 0 && q <= s.value && (_?.(R), ve = !0);
    }
    if (P.length && !ve) {
      fe && (g(P, !1, !1), fe = !1);
      const [R, O] = oa({
        id: M,
        dragItems: P,
        findNode: y
      });
      w({ event: ae.sourceEvent, node: R, nodes: O });
    }
    P = [], k.value = !1, _e = !1, ee = !1, D = { x: void 0, y: void 0 }, cancelAnimationFrame(ye);
  };
  return Oe([() => Ne(F), L], ([ae, ve], R, O) => {
    if (ve) {
      const B = Tt(ve);
      ae || (x = Qv().on("start", (j) => ke(j, ve)).on("drag", (j) => se(j, ve)).on("end", (j) => we(j)).filter((j) => {
        const q = j.target, re = Ne(U);
        return !j.button && (!o.value || !$u(q, `.${o.value}`, ve) && (!re || $u(q, re, ve)));
      }), B.call(x)), O(() => {
        B.on(".drag", null), x && (x.on("start", null), x.on("drag", null), x.on("end", null));
      });
    }
  }), k;
}
function Pb() {
  return {
    doubleClick: ue(),
    click: ue(),
    mouseEnter: ue(),
    mouseMove: ue(),
    mouseLeave: ue(),
    contextMenu: ue(),
    updateStart: ue(),
    update: ue(),
    updateEnd: ue()
  };
}
function Cb(e, t) {
  const n = Pb();
  return n.doubleClick.on((r) => {
    var o, i;
    t.edgeDoubleClick(r), (i = (o = e.events) == null ? void 0 : o.doubleClick) == null || i.call(o, r);
  }), n.click.on((r) => {
    var o, i;
    t.edgeClick(r), (i = (o = e.events) == null ? void 0 : o.click) == null || i.call(o, r);
  }), n.mouseEnter.on((r) => {
    var o, i;
    t.edgeMouseEnter(r), (i = (o = e.events) == null ? void 0 : o.mouseEnter) == null || i.call(o, r);
  }), n.mouseMove.on((r) => {
    var o, i;
    t.edgeMouseMove(r), (i = (o = e.events) == null ? void 0 : o.mouseMove) == null || i.call(o, r);
  }), n.mouseLeave.on((r) => {
    var o, i;
    t.edgeMouseLeave(r), (i = (o = e.events) == null ? void 0 : o.mouseLeave) == null || i.call(o, r);
  }), n.contextMenu.on((r) => {
    var o, i;
    t.edgeContextMenu(r), (i = (o = e.events) == null ? void 0 : o.contextMenu) == null || i.call(o, r);
  }), n.updateStart.on((r) => {
    var o, i;
    t.edgeUpdateStart(r), (i = (o = e.events) == null ? void 0 : o.updateStart) == null || i.call(o, r);
  }), n.update.on((r) => {
    var o, i;
    t.edgeUpdate(r), (i = (o = e.events) == null ? void 0 : o.update) == null || i.call(o, r);
  }), n.updateEnd.on((r) => {
    var o, i;
    t.edgeUpdateEnd(r), (i = (o = e.events) == null ? void 0 : o.updateEnd) == null || i.call(o, r);
  }), Object.entries(n).reduce(
    (r, [o, i]) => (r.emit[o] = i.trigger, r.on[o] = i.on, r),
    { emit: {}, on: {} }
  );
}
function Ab() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = Ve();
  return (o) => {
    var i;
    const a = ((i = r.value) == null ? void 0 : i.getBoundingClientRect()) ?? { left: 0, top: 0 }, s = mb(o) ? o.sourceEvent : o, { x: c, y: u } = jt(s, a), d = Gr({ x: c, y: u }, e.value), { x: f, y: v } = n.value ? Si(d, t.value) : d;
    return {
      xSnapped: f,
      ySnapped: v,
      ...d
    };
  };
}
function xo() {
  return !0;
}
function np({
  handleId: e,
  nodeId: t,
  type: n,
  isValidConnection: r,
  edgeUpdaterType: o,
  onEdgeUpdate: i,
  onEdgeUpdateEnd: a
}) {
  const {
    id: s,
    vueFlowRef: c,
    connectionMode: u,
    connectionRadius: d,
    connectOnClick: f,
    connectionClickStartHandle: v,
    nodesConnectable: y,
    autoPanOnConnect: p,
    autoPanSpeed: m,
    findNode: h,
    panBy: b,
    startConnection: E,
    updateConnection: g,
    endConnection: S,
    emits: A,
    viewport: $,
    edges: w,
    nodes: _,
    isValidConnection: L,
    nodeLookup: F
  } = Ve();
  let M = null, C = !1, U = null;
  function k(x) {
    var N;
    const D = Ne(n) === "target", Z = ul(x), Q = gu(x.target), ee = x.currentTarget;
    if (ee && (Z && x.button === 0 || !Z)) {
      let fe = function(pe) {
        R = jt(pe, we), ie = xb(
          Gr(R, $.value, !1, [1, 1]),
          d.value,
          F.value,
          j
        ), O || (B(), O = !0);
        const be = Cu(
          pe,
          {
            handle: ie,
            connectionMode: u.value,
            fromNodeId: Ne(t),
            fromHandleId: Ne(e),
            fromType: D ? "target" : "source",
            isValidConnection: ne,
            doc: Q,
            lib: "vue",
            flowId: s,
            nodeLookup: F.value
          },
          w.value,
          _.value,
          h,
          F.value
        );
        U = be.handleDomNode, M = be.connection, C = _b(!!ie, be.isValid);
        const Ee = {
          // from stays the same
          ...de,
          isValid: C,
          to: be.toHandle && C ? Hr({ x: be.toHandle.x, y: be.toHandle.y }, $.value) : R,
          toHandle: be.toHandle,
          toPosition: C && be.toHandle ? be.toHandle.position : As[j.position],
          toNode: be.toHandle ? F.value.get(be.toHandle.nodeId) : null
        };
        if (C && ie && de?.toHandle && Ee.toHandle && de.toHandle.type === Ee.toHandle.type && de.toHandle.nodeId === Ee.toHandle.nodeId && de.toHandle.id === Ee.toHandle.id && de.to.x === Ee.to.x && de.to.y === Ee.to.y)
          return;
        const Fe = ie ?? be.toHandle;
        if (g(
          Fe && C ? Hr(
            {
              x: Fe.x,
              y: Fe.y
            },
            $.value
          ) : R,
          Fe,
          wb(!!Fe, C)
        ), de = Ee, !ie && !C && !U)
          return ia(ve);
        M && M.source !== M.target && U && (ia(ve), ve = U, U.classList.add("connecting", "vue-flow__handle-connecting"), U.classList.toggle("valid", !!C), U.classList.toggle("vue-flow__handle-valid", !!C));
      }, ye = function(pe) {
        "touches" in pe && pe.touches.length > 0 || ((ie || U) && M && C && (i ? i(pe, M) : A.connect(M)), A.connectEnd(pe), o && a?.(pe), ia(ve), cancelAnimationFrame(me), S(pe), O = !1, C = !1, M = null, U = null, Q.removeEventListener("mousemove", fe), Q.removeEventListener("mouseup", ye), Q.removeEventListener("touchmove", fe), Q.removeEventListener("touchend", ye));
      };
      const _e = h(Ne(t));
      let ne = Ne(r) || L.value || xo;
      !ne && _e && (ne = (D ? _e.isValidSourcePos : _e.isValidTargetPos) || xo);
      let ie, me = 0;
      const { x: ze, y: ke } = jt(x), se = Kf(Ne(o), ee), we = (N = c.value) == null ? void 0 : N.getBoundingClientRect();
      if (!we || !se)
        return;
      const ae = Zf(Ne(t), se, Ne(e), F.value, u.value);
      if (!ae)
        return;
      let ve, R = jt(x, we), O = !1;
      const B = () => {
        if (!p.value)
          return;
        const [pe, be] = Xf(R, we, m.value);
        b({ x: pe, y: be }), me = requestAnimationFrame(B);
      }, j = {
        ...ae,
        nodeId: Ne(t),
        type: se,
        position: ae.position
      }, q = F.value.get(Ne(t)), oe = {
        inProgress: !0,
        isValid: null,
        from: lr(q, j, le.Left, !0),
        fromHandle: j,
        fromPosition: j.position,
        fromNode: q,
        to: R,
        toHandle: null,
        toPosition: As[j.position],
        toNode: null
      };
      E(
        {
          nodeId: Ne(t),
          id: Ne(e),
          type: se,
          position: ee?.getAttribute("data-handlepos") || le.Top,
          ...R
        },
        {
          x: ze - we.left,
          y: ke - we.top
        }
      ), A.connectStart({ event: x, nodeId: Ne(t), handleId: Ne(e), handleType: se });
      let de = oe;
      Q.addEventListener("mousemove", fe), Q.addEventListener("mouseup", ye), Q.addEventListener("touchmove", fe), Q.addEventListener("touchend", ye);
    }
  }
  function P(x) {
    var N, D;
    if (!f.value)
      return;
    const Z = Ne(n) === "target";
    if (!v.value) {
      A.clickConnectStart({ event: x, nodeId: Ne(t), handleId: Ne(e) }), E(
        {
          nodeId: Ne(t),
          type: Ne(n),
          id: Ne(e),
          position: le.Top,
          ...jt(x)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Ne(r) || L.value || xo;
    const ee = h(Ne(t));
    if (!Q && ee && (Q = (Z ? ee.isValidSourcePos : ee.isValidTargetPos) || xo), ee && (typeof ee.connectable > "u" ? y.value : ee.connectable) === !1)
      return;
    const fe = gu(x.target), ye = Cu(
      x,
      {
        handle: {
          nodeId: Ne(t),
          id: Ne(e),
          type: Ne(n),
          position: le.Top,
          ...jt(x)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: fe,
        lib: "vue",
        flowId: s,
        nodeLookup: F.value
      },
      w.value,
      _.value,
      h,
      F.value
    ), _e = ((N = ye.connection) == null ? void 0 : N.source) === ((D = ye.connection) == null ? void 0 : D.target);
    ye.isValid && ye.connection && !_e && A.connect(ye.connection), A.clickConnectEnd(x), S(x, !0);
  }
  return {
    handlePointerDown: k,
    handleClick: P
  };
}
function Tb() {
  return pr(Qf, "");
}
function rp(e) {
  const t = e ?? Tb() ?? "", n = pr(ep, X(null)), { findNode: r, edges: o, emits: i } = Ve(), a = r(t);
  return a || i.error(new rt(tt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: a,
    parentNode: J(() => r(a.parentNode)),
    connectedEdges: J(() => Gf([a], o.value))
  };
}
function Ob() {
  return {
    doubleClick: ue(),
    click: ue(),
    mouseEnter: ue(),
    mouseMove: ue(),
    mouseLeave: ue(),
    contextMenu: ue(),
    dragStart: ue(),
    drag: ue(),
    dragStop: ue()
  };
}
function Nb(e, t) {
  const n = Ob();
  return n.doubleClick.on((r) => {
    var o, i;
    t.nodeDoubleClick(r), (i = (o = e.events) == null ? void 0 : o.doubleClick) == null || i.call(o, r);
  }), n.click.on((r) => {
    var o, i;
    t.nodeClick(r), (i = (o = e.events) == null ? void 0 : o.click) == null || i.call(o, r);
  }), n.mouseEnter.on((r) => {
    var o, i;
    t.nodeMouseEnter(r), (i = (o = e.events) == null ? void 0 : o.mouseEnter) == null || i.call(o, r);
  }), n.mouseMove.on((r) => {
    var o, i;
    t.nodeMouseMove(r), (i = (o = e.events) == null ? void 0 : o.mouseMove) == null || i.call(o, r);
  }), n.mouseLeave.on((r) => {
    var o, i;
    t.nodeMouseLeave(r), (i = (o = e.events) == null ? void 0 : o.mouseLeave) == null || i.call(o, r);
  }), n.contextMenu.on((r) => {
    var o, i;
    t.nodeContextMenu(r), (i = (o = e.events) == null ? void 0 : o.contextMenu) == null || i.call(o, r);
  }), n.dragStart.on((r) => {
    var o, i;
    t.nodeDragStart(r), (i = (o = e.events) == null ? void 0 : o.dragStart) == null || i.call(o, r);
  }), n.drag.on((r) => {
    var o, i;
    t.nodeDrag(r), (i = (o = e.events) == null ? void 0 : o.drag) == null || i.call(o, r);
  }), n.dragStop.on((r) => {
    var o, i;
    t.nodeDragStop(r), (i = (o = e.events) == null ? void 0 : o.dragStop) == null || i.call(o, r);
  }), Object.entries(n).reduce(
    (r, [o, i]) => (r.emit[o] = i.trigger, r.on[o] = i.on, r),
    { emit: {}, on: {} }
  );
}
function op() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: i, nodesDraggable: a, emits: s } = Ve();
  return (c, u = !1) => {
    const d = i.value ? o.value[0] : 5, f = i.value ? o.value[1] : 5, v = u ? 4 : 1, y = c.x * d * v, p = c.y * f * v, m = [];
    for (const h of e.value)
      if (h.draggable || a && typeof h.draggable > "u") {
        const b = { x: h.computedPosition.x + y, y: h.computedPosition.y + p }, { position: E } = ll(
          h,
          b,
          s.error,
          t.value,
          h.parentNode ? r(h.parentNode) : void 0
        );
        m.push({
          id: h.id,
          position: E,
          from: h.position,
          distance: { x: c.x, y: c.y },
          dimensions: h.dimensions
        });
      }
    n(m, !0, !1);
  };
}
const wo = 0.1, Ib = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function hn() {
  return no("Viewport not initialized yet."), Promise.resolve(!1);
}
const Rb = {
  zoomIn: hn,
  zoomOut: hn,
  zoomTo: hn,
  fitView: hn,
  setCenter: hn,
  fitBounds: hn,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: hn,
  setTransform: hn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function Mb(e) {
  function t(r, o) {
    return new Promise((i) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Tr : Oo).scaleBy(
        la(e.d3Selection, o?.duration, o?.ease, () => {
          i(!0);
        }),
        r
      ) : i(!1);
    });
  }
  function n(r, o, i, a) {
    return new Promise((s) => {
      var c;
      const { x: u, y: d } = Bf({ x: -r, y: -o }, e.translateExtent), f = sr.translate(-u, -d).scale(i);
      e.d3Selection && e.d3Zoom ? (c = e.d3Zoom) == null || c.interpolate(a?.interpolate === "linear" ? Tr : Oo).transform(
        la(e.d3Selection, a?.duration, a?.ease, () => {
          s(!0);
        }),
        f
      ) : s(!1);
    });
  }
  return J(() => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
    viewportInitialized: !0,
    // todo: allow passing scale as option
    zoomIn: (o) => t(1.2, o),
    zoomOut: (o) => t(1 / 1.2, o),
    zoomTo: (o, i) => new Promise((a) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(i?.interpolate === "linear" ? Tr : Oo).scaleTo(
        la(e.d3Selection, i?.duration, i?.ease, () => {
          a(!0);
        }),
        o
      ) : a(!1);
    }),
    setViewport: (o, i) => n(o.x, o.y, o.zoom, i),
    setTransform: (o, i) => n(o.x, o.y, o.zoom, i),
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
      padding: wo,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var i, a;
      const s = [];
      for (const v of e.nodes)
        v.dimensions.width && v.dimensions.height && (o?.includeHiddenNodes || !v.hidden) && (!((i = o.nodes) != null && i.length) || (a = o.nodes) != null && a.length && o.nodes.includes(v.id)) && s.push(v);
      if (!s.length)
        return Promise.resolve(!1);
      const c = jf(s), { x: u, y: d, zoom: f } = yu(
        c,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? wo
      );
      return n(u, d, f, o);
    },
    setCenter: (o, i, a) => {
      const s = typeof a?.zoom < "u" ? a.zoom : e.maxZoom, c = e.dimensions.width / 2 - o * s, u = e.dimensions.height / 2 - i * s;
      return n(c, u, s, a);
    },
    fitBounds: (o, i = { padding: wo }) => {
      const { x: a, y: s, zoom: c } = yu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        i.padding ?? wo
      );
      return n(a, s, c, i);
    },
    project: (o) => Gr(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: i, y: a } = e.vueFlowRef.getBoundingClientRect(), s = {
          x: o.x - i,
          y: o.y - a
        };
        return Gr(s, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: i, y: a } = e.vueFlowRef.getBoundingClientRect(), s = {
          x: o.x + i,
          y: o.y + a
        };
        return Hr(s, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Rb);
}
function la(e, t = 0, n = Ib, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Db(e, t, n) {
  const r = Ud(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let m, h, b = !!(n.nodes.value.length || n.edges.value.length);
        m = Kn([e.modelValue, () => {
          var E, g;
          return (g = (E = e.modelValue) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (h?.pause(), n.setElements(E), !h && !b && E.length ? b = !0 : h?.resume());
        }), h = Kn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([E, g]) => {
            var S;
            (S = e.modelValue) != null && S.value && Array.isArray(e.modelValue.value) && (m?.pause(), e.modelValue.value = [...E, ...g], an(() => {
              m?.resume();
            }));
          },
          { immediate: b }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, i = () => {
      r.run(() => {
        let m, h, b = !!n.nodes.value.length;
        m = Kn([e.nodes, () => {
          var E, g;
          return (g = (E = e.nodes) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (h?.pause(), n.setNodes(E), !h && !b && E.length ? b = !0 : h?.resume());
        }), h = Kn(
          [n.nodes, () => n.nodes.value.length],
          ([E]) => {
            var g;
            (g = e.nodes) != null && g.value && Array.isArray(e.nodes.value) && (m?.pause(), e.nodes.value = [...E], an(() => {
              m?.resume();
            }));
          },
          { immediate: b }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let m, h, b = !!n.edges.value.length;
        m = Kn([e.edges, () => {
          var E, g;
          return (g = (E = e.edges) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (h?.pause(), n.setEdges(E), !h && !b && E.length ? b = !0 : h?.resume());
        }), h = Kn(
          [n.edges, () => n.edges.value.length],
          ([E]) => {
            var g;
            (g = e.edges) != null && g.value && Array.isArray(e.edges.value) && (m?.pause(), e.edges.value = [...E], an(() => {
              m?.resume();
            }));
          },
          { immediate: b }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        Oe(
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
        Oe(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      r.run(() => {
        Oe(
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
        Oe(
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
        Oe(
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
        const m = async (h) => {
          let b = h;
          typeof t.autoConnect == "function" && (b = await t.autoConnect(h)), b !== !1 && n.addEdges([b]);
        };
        Oe(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Oe(
          n.autoConnect,
          (h, b, E) => {
            h ? n.onConnect(m) : n.hooks.value.connect.off(m), E(() => {
              n.hooks.value.connect.off(m);
            });
          },
          { immediate: !0 }
        );
      });
    }, y = () => {
      const m = [
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
        if (!m.includes(b)) {
          const E = qe(() => t[b]), g = n[b];
          Js(g) && r.run(() => {
            Oe(
              E,
              (S) => {
                et(S) && (g.value = S);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), i(), a(), c(), s(), u(), d(), f(), v(), y();
  }), () => r.stop();
}
function Fb() {
  return {
    edgesChange: ue(),
    nodesChange: ue(),
    nodeDoubleClick: ue(),
    nodeClick: ue(),
    nodeMouseEnter: ue(),
    nodeMouseMove: ue(),
    nodeMouseLeave: ue(),
    nodeContextMenu: ue(),
    nodeDragStart: ue(),
    nodeDrag: ue(),
    nodeDragStop: ue(),
    nodesInitialized: ue(),
    miniMapNodeClick: ue(),
    miniMapNodeDoubleClick: ue(),
    miniMapNodeMouseEnter: ue(),
    miniMapNodeMouseMove: ue(),
    miniMapNodeMouseLeave: ue(),
    connect: ue(),
    connectStart: ue(),
    connectEnd: ue(),
    clickConnectStart: ue(),
    clickConnectEnd: ue(),
    paneReady: ue(),
    init: ue(),
    move: ue(),
    moveStart: ue(),
    moveEnd: ue(),
    selectionDragStart: ue(),
    selectionDrag: ue(),
    selectionDragStop: ue(),
    selectionContextMenu: ue(),
    selectionStart: ue(),
    selectionEnd: ue(),
    viewportChangeStart: ue(),
    viewportChange: ue(),
    viewportChangeEnd: ue(),
    paneScroll: ue(),
    paneClick: ue(),
    paneContextMenu: ue(),
    paneMouseEnter: ue(),
    paneMouseMove: ue(),
    paneMouseLeave: ue(),
    edgeContextMenu: ue(),
    edgeMouseEnter: ue(),
    edgeMouseMove: ue(),
    edgeMouseLeave: ue(),
    edgeDoubleClick: ue(),
    edgeClick: ue(),
    edgeUpdateStart: ue(),
    edgeUpdate: ue(),
    edgeUpdateEnd: ue(),
    updateNodeInternals: ue(),
    error: ue((e) => no(e.message))
  };
}
function Bb(e, t) {
  const n = hr();
  u0(() => {
    for (const [o, i] of Object.entries(t.value)) {
      const a = (s) => {
        e(o, s);
      };
      i.setEmitter(a), Lr(i.removeEmitter), i.setHasEmitListeners(() => r(o)), Lr(i.removeHasEmitListeners);
    }
  });
  function r(o) {
    var i;
    const a = Lb(o);
    return !!((i = n?.vnode.props) == null ? void 0 : i[a]);
  }
}
function Lb(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, i) => i.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function ip() {
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
    selectionMode: sl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Or.Free,
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
    connectionMode: wn.Loose,
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
    multiSelectionKeyCode: oi() ? "Meta" : "Control",
    zoomActivationKeyCode: oi() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: Fb(),
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
const Ub = [
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
function qb(e, t, n) {
  const r = Mb(e), o = (R) => {
    const O = R ?? [];
    e.hooks.updateNodeInternals.trigger(O);
  }, i = (R) => nb(R, e.nodes, e.edges), a = (R) => tb(R, e.nodes, e.edges), s = (R) => Gf(R, e.edges), c = ({ id: R, type: O, nodeId: B }) => {
    var j;
    const q = R ? `-${O}-${R}` : `-${O}`;
    return Array.from(((j = e.connectionLookup.get(`${B}${q}`)) == null ? void 0 : j.values()) ?? []);
  }, u = (R) => {
    if (R)
      return t.value.get(R);
  }, d = (R) => {
    if (R)
      return n.value.get(R);
  }, f = (R, O, B) => {
    var j, q;
    const re = [];
    for (const oe of R) {
      const de = {
        id: oe.id,
        type: "position",
        dragging: B,
        from: oe.from
      };
      if (O && (de.position = oe.position, oe.parentNode)) {
        const pe = u(oe.parentNode);
        de.position = {
          x: de.position.x - (((j = pe?.computedPosition) == null ? void 0 : j.x) ?? 0),
          y: de.position.y - (((q = pe?.computedPosition) == null ? void 0 : q.y) ?? 0)
        };
      }
      re.push(de);
    }
    re?.length && e.hooks.nodesChange.trigger(re);
  }, v = (R) => {
    if (!e.vueFlowRef)
      return;
    const O = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!O)
      return;
    const B = window.getComputedStyle(O), { m22: j } = new window.DOMMatrixReadOnly(B.transform), q = [];
    for (const re of R) {
      const oe = re, de = u(oe.id);
      if (de) {
        const pe = _i(oe.nodeElement);
        if (!!(pe.width && pe.height && (de.dimensions.width !== pe.width || de.dimensions.height !== pe.height || oe.forceUpdate))) {
          const Ee = oe.nodeElement.getBoundingClientRect();
          de.dimensions = pe, de.handleBounds.source = Au("source", oe.nodeElement, Ee, j, de.id), de.handleBounds.target = Au("target", oe.nodeElement, Ee, j, de.id), q.push({
            id: de.id,
            type: "dimensions",
            dimensions: pe
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), q.length && e.hooks.nodesChange.trigger(q);
  }, y = (R, O) => {
    const B = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
    for (const oe of R)
      Rn(oe) ? B.add(oe.id) : _n(oe) && j.add(oe.id);
    const q = gn(t.value, B, !0), re = gn(n.value, j);
    if (e.multiSelectionActive) {
      for (const oe of B)
        q.push(vn(oe, O));
      for (const oe of j)
        re.push(vn(oe, O));
    }
    q.length && e.hooks.nodesChange.trigger(q), re.length && e.hooks.edgesChange.trigger(re);
  }, p = (R) => {
    if (e.multiSelectionActive) {
      const O = R.map((B) => vn(B.id, !0));
      e.hooks.nodesChange.trigger(O);
      return;
    }
    e.hooks.nodesChange.trigger(gn(t.value, new Set(R.map((O) => O.id)), !0)), e.hooks.edgesChange.trigger(gn(n.value));
  }, m = (R) => {
    if (e.multiSelectionActive) {
      const O = R.map((B) => vn(B.id, !0));
      e.hooks.edgesChange.trigger(O);
      return;
    }
    e.hooks.edgesChange.trigger(gn(n.value, new Set(R.map((O) => O.id)))), e.hooks.nodesChange.trigger(gn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (R) => {
    y(R, !0);
  }, b = (R) => {
    const B = (R || e.nodes).map((j) => (j.selected = !1, vn(j.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, E = (R) => {
    const B = (R || e.edges).map((j) => (j.selected = !1, vn(j.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, g = (R) => {
    if (!R || !R.length)
      return y([], !1);
    const O = R.reduce(
      (B, j) => {
        const q = vn(j.id, !1);
        return Rn(j) ? B.nodes.push(q) : B.edges.push(q), B;
      },
      { nodes: [], edges: [] }
    );
    O.nodes.length && e.hooks.nodesChange.trigger(O.nodes), O.edges.length && e.hooks.edgesChange.trigger(O.edges);
  }, S = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([R, e.maxZoom]), e.minZoom = R;
  }, A = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([e.minZoom, R]), e.maxZoom = R;
  }, $ = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.translateExtent(R), e.translateExtent = R;
  }, w = (R) => {
    e.nodeExtent = R, o();
  }, _ = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.clickDistance(R);
  }, L = (R) => {
    e.nodesDraggable = R, e.nodesConnectable = R, e.elementsSelectable = R;
  }, F = (R) => {
    const O = R instanceof Function ? R(e.nodes) : R;
    !e.initialized && !O.length || (e.nodes = Tu(O, u, e.hooks.error.trigger));
  }, M = (R) => {
    const O = R instanceof Function ? R(e.edges) : R;
    if (!e.initialized && !O.length)
      return;
    const B = sa(
      O,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    aa(e.connectionLookup, n.value, B), e.edges = B;
  }, C = (R) => {
    const O = R instanceof Function ? R([...e.nodes, ...e.edges]) : R;
    !e.initialized && !O.length || (F(O.filter(Rn)), M(O.filter(_n)));
  }, U = (R) => {
    let O = R instanceof Function ? R(e.nodes) : R;
    O = Array.isArray(O) ? O : [O];
    const B = Tu(O, u, e.hooks.error.trigger), j = [];
    for (const q of B)
      j.push(_u(q));
    j.length && e.hooks.nodesChange.trigger(j);
  }, k = (R) => {
    let O = R instanceof Function ? R(e.edges) : R;
    O = Array.isArray(O) ? O : [O];
    const B = sa(
      O,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), j = [];
    for (const q of B)
      j.push(_u(q));
    j.length && e.hooks.edgesChange.trigger(j);
  }, P = (R, O = !0, B = !1) => {
    const j = R instanceof Function ? R(e.nodes) : R, q = Array.isArray(j) ? j : [j], re = [], oe = [];
    function de(be) {
      const Ee = s(be);
      for (const Fe of Ee)
        (!et(Fe.deletable) || Fe.deletable) && oe.push(ku(Fe.id, Fe.source, Fe.target, Fe.sourceHandle, Fe.targetHandle));
    }
    function pe(be) {
      const Ee = [];
      for (const Fe of e.nodes)
        Fe.parentNode === be && Ee.push(Fe);
      if (Ee.length) {
        for (const Fe of Ee)
          re.push(Su(Fe.id));
        O && de(Ee);
        for (const Fe of Ee)
          pe(Fe.id);
      }
    }
    for (const be of q) {
      const Ee = typeof be == "string" ? u(be) : be;
      Ee && (et(Ee.deletable) && !Ee.deletable || (re.push(Su(Ee.id)), O && de([Ee]), B && pe(Ee.id)));
    }
    oe.length && e.hooks.edgesChange.trigger(oe), re.length && e.hooks.nodesChange.trigger(re);
  }, x = (R) => {
    const O = R instanceof Function ? R(e.edges) : R, B = Array.isArray(O) ? O : [O], j = [];
    for (const q of B) {
      const re = typeof q == "string" ? d(q) : q;
      re && (et(re.deletable) && !re.deletable || j.push(
        ku(
          typeof q == "string" ? q : q.id,
          re.source,
          re.target,
          re.sourceHandle,
          re.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(j);
  }, N = (R, O, B = !0) => {
    const j = d(R.id);
    if (!j)
      return !1;
    const q = e.edges.indexOf(j), re = Eb(R, O, j, B, e.hooks.error.trigger);
    if (re) {
      const [oe] = sa(
        [re],
        e.isValidConnection,
        u,
        d,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((de, pe) => pe === q ? oe : de), aa(e.connectionLookup, n.value, [oe]), oe;
    }
    return !1;
  }, D = (R, O, B = { replace: !1 }) => {
    const j = d(R);
    if (!j)
      return;
    const q = typeof O == "function" ? O(j) : O;
    j.data = B.replace ? q : { ...j.data, ...q };
  }, Z = (R) => wu(R, e.nodes), Q = (R) => {
    const O = wu(R, e.edges);
    return aa(e.connectionLookup, n.value, O), O;
  }, ee = (R, O, B = { replace: !1 }) => {
    const j = u(R);
    if (!j)
      return;
    const q = typeof O == "function" ? O(j) : O;
    B.replace ? e.nodes.splice(e.nodes.indexOf(j), 1, q) : Object.assign(j, q);
  }, fe = (R, O, B = { replace: !1 }) => {
    const j = u(R);
    if (!j)
      return;
    const q = typeof O == "function" ? O(j) : O;
    j.data = B.replace ? q : { ...j.data, ...q };
  }, ye = (R, O, B = !1) => {
    B ? e.connectionClickStartHandle = R : e.connectionStartHandle = R, e.connectionEndHandle = null, e.connectionStatus = null, O && (e.connectionPosition = O);
  }, _e = (R, O = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = R, e.connectionEndHandle = O, e.connectionStatus = B);
  }, ne = (R, O) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, O ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, ie = (R) => {
    const O = Qy(R), B = O ? null : Cr(R) ? R : u(R.id);
    return !O && !B ? [null, null, O] : [O ? R : ni(B), B, O];
  }, me = (R, O = !0, B = e.nodes) => {
    const [j, q, re] = ie(R);
    if (!j)
      return [];
    const oe = [];
    for (const de of B || e.nodes) {
      if (!re && (de.id === q.id || !de.computedPosition))
        continue;
      const pe = ni(de), be = ri(pe, j);
      (O && be > 0 || be >= pe.width * pe.height || be >= Number(j.width) * Number(j.height)) && oe.push(de);
    }
    return oe;
  }, ze = (R, O, B = !0) => {
    const [j] = ie(R);
    if (!j)
      return !1;
    const q = ri(j, O);
    return B && q > 0 || q >= Number(j.width) * Number(j.height);
  }, ke = (R) => {
    const { viewport: O, dimensions: B, d3Zoom: j, d3Selection: q, translateExtent: re } = e;
    if (!j || !q || !R.x && !R.y)
      return !1;
    const oe = sr.translate(O.x + R.x, O.y + R.y).scale(O.zoom), de = [
      [0, 0],
      [B.width, B.height]
    ], pe = j.constrain()(oe, de, re), be = e.viewport.x !== pe.x || e.viewport.y !== pe.y || e.viewport.zoom !== pe.k;
    return j.transform(q, pe), be;
  }, se = (R) => {
    const O = R instanceof Function ? R(e) : R, B = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(O.defaultEdgeOptions) && (e.defaultEdgeOptions = O.defaultEdgeOptions);
    const j = O.modelValue || O.nodes || O.edges ? [] : void 0;
    j && (O.modelValue && j.push(...O.modelValue), O.nodes && j.push(...O.nodes), O.edges && j.push(...O.edges), C(j));
    const q = () => {
      et(O.maxZoom) && A(O.maxZoom), et(O.minZoom) && S(O.minZoom), et(O.translateExtent) && $(O.translateExtent);
    };
    for (const re of Object.keys(O)) {
      const oe = re, de = O[oe];
      ![...Ub, ...B].includes(oe) && et(de) && (e[oe] = de);
    }
    xs(() => e.d3Zoom).not.toBeNull().then(q), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: C,
    setNodes: F,
    setEdges: M,
    addNodes: U,
    addEdges: k,
    removeNodes: P,
    removeEdges: x,
    findNode: u,
    findEdge: d,
    updateEdge: N,
    updateEdgeData: D,
    updateNode: ee,
    updateNodeData: fe,
    applyEdgeChanges: Q,
    applyNodeChanges: Z,
    addSelectedElements: h,
    addSelectedNodes: p,
    addSelectedEdges: m,
    setMinZoom: S,
    setMaxZoom: A,
    setTranslateExtent: $,
    setNodeExtent: w,
    setPaneClickDistance: _,
    removeSelectedElements: g,
    removeSelectedNodes: b,
    removeSelectedEdges: E,
    startConnection: ye,
    updateConnection: _e,
    endConnection: ne,
    setInteractive: L,
    setState: se,
    getIntersectingNodes: me,
    getIncomers: i,
    getOutgoers: a,
    getConnectedEdges: s,
    getHandleConnections: c,
    isNodeIntersecting: ze,
    panBy: ke,
    fitView: (R) => r.value.fitView(R),
    zoomIn: (R) => r.value.zoomIn(R),
    zoomOut: (R) => r.value.zoomOut(R),
    zoomTo: (R, O) => r.value.zoomTo(R, O),
    setViewport: (R, O) => r.value.setViewport(R, O),
    setTransform: (R, O) => r.value.setTransform(R, O),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (R, O, B) => r.value.setCenter(R, O, B),
    fitBounds: (R, O) => r.value.fitBounds(R, O),
    project: (R) => r.value.project(R),
    screenToFlowCoordinate: (R) => r.value.screenToFlowCoordinate(R),
    flowToScreenCoordinate: (R) => r.value.flowToScreenCoordinate(R),
    toObject: () => {
      const R = [], O = [];
      for (const B of e.nodes) {
        const {
          computedPosition: j,
          handleBounds: q,
          selected: re,
          dimensions: oe,
          isParent: de,
          resizing: pe,
          dragging: be,
          events: Ee,
          ...Fe
        } = B;
        R.push(Fe);
      }
      for (const B of e.edges) {
        const { selected: j, sourceNode: q, targetNode: re, events: oe, ...de } = B;
        O.push(de);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: R,
          edges: O,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (R) => new Promise((O) => {
      const { nodes: B, edges: j, position: q, zoom: re, viewport: oe } = R;
      B && F(B), j && M(j);
      const [de, pe] = oe?.x && oe?.y ? [oe.x, oe.y] : q ?? [null, null];
      if (de && pe) {
        const be = oe?.zoom || re || e.viewport.zoom;
        return xs(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: de,
            y: pe,
            zoom: be
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
      const R = ip();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const O = sr.translate(R.defaultViewport.x ?? 0, R.defaultViewport.y ?? 0).scale(qn(R.defaultViewport.zoom ?? 1, R.minZoom, R.maxZoom)), B = e.viewportRef.getBoundingClientRect(), j = [
          [0, 0],
          [B.width, B.height]
        ], q = e.d3Zoom.constrain()(O, j, R.translateExtent);
        e.d3Zoom.transform(e.d3Selection, q);
      }
      se(R);
    },
    $destroy: () => {
    }
  };
}
const Vb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], jb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, lt = /* @__PURE__ */ De({
  ...jb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => le.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = l0(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = qe(() => n.type ?? "source"), o = qe(() => n.isValidConnection ?? null), {
      id: i,
      connectionStartHandle: a,
      connectionClickStartHandle: s,
      connectionEndHandle: c,
      vueFlowRef: u,
      nodesConnectable: d,
      noDragClassName: f,
      noPanClassName: v
    } = Ve(), { id: y, node: p, nodeEl: m, connectedEdges: h } = rp(), b = X(), E = qe(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), g = qe(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), S = qe(
      () => {
        var M, C, U, k, P, x;
        return ((M = a.value) == null ? void 0 : M.nodeId) === y && ((C = a.value) == null ? void 0 : C.id) === e.id && ((U = a.value) == null ? void 0 : U.type) === r.value || ((k = c.value) == null ? void 0 : k.nodeId) === y && ((P = c.value) == null ? void 0 : P.id) === e.id && ((x = c.value) == null ? void 0 : x.type) === r.value;
      }
    ), A = qe(
      () => {
        var M, C, U;
        return ((M = s.value) == null ? void 0 : M.nodeId) === y && ((C = s.value) == null ? void 0 : C.id) === e.id && ((U = s.value) == null ? void 0 : U.type) === r.value;
      }
    ), { handlePointerDown: $, handleClick: w } = np({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), _ = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((M) => {
      const C = M[`${r.value}Handle`];
      return M[r.value] !== y ? !1 : C ? C === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((M) => {
      const C = M[`${r.value}Handle`];
      return M[r.value] !== y ? !1 : C ? C === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(p, h.value) : et(e.connectable) ? e.connectable : d.value);
    Ze(() => {
      var M;
      if (!p.dimensions.width || !p.dimensions.height)
        return;
      const C = (M = p.handleBounds[r.value]) == null ? void 0 : M.find((Z) => Z.id === e.id);
      if (!u.value || C)
        return;
      const U = u.value.querySelector(".vue-flow__transformationpane");
      if (!m.value || !b.value || !U || !e.id)
        return;
      const k = m.value.getBoundingClientRect(), P = b.value.getBoundingClientRect(), x = window.getComputedStyle(U), { m22: N } = new window.DOMMatrixReadOnly(x.transform), D = {
        id: e.id,
        position: e.position,
        x: (P.left - k.left) / N,
        y: (P.top - k.top) / N,
        type: r.value,
        nodeId: y,
        ..._i(b.value)
      };
      p.handleBounds[r.value] = [...p.handleBounds[r.value] ?? [], D];
    });
    function L(M) {
      const C = ul(M);
      _.value && E.value && (C && M.button === 0 || !C) && $(M);
    }
    function F(M) {
      !y || !s.value && !E.value || _.value && w(M);
    }
    return t({
      handleClick: w,
      handlePointerDown: $,
      onClick: F,
      onPointerDown: L
    }), (M, C) => (z(), T("div", {
      ref_key: "handle",
      ref: b,
      "data-id": `${I(i)}-${I(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": I(y),
      "data-handlepos": M.position,
      class: Y(["vue-flow__handle", [
        `vue-flow__handle-${M.position}`,
        `vue-flow__handle-${e.id}`,
        I(f),
        I(v),
        r.value,
        {
          connectable: _.value,
          connecting: A.value,
          connectablestart: E.value,
          connectableend: g.value,
          connectionindicator: _.value && (E.value && !S.value || g.value && S.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: F
    }, [
      Xe(M.$slots, "default", { id: M.id })
    ], 42, Vb));
  }
}), Ei = function({
  sourcePosition: e = le.Bottom,
  targetPosition: t = le.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: i,
  data: a
}) {
  const s = a.label ?? n;
  return [
    $e(lt, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof s != "string" && s ? $e(s) : $e(ge, [s]),
    $e(lt, { type: "source", position: e, connectable: r, isValidConnection: i })
  ];
};
Ei.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ei.inheritAttrs = !1;
Ei.compatConfig = { MODE: 3 };
const Hb = Ei, $i = function({
  targetPosition: e = le.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    $e(lt, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof i != "string" && i ? $e(i) : $e(ge, [i])
  ];
};
$i.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
$i.inheritAttrs = !1;
$i.compatConfig = { MODE: 3 };
const Gb = $i, zi = function({
  sourcePosition: e = le.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    typeof i != "string" && i ? $e(i) : $e(ge, [i]),
    $e(lt, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
zi.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
zi.inheritAttrs = !1;
zi.compatConfig = { MODE: 3 };
const Wb = zi, Xb = ["transform"], Yb = ["width", "height", "x", "y", "rx", "ry"], Kb = ["y"], Zb = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, Jb = /* @__PURE__ */ De({
  ...Zb,
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
    const t = X({ x: 0, y: 0, width: 0, height: 0 }), n = X(null), r = J(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ze(o), Oe([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const i = n.value.getBBox();
      (i.width !== t.value.width || i.height !== t.value.height) && (t.value = i);
    }
    return (i, a) => (z(), T("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      i.labelShowBg ? (z(), T("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * i.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * i.labelBgPadding[1]}px`,
        x: -i.labelBgPadding[0],
        y: -i.labelBgPadding[1],
        style: vt(i.labelBgStyle),
        rx: i.labelBgBorderRadius,
        ry: i.labelBgBorderRadius
      }, null, 12, Yb)) : te("", !0),
      l("text", gi(i.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: i.labelStyle
      }), [
        Xe(i.$slots, "default", {}, () => [
          typeof i.label != "string" ? (z(), Ie(At(i.label), { key: 0 })) : (z(), T(ge, { key: 1 }, [
            Be(V(i.label), 1)
          ], 64))
        ])
      ], 16, Kb)
    ], 8, Xb));
  }
}), Qb = ["id", "d", "marker-end", "marker-start"], ex = ["d", "stroke-width"], tx = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, ro = /* @__PURE__ */ De({
  ...tx,
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
    const n = X(null), r = X(null), o = X(null), i = d0();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (a, s) => (z(), T(ge, null, [
      l("path", gi(I(i), {
        id: a.id,
        ref_key: "pathEl",
        ref: n,
        d: a.path,
        class: "vue-flow__edge-path",
        "marker-end": a.markerEnd,
        "marker-start": a.markerStart
      }), null, 16, Qb),
      a.interactionWidth ? (z(), T("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: a.path,
        "stroke-width": a.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, ex)) : te("", !0),
      a.label && a.labelX && a.labelY ? (z(), Ie(Jb, {
        key: 1,
        ref_key: "labelEl",
        ref: o,
        x: a.labelX,
        y: a.labelY,
        label: a.label,
        "label-show-bg": a.labelShowBg,
        "label-bg-style": a.labelBgStyle,
        "label-bg-padding": a.labelBgPadding,
        "label-bg-border-radius": a.labelBgBorderRadius,
        "label-style": a.labelStyle
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : te("", !0)
    ], 64));
  }
});
function ap({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function sp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: i,
  targetControlX: a,
  targetControlY: s
}) {
  const c = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, d = Math.abs(c - e), f = Math.abs(u - t);
  return [c, u, d, f];
}
function _o(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ru({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  let a, s;
  switch (e) {
    case le.Left:
      a = t - _o(t - r, i), s = n;
      break;
    case le.Right:
      a = t + _o(r - t, i), s = n;
      break;
    case le.Top:
      a = t, s = n - _o(n - o, i);
      break;
    case le.Bottom:
      a = t, s = n + _o(o - n, i);
      break;
  }
  return [a, s];
}
function cl(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = le.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = le.Top,
    curvature: s = 0.25
  } = e, [c, u] = Ru({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i,
    c: s
  }), [d, f] = Ru({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n,
    c: s
  }), [v, y, p, m] = sp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: i,
    sourceControlX: c,
    sourceControlY: u,
    targetControlX: d,
    targetControlY: f
  });
  return [
    `M${t},${n} C${c},${u} ${d},${f} ${o},${i}`,
    v,
    y,
    p,
    m
  ];
}
function Mu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let i, a;
  switch (e) {
    case le.Left:
    case le.Right:
      i = 0.5 * (t + r), a = n;
      break;
    case le.Top:
    case le.Bottom:
      i = t, a = 0.5 * (n + o);
      break;
  }
  return [i, a];
}
function lp(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = le.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = le.Top
  } = e, [s, c] = Mu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i
  }), [u, d] = Mu({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n
  }), [f, v, y, p] = sp({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: i,
    sourceControlX: s,
    sourceControlY: c,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${t},${n} C${s},${c} ${u},${d} ${o},${i}`,
    f,
    v,
    y,
    p
  ];
}
const Du = {
  [le.Left]: { x: -1, y: 0 },
  [le.Right]: { x: 1, y: 0 },
  [le.Top]: { x: 0, y: -1 },
  [le.Bottom]: { x: 0, y: 1 }
};
function nx({
  source: e,
  sourcePosition: t = le.Bottom,
  target: n
}) {
  return t === le.Left || t === le.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Fu(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function rx({
  source: e,
  sourcePosition: t = le.Bottom,
  target: n,
  targetPosition: r = le.Top,
  center: o,
  offset: i
}) {
  const a = Du[t], s = Du[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, d = nx({
    source: c,
    sourcePosition: t,
    target: u
  }), f = d.x !== 0 ? "x" : "y", v = d[f];
  let y, p, m;
  const h = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [E, g, S, A] = ap({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * s[f] === -1) {
    p = o.x ?? E, m = o.y ?? g;
    const w = [
      { x: p, y: c.y },
      { x: p, y: u.y }
    ], _ = [
      { x: c.x, y: m },
      { x: u.x, y: m }
    ];
    a[f] === v ? y = f === "x" ? w : _ : y = f === "x" ? _ : w;
  } else {
    const w = [{ x: c.x, y: u.y }], _ = [{ x: u.x, y: c.y }];
    if (f === "x" ? y = a.x === v ? _ : w : y = a.y === v ? w : _, t === r) {
      const U = Math.abs(e[f] - n[f]);
      if (U <= i) {
        const k = Math.min(i - 1, i - U);
        a[f] === v ? h[f] = (c[f] > e[f] ? -1 : 1) * k : b[f] = (u[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const U = f === "x" ? "y" : "x", k = a[f] === s[U], P = c[U] > u[U], x = c[U] < u[U];
      (a[f] === 1 && (!k && P || k && x) || a[f] !== 1 && (!k && x || k && P)) && (y = f === "x" ? w : _);
    }
    const L = { x: c.x + h.x, y: c.y + h.y }, F = { x: u.x + b.x, y: u.y + b.y }, M = Math.max(Math.abs(L.x - y[0].x), Math.abs(F.x - y[0].x)), C = Math.max(Math.abs(L.y - y[0].y), Math.abs(F.y - y[0].y));
    M >= C ? (p = (L.x + F.x) / 2, m = y[0].y) : (p = y[0].x, m = (L.y + F.y) / 2);
  }
  return [[
    e,
    { x: c.x + h.x, y: c.y + h.y },
    ...y,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], p, m, S, A];
}
function ox(e, t, n, r) {
  const o = Math.min(Fu(e, t) / 2, Fu(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * d}`;
  }
  const s = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * c}Q ${i},${a} ${i + o * s},${a}`;
}
function Os(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = le.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = le.Top,
    borderRadius: s = 5,
    centerX: c,
    centerY: u,
    offset: d = 20
  } = e, [f, v, y, p, m] = rx({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: c, y: u },
    offset: d
  });
  return [f.reduce((b, E, g) => {
    let S;
    return g > 0 && g < f.length - 1 ? S = ox(f[g - 1], E, f[g + 1], s) : S = `${g === 0 ? "M" : "L"}${E.x} ${E.y}`, b += S, b;
  }, ""), v, y, p, m];
}
function ix(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [i, a, s, c] = ap({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, i, a, s, c];
}
const ax = De({
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
      const [n, r, o] = ix(e);
      return $e(ro, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), sx = ax, lx = De({
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
      const [n, r, o] = Os({
        ...e,
        sourcePosition: e.sourcePosition ?? le.Bottom,
        targetPosition: e.targetPosition ?? le.Top
      });
      return $e(ro, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), up = lx, ux = De({
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
    return () => $e(up, { ...e, ...t, borderRadius: 0 });
  }
}), cx = ux, dx = De({
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
      const [n, r, o] = cl({
        ...e,
        sourcePosition: e.sourcePosition ?? le.Bottom,
        targetPosition: e.targetPosition ?? le.Top
      });
      return $e(ro, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), fx = dx, px = De({
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
      const [n, r, o] = lp({
        ...e,
        sourcePosition: e.sourcePosition ?? le.Bottom,
        targetPosition: e.targetPosition ?? le.Top
      });
      return $e(ro, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), hx = px, mx = {
  input: Wb,
  default: Hb,
  output: Gb
}, vx = {
  default: fx,
  straight: sx,
  step: cx,
  smoothstep: up,
  simplebezier: hx
};
function gx(e, t, n) {
  const r = J(() => (m) => t.value.get(m)), o = J(() => (m) => n.value.get(m)), i = J(() => {
    const m = {
      ...vx,
      ...e.edgeTypes
    }, h = Object.keys(m);
    for (const b of e.edges)
      b.type && !h.includes(b.type) && (m[b.type] = b.type);
    return m;
  }), a = J(() => {
    const m = {
      ...mx,
      ...e.nodeTypes
    }, h = Object.keys(m);
    for (const b of e.nodes)
      b.type && !h.includes(b.type) && (m[b.type] = b.type);
    return m;
  }), s = J(() => e.onlyRenderVisibleElements ? Hf(
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
      const m = [];
      for (const h of e.edges) {
        const b = t.value.get(h.source), E = t.value.get(h.target);
        pb({
          sourcePos: b.computedPosition || { x: 0, y: 0 },
          targetPos: E.computedPosition || { x: 0, y: 0 },
          sourceWidth: b.dimensions.width,
          sourceHeight: b.dimensions.height,
          targetWidth: E.dimensions.width,
          targetHeight: E.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && m.push(h);
      }
      return m;
    }
    return e.edges;
  }), u = J(() => [...s.value, ...c.value]), d = J(() => {
    const m = [];
    for (const h of e.nodes)
      h.selected && m.push(h);
    return m;
  }), f = J(() => {
    const m = [];
    for (const h of e.edges)
      h.selected && m.push(h);
    return m;
  }), v = J(() => [
    ...d.value,
    ...f.value
  ]), y = J(() => {
    const m = [];
    for (const h of e.nodes)
      h.dimensions.width && h.dimensions.height && h.handleBounds !== void 0 && m.push(h);
    return m;
  }), p = J(
    () => s.value.length > 0 && y.value.length === s.value.length
  );
  return {
    getNode: r,
    getEdge: o,
    getElements: u,
    getEdgeTypes: i,
    getNodeTypes: a,
    getEdges: c,
    getNodes: s,
    getSelectedElements: v,
    getSelectedNodes: d,
    getSelectedEdges: f,
    getNodesInitialized: y,
    areNodesInitialized: p
  };
}
class Tn {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = hr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? Tn.instance;
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
    const r = ip(), o = Qr(r), i = {};
    for (const [v, y] of Object.entries(o.hooks)) {
      const p = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      i[p] = y.on;
    }
    const a = {};
    for (const [v, y] of Object.entries(o.hooks))
      a[v] = y.trigger;
    const s = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.nodes)
        v.set(y.id, y);
      return v;
    }), c = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.edges)
        v.set(y.id, y);
      return v;
    }), u = gx(o, s, c), d = qb(o, s, c);
    d.setState({ ...o, ...n });
    const f = {
      ...i,
      ...u,
      ...d,
      ...lm(o),
      nodeLookup: s,
      edgeLookup: c,
      emits: a,
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
  const t = Tn.getInstance(), n = Ld(), r = typeof e == "object", o = r ? e : { id: e }, i = o.id, a = i ?? n?.vueFlowId;
  let s;
  if (n) {
    const c = pr(Iu, null);
    typeof c < "u" && c !== null && (!a || c.id === a) && (s = c);
  }
  if (s || a && (s = t.get(a)), !s || a && s.id !== a) {
    const c = i ?? t.getId(), u = t.create(c, o);
    s = u, (n ?? Ud(!0)).run(() => {
      Oe(
        u.applyDefault,
        (f, v, y) => {
          const p = (h) => {
            u.applyNodeChanges(h);
          }, m = (h) => {
            u.applyEdgeChanges(h);
          };
          f ? (u.onNodesChange(p), u.onEdgesChange(m)) : (u.hooks.value.nodesChange.off(p), u.hooks.value.edgesChange.off(m)), y(() => {
            u.hooks.value.nodesChange.off(p), u.hooks.value.edgesChange.off(m);
          });
        },
        { immediate: !0 }
      ), Lr(() => {
        if (s) {
          const f = t.get(s.id);
          f ? f.$destroy() : no(`No store instance found for id ${s.id} in storage.`);
        }
      });
    });
  } else
    r && s.setState(o);
  if (n && (Fn(Iu, s), n.vueFlowId = s.id), r) {
    const c = hr();
    c?.type.name !== "VueFlow" && s.emits.error(new rt(tt.USEVUEFLOW_OPTIONS));
  }
  return s;
}
function yx(e) {
  const { emits: t, dimensions: n } = Ve();
  let r;
  Ze(() => {
    const o = () => {
      var i, a;
      if (!e.value || !(((a = (i = e.value).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return;
      const s = _i(e.value);
      (s.width === 0 || s.height === 0) && t.error(new rt(tt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: s.width || 500, height: s.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), vi(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const bx = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, xx = /* @__PURE__ */ De({
  ...bx,
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
}), wx = ["tabIndex"], _x = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Sx = /* @__PURE__ */ De({
  ..._x,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: i, userSelectionActive: a } = Ve(), s = op(), c = X(null), u = tp({
      el: c,
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
    Ze(() => {
      var p;
      i.value || (p = c.value) == null || p.focus({ preventScroll: !0 });
    });
    const d = J(() => jf(r.value)), f = J(() => ({
      width: `${d.value.width}px`,
      height: `${d.value.height}px`,
      top: `${d.value.y}px`,
      left: `${d.value.x}px`
    }));
    function v(p) {
      t.selectionContextMenu({ event: p, nodes: r.value });
    }
    function y(p) {
      i.value || or[p.key] && (p.preventDefault(), s(
        {
          x: or[p.key].x,
          y: or[p.key].y
        },
        p.shiftKey
      ));
    }
    return (p, m) => !I(a) && d.value.width && d.value.height ? (z(), T("div", {
      key: 0,
      class: Y(["vue-flow__nodesselection vue-flow__container", I(o)]),
      style: vt({ transform: `translate(${I(n).x}px,${I(n).y}px) scale(${I(n).zoom})` })
    }, [
      l("div", {
        ref_key: "el",
        ref: c,
        class: Y([{ dragging: I(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: I(i) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: y
      }, null, 46, wx)
    ], 6)) : te("", !0);
  }
});
function kx(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const Ex = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, $x = /* @__PURE__ */ De({
  ...Ex,
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
      userSelectionActive: i,
      removeSelectedElements: a,
      userSelectionRect: s,
      elementsSelectable: c,
      nodesSelectionActive: u,
      getSelectedEdges: d,
      getSelectedNodes: f,
      removeNodes: v,
      removeEdges: y,
      selectionMode: p,
      deleteKeyCode: m,
      multiSelectionKeyCode: h,
      multiSelectionActive: b,
      edgeLookup: E,
      nodeLookup: g,
      connectionLookup: S,
      defaultEdgeOptions: A,
      connectionStartHandle: $,
      panOnDrag: w
    } = Ve(), _ = nn(null), L = nn(/* @__PURE__ */ new Set()), F = nn(/* @__PURE__ */ new Set()), M = nn(null), C = qe(() => c.value && (e.isSelecting || i.value)), U = qe(() => $.value !== null);
    let k = !1, P = !1;
    const x = Nr(m, { actInsideInputWithModifier: !1 }), N = Nr(h);
    Oe(x, (ne) => {
      ne && (v(f.value), y(d.value), u.value = !1);
    }), Oe(N, (ne) => {
      b.value = ne;
    });
    function D(ne, ie) {
      return (me) => {
        me.target === ie && ne?.(me);
      };
    }
    function Z(ne) {
      if (k || U.value) {
        k = !1;
        return;
      }
      o.paneClick(ne), a(), u.value = !1;
    }
    function Q(ne) {
      var ie;
      if (Array.isArray(w.value) && ((ie = w.value) != null && ie.includes(2))) {
        ne.preventDefault();
        return;
      }
      o.paneContextMenu(ne);
    }
    function ee(ne) {
      o.paneScroll(ne);
    }
    function fe(ne) {
      var ie, me, ze;
      if (M.value = ((ie = t.value) == null ? void 0 : ie.getBoundingClientRect()) ?? null, !c.value || !e.isSelecting || ne.button !== 0 || ne.target !== _.value || !M.value)
        return;
      (ze = (me = ne.target) == null ? void 0 : me.setPointerCapture) == null || ze.call(me, ne.pointerId);
      const { x: ke, y: se } = kx(ne, M.value);
      P = !0, k = !1, a(), s.value = {
        width: 0,
        height: 0,
        startX: ke,
        startY: se,
        x: ke,
        y: se
      }, o.selectionStart(ne);
    }
    function ye(ne) {
      var ie;
      if (!M.value || !s.value)
        return;
      k = !0;
      const { x: me, y: ze } = jt(ne, M.value), { startX: ke = 0, startY: se = 0 } = s.value, we = {
        startX: ke,
        startY: se,
        x: me < ke ? me : ke,
        y: ze < se ? ze : se,
        width: Math.abs(me - ke),
        height: Math.abs(ze - se)
      }, ae = L.value, ve = F.value;
      L.value = new Set(
        Hf(n.value, we, r.value, p.value === sl.Partial, !0).map(
          (O) => O.id
        )
      ), F.value = /* @__PURE__ */ new Set();
      const R = ((ie = A.value) == null ? void 0 : ie.selectable) ?? !0;
      for (const O of L.value) {
        const B = S.value.get(O);
        if (B)
          for (const { edgeId: j } of B.values()) {
            const q = E.value.get(j);
            q && (q.selectable ?? R) && F.value.add(j);
          }
      }
      if (!Nu(ae, L.value)) {
        const O = gn(g.value, L.value, !0);
        o.nodesChange(O);
      }
      if (!Nu(ve, F.value)) {
        const O = gn(E.value, F.value);
        o.edgesChange(O);
      }
      s.value = we, i.value = !0, u.value = !1;
    }
    function _e(ne) {
      var ie;
      ne.button !== 0 || !P || ((ie = ne.target) == null || ie.releasePointerCapture(ne.pointerId), !i.value && s.value && ne.target === _.value && Z(ne), i.value = !1, s.value = null, u.value = L.value.size > 0, o.selectionEnd(ne), e.selectionKeyPressed && (k = !1), P = !1);
    }
    return (ne, ie) => (z(), T("div", {
      ref_key: "container",
      ref: _,
      class: Y(["vue-flow__pane vue-flow__container", { selection: ne.isSelecting }]),
      onClick: ie[0] || (ie[0] = (me) => C.value ? void 0 : D(Z, _.value)(me)),
      onContextmenu: ie[1] || (ie[1] = (me) => D(Q, _.value)(me)),
      onWheelPassive: ie[2] || (ie[2] = (me) => D(ee, _.value)(me)),
      onPointerenter: ie[3] || (ie[3] = (me) => C.value ? void 0 : I(o).paneMouseEnter(me)),
      onPointerdown: ie[4] || (ie[4] = (me) => C.value ? fe(me) : I(o).paneMouseMove(me)),
      onPointermove: ie[5] || (ie[5] = (me) => C.value ? ye(me) : I(o).paneMouseMove(me)),
      onPointerup: ie[6] || (ie[6] = (me) => C.value ? _e(me) : void 0),
      onPointerleave: ie[7] || (ie[7] = (me) => I(o).paneMouseLeave(me))
    }, [
      Xe(ne.$slots, "default"),
      I(i) && I(s) ? (z(), Ie(xx, {
        key: 0,
        "user-selection-rect": I(s)
      }, null, 8, ["user-selection-rect"])) : te("", !0),
      I(u) && I(f).length ? (z(), Ie(Sx, { key: 1 })) : te("", !0)
    ], 34));
  }
}), zx = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Px = /* @__PURE__ */ De({
  ...zx,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = Ve(), o = J(() => n.value ? !r.value : !1), i = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (a, s) => (z(), T("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: vt({ transform: i.value, opacity: o.value ? 0 : void 0 })
    }, [
      Xe(a.$slots, "default")
    ], 4));
  }
}), Cx = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Ax = /* @__PURE__ */ De({
  ...Cx,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: r,
      translateExtent: o,
      zoomActivationKeyCode: i,
      selectionKeyCode: a,
      panActivationKeyCode: s,
      panOnScroll: c,
      panOnScrollMode: u,
      panOnScrollSpeed: d,
      panOnDrag: f,
      zoomOnDoubleClick: v,
      zoomOnPinch: y,
      zoomOnScroll: p,
      preventScrolling: m,
      noWheelClassName: h,
      noPanClassName: b,
      emits: E,
      connectionStartHandle: g,
      userSelectionActive: S,
      paneDragging: A,
      d3Zoom: $,
      d3Selection: w,
      d3ZoomHandler: _,
      viewport: L,
      viewportRef: F,
      paneClickDistance: M
    } = Ve();
    yx(F);
    const C = nn(!1), U = nn(!1);
    let k = null, P = !1, x = 0, N = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const D = Nr(s), Z = Nr(a), Q = Nr(i), ee = qe(
      () => (!Z.value || Z.value && a.value === !0) && (D.value || f.value)
    ), fe = qe(() => D.value || c.value), ye = qe(() => a.value === !0 && ee.value !== !0), _e = qe(
      () => Z.value && a.value !== !0 || S.value || ye.value
    ), ne = qe(() => g.value !== null);
    Ze(() => {
      if (!F.value) {
        no("Viewport element is missing");
        return;
      }
      const se = F.value, we = se.getBoundingClientRect(), ae = Gy().clickDistance(M.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ve = Tt(se).call(ae), R = ve.on("wheel.zoom"), O = sr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(qn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [we.width, we.height]
      ], j = ae.constrain()(O, B, o.value);
      ae.transform(ve, j), ae.wheelDelta(bu), $.value = ae, w.value = ve, _.value = R, L.value = { x: j.x, y: j.y, zoom: j.k }, ae.on("start", (q) => {
        var re;
        if (!q.sourceEvent)
          return null;
        x = q.sourceEvent.button, C.value = !0;
        const oe = ze(q.transform);
        ((re = q.sourceEvent) == null ? void 0 : re.type) === "mousedown" && (A.value = !0), N = oe, E.viewportChangeStart(oe), E.moveStart({ event: q, flowTransform: oe });
      }), ae.on("end", (q) => {
        if (!q.sourceEvent)
          return null;
        if (C.value = !1, A.value = !1, ie(ee.value, x ?? 0) && !P && E.paneContextMenu(q.sourceEvent), P = !1, me(N, q.transform)) {
          const re = ze(q.transform);
          N = re, E.viewportChangeEnd(re), E.moveEnd({ event: q, flowTransform: re });
        }
      }), ae.filter((q) => {
        var re;
        const oe = Q.value || p.value, de = y.value && q.ctrlKey, pe = q.button, be = q.type === "wheel";
        if (pe === 1 && q.type === "mousedown" && (ke(q, "vue-flow__node") || ke(q, "vue-flow__edge")))
          return !0;
        if (!ee.value && !oe && !fe.value && !v.value && !y.value || S.value || ne.value && !be || !v.value && q.type === "dblclick" || ke(q, h.value) && be || ke(q, b.value) && (!be || fe.value && be && !Q.value) || !y.value && q.ctrlKey && be || !oe && !fe.value && !de && be)
          return !1;
        if (!y && q.type === "touchstart" && ((re = q.touches) == null ? void 0 : re.length) > 1)
          return q.preventDefault(), !1;
        if (!ee.value && (q.type === "mousedown" || q.type === "touchstart") || ye.value && Array.isArray(f.value) && f.value.includes(0) && pe === 0 || Array.isArray(f.value) && !f.value.includes(pe) && (q.type === "mousedown" || q.type === "touchstart"))
          return !1;
        const Ee = Array.isArray(f.value) && f.value.includes(pe) || a.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !pe || pe <= 1;
        return (!q.ctrlKey || D.value || be) && Ee;
      }), Oe(
        [S, ee],
        () => {
          S.value && !C.value ? ae.on("zoom", null) : S.value || ae.on("zoom", (q) => {
            L.value = { x: q.transform.x, y: q.transform.y, zoom: q.transform.k };
            const re = ze(q.transform);
            P = ie(ee.value, x ?? 0), E.viewportChange(re), E.move({ event: q, flowTransform: re });
          });
        },
        { immediate: !0 }
      ), Oe(
        [S, fe, u, Q, y, m, h],
        () => {
          fe.value && !Q.value && !S.value ? ve.on(
            "wheel.zoom",
            (q) => {
              if (ke(q, h.value))
                return !1;
              const re = Q.value || p.value, oe = y.value && q.ctrlKey;
              if (!(!m.value || fe.value || re || oe))
                return !1;
              q.preventDefault(), q.stopImmediatePropagation();
              const pe = ve.property("__zoom").k || 1, be = oi();
              if (!D.value && q.ctrlKey && y.value && be) {
                const qi = Ut(q), $n = bu(q), gr = pe * 2 ** $n;
                ae.scaleTo(ve, gr, qi, q);
                return;
              }
              const Ee = q.deltaMode === 1 ? 20 : 1;
              let Fe = u.value === Or.Vertical ? 0 : q.deltaX * Ee, Dt = u.value === Or.Horizontal ? 0 : q.deltaY * Ee;
              !be && q.shiftKey && u.value !== Or.Vertical && !Fe && Dt && (Fe = Dt, Dt = 0), ae.translateBy(
                ve,
                -(Fe / pe) * d.value,
                -(Dt / pe) * d.value
              );
              const gt = ze(ve.property("__zoom"));
              k && clearTimeout(k), U.value ? (E.move({ event: q, flowTransform: gt }), E.viewportChange(gt), k = setTimeout(() => {
                E.moveEnd({ event: q, flowTransform: gt }), E.viewportChangeEnd(gt), U.value = !1;
              }, 150)) : (U.value = !0, E.moveStart({ event: q, flowTransform: gt }), E.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof R < "u" && ve.on(
            "wheel.zoom",
            function(q, re) {
              const oe = !m.value && q.type === "wheel" && !q.ctrlKey, de = Q.value || p.value, pe = y.value && q.ctrlKey;
              if (!de && !c.value && !pe && q.type === "wheel" || oe || ke(q, h.value))
                return null;
              q.preventDefault(), R.call(this, q, re);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function ie(se, we) {
      return we === 2 && Array.isArray(se) && se.includes(2);
    }
    function me(se, we) {
      return se.x !== we.x && !Number.isNaN(we.x) || se.y !== we.y && !Number.isNaN(we.y) || se.zoom !== we.k && !Number.isNaN(we.k);
    }
    function ze(se) {
      return {
        x: se.x,
        y: se.y,
        zoom: se.k
      };
    }
    function ke(se, we) {
      return se.target.closest(`.${we}`);
    }
    return (se, we) => (z(), T("div", {
      ref_key: "viewportRef",
      ref: F,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      K($x, {
        "is-selecting": _e.value,
        "selection-key-pressed": I(Z),
        class: Y({
          connecting: ne.value,
          dragging: I(A),
          draggable: I(f) === !0 || Array.isArray(I(f)) && I(f).includes(0)
        })
      }, {
        default: it(() => [
          K(Px, null, {
            default: it(() => [
              Xe(se.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Tx = ["id"], Ox = ["id"], Nx = ["id"], Ix = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Rx = /* @__PURE__ */ De({
  ...Ix,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = Ve();
    return (o, i) => (z(), T(ge, null, [
      l("div", {
        id: `${I(Mf)}-${I(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + V(I(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Tx),
      l("div", {
        id: `${I(Df)}-${I(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Ox),
      I(n) ? te("", !0) : (z(), T("div", {
        key: 0,
        id: `${I(Jy)}-${I(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, V(I(r)), 9, Nx))
    ], 64));
  }
});
function Mx() {
  const e = Ve();
  Oe(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function Dx(e, t, n) {
  return n === le.Left ? e - t : n === le.Right ? e + t : e;
}
function Fx(e, t, n) {
  return n === le.Top ? e - t : n === le.Bottom ? e + t : e;
}
const dl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = le.Top,
  type: o
}) {
  return $e("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Dx(t, e, r),
    cy: Fx(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
dl.props = ["radius", "centerX", "centerY", "position", "type"];
dl.compatConfig = { MODE: 3 };
const Bu = dl, Bx = De({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["id"],
  setup(e) {
    const {
      id: t,
      addSelectedEdges: n,
      connectionMode: r,
      edgeUpdaterRadius: o,
      emits: i,
      nodesSelectionActive: a,
      noPanClassName: s,
      getEdgeTypes: c,
      removeSelectedEdges: u,
      findEdge: d,
      findNode: f,
      isValidConnection: v,
      multiSelectionActive: y,
      disableKeyboardA11y: p,
      elementsSelectable: m,
      edgesUpdatable: h,
      edgesFocusable: b,
      hooks: E
    } = Ve(), g = J(() => d(e.id)), { emit: S, on: A } = Cb(g.value, i), $ = pr(ki), w = hr(), _ = X(!1), L = X(!1), F = X(""), M = X(null), C = X("source"), U = X(null), k = qe(
      () => typeof g.value.selectable > "u" ? m.value : g.value.selectable
    ), P = qe(() => typeof g.value.updatable > "u" ? h.value : g.value.updatable), x = qe(() => typeof g.value.focusable > "u" ? b.value : g.value.focusable);
    Fn($b, e.id), Fn(zb, U);
    const N = J(() => g.value.class instanceof Function ? g.value.class(g.value) : g.value.class), D = J(() => g.value.style instanceof Function ? g.value.style(g.value) : g.value.style), Z = J(() => {
      const O = g.value.type || "default", B = $?.[`edge-${O}`];
      if (B)
        return B;
      let j = g.value.template ?? c.value[O];
      if (typeof j == "string" && w) {
        const q = Object.keys(w.appContext.components);
        q && q.includes(O) && (j = Vd(O, !1));
      }
      return j && typeof j != "string" ? j : (i.error(new rt(tt.EDGE_TYPE_MISSING, j)), !1);
    }), { handlePointerDown: Q } = np({
      nodeId: F,
      handleId: M,
      type: C,
      isValidConnection: v,
      edgeUpdaterType: C,
      onEdgeUpdate: ye,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const O = f(g.value.source), B = f(g.value.target), j = "pathOptions" in g.value ? g.value.pathOptions : {};
      if (!O && !B)
        return i.error(new rt(tt.EDGE_SOURCE_TARGET_MISSING, g.value.id, g.value.source, g.value.target)), null;
      if (!O)
        return i.error(new rt(tt.EDGE_SOURCE_MISSING, g.value.id, g.value.source)), null;
      if (!B)
        return i.error(new rt(tt.EDGE_TARGET_MISSING, g.value.id, g.value.target)), null;
      if (!g.value || g.value.hidden || O.hidden || B.hidden)
        return null;
      let q;
      r.value === wn.Strict ? q = O.handleBounds.source : q = [...O.handleBounds.source || [], ...O.handleBounds.target || []];
      const re = zu(q, g.value.sourceHandle);
      let oe;
      r.value === wn.Strict ? oe = B.handleBounds.target : oe = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const de = zu(oe, g.value.targetHandle), pe = re?.position || le.Bottom, be = de?.position || le.Top, { x: Ee, y: Fe } = lr(O, re, pe), { x: Dt, y: gt } = lr(B, de, be);
      return g.value.sourceX = Ee, g.value.sourceY = Fe, g.value.targetX = Dt, g.value.targetY = gt, $e(
        "g",
        {
          ref: U,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${Z.value === !1 ? "default" : g.value.type || "default"}`,
            s.value,
            N.value,
            {
              updating: _.value,
              selected: g.value.selected,
              animated: g.value.animated,
              inactive: !k.value && !E.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: x.value ? 0 : void 0,
          "aria-label": g.value.ariaLabel === null ? void 0 : g.value.ariaLabel ?? `Edge from ${g.value.source} to ${g.value.target}`,
          "aria-describedby": x.value ? `${Df}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: x.value ? "group" : "img",
          ...g.value.domAttributes,
          onClick: ie,
          onContextmenu: me,
          onDblclick: ze,
          onMouseenter: ke,
          onMousemove: se,
          onMouseleave: we,
          onKeyDown: x.value ? R : void 0
        },
        [
          L.value ? null : $e(Z.value === !1 ? c.value.default : Z.value, {
            id: e.id,
            sourceNode: O,
            targetNode: B,
            source: g.value.source,
            target: g.value.target,
            type: g.value.type,
            updatable: P.value,
            selected: g.value.selected,
            animated: g.value.animated,
            label: g.value.label,
            labelStyle: g.value.labelStyle,
            labelShowBg: g.value.labelShowBg,
            labelBgStyle: g.value.labelBgStyle,
            labelBgPadding: g.value.labelBgPadding,
            labelBgBorderRadius: g.value.labelBgBorderRadius,
            data: g.value.data,
            events: { ...g.value.events, ...A },
            style: D.value,
            markerStart: `url('#${Wr(g.value.markerStart, t)}')`,
            markerEnd: `url('#${Wr(g.value.markerEnd, t)}')`,
            sourcePosition: pe,
            targetPosition: be,
            sourceX: Ee,
            sourceY: Fe,
            targetX: Dt,
            targetY: gt,
            sourceHandleId: g.value.sourceHandle,
            targetHandleId: g.value.targetHandle,
            interactionWidth: g.value.interactionWidth,
            ...j
          }),
          [
            P.value === "source" || P.value === !0 ? [
              $e(
                "g",
                {
                  onMousedown: ae,
                  onMouseenter: ee,
                  onMouseout: fe
                },
                $e(Bu, {
                  position: pe,
                  centerX: Ee,
                  centerY: Fe,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            P.value === "target" || P.value === !0 ? [
              $e(
                "g",
                {
                  onMousedown: ve,
                  onMouseenter: ee,
                  onMouseout: fe
                },
                $e(Bu, {
                  position: be,
                  centerX: Dt,
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
    function ee() {
      _.value = !0;
    }
    function fe() {
      _.value = !1;
    }
    function ye(O, B) {
      S.update({ event: O, edge: g.value, connection: B });
    }
    function _e(O) {
      S.updateEnd({ event: O, edge: g.value }), L.value = !1;
    }
    function ne(O, B) {
      O.button === 0 && (L.value = !0, F.value = B ? g.value.target : g.value.source, M.value = (B ? g.value.targetHandle : g.value.sourceHandle) ?? null, C.value = B ? "target" : "source", S.updateStart({ event: O, edge: g.value }), Q(O));
    }
    function ie(O) {
      var B;
      const j = { event: O, edge: g.value };
      k.value && (a.value = !1, g.value.selected && y.value ? (u([g.value]), (B = U.value) == null || B.blur()) : n([g.value])), S.click(j);
    }
    function me(O) {
      S.contextMenu({ event: O, edge: g.value });
    }
    function ze(O) {
      S.doubleClick({ event: O, edge: g.value });
    }
    function ke(O) {
      S.mouseEnter({ event: O, edge: g.value });
    }
    function se(O) {
      S.mouseMove({ event: O, edge: g.value });
    }
    function we(O) {
      S.mouseLeave({ event: O, edge: g.value });
    }
    function ae(O) {
      ne(O, !0);
    }
    function ve(O) {
      ne(O, !1);
    }
    function R(O) {
      var B;
      !p.value && Ff.includes(O.key) && k.value && (O.key === "Escape" ? ((B = U.value) == null || B.blur(), u([d(e.id)])) : n([d(e.id)]));
    }
  }
}), Lx = Bx, Ux = De({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var e;
    const {
      id: t,
      connectionMode: n,
      connectionStartHandle: r,
      connectionEndHandle: o,
      connectionPosition: i,
      connectionLineType: a,
      connectionLineStyle: s,
      connectionLineOptions: c,
      connectionStatus: u,
      viewport: d,
      findNode: f
    } = Ve(), v = (e = pr(ki)) == null ? void 0 : e["connection-line"], y = J(() => {
      var E;
      return f((E = r.value) == null ? void 0 : E.nodeId);
    }), p = J(() => {
      var E;
      return f((E = o.value) == null ? void 0 : E.nodeId) ?? null;
    }), m = J(() => ({
      x: (i.value.x - d.value.x) / d.value.zoom,
      y: (i.value.y - d.value.y) / d.value.zoom
    })), h = J(
      () => c.value.markerStart ? `url(#${Wr(c.value.markerStart, t)})` : ""
    ), b = J(
      () => c.value.markerEnd ? `url(#${Wr(c.value.markerEnd, t)})` : ""
    );
    return () => {
      var E, g, S;
      if (!y.value || !r.value)
        return null;
      const A = r.value.id, $ = r.value.type, w = y.value.handleBounds;
      let _ = w?.[$] ?? [];
      if (n.value === wn.Loose) {
        const D = w?.[$ === "source" ? "target" : "source"] ?? [];
        _ = [..._, ...D];
      }
      if (!_)
        return null;
      const L = (A ? _.find((D) => D.id === A) : _[0]) ?? null, F = L?.position ?? le.Top, { x: M, y: C } = lr(y.value, L, F);
      let U = null;
      p.value && (n.value === wn.Strict ? U = ((E = p.value.handleBounds[$ === "source" ? "target" : "source"]) == null ? void 0 : E.find(
        (D) => {
          var Z;
          return D.id === ((Z = o.value) == null ? void 0 : Z.id);
        }
      )) || null : U = ((g = [...p.value.handleBounds.source ?? [], ...p.value.handleBounds.target ?? []]) == null ? void 0 : g.find(
        (D) => {
          var Z;
          return D.id === ((Z = o.value) == null ? void 0 : Z.id);
        }
      )) || null);
      const k = ((S = o.value) == null ? void 0 : S.position) ?? (F ? As[F] : null);
      if (!F || !k)
        return null;
      const P = a.value ?? c.value.type ?? An.Bezier;
      let x = "";
      const N = {
        sourceX: M,
        sourceY: C,
        sourcePosition: F,
        targetX: m.value.x,
        targetY: m.value.y,
        targetPosition: k
      };
      return P === An.Bezier ? [x] = cl(N) : P === An.Step ? [x] = Os({
        ...N,
        borderRadius: 0
      }) : P === An.SmoothStep ? [x] = Os(N) : P === An.SimpleBezier ? [x] = lp(N) : x = `M${M},${C} ${m.value.x},${m.value.y}`, $e(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        $e(
          "g",
          { class: "vue-flow__connection" },
          v ? $e(v, {
            sourceX: M,
            sourceY: C,
            sourcePosition: F,
            targetX: m.value.x,
            targetY: m.value.y,
            targetPosition: k,
            sourceNode: y.value,
            sourceHandle: L,
            targetNode: p.value,
            targetHandle: U,
            markerEnd: b.value,
            markerStart: h.value,
            connectionStatus: u.value
          }) : $e("path", {
            d: x,
            class: [c.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...s.value,
              ...c.value.style
            },
            "marker-end": b.value,
            "marker-start": h.value
          })
        )
      );
    };
  }
}), qx = Ux, Vx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], jx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Hx = /* @__PURE__ */ De({
  ...jx,
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
      t.type === I(ti).ArrowClosed ? (z(), T("polyline", {
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
      t.type === I(ti).Arrow ? (z(), T("polyline", {
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
    ], 8, Vx));
  }
}), Gx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Wx = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, Xx = /* @__PURE__ */ De({
  ...Wx,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = Ve(), i = J(() => {
      const a = /* @__PURE__ */ new Set(), s = [], c = (u) => {
        if (u) {
          const d = Wr(u, t);
          a.has(d) || (typeof u == "object" ? s.push({ ...u, id: d, color: u.color || o.value }) : s.push({ id: d, color: o.value, type: u }), a.add(d));
        }
      };
      for (const u of [r.value.markerEnd, r.value.markerStart])
        c(u);
      for (const u of n.value)
        for (const d of [u.markerStart, u.markerEnd])
          c(d);
      return s.sort((u, d) => u.id.localeCompare(d.id));
    });
    return (a, s) => (z(), T("svg", Gx, [
      l("defs", null, [
        (z(!0), T(ge, null, Re(i.value, (c) => (z(), Ie(Hx, {
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
}), Yx = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, Kx = /* @__PURE__ */ De({
  ...Yx,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = Ve();
    return (o, i) => (z(), T(ge, null, [
      K(Xx),
      (z(!0), T(ge, null, Re(I(n), (a) => (z(), T("svg", {
        key: a.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: I(hb)(a, I(t), I(r)) })
      }, [
        K(I(Lx), {
          id: a.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      K(I(qx))
    ], 64));
  }
}), Zx = De({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["id", "resizeObserver"],
  setup(e) {
    const {
      id: t,
      noPanClassName: n,
      selectNodesOnDrag: r,
      nodesSelectionActive: o,
      multiSelectionActive: i,
      emits: a,
      removeSelectedNodes: s,
      addSelectedNodes: c,
      updateNodeDimensions: u,
      onUpdateNodeInternals: d,
      getNodeTypes: f,
      nodeExtent: v,
      elevateNodesOnSelect: y,
      disableKeyboardA11y: p,
      ariaLiveMessage: m,
      snapToGrid: h,
      snapGrid: b,
      nodeDragThreshold: E,
      nodesDraggable: g,
      elementsSelectable: S,
      nodesConnectable: A,
      nodesFocusable: $,
      hooks: w
    } = Ve(), _ = X(null);
    Fn(ep, _), Fn(Qf, e.id);
    const L = pr(ki), F = hr(), M = op(), { node: C, parentNode: U } = rp(e.id), { emit: k, on: P } = Nb(C, a), x = qe(() => typeof C.draggable > "u" ? g.value : C.draggable), N = qe(() => typeof C.selectable > "u" ? S.value : C.selectable), D = qe(() => typeof C.connectable > "u" ? A.value : C.connectable), Z = qe(() => typeof C.focusable > "u" ? $.value : C.focusable), Q = J(
      () => N.value || x.value || w.value.nodeClick.hasListeners() || w.value.nodeDoubleClick.hasListeners() || w.value.nodeMouseEnter.hasListeners() || w.value.nodeMouseMove.hasListeners() || w.value.nodeMouseLeave.hasListeners()
    ), ee = qe(() => !!C.dimensions.width && !!C.dimensions.height), fe = J(() => {
      const B = C.type || "default", j = L?.[`node-${B}`];
      if (j)
        return j;
      let q = C.template || f.value[B];
      if (typeof q == "string" && F) {
        const re = Object.keys(F.appContext.components);
        re && re.includes(B) && (q = Vd(B, !1));
      }
      return q && typeof q != "string" ? q : (a.error(new rt(tt.NODE_TYPE_MISSING, q)), !1);
    }), ye = tp({
      id: e.id,
      el: _,
      disabled: () => !x.value,
      selectable: N,
      dragHandle: () => C.dragHandle,
      onStart(B) {
        k.dragStart(B);
      },
      onDrag(B) {
        k.drag(B);
      },
      onStop(B) {
        k.dragStop(B);
      },
      onClick(B) {
        R(B);
      }
    }), _e = J(() => C.class instanceof Function ? C.class(C) : C.class), ne = J(() => {
      const B = (C.style instanceof Function ? C.style(C) : C.style) || {}, j = C.width instanceof Function ? C.width(C) : C.width, q = C.height instanceof Function ? C.height(C) : C.height;
      return !B.width && j && (B.width = typeof j == "string" ? j : `${j}px`), !B.height && q && (B.height = typeof q == "string" ? q : `${q}px`), B;
    }), ie = qe(() => Number(C.zIndex ?? ne.value.zIndex ?? 0));
    return d((B) => {
      (B.includes(e.id) || !B.length) && ze();
    }), Ze(() => {
      Oe(
        () => C.hidden,
        (B = !1, j, q) => {
          !B && _.value && (e.resizeObserver.observe(_.value), q(() => {
            _.value && e.resizeObserver.unobserve(_.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Oe([() => C.type, () => C.sourcePosition, () => C.targetPosition], () => {
      an(() => {
        u([{ id: e.id, nodeElement: _.value, forceUpdate: !0 }]);
      });
    }), Oe(
      [
        () => C.position.x,
        () => C.position.y,
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
        ie,
        () => C.selected,
        () => C.dimensions.height,
        () => C.dimensions.width,
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.dimensions.height;
        },
        () => {
          var B;
          return (B = U.value) == null ? void 0 : B.dimensions.width;
        }
      ],
      ([B, j, q, re, oe, de]) => {
        const pe = {
          x: B,
          y: j,
          z: de + (y.value && C.selected ? 1e3 : 0)
        };
        typeof q < "u" && typeof re < "u" ? C.computedPosition = lb({ x: q, y: re, z: oe }, pe) : C.computedPosition = pe;
      },
      { flush: "post", immediate: !0 }
    ), Oe([() => C.extent, v], ([B, j], [q, re]) => {
      (B !== q || j !== re) && me();
    }), C.extent === "parent" || typeof C.extent == "object" && "range" in C.extent && C.extent.range === "parent" ? xs(() => ee).toBe(!0).then(me) : me(), () => C.hidden ? null : $e(
      "div",
      {
        ref: _,
        "data-id": C.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${fe.value === !1 ? "default" : C.type || "default"}`,
          {
            [n.value]: x.value,
            dragging: ye?.value,
            draggable: x.value,
            selected: C.selected,
            selectable: N.value,
            parent: C.isParent
          },
          _e.value
        ],
        style: {
          visibility: ee.value ? "visible" : "hidden",
          zIndex: C.computedPosition.z ?? ie.value,
          transform: `translate(${C.computedPosition.x}px,${C.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...ne.value
        },
        tabIndex: Z.value ? 0 : void 0,
        role: Z.value ? "group" : void 0,
        "aria-describedby": p.value ? void 0 : `${Mf}-${t}`,
        "aria-label": C.ariaLabel,
        "aria-roledescription": "node",
        ...C.domAttributes,
        onMouseenter: ke,
        onMousemove: se,
        onMouseleave: we,
        onContextmenu: ae,
        onClick: R,
        onDblclick: ve,
        onKeydown: O
      },
      [
        $e(fe.value === !1 ? f.value.default : fe.value, {
          id: C.id,
          type: C.type,
          data: C.data,
          events: { ...C.events, ...P },
          selected: C.selected,
          resizing: C.resizing,
          dragging: ye.value,
          connectable: D.value,
          position: C.computedPosition,
          dimensions: C.dimensions,
          isValidTargetPos: C.isValidTargetPos,
          isValidSourcePos: C.isValidSourcePos,
          parent: C.parentNode,
          parentNodeId: C.parentNode,
          zIndex: C.computedPosition.z ?? ie.value,
          targetPosition: C.targetPosition,
          sourcePosition: C.sourcePosition,
          label: C.label,
          dragHandle: C.dragHandle,
          onUpdateNodeInternals: ze
        })
      ]
    );
    function me() {
      const B = C.computedPosition, { computedPosition: j, position: q } = ll(
        C,
        h.value ? Si(B, b.value) : B,
        a.error,
        v.value,
        U.value
      );
      (C.computedPosition.x !== j.x || C.computedPosition.y !== j.y) && (C.computedPosition = { ...C.computedPosition, ...j }), (C.position.x !== q.x || C.position.y !== q.y) && (C.position = q);
    }
    function ze() {
      _.value && u([{ id: e.id, nodeElement: _.value, forceUpdate: !0 }]);
    }
    function ke(B) {
      ye?.value || k.mouseEnter({ event: B, node: C });
    }
    function se(B) {
      ye?.value || k.mouseMove({ event: B, node: C });
    }
    function we(B) {
      ye?.value || k.mouseLeave({ event: B, node: C });
    }
    function ae(B) {
      return k.contextMenu({ event: B, node: C });
    }
    function ve(B) {
      return k.doubleClick({ event: B, node: C });
    }
    function R(B) {
      N.value && (!r.value || !x.value || E.value > 0) && Ts(
        C,
        i.value,
        c,
        s,
        o,
        !1,
        _.value
      ), k.click({ event: B, node: C });
    }
    function O(B) {
      if (!(Cs(B) || p.value))
        if (Ff.includes(B.key) && N.value) {
          const j = B.key === "Escape";
          Ts(
            C,
            i.value,
            c,
            s,
            o,
            j,
            _.value
          );
        } else x.value && C.selected && or[B.key] && (B.preventDefault(), m.value = `Moved selected node ${B.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~C.position.x}, y: ${~~C.position.y}`, M(
          {
            x: or[B.key].x,
            y: or[B.key].y
          },
          B.shiftKey
        ));
    }
  }
}), Jx = Zx, Qx = {
  height: "0",
  width: "0"
}, e1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, t1 = /* @__PURE__ */ De({
  ...e1,
  setup(e) {
    const { viewportRef: t } = Ve(), n = qe(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (z(), T("svg", null, [
      (z(), T("foreignObject", Qx, [
        (z(), Ie(qd, {
          to: n.value,
          disabled: !n.value
        }, [
          Xe(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function n1(e = { includeHiddenNodes: !1 }) {
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
const r1 = { class: "vue-flow__nodes vue-flow__container" }, o1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, i1 = /* @__PURE__ */ De({
  ...o1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = Ve(), o = n1(), i = X();
    return Oe(
      o,
      (a) => {
        a && an(() => {
          r.nodesInitialized(t.value);
        });
      },
      { immediate: !0 }
    ), Ze(() => {
      i.value = new ResizeObserver((a) => {
        const s = a.map((c) => ({
          id: c.target.getAttribute("data-id"),
          nodeElement: c.target,
          forceUpdate: !0
        }));
        an(() => n(s));
      });
    }), vi(() => {
      var a;
      return (a = i.value) == null ? void 0 : a.disconnect();
    }), (a, s) => (z(), T("div", r1, [
      i.value ? (z(!0), T(ge, { key: 0 }, Re(I(t), (c, u, d, f) => {
        const v = [c.id];
        if (f && f.key === c.id && c0(f, v))
          return f;
        const y = (z(), Ie(I(Jx), {
          id: c.id,
          key: c.id,
          "resize-observer": i.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = v, y;
      }, s, 0), 128)) : te("", !0)
    ]));
  }
});
function a1() {
  const { emits: e } = Ve();
  Ze(() => {
    if (Jf()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new rt(tt.MISSING_STYLES));
    }
  });
}
const s1 = /* @__PURE__ */ l("div", { class: "vue-flow__edge-labels" }, null, -1), l1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, u1 = /* @__PURE__ */ De({
  ...l1,
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
    const r = e, o = s0(), i = Ji(r, "modelValue", n), a = Ji(r, "nodes", n), s = Ji(r, "edges", n), c = Ve(r), u = Db({ modelValue: i, nodes: a, edges: s }, r, c);
    return Bb(n, c.hooks), Mx(), a1(), Fn(ki, o), Zs(u), t(c), (d, f) => (z(), T("div", {
      ref: I(c).vueFlowRef,
      class: "vue-flow"
    }, [
      K(Ax, null, {
        default: it(() => [
          K(Kx),
          s1,
          K(i1),
          Xe(d.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Xe(d.$slots, "default"),
      K(Rx)
    ], 512));
  }
}), c1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, d1 = /* @__PURE__ */ De({
  ...c1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = Ve(), r = J(() => `${t.position}`.split("-"));
    return (o, i) => (z(), T("div", {
      class: Y(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: I(n) ? "none" : "all" })
    }, [
      Xe(o.$slots, "default")
    ], 6));
  }
});
var on = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(on || {});
const cp = function({ dimensions: e, size: t, color: n }) {
  return $e("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, dp = function({ radius: e, color: t }) {
  return $e("circle", { cx: e, cy: e, r: e, fill: t });
};
on.Lines + "", on.Dots + "";
const f1 = {
  [on.Dots]: "#81818a",
  [on.Lines]: "#eee"
}, p1 = ["id", "x", "y", "width", "height", "patternTransform"], h1 = {
  key: 2,
  height: "100",
  width: "100"
}, m1 = ["fill"], v1 = ["x", "y", "fill"], g1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, y1 = /* @__PURE__ */ De({
  ...g1,
  props: {
    id: {},
    variant: { default: () => on.Dots },
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
      const a = n.value.zoom, [s, c] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [s * a || 1, c * a || 1], d = e.size * a, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], y = [f * a || 1 + u[0] / 2, v * a || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: y,
        size: d
      };
    }), o = qe(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), i = qe(() => e.color || e.patternColor || f1[e.variant || on.Dots]);
    return (a, s) => (z(), T("svg", {
      class: "vue-flow__background vue-flow__container",
      style: vt({
        height: `${a.height > 100 ? 100 : a.height}%`,
        width: `${a.width > 100 ? 100 : a.width}%`
      })
    }, [
      Xe(a.$slots, "pattern-container", { id: o.value }, () => [
        l("pattern", {
          id: o.value,
          x: I(n).x % r.value.scaledGap[0],
          y: I(n).y % r.value.scaledGap[1],
          width: r.value.scaledGap[0],
          height: r.value.scaledGap[1],
          patternTransform: `translate(-${r.value.offset[0]},-${r.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          Xe(a.$slots, "pattern", {}, () => [
            a.variant === I(on).Lines ? (z(), Ie(I(cp), {
              key: 0,
              size: a.lineWidth,
              color: i.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : a.variant === I(on).Dots ? (z(), Ie(I(dp), {
              key: 1,
              color: i.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : te("", !0),
            a.bgColor ? (z(), T("svg", h1, [
              l("rect", {
                width: "100%",
                height: "100%",
                fill: a.bgColor
              }, null, 8, m1)
            ])) : te("", !0)
          ])
        ], 8, p1)
      ]),
      l("rect", {
        x: a.x,
        y: a.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, v1),
      Xe(a.$slots, "default", { id: o.value })
    ], 4));
  }
}), b1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, x1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, w1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function _1(e, t, n, r, o, i) {
  return z(), T("button", w1, [
    Xe(e.$slots, "default")
  ]);
}
const So = /* @__PURE__ */ x1(b1, [["render", _1]]), S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, k1 = /* @__PURE__ */ l("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), E1 = [
  k1
];
function $1(e, t) {
  return z(), T("svg", S1, E1);
}
const z1 = { render: $1 }, P1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, C1 = /* @__PURE__ */ l("path", { d: "M0 0h32v4.2H0z" }, null, -1), A1 = [
  C1
];
function T1(e, t) {
  return z(), T("svg", P1, A1);
}
const O1 = { render: T1 }, N1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, I1 = /* @__PURE__ */ l("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), R1 = [
  I1
];
function M1(e, t) {
  return z(), T("svg", N1, R1);
}
const D1 = { render: M1 }, F1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, B1 = /* @__PURE__ */ l("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), L1 = [
  B1
];
function U1(e, t) {
  return z(), T("svg", F1, L1);
}
const q1 = { render: U1 }, V1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, j1 = /* @__PURE__ */ l("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), H1 = [
  j1
];
function G1(e, t) {
  return z(), T("svg", V1, H1);
}
const W1 = { render: G1 }, X1 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, Y1 = /* @__PURE__ */ De({
  ...X1,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Rf.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(e, { emit: t }) {
    const {
      nodesDraggable: n,
      nodesConnectable: r,
      elementsSelectable: o,
      setInteractive: i,
      zoomIn: a,
      zoomOut: s,
      fitView: c,
      viewport: u,
      minZoom: d,
      maxZoom: f
    } = Ve(), v = qe(() => n.value || r.value || o.value), y = qe(() => u.value.zoom <= d.value), p = qe(() => u.value.zoom >= f.value);
    function m() {
      a(), t("zoomIn");
    }
    function h() {
      s(), t("zoomOut");
    }
    function b() {
      c(e.fitViewParams), t("fitView");
    }
    function E() {
      i(!v.value), t("interactionChange", !v.value);
    }
    return (g, S) => (z(), Ie(I(d1), {
      class: "vue-flow__controls",
      position: g.position
    }, {
      default: it(() => [
        Xe(g.$slots, "top"),
        g.showZoom ? (z(), T(ge, { key: 0 }, [
          Xe(g.$slots, "control-zoom-in", {}, () => [
            K(So, {
              class: "vue-flow__controls-zoomin",
              disabled: p.value,
              onClick: m
            }, {
              default: it(() => [
                Xe(g.$slots, "icon-zoom-in", {}, () => [
                  (z(), Ie(At(I(z1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Xe(g.$slots, "control-zoom-out", {}, () => [
            K(So, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: h
            }, {
              default: it(() => [
                Xe(g.$slots, "icon-zoom-out", {}, () => [
                  (z(), Ie(At(I(O1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : te("", !0),
        g.showFitView ? Xe(g.$slots, "control-fit-view", { key: 1 }, () => [
          K(So, {
            class: "vue-flow__controls-fitview",
            onClick: b
          }, {
            default: it(() => [
              Xe(g.$slots, "icon-fit-view", {}, () => [
                (z(), Ie(At(I(D1))))
              ])
            ]),
            _: 3
          })
        ]) : te("", !0),
        g.showInteractive ? Xe(g.$slots, "control-interactive", { key: 2 }, () => [
          g.showInteractive ? (z(), Ie(So, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: E
          }, {
            default: it(() => [
              v.value ? Xe(g.$slots, "icon-unlock", { key: 0 }, () => [
                (z(), Ie(At(I(W1))))
              ]) : te("", !0),
              v.value ? te("", !0) : Xe(g.$slots, "icon-lock", { key: 1 }, () => [
                (z(), Ie(At(I(q1))))
              ])
            ]),
            _: 3
          })) : te("", !0)
        ]) : te("", !0),
        Xe(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), K1 = {
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
    const n = e, r = t, o = J(() => cl({
      sourceX: n.sourceX,
      sourceY: n.sourceY,
      targetX: n.targetX,
      targetY: n.targetY,
      sourcePosition: n.sourcePosition,
      targetPosition: n.targetPosition
    })), i = J(() => ({
      position: "absolute",
      transform: `translate(-50%, -50%) translate(${o.value[1]}px, ${o.value[2]}px)`
    })), a = J(() => {
      const u = n.sourceHandleId || n.sourceHandle || n.data?.sourceHandle;
      return u || (n.data?.condition === "true" ? "yes" : n.data?.condition === "false" ? "no" : "");
    }), s = J(() => {
      switch (a.value) {
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
      stroke: s.value.stroke,
      strokeWidth: n.selected ? 3 : 2,
      strokeDasharray: n.selected ? "6 4" : void 0,
      transition: "stroke 0.2s ease, stroke-width 0.2s ease"
    }));
    return (u, d) => (z(), T(ge, null, [
      K(I(ro), {
        id: e.id,
        path: o.value[0],
        style: vt(c.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      K(I(t1), null, {
        default: it(() => [
          l("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(i.value)
          }, [
            s.value.label ? (z(), T("span", {
              key: 0,
              class: Y(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", s.value.badgeClass])
            }, V(s.value.label), 3)) : te("", !0),
            l("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: d[0] || (d[0] = en((f) => r("remove", e.id), ["stop"]))
            }, [
              K(I(Vt), { class: "h-2.5 w-2.5" })
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
function Mo(e) {
  return Mn.find((t) => t.eventClass === e)?.label || e || "—";
}
const fp = [
  { token: "{{customer.name}}", label: "Nome do cliente" },
  { token: "{{customer.first_name}}", label: "Primeiro nome" },
  { token: "{{customer.email}}", label: "E-mail do cliente" },
  { token: "{{customer.phone}}", label: "Telefone do cliente" },
  { token: "{{order.id}}", label: "ID do pedido" },
  { token: "{{order.status}}", label: "Status do pedido" },
  { token: "{{order.amount_formatted}}", label: "Valor formatado" },
  { token: "{{order.product.name}}", label: "Nome do produto" },
  { token: "{{checkout_link}}", label: "Link do checkout" },
  { token: "{{pix.copy_paste}}", label: "PIX copia e cola" },
  { token: "{{pix.qrcode}}", label: "QR Code do PIX" },
  { token: "{{boleto.barcode}}", label: "Linha digitável do boleto" },
  { token: "{{boleto.pdf_url}}", label: "Link do PDF do boleto" },
  { token: "{{access.link}}", label: "Link de acesso" },
  { token: "{{access.email}}", label: "Login de acesso" },
  { token: "{{access.password}}", label: "Senha de acesso" },
  { token: "{{last_reply}}", label: "Última resposta do cliente" }
], Z1 = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], J1 = [
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
], Q1 = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], ew = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], pp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], hp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], mp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], tw = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Cn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function vp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Cn[t] || 1)));
}
function nw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Cn.days === 0 ? { value: t / Cn.days, unit: "days" } : t > 0 && t % Cn.hours === 0 ? { value: t / Cn.hours, unit: "hours" } : t > 0 && t % Cn.minutes === 0 ? { value: t / Cn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const rw = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function ii(e) {
  return rw[e] || "minutos";
}
function yn(e) {
  return Z1.find((t) => t.type === e)?.label || e;
}
function gp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "" } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400 } : {};
}
function yp(e) {
  return {
    buttons: { title: "", footer: "", buttons: [{ type: "reply", displayText: "" }] },
    list: { title: "", footer: "", button_text: "Ver opções", sections: [{ title: "", rows: [{ title: "", description: "" }] }] },
    location: { latitude: "", longitude: "", location_name: "", address: "" },
    contact: { contact_name: "", contact_phone: "", organization: "" },
    poll: { question: "", options: ["", ""], max_answers: 1 },
    link: { url: "", title: "", description: "", text: "", image_url: "" }
  }[e] || {};
}
function bp(e) {
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
const xp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, ow = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, iw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, aw = { class: "space-y-4" }, sw = ["value"], lw = ["value"], uw = { key: 0 }, cw = { key: 1 }, dw = ["value"], fw = { class: "mt-2 flex flex-wrap gap-1.5" }, pw = ["title", "onClick"], hw = { key: 0 }, mw = ["accept", "disabled"], vw = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, gw = { key: 2 }, yw = ["disabled"], bw = { class: "space-y-2" }, xw = ["onUpdate:modelValue"], ww = ["value"], _w = ["onUpdate:modelValue"], Sw = ["onUpdate:modelValue"], kw = ["value"], Ew = ["onUpdate:modelValue"], $w = ["onUpdate:modelValue"], zw = ["onUpdate:modelValue"], Pw = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], Aw = ["onClick"], Tw = { class: "grid grid-cols-2 gap-2" }, Ow = { class: "space-y-3" }, Nw = ["onUpdate:modelValue"], Iw = ["onUpdate:modelValue"], Rw = ["onUpdate:modelValue"], Mw = ["onClick"], Dw = ["onClick"], Fw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Bw = ["onClick"], Lw = { class: "grid grid-cols-2 gap-2" }, Uw = { class: "space-y-2" }, qw = ["onUpdate:modelValue", "placeholder"], Vw = ["onClick"], jw = ["max"], Hw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Pe = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", wp = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => fp }
  },
  setup(e) {
    const t = e, n = X(!1), r = X(""), o = X([]), i = X("list"), a = ($) => ["image", "video", "audio", "document"].includes($), s = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function c($, w) {
      t.data[$] = `${t.data[$] || ""}${w}`;
    }
    async function u($, w = "media_url", _ = "mime_type") {
      const L = $.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const F = await Te.uploadMedia(L);
          t.data[w] = F.url, _ && (t.data[_] = F.mime_type);
        } catch (F) {
          r.value = F.message;
        } finally {
          n.value = !1, $.target.value = "";
        }
      }
    }
    const d = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...d.value, { type: "reply", displayText: "" }];
    }, v = ($) => {
      t.data.buttons = d.value.filter((w, _) => _ !== $);
    }, y = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), p = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, m = ($) => {
      t.data.sections = y.value.filter((w, _) => _ !== $);
    }, h = ($) => {
      $.rows = [...$.rows || [], { title: "", description: "" }];
    }, b = ($, w) => {
      $.rows = ($.rows || []).filter((_, L) => L !== w);
    }, E = J(() => Array.isArray(t.data.options) ? t.data.options : []), g = () => {
      t.data.options = [...E.value, ""];
    }, S = ($) => {
      t.data.options = E.value.filter((w, _) => _ !== $);
    };
    async function A() {
      try {
        o.value = (await Te.groups()).groups || [], i.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], i.value = "manual";
      }
    }
    return Ze(() => {
      t.showRecipient && A();
    }), ($, w) => (z(), T("div", aw, [
      l("div", null, [
        l("label", {
          class: Y(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ce(l("select", {
          id: "zr-mode",
          "onUpdate:modelValue": w[0] || (w[0] = (_) => e.data.mode = _),
          class: Y(Pe)
        }, [
          (z(!0), T(ge, null, Re(I(J1), (_) => (z(), T("option", {
            key: _.value,
            value: _.value
          }, V(_.label), 9, sw))), 128))
        ], 512), [
          [ut, e.data.mode]
        ])
      ]),
      e.showRecipient ? (z(), T(ge, { key: 0 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          ce(l("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": w[1] || (w[1] = (_) => e.data.recipient_type = _),
            class: Y(Pe)
          }, [
            (z(!0), T(ge, null, Re(I(tw), (_) => (z(), T("option", {
              key: _.value,
              value: _.value
            }, V(_.label), 9, lw))), 128))
          ], 512), [
            [ut, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (z(), T("div", uw, [
          l("label", {
            class: Y(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          ce(l("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": w[2] || (w[2] = (_) => e.data.custom_phone = _),
            type: "text",
            placeholder: "5511999998888",
            class: Y(Pe)
          }, null, 512), [
            [
              xe,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (z(), T("div", cw, [
          l("label", {
            class: Y(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          i.value === "list" ? ce((z(), T("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": w[3] || (w[3] = (_) => e.data.group_id = _),
            class: Y(Pe)
          }, [
            w[30] || (w[30] = l("option", { value: "" }, "Selecione o grupo…", -1)),
            (z(!0), T(ge, null, Re(o.value, (_) => (z(), T("option", {
              key: _.id,
              value: _.id
            }, V(_.name), 9, dw))), 128))
          ], 512)), [
            [ut, e.data.group_id]
          ]) : ce((z(), T("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": w[4] || (w[4] = (_) => e.data.group_id = _),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: Y(Pe)
          }, null, 512)), [
            [
              xe,
              e.data.group_id,
              void 0,
              { trim: !0 }
            ]
          ]),
          l("button", {
            type: "button",
            class: "mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: w[5] || (w[5] = (_) => i.value = i.value === "list" ? "manual" : "list")
          }, V(i.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : te("", !0)
      ], 64)) : te("", !0),
      e.data.mode === "text" || a(e.data.mode) ? (z(), T(ge, { key: 1 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-text"
          }, V(a(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ce(l("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": w[6] || (w[6] = (_) => e.data.text = _),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: Y([Pe, "font-mono leading-relaxed"])
          }, null, 2), [
            [xe, e.data.text]
          ]),
          l("div", fw, [
            (z(!0), T(ge, null, Re(e.variables, (_) => (z(), T("button", {
              key: _.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: _.label,
              onClick: (L) => c("text", _.token)
            }, V(_.token), 9, pw))), 128))
          ])
        ]),
        a(e.data.mode) ? (z(), T("div", hw, [
          l("label", {
            class: Y(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          ce(l("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": w[7] || (w[7] = (_) => e.data.media_url = _),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: Y(Pe)
          }, null, 512), [
            [
              xe,
              e.data.media_url,
              void 0,
              { trim: !0 }
            ]
          ]),
          l("input", {
            type: "file",
            class: "mt-2 w-full text-xs",
            accept: s.value,
            disabled: n.value,
            onChange: u
          }, null, 40, mw),
          n.value ? (z(), T("p", vw, "Enviando arquivo…")) : te("", !0)
        ])) : te("", !0)
      ], 64)) : e.data.mode === "sticker" ? (z(), T("div", gw, [
        l("label", {
          class: Y(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ce(l("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": w[8] || (w[8] = (_) => e.data.media_url = _),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: Y(Pe)
        }, null, 512), [
          [
            xe,
            e.data.media_url,
            void 0,
            { trim: !0 }
          ]
        ]),
        l("input", {
          type: "file",
          class: "mt-2 w-full text-xs",
          accept: "image/*",
          disabled: n.value,
          onChange: u
        }, null, 40, yw)
      ])) : e.data.mode === "buttons" ? (z(), T(ge, { key: 3 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-title"
          }, "Título"),
          ce(l("input", {
            id: "zr-title",
            "onUpdate:modelValue": w[9] || (w[9] = (_) => e.data.title = _),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          ce(l("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": w[10] || (w[10] = (_) => e.data.text = _),
            rows: "3",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          ce(l("input", {
            id: "zr-footer",
            "onUpdate:modelValue": w[11] || (w[11] = (_) => e.data.footer = _),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.footer]
          ])
        ]),
        l("div", bw, [
          l("label", {
            class: Y(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (z(!0), T(ge, null, Re(d.value, (_, L) => (z(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ce(l("select", {
              "onUpdate:modelValue": (F) => _.type = F,
              class: Y(Pe)
            }, [
              (z(!0), T(ge, null, Re(I(Q1), (F) => (z(), T("option", {
                key: F.value,
                value: F.value
              }, V(F.label), 9, ww))), 128))
            ], 8, xw), [
              [ut, _.type]
            ]),
            _.type === "pix" ? (z(), T(ge, { key: 0 }, [
              ce(l("input", {
                "onUpdate:modelValue": (F) => _.name = F,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: Y(Pe)
              }, null, 8, _w), [
                [xe, _.name]
              ]),
              ce(l("select", {
                "onUpdate:modelValue": (F) => _.keyType = F,
                class: Y(Pe)
              }, [
                w[31] || (w[31] = l("option", { value: "" }, "Tipo de chave PIX", -1)),
                (z(!0), T(ge, null, Re(I(ew), (F) => (z(), T("option", {
                  key: F.value,
                  value: F.value
                }, V(F.label), 9, kw))), 128))
              ], 8, Sw), [
                [ut, _.keyType]
              ]),
              ce(l("input", {
                "onUpdate:modelValue": (F) => _.key = F,
                type: "text",
                placeholder: "Chave PIX",
                class: Y(Pe)
              }, null, 8, Ew), [
                [
                  xe,
                  _.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              w[32] || (w[32] = l("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (z(), T(ge, { key: 1 }, [
              ce(l("input", {
                "onUpdate:modelValue": (F) => _.displayText = F,
                type: "text",
                placeholder: "Texto do botão",
                class: Y(Pe)
              }, null, 8, $w), [
                [xe, _.displayText]
              ]),
              _.type === "url" ? ce((z(), T("input", {
                key: 0,
                "onUpdate:modelValue": (F) => _.url = F,
                type: "url",
                placeholder: "https://…",
                class: Y(Pe)
              }, null, 8, zw)), [
                [
                  xe,
                  _.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              _.type === "call" ? ce((z(), T("input", {
                key: 1,
                "onUpdate:modelValue": (F) => _.phoneNumber = F,
                type: "text",
                placeholder: "+5511999998888",
                class: Y(Pe)
              }, null, 8, Pw)), [
                [
                  xe,
                  _.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              _.type === "copy" ? ce((z(), T("input", {
                key: 2,
                "onUpdate:modelValue": (F) => _.copyCode = F,
                type: "text",
                placeholder: "Código a copiar",
                class: Y(Pe)
              }, null, 8, Cw)), [
                [
                  xe,
                  _.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0)
            ], 64)),
            l("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (F) => v(L)
            }, "Remover botão", 8, Aw)
          ]))), 128)),
          l("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (z(), T(ge, { key: 4 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-list-title"
          }, "Título"),
          ce(l("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": w[12] || (w[12] = (_) => e.data.title = _),
            type: "text",
            placeholder: "Nossos planos",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          ce(l("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": w[13] || (w[13] = (_) => e.data.text = _),
            rows: "3",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ]),
        l("div", Tw, [
          l("div", null, [
            l("label", {
              class: Y(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            ce(l("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": w[14] || (w[14] = (_) => e.data.footer = _),
              type: "text",
              class: Y(Pe)
            }, null, 512), [
              [xe, e.data.footer]
            ])
          ]),
          l("div", null, [
            l("label", {
              class: Y(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            ce(l("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": w[15] || (w[15] = (_) => e.data.button_text = _),
              type: "text",
              placeholder: "Ver Menu",
              class: Y(Pe)
            }, null, 512), [
              [xe, e.data.button_text]
            ])
          ])
        ]),
        l("div", Ow, [
          l("label", {
            class: Y(Ue)
          }, "Seções"),
          (z(!0), T(ge, null, Re(y.value, (_, L) => (z(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ce(l("input", {
              "onUpdate:modelValue": (F) => _.title = F,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: Y(Pe)
            }, null, 8, Nw), [
              [xe, _.title]
            ]),
            (z(!0), T(ge, null, Re(_.rows, (F, M) => (z(), T("div", {
              key: M,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ce(l("input", {
                "onUpdate:modelValue": (C) => F.title = C,
                type: "text",
                placeholder: "Título da opção",
                class: Y(Pe)
              }, null, 8, Iw), [
                [xe, F.title]
              ]),
              ce(l("input", {
                "onUpdate:modelValue": (C) => F.description = C,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: Y(Pe)
              }, null, 8, Rw), [
                [xe, F.description]
              ]),
              l("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (C) => b(_, M)
              }, "Remover opção", 8, Mw)
            ]))), 128)),
            l("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (F) => h(_)
            }, "+ Adicionar opção", 8, Dw),
            l("div", Fw, [
              l("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (F) => m(L)
              }, "Remover seção", 8, Bw)
            ])
          ]))), 128)),
          l("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: p
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (z(), T(ge, { key: 5 }, [
        l("div", Lw, [
          l("div", null, [
            l("label", {
              class: Y(Ue),
              for: "zr-lat"
            }, "Latitude"),
            ce(l("input", {
              id: "zr-lat",
              "onUpdate:modelValue": w[16] || (w[16] = (_) => e.data.latitude = _),
              type: "text",
              placeholder: "-23.5505",
              class: Y(Pe)
            }, null, 512), [
              [xe, e.data.latitude]
            ])
          ]),
          l("div", null, [
            l("label", {
              class: Y(Ue),
              for: "zr-lng"
            }, "Longitude"),
            ce(l("input", {
              id: "zr-lng",
              "onUpdate:modelValue": w[17] || (w[17] = (_) => e.data.longitude = _),
              type: "text",
              placeholder: "-46.6333",
              class: Y(Pe)
            }, null, 512), [
              [xe, e.data.longitude]
            ])
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          ce(l("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": w[18] || (w[18] = (_) => e.data.location_name = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.location_name]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          ce(l("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": w[19] || (w[19] = (_) => e.data.address = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (z(), T(ge, { key: 6 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          ce(l("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": w[20] || (w[20] = (_) => e.data.contact_name = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.contact_name]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          ce(l("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": w[21] || (w[21] = (_) => e.data.contact_phone = _),
            type: "text",
            placeholder: "5511999998888",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.contact_phone]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ce(l("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": w[22] || (w[22] = (_) => e.data.organization = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (z(), T(ge, { key: 7 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          ce(l("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": w[23] || (w[23] = (_) => e.data.question = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.question]
          ])
        ]),
        l("div", Uw, [
          l("label", {
            class: Y(Ue)
          }, "Opções (mínimo 2)"),
          (z(!0), T(ge, null, Re(E.value, (_, L) => (z(), T("div", {
            key: L,
            class: "flex gap-2"
          }, [
            ce(l("input", {
              "onUpdate:modelValue": (F) => E.value[L] = F,
              type: "text",
              class: Y(Pe),
              placeholder: `Opção ${L + 1}`
            }, null, 8, qw), [
              [xe, E.value[L]]
            ]),
            E.value.length > 2 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (F) => S(L)
            }, "✕", 8, Vw)) : te("", !0)
          ]))), 128)),
          l("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: g
          }, "+ Adicionar opção")
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ce(l("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": w[24] || (w[24] = (_) => e.data.max_answers = _),
            type: "number",
            min: "1",
            max: E.value.length,
            class: Y(Pe)
          }, null, 8, jw), [
            [
              xe,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (z(), T(ge, { key: 8 }, [
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-link-url"
          }, "URL"),
          ce(l("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": w[25] || (w[25] = (_) => e.data.url = _),
            type: "url",
            placeholder: "https://…",
            class: Y(Pe)
          }, null, 512), [
            [
              xe,
              e.data.url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          ce(l("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": w[26] || (w[26] = (_) => e.data.title = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ce(l("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": w[27] || (w[27] = (_) => e.data.description = _),
            type: "text",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.description]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ce(l("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": w[28] || (w[28] = (_) => e.data.image_url = _),
            type: "url",
            class: Y(Pe)
          }, null, 512), [
            [
              xe,
              e.data.image_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: Y(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ce(l("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": w[29] || (w[29] = (_) => e.data.text = _),
            rows: "3",
            class: Y(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ])
      ], 64)) : te("", !0),
      r.value ? (z(), T("p", Hw, V(r.value), 1)) : te("", !0)
    ]));
  }
}, _p = {
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
}, Gw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Ww(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Ns(e, t = _p) {
  return e ? e.replace(Gw, (n, r) => {
    const o = Ww(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const Xw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, Yw = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, Kw = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, Zw = { class: "text-xs" }, Jw = { class: "font-bold text-white" }, Qw = { class: "my-4 flex justify-end" }, e_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, t_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, n_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, fl = {
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
      const i = t.mode && t.mode !== "text" && t.caption || t.text;
      return i?.trim() ? Ns(i) : "Sua mensagem aparece aqui…";
    }), o = J(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (i, a) => (z(), T("div", Xw, [
      l("div", Yw, [
        l("div", Kw, V(n.value), 1),
        l("div", Zw, [
          l("div", Jw, V(e.recipientName || "Cliente"), 1),
          a[0] || (a[0] = l("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      l("div", Qw, [
        l("div", e_, [
          o.value ? (z(), T("span", t_, V(o.value), 1)) : te("", !0),
          Be(" " + V(r.value) + " ", 1),
          l("div", n_, [
            a[1] || (a[1] = l("span", null, "12:00", -1)),
            K(I(gs), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      a[2] || (a[2] = l("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, r_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, o_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, i_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, a_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, s_ = {
  key: 0,
  class: "space-y-4 p-4"
}, l_ = ["value"], u_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, c_ = {
  key: 0,
  class: "p-4"
}, d_ = {
  key: 1,
  class: "p-4"
}, f_ = {
  key: 2,
  class: "space-y-1 p-4"
}, p_ = { class: "flex gap-2" }, h_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, m_ = {
  key: 3,
  class: "space-y-4 p-4"
}, v_ = ["value"], g_ = { key: 0 }, y_ = ["value"], b_ = { key: 1 }, x_ = ["value"], w_ = { key: 2 }, __ = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, S_ = {
  key: 4,
  class: "space-y-1 p-4"
}, k_ = { class: "flex gap-2" }, E_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, $_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, z_ = {
  key: 1,
  class: "space-y-4 p-4"
}, P_ = { class: "flex items-start justify-between gap-2" }, C_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, A_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, Jt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Pn = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", T_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X("config");
    let i = null, a = null;
    Oe(
      () => [n.node?.id, n.node?.data?.mode],
      ([c, u]) => {
        c === void 0 || u === void 0 || (c === i && u !== a && Object.assign(n.node.data, yp(u)), i = c, a = u);
      },
      { immediate: !0 }
    ), Oe(
      () => n.node,
      (c) => {
        if (!["delay", "wait_reply"].includes(c?.type) || c.data.delay_value) return;
        const { value: u, unit: d } = nw(c.data.seconds || 0);
        c.data.delay_value = u, c.data.delay_unit = d;
      },
      { immediate: !0 }
    ), Oe(() => n.node?.id, () => {
      o.value = "config";
    });
    function s() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = vp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (c, u) => (z(), T("aside", r_, [
      e.node ? (z(), T(ge, { key: 0 }, [
        l("div", o_, [
          l("div", null, [
            l("h3", i_, V(I(yn)(e.node.type)), 1),
            l("p", a_, V(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (d) => r("remove-node", e.node.id))
          }, [
            K(I(Wo), { class: "h-3 w-3" }),
            u[12] || (u[12] = Be(" Excluir ", -1))
          ])) : te("", !0)
        ]),
        e.node.type === "trigger" ? (z(), T("div", s_, [
          l("div", null, [
            l("label", {
              class: Y(Pn)
            }, "Evento"),
            l("input", {
              class: Y([Jt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, l_),
            u[13] || (u[13] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (z(), T(ge, { key: 1 }, [
          l("div", u_, [
            l("button", {
              type: "button",
              class: Y(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (d) => o.value = "config")
            }, " Configurar ", 2),
            l("button", {
              type: "button",
              class: Y(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (d) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (z(), T("div", c_, [
            K(fl, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": I(_p).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (z(), T("div", d_, [
            K(wp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (z(), T("div", f_, [
          l("label", {
            class: Y(Pn),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          l("div", p_, [
            ce(l("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (d) => e.node.data.delay_value = d),
              type: "number",
              min: "1",
              class: Y(Jt),
              onChange: s
            }, null, 544), [
              [
                xe,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (d) => e.node.data.delay_unit = d),
              class: Y(Jt),
              onChange: s
            }, [...u[14] || (u[14] = [
              l("option", { value: "seconds" }, "Segundos", -1),
              l("option", { value: "minutes" }, "Minutos", -1),
              l("option", { value: "hours" }, "Horas", -1),
              l("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [ut, e.node.data.delay_unit]
            ])
          ]),
          l("p", h_, " Aguarda " + V(e.node.data.delay_value || 0) + " " + V(I(ii)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (z(), T("div", m_, [
          l("div", null, [
            l("label", {
              class: Y(Pn),
              for: "zr-kind"
            }, "Regra de validação"),
            ce(l("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (d) => e.node.data.kind = d),
              class: Y(Jt)
            }, [
              (z(!0), T(ge, null, Re(I(pp), (d) => (z(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, v_))), 128))
            ], 512), [
              [ut, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (z(), T("div", g_, [
            l("label", {
              class: Y(Pn),
              for: "zr-order-status"
            }, "Status esperado"),
            ce(l("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (d) => e.node.data.value = d),
              class: Y(Jt)
            }, [
              (z(!0), T(ge, null, Re(I(hp), (d) => (z(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, y_))), 128))
            ], 512), [
              [ut, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (z(), T("div", b_, [
            l("label", {
              class: Y(Pn),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ce(l("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (d) => e.node.data.value = d),
              class: Y(Jt)
            }, [
              (z(!0), T(ge, null, Re(I(mp), (d) => (z(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, x_))), 128))
            ], 512), [
              [ut, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (z(), T("div", w_, [
            l("label", {
              class: Y(Pn),
              for: "zr-value"
            }, "Classe do evento"),
            ce(l("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (d) => e.node.data.value = d),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: Y(Jt)
            }, null, 512), [
              [
                xe,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : te("", !0),
          e.node.data.kind === "order_is_paid" ? (z(), T("p", __, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : te("", !0),
          u[15] || (u[15] = l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Be(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            l("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            Be(" e outra do ponto "),
            l("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            Be(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (z(), T("div", S_, [
          l("label", {
            class: Y(Pn),
            for: "zr-wait-value"
          }, "Tempo máximo de espera"),
          l("div", k_, [
            ce(l("input", {
              id: "zr-wait-value",
              "onUpdate:modelValue": u[9] || (u[9] = (d) => e.node.data.delay_value = d),
              type: "number",
              min: "1",
              class: Y(Jt),
              onChange: s
            }, null, 544), [
              [
                xe,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ce(l("select", {
              "onUpdate:modelValue": u[10] || (u[10] = (d) => e.node.data.delay_unit = d),
              class: Y(Jt),
              onChange: s
            }, [...u[16] || (u[16] = [
              l("option", { value: "seconds" }, "Segundos", -1),
              l("option", { value: "minutes" }, "Minutos", -1),
              l("option", { value: "hours" }, "Horas", -1),
              l("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [ut, e.node.data.delay_unit]
            ])
          ]),
          l("p", E_, " Espera até " + V(e.node.data.delay_value || 0) + " " + V(I(ii)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente. ", 1),
          u[17] || (u[17] = l("p", { class: "mt-3 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Be(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            l("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            Be(" (o cliente mandou uma mensagem) e outra do ponto "),
            l("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            Be(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (z(), T("p", $_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (z(), T("div", z_, [
        l("div", P_, [
          l("div", null, [
            u[18] || (u[18] = l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            l("p", C_, V(e.edge.source) + " → " + V(e.edge.target), 1)
          ]),
          l("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[11] || (u[11] = (d) => r("remove-edge", e.edge.id))
          }, [
            K(I(Wo), { class: "h-3 w-3" }),
            u[19] || (u[19] = Be(" Excluir ", -1))
          ])
        ]),
        u[20] || (u[20] = l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (z(), T("p", A_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, O_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, N_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, I_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, R_ = { class: "flex items-center gap-2" }, M_ = { class: "mt-6 space-y-4" }, D_ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, F_ = { class: "mt-2.5 flex items-center gap-2" }, B_ = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, L_ = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, U_ = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, q_ = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, V_ = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, j_ = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, H_ = { class: "flex items-center gap-3" }, G_ = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, W_ = { class: "flex items-center gap-2" }, X_ = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, Y_ = {
  key: 0,
  class: "flex justify-center my-1"
}, K_ = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, Z_ = {
  key: 1,
  class: "flex justify-start"
}, J_ = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, Q_ = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, e2 = {
  key: 2,
  class: "flex justify-end"
}, t2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, n2 = { class: "leading-relaxed" }, r2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, o2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, i2 = ["disabled", "placeholder"], a2 = ["disabled"], s2 = {
  __name: "FlowSimulatorModal",
  props: {
    flow: { type: Object, required: !0 },
    nodes: { type: Array, required: !0 },
    edges: { type: Array, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X(null), i = X([]);
    X(!1);
    const a = X(!1), s = X(""), c = X(!1), u = X(null);
    J(() => n.nodes.find((g) => g.id === o.value));
    function d() {
      const g = /* @__PURE__ */ new Date();
      return `${String(g.getHours()).padStart(2, "0")}:${String(g.getMinutes()).padStart(2, "0")}`;
    }
    function f() {
      i.value = [], a.value = !1, u.value = null, s.value = "";
      const g = n.nodes.find((S) => S.type === "trigger");
      if (!g) {
        i.value.push({
          type: "system",
          text: "Gatilho inicial não encontrado no fluxo.",
          time: d()
        });
        return;
      }
      i.value.push({
        type: "system",
        text: `🚀 Gatilho disparado: ${g.data?.event_class || "Evento do Fluxo"}`,
        time: d()
      }), o.value = g.id, y();
    }
    function v(g, S = null) {
      return n.edges.find((A) => A.source !== g ? !1 : S === null ? !0 : (A.sourceHandle === "yes" || A.sourceHandle === "replied" || A.data?.condition === "true" ? "true" : A.sourceHandle === "no" || A.sourceHandle === "timeout" || A.data?.condition === "false" ? "false" : null) === S);
    }
    function y() {
      if (!o.value) return;
      const g = n.nodes.find((S) => S.id === o.value);
      if (g) {
        if (g.type === "trigger") {
          const S = v(g.id);
          if (!S) return E("Fluxo finalizado após o gatilho.");
          o.value = S.target, p();
          return;
        }
        if (g.type === "send_message") {
          const S = v(g.id);
          if (!S) return E("Fim do fluxo atingido.");
          o.value = S.target, p();
          return;
        }
        if (g.type === "delay") {
          const S = v(g.id);
          if (!S) return E("Fim do fluxo atingido.");
          o.value = S.target, p();
          return;
        }
        if (g.type === "condition") {
          const S = c.value ? "true" : "false", A = v(g.id, S);
          if (!A) return E(`Fim do fluxo (ramificação ${S === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = A.target, p();
          return;
        }
        g.type === "end" && E("Fluxo finalizado com sucesso.");
      }
    }
    function p() {
      const g = n.nodes.find((S) => S.id === o.value);
      if (g) {
        if (g.type === "send_message") {
          i.value.push({
            type: "bot",
            mode: g.data?.mode || "text",
            text: g.data?.text || g.data?.caption || "Mensagem enviada",
            data: g.data || {},
            time: d()
          }), setTimeout(y, 800);
          return;
        }
        if (g.type === "delay") {
          const S = g.data?.delay_value || 15, A = g.data?.delay_unit || "minutes";
          u.value = `${S} ${A}`, i.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${S} ${A}...`,
            time: d()
          });
          return;
        }
        if (g.type === "condition") {
          const S = c.value;
          i.value.push({
            type: "system",
            text: `🔀 Avaliando condição: Pedido pago? -> ${S ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
            time: d()
          }), setTimeout(y, 600);
          return;
        }
        if (g.type === "wait_reply") {
          a.value = !0, i.value.push({
            type: "system",
            text: "👂 Aguardando resposta do cliente (digite uma resposta abaixo)...",
            time: d()
          });
          return;
        }
        g.type === "end" && E("Fluxo concluído.");
      }
    }
    function m() {
      u.value && (u.value = null, i.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: d()
      }), y());
    }
    function h() {
      if (!s.value.trim()) return;
      const g = s.value.trim();
      s.value = "", a.value = !1, i.value.push({
        type: "user",
        text: g,
        time: d()
      });
      const S = n.nodes.find((A) => A.id === o.value);
      if (S && S.type === "wait_reply") {
        const A = v(S.id, "true");
        if (!A) return E("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = A.target, setTimeout(p, 500);
      }
    }
    function b() {
      a.value = !1, i.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: d()
      });
      const g = n.nodes.find((S) => S.id === o.value);
      if (g && g.type === "wait_reply") {
        const S = v(g.id, "false");
        if (!S) return E("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = S.target, setTimeout(p, 500);
      }
    }
    function E(g) {
      i.value.push({
        type: "system",
        text: `🏁 ${g}`,
        time: d()
      }), o.value = null;
    }
    return Ze(f), (g, S) => (z(), T("div", O_, [
      l("div", N_, [
        l("div", I_, [
          l("div", R_, [
            K(I(tf), { class: "h-4 w-4 text-emerald-500" }),
            S[4] || (S[4] = l("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          S[11] || (S[11] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          l("div", M_, [
            l("div", D_, [
              S[5] || (S[5] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              S[6] || (S[6] = l("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              l("div", F_, [
                l("button", {
                  type: "button",
                  class: Y(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: S[0] || (S[0] = (A) => c.value = !0)
                }, " SIM (Pago) ", 2),
                l("button", {
                  type: "button",
                  class: Y(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: S[1] || (S[1] = (A) => c.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? (z(), T("div", B_, [
              l("div", L_, [
                K(I(Go), { class: "h-4 w-4" }),
                l("span", null, "Aguardando: " + V(u.value), 1)
              ]),
              l("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: m
              }, [
                K(I($0), { class: "h-3.5 w-3.5" }),
                S[7] || (S[7] = l("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : te("", !0),
            a.value ? (z(), T("div", U_, [
              S[9] || (S[9] = l("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              l("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: b
              }, [...S[8] || (S[8] = [
                l("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : te("", !0)
          ]),
          l("div", q_, [
            l("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: f
            }, [
              K(I(C0), { class: "h-3.5 w-3.5" }),
              S[10] || (S[10] = l("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        l("div", V_, [
          l("div", j_, [
            l("div", H_, [
              S[13] || (S[13] = l("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              l("div", null, [
                l("div", G_, V(e.flow.name), 1),
                S[12] || (S[12] = l("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            l("div", W_, [
              l("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: S[2] || (S[2] = (A) => r("close"))
              }, [
                K(I(Vt), { class: "h-4 w-4" })
              ])
            ])
          ]),
          l("div", X_, [
            (z(!0), T(ge, null, Re(i.value, (A, $) => (z(), T(ge, { key: $ }, [
              A.type === "system" ? (z(), T("div", Y_, [
                l("span", K_, V(A.text), 1)
              ])) : A.type === "bot" ? (z(), T("div", Z_, [
                l("div", J_, [
                  K(fl, {
                    text: A.text,
                    mode: A.mode,
                    caption: A.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  l("div", Q_, [
                    l("span", null, V(A.time), 1),
                    K(I(gs), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : A.type === "user" ? (z(), T("div", e2, [
                l("div", t2, [
                  l("p", n2, V(A.text), 1),
                  l("div", r2, [
                    l("span", null, V(A.time), 1),
                    K(I(gs), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : te("", !0)
            ], 64))), 128))
          ]),
          l("div", o2, [
            l("form", {
              class: "flex items-center gap-2",
              onSubmit: en(h, ["prevent"])
            }, [
              ce(l("input", {
                "onUpdate:modelValue": S[3] || (S[3] = (A) => s.value = A),
                type: "text",
                disabled: !a.value,
                placeholder: a.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, i2), [
                [xe, s.value]
              ]),
              l("button", {
                type: "submit",
                disabled: !a.value || !s.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                K(I(ln), { class: "h-4 w-4" })
              ], 8, a2)
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
function l2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const u2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function c2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return u2[e]?.[t];
}
function ko(e, t = {}) {
  if (e === "send_message") {
    const n = String(t.mode || "text");
    if (n === "buttons") return `Botões • ${(t.buttons || []).length} opção(ões)`;
    if (n === "list") return `Lista • ${(t.sections || []).flatMap((i) => i.rows || []).length} item(ns)`;
    if (n === "location") return `Localização${t.location_name ? ` • ${t.location_name}` : ""}`;
    if (n === "contact") return `Contato${t.contact_name ? ` • ${t.contact_name}` : ""}`;
    if (n === "poll") return `Enquete${t.question ? ` • ${t.question}` : ""}`;
    if (n === "link") return `Link${t.url ? ` • ${t.url}` : ""}`;
    const r = String(t.text || t.caption || "").replace(/\s+/g, " ").trim(), o = r.length > 46 ? `${r.slice(0, 46)}…` : r;
    return o ? `${n} • ${o}` : n;
  }
  return e === "delay" ? t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${ii(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s` : e === "condition" ? t.kind === "order_status_is" ? `Status do pedido é "${hp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${mp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : pp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?" : e === "wait_reply" ? t.delay_value && t.delay_unit ? `Espera até ${t.delay_value} ${ii(t.delay_unit)}` : `Espera até ${Math.max(0, Number(t.seconds) || 0)}s` : e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function d2(e, t = "") {
  const n = Qn(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], i = r.filter((u) => Qn(u) && u.id).map((u, d) => ({
    id: String(u.id),
    type: String(u.type || "send_message"),
    position: {
      x: Number.isFinite(u.x) ? u.x : 80 + d % 4 * 260,
      y: Number.isFinite(u.y) ? u.y : 120 + Math.floor(d / 4) * 170
    },
    data: Qn(u.data) ? { ...u.data } : {},
    draggable: u.type !== "trigger",
    deletable: u.type !== "trigger"
  }));
  i.some((u) => u.type === "trigger") || i.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: gp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const a = new Map(i.map((u) => [u.id, u.type])), s = new Set(i.map((u) => u.id)), c = o.filter((u) => Qn(u) && s.has(String(u.from)) && s.has(String(u.to))).map((u, d) => {
    const f = Qn(u.data) ? { ...u.data } : {};
    return {
      id: `e_${u.from}_${u.to}_${d}`,
      source: String(u.from),
      target: String(u.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: c2(a.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: i, edges: c };
}
function f2(e, t) {
  const n = Qn(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = vp(n.delay_value, n.delay_unit)), n;
}
function p2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function h2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: f2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = p2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function m2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : l2(e),
    type: e,
    position: t,
    data: gp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: yn(e)
  };
}
function ot(e) {
  return String(e ?? "").trim();
}
function v2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? ot(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : ot(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? ot(e.url) !== "" : t === "call" ? ot(e.phoneNumber) !== "" : t === "copy" ? ot(e.copyCode) !== "" : !0;
}
function g2(e) {
  return ot(e?.title) !== "";
}
function Sp(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && ot(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && ot(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(v2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(g2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
      break;
    case "location":
      (ot(e.latitude) === "" || ot(e.longitude) === "") && n.push(`${t}: informe latitude e longitude.`);
      break;
    case "contact":
      (ot(e.contact_name) === "" || ot(e.contact_phone) === "") && n.push(`${t}: informe nome e telefone do contato.`);
      break;
    case "poll": {
      const r = (e.options || []).filter((o) => ot(o) !== "");
      (ot(e.question) === "" || r.length < 2) && n.push(`${t}: informe a pergunta e ao menos 2 opções.`);
      break;
    }
    case "link":
      ot(e.url) === "" && n.push(`${t}: informe a URL do link.`);
      break;
    case "image":
    case "video":
    case "audio":
    case "document":
    case "sticker":
      ot(e.media_url) === "" && n.push(`${t}: selecione um arquivo.`);
      break;
    default:
      ot(e.text) === "" && n.push(`${t}: escreva o texto da mensagem.`);
  }
  return n;
}
function y2(e) {
  const t = [];
  for (const n of e || []) {
    if (n.type !== "send_message") continue;
    const r = n.data || {}, o = ot(r.mode) || "text";
    t.push(...Sp(r, `Bloco "Enviar mensagem" (${o})`));
  }
  return t;
}
const b2 = { class: "flex h-full flex-col lg:flex-row" }, x2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, w2 = { class: "mb-4 flex items-center justify-between" }, _2 = { class: "space-y-2" }, S2 = ["onDragstart", "onClick"], k2 = { class: "text-xs font-bold" }, E2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, $2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, z2 = ["disabled"], P2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, C2 = { class: "flex items-center gap-2" }, A2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, T2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, O2 = { class: "p-3" }, N2 = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, I2 = { class: "truncate" }, R2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, M2 = { class: "flex items-center gap-2" }, D2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, F2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, B2 = { class: "flex items-center gap-1.5" }, L2 = ["onClick"], U2 = { class: "p-3" }, q2 = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, V2 = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, j2 = {
  key: 1,
  class: "space-y-1"
}, H2 = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, G2 = { class: "text-[10px] text-zinc-500" }, W2 = {
  key: 2,
  class: "space-y-1.5"
}, X2 = { class: "text-[11px] leading-snug line-clamp-2" }, Y2 = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, K2 = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, Z2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, J2 = { class: "flex items-center gap-2" }, Q2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, eS = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, tS = ["onClick"], nS = { class: "p-3" }, rS = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, oS = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, iS = { class: "flex items-center gap-2" }, aS = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, sS = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, lS = ["onClick"], uS = { class: "p-3 space-y-2.5 pb-12" }, cS = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, dS = { class: "line-clamp-2" }, fS = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, pS = { class: "flex items-center gap-2" }, hS = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, mS = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, vS = ["onClick"], gS = { class: "p-3 space-y-2.5 pb-12" }, yS = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, bS = { class: "line-clamp-2" }, xS = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, wS = { class: "flex items-center gap-2" }, _S = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, SS = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, kS = ["onClick"], ES = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X([]), i = X([]), a = X(null), s = X(null), c = X([]), u = X(!1), d = {
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
    function f(P) {
      return d[P] || { label: P || "Texto", color: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20" };
    }
    const { onConnect: v, addEdges: y, project: p, fitView: m } = Ve(), h = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Bn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Xl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: Go, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Wl, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: Yl, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Gl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], b = J(() => n.flow?.trigger_event || ""), E = J(() => o.value.find((P) => P.id === a.value) || null), g = J(() => i.value.find((P) => P.id === s.value) || null), S = {
      type: "zaprei",
      markerEnd: ti.ArrowClosed,
      data: {}
    };
    Oe(
      () => n.flow?.id,
      () => {
        const P = d2(n.flow?.graph_json, b.value);
        o.value = P.nodes, i.value = P.edges, a.value = null, s.value = null, setTimeout(() => m({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), v((P) => {
      y([{
        ...P,
        ...S,
        sourceHandle: P.sourceHandle,
        data: { sourceHandle: P.sourceHandle }
      }]);
    });
    function A(P) {
      a.value = P, s.value = null;
    }
    function $(P) {
      s.value = P, a.value = null;
    }
    function w() {
      a.value = null, s.value = null;
    }
    function _(P, x) {
      if (P === "trigger" && o.value.some((D) => D.type === "trigger"))
        return;
      const N = m2(P, x || { x: 420, y: 320 }, b.value);
      o.value = [...o.value, N], A(N.id);
    }
    function L(P) {
      !P || o.value.find((x) => x.id === P)?.type === "trigger" || (o.value = o.value.filter((x) => x.id !== P), i.value = i.value.filter((x) => x.source !== P && x.target !== P), a.value === P && (a.value = null));
    }
    function F(P) {
      i.value = i.value.filter((x) => x.id !== P), s.value === P && (s.value = null);
    }
    function M(P, x) {
      P.dataTransfer?.setData("application/zaprei-node", x), P.dataTransfer.effectAllowed = "move";
    }
    function C(P) {
      P.preventDefault(), P.dataTransfer.dropEffect = "move";
    }
    function U(P) {
      P.preventDefault();
      const x = P.dataTransfer?.getData("application/zaprei-node");
      if (!x) return;
      const N = P.currentTarget.getBoundingClientRect(), D = p({
        x: P.clientX - N.left,
        y: P.clientY - N.top
      });
      _(x, D);
    }
    function k() {
      const P = h2(o.value, i.value), x = y2(P);
      c.value = x, !x.length && r("save", P);
    }
    return (P, x) => (z(), T("div", b2, [
      l("aside", x2, [
        l("div", w2, [
          x[7] || (x[7] = l("div", null, [
            l("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            l("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          l("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: x[0] || (x[0] = (N) => u.value = !0)
          }, [
            K(I(tf), { class: "h-3.5 w-3.5" }),
            x[6] || (x[6] = l("span", null, "Simulador", -1))
          ])
        ]),
        l("div", _2, [
          (z(), T(ge, null, Re(h, (N) => l("div", {
            key: N.type,
            draggable: "true",
            class: Y(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", N.color]),
            onDragstart: (D) => M(D, N.type),
            onClick: (D) => _(N.type)
          }, [
            (z(), Ie(At(N.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            l("div", null, [
              l("div", k2, V(N.title), 1),
              l("div", E2, V(N.desc), 1)
            ])
          ], 42, S2)), 64))
        ]),
        l("div", $2, [
          l("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: k
          }, [
            l("span", null, V(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, z2)
        ])
      ]),
      l("main", {
        class: "relative h-full flex-1",
        onDragover: C,
        onDrop: U
      }, [
        K(I(u1), {
          nodes: o.value,
          "onUpdate:nodes": x[1] || (x[1] = (N) => o.value = N),
          edges: i.value,
          "onUpdate:edges": x[2] || (x[2] = (N) => i.value = N),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": S,
          onNodeClick: x[3] || (x[3] = (N) => A(N.node?.id)),
          onEdgeClick: x[4] || (x[4] = (N) => $(N.edge?.id)),
          onPaneClick: w
        }, {
          "edge-zaprei": it((N) => [
            K(K1, gi(N, { onRemove: F }), null, 16)
          ]),
          "node-trigger": it((N) => [
            l("div", {
              class: Y(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "source",
                position: I(le).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", P2, [
                l("div", C2, [
                  l("div", A2, [
                    K(I(Bn), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", T2, V(I(yn)("trigger")), 1)
                ]),
                x[8] || (x[8] = l("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              l("div", O2, [
                l("div", N2, [
                  x[9] || (x[9] = l("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  l("span", I2, V(I(ko)("trigger", N.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": it((N) => [
            l("div", {
              class: Y(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "target",
                position: I(le).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              K(I(lt), {
                type: "source",
                position: I(le).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", R2, [
                l("div", M2, [
                  l("div", D2, [
                    K(I(Xl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", F2, V(I(yn)("send_message")), 1)
                ]),
                l("div", B2, [
                  l("span", {
                    class: Y(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", f(N.data?.mode).color])
                  }, V(f(N.data?.mode).label), 3),
                  l("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: en((D) => L(N.id), ["stop"])
                  }, [
                    K(I(Vt), { class: "h-3.5 w-3.5" })
                  ], 8, L2)
                ])
              ]),
              l("div", U2, [
                l("div", q2, [
                  N.data?.mode === "audio" ? (z(), T("div", V2, [
                    K(I(P0), { class: "h-3.5 w-3.5" }),
                    x[10] || (x[10] = l("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    x[11] || (x[11] = l("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : N.data?.mode === "poll" ? (z(), T("div", j2, [
                    l("div", H2, "📊 " + V(N.data?.question || "Pergunta da enquete..."), 1),
                    l("div", G2, V((N.data?.options || []).length) + " opções configuradas", 1)
                  ])) : N.data?.mode === "buttons" ? (z(), T("div", W2, [
                    l("p", X2, V(N.data?.text || "Texto da mensagem..."), 1),
                    (N.data?.buttons || []).length ? (z(), T("div", Y2, [
                      (z(!0), T(ge, null, Re((N.data?.buttons || []).slice(0, 3), (D, Z) => (z(), T("span", {
                        key: Z,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, V(D.label || `Botão ${Z + 1}`), 1))), 128))
                    ])) : te("", !0)
                  ])) : (z(), T("div", K2, V(N.data?.text || N.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": it((N) => [
            l("div", {
              class: Y(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "target",
                position: I(le).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              K(I(lt), {
                type: "source",
                position: I(le).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", Z2, [
                l("div", J2, [
                  l("div", Q2, [
                    K(I(Go), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", eS, V(I(yn)("delay")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: en((D) => L(N.id), ["stop"])
                }, [
                  K(I(Vt), { class: "h-3.5 w-3.5" })
                ], 8, tS)
              ]),
              l("div", nS, [
                l("div", rS, [
                  x[12] || (x[12] = l("span", { class: "relative flex h-2 w-2" }, [
                    l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    l("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  l("span", null, V(I(ko)("delay", N.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": it((N) => [
            l("div", {
              class: Y(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "target",
                position: I(le).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", oS, [
                l("div", iS, [
                  l("div", aS, [
                    K(I(Wl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", sS, V(I(yn)("condition")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: en((D) => L(N.id), ["stop"])
                }, [
                  K(I(Vt), { class: "h-3.5 w-3.5" })
                ], 8, lS)
              ]),
              l("div", uS, [
                l("div", cS, [
                  l("span", dS, V(I(ko)("condition", N.data)), 1)
                ]),
                x[13] || (x[13] = l("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                K(I(lt), {
                  id: "yes",
                  type: "source",
                  position: I(le).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                x[14] || (x[14] = l("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                K(I(lt), {
                  id: "no",
                  type: "source",
                  position: I(le).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": it((N) => [
            l("div", {
              class: Y(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "target",
                position: I(le).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", fS, [
                l("div", pS, [
                  l("div", hS, [
                    K(I(Yl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", mS, V(I(yn)("wait_reply")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: en((D) => L(N.id), ["stop"])
                }, [
                  K(I(Vt), { class: "h-3.5 w-3.5" })
                ], 8, vS)
              ]),
              l("div", gS, [
                l("div", yS, [
                  l("span", bS, V(I(ko)("wait_reply", N.data)), 1)
                ]),
                x[15] || (x[15] = l("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                K(I(lt), {
                  id: "replied",
                  type: "source",
                  position: I(le).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                x[16] || (x[16] = l("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                K(I(lt), {
                  id: "timeout",
                  type: "source",
                  position: I(le).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": it((N) => [
            l("div", {
              class: Y(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", N.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              K(I(lt), {
                type: "target",
                position: I(le).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", xS, [
                l("div", wS, [
                  l("div", _S, [
                    K(I(Gl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", SS, V(I(yn)("end")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: en((D) => L(N.id), ["stop"])
                }, [
                  K(I(Vt), { class: "h-3.5 w-3.5" })
                ], 8, kS)
              ]),
              x[17] || (x[17] = l("div", { class: "p-3" }, [
                l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: it(() => [
            K(I(y1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            K(I(Y1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      K(T_, {
        node: E.value,
        edge: g.value,
        onRemoveNode: L,
        onRemoveEdge: F
      }, null, 8, ["node", "edge"]),
      u.value ? (z(), Ie(s2, {
        key: 0,
        flow: e.flow,
        nodes: o.value,
        edges: i.value,
        onClose: x[5] || (x[5] = (N) => u.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : te("", !0)
    ]));
  }
}, $S = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, zS = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, PS = { class: "flex items-center gap-3" }, CS = ["disabled"], AS = { class: "flex items-center gap-2" }, TS = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, OS = { class: "text-sm font-bold" }, NS = ["disabled"], IS = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, kp = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X(!1), i = X("");
    async function a(s) {
      o.value = !0, i.value = "";
      try {
        await Te.updateFlow(n.flow.id, { graph_json: s }), r("saved"), r("close");
      } catch (c) {
        i.value = c.message, o.value = !1;
      }
    }
    return (s, c) => (z(), Ie(qd, { to: "body" }, [
      l("div", $S, [
        l("header", zS, [
          l("div", PS, [
            l("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: o.value,
              onClick: c[0] || (c[0] = (u) => r("close"))
            }, [
              K(I(jd), { class: "h-4 w-4 text-emerald-500" }),
              c[2] || (c[2] = l("span", null, "Voltar para Automações", -1))
            ], 8, CS),
            c[4] || (c[4] = l("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            l("div", AS, [
              l("div", TS, [
                K(I(Kd), { class: "h-4 w-4" })
              ]),
              l("div", null, [
                l("div", OS, V(e.flow.name || "Editor de Fluxo Visual"), 1),
                c[3] || (c[3] = l("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          l("button", {
            type: "button",
            disabled: o.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: c[1] || (c[1] = (u) => s.$refs.canvas?.requestSave())
          }, [
            o.value ? (z(), Ie(I(En), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Ie(I(T0), {
              key: 1,
              class: "h-4 w-4"
            })),
            l("span", null, V(o.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, NS)
        ]),
        i.value ? (z(), T("p", IS, [
          K(I(Gd), { class: "h-4 w-4 shrink-0" }),
          l("span", null, V(i.value), 1)
        ])) : te("", !0),
        K(ES, {
          ref: "canvas",
          flow: e.flow,
          saving: o.value,
          class: "flex-1 overflow-hidden",
          onSave: a
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, RS = { class: "truncate" }, MS = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, DS = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, FS = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, BS = ["checked", "onChange"], LS = { class: "truncate" }, ur = {
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
    const n = e, r = t, o = X(!1), i = X(null);
    function a(y) {
      i.value && !i.value.contains(y.target) && u();
    }
    function s() {
      o.value ? u() : c();
    }
    function c() {
      o.value = !0, document.addEventListener("click", a, !0);
    }
    function u() {
      o.value = !1, document.removeEventListener("click", a, !0);
    }
    function d(y) {
      r("update:modelValue", n.modelValue.includes(y) ? n.modelValue.filter((p) => p !== y) : [...n.modelValue, y]);
    }
    function f() {
      r("update:modelValue", []);
    }
    vi(() => document.removeEventListener("click", a, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, p) => (z(), T("div", {
      ref_key: "root",
      ref: i,
      class: "relative"
    }, [
      l("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: s
      }, [
        l("span", RS, V(v.value), 1),
        K(I(k0), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (z(), T("div", MS, [
        e.options.length ? (z(), T(ge, { key: 1 }, [
          e.matchMode ? (z(), T("div", FS, [
            l("button", {
              type: "button",
              class: Y(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: p[0] || (p[0] = (m) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            l("button", {
              type: "button",
              class: Y(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: p[1] || (p[1] = (m) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : te("", !0),
          e.modelValue.length ? (z(), T("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : te("", !0),
          (z(!0), T(ge, null, Re(e.options, (m) => (z(), T("label", {
            key: m.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            l("span", {
              class: Y(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(m.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(m.value) ? (z(), Ie(I(Hd), {
                key: 0,
                class: "h-3 w-3"
              })) : te("", !0)
            ], 2),
            l("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(m.value),
              onChange: (h) => d(m.value)
            }, null, 40, BS),
            l("span", LS, V(m.label), 1)
          ]))), 128))
        ], 64)) : (z(), T("p", DS, "Nenhuma opção disponível."))
      ])) : te("", !0)
    ], 512));
  }
}, US = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, qS = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, VS = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, jS = { class: "flex items-center gap-2.5" }, HS = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, GS = { class: "space-y-4 p-5" }, WS = ["value"], XS = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, YS = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, KS = ["disabled"], ZS = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X([]), i = X(!1), a = X(""), s = Qr({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || Mn[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), c = J(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function u() {
      try {
        o.value = (await Te.products()).products || [];
      } catch {
        o.value = [];
      }
    }
    async function d() {
      if (!s.name.trim()) {
        a.value = "Informe um nome para o fluxo.";
        return;
      }
      i.value = !0, a.value = "";
      try {
        await Te.updateFlow(n.flow.id, {
          name: s.name.trim(),
          trigger_event: s.trigger_event,
          product_ids: s.product_ids.length ? s.product_ids : null
        }), r("saved"), r("close");
      } catch (f) {
        a.value = f.message;
      } finally {
        i.value = !1;
      }
    }
    return Ze(u), (f, v) => (z(), T("div", US, [
      l("div", qS, [
        l("div", VS, [
          l("div", jS, [
            l("div", HS, [
              K(I(ef), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          l("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (y) => r("close"))
          }, [
            K(I(Vt), { class: "h-4 w-4" })
          ])
        ]),
        l("div", GS, [
          l("div", null, [
            v[6] || (v[6] = l("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ce(l("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": v[1] || (v[1] = (y) => s.name = y),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [xe, s.name]
            ])
          ]),
          l("div", null, [
            v[7] || (v[7] = l("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ce(l("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (y) => s.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (z(!0), T(ge, null, Re(I(Mn), (y) => (z(), T("option", {
                key: y.id,
                value: y.eventClass
              }, V(y.label), 9, WS))), 128))
            ], 512), [
              [ut, s.trigger_event]
            ]),
            v[8] || (v[8] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          l("div", null, [
            v[9] || (v[9] = l("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            K(ur, {
              modelValue: s.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (y) => s.product_ids = y),
              options: c.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          a.value ? (z(), T("p", XS, V(a.value), 1)) : te("", !0)
        ]),
        l("div", YS, [
          l("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v[4] || (v[4] = (y) => r("close"))
          }, " Cancelar "),
          l("button", {
            type: "button",
            disabled: i.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: d
          }, V(i.value ? "Salvando…" : "Salvar"), 9, KS)
        ])
      ])
    ]));
  }
}, JS = [
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
], QS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, ek = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, tk = ["onClick"], nk = { class: "flex items-center justify-between" }, rk = { class: "text-2xl" }, ok = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, ik = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, ak = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, sk = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (z(), T("div", QS, [
      n[1] || (n[1] = l("div", { class: "mb-4 flex items-center justify-between" }, [
        l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      l("div", ek, [
        (z(!0), T(ge, null, Re(I(JS), (r) => (z(), T("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          l("div", null, [
            l("div", nk, [
              l("span", rk, V(r.icon), 1),
              l("span", ok, V(r.badge), 1)
            ]),
            l("h3", ik, V(r.title), 1),
            l("p", ak, V(r.description), 1)
          ]),
          n[0] || (n[0] = l("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            l("span", null, "Usar modelo"),
            l("span", null, "→")
          ], -1))
        ], 8, tk))), 128))
      ])
    ]));
  }
}, lk = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, uk = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, ck = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, dk = { class: "flex items-center gap-3" }, fk = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, pk = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, hk = { class: "text-zinc-700 dark:text-zinc-300" }, mk = { class: "p-6 space-y-4" }, vk = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, gk = { class: "flex items-center gap-2 font-bold text-sm" }, yk = { class: "text-xs" }, bk = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, xk = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, wk = ["value"], _k = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, Sk = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, kk = ["disabled"], Ek = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X(""), i = X(""), a = X(!1), s = X(""), c = X(!1), u = X("");
    function d(m) {
      const h = String(m || "").replace(/\D/g, "").slice(0, 11);
      return h ? h.length <= 2 ? `(${h}` : h.length <= 6 ? `(${h.slice(0, 2)}) ${h.slice(2)}` : h.length <= 10 ? `(${h.slice(0, 2)}) ${h.slice(2, 6)}-${h.slice(6)}` : `(${h.slice(0, 2)}) ${h.slice(2, 7)}-${h.slice(7, 11)}` : "";
    }
    function f(m) {
      const h = m.target.value;
      o.value = d(h);
    }
    const v = J(() => o.value.replace(/\D/g, "")), y = J(() => v.value.length >= 10 && v.value.length <= 11);
    async function p() {
      if (!(!y.value || a.value)) {
        a.value = !0, s.value = "", c.value = !1;
        try {
          await Te.testFlow(n.flow.id, {
            phone: v.value,
            customer_name: i.value.trim() || void 0
          }), u.value = o.value, c.value = !0, r("tested", { phone: v.value, name: i.value });
        } catch (m) {
          s.value = m.message || "Falha ao disparar teste.";
        } finally {
          a.value = !1;
        }
      }
    }
    return (m, h) => (z(), T("div", lk, [
      l("div", uk, [
        l("div", ck, [
          l("div", dk, [
            l("div", fk, [
              K(I(ln), { class: "h-5 w-5" })
            ]),
            l("div", null, [
              h[4] || (h[4] = l("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              l("p", pk, [
                h[3] || (h[3] = Be("Fluxo: ", -1)),
                l("strong", hk, V(e.flow.name), 1)
              ])
            ])
          ]),
          l("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: h[0] || (h[0] = (b) => r("close"))
          }, [
            K(I(Vt), { class: "h-4 w-4" })
          ])
        ]),
        l("div", mk, [
          h[13] || (h[13] = l("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            l("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          c.value ? (z(), T("div", vk, [
            l("div", gk, [
              K(I(Qs), { class: "h-5 w-5 text-emerald-500" }),
              h[5] || (h[5] = l("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            l("p", yk, [
              h[6] || (h[6] = Be(" As mensagens foram enviadas para ", -1)),
              l("strong", null, V(u.value), 1),
              h[7] || (h[7] = Be('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : te("", !0),
          s.value ? (z(), T("div", bk, V(s.value), 1)) : te("", !0),
          l("form", {
            class: "space-y-4",
            onSubmit: en(p, ["prevent"])
          }, [
            l("div", null, [
              h[9] || (h[9] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              l("div", xk, [
                h[8] || (h[8] = l("span", { class: "mr-2 text-xs font-bold text-zinc-500" }, "🇧🇷 +55", -1)),
                l("input", {
                  value: o.value,
                  type: "text",
                  placeholder: "(11) 99999-8888",
                  class: "w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white",
                  onInput: f
                }, null, 40, wk)
              ]),
              h[10] || (h[10] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Digite seu número com DDD (10 ou 11 dígitos). ", -1))
            ]),
            l("div", null, [
              h[11] || (h[11] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Nome do Cliente (para variáveis do fluxo) ", -1)),
              l("div", _k, [
                K(I(N0), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                ce(l("input", {
                  "onUpdate:modelValue": h[1] || (h[1] = (b) => i.value = b),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [xe, i.value]
                ])
              ]),
              h[12] || (h[12] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                Be(" Substitui as tags "),
                l("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                Be(" e "),
                l("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                Be(". ")
              ], -1))
            ])
          ], 32)
        ]),
        l("div", Sk, [
          l("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: h[2] || (h[2] = (b) => r("close"))
          }, V(c.value ? "Concluir" : "Cancelar"), 1),
          l("button", {
            type: "button",
            disabled: !y.value || a.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: p
          }, [
            a.value ? (z(), Ie(I(En), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (z(), Ie(I(ln), {
              key: 1,
              class: "h-4 w-4"
            })),
            l("span", null, V(a.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, kk)
        ])
      ])
    ]));
  }
}, $k = { class: "space-y-4 text-zinc-900 dark:text-white" }, zk = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, Pk = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, Ck = { class: "flex flex-wrap items-center gap-2" }, Ak = { class: "relative w-64" }, Tk = ["value"], Ok = { class: "flex items-center gap-3" }, Nk = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, Ik = ["disabled"], Rk = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, Mk = { class: "grid gap-3 sm:grid-cols-3" }, Dk = ["value"], Fk = { class: "flex gap-2" }, Bk = ["disabled"], Lk = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Uk = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, qk = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, Vk = {
  key: 4,
  class: "py-10 text-center"
}, jk = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, Hk = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, Gk = { class: "flex items-start justify-between gap-2" }, Wk = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, Xk = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, Yk = ["title", "disabled", "onClick"], Kk = { class: "mt-2" }, Zk = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, Jk = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, Qk = { class: "flex items-center gap-1" }, eE = ["onClick"], tE = ["disabled", "onClick"], nE = ["disabled", "onClick"], rE = ["disabled", "onClick"], oE = ["onClick"], iE = ["onClick"], aE = {
  __name: "FlowsPanel",
  setup(e) {
    const t = X([]), n = X([]), r = X(!0), o = X(!1), i = X(""), a = X(""), s = X(!1), c = X(""), u = X("all"), d = X(null), f = X(null), v = X(null), y = X({ name: "", trigger_event: Mn[3].eventClass, product_ids: [] }), p = X(!1), m = J(() => {
      const U = c.value.trim().toLowerCase();
      return t.value.filter((k) => u.value !== "all" && k.trigger_event !== u.value ? !1 : !U || `${k.name} ${Mo(k.trigger_event)}`.toLowerCase().includes(U));
    }), h = J(() => n.value.map((U) => ({ value: U.id, label: U.name })));
    function b(U) {
      if (!U || !U.length) return "Todos os produtos";
      const k = U.map((P) => n.value.find((x) => x.id === P)?.name).filter(Boolean);
      return k.length ? k.length > 2 ? `${k.slice(0, 2).join(", ")} +${k.length - 2}` : k.join(", ") : "Todos os produtos";
    }
    async function E() {
      r.value = !0, i.value = "";
      try {
        const [U, k] = await Promise.all([Te.flows(), Te.products()]);
        t.value = U.flows || [], n.value = k.products || [];
      } catch (U) {
        i.value = U.message;
      } finally {
        r.value = !1;
      }
    }
    async function g(U) {
      o.value = !0, i.value = "";
      try {
        await U(), await E();
      } catch (k) {
        i.value = k.message;
      } finally {
        o.value = !1;
      }
    }
    function S(U) {
      v.value = U;
    }
    function A({ phone: U }) {
      a.value = `Fluxo "${v.value?.name}" disparado para ${U}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function $() {
      const U = y.value.name.trim() || Mo(y.value.trigger_event);
      return g(async () => {
        await Te.createFlow({
          name: U,
          trigger_event: y.value.trigger_event,
          product_ids: y.value.product_ids.length ? y.value.product_ids : null,
          is_active: !0,
          graph_json: bp(y.value.trigger_event)
        }), y.value.name = "", y.value.product_ids = [], p.value = !1;
      });
    }
    const w = (U) => g(() => Te.updateFlow(U.id, { is_active: !U.is_active })), _ = (U) => g(() => Te.duplicateFlow(U.id));
    function L(U) {
      if (window.confirm(`Excluir o fluxo "${U.name}"?`))
        return g(() => Te.deleteFlow(U.id));
    }
    function F(U) {
      const k = {
        name: U.name,
        trigger_event: U.trigger_event,
        product_ids: U.product_ids,
        graph_json: U.graph_json
      }, P = new Blob([JSON.stringify(k, null, 2)], { type: "application/json" }), x = URL.createObjectURL(P), N = document.createElement("a");
      N.href = x, N.download = `${(U.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, N.click(), URL.revokeObjectURL(x);
    }
    async function M(U) {
      const k = U.target.files?.[0];
      if (k) {
        s.value = !0, i.value = "", a.value = "";
        try {
          const P = JSON.parse(await k.text());
          if (!P || typeof P != "object" || !P.graph_json || !P.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const x = new Set(n.value.map((D) => D.id)), N = (Array.isArray(P.product_ids) ? P.product_ids : []).filter((D) => x.has(D));
          await Te.createFlow({
            name: P.name ? `${P.name} (importado)` : "Fluxo importado",
            trigger_event: P.trigger_event,
            product_ids: N.length ? N : null,
            graph_json: P.graph_json,
            is_active: !1
          }), a.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await E();
        } catch (P) {
          i.value = P.message || "Não foi possível importar o arquivo.";
        } finally {
          s.value = !1, U.target.value = "";
        }
      }
    }
    function C(U) {
      return g(() => Te.createFlow({
        name: U.title,
        trigger_event: U.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: U.graph(U.eventClass)
      }));
    }
    return Ze(E), (U, k) => (z(), T("div", $k, [
      K(sk, { onUse: C }),
      l("div", zk, [
        l("div", Pk, [
          l("div", Ck, [
            l("div", Ak, [
              K(I(Br), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ce(l("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (P) => c.value = P),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [xe, c.value]
              ])
            ]),
            ce(l("select", {
              "onUpdate:modelValue": k[1] || (k[1] = (P) => u.value = P),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              k[10] || (k[10] = l("option", { value: "all" }, "Todos os eventos", -1)),
              (z(!0), T(ge, null, Re(I(Mn), (P) => (z(), T("option", {
                key: P.id,
                value: P.eventClass
              }, V(P.label), 9, Tk))), 128))
            ], 512), [
              [ut, u.value]
            ])
          ]),
          l("div", Ok, [
            l("span", Nk, V(m.value.length) + " fluxo(s) cadastrado(s)", 1),
            l("label", {
              class: Y(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": s.value }])
            }, [
              K(I(nf), { class: "h-4 w-4" }),
              l("span", null, V(s.value ? "Importando…" : "Importar"), 1),
              l("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: s.value,
                onChange: M
              }, null, 40, Ik)
            ], 2),
            l("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: k[2] || (k[2] = (P) => p.value = !p.value)
            }, [
              K(I(Qd), { class: "h-4 w-4" }),
              k[11] || (k[11] = l("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        p.value ? (z(), T("div", Rk, [
          l("div", Mk, [
            l("div", null, [
              k[12] || (k[12] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ce(l("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": k[3] || (k[3] = (P) => y.value.name = P),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [xe, y.value.name]
              ])
            ]),
            l("div", null, [
              k[13] || (k[13] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ce(l("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": k[4] || (k[4] = (P) => y.value.trigger_event = P),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (z(!0), T(ge, null, Re(I(Mn), (P) => (z(), T("option", {
                  key: P.id,
                  value: P.eventClass
                }, V(P.label), 9, Dk))), 128))
              ], 512), [
                [ut, y.value.trigger_event]
              ])
            ]),
            l("div", null, [
              k[14] || (k[14] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              K(ur, {
                modelValue: y.value.product_ids,
                "onUpdate:modelValue": k[5] || (k[5] = (P) => y.value.product_ids = P),
                options: h.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          l("div", Fk, [
            l("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: $
            }, " Criar fluxo em branco ", 8, Bk),
            l("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: k[6] || (k[6] = (P) => p.value = !1)
            }, " Cancelar ")
          ])
        ])) : te("", !0),
        i.value ? (z(), T("p", Lk, V(i.value), 1)) : a.value ? (z(), T("p", Uk, V(a.value), 1)) : te("", !0),
        r.value ? (z(), T("div", qk, [
          K(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          k[15] || (k[15] = l("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : m.value.length ? (z(), T("div", Hk, [
          (z(!0), T(ge, null, Re(m.value, (P) => (z(), T("div", {
            key: P.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            l("div", null, [
              l("div", Gk, [
                l("div", null, [
                  l("span", Wk, V(I(Mo)(P.trigger_event)), 1),
                  l("h3", Xk, V(P.name), 1)
                ]),
                l("button", {
                  type: "button",
                  class: Y(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", P.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: P.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (x) => w(P)
                }, [
                  l("span", {
                    class: Y(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", P.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, Yk)
              ]),
              l("div", Kk, [
                l("span", Zk, V(b(P.product_ids)), 1)
              ])
            ]),
            l("div", Jk, [
              l("div", Qk, [
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (x) => f.value = P
                }, [
                  K(I(ef), { class: "h-4 w-4" })
                ], 8, eE),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (x) => _(P)
                }, [
                  K(I(Wd), { class: "h-4 w-4" })
                ], 8, tE),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (x) => L(P)
                }, [
                  K(I(Wo), { class: "h-4 w-4" })
                ], 8, nE),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (x) => S(P)
                }, [
                  K(I(ln), { class: "h-4 w-4" })
                ], 8, rE),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (x) => F(P)
                }, [
                  K(I(Xd), { class: "h-4 w-4" })
                ], 8, oE)
              ]),
              l("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (x) => d.value = P
              }, [
                K(I(Zd), { class: "h-3.5 w-3.5" }),
                k[18] || (k[18] = l("span", null, "Editar Visual", -1))
              ], 8, iE)
            ])
          ]))), 128))
        ])) : (z(), T("div", Vk, [
          l("div", jk, [
            K(I(Bn), { class: "h-6 w-6" })
          ]),
          k[16] || (k[16] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          k[17] || (k[17] = l("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      d.value ? (z(), Ie(kp, {
        key: 0,
        flow: d.value,
        onClose: k[7] || (k[7] = (P) => d.value = null),
        onSaved: E
      }, null, 8, ["flow"])) : te("", !0),
      f.value ? (z(), Ie(ZS, {
        key: 1,
        flow: f.value,
        onClose: k[8] || (k[8] = (P) => f.value = null),
        onSaved: E
      }, null, 8, ["flow"])) : te("", !0),
      v.value ? (z(), Ie(Ek, {
        key: 2,
        flow: v.value,
        onClose: k[9] || (k[9] = (P) => v.value = null),
        onTested: A
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, sE = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, lE = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, uE = { class: "flex items-center gap-2" }, cE = ["disabled"], dE = { class: "mt-4 grid grid-cols-3 gap-3" }, fE = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, pE = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, hE = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, mE = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, vE = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, gE = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, yE = { class: "mt-4 flex flex-wrap items-end gap-2" }, bE = { class: "w-48" }, xE = { class: "w-48" }, wE = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, _E = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, SE = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, kE = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, EE = {
  key: 3,
  class: "py-10 text-center"
}, $E = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, zE = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, PE = { class: "w-full text-left text-xs" }, CE = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, AE = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, TE = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, OE = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, NE = { class: "px-3 py-2.5" }, IE = { class: "px-3 py-2.5" }, RE = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, ME = ["title"], DE = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, FE = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, BE = { class: "px-3 py-2.5" }, LE = ["onClick"], UE = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = X([]), r = X([]), o = X({ all: 0, buyers: 0, imported: 0 }), i = X(!0), a = X(""), s = X(""), c = X("all"), u = X([]), d = X("or"), f = X([]), v = X(""), y = X(!1), p = J(() => r.value.map((A) => ({ value: A.name, label: A.name }))), m = J(() => {
      const A = v.value.trim().toLowerCase();
      return n.value.filter(($) => c.value === "buyer" && $.source !== "buyer" || c.value === "imported" && $.source !== "imported" || u.value.length && !(d.value === "and" ? u.value.every((_) => $.products.includes(_)) : $.products.some((_) => u.value.includes(_))) || f.value.length && $.products.some((w) => f.value.includes(w)) ? !1 : !A || `${$.name} ${$.phone} ${$.email}`.toLowerCase().includes(A));
    });
    async function h() {
      i.value = !0, a.value = "";
      try {
        const [A, $] = await Promise.all([Te.contacts(), Te.products()]);
        n.value = A.contacts || [], o.value = A.counts || o.value, r.value = $.products || [];
      } catch (A) {
        a.value = A.message;
      } finally {
        i.value = !1;
      }
    }
    Ze(h);
    const b = "\uFEFF";
    function E() {
      const A = t.map((L) => L.join(",")).join(`\r
`), $ = new Blob([b + A], { type: "text/csv;charset=utf-8" }), w = URL.createObjectURL($), _ = document.createElement("a");
      _.href = w, _.download = "zaprei-modelo-importacao.csv", _.click(), URL.revokeObjectURL(w);
    }
    async function g(A) {
      const $ = A.target.files?.[0];
      if ($) {
        y.value = !0, a.value = "", s.value = "";
        try {
          const { imported: w } = await Te.importContacts($);
          s.value = `${w} contato(s) importado(s).`, await h();
        } catch (w) {
          a.value = w.message;
        } finally {
          y.value = !1, A.target.value = "";
        }
      }
    }
    async function S(A) {
      if (window.confirm(`Remover ${A.name}?`)) {
        a.value = "";
        try {
          await Te.deleteContact(A.id), await h();
        } catch ($) {
          a.value = $.message;
        }
      }
    }
    return (A, $) => (z(), T("div", sE, [
      l("div", lE, [
        $[6] || ($[6] = l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        l("div", uE, [
          l("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: E
          }, [
            K(I(Xd), { class: "h-4 w-4" }),
            $[5] || ($[5] = l("span", null, "Baixar exemplo", -1))
          ]),
          l("label", {
            class: Y(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            K(I(nf), { class: "h-4 w-4" }),
            l("span", null, V(y.value ? "Importando…" : "Importar CSV"), 1),
            l("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: g
            }, null, 40, cE)
          ], 2)
        ])
      ]),
      l("div", dE, [
        l("div", fE, [
          l("div", pE, V(o.value.all), 1),
          $[7] || ($[7] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        l("div", hE, [
          l("div", mE, V(o.value.buyers), 1),
          $[8] || ($[8] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        l("div", vE, [
          l("div", gE, V(o.value.imported), 1),
          $[9] || ($[9] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      l("div", yE, [
        l("div", null, [
          $[11] || ($[11] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ce(l("select", {
            "onUpdate:modelValue": $[0] || ($[0] = (w) => c.value = w),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [...$[10] || ($[10] = [
            l("option", { value: "all" }, "Todas as origens", -1),
            l("option", { value: "buyer" }, "Apenas compradores", -1),
            l("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [ut, c.value]
          ])
        ]),
        l("div", bE, [
          $[12] || ($[12] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          K(ur, {
            modelValue: u.value,
            "onUpdate:modelValue": $[1] || ($[1] = (w) => u.value = w),
            mode: d.value,
            "onUpdate:mode": $[2] || ($[2] = (w) => d.value = w),
            options: p.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        l("div", xE, [
          $[13] || ($[13] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          K(ur, {
            modelValue: f.value,
            "onUpdate:modelValue": $[3] || ($[3] = (w) => f.value = w),
            options: p.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ce(l("input", {
          "onUpdate:modelValue": $[4] || ($[4] = (w) => v.value = w),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [xe, v.value]
        ]),
        l("span", wE, V(m.value.length) + " de " + V(n.value.length) + " contato(s)", 1)
      ]),
      $[17] || ($[17] = l("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        Be(" O CSV aceita as colunas "),
        l("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        Be(" (máximo de 10 MB). ")
      ], -1)),
      a.value ? (z(), T("p", _E, V(a.value), 1)) : s.value ? (z(), T("p", SE, V(s.value), 1)) : te("", !0),
      i.value ? (z(), T("div", kE, [
        K(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        $[14] || ($[14] = l("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : m.value.length ? (z(), T("div", zE, [
        l("table", PE, [
          $[16] || ($[16] = l("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            l("tr", null, [
              l("th", { class: "px-3 py-2.5" }, "Contato"),
              l("th", { class: "px-3 py-2.5" }, "Telefone"),
              l("th", { class: "px-3 py-2.5" }, "E-mail"),
              l("th", { class: "px-3 py-2.5" }, "Origem"),
              l("th", { class: "px-3 py-2.5" }, "Produtos"),
              l("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          l("tbody", CE, [
            (z(!0), T(ge, null, Re(m.value, (w) => (z(), T("tr", {
              key: w.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              l("td", AE, V(w.name), 1),
              l("td", TE, V(w.phone), 1),
              l("td", OE, V(w.email || "—"), 1),
              l("td", NE, [
                l("span", {
                  class: Y(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", w.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, V(w.origin), 3)
              ]),
              l("td", IE, [
                w.products.length ? (z(), T("div", RE, [
                  (z(!0), T(ge, null, Re(w.products.slice(0, 2), (_) => (z(), T("span", {
                    key: _,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: _
                  }, V(_), 9, ME))), 128)),
                  w.products.length > 2 ? (z(), T("span", DE, "+" + V(w.products.length - 2), 1)) : te("", !0)
                ])) : (z(), T("span", FE, "—"))
              ]),
              l("td", BE, [
                w.can_delete ? (z(), T("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (_) => S(w)
                }, [
                  K(I(Wo), { class: "h-3.5 w-3.5" })
                ], 8, LE)) : te("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", EE, [
        l("div", $E, [
          K(I(ys), { class: "h-6 w-6" })
        ]),
        $[15] || ($[15] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, qE = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, VE = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, jE = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, HE = { class: "flex items-center gap-3" }, GE = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, WE = { class: "flex items-center gap-2" }, XE = { key: 1 }, YE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, KE = { class: "flex-1 overflow-y-auto p-6" }, ZE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, JE = { class: "space-y-2" }, QE = { class: "grid grid-cols-2 gap-3" }, e5 = { class: "flex items-center gap-2" }, t5 = { class: "flex items-center gap-2" }, n5 = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, r5 = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, o5 = ["min"], i5 = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, a5 = { class: "flex items-center justify-between" }, s5 = { class: "flex items-center gap-2" }, l5 = { class: "text-xs font-bold text-emerald-400" }, u5 = {
  key: 1,
  class: "space-y-4"
}, c5 = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, d5 = { class: "dark space-y-3" }, f5 = { class: "relative" }, p5 = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, h5 = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, m5 = { class: "text-xs font-normal text-zinc-500" }, v5 = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, g5 = { class: "w-full text-left text-xs" }, y5 = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, b5 = { class: "w-10 px-3 py-2.5 text-center" }, x5 = ["checked"], w5 = { class: "divide-y divide-zinc-800/60" }, _5 = ["onClick"], S5 = ["checked", "onChange"], k5 = { class: "px-3 py-2" }, E5 = { class: "font-medium text-white" }, $5 = { class: "text-[11px] text-zinc-500" }, z5 = { class: "px-3 py-2 font-mono text-zinc-300" }, P5 = { class: "px-3 py-2" }, C5 = { class: "px-3 py-2" }, A5 = { class: "flex max-w-[200px] flex-wrap gap-1" }, T5 = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, O5 = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, N5 = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, I5 = {
  key: 2,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, R5 = { class: "dark" }, M5 = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, D5 = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, F5 = { class: "grid grid-cols-2 gap-3 text-xs" }, B5 = { class: "mt-0.5 font-semibold text-white" }, L5 = { class: "mt-0.5 text-base font-black text-emerald-400" }, U5 = { class: "mt-0.5 text-zinc-300" }, q5 = { class: "text-xs text-zinc-500" }, V5 = { class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300" }, j5 = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, H5 = { key: 1 }, G5 = { class: "flex items-center gap-3" }, W5 = ["disabled"], X5 = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = X(1), o = X(!1), i = X(""), a = X([]), s = X([]), c = X(!1), u = X("all"), d = X([]), f = X("or"), v = X([]), y = X(""), p = X({
      name: "",
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "" }
    }), m = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), h = fp.filter((P) => P.token.startsWith("{{customer."));
    let b = !0;
    Oe(() => p.value.message_data.mode, (P) => {
      if (b) {
        b = !1;
        return;
      }
      Object.assign(p.value.message_data, yp(P));
    });
    const E = J(() => s.value.map((P) => ({ value: P.name, label: P.name }))), g = J(() => {
      const P = y.value.trim().toLowerCase();
      return a.value.filter((x) => u.value === "buyers" && x.source !== "buyer" || u.value === "imported" && x.source !== "imported" || d.value.length && !(f.value === "and" ? d.value.every((D) => x.products.includes(D)) : x.products.some((D) => d.value.includes(D))) || v.value.length && x.products.some((N) => v.value.includes(N)) ? !1 : !P || `${x.name} ${x.phone}`.toLowerCase().includes(P));
    }), S = J(() => g.value.length > 0 && g.value.every((P) => p.value.selected_contact_keys.includes(P.id)));
    function A(P) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(P) ? x.filter((N) => N !== P) : [...x, P];
    }
    function $() {
      const P = g.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...P])];
    }
    function w() {
      const P = new Set(g.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !P.has(x));
    }
    const _ = J(() => a.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), L = J(() => ({
      customer: { name: _.value.name, first_name: (_.value.name || "").split(" ")[0] || _.value.name }
    })), F = J(() => {
      const P = p.value.message_data;
      return Ns(P.text || P.question || P.title || "", L.value);
    }), M = J(() => Ns(p.value.message_data.caption || "", L.value));
    async function C() {
      c.value = !0;
      try {
        const [P, x] = await Promise.all([Te.contacts(), Te.products()]);
        a.value = P.contacts || [], s.value = x.products || [];
      } catch {
        a.value = [];
      } finally {
        c.value = !1;
      }
    }
    function U() {
      if (i.value = "", r.value === 1) {
        if (!p.value.name.trim()) {
          i.value = "Informe um nome para a campanha.";
          return;
        }
        if (p.value.schedule_mode === "scheduled" && !p.value.scheduled_at) {
          i.value = "Escolha a data e o horário do disparo.";
          return;
        }
      }
      if (r.value === 2 && p.value.selected_contact_keys.length === 0) {
        i.value = "Selecione ao menos um destinatário para o disparo.";
        return;
      }
      if (r.value === 3) {
        const P = Sp(p.value.message_data, "Mensagem");
        if (P.length) {
          i.value = P[0];
          return;
        }
      }
      r.value++;
    }
    async function k() {
      o.value = !0, i.value = "";
      try {
        await Te.createCampaign({
          name: p.value.name,
          message_data: p.value.message_data,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (P) {
        i.value = P.message;
      } finally {
        o.value = !1;
      }
    }
    return Ze(C), (P, x) => (z(), T("div", qE, [
      l("div", VE, [
        l("div", jE, [
          l("div", HE, [
            l("div", GE, [
              K(I(ln), { class: "h-5 w-5" })
            ]),
            x[14] || (x[14] = l("div", null, [
              l("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              l("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          l("div", WE, [
            (z(), T(ge, null, Re(4, (N) => l("div", {
              key: N,
              class: Y(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === N ? "bg-emerald-500 text-zinc-950" : r.value > N ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > N ? (z(), Ie(I(Hd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (z(), T("span", XE, V(N), 1))
            ], 2)), 64))
          ])
        ]),
        i.value ? (z(), T("div", YE, [
          K(I(Gd), { class: "h-4 w-4 shrink-0" }),
          l("span", null, V(i.value), 1)
        ])) : te("", !0),
        l("div", KE, [
          r.value === 1 ? (z(), T("div", ZE, [
            l("div", null, [
              x[15] || (x[15] = l("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ce(l("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (N) => p.value.name = N),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [xe, p.value.name]
              ]),
              x[16] || (x[16] = l("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            l("div", JE, [
              x[23] || (x[23] = l("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              l("div", QE, [
                l("button", {
                  type: "button",
                  class: Y(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (N) => p.value.schedule_mode = "immediate")
                }, [
                  l("div", e5, [
                    K(I(Bn), { class: "h-4 w-4 text-emerald-400" }),
                    x[17] || (x[17] = l("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[18] || (x[18] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                l("button", {
                  type: "button",
                  class: Y(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (N) => p.value.schedule_mode = "scheduled")
                }, [
                  l("div", t5, [
                    K(I(Zi), { class: "h-4 w-4 text-emerald-400" }),
                    x[19] || (x[19] = l("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[20] || (x[20] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (z(), T("div", n5, [
                l("label", r5, [
                  K(I(Go), { class: "h-3.5 w-3.5" }),
                  x[21] || (x[21] = l("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ce(l("input", {
                  "onUpdate:modelValue": x[3] || (x[3] = (N) => p.value.scheduled_at = N),
                  type: "datetime-local",
                  min: m.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, o5), [
                  [xe, p.value.scheduled_at]
                ]),
                x[22] || (x[22] = l("p", { class: "text-[11px] text-zinc-400" }, [
                  Be(" A campanha ficará com status "),
                  l("strong", { class: "text-purple-400" }, "Agendada"),
                  Be(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : te("", !0)
            ]),
            l("div", i5, [
              l("div", a5, [
                l("div", s5, [
                  K(I(O0), { class: "h-4 w-4 text-emerald-400" }),
                  x[24] || (x[24] = l("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                l("span", l5, V(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ce(l("input", {
                "onUpdate:modelValue": x[4] || (x[4] = (N) => p.value.throttle_seconds = N),
                type: "range",
                min: "3",
                max: "30",
                step: "1",
                class: "w-full cursor-pointer accent-emerald-500"
              }, null, 512), [
                [
                  xe,
                  p.value.throttle_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              x[25] || (x[25] = l("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (z(), T("div", u5, [
            l("div", c5, [
              l("div", d5, [
                l("div", null, [
                  x[26] || (x[26] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  K(ur, {
                    modelValue: d.value,
                    "onUpdate:modelValue": x[5] || (x[5] = (N) => d.value = N),
                    mode: f.value,
                    "onUpdate:mode": x[6] || (x[6] = (N) => f.value = N),
                    options: E.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                l("div", null, [
                  x[27] || (x[27] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  K(ur, {
                    modelValue: v.value,
                    "onUpdate:modelValue": x[7] || (x[7] = (N) => v.value = N),
                    options: E.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[28] || (x[28] = l("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              l("div", null, [
                x[30] || (x[30] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ce(l("select", {
                  "onUpdate:modelValue": x[8] || (x[8] = (N) => u.value = N),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[29] || (x[29] = [
                  l("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  l("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  l("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [ut, u.value]
                ]),
                x[31] || (x[31] = l("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                l("div", f5, [
                  K(I(Br), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ce(l("input", {
                    "onUpdate:modelValue": x[9] || (x[9] = (N) => y.value = N),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [xe, y.value]
                  ])
                ])
              ]),
              l("div", p5, [
                l("div", null, [
                  x[32] || (x[32] = l("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  l("div", h5, [
                    Be(V(p.value.selected_contact_keys.length) + " ", 1),
                    l("span", m5, "de " + V(g.value.length) + " filtrados", 1)
                  ])
                ]),
                l("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  l("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: $
                  }, "Selecionar Todos"),
                  x[33] || (x[33] = l("span", { class: "text-zinc-600" }, "•", -1)),
                  l("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: w
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            l("div", v5, [
              l("table", g5, [
                l("thead", y5, [
                  l("tr", null, [
                    l("th", b5, [
                      l("input", {
                        type: "checkbox",
                        checked: S.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[10] || (x[10] = (N) => S.value ? w() : $())
                      }, null, 40, x5)
                    ]),
                    x[34] || (x[34] = l("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[35] || (x[35] = l("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[36] || (x[36] = l("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[37] || (x[37] = l("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                l("tbody", w5, [
                  (z(!0), T(ge, null, Re(g.value, (N) => (z(), T("tr", {
                    key: N.id,
                    class: Y(["cursor-pointer transition", p.value.selected_contact_keys.includes(N.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (D) => A(N.id)
                  }, [
                    l("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[11] || (x[11] = en(() => {
                      }, ["stop"]))
                    }, [
                      l("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(N.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (D) => A(N.id)
                      }, null, 40, S5)
                    ]),
                    l("td", k5, [
                      l("div", E5, V(N.name), 1),
                      l("div", $5, V(N.email || "-"), 1)
                    ]),
                    l("td", z5, V(N.phone), 1),
                    l("td", P5, [
                      l("span", {
                        class: Y(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", N.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, V(N.origin), 3)
                    ]),
                    l("td", C5, [
                      l("div", A5, [
                        (z(!0), T(ge, null, Re(N.products.slice(0, 2), (D) => (z(), T("span", {
                          key: D,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, V(D), 1))), 128)),
                        N.products.length > 2 ? (z(), T("span", T5, "+" + V(N.products.length - 2), 1)) : te("", !0)
                      ])
                    ])
                  ], 10, _5))), 128))
                ])
              ]),
              c.value ? (z(), T("p", O5, "Carregando contatos...")) : g.value.length ? te("", !0) : (z(), T("p", N5, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (z(), T("div", I5, [
            l("div", R5, [
              K(wp, {
                data: p.value.message_data,
                "show-recipient": !1,
                variables: I(h)
              }, null, 8, ["data", "variables"])
            ]),
            l("div", null, [
              x[38] || (x[38] = l("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
              K(fl, {
                text: F.value,
                caption: M.value,
                mode: p.value.message_data.mode,
                "recipient-name": _.value.name
              }, null, 8, ["text", "caption", "mode", "recipient-name"])
            ])
          ])) : r.value === 4 ? (z(), T("div", M5, [
            l("div", D5, [
              x[43] || (x[43] = l("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              l("div", F5, [
                l("div", null, [
                  x[39] || (x[39] = l("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  l("p", B5, V(p.value.name), 1)
                ]),
                l("div", null, [
                  x[40] || (x[40] = l("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  l("p", L5, V(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                l("div", null, [
                  x[41] || (x[41] = l("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  l("p", {
                    class: Y(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (z(), Ie(At(p.value.schedule_mode === "scheduled" ? I(Zi) : I(Bn)), { class: "h-3.5 w-3.5" })),
                    l("span", null, V(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                l("div", null, [
                  x[42] || (x[42] = l("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  l("p", U5, "~" + V(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              l("div", null, [
                l("span", q5, "Prévia do Conteúdo (" + V(p.value.message_data.mode) + "):", 1),
                l("div", V5, V(F.value || M.value || "—"), 1)
              ])
            ])
          ])) : te("", !0)
        ]),
        l("div", j5, [
          r.value > 1 ? (z(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[12] || (x[12] = (N) => r.value--)
          }, [
            K(I(jd), { class: "mr-2 h-4 w-4" }),
            x[44] || (x[44] = l("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (z(), T("div", H5)),
          l("div", G5, [
            l("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[13] || (x[13] = (N) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: U
            }, [
              x[45] || (x[45] = l("span", null, "Próximo", -1)),
              K(I(_0), { class: "ml-2 h-4 w-4" })
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: Y(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: k
            }, [
              o.value ? (z(), Ie(I(En), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (z(), Ie(At(p.value.schedule_mode === "scheduled" ? I(Zi) : I(ln)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              l("span", null, V(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, W5))
          ])
        ])
      ])
    ]));
  }
}, Y5 = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, K5 = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, Z5 = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, J5 = { class: "flex items-center gap-3" }, Q5 = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, e$ = { class: "text-lg font-bold text-white" }, t$ = { class: "mt-0.5 text-xs text-zinc-400" }, n$ = { class: "flex items-center gap-2" }, r$ = ["disabled"], o$ = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, i$ = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, a$ = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, s$ = { class: "flex items-center justify-between text-xs" }, l$ = { class: "flex items-center gap-2" }, u$ = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, c$ = { class: "font-bold text-white" }, d$ = { class: "font-mono font-bold text-emerald-400" }, f$ = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, p$ = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, h$ = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, m$ = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, v$ = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, g$ = { class: "mt-0.5 text-xl font-bold text-white" }, y$ = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, b$ = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, x$ = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, w$ = { class: "mt-0.5 text-xl font-bold text-amber-400" }, _$ = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, S$ = { class: "mt-0.5 text-xl font-bold text-red-400" }, k$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, E$ = { class: "relative max-w-sm flex-1" }, $$ = { class: "flex-1 overflow-y-auto p-6" }, z$ = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, P$ = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, C$ = { class: "w-full text-left text-xs" }, A$ = { class: "divide-y divide-zinc-800/60" }, T$ = { class: "px-4 py-3" }, O$ = { class: "font-medium text-white" }, N$ = ["title"], I$ = { class: "px-4 py-3 font-mono text-zinc-300" }, R$ = { class: "px-4 py-3" }, M$ = { class: "px-4 py-3 text-right text-zinc-400" }, D$ = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = X(null), i = X([]), a = X(!0), s = X(!1), c = X(""), u = X(""), d = X(""), f = J(() => {
      const h = u.value.trim().toLowerCase();
      return i.value.filter((b) => d.value && b.status !== d.value ? !1 : !h || `${b.name || ""} ${b.phone}`.toLowerCase().includes(h));
    }), v = (h) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[h] || "border-blue-500/20 bg-blue-500/10 text-blue-400", y = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const h = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(h / o.value.total_recipients * 100));
    });
    async function p() {
      a.value = !0, c.value = "";
      try {
        const h = await Te.campaign(n.campaignId);
        o.value = h.campaign, i.value = h.sends || [];
      } catch (h) {
        c.value = h.message;
      } finally {
        a.value = !1;
      }
    }
    async function m() {
      s.value = !0, c.value = "";
      try {
        await Te.cancelCampaign(n.campaignId), r("changed"), await p();
      } catch (h) {
        c.value = h.message;
      } finally {
        s.value = !1;
      }
    }
    return Ze(p), (h, b) => (z(), T("div", Y5, [
      l("div", K5, [
        l("div", Z5, [
          l("div", J5, [
            l("div", Q5, [
              K(I(Br), { class: "h-5 w-5" })
            ]),
            l("div", null, [
              l("div", e$, V(o.value?.name || "Campanha"), 1),
              l("p", t$, V(o.value ? I(xp)[o.value.status] || o.value.status : "—"), 1)
            ])
          ]),
          l("div", n$, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (z(), T("button", {
              key: 0,
              type: "button",
              disabled: s.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: m
            }, [
              K(I(S0), { class: "h-3.5 w-3.5" }),
              l("span", null, V(s.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, r$)) : te("", !0),
            l("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: b[0] || (b[0] = (E) => r("close"))
            }, [
              K(I(Vt), { class: "h-4 w-4" })
            ])
          ])
        ]),
        a.value ? (z(), T("p", o$, "Carregando detalhes…")) : c.value ? (z(), T("p", i$, V(c.value), 1)) : o.value ? (z(), T(ge, { key: 2 }, [
          l("div", a$, [
            l("div", s$, [
              l("div", l$, [
                o.value.status === "running" ? (z(), T("span", u$, [...b[3] || (b[3] = [
                  l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  l("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : te("", !0),
                l("span", c$, V(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              l("span", d$, V(y.value) + "%", 1)
            ]),
            l("div", f$, [
              l("div", {
                class: Y(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${y.value}%` })
              }, null, 6)
            ]),
            l("div", p$, [
              l("span", null, V(o.value.sent_count) + " de " + V(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? (z(), T("span", h$, " 🛡️ Intervalo randômico (jitter) ativo ")) : te("", !0)
            ])
          ]),
          l("div", m$, [
            l("div", v$, [
              b[4] || (b[4] = l("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              l("div", g$, V(o.value.total_recipients), 1)
            ]),
            l("div", y$, [
              b[5] || (b[5] = l("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              l("div", b$, V(o.value.sent_count), 1)
            ]),
            l("div", x$, [
              b[6] || (b[6] = l("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              l("div", w$, V(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            l("div", _$, [
              b[7] || (b[7] = l("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              l("div", S$, V(o.value.error_count), 1)
            ])
          ]),
          l("div", k$, [
            l("div", E$, [
              K(I(Br), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ce(l("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (E) => u.value = E),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [xe, u.value]
              ])
            ]),
            ce(l("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (E) => d.value = E),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...b[8] || (b[8] = [
              Bd('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [ut, d.value]
            ])
          ]),
          l("div", $$, [
            f.value.length ? (z(), T("div", P$, [
              l("table", C$, [
                b[9] || (b[9] = l("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  l("tr", null, [
                    l("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    l("th", { class: "px-4 py-2.5" }, "Telefone"),
                    l("th", { class: "px-4 py-2.5" }, "Status"),
                    l("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                l("tbody", A$, [
                  (z(!0), T(ge, null, Re(f.value, (E) => (z(), T("tr", {
                    key: E.id
                  }, [
                    l("td", T$, [
                      l("div", O$, V(E.name || "—"), 1),
                      E.error_message ? (z(), T("div", {
                        key: 0,
                        title: E.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, V(E.error_message), 9, N$)) : te("", !0)
                    ]),
                    l("td", I$, V(E.phone), 1),
                    l("td", R$, [
                      l("span", {
                        class: Y(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(E.status)])
                      }, V(I(ow)[E.status] || E.status), 3)
                    ]),
                    l("td", M$, V(E.sent_at ? new Date(E.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (z(), T("div", z$, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : te("", !0)
      ])
    ]));
  }
}, F$ = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, B$ = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, L$ = { class: "relative w-64" }, U$ = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, q$ = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, V$ = {
  key: 2,
  class: "py-10 text-center"
}, j$ = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, H$ = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, G$ = { class: "w-full text-left text-xs" }, W$ = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, X$ = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, Y$ = { class: "px-3 py-2.5" }, K$ = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, Z$ = { class: "px-3 py-2.5" }, J$ = { class: "px-3 py-2.5" }, Q$ = { class: "flex items-center gap-2" }, ez = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, tz = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, nz = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, rz = { class: "px-3 py-2.5" }, oz = ["onClick"], iz = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = X([]), n = X(!0), r = X(""), o = X(""), i = X(!1), a = X(null), s = (d) => ({
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
        t.value = (await Te.campaigns()).campaigns || [];
      } catch (d) {
        r.value = d.message;
      } finally {
        n.value = !1;
      }
    }
    return Ze(u), (d, f) => (z(), T("div", F$, [
      l("div", B$, [
        l("div", L$, [
          K(I(Br), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ce(l("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (v) => o.value = v),
            type: "text",
            placeholder: "Buscar campanhas...",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [xe, o.value]
          ])
        ]),
        l("button", {
          type: "button",
          class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
          onClick: f[1] || (f[1] = (v) => i.value = !0)
        }, [
          K(I(Qd), { class: "h-4 w-4" }),
          f[4] || (f[4] = l("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (z(), T("p", U$, V(r.value), 1)) : te("", !0),
      n.value ? (z(), T("div", q$, [
        K(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = l("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : c.value.length ? (z(), T("div", H$, [
        l("table", G$, [
          f[9] || (f[9] = l("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            l("tr", null, [
              l("th", { class: "px-3 py-2.5" }, "Campanha"),
              l("th", { class: "px-3 py-2.5" }, "Status"),
              l("th", { class: "px-3 py-2.5" }, "Destinatários"),
              l("th", { class: "px-3 py-2.5" }, "Enviados"),
              l("th", { class: "px-3 py-2.5" }, "Falhas"),
              l("th", { class: "px-3 py-2.5" }, "Agendada para"),
              l("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          l("tbody", W$, [
            (z(!0), T(ge, null, Re(c.value, (v) => (z(), T("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              l("td", X$, V(v.name), 1),
              l("td", Y$, [
                l("span", {
                  class: Y(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", s(v.status)])
                }, [
                  v.status === "running" ? (z(), T("span", K$, [...f[7] || (f[7] = [
                    l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    l("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : te("", !0),
                  Be(" " + V(I(xp)[v.status] || v.status), 1)
                ], 2)
              ]),
              l("td", Z$, V(v.total_recipients), 1),
              l("td", J$, [
                l("div", Q$, [
                  l("span", ez, V(v.sent_count) + "/" + V(v.total_recipients), 1),
                  l("div", tz, [
                    l("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              l("td", {
                class: Y(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, V(v.error_count), 3),
              l("td", nz, V(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              l("td", rz, [
                l("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => a.value = v.id
                }, [
                  K(I(E0), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = l("span", null, "Detalhes", -1))
                ], 8, oz)
              ])
            ]))), 128))
          ])
        ])
      ])) : (z(), T("div", V$, [
        l("div", j$, [
          K(I(ln), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      i.value ? (z(), Ie(X5, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => i.value = !1),
        onCreated: u
      })) : te("", !0),
      a.value ? (z(), Ie(D$, {
        key: 5,
        "campaign-id": a.value,
        onClose: f[3] || (f[3] = (v) => a.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : te("", !0)
    ]));
  }
}, az = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, sz = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, lz = ["disabled"], uz = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, cz = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, dz = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, fz = {
  key: 3,
  class: "py-10 text-center"
}, pz = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, hz = {
  key: 4,
  class: "mt-4 space-y-2"
}, mz = { class: "flex items-center gap-3" }, vz = { class: "font-semibold text-zinc-900 dark:text-white" }, gz = { class: "text-zinc-500 dark:text-zinc-400" }, yz = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, bz = ["title"], xz = ["title"], wz = { class: "flex items-center gap-2" }, _z = ["disabled", "onClick"], Sz = {
  __name: "RunsPanel",
  setup(e) {
    const t = X([]), n = X(!0), r = X(""), o = X(""), i = X(null), a = (d) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[d] || "bg-amber-500", s = (d) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[d] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function c() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Te.runs()).runs || [];
      } catch (d) {
        r.value = d.message;
      } finally {
        n.value = !1;
      }
    }
    async function u(d) {
      if (window.confirm("Tentar novamente do início do fluxo? Blocos de mensagem já entregues antes da falha podem ser reenviados.")) {
        i.value = d.id, r.value = "", o.value = "";
        try {
          await Te.retryRun(d.id), o.value = `Execução #${d.id} reiniciada.`, await c();
        } catch (f) {
          r.value = f.message;
        } finally {
          i.value = null;
        }
      }
    }
    return Ze(c), (d, f) => (z(), T("div", az, [
      l("div", sz, [
        f[0] || (f[0] = l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        l("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: c
        }, " Atualizar ", 8, lz)
      ]),
      r.value ? (z(), T("p", uz, V(r.value), 1)) : o.value ? (z(), T("p", cz, V(o.value), 1)) : te("", !0),
      n.value ? (z(), T("div", dz, [
        K(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = l("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (z(), T("div", hz, [
        (z(!0), T(ge, null, Re(t.value, (v) => (z(), T("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          l("div", mz, [
            l("span", {
              class: Y(["h-2 w-2 rounded-full", a(v.status)])
            }, null, 2),
            l("div", null, [
              l("div", vz, "Fluxo #" + V(v.flow_id), 1),
              l("div", gz, V(I(Mo)(v.event_class)) + " • " + V(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (z(), T("div", yz, [
                K(I(z0), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                l("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + V(v.context.last_reply) + "”", 9, bz)
              ])) : te("", !0),
              v.last_error ? (z(), T("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, V(v.last_error), 9, xz)) : te("", !0)
            ])
          ]),
          l("div", wz, [
            v.status === "failed" ? (z(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: i.value === v.id,
              onClick: (y) => u(v)
            }, [
              K(I(A0), {
                class: Y(["h-3 w-3", { "animate-spin": i.value === v.id }])
              }, null, 8, ["class"]),
              l("span", null, V(i.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, _z)) : te("", !0),
            l("span", {
              class: Y(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", s(v.status)])
            }, V(I(iw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (z(), T("div", fz, [
        l("div", pz, [
          K(I(Yd), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, kz = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, Ez = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, $z = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, zz = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, Pz = { class: "flex flex-wrap items-center gap-3" }, Cz = { class: "text-xs font-bold" }, Az = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, Tz = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, Oz = { class: "flex items-center justify-between" }, Nz = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, Iz = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, Rz = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, Mz = { class: "flex items-center justify-between" }, Dz = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, Fz = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, Bz = { class: "flex items-center justify-between" }, Lz = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, Uz = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, qz = { class: "flex items-center justify-between" }, Vz = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, jz = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, Hz = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, Gz = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, Wz = ["onClick"], Xz = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, Yz = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Bn, component: aE },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: ln, component: iz },
      { id: "contacts", label: "Base de Contatos", icon: ys, component: UE },
      { id: "runs", label: "Execuções", icon: Yd, component: Sz },
      { id: "connection", label: "Conexão", icon: Jd, component: rf }
    ], n = X("flows"), r = X(null), o = X({ flows: 0, campaigns: 0, contacts: 0 }), i = X({
      flowsCount: 0,
      activeFlowsCount: 0,
      campaignsCount: 0,
      contactsCount: 0,
      runsCount: 0,
      runsSuccessRate: 100
    });
    async function a() {
      try {
        r.value = (await Te.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function s() {
      try {
        const [u, d, f, v] = await Promise.all([
          Te.flows().catch(() => ({ flows: [] })),
          Te.campaigns().catch(() => ({ campaigns: [] })),
          Te.contacts().catch(() => ({ counts: {} })),
          Te.runs().catch(() => ({ runs: [] }))
        ]), y = u.flows || [], p = d.campaigns || [], m = v.runs || [], h = f.counts?.all || 0;
        o.value = {
          flows: y.length,
          campaigns: p.length,
          contacts: h
        };
        const b = y.filter((S) => S.is_active).length, E = m.filter((S) => S.status === "completed").length, g = m.length ? Math.round(E / m.length * 100) : 100;
        i.value = {
          flowsCount: y.length,
          activeFlowsCount: b,
          campaignsCount: p.length,
          contactsCount: h,
          runsCount: m.length,
          runsSuccessRate: g
        };
      } catch {
      }
    }
    const c = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ze(() => {
      a(), s();
    }), (u, d) => (z(), T("div", kz, [
      l("div", Ez, [
        l("div", $z, [
          l("div", null, [
            l("div", zz, [
              K(I(Kd), { class: "h-3.5 w-3.5" }),
              d[5] || (d[5] = l("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            d[6] || (d[6] = l("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            d[7] || (d[7] = l("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          l("div", Pz, [
            l("div", {
              class: Y(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              l("div", {
                class: Y(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              l("div", null, [
                l("div", Cz, V(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                l("div", Az, V(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              l("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: d[0] || (d[0] = (f) => n.value = "connection")
              }, V(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        l("div", Tz, [
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[1] || (d[1] = (f) => n.value = "flows")
          }, [
            l("div", Oz, [
              d[8] || (d[8] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              l("div", Nz, [
                K(I(Bn), { class: "h-4 w-4" })
              ])
            ]),
            l("div", Iz, [
              Be(V(i.value.activeFlowsCount) + " ", 1),
              d[9] || (d[9] = l("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            l("div", Rz, " de " + V(i.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[2] || (d[2] = (f) => n.value = "campaigns")
          }, [
            l("div", Mz, [
              d[10] || (d[10] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              l("div", Dz, [
                K(I(ln), { class: "h-4 w-4" })
              ])
            ]),
            l("div", Fz, V(i.value.campaignsCount), 1),
            d[11] || (d[11] = l("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[3] || (d[3] = (f) => n.value = "contacts")
          }, [
            l("div", Bz, [
              d[12] || (d[12] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              l("div", Lz, [
                K(I(ys), { class: "h-4 w-4" })
              ])
            ]),
            l("div", Uz, V(i.value.contactsCount.toLocaleString("pt-BR")), 1),
            d[13] || (d[13] = l("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[4] || (d[4] = (f) => n.value = "runs")
          }, [
            l("div", qz, [
              d[14] || (d[14] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              l("div", Vz, [
                K(I(w0), { class: "h-4 w-4" })
              ])
            ]),
            l("div", jz, [
              Be(V(i.value.runsCount) + " ", 1),
              d[15] || (d[15] = l("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            l("div", Hz, [
              d[16] || (d[16] = l("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              l("span", null, V(i.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        l("div", Gz, [
          (z(), T(ge, null, Re(t, (f) => l("button", {
            key: f.id,
            type: "button",
            class: Y(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            (z(), Ie(At(f.icon), { class: "h-4 w-4" })),
            l("span", null, V(f.label), 1),
            c(f.id) !== null && c(f.id) > 0 ? (z(), T("span", {
              key: 0,
              class: Y(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, V(c(f.id)), 3)) : te("", !0)
          ], 10, Wz)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (z(), T("p", Xz, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : te("", !0),
      (z(), Ie(At(t.find((f) => f.id === n.value).component), gi({ key: n.value }, m0(n.value === "connection" ? { saved: a } : {})), null, 16))
    ]));
  }
}, Kz = { class: "space-y-4" }, Zz = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (z(), T("div", Kz, [
      K(rf, {
        onSaved: o[0] || (o[0] = (i) => n("saved"))
      }),
      o[1] || (o[1] = l("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          Be(" Fluxos, contatos e campanhas ficam no menu "),
          l("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          Be(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Ep = typeof global == "object" && global && global.Object === Object && global, Jz = typeof self == "object" && self && self.Object === Object && self, Rt = Ep || Jz || Function("return this")(), Xt = Rt.Symbol, $p = Object.prototype, Qz = $p.hasOwnProperty, eP = $p.toString, _r = Xt ? Xt.toStringTag : void 0;
function tP(e) {
  var t = Qz.call(e, _r), n = e[_r];
  try {
    e[_r] = void 0;
    var r = !0;
  } catch {
  }
  var o = eP.call(e);
  return r && (t ? e[_r] = n : delete e[_r]), o;
}
var nP = Object.prototype, rP = nP.toString;
function oP(e) {
  return rP.call(e);
}
var iP = "[object Null]", aP = "[object Undefined]", Lu = Xt ? Xt.toStringTag : void 0;
function Hn(e) {
  return e == null ? e === void 0 ? aP : iP : Lu && Lu in Object(e) ? tP(e) : oP(e);
}
function Yt(e) {
  return e != null && typeof e == "object";
}
var sP = "[object Symbol]";
function Pi(e) {
  return typeof e == "symbol" || Yt(e) && Hn(e) == sP;
}
function lP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Nt = Array.isArray, Uu = Xt ? Xt.prototype : void 0, qu = Uu ? Uu.toString : void 0;
function zp(e) {
  if (typeof e == "string")
    return e;
  if (Nt(e))
    return lP(e, zp) + "";
  if (Pi(e))
    return qu ? qu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var uP = /\s/;
function cP(e) {
  for (var t = e.length; t-- && uP.test(e.charAt(t)); )
    ;
  return t;
}
var dP = /^\s+/;
function fP(e) {
  return e && e.slice(0, cP(e) + 1).replace(dP, "");
}
function _t(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vu = NaN, pP = /^[-+]0x[0-9a-f]+$/i, hP = /^0b[01]+$/i, mP = /^0o[0-7]+$/i, vP = parseInt;
function ju(e) {
  if (typeof e == "number")
    return e;
  if (Pi(e))
    return Vu;
  if (_t(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _t(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = fP(e);
  var n = hP.test(e);
  return n || mP.test(e) ? vP(e.slice(2), n ? 2 : 8) : pP.test(e) ? Vu : +e;
}
function Pp(e) {
  return e;
}
var gP = "[object AsyncFunction]", yP = "[object Function]", bP = "[object GeneratorFunction]", xP = "[object Proxy]";
function pl(e) {
  if (!_t(e))
    return !1;
  var t = Hn(e);
  return t == yP || t == bP || t == gP || t == xP;
}
var ua = Rt["__core-js_shared__"], Hu = (function() {
  var e = /[^.]+$/.exec(ua && ua.keys && ua.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function wP(e) {
  return !!Hu && Hu in e;
}
var _P = Function.prototype, SP = _P.toString;
function Gn(e) {
  if (e != null) {
    try {
      return SP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var kP = /[\\^$.*+?()[\]{}|]/g, EP = /^\[object .+?Constructor\]$/, $P = Function.prototype, zP = Object.prototype, PP = $P.toString, CP = zP.hasOwnProperty, AP = RegExp(
  "^" + PP.call(CP).replace(kP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function TP(e) {
  if (!_t(e) || wP(e))
    return !1;
  var t = pl(e) ? AP : EP;
  return t.test(Gn(e));
}
function OP(e, t) {
  return e?.[t];
}
function Wn(e, t) {
  var n = OP(e, t);
  return TP(n) ? n : void 0;
}
var Is = Wn(Rt, "WeakMap"), Gu = Object.create, NP = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!_t(t))
      return {};
    if (Gu)
      return Gu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function IP(e, t, n) {
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
function RP(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var MP = 800, DP = 16, FP = Date.now;
function BP(e) {
  var t = 0, n = 0;
  return function() {
    var r = FP(), o = DP - (r - n);
    if (n = r, o > 0) {
      if (++t >= MP)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function LP(e) {
  return function() {
    return e;
  };
}
var ai = (function() {
  try {
    var e = Wn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), UP = ai ? function(e, t) {
  return ai(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: LP(t),
    writable: !0
  });
} : Pp, qP = BP(UP);
function VP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var jP = 9007199254740991, HP = /^(?:0|[1-9]\d*)$/;
function Ci(e, t) {
  var n = typeof e;
  return t = t ?? jP, !!t && (n == "number" || n != "symbol" && HP.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function hl(e, t, n) {
  t == "__proto__" && ai ? ai(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function oo(e, t) {
  return e === t || e !== e && t !== t;
}
var GP = Object.prototype, WP = GP.hasOwnProperty;
function ml(e, t, n) {
  var r = e[t];
  (!(WP.call(e, t) && oo(r, n)) || n === void 0 && !(t in e)) && hl(e, t, n);
}
function XP(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], c = void 0;
    c === void 0 && (c = e[s]), o ? hl(n, s, c) : ml(n, s, c);
  }
  return n;
}
var Wu = Math.max;
function YP(e, t, n) {
  return t = Wu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Wu(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), IP(e, this, s);
  };
}
function KP(e, t) {
  return qP(YP(e, t, Pp), e + "");
}
var ZP = 9007199254740991;
function vl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ZP;
}
function Ai(e) {
  return e != null && vl(e.length) && !pl(e);
}
function JP(e, t, n) {
  if (!_t(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ai(n) && Ci(t, n.length) : r == "string" && t in n) ? oo(n[t], e) : !1;
}
function QP(e) {
  return KP(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && JP(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var eC = Object.prototype;
function gl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || eC;
  return e === n;
}
function tC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var nC = "[object Arguments]";
function Xu(e) {
  return Yt(e) && Hn(e) == nC;
}
var Cp = Object.prototype, rC = Cp.hasOwnProperty, oC = Cp.propertyIsEnumerable, si = Xu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Xu : function(e) {
  return Yt(e) && rC.call(e, "callee") && !oC.call(e, "callee");
};
function iC() {
  return !1;
}
var Ap = typeof exports == "object" && exports && !exports.nodeType && exports, Yu = Ap && typeof module == "object" && module && !module.nodeType && module, aC = Yu && Yu.exports === Ap, Ku = aC ? Rt.Buffer : void 0, sC = Ku ? Ku.isBuffer : void 0, Xr = sC || iC, lC = "[object Arguments]", uC = "[object Array]", cC = "[object Boolean]", dC = "[object Date]", fC = "[object Error]", pC = "[object Function]", hC = "[object Map]", mC = "[object Number]", vC = "[object Object]", gC = "[object RegExp]", yC = "[object Set]", bC = "[object String]", xC = "[object WeakMap]", wC = "[object ArrayBuffer]", _C = "[object DataView]", SC = "[object Float32Array]", kC = "[object Float64Array]", EC = "[object Int8Array]", $C = "[object Int16Array]", zC = "[object Int32Array]", PC = "[object Uint8Array]", CC = "[object Uint8ClampedArray]", AC = "[object Uint16Array]", TC = "[object Uint32Array]", We = {};
We[SC] = We[kC] = We[EC] = We[$C] = We[zC] = We[PC] = We[CC] = We[AC] = We[TC] = !0;
We[lC] = We[uC] = We[wC] = We[cC] = We[_C] = We[dC] = We[fC] = We[pC] = We[hC] = We[mC] = We[vC] = We[gC] = We[yC] = We[bC] = We[xC] = !1;
function OC(e) {
  return Yt(e) && vl(e.length) && !!We[Hn(e)];
}
function yl(e) {
  return function(t) {
    return e(t);
  };
}
var Tp = typeof exports == "object" && exports && !exports.nodeType && exports, Ir = Tp && typeof module == "object" && module && !module.nodeType && module, NC = Ir && Ir.exports === Tp, ca = NC && Ep.process, cr = (function() {
  try {
    var e = Ir && Ir.require && Ir.require("util").types;
    return e || ca && ca.binding && ca.binding("util");
  } catch {
  }
})(), Zu = cr && cr.isTypedArray, bl = Zu ? yl(Zu) : OC, IC = Object.prototype, RC = IC.hasOwnProperty;
function Op(e, t) {
  var n = Nt(e), r = !n && si(e), o = !n && !r && Xr(e), i = !n && !r && !o && bl(e), a = n || r || o || i, s = a ? tC(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || RC.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ci(u, c))) && s.push(u);
  return s;
}
function Np(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var MC = Np(Object.keys, Object), DC = Object.prototype, FC = DC.hasOwnProperty;
function BC(e) {
  if (!gl(e))
    return MC(e);
  var t = [];
  for (var n in Object(e))
    FC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function LC(e) {
  return Ai(e) ? Op(e) : BC(e);
}
function UC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var qC = Object.prototype, VC = qC.hasOwnProperty;
function jC(e) {
  if (!_t(e))
    return UC(e);
  var t = gl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !VC.call(e, r)) || n.push(r);
  return n;
}
function Ip(e) {
  return Ai(e) ? Op(e, !0) : jC(e);
}
var HC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, GC = /^\w*$/;
function WC(e, t) {
  if (Nt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pi(e) ? !0 : GC.test(e) || !HC.test(e) || t != null && e in Object(t);
}
var Yr = Wn(Object, "create");
function XC() {
  this.__data__ = Yr ? Yr(null) : {}, this.size = 0;
}
function YC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var KC = "__lodash_hash_undefined__", ZC = Object.prototype, JC = ZC.hasOwnProperty;
function QC(e) {
  var t = this.__data__;
  if (Yr) {
    var n = t[e];
    return n === KC ? void 0 : n;
  }
  return JC.call(t, e) ? t[e] : void 0;
}
var e3 = Object.prototype, t3 = e3.hasOwnProperty;
function n3(e) {
  var t = this.__data__;
  return Yr ? t[e] !== void 0 : t3.call(t, e);
}
var r3 = "__lodash_hash_undefined__";
function o3(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Yr && t === void 0 ? r3 : t, this;
}
function Vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vn.prototype.clear = XC;
Vn.prototype.delete = YC;
Vn.prototype.get = QC;
Vn.prototype.has = n3;
Vn.prototype.set = o3;
function i3() {
  this.__data__ = [], this.size = 0;
}
function Ti(e, t) {
  for (var n = e.length; n--; )
    if (oo(e[n][0], t))
      return n;
  return -1;
}
var a3 = Array.prototype, s3 = a3.splice;
function l3(e) {
  var t = this.__data__, n = Ti(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : s3.call(t, n, 1), --this.size, !0;
}
function u3(e) {
  var t = this.__data__, n = Ti(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function c3(e) {
  return Ti(this.__data__, e) > -1;
}
function d3(e, t) {
  var n = this.__data__, r = Ti(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
cn.prototype.clear = i3;
cn.prototype.delete = l3;
cn.prototype.get = u3;
cn.prototype.has = c3;
cn.prototype.set = d3;
var Kr = Wn(Rt, "Map");
function f3() {
  this.size = 0, this.__data__ = {
    hash: new Vn(),
    map: new (Kr || cn)(),
    string: new Vn()
  };
}
function p3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Oi(e, t) {
  var n = e.__data__;
  return p3(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function h3(e) {
  var t = Oi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function m3(e) {
  return Oi(this, e).get(e);
}
function v3(e) {
  return Oi(this, e).has(e);
}
function g3(e, t) {
  var n = Oi(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dn.prototype.clear = f3;
dn.prototype.delete = h3;
dn.prototype.get = m3;
dn.prototype.has = v3;
dn.prototype.set = g3;
var y3 = "Expected a function";
function xl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(y3);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (xl.Cache || dn)(), n;
}
xl.Cache = dn;
var b3 = 500;
function x3(e) {
  var t = xl(e, function(r) {
    return n.size === b3 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var w3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _3 = /\\(\\)?/g, S3 = x3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(w3, function(n, r, o, i) {
    t.push(o ? i.replace(_3, "$1") : r || n);
  }), t;
});
function Rp(e) {
  return e == null ? "" : zp(e);
}
function wl(e, t) {
  return Nt(e) ? e : WC(e, t) ? [e] : S3(Rp(e));
}
function _l(e) {
  if (typeof e == "string" || Pi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function k3(e, t) {
  t = wl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[_l(t[n++])];
  return n && n == r ? e : void 0;
}
function xt(e, t, n) {
  var r = e == null ? void 0 : k3(e, t);
  return r === void 0 ? n : r;
}
function E3(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Mp = Np(Object.getPrototypeOf, Object), $3 = "[object Object]", z3 = Function.prototype, P3 = Object.prototype, Dp = z3.toString, C3 = P3.hasOwnProperty, A3 = Dp.call(Object);
function T3(e) {
  if (!Yt(e) || Hn(e) != $3)
    return !1;
  var t = Mp(e);
  if (t === null)
    return !0;
  var n = C3.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Dp.call(n) == A3;
}
function O3(e) {
  return function(t) {
    return e?.[t];
  };
}
function N3() {
  this.__data__ = new cn(), this.size = 0;
}
function I3(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function R3(e) {
  return this.__data__.get(e);
}
function M3(e) {
  return this.__data__.has(e);
}
var D3 = 200;
function F3(e, t) {
  var n = this.__data__;
  if (n instanceof cn) {
    var r = n.__data__;
    if (!Kr || r.length < D3 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new dn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Wt(e) {
  var t = this.__data__ = new cn(e);
  this.size = t.size;
}
Wt.prototype.clear = N3;
Wt.prototype.delete = I3;
Wt.prototype.get = R3;
Wt.prototype.has = M3;
Wt.prototype.set = F3;
var Fp = typeof exports == "object" && exports && !exports.nodeType && exports, Ju = Fp && typeof module == "object" && module && !module.nodeType && module, B3 = Ju && Ju.exports === Fp, Qu = B3 ? Rt.Buffer : void 0, ec = Qu ? Qu.allocUnsafe : void 0;
function Bp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = ec ? ec(n) : new e.constructor(n);
  return e.copy(r), r;
}
function L3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function U3() {
  return [];
}
var q3 = Object.prototype, V3 = q3.propertyIsEnumerable, tc = Object.getOwnPropertySymbols, j3 = tc ? function(e) {
  return e == null ? [] : (e = Object(e), L3(tc(e), function(t) {
    return V3.call(e, t);
  }));
} : U3;
function H3(e, t, n) {
  var r = t(e);
  return Nt(e) ? r : E3(r, n(e));
}
function Rs(e) {
  return H3(e, LC, j3);
}
var Ms = Wn(Rt, "DataView"), Ds = Wn(Rt, "Promise"), Fs = Wn(Rt, "Set"), nc = "[object Map]", G3 = "[object Object]", rc = "[object Promise]", oc = "[object Set]", ic = "[object WeakMap]", ac = "[object DataView]", W3 = Gn(Ms), X3 = Gn(Kr), Y3 = Gn(Ds), K3 = Gn(Fs), Z3 = Gn(Is), Ct = Hn;
(Ms && Ct(new Ms(new ArrayBuffer(1))) != ac || Kr && Ct(new Kr()) != nc || Ds && Ct(Ds.resolve()) != rc || Fs && Ct(new Fs()) != oc || Is && Ct(new Is()) != ic) && (Ct = function(e) {
  var t = Hn(e), n = t == G3 ? e.constructor : void 0, r = n ? Gn(n) : "";
  if (r)
    switch (r) {
      case W3:
        return ac;
      case X3:
        return nc;
      case Y3:
        return rc;
      case K3:
        return oc;
      case Z3:
        return ic;
    }
  return t;
});
var J3 = Object.prototype, Q3 = J3.hasOwnProperty;
function e4(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Q3.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var li = Rt.Uint8Array;
function Sl(e) {
  var t = new e.constructor(e.byteLength);
  return new li(t).set(new li(e)), t;
}
function t4(e, t) {
  var n = Sl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var n4 = /\w*$/;
function r4(e) {
  var t = new e.constructor(e.source, n4.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var sc = Xt ? Xt.prototype : void 0, lc = sc ? sc.valueOf : void 0;
function o4(e) {
  return lc ? Object(lc.call(e)) : {};
}
function Lp(e, t) {
  var n = t ? Sl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var i4 = "[object Boolean]", a4 = "[object Date]", s4 = "[object Map]", l4 = "[object Number]", u4 = "[object RegExp]", c4 = "[object Set]", d4 = "[object String]", f4 = "[object Symbol]", p4 = "[object ArrayBuffer]", h4 = "[object DataView]", m4 = "[object Float32Array]", v4 = "[object Float64Array]", g4 = "[object Int8Array]", y4 = "[object Int16Array]", b4 = "[object Int32Array]", x4 = "[object Uint8Array]", w4 = "[object Uint8ClampedArray]", _4 = "[object Uint16Array]", S4 = "[object Uint32Array]";
function k4(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case p4:
      return Sl(e);
    case i4:
    case a4:
      return new r(+e);
    case h4:
      return t4(e);
    case m4:
    case v4:
    case g4:
    case y4:
    case b4:
    case x4:
    case w4:
    case _4:
    case S4:
      return Lp(e, n);
    case s4:
      return new r();
    case l4:
    case d4:
      return new r(e);
    case u4:
      return r4(e);
    case c4:
      return new r();
    case f4:
      return o4(e);
  }
}
function Up(e) {
  return typeof e.constructor == "function" && !gl(e) ? NP(Mp(e)) : {};
}
var E4 = "[object Map]";
function $4(e) {
  return Yt(e) && Ct(e) == E4;
}
var uc = cr && cr.isMap, z4 = uc ? yl(uc) : $4, P4 = "[object Set]";
function C4(e) {
  return Yt(e) && Ct(e) == P4;
}
var cc = cr && cr.isSet, A4 = cc ? yl(cc) : C4, T4 = 1, qp = "[object Arguments]", O4 = "[object Array]", N4 = "[object Boolean]", I4 = "[object Date]", R4 = "[object Error]", Vp = "[object Function]", M4 = "[object GeneratorFunction]", D4 = "[object Map]", F4 = "[object Number]", jp = "[object Object]", B4 = "[object RegExp]", L4 = "[object Set]", U4 = "[object String]", q4 = "[object Symbol]", V4 = "[object WeakMap]", j4 = "[object ArrayBuffer]", H4 = "[object DataView]", G4 = "[object Float32Array]", W4 = "[object Float64Array]", X4 = "[object Int8Array]", Y4 = "[object Int16Array]", K4 = "[object Int32Array]", Z4 = "[object Uint8Array]", J4 = "[object Uint8ClampedArray]", Q4 = "[object Uint16Array]", eA = "[object Uint32Array]", He = {};
He[qp] = He[O4] = He[j4] = He[H4] = He[N4] = He[I4] = He[G4] = He[W4] = He[X4] = He[Y4] = He[K4] = He[D4] = He[F4] = He[jp] = He[B4] = He[L4] = He[U4] = He[q4] = He[Z4] = He[J4] = He[Q4] = He[eA] = !0;
He[R4] = He[Vp] = He[V4] = !1;
function Do(e, t, n, r, o, i) {
  var a, s = t & T4;
  if (a !== void 0)
    return a;
  if (!_t(e))
    return e;
  var c = Nt(e);
  if (c)
    a = e4(e);
  else {
    var u = Ct(e), d = u == Vp || u == M4;
    if (Xr(e))
      return Bp(e, s);
    if (u == jp || u == qp || d && !o)
      a = d ? {} : Up(e);
    else {
      if (!He[u])
        return o ? e : {};
      a = k4(e, u, s);
    }
  }
  i || (i = new Wt());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, a), A4(e) ? e.forEach(function(p) {
    a.add(Do(p, t, n, p, e, i));
  }) : z4(e) && e.forEach(function(p, m) {
    a.set(m, Do(p, t, n, m, e, i));
  });
  var v = Rs, y = c ? void 0 : v(e);
  return VP(y || e, function(p, m) {
    y && (m = p, p = e[m]), ml(a, m, Do(p, t, n, m, e, i));
  }), a;
}
var tA = 1, nA = 4;
function st(e) {
  return Do(e, tA | nA);
}
var rA = "__lodash_hash_undefined__";
function oA(e) {
  return this.__data__.set(e, rA), this;
}
function iA(e) {
  return this.__data__.has(e);
}
function ui(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new dn(); ++t < n; )
    this.add(e[t]);
}
ui.prototype.add = ui.prototype.push = oA;
ui.prototype.has = iA;
function aA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function sA(e, t) {
  return e.has(t);
}
var lA = 1, uA = 2;
function Hp(e, t, n, r, o, i) {
  var a = n & lA, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, y = n & uA ? new ui() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var p = e[f], m = t[f];
    if (r)
      var h = a ? r(m, p, f, t, e, i) : r(p, m, f, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!aA(t, function(b, E) {
        if (!sA(y, E) && (p === b || o(p, b, n, r, i)))
          return y.push(E);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === m || o(p, m, n, r, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), v;
}
function cA(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function dA(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var fA = 1, pA = 2, hA = "[object Boolean]", mA = "[object Date]", vA = "[object Error]", gA = "[object Map]", yA = "[object Number]", bA = "[object RegExp]", xA = "[object Set]", wA = "[object String]", _A = "[object Symbol]", SA = "[object ArrayBuffer]", kA = "[object DataView]", dc = Xt ? Xt.prototype : void 0, da = dc ? dc.valueOf : void 0;
function EA(e, t, n, r, o, i, a) {
  switch (n) {
    case kA:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case SA:
      return !(e.byteLength != t.byteLength || !i(new li(e), new li(t)));
    case hA:
    case mA:
    case yA:
      return oo(+e, +t);
    case vA:
      return e.name == t.name && e.message == t.message;
    case bA:
    case wA:
      return e == t + "";
    case gA:
      var s = cA;
    case xA:
      var c = r & fA;
      if (s || (s = dA), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= pA, a.set(e, t);
      var d = Hp(s(e), s(t), r, o, i, a);
      return a.delete(e), d;
    case _A:
      if (da)
        return da.call(e) == da.call(t);
  }
  return !1;
}
var $A = 1, zA = Object.prototype, PA = zA.hasOwnProperty;
function CA(e, t, n, r, o, i) {
  var a = n & $A, s = Rs(e), c = s.length, u = Rs(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var f = c; f--; ) {
    var v = s[f];
    if (!(a ? v in t : PA.call(t, v)))
      return !1;
  }
  var y = i.get(e), p = i.get(t);
  if (y && p)
    return y == t && p == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var h = a; ++f < c; ) {
    v = s[f];
    var b = e[v], E = t[v];
    if (r)
      var g = a ? r(E, b, v, t, e, i) : r(b, E, v, e, t, i);
    if (!(g === void 0 ? b === E || o(b, E, n, r, i) : g)) {
      m = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (m && !h) {
    var S = e.constructor, A = t.constructor;
    S != A && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof A == "function" && A instanceof A) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var AA = 1, fc = "[object Arguments]", pc = "[object Array]", Eo = "[object Object]", TA = Object.prototype, hc = TA.hasOwnProperty;
function OA(e, t, n, r, o, i) {
  var a = Nt(e), s = Nt(t), c = a ? pc : Ct(e), u = s ? pc : Ct(t);
  c = c == fc ? Eo : c, u = u == fc ? Eo : u;
  var d = c == Eo, f = u == Eo, v = c == u;
  if (v && Xr(e)) {
    if (!Xr(t))
      return !1;
    a = !0, d = !1;
  }
  if (v && !d)
    return i || (i = new Wt()), a || bl(e) ? Hp(e, t, n, r, o, i) : EA(e, t, c, n, r, o, i);
  if (!(n & AA)) {
    var y = d && hc.call(e, "__wrapped__"), p = f && hc.call(t, "__wrapped__");
    if (y || p) {
      var m = y ? e.value() : e, h = p ? t.value() : t;
      return i || (i = new Wt()), o(m, h, n, r, i);
    }
  }
  return v ? (i || (i = new Wt()), CA(e, t, n, r, o, i)) : !1;
}
function Gp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Yt(e) && !Yt(t) ? e !== e && t !== t : OA(e, t, n, r, Gp, o);
}
function NA(e, t, n) {
  t = wl(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = _l(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && vl(o) && Ci(a, o) && (Nt(e) || si(e)));
}
function IA(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var c = a[++o];
      if (n(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var RA = IA(), fa = function() {
  return Rt.Date.now();
}, MA = "Expected a function", DA = Math.max, FA = Math.min;
function BA(e, t, n) {
  var r, o, i, a, s, c, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(MA);
  t = ju(t) || 0, _t(n) && (d = !0, f = "maxWait" in n, i = f ? DA(ju(n.maxWait) || 0, t) : i, v = "trailing" in n ? !0 : v);
  function y($) {
    var w = r, _ = o;
    return r = o = void 0, u = $, a = e.apply(_, w), a;
  }
  function p($) {
    return u = $, s = setTimeout(b, t), d ? y($) : a;
  }
  function m($) {
    var w = $ - c, _ = $ - u, L = t - w;
    return f ? FA(L, i - _) : L;
  }
  function h($) {
    var w = $ - c, _ = $ - u;
    return c === void 0 || w >= t || w < 0 || f && _ >= i;
  }
  function b() {
    var $ = fa();
    if (h($))
      return E($);
    s = setTimeout(b, m($));
  }
  function E($) {
    return s = void 0, v && r ? y($) : (r = o = void 0, a);
  }
  function g() {
    s !== void 0 && clearTimeout(s), u = 0, r = c = o = s = void 0;
  }
  function S() {
    return s === void 0 ? a : E(fa());
  }
  function A() {
    var $ = fa(), w = h($);
    if (r = arguments, o = this, c = $, w) {
      if (s === void 0)
        return p(c);
      if (f)
        return clearTimeout(s), s = setTimeout(b, t), y(c);
    }
    return s === void 0 && (s = setTimeout(b, t)), a;
  }
  return A.cancel = g, A.flush = S, A;
}
function Bs(e, t, n) {
  (n !== void 0 && !oo(e[t], n) || n === void 0 && !(t in e)) && hl(e, t, n);
}
function LA(e) {
  return Yt(e) && Ai(e);
}
function Ls(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function UA(e) {
  return XP(e, Ip(e));
}
function qA(e, t, n, r, o, i, a) {
  var s = Ls(e, n), c = Ls(t, n), u = a.get(c);
  if (u) {
    Bs(e, n, u);
    return;
  }
  var d = i ? i(s, c, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var v = Nt(c), y = !v && Xr(c), p = !v && !y && bl(c);
    d = c, v || y || p ? Nt(s) ? d = s : LA(s) ? d = RP(s) : y ? (f = !1, d = Bp(c, !0)) : p ? (f = !1, d = Lp(c, !0)) : d = [] : T3(c) || si(c) ? (d = s, si(s) ? d = UA(s) : (!_t(s) || pl(s)) && (d = Up(c))) : f = !1;
  }
  f && (a.set(c, d), o(d, c, r, i, a), a.delete(c)), Bs(e, n, d);
}
function Wp(e, t, n, r, o) {
  e !== t && RA(t, function(i, a) {
    if (o || (o = new Wt()), _t(i))
      qA(e, t, a, n, Wp, r, o);
    else {
      var s = r ? r(Ls(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), Bs(e, a, s);
    }
  }, Ip);
}
var VA = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, jA = O3(VA), Xp = /[&<>"']/g, HA = RegExp(Xp.source);
function GA(e) {
  return e = Rp(e), e && HA.test(e) ? e.replace(Xp, jA) : e;
}
var WA = Object.prototype, XA = WA.hasOwnProperty;
function YA(e, t) {
  return e != null && XA.call(e, t);
}
function Yp(e, t) {
  return e != null && NA(e, t, YA);
}
function xn(e, t) {
  return Gp(e, t);
}
var Us = QP(function(e, t, n) {
  Wp(e, t, n);
});
function KA(e, t, n, r) {
  if (!_t(e))
    return e;
  t = wl(t, e);
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var c = _l(t[o]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != a) {
      var d = s[c];
      u = void 0, u === void 0 && (u = _t(d) ? d : Ci(t[o + 1]) ? [] : {});
    }
    ml(s, c, u), s = s[c];
  }
  return e;
}
function Et(e, t, n) {
  return e == null ? e : KA(e, t, n);
}
var mc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ZA(e) {
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
var pa, vc;
function mr() {
  return vc || (vc = 1, pa = TypeError), pa;
}
const JA = {}, QA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JA
}, Symbol.toStringTag, { value: "Module" })), eT = /* @__PURE__ */ ZA(QA);
var ha, gc;
function Ni() {
  if (gc) return ha;
  gc = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && i && typeof i.get == "function" ? i.get : null, s = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, y = v ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, m = Object.prototype.toString, h = Function.prototype.toString, b = String.prototype.match, E = String.prototype.slice, g = String.prototype.replace, S = String.prototype.toUpperCase, A = String.prototype.toLowerCase, $ = RegExp.prototype.test, w = Array.prototype.concat, _ = Array.prototype.join, L = Array.prototype.slice, F = Math.floor, M = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, C = Object.getOwnPropertySymbols, U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, k = typeof Symbol == "function" && typeof Symbol.iterator == "object", P = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === k || !0) ? Symbol.toStringTag : null, x = Object.prototype.propertyIsEnumerable, N = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(H) {
    return H.__proto__;
  } : null);
  function D(H, W) {
    if (H === 1 / 0 || H === -1 / 0 || H !== H || H && H > -1e3 && H < 1e3 || $.call(/e/, W))
      return W;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof H == "number") {
      var je = H < 0 ? -F(-H) : F(H);
      if (je !== H) {
        var Ge = String(je), Ae = E.call(W, Ge.length + 1);
        return g.call(Ge, Le, "$&_") + "." + g.call(g.call(Ae, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return g.call(W, Le, "$&_");
  }
  var Z = eT, Q = Z.custom, ee = R(Q) ? Q : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ye = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ha = function H(W, Le, je, Ge) {
    var Ae = Le || {};
    if (j(Ae, "quoteStyle") && !j(fe, Ae.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (j(Ae, "maxStringLength") && (typeof Ae.maxStringLength == "number" ? Ae.maxStringLength < 0 && Ae.maxStringLength !== 1 / 0 : Ae.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var fn = j(Ae, "customInspect") ? Ae.customInspect : !0;
    if (typeof fn != "boolean" && fn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (j(Ae, "indent") && Ae.indent !== null && Ae.indent !== "	" && !(parseInt(Ae.indent, 10) === Ae.indent && Ae.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (j(Ae, "numericSeparator") && typeof Ae.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var zn = Ae.numericSeparator;
    if (typeof W > "u")
      return "undefined";
    if (W === null)
      return "null";
    if (typeof W == "boolean")
      return W ? "true" : "false";
    if (typeof W == "string")
      return gt(W, Ae);
    if (typeof W == "number") {
      if (W === 0)
        return 1 / 0 / W > 0 ? "0" : "-0";
      var yt = String(W);
      return zn ? D(W, yt) : yt;
    }
    if (typeof W == "bigint") {
      var pn = String(W) + "n";
      return zn ? D(W, pn) : pn;
    }
    var ji = typeof Ae.depth > "u" ? 5 : Ae.depth;
    if (typeof je > "u" && (je = 0), je >= ji && ji > 0 && typeof W == "object")
      return me(W) ? "[Array]" : "[Object]";
    var Xn = r0(Ae, je);
    if (typeof Ge > "u")
      Ge = [];
    else if (oe(Ge, W) >= 0)
      return "[Circular]";
    function Pt(Yn, po, i0) {
      if (po && (Ge = L.call(Ge), Ge.push(po)), i0) {
        var Vl = {
          depth: Ae.depth
        };
        return j(Ae, "quoteStyle") && (Vl.quoteStyle = Ae.quoteStyle), H(Yn, Vl, je + 1, Ge);
      }
      return H(Yn, Ae, je + 1, Ge);
    }
    if (typeof W == "function" && !ke(W)) {
      var Ml = re(W), Dl = co(W, Pt);
      return "[Function" + (Ml ? ": " + Ml : " (anonymous)") + "]" + (Dl.length > 0 ? " { " + _.call(Dl, ", ") + " }" : "");
    }
    if (R(W)) {
      var Fl = k ? g.call(String(W), /^(Symbol\(.*\))_[^)]*$/, "$1") : U.call(W);
      return typeof W == "object" && !k ? $n(Fl) : Fl;
    }
    if (Dt(W)) {
      for (var yr = "<" + A.call(String(W.nodeName)), Hi = W.attributes || [], fo = 0; fo < Hi.length; fo++)
        yr += " " + Hi[fo].name + "=" + _e(ne(Hi[fo].value), "double", Ae);
      return yr += ">", W.childNodes && W.childNodes.length && (yr += "..."), yr += "</" + A.call(String(W.nodeName)) + ">", yr;
    }
    if (me(W)) {
      if (W.length === 0)
        return "[]";
      var Gi = co(W, Pt);
      return Xn && !n0(Gi) ? "[" + Vi(Gi, Xn) + "]" : "[ " + _.call(Gi, ", ") + " ]";
    }
    if (se(W)) {
      var Wi = co(W, Pt);
      return !("cause" in Error.prototype) && "cause" in W && !x.call(W, "cause") ? "{ [" + String(W) + "] " + _.call(w.call("[cause]: " + Pt(W.cause), Wi), ", ") + " }" : Wi.length === 0 ? "[" + String(W) + "]" : "{ [" + String(W) + "] " + _.call(Wi, ", ") + " }";
    }
    if (typeof W == "object" && fn) {
      if (ee && typeof W[ee] == "function" && Z)
        return Z(W, { depth: ji - je });
      if (fn !== "symbol" && typeof W.inspect == "function")
        return W.inspect();
    }
    if (de(W)) {
      var Bl = [];
      return r && r.call(W, function(Yn, po) {
        Bl.push(Pt(po, W, !0) + " => " + Pt(Yn, W));
      }), Rl("Map", n.call(W), Bl, Xn);
    }
    if (Ee(W)) {
      var Ll = [];
      return s && s.call(W, function(Yn) {
        Ll.push(Pt(Yn, W));
      }), Rl("Set", a.call(W), Ll, Xn);
    }
    if (pe(W))
      return gr("WeakMap");
    if (Fe(W))
      return gr("WeakSet");
    if (be(W))
      return gr("WeakRef");
    if (ae(W))
      return $n(Pt(Number(W)));
    if (O(W))
      return $n(Pt(M.call(W)));
    if (ve(W))
      return $n(p.call(W));
    if (we(W))
      return $n(Pt(String(W)));
    if (typeof window < "u" && W === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && W === globalThis || typeof mc < "u" && W === mc)
      return "{ [object globalThis] }";
    if (!ze(W) && !ke(W)) {
      var Xi = co(W, Pt), Ul = N ? N(W) === Object.prototype : W instanceof Object || W.constructor === Object, Yi = W instanceof Object ? "" : "null prototype", ql = !Ul && P && Object(W) === W && P in W ? E.call(q(W), 8, -1) : Yi ? "Object" : "", o0 = Ul || typeof W.constructor != "function" ? "" : W.constructor.name ? W.constructor.name + " " : "", Ki = o0 + (ql || Yi ? "[" + _.call(w.call([], ql || [], Yi || []), ": ") + "] " : "");
      return Xi.length === 0 ? Ki + "{}" : Xn ? Ki + "{" + Vi(Xi, Xn) + "}" : Ki + "{ " + _.call(Xi, ", ") + " }";
    }
    return String(W);
  };
  function _e(H, W, Le) {
    var je = Le.quoteStyle || W, Ge = fe[je];
    return Ge + H + Ge;
  }
  function ne(H) {
    return g.call(String(H), /"/g, "&quot;");
  }
  function ie(H) {
    return !P || !(typeof H == "object" && (P in H || typeof H[P] < "u"));
  }
  function me(H) {
    return q(H) === "[object Array]" && ie(H);
  }
  function ze(H) {
    return q(H) === "[object Date]" && ie(H);
  }
  function ke(H) {
    return q(H) === "[object RegExp]" && ie(H);
  }
  function se(H) {
    return q(H) === "[object Error]" && ie(H);
  }
  function we(H) {
    return q(H) === "[object String]" && ie(H);
  }
  function ae(H) {
    return q(H) === "[object Number]" && ie(H);
  }
  function ve(H) {
    return q(H) === "[object Boolean]" && ie(H);
  }
  function R(H) {
    if (k)
      return H && typeof H == "object" && H instanceof Symbol;
    if (typeof H == "symbol")
      return !0;
    if (!H || typeof H != "object" || !U)
      return !1;
    try {
      return U.call(H), !0;
    } catch {
    }
    return !1;
  }
  function O(H) {
    if (!H || typeof H != "object" || !M)
      return !1;
    try {
      return M.call(H), !0;
    } catch {
    }
    return !1;
  }
  var B = Object.prototype.hasOwnProperty || function(H) {
    return H in this;
  };
  function j(H, W) {
    return B.call(H, W);
  }
  function q(H) {
    return m.call(H);
  }
  function re(H) {
    if (H.name)
      return H.name;
    var W = b.call(h.call(H), /^function\s*([\w$]+)/);
    return W ? W[1] : null;
  }
  function oe(H, W) {
    if (H.indexOf)
      return H.indexOf(W);
    for (var Le = 0, je = H.length; Le < je; Le++)
      if (H[Le] === W)
        return Le;
    return -1;
  }
  function de(H) {
    if (!n || !H || typeof H != "object")
      return !1;
    try {
      n.call(H);
      try {
        a.call(H);
      } catch {
        return !0;
      }
      return H instanceof Map;
    } catch {
    }
    return !1;
  }
  function pe(H) {
    if (!u || !H || typeof H != "object")
      return !1;
    try {
      u.call(H, u);
      try {
        f.call(H, f);
      } catch {
        return !0;
      }
      return H instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function be(H) {
    if (!y || !H || typeof H != "object")
      return !1;
    try {
      return y.call(H), !0;
    } catch {
    }
    return !1;
  }
  function Ee(H) {
    if (!a || !H || typeof H != "object")
      return !1;
    try {
      a.call(H);
      try {
        n.call(H);
      } catch {
        return !0;
      }
      return H instanceof Set;
    } catch {
    }
    return !1;
  }
  function Fe(H) {
    if (!f || !H || typeof H != "object")
      return !1;
    try {
      f.call(H, f);
      try {
        u.call(H, u);
      } catch {
        return !0;
      }
      return H instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Dt(H) {
    return !H || typeof H != "object" ? !1 : typeof HTMLElement < "u" && H instanceof HTMLElement ? !0 : typeof H.nodeName == "string" && typeof H.getAttribute == "function";
  }
  function gt(H, W) {
    if (H.length > W.maxStringLength) {
      var Le = H.length - W.maxStringLength, je = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(E.call(H, 0, W.maxStringLength), W) + je;
    }
    var Ge = ye[W.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var Ae = g.call(g.call(H, Ge, "\\$1"), /[\x00-\x1f]/g, qi);
    return _e(Ae, "single", W);
  }
  function qi(H) {
    var W = H.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[W];
    return Le ? "\\" + Le : "\\x" + (W < 16 ? "0" : "") + S.call(W.toString(16));
  }
  function $n(H) {
    return "Object(" + H + ")";
  }
  function gr(H) {
    return H + " { ? }";
  }
  function Rl(H, W, Le, je) {
    var Ge = je ? Vi(Le, je) : _.call(Le, ", ");
    return H + " (" + W + ") {" + Ge + "}";
  }
  function n0(H) {
    for (var W = 0; W < H.length; W++)
      if (oe(H[W], `
`) >= 0)
        return !1;
    return !0;
  }
  function r0(H, W) {
    var Le;
    if (H.indent === "	")
      Le = "	";
    else if (typeof H.indent == "number" && H.indent > 0)
      Le = _.call(Array(H.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: _.call(Array(W + 1), Le)
    };
  }
  function Vi(H, W) {
    if (H.length === 0)
      return "";
    var Le = `
` + W.prev + W.base;
    return Le + _.call(H, "," + Le) + `
` + W.prev;
  }
  function co(H, W) {
    var Le = me(H), je = [];
    if (Le) {
      je.length = H.length;
      for (var Ge = 0; Ge < H.length; Ge++)
        je[Ge] = j(H, Ge) ? W(H[Ge], H) : "";
    }
    var Ae = typeof C == "function" ? C(H) : [], fn;
    if (k) {
      fn = {};
      for (var zn = 0; zn < Ae.length; zn++)
        fn["$" + Ae[zn]] = Ae[zn];
    }
    for (var yt in H)
      j(H, yt) && (Le && String(Number(yt)) === yt && yt < H.length || k && fn["$" + yt] instanceof Symbol || ($.call(/[^\w$]/, yt) ? je.push(W(yt, H) + ": " + W(H[yt], H)) : je.push(yt + ": " + W(H[yt], H))));
    if (typeof C == "function")
      for (var pn = 0; pn < Ae.length; pn++)
        x.call(H, Ae[pn]) && je.push("[" + W(Ae[pn]) + "]: " + W(H[Ae[pn]], H));
    return je;
  }
  return ha;
}
var ma, yc;
function tT() {
  if (yc) return ma;
  yc = 1;
  var e = /* @__PURE__ */ Ni(), t = /* @__PURE__ */ mr(), n = function(s, c, u) {
    for (var d = s, f; (f = d.next) != null; d = f)
      if (f.key === c)
        return d.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, r = function(s, c) {
    if (s) {
      var u = n(s, c);
      return u && u.value;
    }
  }, o = function(s, c, u) {
    var d = n(s, c);
    d ? d.value = u : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: s.next,
      value: u
    };
  }, i = function(s, c) {
    return s ? !!n(s, c) : !1;
  }, a = function(s, c) {
    if (s)
      return n(s, c, !0);
  };
  return ma = function() {
    var c, u = {
      assert: function(d) {
        if (!u.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var f = a(c, d);
        return f && c && !c.next && (c = void 0), !!f;
      },
      get: function(d) {
        return r(c, d);
      },
      has: function(d) {
        return i(c, d);
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
  }, ma;
}
var va, bc;
function Kp() {
  return bc || (bc = 1, va = Object), va;
}
var ga, xc;
function nT() {
  return xc || (xc = 1, ga = Error), ga;
}
var ya, wc;
function rT() {
  return wc || (wc = 1, ya = EvalError), ya;
}
var ba, _c;
function oT() {
  return _c || (_c = 1, ba = RangeError), ba;
}
var xa, Sc;
function iT() {
  return Sc || (Sc = 1, xa = ReferenceError), xa;
}
var wa, kc;
function aT() {
  return kc || (kc = 1, wa = SyntaxError), wa;
}
var _a, Ec;
function sT() {
  return Ec || (Ec = 1, _a = URIError), _a;
}
var Sa, $c;
function lT() {
  return $c || ($c = 1, Sa = Math.abs), Sa;
}
var ka, zc;
function uT() {
  return zc || (zc = 1, ka = Math.floor), ka;
}
var Ea, Pc;
function cT() {
  return Pc || (Pc = 1, Ea = Math.max), Ea;
}
var $a, Cc;
function dT() {
  return Cc || (Cc = 1, $a = Math.min), $a;
}
var za, Ac;
function fT() {
  return Ac || (Ac = 1, za = Math.pow), za;
}
var Pa, Tc;
function pT() {
  return Tc || (Tc = 1, Pa = Math.round), Pa;
}
var Ca, Oc;
function hT() {
  return Oc || (Oc = 1, Ca = Number.isNaN || function(t) {
    return t !== t;
  }), Ca;
}
var Aa, Nc;
function mT() {
  if (Nc) return Aa;
  Nc = 1;
  var e = /* @__PURE__ */ hT();
  return Aa = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Aa;
}
var Ta, Ic;
function vT() {
  return Ic || (Ic = 1, Ta = Object.getOwnPropertyDescriptor), Ta;
}
var Oa, Rc;
function Zp() {
  if (Rc) return Oa;
  Rc = 1;
  var e = /* @__PURE__ */ vT();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Oa = e, Oa;
}
var Na, Mc;
function gT() {
  if (Mc) return Na;
  Mc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Na = e, Na;
}
var Ia, Dc;
function yT() {
  return Dc || (Dc = 1, Ia = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = /* @__PURE__ */ Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ia;
}
var Ra, Fc;
function bT() {
  if (Fc) return Ra;
  Fc = 1;
  var e = typeof Symbol < "u" && Symbol, t = yT();
  return Ra = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ra;
}
var Ma, Bc;
function Jp() {
  return Bc || (Bc = 1, Ma = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ma;
}
var Da, Lc;
function Qp() {
  if (Lc) return Da;
  Lc = 1;
  var e = /* @__PURE__ */ Kp();
  return Da = e.getPrototypeOf || null, Da;
}
var Fa, Uc;
function xT() {
  if (Uc) return Fa;
  Uc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, u) {
    for (var d = [], f = 0; f < c.length; f += 1)
      d[f] = c[f];
    for (var v = 0; v < u.length; v += 1)
      d[v + c.length] = u[v];
    return d;
  }, i = function(c, u) {
    for (var d = [], f = u, v = 0; f < c.length; f += 1, v += 1)
      d[v] = c[f];
    return d;
  }, a = function(s, c) {
    for (var u = "", d = 0; d < s.length; d += 1)
      u += s[d], d + 1 < s.length && (u += c);
    return u;
  };
  return Fa = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== r)
      throw new TypeError(e + u);
    for (var d = i(arguments, 1), f, v = function() {
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
    }, y = n(0, u.length - d.length), p = [], m = 0; m < y; m++)
      p[m] = "$" + m;
    if (f = Function("binder", "return function (" + a(p, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var h = function() {
      };
      h.prototype = u.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, Fa;
}
var Ba, qc;
function Ii() {
  if (qc) return Ba;
  qc = 1;
  var e = xT();
  return Ba = Function.prototype.bind || e, Ba;
}
var La, Vc;
function kl() {
  return Vc || (Vc = 1, La = Function.prototype.call), La;
}
var Ua, jc;
function eh() {
  return jc || (jc = 1, Ua = Function.prototype.apply), Ua;
}
var qa, Hc;
function wT() {
  return Hc || (Hc = 1, qa = typeof Reflect < "u" && Reflect && Reflect.apply), qa;
}
var Va, Gc;
function _T() {
  if (Gc) return Va;
  Gc = 1;
  var e = Ii(), t = eh(), n = kl(), r = wT();
  return Va = r || e.call(n, t), Va;
}
var ja, Wc;
function th() {
  if (Wc) return ja;
  Wc = 1;
  var e = Ii(), t = /* @__PURE__ */ mr(), n = kl(), r = _T();
  return ja = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return r(e, n, i);
  }, ja;
}
var Ha, Xc;
function ST() {
  if (Xc) return Ha;
  Xc = 1;
  var e = th(), t = /* @__PURE__ */ Zp(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return Ha = r && typeof r.get == "function" ? e([r.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, Ha;
}
var Ga, Yc;
function kT() {
  if (Yc) return Ga;
  Yc = 1;
  var e = Jp(), t = Qp(), n = /* @__PURE__ */ ST();
  return Ga = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Ga;
}
var Wa, Kc;
function ET() {
  if (Kc) return Wa;
  Kc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Ii();
  return Wa = n.call(e, t), Wa;
}
var Xa, Zc;
function El() {
  if (Zc) return Xa;
  Zc = 1;
  var e, t = /* @__PURE__ */ Kp(), n = /* @__PURE__ */ nT(), r = /* @__PURE__ */ rT(), o = /* @__PURE__ */ oT(), i = /* @__PURE__ */ iT(), a = /* @__PURE__ */ aT(), s = /* @__PURE__ */ mr(), c = /* @__PURE__ */ sT(), u = /* @__PURE__ */ lT(), d = /* @__PURE__ */ uT(), f = /* @__PURE__ */ cT(), v = /* @__PURE__ */ dT(), y = /* @__PURE__ */ fT(), p = /* @__PURE__ */ pT(), m = /* @__PURE__ */ mT(), h = Function, b = function(ke) {
    try {
      return h('"use strict"; return (' + ke + ").constructor;")();
    } catch {
    }
  }, E = /* @__PURE__ */ Zp(), g = /* @__PURE__ */ gT(), S = function() {
    throw new s();
  }, A = E ? (function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return E(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  })() : S, $ = bT()(), w = kT(), _ = Qp(), L = Jp(), F = eh(), M = kl(), C = {}, U = typeof Uint8Array > "u" || !w ? e : w(Uint8Array), k = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": $ && w ? w([][Symbol.iterator]()) : e,
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
    "%IteratorPrototype%": $ && w ? w(w([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !$ || !w ? e : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": E,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !$ || !w ? e : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $ && w ? w(""[Symbol.iterator]()) : e,
    "%Symbol%": $ ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": A,
    "%TypedArray%": U,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": M,
    "%Function.prototype.apply%": F,
    "%Object.defineProperty%": g,
    "%Object.getPrototypeOf%": _,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": y,
    "%Math.round%": p,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": L
  };
  if (w)
    try {
      null.error;
    } catch (ke) {
      var P = w(w(ke));
      k["%Error.prototype%"] = P;
    }
  var x = function ke(se) {
    var we;
    if (se === "%AsyncFunction%")
      we = b("async function () {}");
    else if (se === "%GeneratorFunction%")
      we = b("function* () {}");
    else if (se === "%AsyncGeneratorFunction%")
      we = b("async function* () {}");
    else if (se === "%AsyncGenerator%") {
      var ae = ke("%AsyncGeneratorFunction%");
      ae && (we = ae.prototype);
    } else if (se === "%AsyncIteratorPrototype%") {
      var ve = ke("%AsyncGenerator%");
      ve && w && (we = w(ve.prototype));
    }
    return k[se] = we, we;
  }, N = {
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
  }, D = Ii(), Z = /* @__PURE__ */ ET(), Q = D.call(M, Array.prototype.concat), ee = D.call(F, Array.prototype.splice), fe = D.call(M, String.prototype.replace), ye = D.call(M, String.prototype.slice), _e = D.call(M, RegExp.prototype.exec), ne = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ie = /\\(\\)?/g, me = function(se) {
    var we = ye(se, 0, 1), ae = ye(se, -1);
    if (we === "%" && ae !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (ae === "%" && we !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ve = [];
    return fe(se, ne, function(R, O, B, j) {
      ve[ve.length] = B ? fe(j, ie, "$1") : O || R;
    }), ve;
  }, ze = function(se, we) {
    var ae = se, ve;
    if (Z(N, ae) && (ve = N[ae], ae = "%" + ve[0] + "%"), Z(k, ae)) {
      var R = k[ae];
      if (R === C && (R = x(ae)), typeof R > "u" && !we)
        throw new s("intrinsic " + se + " exists, but is not available. Please file an issue!");
      return {
        alias: ve,
        name: ae,
        value: R
      };
    }
    throw new a("intrinsic " + se + " does not exist!");
  };
  return Xa = function(se, we) {
    if (typeof se != "string" || se.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, se) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ae = me(se), ve = ae.length > 0 ? ae[0] : "", R = ze("%" + ve + "%", we), O = R.name, B = R.value, j = !1, q = R.alias;
    q && (ve = q[0], ee(ae, Q([0, 1], q)));
    for (var re = 1, oe = !0; re < ae.length; re += 1) {
      var de = ae[re], pe = ye(de, 0, 1), be = ye(de, -1);
      if ((pe === '"' || pe === "'" || pe === "`" || be === '"' || be === "'" || be === "`") && pe !== be)
        throw new a("property names with quotes must have matching quotes");
      if ((de === "constructor" || !oe) && (j = !0), ve += "." + de, O = "%" + ve + "%", Z(k, O))
        B = k[O];
      else if (B != null) {
        if (!(de in B)) {
          if (!we)
            throw new s("base intrinsic for " + se + " exists, but the property is not available.");
          return;
        }
        if (E && re + 1 >= ae.length) {
          var Ee = E(B, de);
          oe = !!Ee, oe && "get" in Ee && !("originalValue" in Ee.get) ? B = Ee.get : B = B[de];
        } else
          oe = Z(B, de), B = B[de];
        oe && !j && (k[O] = B);
      }
    }
    return B;
  }, Xa;
}
var Ya, Jc;
function nh() {
  if (Jc) return Ya;
  Jc = 1;
  var e = /* @__PURE__ */ El(), t = th(), n = t([e("%String.prototype.indexOf%")]);
  return Ya = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ya;
}
var Ka, Qc;
function rh() {
  if (Qc) return Ka;
  Qc = 1;
  var e = /* @__PURE__ */ El(), t = /* @__PURE__ */ nh(), n = /* @__PURE__ */ Ni(), r = /* @__PURE__ */ mr(), o = e("%Map%", !0), i = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return Ka = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(y) {
        if (!v.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (f) {
          var p = c(f, y);
          return u(f) === 0 && (f = void 0), p;
        }
        return !1;
      },
      get: function(y) {
        if (f)
          return i(f, y);
      },
      has: function(y) {
        return f ? s(f, y) : !1;
      },
      set: function(y, p) {
        f || (f = new o()), a(f, y, p);
      }
    };
    return v;
  }, Ka;
}
var Za, ed;
function $T() {
  if (ed) return Za;
  ed = 1;
  var e = /* @__PURE__ */ El(), t = /* @__PURE__ */ nh(), n = /* @__PURE__ */ Ni(), r = rh(), o = /* @__PURE__ */ mr(), i = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Za = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, v, y = {
        assert: function(p) {
          if (!y.has(p))
            throw new o("Side channel does not contain " + n(p));
        },
        delete: function(p) {
          if (i && p && (typeof p == "object" || typeof p == "function")) {
            if (f)
              return u(f, p);
          } else if (r && v)
            return v.delete(p);
          return !1;
        },
        get: function(p) {
          return i && p && (typeof p == "object" || typeof p == "function") && f ? a(f, p) : v && v.get(p);
        },
        has: function(p) {
          return i && p && (typeof p == "object" || typeof p == "function") && f ? c(f, p) : !!v && v.has(p);
        },
        set: function(p, m) {
          i && p && (typeof p == "object" || typeof p == "function") ? (f || (f = new i()), s(f, p, m)) : r && (v || (v = r()), v.set(p, m));
        }
      };
      return y;
    }
  ) : r, Za;
}
var Ja, td;
function oh() {
  if (td) return Ja;
  td = 1;
  var e = /* @__PURE__ */ mr(), t = /* @__PURE__ */ Ni(), n = tT(), r = rh(), o = $T(), i = o || r || n;
  return Ja = function() {
    var s, c = {
      assert: function(u) {
        if (!c.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!s && s.delete(u);
      },
      get: function(u) {
        return s && s.get(u);
      },
      has: function(u) {
        return !!s && s.has(u);
      },
      set: function(u, d) {
        s || (s = i()), s.set(u, d);
      }
    };
    return c;
  }, Ja;
}
var Qa, nd;
function $l() {
  if (nd) return Qa;
  nd = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Qa = {
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
  }, Qa;
}
var es, rd;
function ih() {
  if (rd) return es;
  rd = 1;
  var e = /* @__PURE__ */ $l(), t = oh(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), i = function(w, _) {
    return o.set(w, _), w;
  }, a = function(w) {
    return o.has(w);
  }, s = function(w) {
    return o.get(w);
  }, c = function(w, _) {
    o.set(w, _);
  }, u = (function() {
    for (var $ = [], w = 0; w < 256; ++w)
      $[$.length] = "%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase();
    return $;
  })(), d = function(w) {
    for (; w.length > 1; ) {
      var _ = w.pop(), L = _.obj[_.prop];
      if (r(L)) {
        for (var F = [], M = 0; M < L.length; ++M)
          typeof L[M] < "u" && (F[F.length] = L[M]);
        _.obj[_.prop] = F;
      }
    }
  }, f = function(w, _) {
    for (var L = _ && _.plainObjects ? { __proto__: null } : {}, F = 0; F < w.length; ++F)
      typeof w[F] < "u" && (L[F] = w[F]);
    return L;
  }, v = function $(w, _, L) {
    if (!_)
      return w;
    if (typeof _ != "object" && typeof _ != "function") {
      if (r(w)) {
        var F = w.length;
        if (L && typeof L.arrayLimit == "number" && F > L.arrayLimit)
          return i(f(w.concat(_), L), F);
        w[F] = _;
      } else if (w && typeof w == "object")
        if (a(w)) {
          var M = s(w) + 1;
          w[M] = _, c(w, M);
        } else {
          if (L && L.strictMerge)
            return [w, _];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, _)) && (w[_] = !0);
        }
      else
        return [w, _];
      return w;
    }
    if (!w || typeof w != "object") {
      if (a(_)) {
        for (var C = Object.keys(_), U = L && L.plainObjects ? { __proto__: null, 0: w } : { 0: w }, k = 0; k < C.length; k++) {
          var P = parseInt(C[k], 10);
          U[P + 1] = _[C[k]];
        }
        return i(U, s(_) + 1);
      }
      var x = [w].concat(_);
      return L && typeof L.arrayLimit == "number" && x.length > L.arrayLimit ? i(f(x, L), x.length - 1) : x;
    }
    var N = w;
    return r(w) && !r(_) && (N = f(w, L)), r(w) && r(_) ? (_.forEach(function(D, Z) {
      if (n.call(w, Z)) {
        var Q = w[Z];
        Q && typeof Q == "object" && D && typeof D == "object" ? w[Z] = $(Q, D, L) : w[w.length] = D;
      } else
        w[Z] = D;
    }), w) : Object.keys(_).reduce(function(D, Z) {
      var Q = _[Z];
      if (n.call(D, Z) ? D[Z] = $(D[Z], Q, L) : D[Z] = Q, a(_) && !a(D) && i(D, s(_)), a(D)) {
        var ee = parseInt(Z, 10);
        String(ee) === Z && ee >= 0 && ee > s(D) && c(D, ee);
      }
      return D;
    }, N);
  }, y = function(w, _) {
    return Object.keys(_).reduce(function(L, F) {
      return L[F] = _[F], L;
    }, w);
  }, p = function($, w, _) {
    var L = $.replace(/\+/g, " ");
    if (_ === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, m = 1024, h = function(w, _, L, F, M) {
    if (w.length === 0)
      return w;
    var C = w;
    if (typeof w == "symbol" ? C = Symbol.prototype.toString.call(w) : typeof w != "string" && (C = String(w)), L === "iso-8859-1")
      return escape(C).replace(/%u[0-9a-f]{4}/gi, function(Z) {
        return "%26%23" + parseInt(Z.slice(2), 16) + "%3B";
      });
    for (var U = "", k = 0; k < C.length; k += m) {
      for (var P = C.length >= m ? C.slice(k, k + m) : C, x = [], N = 0; N < P.length; ++N) {
        var D = P.charCodeAt(N);
        if (D === 45 || D === 46 || D === 95 || D === 126 || D >= 48 && D <= 57 || D >= 65 && D <= 90 || D >= 97 && D <= 122 || M === e.RFC1738 && (D === 40 || D === 41)) {
          x[x.length] = P.charAt(N);
          continue;
        }
        if (D < 128) {
          x[x.length] = u[D];
          continue;
        }
        if (D < 2048) {
          x[x.length] = u[192 | D >> 6] + u[128 | D & 63];
          continue;
        }
        if (D < 55296 || D >= 57344) {
          x[x.length] = u[224 | D >> 12] + u[128 | D >> 6 & 63] + u[128 | D & 63];
          continue;
        }
        N += 1, D = 65536 + ((D & 1023) << 10 | P.charCodeAt(N) & 1023), x[x.length] = u[240 | D >> 18] + u[128 | D >> 12 & 63] + u[128 | D >> 6 & 63] + u[128 | D & 63];
      }
      U += x.join("");
    }
    return U;
  }, b = function(w) {
    for (var _ = [{ obj: { o: w }, prop: "o" }], L = [], F = 0; F < _.length; ++F)
      for (var M = _[F], C = M.obj[M.prop], U = Object.keys(C), k = 0; k < U.length; ++k) {
        var P = U[k], x = C[P];
        typeof x == "object" && x !== null && L.indexOf(x) === -1 && (_[_.length] = { obj: C, prop: P }, L[L.length] = x);
      }
    return d(_), w;
  }, E = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, g = function(w) {
    return !w || typeof w != "object" ? !1 : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, S = function(w, _, L, F) {
    if (a(w)) {
      var M = s(w) + 1;
      return w[M] = _, c(w, M), w;
    }
    var C = [].concat(w, _);
    return C.length > L ? i(f(C, { plainObjects: F }), C.length - 1) : C;
  }, A = function(w, _) {
    if (r(w)) {
      for (var L = [], F = 0; F < w.length; F += 1)
        L[L.length] = _(w[F]);
      return L;
    }
    return _(w);
  };
  return es = {
    arrayToObject: f,
    assign: y,
    combine: S,
    compact: b,
    decode: p,
    encode: h,
    isBuffer: g,
    isOverflow: a,
    isRegExp: E,
    markOverflow: i,
    maybeMap: A,
    merge: v
  }, es;
}
var ts, od;
function zT() {
  if (od) return ts;
  od = 1;
  var e = oh(), t = /* @__PURE__ */ ih(), n = /* @__PURE__ */ $l(), r = Object.prototype.hasOwnProperty, o = {
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
  }, i = Array.isArray, a = Array.prototype.push, s = function(m, h) {
    a.apply(m, i(h) ? h : [h]);
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
  }, v = {}, y = function m(h, b, E, g, S, A, $, w, _, L, F, M, C, U, k, P, x, N) {
    for (var D = h, Z = N, Q = 0, ee = !1; (Z = Z.get(v)) !== void 0 && !ee; ) {
      var fe = Z.get(h);
      if (Q += 1, typeof fe < "u") {
        if (fe === Q)
          throw new RangeError("Cyclic object value");
        ee = !0;
      }
      typeof Z.get(v) > "u" && (Q = 0);
    }
    if (typeof L == "function" ? D = L(b, D) : D instanceof Date ? D = C(D) : E === "comma" && i(D) && (D = t.maybeMap(D, function(O) {
      return O instanceof Date ? C(O) : O;
    })), D === null) {
      if (A)
        return _ && !P ? _(b, d.encoder, x, "key", U) : b;
      D = "";
    }
    if (f(D) || t.isBuffer(D)) {
      if (_) {
        var ye = P ? b : _(b, d.encoder, x, "key", U);
        return [k(ye) + "=" + k(_(D, d.encoder, x, "value", U))];
      }
      return [k(b) + "=" + k(String(D))];
    }
    var _e = [];
    if (typeof D > "u")
      return _e;
    var ne;
    if (E === "comma" && i(D))
      P && _ && (D = t.maybeMap(D, _)), ne = [{ value: D.length > 0 ? D.join(",") || null : void 0 }];
    else if (i(L))
      ne = L;
    else {
      var ie = Object.keys(D);
      ne = F ? ie.sort(F) : ie;
    }
    var me = w ? String(b).replace(/\./g, "%2E") : String(b), ze = g && i(D) && D.length === 1 ? me + "[]" : me;
    if (S && i(D) && D.length === 0)
      return ze + "[]";
    for (var ke = 0; ke < ne.length; ++ke) {
      var se = ne[ke], we = typeof se == "object" && se && typeof se.value < "u" ? se.value : D[se];
      if (!($ && we === null)) {
        var ae = M && w ? String(se).replace(/\./g, "%2E") : String(se), ve = i(D) ? typeof E == "function" ? E(ze, ae) : ze : ze + (M ? "." + ae : "[" + ae + "]");
        N.set(h, Q);
        var R = e();
        R.set(v, N), s(_e, m(
          we,
          ve,
          E,
          g,
          S,
          A,
          $,
          w,
          E === "comma" && P && i(D) ? null : _,
          L,
          F,
          M,
          C,
          U,
          k,
          P,
          x,
          R
        ));
      }
    }
    return _e;
  }, p = function(h) {
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
    var E = n.default;
    if (typeof h.format < "u") {
      if (!r.call(n.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      E = h.format;
    }
    var g = n.formatters[E], S = d.filter;
    (typeof h.filter == "function" || i(h.filter)) && (S = h.filter);
    var A;
    if (h.arrayFormat in o ? A = h.arrayFormat : "indices" in h ? A = h.indices ? "indices" : "repeat" : A = d.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : d.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : d.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : d.allowEmptyArrays,
      arrayFormat: A,
      charset: b,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : d.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? d.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : d.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : d.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : d.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : d.encodeValuesOnly,
      filter: S,
      format: E,
      formatter: g,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : d.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : d.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : d.strictNullHandling
    };
  };
  return ts = function(m, h) {
    var b = m, E = p(h), g, S;
    typeof E.filter == "function" ? (S = E.filter, b = S("", b)) : i(E.filter) && (S = E.filter, g = S);
    var A = [];
    if (typeof b != "object" || b === null)
      return "";
    var $ = o[E.arrayFormat], w = $ === "comma" && E.commaRoundTrip;
    g || (g = Object.keys(b)), E.sort && g.sort(E.sort);
    for (var _ = e(), L = 0; L < g.length; ++L) {
      var F = g[L], M = b[F];
      E.skipNulls && M === null || s(A, y(
        M,
        F,
        $,
        w,
        E.allowEmptyArrays,
        E.strictNullHandling,
        E.skipNulls,
        E.encodeDotInKeys,
        E.encode ? E.encoder : null,
        E.filter,
        E.sort,
        E.allowDots,
        E.serializeDate,
        E.format,
        E.formatter,
        E.encodeValuesOnly,
        E.charset,
        _
      ));
    }
    var C = A.join(E.delimiter), U = E.addQueryPrefix === !0 ? "?" : "";
    return E.charsetSentinel && (E.charset === "iso-8859-1" ? U += "utf8=%26%2310003%3B&" : U += "utf8=%E2%9C%93&"), C.length > 0 ? U + C : "";
  }, ts;
}
var ns, id;
function PT() {
  if (id) return ns;
  id = 1;
  var e = /* @__PURE__ */ ih(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    return y.replace(/&#(\d+);/g, function(p, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, i = function(y, p, m) {
    if (y && typeof y == "string" && p.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (p.throwOnLimitExceeded && m >= p.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", c = function(p, m) {
    var h = { __proto__: null }, b = m.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var E = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, g = b.split(
      m.delimiter,
      m.throwOnLimitExceeded && typeof E < "u" ? E + 1 : E
    );
    if (m.throwOnLimitExceeded && typeof E < "u" && g.length > E)
      throw new RangeError("Parameter limit exceeded. Only " + E + " parameter" + (E === 1 ? "" : "s") + " allowed.");
    var S = -1, A, $ = m.charset;
    if (m.charsetSentinel)
      for (A = 0; A < g.length; ++A)
        g[A].indexOf("utf8=") === 0 && (g[A] === s ? $ = "utf-8" : g[A] === a && ($ = "iso-8859-1"), S = A, A = g.length);
    for (A = 0; A < g.length; ++A)
      if (A !== S) {
        var w = g[A], _ = w.indexOf("]="), L = _ === -1 ? w.indexOf("=") : _ + 1, F, M;
        if (L === -1 ? (F = m.decoder(w, r.decoder, $, "key"), M = m.strictNullHandling ? null : "") : (F = m.decoder(w.slice(0, L), r.decoder, $, "key"), F !== null && (M = e.maybeMap(
          i(
            w.slice(L + 1),
            m,
            n(h[F]) ? h[F].length : 0
          ),
          function(U) {
            return m.decoder(U, r.decoder, $, "value");
          }
        ))), M && m.interpretNumericEntities && $ === "iso-8859-1" && (M = o(String(M))), w.indexOf("[]=") > -1 && (M = n(M) ? [M] : M), m.comma && n(M) && M.length > m.arrayLimit) {
          if (m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          M = e.combine([], M, m.arrayLimit, m.plainObjects);
        }
        if (F !== null) {
          var C = t.call(h, F);
          C && (m.duplicates === "combine" || w.indexOf("[]=") > -1) ? h[F] = e.combine(
            h[F],
            M,
            m.arrayLimit,
            m.plainObjects
          ) : (!C || m.duplicates === "last") && (h[F] = M);
        }
      }
    return h;
  }, u = function(y, p, m, h) {
    var b = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var E = y.slice(0, -1).join("");
      b = Array.isArray(p) && p[E] ? p[E].length : 0;
    }
    for (var g = h ? p : i(p, m, b), S = y.length - 1; S >= 0; --S) {
      var A, $ = y[S];
      if ($ === "[]" && m.parseArrays)
        e.isOverflow(g) ? A = g : A = m.allowEmptyArrays && (g === "" || m.strictNullHandling && g === null) ? [] : e.combine(
          [],
          g,
          m.arrayLimit,
          m.plainObjects
        );
      else {
        A = m.plainObjects ? { __proto__: null } : {};
        var w = $.charAt(0) === "[" && $.charAt($.length - 1) === "]" ? $.slice(1, -1) : $, _ = m.decodeDotInKeys ? w.replace(/%2E/g, ".") : w, L = parseInt(_, 10), F = !isNaN(L) && $ !== _ && String(L) === _ && L >= 0 && m.parseArrays;
        if (!m.parseArrays && _ === "")
          A = { 0: g };
        else if (F && L < m.arrayLimit)
          A = [], A[L] = g;
        else {
          if (F && m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          F ? (A[L] = g, e.markOverflow(A, L)) : _ !== "__proto__" && (A[_] = g);
        }
      }
      g = A;
    }
    return g;
  }, d = function(p, m) {
    var h = m.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (m.depth <= 0)
      return !m.plainObjects && t.call(Object.prototype, h) && !m.allowPrototypes ? void 0 : [h];
    var b = /(\[[^[\]]*])/, E = /(\[[^[\]]*])/g, g = b.exec(h), S = g ? h.slice(0, g.index) : h, A = [];
    if (S) {
      if (!m.plainObjects && t.call(Object.prototype, S) && !m.allowPrototypes)
        return;
      A[A.length] = S;
    }
    for (var $ = 0; (g = E.exec(h)) !== null && $ < m.depth; ) {
      $ += 1;
      var w = g[1].slice(1, -1);
      if (!m.plainObjects && t.call(Object.prototype, w) && !m.allowPrototypes)
        return;
      A[A.length] = g[1];
    }
    if (g) {
      if (m.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + m.depth + " and strictDepth is true");
      A[A.length] = "[" + h.slice(g.index) + "]";
    }
    return A;
  }, f = function(p, m, h, b) {
    if (p) {
      var E = d(p, h);
      if (E)
        return u(E, m, h, b);
    }
  }, v = function(p) {
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
    var m = typeof p.charset > "u" ? r.charset : p.charset, h = typeof p.duplicates > "u" ? r.duplicates : p.duplicates;
    if (h !== "combine" && h !== "first" && h !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var b = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : r.allowDots : !!p.allowDots;
    return {
      allowDots: b,
      allowEmptyArrays: typeof p.allowEmptyArrays == "boolean" ? !!p.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : r.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : r.arrayLimit,
      charset: m,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : r.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : r.comma,
      decodeDotInKeys: typeof p.decodeDotInKeys == "boolean" ? p.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof p.decoder == "function" ? p.decoder : r.decoder,
      delimiter: typeof p.delimiter == "string" || e.isRegExp(p.delimiter) ? p.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : r.depth,
      duplicates: h,
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
  return ns = function(y, p) {
    var m = v(p);
    if (y === "" || y === null || typeof y > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var h = typeof y == "string" ? c(y, m) : y, b = m.plainObjects ? { __proto__: null } : {}, E = Object.keys(h), g = 0; g < E.length; ++g) {
      var S = E[g], A = f(S, h[S], m, typeof y == "string");
      b = e.merge(b, A, m);
    }
    return m.allowSparse === !0 ? b : e.compact(b);
  }, ns;
}
var rs, ad;
function CT() {
  if (ad) return rs;
  ad = 1;
  var e = /* @__PURE__ */ zT(), t = /* @__PURE__ */ PT(), n = /* @__PURE__ */ $l();
  return rs = {
    formats: n,
    parse: t,
    stringify: e
  }, rs;
}
var sd = /* @__PURE__ */ CT();
function ah(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: AT } = Object.prototype, { getPrototypeOf: zl } = Object, { iterator: Ri, toStringTag: sh } = Symbol, Mi = /* @__PURE__ */ ((e) => (t) => {
  const n = AT.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Mt = (e) => (e = e.toLowerCase(), (t) => Mi(t) === e), Di = (e) => (t) => typeof t === e, { isArray: vr } = Array, dr = Di("undefined");
function io(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lh = Mt("ArrayBuffer");
function TT(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lh(e.buffer), t;
}
const OT = Di("string"), ht = Di("function"), uh = Di("number"), ao = (e) => e !== null && typeof e == "object", NT = (e) => e === !0 || e === !1, Fo = (e) => {
  if (Mi(e) !== "object")
    return !1;
  const t = zl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(sh in e) && !(Ri in e);
}, IT = (e) => {
  if (!ao(e) || io(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, RT = Mt("Date"), MT = Mt("File"), DT = (e) => !!(e && typeof e.uri < "u"), FT = (e) => e && typeof e.getParts < "u", BT = Mt("Blob"), LT = Mt("FileList"), UT = (e) => ao(e) && ht(e.pipe);
function qT() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ld = qT(), ud = typeof ld.FormData < "u" ? ld.FormData : void 0, VT = (e) => {
  let t;
  return e && (ud && e instanceof ud || ht(e.append) && ((t = Mi(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, jT = Mt("URLSearchParams"), [HT, GT, WT, XT] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Mt), YT = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function so(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), vr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (io(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (r = 0; r < a; r++)
      s = i[r], t.call(null, e[s], s, e);
  }
}
function ch(e, t) {
  if (io(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, dh = (e) => !dr(e) && e !== Nn;
function qs() {
  const { caseless: e, skipUndefined: t } = dh(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = e && ch(n, i) || i;
    Fo(n[a]) && Fo(o) ? n[a] = qs(n[a], o) : Fo(o) ? n[a] = qs({}, o) : vr(o) ? n[a] = o.slice() : (!t || !dr(o)) && (n[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && so(arguments[o], r);
  return n;
}
const KT = (e, t, n, { allOwnKeys: r } = {}) => (so(
  t,
  (o, i) => {
    n && ht(o) ? Object.defineProperty(e, i, {
      value: ah(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, i, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), ZT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), JT = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, QT = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && zl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, eO = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, tO = (e) => {
  if (!e) return null;
  if (vr(e)) return e;
  let t = e.length;
  if (!uh(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, nO = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && zl(Uint8Array)), rO = (e, t) => {
  const r = (e && e[Ri]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, oO = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, iO = Mt("HTMLFormElement"), aO = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), cd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), sO = Mt("RegExp"), fh = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  so(n, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (r[i] = a || o);
  }), Object.defineProperties(e, r);
}, lO = (e) => {
  fh(e, (t, n) => {
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
}, uO = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return vr(e) ? r(e) : r(String(e).split(t)), n;
}, cO = () => {
}, dO = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function fO(e) {
  return !!(e && ht(e.append) && e[sh] === "FormData" && e[Ri]);
}
const pO = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ao(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (io(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = vr(r) ? [] : {};
        return so(r, (a, s) => {
          const c = n(a, o + 1);
          !dr(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, hO = Mt("AsyncFunction"), mO = (e) => e && (ao(e) || ht(e)) && ht(e.then) && ht(e.catch), ph = ((e, t) => e ? setImmediate : t ? ((n, r) => (Nn.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Nn && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Nn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Nn.postMessage)), vO = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nn) : typeof process < "u" && process.nextTick || ph, gO = (e) => e != null && ht(e[Ri]), G = {
  isArray: vr,
  isArrayBuffer: lh,
  isBuffer: io,
  isFormData: VT,
  isArrayBufferView: TT,
  isString: OT,
  isNumber: uh,
  isBoolean: NT,
  isObject: ao,
  isPlainObject: Fo,
  isEmptyObject: IT,
  isReadableStream: HT,
  isRequest: GT,
  isResponse: WT,
  isHeaders: XT,
  isUndefined: dr,
  isDate: RT,
  isFile: MT,
  isReactNativeBlob: DT,
  isReactNative: FT,
  isBlob: BT,
  isRegExp: sO,
  isFunction: ht,
  isStream: UT,
  isURLSearchParams: jT,
  isTypedArray: nO,
  isFileList: LT,
  forEach: so,
  merge: qs,
  extend: KT,
  trim: YT,
  stripBOM: ZT,
  inherits: JT,
  toFlatObject: QT,
  kindOf: Mi,
  kindOfTest: Mt,
  endsWith: eO,
  toArray: tO,
  forEachEntry: rO,
  matchAll: oO,
  isHTMLForm: iO,
  hasOwnProperty: cd,
  hasOwnProp: cd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: fh,
  freezeMethods: lO,
  toObjectSet: uO,
  toCamelCase: aO,
  noop: cO,
  toFiniteNumber: dO,
  findKey: ch,
  global: Nn,
  isContextDefined: dh,
  isSpecCompliantForm: fO,
  toJSONObject: pO,
  isAsyncFn: hO,
  isThenable: mO,
  setImmediate: ph,
  asap: vO,
  isIterable: gO
};
let Se = class hh extends Error {
  static from(t, n, r, o, i, a) {
    const s = new hh(t.message, n || t.code, r, o, i);
    return s.cause = t, s.name = t.name, t.status != null && s.status == null && (s.status = t.status), a && Object.assign(s, a), s;
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
  constructor(t, n, r, o, i) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), i && (this.response = i, this.status = i.status);
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
      config: G.toJSONObject(this.config),
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
const yO = null;
function Vs(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function mh(e) {
  return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function os(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = mh(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function bO(e) {
  return G.isArray(e) && !e.some(Vs);
}
const xO = G.toFlatObject(G, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Fi(e, t, n) {
  if (!G.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = G.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, h) {
      return !G.isUndefined(h[m]);
    }
  );
  const r = n.metaTokens, o = n.visitor || d, i = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && G.isSpecCompliantForm(t);
  if (!G.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (G.isDate(p))
      return p.toISOString();
    if (G.isBoolean(p))
      return p.toString();
    if (!c && G.isBlob(p))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return G.isArrayBuffer(p) || G.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, m, h) {
    let b = p;
    if (G.isReactNative(t) && G.isReactNativeBlob(p))
      return t.append(os(h, m, i), u(p)), !1;
    if (p && !h && typeof p == "object") {
      if (G.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (G.isArray(p) && bO(p) || (G.isFileList(p) || G.endsWith(m, "[]")) && (b = G.toArray(p)))
        return m = mh(m), b.forEach(function(g, S) {
          !(G.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? os([m], S, i) : a === null ? m : m + "[]",
            u(g)
          );
        }), !1;
    }
    return Vs(p) ? !0 : (t.append(os(h, m, i), u(p)), !1);
  }
  const f = [], v = Object.assign(xO, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Vs
  });
  function y(p, m) {
    if (!G.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(p), G.forEach(p, function(b, E) {
        (!(G.isUndefined(b) || b === null) && o.call(t, b, G.isString(E) ? E.trim() : E, m, v)) === !0 && y(b, m ? m.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!G.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function dd(e) {
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
function Pl(e, t) {
  this._pairs = [], e && Fi(e, this, t);
}
const vh = Pl.prototype;
vh.append = function(t, n) {
  this._pairs.push([t, n]);
};
vh.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, dd);
  } : dd;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function wO(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function gh(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wO, o = G.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let a;
  if (i ? a = i(t, o) : a = G.isURLSearchParams(t) ? t.toString() : new Pl(t, o).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class fd {
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
    G.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Cl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, _O = typeof URLSearchParams < "u" ? URLSearchParams : Pl, SO = typeof FormData < "u" ? FormData : null, kO = typeof Blob < "u" ? Blob : null, EO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _O,
    FormData: SO,
    Blob: kO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Al = typeof window < "u" && typeof document < "u", js = typeof navigator == "object" && navigator || void 0, $O = Al && (!js || ["ReactNative", "NativeScript", "NS"].indexOf(js.product) < 0), zO = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", PO = Al && window.location.href || "http://localhost", CO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Al,
  hasStandardBrowserEnv: $O,
  hasStandardBrowserWebWorkerEnv: zO,
  navigator: js,
  origin: PO
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...CO,
  ...EO
};
function AO(e, t) {
  return Fi(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ct.isNode && G.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function TO(e) {
  return G.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function OO(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function yh(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= n.length;
    return a = !a && G.isArray(o) ? o.length : a, c ? (G.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !G.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && G.isArray(o[a]) && (o[a] = OO(o[a])), !s);
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    const n = {};
    return G.forEachEntry(e, (r, o) => {
      t(TO(r), o, n, 0);
    }), n;
  }
  return null;
}
function NO(e, t, n) {
  if (G.isString(e))
    try {
      return (t || JSON.parse)(e), G.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const lo = {
  transitional: Cl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = G.isObject(t);
      if (i && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t))
        return o ? JSON.stringify(yh(t)) : t;
      if (G.isArrayBuffer(t) || G.isBuffer(t) || G.isStream(t) || G.isFile(t) || G.isBlob(t) || G.isReadableStream(t))
        return t;
      if (G.isArrayBufferView(t))
        return t.buffer;
      if (G.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return AO(t, this.formSerializer).toString();
        if ((s = G.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Fi(
            s ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), NO(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || lo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (G.isResponse(t) || G.isReadableStream(t))
        return t;
      if (t && G.isString(t) && (r && !this.responseType || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError" ? Se.from(s, Se.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lo.headers[e] = {};
});
const IO = G.toObjectSet([
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
]), RO = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && IO[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, pd = /* @__PURE__ */ Symbol("internals"), MO = (e) => !/[\r\n]/.test(e);
function bh(e, t) {
  if (!(e === !1 || e == null)) {
    if (G.isArray(e)) {
      e.forEach((n) => bh(n, t));
      return;
    }
    if (!MO(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Sr(e) {
  return e && String(e).trim().toLowerCase();
}
function DO(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Bo(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(Bo) : DO(String(e));
}
function FO(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const BO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function is(e, t, n, r, o) {
  if (G.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!G.isString(t)) {
    if (G.isString(r))
      return t.indexOf(r) !== -1;
    if (G.isRegExp(r))
      return r.test(t);
  }
}
function LO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function UO(e, t) {
  const n = G.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, a) {
        return this[r].call(this, t, o, i, a);
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
    function i(s, c, u) {
      const d = Sr(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = G.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (bh(s, c), o[f || c] = Bo(s));
    }
    const a = (s, c) => G.forEach(s, (u, d) => i(u, d, c));
    if (G.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (G.isString(t) && (t = t.trim()) && !BO(t))
      a(RO(t), n);
    else if (G.isObject(t) && G.isIterable(t)) {
      let s = {}, c, u;
      for (const d of t) {
        if (!G.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = d[0]] = (c = s[u]) ? G.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      a(s, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Sr(t), t) {
      const r = G.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return FO(o);
        if (G.isFunction(n))
          return n.call(this, o, r);
        if (G.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Sr(t), t) {
      const r = G.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || is(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = Sr(a), a) {
        const s = G.findKey(r, a);
        s && (!n || is(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return G.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || is(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return G.forEach(this, (o, i) => {
      const a = G.findKey(r, i);
      if (a) {
        n[a] = Bo(o), delete n[i];
        return;
      }
      const s = t ? LO(i) : String(i).trim();
      s !== i && delete n[i], n[s] = Bo(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return G.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && G.isArray(r) ? r.join(", ") : r);
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
    const r = (this[pd] = this[pd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Sr(a);
      r[s] || (UO(o, a), r[s] = !0);
    }
    return G.isArray(t) ? t.forEach(i) : i(t), this;
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
G.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
G.freezeMethods(mt);
function as(e, t) {
  const n = this || lo, r = t || n, o = mt.from(r.headers);
  let i = r.data;
  return G.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function xh(e) {
  return !!(e && e.__CANCEL__);
}
let uo = class extends Se {
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
function wh(e, t, n) {
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
function qO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function VO(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[i];
    a || (a = u), n[o] = c, r[o] = u;
    let f = i, v = 0;
    for (; f !== o; )
      v += n[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < t)
      return;
    const y = d && u - d;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function jO(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const a = (u, d = Date.now()) => {
    n = d, o = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? a(u, d) : (o = u, i || (i = setTimeout(() => {
      i = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const ci = (e, t, n = 3) => {
  let r = 0;
  const o = VO(50, 250);
  return jO((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, c = a - r, u = o(c), d = a <= s;
    r = a;
    const f = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && s && d ? (s - a) / u : void 0,
      event: i,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, hd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, md = (e) => (...t) => G.asap(() => e(...t)), HO = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, GO = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      G.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), G.isString(r) && s.push(`path=${r}`), G.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), G.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function WO(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function XO(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _h(e, t, n) {
  let r = !WO(t);
  return e && (r || n == !1) ? XO(e, t) : t;
}
const vd = (e) => e instanceof mt ? { ...e } : e;
function jn(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, v) {
    return G.isPlainObject(u) && G.isPlainObject(d) ? G.merge.call({ caseless: v }, u, d) : G.isPlainObject(d) ? G.merge({}, d) : G.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f, v) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, d, f, v);
  }
  function i(u, d) {
    if (!G.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, d, f) => o(vd(u), vd(d), f, !0)
  };
  return G.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const f = G.hasOwnProp(c, d) ? c[d] : o, v = f(e[d], t[d], d);
    G.isUndefined(v) && f !== s || (n[d] = v);
  }), n;
}
const Sh = (e) => {
  const t = jn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  if (t.headers = a = mt.from(a), t.url = gh(
    _h(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), s && a.set(
    "Authorization",
    "Basic " + btoa(
      (s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")
    )
  ), G.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (G.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([d, f]) => {
        u.includes(d.toLowerCase()) && a.set(d, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && G.isFunction(r) && (r = r(t)), r || r !== !1 && HO(t.url))) {
    const c = o && i && GO.read(i);
    c && a.set(o, c);
  }
  return t;
}, YO = typeof XMLHttpRequest < "u", KO = YO && function(e) {
  return new Promise(function(n, r) {
    const o = Sh(e);
    let i = o.data;
    const a = mt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, d, f, v, y, p;
    function m() {
      y && y(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function b() {
      if (!h)
        return;
      const g = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), A = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      wh(
        function(w) {
          n(w), m();
        },
        function(w) {
          r(w), m();
        },
        A
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new Se("Request aborted", Se.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(S) {
      const A = S && S.message ? S.message : "Network Error", $ = new Se(A, Se.ERR_NETWORK, e, h);
      $.event = S || null, r($), h = null;
    }, h.ontimeout = function() {
      let S = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || Cl;
      o.timeoutErrorMessage && (S = o.timeoutErrorMessage), r(
        new Se(
          S,
          A.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in h && G.forEach(a.toJSON(), function(S, A) {
      h.setRequestHeader(A, S);
    }), G.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), s && s !== "json" && (h.responseType = o.responseType), u && ([v, p] = ci(u, !0), h.addEventListener("progress", v)), c && h.upload && ([f, y] = ci(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (d = (g) => {
      h && (r(!g || g.type ? new uo(null, e, h) : g), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const E = qO(o.url);
    if (E && ct.protocols.indexOf(E) === -1) {
      r(
        new Se(
          "Unsupported protocol " + E + ":",
          Se.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(i || null);
  });
}, ZO = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, s();
        const d = u instanceof Error ? u : this.reason;
        r.abort(
          d instanceof Se ? d : new uo(d instanceof Error ? d.message : d)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new Se(`timeout of ${t}ms exceeded`, Se.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => G.asap(s), c;
  }
}, JO = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, QO = async function* (e, t) {
  for await (const n of eN(e))
    yield* JO(n, t);
}, eN = async function* (e) {
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
}, gd = (e, t, n, r) => {
  const o = QO(e, t);
  let i = 0, a, s = (c) => {
    a || (a = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: u, value: d } = await o.next();
          if (u) {
            s(), c.close();
            return;
          }
          let f = d.byteLength;
          if (n) {
            let v = i += f;
            n(v);
          }
          c.enqueue(new Uint8Array(d));
        } catch (u) {
          throw s(u), u;
        }
      },
      cancel(c) {
        return s(c), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, yd = 64 * 1024, { isFunction: $o } = G, tN = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(G.global), { ReadableStream: bd, TextEncoder: xd } = G.global, wd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, nN = (e) => {
  e = G.merge.call(
    {
      skipUndefined: !0
    },
    tN,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? $o(t) : typeof fetch == "function", i = $o(n), a = $o(r);
  if (!o)
    return !1;
  const s = o && $o(bd), c = o && (typeof xd == "function" ? /* @__PURE__ */ ((p) => (m) => p.encode(m))(new xd()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), u = i && s && wd(() => {
    let p = !1;
    const m = new bd(), h = new n(ct.origin, {
      body: m,
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return m.cancel(), p && !h;
  }), d = a && s && wd(() => G.isReadableStream(new r("").body)), f = {
    stream: d && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (m, h) => {
      let b = m && m[p];
      if (b)
        return b.call(m);
      throw new Se(
        `Response type '${p}' is not supported`,
        Se.ERR_NOT_SUPPORT,
        h
      );
    });
  });
  const v = async (p) => {
    if (p == null)
      return 0;
    if (G.isBlob(p))
      return p.size;
    if (G.isSpecCompliantForm(p))
      return (await new n(ct.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (G.isArrayBufferView(p) || G.isArrayBuffer(p))
      return p.byteLength;
    if (G.isURLSearchParams(p) && (p = p + ""), G.isString(p))
      return (await c(p)).byteLength;
  }, y = async (p, m) => {
    const h = G.toFiniteNumber(p.getContentLength());
    return h ?? v(m);
  };
  return async (p) => {
    let {
      url: m,
      method: h,
      data: b,
      signal: E,
      cancelToken: g,
      timeout: S,
      onDownloadProgress: A,
      onUploadProgress: $,
      responseType: w,
      headers: _,
      withCredentials: L = "same-origin",
      fetchOptions: F
    } = Sh(p), M = t || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let C = ZO(
      [E, g && g.toAbortSignal()],
      S
    ), U = null;
    const k = C && C.unsubscribe && (() => {
      C.unsubscribe();
    });
    let P;
    try {
      if ($ && u && h !== "get" && h !== "head" && (P = await y(_, b)) !== 0) {
        let ee = new n(m, {
          method: "POST",
          body: b,
          duplex: "half"
        }), fe;
        if (G.isFormData(b) && (fe = ee.headers.get("content-type")) && _.setContentType(fe), ee.body) {
          const [ye, _e] = hd(
            P,
            ci(md($))
          );
          b = gd(ee.body, yd, ye, _e);
        }
      }
      G.isString(L) || (L = L ? "include" : "omit");
      const x = i && "credentials" in n.prototype, N = {
        ...F,
        signal: C,
        method: h.toUpperCase(),
        headers: _.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: x ? L : void 0
      };
      U = i && new n(m, N);
      let D = await (i ? M(U, F) : M(m, N));
      const Z = d && (w === "stream" || w === "response");
      if (d && (A || Z && k)) {
        const ee = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          ee[ne] = D[ne];
        });
        const fe = G.toFiniteNumber(D.headers.get("content-length")), [ye, _e] = A && hd(
          fe,
          ci(md(A), !0)
        ) || [];
        D = new r(
          gd(D.body, yd, ye, () => {
            _e && _e(), k && k();
          }),
          ee
        );
      }
      w = w || "text";
      let Q = await f[G.findKey(f, w) || "text"](
        D,
        p
      );
      return !Z && k && k(), await new Promise((ee, fe) => {
        wh(ee, fe, {
          data: Q,
          headers: mt.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: p,
          request: U
        });
      });
    } catch (x) {
      throw k && k(), x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message) ? Object.assign(
        new Se(
          "Network Error",
          Se.ERR_NETWORK,
          p,
          U,
          x && x.response
        ),
        {
          cause: x.cause || x
        }
      ) : Se.from(x, x && x.code, p, U, x && x.response);
    }
  };
}, rN = /* @__PURE__ */ new Map(), kh = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, i = [r, o, n];
  let a = i.length, s = a, c, u, d = rN;
  for (; s--; )
    c = i[s], u = d.get(c), u === void 0 && d.set(c, u = s ? /* @__PURE__ */ new Map() : nN(t)), d = u;
  return u;
};
kh();
const Tl = {
  http: yO,
  xhr: KO,
  fetch: {
    get: kh
  }
};
G.forEach(Tl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _d = (e) => `- ${e}`, oN = (e) => G.isFunction(e) || e === null || e === !1;
function iN(e, t) {
  e = G.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const i = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let s;
    if (o = r, !oN(r) && (o = Tl[(s = String(r)).toLowerCase()], o === void 0))
      throw new Se(`Unknown adapter '${s}'`);
    if (o && (G.isFunction(o) || (o = o.get(t))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? a.length > 1 ? `since :
` + a.map(_d).join(`
`) : " " + _d(a[0]) : "as no adapter specified";
    throw new Se(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Eh = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: iN,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Tl
};
function ss(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new uo(null, e);
}
function Sd(e) {
  return ss(e), e.headers = mt.from(e.headers), e.data = as.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Eh.getAdapter(e.adapter || lo.adapter, e)(e).then(
    function(r) {
      return ss(e), r.data = as.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return xh(r) || (ss(e), r && r.response && (r.response.data = as.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const $h = "1.15.0", Bi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kd = {};
Bi.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + $h + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Se(
        o(a, " has been removed" + (n ? " in " + n : "")),
        Se.ERR_DEPRECATED
      );
    return n && !kd[a] && (kd[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
Bi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function aN(e, t, n) {
  if (typeof e != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new Se(
          "option " + i + " must be " + c,
          Se.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Se("Unknown option " + i, Se.ERR_BAD_OPTION);
  }
}
const Lo = {
  assertOptions: aN,
  validators: Bi
}, kt = Lo.validators;
let Dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new fd(),
      response: new fd()
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
        const i = (() => {
          if (!o.stack)
            return "";
          const a = o.stack.indexOf(`
`);
          return a === -1 ? "" : o.stack.slice(a + 1);
        })();
        try {
          if (!r.stack)
            r.stack = i;
          else if (i) {
            const a = i.indexOf(`
`), s = a === -1 ? -1 : i.indexOf(`
`, a + 1), c = s === -1 ? "" : i.slice(s + 1);
            String(r.stack).endsWith(c) || (r.stack += `
` + i);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = jn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Lo.assertOptions(
      r,
      {
        silentJSONParsing: kt.transitional(kt.boolean),
        forcedJSONParsing: kt.transitional(kt.boolean),
        clarifyTimeoutError: kt.transitional(kt.boolean),
        legacyInterceptorReqResOrdering: kt.transitional(kt.boolean)
      },
      !1
    ), o != null && (G.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Lo.assertOptions(
      o,
      {
        encode: kt.function,
        serialize: kt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Lo.assertOptions(
      n,
      {
        baseUrl: kt.spelling("baseURL"),
        withXsrfToken: kt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && G.merge(i.common, i[n.method]);
    i && G.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete i[p];
    }), n.headers = mt.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      c = c && m.synchronous;
      const h = n.transitional || Cl;
      h && h.legacyInterceptorReqResOrdering ? s.unshift(m.fulfilled, m.rejected) : s.push(m.fulfilled, m.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let d, f = 0, v;
    if (!c) {
      const p = [Sd.bind(this), void 0];
      for (p.unshift(...s), p.push(...u), v = p.length, d = Promise.resolve(n); f < v; )
        d = d.then(p[f++], p[f++]);
      return d;
    }
    v = s.length;
    let y = n;
    for (; f < v; ) {
      const p = s[f++], m = s[f++];
      try {
        y = p(y);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      d = Sd.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, v = u.length; f < v; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = jn(this.defaults, t);
    const n = _h(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gh(n, t.params, t.paramsSerializer);
  }
};
G.forEach(["delete", "get", "head", "options"], function(t) {
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
G.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(
        jn(s || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: a
        })
      );
    };
  }
  Dn.prototype[t] = n(), Dn.prototype[t + "Form"] = n(!0);
});
let sN = class zh {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        r.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      r.reason || (r.reason = new uo(i, a, s), n(r.reason));
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
      token: new zh(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function lN(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function uN(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
const Hs = {
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
Object.entries(Hs).forEach(([e, t]) => {
  Hs[t] = e;
});
function Ph(e) {
  const t = new Dn(e), n = ah(Dn.prototype.request, t);
  return G.extend(n, Dn.prototype, t, { allOwnKeys: !0 }), G.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ph(jn(e, o));
  }, n;
}
const Ke = Ph(lo);
Ke.Axios = Dn;
Ke.CanceledError = uo;
Ke.CancelToken = sN;
Ke.isCancel = xh;
Ke.VERSION = $h;
Ke.toFormData = Fi;
Ke.AxiosError = Se;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(t) {
  return Promise.all(t);
};
Ke.spread = lN;
Ke.isAxiosError = uN;
Ke.mergeConfig = jn;
Ke.AxiosHeaders = mt;
Ke.formToJSON = (e) => yh(G.isHTMLForm(e) ? new FormData(e) : e);
Ke.getAdapter = Eh.getAdapter;
Ke.HttpStatusCode = Hs;
Ke.default = Ke;
const {
  Axios: eI,
  AxiosError: tI,
  CanceledError: nI,
  isCancel: Ch,
  CancelToken: rI,
  VERSION: oI,
  all: iI,
  Cancel: aI,
  isAxiosError: Ah,
  spread: sI,
  toFormData: lI,
  AxiosHeaders: uI,
  HttpStatusCode: cI,
  formToJSON: dI,
  getAdapter: fI,
  mergeConfig: cN
} = Ke;
var dN = class {
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
    return Yp(this.config, e) ? xt(this.config, e) : xt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? Et(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      Et(this.config, n, r);
    });
  }
}, Sn = new dN({
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
function Zr(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function St(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ed = (e) => St("before", { cancelable: !0, detail: { visit: e } }), fN = (e) => St("error", { detail: { errors: e } }), pN = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), hN = (e) => St("finish", { detail: { visit: e } }), mN = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), vN = (e) => St("beforeUpdate", { detail: { page: e } }), Rr = (e) => St("navigate", { detail: { page: e } }), gN = (e) => St("progress", { detail: { progress: e } }), yN = (e) => St("start", { detail: { visit: e } }), bN = (e) => St("success", { detail: { page: e } }), xN = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), wN = (e) => St("prefetching", { detail: { visit: e } }), di = (e) => St("flash", { detail: { flash: e } }), dt = class {
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
var _N = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = Th(), n = await Oh(), r = await PN(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await kN(t, r, e);
}, fr = {
  key: "historyKey",
  iv: "historyIv"
}, SN = async (e) => {
  const t = Th(), n = await Oh();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await EN(t, n, e);
}, kN = async (e, t, n) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  const r = new TextEncoder(), o = JSON.stringify(n), i = new Uint8Array(o.length * 3), a = r.encodeInto(o, i);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    i.subarray(0, a.written)
  );
}, EN = async (e, t, n) => {
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
}, Th = () => {
  const e = dt.get(fr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(fr.iv, Array.from(t)), t;
}, $N = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), zN = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(fr.key, Array.from(new Uint8Array(t)));
}, PN = async (e) => {
  if (e)
    return e;
  const t = await $N();
  return t ? (await zN(t), t) : null;
}, Oh = async () => {
  const e = dt.get(fr.key);
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
}, Nh = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !CN(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, CN = (e, t) => {
  switch (typeof e) {
    case "object":
      return Nh(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, AN = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, $d = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(AN))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, TN = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n, cacheTags: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const i = this.findCached(e);
    if (!e.fresh && i && i.staleTimestamp > Date.now())
      return Promise.resolve();
    const [a, s] = this.extractStaleValues(n), c = new Promise((u, d) => {
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
          Lt.removeFromInFlight(e), d(f);
        }
      });
    }).then((u) => {
      this.remove(e);
      const d = u.getPageResponse();
      he.mergeOncePropsIntoResponse(d), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + a,
        expiresAt: Date.now() + s,
        response: c,
        singleUse: s === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(r) ? r : [r]
      });
      const f = this.getShortestOncePropTtl(d);
      return this.scheduleForRemoval(
        e,
        f ? Math.min(s, f) : s
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
    return [$d(t), $d(n)];
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
    const t = st(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return Nh(
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
        for (const [a, s] of Object.entries(n.deferredProps ?? {})) {
          const c = s.filter((u) => n.props[u] === void 0);
          c.length > 0 ? n.deferredProps[a] = c : delete n.deferredProps[a];
        }
        const r = this.getShortestOncePropTtl(n);
        if (r === null)
          return;
        const o = e.expiresAt - Date.now(), i = Math.min(o, r);
        i > 0 ? this.scheduleForRemoval(e.params, i) : this.remove(e.params);
      });
    });
  }
  getShortestOncePropTtl(e) {
    const t = Object.values(e.onceProps ?? {}).map((n) => n.expiresAt).filter((n) => !!n);
    return t.length === 0 ? null : Math.min(...t) - Date.now();
  }
}, Lt = new TN(), ls = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, ON = (e) => {
  const t = (a) => {
    const s = window.getComputedStyle(a);
    return ["scroll", "overlay"].includes(s.overflowY) ? !0 : s.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(s.overflowX) ? !0 : r(s.maxHeight, a.style.height) || o(a, "height");
  }, n = (a) => {
    const s = window.getComputedStyle(a);
    return ["scroll", "overlay"].includes(s.overflowX) ? !0 : s.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(s.overflowY) ? !0 : r(s.maxWidth, a.style.width) || o(a, "width");
  }, r = (a, s) => !!(a && a !== "none" && a !== "0px" || s && s !== "auto" && s !== "0"), o = (a, s) => {
    const c = a.parentElement;
    if (!c)
      return !1;
    const u = window.getComputedStyle(c);
    if (["flex", "inline-flex"].includes(u.display)) {
      const d = ["column", "column-reverse"].includes(u.flexDirection);
      return s === "height" ? d : !d;
    }
    return ["grid", "inline-grid"].includes(u.display);
  };
  let i = e?.parentElement;
  for (; i; ) {
    const a = t(i) || n(i);
    if (window.getComputedStyle(i).display !== "contents" && a)
      return i;
    i = i.parentElement;
  }
  return null;
}, Ih = (e, t) => {
  if (!t)
    return e.filter((i) => ls(i));
  const n = e.indexOf(t), r = [], o = [];
  for (let i = n; i >= 0; i--) {
    const a = e[i];
    if (ls(a))
      r.push(a);
    else
      break;
  }
  for (let i = n + 1; i < e.length; i++) {
    const a = e[i];
    if (ls(a))
      o.push(a);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Mr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Mr(e, t - 1) : e();
  });
}, Ar = typeof window > "u", NN = !Ar && /Firefox/i.test(window.navigator.userAgent), ft = class {
  static save() {
    Me.saveScrollPositions(this.getScrollRegions());
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
    if (NN && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Mr(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    !Ar && window.location.hash || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = Ar ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    Ar || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    Ar || this.regions().forEach((t, n) => {
      const r = e[n];
      r && (typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left));
    });
  }
  static restoreDocument() {
    const e = Me.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    Me.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, Ol = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function Gs(e) {
  return Ol(e) || e instanceof FormData && Array.from(e.values()).some((t) => Gs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Gs(t));
}
var Ws = (e) => e instanceof FormData;
function Rh(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && Dh(t, Mh(n, o, "indices"), e[o], r);
  return t;
}
function Mh(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function Dh(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => Dh(e, Mh(t, o.toString(), r), n[o], r)
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
  Rh(n, e, t, r);
}
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var IN = (e, t, n, r, o) => {
  let i = typeof e == "string" ? $t(e) : e;
  if ((Gs(t) || r) && !Ws(t) && (Sn.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = Rh(t, new FormData(), null, o)), Ws(t))
    return [i, t];
  const [a, s] = Nl(n, i, t, o);
  return [$t(a), s];
};
function Nl(e, t, n, r = "brackets") {
  const o = e === "get" && !Ws(n) && Object.keys(n).length > 0, i = Fh(t.toString()), a = i || t.toString().startsWith("/") || t.toString() === "", s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), c = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, d = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = sd.stringify(
      { ...sd.parse(f.search, y), ...n },
      {
        encodeValuesOnly: !0,
        arrayFormat: v ? "indices" : r
      }
    );
  }
  return [
    [
      i ? `${f.protocol}//${f.host}` : "",
      a ? f.pathname : "",
      s ? f.pathname.substring(c ? 0 : 1) : "",
      u ? f.search : "",
      d ? f.hash : ""
    ].join(""),
    o ? {} : n
  ];
}
function fi(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var zd = (e, t) => {
  e.hash && !t.hash && fi(e).href === t.href && (t.hash = e.hash);
}, pi = (e, t) => fi(e).href === fi(t).href, RN = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function sn(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function Fh(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function MN(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var DN = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1, this.pendingDeferredProps = null, this.historyQuotaExceeded = !1;
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: n,
    onFlash: r
  }) {
    return this.page = { ...e, flash: e.flash ?? {} }, this.swapComponent = t, this.resolveComponent = n, this.onFlashCallback = r, Ht.on("historyQuotaExceeded", () => {
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
    const i = this.componentId;
    return e.clearHistory && Me.clear(), this.resolve(e.component).then((a) => {
      if (i !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const s = typeof window > "u", c = s ? new URL(e.url) : window.location, u = !s && n ? ft.getScrollRegions() : [];
      t = t || pi($t(e.url), c);
      const d = { ...e, flash: {} };
      return new Promise(
        (f) => t ? Me.replaceState(d, f) : Me.pushState(d, f)
      ).then(() => {
        const f = !this.isTheSame(e);
        if (!f && Object.keys(e.props.errors || {}).length > 0 && (o = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && Lt.updateCachedOncePropsFromCurrentPage(), f && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: a,
          page: e,
          preserveState: r,
          viewTransition: o
        }).then(() => {
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(u)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Ht.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Rr(e);
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, Me.setCurrent(e), this.swap({ component: n, page: e, preserveState: t, viewTransition: !1 })));
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
    const i = typeof r == "boolean" ? () => null : r;
    return new Promise((a) => {
      const s = document.startViewTransition(() => o().then(a));
      i(s);
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
}, he = new DN(), Li = class {
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
}, er = typeof window > "u", kr = new Li(), Pd = !er && /CriOS/.test(window.navigator.userAgent), FN = class {
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
      this.current = e, kr.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Pd ? new Promise((o) => {
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
        props: st(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((n) => e.encryptHistory ? _N(t).then(n) : n(t));
  }
  processQueue() {
    return kr.process();
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
    return e instanceof ArrayBuffer ? SN(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    kr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !xn(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    kr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !xn(this.getDocumentScrollPosition(), e))
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
    if (xn(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (he.merge(r), !er) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, kr.add(() => this.getPageData(e).then((o) => {
        const i = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Pd ? new Promise((a) => {
          setTimeout(() => i().then(a));
        }) : i();
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
        Ht.fireInternalEvent("historyQuotaExceeded", t);
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
    dt.remove(fr.key), dt.remove(fr.iv);
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
var Me = new FN(), BN = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", Zr(ft.onWindowScroll.bind(ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Zr(ft.onScroll.bind(ft), 100), !0);
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
    e.persisted && Me.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const n = $t(he.get().url);
      n.hash = window.location.hash, Me.replaceState({ ...he.getWithoutFlashData(), url: n.href }), ft.reset();
      return;
    }
    if (!Me.isValidState(t))
      return this.onMissingHistoryItem();
    Me.decrypt(t.page).then((n) => {
      if (he.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ye.cancelAll({ prefetch: !1 }), he.setQuietly(n, { preserveState: !1 }).then(() => {
        ft.restore(Me.getScrollRegions()), Rr(he.get());
        const r = {}, o = he.get().props;
        for (const [i, a] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const s = a.filter((c) => o[c] === void 0);
          s.length > 0 && (r[i] = s);
        }
        Object.keys(r).length > 0 && this.fireInternalEvent("loadDeferredProps", r);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Ht = new BN(), LN = class {
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
}, us = new LN(), UN = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    us.isReload() && (Me.deleteState(Me.rememberedState), Me.clearInitialState(Me.rememberedState));
  }
  static handleBackForward() {
    if (!us.isBackForward() || !Me.browserHasHistoryEntry())
      return !1;
    const e = Me.getScrollRegions();
    return Me.decrypt().then((t) => {
      he.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Rr(he.get());
      });
    }).catch(() => {
      Ht.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!dt.exists(dt.locationVisitKey))
      return !1;
    const e = dt.get(dt.locationVisitKey) || {};
    return dt.remove(dt.locationVisitKey), typeof window < "u" && he.setUrlHash(window.location.hash), Me.decrypt(he.get()).then(() => {
      const t = Me.getState(Me.rememberedState, {}), n = Me.getScrollRegions();
      he.remember(t), he.set(he.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && ft.restore(n), Rr(he.get());
      });
    }).catch(() => {
      Ht.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && he.setUrlHash(window.location.hash), he.set(he.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      us.isReload() ? ft.restore(Me.getScrollRegions()) : ft.scrollToAnchor();
      const e = he.get();
      Rr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => di(t));
    });
  }
}, qN = class {
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
}, VN = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new qN(e, t, n);
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
}, jN = new VN(), Xs = class Uo {
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
    return new Uo(t);
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
    this.params.preserveScroll = Uo.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = Uo.resolvePreserveOption(this.params.preserveState, t);
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
}, Bh = {
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
}, HN = {
  show(e) {
    const { iframe: t, page: n } = Bh.createIframeAndPage(e);
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
    `, document.head.appendChild(o), r.addEventListener("click", (i) => {
      i.target === r && r.close();
    }), r.addEventListener("close", () => {
      o.remove(), r.remove();
    }), r.appendChild(t), document.body.prepend(r), r.showModal(), r.focus(), !t.contentWindow)
      throw new Error("iframe not yet ready.");
    t.contentWindow.document.open(), t.contentWindow.document.write(n.outerHTML), t.contentWindow.document.close();
  }
}, GN = new Li(), Cd = class Lh {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new Lh(t, n, r);
  }
  async handlePrefetch() {
    pi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return GN.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), xN(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await Me.processQueue(), Me.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = he.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return fN(r), this.requestParams.all().onError(r);
    }
    Ye.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ye.flush(he.get().url);
    const { flash: n } = he.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (di(n), this.requestParams.all().onFlash(n)), bN(he.get()), await this.requestParams.all().onSuccess(he.get()), Me.preserveUrl = !1;
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
      return zd(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (mN(t))
      return Sn.get("future.useDialogForErrorModal") ? HN.show(t.data) : Bh.show(t.data);
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
      pi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), he.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = Me.preserveUrl ? he.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), vN(t), he.set(t, {
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
    return zd(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== he.get().component || Sn.get("future.preserveEqualProps") !== !0)
      return;
    const n = he.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      xn(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== he.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], i = t.matchPropsOn || [], a = (c, u) => {
      const d = xt(he.get().props, c), f = xt(t.props, c);
      if (Array.isArray(f)) {
        const v = this.mergeOrMatchItems(
          d || [],
          f,
          c,
          i,
          u
        );
        Et(t.props, c, v);
      } else if (typeof f == "object" && f !== null) {
        const v = {
          ...d || {},
          ...f
        };
        Et(t.props, c, v);
      }
    };
    if (n.forEach((c) => a(c, !0)), r.forEach((c) => a(c, !1)), o.forEach((c) => {
      const u = he.get().props[c], d = t.props[c], f = (v, y, p) => Array.isArray(y) ? this.mergeOrMatchItems(v, y, p, i) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (m, h) => (m[h] = f(v ? v[h] : void 0, y[h], `${p}.${h}`), m),
        { ...v }
      ) : y;
      t.props[c] = f(u, d, c);
    }), t.props = { ...he.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const c = he.get().props.errors;
      c && Object.keys(c).length > 0 && (t.props.errors = c);
    }
    he.get().scrollProps && (t.scrollProps = {
      ...he.get().scrollProps || {},
      ...t.scrollProps || {}
    }), he.hasOnceProps() && (t.onceProps = {
      ...he.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...he.get().flash });
    const s = he.get().initialDeferredProps;
    s && Object.keys(s).length > 0 && (t.initialDeferredProps = s);
  }
  mergeOrMatchItems(t, n, r, o, i = !0) {
    const a = Array.isArray(t) ? t : [], s = o.find((d) => d.split(".").slice(0, -1).join(".") === r);
    if (!s)
      return i ? [...a, ...n] : [...n, ...a];
    const c = s.split(".").pop() || "", u = /* @__PURE__ */ new Map();
    return n.forEach((d) => {
      this.hasUniqueProperty(d, c) && u.set(d[c], d);
    }), i ? this.appendWithMatching(a, n, u, c) : this.prependWithMatching(a, n, u, c);
  }
  appendWithMatching(t, n, r, o) {
    const i = t.map((s) => this.hasUniqueProperty(s, o) && r.has(s[o]) ? r.get(s[o]) : s), a = n.filter((s) => this.hasUniqueProperty(s, o) ? !t.some(
      (c) => this.hasUniqueProperty(c, o) && c[o] === s[o]
    ) : !0);
    return [...i, ...a];
  }
  prependWithMatching(t, n, r, o) {
    const i = t.filter((a) => this.hasUniqueProperty(a, o) ? !r.has(a[o]) : !0);
    return [...n, ...i];
  }
  hasUniqueProperty(t, n) {
    return t && typeof t == "object" && n in t;
  }
  async setRememberedState(t) {
    const n = await Me.getState(Me.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === he.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Ad = class Uh {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Xs.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Uh(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), yN(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), wN(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Ke({
      method: this.requestParams.all().method,
      url: fi(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Cd.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Cd.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Ke.isCancel(n) && pN(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, hN(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, gN(t), this.requestParams.all().onProgress(t));
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
}, Td = class {
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
}, WN = class {
  constructor() {
    this.syncRequestStream = new Td({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Td({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Li();
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
    }), UN.handle(), Ht.init(), Ht.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Ht.on("loadDeferredProps", (o) => {
      this.loadDeferredProps(o);
    }), Ht.on("historyQuotaExceeded", (o) => {
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
    Me.remember(e, t);
  }
  restore(e = "default") {
    return Me.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Ht.onGlobalEvent(e, t);
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
    return jN.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Ed(n))
      return;
    const o = $t(he.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? RN(n.url, o) : pi(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !he.isCleared() && !n.preserveUrl && ft.save();
    const s = {
      ...n,
      ...r
    }, c = Lt.get(s);
    c ? (Dr.reveal(c.inFlight), Lt.use(c, s)) : (Dr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Ad.create(s, he.get())));
  }
  getCached(e, t = {}) {
    return Lt.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Lt.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Lt.removeAll();
  }
  flushByCacheTags(e) {
    Lt.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return Lt.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (sn(e) ? e.method : "get")) !== "get")
      throw new Error("Prefetch requests must use the GET method");
    const o = this.getPendingVisit(e, {
      ...t,
      async: !0,
      showProgress: !1,
      prefetch: !0,
      viewTransition: !1
    }), i = o.url.origin + o.url.pathname + o.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (i === a)
      return;
    const s = this.getVisitEvents(t);
    if (s.onBefore(o) === !1 || !Ed(o))
      return;
    Dr.hide(), this.asyncRequestStream.interruptInFlight();
    const c = {
      ...o,
      ...s
    };
    new Promise((d) => {
      const f = () => {
        he.get() ? d() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Lt.add(
        c,
        (d) => {
          this.asyncRequestStream.send(Ad.create(d, he.get()));
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
    Me.clear();
  }
  decryptHistory() {
    return Me.decrypt();
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
        return Et(st(r), e, o);
      },
      ...n || {}
    });
  }
  appendToProp(e, t, n) {
    this.replaceProp(
      e,
      (r, o) => {
        const i = typeof t == "function" ? t(r, o) : t;
        return Array.isArray(r) || (r = r !== void 0 ? [r] : []), [...r, i];
      },
      n
    );
  }
  prependToProp(e, t, n) {
    this.replaceProp(
      e,
      (r, o) => {
        const i = typeof t == "function" ? t(r, o) : t;
        return Array.isArray(r) || (r = r !== void 0 ? [r] : []), [i, ...r];
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
    he.setFlash(r), Object.keys(r).length && di(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = he.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((m) => [m.prop, n.props[m.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, i = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: a, onError: s, onFinish: c, onFlash: u, onSuccess: d, ...f } = e, v = {
      ...n,
      ...f,
      flash: i ?? {},
      props: o
    }, y = Xs.resolvePreserveOption(e.preserveScroll ?? !1, v), p = Xs.resolvePreserveOption(e.preserveState ?? !1, v);
    return he.set(v, {
      replace: t,
      preserveScroll: y,
      preserveState: p,
      viewTransition: a
    }).then(() => {
      const m = he.get().flash;
      Object.keys(m).length > 0 && (di(m), u?.(m));
      const h = he.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        d?.(he.get());
        return;
      }
      const b = e.errorBag ? h[e.errorBag || ""] || {} : h;
      s?.(b);
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
    if (sn(e)) {
      const u = e;
      e = u.url, t.method = t.method ?? u.method;
    }
    const r = Sn.get("visitOptions"), o = r ? r(e.toString(), st(t)) || {} : {}, i = {
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
    }, [a, s] = IN(
      e,
      i.data,
      i.method,
      i.forceFormData,
      i.queryStringArrayFormat
    ), c = {
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...i,
      ...n,
      url: a,
      data: s
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
}, qo = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? sn(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : sn(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function XN(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, i) => i === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function YN(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function KN(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function ZN(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Vo(e) {
  if (Array.isArray(e))
    return e.map(Vo);
  if (typeof e != "object" || e === null || Ol(e))
    return e;
  if (ZN(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = Vo(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = Vo(e[n]);
  return t;
}
function Od(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = YN(XN(n));
    if (o[o.length - 1] === "") {
      const i = o.slice(0, -1), a = xt(t, i);
      if (Array.isArray(a))
        a.push(r);
      else if (a && typeof a == "object" && !Ol(a)) {
        const s = Object.keys(a).filter((c) => /^\d+$/.test(c)).map(Number).sort((c, u) => c - u);
        Et(t, i, s.length > 0 ? [...s.map((c) => a[c]), r] : [r]);
      } else
        Et(t, i, [r]);
      continue;
    }
    KN(t, o.map(String), r);
  }
  return Vo(t);
}
var cs = {
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
  update: Zr(function(e) {
    const t = e.map((r) => this.buildDOMElement(r));
    Array.from(document.head.childNodes).filter(
      (r) => this.isInertiaManagedElement(r)
    ).forEach((r) => {
      const o = this.findMatchingElementIndex(r, t);
      if (o === -1) {
        r?.parentNode?.removeChild(r);
        return;
      }
      const i = t.splice(o, 1)[0];
      i && !r.isEqualNode(i) && r?.parentNode?.replaceChild(i, r);
    }), t.forEach((r) => document.head.appendChild(r));
  }, 1)
};
function JN(e, t, n) {
  const r = {};
  let o = 0;
  function i() {
    const f = o += 1;
    return r[f] = [], f.toString();
  }
  function a(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], d());
  }
  function s(f) {
    Object.keys(r).indexOf(f) === -1 && (r[f] = []);
  }
  function c(f, v = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = v), d();
  }
  function u() {
    const f = t(""), v = cs.preferredAttribute(), y = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, p = Object.values(r).reduce((m, h) => m.concat(h), []).reduce((m, h) => {
      if (h.indexOf("<") === -1)
        return m;
      if (h.indexOf("<title ") === 0) {
        const E = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return m.title = E ? `${E[1]}${t(E[2])}${E[3]}` : h, m;
      }
      const b = h.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return b ? m[b[0]] = h : m[Object.keys(m).length] = h, m;
    }, y);
    return Object.values(p);
  }
  function d() {
    e ? n(u()) : cs.update(u());
  }
  return d(), {
    forceUpdate: d,
    createProvider: function() {
      const f = i();
      return {
        preferredAttribute: cs.preferredAttribute,
        reconnect: () => s(f),
        update: (v) => c(f, v),
        disconnect: () => a(f)
      };
    }
  };
}
var QN = "X-Inertia-Infinite-Scroll-Merge-Intent", e8 = (e) => {
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
    const b = Ye.restore(o());
    b && typeof b == "object" && b.lastLoadedPage === t().currentPage && (n.previousPage = b.previousPage, n.nextPage = b.nextPage, n.lastLoadedPage = b.lastLoadedPage, n.requestCount = b.requestCount || 0);
  }
  const i = Ye.on("success", (b) => {
    n.component === b.detail.page.component && t().reset && (r(), e.onReset?.());
  }), a = (b) => b === "next" ? "nextPage" : "previousPage", s = (b) => {
    const E = a(b);
    return n[E];
  }, c = (b) => {
    const E = t(), g = a(b);
    n.lastLoadedPage = E.currentPage, n[g] = E[g], n.requestCount += 1, Ye.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, u = () => t().pageName, d = () => n.requestCount, f = (b, E = {}) => {
    const g = s(b);
    n.loading || g === null || (n.loading = !0, Ye.reload({
      ...E,
      data: { [u()]: g },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [QN]: b === "previous" ? "prepend" : "append",
        ...E.headers
      },
      onBefore: (S) => {
        b === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), E.onBefore?.(S);
      },
      onBeforeUpdate: (S) => {
        e.onBeforeUpdate(), E.onBeforeUpdate?.(S);
      },
      onSuccess: (S) => {
        c(b), E.onSuccess?.(S);
      },
      onFinish: (S) => {
        n.loading = !1, b === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), E.onFinish?.(S);
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
    removeEventListener: i
  };
}, t8 = () => {
  const e = [];
  return {
    new: (r, o = {}) => {
      const i = new IntersectionObserver((a) => {
        for (const s of a)
          s.isIntersecting && r(s);
      }, o);
      return e.push(i), i;
    },
    flushAll: () => {
      e.forEach((r) => r.disconnect()), e.length = 0;
    }
  };
}, jo = "infiniteScrollPage", ds = "infiniteScrollIgnore", qh = (e) => e.dataset[jo], n8 = (e) => {
  const t = t8();
  let n, r, o, i, a = !1;
  const s = () => {
    i = new MutationObserver((w) => {
      w.forEach((_) => {
        _.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && v.add(L);
        });
      }), S();
    }), i.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (w) => e.onItemIntersected(w.target)
    );
    const $ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, $), o = t.new(e.onNextTriggered, $);
  }, c = () => {
    a && u();
    const $ = e.getStartElement(), w = e.getEndElement();
    $ && e.shouldFetchPrevious() && r.observe($), w && e.shouldFetchNext() && o.observe(w), a = !0;
  }, u = () => {
    a && (r.disconnect(), o.disconnect(), a = !1);
  }, d = () => {
    a && c();
  }, f = () => {
    u(), t.flushAll(), i?.disconnect();
  }, v = /* @__PURE__ */ new Set(), y = ($) => !(jo in $.dataset) && !(ds in $.dataset), p = () => {
    Array.from(v).forEach(($) => {
      y($) && ($.dataset[ds] = "true"), n.observe($);
    }), v.clear();
  }, m = ($) => Array.from(
    $.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let h = !1;
  const b = ($) => {
    !h && (h = !0, A()) || (m(e.getItemsElement()).forEach((w) => {
      y(w) && (w.dataset[jo] = $?.toString() || "1"), n.observe(w);
    }), g());
  }, E = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, g = () => {
    const $ = {}, w = e.getItemsElement().childNodes;
    for (let _ = 0; _ < w.length; _++) {
      const L = w[_];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const F = qh(L);
      typeof F > "u" || (F in $ ? $[F].to = _ : $[F] = { from: _, to: _ });
    }
    Ye.remember($, E());
  }, S = Zr(g, 250), A = () => {
    const $ = Ye.restore(E());
    if (!$ || typeof $ != "object")
      return !1;
    const w = e.getItemsElement().childNodes;
    for (let _ = 0; _ < w.length; _++) {
      const L = w[_];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const F = L;
      let M;
      for (const [C, U] of Object.entries($))
        if (_ >= U.from && _ <= U.to) {
          M = C;
          break;
        }
      if (M)
        F.dataset[jo] = M;
      else if (y(F))
        F.dataset[ds] = "true";
      else
        continue;
      n.observe(F);
    }
    return !0;
  };
  return {
    setupObservers: s,
    enableTriggers: c,
    disableTriggers: u,
    refreshTriggers: d,
    flushAll: f,
    processManuallyAddedElements: p,
    processServerLoadedElements: b
  };
}, r8 = new Li(), Jn, mn, zo = null, o8 = (e) => {
  let t = !0;
  const n = (o) => {
    r8.add(() => new Promise((i) => {
      if (!t)
        return Jn = mn = null, i();
      if (!Jn || !mn) {
        const c = he.get().url;
        Jn = $t(c), mn = $t(c), zo = Fh(c);
      }
      const a = e.getPageName(), s = mn.searchParams;
      o === "1" ? s.delete(a) : s.set(a, o), setTimeout(() => i());
    })).finally(() => {
      t && Jn && mn && Jn.href !== mn.href && zo !== null && Ye.replace({
        url: MN(mn, zo),
        preserveScroll: !0,
        preserveState: !0
      }), Jn = mn = zo = null;
    });
  };
  return {
    onItemIntersected: Zr((o) => {
      const i = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !i)
        return;
      const a = /* @__PURE__ */ new Map(), s = [...i.children];
      Ih(s, o).forEach((d) => {
        const f = qh(d) ?? "1";
        a.has(f) ? a.set(f, a.get(f) + 1) : a.set(f, 1);
      });
      const u = Array.from(a.entries()).sort((d, f) => f[1] - d[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, i8 = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const s = e.getScrollableParent(), c = e.getItemsElement();
        n = s?.scrollTop || window.scrollY;
        const u = Ih([...c.children]);
        if (u.length > 0) {
          r = u[0];
          const d = s?.getBoundingClientRect() || { top: 0 }, f = s ? d.top : 0;
          o = r.getBoundingClientRect().top - f;
        }
      },
      restoreScrollPosition: () => {
        if (!r)
          return;
        let s = 0, c = !1;
        const u = () => {
          if (s++, c || s > 10)
            return !1;
          const d = e.getScrollableParent(), f = d?.getBoundingClientRect() || { top: 0 }, v = d ? f.top : 0, m = r.getBoundingClientRect().top - v - o;
          if (m === 0) {
            window.requestAnimationFrame(u);
            return;
          }
          d ? d.scrollTo({ top: n + m }) : window.scrollTo(0, window.scrollY + m), c = !0;
        };
        window.requestAnimationFrame(u);
      }
    };
  }
});
function a8(e) {
  const t = o8({ ...e, getPageName: () => o.getPageName() }), n = i8(e), r = n8({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = e8({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Mr(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Mr(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), i = (u) => {
    const { captureScrollPosition: d, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), y = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (p) => {
      v(p), d();
    }, u.onSuccess = (p) => {
      y(p), f();
    }, u;
  }, a = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = i(u)), a(u);
  };
  const s = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = i(u)), s(u);
  };
  const c = Ye.on("success", () => Mr(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      c(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function Vh(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function Po(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(Vh(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Nd(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !Vh(e) && (e.key === "Enter" || t && e.key === " ");
}
var nt = "nprogress", zt, at = {
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
}, kn = null, s8 = (e) => {
  Object.assign(at, e), at.includeCSS && p8(at.color), zt = document.createElement("div"), zt.id = nt, zt.innerHTML = at.template;
}, Ui = (e) => {
  const t = jh();
  e = Yh(e, at.minimum, 1), kn = e === 1 ? null : e;
  const n = u8(!t), r = n.querySelector(at.barSelector), o = at.speed, i = at.easing;
  n.offsetWidth, f8((a) => {
    const s = at.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate3d(${Ho(e)}%,0,0)`
    } : at.positionUsing === "translate" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate(${Ho(e)}%,0)`
    } : { marginLeft: `${Ho(e)}%` };
    for (const c in s)
      r.style[c] = s[c];
    if (e !== 1)
      return setTimeout(a, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Xh(), n.style.transition = "", n.style.opacity = "", a();
      }, o);
    }, o);
  });
}, jh = () => typeof kn == "number", Hh = () => {
  kn || Ui(0);
  const e = function() {
    setTimeout(function() {
      kn && (Gh(), e());
    }, at.trickleSpeed);
  };
  at.trickle && e();
}, l8 = (e) => {
  !e && !kn || (Gh(0.3 + 0.5 * Math.random()), Ui(1));
}, Gh = (e) => {
  const t = kn;
  if (t === null)
    return Hh();
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
    })(), Ui(Yh(t + e, 0, 0.994));
}, u8 = (e) => {
  if (c8())
    return document.getElementById(nt);
  document.documentElement.classList.add(`${nt}-busy`);
  const t = zt.querySelector(at.barSelector), n = e ? "-100" : Ho(kn || 0), r = Wh();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, at.showSpinner || zt.querySelector(at.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${nt}-custom-parent`), r.appendChild(zt), zt;
}, Wh = () => d8(at.parent) ? at.parent : document.querySelector(at.parent), Xh = () => {
  document.documentElement.classList.remove(`${nt}-busy`), Wh().classList.remove(`${nt}-custom-parent`), zt?.remove();
}, c8 = () => document.getElementById(nt) !== null, d8 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Yh(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Ho = (e) => (-1 + e) * 100, f8 = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), p8 = (e) => {
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
}, h8 = () => {
  zt && (zt.style.display = "");
}, m8 = () => {
  zt && (zt.style.display = "none");
}, Ft = {
  configure: s8,
  isStarted: jh,
  done: l8,
  set: Ui,
  remove: Xh,
  start: Hh,
  status: kn,
  show: h8,
  hide: m8
}, v8 = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    Ft.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && Ft.show();
  }
  hide() {
    this.hideCount++, Ft.hide();
  }
  set(e) {
    Ft.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    Ft.done();
  }
  reset() {
    Ft.set(0);
  }
  remove() {
    Ft.done(), Ft.remove();
  }
  isStarted() {
    return Ft.isStarted();
  }
  getStatus() {
    return Ft.status;
  }
}, Dr = new v8();
Dr.reveal;
Dr.hide;
var Kh = /* @__PURE__ */ Symbol("FormComponentReset");
function Ys(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function g8(e, t) {
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
function y8(e, t) {
  const n = e.value, r = Array.from(e.selectedOptions).map((a) => a.value);
  if (e.multiple) {
    const a = t.map((s) => String(s));
    Array.from(e.options).forEach((s) => {
      s.selected = a.includes(s.value);
    });
  } else
    e.value = t[0] !== void 0 ? String(t[0]) : "";
  const o = Array.from(e.selectedOptions).map((a) => a.value);
  return e.multiple ? JSON.stringify(r.sort()) !== JSON.stringify(o.sort()) : e.value !== n;
}
function fs(e, t) {
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
    return g8(e, t);
  if (e instanceof HTMLSelectElement)
    return y8(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function b8(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && Ys(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        fs(r, t) && (n = !0);
      else {
        const i = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        fs(r, i) && (n = !0);
      }
  }) : Ys(e) && (n = fs(e, t)), n;
}
function x8(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const i = new FormData(e), a = Array.from(e.elements).map((s) => Ys(s) ? s.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...i.keys(), ...a])];
  }
  let o = !1;
  n.forEach((i) => {
    const a = e.elements.namedItem(i);
    a && b8(a, t.getAll(i)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [Kh]: !0 } })
  );
}
var Ye = new WN();
let Jr = Ke.create(), Zh = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, Jh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const hi = {}, bn = {
  get: (e, t = {}, n = {}) => $r(Er("get", e, t, n)),
  post: (e, t = {}, n = {}) => $r(Er("post", e, t, n)),
  patch: (e, t = {}, n = {}) => $r(Er("patch", e, t, n)),
  put: (e, t = {}, n = {}) => $r(Er("put", e, t, n)),
  delete: (e, t = {}, n = {}) => $r(Er("delete", e, t, n)),
  use(e) {
    return Jr = e, bn;
  },
  axios() {
    return Jr;
  },
  fingerprintRequestsUsing(e) {
    return Zh = e === null ? () => null : e, bn;
  },
  determineSuccessUsing(e) {
    return Jh = e, bn;
  }
}, Er = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Us({}, n, r?.params)
  } : {
    data: Us({}, n, r?.data)
  }
}), $r = (e = {}) => {
  const t = [
    w8,
    S8,
    k8
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Jr.request(t).then(async (n) => {
    t.precognitive && Id(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && Jh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && _8(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Rd(t, r) ?? ((a) => a))(o) ?? o;
  }, (n) => E8(n) ? Promise.reject(n) : (t.precognitive && Id(n.response), (Rd(t, n.response.status) ?? ((o, i) => Promise.reject(i)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, w8 = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Jr.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Zh(e, Jr) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": $8(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, _8 = (e) => e >= 200 && e < 300, S8 = (e) => (typeof e.fingerprint != "string" || (hi[e.fingerprint]?.abort(), delete hi[e.fingerprint]), e), k8 = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (hi[e.fingerprint] = new AbortController(), {
  ...e,
  signal: hi[e.fingerprint].signal
}), Id = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, E8 = (e) => !Ah(e) || typeof e.response?.status != "number" || Ch(e), Rd = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], $8 = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (Qh(e.data) ? "multipart/form-data" : "application/json"), Qh = (e) => Il(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => Qh(t)), Il = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, z8 = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let r = [""];
  for (const o of n)
    if (o === "*") {
      const i = [];
      for (const a of r) {
        const s = a ? xt(t, a) : t;
        if (Array.isArray(s))
          for (let c = 0; c < s.length; c++)
            i.push(a ? `${a}.${c}` : String(c));
        else if (s !== null && typeof s == "object")
          for (const c of Object.keys(s))
            i.push(a ? `${a}.${c}` : c);
      }
      r = i;
    } else
      r = r.map((i) => i ? `${i}.${o}` : o);
  return r;
}, P8 = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Md = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => P8(n, r)))), C8 = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const i = (M) => M !== o ? (o = M, n.validatingChanged) : [];
  let a = [];
  const s = (M) => {
    const C = [...new Set(M)];
    return a.length !== C.length || !C.every((U) => a.includes(U)) ? (a = C, n.validatedChanged) : [];
  }, c = () => a.filter((M) => typeof f[M] > "u");
  let u = [];
  const d = (M) => {
    const C = [...new Set(M)];
    return u.length !== C.length || !C.every((U) => u.includes(U)) ? (u = C, n.touchedChanged) : [];
  };
  let f = {};
  const v = (M) => {
    const C = T8(M);
    return xn(f, C) ? [] : (f = C, n.errorsChanged);
  }, y = (M) => {
    const C = { ...f };
    return delete C[Fr(M)], v(C);
  }, p = () => Object.keys(f).length > 0;
  let m = 1500;
  const h = (M) => {
    m = M, $.cancel(), $ = A();
  };
  let b = t, E = null, g = [], S = null;
  const A = () => BA((M) => {
    e({
      get: (C, U = {}, k = {}) => bn.get(C, L(U), w(k, M, U)),
      post: (C, U = {}, k = {}) => bn.post(C, L(U), w(k, M, U)),
      patch: (C, U = {}, k = {}) => bn.patch(C, L(U), w(k, M, U)),
      put: (C, U = {}, k = {}) => bn.put(C, L(U), w(k, M, U)),
      delete: (C, U = {}, k = {}) => bn.delete(C, L(U), w(k, M, U))
    }).catch((C) => Ch(C) || Ah(C) && C.response?.status === 422 ? null : Promise.reject(C));
  }, m, { leading: !0, trailing: !0 });
  let $ = A();
  const w = (M, C, U = {}) => {
    const k = {
      ...M,
      ...C
    }, P = Array.from(k.only ?? k.validate ?? u);
    return {
      ...C,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...cN(M, C),
      only: P,
      timeout: k.timeout ?? 5e3,
      onValidationError: (x, N) => ([
        ...s([...a, ...P]),
        ...v(Us(Md({ ...f }, P), x.data.errors))
      ].forEach((D) => D()), k.onValidationError ? k.onValidationError(x, N) : Promise.reject(N)),
      onSuccess: (x) => (s([...a, ...P]).forEach((N) => N()), k.onSuccess ? k.onSuccess(x) : x),
      onPrecognitionSuccess: (x) => ([
        ...s([...a, ...P]),
        ...v(Md({ ...f }, P))
      ].forEach((N) => N()), k.onPrecognitionSuccess ? k.onPrecognitionSuccess(x) : x),
      onBefore: () => {
        const x = u.some((Z) => Z.includes("*")), N = x ? [...new Set(u.flatMap((Z) => z8(Z, U)))] : u;
        return k.onBeforeValidation && k.onBeforeValidation({ data: U, touched: N }, { data: b, touched: g }) === !1 || (k.onBefore || (() => !0))() === !1 ? !1 : (x && d(N).forEach((Z) => Z()), S = u, E = U, !0);
      },
      onStart: () => {
        i(!0).forEach((x) => x()), (k.onStart ?? (() => null))();
      },
      onFinish: () => {
        i(!1).forEach((x) => x()), g = S, b = E, S = E = null, (k.onFinish ?? (() => null))();
      }
    };
  }, _ = (M, C, U) => {
    if (typeof M > "u") {
      const k = Array.from(U?.only ?? U?.validate ?? []);
      d([...u, ...k]).forEach((P) => P()), $(U ?? {});
      return;
    }
    if (Il(C) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    M = Fr(M), (M.includes("*") || xt(b, M) !== C) && (d([M, ...u]).forEach((k) => k()), $(U ?? {}));
  }, L = (M) => r === !1 ? Ks(M) : M, F = {
    touched: () => u,
    validate(M, C, U) {
      return typeof M == "object" && !("target" in M) && (U = M, M = C = void 0), _(M, C, U), F;
    },
    touch(M) {
      const C = Array.isArray(M) ? M : [Fr(M)];
      return d([...u, ...C]).forEach((U) => U()), F;
    },
    validating: () => o,
    valid: c,
    errors: () => f,
    hasErrors: p,
    setErrors(M) {
      return v(M).forEach((C) => C()), F;
    },
    forgetError(M) {
      return y(M).forEach((C) => C()), F;
    },
    defaults(M) {
      return t = M, b = M, F;
    },
    reset(...M) {
      if (M.length === 0)
        d([]).forEach((C) => C());
      else {
        const C = [...u];
        M.forEach((U) => {
          C.includes(U) && C.splice(C.indexOf(U), 1), Et(b, U, xt(t, U));
        }), d(C).forEach((U) => U());
      }
      return F;
    },
    setTimeout(M) {
      return h(M), F;
    },
    on(M, C) {
      return n[M].push(C), F;
    },
    validateFiles() {
      return r = !0, F;
    },
    withoutFileValidation() {
      return r = !1, F;
    }
  };
  return F;
}, A8 = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), T8 = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Fr = (e) => typeof e != "string" ? e.target.name : e, Ks = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Il(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(Ks({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = Ks(t[n]);
        return;
      }
    }
  }), t;
};
var ps = null, hs = !1;
function O8(e) {
  if (hs)
    return;
  ps === null && (hs = !0, ps = new Set(Object.keys(e0({}))), hs = !1);
  const t = Object.keys(e).filter((n) => ps.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function e0(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = qo.parseUseFormArguments(...e);
  const o = t ? Ye.restore(t) : null;
  let i = st(typeof n == "function" ? n() : n);
  O8(i);
  let a = null, s, c = (p) => p, u = null, d = [], f = !1;
  const y = Qr({
    ...o ? o.data : st(i),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...p) {
      r = qo.createWayfinderCallback(...p);
      const m = this;
      let h = null;
      const b = C8((g) => {
        const { method: S, url: A } = r(), $ = st(c(this.data()));
        return g[S](A, $);
      }, st(i));
      u = b, b.on("validatingChanged", () => {
        m.validating = b.validating();
      }).on("validatedChanged", () => {
        m.__valid = b.valid();
      }).on("touchedChanged", () => {
        m.__touched = b.touched();
      }).on("errorsChanged", () => {
        const g = h ?? mi.get("form.withAllErrors") ? b.errors() : A8(b.errors());
        this.errors = {}, this.setError(g), m.__valid = b.valid();
      });
      const E = (g, S) => (S(g), g);
      return Object.assign(m, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => b,
        withAllErrors: () => E(m, () => h = !0),
        valid: (g) => m.__valid.includes(g),
        invalid: (g) => g in this.errors,
        setValidationTimeout: (g) => E(m, () => b.setTimeout(g)),
        validateFiles: () => E(m, () => b.validateFiles()),
        withoutFileValidation: () => E(m, () => b.withoutFileValidation()),
        touch: (g, ...S) => (Array.isArray(g) ? b.touch(g) : typeof g == "string" ? b.touch([g, ...S]) : b.touch(g), m),
        touched: (g) => typeof g == "string" ? m.__touched.includes(g) : m.__touched.length > 0,
        validate: (g, S) => {
          if (typeof g == "object" && !("target" in g) && (S = g, g = void 0), g === void 0)
            b.validate(S);
          else {
            const A = Fr(g), $ = c(this.data());
            b.validate(A, xt($, A), S);
          }
          return m;
        },
        setErrors: (g) => E(m, () => this.setError(g)),
        forgetError: (g) => E(
          m,
          () => this.clearErrors(Fr(g))
        )
      }), m;
    },
    data() {
      return Object.keys(i).reduce((p, m) => Et(p, m, xt(this, m)), {});
    },
    transform(p) {
      return c = p, this;
    },
    defaults(p, m) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof p > "u" ? (i = st(this.data()), this.isDirty = !1) : i = typeof p == "string" ? Et(st(i), p, m) : Object.assign({}, st(i), p), u?.defaults(i), this;
    },
    reset(...p) {
      const m = st(typeof n == "function" ? n() : i), h = st(m);
      return p.length === 0 ? (i = h, Object.assign(this, m)) : p.filter((b) => Yp(h, b)).forEach((b) => {
        Et(i, b, xt(h, b)), Et(this, b, xt(m, b));
      }), u?.reset(...p), this;
    },
    setError(p, m) {
      const h = typeof p == "string" ? { [p]: m } : p;
      return Object.assign(this.errors, h), this.hasErrors = Object.keys(this.errors).length > 0, u?.setErrors(h), this;
    },
    clearErrors(...p) {
      return this.errors = Object.keys(this.errors).reduce(
        (m, h) => ({
          ...m,
          ...p.length > 0 && !p.includes(h) ? { [h]: this.errors[h] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, u && (p.length === 0 ? u.setErrors({}) : p.forEach(u.forgetError)), this;
    },
    resetAndClearErrors(...p) {
      return this.reset(...p), this.clearErrors(...p), this;
    },
    submit(...p) {
      const { method: m, url: h, options: b } = qo.parseSubmitArguments(p, r);
      f = !1;
      const E = {
        ...b,
        onCancelToken: (S) => {
          if (a = S, b.onCancelToken)
            return b.onCancelToken(S);
        },
        onBefore: (S) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), b.onBefore)
            return b.onBefore(S);
        },
        onStart: (S) => {
          if (this.processing = !0, b.onStart)
            return b.onStart(S);
        },
        onProgress: (S) => {
          if (this.progress = S ?? null, b.onProgress)
            return b.onProgress(S);
        },
        onSuccess: async (S) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(
            () => this.recentlySuccessful = !1,
            mi.get("form.recentlySuccessfulDuration")
          );
          const A = b.onSuccess ? await b.onSuccess(S) : null;
          return f || (i = st(this.data()), this.isDirty = !1), A;
        },
        onError: (S) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(S), b.onError)
            return b.onError(S);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, b.onCancel)
            return b.onCancel();
        },
        onFinish: (S) => {
          if (this.processing = !1, this.progress = null, a = null, b.onFinish)
            return b.onFinish(S);
        }
      }, g = c(this.data());
      m === "delete" ? Ye.delete(h, { ...E, data: g }) : Ye[m](h, g, E);
    },
    get(p, m) {
      this.submit("get", p, m);
    },
    post(p, m) {
      this.submit("post", p, m);
    },
    put(p, m) {
      this.submit("put", p, m);
    },
    patch(p, m) {
      this.submit("patch", p, m);
    },
    delete(p, m) {
      this.submit("delete", p, m);
    },
    cancel() {
      a && a.cancel();
    },
    dontRemember(...p) {
      return d = p, this;
    },
    __rememberable: t === null,
    __remember() {
      const p = this.data();
      if (d.length > 0) {
        const m = { ...p };
        return d.forEach((h) => delete m[h]), { data: m, errors: this.errors };
      }
      return { data: p, errors: this.errors };
    },
    __restore(p) {
      Object.assign(this, p.data), this.setError(p.errors);
    }
  });
  return Oe(
    y,
    (p) => {
      y.isDirty = !xn(y.data(), i);
      const m = Ye.restore(t), h = st(p.__remember());
      t && !xn(m, h) && Ye.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var bt = X(void 0), Qe = X(), ms = nn(null), Co = X(void 0), Dd;
De({
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
    bt.value = t ? tr(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Co.value = void 0;
    const i = typeof window > "u";
    return Dd = JN(i, r || ((a) => a), o || (() => {
    })), i || (Ye.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (a) => {
        bt.value = tr(a.component), Qe.value = a.page, Co.value = a.preserveState ? Co.value : Date.now();
      },
      onFlash: (a) => {
        Qe.value = { ...Qe.value, flash: a };
      }
    }), Ye.on("navigate", () => Dd.forceUpdate())), () => {
      if (bt.value) {
        bt.value.inheritAttrs = !!bt.value.inheritAttrs;
        const a = $e(bt.value, {
          ...Qe.value.props,
          key: Co.value
        });
        return ms.value && (bt.value.layout = ms.value, ms.value = null), bt.value.layout ? typeof bt.value.layout == "function" ? bt.value.layout($e, a) : (Array.isArray(bt.value.layout) ? bt.value.layout : [bt.value.layout]).concat(a).reverse().reduce((s, c) => (c.inheritAttrs = !!c.inheritAttrs, $e(c, { ...Qe.value.props }, () => s))) : a;
      }
    };
  }
});
function t0() {
  return Qr({
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
De({
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
var Qt = () => {
}, N8 = /* @__PURE__ */ Symbol("InertiaFormContext");
De({
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
      default: Qt
    },
    onBefore: {
      type: Function,
      default: Qt
    },
    onStart: {
      type: Function,
      default: Qt
    },
    onProgress: {
      type: Function,
      default: Qt
    },
    onFinish: {
      type: Function,
      default: Qt
    },
    onCancel: {
      type: Function,
      default: Qt
    },
    onSuccess: {
      type: Function,
      default: Qt
    },
    onError: {
      type: Function,
      default: Qt
    },
    onSubmitComplete: {
      type: Function,
      default: Qt
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
      const [A, $] = p();
      return e.transform($);
    }, i = e0({}).withPrecognition(
      () => s.value,
      () => p()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && i.validateFiles(), (e.withAllErrors ?? Sn.get("form.withAllErrors")) && i.withAllErrors();
    const a = X(), s = J(
      () => sn(e.action) ? e.action.method : e.method.toLowerCase()
    ), c = X(!1), u = X(new FormData()), d = (A) => {
      A.type === "reset" && A.detail?.[Kh] && A.preventDefault(), c.value = A.type === "reset" ? !1 : !xn(y(), Od(u.value));
    }, f = ["input", "change", "reset"];
    Ze(() => {
      u.value = v(), i.defaults(y()), f.forEach((A) => a.value.addEventListener(A, d));
    }), Oe(
      () => e.validateFiles,
      (A) => A ? i.validateFiles() : i.withoutFileValidation()
    ), Oe(
      () => e.validationTimeout,
      (A) => i.setValidationTimeout(A)
    ), vi(() => f.forEach((A) => a.value?.removeEventListener(A, d)));
    const v = (A) => new FormData(a.value, A), y = (A) => Od(v(A)), p = (A) => Nl(
      s.value,
      sn(e.action) ? e.action.url : e.action,
      y(A),
      e.queryStringArrayFormat
    ), m = (A) => {
      const [$, w] = p(A);
      if (A?.getAttribute("formtarget") === "_blank" && s.value === "get") {
        window.open($, "_blank");
        return;
      }
      const L = (M) => {
        M && (M === !0 ? h() : M.length > 0 && h(...M));
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
        onSuccess: (...M) => {
          e.onSuccess?.(...M), e.onSubmitComplete?.(S), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && g();
        },
        onError: (...M) => {
          e.onError?.(...M), L(e.resetOnError);
        },
        ...e.options
      };
      i.transform(() => e.transform(w)).submit(s.value, $, F), i.transform(o);
    }, h = (...A) => {
      x8(a.value, u.value, A), i.reset(...A);
    }, b = (...A) => {
      i.clearErrors(...A);
    }, E = (...A) => {
      b(...A), h(...A);
    }, g = () => {
      u.value = v(), c.value = !1;
    }, S = {
      get errors() {
        return i.errors;
      },
      get hasErrors() {
        return i.hasErrors;
      },
      get processing() {
        return i.processing;
      },
      get progress() {
        return i.progress;
      },
      get wasSuccessful() {
        return i.wasSuccessful;
      },
      get recentlySuccessful() {
        return i.recentlySuccessful;
      },
      get validating() {
        return i.validating;
      },
      clearErrors: b,
      resetAndClearErrors: E,
      setError: (A, $) => i.setError(typeof A == "string" ? { [A]: $ } : A),
      get isDirty() {
        return c.value;
      },
      reset: h,
      submit: m,
      defaults: g,
      getData: y,
      getFormData: v,
      // Precognition
      touch: i.touch,
      valid: i.valid,
      invalid: i.invalid,
      touched: i.touched,
      validate: (A, $) => i.validate(...qo.mergeHeadersForValidation(A, $, e.headers)),
      validator: () => i.validator()
    };
    return r(S), Fn(N8, S), () => $e(
      "form",
      {
        ...n,
        ref: a,
        action: sn(e.action) ? e.action.url : e.action,
        method: s.value,
        onSubmit: (A) => {
          A.preventDefault(), m(A.submitter);
        },
        inert: e.disableWhileProcessing && i.processing
      },
      t.default ? t.default(S) : []
    );
  }
});
De({
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${GA(o)}"`;
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
var vs = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
De({
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
    const o = X(null), i = X(null), a = X(null), s = J(
      () => vs(e.itemsElement, o.value)
    ), c = J(() => ON(s.value)), u = J(
      () => vs(e.startElement, i.value)
    ), d = J(() => vs(e.endElement, a.value)), f = X(!1), v = X(!1), y = X(0), p = X(!1), m = X(!1), h = () => {
      y.value = b.getRequestCount(), p.value = b.hasPrevious(), m.value = b.hasNext();
    }, {
      dataManager: b,
      elementManager: E,
      flush: g
    } = a8({
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
      getItemsElement: () => s.value,
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
      const w = t0().scrollProps?.[e.data];
      w && (p.value = !!w.previousPage, m.value = !!w.nextPage);
    }
    const S = J(() => !A.value), A = J(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), $ = () => {
      c.value ? c.value.scrollTo({
        top: c.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ze(() => {
      E.setupObservers(), E.processServerLoadedElements(b.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && $(), S.value && E.enableTriggers();
    }), Zs(g), Oe(
      () => [S.value, e.onlyNext, e.onlyPrevious],
      ([w]) => {
        w ? E.enableTriggers() : E.disableTriggers();
      }
    ), r({
      fetchNext: b.fetchNext,
      fetchPrevious: b.fetchPrevious,
      hasPrevious: b.hasPrevious,
      hasNext: b.hasNext
    }), () => {
      const w = [], _ = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: p.value,
        hasNext: m.value
      };
      if (!e.startElement) {
        const L = S.value && !e.onlyNext, F = {
          loading: f.value,
          fetch: b.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ..._
        };
        w.push(
          $e(
            "div",
            { ref: i },
            t.previous ? t.previous(F) : f.value ? t.loading?.(F) : void 0
          )
        );
      }
      if (w.push(
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
        const L = S.value && !e.onlyPrevious, F = {
          loading: v.value,
          fetch: b.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: m.value,
          ..._
        };
        w.push(
          $e(
            "div",
            { ref: a },
            t.next ? t.next(F) : v.value ? t.loading?.(F) : void 0
          )
        );
      }
      return $e(ge, {}, e.reverse ? [...w].reverse() : w);
    };
  }
});
var Bt = () => {
}, I8 = De({
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
      default: Bt
    },
    onProgress: {
      type: Function,
      default: Bt
    },
    onFinish: {
      type: Function,
      default: Bt
    },
    onBefore: {
      type: Function,
      default: Bt
    },
    onCancel: {
      type: Function,
      default: Bt
    },
    onSuccess: {
      type: Function,
      default: Bt
    },
    onError: {
      type: Function,
      default: Bt
    },
    onCancelToken: {
      type: Function,
      default: Bt
    },
    onPrefetching: {
      type: Function,
      default: Bt
    },
    onPrefetched: {
      type: Function,
      default: Bt
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
    const r = X(0), o = X(), i = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), a = J(() => e.cacheFor !== 0 ? e.cacheFor : i.value.length === 1 && i.value[0] === "click" ? 0 : mi.get("prefetch.cacheFor"));
    Ze(() => {
      i.value.includes("mount") && m();
    }), Zs(() => {
      clearTimeout(o.value);
    });
    const s = J(
      () => sn(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), c = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : s.value !== "get" ? "button" : e.as.toLowerCase()), u = J(
      () => Nl(
        s.value,
        sn(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), d = J(() => u.value[0]), f = J(() => u.value[1]), v = J(() => c.value === "button" ? { type: "button" } : c.value === "a" || typeof c.value != "string" ? { href: d.value } : {}), y = J(() => ({
      data: f.value,
      method: s.value,
      replace: e.replace,
      preserveScroll: e.preserveScroll,
      preserveState: e.preserveState ?? s.value !== "get",
      preserveUrl: e.preserveUrl,
      only: e.only,
      except: e.except,
      headers: e.headers,
      async: e.async
    })), p = J(() => ({
      ...y.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (g) => {
        r.value++, e.onStart?.(g);
      },
      onProgress: e.onProgress,
      onFinish: (g) => {
        r.value--, e.onFinish?.(g);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), m = () => {
      Ye.prefetch(
        d.value,
        {
          ...y.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: a.value,
          cacheTags: e.cacheTags
        }
      );
    }, h = {
      onClick: (g) => {
        Po(g) && (g.preventDefault(), Ye.visit(d.value, p.value));
      }
    }, b = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          m();
        }, mi.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: h.onClick
    }, E = {
      onMousedown: (g) => {
        Po(g) && (g.preventDefault(), m());
      },
      onKeydown: (g) => {
        Nd(g) && (g.preventDefault(), m());
      },
      onMouseup: (g) => {
        Po(g) && (g.preventDefault(), Ye.visit(d.value, p.value));
      },
      onKeyup: (g) => {
        Nd(g) && (g.preventDefault(), Ye.visit(d.value, p.value));
      },
      onClick: (g) => {
        Po(g) && g.preventDefault();
      }
    };
    return () => $e(
      c.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...i.value.includes("hover") ? b : i.value.includes("click") ? E : h
      },
      t
    );
  }
}), R8 = I8;
De({
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
    const e = t0();
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
          Ye.reload({
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
var mi = Sn.extend({});
const M8 = { class: "space-y-3 text-zinc-900 dark:text-white" }, D8 = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, F8 = { key: 0 }, B8 = { key: 1 }, L8 = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, U8 = { class: "space-y-2" }, q8 = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, V8 = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, j8 = {
  key: 0,
  class: "flex items-center gap-2"
}, H8 = ["disabled", "onClick"], G8 = ["disabled", "onClick"], W8 = ["disabled", "onClick"], X8 = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = X([]), r = X(!0), o = X(!1), i = X(!1), a = X(""), s = X(null), c = J(() => t.produto?.id ?? null), u = J(() => new Map(n.value.map((p) => [p.trigger_event, p])));
    async function d() {
      r.value = !0, a.value = "";
      try {
        const [p, m] = await Promise.all([Te.connection(), Te.flows(c.value)]);
        i.value = p.connection.connected, n.value = m.flows || [];
      } catch (p) {
        a.value = p.message;
      } finally {
        r.value = !1;
      }
    }
    async function f(p) {
      o.value = !0, a.value = "";
      try {
        await p(), await d();
      } catch (m) {
        a.value = m.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (p) => f(() => Te.createFlow({
      name: `${p.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: p.eventClass,
      product_id: c.value,
      is_active: !0,
      graph_json: bp(p.eventClass)
    })), y = (p) => f(() => Te.updateFlow(p.id, { is_active: !p.is_active }));
    return Ze(d), (p, m) => (z(), T("div", M8, [
      r.value ? (z(), T("p", D8, "Verificando integração…")) : (z(), T(ge, { key: 1 }, [
        l("div", {
          class: Y(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", i.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          K(I(Qs), { class: "h-4 w-4 shrink-0" }),
          i.value ? (z(), T("span", F8, "ZapRei conectado à Evolution GO.")) : (z(), T("span", B8, [
            m[2] || (m[2] = Be(" A Evolution GO não está conectada. ", -1)),
            K(I(R8), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: it(() => [...m[1] || (m[1] = [
                Be("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            m[3] || (m[3] = Be(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        m[5] || (m[5] = l("div", null, [
          l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        a.value ? (z(), T("p", L8, V(a.value), 1)) : te("", !0),
        l("div", U8, [
          (z(!0), T(ge, null, Re(I(Mn), (h) => (z(), T("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            l("div", null, [
              l("div", q8, V(h.label), 1),
              l("div", V8, V(h.eventClass), 1)
            ]),
            u.value.get(h.eventClass) ? (z(), T("div", j8, [
              l("span", {
                class: Y(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, V(u.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              l("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !i.value || o.value,
                onClick: (b) => y(u.value.get(h.eventClass))
              }, V(u.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, H8),
              l("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !i.value,
                onClick: (b) => s.value = u.value.get(h.eventClass)
              }, [
                K(I(Zd), { class: "h-3 w-3" }),
                m[4] || (m[4] = Be(" Editar ", -1))
              ], 8, G8)
            ])) : (z(), T("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !i.value || o.value,
              onClick: (b) => v(h)
            }, " Criar fluxo ", 8, W8))
          ]))), 128))
        ])
      ], 64)),
      s.value ? (z(), Ie(kp, {
        key: 2,
        flow: s.value,
        onClose: m[0] || (m[0] = (h) => s.value = null),
        onSaved: d
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, Y8 = "zaprei", Fd = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Fd)) {
  const e = document.createElement("link");
  e.id = Fd, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[Y8] = { Dashboard: Yz, Integrations: Zz, ProductPanel: X8 };
export {
  Yz as Dashboard,
  Zz as Integrations,
  X8 as ProductPanel
};
