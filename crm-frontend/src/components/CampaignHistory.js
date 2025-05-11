import { useEffect, useState } from 'react';
import axios from 'axios';

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/campaigns', { withCredentials: true })
      .then(res => setCampaigns(res.data))
      .catch(() => alert("Failed to load campaign history"));
  }, []);

  return (
    <div>
      <h3>Campaign History</h3>
      <ul>
        {campaigns.map(c => (
          <li key={c._id}>
            Rule: <strong>{c.rule}</strong> <br />
            Message: <em>{c.message}</em> <br />
            Sent: {c.stats.sent}/{c.stats.total}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignHistory;
