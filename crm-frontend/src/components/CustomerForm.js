import { useState } from 'react';
import axios from 'axios';

function CustomerForm() {
  const [form, setForm] = useState({
    name: '', email: '', totalSpend: '', visits: '', lastActive: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await axios.post('http://localhost:5000/api/customers', form, { withCredentials: true });
      alert("Customer added!");
    } catch (err) {
      alert("Error adding customer.");
    }
  };

  return (
    <div>
      <h3>Add Customer</h3>
      <input name="name" placeholder="Name" onChange={handleChange} /> <br />
      <input name="email" placeholder="Email" onChange={handleChange} /> <br />
      <input name="totalSpend" placeholder="Total Spend" onChange={handleChange} /> <br />
      <input name="visits" placeholder="Visits" onChange={handleChange} /> <br />
      <input name="lastActive" placeholder="Last Active (YYYY-MM-DD)" onChange={handleChange} /> <br />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default CustomerForm;
