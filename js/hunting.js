const huntingPhone = async (inputFieldText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputFieldText}`)
    const data =await res.json();
    const phone = data.data;
    huntingPhoneDisplay(phone)
}

const huntingPhoneDisplay = (phones) =>{
  
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    const showAllBtn = document.getElementById('show-all')
    if(phones.length > 12){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }

    phones = phones.slice(0,12)
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
       
    });
    togolLoadingSpinner(false);
}

const handleSearchBtn = () =>{
    togolLoadingSpinner(true)
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    huntingPhone(inputFieldText)
}

const togolLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}


// huntingPhone();