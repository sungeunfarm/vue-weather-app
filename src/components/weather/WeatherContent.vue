<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <!-- @selectCity="selectCity" 이벤트로 ( @selectCity) 부모가 호출이 되면 (="selectCity") 메서드를 실행시킨다  메서드는 하단에 선언해준다. -->
    <CitySelector @selectCity="selectCity" />
    <!-- CitySelector 컴포넌트에서 보내는 이벤트를 받는 속성을 적는다 @selectCity="selectCity" -->
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
// 공통으로 사용될만한 함수는 믹스인을 활용해 작성해주고 임포트한다.
import weatherMixin from "@/mixins/weatherMixin"; // @ 절대경로로 추가
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";
export default {
  name: "WeatherContent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  mixins: [weatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
   async selectCity(city) {
      // 도시를 선택했을때 리스트에 들어가고 다시 클릭했을때는 제거 되도록 한다.
      // console.log(city, "parent receved");
      if (city.selected) {
        const weather = await this.getWeatherInfo(city);
        console.log(weather);
        this.weatherList.push(weather);
      } else {
        //선택된 도시를 리스트에서 제거하기 위해 전달받은 weather.code 프랍과 선택한 ciry.code 코드가 일치 하는걸 찾아준다.
        // this.weatherList 에서 splice 를 사용해 인텍스 를 제거한다.
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
    },
  },
};
</script>

<style>
</style>