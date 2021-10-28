import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((id, created, userId, userName, userLevel, userPoints) => new GameSaving(
        id, created, userId, userName, userLevel, userPoints,
      ));
  }
}
