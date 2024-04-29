// 🌟 13.3.3 Awaiting Multiple Promises

async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  if (url === "http://localhost:3000/web") console.log(`🙋`);
  else console.log(`😘`);
  return body;
}

let [value1, value2] = await Promise.all([
  getJSON("http://localhost:3000/web"),
  getJSON("http://localhost:3000/linux"),
]);

// let value1 = await getJSON("http://localhost:3000/web");
// let value2 = await getJSON("http://localhost:3000/linux");
