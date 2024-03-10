import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'
import * as Sentry from "@sentry/vue"
const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://60cb6d5491245c9317e9905b9f128c2c@o4506870741008384.ingest.us.sentry.io/4506887958888448",
    integrations: [
      Sentry.browserTracingIntegration({ router }),
      Sentry.replayIntegration(),
    ],
  
    tracesSampleRate: 1.0,
  
    tracePropagationTargets: ["localhost"],
  
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });

Sentry.nativeCrash();

app.use(router)
app.mount('#app')
