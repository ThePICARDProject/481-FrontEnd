from flask import Flask, request
import pandas as pd
from flask_cors import CORS, cross_origin
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()

def index():
    return

@app.route('/upload', methods=['POST'])
def upload_csv():
    file = request.files['file']
    if file.filename.endswith('.csv'):
        try:
            file.save(file.filename)
            return "CSV uploaded and processed successfully!"
        except Exception as e:
            return f"Error processing CSV: {e}"
    else:
        return "Invalid file format. Please upload a CSV file."


if __name__ == '__main__':
    app.run(debug=True)