<script setup lang="ts">
interface FooterCol {
  title: string
  links: { label: string; href: string }[]
}

const cols: FooterCol[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Entregáveis', href: '#entregaveis' },
      { label: 'Planos', href: '#planos' },
      { label: 'Começar grátis', href: '#comecar' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a Aspiry', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de uso', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- Brand column -->
      <div class="footer-brand">
        <a href="#" class="footer-logo">
          <span class="logo-text">Aspiry</span><span class="logo-dot">.</span>
        </a>
        <p class="footer-tagline">
          Sua marca pessoal,<br />finalmente no lugar certo.
        </p>
        <p class="footer-made">Feito no Brasil 🇧🇷</p>
      </div>

      <!-- Link columns -->
      <div
        v-for="col in cols"
        :key="col.title"
        class="footer-col"
      >
        <h4 class="footer-col-title">{{ col.title }}</h4>
        <ul class="footer-col-links">
          <li v-for="link in col.links" :key="link.label">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p>© 2025 Aspiry. Todos os direitos reservados.</p>
      <p class="footer-bottom-right">Construído com IA. Revisado por humanos.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-subtle);
  border-top: 1px solid var(--border);
}
.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 32px 48px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
}
.footer-brand { display: flex; flex-direction: column; gap: 12px; }
.footer-logo {
  text-decoration: none;
  display: flex;
  align-items: baseline;
  gap: 1px;
  width: fit-content;
}
.logo-text {
  font-family: 'Instrument Serif', serif;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--ink);
}
.logo-dot {
  font-family: 'Instrument Serif', serif;
  font-size: 20px;
  color: var(--accent-2);
}
.footer-tagline {
  font-size: 13px;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.6;
}
.footer-made { font-size: 12px; color: var(--ink-muted); }

/* Col */
.footer-col-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 16px;
}
.footer-col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-col-links a {
  font-size: 13.5px;
  color: var(--ink-soft);
  text-decoration: none;
  font-weight: 300;
  transition: color 0.15s;
}
.footer-col-links a:hover { color: var(--ink); }

/* Bottom */
.footer-bottom {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 32px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.footer-bottom p {
  font-size: 12px;
  color: var(--ink-muted);
}

@media (max-width: 900px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
  .footer-brand { grid-column: span 2; }
}
@media (max-width: 500px) {
  .footer-inner { grid-template-columns: 1fr; padding: 48px 20px 36px; }
  .footer-brand { grid-column: span 1; }
  .footer-bottom { flex-direction: column; gap: 6px; text-align: center; padding: 16px 20px; }
}
</style>
