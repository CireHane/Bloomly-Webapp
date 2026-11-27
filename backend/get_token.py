import os
from dotenv import load_dotenv
from supabase import create_client

# prints a fresh login token for the /docs Authorize button
# run:  python get_token.py [email] [password]

load_dotenv()

email = input("email: ") if len(os.sys.argv) < 2 else os.sys.argv[1]
password = input("password: ") if len(os.sys.argv) < 3 else os.sys.argv[2]

db = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_PUBLISHABLE_KEY"))
res = db.auth.sign_in_with_password({"email": email, "password": password})
print()
print(res.session.access_token)
