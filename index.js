var customerName = 'bob'
const leastFavoriteCustomer = 'Ted'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    const first = 'not ' 
    const last = 'bob'
    bestCustomer = first + last
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe ' + 'bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jeff'
}