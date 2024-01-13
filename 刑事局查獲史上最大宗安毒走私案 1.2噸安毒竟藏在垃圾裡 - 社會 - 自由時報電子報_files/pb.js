// AdserverX
window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
(function () {
    if (window.googletag !== undefined) {
        var src_url = "https://adx.c.appier.net/pb/0wHT9JDiP3SORJx/pb.bid?acid=nQNzA0edA-ONUWrQdKqiZQ&haid=Hac9Br3U&hzids=WhueW9Op,HtuJ9M-Q,WtIF930Q,WhI5m9Op,WtCT930Q,mh9e9ro1,WhzQmzOp,Htu59M-Q";
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (navigator?.userAgentData) {
            navigator.userAgentData.getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
            ]).then((ua) => {
                high_entropy_values = new URLSearchParams({
                    model: ua.model,
                    os: ua.platform,
                    osv: ua.platformVersion
                }).toString();
                script.src = src_url + "&" + high_entropy_values;
                document.getElementsByTagName("head")[0].appendChild(script);
            });
        } else {
            script.src = src_url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    }
})();
