<script setup>
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine, CircleHelp, ScanLine, ChevronRight } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
            <ArrowLeft :size="19" />
        </button>
        <div><span class="section-kicker">SUPPORT CENTER</span>
            <h1>帮助中心</h1>
        </div>
    </section>
    <div class="help-hero">
        <div class="help-icon">
            <CircleHelp :size="25" />
        </div>
        <div><strong>需要一点帮助？</strong>
            <p>查找仓库作业与系统使用指南</p>
        </div>
    </div>
    <div class="help-list"><button @click="router.push('/inbound')">
            <ArrowDownToLine :size="18" /><span>如何完成入库登记</span>
            <ChevronRight :size="16" />
        </button><button @click="router.push('/outbound')">
            <ArrowUpFromLine :size="18" /><span>如何创建出库单</span>
            <ChevronRight :size="16" />
        </button><button @click="router.push('/scan')">
            <ScanLine :size="18" /><span>扫码盘点常见问题</span>
            <ChevronRight :size="16" />
        </button></div><button class="secondary-button" @click="router.push('/')">联系运营支持</button>
</template>
