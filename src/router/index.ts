import Audio from '@/views/audio.vue'
import More from '@/views/more.vue'
import Quiz from '@/views/quiz.vue'
import Text from '@/views/text.vue'
import Video from '@/views/video.vue'
import Vocab from '@/views/vocab.vue'
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
