function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood=3;
    const pertableWood=10;
    const perBedWood=50;
    const totalChairWood= perChairWood*chairQuantity;
    const totalTableWood=pertableWood*tableQuantity;
    const totalBedWood= perBedWood*bedQuantity;
    const totalWood= totalChairWood+totalTableWood+totalBedWood;
    return totalWood

}
const totakath =woodQuantity(10,4,3);
console.log(totakath)