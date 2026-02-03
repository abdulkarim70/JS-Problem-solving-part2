function layerDiscountedTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        const total= quantity*first100Price;
        return total
    }
else if(quantity<=200){
    const first100Total= 100*first100Price;
    const remaingQuantity= quantity-100;
    const remaingTotal =remaingQuantity*second100Price;
    const total =first100Total+remaingTotal;
    return total
}

else{
    const fist100Total= 100*first100Price;
    const second100Total= 100*second100Price;
    const remaingQuantity =  quantity-200;
    const remainingTotal= remaingQuantity*above200Price;
    const total =fist100Total+second100Total+remainingTotal;
    return total
}
}

