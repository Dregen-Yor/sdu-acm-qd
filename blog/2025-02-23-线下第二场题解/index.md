---
slug: 线下第二场题解
title: 线下第二场题解
authors: [sgx]
tags: [solution]
---

# 线下第二场题解

## F

奖励题，输出 $N-1$。

没过的都拉出去突突了。

## I

阅读题，

> A contest date is too late for TOPC if it is not at least 35 days prior to Octobor 21, 2023. Please write a program to determine whether a tentative contest date is too late for TOPC.

## L

签到题，比预期中的发现时间要早。如果 $m\times s\gq n$ 则输出 $1$，否则输出 $0$。

## A

输出一个两边为 $1$，中间为 $0$ 的金字塔。

## B

暴力即可

枚举 $k$，之后删去其倍数，遇到需要保留的就break掉。

## G

排序，之后从小到大选三个数，以中间的数字为标准，修改两边的木棍，遍历一遍求最小值即可。

## E

首先预处理出从那些位置开始的 s 的子串刚好可以匹配 t,之后用前缀和维护，注意查询的时候右端点改为 $r-t.size()+1$。

## J

爆搜题，注意可能会爆int。

把士兵当作节点，士兵之间的关系当作边。

用dfs遍历图，如果发现一个士兵之前已经分配过营地，且当前给到的营地位置与上次不同则不满足，否则遍历下来没有矛盾的话就是可以满足。

## K

三国杀题，（恶趣味）。

经典背包DP 模型，$dp_{i,j,k}$ 表示前 $i$ 张卡牌中，两组牌的点数差值为 $j$ （可以为负），共$k$张牌选择翻倍。

状态转移方程如下：

$$\begin{cases}dp_{i,j,k}=\max(dp_{i-1,j-t_i,k}+v_i)\\dp_{i,j,k}=\max(dp_{i-1,j+t_i,k}+v_i)\\ dp_{i,j,k}=\max(dp_{i-1,j+t_i\times2,k-1}+v_i)& k>0\\ dp_{i,j,k}=\max(dp_{i-1,j-t_i\times2,k-1}+v_i)& k>0\end{cases}$$


<details>
<summary>代码</summary>

~~~cpp
#include<bits/stdc++.h>
#define int long long
#define N 110
using namespace std;
int n,k,v[N],t[N],dp[2][4610][N];
signed main(){
    scanf("%lld%lld",&n,&k);
    for(int i=1;i<=n;i++){
        scanf("%lld%lld",&v[i],&t[i]);
    }
    for(int i=0;i<=4600;i++){
        for(int j=0;j<=k;j++){
            dp[1][i][j]=dp[0][i][j]=-1e18;
        }
    }
    dp[0][2300][0]=0;
    for(int i=1;i<=n;i++){
        for(int x=0;x<=k;x++){
            for(int j=0;j<=4600;j++){
                dp[i&1][j][x]=dp[i&1^1][j][x];
                if(j>=t[i]){
                    dp[i&1][j][x]=max(dp[i&1][j][x],dp[i&1^1][max(0ll,j-t[i])][x]+v[i]);
                }
                if(j+t[i]<=4600){
                    dp[i&1][j][x]=max(dp[i&1][j][x],dp[i&1^1][min(4600ll,j+t[i])][x]+v[i]);
                }
                if(x&&j>=2*t[i]){
                    dp[i&1][j][x]=max(dp[i&1][j][x],dp[i&1^1][max(0ll,j-t[i]*2)][x-1]+v[i]);
                }
                if(x&&j<=4600-t[i]*2){
                    dp[i&1][j][x]=max(dp[i&1][j][x],dp[i&1^1][min(4600ll,j+t[i]*2)][x-1]+v[i]);
                }
            }
        }
    }
    int ans=-1e18;
    for(int i=0;i<=k;i++){
        ans=max(ans,dp[n&1][2300][i]);
    }
    printf("%lld",ans);
    return 0;
}

~~~
</details>


## C

我们考虑朴素的枚举做法，用一个链表暴力模拟，并判断当前的歌和上一首歌的风格的 GCD 是否为 1 即可，一直到一轮下来没有任意一首歌被删除为止。

但这样做的话很显然会超时，我们发现有些歌在上面暴力枚举的时候被重复计算了多次，但有些歌被重复计算多次，我们考虑如何将重复的计算优化掉。

我们不难发现，判断歌曲风格的关系是按一定顺序的，而且这个顺序与队列的 First in First out 的关系是相同的，我们考虑用一个队列进行维护，记录所有需要判断关系的歌曲的编号，这样在计算 GCD 时只需要计算队列中的，可以省去所有重复的计算。最后按队列模拟时删除的顺序输出即可。


<details>
<summary>代码</summary>

~~~cpp
#include<bits/stdc++.h>
using namespace std;
int n,T,sum,maxn;
bool v[100010];
struct node{
    int a;
    int l,r;
}a[100010];
struct nod{
    int x,y;
};
vector <int>ans;
signed main(){
    scanf("%d",&T);
    while(T--){
        scanf("%d",&n);
        for(int i=1;i<=n;i++){
            scanf("%d",&a[i].a);
            v[i]=0;
        }
        ans.clear();
        queue<nod>q;
        for(int i=1;i<n;i++){
            q.push(nod{i,i+1});
            a[i].l=i-1;
            a[i].r=i+1;
        }
        a[1].l=n;
        a[n].l=n-1;
        a[n].r=1;
        q.push(nod{n,1});
        sum=0;
        while(!q.empty()){
            int x=q.front().x,y=q.front().y;
            q.pop();
            if(v[x]){
                continue;
            }
            if(__gcd(a[x].a,a[y].a)==1){
                v[y]=1;
                int p=a[y].r;
                a[p].l=x,a[x].r=p;
                q.push(nod{x,p});
                ans.push_back(y);
            }
        }
        printf("%d ",(int)ans.size());
        for(int i=0;i<ans.size();i++){
            printf("%d ",ans[i]);
        }
        putchar('\n');
    }
    return 0;
}
~~~
</details>

## H

没想到赛时被新生做出来了，膜拜orz。

根据题目中建图的性质，我们可以考虑对一个数转化成二进制的形式，并记录每一位的 $1$ 的个数，若在某一位上，有至少 $3$ 个点这一位为 $1$，那么这三个点之间都有一条边，也就是形成了一个三元环，根据数据范围，把所有数转化成二进制后最多有 $64$ 位，根据抽屉原理，当 $n> 128$ 时，一定存在一位，该位为 $1$ 的点的个数超过 $3$，对于其他的情况，因为 $n\le128$，我们直接用 floyd 判最小环即可。

注意，$a_i$ 可能存在为 $0$ 的情况，我们要排除所有为 $0$ 的点，用非 $0$ 的点的个数作为 $n$ 进行判断。



## D

首先看到求最短路径的最大值，最小值最大，妥妥的二分答案。

根据题目中两个点之间连边的边权的性质，不难推断出最大值一定出现在相邻的两个点之间，不相邻的两个点之间可能存在更小的值，即使是有更大的值也不会成为边权。

两个点之间的最短路要么是两个点之间的边直达，要么是找一个最小的点，以最小的点作为中转站在两个点之间折跃，即点 $l$ 和点 $r$ 之间的最短路为 $\min( \min(1,n)\times2,\min(l,r))$。

在二分枚举答案时，假设当前枚举的答案为 $pos$ ，可以考虑设一个**前缀和**和一个**后缀和**，统计 $a_i\times2\le pos$ 的 $i$ 的数量，因为每个 $a_i\times2\le pos$ 的 $i$ 即是我们需要修改的点。

我们从 $1$ 到 $n-1$ 枚举，统计最小的 $pre_{i-1}+sub_{i+2}+ord(a_i<pos)+ord(a_{i+1}<pos)$，判断是否成立即可。


## M

防AK题，看上去这道题有很多不同的做法，我讲一下我的随机化做法：异或哈希。

因为这里只需要考虑区间内的数字的出现情况，不需要考虑他们的先后顺序，所以我们可以用异或运算来计算他们的哈希值。

为了避免异或值重复的情况，我们用**梅森旋转算法**将 $1\sim n$ 赋成一个随机值，用一个数组 $base_i$ 记录前 $i$ 个数的异或和，这样一会在判断该序列是否为一个自排列的时候会方便很多。

我们考虑枚举所有 $1$ 的位置，分别向左和向右搜索能达到的最大值，**用这个最大值当做序列的长度**，设这个最大值为 $m$，并判断序列内的异或和是否与前 $m$ 个元素的异或和相等即可。

为了节省时间复杂度，我们考虑利用前缀和进行优化，用前缀和模拟向左搜索的过程，再将整个序列倒过来模拟向右搜索的过程即可。