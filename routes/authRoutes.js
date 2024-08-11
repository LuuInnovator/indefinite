const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route để hiển thị trang đăng nhập
router.get('/login', authController.showLogin);

// Route để xử lý đăng nhập
router.post('/login', authController.login);

// Route để hiển thị trang đăng ký
router.get('/register', (req, res) => {
  res.render('register'); // Đảm bảo có tệp view tương ứng
});

// Route để xử lý đăng ký
router.post('/register', authController.register);

// Route để hiển thị trang dashboard
router.get('/dashboard', authController.showDashboard);

// Route để hiển thị trang dashboard với middleware xác thực
router.get('/dashboard', authMiddleware, authController.showDashboard);

// Route để xử lý đăng xuất
router.get('/logout', authController.logout);


module.exports = router;
