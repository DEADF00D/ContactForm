{% extends "main.tpl" %}

{% block Title %}{{ super() }}500{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1 class="text-danger">Oops !</h1>
        <h3>Something went wrong on our side.</h3>
    </div>
</div>
<div class="row">
    <div class="col text-center">
        <p>Please try to contact support:</p>
    </div>
</div>
{% endblock %}
