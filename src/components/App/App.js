import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import AsideLeft from '../AsideLeft/AsideLeft';
import MainSection from '../MainSection/MainSection';
import AppFooter from '../AppFooter/AppFooter';

function App() {
  return (
    <div>
    <AppHeader />
    <div className='wrapper'>
        <AsideLeft />
      <div className='mainSection'>
        <MainSection />
      </div>
    </div>
    <AppFooter />
    </div>
  );
}

export default App;
