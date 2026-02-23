<script setup lang="ts">
interface PriceFeature { text: string; included: boolean }
interface Plan {
  pill: string; pillStyle: string; name: string; price: string; period: string
  description: string; features: PriceFeature[]; cta: string; ctaHref: string
  highlight: boolean; note: string
}

const plans: Plan[] = [
  {
    pill: 'Grátis', pillStyle: 'background: var(--accent-green-bg); color: var(--accent-2)',
    name: 'Sessão Inicial', price: 'R$ 0', period: '',
    description: 'Seu primeiro diagnóstico com seu assistente de carreira. Perfil analisado, estratégia mapeada, orientações prontas. Sem cartão.',
    features: [
      { text: 'Diagnóstico estratégico da sua carreira', included: true },
      { text: 'Posicionamento LinkedIn mapeado', included: true },
      { text: 'CV estratégico (passa em ATS + impressiona)', included: true },
      { text: 'Primeiras 3 orientações de conteúdo', included: true },
      { text: 'Você entende o raciocínio por trás', included: true },
      { text: 'Portfolio estratégico (sua vitrine comercial)', included: false },
      { text: 'Posicionamento pro mercado europeu/inglês', included: false },
      { text: 'Acesso à comunidade de careers', included: false },
    ],
    cta: 'Começar grátis agora', ctaHref: '#comecar',
    highlight: false, note: 'Enquanto você tiver buscando emprego, é grátis. Sem cartão.',
  },
  {
    pill: 'Mais popular', pillStyle: 'background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8)',
    name: 'Acompanhamento Contínuo', price: 'R$ 49', period: '/ mês',
    description: 'Pra quem quer desenvolver carreira rapidinho — freelancer, referência, mercado internacional, promoção. Seu assistente de carreira continua acompanhando semana a semana.',
    features: [
      { text: 'Tudo da Sessão Inicial', included: true },
      { text: 'Portfolio estratégico (sua vitrine comercial)', included: true },
      { text: 'Orientação pra freelancer/autônomo', included: true },
      { text: 'Posicionamento pro mercado europeu/inglês', included: true },
      { text: 'Orientação de conteúdo toda semana', included: true },
      { text: 'Acompanhamento contínuo (pivô, novo direcionamento, qualquer hora)', included: true },
      { text: 'Acesso à comunidade de careers', included: true },
      { text: 'Para quando quiser (sem punição)', included: true },
    ],
    cta: 'Ativar acompanhamento contínuo', ctaHref: '#comecar',
    highlight: true, note: 'Comece quando quiser. Cancele quando quiser.',
  },
]
</script>

<template>
  <section class="pricing-section" id="planos">
    <div class="pricing-inner">
      <div class="pricing-header fade-in">
        <p class="eyebrow">Planos</p>
        <h2 class="pricing-title">Primeira análise com seu assistente?<br /><em>Grátis.</em></h2>
        <p class="pricing-sub">Depois, é só R$ 49/mês pro acompanhamento contínuo. Sem cartão agora. Sem amarras depois.</p>
      </div>
      <div class="pricing-grid fade-in">
        <div v-for="p in plans" :key="p.name" :class="['plan-card', { highlight: p.highlight }]">
          <div class="plan-pill" :style="p.pillStyle">{{ p.pill }}</div>
          <div class="plan-name">{{ p.name }}</div>
          <div class="plan-price-row">
            <span class="plan-price">{{ p.price }}</span>
            <span v-if="p.period" class="plan-period">{{ p.period }}</span>
          </div>
          <p class="plan-desc">{{ p.description }}</p>
          <a :href="p.ctaHref" :class="['plan-cta', { 'plan-cta-white': p.highlight }]">{{ p.cta }}</a>
          <div class="plan-divider" />
          <ul class="plan-features">
            <li v-for="f in p.features" :key="f.text" :class="['plan-feat', { off: !f.included }]">
              <span class="feat-check" :style="f.included ? '' : 'color:var(--ink-muted)'">
                <svg v-if="f.included" width="12" height="12" viewBox="0 0 13 13" fill="none"><path d="M2.5 7L5 9.5L10.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <svg v-else width="12" height="12" viewBox="0 0 13 13" fill="none"><path d="M4 4l5 5M9 4l-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
              </span>
              {{ f.text }}
            </li>
          </ul>
          <p class="plan-note">{{ p.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: 100px 32px;
  background: var(--bg-subtle);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.pricing-inner { max-width: 900px; margin: 0 auto; }

.pricing-header { text-align: center; margin-bottom: 48px; }
.eyebrow { font-size: 12px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent-2); margin-bottom: 14px; }
.pricing-title { font-family: 'Cabinet Grotesk'; font-size: clamp(32px, 4vw, 52px); letter-spacing: -1.5px; line-height: 1.08; color: var(--ink); margin-bottom: 12px; }
.pricing-title em { font-style: italic; color: var(--accent-2); }
.pricing-sub { font-size: 14.5px; color: var(--ink-muted); font-weight: 300; }

.pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; }

.plan-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 30px;
  transition: border-color 0.2s;
}
.plan-card.highlight { background: var(--ink); border-color: var(--ink); }

.plan-pill {
  display: inline-block; font-size: 11px; font-weight: 600;
  letter-spacing: 0.4px; padding: 3px 10px; border-radius: 50px; margin-bottom: 18px;
}
.plan-name { font-size: 12.5px; font-weight: 500; color: var(--ink-muted); margin-bottom: 7px; }
.plan-card.highlight .plan-name { color: rgba(255,255,255,0.42); }
.plan-price-row { display: flex; align-items: baseline; gap: 5px; margin-bottom: 11px; }
.plan-price { font-family: 'Cabinet Grotesk'; font-size: 44px; letter-spacing: -2px; line-height: 1; color: var(--ink); }
.plan-card.highlight .plan-price { color: #fff; }
.plan-period { font-size: 14px; color: var(--ink-muted); font-weight: 300; }
.plan-card.highlight .plan-period { color: rgba(255,255,255,0.38); }
.plan-desc { font-size: 13.5px; color: var(--ink-soft); line-height: 1.6; font-weight: 300; margin-bottom: 22px; }
.plan-card.highlight .plan-desc { color: rgba(255,255,255,0.52); }

.plan-cta {
  display: block; text-align: center; text-decoration: none;
  font-size: 14px; font-weight: 500; padding: 11px 20px;
  border-radius: 10px; border: 1.5px solid var(--border-strong); color: var(--ink);
  transition: background 0.15s, transform 0.15s;
}
.plan-cta:hover { background: var(--bg-subtle); transform: translateY(-1px); }
.plan-cta-white { background: #fff; border-color: transparent; box-shadow: 0 2px 8px rgba(0,0,0,0.16); }
.plan-cta-white:hover { background: rgba(255,255,255,0.92); }

.plan-divider { height: 1px; background: var(--border); margin: 22px 0; }
.plan-card.highlight .plan-divider { background: rgba(255,255,255,0.1); }

.plan-features { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.plan-feat {
  display: flex; align-items: flex-start; gap: 9px;
  font-size: 13.5px; color: var(--ink-soft); font-weight: 300; line-height: 1.5;
}
.plan-card.highlight .plan-feat { color: rgba(255,255,255,0.62); }
.plan-feat.off { opacity: 0.38; }
.feat-check {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--bg-subtle);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--accent-2); margin-top: 1px;
}
.plan-card.highlight .feat-check { background: rgba(255,255,255,0.1); }

.plan-note { font-size: 11.5px; color: var(--ink-muted); margin-top: 18px; text-align: center; }
.plan-card.highlight .plan-note { color: rgba(255,255,255,0.26); }

@media (max-width: 640px) {
  .pricing-grid { grid-template-columns: 1fr; }
  .pricing-section { padding: 72px 20px; }
}
</style>
