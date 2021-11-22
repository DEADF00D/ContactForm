# Easy and free contact form on your HTML page. No backend or JS required. :rocket:	:speech_balloon:

Create your form in seconds, add your collaborators emails, then add the given link to your page following this template:
```html
<form action="https://cform.rac-0.fr/f/" method="POST">
    ...
</form>
```

From now, every submission of this form, will redirect your users to a captcha validation then send emails to all your collaborators containing inputs and values.

## GDPR Compliant

We only store emails from collaborator.  
We don't store submitted inputs and values.

## Under the hood

ContactForm is a `Python` + `Flask` project.
The home page is a `Svelte` application.
Static pages are built using template engine `Jinja2`.
Database is `Sqlite` (for now)
