"use strict";
const facebook = document.getElementById('facebook');
const linkedin = document.getElementById('linkedIn');
const twitter = document.getElementById('twitter');
const handleShare = (e) => {
    if (e) {
        let target = e.target;
        console.log(target.id);
    }
};
facebook === null || facebook === void 0 ? void 0 : facebook.addEventListener('click', handleShare);
linkedin === null || linkedin === void 0 ? void 0 : linkedin.addEventListener('click', handleShare);
twitter === null || twitter === void 0 ? void 0 : twitter.addEventListener('click', handleShare);
