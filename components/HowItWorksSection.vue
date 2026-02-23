<script setup lang="ts">
interface Step {
  num: string
  icon: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    num: '01',
    icon: '📄',
    title: 'Envie seus materiais',
    description:
      'Faça upload do seu CV em PDF e do LinkedIn exportado. A Aspiry analisa tudo que você já tem.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Diagnóstico inteligente',
    description:
      'Nossa IA identifica seus diferenciais reais, gaps de posicionamento e o que os recrutadores estão procurando.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Ativos gerados',
    description:
      'Receba headline, seção "Sobre", CV otimizado e primeiros posts — com explicação do raciocínio por trás.',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Aplique e cresça',
    description:
      'Use os ativos prontos. Quando conseguir o emprego, continue evoluindo com os planos avançados.',
  },
]
</script>

<template>
  <section class="how-section" id="como-funciona">
    <div class="how-inner">
      <div class="fade-in">
        <p class="section-label">Como funciona</p>
        <h2 class="section-title">
          De invisível a <em>referência</em><br />em quatro passos
        </h2>
      </div>

      <div class="steps">
        <div v-for="step in steps" :key="step.num" class="step fade-in">
          <div class="step-num" aria-hidden="true">{{ step.num }}</div>
          <div class="step-icon" aria-hidden="true">{{ step.icon }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  background: var(--accent);
  color: #fff;
  padding: 100px 24px;
}

.how-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -1px;
  max-width: 600px;
  color: #fff;
}

.section-title em {
  font-style: italic;
  color: var(--accent-green-light);
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  margin-top: 64px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
  overflow: hidden;
}

.step {
  padding: 40px 32px;
  background: var(--accent);
  position: relative;
  transition: background 0.2s;
}

.step:hover {
  background: rgba(255, 255, 255, 0.04);
}

.step-num {
  font-family: 'Instrument Serif', serif;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.12);
  line-height: 1;
  margin-bottom: 24px;
}

.step-icon {
  font-size: 22px;
  margin-bottom: 16px;
}

.step h3 {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: -0.2px;
}

.step p {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  font-weight: 300;
}

@media (max-width: 768px) {
  .steps {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
