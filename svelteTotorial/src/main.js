import HttpRequests from "./HttpRequests.svelte";

const app = new HttpRequests({
  target: document.body,
  props: {},
});

export default app;
