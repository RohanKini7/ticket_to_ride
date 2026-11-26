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
  { phase:"Initial Days · The opening", title:"Chess Club: Your Opening Move", icon:"♞",
    prompt:"Your initial days came with a second opening: the chess stream. You’ve organised, moderated and streamed enough chess — today you’re the one on the board. Which chess piece were you when you first joined the <em>404 Not Found</em> group, and which piece are you now, as Dr. Kiran? Give your new piece a dramatic entrance line.",
    hint:"The pawn who crossed the whole board and got promoted? The knight who never once went in a straight line?",
    dares:[
      "Cross the room the way your piece moves. Knights: the L-shape is mandatory.",
      "Name your PhD like a real chess opening — “The Cryogenic Gambit”? “The Axial Flux Defense”? — and demonstrate its first move.",
      "Moderator mode: announce tonight’s headline match, “Experiment vs. Simulation”, like a tournament director with a microphone.",
      "Pick a professor, look them in the eye and say “Check… mate.” Movie-villain voice, please.",
      "Stream mode: give 15 seconds of live chess-stream commentary on this party. Don’t forget to greet the chat."
    ]},
  { phase:"Results & Rings · The middlegame", title:"Two Results, One Year", icon:"💍",
    prompt:"Midway through the PhD, two big results came in: the first data that finally made sense… and a wedding. Time for a mash-up! Which needed more planning: the test campaign or the wedding? Which had stricter boundary conditions? And which converged first: the simulation, or the guest list?",
    hint:"Old lab wisdom: nobody trusts a simulation except the person who ran it — and nobody trusts a wedding timeline except the person who planned it.",
    dares:[
      "Give a 20-second wedding toast — to your COMSOL model.",
      "Explain your wedding day in FEM terms: mesh, boundary conditions, convergence. 20 seconds.",
      "Be a simulation that refuses to converge… until it finally does, like a first dance.",
      "Mesh refinement: describe that year in ten words, then five, then one.",
      "Pick someone as Reviewer 2. They ask: “But did you validate the results?” You have 10 seconds."
    ]},
  { phase:"Firenze · On tour", title:"The Kamath Talks", icon:"🎙️",
    prompt:"Benvenuto a Firenze! While your motor went on tour — COMSOL here, SAMPE in Long Beach — a second show went on air. Welcome to <em>The Kamath Talks</em>! Pick one of the professors here as today’s guest, give the episode a title, and introduce them in 20 seconds, full podcast voice.",
    hint:"Affectionate roasting only. Think late-night show, not peer review.",
    dares:[
      "Hum or beatbox the theme tune of <em>The Kamath Talks</em>. Minimum five seconds, maximum confidence.",
      "Read the sponsor message: “This episode is brought to you by K-AXFLUX-H2 — keeping things cool since…”",
      "Florence or Long Beach? Sell your favourite conference trip as a 15-second travel vlog.",
      "Answer the classic conference question: “This is more of a comment than a question, but…” Ten seconds, straight face.",
      "Hand the mic to your guest: they get 10 seconds to introduce <em>you</em>."
    ]},
  { phase:"Publication · Two big releases", title:"Paper or Baby?", icon:"👶",
    prompt:"The publication and the baby arrived on the same track — talk about a collision! Quick-fire comparison: Which had the longer review process? Which kept you up more at night: Reviewer 2 or the baby? And which one has the better chance of being cited by your parents?",
    hint:"Both were peer-reviewed. One of them by grandparents.",
    dares:[
      "Read the first line of your paper’s abstract as a bedtime story. Soothing voice, please.",
      "Sing one line of a lullaby about axial flux motors.",
      "Impersonate Reviewer 2 and the baby complaining about the same figure.",
      "Do your best “paper accepted” face, then your best “3 a.m. feeding” face.",
      "Describe fatherhood in the style of a paper abstract: background, method, results — 20 seconds."
    ]},
  { phase:"Defense · Parents’ first trip abroad", title:"Doctoral Seminar Schedule", icon:"🗓️",
    prompt:"Final station: today’s defense — and the trip that brought your parents abroad for the very first time. So, Mr. Seminar Coordinator, one last schedule: your parents are in the audience. In which order do you put these three talks to impress them most, and why?",
    talks:["The 8 a.m. Talk","The Talk With 47 Slides","The Talk That Needs Just Five More Minutes"],
    hint:"Bonus: how did you explain to your parents what a PhD actually is?",
    dares:[
      "Explain your PhD to your parents in 20 seconds. No jargon allowed — not even “flux”.",
      "Say a 10-second thank-you to your parents in the language you speak at home.",
      "Pitch “The Talk With 47 Slides” in a single breath. Go!",
      "Ask for “just five more minutes” in three languages. German counts.",
      "Give the next speaker a 10-second pep talk based on your motto: “No expectations → no disappointments.”"
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
