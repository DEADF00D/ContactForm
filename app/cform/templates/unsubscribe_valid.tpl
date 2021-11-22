{% extends "main.tpl" %}

{% block Title %}{{ super() }}Unsubscribe success !{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'unsubscribe', 'valid', '{{ Token }}');
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
        <p>No emails will be sent to you from now.</p>
    </div>
</div>
{% endblock %}
