const phoneHunting = async (fieldText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${fieldText}`)
    const data = await res.json();
    const phone = data.data;
    // console.log(phone);
    phoneHuntingDisplay(phone);
}


const phoneHuntingDisplay = (phones) => {
    // console.log(phone);

    const showAll = document.getElementById('show-all');
    if(phones.length > 12){
        showAll.classList.remove('hidden')
    }
    else{
        showAll.classList.add('hidden')
    }

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    phones= phones.slice(0,12);

    phones.forEach(phone => {
        console.log(phone);
        const phoneCurd = document.createElement('div');
        phoneCurd.classList = `card bg-purple-300 shadow-xl p-6 text-black`
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
    const searchField = document.getElementById('search-field');
    const fieldText = searchField.value;
    phoneHunting(fieldText)
}

// const handleSearchBtn2 = () =>{
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     phoneHunting(fieldText)

// }

// phoneHunting();