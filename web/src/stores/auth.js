import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const user = ref({ id: 1, username: 'admin', role: 'admin' })

  const isAuthenticated = computed(() => true)
  const isAdmin = computed(() => true)

  function setAuth(t, u) {
    token.value = t
    user.value = u
  }

  function clearAuth() {
    token.value = ''
    user.value = { id: 1, username: 'admin', role: 'admin' }
  }

  async function login(username, password) {
    return { token: '', user: user.value }
  }

  async function register(payload) {
    return { token: '', user: user.value }
  }

  async function getFnOSIdentity() {
    return { fnos_username: 'admin', is_admin: true }
  }

  async function fnosLogin() {
    return { binding_required: false, token: '', user: user.value }
  }

  async function bindFnOS(mode, username = '', password = '') {
    return { token: '', user: user.value }
  }

  async function logout() {}

  return {
    token,
    user,
    isAuthenticated,
    isAdmin,
    login,
    register,
    fnosLogin,
    getFnOSIdentity,
    bindFnOS,
    logout,
    setAuth,
    clearAuth
  }
})
