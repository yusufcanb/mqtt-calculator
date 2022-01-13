import os

CALCULATION_REQUEST_TOPIC = os.environ.get("CALCULATION_REQUEST_TOPIC", "calculator/calc")
CALCULATION_RESULT_TOPIC = os.environ.get("CALCULATION_RESULT_TOPIC", "calculator/result")
