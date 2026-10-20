<script setup>
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine, ChevronRight, Filter, Plus } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const records = [
    { type: 'in', title: '入库验收 · 电子配件', detail: 'IN-240924-018 · 3 个品项', time: '10:42', status: '已完成' },
    { type: 'out', title: '出库发货 · 华东门店', detail: 'OUT-240924-031 · 12 个品项', time: '09:18', status: '待复核' },
    { type: 'in', title: '采购到货 · 包装材料', detail: 'IN-240924-017 · 8 个品项', time: '昨天', status: '已完成' },
]
</script>
<template>
    <section class="page-header"><button class="back-button" aria-label="返回" @click="router.push('/')">
            <ArrowLeft :size="19" />
        </button>
        <div><span class="section-kicker">DOCUMENT CENTER</span>
            <h1>单据中心</h1>
        </div><button class="icon-button" aria-label="筛选">
            <Filter :size="18" />
        </button>
    </section>
    <div class="filter-tabs document-tabs"><button class="selected">全部</button><button>入库单</button><button>出库单</button>
    </div>
    <div class="document-list"><button v-for="record in records" :key="record.detail" class="document-row"
            @click="router.push({ name: 'documentDetail', params: { type: record.type, id: record.detail } })"><span
                class="record-icon" :class="record.type">
                <ArrowDownToLine v-if="record.type === 'in'" :size="17" />
                <ArrowUpFromLine v-else :size="17" />
            </span><span class="record-content"><strong>{{ record.title }}</strong><small>{{ record.detail
                    }}</small></span><span class="record-meta"><time>{{ record.time }}</time><em
                    :class="{ review: record.status === '待复核' }">{{ record.status }}</em></span>
            <ChevronRight :size="16" class="row-arrow" />
        </button></div>
    <button class="primary-button" @click="router.push('/inbound')">
        <Plus :size="18" /> 新建单据
    </button>
</template>
