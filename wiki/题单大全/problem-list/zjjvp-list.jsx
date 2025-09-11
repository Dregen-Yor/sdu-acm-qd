
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
  },
  {
    key: '5',
    problem: '21 济南 D Arithmetic Sequence',
    link: 'https://qoj.ac/contest/1997/problem/10776',
    diff: '银牌中等',
    tag: ['线凸函数','三分/凸包'],
  },
  {
    key: '6',
    problem: '21 济南 E Insidemen',
    link: 'https://qoj.ac/contest/1997/problem/10777',
    diff: '银牌困难',
    tag: ['容斥'],
  },
  {
    key: '7',
    problem: '21 济南 G Happy Alice',
    link: 'https://qoj.ac/contest/1997/problem/10779',
    diff: '银牌困难',
    tag: ['莫队'],
  },
  {
    key: '8',
    problem: '21 济南 J Determinant',
    link: 'https://qoj.ac/contest/1997/problem/10782',
    diff: '银牌简单',
    tag: ['行列式','妙妙'],
  },
  {
    key: '9',
    problem: '21 济南 L Strange Series',
    link: 'https://qoj.ac/contest/1997/problem/10784',
    diff: '银牌困难',
    tag: ['多项式','贝尔数'],
  },
  {
    key: '10',
    problem: 'Book Sorting',
    link: 'https://codeforces.com/contest/2073/problem/K',
    diff: '银牌困难',
    tag: ['决策单调性，类莫队'],
  },
  {
    key: '11',
    problem: '24 上海 C Conquer the Multiples',
    link: 'https://qoj.ac/contest/1913/problem/9039',
    diff: '银牌简单',
    tag: ['分讨','博弈'],
  },
  {
    key: '12',
    problem: '24 上海 G Geometry Task',
    link: 'https://qoj.ac/contest/1913/problem/9043',
    diff: '银牌简单',
    tag: ['二分'],
  },
  {
    key: '13',
    problem: '24 上海 J Just-in-Time Render Analysis',
    link: 'https://qoj.ac/contest/1913/problem/9046',
    diff: '银牌困难',
    tag: ['扫描线建图','线段树','树剖','大码量'],
  },
  {
    key: '14',
    problem: '3rd UCup Stage18: Southeastern Europe C Duloc Network',
    link: 'https://qoj.ac/problem/9783',
    diff: '银牌困难',
    tag: ['二分','交互'],
  },
  {
    key: '15',
    problem: '3rd UCup Stage24: Poland H High Jump',
    link: 'https://qoj.ac/problem/9966',
    diff: '银牌简单',
    tag: ['斜率优化'],
  },
  {
    key: '16',
    problem: '3rd UCup Stage6: Osijek B Square Locator',
    link: 'https://qoj.ac/problem/9168',
    diff: '铜牌中等',
    tag: ['数学'],
  },
  {
    key: '17',
    problem: '24 郑州 M Rejection Sampling',
    link: 'https://codeforces.com/gym/105632/problem/M',
    diff: '银牌中等',
    tag: ['二分'],
  },
  {
    key: '18',
    problem: '24 郑州 C Middle Point',
    link: 'https://codeforces.com/gym/105632/problem/C',
    diff: '银牌中等',
    tag: ['妙妙','构造'],
  },
  {
    key: '19',
    problem: '24 郑州 G Same Sum',
    link: 'https://codeforces.com/gym/105632/problem/G',
    diff: '金牌简单',
    tag: ['哈希','线段树'],
  },
  {
    key: '20',
    problem: '23 西安 F An Easy Counting Problem',
    link: 'https://codeforces.com/gym/105471/problem/F',
    diff: '金牌简单',
    tag: ['卢卡斯定理，多项式'],
  },
  {
    key: '21',
    problem: '23 西安 A An Easy Geometry Problem',
    link: 'https://codeforces.com/gym/105471/problem/A',
    diff: '银牌困难',
    tag: ['线段树','哈希'],
  },
  {
    key: '22',
    problem: 'arc137D Prefix XORs',
    link: 'https://atcoder.jp/contests/arc137/tasks/arc137_d?lang=en',
    diff: '银牌困难',
    tag: ['贡献拆分','组合数','卢卡斯定理','高维前缀和'],
  },
  {
    key: '23',
    problem: 'CF407D Largest Submatrix 3',
    link: 'https://codeforces.com/problemset/problem/407/D',
    diff: '银牌中等',
    tag: ['DP 优化','信息复用'],
  },
  {
    key: '24',
    problem: 'abc241_g Round Robin',
    link: 'https://atcoder.jp/contests/abc241/tasks/abc241_g?lang=en',
    diff: '银牌中等',
    tag: ['网络流'],
  },
  {
    key: '25',
    problem: 'abc241_g Round Robin',
    link: 'https://atcoder.jp/contests/abc421/tasks/abc421_g',
    diff: '银牌中等',
    tag: ['网络流'],
  },
  {
    key: '26',
    problem: '20 绵阳 K Knowledge is Power',
    link: 'https://qoj.ac/contest/1838/problem/9724',
    diff: '铜牌中等',
    tag: ['分讨','特解'],
  },
  {
    key: '27',
    problem: '20 绵阳 H Hide and Seek',
    link: 'https://qoj.ac/contest/1838/problem/9721',
    diff: '银牌困难',
    tag: ['分讨','几何'],
  },
  {
    key: '28',
    problem: '20 绵阳 G Game of Cards',
    link: 'https://qoj.ac/contest/1838/problem/9720',
    diff: '银牌中等',
    tag: ['分讨','博弈'],
  },
  {
    key: '29',
    problem: '20 绵阳 L Lottery',
    link: 'https://qoj.ac/contest/1838/problem/9725',
    diff: '银牌中等',
    tag: ['记忆化搜索'],
  },
  {
    key: '30',
    problem: '21 桂林 B A Plus B Problem',
    link: 'https://codeforces.com/gym/103409/problem/B',
    diff: '银牌中等',
    tag: ['分讨','线段树'],
  },
  {
    key: '31',
    problem: '21 桂林 F Illuminations II',
    link: 'https://codeforces.com/gym/103409/problem/F',
    diff: '银牌困难',
    tag: ['计算几何'],
  },
  {
    key: '32',
    problem: '23 合肥 D Balanced Array',
    link: 'https://codeforces.com/gym/103409/problem/F',
    diff: '银牌困难',
    tag: ['计哈希','无单调性下的‘双指针’ '],
  },
  {
    key: '33',
    problem: '23 合肥 G Streak Manipulation',
    link: 'https://codeforces.com/gym/103409/problem/F',
    diff: '银牌中等',
    tag: ['二分','DP'],
  },
  {
    key: '34',
    problem: '23 合肥 K Campus Partitio',
    link: 'https://codeforces.com/gym/104857/problem/K',
    diff: '银牌困难',
    tag: ['树形DP','线段树合并'],
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

export { dataSource2, columns2 };
