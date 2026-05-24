---
layout: modern_page
title: Get Involved
headline: There's a <em>good</em> first issue with your name on it.
description: Whether you write production Ruby every day, design interfaces, run projects, or have just never opened a pull request before — Ruby for Good is built by people who showed up. Here's how to be one of them.
section: Join us
section_url: /join-us
permalink: /join-us
---

<style>
.path-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin: clamp(40px, 5vw, 64px) 0 clamp(64px, 8vw, 100px); }
.path { padding: clamp(32px, 3vw, 48px) clamp(28px, 2.5vw, 40px); border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 16px; min-height: 380px; position: relative; }
.path:last-child { border-right: 0; }
.path .badge { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: var(--ruby); text-transform: uppercase; }
.path h3 { font-size: clamp(26px, 2.2vw, 34px); }
.path p { font-size: 15px; line-height: 1.6; color: var(--ink-soft); margin: 0; }
.path .ck { margin-top: auto; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--mono); font-size: 13px; color: var(--ink-soft); line-height: 1.7; }
.path .ck b { color: var(--sage-deep); font-weight: 500; }
@media (max-width: 900px) { .path-grid { grid-template-columns: 1fr; } .path { border-right: 0; border-bottom: 1px solid var(--line); } .path:last-child { border-bottom: 0; } }

.partner-cta { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 0; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--bg-paper); margin-bottom: clamp(64px, 8vw, 100px); }
.partner-cta .img { aspect-ratio: 4/5; overflow: hidden; background: var(--ink); }
.partner-cta .img img { width: 100%; height: 100%; object-fit: cover; }
.partner-cta .copy { padding: clamp(32px, 3vw, 56px); display: flex; flex-direction: column; justify-content: center; gap: 16px; }
.partner-cta .copy h2 { font-size: clamp(32px, 3vw, 48px); }
.partner-cta .copy h2 em { color: var(--ruby); font-style: italic; }
.partner-cta .copy p { font-size: 17px; line-height: 1.6; color: var(--ink-soft); margin: 0; }
.partner-cta .copy ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.partner-cta .copy ul li { display:flex; gap:12px; align-items:flex-start; font-size:15px; color: var(--ink); line-height:1.5; }
.partner-cta .copy ul li::before { content:"→"; color: var(--ruby); font-family: var(--mono); font-weight:600; flex-shrink:0; margin-top:2px; }
@media (max-width: 800px) { .partner-cta { grid-template-columns: 1fr; } .partner-cta .img { aspect-ratio: 16/10; } }

.support-stack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.support-card { padding: 28px; border: 1px solid var(--line); border-radius: 6px; background: var(--bg-paper); display: flex; flex-direction: column; gap: 10px; }
.support-card h4 { font-family: var(--serif); font-size: 24px; margin: 0; letter-spacing: -0.015em; font-weight: 500; }
.support-card .amt { font-family: var(--mono); font-size: 13px; color: var(--ruby); letter-spacing: 0.06em; text-transform: uppercase; }
.support-card p { font-size: 14px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 800px) { .support-stack { grid-template-columns: 1fr; } }
</style>

<p class="eyebrow" data-reveal>// three ways in</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 20px;">Pick the door that fits.</h2>
<p class="lead" data-reveal data-reveal-delay="2" style="margin-bottom: 8px;">You don't need permission. You don't need to know anyone. You just need to start.</p>

<div class="path-grid">
  <div class="path" data-reveal>
    <span class="badge">/01 · contribute</span>
    <h3>Write code with us.</h3>
    <p>
      Find a project you care about, look at the
      <span class="mono">good first issue</span> labels, open a PR. We
      have mentors actively watching every flagship repo.
    </p>
    <div class="ck">
      <b>Best for:</b><br>
      ↳ developers at any level<br>
      ↳ first-time open-source committers<br>
      ↳ teams looking for a give-back project
    </div>
    <a href="https://github.com/rubyforgood" class="btn btn-ghost" style="align-self:flex-start;">Browse GitHub →</a>
  </div>
  <div class="path" data-reveal data-reveal-delay="1">
    <span class="badge">/02 · attend</span>
    <h3>Come to the code retreat.</h3>
    <p>
      Four days at Shepherd's Spring Retreat Center in Maryland, Aug
      27–30. Real teams, real software, real progress on real nonprofits.
      All-inclusive registration covers lodging, meals, snacks, and swag.
    </p>
    <div class="ck">
      <b>Best for:</b><br>
      ↳ people who learn by doing<br>
      ↳ folks who want a community<br>
      ↳ designers, PMs, and non-coders too
    </div>
    <a href="https://ti.to/codeforgood/rubyforgood" class="btn btn-ghost" style="align-self:flex-start;">Register on Tito →</a>
  </div>
  <div class="path" data-reveal data-reveal-delay="2">
    <span class="badge">/03 · support</span>
    <h3>Fund the work.</h3>
    <p>
      Ruby for Good is a 501(c)(3) nonprofit. Sponsorship covers venues,
      scholarships, infrastructure, and the long-tail maintenance of
      every project we ship.
    </p>
    <div class="ck">
      <b>Best for:</b><br>
      ↳ companies who hire from this community<br>
      ↳ individuals who can't make the code retreat<br>
      ↳ anyone who's been moved by a project
    </div>
    <a href="/donate" class="btn btn-ghost" style="align-self:flex-start;">Donate →</a>
  </div>
</div>

<div class="partner-cta">
  <div class="img"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80" alt="People in a meeting around a laptop"></div>
  <div class="copy" data-reveal>
    <p class="eyebrow sage">// for nonprofits</p>
    <h2>Need software? <em>Tell us about it.</em></h2>
    <p>
      We work with a small number of new nonprofit partners each year. Strong
      fits typically have:
    </p>
    <ul>
      <li>A clear, on-the-ground operational problem software could solve</li>
      <li>At least one staff member who can answer questions during the build</li>
      <li>A commitment to using whatever we build, beyond the long weekend</li>
      <li>Mission alignment with the communities and causes we serve</li>
    </ul>
    <div style="margin-top: 24px;">
      <a href="/join-us/non-profit-partners" class="btn btn-primary">Become a partner
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  </div>
</div>

<p class="eyebrow" data-reveal>// support tiers</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 32px;">Sponsorship that actually <em class="italic-serif">pays the bills.</em></h2>

<div class="support-stack">
  <div class="support-card" data-reveal>
    <span class="amt">$50 / month</span>
    <h4>Community supporter</h4>
    <p>Covers hosting for one of our smaller projects, all year. Recognized on the site.</p>
  </div>
  <div class="support-card" data-reveal data-reveal-delay="1">
    <span class="amt">$2,500 / year</span>
    <h4>Project sponsor</h4>
    <p>Underwrites a single project's full year of infrastructure plus one early-career stipend. Logo on the project page.</p>
  </div>
  <div class="support-card" data-reveal data-reveal-delay="2">
    <span class="amt">$10,000 +</span>
    <h4>Event sponsor</h4>
    <p>Powers scholarships, meals, and venue for the annual code retreat. Top-level recognition. Recruiting partnership available.</p>
  </div>
</div>

<div style="text-align:center; padding: clamp(64px, 8vw, 100px) 0 0;" data-reveal>
  <p class="comment" style="margin-bottom: 20px;">// or just say hi</p>
  <a href="mailto:info@rubyforgood.org" class="btn btn-ghost">Email info@rubyforgood.org</a>
</div>
