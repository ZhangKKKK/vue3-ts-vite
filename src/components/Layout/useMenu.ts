import router from '@/router'
import store from '@/store'
import { ref } from 'vue'

export default function useMenus () {
  const collapsed = ref(false)
  const selectedKeys = ref(['/'])
  const clickNav = (item: any) => {
    // const router = useRouter()
    router.push(item.key)
  }
  return {
    menus: store.state.routes.filter((item: any) => item.meta && item.meta.isMenu),
    collapsed,
    selectedKeys,
    clickNav
  }
}
