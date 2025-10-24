


function renderProfileCard(){
  document.querySelector('.js-profile-card').innerHTML+=`
  <article data-testid="test-profile-card">
        
          
          
        <figure>
        <img src="./pictures/profile.jpg" alt="" data-testid="test-user-avatar">
        </figure>
        <header data-testid="test-user-name">
          ADEOGUN JAMIU

        </header>

        <p data-testid="test-user-bio">
          
        I am a student and a frontend developer. I am also interested in blockchain technologies and Forex trading.

        </p>

        
        
        

        
        

        <nav data-testid="test-user-social-links">
          <a href="https://www.twitter.com/adeogunjamiu1" target="_blank"><img src="./pictures/twitter.png" class= "logos"></a>
          <a href="https://www.instagram.com/jamiu.adeogun.965" target="_blank"><img src="./pictures/instagram.png" class= "logos"></a>
          <a href="https://www.github.com/adeogunb" target="_blank"><img src="./pictures/github.png  class= "logos"></a>
        

        </nav>
        
        
        
        <section >
          <ul data-testid="test-user-hobbies">
            HOBBIES
            <li>Playing Football</li>
            <li>Watching Anime</li>

          </ul>
          <ul>
            DISLIKES
            <li>Dishonesty</li>
            <li>Dancing</li>

          </ul data-testid="test-user-dislikes">
        </section>
        <div class="time" data-testid="test-user-time"></div>

     

      </article>`

}

renderProfileCard()

