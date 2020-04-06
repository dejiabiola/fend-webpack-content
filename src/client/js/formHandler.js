export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

    const apiKey = "&appid=1c99b7dbe2469eebf9caea877d515b0a";

      const url = baseURL + 90001 + apiKey;
      fetch(url).then(res => res.json())
      .then(data => {
        document.getElementById('results').innerHTML = `The weather condition in ${data.name} is ${data.weather[0].description}`
      })
}
