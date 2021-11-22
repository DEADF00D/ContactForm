{% extends "html.tpl" %}

{% block Body %}
<div class="container-fluid">
    <div class="row my-5">
        <div class="col col-sm-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
            <div class="row my-5">
                <div class="col">
                    {% block Main %}{% endblock %}
                </div>
            </div>
            <div class="row my-5">
                <div class="col text-center">
                    <small class="text-muted mb-3">Maurice-Michel Didelot © 2021 - Powered by <a href="https://cform.rac-0.fr/">cform.rac-0.fr</a></small><br/><br/>
                    <a href="https://www.iubenda.com/privacy-policy/40666792" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
