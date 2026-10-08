export type Role="parent"|"child";
export const demo={parent:{id:"parent001",name:"Behruz",role:"parent" as Role},child:{id:"child001",name:"Ali",role:"child" as Role}};
export const children=[
 {id:"child001",name:"Ali",balance:150000,streak:7,xp:1840,level:12,goals:3,pendingTasks:2,avatar:"A"},
 {id:"child002",name:"Madina",balance:92000,streak:4,xp:1120,level:9,goals:2,pendingTasks:1,avatar:"M"}
];
export const tasks=[
 {id:"t1",title:"Xonani yig‘ishtirish",child:"Ali",reward:10000,status:"submitted",priority:"High",deadline:"Bugun, 19:00"},
 {id:"t2",title:"Kitob o‘qish — 30 daqiqa",child:"Ali",reward:7000,status:"in_progress",priority:"Medium",deadline:"Ertaga, 18:00"},
 {id:"t3",title:"Stolni tartibga keltirish",child:"Madina",reward:8000,status:"approved",priority:"Low",deadline:"Bugun, 20:00"}
];
export const transactions=[
 {date:"08 Okt",type:"task_reward",description:"Xonani yig‘ishtirish",amount:20000},
 {date:"07 Okt",type:"parent_bonus",description:"Tug‘ilgan kun bonusi",amount:50000},
 {date:"05 Okt",type:"withdrawal",description:"Cash withdrawal",amount:-30000},
 {date:"04 Okt",type:"goal_transfer",description:"Quloqchin jamg‘armasi",amount:-20000}
];
export const goals=[{id:"g1",title:"Quloqchin",current:180000,target:300000,emoji:"🎧"},{id:"g2",title:"Velosiped",current:240000,target:800000,emoji:"🚲"},{id:"g3",title:"Kitoblar",current:45000,target:100000,emoji:"📚"}];
export const lessons=["Ehtiyoj va xohish","Daromad va xarajat","Jamg‘arma nima?","Maqsad qo‘yish","Byudjet","Aqlli xarid","Bank nima?","Pul xavfsizligi","Foiz nima?","Investitsiya asoslari","Kredit nima?","Narx va chegirma","Pulni rejalashtirish","Favqulodda jamg‘arma","Moliyaviy odatlar"];
export const notifications=["Ali vazifani topshirdi.","Yangi vazifa berildi: Kitob o‘qish","Quloqchin maqsadi 60% ga yetdi.","Deadline yaqinlashmoqda."];
