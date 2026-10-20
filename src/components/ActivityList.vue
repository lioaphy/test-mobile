<script setup>
import { ArrowDownToLine, ArrowUpFromLine } from '@lucide/vue'
defineProps({ records: { type: Array, required: true } })
defineEmits(['select'])
</script>
<template>
  <div class="record-list"><button v-for="record in records" :key="record.detail" class="record-row" @click="$emit('select', record)"><span class="record-icon" :class="record.type"><ArrowDownToLine v-if="record.type === 'in'" :size="17" /><ArrowUpFromLine v-else :size="17" /></span><span class="record-content"><strong>{{ record.title }}</strong><small>{{ record.detail }}</small></span><span class="record-meta"><time>{{ record.time }}</time><em :class="{ review: record.status === '待复核' }">{{ record.status }}</em></span></button></div>
</template>
