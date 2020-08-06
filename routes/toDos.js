const express = require('express');
const router = express.Router();
const { getToDos, deleteAll, addToDo, deleteToDo, editToDo } = require('../controllers/toDos');


router.route('/')
    .get(getToDos)
    .delete(deleteAll)
    .post(addToDo);

router.route('/:id')
    .delete(deleteToDo)
    .put(editToDo);
    

module.exports = router;