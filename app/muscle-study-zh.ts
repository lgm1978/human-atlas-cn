export interface MuscleStudyInfo {
  zh: string;
  origin: string;
  insertion: string;
  action: string;
  innervation: string;
  note?: string;
}

const MUSCLES: Record<string, MuscleStudyInfo> = {
  "sternocleidomastoid": {
    zh: "胸锁乳突肌",
    origin: "胸骨头起自胸骨柄前面；锁骨头起自锁骨内侧1/3上面。",
    insertion: "止于颞骨乳突外侧面及枕骨上项线外侧部。",
    action: "单侧收缩使头向同侧侧屈并向对侧旋转；双侧收缩可屈颈，并可协助吸气。",
    innervation: "副神经（第XI脑神经）运动支配；颈丛 C2–C3 提供本体感觉。"
  },
  "levator scapulae": {
    zh: "肩胛提肌",
    origin: "起自 C1–C4 横突后结节。",
    insertion: "止于肩胛骨内侧缘上部，主要在上角至肩胛冈根部之间。",
    action: "上提肩胛骨并使肩胛骨下回旋；肩胛骨固定时可协助颈部同侧侧屈。",
    innervation: "肩胛背神经（主要 C5）及 C3–C4 颈神经分支。"
  },
  "rhomboid major": {
    zh: "大菱形肌",
    origin: "起自 T2–T5 棘突及棘上韧带。",
    insertion: "止于肩胛骨内侧缘，自肩胛冈根部至下角。",
    action: "使肩胛骨后缩、下回旋，并将肩胛骨固定于胸壁。",
    innervation: "肩胛背神经（C4–C5，以 C5 为主）。"
  },
  "rhomboid minor": {
    zh: "小菱形肌",
    origin: "起自项韧带下部及 C7–T1 棘突。",
    insertion: "止于肩胛骨内侧缘肩胛冈根部。",
    action: "使肩胛骨后缩、下回旋，并协助固定肩胛骨。",
    innervation: "肩胛背神经（C4–C5，以 C5 为主）。"
  },
  "serratus anterior": {
    zh: "前锯肌",
    origin: "起自第1–8（或1–9）肋外侧面。",
    insertion: "止于肩胛骨内侧缘前面，以下角附近最为显著。",
    action: "使肩胛骨前伸并上回旋，贴紧胸壁；上举上肢超过水平位时很重要。",
    innervation: "胸长神经（C5–C7）。"
  },
  "trapezius": {
    zh: "斜方肌",
    origin: "起自枕骨上项线内侧部、枕外隆凸、项韧带及 C7–T12 棘突。",
    insertion: "止于锁骨外侧1/3、肩峰及肩胛冈。",
    action: "上部纤维上提肩胛骨，中部后缩，下部下压；上下部协同使肩胛骨上回旋。",
    innervation: "副神经（第XI脑神经）运动支配；C3–C4 颈神经分支传递感觉/本体感觉。"
  },
  "deltoid": {
    zh: "三角肌",
    origin: "起自锁骨外侧1/3、肩峰外侧缘及肩胛冈。",
    insertion: "止于肱骨三角肌粗隆。",
    action: "中束主要外展肩关节；前束屈曲、内旋；后束伸展、外旋。",
    innervation: "腋神经（C5–C6）。"
  },
  "pectoralis major": {
    zh: "胸大肌",
    origin: "锁骨部起自锁骨内侧半；胸肋部起自胸骨前面、上位肋软骨及腹外斜肌腱膜。",
    insertion: "止于肱骨大结节嵴（结节间沟外侧唇）。",
    action: "内收、内旋肱骨；锁骨部协助屈肩，胸肋部可从屈曲位协助伸肩。",
    innervation: "胸外侧神经、胸内侧神经（C5–T1）。"
  },
  "pectoralis minor": {
    zh: "胸小肌",
    origin: "起自第3–5肋近肋软骨处。",
    insertion: "止于肩胛骨喙突内侧缘及上面。",
    action: "牵拉肩胛骨向前、向下并稳定肩胛骨；肩胛骨固定时可辅助吸气。",
    innervation: "胸内侧神经（C8–T1，常并有胸外侧神经交通支）。"
  },
  "latissimus dorsi": {
    zh: "背阔肌",
    origin: "起自下6个胸椎棘突、胸腰筋膜、髂嵴后部及下位肋骨等。",
    insertion: "止于肱骨结节间沟底。",
    action: "伸展、内收并内旋肱骨；攀爬或用上肢支撑时可向上牵拉躯干。",
    innervation: "胸背神经（C6–C8）。"
  },
  "supraspinatus": {
    zh: "冈上肌",
    origin: "起自肩胛骨冈上窝。",
    insertion: "止于肱骨大结节上面。",
    action: "启动肩外展并协助三角肌外展；稳定肱骨头于关节盂。",
    innervation: "肩胛上神经（C5–C6）。"
  },
  "infraspinatus": {
    zh: "冈下肌",
    origin: "起自肩胛骨冈下窝。",
    insertion: "止于肱骨大结节中面。",
    action: "外旋肱骨，并稳定肩关节。",
    innervation: "肩胛上神经（C5–C6）。"
  },
  "subscapularis": {
    zh: "肩胛下肌",
    origin: "起自肩胛骨肩胛下窝。",
    insertion: "止于肱骨小结节及其邻近关节囊。",
    action: "内旋并内收肱骨，稳定肱骨头。",
    innervation: "上、下肩胛下神经（C5–C7）。"
  },
  "teres minor": {
    zh: "小圆肌",
    origin: "起自肩胛骨外侧缘中上部。",
    insertion: "止于肱骨大结节下面。",
    action: "外旋肱骨，轻度内收，并稳定肩关节。",
    innervation: "腋神经（C5–C6）。"
  },
  "teres major": {
    zh: "大圆肌",
    origin: "起自肩胛骨下角后面及邻近外侧缘。",
    insertion: "止于肱骨小结节嵴（结节间沟内侧唇）。",
    action: "内收、内旋并伸展肱骨。",
    innervation: "下肩胛下神经（C5–C6）。"
  },
  "biceps brachii": {
    zh: "肱二头肌",
    origin: "长头起自肩胛骨盂上结节；短头起自肩胛骨喙突。",
    insertion: "止于桡骨粗隆，并经肱二头肌腱膜连于前臂筋膜。",
    action: "屈肘、前臂旋后；长头/短头均可协助屈肩并稳定肩关节。",
    innervation: "肌皮神经（C5–C6）。"
  },
  "triceps brachii": {
    zh: "肱三头肌",
    origin: "长头起自肩胛骨盂下结节；外侧头和内侧头分别起自肱骨后面桡神经沟上、下方。",
    insertion: "共同止于尺骨鹰嘴及前臂筋膜。",
    action: "主要伸肘；长头还可协助肩伸展和内收。",
    innervation: "桡神经（C6–C8，以 C7–C8 为主）。"
  },
  "brachialis": {
    zh: "肱肌",
    origin: "起自肱骨远侧半前面。",
    insertion: "止于尺骨冠突和尺骨粗隆。",
    action: "强力屈肘，前臂旋前或旋后位均可发挥作用。",
    innervation: "主要为肌皮神经（C5–C6），外侧部分可受桡神经支配。"
  },
  "supinator": {
    zh: "旋后肌",
    origin: "起自肱骨外上髁、桡侧副韧带、环状韧带及尺骨旋后肌嵴。",
    insertion: "止于桡骨近端1/3的外侧、后侧及前侧面。",
    action: "使前臂旋后。",
    innervation: "桡神经深支/骨间后神经（C7–C8）。"
  },
  "flexor carpi radialis": {
    zh: "桡侧腕屈肌",
    origin: "起自肱骨内上髁共同屈肌腱。",
    insertion: "止于第2掌骨底，常有纤维至第3掌骨底。",
    action: "屈腕并使腕关节桡偏。",
    innervation: "正中神经（C6–C7）。"
  },
  "extensor carpi radialis longus": {
    zh: "桡侧腕长伸肌",
    origin: "起自肱骨外侧髁上嵴远端及外侧肌间隔。",
    insertion: "止于第2掌骨底背侧。",
    action: "伸腕并使腕关节桡偏。",
    innervation: "桡神经（C6–C7）。"
  },
  "extensor carpi ulnaris": {
    zh: "尺侧腕伸肌",
    origin: "起自肱骨外上髁共同伸肌腱及尺骨后缘。",
    insertion: "止于第5掌骨底背侧。",
    action: "伸腕并使腕关节尺偏。",
    innervation: "骨间后神经（C7–C8）。"
  },
  "gluteus maximus": {
    zh: "臀大肌",
    origin: "起自髂骨臀后线后方、骶骨与尾骨背面及骶结节韧带等。",
    insertion: "大部分止于髂胫束，深部纤维止于股骨臀肌粗隆。",
    action: "强力伸髋并外旋股骨；由坐位起立、上楼和跑跳时作用明显。",
    innervation: "臀下神经（L5–S2）。"
  },
  "gluteus medius": {
    zh: "臀中肌",
    origin: "起自髂骨外面前、后臀线之间。",
    insertion: "止于股骨大转子外侧面。",
    action: "外展髋关节；单腿站立时稳定骨盆。前部纤维可内旋，后部纤维可外旋。",
    innervation: "臀上神经（L4–S1）。"
  },
  "gluteus minimus": {
    zh: "臀小肌",
    origin: "起自髂骨外面前、下臀线之间。",
    insertion: "止于股骨大转子前面。",
    action: "外展并内旋股骨，单腿负重时协助稳定骨盆。",
    innervation: "臀上神经（L4–S1）。"
  },
  "piriformis": {
    zh: "梨状肌",
    origin: "起自骶骨盆面（主要 S2–S4 周围）及邻近骶结节韧带。",
    insertion: "止于股骨大转子上缘。",
    action: "髋伸展位时外旋股骨；髋屈曲位时可外展股骨，并稳定股骨头。",
    innervation: "梨状肌神经（S1–S2）。"
  },
  "iliopsoas": {
    zh: "髂腰肌",
    origin: "由腰大肌和髂肌组成：腰大肌起自 T12–L5 椎体、椎间盘及腰椎横突；髂肌起自髂窝等。",
    insertion: "两肌汇合后主要止于股骨小转子。",
    action: "强力屈髋；股骨固定时可协助屈曲躯干，并参与髋与腰盆区域稳定。",
    innervation: "腰大肌由腰丛前支（L1–L3，常含 L4）支配；髂肌主要由股神经（L2–L3）支配。"
  },
  "iliacus": {
    zh: "髂肌",
    origin: "起自髂窝、髂嵴内唇及骶骨翼等。",
    insertion: "与腰大肌共同经髂腰肌腱止于股骨小转子。",
    action: "屈髋；股骨固定时可协助屈曲躯干。",
    innervation: "股神经（L2–L3）。"
  },
  "psoas major": {
    zh: "腰大肌",
    origin: "起自 T12–L5 椎体、椎间盘及 L1–L5 横突等。",
    insertion: "与髂肌共同止于股骨小转子。",
    action: "主要屈髋；股骨固定时可协助屈曲躯干并参与腰椎稳定。",
    innervation: "腰丛前支（L1–L3，常含 L4）。"
  },
  "tensor fasciae latae": {
    zh: "阔筋膜张肌",
    origin: "起自髂前上棘及髂嵴前部。",
    insertion: "汇入髂胫束，间接止于胫骨外侧髁（Gerdy结节）。",
    action: "屈髋、外展、内旋；通过髂胫束协助稳定膝关节。",
    innervation: "臀上神经（L4–S1）。"
  },
  "adductor longus": {
    zh: "长收肌",
    origin: "起自耻骨体，耻骨嵴下方。",
    insertion: "止于股骨粗线中1/3。",
    action: "内收髋关节，并可协助屈髋。",
    innervation: "闭孔神经前支（L2–L4）。"
  },
  "adductor brevis": {
    zh: "短收肌",
    origin: "起自耻骨体及耻骨下支。",
    insertion: "止于股骨耻骨肌线及粗线近端。",
    action: "内收髋关节，并轻度协助屈髋。",
    innervation: "闭孔神经（L2–L4）。"
  },
  "adductor magnus": {
    zh: "大收肌",
    origin: "收肌部起自耻骨下支和坐骨支；腘绳肌部起自坐骨结节。",
    insertion: "收肌部止于臀肌粗隆、粗线和内侧髁上线；腘绳肌部止于收肌结节。",
    action: "强力内收股骨；收肌部可屈髋，腘绳肌部可伸髋。",
    innervation: "收肌部：闭孔神经后支（L2–L4）；腘绳肌部：坐骨神经胫神经部分（L4）。"
  },
  "gracilis": {
    zh: "股薄肌",
    origin: "起自耻骨体及耻骨下支。",
    insertion: "止于胫骨近端内侧面，参与鹅足。",
    action: "内收髋关节；屈膝并在膝屈曲时使小腿内旋。",
    innervation: "闭孔神经（L2–L3）。"
  },
  "sartorius": {
    zh: "缝匠肌",
    origin: "起自髂前上棘。",
    insertion: "止于胫骨近端内侧面，参与鹅足。",
    action: "屈髋、外展并外旋大腿；屈膝，膝屈曲时可使小腿内旋。",
    innervation: "股神经（L2–L3）。"
  },
  "rectus femoris": {
    zh: "股直肌",
    origin: "直头起自髂前下棘；反折头起自髋臼上缘/髋臼上沟。",
    insertion: "经股四头肌腱止于髌骨，并经髌韧带至胫骨粗隆。",
    action: "伸膝，同时屈髋。",
    innervation: "股神经（L2–L4）。"
  },
  "vastus lateralis": {
    zh: "股外侧肌",
    origin: "起自股骨大转子、臀肌粗隆及粗线外侧唇等。",
    insertion: "经股四头肌腱止于髌骨，并经髌韧带至胫骨粗隆。",
    action: "伸膝，并参与髌骨稳定。",
    innervation: "股神经（L2–L4）。"
  },
  "vastus medialis": {
    zh: "股内侧肌",
    origin: "起自转子间线及粗线内侧唇等。",
    insertion: "经股四头肌腱止于髌骨，并经髌韧带至胫骨粗隆。",
    action: "伸膝；远端斜行纤维有助于髌骨内侧稳定。",
    innervation: "股神经（L2–L4）。"
  },
  "vastus intermedius": {
    zh: "股中间肌",
    origin: "起自股骨体前面和外侧面上部。",
    insertion: "经股四头肌腱止于髌骨，并经髌韧带至胫骨粗隆。",
    action: "伸膝。",
    innervation: "股神经（L2–L4）。"
  },
  "biceps femoris": {
    zh: "股二头肌",
    origin: "长头起自坐骨结节；短头起自股骨粗线外侧唇及外侧髁上线。",
    insertion: "主要止于腓骨头。",
    action: "屈膝并在膝屈曲时使小腿外旋；长头还可伸髋。",
    innervation: "长头：坐骨神经胫神经部分；短头：坐骨神经腓总神经部分（L5–S2）。"
  },
  "semitendinosus": {
    zh: "半腱肌",
    origin: "起自坐骨结节。",
    insertion: "止于胫骨近端内侧面，参与鹅足。",
    action: "伸髋、屈膝；膝屈曲时使小腿内旋。",
    innervation: "坐骨神经胫神经部分（L5–S2）。"
  },
  "semimembranosus": {
    zh: "半膜肌",
    origin: "起自坐骨结节。",
    insertion: "主要止于胫骨内侧髁后面，并有纤维形成斜腘韧带等扩展。",
    action: "伸髋、屈膝；膝屈曲时使小腿内旋。",
    innervation: "坐骨神经胫神经部分（L5–S2）。"
  },
  "tibialis anterior": {
    zh: "胫骨前肌",
    origin: "起自胫骨外侧髁、胫骨外侧面上部及骨间膜。",
    insertion: "止于内侧楔骨及第1跖骨底。",
    action: "踝背屈、足内翻，并支持足内侧纵弓。",
    innervation: "腓深神经（L4–L5）。"
  },
  "tibialis posterior": {
    zh: "胫骨后肌",
    origin: "起自胫骨、腓骨后面及骨间膜。",
    insertion: "主要止于舟骨粗隆，并扩展至楔骨、骰骨及部分跖骨底。",
    action: "踝跖屈、足内翻，并支持足内侧纵弓。",
    innervation: "胫神经（L4–L5）。"
  },
  "gastrocnemius": {
    zh: "腓肠肌",
    origin: "内、外侧头分别起自股骨内、外侧髁上方及邻近关节囊。",
    insertion: "与比目鱼肌形成跟腱，止于跟骨后面。",
    action: "踝跖屈；并可屈膝。站立和步行推进阶段作用明显。",
    innervation: "胫神经（S1–S2）。"
  },
  "soleus": {
    zh: "比目鱼肌",
    origin: "起自腓骨头及近端后面、胫骨比目鱼肌线及两骨间的腱弓。",
    insertion: "经跟腱止于跟骨后面。",
    action: "强力踝跖屈，站立时维持姿势稳定。",
    innervation: "胫神经（S1–S2）。"
  },
  "fibularis longus": {
    zh: "腓骨长肌",
    origin: "起自腓骨头及腓骨外侧面上部。",
    insertion: "肌腱绕过足底，止于内侧楔骨及第1跖骨底。",
    action: "足外翻、协助跖屈，并支持足横弓。",
    innervation: "腓浅神经（L5–S2）。"
  },
  "fibularis brevis": {
    zh: "腓骨短肌",
    origin: "起自腓骨外侧面下部。",
    insertion: "止于第5跖骨粗隆。",
    action: "足外翻并协助踝跖屈。",
    innervation: "腓浅神经（L5–S2）。"
  },
  "extensor digitorum longus": {
    zh: "趾长伸肌",
    origin: "起自胫骨外侧髁、腓骨前面及骨间膜。",
    insertion: "分为4腱止于第2–5趾中、远节趾骨背侧伸肌腱膜。",
    action: "伸第2–5趾、踝背屈，并协助足外翻。",
    innervation: "腓深神经（L5–S1）。"
  },
  "extensor hallucis longus": {
    zh: "𧿹长伸肌",
    origin: "起自腓骨前面中部及骨间膜。",
    insertion: "止于𧿹趾远节趾骨底背侧。",
    action: "伸𧿹趾、踝背屈，并可轻度协助足内翻。",
    innervation: "腓深神经（L5）。"
  },
  "flexor digitorum longus": {
    zh: "趾长屈肌",
    origin: "起自胫骨后面比目鱼肌线下方。",
    insertion: "止于第2–5趾远节趾骨底。",
    action: "屈第2–5趾、协助踝跖屈并支持足纵弓。",
    innervation: "胫神经（S2–S3）。"
  },
  "flexor hallucis longus": {
    zh: "𧿹长屈肌",
    origin: "起自腓骨后面下部及骨间膜。",
    insertion: "止于𧿹趾远节趾骨底。",
    action: "屈𧿹趾、协助踝跖屈；步行蹬地时很重要，并支持足内侧纵弓。",
    innervation: "胫神经（S2–S3）。"
  },
  "popliteus": {
    zh: "腘肌",
    origin: "起自股骨外侧髁外侧面及邻近外侧半月板。",
    insertion: "止于胫骨后面比目鱼肌线以上。",
    action: "屈膝初期“解锁”膝关节；负重时使股骨相对胫骨外旋，非负重时使胫骨内旋。",
    innervation: "胫神经（L4–S1）。"
  }
};

const ALIASES: Record<string,string> = {};

function normalizeMuscleName(name:string){
  let n=name.toLowerCase().trim();
  n=n.replace(/^(right|left)\s+/,'');
  n=n.replace(/^(humeral head|ulnar head|long head|short head|medial head|lateral head)\s+of\s+/,'');
  return ALIASES[n] ?? n;
}

export function getMuscleStudyInfo(name:string):MuscleStudyInfo|null {
  const n=normalizeMuscleName(name);
  return MUSCLES[n] ?? null;
}

export const MUSCLE_STUDY_COUNT=Object.keys(MUSCLES).length;
