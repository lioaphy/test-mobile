<script setup>
import { ArrowLeft, ArrowUpFromLine, ChevronRight, MapPinned, Package } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <section class="page-header"><button class="back-button" aria-label="返回" @click="router.push('/')">
            <ArrowLeft :size="19" />
        </button>
        <div><span class="section-kicker">CAPACITY ALERT</span>
            <h1>库位容量提醒</h1>
        </div>
    </section>
    <div class="capacity-hero">
        <div class="capacity-gauge"><span>86</span><small>%</small></div>
        <div><strong>3 号库位</strong>
            <p>即将达到容量上限</p><span>预计 2 天后达到 95%，建议尽快处理</span>
        </div>
    </div>
    <div class="capacity-stats">
        <div><span>当前占用</span><strong>86%</strong></div>
        <div><span>可用空间</span><strong>14%</strong></div>
        <div><span>关联商品</span><strong>24</strong></div>
    </div>
    <div class="capacity-risk"><span class="risk-icon">!</span>
        <div><strong>空间使用偏高</strong>
            <p>近 7 天入库量持续高于出库量，优先处理高周转商品可释放更多空间。</p>
        </div>
    </div>
    <div class="capacity-actions"><button @click="router.push('/outbound')">
            <ArrowUpFromLine :size="19" /><span><strong>安排出库</strong><small>优先处理高周转商品</small></span>
            <ChevronRight :size="16" />
        </button><button @click="router.push('/inventory')">
            <Package :size="19" /><span><strong>查看库位库存</strong><small>查看 3 号库位的全部商品</small></span>
            <ChevronRight :size="16" />
        </button><button @click="router.push('/inventory')">
            <MapPinned :size="19" /><span><strong>转移库位</strong><small>将商品转移至 5 号空闲库位</small></span>
            <ChevronRight :size="16" />
        </button></div>
</template>
