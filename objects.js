var playlist = {
  voodooBlue: "Too Old to Cry",
  cher: "Believe"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}