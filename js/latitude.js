function doLatitude(e,r){$.param({user:e,type:"json"});$.yql("SELECT features.properties.reverseGeocode FROM json WHERE url=@url",{url:"http://www.google.com/latitude/apps/badge/api?"+$.param({user:e,type:"json"})},function(e){e=e.query.results,null!=e&&r.replaceWith(e.json.features.properties.reverseGeocode)},function(e,t,o){r.replaceWith(t+": "+o)})}