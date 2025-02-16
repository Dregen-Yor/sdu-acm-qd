import React from 'react';
import { Table, Tag, Typography } from 'antd';
const { Text, Link } = Typography;

const dataSource = [
  {
    key: '1',
    problem: 'Floyd',
    link: 'https://www.luogu.com.cn/problem/B3647',
    diff: '',
    tag: ['n^3或n^2logn', '复杂度计算全源最短路'],
  },
  {
    key: '2',
    problem: '质数筛',
    link: 'https://www.luogu.com.cn/problem/P5736',
    diff: '',
    tag: ['埃氏筛', '欧拉筛'],
  },
  {
    key: '3',
    problem: '求第 k 小的数',
    link: 'https://www.luogu.com.cn/problem/P1923',
    diff: '',
    tag: ['分治', '快速排序思想'],
  },
  {
    key: '4',
    problem: '队列',
    link: 'https://www.luogu.com.cn/problem/B3616',
    diff: '',
    tag: ['STL queue'],
  },
  {
    key: '5',
    problem: '最长上升子序列',
    link: 'https://www.luogu.com.cn/problem/B3637',
    diff: '',
    tag: ['动态规划'],
  },
  {
    key: '6',
    problem: '单源最短路径（弱化版）',
    link: 'https://www.luogu.com.cn/problem/P3371',
    diff: '',
    tag: ['图论基础算法', 'dijkstra'],
  },
  {
    key: '7',
    problem: '单源最短路径（标准版）',
    link: 'https://www.luogu.com.cn/problem/P4779',
    diff: '',
    tag: ['图论基础算法', 'dijkstra'],
  },
  {
    key: '8',
    problem: '堆',
    link: 'https://www.luogu.com.cn/problem/P3378',
    diff: '',
    tag: ['STL priority_queue'],
  },
  {
    key: '9',
    problem: '最近公共祖先（LCA）',
    link: 'https://www.luogu.com.cn/problem/P3379',
    diff: '',
    tag: ['nlogn', '倍增'],
  },
  {
    key: '10',
    problem: '【模板】ST 表 && RMQ 问题',
    link: 'https://www.luogu.com.cn/problem/P3865',
    diff: '',
    tag: ['O(1)查询', '倍增'],
  },
  {
    key: '11',
    problem: '单调栈',
    link: 'https://www.luogu.com.cn/problem/P5788',
    diff: '',
    tag: ['单调性'],
  },
  {
    key: '12',
    problem: '传递闭包',
    link: 'https://www.luogu.com.cn/problem/B3611',
    diff: '',
    tag: ['传递闭包', 'Floyd'],
  },
  {
    key: '13',
    problem: '最长公共子序列',
    link: 'https://www.luogu.com.cn/problem/P1439',
    diff: '',
    tag: ['动态规划', '最长上升子序列'],
  },
  {
    key: '14',
    problem: '石子合并',
    link: 'https://www.luogu.com.cn/problem/P1880',
    diff: '',
    tag: ['区间动态规划'],
  },
  {
    key: '15',
    problem: 'Nim 游戏',
    link: 'https://www.luogu.com.cn/problem/P2197',
    diff: '',
    tag: ['博弈论'],
  },
  {
    key: '16',
    problem: '强连通分量',
    link: 'https://www.luogu.com.cn/problem/B3609',
    diff: '',
    tag: ['tarjan'],
  },
  {
    key: '17',
    problem: '缩点',
    link: 'https://www.luogu.com.cn/problem/P3387',
    diff: '',
    tag: ['tarjan', '强连通分量'],
  },
  {
    key: '18',
    problem: '割点（割顶）',
    link: 'https://www.luogu.com.cn/problem/P3388',
    diff: '',
    tag: ['tarjan', '强连通分量'],
  },
  {
    key: '19',
    problem: '线段树 1',
    link: 'https://www.luogu.com.cn/problem/P3372',
    diff: '',
    tag: ['线段树'],
  },
  {
    key: '20',
    problem: '线段树 2',
    link: 'https://www.luogu.com.cn/problem/P3373',
    diff: '',
    tag: ['线段树', 'lazy-tag'],
  },
  {
    key: '21',
    problem: '树状数组 1',
    link: 'https://www.luogu.com.cn/problem/P3374',
    diff: '',
    tag: ['树状数组'],
  },
  {
    key: '22',
    problem: '树状数组 2',
    link: 'https://www.luogu.com.cn/problem/P3368',
    diff: '',
    tag: ['树状数组'],
  },
  {
    key: '23',
    problem: '差分约束',
    link: 'https://www.luogu.com.cn/problem/P5960',
    diff: '',
    tag: ['dijkstra', '图论'],
  },
  {
    key: '24',
    problem: '网络最大流',
    link: 'https://www.luogu.com.cn/problem/P3376',
    diff: '',
    tag: ['网络最大流', '图论'],
  },
  {
    key: '25',
    problem: '左偏树/可并堆',
    link: 'https://www.luogu.com.cn/problem/P3377',
    diff: '',
    tag: ['左偏树', '可并堆'],
  },
];

const columns = [
  {
    title: '题目',
    dataIndex: 'problem',
    key: 'problem',
    width: '30%',
    render: problem => (
      <Text strong>
        {problem}
      </Text>
    )
  },
  {
    title: '链接',
    dataIndex: 'link',
    key: 'link',
    width: '40%',
    render: link => (
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    )
  },
  {
    title: '难度',
    dataIndex: 'diff',
    key: 'diff',
    width: '10%',
    render: diff => (
      <Text type='danger' style={{ display: 'flex', justifyContent: 'center' }}>
        {diff}
      </Text>
    )
  },
  {
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    width: '30%',
    render: tag => (
      <>
        {tag.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
]

export { dataSource, columns };