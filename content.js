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
     path (straight track) and two "real" paths (curved tracks). The
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

  /* ---- Stations along the line (name + small subtitle) ---- */
  stations: [
    { name:"Augsburg", sub:"Day 0" },
    { name:"Initial Days", sub:"Joining 404 Not Found" },
    { name:"First Results", sub:"Lab & model" },
    { name:"Firenze", sub:"COMSOL 2024" },
    { name:"Publication", sub:"Peer-reviewed!" },
    { name:"Defense", sub:"Today" }
  ],

  /* ---- Tracks between consecutive stations ----
     Each leg has ONE ideal path (drawn as the straight middle track:
     how it should have gone) and TWO real paths (the curved tracks:
     what actually happened). If Kiran picks the ideal path, the room
     gets a fact check — and if they don't buy it, he draws a dare. */
  hurdles: [
    { // Augsburg → Initial Days
      ideal: { name:"Knew It All From Day 1", story:"Everything was clear from the first morning: how the chair works, whom to ask, where things are. Smooth as a well-meshed model." },
      real: [
        { name:"The Digging Detour", story:"Lots of digging: old theses, shared drives, folders named “new_new_final”. Answers were somewhere — just never where you looked." },
        { name:"Cluelessness Loop", story:"Nodded confidently in meetings, figured out what everyone meant afterwards. Asked three people, got four answers." }
      ]
    },
    { // Initial Days → First Results
      ideal: { name:"First-Try Results", story:"Experiment and simulation agreed on the very first run. Nobody has seen this happen since." },
      real: [
        { name:"Mesh Won’t Converge", story:"Refine. Re-run. Refine again. Sacrifice a coffee." },
        { name:"Leaky Test Rig", story:"Cryogenic hydrogen does not like to stay where you put it." }
      ]
    },
    { // First Results → Firenze
      ideal: { name:"Abstract Done Early", story:"Abstract submitted weeks ahead, slides final at version 1, travel approved instantly." },
      real: [
        { name:"Abstract at 23:59", story:"Submitted at 23:58. Calm, professional, totally planned." },
        { name:"final_v7_REALLY.pptx", story:"There is always one more version. And one more after that." }
      ]
    },
    { // Firenze → Publication
      ideal: { name:"Accepted As Is", story:"No revisions. The reviewers simply wrote: “Perfect.”" },
      real: [
        { name:"Reviewer 2", story:"“Please also consider…” everything." },
        { name:"Major Revision", story:"Not rejected! That counts as a win." }
      ]
    },
    { // Publication → Defense
      ideal: { name:"The Thesis Wrote Itself", story:"Chapters flowed, every professor was free on the same date, and the talk ran exactly on time." },
      real: [
        { name:"Writer’s Block", story:"Chapter 4. Blank page. Day 3." },
        { name:"Committee Calendar", story:"Finding one date that works for every professor." }
      ]
    }
  ],

  /* ---- One stop per arrival: question (prompt), hint, dares ---- */
  stops: [
  { phase:"Initial Days · The opening", title:"Chess Club: Your Opening Move", icon:"♞",
    prompt:"You’ve organised and moderated enough chess tournaments — today you’re the one on the board. Which chess piece were you when you first joined the <em>404 Not Found</em> group, and which piece are you now, as Dr. Kiran? Give your new piece a dramatic entrance line.",
    hint:"The pawn who crossed the whole board and got promoted? The knight who never once went in a straight line?",
    dares:[
      "Cross the room the way your piece moves. Knights: the L-shape is mandatory.",
      "Name your PhD like a real chess opening — “The Cryogenic Gambit”? “The Axial Flux Defense”? — and demonstrate its first move.",
      "Moderator mode: announce tonight’s headline match, “Experiment vs. Simulation”, like a tournament director with a microphone.",
      "Pick a professor, look them in the eye and say “Check… mate.” Movie-villain voice, please.",
      "Strike your piece’s pose and hold it while everyone takes a photo."
    ]},
  { phase:"First Results · The middlegame", title:"The Lab vs. The Model", icon:"🧊",
    prompt:"An axial flux motor, cooled with cryogenic hydrogen, investigated experimentally <em>and</em> numerically — so you’ve been betrayed from both sides. Which one let you down more often: the test rig or the COMSOL model? And when the thermocouple said one temperature and the simulation said another, who did you believe?",
    hint:"Old lab wisdom: nobody trusts a simulation except the person who ran it, and everybody trusts an experiment except the person who ran it.",
    dares:[
      "Act out cryogenic hydrogen flowing through a hollow conductor. Compressibly.",
      "Be a COMSOL model that refuses to converge. The room times how long you last.",
      "Explain an axial flux motor in 20 seconds to the least technical person in the room. The word “flux” is forbidden.",
      "Mesh refinement: describe your PhD in ten words, then five, then one.",
      "Pick someone as Reviewer 2. They ask: “But did you validate it?” You have 10 seconds to defend yourself."
    ]},
  { phase:"Firenze · On tour", title:"The Kamath Talks", icon:"🎙️",
    prompt:"Benvenuto a Firenze! From the COMSOL Conference here to SAMPE in Long Beach, you took your motor on tour. Now it’s your show. Welcome to <em>The Kamath Talks</em>! Pick one of the professors here as today’s guest, give the episode a title, and introduce them in 20 seconds, full podcast voice.",
    hint:"Affectionate roasting only. Think late-night show, not peer review.",
    dares:[
      "Hum or beatbox the theme tune of <em>The Kamath Talks</em>. Minimum five seconds, maximum confidence.",
      "Read the sponsor message: “This episode is brought to you by K-AXFLUX-H2 — keeping things cool since…”",
      "Florence or Long Beach? Sell your favourite conference trip as a 15-second travel vlog.",
      "Answer the classic conference question: “This is more of a comment than a question, but…” Ten seconds, straight face.",
      "Hand the mic to your guest: they get 10 seconds to introduce <em>you</em>."
    ]},
  { phase:"Publication · The other big releases", title:"The Three-Stage Life Route", icon:"💍",
    prompt:"Published! <em>Case Studies in Thermal Engineering</em>, SAMPE, COMSOL — well done. But these years had three even bigger “releases”, and none of them was peer-reviewed. Name the three big life milestones of your PhD journey, in the right order.",
    hint:"Hint: no expectations, no disappointments — but some very nice surprises.",
    stations:["Came single","Left married","Got a child"],
    dares:[
      "Mime all three stations, no words. The room has to guess each one.",
      "Describe each stage in exactly three words.",
      "Give one piece of advice to a first-year PhD student — one sentence from each stage of you.",
      "Sing one line of a lullaby about axial flux motors.",
      "Do your best “just got married” face, then “first night with a newborn” face."
    ]},
  { phase:"Defense · The endgame (today!)", title:"Doctoral Seminar Schedule", icon:"🗓️",
    prompt:"Final station: today’s defense. And who better to schedule it than the official keeper of the seminar schedule and master of seminar-room setup? One last time, Mr. Coordinator: put these three talks into a running order, and tell us why.",
    talks:["The 8 a.m. Talk","The Talk With 47 Slides","The Talk That Needs Just Five More Minutes"],
    hint:"Bonus: which of these have you actually had to schedule? (No names. Probably.)",
    dares:[
      "Seminar-room speedrun: in 20 seconds, fix something in this room as if the talk starts now.",
      "Pitch “The Talk With 47 Slides” in a single breath. Go!",
      "Give the first 15 seconds of “The 8 a.m. Talk” as if you haven’t had coffee yet.",
      "Ask for “just five more minutes” in three languages. German counts.",
      "Give the next speaker a 10-second pep talk based on your motto: “No expectations → no disappointments.”"
    ]}
  ],

  /* ---- Shown after the last stop ---- */
  finale: {
    heading: "Dr. Kiran Kamath wins the game!",
    message: "All aboard for the next adventure. Herzlichen Glückwunsch!",
    title: "Game Night: Island Edition",
  prompt:"Shipwrecked! The rescue boat is three days away and you’re on an island with the professors. You saved exactly one tabletop game. Which one — and why does it keep everyone friends until the boat arrives?",
  altPrompt:"Shipwrecked! The rescue boat is three days away and you’re on an island with everyone in this room. You saved exactly one tabletop game. Which one — and why does it keep everyone friends until the boat arrives?",
  altLabel:"Make it the whole group instead", mainLabel:"Back to the professors version",
  dare:"Give a 10-second acceptance speech as <strong>Dr. Kiran Kamath</strong>. Thank at least one person, one test rig and one chess piece — and finish with your signature: <strong>„DA BES(CH)T“</strong>."
  }
};
