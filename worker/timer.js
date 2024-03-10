let timer = null;
let timerSet = new Set();
let count = 0;
worker.onMessage(function ({ action, interval }) {
  if (action === "start") {
    timer = setInterval(() => {
      worker.postMessage(JSON.stringify({ set: Array.from(timerSet) }))
    }, interval)
    timerSet.add(r);
    console.log("Worker: Starting interval", timer);
  } else if (action === "restart") {
    count++;
    timerSet.forEach((function (timer) { clearInterval(timer) }));
    timerSet.clear();
    timer = setInterval((function () {
      worker.postMessage(JSON.stringify({ set: Array.from(timerSet) }))
    }), count % 2 == 1 ? interval - 1 : interval);
    timerSet.add(r);
    console.log("Worker: ReStarting interval", timer, count);
  } else if (action === "stop") {
    timerSet.forEach((function (timer) { clearInterval(timer) }));
    timerSet.clear();
    count = 0;
    timer = null;
    console.log("Worker: Stopping interval")
  }
})