/* Zzpkit — prompt content (Dutch). No personal names. */
window.ZZPKIT = {
  sections: [
    { id: "start", label: "Start" },
    { id: "formule", label: "Prompt-formule" },
    { id: "offertes", label: "Offertes" },
    { id: "klantmail", label: "Klantmail" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "admin", label: "Admin" },
    { id: "speelboek", label: "Speelboek" },
    { id: "fouten", label: "Fouten" },
    { id: "cheatsheet", label: "Cheat sheet" }
  ],

  start: {
    title: "Welkom in het kit",
    lead: "ChatGPT-workflows voor offertes, klanten, LinkedIn en admin. Praktische templates. Copy-paste. Geen hype.",
    bullets: [
      "Setup in ±15 minuten (Free is genoeg om te starten)",
      "Eén prompt-formule die je overal hergebruikt",
      "Kant-en-klare prompts voor de taken die je elke week doet",
      "30-minuten speelboek zodat AI een gewoonte wordt"
    ],
    setup: [
      "Maak een account op chat.openai.com (of gebruik de app).",
      "Zet antwoorden op Nederlands — in de prompt of Custom Instructions.",
      "Vul Custom Instructions: wie je bent (ZZP’er in [vak], nuchter) en hoe ChatGPT moet antwoorden (kort, bullets, bruikbaar concept).",
      "Maak een map AI-prompts met submappen Offerte / Klant / LinkedIn / Admin.",
      "Kopieer de prompt-formule op een sticky of open het tabblad Prompt-formule."
    ],
    tip: "Werk niet in één eindeloze chat. Nieuwe taak = nieuwe chat (of een duidelijk gelabelde thread)."
  },

  formule: {
    title: "Prompt-formule die werkt",
    skeleton: `ROL: Wie speelt ChatGPT?
CONTEXT: Wie ben jij, wat is de situatie?
TAAK: Wat moet er precies gebeuren?
FORMAT: Hoe wil je de output (mail, bullets, tabel…)?
CONSTRAINTS: Toon, lengte, wat níet mag, feiten die vaststaan`,
    example: `ROL: Je bent een nuchtere Nederlandse business writer voor ZZP’ers.
CONTEXT: Ik ben freelance [vak]. Klant: [bedrijf]. Project: [1 zin]. Budgetindicatie: [bedrag of range].
TAAK: Schrijf een offerte-samenvatting van max. 180 woorden.
FORMAT: Kop + 3 bullets scope + vaste prijs + 2 aannames + volgende stap.
CONSTRAINTS: Geen hype. Geen verzonnen prijzen buiten wat ik geef. Zakelijk, vriendelijk, jij-vorm.`,
    upgrades: [
      "Geef feiten die vaststaan (prijs, deadline, deliverables). AI mag die niet “verbeteren”.",
      "Vraag om opties (“geef 2 varianten: kort / iets warmer”).",
      "Laat AI eerst vragen stellen als context dun is: “Stel max. 5 vragen voordat je schrijft.”",
      "Itereer gericht: “Houd structuur, maak tone formeler” i.p.v. alles opnieuw.",
      "Check altijd zelf cijfers, namen en juridische claims."
    ]
  },

  prompts: {
    offertes: [
      {
        id: "off-1",
        title: "Offerte — vaste prijs",
        when: "Gebruik als je een vaste prijs (excl. btw) en heldere deliverables hebt.",
        prompt: `ROL: Ervaren Nederlandse ZZP-offerteschrijver.
CONTEXT:
- Mijn dienst: [dienst]
- Klant / sector: [naam of type]
- Doel van de klant: [1–2 zinnen]
- Deliverables: [opsomming]
- Planning: [start – oplevering]
- Vaste prijs (excl. btw): €[bedrag]
- Wat valt erbuiten: [uitsluitingen]
TAAK: Schrijf een compacte offerte-tekst.
FORMAT:
1) Opening (2 zinnen)
2) Scope (bullets)
3) Aanpak in 3 stappen
4) Prijs + wat inbegrepen is
5) Uitsluitingen
6) Planning
7) Volgende stap (akkoord + startdatum)
CONSTRAINTS: Max. 350 woorden. Geen verzonnen extras. Nuchter. Gebruik alleen mijn cijfers.`
      },
      {
        id: "off-2",
        title: "Offerte — urenbasis",
        when: "Gebruik bij uurtarief + bandbreedte, als de scope nog kan bewegen.",
        prompt: `ROL: Zakelijke copywriter voor freelancers.
CONTEXT: Uurtarief €[X], geschatte uren [Y–Z], type werk […], onzekerheden: […].
TAAK: Schrijf een uren-offerte die eerlijk is over bandbreedte.
FORMAT: Samenvatting + urenrange + tarief + hoe we bijsturen als uren oplopen + check-in moment.
CONSTRAINTS: Geen vaste totalen verzinnen buiten mijn range. Leg uit dat urenindicatie is, geen garantie.`
      },
      {
        id: "off-3",
        title: "Scope creep — clausule + mail",
        when: "Als klanten vaak “nog even dit” vragen en je meerwerk wilt indammen.",
        prompt: `ROL: Praktische ZZP-adviseur (geen jurist).
CONTEXT: Ik lever [dienst]. Klanten vragen vaak “nog even dit”.
TAAK: (A) 5 zinnen voor in mijn offerte over meerwerk. (B) Een korte mail als iemand buiten scope vraagt.
FORMAT: A als bullets; B als mail met onderwerp + body.
CONSTRAINTS: Vriendelijk, stevig, geen juridisch jargon. Bied opties: later / meerwerk-offerte / inruilen van iets anders.`
      },
      {
        id: "off-4",
        title: "Offerte inkorten",
        when: "Na feedback “te lang” — zonder prijs of deliverables te schrappen.",
        prompt: `CONTEXT: Plak hieronder mijn conceptofferte.
TAAK: Kort in tot 1 pagina-equivalent (~250–300 woorden) zonder prijs of deliverables te schrappen.
FORMAT: Behoud koppen. Markeer wat je hebt geschrapt in een korte lijst onderaan.
CONSTRAINTS: Geen nieuwe beloftes toevoegen.`
      },
      {
        id: "off-5",
        title: "Good / Better / Best",
        when: "Als je drie pakketten wilt met echte scope-verschillen, niet alleen “meer support”.",
        prompt: `ROL: Pricing-copy voor diensten (geen short-form hype).
CONTEXT: Basisaanbod […], mijn kostprijs/uren […], klantsegment […].
TAAK: Stel 3 pakketten voor met duidelijke verschillen in scope, niet alleen “meer support”.
FORMAT: Tabel: pakket | voor wie | wel | niet | richtprijs.
CONSTRAINTS: Gebruik mijn richtprijzen of vraag ernaar — verzin geen marktprijzen alsof ze feiten zijn.`
      }
    ],
    klantmail: [
      {
        id: "mail-1",
        title: "Kickoff-mail",
        when: "Direct na akkoord op de offerte — warm, kort, met acties.",
        prompt: `ROL: Professionele Nederlandse accountmanager-stijl, warm maar kort.
CONTEXT: Traject [naam] start op [datum]. Deliverables: […]. Mijn werkwijze: [check-ins / tools].
TAAK: Kickoff-mail na akkoord offerte.
FORMAT: Onderwerp + mail. Max. 160 woorden. Eindig met 3 concrete vragen of acties voor de klant.
CONSTRAINTS: Geen emoji-storm. Geen “supertof!!”.`
      },
      {
        id: "mail-2",
        title: "Betaling najagen",
        when: "Factuur te laat — eerst vriendelijk, dan duidelijker (nog beleefd).",
        prompt: `ROL: Zakelijke debiteurencommunicatie, respectvol.
CONTEXT: Factuur [nummer], bedrag €[X], vervaldatum [datum], dagen te laat: [n]. Relatie: [goed/neutraal].
TAAK: Schrijf versie 1 (vriendelijke herinnering) en versie 2 (duidelijker, nog beleefd).
FORMAT: Twee mails met onderwerp. Max. 120 woorden elk.
CONSTRAINTS: Geen dreigementen. Wel duidelijke volgende stap en betaalgegevens-placeholder [IBAN/link].`
      },
      {
        id: "mail-3",
        title: "Beleefd nee",
        when: "Aanvraag afwijzen of uitstellen zonder valse hoop.",
        prompt: `CONTEXT: Aanvraag: […]. Reden om af te wijzen of uit te stellen: [vol / niet mijn expertise / timing].
TAAK: Mail die de deur openhoudt zonder valse hoop.
FORMAT: Onderwerp + body. Optioneel: 1 zin doorverwijzing als ik een tip heb: [naam/type].
CONSTRAINTS: Geen excuses-essay. Max. 100 woorden.`
      },
      {
        id: "mail-4",
        title: "Review vragen",
        when: "Na een geslaagd project — makkelijk te beantwoorden, zonder druk.",
        prompt: `CONTEXT: Project […], resultaat in hun woorden: […], kanaal: LinkedIn of mail.
TAAK: Korte vraag om een review. Geef ook 3 voorbeeldzinnen die zij mogen herschrijven (geen “schrijf dit letterlijk”).
FORMAT: Mail + 3 voorbeeldzinnen.
CONSTRAINTS: Geen druk. Makkelijk te beantwoorden (ja/nee + 2 zinnen is genoeg).`
      }
    ],
    linkedin: [
      {
        id: "li-1",
        title: "Post-ideeën uit je weekwerk",
        when: "Je hebt 3 echte bullets uit je week en wilt 5 post-hoeken zonder bait.",
        prompt: `ROL: Contentcoach voor Nederlandse freelancers.
CONTEXT: Deze week deed ik: [3 bullets uit je werk — anonimiseer klanten]. Mijn vak: […].
TAAK: Geef 5 post-hoeken. Per hoek: titelregel + kerninsight + waarom relevant voor mijn ICP.
FORMAT: Genummerde lijst. Geen engagement-bait (“Comment JA als…”).
CONSTRAINTS: Geen verzonnen case-resultaten. Geen carrousel-scripts vol clichés.`
      },
      {
        id: "li-2",
        title: "Comment-angles",
        when: "Slim meedoen in andermans draad — inhoudelijk, geen “Great post!”.",
        prompt: `CONTEXT: Ik wil reageren op posts over [thema]. Mijn expertise: […].
TAAK: 8 comment-templates: kort (1–2 zinnen), inhoudelijk, geen “Great post!”.
FORMAT: Per template: wanneer gebruiken + tekst.
CONSTRAINTS: Geen linkdump. Geen DM-lokker in de comment.`
      },
      {
        id: "li-3",
        title: "DM-opener",
        when: "Menselijke first touch — geen pitch in bericht 1.",
        prompt: `CONTEXT: Ik wil [persoon/type] een DM sturen omdat [reden: post, event, gemeenschappelijke connectie].
TAAK: 3 openers + 1 follow-up als ze reageren. Geen offerte in bericht 1.
FORMAT: Kort. Vraag die met 1 zin te beantwoorden is.
CONSTRAINTS: Geen “Ik help bedrijven X te 10x-en”. Geen geautomatiseerde spamtoon.`
      }
    ],
    admin: [
      {
        id: "adm-1",
        title: "Weekplanning",
        when: "Maandagochtend ±10 min — realistische blokken met buffer.",
        prompt: `ROL: Productiviteitscoach voor solopreneurs (nuchter).
CONTEXT: Mijn top-doelen deze week: [3]. Vaste afspraken: […]. Energie/limieten: […].
TAAK: Maak een realistische weekindeling in blokken (geen 14-uursdagen).
FORMAT: Tabel per dag: focusblok | admin | acquisitie | buffer.
CONSTRAINTS: Max. 3 prioriteiten per dag. Plan 1 bufferblok voor onverwacht klantwerk.`
      },
      {
        id: "adm-2",
        title: "Factuurherinnering (kort)",
        when: "Neutrale tekst voor je factuurtool of mail.",
        prompt: `Schrijf een neutrale herinneringstekst van 4 zinnen voor factuur [nr], bedrag €[X], vervaldatum [datum].
Toon: professioneel. Eindig met: “Laat het weten als de factuur niet klopt.”`
      },
      {
        id: "adm-3",
        title: "Notulen → acties",
        when: "Na een meeting: besluiten, acties, open vragen — zonder verzonnen deadlines.",
        prompt: `TAAK: Zet onderstaande notulen om in: (1) besluiten (2) acties met eigenaar + deadline (3) open vragen (4) wat níet is afgesproken.
FORMAT: Vier kopjes + bullets. Markeer aannames met “AANNAME:”.
CONSTRAINTS: Verzin geen deadlines die er niet staan. Plak notulen hieronder:
---
[notulen]`
      }
    ]
  },

  speelboek: [
    { min: "0–5", actie: "Open je map AI-prompts. Noteer 3 frictiepunten van de week (mail, offerte, post, admin)." },
    { min: "5–15", actie: "Draai 1 offerte- of klantmail-prompt op een echte (geanonimiseerde) case. Sla beste versie op." },
    { min: "15–22", actie: "LinkedIn: 1 post-hoek of 3 comments voorbereiden. Plan of plak in concepten." },
    { min: "22–28", actie: "Admin: notulen → acties óf weekplanning vooruit." },
    { min: "28–30", actie: "Schrijf 1 les op: “Prompt X werkte / werkte niet omdat…”" }
  ],

  fouten: [
    { title: "Vertrouwelijke data plakken", text: "Geen BSN, volledige contracten, klantstrategieën, wachtwoorden. Anonimiseer namen en bedragen waar nodig." },
    { title: "Hallucinerende prijzen", text: "Geef zelf bedragen; laat AI geen “marktconforme” fees verzinnen die jij overneemt." },
    { title: "Te generiek", text: "Zonder CONTEXT klinkt alles als corporate blah. Hoe specifieker jouw bullets, hoe bruikbaarder de output." },
    { title: "Blind versturen", text: "AI verzint graag deadlines, wetjes en “standaard 14 dagen”. Check altijd zelf." },
    { title: "Eén mega-chat", text: "Contextverwarring. Nieuwe taak = nieuwe chat of duidelijke reset." },
    { title: "AI als jurist/boekhouder", text: "Voorwaarden en btw zijn jouw verantwoordelijkheid. Zie disclaimer." },
    { title: "Spam op LinkedIn", text: "Copy-paste DM’s zonder context schaden je reputatie sneller dan ze leads opleveren." }
  ],

  cheatsheet: [
    { k: "Prompt-formule", v: "ROL · CONTEXT · TAAK · FORMAT · CONSTRAINTS" },
    { k: "Offerte", v: "Feiten eerst → concept AI → jij scherpt scope/meerwerk → verstuur uit eigen template." },
    { k: "Klantmail", v: "Kickoff / herinnering ×2 / beleefd nee / review-vraag." },
    { k: "LinkedIn", v: "Post uit weekwerk · inhoudelijke comments · DM zonder pitch in #1." },
    { k: "Admin", v: "Weekblokken met buffer · factuurtekst · notulen → besluiten/acties/vragen." },
    { k: "30 min/week", v: "Frictie noteren → 1 zware prompt → LinkedIn → admin → 1 les." },
    { k: "Nooit", v: "Geheimen plakken · prijzen laten verzinnen · blind versturen · spam-DM’s." },
    { k: "Plus waard?", v: "Als AI in je dagelijkse routine zit en je lange stukken verwerkt." }
  ]
};
