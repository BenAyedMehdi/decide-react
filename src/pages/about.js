import React from "react";

function About() {
  return (
    <div className="container">
      <div className="container">
        Welcome to Decision Maker, the website that helps you make better
        choices in life. 🙌 We all face dilemmas and uncertainties every day,
        whether it’s about our career, relationships, health, or finances.
        Sometimes, we feel overwhelmed by the pros and cons of each option, and
        we don’t know what to do. That’s where Decision Maker comes in. We have
        developed a special formula that analyzes your decision criteria and
        gives you a score for each option. The higher the score, the more likely
        the option is to satisfy your needs and preferences. 😊
      </div>
      <div className="container">
        How does it work? It’s simple: First, you specify what decision you
        would like to make, such as “Should I quit my job?” or “Should I buy a
        new car?”. Next, you list the pros and cons of each option, such as
        “Pros: more freedom, less stress, new opportunities. Cons: less income,
        uncertainty, loss of benefits.”. Finally, you assign a weight to each
        pro and con, depending on how important they are to you, such as
        “Weight: 5 for freedom, 4 for stress, 3 for opportunities, etc.”.
        Decision Maker will then calculate the score for each option based on
        the formula:
      </div>
      <div className="container">
       Score = (Sum of weighted pros) - (Sum of weighted cons) 
      </div>
      <div className="container">
       The option with the highest score is the one that Decision Maker recommends.
        You can also see the breakdown of the score for each pro and con, and
        compare the options side by side. 🔍 Of course, Decision Maker is not a
        magic bullet that can solve all your problems. It is a tool that can
        help you clarify your thoughts, weigh your options, and make informed
        decisions. You are still the one who has to take action and live with
        the consequences. 💡 But we hope that Decision Maker can make your life
        easier and happier by helping you choose the best option for you. Try it
        out today and see for yourself. 😊
      </div>
    </div>
  );
}

export default About;
