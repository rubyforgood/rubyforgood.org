---
layout: modern_page
title: Events
headline: Ruby for Good <em>2026.</em>
description: Shepherd's Spring Retreat Center · Sharpsburg, Maryland · August 27–30, 2026. Programmers from all over the globe gather for a long weekend to build open-source software for the communities that need it. Registration is open on Tito.
section: Events
section_url: /events
permalink: /events
---

<style>
.event-hero { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(40px, 5vw, 80px); align-items: stretch; margin-bottom: clamp(64px, 8vw, 120px); }
.event-hero .left { display: flex; flex-direction: column; gap: 24px; }
.event-hero .img { aspect-ratio: 4/5; border-radius: 6px; overflow: hidden; }
.event-hero .img img { width:100%; height:100%; object-fit:cover; }
.event-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
.event-stats .es { padding: 22px 16px; border-right: 1px solid var(--line); }
.event-stats .es:last-child { border-right: 0; }
.event-stats .es .n { font-family: var(--serif); font-size: clamp(28px, 2.4vw, 42px); font-weight: 500; letter-spacing: -0.02em; line-height: 1; color: var(--ink); }
.event-stats .es .l { font-family: var(--mono); font-size: 11px; color: var(--ink-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 8px; }

.schedule { border-top: 1px solid var(--ink); margin: clamp(48px, 6vw, 80px) 0; }
.sched-day { display: grid; grid-template-columns: 180px 1fr; gap: clamp(24px, 4vw, 56px); align-items: start; padding: clamp(28px, 3vw, 40px) 0; border-bottom: 1px solid var(--line); }
.sched-day:last-of-type { border-bottom: 1px solid var(--ink); }
.sched-day .day-head { position: sticky; top: 120px; }
.sched-day .day-tag { font-family: var(--mono); font-size: 12px; color: var(--ruby); letter-spacing: 0.1em; text-transform: uppercase; display: block; margin-bottom: 8px; }
.sched-day h3 { font-family: var(--serif); font-size: clamp(28px, 2.6vw, 38px); font-weight: 500; letter-spacing: -0.02em; margin: 0; line-height: 1.05; }
.sched-day h3 em { color: var(--ruby); font-style: italic; }
.sched-day .intro { font-family: var(--sans); font-size: 14px; line-height: 1.55; color: var(--ink-soft); margin: 14px 0 0; max-width: 28ch; }
.sched-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.sched-list li { display: grid; grid-template-columns: 90px 1fr; gap: 18px; align-items: baseline; padding: 6px 0; border-bottom: 1px dotted var(--line); }
.sched-list li:last-child { border-bottom: 0; }
.sched-list .t { font-family: var(--mono); font-size: 13px; color: var(--ruby); letter-spacing: 0.04em; font-weight: 500; }
.sched-list .e { font-size: 15px; line-height: 1.5; color: var(--ink); }
.sched-list .e em { color: var(--ink-soft); font-style: normal; display: block; margin-top: 2px; font-size: 13px; line-height: 1.45; }
@media (max-width: 800px) {
  .sched-day { grid-template-columns: 1fr; gap: 16px; }
  .sched-day .day-head { position: static; }
  .sched-list li { grid-template-columns: 80px 1fr; gap: 12px; }
}

.faq-quick { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-top: clamp(48px, 6vw, 80px); }
.faq-quick .q { padding: 28px 28px 28px 0; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.faq-quick .q:nth-child(2n) { border-right: 0; padding-right: 0; padding-left: 28px; }
.faq-quick .q:nth-last-child(-n+2) { border-bottom: 0; }
.faq-quick .q h4 { font-family: var(--serif); font-size: clamp(20px, 1.6vw, 24px); margin: 0 0 8px; font-weight: 500; letter-spacing: -0.01em; }
.faq-quick .q p { font-size: 15px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 700px) { .faq-quick { grid-template-columns: 1fr; } .faq-quick .q { border-right: 0; padding-left: 0 !important; padding-right: 0 !important; } .faq-quick .q:nth-last-child(2) { border-bottom: 1px solid var(--line); } }
</style>

<div class="event-hero">
  <div class="left" data-reveal>
    <div class="img">
      <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1100&q=80" alt="Group of developers collaborating at a code retreat">
    </div>
    <div class="event-stats">
      <div class="es"><div class="n">4</div><div class="l">days</div></div>
      <div class="es"><div class="n">7</div><div class="l">projects</div></div>
      <div class="es"><div class="n">74</div><div class="l">humans</div></div>
    </div>
  </div>

  <div data-reveal data-reveal-delay="1">
    <p class="eyebrow">// aug 27 – 30 · sharpsburg, md</p>
    <h2 style="font-size: clamp(40px, 5vw, 72px); margin-bottom: 24px;">The 13th annual reunion of <em class="italic-serif">our favorite</em> Rubyists.</h2>
    <p style="font-size: 18px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 20px;">
      For one long weekend each year, Rubyists from all over the world
      pile into a retreat center in the woods to build software for
      nonprofits, eat too many s'mores, lose at Werewolf, and remember why
      we love doing this in the first place.
    </p>
    <p style="font-size: 18px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 24px;">
      Your ticket is <strong>all-inclusive</strong> — a bed, every meal,
      late-night snacks, and the kind of swag you'll actually wear.
      You bring a laptop, comfy shoes, and your favorite board game.
    </p>
    <div class="hero-ctas">
      <a href="https://ti.to/codeforgood/rubyforgood" class="btn btn-primary">Grab a ticket
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="https://maps.apple.com/?address=16869+Taylors+Landing+Rd,+Sharpsburg,+MD+21782" class="btn btn-ghost">Map the venue</a>
    </div>
    <p class="comment" style="margin-top: 24px;">// got questions? sean@rubyforgood.org — a real human, who really replies</p>
  </div>
</div>

<p class="eyebrow sage" data-reveal>// the weekend</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 12px;">So what does a long weekend <em class="italic-serif">actually look like?</em></h2>
<p style="font-size: 18px; color: var(--ink-soft); line-height: 1.6; max-width: 60ch; margin: 0 0 12px;" data-reveal data-reveal-delay="2">
  Glad you asked. Here's the rough shape of the four days — code in the
  morning, meals around big tables, a little bit of hiking, and evenings
  with whatever flavor of joyful chaos you're in the mood for.
</p>
<p class="comment" style="margin-bottom: 20px;" data-reveal>// tentative — last-minute changes go to Slack first and update here second</p>

<div class="schedule">

  <div class="sched-day" data-reveal>
    <div class="day-head">
      <span class="day-tag">Thursday · Aug 27</span>
      <h3>Roll in &amp; <em>find your people.</em></h3>
      <p class="intro">Show up any time after 4pm. The evening is for meeting team leads, picking a project that lights you up, and easing into the weekend with dinner and dumb jokes.</p>
    </div>
    <ul class="sched-list">
      <li><span class="t">4:00 pm</span><span class="e">Visit with team leads <em>Familiarize yourself with each project's nonprofit and mission, ask about the work, get a sense of the technical requirements. Optional — but helpful before committing to a team.</em></span></li>
      <li><span class="t">5:00 pm</span><span class="e">Event kickoff &amp; announcements</span></li>
      <li><span class="t">5:30 pm</span><span class="e">Team pitches, team selection, initial team discussion</span></li>
      <li><span class="t">6:00 pm</span><span class="e">Dinner with your team <em>(and others — tables are open)</em></span></li>
      <li><span class="t">7:00 pm</span><span class="e">Environment setup <em>Clone repos, install dependencies, sort out branching strategy with your team lead.</em></span></li>
      <li><span class="t">8:30 pm</span><span class="e">Board games, karaoke, socializing, other random fun <em>(or earlier, if your team is ready to go for Friday)</em></span></li>
    </ul>
  </div>

  <div class="sched-day" data-reveal>
    <div class="day-head">
      <span class="day-tag">Friday · Aug 28</span>
      <h3>Day one — <em>the good stuff starts.</em></h3>
      <p class="intro">First real day on the project. Pair up, push your first commits, drink unreasonable amounts of coffee, and start to feel like a team by dinner.</p>
    </div>
    <ul class="sched-list">
      <li><span class="t">8:00 am</span><span class="e">Breakfast</span></li>
      <li><span class="t">9:00 am</span><span class="e">Work on projects</span></li>
      <li><span class="t">12:00 pm</span><span class="e">Lunch</span></li>
      <li><span class="t">1:00 pm</span><span class="e">Work on projects</span></li>
      <li><span class="t">5:00 pm</span><span class="e">Dinner</span></li>
      <li><span class="t">6:30 pm</span><span class="e">Photos <em>(entire group, individual teams, alumni circles, and #fridayhug)</em></span></li>
      <li><span class="t">7:00 pm</span><span class="e">Werewolf, board games, karaoke, campfire, s'mores, fun</span></li>
    </ul>
  </div>

  <div class="sched-day" data-reveal>
    <div class="day-head">
      <span class="day-tag">Saturday · Aug 29</span>
      <h3>Day two — <em>flow state.</em></h3>
      <p class="intro">By Saturday morning most teams hit their stride. Long focus blocks, mentor pop-ins, and an evening career chat for anyone hiring, job-searching, or just curious where things are going.</p>
    </div>
    <ul class="sched-list">
      <li><span class="t">8:00 am</span><span class="e">Breakfast</span></li>
      <li><span class="t">9:00 am</span><span class="e">Work on projects</span></li>
      <li><span class="t">12:00 pm</span><span class="e">Lunch</span></li>
      <li><span class="t">1:00 pm</span><span class="e">Work on projects</span></li>
      <li><span class="t">5:00 pm</span><span class="e">Dinner</span></li>
      <li><span class="t">6:30 pm</span><span class="e">Career chat <em>If you're looking, your company is hiring, or you just want to ask or help answer career questions — this is the place.</em></span></li>
      <li><span class="t">7:30 pm</span><span class="e">Werewolf, board games, karaoke, campfire, s'mores, fun</span></li>
    </ul>
  </div>

  <div class="sched-day" data-reveal>
    <div class="day-head">
      <span class="day-tag">Sunday · Aug 30</span>
      <h3>Demos &amp; <em>tearful goodbyes.</em></h3>
      <p class="intro">One last morning push, then demos at 11. If your project isn't fully shipped — show what you've got, we cheer for everyone. Group photo, hugs, road snacks, gone by noon.</p>
    </div>
    <ul class="sched-list">
      <li><span class="t">8:00 am</span><span class="e">Breakfast</span></li>
      <li><span class="t">9:00 am</span><span class="e">Work on projects</span></li>
      <li><span class="t">11:00 am</span><span class="e">Demos <em>(if your project isn't finished, demo what you can!)</em></span></li>
      <li><span class="t">12:00 pm</span><span class="e">Group photo, tearful goodbyes, departure</span></li>
    </ul>
  </div>

</div>

<p class="comment" style="margin-top: 20px;" data-reveal>// we use the Ruby for Good Slack heavily during the event — join early so you don't miss announcements: <a href="https://join.slack.com/t/rubyforgood/shared_invite/zt-34b5p4vk3-NWIw6hKs2ma~wm7mYSe0_A" style="color: var(--ruby); text-decoration: underline; text-underline-offset: 3px;">join the Slack</a></p>

<div style="display:flex; align-items:end; justify-content:space-between; gap:24px; flex-wrap:wrap;" data-reveal>
  <div>
    <p class="eyebrow">// the things you're probably wondering</p>
    <h2 data-reveal-delay="1">The greatest hits, <em class="italic-serif">up front.</em></h2>
  </div>
  <a href="/events/faq" class="btn btn-arrow" style="margin-bottom: 6px;">See the full FAQ <span class="arrow">→</span></a>
</div>

<div class="faq-quick">
  <div class="q" data-reveal>
    <h4>I'm new to Ruby. Should I still come?</h4>
    <p>Genuinely yes. We've onboarded first-time committers every single year since 2013, and the mentorship is half the magic. Bring a laptop, a charger, and a willingness to ask "what does this do?" — we'll handle the rest.</p>
  </div>
  <div class="q" data-reveal data-reveal-delay="1">
    <h4>What's included?</h4>
    <p>The works. A bed, every meal, midnight snacks, and swag you'll actually want to wear. One ticket covers the whole long weekend. Pricing lives on the <a href="https://ti.to/codeforgood/rubyforgood">Tito page</a>.</p>
  </div>
  <div class="q" data-reveal>
    <h4>I don't code. Am I welcome?</h4>
    <p>Designers, PMs, writers, nonprofit-side stakeholders — you're the people who keep the wheels on. Every project needs more than code. See <a href="/our-work/skills-based-volunteering">skills-based volunteering</a> for the long version.</p>
  </div>
  <div class="q" data-reveal data-reveal-delay="1">
    <h4>Refunds &amp; transfers?</h4>
    <p>Full refunds through <strong>June 7, 2026</strong>. After that we can't refund, but we'll happily help you hand your ticket to a friend through <strong>July 20, 2026</strong>. Just <a href="mailto:info@rubyforgood.org">email us</a> — we don't bite.</p>
  </div>
  <div class="q" data-reveal>
    <h4>What's the venue like?</h4>
    <p>Picture 200+ wooded acres in western Maryland, an hour-ish from DC and Baltimore. Cozy cabin-style rooms, big family-style meals, fire pits, hiking trails, and surprisingly decent wifi where it counts. Deer sightings included at no extra charge.</p>
  </div>
  <div class="q" data-reveal data-reveal-delay="1">
    <h4>What's the vibe?</h4>
    <p>Imagine the friendliest engineering team you've ever been on, on a porch, in late August, with s'mores. That's roughly correct. We work hard, we play Werewolf harder.</p>
  </div>
</div>

<div style="text-align:center; margin-top: clamp(32px, 4vw, 56px);" data-reveal>
  <a href="/events/faq" class="btn btn-ghost">Read the full event FAQ
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
</div>

<p class="eyebrow sage" data-reveal style="margin-top: clamp(64px, 8vw, 100px);">// the venue</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 24px;">Welcome to Shepherd's Spring.</h2>

<div style="display:grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: clamp(32px, 4vw, 64px); align-items: start; margin-bottom: clamp(48px, 6vw, 80px);" data-reveal>
  <div>
    <p style="font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      Two hundred wooded acres tucked into the Antietam-Sharpsburg corner
      of western Maryland — about 75 miles from DC, 80 from Baltimore, 65
      from Dulles. Cabin-style rooms, family-style meals, a creek for
      cooling your feet, and the kind of evening quiet you only get when
      a highway isn't anywhere nearby.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft); margin: 0 0 24px;">
      <strong>16869 Taylors Landing Road<br>Sharpsburg, Maryland 21782</strong>
    </p>
    <div class="hero-ctas">
      <a href="https://maps.apple.com/?address=16869+Taylors+Landing+Rd,+Sharpsburg,+MD+21782" class="btn btn-ghost">Open in Maps →</a>
      <a href="https://shepherdsspring.org" class="btn btn-ghost">Venue website →</a>
    </div>
  </div>
  <div style="border: 1px solid var(--line); border-radius: 6px; padding: 24px; background: var(--bg-paper); font-family: var(--mono); font-size: 13px; line-height: 1.8; color: var(--ink-soft);">
    <div style="font-family: var(--sans); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ruby); margin-bottom: 14px;">Travel notes</div>
    <div><span style="color: var(--ink);">DCA / IAD / BWI</span> — 1h–1.5h drive</div>
    <div><span style="color: var(--ink);">Amtrak</span> — Harpers Ferry, ~20 min away</div>
    <div><span style="color: var(--ink);">Carpools</span> — we'll help coordinate from DC</div>
    <div><span style="color: var(--ink);">Accessibility</span> — email sean@rubyforgood.org</div>
  </div>
</div>

<div class="host-block" data-reveal>
  <div>
    <p class="eyebrow sage">// taking it on the road</p>
    <h2 style="font-size: clamp(32px, 3.4vw, 52px); margin-top: 8px;">Want one of these in <em class="italic-serif">your</em> city?</h2>
  </div>
  <div>
    <p style="font-size: 17px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      Once upon a time we ran <strong>several long-weekend code retreats every
      year</strong> — regional gatherings around the country, each with its own
      crew, its own local Ruby community, and its own slate of nonprofits to
      serve. We'd love to do that again.
    </p>
    <p style="font-size: 17px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 24px;">
      If you've got a venue in mind, a meetup that would show up, or a
      nonprofit-tech scene that's ready — we'd love to chat. <strong>We bring
      the playbook. You bring the place.</strong>
    </p>
    <a href="mailto:sean@rubyforgood.org?subject=Hosting%20a%20Ruby%20for%20Good%20code%20retreat" class="btn btn-primary">
      Tell Sean about your city
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</div>

<style>
.host-block { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr); gap: clamp(32px, 5vw, 80px); align-items: start; margin: clamp(64px, 8vw, 100px) 0 0; padding-top: clamp(48px, 6vw, 80px); border-top: 1px solid var(--ink); }
@media (max-width: 800px) { .host-block { grid-template-columns: 1fr; } }
</style>

<div style="text-align:center; padding: clamp(56px, 7vw, 90px) 0 0;" data-reveal>
  <p class="comment" style="margin-bottom: 20px;">// we'll save you a seat by the fire</p>
  <a href="https://ti.to/codeforgood/rubyforgood" class="btn btn-primary">Grab your ticket
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
</div>
