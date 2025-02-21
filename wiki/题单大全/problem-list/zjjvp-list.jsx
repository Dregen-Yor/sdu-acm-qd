
import React from 'react';
import { Table, Tag, Typography } from 'antd';
const { Text, Link } = Typography;

const dataSource2 = [
  {
    key: '1',
    problem: 'ICPC2024 Shenyang I. Good Partitions',
    link: 'https://codeforces.com/gym/105486/problem/I',
    diff: '银牌中等',
    tag: ['线段树'],
  },
  {
    key: '2',
    problem: 'ICPC2024 Shenyang G. Expanding Array',
    link: 'https://codeforces.com/gym/105486/problem/G',
    diff: '铜牌中等',
    tag: ['位运算','找性质'],
  },
  {
    key: '3',
    problem: 'ICPC2024 Shenyang E. Disrupting Communications',
    link: 'https://codeforces.com/gym/105486/problem/E',
    diff: '银牌困难',
    tag: ['树上DP', 'DSU on Tree','换根 DP'],
  },
  {
    key: '4',
    problem: 'ICPC2024 Shanghai B. Barkley III',
    link: 'https://codeforces.com/gym/105657/problem/B',
    diff: '银牌困难',
    tag: ['线段树','位运算'],
  }
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

export { dataSource, columns };
