---
// landing-servicios.astro - Ejemplo de uso del layout
import Layout from "../../layouts/LayoutLanding.astro";
---

<Layout
    title="Servicios Web | WeblocalMX"
    description="Nuestros servicios de desarrollo web profesional"
    keywords="desarrollo web, diseño web, landing page, seo, weblocalMX"
>
    <Fragment slot="meta">
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Servicios Web | WeblocalMX" />
        <meta property="og:description" content="Desa qutaca en línea hoy!" />
        <meta
            property="og:image"
            content="https://tudominio.com/images/servicios-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </Fragment>

    <!-- Aquí va todo el contenido de tu landing page existente -->
</Layout>

<style>
    
</style>