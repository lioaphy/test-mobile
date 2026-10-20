<script setup>
import { ArrowLeft, CheckCircle2, ChevronRight, Package } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">INBOX</span>
      <h1>通知中心</h1>
    </div><button class="text-button">全部已读</button>
  </section>
  <div class="notification-list"><button class="notification-row unread"
      @click="router.push('/documents/out/OUT-240924-031')"><span
        class="notification-dot" /><span><strong>出库单需要复核</strong><small>OUT-240924-031 已完成拣货，请在今天 18:00
          前复核。</small><time>12 分钟前</time></span>
      <ChevronRight :size="16" />
    </button><button class="notification-row" @click="router.push('/inventory/SKU-09231')"><span
        class="notification-icon">
        <Package :size="16" />
      </span><span><strong>库存预警提醒</strong><small>Type-C 编织线库存仅剩 18 件，请及时补货。</small><time>1 小时前</time></span>
      <ChevronRight :size="16" />
    </button><button class="notification-row" @click="router.push('/warehouse-status')"><span class="notification-icon">
        <CheckCircle2 :size="16" />
      </span><span><strong>盘点任务已完成</strong><small>昨日 A 区盘点准确率为 99.2%。</small><time>昨天</time></span>
      <ChevronRight :size="16" />
    </button></div>
</template>
