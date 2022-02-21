for (let i = 1000; i >= 0; i -= 2)
	console.log(i);

for (let i = 0; i <= 10000; i++) {
	if (i == 2500)
		alert("A quarter of the way there!");
	if (i == 5000)
		alert("Halfway there!");
	if (i == 10000)
		alert("The loop is done!");
}

const tv_show = ["Grand Sumo Highlights", "Easy Japanese for Work", "Four Seasons in Japan", "Songs of Tokyo", "Anime Supernova"];
for (let i = 0; i < tv_show.length; i++) {
	console.log("My #" + (i+1) + " favorite tv show is " + tv_show[i]);
}
