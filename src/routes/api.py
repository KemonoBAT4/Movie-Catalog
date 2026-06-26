
from ._common import *

api_routes = Blueprint("api", __name__)

@api_routes.route("/home", methods=["POST"])
@get_parameters
def api_home(_headers=None, _body=None):
    return jsonify( { "status": True } )
# #enddef api_home

@api_routes.route("/library/search/<string:query>", methods=["GET", "POST"])
@get_parameters
@jwt_required
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
@jwt_required
def tmdb_film_seach_title(query: str, _headers=None, _body=None) -> typing.Any:
    adult : str = "true"
    page  : int = 1

    data: dict = movie_api_search(query=query, adult=adult, page=page)



