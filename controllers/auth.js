const { register } = require('../services/user');

const router = require('express').Router();


router.get('/register', (req, res) => {
    res.render('register', { layout: false })
});

//TODO check form action, method, field names
router.post('/register', async (req, res) => {
    try {  
    if(req.body.password != req.body.repass) {
        throw new Error('Passwords dont match !');
    }
  const user = await register(req.body.username, req.body.password);
  req.session.user = user;
  res.redirect('/'); //TODO check redirect requriments
}catch (err) {
    res.render('register', { layout: false, data: { username: req.body.username } });
}
});

router.get('/login', (req, res) => {
   res.render('login', { layout: false });
});

module.exports = router;