export default class ScrollEvent {
    constructor() {
        window.scrollObj = {
            st: 0,
            ud: 0
        };
        window.onscroll = this.widnowOnScroll;
    }

    widnowOnScroll() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollObj.st - scroll < 0) {
            scrollObj.ud = -1;
        } else if (scrollObj.st - scroll > 0) {
            scrollObj.ud = 1;
        } else {
            scrollObj.ud = 0;
        }
        scrollObj.st = scroll;
    }
}
