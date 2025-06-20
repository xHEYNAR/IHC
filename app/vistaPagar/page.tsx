import Header from "../../components/header";
import Footer from "../../components/footer";
import VistaPagar from "@/components/vistaPagar";

export default function vistaComprar() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <VistaPagar />
      <Footer />
    </div>
  );
}
