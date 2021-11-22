{% extends "main.tpl" %}

{% block Title %}{{ super() }}form not found{% endblock %}

{% block Script %}
{{ super() }}
<script type="text/javascript">
    gtag('send', 'event', 'submit', 'notfound', '{{ Token }}');
</script>
{% endblock %}

{% block Main %}
<div class="row mb-5">
    <div class="col text-center">
        <h1 class="text-danger">Oops !</h1>
        <h3>This form does not exist.</h3>
    </div>
</div>
<div class="row">
    <div class="col text-center">
        <p>You are trying to submit a form that does not exist.<br/>If you are the website owner, please create it:</p>
        <a href="/" class="btn btn-primary btn-lg mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Create a new form
        </a>
    </div>
</div>
{% endblock %}
