
from pathlib import Path
import configparser

config_path = Path(__file__).parent / "application.cfg"

config = configparser.ConfigParser()
config.read(config_path)
