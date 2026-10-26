# 作品集入口静态检查

检查日期：2026-10-26。基线提交：afc46d2b5a3d72f693c1fc228a63319f26a0afb7。

## 结论与优先级

没有从当前六个项目的数据中确认到缺失的封面、项目图片、演示或视频文件。不能据此认定线上交互全部可用。目录显示本身不是故障，README 原先已有在线首页、PDF、ZIP 链接。

| 优先级 | 静态证据与影响 | 处理 |
| --- | --- | --- |
| P1 | index.html 与打开作品集.html 仅有空 root 和脚本，JavaScript 不可用时没有内容或备用资源入口 | 两个入口加入 noscript 说明与不依赖脚本的 PDF、ZIP、两套演示、三个视频链接 |
| P2 | 动态页面仅在关于页提供 PDF；脚本无离线 ZIP 入口 | 两个 HTML 入口的常驻资源导航补齐 PDF、ZIP |
| P2 | README 精选项目只有名称，演示和视频仅以目录描述，访客需要继续找入口 | README 补齐六个详情、两套演示和三个视频的直达地址 |
| P2 待实测 | 阅读说明称无需联网；仓库中的 ZIP 是独立二进制文件，其内容和当前仓库是否一致未验证 | 保留原说明，列为离线包验收项，不能宣称已同步打包 |

## 各入口核对

- 首页：index.html 与打开作品集.html 原内容相同，引用的 assets/portfolio.css、assets/portfolio.js 均存在。
- 详情页：六个 slug 均存在于项目数据，路由定义为 /project/:slug；使用哈希历史，直达链接应为 #/project/slug，不应改为服务器路径 /project/slug。
- 六个项目的封面和 images 数组所列文件均存在。脚本中的旧图片元数据映射不等于当前项目实际引用，不将未使用映射当成访客断链。
- PDF：portfolio.pdf 存在，4,378,751 字节；仅确认文件及入口，未解析页数、内嵌超链接或检查排版。
- 演示：demos/fitfuel/index.html、demos/apple/index.html 存在；静态 HTML、JS、CSS 引用核对未发现明确的本地缺失路径。模板动态生成的完整 DOM、外部链接可达性需实测。
- 视频：videos/core.mp4（19,539,395 字节）、videos/cyber.mp4（8,146,448 字节）、demos/fitfuel/video/fitfuel-intro.mp4（289,828 字节）均存在，当前媒体数据引用对应文件。
- 下载：downloads/portfolio-offline.zip 存在，38,731,556 字节。README 已有 GitHub raw 下载入口；新增网页入口使用相对路径并带 download 属性。
- FitFuel OCR 脚本未配置识别服务时返回 manual-required，不能将图片自动识别视为已接入；这是演示能力限制，不能靠修正链接解决。

## 需要实际打开测试的页面与资源

本轮浏览器启动失败：共享浏览器配置目录被占用。没有获得页面截图，没有完成线上渲染、点击或播放验收。仓库中原有验收报告不算本轮验证。

| 页面 / 资源 | 需要验证 |
| --- | --- |
| [首页](https://54188-s.github.io/bao-wenxu-portfolio/)、[作品列表](https://54188-s.github.io/bao-wenxu-portfolio/#/works)、[关于](https://54188-s.github.io/bao-wenxu-portfolio/#/about) | Pages 发布是否正常；新增资源导航显示；PDF、下载、演示点击；分类切换与列表模式 |
| [站在芯上的孩子](https://54188-s.github.io/bao-wenxu-portfolio/#/project/standing-on-the-core) | 直达与刷新、图片加载、下一项目、返回目录、视频播放 |
| [FitFuel Pro](https://54188-s.github.io/bao-wenxu-portfolio/#/project/fitfuel-pro) | 直达与刷新、图片加载、下一项目、返回目录、独立演示跳转 |
| [Apple Universe](https://54188-s.github.io/bao-wenxu-portfolio/#/project/apple-universe) | 直达与刷新、图片加载、下一项目、返回目录、独立演示跳转 |
| [绿釉陶犬](https://54188-s.github.io/bao-wenxu-portfolio/#/project/green-glazed-dog) | 直达与刷新、图片加载、下一项目、返回目录 |
| [赛博西安](https://54188-s.github.io/bao-wenxu-portfolio/#/project/cyber-xian) | 直达与刷新、图片加载、下一项目、返回目录、视频播放 |
| [视觉的四种语气](https://54188-s.github.io/bao-wenxu-portfolio/#/project/poster-studies) | 直达与刷新、图片加载、下一项目、返回目录 |
| [FitFuel](https://54188-s.github.io/bao-wenxu-portfolio/demos/fitfuel/index.html) | 各子页导航、数据持久化、介绍视频、OCR 手动录入降级 |
| [Apple](https://54188-s.github.io/bao-wenxu-portfolio/demos/apple/index.html) | 动态导航、产品详情、图片、外部来源链接 |
| [PDF](https://54188-s.github.io/bao-wenxu-portfolio/portfolio.pdf) | 浏览器打开、实际页数、全部页面及内嵌链接 |
| [社火视频](https://54188-s.github.io/bao-wenxu-portfolio/videos/core.mp4)、[赛博视频](https://54188-s.github.io/bao-wenxu-portfolio/videos/cyber.mp4)、[FitFuel 视频](https://54188-s.github.io/bao-wenxu-portfolio/demos/fitfuel/video/fitfuel-intro.mp4) | 开始播放、声音、拖动、移动端兼容与完整播放 |
| [离线包](https://54188-s.github.io/bao-wenxu-portfolio/downloads/portfolio-offline.zip) | 完整下载、ZIP 可解压、目录完整；断网双击打开作品集.html，再检查全部详情、PDF、演示、视频；核对是否含本次入口修复 |

本次修改仅涉及入口与文档，未重新打包 ZIP，未改动 PDF、视频或编译后的应用脚本。部署后仍需按表验收。
