const Audio = () => import('@/views/audio.vue');
const More = () => import('@/views/more.vue')
const Quiz = () => import('@/views/quiz.vue')
const Text = () => import('@/views/text.vue')
const Video = () => import('@/views/video.vue')
const Vocab = () => import('@/views/vocab.vue')
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
    }, {
      path: '/text',
      name: "Text",
      component: Text,
    }, {
      path: '/vocab',
      name: "Vocab",
      component: Vocab,
    }, {
      path: '/more',
      name: "More",
      component: More,
    }, {
      path: '/audio',
      name: "Audio",
      component: Audio,
    }
  ],
})

export default router
