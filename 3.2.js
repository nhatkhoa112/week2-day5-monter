// 3. Assignment 1


const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom",
];

const A = inventors.filter((element) => {
    if(element[0] ==="A"){
        return true;
    }
})
console.log(A)

const B = inventors.filter((element) => {
    let a = element.split(" ")[0][0];
    let b = element.split(" ")[1][0];
    if(a === b){
        return true
    }
})

console.log(B)

const C = inventors.sort((a,b) => {
    if(a > b){return 1};
    if(a < b){return -1};
})

console.log(C);

const D = inventors.sort((a,b) => a.length - b.length)
console.log(D);

const E = inventors.map((inventor) => {
    return inventor + " : " + inventor.length;
})
console.log(E)

const F  = inventors.map((inventor) => inventor.toUpperCase())
console.log(F);



const G =    inventors.reduce((prev, current) => prev + current.split(" ")[0] + " ","")
console.log(G);


const H = inventors.map((inventor) => inventor.length)
const K = H.reduce((prev, current) => prev + current)

console.log(K)


// Assignment 2
let startAmount = 1000;
let transactions = [
    { currency: "USD", amount: 12, type: "withdrawal" },
    { currency: "USD", amount: 104, type: "withdrawal" },
    { currency: "USD", amount: 150, type: "deposit" },
    { currency: "USD", amount: 150, type: "deposit" },
    { currency: "USD", amount: 250, type: "withdrawal" },
    { currency: "USD", amount: 500, type: "deposit" },
    { currency: "USD", amount: 447, type: "withdrawal" },
    { currency: "USD", amount: 120, type: "deposit" },
    { currency: "USD", amount: 58, type: "withdrawal" },
    { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;

const transactionsMoney = () => {
    console.log(`Balance: ${startAmount}` + "\n");
    console.log('Transaction History: '+"\n");
    transactions.forEach((transaction) => {
    if (transaction.type === "withdrawal" ){
        startAmount -= transaction.amount
        console.log(`- You withdrew $${transaction.amount}. The new balance is $${startAmount}` + "\n")
    } else {
        startAmount += transaction.amount
        console.log(`- You deposited $${transaction.amount}. The new balance is $${startAmount}`+ "\n")
    }
    })
    
}

transactionsMoney();




getBalanceEnd = (startAmount, transactions) => {
	return transactions.reduce((a, transaction) => {
		if (transaction.type === 'withdrawal') {
			a -= transaction.amount;
		} else {
			a += transaction.amount;
		}
		return a;
	}, startAmount);
    
}

console.log(getBalanceEnd(startAmount, transactions));

filterType = (transactions, type)  => transactions.filter((transaction) => transaction.type === type).reduce((amount, transaction) => amount += transaction.amount, 0);




console.log(filterType(transactions,"withdrawal"))
console.log(filterType(transactions, "deposit"))


changeCurrency = (transactions, toCurrency, usdToVND ) => {
    return transactions.map((transaction) => ({
		...transaction,
		currency: toCurrency,
		amount: transaction.amount * usdToVND,
	}));
}

console.log(changeCurrency(transactions, "VND", usdToVND))


sortByType = (transactions) => {
    return transactions.sort((a,b) => {
            if(a.type > b.type){return 1};
            if(a.type < b.type){return -1};
    })
}
console.log(sortByType(transactions))


sortWithdrawalByAmount = (transactions) => {
    return transactions.filter((transaction) => transaction.type === "withdrawal").sort((a,b) => a.amount - b.amount)
}

console.log(sortWithdrawalByAmount(transactions))



sortDepositByAmount = (transactions) => {
    return transactions.filter((transaction) => transaction.type === "deposit").sort((a,b) => a.amount - b.amount)
}

console.log(sortDepositByAmount(transactions))




// Assignment 3
let shoppingCart = [
    { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
    { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
    { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
    { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
    { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
    { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
    { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];

toArray = (shoppingCart) => {
    return shoppingCart.map((a) => ({
        price: a.price,
        quantity: a.quantity
    }))
}

console.log(toArray(shoppingCart))

totalPrice = (shoppingCart) => {
    return shoppingCart.reduce((prev, current) => {
        return prev += current.price *current.quantity
    },0)
}
        

console.log(totalPrice(shoppingCart))

removeItemsFromCart = (productId, quantity) => {
    shoppingCart = shoppingCart.filter((product) => {
		if (product.id === productId) {
			product.quantity = product.quantity - quantity;
			if (product.quantity <= 0) return false;
			return product;
		}
		return product;
	});
    console.log(shoppingCart);
} 

removeItemsFromCart("A36", 2);

addItemToCart = (product, quantity) =>  {
    let t = false;
    shoppingCart.forEach((item) =>{
        if(item.id === product.id){
            item.quantity += quantity
            t = true;
        } 
    });
    if(!t){
        product.quantity = quantity;
        shoppingCart.push(product)
    }
    console.log(shoppingCart)

}

let product = {id: "A21", item: "T-shirt", price: 9.9}
let product1 = {id: "A21", item: "T-shirt", price: 9.9}



addItemToCart(product, 10);
addItemToCart(product1, 10);
