import requests

def get_login_info_from_express():
    url = 'http://localhost:3000/api/login-info'  # Replace with the actual URL of your Express.js server
    response = requests.get(url)
    if response.status_code == 200:
        login_info = response.json()
        return login_info
    else:
        print(f'Error: {response.status_code}')
        return None

# Example usage
login_info = get_login_info_from_express()
print(login_info)
