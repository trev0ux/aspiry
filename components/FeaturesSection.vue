<script setup lang="ts">
// Bento grid — warm cream background, Gen Z copy
</script>

<template>
  <section class="features-section" id="entregaveis">
    <div class="features-inner">

      <div class="features-header fade-in">
        <p class="eyebrow">Apresentando a Aspiry</p>
        <h2 class="features-title">
          Seu assistente de carreira<br /><em>está sempre disponível.</em>
        </h2>
        <p class="features-sub">
          Análise profunda do seu perfil. Orientação pra semana seguinte. Plano de carreira claro. Tudo que um consultor caro ofereceria, mas sem as 60x + R$ 800/sessão.
        </p>
      </div>

      <!-- Bento grid -->
      <div class="bento-grid">

        <!-- Large: diagnóstico IA -->
        <div class="bento-card bento-large fade-in">
          <div class="bento-tag orange">IA + análise humana</div>
          <h3>Análise que conhece<br />sua carreira inteira.</h3>
          <p>Sua IA lê CV, LinkedIn, experiência. Descobre o que você realmente faz bem (que você nem vê). Entende seus gaps. E monta uma estratégia de carreira baseada em dados, não em achismo.</p>
          <div class="bento-mini-ui" aria-hidden="true">
            <div class="mini-row">
              <span class="mini-label">Proposta de valor identificada</span>
              <span class="mini-chip green">✓ Encontrada</span>
            </div>
            <div class="mini-row">
              <span class="mini-label">Gaps no posicionamento</span>
              <span class="mini-chip amber">3 encontrados</span>
            </div>
            <div class="mini-row">
              <span class="mini-label">Keywords da sua área</span>
              <span class="mini-chip green">12 mapeadas</span>
            </div>
            <div class="mini-bar-row">
              <span class="mini-bar-label">Compatibilidade com mercado</span>
              <div class="mini-bar-track"><div class="mini-bar-fill" /></div>
              <span class="mini-bar-pct">87%</span>
            </div>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="bento-card fade-in">
          <div class="bento-icon" style="background:#EBF3FF; color:#2563EB">💼</div>
          <h3>Seu posicionamento no LinkedIn fica cristalino</h3>
          <p>Seu assistente de carreira reescreve headline, seção "Sobre", experiências — mas com a sua voz, não genérica. E explica cada decisão pra você aprender o raciocínio de positioning.</p>
          <div class="bento-tag-row" aria-hidden="true">
            <span class="b-tag">Headline</span>
            <span class="b-tag">Sobre</span>
            <span class="b-tag">Experiências</span>
          </div>
        </div>

        <!-- CV ATS -->
        <div class="bento-card fade-in" style="background: var(--bg-warm)">
          <div class="bento-icon" style="background:#FEF3EC; color:var(--pop-orange)">📋</div>
          <h3>CV que passa nos filtros (e impressiona quem lê)</h3>
          <p>CV formatado pra ATS + redigido pra você. Seu assistente de carreira garante que passa nos algoritmos das empresas, mas que também impressiona quando passa pra mão humana.</p>
          <div class="score-big-wrap" aria-hidden="true">
            <span class="score-big-num">94%</span>
            <span class="score-big-label">ATS score médio</span>
          </div>
        </div>

        <!-- Wide: portfólio -->
        <div class="bento-card bento-wide fade-in" style="background: var(--bg-dark); color:#fff">
          <div class="bento-tag white">Fase 2 · R$ 19/mês</div>
          <div class="bento-wide-layout">
            <div>
              <h3 style="color:#fff">Escale sua carreira como você imagina.</h3>
              <p style="color: rgba(255,255,255,0.55)">Quer freelancer? A Aspiry cria o portfólio. Quer mercado europeu? A Aspiry guia o passo. Quer ser referência? A Aspiry te ajuda a criar autoridade. Tudo customizado pro seu objetivo.</p>
            </div>
            <div class="bento-wide-pills" aria-hidden="true">
              <span class="wide-pill">🌐 Mercado europeu</span>
              <span class="wide-pill">💰 Freelancer</span>
              <span class="wide-pill">🏆 Portfólio</span>
            </div>
          </div>
        </div>

        <!-- Posts -->
        <div class="bento-card fade-in">
          <div class="bento-icon" style="background:#F3EEFF; color:#7C3AED">📝</div>
          <h3>Orientação de conteúdo pra você aparecer</h3>
          <p>Seu assistente de carreira sugere tema, estrutura, ideia — baseado no que é tendência na sua área e no que te posiciona melhor. Sem tela em branco, sem ansiedade.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 100px 32px;
  background: var(--bg-warm);
}
.features-inner { max-width: 1120px; margin: 0 auto; }

.features-header { text-align: center; margin-bottom: 56px; }
.eyebrow {
  font-size: 12px; font-weight: 500;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--accent-2); margin-bottom: 14px;
}
.features-title {
  font-family: 'Cabinet Grotesk';
  font-size: clamp(32px, 4.5vw, 54px);
  letter-spacing: -1.5px;
  line-height: 1.08;
  color: var(--ink); margin-bottom: 16px;
}
.features-title em { font-style: italic; color: var(--accent-2); }
.features-sub {
  font-size: 16px; color: var(--ink-soft);
  font-weight: 300; max-width: 460px;
  margin: 0 auto; line-height: 1.65;
}

/* Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* Card */
.bento-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.09);
  border-radius: 18px;
  padding: 28px;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: default;
}
.bento-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.bento-card h3 {
  font-size: 16px; font-weight: 600;
  color: var(--ink); margin: 14px 0 8px;
  letter-spacing: -0.3px; line-height: 1.35;
}
.bento-card p { font-size: 13.5px; color: var(--ink-soft); line-height: 1.65; font-weight: 300; }
.bento-large { grid-column: span 2; }
.bento-wide  { grid-column: span 2; }

/* Badges */
.bento-tag {
  display: inline-block;
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.3px;
  padding: 3px 10px; border-radius: 50px; margin-bottom: 4px;
}
.bento-tag.orange { background: #FEF3EC; color: var(--pop-orange); }
.bento-tag.white  { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }

/* Icon */
.bento-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; margin-bottom: 2px;
}

/* Mini UI */
.bento-mini-ui {
  margin-top: 20px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  display: flex; flex-direction: column; gap: 10px;
}
.mini-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.mini-label { font-size: 12px; color: var(--ink-soft); }
.mini-chip {
  font-size: 10.5px; font-weight: 500;
  padding: 3px 9px; border-radius: 50px; white-space: nowrap;
}
.mini-chip.green { background: var(--accent-green-bg); color: var(--accent-2); }
.mini-chip.amber { background: #FEF3EC; color: var(--pop-orange); }
.mini-bar-row { display: flex; align-items: center; gap: 8px; }
.mini-bar-label { font-size: 11px; color: var(--ink-soft); flex: 1; }
.mini-bar-track { width: 80px; height: 5px; background: var(--border); border-radius: 50px; overflow: hidden; }
.mini-bar-fill { height: 100%; width: 87%; background: linear-gradient(90deg, var(--accent-2), var(--accent-green-light)); border-radius: 50px; }
.mini-bar-pct { font-size: 11px; font-weight: 600; color: var(--accent-2); }

/* Tags row */
.bento-tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
.b-tag {
  font-size: 11px; font-weight: 500;
  padding: 3px 10px; border-radius: 50px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  color: var(--ink-soft);
}

/* Score big */
.score-big-wrap { margin-top: 20px; }
.score-big-num {
  font-family: 'Cabinet Grotesk';
  font-size: 44px; color: var(--accent-2);
  letter-spacing: -2px; display: block; line-height: 1; margin-bottom: 3px;
}
.score-big-label { font-size: 12px; color: var(--ink-muted); }

/* Wide card */
.bento-wide-layout {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-top: 14px;
}
.bento-wide-pills { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }
.wide-pill {
  font-size: 12px; font-weight: 500;
  padding: 5px 12px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50px; color: rgba(255,255,255,0.7);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .features-section { padding: 72px 20px; }
  .bento-grid { grid-template-columns: 1fr; }
  .bento-large, .bento-wide { grid-column: span 1; }
  .bento-wide-layout { flex-direction: column; align-items: flex-start; }
}
</style>
