import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: "500",
  subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{backgroundColor: "#053545", color: "white"}} >{children}</body>
    </html>
  )
}
