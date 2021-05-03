const router = require('express').Router()

router.use((res, req, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

module.exports = router