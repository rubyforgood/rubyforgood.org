---
layout: modern_page
title: About Us
headline: A community that <em>writes code</em> like it matters.
description: Because, more often than not, it does. We're an all-volunteer 501(c)(3) building open-source software for nonprofits since 2013 — and the people behind it are the whole point.
section: About
section_url: /about-us
permalink: /about-us
---

<style>
.about-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr); gap: clamp(40px, 6vw, 96px); margin-bottom: clamp(64px, 8vw, 120px); }
.about-grid h2 { font-size: clamp(40px, 4.2vw, 68px); }
.about-grid p { font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 20px; }
@media (max-width: 800px) { .about-grid { grid-template-columns: 1fr; } }

.values { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin: clamp(48px, 6vw, 80px) 0; }
.value { padding: clamp(32px, 3vw, 48px); border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: flex; flex-direction: column; gap: 12px; min-height: 280px; }
.value:nth-child(2n) { border-right: 0; }
.value:nth-last-child(-n+2) { border-bottom: 0; }
.value .vnum { font-family: var(--mono); font-size: 13px; color: var(--ruby); letter-spacing: 0.08em; }
.value h3 { font-size: clamp(24px, 2vw, 32px); }
.value p { font-size: 15px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 700px) { .values { grid-template-columns: 1fr; } .value { border-right: 0; } .value:nth-last-child(-n+2) { border-bottom: 1px solid var(--line); } .value:last-child { border-bottom: 0; } }

.history-rail { position: relative; padding-left: 32px; margin-top: 40px; }
.history-rail::before { content: ""; position: absolute; left: 8px; top: 8px; bottom: 8px; width: 1px; background: var(--line); }
.history-step { position: relative; padding: 0 0 32px 0; }
.history-step::before { content: ""; position: absolute; left: -32px; top: 8px; width: 17px; height: 17px; border-radius: 50%; background: var(--bg); border: 2px solid var(--ruby); }
.history-step .yr { font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: var(--ruby); text-transform: uppercase; }
.history-step .title { font-family: var(--serif); font-size: clamp(22px, 1.8vw, 28px); font-weight: 500; letter-spacing: -0.015em; margin: 6px 0 8px; }
.history-step p { font-size: 15px; line-height: 1.6; color: var(--ink-soft); margin: 0; }
</style>

<div class="about-grid">
  <div data-reveal>
    <p class="eyebrow">// mission</p>
    <h2>The smallest budgets carry the heaviest software.</h2>
  </div>
  <div data-reveal data-reveal-delay="1">
    <p>
      A foster-care advocate uses three different spreadsheets and a custody-form PDF
      from 2009 to track a child's case. A diaper bank coordinator pulls inventory
      numbers from a phone-photo of a clipboard. A mutual-aid group runs request
      intake through a chain of group texts.
    </p>
    <p>
      The people doing this work are not less talented. They are not less
      resourceful. They are tired, and they are operating on margins that
      would terrify any commercial engineering org.
    </p>
    <p>
      Ruby for Good exists because <strong>the gap between the software
      nonprofits deserve and the software they have is closeable</strong> — if
      enough people who can close it decide to.
    </p>
  </div>
</div>

<p class="eyebrow sage" data-reveal>// what we stand for</p>
<h2 style="margin-bottom: 40px;" data-reveal data-reveal-delay="1">Core values, in plain English.</h2>

<div class="values" data-reveal>
  <div class="value">
    <span class="vnum">/01</span>
    <h3>Production-grade. Always.</h3>
    <p>If it's not something a real person could rely on Monday morning, we haven't actually shipped it. A lot of weekend events make demos. We try to make tools.</p>
  </div>
  <div class="value">
    <span class="vnum">/02</span>
    <h3>Open by default.</h3>
    <p>Every line of code we write is MIT- or Apache-licensed. Nonprofits never pay us. Anyone can fork us. The community owns the future of every project.</p>
  </div>
  <div class="value">
    <span class="vnum">/03</span>
    <h3>Mentor in public.</h3>
    <p>First PR? Welcome. We pair-program, review thoughtfully, and treat "I don't know how this works yet" as a feature, not a bug, of being part of a community.</p>
  </div>
  <div class="value">
    <span class="vnum">/04</span>
    <h3>Maintainers matter more than launches.</h3>
    <p>The exciting part is the launch. The important part is the next four years. We resource long-term ownership over headline-grabbing v1.0s.</p>
  </div>
</div>

<div class="about-grid">
  <div data-reveal>
    <p class="eyebrow">// the story</p>
    <h2>From a weekend at George Mason to a global community.</h2>
  </div>
  <div data-reveal data-reveal-delay="1">
    <p>
      In 2013, Ruby for Good started as an event held at George Mason University — a
      handful of Rubyists, a few nonprofits, and an attempt to build them software for
      free over a long weekend. It mostly worked. It was also more fun than anyone had
      any right to expect.
    </p>
    <p>
      Thirteen-plus years later, the annual code retreat is still the heart
      of the community — but it's no longer the whole community. Ruby for
      Good now runs as a year-round 501(c)(3) supporting <strong>nine
      active projects</strong>, software relied on by <strong>more than
      6,000 nonprofits</strong>, and a network of <strong>1,000+
      contributors</strong> who keep things running between long weekends.
    </p>

    <div class="history-rail">
      <div class="history-step">
        <span class="yr">2013</span>
        <div class="title">The first weekend at George Mason University</div>
        <p>One campus, a few whiteboards, a handful of nonprofits. The event that became Ruby for Good.</p>
      </div>
      <div class="history-step">
        <span class="yr">2015</span>
        <div class="title">Human Essentials goes into production</div>
        <p>The inventory and distribution platform now used by hundreds of essentials banks across North America, serving thousands of their nonprofit partners — helping over 3.5 million children and 800,000 period-supply recipients every year.</p>
      </div>
      <div class="history-step">
        <span class="yr">2017</span>
        <div class="title">Incorporated as a 501(c)(3) nonprofit</div>
        <p>Year-round operations, sponsored partnerships, and a board that takes the long view of project ownership.</p>
      </div>
      <div class="history-step">
        <span class="yr">2019</span>
        <div class="title">Terrastories ships to its first Indigenous community partner</div>
        <p>Offline-first geostorytelling — a project we'll still be maintaining decades from now.</p>
      </div>
      <div class="history-step">
        <span class="yr">2021</span>
        <div class="title">CASA launches</div>
        <p>Volunteer-advocate management for Court Appointed Special Advocates — now used by every CASA in Maryland and several more across the country.</p>
      </div>
      <div class="history-step">
        <span class="yr">2026</span>
        <div class="title">Ruby for Good 2026 — Shepherd's Spring, Maryland</div>
        <p>The 13th annual gathering. Aug 27–30 at a 200-acre retreat center. Seven real nonprofit projects, 74 humans, one very long weekend.</p>
      </div>
    </div>
  </div>
</div>

