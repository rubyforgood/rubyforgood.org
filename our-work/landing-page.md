---
layout: modern_page
title: Our Work
headline: We ship software. <em>For real people.</em>
description: A working catalog of the open-source projects Ruby for Good builds and maintains for our nonprofit partners. Some are flagships running at hundreds of agencies. Some are early-stage and waiting for the right contributors. All of them are open source.
section: Our work
section_url: /our-work
permalink: /our-work
---

<style>
.work-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: clamp(24px, 3vw, 40px); }
.work-grid .project-card { grid-column: span 12; }
@media (min-width: 800px) { .work-grid .project-card { grid-column: span 6; } }
@media (min-width: 1100px) { .work-grid .project-card { grid-column: span 4; } }
.work-grid .project-card.feature { grid-column: span 12; }
.work-status-bar { display: flex; gap: 32px; flex-wrap: wrap; padding: 28px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin-bottom: clamp(40px, 5vw, 64px); font-family: var(--mono); font-size: 13px; color: var(--ink-soft); letter-spacing: 0.04em; }
.work-status-bar b { color: var(--ruby); font-weight: 600; }
</style>

<div class="work-status-bar" data-reveal>
  <span><b>9</b> active projects</span>
  <span><b>25M+</b> people downstream</span>
  <span><b>6,000+</b> nonprofits helped since 2013</span>
  <span><b>$0</b> billed to nonprofits — ever</span>
</div>

<div class="work-grid">

<a href="https://github.com/rubyforgood/casa" class="project-card feature" data-reveal>
  <div class="thumb">
    <span class="badge">★ Flagship</span>
    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80" alt="">
  </div>
  <div class="body">
    <div>
      <span class="comment">launched 2021 · in use across the US</span>
      <h3 class="title">CASA</h3>
    </div>
    <p class="desc">Volunteer-advocate management for Court Appointed Special Advocates — the trained civilians who speak in family court for children in foster care. Now used by every CASA in Maryland and several more across the country.</p>
    <div class="meta"><span class="stack">Rails · Postgres · Stimulus</span><span>GitHub →</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/human-essentials" class="project-card" data-reveal>
  <div class="thumb"><span class="badge">In production</span><img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">Human Essentials</h3>
    <p class="desc">Inventory and distribution software for diaper, period, and essentials banks across North America — helping over 3.5M children and 800K period-supply recipients every year.</p>
    <div class="meta"><span class="stack">Rails · React · Sidekiq</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/skillrx" class="project-card" data-reveal data-reveal-delay="1">
  <div class="thumb"><span class="badge">In production</span><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">SkillRx</h3>
    <p class="desc">Lets providers upload ongoing medical training that's delivered to Raspberry Pis and mini computers in low-resource healthcare settings across 19 countries.</p>
    <div class="meta"><span class="stack">Rails · Offline-first · Pi</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/awbw" class="project-card" data-reveal data-reveal-delay="2">
  <div class="thumb"><span class="badge">In production</span><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">A Window Between Worlds</h3>
    <p class="desc">A portal connecting workshop leaders who use art to support survivors of trauma — community news, shared resources, and a place to find each other.</p>
    <div class="meta"><span class="stack">Rails · Postgres</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/stocks-in-the-future" class="project-card" data-reveal>
  <div class="thumb"><span class="badge">In production</span><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">Stocks in the Future</h3>
    <p class="desc">Financial-literacy curriculum software that helps middle-school students learn to invest using a virtual stock market — and start building real economic confidence.</p>
    <div class="meta"><span class="stack">Rails · Stimulus</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/homeward-tails" class="project-card" data-reveal data-reveal-delay="1">
  <div class="thumb"><span class="badge">Active</span><img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">Homeward Tails</h3>
    <p class="desc">Connects adopters and fosters with grassroots animal rescues — helping pets find the right homes through partnerships with small, mission-driven shelters.</p>
    <div class="meta"><span class="stack">Rails · Hotwire</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/endsideout" class="project-card" data-reveal data-reveal-delay="2">
  <div class="thumb"><span class="badge">Active</span><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">EndSideOut</h3>
    <p class="desc">Software supporting EndSideOut's youth-development programming — keeping organizers, athletes, and the families they serve on the same page.</p>
    <div class="meta"><span class="stack">Rails · Stimulus</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/flaredown" class="project-card" data-reveal>
  <div class="thumb"><span class="badge">In production</span><img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">Flaredown</h3>
    <p class="desc">Symptom and treatment tracking for people living with chronic illness — turning lived experience into patient-driven research and better days.</p>
    <div class="meta"><span class="stack">Rails · React</span><span>→</span></div>
  </div>
</a>

<a href="https://github.com/rubyforgood/community-foundation" class="project-card" data-reveal data-reveal-delay="1">
  <div class="thumb"><span class="badge">Active</span><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80" alt=""></div>
  <div class="body">
    <h3 class="title">Community Foundation</h3>
    <p class="desc">Grantmaking and donor-management software purpose-built for the community foundations that quietly move local philanthropy in towns across the country.</p>
    <div class="meta"><span class="stack">Rails · Stimulus</span><span>→</span></div>
  </div>
</a>

</div>

<div style="text-align:center; margin-top: clamp(48px, 6vw, 80px);" data-reveal>
  <div>
    <a href="https://github.com/rubyforgood" class="btn btn-primary">Browse our GitHub
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</div>
