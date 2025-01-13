import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '什么是ICPC',
    Svg: require('@site/static/img/ICPCLogo.svg').default,
    description: (
      <>
        ICPC（英文：International Collegiate Programming Contest，
        中文：国际大学生程序设计竞赛）<br></br>由 ICPC 基金会（英文：ICPC Foundation）举办，
        是最具影响力的大学生计算机竞赛。由于以前 ACM 赞助这个竞赛，也有很多人习惯叫它 ACM 竞赛。
      </>
    ),
  },
  {
    title: '赛制介绍',
    Svg: require('@site/static/img/ICPCLogo.svg').default,
    description: (
      <>
        一般是三个人组成一队使用一台机器，在比赛时有多次提交机会。比赛实时评测并返回结果，如果提交的结果错误会有 20 分钟的罚时，错误次数越多，加罚的时间也越长。每个题目只有在所有数据点全部正确后才能得到分数。比赛排名根据做题数来评判，做题数相同的，根据总用时来评判。总用时是每题用时的和。每题的用时是从比赛开始到做出该题的分钟数与该题的罚时之和。
      </>
    ),
  },
  {
    title: '为什么要打ICPC',
    Svg: require('@site/static/img/ICPCLogo.svg').default,
    description: (
      <>
        参加ICPC系列赛事，可以极大地提高你的编程能力，提升算法知识，锻炼思维，锻炼团队合作能力，结交各路好友。

        除此之外，ICPC系列赛事还是各大互联网公司招聘的重要渠道，很多公司都会在ICPC系列赛事中挖掘人才，在ICPC中获奖也可以极大地提高你的综测分成绩。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
