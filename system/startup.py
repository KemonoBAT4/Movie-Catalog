
# flask imports
from flask import Flask, jsonify, redirect, url_for                                                                 # type: ignore
from flask_cors import CORS                                                                                         # type: ignore
from flask_sqlalchemy import SQLAlchemy                                                                             # type: ignore
from flask_migrate import Migrate                                                                                   # type: ignore
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user              # type: ignore
from flask_bcrypt import Bcrypt                                                                                     # type: ignore
from flask_mail import Mail, Message                                                                                # type: ignore
from flask import current_app                                                                                       # type: ignore
from flask_jwt_extended import JWTManager                                                                           # type: ignore

# other imports
from pathlib import Path
from dotenv import load_dotenv

import os
import importlib
import secrets
import typing
import datetime

# local imports
from core.models import *
from core.configs import *

from core.routes import *
from src.routes import *

app: Flask = Flask(
    __name__,
    template_folder = "./templates",
    # static_folder = "./static"
)

load_dotenv()

cors: CORS = CORS(app)

login_manager: LoginManager = LoginManager()

login_manager.init_app(app)
login_manager.login_view = "auth.login"

@login_manager.user_loader
def load_user(user_id: int) -> "User | None":
    return User.query.get(int(user_id))
# #enddef load_user

try:
    app.config["MAIL_SERVER"]         = str(config.get("Mail", "MAIL_SERVER"))
    app.config["MAIL_PORT"]           = str(config.get("Mail", "MAIL_PORT"))
    app.config["MAIL_USE_TLS"]        = str(config.get("Mail", "MAIL_USE_TLS"))
    app.config["MAIL_USERNAME"]       = str(config.get("Mail", "MAIL_USERNAME"))
    app.config["MAIL_PASSWORD"]       = str(config.get("Mail", "MAIL_PASSWORD"))
    app.config["MAIL_DEFAULT_SENDER"] = str(config.get("Mail", "MAIL_DEFAULT_SENDER"))

except Exception as e:
    pass
# #endtry

mail: Mail = Mail(app)

app.config["SECRECT_KEY"]              = os.getenv("JWT_SECRECT_KEY")
app.config["JWT_SECRET_KEY"]           = os.getenv("JWT_SECRECT_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(days=30)

jwt: JWTManager = JWTManager(app)

app.config["SQLALCHEMY_DATABASE_URI"] = str(config.get("Database", "SQLALCHEMY_DATABASE_URI"))

db.init_app(app)

host: str = str(config.get("App", "host"))
port: int = int(config.get("App", "port"))

debug: bool = bool(config.get("App", "debug"))


#region    ---------------- blueprints ---------------- #

app.register_blueprint(auth_routes     , url_prefix = "/auth")
app.register_blueprint(dashboard_routes, url_prefix = "/dashboard")

app.register_blueprint(api_routes      , url_prefix = "/api")

#endregion ---------------- blueprints ---------------- #


# with app.app_context():
#     db.create_all()
# # #endwith

if __name__ == "__main__":
    app.run(
        host  = host,
        port  = port,
        debug = debug
    )
# #endif
