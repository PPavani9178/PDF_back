// src/services/pdfService.js
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const Book = require('../models/Book');

const generatePDF = async (req, res) => {
  const { frontCoverData } = req.body;
  const doc = new PDFDocument();

  // Save PDF file
  const filePath = path.join(__dirname, '..', '..', 'pdfs', `${req.user.username}-${Date.now()}.pdf`);
  doc.pipe(fs.createWriteStream(filePath));

  // Add content to PDF
  doc.fontSize(25).text(frontCoverData.title, 100, 100);
  doc.fontSize(20).text(`Author: ${frontCoverData.author}`, 100, 150);

  doc.end();

  // Save book data
  const book = new Book({ author: req.user.username, filePath });
  await book.save();

  res.send('PDF generated successfully');
};

const listPDFs = async (req, res) => {
  const userBooks = await Book.find({ author: req.user.username });
  res.send(userBooks);
};

const downloadPDF = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.sendStatus(404);

  res.download(book.filePath);
};

module.exports = {
  generatePDF,
  listPDFs,
  downloadPDF,
};
