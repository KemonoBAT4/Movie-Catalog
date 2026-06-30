
from ._common import *

# NOTE
# TODO: check if this is correctly implemented
def api_response(func):

    @wraps(func)
    def wrapper(*args, **kwargs):
        response: typing.Any = func(*args, **kwargs)
        result: typing.Any = jsonify({
            "status" : True, # TODO: implement this
            "version": "", # TODO: implement this
            "data"   : response
        })

        return result
    # #enddef wrapper

    return wrapper
# #enddef api_response

def get_parameters(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        method = request.method

        body  = None
        files = None
        form  = None

        arguments = request.args

        if method == "POST":
            body  = request.get_json()
            files = request.files
            form  = request.form
        elif method == "GET":
            arguments  = request.args
        # #endif

        return func(
            *args,
            **kwargs,
            _args  = arguments,
            _body  = body,
            _files = files,
            _form  = form
        )
    # #enddef

    return wrapper
# #enddef

# NOTE: exmaple of api response
# {
#     "status":
#     "version":
#     "data": {
#         # THE ACTUAL RESPONSE
#     }
# }