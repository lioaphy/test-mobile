<script setup>
import { ArrowLeft, ArrowDownToLine, ArrowUpFromLine, BarChart3, CheckCircle2, ChevronRight, MapPinned, Package, SlidersHorizontal } from '@lucide/vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ metric: { type: String, required: true } })
const router = useRouter()
const detail = computed(() => ({
  inventory: { eyebrow: 'INVENTORY OVERVIEW', title: '库存总量', value: '24,860', summary: '较上周增长 6.8%', icon: Package, accent: 'ocean' },
  pending: { eyebrow: 'TASK QUEUE', title: '待处理任务', value: '12', summary: '入库 5 项 · 出库 7 项', icon: CheckCircle2, accent: 'coral' },
  utilization: { eyebrow: 'LOCATION USAGE', title: '库位利用率', value: '76%', summary: '当前使用 76%，剩余可用空间 24%', icon: MapPinned, accent: 'forest' },
}[props.metric]))
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">{{ detail.eyebrow }}</span>
      <h1>{{ detail.title }}</h1>
    </div><button class="icon-button" aria-label="数据分析">
      <BarChart3 :size="18" />
    </button>
  </section>
  <div class="metric-detail-hero" :class="detail.accent">
    <component :is="detail.icon" :size="22" /><strong>{{ detail.value }}</strong>
    <p>{{ detail.summary }}</p>
  </div>
  <template v-if="metric === 'inventory'">
    <div class="detail-stats">
      <div><span>在库商品</span><strong>1,286</strong></div>
      <div><span>库存预警</span><strong>18</strong></div>
      <div><span>空闲库位</span><strong>42</strong></div>
    </div>
    <div class="detail-section">
      <h2>库存趋势</h2>
      <div class="trend-panel"><span>本周库存总量</span><strong>+6.8%</strong><small>相比上周持续增长</small></div>
    </div><button class="primary-button" @click="router.push('/inventory')">
      <Package :size="18" /> 查看库存明细
    </button>
  </template>
  <template v-else-if="metric === 'pending'">
    <div class="detail-stats">
      <div><span>待入库</span><strong>5</strong></div>
      <div><span>待出库</span><strong>7</strong></div>
      <div><span>逾期任务</span><strong>0</strong></div>
    </div>
    <div class="pending-list"><button @click="router.push('/inbound')">
        <ArrowDownToLine :size="18" /><span><strong>入库验收任务</strong><small>5 项商品待登记</small></span>
        <ChevronRight :size="16" />
      </button><button @click="router.push('/outbound')">
        <ArrowUpFromLine :size="18" /><span><strong>出库拣货任务</strong><small>7 项商品待发货</small></span>
        <ChevronRight :size="16" />
      </button></div>
  </template>
  <template v-else>
    <div class="detail-stats">
      <div><span>已使用</span><strong>76%</strong></div>
      <div><span>可用空间</span><strong>24%</strong></div>
      <div><span>高负载库位</span><strong>3</strong></div>
    </div>
    <div class="utilization-panel">
      <div class="utilization-row"><span>1 号库</span><i><b style="width: 68%" /></i><strong>68%</strong></div>
      <div class="utilization-row"><span>2 号库</span><i><b style="width: 74%" /></i><strong>74%</strong></div>
      <div class="utilization-row warning"><span>3 号库</span><i><b style="width: 86%" /></i><strong>86%</strong></div>
    </div><button class="primary-button" @click="router.push('/capacity-alert')">
      <MapPinned :size="18" /> 查看容量提醒
    </button>
  </template>
</template>
