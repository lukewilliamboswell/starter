const name: string = "Luke";

console.log(`hello ${name}`);

async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const data = await fetchData("https://localhost:8080");
  console.log(data);
}

main();
