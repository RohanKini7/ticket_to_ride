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
  { phase:"Initial Days · The opening", title:"Chess Club: Your Opening Move", icon:"♞",
    memory:"How were your initial days in the <em>404 Not Found</em> group? What surprised you most — and what’s one favourite memory from that time?",
    prompt:"Your initial days were also when the chess stream started. So retell them as a chess stream: What was your opening? What was the first blunder? Which move are you proudest of? And which chess piece were you back then — and which are you now, as Dr. Kiran?",
    hint:"Stream voice on: greet the chat, explain the position, react to every move.",
    dares:[
      "Cross the room the way your piece moves. Knights: the L-shape is mandatory.",
      "Name your PhD like a real chess opening — “The Cryogenic Gambit”? “The Axial Flux Defense”? — and demonstrate its first move.",
      "Moderator mode: announce tonight’s headline match, “Experiment vs. Simulation”, like a tournament director with a microphone.",
      "Pick a professor, look them in the eye and say “Check… mate.” Movie-villain voice, please.",
      "Stream mode: give 15 seconds of live chess-stream commentary on this party. Don’t forget to greet the chat."
    ]},
  { phase:"Results & Rings · The middlegame", title:"Two Results, One Year", icon:"💍",
    memory:"How was the phase when the first results came in — experiments and simulations? What’s one favourite memory from the lab or the model?",
    prompt:"That same phase brought the wedding. So tell the story of your first results as a wedding: How did you meet your data? Who objected when asked to “speak now or forever hold their peace”? What vows did experiment and simulation make — and did they converge happily ever after?",
    hint:"Old lab wisdom: nobody trusts a simulation except the person who ran it — and nobody trusts a wedding timeline except the person who planned it.",
    dares:[
      "Give a 20-second wedding toast — to your COMSOL model.",
      "Explain your wedding day in FEM terms: mesh, boundary conditions, convergence. 20 seconds.",
      "Be a simulation that refuses to converge… until it finally does, like a first dance.",
      "Mesh refinement: describe that year in ten words, then five, then one.",
      "Pick someone as Reviewer 2. They ask: “But did you validate the results?” You have 10 seconds."
    ]},
  { phase:"Firenze · On tour", title:"The Kamath Talks", icon:"🎙️",
    memory:"Benvenuto a Firenze! How was the conference phase — COMSOL here, SAMPE in Long Beach? What’s one favourite memory from the road?",
    prompt:"Around then, <em>The Kamath Talks</em> went on air. So tell your Firenze phase as a podcast episode: give it an episode title and a 20-second intro in full podcast voice — then pick one of the professors here as your guest and ask them one question.",
    hint:"Affectionate roasting only. Think late-night show, not peer review.",
    dares:[
      "Hum or beatbox the theme tune of <em>The Kamath Talks</em>. Minimum five seconds, maximum confidence.",
      "Read the sponsor message: “This episode is brought to you by K-AXFLUX-H2 — keeping things cool since…”",
      "Florence or Long Beach? Sell your favourite conference trip as a 15-second travel vlog.",
      "Answer the classic conference question: “This is more of a comment than a question, but…” Ten seconds, straight face.",
      "Hand the mic to your guest: they get 10 seconds to introduce <em>you</em>."
    ]},
  { phase:"Publication · Two big releases", title:"Paper or Baby?", icon:"👶",
    memory:"How was the publication phase — writing, submitting, waiting, revising? What’s one favourite memory from getting the paper out?",
    prompt:"The paper arrived on the same track as the baby. So announce your publication like a birth: due date vs. actual date, hours of labour, weight in pages, and the first reactions from the relatives (Reviewer 2 counts as a relative). Then the quick-fire round: which kept you up more at night?",
    hint:"Both were peer-reviewed. One of them by grandparents.",
    dares:[
      "Read the first line of your paper’s abstract as a bedtime story. Soothing voice, please.",
      "Sing one line of a lullaby about axial flux motors.",
      "Impersonate Reviewer 2 and the baby complaining about the same figure.",
      "Do your best “paper accepted” face, then your best “3 a.m. feeding” face.",
      "Describe fatherhood in the style of a paper abstract: background, method, results — 20 seconds."
    ]},
  { phase:"Defense · Parents’ first trip abroad", title:"Doctoral Seminar Schedule", icon:"🗓️",
    memory:"Final station! How were the last months — writing the thesis, preparing the defense, and today? What’s one favourite memory from the final stretch?",
    prompt:"Your parents travelled abroad for the very first time for this. So tell your defense phase as their travel guide: the must-see sights, what the locals (the professors) are like, and the one thing every tourist should know. Bonus, Mr. Seminar Coordinator: in which order would you schedule these three talks to impress them most?",
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
