import { Routes, Route } from 'react-router-dom';
import CenterBowl from './components/CenterBowl';
import Header from "./components/Header"
import Footer from "./components/Footer"
import BowlSeletion from "./components/BowlSelection"
import BaseSelection from "./components/BaseSelection"
import SummaryBar from './components/SummaryBar';
import IngredientSection from './components/IngredientSection';
import { Configurator } from './pages/Configurator';
import { Community } from './pages/Community';
import { Print } from './pages/Print';

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
        <Header />

        <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
                <BowlSeletion />
                <CenterBowl />
                <BaseSelection />
            </div>
            <IngredientSection />
            <SummaryBar />
        </main>
        <Footer />
        <Routes>
            <Route path="/" element={<Configurator />} />
            <Route path="/community" element={<Community />} />
            <Route path="/print" element={<Print />} />
        </Routes>
    </div>
  )
}

export default App;