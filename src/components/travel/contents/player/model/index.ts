export class CustomAudioContext {
  private audioContext;
  private audioElement;

  /**
   * @links https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
   */
  constructor(dom: HTMLAudioElement) {
    this.audioContext = new AudioContext();
    this.audioElement = dom;
  }

  init() {
    this.audioContext.createMediaElementSource(this.audioElement); // return: MediaElementAudioSourceNode
  }

  play() {
    this.audioElement.play();
    if (!this.isPlaying()) {
      this.audioContext.resume();
      this.audioElement.play();
    }
  }

  pause() {
    this.audioElement.pause();
  }

  isPlaying() {
    return this.audioContext.state === "running";
  }
}
