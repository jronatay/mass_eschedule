import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Members from "./pages/Members/Members"
import Details from "./pages/Members/id/Details"
import MassAssignment from "./pages/Members/id/MassAssignment"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="members/details" element={<Details />} />
        <Route path="members/mass" element={<MassAssignment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
