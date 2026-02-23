<script setup lang="ts">
interface Deliverable {
  icon: string
  title: string
  description: string
  tag?: string
  tagStyle?: string
  featured?: boolean
}

const deliverables: Deliverable[] = [
  {
    icon: '💼',
    title: 'Posicionamento LinkedIn estratégico',
    description:
      'Seu assistente de carreira reescreve headline, seção "Sobre", e experiências. Tudo claro, estratégico, com sua voz. E você entende o raciocínio.',
    tag: 'Grátis na Sessão Inicial',
    featured: true,
  },
  {
    icon: '📋',
    title: 'CV que passa em algoritmos (e impressiona gente)',
    description:
      'Seu assistente de carreira formata pro ATS, coloca keywords certas, e garante que impressiona quando passa pra mão humana.',
  },
  {
    icon: '📝',
    title: 'Orientação de conteúdo pra aparecer',
    description:
      'Seu assistente de carreira sugere tema, estrutura, ângulo. Tudo baseado no que posiciona você e no que é tendência na sua área.',
  },
  {
    icon: '🌐',
    title: 'Escale pra onde você quer ir',
    description:
      'Você quer ser freelancer? A Aspiry desenha o portfolio. Mercado internacional? A Aspiry orienta. Referência? A Aspiry te ajuda a criar autoridade. Customizado pro seu objetivo.',
    tag: 'Acompanhamento Contínuo',
    tagStyle: 'background:#FEF0E8; color:#C8622A;',
  },
]
</script>

<template>
  <section class="deliverables-section" id="entregaveis">
    <div class="fade-in">
      <p class="section-label">O que você recebe</p>
      <h2 class="section-title">
        O que seu assistente<br />entrega de <em>primeira</em>
      </h2>
    </div>

    <div class="deliverables-grid">
      <div
        v-for="item in deliverables"
        :key="item.title"
        class="deliverable-card fade-in"
        :class="{ featured: item.featured }"
      >
        <div class="deliverable-icon" aria-hidden="true">{{ item.icon }}</div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span v-if="item.tag" class="tag" :style="item.featured ? '' : item.tagStyle">
            {{ item.tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deliverables-section {
  padding: 100px 24px;
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

.deliverables-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 56px;
}

.deliverable-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px 32px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  transition: border-color 0.2s;
}

.deliverable-card:hover {
  border-color: var(--border-strong);
}

.deliverable-card.featured {
  background: var(--accent-2);
  border-color: transparent;
  color: #fff;
}

.deliverable-card.featured p {
  color: rgba(255, 255, 255, 0.7);
}

.deliverable-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.deliverable-card.featured .deliverable-icon {
  background: rgba(255, 255, 255, 0.15);
}

.deliverable-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
}

.deliverable-card p {
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.65;
  font-weight: 300;
}

.tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .deliverables-grid {
    grid-template-columns: 1fr;
  }
}
</style>
