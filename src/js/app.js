'use strict';

import preview from "../parts/preview/preview.js"
import modal from "../parts/modal/modal.js";
import timer from "../parts/promotion/timer.js";

document.addEventListener("DOMContentLoaded", () => {
    preview();
    modal();
    timer('2023-02-02');

})
