这个小工具起源于该项目：[lyricat/wechat-format](https://github.com/lyricat/wechat-format)。

小工具的故事可以看下这篇公众号文章：[微信公众号 Markdown 编辑器，可能是最接近原生的体验](https://mp.weixin.qq.com/s/LQPjSOuiq_VW6jMkHmZYYg)

保留了三套渲染样式：

1. 原始作者风格
2. 我的优雅风格
3. 原生体验风格

不同的手机设备，显示出来的效果也不尽相同，对于安卓手机，设置自定义字体对显示效果会有干扰。原作者和优雅风格，在 iPhone 上显示效果更好；而原生体验风格，更具有普适性。

## 基础样式

### 加粗/斜体

**这是一句加粗的文字**，加粗在很多自定义字体设备上显示并不明显。

*这是一句斜体的文字*，*斜体*相对**加粗**，更不明显。

## 行内代码/分隔线

行内代码是 Markdown 的特殊语法，例如：`flash run`，同样也可以用于强调，例如：`Markdonw`。

下面是分割线：

---

距离刚刚好合适哦。

### 链接

这是公众号文章的链接：[微信公众号 Markdown 编辑器，可能是最接近原生的体验](https://mp.weixin.qq.com/s/LQPjSOuiq_VW6jMkHmZYYg)。

这是第三方链接：[原作者「微信公众号格式化编辑器」访问地址](https://lab.lyric.im/wxformat/)。

### 引用

> 知识不是力量，分享知识才是力量。

### 图片

请赞赏我。

![](http://img.90byte.com/weixin/qr-appreciate.png)

### 列表

只支持一级列表，效果如下：

1. 我是有序列表
2. 我是有序列表
3. 我是有序列表

---

- 我是无序列表
- 我是无序列表
- 我是无序列表

### 代码块

```cpp
#include <stdio.h>

const int MAX = 10;
int cache[MAX] = {0};

int fib(int x) {
  if (x == 1) return 1;
  if (x == 0) return 0;
  if (cache[x] == 0) {
    int ret = fib(x - 1) + fib(x - 2);
    cache[x] = ret;
  }
  return cache[x];
}

int main() {
    int i;
    printf("fibonacci series:\n");
    for (i = 0; i < MAX; ++i) {
        printf("%d ", fib(i));
    }
    return 0;
}
```

## 新特性
### 支持图床
这是新加入的特性，也是重新启动这个项目的*原始动力*之一。

在微信官方编辑器插入图片实在是太麻烦了，而使用其他编辑器写的文章，如果不支持图床服务，写完再贴到公众号上，图片处理起来更加麻烦。

**使用方法：直接粘贴图片到编辑器内。**

目前使用自建图片上传服务，一段时间自动删除所有服务端图片。该服务仅仅是为了编辑公众号使用，切不可当作长期图床。

另外，图片暂未做任何压缩处理，建议提前处理图片大小，避免上传失败。

## 后续计划

目前版本还有很多的小问题，后面会继续做样式方面的调整，但大部分样式不会有太大的变化，短时间内，也不会有其他主题的产生。