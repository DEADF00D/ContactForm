FROM python:3
COPY ./origin/requirements.txt /

RUN pip3 install -r /requirements.txt

RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime

COPY ./origin /app
COPY ./app /app/app
WORKDIR /app

RUN chmod +x gunicorn_starter.sh
ENTRYPOINT ["./gunicorn_starter.sh"]
