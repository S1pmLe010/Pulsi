export type Role = 'admin' | 'parent' | 'child';
export type User = { id:string; name:string; loginId:string; pin:string; role:Role; parentId?:string; status:'active'|'blocked'; createdAt:string };
export type Child = { id:string; name:string; loginId:string; parentId:string; balance:number; streak:number; xp:number; level:number; avatar:string };
export type Task = { id:string; title:string; childId:string; reward:number; status:'pending'|'in_progress'|'submitted'|'approved'|'rejected'|'cancelled'; priority:'Low'|'Medium'|'High'; deadline:string; reason?:string };
export type Goal = { id:string; childId:string; title:string; current:number; target:number; emoji:string };
export type Transaction = { id:string; childId:string; type:string; description:string; amount:number; createdAt:string };
export type Withdrawal = { id:string; childId:string; amount:number; status:'pending'|'approved'|'rejected'; reason?:string; createdAt:string };
export type Notification = { id:string; userId:string; text:string; read:boolean; createdAt:string };

const now=()=>new Date().toISOString();
const users:User[] = [
 {id:'admin001',name:'PULSI Admin',loginId:'admin001',pin:'1234',role:'admin',status:'active',createdAt:now()},
 {id:'parent001',name:'Behruz',loginId:'parent001',pin:'1234',role:'parent',status:'active',createdAt:now()},
 {id:'child001',name:'Ali',loginId:'child001',pin:'1234',role:'child',parentId:'parent001',status:'active',createdAt:now()},
 {id:'child002',name:'Madina',loginId:'child002',pin:'1234',role:'child',parentId:'parent001',status:'active',createdAt:now()},
];
const children:Child[]=[
 {id:'child001',name:'Ali',loginId:'child001',parentId:'parent001',balance:150000,streak:7,xp:1840,level:12,avatar:'A'},
 {id:'child002',name:'Madina',loginId:'child002',parentId:'parent001',balance:92000,streak:4,xp:1120,level:9,avatar:'M'},
];
const tasks:Task[]=[
 {id:'t1',title:'Xonani yig‘ishtirish',childId:'child001',reward:10000,status:'submitted',priority:'High',deadline:'Bugun, 19:00'},
 {id:'t2',title:'Kitob o‘qish — 30 daqiqa',childId:'child001',reward:7000,status:'in_progress',priority:'Medium',deadline:'Ertaga, 18:00'},
 {id:'t3',title:'Stolni tartibga keltirish',childId:'child002',reward:8000,status:'approved',priority:'Low',deadline:'Bugun, 20:00'},
];
const goals:Goal[]=[
 {id:'g1',title:'Quloqchin',childId:'child001',current:180000,target:300000,emoji:'🎧'},
 {id:'g2',title:'Velosiped',childId:'child001',current:240000,target:800000,emoji:'🚲'},
 {id:'g3',title:'Kitoblar',childId:'child001',current:45000,target:100000,emoji:'📚'},
];
const transactions:Transaction[]=[
 {id:'tr1',childId:'child001',type:'task_reward',description:'Xonani yig‘ishtirish',amount:20000,createdAt:now()},
 {id:'tr2',childId:'child001',type:'parent_bonus',description:'Tug‘ilgan kun bonusi',amount:50000,createdAt:now()},
 {id:'tr3',childId:'child001',type:'withdrawal',description:'Cash withdrawal',amount:-30000,createdAt:now()},
];
const withdrawals:Withdrawal[]=[{id:'w1',childId:'child001',amount:90000,status:'pending',createdAt:now()}];
const notifications:Notification[]=[];
const lessons=['Ehtiyoj va xohish','Daromad va xarajat','Jamg‘arma nima?','Maqsad qo‘yish','Byudjet','Aqlli xarid','Bank nima?','Pul xavfsizligi','Foiz nima?','Investitsiya asoslari','Kredit nima?','Narx va chegirma','Pulni rejalashtirish','Favqulodda jamg‘arma','Moliyaviy odatlar'];
const id=(p:string)=>`${p}${Date.now()}${Math.random().toString(36).slice(2,7)}`;
export const store={users,children,tasks,goals,transactions,withdrawals,notifications,lessons,id,now};
export function addNotification(userId:string,text:string){notifications.unshift({id:id('n'),userId,text,read:false,createdAt:now()});}
export function findUser(loginId:string){return users.find(u=>u.loginId===loginId);}
export function getChild(id:string){return children.find(c=>c.id===id);}
export function getParentChildren(parentId:string){return children.filter(c=>c.parentId===parentId);}
export function userPublic(u:User){return {id:u.id,name:u.name,loginId:u.loginId,role:u.role,parentId:u.parentId,status:u.status,createdAt:u.createdAt};}
