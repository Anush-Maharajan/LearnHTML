function calculateFinalPrice(price, membership) {
    let discount = 0;

    switch (membership) {
        case "Gold":
            discount = 20;
            break;
        case "Silver":
            discount = 10;
            break;
        default:
            discount = 5;
    }

    let discountedPrice = price - (price * discount)/100;

    if (discountedPrice > 500) {
        console.log("Extra 5% discount applied!")
        discountedPrice -= discountedPrice * 0.05;
    }

    console.log(`Final price after discount: ${discountedPrice.tofixed(2)}`);
}