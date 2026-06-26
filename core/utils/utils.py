
import os
import configparser
import sys
import typing
import uuid
import secrets

import requests
import json

from core.configs import config

ROOT_PATH: str = os.path.join((os.path.dirname(os.path.abspath(__file__))), "..", "..")

NoneType = type(None)

def generate_secret_key() -> str:
    """
    #### DESCRIPTION:
    Generates a secret key for the application.

    #### PARAMETERS:
    - no parameters required

    #### RETURN:
    - no return
    """

    secret: str = secrets.token_hex(32)
    return secret
# #enddef _generateSecretKey

def get_class_repr(classobject: typing.Any, description: str) -> str:
    return f"<{classobject.__name__} {description}>"
# #enddef get_class_repr

def generate_uuid() -> str:
    generated_uuid: str = uuid.uuid4().hex
    return generated_uuid
# #enddef generate_uuid

def movie_api_search(
    query : str                                      ,
    adult : typing.Literal["true", "false"] = "false",
    page  : int                             = 1      ,
) -> dict:
    """
    #### DESCRIPTION:
    Search for movies in the TMDB API.

    #### PARAMETERS:
    - query (str): The search query.
    - adult (str): Whether to include adult content in the search results: accepted values: "true" or "false".
    - page (int): The page number of the search results.

    #### RETURNS:
    - dict -> the response from the TMDB API
    """

    url: str = f"/search/movie?query={query}&include_adult={adult}&language=en-US&page={page}"
    return _movie_api_encapsulate_request(url=url)
# #enddef movie_api_search


#region    -------------------------- MOVIE API REQUESTS -------------------------- #

def _movie_api_encapsulate_request(url: str, method: str = "GET") -> dict:

    access_token: str = str(config.get("Database", "access_token"))

    headers: dict = {
        "accept"        : "application/json",
        "Content-Type"  : "application/json;charset=utf-8",
        "Authorization" : f"Bearer {access_token}"
    }

    response: dict = _movie_api_request(url=url, method=method, headers=headers)
    return response
# #enddef movie_api_encapsulate_request

def _movie_api_request(
    url     : str         ,
    method  : str  = "GET",
    headers : dict = {}   ,
    body    : dict = {}   ,
) -> dict:

    base_url: str  = config.get("Api", "base_url")
    response: dict = {}


    if (method == "GET"):
        response = requests.get(base_url + url, headers=headers)

        data     = json.loads(response.text)
        response = data.get("results", {})
    # #endif

    return response
# #enddef movie_api_request

#endregion -------------------------- MOVIE API REQUESTS -------------------------- #
