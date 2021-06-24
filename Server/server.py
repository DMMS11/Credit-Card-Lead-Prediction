# -*- coding: utf-8 -*-
"""
Created on Mon Jun  7 21:25:25 2021

@author: Deepak Mittal
"""

from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():

    gender0 = int(request.form['gender'])
    age0 =  float(request.form['age'])
    rcode0 = float(request.form['rcode'])
    occu0 = int(request.form['occu'])
    chcode0 = int(request.form['chcode'])
    vintage0 = float(request.form['vintage']) 
    crprdt0 = int(request.form['crprdt'])
    acc0 = float(request.form['acc'])
    active0 =int(request.form['active'])
    
    
    #here I used Int for util.getmethod for numpy.int64 dtype as "Object of type 'int64' is not JSON serializable"
    response = jsonify({
        'credit_lead': int(util.get_estimated_price(gender0, age0, rcode0, occu0, chcode0, vintage0, crprdt0, acc0, active0))
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For credit card lead prediction...")
    util.load_saved_artifacts()
    app.run()