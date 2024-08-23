# 模板文件生成

> 便捷生成 xml 模板文件

## 下载

```shell
npm i hsrp -g
```

## 使用方式

```shell
hsrp 组件name 文件名称 文件路径 组件类型 [是否为组件/路由]

# 方式1 创建testInfoTableList组件
`hsrp hsy_test_0001 testInfoTableList /views/testFolder/ rt -c`

# 方式1 创建testInfoTableList路由文件
`hsrp hsy_test_0001 testInfoTableList /views/testFolder/ rcmpRiskInfoTmp`

# 方式1 或直接命令行输入`hsrp`根据对应提示进行创建
`hsrp`

```

## 支持的模板文件

> 包含简写、全写，如采用方式1进行组件创建时，可使用简写

```json
{
  "fdp": "formDialogTmp",
  "formDialogTmp": "formDialogTmp",
  "rt": "rcmpRiskInfoTmp",
  "rcmpRiskInfoTmp": "rcmpRiskInfoTmp",
  "st": "rcmpSearchTmp",
  "rcmpSearchTmp": "rcmpSearchTmp",
  "sm": "rcmpSimpleManage",
  "rcmpSimpleManage": "rcmpSimpleManage",
  "sq": "rcmpSimpleQuery",
  "rcmpSimpleQuery": "rcmpSimpleQuery",
  "rst": "rcmpSearchTemplate",
  "rcmpSearchTemplate": "rcmpSearchTemplate",
  "wft": "workflowTemplate",
  "workflowTemplate": "workflowTemplate",
  "vue": "vueTmp"
}
```



------



## 更新日志

### 1.1.4

- 增加`vue`模板文件`vueTmp`，用于生成`vue`文件

### 1.1.3

- 完善`workflowTemplate`模板文件
- 简化文件路径相关内容，可省略 src，例：`hsrp hsy_test_0001 testInfoTableList views/testFolder/ rt -c`，将会自动创建文件至`/src/views/testFolder/`目录下

### 1.1.2

- 修复`hsrp hsy_test_0001 testInfoTableList /src/views/testFolder/ rcmpRiskInfoTmp/rt -c`无法创建组件问题

### 1.1.1

- 新增 `workflowTemplate` 模板文件

### 1.1.0

- 新增 `rcmpSearchTemplate`、`formDialogTmp` 模板文件
- 支持通过缩写进行组件创建：`formDialogTmp(fdp)`、`rcmpRiskInfoTmp(rt)`、`rcmpSearchTmp(st)`、`rcmpSimpleManage(sm)`、`rcmpSimpleQuery(sq)`、`rcmpSearchTemplate(rst)`
- 优化脚本工具，错误提示优化等

### 1.0.0

- 支持 `rcmpSimpleQuery`、`rcmpSimpleManage`、`rcmpSearchTmp`、`rcmpRiskInfoTmp` 模板文件
