import React from 'react'
import './gallery.css';
import gall11 from "../images/gall11.png";
import gall22 from "../images/gall22.png";
import gall12 from "../images/gall12.png";
import gall13 from "../images/gall13.png";
import gall14 from "../images/gall14.png";
import gall15 from "../images/gall15.png";
import gall16 from "../images/gall16.png";
import gall18 from "../images/gall18.png";

const Gallery = () => {
  return (
    <div>
      {/* <section>
         <div class="inner-banner single-blog-banner">
            <img src="http://sspcp.com/images/banner-gallery.jpg" alt="banner-image" />
            <div class="container">
               <div class="caption">
                  <h1>Gallery </h1>
               </div>
            </div>
         </div>
      </section> */}


   <div class="gallery img-gallery-magnific py-5" id="gallery">
   	  <div class="container">
   	  	         <div class="scn__title text-center">
		        	 <h2 class="primary-color heading__font">GALLERY</h2>
		        	 
		         </div>
   	  	 <div class="tabs__scn">

   	  	 	 <ul class="nav nav-pills justify-content-center py-4" role="tablist">
			    <li class="nav-item">
			      <a class="nav-link active" data-bs-toggle="pill" href="#pictures">Shows</a>
			    </li>
			    <li class="nav-item">
			      <a class="nav-link" data-bs-toggle="pill" href="#videos">Kids workshops</a>
			    </li>
				<li class="nav-item">
			      <a class="nav-link" data-bs-toggle="pill" href="#students">Students</a>
			    </li>
				<li class="nav-item">
			      <a class="nav-link" data-bs-toggle="pill" href="#studytour">Study Tour</a>
			    </li>
			  </ul>

			 
			  <div class="tab-content">
			    <div id="pictures" class="container tab-pane active"><br />
			       <div class="row">

				   <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall11} title="img">
							<img src={gall11} class="w-100" alt="img" />
					 </a>
			       	 </div>
						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall22}  title="img">
							<img src={gall22}  class="w-100" alt="img" />
					 </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall12}  title="img">
							<img src={gall12}  class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 
			       	 <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall13}  title="img">
							<img src={gall13}  class="w-100" alt="img" />
					 </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall14}  title="img">
							<img src={gall14}  class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall15} title="img">
							<img src={gall15} class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall16} title="img">
							<img src={gall16} class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href={gall18} title="img">
							<img src={gall18} class="w-100" alt="img" />
					 </a>
			       	 </div>

			       
			       </div>
			    </div>
			    <div id="videos" class="videos_tab container tab-pane fade"><br />
			       <div class="row">
				   <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	  <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/Kids/kids_a/1s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/Kids/kids_a/1s.jpg" class="w-100" alt="img" />
					  </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	  <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/Kids/kids_a/3s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/Kids/kids_a/3s.jpg" class="w-100" alt="img" />
					  </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	  <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/Kids/kids_a/8s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/Kids/kids_a/8s.jpg" class="w-100" alt="img" />
					  </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	  <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/Kids/kids_a/9s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/Kids/kids_a/9s.jpg" class="w-100" alt="img" />
					  </a>
			       	 </div>
			       </div>
			    </div>

				<div id="students" class="students_tab container tab-pane"><br />
			       <div class="row">

				   <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="https://lh3.googleusercontent.com/p/AF1QipNsLtBmWY464NhjHS0Wc1GurAnCxAHBJXIu50-n=w960-h960-n-o-v1" title="img">
							<img src="https://lh3.googleusercontent.com/p/AF1QipNsLtBmWY464NhjHS0Wc1GurAnCxAHBJXIu50-n=w960-h960-n-o-v1" class="w-100" alt="img" />
					 </a>
			       	 </div>
						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/annualshows/2015/1s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/annualshows/2015/1s.jpg" class="w-100" alt="img" />
					 </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="https://lh3.googleusercontent.com/p/AF1QipNyMKCEqtc2PkEYVlUlb1eYM9Xw4H-qE0ac_U3l=w960-h960-n-o-v1" title="img">
							<img src="https://lh3.googleusercontent.com/p/AF1QipNyMKCEqtc2PkEYVlUlb1eYM9Xw4H-qE0ac_U3l=w960-h960-n-o-v1" class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 
			       	 <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="https://lh3.googleusercontent.com/p/AF1QipM1Bdu_PIFkMUYhpprq9jEoEAyiHp_DdET9sNuR=w960-h960-n-o-v1" title="img">
							<img src="https://lh3.googleusercontent.com/p/AF1QipM1Bdu_PIFkMUYhpprq9jEoEAyiHp_DdET9sNuR=w960-h960-n-o-v1" class="w-100" alt="img" />
					 </a>
			       	 </div>
						</div>
						</div> 

						<div id="studytour" class="studytour_tab container tab-pane"><br />
			       <div class="row">

				   <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/studytour/2019/2s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/studytour/2019/2s.jpg" class="w-100" alt="img" />
					 </a>
			       	 </div>
						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/studytour/2019/6s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/studytour/2019/6s.jpg" class="w-100" alt="img" />
					 </a>
			       	 </div>

						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/studytour/2019/4s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/studytour/2019/4s.jpg" class="w-100" alt="img" />
					 </a>
			       	 </div>
						<div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
			       	 <a class="image-popup-vertical-fit" href="http://sspcp.com/images/gallery/studytour/2019/3s.jpg" title="img">
							<img src="http://sspcp.com/images/gallery/studytour/2019/3s.jpg" class="w-100" alt="img" />
					 </a>
			       	 </div>
						</div>
						</div> 



			  </div>
</div>
</div>
   	  	 </div>
   	  </div>
 

 
                                  
				
  )
}

export default Gallery
