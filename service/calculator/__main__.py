import paho.mqtt.client as mqtt

from . import __version__

from . import event
from . import topic
from . import connection

if __name__ == "__main__":
    print("Calculator Service %s started" % __version__)

    mqttc = mqtt.Client()

    mqttc.on_message = event.on_message
    mqttc.on_connect = event.on_connect
    mqttc.on_publish = event.on_publish
    mqttc.on_subscribe = event.on_subscribe
    mqttc.on_log = event.on_log

    mqttc.connect(connection.get_mqtt_host(), connection.get_mqtt_port(), 60)
    mqttc.subscribe(topic.CALCULATION_REQUEST_TOPIC, 0)

    mqttc.loop_forever()
