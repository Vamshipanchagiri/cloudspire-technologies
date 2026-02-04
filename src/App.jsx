import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SinglePageApp from '@/components/SinglePageApp';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <MainLayout>
      <SinglePageApp />
      <Toaster />
    </MainLayout>
  );
}

export default App;