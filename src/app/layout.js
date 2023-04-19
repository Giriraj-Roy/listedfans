import './globals.css'

export const metadata = {
  title: 'Listed Fans',
  description: 'An Assignment By Listed Fans',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
