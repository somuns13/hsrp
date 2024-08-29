# 模板文件生成

> 便捷生成模板文件(组件/路由)

## 👇 下载

```shell
npm i hsrp -g
```

## 💻 使用方式

> hsrp 组件 name 文件名称 文件路径 组件类型 [是否为组件/路由]

### 1️⃣ 方式 1

> 创建 testInfoTableList 组件
>
> `hsrp hsy_test_0001 testInfoTableList /views/testFolder/ rt -c`
>
> 创建 testInfoTableList 路由文件
>
> `hsrp hsy_test_0001 testInfoTableList /views/testFolder/ rcmpRiskInfoTmp`

### 2️⃣ 方式 2

> 输入`hsrp`根据对应提示进行创建
>
> `hsrp`

### 3️⃣ 方式 3

> 输入`hsrp`根据对应提示创建 xml 类型模板文件
>
> `hsrp -x`

### 4️⃣ 方式 4

> 输入`hsrp`根据对应提示创建非 xml 类型模板文件
>
> `hsrp -t`

### 🅾 查看帮助信息

> `hsrp -h`
>
> `hsrp --help`

## 👉 支持的模板文件

> 包含简写、全写，采用方式 1 进行组件创建时，可使用简写

|       文件类型       | 简写  |               说明               |
| :------------------: | :---: | :------------------------------: |
|   `formDialogTmp`    | `fdt` |           表单弹窗模板           |
|  `rcmpRiskInfoTmp `  | `rt`  |           4.0 指标模板           |
|   `rcmpSearchTmp `   | `st`  |           表格查询模板           |
| `rcmpSimpleManage `  | `sm`  | 表格查询模板（包含新增、修改等） |
|  `rcmpSimpleQuery`   | `sq`  |      表格查询模板（已废弃）      |
| `rcmpSearchTemplate` | `rst` |   表格查询模板（非 xml 形式）    |
|  `workflowTemplate`  | `wft` |           流程表单模板           |
|    `multiTabTmp`     | `mtt` |           多 tab 模板            |
|       `vueTmp`       | `vue` |             vue 模板             |

---

## ⚙️ 更新日志

### 🔺1.2.0

- 新增指令`hsrp -x`， 用于生成 xml 类型 模板文件
- 新增指令`hsrp -t`， 用于生成 非 xml 类型 模板文件
- 更新`hsrp -h` 帮助信息

### 🔺1.1.7

- 修复输入路径后面未携带`/`时，路由文件对应的菜单路径异常问题

### 🔺1.1.6

- 新增`multiTabTmp`模板文件，用于生成多 tab 组件/路由文件

### 🔺1.1.5

- 生成表单弹窗模板文件简写`fdp`指令调整为`fdt`
- `hsrp -h` 增加帮助信息（模板添加说明）

### 🔺1.1.4

- 增加`vue`模板文件`vueTmp`，用于生成`vue`文件

### 🔺1.1.3

- 完善`workflowTemplate`模板文件
- 简化文件路径相关内容，可省略 src，例：`hsrp hsy_test_0001 testInfoTableList views/testFolder/ rt -c`，将会自动创建文件至`/src/views/testFolder/`目录下

### 🔺1.1.2

- 修复`hsrp hsy_test_0001 testInfoTableList /src/views/testFolder/ rcmpRiskInfoTmp/rt -c`无法创建组件问题

### 🔺1.1.1

- 新增 `workflowTemplate` 模板文件

### 🔺1.1.0

- 新增 `rcmpSearchTemplate`、`formDialogTmp` 模板文件
- 支持通过缩写进行组件创建：`formDialogTmp(fdp)`、`rcmpRiskInfoTmp(rt)`、`rcmpSearchTmp(st)`、`rcmpSimpleManage(sm)`、`rcmpSimpleQuery(sq)`、`rcmpSearchTemplate(rst)`
- 优化脚本工具，错误提示优化等

### 🔺1.0.0

- 支持 `rcmpSimpleQuery`、`rcmpSimpleManage`、`rcmpSearchTmp`、`rcmpRiskInfoTmp` 模板文件
