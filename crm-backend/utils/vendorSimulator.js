exports.sendMessage = (customer, message) => {
  const success = Math.random() < 0.9;
  return {
    customerId: customer._id,
    status: success ? 'SENT' : 'FAILED',
    message
  };
};
