const canEat = function (creature) {
  const obj = {
    eat: function (food) {
      return `The ${creature.name} eats the ${food}.`
    }
  }
  return obj;
}

const canSleep = function (creature) {
  const obj = {
    sleep: function () {
      return `The ${creature.name} sleeps.`
    }
  }
  return obj;
}

const sleepingEatingCreature = function (name) {
  let creature = {
    name
  }
  return { ...creature, ...canEat(creature), ...canSleep(creature) };
}

// arrow notation example of above code

const canEat2 = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

const canSleep2 = (creature) => ({
  sleep: () => {
    return `The ${creature.name} sleeps.`
  }
});

const sleepingEatingCreature2 = (name) => {
  let creature = {
    name
  }
  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};
