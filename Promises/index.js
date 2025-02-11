console.log("Hello");

const myPromise = new Promise((res, rej) => {
  document.getElementById("myBtn1").addEventListener("click", () => {
    res("Resolved");
  });
  document.getElementById("myBtn2").addEventListener("click", () => {
    rej("Reject");
  });
});

// myPromise.then(res => console.log(res)).catch(rej => console.log(rej))

async function myfn() {
  try {
    const res = await myPromise;
    return res;
  } catch (err) {
    return err;
  }
}

const result = await myfn();

console.log(result);
