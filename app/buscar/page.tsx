import Header from "../../components/header"
import Footer from "../../components/footer"
import SearchPageContent from "../../components/search-page-content"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <SearchPageContent />
      <Footer />
    </div>
  )
}
