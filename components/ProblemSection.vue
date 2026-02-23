<script setup lang="ts">
interface ProblemCard {
  icon: string
  title: string
  description: string
}

const cards: ProblemCard[] = [
  {
    icon: '😶',
    title: 'Não saber o próximo passo',
    description:
      'Você não tem clareza sobre qual é seu próximo movimento. Continua no mesmo lugar ou tenta algo novo? Quer crescer aqui ou buscar outro mercado? Sem alguém pra conversar, fica paralisado.',
  },
  {
    icon: '🤷',
    title: 'Parecer genérico no mercado',
    description:
      'Seu perfil não destaca o que você realmente sabe fazer. Recrutadores passam reto. E você não consegue articular seus pontos fortes de um jeito que faça sentido.',
  },
  {
    icon: '🔇',
    title: 'Decidir sozinho vai derrubar você',
    description:
      'Fazer a carreira crescer envolve decisões — que conteúdo publicar, que vaga pedir, como se reposicionar. Sem orientação, você erra. E erros custam tempo e oportunidade.',
  },
]
</script>

<template>
  <section class="section" id="problema">
    <div class="fade-in">
      <p class="section-label">O problema</p>
      <h2 class="section-title">
        Todo mundo enfrenta as mesmas<br />3 <em>barreiras na carreira</em>.
      </h2>
    </div>

    <div class="problem-grid">
      <div v-for="card in cards" :key="card.title" class="problem-card fade-in">
        <div class="problem-icon" aria-hidden="true">{{ card.icon }}</div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
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

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 56px;
}

.problem-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  transition: border-color 0.2s, transform 0.2s;
}

.problem-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.problem-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 18px;
}

.problem-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: -0.3px;
}

.problem-card p {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.65;
  font-weight: 300;
}

@media (max-width: 768px) {
  .problem-grid {
    grid-template-columns: 1fr;
  }
}
</style>
