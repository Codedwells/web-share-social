"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const facebook = document.getElementById('facebook');
const linkedin = document.getElementById('linkedIn');
const twitter = document.getElementById('twitter');
class Wsshare {
    handleShare({ URL, Message }) {
        Wsshare.url = URL;
        Wsshare.message = Message.replace(/ /g, '%20');
    }
}
_a = Wsshare;
Wsshare.url = '';
Wsshare.message = '';
Wsshare.shareNow = (e) => __awaiter(void 0, void 0, void 0, function* () {
    let target = e === null || e === void 0 ? void 0 : e.target;
    if (target.id === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${_a.url}&quote=${_a.message}`, '_blank');
    }
    else if (target.id === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${_a.message}&url=${_a.url}`, '_blank');
    }
    else {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${_a.url}&title=${_a.message}=${_a.message}`, '_blank');
    }
});
var share = new Wsshare();
share.handleShare({
    URL: 'http://boostctr.eu-4.evennode.com',
    Message: 'Check out the awesome tips here',
});
facebook === null || facebook === void 0 ? void 0 : facebook.addEventListener('click', Wsshare.shareNow);
linkedin === null || linkedin === void 0 ? void 0 : linkedin.addEventListener('click', Wsshare.shareNow);
twitter === null || twitter === void 0 ? void 0 : twitter.addEventListener('click', Wsshare.shareNow);
