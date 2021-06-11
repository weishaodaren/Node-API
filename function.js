const say = (word) => console.log(word);

const execute = (someFunction, value) => someFunction(value);

execute(say, `Hello`);
