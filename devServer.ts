import { serve } from 'bun'
import index from './frontend/index.html'
import privacyPolicy from './frontend/privacy-policy.html'
import termsAndConditions from './frontend/terms-and-conditions.html'

const server = serve({
  routes: {
    '/*': index,
    '/privacy-policy': privacyPolicy,
    '/terms-and-conditions': termsAndConditions
  },
  development: {
    hmr: true,
    console: true
  }
})

console.log(`🚀 Server running at ${server.url}`)
