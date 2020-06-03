/* FIXED MENU */

$(document).ready(function() {
    var menu = $(".head-menu");
    var header = $(".lang-panel").height();
    var foot = $("footer");
    var width = $(window).width();

    if (document.body.offsetHeight > window.innerHeight) {
        foot.removeClass("fix-foot");
    } else {
        foot.addClass("fix-foot");
    }

    $(window).scroll(function() {
        if(width > 813) {
            if($(this).scrollTop() > header) {
                menu.addClass("fixed");
                if(width > 1099) {
                    $("main").css("margin-top", "120px");
                } else if (width > 813){
                    $("main").css("margin-top", "105px");
                }
            } else {
                menu.removeClass("fixed");
                $("main").css("margin-top", "0");
            }
        }
    });

    $(window).resize(function() {
        var width = $(window).width();

        if (document.body.offsetHeight > window.innerHeight) {
            foot.removeClass("fix-foot");
        } else {
            foot.addClass("fix-foot");
        }

        $(window).scroll(function() {
            if(width > 813) {
                if($(this).scrollTop() > header) {
                    menu.addClass("fixed");
                    if(width > 1099) {
                        $("main").css("margin-top", "120px");
                    } else if (width > 813){
                        $("main").css("margin-top", "105px");

                    }/* else if(width > 480) {
                        $("main").css("margin-top", "85px");
                    } else {
                        $("main").css("margin-top", "70px");
                    }*/
                } else {
                    menu.removeClass("fixed");
                    $("main").css("margin-top", "0");
                }
            } else {
                menu.removeClass("fixed");
                $("main").css("margin-top", "0");
            }
        });
    });

});

/* prodMenu*/

$(document).ready(function() {
    $(function(){
      $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top,
            check = $("#hidden-menu"),
            width = $(window).width();

        $(check).removeAttr("checked");
        if (width < 813) {
            $('html, body').animate({scrollTop: dn}, 600);
        } else {
            $('html, body').animate({scrollTop: dn-140}, 600);
        }
      });
    });
 });

/* goToTop */

$(document).ready(function() {
    $('body').append('<div class="toTop"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $(".toTop").addClass('active');
        } else {
            $(".toTop").removeClass('active');
        }
    });

    $(".toTop").click(function() {
        $("body, html").animate({scrollTop: 0}, 1000);
    });

    $(".contact-content").addClass('in');
});

/* NO COPY */
/*
function nocopy(event) {
    var event = event || window.event;
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; }
    return false;
}

document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;
*/

/* FORM */

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/form.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Дякуємо за звернення! Ми зв'яжемось з Вами найближчим часом.");
			$("#form").trigger("reset");
		});
		return false;
	});

});

/* banner slider */

var slideIndex = 1;
var slides = document.getElementsByClassName("slider-content");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

var intervalId = setInterval(nextSlide, 4000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function nextSlide(){
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

	slides[slideIndex-1].style.display = 'none';
    dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");

	slideIndex += 1;
    if (slideIndex > slides.length)
        slideIndex = 1;
    if (slideIndex < 1)
        slideIndex = slides.length;

	slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";
}

/* MENU */

var curItem = 0;
var items = document.getElementsByClassName("prod-menu_item");
var products = document.getElementsByClassName("prod-list");
showItem(curItem);

function showCurItem(n) {
    showItem(curItem = n);
}

function showItem(n) {
    for (var i = 0 ; i < items.length; i++) {
        items[i].className = items[i].className.replace(" active", "");
    }

    items[n].className += " active";
    showProduct(n);
}


function showProduct(n) {
    for (var i = 0 ; i < products.length; i++) {
        products[i].className = products[i].className.replace(" in", "");
        if (i != curItem) {
            products[i].style.display = "none";
        } else {
            products[i].style.display = "flex";
        }
    }
    products[n].className += " in";
}
