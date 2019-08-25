

$(document).ready(function () {

  ///////////////////////// WOW Animation ////////////////////////////////


  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: false,      // default
    }
  )
  wow.init();



  ///////////////////////// Modal ////////////////////////////////

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = [document.getElementById('myImg'), document.getElementById('myImg2'), document.getElementById('myImg3'), document.getElementById('myImg4')];
  var modalImg = document.getElementById("img01");
  for (var i = 0; i < 4; i++) {
    img[i].onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }


  ///////////////////////// sliders ////////////////////////////////

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
  }


})


///////////////////////// Accordion ////////////////////////////////

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

///////////////////////// Sliders Values ////////////////////////////////


$(".js-range-slider").ionRangeSlider({
  type: "single", 
  skin: "flat",
  min: 90,
  max: 500,
  from: 285,
  to: 500,
  grid: false,
  postfix: " m",
  prettify_enabled: true,
  prettify_separator: ","
});

$(".js-range-slider2").ionRangeSlider({
  type: "single",
  skin: "flat",
  min: 3000,
  step:1000,
  max: 1000000,
  from: 300000,
  to: 1000000,
  grid: false,
  postfix: " EGP",
  prettify_enabled: true,
  prettify_separator: ","
});

var rangeslider = document.getElementById("sliderRange"); 
var output = document.getElementById("value"); 
output.innerHTML = rangeslider.value; 
  
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 
} 

var x = document.getElementById("myRange");
document.getElementById("value2").innerHTML =x;

x.oninput = function() { 
  document.getElementById("value2").innerHTML = this.value; 
  } 

/////////////////// Custom Drop Down ////////////////////


function cusDD(select, style) {
  var ddstyle = "";
  style == "slick dark"
    ddstyle = "cusDD_slick_d";
 
  for (var i = 0; i < $(select).length; i++) {
    var curr = $($(select)[i]);
    
    //Replace select with div
    curr.addClass(ddstyle+" cusDD").changeElementType("div");
    
    //put drop downs in a container
    //Replace options with divs
    curr = $($(select)[i]);
    curr.find("option").wrapAll("<div class='cusDD_options' />");
    curr.find("option").addClass("cusDD_opt").each(function() {
      $(this).changeElementType("div");
    });
    
    //Add selector and drop down
    curr.prepend("<div class='cusDD_select'><div class='cusDD_arrow'></div></div>");
    
    //Add default option
    var def = (curr.find("div[selected='selected']").length >= 1) ? $(curr.find("div[selected='selected']")) : $(curr.find(".cusDD_opt")[0]);
    curr.find(".cusDD_select").prepend(def.text());
    
  } //End for loop

  $(document).click(function() {
    $(".cusDD_options").slideUp(200);
    $(".cusDD_arrow").removeClass("active");
  })
  
  $(select).click(function(e) {
    e.stopPropagation();
    $(this).find(".cusDD_options").slideToggle(200);
    $(this).find(".cusDD_arrow").toggleClass("active");
  })
  $(".cusDD_opt").click(function() {
    $($(this).parent()).siblings(".cusDD_select").contents()[0].nodeValue = $(this).text();
    $(this).parent().find(".cusDD_opt").removeAttr("selected");
    $(this).attr("selected", "selected");
  });

  } // End function)

(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    };
})(jQuery);

/* Call the cusDD function on any select elements by ID or Class */
$(document).ready(function() {
  cusDD("#select2", "slick dark");
  cusDD("#select3", "slick light");
});



