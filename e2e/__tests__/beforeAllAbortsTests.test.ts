beforeAll(async () => {
  throw new Error('Error in beforeAll');
});

describe('tests', () => {
  it('test 1', () => {
    console.log('first: runs!');
  });

  it('test 2', () => {
    console.log('second: runs!');
  });
});
