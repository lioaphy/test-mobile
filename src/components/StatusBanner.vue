<script setup>
defineProps({ title: { type: String, required: true }, description: { type: String, required: true } })
defineEmits(['click'])
</script>
<template>
  <button class="status-banner" @click="$emit('click')"><span class="status-icon"><slot name="icon" /></span><span class="status-copy"><strong>{{ title }}</strong><span>{{ description }}</span></span><slot name="arrow" /></button>
</template>
