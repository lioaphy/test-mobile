<script setup>
import { ArrowLeft, Package, Plus } from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const sku = route.params.sku
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回库存" @click="router.push('/inventory')"><ArrowLeft :size="19" /></button><div><span class="section-kicker">STOCK DETAIL</span><h1>商品详情</h1></div></section>
  <div class="detail-hero"><span class="product-thumb large"><Package :size="29" /></span><div><strong>{{ sku === 'SKU-09231' ? 'Type-C 编织线' : sku === 'SKU-07642' ? '桌面充电器 65W' : '无线键盘 K2' }}</strong><p>{{ sku }}</p></div><em>库存状态正常</em></div>
  <div class="detail-stats"><div><span>当前库存</span><strong>{{ sku === 'SKU-07642' ? 7 : sku === 'SKU-09231' ? 18 : 286 }}</strong></div><div><span>所在库位</span><strong>{{ sku === 'SKU-09231' ? 'B-01-08' : 'A-03-12' }}</strong></div><div><span>安全库存</span><strong>30</strong></div></div>
  <div class="detail-section"><h2>库存流水</h2><div class="mini-flow"><span>09-24 10:42</span><b>入库 +120</b><em>采购到货</em></div><div class="mini-flow"><span>09-22 15:08</span><b>出库 -34</b><em>华东门店</em></div></div><button class="primary-button" @click="router.push('/inbound')"><Plus :size="18" /> 新增库存操作</button>
</template>
