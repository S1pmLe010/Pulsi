import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"PULSI — O‘rgan. Ishla. Jamg‘ar.",description:"Bolalar uchun moliyaviy ta’lim va cho‘ntak pulini boshqarish platformasi."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}
