// src/routes/pdf.js
const express = require('express');
const authenticateToken = require('../middlewares/auth');
const { generatePDF, listPDFs, downloadPDF } = require('../services/pdfService');
const router = express.Router();

// PDF generation route
router.post('/', authenticateToken, generatePDF);

// List all PDFs
router.get('/', authenticateToken, listPDFs);

// Download PDF
router.get('/download/:id', authenticateToken, downloadPDF);

module.exports = router;
