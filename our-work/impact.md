---
layout: modern_page
title: Impact
headline: Receipts, not <em>vibes.</em>
description: Thirteen years in, the work has compounded. Here's what we measure, why we measure it that way, and the partners whose missions made it count.
section: Our work
section_url: /our-work
permalink: /our-work/impact
---

<style>
.metric-row { display: grid; grid-template-columns: repeat(12, 1fr); gap: 0; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--bg-paper); margin-bottom: clamp(48px, 6vw, 80px); }
.metric-row .cell { padding: clamp(28px, 3vw, 44px); border-right: 1px solid var(--line); grid-column: span 12; }
@media (min-width: 700px) { .metric-row .cell { grid-column: span 6; } .metric-row .cell:nth-child(2n) { border-right: 0; } }
@media (min-width: 1100px) { .metric-row .cell { grid-column: span 3; border-right: 1px solid var(--line) !important; } .metric-row .cell:last-child { border-right: 0 !important; } }
.metric-row .cell .num { font-family: var(--serif); font-size: clamp(48px, 5vw, 76px); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: var(--ink); }
.metric-row .cell .num .accent { color: var(--ruby); }
.metric-row .cell .label { font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-muted); margin: 14px 0 6px; }
.metric-row .cell .desc { font-size: 14px; color: var(--ink-soft); line-height: 1.5; margin: 0; }

.partner-list { display: grid; grid-template-columns: repeat(12, 1fr); gap: 0; border-top: 1px solid var(--ink); }
.partner-row { grid-column: span 12; display: grid; grid-template-columns: 60px minmax(0, 1.4fr) minmax(0, 1.2fr) minmax(0, 0.8fr); gap: 24px; padding: clamp(20px, 2vw, 28px) 0; border-bottom: 1px solid var(--line); align-items: baseline; transition: background .2s ease, padding .2s ease; }
.partner-row:hover { background: var(--bg-paper); padding-left: 14px; padding-right: 14px; border-radius: 4px; }
.partner-row .ix { font-family: var(--mono); font-size: 13px; color: var(--ink-faint); }
.partner-row .name { font-family: var(--serif); font-size: clamp(22px, 1.8vw, 28px); font-weight: 500; letter-spacing: -0.015em; color: var(--ink); }
.partner-row .focus { font-size: 14px; color: var(--ink-soft); line-height: 1.5; }
.partner-row .since { font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--sage-deep); text-align: right; }
@media (max-width: 700px) {
  .partner-row { grid-template-columns: 40px 1fr; gap: 12px; }
  .partner-row .focus, .partner-row .since { grid-column: 2 / -1; }
  .partner-row .since { text-align: left; }
}
.story-card { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr); gap: 0; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; margin: clamp(40px, 5vw, 64px) 0; }
.story-card .ph { aspect-ratio: 4/5; background: var(--ink); overflow: hidden; }
.story-card .ph img { width: 100%; height: 100%; object-fit: cover; }
.story-card .copy { padding: clamp(28px, 3vw, 48px); display: flex; flex-direction: column; justify-content: center; gap: 14px; background: var(--bg-paper); }
.story-card .copy blockquote { font-family: var(--serif); font-size: clamp(22px, 2vw, 30px); line-height: 1.3; letter-spacing: -0.015em; color: var(--ink); margin: 0; font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 100; }
.story-card .copy cite { display: block; font-style: normal; font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); margin-top: 14px; }
@media (max-width: 800px) { .story-card { grid-template-columns: 1fr; } .story-card .ph { aspect-ratio: 16/10; } }
</style>

<p class="eyebrow" data-reveal>// since 2013</p>

<div class="metric-row" data-reveal>
  <div class="cell">
    <div class="num">25<span class="accent">M+</span></div>
    <div class="label">People downstream</div>
    <p class="desc">End-users relying on software our community builds and maintains.</p>
  </div>
  <div class="cell">
    <div class="num">6,000<span class="accent">+</span></div>
    <div class="label">Nonprofits helped</div>
    <p class="desc">Across foster care, healthcare, financial literacy, animal welfare, and more.</p>
  </div>
  <div class="cell">
    <div class="num"><span class="accent">1,000</span>+</div>
    <div class="label">Contributors</div>
    <p class="desc">Unique humans who've opened a pull request in the rubyforgood GitHub org.</p>
  </div>
  <div class="cell">
    <div class="num">13<span class="accent">+</span></div>
    <div class="label">Years building</div>
    <p class="desc">Since 2013, one long weekend at a time — plus the year-round work in between.</p>
  </div>
</div>

<p class="eyebrow sage" data-reveal>// how we count</p>

<div style="max-width: 720px; margin-bottom: clamp(48px, 6vw, 80px);">
<p style="font-size:18px; line-height:1.65; color: var(--ink-soft); margin: 0 0 18px;" data-reveal>
We count things that matter to the people we serve. "Stars on GitHub" is not on the list. What is: software that runs reliably in production, partners that renewed for another year, volunteers who stuck around long enough to mentor the next cohort.
</p>
</div>

<div class="story-card" data-reveal>
  <div class="ph"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="copy">
    <p class="eyebrow">// partner story</p>
    <blockquote>"What Ruby for Good built for us in one weekend would have taken our team eight months and $400k we don't have. Three years later, it's still running, still being improved, still saving us hours every single day."</blockquote>
    <cite>— Executive Director, Prince George's County CASA</cite>
  </div>
</div>

<p class="eyebrow" data-reveal>// active projects</p>
<h2 style="margin-bottom: 32px;" data-reveal data-reveal-delay="1">The nine projects we're <em class="italic-serif">building right now.</em></h2>

<div class="partner-list">

<div class="partner-row" data-reveal>
  <span class="ix">01</span>
  <span class="name">CASA</span>
  <span class="focus">Court Appointed Special Advocates for children in foster care</span>
  <span class="since">flagship</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">02</span>
  <span class="name">Human Essentials</span>
  <span class="focus">Inventory for diaper, period &amp; essentials banks nationally</span>
  <span class="since">in production</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">03</span>
  <span class="name">SkillRx</span>
  <span class="focus">Offline medical training to Raspberry Pis across 19 countries</span>
  <span class="since">in production</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">04</span>
  <span class="name">A Window Between Worlds</span>
  <span class="focus">Portal for workshop leaders using art with trauma survivors</span>
  <span class="since">in production</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">05</span>
  <span class="name">Stocks in the Future</span>
  <span class="focus">Financial-literacy curriculum for middle-school students</span>
  <span class="since">in production</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">06</span>
  <span class="name">Homeward Tails</span>
  <span class="focus">Adopter and foster matching for grassroots animal rescues</span>
  <span class="since">active</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">07</span>
  <span class="name">EndSideOut</span>
  <span class="focus">Software supporting youth-development programming</span>
  <span class="since">active</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">08</span>
  <span class="name">Flaredown</span>
  <span class="focus">Symptom tracking and patient-driven chronic-illness research</span>
  <span class="since">in production</span>
</div>
<div class="partner-row" data-reveal>
  <span class="ix">09</span>
  <span class="name">Community Foundation</span>
  <span class="focus">Grantmaking and donor management for community foundations</span>
  <span class="since">active</span>
</div>

</div>

<p class="comment" style="margin-top: 40px;" data-reveal>// + over 6,000 nonprofits using software our community has shipped.</p>
