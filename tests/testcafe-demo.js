import { Selector } from 'testcafe';

fixture `CI Demo Website`
  .page `https://steve-inventive.github.io/ci-demo`;  // Replace with the correct URL

test('Check button exists and h1 text is correct', async t => {
    const button = Selector('#demo-button');
    const header = Selector('h1');

    // Check if the <h1> tag contains the correct text
    await t.expect(header.innerText).eql('Welcome to whatever CI Demo Website');
    console.log('header is correct');

    // Check if the button exists
    await t.expect(button.exists).ok();
    console.log('button was found');  
});
