# -*- coding: utf-8 -*-
"""
Created on Tue Jun  8 11:59:13 2021

@author: Deepak Mittal
"""
import pickle
import numpy as np

__model = None

def get_estimated_price(gender, age, rcode, occu, chcode, vintage, crprdt, acc, active):
    
    x=np.zeros(9)
    x[0]= gender
    x[1]=age
    x[2]=rcode
    x[3]=occu
    x[4]=chcode
    x[5]=vintage
    x[6]=crprdt
    x[7]=acc
    x[8]=active
    
    print(type(gender), type(age), type(acc), type(active))
    
    return __model.predict([x])[0]


def load_saved_artifacts():
    print("loading saved artifacts...start")

    global __model
    if __model is None:
        with open('./artifacts/Credit_card_lead_prediction.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")


if __name__ == '__main__':
    load_saved_artifacts()
    print(get_estimated_price(0,73,18,1,2,43,1,1022.592783,0))
