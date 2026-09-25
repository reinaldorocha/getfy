import { h as $e, ref as Y, reactive as eo, onMounted as Ze, openBlock as $, createElementBlock as T, createElementVNode as l, createVNode as Z, unref as I, normalizeClass as K, withDirectives as le, vModelCheckbox as ah, vModelText as xe, createStaticVNode as Ud, createTextVNode as Be, toDisplayString as V, createCommentVNode as te, getCurrentScope as qd, inject as pr, effectScope as Vd, watch as Ne, provide as Fn, defineComponent as De, useSlots as sh, onUnmounted as Qs, withCtx as rt, renderSlot as Xe, createPropsRestProxy as lh, toRef as qe, computed as J, getCurrentInstance as hr, onScopeDispose as To, nextTick as sn, onBeforeMount as uh, shallowRef as rn, Fragment as ge, renderList as Oe, normalizeStyle as vt, onBeforeUnmount as gi, isMemoSame as ch, createBlock as Re, useAttrs as dh, mergeProps as yi, Teleport as jd, isRef as el, toRefs as fh, customRef as ph, toValue as Ie, resolveComponent as Hd, resolveDynamicComponent as Tt, markRaw as tr, readonly as hh, withModifiers as tn, vModelSelect as lt, Transition as mh, toHandlers as vh } from "vue";
const gh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Wl = (e) => e === "";
const yh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const Xl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const bh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const xh = (e) => {
  const t = bh(e);
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
const wh = ({
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
    "stroke-width": Wl(n) || Wl(r) || n === !0 || r === !0 ? Number(o || i || br["stroke-width"]) * 24 / Number(a) : o || i || br["stroke-width"],
    class: yh(
      "lucide",
      c.class,
      ...e ? [`lucide-${Xl(xh(e))}-icon`, `lucide-${Xl(e)}`] : ["lucide-icon"]
    ),
    ...!u.default && !gh(c) && { "aria-hidden": "true" }
  },
  [...t.map((d) => $e(...d)), ...u.default ? [u.default()] : []]
);
const Ce = (e, t) => (n, { slots: r, attrs: o }) => $e(
  wh,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const _h = Ce("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
const Gd = Ce("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const kh = Ce("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Sh = Ce("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const Ji = Ce("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const ys = Ce("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Wd = Ce("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Eh = Ce("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const tl = Ce("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const nl = Ce("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Wo = Ce("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Xd = Ce("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const Yd = Ce("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const $h = Ce("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const zh = Ce("fast-forward", [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
]);
const Yl = Ce("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Tr = Ce("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const Kd = Ce("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const En = Ce("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Kl = Ce("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Ph = Ce("message-square-text", [
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
const Zd = Ce("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Ch = Ce("mic", [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
]);
const Jd = Ce("palette", [
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
const Qd = Ce("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const ef = Ce("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Ah = Ce("refresh-cw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
const Zl = Ce("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const Th = Ce("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Oh = Ce("save", [
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
const Lr = Ce("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Gt = Ce("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const tf = Ce("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Nh = Ce("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const nf = Ce("sparkles", [
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
const Xo = Ce("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const rf = Ce("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Ih = Ce("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const bs = Ce("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const Ct = Ce("x", [
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
]), Rh = "/zaprei";
function Mh() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function Dh(e) {
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
  const o = new URL(Rh + e, window.location.origin);
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
      "X-CSRF-TOKEN": Mh(),
      ...i || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: i ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(Dh);
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
  importContacts: (e) => Je("/contacts/import", { method: "POST", body: Jl(e) }),
  deleteContact: (e) => Je(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Je("/campaigns"),
  createCampaign: (e) => Je("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Je(`/campaigns/${e}`),
  cancelCampaign: (e) => Je(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Je("/media", { method: "POST", body: Jl(e) })
};
function Jl(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Fh = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Bh = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Lh = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Uh = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, qh = {
  key: 1,
  class: "mt-4 space-y-4"
}, Vh = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, jh = ["placeholder"], Hh = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Gh = { class: "mt-2 flex items-center gap-2" }, Wh = ["value"], Xh = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, Yh = { class: "flex flex-wrap items-center gap-2" }, Kh = ["disabled"], Zh = ["disabled"], Jh = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, Qh = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, em = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, of = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = Y(!0), o = Y(!1), i = Y(!1), a = Y(""), s = Y(""), c = Y(!1), u = Y(!1), d = Y(""), f = eo({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, a.value = "";
      try {
        const { connection: m } = await Te.connection();
        f.base_url = m.credentials.base_url || "", f.instance = m.credentials.instance || "", f.is_active = m.is_active, u.value = m.credentials.has_api_key, c.value = m.connected, d.value = m.webhook_url || "";
      } catch (m) {
        a.value = m.message;
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      o.value = !0, a.value = "", s.value = "";
      try {
        const { connection: m } = await Te.saveConnection({ ...f });
        f.api_key = "", u.value = m.credentials.has_api_key, c.value = m.connected, d.value = m.webhook_url || "", s.value = "Conexão salva.", n("saved");
      } catch (m) {
        a.value = m.message;
      } finally {
        o.value = !1;
      }
    }
    async function h() {
      if (d.value)
        try {
          await navigator.clipboard.writeText(d.value), s.value = "URL do webhook copiada.";
        } catch {
          a.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function p() {
      i.value = !0, a.value = "", s.value = "";
      try {
        const { message: m } = await Te.testConnection();
        s.value = m || "Conexão validada.";
      } catch (m) {
        a.value = m.message;
      } finally {
        i.value = !1;
      }
    }
    return Ze(v), (m, b) => ($(), T("div", Fh, [
      l("div", Bh, [
        l("div", Lh, [
          Z(I(Qd), { class: "h-5 w-5" })
        ]),
        b[5] || (b[5] = l("div", null, [
          l("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? ($(), T("div", Uh, [
        Z(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        b[6] || (b[6] = l("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : ($(), T("div", qh, [
        l("div", Vh, [
          b[7] || (b[7] = l("div", null, [
            l("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            l("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          l("label", {
            class: K(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            le(l("input", {
              "onUpdate:modelValue": b[0] || (b[0] = (E) => f.is_active = E),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [ah, f.is_active]
            ]),
            l("span", {
              class: K(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        l("div", null, [
          b[8] || (b[8] = l("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          le(l("input", {
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
          le(l("input", {
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
          le(l("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": b[3] || (b[3] = (E) => f.api_key = E),
            type: "password",
            autocomplete: "off",
            placeholder: u.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, jh), [
            [
              xe,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          b[11] || (b[11] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        d.value ? ($(), T("div", Hh, [
          b[13] || (b[13] = Ud('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          l("div", Gh, [
            l("input", {
              value: d.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: b[4] || (b[4] = (E) => E.target.select())
            }, null, 40, Wh),
            l("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: h
            }, [
              Z(I(Xd), { class: "h-3.5 w-3.5" }),
              b[12] || (b[12] = Be(" Copiar ", -1))
            ])
          ])
        ])) : ($(), T("p", Xh, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        l("div", Yh, [
          l("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, V(o.value ? "Salvando…" : "Salvar conexão"), 9, Kh),
          l("button", {
            type: "button",
            disabled: i.value || !u.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: p
          }, V(i.value ? "Testando…" : "Testar conexão"), 9, Zh),
          c.value ? ($(), T("span", Jh, [
            Z(I(nl), { class: "h-3 w-3" }),
            b[14] || (b[14] = Be(" Conectado ", -1))
          ])) : te("", !0)
        ]),
        a.value ? ($(), T("p", Qh, V(a.value), 1)) : s.value ? ($(), T("p", em, V(s.value), 1)) : te("", !0)
      ]))
    ]));
  }
};
function Ur(e) {
  return qd() ? (To(e), !0) : !1;
}
function nn(e) {
  return typeof e == "function" ? e() : I(e);
}
const tm = typeof window < "u" && typeof document < "u", nm = (e) => typeof e < "u", rm = Object.prototype.toString, om = (e) => rm.call(e) === "[object Object]", im = () => {
};
function am(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const af = (e) => e();
function sm(e = af) {
  const t = Y(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: hh(t), pause: n, resume: r, eventFilter: o };
}
function Ql(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function lm(e, t, n = {}) {
  const {
    eventFilter: r = af,
    ...o
  } = n;
  return Ne(
    e,
    am(
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
  } = n, { eventFilter: i, pause: a, resume: s, isActive: c } = sm(r);
  return { stop: lm(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: a, resume: s, isActive: c };
}
function um(e, t = {}) {
  if (!el(e))
    return fh(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = ph(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var i;
        if ((i = nn(t.replaceRef)) != null ? i : !0)
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
function xs(e, t = !1) {
  function n(f, { flush: v = "sync", deep: y = !1, timeout: h, throwOnTimeout: p } = {}) {
    let m = null;
    const E = [new Promise((g) => {
      m = Ne(
        e,
        (_) => {
          f(_) !== t && (m?.(), g(_));
        },
        {
          flush: v,
          deep: y,
          immediate: !0
        }
      );
    })];
    return h != null && E.push(
      Ql(h, p).then(() => nn(e)).finally(() => m?.())
    ), Promise.race(E);
  }
  function r(f, v) {
    if (!el(f))
      return n((_) => _ === f, v);
    const { flush: y = "sync", deep: h = !1, timeout: p, throwOnTimeout: m } = v ?? {};
    let b = null;
    const g = [new Promise((_) => {
      b = Ne(
        [e, f],
        ([C, z]) => {
          t !== (C === z) && (b?.(), _(C));
        },
        {
          flush: y,
          deep: h,
          immediate: !0
        }
      );
    })];
    return p != null && g.push(
      Ql(p, m).then(() => nn(e)).finally(() => (b?.(), nn(e)))
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
      const h = Array.from(y);
      return h.includes(f) || h.includes(nn(f));
    }, v);
  }
  function u(f) {
    return d(1, f);
  }
  function d(f = 1, v) {
    let y = -1;
    return n(() => (y += 1, y >= f), v);
  }
  return Array.isArray(nn(e)) ? {
    toMatch: n,
    toContains: c,
    changed: u,
    changedTimes: d,
    get not() {
      return xs(e, !t);
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
      return xs(e, !t);
    }
  };
}
function ws(e) {
  return xs(e);
}
function cm(e) {
  var t;
  const n = nn(e);
  return (t = n?.$el) != null ? t : n;
}
const sf = tm ? window : void 0;
function lf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = sf) : [t, n, r, o] = e, !t)
    return im;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((d) => d()), i.length = 0;
  }, s = (d, f, v, y) => (d.addEventListener(f, v, y), () => d.removeEventListener(f, v, y)), c = Ne(
    () => [cm(t), nn(o)],
    ([d, f]) => {
      if (a(), !d)
        return;
      const v = om(f) ? { ...f } : f;
      i.push(
        ...n.flatMap((y) => r.map((h) => s(d, y, h, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), a();
  };
  return Ur(u), u;
}
function dm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function eu(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = sf,
    eventName: i = "keydown",
    passive: a = !1,
    dedupe: s = !1
  } = r, c = dm(t);
  return lf(o, i, (d) => {
    d.repeat && nn(s) || c(d) && n(d);
  }, a);
}
function fm(e) {
  return JSON.parse(JSON.stringify(e));
}
function Qi(e, t, n, r = {}) {
  var o, i, a;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: u,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, y = hr(), h = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((a = (i = y?.proxy) == null ? void 0 : i.$emit) == null ? void 0 : a.bind(y?.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const m = (g) => s ? typeof s == "function" ? s(g) : fm(g) : g, b = () => nm(e[t]) ? m(e[t]) : f, E = (g) => {
    v ? v(g) && h(p, g) : h(p, g);
  };
  if (c) {
    const g = b(), _ = Y(g);
    let C = !1;
    return Ne(
      () => e[t],
      (z) => {
        C || (C = !0, _.value = m(z), sn(() => C = !1));
      }
    ), Ne(
      _,
      (z) => {
        !C && (z !== e[t] || d) && E(z);
      },
      { deep: d }
    ), _;
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
var pm = { value: () => {
} };
function bi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Oo(n);
}
function Oo(e) {
  this._ = e;
}
function hm(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Oo.prototype = bi.prototype = {
  constructor: Oo,
  on: function(e, t) {
    var n = this._, r = hm(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; )
        if ((o = (e = r[i]).type) && (o = mm(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type)
        n[o] = tu(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = tu(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Oo(e);
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
function mm(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function tu(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = pm, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var _s = "http://www.w3.org/1999/xhtml";
const nu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _s,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), nu.hasOwnProperty(t) ? { space: nu[t], local: e } : e;
}
function vm(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === _s && t.documentElement.namespaceURI === _s ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function gm(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function uf(e) {
  var t = xi(e);
  return (t.local ? gm : vm)(t);
}
function ym() {
}
function rl(e) {
  return e == null ? ym : function() {
    return this.querySelector(e);
  };
}
function bm(e) {
  typeof e != "function" && (e = rl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), c, u, d = 0; d < a; ++d)
      (c = i[d]) && (u = e.call(c, c.__data__, d, i)) && ("__data__" in c && (u.__data__ = c.__data__), s[d] = u);
  return new wt(r, this._parents);
}
function xm(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function wm() {
  return [];
}
function cf(e) {
  return e == null ? wm : function() {
    return this.querySelectorAll(e);
  };
}
function _m(e) {
  return function() {
    return xm(e.apply(this, arguments));
  };
}
function km(e) {
  typeof e == "function" ? e = _m(e) : e = cf(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(e.call(c, c.__data__, u, a)), o.push(c));
  return new wt(r, o);
}
function df(e) {
  return function() {
    return this.matches(e);
  };
}
function ff(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Sm = Array.prototype.find;
function Em(e) {
  return function() {
    return Sm.call(this.children, e);
  };
}
function $m() {
  return this.firstElementChild;
}
function zm(e) {
  return this.select(e == null ? $m : Em(typeof e == "function" ? e : ff(e)));
}
var Pm = Array.prototype.filter;
function Cm() {
  return Array.from(this.children);
}
function Am(e) {
  return function() {
    return Pm.call(this.children, e);
  };
}
function Tm(e) {
  return this.selectAll(e == null ? Cm : Am(typeof e == "function" ? e : ff(e)));
}
function Om(e) {
  typeof e != "function" && (e = df(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], c, u = 0; u < a; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && s.push(c);
  return new wt(r, this._parents);
}
function pf(e) {
  return new Array(e.length);
}
function Nm() {
  return new wt(this._enter || this._groups.map(pf), this._parents);
}
function Yo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Yo.prototype = {
  constructor: Yo,
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
function Im(e) {
  return function() {
    return e;
  };
}
function Rm(e, t, n, r, o, i) {
  for (var a = 0, s, c = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Yo(e, i[a]);
  for (; a < c; ++a)
    (s = t[a]) && (o[a] = s);
}
function Mm(e, t, n, r, o, i, a) {
  var s, c, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, v = new Array(d), y;
  for (s = 0; s < d; ++s)
    (c = t[s]) && (v[s] = y = a.call(c, c.__data__, s, t) + "", u.has(y) ? o[s] = c : u.set(y, c));
  for (s = 0; s < f; ++s)
    y = a.call(e, i[s], s, i) + "", (c = u.get(y)) ? (r[s] = c, c.__data__ = i[s], u.delete(y)) : n[s] = new Yo(e, i[s]);
  for (s = 0; s < d; ++s)
    (c = t[s]) && u.get(v[s]) === c && (o[s] = c);
}
function Dm(e) {
  return e.__data__;
}
function Fm(e, t) {
  if (!arguments.length)
    return Array.from(this, Dm);
  var n = t ? Mm : Rm, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Im(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], v = f.length, y = Bm(e.call(d, d && d.__data__, u, r)), h = y.length, p = s[u] = new Array(h), m = a[u] = new Array(h), b = c[u] = new Array(v);
    n(d, f, p, m, b, y, t);
    for (var E = 0, g = 0, _, C; E < h; ++E)
      if (_ = p[E]) {
        for (E >= g && (g = E + 1); !(C = m[g]) && ++g < h; )
          ;
        _._next = C || null;
      }
  }
  return a = new wt(a, r), a._enter = s, a._exit = c, a;
}
function Bm(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Lm() {
  return new wt(this._exit || this._groups.map(pf), this._parents);
}
function Um(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function qm(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), c = 0; c < a; ++c)
    for (var u = n[c], d = r[c], f = u.length, v = s[c] = new Array(f), y, h = 0; h < f; ++h)
      (y = u[h] || d[h]) && (v[h] = y);
  for (; c < o; ++c)
    s[c] = n[c];
  return new wt(s, this._parents);
}
function Vm() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function jm(e) {
  e || (e = Hm);
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
function Hm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Gm() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Wm() {
  return Array.from(this);
}
function Xm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a)
        return a;
    }
  return null;
}
function Ym() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Km() {
  return !this.node();
}
function Zm(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Jm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Qm(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ev(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function tv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function nv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function rv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ov(e, t) {
  var n = xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Qm : Jm : typeof t == "function" ? n.local ? rv : nv : n.local ? tv : ev)(n, t));
}
function hf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function iv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function av(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function sv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function lv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? iv : typeof t == "function" ? sv : av)(e, t, n ?? "")) : ir(this.node(), e);
}
function ir(e, t) {
  return e.style.getPropertyValue(t) || hf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function uv(e) {
  return function() {
    delete this[e];
  };
}
function cv(e, t) {
  return function() {
    this[e] = t;
  };
}
function dv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function fv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? uv : typeof t == "function" ? dv : cv)(e, t)) : this.node()[e];
}
function mf(e) {
  return e.trim().split(/^|\s+/);
}
function ol(e) {
  return e.classList || new vf(e);
}
function vf(e) {
  this._node = e, this._names = mf(e.getAttribute("class") || "");
}
vf.prototype = {
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
function gf(e, t) {
  for (var n = ol(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function yf(e, t) {
  for (var n = ol(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function pv(e) {
  return function() {
    gf(this, e);
  };
}
function hv(e) {
  return function() {
    yf(this, e);
  };
}
function mv(e, t) {
  return function() {
    (t.apply(this, arguments) ? gf : yf)(this, e);
  };
}
function vv(e, t) {
  var n = mf(e + "");
  if (arguments.length < 2) {
    for (var r = ol(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? mv : t ? pv : hv)(n, t));
}
function gv() {
  this.textContent = "";
}
function yv(e) {
  return function() {
    this.textContent = e;
  };
}
function bv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function xv(e) {
  return arguments.length ? this.each(e == null ? gv : (typeof e == "function" ? bv : yv)(e)) : this.node().textContent;
}
function wv() {
  this.innerHTML = "";
}
function _v(e) {
  return function() {
    this.innerHTML = e;
  };
}
function kv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Sv(e) {
  return arguments.length ? this.each(e == null ? wv : (typeof e == "function" ? kv : _v)(e)) : this.node().innerHTML;
}
function Ev() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $v() {
  return this.each(Ev);
}
function zv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pv() {
  return this.each(zv);
}
function Cv(e) {
  var t = typeof e == "function" ? e : uf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Av() {
  return null;
}
function Tv(e, t) {
  var n = typeof e == "function" ? e : uf(e), r = t == null ? Av : typeof t == "function" ? t : rl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ov() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Nv() {
  return this.each(Ov);
}
function Iv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Rv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mv(e) {
  return this.select(e ? Rv : Iv);
}
function Dv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Fv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Bv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Lv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Uv(e, t, n) {
  return function() {
    var r = this.__on, o, i = Fv(t);
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
function qv(e, t, n) {
  var r = Bv(e + ""), o, i = r.length, a;
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
  for (s = t ? Uv : Lv, o = 0; o < i; ++o)
    this.each(s(r[o], t, n));
  return this;
}
function bf(e, t, n) {
  var r = hf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Vv(e, t) {
  return function() {
    return bf(this, e, t);
  };
}
function jv(e, t) {
  return function() {
    return bf(this, e, t.apply(this, arguments));
  };
}
function Hv(e, t) {
  return this.each((typeof t == "function" ? jv : Vv)(e, t));
}
function* Gv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var xf = [null];
function wt(e, t) {
  this._groups = e, this._parents = t;
}
function to() {
  return new wt([[document.documentElement]], xf);
}
function Wv() {
  return this;
}
wt.prototype = to.prototype = {
  constructor: wt,
  select: bm,
  selectAll: km,
  selectChild: zm,
  selectChildren: Tm,
  filter: Om,
  data: Fm,
  enter: Nm,
  exit: Lm,
  join: Um,
  merge: qm,
  selection: Wv,
  order: Vm,
  sort: jm,
  call: Gm,
  nodes: Wm,
  node: Xm,
  size: Ym,
  empty: Km,
  each: Zm,
  attr: ov,
  style: lv,
  property: fv,
  classed: vv,
  text: xv,
  html: Sv,
  raise: $v,
  lower: Pv,
  append: Cv,
  insert: Tv,
  remove: Nv,
  clone: Mv,
  datum: Dv,
  on: qv,
  dispatch: Hv,
  [Symbol.iterator]: Gv
};
function Ot(e) {
  return typeof e == "string" ? new wt([[document.querySelector(e)]], [document.documentElement]) : new wt([[e]], xf);
}
function Xv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function qt(e, t) {
  if (e = Xv(e), t === void 0 && (t = e.currentTarget), t) {
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
const Yv = { passive: !1 }, qr = { capture: !0, passive: !1 };
function ea(e) {
  e.stopImmediatePropagation();
}
function nr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function wf(e) {
  var t = e.document.documentElement, n = Ot(e).on("dragstart.drag", nr, qr);
  "onselectstart" in t ? n.on("selectstart.drag", nr, qr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function _f(e, t) {
  var n = e.document.documentElement, r = Ot(e).on("dragstart.drag", null);
  t && (r.on("click.drag", nr, qr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
function ks(e, {
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
ks.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Kv(e) {
  return !e.ctrlKey && !e.button;
}
function Zv() {
  return this.parentNode;
}
function Jv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Qv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function eg() {
  var e = Kv, t = Zv, n = Jv, r = Qv, o = {}, i = bi("start", "drag", "end"), a = 0, s, c, u, d, f = 0;
  function v(_) {
    _.on("mousedown.drag", y).filter(r).on("touchstart.drag", m).on("touchmove.drag", b, Yv).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(_, C) {
    if (!(d || !e.call(this, _, C))) {
      var z = g(this, t.call(this, _, C), _, C, "mouse");
      z && (Ot(_.view).on("mousemove.drag", h, qr).on("mouseup.drag", p, qr), wf(_.view), ea(_), u = !1, s = _.clientX, c = _.clientY, z("start", _));
    }
  }
  function h(_) {
    if (nr(_), !u) {
      var C = _.clientX - s, z = _.clientY - c;
      u = C * C + z * z > f;
    }
    o.mouse("drag", _);
  }
  function p(_) {
    Ot(_.view).on("mousemove.drag mouseup.drag", null), _f(_.view, u), nr(_), o.mouse("end", _);
  }
  function m(_, C) {
    if (e.call(this, _, C)) {
      var z = _.changedTouches, w = t.call(this, _, C), k = z.length, L, D;
      for (L = 0; L < k; ++L)
        (D = g(this, w, _, C, z[L].identifier, z[L])) && (ea(_), D("start", _, z[L]));
    }
  }
  function b(_) {
    var C = _.changedTouches, z = C.length, w, k;
    for (w = 0; w < z; ++w)
      (k = o[C[w].identifier]) && (nr(_), k("drag", _, C[w]));
  }
  function E(_) {
    var C = _.changedTouches, z = C.length, w, k;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), w = 0; w < z; ++w)
      (k = o[C[w].identifier]) && (ea(_), k("end", _, C[w]));
  }
  function g(_, C, z, w, k, L) {
    var D = i.copy(), M = qt(L || z, C), A, q, S;
    if ((S = n.call(_, new ks("beforestart", {
      sourceEvent: z,
      target: v,
      identifier: k,
      active: a,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), w)) != null)
      return A = S.x - M[0] || 0, q = S.y - M[1] || 0, function F(P, N, x) {
        var U = M, Q;
        switch (P) {
          case "start":
            o[k] = F, Q = a++;
            break;
          case "end":
            delete o[k], --a;
          case "drag":
            M = qt(x || N, C), Q = a;
            break;
        }
        D.call(
          P,
          _,
          new ks(P, {
            sourceEvent: N,
            subject: S,
            target: v,
            identifier: k,
            active: Q,
            x: M[0] + A,
            y: M[1] + q,
            dx: M[0] - U[0],
            dy: M[1] - U[1],
            dispatch: D
          }),
          w
        );
      };
  }
  return v.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : mo(!!_), v) : e;
  }, v.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : mo(_), v) : t;
  }, v.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : mo(_), v) : n;
  }, v.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : mo(!!_), v) : r;
  }, v.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? v : _;
  }, v.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, v) : Math.sqrt(f);
  }, v;
}
function il(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function kf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function no() {
}
var Vr = 0.7, Ko = 1 / Vr, rr = "\\s*([+-]?\\d+)\\s*", jr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tg = /^#([0-9a-f]{3,8})$/, ng = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), rg = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), og = new RegExp(`^rgba\\(${rr},${rr},${rr},${jr}\\)$`), ig = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${jr}\\)$`), ag = new RegExp(`^hsl\\(${jr},${Wt},${Wt}\\)$`), sg = new RegExp(`^hsla\\(${jr},${Wt},${Wt},${jr}\\)$`), ru = {
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
il(no, Ln, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ou,
  // Deprecated! Use color.formatHex.
  formatHex: ou,
  formatHex8: lg,
  formatHsl: ug,
  formatRgb: iu,
  toString: iu
});
function ou() {
  return this.rgb().formatHex();
}
function lg() {
  return this.rgb().formatHex8();
}
function ug() {
  return Sf(this).formatHsl();
}
function iu() {
  return this.rgb().formatRgb();
}
function Ln(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = tg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? au(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ng.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = rg.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = og.exec(e)) ? vo(t[1], t[2], t[3], t[4]) : (t = ig.exec(e)) ? vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ag.exec(e)) ? uu(t[1], t[2] / 100, t[3] / 100, 1) : (t = sg.exec(e)) ? uu(t[1], t[2] / 100, t[3] / 100, t[4]) : ru.hasOwnProperty(e) ? au(ru[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function au(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function cg(e) {
  return e instanceof no || (e = Ln(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function Ss(e, t, n, r) {
  return arguments.length === 1 ? cg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
il(pt, Ss, kf(no, {
  brighter(e) {
    return e = e == null ? Ko : Math.pow(Ko, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(In(this.r), In(this.g), In(this.b), Zo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: su,
  // Deprecated! Use color.formatHex.
  formatHex: su,
  formatHex8: dg,
  formatRgb: lu,
  toString: lu
}));
function su() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function dg() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function lu() {
  const e = Zo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function In(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = In(e), (e < 16 ? "0" : "") + e.toString(16);
}
function uu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Nt(e, t, n, r);
}
function Sf(e) {
  if (e instanceof Nt)
    return new Nt(e.h, e.s, e.l, e.opacity);
  if (e instanceof no || (e = Ln(e)), !e)
    return new Nt();
  if (e instanceof Nt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, c = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= c < 0.5 ? i + o : 2 - i - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new Nt(a, s, c, e.opacity);
}
function fg(e, t, n, r) {
  return arguments.length === 1 ? Sf(e) : new Nt(e, t, n, r ?? 1);
}
function Nt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
il(Nt, fg, kf(no, {
  brighter(e) {
    return e = e == null ? Ko : Math.pow(Ko, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      ta(e >= 240 ? e - 240 : e + 120, o, r),
      ta(e, o, r),
      ta(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Nt(cu(this.h), go(this.s), go(this.l), Zo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${cu(this.h)}, ${go(this.s) * 100}%, ${go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function cu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ta(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const al = (e) => () => e;
function pg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function hg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function mg(e) {
  return (e = +e) == 1 ? Ef : function(t, n) {
    return n - t ? hg(t, n, e) : al(isNaN(t) ? n : t);
  };
}
function Ef(e, t) {
  var n = t - e;
  return n ? pg(e, n) : al(isNaN(e) ? t : e);
}
const Jo = (function e(t) {
  var n = mg(t);
  function r(o, i) {
    var a = n((o = Ss(o)).r, (i = Ss(i)).r), s = n(o.g, i.g), c = n(o.b, i.b), u = Ef(o.opacity, i.opacity);
    return function(d) {
      return o.r = a(d), o.g = s(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function vg(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function gg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yg(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), a;
  for (a = 0; a < r; ++a)
    o[a] = Or(e[a], t[a]);
  for (; a < n; ++a)
    i[a] = t[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      i[a] = o[a](s);
    return i;
  };
}
function bg(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Vt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function xg(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Or(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n)
      r[o] = n[o](i);
    return r;
  };
}
var Es = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, na = new RegExp(Es.source, "g");
function wg(e) {
  return function() {
    return e;
  };
}
function _g(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $f(e, t) {
  var n = Es.lastIndex = na.lastIndex = 0, r, o, i, a = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (r = Es.exec(e)) && (o = na.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, c.push({ i: a, x: Vt(r, o) })), n = na.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? c[0] ? _g(c[0].x) : wg(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d)
      s[(f = c[d]).i] = f.x(u);
    return s.join("");
  });
}
function Or(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? al(t) : (n === "number" ? Vt : n === "string" ? (r = Ln(t)) ? (t = r, Jo) : $f : t instanceof Ln ? Jo : t instanceof Date ? bg : gg(t) ? vg : Array.isArray(t) ? yg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xg : Vt)(e, t);
}
var du = 180 / Math.PI, $s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function zf(e, t, n, r, o, i) {
  var a, s, c;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * du,
    skewX: Math.atan(c) * du,
    scaleX: a,
    scaleY: s
  };
}
var yo;
function kg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? $s : zf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Sg(e) {
  return e == null || (yo || (yo = document.createElementNS("http://www.w3.org/2000/svg", "g")), yo.setAttribute("transform", e), !(e = yo.transform.baseVal.consolidate())) ? $s : (e = e.matrix, zf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Pf(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, v, y, h) {
    if (u !== f || d !== v) {
      var p = y.push("translate(", null, t, null, n);
      h.push({ i: p - 4, x: Vt(u, f) }, { i: p - 2, x: Vt(d, v) });
    } else (f || v) && y.push("translate(" + f + t + v + n);
  }
  function a(u, d, f, v) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Vt(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function s(u, d, f, v) {
    u !== d ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Vt(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function c(u, d, f, v, y, h) {
    if (u !== f || d !== v) {
      var p = y.push(o(y) + "scale(", null, ",", null, ")");
      h.push({ i: p - 4, x: Vt(u, f) }, { i: p - 2, x: Vt(d, v) });
    } else (f !== 1 || v !== 1) && y.push(o(y) + "scale(" + f + "," + v + ")");
  }
  return function(u, d) {
    var f = [], v = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, v), a(u.rotate, d.rotate, f, v), s(u.skewX, d.skewX, f, v), c(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, v), u = d = null, function(y) {
      for (var h = -1, p = v.length, m; ++h < p; )
        f[(m = v[h]).i] = m.x(y);
      return f.join("");
    };
  };
}
var Eg = Pf(kg, "px, ", "px)", "deg)"), $g = Pf(Sg, ", ", ")", ")"), zg = 1e-12;
function fu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Pg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Cg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const No = (function e(t, n, r) {
  function o(i, a) {
    var s = i[0], c = i[1], u = i[2], d = a[0], f = a[1], v = a[2], y = d - s, h = f - c, p = y * y + h * h, m, b;
    if (p < zg)
      b = Math.log(v / u) / t, m = function(w) {
        return [
          s + w * y,
          c + w * h,
          u * Math.exp(t * w * b)
        ];
      };
    else {
      var E = Math.sqrt(p), g = (v * v - u * u + r * p) / (2 * u * n * E), _ = (v * v - u * u - r * p) / (2 * v * n * E), C = Math.log(Math.sqrt(g * g + 1) - g), z = Math.log(Math.sqrt(_ * _ + 1) - _);
      b = (z - C) / t, m = function(w) {
        var k = w * b, L = fu(C), D = u / (n * E) * (L * Cg(t * k + C) - Pg(C));
        return [
          s + D * y,
          c + D * h,
          u * L / fu(t * k + C)
        ];
      };
    }
    return m.duration = b * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, c = s * s;
    return e(a, s, c);
  }, o;
})(Math.SQRT2, 2, 4);
var ar = 0, zr = 0, xr = 0, Cf = 1e3, Qo, Pr, ei = 0, Un = 0, wi = 0, Hr = typeof performance == "object" && performance.now ? performance : Date, Af = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sl() {
  return Un || (Af(Ag), Un = Hr.now() + wi);
}
function Ag() {
  Un = 0;
}
function ti() {
  this._call = this._time = this._next = null;
}
ti.prototype = Tf.prototype = {
  constructor: ti,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? sl() : +n) + (t == null ? 0 : +t), !this._next && Pr !== this && (Pr ? Pr._next = this : Qo = this, Pr = this), this._call = e, this._time = n, zs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, zs());
  }
};
function Tf(e, t, n) {
  var r = new ti();
  return r.restart(e, t, n), r;
}
function Tg() {
  sl(), ++ar;
  for (var e = Qo, t; e; )
    (t = Un - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ar;
}
function pu() {
  Un = (ei = Hr.now()) + wi, ar = zr = 0;
  try {
    Tg();
  } finally {
    ar = 0, Ng(), Un = 0;
  }
}
function Og() {
  var e = Hr.now(), t = e - ei;
  t > Cf && (wi -= t, ei = e);
}
function Ng() {
  for (var e, t = Qo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Qo = n);
  Pr = e, zs(r);
}
function zs(e) {
  if (!ar) {
    zr && (zr = clearTimeout(zr));
    var t = e - Un;
    t > 24 ? (e < 1 / 0 && (zr = setTimeout(pu, e - Hr.now() - wi)), xr && (xr = clearInterval(xr))) : (xr || (ei = Hr.now(), xr = setInterval(Og, Cf)), ar = 1, Af(pu));
  }
}
function hu(e, t, n) {
  var r = new ti();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Ig = bi("start", "end", "cancel", "interrupt"), Rg = [], Of = 0, mu = 1, Ps = 2, Io = 3, vu = 4, Cs = 5, Ro = 6;
function _i(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a)
    e.__transition = {};
  else if (n in a)
    return;
  Mg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Ig,
    tween: Rg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Of
  });
}
function ll(e, t) {
  var n = Rt(e, t);
  if (n.state > Of)
    throw new Error("too late; already scheduled");
  return n;
}
function Zt(e, t) {
  var n = Rt(e, t);
  if (n.state > Io)
    throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Mg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Tf(i, 0, n.time);
  function i(u) {
    n.state = mu, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var d, f, v, y;
    if (n.state !== mu)
      return c();
    for (d in r)
      if (y = r[d], y.name === n.name) {
        if (y.state === Io)
          return hu(a);
        y.state === vu ? (y.state = Ro, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[d]) : +d < t && (y.state = Ro, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[d]);
      }
    if (hu(function() {
      n.state === Io && (n.state = vu, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ps, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ps) {
      for (n.state = Io, o = new Array(v = n.tween.length), d = 0, f = -1; d < v; ++d)
        (y = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function s(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Cs, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, d);
    n.state === Cs && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Ro, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Mo(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ps && r.state < Cs, r.state = Ro, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Dg(e) {
  return this.each(function() {
    Mo(this, e);
  });
}
function Fg(e, t) {
  var n, r;
  return function() {
    var o = Zt(this, e), i = o.tween;
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
function Bg(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = Zt(this, e), a = i.tween;
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
function Lg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Rt(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Fg : Bg)(n, e, t));
}
function ul(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Zt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Rt(o, r).value[t];
  };
}
function Nf(e, t) {
  var n;
  return (typeof t == "number" ? Vt : t instanceof Ln ? Jo : (n = Ln(t)) ? (t = n, Jo) : $f)(e, t);
}
function Ug(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Vg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function jg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Hg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), c = s + "", a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s)));
  };
}
function Gg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), c = s + "", a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s)));
  };
}
function Wg(e, t) {
  var n = xi(e), r = n === "transform" ? $g : Nf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Gg : Hg)(n, r, ul(this, "attr." + e, t)) : t == null ? (n.local ? qg : Ug)(n) : (n.local ? jg : Vg)(n, r, t));
}
function Xg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Yg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Kg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Yg(e, i)), n;
  }
  return o._value = t, o;
}
function Zg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Xg(e, i)), n;
  }
  return o._value = t, o;
}
function Jg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = xi(e);
  return this.tween(n, (r.local ? Kg : Zg)(r, t));
}
function Qg(e, t) {
  return function() {
    ll(this, e).delay = +t.apply(this, arguments);
  };
}
function ey(e, t) {
  return t = +t, function() {
    ll(this, e).delay = t;
  };
}
function ty(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Qg : ey)(t, e)) : Rt(this.node(), t).delay;
}
function ny(e, t) {
  return function() {
    Zt(this, e).duration = +t.apply(this, arguments);
  };
}
function ry(e, t) {
  return t = +t, function() {
    Zt(this, e).duration = t;
  };
}
function oy(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ny : ry)(t, e)) : Rt(this.node(), t).duration;
}
function iy(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Zt(this, e).ease = t;
  };
}
function ay(e) {
  var t = this._id;
  return arguments.length ? this.each(iy(t, e)) : Rt(this.node(), t).ease;
}
function sy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Zt(this, e).ease = n;
  };
}
function ly(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(sy(this._id, e));
}
function uy(e) {
  typeof e != "function" && (e = df(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], c, u = 0; u < a; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && s.push(c);
  return new un(r, this._parents, this._name, this._id);
}
function cy(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var c = t[s], u = n[s], d = c.length, f = a[s] = new Array(d), v, y = 0; y < d; ++y)
      (v = c[y] || u[y]) && (f[y] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new un(a, this._parents, this._name, this._id);
}
function dy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function fy(e, t, n) {
  var r, o, i = dy(t) ? ll : Zt;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function py(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(fy(n, e, t));
}
function hy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function my() {
  return this.on("end.remove", hy(this._id));
}
function vy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = rl(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], c = s.length, u = i[a] = new Array(c), d, f, v = 0; v < c; ++v)
      (d = s[v]) && (f = e.call(d, d.__data__, v, s)) && ("__data__" in d && (f.__data__ = d.__data__), u[v] = f, _i(u[v], t, n, v, u, Rt(d, n)));
  return new un(i, this._parents, t, n);
}
function gy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = cf(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var c = r[s], u = c.length, d, f = 0; f < u; ++f)
      if (d = c[f]) {
        for (var v = e.call(d, d.__data__, f, c), y, h = Rt(d, n), p = 0, m = v.length; p < m; ++p)
          (y = v[p]) && _i(y, t, n, p, v, h);
        i.push(v), a.push(d);
      }
  return new un(i, a, t, n);
}
var yy = to.prototype.constructor;
function by() {
  return new yy(this._groups, this._parents);
}
function xy(e, t) {
  var n, r, o;
  return function() {
    var i = ir(this, e), a = (this.style.removeProperty(e), ir(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function If(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wy(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = ir(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function _y(e, t, n) {
  var r, o, i;
  return function() {
    var a = ir(this, e), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(e), ir(this, e))), a === c ? null : a === r && c === o ? i : (o = c, i = t(r = a, s));
  };
}
function ky(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var c = Zt(this, e), u = c.on, d = c.value[i] == null ? s || (s = If(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(a, o = d), c.on = r;
  };
}
function Sy(e, t, n) {
  var r = (e += "") == "transform" ? Eg : Nf;
  return t == null ? this.styleTween(e, xy(e, r)).on("end.style." + e, If(e)) : typeof t == "function" ? this.styleTween(e, _y(e, r, ul(this, "style." + e, t))).each(ky(this._id, e)) : this.styleTween(e, wy(e, r, t), n).on("end.style." + e, null);
}
function Ey(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function $y(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && Ey(e, a, n)), r;
  }
  return i._value = t, i;
}
function zy(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, $y(e, t, n ?? ""));
}
function Py(e) {
  return function() {
    this.textContent = e;
  };
}
function Cy(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Ay(e) {
  return this.tween("text", typeof e == "function" ? Cy(ul(this, "text", e)) : Py(e == null ? "" : e + ""));
}
function Ty(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Oy(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ty(o)), t;
  }
  return r._value = e, r;
}
function Ny(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Oy(e));
}
function Iy() {
  for (var e = this._name, t = this._id, n = Rf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var d = Rt(c, t);
        _i(c, e, n, u, a, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new un(r, this._parents, e, n);
}
function Ry() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Zt(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), u.on = t;
    }), o === 0 && i();
  });
}
var My = 0;
function un(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Rf() {
  return ++My;
}
var Jt = to.prototype;
un.prototype = {
  constructor: un,
  select: vy,
  selectAll: gy,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: uy,
  merge: cy,
  selection: by,
  transition: Iy,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: py,
  attr: Wg,
  attrTween: Jg,
  style: Sy,
  styleTween: zy,
  text: Ay,
  textTween: Ny,
  remove: my,
  tween: Lg,
  delay: ty,
  duration: oy,
  ease: ay,
  easeVarying: ly,
  end: Ry,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function Dy(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Fy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Dy
};
function By(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ly(e) {
  var t, n;
  e instanceof un ? (t = e._id, e = e._name) : (t = Rf(), (n = Fy).time = sl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && _i(c, e, t, u, a, n || By(c, t));
  return new un(r, this._parents, e, t);
}
to.prototype.interrupt = Dg;
to.prototype.transition = Ly;
const bo = (e) => () => e;
function Uy(e, {
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
function on(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
on.prototype = {
  constructor: on,
  scale: function(e) {
    return e === 1 ? this : new on(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new on(this.k, this.x + this.k * e, this.y + this.k * t);
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
var sr = new on(1, 0, 0);
on.prototype;
function ra(e) {
  e.stopImmediatePropagation();
}
function wr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qy(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Vy() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function gu() {
  return this.__zoom || sr;
}
function jy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Hy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gy(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Wy() {
  var e = qy, t = Vy, n = Gy, r = jy, o = Hy, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, c = No, u = bi("start", "zoom", "end"), d, f, v, y = 500, h = 150, p = 0, m = 10;
  function b(S) {
    S.property("__zoom", gu).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", M).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(S, F, P, N) {
    var x = S.selection ? S.selection() : S;
    x.property("__zoom", gu), S !== x ? C(S, F, P, N) : x.interrupt().each(function() {
      z(this, arguments).event(N).start().zoom(null, typeof F == "function" ? F.apply(this, arguments) : F).end();
    });
  }, b.scaleBy = function(S, F, P, N) {
    b.scaleTo(S, function() {
      var x = this.__zoom.k, U = typeof F == "function" ? F.apply(this, arguments) : F;
      return x * U;
    }, P, N);
  }, b.scaleTo = function(S, F, P, N) {
    b.transform(S, function() {
      var x = t.apply(this, arguments), U = this.__zoom, Q = P == null ? _(x) : typeof P == "function" ? P.apply(this, arguments) : P, ee = U.invert(Q), fe = typeof F == "function" ? F.apply(this, arguments) : F;
      return n(g(E(U, fe), Q, ee), x, a);
    }, P, N);
  }, b.translateBy = function(S, F, P, N) {
    b.transform(S, function() {
      return n(this.__zoom.translate(
        typeof F == "function" ? F.apply(this, arguments) : F,
        typeof P == "function" ? P.apply(this, arguments) : P
      ), t.apply(this, arguments), a);
    }, null, N);
  }, b.translateTo = function(S, F, P, N, x) {
    b.transform(S, function() {
      var U = t.apply(this, arguments), Q = this.__zoom, ee = N == null ? _(U) : typeof N == "function" ? N.apply(this, arguments) : N;
      return n(sr.translate(ee[0], ee[1]).scale(Q.k).translate(
        typeof F == "function" ? -F.apply(this, arguments) : -F,
        typeof P == "function" ? -P.apply(this, arguments) : -P
      ), U, a);
    }, N, x);
  };
  function E(S, F) {
    return F = Math.max(i[0], Math.min(i[1], F)), F === S.k ? S : new on(F, S.x, S.y);
  }
  function g(S, F, P) {
    var N = F[0] - P[0] * S.k, x = F[1] - P[1] * S.k;
    return N === S.x && x === S.y ? S : new on(S.k, N, x);
  }
  function _(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function C(S, F, P, N) {
    S.on("start.zoom", function() {
      z(this, arguments).event(N).start();
    }).on("interrupt.zoom end.zoom", function() {
      z(this, arguments).event(N).end();
    }).tween("zoom", function() {
      var x = this, U = arguments, Q = z(x, U).event(N), ee = t.apply(x, U), fe = P == null ? _(ee) : typeof P == "function" ? P.apply(x, U) : P, ye = Math.max(ee[1][0] - ee[0][0], ee[1][1] - ee[0][1]), _e = x.__zoom, ne = typeof F == "function" ? F.apply(x, U) : F, ie = c(_e.invert(fe).concat(ye / _e.k), ne.invert(fe).concat(ye / ne.k));
      return function(me) {
        if (me === 1)
          me = ne;
        else {
          var ze = ie(me), Se = ye / ze[2];
          me = new on(Se, fe[0] - ze[0] * Se, fe[1] - ze[1] * Se);
        }
        Q.zoom(null, me);
      };
    });
  }
  function z(S, F, P) {
    return !P && S.__zooming || new w(S, F);
  }
  function w(S, F) {
    this.that = S, this.args = F, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, F), this.taps = 0;
  }
  w.prototype = {
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
      var F = Ot(this.that).datum();
      u.call(
        S,
        this.that,
        new Uy(S, {
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
    var P = z(this, F).event(S), N = this.__zoom, x = Math.max(i[0], Math.min(i[1], N.k * Math.pow(2, r.apply(this, arguments)))), U = qt(S);
    if (P.wheel)
      (P.mouse[0][0] !== U[0] || P.mouse[0][1] !== U[1]) && (P.mouse[1] = N.invert(P.mouse[0] = U)), clearTimeout(P.wheel);
    else {
      if (N.k === x)
        return;
      P.mouse = [U, N.invert(U)], Mo(this), P.start();
    }
    wr(S), P.wheel = setTimeout(Q, h), P.zoom("mouse", n(g(E(N, x), P.mouse[0], P.mouse[1]), P.extent, a));
    function Q() {
      P.wheel = null, P.end();
    }
  }
  function L(S, ...F) {
    if (v || !e.apply(this, arguments))
      return;
    var P = S.currentTarget, N = z(this, F, !0).event(S), x = Ot(S.view).on("mousemove.zoom", fe, !0).on("mouseup.zoom", ye, !0), U = qt(S, P), Q = S.clientX, ee = S.clientY;
    wf(S.view), ra(S), N.mouse = [U, this.__zoom.invert(U)], Mo(this), N.start();
    function fe(_e) {
      if (wr(_e), !N.moved) {
        var ne = _e.clientX - Q, ie = _e.clientY - ee;
        N.moved = ne * ne + ie * ie > p;
      }
      N.event(_e).zoom("mouse", n(g(N.that.__zoom, N.mouse[0] = qt(_e, P), N.mouse[1]), N.extent, a));
    }
    function ye(_e) {
      x.on("mousemove.zoom mouseup.zoom", null), _f(_e.view, N.moved), wr(_e), N.event(_e).end();
    }
  }
  function D(S, ...F) {
    if (e.apply(this, arguments)) {
      var P = this.__zoom, N = qt(S.changedTouches ? S.changedTouches[0] : S, this), x = P.invert(N), U = P.k * (S.shiftKey ? 0.5 : 2), Q = n(g(E(P, U), N, x), t.apply(this, F), a);
      wr(S), s > 0 ? Ot(this).transition().duration(s).call(C, Q, N, S) : Ot(this).call(b.transform, Q, N, S);
    }
  }
  function M(S, ...F) {
    if (e.apply(this, arguments)) {
      var P = S.touches, N = P.length, x = z(this, F, S.changedTouches.length === N).event(S), U, Q, ee, fe;
      for (ra(S), Q = 0; Q < N; ++Q)
        ee = P[Q], fe = qt(ee, this), fe = [fe, this.__zoom.invert(fe), ee.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== fe[2] && (x.touch1 = fe, x.taps = 0) : (x.touch0 = fe, U = !0, x.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (x.taps < 2 && (f = fe[0], d = setTimeout(function() {
        d = null;
      }, y)), Mo(this), x.start());
    }
  }
  function A(S, ...F) {
    if (this.__zooming) {
      var P = z(this, F).event(S), N = S.changedTouches, x = N.length, U, Q, ee, fe;
      for (wr(S), U = 0; U < x; ++U)
        Q = N[U], ee = qt(Q, this), P.touch0 && P.touch0[2] === Q.identifier ? P.touch0[0] = ee : P.touch1 && P.touch1[2] === Q.identifier && (P.touch1[0] = ee);
      if (Q = P.that.__zoom, P.touch1) {
        var ye = P.touch0[0], _e = P.touch0[1], ne = P.touch1[0], ie = P.touch1[1], me = (me = ne[0] - ye[0]) * me + (me = ne[1] - ye[1]) * me, ze = (ze = ie[0] - _e[0]) * ze + (ze = ie[1] - _e[1]) * ze;
        Q = E(Q, Math.sqrt(me / ze)), ee = [(ye[0] + ne[0]) / 2, (ye[1] + ne[1]) / 2], fe = [(_e[0] + ie[0]) / 2, (_e[1] + ie[1]) / 2];
      } else if (P.touch0)
        ee = P.touch0[0], fe = P.touch0[1];
      else
        return;
      P.zoom("touch", n(g(Q, ee, fe), P.extent, a));
    }
  }
  function q(S, ...F) {
    if (this.__zooming) {
      var P = z(this, F).event(S), N = S.changedTouches, x = N.length, U, Q;
      for (ra(S), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, y), U = 0; U < x; ++U)
        Q = N[U], P.touch0 && P.touch0[2] === Q.identifier ? delete P.touch0 : P.touch1 && P.touch1[2] === Q.identifier && delete P.touch1;
      if (P.touch1 && !P.touch0 && (P.touch0 = P.touch1, delete P.touch1), P.touch0)
        P.touch0[1] = this.__zoom.invert(P.touch0[0]);
      else if (P.end(), P.taps === 2 && (Q = qt(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < m)) {
        var ee = Ot(this).on("dblclick.zoom");
        ee && ee.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : bo(+S), b) : r;
  }, b.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : bo(!!S), b) : e;
  }, b.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : bo(!!S), b) : o;
  }, b.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : bo([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), b) : t;
  }, b.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(S) {
    return arguments.length ? (a[0][0] = +S[0][0], a[1][0] = +S[1][0], a[0][1] = +S[0][1], a[1][1] = +S[1][1], b) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, b.constrain = function(S) {
    return arguments.length ? (n = S, b) : n;
  }, b.duration = function(S) {
    return arguments.length ? (s = +S, b) : s;
  }, b.interpolate = function(S) {
    return arguments.length ? (c = S, b) : c;
  }, b.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? b : S;
  }, b.clickDistance = function(S) {
    return arguments.length ? (p = (S = +S) * S, b) : Math.sqrt(p);
  }, b.tapDistance = function(S) {
    return arguments.length ? (m = +S, b) : m;
  }, b;
}
var ue = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(ue || {}), cl = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(cl || {}), An = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(An || {}), wn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(wn || {}), ni = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(ni || {}), Nr = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Nr || {}), Mf = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Mf || {});
const Xy = ["INPUT", "SELECT", "TEXTAREA"], Yy = typeof document < "u" ? document : null;
function As(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, i = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Xy.includes(r?.nodeName) || o || !!i;
}
function Ky(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function yu(e, t, n, r) {
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
function Zy(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = Jy(n.code, e);
    return Array.isArray(e) ? e.some((o) => yu(n[r], o, t, n.type === "keyup")) : yu(n[r], e, t, n.type === "keyup");
  };
}
function Jy(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Ir(e, t) {
  const n = J(() => Ie(t?.target) ?? Yy), r = rn(Ie(e) === !0);
  let o = !1;
  const i = /* @__PURE__ */ new Set();
  let a = c(Ie(e));
  Ne(
    () => Ie(e),
    (u, d) => {
      typeof d == "boolean" && typeof u != "boolean" && s(), a = c(u);
    },
    {
      immediate: !0
    }
  ), lf(["blur", "contextmenu"], s), eu(
    (...u) => a(...u),
    (u) => {
      var d, f;
      const v = Ie(t?.actInsideInputWithModifier) ?? !0, y = Ie(t?.preventDefault) ?? !1;
      if (o = Ky(u), (!o || o && !v) && As(u))
        return;
      const p = ((f = (d = u.composedPath) == null ? void 0 : d.call(u)) == null ? void 0 : f[0]) || u.target, m = p?.nodeName === "BUTTON" || p?.nodeName === "A";
      !y && (o || !m) && u.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), eu(
    (...u) => a(...u),
    (u) => {
      const d = Ie(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !d) && As(u))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function s() {
    o = !1, i.clear(), r.value = Ie(e) === !0;
  }
  function c(u) {
    return u === null ? (s(), () => !1) : typeof u == "boolean" ? (s(), r.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? Zy(u, i) : u;
  }
  return r;
}
const Df = "vue-flow__node-desc", Ff = "vue-flow__edge-desc", Qy = "vue-flow__aria-live", Bf = ["Enter", " ", "Escape"], or = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function ri(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function oi(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function ki(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function qn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Lf(e, t) {
  return {
    x: qn(e.x, t[0][0], t[1][0]),
    y: qn(e.y, t[0][1], t[1][1])
  };
}
function bu(e) {
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
function xo(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function eb(e) {
  return xo(e.width) && xo(e.height) && xo(e.x) && xo(e.y);
}
function tb(e, t, n) {
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
function Uf(e, t, n) {
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
function qf(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, i = /* @__PURE__ */ new Set(), a = r === "source" ? "target" : "source";
  for (const s of n)
    s[a] === o && i.add(s[r]);
  return t.filter((s) => i.has(s.id));
}
function nb(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return qf(i, a, s, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => _n(i) && i.source === r).map((i) => n.find((a) => Rn(a) && a.id === i.target));
}
function rb(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return qf(i, a, s, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => _n(i) && i.target === r).map((i) => n.find((a) => Rn(a) && a.id === i.source));
}
function Vf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function ob(e, t) {
  return t.some(
    (n) => _n(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function Gr({ x: e, y: t }, { x: n, y: r, zoom: o }) {
  return {
    x: e * o + n,
    y: t * o + r
  };
}
function Wr({ x: e, y: t }, { x: n, y: r, zoom: o }, i = !1, a = [1, 1]) {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Si(s, a) : s;
}
function ib(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function jf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function ab({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function Hf(e) {
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
      jf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return ab(t);
}
function Gf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const i = {
    ...Wr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, a = [];
  for (const s of e) {
    const { dimensions: c, selectable: u = !0, hidden: d = !1 } = s, f = c.width ?? s.width ?? null, v = c.height ?? s.height ?? null;
    if (o && !u || d)
      continue;
    const y = oi(i, ri(s)), h = f === null || v === null, p = r && y > 0, m = (f ?? 0) * (v ?? 0);
    (h || p || y >= m || s.dragging) && a.push(s);
  }
  return a;
}
function Wf(e, t) {
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
  return ro(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function sb(e, t, n) {
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
function lb(e, t, n, r, o, i) {
  const { x: a, y: s } = Gr(e, { x: t, y: n, zoom: r }), { x: c, y: u } = Gr(
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
function xu(e, t, n, r, o, i = 0.1) {
  const a = sb(i, t, n), s = (t - a.x) / e.width, c = (n - a.y) / e.height, u = Math.min(s, c), d = qn(u, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, y = t / 2 - f * d, h = n / 2 - v * d, p = lb(e, y, h, d, t, n), m = {
    left: Math.min(p.left - a.left, 0),
    top: Math.min(p.top - a.top, 0),
    right: Math.min(p.right - a.right, 0),
    bottom: Math.min(p.bottom - a.bottom, 0)
  };
  return {
    x: y - m.left + m.right,
    y: h - m.top + m.bottom,
    zoom: d
  };
}
function ub(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Xf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Xf(n, t) : !1;
}
function Xr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function wu(e) {
  const t = e.ctrlKey && ii() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function _u(e, t, n) {
  return e < t ? qn(Math.abs(e - t), 1, t) / t : e > n ? -qn(Math.abs(e - n), 1, t) / t : 0;
}
function Yf(e, t, n = 15, r = 40) {
  const o = _u(e.x, r, t.width - r) * n, i = _u(e.y, r, t.height - r) * n;
  return [o, i];
}
function oa(e, t) {
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
function ku(e, t) {
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
              c && Cr(c) && oa(a, c);
            }
            break;
          case "dimensions":
            if (Cr(a) && (typeof s.dimensions < "u" && (a.dimensions = s.dimensions), typeof s.updateStyle < "u" && s.updateStyle && (a.style = {
              ...a.style || {},
              width: `${(n = s.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = s.dimensions) == null ? void 0 : r.height}px`
            }), typeof s.resizing < "u" && (a.resizing = s.resizing), a.expandParent && a.parentNode)) {
              const c = t[i.indexOf(a.parentNode)];
              c && Cr(c) && (!!c.dimensions.width && !!c.dimensions.height ? oa(a, c) : sn(() => {
                oa(a, c);
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
function Su(e) {
  return {
    item: e,
    type: "add"
  };
}
function Eu(e) {
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
function gn(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const a = t.has(o);
    !(i.selected === void 0 && !a) && i.selected !== a && (n && (i.selected = a), r.push(vn(i.id, a)));
  }
  return r;
}
const zu = () => {
};
function ce(e) {
  const t = /* @__PURE__ */ new Set();
  let n = zu, r = () => !1;
  const o = () => t.size > 0 || r(), i = (v) => {
    n = v;
  }, a = () => {
    n = zu;
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
      return Ur(y), { off: y };
    },
    off: u,
    trigger: (v) => {
      const y = [n];
      return o() ? y.push(...t) : e && y.push(e), Promise.allSettled(y.map((h) => h(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: i,
    removeEmitter: a,
    setHasEmitListeners: s,
    removeHasEmitListeners: c
  };
}
function Pu(e, t, n) {
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
function cb(e, t, n, r) {
  var o, i;
  const a = /* @__PURE__ */ new Map();
  for (const [s, c] of e)
    (c.selected || c.id === r) && (!c.parentNode || !Xf(c, e)) && (c.draggable || t && typeof c.draggable > "u") && e.get(s) && a.set(s, {
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
function ia({
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
function Kf(e) {
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
function db(e, t, n) {
  const [r, o, i, a] = typeof e != "string" ? Kf(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + a, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - i
    ]
  ] : !1;
}
function fb(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const i = db(o, e, r);
      i && (o = i);
    } else
      t(new ot(tt.NODE_EXTENT_INVALID, e.id)), o = n;
  else if (Array.isArray(o)) {
    const i = r?.computedPosition.x || 0, a = r?.computedPosition.y || 0;
    o = [
      [o[0][0] + i, o[0][1] + a],
      [o[1][0] + i, o[1][1] + a]
    ];
  } else if (o !== "parent" && o?.range && Array.isArray(o.range)) {
    const [i, a, s, c] = Kf(o.padding), u = r?.computedPosition.x || 0, d = r?.computedPosition.y || 0;
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
function pb({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function dl(e, t, n, r, o) {
  const i = pb(e.dimensions, fb(e, n, r, o)), a = Lf(t, i);
  return {
    position: {
      x: a.x - (o?.computedPosition.x || 0),
      y: a.y - (o?.computedPosition.y || 0)
    },
    computedPosition: a
  };
}
function lr(e, t, n = ue.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, i = (t?.y ?? 0) + e.computedPosition.y, { width: a, height: s } = t ?? gb(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch (t?.position ?? n) {
    case ue.Top:
      return { x: o + a / 2, y: i };
    case ue.Right:
      return { x: o + a, y: i + s / 2 };
    case ue.Bottom:
      return { x: o + a / 2, y: i + s };
    case ue.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Cu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function hb({
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
  const d = jf({
    x: (0 - c.x) / c.zoom,
    y: (0 - c.y) / c.zoom,
    width: a / c.zoom,
    height: s / c.zoom
  }), f = Math.max(0, Math.min(d.x2, u.x2) - Math.max(d.x, u.x)), v = Math.max(0, Math.min(d.y2, u.y2) - Math.max(d.y, u.y));
  return Math.ceil(f * v) > 0;
}
function mb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const i = t(e.source), a = t(e.target);
  return !i || !a ? 0 : (n && (o = r ? e.zIndex : Math.max(i.computedPosition.z || 0, a.computedPosition.z || 0)), o);
}
var tt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(tt || {});
const Au = {
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
    super((r = Au[t]) == null ? void 0 : r.call(Au, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function fl(e) {
  return "clientX" in e;
}
function vb(e) {
  return "sourceEvent" in e;
}
function jt(e, t) {
  const n = fl(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const ii = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function gb(e) {
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
const yb = () => !0;
function aa(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function bb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    oi(o, ri(i)) > 0 && r.push(i);
  return r;
}
const xb = 250;
function wb(e, t, n, r) {
  var o, i;
  let a = [], s = Number.POSITIVE_INFINITY;
  const c = bb(e, n, t + xb);
  for (const u of c) {
    const d = [...((o = u.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y } = lr(u, f, f.position, !0), h = Math.sqrt((v - e.x) ** 2 + (y - e.y) ** 2);
      h > t || (h < s ? (a = [{ ...f, x: v, y }], s = h) : h === s && a.push({ ...f, x: v, y }));
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
function Tu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: i,
  doc: a,
  lib: s,
  flowId: c,
  isValidConnection: u = yb
}, d, f, v, y) {
  const h = i === "target", p = t ? a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: m, y: b } = jt(e), E = a.elementFromPoint(m, b), g = E?.classList.contains(`${s}-flow__handle`) ? E : p, _ = {
    handleDomNode: g,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (g) {
    const C = Zf(void 0, g), z = g.getAttribute("data-nodeid"), w = g.getAttribute("data-handleid"), k = g.classList.contains("connectable"), L = g.classList.contains("connectableend");
    if (!z || !C)
      return _;
    const D = {
      source: h ? z : r,
      sourceHandle: h ? w : o,
      target: h ? r : z,
      targetHandle: h ? o : w
    };
    _.connection = D;
    const A = k && L && (n === wn.Strict ? h && C === "source" || !h && C === "target" : z !== r || w !== o);
    _.isValid = A && u(D, {
      nodes: f,
      edges: d,
      sourceNode: v(D.source),
      targetNode: v(D.target)
    }), _.toHandle = Jf(z, C, w, y, n, !0);
  }
  return _;
}
function Zf(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function _b(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function kb(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function Jf(e, t, n, r, o, i = !1) {
  var a, s, c;
  const u = r.get(e);
  if (!u)
    return null;
  const d = o === wn.Strict ? (a = u.handleBounds) == null ? void 0 : a[t] : [...((s = u.handleBounds) == null ? void 0 : s.source) ?? [], ...((c = u.handleBounds) == null ? void 0 : c.target) ?? []], f = (n ? d?.find((v) => v.id === n) : d?.[0]) ?? null;
  return f && i ? { ...f, ...lr(u, f, f.position, !0) } : f;
}
const Ts = {
  [ue.Left]: ue.Right,
  [ue.Right]: ue.Left,
  [ue.Top]: ue.Bottom,
  [ue.Bottom]: ue.Top
}, Sb = ["production", "prod"];
function ro(e, ...t) {
  Qf() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function Qf() {
  return !Sb.includes(process.env.NODE_ENV || "");
}
function Ou(e, t, n, r, o) {
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
      ...ki(a)
    };
  }) : null;
}
function Os(e, t, n, r, o, i = !1, a) {
  o.value = !1, e.selected ? (i || e.selected && t) && (r([e]), sn(() => {
    a.blur();
  })) : n([e]);
}
function et(e) {
  return typeof I(e) < "u";
}
function Eb(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new ot(tt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return _n(e) ? o = e : o = {
    ...e,
    id: Vf(e)
  }, o = Uf(o, void 0, r), ob(o, t) ? !1 : o;
}
function $b(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new ot(tt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new ot(tt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: i, ...a } = e;
  return {
    ...a,
    id: r ? Vf(t) : i,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Nu(e, t, n) {
  const r = {}, o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    if (!Rn(a)) {
      n(
        new ot(tt.NODE_INVALID, a?.id) || `[ID UNKNOWN|INDEX ${i}]`
      );
      continue;
    }
    const s = tb(a, t(a.id), a.parentNode);
    a.parentNode && (r[a.parentNode] = !0), o[i] = s;
  }
  for (const i of o) {
    const a = t(i.parentNode) || o.find((s) => s.id === i.parentNode);
    i.parentNode && !a && n(new ot(tt.NODE_MISSING_PARENT, i.id, i.parentNode)), (i.parentNode || r[i.id]) && (r[i.id] && (i.isParent = !0), a && (a.isParent = !0));
  }
  return o;
}
function Iu(e, t, n, r, o, i) {
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
function sa(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, d = `${i}-${s}--${o}-${a}`;
    Iu("source", c, d, e, o, a), Iu("target", c, u, e, i, s);
  }
}
function Ru(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function la(e, t, n, r, o, i, a, s) {
  const c = [];
  for (const u of e) {
    const d = _n(u) ? u : Eb(u, s, o, i);
    if (!d)
      continue;
    const f = n(d.source), v = n(d.target);
    if (!f || !v) {
      o(new ot(tt.EDGE_SOURCE_TARGET_MISSING, d.id, d.source, d.target));
      continue;
    }
    if (!f) {
      o(new ot(tt.EDGE_SOURCE_MISSING, d.id, d.source));
      continue;
    }
    if (!v) {
      o(new ot(tt.EDGE_TARGET_MISSING, d.id, d.target));
      continue;
    }
    if (t && !t(d, {
      edges: s,
      nodes: a,
      sourceNode: f,
      targetNode: v
    })) {
      o(new ot(tt.EDGE_INVALID, d.id));
      continue;
    }
    const y = r(d.id);
    c.push({
      ...Uf(d, y, i),
      sourceNode: f,
      targetNode: v
    });
  }
  return c;
}
const Mu = /* @__PURE__ */ Symbol("vueFlow"), ep = /* @__PURE__ */ Symbol("nodeId"), tp = /* @__PURE__ */ Symbol("nodeRef"), zb = /* @__PURE__ */ Symbol("edgeId"), Pb = /* @__PURE__ */ Symbol("edgeRef"), Ei = /* @__PURE__ */ Symbol("slots");
function np(e) {
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
    multiSelectionActive: h,
    nodesSelectionActive: p,
    selectNodesOnDrag: m,
    removeSelectedElements: b,
    addSelectedNodes: E,
    updateNodePositions: g,
    emits: _
  } = Ve(), { onStart: C, onDrag: z, onStop: w, onClick: k, el: L, disabled: D, id: M, selectable: A, dragHandle: q } = e, S = rn(!1);
  let F = [], P, N = null, x = { x: void 0, y: void 0 }, U = { x: 0, y: 0 }, Q = null, ee = !1, fe = !1, ye = 0, _e = !1;
  const ne = Tb(), ie = ({ x: ae, y: ve }) => {
    x = { x: ae, y: ve };
    let R = !1;
    if (F = F.map((O) => {
      const B = { x: ae - O.distance.x, y: ve - O.distance.y }, { computedPosition: H } = dl(
        O,
        n.value ? Si(B, r.value) : B,
        _.error,
        a.value,
        O.parentNode ? y(O.parentNode) : void 0
      );
      return R = R || O.position.x !== H.x || O.position.y !== H.y, O.position = H, O;
    }), fe = fe || R, !!R && (g(F, !0, !0), S.value = !0, Q)) {
      const [O, B] = ia({
        id: M,
        dragItems: F,
        findNode: y
      });
      z({ event: Q, node: O, nodes: B });
    }
  }, me = () => {
    if (!N)
      return;
    const [ae, ve] = Yf(U, N, d.value);
    if (ae !== 0 || ve !== 0) {
      const R = {
        x: (x.x ?? 0) - ae / c.value.zoom,
        y: (x.y ?? 0) - ve / c.value.zoom
      };
      v({ x: ae, y: ve }) && ie(R);
    }
    ye = requestAnimationFrame(me);
  }, ze = (ae, ve) => {
    ee = !0;
    const R = y(M);
    !m.value && !h.value && R && (R.selected || b()), R && Ie(A) && m.value && Os(
      R,
      h.value,
      E,
      b,
      p,
      !1,
      ve
    );
    const O = ne(ae.sourceEvent);
    if (x = O, F = cb(i.value, f.value, O, M), F.length) {
      const [B, H] = ia({
        id: M,
        dragItems: F,
        findNode: y
      });
      C({ event: ae.sourceEvent, node: B, nodes: H });
    }
  }, Se = (ae, ve) => {
    var R;
    ae.sourceEvent.type === "touchmove" && ae.sourceEvent.touches.length > 1 || (fe = !1, s.value === 0 && ze(ae, ve), x = ne(ae.sourceEvent), N = ((R = t.value) == null ? void 0 : R.getBoundingClientRect()) || null, U = jt(ae.sourceEvent, N));
  }, se = (ae, ve) => {
    const R = ne(ae.sourceEvent);
    if (!_e && ee && u.value && (_e = !0, me()), !ee) {
      const O = R.xSnapped - (x.x ?? 0), B = R.ySnapped - (x.y ?? 0);
      Math.sqrt(O * O + B * B) > s.value && ze(ae, ve);
    }
    (x.x !== R.xSnapped || x.y !== R.ySnapped) && F.length && ee && (Q = ae.sourceEvent, U = jt(ae.sourceEvent, N), ie(R));
  }, we = (ae) => {
    let ve = !1;
    if (!ee && !S.value && !h.value) {
      const R = ae.sourceEvent, O = ne(R), B = O.xSnapped - (x.x ?? 0), H = O.ySnapped - (x.y ?? 0), j = Math.sqrt(B * B + H * H);
      j !== 0 && j <= s.value && (k?.(R), ve = !0);
    }
    if (F.length && !ve) {
      fe && (g(F, !1, !1), fe = !1);
      const [R, O] = ia({
        id: M,
        dragItems: F,
        findNode: y
      });
      w({ event: ae.sourceEvent, node: R, nodes: O });
    }
    F = [], S.value = !1, _e = !1, ee = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(ye);
  };
  return Ne([() => Ie(D), L], ([ae, ve], R, O) => {
    if (ve) {
      const B = Ot(ve);
      ae || (P = eg().on("start", (H) => Se(H, ve)).on("drag", (H) => se(H, ve)).on("end", (H) => we(H)).filter((H) => {
        const j = H.target, re = Ie(q);
        return !H.button && (!o.value || !Pu(j, `.${o.value}`, ve) && (!re || Pu(j, re, ve)));
      }), B.call(P)), O(() => {
        B.on(".drag", null), P && (P.on("start", null), P.on("drag", null), P.on("end", null));
      });
    }
  }), S;
}
function Cb() {
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
function Ab(e, t) {
  const n = Cb();
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
function Tb() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = Ve();
  return (o) => {
    var i;
    const a = ((i = r.value) == null ? void 0 : i.getBoundingClientRect()) ?? { left: 0, top: 0 }, s = vb(o) ? o.sourceEvent : o, { x: c, y: u } = jt(s, a), d = Wr({ x: c, y: u }, e.value), { x: f, y: v } = n.value ? Si(d, t.value) : d;
    return {
      xSnapped: f,
      ySnapped: v,
      ...d
    };
  };
}
function wo() {
  return !0;
}
function rp({
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
    autoPanOnConnect: h,
    autoPanSpeed: p,
    findNode: m,
    panBy: b,
    startConnection: E,
    updateConnection: g,
    endConnection: _,
    emits: C,
    viewport: z,
    edges: w,
    nodes: k,
    isValidConnection: L,
    nodeLookup: D
  } = Ve();
  let M = null, A = !1, q = null;
  function S(P) {
    var N;
    const x = Ie(n) === "target", U = fl(P), Q = bu(P.target), ee = P.currentTarget;
    if (ee && (U && P.button === 0 || !U)) {
      let fe = function(pe) {
        R = jt(pe, we), ie = wb(
          Wr(R, z.value, !1, [1, 1]),
          d.value,
          D.value,
          H
        ), O || (B(), O = !0);
        const be = Tu(
          pe,
          {
            handle: ie,
            connectionMode: u.value,
            fromNodeId: Ie(t),
            fromHandleId: Ie(e),
            fromType: x ? "target" : "source",
            isValidConnection: ne,
            doc: Q,
            lib: "vue",
            flowId: s,
            nodeLookup: D.value
          },
          w.value,
          k.value,
          m,
          D.value
        );
        q = be.handleDomNode, M = be.connection, A = kb(!!ie, be.isValid);
        const Ee = {
          // from stays the same
          ...de,
          isValid: A,
          to: be.toHandle && A ? Gr({ x: be.toHandle.x, y: be.toHandle.y }, z.value) : R,
          toHandle: be.toHandle,
          toPosition: A && be.toHandle ? be.toHandle.position : Ts[H.position],
          toNode: be.toHandle ? D.value.get(be.toHandle.nodeId) : null
        };
        if (A && ie && de?.toHandle && Ee.toHandle && de.toHandle.type === Ee.toHandle.type && de.toHandle.nodeId === Ee.toHandle.nodeId && de.toHandle.id === Ee.toHandle.id && de.to.x === Ee.to.x && de.to.y === Ee.to.y)
          return;
        const Fe = ie ?? be.toHandle;
        if (g(
          Fe && A ? Gr(
            {
              x: Fe.x,
              y: Fe.y
            },
            z.value
          ) : R,
          Fe,
          _b(!!Fe, A)
        ), de = Ee, !ie && !A && !q)
          return aa(ve);
        M && M.source !== M.target && q && (aa(ve), ve = q, q.classList.add("connecting", "vue-flow__handle-connecting"), q.classList.toggle("valid", !!A), q.classList.toggle("vue-flow__handle-valid", !!A));
      }, ye = function(pe) {
        "touches" in pe && pe.touches.length > 0 || ((ie || q) && M && A && (i ? i(pe, M) : C.connect(M)), C.connectEnd(pe), o && a?.(pe), aa(ve), cancelAnimationFrame(me), _(pe), O = !1, A = !1, M = null, q = null, Q.removeEventListener("mousemove", fe), Q.removeEventListener("mouseup", ye), Q.removeEventListener("touchmove", fe), Q.removeEventListener("touchend", ye));
      };
      const _e = m(Ie(t));
      let ne = Ie(r) || L.value || wo;
      !ne && _e && (ne = (x ? _e.isValidSourcePos : _e.isValidTargetPos) || wo);
      let ie, me = 0;
      const { x: ze, y: Se } = jt(P), se = Zf(Ie(o), ee), we = (N = c.value) == null ? void 0 : N.getBoundingClientRect();
      if (!we || !se)
        return;
      const ae = Jf(Ie(t), se, Ie(e), D.value, u.value);
      if (!ae)
        return;
      let ve, R = jt(P, we), O = !1;
      const B = () => {
        if (!h.value)
          return;
        const [pe, be] = Yf(R, we, p.value);
        b({ x: pe, y: be }), me = requestAnimationFrame(B);
      }, H = {
        ...ae,
        nodeId: Ie(t),
        type: se,
        position: ae.position
      }, j = D.value.get(Ie(t)), oe = {
        inProgress: !0,
        isValid: null,
        from: lr(j, H, ue.Left, !0),
        fromHandle: H,
        fromPosition: H.position,
        fromNode: j,
        to: R,
        toHandle: null,
        toPosition: Ts[H.position],
        toNode: null
      };
      E(
        {
          nodeId: Ie(t),
          id: Ie(e),
          type: se,
          position: ee?.getAttribute("data-handlepos") || ue.Top,
          ...R
        },
        {
          x: ze - we.left,
          y: Se - we.top
        }
      ), C.connectStart({ event: P, nodeId: Ie(t), handleId: Ie(e), handleType: se });
      let de = oe;
      Q.addEventListener("mousemove", fe), Q.addEventListener("mouseup", ye), Q.addEventListener("touchmove", fe), Q.addEventListener("touchend", ye);
    }
  }
  function F(P) {
    var N, x;
    if (!f.value)
      return;
    const U = Ie(n) === "target";
    if (!v.value) {
      C.clickConnectStart({ event: P, nodeId: Ie(t), handleId: Ie(e) }), E(
        {
          nodeId: Ie(t),
          type: Ie(n),
          id: Ie(e),
          position: ue.Top,
          ...jt(P)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Ie(r) || L.value || wo;
    const ee = m(Ie(t));
    if (!Q && ee && (Q = (U ? ee.isValidSourcePos : ee.isValidTargetPos) || wo), ee && (typeof ee.connectable > "u" ? y.value : ee.connectable) === !1)
      return;
    const fe = bu(P.target), ye = Tu(
      P,
      {
        handle: {
          nodeId: Ie(t),
          id: Ie(e),
          type: Ie(n),
          position: ue.Top,
          ...jt(P)
        },
        connectionMode: u.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: fe,
        lib: "vue",
        flowId: s,
        nodeLookup: D.value
      },
      w.value,
      k.value,
      m,
      D.value
    ), _e = ((N = ye.connection) == null ? void 0 : N.source) === ((x = ye.connection) == null ? void 0 : x.target);
    ye.isValid && ye.connection && !_e && C.connect(ye.connection), C.clickConnectEnd(P), _(P, !0);
  }
  return {
    handlePointerDown: S,
    handleClick: F
  };
}
function Ob() {
  return pr(ep, "");
}
function op(e) {
  const t = e ?? Ob() ?? "", n = pr(tp, Y(null)), { findNode: r, edges: o, emits: i } = Ve(), a = r(t);
  return a || i.error(new ot(tt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: a,
    parentNode: J(() => r(a.parentNode)),
    connectedEdges: J(() => Wf([a], o.value))
  };
}
function Nb() {
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
function Ib(e, t) {
  const n = Nb();
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
function ip() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: i, nodesDraggable: a, emits: s } = Ve();
  return (c, u = !1) => {
    const d = i.value ? o.value[0] : 5, f = i.value ? o.value[1] : 5, v = u ? 4 : 1, y = c.x * d * v, h = c.y * f * v, p = [];
    for (const m of e.value)
      if (m.draggable || a && typeof m.draggable > "u") {
        const b = { x: m.computedPosition.x + y, y: m.computedPosition.y + h }, { position: E } = dl(
          m,
          b,
          s.error,
          t.value,
          m.parentNode ? r(m.parentNode) : void 0
        );
        p.push({
          id: m.id,
          position: E,
          from: m.position,
          distance: { x: c.x, y: c.y },
          dimensions: m.dimensions
        });
      }
    n(p, !0, !1);
  };
}
const _o = 0.1, Rb = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function hn() {
  return ro("Viewport not initialized yet."), Promise.resolve(!1);
}
const Mb = {
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
function Db(e) {
  function t(r, o) {
    return new Promise((i) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Or : No).scaleBy(
        ua(e.d3Selection, o?.duration, o?.ease, () => {
          i(!0);
        }),
        r
      ) : i(!1);
    });
  }
  function n(r, o, i, a) {
    return new Promise((s) => {
      var c;
      const { x: u, y: d } = Lf({ x: -r, y: -o }, e.translateExtent), f = sr.translate(-u, -d).scale(i);
      e.d3Selection && e.d3Zoom ? (c = e.d3Zoom) == null || c.interpolate(a?.interpolate === "linear" ? Or : No).transform(
        ua(e.d3Selection, a?.duration, a?.ease, () => {
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
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(i?.interpolate === "linear" ? Or : No).scaleTo(
        ua(e.d3Selection, i?.duration, i?.ease, () => {
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
      padding: _o,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var i, a;
      const s = [];
      for (const v of e.nodes)
        v.dimensions.width && v.dimensions.height && (o?.includeHiddenNodes || !v.hidden) && (!((i = o.nodes) != null && i.length) || (a = o.nodes) != null && a.length && o.nodes.includes(v.id)) && s.push(v);
      if (!s.length)
        return Promise.resolve(!1);
      const c = Hf(s), { x: u, y: d, zoom: f } = xu(
        c,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? _o
      );
      return n(u, d, f, o);
    },
    setCenter: (o, i, a) => {
      const s = typeof a?.zoom < "u" ? a.zoom : e.maxZoom, c = e.dimensions.width / 2 - o * s, u = e.dimensions.height / 2 - i * s;
      return n(c, u, s, a);
    },
    fitBounds: (o, i = { padding: _o }) => {
      const { x: a, y: s, zoom: c } = xu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        i.padding ?? _o
      );
      return n(a, s, c, i);
    },
    project: (o) => Wr(o, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: i, y: a } = e.vueFlowRef.getBoundingClientRect(), s = {
          x: o.x - i,
          y: o.y - a
        };
        return Wr(s, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (o) => {
      if (e.vueFlowRef) {
        const { x: i, y: a } = e.vueFlowRef.getBoundingClientRect(), s = {
          x: o.x + i,
          y: o.y + a
        };
        return Gr(s, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : Mb);
}
function ua(e, t = 0, n = Rb, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Fb(e, t, n) {
  const r = Vd(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let p, m, b = !!(n.nodes.value.length || n.edges.value.length);
        p = Kn([e.modelValue, () => {
          var E, g;
          return (g = (E = e.modelValue) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (m?.pause(), n.setElements(E), !m && !b && E.length ? b = !0 : m?.resume());
        }), m = Kn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([E, g]) => {
            var _;
            (_ = e.modelValue) != null && _.value && Array.isArray(e.modelValue.value) && (p?.pause(), e.modelValue.value = [...E, ...g], sn(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), To(() => {
          p?.stop(), m?.stop();
        });
      });
    }, i = () => {
      r.run(() => {
        let p, m, b = !!n.nodes.value.length;
        p = Kn([e.nodes, () => {
          var E, g;
          return (g = (E = e.nodes) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (m?.pause(), n.setNodes(E), !m && !b && E.length ? b = !0 : m?.resume());
        }), m = Kn(
          [n.nodes, () => n.nodes.value.length],
          ([E]) => {
            var g;
            (g = e.nodes) != null && g.value && Array.isArray(e.nodes.value) && (p?.pause(), e.nodes.value = [...E], sn(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), To(() => {
          p?.stop(), m?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let p, m, b = !!n.edges.value.length;
        p = Kn([e.edges, () => {
          var E, g;
          return (g = (E = e.edges) == null ? void 0 : E.value) == null ? void 0 : g.length;
        }], ([E]) => {
          E && Array.isArray(E) && (m?.pause(), n.setEdges(E), !m && !b && E.length ? b = !0 : m?.resume());
        }), m = Kn(
          [n.edges, () => n.edges.value.length],
          ([E]) => {
            var g;
            (g = e.edges) != null && g.value && Array.isArray(e.edges.value) && (p?.pause(), e.edges.value = [...E], sn(() => {
              p?.resume();
            }));
          },
          { immediate: b }
        ), To(() => {
          p?.stop(), m?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        Ne(
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
        Ne(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      r.run(() => {
        Ne(
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
        Ne(
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
        Ne(
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
          let b = m;
          typeof t.autoConnect == "function" && (b = await t.autoConnect(m)), b !== !1 && n.addEdges([b]);
        };
        Ne(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Ne(
          n.autoConnect,
          (m, b, E) => {
            m ? n.onConnect(p) : n.hooks.value.connect.off(p), E(() => {
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
      for (const m of Object.keys(t)) {
        const b = m;
        if (!p.includes(b)) {
          const E = qe(() => t[b]), g = n[b];
          el(g) && r.run(() => {
            Ne(
              E,
              (_) => {
                et(_) && (g.value = _);
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
function Bb() {
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
    error: ce((e) => ro(e.message))
  };
}
function Lb(e, t) {
  const n = hr();
  uh(() => {
    for (const [o, i] of Object.entries(t.value)) {
      const a = (s) => {
        e(o, s);
      };
      i.setEmitter(a), Ur(i.removeEmitter), i.setHasEmitListeners(() => r(o)), Ur(i.removeHasEmitListeners);
    }
  });
  function r(o) {
    var i;
    const a = Ub(o);
    return !!((i = n?.vnode.props) == null ? void 0 : i[a]);
  }
}
function Ub(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, i) => i.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function ap() {
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
    selectionMode: cl.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: Nr.Free,
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
    multiSelectionKeyCode: ii() ? "Meta" : "Control",
    zoomActivationKeyCode: ii() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: Bb(),
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
const qb = [
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
function Vb(e, t, n) {
  const r = Db(e), o = (R) => {
    const O = R ?? [];
    e.hooks.updateNodeInternals.trigger(O);
  }, i = (R) => rb(R, e.nodes, e.edges), a = (R) => nb(R, e.nodes, e.edges), s = (R) => Wf(R, e.edges), c = ({ id: R, type: O, nodeId: B }) => {
    var H;
    const j = R ? `-${O}-${R}` : `-${O}`;
    return Array.from(((H = e.connectionLookup.get(`${B}${j}`)) == null ? void 0 : H.values()) ?? []);
  }, u = (R) => {
    if (R)
      return t.value.get(R);
  }, d = (R) => {
    if (R)
      return n.value.get(R);
  }, f = (R, O, B) => {
    var H, j;
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
          x: de.position.x - (((H = pe?.computedPosition) == null ? void 0 : H.x) ?? 0),
          y: de.position.y - (((j = pe?.computedPosition) == null ? void 0 : j.y) ?? 0)
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
    const B = window.getComputedStyle(O), { m22: H } = new window.DOMMatrixReadOnly(B.transform), j = [];
    for (const re of R) {
      const oe = re, de = u(oe.id);
      if (de) {
        const pe = ki(oe.nodeElement);
        if (!!(pe.width && pe.height && (de.dimensions.width !== pe.width || de.dimensions.height !== pe.height || oe.forceUpdate))) {
          const Ee = oe.nodeElement.getBoundingClientRect();
          de.dimensions = pe, de.handleBounds.source = Ou("source", oe.nodeElement, Ee, H, de.id), de.handleBounds.target = Ou("target", oe.nodeElement, Ee, H, de.id), j.push({
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
  }, y = (R, O) => {
    const B = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
    for (const oe of R)
      Rn(oe) ? B.add(oe.id) : _n(oe) && H.add(oe.id);
    const j = gn(t.value, B, !0), re = gn(n.value, H);
    if (e.multiSelectionActive) {
      for (const oe of B)
        j.push(vn(oe, O));
      for (const oe of H)
        re.push(vn(oe, O));
    }
    j.length && e.hooks.nodesChange.trigger(j), re.length && e.hooks.edgesChange.trigger(re);
  }, h = (R) => {
    if (e.multiSelectionActive) {
      const O = R.map((B) => vn(B.id, !0));
      e.hooks.nodesChange.trigger(O);
      return;
    }
    e.hooks.nodesChange.trigger(gn(t.value, new Set(R.map((O) => O.id)), !0)), e.hooks.edgesChange.trigger(gn(n.value));
  }, p = (R) => {
    if (e.multiSelectionActive) {
      const O = R.map((B) => vn(B.id, !0));
      e.hooks.edgesChange.trigger(O);
      return;
    }
    e.hooks.edgesChange.trigger(gn(n.value, new Set(R.map((O) => O.id)))), e.hooks.nodesChange.trigger(gn(t.value, /* @__PURE__ */ new Set(), !0));
  }, m = (R) => {
    y(R, !0);
  }, b = (R) => {
    const B = (R || e.nodes).map((H) => (H.selected = !1, vn(H.id, !1)));
    e.hooks.nodesChange.trigger(B);
  }, E = (R) => {
    const B = (R || e.edges).map((H) => (H.selected = !1, vn(H.id, !1)));
    e.hooks.edgesChange.trigger(B);
  }, g = (R) => {
    if (!R || !R.length)
      return y([], !1);
    const O = R.reduce(
      (B, H) => {
        const j = vn(H.id, !1);
        return Rn(H) ? B.nodes.push(j) : B.edges.push(j), B;
      },
      { nodes: [], edges: [] }
    );
    O.nodes.length && e.hooks.nodesChange.trigger(O.nodes), O.edges.length && e.hooks.edgesChange.trigger(O.edges);
  }, _ = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([R, e.maxZoom]), e.minZoom = R;
  }, C = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.scaleExtent([e.minZoom, R]), e.maxZoom = R;
  }, z = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.translateExtent(R), e.translateExtent = R;
  }, w = (R) => {
    e.nodeExtent = R, o();
  }, k = (R) => {
    var O;
    (O = e.d3Zoom) == null || O.clickDistance(R);
  }, L = (R) => {
    e.nodesDraggable = R, e.nodesConnectable = R, e.elementsSelectable = R;
  }, D = (R) => {
    const O = R instanceof Function ? R(e.nodes) : R;
    !e.initialized && !O.length || (e.nodes = Nu(O, u, e.hooks.error.trigger));
  }, M = (R) => {
    const O = R instanceof Function ? R(e.edges) : R;
    if (!e.initialized && !O.length)
      return;
    const B = la(
      O,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    sa(e.connectionLookup, n.value, B), e.edges = B;
  }, A = (R) => {
    const O = R instanceof Function ? R([...e.nodes, ...e.edges]) : R;
    !e.initialized && !O.length || (D(O.filter(Rn)), M(O.filter(_n)));
  }, q = (R) => {
    let O = R instanceof Function ? R(e.nodes) : R;
    O = Array.isArray(O) ? O : [O];
    const B = Nu(O, u, e.hooks.error.trigger), H = [];
    for (const j of B)
      H.push(Su(j));
    H.length && e.hooks.nodesChange.trigger(H);
  }, S = (R) => {
    let O = R instanceof Function ? R(e.edges) : R;
    O = Array.isArray(O) ? O : [O];
    const B = la(
      O,
      e.isValidConnection,
      u,
      d,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), H = [];
    for (const j of B)
      H.push(Su(j));
    H.length && e.hooks.edgesChange.trigger(H);
  }, F = (R, O = !0, B = !1) => {
    const H = R instanceof Function ? R(e.nodes) : R, j = Array.isArray(H) ? H : [H], re = [], oe = [];
    function de(be) {
      const Ee = s(be);
      for (const Fe of Ee)
        (!et(Fe.deletable) || Fe.deletable) && oe.push($u(Fe.id, Fe.source, Fe.target, Fe.sourceHandle, Fe.targetHandle));
    }
    function pe(be) {
      const Ee = [];
      for (const Fe of e.nodes)
        Fe.parentNode === be && Ee.push(Fe);
      if (Ee.length) {
        for (const Fe of Ee)
          re.push(Eu(Fe.id));
        O && de(Ee);
        for (const Fe of Ee)
          pe(Fe.id);
      }
    }
    for (const be of j) {
      const Ee = typeof be == "string" ? u(be) : be;
      Ee && (et(Ee.deletable) && !Ee.deletable || (re.push(Eu(Ee.id)), O && de([Ee]), B && pe(Ee.id)));
    }
    oe.length && e.hooks.edgesChange.trigger(oe), re.length && e.hooks.nodesChange.trigger(re);
  }, P = (R) => {
    const O = R instanceof Function ? R(e.edges) : R, B = Array.isArray(O) ? O : [O], H = [];
    for (const j of B) {
      const re = typeof j == "string" ? d(j) : j;
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
  }, N = (R, O, B = !0) => {
    const H = d(R.id);
    if (!H)
      return !1;
    const j = e.edges.indexOf(H), re = $b(R, O, H, B, e.hooks.error.trigger);
    if (re) {
      const [oe] = la(
        [re],
        e.isValidConnection,
        u,
        d,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((de, pe) => pe === j ? oe : de), sa(e.connectionLookup, n.value, [oe]), oe;
    }
    return !1;
  }, x = (R, O, B = { replace: !1 }) => {
    const H = d(R);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, U = (R) => ku(R, e.nodes), Q = (R) => {
    const O = ku(R, e.edges);
    return sa(e.connectionLookup, n.value, O), O;
  }, ee = (R, O, B = { replace: !1 }) => {
    const H = u(R);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    B.replace ? e.nodes.splice(e.nodes.indexOf(H), 1, j) : Object.assign(H, j);
  }, fe = (R, O, B = { replace: !1 }) => {
    const H = u(R);
    if (!H)
      return;
    const j = typeof O == "function" ? O(H) : O;
    H.data = B.replace ? j : { ...H.data, ...j };
  }, ye = (R, O, B = !1) => {
    B ? e.connectionClickStartHandle = R : e.connectionStartHandle = R, e.connectionEndHandle = null, e.connectionStatus = null, O && (e.connectionPosition = O);
  }, _e = (R, O = null, B = null) => {
    e.connectionStartHandle && (e.connectionPosition = R, e.connectionEndHandle = O, e.connectionStatus = B);
  }, ne = (R, O) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, O ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, ie = (R) => {
    const O = eb(R), B = O ? null : Cr(R) ? R : u(R.id);
    return !O && !B ? [null, null, O] : [O ? R : ri(B), B, O];
  }, me = (R, O = !0, B = e.nodes) => {
    const [H, j, re] = ie(R);
    if (!H)
      return [];
    const oe = [];
    for (const de of B || e.nodes) {
      if (!re && (de.id === j.id || !de.computedPosition))
        continue;
      const pe = ri(de), be = oi(pe, H);
      (O && be > 0 || be >= pe.width * pe.height || be >= Number(H.width) * Number(H.height)) && oe.push(de);
    }
    return oe;
  }, ze = (R, O, B = !0) => {
    const [H] = ie(R);
    if (!H)
      return !1;
    const j = oi(H, O);
    return B && j > 0 || j >= Number(H.width) * Number(H.height);
  }, Se = (R) => {
    const { viewport: O, dimensions: B, d3Zoom: H, d3Selection: j, translateExtent: re } = e;
    if (!H || !j || !R.x && !R.y)
      return !1;
    const oe = sr.translate(O.x + R.x, O.y + R.y).scale(O.zoom), de = [
      [0, 0],
      [B.width, B.height]
    ], pe = H.constrain()(oe, de, re), be = e.viewport.x !== pe.x || e.viewport.y !== pe.y || e.viewport.zoom !== pe.k;
    return H.transform(j, pe), be;
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
    const H = O.modelValue || O.nodes || O.edges ? [] : void 0;
    H && (O.modelValue && H.push(...O.modelValue), O.nodes && H.push(...O.nodes), O.edges && H.push(...O.edges), A(H));
    const j = () => {
      et(O.maxZoom) && C(O.maxZoom), et(O.minZoom) && _(O.minZoom), et(O.translateExtent) && z(O.translateExtent);
    };
    for (const re of Object.keys(O)) {
      const oe = re, de = O[oe];
      ![...qb, ...B].includes(oe) && et(de) && (e[oe] = de);
    }
    ws(() => e.d3Zoom).not.toBeNull().then(j), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: A,
    setNodes: D,
    setEdges: M,
    addNodes: q,
    addEdges: S,
    removeNodes: F,
    removeEdges: P,
    findNode: u,
    findEdge: d,
    updateEdge: N,
    updateEdgeData: x,
    updateNode: ee,
    updateNodeData: fe,
    applyEdgeChanges: Q,
    applyNodeChanges: U,
    addSelectedElements: m,
    addSelectedNodes: h,
    addSelectedEdges: p,
    setMinZoom: _,
    setMaxZoom: C,
    setTranslateExtent: z,
    setNodeExtent: w,
    setPaneClickDistance: k,
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
    panBy: Se,
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
          computedPosition: H,
          handleBounds: j,
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
        const { selected: H, sourceNode: j, targetNode: re, events: oe, ...de } = B;
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
      const { nodes: B, edges: H, position: j, zoom: re, viewport: oe } = R;
      B && D(B), H && M(H);
      const [de, pe] = oe?.x && oe?.y ? [oe.x, oe.y] : j ?? [null, null];
      if (de && pe) {
        const be = oe?.zoom || re || e.viewport.zoom;
        return ws(() => r.value.viewportInitialized).toBe(!0).then(() => {
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
      const R = ap();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const O = sr.translate(R.defaultViewport.x ?? 0, R.defaultViewport.y ?? 0).scale(qn(R.defaultViewport.zoom ?? 1, R.minZoom, R.maxZoom)), B = e.viewportRef.getBoundingClientRect(), H = [
          [0, 0],
          [B.width, B.height]
        ], j = e.d3Zoom.constrain()(O, H, R.translateExtent);
        e.d3Zoom.transform(e.d3Selection, j);
      }
      se(R);
    },
    $destroy: () => {
    }
  };
}
const jb = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Hb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, ut = /* @__PURE__ */ De({
  ...Hb,
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
    const n = lh(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = qe(() => n.type ?? "source"), o = qe(() => n.isValidConnection ?? null), {
      id: i,
      connectionStartHandle: a,
      connectionClickStartHandle: s,
      connectionEndHandle: c,
      vueFlowRef: u,
      nodesConnectable: d,
      noDragClassName: f,
      noPanClassName: v
    } = Ve(), { id: y, node: h, nodeEl: p, connectedEdges: m } = op(), b = Y(), E = qe(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), g = qe(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), _ = qe(
      () => {
        var M, A, q, S, F, P;
        return ((M = a.value) == null ? void 0 : M.nodeId) === y && ((A = a.value) == null ? void 0 : A.id) === e.id && ((q = a.value) == null ? void 0 : q.type) === r.value || ((S = c.value) == null ? void 0 : S.nodeId) === y && ((F = c.value) == null ? void 0 : F.id) === e.id && ((P = c.value) == null ? void 0 : P.type) === r.value;
      }
    ), C = qe(
      () => {
        var M, A, q;
        return ((M = s.value) == null ? void 0 : M.nodeId) === y && ((A = s.value) == null ? void 0 : A.id) === e.id && ((q = s.value) == null ? void 0 : q.type) === r.value;
      }
    ), { handlePointerDown: z, handleClick: w } = rp({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), k = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !m.value.some((M) => {
      const A = M[`${r.value}Handle`];
      return M[r.value] !== y ? !1 : A ? A === e.id : !0;
    }) : typeof e.connectable == "number" ? m.value.filter((M) => {
      const A = M[`${r.value}Handle`];
      return M[r.value] !== y ? !1 : A ? A === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(h, m.value) : et(e.connectable) ? e.connectable : d.value);
    Ze(() => {
      var M;
      if (!h.dimensions.width || !h.dimensions.height)
        return;
      const A = (M = h.handleBounds[r.value]) == null ? void 0 : M.find((U) => U.id === e.id);
      if (!u.value || A)
        return;
      const q = u.value.querySelector(".vue-flow__transformationpane");
      if (!p.value || !b.value || !q || !e.id)
        return;
      const S = p.value.getBoundingClientRect(), F = b.value.getBoundingClientRect(), P = window.getComputedStyle(q), { m22: N } = new window.DOMMatrixReadOnly(P.transform), x = {
        id: e.id,
        position: e.position,
        x: (F.left - S.left) / N,
        y: (F.top - S.top) / N,
        type: r.value,
        nodeId: y,
        ...ki(b.value)
      };
      h.handleBounds[r.value] = [...h.handleBounds[r.value] ?? [], x];
    });
    function L(M) {
      const A = fl(M);
      k.value && E.value && (A && M.button === 0 || !A) && z(M);
    }
    function D(M) {
      !y || !s.value && !E.value || k.value && w(M);
    }
    return t({
      handleClick: w,
      handlePointerDown: z,
      onClick: D,
      onPointerDown: L
    }), (M, A) => ($(), T("div", {
      ref_key: "handle",
      ref: b,
      "data-id": `${I(i)}-${I(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": I(y),
      "data-handlepos": M.position,
      class: K(["vue-flow__handle", [
        `vue-flow__handle-${M.position}`,
        `vue-flow__handle-${e.id}`,
        I(f),
        I(v),
        r.value,
        {
          connectable: k.value,
          connecting: C.value,
          connectablestart: E.value,
          connectableend: g.value,
          connectionindicator: k.value && (E.value && !_.value || g.value && _.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: D
    }, [
      Xe(M.$slots, "default", { id: M.id })
    ], 42, jb));
  }
}), $i = function({
  sourcePosition: e = ue.Bottom,
  targetPosition: t = ue.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: i,
  data: a
}) {
  const s = a.label ?? n;
  return [
    $e(ut, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof s != "string" && s ? $e(s) : $e(ge, [s]),
    $e(ut, { type: "source", position: e, connectable: r, isValidConnection: i })
  ];
};
$i.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
$i.inheritAttrs = !1;
$i.compatConfig = { MODE: 3 };
const Gb = $i, zi = function({
  targetPosition: e = ue.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    $e(ut, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof i != "string" && i ? $e(i) : $e(ge, [i])
  ];
};
zi.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
zi.inheritAttrs = !1;
zi.compatConfig = { MODE: 3 };
const Wb = zi, Pi = function({
  sourcePosition: e = ue.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    typeof i != "string" && i ? $e(i) : $e(ge, [i]),
    $e(ut, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Pi.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Pi.inheritAttrs = !1;
Pi.compatConfig = { MODE: 3 };
const Xb = Pi, Yb = ["transform"], Kb = ["width", "height", "x", "y", "rx", "ry"], Zb = ["y"], Jb = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, Qb = /* @__PURE__ */ De({
  ...Jb,
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
    const t = Y({ x: 0, y: 0, width: 0, height: 0 }), n = Y(null), r = J(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    Ze(o), Ne([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const i = n.value.getBBox();
      (i.width !== t.value.width || i.height !== t.value.height) && (t.value = i);
    }
    return (i, a) => ($(), T("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      i.labelShowBg ? ($(), T("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * i.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * i.labelBgPadding[1]}px`,
        x: -i.labelBgPadding[0],
        y: -i.labelBgPadding[1],
        style: vt(i.labelBgStyle),
        rx: i.labelBgBorderRadius,
        ry: i.labelBgBorderRadius
      }, null, 12, Kb)) : te("", !0),
      l("text", yi(i.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: i.labelStyle
      }), [
        Xe(i.$slots, "default", {}, () => [
          typeof i.label != "string" ? ($(), Re(Tt(i.label), { key: 0 })) : ($(), T(ge, { key: 1 }, [
            Be(V(i.label), 1)
          ], 64))
        ])
      ], 16, Zb)
    ], 8, Yb));
  }
}), ex = ["id", "d", "marker-end", "marker-start"], tx = ["d", "stroke-width"], nx = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, oo = /* @__PURE__ */ De({
  ...nx,
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
    const n = Y(null), r = Y(null), o = Y(null), i = dh();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (a, s) => ($(), T(ge, null, [
      l("path", yi(I(i), {
        id: a.id,
        ref_key: "pathEl",
        ref: n,
        d: a.path,
        class: "vue-flow__edge-path",
        "marker-end": a.markerEnd,
        "marker-start": a.markerStart
      }), null, 16, ex),
      a.interactionWidth ? ($(), T("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: a.path,
        "stroke-width": a.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, tx)) : te("", !0),
      a.label && a.labelX && a.labelY ? ($(), Re(Qb, {
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
function sp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function lp({
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
function ko(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Du({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  let a, s;
  switch (e) {
    case ue.Left:
      a = t - ko(t - r, i), s = n;
      break;
    case ue.Right:
      a = t + ko(r - t, i), s = n;
      break;
    case ue.Top:
      a = t, s = n - ko(n - o, i);
      break;
    case ue.Bottom:
      a = t, s = n + ko(o - n, i);
      break;
  }
  return [a, s];
}
function pl(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = ue.Top,
    curvature: s = 0.25
  } = e, [c, u] = Du({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i,
    c: s
  }), [d, f] = Du({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n,
    c: s
  }), [v, y, h, p] = lp({
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
    h,
    p
  ];
}
function Fu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let i, a;
  switch (e) {
    case ue.Left:
    case ue.Right:
      i = 0.5 * (t + r), a = n;
      break;
    case ue.Top:
    case ue.Bottom:
      i = t, a = 0.5 * (n + o);
      break;
  }
  return [i, a];
}
function up(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = ue.Top
  } = e, [s, c] = Fu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i
  }), [u, d] = Fu({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n
  }), [f, v, y, h] = lp({
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
    h
  ];
}
const Bu = {
  [ue.Left]: { x: -1, y: 0 },
  [ue.Right]: { x: 1, y: 0 },
  [ue.Top]: { x: 0, y: -1 },
  [ue.Bottom]: { x: 0, y: 1 }
};
function rx({
  source: e,
  sourcePosition: t = ue.Bottom,
  target: n
}) {
  return t === ue.Left || t === ue.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Lu(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function ox({
  source: e,
  sourcePosition: t = ue.Bottom,
  target: n,
  targetPosition: r = ue.Top,
  center: o,
  offset: i
}) {
  const a = Bu[t], s = Bu[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, d = rx({
    source: c,
    sourcePosition: t,
    target: u
  }), f = d.x !== 0 ? "x" : "y", v = d[f];
  let y, h, p;
  const m = { x: 0, y: 0 }, b = { x: 0, y: 0 }, [E, g, _, C] = sp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * s[f] === -1) {
    h = o.x ?? E, p = o.y ?? g;
    const w = [
      { x: h, y: c.y },
      { x: h, y: u.y }
    ], k = [
      { x: c.x, y: p },
      { x: u.x, y: p }
    ];
    a[f] === v ? y = f === "x" ? w : k : y = f === "x" ? k : w;
  } else {
    const w = [{ x: c.x, y: u.y }], k = [{ x: u.x, y: c.y }];
    if (f === "x" ? y = a.x === v ? k : w : y = a.y === v ? w : k, t === r) {
      const q = Math.abs(e[f] - n[f]);
      if (q <= i) {
        const S = Math.min(i - 1, i - q);
        a[f] === v ? m[f] = (c[f] > e[f] ? -1 : 1) * S : b[f] = (u[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const q = f === "x" ? "y" : "x", S = a[f] === s[q], F = c[q] > u[q], P = c[q] < u[q];
      (a[f] === 1 && (!S && F || S && P) || a[f] !== 1 && (!S && P || S && F)) && (y = f === "x" ? w : k);
    }
    const L = { x: c.x + m.x, y: c.y + m.y }, D = { x: u.x + b.x, y: u.y + b.y }, M = Math.max(Math.abs(L.x - y[0].x), Math.abs(D.x - y[0].x)), A = Math.max(Math.abs(L.y - y[0].y), Math.abs(D.y - y[0].y));
    M >= A ? (h = (L.x + D.x) / 2, p = y[0].y) : (h = y[0].x, p = (L.y + D.y) / 2);
  }
  return [[
    e,
    { x: c.x + m.x, y: c.y + m.y },
    ...y,
    { x: u.x + b.x, y: u.y + b.y },
    n
  ], h, p, _, C];
}
function ix(e, t, n, r) {
  const o = Math.min(Lu(e, t) / 2, Lu(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * d}`;
  }
  const s = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * c}Q ${i},${a} ${i + o * s},${a}`;
}
function Ns(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = ue.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = ue.Top,
    borderRadius: s = 5,
    centerX: c,
    centerY: u,
    offset: d = 20
  } = e, [f, v, y, h, p] = ox({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: c, y: u },
    offset: d
  });
  return [f.reduce((b, E, g) => {
    let _;
    return g > 0 && g < f.length - 1 ? _ = ix(f[g - 1], E, f[g + 1], s) : _ = `${g === 0 ? "M" : "L"}${E.x} ${E.y}`, b += _, b;
  }, ""), v, y, h, p];
}
function ax(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [i, a, s, c] = sp({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, i, a, s, c];
}
const sx = De({
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
      const [n, r, o] = ax(e);
      return $e(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), lx = sx, ux = De({
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
      const [n, r, o] = Ns({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return $e(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), cp = ux, cx = De({
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
    return () => $e(cp, { ...e, ...t, borderRadius: 0 });
  }
}), dx = cx, fx = De({
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
      const [n, r, o] = pl({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return $e(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), px = fx, hx = De({
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
      const [n, r, o] = up({
        ...e,
        sourcePosition: e.sourcePosition ?? ue.Bottom,
        targetPosition: e.targetPosition ?? ue.Top
      });
      return $e(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), mx = hx, vx = {
  input: Xb,
  default: Gb,
  output: Wb
}, gx = {
  default: px,
  straight: lx,
  step: dx,
  smoothstep: cp,
  simplebezier: mx
};
function yx(e, t, n) {
  const r = J(() => (p) => t.value.get(p)), o = J(() => (p) => n.value.get(p)), i = J(() => {
    const p = {
      ...gx,
      ...e.edgeTypes
    }, m = Object.keys(p);
    for (const b of e.edges)
      b.type && !m.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), a = J(() => {
    const p = {
      ...vx,
      ...e.nodeTypes
    }, m = Object.keys(p);
    for (const b of e.nodes)
      b.type && !m.includes(b.type) && (p[b.type] = b.type);
    return p;
  }), s = J(() => e.onlyRenderVisibleElements ? Gf(
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
      for (const m of e.edges) {
        const b = t.value.get(m.source), E = t.value.get(m.target);
        hb({
          sourcePos: b.computedPosition || { x: 0, y: 0 },
          targetPos: E.computedPosition || { x: 0, y: 0 },
          sourceWidth: b.dimensions.width,
          sourceHeight: b.dimensions.height,
          targetWidth: E.dimensions.width,
          targetHeight: E.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && p.push(m);
      }
      return p;
    }
    return e.edges;
  }), u = J(() => [...s.value, ...c.value]), d = J(() => {
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
    ...d.value,
    ...f.value
  ]), y = J(() => {
    const p = [];
    for (const m of e.nodes)
      m.dimensions.width && m.dimensions.height && m.handleBounds !== void 0 && p.push(m);
    return p;
  }), h = J(
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
    areNodesInitialized: h
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
    const r = ap(), o = eo(r), i = {};
    for (const [v, y] of Object.entries(o.hooks)) {
      const h = `on${v.charAt(0).toUpperCase() + v.slice(1)}`;
      i[h] = y.on;
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
    }), u = yx(o, s, c), d = Vb(o, s, c);
    d.setState({ ...o, ...n });
    const f = {
      ...i,
      ...u,
      ...d,
      ...um(o),
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
  const t = Tn.getInstance(), n = qd(), r = typeof e == "object", o = r ? e : { id: e }, i = o.id, a = i ?? n?.vueFlowId;
  let s;
  if (n) {
    const c = pr(Mu, null);
    typeof c < "u" && c !== null && (!a || c.id === a) && (s = c);
  }
  if (s || a && (s = t.get(a)), !s || a && s.id !== a) {
    const c = i ?? t.getId(), u = t.create(c, o);
    s = u, (n ?? Vd(!0)).run(() => {
      Ne(
        u.applyDefault,
        (f, v, y) => {
          const h = (m) => {
            u.applyNodeChanges(m);
          }, p = (m) => {
            u.applyEdgeChanges(m);
          };
          f ? (u.onNodesChange(h), u.onEdgesChange(p)) : (u.hooks.value.nodesChange.off(h), u.hooks.value.edgesChange.off(p)), y(() => {
            u.hooks.value.nodesChange.off(h), u.hooks.value.edgesChange.off(p);
          });
        },
        { immediate: !0 }
      ), Ur(() => {
        if (s) {
          const f = t.get(s.id);
          f ? f.$destroy() : ro(`No store instance found for id ${s.id} in storage.`);
        }
      });
    });
  } else
    r && s.setState(o);
  if (n && (Fn(Mu, s), n.vueFlowId = s.id), r) {
    const c = hr();
    c?.type.name !== "VueFlow" && s.emits.error(new ot(tt.USEVUEFLOW_OPTIONS));
  }
  return s;
}
function bx(e) {
  const { emits: t, dimensions: n } = Ve();
  let r;
  Ze(() => {
    const o = () => {
      var i, a;
      if (!e.value || !(((a = (i = e.value).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return;
      const s = ki(e.value);
      (s.width === 0 || s.height === 0) && t.error(new ot(tt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: s.width || 500, height: s.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), gi(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const xx = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, wx = /* @__PURE__ */ De({
  ...xx,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => ($(), T("div", {
      class: "vue-flow__selection vue-flow__container",
      style: vt({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), _x = ["tabIndex"], kx = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, Sx = /* @__PURE__ */ De({
  ...kx,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: i, userSelectionActive: a } = Ve(), s = ip(), c = Y(null), u = np({
      el: c,
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
    Ze(() => {
      var h;
      i.value || (h = c.value) == null || h.focus({ preventScroll: !0 });
    });
    const d = J(() => Hf(r.value)), f = J(() => ({
      width: `${d.value.width}px`,
      height: `${d.value.height}px`,
      top: `${d.value.y}px`,
      left: `${d.value.x}px`
    }));
    function v(h) {
      t.selectionContextMenu({ event: h, nodes: r.value });
    }
    function y(h) {
      i.value || or[h.key] && (h.preventDefault(), s(
        {
          x: or[h.key].x,
          y: or[h.key].y
        },
        h.shiftKey
      ));
    }
    return (h, p) => !I(a) && d.value.width && d.value.height ? ($(), T("div", {
      key: 0,
      class: K(["vue-flow__nodesselection vue-flow__container", I(o)]),
      style: vt({ transform: `translate(${I(n).x}px,${I(n).y}px) scale(${I(n).zoom})` })
    }, [
      l("div", {
        ref_key: "el",
        ref: c,
        class: K([{ dragging: I(u) }, "vue-flow__nodesselection-rect"]),
        style: vt(f.value),
        tabIndex: I(i) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: y
      }, null, 46, _x)
    ], 6)) : te("", !0);
  }
});
function Ex(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const $x = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, zx = /* @__PURE__ */ De({
  ...$x,
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
      selectionMode: h,
      deleteKeyCode: p,
      multiSelectionKeyCode: m,
      multiSelectionActive: b,
      edgeLookup: E,
      nodeLookup: g,
      connectionLookup: _,
      defaultEdgeOptions: C,
      connectionStartHandle: z,
      panOnDrag: w
    } = Ve(), k = rn(null), L = rn(/* @__PURE__ */ new Set()), D = rn(/* @__PURE__ */ new Set()), M = rn(null), A = qe(() => c.value && (e.isSelecting || i.value)), q = qe(() => z.value !== null);
    let S = !1, F = !1;
    const P = Ir(p, { actInsideInputWithModifier: !1 }), N = Ir(m);
    Ne(P, (ne) => {
      ne && (v(f.value), y(d.value), u.value = !1);
    }), Ne(N, (ne) => {
      b.value = ne;
    });
    function x(ne, ie) {
      return (me) => {
        me.target === ie && ne?.(me);
      };
    }
    function U(ne) {
      if (S || q.value) {
        S = !1;
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
      if (M.value = ((ie = t.value) == null ? void 0 : ie.getBoundingClientRect()) ?? null, !c.value || !e.isSelecting || ne.button !== 0 || ne.target !== k.value || !M.value)
        return;
      (ze = (me = ne.target) == null ? void 0 : me.setPointerCapture) == null || ze.call(me, ne.pointerId);
      const { x: Se, y: se } = Ex(ne, M.value);
      F = !0, S = !1, a(), s.value = {
        width: 0,
        height: 0,
        startX: Se,
        startY: se,
        x: Se,
        y: se
      }, o.selectionStart(ne);
    }
    function ye(ne) {
      var ie;
      if (!M.value || !s.value)
        return;
      S = !0;
      const { x: me, y: ze } = jt(ne, M.value), { startX: Se = 0, startY: se = 0 } = s.value, we = {
        startX: Se,
        startY: se,
        x: me < Se ? me : Se,
        y: ze < se ? ze : se,
        width: Math.abs(me - Se),
        height: Math.abs(ze - se)
      }, ae = L.value, ve = D.value;
      L.value = new Set(
        Gf(n.value, we, r.value, h.value === cl.Partial, !0).map(
          (O) => O.id
        )
      ), D.value = /* @__PURE__ */ new Set();
      const R = ((ie = C.value) == null ? void 0 : ie.selectable) ?? !0;
      for (const O of L.value) {
        const B = _.value.get(O);
        if (B)
          for (const { edgeId: H } of B.values()) {
            const j = E.value.get(H);
            j && (j.selectable ?? R) && D.value.add(H);
          }
      }
      if (!Ru(ae, L.value)) {
        const O = gn(g.value, L.value, !0);
        o.nodesChange(O);
      }
      if (!Ru(ve, D.value)) {
        const O = gn(E.value, D.value);
        o.edgesChange(O);
      }
      s.value = we, i.value = !0, u.value = !1;
    }
    function _e(ne) {
      var ie;
      ne.button !== 0 || !F || ((ie = ne.target) == null || ie.releasePointerCapture(ne.pointerId), !i.value && s.value && ne.target === k.value && U(ne), i.value = !1, s.value = null, u.value = L.value.size > 0, o.selectionEnd(ne), e.selectionKeyPressed && (S = !1), F = !1);
    }
    return (ne, ie) => ($(), T("div", {
      ref_key: "container",
      ref: k,
      class: K(["vue-flow__pane vue-flow__container", { selection: ne.isSelecting }]),
      onClick: ie[0] || (ie[0] = (me) => A.value ? void 0 : x(U, k.value)(me)),
      onContextmenu: ie[1] || (ie[1] = (me) => x(Q, k.value)(me)),
      onWheelPassive: ie[2] || (ie[2] = (me) => x(ee, k.value)(me)),
      onPointerenter: ie[3] || (ie[3] = (me) => A.value ? void 0 : I(o).paneMouseEnter(me)),
      onPointerdown: ie[4] || (ie[4] = (me) => A.value ? fe(me) : I(o).paneMouseMove(me)),
      onPointermove: ie[5] || (ie[5] = (me) => A.value ? ye(me) : I(o).paneMouseMove(me)),
      onPointerup: ie[6] || (ie[6] = (me) => A.value ? _e(me) : void 0),
      onPointerleave: ie[7] || (ie[7] = (me) => I(o).paneMouseLeave(me))
    }, [
      Xe(ne.$slots, "default"),
      I(i) && I(s) ? ($(), Re(wx, {
        key: 0,
        "user-selection-rect": I(s)
      }, null, 8, ["user-selection-rect"])) : te("", !0),
      I(u) && I(f).length ? ($(), Re(Sx, { key: 1 })) : te("", !0)
    ], 34));
  }
}), Px = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, Cx = /* @__PURE__ */ De({
  ...Px,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = Ve(), o = J(() => n.value ? !r.value : !1), i = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (a, s) => ($(), T("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: vt({ transform: i.value, opacity: o.value ? 0 : void 0 })
    }, [
      Xe(a.$slots, "default")
    ], 4));
  }
}), Ax = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Tx = /* @__PURE__ */ De({
  ...Ax,
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
      zoomOnScroll: h,
      preventScrolling: p,
      noWheelClassName: m,
      noPanClassName: b,
      emits: E,
      connectionStartHandle: g,
      userSelectionActive: _,
      paneDragging: C,
      d3Zoom: z,
      d3Selection: w,
      d3ZoomHandler: k,
      viewport: L,
      viewportRef: D,
      paneClickDistance: M
    } = Ve();
    bx(D);
    const A = rn(!1), q = rn(!1);
    let S = null, F = !1, P = 0, N = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = Ir(s), U = Ir(a), Q = Ir(i), ee = qe(
      () => (!U.value || U.value && a.value === !0) && (x.value || f.value)
    ), fe = qe(() => x.value || c.value), ye = qe(() => a.value === !0 && ee.value !== !0), _e = qe(
      () => U.value && a.value !== !0 || _.value || ye.value
    ), ne = qe(() => g.value !== null);
    Ze(() => {
      if (!D.value) {
        ro("Viewport element is missing");
        return;
      }
      const se = D.value, we = se.getBoundingClientRect(), ae = Wy().clickDistance(M.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ve = Ot(se).call(ae), R = ve.on("wheel.zoom"), O = sr.translate(r.value.x ?? 0, r.value.y ?? 0).scale(qn(r.value.zoom ?? 1, t.value, n.value)), B = [
        [0, 0],
        [we.width, we.height]
      ], H = ae.constrain()(O, B, o.value);
      ae.transform(ve, H), ae.wheelDelta(wu), z.value = ae, w.value = ve, k.value = R, L.value = { x: H.x, y: H.y, zoom: H.k }, ae.on("start", (j) => {
        var re;
        if (!j.sourceEvent)
          return null;
        P = j.sourceEvent.button, A.value = !0;
        const oe = ze(j.transform);
        ((re = j.sourceEvent) == null ? void 0 : re.type) === "mousedown" && (C.value = !0), N = oe, E.viewportChangeStart(oe), E.moveStart({ event: j, flowTransform: oe });
      }), ae.on("end", (j) => {
        if (!j.sourceEvent)
          return null;
        if (A.value = !1, C.value = !1, ie(ee.value, P ?? 0) && !F && E.paneContextMenu(j.sourceEvent), F = !1, me(N, j.transform)) {
          const re = ze(j.transform);
          N = re, E.viewportChangeEnd(re), E.moveEnd({ event: j, flowTransform: re });
        }
      }), ae.filter((j) => {
        var re;
        const oe = Q.value || h.value, de = y.value && j.ctrlKey, pe = j.button, be = j.type === "wheel";
        if (pe === 1 && j.type === "mousedown" && (Se(j, "vue-flow__node") || Se(j, "vue-flow__edge")))
          return !0;
        if (!ee.value && !oe && !fe.value && !v.value && !y.value || _.value || ne.value && !be || !v.value && j.type === "dblclick" || Se(j, m.value) && be || Se(j, b.value) && (!be || fe.value && be && !Q.value) || !y.value && j.ctrlKey && be || !oe && !fe.value && !de && be)
          return !1;
        if (!y && j.type === "touchstart" && ((re = j.touches) == null ? void 0 : re.length) > 1)
          return j.preventDefault(), !1;
        if (!ee.value && (j.type === "mousedown" || j.type === "touchstart") || ye.value && Array.isArray(f.value) && f.value.includes(0) && pe === 0 || Array.isArray(f.value) && !f.value.includes(pe) && (j.type === "mousedown" || j.type === "touchstart"))
          return !1;
        const Ee = Array.isArray(f.value) && f.value.includes(pe) || a.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !pe || pe <= 1;
        return (!j.ctrlKey || x.value || be) && Ee;
      }), Ne(
        [_, ee],
        () => {
          _.value && !A.value ? ae.on("zoom", null) : _.value || ae.on("zoom", (j) => {
            L.value = { x: j.transform.x, y: j.transform.y, zoom: j.transform.k };
            const re = ze(j.transform);
            F = ie(ee.value, P ?? 0), E.viewportChange(re), E.move({ event: j, flowTransform: re });
          });
        },
        { immediate: !0 }
      ), Ne(
        [_, fe, u, Q, y, p, m],
        () => {
          fe.value && !Q.value && !_.value ? ve.on(
            "wheel.zoom",
            (j) => {
              if (Se(j, m.value))
                return !1;
              const re = Q.value || h.value, oe = y.value && j.ctrlKey;
              if (!(!p.value || fe.value || re || oe))
                return !1;
              j.preventDefault(), j.stopImmediatePropagation();
              const pe = ve.property("__zoom").k || 1, be = ii();
              if (!x.value && j.ctrlKey && y.value && be) {
                const Vi = qt(j), $n = wu(j), gr = pe * 2 ** $n;
                ae.scaleTo(ve, gr, Vi, j);
                return;
              }
              const Ee = j.deltaMode === 1 ? 20 : 1;
              let Fe = u.value === Nr.Vertical ? 0 : j.deltaX * Ee, Ft = u.value === Nr.Horizontal ? 0 : j.deltaY * Ee;
              !be && j.shiftKey && u.value !== Nr.Vertical && !Fe && Ft && (Fe = Ft, Ft = 0), ae.translateBy(
                ve,
                -(Fe / pe) * d.value,
                -(Ft / pe) * d.value
              );
              const gt = ze(ve.property("__zoom"));
              S && clearTimeout(S), q.value ? (E.move({ event: j, flowTransform: gt }), E.viewportChange(gt), S = setTimeout(() => {
                E.moveEnd({ event: j, flowTransform: gt }), E.viewportChangeEnd(gt), q.value = !1;
              }, 150)) : (q.value = !0, E.moveStart({ event: j, flowTransform: gt }), E.viewportChangeStart(gt));
            },
            { passive: !1 }
          ) : typeof R < "u" && ve.on(
            "wheel.zoom",
            function(j, re) {
              const oe = !p.value && j.type === "wheel" && !j.ctrlKey, de = Q.value || h.value, pe = y.value && j.ctrlKey;
              if (!de && !c.value && !pe && j.type === "wheel" || oe || Se(j, m.value))
                return null;
              j.preventDefault(), R.call(this, j, re);
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
    function Se(se, we) {
      return se.target.closest(`.${we}`);
    }
    return (se, we) => ($(), T("div", {
      ref_key: "viewportRef",
      ref: D,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      Z(zx, {
        "is-selecting": _e.value,
        "selection-key-pressed": I(U),
        class: K({
          connecting: ne.value,
          dragging: I(C),
          draggable: I(f) === !0 || Array.isArray(I(f)) && I(f).includes(0)
        })
      }, {
        default: rt(() => [
          Z(Cx, null, {
            default: rt(() => [
              Xe(se.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), Ox = ["id"], Nx = ["id"], Ix = ["id"], Rx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, Mx = /* @__PURE__ */ De({
  ...Rx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = Ve();
    return (o, i) => ($(), T(ge, null, [
      l("div", {
        id: `${I(Df)}-${I(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + V(I(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Ox),
      l("div", {
        id: `${I(Ff)}-${I(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Nx),
      I(n) ? te("", !0) : ($(), T("div", {
        key: 0,
        id: `${I(Qy)}-${I(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, V(I(r)), 9, Ix))
    ], 64));
  }
});
function Dx() {
  const e = Ve();
  Ne(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function Fx(e, t, n) {
  return n === ue.Left ? e - t : n === ue.Right ? e + t : e;
}
function Bx(e, t, n) {
  return n === ue.Top ? e - t : n === ue.Bottom ? e + t : e;
}
const hl = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = ue.Top,
  type: o
}) {
  return $e("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Fx(t, e, r),
    cy: Bx(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
hl.props = ["radius", "centerX", "centerY", "position", "type"];
hl.compatConfig = { MODE: 3 };
const Uu = hl, Lx = De({
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
      disableKeyboardA11y: h,
      elementsSelectable: p,
      edgesUpdatable: m,
      edgesFocusable: b,
      hooks: E
    } = Ve(), g = J(() => d(e.id)), { emit: _, on: C } = Ab(g.value, i), z = pr(Ei), w = hr(), k = Y(!1), L = Y(!1), D = Y(""), M = Y(null), A = Y("source"), q = Y(null), S = qe(
      () => typeof g.value.selectable > "u" ? p.value : g.value.selectable
    ), F = qe(() => typeof g.value.updatable > "u" ? m.value : g.value.updatable), P = qe(() => typeof g.value.focusable > "u" ? b.value : g.value.focusable);
    Fn(zb, e.id), Fn(Pb, q);
    const N = J(() => g.value.class instanceof Function ? g.value.class(g.value) : g.value.class), x = J(() => g.value.style instanceof Function ? g.value.style(g.value) : g.value.style), U = J(() => {
      const O = g.value.type || "default", B = z?.[`edge-${O}`];
      if (B)
        return B;
      let H = g.value.template ?? c.value[O];
      if (typeof H == "string" && w) {
        const j = Object.keys(w.appContext.components);
        j && j.includes(O) && (H = Hd(O, !1));
      }
      return H && typeof H != "string" ? H : (i.error(new ot(tt.EDGE_TYPE_MISSING, H)), !1);
    }), { handlePointerDown: Q } = rp({
      nodeId: D,
      handleId: M,
      type: A,
      isValidConnection: v,
      edgeUpdaterType: A,
      onEdgeUpdate: ye,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const O = f(g.value.source), B = f(g.value.target), H = "pathOptions" in g.value ? g.value.pathOptions : {};
      if (!O && !B)
        return i.error(new ot(tt.EDGE_SOURCE_TARGET_MISSING, g.value.id, g.value.source, g.value.target)), null;
      if (!O)
        return i.error(new ot(tt.EDGE_SOURCE_MISSING, g.value.id, g.value.source)), null;
      if (!B)
        return i.error(new ot(tt.EDGE_TARGET_MISSING, g.value.id, g.value.target)), null;
      if (!g.value || g.value.hidden || O.hidden || B.hidden)
        return null;
      let j;
      r.value === wn.Strict ? j = O.handleBounds.source : j = [...O.handleBounds.source || [], ...O.handleBounds.target || []];
      const re = Cu(j, g.value.sourceHandle);
      let oe;
      r.value === wn.Strict ? oe = B.handleBounds.target : oe = [...B.handleBounds.target || [], ...B.handleBounds.source || []];
      const de = Cu(oe, g.value.targetHandle), pe = re?.position || ue.Bottom, be = de?.position || ue.Top, { x: Ee, y: Fe } = lr(O, re, pe), { x: Ft, y: gt } = lr(B, de, be);
      return g.value.sourceX = Ee, g.value.sourceY = Fe, g.value.targetX = Ft, g.value.targetY = gt, $e(
        "g",
        {
          ref: q,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${U.value === !1 ? "default" : g.value.type || "default"}`,
            s.value,
            N.value,
            {
              updating: k.value,
              selected: g.value.selected,
              animated: g.value.animated,
              inactive: !S.value && !E.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: P.value ? 0 : void 0,
          "aria-label": g.value.ariaLabel === null ? void 0 : g.value.ariaLabel ?? `Edge from ${g.value.source} to ${g.value.target}`,
          "aria-describedby": P.value ? `${Ff}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: P.value ? "group" : "img",
          ...g.value.domAttributes,
          onClick: ie,
          onContextmenu: me,
          onDblclick: ze,
          onMouseenter: Se,
          onMousemove: se,
          onMouseleave: we,
          onKeyDown: P.value ? R : void 0
        },
        [
          L.value ? null : $e(U.value === !1 ? c.value.default : U.value, {
            id: e.id,
            sourceNode: O,
            targetNode: B,
            source: g.value.source,
            target: g.value.target,
            type: g.value.type,
            updatable: F.value,
            selected: g.value.selected,
            animated: g.value.animated,
            label: g.value.label,
            labelStyle: g.value.labelStyle,
            labelShowBg: g.value.labelShowBg,
            labelBgStyle: g.value.labelBgStyle,
            labelBgPadding: g.value.labelBgPadding,
            labelBgBorderRadius: g.value.labelBgBorderRadius,
            data: g.value.data,
            events: { ...g.value.events, ...C },
            style: x.value,
            markerStart: `url('#${Xr(g.value.markerStart, t)}')`,
            markerEnd: `url('#${Xr(g.value.markerEnd, t)}')`,
            sourcePosition: pe,
            targetPosition: be,
            sourceX: Ee,
            sourceY: Fe,
            targetX: Ft,
            targetY: gt,
            sourceHandleId: g.value.sourceHandle,
            targetHandleId: g.value.targetHandle,
            interactionWidth: g.value.interactionWidth,
            ...H
          }),
          [
            F.value === "source" || F.value === !0 ? [
              $e(
                "g",
                {
                  onMousedown: ae,
                  onMouseenter: ee,
                  onMouseout: fe
                },
                $e(Uu, {
                  position: pe,
                  centerX: Ee,
                  centerY: Fe,
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
                  onMousedown: ve,
                  onMouseenter: ee,
                  onMouseout: fe
                },
                $e(Uu, {
                  position: be,
                  centerX: Ft,
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
      k.value = !0;
    }
    function fe() {
      k.value = !1;
    }
    function ye(O, B) {
      _.update({ event: O, edge: g.value, connection: B });
    }
    function _e(O) {
      _.updateEnd({ event: O, edge: g.value }), L.value = !1;
    }
    function ne(O, B) {
      O.button === 0 && (L.value = !0, D.value = B ? g.value.target : g.value.source, M.value = (B ? g.value.targetHandle : g.value.sourceHandle) ?? null, A.value = B ? "target" : "source", _.updateStart({ event: O, edge: g.value }), Q(O));
    }
    function ie(O) {
      var B;
      const H = { event: O, edge: g.value };
      S.value && (a.value = !1, g.value.selected && y.value ? (u([g.value]), (B = q.value) == null || B.blur()) : n([g.value])), _.click(H);
    }
    function me(O) {
      _.contextMenu({ event: O, edge: g.value });
    }
    function ze(O) {
      _.doubleClick({ event: O, edge: g.value });
    }
    function Se(O) {
      _.mouseEnter({ event: O, edge: g.value });
    }
    function se(O) {
      _.mouseMove({ event: O, edge: g.value });
    }
    function we(O) {
      _.mouseLeave({ event: O, edge: g.value });
    }
    function ae(O) {
      ne(O, !0);
    }
    function ve(O) {
      ne(O, !1);
    }
    function R(O) {
      var B;
      !h.value && Bf.includes(O.key) && S.value && (O.key === "Escape" ? ((B = q.value) == null || B.blur(), u([d(e.id)])) : n([d(e.id)]));
    }
  }
}), Ux = Lx, qx = De({
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
    } = Ve(), v = (e = pr(Ei)) == null ? void 0 : e["connection-line"], y = J(() => {
      var E;
      return f((E = r.value) == null ? void 0 : E.nodeId);
    }), h = J(() => {
      var E;
      return f((E = o.value) == null ? void 0 : E.nodeId) ?? null;
    }), p = J(() => ({
      x: (i.value.x - d.value.x) / d.value.zoom,
      y: (i.value.y - d.value.y) / d.value.zoom
    })), m = J(
      () => c.value.markerStart ? `url(#${Xr(c.value.markerStart, t)})` : ""
    ), b = J(
      () => c.value.markerEnd ? `url(#${Xr(c.value.markerEnd, t)})` : ""
    );
    return () => {
      var E, g, _;
      if (!y.value || !r.value)
        return null;
      const C = r.value.id, z = r.value.type, w = y.value.handleBounds;
      let k = w?.[z] ?? [];
      if (n.value === wn.Loose) {
        const x = w?.[z === "source" ? "target" : "source"] ?? [];
        k = [...k, ...x];
      }
      if (!k)
        return null;
      const L = (C ? k.find((x) => x.id === C) : k[0]) ?? null, D = L?.position ?? ue.Top, { x: M, y: A } = lr(y.value, L, D);
      let q = null;
      h.value && (n.value === wn.Strict ? q = ((E = h.value.handleBounds[z === "source" ? "target" : "source"]) == null ? void 0 : E.find(
        (x) => {
          var U;
          return x.id === ((U = o.value) == null ? void 0 : U.id);
        }
      )) || null : q = ((g = [...h.value.handleBounds.source ?? [], ...h.value.handleBounds.target ?? []]) == null ? void 0 : g.find(
        (x) => {
          var U;
          return x.id === ((U = o.value) == null ? void 0 : U.id);
        }
      )) || null);
      const S = ((_ = o.value) == null ? void 0 : _.position) ?? (D ? Ts[D] : null);
      if (!D || !S)
        return null;
      const F = a.value ?? c.value.type ?? An.Bezier;
      let P = "";
      const N = {
        sourceX: M,
        sourceY: A,
        sourcePosition: D,
        targetX: p.value.x,
        targetY: p.value.y,
        targetPosition: S
      };
      return F === An.Bezier ? [P] = pl(N) : F === An.Step ? [P] = Ns({
        ...N,
        borderRadius: 0
      }) : F === An.SmoothStep ? [P] = Ns(N) : F === An.SimpleBezier ? [P] = up(N) : P = `M${M},${A} ${p.value.x},${p.value.y}`, $e(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        $e(
          "g",
          { class: "vue-flow__connection" },
          v ? $e(v, {
            sourceX: M,
            sourceY: A,
            sourcePosition: D,
            targetX: p.value.x,
            targetY: p.value.y,
            targetPosition: S,
            sourceNode: y.value,
            sourceHandle: L,
            targetNode: h.value,
            targetHandle: q,
            markerEnd: b.value,
            markerStart: m.value,
            connectionStatus: u.value
          }) : $e("path", {
            d: P,
            class: [c.value.class, u.value, "vue-flow__connection-path"],
            style: {
              ...s.value,
              ...c.value.style
            },
            "marker-end": b.value,
            "marker-start": m.value
          })
        )
      );
    };
  }
}), Vx = qx, jx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Hx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Gx = /* @__PURE__ */ De({
  ...Hx,
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
    return (t, n) => ($(), T("marker", {
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
      t.type === I(ni).ArrowClosed ? ($(), T("polyline", {
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
      t.type === I(ni).Arrow ? ($(), T("polyline", {
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
    ], 8, jx));
  }
}), Wx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Xx = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, Yx = /* @__PURE__ */ De({
  ...Xx,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = Ve(), i = J(() => {
      const a = /* @__PURE__ */ new Set(), s = [], c = (u) => {
        if (u) {
          const d = Xr(u, t);
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
    return (a, s) => ($(), T("svg", Wx, [
      l("defs", null, [
        ($(!0), T(ge, null, Oe(i.value, (c) => ($(), Re(Gx, {
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
}), Kx = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, Zx = /* @__PURE__ */ De({
  ...Kx,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = Ve();
    return (o, i) => ($(), T(ge, null, [
      Z(Yx),
      ($(!0), T(ge, null, Oe(I(n), (a) => ($(), T("svg", {
        key: a.id,
        class: "vue-flow__edges vue-flow__container",
        style: vt({ zIndex: I(mb)(a, I(t), I(r)) })
      }, [
        Z(I(Ux), {
          id: a.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      Z(I(Vx))
    ], 64));
  }
}), Jx = De({
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
      disableKeyboardA11y: h,
      ariaLiveMessage: p,
      snapToGrid: m,
      snapGrid: b,
      nodeDragThreshold: E,
      nodesDraggable: g,
      elementsSelectable: _,
      nodesConnectable: C,
      nodesFocusable: z,
      hooks: w
    } = Ve(), k = Y(null);
    Fn(tp, k), Fn(ep, e.id);
    const L = pr(Ei), D = hr(), M = ip(), { node: A, parentNode: q } = op(e.id), { emit: S, on: F } = Ib(A, a), P = qe(() => typeof A.draggable > "u" ? g.value : A.draggable), N = qe(() => typeof A.selectable > "u" ? _.value : A.selectable), x = qe(() => typeof A.connectable > "u" ? C.value : A.connectable), U = qe(() => typeof A.focusable > "u" ? z.value : A.focusable), Q = J(
      () => N.value || P.value || w.value.nodeClick.hasListeners() || w.value.nodeDoubleClick.hasListeners() || w.value.nodeMouseEnter.hasListeners() || w.value.nodeMouseMove.hasListeners() || w.value.nodeMouseLeave.hasListeners()
    ), ee = qe(() => !!A.dimensions.width && !!A.dimensions.height), fe = J(() => {
      const B = A.type || "default", H = L?.[`node-${B}`];
      if (H)
        return H;
      let j = A.template || f.value[B];
      if (typeof j == "string" && D) {
        const re = Object.keys(D.appContext.components);
        re && re.includes(B) && (j = Hd(B, !1));
      }
      return j && typeof j != "string" ? j : (a.error(new ot(tt.NODE_TYPE_MISSING, j)), !1);
    }), ye = np({
      id: e.id,
      el: k,
      disabled: () => !P.value,
      selectable: N,
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
        R(B);
      }
    }), _e = J(() => A.class instanceof Function ? A.class(A) : A.class), ne = J(() => {
      const B = (A.style instanceof Function ? A.style(A) : A.style) || {}, H = A.width instanceof Function ? A.width(A) : A.width, j = A.height instanceof Function ? A.height(A) : A.height;
      return !B.width && H && (B.width = typeof H == "string" ? H : `${H}px`), !B.height && j && (B.height = typeof j == "string" ? j : `${j}px`), B;
    }), ie = qe(() => Number(A.zIndex ?? ne.value.zIndex ?? 0));
    return d((B) => {
      (B.includes(e.id) || !B.length) && ze();
    }), Ze(() => {
      Ne(
        () => A.hidden,
        (B = !1, H, j) => {
          !B && k.value && (e.resizeObserver.observe(k.value), j(() => {
            k.value && e.resizeObserver.unobserve(k.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Ne([() => A.type, () => A.sourcePosition, () => A.targetPosition], () => {
      sn(() => {
        u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
      });
    }), Ne(
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
        ie,
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
      ([B, H, j, re, oe, de]) => {
        const pe = {
          x: B,
          y: H,
          z: de + (y.value && A.selected ? 1e3 : 0)
        };
        typeof j < "u" && typeof re < "u" ? A.computedPosition = ub({ x: j, y: re, z: oe }, pe) : A.computedPosition = pe;
      },
      { flush: "post", immediate: !0 }
    ), Ne([() => A.extent, v], ([B, H], [j, re]) => {
      (B !== j || H !== re) && me();
    }), A.extent === "parent" || typeof A.extent == "object" && "range" in A.extent && A.extent.range === "parent" ? ws(() => ee).toBe(!0).then(me) : me(), () => A.hidden ? null : $e(
      "div",
      {
        ref: k,
        "data-id": A.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${fe.value === !1 ? "default" : A.type || "default"}`,
          {
            [n.value]: P.value,
            dragging: ye?.value,
            draggable: P.value,
            selected: A.selected,
            selectable: N.value,
            parent: A.isParent
          },
          _e.value
        ],
        style: {
          visibility: ee.value ? "visible" : "hidden",
          zIndex: A.computedPosition.z ?? ie.value,
          transform: `translate(${A.computedPosition.x}px,${A.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...ne.value
        },
        tabIndex: U.value ? 0 : void 0,
        role: U.value ? "group" : void 0,
        "aria-describedby": h.value ? void 0 : `${Df}-${t}`,
        "aria-label": A.ariaLabel,
        "aria-roledescription": "node",
        ...A.domAttributes,
        onMouseenter: Se,
        onMousemove: se,
        onMouseleave: we,
        onContextmenu: ae,
        onClick: R,
        onDblclick: ve,
        onKeydown: O
      },
      [
        $e(fe.value === !1 ? f.value.default : fe.value, {
          id: A.id,
          type: A.type,
          data: A.data,
          events: { ...A.events, ...F },
          selected: A.selected,
          resizing: A.resizing,
          dragging: ye.value,
          connectable: x.value,
          position: A.computedPosition,
          dimensions: A.dimensions,
          isValidTargetPos: A.isValidTargetPos,
          isValidSourcePos: A.isValidSourcePos,
          parent: A.parentNode,
          parentNodeId: A.parentNode,
          zIndex: A.computedPosition.z ?? ie.value,
          targetPosition: A.targetPosition,
          sourcePosition: A.sourcePosition,
          label: A.label,
          dragHandle: A.dragHandle,
          onUpdateNodeInternals: ze
        })
      ]
    );
    function me() {
      const B = A.computedPosition, { computedPosition: H, position: j } = dl(
        A,
        m.value ? Si(B, b.value) : B,
        a.error,
        v.value,
        q.value
      );
      (A.computedPosition.x !== H.x || A.computedPosition.y !== H.y) && (A.computedPosition = { ...A.computedPosition, ...H }), (A.position.x !== j.x || A.position.y !== j.y) && (A.position = j);
    }
    function ze() {
      k.value && u([{ id: e.id, nodeElement: k.value, forceUpdate: !0 }]);
    }
    function Se(B) {
      ye?.value || S.mouseEnter({ event: B, node: A });
    }
    function se(B) {
      ye?.value || S.mouseMove({ event: B, node: A });
    }
    function we(B) {
      ye?.value || S.mouseLeave({ event: B, node: A });
    }
    function ae(B) {
      return S.contextMenu({ event: B, node: A });
    }
    function ve(B) {
      return S.doubleClick({ event: B, node: A });
    }
    function R(B) {
      N.value && (!r.value || !P.value || E.value > 0) && Os(
        A,
        i.value,
        c,
        s,
        o,
        !1,
        k.value
      ), S.click({ event: B, node: A });
    }
    function O(B) {
      if (!(As(B) || h.value))
        if (Bf.includes(B.key) && N.value) {
          const H = B.key === "Escape";
          Os(
            A,
            i.value,
            c,
            s,
            o,
            H,
            k.value
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
}), Qx = Jx, e1 = {
  height: "0",
  width: "0"
}, t1 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, n1 = /* @__PURE__ */ De({
  ...t1,
  setup(e) {
    const { viewportRef: t } = Ve(), n = qe(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => ($(), T("svg", null, [
      ($(), T("foreignObject", e1, [
        ($(), Re(jd, {
          to: n.value,
          disabled: !n.value
        }, [
          Xe(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function r1(e = { includeHiddenNodes: !1 }) {
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
const o1 = { class: "vue-flow__nodes vue-flow__container" }, i1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, a1 = /* @__PURE__ */ De({
  ...i1,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = Ve(), o = r1(), i = Y();
    return Ne(
      o,
      (a) => {
        a && sn(() => {
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
        sn(() => n(s));
      });
    }), gi(() => {
      var a;
      return (a = i.value) == null ? void 0 : a.disconnect();
    }), (a, s) => ($(), T("div", o1, [
      i.value ? ($(!0), T(ge, { key: 0 }, Oe(I(t), (c, u, d, f) => {
        const v = [c.id];
        if (f && f.key === c.id && ch(f, v))
          return f;
        const y = ($(), Re(I(Qx), {
          id: c.id,
          key: c.id,
          "resize-observer": i.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = v, y;
      }, s, 0), 128)) : te("", !0)
    ]));
  }
});
function s1() {
  const { emits: e } = Ve();
  Ze(() => {
    if (Qf()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new ot(tt.MISSING_STYLES));
    }
  });
}
const l1 = /* @__PURE__ */ l("div", { class: "vue-flow__edge-labels" }, null, -1), u1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, c1 = /* @__PURE__ */ De({
  ...u1,
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
    const r = e, o = sh(), i = Qi(r, "modelValue", n), a = Qi(r, "nodes", n), s = Qi(r, "edges", n), c = Ve(r), u = Fb({ modelValue: i, nodes: a, edges: s }, r, c);
    return Lb(n, c.hooks), Dx(), s1(), Fn(Ei, o), Qs(u), t(c), (d, f) => ($(), T("div", {
      ref: I(c).vueFlowRef,
      class: "vue-flow"
    }, [
      Z(Tx, null, {
        default: rt(() => [
          Z(Zx),
          l1,
          Z(a1),
          Xe(d.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Xe(d.$slots, "default"),
      Z(Mx)
    ], 512));
  }
}), d1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, f1 = /* @__PURE__ */ De({
  ...d1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = Ve(), r = J(() => `${t.position}`.split("-"));
    return (o, i) => ($(), T("div", {
      class: K(["vue-flow__panel", r.value]),
      style: vt({ pointerEvents: I(n) ? "none" : "all" })
    }, [
      Xe(o.$slots, "default")
    ], 6));
  }
});
var an = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(an || {});
const dp = function({ dimensions: e, size: t, color: n }) {
  return $e("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, fp = function({ radius: e, color: t }) {
  return $e("circle", { cx: e, cy: e, r: e, fill: t });
};
an.Lines + "", an.Dots + "";
const p1 = {
  [an.Dots]: "#81818a",
  [an.Lines]: "#eee"
}, h1 = ["id", "x", "y", "width", "height", "patternTransform"], m1 = {
  key: 2,
  height: "100",
  width: "100"
}, v1 = ["fill"], g1 = ["x", "y", "fill"], y1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, b1 = /* @__PURE__ */ De({
  ...y1,
  props: {
    id: {},
    variant: { default: () => an.Dots },
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
    }), o = qe(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), i = qe(() => e.color || e.patternColor || p1[e.variant || an.Dots]);
    return (a, s) => ($(), T("svg", {
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
            a.variant === I(an).Lines ? ($(), Re(I(dp), {
              key: 0,
              size: a.lineWidth,
              color: i.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : a.variant === I(an).Dots ? ($(), Re(I(fp), {
              key: 1,
              color: i.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : te("", !0),
            a.bgColor ? ($(), T("svg", m1, [
              l("rect", {
                width: "100%",
                height: "100%",
                fill: a.bgColor
              }, null, 8, v1)
            ])) : te("", !0)
          ])
        ], 8, h1)
      ]),
      l("rect", {
        x: a.x,
        y: a.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, g1),
      Xe(a.$slots, "default", { id: o.value })
    ], 4));
  }
}), x1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, w1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, _1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function k1(e, t, n, r, o, i) {
  return $(), T("button", _1, [
    Xe(e.$slots, "default")
  ]);
}
const So = /* @__PURE__ */ w1(x1, [["render", k1]]), S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, E1 = /* @__PURE__ */ l("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), $1 = [
  E1
];
function z1(e, t) {
  return $(), T("svg", S1, $1);
}
const P1 = { render: z1 }, C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, A1 = /* @__PURE__ */ l("path", { d: "M0 0h32v4.2H0z" }, null, -1), T1 = [
  A1
];
function O1(e, t) {
  return $(), T("svg", C1, T1);
}
const N1 = { render: O1 }, I1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, R1 = /* @__PURE__ */ l("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), M1 = [
  R1
];
function D1(e, t) {
  return $(), T("svg", I1, M1);
}
const F1 = { render: D1 }, B1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, L1 = /* @__PURE__ */ l("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), U1 = [
  L1
];
function q1(e, t) {
  return $(), T("svg", B1, U1);
}
const V1 = { render: q1 }, j1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, H1 = /* @__PURE__ */ l("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), G1 = [
  H1
];
function W1(e, t) {
  return $(), T("svg", j1, G1);
}
const X1 = { render: W1 }, Y1 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, K1 = /* @__PURE__ */ De({
  ...Y1,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Mf.BottomLeft }
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
    } = Ve(), v = qe(() => n.value || r.value || o.value), y = qe(() => u.value.zoom <= d.value), h = qe(() => u.value.zoom >= f.value);
    function p() {
      a(), t("zoomIn");
    }
    function m() {
      s(), t("zoomOut");
    }
    function b() {
      c(e.fitViewParams), t("fitView");
    }
    function E() {
      i(!v.value), t("interactionChange", !v.value);
    }
    return (g, _) => ($(), Re(I(f1), {
      class: "vue-flow__controls",
      position: g.position
    }, {
      default: rt(() => [
        Xe(g.$slots, "top"),
        g.showZoom ? ($(), T(ge, { key: 0 }, [
          Xe(g.$slots, "control-zoom-in", {}, () => [
            Z(So, {
              class: "vue-flow__controls-zoomin",
              disabled: h.value,
              onClick: p
            }, {
              default: rt(() => [
                Xe(g.$slots, "icon-zoom-in", {}, () => [
                  ($(), Re(Tt(I(P1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Xe(g.$slots, "control-zoom-out", {}, () => [
            Z(So, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: m
            }, {
              default: rt(() => [
                Xe(g.$slots, "icon-zoom-out", {}, () => [
                  ($(), Re(Tt(I(N1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : te("", !0),
        g.showFitView ? Xe(g.$slots, "control-fit-view", { key: 1 }, () => [
          Z(So, {
            class: "vue-flow__controls-fitview",
            onClick: b
          }, {
            default: rt(() => [
              Xe(g.$slots, "icon-fit-view", {}, () => [
                ($(), Re(Tt(I(F1))))
              ])
            ]),
            _: 3
          })
        ]) : te("", !0),
        g.showInteractive ? Xe(g.$slots, "control-interactive", { key: 2 }, () => [
          g.showInteractive ? ($(), Re(So, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: E
          }, {
            default: rt(() => [
              v.value ? Xe(g.$slots, "icon-unlock", { key: 0 }, () => [
                ($(), Re(Tt(I(X1))))
              ]) : te("", !0),
              v.value ? te("", !0) : Xe(g.$slots, "icon-lock", { key: 1 }, () => [
                ($(), Re(Tt(I(V1))))
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
}), Z1 = {
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
    const n = e, r = t, o = J(() => pl({
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
    return (u, d) => ($(), T(ge, null, [
      Z(I(oo), {
        id: e.id,
        path: o.value[0],
        style: vt(c.value),
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "style", "marker-end"]),
      Z(I(n1), null, {
        default: rt(() => [
          l("div", {
            class: "pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95",
            style: vt(i.value)
          }, [
            s.value.label ? ($(), T("span", {
              key: 0,
              class: K(["rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider", s.value.badgeClass])
            }, V(s.value.label), 3)) : te("", !0),
            l("button", {
              type: "button",
              class: "flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500",
              title: "Excluir conexão",
              onClick: d[0] || (d[0] = tn((f) => r("remove", e.id), ["stop"]))
            }, [
              Z(I(Ct), { class: "h-2.5 w-2.5" })
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
function Do(e) {
  return Mn.find((t) => t.eventClass === e)?.label || e || "—";
}
const pp = [
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
  { token: "{{checkout_link}}", label: "Link do checkout" },
  { token: "{{pix.copy_paste}}", label: "PIX copia e cola" },
  { token: "{{pix.qrcode}}", label: "QR Code do PIX" },
  { token: "{{boleto.barcode}}", label: "Linha digitável do boleto" },
  { token: "{{boleto.pdf_url}}", label: "Link do PDF do boleto" },
  { token: "{{access.link}}", label: "Link de acesso" },
  { token: "{{access.email}}", label: "Login de acesso" },
  { token: "{{access.password}}", label: "Senha de acesso" },
  { token: "{{last_reply}}", label: "Última resposta do cliente" }
], J1 = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], Q1 = [
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
], ew = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], tw = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], hp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], mp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], vp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], nw = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Cn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function gp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Cn[t] || 1)));
}
function rw(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Cn.days === 0 ? { value: t / Cn.days, unit: "days" } : t > 0 && t % Cn.hours === 0 ? { value: t / Cn.hours, unit: "hours" } : t > 0 && t % Cn.minutes === 0 ? { value: t / Cn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const ow = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function ai(e) {
  return ow[e] || "minutos";
}
function yn(e) {
  return J1.find((t) => t.type === e)?.label || e;
}
function yp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "" } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400 } : {};
}
function bp(e) {
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
function xp(e) {
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
const wp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, iw = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, aw = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, sw = { class: "space-y-4" }, lw = ["value"], uw = ["value"], cw = { key: 0 }, dw = { key: 1 }, fw = ["value"], pw = { class: "mt-2 flex flex-wrap gap-1.5" }, hw = ["title", "onClick"], mw = { key: 0 }, vw = ["accept", "disabled"], gw = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, yw = { key: 2 }, bw = ["disabled"], xw = { class: "space-y-2" }, ww = ["onUpdate:modelValue"], _w = ["value"], kw = ["onUpdate:modelValue"], Sw = ["onUpdate:modelValue"], Ew = ["value"], $w = ["onUpdate:modelValue"], zw = ["onUpdate:modelValue"], Pw = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], Aw = ["onUpdate:modelValue"], Tw = ["onClick"], Ow = { class: "grid grid-cols-2 gap-2" }, Nw = { class: "space-y-3" }, Iw = ["onUpdate:modelValue"], Rw = ["onUpdate:modelValue"], Mw = ["onUpdate:modelValue"], Dw = ["onClick"], Fw = ["onClick"], Bw = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Lw = ["onClick"], Uw = { class: "grid grid-cols-2 gap-2" }, qw = { class: "space-y-2" }, Vw = ["onUpdate:modelValue", "placeholder"], jw = ["onClick"], Hw = ["max"], Gw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Pe = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Ue = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", _p = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => pp }
  },
  setup(e) {
    const t = e, n = Y(!1), r = Y(""), o = Y([]), i = Y("list"), a = (z) => ["image", "video", "audio", "document"].includes(z), s = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function c(z, w) {
      t.data[z] = `${t.data[z] || ""}${w}`;
    }
    async function u(z, w = "media_url", k = "mime_type") {
      const L = z.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const D = await Te.uploadMedia(L);
          t.data[w] = D.url, k && (t.data[k] = D.mime_type);
        } catch (D) {
          r.value = D.message;
        } finally {
          n.value = !1, z.target.value = "";
        }
      }
    }
    const d = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...d.value, { type: "reply", displayText: "" }];
    }, v = (z) => {
      t.data.buttons = d.value.filter((w, k) => k !== z);
    }, y = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), h = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, p = (z) => {
      t.data.sections = y.value.filter((w, k) => k !== z);
    }, m = (z) => {
      z.rows = [...z.rows || [], { title: "", description: "" }];
    }, b = (z, w) => {
      z.rows = (z.rows || []).filter((k, L) => L !== w);
    }, E = J(() => Array.isArray(t.data.options) ? t.data.options : []), g = () => {
      t.data.options = [...E.value, ""];
    }, _ = (z) => {
      t.data.options = E.value.filter((w, k) => k !== z);
    };
    async function C() {
      try {
        o.value = (await Te.groups()).groups || [], i.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], i.value = "manual";
      }
    }
    return Ze(() => {
      t.showRecipient && C();
    }), (z, w) => ($(), T("div", sw, [
      l("div", null, [
        l("label", {
          class: K(Ue),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        le(l("select", {
          id: "zr-mode",
          "onUpdate:modelValue": w[0] || (w[0] = (k) => e.data.mode = k),
          class: K(Pe)
        }, [
          ($(!0), T(ge, null, Oe(I(Q1), (k) => ($(), T("option", {
            key: k.value,
            value: k.value
          }, V(k.label), 9, lw))), 128))
        ], 512), [
          [lt, e.data.mode]
        ])
      ]),
      e.showRecipient ? ($(), T(ge, { key: 0 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-recipient"
          }, "Destinatário"),
          le(l("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": w[1] || (w[1] = (k) => e.data.recipient_type = k),
            class: K(Pe)
          }, [
            ($(!0), T(ge, null, Oe(I(nw), (k) => ($(), T("option", {
              key: k.value,
              value: k.value
            }, V(k.label), 9, uw))), 128))
          ], 512), [
            [lt, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? ($(), T("div", cw, [
          l("label", {
            class: K(Ue),
            for: "zr-custom-phone"
          }, "Número"),
          le(l("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": w[2] || (w[2] = (k) => e.data.custom_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: K(Pe)
          }, null, 512), [
            [
              xe,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? ($(), T("div", dw, [
          l("label", {
            class: K(Ue),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          i.value === "list" ? le(($(), T("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": w[3] || (w[3] = (k) => e.data.group_id = k),
            class: K(Pe)
          }, [
            w[30] || (w[30] = l("option", { value: "" }, "Selecione o grupo…", -1)),
            ($(!0), T(ge, null, Oe(o.value, (k) => ($(), T("option", {
              key: k.id,
              value: k.id
            }, V(k.name), 9, fw))), 128))
          ], 512)), [
            [lt, e.data.group_id]
          ]) : le(($(), T("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": w[4] || (w[4] = (k) => e.data.group_id = k),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: K(Pe)
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
            onClick: w[5] || (w[5] = (k) => i.value = i.value === "list" ? "manual" : "list")
          }, V(i.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : te("", !0)
      ], 64)) : te("", !0),
      e.data.mode === "text" || a(e.data.mode) ? ($(), T(ge, { key: 1 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-text"
          }, V(a(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          le(l("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": w[6] || (w[6] = (k) => e.data.text = k),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: K([Pe, "font-mono leading-relaxed"])
          }, null, 2), [
            [xe, e.data.text]
          ]),
          l("div", pw, [
            ($(!0), T(ge, null, Oe(e.variables, (k) => ($(), T("button", {
              key: k.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: k.label,
              onClick: (L) => c("text", k.token)
            }, V(k.token), 9, hw))), 128))
          ])
        ]),
        a(e.data.mode) ? ($(), T("div", mw, [
          l("label", {
            class: K(Ue),
            for: "zr-media-url"
          }, "Arquivo"),
          le(l("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": w[7] || (w[7] = (k) => e.data.media_url = k),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: K(Pe)
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
          }, null, 40, vw),
          n.value ? ($(), T("p", gw, "Enviando arquivo…")) : te("", !0)
        ])) : te("", !0)
      ], 64)) : e.data.mode === "sticker" ? ($(), T("div", yw, [
        l("label", {
          class: K(Ue),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        le(l("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": w[8] || (w[8] = (k) => e.data.media_url = k),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: K(Pe)
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
        }, null, 40, bw)
      ])) : e.data.mode === "buttons" ? ($(), T(ge, { key: 3 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-title"
          }, "Título"),
          le(l("input", {
            id: "zr-title",
            "onUpdate:modelValue": w[9] || (w[9] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-text-btn"
          }, "Descrição"),
          le(l("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": w[10] || (w[10] = (k) => e.data.text = k),
            rows: "3",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-footer"
          }, "Rodapé"),
          le(l("input", {
            id: "zr-footer",
            "onUpdate:modelValue": w[11] || (w[11] = (k) => e.data.footer = k),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.footer]
          ])
        ]),
        l("div", xw, [
          l("label", {
            class: K(Ue)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          ($(!0), T(ge, null, Oe(d.value, (k, L) => ($(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            le(l("select", {
              "onUpdate:modelValue": (D) => k.type = D,
              class: K(Pe)
            }, [
              ($(!0), T(ge, null, Oe(I(ew), (D) => ($(), T("option", {
                key: D.value,
                value: D.value
              }, V(D.label), 9, _w))), 128))
            ], 8, ww), [
              [lt, k.type]
            ]),
            k.type === "pix" ? ($(), T(ge, { key: 0 }, [
              le(l("input", {
                "onUpdate:modelValue": (D) => k.name = D,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: K(Pe)
              }, null, 8, kw), [
                [xe, k.name]
              ]),
              le(l("select", {
                "onUpdate:modelValue": (D) => k.keyType = D,
                class: K(Pe)
              }, [
                w[31] || (w[31] = l("option", { value: "" }, "Tipo de chave PIX", -1)),
                ($(!0), T(ge, null, Oe(I(tw), (D) => ($(), T("option", {
                  key: D.value,
                  value: D.value
                }, V(D.label), 9, Ew))), 128))
              ], 8, Sw), [
                [lt, k.keyType]
              ]),
              le(l("input", {
                "onUpdate:modelValue": (D) => k.key = D,
                type: "text",
                placeholder: "Chave PIX",
                class: K(Pe)
              }, null, 8, $w), [
                [
                  xe,
                  k.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              w[32] || (w[32] = l("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : ($(), T(ge, { key: 1 }, [
              le(l("input", {
                "onUpdate:modelValue": (D) => k.displayText = D,
                type: "text",
                placeholder: "Texto do botão",
                class: K(Pe)
              }, null, 8, zw), [
                [xe, k.displayText]
              ]),
              k.type === "url" ? le(($(), T("input", {
                key: 0,
                "onUpdate:modelValue": (D) => k.url = D,
                type: "url",
                placeholder: "https://…",
                class: K(Pe)
              }, null, 8, Pw)), [
                [
                  xe,
                  k.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              k.type === "call" ? le(($(), T("input", {
                key: 1,
                "onUpdate:modelValue": (D) => k.phoneNumber = D,
                type: "text",
                placeholder: "+5511999998888",
                class: K(Pe)
              }, null, 8, Cw)), [
                [
                  xe,
                  k.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0),
              k.type === "copy" ? le(($(), T("input", {
                key: 2,
                "onUpdate:modelValue": (D) => k.copyCode = D,
                type: "text",
                placeholder: "Código a copiar",
                class: K(Pe)
              }, null, 8, Aw)), [
                [
                  xe,
                  k.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : te("", !0)
            ], 64)),
            l("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => v(L)
            }, "Remover botão", 8, Tw)
          ]))), 128)),
          l("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? ($(), T(ge, { key: 4 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-list-title"
          }, "Título"),
          le(l("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": w[12] || (w[12] = (k) => e.data.title = k),
            type: "text",
            placeholder: "Nossos planos",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-list-text"
          }, "Descrição"),
          le(l("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": w[13] || (w[13] = (k) => e.data.text = k),
            rows: "3",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ]),
        l("div", Ow, [
          l("div", null, [
            l("label", {
              class: K(Ue),
              for: "zr-list-footer"
            }, "Rodapé"),
            le(l("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": w[14] || (w[14] = (k) => e.data.footer = k),
              type: "text",
              class: K(Pe)
            }, null, 512), [
              [xe, e.data.footer]
            ])
          ]),
          l("div", null, [
            l("label", {
              class: K(Ue),
              for: "zr-list-button"
            }, "Texto do botão"),
            le(l("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": w[15] || (w[15] = (k) => e.data.button_text = k),
              type: "text",
              placeholder: "Ver Menu",
              class: K(Pe)
            }, null, 512), [
              [xe, e.data.button_text]
            ])
          ])
        ]),
        l("div", Nw, [
          l("label", {
            class: K(Ue)
          }, "Seções"),
          ($(!0), T(ge, null, Oe(y.value, (k, L) => ($(), T("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            le(l("input", {
              "onUpdate:modelValue": (D) => k.title = D,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: K(Pe)
            }, null, 8, Iw), [
              [xe, k.title]
            ]),
            ($(!0), T(ge, null, Oe(k.rows, (D, M) => ($(), T("div", {
              key: M,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              le(l("input", {
                "onUpdate:modelValue": (A) => D.title = A,
                type: "text",
                placeholder: "Título da opção",
                class: K(Pe)
              }, null, 8, Rw), [
                [xe, D.title]
              ]),
              le(l("input", {
                "onUpdate:modelValue": (A) => D.description = A,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: K(Pe)
              }, null, 8, Mw), [
                [xe, D.description]
              ]),
              l("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (A) => b(k, M)
              }, "Remover opção", 8, Dw)
            ]))), 128)),
            l("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (D) => m(k)
            }, "+ Adicionar opção", 8, Fw),
            l("div", Bw, [
              l("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (D) => p(L)
              }, "Remover seção", 8, Lw)
            ])
          ]))), 128)),
          l("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: h
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? ($(), T(ge, { key: 5 }, [
        l("div", Uw, [
          l("div", null, [
            l("label", {
              class: K(Ue),
              for: "zr-lat"
            }, "Latitude"),
            le(l("input", {
              id: "zr-lat",
              "onUpdate:modelValue": w[16] || (w[16] = (k) => e.data.latitude = k),
              type: "text",
              placeholder: "-23.5505",
              class: K(Pe)
            }, null, 512), [
              [xe, e.data.latitude]
            ])
          ]),
          l("div", null, [
            l("label", {
              class: K(Ue),
              for: "zr-lng"
            }, "Longitude"),
            le(l("input", {
              id: "zr-lng",
              "onUpdate:modelValue": w[17] || (w[17] = (k) => e.data.longitude = k),
              type: "text",
              placeholder: "-46.6333",
              class: K(Pe)
            }, null, 512), [
              [xe, e.data.longitude]
            ])
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-loc-name"
          }, "Nome do local"),
          le(l("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": w[18] || (w[18] = (k) => e.data.location_name = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.location_name]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-loc-address"
          }, "Endereço"),
          le(l("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": w[19] || (w[19] = (k) => e.data.address = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? ($(), T(ge, { key: 6 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-contact-name"
          }, "Nome completo"),
          le(l("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": w[20] || (w[20] = (k) => e.data.contact_name = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.contact_name]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-contact-phone"
          }, "Telefone"),
          le(l("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": w[21] || (w[21] = (k) => e.data.contact_phone = k),
            type: "text",
            placeholder: "5511999998888",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.contact_phone]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          le(l("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": w[22] || (w[22] = (k) => e.data.organization = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? ($(), T(ge, { key: 7 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-poll-question"
          }, "Pergunta"),
          le(l("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": w[23] || (w[23] = (k) => e.data.question = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.question]
          ])
        ]),
        l("div", qw, [
          l("label", {
            class: K(Ue)
          }, "Opções (mínimo 2)"),
          ($(!0), T(ge, null, Oe(E.value, (k, L) => ($(), T("div", {
            key: L,
            class: "flex gap-2"
          }, [
            le(l("input", {
              "onUpdate:modelValue": (D) => E.value[L] = D,
              type: "text",
              class: K(Pe),
              placeholder: `Opção ${L + 1}`
            }, null, 8, Vw), [
              [xe, E.value[L]]
            ]),
            E.value.length > 2 ? ($(), T("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (D) => _(L)
            }, "✕", 8, jw)) : te("", !0)
          ]))), 128)),
          l("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: g
          }, "+ Adicionar opção")
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          le(l("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": w[24] || (w[24] = (k) => e.data.max_answers = k),
            type: "number",
            min: "1",
            max: E.value.length,
            class: K(Pe)
          }, null, 8, Hw), [
            [
              xe,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? ($(), T(ge, { key: 8 }, [
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-link-url"
          }, "URL"),
          le(l("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": w[25] || (w[25] = (k) => e.data.url = k),
            type: "url",
            placeholder: "https://…",
            class: K(Pe)
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
            class: K(Ue),
            for: "zr-link-title"
          }, "Título da prévia"),
          le(l("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": w[26] || (w[26] = (k) => e.data.title = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.title]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          le(l("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": w[27] || (w[27] = (k) => e.data.description = k),
            type: "text",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.description]
          ])
        ]),
        l("div", null, [
          l("label", {
            class: K(Ue),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          le(l("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": w[28] || (w[28] = (k) => e.data.image_url = k),
            type: "url",
            class: K(Pe)
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
            class: K(Ue),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          le(l("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": w[29] || (w[29] = (k) => e.data.text = k),
            rows: "3",
            class: K(Pe)
          }, null, 512), [
            [xe, e.data.text]
          ])
        ])
      ], 64)) : te("", !0),
      r.value ? ($(), T("p", Gw, V(r.value), 1)) : te("", !0)
    ]));
  }
}, kp = {
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
}, Ww = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Xw(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Is(e, t = kp) {
  return e ? e.replace(Ww, (n, r) => {
    const o = Xw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const Yw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, Kw = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, Zw = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, Jw = { class: "text-xs" }, Qw = { class: "font-bold text-white" }, e_ = { class: "my-4 flex justify-end" }, t_ = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, n_ = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, r_ = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, ml = {
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
      return i?.trim() ? Is(i) : "Sua mensagem aparece aqui…";
    }), o = J(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (i, a) => ($(), T("div", Yw, [
      l("div", Kw, [
        l("div", Zw, V(n.value), 1),
        l("div", Jw, [
          l("div", Qw, V(e.recipientName || "Cliente"), 1),
          a[0] || (a[0] = l("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      l("div", e_, [
        l("div", t_, [
          o.value ? ($(), T("span", n_, V(o.value), 1)) : te("", !0),
          Be(" " + V(r.value) + " ", 1),
          l("div", r_, [
            a[1] || (a[1] = l("span", null, "12:00", -1)),
            Z(I(ys), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      a[2] || (a[2] = l("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, o_ = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, i_ = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, a_ = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, s_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, l_ = {
  key: 0,
  class: "space-y-4 p-4"
}, u_ = ["value"], c_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, d_ = {
  key: 0,
  class: "p-4"
}, f_ = {
  key: 1,
  class: "p-4"
}, p_ = {
  key: 2,
  class: "space-y-1 p-4"
}, h_ = { class: "flex gap-2" }, m_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, v_ = {
  key: 3,
  class: "space-y-4 p-4"
}, g_ = ["value"], y_ = { key: 0 }, b_ = ["value"], x_ = { key: 1 }, w_ = ["value"], __ = { key: 2 }, k_ = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, S_ = {
  key: 4,
  class: "space-y-1 p-4"
}, E_ = { class: "flex gap-2" }, $_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, z_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, P_ = {
  key: 1,
  class: "space-y-4 p-4"
}, C_ = { class: "flex items-start justify-between gap-2" }, A_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, T_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, Qt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Pn = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", O_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y("config");
    let i = null, a = null;
    Ne(
      () => [n.node?.id, n.node?.data?.mode],
      ([c, u]) => {
        c === void 0 || u === void 0 || (c === i && u !== a && Object.assign(n.node.data, bp(u)), i = c, a = u);
      },
      { immediate: !0 }
    ), Ne(
      () => n.node,
      (c) => {
        if (!["delay", "wait_reply"].includes(c?.type) || c.data.delay_value) return;
        const { value: u, unit: d } = rw(c.data.seconds || 0);
        c.data.delay_value = u, c.data.delay_unit = d;
      },
      { immediate: !0 }
    ), Ne(() => n.node?.id, () => {
      o.value = "config";
    });
    function s() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = gp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (c, u) => ($(), T("aside", o_, [
      e.node ? ($(), T(ge, { key: 0 }, [
        l("div", i_, [
          l("div", null, [
            l("h3", a_, V(I(yn)(e.node.type)), 1),
            l("p", s_, V(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? ($(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[0] || (u[0] = (d) => r("remove-node", e.node.id))
          }, [
            Z(I(Xo), { class: "h-3 w-3" }),
            u[12] || (u[12] = Be(" Excluir ", -1))
          ])) : te("", !0)
        ]),
        e.node.type === "trigger" ? ($(), T("div", l_, [
          l("div", null, [
            l("label", {
              class: K(Pn)
            }, "Evento"),
            l("input", {
              class: K([Qt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, u_),
            u[13] || (u[13] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? ($(), T(ge, { key: 1 }, [
          l("div", c_, [
            l("button", {
              type: "button",
              class: K(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[1] || (u[1] = (d) => o.value = "config")
            }, " Configurar ", 2),
            l("button", {
              type: "button",
              class: K(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: u[2] || (u[2] = (d) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? ($(), T("div", d_, [
            Z(ml, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": I(kp).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : ($(), T("div", f_, [
            Z(_p, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? ($(), T("div", p_, [
          l("label", {
            class: K(Pn),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          l("div", h_, [
            le(l("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": u[3] || (u[3] = (d) => e.node.data.delay_value = d),
              type: "number",
              min: "1",
              class: K(Qt),
              onChange: s
            }, null, 544), [
              [
                xe,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            le(l("select", {
              "onUpdate:modelValue": u[4] || (u[4] = (d) => e.node.data.delay_unit = d),
              class: K(Qt),
              onChange: s
            }, [...u[14] || (u[14] = [
              l("option", { value: "seconds" }, "Segundos", -1),
              l("option", { value: "minutes" }, "Minutos", -1),
              l("option", { value: "hours" }, "Horas", -1),
              l("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [lt, e.node.data.delay_unit]
            ])
          ]),
          l("p", m_, " Aguarda " + V(e.node.data.delay_value || 0) + " " + V(I(ai)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? ($(), T("div", v_, [
          l("div", null, [
            l("label", {
              class: K(Pn),
              for: "zr-kind"
            }, "Regra de validação"),
            le(l("select", {
              id: "zr-kind",
              "onUpdate:modelValue": u[5] || (u[5] = (d) => e.node.data.kind = d),
              class: K(Qt)
            }, [
              ($(!0), T(ge, null, Oe(I(hp), (d) => ($(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, g_))), 128))
            ], 512), [
              [lt, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? ($(), T("div", y_, [
            l("label", {
              class: K(Pn),
              for: "zr-order-status"
            }, "Status esperado"),
            le(l("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": u[6] || (u[6] = (d) => e.node.data.value = d),
              class: K(Qt)
            }, [
              ($(!0), T(ge, null, Oe(I(mp), (d) => ($(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, b_))), 128))
            ], 512), [
              [lt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? ($(), T("div", x_, [
            l("label", {
              class: K(Pn),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            le(l("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": u[7] || (u[7] = (d) => e.node.data.value = d),
              class: K(Qt)
            }, [
              ($(!0), T(ge, null, Oe(I(vp), (d) => ($(), T("option", {
                key: d.value,
                value: d.value
              }, V(d.label), 9, w_))), 128))
            ], 512), [
              [lt, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? ($(), T("div", __, [
            l("label", {
              class: K(Pn),
              for: "zr-value"
            }, "Classe do evento"),
            le(l("input", {
              id: "zr-value",
              "onUpdate:modelValue": u[8] || (u[8] = (d) => e.node.data.value = d),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: K(Qt)
            }, null, 512), [
              [
                xe,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : te("", !0),
          e.node.data.kind === "order_is_paid" ? ($(), T("p", k_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : te("", !0),
          u[15] || (u[15] = l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Be(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            l("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            Be(" e outra do ponto "),
            l("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            Be(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? ($(), T("div", S_, [
          l("label", {
            class: K(Pn),
            for: "zr-wait-value"
          }, "Tempo máximo de espera"),
          l("div", E_, [
            le(l("input", {
              id: "zr-wait-value",
              "onUpdate:modelValue": u[9] || (u[9] = (d) => e.node.data.delay_value = d),
              type: "number",
              min: "1",
              class: K(Qt),
              onChange: s
            }, null, 544), [
              [
                xe,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            le(l("select", {
              "onUpdate:modelValue": u[10] || (u[10] = (d) => e.node.data.delay_unit = d),
              class: K(Qt),
              onChange: s
            }, [...u[16] || (u[16] = [
              l("option", { value: "seconds" }, "Segundos", -1),
              l("option", { value: "minutes" }, "Minutos", -1),
              l("option", { value: "hours" }, "Horas", -1),
              l("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [lt, e.node.data.delay_unit]
            ])
          ]),
          l("p", $_, " Espera até " + V(e.node.data.delay_value || 0) + " " + V(I(ai)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente. ", 1),
          u[17] || (u[17] = l("p", { class: "mt-3 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Be(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            l("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            Be(" (o cliente mandou uma mensagem) e outra do ponto "),
            l("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            Be(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : ($(), T("p", z_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? ($(), T("div", P_, [
        l("div", C_, [
          l("div", null, [
            u[18] || (u[18] = l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            l("p", A_, V(e.edge.source) + " → " + V(e.edge.target), 1)
          ]),
          l("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: u[11] || (u[11] = (d) => r("remove-edge", e.edge.id))
          }, [
            Z(I(Xo), { class: "h-3 w-3" }),
            u[19] || (u[19] = Be(" Excluir ", -1))
          ])
        ]),
        u[20] || (u[20] = l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : ($(), T("p", T_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
}, N_ = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, I_ = { class: "flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, R_ = { class: "hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40" }, M_ = { class: "flex items-center gap-2" }, D_ = { class: "mt-6 space-y-4" }, F_ = { class: "rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900" }, B_ = { class: "mt-2.5 flex items-center gap-2" }, L_ = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5"
}, U_ = { class: "flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300" }, q_ = {
  key: 1,
  class: "rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5"
}, V_ = { class: "mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" }, j_ = { class: "flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]" }, H_ = { class: "flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]" }, G_ = { class: "flex items-center gap-3" }, W_ = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, X_ = { class: "flex items-center gap-2" }, Y_ = { class: "flex-1 space-y-3 overflow-y-auto p-4" }, K_ = {
  key: 0,
  class: "flex justify-center my-1"
}, Z_ = { class: "rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300" }, J_ = {
  key: 1,
  class: "flex justify-start"
}, Q_ = { class: "max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100" }, e2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400" }, t2 = {
  key: 2,
  class: "flex justify-end"
}, n2 = { class: "max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100" }, r2 = { class: "leading-relaxed" }, o2 = { class: "mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400" }, i2 = { class: "border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]" }, a2 = ["disabled", "placeholder"], s2 = ["disabled"], l2 = {
  __name: "FlowSimulatorModal",
  props: {
    flow: { type: Object, required: !0 },
    nodes: { type: Array, required: !0 },
    edges: { type: Array, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(null), i = Y([]);
    Y(!1);
    const a = Y(!1), s = Y(""), c = Y(!1), u = Y(null);
    J(() => n.nodes.find((g) => g.id === o.value));
    function d() {
      const g = /* @__PURE__ */ new Date();
      return `${String(g.getHours()).padStart(2, "0")}:${String(g.getMinutes()).padStart(2, "0")}`;
    }
    function f() {
      i.value = [], a.value = !1, u.value = null, s.value = "";
      const g = n.nodes.find((_) => _.type === "trigger");
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
    function v(g, _ = null) {
      return n.edges.find((C) => C.source !== g ? !1 : _ === null ? !0 : (C.sourceHandle === "yes" || C.sourceHandle === "replied" || C.data?.condition === "true" ? "true" : C.sourceHandle === "no" || C.sourceHandle === "timeout" || C.data?.condition === "false" ? "false" : null) === _);
    }
    function y() {
      if (!o.value) return;
      const g = n.nodes.find((_) => _.id === o.value);
      if (g) {
        if (g.type === "trigger") {
          const _ = v(g.id);
          if (!_) return E("Fluxo finalizado após o gatilho.");
          o.value = _.target, h();
          return;
        }
        if (g.type === "send_message") {
          const _ = v(g.id);
          if (!_) return E("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (g.type === "delay") {
          const _ = v(g.id);
          if (!_) return E("Fim do fluxo atingido.");
          o.value = _.target, h();
          return;
        }
        if (g.type === "condition") {
          const _ = c.value ? "true" : "false", C = v(g.id, _);
          if (!C) return E(`Fim do fluxo (ramificação ${_ === "true" ? "SIM" : "NÃO"} sem saída).`);
          o.value = C.target, h();
          return;
        }
        g.type === "end" && E("Fluxo finalizado com sucesso.");
      }
    }
    function h() {
      const g = n.nodes.find((_) => _.id === o.value);
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
          const _ = g.data?.delay_value || 15, C = g.data?.delay_unit || "minutes";
          u.value = `${_} ${C}`, i.value.push({
            type: "system",
            text: `⏱️ Aguardando delay de ${_} ${C}...`,
            time: d()
          });
          return;
        }
        if (g.type === "condition") {
          const _ = c.value;
          i.value.push({
            type: "system",
            text: `🔀 Avaliando condição: Pedido pago? -> ${_ ? "SIM (Aprovado)" : "NÃO (Pendente)"}`,
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
    function p() {
      u.value && (u.value = null, i.value.push({
        type: "system",
        text: "⏩ Tempo avançado pelo simulador.",
        time: d()
      }), y());
    }
    function m() {
      if (!s.value.trim()) return;
      const g = s.value.trim();
      s.value = "", a.value = !1, i.value.push({
        type: "user",
        text: g,
        time: d()
      });
      const _ = n.nodes.find((C) => C.id === o.value);
      if (_ && _.type === "wait_reply") {
        const C = v(_.id, "true");
        if (!C) return E("Fim do fluxo (saída RESPONDEU não conectada).");
        o.value = C.target, setTimeout(h, 500);
      }
    }
    function b() {
      a.value = !1, i.value.push({
        type: "system",
        text: "⏳ Tempo limite de resposta esgotado.",
        time: d()
      });
      const g = n.nodes.find((_) => _.id === o.value);
      if (g && g.type === "wait_reply") {
        const _ = v(g.id, "false");
        if (!_) return E("Fim do fluxo (saída ESGOTOU não conectada).");
        o.value = _.target, setTimeout(h, 500);
      }
    }
    function E(g) {
      i.value.push({
        type: "system",
        text: `🏁 ${g}`,
        time: d()
      }), o.value = null;
    }
    return Ze(f), (g, _) => ($(), T("div", N_, [
      l("div", I_, [
        l("div", R_, [
          l("div", M_, [
            Z(I(nf), { class: "h-4 w-4 text-emerald-500" }),
            _[4] || (_[4] = l("h3", { class: "text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white" }, "Simulador de Fluxo", -1))
          ]),
          _[11] || (_[11] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Teste o comportamento do fluxo passo a passo em um smartphone virtual. ", -1)),
          l("div", D_, [
            l("div", F_, [
              _[5] || (_[5] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, "Variável: Pedido Pago?", -1)),
              _[6] || (_[6] = l("p", { class: "mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400" }, "Altera o resultado de blocos de condição.", -1)),
              l("div", B_, [
                l("button", {
                  type: "button",
                  class: K(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "bg-emerald-600 text-white shadow-xs" : "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"]),
                  onClick: _[0] || (_[0] = (C) => c.value = !0)
                }, " SIM (Pago) ", 2),
                l("button", {
                  type: "button",
                  class: K(["flex-1 rounded-xl py-1.5 text-xs font-bold transition", c.value ? "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300" : "bg-rose-600 text-white shadow-xs"]),
                  onClick: _[1] || (_[1] = (C) => c.value = !1)
                }, " NÃO (Pendente) ", 2)
              ])
            ]),
            u.value ? ($(), T("div", L_, [
              l("div", U_, [
                Z(I(Wo), { class: "h-4 w-4" }),
                l("span", null, "Aguardando: " + V(u.value), 1)
              ]),
              l("button", {
                type: "button",
                class: "mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600",
                onClick: p
              }, [
                Z(I(zh), { class: "h-3.5 w-3.5" }),
                _[7] || (_[7] = l("span", null, "Avançar Tempo Agora", -1))
              ])
            ])) : te("", !0),
            a.value ? ($(), T("div", q_, [
              _[9] || (_[9] = l("div", { class: "text-xs font-bold text-teal-700 dark:text-teal-300" }, " Cliente não respondeu? ", -1)),
              l("button", {
                type: "button",
                class: "mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700",
                onClick: b
              }, [..._[8] || (_[8] = [
                l("span", null, "Simular Timeout (Esgotou)", -1)
              ])])
            ])) : te("", !0)
          ]),
          l("div", V_, [
            l("button", {
              type: "button",
              class: "flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: f
            }, [
              Z(I(Ah), { class: "h-3.5 w-3.5" }),
              _[10] || (_[10] = l("span", null, "Reiniciar Simulação", -1))
            ])
          ])
        ]),
        l("div", j_, [
          l("div", H_, [
            l("div", G_, [
              _[13] || (_[13] = l("div", { class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs" }, " ZR ", -1)),
              l("div", null, [
                l("div", W_, V(e.flow.name), 1),
                _[12] || (_[12] = l("div", { class: "text-[10px] text-emerald-600 dark:text-emerald-400 font-medium" }, "online agora", -1))
              ])
            ]),
            l("div", X_, [
              l("button", {
                type: "button",
                class: "flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5",
                onClick: _[2] || (_[2] = (C) => r("close"))
              }, [
                Z(I(Ct), { class: "h-4 w-4" })
              ])
            ])
          ]),
          l("div", Y_, [
            ($(!0), T(ge, null, Oe(i.value, (C, z) => ($(), T(ge, { key: z }, [
              C.type === "system" ? ($(), T("div", K_, [
                l("span", Z_, V(C.text), 1)
              ])) : C.type === "bot" ? ($(), T("div", J_, [
                l("div", Q_, [
                  Z(ml, {
                    text: C.text,
                    mode: C.mode,
                    caption: C.data?.caption,
                    "recipient-name": "Cliente Teste"
                  }, null, 8, ["text", "mode", "caption"]),
                  l("div", e2, [
                    l("span", null, V(C.time), 1),
                    Z(I(ys), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : C.type === "user" ? ($(), T("div", t2, [
                l("div", n2, [
                  l("p", r2, V(C.text), 1),
                  l("div", o2, [
                    l("span", null, V(C.time), 1),
                    Z(I(ys), { class: "h-3 w-3 text-sky-500" })
                  ])
                ])
              ])) : te("", !0)
            ], 64))), 128))
          ]),
          l("div", i2, [
            l("form", {
              class: "flex items-center gap-2",
              onSubmit: tn(m, ["prevent"])
            }, [
              le(l("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (C) => s.value = C),
                type: "text",
                disabled: !a.value,
                placeholder: a.value ? "Digite a resposta do cliente simulado..." : "Aguardando o fluxo solicitar resposta...",
                class: "flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
              }, null, 8, a2), [
                [xe, s.value]
              ]),
              l("button", {
                type: "submit",
                disabled: !a.value || !s.value.trim(),
                class: "flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
              }, [
                Z(I(Gt), { class: "h-4 w-4" })
              ], 8, s2)
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
function u2(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const c2 = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function d2(e, t) {
  if (!(t !== "true" && t !== "false"))
    return c2[e]?.[t];
}
function Eo(e, t = {}) {
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
  return e === "delay" ? t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${ai(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s` : e === "condition" ? t.kind === "order_status_is" ? `Status do pedido é "${mp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${vp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : hp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?" : e === "wait_reply" ? t.delay_value && t.delay_unit ? `Espera até ${t.delay_value} ${ai(t.delay_unit)}` : `Espera até ${Math.max(0, Number(t.seconds) || 0)}s` : e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function f2(e, t = "") {
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
    data: yp("trigger", t),
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
      sourceHandle: d2(a.get(String(u.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: i, edges: c };
}
function p2(e, t) {
  const n = Qn(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = gp(n.delay_value, n.delay_unit)), n;
}
function h2(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function m2(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: p2(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = h2(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function v2(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : u2(e),
    type: e,
    position: t,
    data: yp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: yn(e)
  };
}
function it(e) {
  return String(e ?? "").trim();
}
function g2(e) {
  const t = e?.type || "reply";
  return t === "pix" ? it(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : it(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? it(e.url) !== "" : t === "call" ? it(e.phoneNumber) !== "" : t === "copy" ? it(e.copyCode) !== "" : !0;
}
function y2(e) {
  return it(e?.title) !== "";
}
function Rs(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && it(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && it(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(g2) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(y2)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
      break;
    case "location":
      (it(e.latitude) === "" || it(e.longitude) === "") && n.push(`${t}: informe latitude e longitude.`);
      break;
    case "contact":
      (it(e.contact_name) === "" || it(e.contact_phone) === "") && n.push(`${t}: informe nome e telefone do contato.`);
      break;
    case "poll": {
      const r = (e.options || []).filter((o) => it(o) !== "");
      (it(e.question) === "" || r.length < 2) && n.push(`${t}: informe a pergunta e ao menos 2 opções.`);
      break;
    }
    case "link":
      it(e.url) === "" && n.push(`${t}: informe a URL do link.`);
      break;
    case "image":
    case "video":
    case "audio":
    case "document":
    case "sticker":
      it(e.media_url) === "" && n.push(`${t}: selecione um arquivo.`);
      break;
    default:
      it(e.text) === "" && n.push(`${t}: escreva o texto da mensagem.`);
  }
  return n;
}
function b2(e) {
  const t = [], n = Array.isArray(e) ? e : e?.nodes || [];
  for (const r of n) {
    if (r.type !== "send_message") continue;
    const o = r.data || {}, i = it(o.mode) || "text";
    t.push(...Rs(o, `Bloco "Enviar mensagem" (${i})`));
  }
  return t;
}
const x2 = { class: "flex h-full flex-col lg:flex-row" }, w2 = { class: "flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950" }, _2 = { class: "mb-4 flex items-center justify-between" }, k2 = { class: "space-y-2" }, S2 = ["onDragstart", "onClick"], E2 = { class: "text-xs font-bold" }, $2 = { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, z2 = { class: "mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800" }, P2 = ["disabled"], C2 = {
  key: 0,
  class: "absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
}, A2 = { class: "flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30" }, T2 = { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500" }, O2 = { class: "flex-1 text-xs" }, N2 = { class: "mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300" }, I2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, R2 = { class: "flex items-center gap-2" }, M2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30" }, D2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, F2 = { class: "p-3" }, B2 = { class: "flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300" }, L2 = { class: "truncate" }, U2 = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, q2 = { class: "flex items-center gap-2" }, V2 = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30" }, j2 = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, H2 = { class: "flex items-center gap-1.5" }, G2 = ["onClick"], W2 = { class: "p-3" }, X2 = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200" }, Y2 = {
  key: 0,
  class: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
}, K2 = {
  key: 1,
  class: "space-y-1"
}, Z2 = { class: "font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate" }, J2 = { class: "text-[10px] text-zinc-500" }, Q2 = {
  key: 2,
  class: "space-y-1.5"
}, ek = { class: "text-[11px] leading-snug line-clamp-2" }, tk = {
  key: 0,
  class: "flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10"
}, nk = {
  key: 3,
  class: "line-clamp-2 text-[11px] leading-snug"
}, rk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, ok = { class: "flex items-center gap-2" }, ik = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30" }, ak = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, sk = ["onClick"], lk = { class: "p-3" }, uk = { class: "flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300" }, ck = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, dk = { class: "flex items-center gap-2" }, fk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30" }, pk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, hk = ["onClick"], mk = { class: "p-3 space-y-2.5 pb-12" }, vk = { class: "rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300" }, gk = { class: "line-clamp-2" }, yk = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, bk = { class: "flex items-center gap-2" }, xk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30" }, wk = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, _k = ["onClick"], kk = { class: "p-3 space-y-2.5 pb-12" }, Sk = { class: "rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300" }, Ek = { class: "line-clamp-2" }, $k = { class: "flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80" }, zk = { class: "flex items-center gap-2" }, Pk = { class: "flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30" }, Ck = { class: "text-xs font-bold text-zinc-900 dark:text-zinc-100" }, Ak = ["onClick"], Tk = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, i = Y([]), a = Y([]), s = Y(null), c = Y(null), u = Y([]), d = Y(!1), f = {
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
    const { onConnect: y, addEdges: h, project: p, fitView: m } = Ve(), b = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: Bn, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: Kl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: Wo, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Tr, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: Zl, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Yl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], E = J(() => r.flow?.trigger_event || ""), g = J(() => i.value.find((P) => P.id === s.value) || null), _ = J(() => a.value.find((P) => P.id === c.value) || null), C = {
      type: "zaprei",
      markerEnd: ni.ArrowClosed,
      data: {}
    };
    Ne(
      () => r.flow?.id,
      () => {
        const P = f2(r.flow?.graph_json, E.value);
        i.value = P.nodes, a.value = P.edges, s.value = null, c.value = null, setTimeout(() => m({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), y((P) => {
      h([{
        ...P,
        ...C,
        sourceHandle: P.sourceHandle,
        data: { sourceHandle: P.sourceHandle }
      }]);
    });
    function z(P) {
      s.value = P, c.value = null;
    }
    function w(P) {
      c.value = P, s.value = null;
    }
    function k() {
      s.value = null, c.value = null;
    }
    function L(P, N) {
      if (P === "trigger" && i.value.some((U) => U.type === "trigger"))
        return;
      const x = v2(P, N || { x: 420, y: 320 }, E.value);
      i.value = [...i.value, x], z(x.id);
    }
    function D(P) {
      !P || i.value.find((N) => N.id === P)?.type === "trigger" || (i.value = i.value.filter((N) => N.id !== P), a.value = a.value.filter((N) => N.source !== P && N.target !== P), s.value === P && (s.value = null));
    }
    function M(P) {
      a.value = a.value.filter((N) => N.id !== P), c.value === P && (c.value = null);
    }
    function A(P, N) {
      P.dataTransfer?.setData("application/zaprei-node", N), P.dataTransfer.effectAllowed = "move";
    }
    function q(P) {
      P.preventDefault(), P.dataTransfer.dropEffect = "move";
    }
    function S(P) {
      P.preventDefault();
      const N = P.dataTransfer?.getData("application/zaprei-node");
      if (!N) return;
      const x = P.currentTarget.getBoundingClientRect(), U = p({
        x: P.clientX - x.left,
        y: P.clientY - x.top
      });
      L(N, U);
    }
    function F() {
      const P = m2(i.value, a.value), N = b2(P);
      u.value = N, !N.length && o("save", P);
    }
    return t({
      requestSave: F,
      handleSave: F
    }), (P, N) => ($(), T("div", x2, [
      l("aside", w2, [
        l("div", _2, [
          N[8] || (N[8] = l("div", null, [
            l("h3", { class: "text-xs font-bold uppercase tracking-wider text-zinc-400" }, "Componentes"),
            l("p", { class: "text-[11px] text-zinc-500" }, "Arraste para a área de edição")
          ], -1)),
          l("button", {
            type: "button",
            class: "inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400",
            onClick: N[0] || (N[0] = (x) => d.value = !0)
          }, [
            Z(I(nf), { class: "h-3.5 w-3.5" }),
            N[7] || (N[7] = l("span", null, "Simulador", -1))
          ])
        ]),
        l("div", k2, [
          ($(), T(ge, null, Oe(b, (x) => l("div", {
            key: x.type,
            draggable: "true",
            class: K(["group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs", x.color]),
            onDragstart: (U) => A(U, x.type),
            onClick: (U) => L(x.type)
          }, [
            ($(), Re(Tt(x.icon), { class: "mt-0.5 h-4 w-4 shrink-0" })),
            l("div", null, [
              l("div", E2, V(x.title), 1),
              l("div", $2, V(x.desc), 1)
            ])
          ], 42, S2)), 64))
        ]),
        l("div", z2, [
          l("button", {
            type: "button",
            disabled: e.saving,
            class: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: F
          }, [
            l("span", null, V(e.saving ? "Salvando..." : "Salvar Alterações"), 1)
          ], 8, P2)
        ])
      ]),
      l("main", {
        class: "relative h-full flex-1",
        onDragover: q,
        onDrop: S
      }, [
        Z(mh, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "-translate-y-2 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "-translate-y-2 opacity-0"
        }, {
          default: rt(() => [
            u.value.length ? ($(), T("div", C2, [
              l("div", A2, [
                l("div", T2, [
                  Z(I(tl), { class: "h-4 w-4" })
                ]),
                l("div", O2, [
                  N[9] || (N[9] = l("p", { class: "font-bold text-red-600 dark:text-red-400" }, "Não foi possível salvar o fluxo:", -1)),
                  l("ul", N2, [
                    ($(!0), T(ge, null, Oe(u.value, (x, U) => ($(), T("li", { key: U }, V(x), 1))), 128))
                  ])
                ]),
                l("button", {
                  type: "button",
                  class: "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
                  onClick: N[1] || (N[1] = (x) => u.value = [])
                }, [
                  Z(I(Ct), { class: "h-4 w-4" })
                ])
              ])
            ])) : te("", !0)
          ]),
          _: 1
        }),
        Z(I(c1), {
          nodes: i.value,
          "onUpdate:nodes": N[2] || (N[2] = (x) => i.value = x),
          edges: a.value,
          "onUpdate:edges": N[3] || (N[3] = (x) => a.value = x),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": C,
          onNodeClick: N[4] || (N[4] = (x) => z(x.node?.id)),
          onEdgeClick: N[5] || (N[5] = (x) => w(x.edge?.id)),
          onPaneClick: k
        }, {
          "edge-zaprei": rt((x) => [
            Z(Z1, yi(x, { onRemove: M }), null, 16)
          ]),
          "node-trigger": rt((x) => [
            l("div", {
              class: K(["min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "source",
                position: I(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", I2, [
                l("div", R2, [
                  l("div", M2, [
                    Z(I(Bn), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", D2, V(I(yn)("trigger")), 1)
                ]),
                N[10] || (N[10] = l("span", { class: "rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              l("div", F2, [
                l("div", B2, [
                  N[11] || (N[11] = l("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
                  l("span", L2, V(I(Eo)("trigger", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-send_message": rt((x) => [
            l("div", {
              class: K(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "target",
                position: I(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Z(I(ut), {
                type: "source",
                position: I(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", U2, [
                l("div", q2, [
                  l("div", V2, [
                    Z(I(Kl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", j2, V(I(yn)("send_message")), 1)
                ]),
                l("div", H2, [
                  l("span", {
                    class: K(["rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase", v(x.data?.mode).color])
                  }, V(v(x.data?.mode).label), 3),
                  l("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                    title: "Excluir bloco",
                    onClick: tn((U) => D(x.id), ["stop"])
                  }, [
                    Z(I(Ct), { class: "h-3.5 w-3.5" })
                  ], 8, G2)
                ])
              ]),
              l("div", W2, [
                l("div", X2, [
                  x.data?.mode === "audio" ? ($(), T("div", Y2, [
                    Z(I(Ch), { class: "h-3.5 w-3.5" }),
                    N[12] || (N[12] = l("span", { class: "font-mono text-[11px] font-semibold" }, "Mensagem de Voz", -1)),
                    N[13] || (N[13] = l("span", { class: "text-[10px] text-zinc-400" }, "PTT", -1))
                  ])) : x.data?.mode === "poll" ? ($(), T("div", K2, [
                    l("div", Z2, "📊 " + V(x.data?.question || "Pergunta da enquete..."), 1),
                    l("div", J2, V((x.data?.options || []).length) + " opções configuradas", 1)
                  ])) : x.data?.mode === "buttons" ? ($(), T("div", Q2, [
                    l("p", ek, V(x.data?.text || "Texto da mensagem..."), 1),
                    (x.data?.buttons || []).length ? ($(), T("div", tk, [
                      ($(!0), T(ge, null, Oe((x.data?.buttons || []).slice(0, 3), (U, Q) => ($(), T("span", {
                        key: Q,
                        class: "rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                      }, V(U.label || `Botão ${Q + 1}`), 1))), 128))
                    ])) : te("", !0)
                  ])) : ($(), T("div", nk, V(x.data?.text || x.data?.caption || "Sem texto definido..."), 1))
                ])
              ])
            ], 2)
          ]),
          "node-delay": rt((x) => [
            l("div", {
              class: K(["relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "target",
                position: I(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              Z(I(ut), {
                type: "source",
                position: I(ue).Right,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900"
              }, null, 8, ["position"]),
              l("div", rk, [
                l("div", ok, [
                  l("div", ik, [
                    Z(I(Wo), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", ak, V(I(yn)("delay")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: tn((U) => D(x.id), ["stop"])
                }, [
                  Z(I(Ct), { class: "h-3.5 w-3.5" })
                ], 8, sk)
              ]),
              l("div", lk, [
                l("div", uk, [
                  N[14] || (N[14] = l("span", { class: "relative flex h-2 w-2" }, [
                    l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" }),
                    l("span", { class: "relative inline-flex h-2 w-2 rounded-full bg-amber-500" })
                  ], -1)),
                  l("span", null, V(I(Eo)("delay", x.data)), 1)
                ])
              ])
            ], 2)
          ]),
          "node-condition": rt((x) => [
            l("div", {
              class: K(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "target",
                position: I(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", ck, [
                l("div", dk, [
                  l("div", fk, [
                    Z(I(Tr), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", pk, V(I(yn)("condition")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: tn((U) => D(x.id), ["stop"])
                }, [
                  Z(I(Ct), { class: "h-3.5 w-3.5" })
                ], 8, hk)
              ]),
              l("div", mk, [
                l("div", vk, [
                  l("span", gk, V(I(Eo)("condition", x.data)), 1)
                ]),
                N[15] || (N[15] = l("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, " SIM ", -1)),
                Z(I(ut), {
                  id: "yes",
                  type: "source",
                  position: I(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                N[16] || (N[16] = l("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, " NÃO ", -1)),
                Z(I(ut), {
                  id: "no",
                  type: "source",
                  position: I(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-wait_reply": rt((x) => [
            l("div", {
              class: K(["relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "target",
                position: I(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", yk, [
                l("div", bk, [
                  l("div", xk, [
                    Z(I(Zl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", wk, V(I(yn)("wait_reply")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: tn((U) => D(x.id), ["stop"])
                }, [
                  Z(I(Ct), { class: "h-3.5 w-3.5" })
                ], 8, _k)
              ]),
              l("div", kk, [
                l("div", Sk, [
                  l("span", Ek, V(I(Eo)("wait_reply", x.data)), 1)
                ]),
                N[17] || (N[17] = l("span", { class: "pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400" }, " RESPONDEU ", -1)),
                Z(I(ut), {
                  id: "replied",
                  type: "source",
                  position: I(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "58%" }
                }, null, 8, ["position"]),
                N[18] || (N[18] = l("span", { class: "pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, " ESGOTOU ", -1)),
                Z(I(ut), {
                  id: "timeout",
                  type: "source",
                  position: I(ue).Right,
                  class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900",
                  style: { top: "82%" }
                }, null, 8, ["position"])
              ])
            ], 2)
          ]),
          "node-end": rt((x) => [
            l("div", {
              class: K(["relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900", x.selected ? "border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10" : "border-zinc-200/90 dark:border-zinc-800"])
            }, [
              Z(I(ut), {
                type: "target",
                position: I(ue).Left,
                class: "!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500"
              }, null, 8, ["position"]),
              l("div", $k, [
                l("div", zk, [
                  l("div", Pk, [
                    Z(I(Yl), { class: "h-3.5 w-3.5" })
                  ]),
                  l("span", Ck, V(I(yn)("end")), 1)
                ]),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir bloco",
                  onClick: tn((U) => D(x.id), ["stop"])
                }, [
                  Z(I(Ct), { class: "h-3.5 w-3.5" })
                ], 8, Ak)
              ]),
              N[19] || (N[19] = l("div", { class: "p-3" }, [
                l("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Execução encerrada com sucesso.")
              ], -1))
            ], 2)
          ]),
          default: rt(() => [
            Z(I(b1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            Z(I(K1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      Z(O_, {
        node: g.value,
        edge: _.value,
        onRemoveNode: D,
        onRemoveEdge: M
      }, null, 8, ["node", "edge"]),
      d.value ? ($(), Re(l2, {
        key: 0,
        flow: e.flow,
        nodes: i.value,
        edges: a.value,
        onClose: N[6] || (N[6] = (x) => d.value = !1)
      }, null, 8, ["flow", "nodes", "edges"])) : te("", !0)
    ]));
  }
}, Ok = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, Nk = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, Ik = { class: "flex items-center gap-3" }, Rk = ["disabled"], Mk = { class: "flex items-center gap-2" }, Dk = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Fk = { class: "text-sm font-bold" }, Bk = ["disabled"], Lk = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, Sp = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(null), i = Y(!1), a = Y("");
    function s() {
      o.value?.requestSave?.();
    }
    async function c(u) {
      i.value = !0, a.value = "";
      try {
        await Te.updateFlow(n.flow.id, { graph_json: u }), r("saved"), r("close");
      } catch (d) {
        a.value = d.message, i.value = !1;
      }
    }
    return (u, d) => ($(), Re(jd, { to: "body" }, [
      l("div", Ok, [
        l("header", Nk, [
          l("div", Ik, [
            l("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: i.value,
              onClick: d[0] || (d[0] = (f) => r("close"))
            }, [
              Z(I(Gd), { class: "h-4 w-4 text-emerald-500" }),
              d[1] || (d[1] = l("span", null, "Voltar para Automações", -1))
            ], 8, Rk),
            d[3] || (d[3] = l("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            l("div", Mk, [
              l("div", Dk, [
                Z(I(Zd), { class: "h-4 w-4" })
              ]),
              l("div", null, [
                l("div", Fk, V(e.flow.name || "Editor de Fluxo Visual"), 1),
                d[2] || (d[2] = l("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          l("button", {
            type: "button",
            disabled: i.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: s
          }, [
            i.value ? ($(), Re(I(En), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : ($(), Re(I(Oh), {
              key: 1,
              class: "h-4 w-4"
            })),
            l("span", null, V(i.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, Bk)
        ]),
        a.value ? ($(), T("p", Lk, [
          Z(I(tl), { class: "h-4 w-4 shrink-0" }),
          l("span", null, V(a.value), 1)
        ])) : te("", !0),
        Z(Tk, {
          ref_key: "canvas",
          ref: o,
          flow: e.flow,
          saving: i.value,
          class: "flex-1 overflow-hidden",
          onSave: c
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, Uk = { class: "truncate" }, qk = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, Vk = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, jk = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, Hk = ["checked", "onChange"], Gk = { class: "truncate" }, ur = {
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
    const n = e, r = t, o = Y(!1), i = Y(null);
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
      r("update:modelValue", n.modelValue.includes(y) ? n.modelValue.filter((h) => h !== y) : [...n.modelValue, y]);
    }
    function f() {
      r("update:modelValue", []);
    }
    gi(() => document.removeEventListener("click", a, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, h) => ($(), T("div", {
      ref_key: "root",
      ref: i,
      class: "relative"
    }, [
      l("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: s
      }, [
        l("span", Uk, V(v.value), 1),
        Z(I(Eh), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? ($(), T("div", qk, [
        e.options.length ? ($(), T(ge, { key: 1 }, [
          e.matchMode ? ($(), T("div", jk, [
            l("button", {
              type: "button",
              class: K(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: h[0] || (h[0] = (p) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            l("button", {
              type: "button",
              class: K(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: h[1] || (h[1] = (p) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : te("", !0),
          e.modelValue.length ? ($(), T("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : te("", !0),
          ($(!0), T(ge, null, Oe(e.options, (p) => ($(), T("label", {
            key: p.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            l("span", {
              class: K(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(p.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(p.value) ? ($(), Re(I(Wd), {
                key: 0,
                class: "h-3 w-3"
              })) : te("", !0)
            ], 2),
            l("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(p.value),
              onChange: (m) => d(p.value)
            }, null, 40, Hk),
            l("span", Gk, V(p.label), 1)
          ]))), 128))
        ], 64)) : ($(), T("p", Vk, "Nenhuma opção disponível."))
      ])) : te("", !0)
    ], 512));
  }
}, Wk = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, Xk = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, Yk = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, Kk = { class: "flex items-center gap-2.5" }, Zk = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Jk = { class: "space-y-4 p-5" }, Qk = ["value"], eS = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, tS = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, nS = ["disabled"], rS = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y([]), i = Y(!1), a = Y(""), s = eo({
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
    return Ze(u), (f, v) => ($(), T("div", Wk, [
      l("div", Xk, [
        l("div", Yk, [
          l("div", Kk, [
            l("div", Zk, [
              Z(I(tf), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          l("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (y) => r("close"))
          }, [
            Z(I(Ct), { class: "h-4 w-4" })
          ])
        ]),
        l("div", Jk, [
          l("div", null, [
            v[6] || (v[6] = l("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            le(l("input", {
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
            le(l("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (y) => s.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              ($(!0), T(ge, null, Oe(I(Mn), (y) => ($(), T("option", {
                key: y.id,
                value: y.eventClass
              }, V(y.label), 9, Qk))), 128))
            ], 512), [
              [lt, s.trigger_event]
            ]),
            v[8] || (v[8] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          l("div", null, [
            v[9] || (v[9] = l("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            Z(ur, {
              modelValue: s.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (y) => s.product_ids = y),
              options: c.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          a.value ? ($(), T("p", eS, V(a.value), 1)) : te("", !0)
        ]),
        l("div", tS, [
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
          }, V(i.value ? "Salvando…" : "Salvar"), 9, nS)
        ])
      ])
    ]));
  }
}, oS = [
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
], iS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, aS = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" }, sS = ["onClick"], lS = { class: "flex items-center justify-between" }, uS = { class: "text-2xl" }, cS = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, dS = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, fS = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, pS = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => ($(), T("div", iS, [
      n[1] || (n[1] = l("div", { class: "mb-4 flex items-center justify-between" }, [
        l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      l("div", aS, [
        ($(!0), T(ge, null, Oe(I(oS), (r) => ($(), T("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          l("div", null, [
            l("div", lS, [
              l("span", uS, V(r.icon), 1),
              l("span", cS, V(r.badge), 1)
            ]),
            l("h3", dS, V(r.title), 1),
            l("p", fS, V(r.description), 1)
          ]),
          n[0] || (n[0] = l("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            l("span", null, "Usar modelo"),
            l("span", null, "→")
          ], -1))
        ], 8, sS))), 128))
      ])
    ]));
  }
}, hS = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" }, mS = { class: "w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900" }, vS = { class: "flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40" }, gS = { class: "flex items-center gap-3" }, yS = { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" }, bS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, xS = { class: "text-zinc-700 dark:text-zinc-300" }, wS = { class: "p-6 space-y-4" }, _S = {
  key: 0,
  class: "rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2"
}, kS = { class: "flex items-center gap-2 font-bold text-sm" }, SS = { class: "text-xs" }, ES = {
  key: 1,
  class: "rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300"
}, $S = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, zS = ["value"], PS = { class: "mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900" }, CS = { class: "flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40" }, AS = ["disabled"], TS = {
  __name: "FlowTestModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "tested"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(""), i = Y(""), a = Y(!1), s = Y(""), c = Y(!1), u = Y("");
    function d(p) {
      const m = String(p || "").replace(/\D/g, "").slice(0, 11);
      return m ? m.length <= 2 ? `(${m}` : m.length <= 6 ? `(${m.slice(0, 2)}) ${m.slice(2)}` : m.length <= 10 ? `(${m.slice(0, 2)}) ${m.slice(2, 6)}-${m.slice(6)}` : `(${m.slice(0, 2)}) ${m.slice(2, 7)}-${m.slice(7, 11)}` : "";
    }
    function f(p) {
      const m = p.target.value;
      o.value = d(m);
    }
    const v = J(() => o.value.replace(/\D/g, "")), y = J(() => v.value.length >= 10 && v.value.length <= 11);
    async function h() {
      if (!(!y.value || a.value)) {
        a.value = !0, s.value = "", c.value = !1;
        try {
          await Te.testFlow(n.flow.id, {
            phone: v.value,
            customer_name: i.value.trim() || void 0
          }), u.value = o.value, c.value = !0, r("tested", { phone: v.value, name: i.value });
        } catch (p) {
          s.value = p.message || "Falha ao disparar teste.";
        } finally {
          a.value = !1;
        }
      }
    }
    return (p, m) => ($(), T("div", hS, [
      l("div", mS, [
        l("div", vS, [
          l("div", gS, [
            l("div", yS, [
              Z(I(Gt), { class: "h-5 w-5" })
            ]),
            l("div", null, [
              m[4] || (m[4] = l("h2", { class: "text-base font-bold text-zinc-900 dark:text-white" }, "Testar Disparo de Fluxo", -1)),
              l("p", bS, [
                m[3] || (m[3] = Be("Fluxo: ", -1)),
                l("strong", xS, V(e.flow.name), 1)
              ])
            ])
          ]),
          l("button", {
            type: "button",
            class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: m[0] || (m[0] = (b) => r("close"))
          }, [
            Z(I(Ct), { class: "h-4 w-4" })
          ])
        ]),
        l("div", wS, [
          m[13] || (m[13] = l("div", { class: "rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300" }, [
            l("p", { class: "leading-relaxed" }, " O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção. ")
          ], -1)),
          c.value ? ($(), T("div", _S, [
            l("div", kS, [
              Z(I(nl), { class: "h-5 w-5 text-emerald-500" }),
              m[5] || (m[5] = l("span", null, "Fluxo disparado com sucesso!", -1))
            ]),
            l("p", SS, [
              m[6] || (m[6] = Be(" As mensagens foram enviadas para ", -1)),
              l("strong", null, V(u.value), 1),
              m[7] || (m[7] = Be('. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados. ', -1))
            ])
          ])) : te("", !0),
          s.value ? ($(), T("div", ES, V(s.value), 1)) : te("", !0),
          l("form", {
            class: "space-y-4",
            onSubmit: tn(h, ["prevent"])
          }, [
            l("div", null, [
              m[9] || (m[9] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Número de WhatsApp para Receber o Teste ", -1)),
              l("div", $S, [
                m[8] || (m[8] = l("span", { class: "mr-2 text-xs font-bold text-zinc-500" }, "🇧🇷 +55", -1)),
                l("input", {
                  value: o.value,
                  type: "text",
                  placeholder: "(11) 99999-8888",
                  class: "w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white",
                  onInput: f
                }, null, 40, zS)
              ]),
              m[10] || (m[10] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Digite seu número com DDD (10 ou 11 dígitos). ", -1))
            ]),
            l("div", null, [
              m[11] || (m[11] = l("label", { class: "block text-xs font-bold text-zinc-700 dark:text-zinc-300" }, " Nome do Cliente (para variáveis do fluxo) ", -1)),
              l("div", PS, [
                Z(I(Ih), { class: "mr-2 h-4 w-4 text-zinc-400" }),
                le(l("input", {
                  "onUpdate:modelValue": m[1] || (m[1] = (b) => i.value = b),
                  type: "text",
                  placeholder: "Ex: Rodrigo Silva (padrão: Contato de Teste)",
                  class: "w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                }, null, 512), [
                  [xe, i.value]
                ])
              ]),
              m[12] || (m[12] = l("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
                Be(" Substitui as tags "),
                l("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.name}}"),
                Be(" e "),
                l("code", { class: "rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800" }, "{{customer.first_name}}"),
                Be(". ")
              ], -1))
            ])
          ], 32)
        ]),
        l("div", CS, [
          l("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: m[2] || (m[2] = (b) => r("close"))
          }, V(c.value ? "Concluir" : "Cancelar"), 1),
          l("button", {
            type: "button",
            disabled: !y.value || a.value,
            class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: h
          }, [
            a.value ? ($(), Re(I(En), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : ($(), Re(I(Gt), {
              key: 1,
              class: "h-4 w-4"
            })),
            l("span", null, V(a.value ? "Disparando..." : "Disparar Teste Agora"), 1)
          ], 8, AS)
        ])
      ])
    ]));
  }
}, OS = { class: "space-y-4 text-zinc-900 dark:text-white" }, NS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, IS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, RS = { class: "flex flex-wrap items-center gap-2" }, MS = { class: "relative w-64" }, DS = ["value"], FS = { class: "flex items-center gap-3" }, BS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, LS = ["disabled"], US = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, qS = { class: "grid gap-3 sm:grid-cols-3" }, VS = ["value"], jS = { class: "flex gap-2" }, HS = ["disabled"], GS = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, WS = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, XS = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, YS = {
  key: 4,
  class: "py-10 text-center"
}, KS = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, ZS = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, JS = { class: "flex items-start justify-between gap-2" }, QS = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, e5 = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, t5 = ["title", "disabled", "onClick"], n5 = { class: "mt-2" }, r5 = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, o5 = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, i5 = { class: "flex items-center gap-1" }, a5 = ["onClick"], s5 = ["disabled", "onClick"], l5 = ["disabled", "onClick"], u5 = ["disabled", "onClick"], c5 = ["onClick"], d5 = ["onClick"], f5 = {
  __name: "FlowsPanel",
  setup(e) {
    const t = Y([]), n = Y([]), r = Y(!0), o = Y(!1), i = Y(""), a = Y(""), s = Y(!1), c = Y(""), u = Y("all"), d = Y(null), f = Y(null), v = Y(null), y = Y({ name: "", trigger_event: Mn[3].eventClass, product_ids: [] }), h = Y(!1), p = J(() => {
      const q = c.value.trim().toLowerCase();
      return t.value.filter((S) => u.value !== "all" && S.trigger_event !== u.value ? !1 : !q || `${S.name} ${Do(S.trigger_event)}`.toLowerCase().includes(q));
    }), m = J(() => n.value.map((q) => ({ value: q.id, label: q.name })));
    function b(q) {
      if (!q || !q.length) return "Todos os produtos";
      const S = q.map((F) => n.value.find((P) => P.id === F)?.name).filter(Boolean);
      return S.length ? S.length > 2 ? `${S.slice(0, 2).join(", ")} +${S.length - 2}` : S.join(", ") : "Todos os produtos";
    }
    async function E() {
      r.value = !0, i.value = "";
      try {
        const [q, S] = await Promise.all([Te.flows(), Te.products()]);
        t.value = q.flows || [], n.value = S.products || [];
      } catch (q) {
        i.value = q.message;
      } finally {
        r.value = !1;
      }
    }
    async function g(q) {
      o.value = !0, i.value = "";
      try {
        await q(), await E();
      } catch (S) {
        i.value = S.message;
      } finally {
        o.value = !1;
      }
    }
    function _(q) {
      v.value = q;
    }
    function C({ phone: q }) {
      a.value = `Fluxo "${v.value?.name}" disparado para ${q}. Confira o WhatsApp e o Histórico de Execuções.`;
    }
    function z() {
      const q = y.value.name.trim() || Do(y.value.trigger_event);
      return g(async () => {
        await Te.createFlow({
          name: q,
          trigger_event: y.value.trigger_event,
          product_ids: y.value.product_ids.length ? y.value.product_ids : null,
          is_active: !0,
          graph_json: xp(y.value.trigger_event)
        }), y.value.name = "", y.value.product_ids = [], h.value = !1;
      });
    }
    const w = (q) => g(() => Te.updateFlow(q.id, { is_active: !q.is_active })), k = (q) => g(() => Te.duplicateFlow(q.id));
    function L(q) {
      if (window.confirm(`Excluir o fluxo "${q.name}"?`))
        return g(() => Te.deleteFlow(q.id));
    }
    function D(q) {
      const S = {
        name: q.name,
        trigger_event: q.trigger_event,
        product_ids: q.product_ids,
        graph_json: q.graph_json
      }, F = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" }), P = URL.createObjectURL(F), N = document.createElement("a");
      N.href = P, N.download = `${(q.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, N.click(), URL.revokeObjectURL(P);
    }
    async function M(q) {
      const S = q.target.files?.[0];
      if (S) {
        s.value = !0, i.value = "", a.value = "";
        try {
          const F = JSON.parse(await S.text());
          if (!F || typeof F != "object" || !F.graph_json || !F.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const P = new Set(n.value.map((x) => x.id)), N = (Array.isArray(F.product_ids) ? F.product_ids : []).filter((x) => P.has(x));
          await Te.createFlow({
            name: F.name ? `${F.name} (importado)` : "Fluxo importado",
            trigger_event: F.trigger_event,
            product_ids: N.length ? N : null,
            graph_json: F.graph_json,
            is_active: !1
          }), a.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await E();
        } catch (F) {
          i.value = F.message || "Não foi possível importar o arquivo.";
        } finally {
          s.value = !1, q.target.value = "";
        }
      }
    }
    function A(q) {
      return g(() => Te.createFlow({
        name: q.title,
        trigger_event: q.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: q.graph(q.eventClass)
      }));
    }
    return Ze(E), (q, S) => ($(), T("div", OS, [
      Z(pS, { onUse: A }),
      l("div", NS, [
        l("div", IS, [
          l("div", RS, [
            l("div", MS, [
              Z(I(Lr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              le(l("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (F) => c.value = F),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [xe, c.value]
              ])
            ]),
            le(l("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (F) => u.value = F),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              S[10] || (S[10] = l("option", { value: "all" }, "Todos os eventos", -1)),
              ($(!0), T(ge, null, Oe(I(Mn), (F) => ($(), T("option", {
                key: F.id,
                value: F.eventClass
              }, V(F.label), 9, DS))), 128))
            ], 512), [
              [lt, u.value]
            ])
          ]),
          l("div", FS, [
            l("span", BS, V(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            l("label", {
              class: K(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": s.value }])
            }, [
              Z(I(rf), { class: "h-4 w-4" }),
              l("span", null, V(s.value ? "Importando…" : "Importar"), 1),
              l("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: s.value,
                onChange: M
              }, null, 40, LS)
            ], 2),
            l("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: S[2] || (S[2] = (F) => h.value = !h.value)
            }, [
              Z(I(ef), { class: "h-4 w-4" }),
              S[11] || (S[11] = l("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        h.value ? ($(), T("div", US, [
          l("div", qS, [
            l("div", null, [
              S[12] || (S[12] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              le(l("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": S[3] || (S[3] = (F) => y.value.name = F),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [xe, y.value.name]
              ])
            ]),
            l("div", null, [
              S[13] || (S[13] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              le(l("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": S[4] || (S[4] = (F) => y.value.trigger_event = F),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                ($(!0), T(ge, null, Oe(I(Mn), (F) => ($(), T("option", {
                  key: F.id,
                  value: F.eventClass
                }, V(F.label), 9, VS))), 128))
              ], 512), [
                [lt, y.value.trigger_event]
              ])
            ]),
            l("div", null, [
              S[14] || (S[14] = l("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              Z(ur, {
                modelValue: y.value.product_ids,
                "onUpdate:modelValue": S[5] || (S[5] = (F) => y.value.product_ids = F),
                options: m.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          l("div", jS, [
            l("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: z
            }, " Criar fluxo em branco ", 8, HS),
            l("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: S[6] || (S[6] = (F) => h.value = !1)
            }, " Cancelar ")
          ])
        ])) : te("", !0),
        i.value ? ($(), T("p", GS, V(i.value), 1)) : a.value ? ($(), T("p", WS, V(a.value), 1)) : te("", !0),
        r.value ? ($(), T("div", XS, [
          Z(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          S[15] || (S[15] = l("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? ($(), T("div", ZS, [
          ($(!0), T(ge, null, Oe(p.value, (F) => ($(), T("div", {
            key: F.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            l("div", null, [
              l("div", JS, [
                l("div", null, [
                  l("span", QS, V(I(Do)(F.trigger_event)), 1),
                  l("h3", e5, V(F.name), 1)
                ]),
                l("button", {
                  type: "button",
                  class: K(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", F.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: F.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (P) => w(F)
                }, [
                  l("span", {
                    class: K(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", F.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, t5)
              ]),
              l("div", n5, [
                l("span", r5, V(b(F.product_ids)), 1)
              ])
            ]),
            l("div", o5, [
              l("div", i5, [
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (P) => f.value = F
                }, [
                  Z(I(tf), { class: "h-4 w-4" })
                ], 8, a5),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (P) => k(F)
                }, [
                  Z(I(Xd), { class: "h-4 w-4" })
                ], 8, s5),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (P) => L(F)
                }, [
                  Z(I(Xo), { class: "h-4 w-4" })
                ], 8, l5),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (P) => _(F)
                }, [
                  Z(I(Gt), { class: "h-4 w-4" })
                ], 8, u5),
                l("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (P) => D(F)
                }, [
                  Z(I(Yd), { class: "h-4 w-4" })
                ], 8, c5)
              ]),
              l("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (P) => d.value = F
              }, [
                Z(I(Jd), { class: "h-3.5 w-3.5" }),
                S[18] || (S[18] = l("span", null, "Editar Visual", -1))
              ], 8, d5)
            ])
          ]))), 128))
        ])) : ($(), T("div", YS, [
          l("div", KS, [
            Z(I(Bn), { class: "h-6 w-6" })
          ]),
          S[16] || (S[16] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          S[17] || (S[17] = l("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      d.value ? ($(), Re(Sp, {
        key: 0,
        flow: d.value,
        onClose: S[7] || (S[7] = (F) => d.value = null),
        onSaved: E
      }, null, 8, ["flow"])) : te("", !0),
      f.value ? ($(), Re(rS, {
        key: 1,
        flow: f.value,
        onClose: S[8] || (S[8] = (F) => f.value = null),
        onSaved: E
      }, null, 8, ["flow"])) : te("", !0),
      v.value ? ($(), Re(TS, {
        key: 2,
        flow: v.value,
        onClose: S[9] || (S[9] = (F) => v.value = null),
        onTested: C
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, p5 = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, h5 = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, m5 = { class: "flex items-center gap-2" }, v5 = ["disabled"], g5 = { class: "mt-4 grid grid-cols-3 gap-3" }, y5 = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, b5 = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, x5 = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, w5 = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, _5 = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, k5 = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, S5 = { class: "mt-4 flex flex-wrap items-end gap-2" }, E5 = { class: "w-48" }, $5 = { class: "w-48" }, z5 = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, P5 = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, C5 = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, A5 = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, T5 = {
  key: 3,
  class: "py-10 text-center"
}, O5 = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, N5 = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, I5 = { class: "w-full text-left text-xs" }, R5 = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, M5 = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, D5 = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, F5 = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, B5 = { class: "px-3 py-2.5" }, L5 = { class: "px-3 py-2.5" }, U5 = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, q5 = ["title"], V5 = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, j5 = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, H5 = { class: "px-3 py-2.5" }, G5 = ["onClick"], W5 = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = Y([]), r = Y([]), o = Y({ all: 0, buyers: 0, imported: 0 }), i = Y(!0), a = Y(""), s = Y(""), c = Y("all"), u = Y([]), d = Y("or"), f = Y([]), v = Y(""), y = Y(!1), h = J(() => r.value.map((C) => ({ value: C.name, label: C.name }))), p = J(() => {
      const C = v.value.trim().toLowerCase();
      return n.value.filter((z) => c.value === "buyer" && z.source !== "buyer" || c.value === "imported" && z.source !== "imported" || u.value.length && !(d.value === "and" ? u.value.every((k) => z.products.includes(k)) : z.products.some((k) => u.value.includes(k))) || f.value.length && z.products.some((w) => f.value.includes(w)) ? !1 : !C || `${z.name} ${z.phone} ${z.email}`.toLowerCase().includes(C));
    });
    async function m() {
      i.value = !0, a.value = "";
      try {
        const [C, z] = await Promise.all([Te.contacts(), Te.products()]);
        n.value = C.contacts || [], o.value = C.counts || o.value, r.value = z.products || [];
      } catch (C) {
        a.value = C.message;
      } finally {
        i.value = !1;
      }
    }
    Ze(m);
    const b = "\uFEFF";
    function E() {
      const C = t.map((L) => L.join(",")).join(`\r
`), z = new Blob([b + C], { type: "text/csv;charset=utf-8" }), w = URL.createObjectURL(z), k = document.createElement("a");
      k.href = w, k.download = "zaprei-modelo-importacao.csv", k.click(), URL.revokeObjectURL(w);
    }
    async function g(C) {
      const z = C.target.files?.[0];
      if (z) {
        y.value = !0, a.value = "", s.value = "";
        try {
          const { imported: w } = await Te.importContacts(z);
          s.value = `${w} contato(s) importado(s).`, await m();
        } catch (w) {
          a.value = w.message;
        } finally {
          y.value = !1, C.target.value = "";
        }
      }
    }
    async function _(C) {
      if (window.confirm(`Remover ${C.name}?`)) {
        a.value = "";
        try {
          await Te.deleteContact(C.id), await m();
        } catch (z) {
          a.value = z.message;
        }
      }
    }
    return (C, z) => ($(), T("div", p5, [
      l("div", h5, [
        z[6] || (z[6] = l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        l("div", m5, [
          l("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: E
          }, [
            Z(I(Yd), { class: "h-4 w-4" }),
            z[5] || (z[5] = l("span", null, "Baixar exemplo", -1))
          ]),
          l("label", {
            class: K(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            Z(I(rf), { class: "h-4 w-4" }),
            l("span", null, V(y.value ? "Importando…" : "Importar CSV"), 1),
            l("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: g
            }, null, 40, v5)
          ], 2)
        ])
      ]),
      l("div", g5, [
        l("div", y5, [
          l("div", b5, V(o.value.all), 1),
          z[7] || (z[7] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        l("div", x5, [
          l("div", w5, V(o.value.buyers), 1),
          z[8] || (z[8] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        l("div", _5, [
          l("div", k5, V(o.value.imported), 1),
          z[9] || (z[9] = l("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      l("div", S5, [
        l("div", null, [
          z[11] || (z[11] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          le(l("select", {
            "onUpdate:modelValue": z[0] || (z[0] = (w) => c.value = w),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [...z[10] || (z[10] = [
            l("option", { value: "all" }, "Todas as origens", -1),
            l("option", { value: "buyer" }, "Apenas compradores", -1),
            l("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [lt, c.value]
          ])
        ]),
        l("div", E5, [
          z[12] || (z[12] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          Z(ur, {
            modelValue: u.value,
            "onUpdate:modelValue": z[1] || (z[1] = (w) => u.value = w),
            mode: d.value,
            "onUpdate:mode": z[2] || (z[2] = (w) => d.value = w),
            options: h.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        l("div", $5, [
          z[13] || (z[13] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          Z(ur, {
            modelValue: f.value,
            "onUpdate:modelValue": z[3] || (z[3] = (w) => f.value = w),
            options: h.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        le(l("input", {
          "onUpdate:modelValue": z[4] || (z[4] = (w) => v.value = w),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [xe, v.value]
        ]),
        l("span", z5, V(p.value.length) + " de " + V(n.value.length) + " contato(s)", 1)
      ]),
      z[17] || (z[17] = l("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        Be(" O CSV aceita as colunas "),
        l("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        Be(" (máximo de 10 MB). ")
      ], -1)),
      a.value ? ($(), T("p", P5, V(a.value), 1)) : s.value ? ($(), T("p", C5, V(s.value), 1)) : te("", !0),
      i.value ? ($(), T("div", A5, [
        Z(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        z[14] || (z[14] = l("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : p.value.length ? ($(), T("div", N5, [
        l("table", I5, [
          z[16] || (z[16] = l("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            l("tr", null, [
              l("th", { class: "px-3 py-2.5" }, "Contato"),
              l("th", { class: "px-3 py-2.5" }, "Telefone"),
              l("th", { class: "px-3 py-2.5" }, "E-mail"),
              l("th", { class: "px-3 py-2.5" }, "Origem"),
              l("th", { class: "px-3 py-2.5" }, "Produtos"),
              l("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          l("tbody", R5, [
            ($(!0), T(ge, null, Oe(p.value, (w) => ($(), T("tr", {
              key: w.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              l("td", M5, V(w.name), 1),
              l("td", D5, V(w.phone), 1),
              l("td", F5, V(w.email || "—"), 1),
              l("td", B5, [
                l("span", {
                  class: K(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", w.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, V(w.origin), 3)
              ]),
              l("td", L5, [
                w.products.length ? ($(), T("div", U5, [
                  ($(!0), T(ge, null, Oe(w.products.slice(0, 2), (k) => ($(), T("span", {
                    key: k,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: k
                  }, V(k), 9, q5))), 128)),
                  w.products.length > 2 ? ($(), T("span", V5, "+" + V(w.products.length - 2), 1)) : te("", !0)
                ])) : ($(), T("span", j5, "—"))
              ]),
              l("td", H5, [
                w.can_delete ? ($(), T("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (k) => _(w)
                }, [
                  Z(I(Xo), { class: "h-3.5 w-3.5" })
                ], 8, G5)) : te("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : ($(), T("div", T5, [
        l("div", O5, [
          Z(I(bs), { class: "h-6 w-6" })
        ]),
        z[15] || (z[15] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, X5 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, Y5 = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, K5 = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, Z5 = { class: "flex items-center gap-3" }, J5 = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, Q5 = { class: "flex items-center gap-2" }, eE = { key: 1 }, tE = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, nE = { class: "flex-1 overflow-y-auto p-6" }, rE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, oE = { class: "space-y-2" }, iE = { class: "grid grid-cols-2 gap-3" }, aE = { class: "flex items-center gap-2" }, sE = { class: "flex items-center gap-2" }, lE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, uE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, cE = ["value"], dE = { class: "space-y-2" }, fE = { class: "grid grid-cols-2 gap-3" }, pE = { class: "flex items-center gap-2" }, hE = { class: "flex items-center gap-2" }, mE = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, vE = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, gE = ["min"], yE = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, bE = { class: "flex items-center justify-between" }, xE = { class: "flex items-center gap-2" }, wE = { class: "text-xs font-bold text-emerald-400" }, _E = {
  key: 1,
  class: "space-y-4"
}, kE = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, SE = { class: "dark space-y-3" }, EE = { class: "relative" }, $E = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, zE = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, PE = { class: "text-xs font-normal text-zinc-500" }, CE = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, AE = { class: "w-full text-left text-xs" }, TE = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, OE = { class: "w-10 px-3 py-2.5 text-center" }, NE = ["checked"], IE = { class: "divide-y divide-zinc-800/60" }, RE = ["onClick"], ME = ["checked", "onChange"], DE = { class: "px-3 py-2" }, FE = { class: "font-medium text-white" }, BE = { class: "text-[11px] text-zinc-500" }, LE = { class: "px-3 py-2 font-mono text-zinc-300" }, UE = { class: "px-3 py-2" }, qE = { class: "px-3 py-2" }, VE = { class: "flex max-w-[200px] flex-wrap gap-1" }, jE = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, HE = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, GE = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, WE = { key: 2 }, XE = {
  key: 0,
  class: "mx-auto max-w-xl space-y-4 py-2"
}, YE = { class: "rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-6" }, KE = { class: "flex items-center gap-3 border-b border-zinc-800 pb-4" }, ZE = { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400" }, JE = { class: "text-base font-bold text-white" }, QE = { class: "mt-4 space-y-3 text-xs text-zinc-300" }, e$ = { class: "flex justify-between" }, t$ = { class: "font-medium text-white" }, n$ = { class: "flex justify-between" }, r$ = { class: "font-medium text-emerald-400" }, o$ = { class: "flex justify-between" }, i$ = {
  key: 1,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, a$ = { class: "dark" }, s$ = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, l$ = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, u$ = { class: "grid grid-cols-2 gap-3 text-xs" }, c$ = { class: "mt-0.5 font-semibold text-white" }, d$ = { class: "mt-0.5 text-base font-black text-emerald-400" }, f$ = { class: "mt-0.5 text-zinc-300" }, p$ = { class: "text-xs text-zinc-500" }, h$ = {
  key: 0,
  class: "mt-1 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs font-semibold text-emerald-400"
}, m$ = {
  key: 1,
  class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300"
}, v$ = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, g$ = { key: 1 }, y$ = { class: "flex items-center gap-3" }, b$ = ["disabled"], x$ = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = Y(1), o = Y(!1), i = Y(""), a = Y([]), s = Y([]), c = Y([]), u = Y(!1), d = Y("all"), f = Y([]), v = Y("or"), y = Y([]), h = Y(""), p = Y({
      name: "",
      action_type: "message",
      flow_id: null,
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" }
    }), m = J(() => c.value.find((N) => N.id === p.value.flow_id)), b = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), E = pp.filter((N) => N.token.startsWith("{{customer."));
    let g = !0;
    Ne(() => p.value.message_data.mode, (N) => {
      if (g) {
        g = !1;
        return;
      }
      Object.assign(p.value.message_data, bp(N));
    });
    const _ = J(() => s.value.map((N) => ({ value: N.name, label: N.name }))), C = J(() => {
      const N = h.value.trim().toLowerCase();
      return a.value.filter((x) => d.value === "buyers" && x.source !== "buyer" || d.value === "imported" && x.source !== "imported" || f.value.length && !(v.value === "and" ? f.value.every((Q) => x.products.includes(Q)) : x.products.some((Q) => f.value.includes(Q))) || y.value.length && x.products.some((U) => y.value.includes(U)) ? !1 : !N || `${x.name} ${x.phone}`.toLowerCase().includes(N));
    }), z = J(() => C.value.length > 0 && C.value.every((N) => p.value.selected_contact_keys.includes(N.id)));
    function w(N) {
      const x = p.value.selected_contact_keys;
      p.value.selected_contact_keys = x.includes(N) ? x.filter((U) => U !== N) : [...x, N];
    }
    function k() {
      const N = C.value.map((x) => x.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...N])];
    }
    function L() {
      const N = new Set(C.value.map((x) => x.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((x) => !N.has(x));
    }
    const D = J(() => a.value.find((x) => p.value.selected_contact_keys.includes(x.id)) || { name: "Cliente" }), M = J(() => ({
      customer: { name: D.value.name, first_name: (D.value.name || "").split(" ")[0] || D.value.name }
    })), A = J(() => {
      const N = p.value.message_data;
      return Is(N.text || N.question || N.title || "", M.value);
    }), q = J(() => Is(p.value.message_data.caption || "", M.value));
    async function S() {
      u.value = !0;
      try {
        const [N, x, U] = await Promise.all([
          Te.contacts(),
          Te.products(),
          Te.flows()
        ]);
        a.value = N.contacts || [], s.value = x.products || [], c.value = U.flows || [];
      } catch {
        a.value = [];
      } finally {
        u.value = !1;
      }
    }
    function F() {
      if (i.value = "", r.value === 1) {
        if (!p.value.name.trim()) {
          i.value = "Informe um nome para a campanha.";
          return;
        }
        if (p.value.action_type === "flow" && !p.value.flow_id) {
          i.value = "Selecione o fluxo de automação que deseja disparar.";
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
      if (r.value === 3)
        if (p.value.action_type === "flow") {
          if (!p.value.flow_id) {
            i.value = "Selecione um fluxo de automação para disparar.";
            return;
          }
        } else {
          const N = Rs(p.value.message_data, "Mensagem");
          if (N.length) {
            i.value = N[0];
            return;
          }
          if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
            i.value = "Escreva o texto da mensagem antes de avançar.";
            return;
          }
        }
      r.value++;
    }
    async function P() {
      if (i.value = "", p.value.action_type === "flow") {
        if (!p.value.flow_id) {
          i.value = "Selecione um fluxo de automação para disparar.", r.value = 1;
          return;
        }
      } else {
        const N = Rs(p.value.message_data, "Mensagem");
        if (N.length) {
          i.value = N[0], r.value = 3;
          return;
        }
        if (p.value.message_data.mode === "text" && !p.value.message_data.text?.trim()) {
          i.value = "Escreva o texto da mensagem antes de iniciar o disparo.", r.value = 3;
          return;
        }
      }
      o.value = !0;
      try {
        await Te.createCampaign({
          name: p.value.name,
          flow_id: p.value.action_type === "flow" ? p.value.flow_id : null,
          message_data: p.value.action_type === "message" ? p.value.message_data : null,
          contact_ids: p.value.selected_contact_keys,
          throttle_seconds: p.value.throttle_seconds,
          scheduled_at: p.value.schedule_mode === "scheduled" ? p.value.scheduled_at : null
        }), n("created"), n("close");
      } catch (N) {
        i.value = N.message;
      } finally {
        o.value = !1;
      }
    }
    return Ze(S), (N, x) => ($(), T("div", X5, [
      l("div", Y5, [
        l("div", K5, [
          l("div", Z5, [
            l("div", J5, [
              Z(I(Gt), { class: "h-5 w-5" })
            ]),
            x[17] || (x[17] = l("div", null, [
              l("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              l("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          l("div", Q5, [
            ($(), T(ge, null, Oe(4, (U) => l("div", {
              key: U,
              class: K(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === U ? "bg-emerald-500 text-zinc-950" : r.value > U ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > U ? ($(), Re(I(Wd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : ($(), T("span", eE, V(U), 1))
            ], 2)), 64))
          ])
        ]),
        i.value ? ($(), T("div", tE, [
          Z(I(tl), { class: "h-4 w-4 shrink-0" }),
          l("span", null, V(i.value), 1)
        ])) : te("", !0),
        l("div", nE, [
          r.value === 1 ? ($(), T("div", rE, [
            l("div", null, [
              x[18] || (x[18] = l("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              le(l("input", {
                id: "zr-name",
                "onUpdate:modelValue": x[0] || (x[0] = (U) => p.value.name = U),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [xe, p.value.name]
              ]),
              x[19] || (x[19] = l("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            l("div", oE, [
              x[27] || (x[27] = l("label", { class: "block text-xs font-semibold text-zinc-300" }, "Tipo de Envio da Campanha *", -1)),
              l("div", iE, [
                l("button", {
                  type: "button",
                  class: K(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "message" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[1] || (x[1] = (U) => p.value.action_type = "message")
                }, [
                  l("div", aE, [
                    Z(I(Gt), { class: "h-4 w-4 text-emerald-400" }),
                    x[20] || (x[20] = l("span", { class: "text-xs font-bold" }, "Mensagem Avulsa", -1))
                  ]),
                  x[21] || (x[21] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Texto, botões, mídia ou enquete avulsa.", -1))
                ], 2),
                l("button", {
                  type: "button",
                  class: K(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.action_type === "flow" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[2] || (x[2] = (U) => p.value.action_type = "flow")
                }, [
                  l("div", sE, [
                    Z(I(Tr), { class: "h-4 w-4 text-emerald-400" }),
                    x[22] || (x[22] = l("span", { class: "text-xs font-bold" }, "Disparar Fluxo", -1))
                  ]),
                  x[23] || (x[23] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Executa uma automação visual completa.", -1))
                ], 2)
              ]),
              p.value.action_type === "flow" ? ($(), T("div", lE, [
                l("label", uE, [
                  Z(I(Tr), { class: "h-3.5 w-3.5" }),
                  x[24] || (x[24] = l("span", null, "Fluxo de Automação a Disparar *", -1))
                ]),
                le(l("select", {
                  "onUpdate:modelValue": x[3] || (x[3] = (U) => p.value.flow_id = U),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [
                  x[25] || (x[25] = l("option", { value: null }, "Selecione um fluxo...", -1)),
                  ($(!0), T(ge, null, Oe(c.value, (U) => ($(), T("option", {
                    key: U.id,
                    value: U.id
                  }, V(U.name) + " (" + V(U.trigger_event || "Personalizado") + ") ", 9, cE))), 128))
                ], 512), [
                  [lt, p.value.flow_id]
                ]),
                x[26] || (x[26] = l("p", { class: "text-[11px] text-zinc-400" }, " Cada contato selecionado iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])) : te("", !0)
            ]),
            l("div", dE, [
              x[34] || (x[34] = l("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              l("div", fE, [
                l("button", {
                  type: "button",
                  class: K(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[4] || (x[4] = (U) => p.value.schedule_mode = "immediate")
                }, [
                  l("div", pE, [
                    Z(I(Bn), { class: "h-4 w-4 text-emerald-400" }),
                    x[28] || (x[28] = l("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  x[29] || (x[29] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                l("button", {
                  type: "button",
                  class: K(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: x[5] || (x[5] = (U) => p.value.schedule_mode = "scheduled")
                }, [
                  l("div", hE, [
                    Z(I(Ji), { class: "h-4 w-4 text-emerald-400" }),
                    x[30] || (x[30] = l("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  x[31] || (x[31] = l("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? ($(), T("div", mE, [
                l("label", vE, [
                  Z(I(Wo), { class: "h-3.5 w-3.5" }),
                  x[32] || (x[32] = l("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                le(l("input", {
                  "onUpdate:modelValue": x[6] || (x[6] = (U) => p.value.scheduled_at = U),
                  type: "datetime-local",
                  min: b.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, gE), [
                  [xe, p.value.scheduled_at]
                ]),
                x[33] || (x[33] = l("p", { class: "text-[11px] text-zinc-400" }, [
                  Be(" A campanha ficará com status "),
                  l("strong", { class: "text-purple-400" }, "Agendada"),
                  Be(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : te("", !0)
            ]),
            l("div", yE, [
              l("div", bE, [
                l("div", xE, [
                  Z(I(Nh), { class: "h-4 w-4 text-emerald-400" }),
                  x[35] || (x[35] = l("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                l("span", wE, V(p.value.throttle_seconds) + " segundos", 1)
              ]),
              le(l("input", {
                "onUpdate:modelValue": x[7] || (x[7] = (U) => p.value.throttle_seconds = U),
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
              x[36] || (x[36] = l("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? ($(), T("div", _E, [
            l("div", kE, [
              l("div", SE, [
                l("div", null, [
                  x[37] || (x[37] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  Z(ur, {
                    modelValue: f.value,
                    "onUpdate:modelValue": x[8] || (x[8] = (U) => f.value = U),
                    mode: v.value,
                    "onUpdate:mode": x[9] || (x[9] = (U) => v.value = U),
                    options: _.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                l("div", null, [
                  x[38] || (x[38] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  Z(ur, {
                    modelValue: y.value,
                    "onUpdate:modelValue": x[10] || (x[10] = (U) => y.value = U),
                    options: _.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  x[39] || (x[39] = l("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              l("div", null, [
                x[41] || (x[41] = l("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                le(l("select", {
                  "onUpdate:modelValue": x[11] || (x[11] = (U) => d.value = U),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...x[40] || (x[40] = [
                  l("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  l("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  l("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [lt, d.value]
                ]),
                x[42] || (x[42] = l("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                l("div", EE, [
                  Z(I(Lr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  le(l("input", {
                    "onUpdate:modelValue": x[12] || (x[12] = (U) => h.value = U),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [xe, h.value]
                  ])
                ])
              ]),
              l("div", $E, [
                l("div", null, [
                  x[43] || (x[43] = l("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  l("div", zE, [
                    Be(V(p.value.selected_contact_keys.length) + " ", 1),
                    l("span", PE, "de " + V(C.value.length) + " filtrados", 1)
                  ])
                ]),
                l("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  l("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: k
                  }, "Selecionar Todos"),
                  x[44] || (x[44] = l("span", { class: "text-zinc-600" }, "•", -1)),
                  l("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: L
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            l("div", CE, [
              l("table", AE, [
                l("thead", TE, [
                  l("tr", null, [
                    l("th", OE, [
                      l("input", {
                        type: "checkbox",
                        checked: z.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: x[13] || (x[13] = (U) => z.value ? L() : k())
                      }, null, 40, NE)
                    ]),
                    x[45] || (x[45] = l("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    x[46] || (x[46] = l("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    x[47] || (x[47] = l("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    x[48] || (x[48] = l("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                l("tbody", IE, [
                  ($(!0), T(ge, null, Oe(C.value, (U) => ($(), T("tr", {
                    key: U.id,
                    class: K(["cursor-pointer transition", p.value.selected_contact_keys.includes(U.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (Q) => w(U.id)
                  }, [
                    l("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: x[14] || (x[14] = tn(() => {
                      }, ["stop"]))
                    }, [
                      l("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(U.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (Q) => w(U.id)
                      }, null, 40, ME)
                    ]),
                    l("td", DE, [
                      l("div", FE, V(U.name), 1),
                      l("div", BE, V(U.email || "-"), 1)
                    ]),
                    l("td", LE, V(U.phone), 1),
                    l("td", UE, [
                      l("span", {
                        class: K(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", U.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, V(U.origin), 3)
                    ]),
                    l("td", qE, [
                      l("div", VE, [
                        ($(!0), T(ge, null, Oe(U.products.slice(0, 2), (Q) => ($(), T("span", {
                          key: Q,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, V(Q), 1))), 128)),
                        U.products.length > 2 ? ($(), T("span", jE, "+" + V(U.products.length - 2), 1)) : te("", !0)
                      ])
                    ])
                  ], 10, RE))), 128))
                ])
              ]),
              u.value ? ($(), T("p", HE, "Carregando contatos...")) : C.value.length ? te("", !0) : ($(), T("p", GE, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? ($(), T("div", WE, [
            p.value.action_type === "flow" ? ($(), T("div", XE, [
              l("div", YE, [
                l("div", KE, [
                  l("div", ZE, [
                    Z(I(Tr), { class: "h-6 w-6" })
                  ]),
                  l("div", null, [
                    x[49] || (x[49] = l("span", { class: "text-[10px] font-bold uppercase tracking-wider text-emerald-400" }, "Fluxo de Automação Selecionado", -1)),
                    l("h4", JE, V(m.value?.name || "Nenhum fluxo selecionado"), 1)
                  ])
                ]),
                l("div", QE, [
                  l("div", e$, [
                    x[50] || (x[50] = l("span", { class: "text-zinc-500" }, "Gatilho do Fluxo:", -1)),
                    l("span", t$, V(m.value?.trigger_event || "Disparo Direto"), 1)
                  ]),
                  l("div", n$, [
                    x[51] || (x[51] = l("span", { class: "text-zinc-500" }, "Blocos de Ação:", -1)),
                    l("span", r$, V(m.value?.graph_json?.nodes?.length || 0) + " blocos configurados", 1)
                  ]),
                  l("div", o$, [
                    x[52] || (x[52] = l("span", { class: "text-zinc-500" }, "Status:", -1)),
                    l("span", {
                      class: K(["rounded-full px-2 py-0.5 text-[10px] font-semibold", m.value?.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"])
                    }, V(m.value?.is_active ? "Ativo" : "Pausado"), 3)
                  ])
                ]),
                x[53] || (x[53] = l("p", { class: "mt-5 rounded-xl bg-zinc-900/80 p-3 text-[11px] text-zinc-400" }, " Cada contato selecionado no Passo 2 iniciará este fluxo respeitando o intervalo anti-bloqueio configurado. ", -1))
              ])
            ])) : ($(), T("div", i$, [
              l("div", a$, [
                Z(_p, {
                  data: p.value.message_data,
                  "show-recipient": !1,
                  variables: I(E)
                }, null, 8, ["data", "variables"])
              ]),
              l("div", null, [
                x[54] || (x[54] = l("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
                Z(ml, {
                  text: A.value,
                  caption: q.value,
                  mode: p.value.message_data.mode,
                  "recipient-name": D.value.name
                }, null, 8, ["text", "caption", "mode", "recipient-name"])
              ])
            ]))
          ])) : r.value === 4 ? ($(), T("div", s$, [
            l("div", l$, [
              x[59] || (x[59] = l("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              l("div", u$, [
                l("div", null, [
                  x[55] || (x[55] = l("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  l("p", c$, V(p.value.name), 1)
                ]),
                l("div", null, [
                  x[56] || (x[56] = l("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  l("p", d$, V(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                l("div", null, [
                  x[57] || (x[57] = l("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  l("p", {
                    class: K(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    ($(), Re(Tt(p.value.schedule_mode === "scheduled" ? I(Ji) : I(Bn)), { class: "h-3.5 w-3.5" })),
                    l("span", null, V(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                l("div", null, [
                  x[58] || (x[58] = l("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  l("p", f$, "~" + V(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              l("div", null, [
                l("span", p$, V(p.value.action_type === "flow" ? "Fluxo a Disparar:" : `Conteúdo da Mensagem (${p.value.message_data.mode}):`), 1),
                p.value.action_type === "flow" ? ($(), T("div", h$, " ⚡ " + V(m.value?.name || "Fluxo selecionado"), 1)) : ($(), T("div", m$, V(A.value || q.value || "—"), 1))
              ])
            ])
          ])) : te("", !0)
        ]),
        l("div", v$, [
          r.value > 1 ? ($(), T("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: x[15] || (x[15] = (U) => r.value--)
          }, [
            Z(I(Gd), { class: "mr-2 h-4 w-4" }),
            x[60] || (x[60] = l("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : ($(), T("div", g$)),
          l("div", y$, [
            l("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: x[16] || (x[16] = (U) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? ($(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: F
            }, [
              x[61] || (x[61] = l("span", null, "Próximo", -1)),
              Z(I(kh), { class: "ml-2 h-4 w-4" })
            ])) : ($(), T("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: K(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: P
            }, [
              o.value ? ($(), Re(I(En), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : ($(), Re(Tt(p.value.schedule_mode === "scheduled" ? I(Ji) : I(Gt)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              l("span", null, V(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, b$))
          ])
        ])
      ])
    ]));
  }
}, w$ = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, _$ = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, k$ = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, S$ = { class: "flex items-center gap-3" }, E$ = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, $$ = { class: "text-lg font-bold text-white" }, z$ = { class: "mt-0.5 text-xs text-zinc-400" }, P$ = {
  key: 0,
  class: "text-zinc-500"
}, C$ = { class: "flex items-center gap-2" }, A$ = ["disabled"], T$ = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, O$ = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, N$ = { class: "border-b border-zinc-800 bg-zinc-950/80 px-6 py-4" }, I$ = { class: "flex items-center justify-between text-xs" }, R$ = { class: "flex items-center gap-2" }, M$ = {
  key: 0,
  class: "relative flex h-2.5 w-2.5"
}, D$ = { class: "font-bold text-white" }, F$ = { class: "font-mono font-bold text-emerald-400" }, B$ = { class: "mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-800" }, L$ = { class: "mt-2 flex items-center justify-between text-[11px] text-zinc-500" }, U$ = {
  key: 0,
  class: "text-amber-400/90 font-medium"
}, q$ = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, V$ = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, j$ = { class: "mt-0.5 text-xl font-bold text-white" }, H$ = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, G$ = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, W$ = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, X$ = { class: "mt-0.5 text-xl font-bold text-amber-400" }, Y$ = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, K$ = { class: "mt-0.5 text-xl font-bold text-red-400" }, Z$ = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, J$ = { class: "relative max-w-sm flex-1" }, Q$ = { class: "flex-1 overflow-y-auto p-6" }, ez = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, tz = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, nz = { class: "w-full text-left text-xs" }, rz = { class: "divide-y divide-zinc-800/60" }, oz = { class: "px-4 py-3" }, iz = { class: "font-medium text-white" }, az = ["title"], sz = { class: "px-4 py-3 font-mono text-zinc-300" }, lz = { class: "px-4 py-3" }, uz = { class: "px-4 py-3 text-right text-zinc-400" }, cz = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(null), i = Y([]), a = Y(!0), s = Y(!1), c = Y(""), u = Y(""), d = Y(""), f = J(() => {
      const m = u.value.trim().toLowerCase();
      return i.value.filter((b) => d.value && b.status !== d.value ? !1 : !m || `${b.name || ""} ${b.phone}`.toLowerCase().includes(m));
    }), v = (m) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[m] || "border-blue-500/20 bg-blue-500/10 text-blue-400", y = J(() => {
      if (!o.value || !o.value.total_recipients) return 0;
      const m = (o.value.sent_count || 0) + (o.value.error_count || 0);
      return Math.min(100, Math.round(m / o.value.total_recipients * 100));
    });
    async function h() {
      a.value = !0, c.value = "";
      try {
        const m = await Te.campaign(n.campaignId);
        o.value = m.campaign, i.value = m.sends || [];
      } catch (m) {
        c.value = m.message;
      } finally {
        a.value = !1;
      }
    }
    async function p() {
      s.value = !0, c.value = "";
      try {
        await Te.cancelCampaign(n.campaignId), r("changed"), await h();
      } catch (m) {
        c.value = m.message;
      } finally {
        s.value = !1;
      }
    }
    return Ze(h), (m, b) => ($(), T("div", w$, [
      l("div", _$, [
        l("div", k$, [
          l("div", S$, [
            l("div", E$, [
              Z(I(Lr), { class: "h-5 w-5" })
            ]),
            l("div", null, [
              l("div", $$, V(o.value?.name || "Campanha"), 1),
              l("p", z$, [
                l("span", null, V(o.value ? I(wp)[o.value.status] || o.value.status : "—"), 1),
                o.value?.message ? ($(), T("span", P$, " • " + V(o.value.message), 1)) : te("", !0)
              ])
            ])
          ]),
          l("div", C$, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? ($(), T("button", {
              key: 0,
              type: "button",
              disabled: s.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              Z(I(Sh), { class: "h-3.5 w-3.5" }),
              l("span", null, V(s.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, A$)) : te("", !0),
            l("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: b[0] || (b[0] = (E) => r("close"))
            }, [
              Z(I(Ct), { class: "h-4 w-4" })
            ])
          ])
        ]),
        a.value ? ($(), T("p", T$, "Carregando detalhes…")) : c.value ? ($(), T("p", O$, V(c.value), 1)) : o.value ? ($(), T(ge, { key: 2 }, [
          l("div", N$, [
            l("div", I$, [
              l("div", R$, [
                o.value.status === "running" ? ($(), T("span", M$, [...b[3] || (b[3] = [
                  l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                  l("span", { class: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" }, null, -1)
                ])])) : te("", !0),
                l("span", D$, V(o.value.status === "running" ? "Disparando mensagens em segundo plano..." : o.value.status === "completed" ? "Envio finalizado com sucesso" : "Progresso do envio"), 1)
              ]),
              l("span", F$, V(y.value) + "%", 1)
            ]),
            l("div", B$, [
              l("div", {
                class: K(["h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500", { "animate-pulse": o.value.status === "running" }]),
                style: vt({ width: `${y.value}%` })
              }, null, 6)
            ]),
            l("div", L$, [
              l("span", null, V(o.value.sent_count) + " de " + V(o.value.total_recipients) + " entregues", 1),
              o.value.throttle_mode === "random" && o.value.status === "running" ? ($(), T("span", U$, " 🛡️ Intervalo randômico (jitter) ativo ")) : te("", !0)
            ])
          ]),
          l("div", q$, [
            l("div", V$, [
              b[4] || (b[4] = l("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              l("div", j$, V(o.value.total_recipients), 1)
            ]),
            l("div", H$, [
              b[5] || (b[5] = l("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              l("div", G$, V(o.value.sent_count), 1)
            ]),
            l("div", W$, [
              b[6] || (b[6] = l("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              l("div", X$, V(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            l("div", Y$, [
              b[7] || (b[7] = l("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              l("div", K$, V(o.value.error_count), 1)
            ])
          ]),
          l("div", Z$, [
            l("div", J$, [
              Z(I(Lr), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              le(l("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (E) => u.value = E),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [xe, u.value]
              ])
            ]),
            le(l("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (E) => d.value = E),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...b[8] || (b[8] = [
              Ud('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [lt, d.value]
            ])
          ]),
          l("div", Q$, [
            f.value.length ? ($(), T("div", tz, [
              l("table", nz, [
                b[9] || (b[9] = l("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  l("tr", null, [
                    l("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    l("th", { class: "px-4 py-2.5" }, "Telefone"),
                    l("th", { class: "px-4 py-2.5" }, "Status"),
                    l("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                l("tbody", rz, [
                  ($(!0), T(ge, null, Oe(f.value, (E) => ($(), T("tr", {
                    key: E.id
                  }, [
                    l("td", oz, [
                      l("div", iz, V(E.name || "—"), 1),
                      E.error_message ? ($(), T("div", {
                        key: 0,
                        title: E.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, V(E.error_message), 9, az)) : te("", !0)
                    ]),
                    l("td", sz, V(E.phone), 1),
                    l("td", lz, [
                      l("span", {
                        class: K(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(E.status)])
                      }, V(I(iw)[E.status] || E.status), 3)
                    ]),
                    l("td", uz, V(E.sent_at ? new Date(E.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : ($(), T("div", ez, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : te("", !0)
      ])
    ]));
  }
}, dz = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, fz = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, pz = { class: "relative w-64" }, hz = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, mz = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, vz = {
  key: 2,
  class: "py-10 text-center"
}, gz = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, yz = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, bz = { class: "w-full text-left text-xs" }, xz = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, wz = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, _z = { class: "px-3 py-2.5" }, kz = {
  key: 0,
  class: "relative flex h-1.5 w-1.5"
}, Sz = { class: "px-3 py-2.5" }, Ez = { class: "px-3 py-2.5" }, $z = { class: "flex items-center gap-2" }, zz = { class: "font-semibold text-emerald-600 dark:text-emerald-400" }, Pz = { class: "hidden sm:block h-1.5 w-14 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800" }, Cz = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, Az = { class: "px-3 py-2.5" }, Tz = ["onClick"], Oz = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = Y([]), n = Y(!0), r = Y(""), o = Y(""), i = Y(!1), a = Y(null), s = (d) => ({
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
    return Ze(u), (d, f) => ($(), T("div", dz, [
      l("div", fz, [
        l("div", pz, [
          Z(I(Lr), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          le(l("input", {
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
          Z(I(ef), { class: "h-4 w-4" }),
          f[4] || (f[4] = l("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? ($(), T("p", hz, V(r.value), 1)) : te("", !0),
      n.value ? ($(), T("div", mz, [
        Z(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = l("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : c.value.length ? ($(), T("div", yz, [
        l("table", bz, [
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
          l("tbody", xz, [
            ($(!0), T(ge, null, Oe(c.value, (v) => ($(), T("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              l("td", wz, V(v.name), 1),
              l("td", _z, [
                l("span", {
                  class: K(["inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold", s(v.status)])
                }, [
                  v.status === "running" ? ($(), T("span", kz, [...f[7] || (f[7] = [
                    l("span", { class: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }, null, -1),
                    l("span", { class: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)
                  ])])) : te("", !0),
                  Be(" " + V(I(wp)[v.status] || v.status), 1)
                ], 2)
              ]),
              l("td", Sz, V(v.total_recipients), 1),
              l("td", Ez, [
                l("div", $z, [
                  l("span", zz, V(v.sent_count) + "/" + V(v.total_recipients), 1),
                  l("div", Pz, [
                    l("div", {
                      class: "h-full rounded-full bg-emerald-500 transition-all duration-300",
                      style: vt({ width: `${v.total_recipients ? Math.min(100, Math.round(v.sent_count / v.total_recipients * 100)) : 0}%` })
                    }, null, 4)
                  ])
                ])
              ]),
              l("td", {
                class: K(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, V(v.error_count), 3),
              l("td", Cz, V(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              l("td", Az, [
                l("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => a.value = v.id
                }, [
                  Z(I($h), { class: "h-3.5 w-3.5" }),
                  f[8] || (f[8] = l("span", null, "Detalhes", -1))
                ], 8, Tz)
              ])
            ]))), 128))
          ])
        ])
      ])) : ($(), T("div", vz, [
        l("div", gz, [
          Z(I(Gt), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      i.value ? ($(), Re(x$, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => i.value = !1),
        onCreated: u
      })) : te("", !0),
      a.value ? ($(), Re(cz, {
        key: 5,
        "campaign-id": a.value,
        onClose: f[3] || (f[3] = (v) => a.value = null),
        onChanged: u
      }, null, 8, ["campaign-id"])) : te("", !0)
    ]));
  }
}, Nz = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Iz = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Rz = ["disabled"], Mz = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Dz = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, Fz = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, Bz = {
  key: 3,
  class: "py-10 text-center"
}, Lz = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, Uz = {
  key: 4,
  class: "mt-4 space-y-2"
}, qz = { class: "flex items-center gap-3" }, Vz = { class: "font-semibold text-zinc-900 dark:text-white" }, jz = { class: "text-zinc-500 dark:text-zinc-400" }, Hz = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, Gz = ["title"], Wz = ["title"], Xz = { class: "flex items-center gap-2" }, Yz = ["disabled", "onClick"], Kz = {
  __name: "RunsPanel",
  setup(e) {
    const t = Y([]), n = Y(!0), r = Y(""), o = Y(""), i = Y(null), a = (d) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[d] || "bg-amber-500", s = (d) => ({
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
    return Ze(c), (d, f) => ($(), T("div", Nz, [
      l("div", Iz, [
        f[0] || (f[0] = l("div", null, [
          l("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        l("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: c
        }, " Atualizar ", 8, Rz)
      ]),
      r.value ? ($(), T("p", Mz, V(r.value), 1)) : o.value ? ($(), T("p", Dz, V(o.value), 1)) : te("", !0),
      n.value ? ($(), T("div", Fz, [
        Z(I(En), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = l("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? ($(), T("div", Uz, [
        ($(!0), T(ge, null, Oe(t.value, (v) => ($(), T("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          l("div", qz, [
            l("span", {
              class: K(["h-2 w-2 rounded-full", a(v.status)])
            }, null, 2),
            l("div", null, [
              l("div", Vz, "Fluxo #" + V(v.flow_id), 1),
              l("div", jz, V(I(Do)(v.event_class)) + " • " + V(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? ($(), T("div", Hz, [
                Z(I(Ph), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                l("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + V(v.context.last_reply) + "”", 9, Gz)
              ])) : te("", !0),
              v.last_error ? ($(), T("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, V(v.last_error), 9, Wz)) : te("", !0)
            ])
          ]),
          l("div", Xz, [
            v.status === "failed" ? ($(), T("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: i.value === v.id,
              onClick: (y) => u(v)
            }, [
              Z(I(Th), {
                class: K(["h-3 w-3", { "animate-spin": i.value === v.id }])
              }, null, 8, ["class"]),
              l("span", null, V(i.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, Yz)) : te("", !0),
            l("span", {
              class: K(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", s(v.status)])
            }, V(I(aw)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : ($(), T("div", Bz, [
        l("div", Lz, [
          Z(I(Kd), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = l("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, Zz = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, Jz = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, Qz = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, eP = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, tP = { class: "flex flex-wrap items-center gap-3" }, nP = { class: "text-xs font-bold" }, rP = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, oP = { class: "mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800" }, iP = { class: "flex items-center justify-between" }, aP = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400" }, sP = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, lP = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, uP = { class: "flex items-center justify-between" }, cP = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400" }, dP = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, fP = { class: "flex items-center justify-between" }, pP = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400" }, hP = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, mP = { class: "flex items-center justify-between" }, vP = { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400" }, gP = { class: "mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white" }, yP = { class: "mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, bP = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, xP = ["onClick"], wP = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, _P = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: Bn, component: f5 },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Gt, component: Oz },
      { id: "contacts", label: "Base de Contatos", icon: bs, component: W5 },
      { id: "runs", label: "Execuções", icon: Kd, component: Kz },
      { id: "connection", label: "Conexão", icon: Qd, component: of }
    ], n = Y("flows"), r = Y(null), o = Y({ flows: 0, campaigns: 0, contacts: 0 }), i = Y({
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
        ]), y = u.flows || [], h = d.campaigns || [], p = v.runs || [], m = f.counts?.all || 0;
        o.value = {
          flows: y.length,
          campaigns: h.length,
          contacts: m
        };
        const b = y.filter((_) => _.is_active).length, E = p.filter((_) => _.status === "completed").length, g = p.length ? Math.round(E / p.length * 100) : 100;
        i.value = {
          flowsCount: y.length,
          activeFlowsCount: b,
          campaignsCount: h.length,
          contactsCount: m,
          runsCount: p.length,
          runsSuccessRate: g
        };
      } catch {
      }
    }
    const c = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ze(() => {
      a(), s();
    }), (u, d) => ($(), T("div", Zz, [
      l("div", Jz, [
        l("div", Qz, [
          l("div", null, [
            l("div", eP, [
              Z(I(Zd), { class: "h-3.5 w-3.5" }),
              d[5] || (d[5] = l("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            d[6] || (d[6] = l("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            d[7] || (d[7] = l("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          l("div", tP, [
            l("div", {
              class: K(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              l("div", {
                class: K(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              l("div", null, [
                l("div", nP, V(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                l("div", rP, V(r.value?.connected ? r.value.instance_name || "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              l("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: d[0] || (d[0] = (f) => n.value = "connection")
              }, V(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        l("div", oP, [
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[1] || (d[1] = (f) => n.value = "flows")
          }, [
            l("div", iP, [
              d[8] || (d[8] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Automações", -1)),
              l("div", aP, [
                Z(I(Bn), { class: "h-4 w-4" })
              ])
            ]),
            l("div", sP, [
              Be(V(i.value.activeFlowsCount) + " ", 1),
              d[9] || (d[9] = l("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400" }, "ativas", -1))
            ]),
            l("div", lP, " de " + V(i.value.flowsCount) + " fluxos configurados ", 1)
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[2] || (d[2] = (f) => n.value = "campaigns")
          }, [
            l("div", uP, [
              d[10] || (d[10] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Campanhas", -1)),
              l("div", cP, [
                Z(I(Gt), { class: "h-4 w-4" })
              ])
            ]),
            l("div", dP, V(i.value.campaignsCount), 1),
            d[11] || (d[11] = l("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " disparos em massa com anti-ban ", -1))
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[3] || (d[3] = (f) => n.value = "contacts")
          }, [
            l("div", fP, [
              d[12] || (d[12] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Base Unificada", -1)),
              l("div", pP, [
                Z(I(bs), { class: "h-4 w-4" })
              ])
            ]),
            l("div", hP, V(i.value.contactsCount.toLocaleString("pt-BR")), 1),
            d[13] || (d[13] = l("div", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " contatos sincronizados ", -1))
          ]),
          l("div", {
            class: "group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900",
            onClick: d[4] || (d[4] = (f) => n.value = "runs")
          }, [
            l("div", mP, [
              d[14] || (d[14] = l("span", { class: "text-xs font-medium text-zinc-500 dark:text-zinc-400" }, "Disparos do Motor", -1)),
              l("div", vP, [
                Z(I(_h), { class: "h-4 w-4" })
              ])
            ]),
            l("div", gP, [
              Be(V(i.value.runsCount) + " ", 1),
              d[15] || (d[15] = l("span", { class: "text-xs font-semibold text-teal-600 dark:text-teal-400" }, "envios", -1))
            ]),
            l("div", yP, [
              d[16] || (d[16] = l("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1)),
              l("span", null, V(i.value.runsSuccessRate) + "% taxa de sucesso", 1)
            ])
          ])
        ]),
        l("div", bP, [
          ($(), T(ge, null, Oe(t, (f) => l("button", {
            key: f.id,
            type: "button",
            class: K(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === f.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (v) => n.value = f.id
          }, [
            ($(), Re(Tt(f.icon), { class: "h-4 w-4" })),
            l("span", null, V(f.label), 1),
            c(f.id) !== null && c(f.id) > 0 ? ($(), T("span", {
              key: 0,
              class: K(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === f.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, V(c(f.id)), 3)) : te("", !0)
          ], 10, xP)), 64))
        ])
      ]),
      r.value && !r.value.connected ? ($(), T("p", wP, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : te("", !0),
      ($(), Re(Tt(t.find((f) => f.id === n.value).component), yi({ key: n.value }, vh(n.value === "connection" ? { saved: a } : {})), null, 16))
    ]));
  }
}, kP = { class: "space-y-4" }, SP = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => ($(), T("div", kP, [
      Z(of, {
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
var Ep = typeof global == "object" && global && global.Object === Object && global, EP = typeof self == "object" && self && self.Object === Object && self, Mt = Ep || EP || Function("return this")(), Yt = Mt.Symbol, $p = Object.prototype, $P = $p.hasOwnProperty, zP = $p.toString, _r = Yt ? Yt.toStringTag : void 0;
function PP(e) {
  var t = $P.call(e, _r), n = e[_r];
  try {
    e[_r] = void 0;
    var r = !0;
  } catch {
  }
  var o = zP.call(e);
  return r && (t ? e[_r] = n : delete e[_r]), o;
}
var CP = Object.prototype, AP = CP.toString;
function TP(e) {
  return AP.call(e);
}
var OP = "[object Null]", NP = "[object Undefined]", qu = Yt ? Yt.toStringTag : void 0;
function Hn(e) {
  return e == null ? e === void 0 ? NP : OP : qu && qu in Object(e) ? PP(e) : TP(e);
}
function Kt(e) {
  return e != null && typeof e == "object";
}
var IP = "[object Symbol]";
function Ci(e) {
  return typeof e == "symbol" || Kt(e) && Hn(e) == IP;
}
function RP(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var It = Array.isArray, Vu = Yt ? Yt.prototype : void 0, ju = Vu ? Vu.toString : void 0;
function zp(e) {
  if (typeof e == "string")
    return e;
  if (It(e))
    return RP(e, zp) + "";
  if (Ci(e))
    return ju ? ju.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var MP = /\s/;
function DP(e) {
  for (var t = e.length; t-- && MP.test(e.charAt(t)); )
    ;
  return t;
}
var FP = /^\s+/;
function BP(e) {
  return e && e.slice(0, DP(e) + 1).replace(FP, "");
}
function _t(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hu = NaN, LP = /^[-+]0x[0-9a-f]+$/i, UP = /^0b[01]+$/i, qP = /^0o[0-7]+$/i, VP = parseInt;
function Gu(e) {
  if (typeof e == "number")
    return e;
  if (Ci(e))
    return Hu;
  if (_t(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _t(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = BP(e);
  var n = UP.test(e);
  return n || qP.test(e) ? VP(e.slice(2), n ? 2 : 8) : LP.test(e) ? Hu : +e;
}
function Pp(e) {
  return e;
}
var jP = "[object AsyncFunction]", HP = "[object Function]", GP = "[object GeneratorFunction]", WP = "[object Proxy]";
function vl(e) {
  if (!_t(e))
    return !1;
  var t = Hn(e);
  return t == HP || t == GP || t == jP || t == WP;
}
var ca = Mt["__core-js_shared__"], Wu = (function() {
  var e = /[^.]+$/.exec(ca && ca.keys && ca.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function XP(e) {
  return !!Wu && Wu in e;
}
var YP = Function.prototype, KP = YP.toString;
function Gn(e) {
  if (e != null) {
    try {
      return KP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ZP = /[\\^$.*+?()[\]{}|]/g, JP = /^\[object .+?Constructor\]$/, QP = Function.prototype, eC = Object.prototype, tC = QP.toString, nC = eC.hasOwnProperty, rC = RegExp(
  "^" + tC.call(nC).replace(ZP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oC(e) {
  if (!_t(e) || XP(e))
    return !1;
  var t = vl(e) ? rC : JP;
  return t.test(Gn(e));
}
function iC(e, t) {
  return e?.[t];
}
function Wn(e, t) {
  var n = iC(e, t);
  return oC(n) ? n : void 0;
}
var Ms = Wn(Mt, "WeakMap"), Xu = Object.create, aC = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!_t(t))
      return {};
    if (Xu)
      return Xu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function sC(e, t, n) {
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
function lC(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var uC = 800, cC = 16, dC = Date.now;
function fC(e) {
  var t = 0, n = 0;
  return function() {
    var r = dC(), o = cC - (r - n);
    if (n = r, o > 0) {
      if (++t >= uC)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function pC(e) {
  return function() {
    return e;
  };
}
var si = (function() {
  try {
    var e = Wn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), hC = si ? function(e, t) {
  return si(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pC(t),
    writable: !0
  });
} : Pp, mC = fC(hC);
function vC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var gC = 9007199254740991, yC = /^(?:0|[1-9]\d*)$/;
function Ai(e, t) {
  var n = typeof e;
  return t = t ?? gC, !!t && (n == "number" || n != "symbol" && yC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gl(e, t, n) {
  t == "__proto__" && si ? si(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function io(e, t) {
  return e === t || e !== e && t !== t;
}
var bC = Object.prototype, xC = bC.hasOwnProperty;
function yl(e, t, n) {
  var r = e[t];
  (!(xC.call(e, t) && io(r, n)) || n === void 0 && !(t in e)) && gl(e, t, n);
}
function wC(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], c = void 0;
    c === void 0 && (c = e[s]), o ? gl(n, s, c) : yl(n, s, c);
  }
  return n;
}
var Yu = Math.max;
function _C(e, t, n) {
  return t = Yu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Yu(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), sC(e, this, s);
  };
}
function kC(e, t) {
  return mC(_C(e, t, Pp), e + "");
}
var SC = 9007199254740991;
function bl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= SC;
}
function Ti(e) {
  return e != null && bl(e.length) && !vl(e);
}
function EC(e, t, n) {
  if (!_t(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ti(n) && Ai(t, n.length) : r == "string" && t in n) ? io(n[t], e) : !1;
}
function $C(e) {
  return kC(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && EC(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var zC = Object.prototype;
function xl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zC;
  return e === n;
}
function PC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var CC = "[object Arguments]";
function Ku(e) {
  return Kt(e) && Hn(e) == CC;
}
var Cp = Object.prototype, AC = Cp.hasOwnProperty, TC = Cp.propertyIsEnumerable, li = Ku(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ku : function(e) {
  return Kt(e) && AC.call(e, "callee") && !TC.call(e, "callee");
};
function OC() {
  return !1;
}
var Ap = typeof exports == "object" && exports && !exports.nodeType && exports, Zu = Ap && typeof module == "object" && module && !module.nodeType && module, NC = Zu && Zu.exports === Ap, Ju = NC ? Mt.Buffer : void 0, IC = Ju ? Ju.isBuffer : void 0, Yr = IC || OC, RC = "[object Arguments]", MC = "[object Array]", DC = "[object Boolean]", FC = "[object Date]", BC = "[object Error]", LC = "[object Function]", UC = "[object Map]", qC = "[object Number]", VC = "[object Object]", jC = "[object RegExp]", HC = "[object Set]", GC = "[object String]", WC = "[object WeakMap]", XC = "[object ArrayBuffer]", YC = "[object DataView]", KC = "[object Float32Array]", ZC = "[object Float64Array]", JC = "[object Int8Array]", QC = "[object Int16Array]", e3 = "[object Int32Array]", t3 = "[object Uint8Array]", n3 = "[object Uint8ClampedArray]", r3 = "[object Uint16Array]", o3 = "[object Uint32Array]", We = {};
We[KC] = We[ZC] = We[JC] = We[QC] = We[e3] = We[t3] = We[n3] = We[r3] = We[o3] = !0;
We[RC] = We[MC] = We[XC] = We[DC] = We[YC] = We[FC] = We[BC] = We[LC] = We[UC] = We[qC] = We[VC] = We[jC] = We[HC] = We[GC] = We[WC] = !1;
function i3(e) {
  return Kt(e) && bl(e.length) && !!We[Hn(e)];
}
function wl(e) {
  return function(t) {
    return e(t);
  };
}
var Tp = typeof exports == "object" && exports && !exports.nodeType && exports, Rr = Tp && typeof module == "object" && module && !module.nodeType && module, a3 = Rr && Rr.exports === Tp, da = a3 && Ep.process, cr = (function() {
  try {
    var e = Rr && Rr.require && Rr.require("util").types;
    return e || da && da.binding && da.binding("util");
  } catch {
  }
})(), Qu = cr && cr.isTypedArray, _l = Qu ? wl(Qu) : i3, s3 = Object.prototype, l3 = s3.hasOwnProperty;
function Op(e, t) {
  var n = It(e), r = !n && li(e), o = !n && !r && Yr(e), i = !n && !r && !o && _l(e), a = n || r || o || i, s = a ? PC(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || l3.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ai(u, c))) && s.push(u);
  return s;
}
function Np(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var u3 = Np(Object.keys, Object), c3 = Object.prototype, d3 = c3.hasOwnProperty;
function f3(e) {
  if (!xl(e))
    return u3(e);
  var t = [];
  for (var n in Object(e))
    d3.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function p3(e) {
  return Ti(e) ? Op(e) : f3(e);
}
function h3(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var m3 = Object.prototype, v3 = m3.hasOwnProperty;
function g3(e) {
  if (!_t(e))
    return h3(e);
  var t = xl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !v3.call(e, r)) || n.push(r);
  return n;
}
function Ip(e) {
  return Ti(e) ? Op(e, !0) : g3(e);
}
var y3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, b3 = /^\w*$/;
function x3(e, t) {
  if (It(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ci(e) ? !0 : b3.test(e) || !y3.test(e) || t != null && e in Object(t);
}
var Kr = Wn(Object, "create");
function w3() {
  this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
}
function _3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var k3 = "__lodash_hash_undefined__", S3 = Object.prototype, E3 = S3.hasOwnProperty;
function $3(e) {
  var t = this.__data__;
  if (Kr) {
    var n = t[e];
    return n === k3 ? void 0 : n;
  }
  return E3.call(t, e) ? t[e] : void 0;
}
var z3 = Object.prototype, P3 = z3.hasOwnProperty;
function C3(e) {
  var t = this.__data__;
  return Kr ? t[e] !== void 0 : P3.call(t, e);
}
var A3 = "__lodash_hash_undefined__";
function T3(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Kr && t === void 0 ? A3 : t, this;
}
function Vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Vn.prototype.clear = w3;
Vn.prototype.delete = _3;
Vn.prototype.get = $3;
Vn.prototype.has = C3;
Vn.prototype.set = T3;
function O3() {
  this.__data__ = [], this.size = 0;
}
function Oi(e, t) {
  for (var n = e.length; n--; )
    if (io(e[n][0], t))
      return n;
  return -1;
}
var N3 = Array.prototype, I3 = N3.splice;
function R3(e) {
  var t = this.__data__, n = Oi(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : I3.call(t, n, 1), --this.size, !0;
}
function M3(e) {
  var t = this.__data__, n = Oi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function D3(e) {
  return Oi(this.__data__, e) > -1;
}
function F3(e, t) {
  var n = this.__data__, r = Oi(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
cn.prototype.clear = O3;
cn.prototype.delete = R3;
cn.prototype.get = M3;
cn.prototype.has = D3;
cn.prototype.set = F3;
var Zr = Wn(Mt, "Map");
function B3() {
  this.size = 0, this.__data__ = {
    hash: new Vn(),
    map: new (Zr || cn)(),
    string: new Vn()
  };
}
function L3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ni(e, t) {
  var n = e.__data__;
  return L3(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function U3(e) {
  var t = Ni(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function q3(e) {
  return Ni(this, e).get(e);
}
function V3(e) {
  return Ni(this, e).has(e);
}
function j3(e, t) {
  var n = Ni(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dn.prototype.clear = B3;
dn.prototype.delete = U3;
dn.prototype.get = q3;
dn.prototype.has = V3;
dn.prototype.set = j3;
var H3 = "Expected a function";
function kl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(H3);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (kl.Cache || dn)(), n;
}
kl.Cache = dn;
var G3 = 500;
function W3(e) {
  var t = kl(e, function(r) {
    return n.size === G3 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var X3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Y3 = /\\(\\)?/g, K3 = W3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(X3, function(n, r, o, i) {
    t.push(o ? i.replace(Y3, "$1") : r || n);
  }), t;
});
function Rp(e) {
  return e == null ? "" : zp(e);
}
function Sl(e, t) {
  return It(e) ? e : x3(e, t) ? [e] : K3(Rp(e));
}
function El(e) {
  if (typeof e == "string" || Ci(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Z3(e, t) {
  t = Sl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[El(t[n++])];
  return n && n == r ? e : void 0;
}
function xt(e, t, n) {
  var r = e == null ? void 0 : Z3(e, t);
  return r === void 0 ? n : r;
}
function J3(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Mp = Np(Object.getPrototypeOf, Object), Q3 = "[object Object]", e4 = Function.prototype, t4 = Object.prototype, Dp = e4.toString, n4 = t4.hasOwnProperty, r4 = Dp.call(Object);
function o4(e) {
  if (!Kt(e) || Hn(e) != Q3)
    return !1;
  var t = Mp(e);
  if (t === null)
    return !0;
  var n = n4.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Dp.call(n) == r4;
}
function i4(e) {
  return function(t) {
    return e?.[t];
  };
}
function a4() {
  this.__data__ = new cn(), this.size = 0;
}
function s4(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function l4(e) {
  return this.__data__.get(e);
}
function u4(e) {
  return this.__data__.has(e);
}
var c4 = 200;
function d4(e, t) {
  var n = this.__data__;
  if (n instanceof cn) {
    var r = n.__data__;
    if (!Zr || r.length < c4 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new dn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xt(e) {
  var t = this.__data__ = new cn(e);
  this.size = t.size;
}
Xt.prototype.clear = a4;
Xt.prototype.delete = s4;
Xt.prototype.get = l4;
Xt.prototype.has = u4;
Xt.prototype.set = d4;
var Fp = typeof exports == "object" && exports && !exports.nodeType && exports, ec = Fp && typeof module == "object" && module && !module.nodeType && module, f4 = ec && ec.exports === Fp, tc = f4 ? Mt.Buffer : void 0, nc = tc ? tc.allocUnsafe : void 0;
function Bp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = nc ? nc(n) : new e.constructor(n);
  return e.copy(r), r;
}
function p4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function h4() {
  return [];
}
var m4 = Object.prototype, v4 = m4.propertyIsEnumerable, rc = Object.getOwnPropertySymbols, g4 = rc ? function(e) {
  return e == null ? [] : (e = Object(e), p4(rc(e), function(t) {
    return v4.call(e, t);
  }));
} : h4;
function y4(e, t, n) {
  var r = t(e);
  return It(e) ? r : J3(r, n(e));
}
function Ds(e) {
  return y4(e, p3, g4);
}
var Fs = Wn(Mt, "DataView"), Bs = Wn(Mt, "Promise"), Ls = Wn(Mt, "Set"), oc = "[object Map]", b4 = "[object Object]", ic = "[object Promise]", ac = "[object Set]", sc = "[object WeakMap]", lc = "[object DataView]", x4 = Gn(Fs), w4 = Gn(Zr), _4 = Gn(Bs), k4 = Gn(Ls), S4 = Gn(Ms), At = Hn;
(Fs && At(new Fs(new ArrayBuffer(1))) != lc || Zr && At(new Zr()) != oc || Bs && At(Bs.resolve()) != ic || Ls && At(new Ls()) != ac || Ms && At(new Ms()) != sc) && (At = function(e) {
  var t = Hn(e), n = t == b4 ? e.constructor : void 0, r = n ? Gn(n) : "";
  if (r)
    switch (r) {
      case x4:
        return lc;
      case w4:
        return oc;
      case _4:
        return ic;
      case k4:
        return ac;
      case S4:
        return sc;
    }
  return t;
});
var E4 = Object.prototype, $4 = E4.hasOwnProperty;
function z4(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && $4.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ui = Mt.Uint8Array;
function $l(e) {
  var t = new e.constructor(e.byteLength);
  return new ui(t).set(new ui(e)), t;
}
function P4(e, t) {
  var n = $l(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var C4 = /\w*$/;
function A4(e) {
  var t = new e.constructor(e.source, C4.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var uc = Yt ? Yt.prototype : void 0, cc = uc ? uc.valueOf : void 0;
function T4(e) {
  return cc ? Object(cc.call(e)) : {};
}
function Lp(e, t) {
  var n = t ? $l(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var O4 = "[object Boolean]", N4 = "[object Date]", I4 = "[object Map]", R4 = "[object Number]", M4 = "[object RegExp]", D4 = "[object Set]", F4 = "[object String]", B4 = "[object Symbol]", L4 = "[object ArrayBuffer]", U4 = "[object DataView]", q4 = "[object Float32Array]", V4 = "[object Float64Array]", j4 = "[object Int8Array]", H4 = "[object Int16Array]", G4 = "[object Int32Array]", W4 = "[object Uint8Array]", X4 = "[object Uint8ClampedArray]", Y4 = "[object Uint16Array]", K4 = "[object Uint32Array]";
function Z4(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case L4:
      return $l(e);
    case O4:
    case N4:
      return new r(+e);
    case U4:
      return P4(e);
    case q4:
    case V4:
    case j4:
    case H4:
    case G4:
    case W4:
    case X4:
    case Y4:
    case K4:
      return Lp(e, n);
    case I4:
      return new r();
    case R4:
    case F4:
      return new r(e);
    case M4:
      return A4(e);
    case D4:
      return new r();
    case B4:
      return T4(e);
  }
}
function Up(e) {
  return typeof e.constructor == "function" && !xl(e) ? aC(Mp(e)) : {};
}
var J4 = "[object Map]";
function Q4(e) {
  return Kt(e) && At(e) == J4;
}
var dc = cr && cr.isMap, eA = dc ? wl(dc) : Q4, tA = "[object Set]";
function nA(e) {
  return Kt(e) && At(e) == tA;
}
var fc = cr && cr.isSet, rA = fc ? wl(fc) : nA, oA = 1, qp = "[object Arguments]", iA = "[object Array]", aA = "[object Boolean]", sA = "[object Date]", lA = "[object Error]", Vp = "[object Function]", uA = "[object GeneratorFunction]", cA = "[object Map]", dA = "[object Number]", jp = "[object Object]", fA = "[object RegExp]", pA = "[object Set]", hA = "[object String]", mA = "[object Symbol]", vA = "[object WeakMap]", gA = "[object ArrayBuffer]", yA = "[object DataView]", bA = "[object Float32Array]", xA = "[object Float64Array]", wA = "[object Int8Array]", _A = "[object Int16Array]", kA = "[object Int32Array]", SA = "[object Uint8Array]", EA = "[object Uint8ClampedArray]", $A = "[object Uint16Array]", zA = "[object Uint32Array]", He = {};
He[qp] = He[iA] = He[gA] = He[yA] = He[aA] = He[sA] = He[bA] = He[xA] = He[wA] = He[_A] = He[kA] = He[cA] = He[dA] = He[jp] = He[fA] = He[pA] = He[hA] = He[mA] = He[SA] = He[EA] = He[$A] = He[zA] = !0;
He[lA] = He[Vp] = He[vA] = !1;
function Fo(e, t, n, r, o, i) {
  var a, s = t & oA;
  if (a !== void 0)
    return a;
  if (!_t(e))
    return e;
  var c = It(e);
  if (c)
    a = z4(e);
  else {
    var u = At(e), d = u == Vp || u == uA;
    if (Yr(e))
      return Bp(e, s);
    if (u == jp || u == qp || d && !o)
      a = d ? {} : Up(e);
    else {
      if (!He[u])
        return o ? e : {};
      a = Z4(e, u, s);
    }
  }
  i || (i = new Xt());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, a), rA(e) ? e.forEach(function(h) {
    a.add(Fo(h, t, n, h, e, i));
  }) : eA(e) && e.forEach(function(h, p) {
    a.set(p, Fo(h, t, n, p, e, i));
  });
  var v = Ds, y = c ? void 0 : v(e);
  return vC(y || e, function(h, p) {
    y && (p = h, h = e[p]), yl(a, p, Fo(h, t, n, p, e, i));
  }), a;
}
var PA = 1, CA = 4;
function st(e) {
  return Fo(e, PA | CA);
}
var AA = "__lodash_hash_undefined__";
function TA(e) {
  return this.__data__.set(e, AA), this;
}
function OA(e) {
  return this.__data__.has(e);
}
function ci(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new dn(); ++t < n; )
    this.add(e[t]);
}
ci.prototype.add = ci.prototype.push = TA;
ci.prototype.has = OA;
function NA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function IA(e, t) {
  return e.has(t);
}
var RA = 1, MA = 2;
function Hp(e, t, n, r, o, i) {
  var a = n & RA, s = e.length, c = t.length;
  if (s != c && !(a && c > s))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, v = !0, y = n & MA ? new ci() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var h = e[f], p = t[f];
    if (r)
      var m = a ? r(p, h, f, t, e, i) : r(h, p, f, e, t, i);
    if (m !== void 0) {
      if (m)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!NA(t, function(b, E) {
        if (!IA(y, E) && (h === b || o(h, b, n, r, i)))
          return y.push(E);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === p || o(h, p, n, r, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), v;
}
function DA(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function FA(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var BA = 1, LA = 2, UA = "[object Boolean]", qA = "[object Date]", VA = "[object Error]", jA = "[object Map]", HA = "[object Number]", GA = "[object RegExp]", WA = "[object Set]", XA = "[object String]", YA = "[object Symbol]", KA = "[object ArrayBuffer]", ZA = "[object DataView]", pc = Yt ? Yt.prototype : void 0, fa = pc ? pc.valueOf : void 0;
function JA(e, t, n, r, o, i, a) {
  switch (n) {
    case ZA:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case KA:
      return !(e.byteLength != t.byteLength || !i(new ui(e), new ui(t)));
    case UA:
    case qA:
    case HA:
      return io(+e, +t);
    case VA:
      return e.name == t.name && e.message == t.message;
    case GA:
    case XA:
      return e == t + "";
    case jA:
      var s = DA;
    case WA:
      var c = r & BA;
      if (s || (s = FA), e.size != t.size && !c)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= LA, a.set(e, t);
      var d = Hp(s(e), s(t), r, o, i, a);
      return a.delete(e), d;
    case YA:
      if (fa)
        return fa.call(e) == fa.call(t);
  }
  return !1;
}
var QA = 1, eT = Object.prototype, tT = eT.hasOwnProperty;
function nT(e, t, n, r, o, i) {
  var a = n & QA, s = Ds(e), c = s.length, u = Ds(t), d = u.length;
  if (c != d && !a)
    return !1;
  for (var f = c; f--; ) {
    var v = s[f];
    if (!(a ? v in t : tT.call(t, v)))
      return !1;
  }
  var y = i.get(e), h = i.get(t);
  if (y && h)
    return y == t && h == e;
  var p = !0;
  i.set(e, t), i.set(t, e);
  for (var m = a; ++f < c; ) {
    v = s[f];
    var b = e[v], E = t[v];
    if (r)
      var g = a ? r(E, b, v, t, e, i) : r(b, E, v, e, t, i);
    if (!(g === void 0 ? b === E || o(b, E, n, r, i) : g)) {
      p = !1;
      break;
    }
    m || (m = v == "constructor");
  }
  if (p && !m) {
    var _ = e.constructor, C = t.constructor;
    _ != C && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return i.delete(e), i.delete(t), p;
}
var rT = 1, hc = "[object Arguments]", mc = "[object Array]", $o = "[object Object]", oT = Object.prototype, vc = oT.hasOwnProperty;
function iT(e, t, n, r, o, i) {
  var a = It(e), s = It(t), c = a ? mc : At(e), u = s ? mc : At(t);
  c = c == hc ? $o : c, u = u == hc ? $o : u;
  var d = c == $o, f = u == $o, v = c == u;
  if (v && Yr(e)) {
    if (!Yr(t))
      return !1;
    a = !0, d = !1;
  }
  if (v && !d)
    return i || (i = new Xt()), a || _l(e) ? Hp(e, t, n, r, o, i) : JA(e, t, c, n, r, o, i);
  if (!(n & rT)) {
    var y = d && vc.call(e, "__wrapped__"), h = f && vc.call(t, "__wrapped__");
    if (y || h) {
      var p = y ? e.value() : e, m = h ? t.value() : t;
      return i || (i = new Xt()), o(p, m, n, r, i);
    }
  }
  return v ? (i || (i = new Xt()), nT(e, t, n, r, o, i)) : !1;
}
function Gp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Kt(e) && !Kt(t) ? e !== e && t !== t : iT(e, t, n, r, Gp, o);
}
function aT(e, t, n) {
  t = Sl(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = El(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && bl(o) && Ai(a, o) && (It(e) || li(e)));
}
function sT(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var c = a[++o];
      if (n(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var lT = sT(), pa = function() {
  return Mt.Date.now();
}, uT = "Expected a function", cT = Math.max, dT = Math.min;
function fT(e, t, n) {
  var r, o, i, a, s, c, u = 0, d = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(uT);
  t = Gu(t) || 0, _t(n) && (d = !0, f = "maxWait" in n, i = f ? cT(Gu(n.maxWait) || 0, t) : i, v = "trailing" in n ? !0 : v);
  function y(z) {
    var w = r, k = o;
    return r = o = void 0, u = z, a = e.apply(k, w), a;
  }
  function h(z) {
    return u = z, s = setTimeout(b, t), d ? y(z) : a;
  }
  function p(z) {
    var w = z - c, k = z - u, L = t - w;
    return f ? dT(L, i - k) : L;
  }
  function m(z) {
    var w = z - c, k = z - u;
    return c === void 0 || w >= t || w < 0 || f && k >= i;
  }
  function b() {
    var z = pa();
    if (m(z))
      return E(z);
    s = setTimeout(b, p(z));
  }
  function E(z) {
    return s = void 0, v && r ? y(z) : (r = o = void 0, a);
  }
  function g() {
    s !== void 0 && clearTimeout(s), u = 0, r = c = o = s = void 0;
  }
  function _() {
    return s === void 0 ? a : E(pa());
  }
  function C() {
    var z = pa(), w = m(z);
    if (r = arguments, o = this, c = z, w) {
      if (s === void 0)
        return h(c);
      if (f)
        return clearTimeout(s), s = setTimeout(b, t), y(c);
    }
    return s === void 0 && (s = setTimeout(b, t)), a;
  }
  return C.cancel = g, C.flush = _, C;
}
function Us(e, t, n) {
  (n !== void 0 && !io(e[t], n) || n === void 0 && !(t in e)) && gl(e, t, n);
}
function pT(e) {
  return Kt(e) && Ti(e);
}
function qs(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function hT(e) {
  return wC(e, Ip(e));
}
function mT(e, t, n, r, o, i, a) {
  var s = qs(e, n), c = qs(t, n), u = a.get(c);
  if (u) {
    Us(e, n, u);
    return;
  }
  var d = i ? i(s, c, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var v = It(c), y = !v && Yr(c), h = !v && !y && _l(c);
    d = c, v || y || h ? It(s) ? d = s : pT(s) ? d = lC(s) : y ? (f = !1, d = Bp(c, !0)) : h ? (f = !1, d = Lp(c, !0)) : d = [] : o4(c) || li(c) ? (d = s, li(s) ? d = hT(s) : (!_t(s) || vl(s)) && (d = Up(c))) : f = !1;
  }
  f && (a.set(c, d), o(d, c, r, i, a), a.delete(c)), Us(e, n, d);
}
function Wp(e, t, n, r, o) {
  e !== t && lT(t, function(i, a) {
    if (o || (o = new Xt()), _t(i))
      mT(e, t, a, n, Wp, r, o);
    else {
      var s = r ? r(qs(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), Us(e, a, s);
    }
  }, Ip);
}
var vT = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, gT = i4(vT), Xp = /[&<>"']/g, yT = RegExp(Xp.source);
function bT(e) {
  return e = Rp(e), e && yT.test(e) ? e.replace(Xp, gT) : e;
}
var xT = Object.prototype, wT = xT.hasOwnProperty;
function _T(e, t) {
  return e != null && wT.call(e, t);
}
function Yp(e, t) {
  return e != null && aT(e, t, _T);
}
function xn(e, t) {
  return Gp(e, t);
}
var Vs = $C(function(e, t, n) {
  Wp(e, t, n);
});
function kT(e, t, n, r) {
  if (!_t(e))
    return e;
  t = Sl(t, e);
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var c = El(t[o]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (o != a) {
      var d = s[c];
      u = void 0, u === void 0 && (u = _t(d) ? d : Ai(t[o + 1]) ? [] : {});
    }
    yl(s, c, u), s = s[c];
  }
  return e;
}
function Et(e, t, n) {
  return e == null ? e : kT(e, t, n);
}
var gc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ST(e) {
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
var ha, yc;
function mr() {
  return yc || (yc = 1, ha = TypeError), ha;
}
const ET = {}, $T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ET
}, Symbol.toStringTag, { value: "Module" })), zT = /* @__PURE__ */ ST($T);
var ma, bc;
function Ii() {
  if (bc) return ma;
  bc = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && i && typeof i.get == "function" ? i.get : null, s = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, u = c ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, f = d ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, y = v ? WeakRef.prototype.deref : null, h = Boolean.prototype.valueOf, p = Object.prototype.toString, m = Function.prototype.toString, b = String.prototype.match, E = String.prototype.slice, g = String.prototype.replace, _ = String.prototype.toUpperCase, C = String.prototype.toLowerCase, z = RegExp.prototype.test, w = Array.prototype.concat, k = Array.prototype.join, L = Array.prototype.slice, D = Math.floor, M = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, A = Object.getOwnPropertySymbols, q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, S = typeof Symbol == "function" && typeof Symbol.iterator == "object", F = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === S || !0) ? Symbol.toStringTag : null, P = Object.prototype.propertyIsEnumerable, N = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(G) {
    return G.__proto__;
  } : null);
  function x(G, X) {
    if (G === 1 / 0 || G === -1 / 0 || G !== G || G && G > -1e3 && G < 1e3 || z.call(/e/, X))
      return X;
    var Le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof G == "number") {
      var je = G < 0 ? -D(-G) : D(G);
      if (je !== G) {
        var Ge = String(je), Ae = E.call(X, Ge.length + 1);
        return g.call(Ge, Le, "$&_") + "." + g.call(g.call(Ae, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return g.call(X, Le, "$&_");
  }
  var U = zT, Q = U.custom, ee = R(Q) ? Q : null, fe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ye = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ma = function G(X, Le, je, Ge) {
    var Ae = Le || {};
    if (H(Ae, "quoteStyle") && !H(fe, Ae.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (H(Ae, "maxStringLength") && (typeof Ae.maxStringLength == "number" ? Ae.maxStringLength < 0 && Ae.maxStringLength !== 1 / 0 : Ae.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var fn = H(Ae, "customInspect") ? Ae.customInspect : !0;
    if (typeof fn != "boolean" && fn !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (H(Ae, "indent") && Ae.indent !== null && Ae.indent !== "	" && !(parseInt(Ae.indent, 10) === Ae.indent && Ae.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(Ae, "numericSeparator") && typeof Ae.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var zn = Ae.numericSeparator;
    if (typeof X > "u")
      return "undefined";
    if (X === null)
      return "null";
    if (typeof X == "boolean")
      return X ? "true" : "false";
    if (typeof X == "string")
      return gt(X, Ae);
    if (typeof X == "number") {
      if (X === 0)
        return 1 / 0 / X > 0 ? "0" : "-0";
      var yt = String(X);
      return zn ? x(X, yt) : yt;
    }
    if (typeof X == "bigint") {
      var pn = String(X) + "n";
      return zn ? x(X, pn) : pn;
    }
    var Hi = typeof Ae.depth > "u" ? 5 : Ae.depth;
    if (typeof je > "u" && (je = 0), je >= Hi && Hi > 0 && typeof X == "object")
      return me(X) ? "[Array]" : "[Object]";
    var Xn = rh(Ae, je);
    if (typeof Ge > "u")
      Ge = [];
    else if (oe(Ge, X) >= 0)
      return "[Circular]";
    function Pt(Yn, ho, ih) {
      if (ho && (Ge = L.call(Ge), Ge.push(ho)), ih) {
        var Gl = {
          depth: Ae.depth
        };
        return H(Ae, "quoteStyle") && (Gl.quoteStyle = Ae.quoteStyle), G(Yn, Gl, je + 1, Ge);
      }
      return G(Yn, Ae, je + 1, Ge);
    }
    if (typeof X == "function" && !Se(X)) {
      var Bl = re(X), Ll = fo(X, Pt);
      return "[Function" + (Bl ? ": " + Bl : " (anonymous)") + "]" + (Ll.length > 0 ? " { " + k.call(Ll, ", ") + " }" : "");
    }
    if (R(X)) {
      var Ul = S ? g.call(String(X), /^(Symbol\(.*\))_[^)]*$/, "$1") : q.call(X);
      return typeof X == "object" && !S ? $n(Ul) : Ul;
    }
    if (Ft(X)) {
      for (var yr = "<" + C.call(String(X.nodeName)), Gi = X.attributes || [], po = 0; po < Gi.length; po++)
        yr += " " + Gi[po].name + "=" + _e(ne(Gi[po].value), "double", Ae);
      return yr += ">", X.childNodes && X.childNodes.length && (yr += "..."), yr += "</" + C.call(String(X.nodeName)) + ">", yr;
    }
    if (me(X)) {
      if (X.length === 0)
        return "[]";
      var Wi = fo(X, Pt);
      return Xn && !nh(Wi) ? "[" + ji(Wi, Xn) + "]" : "[ " + k.call(Wi, ", ") + " ]";
    }
    if (se(X)) {
      var Xi = fo(X, Pt);
      return !("cause" in Error.prototype) && "cause" in X && !P.call(X, "cause") ? "{ [" + String(X) + "] " + k.call(w.call("[cause]: " + Pt(X.cause), Xi), ", ") + " }" : Xi.length === 0 ? "[" + String(X) + "]" : "{ [" + String(X) + "] " + k.call(Xi, ", ") + " }";
    }
    if (typeof X == "object" && fn) {
      if (ee && typeof X[ee] == "function" && U)
        return U(X, { depth: Hi - je });
      if (fn !== "symbol" && typeof X.inspect == "function")
        return X.inspect();
    }
    if (de(X)) {
      var ql = [];
      return r && r.call(X, function(Yn, ho) {
        ql.push(Pt(ho, X, !0) + " => " + Pt(Yn, X));
      }), Fl("Map", n.call(X), ql, Xn);
    }
    if (Ee(X)) {
      var Vl = [];
      return s && s.call(X, function(Yn) {
        Vl.push(Pt(Yn, X));
      }), Fl("Set", a.call(X), Vl, Xn);
    }
    if (pe(X))
      return gr("WeakMap");
    if (Fe(X))
      return gr("WeakSet");
    if (be(X))
      return gr("WeakRef");
    if (ae(X))
      return $n(Pt(Number(X)));
    if (O(X))
      return $n(Pt(M.call(X)));
    if (ve(X))
      return $n(h.call(X));
    if (we(X))
      return $n(Pt(String(X)));
    if (typeof window < "u" && X === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && X === globalThis || typeof gc < "u" && X === gc)
      return "{ [object globalThis] }";
    if (!ze(X) && !Se(X)) {
      var Yi = fo(X, Pt), jl = N ? N(X) === Object.prototype : X instanceof Object || X.constructor === Object, Ki = X instanceof Object ? "" : "null prototype", Hl = !jl && F && Object(X) === X && F in X ? E.call(j(X), 8, -1) : Ki ? "Object" : "", oh = jl || typeof X.constructor != "function" ? "" : X.constructor.name ? X.constructor.name + " " : "", Zi = oh + (Hl || Ki ? "[" + k.call(w.call([], Hl || [], Ki || []), ": ") + "] " : "");
      return Yi.length === 0 ? Zi + "{}" : Xn ? Zi + "{" + ji(Yi, Xn) + "}" : Zi + "{ " + k.call(Yi, ", ") + " }";
    }
    return String(X);
  };
  function _e(G, X, Le) {
    var je = Le.quoteStyle || X, Ge = fe[je];
    return Ge + G + Ge;
  }
  function ne(G) {
    return g.call(String(G), /"/g, "&quot;");
  }
  function ie(G) {
    return !F || !(typeof G == "object" && (F in G || typeof G[F] < "u"));
  }
  function me(G) {
    return j(G) === "[object Array]" && ie(G);
  }
  function ze(G) {
    return j(G) === "[object Date]" && ie(G);
  }
  function Se(G) {
    return j(G) === "[object RegExp]" && ie(G);
  }
  function se(G) {
    return j(G) === "[object Error]" && ie(G);
  }
  function we(G) {
    return j(G) === "[object String]" && ie(G);
  }
  function ae(G) {
    return j(G) === "[object Number]" && ie(G);
  }
  function ve(G) {
    return j(G) === "[object Boolean]" && ie(G);
  }
  function R(G) {
    if (S)
      return G && typeof G == "object" && G instanceof Symbol;
    if (typeof G == "symbol")
      return !0;
    if (!G || typeof G != "object" || !q)
      return !1;
    try {
      return q.call(G), !0;
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
  function H(G, X) {
    return B.call(G, X);
  }
  function j(G) {
    return p.call(G);
  }
  function re(G) {
    if (G.name)
      return G.name;
    var X = b.call(m.call(G), /^function\s*([\w$]+)/);
    return X ? X[1] : null;
  }
  function oe(G, X) {
    if (G.indexOf)
      return G.indexOf(X);
    for (var Le = 0, je = G.length; Le < je; Le++)
      if (G[Le] === X)
        return Le;
    return -1;
  }
  function de(G) {
    if (!n || !G || typeof G != "object")
      return !1;
    try {
      n.call(G);
      try {
        a.call(G);
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
  function be(G) {
    if (!y || !G || typeof G != "object")
      return !1;
    try {
      return y.call(G), !0;
    } catch {
    }
    return !1;
  }
  function Ee(G) {
    if (!a || !G || typeof G != "object")
      return !1;
    try {
      a.call(G);
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
  function Fe(G) {
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
  function Ft(G) {
    return !G || typeof G != "object" ? !1 : typeof HTMLElement < "u" && G instanceof HTMLElement ? !0 : typeof G.nodeName == "string" && typeof G.getAttribute == "function";
  }
  function gt(G, X) {
    if (G.length > X.maxStringLength) {
      var Le = G.length - X.maxStringLength, je = "... " + Le + " more character" + (Le > 1 ? "s" : "");
      return gt(E.call(G, 0, X.maxStringLength), X) + je;
    }
    var Ge = ye[X.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var Ae = g.call(g.call(G, Ge, "\\$1"), /[\x00-\x1f]/g, Vi);
    return _e(Ae, "single", X);
  }
  function Vi(G) {
    var X = G.charCodeAt(0), Le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[X];
    return Le ? "\\" + Le : "\\x" + (X < 16 ? "0" : "") + _.call(X.toString(16));
  }
  function $n(G) {
    return "Object(" + G + ")";
  }
  function gr(G) {
    return G + " { ? }";
  }
  function Fl(G, X, Le, je) {
    var Ge = je ? ji(Le, je) : k.call(Le, ", ");
    return G + " (" + X + ") {" + Ge + "}";
  }
  function nh(G) {
    for (var X = 0; X < G.length; X++)
      if (oe(G[X], `
`) >= 0)
        return !1;
    return !0;
  }
  function rh(G, X) {
    var Le;
    if (G.indent === "	")
      Le = "	";
    else if (typeof G.indent == "number" && G.indent > 0)
      Le = k.call(Array(G.indent + 1), " ");
    else
      return null;
    return {
      base: Le,
      prev: k.call(Array(X + 1), Le)
    };
  }
  function ji(G, X) {
    if (G.length === 0)
      return "";
    var Le = `
` + X.prev + X.base;
    return Le + k.call(G, "," + Le) + `
` + X.prev;
  }
  function fo(G, X) {
    var Le = me(G), je = [];
    if (Le) {
      je.length = G.length;
      for (var Ge = 0; Ge < G.length; Ge++)
        je[Ge] = H(G, Ge) ? X(G[Ge], G) : "";
    }
    var Ae = typeof A == "function" ? A(G) : [], fn;
    if (S) {
      fn = {};
      for (var zn = 0; zn < Ae.length; zn++)
        fn["$" + Ae[zn]] = Ae[zn];
    }
    for (var yt in G)
      H(G, yt) && (Le && String(Number(yt)) === yt && yt < G.length || S && fn["$" + yt] instanceof Symbol || (z.call(/[^\w$]/, yt) ? je.push(X(yt, G) + ": " + X(G[yt], G)) : je.push(yt + ": " + X(G[yt], G))));
    if (typeof A == "function")
      for (var pn = 0; pn < Ae.length; pn++)
        P.call(G, Ae[pn]) && je.push("[" + X(Ae[pn]) + "]: " + X(G[Ae[pn]], G));
    return je;
  }
  return ma;
}
var va, xc;
function PT() {
  if (xc) return va;
  xc = 1;
  var e = /* @__PURE__ */ Ii(), t = /* @__PURE__ */ mr(), n = function(s, c, u) {
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
  return va = function() {
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
  }, va;
}
var ga, wc;
function Kp() {
  return wc || (wc = 1, ga = Object), ga;
}
var ya, _c;
function CT() {
  return _c || (_c = 1, ya = Error), ya;
}
var ba, kc;
function AT() {
  return kc || (kc = 1, ba = EvalError), ba;
}
var xa, Sc;
function TT() {
  return Sc || (Sc = 1, xa = RangeError), xa;
}
var wa, Ec;
function OT() {
  return Ec || (Ec = 1, wa = ReferenceError), wa;
}
var _a, $c;
function NT() {
  return $c || ($c = 1, _a = SyntaxError), _a;
}
var ka, zc;
function IT() {
  return zc || (zc = 1, ka = URIError), ka;
}
var Sa, Pc;
function RT() {
  return Pc || (Pc = 1, Sa = Math.abs), Sa;
}
var Ea, Cc;
function MT() {
  return Cc || (Cc = 1, Ea = Math.floor), Ea;
}
var $a, Ac;
function DT() {
  return Ac || (Ac = 1, $a = Math.max), $a;
}
var za, Tc;
function FT() {
  return Tc || (Tc = 1, za = Math.min), za;
}
var Pa, Oc;
function BT() {
  return Oc || (Oc = 1, Pa = Math.pow), Pa;
}
var Ca, Nc;
function LT() {
  return Nc || (Nc = 1, Ca = Math.round), Ca;
}
var Aa, Ic;
function UT() {
  return Ic || (Ic = 1, Aa = Number.isNaN || function(t) {
    return t !== t;
  }), Aa;
}
var Ta, Rc;
function qT() {
  if (Rc) return Ta;
  Rc = 1;
  var e = /* @__PURE__ */ UT();
  return Ta = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Ta;
}
var Oa, Mc;
function VT() {
  return Mc || (Mc = 1, Oa = Object.getOwnPropertyDescriptor), Oa;
}
var Na, Dc;
function Zp() {
  if (Dc) return Na;
  Dc = 1;
  var e = /* @__PURE__ */ VT();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Na = e, Na;
}
var Ia, Fc;
function jT() {
  if (Fc) return Ia;
  Fc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ia = e, Ia;
}
var Ra, Bc;
function HT() {
  return Bc || (Bc = 1, Ra = function() {
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
  }), Ra;
}
var Ma, Lc;
function GT() {
  if (Lc) return Ma;
  Lc = 1;
  var e = typeof Symbol < "u" && Symbol, t = HT();
  return Ma = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ma;
}
var Da, Uc;
function Jp() {
  return Uc || (Uc = 1, Da = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Da;
}
var Fa, qc;
function Qp() {
  if (qc) return Fa;
  qc = 1;
  var e = /* @__PURE__ */ Kp();
  return Fa = e.getPrototypeOf || null, Fa;
}
var Ba, Vc;
function WT() {
  if (Vc) return Ba;
  Vc = 1;
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
  return Ba = function(c) {
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
    }, y = n(0, u.length - d.length), h = [], p = 0; p < y; p++)
      h[p] = "$" + p;
    if (f = Function("binder", "return function (" + a(h, ",") + "){ return binder.apply(this,arguments); }")(v), u.prototype) {
      var m = function() {
      };
      m.prototype = u.prototype, f.prototype = new m(), m.prototype = null;
    }
    return f;
  }, Ba;
}
var La, jc;
function Ri() {
  if (jc) return La;
  jc = 1;
  var e = WT();
  return La = Function.prototype.bind || e, La;
}
var Ua, Hc;
function zl() {
  return Hc || (Hc = 1, Ua = Function.prototype.call), Ua;
}
var qa, Gc;
function e0() {
  return Gc || (Gc = 1, qa = Function.prototype.apply), qa;
}
var Va, Wc;
function XT() {
  return Wc || (Wc = 1, Va = typeof Reflect < "u" && Reflect && Reflect.apply), Va;
}
var ja, Xc;
function YT() {
  if (Xc) return ja;
  Xc = 1;
  var e = Ri(), t = e0(), n = zl(), r = XT();
  return ja = r || e.call(n, t), ja;
}
var Ha, Yc;
function t0() {
  if (Yc) return Ha;
  Yc = 1;
  var e = Ri(), t = /* @__PURE__ */ mr(), n = zl(), r = YT();
  return Ha = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return r(e, n, i);
  }, Ha;
}
var Ga, Kc;
function KT() {
  if (Kc) return Ga;
  Kc = 1;
  var e = t0(), t = /* @__PURE__ */ Zp(), n;
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
  return Ga = r && typeof r.get == "function" ? e([r.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, Ga;
}
var Wa, Zc;
function ZT() {
  if (Zc) return Wa;
  Zc = 1;
  var e = Jp(), t = Qp(), n = /* @__PURE__ */ KT();
  return Wa = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Wa;
}
var Xa, Jc;
function JT() {
  if (Jc) return Xa;
  Jc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Ri();
  return Xa = n.call(e, t), Xa;
}
var Ya, Qc;
function Pl() {
  if (Qc) return Ya;
  Qc = 1;
  var e, t = /* @__PURE__ */ Kp(), n = /* @__PURE__ */ CT(), r = /* @__PURE__ */ AT(), o = /* @__PURE__ */ TT(), i = /* @__PURE__ */ OT(), a = /* @__PURE__ */ NT(), s = /* @__PURE__ */ mr(), c = /* @__PURE__ */ IT(), u = /* @__PURE__ */ RT(), d = /* @__PURE__ */ MT(), f = /* @__PURE__ */ DT(), v = /* @__PURE__ */ FT(), y = /* @__PURE__ */ BT(), h = /* @__PURE__ */ LT(), p = /* @__PURE__ */ qT(), m = Function, b = function(Se) {
    try {
      return m('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, E = /* @__PURE__ */ Zp(), g = /* @__PURE__ */ jT(), _ = function() {
    throw new s();
  }, C = E ? (function() {
    try {
      return arguments.callee, _;
    } catch {
      try {
        return E(arguments, "callee").get;
      } catch {
        return _;
      }
    }
  })() : _, z = GT()(), w = ZT(), k = Qp(), L = Jp(), D = e0(), M = zl(), A = {}, q = typeof Uint8Array > "u" || !w ? e : w(Uint8Array), S = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": z && w ? w([][Symbol.iterator]()) : e,
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
    "%IteratorPrototype%": z && w ? w(w([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !z || !w ? e : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !z || !w ? e : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": z && w ? w(""[Symbol.iterator]()) : e,
    "%Symbol%": z ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": C,
    "%TypedArray%": q,
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
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": g,
    "%Object.getPrototypeOf%": k,
    "%Math.abs%": u,
    "%Math.floor%": d,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": y,
    "%Math.round%": h,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": L
  };
  if (w)
    try {
      null.error;
    } catch (Se) {
      var F = w(w(Se));
      S["%Error.prototype%"] = F;
    }
  var P = function Se(se) {
    var we;
    if (se === "%AsyncFunction%")
      we = b("async function () {}");
    else if (se === "%GeneratorFunction%")
      we = b("function* () {}");
    else if (se === "%AsyncGeneratorFunction%")
      we = b("async function* () {}");
    else if (se === "%AsyncGenerator%") {
      var ae = Se("%AsyncGeneratorFunction%");
      ae && (we = ae.prototype);
    } else if (se === "%AsyncIteratorPrototype%") {
      var ve = Se("%AsyncGenerator%");
      ve && w && (we = w(ve.prototype));
    }
    return S[se] = we, we;
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
  }, x = Ri(), U = /* @__PURE__ */ JT(), Q = x.call(M, Array.prototype.concat), ee = x.call(D, Array.prototype.splice), fe = x.call(M, String.prototype.replace), ye = x.call(M, String.prototype.slice), _e = x.call(M, RegExp.prototype.exec), ne = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ie = /\\(\\)?/g, me = function(se) {
    var we = ye(se, 0, 1), ae = ye(se, -1);
    if (we === "%" && ae !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (ae === "%" && we !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ve = [];
    return fe(se, ne, function(R, O, B, H) {
      ve[ve.length] = B ? fe(H, ie, "$1") : O || R;
    }), ve;
  }, ze = function(se, we) {
    var ae = se, ve;
    if (U(N, ae) && (ve = N[ae], ae = "%" + ve[0] + "%"), U(S, ae)) {
      var R = S[ae];
      if (R === A && (R = P(ae)), typeof R > "u" && !we)
        throw new s("intrinsic " + se + " exists, but is not available. Please file an issue!");
      return {
        alias: ve,
        name: ae,
        value: R
      };
    }
    throw new a("intrinsic " + se + " does not exist!");
  };
  return Ya = function(se, we) {
    if (typeof se != "string" || se.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, se) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ae = me(se), ve = ae.length > 0 ? ae[0] : "", R = ze("%" + ve + "%", we), O = R.name, B = R.value, H = !1, j = R.alias;
    j && (ve = j[0], ee(ae, Q([0, 1], j)));
    for (var re = 1, oe = !0; re < ae.length; re += 1) {
      var de = ae[re], pe = ye(de, 0, 1), be = ye(de, -1);
      if ((pe === '"' || pe === "'" || pe === "`" || be === '"' || be === "'" || be === "`") && pe !== be)
        throw new a("property names with quotes must have matching quotes");
      if ((de === "constructor" || !oe) && (H = !0), ve += "." + de, O = "%" + ve + "%", U(S, O))
        B = S[O];
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
          oe = U(B, de), B = B[de];
        oe && !H && (S[O] = B);
      }
    }
    return B;
  }, Ya;
}
var Ka, ed;
function n0() {
  if (ed) return Ka;
  ed = 1;
  var e = /* @__PURE__ */ Pl(), t = t0(), n = t([e("%String.prototype.indexOf%")]);
  return Ka = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ka;
}
var Za, td;
function r0() {
  if (td) return Za;
  td = 1;
  var e = /* @__PURE__ */ Pl(), t = /* @__PURE__ */ n0(), n = /* @__PURE__ */ Ii(), r = /* @__PURE__ */ mr(), o = e("%Map%", !0), i = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return Za = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(y) {
        if (!v.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (f) {
          var h = c(f, y);
          return u(f) === 0 && (f = void 0), h;
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
      set: function(y, h) {
        f || (f = new o()), a(f, y, h);
      }
    };
    return v;
  }, Za;
}
var Ja, nd;
function QT() {
  if (nd) return Ja;
  nd = 1;
  var e = /* @__PURE__ */ Pl(), t = /* @__PURE__ */ n0(), n = /* @__PURE__ */ Ii(), r = r0(), o = /* @__PURE__ */ mr(), i = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Ja = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, v, y = {
        assert: function(h) {
          if (!y.has(h))
            throw new o("Side channel does not contain " + n(h));
        },
        delete: function(h) {
          if (i && h && (typeof h == "object" || typeof h == "function")) {
            if (f)
              return u(f, h);
          } else if (r && v)
            return v.delete(h);
          return !1;
        },
        get: function(h) {
          return i && h && (typeof h == "object" || typeof h == "function") && f ? a(f, h) : v && v.get(h);
        },
        has: function(h) {
          return i && h && (typeof h == "object" || typeof h == "function") && f ? c(f, h) : !!v && v.has(h);
        },
        set: function(h, p) {
          i && h && (typeof h == "object" || typeof h == "function") ? (f || (f = new i()), s(f, h, p)) : r && (v || (v = r()), v.set(h, p));
        }
      };
      return y;
    }
  ) : r, Ja;
}
var Qa, rd;
function o0() {
  if (rd) return Qa;
  rd = 1;
  var e = /* @__PURE__ */ mr(), t = /* @__PURE__ */ Ii(), n = PT(), r = r0(), o = QT(), i = o || r || n;
  return Qa = function() {
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
  }, Qa;
}
var es, od;
function Cl() {
  if (od) return es;
  od = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return es = {
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
  }, es;
}
var ts, id;
function i0() {
  if (id) return ts;
  id = 1;
  var e = /* @__PURE__ */ Cl(), t = o0(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), i = function(w, k) {
    return o.set(w, k), w;
  }, a = function(w) {
    return o.has(w);
  }, s = function(w) {
    return o.get(w);
  }, c = function(w, k) {
    o.set(w, k);
  }, u = (function() {
    for (var z = [], w = 0; w < 256; ++w)
      z[z.length] = "%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase();
    return z;
  })(), d = function(w) {
    for (; w.length > 1; ) {
      var k = w.pop(), L = k.obj[k.prop];
      if (r(L)) {
        for (var D = [], M = 0; M < L.length; ++M)
          typeof L[M] < "u" && (D[D.length] = L[M]);
        k.obj[k.prop] = D;
      }
    }
  }, f = function(w, k) {
    for (var L = k && k.plainObjects ? { __proto__: null } : {}, D = 0; D < w.length; ++D)
      typeof w[D] < "u" && (L[D] = w[D]);
    return L;
  }, v = function z(w, k, L) {
    if (!k)
      return w;
    if (typeof k != "object" && typeof k != "function") {
      if (r(w)) {
        var D = w.length;
        if (L && typeof L.arrayLimit == "number" && D > L.arrayLimit)
          return i(f(w.concat(k), L), D);
        w[D] = k;
      } else if (w && typeof w == "object")
        if (a(w)) {
          var M = s(w) + 1;
          w[M] = k, c(w, M);
        } else {
          if (L && L.strictMerge)
            return [w, k];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, k)) && (w[k] = !0);
        }
      else
        return [w, k];
      return w;
    }
    if (!w || typeof w != "object") {
      if (a(k)) {
        for (var A = Object.keys(k), q = L && L.plainObjects ? { __proto__: null, 0: w } : { 0: w }, S = 0; S < A.length; S++) {
          var F = parseInt(A[S], 10);
          q[F + 1] = k[A[S]];
        }
        return i(q, s(k) + 1);
      }
      var P = [w].concat(k);
      return L && typeof L.arrayLimit == "number" && P.length > L.arrayLimit ? i(f(P, L), P.length - 1) : P;
    }
    var N = w;
    return r(w) && !r(k) && (N = f(w, L)), r(w) && r(k) ? (k.forEach(function(x, U) {
      if (n.call(w, U)) {
        var Q = w[U];
        Q && typeof Q == "object" && x && typeof x == "object" ? w[U] = z(Q, x, L) : w[w.length] = x;
      } else
        w[U] = x;
    }), w) : Object.keys(k).reduce(function(x, U) {
      var Q = k[U];
      if (n.call(x, U) ? x[U] = z(x[U], Q, L) : x[U] = Q, a(k) && !a(x) && i(x, s(k)), a(x)) {
        var ee = parseInt(U, 10);
        String(ee) === U && ee >= 0 && ee > s(x) && c(x, ee);
      }
      return x;
    }, N);
  }, y = function(w, k) {
    return Object.keys(k).reduce(function(L, D) {
      return L[D] = k[D], L;
    }, w);
  }, h = function(z, w, k) {
    var L = z.replace(/\+/g, " ");
    if (k === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, p = 1024, m = function(w, k, L, D, M) {
    if (w.length === 0)
      return w;
    var A = w;
    if (typeof w == "symbol" ? A = Symbol.prototype.toString.call(w) : typeof w != "string" && (A = String(w)), L === "iso-8859-1")
      return escape(A).replace(/%u[0-9a-f]{4}/gi, function(U) {
        return "%26%23" + parseInt(U.slice(2), 16) + "%3B";
      });
    for (var q = "", S = 0; S < A.length; S += p) {
      for (var F = A.length >= p ? A.slice(S, S + p) : A, P = [], N = 0; N < F.length; ++N) {
        var x = F.charCodeAt(N);
        if (x === 45 || x === 46 || x === 95 || x === 126 || x >= 48 && x <= 57 || x >= 65 && x <= 90 || x >= 97 && x <= 122 || M === e.RFC1738 && (x === 40 || x === 41)) {
          P[P.length] = F.charAt(N);
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
        N += 1, x = 65536 + ((x & 1023) << 10 | F.charCodeAt(N) & 1023), P[P.length] = u[240 | x >> 18] + u[128 | x >> 12 & 63] + u[128 | x >> 6 & 63] + u[128 | x & 63];
      }
      q += P.join("");
    }
    return q;
  }, b = function(w) {
    for (var k = [{ obj: { o: w }, prop: "o" }], L = [], D = 0; D < k.length; ++D)
      for (var M = k[D], A = M.obj[M.prop], q = Object.keys(A), S = 0; S < q.length; ++S) {
        var F = q[S], P = A[F];
        typeof P == "object" && P !== null && L.indexOf(P) === -1 && (k[k.length] = { obj: A, prop: F }, L[L.length] = P);
      }
    return d(k), w;
  }, E = function(w) {
    return Object.prototype.toString.call(w) === "[object RegExp]";
  }, g = function(w) {
    return !w || typeof w != "object" ? !1 : !!(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w));
  }, _ = function(w, k, L, D) {
    if (a(w)) {
      var M = s(w) + 1;
      return w[M] = k, c(w, M), w;
    }
    var A = [].concat(w, k);
    return A.length > L ? i(f(A, { plainObjects: D }), A.length - 1) : A;
  }, C = function(w, k) {
    if (r(w)) {
      for (var L = [], D = 0; D < w.length; D += 1)
        L[L.length] = k(w[D]);
      return L;
    }
    return k(w);
  };
  return ts = {
    arrayToObject: f,
    assign: y,
    combine: _,
    compact: b,
    decode: h,
    encode: m,
    isBuffer: g,
    isOverflow: a,
    isRegExp: E,
    markOverflow: i,
    maybeMap: C,
    merge: v
  }, ts;
}
var ns, ad;
function eO() {
  if (ad) return ns;
  ad = 1;
  var e = o0(), t = /* @__PURE__ */ i0(), n = /* @__PURE__ */ Cl(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(m) {
      return m + "[]";
    },
    comma: "comma",
    indices: function(m, b) {
      return m + "[" + b + "]";
    },
    repeat: function(m) {
      return m;
    }
  }, i = Array.isArray, a = Array.prototype.push, s = function(p, m) {
    a.apply(p, i(m) ? m : [m]);
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
    serializeDate: function(m) {
      return c.call(m);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(m) {
    return typeof m == "string" || typeof m == "number" || typeof m == "boolean" || typeof m == "symbol" || typeof m == "bigint";
  }, v = {}, y = function p(m, b, E, g, _, C, z, w, k, L, D, M, A, q, S, F, P, N) {
    for (var x = m, U = N, Q = 0, ee = !1; (U = U.get(v)) !== void 0 && !ee; ) {
      var fe = U.get(m);
      if (Q += 1, typeof fe < "u") {
        if (fe === Q)
          throw new RangeError("Cyclic object value");
        ee = !0;
      }
      typeof U.get(v) > "u" && (Q = 0);
    }
    if (typeof L == "function" ? x = L(b, x) : x instanceof Date ? x = A(x) : E === "comma" && i(x) && (x = t.maybeMap(x, function(O) {
      return O instanceof Date ? A(O) : O;
    })), x === null) {
      if (C)
        return k && !F ? k(b, d.encoder, P, "key", q) : b;
      x = "";
    }
    if (f(x) || t.isBuffer(x)) {
      if (k) {
        var ye = F ? b : k(b, d.encoder, P, "key", q);
        return [S(ye) + "=" + S(k(x, d.encoder, P, "value", q))];
      }
      return [S(b) + "=" + S(String(x))];
    }
    var _e = [];
    if (typeof x > "u")
      return _e;
    var ne;
    if (E === "comma" && i(x))
      F && k && (x = t.maybeMap(x, k)), ne = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (i(L))
      ne = L;
    else {
      var ie = Object.keys(x);
      ne = D ? ie.sort(D) : ie;
    }
    var me = w ? String(b).replace(/\./g, "%2E") : String(b), ze = g && i(x) && x.length === 1 ? me + "[]" : me;
    if (_ && i(x) && x.length === 0)
      return ze + "[]";
    for (var Se = 0; Se < ne.length; ++Se) {
      var se = ne[Se], we = typeof se == "object" && se && typeof se.value < "u" ? se.value : x[se];
      if (!(z && we === null)) {
        var ae = M && w ? String(se).replace(/\./g, "%2E") : String(se), ve = i(x) ? typeof E == "function" ? E(ze, ae) : ze : ze + (M ? "." + ae : "[" + ae + "]");
        N.set(m, Q);
        var R = e();
        R.set(v, N), s(_e, p(
          we,
          ve,
          E,
          g,
          _,
          C,
          z,
          w,
          E === "comma" && F && i(x) ? null : k,
          L,
          D,
          M,
          A,
          q,
          S,
          F,
          P,
          R
        ));
      }
    }
    return _e;
  }, h = function(m) {
    if (!m)
      return d;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.encodeDotInKeys < "u" && typeof m.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.encoder !== null && typeof m.encoder < "u" && typeof m.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = m.charset || d.charset;
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var E = n.default;
    if (typeof m.format < "u") {
      if (!r.call(n.formatters, m.format))
        throw new TypeError("Unknown format option provided.");
      E = m.format;
    }
    var g = n.formatters[E], _ = d.filter;
    (typeof m.filter == "function" || i(m.filter)) && (_ = m.filter);
    var C;
    if (m.arrayFormat in o ? C = m.arrayFormat : "indices" in m ? C = m.indices ? "indices" : "repeat" : C = d.arrayFormat, "commaRoundTrip" in m && typeof m.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var z = typeof m.allowDots > "u" ? m.encodeDotInKeys === !0 ? !0 : d.allowDots : !!m.allowDots;
    return {
      addQueryPrefix: typeof m.addQueryPrefix == "boolean" ? m.addQueryPrefix : d.addQueryPrefix,
      allowDots: z,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : d.allowEmptyArrays,
      arrayFormat: C,
      charset: b,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : d.charsetSentinel,
      commaRoundTrip: !!m.commaRoundTrip,
      delimiter: typeof m.delimiter > "u" ? d.delimiter : m.delimiter,
      encode: typeof m.encode == "boolean" ? m.encode : d.encode,
      encodeDotInKeys: typeof m.encodeDotInKeys == "boolean" ? m.encodeDotInKeys : d.encodeDotInKeys,
      encoder: typeof m.encoder == "function" ? m.encoder : d.encoder,
      encodeValuesOnly: typeof m.encodeValuesOnly == "boolean" ? m.encodeValuesOnly : d.encodeValuesOnly,
      filter: _,
      format: E,
      formatter: g,
      serializeDate: typeof m.serializeDate == "function" ? m.serializeDate : d.serializeDate,
      skipNulls: typeof m.skipNulls == "boolean" ? m.skipNulls : d.skipNulls,
      sort: typeof m.sort == "function" ? m.sort : null,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : d.strictNullHandling
    };
  };
  return ns = function(p, m) {
    var b = p, E = h(m), g, _;
    typeof E.filter == "function" ? (_ = E.filter, b = _("", b)) : i(E.filter) && (_ = E.filter, g = _);
    var C = [];
    if (typeof b != "object" || b === null)
      return "";
    var z = o[E.arrayFormat], w = z === "comma" && E.commaRoundTrip;
    g || (g = Object.keys(b)), E.sort && g.sort(E.sort);
    for (var k = e(), L = 0; L < g.length; ++L) {
      var D = g[L], M = b[D];
      E.skipNulls && M === null || s(C, y(
        M,
        D,
        z,
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
        k
      ));
    }
    var A = C.join(E.delimiter), q = E.addQueryPrefix === !0 ? "?" : "";
    return E.charsetSentinel && (E.charset === "iso-8859-1" ? q += "utf8=%26%2310003%3B&" : q += "utf8=%E2%9C%93&"), A.length > 0 ? q + A : "";
  }, ns;
}
var rs, sd;
function tO() {
  if (sd) return rs;
  sd = 1;
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
  }, o = function(y) {
    return y.replace(/&#(\d+);/g, function(h, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, i = function(y, h, p) {
    if (y && typeof y == "string" && h.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (h.throwOnLimitExceeded && p >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", c = function(h, p) {
    var m = { __proto__: null }, b = p.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    b = b.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var E = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, g = b.split(
      p.delimiter,
      p.throwOnLimitExceeded && typeof E < "u" ? E + 1 : E
    );
    if (p.throwOnLimitExceeded && typeof E < "u" && g.length > E)
      throw new RangeError("Parameter limit exceeded. Only " + E + " parameter" + (E === 1 ? "" : "s") + " allowed.");
    var _ = -1, C, z = p.charset;
    if (p.charsetSentinel)
      for (C = 0; C < g.length; ++C)
        g[C].indexOf("utf8=") === 0 && (g[C] === s ? z = "utf-8" : g[C] === a && (z = "iso-8859-1"), _ = C, C = g.length);
    for (C = 0; C < g.length; ++C)
      if (C !== _) {
        var w = g[C], k = w.indexOf("]="), L = k === -1 ? w.indexOf("=") : k + 1, D, M;
        if (L === -1 ? (D = p.decoder(w, r.decoder, z, "key"), M = p.strictNullHandling ? null : "") : (D = p.decoder(w.slice(0, L), r.decoder, z, "key"), D !== null && (M = e.maybeMap(
          i(
            w.slice(L + 1),
            p,
            n(m[D]) ? m[D].length : 0
          ),
          function(q) {
            return p.decoder(q, r.decoder, z, "value");
          }
        ))), M && p.interpretNumericEntities && z === "iso-8859-1" && (M = o(String(M))), w.indexOf("[]=") > -1 && (M = n(M) ? [M] : M), p.comma && n(M) && M.length > p.arrayLimit) {
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
  }, u = function(y, h, p, m) {
    var b = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var E = y.slice(0, -1).join("");
      b = Array.isArray(h) && h[E] ? h[E].length : 0;
    }
    for (var g = m ? h : i(h, p, b), _ = y.length - 1; _ >= 0; --_) {
      var C, z = y[_];
      if (z === "[]" && p.parseArrays)
        e.isOverflow(g) ? C = g : C = p.allowEmptyArrays && (g === "" || p.strictNullHandling && g === null) ? [] : e.combine(
          [],
          g,
          p.arrayLimit,
          p.plainObjects
        );
      else {
        C = p.plainObjects ? { __proto__: null } : {};
        var w = z.charAt(0) === "[" && z.charAt(z.length - 1) === "]" ? z.slice(1, -1) : z, k = p.decodeDotInKeys ? w.replace(/%2E/g, ".") : w, L = parseInt(k, 10), D = !isNaN(L) && z !== k && String(L) === k && L >= 0 && p.parseArrays;
        if (!p.parseArrays && k === "")
          C = { 0: g };
        else if (D && L < p.arrayLimit)
          C = [], C[L] = g;
        else {
          if (D && p.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          D ? (C[L] = g, e.markOverflow(C, L)) : k !== "__proto__" && (C[k] = g);
        }
      }
      g = C;
    }
    return g;
  }, d = function(h, p) {
    var m = p.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h;
    if (p.depth <= 0)
      return !p.plainObjects && t.call(Object.prototype, m) && !p.allowPrototypes ? void 0 : [m];
    var b = /(\[[^[\]]*])/, E = /(\[[^[\]]*])/g, g = b.exec(m), _ = g ? m.slice(0, g.index) : m, C = [];
    if (_) {
      if (!p.plainObjects && t.call(Object.prototype, _) && !p.allowPrototypes)
        return;
      C[C.length] = _;
    }
    for (var z = 0; (g = E.exec(m)) !== null && z < p.depth; ) {
      z += 1;
      var w = g[1].slice(1, -1);
      if (!p.plainObjects && t.call(Object.prototype, w) && !p.allowPrototypes)
        return;
      C[C.length] = g[1];
    }
    if (g) {
      if (p.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
      C[C.length] = "[" + m.slice(g.index) + "]";
    }
    return C;
  }, f = function(h, p, m, b) {
    if (h) {
      var E = d(h, m);
      if (E)
        return u(E, p, m, b);
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
    var b = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : r.allowDots : !!h.allowDots;
    return {
      allowDots: b,
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
  return rs = function(y, h) {
    var p = v(h);
    if (y === "" || y === null || typeof y > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var m = typeof y == "string" ? c(y, p) : y, b = p.plainObjects ? { __proto__: null } : {}, E = Object.keys(m), g = 0; g < E.length; ++g) {
      var _ = E[g], C = f(_, m[_], p, typeof y == "string");
      b = e.merge(b, C, p);
    }
    return p.allowSparse === !0 ? b : e.compact(b);
  }, rs;
}
var os, ld;
function nO() {
  if (ld) return os;
  ld = 1;
  var e = /* @__PURE__ */ eO(), t = /* @__PURE__ */ tO(), n = /* @__PURE__ */ Cl();
  return os = {
    formats: n,
    parse: t,
    stringify: e
  }, os;
}
var ud = /* @__PURE__ */ nO();
function a0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rO } = Object.prototype, { getPrototypeOf: Al } = Object, { iterator: Mi, toStringTag: s0 } = Symbol, Di = /* @__PURE__ */ ((e) => (t) => {
  const n = rO.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (t) => Di(t) === e), Fi = (e) => (t) => typeof t === e, { isArray: vr } = Array, dr = Fi("undefined");
function ao(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const l0 = Dt("ArrayBuffer");
function oO(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && l0(e.buffer), t;
}
const iO = Fi("string"), ht = Fi("function"), u0 = Fi("number"), so = (e) => e !== null && typeof e == "object", aO = (e) => e === !0 || e === !1, Bo = (e) => {
  if (Di(e) !== "object")
    return !1;
  const t = Al(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(s0 in e) && !(Mi in e);
}, sO = (e) => {
  if (!so(e) || ao(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, lO = Dt("Date"), uO = Dt("File"), cO = (e) => !!(e && typeof e.uri < "u"), dO = (e) => e && typeof e.getParts < "u", fO = Dt("Blob"), pO = Dt("FileList"), hO = (e) => so(e) && ht(e.pipe);
function mO() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const cd = mO(), dd = typeof cd.FormData < "u" ? cd.FormData : void 0, vO = (e) => {
  let t;
  return e && (dd && e instanceof dd || ht(e.append) && ((t = Di(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, gO = Dt("URLSearchParams"), [yO, bO, xO, wO] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Dt), _O = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), vr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (ao(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (r = 0; r < a; r++)
      s = i[r], t.call(null, e[s], s, e);
  }
}
function c0(e, t) {
  if (ao(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, d0 = (e) => !dr(e) && e !== Nn;
function js() {
  const { caseless: e, skipUndefined: t } = d0(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = e && c0(n, i) || i;
    Bo(n[a]) && Bo(o) ? n[a] = js(n[a], o) : Bo(o) ? n[a] = js({}, o) : vr(o) ? n[a] = o.slice() : (!t || !dr(o)) && (n[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && lo(arguments[o], r);
  return n;
}
const kO = (e, t, n, { allOwnKeys: r } = {}) => (lo(
  t,
  (o, i) => {
    n && ht(o) ? Object.defineProperty(e, i, {
      value: a0(o, n),
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
), e), SO = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), EO = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $O = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && Al(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zO = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, PO = (e) => {
  if (!e) return null;
  if (vr(e)) return e;
  let t = e.length;
  if (!u0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, CO = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Al(Uint8Array)), AO = (e, t) => {
  const r = (e && e[Mi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, TO = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, OO = Dt("HTMLFormElement"), NO = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), fd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), IO = Dt("RegExp"), f0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  lo(n, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (r[i] = a || o);
  }), Object.defineProperties(e, r);
}, RO = (e) => {
  f0(e, (t, n) => {
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
}, MO = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return vr(e) ? r(e) : r(String(e).split(t)), n;
}, DO = () => {
}, FO = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function BO(e) {
  return !!(e && ht(e.append) && e[s0] === "FormData" && e[Mi]);
}
const LO = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (so(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ao(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = vr(r) ? [] : {};
        return lo(r, (a, s) => {
          const c = n(a, o + 1);
          !dr(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, UO = Dt("AsyncFunction"), qO = (e) => e && (so(e) || ht(e)) && ht(e.then) && ht(e.catch), p0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Nn.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Nn && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Nn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Nn.postMessage)), VO = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nn) : typeof process < "u" && process.nextTick || p0, jO = (e) => e != null && ht(e[Mi]), W = {
  isArray: vr,
  isArrayBuffer: l0,
  isBuffer: ao,
  isFormData: vO,
  isArrayBufferView: oO,
  isString: iO,
  isNumber: u0,
  isBoolean: aO,
  isObject: so,
  isPlainObject: Bo,
  isEmptyObject: sO,
  isReadableStream: yO,
  isRequest: bO,
  isResponse: xO,
  isHeaders: wO,
  isUndefined: dr,
  isDate: lO,
  isFile: uO,
  isReactNativeBlob: cO,
  isReactNative: dO,
  isBlob: fO,
  isRegExp: IO,
  isFunction: ht,
  isStream: hO,
  isURLSearchParams: gO,
  isTypedArray: CO,
  isFileList: pO,
  forEach: lo,
  merge: js,
  extend: kO,
  trim: _O,
  stripBOM: SO,
  inherits: EO,
  toFlatObject: $O,
  kindOf: Di,
  kindOfTest: Dt,
  endsWith: zO,
  toArray: PO,
  forEachEntry: AO,
  matchAll: TO,
  isHTMLForm: OO,
  hasOwnProperty: fd,
  hasOwnProp: fd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: f0,
  freezeMethods: RO,
  toObjectSet: MO,
  toCamelCase: NO,
  noop: DO,
  toFiniteNumber: FO,
  findKey: c0,
  global: Nn,
  isContextDefined: d0,
  isSpecCompliantForm: BO,
  toJSONObject: LO,
  isAsyncFn: UO,
  isThenable: qO,
  setImmediate: p0,
  asap: VO,
  isIterable: jO
};
let ke = class h0 extends Error {
  static from(t, n, r, o, i, a) {
    const s = new h0(t.message, n || t.code, r, o, i);
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
      config: W.toJSONObject(this.config),
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
const HO = null;
function Hs(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function m0(e) {
  return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function is(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = m0(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function GO(e) {
  return W.isArray(e) && !e.some(Hs);
}
const WO = W.toFlatObject(W, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bi(e, t, n) {
  if (!W.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = W.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(p, m) {
      return !W.isUndefined(m[p]);
    }
  );
  const r = n.metaTokens, o = n.visitor || d, i = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(t);
  if (!W.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (W.isDate(h))
      return h.toISOString();
    if (W.isBoolean(h))
      return h.toString();
    if (!c && W.isBlob(h))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(h) || W.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, p, m) {
    let b = h;
    if (W.isReactNative(t) && W.isReactNativeBlob(h))
      return t.append(is(m, p, i), u(h)), !1;
    if (h && !m && typeof h == "object") {
      if (W.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), h = JSON.stringify(h);
      else if (W.isArray(h) && GO(h) || (W.isFileList(h) || W.endsWith(p, "[]")) && (b = W.toArray(h)))
        return p = m0(p), b.forEach(function(g, _) {
          !(W.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? is([p], _, i) : a === null ? p : p + "[]",
            u(g)
          );
        }), !1;
    }
    return Hs(h) ? !0 : (t.append(is(m, p, i), u(h)), !1);
  }
  const f = [], v = Object.assign(WO, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Hs
  });
  function y(h, p) {
    if (!W.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(h), W.forEach(h, function(b, E) {
        (!(W.isUndefined(b) || b === null) && o.call(t, b, W.isString(E) ? E.trim() : E, p, v)) === !0 && y(b, p ? p.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!W.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function pd(e) {
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
function Tl(e, t) {
  this._pairs = [], e && Bi(e, this, t);
}
const v0 = Tl.prototype;
v0.append = function(t, n) {
  this._pairs.push([t, n]);
};
v0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, pd);
  } : pd;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function XO(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function g0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || XO, o = W.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let a;
  if (i ? a = i(t, o) : a = W.isURLSearchParams(t) ? t.toString() : new Tl(t, o).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class hd {
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
    W.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ol = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, YO = typeof URLSearchParams < "u" ? URLSearchParams : Tl, KO = typeof FormData < "u" ? FormData : null, ZO = typeof Blob < "u" ? Blob : null, JO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: YO,
    FormData: KO,
    Blob: ZO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nl = typeof window < "u" && typeof document < "u", Gs = typeof navigator == "object" && navigator || void 0, QO = Nl && (!Gs || ["ReactNative", "NativeScript", "NS"].indexOf(Gs.product) < 0), eN = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", tN = Nl && window.location.href || "http://localhost", nN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nl,
  hasStandardBrowserEnv: QO,
  hasStandardBrowserWebWorkerEnv: eN,
  navigator: Gs,
  origin: tN
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...nN,
  ...JO
};
function rN(e, t) {
  return Bi(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ct.isNode && W.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function oN(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function iN(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function y0(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= n.length;
    return a = !a && W.isArray(o) ? o.length : a, c ? (W.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !W.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && W.isArray(o[a]) && (o[a] = iN(o[a])), !s);
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const n = {};
    return W.forEachEntry(e, (r, o) => {
      t(oN(r), o, n, 0);
    }), n;
  }
  return null;
}
function aN(e, t, n) {
  if (W.isString(e))
    try {
      return (t || JSON.parse)(e), W.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const uo = {
  transitional: Ol,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = W.isObject(t);
      if (i && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t))
        return o ? JSON.stringify(y0(t)) : t;
      if (W.isArrayBuffer(t) || W.isBuffer(t) || W.isStream(t) || W.isFile(t) || W.isBlob(t) || W.isReadableStream(t))
        return t;
      if (W.isArrayBufferView(t))
        return t.buffer;
      if (W.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return rN(t, this.formSerializer).toString();
        if ((s = W.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Bi(
            s ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), aN(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || uo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (W.isResponse(t) || W.isReadableStream(t))
        return t;
      if (t && W.isString(t) && (r && !this.responseType || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError" ? ke.from(s, ke.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
W.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  uo.headers[e] = {};
});
const sN = W.toObjectSet([
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
]), lN = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && sN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, md = /* @__PURE__ */ Symbol("internals"), uN = (e) => !/[\r\n]/.test(e);
function b0(e, t) {
  if (!(e === !1 || e == null)) {
    if (W.isArray(e)) {
      e.forEach((n) => b0(n, t));
      return;
    }
    if (!uN(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function kr(e) {
  return e && String(e).trim().toLowerCase();
}
function cN(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Lo(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(Lo) : cN(String(e));
}
function dN(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const fN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function as(e, t, n, r, o) {
  if (W.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!W.isString(t)) {
    if (W.isString(r))
      return t.indexOf(r) !== -1;
    if (W.isRegExp(r))
      return r.test(t);
  }
}
function pN(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function hN(e, t) {
  const n = W.toCamelCase(" " + t);
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
      const d = kr(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = W.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (b0(s, c), o[f || c] = Lo(s));
    }
    const a = (s, c) => W.forEach(s, (u, d) => i(u, d, c));
    if (W.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (W.isString(t) && (t = t.trim()) && !fN(t))
      a(lN(t), n);
    else if (W.isObject(t) && W.isIterable(t)) {
      let s = {}, c, u;
      for (const d of t) {
        if (!W.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        s[u = d[0]] = (c = s[u]) ? W.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      a(s, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = kr(t), t) {
      const r = W.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return dN(o);
        if (W.isFunction(n))
          return n.call(this, o, r);
        if (W.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = kr(t), t) {
      const r = W.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || as(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = kr(a), a) {
        const s = W.findKey(r, a);
        s && (!n || as(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return W.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || as(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return W.forEach(this, (o, i) => {
      const a = W.findKey(r, i);
      if (a) {
        n[a] = Lo(o), delete n[i];
        return;
      }
      const s = t ? pN(i) : String(i).trim();
      s !== i && delete n[i], n[s] = Lo(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && W.isArray(r) ? r.join(", ") : r);
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
    const r = (this[md] = this[md] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = kr(a);
      r[s] || (hN(o, a), r[s] = !0);
    }
    return W.isArray(t) ? t.forEach(i) : i(t), this;
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
W.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
W.freezeMethods(mt);
function ss(e, t) {
  const n = this || uo, r = t || n, o = mt.from(r.headers);
  let i = r.data;
  return W.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function x0(e) {
  return !!(e && e.__CANCEL__);
}
let co = class extends ke {
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
function w0(e, t, n) {
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
function mN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vN(e, t) {
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
function gN(e, t) {
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
const di = (e, t, n = 3) => {
  let r = 0;
  const o = vN(50, 250);
  return gN((i) => {
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
}, vd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, gd = (e) => (...t) => W.asap(() => e(...t)), yN = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, bN = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      W.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), W.isString(r) && s.push(`path=${r}`), W.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), W.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function xN(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _0(e, t, n) {
  let r = !xN(t);
  return e && (r || n == !1) ? wN(e, t) : t;
}
const yd = (e) => e instanceof mt ? { ...e } : e;
function jn(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, v) {
    return W.isPlainObject(u) && W.isPlainObject(d) ? W.merge.call({ caseless: v }, u, d) : W.isPlainObject(d) ? W.merge({}, d) : W.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f, v) {
    if (W.isUndefined(d)) {
      if (!W.isUndefined(u))
        return r(void 0, u, f, v);
    } else return r(u, d, f, v);
  }
  function i(u, d) {
    if (!W.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (W.isUndefined(d)) {
      if (!W.isUndefined(u))
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
    headers: (u, d, f) => o(yd(u), yd(d), f, !0)
  };
  return W.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const f = W.hasOwnProp(c, d) ? c[d] : o, v = f(e[d], t[d], d);
    W.isUndefined(v) && f !== s || (n[d] = v);
  }), n;
}
const k0 = (e) => {
  const t = jn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  if (t.headers = a = mt.from(a), t.url = g0(
    _0(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), s && a.set(
    "Authorization",
    "Basic " + btoa(
      (s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")
    )
  ), W.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (W.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([d, f]) => {
        u.includes(d.toLowerCase()) && a.set(d, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && W.isFunction(r) && (r = r(t)), r || r !== !1 && yN(t.url))) {
    const c = o && i && bN.read(i);
    c && a.set(o, c);
  }
  return t;
}, _N = typeof XMLHttpRequest < "u", kN = _N && function(e) {
  return new Promise(function(n, r) {
    const o = k0(e);
    let i = o.data;
    const a = mt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = o, d, f, v, y, h;
    function p() {
      y && y(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout;
    function b() {
      if (!m)
        return;
      const g = mt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), C = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: g,
        config: e,
        request: m
      };
      w0(
        function(w) {
          n(w), p();
        },
        function(w) {
          r(w), p();
        },
        C
      ), m = null;
    }
    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, m.onabort = function() {
      m && (r(new ke("Request aborted", ke.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(_) {
      const C = _ && _.message ? _.message : "Network Error", z = new ke(C, ke.ERR_NETWORK, e, m);
      z.event = _ || null, r(z), m = null;
    }, m.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || Ol;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), r(
        new ke(
          _,
          C.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
          e,
          m
        )
      ), m = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in m && W.forEach(a.toJSON(), function(_, C) {
      m.setRequestHeader(C, _);
    }), W.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), s && s !== "json" && (m.responseType = o.responseType), u && ([v, h] = di(u, !0), m.addEventListener("progress", v)), c && m.upload && ([f, y] = di(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (d = (g) => {
      m && (r(!g || g.type ? new co(null, e, m) : g), m.abort(), m = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const E = mN(o.url);
    if (E && ct.protocols.indexOf(E) === -1) {
      r(
        new ke(
          "Unsupported protocol " + E + ":",
          ke.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    m.send(i || null);
  });
}, SN = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, s();
        const d = u instanceof Error ? u : this.reason;
        r.abort(
          d instanceof ke ? d : new co(d instanceof Error ? d.message : d)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new ke(`timeout of ${t}ms exceeded`, ke.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => W.asap(s), c;
  }
}, EN = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, $N = async function* (e, t) {
  for await (const n of zN(e))
    yield* EN(n, t);
}, zN = async function* (e) {
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
}, bd = (e, t, n, r) => {
  const o = $N(e, t);
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
}, xd = 64 * 1024, { isFunction: zo } = W, PN = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(W.global), { ReadableStream: wd, TextEncoder: _d } = W.global, kd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, CN = (e) => {
  e = W.merge.call(
    {
      skipUndefined: !0
    },
    PN,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? zo(t) : typeof fetch == "function", i = zo(n), a = zo(r);
  if (!o)
    return !1;
  const s = o && zo(wd), c = o && (typeof _d == "function" ? /* @__PURE__ */ ((h) => (p) => h.encode(p))(new _d()) : async (h) => new Uint8Array(await new n(h).arrayBuffer())), u = i && s && kd(() => {
    let h = !1;
    const p = new wd(), m = new n(ct.origin, {
      body: p,
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return p.cancel(), h && !m;
  }), d = a && s && kd(() => W.isReadableStream(new r("").body)), f = {
    stream: d && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !f[h] && (f[h] = (p, m) => {
      let b = p && p[h];
      if (b)
        return b.call(p);
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
    if (W.isBlob(h))
      return h.size;
    if (W.isSpecCompliantForm(h))
      return (await new n(ct.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (W.isArrayBufferView(h) || W.isArrayBuffer(h))
      return h.byteLength;
    if (W.isURLSearchParams(h) && (h = h + ""), W.isString(h))
      return (await c(h)).byteLength;
  }, y = async (h, p) => {
    const m = W.toFiniteNumber(h.getContentLength());
    return m ?? v(p);
  };
  return async (h) => {
    let {
      url: p,
      method: m,
      data: b,
      signal: E,
      cancelToken: g,
      timeout: _,
      onDownloadProgress: C,
      onUploadProgress: z,
      responseType: w,
      headers: k,
      withCredentials: L = "same-origin",
      fetchOptions: D
    } = k0(h), M = t || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let A = SN(
      [E, g && g.toAbortSignal()],
      _
    ), q = null;
    const S = A && A.unsubscribe && (() => {
      A.unsubscribe();
    });
    let F;
    try {
      if (z && u && m !== "get" && m !== "head" && (F = await y(k, b)) !== 0) {
        let ee = new n(p, {
          method: "POST",
          body: b,
          duplex: "half"
        }), fe;
        if (W.isFormData(b) && (fe = ee.headers.get("content-type")) && k.setContentType(fe), ee.body) {
          const [ye, _e] = vd(
            F,
            di(gd(z))
          );
          b = bd(ee.body, xd, ye, _e);
        }
      }
      W.isString(L) || (L = L ? "include" : "omit");
      const P = i && "credentials" in n.prototype, N = {
        ...D,
        signal: A,
        method: m.toUpperCase(),
        headers: k.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: P ? L : void 0
      };
      q = i && new n(p, N);
      let x = await (i ? M(q, D) : M(p, N));
      const U = d && (w === "stream" || w === "response");
      if (d && (C || U && S)) {
        const ee = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          ee[ne] = x[ne];
        });
        const fe = W.toFiniteNumber(x.headers.get("content-length")), [ye, _e] = C && vd(
          fe,
          di(gd(C), !0)
        ) || [];
        x = new r(
          bd(x.body, xd, ye, () => {
            _e && _e(), S && S();
          }),
          ee
        );
      }
      w = w || "text";
      let Q = await f[W.findKey(f, w) || "text"](
        x,
        h
      );
      return !U && S && S(), await new Promise((ee, fe) => {
        w0(ee, fe, {
          data: Q,
          headers: mt.from(x.headers),
          status: x.status,
          statusText: x.statusText,
          config: h,
          request: q
        });
      });
    } catch (P) {
      throw S && S(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new ke(
          "Network Error",
          ke.ERR_NETWORK,
          h,
          q,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : ke.from(P, P && P.code, h, q, P && P.response);
    }
  };
}, AN = /* @__PURE__ */ new Map(), S0 = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, i = [r, o, n];
  let a = i.length, s = a, c, u, d = AN;
  for (; s--; )
    c = i[s], u = d.get(c), u === void 0 && d.set(c, u = s ? /* @__PURE__ */ new Map() : CN(t)), d = u;
  return u;
};
S0();
const Il = {
  http: HO,
  xhr: kN,
  fetch: {
    get: S0
  }
};
W.forEach(Il, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Sd = (e) => `- ${e}`, TN = (e) => W.isFunction(e) || e === null || e === !1;
function ON(e, t) {
  e = W.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const i = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let s;
    if (o = r, !TN(r) && (o = Il[(s = String(r)).toLowerCase()], o === void 0))
      throw new ke(`Unknown adapter '${s}'`);
    if (o && (W.isFunction(o) || (o = o.get(t))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? a.length > 1 ? `since :
` + a.map(Sd).join(`
`) : " " + Sd(a[0]) : "as no adapter specified";
    throw new ke(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const E0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ON,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Il
};
function ls(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new co(null, e);
}
function Ed(e) {
  return ls(e), e.headers = mt.from(e.headers), e.data = ss.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), E0.getAdapter(e.adapter || uo.adapter, e)(e).then(
    function(r) {
      return ls(e), r.data = ss.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return x0(r) || (ls(e), r && r.response && (r.response.data = ss.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const $0 = "1.15.0", Li = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Li[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $d = {};
Li.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + $0 + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ke(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ke.ERR_DEPRECATED
      );
    return n && !$d[a] && ($d[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
Li.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function NN(e, t, n) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new ke(
          "option " + i + " must be " + c,
          ke.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new ke("Unknown option " + i, ke.ERR_BAD_OPTION);
  }
}
const Uo = {
  assertOptions: NN,
  validators: Li
}, St = Uo.validators;
let Dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new hd(),
      response: new hd()
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
    r !== void 0 && Uo.assertOptions(
      r,
      {
        silentJSONParsing: St.transitional(St.boolean),
        forcedJSONParsing: St.transitional(St.boolean),
        clarifyTimeoutError: St.transitional(St.boolean),
        legacyInterceptorReqResOrdering: St.transitional(St.boolean)
      },
      !1
    ), o != null && (W.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Uo.assertOptions(
      o,
      {
        encode: St.function,
        serialize: St.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Uo.assertOptions(
      n,
      {
        baseUrl: St.spelling("baseURL"),
        withXsrfToken: St.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && W.merge(i.common, i[n.method]);
    i && W.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (h) => {
      delete i[h];
    }), n.headers = mt.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      if (typeof p.runWhen == "function" && p.runWhen(n) === !1)
        return;
      c = c && p.synchronous;
      const m = n.transitional || Ol;
      m && m.legacyInterceptorReqResOrdering ? s.unshift(p.fulfilled, p.rejected) : s.push(p.fulfilled, p.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let d, f = 0, v;
    if (!c) {
      const h = [Ed.bind(this), void 0];
      for (h.unshift(...s), h.push(...u), v = h.length, d = Promise.resolve(n); f < v; )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    v = s.length;
    let y = n;
    for (; f < v; ) {
      const h = s[f++], p = s[f++];
      try {
        y = h(y);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      d = Ed.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, v = u.length; f < v; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = jn(this.defaults, t);
    const n = _0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return g0(n, t.params, t.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function(t) {
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
W.forEach(["post", "put", "patch"], function(t) {
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
let IN = class z0 {
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
      r.reason || (r.reason = new co(i, a, s), n(r.reason));
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
      token: new z0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function RN(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function MN(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const Ws = {
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
Object.entries(Ws).forEach(([e, t]) => {
  Ws[t] = e;
});
function P0(e) {
  const t = new Dn(e), n = a0(Dn.prototype.request, t);
  return W.extend(n, Dn.prototype, t, { allOwnKeys: !0 }), W.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return P0(jn(e, o));
  }, n;
}
const Ke = P0(uo);
Ke.Axios = Dn;
Ke.CanceledError = co;
Ke.CancelToken = IN;
Ke.isCancel = x0;
Ke.VERSION = $0;
Ke.toFormData = Bi;
Ke.AxiosError = ke;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(t) {
  return Promise.all(t);
};
Ke.spread = RN;
Ke.isAxiosError = MN;
Ke.mergeConfig = jn;
Ke.AxiosHeaders = mt;
Ke.formToJSON = (e) => y0(W.isHTMLForm(e) ? new FormData(e) : e);
Ke.getAdapter = E0.getAdapter;
Ke.HttpStatusCode = Ws;
Ke.default = Ke;
const {
  Axios: zI,
  AxiosError: PI,
  CanceledError: CI,
  isCancel: C0,
  CancelToken: AI,
  VERSION: TI,
  all: OI,
  Cancel: NI,
  isAxiosError: A0,
  spread: II,
  toFormData: RI,
  AxiosHeaders: MI,
  HttpStatusCode: DI,
  formToJSON: FI,
  getAdapter: BI,
  mergeConfig: DN
} = Ke;
var FN = class {
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
}, kn = new FN({
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
function Jr(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function kt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var zd = (e) => kt("before", { cancelable: !0, detail: { visit: e } }), BN = (e) => kt("error", { detail: { errors: e } }), LN = (e) => kt("exception", { cancelable: !0, detail: { exception: e } }), UN = (e) => kt("finish", { detail: { visit: e } }), qN = (e) => kt("invalid", { cancelable: !0, detail: { response: e } }), VN = (e) => kt("beforeUpdate", { detail: { page: e } }), Mr = (e) => kt("navigate", { detail: { page: e } }), jN = (e) => kt("progress", { detail: { progress: e } }), HN = (e) => kt("start", { detail: { visit: e } }), GN = (e) => kt("success", { detail: { page: e } }), WN = (e, t) => kt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), XN = (e) => kt("prefetching", { detail: { visit: e } }), fi = (e) => kt("flash", { detail: { flash: e } }), dt = class {
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
var YN = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = T0(), n = await O0(), r = await t8(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await ZN(t, r, e);
}, fr = {
  key: "historyKey",
  iv: "historyIv"
}, KN = async (e) => {
  const t = T0(), n = await O0();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await JN(t, n, e);
}, ZN = async (e, t, n) => {
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
}, JN = async (e, t, n) => {
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
}, T0 = () => {
  const e = dt.get(fr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(fr.iv, Array.from(t)), t;
}, QN = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), e8 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(fr.key, Array.from(new Uint8Array(t)));
}, t8 = async (e) => {
  if (e)
    return e;
  const t = await QN();
  return t ? (await e8(t), t) : null;
}, O0 = async () => {
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
}, N0 = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !n8(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, n8 = (e, t) => {
  switch (typeof e) {
    case "object":
      return N0(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, r8 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Pd = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(r8))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, o8 = class {
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
          Ut.removeFromInFlight(e), d(f);
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
    return [Pd(t), Pd(n)];
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
    return N0(
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
}, Ut = new o8(), us = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, i8 = (e) => {
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
}, I0 = (e, t) => {
  if (!t)
    return e.filter((i) => us(i));
  const n = e.indexOf(t), r = [], o = [];
  for (let i = n; i >= 0; i--) {
    const a = e[i];
    if (us(a))
      r.push(a);
    else
      break;
  }
  for (let i = n + 1; i < e.length; i++) {
    const a = e[i];
    if (us(a))
      o.push(a);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Dr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Dr(e, t - 1) : e();
  });
}, Ar = typeof window > "u", a8 = !Ar && /Firefox/i.test(window.navigator.userAgent), ft = class {
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
    if (a8 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return Dr(() => window.scrollTo(0, 0), 2);
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
}, Rl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function Xs(e) {
  return Rl(e) || e instanceof FormData && Array.from(e.values()).some((t) => Xs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Xs(t));
}
var Ys = (e) => e instanceof FormData;
function R0(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && D0(t, M0(n, o, "indices"), e[o], r);
  return t;
}
function M0(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function D0(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => D0(e, M0(t, o.toString(), r), n[o], r)
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
  R0(n, e, t, r);
}
function $t(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var s8 = (e, t, n, r, o) => {
  let i = typeof e == "string" ? $t(e) : e;
  if ((Xs(t) || r) && !Ys(t) && (kn.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = R0(t, new FormData(), null, o)), Ys(t))
    return [i, t];
  const [a, s] = Ml(n, i, t, o);
  return [$t(a), s];
};
function Ml(e, t, n, r = "brackets") {
  const o = e === "get" && !Ys(n) && Object.keys(n).length > 0, i = F0(t.toString()), a = i || t.toString().startsWith("/") || t.toString() === "", s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), c = /^[.]{1,2}([/]|$)/.test(t.toString()), u = t.toString().includes("?") || o, d = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = ud.stringify(
      { ...ud.parse(f.search, y), ...n },
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
function pi(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Cd = (e, t) => {
  e.hash && !t.hash && pi(e).href === t.href && (t.hash = e.hash);
}, hi = (e, t) => pi(e).href === pi(t).href, l8 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function ln(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function F0(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function u8(e, t) {
  const n = typeof e == "string" ? $t(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var c8 = class {
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
      t = t || hi($t(e.url), c);
      const d = { ...e, flash: {} };
      return new Promise(
        (f) => t ? Me.replaceState(d, f) : Me.pushState(d, f)
      ).then(() => {
        const f = !this.isTheSame(e);
        if (!f && Object.keys(e.props.errors || {}).length > 0 && (o = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && Ut.updateCachedOncePropsFromCurrentPage(), f && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: a,
          page: e,
          preserveState: r,
          viewTransition: o
        }).then(() => {
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(u)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Ht.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Mr(e);
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
}, he = new c8(), Ui = class {
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
}, er = typeof window > "u", Sr = new Ui(), Ad = !er && /CriOS/.test(window.navigator.userAgent), d8 = class {
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
      this.current = e, Sr.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return Ad ? new Promise((o) => {
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
    return new Promise((n) => e.encryptHistory ? YN(t).then(n) : n(t));
  }
  processQueue() {
    return Sr.process();
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
    return e instanceof ArrayBuffer ? KN(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Sr.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !xn(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    Sr.add(() => Promise.resolve().then(() => {
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
      this.current = e, Sr.add(() => this.getPageData(e).then((o) => {
        const i = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return Ad ? new Promise((a) => {
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
var Me = new d8(), f8 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", Jr(ft.onWindowScroll.bind(ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Jr(ft.onScroll.bind(ft), 100), !0);
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
        ft.restore(Me.getScrollRegions()), Mr(he.get());
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
}, Ht = new f8(), p8 = class {
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
}, cs = new p8(), h8 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    cs.isReload() && (Me.deleteState(Me.rememberedState), Me.clearInitialState(Me.rememberedState));
  }
  static handleBackForward() {
    if (!cs.isBackForward() || !Me.browserHasHistoryEntry())
      return !1;
    const e = Me.getScrollRegions();
    return Me.decrypt().then((t) => {
      he.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Mr(he.get());
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
        e.preserveScroll && ft.restore(n), Mr(he.get());
      });
    }).catch(() => {
      Ht.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && he.setUrlHash(window.location.hash), he.set(he.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      cs.isReload() ? ft.restore(Me.getScrollRegions()) : ft.scrollToAnchor();
      const e = he.get();
      Mr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => fi(t));
    });
  }
}, m8 = class {
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
}, v8 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new m8(e, t, n);
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
}, g8 = new v8(), Ks = class qo {
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
    return new qo(t);
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
    this.params.preserveScroll = qo.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = qo.resolvePreserveOption(this.params.preserveState, t);
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
}, B0 = {
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
}, y8 = {
  show(e) {
    const { iframe: t, page: n } = B0.createIframeAndPage(e);
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
}, b8 = new Ui(), Td = class L0 {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new L0(t, n, r);
  }
  async handlePrefetch() {
    hi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return b8.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), WN(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await Me.processQueue(), Me.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = he.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return BN(r), this.requestParams.all().onError(r);
    }
    Ye.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ye.flush(he.get().url);
    const { flash: n } = he.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (fi(n), this.requestParams.all().onFlash(n)), GN(he.get()), await this.requestParams.all().onSuccess(he.get()), Me.preserveUrl = !1;
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
      return Cd(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (qN(t))
      return kn.get("future.useDialogForErrorModal") ? y8.show(t.data) : B0.show(t.data);
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
      hi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), he.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = Me.preserveUrl ? he.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), VN(t), he.set(t, {
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
    return Cd(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== he.get().component || kn.get("future.preserveEqualProps") !== !0)
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
      const u = he.get().props[c], d = t.props[c], f = (v, y, h) => Array.isArray(y) ? this.mergeOrMatchItems(v, y, h, i) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (p, m) => (p[m] = f(v ? v[m] : void 0, y[m], `${h}.${m}`), p),
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
}, Od = class U0 {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Ks.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new U0(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), HN(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), XN(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Ke({
      method: this.requestParams.all().method,
      url: pi(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Td.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Td.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Ke.isCancel(n) && LN(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, UN(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, jN(t), this.requestParams.all().onProgress(t));
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
}, Nd = class {
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
}, x8 = class {
  constructor() {
    this.syncRequestStream = new Nd({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Nd({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Ui();
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
    }), h8.handle(), Ht.init(), Ht.on("missingHistoryItem", () => {
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
    return g8.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !zd(n))
      return;
    const o = $t(he.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? l8(n.url, o) : hi(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !he.isCleared() && !n.preserveUrl && ft.save();
    const s = {
      ...n,
      ...r
    }, c = Ut.get(s);
    c ? (Fr.reveal(c.inFlight), Ut.use(c, s)) : (Fr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send(Od.create(s, he.get())));
  }
  getCached(e, t = {}) {
    return Ut.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Ut.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Ut.removeAll();
  }
  flushByCacheTags(e) {
    Ut.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return Ut.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, n = {}) {
    if ((t.method ?? (ln(e) ? e.method : "get")) !== "get")
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
    if (s.onBefore(o) === !1 || !zd(o))
      return;
    Fr.hide(), this.asyncRequestStream.interruptInFlight();
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
      Ut.add(
        c,
        (d) => {
          this.asyncRequestStream.send(Od.create(d, he.get()));
        },
        {
          cacheFor: kn.get("prefetch.cacheFor"),
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
    he.setFlash(r), Object.keys(r).length && fi(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = he.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((p) => [p.prop, n.props[p.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, i = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: a, onError: s, onFinish: c, onFlash: u, onSuccess: d, ...f } = e, v = {
      ...n,
      ...f,
      flash: i ?? {},
      props: o
    }, y = Ks.resolvePreserveOption(e.preserveScroll ?? !1, v), h = Ks.resolvePreserveOption(e.preserveState ?? !1, v);
    return he.set(v, {
      replace: t,
      preserveScroll: y,
      preserveState: h,
      viewTransition: a
    }).then(() => {
      const p = he.get().flash;
      Object.keys(p).length > 0 && (fi(p), u?.(p));
      const m = he.get().props.errors || {};
      if (Object.keys(m).length === 0) {
        d?.(he.get());
        return;
      }
      const b = e.errorBag ? m[e.errorBag || ""] || {} : m;
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
    if (ln(e)) {
      const u = e;
      e = u.url, t.method = t.method ?? u.method;
    }
    const r = kn.get("visitOptions"), o = r ? r(e.toString(), st(t)) || {} : {}, i = {
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
    }, [a, s] = s8(
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
}, Vo = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? ln(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : ln(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function w8(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, i) => i === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function _8(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function k8(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function S8(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function jo(e) {
  if (Array.isArray(e))
    return e.map(jo);
  if (typeof e != "object" || e === null || Rl(e))
    return e;
  if (S8(e)) {
    const n = [];
    for (let r = 0; r < Object.keys(e).length; r++)
      n[r] = jo(e[r]);
    return n;
  }
  const t = {};
  for (const n in e)
    t[n] = jo(e[n]);
  return t;
}
function Id(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = _8(w8(n));
    if (o[o.length - 1] === "") {
      const i = o.slice(0, -1), a = xt(t, i);
      if (Array.isArray(a))
        a.push(r);
      else if (a && typeof a == "object" && !Rl(a)) {
        const s = Object.keys(a).filter((c) => /^\d+$/.test(c)).map(Number).sort((c, u) => c - u);
        Et(t, i, s.length > 0 ? [...s.map((c) => a[c]), r] : [r]);
      } else
        Et(t, i, [r]);
      continue;
    }
    k8(t, o.map(String), r);
  }
  return jo(t);
}
var ds = {
  preferredAttribute() {
    return kn.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
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
  update: Jr(function(e) {
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
function E8(e, t, n) {
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
    const f = t(""), v = ds.preferredAttribute(), y = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, h = Object.values(r).reduce((p, m) => p.concat(m), []).reduce((p, m) => {
      if (m.indexOf("<") === -1)
        return p;
      if (m.indexOf("<title ") === 0) {
        const E = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p.title = E ? `${E[1]}${t(E[2])}${E[3]}` : m, p;
      }
      const b = m.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return b ? p[b[0]] = m : p[Object.keys(p).length] = m, p;
    }, y);
    return Object.values(h);
  }
  function d() {
    e ? n(u()) : ds.update(u());
  }
  return d(), {
    forceUpdate: d,
    createProvider: function() {
      const f = i();
      return {
        preferredAttribute: ds.preferredAttribute,
        reconnect: () => s(f),
        update: (v) => c(f, v),
        disconnect: () => a(f)
      };
    }
  };
}
var $8 = "X-Inertia-Infinite-Scroll-Merge-Intent", z8 = (e) => {
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
        [$8]: b === "previous" ? "prepend" : "append",
        ...E.headers
      },
      onBefore: (_) => {
        b === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), E.onBefore?.(_);
      },
      onBeforeUpdate: (_) => {
        e.onBeforeUpdate(), E.onBeforeUpdate?.(_);
      },
      onSuccess: (_) => {
        c(b), E.onSuccess?.(_);
      },
      onFinish: (_) => {
        n.loading = !1, b === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), E.onFinish?.(_);
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
}, P8 = () => {
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
}, Ho = "infiniteScrollPage", fs = "infiniteScrollIgnore", q0 = (e) => e.dataset[Ho], C8 = (e) => {
  const t = P8();
  let n, r, o, i, a = !1;
  const s = () => {
    i = new MutationObserver((w) => {
      w.forEach((k) => {
        k.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && v.add(L);
        });
      }), _();
    }), i.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (w) => e.onItemIntersected(w.target)
    );
    const z = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, z), o = t.new(e.onNextTriggered, z);
  }, c = () => {
    a && u();
    const z = e.getStartElement(), w = e.getEndElement();
    z && e.shouldFetchPrevious() && r.observe(z), w && e.shouldFetchNext() && o.observe(w), a = !0;
  }, u = () => {
    a && (r.disconnect(), o.disconnect(), a = !1);
  }, d = () => {
    a && c();
  }, f = () => {
    u(), t.flushAll(), i?.disconnect();
  }, v = /* @__PURE__ */ new Set(), y = (z) => !(Ho in z.dataset) && !(fs in z.dataset), h = () => {
    Array.from(v).forEach((z) => {
      y(z) && (z.dataset[fs] = "true"), n.observe(z);
    }), v.clear();
  }, p = (z) => Array.from(
    z.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let m = !1;
  const b = (z) => {
    !m && (m = !0, C()) || (p(e.getItemsElement()).forEach((w) => {
      y(w) && (w.dataset[Ho] = z?.toString() || "1"), n.observe(w);
    }), g());
  }, E = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, g = () => {
    const z = {}, w = e.getItemsElement().childNodes;
    for (let k = 0; k < w.length; k++) {
      const L = w[k];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = q0(L);
      typeof D > "u" || (D in z ? z[D].to = k : z[D] = { from: k, to: k });
    }
    Ye.remember(z, E());
  }, _ = Jr(g, 250), C = () => {
    const z = Ye.restore(E());
    if (!z || typeof z != "object")
      return !1;
    const w = e.getItemsElement().childNodes;
    for (let k = 0; k < w.length; k++) {
      const L = w[k];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = L;
      let M;
      for (const [A, q] of Object.entries(z))
        if (k >= q.from && k <= q.to) {
          M = A;
          break;
        }
      if (M)
        D.dataset[Ho] = M;
      else if (y(D))
        D.dataset[fs] = "true";
      else
        continue;
      n.observe(D);
    }
    return !0;
  };
  return {
    setupObservers: s,
    enableTriggers: c,
    disableTriggers: u,
    refreshTriggers: d,
    flushAll: f,
    processManuallyAddedElements: h,
    processServerLoadedElements: b
  };
}, A8 = new Ui(), Jn, mn, Po = null, T8 = (e) => {
  let t = !0;
  const n = (o) => {
    A8.add(() => new Promise((i) => {
      if (!t)
        return Jn = mn = null, i();
      if (!Jn || !mn) {
        const c = he.get().url;
        Jn = $t(c), mn = $t(c), Po = F0(c);
      }
      const a = e.getPageName(), s = mn.searchParams;
      o === "1" ? s.delete(a) : s.set(a, o), setTimeout(() => i());
    })).finally(() => {
      t && Jn && mn && Jn.href !== mn.href && Po !== null && Ye.replace({
        url: u8(mn, Po),
        preserveScroll: !0,
        preserveState: !0
      }), Jn = mn = Po = null;
    });
  };
  return {
    onItemIntersected: Jr((o) => {
      const i = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !i)
        return;
      const a = /* @__PURE__ */ new Map(), s = [...i.children];
      I0(s, o).forEach((d) => {
        const f = q0(d) ?? "1";
        a.has(f) ? a.set(f, a.get(f) + 1) : a.set(f, 1);
      });
      const u = Array.from(a.entries()).sort((d, f) => f[1] - d[1])[0]?.[0];
      u !== void 0 && n(u);
    }, 250),
    cancel: () => t = !1
  };
}, O8 = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const s = e.getScrollableParent(), c = e.getItemsElement();
        n = s?.scrollTop || window.scrollY;
        const u = I0([...c.children]);
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
function N8(e) {
  const t = T8({ ...e, getPageName: () => o.getPageName() }), n = O8(e), r = C8({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = z8({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (u) => {
      e.onCompletePreviousRequest(), Dr(() => r.processServerLoadedElements(u), 2);
    },
    onCompleteNextRequest: (u) => {
      e.onCompleteNextRequest(), Dr(() => r.processServerLoadedElements(u), 2);
    },
    onReset: e.onDataReset
  }), i = (u) => {
    const { captureScrollPosition: d, restoreScrollPosition: f } = n.createCallbacks(), v = u.onBeforeUpdate || (() => {
    }), y = u.onSuccess || (() => {
    });
    return u.onBeforeUpdate = (h) => {
      v(h), d();
    }, u.onSuccess = (h) => {
      y(h), f();
    }, u;
  }, a = o.fetchNext;
  o.fetchNext = (u = {}) => {
    e.inReverseMode() && (u = i(u)), a(u);
  };
  const s = o.fetchPrevious;
  o.fetchPrevious = (u = {}) => {
    e.inReverseMode() || (u = i(u)), s(u);
  };
  const c = Ye.on("success", () => Dr(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      c(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function V0(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function Co(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(V0(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Rd(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !V0(e) && (e.key === "Enter" || t && e.key === " ");
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
}, Sn = null, I8 = (e) => {
  Object.assign(at, e), at.includeCSS && L8(at.color), zt = document.createElement("div"), zt.id = nt, zt.innerHTML = at.template;
}, qi = (e) => {
  const t = j0();
  e = Y0(e, at.minimum, 1), Sn = e === 1 ? null : e;
  const n = M8(!t), r = n.querySelector(at.barSelector), o = at.speed, i = at.easing;
  n.offsetWidth, B8((a) => {
    const s = at.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate3d(${Go(e)}%,0,0)`
    } : at.positionUsing === "translate" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate(${Go(e)}%,0)`
    } : { marginLeft: `${Go(e)}%` };
    for (const c in s)
      r.style[c] = s[c];
    if (e !== 1)
      return setTimeout(a, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        X0(), n.style.transition = "", n.style.opacity = "", a();
      }, o);
    }, o);
  });
}, j0 = () => typeof Sn == "number", H0 = () => {
  Sn || qi(0);
  const e = function() {
    setTimeout(function() {
      Sn && (G0(), e());
    }, at.trickleSpeed);
  };
  at.trickle && e();
}, R8 = (e) => {
  !e && !Sn || (G0(0.3 + 0.5 * Math.random()), qi(1));
}, G0 = (e) => {
  const t = Sn;
  if (t === null)
    return H0();
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
    })(), qi(Y0(t + e, 0, 0.994));
}, M8 = (e) => {
  if (D8())
    return document.getElementById(nt);
  document.documentElement.classList.add(`${nt}-busy`);
  const t = zt.querySelector(at.barSelector), n = e ? "-100" : Go(Sn || 0), r = W0();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, at.showSpinner || zt.querySelector(at.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${nt}-custom-parent`), r.appendChild(zt), zt;
}, W0 = () => F8(at.parent) ? at.parent : document.querySelector(at.parent), X0 = () => {
  document.documentElement.classList.remove(`${nt}-busy`), W0().classList.remove(`${nt}-custom-parent`), zt?.remove();
}, D8 = () => document.getElementById(nt) !== null, F8 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Y0(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Go = (e) => (-1 + e) * 100, B8 = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), L8 = (e) => {
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
}, U8 = () => {
  zt && (zt.style.display = "");
}, q8 = () => {
  zt && (zt.style.display = "none");
}, Bt = {
  configure: I8,
  isStarted: j0,
  done: R8,
  set: qi,
  remove: X0,
  start: H0,
  status: Sn,
  show: U8,
  hide: q8
}, V8 = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    Bt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && Bt.show();
  }
  hide() {
    this.hideCount++, Bt.hide();
  }
  set(e) {
    Bt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    Bt.done();
  }
  reset() {
    Bt.set(0);
  }
  remove() {
    Bt.done(), Bt.remove();
  }
  isStarted() {
    return Bt.isStarted();
  }
  getStatus() {
    return Bt.status;
  }
}, Fr = new V8();
Fr.reveal;
Fr.hide;
var K0 = /* @__PURE__ */ Symbol("FormComponentReset");
function Zs(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function j8(e, t) {
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
function H8(e, t) {
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
function ps(e, t) {
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
    return j8(e, t);
  if (e instanceof HTMLSelectElement)
    return H8(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function G8(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && Zs(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        ps(r, t) && (n = !0);
      else {
        const i = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        ps(r, i) && (n = !0);
      }
  }) : Zs(e) && (n = ps(e, t)), n;
}
function W8(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const i = new FormData(e), a = Array.from(e.elements).map((s) => Zs(s) ? s.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...i.keys(), ...a])];
  }
  let o = !1;
  n.forEach((i) => {
    const a = e.elements.namedItem(i);
    a && G8(a, t.getAll(i)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [K0]: !0 } })
  );
}
var Ye = new x8();
let Qr = Ke.create(), Z0 = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, J0 = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const mi = {}, bn = {
  get: (e, t = {}, n = {}) => $r(Er("get", e, t, n)),
  post: (e, t = {}, n = {}) => $r(Er("post", e, t, n)),
  patch: (e, t = {}, n = {}) => $r(Er("patch", e, t, n)),
  put: (e, t = {}, n = {}) => $r(Er("put", e, t, n)),
  delete: (e, t = {}, n = {}) => $r(Er("delete", e, t, n)),
  use(e) {
    return Qr = e, bn;
  },
  axios() {
    return Qr;
  },
  fingerprintRequestsUsing(e) {
    return Z0 = e === null ? () => null : e, bn;
  },
  determineSuccessUsing(e) {
    return J0 = e, bn;
  }
}, Er = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Vs({}, n, r?.params)
  } : {
    data: Vs({}, n, r?.data)
  }
}), $r = (e = {}) => {
  const t = [
    X8,
    K8,
    Z8
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Qr.request(t).then(async (n) => {
    t.precognitive && Md(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && J0(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && Y8(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Dd(t, r) ?? ((a) => a))(o) ?? o;
  }, (n) => J8(n) ? Promise.reject(n) : (t.precognitive && Md(n.response), (Dd(t, n.response.status) ?? ((o, i) => Promise.reject(i)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, X8 = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Qr.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Z0(e, Qr) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": Q8(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, Y8 = (e) => e >= 200 && e < 300, K8 = (e) => (typeof e.fingerprint != "string" || (mi[e.fingerprint]?.abort(), delete mi[e.fingerprint]), e), Z8 = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (mi[e.fingerprint] = new AbortController(), {
  ...e,
  signal: mi[e.fingerprint].signal
}), Md = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, J8 = (e) => !A0(e) || typeof e.response?.status != "number" || C0(e), Dd = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], Q8 = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (Q0(e.data) ? "multipart/form-data" : "application/json"), Q0 = (e) => Dl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => Q0(t)), Dl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, eI = (e, t) => {
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
}, tI = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Fd = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => tI(n, r)))), nI = (e, t = {}) => {
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
    const A = [...new Set(M)];
    return a.length !== A.length || !A.every((q) => a.includes(q)) ? (a = A, n.validatedChanged) : [];
  }, c = () => a.filter((M) => typeof f[M] > "u");
  let u = [];
  const d = (M) => {
    const A = [...new Set(M)];
    return u.length !== A.length || !A.every((q) => u.includes(q)) ? (u = A, n.touchedChanged) : [];
  };
  let f = {};
  const v = (M) => {
    const A = oI(M);
    return xn(f, A) ? [] : (f = A, n.errorsChanged);
  }, y = (M) => {
    const A = { ...f };
    return delete A[Br(M)], v(A);
  }, h = () => Object.keys(f).length > 0;
  let p = 1500;
  const m = (M) => {
    p = M, z.cancel(), z = C();
  };
  let b = t, E = null, g = [], _ = null;
  const C = () => fT((M) => {
    e({
      get: (A, q = {}, S = {}) => bn.get(A, L(q), w(S, M, q)),
      post: (A, q = {}, S = {}) => bn.post(A, L(q), w(S, M, q)),
      patch: (A, q = {}, S = {}) => bn.patch(A, L(q), w(S, M, q)),
      put: (A, q = {}, S = {}) => bn.put(A, L(q), w(S, M, q)),
      delete: (A, q = {}, S = {}) => bn.delete(A, L(q), w(S, M, q))
    }).catch((A) => C0(A) || A0(A) && A.response?.status === 422 ? null : Promise.reject(A));
  }, p, { leading: !0, trailing: !0 });
  let z = C();
  const w = (M, A, q = {}) => {
    const S = {
      ...M,
      ...A
    }, F = Array.from(S.only ?? S.validate ?? u);
    return {
      ...A,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...DN(M, A),
      only: F,
      timeout: S.timeout ?? 5e3,
      onValidationError: (P, N) => ([
        ...s([...a, ...F]),
        ...v(Vs(Fd({ ...f }, F), P.data.errors))
      ].forEach((x) => x()), S.onValidationError ? S.onValidationError(P, N) : Promise.reject(N)),
      onSuccess: (P) => (s([...a, ...F]).forEach((N) => N()), S.onSuccess ? S.onSuccess(P) : P),
      onPrecognitionSuccess: (P) => ([
        ...s([...a, ...F]),
        ...v(Fd({ ...f }, F))
      ].forEach((N) => N()), S.onPrecognitionSuccess ? S.onPrecognitionSuccess(P) : P),
      onBefore: () => {
        const P = u.some((U) => U.includes("*")), N = P ? [...new Set(u.flatMap((U) => eI(U, q)))] : u;
        return S.onBeforeValidation && S.onBeforeValidation({ data: q, touched: N }, { data: b, touched: g }) === !1 || (S.onBefore || (() => !0))() === !1 ? !1 : (P && d(N).forEach((U) => U()), _ = u, E = q, !0);
      },
      onStart: () => {
        i(!0).forEach((P) => P()), (S.onStart ?? (() => null))();
      },
      onFinish: () => {
        i(!1).forEach((P) => P()), g = _, b = E, _ = E = null, (S.onFinish ?? (() => null))();
      }
    };
  }, k = (M, A, q) => {
    if (typeof M > "u") {
      const S = Array.from(q?.only ?? q?.validate ?? []);
      d([...u, ...S]).forEach((F) => F()), z(q ?? {});
      return;
    }
    if (Dl(A) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    M = Br(M), (M.includes("*") || xt(b, M) !== A) && (d([M, ...u]).forEach((S) => S()), z(q ?? {}));
  }, L = (M) => r === !1 ? Js(M) : M, D = {
    touched: () => u,
    validate(M, A, q) {
      return typeof M == "object" && !("target" in M) && (q = M, M = A = void 0), k(M, A, q), D;
    },
    touch(M) {
      const A = Array.isArray(M) ? M : [Br(M)];
      return d([...u, ...A]).forEach((q) => q()), D;
    },
    validating: () => o,
    valid: c,
    errors: () => f,
    hasErrors: h,
    setErrors(M) {
      return v(M).forEach((A) => A()), D;
    },
    forgetError(M) {
      return y(M).forEach((A) => A()), D;
    },
    defaults(M) {
      return t = M, b = M, D;
    },
    reset(...M) {
      if (M.length === 0)
        d([]).forEach((A) => A());
      else {
        const A = [...u];
        M.forEach((q) => {
          A.includes(q) && A.splice(A.indexOf(q), 1), Et(b, q, xt(t, q));
        }), d(A).forEach((q) => q());
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
}, rI = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), oI = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Br = (e) => typeof e != "string" ? e.target.name : e, Js = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Dl(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(Js({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = Js(t[n]);
        return;
      }
    }
  }), t;
};
var hs = null, ms = !1;
function iI(e) {
  if (ms)
    return;
  hs === null && (ms = !0, hs = new Set(Object.keys(eh({}))), ms = !1);
  const t = Object.keys(e).filter((n) => hs.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function eh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = Vo.parseUseFormArguments(...e);
  const o = t ? Ye.restore(t) : null;
  let i = st(typeof n == "function" ? n() : n);
  iI(i);
  let a = null, s, c = (h) => h, u = null, d = [], f = !1;
  const y = eo({
    ...o ? o.data : st(i),
    isDirty: !1,
    errors: o ? o.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...h) {
      r = Vo.createWayfinderCallback(...h);
      const p = this;
      let m = null;
      const b = nI((g) => {
        const { method: _, url: C } = r(), z = st(c(this.data()));
        return g[_](C, z);
      }, st(i));
      u = b, b.on("validatingChanged", () => {
        p.validating = b.validating();
      }).on("validatedChanged", () => {
        p.__valid = b.valid();
      }).on("touchedChanged", () => {
        p.__touched = b.touched();
      }).on("errorsChanged", () => {
        const g = m ?? vi.get("form.withAllErrors") ? b.errors() : rI(b.errors());
        this.errors = {}, this.setError(g), p.__valid = b.valid();
      });
      const E = (g, _) => (_(g), g);
      return Object.assign(p, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => b,
        withAllErrors: () => E(p, () => m = !0),
        valid: (g) => p.__valid.includes(g),
        invalid: (g) => g in this.errors,
        setValidationTimeout: (g) => E(p, () => b.setTimeout(g)),
        validateFiles: () => E(p, () => b.validateFiles()),
        withoutFileValidation: () => E(p, () => b.withoutFileValidation()),
        touch: (g, ..._) => (Array.isArray(g) ? b.touch(g) : typeof g == "string" ? b.touch([g, ..._]) : b.touch(g), p),
        touched: (g) => typeof g == "string" ? p.__touched.includes(g) : p.__touched.length > 0,
        validate: (g, _) => {
          if (typeof g == "object" && !("target" in g) && (_ = g, g = void 0), g === void 0)
            b.validate(_);
          else {
            const C = Br(g), z = c(this.data());
            b.validate(C, xt(z, C), _);
          }
          return p;
        },
        setErrors: (g) => E(p, () => this.setError(g)),
        forgetError: (g) => E(
          p,
          () => this.clearErrors(Br(g))
        )
      }), p;
    },
    data() {
      return Object.keys(i).reduce((h, p) => Et(h, p, xt(this, p)), {});
    },
    transform(h) {
      return c = h, this;
    },
    defaults(h, p) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof h > "u" ? (i = st(this.data()), this.isDirty = !1) : i = typeof h == "string" ? Et(st(i), h, p) : Object.assign({}, st(i), h), u?.defaults(i), this;
    },
    reset(...h) {
      const p = st(typeof n == "function" ? n() : i), m = st(p);
      return h.length === 0 ? (i = m, Object.assign(this, p)) : h.filter((b) => Yp(m, b)).forEach((b) => {
        Et(i, b, xt(m, b)), Et(this, b, xt(p, b));
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
      const { method: p, url: m, options: b } = Vo.parseSubmitArguments(h, r);
      f = !1;
      const E = {
        ...b,
        onCancelToken: (_) => {
          if (a = _, b.onCancelToken)
            return b.onCancelToken(_);
        },
        onBefore: (_) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), b.onBefore)
            return b.onBefore(_);
        },
        onStart: (_) => {
          if (this.processing = !0, b.onStart)
            return b.onStart(_);
        },
        onProgress: (_) => {
          if (this.progress = _ ?? null, b.onProgress)
            return b.onProgress(_);
        },
        onSuccess: async (_) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(
            () => this.recentlySuccessful = !1,
            vi.get("form.recentlySuccessfulDuration")
          );
          const C = b.onSuccess ? await b.onSuccess(_) : null;
          return f || (i = st(this.data()), this.isDirty = !1), C;
        },
        onError: (_) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(_), b.onError)
            return b.onError(_);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, b.onCancel)
            return b.onCancel();
        },
        onFinish: (_) => {
          if (this.processing = !1, this.progress = null, a = null, b.onFinish)
            return b.onFinish(_);
        }
      }, g = c(this.data());
      p === "delete" ? Ye.delete(m, { ...E, data: g }) : Ye[p](m, g, E);
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
      a && a.cancel();
    },
    dontRemember(...h) {
      return d = h, this;
    },
    __rememberable: t === null,
    __remember() {
      const h = this.data();
      if (d.length > 0) {
        const p = { ...h };
        return d.forEach((m) => delete p[m]), { data: p, errors: this.errors };
      }
      return { data: h, errors: this.errors };
    },
    __restore(h) {
      Object.assign(this, h.data), this.setError(h.errors);
    }
  });
  return Ne(
    y,
    (h) => {
      y.isDirty = !xn(y.data(), i);
      const p = Ye.restore(t), m = st(h.__remember());
      t && !xn(p, m) && Ye.remember(m, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var bt = Y(void 0), Qe = Y(), vs = rn(null), Ao = Y(void 0), Bd;
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
    bt.value = t ? tr(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, Ao.value = void 0;
    const i = typeof window > "u";
    return Bd = E8(i, r || ((a) => a), o || (() => {
    })), i || (Ye.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (a) => {
        bt.value = tr(a.component), Qe.value = a.page, Ao.value = a.preserveState ? Ao.value : Date.now();
      },
      onFlash: (a) => {
        Qe.value = { ...Qe.value, flash: a };
      }
    }), Ye.on("navigate", () => Bd.forceUpdate())), () => {
      if (bt.value) {
        bt.value.inheritAttrs = !!bt.value.inheritAttrs;
        const a = $e(bt.value, {
          ...Qe.value.props,
          key: Ao.value
        });
        return vs.value && (bt.value.layout = vs.value, vs.value = null), bt.value.layout ? typeof bt.value.layout == "function" ? bt.value.layout($e, a) : (Array.isArray(bt.value.layout) ? bt.value.layout : [bt.value.layout]).concat(a).reverse().reduce((s, c) => (c.inheritAttrs = !!c.inheritAttrs, $e(c, { ...Qe.value.props }, () => s))) : a;
      }
    };
  }
});
function th() {
  return eo({
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
var en = () => {
}, aI = /* @__PURE__ */ Symbol("InertiaFormContext");
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
      default: en
    },
    onBefore: {
      type: Function,
      default: en
    },
    onStart: {
      type: Function,
      default: en
    },
    onProgress: {
      type: Function,
      default: en
    },
    onFinish: {
      type: Function,
      default: en
    },
    onCancel: {
      type: Function,
      default: en
    },
    onSuccess: {
      type: Function,
      default: en
    },
    onError: {
      type: Function,
      default: en
    },
    onSubmitComplete: {
      type: Function,
      default: en
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
      const [C, z] = h();
      return e.transform(z);
    }, i = eh({}).withPrecognition(
      () => s.value,
      () => h()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && i.validateFiles(), (e.withAllErrors ?? kn.get("form.withAllErrors")) && i.withAllErrors();
    const a = Y(), s = J(
      () => ln(e.action) ? e.action.method : e.method.toLowerCase()
    ), c = Y(!1), u = Y(new FormData()), d = (C) => {
      C.type === "reset" && C.detail?.[K0] && C.preventDefault(), c.value = C.type === "reset" ? !1 : !xn(y(), Id(u.value));
    }, f = ["input", "change", "reset"];
    Ze(() => {
      u.value = v(), i.defaults(y()), f.forEach((C) => a.value.addEventListener(C, d));
    }), Ne(
      () => e.validateFiles,
      (C) => C ? i.validateFiles() : i.withoutFileValidation()
    ), Ne(
      () => e.validationTimeout,
      (C) => i.setValidationTimeout(C)
    ), gi(() => f.forEach((C) => a.value?.removeEventListener(C, d)));
    const v = (C) => new FormData(a.value, C), y = (C) => Id(v(C)), h = (C) => Ml(
      s.value,
      ln(e.action) ? e.action.url : e.action,
      y(C),
      e.queryStringArrayFormat
    ), p = (C) => {
      const [z, w] = h(C);
      if (C?.getAttribute("formtarget") === "_blank" && s.value === "get") {
        window.open(z, "_blank");
        return;
      }
      const L = (M) => {
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
          e.onSuccess?.(...M), e.onSubmitComplete?.(_), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && g();
        },
        onError: (...M) => {
          e.onError?.(...M), L(e.resetOnError);
        },
        ...e.options
      };
      i.transform(() => e.transform(w)).submit(s.value, z, D), i.transform(o);
    }, m = (...C) => {
      W8(a.value, u.value, C), i.reset(...C);
    }, b = (...C) => {
      i.clearErrors(...C);
    }, E = (...C) => {
      b(...C), m(...C);
    }, g = () => {
      u.value = v(), c.value = !1;
    }, _ = {
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
      setError: (C, z) => i.setError(typeof C == "string" ? { [C]: z } : C),
      get isDirty() {
        return c.value;
      },
      reset: m,
      submit: p,
      defaults: g,
      getData: y,
      getFormData: v,
      // Precognition
      touch: i.touch,
      valid: i.valid,
      invalid: i.invalid,
      touched: i.touched,
      validate: (C, z) => i.validate(...Vo.mergeHeadersForValidation(C, z, e.headers)),
      validator: () => i.validator()
    };
    return r(_), Fn(aI, _), () => $e(
      "form",
      {
        ...n,
        ref: a,
        action: ln(e.action) ? e.action.url : e.action,
        method: s.value,
        onSubmit: (C) => {
          C.preventDefault(), p(C.submitter);
        },
        inert: e.disableWhileProcessing && i.processing
      },
      t.default ? t.default(_) : []
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${bT(o)}"`;
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
var gs = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
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
    const o = Y(null), i = Y(null), a = Y(null), s = J(
      () => gs(e.itemsElement, o.value)
    ), c = J(() => i8(s.value)), u = J(
      () => gs(e.startElement, i.value)
    ), d = J(() => gs(e.endElement, a.value)), f = Y(!1), v = Y(!1), y = Y(0), h = Y(!1), p = Y(!1), m = () => {
      y.value = b.getRequestCount(), h.value = b.hasPrevious(), p.value = b.hasNext();
    }, {
      dataManager: b,
      elementManager: E,
      flush: g
    } = N8({
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
        f.value = !1, m();
      },
      onCompleteNextRequest: () => {
        v.value = !1, m();
      },
      onDataReset: m
    });
    if (m(), typeof window > "u") {
      const w = th().scrollProps?.[e.data];
      w && (h.value = !!w.previousPage, p.value = !!w.nextPage);
    }
    const _ = J(() => !C.value), C = J(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), z = () => {
      c.value ? c.value.scrollTo({
        top: c.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ze(() => {
      E.setupObservers(), E.processServerLoadedElements(b.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && z(), _.value && E.enableTriggers();
    }), Qs(g), Ne(
      () => [_.value, e.onlyNext, e.onlyPrevious],
      ([w]) => {
        w ? E.enableTriggers() : E.disableTriggers();
      }
    ), r({
      fetchNext: b.fetchNext,
      fetchPrevious: b.fetchPrevious,
      hasPrevious: b.hasPrevious,
      hasNext: b.hasNext
    }), () => {
      const w = [], k = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: h.value,
        hasNext: p.value
      };
      if (!e.startElement) {
        const L = _.value && !e.onlyNext, D = {
          loading: f.value,
          fetch: b.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: h.value,
          ...k
        };
        w.push(
          $e(
            "div",
            { ref: i },
            t.previous ? t.previous(D) : f.value ? t.loading?.(D) : void 0
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
        const L = _.value && !e.onlyPrevious, D = {
          loading: v.value,
          fetch: b.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ...k
        };
        w.push(
          $e(
            "div",
            { ref: a },
            t.next ? t.next(D) : v.value ? t.loading?.(D) : void 0
          )
        );
      }
      return $e(ge, {}, e.reverse ? [...w].reverse() : w);
    };
  }
});
var Lt = () => {
}, sI = De({
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
      default: Lt
    },
    onProgress: {
      type: Function,
      default: Lt
    },
    onFinish: {
      type: Function,
      default: Lt
    },
    onBefore: {
      type: Function,
      default: Lt
    },
    onCancel: {
      type: Function,
      default: Lt
    },
    onSuccess: {
      type: Function,
      default: Lt
    },
    onError: {
      type: Function,
      default: Lt
    },
    onCancelToken: {
      type: Function,
      default: Lt
    },
    onPrefetching: {
      type: Function,
      default: Lt
    },
    onPrefetched: {
      type: Function,
      default: Lt
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
    const r = Y(0), o = Y(), i = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), a = J(() => e.cacheFor !== 0 ? e.cacheFor : i.value.length === 1 && i.value[0] === "click" ? 0 : vi.get("prefetch.cacheFor"));
    Ze(() => {
      i.value.includes("mount") && p();
    }), Qs(() => {
      clearTimeout(o.value);
    });
    const s = J(
      () => ln(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), c = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : s.value !== "get" ? "button" : e.as.toLowerCase()), u = J(
      () => Ml(
        s.value,
        ln(e.href) ? e.href.url : e.href,
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
    })), h = J(() => ({
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
    })), p = () => {
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
    }, m = {
      onClick: (g) => {
        Co(g) && (g.preventDefault(), Ye.visit(d.value, h.value));
      }
    }, b = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          p();
        }, vi.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: m.onClick
    }, E = {
      onMousedown: (g) => {
        Co(g) && (g.preventDefault(), p());
      },
      onKeydown: (g) => {
        Rd(g) && (g.preventDefault(), p());
      },
      onMouseup: (g) => {
        Co(g) && (g.preventDefault(), Ye.visit(d.value, h.value));
      },
      onKeyup: (g) => {
        Rd(g) && (g.preventDefault(), Ye.visit(d.value, h.value));
      },
      onClick: (g) => {
        Co(g) && g.preventDefault();
      }
    };
    return () => $e(
      c.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...i.value.includes("hover") ? b : i.value.includes("click") ? E : m
      },
      t
    );
  }
}), lI = sI;
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
    const e = th();
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
var vi = kn.extend({});
const uI = { class: "space-y-3 text-zinc-900 dark:text-white" }, cI = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, dI = { key: 0 }, fI = { key: 1 }, pI = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, hI = { class: "space-y-2" }, mI = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, vI = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, gI = {
  key: 0,
  class: "flex items-center gap-2"
}, yI = ["disabled", "onClick"], bI = ["disabled", "onClick"], xI = ["disabled", "onClick"], wI = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = Y([]), r = Y(!0), o = Y(!1), i = Y(!1), a = Y(""), s = Y(null), c = J(() => t.produto?.id ?? null), u = J(() => new Map(n.value.map((h) => [h.trigger_event, h])));
    async function d() {
      r.value = !0, a.value = "";
      try {
        const [h, p] = await Promise.all([Te.connection(), Te.flows(c.value)]);
        i.value = h.connection.connected, n.value = p.flows || [];
      } catch (h) {
        a.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function f(h) {
      o.value = !0, a.value = "";
      try {
        await h(), await d();
      } catch (p) {
        a.value = p.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (h) => f(() => Te.createFlow({
      name: `${h.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: h.eventClass,
      product_id: c.value,
      is_active: !0,
      graph_json: xp(h.eventClass)
    })), y = (h) => f(() => Te.updateFlow(h.id, { is_active: !h.is_active }));
    return Ze(d), (h, p) => ($(), T("div", uI, [
      r.value ? ($(), T("p", cI, "Verificando integração…")) : ($(), T(ge, { key: 1 }, [
        l("div", {
          class: K(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", i.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          Z(I(nl), { class: "h-4 w-4 shrink-0" }),
          i.value ? ($(), T("span", dI, "ZapRei conectado à Evolution GO.")) : ($(), T("span", fI, [
            p[2] || (p[2] = Be(" A Evolution GO não está conectada. ", -1)),
            Z(I(lI), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: rt(() => [...p[1] || (p[1] = [
                Be("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            p[3] || (p[3] = Be(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        p[5] || (p[5] = l("div", null, [
          l("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          l("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        a.value ? ($(), T("p", pI, V(a.value), 1)) : te("", !0),
        l("div", hI, [
          ($(!0), T(ge, null, Oe(I(Mn), (m) => ($(), T("div", {
            key: m.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            l("div", null, [
              l("div", mI, V(m.label), 1),
              l("div", vI, V(m.eventClass), 1)
            ]),
            u.value.get(m.eventClass) ? ($(), T("div", gI, [
              l("span", {
                class: K(["rounded-full px-2 py-0.5 text-[10px] font-bold", u.value.get(m.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, V(u.value.get(m.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              l("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !i.value || o.value,
                onClick: (b) => y(u.value.get(m.eventClass))
              }, V(u.value.get(m.eventClass).is_active ? "Pausar" : "Ativar"), 9, yI),
              l("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !i.value,
                onClick: (b) => s.value = u.value.get(m.eventClass)
              }, [
                Z(I(Jd), { class: "h-3 w-3" }),
                p[4] || (p[4] = Be(" Editar ", -1))
              ], 8, bI)
            ])) : ($(), T("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !i.value || o.value,
              onClick: (b) => v(m)
            }, " Criar fluxo ", 8, xI))
          ]))), 128))
        ])
      ], 64)),
      s.value ? ($(), Re(Sp, {
        key: 2,
        flow: s.value,
        onClose: p[0] || (p[0] = (m) => s.value = null),
        onSaved: d
      }, null, 8, ["flow"])) : te("", !0)
    ]));
  }
}, _I = "zaprei", Ld = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Ld)) {
  const e = document.createElement("link");
  e.id = Ld, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[_I] = { Dashboard: _P, Integrations: SP, ProductPanel: wI };
export {
  _P as Dashboard,
  SP as Integrations,
  wI as ProductPanel
};
