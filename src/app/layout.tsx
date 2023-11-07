import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import { ReactNode } from 'react'


import './globals.css'

export const metadata: Metadata = {
    title: 'Black',
    description: 'Black Corporation',
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                        <Sidebar />
                        {children}
                </Providers>
            </body>
        </html>
    )
}
