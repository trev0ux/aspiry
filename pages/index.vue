<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'

useFadeIn()

useHead({
  title: 'Aspiry — Sua marca pessoal, finalmente no lugar certo',
})
</script>

<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
    <AppFooter />
  </div>
</template>
