import Person from './person.js';

const submit = (url) => {
  const user = document.getElementById('user'); // input for introduce name
  const score = document.getElementById('score'); // input for introduce score
  const submit = document.getElementById('submit'); // submit button

  // clicking on submit button
  submit.addEventListener('click', async () => {
    // creating an object with user and score introduced on inputs
    const person = new Person(user.value, score.value);

    // POST those values on API server
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // clear input's value
    user.value = '';
    score.value = '';
  });
};

export default submit;