---
slug: vscode一些配置的指南
title: vscode中一些好用的插件和配置推荐
authors: [sgx]
tags: [misc]
---

# vscode中一些好用的插件和配置推荐

## 插件篇

### github copilot

这个是必须要推荐的一个神级插件，一个非常好用的 AI 代码助手，目前普通用户有一定使用额度，但可以通过申请github学生包获取付费权益，如何申请github学生包可以查看 [这里](/blog/github学生包申请流程)。

可以点击右下角的 github copilot 图标或者 `ctrl+shift+P` 之后输入chat打开聊天页面。

### Competitive Programming Helper (cph)

可以提前设置样例，并一键运行全部样例并自动对比答案是否相同，可以省去自己手输样例的时间和肉眼对比答案的时间，可以搭配[这个](https://github.com/jmerle/competitive-companion)浏览器插件使用，可以一键爬去页面的样例信息并创建好对应的 `cpp` 文件。

### Material Icon Theme

一个美化vscode图标的插件。

### C/C++ Compile Run

简化 windows 环境下运行cpp文件的插件。

### background-cover

给 vscode 添加图片背景，可以添加自己喜欢的二次元背景。

### CodeSnap

一键生成漂亮的代码截图。

## 代码片段

可以在 vscode 左下角 `管理`-`代码片段` 处配置默认模板，功能类似于 `devcpp` 的缺省源，但用起来更加灵活。

### 配置参考

~~~json
{
	// Place your snippets for cpp here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "codeforces",
		"body": [
			"#include<bits/stdc++.h>",
			"#define N 200010",
			"#define ls x<<1",
			"#define rs x<<1|1",
			"#define MID ((l+r)>>1)",
			"#define mkp(a,b) make_pair(a,b)",
			"// mt19937 rnd(chrono::steady_clock::now().time_since_epoch().count());",
			"//#define int long long",
			"//#define P pair<int,int>",
			"using namespace std;",
			"int T=1,n,m;",
			"signed main(){",
			"	scanf(\"%d\",&T);",
			"	while(T--){",
			"		$0",
			"	}",
			"	return 0;",
			"}"
		],
		"description": "Codeforces output to console"
	},

	"daily use code": {
		"prefix": "log",
		"body": [
			"#include<bits/stdc++.h>",
			"#define N 200010",
			"#define ls x<<1",
			"#define rs x<<1|1",
			"#define MID ((l+r)>>1)",
			"#define mkp(a,b) make_pair(a,b)",
			"//#define int long long",
			"//#define P pair<int,int>",
			"using namespace std;",
			"int T=1,n,m;",
			"signed main(){",
			"	scanf(\"%d\",&n);",
			"	$0",
			"	return 0;",
			"}"
		],
		"description": "Log output to console",
	},
}
~~~