---
title: "News"
date: 2021-02-19T16:05:25+01:00
---

<style>
    div.news {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
        grid-column-gap: 24px;
        grid-row-gap: 24px;
    }
    .announce {
        /*border: 1px solid;*/
        display: flex;
        flex-direction: column;
    }

    .announce .content {
        padding: 0 0rem 1rem 0rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .announce .content h3 {
        margin-bottom: 0px;
    }
    .announce img {
        width: 100%;
        aspect-ratio: 2/1;
        object-fit: cover;
        object-position: 100% 0;
    }

    p {
        font-size: 1rem;
    }

    .link-button {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 1px solid;
        border-radius: 24px;
        margin-top: auto;
        align-self: flex-start;
        text-decoration: none !important;
    }
</style>

<div class="news">
    <div class="announce">
    <a href="https://www.lancaster.ac.uk/global-affairs/people/katherine-mcdonough">
        <img src="/images/keynotes2027.png" alt="CHR2027 Keynote Speakers">
    </a>
    <div class="content">
        <h3>Keynote Speakers Announced</h3>
        <p>
We are delighted to announce the first keynote speakers for <strong>CHR2027</strong>: 
<strong>Katherine McDonough</strong> (Lancaster University) and 
<strong>Fotis Jannidis</strong> (University of Würzburg). Their work spans environmental humanities, digital history, computational literary studies, and AI-enabled humanities research, reflecting the interdisciplinary spirit of CHR.
        </p>
        <a class="link-button" href="/keynotes" aria-label="Read more about the keynote speakers">
            Read More
        </a>
    </div>
</div>
    <div class="announce">
        <a href="https://computational-humanities-research.org/hosting_2027"><img src="/images/CHR announcements_2027.jpeg" alt="Call for Bids"></a>
        <div class="content">
            <h3>Call for Bids to host CHR</h3>
            <p>
The board of the Computational Humanities Society hereby invites proposals to host the annual CHR conference. ...
            </p>
            <a class="link-button" href="https://computational-humanities-research.org/hosting_2027" aria-label="Press to read the call">Read More</a>
        </div>
    </div>
    <div class="announce">
        <a href="/cfp"><img src="/images/CFP2027.001.jpeg" alt="Call for Papers"></a>
        <div class="content">
            <h3>CALL FOR PAPERS</h3>
            <p>
The Call for Papers for the Computational Humanities Research 2027 conference is now out. CHR2027 continues its tradition of providing a dedicated platform for presenting computational work that bridges formal methods and traditional inquiry in the arts and humanities. ...
            </p>
            <a class="link-button" href="/cfp" aria-label="Press to read the Call for Papers">Read More</a>
        </div>
    </div>
    
