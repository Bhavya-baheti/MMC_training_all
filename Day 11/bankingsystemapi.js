const express = require("express");

const app = express();
const port = 3001;

app.use(express.json());

let accounts = [
        { accNo: 101, accName: "Alice Johnson", accType: "Saving", accBalance: 2500.75, accIsActive: true },
        { accNo: 102, accName: "Bob Smith", accType: "Current", accBalance: 1340.00, accIsActive: true },
        { accNo: 103, accName: "Catherine Lee", accType: "Saving", accBalance: 9820.50, accIsActive: false },
        { accNo: 104, accName: "David Kim", accType: "Current", accBalance: 560.25, accIsActive: true },
        { accNo: 105, accName: "Ella Martinez", accType: "Saving", accBalance: 120.00, accIsActive: false },
        { accNo: 106, accName: "Franklin Wright", accType: "Current", accBalance: 15000.00, accIsActive: true },
        { accNo: 107, accName: "Grace Chen", accType: "Saving", accBalance: 785.90, accIsActive: true },
        { accNo: 108, accName: "Henry Patel", accType: "Current", accBalance: 430.10, accIsActive: false },
        { accNo: 109, accName: "Isabella Green", accType: "Saving", accBalance: 22000.00, accIsActive: true },
        { accNo: 110, accName: "Jack Thompson", accType: "Current", accBalance: 999.99, accIsActive: true }
    ];

    app.get('/accounts', (req, res) =>{
    res.json(accounts);
});

// app.get('/accounts/:accNo', (req, res) => {
//   const accNo = parseInt(req.params.accNo);
//   const account = accounts.find(acc => acc.accNo === accNo);
//   if (!account) return res.status(404).json({ message: 'Account not found' });
//   res.json(account);
// });


// app.get('/accounts/inactive', (req, res) => {
//   const inactiveAccounts = accounts.filter(acc => !acc.accIsActive);
//   res.json(inactiveAccounts);
// });

app.get('/accounts/inactive', (req, res) => {
  const inactiveAccounts = accounts.filter(acc => !acc.accIsActive);
  res.json(inactiveAccounts);
});

// app.get('/accounts/:accNo', (req, res) => {
//   const accNo = parseInt(req.params.accNo);
//   const account = accounts.find(acc => acc.accNo === accNo);
//   if (!account) return res.status(404).json({ message: 'Account not found' });
//   res.json(account);
// });

app.get('/accounts/summary', (req, res) => {
  const totalAccounts = accounts.length;
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.accBalance, 0);
  const totalActive = accounts.filter(acc => acc.accIsActive).length;
  const totalInactive = totalAccounts - totalActive;
  const totalSaving = accounts.filter(acc => acc.accType === 'Saving').length;
  const totalCurrent = accounts.filter(acc => acc.accType === 'Current').length;

  res.json({
    totalAccounts,
    totalBalance,
    totalActive,
    totalInactive,
    totalSaving,
    totalCurrent
  });
});

// app.delete('/accounts/:accNo', (req, res) => {
//   const accNo = parseInt(req.params.accNo);
//   const index = accounts.findIndex(acc => acc.accNo === accNo);
//   if (index === -1) return res.status(404).json({ message: 'Account not found' });

//   const deleted = accounts.splice(index, 1);
//   res.json(deleted[0]);
// });

app.delete('/accounts/inactive', (req, res) => {
  const beforeCount = accounts.length;
  accounts = accounts.filter(acc => acc.accIsActive);
  const deletedCount = beforeCount - accounts.length;

  res.json({ message: `${deletedCount} inactive accounts deleted` });
});

app.delete('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const index = accounts.findIndex(acc => acc.accNo === accNo);
  if (index === -1) return res.status(404).json({ message: 'Account not found' });

  const deleted = accounts.splice(index, 1);
  res.json(deleted[0]);
});

app.post('/accounts', (req, res) => {
  const { accNo, accName, accType, accBalance, accIsActive } = req.body;

  if (!accNo || !accName || !accType || accBalance == null || accIsActive == null) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const exists = accounts.some(acc => acc.accNo === accNo);
  if (exists) return res.status(409).json({ message: 'Account number already exists' });

  const newAccount = { accNo, accName, accType, accBalance, accIsActive };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
});

app.put('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const { accBalance } = req.body;

  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) return res.status(404).json({ message: 'Account not found' });

  if (accBalance == null || typeof accBalance !== 'number') {
    return res.status(400).json({ message: 'Invalid balance value' });
  }

  account.accBalance = accBalance;
  res.json(account);
});


app.get('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) return res.status(404).json({ message: 'Account not found' });
  res.json(account);
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});