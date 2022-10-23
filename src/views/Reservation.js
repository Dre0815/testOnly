import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReservationDetails from "views/ReservationDetails.js";
import ClientDetails from "views/ClientDetails.js";
import $ from 'jquery';
import css from 'assets/scss/css.scss';

$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
  
	activeTab.show(); 
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(350, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(10).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(10).fadeIn(150);
				
			});
		});
	});
	
}); 
 
function tabDetails() {
  return (
   <Container fluid>
      <Row>
          <Col md="12"> 
            <Card.Header> 
                  <section class="wrapper">
                    <ul class="tabs">
                      <li class="active">Reservation Details</li>
                      <li>Client Details</li>
                    </ul>

                    <ul class="tab__content">
                      <li class="active">
                        <div class="content__wrapper">
                        <ReservationDetails />
                        </div>
                      </li>
                      <li>
                        <div class="content__wrapper">
                          <ClientDetails />
                        </div>
                      </li>                      
                    </ul>
                  </section>
            </Card.Header>
        </Col>
      </Row>
    </Container> 
  );
}

export default tabDetails;
