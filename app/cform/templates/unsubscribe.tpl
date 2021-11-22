{% extends "main.tpl" %}

{% block Title %}{{ super() }}unsubscribe{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'unsubscribe', 'email', '{{ Token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1>Unsubscribe</h1>
        <h3>From now, we'll stop to send you emails.</h3>
    </div>
</div>
<div class="row mb-4">
    <div class="col text-center">
        <form method="post">
            <button type="submit" name="valid" value="true" class="btn btn-success btn-lg">Please, stop to send me emails</button>
        </form>
    </div>
</div>
{% endblock %}
