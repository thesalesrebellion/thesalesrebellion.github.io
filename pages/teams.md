---
title: Teams
permalink: /teams/
layout: page
page_id: teams
has_video: true
has_carousel: true
landing_page: false
hero:
  heading: <span>Get</span> <span>your</span> <span>team</span> <span>to</span> <span>the</span> top!
  text: |-
    Transformative training and coaching for sales teams who want to dominate their market
  cta:
    text: Reach Out!
    url: https://calendly.com/jeremiah-salesrebellion/30min-1
    new_tab: true
features:
  items:
    - title: Training and Coaching
      text: Outreach methodology, maximize the pipeline, sales process with a twist, systems that simplify, leadership and communication
      button:
        text: <span>Talk</span> to<br><span>a</span> Rebel
        url: https://calendly.com/jeremiah-salesrebellion/30min-1
        new_tab: true
    - title: SKOs and Events
      text: An SKO from the Sales Rebellion fires up your team AND hands over the keys that have unlocked 7-figure sellers, rapid promotions, and quotas destroyed so badly even the company legal department will be suspicious.
      button:
        text: Get <span>One</span> Today
        url: https://calendly.com/jeremiah-salesrebellion/30min-1
        new_tab: true
    - title: <span>Fractional</span> Support
      text: Fractional CRO/VP of sales, Full sales process buildout and overview, Go to Market strategies, Sales team support - Custom Sales Campaigns
      button:
        text: Learn More
        url: https://calendly.com/jeremiah-salesrebellion/30min-1
        new_tab: true
quote:
  name: '<span>Eddie <span>@</span> <span>Smart</span> Technologies'
  text: "<span class='quote quote--beginning'>“</span>I’ve never had a team that was more excited to prospect or be engaged with the sales process.<span class='quote quote--end'>”</span>"
  image:
    path: /images/st-logo.png
    alt_text: Samrt Technologies logo
downloads:
  heading: No Email…<br>No <span>nurture</span> sequence…<br>Just <span>a</span> <span>Free</span> Download
  items:
    - image:
        path: '/images/cover-prospect-like-a-sales-rebel.jpg'
        alt_text: 'White Paper - Prospect like a Sales Rebel'
      download_path: '/downloads/white-papers/White Paper - Prospect like a Sales Rebel - PUB22.06.20.pdf'
    - image:
        path: '/images/cover-how-segmentation-can-help-you-change-the-game.jpg'
        alt_text: 'White Paper - How Segmentation Can Help You Change The Game'
      download_path: '/downloads/white-papers/White Paper - How Segmentation Can Help You ChangeTheGame.pdf'
    - image:
        path: '/images/cover-the-sales-culture-revolution.jpg'
        alt_text: 'White Paper - The Sales Culture Revolution'
      download_path: '/downloads/white-papers/White Paper - The Sales Culture Revolution - PUB_22.06.20.pdf'
video:
  heading: <span>Take</span> <span>your</span> <span>team</span> <span>to</span> <span>new</span> levels…
  video_id: y2Z69Mf9adw
contact:
  heading: <span>Talk</span> with <span>a</span> <span>Rebel</span> today
footer:
  message: "The human race is governed by its imagination"
  note: "- Napoleon Bonaparte"
---

{%- comment -%} --- FEATURES --- {%- endcomment -%}
<section class="section teams__features">

    <div class="container">

        {%- for item in page.features.items -%}
            <div class="teams__feature">
                <h2 class="teams__feature-title">
                    {{- item.title -}}
                </h2>

                <div class="teams__feature-text">
                    {{- item.text -}}
                </div>

                <a href="{{- item.button.url -}}" class="teams__feature-btn btn btn--purple"{% if item.button.new_tab == true %} target="_blank"{% endif %}>
                    {{- item.button.text -}}
                </a>
            </div>
        {%- endfor -%}

    </div>

</section>

{%- comment -%} --- TESTIMONIAL --- {%- endcomment -%}
<section class="section teams__quote">

    <div class="container">

        <div class="teams__quote-content">
            <div class="teams__quote-content-item teams__quote-image-wrapper">
                <img src="{{- page.quote.image.path | relative_url -}}" alt="{{- page.quote.image.alt_text -}}" class="teams__quote-image">
            </div>
            <div class="teams__quote-content-item teams__quote-text">
                <h3 class="teams__quote-name">
                    {{- page.quote.name -}}
                </h3>
                <p class="teams__quote-desc">
                    {{ page.quote.text }}
                </p>
            </div>
        </div>

    </div>

</section>

{%- comment -%} --- DOWNLOADS --- {%- endcomment -%}
<section class="section teams__dl">

    <div class="container">

        <h2 class="teams__dl-heading">
            {{ page.downloads.heading }}
        </h2>

        <div class="teams__dl-items teams__dl-items--desktop">
            {%- for item in page.downloads.items -%}
                <a href="{{- item.download_path | relative_url -}}" class="teams__dl-item">
                    <img src="{{- item.image.path | relative_url -}}" alt="{{- item.image.alt_text -}}" class="teams__dl-img">
                </a>
            {%- endfor -%}
        </div>

        <div class="teams__dl-items teams__dl-items--mobile slick-me">
            {%- for item in page.downloads.items -%}
                <a href="{{- item.download_path | relative_url -}}" class="teams__dl-item">
                    <img src="{{- item.image.path | relative_url -}}" alt="{{- item.image.alt_text -}}" class="teams__dl-img">
                </a>
            {%- endfor -%}
        </div>

    </div>

</section>

{%- comment -%} --- VIDEO - TESTIMONIAL --- {%- endcomment -%}
<section class="section teams__video">

    <div class="container">

        <h2 class="teams__video-heading">
            {{ page.video.heading }}
        </h2>

        <div class="teams__video-video_wrapper video-wrapper">
            {%- include video.html video_id=page.video.video_id -%}
        </div>

    </div>

</section>
