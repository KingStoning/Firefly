// 字体配置
export const fontConfig = {
  enable: true, // 启用自定义字体功能
  preload: false, // 预加载可以开启，但先确认 head 引入正常再开启
  selected: ["lxgw-wenkai", "misans-normal", "system"], // 当前选择的字体，支持多个字体组合
  fonts: {
    // 系统字体
    system: {
      id: "system",
      name: "系统字体",
      src: "", // 系统字体无需 src
      family:
        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    },
    // 霞鹜文楷 屏幕版 - Zstatic CDN (根据图片添加)
    "lxgw-wenkai": {
      id: "lxgw-wenkai",
      name: "LXGW WenKai Screen",
      // 指向 Zstatic CDN 的屏显优化版 CSS (与参考一致)
      src: "https://s4.zstatic.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css",
      family: "'LXGW WenKai Screen', 'LXGW WenKai', 'LXGW-WenKai'",
      display: "swap" as const,
      // 可移除 unicodeRange (让 CDN 的 CSS 决定)，若想限制可使用 "U+4E00-9FFF"
      unicodeRange: "U+4E00-9FFF",
    },
    // Google Fonts - Zen Maru Gothic (保留原有)
    "zen-maru-gothic": {
      id: "zen-maru-gothic",
      name: "Zen Maru Gothic",
      src: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap",
      family: "Zen Maru Gothic",
      display: "swap" as const,
    },
    // Google Fonts - Inter (保留原有)
    inter: {
      id: "inter",
      name: "Inter",
      src: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      family: "Inter",
      display: "swap" as const,
    },
    // 小米字体 - MiSans Normal (保留原有)
    "misans-normal": {
      id: "misans-normal",
      name: "MiSans Normal",
      src: "https://unpkg.com/misans@4.1.0/lib/Normal/MiSans-Normal.min.css",
      family: "MiSans",
      weight: 400,
      display: "swap" as const,
    },
    // 小米字体 - MiSans Semibold (保留原有)
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
  ], // 全局字体回退
};
