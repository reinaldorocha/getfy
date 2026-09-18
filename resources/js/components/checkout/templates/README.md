# Checkout templates (core)

Registro de layouts renderizados pelo Getfy. O Ticto Ã© nativo: nÃ£o exige plugin habilitado.

- Mapa JS: [`coreLayouts.js`](./coreLayouts.js)
- Layout Ticto: [`TictoCheckoutLayout.vue`](./TictoCheckoutLayout.vue)
- Resolução PHP: `PluginExtensionRegistry::resolveActiveCheckoutTemplate()`
- Carga no checkout: `Show.vue` + `useCheckoutTemplate`

## Adicionar um layout core novo

1. Criar o componente Vue nesta pasta.
2. Registrar em `CHECKOUT_CORE_LAYOUTS` (`coreLayouts.js`).
3. Registrar os metadados em `PluginExtensionRegistry::nativeCheckoutBuilderTemplates()`.

## Plugin thin (layout no core)

Um plugin tambÃ©m pode declarar `"core_layout": "<chave>"` (+ opcional `ui_variant` / `features`) quando a instalaÃ§Ã£o do plugin for parte do produto. Para layouts que pertencem ao Getfy, prefira o catÃ¡logo nativo.

## Plugin full (sem core)

Exportar `frontend.exports.checkout_template` no manifesto do plugin. O core não precisa de nova chave.
