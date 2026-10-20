import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import InventoryView from './views/InventoryView.vue'
import DocumentsView from './views/DocumentsView.vue'
import OperationView from './views/OperationView.vue'
import ScanView from './views/ScanView.vue'
import StatusView from './views/StatusView.vue'
import CapacityView from './views/CapacityView.vue'
import ProfileView from './views/ProfileView.vue'
import ItemDetailView from './views/ItemDetailView.vue'
import DocumentDetailView from './views/DocumentDetailView.vue'
import NotificationsView from './views/NotificationsView.vue'
import HelpView from './views/HelpView.vue'
import ShortcutSettingsView from './views/ShortcutSettingsView.vue'
import MetricDetailView from './views/MetricDetailView.vue'
import QuickMenuView from './views/QuickMenuView.vue'
import LoginView from './views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/inventory', name: 'inventory', component: InventoryView },
    { path: '/documents', name: 'documents', component: DocumentsView },
    { path: '/inbound', name: 'inbound', component: OperationView, props: { mode: 'inbound' } },
    { path: '/outbound', name: 'outbound', component: OperationView, props: { mode: 'outbound' } },
    { path: '/scan', name: 'scan', component: ScanView },
    { path: '/warehouse-status', name: 'warehouseStatus', component: StatusView },
    { path: '/capacity-alert', name: 'capacityAlert', component: CapacityView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/inventory/:sku', name: 'inventoryItem', component: ItemDetailView },
    { path: '/documents/:type/:id', name: 'documentDetail', component: DocumentDetailView },
    { path: '/notifications', name: 'notifications', component: NotificationsView },
    { path: '/help', name: 'help', component: HelpView },
    { path: '/settings/shortcuts', name: 'shortcutSettings', component: ShortcutSettingsView },
    { path: '/metrics/inventory', name: 'inventoryMetric', component: MetricDetailView, props: { metric: 'inventory' } },
    { path: '/metrics/pending', name: 'pendingMetric', component: MetricDetailView, props: { metric: 'pending' } },
    { path: '/metrics/utilization', name: 'utilizationMetric', component: MetricDetailView, props: { metric: 'utilization' } },
    { path: '/quick-menu', name: 'quickMenu', component: QuickMenuView },
    { path: '/login', name: 'login', component: LoginView },
  ],
})

export default router
