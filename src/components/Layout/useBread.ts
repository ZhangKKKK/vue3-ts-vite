import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default function handleBread () {
  const route = useRoute()
  console.log(route.matched)
  const breadList = computed(() => {
    const arr: any = []
    if (!isHome(route.matched[0].name)) {
      arr.push({ path: '/', name: 'home', meta: { title: '首页' } })
    }
    return arr.concat(route.matched)
  })
  return { breadList }
}

function isHome (name: any) {
  return name === 'home'
}