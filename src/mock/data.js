/*
 * @Author: KingWJC
 * @Date: 2021-02-11 21:10:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-30 10:40:51
 * @Descripttion: 
 * @FilePath: \wedding-invitation-master\src\mock\data.js
 */
/*global moment*/
// const calDiffStr = (oldDate, newDate = Date.now()) => {
//   const oldMoment = moment(oldDate);
//   const newMoment = moment(newDate);
//   const duration = moment.duration(newMoment.diff(oldMoment));
//   return Math.floor(duration.as('d')) + '天';
// }


const BOY = '🐷';
const GIRL = '🐱';
const DATE_MAP = {
  MEET: new Date('2022-1-12'),
  LIKEMOMENT:new Date('2022-1-12'),
  CONFESSION: new Date('2021-1-12'),
};


export default {
  code: 
`
// 我想用一个有意思的方式，来介绍下我自己
// 准备了这段代码
// 我要开始写啦

<--声明全局变量-->
(${BOY}是 我);
(${GIRL}是 你);
const { ${BOY}, ${GIRL} } = 🌎;

<--基本信息-->
<--${BOY}'是一个89年的单身青年。'-->
<--'家乡是美丽的巴彦淖尔，我在内蒙古那片广袤的土地上茁壮成长。'-->
<--'身材很标准，身高180，体重66kg，买衣服基本不用试。'-->
<--'职业是枚程序员，爱好简单，敲代码和跑步。'-->
<--'优点是幸运，生在一个幸福，完整的家庭，身体一直很棒，很少感冒。'-->
<--'择偶基本条件：三观一致，希望我们灵魂契合，拥有不谋而合的默契。' -->

(${BOY}).在这一天('${moment(DATE_MAP.MEET).format('LL')}').看到了(${GIRL}).帖子;
(${BOY}).begin('鼓起勇气，来试一下');
(${BOY}).sendEmail('毛遂自荐');

<--专属问题回复-->
<--'1.关于我的哪部分促使你给我发邮件想要认识我？'-->
<--'答：直爽，喜欢小动物，很有爱心。而且我180，又帅气，是翻倍增长的潜力股，你值得拥有。'-->

<--想对你说-->
${BOY}.say('未来是不可预测的，我们的相遇或许就是命中注定！');
....
${BOY}.always('憧憬着未来：');
// 希望不远的将来
${BOY}.say('我们在一起吧!❤️');
${GIRL}.response('Yes, I do！');

(${BOY}, ${GIRL}).一起结伴前行('xxxx年xx月xx日')
(${BOY}, ${GIRL}).直到世界的尽头('yyyy年yy月yy日');

// 好了我写完了
// 我要开始运行啦`,
  executions: [{
    name:'初始化',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'解压中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'组装中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'打包中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'微笑🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'大笑😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'编译中...',
    time: '',
    visible: false
  }],
  barrages: [
    '窈窕淑女，君子好逑！'
  ],
}