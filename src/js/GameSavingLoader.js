import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((data) => new GameSaving(data));
  }
}
