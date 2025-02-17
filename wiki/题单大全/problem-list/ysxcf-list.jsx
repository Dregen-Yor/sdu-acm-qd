import React from 'react';
import { Table,Tag ,Typography} from 'antd';
const { Text, Link } = Typography;

const dataSource = [
  {
    key: '1',
    problem: 'Haystacks',
    link: 'https://codeforces.com/contest/2055/problem/E',
    diff: '中等',
    tag: ['好题'],
  },
  {
    key: '2',
    problem: 'Scarecrow',
    link: 'https://codeforces.com/contest/2055/problem/D',
    diff: '中等',
    tag: ['模拟'],
  },
  {
    key: '3',
    problem: 'Balanced Tree',
    link: 'https://codeforces.com/contest/2062/problem/D',
    diff: '中等',
    tag: ['树'],
  },
  {
    key: '4',
    problem: 'Tree Destruction',
    link: 'https://codeforces.com/contest/2050/problem/G',
    diff: '中等',
    tag: ['树'],
  },
  {
    key: '5',
    problem: 'DFS Checker (Hard Version)',
    link: 'https://codeforces.com/contest/2002/problem/D2',
    diff: '中等',
    tag: ['树', '思维'],
  },
  {
    key: '6',
    problem: 'Maximize the Root',
    link: 'https://codeforces.com/contest/1997/problem/D',
    diff: '简单',
    tag: ['树'],
  },
  {
    key: '7',
    problem: 'Paint the Tree',
    link: 'https://codeforces.com/contest/1975/problem/D',
    diff: '简单',
    tag: ['树'],
  },
  {
    key: '8',
    problem: 'Tree Compass',
    link: 'https://codeforces.com/contest/1943/problem/C',
    diff: '中等',
    tag: ['树', '构造'],
  },
  {
    key: '9',
    problem: 'The Game (Easy Version)',
    link: 'https://codeforces.com/contest/2062/problem/E1',
    diff: '中等',
    tag: ['博弈'],
  },
  {
    key: '10',
    problem: 'Everything Nim',
    link: 'https://codeforces.com/contest/1966/problem/C',
    diff: '简单',
    tag: ['博弈'],
  },
  {
    key: '11',
    problem: 'Prefix GCD',
    link: 'https://codeforces.com/contest/2013/problem/E',
    diff: '中等',
    tag: ['数论'],
  },
  {
    key: '12',
    problem: 'Small GCD',
    link: 'https://codeforces.com/contest/1900/problem/D',
    diff: '中等',
    tag: ['数论'],
  },
  {
    key: '13',
    problem: 'Minimize the Difference',
    link: 'https://codeforces.com/contest/2013/problem/D',
    diff: '中等',
    tag: ['二分'],
  },
  {
    key: '14',
    problem: 'Yet Another Monster Fight',
    link: 'https://codeforces.com/contest/1901/problem/D',
    diff: '中等',
    tag: ['二分'],
  },
  {
    key: '15',
    problem: 'Med-imize',
    link: 'https://codeforces.com/contest/1993/problem/D',
    diff: '中等',
    tag: ['中位数'],
  },
  {
    key: '16',
    problem: 'Unique Median',
    link: 'https://codeforces.com/problemset/problem/2056/D',
    diff: '中等',
    tag: ['中位数', '好题'],
  },
  {
    key: '17',
    problem: 'Determine Winning Islands in Race',
    link: 'https://codeforces.com/contest/1998/problem/D',
    diff: '中等',
    tag: ['图论'],
  },
  {
    key: '18',
    problem: 'Time Travel',
    link: 'https://codeforces.com/contest/1887/problem/B',
    diff: '中等',
    tag: ['图论'],
  },
  {
    key: '19',
    problem: 'Eliminating Balls With Merging (Easy Version)',
    link: 'https://codeforces.com/contest/1998/problem/E1',
    diff: '中等',
    tag: ['贪心', '消除重复计算'],
  },
  {
    key: '20',
    problem: 'Shrink-Reverse',
    link: 'https://codeforces.com/contest/1923/problem/F',
    diff: '困难',
    tag: ['后缀数组'],
  },
  {
    key: '21',
    problem: 'Ones and Twos',
    link: 'https://codeforces.com/contest/1896/problem/D',
    diff: '简单',
    tag: ['数据结构'],
  },
  {
    key: '22',
    problem: 'Last Man Standing',
    link: 'https://codeforces.com/contest/1879/problem/F',
    diff: '困难',
    tag: ['数据结构'],
  },
  {
    key: '23',
    problem: 'Most Different Tree',
    link: 'https://codeforces.com/contest/1867/problem/F',
    diff: '困难',
    tag: ['哈希'],
  },
  {
    key: '24',
    problem: 'Flower-like Pseudotree',
    link: 'https://codeforces.com/contest/1869/problem/F',
    diff: '困难',
    tag: ['分类讨论', '恶心'],
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