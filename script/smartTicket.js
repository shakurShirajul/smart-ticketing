const setaCatalogue = document.getElementById('seat-catalogue');
const numberOfSeatSelectedElements = document.getElementById('number-of-seat-selected');
const seatNumberList = document.getElementById('seat-number-list');
const totalPrice = document.getElementById('total-price');
const grandPrice = document.getElementById('grand-price');
const couponAddButton = document.getElementById('coupon-apply-button');
const couponInput = document.getElementById('coupon-input');
const couponBox = document.getElementById('coupon-box');
const couponDiv = document.getElementById('coupon-div');
const totalSeatNumber = document.getElementById('total-seat-number');
const newCouponBox = couponBox;
const sendButton = document.getElementById('send-button');
const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('number-input');
const mainElement = document.getElementById('main-element');
const secondPage = document.getElementById('second-page');
const continueButton = document.getElementById('continue-button')
let flag = false;
let flag1 = false;


// Selecting Ticket 
setaCatalogue.addEventListener('click', function (event) {

    if (event.target.tagName == 'BUTTON') {

        const button = event.target;
        const checkingButton = button.classList.contains('selected');
        let numberOfSeatSelected = parseInt(numberOfSeatSelectedElements.innerText);



        if (checkingButton == false && numberOfSeatSelected < 4) {
            button.classList.add('selected');
            numberOfSeatSelected += 1;
            numberOfSeatSelectedElements.innerText = numberOfSeatSelected;
            createElement(button.innerText)
            calculateTotalPrice(numberOfSeatSelected);
            totalSeatNumber.innerText = 40 - numberOfSeatSelected;
        } else if (checkingButton == true) {
            button.classList.remove('selected');
            deleteElement(button.innerText);
            numberOfSeatSelected -= 1;
            numberOfSeatSelectedElements.innerText = numberOfSeatSelected;
            console.log(numberOfSeatSelected)
            totalSeatNumber.innerText = 40 - numberOfSeatSelected;
            if (flag == true) {
                couponDiv.appendChild(newCouponBox);
                document.getElementById('total-discount-amount').remove();
                flag = false;
            }
        } else {
            alert("You Already Selected Four Seat");
        }

        if (numberOfSeatSelected == 4) {
            // Enable Add Button
            couponAddButton.removeAttribute('disabled');
        }
        else {
            // Disable Add Button 
            if (couponAddButton.hasAttribute('disabled') == false) {
                couponAddButton.setAttribute('disabled', "")
            }
        }
        if (numberOfSeatSelected > 0) {
            sendButton.removeAttribute('disabled', "");
        }
        else {
            sendButton.setAttribute('disabled', "");
        }
    }
})


//  Coupon Add Button
couponAddButton.addEventListener('click', function (event) {
    let couponCode = couponInput.value;
    if (couponCode == 'Couple 20') {
        grandPrice.innerText = parseInt(grandPrice.innerText) - parseInt(grandPrice.innerText) * 0.2;

        const newDiscountElement = document.createElement('div');
        const newDiscountParagraph = document.createElement('p');
        const newDiscountPrice = document.createElement('p');

        newDiscountParagraph.innerText = "Discount";
        newDiscountPrice.innerText = parseInt(totalPrice.innerText) * 0.2

        newDiscountElement.appendChild(newDiscountParagraph);
        newDiscountElement.appendChild(newDiscountPrice);

        newDiscountElement.classList.add('flex')
        newDiscountElement.classList.add('justify-between')
        newDiscountElement.classList.add('my-4')

        newDiscountElement.setAttribute("id", "total-discount-amount")

        couponBox.remove();
        couponDiv.appendChild(newDiscountElement);
        flag = true;
    }
    else if (couponCode == 'NEW15') {
        grandPrice.innerText = parseInt(grandPrice.innerText) - parseInt(grandPrice.innerText) * 0.15;

        const newDiscountElement = document.createElement('div');
        const newDiscountParagraph = document.createElement('p');
        const newDiscountPrice = document.createElement('p');

        newDiscountParagraph.innerText = "Discount";
        newDiscountPrice.innerText = parseInt(totalPrice.innerText) * 0.15;

        newDiscountElement.appendChild(newDiscountParagraph);
        newDiscountElement.appendChild(newDiscountPrice);

        newDiscountElement.classList.add('flex')
        newDiscountElement.classList.add('justify-between')
        newDiscountElement.classList.add('my-4')

        newDiscountElement.setAttribute("id", "total-discount-amount")

        couponBox.remove();
        couponDiv.appendChild(newDiscountElement);
        flag = true;

    }
    else {
        flag1 = true;
        window.alert("Wrong Coupon Code");
    }
})

// Total Price Calculating Function
function calculateTotalPrice(numberOfSeatSelected) {
    totalPrice.innerText = numberOfSeatSelected * 550;
    grandPrice.innerText = totalPrice.innerText;
}

// Minus Taka From Total Amount
function minusTakaFromTotalTaka() {
    totalPrice.innerText = parseInt(totalPrice.innerText) - 550;
    grandPrice.innerText = totalPrice.innerText;
}


// delete Element
function deleteElement(seatName) {
    let newSeatList = document.querySelector('#seat-number-list');

    const setaListElement = newSeatList.children;

    const n = parseInt(numberOfSeatSelectedElements.innerText);
    console.log(n, seatName);
    for (let i = 0; i < n; i++) {
        if (setaListElement[i].children[0].innerText == seatName) {
            console.log(setaListElement[i].children[0].innerText);
            setaListElement[i].remove();
            minusTakaFromTotalTaka();
            break;
        }
    }
}


// Function For Creating Element (Ticket List)
function createElement(seatName) {
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
}
// Send Button
sendButton.addEventListener('click', function (event) {
    mainElement.classList.add('hidden');
    secondPage.classList.remove('hidden');
    nameInput.value = '';
    numberInput.value = '';
})

// Continue Button
continueButton.addEventListener('click', function () {
    secondPage.classList.add('hidden');
    mainElement.classList.remove('hidden');
})