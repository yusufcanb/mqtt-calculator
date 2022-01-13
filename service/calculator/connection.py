import os


def get_mqtt_host():
    return os.environ.get("MQTT_BROKER_HOST", "localhost")


def get_mqtt_port():
    return int(os.environ.get("MQTT_BROKER_PORT", 1883))
