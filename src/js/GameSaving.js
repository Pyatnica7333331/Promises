export default class GameSaving {
  constructor(dataString) {
    const data = JSON.parse(dataString);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
