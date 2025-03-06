import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5161d659c8e252e814a0de11ca08f5bd@o4508929925120000.ingest.de.sentry.io/4508929928986704",
  tracesSampleRate: 1,
  debug: false,
});
