from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from sklearn.externals import joblib
import json

loaded_model = joblib.load('language_detector.pkl')
target_names = ['Arabic', 'German', 'English', 'Spanish', 'French', 'Italian',
                'Japanese', 'Dutch', 'Polish', 'Portugese', 'Russian']

app = Flask(__name__)
api = Api(app)

CORS(app)


@app.route("/")
def hello():
    return {'text': 'Hellow, World!'}


class Text:
    def __init__(self, language):
        self.language = language


@app.route("/prediction", methods=['GET', 'POST'])
def predict():
    data = request.data
    sentence = json.loads(data)
    sentence = sentence['text']
    result = loaded_model.predict([sentence])
    prediction = target_names[result[0]]
    print(prediction)
    Text.language = prediction
    return data


@app.route("/result")
def result():
    return {'text': Text.language}


if __name__ == '__main__':
    app.run(port=5002, debug=True)
