function loadcoupon(){
    document.getElementById("coupon").style.visibility="visible"
}

function closecoupon(){
    document.getElementById("coupon").style.visibility="hidden"
}

function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('darkmode')
}

const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = async() => {
    let response = await fetch(cityUrl)
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(item.state)
        element.appendChild(text)
        element.value = item.state_id;
        document.getElementById('city').appendChild(element)
    })
}

const getRest = () => {
    const cityId = document.getElementById('city').value;
    const rest =  document.getElementById('restaurant')

    while(rest.length > 0){
        rest.remove(0)
    }

    fetch(`${restUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option') 
            let text = document.createTextNode(`${item.restaurant_name}|${item.address}`) 
            element.appendChild(text) 
            rest.appendChild(element)
        })
    })
}
