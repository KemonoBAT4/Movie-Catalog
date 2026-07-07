# core.routes._common

# flask imports
from flask import Blueprint, redirect, url_for, request, jsonify                     # type: ignore
from flask import render_template, send_from_directory                               # type: ignore
from flask_login import login_required                                               # type: ignore
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, set_access_cookies, unset_jwt_cookies
from sqlalchemy import and_, or_

# core imports
from core.models import *
from core.decorators import *

# other imports
import os
import typing
from enum import Enum
import datetime
import json



