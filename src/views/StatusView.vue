<script setup>
import { ArrowLeft, CheckCircle2, Sparkles } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">WAREHOUSE HEALTH</span>
      <h1>仓库状态</h1>
    </div><button class="icon-button" aria-label="刷新状态">
      <Sparkles :size="18" />
    </button>
  </section>
  <div class="health-hero">
    <div class="health-ring">98.6<small>%</small></div>
    <div><strong>运行状态良好</strong>
      <p>所有关键指标均在正常范围内</p><span>最近同步：2 分钟前</span>
    </div>
  </div>
  <div class="health-list">
    <div><span class="health-indicator good" /><span><strong>库存准确率</strong><small>盘点与系统记录一致性</small></span><b>98.6%</b>
    </div>
    <div><span class="health-indicator good" /><span><strong>设备连接</strong><small>扫码器、打印机和传感器</small></span><b>正常</b>
    </div>
    <div><span class="health-indicator good" /><span><strong>数据同步</strong><small>ERP 与仓库系统同步状态</small></span><b>已同步</b>
    </div>
  </div><button class="secondary-button">
    <CheckCircle2 :size="18" /> 生成状态报告
  </button>
</template>
