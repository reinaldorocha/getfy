const c="checkout-builder-preview-config",u="checkout-builder-preview-ack",f="__checkoutBuilderApplyPreview",o="checkout-builder-preview";function l(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("preview")==="1"}function h(t){if(!(typeof BroadcastChannel>"u"))try{const e=new BroadcastChannel(o);e.postMessage(t),e.close()}catch{}}function w(t){if(typeof BroadcastChannel>"u")return()=>{};const e=new BroadcastChannel(o),n=r=>{r?.data?.type===c&&t(r.data)};return e.addEventListener("message",n),()=>{e.removeEventListener("message",n),e.close()}}const i="getfy-checkout-embed-resize";function a(){if(typeof window>"u")return!1;try{return window.self!==window.top}catch{return!0}}function d(t){!a()||typeof window.parent?.postMessage!="function"||window.parent.postMessage({type:i,height:Math.max(320,Math.ceil(Number(t)||0))},"*")}function p(t){if(typeof window>"u"||!t||!a())return()=>{};const e=()=>{const s=Math.max(document.documentElement.scrollHeight,document.body?.scrollHeight??0,t.scrollHeight??0);d(s)},n=typeof ResizeObserver<"u"?new ResizeObserver(e):null;n?.observe(t),n?.observe(document.documentElement);const r=typeof MutationObserver<"u"?new MutationObserver(e):null;return r?.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),window.addEventListener("load",e),e(),()=>{n?.disconnect(),r?.disconnect(),window.removeEventListener("load",e)}}function m(t,e=720){return`<!-- Getfy Checkout -->
<iframe
  data-getfy-checkout
  src="${String(t||"").replace(/"/g,"&quot;")}"
  title="Checkout"
  style="width:100%;min-height:${e}px;border:0;display:block;"
  allow="payment *"
  loading="lazy"
></iframe>
<script>
window.addEventListener('message', function (event) {
  if (!event.data || event.data.type !== '${i}') return;
  var height = event.data.height;
  if (!height) return;
  document.querySelectorAll('iframe[data-getfy-checkout]').forEach(function (frame) {
    frame.style.height = height + 'px';
  });
});
<\/script>`}export{u as P,f as a,c as b,h as c,m as d,a as e,w as f,l as i,p as s};
