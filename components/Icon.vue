<template>
  <span
    :style="{
      display: 'inline-flex',
      width: size + 'px',
      height: size + 'px',
      color: color,
      flexShrink: 0,
    }"
    v-html="svgMarkup"
  />
</template>

<script setup>
import { computed } from 'vue'
import { icons } from '~/data/icons'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 24 },
  color: { type: String, default: 'currentColor' },
})

const svgMarkup = computed(() => {
  const icon = icons[props.name]
  if (!icon) return ''

  const fill = icon.fill || 'currentColor'
  const stroke = icon.stroke || 'none'
  const strokeWidth = icon.strokeWidth || ''
  const strokeLinecap = icon.strokeLinecap || ''
  const strokeLinejoin = icon.strokeLinejoin || ''

  let attrs = `viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}"`
  if (strokeWidth) attrs += ` stroke-width="${strokeWidth}"`
  if (strokeLinecap) attrs += ` stroke-linecap="${strokeLinecap}"`
  if (strokeLinejoin) attrs += ` stroke-linejoin="${strokeLinejoin}"`

  return `<svg ${attrs} style="width:100%;height:100%">${icon.content}</svg>`
})
</script>
