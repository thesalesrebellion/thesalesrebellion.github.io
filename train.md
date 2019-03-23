---
title: Train
permalink: /train/
section: train
heading: "**Become a Rebel Leader.**"
subheading: "Train directly with The Copier Warrior (leader of The Sales Rebellion) or one of his appointed Rebel Leaders that have been recruited from the highest ranks across the sales landscape. **We have many forms of coaching, training, and development programs to suit any need you or your company may have.**"

programs:
  - tab: The Rebel Leader
    title: The Rebel Leader Program
    hash: rebel-leader
    body: |-
      Our Rebel Leader Coaching program is a weekly/monthly/quarterly model. It includes campaign creation tactics, personal brand development, monthly challenges, and on-going personal sales development.

      Our coaching is designed to cause you to look at sales through the eyes of our Rebellion. This causes you to drive more activity, build more relationships, increase the quality of interactions with your prospects.  We help you build the skills needed to take your career to the top of every mountain you want to climb.

      This program includes the following:
    details:
      - One-hour 1x1 Coaching Calls
      - Monthly "Copier Warrior Challenge"
      - Weekly sale’s "devotional"
      - All available curriculum/courses through The Sales Rebellion
      - Personal Brand Development
      - First touch marketing campaigns and workflow
      - Inside Jokes that you can keep from your boss
    cta-text: "Find out more about our  **Rebel Leader Program!**"
  - tab: Group Coaching
    title: Group Coaching
    hash: group-coaching
    body: |-
      Our Rebel Coalition coaching sessions are a unique experience for everyone involved. Conducted via webinar transmission, the Rebel Coalition brings struggles and achievement to the table to be discussed. The room gets capped off at 5 people and each person has a chance to engage the supreme leader (AKA The Copier Warrior) directly.

      One of the greatest values of our Rebel Coalition coaching sessions is that you will hear from, and engage with, others around the sales world who are rebelling against the status quo.

      This program includes the following:
    details:
      - Submit questions directly for discussion
      - Network with fellow Rebels
      - Mastermind in a group setting
      - Hear directly from The Copier Warrior
      - Develop ideas and strategies to overcome obstacles
      - Make other sales professionals jealous
    cta-text: "Find out more about **Group Coaching!**"
  - tab: On-Site Bootcamps
    title: On-Site Bootcamps
    hash: bootcamps
    body: |-
      Our bootcamps can be a little intense. But, if you make it through, it’s hard to leave the same. Bootcamps are a chance to test the waters. Maybe you’ve heard the people whispering of our Rebellion and it made you curious. Maybe you caught a glimpse of the difference we bring to the sales world and want to know more. Regardless of your reason, the time is now.

      Experience The Sales Rebellion for yourself and empower your sales force! This list is a few of the most popular boot camps:
    details:
      - |-
        **The Rebellion Is Born!**

        This is your starting point. Learn the story of The Copier Warrior and hear more about the rebellion methodology. Understand habits, attitudes, and mindsets. Discuss the psychology of the sale, interrupt marketing, and your social presence. Gain wisdom and fall in love with our Rebellion from a 30,000 foot view.
      - |-
        **Living Pipeline**

        Your pipeline is old, rusted, and leaking. Bring it back to life! This workshop takes a strategic communication approach to building long term relationships with every prospect you talk to. Do not send a flyer every six months and expect to gain an opportunity to submit a proposal. We’ll show you the best way to develop a long term relationship, earn credibility, and cause an awakening for your prospects at any stage of their sales cycle.
      - |-
        **Be in the K.N.O.W.!**

        As a sales professional, your territory is the lifeblood of your success. It’s time you treat it as such! Learn the approach of our Sales Wanderer theory and make an impact on your community that people will not soon forget. Dial with purpose, uncover more opportunities, and tap into the full potential of this unexplored land. Choose Legendary!
      - |-
        **R.E.A.S.O.N.**

        It is about time that you stopped spraying and praying with your pitch and started giving people a R.E.A.S.O.N. to listen. Learn how to prospect in a more meaningful and productive way. Tell your story, disrupt a buyer’s normal patterns, and develop new business relationships. Oh yea, and set more appointments than you ever thought possible! Discover our interrupt marketing and first touch pieces with a special adaptation for BDRs and SDRs alike. Start sharing your R.E.A.S.O.N.!
      - |-
        **Chest of wonders**

        This is a 21<sup>st</sup> century synthesis of sales and marketing. See what it takes to create effective marketing pieces that people not only respond to, but truly enjoy. Make heads turn and confidence rise with this informative and engaging session. Don’t become another number in the sales bullpen, write the next chapter of your sales legacy.
      - |-
        **LinkedIn**

        There’s a lot of noise about how to use LinkedIn for sales, but we have an approach that is sure to build your LinkedIn into an asset that most salespeople are not leveraging. This is not just about prospecting on LinkedIn, it’s about incorporating the platform into the many tools you already use. This bootcamp is about making you a real person and humanizing the sales process. It is about content, visibility, and building your personal brand. It is time for you to rise might sales warrior!
    cta-text: "Find out more about our  **On-Site Bootcamps!**"
  - tab: Public Speaking
    title: Public Speaking
    hash: speaking
    body: |-
      Sure, you could waste $15,000 on a speaker who comes, screams at your audience for an hour, and skips away with three quarters of the event budget. Or you could hire The Sales Rebellion, still pay $15,000, but leave your audience with a message that changes their lives forever. Give the people what they deserve!

      Whether you have a 15 minute slot, or you need someone to pull out a filibuster, The Sales Rebellion is here to serve. Let the Copier Warrior himself set your organization on fire with any one of his impactful, sales-driven keynote speeches. Here are just a few of the events that stand to benefit from our sales rhetoric:
    details:
      - Sales Kick-offs
      - Lunch And Learns
      - Seminars/Conferences
      - Global or domestic events
      - In your basement, party of 1 + your mom makes lunch for our crew
    cta-text: "Find out more about our  **Public Speaking options!**"
---

<div class="row" style="margin-bottom:80px">
  <div class="column medium-8 medium-offset-2 inverse text-center">
    <h1 class="text-xlarge">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    <p>{{ page.subheading | markdownify }}</p>
  </div>
</div>
<div style="background-color:#fff;padding-top:40px">
  <div class="row" style="padding-bottom:50px">
    <div class="column medium-8 medium-offset-2" style="background:#fff">
      <ul class="tabs" data-deep-link="true" data-update-history="true" data-deep-link-smudge="true" data-deep-link-smudge-delay="500" id="rebellion-tabs" data-responsive-accordion-tabs="tabs small-accordion large-tabs">
        {% for program in page.programs %}
        <li class="tabs-title{% if forloop.first %} is-active{% endif %}"><a href="#{{ program.hash }}"{% if forloop.first %} aria-selected="true"{% endif %}>{{ program.title }}</a></li>
        {% endfor %}
      </ul>
      <div class="tabs-content" data-tabs-content="rebellion-tabs">
        {% for program in page.programs %}
        <div class="tabs-panel{% if forloop.first %} is-active{% endif %}" id="{{ program.hash }}">
          <h2>{{ program.title }}</h2>
          {{ program.body | markdownify }}
          {% if program.details %}
          <ul>
          {% for detail in program.details %}
            <li>{{ detail | markdownify }}</li>
          {% endfor %}
          </ul>
          {% endif %}
          <div class="cta-container text-center" style="margin-top:50px">
            <h2 style="font-size:22px;margin:0 auto 30px;max-width:300px">{{ program.cta-text | markdownify | remove: '<p>' | remove: '</p>' }}</h2>
            <a class="button secondary" href="/join/">Find out more</a>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
{% include join-block.html %}
