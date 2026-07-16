const DEFAULT_REPEAT_DENSITY = 132;
const DEFAULT_PAPER_IMAGE_SCALE = 0.58;

const state = {
  baseColor: "#fbfaed",
  patternColor: null,
  pattern: "stripe",
  image: null,
  portrait: { x: 50, y: 55, size: 232, rotation: 0 },
  repeatDensity: DEFAULT_REPEAT_DENSITY,
  copyText: "happy brithday",
  copySize: 14,
  copyFont: "rounded",
  copyColor: "#050505",
  copyOffsetX: 0,
  copyOffsetY: 0,
  paperImageScale: DEFAULT_PAPER_IMAGE_SCALE,
  paperSize: "cm-70-50",
  previewZoom: 1,
  selectedAssetId: "huaban-6995442534",
  selectedTarget: "portrait",
  selectedAccessoryId: null,
  accessoryDockOpen: false,
  pendingAccessoryAssetId: null,
  accessories: [],
};

const colors = [
  { name: "米白", value: "#fbfaed" },
  { name: "樱粉", value: "#fae3e4" },
  { name: "鼠尾草", value: "#edf2df" },
  { name: "雾蓝", value: "#ebf1f7" },
  { name: "薰衣草", value: "#f0ebf5" },
  { name: "燕麦", value: "#f3ede4" },
];
const PREVIEW_BASE_WIDTH = 1120;
const SYSTEM_FONT_STACK = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Arial, sans-serif';
const HANDWRITING_FONT_STACK =
  '"Marker Felt", "Comic Sans MS", "Bradley Hand", "HanziPen SC", "Hannotate SC", "Kaiti SC", cursive';
const COPY_FONTS = {
  handwriting: { weight: 800, stack: HANDWRITING_FONT_STACK },
  rounded: {
    weight: 800,
    stack:
      '"Arial Rounded MT Bold", "Hiragino Maru Gothic ProN", "PingFang SC", "Helvetica Neue", Arial, sans-serif',
  },
  sans: { weight: 800, stack: SYSTEM_FONT_STACK },
  kaiti: { weight: 700, stack: '"Kaiti SC", "STKaiti", "KaiTi", serif' },
};
const ICONS = {
  "accessory-add":
    '<path d="m5 19 9.5-9.5"/><path d="m13 7 4 4"/><path d="M17 3.5v3"/><path d="M15.5 5h3"/><path d="M6.5 5.5v2"/><path d="M5.5 6.5h2"/><path d="M19 16.5v2"/><path d="M18 17.5h2"/>',
  "avatar-upload":
    '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="10" r="2.5"/><path d="M7.8 17a4.8 4.8 0 0 1 8.4 0"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V17"/>',
  "grid-3x3":
    '<rect width="15" height="15" x="4.5" y="4.5" rx="1.8"/><path d="M4.5 9.5h15"/><path d="M4.5 14.5h15"/><path d="M9.5 4.5v15"/><path d="M14.5 4.5v15"/>',
  grip:
    '<circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/><circle cx="7" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="17" r="1.2" fill="currentColor" stroke="none"/>',
  heart:
    '<path d="M12 18.4 6.6 13.1c-1.8-1.7-2.1-3.8-.8-5.2 1.3-1.5 3.6-1.4 5.1.2L12 9.2l1.1-1.1c1.5-1.6 3.8-1.7 5.1-.2 1.3 1.4 1 3.5-.8 5.2z"/>',
  minus: '<path d="M5 12h14"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "reset-view": '<path d="M6.5 7.5A7 7 0 1 1 5 12"/><path d="M6.5 4.5v3h3"/><path d="M9 12h6"/>',
  "rotate-ccw": '<path d="M6.5 7.5A7 7 0 1 1 5 12"/><path d="M6.5 4.5v3h3"/>',
  "rotate-cw": '<path d="M17.5 7.5A7 7 0 1 0 19 12"/><path d="M17.5 4.5v3h-3"/>',
  stripe: '<path d="M5 13 11 7"/><path d="M8 16 14 10"/><path d="M11 19 17 13"/>',
  star:
    '<path d="m12 5.8 1.9 3.8 4.2.6-3.1 3 .7 4.2-3.7-2-3.7 2 .7-4.2-3.1-3 4.2-.6z"/>',
  x: '<path d="M8 8 16 16"/><path d="M16 8 8 16"/>',
  "zoom-in": '<circle cx="10.5" cy="10.5" r="5.5"/><path d="M15 15 20 20"/><path d="M10.5 8v5"/><path d="M8 10.5h5"/>',
  "zoom-out": '<circle cx="10.5" cy="10.5" r="5.5"/><path d="M15 15 20 20"/><path d="M8 10.5h5"/>',
};
const accessoryAssets = [
  {
    id: "huaban-6995442534",
    name: "配饰 1",
    src: "./assets/accessories/huaban-6995442534.webp",
  },
  {
    id: "huaban-6996643812",
    name: "配饰 2",
    src: "./assets/accessories/huaban-6996643812.webp",
  },
  {
    id: "huaban-6996487707",
    name: "配饰 3",
    src: "./assets/accessories/huaban-6996487707.webp",
  },
];
const accessoryImageMap = new Map();
const accessoryTrimMap = new Map();

const personUpload = document.querySelector("#personUpload");
const accessoryUpload = document.querySelector("#accessoryUpload");
const customColor = document.querySelector("#customColor");
const patternCustomColor = document.querySelector("#patternCustomColor");
const customColorPicker = document.querySelector("#customColorPicker");
const customColorToggle = document.querySelector("#customColorToggle");
const customColorMenu = document.querySelector("#customColorMenu");
const baseColorOption = document.querySelector("#baseColorOption");
const patternColorOption = document.querySelector("#patternColorOption");
const patternSelect = document.querySelector("#patternSelect");
const patternButtons = document.querySelectorAll(".pattern-pill");
const paperSizeSelect = document.querySelector("#paperSizeSelect");
const copyText = document.querySelector("#copyText");
const copySize = document.querySelector("#copySize");
const copyFont = document.querySelector("#copyFont");
const copyColor = document.querySelector("#copyColor");
const copyOffsetX = document.querySelector("#copyOffsetX");
const copyOffsetY = document.querySelector("#copyOffsetY");
const repeatDensity = document.querySelector("#repeatDensity");
const paperImageScale = document.querySelector("#paperImageScale");
const editorPanel = document.querySelector(".editor-panel");
const previewPanel = document.querySelector(".preview-panel");
const portraitCanvas = document.querySelector("#portraitCanvas");
const portraitCtx = portraitCanvas.getContext("2d");
const portraitTransform = document.querySelector("#portraitTransform");
const paperCanvas = document.querySelector("#paperCanvas");
const paperCtx = paperCanvas.getContext("2d");
const paperPreviewShell = document.querySelector(".paper-preview-shell");
const paperFrame = document.querySelector(".paper-frame");
const emptyState = document.querySelector("#emptyState");
const stageUploadButton = document.querySelector("#stageUploadButton");
const addAccessoryButton = document.querySelector("#addAccessory");
const portraitStage = document.querySelector("#portraitStage");
const accessoryLayer = document.querySelector("#accessoryLayer");
const accessoryDock = document.querySelector(".accessory-dock");
const colorSwatches = document.querySelector("#colorSwatches");
const printMeta = document.querySelector("#printMeta");
const zoomValue = document.querySelector("#zoomValue");

function init() {
  preloadAccessoryAssets();
  renderAccessoryDock();
  renderIcons();

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.className = "swatch";
    button.type = "button";
    button.dataset.color = color.value;
    button.style.setProperty("--swatch-color", color.value);
    button.innerHTML = `<span class="swatch-check ui-icon" aria-hidden="true">${iconSvg("check")}</span>`;
    button.title = color.name;
    button.setAttribute("aria-label", color.name);
    button.addEventListener("click", () => {
      state.baseColor = color.value;
      customColor.value = color.value;
      state.patternColor = null;
      render();
    });
    colorSwatches.append(button);
  });

  bindEvents();
  render();
  setupPreviewHeightSync();
}

function setupPreviewHeightSync() {
  syncPreviewMaxHeight();
  window.addEventListener("resize", syncPreviewMaxHeight);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(syncPreviewMaxHeight);
    observer.observe(editorPanel);
  }
}

function syncPreviewMaxHeight() {
  if (!window.matchMedia("(min-width: 1181px)").matches) {
    previewPanel.style.removeProperty("--editor-panel-height");
    return;
  }

  const height = Math.ceil(editorPanel.getBoundingClientRect().height);
  previewPanel.style.setProperty("--editor-panel-height", `${height}px`);
}

function iconSvg(name) {
  const paths = ICONS[name];
  if (!paths) return "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
}

function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((target) => {
    target.innerHTML = iconSvg(target.dataset.icon);
  });
}

function setIconButtonLabel(button, icon, label) {
  button.innerHTML = `<span class="ui-icon" aria-hidden="true">${iconSvg(icon)}</span><span>${label}</span>`;
}

function makeIconSpan(icon) {
  const span = document.createElement("span");
  span.className = "ui-icon";
  span.dataset.icon = icon;
  span.innerHTML = iconSvg(icon);
  return span;
}

function bindEvents() {
  personUpload.addEventListener("change", handleUpload);
  accessoryUpload.addEventListener("change", handleAccessoryUpload);
  stageUploadButton.addEventListener("click", () => personUpload.click());
  customColorToggle.addEventListener("click", () => {
    customColorPicker.classList.toggle("is-open");
  });
  baseColorOption.addEventListener("click", () => {
    customColorPicker.classList.remove("is-open");
    openColorInput(customColor);
  });
  patternColorOption.addEventListener("click", () => {
    customColorPicker.classList.remove("is-open");
    openColorInput(patternCustomColor);
  });
  customColor.addEventListener("input", (event) => {
    state.baseColor = event.target.value;
    state.patternColor = null;
    render();
  });
  patternCustomColor.addEventListener("input", (event) => {
    state.patternColor = event.target.value;
    render();
  });
  patternSelect.addEventListener("change", (event) => {
    state.pattern = event.target.value;
    render();
  });
  patternButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.pattern = button.dataset.pattern;
      patternSelect.value = state.pattern;
      render();
    });
  });
  paperSizeSelect.addEventListener("change", (event) => {
    state.paperSize = event.target.value;
    render();
  });
  copyText.addEventListener("input", (event) => {
    state.copyText = event.target.value;
    render();
  });
  copySize.addEventListener("input", (event) => {
    state.copySize = Number(event.target.value);
    updateRangeFill(event.target);
    render();
  });
  copyFont.addEventListener("change", (event) => {
    state.copyFont = event.target.value;
    render();
  });
  copyColor.addEventListener("input", (event) => {
    state.copyColor = event.target.value;
    render();
  });
  copyOffsetX.addEventListener("input", (event) => {
    state.copyOffsetX = Number(event.target.value);
    updateRangeFill(event.target);
    render();
  });
  copyOffsetY.addEventListener("input", (event) => {
    state.copyOffsetY = Number(event.target.value);
    updateRangeFill(event.target);
    render();
  });
  repeatDensity.addEventListener("input", (event) => {
    state.repeatDensity = Number(event.target.value);
    updateRangeFill(event.target);
    render();
  });
  paperImageScale.addEventListener("input", (event) => {
    state.paperImageScale = Number(event.target.value) / 100;
    updateRangeFill(event.target);
    render();
  });
  portraitTransform.addEventListener("pointerdown", startPortraitDrag);
  portraitTransform.querySelectorAll(".resize-handle, .box-handle").forEach((handle) => {
    handle.addEventListener("pointerdown", startPortraitResize);
  });
  portraitTransform.querySelector(".rotate-handle").addEventListener("pointerdown", startPortraitRotate);
  portraitTransform.querySelector(".close-handle").addEventListener("pointerdown", closePortraitFromHandle);
  portraitStage.addEventListener("pointerdown", handleStageBlankPointerDown);
  document.addEventListener("pointerdown", handleGlobalPointerDown);
  document.querySelector("#zoomOutBtn").addEventListener("click", () => setPreviewZoom(state.previewZoom - 0.25));
  document.querySelector("#zoomInBtn").addEventListener("click", () => setPreviewZoom(state.previewZoom + 0.25));
  document.querySelector("#zoomResetBtn").addEventListener("click", resetPreviewZoom);
  window.addEventListener("keydown", handleKeyboardShortcuts);

  addAccessoryButton.addEventListener("click", () => {
    if (!state.image) return;
    state.accessoryDockOpen = !state.accessoryDockOpen;
    render();
  });

  document.querySelector("#downloadBtn").addEventListener("click", () => {
    const exportCanvas = createPrintCanvas();
    const link = document.createElement("a");
    const spec = getPrintSpec();
    link.download = `gift-wrap-${spec.label.replaceAll(" ", "").replace("×", "x")}-300dpi.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  });
}

function handleKeyboardShortcuts(event) {
  if (event.key !== "Delete" && event.key !== "Backspace") return;
  if (isTypingTarget(event.target)) return;

  event.preventDefault();
  if (state.selectedTarget === "accessory" && state.selectedAccessoryId) {
    removeAccessory(state.selectedAccessoryId);
    return;
  }

  if (state.selectedTarget === "portrait" && state.image) {
    clearPortrait();
  }
}

function closePortraitFromHandle(event) {
  event.preventDefault();
  event.stopPropagation();
  clearPortrait();
}

function clearPortrait() {
  state.image = null;
  state.accessories = [];
  state.accessoryDockOpen = false;
  state.pendingAccessoryAssetId = null;
  state.selectedAccessoryId = null;
  state.selectedTarget = null;
  personUpload.value = "";
  render();
}

function removeAccessory(id) {
  state.accessories = state.accessories.filter((item) => item.id !== id);
  state.selectedAccessoryId = null;
  state.selectedTarget = state.image ? "portrait" : null;
  render();
}

function handleStageBlankPointerDown(event) {
  if (event.target !== portraitCanvas && event.target !== portraitStage) return;
  if (!state.image) {
    personUpload.click();
    return;
  }

  state.selectedTarget = null;
  state.selectedAccessoryId = null;
  document.activeElement?.blur();
  render();
}

function isTypingTarget(target) {
  return ["INPUT", "SELECT", "TEXTAREA"].includes(target?.tagName);
}

function preloadAccessoryAssets() {
  accessoryAssets.forEach((asset) => {
    const image = new Image();
    image.onload = () => {
      measureAccessoryTrim(asset.id, image);
      render();
    };
    image.src = asset.src;
    accessoryImageMap.set(asset.id, image);
  });
}

function renderAccessoryDock() {
  accessoryDock.innerHTML = "";
  accessoryAssets.forEach((asset) => {
    const button = document.createElement("button");
    button.className = "accessory";
    button.type = "button";
    button.dataset.assetId = asset.id;
    button.title = asset.name;
    button.innerHTML = `<img src="${asset.src}" alt="${asset.name}" />`;
    button.classList.toggle("active", asset.id === state.selectedAssetId);
    button.addEventListener("click", () => {
      state.selectedAssetId = asset.id;
      addAccessoryFromAsset(asset.id);
    });
    accessoryDock.append(button);
  });

  const uploadButton = document.createElement("button");
  uploadButton.className = "accessory accessory-upload";
  uploadButton.type = "button";
  uploadButton.title = "上传自定义配饰";
  uploadButton.setAttribute("aria-label", "上传自定义配饰");
  uploadButton.innerHTML = iconSvg("plus");
  uploadButton.addEventListener("click", () => accessoryUpload.click());
  accessoryDock.append(uploadButton);
}

function addAccessoryFromAsset(assetId) {
  if (!state.image) {
    return;
  }

  insertAccessory(assetId);
  state.accessoryDockOpen = false;
  render();
}

function handleAccessoryUpload(event) {
  const file = event.target.files?.[0];
  if (!file || !state.image) return;

  const asset = {
    id: `custom-${crypto.randomUUID()}`,
    name: file.name.replace(/\.[^.]+$/, "") || "自定义配饰",
    src: URL.createObjectURL(file),
  };
  const image = new Image();
  image.onload = () => {
    measureAccessoryTrim(asset.id, image);
    accessoryAssets.push(asset);
    state.selectedAssetId = asset.id;
    insertAccessory(asset.id);
    state.accessoryDockOpen = false;
    accessoryUpload.value = "";
    renderAccessoryDock();
    render();
  };
  image.src = asset.src;
  accessoryImageMap.set(asset.id, image);
}

function insertAccessory(assetId) {
  const item = {
    id: crypto.randomUUID(),
    assetId,
    x: 50,
    y: 20 + state.accessories.length * 8,
    size: 68,
    rotation: 0,
  };
  state.accessories.push(item);
  state.selectedTarget = "accessory";
  state.selectedAccessoryId = item.id;
  return item;
}

function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const image = new Image();
  image.onload = () => {
    state.image = image;
    resetPortraitPlacement();
    if (state.pendingAccessoryAssetId) {
      insertAccessory(state.pendingAccessoryAssetId);
      state.pendingAccessoryAssetId = null;
    } else {
      state.selectedTarget = "portrait";
      state.selectedAccessoryId = null;
    }
    render();
  };
  image.src = URL.createObjectURL(file);
}

function resetPortraitPlacement() {
  const stageWidth = portraitStage.clientWidth || portraitStage.getBoundingClientRect().width || 360;
  state.portrait = {
    x: 50,
    y: 50,
    size: Math.round(stageWidth * 0.75),
    rotation: 0,
  };
}

function render() {
  updateControls();
  renderPortrait();
  renderAccessories();
  renderPaper();
}

function updateControls() {
  const isCustomBaseColor = !colors.some((color) => color.value === state.baseColor);
  const isCustomPatternColor = Boolean(state.patternColor);

  [...colorSwatches.children].forEach((button) => {
    button.classList.toggle("active", button.dataset.color === state.baseColor);
  });
  customColor.value = state.baseColor;
  patternCustomColor.value = getPatternPickerColor();
  customColorToggle.classList.toggle("active", isCustomBaseColor || isCustomPatternColor);
  baseColorOption.classList.toggle("active", isCustomBaseColor);
  patternColorOption.classList.toggle("active", isCustomPatternColor);
  customColorPicker.classList.remove("is-open");
  patternButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pattern === state.pattern);
  });
  patternSelect.value = state.pattern;
  copyFont.value = state.copyFont;
  copyColor.value = state.copyColor;
  copyText.style.fontFamily = getCopyFont().stack;
  copyText.style.color = state.copyColor;
  emptyState.classList.toggle("is-hidden", Boolean(state.image));
  portraitTransform.classList.toggle("is-hidden", !state.image);
  portraitTransform.classList.toggle("selected", state.selectedTarget === "portrait" && Boolean(state.image));
  setIconButtonLabel(stageUploadButton, "avatar-upload", state.image ? "更换头像" : "上传头像");
  setIconButtonLabel(addAccessoryButton, "accessory-add", "添加配饰");
  addAccessoryButton.disabled = !state.image;
  addAccessoryButton.setAttribute("aria-disabled", String(!state.image));
  if (!state.image) {
    state.accessoryDockOpen = false;
    state.pendingAccessoryAssetId = null;
  }
  addAccessoryButton.classList.toggle("active", state.accessoryDockOpen);
  accessoryDock.classList.toggle("is-open", state.accessoryDockOpen);
  [copySize, copyOffsetX, copyOffsetY, repeatDensity, paperImageScale].forEach(updateRangeFill);
  const spec = getPrintSpec();
  printMeta.textContent = `${spec.label} · 300 DPI · ${spec.pixels.width} × ${spec.pixels.height} px`;
  updatePreviewZoom();
}

function openColorInput(input) {
  if (typeof input.showPicker === "function") {
    input.showPicker();
    return;
  }
  input.click();
}

function handleGlobalPointerDown(event) {
  if (customColorPicker.contains(event.target)) return;
  customColorPicker.classList.remove("is-open");
}

function updateRangeFill(input) {
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const value = Number(input.value || min);
  const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;
  input.style.setProperty("--range-progress", `${clamp(progress, 0, 100)}%`);
}

function setPreviewZoom(value) {
  const center = getPreviewViewportCenter();
  state.previewZoom = clamp(value, 0.75, 3);
  updatePreviewZoom();
  renderPaper();
  restorePreviewViewportCenter(center);
}

function resetPreviewZoom() {
  state.previewZoom = 1;
  updatePreviewZoom();
  renderPaper();
  requestAnimationFrame(() => {
    paperFrame.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
}

function updatePreviewZoom() {
  const percent = Math.round(state.previewZoom * 100);
  const spec = getPrintSpec();
  zoomValue.textContent = `${percent}%`;
  paperPreviewShell.style.setProperty("--paper-aspect", spec.aspect);
  paperFrame.style.setProperty("--paper-aspect", spec.aspect);
  paperCanvas.style.width = `${state.previewZoom * 100}%`;
  paperCanvas.style.maxHeight = "none";
}

function getPreviewViewportCenter() {
  return {
    x:
      paperFrame.scrollWidth > 0
        ? (paperFrame.scrollLeft + paperFrame.clientWidth / 2) / paperFrame.scrollWidth
        : 0.5,
    y:
      paperFrame.scrollHeight > 0
        ? (paperFrame.scrollTop + paperFrame.clientHeight / 2) / paperFrame.scrollHeight
        : 0.5,
  };
}

function restorePreviewViewportCenter(center) {
  requestAnimationFrame(() => {
    const maxLeft = Math.max(0, paperFrame.scrollWidth - paperFrame.clientWidth);
    const maxTop = Math.max(0, paperFrame.scrollHeight - paperFrame.clientHeight);
    paperFrame.scrollLeft = clamp(center.x * paperFrame.scrollWidth - paperFrame.clientWidth / 2, 0, maxLeft);
    paperFrame.scrollTop = clamp(center.y * paperFrame.scrollHeight - paperFrame.clientHeight / 2, 0, maxTop);
  });
}

function renderPortrait() {
  portraitCtx.clearRect(0, 0, portraitCanvas.width, portraitCanvas.height);
  if (!state.image) return;

  const stageScale = getStageToCanvasScale();
  const portraitBox = getPortraitDisplayBox();
  const width = portraitBox.width * stageScale;
  const height = portraitBox.height * stageScale;
  const centerX = (state.portrait.x / 100) * portraitCanvas.width;
  const centerY = (state.portrait.y / 100) * portraitCanvas.height;
  portraitCtx.save();
  portraitCtx.translate(centerX, centerY);
  portraitCtx.rotate((state.portrait.rotation * Math.PI) / 180);
  portraitCtx.drawImage(state.image, -width / 2, -height / 2, width, height);
  portraitCtx.restore();
  renderPortraitTransform();
}

function renderPortraitTransform() {
  if (!state.image) return;

  const portraitBox = getPortraitDisplayBox();
  portraitTransform.style.left = `${state.portrait.x}%`;
  portraitTransform.style.top = `${state.portrait.y}%`;
  portraitTransform.style.setProperty("--size", `${state.portrait.size}px`);
  portraitTransform.style.setProperty("--portrait-width", `${portraitBox.width}px`);
  portraitTransform.style.setProperty("--portrait-height", `${portraitBox.height}px`);
  portraitTransform.style.setProperty("--rotation", `${state.portrait.rotation}deg`);
  portraitTransform.classList.toggle("selected", state.selectedTarget === "portrait");
}

function getPortraitDisplayBox(size = state.portrait.size) {
  if (!state.image) return { width: size, height: size };

  const ratio = Math.min(size / state.image.width, size / state.image.height);
  return {
    width: state.image.width * ratio,
    height: state.image.height * ratio,
  };
}

function renderAccessories() {
  accessoryLayer.innerHTML = "";
  syncSelectionUi();
  if (!state.image) return;

  state.accessories.forEach((item) => {
    const button = document.createElement("button");
    button.className = "placed-accessory";
    button.type = "button";
    const asset = accessoryAssets.find((candidate) => candidate.id === item.assetId);
    if (!asset) return;
    const displayBox = getAccessoryDisplayBox(item.assetId, item.size);
    button.innerHTML = `<span class="accessory-image-frame"><img src="${asset.src}" alt="${asset.name}" /></span>`;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.style.setProperty("--size", `${item.size}px`);
    button.style.setProperty("--accessory-width", `${displayBox.width}px`);
    button.style.setProperty("--accessory-height", `${displayBox.height}px`);
    button.style.setProperty("--accessory-source-width", `${displayBox.sourceWidth}px`);
    button.style.setProperty("--accessory-source-height", `${displayBox.sourceHeight}px`);
    button.style.setProperty("--accessory-source-left", `${displayBox.sourceLeft}px`);
    button.style.setProperty("--accessory-source-top", `${displayBox.sourceTop}px`);
    button.style.setProperty("--rotation", `${item.rotation}deg`);
    const isSelected = state.selectedTarget === "accessory" && item.id === state.selectedAccessoryId;
    button.classList.toggle("selected", isSelected);
    button.addEventListener("pointerdown", (event) => startDrag(event, item.id));
    button.addEventListener("dblclick", () => {
      item.rotation = (item.rotation + 18) % 360;
      render();
    });
    if (isSelected) {
      appendSelectionDots(button, (event) => startResize(event, item.id));

      const closeHandle = document.createElement("span");
      closeHandle.className = "close-handle";
      closeHandle.append(makeIconSpan("x"));
      closeHandle.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        removeAccessory(item.id);
      });
      button.append(closeHandle);

      const rotateHandle = document.createElement("span");
      rotateHandle.className = "rotate-handle";
      rotateHandle.append(makeIconSpan("rotate-cw"));
      rotateHandle.addEventListener("pointerdown", (event) => startRotate(event, item.id));
      button.append(rotateHandle);

      const handle = document.createElement("span");
      handle.className = "resize-handle";
      handle.addEventListener("pointerdown", (event) => startResize(event, item.id));
      button.append(handle);
    }
    accessoryLayer.append(button);
  });
}

function appendSelectionDots(container, onResizeStart) {
  ["top", "left", "right", "bottom"].forEach((position) => {
    const dot = document.createElement("span");
    dot.className = `box-handle box-handle-${position}`;
    dot.addEventListener("pointerdown", onResizeStart);
    container.append(dot);
  });
}

function measureAccessoryTrim(assetId, image) {
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  if (!width || !height) return;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, width, height);

  let data;
  try {
    data = ctx.getImageData(0, 0, width, height).data;
  } catch {
    accessoryTrimMap.set(assetId, getFullAccessoryTrim(width, height));
    return;
  }

  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha <= 8) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  if (maxX < minX || maxY < minY) {
    accessoryTrimMap.set(assetId, getFullAccessoryTrim(width, height));
    return;
  }

  const padding = Math.round(Math.max(width, height) * 0.018);
  minX = clamp(minX - padding, 0, width - 1);
  minY = clamp(minY - padding, 0, height - 1);
  maxX = clamp(maxX + padding, 0, width - 1);
  maxY = clamp(maxY + padding, 0, height - 1);
  accessoryTrimMap.set(assetId, {
    imageWidth: width,
    imageHeight: height,
    x: minX,
    y: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  });
}

function getFullAccessoryTrim(width, height) {
  return {
    imageWidth: width,
    imageHeight: height,
    x: 0,
    y: 0,
    width,
    height,
  };
}

function getAccessoryTrim(assetId) {
  const trim = accessoryTrimMap.get(assetId);
  if (trim) return trim;

  const image = accessoryImageMap.get(assetId);
  const width = image?.naturalWidth || image?.width || 1;
  const height = image?.naturalHeight || image?.height || 1;
  return getFullAccessoryTrim(width, height);
}

function getAccessoryDisplayBox(assetId, maxSize) {
  const trim = getAccessoryTrim(assetId);
  const trimMax = Math.max(trim.width, trim.height, 1);
  const width = maxSize * (trim.width / trimMax);
  const height = maxSize * (trim.height / trimMax);
  return {
    width,
    height,
    sourceWidth: width * (trim.imageWidth / trim.width),
    sourceHeight: height * (trim.imageHeight / trim.height),
    sourceLeft: -width * (trim.x / trim.width),
    sourceTop: -height * (trim.y / trim.height),
  };
}

function syncSelectionUi() {
  portraitTransform.classList.toggle(
    "selected",
    state.selectedTarget === "portrait" && Boolean(state.image),
  );
}

function startDrag(event, id) {
  if (isTransformHandle(event.target)) return;
  event.preventDefault();
  state.selectedTarget = "accessory";
  state.selectedAccessoryId = id;
  const item = state.accessories.find((candidate) => candidate.id === id);
  renderAccessories();

  const rect = accessoryLayer.getBoundingClientRect();
  const move = (moveEvent) => {
    item.x = clamp(((moveEvent.clientX - rect.left) / rect.width) * 100, 3, 97);
    item.y = clamp(((moveEvent.clientY - rect.top) / rect.height) * 100, 3, 97);
    render();
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
}

function startPortraitDrag(event) {
  if (isTransformHandle(event.target)) return;
  event.preventDefault();
  state.selectedTarget = "portrait";
  state.selectedAccessoryId = null;
  render();

  const rect = accessoryLayer.getBoundingClientRect();
  const move = (moveEvent) => {
    state.portrait.x = clamp(((moveEvent.clientX - rect.left) / rect.width) * 100, 3, 97);
    state.portrait.y = clamp(((moveEvent.clientY - rect.top) / rect.height) * 100, 3, 97);
    render();
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
}

function startPortraitResize(event) {
  event.preventDefault();
  event.stopPropagation();
  state.selectedTarget = "portrait";
  state.selectedAccessoryId = null;
  render();

  const rect = accessoryLayer.getBoundingClientRect();
  const centerX = (state.portrait.x / 100) * rect.width;
  const centerY = (state.portrait.y / 100) * rect.height;
  const move = (moveEvent) => {
    const pointerX = moveEvent.clientX - rect.left;
    const pointerY = moveEvent.clientY - rect.top;
    const distance = Math.max(Math.abs(pointerX - centerX), Math.abs(pointerY - centerY));
    state.portrait.size = clamp(distance * 2, 72, getMaxEditableSize(rect));
    render();
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
}

function startPortraitRotate(event) {
  event.preventDefault();
  event.stopPropagation();
  state.selectedTarget = "portrait";
  state.selectedAccessoryId = null;
  render();
  startRotationDrag(event, state.portrait);
}

function startResize(event, id) {
  event.preventDefault();
  event.stopPropagation();
  state.selectedTarget = "accessory";
  state.selectedAccessoryId = id;
  const item = state.accessories.find((candidate) => candidate.id === id);
  const rect = accessoryLayer.getBoundingClientRect();
  const centerX = (item.x / 100) * rect.width;
  const centerY = (item.y / 100) * rect.height;

  const move = (moveEvent) => {
    const pointerX = moveEvent.clientX - rect.left;
    const pointerY = moveEvent.clientY - rect.top;
    const distance = Math.max(Math.abs(pointerX - centerX), Math.abs(pointerY - centerY));
    item.size = clamp(distance * 2, 32, getMaxEditableSize(rect));
    render();
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
}

function startRotate(event, id) {
  event.preventDefault();
  event.stopPropagation();
  state.selectedTarget = "accessory";
  state.selectedAccessoryId = id;
  const item = state.accessories.find((candidate) => candidate.id === id);
  render();
  startRotationDrag(event, item);
}

function startRotationDrag(event, item) {
  const rect = accessoryLayer.getBoundingClientRect();
  const centerX = (item.x / 100) * rect.width;
  const centerY = (item.y / 100) * rect.height;

  const move = (moveEvent) => {
    const pointerX = moveEvent.clientX - rect.left;
    const pointerY = moveEvent.clientY - rect.top;
    item.rotation = Math.round((Math.atan2(pointerY - centerY, pointerX - centerX) * 180) / Math.PI + 90);
    render();
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
}

function isTransformHandle(target) {
  return Boolean(
    target?.classList?.contains("resize-handle") ||
      target?.classList?.contains("box-handle") ||
      target?.classList?.contains("rotate-handle") ||
      target?.classList?.contains("close-handle"),
  );
}

function renderPaper() {
  const spec = getPrintSpec();
  const pixelRatio = window.devicePixelRatio || 1;
  const renderScale = Math.max(1, state.previewZoom * pixelRatio);
  const previewWidth = Math.round(PREVIEW_BASE_WIDTH * renderScale);
  paperCanvas.width = previewWidth;
  paperCanvas.height = Math.round(previewWidth / spec.aspect);
  drawPaperToCanvas(paperCanvas, paperCtx, previewWidth / PREVIEW_BASE_WIDTH);
}

function createPrintCanvas() {
  const spec = getPrintSpec();
  const canvas = document.createElement("canvas");
  canvas.width = spec.pixels.width;
  canvas.height = spec.pixels.height;
  drawPaperToCanvas(canvas, canvas.getContext("2d"), canvas.width / PREVIEW_BASE_WIDTH);
  return canvas;
}

function drawPaperToCanvas(canvas, ctx, scaleRatio) {
  drawPattern(ctx, canvas.width, canvas.height, scaleRatio);
  const repeatStep = getRepeatStep(scaleRatio);
  const portraitSize = state.image ? repeatStep * state.paperImageScale : repeatStep * 0.44;
  const portrait = makePortraitTile();
  const stickers = getCopyStickers();
  const tileLayout = createTileLayout(ctx, stickers, repeatStep, scaleRatio);
  let tileIndex = 0;

  for (let row = -1, y = -tileLayout.size; y < canvas.height + tileLayout.size; y += tileLayout.size, row += 1) {
    for (let x = -tileLayout.size; x < canvas.width + tileLayout.size; x += tileLayout.size) {
      const offset = row % 2 === 0 ? 0 : tileLayout.size / 2;
      const sticker = tileLayout.stickers.length ? tileLayout.stickers[tileIndex % tileLayout.stickers.length] : null;
      const stickerHeight = sticker ? sticker.boxHeight * sticker.scale : 0;
      const groupHeight = portraitSize + (sticker ? stickerHeight + tileLayout.gap : 0);
      const groupTop = -groupHeight / 2;
      const stickerX = (state.copyOffsetX / 100) * repeatStep;
      const stickerY = groupTop + stickerHeight / 2 + (state.copyOffsetY / 100) * repeatStep;
      const portraitY = groupTop + (sticker ? stickerHeight + tileLayout.gap : 0) + portraitSize / 2;

      ctx.save();
      ctx.translate(x + offset + tileLayout.size / 2, y + tileLayout.size / 2);
      if (sticker) drawCopySticker(ctx, sticker, stickerX, stickerY);

      ctx.save();
      ctx.translate(0, portraitY);
      ctx.rotate(((tileIndex % 3) - 1) * 0.035);
      if (state.image) {
        ctx.drawImage(portrait, -portraitSize / 2, -portraitSize / 2, portraitSize, portraitSize);
      }
      ctx.restore();
      ctx.restore();
      tileIndex += 1;
    }
  }
}

function getRepeatStep(scaleRatio) {
  const min = Number(repeatDensity.min || 0);
  const max = Number(repeatDensity.max || state.repeatDensity);
  const density = clamp(state.repeatDensity, min, max);
  return density * scaleRatio;
}

function getCopyStickers() {
  return state.copyText
    .split(/\/|，|,/)
    .map((item) =>
      item
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    )
    .filter((lines) => lines.length);
}

function createTileLayout(ctx, stickers, repeatStep, scaleRatio) {
  const fontSize = state.copySize * scaleRatio;
  const lineHeight = fontSize * 1.18;
  const paddingX = 9 * scaleRatio;
  const paddingY = 5 * scaleRatio;
  const gap = Math.max(12 * scaleRatio, repeatStep * 0.12);
  const copyFontConfig = getCopyFont();
  const font = `${copyFontConfig.weight} ${fontSize}px ${copyFontConfig.stack}`;

  ctx.save();
  ctx.font = font;
  const measuredStickers = stickers.map((lines) => {
    const maxLineWidth = Math.max(...lines.map((line) => ctx.measureText(line).width));
    const textHeight = lineHeight * lines.length;
    return {
      lines,
      font,
      lineHeight,
      textHeight,
      boxWidth: maxLineWidth + paddingX * 2,
      boxHeight: textHeight + paddingY * 2,
    };
  });
  ctx.restore();

  if (!measuredStickers.length) {
    return { size: repeatStep, gap, stickers: [] };
  }

  // Repeat density owns the grid step; image size only scales the portrait inside that fixed cell.
  const maxStickerWidth = repeatStep * 0.74;
  const scaledStickers = measuredStickers.map((sticker) => ({
    ...sticker,
    scale: Math.min(1, maxStickerWidth / sticker.boxWidth),
  }));

  return { size: repeatStep, gap, stickers: scaledStickers };
}

function getCopyFont() {
  return COPY_FONTS[state.copyFont] || COPY_FONTS.rounded;
}

function drawCopySticker(ctx, sticker, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(sticker.scale, sticker.scale);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = sticker.font;
  ctx.fillStyle = "rgba(255, 254, 248, 0.5)";
  drawRoundRect(ctx, -sticker.boxWidth / 2, -sticker.boxHeight / 2, sticker.boxWidth, sticker.boxHeight, sticker.boxHeight / 2);
  ctx.fill();
  ctx.fillStyle = state.copyColor;
  const firstLineY = -sticker.textHeight / 2 + sticker.lineHeight / 2;
  sticker.lines.forEach((line, lineIndex) => {
    ctx.fillText(line, 0, firstLineY + lineIndex * sticker.lineHeight);
  });
  ctx.restore();
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function makePortraitTile() {
  const tile = document.createElement("canvas");
  tile.width = 360;
  tile.height = 360;
  const ctx = tile.getContext("2d");
  const stageToTileScale = getAccessoryStageToTileScale(tile.width);
  ctx.drawImage(portraitCanvas, 0, 0);

  state.accessories.forEach((item) => {
    const image = accessoryImageMap.get(item.assetId);
    if (!image?.complete) return;

    ctx.save();
    ctx.translate((item.x / 100) * tile.width, (item.y / 100) * tile.height);
    ctx.rotate((item.rotation * Math.PI) / 180);
    const tileSize = item.size * stageToTileScale;
    drawTrimmedAccessory(ctx, image, item.assetId, tileSize);
    ctx.restore();
  });

  return tile;
}

function drawTrimmedAccessory(ctx, image, assetId, maxSize) {
  const trim = getAccessoryTrim(assetId);
  const trimMax = Math.max(trim.width, trim.height, 1);
  const width = maxSize * (trim.width / trimMax);
  const height = maxSize * (trim.height / trimMax);
  ctx.drawImage(image, trim.x, trim.y, trim.width, trim.height, -width / 2, -height / 2, width, height);
}

function getAccessoryStageToTileScale(tileWidth) {
  const width = accessoryLayer.clientWidth || accessoryLayer.getBoundingClientRect().width;
  return width > 0 ? tileWidth / width : 1;
}

function getStageToCanvasScale() {
  const width = portraitCanvas.clientWidth || portraitCanvas.getBoundingClientRect().width;
  return width > 0 ? portraitCanvas.width / width : 1;
}

function getMaxEditableSize(rect) {
  return Math.max(rect.width, rect.height) * 3;
}

function drawPattern(ctx, width, height, scaleRatio = 1) {
  const patternColors = getPatternColors(state.baseColor, state.patternColor);
  ctx.fillStyle = state.baseColor;
  ctx.fillRect(0, 0, width, height);

  if (state.pattern === "stripe") {
    ctx.strokeStyle = patternColors.deep;
    ctx.lineWidth = 14 * scaleRatio;
    for (let x = -height; x < width; x += 52 * scaleRatio) {
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x + height, 0);
      ctx.stroke();
    }
  }

  if (state.pattern === "grid") {
    ctx.strokeStyle = patternColors.medium;
    ctx.lineWidth = 2 * scaleRatio;
    for (let x = 0; x < width; x += 44 * scaleRatio) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 44 * scaleRatio) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  if (state.pattern === "confetti") {
    const spacingX = 30 * scaleRatio;
    const spacingY = 28 * scaleRatio;
    const startX = 12 * scaleRatio;
    const startY = 12 * scaleRatio;
    let dotIndex = 0;

    for (let y = startY, row = 0; y < height + spacingY; y += spacingY, row += 1) {
      const offsetX = row % 2 === 0 ? 0 : spacingX / 2;
      for (let x = startX + offsetX; x < width + spacingX; x += spacingX) {
        const radius = (2.15 + (dotIndex % 3) * 0.35) * scaleRatio;
        ctx.fillStyle = patternColors.dots[dotIndex % patternColors.dots.length];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        dotIndex += 1;
      }
    }
  }

  if (state.pattern === "heart" || state.pattern === "star") {
    ctx.fillStyle = patternColors.medium;
    ctx.font = `${26 * scaleRatio}px ${SYSTEM_FONT_STACK}`;
    for (let y = 28 * scaleRatio; y < height; y += 58 * scaleRatio) {
      for (let x = 24 * scaleRatio; x < width; x += 68 * scaleRatio) {
        ctx.fillText(state.pattern === "heart" ? "♥" : "✦", x, y);
      }
    }
  }
}

function getPatternPickerColor() {
  return state.patternColor ?? mixHex(state.baseColor, "#5e5a54", 0.24);
}

function getPatternColors(hex, patternHex = null) {
  const base = hexToRgb(hex);
  const patternBase = patternHex ? hexToRgb(patternHex) : base;
  const deep = mixRgb(patternBase, { r: 58, g: 56, b: 52 }, patternHex ? 0.12 : 0.38);
  const medium = mixRgb(patternBase, { r: 58, g: 56, b: 52 }, patternHex ? 0.06 : 0.26);
  const light = mixRgb(base, { r: 255, g: 255, b: 255 }, 0.42);
  return {
    deep: rgba(deep, 0.16),
    medium: rgba(medium, 0.2),
    dots: patternHex
      ? [rgba(patternBase, 0.34), rgba(patternBase, 0.26), rgba(patternBase, 0.2)]
      : ["rgba(255, 255, 255, 0.56)", "rgba(255, 255, 255, 0.42)", "rgba(255, 255, 255, 0.3)"],
  };
}

function mixHex(hexA, hexB, amount) {
  const mixed = mixRgb(hexToRgb(hexA), hexToRgb(hexB), amount);
  const toHex = (value) => value.toString(16).padStart(2, "0");
  return `#${toHex(mixed.r)}${toHex(mixed.g)}${toHex(mixed.b)}`;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized,
    16,
  );
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function mixRgb(from, to, amount) {
  return {
    r: Math.round(from.r + (to.r - from.r) * amount),
    g: Math.round(from.g + (to.g - from.g) * amount),
    b: Math.round(from.b + (to.b - from.b) * amount),
  };
}

function rgba(color, alpha) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function getPrintSpec() {
  const [, unit, longSideRaw, shortSideRaw] = state.paperSize.match(/(cm|in)-(\d+)-(\d+)/);
  const longSide = Number(longSideRaw);
  const shortSide = Number(shortSideRaw);
  const inchesPerUnit = unit === "cm" ? 1 / 2.54 : 1;
  const widthIn = longSide * inchesPerUnit;
  const heightIn = shortSide * inchesPerUnit;
  const dpi = 300;
  return {
    label: `${longSide} × ${shortSide} ${unit}`,
    aspect: widthIn / heightIn,
    pixels: {
      width: Math.round(widthIn * dpi),
      height: Math.round(heightIn * dpi),
    },
  };
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function rgbToHex(rgb) {
  const match = rgb.match(/\d+/g);
  if (!match) return rgb;
  return `#${match
    .slice(0, 3)
    .map((part) => Number(part).toString(16).padStart(2, "0"))
    .join("")}`;
}

init();
