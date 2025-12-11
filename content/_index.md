---
title: "CHR 2027"
date: 2019-12-15T11:12:14+01:00
---
<style>

body {
  background-color: #f8f9fa;
}

  h1, h2 {
    margin-top: 1em; 
    margin-bottom: 0rem;
  }

  /* Card row layout */
  .card-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem; /* Small consistent gap */
    justify-content: center; /* Align cards to the left */
    align-items: stretch; /* Make sure all cards are the same height */
  }

  .card-col {
    display: flex;
    flex-grow:1;
    margin-bottom: 1rem; /* vertical margin between cards */
    max-width: 350px;
    width: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Adding a smooth hover effect */
  }

  .card.image img{
    width: 80% !important;

  }

  @media (hover: hover) {
    .card:hover {
      transform: translateY(-5px); /* Hover lift effect */
    }
  }

  .card-title {
    font-size: 20px !important; /* make size a bit bigger (override) */
    padding: 4px;
  }

  /* hide read more by default (on bigger screens) */
  .read-more {
  display: none;
  }

  /* show mobile read more since hover does not work */
  @media (hover: none) {
    .read-more {
      display: inline-block;
      margin-top: auto;
      align-self: flex-start;
      padding: 0.5rem 1rem;
      border: 1px solid;
      border-radius: 24px;
      text-decoration: none !important;
    }
  }

/* define banner for about page */
.banner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0px;
}

.banner {
    background-color: var(--color1);
    color: white;
    padding: 15px;  /* minimal padding */
    border-radius: 10px;
    display: flex;
    flex-direction: row; /* row to place arrow beside text */
    align-items: center;
    justify-content: space-between; /* space between text and arrow */
    text-decoration: none;
    transition: all 0.3s ease;
    height: 100%;  /* controlled height */
    width: 100%; /* fixed width for consistency */
    text-decoration: none !important;
}

.banner h2 {
    font-size: 1.2rem;
    margin: 0;
    color: white;
    text-align: left; /* align text to left for better flow */
}

.banner .arrow {
    margin-left: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    color: var(--color1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.banner:hover {
    background-color: var(--color2);
}

.banner:hover .arrow {
    background-color: white;
    color: var(--color2);
}

/* Hero banner section */
.hero-banner {
    position: relative;
    padding: 0;
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0px;
    overflow: hidden;
}

/* Background image within page bounds */
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/deansgate.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    z-index: 1;
}

/* Overlay for better text readability */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.75);
    z-index: 2;
}

.hero-banner .hero-content {
    position: relative;
    z-index: 3;
}

.hero-banner .conftitle {
    white-space: nowrap;
}

@media (max-width: 767px) {
    .hero-banner {
        height: 16rem;
    }
    
    .hero-banner .conftitle {
        font-size: 55px !important;
        white-space: nowrap;
    }
    
    .hero-banner .container {
        width: 100%;
        padding: 0 1rem;
    }
}


@media (max-width: 480px) {
    .banner h2 {
        font-size: 1rem;
    }

    .banner .arrow {
        width: 28px;
        height: 28px;
    }
    
    .hero-banner {
        padding: 2rem 1rem;
    }
}
</style>

<h2 class="center"><b><span style="text-align:center";>Seventh Conference on</br> Computational Humanities Research</span></b></h2>

<h3 class="center">
    <b><span style="text-align:center; font-size:1.3em;"> <!-- make a little bigger than H3 -->
    <!-- 2027 -->
    </span></b>
</h3>

<div class="space" style="padding-top:0.5%;"></div>

The Computational Humanities Research (CHR) community is an international and
interdisciplinary community that supports researchers with an interest in computational
approaches to the humanities. 

The 2027 edition of the Computational Humanities Research conference will take
place in Machester UK. Read more about CHR 2027:

<!-- <div class="space" style="padding-top:0.5%;"></div>

<div class="banner-grid">
    <a href="/cfp" class="banner" aria-label="View Call for Papers">
        <h2>Call for Papers</h2>
        <div class="banner-footer">
            <div class="arrow" aria-hidden="true">→</div>
        </div>
    </a>
    <a href="/people" class="banner" aria-label="View People">
        <h2>People</h2>
        <div class="banner-footer">
            <div class="arrow" aria-hidden="true">→</div>
        </div>
    </a>
</div> -->
