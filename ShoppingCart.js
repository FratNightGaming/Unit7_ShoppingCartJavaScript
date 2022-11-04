class Item
{
    name;
    price;
    quantity;

    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.quantity = 0;
    }
}
let subTotal = 0;
let Total = 0;
let salesTax = 1.06;
let Items = [];
//[new Item("milk", 2.99), new Item("eggs", 1.99), new Item("cheese", 1.50), new Item("yogurt 6-pc", 4.99), new Item("bread", 4.99), new Item("mac and cheese", 1.19),new Item("chicken breast", 9.99), new Item("fruit basket", 6.66), new Item("cereal (family size)", 4.15),new Item("sushi (vegetarian roll)", 7.99)];
Items[0] = new Item("milk", 2.99);
Items[1] = new Item ("eggs", 1.99);
Items[2] = new Item ("cheese", 1.50);
Items[3] = new Item ("yogurt 6-pc", 4.99);
Items[4] = new Item ("bread", 4.99);
Items[5] = new Item ("mac and cheese", 1.19);
Items[6] = new Item ("chicken breast", 9.99);
Items[7] = new Item ("fruit basket", 6.66);
Items[8] = new Item ("cereal (family size)", 4.15);
Items[9] = new Item ("sushi (vegetarian roll)", 7.99);

purchasedItems = [];
let goOn = true;
DisplayItems();
while (goOn)
{

    let itemID = parseInt(prompt("Which item would you like to select?"));
    AddItem(itemID); 
    goOn = Continue();
}

DisplayPurchases();

function DisplayItems()
{
    console.log(`Here is a list of our items:`)

    for (let i = 0; i < Items.length; i++)
    {
        console.log(`${i + 1}: ${Items[i].name} --- Price: $${Items[i].price}`);
    
    }
}

function AddItem(itemID)
{
    Items[itemID - 1].quantity++;
    subTotal += Items[itemID - 1].price;
    purchasedItems.push(Items[itemID -1]);
    console.log(`${Items[itemID - 1].name} ($${Items[itemID - 1].price}) was added to your cart. `);
}

function Continue()
{
    let userResponse = prompt("Would you like to continue shopping? (Y/N)");

    if (userResponse.toUpperCase() === "Y")
    {
        return true;
    }

    else if (userResponse.toUpperCase() === "N")
    {
        return false;
    }

    else
    {
        console.log("Invalid input. Try again.");
        Continue();
    }
}

function CalculateTotal()
{
    Total = subTotal * salesTax;
    return Total.toFixed(2);
}

function DisplayPurchases()
{
    console.log(`Printing totals below\n\n`);
    

    for (let i = 0; i < purchasedItems.length; i++)
    {
        console.log(`${purchasedItems[i].name} X${purchasedItems[i].quantity}: $${purchasedItems[i].quantity * purchasedItems[i].price}`);
    }

    console.log(`Subtotal: $${subTotal.toFixed(2)}`);
    let taxAmount = (CalculateTotal() - subTotal).toFixed(2);
    console.log(`Tax: 6% tax = $${taxAmount}`);
    console.log(`Total: $${CalculateTotal()}`);
}
