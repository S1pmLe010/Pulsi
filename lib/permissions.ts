export function assertRole(actual:string,expected:"parent"|"child"){if(actual!==expected)throw new Error("FORBIDDEN")}
