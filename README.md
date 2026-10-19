# Asia 2026 trip app: install on your phone

## 1. Put it online (one time, free, about 10 minutes)
1. Create a free account at github.com.
2. Click **New repository**. Name it `asia2026`, set it to **Public**, tick "Add a README", and create it.
3. Click **Add file → Upload files** and drag in every file from this folder
   (index.html, sw.js, manifest.webmanifest, and the three icon PNGs). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch" choose `main` and `/ (root)`, then **Save**.
5. After a minute or two the page shows your link: `https://YOUR-USERNAME.github.io/asia2026/`

Note: a public repo means anyone with the link could see the itinerary (not your codes or notes,
which stay on your phone). Don't put confirmation codes into index.html itself.

## 2. Install it
- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open in Chrome → menu → **Install app**.
Open it once from the home screen while online. After that it works with no signal.

## 3. Enter your codes inside the installed app
On iPhone, the home-screen app keeps its own storage, separate from Safari. Enter confirmation
codes after installing, then use Essentials → **Copy backup** and save the text in Notes.

## Updating the plan later
Edit index.html (or ask Claude), upload it again, and change `asia26-v1` to `asia26-v2` in sw.js
so phones pick up the new version. Your codes, notes and checkmarks are kept.

## Sharing with your wife
Send her the same link. She opens it in Safari and adds it to her Home Screen.
To give her your confirmation codes and notes: in your app, Essentials → **Copy codes and notes**,
text it to her, and she taps **Restore from pasted text** and pastes. Repeat after you add codes.
