const api =
  "https://raw.githubusercontent.com/AchiGel/time-tracking-dashboard-main/main/data.json";

const buttons = document.querySelectorAll(".intensiv button");
const workCurr = document.querySelector("#work-current");
const workPrev = document.querySelector("#work-previous");
const playCurr = document.querySelector("#play-current");
const playPrev = document.querySelector("#play-previous");
const studyCurr = document.querySelector("#study-current");
const studyPrev = document.querySelector("#study-previous");
const exerciseCurr = document.querySelector("#Exercise-current");
const exercisePrev = document.querySelector("#Exercise-previous");
const socialCurr = document.querySelector("#Social-current");
const socialPrev = document.querySelector("#Social-previous");
const selfCareCurr = document.querySelector("#Self-Care-current");
const selfCarePrev = document.querySelector("#Self-Care-previous");

const fetchedData = [];

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((element) => {
    fetchedData.push(element);
  });
}

getData();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.textContent;

    if (target === "Daily") {
      fetchedData.forEach((el) => {
        if (el.title === "Work") {
          workCurr.textContent = el.timeframes.daily.current;
          workPrev.textContent = el.timeframes.daily.previous;
        }
        if (el.title === "Play") {
          playCurr.textContent = el.timeframes.daily.current;
          playPrev.textContent = el.timeframes.daily.previous;
        }
        if (el.title === "Study") {
          studyCurr.textContent = el.timeframes.daily.current;
          studyPrev.textContent = el.timeframes.daily.previous;
        }
        if (el.title === "Exercise") {
          exerciseCurr.textContent = el.timeframes.daily.current;
          exercisePrev.textContent = el.timeframes.daily.previous;
        }
        if (el.title === "Social") {
          socialCurr.textContent = el.timeframes.daily.current;
          socialPrev.textContent = el.timeframes.daily.previous;
        }
        if (el.title === "Self Care") {
          selfCareCurr.textContent = el.timeframes.daily.current;
          selfCarePrev.textContent = el.timeframes.daily.previous;
        }
      });
    } else if (target === "Weekly") {
      fetchedData.forEach((el) => {
        if (el.title === "Work") {
          workCurr.textContent = el.timeframes.weekly.current;
          workPrev.textContent = el.timeframes.weekly.previous;
        }
        if (el.title === "Play") {
          playCurr.textContent = el.timeframes.weekly.current;
          playPrev.textContent = el.timeframes.weekly.previous;
        }
        if (el.title === "Study") {
          studyCurr.textContent = el.timeframes.weekly.current;
          studyPrev.textContent = el.timeframes.weekly.previous;
        }
        if (el.title === "Exercise") {
          exerciseCurr.textContent = el.timeframes.weekly.current;
          exercisePrev.textContent = el.timeframes.weekly.previous;
        }
        if (el.title === "Social") {
          socialCurr.textContent = el.timeframes.weekly.current;
          socialPrev.textContent = el.timeframes.weekly.previous;
        }
        if (el.title === "Self Care") {
          selfCareCurr.textContent = el.timeframes.weekly.current;
          selfCarePrev.textContent = el.timeframes.weekly.previous;
        }
      });
    } else {
      fetchedData.forEach((el) => {
        if (el.title === "Work") {
          workCurr.textContent = el.timeframes.monthly.current;
          workPrev.textContent = el.timeframes.monthly.previous;
        }
        if (el.title === "Play") {
          playCurr.textContent = el.timeframes.monthly.current;
          playPrev.textContent = el.timeframes.monthly.previous;
        }
        if (el.title === "Study") {
          studyCurr.textContent = el.timeframes.monthly.current;
          studyPrev.textContent = el.timeframes.monthly.previous;
        }
        if (el.title === "Exercise") {
          exerciseCurr.textContent = el.timeframes.monthly.current;
          exercisePrev.textContent = el.timeframes.monthly.previous;
        }
        if (el.title === "Social") {
          socialCurr.textContent = el.timeframes.monthly.current;
          socialPrev.textContent = el.timeframes.monthly.previous;
        }
        if (el.title === "Self Care") {
          selfCareCurr.textContent = el.timeframes.monthly.current;
          selfCarePrev.textContent = el.timeframes.monthly.previous;
        }
      });
    }
  });
});
