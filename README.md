## 模板文件生成

> 可便捷生成xml模板文件

### 下载

```shell
npm i hsrp
```

### 使用方式

```shell
hsrp 组件name 文件名称 文件路径 应用组件类型 [是否为组件/路由]

# 创建testInfoTableList组件
`hsrp hsy_test_0001 testInfoTableList /src/views/testFolder/ rcmpRiskInfoTmp -c`
# 创建testInfoTableList路由文件
`hsrp hsy_test_0001 testInfoTableList /src/views/testFolder/ rcmpRiskInfoTmp`

# 或直接命令行输入`hsrp`根据对应提示进行创建

```

