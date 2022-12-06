const { addBill } = require("../services/bill.service");

exports.addBill = async (req, res, next) => {

    // Validation for request body
    if (!req.body.name) {
        return res.status(200).json({ code: 200, status: false, message: 'Please enter the value of name!' })
    }
    if (!req.body.description) {
        return res.status(200).json({ code: 200, status: false, message: 'Please enter the value of description!' })
    }
    if (!req.body.category_id) {
        return res.status(200).json({ code: 200, status: false, message: 'Please enter the value of category_id!' })
    }
    if (!req.body.amount) {
        return res.status(200).json({ code: 200, status: false, message: 'Please enter the value of amount!' })
    }
    if (!req.body.type) {
        return res.status(200).json({ code: 200, status: false, message: 'Please enter the value of type!' })
    }

    // Creating bill object to send in bill service class
    let Obj = {
        name: req.body.name,
        description: req.body.description,
        category_id: req.body.category_id,
        amount: req.body.amount,
        type: req.body.type,
    }

    // Calling bill service class
    const billData = await addBill(Obj);
    
    // Returning success response
    res.status(200).json({ code: 200, status: true, message: 'Bill details added successfully!' })
}