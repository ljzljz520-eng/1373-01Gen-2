export interface ArchiveCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  required: boolean;
  note?: string;
}

export interface MaterialSection {
  title: string;
  items: MaterialItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const archiveCategories: ArchiveCategory[] = [
  {
    id: 'household',
    title: '户籍档案',
    description: '收录建国以来户籍迁移、户籍登记、户籍注销等各类户籍档案资料，为市民查证户籍历史提供服务。',
    icon: 'Users',
    route: '/household',
  },
  {
    id: 'property',
    title: '房产档案',
    description: '保存全市房屋产权登记、交易、抵押等房产档案，提供房产信息查询和产权证明服务。',
    icon: 'Home',
    route: '/property',
  },
  {
    id: 'photos',
    title: '老照片',
    description: '珍藏晚清民国至今的城市老照片，记录城市变迁、市井风貌和历史事件，见证城市发展历程。',
    icon: 'Image',
    route: '/photos',
  },
  {
    id: 'chronicles',
    title: '地方志',
    description: '收藏历代地方志书、专业志、乡镇志等，记载地方历史、地理、风俗、人物等珍贵史料。',
    icon: 'BookOpen',
    route: '/chronicles',
  },
];

export const visitingNotice = [
  '请携带本人有效身份证件（身份证、户口簿、护照等）',
  '服从工作人员管理，自觉遵守馆内各项规章制度',
  '档案文献属珍贵资料，请爱护使用，严禁涂改、圈划、撕毁',
  '查阅档案时请保持安静，将手机调至静音状态',
  '未经批准不得擅自拍摄、复制档案内容',
  '严禁携带易燃易爆物品、食品饮料进入查阅大厅',
];

export const openingHours = {
  weekday: '周一至周五',
  weekdayTime: '上午 9:00 - 12:00　下午 13:30 - 17:00',
  weekend: '周六',
  weekendTime: '上午 9:00 - 11:30　下午 14:00 - 16:30',
  closed: '周日及法定节假日闭馆',
  note: '周五下午为内部整理时间，15:30 后停止对外查阅服务',
};

export const appointmentMethods = [
  {
    id: 'phone',
    title: '电话预约',
    description: '拨打查档服务热线，工作人员为您登记预约信息',
    phone: '010-12345678',
    icon: 'Phone',
  },
  {
    id: 'online',
    title: '线上预约',
    description: '通过官方网站或微信公众号提交预约申请',
    url: '#',
    icon: 'Monitor',
  },
  {
    id: 'onsite',
    title: '现场预约',
    description: '前往档案馆服务大厅，在自助机或窗口办理预约',
    address: '档案馆一楼服务大厅',
    icon: 'MapPin',
  },
];

export const householdData = {
  introduction: {
    title: '户籍档案介绍',
    content: `我馆户籍档案始于1949年，完整记录了本市户籍管理的历史变迁。馆藏包括户籍登记册、户籍迁移证、常住人口登记表、暂住人口登记簿等多种户籍资料，时间跨度达七十余年。

户籍档案是查证个人身份信息、亲属关系、迁移轨迹的重要依据，在办理继承、公证、升学、就业、社保等事务中具有不可替代的法律效力。`,
  },
  materials: [
    {
      title: '个人查询需携带材料',
      items: [
        { id: 'h1', name: '本人居民身份证原件', required: true, note: '必须出示，不可用复印件代替' },
        { id: 'h2', name: '户口簿原件', required: false, note: '如有请一并携带，有助于快速定位档案' },
        { id: 'h3', name: '与查询内容相关的证明材料', required: false, note: '如相关单位出具的查询函等' },
      ],
    },
    {
      title: '委托他人查询需携带材料',
      items: [
        { id: 'h4', name: '委托人居民身份证原件', required: true },
        { id: 'h5', name: '被委托人居民身份证原件', required: true },
        { id: 'h6', name: '经公证的授权委托书', required: true, note: '委托书需明确委托事项和权限' },
        { id: 'h7', name: '委托人与被委托人亲属关系证明', required: false, note: '直系亲属可凭户口簿或结婚证等证明' },
      ],
    },
  ],
  process: [
    { id: 'hp1', step: 1, title: '取号登记', description: '凭身份证在服务台取号，填写查档申请单' },
    { id: 'hp2', step: 2, title: '受理审核', description: '工作人员审核查询资格和相关材料' },
    { id: 'hp3', step: 3, title: '档案调阅', description: '工作人员调取相关档案供查阅' },
    { id: 'hp4', step: 4, title: '查阅复印', description: '在工作人员指导下查阅，如需复印提出申请' },
    { id: 'hp5', step: 5, title: '缴费确认', description: '按规定缴纳档案利用相关费用' },
    { id: 'hp6', step: 6, title: '领取证明', description: '领取加盖公章的档案证明或复印件' },
  ],
  faqs: [
    {
      id: 'hq1',
      question: '户籍档案可以查询多久以前的？',
      answer: '我馆户籍档案最早可追溯至1949年建国初期。由于历史原因，部分早期档案可能不够完整，建议提前电话咨询确认。',
    },
    {
      id: 'hq2',
      question: '查询户籍档案需要收费吗？',
      answer: '查阅档案本身不收费。如需复印档案材料，按物价部门核定的标准收取工本费。出具档案证明的费用也有明确规定，详情可在服务大厅查询。',
    },
    {
      id: 'hq3',
      question: '可以查询他人的户籍档案吗？',
      answer: '户籍档案涉及个人隐私，一般只能查询本人或直系亲属的档案。查询他人档案需持有公证处公证的授权委托书，或司法机关、行政机关的正式查询函件。',
    },
    {
      id: 'hq4',
      question: '档案查询可以当天拿到结果吗？',
      answer: '大部分档案可以当天查询并出具证明。对于年代较久、需要调阅库房原始档案的情况，可能需要1-3个工作日，建议提前预约。',
    },
  ],
};

export const propertyData = {
  introduction: {
    title: '房产档案介绍',
    content: `我馆房产档案涵盖全市范围内的房屋所有权登记、土地使用权登记、房产交易、抵押、查封等各类产权资料。档案记载了房屋的权属来源、面积、结构、用途、交易历史等详细信息。

房产档案是房屋产权归属的法定证明材料，在房产交易、产权确认、拆迁补偿、继承公证等事项中发挥重要作用。`,
  },
  materials: [
    {
      title: '权利人本人查询',
      items: [
        { id: 'p1', name: '本人居民身份证原件', required: true },
        { id: 'p2', name: '房屋所有权证或不动产权证原件', required: false, note: '如持有请携带，加快查询速度' },
        { id: 'p3', name: '查询用途说明', required: false, note: '部分档案需说明查询目的' },
      ],
    },
    {
      title: '利害关系人查询',
      items: [
        { id: 'p4', name: '本人居民身份证原件', required: true },
        { id: 'p5', name: '与房屋存在利害关系的证明材料', required: true, note: '如购房合同、租赁合同、法院受理通知书等' },
        { id: 'p6', name: '房屋坐落地址或产权证号', required: true, note: '需提供准确的房屋信息以便检索' },
      ],
    },
    {
      title: '委托他人查询',
      items: [
        { id: 'p7', name: '委托人居民身份证原件', required: true },
        { id: 'p8', name: '被委托人居民身份证原件', required: true },
        { id: 'p9', name: '经公证的授权委托书原件', required: true, note: '委托书需注明具体查询事项' },
      ],
    },
  ],
  process: [
    { id: 'pp1', step: 1, title: '提交申请', description: '在窗口提交查询申请及相关证明材料' },
    { id: 'pp2', step: 2, title: '资格审核', description: '工作人员审核查询资格和材料完整性' },
    { id: 'pp3', step: 3, title: '信息检索', description: '工作人员在系统中检索相关房产档案' },
    { id: 'pp4', step: 4, title: '档案查阅', description: '查阅电子档案或纸质档案' },
    { id: 'pp5', step: 5, title: '复印盖章', description: '如需出具证明，复印后加盖档案专用章' },
    { id: 'pp6', step: 6, title: '缴费取件', description: '按标准缴费后领取查询结果' },
  ],
  fees: [
    { item: '档案查询费', standard: '免费', note: '含一次基础信息检索' },
    { item: '档案证明出具', standard: '20元/份', note: '加盖档案专用章的证明文件' },
    { item: '纸质档案复印（A4）', standard: '1元/页', note: '黑白复印' },
    { item: '纸质档案复印（A3）', standard: '2元/页', note: '黑白复印' },
    { item: '档案电子化扫描', standard: '5元/页', note: '提供电子文件' },
  ],
};

export const photosData = {
  introduction: {
    title: '老照片馆藏介绍',
    content: `我馆珍藏各类历史老照片共计12万余张，时间跨度从晚清同治年间至二十世纪末，内容涵盖城市建设、经济发展、社会生活、文化教育、重大事件等多个方面。

这些珍贵的影像资料生动记录了城市的百年变迁，是研究地方历史、传承城市记忆的重要文化遗产。`,
  },
  overview: [
    { label: '馆藏总量', value: '12万+', unit: '张' },
    { label: '最早年代', value: '1870年代', unit: '清代' },
    { label: '时间跨度', value: '130+', unit: '年' },
    { label: '主题分类', value: '20+', unit: '类' },
  ],
  categories: [
    '城市风貌',
    '街景建筑',
    '园林名胜',
    '历史事件',
    '社会生活',
    '工商金融',
    '文化教育',
    '医疗卫生',
    '交通运输',
    '民俗风情',
    '人物肖像',
    '其他',
  ],
  accessMethods: [
    {
      title: '馆内阅览',
      description: '持本人有效身份证件，可在照片阅览厅查阅已数字化的老照片。部分珍贵原版照片需预约调阅。',
    },
    {
      title: '网上检索',
      description: '登录我馆官方网站"数字档案"平台，可在线检索已公开的老照片目录和缩略图。',
    },
    {
      title: '预约调阅',
      description: '如需查阅未数字化的原版照片，请提前3个工作日电话或网上预约，由工作人员安排调档。',
    },
  ],
  usageNotice: [
    '老照片仅供研究参考，不得用于商业用途',
    '如需使用照片出版或展览，需另行申请授权',
    '翻拍、扫描照片需经工作人员批准',
    '请爱护照片原件，禁止触摸照片表面',
    '阅览厅内禁止使用闪光灯拍照',
  ],
};

export const chroniclesData = {
  introduction: {
    title: '地方志馆藏介绍',
    content: `我馆地方志馆藏丰富，收藏有历代地方志书、专业志、乡镇志、村志等各类志书共计3000余种，5万余册。其中包括明清及民国时期的珍贵善本志书，以及新中国成立后编纂的新一地方志。

地方志被誉为"地方百科全书"，记载了各地的历史沿革、地理山川、风俗民情、人物传记、经济文化等丰富内容，是研究地方历史文化的重要文献。`,
  },
  collectionStats: [
    { label: '志书总量', value: '5万+', unit: '册' },
    { label: '种类数量', value: '3000+', unit: '种' },
    { label: '最早版本', value: '明·正德', unit: '年间' },
    { label: '珍稀善本', value: '200+', unit: '种' },
  ],
  collectionTypes: [
    {
      title: '地方志书',
      description: '包括省志、府志、州志、县志、厅志等各级行政区域志书，是馆藏的主体部分。',
    },
    {
      title: '专业志',
      description: '记载某一行业或专门领域发展历史的志书，如水利志、交通志、教育志、商业志等。',
    },
    {
      title: '乡镇村志',
      description: '各乡镇、村落编纂的志书，记录基层社会的历史变迁和风土人情。',
    },
    {
      title: '地方志资料',
      description: '包括地方志稿、资料长编、旧志整理本、地方年鉴等相关资料。',
    },
  ],
  accessMethods: [
    {
      title: '室内阅览',
      description: '地方志阅览室对公众开放，持本人身份证件即可入室查阅。志书仅供室内阅览，不外借。',
    },
    {
      title: '目录检索',
      description: '可通过馆藏目录检索系统查询志书信息，了解馆藏情况。阅览室也设有卡片目录供检索。',
    },
    {
      title: '复印服务',
      description: '如需复印志书内容，可向工作人员提出申请。注意爱护古籍，部分善本不提供复印服务。',
    },
    {
      title: '咨询服务',
      description: '工作人员可提供地方志查阅指导和咨询服务，帮助您快速找到所需资料。',
    },
  ],
  featuredBooks: [
    { name: '《明·正德府志》', era: '明代', remark: '现存最早的本地方志，珍稀善本' },
    { name: '《清·乾隆府志》', era: '清代', remark: '内容详备，体例完善' },
    { name: '《民国县志》', era: '民国', remark: '反映近代社会变革' },
    { name: '《市志（1949-2000）', era: '当代', remark: '新一地方志代表作' },
    { name: '《中国地方志集成》', era: '当代', remark: '大型地方志影印丛书' },
    { name: '《地方文献丛刊》', era: '当代', remark: '珍稀地方文献整理本' },
  ],
};

export const siteInfo = {
  name: '城市档案馆',
  subtitle: 'CITY ARCHIVES',
  address: '文化路128号城市档案馆',
  phone: '010-12345678',
  email: 'service@city-archives.gov.cn',
  busRoutes: ['1路', '15路', '32路', '105路', '快2线'],
  busStop: '档案馆站',
  subway: '地铁2号线 文化路站 B出口，步行约500米',
  copyright: '© 2024 城市档案馆 版权所有',
  icp: '京ICP备12345678号-1',
};
