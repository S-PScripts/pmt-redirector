// ==UserScript==
// @name         PDF Redirector (PMT + SaveMyExams)
// @namespace    https://physicsandmathstutor.com/
// @version      1.4
// @description  Redirect encoded PDF viewer URLs to direct PDF file links (PMT & SaveMyExams, iframe-safe)
// @match        *://www.physicsandmathstutor.com/pdf-pages/*
// @match        *://physicsandmathstutor.com/pdf-pages/*
// @match        *://www.savemyexams.com/*/past-papers/paper/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Use top window if embedded
    const redirectWindow = (window.top !== window.self) ? window.top : window;

    try {
        const url = new URL(redirectWindow.location.href);
        const encodedPDF = url.searchParams.get('pdf');

        if (!encodedPDF) return;

        const decodedPDF = decodeURIComponent(encodedPDF);

        // Prevent redirect loops
        if (decodedPDF.endsWith('.pdf')) {
            console.log('✅ Redirecting to:', decodedPDF);
            redirectWindow.location.replace(decodedPDF);
        }
    } catch (err) {
        console.error('PDF redirector failed:', err);
    }
})();
