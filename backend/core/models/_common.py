
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

from sqlalchemy import ForeignKey, or_
from sqlalchemy.orm import backref, relationship

import bcrypt
import typing
import uuid
import datetime
from enum import Enum

from core.utils import *

db = SQLAlchemy()
