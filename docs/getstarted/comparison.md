---
id: comparison
title: 比较 | React Query vs SWR vs Apollo vs RTK Query
---

> 该比较表力求尽可能准确和公正。 如果您使用这些库中的任何一个，并且认为信息可以得到改善，请随时使用[此链接](https://github.com/tannerlinsley/react-query/edit/master/docs/src/pages/comparison.md)来建议更改（带有注释或声明的证据）

特性/功能的等级:

- ✅ 一级(1st-class)，内置，无需添加任何配置或代码即可使用
- 🟡 受支持，但作为非官方的第三方或社区组件/贡献
- 🔶 受支持和记录，但需要额外的用户代码才能实现
- 🛑 没有官方支持或文档。

|                                                    | React Query                              | SWR [_(Website)_][swr]     | Apollo Client [_(Website)_][apollo]   | RTK-Query [_(Website)_][rtk-query]   |
| -------------------------------------------------- | ---------------------------------------- | -------------------------- | ------------------------------------- | ------------------------------------ |
| Github Repo / Stars                    | [![][stars-react-query]][gh-react-query] | [![][stars-swr]][gh-swr]   | [![][stars-apollo]][gh-apollo]        | [![][stars-rtk-query]][gh-rtk-query] |
| 平台要求                                 | React                                    | React                      | React, GraphQL                        | Redux                   |
| 他们的比较                               |                                          | (none)                     | (none)                                | [Comparison][rtk-query-comparison]  |
| 支持的查询语法                            | Promise, REST, GraphQL                   | Promise, REST, GraphQL     | GraphQL                               | Promise, REST, GraphQL                |
| 支持的框架                               | React                                    | React                      | React + Others                        | Any                    |
| 支持的查询类型                            | JSON                                     | JSON                       | GraphQL Query                         | JSON                   |
| 查询的key变更检测方法                     | 深度比较 (稳定的序列化)                      | 引用相等 (===)              | 深度比较 (不稳定的序列化)                 | 引用相等 (===)                  |
| 查询数据记忆级别                          | 查询 + 结构化共享                           | 查询                       | 查询 + 实体类 + 结构化共享                | 查询                      |
| 打包后大小                                | [![][bp-react-query]][bpl-react-query]   | [![][bp-swr]][bpl-swr]     | [![][bp-apollo]][bpl-apollo]          | [![][bp-rtk-query]][bpl-rtk-query] |
| API 定义                                 | 使用中，声明式                             | 使用中，声明式                | GraphQL 语法                          | 声明式                     |
| 查询                                     | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 缓存                                     | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 开发者工具                                | ✅                                       | 🟡                         | ✅                                    | ✅                                   |
| 轮询/长轮询                               | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 并行查询                                  | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 有依赖的查询                               | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 分页查询                                  | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 无尽的查询                                | ✅                                       | ✅                         | ✅                                    | 🛑                                   |
| 双向无限查询                              | ✅                                       | 🔶                         | 🔶                                    | 🛑                                   |
| 无限查询重新获取数据                           | ✅                                       | ✅                         | 🛑                                    | 🛑                                   |
| 滞后查询数据<sup>1</sup>                  | ✅                                       | 🛑                         | 🛑                                    | ✅                                   |
| 选择器                                   | ✅                                       | 🛑                         | ✅                                    | ✅                                   |
| 初始化数据                                | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 滚动恢复                                  | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 缓存操作                                  | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 过时数据的处理                             | ✅                                       | ✅                         | ✅                                    | ✅                                   |
| 渲染优化<sup>2</sup>                      | ✅                                       | 🛑                         | 🛑                                    | ✅                                   |
| 自动垃圾收集                              | ✅                                       | 🛑                         | 🛑                                    | ✅                                   |
| 修改的Hook                               | ✅                                       | 🟡                         | ✅                                    | ✅                                   |
| 离线修改的支持                             | ✅                                       | 🛑                         | 🟡                                    | 🛑                                   |
| 预取api                                  | ✅                                       | 🔶                         | ✅                                    | ✅                                   |
| 查询取消                                 | ✅                                       | 🛑                         | 🛑                                    | 🛑                                   |
| 部分查询匹配<sup>3</sup>                  | ✅                                       | 🛑                         | 🛑                                    | ✅                                   |
| 超时重新验证                              | ✅                                       | ✅                         | 🛑                                    | ✅                                   |
| 超时时间设置                              | ✅                                       | 🛑                         | 🛑                                    | 🛑                                   |
| 使用前查询/修改配置<sup>4</sup>            | ✅                                       | 🛑                         | 🛑                                    | ✅                                   |
| 窗口焦点重新获取数据                           | ✅                                       | ✅                         | 🛑                                    | 🛑                                   |
| 网络状态重新获取数据                           | ✅                                       | ✅                         | ✅                                    | 🛑                                   |
| 通用缓存的Dehydration/Rehydration         | ✅                                       | 🛑                         | ✅                                    | ✅                                   |
| 离线缓存                                  | ✅ (实验中)                               | 🛑                         | ✅                                    | 🔶                                   |
| React Suspense (实验中)                   | ✅                                       | ✅                         | 🛑                                    | 🛑                                   |
| 抽象的内核                                | ✅                                       | 🛑                         | ✅                                    | ✅                                   |
| 修改后自动重新获取数据<sup>5</sup>              | 🔶                                       | 🔶                         | ✅                                    | ✅                                   |
| 归一化缓存<sup>6</sup>                     | 🛑                                       | 🛑                         | ✅                                    | 🛑                                   |

### Notes

> **<sup>1</sup> 滞后查询数据** - React Query 提供了一种在下一个查询加载时继续查看现有的数据的方法(类似于原生的UX更新方式). 在编写分页ui或无限加载ui时，这一点非常重要，因为在这些ui中，我们不希望在请求新查询时显示硬加载状态。其他库没有这种功能，它们会在新查询加载时为新查询呈现硬加载状态(除非已预取)。

> **<sup>2</sup> 渲染优化** - React Query 具有出色的渲染性能。它只会在查询更新时重新渲染组件。例如，因为它具有新数据，或表明它正在获取。React Query 还将更新批量化，以确保当多个组件使用同一个查询时，应用程序只重新呈现一次。如果你只对`data`或`error`感兴趣，你可以通过设置`notifyOnChangeProps`为`['data'， 'error']`来减少更多的渲染次数。设置`notifyOnChangeProps：'tracked'`以自动跟踪访问字段，并且仅在其中一个字段发生更改时才重新呈现。

> **<sup>3</sup> 部分查询匹配** - 由于React Query使用确定性查询键(deterministic query key)来做序列化，因此，您无需知道要匹配的每个单独的查询键即可操作变量查询组。例如，您可以重新获取数据每个键中以`todos`开头的查询，而不管变量如何，也可以定位具有（或不具有）变量或嵌套属性的特定查询，甚至可以使用过滤器功能仅匹配通过特定条件的查询。

> **<sup>4</sup> 使用前查询/修改配置** - 这只是一个花哨的名称，用来配置查询和修改在被使用之前的行为方式。例如，查询可以事先用默认值完全配置，当需要使用它时，只需要`useQuery(key)`，而不是每次使用时都需要传递fetcher和可选项。SWR确实具有此功能的部分形式，它允许您预配置默认的访存程序，但只能将其预配置为全局访存程序，而不是在每个查询的基础上，而且绝对不用于修改。

> **<sup>5</sup> 修改后自动重新获取数据** - 为了在修改发生后实现真正的自动重取，需要有一个schema (如graphQL提供的) 以帮助组件知道如何识别该schema中的单个实体(entity)和实体类型(types)的启发式方法(heuristics)。

> **<sup>6</sup> 归一化缓存** - React Query和SWR当前不支持自动归一化的缓存，该缓存描述了在平面架构中如何存储实体以避免某些高级数据的重复。

<!-- -->

[bpl-react-query]: https://bundlephobia.com/result?p=react-query
[bp-react-query]: https://badgen.net/bundlephobia/minzip/react-query?label=💾
[gh-react-query]: https://github.com/tannerlinsley/react-query
[stars-react-query]: https://img.shields.io/github/stars/tannerlinsley/react-query?label=%F0%9F%8C%9F

<!-- -->

[swr]: https://github.com/vercel/swr
[bp-swr]: https://badgen.net/bundlephobia/minzip/swr?label=💾
[gh-swr]: https://github.com/vercel/swr
[stars-swr]: https://img.shields.io/github/stars/vercel/swr?label=%F0%9F%8C%9F
[bpl-swr]: https://bundlephobia.com/result?p=swr

<!-- -->

[apollo]: https://github.com/apollographql/apollo-client
[bp-apollo]: https://badgen.net/bundlephobia/minzip/@apollo/client?label=💾
[gh-apollo]: https://github.com/apollographql/apollo-client
[stars-apollo]: https://img.shields.io/github/stars/apollographql/apollo-client?label=%F0%9F%8C%9F
[bpl-apollo]: https://bundlephobia.com/result?p=@apollo/client

<!-- -->

[rtk-query]: https://rtk-query-docs.netlify.app/
[rtk-query-comparison]: https://rtk-query-docs.netlify.app/introduction/comparison
[bp-rtk]: https://badgen.net/bundlephobia/minzip/@reduxjs/toolkit?label=💾
[bp-rtk-query]: https://badgen.net/bundlephobia/minzip/@rtk-incubator/rtk-query?label=💾
[gh-rtk-query]: https://github.com/rtk-incubator/rtk-query
[stars-rtk-query]: https://img.shields.io/github/stars/rtk-incubator/rtk-query?label=%F0%9F%8C%9F
[bpl-rtk]: https://bundlephobia.com/result?p=@reduxjs/toolkit
[bpl-rtk-query]: https://bundlephobia.com/result?p=@rtk-incubator/rtk-query
