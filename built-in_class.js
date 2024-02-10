const date = new Date();

const timeInJakarta = date.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

const timeInTokyo = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

console.log(`Current Time in Jakarta : ${timeInJakarta}`);
console.log(`Current Time in Tokyo   : ${timeInTokyo}`);
