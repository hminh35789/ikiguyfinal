export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className='flex-grow container m-auto px-4'> {children}</main>
}
