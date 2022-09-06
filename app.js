//HIDES E SHOWS-----------------------------------
$(document).ready(function() {
	$('#item4').hide()
	$('#item5').hide()
	$('#item6').hide()
	$('#item7').hide()
	$('#item8').hide()
	$('#item9').hide()
//------------------------------------------------
	$('#ver-menos').hide()
	$('#ver-mais').show()
//------------------------------------------------
	$('#html-info').hide()
	$('#css-info').hide()
	$('#javascript-info').hide()
	$('#jquery-info').hide()
	$('#git-info').hide()
	$('#reactjs-info').hide()
//------------------------------------------------
	$('.navBar').hide()

//------------------------------------------------
//----------------- FUNÇÕES ----------------------
//------------------------------------------------

	$('#ver-mais').click(function() {
		$('#item9').toggle()
		$('#item4').toggle()
		$('#item5').toggle()
		$('#item6').toggle()
		$('#item7').toggle()
		$('#item8').toggle()

		$('#ver-menos').show()
		$('#ver-mais').hide()
	})
//------------------------------------------------
	$('#ver-menos').click(function() {
		$('#item9').toggle()
		$('#item4').toggle()
		$('#item5').toggle()
		$('#item6').toggle()
		$('#item7').toggle()
		$('#item8').toggle()


		$(this).hide()
		$('#ver-mais').show()
	})
//------------------------------------------------
	$('#item-html').mouseenter(function() {
		$('#html-info').fadeIn(0050);
	});
	$('#item-html').mouseleave(function() {
		$('#html-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('#item-css').mouseenter(function() {
		$('#css-info').fadeIn(0050);
	});
	$('#item-css').mouseleave(function() {
		$('#css-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('#item-javascript').mouseenter(function() {
		$('#javascript-info').fadeIn(0050);
	});
	$('#item-javascript').mouseleave(function() {
		$('#javascript-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('#item-jquery').mouseenter(function() {
		$('#jquery-info').fadeIn(0050);
	});
	$('#item-jquery').mouseleave(function() {
		$('#jquery-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('#item-git').mouseenter(function() {
		$('#git-info').fadeIn(0050);
	});
	$('#item-git').mouseleave(function() {
		$('#git-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('#item-reactjs').mouseenter(function() {
		$('#reactjs-info').fadeIn(0050);
	});
	$('#item-reactjs').mouseleave(function() {
		$('#reactjs-info').fadeOut(0050);
	});
	//------------------------------------------------
	$('.aba-navBar').click(function() {
		$('.navBar').toggle('fast')
	})

	//------------------------------------------------
	//------------------------------------------------
	//------------------------------------------------
	
})



$('.navBar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
})

$('.navBar2 a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
})

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
const saida = document.querySelector(".saida")

function digitação(texto, contador) {
	
	if(contador < texto.length) {

		setTimeout(()=> {

			saida.textContent += texto.charAt(contador);
			contador++;
			digitação(texto, contador);
		} , 115)
	}
}

digitação("//Fiz esse portfólio com muito carinho...", 0);

//------------------------------------------------
//-------------------ANIMAÇÕES--------------------
//------------------------------------------------

const debounce = function(func, wait, immediate) {
	let Timeout;
	return function(...args) {
		const context = this;
		const later = function() {
			Timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !Timeout;
		clearTimeout(Timeout);
		Timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll() {
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
	target.forEach(function(element) {
		if((windowTop) > element.offsetTop) {
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
	})
}

animeScroll();

if(target.length) {
	window.addEventListener('scroll', debounce(function() {
		animeScroll();
	}, 200));
}