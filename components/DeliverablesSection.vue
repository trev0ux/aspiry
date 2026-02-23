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
    title: 'LinkedIn completo e otimizado',
    description:
      'Headline, seção "Sobre", experiências reescritas com linguagem de mercado. Com explicação do porquê de cada escolha.',
    tag: 'Grátis na Fase 1',
    featured: true,
  },
  {
    icon: '📋',
    title: 'CV pronto para ATS',
    description:
      'Currículo formatado, com as palavras-chave certas para passar pelos filtros automáticos das empresas.',
  },
  {
    icon: '📝',
    title: 'Primeiros 3 posts sugeridos',
    description:
      'Estrutura e ideia para seus primeiros conteúdos no LinkedIn. Sem tela em branco, sem ansiedade.',
  },
  {
    icon: '🌐',
    title: 'Portfólio e carreira autônoma',
    description:
      'Para quem quer ir além do CLT — vitrine comercial, posicionamento para freelas e carreira internacional.',
    tag: 'Fase 2',
    tagStyle: 'background:#FEF0E8; color:#C8622A;',
  },
]
</script>

<template>
  <section class="deliverables-section" id="entregaveis">
    <div class="fade-in">
      <p class="section-label">O que você recebe</p>
      <h2 class="section-title">
        Tudo que você precisa<br />para <em>ser encontrado</em>
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
