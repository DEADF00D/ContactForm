#!/bin/sh
gunicorn --chdir app --worker-class eventlet cform:app -w 1 --threads 2 -b 0.0.0.0:8000
