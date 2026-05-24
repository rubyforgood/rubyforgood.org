---
layout: modern_page
title: Code of Conduct
headline: How we treat <em>each other.</em>
description: Like the technical community as a whole, Ruby for Good is made up of professionals and volunteers from all over the world. These are the ground rules we ask everyone — founders, mentors, contributors, partners, and attendees — to follow in every space we organize.
section: About
section_url: /about-us
permalink: /code-of-conduct
---

<style>
.coc-meta { display: flex; flex-wrap: wrap; gap: 24px 36px; padding: 24px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); margin-bottom: clamp(48px, 6vw, 80px); font-family: var(--mono); font-size: 13px; color: var(--ink-soft); letter-spacing: 0.04em; }
.coc-meta b { color: var(--ruby); font-weight: 600; }
.coc-meta a { color: var(--ink); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(26,20,19,0.25); }
.coc-meta a:hover { text-decoration-color: var(--ruby); color: var(--ruby); }

.coc-toc { display: grid; grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr); gap: clamp(40px, 6vw, 96px); margin-bottom: clamp(64px, 8vw, 100px); align-items: start; }
.coc-toc .toc-side { position: sticky; top: 110px; }
.coc-toc h2 { font-size: clamp(28px, 2.4vw, 38px); }
.coc-toc ol { list-style: none; padding: 0; margin: 24px 0 0; counter-reset: toc; display: grid; gap: 8px; font-family: var(--mono); font-size: 13px; }
.coc-toc ol li { counter-increment: toc; padding: 8px 0; border-bottom: 1px dotted var(--line); }
.coc-toc ol li::before { content: "0" counter(toc) "  ·  "; color: var(--ruby); }
.coc-toc ol a { color: var(--ink-soft); transition: color .2s; }
.coc-toc ol a:hover { color: var(--ruby); }
.coc-toc .body p { font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px; }
@media (max-width: 900px) { .coc-toc { grid-template-columns: 1fr; } .coc-toc .toc-side { position: static; } }

.coc-section { padding: clamp(40px, 5vw, 64px) 0; border-top: 1px solid var(--line); }
.coc-section:first-of-type { border-top: 1px solid var(--ink); }
.coc-section .grid { display: grid; grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr); gap: clamp(32px, 5vw, 80px); align-items: start; }
.coc-section h3 { font-size: clamp(28px, 2.8vw, 42px); margin: 0 0 8px; font-weight: 500; letter-spacing: -0.02em; }
.coc-section h3 em { color: var(--ruby); font-style: italic; }
.coc-section .section-num { font-family: var(--mono); font-size: 12px; letter-spacing: 0.12em; color: var(--ruby); text-transform: uppercase; margin: 4px 0 12px; display: block; }
.coc-section p { font-size: 17px; line-height: 1.7; color: var(--ink-soft); margin: 0 0 18px; }
.coc-section p strong { color: var(--ink); font-weight: 600; }
.coc-section ul { list-style: none; padding: 0; margin: 18px 0 18px; display: grid; gap: 12px; }
.coc-section ul li { display: flex; gap: 14px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: var(--ink); }
.coc-section ul li::before { content: "×"; font-family: var(--mono); color: var(--ruby); font-weight: 600; flex-shrink: 0; font-size: 18px; line-height: 1.4; }
@media (max-width: 900px) { .coc-section .grid { grid-template-columns: 1fr; } }

.coc-coda { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 64px); align-items: center; margin-top: clamp(64px, 8vw, 100px); padding: clamp(40px, 5vw, 72px); border: 1px solid var(--line); border-radius: 6px; background: var(--bg-paper); }
.coc-coda blockquote { margin: 0; font-family: var(--serif); font-size: clamp(28px, 3vw, 44px); font-style: italic; line-height: 1.2; letter-spacing: -0.015em; color: var(--ink); font-variation-settings: "opsz" 144, "SOFT" 100; }
.coc-coda .report h4 { font-family: var(--mono); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage-deep); margin: 0 0 14px; }
.coc-coda .report p { font-size: 15px; line-height: 1.55; color: var(--ink-soft); margin: 0 0 18px; }
@media (max-width: 800px) { .coc-coda { grid-template-columns: 1fr; } }
</style>

<div class="coc-meta" data-reveal>
  <span><b>Applies to:</b> all Ruby for Good spaces — code retreats, Slack, GitHub, mailing lists, partner work, venues</span>
  <span><b>Adapted from:</b> the Ruby Community Conduct Guideline</span>
  <span><b>Report a concern:</b> <a href="mailto:info@rubyforgood.org?subject=Code%20of%20Conduct%20concern">info@rubyforgood.org</a></span>
</div>

<div class="coc-toc">
  <div class="toc-side" data-reveal>
    <p class="eyebrow sage">// contents</p>
    <h2>The short version, then the long version.</h2>
    <ol>
      <li><a href="#scope">Who and where this applies</a></li>
      <li><a href="#welcoming">Be welcoming, friendly, and patient</a></li>
      <li><a href="#respectful">Be respectful</a></li>
      <li><a href="#words">Be careful with your words</a></li>
      <li><a href="#disagree">When we disagree, try to understand why</a></li>
      <li><a href="#enforcement">Enforcement &amp; reporting</a></li>
      <li><a href="#close">Why this matters</a></li>
    </ol>
  </div>
  <div class="body" data-reveal data-reveal-delay="1">
    <p>
      Like the technical community as a whole, the Ruby for Good team and
      community is made up of a mixture of professionals and volunteers from
      all over the world, working on every aspect of the mission, including
      mentorship, teaching, and connecting people.
    </p>
    <p>
      Diversity is one of our huge strengths, but it can also lead to
      communication issues and unhappiness. To that end, we have a few ground
      rules that we ask people to adhere to when they're participating within
      this community and its project. These rules apply equally to founders,
      mentors, and those seeking help and guidance.
    </p>
    <p>
      This isn't an exhaustive list of things you can't do. Rather, take it in
      the spirit in which it is intended — a guide to make it easier to enrich
      all of us and the technical communities in which we participate.
    </p>
  </div>
</div>

<section class="coc-section" id="scope">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/01 · scope</span>
      <h3>Who and <em>where</em> this applies.</h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        This Code of Conduct applies to <strong>all spaces managed by the
        Ruby for Good team</strong>, including the venue. This includes
        Slack, the mailing lists, the issue tracker, Ruby for Good events
        and code retreats, and any other forums created by the project team
        which the community uses for communication.
      </p>
      <p>
        It applies to founders, board members, mentors, contributors,
        partners, attendees, and anyone seeking help and guidance — equally.
      </p>
    </div>
  </div>
</section>

<section class="coc-section" id="welcoming">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/02 · welcoming</span>
      <h3>Be welcoming, friendly, <em>and patient.</em></h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        Be considerate. Your work will be used by other people, and you in
        turn will depend on the work of others. Any decision you take will
        affect users and colleagues, and you should take those consequences
        into account when making decisions.
      </p>
      <p>
        Remember that we're a worldwide community, so you might not be
        communicating in someone else's primary language.
      </p>
    </div>
  </div>
</section>

<section class="coc-section" id="respectful">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/03 · respectful</span>
      <h3>Be respectful.</h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        Not all of us will agree all the time, but disagreement is no excuse
        for poor behavior and poor manners. We might all experience some
        frustration now and then, but we cannot allow that frustration to
        turn into a personal attack.
      </p>
      <p>
        It's important to remember that a community where people feel
        uncomfortable or threatened is not a productive one. Members of the
        Ruby for Good community should be respectful when dealing with other
        members as well as with people outside of our communities.
      </p>
    </div>
  </div>
</section>

<section class="coc-section" id="words">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/04 · your words</span>
      <h3>Be careful with <em>the words</em> you choose.</h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        We are a community of professionals, and we conduct ourselves
        professionally. Be kind to others. Do not insult or put down other
        participants. <strong>Harassment and other exclusionary behaviors
        are not acceptable.</strong> This includes, but is not limited to:
      </p>
      <ul>
        <li>Violent threats or language directed against another person.</li>
        <li>Sexist, racist, or otherwise discriminatory jokes and language.</li>
        <li>Posting sexually explicit or violent material.</li>
        <li>Posting (or threatening to post) other people's personally identifying information ("doxing").</li>
        <li>Personal insults, especially those using racist or sexist terms.</li>
        <li>Unwelcome sexual attention.</li>
        <li>Advocating for, or encouraging, any of the above behavior.</li>
        <li>Repeated harassment of others. In general, if someone asks you to stop, then stop.</li>
      </ul>
    </div>
  </div>
</section>

<section class="coc-section" id="disagree">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/05 · disagreement</span>
      <h3>When we disagree, <em>try to understand why.</em></h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        Disagreements, both social and technical, happen all the time and
        Ruby is no exception. It is important that we resolve disagreements
        and differing views constructively.
      </p>
      <p>
        Remember that we're different. The strength of Ruby comes from its
        varied community, people from a wide range of backgrounds. Different
        people have different perspectives on issues. Being unable to
        understand why someone holds a viewpoint doesn't mean they're wrong.
      </p>
      <p>
        Don't forget that it is human to err — and blaming each other doesn't
        get us anywhere. Offer to help resolve issues and learn from mistakes.
      </p>
    </div>
  </div>
</section>

<section class="coc-section" id="enforcement">
  <div class="grid">
    <div data-reveal>
      <span class="section-num">/06 · enforcement</span>
      <h3>Enforcement &amp; <em>reporting.</em></h3>
    </div>
    <div data-reveal data-reveal-delay="1">
      <p>
        If a participant engages in harassing behavior, the organizers may
        take any action they deem appropriate, including <strong>warning the
        offender or expulsion from the event with no refund.</strong> The
        organizers and volunteers will be introduced at the beginning of the
        event.
      </p>
      <p>
        Ruby for Good organizers will be happy to help participants contact
        local or site law enforcement, provide escorts, or otherwise assist
        those experiencing harassment in order for them to feel safe for the
        duration of the event. <strong>We value you and your attendance.</strong>
      </p>
      <p>
        To report a concern at any time, in any space we manage, email
        <a href="mailto:info@rubyforgood.org?subject=Code%20of%20Conduct%20concern" style="color: var(--ruby); text-decoration: underline; text-underline-offset: 4px;">info@rubyforgood.org</a>.
        Reports are reviewed by Ruby for Good leadership and treated as
        confidentially as the situation allows.
      </p>
    </div>
  </div>
</section>

<div class="coc-coda" id="close" data-reveal>
  <blockquote>
    We're people trying to <span style="color: var(--ruby); font-style: italic;">make the world better.</span>
  </blockquote>
  <div class="report">
    <h4>// need to report something?</h4>
    <p>
      Anything that doesn't feel right — at an event, in Slack, on GitHub,
      or anywhere in our community — please reach out. We'll listen.
    </p>
    <a href="mailto:info@rubyforgood.org?subject=Code%20of%20Conduct%20concern" class="btn btn-primary">
      Contact us
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</div>
