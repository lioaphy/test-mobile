<script setup>
import { ArrowLeft } from '@lucide/vue'
defineProps({ eyebrow: String, title: { type: String, required: true } })
defineEmits(['back'])
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回" @click="$emit('back')"><ArrowLeft :size="19" /></button><div><span v-if="eyebrow" class="section-kicker">{{ eyebrow }}</span><h1>{{ title }}</h1></div><slot name="actions" /></section>
</template>
