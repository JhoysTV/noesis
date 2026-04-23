Qué incluye el sitio:
Secciones principales

Hero — Propuesta de valor con estadísticas (150+ proyectos, 12 años, 98% satisfacción)
Servicios — 6 servicios con diseño de tarjetas animadas
Portafolio — Galería en cuadrícula asimétrica con filtros por categoría (Residencial, Comercial, Interiores)
Proceso — Los 4 pasos del flujo (Envías espacio → Cotización → Pago → Diseño)
Nosotros — Filosofía de la empresa con los valores Solidez, Utilidad, Belleza, Innovación

Flujo completo de cotización (4 pasos)

Datos personales (nombre, email, teléfono, tipo de proyecto)
Descripción del espacio (área, ambientes, presupuesto)
Carga de fotografías con drag & drop
Revisión y envío con confirmación

Portal de pagos integrado

Visualización de cotización desglosada
Selección de método: tarjeta, transferencia bancaria, pagos móviles
Formulario de tarjeta con previsualización en tiempo real
Confirmación de pago con modal de éxito

Técnico

Navegación fija con scroll activo
Animaciones de entrada al hacer scroll
100% responsive para móvil
Sin dependencias externas (solo Google Fonts)
-----------------------------------------------------------------------------------

noesis/
├── index.html                  ← Markup semántico (HTML5, ARIA, accesibilidad)
│
├── css/
│   ├── variables.css           ← Design tokens (colores, tipografía, espaciado)
│   ├── reset.css               ← Normalización cross-browser
│   ├── base.css                ← Estilos globales, botones, campos de formulario
│   ├── nav.css                 ← Navegación fija + hamburger
│   ├── hero.css                ← Sección Hero
│   ├── services.css            ← Tarjetas de servicios
│   ├── portfolio.css           ← Galería con filtros
│   ├── process.css             ← Pasos del proceso
│   ├── quote-form.css          ← Formulario multi-paso + upload zone
│   ├── payment.css             ← Portal de pagos + preview de tarjeta
│   ├── about.css               ← Sección Nosotros + valores
│   ├── footer.css              ← Footer
│   ├── modals.css              ← Diálogos de confirmación
│   ├── animations.css          ← Fade-up con IntersectionObserver
│   └── responsive.css          ← Media queries (tablet ≤1024px, mobile ≤640px)
│
└── js/
    ├── utils.js                ← Helpers reutilizables (qs, debounce, animateCounter…)
    ├── nav.js                  ← Scroll shadow, active link, hamburger
    ├── hero.js                 ← Contadores animados
    ├── portfolio.js            ← Filtro de categorías
    ├── form.js                 ← Lógica multi-paso + validación + review
    ├── upload.js               ← Drag & drop, validación de archivos, chips
    ├── payment.js              ← Selección de método, formato de tarjeta, pago
    ├── animations.js           ← IntersectionObserver para .fade-up
    └── main.js                 ← Punto de entrada (DOMContentLoaded)
