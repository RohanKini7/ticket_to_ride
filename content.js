/* =====================================================================
   TICKET TO KIRAN — EDIT ALL THE TEXT HERE
   ---------------------------------------------------------------------
   You never need to touch index.html. Change the text in this file,
   save, and reload the page (or commit on GitHub → Netlify redeploys).

   Rules of thumb
   • Keep the quotes "…" around every piece of text and the commas
     between items. If a text needs a double quote inside, write \"
     or use the typographic quotes “ ” instead.
   • Simple HTML works inside text: <em>italic</em>, <strong>bold</strong>.
   • STATIONS has one more entry than STOPS: the train starts at the
     first station and each stop is the arrival at the next one.
   • HURDLES has one entry per leg (same count as STOPS): one "ideal"
     path (straight track) and one "real" path (tangled track). The
     chosen track only changes the route and the little story line,
     never the question.
   • Each stop runs in two steps: "memory" is asked first (how was this
     PhD phase + one favourite memory). Then the personal milestone is
     revealed on the map and "prompt" asks him to retell the phase in
     that milestone's style. Leave "memory" out to skip step 1.
   • Optional fields in a stop: talks, stations (with reveal button),
     altPrompt + altLabel + mainLabel (a switchable second version).
   • After editing, open index.html in a browser. If something is
     broken, the page shows a red box saying what is wrong.
   ===================================================================== */

window.TICKET_CONTENT = {

  title: "Ticket to Kiran",
  subtitle: "Five milestones from Augsburg to today’s defense. Ideal path or what really happened? Ride the train, answer what waits at the station.",
  railwayName: "THE PhD RAILWAY · LINE K-AXFLUX-H2",

  /* ---- Stations: each PhD milestone (name + sub) shares a stop with a
     life milestone (life). Keep "life" short — it is shown on the map. */
  stations: [
    { name:"Augsburg",        sub:"Day 0",                 life:"Arrived single" },
    { name:"Initial Days",    sub:"Joining 404 Not Found", life:"♟️ The chess stream" },
    { name:"Results & Rings", sub:"First data",            life:"💍 The wedding" },
    { name:"Firenze",         sub:"COMSOL 2024",           life:"🎙️ The Kamath Talks" },
    { name:"Publication",     sub:"Peer-reviewed!",        life:"👶 The baby" },
    { name:"Defense",         sub:"Today",                 life:"✈️ Parents’ first trip abroad" }
  ],

  /* ---- Tracks between consecutive stations ----
     Each leg has TWO tracks:
       ideal → the straight track: how it should have gone
       real  → the tangled, loopy track: what actually happened
     If Kiran picks the ideal path, the room gets a fact check — and if
     they don't buy it, he draws a penalty dare.
     Lines marked ✏️ are placeholders: replace them with your own text. */
  hurdles: [
    { // Augsburg → Initial Days
      ideal: { name:"Knew It All From Day 1", story:"He knew exactly what to do. Everything was clear from day one: how the chair works, whom to ask." },
      real:  { name:"The Digging Detour", story:"A lot of digging, a lot of asking around, and a healthy dose of cluelessness." }
    },
    { // Initial Days → Results & Rings
      ideal: { name:"✏️ Ideal path", story:"✏️ Write how it should have gone." },
      real:  { name:"✏️ What really happened", story:"✏️ Write what actually happened." }
    },
    { // Results & Rings → Firenze
      ideal: { name:"✏️ Ideal path", story:"✏️ Write how it should have gone." },
      real:  { name:"✏️ What really happened", story:"✏️ Write what actually happened." }
    },
    { // Firenze → Publication
      ideal: { name:"✏️ Ideal path", story:"✏️ Write how it should have gone." },
      real:  { name:"✏️ What really happened", story:"✏️ Write what actually happened." }
    },
    { // Publication → Defense
      ideal: { name:"✏️ Ideal path", story:"✏️ Write how it should have gone." },
      real:  { name:"✏️ What really happened", story:"✏️ Write what actually happened." }
    }
  ],

  /* ---- One stop per arrival: question (prompt), hint, dares ---- */
  stops: [
  { phase:"Initial Days", title:"Chess Club", icon:"♞",
    memory:"Tell us one funny memory from your initial days.",
    prompt:"Pick a chess piece for who you were when you started — and one for who you are now, as Dr. Kiran.",
    dares:[
      "Cross the room the way your piece moves. Knights: the L-shape is mandatory.",
      "Pick a professor, look them in the eye and say “Check… mate.” Movie-villain voice, please.",
      "Name your PhD like a real chess opening — “The Cryogenic Gambit”? — and demonstrate its first move.",
      "Stream mode: give 15 seconds of live chess-stream commentary on this party."
    ]},
  { phase:"Results & Rings", title:"The Wedding", icon:"💍",
    memory:"Tell us one memory from the phase when your first results came in.",
    prompt:"Tell us something cute about the wedding.",
    dares:[
      "Give a 20-second wedding toast — to your COMSOL model.",
      "Explain your wedding day in FEM terms: mesh, boundary conditions, convergence. 20 seconds.",
      "Show us your best first-dance move. Five seconds is enough."
    ]},
  { phase:"Firenze", title:"The Kamath Talks", icon:"🎙️",
    memory:"Tell us one memory from Italy.",
    prompt:"Around this time you started <em>The Kamath Talks</em> on YouTube. Introduce Markus as today’s guest — in true Kamath Talks style.",
    dares:[
      "Hum or beatbox the theme tune of <em>The Kamath Talks</em>. Minimum five seconds.",
      "Read the sponsor message: “This episode is brought to you by K-AXFLUX-H2 — keeping things cool since…”",
      "Hand the mic to Markus: he gets 10 seconds to introduce <em>you</em>."
    ]},
  { phase:"Publication", title:"The Baby", icon:"👶",
    memory:"Peer-reviewed and published! Tell us one memory from getting the paper out.",
    prompt:"The PhD had already changed how you see life — and just then your baby arrived and turned the whole world around again. Tell us one good thing about your little one.",
    dares:[
      "Read the first line of your paper’s abstract as a bedtime story. Soothing voice, please.",
      "Sing one line of a lullaby about axial flux motors.",
      "Do your best “paper accepted” face, then your best “3 a.m. feeding” face."
    ]},
  { phase:"Defense", title:"Parents Abroad", icon:"✈️",
    prompt:"You did it, Dr. Kiran! And your parents travelled abroad for the very first time — to see you defend your thesis. How does that feel?",
    dares:[
      "Say a 10-second thank-you to your parents in the language you speak at home.",
      "Explain your PhD to your parents in 20 seconds. No jargon allowed — not even “flux”."
    ]}
  ],

  /* ---- Shown after the last stop ---- */
  finale: {
    heading: "Dr. Kiran Kamath wins the game!",
    message: "All aboard for the next adventure. Herzlichen Glückwunsch!",
    title: "Game Night: Island Edition",
    doubleRouteTitle: "Your double route",
  prompt:"Shipwrecked! The rescue boat is three days away and you’re on an island with the professors. You saved exactly one tabletop game. Which one — and why does it keep everyone friends until the boat arrives?",
  altPrompt:"Shipwrecked! The rescue boat is three days away and you’re on an island with everyone in this room. You saved exactly one tabletop game. Which one — and why does it keep everyone friends until the boat arrives?",
  altLabel:"Make it the whole group instead", mainLabel:"Back to the professors version",
  dare:"Give a 10-second acceptance speech as <strong>Dr. Kiran Kamath</strong>. Thank at least one person, one test rig and one chess piece — and finish with your signature: <strong>„DA BES(CH)T“</strong>."
  }
};
