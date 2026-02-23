<script setup lang="ts">
interface Testimonial {
  quote: string; initials: string; bg: string; name: string; role: string; result: string
}
const testimonials: Testimonial[] = [
  {
    quote: 'Fiz upload do CV e em minutos tinha um LinkedIn que eu nunca teria escrito sozinha. Em duas semanas recebi três convites pra entrevista. Juro que funciona.',
    initials: 'MR', bg: '#FF6B6B',
    name: 'Marina Rocha', role: 'UX Designer Jr.', result: 'Contratada em 3 semanas 🎉',
  },
  {
    quote: 'Sempre soube que era bom no que fazia, mas nunca conseguia explicar isso pra recrutador entender. A Aspiry fez isso por mim. Isso é literalmente o que eu precisava.',
    initials: 'JP', bg: '#A29BFE',
    name: 'João Pedro Lima', role: 'Dev Front-end', result: 'Primeiro emprego CLT ✅',
  },
  {
    quote: 'Depois de conseguir o emprego, usei a Fase 2 pra montar portfólio freelancer. Hoje faturo o dobro do salário em projetos. Não é exagero.',
    initials: 'AC', bg: '#55EFC4',
    name: 'Ana Clara Ferreira', role: 'Designer autônoma', result: 'R$ 8k/mês em freelas 💸',
  },
]
</script>

<template>
  <section class="t-section" id="depoimentos">
    <div class="t-inner">
      <div class="t-header fade-in">
        <p class="eyebrow">Resultados reais</p>
        <h2 class="t-title">Quem recebeu orientação<br /><em>certa, voou.</em></h2>
      </div>
      <div class="t-grid">
        <div v-for="t in testimonials" :key="t.name" class="t-card fade-in">
          <div class="t-stars" aria-label="5 estrelas">★★★★★</div>
          <blockquote class="t-quote">"{{ t.quote }}"</blockquote>
          <div class="t-author">
            <div class="t-avatar" :style="{ background: t.bg }">{{ t.initials }}</div>
            <div class="t-info">
              <div class="t-name">{{ t.name }}</div>
              <div class="t-role">{{ t.role }}</div>
            </div>
            <div class="t-result">{{ t.result }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.t-section { padding: 100px 32px; background: var(--bg); }
.t-inner { max-width: 1120px; margin: 0 auto; }
.t-header { margin-bottom: 48px; }
.eyebrow { font-size: 12px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent-2); margin-bottom: 14px; }
.t-title { font-family: 'Cabinet Grotesk'; font-size: clamp(30px, 4vw, 50px); letter-spacing: -1.2px; line-height: 1.1; color: var(--ink); }
.t-title em { font-style: italic; color: var(--accent-2); }
.t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.t-card {
  background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 16px;
  padding: 26px; display: flex; flex-direction: column; gap: 14px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.t-card:hover { border-color: rgba(0,0,0,0.1); box-shadow: var(--shadow-md); transform: translateY(-2px); }
.t-stars { color: #F59E0B; font-size: 13px; letter-spacing: 1px; }
.t-quote { font-size: 14px; line-height: 1.7; color: var(--ink-soft); font-style: italic; font-weight: 300; flex: 1; }
.t-author { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid var(--border); }
.t-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #fff; flex-shrink: 0;
}
.t-info { flex: 1; min-width: 0; }
.t-name { font-size: 13px; font-weight: 600; color: var(--ink); }
.t-role { font-size: 11.5px; color: var(--ink-muted); }
.t-result { font-size: 11px; font-weight: 500; color: var(--accent-2); background: var(--accent-green-bg); padding: 3px 9px; border-radius: 50px; white-space: nowrap; flex-shrink: 0; }
@media (max-width: 768px) { .t-grid { grid-template-columns: 1fr; } .t-section { padding: 72px 20px; } }
</style>
