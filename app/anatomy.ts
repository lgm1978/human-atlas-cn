export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'骨骼系统',color:'#e2d9ba',description:'骨骼构成人体的支撑框架，保护重要脏器，并为肌肉提供附着点；骨组织还参与矿物质储存和血细胞生成。'},
 {id:'muscular',name:'肌肉系统',color:'#a85b50',description:'骨骼肌通过牵拉附着点产生运动，并与肌腱共同完成关节活动、维持姿势和产热。'},
 {id:'cardiac',name:'心脏',color:'#b96760',description:'心脏是由四个腔室组成的肌性泵，瓣膜使血液沿肺循环和体循环方向流动。'},
 {id:'sensory',name:'感觉器官',color:'#b0c8ce',description:'这些结构参与视觉、听觉和平衡等特殊感觉，感受刺激并与神经系统共同传递信息。'},
 {id:'arterial',name:'动脉系统',color:'#c05245',description:'动脉将血液由心脏输送至全身组织；肺循环中的肺动脉则将血液输送至肺。'},
 {id:'venous',name:'静脉系统',color:'#527c9f',description:'静脉将血液回流至心脏，浅、深静脉网汇集组织中的血液；肺静脉将含氧血带回左心。'},
 {id:'nervous',name:'神经系统',color:'#d8b565',description:'脑、脊髓和周围神经负责传递和处理信号，参与感觉、运动、协调及自主功能调节。'},
 {id:'respiratory',name:'呼吸系统',color:'#b98991',description:'呼吸道将空气输送至肺，肺内完成氧和二氧化碳交换；呼吸肌造成胸腔压力变化以维持通气。'},
 {id:'digestive',name:'消化系统',color:'#b8916b',description:'消化道负责分解食物、吸收营养和水分并输送残渣；肝、胰等附属器官参与胆汁和消化酶的分泌。'},
 {id:'urinary',name:'泌尿系统',color:'#b47961',description:'肾脏过滤血液并调节体液、电解质和酸碱平衡；尿液经输尿管进入膀胱，再由尿道排出。'},
 {id:'lymphatic',name:'淋巴系统',color:'#879f7c',description:'淋巴管将组织间多余液体回流至循环；淋巴结及其他淋巴器官参与免疫监视和免疫应答。'},
 {id:'endocrine',name:'内分泌系统',color:'#c5a09a',description:'内分泌器官将激素释放入血，协调代谢、生长、应激反应和生殖等过程。'},
 {id:'reproductive',name:'生殖系统',color:'#bda098',description:'本图谱所示男性生殖结构参与精子的产生、成熟和运输，并参与性激素分泌。'},
 {id:'integumentary',name:'体表系统',color:'#ba9b7d',description:'体表提供外部解剖参照；皮肤及相关结构形成保护屏障，并参与感觉和体温调节。'},
 {id:'connective',name:'结缔组织',color:'#aec3bb',description:'软骨、韧带及其他结缔组织用于支撑、连接和分隔结构，并参与关节稳定和机械负荷分配。'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'位于胸腔内的肌性泵。右心将血液泵向肺，左心将血液泵入体循环。',
 'liver':'位于右侧膈下的大型实质器官，参与营养物质代谢、胆汁生成以及多种血浆蛋白合成。',
 'brain':'神经系统的中枢器官，其不同区域共同参与感觉、运动、记忆、语言及多种生理功能调节。',
 'stomach':'位于食管与小肠之间的肌性囊状器官，可暂存食物并与胃酸和酶混合后排入十二指肠。',
 'spleen':'位于左上腹的淋巴器官，参与血液过滤、衰老血细胞清除和免疫反应。',
 'pancreas':'兼具外分泌和内分泌功能的腹部器官，可向小肠分泌消化酶，并分泌胰岛素、胰高血糖素等激素。',
 'urinary bladder':'位于盆腔的肌性储尿器官，储存由输尿管输送来的尿液。',
 'trachea':'连接喉与支气管的主要气道，软骨支架有助于维持气道开放。',
 'diaphragm':'分隔胸腔和腹腔的宽大肌肉，收缩时增加胸腔容积，是吸气的重要动力。',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
