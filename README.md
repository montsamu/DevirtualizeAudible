If you are as annoyed by me that when you're looking for new audiobooks you see pages and pages of "Virtual Voice" narrations,
then this is the add-on for you. When you're browsing audible.com this add-on looks through the search results and removes the
ones which are "narrated" by a "Virtual Voice". This may result in a blank page of search results if the entire page was "narrated"
by "Virtual Voice" titles. Just go on to the next page and see one or two actual audiobooks amongst the growing virtual horde.

Before installing the add-on: a search listings page which as "Virtual Voice" "narrations" burying any actual audiobooks:

![Before installing the add-on: a search listings page which as "Virtual Voice" "narrations" burying any actual audiobooks.](screenshots/Screenshot%202024-03-07%20at%2012-54-58%20Science%20Fiction%20&%20Fantasy%20Audiobooks%20in%20English%20Audible.com%201280x800.png)


After installing the add-on: a search listings page where you can see the (1) actual human-narrated title:

![After installing the add-on: a search listings page where you can see the (1) actual human-narrated title.](screenshots/Screenshot%202024-03-07%20at%2012-54-17%20Science%20Fiction%20&%20Fantasy%20Audiobooks%20in%20English%20Audible.com%201280x800.png)

Cheers and happy listening.

FIREFOX: (pending approval) https://addons.mozilla.org/en-US/firefox/addon/devirtualizeaudible/

Built with:

```
bsdtar -a -cvf firefox.zip LICENSE PRIVACY -C `pwd`/src/firefox/ manifest.json -C `pwd`/src/common/js devirtualizeAudible.js -C `pwd`/src/common icons
```

CHROME: (pending approval) https://chromewebstore.google.com/detail/fegkpndgbjchmippoedipimhnedijfla/

Built with:

```
bsdtar -a -cvf chrome.zip LICENSE PRIVACY -C `pwd`/src/chrome/ manifest.json devirtualizeAudible.html -C `pwd`/src/common/js devirtualizeAudible.js -C `pwd`/src/common icons
```
