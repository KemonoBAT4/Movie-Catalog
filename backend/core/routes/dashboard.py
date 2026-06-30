
from ._common import *

dashboard_routes = Blueprint("dashboard", __name__)

@dashboard_routes.route("/home", methods=["GET", "POST"])
def dashboard_home():
    pass
# #enddef dashboard_home
