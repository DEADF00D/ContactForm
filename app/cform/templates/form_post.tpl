{% extends "main.tpl" %}

{% block Title %}{{ super() }}Submitting{% endblock %}

{% block Script %}
{{ super() }}
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
<script type="text/javascript">
function verifyCallback(response){
    document.querySelector("#tosubmit").submit();
}

function onloadCallback() {
    grecaptcha.render('captcha', {
        'sitekey' : '{{ Config.RECAPTCHA_SITE_KEY }}',
        'callback' : verifyCallback,
    });

    document.querySelector("#captcha div").style.cssText += 'text-align:center; display:inline;';
};

gtag('send', 'event', 'submit', 'captcha', '{{ Submission.form.token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1>Almost there...</h1>
        <h3>A little extra step.</h3>
    </div>
</div>
<div class="row">
    <div class="col">
        <form method="post" action="{{ url_for('form_submit', token = Submission.token) }}" id="tosubmit">
            <div id="captcha"></div>
            {% for v in Values %}
            <input hidden type="text" name="{{ v[0] }}" value="{{ v[1] }}" />
            {% endfor %}
        </form>
    </div>
</div>
{% endblock %}
