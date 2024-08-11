const express = require('express');
const router = express.Router();

// Route để hiển thị trang chính hoặc trang đăng nhập
router.get('/', (req, res) => {
  res.redirect('/login'); // Chuyển hướng đến trang đăng nhập
});

module.exports = router;
