import Header from "../../components/header"
import Footer from "../../components/footer"
import SimulatorContent from "../../components/simulator-content"

export default function SimulatorPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <SimulatorContent />
      <Footer />
    </div>
  )
}
