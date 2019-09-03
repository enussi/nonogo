// ==UserScript==
// @name          NonoGo
// @namespace
// @description	  Nono themed DuckDuckGo
// @author        enussi
// @homepage
// @include       http://duckduckgo.com/*
// @include       https://duckduckgo.com/*
// @include       http://*.duckduckgo.com/*
// @include       https://*.duckduckgo.com/*
// @run-at        document-start
// @version       0.1
// ==/UserScript==
(function() {var css = [
	".header-wrap--home, .header-wrap, .zcm__link.is-active {",
	"    border-color: var(--main-bg) !important;",
	"  }  ",
	"  ",
	" ",
	"  ",
	"  .search, .search--adv, .acp-wrap, .search__autocomplete, .zci.is-active, .tile, .is-stuck, .modal--region-filter .frm__input, .modal__header, .detail {",
	"    border: none !important;",
	"  }  ",
	"  ",
	"  .search, .search--adv, .tile {",
	"    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.2) !important;",
	"  }  ",
	"  ",
	" ",
	"  ",
	"  .svg .logo_homepage {",
	"        background-image: url(\"https://raw.githubusercontent.com/enussi/nonogo/master/nono_big.png\") !important ;",
	"    background-size: 200px;",
	"    width: 205px !important;",
	"}",
	"  ",
	"  .svg .header__logo {",
	"    background-image: url(\"https://raw.githubusercontent.com/enussi/nonogo/master/nono_small.png\") !important;",
	"  }  ",
	"",
	".onboarding-ed__arrow-teaser .onboarding-ed__arrow-teaser__arrow-wrapper .onboarding-ed__arrow-teaser__arrow {",
	"  height: 0px;",
	"  }",
	"",
	"  .onboarding-ed__arrow-teaser .onboarding-ed__arrow-teaser__arrow-wrapper {",
	"    height: 0px;",
	"  }  ",
	"  ",
	"  .onboarding-ed__arrow-teaser .onboarding-ed__arrow-teaser__alpinist{",
	"    height: 0px;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
