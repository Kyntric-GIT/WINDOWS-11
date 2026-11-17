# WINDOWS-11 Web Desktop

A Windows 11-inspired desktop simulation that runs in a modern browser.

## Included

- Draggable application windows with maximize, minimize, close, resize, and edge snapping (left/right halves and four corner layouts).
- Taskbar shows open apps; single-click taskbar icons to open or restore them.
- Right-click apps to pin/unpin them; drag pinned taskbar icons to reorder.
- Start menu and desktop app shortcuts (double-click desktop shortcuts).
- App Store with installable Calculator, Notepad, Paint, Media Player, Terminal, and Game Library.
- Settings for built-in/custom wallpapers, accent color, taskbar alignment, Rammerhead instance URL, and hiding non-default apps.
- Virtual File Explorer with editable files and per-imported-game game.json metadata.
- Eaglercraft 26.2 retained as a default, preinstalled app using the existing Worker URL.

## Rammerhead

Open Settings and paste the URL of a Rammerhead instance you operate or are authorized to use. The Browser app opens that instance in a new tab. Enter the destination address inside Rammerhead itself; this project does not host or create a proxy instance.

## Eaglercraft

The Eaglercraft default app continues to load from:

https://sparkling-dream-5f35.kyntric-git.workers.dev/game

The existing eaglercraft-worker.js remains unchanged.

## Virtual file manager limitation

The File Explorer stores editable project metadata in the browser's local storage. It cannot directly edit a remote GitHub repository, a hosted game's server-side files, browser sandbox files, or a game's compiled save data. Imported games create a local Games/<game-id>/game.json entry.

## Run / deploy

Open index.html locally or enable GitHub Pages with GitHub Actions as the deployment source. The included workflow publishes the repository root.
