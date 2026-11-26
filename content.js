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
   • Each stop: on arrival Kiran draws a ticket. It shows 1. "fact"
     (what happened in his life, as a Friends-style episode title:
     "The One Where…") and 2. "prompt" (the
     question / task he has to do to earn the next ticket).
   • Optional on a stop: ticketType (e.g. "Ticket for 2", default
     "Single ticket"), passengers (shown instead of the class) and
     destination (the "to" name on the ticket, e.g. "Firenze Conference").
   • Optional fields in a stop: talks, stations (with reveal button),
     altPrompt + altLabel + mainLabel (a switchable second version).
   • After editing, open index.html in a browser. If something is
     broken, the page shows a red box saying what is wrong.
   ===================================================================== */

window.TICKET_CONTENT = {

  title: "Ticket to Kiran",
  railwayName: "THE PhD RAILWAY · LINE K-AXFLUX-H2",

  /* ---- The railway official who guides Kiran ----
     He only appears at the start. Each intro page is one speech bubble;
     fx: "invalid" shows the UNGÜLTIG ticket, fx: "freepass" the free pass. */
  conductor: {
    name: "DB official",
    intro: [
      { text: "Guten Tag, Kiran! Welcome aboard the PhD Railway. I am your DB official for today. 🎩" },
      { text: "On this railway you need to earn a ticket to move from station to station. Let me check yours… 🔍" },
      { text: "Deutschlandticket ist ungültig! 🚫", fx: "invalid" },
      { text: "But wait… you are only in your Initial Days! Newcomers ride for free. Here is your free pass. 🎫", fx: "freepass" },
      { text: "Choose your track from Augsburg to Initial Days. From then on, you earn every ticket at the station. Gute Fahrt! 🚂" }
    ]
  },

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
     ideal: { name:"Converged on First Run", story:"Perfect mesh, happy solver, and the simulation matched the experiment on day one." },
     real:  { name:"Solver Says No", story:"“Maximum number of iterations reached.” Inverted mesh elements. Out of memory at 97 %. Re-mesh, re-run, repeat — then the results finally came." }
   },
   { // Results & Rings → Firenze
     ideal: { name:"Ready a Week Early", story:"Abstract in early, slides done, talk rehearsed, bags packed. Relaxed arrival in Firenze." },
     real:  { name:"Slides at 3 a.m.", story:"Abstract sent at 23:59, the template changed, a figure came out blurry, and the laptop decided to update an hour before the talk." }
   },
   { // Firenze → Publication
     ideal: { name:"Accepted As Is", story:"No comments. The reviewers simply wrote: “Perfect.”" },
     real:  { name:"Major Revisions", story:"Reviewer 2 asked for “just a few more simulations”. The response letter ended up longer than the paper." }
   },
   { // Publication → Defense
     ideal: { name:"Kiran_defense_v1.pdf", story:"Written once, approved once, presented once." },
     real:  { name:"Kiran_defense_v4506.pdf", story:"v1 was “final”. v12 was “final_final”. v4506 is the one he actually presented. Probably." }
   }
  ],

  /* ---- One stop per arrival: memory (step 1) and prompt (step 2) ---- */
  stops: [
  { phase:"Initial Days", title:"Chess Club", icon:"♞",
    fact:"The One Where Dr. Kiran Started Streaming Chess",
    prompt:"Pick a chess piece for who you were when you started — and one for who you are now, as Dr. Kiran."},
  { phase:"Results & Rings", title:"The Wedding", icon:"💍",
    fact:"The One Where Dr. Kiran Got Married",
    ticketType:"Ticket for 2", passengers:"Kiran + Deeksha",
    prompt:"A question for Deeksha 💍 straight from his PhD: What sound does an axial flux motor make? Show us!"},
  { phase:"Firenze", title:"The Kamath Talks", icon:"🎙️",
    fact:"The One Where Dr. Kiran Started The Kamath Talks",
    ticketType:"Ticket for 2", passengers:"Kiran + Deeksha", destination:"Firenze Conference",
    prompt:"Around this time you started <em>The Kamath Talks</em> on YouTube. Introduce Markus as today’s guest — in true Kamath Talks style."},
  { phase:"Publication", title:"The Baby", icon:"👶",
    fact:"The One Where Dr. Kiran Became a Dad",
    prompt:"The PhD had already changed how you see life — and just then your baby arrived and turned the whole world around again. Tell us one good thing about your little one."},
  { phase:"Defense", title:"Parents Abroad", icon:"✈️",
    fact:"The One Where Dr. Kiran’s Parents Flew In for the Defense",
    prompt:"You did it, Dr. Kiran! And your parents travelled abroad for the very first time — to see you defend your thesis. How does that feel?"}
  ],

  /* ---- Shown after the last stop ---- */
  finale: {
    heading: "Dr. Kiran Kamath wins the game!",
    message: "All aboard for the next adventure. Herzlichen Glückwunsch!",
    dare: "Give a 10-second acceptance speech as <strong>Dr. Kiran Kamath</strong>. Thank at least one person, one test rig and one chess piece — and finish with your signature: <strong>„DA BES(CH)T“</strong>."
  }
};
