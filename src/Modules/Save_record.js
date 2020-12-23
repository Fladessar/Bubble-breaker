export let saveRecord = (totalScore) => {
  if (localStorage.getItem('record') < totalScore) {
    localStorage.setItem('record', totalScore);
  };
};

export let getRecord = () => {
  document.getElementById('record').innerHTML = localStorage.getItem('record');
}
