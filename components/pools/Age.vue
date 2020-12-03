<template>
  <div class="age-container">
    <div
      v-for="(range, idx) of ranges"
      :key="idx"
      class="d-flex range-container"
    >
      <div class="d-flex">
        <p class="item-or" v-if="idx > 0">или</p>
        <p>Диапазон {{ idx + 1 }}</p>
      </div>
      <div class="d-flex range-input">
        <p>от</p>
        <input
          type="text"
          :value="range.ageFrom"
          @input="updateAge($event, idx, 'ageFrom')"
        />
        <p>до</p>
        <input
          type="text"
          :value="range.ageTo"
          @input="updateAge($event, idx, 'ageTo')"
        />
      </div>
    </div>

    <div class="d-flex item-btn">
      <button @click.prevent="addAge">
        <img src="@/static/plus.png" />Добавить диапазон
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  computed: {
    ranges() {
      return this.$store.getters.age(this.id);
    }
  },
  methods: {
    updateAge(e, idx, key) {
      const payload = { id: this.id, idx, key, value: e.target.value };
      this.$store.commit("UPDATE_AGE", payload);
    },
    addAge() {
      this.$store.commit("ADD_AGE", this.id);
    }
  }
};
</script>

<style scoped>
.age-container {
}

.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  justify-content: center;
}

.range-container {
  width: 700px;
  margin-bottom: 20px;
}

.item-or {
  width: 50px;
  height: 40px;
  background-color: #e5f0fa;
  border-radius: 5px;
  margin-right: 20px;
  padding: 10px;
}
.range-input {
  width: 350px;
  margin-right: 130px;
}

input {
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 0 20px 0 10px;
}

.item-btn {
  padding-left: 220px;
}

button {
  color: #8aac12;
  height: 40px;
  border: 2px solid #dbf28b;
  border-radius: 10px;
}

img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
