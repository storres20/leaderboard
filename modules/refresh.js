import showList from './showList.js';

const refresh = (url) => {
  const refresh = document.getElementById('refresh');

  // clicking on refresh button
  refresh.addEventListener('click', () => showList(url));
};

export default refresh;