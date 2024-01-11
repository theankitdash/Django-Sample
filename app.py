from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Perform authentication logic here (check against the database, etc.)
    # For demonstration purposes, let's assume a simple check.
    if username == 'demo' and password == 'password':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__': 
    app.run(debug=True)
    