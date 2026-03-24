import Header from "./components/Header"
import Footer from "./components/Footer"
import BowlSeletion from "./components/BowlSelection"
import BaseSelection from "./components/BaseSelection"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <BowlSeletion />
      <BaseSelection />
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4" />
      <Footer />
    </div>
  )
}

export default App
