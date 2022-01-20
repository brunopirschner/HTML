function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("people").value;

    let total = (bill * serviceQual);
    let totalOfPeople = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2)
    totalOfPeople = totalOfPeople.toFixed(2)

    document.getElementById("tip").innerHTML = ("R$" + total);
    document.getElementById("tips").innerHTML = ("R$" + totalOfPeople);
}

document.getElementById("tipsForm").addEventListener('submit', calculateTip)