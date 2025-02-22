---
slug: 线下第一场题解
title: 线下第一场题解
authors: [sgx]
tags: [solution]
---


# 线下第一场题解

这场的题目感觉出的还是很不错的，很多经典套路题和模板题的修改，感觉至少 A,B,D,E,H,I,L都是可做题，下面简单讲一下题目：

## A

[原题链接](https://codeforces.com/contest/1945/problem/A)

内向型选手直接自己住一屋就好，不用考虑。

外向型选手必须住三人间，首先满足所有外向型选手，如果不是 3 的倍数就从综合型选手里补，这题就结束了。

## B

[原题链接](https://codeforces.com/contest/1946/problem/B)

最大子段和模板，找出最大子段和并一直在最大子段和的末尾插入最大子段和，之后最大值翻倍，这样一直加 $k$ 次。

注意子数组可以为空。

## L

[原题链接](https://codeforces.com/contest/1923/problem/C)

这道题可以考虑在原数据上变化，首先大于等于 $2$ 的数可以在原基础上任意变大或者减小，我们需要考虑其中为 $1$ 的值，因为 $1$ 只能增大不能减小。

用一个前缀和维护区间 $1$ 的个数，另一个前缀和维护区间内所有数的和。

每次判断所有数的和能不能令所有的 $1$ 增大即可。

## I

[原题链接](https://codeforces.com/contest/1896/problem/C)

也是一道简单题，但赛时似乎一直没人发现。

将数组 $a_i$ 与 $b_i$ 排序，之后令 $a$ 的后 $x$ 项与 $b$ 的前 $x$ 项对比，再令 $a$ 的前 $n-x$ 项与 $b$ 的后 $n-x$ 项对比，判断是否满足条件即可。

## E

[原题链接](https://codeforces.com/contest/1946/problem/C)

二分答案题。

通过二分枚举答案 $x$。

每次 dfs 遍历树，贪心，若当前子树的节点和已经大于 $x$（去掉已经分离出去的子树），则将该子树分离出来。判断分离出来的子树的个数是否大于 $k$ 即可。

<details>
    <summary>代码</summary>
    ~~~cpp
    #include<bits/stdc++.h>
    #define N 200010
    #define ls x<<1
    #define rs x<<1|1
    #define MID ((l+r)>>1)
    #define mkp(a,b) make_pair(a,b)
    // mt19937 rnd(chrono::steady_clock::now().time_since_epoch().count());
    //#define int long long
    //#define P pair<int,int>
    using namespace std;
    vector<int>G[N];
    int T=1,n,k,cnt;
    int dfs(int x,int fa,int ans){
        int res=1;
        for(int to:G[x]){
            if(to==fa)continue;
            res+=dfs(to,x,ans);
        }
        if(res>=ans){
            cnt++;
            return 0;
        }
        return res;
    }
    bool check(int x){
        cnt=0;
        dfs(1,0,x);
        if(cnt>k){
            return true;
        }
        return false;
    }
    void solve(){
        int l=0,r=100001;
        int ans=0;
        while(l<=r){
            if(check(MID)){
                ans=MID;
                l=MID+1;
            }
            else{
                r=MID-1;
            }
        }
        printf("%d\n",ans);
    }
    signed main(){
        scanf("%d",&T);
        while(T--){
            scanf("%d%d",&n,&k);
            for(int i=1;i<=n;i++)G[i].clear();
            for(int i=1;i<n;i++){
                int u,v;
                scanf("%d%d",&u,&v);
                G[u].push_back(v);
                G[v].push_back(u);
            }
            solve();
        }
        return 0;
    }

    ~~~
</details>

## D

[原题链接](https://codeforces.com/contest/1886/problem/C)

单调栈模板。

我们考虑当 $s_i>s_{i+1}$ 时，删掉 $s_i$ 会使字符串的字典序变小。

根据字典序的定义，我们每次删掉最左边的满足上述条件的 $i$，得到的下一个字符串的字典序是所有的可能的情况中最小的。

朴素做法是 $O(n^2)$ 的，所以我们用栈来模拟位置 $pos$ 所在的字符串的情况，遇到上述情况就将栈中最后一个字符串弹出即可。

<details>

    <summary>代码</summary>
    ~~~cpp
#include<bits/stdc++.h>
#define N 1000010
#define ls x<<1
#define rs x<<1|1
#define MID ((l+r)>>1)
#define mkp(a,b) make_pair(a,b)
// mt19937 rnd(chrono::steady_clock::now().time_since_epoch().count());
#define int long long
//#define P pair<int,int>
using namespace std;
char s[N];
bool v[N];
vector<int> p[26];
int T=1,n,pos;
void init(){
    for(int i=0;i<26;i++) p[i].clear();
    memset(v,0,sizeof(v));
}
signed main(){
    scanf("%lld",&T);
    while(T--){
        scanf("%s",s+1);
        n=strlen(s+1);
        scanf("%lld",&pos);
        init();
        int round=0,siz=n;
        stack <int> st;
        for(int i=1;i<=n;i++){
            while(!st.empty()&&pos>siz&&st.top()>s[i]){
                st.pop();
                pos-=siz;
                // cout<<pos<<endl;
                siz--;
                round++;
            }
            st.push(s[i]);
        }
        while(pos>siz){
            pos-=siz;
            st.pop();
            siz--;
            round++;
        }
        while(st.size()>pos){
            st.pop();
        }
        putchar(st.top());
    }
    return 0;
}

    ~~~
</details>

## H

[原题链接](https://codeforces.com/contest/1891/problem/F)

可以考虑倒过来处理查询。

倒过来之后把插入点改为将点的值修改为 $0$。

用树剖和线段树维护子树和即可。

## F

一道 $\mathcal O(n^4)$ 的 DP。

考虑设置状态 $dp_{i,j,k}$，其中 $i$ 表示前 $i$ 个瓶子，$j$ 表示其中选择了 $j$ 个瓶子作为容器，$k$ 表示剩余瓶子的容量。状态转移方程如下：

$$dp_{i,j+1,k+b_i-a_i}=\min{dp_{i-1,j,k}}$$

$$dp_{i,j,k-a_i}=\min{dp_{i-1,j,k-a_i}}$$

<details>

    <summary>代码</summary>
    ~~~cpp
    #include<bits/stdc++.h>
    #define M 20000
    #define N 200010
    #define ls x<<1
    #define rs x<<1|1
    #define MID ((l+r)>>1)
    #define mkp(a,b) make_pair(a,b)
    // mt19937 rnd(chrono::steady_clock::now().time_since_epoch().count());
    //#define int long long
    //#define P pair<int,int>
    using namespace std;
    int T=1,n,m;
    vector<int>a,b;
    int dp[2][110][M+10];
    signed main(){
        // scanf("%d",&T);
        while(T--){
            scanf("%d",&n);
            a.resize(n+1);
            b.resize(n+1);
            for(int i=1;i<=n;i++){
                scanf("%d",&a[i]);
            }
            for(int i=1;i<=n;i++){
                scanf("%d",&b[i]);
                b[i]-=a[i];
            }
            for(int i=0;i<2;i++)for(int j=0;j<=n;j++)for(int k=0;k<=20000;k++) dp[i][j][k]=1e9;
            dp[0][0][10000]=0;
            for(int i=1;i<=n;i++){
                int x=i&1;
                for(int j=0;j<=n;j++){
                    for(int k=0;k<=M;k++){
                        dp[x][j][k]=1e9;
                    }
                }
                for(int j=0;j<=n;j++){
                    for(int k=0;k<=M;k++){
                        if(k+b[i]<=M){
                            dp[x][j+1][k+b[i]]=min(dp[x][j+1][k+b[i]],dp[x^1][j][k]);
                        }
                        if(k-a[i]>=0){
                            dp[x][j][k-a[i]]=min(dp[x][j][k-a[i]],dp[x^1][j][k]+a[i]);
                        }
                    }
                }
            }
            for(int i=1;i<=n;i++){
                int ans=1e9;
                for(int j=10000;j<=M;j++){
                    ans=min(ans,dp[n&1][i][j]);
                }
                if(ans<1e9){
                    printf("%d %d\n",i,ans);
                    return 0;
                }
            }
        }
        return 0;
    }
    ~~~
</details>

## C

[原题连接](https://codeforces.com/gym/105486/problem/E)

24年成都站原题。

