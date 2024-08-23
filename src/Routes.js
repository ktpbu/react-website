import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Contact, Home, Rush, Members, HackKTP, AboutKTP, NotFound, Privacy_Policy } from './pages';

export const Navigation = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rush" element={<Rush />} />
                <Route path="/members" element={<Members />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hackktp" element={<HackKTP />} />
                <Route path="/aboutktp" element={<AboutKTP />} />
                <Route path="/privacy_policy" element={<Privacy_Policy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}