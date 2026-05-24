---
layout: modern_page
title: Event FAQ
headline: Everything you might ask <em>before clicking "register."</em>
description: A long weekend at a retreat center is a different kind of event. Here's what to expect, how to prepare, who it's for, and what to do when your flight changes. If your question isn't here, email info@rubyforgood.org — a real human will write back.
section: Events
section_url: /events
permalink: /events/faq
---

<style>
.faq-meta { display: flex; flex-wrap: wrap; gap: 14px 28px; padding: 24px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin-bottom: clamp(48px, 6vw, 80px); font-family: var(--mono); font-size: 13px; color: var(--ink-soft); letter-spacing: 0.04em; }
.faq-meta b { color: var(--ruby); font-weight: 600; }
.faq-meta a { color: var(--ink); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(26,20,19,0.25); }
.faq-meta a:hover { color: var(--ruby); text-decoration-color: var(--ruby); }

.faq-group { margin: 0 0 clamp(56px, 7vw, 84px); }
.faq-group .group-head { display: grid; grid-template-columns: 60px 1fr; gap: 24px; align-items: baseline; padding-bottom: 18px; margin-bottom: 0; border-bottom: 1px solid var(--ink); }
.faq-group .group-head .ix { font-family: var(--mono); font-size: 13px; color: var(--ruby); letter-spacing: 0.1em; }
.faq-group .group-head h2 { font-size: clamp(28px, 2.6vw, 40px); font-weight: 500; letter-spacing: -0.02em; }
.faq-group .group-head h2 em { color: var(--ruby); font-style: italic; }

.faq-item { position: relative; padding: 0; border-bottom: 1px solid var(--line); }
.faq-item summary { font-family: var(--serif); font-size: clamp(20px, 1.7vw, 26px); font-weight: 500; letter-spacing: -0.015em; padding: 24px 56px 24px 60px; cursor: pointer; list-style: none; color: var(--ink); transition: color .2s; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: "+"; position: absolute; right: 8px; top: 22px; font-family: var(--mono); font-size: 28px; font-weight: 300; color: var(--ruby); transition: transform .35s cubic-bezier(.2,.7,.2,1); line-height: 1; }
.faq-item[open] summary::after { transform: rotate(45deg); }
.faq-item summary:hover { color: var(--ruby); }
.faq-item .a { padding: 0 56px 28px 60px; font-size: 16px; line-height: 1.65; color: var(--ink-soft); }
.faq-item .a p { margin: 0 0 14px; font-size: 16px; line-height: 1.65; }
.faq-item .a p:last-child { margin-bottom: 0; }
.faq-item .a a { color: var(--ruby); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(200,16,46,0.35); }
.faq-item .a a:hover { text-decoration-color: var(--ruby); }
.faq-item .a ul { margin: 0 0 14px; padding: 0; list-style: none; display: grid; gap: 8px; }
.faq-item .a ul li { display: flex; gap: 12px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: var(--ink); }
.faq-item .a ul li::before { content: "→"; font-family: var(--mono); color: var(--ruby); font-weight: 600; flex-shrink: 0; }
.faq-item .a strong { color: var(--ink); font-weight: 600; }
.faq-item .qix { position: absolute; left: 0; top: 30px; font-family: var(--mono); font-size: 12px; color: var(--ink-faint); letter-spacing: 0.08em; width: 50px; pointer-events: none; }
@media (max-width: 600px) {
  .faq-group .group-head { grid-template-columns: 1fr; gap: 4px; }
  .faq-item .qix { display: none; }
  .faq-item summary, .faq-item .a { padding-left: 0; padding-right: 36px; }
  .faq-item summary::after { right: 0; }
}

.faq-cta { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); gap: clamp(24px, 4vw, 48px); align-items: center; margin-top: clamp(64px, 8vw, 100px); padding: clamp(32px, 4vw, 56px); border: 1px solid var(--line); border-radius: 6px; background: var(--bg-paper); }
.faq-cta p { font-size: 16px; line-height: 1.55; color: var(--ink-soft); margin: 0; }
.faq-cta h3 { font-size: clamp(24px, 2vw, 30px); margin: 0 0 12px; }
@media (max-width: 700px) { .faq-cta { grid-template-columns: 1fr; } }
</style>

<div class="faq-meta" data-reveal>
  <span><b>Event:</b> Aug 27–30, 2026 · arrive after 4pm Thu, wraps at 12pm Sun</span>
  <span><b>Venue:</b> Shepherd's Spring, Sharpsburg, MD</span>
  <span><b>Register:</b> <a href="https://ti.to/codeforgood/rubyforgood">ti.to/codeforgood/rubyforgood</a></span>
  <span><b>Email:</b> <a href="mailto:info@rubyforgood.org">info@rubyforgood.org</a></span>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/01</span>
    <h2>The basics — <em>what is this?</em></h2>
  </div>

  <details class="faq-item">
    <span class="qix">.01</span>
    <summary>What is Ruby for Good, in one paragraph?</summary>
    <div class="a">
      <p>Ruby for Good is an annual <strong>code retreat</strong> — a long weekend where engineers, designers, product managers, and other gooders from all over the globe gather to collaboratively build open-source software in service of the nonprofits doing the world's most important work. Everyone stays on-site. Coding and socializing happen in the same communal spaces. It's not a conference, and it's emphatically not a hackathon.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.02</span>
    <summary>Is this a hackathon?</summary>
    <div class="a">
      <p>No — we call it a <strong>code retreat</strong>, and the difference matters. Hackathons often produce code that never runs after the event. Our projects ship to production and are <em>actively used</em> by nonprofits. You'll have a client and a stakeholder who are excited to use your work and help direct what we build. That changes everything.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.03</span>
    <summary>How does a long weekend actually work?</summary>
    <div class="a">
      <p>Attendees self-select into projects that are meaningful to them. Each project has team leads who've prepared the work in advance — you'll be productive from the first sit-down.</p>
      <p>Most projects need a mix of skills: developers, designers, product managers, writers. While most attendees use Ruby, we welcome programmers of other languages — especially if you're interested in learning some Ruby along the way.</p>
      <p>See the <a href="/events">tentative schedule</a> for an outline of the four days.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.04</span>
    <summary>Why hold these events at all?</summary>
    <div class="a">
      <p>Several of our projects benefit from a long weekend of focused work in a single physical space — momentum you can't replicate over Slack. It also gives us the chance to share the Ruby for Good experience with more people, especially folks new to open source.</p>
    </div>
  </details>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/02</span>
    <h2>Who can come — <em>can I?</em></h2>
  </div>

  <details class="faq-item">
    <span class="qix">.05</span>
    <summary>What skill level do I need?</summary>
    <div class="a">
      <p>All experience levels are welcome — really. We have folks with next to no programming experience and folks with decades of it. The same range applies to pair programming, teaching, and product building. The event is as much about learning as it is about building. Groups are very collaborative; you'll work closely with others and push a lot of code.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.06</span>
    <summary>Do I have to be a programmer?</summary>
    <div class="a">
      <p>No. We need developers, designers, product and project managers, and anyone interested in making a difference. If you think you can help, we'll welcome you with open arms.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.07</span>
    <summary>I'm early in my career. Is this for me?</summary>
    <div class="a">
      <p>Especially yes. Breaking into this industry is hard right now, and Ruby for Good is one of the few places you can spend a long weekend on a real team, shipping real software, with real people in the industry who can vouch for your work afterward. Email us — we may be able to support your registration.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.08</span>
    <summary>How can I help if I can't attend this year?</summary>
    <div class="a">
      <ul>
        <li><strong>Suggest a project.</strong> Got a nonprofit-tech idea? <a href="https://airtable.com/shrC6VjWgka26a6eh">Send it through our Airtable form.</a></li>
        <li><strong>Ask your employer to sponsor.</strong> A long weekend on-site is expensive to run. Corporate sponsorship is what keeps tickets accessible.</li>
        <li><strong>Donate.</strong> <a href="/donate">Any amount helps</a> us bring more people into the community.</li>
        <li><strong>Spread the word.</strong> Tell your <code>#rubyfriends</code>. We need developers <em>and</em> designers.</li>
      </ul>
    </div>
  </details>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/03</span>
    <h2>Projects — <em>what will I work on?</em></h2>
  </div>

  <details class="faq-item">
    <span class="qix">.09</span>
    <summary>What nonprofits will we be helping this year?</summary>
    <div class="a">
      <p>We announce project details and available teams on the first night of the event. See <a href="/our-work">Our Work</a> for the active projects in our community. Recent slates have included:</p>
      <ul>
        <li><a href="https://github.com/rubyforgood/human-essentials">Human Essentials</a> — supporting the National Diaper Bank Network, Alliance for Period Supplies, and their partner organizations</li>
        <li><a href="https://github.com/rubyforgood/casa">CASA</a> — Court Appointed Special Advocates for children in foster care</li>
        <li><a href="https://github.com/rubyforgood/stocks-in-the-future">Stocks in the Future</a> — financial literacy for middle-school students in Baltimore</li>
        <li><a href="https://github.com/rubyforgood/flaredown">Flaredown</a> — chronic-illness symptom tracking and patient-driven research</li>
        <li><a href="https://github.com/rubyforgood/skillrx">SkillRx</a> — offline medical training delivered to Raspberry Pis in low-resource healthcare settings</li>
      </ul>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.10</span>
    <summary>How do I suggest a project?</summary>
    <div class="a">
      <p>If you have a nonprofit you'd love to see Ruby for Good support, <a href="https://airtable.com/shrC6VjWgka26a6eh">submit it via this Airtable form</a>. We review submissions on a rolling basis.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.11</span>
    <summary>Can I lead a team?</summary>
    <div class="a">
      <p>Yes — and we'd love that. During registration we'll ask if you'd like to lead a team. Say yes. We'll be in touch in advance with potential projects (new and existing), brief you on expectations, and connect you with your nonprofit so you can hit the ground running.</p>
      <p>Team leads don't work alone — most projects have multiple co-leads, plus floating mentors across the event. The <a href="/events/team-leads">team lead guide</a> has the full picture, and Brandon Rice's <a href="http://www.blrice.net/blog/2015/08/10/leading-a-team-at-ruby-for-good/">"Leading a Team at Ruby for Good"</a> post is a great longer read.</p>
      <p>Want to talk it through first? <a href="mailto:info@rubyforgood.org">Drop us a note</a>.</p>
    </div>
  </details>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/04</span>
    <h2>Registration — <em>tickets &amp; deadlines.</em></h2>
  </div>

  <details class="faq-item">
    <span class="qix">.12</span>
    <summary>How do I register?</summary>
    <div class="a">
      <p><a href="https://ti.to/codeforgood/rubyforgood">Registration is open on Tito.</a> Please also <a href="/donate">consider contributing to our scholarship fund</a> — your support is what helps make the long weekend accessible to everyone who wants to come.</p>
      <p>We are especially interested in creating a diverse and inclusive space, and we encourage folks underrepresented in tech to register. Please also read our <a href="/code-of-conduct">Code of Conduct</a> before attending.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.13</span>
    <summary>What's the registration deadline?</summary>
    <div class="a">
      <p><strong>July 20, 2026</strong> — or when we sell out, whichever comes first. The retreat-center capacity is real; don't wait until the last week.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.14</span>
    <summary>I bought a ticket and can't go. Refund? Transfer?</summary>
    <div class="a">
      <p>Full refunds are available through <strong>June 7, 2026</strong>. After that we can't offer refunds, but we'll happily help coordinate <strong>transfers through July 20, 2026</strong>. <a href="mailto:info@rubyforgood.org">Email us</a> and we'll work it out.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.15</span>
    <summary>What does my registration cover?</summary>
    <div class="a">
      <p>It's all-inclusive on-site: shared lodging, every meal, evening snacks while we're hanging out, and swag. You bring your laptop, your charger, and your curiosity.</p>
    </div>
  </details>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/05</span>
    <h2>Getting there &amp; <em>being there.</em></h2>
  </div>

  <details class="faq-item">
    <span class="qix">.16</span>
    <summary>Do I really have to be there by 4pm Thursday?</summary>
    <div class="a">
      <p>Yes, really. Teams form right around that time and you'll spend the rest of the evening meeting your team, talking through the project, and getting environments aligned. The event is dramatically better when teams are cohesive from the very first session.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.17</span>
    <summary>How early can I arrive on Thursday?</summary>
    <div class="a">
      <p>Most of the organizing team plans to arrive around 10am — feel free to beat us there. There's beautiful hiking in the area if you're looking to fill some time before kickoff.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.18</span>
    <summary>I'm flying to DC. How do I get to the venue?</summary>
    <div class="a">
      <p>Transit from Dulles (IAD) takes roughly 45–90 minutes by car depending on traffic. DCA and BWI are also workable. Once you've registered, check the <code>#carpool</code> channel in our <a href="https://join.slack.com/t/rubyforgood/shared_invite/zt-34b5p4vk3-NWIw6hKs2ma~wm7mYSe0_A">Slack</a> to coordinate shared rides with other attendees.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.19</span>
    <summary>Where are we staying?</summary>
    <div class="a">
      <p>The <a href="https://www.shepherdsspring.org">Shepherd's Spring Retreat Center</a>, about an hour northwest of Washington DC. The campus has meeting spaces for project work, on-site accommodations, and easy access to rivers and hiking trails. Past attendees have spotted deer and other wildlife on the grounds.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.20</span>
    <summary>What should I pack?</summary>
    <div class="a">
      <p>Linens, towels, and toiletries are provided by the venue — pack light if you're flying. Beyond your laptop and charger, an extension cord is always useful. Pack a jacket and bug spray for the outdoor sessions, earplugs for restful sleep, and your favorite board game / card game / puzzle for the evenings.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.21</span>
    <summary>How does food work?</summary>
    <div class="a">
      <p>All meals are provided — just bring yourself. We also have evening snacks while folks are socializing, playing games, singing karaoke, or playing Werewolf.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.22</span>
    <summary>I'm vegetarian / vegan / gluten-free / allergic to…</summary>
    <div class="a">
      <p>The venue is very accommodating with dietary restrictions. Let us know during registration (or email us afterward) and we'll make sure you're taken care of.</p>
    </div>
  </details>
</div>

<!-- =================================================== -->
<div class="faq-group" data-reveal>
  <div class="group-head">
    <span class="ix">/06</span>
    <h2>What it's <em>really</em> like.</h2>
  </div>

  <details class="faq-item">
    <span class="qix">.23</span>
    <summary>What's it really like at Ruby for Good?</summary>
    <div class="a">
      <p>For expert insight, here are a few write-ups from past team leads and attendees:</p>
      <ul>
        <li><a href="https://chelseatroy.com/2019/04/02/behind-the-scenes-ruby-by-the-bay-civic-hack/">Behind the Scenes: Ruby By the Bay Civic Hack</a> — Chelsea Troy</li>
        <li><a href="https://blog.mapbox.com/ruby-for-good-2018-61dd45a7fdb7">Ruby for Good 2018</a> — Dom Brassey</li>
        <li><a href="https://blog.homesnap.com/homesnap-terrastories-ruby-hack-thon">Giving Back: Homesnap Joins Ruby for Good</a> — Jazz Howington</li>
        <li><a href="https://www.amazonteam.org/act-partakes-in-ruby-for-good-2018-to-develop-offline-geostorytelling-app-terrastories-for-remote-communities/">ACT and Terrastories at Ruby for Good 2018</a> — Rudo Kemper</li>
        <li><a href="https://blog.codeship.com/how-to-inspire-community-in-programming/">How to Inspire Community in Programming</a> — Daniel P. Clark</li>
        <li><a href="http://technology.customink.com/blog/2016/06/23/ruby-for-good-2016/">Ruby for Good 2016</a> — Kalimar Maia</li>
        <li><a href="http://www.blrice.net/blog/2015/08/10/leading-a-team-at-ruby-for-good/">Leading a Team at Ruby for Good</a> — Brandon Rice</li>
        <li><a href="http://www.blrice.net/blog/2014/08/09/lessons-learned-at-ruby-for-good/">Lessons Learned at Ruby for Good</a> — Brandon Rice</li>
      </ul>
      <p>If you'd like your write-up added, email <a href="mailto:info@rubyforgood.org">info@rubyforgood.org</a> — blogs, articles, podcasts all welcome.</p>
    </div>
  </details>

  <details class="faq-item">
    <span class="qix">.24</span>
    <summary>Where do I go to ask the questions that aren't here?</summary>
    <div class="a">
      <p>Two good options: drop into <a href="https://join.slack.com/t/rubyforgood/shared_invite/zt-34b5p4vk3-NWIw6hKs2ma~wm7mYSe0_A">our Slack</a> and ask in <code>#general</code>, or email <a href="mailto:info@rubyforgood.org">info@rubyforgood.org</a>. Real humans respond.</p>
    </div>
  </details>
</div>

<div class="faq-cta" data-reveal>
  <div>
    <p class="eyebrow sage">// ready when you are</p>
    <h3>Registration is open on Tito.</h3>
    <p>Aug 27–30, 2026 · Shepherd's Spring Retreat Center · Sharpsburg, MD.</p>
  </div>
  <div style="display:flex; gap:14px; flex-wrap:wrap;">
    <a href="https://ti.to/codeforgood/rubyforgood" class="btn btn-primary">Register
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <a href="/events" class="btn btn-ghost">Event page</a>
  </div>
</div>
