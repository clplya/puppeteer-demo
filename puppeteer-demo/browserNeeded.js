const example = require('./example');

function test(){
    const browser = example.browser();
    const page = browser.?? //This should be browser.newPage() but there is 
        //no functionality available to the browser object
}