<template>
  <div>
    <ul class="weather-list">
        <!-- :weather="weather"  :weather 프롭을 보내준다. 반복문에서 사용된 요소 weather -->
      <WeatherItem v-for="weather in weatherList" :key="weather.ContentHeader" :weather="weather"/>
     
      
    </ul>
  </div>
</template>

<script>
import WeatherItem from "./WertherItem.vue";
export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  props:{
      weatherList:Array,
  }
};
</script>

<style scoped>
.weather-list {
 display: grid;
 grid-template-columns: repeat(4,1fr);
 padding: 1rem;
 grid-gap: 1rem;

}
</style>