(function () {
  const measurementId = document.currentScript.dataset.gaMeasurementId;
  const mainSiteHostname = 'tradedutyrefund.com';
  let analyticsLoaded = false;
  let analyticsAccepted = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied'
  });

  function getMainSiteUrl(anchor) {
    const url = new URL(anchor.href, window.location.href);
    return url.hostname === mainSiteHostname ? url : null;
  }

  function setCtaAttribution(enabled) {
    document.querySelectorAll('a[href]').forEach(function (anchor) {
      if (!enabled) {
        if (anchor.dataset.gaOriginalHref) {
          anchor.href = anchor.dataset.gaOriginalHref;
          delete anchor.dataset.gaOriginalHref;
        }
        return;
      }

      const originalHref = anchor.dataset.gaOriginalHref || anchor.href;
      const url = new URL(originalHref, window.location.href);
      if (url.hostname !== mainSiteHostname) {
        return;
      }

      if (!anchor.dataset.gaOriginalHref) {
        anchor.dataset.gaOriginalHref = anchor.getAttribute('href');
      }

      url.searchParams.set('source_page', window.location.pathname);
      anchor.href = url.href;
    });
  }

  function enableAnalytics() {
    analyticsAccepted = true;
    setCtaAttribution(true);
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });

    if (analyticsLoaded) {
      return;
    }

    analyticsLoaded = true;
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  function disableAnalytics() {
    analyticsAccepted = false;
    setCtaAttribution(false);
    window.gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
  }

  document.addEventListener('click', function (event) {
    if (!analyticsAccepted || !(event.target instanceof Element)) {
      return;
    }

    const anchor = event.target.closest('a[href]');
    if (!anchor) {
      return;
    }

    const destination = getMainSiteUrl(anchor);
    if (!destination) {
      return;
    }

    if (!anchor.dataset.gaOriginalHref) {
      anchor.dataset.gaOriginalHref = anchor.getAttribute('href');
    }

    destination.searchParams.set('source_page', window.location.pathname);
    anchor.href = destination.href;

    const ctaText = anchor.innerText.trim().replace(/\s+/g, ' ');
    if (!ctaText) {
      return;
    }

    window.gtag('event', 'cta_click', {
      cta_text: ctaText,
      cta_url: destination.pathname,
      source_page: window.location.pathname,
      transport_type: 'beacon'
    });
  });

  CookieConsent.run({
    mode: 'opt-in',
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        autoClear: {
          cookies: [
            {
              name: /^_ga/
            }
          ]
        }
      }
    },
    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'Your privacy choices',
            description: 'We use Google Analytics to understand how visitors use this blog. Analytics is only enabled if you allow it.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject analytics',
            showPreferencesBtn: 'Manage preferences'
          },
          preferencesModal: {
            title: 'Cookie preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject analytics',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close',
            sections: [
              {
                title: 'Necessary',
                description: 'Necessary storage supports the cookie preference tool and cannot be disabled.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Analytics',
                description: 'Allow Google Analytics to measure blog visits and clicks on links to tradedutyrefund.com.',
                linkedCategory: 'analytics'
              }
            ]
          }
        }
      }
    },
    onConsent: function () {
      if (CookieConsent.acceptedCategory('analytics')) {
        enableAnalytics();
      } else {
        disableAnalytics();
      }
    },
    onChange: function () {
      if (CookieConsent.acceptedCategory('analytics')) {
        enableAnalytics();
      } else {
        disableAnalytics();
      }
    }
  });
})();
