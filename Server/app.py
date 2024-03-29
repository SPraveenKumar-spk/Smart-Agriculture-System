from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder
import joblib
import numpy as np
app = Flask(__name__)
app.config['CORS_ALLOW_ORIGINS'] = ['http://localhost:5173']
CORS(app)

Cropmodel = joblib.load("Crop.pkl")
scaler = joblib.load("Scaling.pkl")
sc = joblib.load("Standard.pkl")
encoder = LabelEncoder()
Fertimodel  = joblib.load("fertilizer.pkl")
@app.route("/")
def index():
    return "Hello WOrld"

def recommendation(N,P,k,temperature,humidity,ph,rainfal):
    features = np.array([[N,P,k,temperature,humidity,ph,rainfal]])
    transformed_features = scaler.fit_transform(features)
    transformed_features = sc.fit_transform(transformed_features)
    prediction = Cropmodel.predict(transformed_features).reshape(1,-1)
    
    return prediction[0] 
@app.route('/api/predict',methods = ["POST"])
def get_data():
    try:
        data = request.json
        feature_values = [data.get('nitrogen'), data.get('phosphorous'), data.get('potassium'),
                          data.get('temperature'), data.get('humidity'), data.get('ph'), data.get('rainfall')]
        prediction = recommendation(*feature_values)
        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                     8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                     14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                     19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}
        if prediction[0] in crop_dict:
            crop = crop_dict[prediction[0]]
            return jsonify({"crop": crop})
        else:
            return jsonify({"error": "Unable to recommend a proper crop for this environment"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def fertirecommend(Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous):
    features=np.array([[Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous]])
    print(features)
    features[4] = encoder.fit_transform(features[4])
    print(features)
    prediction=Fertimodel.predict(features)
    return prediction[0]

@app.route("/api/fertilizer",methods = ["POST"])
def fertilizer():
    try:
        data = request.json
        # print(data)
        # soil = data.get('soil')
        # soil_encoded = encoder.transform([soil])[0]  # Convert soil text to numerical
        # data['soil'] = soil_encoded
        # print(data['soil'])
        # data['crop']=encoder.fit_transform(data['crop'])
        # print(data)
        feature_values = []
        for value in data.values():
            feature_values.append(value)
        print(feature_values)
        # feature_values = [data.get('temperature'), data.get('humidity'), data.get('potassium'),
        #                     data.get('moisture'), data.get('soil'), data.get('crop'), data.get('nitrogen'),data.get("potassium"),data.get("phosphorous")]
        prediction = fertirecommend(*feature_values)
        fertilizer_dict = {0:'10-26-26 ',1:'14-35-14',2:'17-17-17',3:'20-20 ',4:'28-28',5:'DAP ',6:'Urea'}
        print(prediction)
        if prediction[0] in fertilizer_dict:
                fertilizer = fertilizer_dict[prediction[0]]
                return jsonify({"fertilizer": fertilizer})
        else:
            return jsonify({"error": "Unable to recommend a proper crop for this environment"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
# @app.route("/api/yield",methods = ["POST"])
# def YieldPredict():
#     data = request.json
#     return 

if __name__ == '__main__':
    app.run(debug=True)
