---
title: Totality 2025
layout: page
permalink: /totality/
page_id: landing-page
landing_page: true
location: Knoxville, TN
dates:
  date_range: '26 - 28'
  month_year: 'August 2025'
hero:
  eyebrow: "Totality is here to stay, your mama said so…"
  heading: "A &nbsp;new hope &nbsp;is &nbsp;coming &nbsp;to&nbsp;&nbsp;Totality…"
  image: 
    path: "/assets/images/hero_sunset_city_bg.webp"
    mobile_path: "/assets/images/hero_sunset_city_bg_mobile.webp"
    alt: "Sunset city background image"
features:
  subheader: A New Hope for Sales
  description: A 3-day immersive event aimed at bringing Hope back to our great profession &mdash; designed for those willing to take action and create the change that's needed to earn more from their career and life.
meetup:
  eyebrow: Come fellowship with other Rebels
  header: Experience a &nbsp;Sales Conference Unlike any Other
  description: This meet-up will be unlike anything you have ever experienced... Escape from the boring and monotonous conference of the past and lean into the future of learning, enlightening and life changing experiences for people of all walks of life.
  items:
    - feature: Live Roleplaying
    - feature: Hands-on Workshops
    - feature: Stories & Fellowship
    - feature: Real-time Learning & Development
    - feature: The Second Annual Totality "Boss Battle"
    - feature: Fully Immersive & Interactive Event
    - feature: 'Get points, level up, become the #1 Rebel'
    - feature: Engage with like-minded people
cta:
  text: Totality Pass (w/ Hotel)
  nohotel_text: Totality Pass (Local)
  text_vip: VIP Totality pass
  copy_text: |
    This ticket includes; general admission to the event, access to all workshops, hotel stay (2) nights, food and drink during event, swag, official Rebel status.
    * Arrival on Thursday the 26th: 5:00pm EST
    * First event at 6:00pm EST
    * Departure on Saturday the 28th: 2:00pm EST or later
    * Final keynote ends at 12:00pm EST
  copy_text_nohotel: |
    This ticket includes; general admission to the event, access to all workshops, food and drink during event, hotel link to book your own room, swag, official Rebel status.
    * Arrival on Thursday the 26th: 5:00pm EST
    * First event at 6:00pm EST
    * Departure on Saturday the 28th: 2:00pm EST or later
    * Final keynote ends at 12:00pm EST
  copy_text_vip: |
    Everything in General admission ➕
    * VIP access to private sessions and encounters at Totality event
    * Extra special swag
    * Additional & exclusive hangout (Saturday the 28th - all day) with Dale Dupree + The Rebels + Event Speakers
    * Other cool stuff we will surprise you with!
    * Last event ends at 6pm
    * Departure on Saturday night at 8pm or later (or departure Sunday morning)
  url: https://buy.stripe.com/dR63cxd6y8Dk73WaEY
  nohotel_url: https://buy.stripe.com/dR63cxd6y8Dk73WaEY
  vip_url: https://buy.stripe.com/3csfZj7Me2eW2NGaFg
  description: "Join us in <span style='color:#ff3adf'>Knoxville, TN</span> on August 26, 27, and 28th!"
  notice: Early bird pricing is LIVE NOW
  link_text: Learn More
speakers:
  header: Guest Speakers
  title: Meet <span>our</span> team
  members:
    -
      name: Lauren Goodell
      image: /images/speakers/lauren-goodell.webp
      alt_text: Lauren Goodell
      url: https://www.linkedin.com/in/lauren-goodell/
    -
      name: Donald Kelly
      image: /images/speakers/donald-kelly.webp
      alt_text: Donald Kelly
      url: https://www.linkedin.com/in/donaldckelly/
    -
      name: Stu Heinecke
      image: /images/speakers/stu-hs-triangle.webp
      alt_text: Stu Heinecke
      url: https://www.linkedin.com/in/stuheinecke/
    -
      name: Christina Brady
      image: /images/speakers/christina-brady.webp
      alt_text: Christina Brady
      url: https://www.linkedin.com/in/christinapbrady/
    -
      name: David Brier
      image: /images/speakers/david-brier.webp
      alt_text: David Brier
      url: https://www.linkedin.com/in/copierwarrior/
    -
      name: Dale<br>Dupree
      image: /images/speakers/dale-hs-triangle.webp
      alt_text: Dale Dupree
      url: https://www.linkedin.com/in/copierwarrior/
sponsors:
  header: Sponsors
  title: Meet <span>our</span> team
  details:
    -
      image: /images/sponsors/salesreach.webp
      alt_text: SalesReach.io
      url: https://www.salesreach.io/
footer:
  header: The &nbsp;Sales &nbsp;Rebellion &nbsp;Way
  description: Learn the ways of the Sales Rebellion, be a part of the first ever interactive sales conference experience, win prizes, build community and level up your sales game beyond recognition.
---

<div class="landing-page">
    {%- comment -%} --- HERO BACKGROUND --- {%- endcomment -%}
    <div class="landing-page__background">
        <picture>
            <source
                media="(max-width: 768px)"
                srcset="{{ page.hero.image.mobile_path }}"
            />
            <img
                class="landing-page__background--image"
                src="{{ page.hero.image.path }}"
                alt="{{ page.hero.image.alt }}"
            />
        </picture>

        <div class="landing-page__background--overlay"></div>

        {%- comment -%} --- PROMO HEADER --- {%- endcomment -%}
        <header class="landing-page__hero">
            <p class="landing-page__hero--eyebrow">{{ page.hero.eyebrow }}</p>
            <h1 class="landing-page__hero--header">{{ page.hero.heading }}</h1>

            <div class="landing-page__hero--icon bounce">
                {%- include svg/chevron-group.svg -%}
            </div>
        </header>
    </div>

    {%- comment -%} --- FEATURES --- {%- endcomment -%}
    <section class="landing-page__features">
        <div class="old-tv">
          <iframe src="https://www.youtube-nocookie.com/embed/n_kD2ViJlVg?si=Jm7WkdmiiDJueFgS&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 class="landing-page__features--header">
            {%- include svg/totality-logo.svg -%}
        </h2>
        <h3 class="landing-page__features--subheader">
            {{ page.features.subheader }}
        </h3>
        <p class="landing-page__features--description">
            {{ page.features.description }}
        </p>
        <p class="landing-page__cta--description">
            {{ page.cta.description }}
        </p>
        <p class="landing-page__cta--description" style="font-size: 50px">
            {{ page.cta.notice }}
        </p>

        <div class="landing-page__cta--container">
            <div class="landing-page__cta--wrapper">
                <a
                    href="{{ page.cta.url }}"
                    class="landing-page__cta landing-page__cta--mobile-full"
                    >{{ page.cta.text }}</a
                >
                <a class="learnMoreLink landing-page__cta--link">{{ page.cta.link_text }}</a>
            </div>

            <div class="landing-page__cta--wrapper">
                <a
                    href="{{ page.cta.nohotel_url }}"
                    class="landing-page__cta landing-page__cta--mobile-full"
                    >{{ page.cta.nohotel_text }}</a
                >
                <a class="learnMoreNohotelModal landing-page__cta--link">{{ page.cta.link_text }}</a>
            </div>

            <div class="landing-page__cta--wrapper">
                <a
                    href="{{ page.cta.vip_url }}"
                    class="landing-page__cta landing-page__cta--mobile-full"
                    >{{ page.cta.text_vip }}</a
                >
                <a class="learnMoreLinkVip landing-page__cta--link">{{ page.cta.link_text }}</a>
            </div>
        </div>
    </section>

    {%- comment -%} --- MEETUP --- {%- endcomment -%}
    <section class="landing-page__meetup">
        <div class="landing-page__meetup--container">
            <header class="landing-page__meetup--header">
                <p class="landing-page__meetup--eyebrow">
                    {{ page.meetup.eyebrow }}
                </p>
                <h2 class="landing-page__meetup--title">
                    {{ page.meetup.header }}
                </h2>
                <p class="landing-page__meetup--description">
                    {{ page.meetup.description }}
                </p>
            </header>

            <ul class="landing-page__meetup--features">
                {%- for item in page.meetup.items -%}
                <div class="landing-page__meetup--feature-container">
                    <div class="landing-page__meetup--icon">
                        {%- include svg/pixelarticons_check.svg -%}
                    </div>
                    <li class="landing-page__meetup--feature">
                        {{ item.feature }}
                    </li>
                </div>
                {%- endfor -%}
            </ul>

            <div class="landing-page__cta--container landing-page__cta--container-meetup">
                <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                    <a
                        href="{{ page.cta.url }}"
                        class="landing-page__cta landing-page__cta--desktop-full desktop-only desktop-only--inline-block"
                        >{{ page.cta.text }}</a
                    >
                    <a class="learnMoreLink landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
                </div>
                <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                    <a
                        href="{{ page.cta.nohotel_url }}"
                        class="landing-page__cta landing-page__cta--desktop-full desktop-only desktop-only--inline-block"
                        >{{ page.cta.nohotel_text }}</a
                    >
                    <a class="learnMoreLink landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
                </div>
                <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                    <a
                        href="{{ page.cta.vip_url }}"
                        class="landing-page__cta landing-page__cta--desktop-full desktop-only desktop-only--inline-block"
                        >{{ page.cta.text_vip }}</a
                    >
                    <a class="learnMoreLinkVip landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
                </div>
            </div>
        </div>
    </section>

    <div class="landing-page__cta--container">
        <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
            <a
                href="{{ page.cta.url }}"
                class="landing-page__cta landing-page__cta--mobile-full mobile-only"
                >{{ page.cta.nohotel_text }}</a
            >
            <a class="learnMoreLink landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
        </div>
        <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
            <a
                href="{{ page.cta.nohotel_url }}"
                class="landing-page__cta landing-page__cta--mobile-full mobile-only mobile-only--inline-block"
                >{{ page.cta.text }}</a
            >
            <a class="learnMoreLink landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
        </div>
        <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
            <a
                href="{{ page.cta.vip_url }}"
                class="landing-page__cta landing-page__cta--mobile-full mobile-only mobile-only--inline-block"
                >{{ page.cta.text_vip }}</a
            >
            <a class="learnMoreLinkVip landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
        </div>
    </div>

    {%- comment -%} --- SPEAKERS --- {%- endcomment -%}
    <section class="landing-page__speakers">
        <div class="landing-page__speakers--icon">
            {%- include svg/chevron-group.svg -%}
        </div>

        <h2 class="landing-page__speakers--header">
            <span>{%- include svg/totality-logo.svg -%}</span>{{ page.speakers.header }}
        </h2>

        <div class="landing-page__speakers--image-wrapper">
            {%- for speaker in page.speakers.members -%}
            <div class="landing-page__speakers--image-container">
                <a target="_blank" href="{{ speaker.url }}">
                    <img
                        src="{{- speaker.image | relative_url -}}"
                        alt="{{- speaker.alt_text -}}"
                        class="landing-page__team-img"
                    />
                    <p class="landing-page__speakers--name">{{ speaker.name }}</p>
                </a>
            </div>
            {%- endfor -%}
        </div>
    </section>

    {%- comment -%} --- SPONSORS --- {%- endcomment -%}
    <section class="landing-page__speakers">
        <div class="landing-page__speakers--icon">
            {%- include svg/chevron-group.svg -%}
        </div>

        <h2 class="landing-page__speakers--header">
            <span>{%- include svg/totality-logo.svg -%}</span>{{ page.sponsors.header }}
        </h2>

        <div class="landing-page__speakers--image-wrapper">
            {%- for sponsor in page.sponsors.details -%}
            <div class="landing-page__speakers--image-container">
                <a target="_blank" href="{{ sponsor.url }}">
                    <img
                        src="{{- sponsor.image | relative_url -}}"
                        alt="{{- sponsor.alt_text -}}"
                        class="landing-page__team-img"
                    />
                </a>
            </div>
            {%- endfor -%}
        </div>
    </section>

    {%- comment -%} --- FOOTER --- {%- endcomment -%}
    <section class="landing-page__footer">
        <h2 class="landing-page__footer--header">
            {{ page.footer.header }}
        </h2>
        <p class="landing-page__footer--description">
            {{ page.footer.description }}
        </p>

        <div class="landing-page__cta--container landing-page__cta--container-meetup">
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.url }}"
                    class="landing-page__cta landing-page__cta--desktop-full desktop-only"
                    >{{ page.cta.text }}</a
                >
                <a class="learnMoreLink landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
            </div>
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.nohotel_url }}"
                    class="landing-page__cta landing-page__cta--desktop-full desktop-only"
                    >{{ page.cta.nohotel_text }}</a
                >
                <a class="learnMoreLink landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
            </div>
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.vip_url }}"
                    class="landing-page__cta landing-page__cta--desktop-full desktop-only"
                    >{{ page.cta.text_vip }}</a
                >
                <a class="learnMoreLinkVip landing-page__cta--link desktop-only">{{ page.cta.link_text }}</a>
            </div>
        </div>
    </section>

    <div class="landing-page__footer--cta-container">
        <div class="landing-page__cta--container">
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.nohotel_url }}"
                    class="landing-page__cta landing-page__cta--mobile-full mobile-only"
                    >{{ page.cta.nohotel_text }}</a
                >
                <a class="learnMoreLink landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
            </div>
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.url }}"
                    class="landing-page__cta landing-page__cta--mobile-full mobile-only"
                    >{{ page.cta.text }}</a
                >
                <a class="learnMoreLink landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
            </div>
            <div class="landing-page__cta--wrapper landing-page__cta--wrapper-secondary">
                <a
                    href="{{ page.cta.vip_url }}"
                    class="landing-page__cta landing-page__cta--mobile-full mobile-only"
                    >{{ page.cta.text_vip }}</a
                >
                <a class="learnMoreLinkVip landing-page__cta--link mobile-only">{{ page.cta.link_text }}</a>
            </div>
        </div>
    </div>

    {%- comment -%} --- MODAL --- {%- endcomment -%}
    <div id="learnMoreModal" class="landing-page__modal">
        <div class="landing-page__modal--content">
            <span class="landing-page__modal--close">&times;</span>
            {{ page.cta.copy_text | markdownify}}
        </div>
    </div>

    <div id="learnMoreNohotelModal" class="landing-page__modal">
        <div class="landing-page__modal--content landing-page__modal--content-secondary">
            <span class="landing-page__modal--close">&times;</span>
            {{ page.cta.copy_text_nohotel | markdownify }}
        </div>
    </div>

    <div id="learnMoreVipModal" class="landing-page__modal">
        <div class="landing-page__modal--content landing-page__modal--content-secondary">
            <span class="landing-page__modal--close">&times;</span>
            {{ page.cta.copy_text_vip | markdownify }}
        </div>
    </div>
</div>
