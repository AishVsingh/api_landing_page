import "./home.css";
import React from "react";
import graphic1 from "./static/bg1.gif";
import book from "./static/book.png";
import siri from "./static/siri.png";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <div id="home">
        <Header />
        <About />
        <Feature />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="heading">Pexi API.</div>
        <div id="graphic-moving-dots">
          <img id="graphic-moving-dots-img" src={graphic1}></img>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <div class="section">
          <div class="sub-heading">About</div>
          <div id="about-body">
            Here I present Pexi, my own Rest API that I built from scratch over
            the past few months as a side hobby project. And I think it's worth
            mentioning the trivia that majority of this project was built when I
            was stoned out of my wits. This Api helps in serving any sort of
            data on pretty much any device that can connect to the Internet. I
            recently made use of this API in the following use cases, and I see
            no limits to its capabilites in any other application.
          </div>
        </div>
      </div>
    );
  }
}

class Feature extends React.Component {
  state = {
    title: "",
    body: "",
    features: {
      feature1: {
        name: "Daishnary",
        about: (
          <span>
            <a href="https://daishnary.aishvsingh.com">
              Click Here to Access Daishnary
            </a>
            <br />
            <br />
            It's the first-ever application I worked upon with the help of Pexi.
            The motivation behind Daishnary was to build a centralized platform
            to keep track of my glossary or my favourite words. Additionally, it
            gives me one word randomly chosen from my glossary every day, with
            the rationale that it will keep my memory of that word fresh.
            Initially, it was meant to be only for personal use. But then I took
            a step further and added multi-user access so that multiple people
            can use it. Apart from the daily word it also gives the count of
            words you have saved. I created a separate Web Application for easy
            user interaction. Additionally, I integrated Pexi into my iPhone's
            Siri and now every day I get my 'today's Word' delivered precisely
            at 9:00 AM in form of a notification. Siri also lets me interact
            with daishnary totally on the verbal medium which is insanely
            convenient.
          </span>
        ),
      },

      feature2: {
        name: "Dark Siri",
        about: (
          <span>
            After seeing how seemlessly Pexi works with Siri, I realized there's
            so much more I can do with similar approach. So the next idea that
            popped in mind was, what if Siri could tell some real dark jokes.
            Wouldn't that be fun ? Hence I decided this is gonna be my next application. Step 1 was to find a source for all the dark jokes Siri is gonna spit and what else would be a better place to find dark jokes than Reddit. So I used Reddit's api and scraped about 250 jokes from the 1st dark joke subreddit I could find and then did some server magic. And in less than a days work I had siri who is usually all so uptight, started spitting some real dark shit.
          </span>
        ),
      },
    },
  };

  setDetails = (s) => {
    this.setState({
      title: s.name,
      body: s.about,
    });
  };

  render() {
    return (
      <div>
        <div class="section">
          <div class="sub-heading">Features available</div>
          <div id="features-box">
            <div
              onClick={() => this.setDetails(this.state.features.feature1)}
              class="feat-cont"
            >
              <img class="feat-icon" src={book}></img>
            </div>
            <div
              onClick={() => this.setDetails(this.state.features.feature2)}
              class="feat-cont"
            >
              <img class="feat-icon" src={siri}></img>
            </div>
          </div>
          <div id="feature-body">
            <div id="feature-title">{this.state.title}</div>
            <div id="feature-content">
              <span>{this.state.body}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
