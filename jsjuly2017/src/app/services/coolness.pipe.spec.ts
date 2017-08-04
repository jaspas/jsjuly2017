import { CoolnessPipe } from './coolness.pipe';

describe('CoolnessPipe', () => {
  it('create an instance', () => {
    const pipe = new CoolnessPipe();
    expect(pipe).toBeTruthy();
  });
});
