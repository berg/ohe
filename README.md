# ohe: Skeleton App.net streaming &rarr; socket.io adapter

Here's a <strike>simple</strike> very, very rough Express/socket.io adapter that connects App.net global stream events and emits them in the browser. Probably buggy (threw it together in a few hours during our hackathon.) Do with it what you will.

## Usage

Clone repo, `npm install`, copy `config.sample.js` to `config.js`, include a stream url in `config.js` that you've created (left as an exercise for the reader).

Run `bin/ohe` and navigate to `http://host:8666/foo.html`

Told you it was rough.

## Why is this called ohe?

"`Ohe" is a bamboo-like plant commonly found in Hawaii. (I think.) We have a convention of naming our internal things with Hawaiian words at App.net. So here we are.

## License

BSD.
