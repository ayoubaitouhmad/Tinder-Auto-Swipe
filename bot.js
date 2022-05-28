// ==UserScript==
// @name         TinderAutoSwipe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tinder.com/app/recs
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tinder.com
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {

        let interval = 100;
        let showSuperLikeModalEl = true;
        'use strict';
        setInterval(() => {
            let swipeBtnEl = $('[data-testid=gamepadLike]');
            let sendSuperLikeModalEl = $('[data-testid=modal]');
            if (swipeBtnEl.length) {
                swipeBtnEl.trigger('click');
            } else {
                interval += 100;
                if (interval === 5000) {
                    location.reload();
                }
            }

            if (sendSuperLikeModalEl.length) {
                sendSuperLikeModalEl.css({
                    'display' : 'none'
                });
                sendSuperLikeModalEl.siblings('span').css({
                    'display' : 'none'
                });


            }


        }, interval);




    // Your code here...
})();
