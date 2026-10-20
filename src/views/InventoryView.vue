<script setup>
import { ArrowLeft, ChevronRight, Filter, Package, Plus, Search } from '@lucide/vue'
import { useRouter } from 'vue-router'
import { PageHeader } from '../components'
const router = useRouter()
const filters = ['全部', '库存不足', '库存充足']
const items = [
    { name: '无线键盘 K2', sku: 'SKU-10482', stock: 286, location: 'A-03-12', state: '充足' },
    { name: 'Type-C 编织线', sku: 'SKU-09231', stock: 18, location: 'B-01-08', state: '库存不足' },
    { name: '便携式支架', sku: 'SKU-08912', stock: 94, location: 'A-06-04', state: '充足' },
    { name: '桌面充电器 65W', sku: 'SKU-07642', stock: 7, location: 'C-02-15', state: '库存不足' },
]
</script>
<template>
    <PageHeader eyebrow="STOCK CONTROL" title="库存管理" @back="router.push('/')"><template #actions><button
                class="icon-button" aria-label="筛选">
                <Filter :size="18" />
            </button></template>
    </PageHeader>
    <div class="search-box">
        <Search :size="17" /><input placeholder="搜索商品、SKU 或库位" /><button aria-label="新增商品">
            <Plus :size="18" />
        </button>
    </div>
    <div class="filter-tabs"><button v-for="filter in filters" :key="filter" :class="{ selected: filter === '全部' }">{{
            filter }}</button></div>
    <section class="inventory-summary">
        <div><span>在库商品</span><strong>1,286</strong></div>
        <div><span>库存预警</span><strong class="orange">18</strong></div>
        <div><span>空闲库位</span><strong>42</strong></div>
    </section>
    <div class="list-title">
        <h2>商品列表</h2><span>共 1,286 项</span>
    </div>
    <div class="inventory-list"><button v-for="item in items" :key="item.sku" class="inventory-row"
            @click="router.push({ name: 'inventoryItem', params: { sku: item.sku } })"><span class="product-thumb">
                <Package :size="18" />
            </span><span class="product-info"><strong>{{ item.name }}</strong><small>{{ item.sku }} · {{ item.location
                    }}</small></span><span class="product-stock"><b :class="{ low: item.state === '库存不足' }">{{
                    item.stock
                    }}</b><small>{{ item.state }}</small></span>
            <ChevronRight :size="16" />
        </button></div>
</template>
