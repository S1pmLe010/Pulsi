# PULSI

PULSI — ota-ona va farzand uchun moliyaviy odatlar platformasi.

## Ishga tushirish

```bash
npm install
npm run dev
```

## Demo accountlar

- Admin: `admin001` / `1234`
- Ota-ona: `parent001` / `1234`
- Farzand: `child001` / `1234`

## Asosiy oqimlar

- `/register` — yangi ota-ona accountini yaratish
- `/login` — parent, child yoki admin sifatida kirish
- Parent: farzand qo‘shish, task yaratish/tasdiqlash/rad etish, withdrawal boshqarish, tranzaksiyalar
- Child: task topshirish, wallet, withdrawal so‘rovi, savings goal va goal deposit
- Admin: foydalanuvchilarni ko‘rish/bloklash/faollashtirish va withdrawal nazorati

## Muhim eslatma

Hozirgi demo versiyada ma’lumotlar server xotirasidagi store’da saqlanadi. Production uchun `MONGODB_URI` va real persistent database adapterini ulash tavsiya etiladi.
# Pulsi
