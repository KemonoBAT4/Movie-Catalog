
from ._common import *

dashboard_routes = Blueprint("dashboard", __name__)

@dashboard_routes.route("/home", methods=["GET", "POST"])
def auth_login():
    pass
# #enddef auth_login
