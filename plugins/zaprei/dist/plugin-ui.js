import { h as Pe, ref as Y, reactive as eo, onMounted as Ze, openBlock as C, createElementBlock as I, createElementVNode as d, createVNode as K, unref as F, normalizeClass as X, withDirectives as ce, vModelCheckbox as om, vModelText as we, createStaticVNode as Md, createTextVNode as Ue, toDisplayString as W, createCommentVNode as he, getCurrentScope as Dd, inject as fr, effectScope as Fd, watch as Te, provide as Mn, defineComponent as Me, useSlots as im, onUnmounted as Ys, withCtx as it, renderSlot as Xe, createPropsRestProxy as am, toRef as qe, computed as J, getCurrentInstance as pr, onScopeDispose as Ao, nextTick as rn, onBeforeMount as sm, shallowRef as en, Fragment as ge, renderList as Re, normalizeStyle as Ot, onBeforeUnmount as mi, isMemoSame as lm, createBlock as Fe, useAttrs as um, mergeProps as vi, Teleport as Bd, isRef as Ks, toRefs as cm, customRef as dm, toValue as Oe, resolveComponent as Ld, resolveDynamicComponent as zt, markRaw as Qn, readonly as fm, withModifiers as $n, vModelSelect as ut, toHandlers as pm } from "vue";
const hm = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Ul = (e) => e === "";
const mm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
const ql = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const vm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const gm = (e) => {
  const t = vm(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var yr = {
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
const ym = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": r,
  strokeWidth: o,
  "stroke-width": i,
  size: a = yr.width,
  color: s = yr.stroke,
  ...u
}, { slots: l }) => Pe(
  "svg",
  {
    ...yr,
    ...u,
    width: a,
    height: a,
    stroke: s,
    "stroke-width": Ul(n) || Ul(r) || n === !0 || r === !0 ? Number(o || i || yr["stroke-width"]) * 24 / Number(a) : o || i || yr["stroke-width"],
    class: mm(
      "lucide",
      u.class,
      ...e ? [`lucide-${ql(gm(e))}-icon`, `lucide-${ql(e)}`] : ["lucide-icon"]
    ),
    ...!l.default && !hm(u) && { "aria-hidden": "true" }
  },
  [...t.map((c) => Pe(...c)), ...l.default ? [l.default()] : []]
);
const Ne = (e, t) => (n, { slots: r, attrs: o }) => Pe(
  ym,
  {
    ...o,
    ...n,
    iconNode: t,
    name: e
  },
  r
);
const Ud = Ne("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const bm = Ne("arrow-right", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const xm = Ne("ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
]);
const Ki = Ne("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const wm = Ne("check-check", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const qd = Ne("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const _m = Ne("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Zs = Ne("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Vd = Ne("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const vs = Ne("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const Hd = Ne("copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const jd = Ne("download", [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
]);
const Sm = Ne("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Vl = Ne("flag", [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
]);
const Hl = Ne("git-branch", [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
]);
const Gd = Ne("history", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
const qn = Ne("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const jl = Ne("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
]);
const Em = Ne("message-square-text", [
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
const Wd = Ne("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
]);
const Xd = Ne("palette", [
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
const Yd = Ne("plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
]);
const Kd = Ne("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Gl = Ne("reply", [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
]);
const km = Ne("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const Pm = Ne("save", [
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
const Br = Ne("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const Lr = Ne("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const Zd = Ne("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const $m = Ne("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Go = Ne("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const Jd = Ne("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const Qd = Ne("users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
]);
const vn = Ne("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const rr = Ne("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Cm = "/zaprei";
function zm() {
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}
async function Am(e) {
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
  const o = new URL(Cm + e, window.location.origin);
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
      "X-CSRF-TOKEN": zm(),
      ...i || n === void 0 ? {} : { "Content-Type": "application/json" }
    },
    body: i ? n : n === void 0 ? void 0 : JSON.stringify(n)
  }).then(Am);
}
const Ae = {
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
  testFlow: (e, t) => Je(`/flows/${e}/test`, { method: "POST", body: { phone: t } }),
  runs: () => Je("/flows/runs"),
  retryRun: (e) => Je(`/flows/runs/${e}/retry`, { method: "POST" }),
  contacts: (e) => Je("/contacts", { query: e }),
  importContacts: (e) => Je("/contacts/import", { method: "POST", body: Wl(e) }),
  deleteContact: (e) => Je(`/contacts/${e}`, { method: "DELETE" }),
  campaigns: () => Je("/campaigns"),
  createCampaign: (e) => Je("/campaigns", { method: "POST", body: e }),
  campaign: (e) => Je(`/campaigns/${e}`),
  cancelCampaign: (e) => Je(`/campaigns/${e}/cancel`, { method: "POST" }),
  uploadMedia: (e) => Je("/media", { method: "POST", body: Wl(e) })
};
function Wl(e) {
  const t = new FormData();
  return t.append("file", e), t;
}
const Tm = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Om = { class: "flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800" }, Nm = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, Im = {
  key: 0,
  class: "py-10 text-center text-zinc-400"
}, Rm = {
  key: 1,
  class: "mt-4 space-y-4"
}, Mm = { class: "flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, Dm = ["placeholder"], Fm = {
  key: 0,
  class: "rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3"
}, Bm = { class: "mt-2 flex items-center gap-2" }, Lm = ["value"], Um = {
  key: 1,
  class: "text-[11px] text-zinc-500 dark:text-zinc-400"
}, qm = { class: "flex flex-wrap items-center gap-2" }, Vm = ["disabled"], Hm = ["disabled"], jm = {
  key: 0,
  class: "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400"
}, Gm = {
  key: 2,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Wm = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, ef = {
  __name: "ConnectionForm",
  emits: ["saved"],
  setup(e, { emit: t }) {
    const n = t, r = Y(!0), o = Y(!1), i = Y(!1), a = Y(""), s = Y(""), u = Y(!1), l = Y(!1), c = Y(""), f = eo({
      base_url: "",
      instance: "",
      api_key: "",
      is_active: !0
    });
    async function v() {
      r.value = !0, a.value = "";
      try {
        const { connection: h } = await Ae.connection();
        f.base_url = h.credentials.base_url || "", f.instance = h.credentials.instance || "", f.is_active = h.is_active, l.value = h.credentials.has_api_key, u.value = h.connected, c.value = h.webhook_url || "";
      } catch (h) {
        a.value = h.message;
      } finally {
        r.value = !1;
      }
    }
    async function y() {
      o.value = !0, a.value = "", s.value = "";
      try {
        const { connection: h } = await Ae.saveConnection({ ...f });
        f.api_key = "", l.value = h.credentials.has_api_key, u.value = h.connected, c.value = h.webhook_url || "", s.value = "Conexão salva.", n("saved");
      } catch (h) {
        a.value = h.message;
      } finally {
        o.value = !1;
      }
    }
    async function p() {
      if (c.value)
        try {
          await navigator.clipboard.writeText(c.value), s.value = "URL do webhook copiada.";
        } catch {
          a.value = "Não foi possível copiar automaticamente — selecione e copie o texto manualmente.";
        }
    }
    async function m() {
      i.value = !0, a.value = "", s.value = "";
      try {
        const { message: h } = await Ae.testConnection();
        s.value = h || "Conexão validada.";
      } catch (h) {
        a.value = h.message;
      } finally {
        i.value = !1;
      }
    }
    return Ze(v), (h, g) => (C(), I("div", Tm, [
      d("div", Om, [
        d("div", Nm, [
          K(F(Yd), { class: "h-5 w-5" })
        ]),
        g[5] || (g[5] = d("div", null, [
          d("h3", { class: "text-sm font-black text-zinc-900 dark:text-white" }, "Conexão Evolution GO"),
          d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " O ZapRei envia todas as mensagens pela Evolution GO (evo-go). ")
        ], -1))
      ]),
      r.value ? (C(), I("div", Im, [
        K(F(qn), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        g[6] || (g[6] = d("p", { class: "text-xs font-medium" }, "Carregando configuração…", -1))
      ])) : (C(), I("div", Rm, [
        d("div", Mm, [
          g[7] || (g[7] = d("div", null, [
            d("div", { class: "text-xs font-bold text-zinc-900 dark:text-white" }, "Automação ativa"),
            d("div", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, "Desative para pausar fluxos e campanhas sem perder as credenciais.")
          ], -1)),
          d("label", {
            class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", f.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"])
          }, [
            ce(d("input", {
              "onUpdate:modelValue": g[0] || (g[0] = (k) => f.is_active = k),
              type: "checkbox",
              class: "sr-only"
            }, null, 512), [
              [om, f.is_active]
            ]),
            d("span", {
              class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200", f.is_active ? "translate-x-4" : "translate-x-0"])
            }, null, 2)
          ], 2)
        ]),
        d("div", null, [
          g[8] || (g[8] = d("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-base-url"
          }, "URL da Evolution GO", -1)),
          ce(d("input", {
            id: "zr-base-url",
            "onUpdate:modelValue": g[1] || (g[1] = (k) => f.base_url = k),
            type: "url",
            placeholder: "https://sua-evolution-go.com",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              we,
              f.base_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        d("div", null, [
          g[9] || (g[9] = d("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-instance"
          }, "Instância", -1)),
          ce(d("input", {
            id: "zr-instance",
            "onUpdate:modelValue": g[2] || (g[2] = (k) => f.instance = k),
            type: "text",
            placeholder: "getfy-bot",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [
              we,
              f.instance,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        d("div", null, [
          g[10] || (g[10] = d("label", {
            class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
            for: "zr-api-key"
          }, "API key", -1)),
          ce(d("input", {
            id: "zr-api-key",
            "onUpdate:modelValue": g[3] || (g[3] = (k) => f.api_key = k),
            type: "password",
            autocomplete: "off",
            placeholder: l.value ? "Chave salva — preencha apenas para substituir" : "Cole a API key da instância",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
          }, null, 8, Dm), [
            [
              we,
              f.api_key,
              void 0,
              { trim: !0 }
            ]
          ]),
          g[11] || (g[11] = d("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "A chave é gravada criptografada e nunca é devolvida ao navegador.", -1))
        ]),
        c.value ? (C(), I("div", Fm, [
          g[13] || (g[13] = Md('<div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div><p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400"> Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>) para usar o bloco &quot;Aguardar resposta&quot; nos fluxos. </p>', 2)),
          d("div", Bm, [
            d("input", {
              value: c.value,
              type: "text",
              readonly: "",
              class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
              onFocus: g[4] || (g[4] = (k) => k.target.select())
            }, null, 40, Lm),
            d("button", {
              type: "button",
              class: "flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: p
            }, [
              K(F(Hd), { class: "h-3.5 w-3.5" }),
              g[12] || (g[12] = Ue(" Copiar ", -1))
            ])
          ])
        ])) : (C(), I("p", Um, ' Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta"). ')),
        d("div", qm, [
          d("button", {
            type: "button",
            disabled: o.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: y
          }, W(o.value ? "Salvando…" : "Salvar conexão"), 9, Vm),
          d("button", {
            type: "button",
            disabled: i.value || !l.value,
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: m
          }, W(i.value ? "Testando…" : "Testar conexão"), 9, Hm),
          u.value ? (C(), I("span", jm, [
            K(F(Vd), { class: "h-3 w-3" }),
            g[14] || (g[14] = Ue(" Conectado ", -1))
          ])) : he("", !0)
        ]),
        a.value ? (C(), I("p", Gm, W(a.value), 1)) : s.value ? (C(), I("p", Wm, W(s.value), 1)) : he("", !0)
      ]))
    ]));
  }
};
function Ur(e) {
  return Dd() ? (Ao(e), !0) : !1;
}
function Qt(e) {
  return typeof e == "function" ? e() : F(e);
}
const Xm = typeof window < "u" && typeof document < "u", Ym = (e) => typeof e < "u", Km = Object.prototype.toString, Zm = (e) => Km.call(e) === "[object Object]", Jm = () => {
};
function Qm(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const tf = (e) => e();
function e0(e = tf) {
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
  return { isActive: fm(t), pause: n, resume: r, eventFilter: o };
}
function Xl(e, t = !1, n = "Timeout") {
  return new Promise((r, o) => {
    setTimeout(t ? () => o(n) : r, e);
  });
}
function t0(e, t, n = {}) {
  const {
    eventFilter: r = tf,
    ...o
  } = n;
  return Te(
    e,
    Qm(
      r,
      t
    ),
    o
  );
}
function Xn(e, t, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: i, pause: a, resume: s, isActive: u } = e0(r);
  return { stop: t0(
    e,
    t,
    {
      ...o,
      eventFilter: i
    }
  ), pause: a, resume: s, isActive: u };
}
function n0(e, t = {}) {
  if (!Ks(e))
    return cm(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = dm(() => ({
      get() {
        return e.value[r];
      },
      set(o) {
        var i;
        if ((i = Qt(t.replaceRef)) != null ? i : !0)
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
function gs(e, t = !1) {
  function n(f, { flush: v = "sync", deep: y = !1, timeout: p, throwOnTimeout: m } = {}) {
    let h = null;
    const k = [new Promise((x) => {
      h = Te(
        e,
        ($) => {
          f($) !== t && (h?.(), x($));
        },
        {
          flush: v,
          deep: y,
          immediate: !0
        }
      );
    })];
    return p != null && k.push(
      Xl(p, m).then(() => Qt(e)).finally(() => h?.())
    ), Promise.race(k);
  }
  function r(f, v) {
    if (!Ks(f))
      return n(($) => $ === f, v);
    const { flush: y = "sync", deep: p = !1, timeout: m, throwOnTimeout: h } = v ?? {};
    let g = null;
    const x = [new Promise(($) => {
      g = Te(
        [e, f],
        ([T, P]) => {
          t !== (T === P) && (g?.(), $(T));
        },
        {
          flush: y,
          deep: p,
          immediate: !0
        }
      );
    })];
    return m != null && x.push(
      Xl(m, h).then(() => Qt(e)).finally(() => (g?.(), Qt(e)))
    ), Promise.race(x);
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
  function u(f, v) {
    return n((y) => {
      const p = Array.from(y);
      return p.includes(f) || p.includes(Qt(f));
    }, v);
  }
  function l(f) {
    return c(1, f);
  }
  function c(f = 1, v) {
    let y = -1;
    return n(() => (y += 1, y >= f), v);
  }
  return Array.isArray(Qt(e)) ? {
    toMatch: n,
    toContains: u,
    changed: l,
    changedTimes: c,
    get not() {
      return gs(e, !t);
    }
  } : {
    toMatch: n,
    toBe: r,
    toBeTruthy: o,
    toBeNull: i,
    toBeNaN: s,
    toBeUndefined: a,
    changed: l,
    changedTimes: c,
    get not() {
      return gs(e, !t);
    }
  };
}
function ys(e) {
  return gs(e);
}
function r0(e) {
  var t;
  const n = Qt(e);
  return (t = n?.$el) != null ? t : n;
}
const nf = Xm ? window : void 0;
function rf(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = nf) : [t, n, r, o] = e, !t)
    return Jm;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((c) => c()), i.length = 0;
  }, s = (c, f, v, y) => (c.addEventListener(f, v, y), () => c.removeEventListener(f, v, y)), u = Te(
    () => [r0(t), Qt(o)],
    ([c, f]) => {
      if (a(), !c)
        return;
      const v = Zm(f) ? { ...f } : f;
      i.push(
        ...n.flatMap((y) => r.map((p) => s(c, y, p, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    u(), a();
  };
  return Ur(l), l;
}
function o0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Yl(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = nf,
    eventName: i = "keydown",
    passive: a = !1,
    dedupe: s = !1
  } = r, u = o0(t);
  return rf(o, i, (c) => {
    c.repeat && Qt(s) || u(c) && n(c);
  }, a);
}
function i0(e) {
  return JSON.parse(JSON.stringify(e));
}
function Zi(e, t, n, r = {}) {
  var o, i, a;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: l,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: v
  } = r, y = pr(), p = n || y?.emit || ((o = y?.$emit) == null ? void 0 : o.bind(y)) || ((a = (i = y?.proxy) == null ? void 0 : i.$emit) == null ? void 0 : a.bind(y?.proxy));
  let m = l;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const h = (x) => s ? typeof s == "function" ? s(x) : i0(x) : x, g = () => Ym(e[t]) ? h(e[t]) : f, k = (x) => {
    v ? v(x) && p(m, x) : p(m, x);
  };
  if (u) {
    const x = g(), $ = Y(x);
    let T = !1;
    return Te(
      () => e[t],
      (P) => {
        T || (T = !0, $.value = h(P), rn(() => T = !1));
      }
    ), Te(
      $,
      (P) => {
        !T && (P !== e[t] || c) && k(P);
      },
      { deep: c }
    ), $;
  } else
    return J({
      get() {
        return g();
      },
      set(x) {
        k(x);
      }
    });
}
var a0 = { value: () => {
} };
function gi() {
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
function s0(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
To.prototype = gi.prototype = {
  constructor: To,
  on: function(e, t) {
    var n = this._, r = s0(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; )
        if ((o = (e = r[i]).type) && (o = l0(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type)
        n[o] = Kl(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = Kl(n[o], e.name, null);
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
function l0(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Kl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = a0, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var bs = "http://www.w3.org/1999/xhtml";
const Zl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: bs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function yi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Zl.hasOwnProperty(t) ? { space: Zl[t], local: e } : e;
}
function u0(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === bs && t.documentElement.namespaceURI === bs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function c0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function of(e) {
  var t = yi(e);
  return (t.local ? c0 : u0)(t);
}
function d0() {
}
function Js(e) {
  return e == null ? d0 : function() {
    return this.querySelector(e);
  };
}
function f0(e) {
  typeof e != "function" && (e = Js(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = i[c]) && (l = e.call(u, u.__data__, c, i)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new xt(r, this._parents);
}
function p0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function h0() {
  return [];
}
function af(e) {
  return e == null ? h0 : function() {
    return this.querySelectorAll(e);
  };
}
function m0(e) {
  return function() {
    return p0(e.apply(this, arguments));
  };
}
function v0(e) {
  typeof e == "function" ? e = m0(e) : e = af(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(e.call(u, u.__data__, l, a)), o.push(u));
  return new xt(r, o);
}
function sf(e) {
  return function() {
    return this.matches(e);
  };
}
function lf(e) {
  return function(t) {
    return t.matches(e);
  };
}
var g0 = Array.prototype.find;
function y0(e) {
  return function() {
    return g0.call(this.children, e);
  };
}
function b0() {
  return this.firstElementChild;
}
function x0(e) {
  return this.select(e == null ? b0 : y0(typeof e == "function" ? e : lf(e)));
}
var w0 = Array.prototype.filter;
function _0() {
  return Array.from(this.children);
}
function S0(e) {
  return function() {
    return w0.call(this.children, e);
  };
}
function E0(e) {
  return this.selectAll(e == null ? _0 : S0(typeof e == "function" ? e : lf(e)));
}
function k0(e) {
  typeof e != "function" && (e = sf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], u, l = 0; l < a; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && s.push(u);
  return new xt(r, this._parents);
}
function uf(e) {
  return new Array(e.length);
}
function P0() {
  return new xt(this._enter || this._groups.map(uf), this._parents);
}
function Wo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Wo.prototype = {
  constructor: Wo,
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
function $0(e) {
  return function() {
    return e;
  };
}
function C0(e, t, n, r, o, i) {
  for (var a = 0, s, u = t.length, l = i.length; a < l; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Wo(e, i[a]);
  for (; a < u; ++a)
    (s = t[a]) && (o[a] = s);
}
function z0(e, t, n, r, o, i, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = t.length, f = i.length, v = new Array(c), y;
  for (s = 0; s < c; ++s)
    (u = t[s]) && (v[s] = y = a.call(u, u.__data__, s, t) + "", l.has(y) ? o[s] = u : l.set(y, u));
  for (s = 0; s < f; ++s)
    y = a.call(e, i[s], s, i) + "", (u = l.get(y)) ? (r[s] = u, u.__data__ = i[s], l.delete(y)) : n[s] = new Wo(e, i[s]);
  for (s = 0; s < c; ++s)
    (u = t[s]) && l.get(v[s]) === u && (o[s] = u);
}
function A0(e) {
  return e.__data__;
}
function T0(e, t) {
  if (!arguments.length)
    return Array.from(this, A0);
  var n = t ? z0 : C0, r = this._parents, o = this._groups;
  typeof e != "function" && (e = $0(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var c = r[l], f = o[l], v = f.length, y = O0(e.call(c, c && c.__data__, l, r)), p = y.length, m = s[l] = new Array(p), h = a[l] = new Array(p), g = u[l] = new Array(v);
    n(c, f, m, h, g, y, t);
    for (var k = 0, x = 0, $, T; k < p; ++k)
      if ($ = m[k]) {
        for (k >= x && (x = k + 1); !(T = h[x]) && ++x < p; )
          ;
        $._next = T || null;
      }
  }
  return a = new xt(a, r), a._enter = s, a._exit = u, a;
}
function O0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function N0() {
  return new xt(this._exit || this._groups.map(uf), this._parents);
}
function I0(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function R0(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, v = s[u] = new Array(f), y, p = 0; p < f; ++p)
      (y = l[p] || c[p]) && (v[p] = y);
  for (; u < o; ++u)
    s[u] = n[u];
  return new xt(s, this._parents);
}
function M0() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function D0(e) {
  e || (e = F0);
  function t(f, v) {
    return f && v ? e(f.__data__, v.__data__) : !f - !v;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, u = o[i] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(t);
  }
  return new xt(o, this._parents).order();
}
function F0(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function B0() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function L0() {
  return Array.from(this);
}
function U0() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a)
        return a;
    }
  return null;
}
function q0() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function V0() {
  return !this.node();
}
function H0(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function j0(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function G0(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function W0(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function X0(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Y0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function K0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Z0(e, t) {
  var n = yi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? G0 : j0 : typeof t == "function" ? n.local ? K0 : Y0 : n.local ? X0 : W0)(n, t));
}
function cf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function J0(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Q0(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function ev(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function tv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? J0 : typeof t == "function" ? ev : Q0)(e, t, n ?? "")) : or(this.node(), e);
}
function or(e, t) {
  return e.style.getPropertyValue(t) || cf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function nv(e) {
  return function() {
    delete this[e];
  };
}
function rv(e, t) {
  return function() {
    this[e] = t;
  };
}
function ov(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function iv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? nv : typeof t == "function" ? ov : rv)(e, t)) : this.node()[e];
}
function df(e) {
  return e.trim().split(/^|\s+/);
}
function Qs(e) {
  return e.classList || new ff(e);
}
function ff(e) {
  this._node = e, this._names = df(e.getAttribute("class") || "");
}
ff.prototype = {
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
function pf(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function hf(e, t) {
  for (var n = Qs(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function av(e) {
  return function() {
    pf(this, e);
  };
}
function sv(e) {
  return function() {
    hf(this, e);
  };
}
function lv(e, t) {
  return function() {
    (t.apply(this, arguments) ? pf : hf)(this, e);
  };
}
function uv(e, t) {
  var n = df(e + "");
  if (arguments.length < 2) {
    for (var r = Qs(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? lv : t ? av : sv)(n, t));
}
function cv() {
  this.textContent = "";
}
function dv(e) {
  return function() {
    this.textContent = e;
  };
}
function fv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function pv(e) {
  return arguments.length ? this.each(e == null ? cv : (typeof e == "function" ? fv : dv)(e)) : this.node().textContent;
}
function hv() {
  this.innerHTML = "";
}
function mv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function vv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function gv(e) {
  return arguments.length ? this.each(e == null ? hv : (typeof e == "function" ? vv : mv)(e)) : this.node().innerHTML;
}
function yv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function bv() {
  return this.each(yv);
}
function xv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wv() {
  return this.each(xv);
}
function _v(e) {
  var t = typeof e == "function" ? e : of(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Sv() {
  return null;
}
function Ev(e, t) {
  var n = typeof e == "function" ? e : of(e), r = t == null ? Sv : typeof t == "function" ? t : Js(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function kv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Pv() {
  return this.each(kv);
}
function $v() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zv(e) {
  return this.select(e ? Cv : $v);
}
function Av(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Tv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Ov(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Nv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Iv(e, t, n) {
  return function() {
    var r = this.__on, o, i = Tv(t);
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
function Rv(e, t, n) {
  var r = Ov(e + ""), o, i = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (o = 0, c = s[u]; o < i; ++o)
          if ((a = r[o]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Iv : Nv, o = 0; o < i; ++o)
    this.each(s(r[o], t, n));
  return this;
}
function mf(e, t, n) {
  var r = cf(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Mv(e, t) {
  return function() {
    return mf(this, e, t);
  };
}
function Dv(e, t) {
  return function() {
    return mf(this, e, t.apply(this, arguments));
  };
}
function Fv(e, t) {
  return this.each((typeof t == "function" ? Dv : Mv)(e, t));
}
function* Bv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var vf = [null];
function xt(e, t) {
  this._groups = e, this._parents = t;
}
function to() {
  return new xt([[document.documentElement]], vf);
}
function Lv() {
  return this;
}
xt.prototype = to.prototype = {
  constructor: xt,
  select: f0,
  selectAll: v0,
  selectChild: x0,
  selectChildren: E0,
  filter: k0,
  data: T0,
  enter: P0,
  exit: N0,
  join: I0,
  merge: R0,
  selection: Lv,
  order: M0,
  sort: D0,
  call: B0,
  nodes: L0,
  node: U0,
  size: q0,
  empty: V0,
  each: H0,
  attr: Z0,
  style: tv,
  property: iv,
  classed: uv,
  text: pv,
  html: gv,
  raise: bv,
  lower: wv,
  append: _v,
  insert: Ev,
  remove: Pv,
  clone: zv,
  datum: Av,
  on: Rv,
  dispatch: Fv,
  [Symbol.iterator]: Bv
};
function At(e) {
  return typeof e == "string" ? new xt([[document.querySelector(e)]], [document.documentElement]) : new xt([[e]], vf);
}
function Uv(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Ut(e, t) {
  if (e = Uv(e), t === void 0 && (t = e.currentTarget), t) {
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
const qv = { passive: !1 }, qr = { capture: !0, passive: !1 };
function Ji(e) {
  e.stopImmediatePropagation();
}
function er(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gf(e) {
  var t = e.document.documentElement, n = At(e).on("dragstart.drag", er, qr);
  "onselectstart" in t ? n.on("selectstart.drag", er, qr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function yf(e, t) {
  var n = e.document.documentElement, r = At(e).on("dragstart.drag", null);
  t && (r.on("click.drag", er, qr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const mo = (e) => () => e;
function xs(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
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
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
xs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Vv(e) {
  return !e.ctrlKey && !e.button;
}
function Hv() {
  return this.parentNode;
}
function jv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Gv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Wv() {
  var e = Vv, t = Hv, n = jv, r = Gv, o = {}, i = gi("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function v($) {
    $.on("mousedown.drag", y).filter(r).on("touchstart.drag", h).on("touchmove.drag", g, qv).on("touchend.drag touchcancel.drag", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y($, T) {
    if (!(c || !e.call(this, $, T))) {
      var P = x(this, t.call(this, $, T), $, T, "mouse");
      P && (At($.view).on("mousemove.drag", p, qr).on("mouseup.drag", m, qr), gf($.view), Ji($), l = !1, s = $.clientX, u = $.clientY, P("start", $));
    }
  }
  function p($) {
    if (er($), !l) {
      var T = $.clientX - s, P = $.clientY - u;
      l = T * T + P * P > f;
    }
    o.mouse("drag", $);
  }
  function m($) {
    At($.view).on("mousemove.drag mouseup.drag", null), yf($.view, l), er($), o.mouse("end", $);
  }
  function h($, T) {
    if (e.call(this, $, T)) {
      var P = $.changedTouches, b = t.call(this, $, T), S = P.length, L, M;
      for (L = 0; L < S; ++L)
        (M = x(this, b, $, T, P[L].identifier, P[L])) && (Ji($), M("start", $, P[L]));
    }
  }
  function g($) {
    var T = $.changedTouches, P = T.length, b, S;
    for (b = 0; b < P; ++b)
      (S = o[T[b].identifier]) && (er($), S("drag", $, T[b]));
  }
  function k($) {
    var T = $.changedTouches, P = T.length, b, S;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), b = 0; b < P; ++b)
      (S = o[T[b].identifier]) && (Ji($), S("end", $, T[b]));
  }
  function x($, T, P, b, S, L) {
    var M = i.copy(), z = Ut(L || P, T), _, O, E;
    if ((E = n.call($, new xs("beforestart", {
      sourceEvent: P,
      target: v,
      identifier: S,
      active: a,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: M
    }), b)) != null)
      return _ = E.x - z[0] || 0, O = E.y - z[1] || 0, function N(w, U, B) {
        var Z = z, Q;
        switch (w) {
          case "start":
            o[S] = N, Q = a++;
            break;
          case "end":
            delete o[S], --a;
          case "drag":
            z = Ut(B || U, T), Q = a;
            break;
        }
        M.call(
          w,
          $,
          new xs(w, {
            sourceEvent: U,
            subject: E,
            target: v,
            identifier: S,
            active: Q,
            x: z[0] + _,
            y: z[1] + O,
            dx: z[0] - Z[0],
            dy: z[1] - Z[1],
            dispatch: M
          }),
          b
        );
      };
  }
  return v.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : mo(!!$), v) : e;
  }, v.container = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : mo($), v) : t;
  }, v.subject = function($) {
    return arguments.length ? (n = typeof $ == "function" ? $ : mo($), v) : n;
  }, v.touchable = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : mo(!!$), v) : r;
  }, v.on = function() {
    var $ = i.on.apply(i, arguments);
    return $ === i ? v : $;
  }, v.clickDistance = function($) {
    return arguments.length ? (f = ($ = +$) * $, v) : Math.sqrt(f);
  }, v;
}
function el(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function bf(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function no() {
}
var Vr = 0.7, Xo = 1 / Vr, tr = "\\s*([+-]?\\d+)\\s*", Hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Xv = /^#([0-9a-f]{3,8})$/, Yv = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), Kv = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), Zv = new RegExp(`^rgba\\(${tr},${tr},${tr},${Hr}\\)$`), Jv = new RegExp(`^rgba\\(${jt},${jt},${jt},${Hr}\\)$`), Qv = new RegExp(`^hsl\\(${Hr},${jt},${jt}\\)$`), eg = new RegExp(`^hsla\\(${Hr},${jt},${jt},${Hr}\\)$`), Jl = {
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
el(no, Dn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ql,
  // Deprecated! Use color.formatHex.
  formatHex: Ql,
  formatHex8: tg,
  formatHsl: ng,
  formatRgb: eu,
  toString: eu
});
function Ql() {
  return this.rgb().formatHex();
}
function tg() {
  return this.rgb().formatHex8();
}
function ng() {
  return xf(this).formatHsl();
}
function eu() {
  return this.rgb().formatRgb();
}
function Dn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Xv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tu(t) : n === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Yv.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = Kv.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Zv.exec(e)) ? vo(t[1], t[2], t[3], t[4]) : (t = Jv.exec(e)) ? vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Qv.exec(e)) ? ou(t[1], t[2] / 100, t[3] / 100, 1) : (t = eg.exec(e)) ? ou(t[1], t[2] / 100, t[3] / 100, t[4]) : Jl.hasOwnProperty(e) ? tu(Jl[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function tu(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function rg(e) {
  return e instanceof no || (e = Dn(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function ws(e, t, n, r) {
  return arguments.length === 1 ? rg(e) : new pt(e, t, n, r ?? 1);
}
function pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
el(pt, ws, bf(no, {
  brighter(e) {
    return e = e == null ? Xo : Math.pow(Xo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(On(this.r), On(this.g), On(this.b), Yo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nu,
  // Deprecated! Use color.formatHex.
  formatHex: nu,
  formatHex8: og,
  formatRgb: ru,
  toString: ru
}));
function nu() {
  return `#${An(this.r)}${An(this.g)}${An(this.b)}`;
}
function og() {
  return `#${An(this.r)}${An(this.g)}${An(this.b)}${An((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ru() {
  const e = Yo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${On(this.r)}, ${On(this.g)}, ${On(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function On(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function An(e) {
  return e = On(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ou(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Tt(e, t, n, r);
}
function xf(e) {
  if (e instanceof Tt)
    return new Tt(e.h, e.s, e.l, e.opacity);
  if (e instanceof no || (e = Dn(e)), !e)
    return new Tt();
  if (e instanceof Tt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, u = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= u < 0.5 ? i + o : 2 - i - o, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new Tt(a, s, u, e.opacity);
}
function ig(e, t, n, r) {
  return arguments.length === 1 ? xf(e) : new Tt(e, t, n, r ?? 1);
}
function Tt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
el(Tt, ig, bf(no, {
  brighter(e) {
    return e = e == null ? Xo : Math.pow(Xo, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new pt(
      Qi(e >= 240 ? e - 240 : e + 120, o, r),
      Qi(e, o, r),
      Qi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Tt(iu(this.h), go(this.s), go(this.l), Yo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${iu(this.h)}, ${go(this.s) * 100}%, ${go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function iu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const tl = (e) => () => e;
function ag(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function sg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function lg(e) {
  return (e = +e) == 1 ? wf : function(t, n) {
    return n - t ? sg(t, n, e) : tl(isNaN(t) ? n : t);
  };
}
function wf(e, t) {
  var n = t - e;
  return n ? ag(e, n) : tl(isNaN(e) ? t : e);
}
const Ko = (function e(t) {
  var n = lg(t);
  function r(o, i) {
    var a = n((o = ws(o)).r, (i = ws(i)).r), s = n(o.g, i.g), u = n(o.b, i.b), l = wf(o.opacity, i.opacity);
    return function(c) {
      return o.r = a(c), o.g = s(c), o.b = u(c), o.opacity = l(c), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function ug(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o)
      r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function cg(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function dg(e, t) {
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
function fg(e, t) {
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
function pg(e, t) {
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
var _s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ea = new RegExp(_s.source, "g");
function hg(e) {
  return function() {
    return e;
  };
}
function mg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _f(e, t) {
  var n = _s.lastIndex = ea.lastIndex = 0, r, o, i, a = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (r = _s.exec(e)) && (o = ea.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, u.push({ i: a, x: qt(r, o) })), n = ea.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? mg(u[0].x) : hg(t) : (t = u.length, function(l) {
    for (var c = 0, f; c < t; ++c)
      s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Tr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? tl(t) : (n === "number" ? qt : n === "string" ? (r = Dn(t)) ? (t = r, Ko) : _f : t instanceof Dn ? Ko : t instanceof Date ? fg : cg(t) ? ug : Array.isArray(t) ? dg : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? pg : qt)(e, t);
}
var au = 180 / Math.PI, Ss = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sf(e, t, n, r, o, i) {
  var a, s, u;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (u = e * n + t * r) && (n -= e * u, r -= t * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), e * r < t * n && (e = -e, t = -t, u = -u, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * au,
    skewX: Math.atan(u) * au,
    scaleX: a,
    scaleY: s
  };
}
var yo;
function vg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ss : Sf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gg(e) {
  return e == null || (yo || (yo = document.createElementNS("http://www.w3.org/2000/svg", "g")), yo.setAttribute("transform", e), !(e = yo.transform.baseVal.consolidate())) ? Ss : (e = e.matrix, Sf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ef(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, c, f, v, y, p) {
    if (l !== f || c !== v) {
      var m = y.push("translate(", null, t, null, n);
      p.push({ i: m - 4, x: qt(l, f) }, { i: m - 2, x: qt(c, v) });
    } else (f || v) && y.push("translate(" + f + t + v + n);
  }
  function a(l, c, f, v) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), v.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: qt(l, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function s(l, c, f, v) {
    l !== c ? v.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: qt(l, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function u(l, c, f, v, y, p) {
    if (l !== f || c !== v) {
      var m = y.push(o(y) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: qt(l, f) }, { i: m - 2, x: qt(c, v) });
    } else (f !== 1 || v !== 1) && y.push(o(y) + "scale(" + f + "," + v + ")");
  }
  return function(l, c) {
    var f = [], v = [];
    return l = e(l), c = e(c), i(l.translateX, l.translateY, c.translateX, c.translateY, f, v), a(l.rotate, c.rotate, f, v), s(l.skewX, c.skewX, f, v), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, v), l = c = null, function(y) {
      for (var p = -1, m = v.length, h; ++p < m; )
        f[(h = v[p]).i] = h.x(y);
      return f.join("");
    };
  };
}
var yg = Ef(vg, "px, ", "px)", "deg)"), bg = Ef(gg, ", ", ")", ")"), xg = 1e-12;
function su(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function _g(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Oo = (function e(t, n, r) {
  function o(i, a) {
    var s = i[0], u = i[1], l = i[2], c = a[0], f = a[1], v = a[2], y = c - s, p = f - u, m = y * y + p * p, h, g;
    if (m < xg)
      g = Math.log(v / l) / t, h = function(b) {
        return [
          s + b * y,
          u + b * p,
          l * Math.exp(t * b * g)
        ];
      };
    else {
      var k = Math.sqrt(m), x = (v * v - l * l + r * m) / (2 * l * n * k), $ = (v * v - l * l - r * m) / (2 * v * n * k), T = Math.log(Math.sqrt(x * x + 1) - x), P = Math.log(Math.sqrt($ * $ + 1) - $);
      g = (P - T) / t, h = function(b) {
        var S = b * g, L = su(T), M = l / (n * k) * (L * _g(t * S + T) - wg(T));
        return [
          s + M * y,
          u + M * p,
          l * L / su(t * S + T)
        ];
      };
    }
    return h.duration = g * 1e3 * t / Math.SQRT2, h;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, u = s * s;
    return e(a, s, u);
  }, o;
})(Math.SQRT2, 2, 4);
var ir = 0, $r = 0, br = 0, kf = 1e3, Zo, Cr, Jo = 0, Fn = 0, bi = 0, jr = typeof performance == "object" && performance.now ? performance : Date, Pf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function nl() {
  return Fn || (Pf(Sg), Fn = jr.now() + bi);
}
function Sg() {
  Fn = 0;
}
function Qo() {
  this._call = this._time = this._next = null;
}
Qo.prototype = $f.prototype = {
  constructor: Qo,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? nl() : +n) + (t == null ? 0 : +t), !this._next && Cr !== this && (Cr ? Cr._next = this : Zo = this, Cr = this), this._call = e, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function $f(e, t, n) {
  var r = new Qo();
  return r.restart(e, t, n), r;
}
function Eg() {
  nl(), ++ir;
  for (var e = Zo, t; e; )
    (t = Fn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ir;
}
function lu() {
  Fn = (Jo = jr.now()) + bi, ir = $r = 0;
  try {
    Eg();
  } finally {
    ir = 0, Pg(), Fn = 0;
  }
}
function kg() {
  var e = jr.now(), t = e - Jo;
  t > kf && (bi -= t, Jo = e);
}
function Pg() {
  for (var e, t = Zo, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zo = n);
  Cr = e, Es(r);
}
function Es(e) {
  if (!ir) {
    $r && ($r = clearTimeout($r));
    var t = e - Fn;
    t > 24 ? (e < 1 / 0 && ($r = setTimeout(lu, e - jr.now() - bi)), br && (br = clearInterval(br))) : (br || (Jo = jr.now(), br = setInterval(kg, kf)), ir = 1, Pf(lu));
  }
}
function uu(e, t, n) {
  var r = new Qo();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var $g = gi("start", "end", "cancel", "interrupt"), Cg = [], Cf = 0, cu = 1, ks = 2, No = 3, du = 4, Ps = 5, Io = 6;
function xi(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a)
    e.__transition = {};
  else if (n in a)
    return;
  zg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: $g,
    tween: Cg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Cf
  });
}
function rl(e, t) {
  var n = It(e, t);
  if (n.state > Cf)
    throw new Error("too late; already scheduled");
  return n;
}
function Yt(e, t) {
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
function zg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = $f(i, 0, n.time);
  function i(l) {
    n.state = cu, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, f, v, y;
    if (n.state !== cu)
      return u();
    for (c in r)
      if (y = r[c], y.name === n.name) {
        if (y.state === No)
          return uu(a);
        y.state === du ? (y.state = Io, y.timer.stop(), y.on.call("interrupt", e, e.__data__, y.index, y.group), delete r[c]) : +c < t && (y.state = Io, y.timer.stop(), y.on.call("cancel", e, e.__data__, y.index, y.group), delete r[c]);
      }
    if (uu(function() {
      n.state === No && (n.state = du, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = ks, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ks) {
      for (n.state = No, o = new Array(v = n.tween.length), c = 0, f = -1; c < v; ++c)
        (y = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = y);
      o.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Ps, 1), f = -1, v = o.length; ++f < v; )
      o[f].call(e, c);
    n.state === Ps && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Io, n.timer.stop(), delete r[t];
    for (var l in r)
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
      o = r.state > ks && r.state < Ps, r.state = Io, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Ag(e) {
  return this.each(function() {
    Ro(this, e);
  });
}
function Tg(e, t) {
  var n, r;
  return function() {
    var o = Yt(this, e), i = o.tween;
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
function Og(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = Yt(this, e), a = i.tween;
    if (a !== r) {
      o = (r = a).slice();
      for (var s = { name: t, value: n }, u = 0, l = o.length; u < l; ++u)
        if (o[u].name === t) {
          o[u] = s;
          break;
        }
      u === l && o.push(s);
    }
    i.tween = o;
  };
}
function Ng(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = It(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Tg : Og)(n, e, t));
}
function ol(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Yt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return It(o, r).value[t];
  };
}
function zf(e, t) {
  var n;
  return (typeof t == "number" ? qt : t instanceof Dn ? Ko : (n = Dn(t)) ? (t = n, Ko) : _f)(e, t);
}
function Ig(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Rg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Dg(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Fg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), u = s + "", a === u ? null : a === r && u === o ? i : (o = u, i = t(r = a, s)));
  };
}
function Bg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), u = s + "", a === u ? null : a === r && u === o ? i : (o = u, i = t(r = a, s)));
  };
}
function Lg(e, t) {
  var n = yi(e), r = n === "transform" ? bg : zf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Bg : Fg)(n, r, ol(this, "attr." + e, t)) : t == null ? (n.local ? Rg : Ig)(n) : (n.local ? Dg : Mg)(n, r, t));
}
function Ug(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function qg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Vg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && qg(e, i)), n;
  }
  return o._value = t, o;
}
function Hg(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ug(e, i)), n;
  }
  return o._value = t, o;
}
function jg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = yi(e);
  return this.tween(n, (r.local ? Vg : Hg)(r, t));
}
function Gg(e, t) {
  return function() {
    rl(this, e).delay = +t.apply(this, arguments);
  };
}
function Wg(e, t) {
  return t = +t, function() {
    rl(this, e).delay = t;
  };
}
function Xg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Gg : Wg)(t, e)) : It(this.node(), t).delay;
}
function Yg(e, t) {
  return function() {
    Yt(this, e).duration = +t.apply(this, arguments);
  };
}
function Kg(e, t) {
  return t = +t, function() {
    Yt(this, e).duration = t;
  };
}
function Zg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Yg : Kg)(t, e)) : It(this.node(), t).duration;
}
function Jg(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Yt(this, e).ease = t;
  };
}
function Qg(e) {
  var t = this._id;
  return arguments.length ? this.each(Jg(t, e)) : It(this.node(), t).ease;
}
function ey(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Yt(this, e).ease = n;
  };
}
function ty(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(ey(this._id, e));
}
function ny(e) {
  typeof e != "function" && (e = sf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], u, l = 0; l < a; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && s.push(u);
  return new an(r, this._parents, this._name, this._id);
}
function ry(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var u = t[s], l = n[s], c = u.length, f = a[s] = new Array(c), v, y = 0; y < c; ++y)
      (v = u[y] || l[y]) && (f[y] = v);
  for (; s < r; ++s)
    a[s] = t[s];
  return new an(a, this._parents, this._name, this._id);
}
function oy(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function iy(e, t, n) {
  var r, o, i = oy(t) ? rl : Yt;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ay(e, t) {
  var n = this._id;
  return arguments.length < 2 ? It(this.node(), n).on.on(e) : this.each(iy(n, e, t));
}
function sy(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function ly() {
  return this.on("end.remove", sy(this._id));
}
function uy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Js(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], u = s.length, l = i[a] = new Array(u), c, f, v = 0; v < u; ++v)
      (c = s[v]) && (f = e.call(c, c.__data__, v, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[v] = f, xi(l[v], t, n, v, l, It(c, n)));
  return new an(i, this._parents, t, n);
}
function cy(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = af(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var v = e.call(c, c.__data__, f, u), y, p = It(c, n), m = 0, h = v.length; m < h; ++m)
          (y = v[m]) && xi(y, t, n, m, v, p);
        i.push(v), a.push(c);
      }
  return new an(i, a, t, n);
}
var dy = to.prototype.constructor;
function fy() {
  return new dy(this._groups, this._parents);
}
function py(e, t) {
  var n, r, o;
  return function() {
    var i = or(this, e), a = (this.style.removeProperty(e), or(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Af(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hy(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = or(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function my(e, t, n) {
  var r, o, i;
  return function() {
    var a = or(this, e), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(e), or(this, e))), a === u ? null : a === r && u === o ? i : (o = u, i = t(r = a, s));
  };
}
function vy(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var u = Yt(this, e), l = u.on, c = u.value[i] == null ? s || (s = Af(t)) : void 0;
    (l !== n || o !== c) && (r = (n = l).copy()).on(a, o = c), u.on = r;
  };
}
function gy(e, t, n) {
  var r = (e += "") == "transform" ? yg : zf;
  return t == null ? this.styleTween(e, py(e, r)).on("end.style." + e, Af(e)) : typeof t == "function" ? this.styleTween(e, my(e, r, ol(this, "style." + e, t))).each(vy(this._id, e)) : this.styleTween(e, hy(e, r, t), n).on("end.style." + e, null);
}
function yy(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function by(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && yy(e, a, n)), r;
  }
  return i._value = t, i;
}
function xy(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, by(e, t, n ?? ""));
}
function wy(e) {
  return function() {
    this.textContent = e;
  };
}
function _y(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Sy(e) {
  return this.tween("text", typeof e == "function" ? _y(ol(this, "text", e)) : wy(e == null ? "" : e + ""));
}
function Ey(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function ky(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ey(o)), t;
  }
  return r._value = e, r;
}
function Py(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, ky(e));
}
function $y() {
  for (var e = this._name, t = this._id, n = Tf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = It(u, t);
        xi(u, e, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new an(r, this._parents, e, n);
}
function Cy() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = Yt(this, r), c = l.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(u)), l.on = t;
    }), o === 0 && i();
  });
}
var zy = 0;
function an(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Tf() {
  return ++zy;
}
var Kt = to.prototype;
an.prototype = {
  constructor: an,
  select: uy,
  selectAll: cy,
  selectChild: Kt.selectChild,
  selectChildren: Kt.selectChildren,
  filter: ny,
  merge: ry,
  selection: fy,
  transition: $y,
  call: Kt.call,
  nodes: Kt.nodes,
  node: Kt.node,
  size: Kt.size,
  empty: Kt.empty,
  each: Kt.each,
  on: ay,
  attr: Lg,
  attrTween: jg,
  style: gy,
  styleTween: xy,
  text: Sy,
  textTween: Py,
  remove: ly,
  tween: Ng,
  delay: Xg,
  duration: Zg,
  ease: Qg,
  easeVarying: ty,
  end: Cy,
  [Symbol.iterator]: Kt[Symbol.iterator]
};
function Ay(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ty = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ay
};
function Oy(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ny(e) {
  var t, n;
  e instanceof an ? (t = e._id, e = e._name) : (t = Tf(), (n = Ty).time = nl(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && xi(u, e, t, l, a, n || Oy(u, t));
  return new an(r, this._parents, e, t);
}
to.prototype.interrupt = Ag;
to.prototype.transition = Ny;
const bo = (e) => () => e;
function Iy(e, {
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
function tn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
tn.prototype = {
  constructor: tn,
  scale: function(e) {
    return e === 1 ? this : new tn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new tn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ar = new tn(1, 0, 0);
tn.prototype;
function ta(e) {
  e.stopImmediatePropagation();
}
function xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ry(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function My() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function fu() {
  return this.__zoom || ar;
}
function Dy(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Fy() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function By(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Ly() {
  var e = Ry, t = My, n = By, r = Dy, o = Fy, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, u = Oo, l = gi("start", "zoom", "end"), c, f, v, y = 500, p = 150, m = 0, h = 10;
  function g(E) {
    E.property("__zoom", fu).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", M).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  g.transform = function(E, N, w, U) {
    var B = E.selection ? E.selection() : E;
    B.property("__zoom", fu), E !== B ? T(E, N, w, U) : B.interrupt().each(function() {
      P(this, arguments).event(U).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, g.scaleBy = function(E, N, w, U) {
    g.scaleTo(E, function() {
      var B = this.__zoom.k, Z = typeof N == "function" ? N.apply(this, arguments) : N;
      return B * Z;
    }, w, U);
  }, g.scaleTo = function(E, N, w, U) {
    g.transform(E, function() {
      var B = t.apply(this, arguments), Z = this.__zoom, Q = w == null ? $(B) : typeof w == "function" ? w.apply(this, arguments) : w, ee = Z.invert(Q), de = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(x(k(Z, de), Q, ee), B, a);
    }, w, U);
  }, g.translateBy = function(E, N, w, U) {
    g.transform(E, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof w == "function" ? w.apply(this, arguments) : w
      ), t.apply(this, arguments), a);
    }, null, U);
  }, g.translateTo = function(E, N, w, U, B) {
    g.transform(E, function() {
      var Z = t.apply(this, arguments), Q = this.__zoom, ee = U == null ? $(Z) : typeof U == "function" ? U.apply(this, arguments) : U;
      return n(ar.translate(ee[0], ee[1]).scale(Q.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof w == "function" ? -w.apply(this, arguments) : -w
      ), Z, a);
    }, U, B);
  };
  function k(E, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === E.k ? E : new tn(N, E.x, E.y);
  }
  function x(E, N, w) {
    var U = N[0] - w[0] * E.k, B = N[1] - w[1] * E.k;
    return U === E.x && B === E.y ? E : new tn(E.k, U, B);
  }
  function $(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function T(E, N, w, U) {
    E.on("start.zoom", function() {
      P(this, arguments).event(U).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(U).end();
    }).tween("zoom", function() {
      var B = this, Z = arguments, Q = P(B, Z).event(U), ee = t.apply(B, Z), de = w == null ? $(ee) : typeof w == "function" ? w.apply(B, Z) : w, ye = Math.max(ee[1][0] - ee[0][0], ee[1][1] - ee[0][1]), _e = B.__zoom, te = typeof N == "function" ? N.apply(B, Z) : N, oe = u(_e.invert(de).concat(ye / _e.k), te.invert(de).concat(ye / te.k));
      return function(me) {
        if (me === 1)
          me = te;
        else {
          var $e = oe(me), Ee = ye / $e[2];
          me = new tn(Ee, de[0] - $e[0] * Ee, de[1] - $e[1] * Ee);
        }
        Q.zoom(null, me);
      };
    });
  }
  function P(E, N, w) {
    return !w && E.__zooming || new b(E, N);
  }
  function b(E, N) {
    this.that = E, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, N), this.taps = 0;
  }
  b.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, N) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var N = At(this.that).datum();
      l.call(
        E,
        this.that,
        new Iy(E, {
          sourceEvent: this.sourceEvent,
          target: g,
          transform: this.that.__zoom,
          dispatch: l
        }),
        N
      );
    }
  };
  function S(E, ...N) {
    if (!e.apply(this, arguments))
      return;
    var w = P(this, N).event(E), U = this.__zoom, B = Math.max(i[0], Math.min(i[1], U.k * Math.pow(2, r.apply(this, arguments)))), Z = Ut(E);
    if (w.wheel)
      (w.mouse[0][0] !== Z[0] || w.mouse[0][1] !== Z[1]) && (w.mouse[1] = U.invert(w.mouse[0] = Z)), clearTimeout(w.wheel);
    else {
      if (U.k === B)
        return;
      w.mouse = [Z, U.invert(Z)], Ro(this), w.start();
    }
    xr(E), w.wheel = setTimeout(Q, p), w.zoom("mouse", n(x(k(U, B), w.mouse[0], w.mouse[1]), w.extent, a));
    function Q() {
      w.wheel = null, w.end();
    }
  }
  function L(E, ...N) {
    if (v || !e.apply(this, arguments))
      return;
    var w = E.currentTarget, U = P(this, N, !0).event(E), B = At(E.view).on("mousemove.zoom", de, !0).on("mouseup.zoom", ye, !0), Z = Ut(E, w), Q = E.clientX, ee = E.clientY;
    gf(E.view), ta(E), U.mouse = [Z, this.__zoom.invert(Z)], Ro(this), U.start();
    function de(_e) {
      if (xr(_e), !U.moved) {
        var te = _e.clientX - Q, oe = _e.clientY - ee;
        U.moved = te * te + oe * oe > m;
      }
      U.event(_e).zoom("mouse", n(x(U.that.__zoom, U.mouse[0] = Ut(_e, w), U.mouse[1]), U.extent, a));
    }
    function ye(_e) {
      B.on("mousemove.zoom mouseup.zoom", null), yf(_e.view, U.moved), xr(_e), U.event(_e).end();
    }
  }
  function M(E, ...N) {
    if (e.apply(this, arguments)) {
      var w = this.__zoom, U = Ut(E.changedTouches ? E.changedTouches[0] : E, this), B = w.invert(U), Z = w.k * (E.shiftKey ? 0.5 : 2), Q = n(x(k(w, Z), U, B), t.apply(this, N), a);
      xr(E), s > 0 ? At(this).transition().duration(s).call(T, Q, U, E) : At(this).call(g.transform, Q, U, E);
    }
  }
  function z(E, ...N) {
    if (e.apply(this, arguments)) {
      var w = E.touches, U = w.length, B = P(this, N, E.changedTouches.length === U).event(E), Z, Q, ee, de;
      for (ta(E), Q = 0; Q < U; ++Q)
        ee = w[Q], de = Ut(ee, this), de = [de, this.__zoom.invert(de), ee.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== de[2] && (B.touch1 = de, B.taps = 0) : (B.touch0 = de, Z = !0, B.taps = 1 + !!c);
      c && (c = clearTimeout(c)), Z && (B.taps < 2 && (f = de[0], c = setTimeout(function() {
        c = null;
      }, y)), Ro(this), B.start());
    }
  }
  function _(E, ...N) {
    if (this.__zooming) {
      var w = P(this, N).event(E), U = E.changedTouches, B = U.length, Z, Q, ee, de;
      for (xr(E), Z = 0; Z < B; ++Z)
        Q = U[Z], ee = Ut(Q, this), w.touch0 && w.touch0[2] === Q.identifier ? w.touch0[0] = ee : w.touch1 && w.touch1[2] === Q.identifier && (w.touch1[0] = ee);
      if (Q = w.that.__zoom, w.touch1) {
        var ye = w.touch0[0], _e = w.touch0[1], te = w.touch1[0], oe = w.touch1[1], me = (me = te[0] - ye[0]) * me + (me = te[1] - ye[1]) * me, $e = ($e = oe[0] - _e[0]) * $e + ($e = oe[1] - _e[1]) * $e;
        Q = k(Q, Math.sqrt(me / $e)), ee = [(ye[0] + te[0]) / 2, (ye[1] + te[1]) / 2], de = [(_e[0] + oe[0]) / 2, (_e[1] + oe[1]) / 2];
      } else if (w.touch0)
        ee = w.touch0[0], de = w.touch0[1];
      else
        return;
      w.zoom("touch", n(x(Q, ee, de), w.extent, a));
    }
  }
  function O(E, ...N) {
    if (this.__zooming) {
      var w = P(this, N).event(E), U = E.changedTouches, B = U.length, Z, Q;
      for (ta(E), v && clearTimeout(v), v = setTimeout(function() {
        v = null;
      }, y), Z = 0; Z < B; ++Z)
        Q = U[Z], w.touch0 && w.touch0[2] === Q.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === Q.identifier && delete w.touch1;
      if (w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0)
        w.touch0[1] = this.__zoom.invert(w.touch0[0]);
      else if (w.end(), w.taps === 2 && (Q = Ut(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < h)) {
        var ee = At(this).on("dblclick.zoom");
        ee && ee.apply(this, arguments);
      }
    }
  }
  return g.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : bo(+E), g) : r;
  }, g.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : bo(!!E), g) : e;
  }, g.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : bo(!!E), g) : o;
  }, g.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : bo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), g) : t;
  }, g.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], g) : [i[0], i[1]];
  }, g.translateExtent = function(E) {
    return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], g) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, g.constrain = function(E) {
    return arguments.length ? (n = E, g) : n;
  }, g.duration = function(E) {
    return arguments.length ? (s = +E, g) : s;
  }, g.interpolate = function(E) {
    return arguments.length ? (u = E, g) : u;
  }, g.on = function() {
    var E = l.on.apply(l, arguments);
    return E === l ? g : E;
  }, g.clickDistance = function(E) {
    return arguments.length ? (m = (E = +E) * E, g) : Math.sqrt(m);
  }, g.tapDistance = function(E) {
    return arguments.length ? (h = +E, g) : h;
  }, g;
}
var se = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(se || {}), il = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(il || {}), Cn = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(Cn || {}), bn = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(bn || {}), ei = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(ei || {}), Or = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(Or || {}), Of = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Of || {});
const Uy = ["INPUT", "SELECT", "TEXTAREA"], qy = typeof document < "u" ? document : null;
function $s(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, o = typeof r?.hasAttribute == "function" ? r.hasAttribute("contenteditable") : !1, i = typeof r?.closest == "function" ? r.closest(".nokey") : null;
  return Uy.includes(r?.nodeName) || o || !!i;
}
function Vy(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function pu(e, t, n, r) {
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
function Hy(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const r = jy(n.code, e);
    return Array.isArray(e) ? e.some((o) => pu(n[r], o, t, n.type === "keyup")) : pu(n[r], e, t, n.type === "keyup");
  };
}
function jy(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Nr(e, t) {
  const n = J(() => Oe(t?.target) ?? qy), r = en(Oe(e) === !0);
  let o = !1;
  const i = /* @__PURE__ */ new Set();
  let a = u(Oe(e));
  Te(
    () => Oe(e),
    (l, c) => {
      typeof c == "boolean" && typeof l != "boolean" && s(), a = u(l);
    },
    {
      immediate: !0
    }
  ), rf(["blur", "contextmenu"], s), Yl(
    (...l) => a(...l),
    (l) => {
      var c, f;
      const v = Oe(t?.actInsideInputWithModifier) ?? !0, y = Oe(t?.preventDefault) ?? !1;
      if (o = Vy(l), (!o || o && !v) && $s(l))
        return;
      const m = ((f = (c = l.composedPath) == null ? void 0 : c.call(l)) == null ? void 0 : f[0]) || l.target, h = m?.nodeName === "BUTTON" || m?.nodeName === "A";
      !y && (o || !h) && l.preventDefault(), r.value = !0;
    },
    { eventName: "keydown", target: n }
  ), Yl(
    (...l) => a(...l),
    (l) => {
      const c = Oe(t?.actInsideInputWithModifier) ?? !0;
      if (r.value) {
        if ((!o || o && !c) && $s(l))
          return;
        o = !1, r.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function s() {
    o = !1, i.clear(), r.value = Oe(e) === !0;
  }
  function u(l) {
    return l === null ? (s(), () => !1) : typeof l == "boolean" ? (s(), r.value = l, () => !1) : Array.isArray(l) || typeof l == "string" ? Hy(l, i) : l;
  }
  return r;
}
const Nf = "vue-flow__node-desc", If = "vue-flow__edge-desc", Gy = "vue-flow__aria-live", Rf = ["Enter", " ", "Escape"], nr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function ti(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function ni(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}
function wi(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Bn(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Mf(e, t) {
  return {
    x: Bn(e.x, t[0][0], t[1][0]),
    y: Bn(e.y, t[0][1], t[1][1])
  };
}
function hu(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function xn(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function Nn(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !xn(e);
}
function zr(e) {
  return Nn(e) && "computedPosition" in e;
}
function xo(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Wy(e) {
  return xo(e.width) && xo(e.height) && xo(e.x) && xo(e.y);
}
function Xy(e, t, n) {
  const r = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: Qn({
      width: 0,
      height: 0
    }),
    computedPosition: Qn({
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
    events: Qn(et(e.events) ? e.events : {})
  };
  return Object.assign(t ?? r, e, { id: e.id.toString(), parentNode: n });
}
function Df(e, t, n) {
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
    events: Qn(et(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? i, e, { id: e.id.toString() });
}
function Ff(e, t, n, r) {
  const o = typeof e == "string" ? e : e.id, i = /* @__PURE__ */ new Set(), a = r === "source" ? "target" : "source";
  for (const s of n)
    s[a] === o && i.add(s[r]);
  return t.filter((s) => i.has(s.id));
}
function Yy(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return Ff(i, a, s, "target");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => xn(i) && i.source === r).map((i) => n.find((a) => Nn(a) && a.id === i.target));
}
function Ky(...e) {
  if (e.length === 3) {
    const [i, a, s] = e;
    return Ff(i, a, s, "source");
  }
  const [t, n] = e, r = typeof t == "string" ? t : t.id;
  return n.filter((i) => xn(i) && i.target === r).map((i) => n.find((a) => Nn(a) && a.id === i.source));
}
function Bf({ source: e, sourceHandle: t, target: n, targetHandle: r }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${r ?? ""}`;
}
function Zy(e, t) {
  return t.some(
    (n) => xn(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
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
  return i ? _i(s, a) : s;
}
function Jy(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function Lf({ x: e, y: t, width: n, height: r }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + r
  };
}
function Qy({ x: e, y: t, x2: n, y2: r }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: r - t
  };
}
function Uf(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = Jy(
      t,
      Lf({
        ...r.computedPosition,
        ...r.dimensions
      })
    );
  }
  return Qy(t);
}
function qf(e, t, n = { x: 0, y: 0, zoom: 1 }, r = !1, o = !1) {
  const i = {
    ...Wr(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, a = [];
  for (const s of e) {
    const { dimensions: u, selectable: l = !0, hidden: c = !1 } = s, f = u.width ?? s.width ?? null, v = u.height ?? s.height ?? null;
    if (o && !l || c)
      continue;
    const y = ni(i, ti(s)), p = f === null || v === null, m = r && y > 0, h = (f ?? 0) * (v ?? 0);
    (p || m || y >= h || s.dragging) && a.push(s);
  }
  return a;
}
function Vf(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const r of e)
      n.add(r.id);
  return t.filter((r) => n.has(r.source) || n.has(r.target));
}
function Yn(e, t) {
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
function eb(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Yn(e, n), o = Yn(e, t);
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
    const r = Yn(e.top ?? e.y ?? 0, n), o = Yn(e.bottom ?? e.y ?? 0, n), i = Yn(e.left ?? e.x ?? 0, t), a = Yn(e.right ?? e.x ?? 0, t);
    return { top: r, right: a, bottom: o, left: i, x: i + a, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function tb(e, t, n, r, o, i) {
  const { x: a, y: s } = Gr(e, { x: t, y: n, zoom: r }), { x: u, y: l } = Gr(
    { x: e.x + e.width, y: e.y + e.height },
    {
      x: t,
      y: n,
      zoom: r
    }
  ), c = o - u, f = i - l;
  return {
    left: Math.floor(a),
    top: Math.floor(s),
    right: Math.floor(c),
    bottom: Math.floor(f)
  };
}
function mu(e, t, n, r, o, i = 0.1) {
  const a = eb(i, t, n), s = (t - a.x) / e.width, u = (n - a.y) / e.height, l = Math.min(s, u), c = Bn(l, r, o), f = e.x + e.width / 2, v = e.y + e.height / 2, y = t / 2 - f * c, p = n / 2 - v * c, m = tb(e, y, p, c, t, n), h = {
    left: Math.min(m.left - a.left, 0),
    top: Math.min(m.top - a.top, 0),
    right: Math.min(m.right - a.right, 0),
    bottom: Math.min(m.bottom - a.bottom, 0)
  };
  return {
    x: y - h.left + h.right,
    y: p - h.top + h.bottom,
    zoom: c
  };
}
function nb(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function Hf(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : Hf(n, t) : !1;
}
function Xr(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`;
}
function vu(e) {
  const t = e.ctrlKey && ri() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function gu(e, t, n) {
  return e < t ? Bn(Math.abs(e - t), 1, t) / t : e > n ? -Bn(Math.abs(e - n), 1, t) / t : 0;
}
function jf(e, t, n = 15, r = 40) {
  const o = gu(e.x, r, t.width - r) * n, i = gu(e.y, r, t.height - r) * n;
  return [o, i];
}
function na(e, t) {
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
function yu(e, t) {
  var n, r;
  const o = e.filter((a) => a.type === "add" || a.type === "remove");
  for (const a of o)
    if (a.type === "add")
      t.findIndex((u) => u.id === a.item.id) === -1 && t.push(a.item);
    else if (a.type === "remove") {
      const s = t.findIndex((u) => u.id === a.id);
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
            if (zr(a) && (typeof s.position < "u" && (a.position = s.position), typeof s.dragging < "u" && (a.dragging = s.dragging), a.expandParent && a.parentNode)) {
              const u = t[i.indexOf(a.parentNode)];
              u && zr(u) && na(a, u);
            }
            break;
          case "dimensions":
            if (zr(a) && (typeof s.dimensions < "u" && (a.dimensions = s.dimensions), typeof s.updateStyle < "u" && s.updateStyle && (a.style = {
              ...a.style || {},
              width: `${(n = s.dimensions) == null ? void 0 : n.width}px`,
              height: `${(r = s.dimensions) == null ? void 0 : r.height}px`
            }), typeof s.resizing < "u" && (a.resizing = s.resizing), a.expandParent && a.parentNode)) {
              const u = t[i.indexOf(a.parentNode)];
              u && zr(u) && (!!u.dimensions.width && !!u.dimensions.height ? na(a, u) : rn(() => {
                na(a, u);
              }));
            }
            break;
        }
  return t;
}
function pn(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function bu(e) {
  return {
    item: e,
    type: "add"
  };
}
function xu(e) {
  return {
    id: e,
    type: "remove"
  };
}
function wu(e, t, n, r, o) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: r || null,
    targetHandle: o || null,
    type: "remove"
  };
}
function hn(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const a = t.has(o);
    !(i.selected === void 0 && !a) && i.selected !== a && (n && (i.selected = a), r.push(pn(i.id, a)));
  }
  return r;
}
const _u = () => {
};
function le(e) {
  const t = /* @__PURE__ */ new Set();
  let n = _u, r = () => !1;
  const o = () => t.size > 0 || r(), i = (v) => {
    n = v;
  }, a = () => {
    n = _u;
  }, s = (v) => {
    r = v;
  }, u = () => {
    r = () => !1;
  }, l = (v) => {
    t.delete(v);
  };
  return {
    on: (v) => {
      t.add(v);
      const y = () => l(v);
      return Ur(y), { off: y };
    },
    off: l,
    trigger: (v) => {
      const y = [n];
      return o() ? y.push(...t) : e && y.push(e), Promise.allSettled(y.map((p) => p(v)));
    },
    hasListeners: o,
    listeners: t,
    setEmitter: i,
    removeEmitter: a,
    setHasEmitListeners: s,
    removeHasEmitListeners: u
  };
}
function Su(e, t, n) {
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
function rb(e, t, n, r) {
  var o, i;
  const a = /* @__PURE__ */ new Map();
  for (const [s, u] of e)
    (u.selected || u.id === r) && (!u.parentNode || !Hf(u, e)) && (u.draggable || t && typeof u.draggable > "u") && e.get(s) && a.set(s, {
      id: u.id,
      position: u.position || { x: 0, y: 0 },
      distance: {
        x: n.x - ((o = u.computedPosition) == null ? void 0 : o.x) || 0,
        y: n.y - ((i = u.computedPosition) == null ? void 0 : i.y) || 0
      },
      from: { x: u.computedPosition.x, y: u.computedPosition.y },
      extent: u.extent,
      parentNode: u.parentNode,
      dimensions: { ...u.dimensions },
      expandParent: u.expandParent
    });
  return Array.from(a.values());
}
function ra({
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
function Gf(e) {
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
function ob(e, t, n) {
  const [r, o, i, a] = typeof e != "string" ? Gf(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + a, n.computedPosition.y + r],
    [
      n.computedPosition.x + n.dimensions.width - o,
      n.computedPosition.y + n.dimensions.height - i
    ]
  ] : !1;
}
function ib(e, t, n, r) {
  let o = e.extent || n;
  if ((o === "parent" || !Array.isArray(o) && o?.range === "parent") && !e.expandParent)
    if (e.parentNode && r && e.dimensions.width && e.dimensions.height) {
      const i = ob(o, e, r);
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
    const [i, a, s, u] = Gf(o.padding), l = r?.computedPosition.x || 0, c = r?.computedPosition.y || 0;
    o = [
      [o.range[0][0] + l + u, o.range[0][1] + c + i],
      [o.range[1][0] + l - a, o.range[1][1] + c - s]
    ];
  }
  return o === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : o;
}
function ab({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function al(e, t, n, r, o) {
  const i = ab(e.dimensions, ib(e, n, r, o)), a = Mf(t, i);
  return {
    position: {
      x: a.x - (o?.computedPosition.x || 0),
      y: a.y - (o?.computedPosition.y || 0)
    },
    computedPosition: a
  };
}
function sr(e, t, n = se.Left, r = !1) {
  const o = (t?.x ?? 0) + e.computedPosition.x, i = (t?.y ?? 0) + e.computedPosition.y, { width: a, height: s } = t ?? cb(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch (t?.position ?? n) {
    case se.Top:
      return { x: o + a / 2, y: i };
    case se.Right:
      return { x: o + a, y: i + s / 2 };
    case se.Bottom:
      return { x: o + a / 2, y: i + s };
    case se.Left:
      return { x: o, y: i + s / 2 };
  }
}
function Eu(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function sb({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: r,
  targetWidth: o,
  targetHeight: i,
  width: a,
  height: s,
  viewport: u
}) {
  const l = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + o),
    y2: Math.max(e.y + r, t.y + i)
  };
  l.x === l.x2 && (l.x2 += 1), l.y === l.y2 && (l.y2 += 1);
  const c = Lf({
    x: (0 - u.x) / u.zoom,
    y: (0 - u.y) / u.zoom,
    width: a / u.zoom,
    height: s / u.zoom
  }), f = Math.max(0, Math.min(c.x2, l.x2) - Math.max(c.x, l.x)), v = Math.max(0, Math.min(c.y2, l.y2) - Math.max(c.y, l.y));
  return Math.ceil(f * v) > 0;
}
function lb(e, t, n = !1) {
  const r = typeof e.zIndex == "number";
  let o = r ? e.zIndex : 0;
  const i = t(e.source), a = t(e.target);
  return !i || !a ? 0 : (n && (o = r ? e.zIndex : Math.max(i.computedPosition.z || 0, a.computedPosition.z || 0)), o);
}
var tt = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(tt || {});
const ku = {
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
    super((r = ku[t]) == null ? void 0 : r.call(ku, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function sl(e) {
  return "clientX" in e;
}
function ub(e) {
  return "sourceEvent" in e;
}
function Vt(e, t) {
  const n = sl(e);
  let r, o;
  return n ? (r = e.clientX, o = e.clientY) : "touches" in e && e.touches.length > 0 ? (r = e.touches[0].clientX, o = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (r = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : (r = 0, o = 0), {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}
const ri = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function cb(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function _i(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const db = () => !0;
function oa(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function fb(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ni(o, ti(i)) > 0 && r.push(i);
  return r;
}
const pb = 250;
function hb(e, t, n, r) {
  var o, i;
  let a = [], s = Number.POSITIVE_INFINITY;
  const u = fb(e, n, t + pb);
  for (const l of u) {
    const c = [...((o = l.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = l.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const f of c) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: v, y } = sr(l, f, f.position, !0), p = Math.sqrt((v - e.x) ** 2 + (y - e.y) ** 2);
      p > t || (p < s ? (a = [{ ...f, x: v, y }], s = p) : p === s && a.push({ ...f, x: v, y }));
    }
  }
  if (!a.length)
    return null;
  if (a.length > 1) {
    const l = r.type === "source" ? "target" : "source";
    return a.find((c) => c.type === l) ?? a[0];
  }
  return a[0];
}
function Pu(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: r,
  fromHandleId: o,
  fromType: i,
  doc: a,
  lib: s,
  flowId: u,
  isValidConnection: l = db
}, c, f, v, y) {
  const p = i === "target", m = t ? a.querySelector(`.${s}-flow__handle[data-id="${u}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = Vt(e), k = a.elementFromPoint(h, g), x = k?.classList.contains(`${s}-flow__handle`) ? k : m, $ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const T = Wf(void 0, x), P = x.getAttribute("data-nodeid"), b = x.getAttribute("data-handleid"), S = x.classList.contains("connectable"), L = x.classList.contains("connectableend");
    if (!P || !T)
      return $;
    const M = {
      source: p ? P : r,
      sourceHandle: p ? b : o,
      target: p ? r : P,
      targetHandle: p ? o : b
    };
    $.connection = M;
    const _ = S && L && (n === bn.Strict ? p && T === "source" || !p && T === "target" : P !== r || b !== o);
    $.isValid = _ && l(M, {
      nodes: f,
      edges: c,
      sourceNode: v(M.source),
      targetNode: v(M.target)
    }), $.toHandle = Xf(P, T, b, y, n, !0);
  }
  return $;
}
function Wf(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function mb(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function vb(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function Xf(e, t, n, r, o, i = !1) {
  var a, s, u;
  const l = r.get(e);
  if (!l)
    return null;
  const c = o === bn.Strict ? (a = l.handleBounds) == null ? void 0 : a[t] : [...((s = l.handleBounds) == null ? void 0 : s.source) ?? [], ...((u = l.handleBounds) == null ? void 0 : u.target) ?? []], f = (n ? c?.find((v) => v.id === n) : c?.[0]) ?? null;
  return f && i ? { ...f, ...sr(l, f, f.position, !0) } : f;
}
const Cs = {
  [se.Left]: se.Right,
  [se.Right]: se.Left,
  [se.Top]: se.Bottom,
  [se.Bottom]: se.Top
}, gb = ["production", "prod"];
function ro(e, ...t) {
  Yf() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function Yf() {
  return !gb.includes(process.env.NODE_ENV || "");
}
function $u(e, t, n, r, o) {
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
      ...wi(a)
    };
  }) : null;
}
function zs(e, t, n, r, o, i = !1, a) {
  o.value = !1, e.selected ? (i || e.selected && t) && (r([e]), rn(() => {
    a.blur();
  })) : n([e]);
}
function et(e) {
  return typeof F(e) < "u";
}
function yb(e, t, n, r) {
  if (!e || !e.source || !e.target)
    return n(new rt(tt.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let o;
  return xn(e) ? o = e : o = {
    ...e,
    id: Bf(e)
  }, o = Df(o, void 0, r), Zy(o, t) ? !1 : o;
}
function bb(e, t, n, r, o) {
  if (!t.source || !t.target)
    return o(new rt(tt.EDGE_INVALID, e.id)), !1;
  if (!n)
    return o(new rt(tt.EDGE_NOT_FOUND, e.id)), !1;
  const { id: i, ...a } = e;
  return {
    ...a,
    id: r ? Bf(t) : i,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Cu(e, t, n) {
  const r = {}, o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    if (!Nn(a)) {
      n(
        new rt(tt.NODE_INVALID, a?.id) || `[ID UNKNOWN|INDEX ${i}]`
      );
      continue;
    }
    const s = Xy(a, t(a.id), a.parentNode);
    a.parentNode && (r[a.parentNode] = !0), o[i] = s;
  }
  for (const i of o) {
    const a = t(i.parentNode) || o.find((s) => s.id === i.parentNode);
    i.parentNode && !a && n(new rt(tt.NODE_MISSING_PARENT, i.id, i.parentNode)), (i.parentNode || r[i.id]) && (r[i.id] && (i.isParent = !0), a && (a.isParent = !0));
  }
  return o;
}
function zu(e, t, n, r, o, i) {
  let a = o;
  const s = r.get(a) || /* @__PURE__ */ new Map();
  r.set(a, s.set(n, t)), a = `${o}-${e}`;
  const u = r.get(a) || /* @__PURE__ */ new Map();
  if (r.set(a, u.set(n, t)), i) {
    a = `${o}-${e}-${i}`;
    const l = r.get(a) || /* @__PURE__ */ new Map();
    r.set(a, l.set(n, t));
  }
}
function ia(e, t, n) {
  e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, l = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    zu("source", u, c, e, o, a), zu("target", u, l, e, i, s);
  }
}
function Au(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function aa(e, t, n, r, o, i, a, s) {
  const u = [];
  for (const l of e) {
    const c = xn(l) ? l : yb(l, s, o, i);
    if (!c)
      continue;
    const f = n(c.source), v = n(c.target);
    if (!f || !v) {
      o(new rt(tt.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!f) {
      o(new rt(tt.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!v) {
      o(new rt(tt.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: s,
      nodes: a,
      sourceNode: f,
      targetNode: v
    })) {
      o(new rt(tt.EDGE_INVALID, c.id));
      continue;
    }
    const y = r(c.id);
    u.push({
      ...Df(c, y, i),
      sourceNode: f,
      targetNode: v
    });
  }
  return u;
}
const Tu = /* @__PURE__ */ Symbol("vueFlow"), Kf = /* @__PURE__ */ Symbol("nodeId"), Zf = /* @__PURE__ */ Symbol("nodeRef"), xb = /* @__PURE__ */ Symbol("edgeId"), wb = /* @__PURE__ */ Symbol("edgeRef"), Si = /* @__PURE__ */ Symbol("slots");
function Jf(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: r,
    noDragClassName: o,
    nodeLookup: i,
    nodeExtent: a,
    nodeDragThreshold: s,
    viewport: u,
    autoPanOnNodeDrag: l,
    autoPanSpeed: c,
    nodesDraggable: f,
    panBy: v,
    findNode: y,
    multiSelectionActive: p,
    nodesSelectionActive: m,
    selectNodesOnDrag: h,
    removeSelectedElements: g,
    addSelectedNodes: k,
    updateNodePositions: x,
    emits: $
  } = Ve(), { onStart: T, onDrag: P, onStop: b, onClick: S, el: L, disabled: M, id: z, selectable: _, dragHandle: O } = e, E = en(!1);
  let N = [], w, U = null, B = { x: void 0, y: void 0 }, Z = { x: 0, y: 0 }, Q = null, ee = !1, de = !1, ye = 0, _e = !1;
  const te = Eb(), oe = ({ x: ie, y: ve }) => {
    B = { x: ie, y: ve };
    let R = !1;
    if (N = N.map((A) => {
      const D = { x: ie - A.distance.x, y: ve - A.distance.y }, { computedPosition: V } = al(
        A,
        n.value ? _i(D, r.value) : D,
        $.error,
        a.value,
        A.parentNode ? y(A.parentNode) : void 0
      );
      return R = R || A.position.x !== V.x || A.position.y !== V.y, A.position = V, A;
    }), de = de || R, !!R && (x(N, !0, !0), E.value = !0, Q)) {
      const [A, D] = ra({
        id: z,
        dragItems: N,
        findNode: y
      });
      P({ event: Q, node: A, nodes: D });
    }
  }, me = () => {
    if (!U)
      return;
    const [ie, ve] = jf(Z, U, c.value);
    if (ie !== 0 || ve !== 0) {
      const R = {
        x: (B.x ?? 0) - ie / u.value.zoom,
        y: (B.y ?? 0) - ve / u.value.zoom
      };
      v({ x: ie, y: ve }) && oe(R);
    }
    ye = requestAnimationFrame(me);
  }, $e = (ie, ve) => {
    ee = !0;
    const R = y(z);
    !h.value && !p.value && R && (R.selected || g()), R && Oe(_) && h.value && zs(
      R,
      p.value,
      k,
      g,
      m,
      !1,
      ve
    );
    const A = te(ie.sourceEvent);
    if (B = A, N = rb(i.value, f.value, A, z), N.length) {
      const [D, V] = ra({
        id: z,
        dragItems: N,
        findNode: y
      });
      T({ event: ie.sourceEvent, node: D, nodes: V });
    }
  }, Ee = (ie, ve) => {
    var R;
    ie.sourceEvent.type === "touchmove" && ie.sourceEvent.touches.length > 1 || (de = !1, s.value === 0 && $e(ie, ve), B = te(ie.sourceEvent), U = ((R = t.value) == null ? void 0 : R.getBoundingClientRect()) || null, Z = Vt(ie.sourceEvent, U));
  }, ae = (ie, ve) => {
    const R = te(ie.sourceEvent);
    if (!_e && ee && l.value && (_e = !0, me()), !ee) {
      const A = R.xSnapped - (B.x ?? 0), D = R.ySnapped - (B.y ?? 0);
      Math.sqrt(A * A + D * D) > s.value && $e(ie, ve);
    }
    (B.x !== R.xSnapped || B.y !== R.ySnapped) && N.length && ee && (Q = ie.sourceEvent, Z = Vt(ie.sourceEvent, U), oe(R));
  }, xe = (ie) => {
    let ve = !1;
    if (!ee && !E.value && !p.value) {
      const R = ie.sourceEvent, A = te(R), D = A.xSnapped - (B.x ?? 0), V = A.ySnapped - (B.y ?? 0), q = Math.sqrt(D * D + V * V);
      q !== 0 && q <= s.value && (S?.(R), ve = !0);
    }
    if (N.length && !ve) {
      de && (x(N, !1, !1), de = !1);
      const [R, A] = ra({
        id: z,
        dragItems: N,
        findNode: y
      });
      b({ event: ie.sourceEvent, node: R, nodes: A });
    }
    N = [], E.value = !1, _e = !1, ee = !1, B = { x: void 0, y: void 0 }, cancelAnimationFrame(ye);
  };
  return Te([() => Oe(M), L], ([ie, ve], R, A) => {
    if (ve) {
      const D = At(ve);
      ie || (w = Wv().on("start", (V) => Ee(V, ve)).on("drag", (V) => ae(V, ve)).on("end", (V) => xe(V)).filter((V) => {
        const q = V.target, ne = Oe(O);
        return !V.button && (!o.value || !Su(q, `.${o.value}`, ve) && (!ne || Su(q, ne, ve)));
      }), D.call(w)), A(() => {
        D.on(".drag", null), w && (w.on("start", null), w.on("drag", null), w.on("end", null));
      });
    }
  }), E;
}
function _b() {
  return {
    doubleClick: le(),
    click: le(),
    mouseEnter: le(),
    mouseMove: le(),
    mouseLeave: le(),
    contextMenu: le(),
    updateStart: le(),
    update: le(),
    updateEnd: le()
  };
}
function Sb(e, t) {
  const n = _b();
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
function Eb() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: r } = Ve();
  return (o) => {
    var i;
    const a = ((i = r.value) == null ? void 0 : i.getBoundingClientRect()) ?? { left: 0, top: 0 }, s = ub(o) ? o.sourceEvent : o, { x: u, y: l } = Vt(s, a), c = Wr({ x: u, y: l }, e.value), { x: f, y: v } = n.value ? _i(c, t.value) : c;
    return {
      xSnapped: f,
      ySnapped: v,
      ...c
    };
  };
}
function wo() {
  return !0;
}
function Qf({
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
    vueFlowRef: u,
    connectionMode: l,
    connectionRadius: c,
    connectOnClick: f,
    connectionClickStartHandle: v,
    nodesConnectable: y,
    autoPanOnConnect: p,
    autoPanSpeed: m,
    findNode: h,
    panBy: g,
    startConnection: k,
    updateConnection: x,
    endConnection: $,
    emits: T,
    viewport: P,
    edges: b,
    nodes: S,
    isValidConnection: L,
    nodeLookup: M
  } = Ve();
  let z = null, _ = !1, O = null;
  function E(w) {
    var U;
    const B = Oe(n) === "target", Z = sl(w), Q = hu(w.target), ee = w.currentTarget;
    if (ee && (Z && w.button === 0 || !Z)) {
      let de = function(fe) {
        R = Vt(fe, xe), oe = hb(
          Wr(R, P.value, !1, [1, 1]),
          c.value,
          M.value,
          V
        ), A || (D(), A = !0);
        const be = Pu(
          fe,
          {
            handle: oe,
            connectionMode: l.value,
            fromNodeId: Oe(t),
            fromHandleId: Oe(e),
            fromType: B ? "target" : "source",
            isValidConnection: te,
            doc: Q,
            lib: "vue",
            flowId: s,
            nodeLookup: M.value
          },
          b.value,
          S.value,
          h,
          M.value
        );
        O = be.handleDomNode, z = be.connection, _ = vb(!!oe, be.isValid);
        const ke = {
          // from stays the same
          ...ue,
          isValid: _,
          to: be.toHandle && _ ? Gr({ x: be.toHandle.x, y: be.toHandle.y }, P.value) : R,
          toHandle: be.toHandle,
          toPosition: _ && be.toHandle ? be.toHandle.position : Cs[V.position],
          toNode: be.toHandle ? M.value.get(be.toHandle.nodeId) : null
        };
        if (_ && oe && ue?.toHandle && ke.toHandle && ue.toHandle.type === ke.toHandle.type && ue.toHandle.nodeId === ke.toHandle.nodeId && ue.toHandle.id === ke.toHandle.id && ue.to.x === ke.to.x && ue.to.y === ke.to.y)
          return;
        const De = oe ?? be.toHandle;
        if (x(
          De && _ ? Gr(
            {
              x: De.x,
              y: De.y
            },
            P.value
          ) : R,
          De,
          mb(!!De, _)
        ), ue = ke, !oe && !_ && !O)
          return oa(ve);
        z && z.source !== z.target && O && (oa(ve), ve = O, O.classList.add("connecting", "vue-flow__handle-connecting"), O.classList.toggle("valid", !!_), O.classList.toggle("vue-flow__handle-valid", !!_));
      }, ye = function(fe) {
        "touches" in fe && fe.touches.length > 0 || ((oe || O) && z && _ && (i ? i(fe, z) : T.connect(z)), T.connectEnd(fe), o && a?.(fe), oa(ve), cancelAnimationFrame(me), $(fe), A = !1, _ = !1, z = null, O = null, Q.removeEventListener("mousemove", de), Q.removeEventListener("mouseup", ye), Q.removeEventListener("touchmove", de), Q.removeEventListener("touchend", ye));
      };
      const _e = h(Oe(t));
      let te = Oe(r) || L.value || wo;
      !te && _e && (te = (B ? _e.isValidSourcePos : _e.isValidTargetPos) || wo);
      let oe, me = 0;
      const { x: $e, y: Ee } = Vt(w), ae = Wf(Oe(o), ee), xe = (U = u.value) == null ? void 0 : U.getBoundingClientRect();
      if (!xe || !ae)
        return;
      const ie = Xf(Oe(t), ae, Oe(e), M.value, l.value);
      if (!ie)
        return;
      let ve, R = Vt(w, xe), A = !1;
      const D = () => {
        if (!p.value)
          return;
        const [fe, be] = jf(R, xe, m.value);
        g({ x: fe, y: be }), me = requestAnimationFrame(D);
      }, V = {
        ...ie,
        nodeId: Oe(t),
        type: ae,
        position: ie.position
      }, q = M.value.get(Oe(t)), re = {
        inProgress: !0,
        isValid: null,
        from: sr(q, V, se.Left, !0),
        fromHandle: V,
        fromPosition: V.position,
        fromNode: q,
        to: R,
        toHandle: null,
        toPosition: Cs[V.position],
        toNode: null
      };
      k(
        {
          nodeId: Oe(t),
          id: Oe(e),
          type: ae,
          position: ee?.getAttribute("data-handlepos") || se.Top,
          ...R
        },
        {
          x: $e - xe.left,
          y: Ee - xe.top
        }
      ), T.connectStart({ event: w, nodeId: Oe(t), handleId: Oe(e), handleType: ae });
      let ue = re;
      Q.addEventListener("mousemove", de), Q.addEventListener("mouseup", ye), Q.addEventListener("touchmove", de), Q.addEventListener("touchend", ye);
    }
  }
  function N(w) {
    var U, B;
    if (!f.value)
      return;
    const Z = Oe(n) === "target";
    if (!v.value) {
      T.clickConnectStart({ event: w, nodeId: Oe(t), handleId: Oe(e) }), k(
        {
          nodeId: Oe(t),
          type: Oe(n),
          id: Oe(e),
          position: se.Top,
          ...Vt(w)
        },
        void 0,
        !0
      );
      return;
    }
    let Q = Oe(r) || L.value || wo;
    const ee = h(Oe(t));
    if (!Q && ee && (Q = (Z ? ee.isValidSourcePos : ee.isValidTargetPos) || wo), ee && (typeof ee.connectable > "u" ? y.value : ee.connectable) === !1)
      return;
    const de = hu(w.target), ye = Pu(
      w,
      {
        handle: {
          nodeId: Oe(t),
          id: Oe(e),
          type: Oe(n),
          position: se.Top,
          ...Vt(w)
        },
        connectionMode: l.value,
        fromNodeId: v.value.nodeId,
        fromHandleId: v.value.id ?? null,
        fromType: v.value.type,
        isValidConnection: Q,
        doc: de,
        lib: "vue",
        flowId: s,
        nodeLookup: M.value
      },
      b.value,
      S.value,
      h,
      M.value
    ), _e = ((U = ye.connection) == null ? void 0 : U.source) === ((B = ye.connection) == null ? void 0 : B.target);
    ye.isValid && ye.connection && !_e && T.connect(ye.connection), T.clickConnectEnd(w), $(w, !0);
  }
  return {
    handlePointerDown: E,
    handleClick: N
  };
}
function kb() {
  return fr(Kf, "");
}
function ep(e) {
  const t = e ?? kb() ?? "", n = fr(Zf, Y(null)), { findNode: r, edges: o, emits: i } = Ve(), a = r(t);
  return a || i.error(new rt(tt.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: a,
    parentNode: J(() => r(a.parentNode)),
    connectedEdges: J(() => Vf([a], o.value))
  };
}
function Pb() {
  return {
    doubleClick: le(),
    click: le(),
    mouseEnter: le(),
    mouseMove: le(),
    mouseLeave: le(),
    contextMenu: le(),
    dragStart: le(),
    drag: le(),
    dragStop: le()
  };
}
function $b(e, t) {
  const n = Pb();
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
function tp() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: r, snapGrid: o, snapToGrid: i, nodesDraggable: a, emits: s } = Ve();
  return (u, l = !1) => {
    const c = i.value ? o.value[0] : 5, f = i.value ? o.value[1] : 5, v = l ? 4 : 1, y = u.x * c * v, p = u.y * f * v, m = [];
    for (const h of e.value)
      if (h.draggable || a && typeof h.draggable > "u") {
        const g = { x: h.computedPosition.x + y, y: h.computedPosition.y + p }, { position: k } = al(
          h,
          g,
          s.error,
          t.value,
          h.parentNode ? r(h.parentNode) : void 0
        );
        m.push({
          id: h.id,
          position: k,
          from: h.position,
          distance: { x: u.x, y: u.y },
          dimensions: h.dimensions
        });
      }
    n(m, !0, !1);
  };
}
const _o = 0.1, Cb = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function dn() {
  return ro("Viewport not initialized yet."), Promise.resolve(!1);
}
const zb = {
  zoomIn: dn,
  zoomOut: dn,
  zoomTo: dn,
  fitView: dn,
  setCenter: dn,
  fitBounds: dn,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: dn,
  setTransform: dn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function Ab(e) {
  function t(r, o) {
    return new Promise((i) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(o?.interpolate === "linear" ? Tr : Oo).scaleBy(
        sa(e.d3Selection, o?.duration, o?.ease, () => {
          i(!0);
        }),
        r
      ) : i(!1);
    });
  }
  function n(r, o, i, a) {
    return new Promise((s) => {
      var u;
      const { x: l, y: c } = Mf({ x: -r, y: -o }, e.translateExtent), f = ar.translate(-l, -c).scale(i);
      e.d3Selection && e.d3Zoom ? (u = e.d3Zoom) == null || u.interpolate(a?.interpolate === "linear" ? Tr : Oo).transform(
        sa(e.d3Selection, a?.duration, a?.ease, () => {
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
        sa(e.d3Selection, i?.duration, i?.ease, () => {
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
      const u = Uf(s), { x: l, y: c, zoom: f } = mu(
        u,
        e.dimensions.width,
        e.dimensions.height,
        o.minZoom ?? e.minZoom,
        o.maxZoom ?? e.maxZoom,
        o.padding ?? _o
      );
      return n(l, c, f, o);
    },
    setCenter: (o, i, a) => {
      const s = typeof a?.zoom < "u" ? a.zoom : e.maxZoom, u = e.dimensions.width / 2 - o * s, l = e.dimensions.height / 2 - i * s;
      return n(u, l, s, a);
    },
    fitBounds: (o, i = { padding: _o }) => {
      const { x: a, y: s, zoom: u } = mu(
        o,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        i.padding ?? _o
      );
      return n(a, s, u, i);
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
  } : zb);
}
function sa(e, t = 0, n = Cb, r = () => {
}) {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}
function Tb(e, t, n) {
  const r = Fd(!0);
  return r.run(() => {
    const o = () => {
      r.run(() => {
        let m, h, g = !!(n.nodes.value.length || n.edges.value.length);
        m = Xn([e.modelValue, () => {
          var k, x;
          return (x = (k = e.modelValue) == null ? void 0 : k.value) == null ? void 0 : x.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setElements(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Xn(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([k, x]) => {
            var $;
            ($ = e.modelValue) != null && $.value && Array.isArray(e.modelValue.value) && (m?.pause(), e.modelValue.value = [...k, ...x], rn(() => {
              m?.resume();
            }));
          },
          { immediate: g }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, i = () => {
      r.run(() => {
        let m, h, g = !!n.nodes.value.length;
        m = Xn([e.nodes, () => {
          var k, x;
          return (x = (k = e.nodes) == null ? void 0 : k.value) == null ? void 0 : x.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setNodes(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Xn(
          [n.nodes, () => n.nodes.value.length],
          ([k]) => {
            var x;
            (x = e.nodes) != null && x.value && Array.isArray(e.nodes.value) && (m?.pause(), e.nodes.value = [...k], rn(() => {
              m?.resume();
            }));
          },
          { immediate: g }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, a = () => {
      r.run(() => {
        let m, h, g = !!n.edges.value.length;
        m = Xn([e.edges, () => {
          var k, x;
          return (x = (k = e.edges) == null ? void 0 : k.value) == null ? void 0 : x.length;
        }], ([k]) => {
          k && Array.isArray(k) && (h?.pause(), n.setEdges(k), !h && !g && k.length ? g = !0 : h?.resume());
        }), h = Xn(
          [n.edges, () => n.edges.value.length],
          ([k]) => {
            var x;
            (x = e.edges) != null && x.value && Array.isArray(e.edges.value) && (m?.pause(), e.edges.value = [...k], rn(() => {
              m?.resume();
            }));
          },
          { immediate: g }
        ), Ao(() => {
          m?.stop(), h?.stop();
        });
      });
    }, s = () => {
      r.run(() => {
        Te(
          () => t.maxZoom,
          () => {
            t.maxZoom && et(t.maxZoom) && n.setMaxZoom(t.maxZoom);
          },
          {
            immediate: !0
          }
        );
      });
    }, u = () => {
      r.run(() => {
        Te(
          () => t.minZoom,
          () => {
            t.minZoom && et(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, l = () => {
      r.run(() => {
        Te(
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
        Te(
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
        Te(
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
          let g = h;
          typeof t.autoConnect == "function" && (g = await t.autoConnect(h)), g !== !1 && n.addEdges([g]);
        };
        Te(
          () => t.autoConnect,
          () => {
            et(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), Te(
          n.autoConnect,
          (h, g, k) => {
            h ? n.onConnect(m) : n.hooks.value.connect.off(m), k(() => {
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
        const g = h;
        if (!m.includes(g)) {
          const k = qe(() => t[g]), x = n[g];
          Ks(x) && r.run(() => {
            Te(
              k,
              ($) => {
                et($) && (x.value = $);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    o(), i(), a(), u(), s(), l(), c(), f(), v(), y();
  }), () => r.stop();
}
function Ob() {
  return {
    edgesChange: le(),
    nodesChange: le(),
    nodeDoubleClick: le(),
    nodeClick: le(),
    nodeMouseEnter: le(),
    nodeMouseMove: le(),
    nodeMouseLeave: le(),
    nodeContextMenu: le(),
    nodeDragStart: le(),
    nodeDrag: le(),
    nodeDragStop: le(),
    nodesInitialized: le(),
    miniMapNodeClick: le(),
    miniMapNodeDoubleClick: le(),
    miniMapNodeMouseEnter: le(),
    miniMapNodeMouseMove: le(),
    miniMapNodeMouseLeave: le(),
    connect: le(),
    connectStart: le(),
    connectEnd: le(),
    clickConnectStart: le(),
    clickConnectEnd: le(),
    paneReady: le(),
    init: le(),
    move: le(),
    moveStart: le(),
    moveEnd: le(),
    selectionDragStart: le(),
    selectionDrag: le(),
    selectionDragStop: le(),
    selectionContextMenu: le(),
    selectionStart: le(),
    selectionEnd: le(),
    viewportChangeStart: le(),
    viewportChange: le(),
    viewportChangeEnd: le(),
    paneScroll: le(),
    paneClick: le(),
    paneContextMenu: le(),
    paneMouseEnter: le(),
    paneMouseMove: le(),
    paneMouseLeave: le(),
    edgeContextMenu: le(),
    edgeMouseEnter: le(),
    edgeMouseMove: le(),
    edgeMouseLeave: le(),
    edgeDoubleClick: le(),
    edgeClick: le(),
    edgeUpdateStart: le(),
    edgeUpdate: le(),
    edgeUpdateEnd: le(),
    updateNodeInternals: le(),
    error: le((e) => ro(e.message))
  };
}
function Nb(e, t) {
  const n = pr();
  sm(() => {
    for (const [o, i] of Object.entries(t.value)) {
      const a = (s) => {
        e(o, s);
      };
      i.setEmitter(a), Ur(i.removeEmitter), i.setHasEmitListeners(() => r(o)), Ur(i.removeHasEmitListeners);
    }
  });
  function r(o) {
    var i;
    const a = Ib(o);
    return !!((i = n?.vnode.props) == null ? void 0 : i[a]);
  }
}
function Ib(e) {
  const [t, ...n] = e.split(":");
  return `on${t.replace(/(?:^|-)(\w)/g, (o, i) => i.toUpperCase())}${n.length ? `:${n.join(":")}` : ""}`;
}
function np() {
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
    selectionMode: il.Full,
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
      type: Cn.Bezier,
      style: {}
    },
    connectionMode: bn.Loose,
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
    multiSelectionKeyCode: ri() ? "Meta" : "Control",
    zoomActivationKeyCode: ri() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: Ob(),
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
const Rb = [
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
function Mb(e, t, n) {
  const r = Ab(e), o = (R) => {
    const A = R ?? [];
    e.hooks.updateNodeInternals.trigger(A);
  }, i = (R) => Ky(R, e.nodes, e.edges), a = (R) => Yy(R, e.nodes, e.edges), s = (R) => Vf(R, e.edges), u = ({ id: R, type: A, nodeId: D }) => {
    var V;
    const q = R ? `-${A}-${R}` : `-${A}`;
    return Array.from(((V = e.connectionLookup.get(`${D}${q}`)) == null ? void 0 : V.values()) ?? []);
  }, l = (R) => {
    if (R)
      return t.value.get(R);
  }, c = (R) => {
    if (R)
      return n.value.get(R);
  }, f = (R, A, D) => {
    var V, q;
    const ne = [];
    for (const re of R) {
      const ue = {
        id: re.id,
        type: "position",
        dragging: D,
        from: re.from
      };
      if (A && (ue.position = re.position, re.parentNode)) {
        const fe = l(re.parentNode);
        ue.position = {
          x: ue.position.x - (((V = fe?.computedPosition) == null ? void 0 : V.x) ?? 0),
          y: ue.position.y - (((q = fe?.computedPosition) == null ? void 0 : q.y) ?? 0)
        };
      }
      ne.push(ue);
    }
    ne?.length && e.hooks.nodesChange.trigger(ne);
  }, v = (R) => {
    if (!e.vueFlowRef)
      return;
    const A = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!A)
      return;
    const D = window.getComputedStyle(A), { m22: V } = new window.DOMMatrixReadOnly(D.transform), q = [];
    for (const ne of R) {
      const re = ne, ue = l(re.id);
      if (ue) {
        const fe = wi(re.nodeElement);
        if (!!(fe.width && fe.height && (ue.dimensions.width !== fe.width || ue.dimensions.height !== fe.height || re.forceUpdate))) {
          const ke = re.nodeElement.getBoundingClientRect();
          ue.dimensions = fe, ue.handleBounds.source = $u("source", re.nodeElement, ke, V, ue.id), ue.handleBounds.target = $u("target", re.nodeElement, ke, V, ue.id), q.push({
            id: ue.id,
            type: "dimensions",
            dimensions: fe
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && r.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), q.length && e.hooks.nodesChange.trigger(q);
  }, y = (R, A) => {
    const D = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    for (const re of R)
      Nn(re) ? D.add(re.id) : xn(re) && V.add(re.id);
    const q = hn(t.value, D, !0), ne = hn(n.value, V);
    if (e.multiSelectionActive) {
      for (const re of D)
        q.push(pn(re, A));
      for (const re of V)
        ne.push(pn(re, A));
    }
    q.length && e.hooks.nodesChange.trigger(q), ne.length && e.hooks.edgesChange.trigger(ne);
  }, p = (R) => {
    if (e.multiSelectionActive) {
      const A = R.map((D) => pn(D.id, !0));
      e.hooks.nodesChange.trigger(A);
      return;
    }
    e.hooks.nodesChange.trigger(hn(t.value, new Set(R.map((A) => A.id)), !0)), e.hooks.edgesChange.trigger(hn(n.value));
  }, m = (R) => {
    if (e.multiSelectionActive) {
      const A = R.map((D) => pn(D.id, !0));
      e.hooks.edgesChange.trigger(A);
      return;
    }
    e.hooks.edgesChange.trigger(hn(n.value, new Set(R.map((A) => A.id)))), e.hooks.nodesChange.trigger(hn(t.value, /* @__PURE__ */ new Set(), !0));
  }, h = (R) => {
    y(R, !0);
  }, g = (R) => {
    const D = (R || e.nodes).map((V) => (V.selected = !1, pn(V.id, !1)));
    e.hooks.nodesChange.trigger(D);
  }, k = (R) => {
    const D = (R || e.edges).map((V) => (V.selected = !1, pn(V.id, !1)));
    e.hooks.edgesChange.trigger(D);
  }, x = (R) => {
    if (!R || !R.length)
      return y([], !1);
    const A = R.reduce(
      (D, V) => {
        const q = pn(V.id, !1);
        return Nn(V) ? D.nodes.push(q) : D.edges.push(q), D;
      },
      { nodes: [], edges: [] }
    );
    A.nodes.length && e.hooks.nodesChange.trigger(A.nodes), A.edges.length && e.hooks.edgesChange.trigger(A.edges);
  }, $ = (R) => {
    var A;
    (A = e.d3Zoom) == null || A.scaleExtent([R, e.maxZoom]), e.minZoom = R;
  }, T = (R) => {
    var A;
    (A = e.d3Zoom) == null || A.scaleExtent([e.minZoom, R]), e.maxZoom = R;
  }, P = (R) => {
    var A;
    (A = e.d3Zoom) == null || A.translateExtent(R), e.translateExtent = R;
  }, b = (R) => {
    e.nodeExtent = R, o();
  }, S = (R) => {
    var A;
    (A = e.d3Zoom) == null || A.clickDistance(R);
  }, L = (R) => {
    e.nodesDraggable = R, e.nodesConnectable = R, e.elementsSelectable = R;
  }, M = (R) => {
    const A = R instanceof Function ? R(e.nodes) : R;
    !e.initialized && !A.length || (e.nodes = Cu(A, l, e.hooks.error.trigger));
  }, z = (R) => {
    const A = R instanceof Function ? R(e.edges) : R;
    if (!e.initialized && !A.length)
      return;
    const D = aa(
      A,
      e.isValidConnection,
      l,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    ia(e.connectionLookup, n.value, D), e.edges = D;
  }, _ = (R) => {
    const A = R instanceof Function ? R([...e.nodes, ...e.edges]) : R;
    !e.initialized && !A.length || (M(A.filter(Nn)), z(A.filter(xn)));
  }, O = (R) => {
    let A = R instanceof Function ? R(e.nodes) : R;
    A = Array.isArray(A) ? A : [A];
    const D = Cu(A, l, e.hooks.error.trigger), V = [];
    for (const q of D)
      V.push(bu(q));
    V.length && e.hooks.nodesChange.trigger(V);
  }, E = (R) => {
    let A = R instanceof Function ? R(e.edges) : R;
    A = Array.isArray(A) ? A : [A];
    const D = aa(
      A,
      e.isValidConnection,
      l,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), V = [];
    for (const q of D)
      V.push(bu(q));
    V.length && e.hooks.edgesChange.trigger(V);
  }, N = (R, A = !0, D = !1) => {
    const V = R instanceof Function ? R(e.nodes) : R, q = Array.isArray(V) ? V : [V], ne = [], re = [];
    function ue(be) {
      const ke = s(be);
      for (const De of ke)
        (!et(De.deletable) || De.deletable) && re.push(wu(De.id, De.source, De.target, De.sourceHandle, De.targetHandle));
    }
    function fe(be) {
      const ke = [];
      for (const De of e.nodes)
        De.parentNode === be && ke.push(De);
      if (ke.length) {
        for (const De of ke)
          ne.push(xu(De.id));
        A && ue(ke);
        for (const De of ke)
          fe(De.id);
      }
    }
    for (const be of q) {
      const ke = typeof be == "string" ? l(be) : be;
      ke && (et(ke.deletable) && !ke.deletable || (ne.push(xu(ke.id)), A && ue([ke]), D && fe(ke.id)));
    }
    re.length && e.hooks.edgesChange.trigger(re), ne.length && e.hooks.nodesChange.trigger(ne);
  }, w = (R) => {
    const A = R instanceof Function ? R(e.edges) : R, D = Array.isArray(A) ? A : [A], V = [];
    for (const q of D) {
      const ne = typeof q == "string" ? c(q) : q;
      ne && (et(ne.deletable) && !ne.deletable || V.push(
        wu(
          typeof q == "string" ? q : q.id,
          ne.source,
          ne.target,
          ne.sourceHandle,
          ne.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(V);
  }, U = (R, A, D = !0) => {
    const V = c(R.id);
    if (!V)
      return !1;
    const q = e.edges.indexOf(V), ne = bb(R, A, V, D, e.hooks.error.trigger);
    if (ne) {
      const [re] = aa(
        [ne],
        e.isValidConnection,
        l,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((ue, fe) => fe === q ? re : ue), ia(e.connectionLookup, n.value, [re]), re;
    }
    return !1;
  }, B = (R, A, D = { replace: !1 }) => {
    const V = c(R);
    if (!V)
      return;
    const q = typeof A == "function" ? A(V) : A;
    V.data = D.replace ? q : { ...V.data, ...q };
  }, Z = (R) => yu(R, e.nodes), Q = (R) => {
    const A = yu(R, e.edges);
    return ia(e.connectionLookup, n.value, A), A;
  }, ee = (R, A, D = { replace: !1 }) => {
    const V = l(R);
    if (!V)
      return;
    const q = typeof A == "function" ? A(V) : A;
    D.replace ? e.nodes.splice(e.nodes.indexOf(V), 1, q) : Object.assign(V, q);
  }, de = (R, A, D = { replace: !1 }) => {
    const V = l(R);
    if (!V)
      return;
    const q = typeof A == "function" ? A(V) : A;
    V.data = D.replace ? q : { ...V.data, ...q };
  }, ye = (R, A, D = !1) => {
    D ? e.connectionClickStartHandle = R : e.connectionStartHandle = R, e.connectionEndHandle = null, e.connectionStatus = null, A && (e.connectionPosition = A);
  }, _e = (R, A = null, D = null) => {
    e.connectionStartHandle && (e.connectionPosition = R, e.connectionEndHandle = A, e.connectionStatus = D);
  }, te = (R, A) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, A ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, oe = (R) => {
    const A = Wy(R), D = A ? null : zr(R) ? R : l(R.id);
    return !A && !D ? [null, null, A] : [A ? R : ti(D), D, A];
  }, me = (R, A = !0, D = e.nodes) => {
    const [V, q, ne] = oe(R);
    if (!V)
      return [];
    const re = [];
    for (const ue of D || e.nodes) {
      if (!ne && (ue.id === q.id || !ue.computedPosition))
        continue;
      const fe = ti(ue), be = ni(fe, V);
      (A && be > 0 || be >= fe.width * fe.height || be >= Number(V.width) * Number(V.height)) && re.push(ue);
    }
    return re;
  }, $e = (R, A, D = !0) => {
    const [V] = oe(R);
    if (!V)
      return !1;
    const q = ni(V, A);
    return D && q > 0 || q >= Number(V.width) * Number(V.height);
  }, Ee = (R) => {
    const { viewport: A, dimensions: D, d3Zoom: V, d3Selection: q, translateExtent: ne } = e;
    if (!V || !q || !R.x && !R.y)
      return !1;
    const re = ar.translate(A.x + R.x, A.y + R.y).scale(A.zoom), ue = [
      [0, 0],
      [D.width, D.height]
    ], fe = V.constrain()(re, ue, ne), be = e.viewport.x !== fe.x || e.viewport.y !== fe.y || e.viewport.zoom !== fe.k;
    return V.transform(q, fe), be;
  }, ae = (R) => {
    const A = R instanceof Function ? R(e) : R, D = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    et(A.defaultEdgeOptions) && (e.defaultEdgeOptions = A.defaultEdgeOptions);
    const V = A.modelValue || A.nodes || A.edges ? [] : void 0;
    V && (A.modelValue && V.push(...A.modelValue), A.nodes && V.push(...A.nodes), A.edges && V.push(...A.edges), _(V));
    const q = () => {
      et(A.maxZoom) && T(A.maxZoom), et(A.minZoom) && $(A.minZoom), et(A.translateExtent) && P(A.translateExtent);
    };
    for (const ne of Object.keys(A)) {
      const re = ne, ue = A[re];
      ![...Rb, ...D].includes(re) && et(ue) && (e[re] = ue);
    }
    ys(() => e.d3Zoom).not.toBeNull().then(q), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: f,
    updateNodeDimensions: v,
    setElements: _,
    setNodes: M,
    setEdges: z,
    addNodes: O,
    addEdges: E,
    removeNodes: N,
    removeEdges: w,
    findNode: l,
    findEdge: c,
    updateEdge: U,
    updateEdgeData: B,
    updateNode: ee,
    updateNodeData: de,
    applyEdgeChanges: Q,
    applyNodeChanges: Z,
    addSelectedElements: h,
    addSelectedNodes: p,
    addSelectedEdges: m,
    setMinZoom: $,
    setMaxZoom: T,
    setTranslateExtent: P,
    setNodeExtent: b,
    setPaneClickDistance: S,
    removeSelectedElements: x,
    removeSelectedNodes: g,
    removeSelectedEdges: k,
    startConnection: ye,
    updateConnection: _e,
    endConnection: te,
    setInteractive: L,
    setState: ae,
    getIntersectingNodes: me,
    getIncomers: i,
    getOutgoers: a,
    getConnectedEdges: s,
    getHandleConnections: u,
    isNodeIntersecting: $e,
    panBy: Ee,
    fitView: (R) => r.value.fitView(R),
    zoomIn: (R) => r.value.zoomIn(R),
    zoomOut: (R) => r.value.zoomOut(R),
    zoomTo: (R, A) => r.value.zoomTo(R, A),
    setViewport: (R, A) => r.value.setViewport(R, A),
    setTransform: (R, A) => r.value.setTransform(R, A),
    getViewport: () => r.value.getViewport(),
    getTransform: () => r.value.getTransform(),
    setCenter: (R, A, D) => r.value.setCenter(R, A, D),
    fitBounds: (R, A) => r.value.fitBounds(R, A),
    project: (R) => r.value.project(R),
    screenToFlowCoordinate: (R) => r.value.screenToFlowCoordinate(R),
    flowToScreenCoordinate: (R) => r.value.flowToScreenCoordinate(R),
    toObject: () => {
      const R = [], A = [];
      for (const D of e.nodes) {
        const {
          computedPosition: V,
          handleBounds: q,
          selected: ne,
          dimensions: re,
          isParent: ue,
          resizing: fe,
          dragging: be,
          events: ke,
          ...De
        } = D;
        R.push(De);
      }
      for (const D of e.edges) {
        const { selected: V, sourceNode: q, targetNode: ne, events: re, ...ue } = D;
        A.push(ue);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: R,
          edges: A,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (R) => new Promise((A) => {
      const { nodes: D, edges: V, position: q, zoom: ne, viewport: re } = R;
      D && M(D), V && z(V);
      const [ue, fe] = re?.x && re?.y ? [re.x, re.y] : q ?? [null, null];
      if (ue && fe) {
        const be = re?.zoom || ne || e.viewport.zoom;
        return ys(() => r.value.viewportInitialized).toBe(!0).then(() => {
          r.value.setViewport({
            x: ue,
            y: fe,
            zoom: be
          }).then(() => {
            A(!0);
          });
        });
      } else
        A(!0);
    }),
    updateNodeInternals: o,
    viewportHelper: r,
    $reset: () => {
      const R = np();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const A = ar.translate(R.defaultViewport.x ?? 0, R.defaultViewport.y ?? 0).scale(Bn(R.defaultViewport.zoom ?? 1, R.minZoom, R.maxZoom)), D = e.viewportRef.getBoundingClientRect(), V = [
          [0, 0],
          [D.width, D.height]
        ], q = e.d3Zoom.constrain()(A, V, R.translateExtent);
        e.d3Zoom.transform(e.d3Selection, q);
      }
      ae(R);
    },
    $destroy: () => {
    }
  };
}
const Db = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Fb = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, lt = /* @__PURE__ */ Me({
  ...Fb,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => se.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = am(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), r = qe(() => n.type ?? "source"), o = qe(() => n.isValidConnection ?? null), {
      id: i,
      connectionStartHandle: a,
      connectionClickStartHandle: s,
      connectionEndHandle: u,
      vueFlowRef: l,
      nodesConnectable: c,
      noDragClassName: f,
      noPanClassName: v
    } = Ve(), { id: y, node: p, nodeEl: m, connectedEdges: h } = ep(), g = Y(), k = qe(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), x = qe(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), $ = qe(
      () => {
        var z, _, O, E, N, w;
        return ((z = a.value) == null ? void 0 : z.nodeId) === y && ((_ = a.value) == null ? void 0 : _.id) === e.id && ((O = a.value) == null ? void 0 : O.type) === r.value || ((E = u.value) == null ? void 0 : E.nodeId) === y && ((N = u.value) == null ? void 0 : N.id) === e.id && ((w = u.value) == null ? void 0 : w.type) === r.value;
      }
    ), T = qe(
      () => {
        var z, _, O;
        return ((z = s.value) == null ? void 0 : z.nodeId) === y && ((_ = s.value) == null ? void 0 : _.id) === e.id && ((O = s.value) == null ? void 0 : O.type) === r.value;
      }
    ), { handlePointerDown: P, handleClick: b } = Qf({
      nodeId: y,
      handleId: e.id,
      isValidConnection: o,
      type: r
    }), S = J(() => typeof e.connectable == "string" && e.connectable === "single" ? !h.value.some((z) => {
      const _ = z[`${r.value}Handle`];
      return z[r.value] !== y ? !1 : _ ? _ === e.id : !0;
    }) : typeof e.connectable == "number" ? h.value.filter((z) => {
      const _ = z[`${r.value}Handle`];
      return z[r.value] !== y ? !1 : _ ? _ === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(p, h.value) : et(e.connectable) ? e.connectable : c.value);
    Ze(() => {
      var z;
      if (!p.dimensions.width || !p.dimensions.height)
        return;
      const _ = (z = p.handleBounds[r.value]) == null ? void 0 : z.find((Z) => Z.id === e.id);
      if (!l.value || _)
        return;
      const O = l.value.querySelector(".vue-flow__transformationpane");
      if (!m.value || !g.value || !O || !e.id)
        return;
      const E = m.value.getBoundingClientRect(), N = g.value.getBoundingClientRect(), w = window.getComputedStyle(O), { m22: U } = new window.DOMMatrixReadOnly(w.transform), B = {
        id: e.id,
        position: e.position,
        x: (N.left - E.left) / U,
        y: (N.top - E.top) / U,
        type: r.value,
        nodeId: y,
        ...wi(g.value)
      };
      p.handleBounds[r.value] = [...p.handleBounds[r.value] ?? [], B];
    });
    function L(z) {
      const _ = sl(z);
      S.value && k.value && (_ && z.button === 0 || !_) && P(z);
    }
    function M(z) {
      !y || !s.value && !k.value || S.value && b(z);
    }
    return t({
      handleClick: b,
      handlePointerDown: P,
      onClick: M,
      onPointerDown: L
    }), (z, _) => (C(), I("div", {
      ref_key: "handle",
      ref: g,
      "data-id": `${F(i)}-${F(y)}-${e.id}-${r.value}`,
      "data-handleid": e.id,
      "data-nodeid": F(y),
      "data-handlepos": z.position,
      class: X(["vue-flow__handle", [
        `vue-flow__handle-${z.position}`,
        `vue-flow__handle-${e.id}`,
        F(f),
        F(v),
        r.value,
        {
          connectable: S.value,
          connecting: T.value,
          connectablestart: k.value,
          connectableend: x.value,
          connectionindicator: S.value && (k.value && !$.value || x.value && $.value)
        }
      ]]),
      onMousedown: L,
      onTouchstartPassive: L,
      onClick: M
    }, [
      Xe(z.$slots, "default", { id: z.id })
    ], 42, Db));
  }
}), Ei = function({
  sourcePosition: e = se.Bottom,
  targetPosition: t = se.Top,
  label: n,
  connectable: r = !0,
  isValidTargetPos: o,
  isValidSourcePos: i,
  data: a
}) {
  const s = a.label ?? n;
  return [
    Pe(lt, { type: "target", position: t, connectable: r, isValidConnection: o }),
    typeof s != "string" && s ? Pe(s) : Pe(ge, [s]),
    Pe(lt, { type: "source", position: e, connectable: r, isValidConnection: i })
  ];
};
Ei.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
Ei.inheritAttrs = !1;
Ei.compatConfig = { MODE: 3 };
const Bb = Ei, ki = function({
  targetPosition: e = se.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    Pe(lt, { type: "target", position: e, connectable: n, isValidConnection: r }),
    typeof i != "string" && i ? Pe(i) : Pe(ge, [i])
  ];
};
ki.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
ki.inheritAttrs = !1;
ki.compatConfig = { MODE: 3 };
const Lb = ki, Pi = function({
  sourcePosition: e = se.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: r,
  data: o
}) {
  const i = o.label ?? t;
  return [
    typeof i != "string" && i ? Pe(i) : Pe(ge, [i]),
    Pe(lt, { type: "source", position: e, connectable: n, isValidConnection: r })
  ];
};
Pi.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Pi.inheritAttrs = !1;
Pi.compatConfig = { MODE: 3 };
const Ub = Pi, qb = ["transform"], Vb = ["width", "height", "x", "y", "rx", "ry"], Hb = ["y"], jb = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, Gb = /* @__PURE__ */ Me({
  ...jb,
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
    Ze(o), Te([() => e.x, () => e.y, n, () => e.label], o);
    function o() {
      if (!n.value)
        return;
      const i = n.value.getBBox();
      (i.width !== t.value.width || i.height !== t.value.height) && (t.value = i);
    }
    return (i, a) => (C(), I("g", {
      transform: r.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      i.labelShowBg ? (C(), I("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * i.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * i.labelBgPadding[1]}px`,
        x: -i.labelBgPadding[0],
        y: -i.labelBgPadding[1],
        style: Ot(i.labelBgStyle),
        rx: i.labelBgBorderRadius,
        ry: i.labelBgBorderRadius
      }, null, 12, Vb)) : he("", !0),
      d("text", vi(i.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: i.labelStyle
      }), [
        Xe(i.$slots, "default", {}, () => [
          typeof i.label != "string" ? (C(), Fe(zt(i.label), { key: 0 })) : (C(), I(ge, { key: 1 }, [
            Ue(W(i.label), 1)
          ], 64))
        ])
      ], 16, Hb)
    ], 8, qb));
  }
}), Wb = ["id", "d", "marker-end", "marker-start"], Xb = ["d", "stroke-width"], Yb = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, oo = /* @__PURE__ */ Me({
  ...Yb,
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
    const n = Y(null), r = Y(null), o = Y(null), i = um();
    return t({
      pathEl: n,
      interactionEl: r,
      labelEl: o
    }), (a, s) => (C(), I(ge, null, [
      d("path", vi(F(i), {
        id: a.id,
        ref_key: "pathEl",
        ref: n,
        d: a.path,
        class: "vue-flow__edge-path",
        "marker-end": a.markerEnd,
        "marker-start": a.markerStart
      }), null, 16, Wb),
      a.interactionWidth ? (C(), I("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: r,
        fill: "none",
        d: a.path,
        "stroke-width": a.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, Xb)) : he("", !0),
      a.label && a.labelX && a.labelY ? (C(), Fe(Gb, {
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
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : he("", !0)
    ], 64));
  }
});
function rp({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
}) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function op({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: i,
  targetControlX: a,
  targetControlY: s
}) {
  const u = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(u - e), f = Math.abs(l - t);
  return [u, l, c, f];
}
function So(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ou({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  let a, s;
  switch (e) {
    case se.Left:
      a = t - So(t - r, i), s = n;
      break;
    case se.Right:
      a = t + So(r - t, i), s = n;
      break;
    case se.Top:
      a = t, s = n - So(n - o, i);
      break;
    case se.Bottom:
      a = t, s = n + So(o - n, i);
      break;
  }
  return [a, s];
}
function ll(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = se.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = se.Top,
    curvature: s = 0.25
  } = e, [u, l] = Ou({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i,
    c: s
  }), [c, f] = Ou({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n,
    c: s
  }), [v, y, p, m] = op({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: i,
    sourceControlX: u,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: f
  });
  return [
    `M${t},${n} C${u},${l} ${c},${f} ${o},${i}`,
    v,
    y,
    p,
    m
  ];
}
function Nu({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  let i, a;
  switch (e) {
    case se.Left:
    case se.Right:
      i = 0.5 * (t + r), a = n;
      break;
    case se.Top:
    case se.Bottom:
      i = t, a = 0.5 * (n + o);
      break;
  }
  return [i, a];
}
function ip(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = se.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = se.Top
  } = e, [s, u] = Nu({
    pos: r,
    x1: t,
    y1: n,
    x2: o,
    y2: i
  }), [l, c] = Nu({
    pos: a,
    x1: o,
    y1: i,
    x2: t,
    y2: n
  }), [f, v, y, p] = op({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: i,
    sourceControlX: s,
    sourceControlY: u,
    targetControlX: l,
    targetControlY: c
  });
  return [
    `M${t},${n} C${s},${u} ${l},${c} ${o},${i}`,
    f,
    v,
    y,
    p
  ];
}
const Iu = {
  [se.Left]: { x: -1, y: 0 },
  [se.Right]: { x: 1, y: 0 },
  [se.Top]: { x: 0, y: -1 },
  [se.Bottom]: { x: 0, y: 1 }
};
function Kb({
  source: e,
  sourcePosition: t = se.Bottom,
  target: n
}) {
  return t === se.Left || t === se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Ru(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function Zb({
  source: e,
  sourcePosition: t = se.Bottom,
  target: n,
  targetPosition: r = se.Top,
  center: o,
  offset: i
}) {
  const a = Iu[t], s = Iu[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, l = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Kb({
    source: u,
    sourcePosition: t,
    target: l
  }), f = c.x !== 0 ? "x" : "y", v = c[f];
  let y, p, m;
  const h = { x: 0, y: 0 }, g = { x: 0, y: 0 }, [k, x, $, T] = rp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * s[f] === -1) {
    p = o.x ?? k, m = o.y ?? x;
    const b = [
      { x: p, y: u.y },
      { x: p, y: l.y }
    ], S = [
      { x: u.x, y: m },
      { x: l.x, y: m }
    ];
    a[f] === v ? y = f === "x" ? b : S : y = f === "x" ? S : b;
  } else {
    const b = [{ x: u.x, y: l.y }], S = [{ x: l.x, y: u.y }];
    if (f === "x" ? y = a.x === v ? S : b : y = a.y === v ? b : S, t === r) {
      const O = Math.abs(e[f] - n[f]);
      if (O <= i) {
        const E = Math.min(i - 1, i - O);
        a[f] === v ? h[f] = (u[f] > e[f] ? -1 : 1) * E : g[f] = (l[f] > n[f] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const O = f === "x" ? "y" : "x", E = a[f] === s[O], N = u[O] > l[O], w = u[O] < l[O];
      (a[f] === 1 && (!E && N || E && w) || a[f] !== 1 && (!E && w || E && N)) && (y = f === "x" ? b : S);
    }
    const L = { x: u.x + h.x, y: u.y + h.y }, M = { x: l.x + g.x, y: l.y + g.y }, z = Math.max(Math.abs(L.x - y[0].x), Math.abs(M.x - y[0].x)), _ = Math.max(Math.abs(L.y - y[0].y), Math.abs(M.y - y[0].y));
    z >= _ ? (p = (L.x + M.x) / 2, m = y[0].y) : (p = y[0].x, m = (L.y + M.y) / 2);
  }
  return [[
    e,
    { x: u.x + h.x, y: u.y + h.y },
    ...y,
    { x: l.x + g.x, y: l.y + g.y },
    n
  ], p, m, $, T];
}
function Jb(e, t, n, r) {
  const o = Math.min(Ru(e, t) / 2, Ru(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const l = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * l},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * u}Q ${i},${a} ${i + o * s},${a}`;
}
function As(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: r = se.Bottom,
    targetX: o,
    targetY: i,
    targetPosition: a = se.Top,
    borderRadius: s = 5,
    centerX: u,
    centerY: l,
    offset: c = 20
  } = e, [f, v, y, p, m] = Zb({
    source: { x: t, y: n },
    sourcePosition: r,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: l },
    offset: c
  });
  return [f.reduce((g, k, x) => {
    let $;
    return x > 0 && x < f.length - 1 ? $ = Jb(f[x - 1], k, f[x + 1], s) : $ = `${x === 0 ? "M" : "L"}${k.x} ${k.y}`, g += $, g;
  }, ""), v, y, p, m];
}
function Qb(e) {
  const { sourceX: t, sourceY: n, targetX: r, targetY: o } = e, [i, a, s, u] = rp({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o
  });
  return [`M ${t},${n}L ${r},${o}`, i, a, s, u];
}
const ex = Me({
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
      const [n, r, o] = Qb(e);
      return Pe(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), tx = ex, nx = Me({
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
      const [n, r, o] = As({
        ...e,
        sourcePosition: e.sourcePosition ?? se.Bottom,
        targetPosition: e.targetPosition ?? se.Top
      });
      return Pe(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), ap = nx, rx = Me({
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
    return () => Pe(ap, { ...e, ...t, borderRadius: 0 });
  }
}), ox = rx, ix = Me({
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
      const [n, r, o] = ll({
        ...e,
        sourcePosition: e.sourcePosition ?? se.Bottom,
        targetPosition: e.targetPosition ?? se.Top
      });
      return Pe(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), ax = ix, sx = Me({
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
      const [n, r, o] = ip({
        ...e,
        sourcePosition: e.sourcePosition ?? se.Bottom,
        targetPosition: e.targetPosition ?? se.Top
      });
      return Pe(oo, {
        path: n,
        labelX: r,
        labelY: o,
        ...t,
        ...e
      });
    };
  }
}), lx = sx, ux = {
  input: Ub,
  default: Bb,
  output: Lb
}, cx = {
  default: ax,
  straight: tx,
  step: ox,
  smoothstep: ap,
  simplebezier: lx
};
function dx(e, t, n) {
  const r = J(() => (m) => t.value.get(m)), o = J(() => (m) => n.value.get(m)), i = J(() => {
    const m = {
      ...cx,
      ...e.edgeTypes
    }, h = Object.keys(m);
    for (const g of e.edges)
      g.type && !h.includes(g.type) && (m[g.type] = g.type);
    return m;
  }), a = J(() => {
    const m = {
      ...ux,
      ...e.nodeTypes
    }, h = Object.keys(m);
    for (const g of e.nodes)
      g.type && !h.includes(g.type) && (m[g.type] = g.type);
    return m;
  }), s = J(() => e.onlyRenderVisibleElements ? qf(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), u = J(() => {
    if (e.onlyRenderVisibleElements) {
      const m = [];
      for (const h of e.edges) {
        const g = t.value.get(h.source), k = t.value.get(h.target);
        sb({
          sourcePos: g.computedPosition || { x: 0, y: 0 },
          targetPos: k.computedPosition || { x: 0, y: 0 },
          sourceWidth: g.dimensions.width,
          sourceHeight: g.dimensions.height,
          targetWidth: k.dimensions.width,
          targetHeight: k.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && m.push(h);
      }
      return m;
    }
    return e.edges;
  }), l = J(() => [...s.value, ...u.value]), c = J(() => {
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
    ...c.value,
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
    getElements: l,
    getEdgeTypes: i,
    getNodeTypes: a,
    getEdges: u,
    getNodes: s,
    getSelectedElements: v,
    getSelectedNodes: c,
    getSelectedEdges: f,
    getNodesInitialized: y,
    areNodesInitialized: p
  };
}
class zn {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = pr()) == null ? void 0 : t.appContext.app, r = n?.config.globalProperties.$vueFlowStorage ?? zn.instance;
    return zn.instance = r ?? new zn(), n && (n.config.globalProperties.$vueFlowStorage = zn.instance), zn.instance;
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
    const r = np(), o = eo(r), i = {};
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
    }), u = J(() => {
      const v = /* @__PURE__ */ new Map();
      for (const y of o.edges)
        v.set(y.id, y);
      return v;
    }), l = dx(o, s, u), c = Mb(o, s, u);
    c.setState({ ...o, ...n });
    const f = {
      ...i,
      ...l,
      ...c,
      ...n0(o),
      nodeLookup: s,
      edgeLookup: u,
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
  const t = zn.getInstance(), n = Dd(), r = typeof e == "object", o = r ? e : { id: e }, i = o.id, a = i ?? n?.vueFlowId;
  let s;
  if (n) {
    const u = fr(Tu, null);
    typeof u < "u" && u !== null && (!a || u.id === a) && (s = u);
  }
  if (s || a && (s = t.get(a)), !s || a && s.id !== a) {
    const u = i ?? t.getId(), l = t.create(u, o);
    s = l, (n ?? Fd(!0)).run(() => {
      Te(
        l.applyDefault,
        (f, v, y) => {
          const p = (h) => {
            l.applyNodeChanges(h);
          }, m = (h) => {
            l.applyEdgeChanges(h);
          };
          f ? (l.onNodesChange(p), l.onEdgesChange(m)) : (l.hooks.value.nodesChange.off(p), l.hooks.value.edgesChange.off(m)), y(() => {
            l.hooks.value.nodesChange.off(p), l.hooks.value.edgesChange.off(m);
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
  if (n && (Mn(Tu, s), n.vueFlowId = s.id), r) {
    const u = pr();
    u?.type.name !== "VueFlow" && s.emits.error(new rt(tt.USEVUEFLOW_OPTIONS));
  }
  return s;
}
function fx(e) {
  const { emits: t, dimensions: n } = Ve();
  let r;
  Ze(() => {
    const o = () => {
      var i, a;
      if (!e.value || !(((a = (i = e.value).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return;
      const s = wi(e.value);
      (s.width === 0 || s.height === 0) && t.error(new rt(tt.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: s.width || 500, height: s.height || 500 };
    };
    o(), window.addEventListener("resize", o), e.value && (r = new ResizeObserver(() => o()), r.observe(e.value)), mi(() => {
      window.removeEventListener("resize", o), r && e.value && r.unobserve(e.value);
    });
  });
}
const px = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, hx = /* @__PURE__ */ Me({
  ...px,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (C(), I("div", {
      class: "vue-flow__selection vue-flow__container",
      style: Ot({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), mx = ["tabIndex"], vx = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, gx = /* @__PURE__ */ Me({
  ...vx,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: r, noPanClassName: o, disableKeyboardA11y: i, userSelectionActive: a } = Ve(), s = tp(), u = Y(null), l = Jf({
      el: u,
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
      i.value || (p = u.value) == null || p.focus({ preventScroll: !0 });
    });
    const c = J(() => Uf(r.value)), f = J(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function v(p) {
      t.selectionContextMenu({ event: p, nodes: r.value });
    }
    function y(p) {
      i.value || nr[p.key] && (p.preventDefault(), s(
        {
          x: nr[p.key].x,
          y: nr[p.key].y
        },
        p.shiftKey
      ));
    }
    return (p, m) => !F(a) && c.value.width && c.value.height ? (C(), I("div", {
      key: 0,
      class: X(["vue-flow__nodesselection vue-flow__container", F(o)]),
      style: Ot({ transform: `translate(${F(n).x}px,${F(n).y}px) scale(${F(n).zoom})` })
    }, [
      d("div", {
        ref_key: "el",
        ref: u,
        class: X([{ dragging: F(l) }, "vue-flow__nodesselection-rect"]),
        style: Ot(f.value),
        tabIndex: F(i) ? void 0 : -1,
        onContextmenu: v,
        onKeydown: y
      }, null, 46, mx)
    ], 6)) : he("", !0);
  }
});
function yx(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const bx = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, xx = /* @__PURE__ */ Me({
  ...bx,
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
      elementsSelectable: u,
      nodesSelectionActive: l,
      getSelectedEdges: c,
      getSelectedNodes: f,
      removeNodes: v,
      removeEdges: y,
      selectionMode: p,
      deleteKeyCode: m,
      multiSelectionKeyCode: h,
      multiSelectionActive: g,
      edgeLookup: k,
      nodeLookup: x,
      connectionLookup: $,
      defaultEdgeOptions: T,
      connectionStartHandle: P,
      panOnDrag: b
    } = Ve(), S = en(null), L = en(/* @__PURE__ */ new Set()), M = en(/* @__PURE__ */ new Set()), z = en(null), _ = qe(() => u.value && (e.isSelecting || i.value)), O = qe(() => P.value !== null);
    let E = !1, N = !1;
    const w = Nr(m, { actInsideInputWithModifier: !1 }), U = Nr(h);
    Te(w, (te) => {
      te && (v(f.value), y(c.value), l.value = !1);
    }), Te(U, (te) => {
      g.value = te;
    });
    function B(te, oe) {
      return (me) => {
        me.target === oe && te?.(me);
      };
    }
    function Z(te) {
      if (E || O.value) {
        E = !1;
        return;
      }
      o.paneClick(te), a(), l.value = !1;
    }
    function Q(te) {
      var oe;
      if (Array.isArray(b.value) && ((oe = b.value) != null && oe.includes(2))) {
        te.preventDefault();
        return;
      }
      o.paneContextMenu(te);
    }
    function ee(te) {
      o.paneScroll(te);
    }
    function de(te) {
      var oe, me, $e;
      if (z.value = ((oe = t.value) == null ? void 0 : oe.getBoundingClientRect()) ?? null, !u.value || !e.isSelecting || te.button !== 0 || te.target !== S.value || !z.value)
        return;
      ($e = (me = te.target) == null ? void 0 : me.setPointerCapture) == null || $e.call(me, te.pointerId);
      const { x: Ee, y: ae } = yx(te, z.value);
      N = !0, E = !1, a(), s.value = {
        width: 0,
        height: 0,
        startX: Ee,
        startY: ae,
        x: Ee,
        y: ae
      }, o.selectionStart(te);
    }
    function ye(te) {
      var oe;
      if (!z.value || !s.value)
        return;
      E = !0;
      const { x: me, y: $e } = Vt(te, z.value), { startX: Ee = 0, startY: ae = 0 } = s.value, xe = {
        startX: Ee,
        startY: ae,
        x: me < Ee ? me : Ee,
        y: $e < ae ? $e : ae,
        width: Math.abs(me - Ee),
        height: Math.abs($e - ae)
      }, ie = L.value, ve = M.value;
      L.value = new Set(
        qf(n.value, xe, r.value, p.value === il.Partial, !0).map(
          (A) => A.id
        )
      ), M.value = /* @__PURE__ */ new Set();
      const R = ((oe = T.value) == null ? void 0 : oe.selectable) ?? !0;
      for (const A of L.value) {
        const D = $.value.get(A);
        if (D)
          for (const { edgeId: V } of D.values()) {
            const q = k.value.get(V);
            q && (q.selectable ?? R) && M.value.add(V);
          }
      }
      if (!Au(ie, L.value)) {
        const A = hn(x.value, L.value, !0);
        o.nodesChange(A);
      }
      if (!Au(ve, M.value)) {
        const A = hn(k.value, M.value);
        o.edgesChange(A);
      }
      s.value = xe, i.value = !0, l.value = !1;
    }
    function _e(te) {
      var oe;
      te.button !== 0 || !N || ((oe = te.target) == null || oe.releasePointerCapture(te.pointerId), !i.value && s.value && te.target === S.value && Z(te), i.value = !1, s.value = null, l.value = L.value.size > 0, o.selectionEnd(te), e.selectionKeyPressed && (E = !1), N = !1);
    }
    return (te, oe) => (C(), I("div", {
      ref_key: "container",
      ref: S,
      class: X(["vue-flow__pane vue-flow__container", { selection: te.isSelecting }]),
      onClick: oe[0] || (oe[0] = (me) => _.value ? void 0 : B(Z, S.value)(me)),
      onContextmenu: oe[1] || (oe[1] = (me) => B(Q, S.value)(me)),
      onWheelPassive: oe[2] || (oe[2] = (me) => B(ee, S.value)(me)),
      onPointerenter: oe[3] || (oe[3] = (me) => _.value ? void 0 : F(o).paneMouseEnter(me)),
      onPointerdown: oe[4] || (oe[4] = (me) => _.value ? de(me) : F(o).paneMouseMove(me)),
      onPointermove: oe[5] || (oe[5] = (me) => _.value ? ye(me) : F(o).paneMouseMove(me)),
      onPointerup: oe[6] || (oe[6] = (me) => _.value ? _e(me) : void 0),
      onPointerleave: oe[7] || (oe[7] = (me) => F(o).paneMouseLeave(me))
    }, [
      Xe(te.$slots, "default"),
      F(i) && F(s) ? (C(), Fe(hx, {
        key: 0,
        "user-selection-rect": F(s)
      }, null, 8, ["user-selection-rect"])) : he("", !0),
      F(l) && F(f).length ? (C(), Fe(gx, { key: 1 })) : he("", !0)
    ], 34));
  }
}), wx = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, _x = /* @__PURE__ */ Me({
  ...wx,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: r } = Ve(), o = J(() => n.value ? !r.value : !1), i = J(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (a, s) => (C(), I("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: Ot({ transform: i.value, opacity: o.value ? 0 : void 0 })
    }, [
      Xe(a.$slots, "default")
    ], 4));
  }
}), Sx = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, Ex = /* @__PURE__ */ Me({
  ...Sx,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: r,
      translateExtent: o,
      zoomActivationKeyCode: i,
      selectionKeyCode: a,
      panActivationKeyCode: s,
      panOnScroll: u,
      panOnScrollMode: l,
      panOnScrollSpeed: c,
      panOnDrag: f,
      zoomOnDoubleClick: v,
      zoomOnPinch: y,
      zoomOnScroll: p,
      preventScrolling: m,
      noWheelClassName: h,
      noPanClassName: g,
      emits: k,
      connectionStartHandle: x,
      userSelectionActive: $,
      paneDragging: T,
      d3Zoom: P,
      d3Selection: b,
      d3ZoomHandler: S,
      viewport: L,
      viewportRef: M,
      paneClickDistance: z
    } = Ve();
    fx(M);
    const _ = en(!1), O = en(!1);
    let E = null, N = !1, w = 0, U = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const B = Nr(s), Z = Nr(a), Q = Nr(i), ee = qe(
      () => (!Z.value || Z.value && a.value === !0) && (B.value || f.value)
    ), de = qe(() => B.value || u.value), ye = qe(() => a.value === !0 && ee.value !== !0), _e = qe(
      () => Z.value && a.value !== !0 || $.value || ye.value
    ), te = qe(() => x.value !== null);
    Ze(() => {
      if (!M.value) {
        ro("Viewport element is missing");
        return;
      }
      const ae = M.value, xe = ae.getBoundingClientRect(), ie = Ly().clickDistance(z.value).scaleExtent([t.value, n.value]).translateExtent(o.value), ve = At(ae).call(ie), R = ve.on("wheel.zoom"), A = ar.translate(r.value.x ?? 0, r.value.y ?? 0).scale(Bn(r.value.zoom ?? 1, t.value, n.value)), D = [
        [0, 0],
        [xe.width, xe.height]
      ], V = ie.constrain()(A, D, o.value);
      ie.transform(ve, V), ie.wheelDelta(vu), P.value = ie, b.value = ve, S.value = R, L.value = { x: V.x, y: V.y, zoom: V.k }, ie.on("start", (q) => {
        var ne;
        if (!q.sourceEvent)
          return null;
        w = q.sourceEvent.button, _.value = !0;
        const re = $e(q.transform);
        ((ne = q.sourceEvent) == null ? void 0 : ne.type) === "mousedown" && (T.value = !0), U = re, k.viewportChangeStart(re), k.moveStart({ event: q, flowTransform: re });
      }), ie.on("end", (q) => {
        if (!q.sourceEvent)
          return null;
        if (_.value = !1, T.value = !1, oe(ee.value, w ?? 0) && !N && k.paneContextMenu(q.sourceEvent), N = !1, me(U, q.transform)) {
          const ne = $e(q.transform);
          U = ne, k.viewportChangeEnd(ne), k.moveEnd({ event: q, flowTransform: ne });
        }
      }), ie.filter((q) => {
        var ne;
        const re = Q.value || p.value, ue = y.value && q.ctrlKey, fe = q.button, be = q.type === "wheel";
        if (fe === 1 && q.type === "mousedown" && (Ee(q, "vue-flow__node") || Ee(q, "vue-flow__edge")))
          return !0;
        if (!ee.value && !re && !de.value && !v.value && !y.value || $.value || te.value && !be || !v.value && q.type === "dblclick" || Ee(q, h.value) && be || Ee(q, g.value) && (!be || de.value && be && !Q.value) || !y.value && q.ctrlKey && be || !re && !de.value && !ue && be)
          return !1;
        if (!y && q.type === "touchstart" && ((ne = q.touches) == null ? void 0 : ne.length) > 1)
          return q.preventDefault(), !1;
        if (!ee.value && (q.type === "mousedown" || q.type === "touchstart") || ye.value && Array.isArray(f.value) && f.value.includes(0) && fe === 0 || Array.isArray(f.value) && !f.value.includes(fe) && (q.type === "mousedown" || q.type === "touchstart"))
          return !1;
        const ke = Array.isArray(f.value) && f.value.includes(fe) || a.value === !0 && Array.isArray(f.value) && !f.value.includes(0) || !fe || fe <= 1;
        return (!q.ctrlKey || B.value || be) && ke;
      }), Te(
        [$, ee],
        () => {
          $.value && !_.value ? ie.on("zoom", null) : $.value || ie.on("zoom", (q) => {
            L.value = { x: q.transform.x, y: q.transform.y, zoom: q.transform.k };
            const ne = $e(q.transform);
            N = oe(ee.value, w ?? 0), k.viewportChange(ne), k.move({ event: q, flowTransform: ne });
          });
        },
        { immediate: !0 }
      ), Te(
        [$, de, l, Q, y, m, h],
        () => {
          de.value && !Q.value && !$.value ? ve.on(
            "wheel.zoom",
            (q) => {
              if (Ee(q, h.value))
                return !1;
              const ne = Q.value || p.value, re = y.value && q.ctrlKey;
              if (!(!m.value || de.value || ne || re))
                return !1;
              q.preventDefault(), q.stopImmediatePropagation();
              const fe = ve.property("__zoom").k || 1, be = ri();
              if (!B.value && q.ctrlKey && y.value && be) {
                const Ui = Ut(q), Sn = vu(q), vr = fe * 2 ** Sn;
                ie.scaleTo(ve, vr, Ui, q);
                return;
              }
              const ke = q.deltaMode === 1 ? 20 : 1;
              let De = l.value === Or.Vertical ? 0 : q.deltaX * ke, Dt = l.value === Or.Horizontal ? 0 : q.deltaY * ke;
              !be && q.shiftKey && l.value !== Or.Vertical && !De && Dt && (De = Dt, Dt = 0), ie.translateBy(
                ve,
                -(De / fe) * c.value,
                -(Dt / fe) * c.value
              );
              const vt = $e(ve.property("__zoom"));
              E && clearTimeout(E), O.value ? (k.move({ event: q, flowTransform: vt }), k.viewportChange(vt), E = setTimeout(() => {
                k.moveEnd({ event: q, flowTransform: vt }), k.viewportChangeEnd(vt), O.value = !1;
              }, 150)) : (O.value = !0, k.moveStart({ event: q, flowTransform: vt }), k.viewportChangeStart(vt));
            },
            { passive: !1 }
          ) : typeof R < "u" && ve.on(
            "wheel.zoom",
            function(q, ne) {
              const re = !m.value && q.type === "wheel" && !q.ctrlKey, ue = Q.value || p.value, fe = y.value && q.ctrlKey;
              if (!ue && !u.value && !fe && q.type === "wheel" || re || Ee(q, h.value))
                return null;
              q.preventDefault(), R.call(this, q, ne);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function oe(ae, xe) {
      return xe === 2 && Array.isArray(ae) && ae.includes(2);
    }
    function me(ae, xe) {
      return ae.x !== xe.x && !Number.isNaN(xe.x) || ae.y !== xe.y && !Number.isNaN(xe.y) || ae.zoom !== xe.k && !Number.isNaN(xe.k);
    }
    function $e(ae) {
      return {
        x: ae.x,
        y: ae.y,
        zoom: ae.k
      };
    }
    function Ee(ae, xe) {
      return ae.target.closest(`.${xe}`);
    }
    return (ae, xe) => (C(), I("div", {
      ref_key: "viewportRef",
      ref: M,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      K(xx, {
        "is-selecting": _e.value,
        "selection-key-pressed": F(Z),
        class: X({
          connecting: te.value,
          dragging: F(T),
          draggable: F(f) === !0 || Array.isArray(F(f)) && F(f).includes(0)
        })
      }, {
        default: it(() => [
          K(_x, null, {
            default: it(() => [
              Xe(ae.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), kx = ["id"], Px = ["id"], $x = ["id"], Cx = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, zx = /* @__PURE__ */ Me({
  ...Cx,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: r } = Ve();
    return (o, i) => (C(), I(ge, null, [
      d("div", {
        id: `${F(Nf)}-${F(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + W(F(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, kx),
      d("div", {
        id: `${F(If)}-${F(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Px),
      F(n) ? he("", !0) : (C(), I("div", {
        key: 0,
        id: `${F(Gy)}-${F(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, W(F(r)), 9, $x))
    ], 64));
  }
});
function Ax() {
  const e = Ve();
  Te(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function Tx(e, t, n) {
  return n === se.Left ? e - t : n === se.Right ? e + t : e;
}
function Ox(e, t, n) {
  return n === se.Top ? e - t : n === se.Bottom ? e + t : e;
}
const ul = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: r = se.Top,
  type: o
}) {
  return Pe("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${o}`,
    cx: Tx(t, e, r),
    cy: Ox(n, e, r),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
ul.props = ["radius", "centerX", "centerY", "position", "type"];
ul.compatConfig = { MODE: 3 };
const Mu = ul, Nx = Me({
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
      getEdgeTypes: u,
      removeSelectedEdges: l,
      findEdge: c,
      findNode: f,
      isValidConnection: v,
      multiSelectionActive: y,
      disableKeyboardA11y: p,
      elementsSelectable: m,
      edgesUpdatable: h,
      edgesFocusable: g,
      hooks: k
    } = Ve(), x = J(() => c(e.id)), { emit: $, on: T } = Sb(x.value, i), P = fr(Si), b = pr(), S = Y(!1), L = Y(!1), M = Y(""), z = Y(null), _ = Y("source"), O = Y(null), E = qe(
      () => typeof x.value.selectable > "u" ? m.value : x.value.selectable
    ), N = qe(() => typeof x.value.updatable > "u" ? h.value : x.value.updatable), w = qe(() => typeof x.value.focusable > "u" ? g.value : x.value.focusable);
    Mn(xb, e.id), Mn(wb, O);
    const U = J(() => x.value.class instanceof Function ? x.value.class(x.value) : x.value.class), B = J(() => x.value.style instanceof Function ? x.value.style(x.value) : x.value.style), Z = J(() => {
      const A = x.value.type || "default", D = P?.[`edge-${A}`];
      if (D)
        return D;
      let V = x.value.template ?? u.value[A];
      if (typeof V == "string" && b) {
        const q = Object.keys(b.appContext.components);
        q && q.includes(A) && (V = Ld(A, !1));
      }
      return V && typeof V != "string" ? V : (i.error(new rt(tt.EDGE_TYPE_MISSING, V)), !1);
    }), { handlePointerDown: Q } = Qf({
      nodeId: M,
      handleId: z,
      type: _,
      isValidConnection: v,
      edgeUpdaterType: _,
      onEdgeUpdate: ye,
      onEdgeUpdateEnd: _e
    });
    return () => {
      const A = f(x.value.source), D = f(x.value.target), V = "pathOptions" in x.value ? x.value.pathOptions : {};
      if (!A && !D)
        return i.error(new rt(tt.EDGE_SOURCE_TARGET_MISSING, x.value.id, x.value.source, x.value.target)), null;
      if (!A)
        return i.error(new rt(tt.EDGE_SOURCE_MISSING, x.value.id, x.value.source)), null;
      if (!D)
        return i.error(new rt(tt.EDGE_TARGET_MISSING, x.value.id, x.value.target)), null;
      if (!x.value || x.value.hidden || A.hidden || D.hidden)
        return null;
      let q;
      r.value === bn.Strict ? q = A.handleBounds.source : q = [...A.handleBounds.source || [], ...A.handleBounds.target || []];
      const ne = Eu(q, x.value.sourceHandle);
      let re;
      r.value === bn.Strict ? re = D.handleBounds.target : re = [...D.handleBounds.target || [], ...D.handleBounds.source || []];
      const ue = Eu(re, x.value.targetHandle), fe = ne?.position || se.Bottom, be = ue?.position || se.Top, { x: ke, y: De } = sr(A, ne, fe), { x: Dt, y: vt } = sr(D, ue, be);
      return x.value.sourceX = ke, x.value.sourceY = De, x.value.targetX = Dt, x.value.targetY = vt, Pe(
        "g",
        {
          ref: O,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${Z.value === !1 ? "default" : x.value.type || "default"}`,
            s.value,
            U.value,
            {
              updating: S.value,
              selected: x.value.selected,
              animated: x.value.animated,
              inactive: !E.value && !k.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: w.value ? 0 : void 0,
          "aria-label": x.value.ariaLabel === null ? void 0 : x.value.ariaLabel ?? `Edge from ${x.value.source} to ${x.value.target}`,
          "aria-describedby": w.value ? `${If}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: w.value ? "group" : "img",
          ...x.value.domAttributes,
          onClick: oe,
          onContextmenu: me,
          onDblclick: $e,
          onMouseenter: Ee,
          onMousemove: ae,
          onMouseleave: xe,
          onKeyDown: w.value ? R : void 0
        },
        [
          L.value ? null : Pe(Z.value === !1 ? u.value.default : Z.value, {
            id: e.id,
            sourceNode: A,
            targetNode: D,
            source: x.value.source,
            target: x.value.target,
            type: x.value.type,
            updatable: N.value,
            selected: x.value.selected,
            animated: x.value.animated,
            label: x.value.label,
            labelStyle: x.value.labelStyle,
            labelShowBg: x.value.labelShowBg,
            labelBgStyle: x.value.labelBgStyle,
            labelBgPadding: x.value.labelBgPadding,
            labelBgBorderRadius: x.value.labelBgBorderRadius,
            data: x.value.data,
            events: { ...x.value.events, ...T },
            style: B.value,
            markerStart: `url('#${Xr(x.value.markerStart, t)}')`,
            markerEnd: `url('#${Xr(x.value.markerEnd, t)}')`,
            sourcePosition: fe,
            targetPosition: be,
            sourceX: ke,
            sourceY: De,
            targetX: Dt,
            targetY: vt,
            sourceHandleId: x.value.sourceHandle,
            targetHandleId: x.value.targetHandle,
            interactionWidth: x.value.interactionWidth,
            ...V
          }),
          [
            N.value === "source" || N.value === !0 ? [
              Pe(
                "g",
                {
                  onMousedown: ie,
                  onMouseenter: ee,
                  onMouseout: de
                },
                Pe(Mu, {
                  position: fe,
                  centerX: ke,
                  centerY: De,
                  radius: o.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            N.value === "target" || N.value === !0 ? [
              Pe(
                "g",
                {
                  onMousedown: ve,
                  onMouseenter: ee,
                  onMouseout: de
                },
                Pe(Mu, {
                  position: be,
                  centerX: Dt,
                  centerY: vt,
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
      S.value = !0;
    }
    function de() {
      S.value = !1;
    }
    function ye(A, D) {
      $.update({ event: A, edge: x.value, connection: D });
    }
    function _e(A) {
      $.updateEnd({ event: A, edge: x.value }), L.value = !1;
    }
    function te(A, D) {
      A.button === 0 && (L.value = !0, M.value = D ? x.value.target : x.value.source, z.value = (D ? x.value.targetHandle : x.value.sourceHandle) ?? null, _.value = D ? "target" : "source", $.updateStart({ event: A, edge: x.value }), Q(A));
    }
    function oe(A) {
      var D;
      const V = { event: A, edge: x.value };
      E.value && (a.value = !1, x.value.selected && y.value ? (l([x.value]), (D = O.value) == null || D.blur()) : n([x.value])), $.click(V);
    }
    function me(A) {
      $.contextMenu({ event: A, edge: x.value });
    }
    function $e(A) {
      $.doubleClick({ event: A, edge: x.value });
    }
    function Ee(A) {
      $.mouseEnter({ event: A, edge: x.value });
    }
    function ae(A) {
      $.mouseMove({ event: A, edge: x.value });
    }
    function xe(A) {
      $.mouseLeave({ event: A, edge: x.value });
    }
    function ie(A) {
      te(A, !0);
    }
    function ve(A) {
      te(A, !1);
    }
    function R(A) {
      var D;
      !p.value && Rf.includes(A.key) && E.value && (A.key === "Escape" ? ((D = O.value) == null || D.blur(), l([c(e.id)])) : n([c(e.id)]));
    }
  }
}), Ix = Nx, Rx = Me({
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
      connectionLineOptions: u,
      connectionStatus: l,
      viewport: c,
      findNode: f
    } = Ve(), v = (e = fr(Si)) == null ? void 0 : e["connection-line"], y = J(() => {
      var k;
      return f((k = r.value) == null ? void 0 : k.nodeId);
    }), p = J(() => {
      var k;
      return f((k = o.value) == null ? void 0 : k.nodeId) ?? null;
    }), m = J(() => ({
      x: (i.value.x - c.value.x) / c.value.zoom,
      y: (i.value.y - c.value.y) / c.value.zoom
    })), h = J(
      () => u.value.markerStart ? `url(#${Xr(u.value.markerStart, t)})` : ""
    ), g = J(
      () => u.value.markerEnd ? `url(#${Xr(u.value.markerEnd, t)})` : ""
    );
    return () => {
      var k, x, $;
      if (!y.value || !r.value)
        return null;
      const T = r.value.id, P = r.value.type, b = y.value.handleBounds;
      let S = b?.[P] ?? [];
      if (n.value === bn.Loose) {
        const B = b?.[P === "source" ? "target" : "source"] ?? [];
        S = [...S, ...B];
      }
      if (!S)
        return null;
      const L = (T ? S.find((B) => B.id === T) : S[0]) ?? null, M = L?.position ?? se.Top, { x: z, y: _ } = sr(y.value, L, M);
      let O = null;
      p.value && (n.value === bn.Strict ? O = ((k = p.value.handleBounds[P === "source" ? "target" : "source"]) == null ? void 0 : k.find(
        (B) => {
          var Z;
          return B.id === ((Z = o.value) == null ? void 0 : Z.id);
        }
      )) || null : O = ((x = [...p.value.handleBounds.source ?? [], ...p.value.handleBounds.target ?? []]) == null ? void 0 : x.find(
        (B) => {
          var Z;
          return B.id === ((Z = o.value) == null ? void 0 : Z.id);
        }
      )) || null);
      const E = (($ = o.value) == null ? void 0 : $.position) ?? (M ? Cs[M] : null);
      if (!M || !E)
        return null;
      const N = a.value ?? u.value.type ?? Cn.Bezier;
      let w = "";
      const U = {
        sourceX: z,
        sourceY: _,
        sourcePosition: M,
        targetX: m.value.x,
        targetY: m.value.y,
        targetPosition: E
      };
      return N === Cn.Bezier ? [w] = ll(U) : N === Cn.Step ? [w] = As({
        ...U,
        borderRadius: 0
      }) : N === Cn.SmoothStep ? [w] = As(U) : N === Cn.SimpleBezier ? [w] = ip(U) : w = `M${z},${_} ${m.value.x},${m.value.y}`, Pe(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        Pe(
          "g",
          { class: "vue-flow__connection" },
          v ? Pe(v, {
            sourceX: z,
            sourceY: _,
            sourcePosition: M,
            targetX: m.value.x,
            targetY: m.value.y,
            targetPosition: E,
            sourceNode: y.value,
            sourceHandle: L,
            targetNode: p.value,
            targetHandle: O,
            markerEnd: g.value,
            markerStart: h.value,
            connectionStatus: l.value
          }) : Pe("path", {
            d: w,
            class: [u.value.class, l.value, "vue-flow__connection-path"],
            style: {
              ...s.value,
              ...u.value.style
            },
            "marker-end": g.value,
            "marker-start": h.value
          })
        )
      );
    };
  }
}), Mx = Rx, Dx = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Fx = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Bx = /* @__PURE__ */ Me({
  ...Fx,
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
    return (t, n) => (C(), I("marker", {
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
      t.type === F(ei).ArrowClosed ? (C(), I("polyline", {
        key: 0,
        style: Ot({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : he("", !0),
      t.type === F(ei).Arrow ? (C(), I("polyline", {
        key: 1,
        style: Ot({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : he("", !0)
    ], 8, Dx));
  }
}), Lx = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Ux = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, qx = /* @__PURE__ */ Me({
  ...Ux,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: r, defaultMarkerColor: o } = Ve(), i = J(() => {
      const a = /* @__PURE__ */ new Set(), s = [], u = (l) => {
        if (l) {
          const c = Xr(l, t);
          a.has(c) || (typeof l == "object" ? s.push({ ...l, id: c, color: l.color || o.value }) : s.push({ id: c, color: o.value, type: l }), a.add(c));
        }
      };
      for (const l of [r.value.markerEnd, r.value.markerStart])
        u(l);
      for (const l of n.value)
        for (const c of [l.markerStart, l.markerEnd])
          u(c);
      return s.sort((l, c) => l.id.localeCompare(c.id));
    });
    return (a, s) => (C(), I("svg", Lx, [
      d("defs", null, [
        (C(!0), I(ge, null, Re(i.value, (u) => (C(), Fe(Bx, {
          id: u.id,
          key: u.id,
          type: u.type,
          color: u.color,
          width: u.width,
          height: u.height,
          markerUnits: u.markerUnits,
          "stroke-width": u.strokeWidth,
          orient: u.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
      ])
    ]));
  }
}), Vx = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, Hx = /* @__PURE__ */ Me({
  ...Vx,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: r } = Ve();
    return (o, i) => (C(), I(ge, null, [
      K(qx),
      (C(!0), I(ge, null, Re(F(n), (a) => (C(), I("svg", {
        key: a.id,
        class: "vue-flow__edges vue-flow__container",
        style: Ot({ zIndex: F(lb)(a, F(t), F(r)) })
      }, [
        K(F(Ix), {
          id: a.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      K(F(Mx))
    ], 64));
  }
}), jx = Me({
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
      addSelectedNodes: u,
      updateNodeDimensions: l,
      onUpdateNodeInternals: c,
      getNodeTypes: f,
      nodeExtent: v,
      elevateNodesOnSelect: y,
      disableKeyboardA11y: p,
      ariaLiveMessage: m,
      snapToGrid: h,
      snapGrid: g,
      nodeDragThreshold: k,
      nodesDraggable: x,
      elementsSelectable: $,
      nodesConnectable: T,
      nodesFocusable: P,
      hooks: b
    } = Ve(), S = Y(null);
    Mn(Zf, S), Mn(Kf, e.id);
    const L = fr(Si), M = pr(), z = tp(), { node: _, parentNode: O } = ep(e.id), { emit: E, on: N } = $b(_, a), w = qe(() => typeof _.draggable > "u" ? x.value : _.draggable), U = qe(() => typeof _.selectable > "u" ? $.value : _.selectable), B = qe(() => typeof _.connectable > "u" ? T.value : _.connectable), Z = qe(() => typeof _.focusable > "u" ? P.value : _.focusable), Q = J(
      () => U.value || w.value || b.value.nodeClick.hasListeners() || b.value.nodeDoubleClick.hasListeners() || b.value.nodeMouseEnter.hasListeners() || b.value.nodeMouseMove.hasListeners() || b.value.nodeMouseLeave.hasListeners()
    ), ee = qe(() => !!_.dimensions.width && !!_.dimensions.height), de = J(() => {
      const D = _.type || "default", V = L?.[`node-${D}`];
      if (V)
        return V;
      let q = _.template || f.value[D];
      if (typeof q == "string" && M) {
        const ne = Object.keys(M.appContext.components);
        ne && ne.includes(D) && (q = Ld(D, !1));
      }
      return q && typeof q != "string" ? q : (a.error(new rt(tt.NODE_TYPE_MISSING, q)), !1);
    }), ye = Jf({
      id: e.id,
      el: S,
      disabled: () => !w.value,
      selectable: U,
      dragHandle: () => _.dragHandle,
      onStart(D) {
        E.dragStart(D);
      },
      onDrag(D) {
        E.drag(D);
      },
      onStop(D) {
        E.dragStop(D);
      },
      onClick(D) {
        R(D);
      }
    }), _e = J(() => _.class instanceof Function ? _.class(_) : _.class), te = J(() => {
      const D = (_.style instanceof Function ? _.style(_) : _.style) || {}, V = _.width instanceof Function ? _.width(_) : _.width, q = _.height instanceof Function ? _.height(_) : _.height;
      return !D.width && V && (D.width = typeof V == "string" ? V : `${V}px`), !D.height && q && (D.height = typeof q == "string" ? q : `${q}px`), D;
    }), oe = qe(() => Number(_.zIndex ?? te.value.zIndex ?? 0));
    return c((D) => {
      (D.includes(e.id) || !D.length) && $e();
    }), Ze(() => {
      Te(
        () => _.hidden,
        (D = !1, V, q) => {
          !D && S.value && (e.resizeObserver.observe(S.value), q(() => {
            S.value && e.resizeObserver.unobserve(S.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), Te([() => _.type, () => _.sourcePosition, () => _.targetPosition], () => {
      rn(() => {
        l([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
      });
    }), Te(
      [
        () => _.position.x,
        () => _.position.y,
        () => {
          var D;
          return (D = O.value) == null ? void 0 : D.computedPosition.x;
        },
        () => {
          var D;
          return (D = O.value) == null ? void 0 : D.computedPosition.y;
        },
        () => {
          var D;
          return (D = O.value) == null ? void 0 : D.computedPosition.z;
        },
        oe,
        () => _.selected,
        () => _.dimensions.height,
        () => _.dimensions.width,
        () => {
          var D;
          return (D = O.value) == null ? void 0 : D.dimensions.height;
        },
        () => {
          var D;
          return (D = O.value) == null ? void 0 : D.dimensions.width;
        }
      ],
      ([D, V, q, ne, re, ue]) => {
        const fe = {
          x: D,
          y: V,
          z: ue + (y.value && _.selected ? 1e3 : 0)
        };
        typeof q < "u" && typeof ne < "u" ? _.computedPosition = nb({ x: q, y: ne, z: re }, fe) : _.computedPosition = fe;
      },
      { flush: "post", immediate: !0 }
    ), Te([() => _.extent, v], ([D, V], [q, ne]) => {
      (D !== q || V !== ne) && me();
    }), _.extent === "parent" || typeof _.extent == "object" && "range" in _.extent && _.extent.range === "parent" ? ys(() => ee).toBe(!0).then(me) : me(), () => _.hidden ? null : Pe(
      "div",
      {
        ref: S,
        "data-id": _.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${de.value === !1 ? "default" : _.type || "default"}`,
          {
            [n.value]: w.value,
            dragging: ye?.value,
            draggable: w.value,
            selected: _.selected,
            selectable: U.value,
            parent: _.isParent
          },
          _e.value
        ],
        style: {
          visibility: ee.value ? "visible" : "hidden",
          zIndex: _.computedPosition.z ?? oe.value,
          transform: `translate(${_.computedPosition.x}px,${_.computedPosition.y}px)`,
          pointerEvents: Q.value ? "all" : "none",
          ...te.value
        },
        tabIndex: Z.value ? 0 : void 0,
        role: Z.value ? "group" : void 0,
        "aria-describedby": p.value ? void 0 : `${Nf}-${t}`,
        "aria-label": _.ariaLabel,
        "aria-roledescription": "node",
        ..._.domAttributes,
        onMouseenter: Ee,
        onMousemove: ae,
        onMouseleave: xe,
        onContextmenu: ie,
        onClick: R,
        onDblclick: ve,
        onKeydown: A
      },
      [
        Pe(de.value === !1 ? f.value.default : de.value, {
          id: _.id,
          type: _.type,
          data: _.data,
          events: { ..._.events, ...N },
          selected: _.selected,
          resizing: _.resizing,
          dragging: ye.value,
          connectable: B.value,
          position: _.computedPosition,
          dimensions: _.dimensions,
          isValidTargetPos: _.isValidTargetPos,
          isValidSourcePos: _.isValidSourcePos,
          parent: _.parentNode,
          parentNodeId: _.parentNode,
          zIndex: _.computedPosition.z ?? oe.value,
          targetPosition: _.targetPosition,
          sourcePosition: _.sourcePosition,
          label: _.label,
          dragHandle: _.dragHandle,
          onUpdateNodeInternals: $e
        })
      ]
    );
    function me() {
      const D = _.computedPosition, { computedPosition: V, position: q } = al(
        _,
        h.value ? _i(D, g.value) : D,
        a.error,
        v.value,
        O.value
      );
      (_.computedPosition.x !== V.x || _.computedPosition.y !== V.y) && (_.computedPosition = { ..._.computedPosition, ...V }), (_.position.x !== q.x || _.position.y !== q.y) && (_.position = q);
    }
    function $e() {
      S.value && l([{ id: e.id, nodeElement: S.value, forceUpdate: !0 }]);
    }
    function Ee(D) {
      ye?.value || E.mouseEnter({ event: D, node: _ });
    }
    function ae(D) {
      ye?.value || E.mouseMove({ event: D, node: _ });
    }
    function xe(D) {
      ye?.value || E.mouseLeave({ event: D, node: _ });
    }
    function ie(D) {
      return E.contextMenu({ event: D, node: _ });
    }
    function ve(D) {
      return E.doubleClick({ event: D, node: _ });
    }
    function R(D) {
      U.value && (!r.value || !w.value || k.value > 0) && zs(
        _,
        i.value,
        u,
        s,
        o,
        !1,
        S.value
      ), E.click({ event: D, node: _ });
    }
    function A(D) {
      if (!($s(D) || p.value))
        if (Rf.includes(D.key) && U.value) {
          const V = D.key === "Escape";
          zs(
            _,
            i.value,
            u,
            s,
            o,
            V,
            S.value
          );
        } else w.value && _.selected && nr[D.key] && (D.preventDefault(), m.value = `Moved selected node ${D.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~_.position.x}, y: ${~~_.position.y}`, z(
          {
            x: nr[D.key].x,
            y: nr[D.key].y
          },
          D.shiftKey
        ));
    }
  }
}), Gx = jx, Wx = {
  height: "0",
  width: "0"
}, Xx = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
}, Yx = /* @__PURE__ */ Me({
  ...Xx,
  setup(e) {
    const { viewportRef: t } = Ve(), n = qe(() => {
      var r;
      return (r = t.value) == null ? void 0 : r.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (r, o) => (C(), I("svg", null, [
      (C(), I("foreignObject", Wx, [
        (C(), Fe(Bd, {
          to: n.value,
          disabled: !n.value
        }, [
          Xe(r.$slots, "default")
        ], 8, ["to", "disabled"]))
      ]))
    ]));
  }
});
function Kx(e = { includeHiddenNodes: !1 }) {
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
const Zx = { class: "vue-flow__nodes vue-flow__container" }, Jx = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, Qx = /* @__PURE__ */ Me({
  ...Jx,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: r } = Ve(), o = Kx(), i = Y();
    return Te(
      o,
      (a) => {
        a && rn(() => {
          r.nodesInitialized(t.value);
        });
      },
      { immediate: !0 }
    ), Ze(() => {
      i.value = new ResizeObserver((a) => {
        const s = a.map((u) => ({
          id: u.target.getAttribute("data-id"),
          nodeElement: u.target,
          forceUpdate: !0
        }));
        rn(() => n(s));
      });
    }), mi(() => {
      var a;
      return (a = i.value) == null ? void 0 : a.disconnect();
    }), (a, s) => (C(), I("div", Zx, [
      i.value ? (C(!0), I(ge, { key: 0 }, Re(F(t), (u, l, c, f) => {
        const v = [u.id];
        if (f && f.key === u.id && lm(f, v))
          return f;
        const y = (C(), Fe(F(Gx), {
          id: u.id,
          key: u.id,
          "resize-observer": i.value
        }, null, 8, ["id", "resize-observer"]));
        return y.memo = v, y;
      }, s, 0), 128)) : he("", !0)
    ]));
  }
});
function e1() {
  const { emits: e } = Ve();
  Ze(() => {
    if (Yf()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new rt(tt.MISSING_STYLES));
    }
  });
}
const t1 = /* @__PURE__ */ d("div", { class: "vue-flow__edge-labels" }, null, -1), n1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, r1 = /* @__PURE__ */ Me({
  ...n1,
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
    const r = e, o = im(), i = Zi(r, "modelValue", n), a = Zi(r, "nodes", n), s = Zi(r, "edges", n), u = Ve(r), l = Tb({ modelValue: i, nodes: a, edges: s }, r, u);
    return Nb(n, u.hooks), Ax(), e1(), Mn(Si, o), Ys(l), t(u), (c, f) => (C(), I("div", {
      ref: F(u).vueFlowRef,
      class: "vue-flow"
    }, [
      K(Ex, null, {
        default: it(() => [
          K(Hx),
          t1,
          K(Qx),
          Xe(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      Xe(c.$slots, "default"),
      K(zx)
    ], 512));
  }
}), o1 = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, i1 = /* @__PURE__ */ Me({
  ...o1,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = Ve(), r = J(() => `${t.position}`.split("-"));
    return (o, i) => (C(), I("div", {
      class: X(["vue-flow__panel", r.value]),
      style: Ot({ pointerEvents: F(n) ? "none" : "all" })
    }, [
      Xe(o.$slots, "default")
    ], 6));
  }
});
var nn = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(nn || {});
const sp = function({ dimensions: e, size: t, color: n }) {
  return Pe("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, lp = function({ radius: e, color: t }) {
  return Pe("circle", { cx: e, cy: e, r: e, fill: t });
};
nn.Lines + "", nn.Dots + "";
const a1 = {
  [nn.Dots]: "#81818a",
  [nn.Lines]: "#eee"
}, s1 = ["id", "x", "y", "width", "height", "patternTransform"], l1 = {
  key: 2,
  height: "100",
  width: "100"
}, u1 = ["fill"], c1 = ["x", "y", "fill"], d1 = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, f1 = /* @__PURE__ */ Me({
  ...d1,
  props: {
    id: {},
    variant: { default: () => nn.Dots },
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
      const a = n.value.zoom, [s, u] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], l = [s * a || 1, u * a || 1], c = e.size * a, [f, v] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], y = [f * a || 1 + l[0] / 2, v * a || 1 + l[1] / 2];
      return {
        scaledGap: l,
        offset: y,
        size: c
      };
    }), o = qe(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), i = qe(() => e.color || e.patternColor || a1[e.variant || nn.Dots]);
    return (a, s) => (C(), I("svg", {
      class: "vue-flow__background vue-flow__container",
      style: Ot({
        height: `${a.height > 100 ? 100 : a.height}%`,
        width: `${a.width > 100 ? 100 : a.width}%`
      })
    }, [
      Xe(a.$slots, "pattern-container", { id: o.value }, () => [
        d("pattern", {
          id: o.value,
          x: F(n).x % r.value.scaledGap[0],
          y: F(n).y % r.value.scaledGap[1],
          width: r.value.scaledGap[0],
          height: r.value.scaledGap[1],
          patternTransform: `translate(-${r.value.offset[0]},-${r.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          Xe(a.$slots, "pattern", {}, () => [
            a.variant === F(nn).Lines ? (C(), Fe(F(sp), {
              key: 0,
              size: a.lineWidth,
              color: i.value,
              dimensions: r.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : a.variant === F(nn).Dots ? (C(), Fe(F(lp), {
              key: 1,
              color: i.value,
              radius: r.value.size / 2
            }, null, 8, ["color", "radius"])) : he("", !0),
            a.bgColor ? (C(), I("svg", l1, [
              d("rect", {
                width: "100%",
                height: "100%",
                fill: a.bgColor
              }, null, 8, u1)
            ])) : he("", !0)
          ])
        ], 8, s1)
      ]),
      d("rect", {
        x: a.x,
        y: a.y,
        width: "100%",
        height: "100%",
        fill: `url(#${o.value})`
      }, null, 8, c1),
      Xe(a.$slots, "default", { id: o.value })
    ], 4));
  }
}), p1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, h1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, m1 = {
  type: "button",
  class: "vue-flow__controls-button"
};
function v1(e, t, n, r, o, i) {
  return C(), I("button", m1, [
    Xe(e.$slots, "default")
  ]);
}
const Eo = /* @__PURE__ */ h1(p1, [["render", v1]]), g1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, y1 = /* @__PURE__ */ d("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), b1 = [
  y1
];
function x1(e, t) {
  return C(), I("svg", g1, b1);
}
const w1 = { render: x1 }, _1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, S1 = /* @__PURE__ */ d("path", { d: "M0 0h32v4.2H0z" }, null, -1), E1 = [
  S1
];
function k1(e, t) {
  return C(), I("svg", _1, E1);
}
const P1 = { render: k1 }, $1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, C1 = /* @__PURE__ */ d("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), z1 = [
  C1
];
function A1(e, t) {
  return C(), I("svg", $1, z1);
}
const T1 = { render: A1 }, O1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, N1 = /* @__PURE__ */ d("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), I1 = [
  N1
];
function R1(e, t) {
  return C(), I("svg", O1, I1);
}
const M1 = { render: R1 }, D1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, F1 = /* @__PURE__ */ d("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), B1 = [
  F1
];
function L1(e, t) {
  return C(), I("svg", D1, B1);
}
const U1 = { render: L1 }, q1 = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, V1 = /* @__PURE__ */ Me({
  ...q1,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Of.BottomLeft }
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
      fitView: u,
      viewport: l,
      minZoom: c,
      maxZoom: f
    } = Ve(), v = qe(() => n.value || r.value || o.value), y = qe(() => l.value.zoom <= c.value), p = qe(() => l.value.zoom >= f.value);
    function m() {
      a(), t("zoomIn");
    }
    function h() {
      s(), t("zoomOut");
    }
    function g() {
      u(e.fitViewParams), t("fitView");
    }
    function k() {
      i(!v.value), t("interactionChange", !v.value);
    }
    return (x, $) => (C(), Fe(F(i1), {
      class: "vue-flow__controls",
      position: x.position
    }, {
      default: it(() => [
        Xe(x.$slots, "top"),
        x.showZoom ? (C(), I(ge, { key: 0 }, [
          Xe(x.$slots, "control-zoom-in", {}, () => [
            K(Eo, {
              class: "vue-flow__controls-zoomin",
              disabled: p.value,
              onClick: m
            }, {
              default: it(() => [
                Xe(x.$slots, "icon-zoom-in", {}, () => [
                  (C(), Fe(zt(F(w1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          Xe(x.$slots, "control-zoom-out", {}, () => [
            K(Eo, {
              class: "vue-flow__controls-zoomout",
              disabled: y.value,
              onClick: h
            }, {
              default: it(() => [
                Xe(x.$slots, "icon-zoom-out", {}, () => [
                  (C(), Fe(zt(F(P1))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : he("", !0),
        x.showFitView ? Xe(x.$slots, "control-fit-view", { key: 1 }, () => [
          K(Eo, {
            class: "vue-flow__controls-fitview",
            onClick: g
          }, {
            default: it(() => [
              Xe(x.$slots, "icon-fit-view", {}, () => [
                (C(), Fe(zt(F(T1))))
              ])
            ]),
            _: 3
          })
        ]) : he("", !0),
        x.showInteractive ? Xe(x.$slots, "control-interactive", { key: 2 }, () => [
          x.showInteractive ? (C(), Fe(Eo, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: k
          }, {
            default: it(() => [
              v.value ? Xe(x.$slots, "icon-unlock", { key: 0 }, () => [
                (C(), Fe(zt(F(U1))))
              ]) : he("", !0),
              v.value ? he("", !0) : Xe(x.$slots, "icon-lock", { key: 1 }, () => [
                (C(), Fe(zt(F(M1))))
              ])
            ]),
            _: 3
          })) : he("", !0)
        ]) : he("", !0),
        Xe(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
}), H1 = {
  __name: "FlowEdge",
  props: {
    id: { type: String, required: !0 },
    sourceX: { type: Number, required: !0 },
    sourceY: { type: Number, required: !0 },
    targetX: { type: Number, required: !0 },
    targetY: { type: Number, required: !0 },
    sourcePosition: { type: String, default: "right" },
    targetPosition: { type: String, default: "left" },
    markerEnd: { type: String, default: "" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = J(() => ll({
      sourceX: n.sourceX,
      sourceY: n.sourceY,
      targetX: n.targetX,
      targetY: n.targetY,
      sourcePosition: n.sourcePosition,
      targetPosition: n.targetPosition
    })), i = J(() => ({
      position: "absolute",
      transform: `translate(-50%, -50%) translate(${o.value[1]}px, ${o.value[2]}px)`
    }));
    return (a, s) => (C(), I(ge, null, [
      K(F(oo), {
        id: e.id,
        path: o.value[0],
        "marker-end": e.markerEnd
      }, null, 8, ["id", "path", "marker-end"]),
      K(F(Yx), null, {
        default: it(() => [
          d("button", {
            type: "button",
            class: "flex items-center justify-center rounded-full border border-zinc-200 bg-white p-0.5 text-zinc-400 shadow-sm transition hover:bg-rose-500/10 hover:text-rose-600 dark:border-zinc-700 dark:bg-zinc-900",
            style: Ot(i.value),
            title: "Excluir conexão",
            onClick: s[0] || (s[0] = $n((u) => r("remove", e.id), ["stop"]))
          }, [
            K(F(vn), { class: "h-3 w-3" })
          ], 4)
        ]),
        _: 1
      })
    ], 64));
  }
}, In = [
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
  return In.find((t) => t.eventClass === e)?.label || e || "—";
}
const up = [
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
], j1 = [
  { type: "trigger", label: "Gatilho", description: "Início do fluxo. Define qual evento dispara as mensagens." },
  { type: "send_message", label: "Enviar mensagem", description: "Texto, mídia ou botões pelo WhatsApp." },
  { type: "delay", label: "Aguardar", description: "Espera antes de seguir para o próximo bloco." },
  { type: "condition", label: "Condição", description: "Bifurca o fluxo entre as saídas SIM e NÃO." },
  { type: "wait_reply", label: "Aguardar resposta", description: "Espera o cliente responder, com saída alternativa se o tempo esgotar." },
  { type: "end", label: "Fim", description: "Encerra a execução do fluxo." }
], G1 = [
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
], W1 = [
  { value: "reply", label: "Resposta rápida" },
  { value: "url", label: "Abrir link" },
  { value: "call", label: "Ligar" },
  { value: "copy", label: "Copiar código" },
  { value: "pix", label: "Pagar com PIX" }
], X1 = [
  { value: "phone", label: "Telefone" },
  { value: "email", label: "E-mail" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "random", label: "Chave aleatória" }
], cp = [
  { value: "order_is_paid", label: "✅ Pedido foi pago? (status = Aprovado/Concluído)" },
  { value: "order_status_is", label: "Status específico do pedido é…" },
  { value: "payment_method_is", label: "Método de pagamento é…" },
  { value: "event_is", label: "Evento é…" },
  { value: "has_phone", label: "Cliente tem telefone válido" }
], dp = [
  { value: "pending", label: "Pendente" },
  { value: "completed", label: "Aprovado / Concluído" },
  { value: "rejected", label: "Recusado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" }
], fp = [
  { value: "pix", label: "PIX" },
  { value: "pix_auto", label: "PIX automático" },
  { value: "card", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
  { value: "apple_pay", label: "Apple Pay" },
  { value: "google_pay", label: "Google Pay" },
  { value: "paypal", label: "PayPal" },
  { value: "crypto", label: "Criptomoeda" }
], Y1 = [
  { value: "customer", label: "Cliente do evento" },
  { value: "custom", label: "Número fixo" },
  { value: "group", label: "Grupo do WhatsApp" }
], Pn = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
function pp(e, t) {
  const n = Number.isFinite(e) ? e : parseInt(e, 10) || 0;
  return Math.max(0, Math.min(86400, n * (Pn[t] || 1)));
}
function K1(e) {
  const t = Number.isFinite(e) ? e : 0;
  return t > 0 && t % Pn.days === 0 ? { value: t / Pn.days, unit: "days" } : t > 0 && t % Pn.hours === 0 ? { value: t / Pn.hours, unit: "hours" } : t > 0 && t % Pn.minutes === 0 ? { value: t / Pn.minutes, unit: "minutes" } : { value: t, unit: "seconds" };
}
const Z1 = { seconds: "segundos", minutes: "minutos", hours: "horas", days: "dias" };
function oi(e) {
  return Z1[e] || "minutos";
}
function mn(e) {
  return j1.find((t) => t.type === e)?.label || e;
}
function hp(e, t = "") {
  return e === "trigger" ? { event_class: t } : e === "send_message" ? { mode: "text", recipient_type: "customer", text: "Olá {{customer.first_name}}!" } : e === "delay" ? { delay_value: 15, delay_unit: "minutes", seconds: 900 } : e === "condition" ? { kind: "order_is_paid", value: "" } : e === "wait_reply" ? { delay_value: 24, delay_unit: "hours", seconds: 86400 } : {};
}
function mp(e) {
  return {
    buttons: { title: "", footer: "", buttons: [{ type: "reply", displayText: "" }] },
    list: { title: "", footer: "", button_text: "Ver opções", sections: [{ title: "", rows: [{ title: "", description: "" }] }] },
    location: { latitude: "", longitude: "", location_name: "", address: "" },
    contact: { contact_name: "", contact_phone: "", organization: "" },
    poll: { question: "", options: ["", ""], max_answers: 1 },
    link: { url: "", title: "", description: "", text: "", image_url: "" }
  }[e] || {};
}
function vp(e) {
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
const gp = {
  scheduled: "Agendada",
  processing: "Em andamento",
  completed: "Concluída",
  cancelled: "Cancelada"
}, J1 = {
  pending: "Na fila",
  sent: "Enviado",
  failed: "Falhou",
  cancelled: "Cancelado"
}, Q1 = {
  running: "Em execução",
  waiting: "Aguardando",
  completed: "Concluída",
  failed: "Falhou"
}, ew = { class: "space-y-4" }, tw = ["value"], nw = ["value"], rw = { key: 0 }, ow = { key: 1 }, iw = ["value"], aw = { class: "mt-2 flex flex-wrap gap-1.5" }, sw = ["title", "onClick"], lw = { key: 0 }, uw = ["accept", "disabled"], cw = {
  key: 0,
  class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400"
}, dw = { key: 2 }, fw = ["disabled"], pw = { class: "space-y-2" }, hw = ["onUpdate:modelValue"], mw = ["value"], vw = ["onUpdate:modelValue"], gw = ["onUpdate:modelValue"], yw = ["value"], bw = ["onUpdate:modelValue"], xw = ["onUpdate:modelValue"], ww = ["onUpdate:modelValue"], _w = ["onUpdate:modelValue"], Sw = ["onUpdate:modelValue"], Ew = ["onClick"], kw = { class: "grid grid-cols-2 gap-2" }, Pw = { class: "space-y-3" }, $w = ["onUpdate:modelValue"], Cw = ["onUpdate:modelValue"], zw = ["onUpdate:modelValue"], Aw = ["onClick"], Tw = ["onClick"], Ow = { class: "border-t border-zinc-100 pt-2 dark:border-zinc-800" }, Nw = ["onClick"], Iw = { class: "grid grid-cols-2 gap-2" }, Rw = { class: "space-y-2" }, Mw = ["onUpdate:modelValue", "placeholder"], Dw = ["onClick"], Fw = ["max"], Bw = {
  key: 9,
  class: "rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400"
}, Ce = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", Le = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", yp = {
  __name: "MessageEditor",
  props: {
    data: { type: Object, required: !0 },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: !0 },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => up }
  },
  setup(e) {
    const t = e, n = Y(!1), r = Y(""), o = Y([]), i = Y("list"), a = (P) => ["image", "video", "audio", "document"].includes(P), s = J(() => ({
      image: "image/*",
      video: "video/*",
      audio: "audio/*",
      document: ".pdf,.doc,.docx,.xls,.xlsx,.zip"
    })[t.data.mode] || "*/*");
    function u(P, b) {
      t.data[P] = `${t.data[P] || ""}${b}`;
    }
    async function l(P, b = "media_url", S = "mime_type") {
      const L = P.target.files?.[0];
      if (L) {
        n.value = !0, r.value = "";
        try {
          const M = await Ae.uploadMedia(L);
          t.data[b] = M.url, S && (t.data[S] = M.mime_type);
        } catch (M) {
          r.value = M.message;
        } finally {
          n.value = !1, P.target.value = "";
        }
      }
    }
    const c = J(() => Array.isArray(t.data.buttons) ? t.data.buttons : []), f = () => {
      t.data.buttons = [...c.value, { type: "reply", displayText: "" }];
    }, v = (P) => {
      t.data.buttons = c.value.filter((b, S) => S !== P);
    }, y = J(() => Array.isArray(t.data.sections) ? t.data.sections : []), p = () => {
      t.data.sections = [...y.value, { title: "", rows: [{ title: "", description: "" }] }];
    }, m = (P) => {
      t.data.sections = y.value.filter((b, S) => S !== P);
    }, h = (P) => {
      P.rows = [...P.rows || [], { title: "", description: "" }];
    }, g = (P, b) => {
      P.rows = (P.rows || []).filter((S, L) => L !== b);
    }, k = J(() => Array.isArray(t.data.options) ? t.data.options : []), x = () => {
      t.data.options = [...k.value, ""];
    }, $ = (P) => {
      t.data.options = k.value.filter((b, S) => S !== P);
    };
    async function T() {
      try {
        o.value = (await Ae.groups()).groups || [], i.value = o.value.length ? "list" : "manual";
      } catch {
        o.value = [], i.value = "manual";
      }
    }
    return Ze(() => {
      t.showRecipient && T();
    }), (P, b) => (C(), I("div", ew, [
      d("div", null, [
        d("label", {
          class: X(Le),
          for: "zr-mode"
        }, "Tipo de mensagem"),
        ce(d("select", {
          id: "zr-mode",
          "onUpdate:modelValue": b[0] || (b[0] = (S) => e.data.mode = S),
          class: X(Ce)
        }, [
          (C(!0), I(ge, null, Re(F(G1), (S) => (C(), I("option", {
            key: S.value,
            value: S.value
          }, W(S.label), 9, tw))), 128))
        ], 512), [
          [ut, e.data.mode]
        ])
      ]),
      e.showRecipient ? (C(), I(ge, { key: 0 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-recipient"
          }, "Destinatário"),
          ce(d("select", {
            id: "zr-recipient",
            "onUpdate:modelValue": b[1] || (b[1] = (S) => e.data.recipient_type = S),
            class: X(Ce)
          }, [
            (C(!0), I(ge, null, Re(F(Y1), (S) => (C(), I("option", {
              key: S.value,
              value: S.value
            }, W(S.label), 9, nw))), 128))
          ], 512), [
            [ut, e.data.recipient_type]
          ])
        ]),
        e.data.recipient_type === "custom" ? (C(), I("div", rw, [
          d("label", {
            class: X(Le),
            for: "zr-custom-phone"
          }, "Número"),
          ce(d("input", {
            id: "zr-custom-phone",
            "onUpdate:modelValue": b[2] || (b[2] = (S) => e.data.custom_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: X(Ce)
          }, null, 512), [
            [
              we,
              e.data.custom_phone,
              void 0,
              { trim: !0 }
            ]
          ])
        ])) : e.data.recipient_type === "group" ? (C(), I("div", ow, [
          d("label", {
            class: X(Le),
            for: "zr-group-id"
          }, "Grupo do WhatsApp"),
          i.value === "list" ? ce((C(), I("select", {
            key: 0,
            id: "zr-group-id",
            "onUpdate:modelValue": b[3] || (b[3] = (S) => e.data.group_id = S),
            class: X(Ce)
          }, [
            b[30] || (b[30] = d("option", { value: "" }, "Selecione o grupo…", -1)),
            (C(!0), I(ge, null, Re(o.value, (S) => (C(), I("option", {
              key: S.id,
              value: S.id
            }, W(S.name), 9, iw))), 128))
          ], 512)), [
            [ut, e.data.group_id]
          ]) : ce((C(), I("input", {
            key: 1,
            id: "zr-group-id",
            "onUpdate:modelValue": b[4] || (b[4] = (S) => e.data.group_id = S),
            type: "text",
            placeholder: "Ex.: 120363025244589234@g.us",
            class: X(Ce)
          }, null, 512)), [
            [
              we,
              e.data.group_id,
              void 0,
              { trim: !0 }
            ]
          ]),
          d("button", {
            type: "button",
            class: "mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: b[5] || (b[5] = (S) => i.value = i.value === "list" ? "manual" : "list")
          }, W(i.value === "list" ? "Digitar JID manualmente" : o.value.length ? "Escolher da lista" : "Nenhum grupo encontrado — digite o JID"), 1)
        ])) : he("", !0)
      ], 64)) : he("", !0),
      e.data.mode === "text" || a(e.data.mode) ? (C(), I(ge, { key: 1 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-text"
          }, W(a(e.data.mode) ? "Legenda" : "Mensagem"), 1),
          ce(d("textarea", {
            id: "zr-text",
            "onUpdate:modelValue": b[6] || (b[6] = (S) => e.data.text = S),
            rows: "6",
            placeholder: "Digite o texto da mensagem…",
            class: X([Ce, "font-mono leading-relaxed"])
          }, null, 2), [
            [we, e.data.text]
          ]),
          d("div", aw, [
            (C(!0), I(ge, null, Re(e.variables, (S) => (C(), I("button", {
              key: S.token,
              type: "button",
              class: "rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              title: S.label,
              onClick: (L) => u("text", S.token)
            }, W(S.token), 9, sw))), 128))
          ])
        ]),
        a(e.data.mode) ? (C(), I("div", lw, [
          d("label", {
            class: X(Le),
            for: "zr-media-url"
          }, "Arquivo"),
          ce(d("input", {
            id: "zr-media-url",
            "onUpdate:modelValue": b[7] || (b[7] = (S) => e.data.media_url = S),
            type: "url",
            placeholder: "https://… ou envie um arquivo",
            class: X(Ce)
          }, null, 512), [
            [
              we,
              e.data.media_url,
              void 0,
              { trim: !0 }
            ]
          ]),
          d("input", {
            type: "file",
            class: "mt-2 w-full text-xs",
            accept: s.value,
            disabled: n.value,
            onChange: l
          }, null, 40, uw),
          n.value ? (C(), I("p", cw, "Enviando arquivo…")) : he("", !0)
        ])) : he("", !0)
      ], 64)) : e.data.mode === "sticker" ? (C(), I("div", dw, [
        d("label", {
          class: X(Le),
          for: "zr-sticker-url"
        }, "Figurinha (imagem)"),
        ce(d("input", {
          id: "zr-sticker-url",
          "onUpdate:modelValue": b[8] || (b[8] = (S) => e.data.media_url = S),
          type: "url",
          placeholder: "https://… ou envie um arquivo",
          class: X(Ce)
        }, null, 512), [
          [
            we,
            e.data.media_url,
            void 0,
            { trim: !0 }
          ]
        ]),
        d("input", {
          type: "file",
          class: "mt-2 w-full text-xs",
          accept: "image/*",
          disabled: n.value,
          onChange: l
        }, null, 40, fw)
      ])) : e.data.mode === "buttons" ? (C(), I(ge, { key: 3 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-title"
          }, "Título"),
          ce(d("input", {
            id: "zr-title",
            "onUpdate:modelValue": b[9] || (b[9] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Seu pedido foi gerado!",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.title]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-text-btn"
          }, "Descrição"),
          ce(d("textarea", {
            id: "zr-text-btn",
            "onUpdate:modelValue": b[10] || (b[10] = (S) => e.data.text = S),
            rows: "3",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.text]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-footer"
          }, "Rodapé"),
          ce(d("input", {
            id: "zr-footer",
            "onUpdate:modelValue": b[11] || (b[11] = (S) => e.data.footer = S),
            type: "text",
            placeholder: "Enviado automaticamente pelo Getfy",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.footer]
          ])
        ]),
        d("div", pw, [
          d("label", {
            class: X(Le)
          }, "Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)"),
          (C(!0), I(ge, null, Re(c.value, (S, L) => (C(), I("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ce(d("select", {
              "onUpdate:modelValue": (M) => S.type = M,
              class: X(Ce)
            }, [
              (C(!0), I(ge, null, Re(F(W1), (M) => (C(), I("option", {
                key: M.value,
                value: M.value
              }, W(M.label), 9, mw))), 128))
            ], 8, hw), [
              [ut, S.type]
            ]),
            S.type === "pix" ? (C(), I(ge, { key: 0 }, [
              ce(d("input", {
                "onUpdate:modelValue": (M) => S.name = M,
                type: "text",
                placeholder: "Nome da loja (opcional)",
                class: X(Ce)
              }, null, 8, vw), [
                [we, S.name]
              ]),
              ce(d("select", {
                "onUpdate:modelValue": (M) => S.keyType = M,
                class: X(Ce)
              }, [
                b[31] || (b[31] = d("option", { value: "" }, "Tipo de chave PIX", -1)),
                (C(!0), I(ge, null, Re(F(X1), (M) => (C(), I("option", {
                  key: M.value,
                  value: M.value
                }, W(M.label), 9, yw))), 128))
              ], 8, gw), [
                [ut, S.keyType]
              ]),
              ce(d("input", {
                "onUpdate:modelValue": (M) => S.key = M,
                type: "text",
                placeholder: "Chave PIX",
                class: X(Ce)
              }, null, 8, bw), [
                [
                  we,
                  S.key,
                  void 0,
                  { trim: !0 }
                ]
              ]),
              b[32] || (b[32] = d("p", { class: "text-[10px] text-zinc-500 dark:text-zinc-400" }, "O botão PIX deve ser o único botão da mensagem.", -1))
            ], 64)) : (C(), I(ge, { key: 1 }, [
              ce(d("input", {
                "onUpdate:modelValue": (M) => S.displayText = M,
                type: "text",
                placeholder: "Texto do botão",
                class: X(Ce)
              }, null, 8, xw), [
                [we, S.displayText]
              ]),
              S.type === "url" ? ce((C(), I("input", {
                key: 0,
                "onUpdate:modelValue": (M) => S.url = M,
                type: "url",
                placeholder: "https://…",
                class: X(Ce)
              }, null, 8, ww)), [
                [
                  we,
                  S.url,
                  void 0,
                  { trim: !0 }
                ]
              ]) : he("", !0),
              S.type === "call" ? ce((C(), I("input", {
                key: 1,
                "onUpdate:modelValue": (M) => S.phoneNumber = M,
                type: "text",
                placeholder: "+5511999998888",
                class: X(Ce)
              }, null, 8, _w)), [
                [
                  we,
                  S.phoneNumber,
                  void 0,
                  { trim: !0 }
                ]
              ]) : he("", !0),
              S.type === "copy" ? ce((C(), I("input", {
                key: 2,
                "onUpdate:modelValue": (M) => S.copyCode = M,
                type: "text",
                placeholder: "Código a copiar",
                class: X(Ce)
              }, null, 8, Sw)), [
                [
                  we,
                  S.copyCode,
                  void 0,
                  { trim: !0 }
                ]
              ]) : he("", !0)
            ], 64)),
            d("button", {
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (M) => v(L)
            }, "Remover botão", 8, Ew)
          ]))), 128)),
          d("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: f
          }, " + Adicionar botão ")
        ])
      ], 64)) : e.data.mode === "list" ? (C(), I(ge, { key: 4 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-list-title"
          }, "Título"),
          ce(d("input", {
            id: "zr-list-title",
            "onUpdate:modelValue": b[12] || (b[12] = (S) => e.data.title = S),
            type: "text",
            placeholder: "Nossos planos",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.title]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-list-text"
          }, "Descrição"),
          ce(d("textarea", {
            id: "zr-list-text",
            "onUpdate:modelValue": b[13] || (b[13] = (S) => e.data.text = S),
            rows: "3",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.text]
          ])
        ]),
        d("div", kw, [
          d("div", null, [
            d("label", {
              class: X(Le),
              for: "zr-list-footer"
            }, "Rodapé"),
            ce(d("input", {
              id: "zr-list-footer",
              "onUpdate:modelValue": b[14] || (b[14] = (S) => e.data.footer = S),
              type: "text",
              class: X(Ce)
            }, null, 512), [
              [we, e.data.footer]
            ])
          ]),
          d("div", null, [
            d("label", {
              class: X(Le),
              for: "zr-list-button"
            }, "Texto do botão"),
            ce(d("input", {
              id: "zr-list-button",
              "onUpdate:modelValue": b[15] || (b[15] = (S) => e.data.button_text = S),
              type: "text",
              placeholder: "Ver Menu",
              class: X(Ce)
            }, null, 512), [
              [we, e.data.button_text]
            ])
          ])
        ]),
        d("div", Pw, [
          d("label", {
            class: X(Le)
          }, "Seções"),
          (C(!0), I(ge, null, Re(y.value, (S, L) => (C(), I("div", {
            key: L,
            class: "space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900"
          }, [
            ce(d("input", {
              "onUpdate:modelValue": (M) => S.title = M,
              type: "text",
              placeholder: "Nome da seção (opcional)",
              class: X(Ce)
            }, null, 8, $w), [
              [we, S.title]
            ]),
            (C(!0), I(ge, null, Re(S.rows, (M, z) => (C(), I("div", {
              key: z,
              class: "space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950"
            }, [
              ce(d("input", {
                "onUpdate:modelValue": (_) => M.title = _,
                type: "text",
                placeholder: "Título da opção",
                class: X(Ce)
              }, null, 8, Cw), [
                [we, M.title]
              ]),
              ce(d("input", {
                "onUpdate:modelValue": (_) => M.description = _,
                type: "text",
                placeholder: "Descrição (opcional)",
                class: X(Ce)
              }, null, 8, zw), [
                [we, M.description]
              ]),
              d("button", {
                type: "button",
                class: "text-[10px] font-bold text-rose-600 hover:underline",
                onClick: (_) => g(S, z)
              }, "Remover opção", 8, Aw)
            ]))), 128)),
            d("button", {
              type: "button",
              class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
              onClick: (M) => h(S)
            }, "+ Adicionar opção", 8, Tw),
            d("div", Ow, [
              d("button", {
                type: "button",
                class: "text-[11px] font-bold text-rose-600 hover:underline",
                onClick: (M) => m(L)
              }, "Remover seção", 8, Nw)
            ])
          ]))), 128)),
          d("button", {
            type: "button",
            class: "w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700",
            onClick: p
          }, " + Adicionar seção ")
        ])
      ], 64)) : e.data.mode === "location" ? (C(), I(ge, { key: 5 }, [
        d("div", Iw, [
          d("div", null, [
            d("label", {
              class: X(Le),
              for: "zr-lat"
            }, "Latitude"),
            ce(d("input", {
              id: "zr-lat",
              "onUpdate:modelValue": b[16] || (b[16] = (S) => e.data.latitude = S),
              type: "text",
              placeholder: "-23.5505",
              class: X(Ce)
            }, null, 512), [
              [we, e.data.latitude]
            ])
          ]),
          d("div", null, [
            d("label", {
              class: X(Le),
              for: "zr-lng"
            }, "Longitude"),
            ce(d("input", {
              id: "zr-lng",
              "onUpdate:modelValue": b[17] || (b[17] = (S) => e.data.longitude = S),
              type: "text",
              placeholder: "-46.6333",
              class: X(Ce)
            }, null, 512), [
              [we, e.data.longitude]
            ])
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-loc-name"
          }, "Nome do local"),
          ce(d("input", {
            id: "zr-loc-name",
            "onUpdate:modelValue": b[18] || (b[18] = (S) => e.data.location_name = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.location_name]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-loc-address"
          }, "Endereço"),
          ce(d("input", {
            id: "zr-loc-address",
            "onUpdate:modelValue": b[19] || (b[19] = (S) => e.data.address = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.address]
          ])
        ])
      ], 64)) : e.data.mode === "contact" ? (C(), I(ge, { key: 6 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-contact-name"
          }, "Nome completo"),
          ce(d("input", {
            id: "zr-contact-name",
            "onUpdate:modelValue": b[20] || (b[20] = (S) => e.data.contact_name = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.contact_name]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-contact-phone"
          }, "Telefone"),
          ce(d("input", {
            id: "zr-contact-phone",
            "onUpdate:modelValue": b[21] || (b[21] = (S) => e.data.contact_phone = S),
            type: "text",
            placeholder: "5511999998888",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.contact_phone]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-contact-org"
          }, "Empresa (opcional)"),
          ce(d("input", {
            id: "zr-contact-org",
            "onUpdate:modelValue": b[22] || (b[22] = (S) => e.data.organization = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.organization]
          ])
        ])
      ], 64)) : e.data.mode === "poll" ? (C(), I(ge, { key: 7 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-poll-question"
          }, "Pergunta"),
          ce(d("input", {
            id: "zr-poll-question",
            "onUpdate:modelValue": b[23] || (b[23] = (S) => e.data.question = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.question]
          ])
        ]),
        d("div", Rw, [
          d("label", {
            class: X(Le)
          }, "Opções (mínimo 2)"),
          (C(!0), I(ge, null, Re(k.value, (S, L) => (C(), I("div", {
            key: L,
            class: "flex gap-2"
          }, [
            ce(d("input", {
              "onUpdate:modelValue": (M) => k.value[L] = M,
              type: "text",
              class: X(Ce),
              placeholder: `Opção ${L + 1}`
            }, null, 8, Mw), [
              [we, k.value[L]]
            ]),
            k.value.length > 2 ? (C(), I("button", {
              key: 0,
              type: "button",
              class: "text-[11px] font-bold text-rose-600 hover:underline",
              onClick: (M) => $(L)
            }, "✕", 8, Dw)) : he("", !0)
          ]))), 128)),
          d("button", {
            type: "button",
            class: "text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400",
            onClick: x
          }, "+ Adicionar opção")
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-poll-max"
          }, "Máximo de respostas por pessoa"),
          ce(d("input", {
            id: "zr-poll-max",
            "onUpdate:modelValue": b[24] || (b[24] = (S) => e.data.max_answers = S),
            type: "number",
            min: "1",
            max: k.value.length,
            class: X(Ce)
          }, null, 8, Fw), [
            [
              we,
              e.data.max_answers,
              void 0,
              { number: !0 }
            ]
          ])
        ])
      ], 64)) : e.data.mode === "link" ? (C(), I(ge, { key: 8 }, [
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-link-url"
          }, "URL"),
          ce(d("input", {
            id: "zr-link-url",
            "onUpdate:modelValue": b[25] || (b[25] = (S) => e.data.url = S),
            type: "url",
            placeholder: "https://…",
            class: X(Ce)
          }, null, 512), [
            [
              we,
              e.data.url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-link-title"
          }, "Título da prévia"),
          ce(d("input", {
            id: "zr-link-title",
            "onUpdate:modelValue": b[26] || (b[26] = (S) => e.data.title = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.title]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-link-desc"
          }, "Descrição da prévia"),
          ce(d("input", {
            id: "zr-link-desc",
            "onUpdate:modelValue": b[27] || (b[27] = (S) => e.data.description = S),
            type: "text",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.description]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-link-image"
          }, "Imagem da prévia (URL)"),
          ce(d("input", {
            id: "zr-link-image",
            "onUpdate:modelValue": b[28] || (b[28] = (S) => e.data.image_url = S),
            type: "url",
            class: X(Ce)
          }, null, 512), [
            [
              we,
              e.data.image_url,
              void 0,
              { trim: !0 }
            ]
          ])
        ]),
        d("div", null, [
          d("label", {
            class: X(Le),
            for: "zr-link-text"
          }, "Texto que acompanha o link"),
          ce(d("textarea", {
            id: "zr-link-text",
            "onUpdate:modelValue": b[29] || (b[29] = (S) => e.data.text = S),
            rows: "3",
            class: X(Ce)
          }, null, 512), [
            [we, e.data.text]
          ])
        ])
      ], 64)) : he("", !0),
      r.value ? (C(), I("p", Bw, W(r.value), 1)) : he("", !0)
    ]));
  }
}, bp = {
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
}, Lw = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;
function Uw(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n && typeof n == "object" && r in n) return n[r];
  }, e);
}
function Ts(e, t = bp) {
  return e ? e.replace(Lw, (n, r) => {
    const o = Uw(t, r);
    return o == null ? n : String(o);
  }) : "";
}
const qw = { class: "flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl" }, Vw = { class: "flex items-center gap-2.5 border-b border-zinc-800 pb-3" }, Hw = { class: "flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white" }, jw = { class: "text-xs" }, Gw = { class: "font-bold text-white" }, Ww = { class: "my-4 flex justify-end" }, Xw = { class: "relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow" }, Yw = {
  key: 0,
  class: "mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]"
}, Kw = { class: "mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300" }, xp = {
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
      return i?.trim() ? Ts(i) : "Sua mensagem aparece aqui…";
    }), o = J(() => ({
      image: "🖼️ Imagem",
      video: "🎬 Vídeo",
      audio: "🎤 Áudio",
      document: "📄 Documento"
    })[t.mode] || "");
    return (i, a) => (C(), I("div", qw, [
      d("div", Vw, [
        d("div", Hw, W(n.value), 1),
        d("div", jw, [
          d("div", Gw, W(e.recipientName || "Cliente"), 1),
          a[0] || (a[0] = d("div", { class: "text-[10px] text-emerald-400" }, "online", -1))
        ])
      ]),
      d("div", Ww, [
        d("div", Xw, [
          o.value ? (C(), I("span", Yw, W(o.value), 1)) : he("", !0),
          Ue(" " + W(r.value) + " ", 1),
          d("div", Kw, [
            a[1] || (a[1] = d("span", null, "12:00", -1)),
            K(F(wm), { class: "h-3 w-3 text-sky-400" })
          ])
        ])
      ]),
      a[2] || (a[2] = d("p", { class: "text-center text-[10px] text-zinc-500" }, "Exibindo simulação com o primeiro destinatário da lista", -1))
    ]));
  }
}, Zw = { class: "flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60" }, Jw = { class: "flex items-start justify-between gap-2 p-4 pb-0" }, Qw = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, e_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, t_ = {
  key: 0,
  class: "space-y-4 p-4"
}, n_ = ["value"], r_ = { class: "flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800" }, o_ = {
  key: 0,
  class: "p-4"
}, i_ = {
  key: 1,
  class: "p-4"
}, a_ = {
  key: 2,
  class: "space-y-1 p-4"
}, s_ = { class: "flex gap-2" }, l_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, u_ = {
  key: 3,
  class: "space-y-4 p-4"
}, c_ = ["value"], d_ = { key: 0 }, f_ = ["value"], p_ = { key: 1 }, h_ = ["value"], m_ = { key: 2 }, v_ = {
  key: 3,
  class: "rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400"
}, g_ = {
  key: 4,
  class: "space-y-1 p-4"
}, y_ = { class: "flex gap-2" }, b_ = { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, x_ = {
  key: 5,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, w_ = {
  key: 1,
  class: "space-y-4 p-4"
}, __ = { class: "flex items-start justify-between gap-2" }, S_ = { class: "font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, E_ = {
  key: 2,
  class: "p-4 text-[11px] text-zinc-500 dark:text-zinc-400"
}, Zt = "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white", kn = "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300", k_ = {
  __name: "NodeInspector",
  props: {
    node: { type: Object, default: null },
    edge: { type: Object, default: null }
  },
  emits: ["remove-node", "remove-edge"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y("config");
    let i = null, a = null;
    Te(
      () => [n.node?.id, n.node?.data?.mode],
      ([u, l]) => {
        u === void 0 || l === void 0 || (u === i && l !== a && Object.assign(n.node.data, mp(l)), i = u, a = l);
      },
      { immediate: !0 }
    ), Te(
      () => n.node,
      (u) => {
        if (!["delay", "wait_reply"].includes(u?.type) || u.data.delay_value) return;
        const { value: l, unit: c } = K1(u.data.seconds || 0);
        u.data.delay_value = l, u.data.delay_unit = c;
      },
      { immediate: !0 }
    ), Te(() => n.node?.id, () => {
      o.value = "config";
    });
    function s() {
      ["delay", "wait_reply"].includes(n.node?.type) && (n.node.data.seconds = pp(n.node.data.delay_value, n.node.data.delay_unit));
    }
    return (u, l) => (C(), I("aside", Zw, [
      e.node ? (C(), I(ge, { key: 0 }, [
        d("div", Jw, [
          d("div", null, [
            d("h3", Qw, W(F(mn)(e.node.type)), 1),
            d("p", e_, W(e.node.id), 1)
          ]),
          e.node.type !== "trigger" ? (C(), I("button", {
            key: 0,
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: l[0] || (l[0] = (c) => r("remove-node", e.node.id))
          }, [
            K(F(Go), { class: "h-3 w-3" }),
            l[12] || (l[12] = Ue(" Excluir ", -1))
          ])) : he("", !0)
        ]),
        e.node.type === "trigger" ? (C(), I("div", t_, [
          d("div", null, [
            d("label", {
              class: X(kn)
            }, "Evento"),
            d("input", {
              class: X([Zt, "opacity-70"]),
              type: "text",
              value: e.node.data.event_class || "",
              disabled: ""
            }, null, 8, n_),
            l[13] || (l[13] = d("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, "Definido pelo gatilho escolhido ao criar o fluxo.", -1))
          ])
        ])) : e.node.type === "send_message" ? (C(), I(ge, { key: 1 }, [
          d("div", r_, [
            d("button", {
              type: "button",
              class: X(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "config" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: l[1] || (l[1] = (c) => o.value = "config")
            }, " Configurar ", 2),
            d("button", {
              type: "button",
              class: X(["border-b-2 px-3 py-2 text-xs font-bold transition", o.value === "preview" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"]),
              onClick: l[2] || (l[2] = (c) => o.value = "preview")
            }, " Pré-visualização ", 2)
          ]),
          o.value === "preview" ? (C(), I("div", o_, [
            K(xp, {
              text: e.node.data.text || e.node.data.question || e.node.data.title || "",
              caption: e.node.data.caption,
              mode: e.node.data.mode,
              "recipient-name": F(bp).customer.name
            }, null, 8, ["text", "caption", "mode", "recipient-name"])
          ])) : (C(), I("div", i_, [
            K(yp, {
              data: e.node.data
            }, null, 8, ["data"])
          ]))
        ], 64)) : e.node.type === "delay" ? (C(), I("div", a_, [
          d("label", {
            class: X(kn),
            for: "zr-delay-value"
          }, "Tempo de espera"),
          d("div", s_, [
            ce(d("input", {
              id: "zr-delay-value",
              "onUpdate:modelValue": l[3] || (l[3] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: X(Zt),
              onChange: s
            }, null, 544), [
              [
                we,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ce(d("select", {
              "onUpdate:modelValue": l[4] || (l[4] = (c) => e.node.data.delay_unit = c),
              class: X(Zt),
              onChange: s
            }, [...l[14] || (l[14] = [
              d("option", { value: "seconds" }, "Segundos", -1),
              d("option", { value: "minutes" }, "Minutos", -1),
              d("option", { value: "hours" }, "Horas", -1),
              d("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [ut, e.node.data.delay_unit]
            ])
          ]),
          d("p", l_, " Aguarda " + W(e.node.data.delay_value || 0) + " " + W(F(oi)(e.node.data.delay_unit)) + " (máximo de 24 horas). O fluxo é retomado automaticamente pela fila. ", 1)
        ])) : e.node.type === "condition" ? (C(), I("div", u_, [
          d("div", null, [
            d("label", {
              class: X(kn),
              for: "zr-kind"
            }, "Regra de validação"),
            ce(d("select", {
              id: "zr-kind",
              "onUpdate:modelValue": l[5] || (l[5] = (c) => e.node.data.kind = c),
              class: X(Zt)
            }, [
              (C(!0), I(ge, null, Re(F(cp), (c) => (C(), I("option", {
                key: c.value,
                value: c.value
              }, W(c.label), 9, c_))), 128))
            ], 512), [
              [ut, e.node.data.kind]
            ])
          ]),
          e.node.data.kind === "order_status_is" ? (C(), I("div", d_, [
            d("label", {
              class: X(kn),
              for: "zr-order-status"
            }, "Status esperado"),
            ce(d("select", {
              id: "zr-order-status",
              "onUpdate:modelValue": l[6] || (l[6] = (c) => e.node.data.value = c),
              class: X(Zt)
            }, [
              (C(!0), I(ge, null, Re(F(dp), (c) => (C(), I("option", {
                key: c.value,
                value: c.value
              }, W(c.label), 9, f_))), 128))
            ], 512), [
              [ut, e.node.data.value]
            ])
          ])) : e.node.data.kind === "payment_method_is" ? (C(), I("div", p_, [
            d("label", {
              class: X(kn),
              for: "zr-payment-method"
            }, "Método de pagamento"),
            ce(d("select", {
              id: "zr-payment-method",
              "onUpdate:modelValue": l[7] || (l[7] = (c) => e.node.data.value = c),
              class: X(Zt)
            }, [
              (C(!0), I(ge, null, Re(F(fp), (c) => (C(), I("option", {
                key: c.value,
                value: c.value
              }, W(c.label), 9, h_))), 128))
            ], 512), [
              [ut, e.node.data.value]
            ])
          ])) : e.node.data.kind === "event_is" ? (C(), I("div", m_, [
            d("label", {
              class: X(kn),
              for: "zr-value"
            }, "Classe do evento"),
            ce(d("input", {
              id: "zr-value",
              "onUpdate:modelValue": l[8] || (l[8] = (c) => e.node.data.value = c),
              type: "text",
              placeholder: "App\\Events\\OrderCompleted",
              class: X(Zt)
            }, null, 512), [
              [
                we,
                e.node.data.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])) : he("", !0),
          e.node.data.kind === "order_is_paid" ? (C(), I("p", v_, " Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera. ")) : he("", !0),
          l[15] || (l[15] = d("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Ue(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            d("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "SIM"),
            Ue(" e outra do ponto "),
            d("strong", { class: "text-rose-600 dark:text-rose-400" }, "NÃO"),
            Ue(" até os próximos blocos. ")
          ], -1))
        ])) : e.node.type === "wait_reply" ? (C(), I("div", g_, [
          d("label", {
            class: X(kn),
            for: "zr-wait-value"
          }, "Tempo máximo de espera"),
          d("div", y_, [
            ce(d("input", {
              id: "zr-wait-value",
              "onUpdate:modelValue": l[9] || (l[9] = (c) => e.node.data.delay_value = c),
              type: "number",
              min: "1",
              class: X(Zt),
              onChange: s
            }, null, 544), [
              [
                we,
                e.node.data.delay_value,
                void 0,
                { number: !0 }
              ]
            ]),
            ce(d("select", {
              "onUpdate:modelValue": l[10] || (l[10] = (c) => e.node.data.delay_unit = c),
              class: X(Zt),
              onChange: s
            }, [...l[16] || (l[16] = [
              d("option", { value: "seconds" }, "Segundos", -1),
              d("option", { value: "minutes" }, "Minutos", -1),
              d("option", { value: "hours" }, "Horas", -1),
              d("option", { value: "days" }, "Dias", -1)
            ])], 544), [
              [ut, e.node.data.delay_unit]
            ])
          ]),
          d("p", b_, " Espera até " + W(e.node.data.delay_value || 0) + " " + W(F(oi)(e.node.data.delay_unit)) + " (máximo de 24 horas) por uma resposta do cliente. ", 1),
          l[17] || (l[17] = d("p", { class: "mt-3 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
            Ue(" Este bloco tem duas saídas: puxe uma linha do ponto "),
            d("strong", { class: "text-emerald-600 dark:text-emerald-400" }, "RESPONDEU"),
            Ue(" (o cliente mandou uma mensagem) e outra do ponto "),
            d("strong", { class: "text-amber-600 dark:text-amber-400" }, "ESGOTOU"),
            Ue(" (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra. ")
          ], -1))
        ])) : (C(), I("p", x_, "Este bloco encerra a execução do fluxo."))
      ], 64)) : e.edge ? (C(), I("div", w_, [
        d("div", __, [
          d("div", null, [
            l[18] || (l[18] = d("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Conexão", -1)),
            d("p", S_, W(e.edge.source) + " → " + W(e.edge.target), 1)
          ]),
          d("button", {
            type: "button",
            class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700",
            onClick: l[11] || (l[11] = (c) => r("remove-edge", e.edge.id))
          }, [
            K(F(Go), { class: "h-3 w-3" }),
            l[19] || (l[19] = Ue(" Excluir ", -1))
          ])
        ]),
        l[20] || (l[20] = d("p", { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, " Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem (SIM ou NÃO) já define o caminho. ", -1))
      ])) : (C(), I("p", E_, "Selecione um bloco ou uma conexão para editar as propriedades."))
    ]));
  }
};
function Zn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function P_(e) {
  return `${e}_${Math.random().toString(36).slice(2, 9)}`;
}
const $_ = {
  condition: { true: "yes", false: "no" },
  wait_reply: { true: "replied", false: "timeout" }
};
function C_(e, t) {
  if (!(t !== "true" && t !== "false"))
    return $_[e]?.[t];
}
function wr(e, t = {}) {
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
  return e === "delay" ? t.delay_value && t.delay_unit ? `Aguardar ${t.delay_value} ${oi(t.delay_unit)}` : `Aguardar ${Math.max(0, Number(t.seconds) || 0)}s` : e === "condition" ? t.kind === "order_status_is" ? `Status do pedido é "${dp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "payment_method_is" ? `Pagamento é "${fp.find((r) => r.value === t.value)?.label || t.value || "…"}"` : t.kind === "event_is" ? `Evento é "${t.value || "…"}"` : cp.find((n) => n.value === t.kind)?.label || "Pedido foi pago?" : e === "wait_reply" ? t.delay_value && t.delay_unit ? `Espera até ${t.delay_value} ${oi(t.delay_unit)}` : `Espera até ${Math.max(0, Number(t.seconds) || 0)}s` : e === "trigger" ? t.event_class || "Evento do fluxo" : "";
}
function z_(e, t = "") {
  const n = Zn(e) ? e : {}, r = Array.isArray(n.nodes) ? n.nodes : [], o = Array.isArray(n.edges) ? n.edges : [], i = r.filter((l) => Zn(l) && l.id).map((l, c) => ({
    id: String(l.id),
    type: String(l.type || "send_message"),
    position: {
      x: Number.isFinite(l.x) ? l.x : 80 + c % 4 * 260,
      y: Number.isFinite(l.y) ? l.y : 120 + Math.floor(c / 4) * 170
    },
    data: Zn(l.data) ? { ...l.data } : {},
    draggable: l.type !== "trigger",
    deletable: l.type !== "trigger"
  }));
  i.some((l) => l.type === "trigger") || i.unshift({
    id: "trigger",
    type: "trigger",
    position: { x: 80, y: 200 },
    data: hp("trigger", t),
    draggable: !1,
    deletable: !1
  });
  const a = new Map(i.map((l) => [l.id, l.type])), s = new Set(i.map((l) => l.id)), u = o.filter((l) => Zn(l) && s.has(String(l.from)) && s.has(String(l.to))).map((l, c) => {
    const f = Zn(l.data) ? { ...l.data } : {};
    return {
      id: `e_${l.from}_${l.to}_${c}`,
      source: String(l.from),
      target: String(l.to),
      // Blocos de condição e "aguardar resposta" têm duas saídas
      // nomeadas; os demais blocos usam a saída única (sourceHandle
      // indefinido).
      sourceHandle: C_(a.get(String(l.from)), f.condition),
      type: "zaprei",
      data: f
    };
  });
  return { nodes: i, edges: u };
}
function A_(e, t) {
  const n = Zn(t) ? { ...t } : {};
  return (e === "delay" || e === "wait_reply") && n.delay_value && n.delay_unit && (n.seconds = pp(n.delay_value, n.delay_unit)), n;
}
function T_(e) {
  if (e === "yes" || e === "replied") return "true";
  if (e === "no" || e === "timeout") return "false";
}
function O_(e, t) {
  return {
    nodes: (e || []).map((n) => ({
      id: n.id,
      type: n.type,
      x: Math.round(n.position?.x ?? 0),
      y: Math.round(n.position?.y ?? 0),
      data: A_(n.type, n.data)
    })),
    edges: (t || []).map((n) => {
      const r = T_(n.sourceHandle);
      return {
        from: n.source,
        to: n.target,
        data: r ? { condition: r } : void 0
      };
    })
  };
}
function N_(e, t, n = "") {
  return {
    id: e === "trigger" ? "trigger" : P_(e),
    type: e,
    position: t,
    data: hp(e, n),
    draggable: e !== "trigger",
    deletable: e !== "trigger",
    label: mn(e)
  };
}
function ot(e) {
  return String(e ?? "").trim();
}
function I_(e) {
  const t = e?.type || "reply";
  return t === "pix" ? ot(e.key) !== "" && ["phone", "email", "cpf", "cnpj", "random"].includes(e.keyType) : ot(e?.displayText ?? e?.text) === "" ? !1 : t === "url" ? ot(e.url) !== "" : t === "call" ? ot(e.phoneNumber) !== "" : t === "copy" ? ot(e.copyCode) !== "" : !0;
}
function R_(e) {
  return ot(e?.title) !== "";
}
function wp(e, t) {
  const n = [];
  switch (e = e || {}, e.recipient_type === "custom" && ot(e.custom_phone) === "" && n.push(`${t}: informe o número de destino.`), e.recipient_type === "group" && ot(e.group_id) === "" && n.push(`${t}: selecione o grupo de destino.`), e.mode) {
    case "buttons":
      (e.buttons || []).some(I_) || n.push(`${t}: nenhum botão válido configurado.`);
      break;
    case "list":
      (e.sections || []).some((r) => (r.rows || []).some(R_)) || n.push(`${t}: adicione ao menos uma opção com título na lista.`);
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
function M_(e) {
  const t = [];
  for (const n of e || []) {
    if (n.type !== "send_message") continue;
    const r = n.data || {}, o = ot(r.mode) || "text";
    t.push(...wp(r, `Bloco "Enviar mensagem" (${o})`));
  }
  return t;
}
const D_ = { class: "flex h-full" }, F_ = { class: "flex w-64 shrink-0 flex-col gap-3 overflow-y-auto border-r border-zinc-200 p-4 dark:border-zinc-800" }, B_ = ["onDragstart", "onDblclick"], L_ = { class: "text-xs font-bold text-zinc-900 dark:text-white" }, U_ = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, q_ = {
  key: 0,
  class: "absolute inset-x-4 top-4 z-10 space-y-1 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-700 shadow-lg dark:border-rose-500/30 dark:bg-rose-950/80 dark:text-rose-300"
}, V_ = { class: "flex items-center gap-1.5 font-bold" }, H_ = { class: "list-disc space-y-0.5 pl-5" }, j_ = { class: "flex items-center justify-between gap-2 text-xs font-bold text-zinc-900 dark:text-white" }, G_ = { class: "flex items-center gap-1.5" }, W_ = { class: "mt-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400" }, X_ = ["onClick"], Y_ = { class: "flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white" }, K_ = { class: "mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400" }, Z_ = ["onClick"], J_ = { class: "flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white" }, Q_ = { class: "mt-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, eS = ["onClick"], tS = { class: "flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white" }, nS = { class: "mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400" }, rS = ["onClick"], oS = { class: "flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white" }, iS = { class: "mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400" }, aS = ["onClick"], sS = { class: "flex items-center justify-between gap-2 text-xs font-bold text-zinc-900 dark:text-white" }, lS = { class: "flex items-center gap-1.5" }, uS = {
  __name: "FlowCanvas",
  props: {
    flow: { type: Object, required: !0 },
    saving: { type: Boolean, default: !1 }
  },
  emits: ["save"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, i = Y([]), a = Y([]), s = Y(null), u = Y(null), l = Y([]), { onConnect: c, addEdges: f, project: v, fitView: y } = Ve(), p = [
      { type: "trigger", title: "Gatilho", desc: "Início do fluxo — define qual evento dispara as mensagens.", icon: rr, color: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400" },
      { type: "send_message", title: "Enviar mensagem", desc: "Texto, mídia ou botões pelo WhatsApp.", icon: jl, color: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400" },
      { type: "delay", title: "Aguardar", desc: "Espera antes de seguir para o próximo bloco.", icon: vs, color: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400" },
      { type: "condition", title: "Condição", desc: "Bifurca o fluxo entre as saídas SIM e NÃO.", icon: Hl, color: "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400" },
      { type: "wait_reply", title: "Aguardar resposta", desc: "Espera o cliente responder, com saída se o tempo esgotar.", icon: Gl, color: "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400" },
      { type: "end", title: "Fim", desc: "Encerra a execução do fluxo.", icon: Vl, color: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400" }
    ], m = J(() => r.flow?.trigger_event || ""), h = J(() => i.value.find((O) => O.id === s.value) || null), g = J(() => a.value.find((O) => O.id === u.value) || null), k = {
      type: "zaprei",
      markerEnd: ei.ArrowClosed,
      data: {}
    };
    Te(
      () => r.flow?.id,
      () => {
        const O = z_(r.flow?.graph_json, m.value);
        i.value = O.nodes, a.value = O.edges, s.value = null, u.value = null, setTimeout(() => y({ padding: 0.2, duration: 200 }), 0);
      },
      { immediate: !0 }
    ), c((O) => {
      f([{ ...O, ...k, data: {} }]);
    });
    function x(O) {
      s.value = O, u.value = null;
    }
    function $(O) {
      u.value = O, s.value = null;
    }
    function T() {
      s.value = null, u.value = null;
    }
    function P(O, E) {
      if (O === "trigger" && i.value.some((w) => w.type === "trigger"))
        return;
      const N = N_(O, E || { x: 420, y: 320 }, m.value);
      i.value = [...i.value, N], x(N.id);
    }
    function b(O) {
      !O || i.value.find((E) => E.id === O)?.type === "trigger" || (i.value = i.value.filter((E) => E.id !== O), a.value = a.value.filter((E) => E.source !== O && E.target !== O), s.value === O && (s.value = null));
    }
    function S(O) {
      a.value = a.value.filter((E) => E.id !== O), u.value === O && (u.value = null);
    }
    function L(O, E) {
      O.dataTransfer?.setData("application/zaprei-node", E), O.dataTransfer.effectAllowed = "move";
    }
    function M(O) {
      O.preventDefault(), O.dataTransfer.dropEffect = "move";
    }
    function z(O) {
      O.preventDefault();
      const E = O.dataTransfer?.getData("application/zaprei-node");
      if (!E) return;
      const N = O.currentTarget.getBoundingClientRect();
      P(E, v({ x: O.clientX - N.left, y: O.clientY - N.top }));
    }
    function _() {
      const O = M_(i.value);
      if (O.length > 0) {
        l.value = O;
        return;
      }
      l.value = [], o("save", O_(i.value, a.value));
    }
    return t({ requestSave: _ }), (O, E) => (C(), I("div", D_, [
      d("aside", F_, [
        E[4] || (E[4] = d("div", null, [
          d("div", { class: "mb-1 text-xs font-black tracking-wider text-zinc-400 uppercase" }, "Componentes"),
          d("p", { class: "mb-3 text-xs text-zinc-500 dark:text-zinc-400" }, "Arraste para o canvas ou clique duas vezes para adicionar:")
        ], -1)),
        (C(), I(ge, null, Re(p, (N) => d("div", {
          key: N.type,
          class: "group relative flex cursor-grab items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 shadow-2xs transition select-none hover:border-emerald-500/40 hover:bg-white hover:shadow-md active:cursor-grabbing dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/40",
          draggable: "true",
          onDragstart: (w) => L(w, N.type),
          onDblclick: (w) => P(N.type)
        }, [
          d("div", {
            class: X(["flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border", N.color])
          }, [
            (C(), Fe(zt(N.icon), { class: "h-4 w-4" }))
          ], 2),
          d("div", null, [
            d("div", L_, W(N.title), 1),
            d("div", U_, W(N.desc), 1)
          ])
        ], 40, B_)), 64)),
        E[5] || (E[5] = d("div", { class: "mt-auto border-t border-zinc-100 pt-6 text-[11px] text-zinc-400 dark:border-zinc-800/80" }, " 💡 Dica: conecte puxando do ponto de saída para o ponto de entrada de outro bloco. ", -1))
      ]),
      d("main", {
        class: "relative flex-1 bg-zinc-50/60 dark:bg-zinc-950/80",
        onDragover: M,
        onDrop: z
      }, [
        l.value.length > 0 ? (C(), I("div", q_, [
          d("div", V_, [
            K(F(Zs), { class: "h-3.5 w-3.5" }),
            E[6] || (E[6] = Ue(" Corrija antes de salvar: ", -1))
          ]),
          d("ul", H_, [
            (C(!0), I(ge, null, Re(l.value, (N, w) => (C(), I("li", { key: w }, W(N), 1))), 128))
          ])
        ])) : he("", !0),
        K(F(r1), {
          nodes: i.value,
          "onUpdate:nodes": E[0] || (E[0] = (N) => i.value = N),
          edges: a.value,
          "onUpdate:edges": E[1] || (E[1] = (N) => a.value = N),
          class: "zr-flow-canvas h-full",
          "min-zoom": 0.2,
          "max-zoom": 1.8,
          "default-edge-options": k,
          onNodeClick: E[2] || (E[2] = (N) => x(N.node?.id)),
          onEdgeClick: E[3] || (E[3] = (N) => $(N.edge?.id)),
          onPaneClick: T
        }, {
          "edge-zaprei": it((N) => [
            K(H1, vi(N, { onRemove: S }), null, 16)
          ]),
          "node-trigger": it((N) => [
            d("div", {
              class: X(["min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "source",
                position: F(se).Right
              }, null, 8, ["position"]),
              d("div", j_, [
                d("span", G_, [
                  K(F(rr), { class: "h-3.5 w-3.5 text-emerald-500" }),
                  Ue(W(F(mn)("trigger")), 1)
                ]),
                E[7] || (E[7] = d("span", { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, "INÍCIO", -1))
              ]),
              d("div", W_, W(F(wr)("trigger", N.data)), 1)
            ], 2)
          ]),
          "node-send_message": it((N) => [
            d("div", {
              class: X(["relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "target",
                position: F(se).Left
              }, null, 8, ["position"]),
              K(F(lt), {
                type: "source",
                position: F(se).Right
              }, null, 8, ["position"]),
              d("button", {
                type: "button",
                class: "absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                onClick: $n((w) => b(N.id), ["stop"])
              }, [
                K(F(vn), { class: "h-3.5 w-3.5" })
              ], 8, X_),
              d("div", Y_, [
                K(F(jl), { class: "h-3.5 w-3.5 text-blue-500" }),
                Ue(W(F(mn)("send_message")), 1)
              ]),
              d("div", K_, W(F(wr)("send_message", N.data)), 1)
            ], 2)
          ]),
          "node-delay": it((N) => [
            d("div", {
              class: X(["relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "target",
                position: F(se).Left
              }, null, 8, ["position"]),
              K(F(lt), {
                type: "source",
                position: F(se).Right
              }, null, 8, ["position"]),
              d("button", {
                type: "button",
                class: "absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                onClick: $n((w) => b(N.id), ["stop"])
              }, [
                K(F(vn), { class: "h-3.5 w-3.5" })
              ], 8, Z_),
              d("div", J_, [
                K(F(vs), { class: "h-3.5 w-3.5 text-amber-500" }),
                Ue(W(F(mn)("delay")), 1)
              ]),
              d("div", Q_, W(F(wr)("delay", N.data)), 1)
            ], 2)
          ]),
          "node-condition": it((N) => [
            d("div", {
              class: X(["relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 pr-6 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "target",
                position: F(se).Left
              }, null, 8, ["position"]),
              d("button", {
                type: "button",
                class: "absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                onClick: $n((w) => b(N.id), ["stop"])
              }, [
                K(F(vn), { class: "h-3.5 w-3.5" })
              ], 8, eS),
              d("div", tS, [
                K(F(Hl), { class: "h-3.5 w-3.5 text-purple-500" }),
                Ue(W(F(mn)("condition")), 1)
              ]),
              d("div", nS, W(F(wr)("condition", N.data)), 1),
              E[8] || (E[8] = d("span", { class: "pointer-events-none absolute top-[35%] right-4 -translate-y-1/2 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, "SIM", -1)),
              K(F(lt), {
                id: "yes",
                type: "source",
                position: F(se).Right,
                class: "!bg-emerald-500 !border-emerald-600",
                style: { top: "35%" }
              }, null, 8, ["position"]),
              E[9] || (E[9] = d("span", { class: "pointer-events-none absolute top-[65%] right-4 -translate-y-1/2 rounded-full bg-rose-500/10 px-1.5 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400" }, "NÃO", -1)),
              K(F(lt), {
                id: "no",
                type: "source",
                position: F(se).Right,
                class: "!bg-rose-500 !border-rose-600",
                style: { top: "65%" }
              }, null, 8, ["position"])
            ], 2)
          ]),
          "node-wait_reply": it((N) => [
            d("div", {
              class: X(["relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 pr-6 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "target",
                position: F(se).Left
              }, null, 8, ["position"]),
              d("button", {
                type: "button",
                class: "absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                onClick: $n((w) => b(N.id), ["stop"])
              }, [
                K(F(vn), { class: "h-3.5 w-3.5" })
              ], 8, rS),
              d("div", oS, [
                K(F(Gl), { class: "h-3.5 w-3.5 text-teal-500" }),
                Ue(W(F(mn)("wait_reply")), 1)
              ]),
              d("div", iS, W(F(wr)("wait_reply", N.data)), 1),
              E[10] || (E[10] = d("span", { class: "pointer-events-none absolute top-[35%] right-4 -translate-y-1/2 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400" }, "RESPONDEU", -1)),
              K(F(lt), {
                id: "replied",
                type: "source",
                position: F(se).Right,
                class: "!bg-emerald-500 !border-emerald-600",
                style: { top: "35%" }
              }, null, 8, ["position"]),
              E[11] || (E[11] = d("span", { class: "pointer-events-none absolute top-[65%] right-4 -translate-y-1/2 rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400" }, "ESGOTOU", -1)),
              K(F(lt), {
                id: "timeout",
                type: "source",
                position: F(se).Right,
                class: "!bg-amber-500 !border-amber-600",
                style: { top: "65%" }
              }, null, 8, ["position"])
            ], 2)
          ]),
          "node-end": it((N) => [
            d("div", {
              class: X(["relative min-w-[160px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900", N.selected ? "border-emerald-500 ring-4 ring-emerald-500/20" : "border-zinc-200 dark:border-zinc-700"])
            }, [
              K(F(lt), {
                type: "target",
                position: F(se).Left
              }, null, 8, ["position"]),
              d("button", {
                type: "button",
                class: "absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                onClick: $n((w) => b(N.id), ["stop"])
              }, [
                K(F(vn), { class: "h-3.5 w-3.5" })
              ], 8, aS),
              d("div", sS, [
                d("span", lS, [
                  K(F(Vl), { class: "h-3.5 w-3.5 text-rose-500" }),
                  Ue(W(F(mn)("end")), 1)
                ])
              ])
            ], 2)
          ]),
          default: it(() => [
            K(F(f1), {
              gap: 18,
              "pattern-color": "rgba(120,120,120,0.25)"
            }),
            K(F(V1))
          ]),
          _: 1
        }, 8, ["nodes", "edges"])
      ], 32),
      K(k_, {
        node: h.value,
        edge: g.value,
        onRemoveNode: b,
        onRemoveEdge: S
      }, null, 8, ["node", "edge"])
    ]));
  }
}, cS = { class: "fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white" }, dS = { class: "flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800" }, fS = { class: "flex items-center gap-3" }, pS = ["disabled"], hS = { class: "flex items-center gap-2" }, mS = { class: "flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, vS = { class: "text-sm font-bold" }, gS = ["disabled"], yS = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
}, _p = {
  __name: "FlowEditorModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(!1), i = Y("");
    async function a(s) {
      o.value = !0, i.value = "";
      try {
        await Ae.updateFlow(n.flow.id, { graph_json: s }), r("saved"), r("close");
      } catch (u) {
        i.value = u.message, o.value = !1;
      }
    }
    return (s, u) => (C(), Fe(Bd, { to: "body" }, [
      d("div", cS, [
        d("header", dS, [
          d("div", fS, [
            d("button", {
              type: "button",
              class: "inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
              disabled: o.value,
              onClick: u[0] || (u[0] = (l) => r("close"))
            }, [
              K(F(Ud), { class: "h-4 w-4 text-emerald-500" }),
              u[2] || (u[2] = d("span", null, "Voltar para Automações", -1))
            ], 8, pS),
            u[4] || (u[4] = d("div", { class: "h-5 w-px bg-zinc-200 dark:bg-zinc-800" }, null, -1)),
            d("div", hS, [
              d("div", mS, [
                K(F(Wd), { class: "h-4 w-4" })
              ]),
              d("div", null, [
                d("div", vS, W(e.flow.name || "Editor de Fluxo Visual"), 1),
                u[3] || (u[3] = d("div", { class: "text-[11px] text-zinc-400" }, "Arraste os blocos e conecte os pontos para desenhar o fluxo.", -1))
              ])
            ])
          ]),
          d("button", {
            type: "button",
            disabled: o.value,
            class: "flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60",
            onClick: u[1] || (u[1] = (l) => s.$refs.canvas?.requestSave())
          }, [
            o.value ? (C(), Fe(F(qn), {
              key: 0,
              class: "h-4 w-4 animate-spin"
            })) : (C(), Fe(F(Pm), {
              key: 1,
              class: "h-4 w-4"
            })),
            d("span", null, W(o.value ? "Salvando..." : "Salvar Fluxo"), 1)
          ], 8, gS)
        ]),
        i.value ? (C(), I("p", yS, [
          K(F(Zs), { class: "h-4 w-4 shrink-0" }),
          d("span", null, W(i.value), 1)
        ])) : he("", !0),
        K(uS, {
          ref: "canvas",
          flow: e.flow,
          saving: o.value,
          class: "flex-1 overflow-hidden",
          onSave: a
        }, null, 8, ["flow", "saving"])
      ])
    ]));
  }
}, bS = { class: "truncate" }, xS = {
  key: 0,
  class: "absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
}, wS = {
  key: 0,
  class: "px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400"
}, _S = {
  key: 0,
  class: "mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800"
}, SS = ["checked", "onChange"], ES = { class: "truncate" }, lr = {
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
      i.value && !i.value.contains(y.target) && l();
    }
    function s() {
      o.value ? l() : u();
    }
    function u() {
      o.value = !0, document.addEventListener("click", a, !0);
    }
    function l() {
      o.value = !1, document.removeEventListener("click", a, !0);
    }
    function c(y) {
      r("update:modelValue", n.modelValue.includes(y) ? n.modelValue.filter((p) => p !== y) : [...n.modelValue, y]);
    }
    function f() {
      r("update:modelValue", []);
    }
    mi(() => document.removeEventListener("click", a, !0));
    const v = J(() => {
      if (!n.modelValue.length) return n.placeholder;
      const y = n.matchMode && n.modelValue.length > 1 ? `, ${n.mode === "and" ? "todos" : "qualquer um"}` : "";
      return `${n.placeholder} (${n.modelValue.length}${y})`;
    });
    return (y, p) => (C(), I("div", {
      ref_key: "root",
      ref: i,
      class: "relative"
    }, [
      d("button", {
        type: "button",
        class: "flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white",
        onClick: s
      }, [
        d("span", bS, W(v.value), 1),
        K(F(_m), { class: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
      ]),
      o.value ? (C(), I("div", xS, [
        e.options.length ? (C(), I(ge, { key: 1 }, [
          e.matchMode ? (C(), I("div", _S, [
            d("button", {
              type: "button",
              class: X(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "or" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem pelo menos um dos itens marcados",
              onClick: p[0] || (p[0] = (m) => r("update:mode", "or"))
            }, " Qualquer um (OU) ", 2),
            d("button", {
              type: "button",
              class: X(["flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition", e.mode === "and" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"]),
              title: "Contato tem todos os itens marcados",
              onClick: p[1] || (p[1] = (m) => r("update:mode", "and"))
            }, " Todos (E) ", 2)
          ])) : he("", !0),
          e.modelValue.length ? (C(), I("button", {
            key: 1,
            type: "button",
            class: "mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400",
            onClick: f
          }, " Limpar seleção ")) : he("", !0),
          (C(!0), I(ge, null, Re(e.options, (m) => (C(), I("label", {
            key: m.value,
            class: "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          }, [
            d("span", {
              class: X(["flex h-4 w-4 shrink-0 items-center justify-center rounded border", e.modelValue.includes(m.value) ? "border-emerald-500 bg-emerald-500 text-white" : "border-zinc-300 dark:border-zinc-600"])
            }, [
              e.modelValue.includes(m.value) ? (C(), Fe(F(qd), {
                key: 0,
                class: "h-3 w-3"
              })) : he("", !0)
            ], 2),
            d("input", {
              type: "checkbox",
              class: "hidden",
              checked: e.modelValue.includes(m.value),
              onChange: (h) => c(m.value)
            }, null, 40, SS),
            d("span", ES, W(m.label), 1)
          ]))), 128))
        ], 64)) : (C(), I("p", wS, "Nenhuma opção disponível."))
      ])) : he("", !0)
    ], 512));
  }
}, kS = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm" }, PS = { class: "w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950" }, $S = { class: "flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800" }, CS = { class: "flex items-center gap-2.5" }, zS = { class: "flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, AS = { class: "space-y-4 p-5" }, TS = ["value"], OS = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, NS = { class: "flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800" }, IS = ["disabled"], RS = {
  __name: "FlowSettingsModal",
  props: {
    flow: { type: Object, required: !0 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y([]), i = Y(!1), a = Y(""), s = eo({
      name: n.flow.name || "",
      trigger_event: n.flow.trigger_event || In[0].eventClass,
      product_ids: n.flow.product_ids || []
    }), u = J(() => o.value.map((f) => ({ value: f.id, label: f.name })));
    async function l() {
      try {
        o.value = (await Ae.products()).products || [];
      } catch {
        o.value = [];
      }
    }
    async function c() {
      if (!s.name.trim()) {
        a.value = "Informe um nome para o fluxo.";
        return;
      }
      i.value = !0, a.value = "";
      try {
        await Ae.updateFlow(n.flow.id, {
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
    return Ze(l), (f, v) => (C(), I("div", kS, [
      d("div", PS, [
        d("div", $S, [
          d("div", CS, [
            d("div", zS, [
              K(F(Zd), { class: "h-4 w-4" })
            ]),
            v[5] || (v[5] = d("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Configurar detalhes e produto", -1))
          ]),
          d("button", {
            type: "button",
            class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            onClick: v[0] || (v[0] = (y) => r("close"))
          }, [
            K(F(vn), { class: "h-4 w-4" })
          ])
        ]),
        d("div", AS, [
          d("div", null, [
            v[6] || (v[6] = d("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-name"
            }, "Nome do fluxo", -1)),
            ce(d("input", {
              id: "zr-settings-name",
              "onUpdate:modelValue": v[1] || (v[1] = (y) => s.name = y),
              type: "text",
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, null, 512), [
              [we, s.name]
            ])
          ]),
          d("div", null, [
            v[7] || (v[7] = d("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-event"
            }, "Evento gatilho", -1)),
            ce(d("select", {
              id: "zr-settings-event",
              "onUpdate:modelValue": v[2] || (v[2] = (y) => s.trigger_event = y),
              class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              (C(!0), I(ge, null, Re(F(In), (y) => (C(), I("option", {
                key: y.id,
                value: y.eventClass
              }, W(y.label), 9, TS))), 128))
            ], 512), [
              [ut, s.trigger_event]
            ]),
            v[8] || (v[8] = d("p", { class: "mt-1 text-[11px] text-zinc-500 dark:text-zinc-400" }, " Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente. ", -1))
          ]),
          d("div", null, [
            v[9] || (v[9] = d("label", {
              class: "mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300",
              for: "zr-settings-product"
            }, "Produtos", -1)),
            K(lr, {
              modelValue: s.product_ids,
              "onUpdate:modelValue": v[3] || (v[3] = (y) => s.product_ids = y),
              options: u.value,
              placeholder: "Todos os produtos"
            }, null, 8, ["modelValue", "options"])
          ]),
          a.value ? (C(), I("p", OS, W(a.value), 1)) : he("", !0)
        ]),
        d("div", NS, [
          d("button", {
            type: "button",
            class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: v[4] || (v[4] = (y) => r("close"))
          }, " Cancelar "),
          d("button", {
            type: "button",
            disabled: i.value,
            class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50",
            onClick: c
          }, W(i.value ? "Salvando…" : "Salvar"), 9, IS)
        ])
      ])
    ]));
  }
}, MS = [
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
  }
], DS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, FS = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4" }, BS = ["onClick"], LS = { class: "flex items-center justify-between" }, US = { class: "text-2xl" }, qS = { class: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400" }, VS = { class: "mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400" }, HS = { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, jS = {
  __name: "FlowTemplateGallery",
  emits: ["use"],
  setup(e) {
    return (t, n) => (C(), I("div", DS, [
      n[1] || (n[1] = d("div", { class: "mb-4 flex items-center justify-between" }, [
        d("div", null, [
          d("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, " Modelos Prontos para Usar "),
          d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, " Clique em um modelo para iniciar com a estrutura pré-configurada. ")
        ])
      ], -1)),
      d("div", FS, [
        (C(!0), I(ge, null, Re(F(MS), (r) => (C(), I("button", {
          key: r.id,
          type: "button",
          class: "group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20",
          onClick: (o) => t.$emit("use", r)
        }, [
          d("div", null, [
            d("div", LS, [
              d("span", US, W(r.icon), 1),
              d("span", qS, W(r.badge), 1)
            ]),
            d("h3", VS, W(r.title), 1),
            d("p", HS, W(r.description), 1)
          ]),
          n[0] || (n[0] = d("div", { class: "mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400" }, [
            d("span", null, "Usar modelo"),
            d("span", null, "→")
          ], -1))
        ], 8, BS))), 128))
      ])
    ]));
  }
}, GS = { class: "space-y-4 text-zinc-900 dark:text-white" }, WS = { class: "rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950" }, XS = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, YS = { class: "flex flex-wrap items-center gap-2" }, KS = { class: "relative w-64" }, ZS = ["value"], JS = { class: "flex items-center gap-3" }, QS = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, eE = ["disabled"], tE = {
  key: 0,
  class: "mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
}, nE = { class: "grid gap-3 sm:grid-cols-3" }, rE = ["value"], oE = { class: "flex gap-2" }, iE = ["disabled"], aE = {
  key: 1,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, sE = {
  key: 2,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, lE = {
  key: 3,
  class: "py-10 text-center text-zinc-400"
}, uE = {
  key: 4,
  class: "py-10 text-center"
}, cE = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, dE = {
  key: 5,
  class: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
}, fE = { class: "flex items-start justify-between gap-2" }, pE = { class: "text-[10px] font-semibold text-zinc-400 uppercase" }, hE = { class: "text-sm font-bold text-zinc-900 dark:text-white" }, mE = ["title", "disabled", "onClick"], vE = { class: "mt-2" }, gE = { class: "text-xs text-zinc-500 dark:text-zinc-400" }, yE = { class: "mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800" }, bE = { class: "flex items-center gap-1" }, xE = ["onClick"], wE = ["disabled", "onClick"], _E = ["disabled", "onClick"], SE = ["disabled", "onClick"], EE = ["onClick"], kE = ["onClick"], PE = {
  __name: "FlowsPanel",
  setup(e) {
    const t = Y([]), n = Y([]), r = Y(!0), o = Y(!1), i = Y(""), a = Y(""), s = Y(!1), u = Y(""), l = Y("all"), c = Y(null), f = Y(null), v = Y({ name: "", trigger_event: In[3].eventClass, product_ids: [] }), y = Y(!1), p = J(() => {
      const z = u.value.trim().toLowerCase();
      return t.value.filter((_) => l.value !== "all" && _.trigger_event !== l.value ? !1 : !z || `${_.name} ${Mo(_.trigger_event)}`.toLowerCase().includes(z));
    }), m = J(() => n.value.map((z) => ({ value: z.id, label: z.name })));
    function h(z) {
      if (!z || !z.length) return "Todos os produtos";
      const _ = z.map((O) => n.value.find((E) => E.id === O)?.name).filter(Boolean);
      return _.length ? _.length > 2 ? `${_.slice(0, 2).join(", ")} +${_.length - 2}` : _.join(", ") : "Todos os produtos";
    }
    async function g() {
      r.value = !0, i.value = "";
      try {
        const [z, _] = await Promise.all([Ae.flows(), Ae.products()]);
        t.value = z.flows || [], n.value = _.products || [];
      } catch (z) {
        i.value = z.message;
      } finally {
        r.value = !1;
      }
    }
    async function k(z) {
      o.value = !0, i.value = "";
      try {
        await z(), await g();
      } catch (_) {
        i.value = _.message;
      } finally {
        o.value = !1;
      }
    }
    function x(z) {
      const _ = window.prompt(`Testar "${z.name}" — número de WhatsApp com DDD (ex: 11999998888):`);
      if (!(!_ || !_.trim()))
        return a.value = "", k(async () => {
          await Ae.testFlow(z.id, _.trim()), a.value = `Fluxo "${z.name}" disparado para ${_.trim()}. Confira o WhatsApp e o Histórico de Execuções.`;
        });
    }
    function $() {
      const z = v.value.name.trim() || Mo(v.value.trigger_event);
      return k(async () => {
        await Ae.createFlow({
          name: z,
          trigger_event: v.value.trigger_event,
          product_ids: v.value.product_ids.length ? v.value.product_ids : null,
          is_active: !0,
          graph_json: vp(v.value.trigger_event)
        }), v.value.name = "", v.value.product_ids = [], y.value = !1;
      });
    }
    const T = (z) => k(() => Ae.updateFlow(z.id, { is_active: !z.is_active })), P = (z) => k(() => Ae.duplicateFlow(z.id));
    function b(z) {
      if (window.confirm(`Excluir o fluxo "${z.name}"?`))
        return k(() => Ae.deleteFlow(z.id));
    }
    function S(z) {
      const _ = {
        name: z.name,
        trigger_event: z.trigger_event,
        product_ids: z.product_ids,
        graph_json: z.graph_json
      }, O = new Blob([JSON.stringify(_, null, 2)], { type: "application/json" }), E = URL.createObjectURL(O), N = document.createElement("a");
      N.href = E, N.download = `${(z.name || "fluxo").trim().replace(/[^\w-]+/g, "_").toLowerCase()}.zaprei.json`, N.click(), URL.revokeObjectURL(E);
    }
    async function L(z) {
      const _ = z.target.files?.[0];
      if (_) {
        s.value = !0, i.value = "", a.value = "";
        try {
          const O = JSON.parse(await _.text());
          if (!O || typeof O != "object" || !O.graph_json || !O.trigger_event)
            throw new Error("Arquivo inválido: não parece ser um fluxo exportado do ZapRei.");
          const E = new Set(n.value.map((w) => w.id)), N = (Array.isArray(O.product_ids) ? O.product_ids : []).filter((w) => E.has(w));
          await Ae.createFlow({
            name: O.name ? `${O.name} (importado)` : "Fluxo importado",
            trigger_event: O.trigger_event,
            product_ids: N.length ? N : null,
            graph_json: O.graph_json,
            is_active: !1
          }), a.value = "Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.", await g();
        } catch (O) {
          i.value = O.message || "Não foi possível importar o arquivo.";
        } finally {
          s.value = !1, z.target.value = "";
        }
      }
    }
    function M(z) {
      return k(() => Ae.createFlow({
        name: z.title,
        trigger_event: z.eventClass,
        product_ids: null,
        is_active: !0,
        graph_json: z.graph(z.eventClass)
      }));
    }
    return Ze(g), (z, _) => (C(), I("div", GS, [
      K(jS, { onUse: M }),
      d("div", WS, [
        d("div", XS, [
          d("div", YS, [
            d("div", KS, [
              K(F(Br), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
              ce(d("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (O) => u.value = O),
                type: "text",
                placeholder: "Buscar fluxos...",
                class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              }, null, 512), [
                [we, u.value]
              ])
            ]),
            ce(d("select", {
              "onUpdate:modelValue": _[1] || (_[1] = (O) => l.value = O),
              class: "rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            }, [
              _[9] || (_[9] = d("option", { value: "all" }, "Todos os eventos", -1)),
              (C(!0), I(ge, null, Re(F(In), (O) => (C(), I("option", {
                key: O.id,
                value: O.eventClass
              }, W(O.label), 9, ZS))), 128))
            ], 512), [
              [ut, l.value]
            ])
          ]),
          d("div", JS, [
            d("span", QS, W(p.value.length) + " fluxo(s) cadastrado(s)", 1),
            d("label", {
              class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800", { "opacity-60": s.value }])
            }, [
              K(F(Jd), { class: "h-4 w-4" }),
              d("span", null, W(s.value ? "Importando…" : "Importar"), 1),
              d("input", {
                type: "file",
                accept: ".json,application/json",
                hidden: "",
                disabled: s.value,
                onChange: L
              }, null, 40, eE)
            ], 2),
            d("button", {
              type: "button",
              class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
              onClick: _[2] || (_[2] = (O) => y.value = !y.value)
            }, [
              K(F(Kd), { class: "h-4 w-4" }),
              _[10] || (_[10] = d("span", null, "Novo Fluxo", -1))
            ])
          ])
        ]),
        y.value ? (C(), I("div", tE, [
          d("div", nE, [
            d("div", null, [
              _[11] || (_[11] = d("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-name"
              }, "Nome", -1)),
              ce(d("input", {
                id: "zr-flow-name",
                "onUpdate:modelValue": _[3] || (_[3] = (O) => v.value.name = O),
                type: "text",
                placeholder: "Recuperação de PIX",
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, null, 512), [
                [we, v.value.name]
              ])
            ]),
            d("div", null, [
              _[12] || (_[12] = d("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-event"
              }, "Evento gatilho", -1)),
              ce(d("select", {
                id: "zr-flow-event",
                "onUpdate:modelValue": _[4] || (_[4] = (O) => v.value.trigger_event = O),
                class: "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              }, [
                (C(!0), I(ge, null, Re(F(In), (O) => (C(), I("option", {
                  key: O.id,
                  value: O.eventClass
                }, W(O.label), 9, rE))), 128))
              ], 512), [
                [ut, v.value.trigger_event]
              ])
            ]),
            d("div", null, [
              _[13] || (_[13] = d("label", {
                class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400",
                for: "zr-flow-product"
              }, "Produtos", -1)),
              K(lr, {
                modelValue: v.value.product_ids,
                "onUpdate:modelValue": _[5] || (_[5] = (O) => v.value.product_ids = O),
                options: m.value,
                placeholder: "Todos os produtos"
              }, null, 8, ["modelValue", "options"])
            ])
          ]),
          d("div", oE, [
            d("button", {
              type: "button",
              class: "rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50",
              disabled: o.value,
              onClick: $
            }, " Criar fluxo em branco ", 8, iE),
            d("button", {
              type: "button",
              class: "rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: _[6] || (_[6] = (O) => y.value = !1)
            }, " Cancelar ")
          ])
        ])) : he("", !0),
        i.value ? (C(), I("p", aE, W(i.value), 1)) : a.value ? (C(), I("p", sE, W(a.value), 1)) : he("", !0),
        r.value ? (C(), I("div", lE, [
          K(F(qn), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
          _[14] || (_[14] = d("p", { class: "text-xs font-medium" }, "Carregando fluxos de automação...", -1))
        ])) : p.value.length ? (C(), I("div", dE, [
          (C(!0), I(ge, null, Re(p.value, (O) => (C(), I("div", {
            key: O.id,
            class: "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          }, [
            d("div", null, [
              d("div", fE, [
                d("div", null, [
                  d("span", pE, W(F(Mo)(O.trigger_event)), 1),
                  d("h3", hE, W(O.name), 1)
                ]),
                d("button", {
                  type: "button",
                  class: X(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", O.is_active ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"]),
                  title: O.is_active ? "Ativo — clique para pausar" : "Pausado — clique para ativar",
                  disabled: o.value,
                  onClick: (E) => T(O)
                }, [
                  d("span", {
                    class: X(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", O.is_active ? "translate-x-4" : "translate-x-0"])
                  }, null, 2)
                ], 10, mE)
              ]),
              d("div", vE, [
                d("span", gE, W(h(O.product_ids)), 1)
              ])
            ]),
            d("div", yE, [
              d("div", bE, [
                d("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Configurar detalhes e produto",
                  onClick: (E) => f.value = O
                }, [
                  K(F(Zd), { class: "h-4 w-4" })
                ], 8, xE),
                d("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Duplicar fluxo",
                  disabled: o.value,
                  onClick: (E) => P(O)
                }, [
                  K(F(Hd), { class: "h-4 w-4" })
                ], 8, wE),
                d("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Excluir fluxo",
                  disabled: o.value,
                  onClick: (E) => b(O)
                }, [
                  K(F(Go), { class: "h-4 w-4" })
                ], 8, _E),
                d("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600",
                  title: "Testar fluxo agora, em um número de WhatsApp",
                  disabled: o.value,
                  onClick: (E) => x(O)
                }, [
                  K(F(Lr), { class: "h-4 w-4" })
                ], 8, SE),
                d("button", {
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                  title: "Exportar fluxo como arquivo .json",
                  onClick: (E) => S(O)
                }, [
                  K(F(jd), { class: "h-4 w-4" })
                ], 8, EE)
              ]),
              d("button", {
                type: "button",
                class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700",
                onClick: (E) => c.value = O
              }, [
                K(F(Xd), { class: "h-3.5 w-3.5" }),
                _[17] || (_[17] = d("span", null, "Editar Visual", -1))
              ], 8, kE)
            ])
          ]))), 128))
        ])) : (C(), I("div", uE, [
          d("div", cE, [
            K(F(rr), { class: "h-6 w-6" })
          ]),
          _[15] || (_[15] = d("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum fluxo encontrado", -1)),
          _[16] || (_[16] = d("p", { class: "mt-1 text-xs text-zinc-500 dark:text-zinc-400" }, " Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto. ", -1))
        ]))
      ]),
      c.value ? (C(), Fe(_p, {
        key: 0,
        flow: c.value,
        onClose: _[7] || (_[7] = (O) => c.value = null),
        onSaved: g
      }, null, 8, ["flow"])) : he("", !0),
      f.value ? (C(), Fe(RS, {
        key: 1,
        flow: f.value,
        onClose: _[8] || (_[8] = (O) => f.value = null),
        onSaved: g
      }, null, 8, ["flow"])) : he("", !0)
    ]));
  }
}, $E = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, CE = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, zE = { class: "flex items-center gap-2" }, AE = ["disabled"], TE = { class: "mt-4 grid grid-cols-3 gap-3" }, OE = { class: "rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50" }, NE = { class: "text-xl font-bold text-zinc-900 dark:text-white" }, IE = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, RE = { class: "text-xl font-bold text-emerald-700 dark:text-emerald-400" }, ME = { class: "rounded-xl border border-blue-500/20 bg-blue-500/5 p-3" }, DE = { class: "text-xl font-bold text-blue-700 dark:text-blue-400" }, FE = { class: "mt-4 flex flex-wrap items-end gap-2" }, BE = { class: "w-48" }, LE = { class: "w-48" }, UE = { class: "pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400" }, qE = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, VE = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, HE = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, jE = {
  key: 3,
  class: "py-10 text-center"
}, GE = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, WE = {
  key: 4,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, XE = { class: "w-full text-left text-xs" }, YE = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, KE = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, ZE = { class: "px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300" }, JE = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, QE = { class: "px-3 py-2.5" }, e2 = { class: "px-3 py-2.5" }, t2 = {
  key: 0,
  class: "flex max-w-[220px] flex-wrap gap-1"
}, n2 = ["title"], r2 = {
  key: 0,
  class: "text-[10px] text-zinc-500 dark:text-zinc-400"
}, o2 = {
  key: 1,
  class: "text-zinc-400 dark:text-zinc-500"
}, i2 = { class: "px-3 py-2.5" }, a2 = ["onClick"], s2 = {
  __name: "ContactsPanel",
  setup(e) {
    const t = [
      ["nome", "email", "telefone", "produtos"],
      ["João Silva", "joao@exemplo.com", "11999998888", "Curso de Marketing;Curso de Vendas"],
      ["Maria Souza", "maria@exemplo.com", "21988887777", "Mentoria VIP"],
      ["Pedro Santos", "pedro@exemplo.com", "31977776666", ""]
    ], n = Y([]), r = Y([]), o = Y({ all: 0, buyers: 0, imported: 0 }), i = Y(!0), a = Y(""), s = Y(""), u = Y("all"), l = Y([]), c = Y("or"), f = Y([]), v = Y(""), y = Y(!1), p = J(() => r.value.map((T) => ({ value: T.name, label: T.name }))), m = J(() => {
      const T = v.value.trim().toLowerCase();
      return n.value.filter((P) => u.value === "buyer" && P.source !== "buyer" || u.value === "imported" && P.source !== "imported" || l.value.length && !(c.value === "and" ? l.value.every((S) => P.products.includes(S)) : P.products.some((S) => l.value.includes(S))) || f.value.length && P.products.some((b) => f.value.includes(b)) ? !1 : !T || `${P.name} ${P.phone} ${P.email}`.toLowerCase().includes(T));
    });
    async function h() {
      i.value = !0, a.value = "";
      try {
        const [T, P] = await Promise.all([Ae.contacts(), Ae.products()]);
        n.value = T.contacts || [], o.value = T.counts || o.value, r.value = P.products || [];
      } catch (T) {
        a.value = T.message;
      } finally {
        i.value = !1;
      }
    }
    Ze(h);
    const g = "\uFEFF";
    function k() {
      const T = t.map((L) => L.join(",")).join(`\r
`), P = new Blob([g + T], { type: "text/csv;charset=utf-8" }), b = URL.createObjectURL(P), S = document.createElement("a");
      S.href = b, S.download = "zaprei-modelo-importacao.csv", S.click(), URL.revokeObjectURL(b);
    }
    async function x(T) {
      const P = T.target.files?.[0];
      if (P) {
        y.value = !0, a.value = "", s.value = "";
        try {
          const { imported: b } = await Ae.importContacts(P);
          s.value = `${b} contato(s) importado(s).`, await h();
        } catch (b) {
          a.value = b.message;
        } finally {
          y.value = !1, T.target.value = "";
        }
      }
    }
    async function $(T) {
      if (window.confirm(`Remover ${T.name}?`)) {
        a.value = "";
        try {
          await Ae.deleteContact(T.id), await h();
        } catch (P) {
          a.value = P.message;
        }
      }
    }
    return (T, P) => (C(), I("div", $E, [
      d("div", CE, [
        P[6] || (P[6] = d("div", null, [
          d("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Base de Contatos"),
          d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores extraídos das vendas + listas importadas por CSV.")
        ], -1)),
        d("div", zE, [
          d("button", {
            type: "button",
            class: "flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
            onClick: k
          }, [
            K(F(jd), { class: "h-4 w-4" }),
            P[5] || (P[5] = d("span", null, "Baixar exemplo", -1))
          ]),
          d("label", {
            class: X(["flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700", { "opacity-60": y.value }])
          }, [
            K(F(Jd), { class: "h-4 w-4" }),
            d("span", null, W(y.value ? "Importando…" : "Importar CSV"), 1),
            d("input", {
              type: "file",
              accept: ".csv,text/csv",
              hidden: "",
              disabled: y.value,
              onChange: x
            }, null, 40, AE)
          ], 2)
        ])
      ]),
      d("div", TE, [
        d("div", OE, [
          d("div", NE, W(o.value.all), 1),
          P[7] || (P[7] = d("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Total de contatos", -1))
        ]),
        d("div", IE, [
          d("div", RE, W(o.value.buyers), 1),
          P[8] || (P[8] = d("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Compradores", -1))
        ]),
        d("div", ME, [
          d("div", DE, W(o.value.imported), 1),
          P[9] || (P[9] = d("div", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Importados", -1))
        ])
      ]),
      d("div", FE, [
        d("div", null, [
          P[11] || (P[11] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Origem", -1)),
          ce(d("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (b) => u.value = b),
            class: "w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, [...P[10] || (P[10] = [
            d("option", { value: "all" }, "Todas as origens", -1),
            d("option", { value: "buyer" }, "Apenas compradores", -1),
            d("option", { value: "imported" }, "Apenas importados", -1)
          ])], 512), [
            [ut, u.value]
          ])
        ]),
        d("div", BE, [
          P[12] || (P[12] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Comprou o produto", -1)),
          K(lr, {
            modelValue: l.value,
            "onUpdate:modelValue": P[1] || (P[1] = (b) => l.value = b),
            mode: c.value,
            "onUpdate:mode": P[2] || (P[2] = (b) => c.value = b),
            options: p.value,
            placeholder: "Todos os produtos",
            "match-mode": ""
          }, null, 8, ["modelValue", "mode", "options"])
        ]),
        d("div", LE, [
          P[13] || (P[13] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" }, "Exceto quem comprou", -1)),
          K(lr, {
            modelValue: f.value,
            "onUpdate:modelValue": P[3] || (P[3] = (b) => f.value = b),
            options: p.value,
            placeholder: "Nenhuma exclusão"
          }, null, 8, ["modelValue", "options"])
        ]),
        ce(d("input", {
          "onUpdate:modelValue": P[4] || (P[4] = (b) => v.value = b),
          type: "search",
          placeholder: "Buscar por nome, telefone, e-mail...",
          class: "w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        }, null, 512), [
          [we, v.value]
        ]),
        d("span", UE, W(m.value.length) + " de " + W(n.value.length) + " contato(s)", 1)
      ]),
      P[17] || (P[17] = d("p", { class: "mt-2 text-[11px] text-zinc-500 dark:text-zinc-400" }, [
        Ue(" O CSV aceita as colunas "),
        d("span", { class: "font-mono" }, "nome, email, telefone, produtos"),
        Ue(" (máximo de 10 MB). ")
      ], -1)),
      a.value ? (C(), I("p", qE, W(a.value), 1)) : s.value ? (C(), I("p", VE, W(s.value), 1)) : he("", !0),
      i.value ? (C(), I("div", HE, [
        K(F(qn), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        P[14] || (P[14] = d("p", { class: "text-xs font-medium" }, "Carregando contatos...", -1))
      ])) : m.value.length ? (C(), I("div", WE, [
        d("table", XE, [
          P[16] || (P[16] = d("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            d("tr", null, [
              d("th", { class: "px-3 py-2.5" }, "Contato"),
              d("th", { class: "px-3 py-2.5" }, "Telefone"),
              d("th", { class: "px-3 py-2.5" }, "E-mail"),
              d("th", { class: "px-3 py-2.5" }, "Origem"),
              d("th", { class: "px-3 py-2.5" }, "Produtos"),
              d("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          d("tbody", YE, [
            (C(!0), I(ge, null, Re(m.value, (b) => (C(), I("tr", {
              key: b.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              d("td", KE, W(b.name), 1),
              d("td", ZE, W(b.phone), 1),
              d("td", JE, W(b.email || "—"), 1),
              d("td", QE, [
                d("span", {
                  class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", b.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"])
                }, W(b.origin), 3)
              ]),
              d("td", e2, [
                b.products.length ? (C(), I("div", t2, [
                  (C(!0), I(ge, null, Re(b.products.slice(0, 2), (S) => (C(), I("span", {
                    key: S,
                    class: "max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
                    title: S
                  }, W(S), 9, n2))), 128)),
                  b.products.length > 2 ? (C(), I("span", r2, "+" + W(b.products.length - 2), 1)) : he("", !0)
                ])) : (C(), I("span", o2, "—"))
              ]),
              d("td", i2, [
                b.can_delete ? (C(), I("button", {
                  key: 0,
                  type: "button",
                  class: "rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600",
                  title: "Remover",
                  onClick: (S) => $(b)
                }, [
                  K(F(Go), { class: "h-3.5 w-3.5" })
                ], 8, a2)) : he("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : (C(), I("div", jE, [
        d("div", GE, [
          K(F(Qd), { class: "h-6 w-6" })
        ]),
        P[15] || (P[15] = d("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum contato encontrado com esses filtros", -1))
      ]))
    ]));
  }
}, l2 = { class: "fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" }, u2 = { class: "flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl" }, c2 = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4" }, d2 = { class: "flex items-center gap-3" }, f2 = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, p2 = { class: "flex items-center gap-2" }, h2 = { key: 1 }, m2 = {
  key: 0,
  class: "flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400"
}, v2 = { class: "flex-1 overflow-y-auto p-6" }, g2 = {
  key: 0,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, y2 = { class: "space-y-2" }, b2 = { class: "grid grid-cols-2 gap-3" }, x2 = { class: "flex items-center gap-2" }, w2 = { class: "flex items-center gap-2" }, _2 = {
  key: 0,
  class: "mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4"
}, S2 = { class: "flex items-center gap-1.5 text-xs font-bold text-emerald-400" }, E2 = ["min"], k2 = { class: "space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4" }, P2 = { class: "flex items-center justify-between" }, $2 = { class: "flex items-center gap-2" }, C2 = { class: "text-xs font-bold text-emerald-400" }, z2 = {
  key: 1,
  class: "space-y-4"
}, A2 = { class: "grid grid-cols-1 gap-3 md:grid-cols-3" }, T2 = { class: "dark space-y-3" }, O2 = { class: "relative" }, N2 = { class: "flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5" }, I2 = { class: "mt-0.5 text-2xl font-black text-emerald-400" }, R2 = { class: "text-xs font-normal text-zinc-500" }, M2 = { class: "max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30" }, D2 = { class: "w-full text-left text-xs" }, F2 = { class: "sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400" }, B2 = { class: "w-10 px-3 py-2.5 text-center" }, L2 = ["checked"], U2 = { class: "divide-y divide-zinc-800/60" }, q2 = ["onClick"], V2 = ["checked", "onChange"], H2 = { class: "px-3 py-2" }, j2 = { class: "font-medium text-white" }, G2 = { class: "text-[11px] text-zinc-500" }, W2 = { class: "px-3 py-2 font-mono text-zinc-300" }, X2 = { class: "px-3 py-2" }, Y2 = { class: "px-3 py-2" }, K2 = { class: "flex max-w-[200px] flex-wrap gap-1" }, Z2 = {
  key: 0,
  class: "text-[10px] text-zinc-500"
}, J2 = {
  key: 0,
  class: "py-8 text-center text-xs text-zinc-500"
}, Q2 = {
  key: 1,
  class: "py-8 text-center text-xs text-zinc-500"
}, ek = {
  key: 2,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2"
}, tk = { class: "dark" }, nk = {
  key: 3,
  class: "mx-auto max-w-xl space-y-5 py-2"
}, rk = { class: "space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5" }, ok = { class: "grid grid-cols-2 gap-3 text-xs" }, ik = { class: "mt-0.5 font-semibold text-white" }, ak = { class: "mt-0.5 text-base font-black text-emerald-400" }, sk = { class: "mt-0.5 text-zinc-300" }, lk = { class: "text-xs text-zinc-500" }, uk = { class: "mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300" }, ck = { class: "flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4" }, dk = { key: 1 }, fk = { class: "flex items-center gap-3" }, pk = ["disabled"], hk = {
  __name: "CampaignWizard",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, r = Y(1), o = Y(!1), i = Y(""), a = Y([]), s = Y([]), u = Y(!1), l = Y("all"), c = Y([]), f = Y("or"), v = Y([]), y = Y(""), p = Y({
      name: "",
      schedule_mode: "immediate",
      scheduled_at: "",
      throttle_seconds: 8,
      selected_contact_keys: [],
      message_data: { mode: "text", recipient_type: "customer", text: "" }
    }), m = J(() => new Date(Date.now() + 5 * 6e4).toISOString().slice(0, 16)), h = up.filter((N) => N.token.startsWith("{{customer."));
    let g = !0;
    Te(() => p.value.message_data.mode, (N) => {
      if (g) {
        g = !1;
        return;
      }
      Object.assign(p.value.message_data, mp(N));
    });
    const k = J(() => s.value.map((N) => ({ value: N.name, label: N.name }))), x = J(() => {
      const N = y.value.trim().toLowerCase();
      return a.value.filter((w) => l.value === "buyers" && w.source !== "buyer" || l.value === "imported" && w.source !== "imported" || c.value.length && !(f.value === "and" ? c.value.every((B) => w.products.includes(B)) : w.products.some((B) => c.value.includes(B))) || v.value.length && w.products.some((U) => v.value.includes(U)) ? !1 : !N || `${w.name} ${w.phone}`.toLowerCase().includes(N));
    }), $ = J(() => x.value.length > 0 && x.value.every((N) => p.value.selected_contact_keys.includes(N.id)));
    function T(N) {
      const w = p.value.selected_contact_keys;
      p.value.selected_contact_keys = w.includes(N) ? w.filter((U) => U !== N) : [...w, N];
    }
    function P() {
      const N = x.value.map((w) => w.id);
      p.value.selected_contact_keys = [.../* @__PURE__ */ new Set([...p.value.selected_contact_keys, ...N])];
    }
    function b() {
      const N = new Set(x.value.map((w) => w.id));
      p.value.selected_contact_keys = p.value.selected_contact_keys.filter((w) => !N.has(w));
    }
    const S = J(() => a.value.find((w) => p.value.selected_contact_keys.includes(w.id)) || { name: "Cliente" }), L = J(() => ({
      customer: { name: S.value.name, first_name: (S.value.name || "").split(" ")[0] || S.value.name }
    })), M = J(() => {
      const N = p.value.message_data;
      return Ts(N.text || N.question || N.title || "", L.value);
    }), z = J(() => Ts(p.value.message_data.caption || "", L.value));
    async function _() {
      u.value = !0;
      try {
        const [N, w] = await Promise.all([Ae.contacts(), Ae.products()]);
        a.value = N.contacts || [], s.value = w.products || [];
      } catch {
        a.value = [];
      } finally {
        u.value = !1;
      }
    }
    function O() {
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
        const N = wp(p.value.message_data, "Mensagem");
        if (N.length) {
          i.value = N[0];
          return;
        }
      }
      r.value++;
    }
    async function E() {
      o.value = !0, i.value = "";
      try {
        await Ae.createCampaign({
          name: p.value.name,
          message_data: p.value.message_data,
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
    return Ze(_), (N, w) => (C(), I("div", l2, [
      d("div", u2, [
        d("div", c2, [
          d("div", d2, [
            d("div", f2, [
              K(F(Lr), { class: "h-5 w-5" })
            ]),
            w[14] || (w[14] = d("div", null, [
              d("h3", { class: "text-base font-bold text-white" }, "Criar Nova Campanha WhatsApp"),
              d("p", { class: "text-xs text-zinc-400" }, "Disparo em massa imediato ou agendado com proteção anti-bloqueio")
            ], -1))
          ]),
          d("div", p2, [
            (C(), I(ge, null, Re(4, (U) => d("div", {
              key: U,
              class: X(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition", r.value === U ? "bg-emerald-500 text-zinc-950" : r.value > U ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"])
            }, [
              r.value > U ? (C(), Fe(F(qd), {
                key: 0,
                class: "h-3.5 w-3.5"
              })) : (C(), I("span", h2, W(U), 1))
            ], 2)), 64))
          ])
        ]),
        i.value ? (C(), I("div", m2, [
          K(F(Zs), { class: "h-4 w-4 shrink-0" }),
          d("span", null, W(i.value), 1)
        ])) : he("", !0),
        d("div", v2, [
          r.value === 1 ? (C(), I("div", g2, [
            d("div", null, [
              w[15] || (w[15] = d("label", {
                class: "mb-1.5 block text-xs font-semibold text-zinc-300",
                for: "zr-name"
              }, "Nome da Campanha *", -1)),
              ce(d("input", {
                id: "zr-name",
                "onUpdate:modelValue": w[0] || (w[0] = (U) => p.value.name = U),
                type: "text",
                placeholder: "Ex: Oferta Especial Black Friday",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [we, p.value.name]
              ]),
              w[16] || (w[16] = d("p", { class: "mt-1 text-[11px] text-zinc-500" }, "Identificador interno para relatórios e histórico.", -1))
            ]),
            d("div", y2, [
              w[23] || (w[23] = d("label", { class: "block text-xs font-semibold text-zinc-300" }, "Programação de Envio *", -1)),
              d("div", b2, [
                d("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "immediate" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[1] || (w[1] = (U) => p.value.schedule_mode = "immediate")
                }, [
                  d("div", x2, [
                    K(F(rr), { class: "h-4 w-4 text-emerald-400" }),
                    w[17] || (w[17] = d("span", { class: "text-xs font-bold" }, "Disparo Imediato", -1))
                  ]),
                  w[18] || (w[18] = d("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Inicia o envio assim que confirmar.", -1))
                ], 2),
                d("button", {
                  type: "button",
                  class: X(["flex flex-col justify-between rounded-xl border p-3.5 text-left transition", p.value.schedule_mode === "scheduled" ? "border-emerald-500 bg-emerald-500/10 text-white shadow-sm" : "border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700"]),
                  onClick: w[2] || (w[2] = (U) => p.value.schedule_mode = "scheduled")
                }, [
                  d("div", w2, [
                    K(F(Ki), { class: "h-4 w-4 text-emerald-400" }),
                    w[19] || (w[19] = d("span", { class: "text-xs font-bold" }, "Agendar Envio", -1))
                  ]),
                  w[20] || (w[20] = d("p", { class: "mt-1 text-[10px] text-zinc-400" }, "Programa data e hora futura.", -1))
                ], 2)
              ]),
              p.value.schedule_mode === "scheduled" ? (C(), I("div", _2, [
                d("label", S2, [
                  K(F(vs), { class: "h-3.5 w-3.5" }),
                  w[21] || (w[21] = d("span", null, "Data e Horário de Início do Disparo *", -1))
                ]),
                ce(d("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (U) => p.value.scheduled_at = U),
                  type: "datetime-local",
                  min: m.value,
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, null, 8, E2), [
                  [we, p.value.scheduled_at]
                ]),
                w[22] || (w[22] = d("p", { class: "text-[11px] text-zinc-400" }, [
                  Ue(" A campanha ficará com status "),
                  d("strong", { class: "text-purple-400" }, "Agendada"),
                  Ue(" e a fila iniciará automaticamente no momento programado. ")
                ], -1))
              ])) : he("", !0)
            ]),
            d("div", k2, [
              d("div", P2, [
                d("div", $2, [
                  K(F($m), { class: "h-4 w-4 text-emerald-400" }),
                  w[24] || (w[24] = d("label", { class: "text-xs font-semibold text-white" }, "Intervalo Médio Anti-Bloqueio", -1))
                ]),
                d("span", C2, W(p.value.throttle_seconds) + " segundos", 1)
              ]),
              ce(d("input", {
                "onUpdate:modelValue": w[4] || (w[4] = (U) => p.value.throttle_seconds = U),
                type: "range",
                min: "3",
                max: "30",
                step: "1",
                class: "w-full cursor-pointer accent-emerald-500"
              }, null, 512), [
                [
                  we,
                  p.value.throttle_seconds,
                  void 0,
                  { number: !0 }
                ]
              ]),
              w[25] || (w[25] = d("p", { class: "text-[11px] text-zinc-400" }, " Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios. ", -1))
            ])
          ])) : r.value === 2 ? (C(), I("div", z2, [
            d("div", A2, [
              d("div", T2, [
                d("div", null, [
                  w[26] || (w[26] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Comprou o produto", -1)),
                  K(lr, {
                    modelValue: c.value,
                    "onUpdate:modelValue": w[5] || (w[5] = (U) => c.value = U),
                    mode: f.value,
                    "onUpdate:mode": w[6] || (w[6] = (U) => f.value = U),
                    options: k.value,
                    placeholder: "Todos os produtos",
                    "match-mode": ""
                  }, null, 8, ["modelValue", "mode", "options"])
                ]),
                d("div", null, [
                  w[27] || (w[27] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Exceto quem comprou", -1)),
                  K(lr, {
                    modelValue: v.value,
                    "onUpdate:modelValue": w[7] || (w[7] = (U) => v.value = U),
                    options: k.value,
                    placeholder: "Nenhuma exclusão"
                  }, null, 8, ["modelValue", "options"]),
                  w[28] || (w[28] = d("p", { class: "mt-0.5 text-[10px] text-zinc-500" }, "Ex.: comprou X e não comprou Y — indique X acima e Y aqui.", -1))
                ])
              ]),
              d("div", null, [
                w[30] || (w[30] = d("label", { class: "mb-1 block text-[11px] font-medium text-zinc-400" }, "Origem dos Contatos", -1)),
                ce(d("select", {
                  "onUpdate:modelValue": w[8] || (w[8] = (U) => l.value = U),
                  class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                }, [...w[29] || (w[29] = [
                  d("option", { value: "all" }, "Todos (Compradores + Importados)", -1),
                  d("option", { value: "buyers" }, "Apenas Compradores do Checkout", -1),
                  d("option", { value: "imported" }, "Apenas Contatos Importados (CSV)", -1)
                ])], 512), [
                  [ut, l.value]
                ]),
                w[31] || (w[31] = d("label", { class: "mt-2 mb-1 block text-[11px] font-medium text-zinc-400" }, "Busca rápida", -1)),
                d("div", O2, [
                  K(F(Br), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
                  ce(d("input", {
                    "onUpdate:modelValue": w[9] || (w[9] = (U) => y.value = U),
                    type: "text",
                    placeholder: "Nome, telefone...",
                    class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                  }, null, 512), [
                    [we, y.value]
                  ])
                ])
              ]),
              d("div", N2, [
                d("div", null, [
                  w[32] || (w[32] = d("span", { class: "text-[11px] text-zinc-400" }, "Destinatários Selecionados", -1)),
                  d("div", I2, [
                    Ue(W(p.value.selected_contact_keys.length) + " ", 1),
                    d("span", R2, "de " + W(x.value.length) + " filtrados", 1)
                  ])
                ]),
                d("div", { class: "flex items-center gap-2 border-t border-zinc-800 pt-2" }, [
                  d("button", {
                    type: "button",
                    class: "text-xs font-medium text-emerald-400 hover:underline",
                    onClick: P
                  }, "Selecionar Todos"),
                  w[33] || (w[33] = d("span", { class: "text-zinc-600" }, "•", -1)),
                  d("button", {
                    type: "button",
                    class: "text-xs text-zinc-400 hover:underline",
                    onClick: b
                  }, "Desmarcar Todos")
                ])
              ])
            ]),
            d("div", M2, [
              d("table", D2, [
                d("thead", F2, [
                  d("tr", null, [
                    d("th", B2, [
                      d("input", {
                        type: "checkbox",
                        checked: $.value,
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: w[10] || (w[10] = (U) => $.value ? b() : P())
                      }, null, 40, L2)
                    ]),
                    w[34] || (w[34] = d("th", { class: "px-3 py-2.5" }, "Nome / Email", -1)),
                    w[35] || (w[35] = d("th", { class: "px-3 py-2.5" }, "Telefone", -1)),
                    w[36] || (w[36] = d("th", { class: "px-3 py-2.5" }, "Origem", -1)),
                    w[37] || (w[37] = d("th", { class: "px-3 py-2.5" }, "Produtos", -1))
                  ])
                ]),
                d("tbody", U2, [
                  (C(!0), I(ge, null, Re(x.value, (U) => (C(), I("tr", {
                    key: U.id,
                    class: X(["cursor-pointer transition", p.value.selected_contact_keys.includes(U.id) ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-zinc-800/40"]),
                    onClick: (B) => T(U.id)
                  }, [
                    d("td", {
                      class: "w-10 px-3 py-2 text-center",
                      onClick: w[11] || (w[11] = $n(() => {
                      }, ["stop"]))
                    }, [
                      d("input", {
                        type: "checkbox",
                        checked: p.value.selected_contact_keys.includes(U.id),
                        class: "rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0",
                        onChange: (B) => T(U.id)
                      }, null, 40, V2)
                    ]),
                    d("td", H2, [
                      d("div", j2, W(U.name), 1),
                      d("div", G2, W(U.email || "-"), 1)
                    ]),
                    d("td", W2, W(U.phone), 1),
                    d("td", X2, [
                      d("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", U.source === "buyer" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"])
                      }, W(U.origin), 3)
                    ]),
                    d("td", Y2, [
                      d("div", K2, [
                        (C(!0), I(ge, null, Re(U.products.slice(0, 2), (B) => (C(), I("span", {
                          key: B,
                          class: "max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300"
                        }, W(B), 1))), 128)),
                        U.products.length > 2 ? (C(), I("span", Z2, "+" + W(U.products.length - 2), 1)) : he("", !0)
                      ])
                    ])
                  ], 10, q2))), 128))
                ])
              ]),
              u.value ? (C(), I("p", J2, "Carregando contatos...")) : x.value.length ? he("", !0) : (C(), I("p", Q2, "Nenhum contato encontrado com esses filtros."))
            ])
          ])) : r.value === 3 ? (C(), I("div", ek, [
            d("div", tk, [
              K(yp, {
                data: p.value.message_data,
                "show-recipient": !1,
                variables: F(h)
              }, null, 8, ["data", "variables"])
            ]),
            d("div", null, [
              w[38] || (w[38] = d("span", { class: "mb-2 block text-xs font-semibold text-zinc-400" }, "Simulador de Pré-visualização", -1)),
              K(xp, {
                text: M.value,
                caption: z.value,
                mode: p.value.message_data.mode,
                "recipient-name": S.value.name
              }, null, 8, ["text", "caption", "mode", "recipient-name"])
            ])
          ])) : r.value === 4 ? (C(), I("div", nk, [
            d("div", rk, [
              w[43] || (w[43] = d("h4", { class: "border-b border-zinc-800 pb-2 text-sm font-bold text-white" }, "Resumo da Campanha", -1)),
              d("div", ok, [
                d("div", null, [
                  w[39] || (w[39] = d("span", { class: "text-zinc-500" }, "Nome:", -1)),
                  d("p", ik, W(p.value.name), 1)
                ]),
                d("div", null, [
                  w[40] || (w[40] = d("span", { class: "text-zinc-500" }, "Total de Destinatários:", -1)),
                  d("p", ak, W(p.value.selected_contact_keys.length) + " contatos", 1)
                ]),
                d("div", null, [
                  w[41] || (w[41] = d("span", { class: "text-zinc-500" }, "Programação:", -1)),
                  d("p", {
                    class: X(["mt-0.5 flex items-center gap-1 font-bold", p.value.schedule_mode === "scheduled" ? "text-purple-400" : "text-emerald-400"])
                  }, [
                    (C(), Fe(zt(p.value.schedule_mode === "scheduled" ? F(Ki) : F(rr)), { class: "h-3.5 w-3.5" })),
                    d("span", null, W(p.value.schedule_mode === "scheduled" ? `Agendado para ${new Date(p.value.scheduled_at).toLocaleString("pt-BR")}` : "Disparo Imediato"), 1)
                  ], 2)
                ]),
                d("div", null, [
                  w[42] || (w[42] = d("span", { class: "text-zinc-500" }, "Intervalo de Segurança:", -1)),
                  d("p", sk, "~" + W(p.value.throttle_seconds) + "s entre envios", 1)
                ])
              ]),
              d("div", null, [
                d("span", lk, "Prévia do Conteúdo (" + W(p.value.message_data.mode) + "):", 1),
                d("div", uk, W(M.value || z.value || "—"), 1)
              ])
            ])
          ])) : he("", !0)
        ]),
        d("div", ck, [
          r.value > 1 ? (C(), I("button", {
            key: 0,
            type: "button",
            class: "flex items-center text-zinc-400 transition hover:text-white",
            onClick: w[12] || (w[12] = (U) => r.value--)
          }, [
            K(F(Ud), { class: "mr-2 h-4 w-4" }),
            w[44] || (w[44] = d("span", { class: "text-xs font-bold" }, "Voltar", -1))
          ])) : (C(), I("div", dk)),
          d("div", fk, [
            d("button", {
              type: "button",
              class: "text-xs font-bold text-zinc-400 transition hover:text-white",
              onClick: w[13] || (w[13] = (U) => n("close"))
            }, "Cancelar"),
            r.value < 4 ? (C(), I("button", {
              key: 0,
              type: "button",
              class: "flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600",
              onClick: O
            }, [
              w[45] || (w[45] = d("span", null, "Próximo", -1)),
              K(F(bm), { class: "ml-2 h-4 w-4" })
            ])) : (C(), I("button", {
              key: 1,
              type: "button",
              disabled: o.value,
              class: X(["flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60", p.value.schedule_mode === "scheduled" ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500" : "bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600"]),
              onClick: E
            }, [
              o.value ? (C(), Fe(F(qn), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : (C(), Fe(zt(p.value.schedule_mode === "scheduled" ? F(Ki) : F(Lr)), {
                key: 1,
                class: "mr-2 h-4 w-4"
              })),
              d("span", null, W(o.value ? "Salvando..." : p.value.schedule_mode === "scheduled" ? "Confirmar Agendamento" : "Iniciar Disparos"), 1)
            ], 10, pk))
          ])
        ])
      ])
    ]));
  }
}, mk = { class: "fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm" }, vk = { class: "flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl" }, gk = { class: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5" }, yk = { class: "flex items-center gap-3" }, bk = { class: "flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" }, xk = { class: "text-lg font-bold text-white" }, wk = { class: "mt-0.5 text-xs text-zinc-400" }, _k = { class: "flex items-center gap-2" }, Sk = ["disabled"], Ek = {
  key: 0,
  class: "py-20 text-center text-sm text-zinc-400"
}, kk = {
  key: 1,
  class: "px-6 py-4 text-sm text-red-400"
}, Pk = { class: "grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4" }, $k = { class: "rounded-xl border border-zinc-800 bg-zinc-900 p-3" }, Ck = { class: "mt-0.5 text-xl font-bold text-white" }, zk = { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3" }, Ak = { class: "mt-0.5 text-xl font-bold text-emerald-400" }, Tk = { class: "rounded-xl border border-amber-500/20 bg-amber-500/5 p-3" }, Ok = { class: "mt-0.5 text-xl font-bold text-amber-400" }, Nk = { class: "rounded-xl border border-red-500/20 bg-red-500/5 p-3" }, Ik = { class: "mt-0.5 text-xl font-bold text-red-400" }, Rk = { class: "flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3" }, Mk = { class: "relative max-w-sm flex-1" }, Dk = { class: "flex-1 overflow-y-auto p-6" }, Fk = {
  key: 0,
  class: "py-16 text-center text-sm text-zinc-500"
}, Bk = {
  key: 1,
  class: "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40"
}, Lk = { class: "w-full text-left text-xs" }, Uk = { class: "divide-y divide-zinc-800/60" }, qk = { class: "px-4 py-3" }, Vk = { class: "font-medium text-white" }, Hk = ["title"], jk = { class: "px-4 py-3 font-mono text-zinc-300" }, Gk = { class: "px-4 py-3" }, Wk = { class: "px-4 py-3 text-right text-zinc-400" }, Xk = {
  __name: "CampaignDetail",
  props: {
    campaignId: { type: Number, required: !0 }
  },
  emits: ["close", "changed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Y(null), i = Y([]), a = Y(!0), s = Y(!1), u = Y(""), l = Y(""), c = Y(""), f = J(() => {
      const m = l.value.trim().toLowerCase();
      return i.value.filter((h) => c.value && h.status !== c.value ? !1 : !m || `${h.name || ""} ${h.phone}`.toLowerCase().includes(m));
    }), v = (m) => ({
      sent: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      failed: "border-red-500/20 bg-red-500/10 text-red-400",
      cancelled: "border-zinc-700 bg-zinc-800 text-zinc-400"
    })[m] || "border-blue-500/20 bg-blue-500/10 text-blue-400";
    async function y() {
      a.value = !0, u.value = "";
      try {
        const m = await Ae.campaign(n.campaignId);
        o.value = m.campaign, i.value = m.sends || [];
      } catch (m) {
        u.value = m.message;
      } finally {
        a.value = !1;
      }
    }
    async function p() {
      s.value = !0, u.value = "";
      try {
        await Ae.cancelCampaign(n.campaignId), r("changed"), await y();
      } catch (m) {
        u.value = m.message;
      } finally {
        s.value = !1;
      }
    }
    return Ze(y), (m, h) => (C(), I("div", mk, [
      d("div", vk, [
        d("div", gk, [
          d("div", yk, [
            d("div", bk, [
              K(F(Br), { class: "h-5 w-5" })
            ]),
            d("div", null, [
              d("div", xk, W(o.value?.name || "Campanha"), 1),
              d("p", wk, W(o.value ? F(gp)[o.value.status] || o.value.status : "—"), 1)
            ])
          ]),
          d("div", _k, [
            o.value && !["completed", "cancelled"].includes(o.value.status) ? (C(), I("button", {
              key: 0,
              type: "button",
              disabled: s.value,
              class: "flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50",
              onClick: p
            }, [
              K(F(xm), { class: "h-3.5 w-3.5" }),
              d("span", null, W(s.value ? "Cancelando…" : "Cancelar envios"), 1)
            ], 8, Sk)) : he("", !0),
            d("button", {
              type: "button",
              class: "rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white",
              onClick: h[0] || (h[0] = (g) => r("close"))
            }, [
              K(F(vn), { class: "h-4 w-4" })
            ])
          ])
        ]),
        a.value ? (C(), I("p", Ek, "Carregando detalhes…")) : u.value ? (C(), I("p", kk, W(u.value), 1)) : o.value ? (C(), I(ge, { key: 2 }, [
          d("div", Pk, [
            d("div", $k, [
              h[3] || (h[3] = d("span", { class: "text-xs text-zinc-500" }, "Destinatários", -1)),
              d("div", Ck, W(o.value.total_recipients), 1)
            ]),
            d("div", zk, [
              h[4] || (h[4] = d("span", { class: "text-xs text-zinc-500" }, "Enviados", -1)),
              d("div", Ak, W(o.value.sent_count), 1)
            ]),
            d("div", Tk, [
              h[5] || (h[5] = d("span", { class: "text-xs text-zinc-500" }, "Em fila", -1)),
              d("div", Ok, W(Math.max(0, o.value.total_recipients - o.value.sent_count - o.value.error_count)), 1)
            ]),
            d("div", Nk, [
              h[6] || (h[6] = d("span", { class: "text-xs text-zinc-500" }, "Falhas", -1)),
              d("div", Ik, W(o.value.error_count), 1)
            ])
          ]),
          d("div", Rk, [
            d("div", Mk, [
              K(F(Br), { class: "absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" }),
              ce(d("input", {
                "onUpdate:modelValue": h[1] || (h[1] = (g) => l.value = g),
                type: "text",
                placeholder: "Buscar destinatário por nome ou telefone...",
                class: "w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
              }, null, 512), [
                [we, l.value]
              ])
            ]),
            ce(d("select", {
              "onUpdate:modelValue": h[2] || (h[2] = (g) => c.value = g),
              class: "rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
            }, [...h[7] || (h[7] = [
              Md('<option value="">Todos os status</option><option value="pending">Na fila</option><option value="sent">Enviado</option><option value="failed">Falhou</option><option value="cancelled">Cancelado</option>', 5)
            ])], 512), [
              [ut, c.value]
            ])
          ]),
          d("div", Dk, [
            f.value.length ? (C(), I("div", Bk, [
              d("table", Lk, [
                h[8] || (h[8] = d("thead", { class: "border-b border-zinc-800 bg-zinc-900 text-zinc-400" }, [
                  d("tr", null, [
                    d("th", { class: "px-4 py-2.5" }, "Destinatário"),
                    d("th", { class: "px-4 py-2.5" }, "Telefone"),
                    d("th", { class: "px-4 py-2.5" }, "Status"),
                    d("th", { class: "px-4 py-2.5 text-right" }, "Enviado em")
                  ])
                ], -1)),
                d("tbody", Uk, [
                  (C(!0), I(ge, null, Re(f.value, (g) => (C(), I("tr", {
                    key: g.id
                  }, [
                    d("td", qk, [
                      d("div", Vk, W(g.name || "—"), 1),
                      g.error_message ? (C(), I("div", {
                        key: 0,
                        title: g.error_message,
                        class: "mt-0.5 max-w-[200px] truncate text-[10px] text-red-400"
                      }, W(g.error_message), 9, Hk)) : he("", !0)
                    ]),
                    d("td", jk, W(g.phone), 1),
                    d("td", Gk, [
                      d("span", {
                        class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", v(g.status)])
                      }, W(F(J1)[g.status] || g.status), 3)
                    ]),
                    d("td", Wk, W(g.sent_at ? new Date(g.sent_at).toLocaleString("pt-BR") : "—"), 1)
                  ]))), 128))
                ])
              ])
            ])) : (C(), I("div", Fk, " Nenhum destinatário encontrado com esses filtros. "))
          ])
        ], 64)) : he("", !0)
      ])
    ]));
  }
}, Yk = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, Kk = { class: "flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800" }, Zk = { class: "relative w-64" }, Jk = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, Qk = {
  key: 1,
  class: "py-10 text-center text-zinc-400"
}, eP = {
  key: 2,
  class: "py-10 text-center"
}, tP = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, nP = {
  key: 3,
  class: "mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800"
}, rP = { class: "w-full text-left text-xs" }, oP = { class: "divide-y divide-zinc-100 dark:divide-zinc-800/60" }, iP = { class: "px-3 py-2.5 font-medium text-zinc-900 dark:text-white" }, aP = { class: "px-3 py-2.5" }, sP = { class: "px-3 py-2.5" }, lP = { class: "px-3 py-2.5 font-semibold text-emerald-600 dark:text-emerald-400" }, uP = { class: "px-3 py-2.5 text-zinc-500 dark:text-zinc-400" }, cP = { class: "px-3 py-2.5" }, dP = ["onClick"], fP = {
  __name: "CampaignsPanel",
  setup(e) {
    const t = Y([]), n = Y(!0), r = Y(""), o = Y(""), i = Y(!1), a = Y(null), s = (c) => ({
      completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      cancelled: "border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      scheduled: "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400"
    })[c] || "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400", u = J(() => {
      const c = o.value.trim().toLowerCase();
      return c ? t.value.filter((f) => f.name.toLowerCase().includes(c)) : t.value;
    });
    async function l() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ae.campaigns()).campaigns || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    return Ze(l), (c, f) => (C(), I("div", Yk, [
      d("div", Kk, [
        d("div", Zk, [
          K(F(Br), { class: "absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" }),
          ce(d("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (v) => o.value = v),
            type: "text",
            placeholder: "Buscar campanhas...",
            class: "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
          }, null, 512), [
            [we, o.value]
          ])
        ]),
        d("button", {
          type: "button",
          class: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700",
          onClick: f[1] || (f[1] = (v) => i.value = !0)
        }, [
          K(F(Kd), { class: "h-4 w-4" }),
          f[4] || (f[4] = d("span", null, "Nova Campanha", -1))
        ])
      ]),
      r.value ? (C(), I("p", Jk, W(r.value), 1)) : he("", !0),
      n.value ? (C(), I("div", Qk, [
        K(F(qn), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[5] || (f[5] = d("p", { class: "text-xs font-medium" }, "Carregando histórico de campanhas...", -1))
      ])) : u.value.length ? (C(), I("div", nP, [
        d("table", rP, [
          f[8] || (f[8] = d("thead", { class: "bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400" }, [
            d("tr", null, [
              d("th", { class: "px-3 py-2.5" }, "Campanha"),
              d("th", { class: "px-3 py-2.5" }, "Status"),
              d("th", { class: "px-3 py-2.5" }, "Destinatários"),
              d("th", { class: "px-3 py-2.5" }, "Enviados"),
              d("th", { class: "px-3 py-2.5" }, "Falhas"),
              d("th", { class: "px-3 py-2.5" }, "Agendada para"),
              d("th", { class: "px-3 py-2.5" })
            ])
          ], -1)),
          d("tbody", oP, [
            (C(!0), I(ge, null, Re(u.value, (v) => (C(), I("tr", {
              key: v.id,
              class: "transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            }, [
              d("td", iP, W(v.name), 1),
              d("td", aP, [
                d("span", {
                  class: X(["rounded-full border px-2 py-0.5 text-[10px] font-semibold", s(v.status)])
                }, W(F(gp)[v.status] || v.status), 3)
              ]),
              d("td", sP, W(v.total_recipients), 1),
              d("td", lP, W(v.sent_count), 1),
              d("td", {
                class: X(["px-3 py-2.5", v.error_count ? "font-semibold text-red-600 dark:text-red-400" : ""])
              }, W(v.error_count), 3),
              d("td", uP, W(v.scheduled_at ? new Date(v.scheduled_at).toLocaleString("pt-BR") : "Imediato"), 1),
              d("td", cP, [
                d("button", {
                  type: "button",
                  class: "flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white",
                  onClick: (y) => a.value = v.id
                }, [
                  K(F(Sm), { class: "h-3.5 w-3.5" }),
                  f[7] || (f[7] = d("span", null, "Detalhes", -1))
                ], 8, dP)
              ])
            ]))), 128))
          ])
        ])
      ])) : (C(), I("div", eP, [
        d("div", tP, [
          K(F(Lr), { class: "h-6 w-6" })
        ]),
        f[6] || (f[6] = d("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhuma campanha criada até agora", -1))
      ])),
      i.value ? (C(), Fe(hk, {
        key: 4,
        onClose: f[2] || (f[2] = (v) => i.value = !1),
        onCreated: l
      })) : he("", !0),
      a.value ? (C(), Fe(Xk, {
        key: 5,
        "campaign-id": a.value,
        onClose: f[3] || (f[3] = (v) => a.value = null),
        onChanged: l
      }, null, 8, ["campaign-id"])) : he("", !0)
    ]));
  }
}, pP = { class: "rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" }, hP = { class: "flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800" }, mP = ["disabled"], vP = {
  key: 0,
  class: "mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400"
}, gP = {
  key: 1,
  class: "mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400"
}, yP = {
  key: 2,
  class: "py-10 text-center text-zinc-400"
}, bP = {
  key: 3,
  class: "py-10 text-center"
}, xP = { class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900" }, wP = {
  key: 4,
  class: "mt-4 space-y-2"
}, _P = { class: "flex items-center gap-3" }, SP = { class: "font-semibold text-zinc-900 dark:text-white" }, EP = { class: "text-zinc-500 dark:text-zinc-400" }, kP = {
  key: 0,
  class: "mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400"
}, PP = ["title"], $P = ["title"], CP = { class: "flex items-center gap-2" }, zP = ["disabled", "onClick"], AP = {
  __name: "RunsPanel",
  setup(e) {
    const t = Y([]), n = Y(!0), r = Y(""), o = Y(""), i = Y(null), a = (c) => ({ completed: "bg-emerald-500", failed: "bg-rose-500" })[c] || "bg-amber-500", s = (c) => ({
      completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    })[c] || "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    async function u() {
      n.value = !0, r.value = "";
      try {
        t.value = (await Ae.runs()).runs || [];
      } catch (c) {
        r.value = c.message;
      } finally {
        n.value = !1;
      }
    }
    async function l(c) {
      if (window.confirm("Tentar novamente do início do fluxo? Blocos de mensagem já entregues antes da falha podem ser reenviados.")) {
        i.value = c.id, r.value = "", o.value = "";
        try {
          await Ae.retryRun(c.id), o.value = `Execução #${c.id} reiniciada.`, await u();
        } catch (f) {
          r.value = f.message;
        } finally {
          i.value = null;
        }
      }
    }
    return Ze(u), (c, f) => (C(), I("div", pP, [
      d("div", hP, [
        f[0] || (f[0] = d("div", null, [
          d("h2", { class: "text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white" }, "Histórico de Execuções"),
          d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Últimos disparos de mensagens automáticas no WhatsApp.")
        ], -1)),
        d("button", {
          type: "button",
          class: "rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800",
          disabled: n.value,
          onClick: u
        }, " Atualizar ", 8, mP)
      ]),
      r.value ? (C(), I("p", vP, W(r.value), 1)) : o.value ? (C(), I("p", gP, W(o.value), 1)) : he("", !0),
      n.value ? (C(), I("div", yP, [
        K(F(qn), { class: "mb-2 inline h-6 w-6 animate-spin text-emerald-500" }),
        f[1] || (f[1] = d("p", { class: "text-xs font-medium" }, "Carregando histórico…", -1))
      ])) : t.value.length ? (C(), I("div", wP, [
        (C(!0), I(ge, null, Re(t.value, (v) => (C(), I("div", {
          key: v.id,
          class: "flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
        }, [
          d("div", _P, [
            d("span", {
              class: X(["h-2 w-2 rounded-full", a(v.status)])
            }, null, 2),
            d("div", null, [
              d("div", SP, "Fluxo #" + W(v.flow_id), 1),
              d("div", EP, W(F(Mo)(v.event_class)) + " • " + W(new Date(v.created_at).toLocaleString("pt-BR")), 1),
              v.context?.last_reply ? (C(), I("div", kP, [
                K(F(Em), { class: "mt-0.5 h-3 w-3 shrink-0" }),
                d("span", {
                  class: "max-w-md truncate",
                  title: v.context.last_reply
                }, "Cliente respondeu: “" + W(v.context.last_reply) + "”", 9, PP)
              ])) : he("", !0),
              v.last_error ? (C(), I("div", {
                key: 1,
                class: "mt-0.5 max-w-md truncate text-[10px] text-rose-500",
                title: v.last_error
              }, W(v.last_error), 9, $P)) : he("", !0)
            ])
          ]),
          d("div", CP, [
            v.status === "failed" ? (C(), I("button", {
              key: 0,
              type: "button",
              class: "flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              title: "Tentar novamente do início do fluxo",
              disabled: i.value === v.id,
              onClick: (y) => l(v)
            }, [
              K(F(km), {
                class: X(["h-3 w-3", { "animate-spin": i.value === v.id }])
              }, null, 8, ["class"]),
              d("span", null, W(i.value === v.id ? "Tentando…" : "Tentar novamente"), 1)
            ], 8, zP)) : he("", !0),
            d("span", {
              class: X(["rounded-full px-2.5 py-0.5 text-[10px] font-bold", s(v.status)])
            }, W(F(Q1)[v.status] || v.status), 3)
          ])
        ]))), 128))
      ])) : (C(), I("div", bP, [
        d("div", xP, [
          K(F(Gd), { class: "h-6 w-6" })
        ]),
        f[2] || (f[2] = d("h3", { class: "mt-3 text-sm font-bold text-zinc-900 dark:text-white" }, "Nenhum disparo registrado ainda", -1))
      ]))
    ]));
  }
}, TP = { class: "space-y-6 pb-12 text-zinc-900 dark:text-white" }, OP = { class: "relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20" }, NP = { class: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" }, IP = { class: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400" }, RP = { class: "flex flex-wrap items-center gap-3" }, MP = { class: "text-xs font-bold" }, DP = { class: "text-[11px] text-zinc-500 dark:text-zinc-400" }, FP = { class: "mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800" }, BP = ["onClick"], LP = {
  key: 0,
  class: "rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
}, UP = {
  __name: "Dashboard",
  setup(e) {
    const t = [
      { id: "flows", label: "Fluxos Automáticos", icon: rr, component: PE },
      { id: "campaigns", label: "Campanhas WhatsApp", icon: Lr, component: fP },
      { id: "contacts", label: "Base de Contatos", icon: Qd, component: s2 },
      { id: "runs", label: "Execuções", icon: Gd, component: AP },
      { id: "connection", label: "Conexão", icon: Yd, component: ef }
    ], n = Y("flows"), r = Y(null), o = Y({ flows: 0, campaigns: 0, contacts: 0 });
    async function i() {
      try {
        r.value = (await Ae.connection()).connection;
      } catch {
        r.value = null;
      }
    }
    async function a() {
      try {
        const [u, l, c] = await Promise.all([Ae.flows(), Ae.campaigns(), Ae.contacts()]);
        o.value = {
          flows: (u.flows || []).length,
          campaigns: (l.campaigns || []).length,
          contacts: c.counts?.all || 0
        };
      } catch {
      }
    }
    const s = (u) => ({ flows: o.value.flows, campaigns: o.value.campaigns, contacts: o.value.contacts })[u] ?? null;
    return Ze(() => {
      i(), a();
    }), (u, l) => (C(), I("div", TP, [
      d("div", OP, [
        d("div", NP, [
          d("div", null, [
            d("div", IP, [
              K(F(Wd), { class: "h-3.5 w-3.5" }),
              l[1] || (l[1] = d("span", null, "Central de WhatsApp & Automações", -1))
            ]),
            l[2] || (l[2] = d("h1", { class: "mt-3 text-2xl font-black tracking-tight sm:text-3xl" }, "ZapRei", -1)),
            l[3] || (l[3] = d("p", { class: "mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400" }, " Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos — tudo pela Evolution GO. ", -1))
          ]),
          d("div", RP, [
            d("div", {
              class: X(["flex items-center gap-3 rounded-2xl border p-3 transition", r.value?.connected ? "border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30" : "border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30"])
            }, [
              d("div", {
                class: X(["h-3 w-3 rounded-full", r.value?.connected ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "bg-amber-500"])
              }, null, 2),
              d("div", null, [
                d("div", MP, W(r.value?.connected ? "WhatsApp Conectado" : "WhatsApp Desconectado"), 1),
                d("div", DP, W(r.value?.connected ? "Evolution GO ativa" : "Nenhuma API ativa"), 1)
              ]),
              d("button", {
                type: "button",
                class: "ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200",
                onClick: l[0] || (l[0] = (c) => n.value = "connection")
              }, W(r.value?.connected ? "Ajustar" : "Conectar"), 1)
            ], 2)
          ])
        ]),
        d("div", FP, [
          (C(), I(ge, null, Re(t, (c) => d("button", {
            key: c.id,
            type: "button",
            class: X(["flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition", n.value === c.id ? "bg-emerald-600 text-white shadow-sm" : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"]),
            onClick: (f) => n.value = c.id
          }, [
            (C(), Fe(zt(c.icon), { class: "h-4 w-4" })),
            d("span", null, W(c.label), 1),
            s(c.id) !== null && s(c.id) > 0 ? (C(), I("span", {
              key: 0,
              class: X(["rounded-full px-2 py-0.5 text-[10px] font-semibold", n.value === c.id ? "bg-black/10 dark:bg-white/10" : "bg-zinc-200/60 dark:bg-zinc-800"])
            }, W(s(c.id)), 3)) : he("", !0)
          ], 10, BP)), 64))
        ])
      ]),
      r.value && !r.value.connected ? (C(), I("p", LP, " A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão. ")) : he("", !0),
      (C(), Fe(zt(t.find((c) => c.id === n.value).component), vi({ key: n.value }, pm(n.value === "connection" ? { saved: i } : {})), null, 16))
    ]));
  }
}, qP = { class: "space-y-4" }, VP = {
  __name: "Integrations",
  emits: ["saved", "close"],
  setup(e, { emit: t }) {
    const n = t;
    return (r, o) => (C(), I("div", qP, [
      K(ef, {
        onSaved: o[0] || (o[0] = (i) => n("saved"))
      }),
      o[1] || (o[1] = d("div", { class: "rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50" }, [
        d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, [
          Ue(" Fluxos, contatos e campanhas ficam no menu "),
          d("strong", { class: "text-zinc-700 dark:text-zinc-300" }, "ZapRei"),
          Ue(" do painel. ")
        ])
      ], -1))
    ]));
  }
};
var Sp = typeof global == "object" && global && global.Object === Object && global, HP = typeof self == "object" && self && self.Object === Object && self, Rt = Sp || HP || Function("return this")(), Wt = Rt.Symbol, Ep = Object.prototype, jP = Ep.hasOwnProperty, GP = Ep.toString, _r = Wt ? Wt.toStringTag : void 0;
function WP(e) {
  var t = jP.call(e, _r), n = e[_r];
  try {
    e[_r] = void 0;
    var r = !0;
  } catch {
  }
  var o = GP.call(e);
  return r && (t ? e[_r] = n : delete e[_r]), o;
}
var XP = Object.prototype, YP = XP.toString;
function KP(e) {
  return YP.call(e);
}
var ZP = "[object Null]", JP = "[object Undefined]", Du = Wt ? Wt.toStringTag : void 0;
function Vn(e) {
  return e == null ? e === void 0 ? JP : ZP : Du && Du in Object(e) ? WP(e) : KP(e);
}
function Xt(e) {
  return e != null && typeof e == "object";
}
var QP = "[object Symbol]";
function $i(e) {
  return typeof e == "symbol" || Xt(e) && Vn(e) == QP;
}
function e$(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Nt = Array.isArray, Fu = Wt ? Wt.prototype : void 0, Bu = Fu ? Fu.toString : void 0;
function kp(e) {
  if (typeof e == "string")
    return e;
  if (Nt(e))
    return e$(e, kp) + "";
  if ($i(e))
    return Bu ? Bu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var t$ = /\s/;
function n$(e) {
  for (var t = e.length; t-- && t$.test(e.charAt(t)); )
    ;
  return t;
}
var r$ = /^\s+/;
function o$(e) {
  return e && e.slice(0, n$(e) + 1).replace(r$, "");
}
function wt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lu = NaN, i$ = /^[-+]0x[0-9a-f]+$/i, a$ = /^0b[01]+$/i, s$ = /^0o[0-7]+$/i, l$ = parseInt;
function Uu(e) {
  if (typeof e == "number")
    return e;
  if ($i(e))
    return Lu;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = o$(e);
  var n = a$.test(e);
  return n || s$.test(e) ? l$(e.slice(2), n ? 2 : 8) : i$.test(e) ? Lu : +e;
}
function Pp(e) {
  return e;
}
var u$ = "[object AsyncFunction]", c$ = "[object Function]", d$ = "[object GeneratorFunction]", f$ = "[object Proxy]";
function cl(e) {
  if (!wt(e))
    return !1;
  var t = Vn(e);
  return t == c$ || t == d$ || t == u$ || t == f$;
}
var la = Rt["__core-js_shared__"], qu = (function() {
  var e = /[^.]+$/.exec(la && la.keys && la.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function p$(e) {
  return !!qu && qu in e;
}
var h$ = Function.prototype, m$ = h$.toString;
function Hn(e) {
  if (e != null) {
    try {
      return m$.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var v$ = /[\\^$.*+?()[\]{}|]/g, g$ = /^\[object .+?Constructor\]$/, y$ = Function.prototype, b$ = Object.prototype, x$ = y$.toString, w$ = b$.hasOwnProperty, _$ = RegExp(
  "^" + x$.call(w$).replace(v$, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function S$(e) {
  if (!wt(e) || p$(e))
    return !1;
  var t = cl(e) ? _$ : g$;
  return t.test(Hn(e));
}
function E$(e, t) {
  return e?.[t];
}
function jn(e, t) {
  var n = E$(e, t);
  return S$(n) ? n : void 0;
}
var Os = jn(Rt, "WeakMap"), Vu = Object.create, k$ = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!wt(t))
      return {};
    if (Vu)
      return Vu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
})();
function P$(e, t, n) {
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
function $$(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var C$ = 800, z$ = 16, A$ = Date.now;
function T$(e) {
  var t = 0, n = 0;
  return function() {
    var r = A$(), o = z$ - (r - n);
    if (n = r, o > 0) {
      if (++t >= C$)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function O$(e) {
  return function() {
    return e;
  };
}
var ii = (function() {
  try {
    var e = jn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), N$ = ii ? function(e, t) {
  return ii(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: O$(t),
    writable: !0
  });
} : Pp, I$ = T$(N$);
function R$(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var M$ = 9007199254740991, D$ = /^(?:0|[1-9]\d*)$/;
function Ci(e, t) {
  var n = typeof e;
  return t = t ?? M$, !!t && (n == "number" || n != "symbol" && D$.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function dl(e, t, n) {
  t == "__proto__" && ii ? ii(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function io(e, t) {
  return e === t || e !== e && t !== t;
}
var F$ = Object.prototype, B$ = F$.hasOwnProperty;
function fl(e, t, n) {
  var r = e[t];
  (!(B$.call(e, t) && io(r, n)) || n === void 0 && !(t in e)) && dl(e, t, n);
}
function L$(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], u = void 0;
    u === void 0 && (u = e[s]), o ? dl(n, s, u) : fl(n, s, u);
  }
  return n;
}
var Hu = Math.max;
function U$(e, t, n) {
  return t = Hu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Hu(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), P$(e, this, s);
  };
}
function q$(e, t) {
  return I$(U$(e, t, Pp), e + "");
}
var V$ = 9007199254740991;
function pl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= V$;
}
function zi(e) {
  return e != null && pl(e.length) && !cl(e);
}
function H$(e, t, n) {
  if (!wt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? zi(n) && Ci(t, n.length) : r == "string" && t in n) ? io(n[t], e) : !1;
}
function j$(e) {
  return q$(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && H$(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var G$ = Object.prototype;
function hl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || G$;
  return e === n;
}
function W$(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var X$ = "[object Arguments]";
function ju(e) {
  return Xt(e) && Vn(e) == X$;
}
var $p = Object.prototype, Y$ = $p.hasOwnProperty, K$ = $p.propertyIsEnumerable, ai = ju(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ju : function(e) {
  return Xt(e) && Y$.call(e, "callee") && !K$.call(e, "callee");
};
function Z$() {
  return !1;
}
var Cp = typeof exports == "object" && exports && !exports.nodeType && exports, Gu = Cp && typeof module == "object" && module && !module.nodeType && module, J$ = Gu && Gu.exports === Cp, Wu = J$ ? Rt.Buffer : void 0, Q$ = Wu ? Wu.isBuffer : void 0, Yr = Q$ || Z$, e5 = "[object Arguments]", t5 = "[object Array]", n5 = "[object Boolean]", r5 = "[object Date]", o5 = "[object Error]", i5 = "[object Function]", a5 = "[object Map]", s5 = "[object Number]", l5 = "[object Object]", u5 = "[object RegExp]", c5 = "[object Set]", d5 = "[object String]", f5 = "[object WeakMap]", p5 = "[object ArrayBuffer]", h5 = "[object DataView]", m5 = "[object Float32Array]", v5 = "[object Float64Array]", g5 = "[object Int8Array]", y5 = "[object Int16Array]", b5 = "[object Int32Array]", x5 = "[object Uint8Array]", w5 = "[object Uint8ClampedArray]", _5 = "[object Uint16Array]", S5 = "[object Uint32Array]", We = {};
We[m5] = We[v5] = We[g5] = We[y5] = We[b5] = We[x5] = We[w5] = We[_5] = We[S5] = !0;
We[e5] = We[t5] = We[p5] = We[n5] = We[h5] = We[r5] = We[o5] = We[i5] = We[a5] = We[s5] = We[l5] = We[u5] = We[c5] = We[d5] = We[f5] = !1;
function E5(e) {
  return Xt(e) && pl(e.length) && !!We[Vn(e)];
}
function ml(e) {
  return function(t) {
    return e(t);
  };
}
var zp = typeof exports == "object" && exports && !exports.nodeType && exports, Ir = zp && typeof module == "object" && module && !module.nodeType && module, k5 = Ir && Ir.exports === zp, ua = k5 && Sp.process, ur = (function() {
  try {
    var e = Ir && Ir.require && Ir.require("util").types;
    return e || ua && ua.binding && ua.binding("util");
  } catch {
  }
})(), Xu = ur && ur.isTypedArray, vl = Xu ? ml(Xu) : E5, P5 = Object.prototype, $5 = P5.hasOwnProperty;
function Ap(e, t) {
  var n = Nt(e), r = !n && ai(e), o = !n && !r && Yr(e), i = !n && !r && !o && vl(e), a = n || r || o || i, s = a ? W$(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || $5.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ci(l, u))) && s.push(l);
  return s;
}
function Tp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var C5 = Tp(Object.keys, Object), z5 = Object.prototype, A5 = z5.hasOwnProperty;
function T5(e) {
  if (!hl(e))
    return C5(e);
  var t = [];
  for (var n in Object(e))
    A5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function O5(e) {
  return zi(e) ? Ap(e) : T5(e);
}
function N5(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var I5 = Object.prototype, R5 = I5.hasOwnProperty;
function M5(e) {
  if (!wt(e))
    return N5(e);
  var t = hl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !R5.call(e, r)) || n.push(r);
  return n;
}
function Op(e) {
  return zi(e) ? Ap(e, !0) : M5(e);
}
var D5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, F5 = /^\w*$/;
function B5(e, t) {
  if (Nt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || $i(e) ? !0 : F5.test(e) || !D5.test(e) || t != null && e in Object(t);
}
var Kr = jn(Object, "create");
function L5() {
  this.__data__ = Kr ? Kr(null) : {}, this.size = 0;
}
function U5(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var q5 = "__lodash_hash_undefined__", V5 = Object.prototype, H5 = V5.hasOwnProperty;
function j5(e) {
  var t = this.__data__;
  if (Kr) {
    var n = t[e];
    return n === q5 ? void 0 : n;
  }
  return H5.call(t, e) ? t[e] : void 0;
}
var G5 = Object.prototype, W5 = G5.hasOwnProperty;
function X5(e) {
  var t = this.__data__;
  return Kr ? t[e] !== void 0 : W5.call(t, e);
}
var Y5 = "__lodash_hash_undefined__";
function K5(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Kr && t === void 0 ? Y5 : t, this;
}
function Ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ln.prototype.clear = L5;
Ln.prototype.delete = U5;
Ln.prototype.get = j5;
Ln.prototype.has = X5;
Ln.prototype.set = K5;
function Z5() {
  this.__data__ = [], this.size = 0;
}
function Ai(e, t) {
  for (var n = e.length; n--; )
    if (io(e[n][0], t))
      return n;
  return -1;
}
var J5 = Array.prototype, Q5 = J5.splice;
function eC(e) {
  var t = this.__data__, n = Ai(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Q5.call(t, n, 1), --this.size, !0;
}
function tC(e) {
  var t = this.__data__, n = Ai(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nC(e) {
  return Ai(this.__data__, e) > -1;
}
function rC(e, t) {
  var n = this.__data__, r = Ai(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
sn.prototype.clear = Z5;
sn.prototype.delete = eC;
sn.prototype.get = tC;
sn.prototype.has = nC;
sn.prototype.set = rC;
var Zr = jn(Rt, "Map");
function oC() {
  this.size = 0, this.__data__ = {
    hash: new Ln(),
    map: new (Zr || sn)(),
    string: new Ln()
  };
}
function iC(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ti(e, t) {
  var n = e.__data__;
  return iC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function aC(e) {
  var t = Ti(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sC(e) {
  return Ti(this, e).get(e);
}
function lC(e) {
  return Ti(this, e).has(e);
}
function uC(e, t) {
  var n = Ti(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ln.prototype.clear = oC;
ln.prototype.delete = aC;
ln.prototype.get = sC;
ln.prototype.has = lC;
ln.prototype.set = uC;
var cC = "Expected a function";
function gl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(cC);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (gl.Cache || ln)(), n;
}
gl.Cache = ln;
var dC = 500;
function fC(e) {
  var t = gl(e, function(r) {
    return n.size === dC && n.clear(), r;
  }), n = t.cache;
  return t;
}
var pC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hC = /\\(\\)?/g, mC = fC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pC, function(n, r, o, i) {
    t.push(o ? i.replace(hC, "$1") : r || n);
  }), t;
});
function Np(e) {
  return e == null ? "" : kp(e);
}
function yl(e, t) {
  return Nt(e) ? e : B5(e, t) ? [e] : mC(Np(e));
}
function bl(e) {
  if (typeof e == "string" || $i(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function vC(e, t) {
  t = yl(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[bl(t[n++])];
  return n && n == r ? e : void 0;
}
function bt(e, t, n) {
  var r = e == null ? void 0 : vC(e, t);
  return r === void 0 ? n : r;
}
function gC(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ip = Tp(Object.getPrototypeOf, Object), yC = "[object Object]", bC = Function.prototype, xC = Object.prototype, Rp = bC.toString, wC = xC.hasOwnProperty, _C = Rp.call(Object);
function SC(e) {
  if (!Xt(e) || Vn(e) != yC)
    return !1;
  var t = Ip(e);
  if (t === null)
    return !0;
  var n = wC.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Rp.call(n) == _C;
}
function EC(e) {
  return function(t) {
    return e?.[t];
  };
}
function kC() {
  this.__data__ = new sn(), this.size = 0;
}
function PC(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function $C(e) {
  return this.__data__.get(e);
}
function CC(e) {
  return this.__data__.has(e);
}
var zC = 200;
function AC(e, t) {
  var n = this.__data__;
  if (n instanceof sn) {
    var r = n.__data__;
    if (!Zr || r.length < zC - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ln(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Gt(e) {
  var t = this.__data__ = new sn(e);
  this.size = t.size;
}
Gt.prototype.clear = kC;
Gt.prototype.delete = PC;
Gt.prototype.get = $C;
Gt.prototype.has = CC;
Gt.prototype.set = AC;
var Mp = typeof exports == "object" && exports && !exports.nodeType && exports, Yu = Mp && typeof module == "object" && module && !module.nodeType && module, TC = Yu && Yu.exports === Mp, Ku = TC ? Rt.Buffer : void 0, Zu = Ku ? Ku.allocUnsafe : void 0;
function Dp(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Zu ? Zu(n) : new e.constructor(n);
  return e.copy(r), r;
}
function OC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function NC() {
  return [];
}
var IC = Object.prototype, RC = IC.propertyIsEnumerable, Ju = Object.getOwnPropertySymbols, MC = Ju ? function(e) {
  return e == null ? [] : (e = Object(e), OC(Ju(e), function(t) {
    return RC.call(e, t);
  }));
} : NC;
function DC(e, t, n) {
  var r = t(e);
  return Nt(e) ? r : gC(r, n(e));
}
function Ns(e) {
  return DC(e, O5, MC);
}
var Is = jn(Rt, "DataView"), Rs = jn(Rt, "Promise"), Ms = jn(Rt, "Set"), Qu = "[object Map]", FC = "[object Object]", ec = "[object Promise]", tc = "[object Set]", nc = "[object WeakMap]", rc = "[object DataView]", BC = Hn(Is), LC = Hn(Zr), UC = Hn(Rs), qC = Hn(Ms), VC = Hn(Os), Ct = Vn;
(Is && Ct(new Is(new ArrayBuffer(1))) != rc || Zr && Ct(new Zr()) != Qu || Rs && Ct(Rs.resolve()) != ec || Ms && Ct(new Ms()) != tc || Os && Ct(new Os()) != nc) && (Ct = function(e) {
  var t = Vn(e), n = t == FC ? e.constructor : void 0, r = n ? Hn(n) : "";
  if (r)
    switch (r) {
      case BC:
        return rc;
      case LC:
        return Qu;
      case UC:
        return ec;
      case qC:
        return tc;
      case VC:
        return nc;
    }
  return t;
});
var HC = Object.prototype, jC = HC.hasOwnProperty;
function GC(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && jC.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var si = Rt.Uint8Array;
function xl(e) {
  var t = new e.constructor(e.byteLength);
  return new si(t).set(new si(e)), t;
}
function WC(e, t) {
  var n = xl(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var XC = /\w*$/;
function YC(e) {
  var t = new e.constructor(e.source, XC.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var oc = Wt ? Wt.prototype : void 0, ic = oc ? oc.valueOf : void 0;
function KC(e) {
  return ic ? Object(ic.call(e)) : {};
}
function Fp(e, t) {
  var n = t ? xl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var ZC = "[object Boolean]", JC = "[object Date]", QC = "[object Map]", ez = "[object Number]", tz = "[object RegExp]", nz = "[object Set]", rz = "[object String]", oz = "[object Symbol]", iz = "[object ArrayBuffer]", az = "[object DataView]", sz = "[object Float32Array]", lz = "[object Float64Array]", uz = "[object Int8Array]", cz = "[object Int16Array]", dz = "[object Int32Array]", fz = "[object Uint8Array]", pz = "[object Uint8ClampedArray]", hz = "[object Uint16Array]", mz = "[object Uint32Array]";
function vz(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case iz:
      return xl(e);
    case ZC:
    case JC:
      return new r(+e);
    case az:
      return WC(e);
    case sz:
    case lz:
    case uz:
    case cz:
    case dz:
    case fz:
    case pz:
    case hz:
    case mz:
      return Fp(e, n);
    case QC:
      return new r();
    case ez:
    case rz:
      return new r(e);
    case tz:
      return YC(e);
    case nz:
      return new r();
    case oz:
      return KC(e);
  }
}
function Bp(e) {
  return typeof e.constructor == "function" && !hl(e) ? k$(Ip(e)) : {};
}
var gz = "[object Map]";
function yz(e) {
  return Xt(e) && Ct(e) == gz;
}
var ac = ur && ur.isMap, bz = ac ? ml(ac) : yz, xz = "[object Set]";
function wz(e) {
  return Xt(e) && Ct(e) == xz;
}
var sc = ur && ur.isSet, _z = sc ? ml(sc) : wz, Sz = 1, Lp = "[object Arguments]", Ez = "[object Array]", kz = "[object Boolean]", Pz = "[object Date]", $z = "[object Error]", Up = "[object Function]", Cz = "[object GeneratorFunction]", zz = "[object Map]", Az = "[object Number]", qp = "[object Object]", Tz = "[object RegExp]", Oz = "[object Set]", Nz = "[object String]", Iz = "[object Symbol]", Rz = "[object WeakMap]", Mz = "[object ArrayBuffer]", Dz = "[object DataView]", Fz = "[object Float32Array]", Bz = "[object Float64Array]", Lz = "[object Int8Array]", Uz = "[object Int16Array]", qz = "[object Int32Array]", Vz = "[object Uint8Array]", Hz = "[object Uint8ClampedArray]", jz = "[object Uint16Array]", Gz = "[object Uint32Array]", je = {};
je[Lp] = je[Ez] = je[Mz] = je[Dz] = je[kz] = je[Pz] = je[Fz] = je[Bz] = je[Lz] = je[Uz] = je[qz] = je[zz] = je[Az] = je[qp] = je[Tz] = je[Oz] = je[Nz] = je[Iz] = je[Vz] = je[Hz] = je[jz] = je[Gz] = !0;
je[$z] = je[Up] = je[Rz] = !1;
function Do(e, t, n, r, o, i) {
  var a, s = t & Sz;
  if (a !== void 0)
    return a;
  if (!wt(e))
    return e;
  var u = Nt(e);
  if (u)
    a = GC(e);
  else {
    var l = Ct(e), c = l == Up || l == Cz;
    if (Yr(e))
      return Dp(e, s);
    if (l == qp || l == Lp || c && !o)
      a = c ? {} : Bp(e);
    else {
      if (!je[l])
        return o ? e : {};
      a = vz(e, l, s);
    }
  }
  i || (i = new Gt());
  var f = i.get(e);
  if (f)
    return f;
  i.set(e, a), _z(e) ? e.forEach(function(p) {
    a.add(Do(p, t, n, p, e, i));
  }) : bz(e) && e.forEach(function(p, m) {
    a.set(m, Do(p, t, n, m, e, i));
  });
  var v = Ns, y = u ? void 0 : v(e);
  return R$(y || e, function(p, m) {
    y && (m = p, p = e[m]), fl(a, m, Do(p, t, n, m, e, i));
  }), a;
}
var Wz = 1, Xz = 4;
function st(e) {
  return Do(e, Wz | Xz);
}
var Yz = "__lodash_hash_undefined__";
function Kz(e) {
  return this.__data__.set(e, Yz), this;
}
function Zz(e) {
  return this.__data__.has(e);
}
function li(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ln(); ++t < n; )
    this.add(e[t]);
}
li.prototype.add = li.prototype.push = Kz;
li.prototype.has = Zz;
function Jz(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Qz(e, t) {
  return e.has(t);
}
var e3 = 1, t3 = 2;
function Vp(e, t, n, r, o, i) {
  var a = n & e3, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = i.get(e), c = i.get(t);
  if (l && c)
    return l == t && c == e;
  var f = -1, v = !0, y = n & t3 ? new li() : void 0;
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
      if (!Jz(t, function(g, k) {
        if (!Qz(y, k) && (p === g || o(p, g, n, r, i)))
          return y.push(k);
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
function n3(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function r3(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var o3 = 1, i3 = 2, a3 = "[object Boolean]", s3 = "[object Date]", l3 = "[object Error]", u3 = "[object Map]", c3 = "[object Number]", d3 = "[object RegExp]", f3 = "[object Set]", p3 = "[object String]", h3 = "[object Symbol]", m3 = "[object ArrayBuffer]", v3 = "[object DataView]", lc = Wt ? Wt.prototype : void 0, ca = lc ? lc.valueOf : void 0;
function g3(e, t, n, r, o, i, a) {
  switch (n) {
    case v3:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case m3:
      return !(e.byteLength != t.byteLength || !i(new si(e), new si(t)));
    case a3:
    case s3:
    case c3:
      return io(+e, +t);
    case l3:
      return e.name == t.name && e.message == t.message;
    case d3:
    case p3:
      return e == t + "";
    case u3:
      var s = n3;
    case f3:
      var u = r & o3;
      if (s || (s = r3), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= i3, a.set(e, t);
      var c = Vp(s(e), s(t), r, o, i, a);
      return a.delete(e), c;
    case h3:
      if (ca)
        return ca.call(e) == ca.call(t);
  }
  return !1;
}
var y3 = 1, b3 = Object.prototype, x3 = b3.hasOwnProperty;
function w3(e, t, n, r, o, i) {
  var a = n & y3, s = Ns(e), u = s.length, l = Ns(t), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var v = s[f];
    if (!(a ? v in t : x3.call(t, v)))
      return !1;
  }
  var y = i.get(e), p = i.get(t);
  if (y && p)
    return y == t && p == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var h = a; ++f < u; ) {
    v = s[f];
    var g = e[v], k = t[v];
    if (r)
      var x = a ? r(k, g, v, t, e, i) : r(g, k, v, e, t, i);
    if (!(x === void 0 ? g === k || o(g, k, n, r, i) : x)) {
      m = !1;
      break;
    }
    h || (h = v == "constructor");
  }
  if (m && !h) {
    var $ = e.constructor, T = t.constructor;
    $ != T && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof T == "function" && T instanceof T) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var _3 = 1, uc = "[object Arguments]", cc = "[object Array]", ko = "[object Object]", S3 = Object.prototype, dc = S3.hasOwnProperty;
function E3(e, t, n, r, o, i) {
  var a = Nt(e), s = Nt(t), u = a ? cc : Ct(e), l = s ? cc : Ct(t);
  u = u == uc ? ko : u, l = l == uc ? ko : l;
  var c = u == ko, f = l == ko, v = u == l;
  if (v && Yr(e)) {
    if (!Yr(t))
      return !1;
    a = !0, c = !1;
  }
  if (v && !c)
    return i || (i = new Gt()), a || vl(e) ? Vp(e, t, n, r, o, i) : g3(e, t, u, n, r, o, i);
  if (!(n & _3)) {
    var y = c && dc.call(e, "__wrapped__"), p = f && dc.call(t, "__wrapped__");
    if (y || p) {
      var m = y ? e.value() : e, h = p ? t.value() : t;
      return i || (i = new Gt()), o(m, h, n, r, i);
    }
  }
  return v ? (i || (i = new Gt()), w3(e, t, n, r, o, i)) : !1;
}
function Hp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Xt(e) && !Xt(t) ? e !== e && t !== t : E3(e, t, n, r, Hp, o);
}
function k3(e, t, n) {
  t = yl(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = bl(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && pl(o) && Ci(a, o) && (Nt(e) || ai(e)));
}
function P3(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++o];
      if (n(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var $3 = P3(), da = function() {
  return Rt.Date.now();
}, C3 = "Expected a function", z3 = Math.max, A3 = Math.min;
function T3(e, t, n) {
  var r, o, i, a, s, u, l = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(C3);
  t = Uu(t) || 0, wt(n) && (c = !0, f = "maxWait" in n, i = f ? z3(Uu(n.maxWait) || 0, t) : i, v = "trailing" in n ? !0 : v);
  function y(P) {
    var b = r, S = o;
    return r = o = void 0, l = P, a = e.apply(S, b), a;
  }
  function p(P) {
    return l = P, s = setTimeout(g, t), c ? y(P) : a;
  }
  function m(P) {
    var b = P - u, S = P - l, L = t - b;
    return f ? A3(L, i - S) : L;
  }
  function h(P) {
    var b = P - u, S = P - l;
    return u === void 0 || b >= t || b < 0 || f && S >= i;
  }
  function g() {
    var P = da();
    if (h(P))
      return k(P);
    s = setTimeout(g, m(P));
  }
  function k(P) {
    return s = void 0, v && r ? y(P) : (r = o = void 0, a);
  }
  function x() {
    s !== void 0 && clearTimeout(s), l = 0, r = u = o = s = void 0;
  }
  function $() {
    return s === void 0 ? a : k(da());
  }
  function T() {
    var P = da(), b = h(P);
    if (r = arguments, o = this, u = P, b) {
      if (s === void 0)
        return p(u);
      if (f)
        return clearTimeout(s), s = setTimeout(g, t), y(u);
    }
    return s === void 0 && (s = setTimeout(g, t)), a;
  }
  return T.cancel = x, T.flush = $, T;
}
function Ds(e, t, n) {
  (n !== void 0 && !io(e[t], n) || n === void 0 && !(t in e)) && dl(e, t, n);
}
function O3(e) {
  return Xt(e) && zi(e);
}
function Fs(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function N3(e) {
  return L$(e, Op(e));
}
function I3(e, t, n, r, o, i, a) {
  var s = Fs(e, n), u = Fs(t, n), l = a.get(u);
  if (l) {
    Ds(e, n, l);
    return;
  }
  var c = i ? i(s, u, n + "", e, t, a) : void 0, f = c === void 0;
  if (f) {
    var v = Nt(u), y = !v && Yr(u), p = !v && !y && vl(u);
    c = u, v || y || p ? Nt(s) ? c = s : O3(s) ? c = $$(s) : y ? (f = !1, c = Dp(u, !0)) : p ? (f = !1, c = Fp(u, !0)) : c = [] : SC(u) || ai(u) ? (c = s, ai(s) ? c = N3(s) : (!wt(s) || cl(s)) && (c = Bp(u))) : f = !1;
  }
  f && (a.set(u, c), o(c, u, r, i, a), a.delete(u)), Ds(e, n, c);
}
function jp(e, t, n, r, o) {
  e !== t && $3(t, function(i, a) {
    if (o || (o = new Gt()), wt(i))
      I3(e, t, a, n, jp, r, o);
    else {
      var s = r ? r(Fs(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), Ds(e, a, s);
    }
  }, Op);
}
var R3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, M3 = EC(R3), Gp = /[&<>"']/g, D3 = RegExp(Gp.source);
function F3(e) {
  return e = Np(e), e && D3.test(e) ? e.replace(Gp, M3) : e;
}
var B3 = Object.prototype, L3 = B3.hasOwnProperty;
function U3(e, t) {
  return e != null && L3.call(e, t);
}
function Wp(e, t) {
  return e != null && k3(e, t, U3);
}
function yn(e, t) {
  return Hp(e, t);
}
var Bs = j$(function(e, t, n) {
  jp(e, t, n);
});
function q3(e, t, n, r) {
  if (!wt(e))
    return e;
  t = yl(t, e);
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var u = bl(t[o]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = wt(c) ? c : Ci(t[o + 1]) ? [] : {});
    }
    fl(s, u, l), s = s[u];
  }
  return e;
}
function Et(e, t, n) {
  return e == null ? e : q3(e, t, n);
}
var fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function V3(e) {
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
var fa, pc;
function hr() {
  return pc || (pc = 1, fa = TypeError), fa;
}
const H3 = {}, j3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H3
}, Symbol.toStringTag, { value: "Module" })), G3 = /* @__PURE__ */ V3(j3);
var pa, hc;
function Oi() {
  if (hc) return pa;
  hc = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && i && typeof i.get == "function" ? i.get : null, s = o && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, v = typeof WeakRef == "function" && WeakRef.prototype, y = v ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, m = Object.prototype.toString, h = Function.prototype.toString, g = String.prototype.match, k = String.prototype.slice, x = String.prototype.replace, $ = String.prototype.toUpperCase, T = String.prototype.toLowerCase, P = RegExp.prototype.test, b = Array.prototype.concat, S = Array.prototype.join, L = Array.prototype.slice, M = Math.floor, z = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _ = Object.getOwnPropertySymbols, O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", N = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, w = Object.prototype.propertyIsEnumerable, U = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(H) {
    return H.__proto__;
  } : null);
  function B(H, G) {
    if (H === 1 / 0 || H === -1 / 0 || H !== H || H && H > -1e3 && H < 1e3 || P.call(/e/, G))
      return G;
    var Be = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof H == "number") {
      var He = H < 0 ? -M(-H) : M(H);
      if (He !== H) {
        var Ge = String(He), ze = k.call(G, Ge.length + 1);
        return x.call(Ge, Be, "$&_") + "." + x.call(x.call(ze, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return x.call(G, Be, "$&_");
  }
  var Z = G3, Q = Z.custom, ee = R(Q) ? Q : null, de = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ye = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  pa = function H(G, Be, He, Ge) {
    var ze = Be || {};
    if (V(ze, "quoteStyle") && !V(de, ze.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (V(ze, "maxStringLength") && (typeof ze.maxStringLength == "number" ? ze.maxStringLength < 0 && ze.maxStringLength !== 1 / 0 : ze.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var un = V(ze, "customInspect") ? ze.customInspect : !0;
    if (typeof un != "boolean" && un !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (V(ze, "indent") && ze.indent !== null && ze.indent !== "	" && !(parseInt(ze.indent, 10) === ze.indent && ze.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (V(ze, "numericSeparator") && typeof ze.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var En = ze.numericSeparator;
    if (typeof G > "u")
      return "undefined";
    if (G === null)
      return "null";
    if (typeof G == "boolean")
      return G ? "true" : "false";
    if (typeof G == "string")
      return vt(G, ze);
    if (typeof G == "number") {
      if (G === 0)
        return 1 / 0 / G > 0 ? "0" : "-0";
      var gt = String(G);
      return En ? B(G, gt) : gt;
    }
    if (typeof G == "bigint") {
      var cn = String(G) + "n";
      return En ? B(G, cn) : cn;
    }
    var Vi = typeof ze.depth > "u" ? 5 : ze.depth;
    if (typeof He > "u" && (He = 0), He >= Vi && Vi > 0 && typeof G == "object")
      return me(G) ? "[Array]" : "[Object]";
    var Gn = tm(ze, He);
    if (typeof Ge > "u")
      Ge = [];
    else if (re(Ge, G) >= 0)
      return "[Circular]";
    function $t(Wn, ho, rm) {
      if (ho && (Ge = L.call(Ge), Ge.push(ho)), rm) {
        var Ll = {
          depth: ze.depth
        };
        return V(ze, "quoteStyle") && (Ll.quoteStyle = ze.quoteStyle), H(Wn, Ll, He + 1, Ge);
      }
      return H(Wn, ze, He + 1, Ge);
    }
    if (typeof G == "function" && !Ee(G)) {
      var Nl = ne(G), Il = fo(G, $t);
      return "[Function" + (Nl ? ": " + Nl : " (anonymous)") + "]" + (Il.length > 0 ? " { " + S.call(Il, ", ") + " }" : "");
    }
    if (R(G)) {
      var Rl = E ? x.call(String(G), /^(Symbol\(.*\))_[^)]*$/, "$1") : O.call(G);
      return typeof G == "object" && !E ? Sn(Rl) : Rl;
    }
    if (Dt(G)) {
      for (var gr = "<" + T.call(String(G.nodeName)), Hi = G.attributes || [], po = 0; po < Hi.length; po++)
        gr += " " + Hi[po].name + "=" + _e(te(Hi[po].value), "double", ze);
      return gr += ">", G.childNodes && G.childNodes.length && (gr += "..."), gr += "</" + T.call(String(G.nodeName)) + ">", gr;
    }
    if (me(G)) {
      if (G.length === 0)
        return "[]";
      var ji = fo(G, $t);
      return Gn && !em(ji) ? "[" + qi(ji, Gn) + "]" : "[ " + S.call(ji, ", ") + " ]";
    }
    if (ae(G)) {
      var Gi = fo(G, $t);
      return !("cause" in Error.prototype) && "cause" in G && !w.call(G, "cause") ? "{ [" + String(G) + "] " + S.call(b.call("[cause]: " + $t(G.cause), Gi), ", ") + " }" : Gi.length === 0 ? "[" + String(G) + "]" : "{ [" + String(G) + "] " + S.call(Gi, ", ") + " }";
    }
    if (typeof G == "object" && un) {
      if (ee && typeof G[ee] == "function" && Z)
        return Z(G, { depth: Vi - He });
      if (un !== "symbol" && typeof G.inspect == "function")
        return G.inspect();
    }
    if (ue(G)) {
      var Ml = [];
      return r && r.call(G, function(Wn, ho) {
        Ml.push($t(ho, G, !0) + " => " + $t(Wn, G));
      }), Ol("Map", n.call(G), Ml, Gn);
    }
    if (ke(G)) {
      var Dl = [];
      return s && s.call(G, function(Wn) {
        Dl.push($t(Wn, G));
      }), Ol("Set", a.call(G), Dl, Gn);
    }
    if (fe(G))
      return vr("WeakMap");
    if (De(G))
      return vr("WeakSet");
    if (be(G))
      return vr("WeakRef");
    if (ie(G))
      return Sn($t(Number(G)));
    if (A(G))
      return Sn($t(z.call(G)));
    if (ve(G))
      return Sn(p.call(G));
    if (xe(G))
      return Sn($t(String(G)));
    if (typeof window < "u" && G === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && G === globalThis || typeof fc < "u" && G === fc)
      return "{ [object globalThis] }";
    if (!$e(G) && !Ee(G)) {
      var Wi = fo(G, $t), Fl = U ? U(G) === Object.prototype : G instanceof Object || G.constructor === Object, Xi = G instanceof Object ? "" : "null prototype", Bl = !Fl && N && Object(G) === G && N in G ? k.call(q(G), 8, -1) : Xi ? "Object" : "", nm = Fl || typeof G.constructor != "function" ? "" : G.constructor.name ? G.constructor.name + " " : "", Yi = nm + (Bl || Xi ? "[" + S.call(b.call([], Bl || [], Xi || []), ": ") + "] " : "");
      return Wi.length === 0 ? Yi + "{}" : Gn ? Yi + "{" + qi(Wi, Gn) + "}" : Yi + "{ " + S.call(Wi, ", ") + " }";
    }
    return String(G);
  };
  function _e(H, G, Be) {
    var He = Be.quoteStyle || G, Ge = de[He];
    return Ge + H + Ge;
  }
  function te(H) {
    return x.call(String(H), /"/g, "&quot;");
  }
  function oe(H) {
    return !N || !(typeof H == "object" && (N in H || typeof H[N] < "u"));
  }
  function me(H) {
    return q(H) === "[object Array]" && oe(H);
  }
  function $e(H) {
    return q(H) === "[object Date]" && oe(H);
  }
  function Ee(H) {
    return q(H) === "[object RegExp]" && oe(H);
  }
  function ae(H) {
    return q(H) === "[object Error]" && oe(H);
  }
  function xe(H) {
    return q(H) === "[object String]" && oe(H);
  }
  function ie(H) {
    return q(H) === "[object Number]" && oe(H);
  }
  function ve(H) {
    return q(H) === "[object Boolean]" && oe(H);
  }
  function R(H) {
    if (E)
      return H && typeof H == "object" && H instanceof Symbol;
    if (typeof H == "symbol")
      return !0;
    if (!H || typeof H != "object" || !O)
      return !1;
    try {
      return O.call(H), !0;
    } catch {
    }
    return !1;
  }
  function A(H) {
    if (!H || typeof H != "object" || !z)
      return !1;
    try {
      return z.call(H), !0;
    } catch {
    }
    return !1;
  }
  var D = Object.prototype.hasOwnProperty || function(H) {
    return H in this;
  };
  function V(H, G) {
    return D.call(H, G);
  }
  function q(H) {
    return m.call(H);
  }
  function ne(H) {
    if (H.name)
      return H.name;
    var G = g.call(h.call(H), /^function\s*([\w$]+)/);
    return G ? G[1] : null;
  }
  function re(H, G) {
    if (H.indexOf)
      return H.indexOf(G);
    for (var Be = 0, He = H.length; Be < He; Be++)
      if (H[Be] === G)
        return Be;
    return -1;
  }
  function ue(H) {
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
  function fe(H) {
    if (!l || !H || typeof H != "object")
      return !1;
    try {
      l.call(H, l);
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
  function ke(H) {
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
  function De(H) {
    if (!f || !H || typeof H != "object")
      return !1;
    try {
      f.call(H, f);
      try {
        l.call(H, l);
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
  function vt(H, G) {
    if (H.length > G.maxStringLength) {
      var Be = H.length - G.maxStringLength, He = "... " + Be + " more character" + (Be > 1 ? "s" : "");
      return vt(k.call(H, 0, G.maxStringLength), G) + He;
    }
    var Ge = ye[G.quoteStyle || "single"];
    Ge.lastIndex = 0;
    var ze = x.call(x.call(H, Ge, "\\$1"), /[\x00-\x1f]/g, Ui);
    return _e(ze, "single", G);
  }
  function Ui(H) {
    var G = H.charCodeAt(0), Be = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[G];
    return Be ? "\\" + Be : "\\x" + (G < 16 ? "0" : "") + $.call(G.toString(16));
  }
  function Sn(H) {
    return "Object(" + H + ")";
  }
  function vr(H) {
    return H + " { ? }";
  }
  function Ol(H, G, Be, He) {
    var Ge = He ? qi(Be, He) : S.call(Be, ", ");
    return H + " (" + G + ") {" + Ge + "}";
  }
  function em(H) {
    for (var G = 0; G < H.length; G++)
      if (re(H[G], `
`) >= 0)
        return !1;
    return !0;
  }
  function tm(H, G) {
    var Be;
    if (H.indent === "	")
      Be = "	";
    else if (typeof H.indent == "number" && H.indent > 0)
      Be = S.call(Array(H.indent + 1), " ");
    else
      return null;
    return {
      base: Be,
      prev: S.call(Array(G + 1), Be)
    };
  }
  function qi(H, G) {
    if (H.length === 0)
      return "";
    var Be = `
` + G.prev + G.base;
    return Be + S.call(H, "," + Be) + `
` + G.prev;
  }
  function fo(H, G) {
    var Be = me(H), He = [];
    if (Be) {
      He.length = H.length;
      for (var Ge = 0; Ge < H.length; Ge++)
        He[Ge] = V(H, Ge) ? G(H[Ge], H) : "";
    }
    var ze = typeof _ == "function" ? _(H) : [], un;
    if (E) {
      un = {};
      for (var En = 0; En < ze.length; En++)
        un["$" + ze[En]] = ze[En];
    }
    for (var gt in H)
      V(H, gt) && (Be && String(Number(gt)) === gt && gt < H.length || E && un["$" + gt] instanceof Symbol || (P.call(/[^\w$]/, gt) ? He.push(G(gt, H) + ": " + G(H[gt], H)) : He.push(gt + ": " + G(H[gt], H))));
    if (typeof _ == "function")
      for (var cn = 0; cn < ze.length; cn++)
        w.call(H, ze[cn]) && He.push("[" + G(ze[cn]) + "]: " + G(H[ze[cn]], H));
    return He;
  }
  return pa;
}
var ha, mc;
function W3() {
  if (mc) return ha;
  mc = 1;
  var e = /* @__PURE__ */ Oi(), t = /* @__PURE__ */ hr(), n = function(s, u, l) {
    for (var c = s, f; (f = c.next) != null; c = f)
      if (f.key === u)
        return c.next = f.next, l || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, r = function(s, u) {
    if (s) {
      var l = n(s, u);
      return l && l.value;
    }
  }, o = function(s, u, l) {
    var c = n(s, u);
    c ? c.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: s.next,
      value: l
    };
  }, i = function(s, u) {
    return s ? !!n(s, u) : !1;
  }, a = function(s, u) {
    if (s)
      return n(s, u, !0);
  };
  return ha = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var f = a(u, c);
        return f && u && !u.next && (u = void 0), !!f;
      },
      get: function(c) {
        return r(u, c);
      },
      has: function(c) {
        return i(u, c);
      },
      set: function(c, f) {
        u || (u = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          u,
          c,
          f
        );
      }
    };
    return l;
  }, ha;
}
var ma, vc;
function Xp() {
  return vc || (vc = 1, ma = Object), ma;
}
var va, gc;
function X3() {
  return gc || (gc = 1, va = Error), va;
}
var ga, yc;
function Y3() {
  return yc || (yc = 1, ga = EvalError), ga;
}
var ya, bc;
function K3() {
  return bc || (bc = 1, ya = RangeError), ya;
}
var ba, xc;
function Z3() {
  return xc || (xc = 1, ba = ReferenceError), ba;
}
var xa, wc;
function J3() {
  return wc || (wc = 1, xa = SyntaxError), xa;
}
var wa, _c;
function Q3() {
  return _c || (_c = 1, wa = URIError), wa;
}
var _a, Sc;
function eA() {
  return Sc || (Sc = 1, _a = Math.abs), _a;
}
var Sa, Ec;
function tA() {
  return Ec || (Ec = 1, Sa = Math.floor), Sa;
}
var Ea, kc;
function nA() {
  return kc || (kc = 1, Ea = Math.max), Ea;
}
var ka, Pc;
function rA() {
  return Pc || (Pc = 1, ka = Math.min), ka;
}
var Pa, $c;
function oA() {
  return $c || ($c = 1, Pa = Math.pow), Pa;
}
var $a, Cc;
function iA() {
  return Cc || (Cc = 1, $a = Math.round), $a;
}
var Ca, zc;
function aA() {
  return zc || (zc = 1, Ca = Number.isNaN || function(t) {
    return t !== t;
  }), Ca;
}
var za, Ac;
function sA() {
  if (Ac) return za;
  Ac = 1;
  var e = /* @__PURE__ */ aA();
  return za = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, za;
}
var Aa, Tc;
function lA() {
  return Tc || (Tc = 1, Aa = Object.getOwnPropertyDescriptor), Aa;
}
var Ta, Oc;
function Yp() {
  if (Oc) return Ta;
  Oc = 1;
  var e = /* @__PURE__ */ lA();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ta = e, Ta;
}
var Oa, Nc;
function uA() {
  if (Nc) return Oa;
  Nc = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Oa = e, Oa;
}
var Na, Ic;
function cA() {
  return Ic || (Ic = 1, Na = function() {
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
  }), Na;
}
var Ia, Rc;
function dA() {
  if (Rc) return Ia;
  Rc = 1;
  var e = typeof Symbol < "u" && Symbol, t = cA();
  return Ia = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ia;
}
var Ra, Mc;
function Kp() {
  return Mc || (Mc = 1, Ra = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ra;
}
var Ma, Dc;
function Zp() {
  if (Dc) return Ma;
  Dc = 1;
  var e = /* @__PURE__ */ Xp();
  return Ma = e.getPrototypeOf || null, Ma;
}
var Da, Fc;
function fA() {
  if (Fc) return Da;
  Fc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(u, l) {
    for (var c = [], f = 0; f < u.length; f += 1)
      c[f] = u[f];
    for (var v = 0; v < l.length; v += 1)
      c[v + u.length] = l[v];
    return c;
  }, i = function(u, l) {
    for (var c = [], f = l, v = 0; f < u.length; f += 1, v += 1)
      c[v] = u[f];
    return c;
  }, a = function(s, u) {
    for (var l = "", c = 0; c < s.length; c += 1)
      l += s[c], c + 1 < s.length && (l += u);
    return l;
  };
  return Da = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var c = i(arguments, 1), f, v = function() {
      if (this instanceof f) {
        var g = l.apply(
          this,
          o(c, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return l.apply(
        u,
        o(c, arguments)
      );
    }, y = n(0, l.length - c.length), p = [], m = 0; m < y; m++)
      p[m] = "$" + m;
    if (f = Function("binder", "return function (" + a(p, ",") + "){ return binder.apply(this,arguments); }")(v), l.prototype) {
      var h = function() {
      };
      h.prototype = l.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, Da;
}
var Fa, Bc;
function Ni() {
  if (Bc) return Fa;
  Bc = 1;
  var e = fA();
  return Fa = Function.prototype.bind || e, Fa;
}
var Ba, Lc;
function wl() {
  return Lc || (Lc = 1, Ba = Function.prototype.call), Ba;
}
var La, Uc;
function Jp() {
  return Uc || (Uc = 1, La = Function.prototype.apply), La;
}
var Ua, qc;
function pA() {
  return qc || (qc = 1, Ua = typeof Reflect < "u" && Reflect && Reflect.apply), Ua;
}
var qa, Vc;
function hA() {
  if (Vc) return qa;
  Vc = 1;
  var e = Ni(), t = Jp(), n = wl(), r = pA();
  return qa = r || e.call(n, t), qa;
}
var Va, Hc;
function Qp() {
  if (Hc) return Va;
  Hc = 1;
  var e = Ni(), t = /* @__PURE__ */ hr(), n = wl(), r = hA();
  return Va = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return r(e, n, i);
  }, Va;
}
var Ha, jc;
function mA() {
  if (jc) return Ha;
  jc = 1;
  var e = Qp(), t = /* @__PURE__ */ Yp(), n;
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
var ja, Gc;
function vA() {
  if (Gc) return ja;
  Gc = 1;
  var e = Kp(), t = Zp(), n = /* @__PURE__ */ mA();
  return ja = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, ja;
}
var Ga, Wc;
function gA() {
  if (Wc) return Ga;
  Wc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Ni();
  return Ga = n.call(e, t), Ga;
}
var Wa, Xc;
function _l() {
  if (Xc) return Wa;
  Xc = 1;
  var e, t = /* @__PURE__ */ Xp(), n = /* @__PURE__ */ X3(), r = /* @__PURE__ */ Y3(), o = /* @__PURE__ */ K3(), i = /* @__PURE__ */ Z3(), a = /* @__PURE__ */ J3(), s = /* @__PURE__ */ hr(), u = /* @__PURE__ */ Q3(), l = /* @__PURE__ */ eA(), c = /* @__PURE__ */ tA(), f = /* @__PURE__ */ nA(), v = /* @__PURE__ */ rA(), y = /* @__PURE__ */ oA(), p = /* @__PURE__ */ iA(), m = /* @__PURE__ */ sA(), h = Function, g = function(Ee) {
    try {
      return h('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, k = /* @__PURE__ */ Yp(), x = /* @__PURE__ */ uA(), $ = function() {
    throw new s();
  }, T = k ? (function() {
    try {
      return arguments.callee, $;
    } catch {
      try {
        return k(arguments, "callee").get;
      } catch {
        return $;
      }
    }
  })() : $, P = dA()(), b = vA(), S = Zp(), L = Kp(), M = Jp(), z = wl(), _ = {}, O = typeof Uint8Array > "u" || !b ? e : b(Uint8Array), E = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": P && b ? b([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": _,
    "%AsyncGenerator%": _,
    "%AsyncGeneratorFunction%": _,
    "%AsyncIteratorPrototype%": _,
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
    "%GeneratorFunction%": _,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": P && b ? b(b([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !P || !b ? e : b((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": k,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !P || !b ? e : b((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": P && b ? b(""[Symbol.iterator]()) : e,
    "%Symbol%": P ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": T,
    "%TypedArray%": O,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": z,
    "%Function.prototype.apply%": M,
    "%Object.defineProperty%": x,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": v,
    "%Math.pow%": y,
    "%Math.round%": p,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": L
  };
  if (b)
    try {
      null.error;
    } catch (Ee) {
      var N = b(b(Ee));
      E["%Error.prototype%"] = N;
    }
  var w = function Ee(ae) {
    var xe;
    if (ae === "%AsyncFunction%")
      xe = g("async function () {}");
    else if (ae === "%GeneratorFunction%")
      xe = g("function* () {}");
    else if (ae === "%AsyncGeneratorFunction%")
      xe = g("async function* () {}");
    else if (ae === "%AsyncGenerator%") {
      var ie = Ee("%AsyncGeneratorFunction%");
      ie && (xe = ie.prototype);
    } else if (ae === "%AsyncIteratorPrototype%") {
      var ve = Ee("%AsyncGenerator%");
      ve && b && (xe = b(ve.prototype));
    }
    return E[ae] = xe, xe;
  }, U = {
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
  }, B = Ni(), Z = /* @__PURE__ */ gA(), Q = B.call(z, Array.prototype.concat), ee = B.call(M, Array.prototype.splice), de = B.call(z, String.prototype.replace), ye = B.call(z, String.prototype.slice), _e = B.call(z, RegExp.prototype.exec), te = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, oe = /\\(\\)?/g, me = function(ae) {
    var xe = ye(ae, 0, 1), ie = ye(ae, -1);
    if (xe === "%" && ie !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (ie === "%" && xe !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ve = [];
    return de(ae, te, function(R, A, D, V) {
      ve[ve.length] = D ? de(V, oe, "$1") : A || R;
    }), ve;
  }, $e = function(ae, xe) {
    var ie = ae, ve;
    if (Z(U, ie) && (ve = U[ie], ie = "%" + ve[0] + "%"), Z(E, ie)) {
      var R = E[ie];
      if (R === _ && (R = w(ie)), typeof R > "u" && !xe)
        throw new s("intrinsic " + ae + " exists, but is not available. Please file an issue!");
      return {
        alias: ve,
        name: ie,
        value: R
      };
    }
    throw new a("intrinsic " + ae + " does not exist!");
  };
  return Wa = function(ae, xe) {
    if (typeof ae != "string" || ae.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof xe != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (_e(/^%?[^%]*%?$/, ae) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ie = me(ae), ve = ie.length > 0 ? ie[0] : "", R = $e("%" + ve + "%", xe), A = R.name, D = R.value, V = !1, q = R.alias;
    q && (ve = q[0], ee(ie, Q([0, 1], q)));
    for (var ne = 1, re = !0; ne < ie.length; ne += 1) {
      var ue = ie[ne], fe = ye(ue, 0, 1), be = ye(ue, -1);
      if ((fe === '"' || fe === "'" || fe === "`" || be === '"' || be === "'" || be === "`") && fe !== be)
        throw new a("property names with quotes must have matching quotes");
      if ((ue === "constructor" || !re) && (V = !0), ve += "." + ue, A = "%" + ve + "%", Z(E, A))
        D = E[A];
      else if (D != null) {
        if (!(ue in D)) {
          if (!xe)
            throw new s("base intrinsic for " + ae + " exists, but the property is not available.");
          return;
        }
        if (k && ne + 1 >= ie.length) {
          var ke = k(D, ue);
          re = !!ke, re && "get" in ke && !("originalValue" in ke.get) ? D = ke.get : D = D[ue];
        } else
          re = Z(D, ue), D = D[ue];
        re && !V && (E[A] = D);
      }
    }
    return D;
  }, Wa;
}
var Xa, Yc;
function eh() {
  if (Yc) return Xa;
  Yc = 1;
  var e = /* @__PURE__ */ _l(), t = Qp(), n = t([e("%String.prototype.indexOf%")]);
  return Xa = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Xa;
}
var Ya, Kc;
function th() {
  if (Kc) return Ya;
  Kc = 1;
  var e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ eh(), n = /* @__PURE__ */ Oi(), r = /* @__PURE__ */ hr(), o = e("%Map%", !0), i = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ya = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, v = {
      assert: function(y) {
        if (!v.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (f) {
          var p = u(f, y);
          return l(f) === 0 && (f = void 0), p;
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
  }, Ya;
}
var Ka, Zc;
function yA() {
  if (Zc) return Ka;
  Zc = 1;
  var e = /* @__PURE__ */ _l(), t = /* @__PURE__ */ eh(), n = /* @__PURE__ */ Oi(), r = th(), o = /* @__PURE__ */ hr(), i = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ka = i ? (
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
              return l(f, p);
          } else if (r && v)
            return v.delete(p);
          return !1;
        },
        get: function(p) {
          return i && p && (typeof p == "object" || typeof p == "function") && f ? a(f, p) : v && v.get(p);
        },
        has: function(p) {
          return i && p && (typeof p == "object" || typeof p == "function") && f ? u(f, p) : !!v && v.has(p);
        },
        set: function(p, m) {
          i && p && (typeof p == "object" || typeof p == "function") ? (f || (f = new i()), s(f, p, m)) : r && (v || (v = r()), v.set(p, m));
        }
      };
      return y;
    }
  ) : r, Ka;
}
var Za, Jc;
function nh() {
  if (Jc) return Za;
  Jc = 1;
  var e = /* @__PURE__ */ hr(), t = /* @__PURE__ */ Oi(), n = W3(), r = th(), o = yA(), i = o || r || n;
  return Za = function() {
    var s, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!s && s.delete(l);
      },
      get: function(l) {
        return s && s.get(l);
      },
      has: function(l) {
        return !!s && s.has(l);
      },
      set: function(l, c) {
        s || (s = i()), s.set(l, c);
      }
    };
    return u;
  }, Za;
}
var Ja, Qc;
function Sl() {
  if (Qc) return Ja;
  Qc = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ja = {
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
  }, Ja;
}
var Qa, ed;
function rh() {
  if (ed) return Qa;
  ed = 1;
  var e = /* @__PURE__ */ Sl(), t = nh(), n = Object.prototype.hasOwnProperty, r = Array.isArray, o = t(), i = function(b, S) {
    return o.set(b, S), b;
  }, a = function(b) {
    return o.has(b);
  }, s = function(b) {
    return o.get(b);
  }, u = function(b, S) {
    o.set(b, S);
  }, l = (function() {
    for (var P = [], b = 0; b < 256; ++b)
      P[P.length] = "%" + ((b < 16 ? "0" : "") + b.toString(16)).toUpperCase();
    return P;
  })(), c = function(b) {
    for (; b.length > 1; ) {
      var S = b.pop(), L = S.obj[S.prop];
      if (r(L)) {
        for (var M = [], z = 0; z < L.length; ++z)
          typeof L[z] < "u" && (M[M.length] = L[z]);
        S.obj[S.prop] = M;
      }
    }
  }, f = function(b, S) {
    for (var L = S && S.plainObjects ? { __proto__: null } : {}, M = 0; M < b.length; ++M)
      typeof b[M] < "u" && (L[M] = b[M]);
    return L;
  }, v = function P(b, S, L) {
    if (!S)
      return b;
    if (typeof S != "object" && typeof S != "function") {
      if (r(b)) {
        var M = b.length;
        if (L && typeof L.arrayLimit == "number" && M > L.arrayLimit)
          return i(f(b.concat(S), L), M);
        b[M] = S;
      } else if (b && typeof b == "object")
        if (a(b)) {
          var z = s(b) + 1;
          b[z] = S, u(b, z);
        } else {
          if (L && L.strictMerge)
            return [b, S];
          (L && (L.plainObjects || L.allowPrototypes) || !n.call(Object.prototype, S)) && (b[S] = !0);
        }
      else
        return [b, S];
      return b;
    }
    if (!b || typeof b != "object") {
      if (a(S)) {
        for (var _ = Object.keys(S), O = L && L.plainObjects ? { __proto__: null, 0: b } : { 0: b }, E = 0; E < _.length; E++) {
          var N = parseInt(_[E], 10);
          O[N + 1] = S[_[E]];
        }
        return i(O, s(S) + 1);
      }
      var w = [b].concat(S);
      return L && typeof L.arrayLimit == "number" && w.length > L.arrayLimit ? i(f(w, L), w.length - 1) : w;
    }
    var U = b;
    return r(b) && !r(S) && (U = f(b, L)), r(b) && r(S) ? (S.forEach(function(B, Z) {
      if (n.call(b, Z)) {
        var Q = b[Z];
        Q && typeof Q == "object" && B && typeof B == "object" ? b[Z] = P(Q, B, L) : b[b.length] = B;
      } else
        b[Z] = B;
    }), b) : Object.keys(S).reduce(function(B, Z) {
      var Q = S[Z];
      if (n.call(B, Z) ? B[Z] = P(B[Z], Q, L) : B[Z] = Q, a(S) && !a(B) && i(B, s(S)), a(B)) {
        var ee = parseInt(Z, 10);
        String(ee) === Z && ee >= 0 && ee > s(B) && u(B, ee);
      }
      return B;
    }, U);
  }, y = function(b, S) {
    return Object.keys(S).reduce(function(L, M) {
      return L[M] = S[M], L;
    }, b);
  }, p = function(P, b, S) {
    var L = P.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return L.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(L);
    } catch {
      return L;
    }
  }, m = 1024, h = function(b, S, L, M, z) {
    if (b.length === 0)
      return b;
    var _ = b;
    if (typeof b == "symbol" ? _ = Symbol.prototype.toString.call(b) : typeof b != "string" && (_ = String(b)), L === "iso-8859-1")
      return escape(_).replace(/%u[0-9a-f]{4}/gi, function(Z) {
        return "%26%23" + parseInt(Z.slice(2), 16) + "%3B";
      });
    for (var O = "", E = 0; E < _.length; E += m) {
      for (var N = _.length >= m ? _.slice(E, E + m) : _, w = [], U = 0; U < N.length; ++U) {
        var B = N.charCodeAt(U);
        if (B === 45 || B === 46 || B === 95 || B === 126 || B >= 48 && B <= 57 || B >= 65 && B <= 90 || B >= 97 && B <= 122 || z === e.RFC1738 && (B === 40 || B === 41)) {
          w[w.length] = N.charAt(U);
          continue;
        }
        if (B < 128) {
          w[w.length] = l[B];
          continue;
        }
        if (B < 2048) {
          w[w.length] = l[192 | B >> 6] + l[128 | B & 63];
          continue;
        }
        if (B < 55296 || B >= 57344) {
          w[w.length] = l[224 | B >> 12] + l[128 | B >> 6 & 63] + l[128 | B & 63];
          continue;
        }
        U += 1, B = 65536 + ((B & 1023) << 10 | N.charCodeAt(U) & 1023), w[w.length] = l[240 | B >> 18] + l[128 | B >> 12 & 63] + l[128 | B >> 6 & 63] + l[128 | B & 63];
      }
      O += w.join("");
    }
    return O;
  }, g = function(b) {
    for (var S = [{ obj: { o: b }, prop: "o" }], L = [], M = 0; M < S.length; ++M)
      for (var z = S[M], _ = z.obj[z.prop], O = Object.keys(_), E = 0; E < O.length; ++E) {
        var N = O[E], w = _[N];
        typeof w == "object" && w !== null && L.indexOf(w) === -1 && (S[S.length] = { obj: _, prop: N }, L[L.length] = w);
      }
    return c(S), b;
  }, k = function(b) {
    return Object.prototype.toString.call(b) === "[object RegExp]";
  }, x = function(b) {
    return !b || typeof b != "object" ? !1 : !!(b.constructor && b.constructor.isBuffer && b.constructor.isBuffer(b));
  }, $ = function(b, S, L, M) {
    if (a(b)) {
      var z = s(b) + 1;
      return b[z] = S, u(b, z), b;
    }
    var _ = [].concat(b, S);
    return _.length > L ? i(f(_, { plainObjects: M }), _.length - 1) : _;
  }, T = function(b, S) {
    if (r(b)) {
      for (var L = [], M = 0; M < b.length; M += 1)
        L[L.length] = S(b[M]);
      return L;
    }
    return S(b);
  };
  return Qa = {
    arrayToObject: f,
    assign: y,
    combine: $,
    compact: g,
    decode: p,
    encode: h,
    isBuffer: x,
    isOverflow: a,
    isRegExp: k,
    markOverflow: i,
    maybeMap: T,
    merge: v
  }, Qa;
}
var es, td;
function bA() {
  if (td) return es;
  td = 1;
  var e = nh(), t = /* @__PURE__ */ rh(), n = /* @__PURE__ */ Sl(), r = Object.prototype.hasOwnProperty, o = {
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
  }, i = Array.isArray, a = Array.prototype.push, s = function(m, h) {
    a.apply(m, i(h) ? h : [h]);
  }, u = Date.prototype.toISOString, l = n.default, c = {
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
    format: l,
    formatter: n.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(h) {
      return u.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, v = {}, y = function m(h, g, k, x, $, T, P, b, S, L, M, z, _, O, E, N, w, U) {
    for (var B = h, Z = U, Q = 0, ee = !1; (Z = Z.get(v)) !== void 0 && !ee; ) {
      var de = Z.get(h);
      if (Q += 1, typeof de < "u") {
        if (de === Q)
          throw new RangeError("Cyclic object value");
        ee = !0;
      }
      typeof Z.get(v) > "u" && (Q = 0);
    }
    if (typeof L == "function" ? B = L(g, B) : B instanceof Date ? B = _(B) : k === "comma" && i(B) && (B = t.maybeMap(B, function(A) {
      return A instanceof Date ? _(A) : A;
    })), B === null) {
      if (T)
        return S && !N ? S(g, c.encoder, w, "key", O) : g;
      B = "";
    }
    if (f(B) || t.isBuffer(B)) {
      if (S) {
        var ye = N ? g : S(g, c.encoder, w, "key", O);
        return [E(ye) + "=" + E(S(B, c.encoder, w, "value", O))];
      }
      return [E(g) + "=" + E(String(B))];
    }
    var _e = [];
    if (typeof B > "u")
      return _e;
    var te;
    if (k === "comma" && i(B))
      N && S && (B = t.maybeMap(B, S)), te = [{ value: B.length > 0 ? B.join(",") || null : void 0 }];
    else if (i(L))
      te = L;
    else {
      var oe = Object.keys(B);
      te = M ? oe.sort(M) : oe;
    }
    var me = b ? String(g).replace(/\./g, "%2E") : String(g), $e = x && i(B) && B.length === 1 ? me + "[]" : me;
    if ($ && i(B) && B.length === 0)
      return $e + "[]";
    for (var Ee = 0; Ee < te.length; ++Ee) {
      var ae = te[Ee], xe = typeof ae == "object" && ae && typeof ae.value < "u" ? ae.value : B[ae];
      if (!(P && xe === null)) {
        var ie = z && b ? String(ae).replace(/\./g, "%2E") : String(ae), ve = i(B) ? typeof k == "function" ? k($e, ie) : $e : $e + (z ? "." + ie : "[" + ie + "]");
        U.set(h, Q);
        var R = e();
        R.set(v, U), s(_e, m(
          xe,
          ve,
          k,
          x,
          $,
          T,
          P,
          b,
          k === "comma" && N && i(B) ? null : S,
          L,
          M,
          z,
          _,
          O,
          E,
          N,
          w,
          R
        ));
      }
    }
    return _e;
  }, p = function(h) {
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
    var x = n.formatters[k], $ = c.filter;
    (typeof h.filter == "function" || i(h.filter)) && ($ = h.filter);
    var T;
    if (h.arrayFormat in o ? T = h.arrayFormat : "indices" in h ? T = h.indices ? "indices" : "repeat" : T = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var P = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: P,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: T,
      charset: g,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: $,
      format: k,
      formatter: x,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return es = function(m, h) {
    var g = m, k = p(h), x, $;
    typeof k.filter == "function" ? ($ = k.filter, g = $("", g)) : i(k.filter) && ($ = k.filter, x = $);
    var T = [];
    if (typeof g != "object" || g === null)
      return "";
    var P = o[k.arrayFormat], b = P === "comma" && k.commaRoundTrip;
    x || (x = Object.keys(g)), k.sort && x.sort(k.sort);
    for (var S = e(), L = 0; L < x.length; ++L) {
      var M = x[L], z = g[M];
      k.skipNulls && z === null || s(T, y(
        z,
        M,
        P,
        b,
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
    var _ = T.join(k.delimiter), O = k.addQueryPrefix === !0 ? "?" : "";
    return k.charsetSentinel && (k.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), _.length > 0 ? O + _ : "";
  }, es;
}
var ts, nd;
function xA() {
  if (nd) return ts;
  nd = 1;
  var e = /* @__PURE__ */ rh(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", u = function(p, m) {
    var h = { __proto__: null }, g = m.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var k = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, x = g.split(
      m.delimiter,
      m.throwOnLimitExceeded && typeof k < "u" ? k + 1 : k
    );
    if (m.throwOnLimitExceeded && typeof k < "u" && x.length > k)
      throw new RangeError("Parameter limit exceeded. Only " + k + " parameter" + (k === 1 ? "" : "s") + " allowed.");
    var $ = -1, T, P = m.charset;
    if (m.charsetSentinel)
      for (T = 0; T < x.length; ++T)
        x[T].indexOf("utf8=") === 0 && (x[T] === s ? P = "utf-8" : x[T] === a && (P = "iso-8859-1"), $ = T, T = x.length);
    for (T = 0; T < x.length; ++T)
      if (T !== $) {
        var b = x[T], S = b.indexOf("]="), L = S === -1 ? b.indexOf("=") : S + 1, M, z;
        if (L === -1 ? (M = m.decoder(b, r.decoder, P, "key"), z = m.strictNullHandling ? null : "") : (M = m.decoder(b.slice(0, L), r.decoder, P, "key"), M !== null && (z = e.maybeMap(
          i(
            b.slice(L + 1),
            m,
            n(h[M]) ? h[M].length : 0
          ),
          function(O) {
            return m.decoder(O, r.decoder, P, "value");
          }
        ))), z && m.interpretNumericEntities && P === "iso-8859-1" && (z = o(String(z))), b.indexOf("[]=") > -1 && (z = n(z) ? [z] : z), m.comma && n(z) && z.length > m.arrayLimit) {
          if (m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          z = e.combine([], z, m.arrayLimit, m.plainObjects);
        }
        if (M !== null) {
          var _ = t.call(h, M);
          _ && (m.duplicates === "combine" || b.indexOf("[]=") > -1) ? h[M] = e.combine(
            h[M],
            z,
            m.arrayLimit,
            m.plainObjects
          ) : (!_ || m.duplicates === "last") && (h[M] = z);
        }
      }
    return h;
  }, l = function(y, p, m, h) {
    var g = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var k = y.slice(0, -1).join("");
      g = Array.isArray(p) && p[k] ? p[k].length : 0;
    }
    for (var x = h ? p : i(p, m, g), $ = y.length - 1; $ >= 0; --$) {
      var T, P = y[$];
      if (P === "[]" && m.parseArrays)
        e.isOverflow(x) ? T = x : T = m.allowEmptyArrays && (x === "" || m.strictNullHandling && x === null) ? [] : e.combine(
          [],
          x,
          m.arrayLimit,
          m.plainObjects
        );
      else {
        T = m.plainObjects ? { __proto__: null } : {};
        var b = P.charAt(0) === "[" && P.charAt(P.length - 1) === "]" ? P.slice(1, -1) : P, S = m.decodeDotInKeys ? b.replace(/%2E/g, ".") : b, L = parseInt(S, 10), M = !isNaN(L) && P !== S && String(L) === S && L >= 0 && m.parseArrays;
        if (!m.parseArrays && S === "")
          T = { 0: x };
        else if (M && L < m.arrayLimit)
          T = [], T[L] = x;
        else {
          if (M && m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          M ? (T[L] = x, e.markOverflow(T, L)) : S !== "__proto__" && (T[S] = x);
        }
      }
      x = T;
    }
    return x;
  }, c = function(p, m) {
    var h = m.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (m.depth <= 0)
      return !m.plainObjects && t.call(Object.prototype, h) && !m.allowPrototypes ? void 0 : [h];
    var g = /(\[[^[\]]*])/, k = /(\[[^[\]]*])/g, x = g.exec(h), $ = x ? h.slice(0, x.index) : h, T = [];
    if ($) {
      if (!m.plainObjects && t.call(Object.prototype, $) && !m.allowPrototypes)
        return;
      T[T.length] = $;
    }
    for (var P = 0; (x = k.exec(h)) !== null && P < m.depth; ) {
      P += 1;
      var b = x[1].slice(1, -1);
      if (!m.plainObjects && t.call(Object.prototype, b) && !m.allowPrototypes)
        return;
      T[T.length] = x[1];
    }
    if (x) {
      if (m.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + m.depth + " and strictDepth is true");
      T[T.length] = "[" + h.slice(x.index) + "]";
    }
    return T;
  }, f = function(p, m, h, g) {
    if (p) {
      var k = c(p, h);
      if (k)
        return l(k, m, h, g);
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
    var g = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : r.allowDots : !!p.allowDots;
    return {
      allowDots: g,
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
  return ts = function(y, p) {
    var m = v(p);
    if (y === "" || y === null || typeof y > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var h = typeof y == "string" ? u(y, m) : y, g = m.plainObjects ? { __proto__: null } : {}, k = Object.keys(h), x = 0; x < k.length; ++x) {
      var $ = k[x], T = f($, h[$], m, typeof y == "string");
      g = e.merge(g, T, m);
    }
    return m.allowSparse === !0 ? g : e.compact(g);
  }, ts;
}
var ns, rd;
function wA() {
  if (rd) return ns;
  rd = 1;
  var e = /* @__PURE__ */ bA(), t = /* @__PURE__ */ xA(), n = /* @__PURE__ */ Sl();
  return ns = {
    formats: n,
    parse: t,
    stringify: e
  }, ns;
}
var od = /* @__PURE__ */ wA();
function oh(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _A } = Object.prototype, { getPrototypeOf: El } = Object, { iterator: Ii, toStringTag: ih } = Symbol, Ri = /* @__PURE__ */ ((e) => (t) => {
  const n = _A.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Mt = (e) => (e = e.toLowerCase(), (t) => Ri(t) === e), Mi = (e) => (t) => typeof t === e, { isArray: mr } = Array, cr = Mi("undefined");
function ao(e) {
  return e !== null && !cr(e) && e.constructor !== null && !cr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ah = Mt("ArrayBuffer");
function SA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ah(e.buffer), t;
}
const EA = Mi("string"), ht = Mi("function"), sh = Mi("number"), so = (e) => e !== null && typeof e == "object", kA = (e) => e === !0 || e === !1, Fo = (e) => {
  if (Ri(e) !== "object")
    return !1;
  const t = El(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ih in e) && !(Ii in e);
}, PA = (e) => {
  if (!so(e) || ao(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, $A = Mt("Date"), CA = Mt("File"), zA = (e) => !!(e && typeof e.uri < "u"), AA = (e) => e && typeof e.getParts < "u", TA = Mt("Blob"), OA = Mt("FileList"), NA = (e) => so(e) && ht(e.pipe);
function IA() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const id = IA(), ad = typeof id.FormData < "u" ? id.FormData : void 0, RA = (e) => {
  let t;
  return e && (ad && e instanceof ad || ht(e.append) && ((t = Ri(e)) === "formdata" || // detect form-data instance
  t === "object" && ht(e.toString) && e.toString() === "[object FormData]"));
}, MA = Mt("URLSearchParams"), [DA, FA, BA, LA] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Mt), UA = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), mr(e))
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
function lh(e, t) {
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
const Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, uh = (e) => !cr(e) && e !== Tn;
function Ls() {
  const { caseless: e, skipUndefined: t } = uh(this) && this || {}, n = {}, r = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const a = e && lh(n, i) || i;
    Fo(n[a]) && Fo(o) ? n[a] = Ls(n[a], o) : Fo(o) ? n[a] = Ls({}, o) : mr(o) ? n[a] = o.slice() : (!t || !cr(o)) && (n[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && lo(arguments[o], r);
  return n;
}
const qA = (e, t, n, { allOwnKeys: r } = {}) => (lo(
  t,
  (o, i) => {
    n && ht(o) ? Object.defineProperty(e, i, {
      value: oh(o, n),
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
), e), VA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), HA = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, jA = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && El(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, GA = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, WA = (e) => {
  if (!e) return null;
  if (mr(e)) return e;
  let t = e.length;
  if (!sh(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, XA = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && El(Uint8Array)), YA = (e, t) => {
  const r = (e && e[Ii]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, KA = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ZA = Mt("HTMLFormElement"), JA = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), sd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), QA = Mt("RegExp"), ch = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  lo(n, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (r[i] = a || o);
  }), Object.defineProperties(e, r);
}, eT = (e) => {
  ch(e, (t, n) => {
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
}, tT = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return mr(e) ? r(e) : r(String(e).split(t)), n;
}, nT = () => {
}, rT = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function oT(e) {
  return !!(e && ht(e.append) && e[ih] === "FormData" && e[Ii]);
}
const iT = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (so(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ao(r))
        return r;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = mr(r) ? [] : {};
        return lo(r, (a, s) => {
          const u = n(a, o + 1);
          !cr(u) && (i[s] = u);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, aT = Mt("AsyncFunction"), sT = (e) => e && (so(e) || ht(e)) && ht(e.then) && ht(e.catch), dh = ((e, t) => e ? setImmediate : t ? ((n, r) => (Tn.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === Tn && i === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Tn.postMessage)), lT = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tn) : typeof process < "u" && process.nextTick || dh, uT = (e) => e != null && ht(e[Ii]), j = {
  isArray: mr,
  isArrayBuffer: ah,
  isBuffer: ao,
  isFormData: RA,
  isArrayBufferView: SA,
  isString: EA,
  isNumber: sh,
  isBoolean: kA,
  isObject: so,
  isPlainObject: Fo,
  isEmptyObject: PA,
  isReadableStream: DA,
  isRequest: FA,
  isResponse: BA,
  isHeaders: LA,
  isUndefined: cr,
  isDate: $A,
  isFile: CA,
  isReactNativeBlob: zA,
  isReactNative: AA,
  isBlob: TA,
  isRegExp: QA,
  isFunction: ht,
  isStream: NA,
  isURLSearchParams: MA,
  isTypedArray: XA,
  isFileList: OA,
  forEach: lo,
  merge: Ls,
  extend: qA,
  trim: UA,
  stripBOM: VA,
  inherits: HA,
  toFlatObject: jA,
  kindOf: Ri,
  kindOfTest: Mt,
  endsWith: GA,
  toArray: WA,
  forEachEntry: YA,
  matchAll: KA,
  isHTMLForm: ZA,
  hasOwnProperty: sd,
  hasOwnProp: sd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ch,
  freezeMethods: eT,
  toObjectSet: tT,
  toCamelCase: JA,
  noop: nT,
  toFiniteNumber: rT,
  findKey: lh,
  global: Tn,
  isContextDefined: uh,
  isSpecCompliantForm: oT,
  toJSONObject: iT,
  isAsyncFn: aT,
  isThenable: sT,
  setImmediate: dh,
  asap: lT,
  isIterable: uT
};
let Se = class fh extends Error {
  static from(t, n, r, o, i, a) {
    const s = new fh(t.message, n || t.code, r, o, i);
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
      config: j.toJSONObject(this.config),
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
const cT = null;
function Us(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function ph(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rs(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = ph(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function dT(e) {
  return j.isArray(e) && !e.some(Us);
}
const fT = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Di(e, t, n) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = j.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, h) {
      return !j.isUndefined(h[m]);
    }
  );
  const r = n.metaTokens, o = n.visitor || c, i = n.dots, a = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (j.isDate(p))
      return p.toISOString();
    if (j.isBoolean(p))
      return p.toString();
    if (!u && j.isBlob(p))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(p) || j.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, m, h) {
    let g = p;
    if (j.isReactNative(t) && j.isReactNativeBlob(p))
      return t.append(rs(h, m, i), l(p)), !1;
    if (p && !h && typeof p == "object") {
      if (j.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (j.isArray(p) && dT(p) || (j.isFileList(p) || j.endsWith(m, "[]")) && (g = j.toArray(p)))
        return m = ph(m), g.forEach(function(x, $) {
          !(j.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? rs([m], $, i) : a === null ? m : m + "[]",
            l(x)
          );
        }), !1;
    }
    return Us(p) ? !0 : (t.append(rs(h, m, i), l(p)), !1);
  }
  const f = [], v = Object.assign(fT, {
    defaultVisitor: c,
    convertValue: l,
    isVisitable: Us
  });
  function y(p, m) {
    if (!j.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(p), j.forEach(p, function(g, k) {
        (!(j.isUndefined(g) || g === null) && o.call(t, g, j.isString(k) ? k.trim() : k, m, v)) === !0 && y(g, m ? m.concat(k) : [k]);
      }), f.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ld(e) {
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
function kl(e, t) {
  this._pairs = [], e && Di(e, this, t);
}
const hh = kl.prototype;
hh.append = function(t, n) {
  this._pairs.push([t, n]);
};
hh.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ld);
  } : ld;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function pT(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mh(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || pT, o = j.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let a;
  if (i ? a = i(t, o) : a = j.isURLSearchParams(t) ? t.toString() : new kl(t, o).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ud {
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
    j.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Pl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, hT = typeof URLSearchParams < "u" ? URLSearchParams : kl, mT = typeof FormData < "u" ? FormData : null, vT = typeof Blob < "u" ? Blob : null, gT = {
  isBrowser: !0,
  classes: {
    URLSearchParams: hT,
    FormData: mT,
    Blob: vT
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $l = typeof window < "u" && typeof document < "u", qs = typeof navigator == "object" && navigator || void 0, yT = $l && (!qs || ["ReactNative", "NativeScript", "NS"].indexOf(qs.product) < 0), bT = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xT = $l && window.location.href || "http://localhost", wT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $l,
  hasStandardBrowserEnv: yT,
  hasStandardBrowserWebWorkerEnv: bT,
  navigator: qs,
  origin: xT
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...wT,
  ...gT
};
function _T(e, t) {
  return Di(e, new ct.classes.URLSearchParams(), {
    visitor: function(n, r, o, i) {
      return ct.isNode && j.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function ST(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ET(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function vh(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), u = i >= n.length;
    return a = !a && j.isArray(o) ? o.length : a, u ? (j.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !j.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && j.isArray(o[a]) && (o[a] = ET(o[a])), !s);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return j.forEachEntry(e, (r, o) => {
      t(ST(r), o, n, 0);
    }), n;
  }
  return null;
}
function kT(e, t, n) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const uo = {
  transitional: Pl,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = j.isObject(t);
      if (i && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
        return o ? JSON.stringify(vh(t)) : t;
      if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
        return t;
      if (j.isArrayBufferView(t))
        return t.buffer;
      if (j.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return _T(t, this.formSerializer).toString();
        if ((s = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Di(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), kT(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || uo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (j.isResponse(t) || j.isReadableStream(t))
        return t;
      if (t && j.isString(t) && (r && !this.responseType || o)) {
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  uo.headers[e] = {};
});
const PT = j.toObjectSet([
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
]), $T = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && PT[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, cd = /* @__PURE__ */ Symbol("internals"), CT = (e) => !/[\r\n]/.test(e);
function gh(e, t) {
  if (!(e === !1 || e == null)) {
    if (j.isArray(e)) {
      e.forEach((n) => gh(n, t));
      return;
    }
    if (!CT(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Sr(e) {
  return e && String(e).trim().toLowerCase();
}
function zT(e) {
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
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Bo) : zT(String(e));
}
function AT(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const TT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function os(e, t, n, r, o) {
  if (j.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!j.isString(t)) {
    if (j.isString(r))
      return t.indexOf(r) !== -1;
    if (j.isRegExp(r))
      return r.test(t);
  }
}
function OT(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function NT(e, t) {
  const n = j.toCamelCase(" " + t);
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
    function i(s, u, l) {
      const c = Sr(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = j.findKey(o, c);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (gh(s, u), o[f || u] = Bo(s));
    }
    const a = (s, u) => j.forEach(s, (l, c) => i(l, c, u));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (j.isString(t) && (t = t.trim()) && !TT(t))
      a($T(t), n);
    else if (j.isObject(t) && j.isIterable(t)) {
      let s = {}, u, l;
      for (const c of t) {
        if (!j.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        s[l = c[0]] = (u = s[l]) ? j.isArray(u) ? [...u, c[1]] : [u, c[1]] : c[1];
      }
      a(s, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Sr(t), t) {
      const r = j.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return AT(o);
        if (j.isFunction(n))
          return n.call(this, o, r);
        if (j.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Sr(t), t) {
      const r = j.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || os(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = Sr(a), a) {
        const s = j.findKey(r, a);
        s && (!n || os(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return j.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || os(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return j.forEach(this, (o, i) => {
      const a = j.findKey(r, i);
      if (a) {
        n[a] = Bo(o), delete n[i];
        return;
      }
      const s = t ? OT(i) : String(i).trim();
      s !== i && delete n[i], n[s] = Bo(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && j.isArray(r) ? r.join(", ") : r);
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
    const r = (this[cd] = this[cd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Sr(a);
      r[s] || (NT(o, a), r[s] = !0);
    }
    return j.isArray(t) ? t.forEach(i) : i(t), this;
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
j.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
j.freezeMethods(mt);
function is(e, t) {
  const n = this || uo, r = t || n, o = mt.from(r.headers);
  let i = r.data;
  return j.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function yh(e) {
  return !!(e && e.__CANCEL__);
}
let co = class extends Se {
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
function bh(e, t, n) {
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
function IT(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function RT(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), c = r[i];
    a || (a = l), n[o] = u, r[o] = l;
    let f = i, v = 0;
    for (; f !== o; )
      v += n[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - a < t)
      return;
    const y = c && l - c;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function MT(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const a = (l, c = Date.now()) => {
    n = c, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const c = Date.now(), f = c - n;
    f >= r ? a(l, c) : (o = l, i || (i = setTimeout(() => {
      i = null, a(o);
    }, r - f)));
  }, () => o && a(o)];
}
const ui = (e, t, n = 3) => {
  let r = 0;
  const o = RT(50, 250);
  return MT((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, u = a - r, l = o(u), c = a <= s;
    r = a;
    const f = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && s && c ? (s - a) / l : void 0,
      event: i,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, dd = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, fd = (e) => (...t) => j.asap(() => e(...t)), DT = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, FT = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(t)}`];
      j.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), j.isString(r) && s.push(`path=${r}`), j.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), j.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function BT(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function LT(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xh(e, t, n) {
  let r = !BT(t);
  return e && (r || n == !1) ? LT(e, t) : t;
}
const pd = (e) => e instanceof mt ? { ...e } : e;
function Un(e, t) {
  t = t || {};
  const n = {};
  function r(l, c, f, v) {
    return j.isPlainObject(l) && j.isPlainObject(c) ? j.merge.call({ caseless: v }, l, c) : j.isPlainObject(c) ? j.merge({}, c) : j.isArray(c) ? c.slice() : c;
  }
  function o(l, c, f, v) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(l))
        return r(void 0, l, f, v);
    } else return r(l, c, f, v);
  }
  function i(l, c) {
    if (!j.isUndefined(c))
      return r(void 0, c);
  }
  function a(l, c) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, c);
  }
  function s(l, c, f) {
    if (f in t)
      return r(l, c);
    if (f in e)
      return r(void 0, l);
  }
  const u = {
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
    headers: (l, c, f) => o(pd(l), pd(c), f, !0)
  };
  return j.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const f = j.hasOwnProp(u, c) ? u[c] : o, v = f(e[c], t[c], c);
    j.isUndefined(v) && f !== s || (n[c] = v);
  }), n;
}
const wh = (e) => {
  const t = Un({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  if (t.headers = a = mt.from(a), t.url = mh(
    xh(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), s && a.set(
    "Authorization",
    "Basic " + btoa(
      (s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")
    )
  ), j.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (j.isFunction(n.getHeaders)) {
      const u = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(u).forEach(([c, f]) => {
        l.includes(c.toLowerCase()) && a.set(c, f);
      });
    }
  }
  if (ct.hasStandardBrowserEnv && (r && j.isFunction(r) && (r = r(t)), r || r !== !1 && DT(t.url))) {
    const u = o && i && FT.read(i);
    u && a.set(o, u);
  }
  return t;
}, UT = typeof XMLHttpRequest < "u", qT = UT && function(e) {
  return new Promise(function(n, r) {
    const o = wh(e);
    let i = o.data;
    const a = mt.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: u, onDownloadProgress: l } = o, c, f, v, y, p;
    function m() {
      y && y(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function g() {
      if (!h)
        return;
      const x = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !s || s === "text" || s === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: x,
        config: e,
        request: h
      };
      bh(
        function(b) {
          n(b), m();
        },
        function(b) {
          r(b), m();
        },
        T
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, h.onabort = function() {
      h && (r(new Se("Request aborted", Se.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function($) {
      const T = $ && $.message ? $.message : "Network Error", P = new Se(T, Se.ERR_NETWORK, e, h);
      P.event = $ || null, r(P), h = null;
    }, h.ontimeout = function() {
      let $ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const T = o.transitional || Pl;
      o.timeoutErrorMessage && ($ = o.timeoutErrorMessage), r(
        new Se(
          $,
          T.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
          e,
          h
        )
      ), h = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in h && j.forEach(a.toJSON(), function($, T) {
      h.setRequestHeader(T, $);
    }), j.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), s && s !== "json" && (h.responseType = o.responseType), l && ([v, p] = ui(l, !0), h.addEventListener("progress", v)), u && h.upload && ([f, y] = ui(u), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (x) => {
      h && (r(!x || x.type ? new co(null, e, h) : x), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const k = IT(o.url);
    if (k && ct.protocols.indexOf(k) === -1) {
      r(
        new Se(
          "Unsupported protocol " + k + ":",
          Se.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(i || null);
  });
}, VT = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, s();
        const c = l instanceof Error ? l : this.reason;
        r.abort(
          c instanceof Se ? c : new co(c instanceof Error ? c.message : c)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, i(new Se(`timeout of ${t}ms exceeded`, Se.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: u } = r;
    return u.unsubscribe = () => j.asap(s), u;
  }
}, HT = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, jT = async function* (e, t) {
  for await (const n of GT(e))
    yield* HT(n, t);
}, GT = async function* (e) {
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
}, hd = (e, t, n, r) => {
  const o = jT(e, t);
  let i = 0, a, s = (u) => {
    a || (a = !0, r && r(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: l, value: c } = await o.next();
          if (l) {
            s(), u.close();
            return;
          }
          let f = c.byteLength;
          if (n) {
            let v = i += f;
            n(v);
          }
          u.enqueue(new Uint8Array(c));
        } catch (l) {
          throw s(l), l;
        }
      },
      cancel(u) {
        return s(u), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, md = 64 * 1024, { isFunction: Po } = j, WT = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(j.global), { ReadableStream: vd, TextEncoder: gd } = j.global, yd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, XT = (e) => {
  e = j.merge.call(
    {
      skipUndefined: !0
    },
    WT,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, o = t ? Po(t) : typeof fetch == "function", i = Po(n), a = Po(r);
  if (!o)
    return !1;
  const s = o && Po(vd), u = o && (typeof gd == "function" ? /* @__PURE__ */ ((p) => (m) => p.encode(m))(new gd()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), l = i && s && yd(() => {
    let p = !1;
    const m = new vd(), h = new n(ct.origin, {
      body: m,
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return m.cancel(), p && !h;
  }), c = a && s && yd(() => j.isReadableStream(new r("").body)), f = {
    stream: c && ((p) => p.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (m, h) => {
      let g = m && m[p];
      if (g)
        return g.call(m);
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
    if (j.isBlob(p))
      return p.size;
    if (j.isSpecCompliantForm(p))
      return (await new n(ct.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (j.isArrayBufferView(p) || j.isArrayBuffer(p))
      return p.byteLength;
    if (j.isURLSearchParams(p) && (p = p + ""), j.isString(p))
      return (await u(p)).byteLength;
  }, y = async (p, m) => {
    const h = j.toFiniteNumber(p.getContentLength());
    return h ?? v(m);
  };
  return async (p) => {
    let {
      url: m,
      method: h,
      data: g,
      signal: k,
      cancelToken: x,
      timeout: $,
      onDownloadProgress: T,
      onUploadProgress: P,
      responseType: b,
      headers: S,
      withCredentials: L = "same-origin",
      fetchOptions: M
    } = wh(p), z = t || fetch;
    b = b ? (b + "").toLowerCase() : "text";
    let _ = VT(
      [k, x && x.toAbortSignal()],
      $
    ), O = null;
    const E = _ && _.unsubscribe && (() => {
      _.unsubscribe();
    });
    let N;
    try {
      if (P && l && h !== "get" && h !== "head" && (N = await y(S, g)) !== 0) {
        let ee = new n(m, {
          method: "POST",
          body: g,
          duplex: "half"
        }), de;
        if (j.isFormData(g) && (de = ee.headers.get("content-type")) && S.setContentType(de), ee.body) {
          const [ye, _e] = dd(
            N,
            ui(fd(P))
          );
          g = hd(ee.body, md, ye, _e);
        }
      }
      j.isString(L) || (L = L ? "include" : "omit");
      const w = i && "credentials" in n.prototype, U = {
        ...M,
        signal: _,
        method: h.toUpperCase(),
        headers: S.normalize().toJSON(),
        body: g,
        duplex: "half",
        credentials: w ? L : void 0
      };
      O = i && new n(m, U);
      let B = await (i ? z(O, M) : z(m, U));
      const Z = c && (b === "stream" || b === "response");
      if (c && (T || Z && E)) {
        const ee = {};
        ["status", "statusText", "headers"].forEach((te) => {
          ee[te] = B[te];
        });
        const de = j.toFiniteNumber(B.headers.get("content-length")), [ye, _e] = T && dd(
          de,
          ui(fd(T), !0)
        ) || [];
        B = new r(
          hd(B.body, md, ye, () => {
            _e && _e(), E && E();
          }),
          ee
        );
      }
      b = b || "text";
      let Q = await f[j.findKey(f, b) || "text"](
        B,
        p
      );
      return !Z && E && E(), await new Promise((ee, de) => {
        bh(ee, de, {
          data: Q,
          headers: mt.from(B.headers),
          status: B.status,
          statusText: B.statusText,
          config: p,
          request: O
        });
      });
    } catch (w) {
      throw E && E(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
        new Se(
          "Network Error",
          Se.ERR_NETWORK,
          p,
          O,
          w && w.response
        ),
        {
          cause: w.cause || w
        }
      ) : Se.from(w, w && w.code, p, O, w && w.response);
    }
  };
}, YT = /* @__PURE__ */ new Map(), _h = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, i = [r, o, n];
  let a = i.length, s = a, u, l, c = YT;
  for (; s--; )
    u = i[s], l = c.get(u), l === void 0 && c.set(u, l = s ? /* @__PURE__ */ new Map() : XT(t)), c = l;
  return l;
};
_h();
const Cl = {
  http: cT,
  xhr: qT,
  fetch: {
    get: _h
  }
};
j.forEach(Cl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bd = (e) => `- ${e}`, KT = (e) => j.isFunction(e) || e === null || e === !1;
function ZT(e, t) {
  e = j.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const i = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let s;
    if (o = r, !KT(r) && (o = Cl[(s = String(r)).toLowerCase()], o === void 0))
      throw new Se(`Unknown adapter '${s}'`);
    if (o && (j.isFunction(o) || (o = o.get(t))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? a.length > 1 ? `since :
` + a.map(bd).join(`
`) : " " + bd(a[0]) : "as no adapter specified";
    throw new Se(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Sh = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ZT,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cl
};
function as(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new co(null, e);
}
function xd(e) {
  return as(e), e.headers = mt.from(e.headers), e.data = is.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sh.getAdapter(e.adapter || uo.adapter, e)(e).then(
    function(r) {
      return as(e), r.data = is.call(e, e.transformResponse, r), r.headers = mt.from(r.headers), r;
    },
    function(r) {
      return yh(r) || (as(e), r && r.response && (r.response.data = is.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const Eh = "1.15.0", Fi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wd = {};
Fi.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + Eh + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Se(
        o(a, " has been removed" + (n ? " in " + n : "")),
        Se.ERR_DEPRECATED
      );
    return n && !wd[a] && (wd[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
Fi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function JT(e, t, n) {
  if (typeof e != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new Se(
          "option " + i + " must be " + u,
          Se.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Se("Unknown option " + i, Se.ERR_BAD_OPTION);
  }
}
const Lo = {
  assertOptions: JT,
  validators: Fi
}, St = Lo.validators;
let Rn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ud(),
      response: new ud()
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
`, a + 1), u = s === -1 ? "" : i.slice(s + 1);
            String(r.stack).endsWith(u) || (r.stack += `
` + i);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Un(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Lo.assertOptions(
      r,
      {
        silentJSONParsing: St.transitional(St.boolean),
        forcedJSONParsing: St.transitional(St.boolean),
        clarifyTimeoutError: St.transitional(St.boolean),
        legacyInterceptorReqResOrdering: St.transitional(St.boolean)
      },
      !1
    ), o != null && (j.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Lo.assertOptions(
      o,
      {
        encode: St.function,
        serialize: St.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Lo.assertOptions(
      n,
      {
        baseUrl: St.spelling("baseURL"),
        withXsrfToken: St.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && j.merge(i.common, i[n.method]);
    i && j.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete i[p];
    }), n.headers = mt.concat(a, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      u = u && m.synchronous;
      const h = n.transitional || Pl;
      h && h.legacyInterceptorReqResOrdering ? s.unshift(m.fulfilled, m.rejected) : s.push(m.fulfilled, m.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let c, f = 0, v;
    if (!u) {
      const p = [xd.bind(this), void 0];
      for (p.unshift(...s), p.push(...l), v = p.length, c = Promise.resolve(n); f < v; )
        c = c.then(p[f++], p[f++]);
      return c;
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
      c = xd.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, v = l.length; f < v; )
      c = c.then(l[f++], l[f++]);
    return c;
  }
  getUri(t) {
    t = Un(this.defaults, t);
    const n = xh(t.baseURL, t.url, t.allowAbsoluteUrls);
    return mh(n, t.params, t.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(t) {
  Rn.prototype[t] = function(n, r) {
    return this.request(
      Un(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(
        Un(s || {}, {
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
  Rn.prototype[t] = n(), Rn.prototype[t + "Form"] = n(!0);
});
let QT = class kh {
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
      token: new kh(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function e4(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function t4(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Vs = {
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
Object.entries(Vs).forEach(([e, t]) => {
  Vs[t] = e;
});
function Ph(e) {
  const t = new Rn(e), n = oh(Rn.prototype.request, t);
  return j.extend(n, Rn.prototype, t, { allOwnKeys: !0 }), j.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ph(Un(e, o));
  }, n;
}
const Ke = Ph(uo);
Ke.Axios = Rn;
Ke.CanceledError = co;
Ke.CancelToken = QT;
Ke.isCancel = yh;
Ke.VERSION = Eh;
Ke.toFormData = Di;
Ke.AxiosError = Se;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(t) {
  return Promise.all(t);
};
Ke.spread = e4;
Ke.isAxiosError = t4;
Ke.mergeConfig = Un;
Ke.AxiosHeaders = mt;
Ke.formToJSON = (e) => vh(j.isHTMLForm(e) ? new FormData(e) : e);
Ke.getAdapter = Sh.getAdapter;
Ke.HttpStatusCode = Vs;
Ke.default = Ke;
const {
  Axios: GO,
  AxiosError: WO,
  CanceledError: XO,
  isCancel: $h,
  CancelToken: YO,
  VERSION: KO,
  all: ZO,
  Cancel: JO,
  isAxiosError: Ch,
  spread: QO,
  toFormData: eN,
  AxiosHeaders: tN,
  HttpStatusCode: nN,
  formToJSON: rN,
  getAdapter: oN,
  mergeConfig: n4
} = Ke;
var r4 = class {
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
    return Wp(this.config, e) ? bt(this.config, e) : bt(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? Et(this.config, e, t) : Object.entries(e).forEach(([n, r]) => {
      Et(this.config, n, r);
    });
  }
}, wn = new r4({
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
function _t(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var _d = (e) => _t("before", { cancelable: !0, detail: { visit: e } }), o4 = (e) => _t("error", { detail: { errors: e } }), i4 = (e) => _t("exception", { cancelable: !0, detail: { exception: e } }), a4 = (e) => _t("finish", { detail: { visit: e } }), s4 = (e) => _t("invalid", { cancelable: !0, detail: { response: e } }), l4 = (e) => _t("beforeUpdate", { detail: { page: e } }), Rr = (e) => _t("navigate", { detail: { page: e } }), u4 = (e) => _t("progress", { detail: { progress: e } }), c4 = (e) => _t("start", { detail: { visit: e } }), d4 = (e) => _t("success", { detail: { page: e } }), f4 = (e, t) => _t("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), p4 = (e) => _t("prefetching", { detail: { visit: e } }), ci = (e) => _t("flash", { detail: { flash: e } }), dt = class {
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
var h4 = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = zh(), n = await Ah(), r = await x4(n);
  if (!r)
    throw new Error("Unable to encrypt history");
  return await v4(t, r, e);
}, dr = {
  key: "historyKey",
  iv: "historyIv"
}, m4 = async (e) => {
  const t = zh(), n = await Ah();
  if (!n)
    throw new Error("Unable to decrypt history");
  return await g4(t, n, e);
}, v4 = async (e, t, n) => {
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
}, g4 = async (e, t, n) => {
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
}, zh = () => {
  const e = dt.get(dr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return dt.set(dr.iv, Array.from(t)), t;
}, y4 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), b4 = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  dt.set(dr.key, Array.from(new Uint8Array(t)));
}, x4 = async (e) => {
  if (e)
    return e;
  const t = await y4();
  return t ? (await b4(t), t) : null;
}, Ah = async () => {
  const e = dt.get(dr.key);
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
}, Th = (e, t, n) => {
  if (e === t)
    return !0;
  for (const r in e)
    if (!n.includes(r) && e[r] !== t[r] && !w4(e[r], t[r]))
      return !1;
  for (const r in t)
    if (!n.includes(r) && !(r in e))
      return !1;
  return !0;
}, w4 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Th(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, _4 = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Sd = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, n] of Object.entries(_4))
    if (e.endsWith(t))
      return parseFloat(e) * n;
  return parseInt(e);
}, S4 = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n, cacheTags: r }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const i = this.findCached(e);
    if (!e.fresh && i && i.staleTimestamp > Date.now())
      return Promise.resolve();
    const [a, s] = this.extractStaleValues(n), u = new Promise((l, c) => {
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
          l(f);
        },
        onPrefetchError(f) {
          Lt.removeFromInFlight(e), c(f);
        }
      });
    }).then((l) => {
      this.remove(e);
      const c = l.getPageResponse();
      pe.mergeOncePropsIntoResponse(c), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + a,
        expiresAt: Date.now() + s,
        response: u,
        singleUse: s === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(r) ? r : [r]
      });
      const f = this.getShortestOncePropTtl(c);
      return this.scheduleForRemoval(
        e,
        f ? Math.min(s, f) : s
      ), this.removeFromInFlight(e), l.handlePrefetch(), l;
    });
    return this.inFlightRequests.push({
      params: { ...e },
      response: u,
      staleTimestamp: null,
      inFlight: !0
    }), u;
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
    return [Sd(t), Sd(n)];
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
    return Th(
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
        pe.mergeOncePropsIntoResponse(n, { force: !0 });
        for (const [a, s] of Object.entries(n.deferredProps ?? {})) {
          const u = s.filter((l) => n.props[l] === void 0);
          u.length > 0 ? n.deferredProps[a] = u : delete n.deferredProps[a];
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
}, Lt = new S4(), ss = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), n = t.top < window.innerHeight && t.bottom >= 0, r = t.left < window.innerWidth && t.right >= 0;
  return n && r;
}, E4 = (e) => {
  const t = (a) => {
    const s = window.getComputedStyle(a);
    return ["scroll", "overlay"].includes(s.overflowY) ? !0 : s.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(s.overflowX) ? !0 : r(s.maxHeight, a.style.height) || o(a, "height");
  }, n = (a) => {
    const s = window.getComputedStyle(a);
    return ["scroll", "overlay"].includes(s.overflowX) ? !0 : s.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(s.overflowY) ? !0 : r(s.maxWidth, a.style.width) || o(a, "width");
  }, r = (a, s) => !!(a && a !== "none" && a !== "0px" || s && s !== "auto" && s !== "0"), o = (a, s) => {
    const u = a.parentElement;
    if (!u)
      return !1;
    const l = window.getComputedStyle(u);
    if (["flex", "inline-flex"].includes(l.display)) {
      const c = ["column", "column-reverse"].includes(l.flexDirection);
      return s === "height" ? c : !c;
    }
    return ["grid", "inline-grid"].includes(l.display);
  };
  let i = e?.parentElement;
  for (; i; ) {
    const a = t(i) || n(i);
    if (window.getComputedStyle(i).display !== "contents" && a)
      return i;
    i = i.parentElement;
  }
  return null;
}, Oh = (e, t) => {
  if (!t)
    return e.filter((i) => ss(i));
  const n = e.indexOf(t), r = [], o = [];
  for (let i = n; i >= 0; i--) {
    const a = e[i];
    if (ss(a))
      r.push(a);
    else
      break;
  }
  for (let i = n + 1; i < e.length; i++) {
    const a = e[i];
    if (ss(a))
      o.push(a);
    else
      break;
  }
  return [...r.reverse(), ...o];
}, Mr = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? Mr(e, t - 1) : e();
  });
}, Ar = typeof window > "u", k4 = !Ar && /Firefox/i.test(window.navigator.userAgent), ft = class {
  static save() {
    Ie.saveScrollPositions(this.getScrollRegions());
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
    if (k4 && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
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
    const e = Ie.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    Ie.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, zl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function Hs(e) {
  return zl(e) || e instanceof FormData && Array.from(e.values()).some((t) => Hs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Hs(t));
}
var js = (e) => e instanceof FormData;
function Nh(e, t = new FormData(), n = null, r = "brackets") {
  e = e || {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && Rh(t, Ih(n, o, "indices"), e[o], r);
  return t;
}
function Ih(e, t, n) {
  return e ? n === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function Rh(e, t, n, r) {
  if (Array.isArray(n))
    return Array.from(n.keys()).forEach(
      (o) => Rh(e, Ih(t, o.toString(), r), n[o], r)
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
  Nh(n, e, t, r);
}
function kt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var P4 = (e, t, n, r, o) => {
  let i = typeof e == "string" ? kt(e) : e;
  if ((Hs(t) || r) && !js(t) && (wn.get("form.forceIndicesArrayFormatInFormData") && (o = "indices"), t = Nh(t, new FormData(), null, o)), js(t))
    return [i, t];
  const [a, s] = Al(n, i, t, o);
  return [kt(a), s];
};
function Al(e, t, n, r = "brackets") {
  const o = e === "get" && !js(n) && Object.keys(n).length > 0, i = Mh(t.toString()), a = i || t.toString().startsWith("/") || t.toString() === "", s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), u = /^[.]{1,2}([/]|$)/.test(t.toString()), l = t.toString().includes("?") || o, c = t.toString().includes("#"), f = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (o) {
    const v = /\[\d+\]/.test(decodeURIComponent(f.search)), y = { ignoreQueryPrefix: !0, allowSparse: !0 };
    f.search = od.stringify(
      { ...od.parse(f.search, y), ...n },
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
      s ? f.pathname.substring(u ? 0 : 1) : "",
      l ? f.search : "",
      c ? f.hash : ""
    ].join(""),
    o ? {} : n
  ];
}
function di(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Ed = (e, t) => {
  e.hash && !t.hash && di(e).href === t.href && (t.hash = e.hash);
}, fi = (e, t) => di(e).href === di(t).href, $4 = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function on(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function Mh(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function C4(e, t) {
  const n = typeof e == "string" ? kt(e) : e;
  return t ? `${n.protocol}//${n.host}${n.pathname}${n.search}${n.hash}` : `${n.pathname}${n.search}${n.hash}`;
}
var z4 = class {
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
    return e.clearHistory && Ie.clear(), this.resolve(e.component).then((a) => {
      if (i !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const s = typeof window > "u", u = s ? new URL(e.url) : window.location, l = !s && n ? ft.getScrollRegions() : [];
      t = t || fi(kt(e.url), u);
      const c = { ...e, flash: {} };
      return new Promise(
        (f) => t ? Ie.replaceState(c, f) : Ie.pushState(c, f)
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
          n ? window.requestAnimationFrame(() => ft.restoreScrollRegions(l)) : ft.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Ht.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || Rr(e);
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, Ie.setCurrent(e), this.swap({ component: n, page: e, preserveState: t, viewTransition: !1 })));
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
}, pe = new z4(), Bi = class {
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
}, Jn = typeof window > "u", Er = new Bi(), kd = !Jn && /CriOS/.test(window.navigator.userAgent), A4 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    this.replaceState({
      ...pe.getWithoutFlashData(),
      rememberedState: {
        ...pe.get()?.rememberedState ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    if (!Jn)
      return this.current[this.rememberedState]?.[e] !== void 0 ? this.current[this.rememberedState]?.[e] : this.initialState?.[this.rememberedState]?.[e];
  }
  pushState(e, t = null) {
    if (!Jn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Er.add(() => this.getPageData(e).then((n) => {
        const r = () => this.doPushState({ page: n }, e.url).then(() => t?.());
        return kd ? new Promise((o) => {
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
    return new Promise((n) => e.encryptHistory ? h4(t).then(n) : n(t));
  }
  processQueue() {
    return Er.process();
  }
  decrypt(e = null) {
    if (Jn)
      return Promise.resolve(e ?? pe.get());
    const t = e ?? window.history.state?.page;
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? m4(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Er.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !yn(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    Er.add(() => Promise.resolve().then(() => {
      if (window.history.state?.page && !yn(this.getDocumentScrollPosition(), e))
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
    if (yn(this.current, e)) {
      t && t();
      return;
    }
    const { flash: n, ...r } = e;
    if (pe.merge(r), !Jn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Er.add(() => this.getPageData(e).then((o) => {
        const i = () => this.doReplaceState({ page: o }, e.url).then(() => t?.());
        return kd ? new Promise((a) => {
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
    return !Jn && !!window.history.state?.page;
  }
  clear() {
    dt.remove(dr.key), dt.remove(dr.iv);
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
var Ie = new A4(), T4 = class {
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
    pe.clear(), this.fireInternalEvent("missingHistoryItem");
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
    e.persisted && Ie.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const n = kt(pe.get().url);
      n.hash = window.location.hash, Ie.replaceState({ ...pe.getWithoutFlashData(), url: n.href }), ft.reset();
      return;
    }
    if (!Ie.isValidState(t))
      return this.onMissingHistoryItem();
    Ie.decrypt(t.page).then((n) => {
      if (pe.get().version !== n.version) {
        this.onMissingHistoryItem();
        return;
      }
      Ye.cancelAll({ prefetch: !1 }), pe.setQuietly(n, { preserveState: !1 }).then(() => {
        ft.restore(Ie.getScrollRegions()), Rr(pe.get());
        const r = {}, o = pe.get().props;
        for (const [i, a] of Object.entries(n.initialDeferredProps ?? n.deferredProps ?? {})) {
          const s = a.filter((u) => o[u] === void 0);
          s.length > 0 && (r[i] = s);
        }
        Object.keys(r).length > 0 && this.fireInternalEvent("loadDeferredProps", r);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Ht = new T4(), O4 = class {
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
}, ls = new O4(), N4 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    ls.isReload() && (Ie.deleteState(Ie.rememberedState), Ie.clearInitialState(Ie.rememberedState));
  }
  static handleBackForward() {
    if (!ls.isBackForward() || !Ie.browserHasHistoryEntry())
      return !1;
    const e = Ie.getScrollRegions();
    return Ie.decrypt().then((t) => {
      pe.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ft.restore(e), Rr(pe.get());
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
    return dt.remove(dt.locationVisitKey), typeof window < "u" && pe.setUrlHash(window.location.hash), Ie.decrypt(pe.get()).then(() => {
      const t = Ie.getState(Ie.rememberedState, {}), n = Ie.getScrollRegions();
      pe.remember(t), pe.set(pe.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && ft.restore(n), Rr(pe.get());
      });
    }).catch(() => {
      Ht.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && pe.setUrlHash(window.location.hash), pe.set(pe.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      ls.isReload() ? ft.restore(Ie.getScrollRegions()) : ft.scrollToAnchor();
      const e = pe.get();
      Rr(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => ci(t));
    });
  }
}, I4 = class {
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
}, R4 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    const r = new I4(e, t, n);
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
}, M4 = new R4(), Gs = class Uo {
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = pe.get().component);
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
}, Dh = {
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
}, D4 = {
  show(e) {
    const { iframe: t, page: n } = Dh.createIframeAndPage(e);
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
}, F4 = new Bi(), Pd = class Fh {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r, this.wasPrefetched = !1;
  }
  static create(t, n, r) {
    return new Fh(t, n, r);
  }
  async handlePrefetch() {
    fi(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return F4.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), f4(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await Ie.processQueue(), Ie.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = pe.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const r = this.getScopedErrors(t);
      return o4(r), this.requestParams.all().onError(r);
    }
    Ye.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || Ye.flush(pe.get().url);
    const { flash: n } = pe.get();
    Object.keys(n).length > 0 && !this.requestParams.isDeferredPropsRequest() && (ci(n), this.requestParams.all().onFlash(n)), d4(pe.get()), await this.requestParams.all().onSuccess(pe.get()), Ie.preserveUrl = !1;
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
      const n = kt(this.getHeader("x-inertia-location"));
      return Ed(this.requestParams.all().url, n), this.locationVisit(n);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (s4(t))
      return wn.get("future.useDialogForErrorModal") ? D4.show(t.data) : Dh.show(t.data);
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
      fi(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), pe.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = Ie.preserveUrl ? pe.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), l4(t), pe.set(t, {
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
    if (this.originatingPage.component !== pe.get().component)
      return !1;
    const n = kt(this.originatingPage.url), r = kt(pe.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    const n = kt(t.url);
    return Ed(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== pe.get().component || wn.get("future.preserveEqualProps") !== !0)
      return;
    const n = pe.get().props;
    Object.entries(t.props).forEach(([r, o]) => {
      yn(o, n[r]) && (t.props[r] = n[r]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== pe.get().component)
      return;
    const n = t.mergeProps || [], r = t.prependProps || [], o = t.deepMergeProps || [], i = t.matchPropsOn || [], a = (u, l) => {
      const c = bt(pe.get().props, u), f = bt(t.props, u);
      if (Array.isArray(f)) {
        const v = this.mergeOrMatchItems(
          c || [],
          f,
          u,
          i,
          l
        );
        Et(t.props, u, v);
      } else if (typeof f == "object" && f !== null) {
        const v = {
          ...c || {},
          ...f
        };
        Et(t.props, u, v);
      }
    };
    if (n.forEach((u) => a(u, !0)), r.forEach((u) => a(u, !1)), o.forEach((u) => {
      const l = pe.get().props[u], c = t.props[u], f = (v, y, p) => Array.isArray(y) ? this.mergeOrMatchItems(v, y, p, i) : typeof y == "object" && y !== null ? Object.keys(y).reduce(
        (m, h) => (m[h] = f(v ? v[h] : void 0, y[h], `${p}.${h}`), m),
        { ...v }
      ) : y;
      t.props[u] = f(l, c, u);
    }), t.props = { ...pe.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const u = pe.get().props.errors;
      u && Object.keys(u).length > 0 && (t.props.errors = u);
    }
    pe.get().scrollProps && (t.scrollProps = {
      ...pe.get().scrollProps || {},
      ...t.scrollProps || {}
    }), pe.hasOnceProps() && (t.onceProps = {
      ...pe.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...pe.get().flash });
    const s = pe.get().initialDeferredProps;
    s && Object.keys(s).length > 0 && (t.initialDeferredProps = s);
  }
  mergeOrMatchItems(t, n, r, o, i = !0) {
    const a = Array.isArray(t) ? t : [], s = o.find((c) => c.split(".").slice(0, -1).join(".") === r);
    if (!s)
      return i ? [...a, ...n] : [...n, ...a];
    const u = s.split(".").pop() || "", l = /* @__PURE__ */ new Map();
    return n.forEach((c) => {
      this.hasUniqueProperty(c, u) && l.set(c[u], c);
    }), i ? this.appendWithMatching(a, n, l, u) : this.prependWithMatching(a, n, l, u);
  }
  appendWithMatching(t, n, r, o) {
    const i = t.map((s) => this.hasUniqueProperty(s, o) && r.has(s[o]) ? r.get(s[o]) : s), a = n.filter((s) => this.hasUniqueProperty(s, o) ? !t.some(
      (u) => this.hasUniqueProperty(u, o) && u[o] === s[o]
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
    const n = await Ie.getState(Ie.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === pe.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, $d = class Bh {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = Gs.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Bh(t, n);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), c4(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), p4(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Ke({
      method: this.requestParams.all().method,
      url: di(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((n) => (this.response = Pd.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n?.response ? (this.response = Pd.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Ke.isCancel(n) && i4(n))
        return t && this.requestParams.onPrefetchError(n), Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, a4(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, u4(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, n = pe.get();
    n.version && (t["X-Inertia-Version"] = n.version);
    const r = Object.entries(n.onceProps || {}).filter(([, o]) => n.props[o.prop] === void 0 ? !1 : !o.expiresAt || o.expiresAt > Date.now()).map(([o]) => o);
    return r.length > 0 && (t["X-Inertia-Except-Once-Props"] = r.join(",")), t;
  }
}, Cd = class {
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
}, B4 = class {
  constructor() {
    this.syncRequestStream = new Cd({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new Cd({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Bi();
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: n,
    onFlash: r
  }) {
    pe.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: n,
      onFlash: r
    }), N4.handle(), Ht.init(), Ht.on("missingHistoryItem", () => {
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
    Ie.remember(e, t);
  }
  restore(e = "default") {
    return Ie.restore(e);
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
    return M4.add(e, () => this.reload(t), {
      autoStart: n.autoStart ?? !0,
      keepAlive: n.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const n = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !_d(n))
      return;
    const o = kt(pe.get().url);
    (n.only.length > 0 || n.except.length > 0 || n.reset.length > 0 ? $4(n.url, o) : fi(n.url, o)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), n.async || this.syncRequestStream.interruptInFlight(), !pe.isCleared() && !n.preserveUrl && ft.save();
    const s = {
      ...n,
      ...r
    }, u = Lt.get(s);
    u ? (Dr.reveal(u.inFlight), Lt.use(u, s)) : (Dr.reveal(!0), (n.async ? this.asyncRequestStream : this.syncRequestStream).send($d.create(s, pe.get())));
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
    if ((t.method ?? (on(e) ? e.method : "get")) !== "get")
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
    if (s.onBefore(o) === !1 || !_d(o))
      return;
    Dr.hide(), this.asyncRequestStream.interruptInFlight();
    const u = {
      ...o,
      ...s
    };
    new Promise((c) => {
      const f = () => {
        pe.get() ? c() : setTimeout(f, 50);
      };
      f();
    }).then(() => {
      Lt.add(
        u,
        (c) => {
          this.asyncRequestStream.send($d.create(c, pe.get()));
        },
        {
          cacheFor: wn.get("prefetch.cacheFor"),
          cacheTags: [],
          ...n
        }
      );
    });
  }
  clearHistory() {
    Ie.clear();
  }
  decryptHistory() {
    return Ie.decrypt();
  }
  resolveComponent(e) {
    return pe.resolve(e);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, n) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(r) {
        const o = typeof t == "function" ? t(bt(r, e), r) : t;
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
    const n = pe.get().flash;
    let r;
    if (typeof e == "function")
      r = e(n);
    else if (typeof e == "string")
      r = { ...n, [e]: t };
    else if (e && Object.keys(e).length)
      r = { ...n, ...e };
    else
      return;
    pe.setFlash(r), Object.keys(r).length && ci(r);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const n = pe.get(), r = typeof e.props == "function" ? Object.fromEntries(
      Object.values(n.onceProps ?? {}).map((m) => [m.prop, n.props[m.prop]])
    ) : {}, o = typeof e.props == "function" ? e.props(n.props, r) : e.props ?? n.props, i = typeof e.flash == "function" ? e.flash(n.flash) : e.flash, { viewTransition: a, onError: s, onFinish: u, onFlash: l, onSuccess: c, ...f } = e, v = {
      ...n,
      ...f,
      flash: i ?? {},
      props: o
    }, y = Gs.resolvePreserveOption(e.preserveScroll ?? !1, v), p = Gs.resolvePreserveOption(e.preserveState ?? !1, v);
    return pe.set(v, {
      replace: t,
      preserveScroll: y,
      preserveState: p,
      viewTransition: a
    }).then(() => {
      const m = pe.get().flash;
      Object.keys(m).length > 0 && (ci(m), l?.(m));
      const h = pe.get().props.errors || {};
      if (Object.keys(h).length === 0) {
        c?.(pe.get());
        return;
      }
      const g = e.errorBag ? h[e.errorBag || ""] || {} : h;
      s?.(g);
    }).finally(() => u?.(e));
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
    if (on(e)) {
      const l = e;
      e = l.url, t.method = t.method ?? l.method;
    }
    const r = wn.get("visitOptions"), o = r ? r(e.toString(), st(t)) || {} : {}, i = {
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
    }, [a, s] = P4(
      e,
      i.data,
      i.method,
      i.forceFormData,
      i.queryStringArrayFormat
    ), u = {
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...i,
      ...n,
      url: a,
      data: s
    };
    return u.prefetch && (u.headers.Purpose = "prefetch"), u;
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
    return () => e.length === 1 ? on(e[0]) ? e[0] : e[0]() : {
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
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : on(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
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
function L4(e) {
  if (!e.includes("."))
    return e;
  const t = (n) => n.startsWith("[") && n.endsWith("]") ? n : n.split(".").reduce((r, o, i) => i === 0 ? o : `${r}[${o}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function U4(e) {
  const t = [], n = /([^\[\]]+)|\[(\d*)\]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    r[1] !== void 0 ? t.push(r[1]) : r[2] !== void 0 && t.push(r[2] === "" ? "" : Number(r[2]));
  return t;
}
function q4(e, t, n) {
  let r = e;
  for (let o = 0; o < t.length - 1; o++)
    t[o] in r || (r[t[o]] = {}), r = r[t[o]];
  r[t[t.length - 1]] = n;
}
function V4(e) {
  const t = Object.keys(e), n = t.filter((r) => /^\d+$/.test(r)).map(Number).sort((r, o) => r - o);
  return t.length === n.length && n.length > 0 && n[0] === 0 && n.every((r, o) => r === o);
}
function Vo(e) {
  if (Array.isArray(e))
    return e.map(Vo);
  if (typeof e != "object" || e === null || zl(e))
    return e;
  if (V4(e)) {
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
function zd(e) {
  const t = {};
  for (const [n, r] of e.entries()) {
    if (r instanceof File && r.size === 0 && r.name === "")
      continue;
    const o = U4(L4(n));
    if (o[o.length - 1] === "") {
      const i = o.slice(0, -1), a = bt(t, i);
      if (Array.isArray(a))
        a.push(r);
      else if (a && typeof a == "object" && !zl(a)) {
        const s = Object.keys(a).filter((u) => /^\d+$/.test(u)).map(Number).sort((u, l) => u - l);
        Et(t, i, s.length > 0 ? [...s.map((u) => a[u]), r] : [r]);
      } else
        Et(t, i, [r]);
      continue;
    }
    q4(t, o.map(String), r);
  }
  return Vo(t);
}
var us = {
  preferredAttribute() {
    return wn.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
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
function H4(e, t, n) {
  const r = {};
  let o = 0;
  function i() {
    const f = o += 1;
    return r[f] = [], f.toString();
  }
  function a(f) {
    f === null || Object.keys(r).indexOf(f) === -1 || (delete r[f], c());
  }
  function s(f) {
    Object.keys(r).indexOf(f) === -1 && (r[f] = []);
  }
  function u(f, v = []) {
    f !== null && Object.keys(r).indexOf(f) > -1 && (r[f] = v), c();
  }
  function l() {
    const f = t(""), v = us.preferredAttribute(), y = {
      ...f ? { title: `<title ${v}="">${f}</title>` } : {}
    }, p = Object.values(r).reduce((m, h) => m.concat(h), []).reduce((m, h) => {
      if (h.indexOf("<") === -1)
        return m;
      if (h.indexOf("<title ") === 0) {
        const k = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return m.title = k ? `${k[1]}${t(k[2])}${k[3]}` : h, m;
      }
      const g = h.match(v === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return g ? m[g[0]] = h : m[Object.keys(m).length] = h, m;
    }, y);
    return Object.values(p);
  }
  function c() {
    e ? n(l()) : us.update(l());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const f = i();
      return {
        preferredAttribute: us.preferredAttribute,
        reconnect: () => s(f),
        update: (v) => u(f, v),
        disconnect: () => a(f)
      };
    }
  };
}
var j4 = "X-Inertia-Infinite-Scroll-Merge-Intent", G4 = (e) => {
  const t = () => {
    const g = pe.get().scrollProps?.[e.getPropName()];
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
    n.component = pe.get().component, n.loading = !1, n.previousPage = g.previousPage, n.nextPage = g.nextPage, n.lastLoadedPage = g.currentPage, n.requestCount = 0;
  }, o = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    r();
    const g = Ye.restore(o());
    g && typeof g == "object" && g.lastLoadedPage === t().currentPage && (n.previousPage = g.previousPage, n.nextPage = g.nextPage, n.lastLoadedPage = g.lastLoadedPage, n.requestCount = g.requestCount || 0);
  }
  const i = Ye.on("success", (g) => {
    n.component === g.detail.page.component && t().reset && (r(), e.onReset?.());
  }), a = (g) => g === "next" ? "nextPage" : "previousPage", s = (g) => {
    const k = a(g);
    return n[k];
  }, u = (g) => {
    const k = t(), x = a(g);
    n.lastLoadedPage = k.currentPage, n[x] = k[x], n.requestCount += 1, Ye.remember(
      {
        previousPage: n.previousPage,
        nextPage: n.nextPage,
        lastLoadedPage: n.lastLoadedPage,
        requestCount: n.requestCount
      },
      o()
    );
  }, l = () => t().pageName, c = () => n.requestCount, f = (g, k = {}) => {
    const x = s(g);
    n.loading || x === null || (n.loading = !0, Ye.reload({
      ...k,
      data: { [l()]: x },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [j4]: g === "previous" ? "prepend" : "append",
        ...k.headers
      },
      onBefore: ($) => {
        g === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), k.onBefore?.($);
      },
      onBeforeUpdate: ($) => {
        e.onBeforeUpdate(), k.onBeforeUpdate?.($);
      },
      onSuccess: ($) => {
        u(g), k.onSuccess?.($);
      },
      onFinish: ($) => {
        n.loading = !1, g === "next" ? e.onCompleteNextRequest(n.lastLoadedPage) : e.onCompletePreviousRequest(n.lastLoadedPage), k.onFinish?.($);
      }
    }));
  };
  return {
    getLastLoadedPage: () => n.lastLoadedPage,
    getPageName: l,
    getRequestCount: c,
    hasPrevious: () => !!n.previousPage,
    hasNext: () => !!n.nextPage,
    fetchNext: (g) => f("next", g),
    fetchPrevious: (g) => f("previous", g),
    removeEventListener: i
  };
}, W4 = () => {
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
}, Ho = "infiniteScrollPage", cs = "infiniteScrollIgnore", Lh = (e) => e.dataset[Ho], X4 = (e) => {
  const t = W4();
  let n, r, o, i, a = !1;
  const s = () => {
    i = new MutationObserver((b) => {
      b.forEach((S) => {
        S.addedNodes.forEach((L) => {
          L.nodeType === Node.ELEMENT_NODE && v.add(L);
        });
      }), $();
    }), i.observe(e.getItemsElement(), { childList: !0 }), n = t.new(
      (b) => e.onItemIntersected(b.target)
    );
    const P = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    r = t.new(e.onPreviousTriggered, P), o = t.new(e.onNextTriggered, P);
  }, u = () => {
    a && l();
    const P = e.getStartElement(), b = e.getEndElement();
    P && e.shouldFetchPrevious() && r.observe(P), b && e.shouldFetchNext() && o.observe(b), a = !0;
  }, l = () => {
    a && (r.disconnect(), o.disconnect(), a = !1);
  }, c = () => {
    a && u();
  }, f = () => {
    l(), t.flushAll(), i?.disconnect();
  }, v = /* @__PURE__ */ new Set(), y = (P) => !(Ho in P.dataset) && !(cs in P.dataset), p = () => {
    Array.from(v).forEach((P) => {
      y(P) && (P.dataset[cs] = "true"), n.observe(P);
    }), v.clear();
  }, m = (P) => Array.from(
    P.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let h = !1;
  const g = (P) => {
    !h && (h = !0, T()) || (m(e.getItemsElement()).forEach((b) => {
      y(b) && (b.dataset[Ho] = P?.toString() || "1"), n.observe(b);
    }), x());
  }, k = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, x = () => {
    const P = {}, b = e.getItemsElement().childNodes;
    for (let S = 0; S < b.length; S++) {
      const L = b[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = Lh(L);
      typeof M > "u" || (M in P ? P[M].to = S : P[M] = { from: S, to: S });
    }
    Ye.remember(P, k());
  }, $ = Jr(x, 250), T = () => {
    const P = Ye.restore(k());
    if (!P || typeof P != "object")
      return !1;
    const b = e.getItemsElement().childNodes;
    for (let S = 0; S < b.length; S++) {
      const L = b[S];
      if (L.nodeType !== Node.ELEMENT_NODE)
        continue;
      const M = L;
      let z;
      for (const [_, O] of Object.entries(P))
        if (S >= O.from && S <= O.to) {
          z = _;
          break;
        }
      if (z)
        M.dataset[Ho] = z;
      else if (y(M))
        M.dataset[cs] = "true";
      else
        continue;
      n.observe(M);
    }
    return !0;
  };
  return {
    setupObservers: s,
    enableTriggers: u,
    disableTriggers: l,
    refreshTriggers: c,
    flushAll: f,
    processManuallyAddedElements: p,
    processServerLoadedElements: g
  };
}, Y4 = new Bi(), Kn, fn, $o = null, K4 = (e) => {
  let t = !0;
  const n = (o) => {
    Y4.add(() => new Promise((i) => {
      if (!t)
        return Kn = fn = null, i();
      if (!Kn || !fn) {
        const u = pe.get().url;
        Kn = kt(u), fn = kt(u), $o = Mh(u);
      }
      const a = e.getPageName(), s = fn.searchParams;
      o === "1" ? s.delete(a) : s.set(a, o), setTimeout(() => i());
    })).finally(() => {
      t && Kn && fn && Kn.href !== fn.href && $o !== null && Ye.replace({
        url: C4(fn, $o),
        preserveScroll: !0,
        preserveState: !0
      }), Kn = fn = $o = null;
    });
  };
  return {
    onItemIntersected: Jr((o) => {
      const i = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !o || !i)
        return;
      const a = /* @__PURE__ */ new Map(), s = [...i.children];
      Oh(s, o).forEach((c) => {
        const f = Lh(c) ?? "1";
        a.has(f) ? a.set(f, a.get(f) + 1) : a.set(f, 1);
      });
      const l = Array.from(a.entries()).sort((c, f) => f[1] - c[1])[0]?.[0];
      l !== void 0 && n(l);
    }, 250),
    cancel: () => t = !1
  };
}, Z4 = (e) => ({
  createCallbacks: () => {
    let n, r = null, o = 0;
    return {
      captureScrollPosition: () => {
        const s = e.getScrollableParent(), u = e.getItemsElement();
        n = s?.scrollTop || window.scrollY;
        const l = Oh([...u.children]);
        if (l.length > 0) {
          r = l[0];
          const c = s?.getBoundingClientRect() || { top: 0 }, f = s ? c.top : 0;
          o = r.getBoundingClientRect().top - f;
        }
      },
      restoreScrollPosition: () => {
        if (!r)
          return;
        let s = 0, u = !1;
        const l = () => {
          if (s++, u || s > 10)
            return !1;
          const c = e.getScrollableParent(), f = c?.getBoundingClientRect() || { top: 0 }, v = c ? f.top : 0, m = r.getBoundingClientRect().top - v - o;
          if (m === 0) {
            window.requestAnimationFrame(l);
            return;
          }
          c ? c.scrollTo({ top: n + m }) : window.scrollTo(0, window.scrollY + m), u = !0;
        };
        window.requestAnimationFrame(l);
      }
    };
  }
});
function J4(e) {
  const t = K4({ ...e, getPageName: () => o.getPageName() }), n = Z4(e), r = X4({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => o.fetchPrevious(),
    onNextTriggered: () => o.fetchNext()
  }), o = G4({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: r.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (l) => {
      e.onCompletePreviousRequest(), Mr(() => r.processServerLoadedElements(l), 2);
    },
    onCompleteNextRequest: (l) => {
      e.onCompleteNextRequest(), Mr(() => r.processServerLoadedElements(l), 2);
    },
    onReset: e.onDataReset
  }), i = (l) => {
    const { captureScrollPosition: c, restoreScrollPosition: f } = n.createCallbacks(), v = l.onBeforeUpdate || (() => {
    }), y = l.onSuccess || (() => {
    });
    return l.onBeforeUpdate = (p) => {
      v(p), c();
    }, l.onSuccess = (p) => {
      y(p), f();
    }, l;
  }, a = o.fetchNext;
  o.fetchNext = (l = {}) => {
    e.inReverseMode() && (l = i(l)), a(l);
  };
  const s = o.fetchPrevious;
  o.fetchPrevious = (l = {}) => {
    e.inReverseMode() || (l = i(l)), s(l);
  };
  const u = Ye.on("success", () => Mr(r.refreshTriggers, 2));
  return {
    dataManager: o,
    elementManager: r,
    flush: () => {
      u(), o.removeEventListener(), r.flushAll(), t.cancel();
    }
  };
}
function Uh(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function Co(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(Uh(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function Ad(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !Uh(e) && (e.key === "Enter" || t && e.key === " ");
}
var nt = "nprogress", Pt, at = {
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
}, _n = null, Q4 = (e) => {
  Object.assign(at, e), at.includeCSS && iO(at.color), Pt = document.createElement("div"), Pt.id = nt, Pt.innerHTML = at.template;
}, Li = (e) => {
  const t = qh();
  e = Wh(e, at.minimum, 1), _n = e === 1 ? null : e;
  const n = tO(!t), r = n.querySelector(at.barSelector), o = at.speed, i = at.easing;
  n.offsetWidth, oO((a) => {
    const s = at.positionUsing === "translate3d" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate3d(${jo(e)}%,0,0)`
    } : at.positionUsing === "translate" ? {
      transition: `all ${o}ms ${i}`,
      transform: `translate(${jo(e)}%,0)`
    } : { marginLeft: `${jo(e)}%` };
    for (const u in s)
      r.style[u] = s[u];
    if (e !== 1)
      return setTimeout(a, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Gh(), n.style.transition = "", n.style.opacity = "", a();
      }, o);
    }, o);
  });
}, qh = () => typeof _n == "number", Vh = () => {
  _n || Li(0);
  const e = function() {
    setTimeout(function() {
      _n && (Hh(), e());
    }, at.trickleSpeed);
  };
  at.trickle && e();
}, eO = (e) => {
  !e && !_n || (Hh(0.3 + 0.5 * Math.random()), Li(1));
}, Hh = (e) => {
  const t = _n;
  if (t === null)
    return Vh();
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
    })(), Li(Wh(t + e, 0, 0.994));
}, tO = (e) => {
  if (nO())
    return document.getElementById(nt);
  document.documentElement.classList.add(`${nt}-busy`);
  const t = Pt.querySelector(at.barSelector), n = e ? "-100" : jo(_n || 0), r = jh();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${n}%,0,0)`, at.showSpinner || Pt.querySelector(at.spinnerSelector)?.remove(), r !== document.body && r.classList.add(`${nt}-custom-parent`), r.appendChild(Pt), Pt;
}, jh = () => rO(at.parent) ? at.parent : document.querySelector(at.parent), Gh = () => {
  document.documentElement.classList.remove(`${nt}-busy`), jh().classList.remove(`${nt}-custom-parent`), Pt?.remove();
}, nO = () => document.getElementById(nt) !== null, rO = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Wh(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var jo = (e) => (-1 + e) * 100, oO = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), iO = (e) => {
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
}, aO = () => {
  Pt && (Pt.style.display = "");
}, sO = () => {
  Pt && (Pt.style.display = "none");
}, Ft = {
  configure: Q4,
  isStarted: qh,
  done: eO,
  set: Li,
  remove: Gh,
  start: Vh,
  status: _n,
  show: aO,
  hide: sO
}, lO = class {
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
}, Dr = new lO();
Dr.reveal;
Dr.hide;
var Xh = /* @__PURE__ */ Symbol("FormComponentReset");
function Ws(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function uO(e, t) {
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
function cO(e, t) {
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
function ds(e, t) {
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
    return uO(e, t);
  if (e instanceof HTMLSelectElement)
    return cO(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const n = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== n;
  }
  return !1;
}
function dO(e, t) {
  let n = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((r, o) => {
    if (r instanceof Element && Ws(r))
      if (r instanceof HTMLInputElement && ["checkbox", "radio"].includes(r.type.toLowerCase()))
        ds(r, t) && (n = !0);
      else {
        const i = t[o] !== void 0 ? [t[o]] : [t[0] ?? null].filter(Boolean);
        ds(r, i) && (n = !0);
      }
  }) : Ws(e) && (n = ds(e, t)), n;
}
function fO(e, t, n) {
  if (!e)
    return;
  const r = !n || n.length === 0;
  if (r) {
    const i = new FormData(e), a = Array.from(e.elements).map((s) => Ws(s) ? s.name : "").filter(Boolean);
    n = [.../* @__PURE__ */ new Set([...t.keys(), ...i.keys(), ...a])];
  }
  let o = !1;
  n.forEach((i) => {
    const a = e.elements.namedItem(i);
    a && dO(a, t.getAll(i)) && (o = !0);
  }), o && r && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [Xh]: !0 } })
  );
}
var Ye = new B4();
let Qr = Ke.create(), Yh = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, Kh = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const pi = {}, gn = {
  get: (e, t = {}, n = {}) => Pr(kr("get", e, t, n)),
  post: (e, t = {}, n = {}) => Pr(kr("post", e, t, n)),
  patch: (e, t = {}, n = {}) => Pr(kr("patch", e, t, n)),
  put: (e, t = {}, n = {}) => Pr(kr("put", e, t, n)),
  delete: (e, t = {}, n = {}) => Pr(kr("delete", e, t, n)),
  use(e) {
    return Qr = e, gn;
  },
  axios() {
    return Qr;
  },
  fingerprintRequestsUsing(e) {
    return Yh = e === null ? () => null : e, gn;
  },
  determineSuccessUsing(e) {
    return Kh = e, gn;
  }
}, kr = (e, t, n, r) => ({
  url: t,
  method: e,
  ...r,
  ...["get", "delete"].includes(e) ? {
    params: Bs({}, n, r?.params)
  } : {
    data: Bs({}, n, r?.data)
  }
}), Pr = (e = {}) => {
  const t = [
    pO,
    mO,
    vO
  ].reduce((n, r) => r(n), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Qr.request(t).then(async (n) => {
    t.precognitive && Td(n);
    const r = n.status;
    let o = n;
    return t.precognitive && t.onPrecognitionSuccess && Kh(o) && (o = await Promise.resolve(t.onPrecognitionSuccess(o) ?? o)), t.onSuccess && hO(r) && (o = await Promise.resolve(t.onSuccess(o) ?? o)), (Od(t, r) ?? ((a) => a))(o) ?? o;
  }, (n) => gO(n) ? Promise.reject(n) : (t.precognitive && Td(n.response), (Od(t, n.response.status) ?? ((o, i) => Promise.reject(i)))(n.response, n))).finally(t.onFinish ?? (() => null)));
}, pO = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Qr.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? Yh(e, Qr) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": yO(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, hO = (e) => e >= 200 && e < 300, mO = (e) => (typeof e.fingerprint != "string" || (pi[e.fingerprint]?.abort(), delete pi[e.fingerprint]), e), vO = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (pi[e.fingerprint] = new AbortController(), {
  ...e,
  signal: pi[e.fingerprint].signal
}), Td = (e) => {
  if (e.headers?.precognition !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, gO = (e) => !Ch(e) || typeof e.response?.status != "number" || $h(e), Od = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], yO = (e) => e.headers?.["Content-Type"] ?? e.headers?.["Content-type"] ?? e.headers?.["content-type"] ?? (Zh(e.data) ? "multipart/form-data" : "application/json"), Zh = (e) => Tl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => Zh(t)), Tl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, bO = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const n = e.split(".");
  let r = [""];
  for (const o of n)
    if (o === "*") {
      const i = [];
      for (const a of r) {
        const s = a ? bt(t, a) : t;
        if (Array.isArray(s))
          for (let u = 0; u < s.length; u++)
            i.push(a ? `${a}.${u}` : String(u));
        else if (s !== null && typeof s == "object")
          for (const u of Object.keys(s))
            i.push(a ? `${a}.${u}` : u);
      }
      r = i;
    } else
      r = r.map((i) => i ? `${i}.${o}` : o);
  return r;
}, xO = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Nd = (e, t) => Object.fromEntries(Object.entries(e).filter(([n]) => !t.some((r) => xO(n, r)))), wO = (e, t = {}) => {
  const n = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let r = !1, o = !1;
  const i = (z) => z !== o ? (o = z, n.validatingChanged) : [];
  let a = [];
  const s = (z) => {
    const _ = [...new Set(z)];
    return a.length !== _.length || !_.every((O) => a.includes(O)) ? (a = _, n.validatedChanged) : [];
  }, u = () => a.filter((z) => typeof f[z] > "u");
  let l = [];
  const c = (z) => {
    const _ = [...new Set(z)];
    return l.length !== _.length || !_.every((O) => l.includes(O)) ? (l = _, n.touchedChanged) : [];
  };
  let f = {};
  const v = (z) => {
    const _ = SO(z);
    return yn(f, _) ? [] : (f = _, n.errorsChanged);
  }, y = (z) => {
    const _ = { ...f };
    return delete _[Fr(z)], v(_);
  }, p = () => Object.keys(f).length > 0;
  let m = 1500;
  const h = (z) => {
    m = z, P.cancel(), P = T();
  };
  let g = t, k = null, x = [], $ = null;
  const T = () => T3((z) => {
    e({
      get: (_, O = {}, E = {}) => gn.get(_, L(O), b(E, z, O)),
      post: (_, O = {}, E = {}) => gn.post(_, L(O), b(E, z, O)),
      patch: (_, O = {}, E = {}) => gn.patch(_, L(O), b(E, z, O)),
      put: (_, O = {}, E = {}) => gn.put(_, L(O), b(E, z, O)),
      delete: (_, O = {}, E = {}) => gn.delete(_, L(O), b(E, z, O))
    }).catch((_) => $h(_) || Ch(_) && _.response?.status === 422 ? null : Promise.reject(_));
  }, m, { leading: !0, trailing: !0 });
  let P = T();
  const b = (z, _, O = {}) => {
    const E = {
      ...z,
      ..._
    }, N = Array.from(E.only ?? E.validate ?? l);
    return {
      ..._,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...n4(z, _),
      only: N,
      timeout: E.timeout ?? 5e3,
      onValidationError: (w, U) => ([
        ...s([...a, ...N]),
        ...v(Bs(Nd({ ...f }, N), w.data.errors))
      ].forEach((B) => B()), E.onValidationError ? E.onValidationError(w, U) : Promise.reject(U)),
      onSuccess: (w) => (s([...a, ...N]).forEach((U) => U()), E.onSuccess ? E.onSuccess(w) : w),
      onPrecognitionSuccess: (w) => ([
        ...s([...a, ...N]),
        ...v(Nd({ ...f }, N))
      ].forEach((U) => U()), E.onPrecognitionSuccess ? E.onPrecognitionSuccess(w) : w),
      onBefore: () => {
        const w = l.some((Z) => Z.includes("*")), U = w ? [...new Set(l.flatMap((Z) => bO(Z, O)))] : l;
        return E.onBeforeValidation && E.onBeforeValidation({ data: O, touched: U }, { data: g, touched: x }) === !1 || (E.onBefore || (() => !0))() === !1 ? !1 : (w && c(U).forEach((Z) => Z()), $ = l, k = O, !0);
      },
      onStart: () => {
        i(!0).forEach((w) => w()), (E.onStart ?? (() => null))();
      },
      onFinish: () => {
        i(!1).forEach((w) => w()), x = $, g = k, $ = k = null, (E.onFinish ?? (() => null))();
      }
    };
  }, S = (z, _, O) => {
    if (typeof z > "u") {
      const E = Array.from(O?.only ?? O?.validate ?? []);
      c([...l, ...E]).forEach((N) => N()), P(O ?? {});
      return;
    }
    if (Tl(_) && !r) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    z = Fr(z), (z.includes("*") || bt(g, z) !== _) && (c([z, ...l]).forEach((E) => E()), P(O ?? {}));
  }, L = (z) => r === !1 ? Xs(z) : z, M = {
    touched: () => l,
    validate(z, _, O) {
      return typeof z == "object" && !("target" in z) && (O = z, z = _ = void 0), S(z, _, O), M;
    },
    touch(z) {
      const _ = Array.isArray(z) ? z : [Fr(z)];
      return c([...l, ..._]).forEach((O) => O()), M;
    },
    validating: () => o,
    valid: u,
    errors: () => f,
    hasErrors: p,
    setErrors(z) {
      return v(z).forEach((_) => _()), M;
    },
    forgetError(z) {
      return y(z).forEach((_) => _()), M;
    },
    defaults(z) {
      return t = z, g = z, M;
    },
    reset(...z) {
      if (z.length === 0)
        c([]).forEach((_) => _());
      else {
        const _ = [...l];
        z.forEach((O) => {
          _.includes(O) && _.splice(_.indexOf(O), 1), Et(g, O, bt(t, O));
        }), c(_).forEach((O) => O());
      }
      return M;
    },
    setTimeout(z) {
      return h(z), M;
    },
    on(z, _) {
      return n[z].push(_), M;
    },
    validateFiles() {
      return r = !0, M;
    },
    withoutFileValidation() {
      return r = !1, M;
    }
  };
  return M;
}, _O = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: Array.isArray(e[n]) ? e[n][0] : e[n]
}), {}), SO = (e) => Object.keys(e).reduce((t, n) => ({
  ...t,
  [n]: typeof e[n] == "string" ? [e[n]] : e[n]
}), {}), Fr = (e) => typeof e != "string" ? e.target.name : e, Xs = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    const r = t[n];
    if (r !== null) {
      if (Tl(r)) {
        delete t[n];
        return;
      }
      if (Array.isArray(r)) {
        t[n] = Object.values(Xs({ ...r }));
        return;
      }
      if (typeof r == "object") {
        t[n] = Xs(t[n]);
        return;
      }
    }
  }), t;
};
var fs = null, ps = !1;
function EO(e) {
  if (ps)
    return;
  fs === null && (ps = !0, fs = new Set(Object.keys(Jh({}))), ps = !1);
  const t = Object.keys(e).filter((n) => fs.has(n));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((n) => `"${n}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function Jh(...e) {
  let { rememberKey: t, data: n, precognitionEndpoint: r } = qo.parseUseFormArguments(...e);
  const o = t ? Ye.restore(t) : null;
  let i = st(typeof n == "function" ? n() : n);
  EO(i);
  let a = null, s, u = (p) => p, l = null, c = [], f = !1;
  const y = eo({
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
      const g = wO((x) => {
        const { method: $, url: T } = r(), P = st(u(this.data()));
        return x[$](T, P);
      }, st(i));
      l = g, g.on("validatingChanged", () => {
        m.validating = g.validating();
      }).on("validatedChanged", () => {
        m.__valid = g.valid();
      }).on("touchedChanged", () => {
        m.__touched = g.touched();
      }).on("errorsChanged", () => {
        const x = h ?? hi.get("form.withAllErrors") ? g.errors() : _O(g.errors());
        this.errors = {}, this.setError(x), m.__valid = g.valid();
      });
      const k = (x, $) => ($(x), x);
      return Object.assign(m, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => g,
        withAllErrors: () => k(m, () => h = !0),
        valid: (x) => m.__valid.includes(x),
        invalid: (x) => x in this.errors,
        setValidationTimeout: (x) => k(m, () => g.setTimeout(x)),
        validateFiles: () => k(m, () => g.validateFiles()),
        withoutFileValidation: () => k(m, () => g.withoutFileValidation()),
        touch: (x, ...$) => (Array.isArray(x) ? g.touch(x) : typeof x == "string" ? g.touch([x, ...$]) : g.touch(x), m),
        touched: (x) => typeof x == "string" ? m.__touched.includes(x) : m.__touched.length > 0,
        validate: (x, $) => {
          if (typeof x == "object" && !("target" in x) && ($ = x, x = void 0), x === void 0)
            g.validate($);
          else {
            const T = Fr(x), P = u(this.data());
            g.validate(T, bt(P, T), $);
          }
          return m;
        },
        setErrors: (x) => k(m, () => this.setError(x)),
        forgetError: (x) => k(
          m,
          () => this.clearErrors(Fr(x))
        )
      }), m;
    },
    data() {
      return Object.keys(i).reduce((p, m) => Et(p, m, bt(this, m)), {});
    },
    transform(p) {
      return u = p, this;
    },
    defaults(p, m) {
      if (typeof n == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return f = !0, typeof p > "u" ? (i = st(this.data()), this.isDirty = !1) : i = typeof p == "string" ? Et(st(i), p, m) : Object.assign({}, st(i), p), l?.defaults(i), this;
    },
    reset(...p) {
      const m = st(typeof n == "function" ? n() : i), h = st(m);
      return p.length === 0 ? (i = h, Object.assign(this, m)) : p.filter((g) => Wp(h, g)).forEach((g) => {
        Et(i, g, bt(h, g)), Et(this, g, bt(m, g));
      }), l?.reset(...p), this;
    },
    setError(p, m) {
      const h = typeof p == "string" ? { [p]: m } : p;
      return Object.assign(this.errors, h), this.hasErrors = Object.keys(this.errors).length > 0, l?.setErrors(h), this;
    },
    clearErrors(...p) {
      return this.errors = Object.keys(this.errors).reduce(
        (m, h) => ({
          ...m,
          ...p.length > 0 && !p.includes(h) ? { [h]: this.errors[h] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, l && (p.length === 0 ? l.setErrors({}) : p.forEach(l.forgetError)), this;
    },
    resetAndClearErrors(...p) {
      return this.reset(...p), this.clearErrors(...p), this;
    },
    submit(...p) {
      const { method: m, url: h, options: g } = qo.parseSubmitArguments(p, r);
      f = !1;
      const k = {
        ...g,
        onCancelToken: ($) => {
          if (a = $, g.onCancelToken)
            return g.onCancelToken($);
        },
        onBefore: ($) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), g.onBefore)
            return g.onBefore($);
        },
        onStart: ($) => {
          if (this.processing = !0, g.onStart)
            return g.onStart($);
        },
        onProgress: ($) => {
          if (this.progress = $ ?? null, g.onProgress)
            return g.onProgress($);
        },
        onSuccess: async ($) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(
            () => this.recentlySuccessful = !1,
            hi.get("form.recentlySuccessfulDuration")
          );
          const T = g.onSuccess ? await g.onSuccess($) : null;
          return f || (i = st(this.data()), this.isDirty = !1), T;
        },
        onError: ($) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError($), g.onError)
            return g.onError($);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, g.onCancel)
            return g.onCancel();
        },
        onFinish: ($) => {
          if (this.processing = !1, this.progress = null, a = null, g.onFinish)
            return g.onFinish($);
        }
      }, x = u(this.data());
      m === "delete" ? Ye.delete(h, { ...k, data: x }) : Ye[m](h, x, k);
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
      return c = p, this;
    },
    __rememberable: t === null,
    __remember() {
      const p = this.data();
      if (c.length > 0) {
        const m = { ...p };
        return c.forEach((h) => delete m[h]), { data: m, errors: this.errors };
      }
      return { data: p, errors: this.errors };
    },
    __restore(p) {
      Object.assign(this, p.data), this.setError(p.errors);
    }
  });
  return Te(
    y,
    (p) => {
      y.isDirty = !yn(y.data(), i);
      const m = Ye.restore(t), h = st(p.__remember());
      t && !yn(m, h) && Ye.remember(h, t);
    },
    { immediate: !0, deep: !0 }
  ), r ? y.withPrecognition(r) : y;
}
var yt = Y(void 0), Qe = Y(), hs = en(null), zo = Y(void 0), Id;
Me({
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
    yt.value = t ? Qn(t) : void 0, Qe.value = { ...e, flash: e.flash ?? {} }, zo.value = void 0;
    const i = typeof window > "u";
    return Id = H4(i, r || ((a) => a), o || (() => {
    })), i || (Ye.init({
      initialPage: e,
      resolveComponent: n,
      swapComponent: async (a) => {
        yt.value = Qn(a.component), Qe.value = a.page, zo.value = a.preserveState ? zo.value : Date.now();
      },
      onFlash: (a) => {
        Qe.value = { ...Qe.value, flash: a };
      }
    }), Ye.on("navigate", () => Id.forceUpdate())), () => {
      if (yt.value) {
        yt.value.inheritAttrs = !!yt.value.inheritAttrs;
        const a = Pe(yt.value, {
          ...Qe.value.props,
          key: zo.value
        });
        return hs.value && (yt.value.layout = hs.value, hs.value = null), yt.value.layout ? typeof yt.value.layout == "function" ? yt.value.layout(Pe, a) : (Array.isArray(yt.value.layout) ? yt.value.layout : [yt.value.layout]).concat(a).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, Pe(u, { ...Qe.value.props }, () => s))) : a;
      }
    };
  }
});
function Qh() {
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
Me({
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
var Jt = () => {
}, kO = /* @__PURE__ */ Symbol("InertiaFormContext");
Me({
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
      default: Jt
    },
    onBefore: {
      type: Function,
      default: Jt
    },
    onStart: {
      type: Function,
      default: Jt
    },
    onProgress: {
      type: Function,
      default: Jt
    },
    onFinish: {
      type: Function,
      default: Jt
    },
    onCancel: {
      type: Function,
      default: Jt
    },
    onSuccess: {
      type: Function,
      default: Jt
    },
    onError: {
      type: Function,
      default: Jt
    },
    onSubmitComplete: {
      type: Function,
      default: Jt
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
      const [T, P] = p();
      return e.transform(P);
    }, i = Jh({}).withPrecognition(
      () => s.value,
      () => p()[0]
    ).transform(o).setValidationTimeout(e.validationTimeout);
    e.validateFiles && i.validateFiles(), (e.withAllErrors ?? wn.get("form.withAllErrors")) && i.withAllErrors();
    const a = Y(), s = J(
      () => on(e.action) ? e.action.method : e.method.toLowerCase()
    ), u = Y(!1), l = Y(new FormData()), c = (T) => {
      T.type === "reset" && T.detail?.[Xh] && T.preventDefault(), u.value = T.type === "reset" ? !1 : !yn(y(), zd(l.value));
    }, f = ["input", "change", "reset"];
    Ze(() => {
      l.value = v(), i.defaults(y()), f.forEach((T) => a.value.addEventListener(T, c));
    }), Te(
      () => e.validateFiles,
      (T) => T ? i.validateFiles() : i.withoutFileValidation()
    ), Te(
      () => e.validationTimeout,
      (T) => i.setValidationTimeout(T)
    ), mi(() => f.forEach((T) => a.value?.removeEventListener(T, c)));
    const v = (T) => new FormData(a.value, T), y = (T) => zd(v(T)), p = (T) => Al(
      s.value,
      on(e.action) ? e.action.url : e.action,
      y(T),
      e.queryStringArrayFormat
    ), m = (T) => {
      const [P, b] = p(T);
      if (T?.getAttribute("formtarget") === "_blank" && s.value === "get") {
        window.open(P, "_blank");
        return;
      }
      const L = (z) => {
        z && (z === !0 ? h() : z.length > 0 && h(...z));
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
        onSuccess: (...z) => {
          e.onSuccess?.(...z), e.onSubmitComplete?.($), L(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && x();
        },
        onError: (...z) => {
          e.onError?.(...z), L(e.resetOnError);
        },
        ...e.options
      };
      i.transform(() => e.transform(b)).submit(s.value, P, M), i.transform(o);
    }, h = (...T) => {
      fO(a.value, l.value, T), i.reset(...T);
    }, g = (...T) => {
      i.clearErrors(...T);
    }, k = (...T) => {
      g(...T), h(...T);
    }, x = () => {
      l.value = v(), u.value = !1;
    }, $ = {
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
      clearErrors: g,
      resetAndClearErrors: k,
      setError: (T, P) => i.setError(typeof T == "string" ? { [T]: P } : T),
      get isDirty() {
        return u.value;
      },
      reset: h,
      submit: m,
      defaults: x,
      getData: y,
      getFormData: v,
      // Precognition
      touch: i.touch,
      valid: i.valid,
      invalid: i.invalid,
      touched: i.touched,
      validate: (T, P) => i.validate(...qo.mergeHeadersForValidation(T, P, e.headers)),
      validator: () => i.validator()
    };
    return r($), Mn(kO, $), () => Pe(
      "form",
      {
        ...n,
        ref: a,
        action: on(e.action) ? e.action.url : e.action,
        method: s.value,
        onSubmit: (T) => {
          T.preventDefault(), m(T.submitter);
        },
        inert: e.disableWhileProcessing && i.processing
      },
      t.default ? t.default($) : []
    );
  }
});
Me({
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
        return ["key", "head-key"].includes(r) ? n : o === "" ? n + ` ${r}` : n + ` ${r}="${F3(o)}"`;
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
var ms = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
Me({
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
      () => ms(e.itemsElement, o.value)
    ), u = J(() => E4(s.value)), l = J(
      () => ms(e.startElement, i.value)
    ), c = J(() => ms(e.endElement, a.value)), f = Y(!1), v = Y(!1), y = Y(0), p = Y(!1), m = Y(!1), h = () => {
      y.value = g.getRequestCount(), p.value = g.hasPrevious(), m.value = g.hasNext();
    }, {
      dataManager: g,
      elementManager: k,
      flush: x
    } = J4({
      // Data
      getPropName: () => e.data,
      inReverseMode: () => e.reverse,
      shouldFetchNext: () => !e.onlyPrevious,
      shouldFetchPrevious: () => !e.onlyNext,
      shouldPreserveUrl: () => e.preserveUrl,
      // Elements
      getTriggerMargin: () => e.buffer,
      getStartElement: () => l.value,
      getEndElement: () => c.value,
      getItemsElement: () => s.value,
      getScrollableParent: () => u.value,
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
      const b = Qh().scrollProps?.[e.data];
      b && (p.value = !!b.previousPage, m.value = !!b.nextPage);
    }
    const $ = J(() => !T.value), T = J(
      () => e.manual || e.manualAfter > 0 && y.value >= e.manualAfter
    ), P = () => {
      u.value ? u.value.scrollTo({
        top: u.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return Ze(() => {
      k.setupObservers(), k.processServerLoadedElements(g.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && P(), $.value && k.enableTriggers();
    }), Ys(x), Te(
      () => [$.value, e.onlyNext, e.onlyPrevious],
      ([b]) => {
        b ? k.enableTriggers() : k.disableTriggers();
      }
    ), r({
      fetchNext: g.fetchNext,
      fetchPrevious: g.fetchPrevious,
      hasPrevious: g.hasPrevious,
      hasNext: g.hasNext
    }), () => {
      const b = [], S = {
        loadingPrevious: f.value,
        loadingNext: v.value,
        hasPrevious: p.value,
        hasNext: m.value
      };
      if (!e.startElement) {
        const L = $.value && !e.onlyNext, M = {
          loading: f.value,
          fetch: g.fetchPrevious,
          autoMode: L,
          manualMode: !L,
          hasMore: p.value,
          ...S
        };
        b.push(
          Pe(
            "div",
            { ref: i },
            t.previous ? t.previous(M) : f.value ? t.loading?.(M) : void 0
          )
        );
      }
      if (b.push(
        Pe(
          e.as,
          { ...n, ref: o },
          t.default?.({
            loading: f.value || v.value,
            loadingPrevious: f.value,
            loadingNext: v.value
          })
        )
      ), !e.endElement) {
        const L = $.value && !e.onlyPrevious, M = {
          loading: v.value,
          fetch: g.fetchNext,
          autoMode: L,
          manualMode: !L,
          hasMore: m.value,
          ...S
        };
        b.push(
          Pe(
            "div",
            { ref: a },
            t.next ? t.next(M) : v.value ? t.loading?.(M) : void 0
          )
        );
      }
      return Pe(ge, {}, e.reverse ? [...b].reverse() : b);
    };
  }
});
var Bt = () => {
}, PO = Me({
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
    const r = Y(0), o = Y(), i = J(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), a = J(() => e.cacheFor !== 0 ? e.cacheFor : i.value.length === 1 && i.value[0] === "click" ? 0 : hi.get("prefetch.cacheFor"));
    Ze(() => {
      i.value.includes("mount") && m();
    }), Ys(() => {
      clearTimeout(o.value);
    });
    const s = J(
      () => on(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), u = J(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : s.value !== "get" ? "button" : e.as.toLowerCase()), l = J(
      () => Al(
        s.value,
        on(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), c = J(() => l.value[0]), f = J(() => l.value[1]), v = J(() => u.value === "button" ? { type: "button" } : u.value === "a" || typeof u.value != "string" ? { href: c.value } : {}), y = J(() => ({
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
      onStart: (x) => {
        r.value++, e.onStart?.(x);
      },
      onProgress: e.onProgress,
      onFinish: (x) => {
        r.value--, e.onFinish?.(x);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), m = () => {
      Ye.prefetch(
        c.value,
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
      onClick: (x) => {
        Co(x) && (x.preventDefault(), Ye.visit(c.value, p.value));
      }
    }, g = {
      onMouseenter: () => {
        o.value = setTimeout(() => {
          m();
        }, hi.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(o.value);
      },
      onClick: h.onClick
    }, k = {
      onMousedown: (x) => {
        Co(x) && (x.preventDefault(), m());
      },
      onKeydown: (x) => {
        Ad(x) && (x.preventDefault(), m());
      },
      onMouseup: (x) => {
        Co(x) && (x.preventDefault(), Ye.visit(c.value, p.value));
      },
      onKeyup: (x) => {
        Ad(x) && (x.preventDefault(), Ye.visit(c.value, p.value));
      },
      onClick: (x) => {
        Co(x) && x.preventDefault();
      }
    };
    return () => Pe(
      u.value,
      {
        ...n,
        ...v.value,
        "data-loading": r.value > 0 ? "" : void 0,
        ...i.value.includes("hover") ? g : i.value.includes("click") ? k : h
      },
      t
    );
  }
}), $O = PO;
Me({
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
    const e = Qh();
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
    return (this.$props.always || !this.loaded) && e.push(Pe(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var hi = wn.extend({});
const CO = { class: "space-y-3 text-zinc-900 dark:text-white" }, zO = {
  key: 0,
  class: "py-6 text-center text-xs text-zinc-500 dark:text-zinc-400"
}, AO = { key: 0 }, TO = { key: 1 }, OO = {
  key: 0,
  class: "rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400"
}, NO = { class: "space-y-2" }, IO = { class: "text-xs font-semibold text-zinc-900 dark:text-white" }, RO = { class: "font-mono text-[10px] text-zinc-500 dark:text-zinc-400" }, MO = {
  key: 0,
  class: "flex items-center gap-2"
}, DO = ["disabled", "onClick"], FO = ["disabled", "onClick"], BO = ["disabled", "onClick"], LO = {
  __name: "ProductPanel",
  props: {
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = Y([]), r = Y(!0), o = Y(!1), i = Y(!1), a = Y(""), s = Y(null), u = J(() => t.produto?.id ?? null), l = J(() => new Map(n.value.map((p) => [p.trigger_event, p])));
    async function c() {
      r.value = !0, a.value = "";
      try {
        const [p, m] = await Promise.all([Ae.connection(), Ae.flows(u.value)]);
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
        await p(), await c();
      } catch (m) {
        a.value = m.message;
      } finally {
        o.value = !1;
      }
    }
    const v = (p) => f(() => Ae.createFlow({
      name: `${p.label} — ${t.produto?.name || "Produto"}`,
      trigger_event: p.eventClass,
      product_id: u.value,
      is_active: !0,
      graph_json: vp(p.eventClass)
    })), y = (p) => f(() => Ae.updateFlow(p.id, { is_active: !p.is_active }));
    return Ze(c), (p, m) => (C(), I("div", CO, [
      r.value ? (C(), I("p", zO, "Verificando integração…")) : (C(), I(ge, { key: 1 }, [
        d("div", {
          class: X(["flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs", i.value ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"])
        }, [
          K(F(Vd), { class: "h-4 w-4 shrink-0" }),
          i.value ? (C(), I("span", AO, "ZapRei conectado à Evolution GO.")) : (C(), I("span", TO, [
            m[2] || (m[2] = Ue(" A Evolution GO não está conectada. ", -1)),
            K(F($O), {
              href: "/integracoes",
              class: "font-semibold underline"
            }, {
              default: it(() => [...m[1] || (m[1] = [
                Ue("Configure em Integrações", -1)
              ])]),
              _: 1
            }),
            m[3] || (m[3] = Ue(" para os fluxos deste produto dispararem. ", -1))
          ]))
        ], 2),
        m[5] || (m[5] = d("div", null, [
          d("h3", { class: "text-sm font-bold text-zinc-900 dark:text-white" }, "Gatilhos deste produto"),
          d("p", { class: "text-xs text-zinc-500 dark:text-zinc-400" }, "Crie um fluxo por evento e personalize no editor visual.")
        ], -1)),
        a.value ? (C(), I("p", OO, W(a.value), 1)) : he("", !0),
        d("div", NO, [
          (C(!0), I(ge, null, Re(F(In), (h) => (C(), I("div", {
            key: h.id,
            class: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
          }, [
            d("div", null, [
              d("div", IO, W(h.label), 1),
              d("div", RO, W(h.eventClass), 1)
            ]),
            l.value.get(h.eventClass) ? (C(), I("div", MO, [
              d("span", {
                class: X(["rounded-full px-2 py-0.5 text-[10px] font-bold", l.value.get(h.eventClass).is_active ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])
              }, W(l.value.get(h.eventClass).is_active ? "Ativo" : "Pausado"), 3),
              d("button", {
                type: "button",
                class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
                disabled: !i.value || o.value,
                onClick: (g) => y(l.value.get(h.eventClass))
              }, W(l.value.get(h.eventClass).is_active ? "Pausar" : "Ativar"), 9, DO),
              d("button", {
                type: "button",
                class: "flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700",
                disabled: !i.value,
                onClick: (g) => s.value = l.value.get(h.eventClass)
              }, [
                K(F(Xd), { class: "h-3 w-3" }),
                m[4] || (m[4] = Ue(" Editar ", -1))
              ], 8, FO)
            ])) : (C(), I("button", {
              key: 1,
              type: "button",
              class: "rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
              disabled: !i.value || o.value,
              onClick: (g) => v(h)
            }, " Criar fluxo ", 8, BO))
          ]))), 128))
        ])
      ], 64)),
      s.value ? (C(), Fe(_p, {
        key: 2,
        flow: s.value,
        onClose: m[0] || (m[0] = (h) => s.value = null),
        onSaved: c
      }, null, 8, ["flow"])) : he("", !0)
    ]));
  }
}, UO = "zaprei", Rd = "zaprei-plugin-style";
if (typeof document < "u" && !document.getElementById(Rd)) {
  const e = document.createElement("link");
  e.id = Rd, e.rel = "stylesheet", e.href = new URL(
    /* @vite-ignore */
    "./plugin-ui.css",
    import.meta.url
  ).href, document.head.appendChild(e);
}
window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[UO] = { Dashboard: UP, Integrations: VP, ProductPanel: LO };
export {
  UP as Dashboard,
  VP as Integrations,
  LO as ProductPanel
};
