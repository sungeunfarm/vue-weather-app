import axios from "axios"

const weatherMixin = {
    data() {
        return {}
    },
    methods: {
        async getWeatherInfo(city) {
            // console.log(process.env)
            const API_KEY = process.env.VUE_APP_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`
            const res = await axios.get(url);
            // 반복적으로 사용되는 오브젝트명을 스트럭쳐 구조로 만들어 사용한다.
            const {
                main,
                wind,
                weather
            } = res.data;
            const weatherResult = {
                label: city.label,
                code: city.code,
                temperature: this.displayTemperature(main.temp),
                humidity: main.humidity,
                wind: wind.speed,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
            }
            return weatherResult;
        },
        displayTemperature(temperature) {
            return (temperature - 273.15).toFixed(1);
        }
    },
}

export default weatherMixin