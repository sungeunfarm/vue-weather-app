<template>
  <div>
    <ul class="city-selector">
      <li
        @click="selectCity(city)"
        :class="{ isSelected: city.selected }"
        v-for="city in cities"
        :key="city.code"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CitySelector',
  data() {
    return {
      cities: [
        { code: 'Seoul', label: '서울', selected: false },
        { code: 'Tokyo', label: '도쿄', selected: false },
        { code: 'London', label: '런던', selected: false },
        { code: 'Moscow', label: '모스크바', selected: false },
        { code: 'Yakutsk', label: '야크추크', selected: false },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      this.$emit("selectCity",city) // 부모로 이벤트를 전달한다. selectCity 이벤트와 city 파라미터를 보내준다
    },
  },
};
</script>

<style scoped>
.city-selector {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector {
  padding: 0 1rem;
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 1rem;
  cursor: pointer;
}
.isSelected {
  background: #fd1d1d;
  color: #fff;
}
</style>
