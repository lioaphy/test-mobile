<script setup>
import { ref } from 'vue'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Warehouse } from '@lucide/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const remember = ref(true)
const showPassword = ref(false)
const error = ref('')

function login() {
  if (!username.value.trim() || !password.value.trim()) {
    error.value = '请输入账号和密码'
    return
  }
  error.value = ''
  router.push('/')
}
</script>

<template>
  <div class="login-page">
    <header class="login-header">
      <span class="login-mark"><Warehouse :size="22" /></span>
      <span class="login-product">NORTHSTAR OPS</span>
    </header>

    <main class="login-panel">
      <div class="login-heading">
        <h1>欢迎回来</h1>
        <p>登录后继续处理今天的仓库任务。</p>
      </div>

      <form class="login-form" @submit.prevent="login">
        <label>
          <span>工作账号</span>
          <input v-model="username" type="text" autocomplete="username" placeholder="请输入账号" />
        </label>
        <label>
          <span>登录密码</span>
          <span class="password-field">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="请输入密码" />
            <button type="button" :aria-label="showPassword ? '隐藏密码' : '显示密码'" @click="showPassword = !showPassword"><EyeOff v-if="showPassword" :size="17" /><Eye v-else :size="17" /></button>
          </span>
        </label>
        <div class="login-options">
          <label class="remember-option"><input v-model="remember" type="checkbox" /><span>记住登录状态</span></label>
          <button type="button" class="forgot-button">忘记密码？</button>
        </div>
        <p v-if="error" class="login-error">{{ error }}</p>
        <button class="login-button" type="submit">登录 <ArrowRight :size="18" /></button>
      </form>

      <div class="demo-account"><LockKeyhole :size="15" /><span>演示账号 <b>operator</b>，密码任意填写</span></div>
    </main>

    <footer class="login-footer">安全工作空间 · NORTHSTAR OPS</footer>
  </div>
</template>
