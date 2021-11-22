{% extends "main.tpl" %}

{% block Title %}{{ super() }}404{% endblock %}

{% block Main %}
<div class="row">
    <div class="col text-center">
        <h1 class="text-danger">Oops !</h1>
        <h3>404 page is not found.</h3>
    </div>
</div>
{% endblock %}
