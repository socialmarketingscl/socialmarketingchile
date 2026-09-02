import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad | Social Marketing" },
  description:
    "Política de privacidad de Social Marketing SpA conforme a la Ley N° 19.628 de Protección de la Vida Privada de Chile.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: false },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main style={{ background: "#F8FAFC", color: "#0F172A" }}>
      <section
        style={{
          width: "min(860px, calc(100% - 40px))",
          margin: "0 auto",
          padding: "140px 0 96px",
        }}
      >
        <h1>Política de Privacidad</h1>
        <p>
          La presente Política de Privacidad regula el tratamiento de datos personales realizado por SOCIAL MARKETING SpA, RUT 78.385.946-7, en adelante &quot;la Empresa&quot;, a través del sitio web https://socialmarketingchile.cl, en conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          SOCIAL MARKETING SpA
          <br />
          RUT: 78.385.946-7
          <br />
          Correo electrónico: administracion@socialmarketingchile.cl
          <br />
          Teléfono: +56961533546
          <br />
          Domicilio: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Región Metropolitana, Chile
        </p>

        <h2>2. Datos que recopilamos</h2>
        <p>
          Recopilamos únicamente los datos que usted nos proporciona voluntariamente a través del formulario de contacto y el botón de WhatsApp del sitio web: nombre, correo electrónico y número de teléfono.
        </p>

        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Los datos recopilados se utilizan exclusivamente para responder consultas comerciales, agendar diagnósticos y establecer contacto con personas interesadas en los servicios de la Empresa. No se utilizan para fines publicitarios de terceros ni para elaboración de perfiles automatizados.
        </p>

        <h2>4. Comunicación a terceros</h2>
        <p>
          SOCIAL MARKETING SpA no vende, cede ni transfiere sus datos personales a terceros. Los datos permanecen bajo control exclusivo de la Empresa.
        </p>

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos se conservan mientras dure la relación comercial o el interés legítimo que motivó el contacto. Una vez finalizada dicha relación, los datos serán eliminados o anonimizados.
        </p>

        <h2>6. Derechos del titular</h2>
        <p>
          En conformidad con la Ley N° 19.628, usted tiene derecho a solicitar información sobre sus datos personales, su origen y destinatario, el propósito del almacenamiento, así como a solicitar su modificación, bloqueo o eliminación cuando resulten erróneos, desactualizados o innecesarios para la finalidad con que fueron recopilados.
        </p>
        <p>
          Para ejercer estos derechos, escríbanos a: administracion@socialmarketingchile.cl
        </p>

        <h2>7. Seguridad</h2>
        <p>
          La Empresa adopta medidas técnicas y organizativas razonables para proteger sus datos personales contra accesos no autorizados, pérdida o divulgación indebida.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política cuando sea necesario. La versión vigente estará siempre disponible en https://socialmarketingchile.cl/politica-de-privacidad
        </p>

        <p>Última actualización: junio de 2026</p>
      </section>
    </main>
  );
}
