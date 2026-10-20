<script setup>
import { ArrowLeft, ScanLine } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">STOCKTAKE</span>
      <h1>扫码盘点</h1>
    </div>
  </section>
  <div class="scanner-view">
    <div class="scan-frame"><span /><i /><b /><em />
      <ScanLine :size="28" />
    </div><strong>将商品条码放入框内</strong>
    <p>扫描后会自动显示商品库存与库位</p>
  </div><button class="primary-button">
    <ScanLine :size="18" /> 开始扫码
  </button><button class="secondary-button" @click="router.push('/')">手动选择商品</button>
</template>
