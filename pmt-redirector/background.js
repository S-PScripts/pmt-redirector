chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    // Check if the "pdf" parameter exists
    const pdfParam = url.searchParams.get("pdf");
    if (pdfParam) {
      const decodedUrl = decodeURIComponent(pdfParam);
      return { redirectUrl: decodedUrl };
    }
  },
  { urls: ["*://www.physicsandmathstutor.com/pdf-pages/*"] },
  ["blocking"]
);
