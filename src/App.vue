<script setup>
import { computed, ref } from 'vue'
import { LayoutDashboard, Package, Palette, Truck } from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const showThemePanel = ref(false)
const savedTheme = localStorage.getItem('northstar-theme') || 'ocean'
const appearanceMode = ref(localStorage.getItem('northstar-appearance') || (savedTheme === 'midnight' ? 'dark' : 'light'))
const accentTheme = ref(localStorage.getItem('northstar-accent') || (savedTheme === 'midnight' ? 'ocean' : savedTheme))
const accentThemes = [{ id: 'ocean', label: '海盐蓝', color: '#147d92' }, { id: 'forest', label: '苔原绿', color: '#507c61' }, { id: 'coral', label: '珊瑚橙', color: '#d16a4d' }]
const appearanceModes = [{ id: 'light', label: '亮色主题', description: '清爽明亮的工作界面', icon: '☼' }, { id: 'dark', label: '黑色主题', description: '降低亮度，适合夜间作业', icon: '◐' }]
const activeTheme = computed(() => appearanceMode.value === 'dark' ? 'midnight' : accentTheme.value)
function setAppearance(mode) { appearanceMode.value = mode; localStorage.setItem('northstar-appearance', mode) }
function setAccent(themeId) { accentTheme.value = themeId; localStorage.setItem('northstar-accent', themeId) }
</script>

<template>
  <div class="app-shell" :data-theme="activeTheme" :data-accent="accentTheme" :data-appearance="appearanceMode">
    <main class="app-main">
      <RouterView />
    </main>
    <nav v-if="route.name !== 'login'" class="bottom-nav" aria-label="主导航"><button
        :class="{ active: route.name === 'home' }" @click="router.push('/')">
        <LayoutDashboard :size="19" /><span>工作台</span>
      </button><button :class="{ active: route.name === 'inventory' }" @click="router.push('/inventory')">
        <Package :size="19" /><span>库存</span>
      </button><button :class="{ active: route.name === 'documents' }" @click="router.push('/documents')">
        <Truck :size="19" /><span>单据</span>
      </button><button :class="{ active: showThemePanel }" @click="showThemePanel = !showThemePanel">
        <Palette :size="19" /><span>主题</span>
      </button></nav>
    <aside v-if="showThemePanel && route.name !== 'login'" class="theme-panel">
      <div class="panel-handle" />
      <div class="panel-title">
        <div><span class="section-kicker">PERSONALIZE</span>
          <h2>界面主题</h2>
        </div><button class="close-button" @click="showThemePanel = false">×</button>
      </div>
      <p class="panel-copy">分别设置界面明暗和品牌主色，组合会自动保存。</p><span class="theme-group-label">界面外观</span>
      <div class="theme-options appearance-options"><button v-for="mode in appearanceModes" :key="mode.id"
          class="theme-option appearance-option" :class="{ selected: appearanceMode === mode.id }"
          @click="setAppearance(mode.id)"><span class="appearance-icon">{{ mode.icon }}</span><span><strong>{{
              mode.label }}</strong><small>{{ mode.description }}</small></span><span v-if="appearanceMode === mode.id"
            class="check">✓</span></button></div><span class="theme-group-label">主色调</span>
      <div class="theme-options accent-options"><button v-for="theme in accentThemes" :key="theme.id"
          class="theme-option" :class="{ selected: accentTheme === theme.id }" @click="setAccent(theme.id)"><span
            class="theme-swatch" :style="{ background: theme.color }" /><span>{{ theme.label }}</span><span
            v-if="accentTheme === theme.id" class="check">✓</span></button></div>
    </aside>
  </div>
</template>
