from flask import Flask
from flask import jsonify
from flask import request
from mysql.connector import Error
from dotenv import load_dotenv
from flask_cors import CORS

import os
import mysql.connector

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
load_dotenv()

def create_connection(username, passw, hostname, dB):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=hostname,
            user=username,
            password=passw,
            database=dB

        )
        print('Connection to MySQL Workbench server successful')
    except Error as errorCode:
        print(f"The error {errorCode} has occurred")
    return connection

# execute queries directly to database
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print('Query executed successfully\n')
    except Error as e:
        print(f"The error as '{e}' occured")

# read queries from the database
def execute_read_query(connection, query):
    cursor = connection.cursor(dictionary=True)
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as e:
        print(f"The error '{e}' occured")  


#create connection
cnx = create_connection(
    os.getenv('USER_NAME'),
    os.getenv('PASSWORD'),
    os.getenv('HOST'),
    os.getenv('DATABASE')
)


#get all users
@app.route("/allUsers", methods=['GET'])
def hello_world():
    sql = """SELECT * FROM users; """
    users = execute_read_query(cnx, sql)
    print(users)
    return jsonify(users)
