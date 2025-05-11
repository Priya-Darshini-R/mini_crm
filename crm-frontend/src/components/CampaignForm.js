import { useState } from 'react';
import axios from 'axios';

function CampaignForm() {
  const [rule, setRule] = useState('');
  const [message, setMessage] = useState('');

  const submit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/campaigns', { rule, message }, { withCredentials: true });
      alert(`Campaign sent to ${res.data.stats.total} customers`);
    } catch (err) {
      alert("Failed to send campaign.");
    }
  };

  return (
    <div>
      <h3>Create Campaign</h3>
      <input placeholder="Rule (e.g. totalSpend > 5000)" value={rule} onChange={e => setRule(e.target.value)} /> <br />
      <input placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} /> <br />
      <button onClick={submit}>Send</button>
    </div>
  );
}

export default CampaignForm;
