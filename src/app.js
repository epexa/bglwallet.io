document.addEventListener('DOMContentLoaded', () => {

	const $h1 = document.querySelector('h1');
	const $h1Text = $h1.innerText;

	const $h2 = document.querySelector('h2');
	const $h2Text = $h2.innerText;

	$h1.innerText = '';
	$h2.innerText = '';

	new Typed('h1', {
		strings: [ $h1Text ],
		showCursor: false,
		typeSpeed: 75,
		onComplete: () => {
			new Typed('h2', {
				strings: [ $h2Text ],
				showCursor: false,
				typeSpeed: 25,
				backSpeed: 0,
				backDelay: 3000,
				loop: true,
			});
		},
	});

});
