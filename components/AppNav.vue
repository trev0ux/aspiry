<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const menuOpen = ref(false)
function onScroll() { scrolled.value = window.scrollY > 8 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['nav-header', { scrolled }]">
    <nav class="nav-inner">
      <a href="#" class="nav-logo" aria-label="Aspiry home">
        <span class="logo-text">✨ Aspiry</span><span class="logo-dot"></span>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="#como-funciona">Como funciona</a></li>
        <li><a href="#entregaveis">O que você recebe</a></li>
        <li><a href="#planos">Planos</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
      </ul>
      <div class="nav-actions">
        <a href="#" class="nav-login">Entrar</a>
        <a href="#comecar" class="nav-cta">Começa grátis →</a>
      </div>
      <button class="nav-mobile-btn" :aria-expanded="menuOpen" aria-label="Menu" @click="menuOpen = !menuOpen">
        <span/><span/><span/>
      </button>
    </nav>
    <div v-if="menuOpen" class="nav-mobile-menu">
      <a href="#como-funciona" @click="menuOpen = false">Como funciona</a>
      <a href="#entregaveis" @click="menuOpen = false">O que você recebe</a>
      <a href="#planos" @click="menuOpen = false">Planos</a>
      <a href="#depoimentos" @click="menuOpen = false">Depoimentos</a>
      <a href="#comecar" class="mobile-cta" @click="menuOpen = false">Começa grátis →</a>
    </div>
  </header>
</template>

<style scoped>
.nav-header {
  position: fixed; inset: 0 0 auto 0; z-index: 200;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.nav-header.scrolled { border-bottom-color: var(--border); box-shadow: 0 1px 0 var(--border); }
.nav-inner {
  max-width: 1120px; margin: 0 auto; padding: 0 32px; height: 58px;
  display: grid; grid-template-columns: 180px 1fr 200px; align-items: center;
}
.nav-logo { text-decoration: none; display: flex; align-items: baseline; gap: 1px; width: fit-content; }
.logo-text { font-family: 'Instrument Serif', serif; font-size: 21px; letter-spacing: -0.5px; color: var(--ink); font-weight: 700; }
.logo-dot  { font-family: 'Instrument Serif', serif; font-size: 21px; color: var(--accent-2); }
.nav-links { display: flex; align-items: center; justify-content: center; gap: 2px; list-style: none; }
.nav-links a {
  font-size: 13.5px; font-weight: 400; color: var(--ink-soft);
  text-decoration: none; padding: 6px 12px; border-radius: 8px;
  transition: color 0.15s, background 0.15s; white-space: nowrap;
}
.nav-links a:hover { color: var(--ink); background: var(--bg-subtle); }
.nav-actions { display: flex; align-items: center; gap: 6px; justify-content: flex-end; }
.nav-login { font-size: 13.5px; color: var(--ink-soft); text-decoration: none; padding: 7px 12px; border-radius: 8px; transition: color 0.15s, background 0.15s; }
.nav-login:hover { color: var(--ink); background: var(--bg-subtle); }
.nav-cta {
  font-size: 13.5px; font-weight: 600; color: #fff;
  background: var(--accent-2); text-decoration: none;
  padding: 7px 16px; border-radius: 8px;
  transition: opacity 0.15s, transform 0.15s;
  box-shadow: 0 2px 8px rgba(46,107,79,0.3);
  white-space: nowrap;
}
.nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }
.nav-mobile-btn { display: none; flex-direction: column; gap: 4.5px; background: none; border: none; cursor: pointer; padding: 6px; margin-left: auto; grid-column: 3; justify-self: end; }
.nav-mobile-btn span { display: block; width: 20px; height: 1.5px; background: var(--ink); border-radius: 2px; }
.nav-mobile-menu {
  display: flex; flex-direction: column;
  padding: 12px 20px 20px; gap: 2px;
  border-top: 1px solid var(--border);
  animation: slideDown 0.2s ease;
}
.nav-mobile-menu a { font-size: 15px; color: var(--ink-soft); text-decoration: none; padding: 10px 12px; border-radius: 8px; transition: background 0.15s, color 0.15s; }
.nav-mobile-menu a:hover { background: var(--bg-subtle); color: var(--ink); }
.nav-mobile-menu .mobile-cta { color: var(--accent-2); font-weight: 600; margin-top: 8px; }
@keyframes slideDown { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
@media (max-width: 860px) {
  .nav-inner { grid-template-columns: 1fr auto; padding: 0 20px; }
  .nav-links, .nav-actions { display: none; }
  .nav-mobile-btn { display: flex; grid-column: 2; }
}
</style>
