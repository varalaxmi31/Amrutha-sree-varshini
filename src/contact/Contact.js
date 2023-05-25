import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_scuga4e', 'template_hln3vrk', form.current, 'HyNNZUsXrOuTzh91e')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  };
  return (
    <div>
      {/* <section>
      <div class="inner-banner single-blog-banner">
        <img src="http://sspcp.com/images/banner-gallery.jpg" alt="banner-image" />
        <div class="container">
          <div class="caption">
            <h1>contact</h1>
          </div>
        </div>
      </div>
    </section> */}


<div className="contact py-5" id="contact">
   	 <div class="container">
		<div class="scn__title text-center">
		        	 <h2 class="primary-color pb-5 heading__font">Contact Us</h2>
		        	
		         </div>
   	 	     <div class="row">
   	 	 	

   	 	 	  <div class="col-lg-6 mb-4">
   	 	 	  	 <div class="contact__form" data-aos='fade-right' data-aos-duration='1500'>
   	 	 	  	 	  {/* <h3 class="primary__color my-4 heading__font">Contact</h3> */}

							  <form ref={form} onSubmit={sendEmail}>
   	 	 	  	 	  	  <div class="row">
   	 	 	  	 	  	  	 <div class="col-lg-6">
   	 	 	  	 	  	  	 	  <input type="name" name="name" class="w-100" placeholder="First Name" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-6">
   	 	 	  	 	  	  	 	  <input type="name" name="name" class="w-100" placeholder="Second Name" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="email" name="email" class="w-100" placeholder="Your Email" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="number" name="number" class="w-100" placeholder="Your Phone Number" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="text" name="text" class="w-100" placeholder="Your City" />
   	 	 	  	 	  	  	 </div>

   	 	 	  	 	  	  	 <div class="fome__btn text-center my-3">
   	 	 	  	 	  	  	 	  <button class="btn_submit">Submit</button>
   	 	 	  	 	  	  	 	   
   	 	 	  	 	  	  	 </div>

   	 	 	  	 	  	  </div>
   	 	 	  	 	  </form>
   	 	 	  	 </div>
   	 	 	  </div>

             
                   <div class="col-lg-6 mb-4" data-aos='fade-left' data-aos-duration='1500'>
   	 	 	  	 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.3056121521913!2d83.40032649999999!3d18.1036729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be547205ac835%3A0xc8285ff30fe9cb6f!2sAmrutha%20Sree%20varshini%20School%20Of%20M.A.D.!5e0!3m2!1sen!2sin!4v1682355964618!5m2!1sen!2sin" class="w-100" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
   	 	 	  </div>

                   </div>
   	 	 	  </div>


                   </div>



    
    </div>
  )
}

export default Contact
