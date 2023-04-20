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

def findOcurrences(string, char):
    return [i for i, x in enumerate(string) if x == char]

def addSingleQuote(var):
    indexes = findOcurrences(var, "'")
    print('62', var, indexes)
    if len(indexes) > 0:
        # for quote in indexes:
        #     var = f"{var[:quote]}\{var[quote:]}"
        ch = r"\'"
        var = var.replace("'", ch)
        print(var)
    return var


#get all users
@app.route("/allUsers", methods=['GET'])
def getUsers():
    sql = """SELECT * FROM users; """
    users = execute_read_query(cnx, sql)
    print(users)
    return jsonify(users)

@app.route("/addUser", methods=['Post'])
def addUser():
    request_data = request.get_json()
    print(request_data)
    firstName = addSingleQuote(request_data['FirstName'])
    middleName = addSingleQuote(request_data['MiddleName'])
    lastName = addSingleQuote(request_data['LastName'])
    Choice1, Choice2, Choice3, Choice4, Choice5, Choice6, Choice7, Choice8, Choice9, Choice10 = addSingleQuote(request_data['Choice1']), addSingleQuote(request_data['Choice2']), addSingleQuote(request_data['Choice3']), addSingleQuote(request_data['Choice4']), addSingleQuote(request_data['Choice5']), addSingleQuote(request_data['Choice6']), addSingleQuote(request_data['Choice7']), addSingleQuote(request_data['Choice8']), addSingleQuote(request_data['Choice9']), addSingleQuote(request_data['Choice10'])
    sql = f"""INSERT INTO Users(`FirstName`, `MiddleName`, `LastName`, `Restaurants`) VALUES("{firstName}", "{middleName}", "{lastName}", JSON_ARRAY("{Choice1}", "{Choice2}", "{Choice3}", "{Choice4}", "{Choice5}", "{Choice6}", "{Choice7}", "{Choice8}", "{Choice9}", "{Choice10}"))"""
    print('94', sql)
    execute_query(cnx, sql)
    return 'New User Added'