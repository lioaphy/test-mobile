<script setup>
import { ArrowLeft, CheckCircle2 } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const shortcuts = ['入库登记', '出库拣货', '扫码盘点', '库存查询']
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">PERSONALIZE</span>
      <h1>快捷操作设置</h1>
    </div>
  </section>
  <p class="settings-hint">调整工作台上最常用的操作，方便快速开始作业。</p>
  <div class="shortcut-settings"><label v-for="item in shortcuts" :key="item"><span>{{ item }}</span><input
        type="checkbox" checked /></label></div><button class="primary-button" @click="router.push('/')">
    <CheckCircle2 :size="18" /> 保存设置
  </button>
</template>
