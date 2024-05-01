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
        // console.log(phone);
        const phoneCurd = document.createElement('div');
        phoneCurd.classList = `card bg-purple-300 shadow-xl p-6 text-black`
        phoneCurd.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCurd)
    });
    togolLoadingBars(false)
};

// show Details
const handleShowDetails = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
    const phone = data.data;
    showAllDetails(phone)
}

const showAllDetails = (phone) =>{
    console.log(phone);
    const showAllContainer = document.getElementById('show-all-container')
    showAllContainer.innerHTML = `
    <img class="w-1/3 mx-auto text-center" src="${phone.image}" alt="">
    <h3 class="font-bold text-lg">${phone.name}</h3>
    <p class="py-4">${phone.mainFeatures.storage}</p>
    <p class="py-4">${phone.others.GPS}</p>
    `
    show_details.showModal();
}

const handleSearchBtn = () =>{
    togolLoadingBars(true)
    const searchField = document.getElementById('search-field');
    const fieldText = searchField.value;
    phoneHunting(fieldText)
}


 
const togolLoadingBars = (isLoading)=>{
    const loadingBars = document.getElementById('loading-bars');
    if(isLoading){
        loadingBars.classList.remove('hidden')
    }
    else{
        loadingBars.classList.add('hidden')
    }
}