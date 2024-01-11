const api =
  "https://raw.githubusercontent.com/AchiGel/time-tracking-dashboard-main/main/data.json";

const buttons = document.querySelectorAll(".intensiv button");

const fetchedData = [];

async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    if (!response.ok) {
      throw new Error();
    }
    data.forEach((element) => {
      fetchedData.push(element);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();

function updateUI(activity, time) {
  fetchedData.forEach((element) => {
    const title = element.title;
    const current = element.timeframes[`${time}`].current;
    const previous = element.timeframes[`${time}`].previous;
    const activityCurrent = document.querySelector(`#${activity}-current`);
    const activityPrevious = document.querySelector(`#${activity}-previous`);

    if (title.toLowerCase().replace(" ", "-") === `${activity}`) {
      activityCurrent.innerText = current;
      activityPrevious.innerText = previous;
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.textContent;

    updateUI("work", target.toLowerCase());
    updateUI("play", target.toLowerCase());
    updateUI("study", target.toLowerCase());
    updateUI("exercise", target.toLowerCase());
    updateUI("social", target.toLowerCase());
    updateUI("self-care", target.toLowerCase());
  });
});
