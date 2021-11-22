{% extends "main.tpl" %}

{% block Title %}{{ super() }}You're already verified{% endblock %}

{% block Main %}
<div class="row">
    <div class="col text-center">
        <h1 class="text-danger">Oops !</h1>
        <h3>Your email is not found / already verified.</h3>
    </div>
</div>
{% endblock %}
