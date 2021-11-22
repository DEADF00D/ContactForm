{% extends "main.tpl" %}

{% block Title %}{{ super() }}You're verified{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'submit', 'success', '{{ Token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1 class="text-success">You are now verified !</h1>
    </div>
</div>
<div class="row mb-3">
    <div class="col">
        <p class="text-center">You're email has been verified with success.<br/>You will soon receive your user contact form submissions.<br/><br/>Remember to setup it on your page like so:</p>
        <pre><code>&lt;form action="https://cform.rac-0.fr/f/{{ Token }}" method="POST"&gt;
    ...
&lt;/form&gt;</code></pre>
    </div>
</div>
<div class="row">
    <div class="col text-center">
        <h5>Thank you very much !</h5>
    </div>
</div>
{% endblock %}
