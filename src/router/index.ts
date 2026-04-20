import Quiz from '@/views/quiz.vue'
import Video from '@/views/video.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/video',
      name: "Video",
      component: Video,
    },
     {
      path: '/quiz',
      name: "Quiz",
      component: Quiz,
    },
  ],
})

export default router
