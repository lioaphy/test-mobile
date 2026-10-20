<script setup>
defineProps({ label: { type: String, required: true }, value: { type: [String, Number], required: true }, detail: String, trend: String, primary: Boolean })
defineEmits(['click'])
</script>
<template>
  <button class="metric-card" :class="{ 'primary-metric': primary }" @click="$emit('click')"><div class="metric-heading"><span>{{ label }}</span><slot name="icon" /></div><strong>{{ value }}</strong><div v-if="detail || trend" class="metric-foot"><span>{{ detail }}</span><b v-if="trend">{{ trend }}</b><span v-if="trend" class="trend">↗</span><slot name="foot" /></div><slot /></button>
</template>
