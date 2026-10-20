# Thailand Vietnam China 2026 app: install on your phone

## 1. Put it online (one time, free, about 10 minutes)
1. Create a free account at github.com.
2. Click **New repository**. Name it `asia2026` (or anything you like), set it to **Public**, tick "Add a README", and create it.
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

## Street maps
In the installed app, each day's map shows full street detail (OpenStreetMap via CARTO) when online.
Before you fly, open Essentials and tap **Save street maps for offline** on Wi-Fi so they work with no signal.

## Sync between phones (Firebase, one-time setup)
1. Go to console.firebase.google.com, sign in with Google, and create a project (Analytics off).
2. Build → Authentication → Get started → Sign-in method → Anonymous → Enable.
3. Build → Firestore Database → Create database → choose a location → Production mode.
4. Firestore → Rules: paste the rules shown in the app (Info → Sync → Set up → Copy rules) and Publish.
5. Project settings (gear) → Your apps → Web (</>) → register an app → copy the firebaseConfig block.
6. In the installed app: Info → Sync → Set up (first phone) → paste the block → Start syncing.
7. Tap "Copy invite for your wife" and text it to her. On her phone: Info → Sync → Join with an invite → paste.

Mainland China blocks Google services. Sync pauses there unless you use a roaming eSIM or VPN, then catches up.
Everything still works offline in the meantime.
