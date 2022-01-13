FROM python:3.10-slim

WORKDIR /opt/service
COPY . /opt/service

RUN pip install -r requirements.txt

CMD ["python", "-u", "-m", "calculator"]