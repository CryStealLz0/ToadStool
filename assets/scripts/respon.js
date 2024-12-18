const totalRespon = document.getElementById('respons');

function handleIconClick(responId) {
    const responElement = document.getElementById(responId);
    let currentValue = parseInt(responElement.innerText);
    currentValue += 1;
    responElement.innerText = currentValue;

    let totalValue = parseInt(totalRespon.innerText.split(' ')[0]);
    totalValue += 1;
    totalRespon.innerText = `${totalValue} Respon`;
}

document
    .getElementById('icon-1')
    .addEventListener('click', () => handleIconClick('respon-1'));
document
    .getElementById('icon-2')
    .addEventListener('click', () => handleIconClick('respon-2'));
document
    .getElementById('icon-3')
    .addEventListener('click', () => handleIconClick('respon-3'));
document
    .getElementById('icon-4')
    .addEventListener('click', () => handleIconClick('respon-4'));
document
    .getElementById('icon-5')
    .addEventListener('click', () => handleIconClick('respon-5'));
