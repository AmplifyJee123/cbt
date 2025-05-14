import React from 'react';
import TestContainer from './components/TestContainer';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  // Simple route handling
  const isAdminRoute = window.location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      {isAdminRoute ? <AdminDashboard /> : <TestContainer />}
    </div>
  );
}

export default App;