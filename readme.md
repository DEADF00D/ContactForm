# Easy and free contact form on your HTML page. No backend or JS required. :rocket:	:speech_balloon:

### Now available on https://cform.rac-0.fr/

Perfect for landing pages, and static website hosted on Github Pages, or CDNs.  

Create your form in seconds, add your collaborators emails, then add the given link to your page following this template:
```html
<form action="https://cform.rac-0.fr/f/f1b47fb47685d4728d273437d196049e" method="POST">
    ...
</form>
```

From now, every submission of this form, will redirect your users to a ReCaptcha v2 validation then send emails to all your collaborators containing inputs and values.

## Now support

- Verify if collaborators emails does exist.
- Email consent validation of collaborators forms.
- Unsubscription from collaborators.
- ReCaptcha v2 validation of submission.

## GDPR Compliant

We only store emails from collaborator.  
We don't store submitted inputs and values.
Privacy policy is available through `iubenda`

## Under the hood

ContactForm is a `Python` + `Flask` project.  
The home page is a `Svelte` application.  
Static pages are built using template engine `Jinja2`.  
Database is `Sqlite` (for now)
