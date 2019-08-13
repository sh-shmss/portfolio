from flask import Flask, request
from flask_cors import CORS
import joblib
import json


app = Flask(__name__)

CORS(app)

loaded_model = joblib.load('language_detector.pkl')
target_names = ['Arabic', 'German', 'English', 'Spanish', 'French', 'Italian',
                'Japanese', 'Dutch', 'Polish', 'Portugese', 'Russian']


class Text:
    def __init__(self, language):
        self.language = None


@app.route("/")
def hello():
    return 'Hellow, World!'


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
    app.run(host='0.0.0.0', debug=True)