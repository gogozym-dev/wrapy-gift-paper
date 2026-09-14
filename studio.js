const studioToolButtons = [...document.querySelectorAll("[data-studio-tool]")];
const studioPanels = [...document.querySelectorAll("[data-studio-panel]")];
const studioPanelCloseButtons = [...document.querySelectorAll("[data-studio-close]")];

let activeStudioTool = null;

function setActiveStudioTool(nextTool, options = {}) {
  activeStudioTool = nextTool === activeStudioTool ? null : nextTool;

  studioToolButtons.forEach((button) => {
    const isActive = button.dataset.studioTool === activeStudioTool;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-expanded", String(isActive));
  });

  studioPanels.forEach((panel) => {
    panel.classList.toggle("is-open", panel.dataset.studioPanel === activeStudioTool);
  });

  if (options.focusPanel && activeStudioTool) {
    const activePanel = studioPanels.find((panel) => panel.dataset.studioPanel === activeStudioTool);
    activePanel?.querySelector("button, input, select, textarea")?.focus({ preventScroll: true });
  }
}

function closeActiveStudioTool(options = {}) {
  if (!activeStudioTool) return;
  const activeButton = studioToolButtons.find((button) => button.dataset.studioTool === activeStudioTool);
  setActiveStudioTool(null);
  if (options.restoreFocus) activeButton?.focus({ preventScroll: true });
}

studioToolButtons.forEach((button) => {
  const panelId = `studio-panel-${button.dataset.studioTool}`;
  const panel = studioPanels.find((item) => item.dataset.studioPanel === button.dataset.studioTool);

  button.setAttribute("aria-controls", panelId);
  if (panel) panel.id = panelId;

  button.addEventListener("click", () => {
    setActiveStudioTool(button.dataset.studioTool);
  });
});

studioPanelCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    closeActiveStudioTool({ restoreFocus: true });
  });
});

document.addEventListener("pointerdown", (event) => {
  if (!activeStudioTool) return;
  const eventPath = event.composedPath();
  if (eventPath.some((node) => node instanceof Element && node.matches("dialog[open]"))) return;
  const activePanel = studioPanels.find((panel) => panel.dataset.studioPanel === activeStudioTool);
  const startedInsidePanel = activePanel && eventPath.includes(activePanel);
  const startedOnTool = studioToolButtons.some((button) => eventPath.includes(button));
  if (startedInsidePanel || startedOnTool) return;
  closeActiveStudioTool();
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !activeStudioTool) return;
  closeActiveStudioTool({ restoreFocus: true });
});
