const showList = async (url) => {
  const recentList = document.querySelector('.recentList');

  // get all scores
  const response = await fetch(url);
  let data = await response.json();
  data = data.result; // all scores

  // clear recentList on screen
  recentList.innerHTML = '';

  // print all scores on screen
  data.forEach((item) => {
    recentList.innerHTML += `
      <p>${item.user}: ${item.score}</p>
    `;
  });
};

export default showList;