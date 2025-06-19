import Header from "../../components/header"
import Footer from "../../components/footer"
import ReviewsContent from "../../components/reviews-content";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <ReviewsContent />
      <Footer />
    </div>
  )
}
