{% extends "main.tpl" %}

{% block Title %}{{ super() }}Not get{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'submit', 'notget', '{{ Token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1 class="text-danger">Oops !</h1>
        <h3>Wrong setup 😢</h3>
    </div>
</div>
<div class="row">
    <div class="col">
        <p class="text-center">Form does exist but, your webpage do not redirect here using a <code>POST</code> request. Make sure your code follow this template:</p>
        <pre><code>&lt;form action="https://cform.rac-0.fr/f/{{ Token }}" method="POST"&gt;
    ...
&lt;/form&gt;</code></pre>
    </div>
</div>
{% endblock %}
