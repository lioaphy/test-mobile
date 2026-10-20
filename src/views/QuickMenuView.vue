<script setup>
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine, ClipboardList, MapPinned, Package, ScanLine, Settings2 } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const actions = [
  { title: '快速入库', description: '登记到货商品', icon: ArrowDownToLine, path: '/inbound', tone: 'inbound' },
  { title: '快速出库', description: '创建发货单', icon: ArrowUpFromLine, path: '/outbound', tone: 'outbound' },
  { title: '扫码盘点', description: '快速核对库存', icon: ScanLine, path: '/scan', tone: 'scan' },
  { title: '库存查询', description: '搜索商品与库位', icon: Package, path: '/inventory', tone: 'inventory' },
  { title: '作业记录', description: '查看最近动态', icon: ClipboardList, path: '/documents', tone: 'records' },
  { title: '库位提醒', description: '处理容量预警', icon: MapPinned, path: '/capacity-alert', tone: 'location' },
]
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">SHORTCUTS</span>
      <h1>更多操作</h1>
    </div><button class="icon-button" aria-label="快捷操作设置" @click="router.push('/settings/shortcuts')">
      <Settings2 :size="18" />
    </button>
  </section>
  <p class="quick-menu-intro">把常用作业集中在这里，选择一个操作即可开始。</p>
  <div class="quick-menu-grid"><button v-for="action in actions" :key="action.title" class="quick-menu-item"
      :class="action.tone" @click="router.push(action.path)"><span class="quick-menu-icon">
        <component :is="action.icon" :size="22" />
      </span><strong>{{ action.title }}</strong><small>{{ action.description }}</small></button></div>
</template>
