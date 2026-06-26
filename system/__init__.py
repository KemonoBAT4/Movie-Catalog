
import configparser
import os
import importlib
import pkgutil
import sys

from pathlib import Path
from flask_mail import Mail
from flask import Flask, current_app

from core.models.base import BaseModel
from . import startup

app : Flask = startup.app
mail: Mail  = startup.mail



