<template>
  <section class="cta-section" id="comecar">
    <div class="cta-inner fade-in">
      <p class="eyebrow">Comece agora</p>
      <h2 class="cta-title">
        Seu primeiro diagnóstico<br />de carreira<br /><em>é hoje.</em>
      </h2>
      <p class="cta-sub">
        Joga CV + LinkedIn. Seu assistente de carreira lê tudo, descobre o que você faz bem, e desenha o próximo passo.
        <strong>Grátis. Sem cartão. Sem enrolação.</strong>
      </p>
      <div class="cta-actions">
        <a href="#" class="cta-btn">Analisar minha carreira agora →</a>
        <span class="cta-fine">
          Sem cadastro complicado · Seu assistente começa em minutos · Orientações prontas pra usar
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 120px 32px;
  background: var(--bg-warm);
  border-top: 1px solid var(--border);
  text-align: center;
}
.cta-inner { max-width: 680px; margin: 0 auto; }
.eyebrow { font-size: 12px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent-2); margin-bottom: 20px; }
.cta-title {
  font-family: 'Cabinet Grotesk';
  font-size: clamp(40px, 5.5vw, 72px);
  letter-spacing: -2.5px; line-height: 1.03;
  color: var(--ink); margin-bottom: 24px;
}
.cta-title em { font-style: italic; color: var(--accent-2); }
.cta-sub {
  font-size: 16.5px; color: var(--ink-soft); font-weight: 300;
  line-height: 1.65; margin-bottom: 40px;
}
.cta-sub strong { color: var(--ink); font-weight: 500; }
.cta-actions { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.cta-btn {
  background: var(--ink); color: #fff; text-decoration: none;
  font-size: 15px; font-weight: 600; padding: 15px 32px;
  border-radius: 11px;
  box-shadow: 0 2px 16px rgba(28,27,24,0.2), 0 1px 4px rgba(28,27,24,0.1);
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
  display: inline-block;
}
.cta-btn:hover {
  background: #2D2C28; transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(28,27,24,0.24);
}
.cta-fine { font-size: 12px; color: var(--ink-muted); }

@media (max-width: 600px) {
  .cta-section { padding: 80px 20px; }
  .cta-title { letter-spacing: -1.8px; }
}
</style>
