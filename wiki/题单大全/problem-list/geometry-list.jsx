import React from 'react';
import { Table,Tag ,Typography} from 'antd';
const { Text, Link } = Typography;

const dataSource = [
  {
    key: '1',
    problem: 'Balloon Darts',
    link: 'https://qoj.ac/problem/7653',
    diff: '不需板子',
    tag: ['几何'],
  },
  {
    key: '2',
    problem: 'Convex Checker',
    link: 'https://qoj.ac/problem/7730',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '3',
    problem: 'Almost Convex',
    link: 'https://qoj.ac/problem/7906',
    diff: '困难',
    tag: ['几何'],
  },
  {
    key: '4',
    problem: 'Computational Geometry',
    link: 'https://qoj.ac/problem/6676',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '5',
    problem: 'Concave Hull',
    link: 'https://qoj.ac/contest/1817/problem/9520',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '6',
    problem: 'Ordainer of Inexorable Judgment',
    link: 'https://qoj.ac/contest/1828/problem/9576',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '7',
    problem: 'Two Ants',
    link: 'https://codeforces.com/gym/102823/problem/L',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '8',
    problem: 'Two Walls',
    link: 'https://qoj.ac/problem/5067',
    diff: '困难',
    tag: ['几何'],
  },
  {
    key: '9',
    problem: 'Panda Preserve',
    link: 'https://qoj.ac/problem/2433',
    diff: '困难',
    tag: ['几何'],
  },
  {
    key: '10',
    problem: 'Airport Construction',
    link: 'https://qoj.ac/problem/2767',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '11',
    problem: 'Building Boundaries',
    link: 'https://qoj.ac/problem/3922',
    diff: '不需板子',
    tag: ['几何'],
  },
  {
    key: '12',
    problem: 'Disc District',
    link: 'https://qoj.ac/problem/4991',
    diff: '不需板子',
    tag: ['几何'],
  },
  {
    key: '13',
    problem: 'AMPPZ in the times of disease',
    link: 'https://qoj.ac/problem/4423',
    diff: '不需板子',
    tag: ['几何'],
  },
  {
    key: '14',
    problem: 'Farm',
    link: 'https://qoj.ac/problem/7947',
    diff: '不需板子',
    tag: ['几何'],
  },
  {
    key: '15',
    problem: 'Clearing Space',
    link: 'https://qoj.ac/problem/7842',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '16',
    problem: 'Glacier Travel',
    link: 'https://qoj.ac/problem/7846',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '17',
    problem: 'Christmas Sky',
    link: 'https://qoj.ac/problem/7934',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '18',
    problem: 'Domes',
    link: 'https://qoj.ac/problem/2162',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '19',
    problem: 'Health in Hazard',
    link: 'https://codeforces.com/gym/104736/problem/H',
    diff: '简单',
    tag: ['几何'],
  },
  {
    key: '20',
    problem: 'H-Shaped Figures',
    link: 'https://qoj.ac/problem/7803',
    diff: '困难',
    tag: ['几何'],
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