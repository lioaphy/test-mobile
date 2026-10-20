<script setup>
import { useRouter } from 'vue-router'
import { ArrowDownToLine, ArrowUpFromLine, Bell, ChevronRight, CircleHelp, Ellipsis, LayoutDashboard, Package, ScanLine, Settings2, SlidersHorizontal, Sparkles, Warehouse } from '@lucide/vue'
import { ActionCard, ActivityList, MetricCard, StatusBanner } from '../components'

const router = useRouter()
const records = [
  { type: 'in', title: '入库验收 · 电子配件', detail: 'IN-240924-018 · 3 个品项', time: '10:42', status: '已完成' },
  { type: 'out', title: '出库发货 · 华东门店', detail: 'OUT-240924-031 · 12 个品项', time: '09:18', status: '待复核' },
  { type: 'in', title: '采购到货 · 包装材料', detail: 'IN-240924-017 · 8 个品项', time: '昨天', status: '已完成' },
]
function go(name) { router.push({ name }) }
</script>

<template>
  <header class="topbar">
    <div class="brand-lockup">
      <div class="brand-mark">
        <Warehouse :size="20" :stroke-width="2.2" />
      </div>
      <div><span class="eyebrow">NORTHSTAR OPS</span><strong>仓库作业台</strong></div>
    </div>
    <div class="topbar-actions"><button class="icon-button quiet" aria-label="帮助" @click="go('help')">
        <CircleHelp :size="19" />
      </button><button class="icon-button quiet notification-button" aria-label="通知" @click="go('notifications')">
        <Bell :size="19" /><i />
      </button><button class="avatar" aria-label="个人中心" @click="go('profile')">林</button></div>
  </header>
  <section class="welcome-row">
    <div>
      <p class="date-label">周二 · 9 月 24 日</p>
      <h1>早上好，林主管 <span>✦</span></h1>
      <p class="subtle">今天有 <b>8</b> 项任务等待处理，仓库运转正常。</p>
    </div><button class="more-button" aria-label="更多操作" @click="go('quickMenu')">
      <Ellipsis :size="22" />
    </button>
  </section>
  <StatusBanner title="仓库状态良好" description="库存准确率 98.6% · 最后同步 2 分钟前" @click="go('warehouseStatus')"><template #icon>
      <Sparkles :size="19" />
    </template><template #arrow>
      <ChevronRight :size="18" class="banner-arrow" />
    </template></StatusBanner>
  <section class="metric-grid" aria-label="库存概览">
    <MetricCard label="库存总量" value="24,860" detail="较上周" trend="+6.8%" primary @click="go('inventoryMetric')"><template
        #icon>
        <Package :size="17" />
      </template></MetricCard>
    <MetricCard label="待处理" value="12" detail="入库 5 · 出库 7" @click="go('pendingMetric')"><template #icon><span
          class="dot warning" /></template></MetricCard>
    <MetricCard label="库位利用率" value="76%" @click="go('utilizationMetric')"><template #icon>
        <SlidersHorizontal :size="16" />
      </template>
      <div class="progress-track"><span style="width: 76%" /></div>
    </MetricCard>
  </section>
  <section class="section-block action-section">
    <div class="section-heading">
      <div><span class="section-kicker">QUICK ACTIONS</span>
        <h2>快捷操作</h2>
      </div><button class="text-button" @click="go('shortcutSettings')">
        <Settings2 :size="15" /> 编辑
      </button>
    </div>
    <div class="action-grid">
      <ActionCard title="入库登记" description="登记到货商品" variant="inbound" @click="go('inbound')"><template #icon>
          <ArrowDownToLine :size="21" />
        </template><template #arrow>
          <ChevronRight :size="17" />
        </template>
      </ActionCard>
      <ActionCard title="出库拣货" description="创建发货单" variant="outbound" @click="go('outbound')"><template #icon>
          <ArrowUpFromLine :size="21" />
        </template><template #arrow>
          <ChevronRight :size="17" />
        </template>
      </ActionCard>
      <ActionCard title="扫码盘点" description="快速核对库存" variant="scan" @click="go('scan')"><template #icon>
          <ScanLine :size="21" />
        </template><template #arrow>
          <ChevronRight :size="17" />
        </template></ActionCard>
    </div>
  </section>
  <section class="section-block recent-section">
    <div class="section-heading">
      <div><span class="section-kicker">ACTIVITY LOG</span>
        <h2>最近动态</h2>
      </div><button class="text-button" @click="go('documents')">查看全部
        <ChevronRight :size="15" />
      </button>
    </div>
    <ActivityList :records="records" @select="go('documents')" />
  </section>
  <button class="tip-card" @click="go('capacityAlert')"><span class="tip-spark">✦</span>
    <div><strong>今日提示</strong>
      <p>3 号库位即将达到容量上限，建议优先安排出库。</p>
    </div>
    <ChevronRight :size="17" />
  </button>
</template>
