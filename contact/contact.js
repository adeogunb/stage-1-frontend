const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const contactPage = document.querySelector('.js-contact-page')
const popUpButton = document.querySelector('.js-pop-up-button')

function renderContactForm(){
  contactPage.innerHTML=
    `<h1>Contact Us</h1>
      <p>Please take a moment to get in touch, we will get back to you shortly</p>

      <form action="">
        <fieldset>
          <label for="name">*Full name:</label>
          <input type="text"  id="name" data-testid="test-contact-name" required>      

          <label for="email">*Email:</label>
          <input type="email" id="email" data-testid="test-contact-email" required>

          <label for="subject">*Subject:</label>
          <input type="text" id="subject" data-testid="test-contact-subject" required>
        </fieldset>

        <fieldset>
          <label for="message">*Message:</label>
          <textarea type="text" id="message" data-testid="test-contact-message" minlength="10" required></textarea>

          <label for="submit"></label>
          <input type="submit" id="submit" data-testid="test-contact-submit" class="submit-button" >

        </fieldset>

        
      </form>
    `

}

function renderErrorMessage(){
   contactPage.innerHTML=
   ` <section data-testid="test-contact-error-email" class="message js-error-message">
        <p class="pop-up-message">An error Occured!!</p>
        <div class="pop-up-button js-pop-up-button">Try again!</div>

      </section>
    `

}

function renderSuccessMessage(){
  contactPage.innerHTML=
  ` <section data-testid="test-contact-success" class="message js-success-message">
        <p class="pop-up-message">Thanks for your submission</p>
        <div class="pop-up-button js-pop-up-button">OK!</div>

      </section>
   `
}
renderContactForm()

document.getElementById("submit").addEventListener('click', ()=>{
  try {
    if(!emailInput.){
      console.log("error")
    } else {console.log('success')}
    
  } catch (error) {
    
  }
})