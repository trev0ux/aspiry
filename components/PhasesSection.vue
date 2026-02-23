<script setup lang="ts">
interface PhaseItem {
  text: string
}

interface Phase {
  pill: string
  pillClass: string
  title: string
  description: string
  items: PhaseItem[]
  priceAmount: string
  pricePeriod: string
  priceNote: string
}

const phases: Phase[] = [
  {
    pill: 'Grátis',
    pillClass: 'free',
    title: 'Sessão Inicial — Seu Diagnóstico',
    description:
      'Seu primeiro diagnóstico com seu assistente de carreira. Perfil analisado, estratégia mapeada, orientações prontas. Enquanto você tiver buscando emprego, é grátis.',
    items: [
      { text: 'Diagnóstico estratégico da sua carreira' },
      { text: 'Posicionamento LinkedIn mapeado' },
      { text: 'CV estratégico (passa em ATS + impressiona)' },
      { text: 'Primeiras 3 orientações de conteúdo' },
      { text: 'Você entende o raciocínio por trás' },
    ],
    priceAmount: 'R$ 0',
    pricePeriod: '/ para sempre',
    priceNote: 'Enquanto estiver buscando emprego, é grátis. Simples assim.',
  },
  {
    pill: 'Pago',
    pillClass: 'paid',
    title: 'Acompanhamento Contínuo — Escale sua Carreira',
    description:
      'Pra quem quer desenvolver carreira rapidinho — freelancer, referência, mercado internacional, promoção. Seu assistente de carreira continua acompanhando semana a semana.',
    items: [
      { text: 'Portfolio estratégico (sua vitrine comercial)' },
      { text: 'Orientação pra freelancer/autônomo' },
      { text: 'Posicionamento pro mercado internacional' },
      { text: 'Orientação de conteúdo toda semana' },
      { text: 'Acesso à comunidade de careers' },
      { text: 'Acompanhamento contínuo (pivô, novo direcionamento)' },
    ],
    priceAmount: 'R$ 49',
    pricePeriod: '/ mês',
    priceNote: 'Comece quando quiser. Cancele quando quiser.',
  },
]
</script>

<template>
  <section class="phases-section" id="planos">
    <div class="phases-inner">
      <div class="fade-in">
        <p class="section-label">Planos</p>
        <h2 class="section-title">
          Primeira análise grátis.<br /><em>Acompanhamento contínuo acessível.</em>
        </h2>
      </div>

      <div class="phases-grid fade-in">
        <div v-for="phase in phases" :key="phase.title" class="phase-card">
          <div class="phase-header">
            <span class="phase-pill" :class="phase.pillClass">{{ phase.pill }}</span>
            <h3>{{ phase.title }}</h3>
          </div>
          <div class="phase-body">
            <p class="phase-desc">{{ phase.description }}</p>
            <ul class="phase-items">
              <li v-for="item in phase.items" :key="item.text">{{ item.text }}</li>
            </ul>
            <div class="phase-price">
              <span class="price-amount">{{ phase.priceAmount }}</span>
              <span class="price-period">{{ phase.pricePeriod }}</span>
            </div>
            <p class="price-note">{{ phase.priceNote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.phases-section {
  background: var(--bg-alt);
  padding: 100px 24px;
}

.phases-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Cabinet Grotesk';
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -1px;
  max-width: 600px;
}

.section-title em {
  font-style: italic;
  color: var(--accent-2);
}

.phases-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 56px;
}

.phase-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.phase-header {
  padding: 28px 32px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 16px;
}

.phase-pill {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 5px 12px;
  border-radius: 50px;
  text-transform: uppercase;
}

.phase-pill.free {
  background: #E8F5EE;
  color: var(--accent-2);
}

.phase-pill.paid {
  background: #FEF0E8;
  color: var(--accent-warm);
}

.phase-header h3 {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.phase-body {
  padding: 32px;
}

.phase-desc {
  font-size: 14px;
  color: var(--ink-soft);
  margin-bottom: 24px;
  font-weight: 300;
  line-height: 1.7;
}

.phase-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.phase-items li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
}

.phase-items li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-2);
  flex-shrink: 0;
}

.phase-card:last-child .phase-items li::before {
  background: var(--accent-warm);
}

.phase-price {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.price-amount {
  font-family: 'Cabinet Grotesk';
  font-size: 36px;
  letter-spacing: -1px;
}

.price-period {
  font-size: 13px;
  color: var(--ink-muted);
}

.price-note {
  font-size: 12px;
  color: var(--ink-muted);
  margin-top: 6px;
}

@media (max-width: 768px) {
  .phases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
