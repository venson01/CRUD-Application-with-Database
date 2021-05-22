const express = require('express');
const router = exprexss.Router();

const {createUser, getUser, updateUser, deleteUser} = require('../controller/controller')

router.post('/create', createUser);

router.get('/', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;