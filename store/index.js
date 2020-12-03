export const state = () => ({
  conditions: [
    {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      condition: "Выберите условие",
      cardType: [null],
      cardStatus: [null],
      age: [{ ageFrom: null, ageTo: null }]
    }
  ],
  initConditionNames: {
    initConditions: [
      { id: 1, name: "Выберите условие" },
      { id: 2, name: "Возраст респондента" },
      { id: 3, name: "Тип карты лояльности" },
      { id: 4, name: "Статус карты лояльности" }
    ],
    initCardTypes: [
      { id: 1, type: "Gold" },
      { id: 2, type: "Silver" },
      { id: 3, type: "Platinum" }
    ],
    initCardStatuses: [
      { id: 1, type: "Активна" },
      { id: 2, type: "Не активна" },
      { id: 3, type: "Зарегистрирована" },
      { id: 4, type: "Не зарегистрирована" }
    ]
  }
});

export const mutations = {
  ADD_CONDITION(state) {
    state.conditions.push({
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      condition: "Выберите условие",
      cardType: ["Gold"],
      cardStatus: ["Активна"],
      age: [{ ageFrom: "", ageTo: "" }]
    });
  },
  REMOVE_CONDITION(state, conditionId) {
    state.conditions = state.conditions.filter(el => el.id !== conditionId);
  },

  UPDATE_CONDITION(state, payload) {
    const { id, value } = payload;
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.condition = value;
      }
    });
  },

  ADD_AGE(state, id) {
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.age.push({ ageFrom: null, ageTo: null });
      }
    });
  },
  UPDATE_AGE(state, payload) {
    const { id, idx, key, value } = payload;
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.age[idx][key] = value;
      }
    });
  },
  ADD_CARDTYPE(state, id) {
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.cardType.push("Gold");
      }
    });
  },
  UPDATE_CARDTYPE(state, payload) {
    const { id, idx, value } = payload;
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.cardType[idx] = value;
      }
    });
  },

  ADD_CARDSTATUS(state, id) {
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.cardStatus.push("Активна");
      }
    });
  },
  UPDATE_CARDSTATUS(state, payload) {
    const { id, idx, value } = payload;
    state.conditions.forEach(el => {
      if (el.id === id) {
        el.cardStatus[idx] = value;
      }
    });
  }
};

export const actions = {};

export const getters = {
  conditions: s => s.conditions,
  initConditionNames: s => s.initConditionNames,
  age: s => id => s.conditions.find(el => el.id === id).age,
  cardStatus: s => id => s.conditions.find(el => el.id === id).cardStatus,
  cardType: s => id => s.conditions.find(el => el.id === id).cardType
};
