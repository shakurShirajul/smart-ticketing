const setaCatalogue = document.getElementById('seat-catalogue');
const numberOfSeatSelectedElements = document.getElementById('number-of-seat-selected');
const seatNumberList = document.getElementById('seat-number-list');
const totalPrice = document.getElementById('total-price');
const grandPrice = document.getElementById('grand-price')
// console.log(setaCatalogue);

// Selecting Ticket 
setaCatalogue.addEventListener('click',function(event){
    
    // console.log(event.target.tagName);
    if(event.target.tagName == 'BUTTON'){
        // console.log("yes");
        // numberOfSeatSelected.innerText = 1;
        const button = event.target;
        const checkingButton = button.classList.contains('selected');
        let numberOfSeatSelected = parseInt(numberOfSeatSelectedElements.innerText);
        console.log(numberOfSeatSelected)

        if(checkingButton == false && numberOfSeatSelected <4 ){
            button.classList.add('selected');
            numberOfSeatSelected += 1;
            numberOfSeatSelectedElements.innerText = numberOfSeatSelected;
            createElement(button.innerText)
            calculateTotalPrice(numberOfSeatSelected);
        }else if(checkingButton == true){
            button.classList.remove('selected');
            numberOfSeatSelected -= 1;
            numberOfSeatSelectedElements.innerText = numberOfSeatSelected;
            deleteElement(button.innerText);
        }
    }

})

// Total Price Calculating Function
function calculateTotalPrice(numberOfSeatSelected){
    totalPrice.innerText = numberOfSeatSelected*550;
    grandPrice.innerText = totalPrice.innerText;
}
// Minus Taka From Total Amount
function minusTakaFromTotalTaka(){
    totalPrice.innerText = parseInt(totalPrice.innerText)-550;
    grandPrice.innerText = totalPrice.innerText;
}


// delete Element
function deleteElement(seatName){
    let newSeatList = document.querySelector('#seat-number-list');

    const setaListElement = newSeatList.children;
    
    const n = newSeatList.childElementCount
    
    for(let i=0;i<n;i++){
        if(setaListElement[i].children[0].innerText == seatName){
            setaListElement[i].remove();
            minusTakaFromTotalTaka();
        }
    }
}


// Function For Creating Element
function createElement(seatName){
    const newDiv = document.createElement("div");
    const newSeat = document.createElement("p");
    const newSeatClass = document.createElement("p");
    const newSeatPrice = document.createElement("p");

    newSeat.innerText = seatName;
    newSeatClass.innerText = 'Economy';
    newSeatPrice.innerText = '550';

    newDiv.appendChild(newSeat);
    newDiv.appendChild(newSeatClass);
    newDiv.appendChild(newSeatPrice);

    newDiv.classList.add('flex') 
    newDiv.classList.add('justify-between') 
    newDiv.classList.add('my-4') 

    seatNumberList.appendChild(newDiv);
    console.log(newDiv);
}