export type AcupointSide = 'midline'|'left'|'right';

export interface AcupointMarker {
  id:string;
  pointId:string;
  side:AcupointSide;
  position:[number,number,number];
  label:string;
}

export interface AcupointStudyInfo {
  id:string;
  code:string;
  zh:string;
  pinyin:string;
  meridian:string;
  location:string;
  anatomy:string;
  markers:AcupointMarker[];
}

const bilateral=(id:string,code:string,zh:string,x:number,y:number,z:number):AcupointMarker[]=>[
  {id:`${id}-R`,pointId:id,side:'right',position:[-Math.abs(x),y,z],label:`右 ${zh} ${code}`},
  {id:`${id}-L`,pointId:id,side:'left',position:[ Math.abs(x),y,z],label:`左 ${zh} ${code}`},
];

const midline=(id:string,code:string,zh:string,y:number,z:number):AcupointMarker[]=>[
  {id:`${id}-M`,pointId:id,side:'midline',position:[0,y,z],label:`${zh} ${code}`},
];

/**
 * Human Atlas CN V1.2 acupuncture pilot layer.
 *
 * Important:
 * - Point coordinates below are manually approximated for THIS BodyParts3D reference model.
 * - They are not a standardized acupuncture 3D coordinate dataset.
 * - This is a self-study visualization layer, not a clinical localization system.
 */
export const ACUPOINTS:AcupointStudyInfo[]=[
  {id:'GV14',code:'GV14',zh:'大椎',pinyin:'Dàzhuī',meridian:'督脉',
   location:'后正中线上，第7颈椎棘突下凹陷中。',
   anatomy:'位于颈胸交界后正中线附近；本图仅作三维学习定位参考。',
   markers:midline('GV14','GV14','大椎',1.455,-0.112)},
  {id:'GV4',code:'GV4',zh:'命门',pinyin:'Mìngmén',meridian:'督脉',
   location:'后正中线上，第2腰椎棘突下凹陷中。',
   anatomy:'位于腰椎后正中线 L2 水平附近。',
   markers:midline('GV4','GV4','命门',1.095,-0.112)},
  {id:'GV3',code:'GV3',zh:'腰阳关',pinyin:'Yāoyángguān',meridian:'督脉',
   location:'后正中线上，第4腰椎棘突下凹陷中。',
   anatomy:'位于腰椎后正中线 L4 水平附近。',
   markers:midline('GV3','GV3','腰阳关',1.040,-0.112)},
  {id:'GB21',code:'GB21',zh:'肩井',pinyin:'Jiānjǐng',meridian:'足少阳胆经',
   location:'肩胛区，第7颈椎棘突与肩峰最外侧点连线的中点。',
   anatomy:'大致位于斜方肌上部表面；三维点为人工近似标定。',
   markers:bilateral('GB21','GB21','肩井',0.105,1.425,-0.010)},
  {id:'LI15',code:'LI15',zh:'肩髃',pinyin:'Jiānyú',meridian:'手阳明大肠经',
   location:'肩峰前下方，肩外展时肩峰前缘下方凹陷中。',
   anatomy:'接近三角肌上部及肩峰区域。',
   markers:bilateral('LI15','LI15','肩髃',0.205,1.360,0.012)},
  {id:'SJ14',code:'SJ14',zh:'肩髎',pinyin:'Jiānliáo',meridian:'手少阳三焦经',
   location:'肩峰角与肱骨大结节之间，肩外展时肩峰后下方凹陷中。',
   anatomy:'位于肩后外侧，邻近三角肌后部。',
   markers:bilateral('SJ14','SJ14','肩髎',0.190,1.352,-0.066)},
  {id:'SI11',code:'SI11',zh:'天宗',pinyin:'Tiānzōng',meridian:'手太阳小肠经',
   location:'肩胛区，肩胛冈中点与肩胛骨下角连线的上1/3与下2/3交点附近凹陷中。',
   anatomy:'投影位于冈下窝区域；本模型点位为学习性近似。',
   markers:bilateral('SI11','SI11','天宗',0.090,1.335,-0.116)},
  {id:'LI11',code:'LI11',zh:'曲池',pinyin:'Qūchí',meridian:'手阳明大肠经',
   location:'肘外侧，屈肘时尺泽与肱骨外上髁连线中点附近。',
   anatomy:'位于肘外侧表面，邻近肱桡肌及前臂伸肌群近端。',
   markers:bilateral('LI11','LI11','曲池',0.225,1.105,0.010)},
  {id:'PC6',code:'PC6',zh:'内关',pinyin:'Nèiguān',meridian:'手厥阴心包经',
   location:'前臂前区，腕掌侧远端横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间。',
   anatomy:'前臂掌侧中部，邻近正中神经走行区域。',
   markers:bilateral('PC6','PC6','内关',0.235,0.935,0.052)},
  {id:'LI4',code:'LI4',zh:'合谷',pinyin:'Hégǔ',meridian:'手阳明大肠经',
   location:'手背，第2掌骨桡侧中点附近。',
   anatomy:'位于第1、2掌骨之间背侧软组织区域。',
   markers:bilateral('LI4','LI4','合谷',0.282,0.842,0.055)},
  {id:'BL23',code:'BL23',zh:'肾俞',pinyin:'Shènshū',meridian:'足太阳膀胱经',
   location:'腰区，第2腰椎棘突下，后正中线旁开1.5寸。',
   anatomy:'位于 L2 水平两侧竖脊肌区域；点位为模型近似。',
   markers:bilateral('BL23','BL23','肾俞',0.042,1.095,-0.116)},
  {id:'GB30',code:'GB30',zh:'环跳',pinyin:'Huántiào',meridian:'足少阳胆经',
   location:'臀区，股骨大转子最凸点与骶管裂孔连线的外1/3与内2/3交点附近。',
   anatomy:'位于臀大肌深面投影区域，邻近髋后外侧。',
   markers:bilateral('GB30','GB30','环跳',0.120,0.865,-0.090)},
  {id:'ST35',code:'ST35',zh:'犊鼻',pinyin:'Dúbí',meridian:'足阳明胃经',
   location:'膝前区，髌韧带外侧凹陷中。',
   anatomy:'位于髌韧带外侧、膝前外侧区域。',
   markers:bilateral('ST35','ST35','犊鼻',0.078,0.445,0.062)},
  {id:'ST36',code:'ST36',zh:'足三里',pinyin:'Zúsānlǐ',meridian:'足阳明胃经',
   location:'小腿前外侧，犊鼻下3寸，胫骨前嵴外一横指处。',
   anatomy:'位于胫骨前肌上部附近；本图为体表近似点。',
   markers:bilateral('ST36','ST36','足三里',0.090,0.375,0.060)},
  {id:'GB34',code:'GB34',zh:'阳陵泉',pinyin:'Yánglíngquán',meridian:'足少阳胆经',
   location:'小腿外侧，腓骨头前下方凹陷中。',
   anatomy:'位于近端胫腓关节与腓骨头前下方区域。',
   markers:bilateral('GB34','GB34','阳陵泉',0.112,0.405,-0.002)},
  {id:'BL40',code:'BL40',zh:'委中',pinyin:'Wěizhōng',meridian:'足太阳膀胱经',
   location:'膝后区，腘横纹中点。',
   anatomy:'位于腘窝中央体表投影；深部有重要神经血管结构。',
   markers:bilateral('BL40','BL40','委中',0.060,0.448,-0.090)},
  {id:'BL57',code:'BL57',zh:'承山',pinyin:'Chéngshān',meridian:'足太阳膀胱经',
   location:'小腿后区，腓肠肌两肌腹与跟腱移行处附近。',
   anatomy:'位于小腿后侧腓肠肌远端与跟腱近端区域。',
   markers:bilateral('BL57','BL57','承山',0.066,0.270,-0.098)},
  {id:'SP6',code:'SP6',zh:'三阴交',pinyin:'Sānyīnjiāo',meridian:'足太阴脾经',
   location:'小腿内侧，内踝尖上3寸，胫骨内侧缘后际。',
   anatomy:'位于小腿远端内侧、胫骨内侧缘后方。',
   markers:bilateral('SP6','SP6','三阴交',0.058,0.170,0.005)},
  {id:'GB39',code:'GB39',zh:'悬钟',pinyin:'Xuánzhōng',meridian:'足少阳胆经',
   location:'小腿外侧，外踝尖上3寸，腓骨前缘。',
   anatomy:'位于腓骨远端前方体表区域。',
   markers:bilateral('GB39','GB39','悬钟',0.105,0.165,-0.002)},
  {id:'BL60',code:'BL60',zh:'昆仑',pinyin:'Kūnlún',meridian:'足太阳膀胱经',
   location:'踝后外侧，外踝尖与跟腱之间凹陷中。',
   anatomy:'位于外踝与跟腱之间的后外侧软组织区。',
   markers:bilateral('BL60','BL60','昆仑',0.086,0.083,-0.050)},
  {id:'KI3',code:'KI3',zh:'太溪',pinyin:'Tàixī',meridian:'足少阴肾经',
   location:'踝后内侧，内踝尖与跟腱之间凹陷中。',
   anatomy:'位于内踝与跟腱之间的后内侧软组织区。',
   markers:bilateral('KI3','KI3','太溪',0.052,0.083,-0.047)},
  {id:'ST41',code:'ST41',zh:'解溪',pinyin:'Jiěxī',meridian:'足阳明胃经',
   location:'踝前区，踝关节前方横纹中央附近。',
   anatomy:'位于踝关节前方伸肌腱区域。',
   markers:bilateral('ST41','ST41','解溪',0.070,0.088,0.055)},
];

export const ACUPOINT_MARKERS:AcupointMarker[]=ACUPOINTS.flatMap(p=>p.markers);
export const ACUPOINT_COUNT=ACUPOINTS.length;
export const ACUPOINT_MARKER_COUNT=ACUPOINT_MARKERS.length;

const byId=new Map(ACUPOINTS.map(p=>[p.id,p]));
export function getAcupoint(id:string){return byId.get(id)??null;}
