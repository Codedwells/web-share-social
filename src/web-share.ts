const facebook: HTMLElement | null = document.getElementById('facebook');
const linkedin: HTMLElement | null = document.getElementById('linkedIn');
const twitter: HTMLElement | null = document.getElementById('twitter');

const handleShare = (e: MouseEvent): void => {
	if (e) {
        let target = e.target as  HTMLElement
		console.log(target.id)
	}
};


facebook?.addEventListener('click', handleShare);
linkedin?.addEventListener('click', handleShare);
twitter?.addEventListener('click', handleShare);

