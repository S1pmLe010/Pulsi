import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { store } from './store';
const secret=new TextEncoder().encode(process.env.JWT_SECRET||'pulsi-demo-secret-change-me');
export async function hashPin(pin:string){return bcrypt.hash(pin,10)}
export async function verifyPin(pin:string,hash:string){return bcrypt.compare(pin,hash)}
export async function signSession(payload:{id:string;role:'admin'|'parent'|'child'}){return new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret)}
export async function readSession(token:string){try{const {payload}=await jwtVerify(token,secret);return payload as {id:string;role:'admin'|'parent'|'child'}}catch{return null}}
export async function getSession(){const c=await cookies(); const token=c.get('pulsi_session')?.value; return token?readSession(token):null}
export async function requireRole(role:'admin'|'parent'|'child'){const s=await getSession(); if(!s||s.role!==role) throw new Error('FORBIDDEN'); return s;}
export async function requireAnyRole(){const s=await getSession(); if(!s) throw new Error('UNAUTHORIZED'); return s;}
export function publicUser(id:string){const u=store.users.find(x=>x.id===id); return u?{id:u.id,name:u.name,role:u.role,loginId:u.loginId}:null}
