function weather() {
    let input = document.getElementById("input").value

    let showCard = document.getElementById("show-card").style.display = "none"

    if (input != "") {
        let showCard = document.getElementById("show-card").style.display = "block"

        fetch(`https://api.weatherapi.com/v1/current.json?key=444284d2e1974528841140836252606&q=${input}&aqi=no`)
        .then((req) => req.json())
        .then((res) => {
            let place = document.getElementById("place").innerText = `${res.location.name}, ${res.location.region}`

            let today = new Date()

            let localTime = document.getElementById("localTime").innerHTML = `<span>${today.getFullYear()}</span>-<span>${today.getMonth() + 1}</span>-<span>${today.getDate()}</span> <span>${today.getHours()}</span>:<span>${today.getMinutes()}</span>`

            let temp = document.getElementById("temp").innerHTML = `Temperature: ${res.current.temp_c}°C <br> Feels like: ${res.current.feelslike_c}°C`

            let condition = document.getElementById("condition").innerText = `${res.current.condition.text}`

            let icon = document.getElementById("icon").innerHTML = `<img src="https:${res.current.condition.icon}" alt="icon" style="height:160px;">`

            let humValue = document.getElementById("humValue").innerText = `${res.current.humidity}%`

            let windValue = document.getElementById("windValue").innerText = `${res.current.wind_kph}kph / ${res.current.wind_mph}mph`

            let pressValue = document.getElementById("pressValue").innerText = `${res.current.pressure_in}(in) / ${res.current.pressure_mb}(mb)`

            let visValue = document.getElementById("visValue").innerText = `${res.current.vis_km}K.M. / ${res.current.vis_miles}miles`

            console.log(res)
        })
    }
}