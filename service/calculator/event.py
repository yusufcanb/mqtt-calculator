import re
from .topic import CALCULATION_RESULT_TOPIC


def on_connect(mqttc, obj, flags, rc):
    print("Connected: " + str(rc))


def on_message(mqttc, obj, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))
    expression = msg.payload.decode("utf-8")
    if bool(re.match(r"([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)", expression)):
        try:
            result = eval(expression)
            mqttc.publish(CALCULATION_RESULT_TOPIC, str(result))
        except Exception as e:
            mqttc.publish(CALCULATION_RESULT_TOPIC, "#EVAL_ERR")
            mqttc.publish("calculator/error", str(e))
    else:
        mqttc.publish(CALCULATION_RESULT_TOPIC, "#INVALID_EXPRESSION")


def on_publish(mqttc, obj, mid):
    print("Published: " + str(mid))


def on_subscribe(mqttc, obj, mid, granted_qos):
    print("Subscribed: " + str(mid) + " " + str(granted_qos))


def on_log(mqttc, obj, level, string):
    print(string)
