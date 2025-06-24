async function getSongs() {
  let a = await fetch("http://192.168.1.100:5500/Spotify-Clone/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}

async function main() {
  //Get the list of all the songs
  let songs = await getSongs();
  console.log(songs);

  //Play the first song
  let audio = new Audio(songs[0]);
  audio.play();
}

main(); 