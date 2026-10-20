<script setup>
defineProps({ title: { type: String, required: true }, description: { type: String, required: true }, variant: String })
defineEmits(['click'])
</script>
<template>
  <button class="action-card" :class="variant" @click="$emit('click')"><span class="action-icon"><slot name="icon" /></span><strong>{{ title }}</strong><small>{{ description }}</small><slot name="arrow" /></button>
</template>
