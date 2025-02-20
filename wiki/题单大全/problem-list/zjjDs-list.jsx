
import React from 'react';
import { Table, Tag, Typography } from 'antd';
const { Text, Link } = Typography;

const dataSource2 = [
  {
    key: '1',
    problem: 'Static RMQ',
    link: 'https://judge.yosupo.jp/problem/staticrmq',
    diff: '模板',
    tag: ['ST表','线段树'],
  },
  {
    key: '2',
    problem: '由乃救爷爷',
    link: 'https://www.luogu.com.cn/problem/P3793',
    diff: '科技',
    tag: ['O(n)-O(1)RMQ','四毛子', '笛卡尔树'],
  },
  {
    key: '3',
    problem: 'Lowest Common Ancestor',
    link: 'https://judge.yosupo.jp/problem/lca',
    diff: '模板',
    tag: ['LCA', 'ST表','树剖'],
  },
  {
    key: '4',
    problem: '敌兵布阵',
    link: 'https://acm.hdu.edu.cn/showproblem.php?pid=1166',
    diff: '简单',
    tag: ['线段树','树状数组','单点修区间求和'],
  },
  {
    key: '5',
    problem: 'I Hate It',
    link: 'https://acm.hdu.edu.cn/showproblem.php?pid=1754',
    diff: '简单',
    tag: ['线段树','单点修区间max'],
  },
  {
    key: '6',
    problem: 'A Simple Problem with Integers',
    link: 'http://poj.org/problem?id=3468',
    diff: '简单',
    tag: ['线段树','懒标记','区间加区间求和'],
  },
  {
    key: '7',
    problem: 'GSS5 - Can you answer these queries V(这是一个系列，都可以去做)',
    link: 'https://www.spoj.com/problems/GSS5/en/',
    diff: '中等',
    tag: ['线段树','信息合并'],
  },
  {
    key: '8',
    problem: 'Segment Add Get Min',
    link: 'https://judge.yosupo.jp/problem/segment_add_get_min',
    diff: '模板',
    tag: ['李超线段树'],
  },
  {
    key: '9',
    problem: '数颜色/维护队列',
    link: 'https://www.luogu.com.cn/problem/P1903',
    diff: '模板',
    tag: ['离线','莫队'],
  },
];

const columns2 = [
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

export { dataSource2, columns2 };
