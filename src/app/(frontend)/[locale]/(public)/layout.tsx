import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
