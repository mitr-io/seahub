(function(e){var t=e.django||(e.django={});t.pluralidx=function(e){return e==1?0:1},t.gettext=function(e){return e},t.ngettext=function(e,t,n){return n==1?e:t},t.gettext_noop=function(e){return e},t.pgettext=function(e,t){return t},t.npgettext=function(e,t,n,r){return r==1?t:n},t.interpolate=function(e,t,n){return n?e.replace(/%\(\w+\)s/g,function(e){return String(t[e.slice(2,-2)])}):e.replace(/%s/g,function(e){return String(t.shift())})},t.formats={DATETIME_FORMAT:"j N Y H:i:s",DATETIME_INPUT_FORMATS:["%d/%m/%Y %H:%M:%S","%d/%m/%Y %H:%M","%d/%m/%y %H:%M:%S","%d/%m/%y %H:%M","%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d"],DATE_FORMAT:"j N Y",DATE_INPUT_FORMATS:["%d/%m/%Y","%d/%m/%y","%Y-%m-%d"],DECIMAL_SEPARATOR:",",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j \\d\\e F",NUMBER_GROUPING:"3",SHORT_DATETIME_FORMAT:"d/m/Y H:i",SHORT_DATE_FORMAT:"d/m/Y",THOUSAND_SEPARATOR:".",TIME_FORMAT:"H:i:s",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},t.get_format=function(e){var n=t.formats[e];return typeof n=="undefined"?e:n},e.pluralidx=t.pluralidx,e.gettext=t.gettext,e.ngettext=t.ngettext,e.gettext_noop=t.gettext_noop,e.pgettext=t.pgettext,e.npgettext=t.npgettext,e.interpolate=t.interpolate,e.get_format=t.get_format})(this);