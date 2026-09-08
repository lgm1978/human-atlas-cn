# Human Atlas 中文 PWA

这是一个**个人自学项目**，主要用于学习人体解剖、熟悉中英文解剖术语，并练习将开源 Web 项目改造成中文 PWA。

本项目基于开源项目 **[ashemag/human-atlas](https://github.com/ashemag/human-atlas)** 进行学习性中文化与 PWA 适配，界面改造主要围绕原项目的 [`app`](https://github.com/ashemag/human-atlas/tree/main/app) 等前端代码展开。  
原项目的 3D 人体解剖浏览、交互逻辑和 BodyParts3D 数据体系均归原项目及相应数据来源所有。

> **用途说明**
>
> - 仅用于个人学习、解剖教学参考和开源项目实践。
> - 目标是尝试建立一个更方便中文用户使用的中英双语 3D 解剖学习界面。
> - 目前中文术语仍在逐步校订，不应视为正式医学术语数据库。
> - **不用于诊断、手术导航或任何临床决策。**

## 在线版本

GitHub Pages：

**https://lgm1978.github.io/human-atlas-cn/**

## 当前中文化内容

- 主要操作界面中文化
- 15 个解剖系统的中文名称与说明
- 部分常见骨骼、肌肉、器官、血管和神经结构增加中英双语名称
- 支持中文、英文及 FMA 编号搜索框架
- 未人工校对的细小结构暂时保留英文名称
- 增加 PWA 支持，可在兼容浏览器中添加到主屏幕
- 保留桌面端和移动端 3D 旋转、缩放、选择、隐藏、分离显示等原有交互

## 数据与上游项目

### 上游应用

- Human Atlas  
  https://github.com/ashemag/human-atlas
- 原项目 `app` 目录  
  https://github.com/ashemag/human-atlas/tree/main/app
- 原应用代码许可：MIT License

### 解剖数据

3D 解剖数据来自 **BodyParts3D 4.0** 成人男性参考解剖。

- 数据许可：CC BY 4.0
- 详细数据来源和署名见 [`public/ATTRIBUTION.md`](public/ATTRIBUTION.md)

当前数据包含大量独立 3D 网格与 FMA 解剖概念。该模型是参考解剖模型，不代表所有个体差异。

## 关于中文术语

这是一个逐步完善的学习版本。

我不准备把所有英文结构一次性机器直译后直接作为“标准中文名称”。现阶段优先处理常见结构；对于尚未人工核对的细小结构，保留英文名和 FMA 编号，后续再逐批校订。

理想显示方式是：

**中文名称 / English name / FMA ID**

这样既方便中文解剖学习，也便于阅读英文医学文献时对照。

## 本地运行

需要 Node.js 22.13 或更高版本：

```bash
npm ci
npm run dev
```

构建静态版本：

```bash
npm run build
```

输出目录为：

```text
dist/
```

## 许可与声明

- 原 Human Atlas 应用代码按 MIT License 使用并保留原许可。
- BodyParts3D 解剖数据按 CC BY 4.0 使用并保留署名。
- 第三方依赖遵循各自许可证。
- 本仓库中的中文界面、术语整理和 PWA 适配属于个人学习性修改。

如果你希望使用、fork 或继续修改这个项目，请同时保留原项目和 BodyParts3D 的许可与署名信息。
