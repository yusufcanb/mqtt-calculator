FROM eclipse-mosquitto:1.6.15

COPY mosquitto.conf /mosquitto/config/mosquitto.conf

EXPOSE 1883 9001

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["/usr/sbin/mosquitto", "-c", "/mosquitto/config/mosquitto.conf"]