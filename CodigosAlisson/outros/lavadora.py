import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)

state = True

# Liga e desliga o pino 

GPIO.output(23,True)
time.sleep(0.2)
GPIO.output(23,False)


