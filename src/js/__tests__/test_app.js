import GameSavingLoader from '../GameSavingLoader';

test('Должна возвращаться информация об игроке',
  () => GameSavingLoader.load().then((data) => {
    expect(JSON.parse(data)).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  }));
