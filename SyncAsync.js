function asyncTask(taskName, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${taskName} is completed in the ${delay} Secs`);
      }, delay * 1000);
    });
  }
  
  function syncTask(taskName, delay) {
    const start = Date.now();
    while (Date.now() - start < delay * 1000) {}
    console.log(`${taskName} is completed in the ${delay} Secs`);
  }
  
   function asyncTaskRecord() {
      console.log("Asynchrounous tasks are running");
      let start = Date.now();
      Promise.all([
        asyncTask("Async Task 1", 10),
        asyncTask("Async Task 2", 5),
        asyncTask("Async Task 3", 3),
        asyncTask("Async Task 4", 1),
      ]).then((res) => {
      let end = Date.now();
      res.map((e) => console.log(e));
      console.log("Total time taken by asynchronous task: ", (end - start) / 1000, "secs");
      });
  }
  
  function syncTaskRecord() {
      console.log("Synchrounous tasks are running");
      let start = Date.now();
      syncTask("Sync Task 1", 10),
      syncTask("Sync Task 2", 5),
      syncTask("Sync Task 3", 3),
      syncTask("Sync Task 4", 1);
      let end = Date.now();
      console.log("Total time taken by synchronous task: ", (end - start) / 1000, "secs \n");
  }
  
  syncTaskRecord();
  asyncTaskRecord();
  