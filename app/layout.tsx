import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PostgreSQL Slow Query Alerter — Real-time DB Monitoring',
  description: 'Monitor PostgreSQL slow queries and get instant Slack/email alerts with AI-powered optimization suggestions. Built for indie developers and small teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a844819-c199-4637-9f61-040b6204d434"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
