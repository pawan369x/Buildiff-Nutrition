import React from 'react';
import CreativeNavbar from './components/CreativeNavbar';
import Banner from './components/Banner';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-['Outfit']">
      {/* Floating Creative Navbar with Buildiff Branding */}
      <CreativeNavbar />

      {/* Hero Banner */}
      <main>
        <Banner />
      </main>
    </div>
  );
}
