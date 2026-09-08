import type {SystemId} from './anatomy';

const EXACT: Record<string,string> = {
  'heart':'心脏',
  'brain':'脑',
  'brainstem':'脑干',
  'forebrain':'前脑',
  'midbrain':'中脑',
  'hindbrain':'后脑',
  'spinal cord':'脊髓',
  'liver':'肝',
  'right lobe of liver':'肝右叶',
  'left lobe of liver':'肝左叶',
  'stomach':'胃',
  'spleen':'脾',
  'pancreas':'胰腺',
  'parenchyma of pancreas':'胰腺实质',
  'urinary bladder':'膀胱',
  'trachea':'气管',
  'diaphragm':'膈肌',
  'right lung':'右肺',
  'left lung':'左肺',
  'upper lobe of right lung':'右肺上叶',
  'middle lobe of lung':'右肺中叶',
  'lower lobe of right lung':'右肺下叶',
  'upper lobe of left lung':'左肺上叶',
  'lower lobe of left lung':'左肺下叶',
  'kidney':'肾',
  'right kidney':'右肾',
  'left kidney':'左肾',
  'esophagus':'食管',
  'duodenum':'十二指肠',
  'jejunum':'空肠',
  'ileum':'回肠',
  'small intestine':'小肠',
  'large intestine':'大肠',
  'cecum':'盲肠',
  'appendix':'阑尾',
  'rectum':'直肠',
  'gallbladder':'胆囊',
  'thyroid gland':'甲状腺',
  'pituitary gland':'垂体',
  'adrenal gland':'肾上腺',
  'prostate':'前列腺',
  'testis':'睾丸',
  'penis':'阴茎',
  'aorta':'主动脉',
  'ascending aorta':'升主动脉',
  'arch of aorta':'主动脉弓',
  'descending aorta':'降主动脉',
  'abdominal aorta':'腹主动脉',
  'pulmonary trunk':'肺动脉干',
  'superior vena cava':'上腔静脉',
  'inferior vena cava':'下腔静脉',
  'skull':'颅骨',
  'mandible':'下颌骨',
  'maxilla':'上颌骨',
  'clavicle':'锁骨',
  'scapula':'肩胛骨',
  'sternum':'胸骨',
  'body of sternum':'胸骨体',
  'rib':'肋骨',
  'true rib':'真肋',
  'false rib':'假肋',
  'floating rib':'浮肋',
  'humerus':'肱骨',
  'radius':'桡骨',
  'ulna':'尺骨',
  'pelvis':'骨盆',
  'bony pelvis':'骨性骨盆',
  'sacrum':'骶骨',
  'femur':'股骨',
  'patella':'髌骨',
  'tibia':'胫骨',
  'fibula':'腓骨',
  'cervical vertebra':'颈椎',
  'thoracic vertebra':'胸椎',
  'lumbar vertebra':'腰椎',
  'cervical vertebral column':'颈椎柱',
  'thoracic vertebral column':'胸椎柱',
  'lumbar vertebral column':'腰椎柱',
  'vertebral column':'脊柱',
  'intervertebral disk':'椎间盘',
  'temporalis':'颞肌',
  'masseter':'咬肌',
  'trapezius':'斜方肌',
  'deltoid':'三角肌',
  'pectoralis major':'胸大肌',
  'pectoralis minor':'胸小肌',
  'latissimus dorsi':'背阔肌',
  'supraspinatus':'冈上肌',
  'infraspinatus':'冈下肌',
  'subscapularis':'肩胛下肌',
  'teres minor':'小圆肌',
  'teres major':'大圆肌',
  'biceps brachii':'肱二头肌',
  'triceps brachii':'肱三头肌',
  'brachialis':'肱肌',
  'rectus abdominis':'腹直肌',
  'external oblique':'腹外斜肌',
  'internal oblique':'腹内斜肌',
  'gluteus maximus':'臀大肌',
  'gluteus medius':'臀中肌',
  'gluteus minimus':'臀小肌',
  'iliopsoas':'髂腰肌',
  'sartorius':'缝匠肌',
  'rectus femoris':'股直肌',
  'vastus lateralis':'股外侧肌',
  'vastus medialis':'股内侧肌',
  'vastus intermedius':'股中间肌',
  'biceps femoris':'股二头肌',
  'semitendinosus':'半腱肌',
  'semimembranosus':'半膜肌',
  'tibialis anterior':'胫骨前肌',
  'gastrocnemius':'腓肠肌',
  'soleus':'比目鱼肌',
  'fibularis longus':'腓骨长肌',
  'fibularis brevis':'腓骨短肌',
  'fibularis tertius':'第三腓骨肌',
  'sternocleidomastoid':'胸锁乳突肌',
  'levator scapulae':'肩胛提肌',
  'rhomboid major':'大菱形肌',
  'rhomboid minor':'小菱形肌',
  'serratus anterior':'前锯肌',
  'piriformis':'梨状肌',
  'iliacus':'髂肌',
  'psoas major':'腰大肌',
  'tensor fasciae latae':'阔筋膜张肌',
  'adductor longus':'长收肌',
  'adductor brevis':'短收肌',
  'adductor magnus':'大收肌',
  'gracilis':'股薄肌',
  'tibialis posterior':'胫骨后肌',
  'extensor digitorum longus':'趾长伸肌',
  'extensor hallucis longus':'𧿹长伸肌',
  'flexor digitorum longus':'趾长屈肌',
  'flexor hallucis longus':'𧿹长屈肌',
  'popliteus':'腘肌',
  'supinator':'旋后肌',
  'flexor carpi radialis':'桡侧腕屈肌',
  'extensor carpi radialis longus':'桡侧腕长伸肌',
  'extensor carpi ulnaris':'尺侧腕伸肌',
  'optic nerve':'视神经',
  'oculomotor nerve':'动眼神经',
  'trigeminal nerve':'三叉神经',
  'facial nerve':'面神经',
  'vagus nerve':'迷走神经',
  'phrenic nerve':'膈神经',
  'carotid artery':'颈动脉',
  'common carotid artery':'颈总动脉',
  'internal carotid artery':'颈内动脉',
  'external carotid artery':'颈外动脉',
  'subclavian artery':'锁骨下动脉',
  'axillary artery':'腋动脉',
  'brachial artery':'肱动脉',
  'radial artery':'桡动脉',
  'ulnar artery':'尺动脉',
  'femoral artery':'股动脉',
  'popliteal artery':'腘动脉',
  'anterior tibial artery':'胫前动脉',
  'posterior tibial artery':'胫后动脉',
};

const ORDINAL: Record<string,string> = {
  first:'1', second:'2', third:'3', fourth:'4', fifth:'5', sixth:'6',
  seventh:'7', eighth:'8', ninth:'9', tenth:'10', eleventh:'11', twelfth:'12'
};

const BASE_SIDED: Record<string,string> = {
  'femur':'股骨','tibia':'胫骨','fibula':'腓骨','humerus':'肱骨','radius':'桡骨','ulna':'尺骨',
  'clavicle':'锁骨','scapula':'肩胛骨','patella':'髌骨','maxilla':'上颌骨','kidney':'肾',
  'temporalis':'颞肌','masseter':'咬肌','trapezius':'斜方肌','deltoid':'三角肌','pectoralis major':'胸大肌',
  'pectoralis minor':'胸小肌','latissimus dorsi':'背阔肌','supraspinatus':'冈上肌','infraspinatus':'冈下肌',
  'subscapularis':'肩胛下肌','teres minor':'小圆肌','teres major':'大圆肌','biceps brachii':'肱二头肌',
  'triceps brachii':'肱三头肌','brachialis':'肱肌','gluteus maximus':'臀大肌','gluteus medius':'臀中肌',
  'gluteus minimus':'臀小肌','iliopsoas':'髂腰肌','sartorius':'缝匠肌','rectus femoris':'股直肌','vastus lateralis':'股外侧肌',
  'vastus medialis':'股内侧肌','vastus intermedius':'股中间肌','biceps femoris':'股二头肌','semitendinosus':'半腱肌',
  'semimembranosus':'半膜肌','tibialis anterior':'胫骨前肌','gastrocnemius':'腓肠肌','soleus':'比目鱼肌',
  'fibularis longus':'腓骨长肌','fibularis brevis':'腓骨短肌','fibularis tertius':'第三腓骨肌',
  'sternocleidomastoid':'胸锁乳突肌','levator scapulae':'肩胛提肌','rhomboid major':'大菱形肌',
  'rhomboid minor':'小菱形肌','serratus anterior':'前锯肌','piriformis':'梨状肌','iliacus':'髂肌',
  'psoas major':'腰大肌','tensor fasciae latae':'阔筋膜张肌','adductor longus':'长收肌','adductor brevis':'短收肌',
  'adductor magnus':'大收肌','gracilis':'股薄肌','tibialis posterior':'胫骨后肌','extensor digitorum longus':'趾长伸肌',
  'extensor hallucis longus':'𧿹长伸肌','flexor digitorum longus':'趾长屈肌','flexor hallucis longus':'𧿹长屈肌',
  'popliteus':'腘肌','supinator':'旋后肌','flexor carpi radialis':'桡侧腕屈肌','extensor carpi radialis longus':'桡侧腕长伸肌',
  'extensor carpi ulnaris':'尺侧腕伸肌',
  'common carotid artery':'颈总动脉','internal carotid artery':'颈内动脉','external carotid artery':'颈外动脉',
  'subclavian artery':'锁骨下动脉','axillary artery':'腋动脉','brachial artery':'肱动脉','radial artery':'桡动脉',
  'ulnar artery':'尺动脉','femoral artery':'股动脉','popliteal artery':'腘动脉','anterior tibial artery':'胫前动脉',
  'posterior tibial artery':'胫后动脉','lung':'肺'
};

export function zhAnatomyName(name:string):string|null {
  const n=name.toLowerCase().trim();
  if(EXACT[n]) return EXACT[n];

  const sided=n.match(/^(right|left) (.+)$/);
  if(sided && BASE_SIDED[sided[2]]) return `${sided[1]==='right'?'右':'左'}${BASE_SIDED[sided[2]]}`;

  const vertebra=n.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (cervical|thoracic|lumbar) vertebra$/);
  if(vertebra){
    const region=vertebra[2]==='cervical'?'颈':vertebra[2]==='thoracic'?'胸':'腰';
    return `第${ORDINAL[vertebra[1]]}${region}椎`;
  }

  const disc=n.match(/^intervertebral disk of (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) (cervical|thoracic|lumbar) vertebra$/);
  if(disc){
    const region=disc[2]==='cervical'?'颈':disc[2]==='thoracic'?'胸':'腰';
    return `第${ORDINAL[disc[1]]}${region}椎相关椎间盘`;
  }

  const rib=n.match(/^(?:(right|left) )?(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth) rib$/);
  if(rib){
    const side=rib[1]?`${rib[1]==='right'?'右':'左'}侧`:'';
    return `${side}第${ORDINAL[rib[2]]}肋骨`;
  }

  return null;
}

export function displayAnatomyName(name:string){return zhAnatomyName(name)??name;}
export function bilingualAnatomyName(name:string){const zh=zhAnatomyName(name);return zh?`${zh} · ${name}`:name;}
export function anatomySearchText(name:string){const zh=zhAnatomyName(name);return `${name} ${zh??''}`.toLowerCase();}

export const SYSTEM_EN:Record<SystemId,string> = {
  skeletal:'Skeleton',muscular:'Muscles',cardiac:'Heart',sensory:'Sensory organs',arterial:'Arteries',venous:'Veins',nervous:'Nervous system',respiratory:'Respiratory',digestive:'Digestive',urinary:'Urinary',lymphatic:'Lymphatic',endocrine:'Endocrine',reproductive:'Reproductive',integumentary:'Body surface',connective:'Connective tissue'
};
