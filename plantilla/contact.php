<!DOCTYPE html>
<html lang="zxx"> 
	<?php include('components/head.php'); ?>
	<body class="defult-home">
		
		<div class="offwrap"></div>

		<!--Preloader start here-->
		<?php include('components/preloador.php'); ?>
		<!--Preloader area end here-->
			
		<!-- Main content Start -->
		<div class="main-content">

			<?php include('components/header.php'); ?>

			<!-- Breadcrumbs Start -->
			<div class="rs-breadcrumbs img6">
			    <div class="container">
			        <div class="breadcrumbs-inner">
			            <h1 class="page-title">
			               	Contactanos
			            </h1>
			            <ul class="breadcrumbs-area">
                           <li title="Go to konstruk">
                               <a class="active" href="index.php">Inicio</a>
                           </li>
                          <li>Contacto</li>
                       </ul>
			        </div>
			    </div>
			</div>
			<!-- Breadcrumbs End -->
		
			<!-- Contact Section Start https://www.google.com/maps/search/Calle+Derecho+de+organizaci%C3%B3n+%23260+esq.+Uni%C3%B3n+Col.+Diana+Laura+CP.+23084/@24.0805329-110.320771+17z/data=!3m1!4b1-->
			<div class="rs-contact contact-style6 pb-120 md-pb-80">
			    <div class="row no-gutters">
			    	<div class="col-lg-4">
			    		<div class="contact-map">
			    		    <iframe src="https://maps.google.com/maps?q=rstheme&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
			    		</div>
			    	</div>
			        <div class="col-lg-4">
        				<div class="contact-section">
                            <div class="contact-wrap">
                            	<div class="sec-title mb-60">
                            		<h2 class="title title4 ser-style4">Formulario de contacto</h2>
                            	</div>
                                <div id="form-messages"></div>
                                <form id="contact-form" method="post" action="https://devsdesign.net/products/html/konstruk/mailer.php">
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="name" name="name" placeholder="Ingresa tu nombre" required="">
                                            </div> 
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="email" name="email" placeholder="Ingresa tu correo electronico" required="">
                                            </div>   
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="phone" name="phone" placeholder="Ingresa tu numero celular" required="">
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="website" name="website" placeholder="Asunto del contacto" required="">
                                            </div>
                                            <div class="col-lg-12 mb-30">
                                                <textarea class="from-control" id="message" name="message" placeholder="Escribe tu mensaje" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="btn-part">                                            
                                            <div class="form-group mb-0">
                                                <input class="readon more submit sub-con" type="submit" value="Enviar">
                                            </div>
                                        </div> 
                                    </fieldset>
                                </form> 
                            </div>
                        </div>
			        </div>
			        <div class="col-lg-4 contact-project"></div>
			    </div>
			    <!-- Contact Icons Section End -->
			    <div class="rs-contact pt-120 md-pt-80">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-4 col-md-6 md-mb-30">
			                   <div class="contact-box">
			                       <div class="contact-icon">
			                           <img src="assets/images/contact/style1/icons/1.png" alt="images">
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a href="#">Direccion de oficina</a></h4>
			                           <p class="services-txt">Cl. Der. de organización #260 esq. Unión, Col. Diana L CP. 23084</p>
			                       </div>
			                   </div>
			                </div>
			                <div class="col-lg-4 col-md-6 sm-mb-30">
			                   <div class="contact-box">
			                       <div class="contact-icon">
			                           <img src="assets/images/contact/style1/icons/2.png" alt="images">
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a href="#">Email</a></h4>
			                           <span><a href="mailto:contacto@asiec.com.mx">contacto@asiec.com.mx</a><br><br></span>
			                       </div>
			                   </div>
			                </div>
			                <div class="col-lg-4 col-md-6">
			                   <div class="contact-box">
			                       <div class="contact-icon">
			                           <img src="assets/images/contact/style1/icons/3.png" alt="images">
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a href="#">Teléfono</a></h4>
			                           <span><a href="tel:(+52)589-8745">(+52) 612 688 24 10</a><br><br></span>
			                       </div>
			                   </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <!-- Contact Icons Section End -->
			</div>
			<!-- Contact Section End -->

		</div> 
		<!-- Main content End -->
	 
		<!-- Footer Start -->
		<?php include('components/footer.php'); ?>
		<!-- Footer End -->

		<!-- start scrollUp  -->
		<div id="scrollUp">
			<i class="fa fa-angle-up"></i>
		</div>
		<!-- End scrollUp  -->

		<!-- Search Modal Start -->
		<div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
		    <div class="modal-dialog modal-dialog-centered">
		        <div class="modal-content">
		            <div class="search-block clearfix">
		                <form>
		                    <div class="form-group">
		                        <input class="form-control" placeholder="Search Here..." type="text">
		                    </div>
		                </form>
		            </div>
		        </div>
		    </div>
		</div>
		<!-- Search Modal End -->

		<?php include('components/scripts.php'); ?>
	</body>
</html>