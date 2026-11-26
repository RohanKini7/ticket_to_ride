# Ticket to Kiran

A 5–10 minute celebration game for Dr. Kiran Kamath. A DB official welcomes him in Augsburg and explains the rules. At each station Kiran picks a track (ideal or what really happened), tells one funny memory (+10), completes a special task to get his ticket stamped (+25, +5 honesty bonus for the real track), and collects all stamps to reach the terminus.

## Editing the questions, dares and hurdles

**All the text lives in `content.js`.** You never need to touch `index.html`.

On GitHub:
1. Open `content.js` and click the ✏️ pencil icon.
2. Change the text inside the quotes `"…"`.
3. Click **Commit changes**. Netlify redeploys automatically within a minute or two.

Locally: edit `content.js`, then open `index.html` in a browser (double-click is enough).

What you can change:

| Section | What it is |
|---|---|
| `title`, `subtitle`, `railwayName` | Header texts and the label on the map |
| `conductor` | The DB official: his name, the intro pages and every line he says (placeholders like `{station}` are filled in automatically) |
| `stations` | Milestone stations: `name` + small `sub` (PhD side) and `life` (the personal milestone at the same stop). Always **one more** than `stops`. |
| `hurdles` | One entry per leg: an `ideal` path (the straight track) and a `real` path (the tangled track: what actually happened), each with `name` + `story` |
| `stops` | One per arrival: `phase`, `title`, `icon`, `memory` (step 1, optional), `prompt` (step 2). Optional: `hint`, `talks`, `altPrompt`/`altLabel`/`mainLabel` |
| `finale` | The last screen: heading, message, Game Night question and final dare |

Tips:
- Keep the commas between items and the quotes around text.
- Inside text you can use `<em>italic</em>` and `<strong>bold</strong>`.
- If something is off, the page shows a red box saying what to fix.

## Deploying

This is a plain static site with no build step. Netlify publishes the repository root.
