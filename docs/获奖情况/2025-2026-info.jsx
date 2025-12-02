const dataSource = [
    // ICPC 西安站 
    {
        key: '1',
        teamname: '不万元申万的',
        name1: '荆昱熹',
        name2: '张讯',
        name3: '彭麟翔',
        medal: 'silver',
        address: '西安站',
    },
    {
        key: '2',
        teamname: 'AC 是检验真理的唯一标准',
        name1: '罗浩铭',
        name2: '林怡炜',
        name3: '庞绍旗',
        medal: 'silver',
        address: '西安站',
    },
    {
        key: '3',
        teamname: '你，去比赛了吧...和我不认识的人一起',
        name1: '危弘毅',
        name2: '孙晨涵',
        name3: '缪若凡',
        medal: 'bronze',
        address: '西安站',
    },
    // ICPC 成都站 
    {
        key: '4',
        teamname: 'SDU-ENG',
        name1: '钟以楠',
        name2: '刘智豪',
        name3: '陈方航',
        medal: 'gold',
        address: '成都站',
    },
    {
        key: '5',
        teamname: '应用随机过程',
        name1: '苏岳',
        name2: '李玉庭',
        name3: '王源鑫',
        medal: 'silver',
        address: '成都站',
    },
    // CCPC 女生专场 
    {
        key: '6',
        teamname: 'AI随机生成',
        name1: '张美伦',
        name2: '徐馨兰',
        name3: '彭铄淇',
        medal: 'silver',
        address: '女生专场',
    },
    {
        key: '7',
        teamname: '三球冰激凌红茶',
        name1: '苏苏',
        name2: '李忆雯',
        name3: '郭雨欣',
        medal: 'silver',
        address: '女生专场',
    },
    // ICPC 武汉站 
    {
        key: '8',
        teamname: '电话微波炉（暂定）',
        name1: '詹靖杰',
        name2: '董家豪',
        name3: '宿子腾',
        medal: 'gold',
        address: '武汉站',
    },
    {
        key: '9',
        teamname: '圆一定要是圆形的',
        name1: '孙更欣',
        name2: '高士轩',
        name3: '叶世昕',
        medal: 'silver',
        address: '武汉站',
    },
    // ICPC 南京站 
    {
        key: '10',
        teamname: '圆一定要是圆形的',
        name1: '孙更欣',
        name2: '高士轩',
        name3: '叶世昕',
        medal: 'silver',
        address: '南京站',
    },
    {
        key: '11',
        teamname: '海鸥灭火器',
        name1: '王艺臻',
        name2: '刘子龙',
        name3: '苏苏',
        medal: 'silver',
        address: '南京站',
    },
    // CCPC 哈尔滨站 
    {
        key: '12',
        teamname: 'SDU-ENG',
        name1: '钟以楠',
        name2: '刘智豪',
        name3: '陈方航',
        medal: 'gold',
        address: '哈尔滨站',
    },
    {
        key: '13',
        teamname: '应用随机过程',
        name1: '苏岳',
        name2: '李玉庭',
        name3: '王源鑫',
        medal: 'silver',
        address: '哈尔滨站',
    },
    // ICPC 沈阳站 
    {
        key: '14',
        teamname: '海鸥灭火器',
        name1: '王艺臻',
        name2: '刘子龙',
        name3: '苏苏',
        medal: 'gold',
        address: '沈阳站',
    },
    {
        key: '15',
        teamname: 'AI 随机生成',
        name1: '张美伦',
        name2: '徐馨兰',
        name3: '彭铄淇',
        medal: 'bronze',
        address: '沈阳站',
    },
    // ICPC 上海站 
    {
        key: '16',
        teamname: 'SDU-ENG',
        name1: '钟以楠',
        name2: '刘智豪',
        name3: '陈方航',
        medal: 'gold',
        address: '上海站',
    },
    {
        key: '17',
        teamname: '电话微波炉（暂定）',
        name1: '詹靖杰',
        name2: '宿子腾',
        name3: '连君朴',
        medal: 'gold',
        address: '上海站',
    },
    {
        key: '18',
        teamname: '应用随机过程',
        name1: '苏岳',
        name2: '李玉庭',
        name3: '王源鑫',
        medal: 'silver',
        address: '上海站',
    },
    // CCPC 重庆站 
    {
        key: '19',
        teamname: 'SDU-ENG',
        name1: '钟以楠',
        name2: '刘智豪',
        name3: '陈方航',
        medal: 'gold',
        address: '重庆站',
    },
    {
        key: '20',
        teamname: '电话微波炉（暂定）',
        name1: '詹靖杰',
        name2: '宿子腾',
        name3: '连君朴',
        medal: 'gold',
        address: '重庆站',
    },
];

import React from 'react';
import { Tag } from 'antd';

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
                <Tag color={color} style={{ width: '50%', textAlign: 'center', fontSize: 16 }} >
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
                text: '西安站',
                value: '西安站',
            },
            {
                text: '成都站',
                value: '成都站',
            },
            {
                text: '女生专场',
                value: '女生专场',
            },
            {
                text: '武汉站',
                value: '武汉站',
            },
            {
                text: '南京站',
                value: '南京站',
            },
            {
                text: '哈尔滨站',
                value: '哈尔滨站',
            },
            {
                text: '沈阳站',
                value: '沈阳站',
            },
            {
                text: '上海站',
                value: '上海站',
            },
            {
                text: '香港站',
                value: '香港站',
            },
            {
                text: '重庆站',
                value: '重庆站',
            },
        ],
        filterMode: 'menu',
        filterSearch: true,
        onFilter: (value, record) => record.address === value,
    },
];

export { dataSource, columns };