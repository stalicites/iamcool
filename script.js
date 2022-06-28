const endPoint = "https://ipapi.co/json/";

const ipReq = new XMLHttpRequest();
ipReq.open("GET", endPoint);
ipReq.send();

ipReq.onload = () => {
    let interval = setInterval(() => {
        document.getElementById("header-content").innerHTML = `
        <div>
            <img src = "bg.jpeg" class = "center">
            <div style = "z-index: -1;">
                <p id = "data">${filterData(JSON.parse(ipReq.response))}</p>
            </div>
        </div>
        `;
        document.getElementById("data").style.color = "White";
        document.body.style.backgroundColor = "#0e0e0e";
        clearInterval(interval);
    }, 1000);

}

const filterData = (data) => {
    console.log(data);
    return `
    IP: ${data.ip} (${data.version}),
    Location: ${data["country_name"]}, ${data.region}, ${data.city},
    Internet Provider: ${data.org},
    Zip Code: ${data.postal},
    Coordinates: ${data.latitude}, ${data.longitude}
    `
}
