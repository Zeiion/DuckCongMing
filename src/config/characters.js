export const getInfoTemplate = () => {
  const obj = {
    name: 'default',
    status: [false, false, false],
    predict: [[], [], []],
    remark: '',
  };
  const returnObj = JSON.parse(JSON.stringify(obj));
  return returnObj;
};

export const characters = [
  // 鹅 警长 正义使者 复仇者 加拿大鹅 网红 侦探 保镖 通灵 肉汁 观鸟者 工程师 殡仪员 星界 模仿 恋人鹅 冒险家 政治家 流浪儿童 锁匠 跟踪器 跟踪者
  {
    id: 'g-1',
    name: '鹅',
    belong: 'goose',
    desc: '白鹅，不能被刺客狙击',
  },
  {
    id: 'g-2',
    name: '警长',
    belong: 'goose',
  },
  {
    id: 'g-3',
    name: '正义使者',
    belong: 'goose',
  },
  {
    id: 'g-4',
    name: '复仇者',
    belong: 'goose',
  },
  {
    id: 'g-5',
    name: '加拿大鹅',
    belong: 'goose',
  },
  {
    id: 'g-6',
    name: '网红',
    belong: 'goose',
  },
  {
    id: 'g-7',
    name: '侦探',
    belong: 'goose',
  },
  {
    id: 'g-8',
    name: '保镖',
    belong: 'goose',
  },
  {
    id: 'g-9',
    name: '通灵',
    belong: 'goose',
  },
  {
    id: 'g-10',
    name: '肉汁',
    belong: 'goose',
  },
  {
    id: 'g-11',
    name: '观鸟者',
    belong: 'goose',
  },
  {
    id: 'g-12',
    name: '工程师',
    belong: 'goose',
  },
  {
    id: 'g-13',
    name: '殡仪员',
    belong: 'goose',
  },
  {
    id: 'g-14',
    name: '星界',
    belong: 'goose',
  },
  {
    id: 'g-15',
    name: '模仿',
    belong: 'goose',
  },
  // {
  //   id: 'g-16',
  //   name: '超能力',
  //   belong: 'goose',
  // },
  {
    id: 'g-17',
    name: '恋人鹅',
    belong: 'goose',
  },
  {
    id: 'g-18',
    name: '冒险家',
    belong: 'goose',
  },
  {
    id: 'g-19',
    name: '政治家',
    belong: 'goose',
  },
  {
    id: 'g-20',
    name: '流浪儿童',
    belong: 'goose',
  },
  {
    id: 'g-21',
    name: '锁匠',
    belong: 'goose',
  },
  {
    id: 'g-22',
    name: '跟踪器',
    belong: 'goose',
  },
  {
    id: 'g-23',
    name: '跟踪者',
    belong: 'goose',
  },
  // 鸭 刺客 间谍 变形 爆炸王 身份窃贼 专业杀手 连环杀手 雇佣杀手 丧葬者 派对 食鸟鸭 隐形 静音 忍者 告密 术士 恋人鸭 超能力者
  {
    id: 'd-1',
    name: '鸭',
    belong: 'duck',
    desc: '普通鸭子，有刀',
  },
  {
    id: 'd-2',
    name: '刺客',
    belong: 'duck',
  },
  {
    id: 'd-3',
    name: '间谍',
    belong: 'duck',
  },
  {
    id: 'd-4',
    name: '变形',
    belong: 'duck',
  },
  {
    id: 'd-5',
    name: '爆炸王',
    belong: 'duck',
  },
  {
    id: 'd-6',
    name: '身份窃贼',
    belong: 'duck',
  },
  {
    id: 'd-7',
    name: '专业杀手',
    belong: 'duck',
  },
  {
    id: 'd-8',
    name: '连环杀手',
    belong: 'duck',
  },
  {
    id: 'd-9',
    name: '雇佣杀手',
    belong: 'duck',
  },
  {
    id: 'd-10',
    name: '丧葬者',
    belong: 'duck',
  },
  {
    id: 'd-11',
    name: '派对',
    belong: 'duck',
  },
  {
    id: 'd-12',
    name: '食鸟鸭',
    belong: 'duck',
  },
  {
    id: 'd-13',
    name: '隐形',
    belong: 'duck',
  },
  {
    id: 'd-14',
    name: '静音',
    belong: 'duck',
  },
  {
    id: 'd-15',
    name: '忍者',
    belong: 'duck',
  },
  {
    id: 'd-16',
    name: '告密',
    belong: 'duck',
  },
  {
    id: 'd-17',
    name: '术士',
    belong: 'duck',
  },
  {
    id: 'd-18',
    name: '恋人鸭',
    belong: 'duck',
  },
  {
    id: 'd-19',
    name: '超能力者',
    belong: 'duck',
  },
  // 鹈鹕 呆呆鸟 鸽子 秃鹫 猎鹰 决斗呆呆鸟
  {
    id: 'n-1',
    name: '鹈鹕',
    belong: 'neutral',
    color: 'green',
  },
  {
    id: 'n-2',
    name: '呆呆鸟',
    belong: 'neutral',
    color: 'yellow',
  },
  {
    id: 'n-3',
    name: '鸽子',
    belong: 'neutral',
    color: 'orange',
  },
  {
    id: 'n-4',
    name: '秃鹫',
    belong: 'neutral',
    color: 'blue',
  },
  {
    id: 'n-5',
    name: '猎鹰',
    belong: 'neutral',
    color: 'blue',
  },
  {
    id: 'n-6',
    name: '决斗呆呆鸟',
    belong: 'neutral',
    color: 'yellow',
  },
];
