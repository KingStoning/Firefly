// 修改后的 fontConfig（已加入 工艺 CDN：lxgw-wenkai）
export const fontConfig = {
  enable: true, // 启用自定义字体功能
  preload: true, // 预加载字体文件以提高性能（可按需关闭）
  // 把工艺字体放在首位；如需仅使用工艺字体，可只保留 "lxgw-wenkai"
  selected: ["lxgw-wenkai", "misans-normal", "system"],
  fonts: {
    // 系统字体（保留）
    system: {
      id: "system",
      name: "系统字体",
      src: "",
      family:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },

    // 新增：LXGW WenKai (工艺 CDN: jsDelivr 主链)
    "lxgw-wenkai": {
      id: "lxgw-wenkai",
      name: "LXGW WenKai Screen",
      // 主要使用 jsDelivr 链接；也可替换为 cdnjs / npmmirror 等（见字体参考）。
      src: "https://jsd.onmicrosoft.cn/npm/lxgw-wenkai-screen-web/style.css",
      // family 名称写法包含常见别名，确保能被识别
      family: "'LXGW WenKai', 'LXGW-WenKai', 'WenKai', 'LXGW-WenKai-Screen'",
      display: "swap" as const,
      // 只加载中文子集可以显著减小体积（可按需调整或删除）
      unicodeRange: "U+4E00-9FFF",
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
