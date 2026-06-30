
from system import *

host: str   = str (startup.config.get("App", "host"))
port: int   = int (startup.config.get("App", "port"))
debug: bool = bool(startup.config.get("App", "debug"))

if __name__ == "__main__":
    startup.app.run(
        host  = host ,
        port  = port ,
        debug = debug,
    )
# #endif
