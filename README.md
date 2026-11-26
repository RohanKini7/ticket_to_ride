# Ticket to Kiran

A 5–10 minute celebration game for Dr. Kiran Kamath. The train rides the PhD railway from Augsburg to the defense. At each milestone, Kiran picks the hurdle he fought through, answers the question on the ticket, and draws a dare.

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
| `stations` | Milestone stations (name + small subtitle). Always **one more** than `stops`. |
| `hurdles` | One entry per leg: an `ideal` path (the straight track) and two `real` paths (the curved tracks: what actually happened), each with `name` + `story` |
| `stops` | One per arrival: `phase`, `title`, `icon`, `prompt`, `hint`, `dares`. Optional: `talks`, `stations` (reveal answer), `altPrompt`/`altLabel`/`mainLabel` |
| `finale` | The last screen: heading, message, Game Night question and final dare |

Tips:
- Keep the commas between items and the quotes around text.
- Inside text you can use `<em>italic</em>` and `<strong>bold</strong>`.
- If something is off, the page shows a red box saying what to fix.

## Deploying

This is a plain static site with no build step. Netlify publishes the repository root.
