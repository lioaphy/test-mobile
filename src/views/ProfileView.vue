<script setup>
import { ArrowLeft, ChevronRight, Palette, Settings2, UserRound } from '@lucide/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <section class="page-header"><button class="back-button" aria-label="返回工作台" @click="router.push('/')">
      <ArrowLeft :size="19" />
    </button>
    <div><span class="section-kicker">ACCOUNT</span>
      <h1>个人中心</h1>
    </div>
  </section>
  <div class="profile-card">
    <div class="profile-avatar">林</div>
    <div><strong>林晓宁</strong>
      <p>仓库主管 · 华东中心仓</p>
    </div>
    <ChevronRight :size="17" />
  </div>
  <div class="settings-list"><button @click="router.push('/settings/shortcuts')">
      <Settings2 :size="18" /><span>工作台设置</span>
      <ChevronRight :size="16" />
    </button><button @click="router.push('/')">
      <Palette :size="18" /><span>主题与外观</span><small>返回工作台后从底部主题入口调整</small>
      <ChevronRight :size="16" />
    </button><button @click="router.push('/login')">
      <UserRound :size="18" /><span>切换账号</span>
      <ChevronRight :size="16" />
    </button></div>
</template>
