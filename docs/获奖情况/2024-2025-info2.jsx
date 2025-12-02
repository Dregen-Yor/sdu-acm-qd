import React from 'react';
import { Table,Tag } from 'antd';
const dataSource = [
  {
    key: '1',
    teamname: '应用随机过程',
    name1: '孔轲祎',
    name2: '李玉庭',
    name3: '王源鑫',
    medal: 'silver',
    address: '武汉邀请赛',
  },
  {
    key: '2',
    teamname: '教练，我想签到',
    name1: '钟以楠',
    name2: '刘智豪',
    name3: '陈方航',
    medal: 'silver',
    address: '武汉邀请赛',
  },
  {
    key: '3',
    teamname: '圆一定要是圆形的，提交一定要是AC的',
    name1: '孙更欣',
    name2: '高士轩',
    name3: '于瑞灏',
    medal: 'silver',
    address: '西安邀请赛',
  },
  {
    key: '4',
    teamname: '河狸猎捕队',
    name1: '乐恩玮',
    name2: '郭荣翔',
    name3: '叶世昕',
    medal: 'silver',
    address: '西安邀请赛',
  },
  {
    key: '5',
    teamname: '嘎嘎上分大队',
    name1: '史洪舰',
    name2: '张杰',
    name3: '刘易哲',
    medal: 'bronze',
    address: '西安邀请赛',
  },
  {
    key: '6',
    teamname: '电话微波炉（暂定）',
    name1: '詹靖杰',
    name2: '宿子腾',
    name3: '董家豪',
    medal: 'silver',
    address: '北京邀请赛',
  },
  {
    key: '7',
    teamname: '想吃冰工厂',
    name1: '毛洋洋',
    name2: '侯佳昊',
    name3: '孙豪阳',
    medal: 'silver',
    address: '东北邀请赛',
  },
  {
    key: '8',
    teamname: '1010011010演都不演了',
    name1: '彭震楠',
    name2: '张美伦',
    name3: '王炳旭',
    medal: 'none',
    address: '东北邀请赛',
  },
  {
    key: '9',
    teamname: '签到人',
    name1: '史博文',
    name2: '徐聚礼',
    name3: '张林翰',
    medal: 'silver',
    address: '东北邀请赛',
  },
  {
    key: '10',
    teamname: '伤口很浅，莫要起身了',
    name1: '张讯',
    name2: '彭麟翔',
    name3: '刘逸宁',
    medal: 'bronze',
    address: '东北邀请赛',
  },
  {
    key: '11',
    teamname: '梦想家Sleeping Thinkers',
    name1: '黄志强',
    name2: '黄天泽',
    name3: '刘慧剑',
    medal: 'bronze',
    address: '广西邀请赛',
  },
  {
    key: '12',
    teamname: 'ac不了打铁的我是不是m队',
    name1: '徐馨兰',
    name2: '邵雨凡',
    name3: '袁洪坤',
    medal: 'silver',
    address: '广西邀请赛',
  },
  {
    key: '13',
    teamname: '回到坠机前',
    name1: '王涵',
    name2: '荆昱熹',
    name3: '王成意',
    medal: 'silver',
    address: '广西邀请赛',
  },
  {
    key: '14',
    teamname: '电话微波炉（暂定）',
    name1: '詹靖杰',
    name2: '宿子腾',
    name3: '董家豪',
    medal: 'gold',
    address: '山东省赛',
  },
  {
    key: '15',
    teamname: '河狸猎捕队',
    name1: '乐恩玮',
    name2: '郭荣翔',
    name3: '叶世昕',
    medal: 'gold',
    address: '山东省赛',
  },
  {
    key: '16',
    teamname: '圆一定要是圆形的',
    name1: '孙更欣',
    name2: '高士轩',
    name3: '于瑞灏',
    medal: 'gold',
    address: '山东省赛',
  },
  {
    key: '17',
    teamname: 'AC是检验真理的唯一标准',
    name1: '罗浩铭',
    name2: '林怡炜',
    name3: '杨昊霖',
    medal: 'gold',
    address: '山东省赛',
  },
  {
    key: '18',
    teamname: '教练，我想签到',
    name1: '危宏毅',
    name2: '史洪舰',
    name3: '刘易哲',
    medal: 'silver',
    address: '山东省赛',
  },
  {
    key: '19',
    teamname: 'AC是检验真理的唯一标准',
    name1: '罗浩铭',
    name2: '林怡炜',
    name3: '禚安垣',
    medal: 'gold',
    address: '郑州邀请赛',
  },
  {
    key: '20',
    teamname: '赛博守夜人',
    name1: '牛骏达',
    name2: '尹延铄',
    name3: '王润鲁',
    medal: 'none',
    address: '郑州邀请赛',
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
      else if (_ === 'none') {
        color = '#808080';
        text = '优胜奖';
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
      {
        text: '无奖',
        value: 'none',
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
        text: '武汉邀请赛',
        value: '武汉邀请赛',
      },
      {
        text: '西安邀请赛',
        value: '西安邀请赛',  
      },
      {
        text: '东北邀请赛',
        value: '东北邀请赛',
      },
      {
        text: '广西邀请赛',
        value: '广西邀请赛',
      },
      {
        text: '山东省赛',
        value: '山东省赛',
      },
      {
        text: '郑州邀请赛',
        value: '郑州邀请赛',
      },
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.address === value,
  },
];

export { dataSource, columns };