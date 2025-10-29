export const fontConfig = {
  enable: true,
  preload: false, // 预加载可以开启，但先确认 head 引入正常再开启
  selected: ["lxgw-wenkai", "misans-normal", "system"],
  fonts: {
    system: {
      id: "system",
      name: "系统字体",
      src: "",
      family:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },

    "lxgw-wenkai": {
      id: "lxgw-wenkai",
      name: "LXGW WenKai Screen",
      // 指向 Zstatic CDN 的屏幕优化版 CSS（与参考一致）
      src: "https://s4.zstatic.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css",
      family: "'LXGW WenKai Screen', 'LXGW WenKai', 'LXGW-WenKai'",
      display: "swap" as const,
      // 可移除 unicodeRange（让 CDN 的 CSS 决定子集），若要限制可使用 "U+4E00-9FFF"
      // unicodeRange: "U+4E00-9FFF",
    },

    // 现有 Google / CDN / 本地 字体（保留并未改动）
    "zen-maru-gothic": {
      id: "zen-maru-gothic",
      name: "Zen Maru Gothic",
      src: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap",
      family: "Zen Maru Gothic",
      display: "swap" as const,
    },
    inter: {
      id: "inter",
      name: "Inter",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      family: "Inter",
      display: "swap" as const,
    },
    "misans-normal": {
      id: "misans-normal",
      name: "MiSans Normal",
      src: "https://unpkg.com/misans@4.1.0/lib/Normal/MiSans-Normal.min.css",
      family: "MiSans",
      weight: 400,
      display: "swap" as const,
    },
    "misans-semibold": {
      id: "misans-semibold",
      name: "MiSans Semibold",
      src: "https://unpkg.com/misans@4.1.0/lib/Normal/MiSans-Semibold.min.css",
      family: "MiSans",
      weight: 600,
      display: "swap" as const,
    },
  },
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
};
