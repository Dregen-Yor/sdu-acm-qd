
import React from 'react';
import { Table, Tag, Typography } from 'antd';
const { Text, Link } = Typography;

const dataSource = [
  {
    key: '1',
    problem: '一起走很长的路！',
    link: 'https://ac.nowcoder.com/acm/contest/95334/E',
    diff: '1800',
    tag: ['前缀和', 'ST表'],
  },
  {
    key: '2',
    problem: '小L的min-max问题',
    link: 'https://ac.nowcoder.com/acm/contest/95337/H',
    diff: '1900',
    tag: ['排列组合', 'ST表'],
  },
  {
    key: '3',
    problem: '小鸡的排列构造的checker',
    link: 'https://ac.nowcoder.com/acm/contest/95338/I',
    diff: '1800',
    tag: ['离线', '树状数组'],
  },
  {
    key: '4',
    problem: '硝基甲苯之魇',
    link: 'https://ac.nowcoder.com/acm/contest/95323/K',
    diff: '2400',
    tag: ['ST表','GCD','前缀和','二分'],
  },
  {
    key: '5',
    problem: '智乃的Notepad',
    link: 'https://ac.nowcoder.com/acm/contest/95335/D',
    diff: '2300',
    tag: ['离线','树状数组','ST表','字典树'],
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
