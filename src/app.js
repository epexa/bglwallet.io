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

	const initPopper = (button, tooltip, placement) => {
		const $button = document.querySelector(button);
		const $tooltip = document.querySelector(tooltip);
		Popper.createPopper($button, $tooltip, {
			placement: placement,
		});
		[ 'mouseenter', 'focus' ].forEach((eventName) => $button.addEventListener(eventName, () => $tooltip.setAttribute('data-show', '')));
		[ 'mouseleave', 'blur' ].forEach((eventName) => $button.addEventListener(eventName, () => $tooltip.removeAttribute('data-show')));
	};

	// initPopper('#link-apple-store', '#qr-code-apple-store', 'right-start');
	initPopper('#link-google-play', '#qr-code-google-play', 'left-start');

});
