<script setup>
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine, CheckCircle2, ChevronRight, ScanLine } from '@lucide/vue'
import { useRouter } from 'vue-router'
const props = defineProps({ mode: { type: String, default: 'inbound' } })
const router = useRouter()
const isInbound = props.mode === 'inbound'
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回" @click="router.back()">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">{{ isInbound ? 'RECEIVING' : 'FULFILLMENT' }}</span>
      <h1>{{ isInbound ? '入库登记' : '出库拣货' }}</h1>
    </div>
  </section>
  <div class="form-intro">
    <div class="large-form-icon" :class="props.mode">
      <ArrowDownToLine v-if="isInbound" :size="25" />
      <ArrowUpFromLine v-else :size="25" />
    </div>
    <div><strong>{{ isInbound ? '登记到货商品' : '创建发货任务' }}</strong>
      <p>{{ isInbound ? '录入供应商与到货明细，完成后生成入库单。' : '选择出库商品与收货方，生成拣货任务。' }}</p>
    </div>
  </div>
  <div class="form-card"><label>{{ isInbound ? '供应商' : '收货门店' }}<select>
        <option>{{ isInbound ? '深圳市星河电子有限公司' : '华东旗舰店 · 杭州' }}</option>
        <option>上海市远望贸易有限公司</option>
      </select></label><label>关联单号<input
        :placeholder="isInbound ? '采购订单号（选填）' : '销售订单号（选填）'" /></label><label>备注<textarea rows="3"
        placeholder="填写本次作业备注" /></label></div>
  <div class="scan-prompt">
    <ScanLine :size="20" />
    <div><strong>扫码添加商品</strong><span>使用设备摄像头扫描条码</span></div>
    <ChevronRight :size="17" />
  </div>
  <button class="primary-button" @click="router.push('/')">
    <CheckCircle2 :size="18" /> 保存并继续
  </button>
</template>
