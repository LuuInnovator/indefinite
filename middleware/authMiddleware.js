module.exports = (req, res, next) => {
    if (!req.cookies || !req.cookies.token) {
      return res.redirect('/login'); // Nếu không có cookie token, chuyển hướng đến trang đăng nhập
    }
    next();
  };
  