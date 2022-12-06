const db = require('../_helpers/db');

module.exports = {
    addBill
};

async function addBill(Obj) {
    const deal = await db.billData.create(Obj);
    return deal
}
