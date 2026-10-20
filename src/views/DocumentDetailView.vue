<script setup>
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine } from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const isOutbound = route.params.type === 'out'
</script>
<template>
    <section class="page-header"><button class="back-button" aria-label="返回单据中心" @click="router.push('/documents')">
            <ArrowLeft :size="19" />
        </button>
        <div><span class="section-kicker">DOCUMENT DETAIL</span>
            <h1>单据详情</h1>
        </div>
    </section>
    <div class="detail-hero"><span class="record-icon large" :class="{ out: isOutbound }">
            <ArrowDownToLine v-if="!isOutbound" :size="25" />
            <ArrowUpFromLine v-else :size="25" />
        </span>
        <div><strong>{{ isOutbound ? '出库发货 · 华东门店' : '入库验收 · 电子配件' }}</strong>
            <p>{{ route.params.id }}</p>
        </div><em :class="{ review: isOutbound }">{{ isOutbound ? '待复核' : '已完成' }}</em>
    </div>
    <div class="timeline">
        <div><i /><span><strong>单据已创建</strong><small>系统自动生成</small></span></div>
        <div><i /><span><strong>{{ isOutbound ? '等待主管复核' : '作业已完成' }}</strong><small>相关商品数量已更新至库存</small></span></div>
    </div><button class="primary-button" @click="router.push('/documents')">返回单据中心</button>
</template>
