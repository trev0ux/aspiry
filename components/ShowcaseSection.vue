<script setup lang="ts">
interface Step {
  num: string; title: string; desc: string
}
const steps: Step[] = [
  { num: '01', title: 'Joga os materiais', desc: 'CV em PDF + LinkedIn exportado. 30 segundos de upload e a Aspiry tem tudo que precisa.' },
  { num: '02', title: 'A IA faz o trabalho', desc: 'Mapeia seus diferenciais reais, identifica as palavras-chave da sua área e entende o que o recrutador vai procurar.' },
  { num: '03', title: 'Tudo pronto pra copiar', desc: 'LinkedIn, CV e posts gerados com explicação do raciocínio. Você entende por que cada palavra foi escolhida.' },
  { num: '04', title: 'Aplica e cresce', desc: 'Usa os ativos, pega o emprego. Quer mais? Avança pra Fase 2 e escala a carreira do jeito que você quiser.' },
]
</script>

<template>
  <section class="showcase-section" id="como-funciona">
    <div class="showcase-inner">

      <!-- Left -->
      <div class="showcase-left fade-in">
        <p class="eyebrow">Como funciona</p>
        <h2 class="showcase-title">
          De CV jogado a<br /><em>perfil magnético.</em>
        </h2>
        <p class="showcase-sub">Quatro etapas. Sem consultor. Sem formulário eterno.</p>

        <ol class="steps-list">
          <li v-for="s in steps" :key="s.num" class="step-item">
            <div class="step-num">{{ s.num }}</div>
            <div>
              <div class="step-title">{{ s.title }}</div>
              <div class="step-desc">{{ s.desc }}</div>
            </div>
          </li>
        </ol>
        <a href="#comecar" class="showcase-cta">Bora começar →</a>
      </div>

      <!-- Right: output card -->
      <div class="showcase-right fade-in" aria-hidden="true">
        <div class="output-card">
          <div class="output-header">
            <div class="output-header-left">
              <div class="output-icon">✨</div>
              <div>
                <div class="output-title">Ativos gerados</div>
                <div class="output-meta">3 arquivos · Prontos pra usar</div>
              </div>
            </div>
            <div class="output-badge">Fase 1 · Grátis</div>
          </div>
          <div class="asset-list">
            <div class="asset-item">
              <div class="asset-icon" style="background:rgba(59,130,246,.12)">💼</div>
              <div class="asset-info">
                <div class="asset-name">LinkedIn otimizado</div>
                <div class="asset-desc">Headline + Sobre + Experiências</div>
              </div>
              <div class="asset-btn">Copiar</div>
            </div>
            <div class="asset-item">
              <div class="asset-icon" style="background:rgba(242,100,25,.12)">📋</div>
              <div class="asset-info">
                <div class="asset-name">CV_ATS_SeuNome.pdf</div>
                <div class="asset-desc">Keywords certas inseridas</div>
              </div>
              <div class="asset-btn">Baixar</div>
            </div>
            <div class="asset-item">
              <div class="asset-icon" style="background:rgba(124,58,237,.12)">📝</div>
              <div class="asset-info">
                <div class="asset-name">Posts sugeridos (3)</div>
                <div class="asset-desc">Estrutura pronta pra publicar</div>
              </div>
              <div class="asset-btn">Ver</div>
            </div>
          </div>
          <div class="reasoning-block">
            <div class="reasoning-label">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" fill="var(--accent-green-light)"/>
              </svg>
              Raciocínio da IA
            </div>
            <p>"Tua experiência com React focada em performance é rara. Posicionei como diferencial principal porque recrutadores de produto digital priorizam dev que pensa em negócio..."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section { background: var(--bg-dark); padding: 100px 32px; }
.showcase-inner {
  max-width: 1120px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 72px; align-items: center;
}

.eyebrow {
  font-size: 12px; font-weight: 500;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--accent-green-light); margin-bottom: 16px;
}
.showcase-title {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(36px, 5vw, 60px);
  letter-spacing: -1.5px; line-height: 1.05;
  color: #fff; margin-bottom: 14px;
}
.showcase-title em { font-style: italic; color: var(--accent-green-light); }
.showcase-sub { font-size: 15px; color: rgba(255,255,255,0.4); font-weight: 300; line-height: 1.6; margin-bottom: 40px; }

.steps-list { list-style: none; display: flex; flex-direction: column; margin-bottom: 36px; }
.step-item {
  display: flex; gap: 18px; align-items: flex-start;
  padding: 18px 0;
  border-bottom: 1px solid var(--border-dark);
}
.step-item:first-child { padding-top: 0; }
.step-item:last-child  { border-bottom: none; padding-bottom: 0; }
.step-num {
  font-family: 'Instrument Serif', serif;
  font-size: 22px; color: rgba(255,255,255,0.15);
  line-height: 1.3; flex-shrink: 0; width: 30px;
}
.step-title { font-size: 14.5px; font-weight: 600; color: #fff; margin-bottom: 4px; letter-spacing: -0.2px; }
.step-desc  { font-size: 13px; color: rgba(255,255,255,0.42); font-weight: 300; line-height: 1.6; }

.showcase-cta {
  display: inline-flex; align-items: center;
  background: #fff; color: var(--ink);
  text-decoration: none; font-size: 14px; font-weight: 500;
  padding: 11px 22px; border-radius: 9px;
  transition: opacity 0.15s, transform 0.15s;
}
.showcase-cta:hover { opacity: 0.88; transform: translateY(-1px); }

/* Output card */
.output-card {
  background: var(--bg-dark-2);
  border: 1px solid var(--border-dark);
  border-radius: 18px; overflow: hidden;
}
.output-header {
  padding: 18px 22px;
  border-bottom: 1px solid var(--border-dark);
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
}
.output-header-left { display: flex; align-items: center; gap: 12px; }
.output-icon {
  width: 38px; height: 38px;
  background: rgba(46,107,79,0.15); border-radius: 10px;
  display: flex; align-items: center; justify-content: center; font-size: 18px;
}
.output-title { font-size: 13.5px; font-weight: 600; color: #fff; }
.output-meta  { font-size: 11px; color: rgba(255,255,255,0.32); margin-top: 2px; }
.output-badge {
  font-size: 11px; font-weight: 500;
  background: var(--accent-green-bg); color: var(--accent-2);
  padding: 4px 10px; border-radius: 50px; white-space: nowrap;
}

.asset-list { padding: 6px 0; }
.asset-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 22px;
  border-bottom: 1px solid var(--border-dark);
  transition: background 0.15s;
}
.asset-item:hover { background: rgba(255,255,255,0.03); }
.asset-item:last-child { border-bottom: none; }
.asset-icon {
  width: 34px; height: 34px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
}
.asset-info { flex: 1; min-width: 0; }
.asset-name { font-size: 12.5px; font-weight: 500; color: #fff; }
.asset-desc { font-size: 11px; color: rgba(255,255,255,0.32); margin-top: 2px; }
.asset-btn {
  font-size: 11px; font-weight: 500;
  color: var(--accent-green-light);
  padding: 4px 10px; border-radius: 6px;
  border: 1px solid rgba(124,196,160,0.2);
  cursor: default; white-space: nowrap;
  transition: background 0.15s;
}
.asset-btn:hover { background: rgba(124,196,160,0.08); }

.reasoning-block {
  margin: 14px 22px 18px;
  background: rgba(46,107,79,0.08);
  border: 1px solid rgba(124,196,160,0.14);
  border-radius: 12px; padding: 13px 15px;
}
.reasoning-label {
  display: flex; align-items: center; gap: 6px;
  font-size: 10.5px; font-weight: 600;
  letter-spacing: 0.5px; text-transform: uppercase;
  color: var(--accent-green-light); margin-bottom: 8px;
}
.reasoning-block p {
  font-size: 12px; color: rgba(255,255,255,0.42);
  font-style: italic; font-weight: 300; line-height: 1.65;
}

@media (max-width: 900px) { .showcase-inner { grid-template-columns: 1fr; gap: 44px; } }
@media (max-width: 600px) { .showcase-section { padding: 72px 20px; } }
</style>
