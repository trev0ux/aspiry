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
    title: 'A Aspiry te conhece',
    description:
      'Upload CV + LinkedIn. Seu assistente de carreira lê tudo que você já fez, entende sua trajetória, mapeia seus pontos fortes e identifica seus gaps.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Diagnóstico estratégico',
    description:
      'Você recebe análise completa: o que você faz bem, o que precisa desenvolver, qual é seu melhor próximo passo na carreira, e como se posicionar.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Orientação pronta pro uso',
    description:
      'LinkedIn reescrito, CV otimizado, primeiras estratégias de conteúdo — tudo com a lógica explicada. Você entende por que cada decisão foi tomada.',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Comece a aplicar (e cresça)',
    description:
      'Comece com as orientações. Quando conseguir o emprego ou quiser crescer mais rápido, seu assistente de carreira continua orientando — agora pra próximo nível.',
  },
]
</script>

<template>
  <section class="how-section" id="como-funciona">
    <div class="how-inner">
      <div class="fade-in">
        <p class="section-label">Como funciona</p>
        <h2 class="section-title">
          Vier passos entre você<br />e <em>clareza de carreira</em>
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
  font-family: 'Cabinet Grotesk';
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
  font-family: 'Cabinet Grotesk';
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
