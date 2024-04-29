const phoneHunting = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phone = data.data;
    // console.log(phone);
    phoneHuntingDisplay(phone);
}


const phoneHuntingDisplay = (phones) => {
    // console.log(phone);
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone);
        const phoneCurd = document.createElement('div');
        phoneCurd.classList = `card bg-gray-100 shadow-xl p-6`
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


phoneHunting();