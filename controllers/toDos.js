const ToDo = require('../models/ToDo');
const { ErrorHandler } = require('../middleware/errorHandler');
const asyncHandler = require('../middleware/asyncHandler');

// @desc     Get all ToDos
// @route    GET  /api/todos
// @access   Public
exports.getToDos = asyncHandler(async (req, res, next) => {
        const toDos = await ToDo.find();
        return res.status(200).json({
            success: true,
            count: toDos.length,
            data: toDos
        });
})


// @desc     Delete all ToDos
// @route    DELETE  /api/todos
// @access   Public
exports.deleteAll = asyncHandler(async (req, res, next) => {
        await ToDo.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
})


// @desc     Add single toDo
// @route    POST  /api/todos
// @access   Public
exports.addToDo = asyncHandler(async (req, res, next) => {
        const { text } = req.body;
        //from the data from the arg we pass in the create method only the data that fukfills our model Schema will be passed
        const toDo = await ToDo.create(req.body);
        return res.status(201).json({
            success: true,
            data: toDo
        });
})


// @desc     Delete single toDo
// @route    DELETE  /api/todos/:id
// @access   Public
exports.deleteToDo = asyncHandler(async (req, res, next) => {
        const toDo = await ToDo.findById(req.params.id);

        if(!toDo) {
           return next(new ErrorHandler(404, `No ToDo found with id of ${req.params.id}`));
        } 
        await toDo.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
})


// @desc     Edit single toDo
// @route    PUT  /api/todos/:id
// @access   Public
exports.editToDo = asyncHandler(async (req, res, next) => {
        const toDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!toDo) {
            return next(new ErrorHandler(404, `No ToDo found with id of ${req.params.id}`));
        }

        return res.status(200).json({
            success: true,
            data: toDo
        })
})




