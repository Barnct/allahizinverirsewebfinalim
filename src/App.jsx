import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AllRecipes from './pages/AllRecipes';
import { SignedIn } from '@clerk/clerk-react';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full p-4">
        <div className="container w-full min-h-full mx-auto flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/all"
              element={
                <SignedIn>
                  <AllRecipes />
                </SignedIn>
              }
            />
            <Route
              path="/favorites"
              element={
                <SignedIn>
                  <Favorites />
                </SignedIn>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
