const express = require('express');
const path = require('path');

const app = express();

// Статичні файли будуть обслуговуватися з папки public
app.use(express.static(path.join(__dirname, 'public')));

// Сервер слухає на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
