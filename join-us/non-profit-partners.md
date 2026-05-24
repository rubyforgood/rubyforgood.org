---
layout: modern_page
title: Non-Profit Partners
headline: For the orgs who <em>do the actual work.</em>
description: Ruby for Good builds open-source software for mission-driven nonprofits — pro bono, in partnership, and with a commitment to maintain what we ship. If your team is drowning in spreadsheets, PDFs from 2009, and group-text intake — we should talk.
section: Get involved
section_url: /join-us
permalink: /join-us/non-profit-partners
---

<style>
.np-intro { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(40px, 6vw, 80px); align-items: start; margin-bottom: clamp(64px, 8vw, 100px); }
.np-intro p { font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px; }
@media (max-width: 800px) { .np-intro { grid-template-columns: 1fr; } }

.np-video { position: relative; aspect-ratio: 16/9; background: var(--ink); border-radius: 6px; overflow: hidden; }
.np-video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }

.testimonial { border-left: 3px solid var(--ruby); padding: 4px 0 4px 28px; margin: 0; font-family: var(--serif); font-style: italic; font-size: clamp(22px, 2vw, 30px); line-height: 1.3; color: var(--ink); font-variation-settings: "opsz" 144, "SOFT" 100; }
.testimonial-cite { font-family: var(--mono); font-style: normal; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); margin-top: 16px; display: block; padding-left: 28px; }

.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin: clamp(40px, 5vw, 64px) 0 clamp(64px, 8vw, 100px); }
.step { padding: clamp(28px, 3vw, 40px); border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 12px; min-height: 240px; }
.step:last-child { border-right: 0; }
.step .si { font-family: var(--mono); font-size: 13px; color: var(--ruby); letter-spacing: 0.08em; }
.step h3 { font-size: clamp(20px, 1.7vw, 24px); font-weight: 500; letter-spacing: -0.01em; }
.step p { font-size: 14px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 900px) { .steps { grid-template-columns: repeat(2, 1fr); } .step:nth-child(2) { border-right: 0; } .step:nth-child(1), .step:nth-child(2) { border-bottom: 1px solid var(--line); } }
@media (max-width: 540px) { .steps { grid-template-columns: 1fr; } .step { border-right: 0; border-bottom: 1px solid var(--line); } .step:last-child { border-bottom: 0; } }

.fit-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(32px, 5vw, 80px); align-items: start; margin-bottom: clamp(64px, 8vw, 100px); }
.fit-grid h2 { font-size: clamp(36px, 4vw, 60px); }
.fit-grid h2 em { color: var(--ruby); font-style: italic; }
.fit-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
.fit-list li { display: flex; gap: 14px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: var(--ink); }
.fit-list li::before { content: "→"; font-family: var(--mono); color: var(--ruby); font-weight: 600; flex-shrink: 0; margin-top: 2px; }
.fit-list li strong { color: var(--ink); font-weight: 600; }
.fit-list li .note { color: var(--ink-soft); font-weight: 400; }
@media (max-width: 800px) { .fit-grid { grid-template-columns: 1fr; } }

.cost-card { padding: clamp(32px, 3vw, 48px); border: 1px solid var(--line); border-radius: 6px; background: var(--bg-paper); display: grid; grid-template-columns: auto 1fr; gap: clamp(24px, 4vw, 48px); align-items: center; margin-bottom: clamp(48px, 6vw, 80px); }
.cost-card .price { font-family: var(--serif); font-size: clamp(72px, 8vw, 124px); font-weight: 500; letter-spacing: -0.04em; line-height: 1; color: var(--ruby); }
.cost-card h3 { font-size: clamp(24px, 2vw, 32px); margin: 0 0 8px; }
.cost-card p { font-size: 16px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
@media (max-width: 600px) { .cost-card { grid-template-columns: 1fr; text-align: left; } }
</style>

<div class="np-intro">
  <div data-reveal>
    <p class="eyebrow">// partner with us</p>
    <h2 style="font-size: clamp(36px, 4vw, 60px); margin-bottom: 16px;">Pro bono, on purpose.</h2>
    <p>
      Inefficient and expensive software is an impediment to your mission.
      Our community brings together engineers, designers, and organizers
      to build the software solutions your team needs — and to keep
      maintaining them long after the launch.
    </p>
    <p>
      We work with a small number of new partners each year. The fit matters
      more than the size of the org.
    </p>
    <p class="comment">// always free for the nonprofit. always open source.</p>
  </div>
  <div data-reveal data-reveal-delay="1">
    <p class="eyebrow sage" style="margin-bottom: 12px;">// hear from a partner</p>
    <h3 style="font-family: var(--serif); font-size: clamp(22px, 2vw, 28px); font-weight: 500; letter-spacing: -0.015em; margin: 0 0 16px;">PDX Diaper Bank — a partner since 2015.</h3>
    <div class="np-video">
      <iframe src="https://www.youtube.com/embed/kON0NSr6qk8" title="PDX Diaper Bank — partner testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<p class="eyebrow" data-reveal>// how it works</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 12px;">From first conversation to running software.</h2>

<div class="steps">
  <div class="step" data-reveal>
    <span class="si">/01</span>
    <h3>You tell us about your work</h3>
    <p>A short call. What's your mission? Where are the manual processes biting? What would software actually solve — and what wouldn't it?</p>
  </div>
  <div class="step" data-reveal data-reveal-delay="1">
    <span class="si">/02</span>
    <h3>We scope together</h3>
    <p>If the fit is right, we co-design a slice of work small enough to ship at a code retreat — and big enough to make a real difference.</p>
  </div>
  <div class="step" data-reveal data-reveal-delay="2">
    <span class="si">/03</span>
    <h3>We build with you</h3>
    <p>A team of volunteers — devs, designers, PMs — pairs up with you over a long weekend (and ongoing). You're not a spec sheet. You're part of the team.</p>
  </div>
  <div class="step" data-reveal data-reveal-delay="3">
    <span class="si">/04</span>
    <h3>We keep it running</h3>
    <p>Production-grade software needs ongoing care. Our community stays with the project — reviews, releases, security, real humans you can email.</p>
  </div>
</div>

<div class="fit-grid">
  <div data-reveal>
    <p class="eyebrow">// is this you?</p>
    <h2>Strong fits typically <em>look like this.</em></h2>
  </div>
  <ul class="fit-list" data-reveal data-reveal-delay="1">
    <li><strong>A real, on-the-ground operational problem</strong> <span class="note">— not a vague "we should have an app"</span></li>
    <li><strong>At least one staff member who can answer questions</strong> <span class="note">— during the build and after</span></li>
    <li><strong>A genuine commitment to using what we ship</strong> <span class="note">— and to evolving it with us over time</span></li>
    <li><strong>Mission alignment with the communities we serve</strong> <span class="note">— and a willingness to be open about your work</span></li>
    <li><strong>Comfortable with open source</strong> <span class="note">— everything we build is MIT- or Apache-licensed and lives on GitHub</span></li>
  </ul>
</div>

<p class="eyebrow sage" data-reveal>// what it costs</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 32px;">For your nonprofit?</h2>

<div class="cost-card" data-reveal>
  <div class="price">$0</div>
  <div>
    <h3>Always free. Always open source.</h3>
    <p>
      We don't bill nonprofits. Ever. The work is funded by sponsors, donors,
      and the time of our community of volunteers. The only thing we ask of
      partners is that you show up engaged — your team's time and attention
      are what make the software actually work.
    </p>
  </div>
</div>

<blockquote class="testimonial" data-reveal>
  "What Ruby for Good built for us would have taken our team months and
  hundreds of thousands of dollars we don't have. Years later, it's still
  running, still being improved, still saving us hours every single day."
</blockquote>
<cite class="testimonial-cite" data-reveal>— Rachel Alston, Portland Diaper Bank</cite>

<div style="text-align:center; padding: clamp(64px, 8vw, 100px) 0 0;" data-reveal>
  <p class="comment" style="margin-bottom: 20px;">// have a project in mind?</p>
  <a href="https://airtable.com/shrC6VjWgka26a6eh" target="_blank" rel="noopener" class="btn btn-primary">
    Submit your project
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
</div>
