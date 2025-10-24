
function renderAboutMe(){
  document.querySelector(".js-about-page").innerHTML=
  `
  <section data-testid="test-about-bio" style="grid-area: bio;">
        <h2>BIO</h2>
        <h3>
          I am a student and a frontend developer. I am also interested in blockchain technologies and Forex trading.
          
        </h3>
      </section>

      <section data-testid="test-about-goals" style="grid-area: goals;">
        <h2>GOALS IN INTERSHIP PROGRAM</h2>
        <h3>
          My most important goal for this internship is to provide a structure for myself to learn and improve my skills as a frontend developer. Other goals include making myself job-ready, meeting other people in the same field, having a good mentor-mentee experience and becoming a time-concious person
          
        </h3>
      </section>

      <section data-testid="test-about-confidence" style="grid-area: confidence;">
        <h2> AREAS OF LOW CONFIDENCE</h2>
        <h3>
          Creatiing responsive websites that look good on all devices has been a challenge to me over my learning period. This is an area of low confidence. Another area of low confidence is meeting deadlines as I tend to procrastinate, believing i work better under pressure
          
        </h3>
      </section>

      <section data-testid="test-about-note" style="grid-area: note;">
        <h2>NOTE TO FUTURE SELF</h2>
        <h3>
          By the time you're reading this, i hope you've grown exponentially and have become both a better developer and person. I also hope you have conquered your areas of low confidence at the end of this
          
        </h3>
      </section>

      <section data-testid="test-about-extra" style="grid-area: extra;">
        <h2>EXTRA THOUGHTS</h2>
        <h3>
          This is genuinely a great opportunity and I hope I make it to the end
          
        </h3>
      </section>
  
  `
}

renderAboutMe()