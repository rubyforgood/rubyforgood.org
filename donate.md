---
layout: modern_page
title: Donate
headline: Open source is free. <em>Running it isn't.</em>
description: Every dollar donated to Ruby for Good — a registered 501(c)(3) — goes directly to project hosting, early-career stipends, event venues, and the long-tail maintenance that keeps software running for the nonprofits depending on it.
section: Support
section_url: /donate
permalink: /donate
---

<style>
.donate-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 80px); align-items: start; margin-bottom: clamp(64px, 8vw, 100px); }
@media (max-width: 800px) { .donate-grid { grid-template-columns: 1fr; } }
.donate-card { background: var(--bg-paper); border: 1px solid var(--line); border-radius: 6px; padding: clamp(28px, 3vw, 44px); display: flex; flex-direction: column; gap: 18px; }
.donate-card h3 { font-size: clamp(24px, 2vw, 30px); }
.donate-card .amts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.donate-card .amts a { display: flex; flex-direction: column; gap: 4px; padding: 16px; border: 1px solid var(--line); border-radius: 4px; background: var(--bg); transition: all .25s ease; }
.donate-card .amts a:hover { border-color: var(--ruby); background: var(--ink); color: var(--bg); transform: translateY(-2px); }
.donate-card .amts a .x { font-family: var(--serif); font-size: 28px; font-weight: 500; letter-spacing: -0.02em; line-height: 1; }
.donate-card .amts a .y { font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); }
.donate-card .amts a:hover .y { color: rgba(248,241,231,0.7); }

.uses { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
.uses .u { padding: 28px 24px 28px 0; border-right: 1px solid var(--line); }
.uses .u:last-child { border-right: 0; padding-right: 0; }
.uses .u:not(:first-child) { padding-left: 24px; }
.uses .u .pct { font-family: var(--serif); font-size: clamp(36px, 4vw, 56px); font-weight: 500; letter-spacing: -0.03em; line-height: 1; color: var(--ruby); }
.uses .u .lbl { font-family: var(--mono); font-size: 12px; color: var(--ink-muted); letter-spacing: 0.06em; text-transform: uppercase; margin: 10px 0 6px; }
.uses .u .desc { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }
@media (max-width: 800px) { .uses { grid-template-columns: repeat(2, 1fr); } .uses .u:nth-child(2) { border-right: 0; padding-right: 0; } .uses .u:nth-child(3) { padding-left: 0; } }

.give-tabs { display: flex; gap: 4px; padding: 4px; background: var(--bg); border: 1px solid var(--line); border-radius: 999px; margin-bottom: 4px; align-self: flex-start; }
.give-tab { font-family: var(--sans); font-size: 13px; font-weight: 500; padding: 8px 18px; border-radius: 999px; border: 0; background: transparent; cursor: pointer; color: var(--ink-soft); letter-spacing: -0.005em; transition: all .2s ease; }
.give-tab.is-active { background: var(--ink); color: var(--bg); }

.give-pane[hidden] { display: none; }
.give-pane h3 { font-size: clamp(22px, 1.8vw, 28px); margin: 8px 0 4px; }

.give-btn { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px; border: 1px solid var(--line); border-radius: 4px; background: var(--bg); transition: all .25s cubic-bezier(.2,.7,.2,1); cursor: pointer; font-family: var(--sans); text-align: left; color: inherit; }
.give-btn:hover { border-color: var(--ruby); background: var(--ink); color: var(--bg); transform: translateY(-2px); box-shadow: 0 14px 28px -14px rgba(20,16,15,0.5); }
.give-btn .x { font-family: var(--serif); font-size: 28px; font-weight: 500; letter-spacing: -0.02em; line-height: 1; }
.give-btn .x small { font-family: var(--mono); font-size: 12px; color: var(--ink-muted); margin-left: 4px; letter-spacing: 0.04em; font-weight: 400; }
.give-btn:hover .x small { color: rgba(248,241,231,0.7); }
.give-btn .y { font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); }
.give-btn:hover .y { color: rgba(248,241,231,0.75); }
.give-btn.is-loading { opacity: 0.6; cursor: wait; }
.give-btn-wide { grid-column: span 2; }

.give-error { font-family: var(--mono); font-size: 12px; color: var(--ruby); min-height: 18px; }

.give-custom { margin-top: 4px; padding-top: 16px; border-top: 1px dashed var(--line); }
.give-custom-label { display: block; font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 10px; }
.give-custom-row { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 8px; align-items: stretch; padding: 6px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg); transition: border-color .2s; }
.give-custom-row:focus-within { border-color: var(--ink); }
.give-currency { font-family: var(--mono); font-size: 16px; color: var(--ink-muted); align-self: center; padding: 0 4px 0 14px; letter-spacing: 0.04em; }
.give-custom-input { min-width: 0; border: 0; outline: none; background: transparent; font-family: var(--serif); font-size: 22px; font-weight: 500; letter-spacing: -0.02em; color: var(--ink); padding: 6px 4px; -moz-appearance: textfield; width: 100%; }
.give-custom-input::-webkit-outer-spin-button, .give-custom-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.give-custom-input::placeholder { color: var(--ink-faint); }
.give-custom-btn { padding: 10px 18px; font-size: 13px; white-space: nowrap; }
@media (max-width: 600px) {
  .give-custom-row { grid-template-columns: auto minmax(0,1fr); }
  .give-custom-btn { grid-column: 1 / -1; justify-content: center; }
}
</style>

<div class="donate-grid">
  <div data-reveal>
    <p class="eyebrow">// 501(c)(3) · ein 81-4581636</p>
    <h2 style="font-size: clamp(36px, 4vw, 60px); margin-bottom: 24px;">Every dollar shows up in <em class="italic-serif">production.</em></h2>
    <p style="font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      We run lean. There's no CEO salary. There's no sponsored editorial. Volunteers
      do the engineering. Donations cover the things volunteer time alone cannot:
      hosting, mailing lists, the venue and meals for the code retreat, and
      stipends that help early-career folks get into the community.
    </p>
    <p style="font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      Donations are <strong>tax-deductible</strong> in the United States.
      We'll send you a receipt the same day.
    </p>
    <p class="comment">// thank you, genuinely.</p>
  </div>

  <div class="donate-card" data-reveal data-reveal-delay="1">
    <div class="give-tabs">
      <button type="button" class="give-tab is-active" data-mode="onetime">One-time</button>
      <button type="button" class="give-tab" data-mode="recurring">Monthly</button>
    </div>

    <div class="give-pane" data-pane="onetime">
      <p class="eyebrow">// one-time gift</p>
      <h3>Pick an amount.</h3>
      <div class="amts">
        <button type="button" class="give-btn" data-checkout-mode="payment" data-price-id="price_1HmQLTFzaTg9zGs09pOTURBo">
          <span class="x">$25</span><span class="y">a month of hosting</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="payment" data-price-id="price_1HmQLUFzaTg9zGs0Xemz8N6e">
          <span class="x">$50</span><span class="y">an early-career welcome</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="payment" data-price-id="price_1HmQLTFzaTg9zGs0ihmA9j05">
          <span class="x">$100</span><span class="y">a registration subsidy</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="payment" data-price-id="price_1HmXkoFzaTg9zGs0vl3ElV2h">
          <span class="x">$250</span><span class="y">a project's annual infra</span>
        </button>
        <button type="button" class="give-btn give-btn-wide" data-checkout-mode="payment" data-price-id="price_1HmXlHFzaTg9zGs0wzooecPg">
          <span class="x">$500</span><span class="y">full-stack support for one project, all year</span>
        </button>
      </div>
      <div class="give-custom">
        <label class="give-custom-label" for="give-custom-onetime">Choose your own amount</label>
        <div class="give-custom-row">
          <span class="give-currency">$</span>
          <input type="number" inputmode="numeric" min="1" step="1" id="give-custom-onetime" class="give-custom-input" placeholder="amount" />
          <button type="button" class="btn btn-ruby give-custom-btn" id="give-custom-go">
            Donate
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
      <p class="comment" style="margin-top: 4px;">// secure Stripe checkout · tax-deductible · receipt by email</p>
    </div>

    <div class="give-pane" data-pane="recurring" hidden>
      <p class="eyebrow">// recurring · monthly</p>
      <h3>The most useful kind.</h3>
      <div class="amts">
        <button type="button" class="give-btn" data-checkout-mode="subscription" data-price-id="price_1HmQLTFzaTg9zGs0ddYeVec2">
          <span class="x">$10<small>/mo</small></span><span class="y">your name on the wall</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="subscription" data-price-id="price_1HmQLUFzaTg9zGs0HMlCv1CZ">
          <span class="x">$25<small>/mo</small></span><span class="y">steady hosting</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="subscription" data-price-id="price_1HmQLTFzaTg9zGs0IxKvPI51">
          <span class="x">$50<small>/mo</small></span><span class="y">community supporter</span>
        </button>
        <button type="button" class="give-btn" data-checkout-mode="subscription" data-price-id="price_1HmXlUFzaTg9zGs011Yxh7X6">
          <span class="x">$100<small>/mo</small></span><span class="y">project sustainer</span>
        </button>
        <button type="button" class="give-btn give-btn-wide" data-checkout-mode="subscription" data-price-id="price_1HmXlfFzaTg9zGs0zf1A0ZLM">
          <span class="x">$150<small>/mo</small></span><span class="y">sustaining champion · the math gets easier</span>
        </button>
      </div>
      <p class="comment" style="margin-top: 4px;">// cancel any time from your Stripe receipt</p>
    </div>

    <div id="give-error" class="give-error" role="alert"></div>
  </div>
</div>

<p class="eyebrow sage" data-reveal>// where it goes</p>
<h2 data-reveal data-reveal-delay="1" style="margin-bottom: 32px;">Transparent budget. Boring, on purpose.</h2>

<div class="uses">
  <div class="u" data-reveal>
    <div class="pct">42%</div>
    <div class="lbl">Code retreat</div>
    <div class="desc">Venue, food, accessibility support, and the logistics of getting 74 humans in one place.</div>
  </div>
  <div class="u" data-reveal data-reveal-delay="1">
    <div class="pct">31%</div>
    <div class="lbl">Project infra</div>
    <div class="desc">Hosting, monitoring, domain, error-tracking, transactional mail.</div>
  </div>
  <div class="u" data-reveal data-reveal-delay="2">
    <div class="pct">19%</div>
    <div class="lbl">Early-career stipends</div>
    <div class="desc">Stipends for early-career folks breaking into the industry — a real team, real projects, real people in their corner.</div>
  </div>
  <div class="u" data-reveal data-reveal-delay="3">
    <div class="pct">8%</div>
    <div class="lbl">Org overhead</div>
    <div class="desc">Accounting, insurance, legal, the boring stuff that keeps a 501(c)(3) running.</div>
  </div>
</div>

<div class="early-career" data-reveal>
  <div class="early-career-copy">
    <p class="eyebrow">// the 19%, in plain English</p>
    <h2 style="font-size: clamp(32px, 3.6vw, 54px); margin-bottom: 20px;">Stipends for <em class="italic-serif">early-career</em> folks breaking in.</h2>
    <p style="font-size: 18px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      Breaking into this industry is harder right now than it has been in a
      decade. We're doing everything we can to help.
    </p>
    <p style="font-size: 17px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 18px;">
      Ruby for Good is one of the few places an early-career developer can
      get the three things bootcamps and tutorials can't hand you:
    </p>
    <ul class="early-career-list">
      <li><strong>A real team.</strong> Not a class, not a forum thread. People you'll be in a video call with on Tuesday and a code review with on Wednesday.</li>
      <li><strong>Real projects.</strong> Code that ships to nonprofits running real operations, with all the trade-offs and judgement calls that implies.</li>
      <li><strong>Real people in the industry.</strong> Senior engineers, staff folks, founders, hiring managers — people who can vouch for your work and answer your DMs.</li>
    </ul>
    <p style="font-size: 17px; line-height: 1.65; color: var(--ink-soft); margin: 0 0 24px;">
      The stipends we fund cover registration and the practical costs of
      showing up — because asking someone who's job-searching to take a
      long weekend off without support isn't actually accessible. Your
      donations are what make that math work.
    </p>
    <a href="mailto:info@rubyforgood.org?subject=Funding%20an%20early-career%20stipend" class="btn btn-primary">
      Fund a stipend
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
  <div class="early-career-img">
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=80" alt="A small team collaborating around a laptop">
    <div class="early-career-stat">
      <span class="ec-num">3</span>
      <span class="ec-lbl">things bootcamps can't give you</span>
    </div>
  </div>
</div>

<style>
.early-career { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 80px); align-items: center; margin-top: clamp(64px, 8vw, 100px); padding-top: clamp(48px, 6vw, 80px); border-top: 1px solid var(--ink); }
.early-career-list { list-style: none; padding: 0; margin: 0 0 24px; display: grid; gap: 14px; }
.early-career-list li { display: flex; gap: 14px; align-items: flex-start; font-size: 16px; color: var(--ink-soft); line-height: 1.5; }
.early-career-list li::before { content: "→"; font-family: var(--mono); color: var(--ruby); font-weight: 600; flex-shrink: 0; margin-top: 2px; }
.early-career-list li strong { color: var(--ink); font-weight: 600; }
.early-career-img { position: relative; border-radius: 6px; overflow: hidden; aspect-ratio: 4/5; }
.early-career-img img { width: 100%; height: 100%; object-fit: cover; }
.early-career-stat { position: absolute; bottom: 20px; left: 20px; right: 20px; background: var(--bg); padding: 18px 22px; border-radius: 6px; display: flex; align-items: center; gap: 18px; box-shadow: var(--shadow-lift); }
.ec-num { font-family: var(--serif); font-size: 48px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; color: var(--ruby); }
.ec-lbl { font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); line-height: 1.4; max-width: 18ch; }
@media (max-width: 800px) { .early-career { grid-template-columns: 1fr; } .early-career-img { aspect-ratio: 16/10; } }
</style>

<div class="gh-sponsors" data-reveal>
  <div>
    <p class="eyebrow sage">// another way to give</p>
    <h3 style="font-size: clamp(26px, 2.4vw, 36px); margin: 8px 0 12px;">Sponsor us on GitHub.</h3>
    <p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft); margin: 0;">
      If you have a GitHub Sponsors budget at your company — yours or your employer's —
      we're set up there too. Same dollars, same 501(c)(3), often easier to expense.
    </p>
  </div>
  <a href="https://github.com/sponsors/rubyforgood" class="btn btn-primary" target="_blank" rel="noopener">
    Sponsor on GitHub
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
</div>

<style>
.gh-sponsors { display: grid; grid-template-columns: minmax(0, 1.4fr) auto; gap: 32px; align-items: center; padding: clamp(32px, 4vw, 56px); border: 1px solid var(--line); border-radius: 6px; background: var(--bg-paper); margin-top: clamp(64px, 8vw, 100px); }
@media (max-width: 700px) { .gh-sponsors { grid-template-columns: 1fr; } }
</style>

<div style="text-align:center; padding: clamp(48px, 6vw, 80px) 0 0;" data-reveal>
  <p class="comment" style="margin-bottom: 20px;">// company sponsorship inquiries</p>
  <a href="mailto:info@rubyforgood.org" class="btn btn-ghost">Email info@rubyforgood.org</a>
</div>

<script src="https://js.stripe.com/v3/"></script>
<script>
  (function(){
    // Tabs
    var tabs = document.querySelectorAll('.give-tab');
    var panes = document.querySelectorAll('.give-pane');
    tabs.forEach(function(t){
      t.addEventListener('click', function(){
        tabs.forEach(function(x){ x.classList.remove('is-active'); });
        t.classList.add('is-active');
        var mode = t.dataset.mode;
        panes.forEach(function(p){ p.hidden = (p.dataset.pane !== mode); });
      });
    });

    // Stripe checkout
    var PUBLISHABLE_KEY = 'pk_live_8GGxzNf3baRkezsBLlQwCYwY';
    var DOMAIN = 'https://rubyforgood.org';
    if (!window.Stripe) return;
    var stripe = Stripe(PUBLISHABLE_KEY);
    var err = document.getElementById('give-error');

    document.querySelectorAll('.give-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var mode = btn.dataset.checkoutMode;
        var priceId = btn.dataset.priceId;
        if (!priceId) return;
        err.textContent = '';
        btn.classList.add('is-loading');
        stripe.redirectToCheckout({
          mode: mode,
          lineItems: [{ price: priceId, quantity: 1 }],
          successUrl: DOMAIN + '/success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: DOMAIN + '/donate'
        }).then(function(result){
          btn.classList.remove('is-loading');
          if (result.error) err.textContent = result.error.message;
        });
      });
    });

    // Custom amount → Stripe Payment Link (configured in the Stripe
    // dashboard as "customer chooses amount"). prefilled_amount is in cents.
    var STRIPE_CUSTOM_LINK = 'https://buy.stripe.com/28odUt0A41Zk6nm000';
    var customBtn = document.getElementById('give-custom-go');
    var customInput = document.getElementById('give-custom-onetime');
    if (customBtn && customInput) {
      customBtn.addEventListener('click', function(){
        var raw = (customInput.value || '').toString().trim();
        var amt = parseInt(raw, 10);
        if (!amt || amt < 1) {
          err.textContent = 'Please enter a whole-dollar amount.';
          customInput.focus();
          return;
        }
        err.textContent = '';
        window.location.href = STRIPE_CUSTOM_LINK + '?prefilled_amount=' + (amt * 100);
      });
      customInput.addEventListener('keydown', function(e){
        if (e.key === 'Enter') { e.preventDefault(); customBtn.click(); }
      });
    }
  })();
</script>
