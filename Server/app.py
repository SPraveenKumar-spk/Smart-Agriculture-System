from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_ALLOW_ORIGINS'] = ['http://localhost:5173']
CORS(app)

@app.route("/")
def index():
    return "Hello WOrld"

@app.route('/api/predict',methods = ["POST"])
def get_data():
    return jsonify({"response": "ok"})

if __name__ == '__main__':
    app.run(debug=True)
