<template>
  <li class="weater-items">
      <h3>{{weather.label}}</h3>
      <p class="temperature">{{weather.temperature}}&deg;c</p>
      <p class="info">
          <img :src="weather.icon" alt="any" />
          <span>습도 {{ weather.humidity }}%</span>
          <span>바람 {{ weather.wind }}m/s</span>
      </p>
  </li>
</template>

<script>
export default {
    name:"WeatherItem",
    props:{
        weather:{
            type:Object,
            default(){
                return{
                    label:"서울",
                    code:"Seoul",
                    temperature:20,
                    humidity:15,
                    wind:1.5
                }
            }
        }
    }
}
</script>

<style scoped>
    .weater-items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #efefef;
        padding: 1rem;
    }
    .weater-items h3{
        font-size: 1.4rem;
        color: #333;
    }
    .temperature{
        font-size: 3.6rem;
    }
    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
    }
    
    .info span{
        padding: .5rem;
    }
</style>