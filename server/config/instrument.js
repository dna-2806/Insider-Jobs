
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
});
Sentry.profiler.startProfiler();

Sentry.startSpan({
  name: "My First Transaction",
}, () => {
  
});

Sentry.profiler.stopProfiler();