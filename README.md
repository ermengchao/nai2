# 奶了个奶

奶龙主题的三消小游戏，基于 [StreakingMan/solvable-sheep-game](https://github.com/StreakingMan/solvable-sheep-game) 修改，使用 React、TypeScript 和 Vite，采用 Bun 安装依赖、运行及构建。

## 游戏特点

- 默认卡牌使用 11 种奶龙形象，图片为本地透明 PNG。
- 20 个关卡，支持跳关、计时、得分和本地进度保存。
- 弹出、撤销和洗牌道具可无限使用。
- 页面仅保留游戏相关区域，移除收款码、访问计数和右下角主题 / DIY 按钮。
- DIY 主题仍可通过配置文件和独立开发命令使用。

## 本地运行

先安装 [Bun](https://bun.sh/)，然后在项目目录执行：

```fish
bun install --frozen-lockfile
bun run dev
```

开发地址：<http://localhost:5555/nai2/>。

## 构建与预览

```fish
bun run build
bun run preview
```

构建会先检查 TypeScript 类型，再生成 `dist/` 静态文件。发布时将 `dist/` 部署到静态网站服务；部署平台的安装命令设为 `bun install --frozen-lockfile`，构建命令设为 `bun run build`，输出目录设为 `dist`。

项目使用 `bun.lock` 固定依赖版本。需要更新依赖时运行 `bun install`，并提交更新后的锁文件。

## GitHub Pages

站点地址：<https://ermengchao.github.io/nai2/>（首次部署成功后可访问）。

1. 在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中，将 **Source** 设为 **GitHub Actions**。
2. 提交并推送到 `master`，或在 **Actions → Deploy GitHub Pages** 中手动运行工作流。
3. 等待构建和部署两个任务完成后，打开站点地址。

`.github/workflows/deploy.yml` 使用项目指定的 Bun 版本，锁定依赖安装，构建并发布 `dist/`。以后每次推送到 `master` 都会自动更新站点，无需提交构建产物。

`vite.config.ts` 的 `base` 为 `/nai2/`，确保脚本、样式和奶龙图片在仓库子路径下正确加载。如果更换仓库名或改用根域名，请同步调整此值。

本地检查部署版本：

```fish
bun run build
bun run preview
```

默认预览地址：<http://localhost:4173/nai2/>。

## DIY 主题

编辑 `diy/diy.theme.json`，将图片和音频放入 `diy/public/`：

```fish
bun run dev:diy
bun run build:diy
```

DIY 开发地址为 <http://localhost:5556>，构建输出为 `diy/diy-dist/`。详细配置见 [DIY 指南](diy/README.md)。

## 奶龙素材来源

素材来自 [合成大奶娃](https://yhsome.github.io/BigNaiWa/)及其 [BigNaiWa 仓库](https://github.com/yhsome/BigNaiWa)，存放在 `src/themes/default/images/`。默认主题定义位于 `src/themes/default/index.ts`。

来源提交、图片说明与使用范围见 [素材说明](src/themes/default/images/README.md)。原素材项目注明“仅供学习娱乐使用”，未提供角色素材的单独商业授权。

## 后台与音频

默认本地游戏无需配置 Bmob 后台。在线自定义主题和排行榜涉及原项目的 Bmob 服务，该服务已下线；如需这些功能，请自行配置后台，参见 DIY 指南。默认音乐和音效仍使用原项目的外部资源地址，其可用性取决于来源服务。

## 来源与许可

原项目：[StreakingMan/solvable-sheep-game](https://github.com/StreakingMan/solvable-sheep-game)。

保留原项目的 [GPL-3.0 许可证](LICENSE.md)。原 README 同时声明“本项目仅供交流，禁止商用”；该声明与 GPL-3.0 存在冲突，此处保留来源说明。代码许可证不代表奶龙角色及相关素材获得商业授权。
