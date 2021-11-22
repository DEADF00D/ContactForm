<script>
import { fade } from 'svelte/transition';

let createFormSubmitted = false;
let createFormDisabled = true;
let privacyPolicyChecked = false;

let linkInputElement;

let result = {};
let emails = [];


function update(){
	createFormDisabled = false;

	if(emails.length == 0){
		createFormDisabled = true;
		return;
	}

	for(var i in emails){
		if(!(emails[i].valid)){
			createFormDisabled = true;
			return;
		}
	}
}

function addEmailClick(){
	emails = [...emails, { email: '', valid: false, error: '' }];
	update();
}

function deleteEmailClick(id){
	emails = [...emails.slice(0, id), ...emails.slice(id + 1)];
	update();
}

function copyLink(){
	linkInputElement.select();
	document.execCommand("copy");
	gtag('send', 'event', 'form', 'copylink', result.token);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function emailInput(id){
	emails[id].valid = validateEmail(emails[id].email);
	update();
}

function submitEmails(){
	if(emails.length == 0){
		return 0;
	}

	createFormSubmitted = true;
	fetch('/new', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			emails: emails
		})
	}).then(function(res){
		return res.json();
	}).then(function(data){
		createFormSubmitted = false;
		result = data;
		gtag('send', 'event', 'form', 'create', result.token);
	});
}
</script>

<svelte:head>
	<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6197c01f7d727a63"></script>
	<script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>

<div class="container-fluid vh-100">
	<!--
	<div class="godown-icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
		  	<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
		</svg>
	</div>
	-->

    <div class="row">
        <div class="col bg-light main">
            <div class="p-5 m-4">
                <h1 class="display-4">Your contact form</h1>
                <h2 class="display-5">free & ready in 10 seconds...</h2>
                <p class="my-5">Set emails you want to be notified on, then click on <code class="text-success">Create form</code>.<br/>Once it is created, you will get a link your form should point to.<br/>Just put it in your form as template code show it, and you're done !</p>

				<div class="form-group my-4">
					{#if result.success }
					<div class="alert alert-success">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
							  	<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
							</svg>
							{ result.success }
						</span>
					</div>
					{/if}
					{#if result.error }
					<div class="alert alert-danger">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
							  	<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
							</svg>
							{ result.error }
						</span>
					</div>
					{/if}

                    <button type="button" class="btn btn-primary btn-lg" on:click = { addEmailClick }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Add email
                    </button>
					{#if emails.length == 0 }
					<div class="my-4 ms-3">
						<i class="text-muted">
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-90deg-up ml-3" viewBox="0 0 16 16">
							  	<path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
							</svg>
							Start by clicking here
						</i>
					</div>
					{:else}
                    <div>
						{#each emails as e,id }
						<div class="input-group my-4" in:fade>
			                <input type="email" class="form-control form-control-lg" class:is-invalid = { !(emails[id].valid) } bind:value = { emails[id].email } on:input = { () => emailInput(id) } placeholder="Your collaborator email">
							<button type="button" class="btn btn-outline-danger btn-delete" on:click = { () => deleteEmailClick(id) }>
			                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
			                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
			                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
			                    </svg>
			                    delete
			                </button>
							{#if emails[id].error }
							<div class="invalid-feedback">
						        { emails[id].error }
						    </div>
							{/if}
			            </div>
						{/each}
                    </div>
					{/if}
					<div class="form-group mb-3">
						<div class="form-check">
						  	<input class="form-check-input" type="checkbox" value="" id="privacyPolicyCheckbox" bind:checked = { privacyPolicyChecked }>
						  	<label class="form-check-label" for="privacyPolicyCheckbox">
						    	I Agree to Privacy Policy
						  	</label>
						</div>
					</div>
                    <div class="form-group mb-3">
                        <button class="btn btn-success btn-lg" class:disabled = { createFormSubmitted || createFormDisabled || privacyPolicyChecked == false } disabled = { createFormSubmitted || emails.length == 0 || emails[0] == '' } on:click = { submitEmails }>
							{#if createFormSubmitted }
							<div class="spinner-border text-light" style="width:1em; height:1em;" role="status">
							  	<span class="visually-hidden">Loading...</span>
							</div>
							{:else }
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                            </svg>
							{/if}
                            Create form
                        </button><br/>
                    </div>
					<div class="form-group">
						{#if createFormSubmitted}
						<small class="text-success mt-3">We're verifying your emails. This can take some time.</small>
						{/if}
					</div>
				</div>

				<div class="mt-5 pt-3">
					<div class="addthis_inline_follow_toolbox_1x8t"></div>
				</div>

				<div class="mt-4">
					<a href="https://www.iubenda.com/privacy-policy/40666792" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
				</div>

				<div class="mt-4">
					<small>Now open-source !</small><br/>
					<a class="github-button" href="https://github.com/DEADF00D/ContactForm" data-icon="octicon-star" data-size="large" aria-label="Star DEADF00D/ContactForm on GitHub">Star</a>
				</div>

				<div class="mt-4">
					<p><small class="text-muted">Copyright © Didelot Maurice-Michel, All rights reserved.</small></p>
					<p><small class="text-muted">VERSION 2.0.</small></p>
				</div>
            </div>
        </div>
		{#if result.token }
        <div class="col vh-100" transition:fade>
            <div class="p-5 m-4">
                <h3 class="display-4">Your beautiful new form</h3>
				<h2 class="display-5 mb-5">now ready !</h2>
				<div clas="my-5">
					<p>Emails has been sent to your collaborator addresses to verify their consent.<br/>Remember to click on the link provided in theses mail in order to receive futur submissions on this address.</p>
				</div>
                <div class="my-5">
                    <input type="text" class="form-control form-control-lg" value="https://cform.rac-0.fr/f/{ result.token }" readonly bind:this = { linkInputElement } />
					<button type="button" on:click = { copyLink } class="mt-2 btn btn-sm btn-outline-primary">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
						  	<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
						  	<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
						</svg>
						Copy
					</button>
                </div>
                <div class="my-5">
                    <p>Use it in your website code like this.<br/>Remember to add your inputs, to set the method as <code>POST</code> and that you can use as much formatting / styling as you want.</p>
                </div>
                <pre><code>&lt;form action="https://cform.rac-0.fr/f/{ result.token }" method="POST"&gt;
    ...
&lt;/form&gt;</code></pre>
                <div class="my-5">
                    <h5>Thank you for using, and see you soon !</h5>
                </div>
            </div>
        </div>
		{/if}
    </div>
</div>
