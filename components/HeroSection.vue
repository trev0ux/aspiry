<template>
  <section class="hero">

    <!-- ── Headline + CTAs ─────────────────────────────────────────── -->
    <div class="hero-copy">
      <h1 class="hero-headline">
        Você já tem o talento.<br /><em>Agora você decide como o mercado te vê.</em>
      </h1>
      <p class="hero-sub">
        Envie seu CV e LinkedIn. A Aspiry encontra seus diferenciais reais e gera os ativos que fazem recrutadores te notarem — em minutos.
      </p>
      <div class="hero-ctas">
        <a href="#comecar" class="cta-primary">Analisar minha carreira agora →</a>
        <a href="#como-funciona" class="cta-ghost">Ver como funciona</a>
      </div>
      <p class="hero-note">Análise inicial grátis. Sem cartão. Sem cobranças escondidas.</p>
    </div>

    <!-- ── Product mockup (browser + app UI) ─────────────────────── -->
    <div class="mockup-wrap" aria-hidden="true">
      <div class="browser-chrome">
        <div class="chrome-dots"><span/><span/><span/></div>
        <div class="chrome-url">app.aspiry.com.br · Meu perfil</div>
        <div style="flex:1"/>
      </div>
      <div class="app-frame">
        <!-- Sidebar -->
        <nav class="app-sidebar">
          <div class="sb-logo">✦ Aspiry</div>
          <div class="sb-menu">
            <div class="sb-item active">📊 Meu perfil</div>
            <div class="sb-item">💼 LinkedIn</div>
            <div class="sb-item">📋 CV / ATS</div>
            <div class="sb-item">📝 Posts</div>
            <div class="sb-item muted">🌐 Portfólio</div>
          </div>
          <div class="sb-upgrade">
            <span class="su-pill">Fase 2</span>
            <span class="su-text">Carreira autônoma</span>
          </div>
        </nav>

        <!-- Content -->
        <div class="app-content">
          <div class="app-bar">
            <span class="app-bar-title">Análise concluída ✓</span>
            <div class="app-bar-btns">
              <span class="ab-btn">Exportar</span>
              <span class="ab-btn dark">Copiar tudo</span>
            </div>
          </div>

          <!-- Metrics -->
          <div class="metrics-row">
            <div class="metric"><span class="mv green">94%</span><span class="ml">ATS score</span></div>
            <div class="metric-sep"/>
            <div class="metric"><span class="mv blue">12</span><span class="ml">Keywords</span></div>
            <div class="metric-sep"/>
            <div class="metric"><span class="mv orange">3</span><span class="ml">Posts</span></div>
            <div class="metric-sep"/>
            <div class="metric"><span class="mv">↑87%</span><span class="ml">Visibilidade</span></div>
          </div>

          <!-- Output cards -->
          <div class="output-grid">
            <div class="oc">
              <div class="oc-head">
                <span>💼</span><b>Headline — LinkedIn</b>
                <span class="oc-pill new">Novo</span>
              </div>
              <div class="oc-body">Front-end Developer especializado em React e performance web · Reduzi 40% do tempo de carregamento em projetos de e-commerce</div>
              <div class="oc-foot">
                <span class="oc-tag">✓ ATS</span>
                <span class="oc-tag">✓ Diferenciado</span>
                <span class="oc-copy">Copiar</span>
              </div>
            </div>
            <div class="oc">
              <div class="oc-head">
                <span>📄</span><b>Seção Sobre</b>
                <span class="oc-pill">Pronto</span>
              </div>
              <div class="oc-body">Desenvolvo interfaces que convertem. Nos últimos 3 anos reduzi o tempo de carregamento em 40% em projetos de e-commerce…</div>
              <div class="oc-foot">
                <span class="oc-tag">✓ Narrativa forte</span>
                <span class="oc-copy">Copiar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.hero {
  padding: 88px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: var(--bg);
}

/* ── Characters ───────────────────────────────────────── */
.chars-row {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 14px;
  flex-wrap: nowrap;
  padding: 0 24px;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeUp 0.7s 0.04s cubic-bezier(0.16,1,0.3,1) forwards;
}
.char-wrap {
  transform: rotate(var(--rot, 0deg));
  animation: bobble 6s var(--delay, 0s) ease-in-out infinite;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.char-wrap:hover {
  transform: rotate(0deg) scale(1.18) !important;
  animation-play-state: paused;
  z-index: 10;
}
.char-bubble {
  width: 78px; height: 78px;
  border-radius: 50%;
  padding: 8px;
  border: 3px solid #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
}
.char-bubble svg { width: 100%; height: 100%; display: block; }

/* ── Copy ─────────────────────────────────────────────── */
.hero-copy { padding: 0 24px; max-width: 800px; }

.hero-headline {
  font-family: 'Cabinet Grotesk';
  font-size: clamp(32px, 8.5vw, 72px);
  line-height: 1.0;
  letter-spacing: -3.5px;
  color: var(--ink);
  margin-bottom: 22px;
  opacity: 0;
  animation: fadeUp 0.7s 0.18s cubic-bezier(0.16,1,0.3,1) forwards;
}
.hero-headline em {
  font-style: italic;
  color: var(--accent-2);
}

.hero-sub {
  font-size: 17.5px;
  font-weight: 300;
  color: var(--ink-soft);
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto 32px;
  opacity: 0;
  animation: fadeUp 0.7s 0.27s cubic-bezier(0.16,1,0.3,1) forwards;
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
  opacity: 0;
  animation: fadeUp 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
}

.cta-primary {
  background: var(--ink);
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(28,27,24,0.22), 0 1px 3px rgba(28,27,24,0.12);
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.cta-primary:hover {
  background: #2D2C28;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(28,27,24,0.26);
}
.cta-ghost {
  color: var(--ink-soft);
  text-decoration: none;
  font-size: 14.5px;
  padding: 13px 4px;
  transition: color 0.15s;
}
.cta-ghost:hover { color: var(--ink); }

.hero-note {
  font-size: 12.5px;
  color: var(--ink-muted);
  margin-bottom: 54px;
  opacity: 0;
  animation: fadeUp 0.7s 0.43s cubic-bezier(0.16,1,0.3,1) forwards;
}

/* ── Product mockup ───────────────────────────────────── */
.mockup-wrap {
  width: 100%;
  max-width: 980px;
  padding: 0 24px;
  opacity: 0;
  animation: scaleIn 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
}

.browser-chrome {
  background: #ECEAE4;
  border: 1px solid var(--border);
  border-bottom: none;
  border-radius: 14px 14px 0 0;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.chrome-dots { display: flex; gap: 5px; }
.chrome-dots span { width: 10px; height: 10px; border-radius: 50%; background: rgba(0,0,0,0.14); }
.chrome-url {
  background: rgba(255,255,255,0.55);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 11.5px;
  color: var(--ink-muted);
  margin: 0 auto;
}

.app-frame {
  display: grid;
  grid-template-columns: 192px 1fr;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  box-shadow: var(--shadow-mockup);
  text-align: left;
}

/* sidebar */
.app-sidebar {
  background: #fff;
  border-right: 1px solid var(--border);
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.sb-logo {
  font-family: 'Cabinet Grotesk';
  font-size: 14.5px;
  color: var(--ink);
  padding: 0 14px 14px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 6px;
}
.sb-menu { flex: 1; }
.sb-item {
  font-size: 12px;
  color: var(--ink-soft);
  padding: 7px 14px;
  border-radius: 6px;
  margin: 1px 6px;
  cursor: default;
  white-space: nowrap;
}
.sb-item.active { background: var(--accent-green-bg); color: var(--accent-2); font-weight: 500; }
.sb-item.muted  { color: var(--ink-muted); }
.sb-upgrade {
  margin: 10px 6px 0;
  background: var(--bg-warm);
  border-radius: 8px;
  padding: 9px 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.su-pill { font-size: 10px; font-weight: 700; color: var(--pop-orange); text-transform: uppercase; letter-spacing: 0.5px; }
.su-text { font-size: 10.5px; color: var(--ink-soft); }

/* main content */
.app-content { padding: 14px; display: flex; flex-direction: column; gap: 10px; }
.app-bar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.app-bar-title { font-size: 12.5px; font-weight: 600; color: var(--ink); }
.app-bar-btns { display: flex; gap: 5px; }
.ab-btn {
  font-size: 11px; font-weight: 500;
  padding: 4px 11px;
  border-radius: 6px;
  cursor: default;
  border: 1px solid var(--border);
  color: var(--ink-soft);
}
.ab-btn.dark { background: var(--ink); color: #fff; border-color: transparent; }

/* metrics */
.metrics-row {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  gap: 6px;
}
.metric { flex: 1; text-align: center; }
.mv { display: block; font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.2; }
.mv.green  { color: var(--accent-2); }
.mv.blue   { color: var(--pop-blue); }
.mv.orange { color: var(--pop-orange); }
.ml { display: block; font-size: 9.5px; color: var(--ink-muted); margin-top: 2px; }
.metric-sep { width: 1px; height: 26px; background: var(--border); flex-shrink: 0; }

/* output cards */
.output-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.oc { background: #fff; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.oc-head {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 9px 11px 8px;
  border-bottom: 1px solid var(--border);
  font-size: 11.5px;
  color: var(--ink);
}
.oc-head b { flex: 1; font-weight: 600; font-size: 11.5px; }
.oc-pill {
  font-size: 9.5px; font-weight: 600;
  padding: 2px 6px; border-radius: 50px;
  background: var(--bg-subtle); color: var(--ink-muted);
}
.oc-pill.new { background: var(--accent-green-bg); color: var(--accent-2); }
.oc-body {
  font-size: 11px; color: var(--ink-soft); line-height: 1.55;
  padding: 9px 11px; font-weight: 300;
}
.oc-foot {
  display: flex; align-items: center; gap: 4px;
  padding: 7px 11px;
  border-top: 1px solid var(--border);
}
.oc-tag {
  font-size: 9.5px; font-weight: 500;
  padding: 2px 6px;
  background: var(--accent-green-bg); color: var(--accent-2);
  border-radius: 50px;
}
.oc-copy {
  margin-left: auto;
  font-size: 10.5px; font-weight: 500;
  color: var(--ink-soft);
  border: 1px solid var(--border);
  padding: 2px 8px; border-radius: 5px;
  cursor: default;
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 768px) {
  .hero { padding: 80px 0 0; }
  .chars-row { gap: 8px; }
  .char-bubble { width: 60px; height: 60px; padding: 6px; border-width: 2px; }
  .hero-headline { letter-spacing: -2px; }
  .app-frame { grid-template-columns: 1fr; }
  .app-sidebar { display: none; }
  .output-grid { grid-template-columns: 1fr; }
}
</style>
