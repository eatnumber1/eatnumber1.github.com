/*
 * jQuery YQL plugin
 *
 * Copyright (c) 2010 Gabriel Falcão
 * Copyright (c) 2010 Lincoln de Sousa
 * licensed under MIT license.
 *
 * http://github.com/gabrielfalcao/jquery-yql/raw/master/license.txt
 *
 * Version: 0.3.0
 */
!function(r){r.extend({_prepareYQLQuery:function(e,a){return r.each(a,function(a){var t="#{"+a+"}",n=r.trim(this);for(n.match(/^[0-9]+$/)||(n='"'+n+'"');e.search(t)>-1;)e=e.replace(t,n);var t="@"+a,n=r.trim(this);for(n.match(/^[0-9]+$/)||(n='"'+n+'"');e.search(t)>-1;)e=e.replace(t,n)}),e},yql:function(e){var a=this,t=null,n=null;"object"==typeof arguments[1]?(e=a._prepareYQLQuery(e,arguments[1]),t=arguments[2],n=arguments[3]):"function"==typeof arguments[1]&&(t=arguments[1],n=arguments[2]);var u=null!=t,s={url:"http://query.yahooapis.com/v1/public/yql",dataType:"jsonp",success:t,async:u,data:{q:e,format:"json",env:"store://datatables.org/alltableswithkeys",callback:"?"}};return n&&(s.error=n),r.ajax(s),a.toReturn}})}(jQuery);