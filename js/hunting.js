const huntingPhone = async (inputFieldText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`)
    const data =await res.json();
    const phone = data.data;
    huntingPhoneDisplay(phone)
}

const huntingPhoneDisplay = (phones) =>{
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    phones.forEach(phone =>{
        const phoneCurd = document.createElement('div');
        phoneCurd.classList = `card card-compact bg-gray-100 shadow-xl p-6`
        phoneCurd.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">${phone.brand}</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCurd)
    })
}

const handleSearchBtn = () =>{
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    huntingPhone(inputFieldText)
}


huntingPhone();