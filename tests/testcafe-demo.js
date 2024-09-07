import { Selector } from 'testcafe';

fixture `CI Demo Website`
  .page `https://steve-inventive.github.io/ci-demo`;

test('Check button exists', async t => {
    const button = Selector('#demo-button');
    await t.expect(button.exists).ok();
});
