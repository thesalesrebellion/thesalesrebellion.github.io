---
title: Group
layout: page
permalink: /group/
page_id: group
has_video: true
landing_page: false
hero:
  heading: <span>Change</span> <span>The</span> <span>Game</span> <span>with</span> <span>like-minded</span> <span>Sales</span> Rebels
  text: |-
    Solve real-world problems with others who heard the call and answered it
  cta:
    text: Join <span>a</span> Squadron
    url: https://calendly.com/jeremiah-salesrebellion/rebelsquadron
    new_tab: true
features:
  show: false
  heading_lines:
    - <span>Rebel</span> Squadrons…
    - Topic-specific
    - cohort groups
  items:
    - title: '<span>Current</span> <span>Squadron</span> Topics:'
      text: |-
        * Prospecting
        * Leadership
        * Brand-Building
    - title: '<span>Next</span> <span>Squadron</span> <span>Starts</span> <span>in</span> May:'
      text: |-
        Who: Adam Snider<br>
        What: Prospecting<br>
        When: TBD<br>
        Where: In The Interwebs…
  cta:
    text: Join<span class="space"></span>Squardrons
    url: https://calendly.com/jeremiah-salesrebellion/rebelsquadron
    new_tab: true
testimonials:
  heading: <span>See</span> <span>what</span> <span>students</span> <span>have</span> <span>to</span> say…
  video_id: 38Dlolt13JE
faq:
  heading: FAQ
  items:
  - q: How long is the program?
    a: |-
      Rebel Squadrons are 16 weeks - 8 total coaching sessions of 90 minutes each.
  - q: Who are Squadrons for?
    a: |-
      New or seasoned sales reps who aren’t yet ready to go full Rebel Jedi, but need to build a full and healthy pipeline in the next 180 days.
  - q: How many people are in each group?
    a: |-
      There are 8 main rebels in our favorite saga, with 6 seeing the overthrow of the Empire. It’s only fitting that Squadrons be limited to 6-8 rebels.
  - q: How much does the program cost?
    a: |-
      $429/mo. for 4 mos.
  - q: Once I signup, then what happens?
    a: |-
      Each squadron has an official intro call and members are placed in a private group with their fellow 6-7 rebels. Rebellion market tools are shared so each member can start tailoring them for their prospects. This kickstarts the build of a prospecting and pipeline system you will use to create meetings-on-demand.
  - q: What kind of support will I get?
    a: |-
      Apart from group coaching calls, Rebels have access to a private Slack channel for their Squadron only, where you can post questions, submit pieces for feedback, share wins, etc. Your coach and other Rebel coaches/support personnel are in the channel daily to help.
cta:
  text: 'Are<span class="space"></span>you<span class="space"></span>ready<span class="space"></span>to<span class="space"></span>#ChangeTheGame'
  button:
    text: Start<br>Today
    url: 'https://calendly.com/jeremiah-salesrebellion/30min-1'
    new_tab: true
footer:
  message: ""
  note: ""
---

{%- comment -%} --- FEATURES --- {%- endcomment -%}
{%- unless page.features.show == false -%}
    <section class="section group__features">

        <div class="container">

            <h2 class="group__features-heading">
                {%- for line in page.features.heading_lines -%}
                    <div class="group__features-heading-line{% if forloop.last %} group__features-heading-line--last{% endif %}">
                        {{- line -}}
                    </div>
                {%- endfor -%}
            </h2>

            <div class="group__features-items">
                {%- for item in page.features.items -%}
                    {%- capture the_cycle -%}{%- cycle 'odd', 'even' -%}{%- endcapture -%}

                    <div class="group__features-item group__features-item--{{ the_cycle }}">
                        <div class="group__features-item-content">
                            <h3 class="group__features-item-title">
                                {{- item.title -}}
                            </h3>
                            <div class="group__features-item-text">
                                {{ item.text | markdownify }}
                            </div>
                        </div>
                    </div>
                {%- endfor -%}
            </div>

            <div class="group__features-cta">
                <a href="{{- page.features.cta.url -}}" class="group__features-btn btn"{% if page.features.cta.new_tab == true %} target="_blank"{% endif %}>
                    {{- page.features.cta.text -}}
                </a>
            </div>

        </div>

    </section>
{%- endunless -%}

{%- comment -%} --- VIDEO --- {%- endcomment -%}
<section class="section group-testimonials">

    <div class="container">

        {%- if page.testimonials.heading and page.testimonials.heading.size > 0 -%}
            <h2 class="group-testimonials__heading">{{- page.testimonials.heading -}}</h2>
        {%- endif -%}

        <div class="group-testimonials__content">

            <div class="group-testimonials__video-wrapper video-wrapper">
                {%- include video.html video_id=page.testimonials.video_id -%}
            </div>

        </div>

    </div>

</section>

{%- comment -%} --- FAQ --- {%- endcomment -%}
<section class="section group__faq">

    <div class="container">

        <h2 class="faq__heading group__faq-heading">
            {{- page.faq.heading -}}
        </h2>

        {%- include faq.html faq_items=page.faq.items -%}

    </div>

</section>
