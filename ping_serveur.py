import socket
from threading import Timer

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.bind(('', 4567))
print ("{} connected".format( address ))

while True:
        socket.listen(5)
        client, address = socket.accept()
        print ("{} connected".format( address ))

        response = client.recv(255)
        if response != "":
            print(response.decode())
            hote = "localhost"
            port = 5372
            socket.connect((hote, port))
            print ("Connection on {}".format(port))
            msg= "Pong"
            r = Timer(0.5, socket.send, (msg.encode()))
            socket.close()
