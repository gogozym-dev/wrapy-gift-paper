(() => {
  const projectId = document.querySelector('meta[name="clarity-project-id"]')?.content?.trim();
  window.trackWrapyEvent = () => {};
  const isLocalPreview =
    location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
  if (!projectId || isLocalPreview) return;

  window.clarity = window.clarity || function clarityQueue() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
  document.head.append(script);
  window.trackWrapyEvent = (eventName) => window.clarity("event", eventName);
})();
