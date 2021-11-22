{% extends "main.tpl" %}

{% block Title %}{{ super() }}Form submitted !{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'submit', 'success', '{{ Token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1 class="text-success">Success !</h1>
    </div>
</div>
<div class="row mb-3">
    <div class="col text-center">
        <p>Your form has been sent to website administrator.<br/>We will get back to you soon.</p>
    </div>
</div>
<div class="row">
    <div class="col text-center">
        <h5>Thank you very much !</h5>
    </div>
</div>
{% endblock %}
