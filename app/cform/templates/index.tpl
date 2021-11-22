{% extends "html.tpl" %}

{% block Title %}{{ super() }}Home{% endblock %}

{% block Head %}
{{ super() }}
<link rel='icon' type='image/png' href='/front/favicon.png'>
<link rel='stylesheet' href='/front/build/bundle.css'>

<script defer src='/front/build/bundle.js'></script>

<meta name="description" content="Your contact form ready in 10 seconds, 100% free. Get your contact enquiries by emails.">
{% endblock %}
