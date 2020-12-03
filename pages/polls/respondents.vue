<template>
  <div>
    <NavPolls />
    <div class="page-content">
      <div class="conditions">
        <div class="header">
          <p>Добавить опрос</p>
        </div>

        <Condition />

        <div class="footer">
          <div class="footer-add-condition">
            <button class="btn-add-condition" @click.prevent="addCondition">
              <img src="@/static/plus.png" />
              <p>Нажмите чтобы добавить новое условие выборки.</p>
              <p>Все условия связываются между собой логическим "И"</p>
            </button>
          </div>
          <div class="foter-btn">
            <button class="left-btn">Протестировать опрос</button>
            <button @click="submitData" class="right-btn">
              Далее
              <img src="@/static/right-arrow.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavPolls from "@/components/NavPolls";
import Condition from "@/components/pools/Condition";

export default {
  components: {
    NavPolls,
    Condition
  },

  methods: {
    addCondition() {
      this.$store.commit("ADD_CONDITION");
    },
    async submitData() {
      const data = {};
      data.conditions = this.$store.getters.conditions;
      data.initConditionNames = this.$store.getters.initConditionNames;
      try {
        const response = await fetch("http://localhost:3001/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          throw new Error("Ответ не ok.");
        }
        const responseData = await response.json();
      } catch (error) {
        console.log("Возникла проблема с POST fetch запросом: ", error.message);
      }
    }
  },
  created() {
    this.$store.dispatch("GET_CONDITION");
  }
};
</script>

<style scoped>
.header {
  font-size: 20px;
  color: #aeaeae;
  padding-top: 20px;
  height: 80px;
}
.conditions {
  padding: 0 20px 0 20px;
}

.condition {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 50px 1fr;
  grid-gap: 20px;
  background-color: #f8e8c2;
  border-bottom: 2px solid #e3e3e3;
  padding: 30px 20px;
}
.condition-title {
}
.condition-selector {
  grid-column: span 2;
}
.condition-option {
  grid-column: span 2;
}
.condition-delete {
  display: flex;
  align-items: flex-end;
}
.condition-delete > button {
  color: #f8736a;
  height: 40px;
  border: 2px solid #ffd2d2;
  border-radius: 10px;
}
.condition-delete img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.selector {
  font-size: 16px;
  color: #444;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 700px;
  max-width: 100%;
  border: 1px solid #e3e3e3;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  background-color: #fff;
}

.footer-add-condition {
  text-align: center;
  border: 1px solid #e5ecf0;
  padding: 20px 0;
}

.btn-add-condition {
  display: inline-block;
  width: 450px;
  color: #007017;
  border: none;
  background-color: #fff;
  text-decoration: none;
}

.foter-btn {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 20px;
}

.left-btn {
  color: #46bb5e;
  background-color: #fff;
  border: none;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

.right-btn {
  color: #fff;
  background-color: #06a326;
  border-radius: 10px;
  width: 120px;
  height: 40px;
}
</style>
