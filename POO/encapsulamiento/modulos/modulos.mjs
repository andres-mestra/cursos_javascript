const videoPlay = (id) => {
  const urlSecreta = "https://secreto.com" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
};

const videoStop = (id) => {
  const urlSecreta = "https://secreto.com" + id;
  console.log("Pausamos la url " + urlSecreta);
};

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}
