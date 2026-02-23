import { onMounted, onUnmounted } from 'vue'

export function useFadeIn() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger sibling .fade-in cards within the same grid/list
            const parent = entry.target.parentElement
            if (parent) {
              const pending = Array.from(
                parent.querySelectorAll<HTMLElement>('.fade-in:not(.visible)'),
              )
              const idx = pending.indexOf(entry.target as HTMLElement)
              const delay = idx >= 0 ? idx * 70 : 0
              setTimeout(() => entry.target.classList.add('visible'), delay)
            } else {
              entry.target.classList.add('visible')
            }
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    requestAnimationFrame(() => {
      document.querySelectorAll('.fade-in').forEach((el) => observer?.observe(el))
    })
  })

  onUnmounted(() => observer?.disconnect())
}
