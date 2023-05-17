const express = require('express');
const { API_URL } = require('../Global');
const app = express();

app.get(`${API_URL}/artist/:id` )