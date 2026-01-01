const express = require('express');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const app = express();
const Nickfirebase = {
  apiKey: process.env['apiKey'],
  authDomain: "phase3-15c78.firebaseapp.com",
  projectId: "phase3-15c78",
  storageBucket: "phase3-15c78.firebasestorage.app",
  messagingSenderId: "938674937288",
  appId: "1:938674937288:web:9ac26dbc81defb249e34fd",
  measurementId: "G-B04CHWKFS9"
};
const app2 = initializeApp(Nickfirebase);
const auth2 = getAuth(app2);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'API is working' });
});

app.post('/signup', async (req, res) => {
  let email = req.query.email;
  let password = req.query.password;
  let ifisdiscordbot = reg.query.from;

  if (ifisdiscordbot != process.env['from']) {
    return res.status(403).json({
      error: 'the from is not from discordbot'
    });
  }
  const userCredential = await createUserWithEmailAndPassword(auth2, email, password);
  res.json({data: userCredential});
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
