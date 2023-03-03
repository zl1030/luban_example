# 导表工具luban例子

测试中使用的docker镜像，是通过项目<https://github.com/zl1030/luban.git>库里code_java_immutable_collection分支构建。  
目前只测试了java和typescript语言读json格式，其他语言和格式未测试，不确定是否有问题。(从luban工具源码来看坑不少...)

### 一、运行服务器：

```bash
docker run --name luban-server -d --rm -p 8899:8899 zl1030/luban-server:latest 
```

### 二、导出json格式表数据：

运行data_json.bat, 会在output/data_json目录下生成json文件。

### 三、生成java代码并测试：
运行code_java_json.bat, 会在output/code_java_json目录下生成java代码。然后，把生成好的java代码拷贝到路径\java\src\main\java\com\example下。运行java项目下example.java测试数据读取是否正常。

### 四、生成typescript代码：
运行code_typescript_json.bat, 会在output/code_typescript_json目录下生成文件Types.ts。然后，拷贝到路径\typescript\src\models下。运行typescript项目下example.ts测试数据读取是否正常。  

