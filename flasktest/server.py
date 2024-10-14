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
    return "Welcome to the Upload Service"

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    filename = secure_filename(file.filename)

    if filename.endswith('.csv'):
        try:
            file.save(filename)
            # Process CSV file (if needed)
            return "CSV uploaded and processed successfully!"
        except Exception as e:
            return f"Error processing CSV: {e}"
    elif filename.endswith('.jar'):
        try:
            file.save(filename)
            # Process JAR file (if needed)
            return "JAR file uploaded and processed successfully!"
        except Exception as e:
            return f"Error processing JAR: {e}"
    else:
        return "Invalid file format. Please upload a CSV or JAR file."

if __name__ == '__main__':
    app.run(debug=True)
