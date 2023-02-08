const facebook: HTMLElement | null = document.getElementById('facebook');
const linkedin: HTMLElement | null = document.getElementById('linkedIn');
const twitter: HTMLElement | null = document.getElementById('twitter');

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

facebook?.addEventListener('click', Wsshare.shareNow);
linkedin?.addEventListener('click', Wsshare.shareNow);
twitter?.addEventListener('click', Wsshare.shareNow);
