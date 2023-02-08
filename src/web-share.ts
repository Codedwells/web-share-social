const container = document.createElement('div');
container.classList.add(
	'absolute',
	'flex',
	'justify-center',
	'items-center',
	'lg:block',
	'bottom-0',
	'left-0',
	'right-0',
	'lg:left-0',
	'lg:bottom-[20%]',
	'lg:w-[60px]',
	'h-[48px]',
	'lg:h-[144px]'
);

container.innerHTML = `
<div
				class="bg-[#3b5998] p-2 flex justify-center flex-1 lg:w-[50px] cursor-pointer lg:block transition-all lg:hover:w-[60px]"
				id="facebook"
			>
				<svg
					id="facebook"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 32 32"
					version="1.1"
					role="img"
					aria-labelledby="at-svg-facebook-4"
					class="at-icon at-icon-facebook"
					style="fill: rgb(255, 255, 255); width: 32px; height: 32px"
					title="Facebook"
					alt="Facebook"
				>
					<title id="at-svg-facebook-4">Facebook</title>
					<g>
						<path id="facebook"
							d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
							fill-rule="evenodd"
						></path>
					</g>
				</svg>
			</div>
			<div
				id="linkedIn"
				class="bg-[#0077b5] flex justify-center flex-1 lg:w-[50px] cursor-pointer transition-all lg:block lg:hover:w-[60px] text-white p-2"
			>
				<svg
					id="linkedIn"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 32 32"
					version="1.1"
					role="img"
					aria-labelledby="at-svg-linkedin-6"
					class="at-icon at-icon-linkedin"
					style="fill: rgb(255, 255, 255); width: 32px; height: 32px"
					title="LinkedIn"
					alt="LinkedIn"
				>
					<title id="at-svg-linkedin-6">LinkedIn</title>
					<g>
						<path id="linkedIn"
							d="M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z"
							fill-rule="evenodd"
						></path>
					</g>
				</svg>
			</div>
			<div
				id="twitter"
				class="bg-[#1da1f2] flex justify-center flex-1 lg:w-[50px] cursor-pointer transition-all lg:block lg:hover:w-[60px] p-2"
			>
				<svg
					id="twitter"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 32 32"
					version="1.1"
					role="img"
					aria-labelledby="at-svg-twitter-5"
					class="at-icon at-icon-twitter"
					style="fill: rgb(255, 255, 255); width: 32px; height: 32px"
					title="Twitter"
					alt="Twitter"
				>
					<title id="at-svg-twitter-5">Twitter</title>
					<g>
						<path id="twitter"
							d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
							fill-rule="evenodd"
						></path>
					</g>
				</svg>
			</div>
`;

document.body.appendChild(container);

class Wsshare {
	static url: string = '';
	static message: string = '';

	public handleShare({ URL, Message }: { URL: string; Message: string }) {
		Wsshare.url = URL;
		Wsshare.message = Message.replace(/ /g, '%20');
	}

	public static shareNow = async (e: MouseEvent): Promise<void> => {
		let target = e?.target as HTMLElement;

		if (target.id === 'facebook') {
			window.open(
				`https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.message}`,
				'_blank'
			);
		} else if (target.id === 'twitter') {
			window.open(
				`https://twitter.com/intent/tweet?text=${this.message}&url=${this.url}`,
				'_blank'
			);
		} else {
			window.open(
				`https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.message}=${this.message}`,
				'_blank'
			);
		}
	};
}

var share = new Wsshare();

share.handleShare({
	URL: 'http://boostctr.eu-4.evennode.com',
	Message: 'Check out the awesome tips here',
});

setTimeout(() => {
	const facebook: HTMLElement | null = document.getElementById('facebook');
	const linkedin: HTMLElement | null = document.getElementById('linkedIn');
	const twitter: HTMLElement | null = document.getElementById('twitter');

	facebook?.addEventListener('click', Wsshare.shareNow);
	linkedin?.addEventListener('click', Wsshare.shareNow);
	twitter?.addEventListener('click', Wsshare.shareNow);
}, 3000);
