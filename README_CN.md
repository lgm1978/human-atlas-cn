# Human Atlas 中文 PWA V1.0

## 项目说明

这是一个**个人自学项目**。

我主要希望用它来学习人体解剖、对照中英文解剖术语，同时练习 GitHub、PWA 和开源项目的二次开发。

本项目基于开源项目：

- **Human Atlas**：https://github.com/ashemag/human-atlas
- 原项目 `app` 目录：https://github.com/ashemag/human-atlas/tree/main/app

进行学习性中文化与 PWA 适配。

原项目的 3D 解剖浏览、交互逻辑及主体代码均来自上游 Human Atlas；3D 解剖数据使用 BodyParts3D 4.0。本项目主要尝试增加中文界面、中英文术语对照、中文搜索和 PWA 使用体验。

**本项目不用于商业推广，主要用于个人学习与开源实践。**

> 本工具仅供解剖学习和教学参考，不用于诊断、手术导航或临床决策。

## V1.0 当前内容

- 主要操作界面中文化
- 15 个解剖系统中文名称与说明
- 部分常见结构增加“中文名 + English name + FMA ID”
- 支持中文 / 英文 / FMA 编号联合搜索框架
- 未人工校对的细小结构暂时保留英文名称
- 支持原有 3D 旋转、缩放、选择、隐藏、分离显示等功能
- 增加 PWA manifest 与 Service Worker，可添加到手机主屏幕
- 支持 GitHub Pages 自动构建和部署

## 在线使用

https://lgm1978.github.io/human-atlas-cn/

## 中文术语原则

V1.0 不是 3,432 个概念的全量中文医学术语定稿。

为了避免把机器翻译误当作标准解剖名称，目前优先校订常见结构。尚未核对的细小结构继续保留英文名称和 FMA 编号。

后续希望逐步整理为：

> 中文名称 / English name / FMA ID

便于中文解剖学习，也方便阅读英文医学文献时对照。

## 数据与许可

- 上游 Human Atlas 应用代码：MIT License
- 解剖数据：BodyParts3D 4.0，CC BY 4.0
- 数据详细署名：[`public/ATTRIBUTION.md`](public/ATTRIBUTION.md)
- 原项目许可：保留仓库中的 `LICENSE`

本项目为学习性二次开发，使用或再分发时请继续保留原项目及数据来源的许可和署名。

## 本地运行

需要 Node.js 22.13 或更高版本：

```bash
npm ci
npm run dev
```

构建：

```bash
npm run build
```

输出目录：`dist/`
