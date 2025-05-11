import React from 'react';
import CustomerForm from './components/CustomerForm';
import CampaignForm from './components/CampaignForm';
import CampaignHistory from './components/CampaignHistory';
import Login from './components/Login';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mini CRM Platform</h2>
      <Login />
      <hr />
      <CustomerForm />
      <hr />
      <CampaignForm />
      <hr />
      <CampaignHistory />
    </div>
  );
}

export default App;
