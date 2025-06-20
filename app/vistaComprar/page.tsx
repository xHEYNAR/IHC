import Header from "../../components/header";
import Footer from "../../components/footer";
import VistaComprar from "@/components/vistaComprar";

export default function vistaComprar() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <VistaComprar />
      <Footer />
    </div>
  );
}
