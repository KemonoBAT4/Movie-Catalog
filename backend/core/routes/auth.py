
from ._common import *

auth_routes = Blueprint("auth", __name__)

@auth_routes.route("/login", methods=["POST"])
@get_parameters
def auth_login(_headers=None, _body=None):

    username: str = _body.get("username", "")
    password: str = _body.get("password", "")

    user: "User | tuple" = User.login(
        username = username,
        password = password
    )

    if (isinstance(user, tuple)):
        return jsonify({"status": False, "message": user[1]}), 401
    # #endif

    # NOTE: default expire time
    token: str = create_access_token(identity = user.uname)
    response = jsonify( { "status": True } )

    set_access_cookies(response, token) # sets the cookie

    return response
# #enddef auth_login

@auth_routes.route("/register", methods=["POST"])
@get_parameters
def auth_register(_headers=None, _body=None):

    username: str = _body.get( "username", "" )
    email   : str = _body.get( "email"   , "" )
    name    : str = _body.get( "name"    , "" )
    surname : str = _body.get( "surname" , "" )
    password: str = _body.get( "password", "" )

    # NOTE: auto saves
    user: "User | tuple" = User.register(
        username = username,
        email    = email,
        name     = name,
        surname  = surname,
        password = password
    )

    if (isinstance(user, tuple)):
        return jsonify({"status": False, "message": user[1]}), 401
    # #endif

    # NOTE: default expire time
    token: str = create_access_token(identity = user.uname)
    response = jsonify( { "status": True } )

    set_access_cookies(response, token) # sets the cookie

    return response
# #enddef auth_register

@auth_routes.route("/logout", methods=["POST"])
@get_parameters
@jwt_required()
def auth_logout(_headers=None, _body=None):

    response = jsonify( { "status": True } )

    unset_jwt_cookies(response) # deletes the cookie

    return response
# #enddef auth_logout

@auth_routes.route("/me", methods=["GET"])
@get_parameters
@jwt_required()
def auth_me(_headers=None, _body=None):

    current_user_uname = get_jwt_identity()
    user : "User | None" = User.from_uname(uname = current_user_uname)

    if user is None:
        return jsonify({"status": False, "message": "User not found"}), 401
    # #endif

    return jsonify(user.to_dict()), 200
# #enddef auth_me


