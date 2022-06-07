const express = require('express')
const contactModel = require('../models/contactSchema')

//create a router
const router = express.Router()

//get contacts
router.get('/', async (req,res) => {
    try {
        const contact = await contactModel.find()
        res.send(200).json(contact)
    } catch (error) {
        console.log(error)
        
    }
})
//create contacts
router.post('/', async (req,res) => {
    const contactData = req.body //getting data from the request

    try {
        const contact = await contactModel.create(contactData)
        //send back response
        res.status(201).json(contact)
        // res.status(201).json({data:contact})
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!')
        
    }
})
router.get('/:id', async (req,res) => {
    const id = req.params.id

    try {
        const contact = await contactModel.findById(id)
        res.status(200).json(contact)
    } catch (error) {
        
    }
})

//update contact by ID
router.put('/:id', async (req,res) => {
    const id = req.params.id
    const newContactData = req.body
    try {
        const contact = await contactModel.findByIdAndUpdate(id, newContactData, {new:true})
        res.status(200).json(contact)
    } catch (error) {
        
    }
})

// DELETE contact
router.delete('/:id', async (req,res) => {
    const id = req.params.id
    try {
        const contact = await contactModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Contact was deleted!'})
    } catch (error) {
        console.log(error)
        
    }
})
module.exports = router