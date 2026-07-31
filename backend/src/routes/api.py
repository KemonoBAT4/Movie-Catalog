
from ._common import *

api_routes = Blueprint("api", __name__)

@api_routes.route("/home", methods=["POST"])
@get_parameters
def api_home(_headers=None, _body=None):
    return jsonify( { "status": True } )
# #enddef api_home

@api_routes.route("/library/search/<string:query>", methods=["GET", "POST"])
@get_parameters
@jwt_required()
def api_library_search(query: str, _headers=None, _body=None) -> typing.Any:
    """
    #### DESCRIPTION:
    Search for movies and TV shows in the library.

    #### PARAMETERS:
    - query (str): The search query.

    #### RETURN:
    - json: A JSON object containing the search results.
    """

    movie_result: list[Movie] = (
        Movie.query.filter(
            sa.or_(
                Movie.title.contains(query),
                Movie.original_title.contains(query)
            )
        ).order_by(
            Movie.release_date.desc()
        )
    ).all()

    tv_show_result: list[TVShow] = (
        TVShow.query.filter(
            sa.or_(
                TVShow.title.contains(query),
                TVShow.original_title.contains(query)
            )
        ).order_by(
            TVShow.release_date.desc()
        )
    ).all()

    return jsonify(
        {
            "movie_list"   : [movie.to_dict()   for movie   in movie_result  ],
            "tv_show_list" : [tv_show.to_dict() for tv_show in tv_show_result]
        }
    )
# #enddef api_library_search

@api_routes.route("/tmdb/film/search/title/<string:query>", methods=["GET", "POST"])
@get_parameters
@jwt_required()
def tmdb_film_seach_title(query: str, _headers=None, _body=None) -> typing.Any:
    adult : str = "true"
    page  : int = 1

    data: dict = movie_api_search(query=query, adult=adult, page=page)
# #enddef tmdb_film_seach_title

@api_routes.route("/favourites", methods=["GET", "POST"])
# @get_parameters
# @jwt_required()
def get_favourites():
    return jsonify(
        [
            {
                "title": "Test Favoriti 1",
                "posterUrl": "https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif",
                "rating": "4.4"
            },
            {
                "title": "Test Favoriti 2",
                "posterUrl": "https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif",
                "rating": "4.4"
            },
            {
                "title": "Test Favoriti 3",
                "posterUrl": "https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif",
                "rating": "4.4"
            },
            {
                "title": "Test Favoriti 4",
                "posterUrl": "https://s3.zerochan.net/Zhuang.Fangyi.240.4691020.avif",
                "rating": "4.4"
            }
        ]
    )
# #enddef get_favourites

@api_routes.route("/recently-added", methods=["GET", "POST"])
def recently_added():
    return get_favourites()
# #enddef recently_added

@api_routes.route("/watch/<string:uname>/details", methods=["GET", "POST"])
def movie_details(uname: str):
    return jsonify({
        "id": uname,
        "title": "...",
        "description": "...",
        "streamUrl": f"/watch/{uname}/stream"  # punta al secondo endpoint
    })
# #enddef watch_movie


@api_routes.route("/watch/<string:uname>/stream", methods=["GET", "POST"])
def watch_movie(uname: str):
    return send_file(path_or_file="D:\documents\projects\moviecatalog\Moon Artist - Echo.mp4", mimetype="video/mp4", conditional=True)
# #enddef watch_movie
