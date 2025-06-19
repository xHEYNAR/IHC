import Header from "../../components/header"
import Footer from "../../components/footer"
import VirtualAssistantPageContent from "../../components/virtual-assistant-page-content"

export default function VirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <VirtualAssistantPageContent />
      <Footer />
    </div>
  )
}
