import './globals.css';
import { inter, shadowsIntoLightTwo } from './fonts';

export const metadata = {
  title: 'VIBE/CHECK - Ship fast. Not a time bomb.',
  description: 'Senior engineers audit your vibe‑coded app for security, scalability and data risks — then stay on call as your second brain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${shadowsIntoLightTwo.variable}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}