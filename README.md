If you are as annoyed by me that when you're looking for new audiobooks you see pages and pages of "Virtual Voice"
narrations, then this is the add-on for you. When you're browsing audible.com this add-on looks through the search
results and removes the ones which are "narrated" by a "Virtual Voice". This may result in a blank page of search
results if the entire page was "narrated" by "Virtual Voice" titles. Just go on to the next page and see one or two
actual audiobooks amongst the growing virtual horde.

Before installing the add-on: a search listings page which has "Virtual Voice" "narrations" burying any actual
audiobooks:

![Before installing the add-on: a search listings page which as "Virtual Voice" "narrations" burying any actual audiobooks.](screenshots/Screenshot%202024-03-07%20at%2012-54-58%20Science%20Fiction%20&%20Fantasy%20Audiobooks%20in%20English%20Audible.com%201280x800.png)

After installing the add-on: a search listings page where you can see the (1) actual human-narrated title, and the
removal message to let you know the search results have been filtered:

![After installing the add-on: a search listings page where you can see the (1) actual human-narrated title.](screenshots/Screenshot%202024-03-08%20at%2008-49-04%20Science%20Fiction%20&%20Fantasy%20Audiobooks%20in%20English%20Audible.com%201280x800.png)

At the time of this writing (March 2024) here is the sad state of affairs when trying to actually find an audiobook narrated by a human:

* Of the latest 100 new titles in science fiction and fantasy, only 11 are narrated by actual human beings
* Of the latest 100 new titles in mystery and trillers, only 17 are narrated by actual human beings
* Of the latest 100 new titles in romance, only 19 are narrated by actual human beings
* Of the latest 100 new titles in genre fiction, only 15 are narrated by actual human beings
* Of the latest **200** new titles in literature and fiction, only 27 (out of **200**) are narrated by actual human beings

I just got tired and tired of having to scroll through all of this garbage being shoveled onto us.

Cheers and happy listening.

# LINKS:

FIREFOX: (pending approval) https://addons.mozilla.org/en-US/firefox/addon/devirtualizeaudible/

CHROME/EDGE: (pending approval) https://chromewebstore.google.com/detail/fegkpndgbjchmippoedipimhnedijfla/

# BUILD:

## Firefox:

```
mkdir -p dist
cp -R src/firefox/ dist
cp -R src/common/* dist/firefox
bsdtar -a -cvf dist/firefox.zip LICENSE PRIVACY -C `pwd`/dist/firefox/ js icons manifest.json

```

Download at [downloads/DevirtualizeAudible-ff-1.0.1.zip](downloads/DevirtualizeAudible-ff-1.0.1.zip) to try out in Developer mode. For Firefox, this means navigating to "about:debugging", clicking "This Firefox", and clicking "Load Temporary Add-on". (This has to be repeated each restart of Firefox until you can download it from the official marketplace.)

## Chrome/Edge:

```
mkdir -p dist
cp -R src/chrome/ dist
cp -R src/common/* dist/chrome
bsdtar -a -cvf dist/chrome.zip LICENSE PRIVACY -C `pwd`/dist/chrome/ js icons html manifest.json
```

Download at [downloads/DevirtualizeAudible-chrome-1.0.1.zip](downloads/DevirtualizeAudible-chrome-1.0.1.zip) to try out in Developer mode. For Edge, this means extracting the ZIP to a folder, navigating to "edge://extensions", selecting the "Developer mode" slider, and clicking "Load unpacked" and selecting the folder containing the extension files. (This will generate a warning on each restart of Edge until you can download it from the official marketplace.)
