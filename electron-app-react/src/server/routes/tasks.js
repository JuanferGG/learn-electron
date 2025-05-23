const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    // const tasks = await Task.find()
    res.status(200).json({ message: 'Tasks fetched successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Create a task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Update a task
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (req.body.title) task.title = req.body.title
    if (req.body.description) task.description = req.body.description
    if (req.body.completed !== undefined) task.completed = req.body.completed

    const updatedTask = await task.save()
    res.json(updatedTask)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
