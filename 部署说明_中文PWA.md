# Human Atlas 中文 PWA V1.0 部署说明

推荐新建一个独立 GitHub 仓库，例如：`human-atlas-cn`。

## 方法A：GitHub Actions 自动构建并发布（推荐）

本包已经包含：`.github/workflows/deploy-pages.yml`。

1. GitHub 新建公开仓库 `human-atlas-cn`。
2. 将本项目根目录全部文件上传到仓库根目录。
3. 打开仓库 `Settings` → `Pages`。
4. `Build and deployment` 的 Source 选择 **GitHub Actions**。
5. 回到 `Actions` 页面，等待 `Deploy Human Atlas CN to GitHub Pages` 工作流完成。
6. 成功后 Pages 会给出网址，通常类似：
   `https://你的用户名.github.io/human-atlas-cn/`

以后修改源码并 Commit 到 `main`，GitHub 会自动重新构建和发布。

## 方法B：本地构建后上传 dist

需要 Node.js 22.13+：

```bash
npm ci
npm run check
npm run build
```

构建结果位于 `dist/`。

## PWA 安装

部署为 HTTPS 后：

- Android / Chrome：浏览器菜单 → “安装应用”或“添加到主屏幕”
- iPhone / Safari：分享 → “添加到主屏幕”

第一次进入会下载约 33 MB 压缩三维模型。模型按访问缓存；完整加载过后，离线可用性取决于浏览器是否保留相应缓存。

## V1.0 中文化范围

- 整体 UI 已中文化
- 15 个解剖系统已中文化
- 常见器官、骨骼、肌肉、血管和部分神经已中英双语
- 支持中文、英文、FMA 编号搜索
- 3,432 个概念尚未全部中文定稿；未校对的细小结构保留英文，避免自动翻译误导

## 许可

请保留：
- `LICENSE`
- `public/ATTRIBUTION.md`
- `public/ATTRIBUTION_CN.md`

三维数据来自 BodyParts3D 4.0，按 CC BY 4.0 使用。原应用代码为 MIT License。
