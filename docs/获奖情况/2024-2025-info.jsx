import React from 'react';
import { Table,Tag } from 'antd';
const dataSource = [
  {
    key: '1',
    teamname: '电话微波炉（暂定）',
    name1: '詹靖杰',
    name2: '宿子腾',
    name3: '董家豪',
    medal: 'silver',
    address: '南京站',
  },
  {
    key: '2',
    teamname: 'SDU-TCS',
    name1: '王天竹',
    name2: '袁胜利',
    name3: '禚安垣',
    medal: 'gold',
    address: '杭州站',
  },
  {
    key: '3',
    teamname: '诺曼底上岸',
    name1: '孙更欣',
    name2: '高士轩',
    name3: '于瑞灏',
    medal: 'bronze',
    address: '杭州站',
  },
  {
    key: '4',
    teamname: 'SDU-TCS',
    name1: '王天竹',
    name2: '袁胜利',
    name3: '禚安垣',
    medal: 'silver',
    address: '昆明站',
  },
  {
    key: '5',
    teamname: '电话微波炉（暂定）',
    name1: '詹靖杰',
    name2: '宿子腾',
    name3: '董家豪',
    medal: 'gold',
    address: '昆明站',
  },
  {
    key: '6',
    teamname: '海鸥灭火器',
    name1: '苏苏',
    name2: '王艺臻',
    name3: '于斐',
    medal: 'silver',
    address: '昆明站',
  },
  {
    key: '7',
    teamname: '应用随机过程',
    name1: '李玉庭',
    name2: '苏岳',
    name3: '王源鑫',
    medal: 'silver',
    address: '沈阳站',
  },
  {
    key: '8',
    teamname: '应用随机过程',
    name1: '李玉庭',
    name2: '苏岳',
    name3: '王源鑫',
    medal: 'bronze',
    address: '香港站',
  },
  {
    key: '9',
    teamname: 'Beaver Hunting Squad',
    name1: '乐恩玮',
    name2: '郭荣翔',
    name3: '叶世昕',
    medal: 'bronze',
    address: '香港站',
  },
  {
    key: '10',
    teamname: '老登滑冰场',
    name1: '黄垚挺',
    name2: '李梓阳',
    name3: '于斐',
    medal: 'silver',
    address: '上海站',
  },
  {
    key: '11',
    teamname: '猫学长，靠谱',
    name1: '钟以楠',
    name2: '陈方航',
    name3: '刘智豪',
    medal: 'silver',
    address: '上海站',
  },
];

const columns = [
  {
    title: '队名',
    dataIndex: 'teamname',
    key: 'teamname',
    width: '30%',
  },
  {
    title: '成员1',
    dataIndex: 'name1',
    key: 'name1',
    width: '8%',
  },
  {
    title: '成员2',
    dataIndex: 'name2',
    key: 'name2',
    width: '8%',
  },
  {
    title: '成员3',
    dataIndex: 'name3',
    key: 'name3',
    width: '8%',
  },
  {
    title: '奖项',
    dataIndex: 'medal',
    key: 'medal',
    width: '15%',
    align: 'center',
    render: (_) => {
      let color, text;
      if (_ === 'gold') {
        color = '#ffd700';
        text = '金牌'
      }
      else if (_ === 'silver') {
        color = '#c0c0c0';
        text = '银牌';
      }
      else if (_ === 'bronze') {
        color = '#b87333';
        text = '铜牌';
      }
      return (
        <Tag color={color} style={{ width: '50%', textAlign: 'center',fontSize:16 }} >
          {text}
        </Tag>
      )
    },
    filters: [
      {
        text: '金牌',
        value: 'gold',
      },
      {
        text: '银牌',
        value: 'silver',
      },
      {
        text: '铜牌',
        value: 'bronze',
      },
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.medal === value,
  },
  {
    title: '赛站',
    dataIndex: 'address',
    key: 'address',
    filters: [
      {
        text: '南京站',
        value: '南京站',
      },
      {
        text: '杭州站',
        value: '杭州站',
      },
      {
        text: '昆明站',
        value: '昆明站',
      },
      {
        text: '沈阳站',
        value: '沈阳站',
      },
      {
        text: '香港站',
        value: '香港站',
      },
      {
        text: '上海站',
        value: '上海站',
      },
      {
        text: '成都站',
        value: '成都站',
      }
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.address === value,
  },
];

export { dataSource, columns };