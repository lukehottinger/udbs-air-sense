import serial
import requests

def makePost(sensor, value):
        r = requests.post("http://udbs-lukehottinger.rhcloud.com/values", data={'sensorID':sensor, '$
        print r.status_code, r.reason, sensor, value

ser = serial.Serial('/dev/ttyACM0', 57600)
while True :
    try:
        state = ser.readline()
        if state[0] == "t":
                makePost("t", state[1:])
        elif state[0] == "h":
                makePost("h", state[1:])
        elif state[0] == "p":
                makePost("p", state[1:])
        elif state[0] == "m":
                makePost("ch4", state[1:])
        elif state[0] == "l":
                makePost("lpg", state[1:])
        elif state[0] == "C":
                makePost("co", state[1:])
        elif state[0] == "L":
                makePost("lux", state[1:])
        else:
                pass
    except:
        pass
